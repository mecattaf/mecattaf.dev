+++
date = "2024-02-20T00:00:00+02:00"
title = "Status update, February 2024"
slug = "status-update-61"
lang = "en"
tags = ["status update"]
+++

Hi! February is FOSDEM month, and as usual I've come to Brussels to meet with a
lot of other FOSS developers and exchange ideas. I like to navigate between the
buildings and along the hallways to find nice people to discuss with. This
edition I've been involved in the new modern e-mail devroom and I've given a
[talk about IMAP] with Damian, a fellow IMAP library maintainer and organizer
of this devroom. The whole weekend was great!

In wlroots news, I've worked on multi-connector atomic commits. Right now,
wlroots sequentially configures outputs, one at a time. This is slow and makes
it impossible to properly handle GPU limitations such as bandwidth: if the GPU
cannot drive two outputs with a 4k resolution, we'll only find out after the
first one has been lit up. As a result we can't properly implement fallbacks
and this results in black screens on some setups. In particular, on Intel some
users need to set `WLR_DRM_NO_MODIFIERS=1` to have their multi-output setup
work correctly. The multi-connector atomic commit work is the first step to
resolve these situations and also results in faster modesets. The second step
will be to add fallback logic to use a less bandwidth-intensive scanout buffer
on modeset.

While working on the wlroots DRM backend code, I've also taken the opportunity
to cleanup the internals and skip unnecessary modesets when switching between
VTs. <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>1</kbd> should be faster now! I've
also tried to resurrect the [ext-screencopy-v1] protocol, required for
capturing individual windows. I've pushed a new version and reworked the
wlroots implementation, hopefully I can find some more time next month to
continue on this front.

Sway 1.9-rc4 has been recently released, my reading of the tea leaves at my
disposal indicates that the final release may be shipped soon. Sway 1.9 will
leverage the new wlroots rendering API, however it does not include the huge
scene-graph rework that Alexander has pushed forward in the last year or so.
Sway 1.10 will be the first release to include this major overhaul and all the
niceties it unlocks. And Sway 1.10 will also _finally_ support input method
popups (used for CJK among other things) thanks to efforts by Access and Tadeo
Kondrak.

The <abbr title="New Project of the Month">NPotM</abbr> is [sinwon], a simple
OAuth 2 server for small deployments. I've long been trying to find a good
solution to delegate authentication to a single service and provide
single-sign-on for my personal servers. I've come to like OAuth 2 because it's
a standard, it's not tied to another use-case (like IMAP or SMTP is), and it
prevents other services from manipulating user passwords directly. sinwon
stores everything in a SQLite database, and it's pretty boring: no fancy
cryptography usage for tokens, no fancy cloud-grade features. I like boring.
sinwon has a simple UI to manage users and OAuth clients (sometimes called
"apps"). Still missing are refresh tokens, OAuth scopes, an audit log, personal
access tokens, and more advanced features such as TOTP, device authorization
grants and mTLS. Patches welcome!

I've continued my work to make it easier to contribute to the SourceHut
codebase. Setting up PGP keys is now optional to run a SourceHut instance,
and a local S3-compatible server (such as minio) can be used without TLS.
Thorben Günther has added paste.sr.ht to [sr.ht-container-compose]. I'm also
working on making services use meta.sr.ht's GraphQL API instead of maintaining
their own copy of the user's profile, but more needs to be done there.

And now for the random collection of smaller updates… The soju IRC bouncer and
the goguma IRC client for mobile devices now support file uploads: no need to
use an external service anymore to share a screenshot or picture in an IRC
conversation. Conrad Hoffmann and Thomas Müller have added support for multiple
address books to the go-webdav library, as well as creating/deleting address
books and calendars. I've modernized the FreeDesktop e-mail server setup with
SPF, DKIM and DMARC. KDE developers have contributed a new layer-shell minor
version to support docking their panel to a corner of the screen.

That's all for now, see you next month!

[talk about IMAP]: https://spacepub.space/w/p/7UMbsDaTTt5o1u63kTTd1X?playlistPosition=5&resume=true
[sinwon]: https://sr.ht/~emersion/sinwon/
[sr.ht-container-compose]: https://git.sr.ht/~emersion/sr.ht-container-compose
[ext-screencopy-v1]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3457
