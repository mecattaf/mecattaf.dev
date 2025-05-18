+++
date = "2024-01-21T00:00:00+02:00"
title = "Status update, January 2024"
slug = "status-update-60"
lang = "en"
tags = ["status update"]
+++

Hi! This month has been pretty hectic due to the [SourceHut network outage].
We've all in the staff team invested a lot of time and energy to minimize the
downtime as much as possible. Thankfully things have settled down now, there
are still a lot of follow-up tasks to complete but with less urgency. I'm
really grateful for the community's reaction, everybody had been very
understanding and supportive. Thank you!

In other SourceHut news, I've been working on [yojo], a bridge which provides
CI for Codeberg projects via builds.sr.ht. I've added support for pull
requests, taught yojo to handle multiple manifests, added logic to
automatically refresh access tokens before they expire, and fixed a bunch of
bugs.

The <abbr title="New Project of the Month">NPotM</abbr> is
[sr.ht-container-compose], a [docker-compose] configuration for SourceHut. It
provides an easy way to spin up a SourceHut development environment without
having to set up each service and its dependencies individually. I hope this
project can reduce friction for new SourceHut contributors. There are many
services missing, patches welcome!

This month, we've finally merged the [Sway pull request][sway#6844] to use the
wlroots scene-graph API! This is exciting because it fixes a whole class of
bugs, it removes a lot of manual hand-rolled logic in Sway (e.g. rendering,
damage tracking, input event routing, direct scan-out, some of the protocol
support…), it provides nice performance optimizations via culling (e.g. the
background image is no longer painted if a web browser is covering it), and it
unlocks upcoming performance optimizations (e.g. KMS plane offloading). Many
thanks to Alexander for writing the patches and maintaining them for over a
year, and to Kirill for pushing it over the finish line!

On the wlroots side, my work on [`wlr_surface_synced`][wlroots!4480] has been
merged, allowing us to latch surface commits until an arbitrary condition is
met. This work is necessary for the upcoming explicit synchronization protocol,
as well as the work-in-progress transactions protocol and avoiding compositor
freezes when a client is very slow to render. We've released wlroots 0.17.1,
with a collection of bugfixes backported by Simon Zeni. Last, we've dropped
support for the legacy `wl_drm` protocol by default, and this caused a bit of
breakage here and there ([xserver], [libva], [amdvlk]). We do really want to
phase out `wl_drm` though, so we've decided to stick with that removal.

This month's collection of miscellaneous project updates includes
[go-imap v2 alpha 8] with separate types for sequence numbers and UIDs, which
was a lot of work to get right but I think was worth it. I've also released
[go-maildir v0.4.0] with a new `Walk` function (to iterate over messages without
allocating a list) and numerous fixes. I've sent a [GitLab cli patch][glab!1395]
to fix invalid release asset links for third-party GitLab instances, and a
[Meson patch][meson#12718] to add C23 support.

See you next month!

[SourceHut network outage]: https://sourcehut.org/blog/2024-01-19-outage-post-mortem/
[yojo]: https://sr.ht/~emersion/yojo/
[sr.ht-container-compose]: https://sr.ht/~emersion/sr.ht-container-compose/
[docker-compose]: https://docs.docker.com/compose/
[sway#6844]: https://github.com/swaywm/sway/pull/6844
[wlroots!4480]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4480
[xserver]: https://gitlab.freedesktop.org/xorg/xserver/-/merge_requests/1236
[libva]: https://github.com/intel/libva/pull/790
[amdvlk]: https://github.com/GPUOpen-Drivers/AMDVLK/issues/351
[go-imap v2 alpha 8]: https://github.com/emersion/go-imap/releases/tag/v2.0.0-alpha.8
[go-maildir v0.4.0]: https://github.com/emersion/go-maildir/releases/tag/v0.4.0
[glab!1395]: https://gitlab.com/gitlab-org/cli/-/merge_requests/1395
[meson#12718]: https://github.com/mesonbuild/meson/pull/12718
