+++
date = "2022-06-15T00:00:00+02:00"
title = "Status update, June 2022"
slug = "status-update-42"
lang = "en"
tags = ["status update"]
+++

Hi!

Yesterday I've _finally_ finished up and merged push notification support for
the [soju] IRC bouncer and the [goguma] Android client! Highlights & PM
notifications should now be delivered much more quickly, and power consumption
should go down. Additionally, the IRC extension isn't tied to a proprietary
platform (like Google or Apple) and the push notification payloads are
end-to-end encrypted. If you want to read more about the technical details,
have a look at the [IRCv3 draft][webpush].

In the Wayland world, we're working hard to get ready for the next wlroots
release. We've merged numerous improvements for the scene-graph API, xdg-shell
v3 and v4 support has been added (to allow xdg-popups to change their position),
and a ton of other miscellaneous patches have been merged. Special thanks to
Kirill Primak, Alexander Orzechowski and Isaac Freund!

I've also been working on various Wayland protocol bits. The
[single-pixel-buffer] extension allows clients to easily create buffers with a
single color instead of having to go through `wl_shm`. The [security-context]
extension will make it possible for compositors to reliably detect sandboxed
clients and apply special policies accordingly (e.g. limit access to screen
capture protocols). Thanks for [xdg-shell capabilities] clients will be able to
hide their maximize/minimize/fullscreen buttons when these actions are not
supported by the compositor. Xaver Hugl's [content-type] extension will enable
rules based on the type of the content being displayed (e.g. enable adaptive
sync when a game is displayed, or make all video player windows float). Last,
I've been working on some smaller changes to the core protocol: a new
[`wl_surface.configure`][wl-surface-configure] event to atomically apply a
surface configuration, and a new [`wl_surface.buffer_scale`][wl-surface-buffer-scale]
event to make the compositor send the preferred scale factor instead of letting
the clients pick it.

I've tried to help Jason “I’m literally writing an NVIDIA compiler as I read
Mike Blumenkrantz's blog” Ekstrand with his explicit synchronization work.
I've written a [kernel patch][dmabuf-sysfs] to make it easier for user-space to
check whether Jason's [new shiny IOCTLs][dmabuf-import-export] are available.
Unfortunately Greg K-H didn't like the idea of using sysfs for IOCTL
advertisement, and we didn't find any other good solution, so I've merged
Jason's patches as-is and user-space needs to perform a kernel version check.
At least I've learned how to add sysfs entries! If you want to learn more about
Jason's work, [he's written a blog post][jason-post] about it.

Progress is steady on the [libdisplay-info] front. I like taking a break from
the complicated Linux graphics issues by writing a small patch to parse a new
section of the EDID data structure. Don't get me wrong, EDID is a total mess,
but at least I don't need to think too much when writing a parser. Pekka and
Sebastian have been providing very good feedback. Sometimes I complain about
their reviews being too nitpicky, but I'm sure I wouldn't do better should the
roles be reversed.

The <abbr title="New Project of the Month">NPotM</abbr> is [wlspeech], a small
Wayland input method to write text using your voice. It leverages Mozilla's
[DeepSpeech] library for the voice recognition logic. It's very basic at the
moment: it just listens for 2 seconds, and then types the text it's recognized.
It would be nice to switch to ALSA's non-blocking API, to add a hotkey to
trigger the recording, give feedback about the currently recognized word via
pre-edit text. Let me know if you're interested in working on this.

That's all for today, see you next month!

[soju]: https://soju.im
[goguma]: https://sr.ht/~emersion/goguma
[webpush]: https://github.com/ircv3/ircv3-specifications/pull/471
[single-pixel-buffer]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/104
[security-context]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/68
[xdg-shell capabilities]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/122
[content-type]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/150
[wl-surface-configure]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/227
[wl-surface-buffer-scale]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/220
[dmabuf-sysfs]: https://lore.kernel.org/dri-devel/20220601161303.64797-1-contact@emersion.fr/
[dmabuf-import-export]: https://lore.kernel.org/dri-devel/20220608152142.14495-1-jason@jlekstrand.net/
[jason-post]: https://www.collabora.com/news-and-blog/blog/2022/06/09/bridging-the-synchronization-gap-on-linux/
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[wlspeech]: https://git.sr.ht/~emersion/wlspeech
[DeepSpeech]: https://github.com/mozilla/DeepSpeech
