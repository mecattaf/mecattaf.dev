+++
date = "2024-06-19T00:00:00+02:00"
title = "Status update, June 2024"
slug = "status-update-65"
lang = "en"
tags = ["status update"]
+++

Hi all!

This status update will be shorter than usual because I had a lot less free
time for my open-source projects than usual this month. Indeed, I recently
joined SNCF Réseau (the company responsible for the French railway
infrastructure) to work on [OSRD], an open-source tool to design and operate
railway networks. The project's immediate goal is to fit new freight trains in
an existing timetable a few days in advance, but the longer term scope is much
larger. Working partly on-site in a big team is quite the change of pace but I
like it so far!

I've released a lot of new versions this month! The big one is [Wayland 1.23.0]
which adds a mechanism to set the size of the internal connection buffer, an
`enum-header` mode for `wayland-scanner` to generate a header with only enums,
auto-generated enum validator functions for compositors, a new
`deprecated-since` attribute to mark parts of protocols as deprecated, and a
few other niceties. [libliftoff] 0.5.0 prioritizes layers that are frequently
updated, adds performance optimizations (a fast path when the intersection of
layers doesn't change, a fast path for standard KMS properties, an early return
to avoid needlessly trying potential solutions) and a timeout to avoid stalling
the compositor for too long. [soju 0.8.0] adds a new file upload IRC extension,
adds support for Unix domain sockets for HTTP and WebSocket listeners and
better spreads the load on multiple upstream servers on large deployments.
[kanshi 1.7.0] adds output defaults and aliases. Phew, that was a mouthful!

In other Wayland news, the [xdg-toplevel-icon] protocol got merged after a long
and difficult process. I really hope we can improve the contribution experience
for future proposals. We realized that the governance document was missing the
review requirements, so I [fixed that][w-p!312] along the way. The wlroots
linux-drm-syncobj-v1 implementation has been merged (it's been used by
gamescope for a few months - note that this does not include the wlroots
renderer, backend and scene-graph changes). Multiple wlroots versions can now
be installed side-by-side thanks to Violet Purcell. Sway has gained a new
[`color_profile` output command][sway#7681] to apply an ICC profile to an
output thanks to M. Stoeckl. A [high-level API for colorimetry][libdi!167] has
been added in libdisplay-info thanks to Pekka Paalanen, and [support for HDMI
audio data blocks][libdi!176] has been implemented by Sebastian Wick.

Let's switch gears and talk about IRC updates. I've submitted an IRCv3 proposal
to [fix a few `ISUPPORT` deficiencies][ircv3#543] - it will need a lot more
feedback and implementations before it can be accepted. I've continued
debugging Goguma's [duplicate message bug][goguma#147] and I'm pleased to
announce that I've almost completely fixed it (I still experience it very
rarely somehow…). delthas has added support for adaptive color schemes (Goguma
now uses your preferred accent color if any). I've performed some more boring
maintenance tasks, for instance adding support for newer Android Gradle Plugin
version to [webcrypto.dart], one of Goguma's dependencies.

One last update to wrap up this post: Zhi Qu has added support for the [ID
extension][go-imap#621] to go-imap, which is sadly required to connect to some
servers. That's all for now, see you next month!

[OSRD]: https://osrd.fr
[Wayland 1.23.0]: https://lists.freedesktop.org/archives/wayland-devel/2024-May/043636.html
[libliftoff]: https://gitlab.freedesktop.org/emersion/libliftoff
[soju 0.8.0]: https://git.sr.ht/~emersion/soju/refs/v0.8.0
[kanshi 1.7.0]: https://git.sr.ht/~emersion/kanshi/refs/v1.7.0
[xdg-toplevel-icon]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/269
[w-p!312]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/312
[sway#7681]: https://github.com/swaywm/sway/pull/7681
[libdi!167]: https://gitlab.freedesktop.org/emersion/libdisplay-info/-/merge_requests/167
[libdi!176]: https://gitlab.freedesktop.org/emersion/libdisplay-info/-/merge_requests/176
[ircv3#543]: https://github.com/ircv3/ircv3-specifications/pull/543
[goguma#147]: https://todo.sr.ht/~emersion/goguma/147
[webcrypto.dart]: https://github.com/google/webcrypto.dart/pull/120
[go-imap#621]: https://github.com/emersion/go-imap/pull/621
