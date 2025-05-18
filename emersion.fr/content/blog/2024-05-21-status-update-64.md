+++
date = "2024-05-21T00:00:00+02:00"
title = "Status update, May 2024"
slug = "status-update-64"
lang = "en"
tags = ["status update"]
+++

Hi!

Sadly, I need to start this status update with bad news: SourceHut has
decided to terminate my contract. At this time, I'm still in the process of
figuring out what I'll do next. I've marked some SourceHut-specific projects as
unmaintained, such as [sr.ht-container-compose] (feel free to fork of course).
I've handed over [hut] maintenance to xenrox, and I've started migrating a few
projects to other forges (more to follow). I will continue to maintain
projects that I still use such as [soju] to the extent that my free time allows.

On a more positive note, this month Igalia's [display next hackfest] took
place. Although I couldn't attend in-person, it was great to discuss in real
time with other engineers in the community about focused topics. We discussed
about color management, HDR, adaptive sync, testing, real-time scheduling,
power usage implications of the color pipeline, improved uAPI to handle KMS
atomic commit failures, hardware plane offloading, display muxes, backlight,
scaling and sharpening filters… And I probably missed a few other things.

We've released [wlroots 0.17.3] with a bunch of new bug fixes (thanks to Simon
Zeni). The [patches][wlr-color-transform] to add support for ICC profiles
from M. Stoeckl have been merged. I've continued working on the new
[ext-screencopy-v1] protocol but there are a few remaining issues to address
before this is ready.

The display hackfest has motivated me to work on [libliftoff]. Apart from a few
bug fixes, a new API to set a timeout for the libliftoff algorithm has been
added, and some optimizations are about to get merged (one thanks to Leo Li).

The Wayland release cycle has started, we've merged patches to generate
validators for enum values and added a new `deprecated-since` XML attribute to
mark a request, event or enum as deprecated. Thanks to Ferdinand Bachmann,
[kanshi] has gained output defaults and aliases (useful for sharing output
configurations across multiple profiles). [mako 1.9] has been released with
a new flag to toggle modes, another new flag to bypass history when dismissing
a notification, and support for compositor-side cursor images.

In IRC news, [goguma] now uses Material 3 (please report any regression), has
gained support for messages only visible to channel operators (`STATUSMSG`),
and I've spent a fair bit of time investigating the infamous [duplicate message
bug]. I have a better understanding of the issue now, but still need a bit more
time to come up with a proper fix.

Thanks to old patches sent by sitting33 that I took way too long to review,
[gamja] now only marks messages as read when it's focused, shows the number of
unread highlights in the tab title, and hides the internal WHO reply chatter
from the user.

Last, I've released [go-imap 2.0.0 beta 3] with a whole bunch of bug fixes.
Ksenia Roshchina has contributed a client implementation of the ACL IMAP
extension.

That's all for now, see you next month!

[sr.ht-container-compose]: https://sr.ht/~emersion/sr.ht-container-compose/
[hut]: https://sr.ht/~emersion/hut/
[soju]: https://soju.im
[display next hackfest]: https://events.pages.igalia.com/linuxdisplaynexthackfest/
[wlroots 0.17.3]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.17.3
[wlr-color-transform]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4280
[ext-screencopy-v1]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4545
[libliftoff]: https://gitlab.freedesktop.org/emersion/libliftoff
[kanshi]: https://sr.ht/~emersion/kanshi/
[mako 1.9]: https://github.com/emersion/mako/releases/tag/v1.9.0
[goguma]: https://sr.ht/~emersion/goguma/
[duplicate message bug]: https://todo.sr.ht/~emersion/goguma/147
[gamja]: https://sr.ht/~emersion/gamja/
[go-imap 2.0.0 beta 3]: https://github.com/emersion/go-imap/releases/tag/v2.0.0-beta.3
