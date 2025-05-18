+++
date = "2023-05-22T00:00:00+02:00"
title = "Status update, May 2023"
slug = "status-update-53"
lang = "en"
tags = ["status update"]
+++

Hi all!

This status update comes in a bit late because I was on leave last week. The
highlight this month is the HDR hackfest, I've written a [dedicated blog
post][HDR hackfest] about it. After the publication of that blog post, I've
sent out an [RFC to dri-devel].

We've made some good progress on wlroots' Vulkan renderer. Manuel Stoeckl has
added support for an [intermediate buffer for blending], which is required for
non-8-bit output formats and for color management features. The renderer now
has an optional extra rendering pass to run a shader after blending. This is
currently used to encode color values to sRGB, and will be used in the future
to apply ICC profiles and to perform color space conversions. I've added
support for the [NV12 DMA-BUF format], support for more YCbCr formats is in a
merge request.

The new [cursor-shape-v1 protocol] has been merged in wayland-protocols thanks
to KDE and winit folks. Traditionally Wayland clients needed to load XCursor
themes and submit these as `wl_shm` buffers to the compositor. However there
are a few downsides: there is no mechanism to configure the theme that gets
loaded, the theme cannot be changed on-the-fly, there is no way to configure
separate themes per seat, and loading cursors slows down client startup. The
cursor-shape-v1 protocol allows clients to set a cursor image by its name
instead of using `wl_shm` buffers.

I've worked on adding a new mode to wayland-scanner to [generate enums only].
This is useful for libraries like wlroots which use C enums generated from
protocol XML in their public headers. We plan to ship these headers as part of
a wayland-protocols installation.

To wrap up this status update, let's mention a few updates for miscellaneous
projects. A handful of new formats have been added to [pixfmtdb]. [gqlclient]
now handles GraphQL interfaces correctly and generates methods to unwrap the
underlying type. This is now used in [hut] to show ticket comments, among other
things. [go-imap] now supports SEARCHRES, LITERAL+, and features a simplified
API for STATUS commands.

See you next month!

[HDR hackfest]: /blog/2023/hdr-hackfest-wrap-up/
[RFC to dri-devel]: https://lore.kernel.org/dri-devel/QMers3awXvNCQlyhWdTtsPwkp5ie9bze_hD5nAccFW7a_RXlWjYB7MoUW_8CKLT2bSQwIXVi5H6VULYIxCdgvryZoAoJnC5lZgyK1QWn488=@emersion.fr/T/#u
[intermediate buffer for blending]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3869
[NV12 DMA-BUF format]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4092
[cursor-shape-v1 protocol]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/194
[generate enums only]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/312
[pixfmtdb]: https://pixfmtdb.emersion.fr/
[gqlclient]: https://git.sr.ht/~emersion/gqlclient
[hut]: https://sr.ht/~emersion/hut/
[go-imap]: https://github.com/emersion/go-imap
