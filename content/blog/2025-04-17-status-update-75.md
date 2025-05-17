+++
date = "2025-04-17T00:00:00+02:00"
title = "Status update, April 2025"
slug = "status-update-75"
lang = "en"
tags = ["status update"]
+++

Hi!

Last week [wlroots 0.19.0-rc1] has been released! It includes the new color
management protocol, however it doesn't include HDR10 support because the
renderer and backend bits haven't yet been merged. Also worth noting is full
explicit synchronization support as well as the new screen capture protocols.
I plan to release new release candidates weekly until we're happy with the
stability. Please test!

Sway is also getting close to its first release candidate. I plan to publish
version 1.11.0-rc1 this week-end. Thanks to Ferdinand Bachmann, Sway no longer
aborts on shutdown due to dangling signal listeners. I've also updated my
[HDR10 patch] to add an `output hdr` command (but it's Sway 1.12 material).

I've spent a bit of time on [libicc], my C library to manipulate ICC profiles.
I've introduced an encoder to make it easy to write new ICC profiles, and used
that to write [a small program][icc-inverted] to create an ICC profile which
inverts colors. The encoder doesn't support as many ICC elements as the decoder
yet (patches welcome!), but does support many interesting bits for display
profiles: basic matrices and curves, `lut16Type` elements and more advanced
`lutAToBType` elements. New APIs have been introduced to apply ICC profile
transforms to a color value. I've also added tests which compare the results
given by libicc and by LittleCMS. For some reason `lut16Type` and `lutAToBType`
results are multiplied by 2 by LittleCMS, I haven't yet understood why that is,
even after reading the spec in depth and staring at LittleCMS source code for a
few hours (if you have a guess please ping me). In the future I'd like to add a
small tool to convert ICC profiles to and from JSON files to make it easy to
create new files or adjust exist ones.

[Version 0.9.0][soju 0.9.0] of the soju IRC bouncer has been released. Among
the most notable changes, the database is used by default to store messages,
pinned/muted channels and buffers can be synchronized across devices, and
database queries have been optimized. I've continued working on the [Goguma]
mobile IRC client, fixing a few bugs such as dangling Firebase push
subscriptions and message notifications being dismissed too eagerly.

Max Ehrlich has contributed a [mako patch] to introduce a `Notifications`
property to the mako-specific D-Bus API, so that external programs can monitor
active notifications (e.g. display a count in a status bar, or display a list
on a lockscreen).

That's all I have in store, see you next month!

[wlroots 0.19.0-rc1]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.19.0-rc1
[HDR10 patch]: https://github.com/swaywm/sway/pull/8617
[libicc]: https://gitlab.freedesktop.org/emersion/libicc
[icc-inverted]: https://github.com/swaywm/sway/issues/6577#issuecomment-2758643328
[soju 0.9.0]: https://codeberg.org/emersion/soju/releases/tag/v0.9.0
[Goguma]: https://codeberg.org/emersion/goguma
[mako patch]: https://github.com/emersion/mako/pull/579
