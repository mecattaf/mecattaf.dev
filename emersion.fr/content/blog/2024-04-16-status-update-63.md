+++
date = "2024-04-16T00:00:00+02:00"
title = "Status update, April 2024"
slug = "status-update-63"
lang = "en"
tags = ["status update"]
+++

Hi!

The X.Org Foundation results are in, and I'm now officially part of the Board
of Directors. I hope I can be of use to the community on more organizational
issues! Speaking of which, I've spent quite a bit of time dealing with Code of
Conduct matters lately. Of course I can't disclose details for privacy, but
hopefully our actions can gradually improve the contribution experience for
FreeDesktop.Org projects.

New extensions have been merged in wayland-protocols. [linux-drm-syncobj-v1]
enables explicit synchronization which is a better architecture than what we
have today (implicit synchronization) and will improve NVIDIA support.
[alpha-modifier-v1] allows Wayland clients to set an alpha channel multiplier
on its surfaces, it can be used to implement effects such as fade-in or fade-out
without redrawing, and can even be offloaded to KMS. The tablet-v2 protocol
we've used for many years [has been stabilized][stable-tablet-v2].

In other Wayland news, [a new API][conn-buf-size] has been added to dynamically
resize libwayland's internal buffer. By default, the server-side buffer size is
still 4 KiB but the client-side buffer will grow as needed. This should help
with bursts (e.g. long format lists) and high poll rate mice. I've added a
[new wayland-scanner mode][scanner-enum-header] to generate headers with only
enums to help libraries such as wlroots which use these in their public API.
And I've sent an announcement for the next Wayland release, it should happen at
the end of May if all goes well.

With the help of Sebastian Wick, [libdisplay-info] has gained support for more
bits, in particular DisplayID type II, III and VII timings, as well as CTA
Video Format Preference blocks, Room Configuration blocks and Speaker Location
blocks. I've worked on [libicc] to finish up the parser, next I'd like to add
the math required to apply an ICC profile. [gamja] now has basic support for
file uploads (only when pasting a file for now) and hides no-op nickname
changes (e.g. from "emersion" to "emersion_" and back).

See you next month!

[libicc]: https://gitlab.freedesktop.org/emersion/libicc
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[gamja]: https://sr.ht/~emersion/gamja
[conn-buf-size]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/188
[scanner-enum-header]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/312
[linux-drm-syncobj-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/90
[alpha-modifier-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/287
[stable-tablet-v2]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/284
