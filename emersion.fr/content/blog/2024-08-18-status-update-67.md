+++
date = "2024-08-18T00:00:00+02:00"
title = "Status update, August 2024"
slug = "status-update-67"
lang = "en"
tags = ["status update"]
+++

Hi!

After months of ~~bikeshedding~~ finishing touches we've finally merged
[ext-image-capture-source-v1 and ext-image-copy-capture-v1][w-p!124] in
wayland-protocols! These two new protocols supersede the old wlr-screencopy-v1
protocol. They unlock some nice features such as toplevel and cursor capture,
as well as improved damage tracking. Thanks a lot to Andri Yngvason! He's
written [a blog post][andri] about the new protocols with more details. The
wlroots MR doesn't have toplevel capture implemented yet, but that's next on
the TODO list.

In other Wayland news, we've merged full support for
[explicit synchronization][wlr!4715] in wlroots. This generally results in a
better system architecture than implicit synchronization, reduces
over-synchronization for complicated pipelines, and makes wlroots work
correctly with drivers lacking implicit synchronization support (e.g. NVIDIA).

Alexander has implemented [automatic X11 surface restacking][wlr!4756] in
wlroots' scene-graph. That way, all scene-graph compositors get proper X11
stack handling for free (Sway's implementation was buggy). This should fix
issues where the X11 server and the compositor don't have the same idea of the
relative ordering of surfaces, resulting in clicks going "through" windows or
reaching invisible windows.

Ricardo Steijn has contributed Sway support for [tearing-control-v1][sway#7598].
This allows users to opt-in to immediate page-flips which don't wait for the
vertical sync point (VSync) to program new frames into the hardware. For
tearing to be enabled, two conditions need to be fulfilled: tearing needs to
be enabled per-output via the output `allow_tearing` command, and tearing
needs to be enabled per-application either via the tearing-control-v1 Wayland
protocol or manually via the window `allow_tearing` command. I've also pushed
kernel patches from André Almeida and me to fix a few bugs around tearing
page-flips with the atomic KMS API, so once these land forcing the legacy KMS
API shouldn't be necessary anymore.

[drm_info] v2.7.0 has been released with a few new features and cleanups.
Support for `DRM_CLIENT_CAP_CURSOR_PLANE_HOTSPOT` and
`DRM_CAP_ATOMIC_ASYNC_PAGE_FLIP` has been added, and a new flag has been
introduced to display information from a JSON dump.

Last, I've released a new version of [go-maildir] with a brand new API. Instead
of referring to messages by their Maildir key and phishing back their full
filename on each operation, the API exposes a `Message` type. It should be much
nicer to use than the previous one.

That's all for August, see you next month!

[w-p!124]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/124
[andri]: https://andri.yngvason.is/making-a-wayland-screen-capturing-protocol.html
[wlr!4715]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4715
[wlr!4756]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4756
[sway#7598]: https://github.com/swaywm/sway/pull/7598
[drm_info]: https://gitlab.freedesktop.org/emersion/drm_info
[go-maildir]: https://github.com/emersion/go-maildir/
