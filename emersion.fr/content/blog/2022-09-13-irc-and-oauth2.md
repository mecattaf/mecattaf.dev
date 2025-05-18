+++
date = "2022-09-13T00:00:00+02:00"
title = "IRC × OAuth 2.0"
slug = "irc-and-oauth2"
lang = "en"
tags = ["irc"]
+++

In the past few days I've been working on better integrating IRC with
OAuth 2.0. In a nutshell, my goal is to make IRC clients obtain a token by
interacting with an OAuth 2.0 server, and then use that token to authenticate
with the IRC server. This effort has resulted in various patches for
meta.sr.ht's OAuth 2.0 server, for the soju IRC bouncer and for the gamja &
goguma IRC clients.

## Motivation

My motivation is to improve chat.sr.ht's authentication. chat.sr.ht is a hosted
soju IRC bouncer for SourceHut users. The soju instance delegates
authentication to meta.sr.ht so that users can login with their SourceHut
credentials.

The status quo is not ideal:

- When connecting from an IRC client, users need to jump through hoops. They
  need to manually generate a personal access token and copy/paste it into the
  password field. This is especially annoying on mobile. Wouldn't it be nice to
  just click a button, fill the SourceHut login form that gets presented to
  you, and poof everything Just Works™?
- We maintain a soju fork (in the `srht` branch) with special patches to
  integrate with SourceHut. It's not the end of the world, but rebasing is
  never fun and error-prone, and it would be much nicer to be able to use
  vanilla soju.
- The access tokens expire after 1 year. When that happens, users are greeted
  with an error message and need to manually generate a new personal access
  token again. It would be nicer to automatically refresh the token if
  possible, and show up a login form if not. Similarly, it would be nice to
  revoke access tokens when a user logs out explicitly, instead of leaving
  behind unused tokens.

I'd like the solution to these problems to only use standardized APIs. That way
any client or server with similar needs can implement the same standards and
inter-operate with each other. For instance, one could add support for the
standards in a GTK IRC client and have it work with chat.sr.ht. One could setup
soju to use a GitLab instance as an OAuth server for authentication.

Before anybody complains about OAuth ruining IRC: this effort is just adding
new optional things clients can add support for if they want to. I expect OAuth
to be out-of-scope for many IRC clients and that's perfectly fine. The current
approach of passing a personal access token as the password will keep working.

Here is a video of the end result: user loads gamja, is asked confirmation by
SourceHut, then is redirected back straight to a ready-to-use gamja. The
experience on Goguma is similar.

<video src="https://l.sr.ht/lVg2.webm" controls></video>

## High-level overview

```
┌────────────────┐           ┌────────────────┐           ┌────────────────┐
│                │           │                │           │                │
│   IRC client   │           │   IRC server   │           │  OAuth server  │
│                │           │                │           │                │
│ (gamja/goguma) │           │     (soju)     │           │  (meta.sr.ht)  │
│                │           │                │           │                │
└───────┬────────┘           └───────┬────────┘           └────────┬───────┘
        │                            │                             │
        │                                                          │
        │              1. Fetch OAuth server matadata              │
        ├────────────────────────────────────────────────────────► │
        │ ◄────────────────────────────────────────────────────────┤
        │                                                          │
        │                                                          │
        │              2. Redirect user to login page              │
        ├────────────────────────────────────────────────────────► │
        │ ◄────────────────────────────────────────────────────────┤
        │                     3. Get back a code                   │
        │                                                          │
        │                                                          │
        │                                                          │
        │                4. Exchange code for a token              │
        ├────────────────────────────────────────────────────────► │
        │ ◄────────────────────────────────────────────────────────┤
        │                                                          │
        │                                                          │
        │       5. Authenticate      │                             │
        │          with token        │                             │
        ├──────────────────────────► │                             │
        │                            │        6. Check token       │
        │                            ├───────────────────────────► │
        │                            │ ◄───────────────────────────┤
        │                            │      7. Get back username   │
        │                            │                             │
        │ ◄──────────────────────────┤                             │
        │                            │                             │
        │                            │                             │
```

Here's a high-level overview of the interactions between the IRC client, the
IRC server and the OAuth server. The IRC client and servers interact via the
IRC protocol as usual, and they both interact with the OAuth server via HTTP.

1. The user asks the IRC client to connect to "chat.sr.ht". The client
   auto-discovers the OAuth server metadata to find out what the OAuth
   endpoints are and what features the server supports.
2. The client redirects the user to the OAuth server login page.
3. The user authenticates on the OAuth server login page (providing the
   username/password and possibly a one-time code). The OAuth server redirects
   back the user to the IRC client, with a code in the URL query parameters.
4. The client grabs the code from the URL query parameters, and exchanges it
   for a token.
5. The client connects to the IRC server and authenticates with the token.
6. soju checks that the token is valid by querying the OAuth server.
7. The OAuth server sends back the username associated with the token. soju
   uses that information to figure out which soju account should get selected.

