+++
date = "2022-07-14T00:00:00+02:00"
title = "Status update, July 2022"
slug = "status-update-43"
lang = "en"
tags = ["status update"]
+++

Hi!

I've continued working on my IRC suite this month. Two of our extensions have
been accepted in IRCv3: [read-marker] synchronizes read markers between
multiple devices belonging to the same user, and [channel-context] adds a
machine-readable tag to indicate the context of a message. Some other server
and client developers have already implemented them!

[soju] has gained a few quality-of-life features. Thanks to gildarts, there is a
new `channel update -detached` flag to attach or detach a channel, a new
`contrib/migrate-db` script to migrate the database between backends, users can
now delete their own account, and the user password hashes are upgraded when
logging in. Additionally, read markers are broadcast using Web Push (to dismiss
notifications when a message is read on another client), users can now set a
default nickname to use for all networks, and the logic to regain the
configured nick should work on servers missing `MONITOR` support (so I should
no longer be stuck with "emersion_" on OFTC).

[Goguma] now supports irc:// URLs, so it should be easier to click on these
links in various project pages. If the user hasn't joined the target channel or
network yet, a confirmation dialog will be displayed. In the network settings
page, a new button opens a UI to authenticate on the IRC network. A ton of
other minor fixes and improvements have been pushed as well.

I've released [gamja] 1.0 beta 6. This new version adds a settings dialog with
options to customize how timestamps and chat events (join, part, and so on) are
displayed.

In Wayland news, new Wayland and wayland-protocols releases have been shipped.
The Wayland release includes an `axis_value120` event for high-resolution wheel
scrolling, the wayland-protocols releases includes the single-pixel-buffer and
the xdg-shell `wm_capabilities` event I've talked about last month. I've posted
a new [color-representation] protocol extension to improve YUV buffer
presentation.

Now for the mixed bag of miscellaneous updates. [mako] 1.7 has been released,
it includes support for multiple modes, which should make it possible to e.g.
create a light/dark mode and do-not-disturb mode without conflicts. [kimchi]
now supports live reloading its configuration file (previously a restart was
necessary). [dalligi] now mirrors sr.ht build logs on GitLab (as seen for
instance in [this wlroots pipeline][wlr-ci]). Last but not least, [hut] has
gained better webhook support thanks to Thorben Günther, and a more complete
export functionality thanks to Drew DeVault.

That's all for this month! No <abbr title="New Project of the Month">NPotM</abbr>
this time, sadly. See you!

[read-marker]: https://ircv3.net/specs/extensions/read-marker
[channel-context]: https://ircv3.net/specs/client-tags/channel-context
[soju]: https://soju.im
[Goguma]: https://sr.ht/~emersion/goguma
[gamja]: https://sr.ht/~emersion/gamja
[color-representation]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/153
[mako]: https://wayland.emersion.fr/mako
[kimchi]: https://sr.ht/~emersion/kimchi/
[dalligi]: https://git.sr.ht/~emersion/dalligi
[wlr-ci]: https://gitlab.freedesktop.org/wlroots/wlroots/-/jobs/25341916
