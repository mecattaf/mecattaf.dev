+++
date = "2023-01-16T00:00:00+02:00"
title = "Status update, January 2023"
slug = "status-update-49"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month's status update will be lighter than usual: I've been on leave for
a while at the end of December. To make up for this, I have some big news:
we've released [Sway 1.8]! This brings a whole lot of improvements from
[wlroots 0.16], as well as some nice smaller additions to Sway itself. We're
still working on fixing up a few regressions, so I'll probably release wlroots
0.16.2 soon-ish.

Together with Sebastian Wick we've plumbed support for more data blocks to
[libdisplay-info]. We now support everything in the base EDID block! We're
filling the gaps in our CTA-861 implementation, and we're getting ready to
release version 0.1.0. As expected EDID blobs continue to have many fields
packed in creative ways, duplicating information and contradicting each other,
ill-defined in many specifications and vendor-specific formats.

I've continued working on the [goguma] Android IRC client. I've wired up
automatic bug reporting via [GlitchTip] -- this helps a lot because grabbing
logs from Android is much more complicated than it needs to be. Thanks to the
bug dashboard I've fixed numerous crashes. I've also sent upstream
[a fix][unifiedpush fix] for unreliable notifications when UnifiedPush is used.

The <abbr title="New Project of the Month">NPotM</abbr> is [chayang], a small
tool to gradually dim the screen. This can be used to implement a grace period
before turning off the screens, to let the user press a key or move the mouse
to keep the screens on.

Last but not least, I've written a patch to add support for ACME DNS
challenges to [tlstunnel]. ACME DNS challenges unlock support for wildcard
certificates in Let's Encrypt. Unfortunately there is no widely supported
standard protocol to update DNS records, so tlstunnel delegates this task to a
helper script with the same API as [dehydrated]'s hooks.

That's it! See you next month.

[Sway 1.8]: https://github.com/swaywm/sway/releases/tag/1.8
[wlroots 0.16]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.16.0
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[chayang]: https://git.sr.ht/~emersion/chayang
[goguma]: https://sr.ht/~emersion/goguma/
[GlitchTip]: https://glitchtip.com/
[unifiedpush fix]: https://github.com/UnifiedPush/flutter-connector/pull/105
[tlstunnel]: https://sr.ht/~emersion/tlstunnel
[dehydrated]: https://github.com/dehydrated-io/dehydrated
