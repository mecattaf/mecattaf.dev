+++
date = "2025-02-18T00:00:00+02:00"
title = "Status update, February 2025"
slug = "status-update-73"
lang = "en"
tags = ["status update"]
+++

Hi!

This month has been pretty hectic, with FOSDEM and all. I've really enjoyed
meeting face-to-face all of these folks I work online with the rest of the
year! My [talk about modern IRC] has been published on the FOSDEM website
(unfortunately the audio quality isn't great).

In Wayland news, the [color management protocol] has finally been merged! I
haven't done much apart cheering from the sidelines: huge thanks to everyone
involved for carrying this over the finish line, especially Pekka Paalanen,
Sebastian Wick and Xaver Hugl! I've started a [wlroots implementation][wlr!4962],
which was enough with some hacks to get MPV to display a HDR video on Sway.
I've also [posted a patch][wlr!4977] to convert to BT2020 and encode to PQ, but
I still need to figure out why red shows up as pink (or rebrand it as
`lipstick-filter` in the Sway config file).

I've released [sway 1.10.1] with a bunch of bugfixes, as well as [wlr-randr 0.5.0]
which adds relative positioning options (e.g. `--left-of`) and a man page. I've
rewritten `makoctl` in C (the shell script approach has been showing its
limitations for a while), and merged support for icon border radius, per-corner
radius settings, and a new signal in the mako-specific D-Bus API to notify when
the current modes are changed.

delthas has contributed support for showing redacted messages as such in
[gamja]. [goguma]'s compact mode now displays an unread and date delimiter,
just like the default mode (thanks Eigil Skjæveland!). I've added a basic UI to
my WebDAV server, [sogogi], to display directory listings and easily upload
files from the browser.

That's all, see you next month!

[talk about modern IRC]: https://fosdem.org/2025/schedule/event/fosdem-2025-6407-chatting-on-irc-in-2025-grandpa-what-s-up-/
[color management protocol]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/commit/452e943b4991
[gamja]: https://codeberg.org/emersion/gamja
[goguma]: https://codeberg.org/emersion/goguma
[sogogi]: https://codeberg.org/emersion/sogogi
[wlr!4962]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4962
[wlr!4977]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4977
[sway 1.10.1]: https://github.com/swaywm/sway/releases/tag/1.10.1
[wlr-randr 0.5.0]: https://gitlab.freedesktop.org/emersion/wlr-randr/-/releases/v0.5.0
