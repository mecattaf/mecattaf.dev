+++
date = "2025-03-16T00:00:00+02:00"
title = "Status update, March 2025"
slug = "status-update-74"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month I've finally finished my initial work on [HDR10 support for wlroots]!
My branch supports playing both SDR and HDR content on either an SDR or HDR
output. It's a pretty basic version: wlroots only performs very basic gamut
mapping, and has a simple luminance multiplier instead of proper tone mapping.
Additionally the source content luminance and mastering display metadata isn't
taken into account. Thus the result isn't as good as it could be, but that can
be improved once the initial work is merged!

![HDR video on a HDR screen on Sway](/img/blog/2025-03-16-status-update-74/hdr.jpg)

I've also been talking with dnkl about blending optical color values rather
than electrical values in foot ("gamma-correct blending"). Thanks to the
color-management protocol, foot can specify that its buffers contain linearly
encoded values (as opposed to the default, sRGB) and can implement this
blending method without sacrificing performance. See the [foot pull request] for
more details.

We've been working on fixing the few last known blockers remaining for the next
wlroots release, in particular related to scene-graph clipping, custom modes,
and explicit synchronization. I hope we'll be able to start the release
candidate dance soon.

The <abbr title="New Project of the Month">NPotM</abbr> is [Bakah], a small
utility to build [Docker Bake] configuration files with Buildah (the library
powering Podman). I've written more about the motivation and design of this
tool [in a separate article][bakah article].

I've released [tlstunnel 0.4] with better support for certificate files and
some bugfixes. The [sogogi] WebDAV file server got support for graceful
shutdown and Unix socket listeners thanks to Krystian Chachuła. Last,
[mako 1.10] adds a bunch of useful features such as `include` directives,
more customization for border sizes and icon border radius, and a
`--no-history` flag for `makoctl dismiss`.

See you next month!

[HDR10 support for wlroots]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/5002
[mako 1.10]: https://github.com/emersion/mako/releases/tag/v1.10.0
[sogogi]: https://codeberg.org/emersion/sogogi
[Bakah]: https://github.com/emersion/bakah
[Docker Bake]: https://docs.docker.com/build/bake/
[bakah article]: /blog/2025/using-podman-compose-and-buildkit/
[tlstunnel 0.4]: https://codeberg.org/emersion/tlstunnel/releases/tag/v0.4.0
[foot pull request]: https://codeberg.org/dnkl/foot/pulls/1974
