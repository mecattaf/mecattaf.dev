+++
date = "2022-11-15T00:00:00+02:00"
title = "Status update, November 2022"
slug = "status-update-47"
lang = "en"
tags = ["status update"]
+++

Hi all!

Last Friday we've shipped [wlroots 0.16]! This long-overdue release is the
fruit of 10 months worth of work from 46 contributors. It includes _many_
improvements, especially around new protocol support, the scene-graph API and
the Vulkan renderer. See the release notes for more details!

With the new release freshly delivered, we're already working on the next one.
I've been continuing my work on the Vulkan renderer: the [patch][wlroots!3574]
to stop blocking while the GPU is rendering is almost ready to be merged. I've
even fixed a [Vulkan-ValidationLayers bug] along the way. I've also investigated
color management and ICC profiles a bit more, and have a better idea of what we
need to lay down the [first pieces][wlroots!3804] of the puzzle.

I've reached a new milestone for [wlroots-rs]: the example can now display a
red screen! I've cleaned up my work and properly exposed the API in a package.
I'm still not super happy about the way the compositor state is handled, if
you have suggestions please let me know!

I've released libdrm 2.4.114 with new helpers to allocate DRM dumb buffers.
Up until now this is something developers had to hand-roll themselves with raw
IOCTLs, hopefully this addition can help newcomers and improve type safety.
I've also released Pixman 0.42.0 with a constified API for regions and work by
Manuel Stoeckl to fix bugs discovered via the wlroots Pixman renderer and port
demos to GTK3.

I've got two <abbr title="New Project of the Month">NPotM</abbr>s! The first
one is [libjsonschema], which is basically the C counterpart of [go-jsonschema].
It generates C definitions and functions to encode and decode JSON defined by
a schema. This project is still very much WIP, my goal is to use it in [drm_info]
and eventually in [libdisplay-info].

The second new project is [go-smee]. It's a Go version of the official Node.js
[smee] client. smee is a handy tool when writing code which leverages Web
hooks: it's a proxy which forwards Web hooks to a locally running server. At
some point I got annoyed enough with Node.js to convince me to write an
alternative client.

That's all for now, see you next month!

[wlroots 0.16]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.16.0
[wlroots-rs]: https://gitlab.freedesktop.org/emersion/wlroots-rs/
[wlroots!3574]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3574
[Vulkan-ValidationLayers bug]: https://github.com/KhronosGroup/Vulkan-ValidationLayers/pull/4762
[wlroots!3804]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3804
[libjsonschema]: https://git.sr.ht/~emersion/libjsonschema
[go-jsonschema]: https://git.sr.ht/~emersion/go-jsonschema
[drm_info]: https://gitlab.freedesktop.org/emersion/drm_info
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[go-smee]: https://git.sr.ht/~emersion/go-smee
[smee]: https://smee.io/
