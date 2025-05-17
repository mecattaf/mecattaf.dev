+++
date = "2024-11-22T00:00:00+02:00"
title = "Status update, November 2024"
slug = "status-update-70"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month I've spent a lot of time triaging Sway and wlroots issues following
the Sway 1.10 release. There are a few regressions, some of which are already
fixed (thanks to all contributors for sending patches!). Kenny has added
support for software-only secondary KMS devices such as [GUD] and DisplayLink.
David Turner from Raspberry Pi has contributed crop and scale support for
output buffers, that way video players are more likely to hit direct scan-out.
I've added support for explicit sync in the Wayland backend for nested
compositors.

I've worked a bit on the [Goguma] mobile IRC client. The auto-complete dropdown
now shows user display names, channel topics and command descriptions.
Additionally, commands which don't make sense given the current context are
hidden (for instance, `/part` is not displayed in a conversation with a single
user).

<center>
	<img src="/img/blog/2024-11-22-status-update-70/goguma-nick-complete.png" class="opaque" style="width: 400px;">
	<img src="/img/blog/2024-11-22-status-update-70/goguma-cmd-complete.png" class="opaque" style="width: 400px;">
</center>

The [gamja] Web IRC client should now reconnect more quickly after regaining
connectivity. For instance, after resume from suspend, gamja now reconnects
immediately instead of waiting 10 seconds. Thanks to Matteo, [soju-containers]
now ships arm64 images.

The <abbr title="New Project of the Month">NPotM</abbr> is [sogogi], a simple
WebDAV file server. It's quite minimal for now: a list of directories to
serve is defined in the configuration file, as well as users and access lists.
In the future, I'd like to add external authentication (e.g. via PAM or via
another HTTP server), HTML directory listings and configuration file reload.

That's all for now! Once again, that's a pretty short status update. A lot of
my time goes into more boring maintenance tasks and reviews. See you next month!

[GUD]: https://github.com/notro/gud/wiki
[sogogi]: https://codeberg.org/emersion/sogogi
[Goguma]: https://codeberg.org/emersion/goguma
[gamja]: https://codeberg.org/emersion/gamja
[soju-containers]: https://codeberg.org/emersion/soju-containers
