+++
date = "2022-10-17T00:00:00+02:00"
title = "Status update, October 2022"
slug = "status-update-46"
lang = "en"
tags = ["status update"]
+++

Hi!

This month I've done a lot of cleanup and bugfixing in wlroots, especially in
the DRM backend, the Vulkan renderer and screencopy protocol implementation.
There are still a few DRM backend bugs which need to be ironed out, but we're
getting there!

Jonas Ådahl has released wayland-protocols 1.27, which features two new
protocols I've been working on with the KDE folks. [idle-notify-v1] is a
standard replacement for the old KDE idle protocol we've been using so far. It
allows clients to be notified when the user is idle for a while. This is used
by swayidle to blank the screens or lock the session after a delay, for
instance. Patches for wlroots, Sway and swayidle have been merged.

The other protocol is [content-type-v1] and adds a way for clients to attach
a content type (such as "video" or "game") to a surface. With this, compositors
can implement generic rules for all video players or all games. I plan to make
this available in Sway `for_window` rules.

Joshua Ashton has been working on improving the way a Wayland compositor will
handle Xwayland surfaces. Up until now it was using a [racy mechanism], and we
could indeed hit the race in gamescope. We're working on a proper solution to
fix the race: [xwayland-shell-v1].

To continue with the "fix old stuff which we believe was working fine but
definitely isn't" trend, I [re-implemented wl_shm] in wlroots. `wl_shm` is the
interface used by Wayland clients to share CPU buffers (as opposed to GPU
buffers). Until now we were using the libwayland implementation but defects in
its API makes it a better way forward to just do everything ourselves.
Implementing `wl_shm` is fun: in particular we need to handle SIGBUS
shenanigans which the client can trigger by shrinking files mmap'ed by the
compositor. And signal handlers being what they are, this results in a lot of
complications.

In other graphics news, I've been doing more kernel work. I've tracked down
some DisplayPort Multi-Stream Transport (DP-MST) issues with Jonas and Lyude,
and sent out [a fix][dp-mst] which doesn't break Mutter. I'll need to send
follow-up patches to address a common issue: the docs and the code don't match.
I've also sent another patch to make it less annoying to implement explicit
synchronization in Wayland compositors: a [new IOCTL][drm-syncobj-ioctl] to
allow user-space to integrate a `drm_syncobj` wait with an event loop.

Together with Pekka and Sebastian, we've continued out work on [libdisplay-info].
A [new website][di-docs] contains documentation (built via [gyosu]), more
DisplayID bits and GTF mode generation have been merged, and Pekka is working
on the high-level API.

Another unrelated small improvement worth mentioning: [goguma] now supports
[UnifiedPush]! Google Play Services no longer are a required dependency to get
support for push notifications.

The <abbr title="New Project of the Month">NPotM</abbr> is [go-jsonschema], a
Go code generator for [JSON Schema]. JSON Schema can describe the structure of
JSON documents, and go-jsonschema will generate matching Go structures. This is
useful to avoid maintaining glue code for each and every JSON consumer. I plan
to write a C code generator as well. Right now go-jsonschema can handle almost
all of the [drm_info schema], however many features are still missing and
schemas need to be written in a specific way to make the most of go-jsonschema.

See you next time!

[idle-notify-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/29
[content-type-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/150
[racy mechanism]: https://gitlab.freedesktop.org/xorg/xserver/-/issues/1157
[xwayland-shell-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/163
[re-implemented wl_shm]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3727
[dp-mst]: https://lore.kernel.org/dri-devel/20221017153150.60675-2-contact@emersion.fr/
[drm-syncobj-ioctl]: https://lore.kernel.org/dri-devel/20221012123241.337774-1-contact@emersion.fr/
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[di-docs]: https://emersion.pages.freedesktop.org/libdisplay-info/
[gyosu]: https://git.sr.ht/~emersion/gyosu
[go-jsonschema]: https://git.sr.ht/~emersion/go-jsonschema
[JSON Schema]: https://json-schema.org/
[drm_info schema]: https://gitlab.freedesktop.org/emersion/drm_info/-/merge_requests/89
[goguma]: https://sr.ht/~emersion/goguma/
[UnifiedPush]: https://unifiedpush.org/
