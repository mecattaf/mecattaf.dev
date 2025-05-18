+++
date = "2025-01-19T00:00:00+02:00"
title = "Status update, January 2025"
slug = "status-update-72"
lang = "en"
tags = ["status update"]
+++

Hi all!

FOSDEM is approaching rapidly! I'll be there and will give a [talk about
modern IRC].

In wlroots land, we've finally merged support for the next-generation screen
capture protocols, [ext-image-capture-source-v1 and
ext-image-copy-capture-v1][wlr-screen-capture]! Compared to the previous
wlroots-specific protocol, the new one provides better damage tracking, enables
cursor capture (useful for remote desktop apps) and per-window capture (this
part is not yet implemented in wlroots). Thanks to Kirill Primak, wlroots now
supports the [xdg-toplevel-icon-v1][wlr-toplevel-icon] protocol, useful for
clients which want to update their window icon without changing their
application ID (either by providing an icon name or pixel buffers). Kirill
also [added safety assertions][wlr-listener-asserts] everywhere in wlroots to
ensure that all listeners are properly removed when a struct is destroyed.

I've revived some old patches to better identify outputs in wlroots and
libdisplay-info. Currently, there are two common ways to refer to an output:
either by its name (e.g. "DP-2"), or by its make+model+serial (e.g. "Foo Corp
C4FE 42424242"). Unfortunately, both of these naming schemes have downsides.
The name is ill-suited to configuration files because it's unstable and might
change on reboot or unplug (it depends on driver load order, and DP-MST
connectors get a new name each time they are re-plugged). The make+model+serial
uses a database to look up the human-readable manufacturer name (so database
updates break config files), and is not unique enough (different models might
share a duplicate string). A new [`wlr_output.port`][wlr-conn-port] field
and a [libdisplay-info device tag][libdi-dev-tag] should address these
shortcomings.

Jacob McNamee has [contributed a Sway patch][sway-sandbox] to add security
context properties to IPC, criteria and title format. With this patch, scripts
can now figure out whether an application is sandboxed, and a special title can
be set for sandboxed (or unsandboxed) apps. There are probably more use-cases
we didn't think of!

I've managed to put aside some time to start reviewing the [DRM color pipeline
patches]. As discussed in the last XDC it's in a pretty good shape so I've
started dropping some `Reviewed-by` tags. While discussing with David Turner
about [libliftoff], I've realized that the `DRM_MODE_PAGE_FLIP_EVENT` flag was
missing some documentation (it's not obvious how it interacts with the atomic
uAPI) so I've [sent a patch][page-flip-docs] to fix that.

I continue pushing small updates to [go-imap], bringing it little by little
closer to version 2.0. I've added helpers to make it easier for servers to
implement the `FETCH` command, implemented `FETCH BINARY` and header field
decoding for `SEARCH` in the built-in in-memory server, added limits for the
IMAP command size to prevent denial-of-service, and fixed a few bugs. While
testing with [ImapTest], I've discovered and fixed [a bug in Go's
`mime/quotedprintable` package][qp-bug].

Thanks to pounce, goguma now internally [keeps track of message reactions][goguma-react].
This is not used just yet, but will be soon once we add a user interface to
display and send reactions. Support for [deleting messages][goguma-redact]
(called "re<b>d</b>act" in the spec) has been merged. I've also implemented a
small date indicator which shows up when scrolling in a conversation.

That's all for this month, see you at FOSDEM!

<!--
TODO: keep for next status update
I've [sent a small patch][i3status-rust-disk-stats] for i3status-rust to add a
new block displaying information about disk I/O statistics (for now, just
read/write speed). Sometimes my machine is slow due to a background task doing
a lot of I/O, I find it nice to have this info at hand to better understand
what's up in these situations.
-->

[talk about modern IRC]: https://fosdem.org/2025/schedule/event/fosdem-2025-6407-chatting-on-irc-in-2025-grandpa-what-s-up-/
[go-imap]: https://github.com/emersion/go-imap
[ImapTest]: https://github.com/dovecot/imaptest/
[qp-bug]: https://go-review.googlesource.com/c/go/+/638276
[DRM color pipeline patches]: https://lore.kernel.org/dri-devel/20241220043410.416867-1-alex.hung@amd.com/
[libliftoff]: https://gitlab.freedesktop.org/emersion/libliftoff
[page-flip-docs]: https://lore.kernel.org/dri-devel/20250116162528.2235991-1-contact@emersion.fr/T/#u
[i3status-rust-disk-stats]: https://github.com/greshake/i3status-rust/pull/2119
[wlr-conn-port]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3979
[libdi-dev-tag]: https://gitlab.freedesktop.org/emersion/libdisplay-info/-/merge_requests/188
[wlr-screen-capture]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4545
[wlr-toplevel-icon]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4704
[wlr-listener-asserts]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4918
[sway-sandbox]: https://github.com/swaywm/sway/pull/8521
[goguma-react]: https://codeberg.org/emersion/goguma/pulls/1
[goguma-redact]: https://codeberg.org/emersion/goguma/pulls/13
