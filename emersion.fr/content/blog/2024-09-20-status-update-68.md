+++
date = "2024-09-20T00:00:00+02:00"
title = "Status update, September 2024"
slug = "status-update-68"
lang = "en"
tags = ["status update"]
+++

Hi!

Once again, this status update will be rather short due to limited time
bandwidth. I hope to be able to allocate a bit more time slots for my
open-source projects next month.

We're getting closer to a new Sway release (fingers crossed), with lots of help
from Kenny and Alexander to iron out the remaining bugs. We've just shipped
[wlroots 0.18.1] today (thanks to Simon Zeni for leading the backporting
efforts!). I've been expanding wlroots' explicit synchronization support by
adapting our multi-GPU logic, the Vulkan renderer and the libliftoff backend.
I've released [wayland 1.23.1] with some Clang and wayland-scanner fixes.
I've ported the [cage] kiosk compositor to wlroots 0.18. Last but not least,
I've [rewritten `makoctl` in C] because shell scripts only get you so far.

I've been giving feedback and contributing to [KDE's SVG cursor spec]. The
cursor theme landscape isn't in a great spot at the moment, because we're stuck
with XCursor images. Now that the [cursor-shape] protocol is gaining adoption
there is an opportunity to more easily switch the underlying image format.
Thanks to KDE folks for pushing this forward! I'd really like to see the spec
standardized under the freedesktop.org umbrella.

delthas has been contributing some nifty new features to [soju]: admins can now
configure per-user network count limits, can now impersonate a user via SASL,
and the file upload endpoint now sends back an error early when the file is too
large. [soju 0.8.2] has been released with a bunch of bug fixes.

The <abbr title="New project of the Month">NPotM</abbr> is [varlinkgen][]
(better name TBD). It's a [Varlink] C library and code generator. If you've
been following my projects for a while, you [probably][gqlclient]
[know][go-varlink] [how][go-jsonschema] [much][libjsonschema]
[I love][wayland-scanner] code generators producing type-safe APIs from schemas.
I must admit, I appreciate Varlink's simplicity and lack of central bus. I plan
to use varlinkgen in kanshi, and maybe other daemons in need of an IPC.

See you next month!

[varlinkgen]: https://gitlab.freedesktop.org/emersion/varlinkgen
[Varlink]: https://varlink.org/
[wayland-scanner]: https://wayland-book.com/libwayland/wayland-scanner.html
[libjsonschema]: https://git.sr.ht/~emersion/libjsonschema
[go-jsonschema]: https://git.sr.ht/~emersion/go-jsonschema
[go-varlink]: https://git.sr.ht/~emersion/go-varlink
[gqlclient]: https://git.sr.ht/~emersion/gqlclient
[KDE's SVG cursor spec]: https://invent.kde.org/plasma/breeze/-/blob/master/cursors/svg-cursor-format.md?ref_type=heads
[cursor-shape]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/tree/main/staging/cursor-shape?ref_type=heads
[soju]: https://soju.im
[soju 0.8.2]: https://codeberg.org/emersion/soju/releases/tag/v0.8.2
[wayland 1.23.1]: https://lists.freedesktop.org/archives/wayland-devel/2024-August/043760.html
[cage]: https://github.com/cage-kiosk/cage
[swaylock 1.8.0]: https://github.com/swaywm/swaylock/releases/tag/v1.8.0
[rewritten `makoctl` in C]: https://github.com/emersion/mako/pull/537
[wlroots 0.18.1]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.18.1