Step 1 is optional: the alternative is to just hardcode all of the metadata
inside the client. OAuth servers require client developers to register a
client ID and client secret anyways, so it's necessary to hardcode some
metadata anyways (for now — more on that later).

## Implementation

All of the above uses standards described in RFCs. This means there are already
OAuth servers in the wild which support everything needed!

Step 1 uses _OAuth 2.0 Authorization Server Metadata_ ([RFC 8414]). An HTTP GET
request returns all of the data the client needs:

```
> curl https://chat.sr.ht/.well-known/oauth-authorization-server
{
	"issuer": "https://meta.sr.ht",
	"authorization_endpoint": "https://meta.sr.ht/oauth2/authorize",
	"token_endpoint": "https://meta.sr.ht/oauth2/access-token",
	"response_types_supported": ["code"],
	"grant_types_supported": ["authorization_code"],
	"introspection_endpoint": "https://meta.sr.ht/oauth2/introspect",
	"introspection_endpoint_auth_methods_supported": ["none"]
}
```

Readers familiar with OAuth will recognize that steps 2-4 are the usual OAuth
dance defined in [RFC 6749]. Nothing fancy here. The client redirects the
user to `https://meta.sr.ht/oauth2/authorize?client_id=XXX`. The OAuth server
redirects back the user to the client with a `?code=YYY` query parameter. The
client then exchanges the code for a token via an HTTP request:

```
> curl \
    --data-urlencode grant_type=authorization_code \
    --data-urlencode code=YYY \
    --data-urlencode client_id=XXX \
    https://meta.sr.ht/oauth2/access-token
{
	"access_token": "asdf"
}
```

Something worth noting is that for Goguma, the redirect URI is a bit special.
Since Goguma is a mobile app, the redirection at step 3 needs to navigate from
the user's web browser to Goguma. Following the recommendations in [RFC 8252],
Goguma leverages a private-use URI scheme: it sets the redirect URI to
`fr.emersion.goguma:/oauth2` (yes, it is a valid URI!). The web browser will
open Goguma when loading that URI.

Step 5 uses the [IRCv3 SASL] extension in combination with the SASL OAUTHBEARER
mechanism ([RFC 7628]). SASL PLAIN could've been used instead, but:

- SASL OAUTHBEARER allows the client to ensure that the IRC server supports
  OAuth tokens for authentication, instead of hoping for the best and showing a
  vague "authentication failed" error message to the user if this assumption
  turns out to be wrong.
- The SASL PLAIN RFC requires clients to specify a username, however at that
  point the client doesn't know the username, it only has a token. SASL
  OAUTHBEARER allows the client to omit the username.

Step 6 uses _OAuth 2.0 Token Introspection_ ([RFC 7662]). soju sends the token
to the OAuth server, and the server replies back with some useful information:

```
> curl --data-urlencode token=asdf https://meta.sr.ht/oauth2/introspect
{
	"active": true,
	"username": "emersion"
}
```

And that's enough for soju to associate the connection with the soju account
"emersion" and send back a success response to the client!

I have patches floating around for all of the projects previously mentioned:

- [soju](https://git.sr.ht/~emersion/soju/log/external-auth)
- [gamja](https://git.sr.ht/~emersion/gamja/log/oauth2)
- [goguma](https://git.sr.ht/~emersion/goguma/log/oauth2)
- [meta.sr.ht](https://lists.sr.ht/~sircmpwn/sr.ht-dev?search=from%3A%22Simon+Ser%22+oauth)

## Future plans

Once all of the above is properly plumbed, this should already be a nice step
forward! But there is also room for future improvements.

My patches currently don't handle well token expiration. Clients should at
least ask the user to re-authenticate again when a token expires. It would
be nice to handle the refresh token and automatically obtain a new access
token (would need to add refresh token support to meta.sr.ht).

Second, it's a bit annoying for client developers to register their app on
various OAuth servers. To remove that step, clients would need to dynamically
obtain a client ID and secret from the OAuth server. The _OAuth 2.0 Dynamic
Client Registration Protocol_ ([RFC 7591]) can be used for this purpose. I am
not sure how widely that RFC is implemented though.

Last, it would be best to avoid leaving behind some unused access tokens after
the user logs out. _OAuth 2.0 Token Revocation_ ([RFC 7009]) could be used by
clients to clear these tokens.

[RFC 6749]: https://www.rfc-editor.org/rfc/rfc6749.html
[RFC 8414]: https://www.rfc-editor.org/rfc/rfc8414.html
[RFC 7662]: https://www.rfc-editor.org/rfc/rfc7662.html
[RFC 7628]: https://www.rfc-editor.org/rfc/rfc7628.html
[RFC 8252]: https://www.rfc-editor.org/rfc/rfc8252.html
[draft-ietf-oauth-browser-based-apps-10]: https://www.ietf.org/archive/id/draft-ietf-oauth-browser-based-apps-10.html
[RFC 7591]: https://www.rfc-editor.org/rfc/rfc7591.html
[RFC 7009]: https://www.rfc-editor.org/rfc/rfc7009.html
[IRCv3 SASL]: https://ircv3.net/specs/extensions/sasl-3.1
