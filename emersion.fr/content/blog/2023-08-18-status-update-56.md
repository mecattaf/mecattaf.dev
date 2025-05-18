+++
date = "2023-08-18T00:00:00+02:00"
title = "Status update, August 2023"
slug = "status-update-56"
lang = "en"
tags = ["status update"]
+++

Hi!

Let me start this status update with an announcement: from 2023-08-28 to
2023-10-01 (!), I will be on leave, so I will have reduced availability. Don't
be surprised if I miss some e-mails, and feel free to ping me again (more
generally, please do ping me if I forget about a discussion — that also tends
to happen when I'm not on leave). During that time, I will be traveling to
Korea and Japan. If you live there and want to say hello, please reach out! :)

This month, Rose has continued working on wlroots frame scheduling. After a
fair amount of discussion, she's found a [pretty nice API design][wlroots!4307].
She still needs to address and cleanup a few things, but that merge request is
on a good track! I've also merged a new API to embed a compositor inside a
Wayland client, and sent patches to remove some cases where we were waiting for
a reply from Xwayland in a blocking fashion.

My kernel patch for signaling an eventfd from a `drm_syncobj` has been merged
(see last month's post for more details), and I've reviewed a patch from Erik
Kurzinger to import a `sync_file` into a `drm_syncobj` timeline, which was
possible before but awkward (it required 3 IOCTLs and a temporary binary
`drm_syncobj`). As usual, I've sent a few kernel documentation patches as well.

I've released a new version of [Cage], the Wayland kiosk compositor. Cage now
uses the latest wlroots release, implements a bunch of new protocols and
leverages wlroots' scene-graph API.

The <abbr title="New Project of the Month">NPotM</abbr> is [go-mls], a Go
library for the [Messaging Layer Security] protocol. It's a shiny new
end-to-end encryption framework for messaging protocols (similar to the one
used by e.g. Signal and Matrix). I wanted to figure out how it works, but
simply reading a 132-page RFC didn't seem fun enough, so I just tried
implementing it instead. I'm passing most of the official test vectors, still
missing a few things but overall not too far away from a proper implementation.
I've been discussing with a few folks about an IRCv3 extension for MLS, but
we're still at the very early stages on that front.

Speaking of IRCv3, the [pre-away] extension has been merged, so the away status
of [soju] users shouldn't blink anymore when the Goguma mobile client
synchronizes in the background. I've also submitted the [no-implicit-names]
extension for standardization. That extension reduces bandwidth usage for
clients who don't need to always maintain a list of all users in all channels.
This helps a lot with slow 3G connections in the countryside.

The <abbr title="Second New Project of the Month">SNPotM</abbr> is
[libdns/dnsupdate], a Go library for the venerable dynamic DNS UPDATE protocol
implemented by various authoritative name servers. The library conforms to an
interface shared with other (proprietary) libdns providers. I have more plans
in this area, but will keep that for a future blog post.

I've sent a [go-proxyproto patch][go-proxyproto#102] to add a helper to
configure an HTTP/2 server with PROXY protocol upgrade support. TLS ALPN is
needed to negotiate HTTP/2, so it's tricky to make work behind a reverse proxy
which terminates the TLS connection. This patch is basically part of [kimchi]
ripped off and put behind a nice API. This patch would be useful to add HTTP/2
support to [pages.sr.ht].

Last but not least, I've implemented tracker export for the todo.sr.ht GraphQL
API. delthas has added support for that in [hut]. Next up is support for import
in hut! I've also sent a whole bunch of bug fixes for sr.ht.

That's all for this month! I'm not sure I'll write a status update in
September, but will definitely do so in October.

[wlroots!4307]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4307
[Cage]: https://github.com/cage-kiosk/cage
[go-mls]: https://git.sr.ht/~emersion/go-mls
[Messaging Layer Security]: https://datatracker.ietf.org/doc/html/rfc9420
[pre-away]: https://github.com/ircv3/ircv3-specifications/pull/514
[soju]: https://soju.im
[no-implicit-names]: https://github.com/ircv3/ircv3-specifications/pull/527
[libdns/dnsupdate]: https://github.com/libdns/dnsupdate
[go-proxyproto#102]: https://github.com/pires/go-proxyproto/pull/102
[kimchi]: https://sr.ht/~emersion/kimchi
[pages.sr.ht]: https://srht.site
[hut]: https://sr.ht/~emersion/hut
