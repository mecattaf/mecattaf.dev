+++
date = "2022-09-15T00:00:00+02:00"
title = "Status update, September 2022"
slug = "status-update-45"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month I've been working on stuff I'd usually not work on willingly. And by
that I mean Rust and screen tearing of course.

I've been randomly typing keys on my keyboard and before I knew it, a
[wlroots-rs] repository was created. Everybody is saying how difficult (or even
impossible) it is to write Rust bindings for wlroots so I wanted to see for
myself and give it a try. One thing is clear: these people weren't wrong. The
first step was to wire up `bindgen` to automatically generate Rust declarations
from the wlroots headers, and that was easy enough. Then I needed to figure out
how to use libwayland's intrusive linked lists (`wl_list`, `wl_signal` and
`wl_listener`) from Rust. I took a while to build a basic example where a
fixed `wl_signal` is listened to. Then it took more time to figure out a
(hacky) way to abstract that into a re-usable helper. And now I'm stuck at
trying to figure out a reasonable Rust API.

The main issue is that Rust lifetime concepts don't map well to wlroots/Wayland.
I've taken some inspiration from [Smithay] and introduced a `BackendHandler`
trait which can be implemented by a compositor, and which has its methods
called when a wlroots signal is emitted. This works nicely for simple cases,
but sometimes signals are used to introduce new objects to the compositor
(e.g. `wlr_backend.events.new_output`). Sometimes signals reference an existing
object. If the compositor owns all wlroots objects, then wlroots can't fire a
signal referencing these objects. Also, the compositor would like to listen to
signals on objects created by wlroots, e.g. `wlr_output.events.destroy`. My
next try will maybe introduce some kind of wlroots object handle (and there can
be multiple handles referencing the same wlroots object), but not sure how it'll
turn out. If you have any good ideas, please share! My latest work is sitting
in the [`handler-v2` branch][wlroots-rs-handler-v2].

In other graphics news, I've been working on adding screen tearing support to
the kernel and Wayland. In the past I've been pretty averse to screen tearing,
because I personally find it very undesirable. But I've come to understand that
it can be viewed as a user preference, and some people want to turn it on when
playing a game. After seeing some people ask about it in #wayland, and seeing
that Valve wants it too, I've decided to bite the bullet and implement the
missing pieces. To be clear, tearing will be opt-in, only used when explicitly
enabled by the user.

There are two missing pieces. The first one is in the kernel uAPI: user-space
has no way to perform tearing page-flips with the atomic uAPI. I've sent
[patches][kms-atomic-async-flip] to address this. The second missing piece is
in the Wayland protocol: Vulkan apps have a way to request tearing via
`VK_PRESENT_MODE_IMMEDIATE_KHR`, but Mesa doesn't have a way to communicate
this preference to the Wayland compositor. Xaver Hugl has been working on a
[protocol extension][wl-tearing-updates] for this, and I've been working on
a Mesa implementation.

Work on [libdisplay-info] is continuing slowly. The EDID format is really
trying very hard to be as annoying to parse as possible, but it makes for a
good project to work on when I don't want to think too much. I've started
adding DisplayID support, which is the more modern standard for display device
metadata. I've experimented a bit with Emscripten and wrote a
[web version][libdisplay-info-web] of the tool.

As a freedesktop.org sysadmin, I've migrated our secondary nameservers. We were
using SPI's nameservers but these are getting decommissioned, so I've switched
to Gandi's. I've also investigated issues with our SMTP server: spammers were
issuing a lot of subscription requests, so our outgoing queue was full and
mail providers were starting to reject our emails. I had to ban the spammers
and purge the bad emails from our queue.

I've made some good progress on IRC software. If you haven't read it already,
I've written a blog post about ongoing work on [OAuth integration with IRC].
[Goguma] finally gained support for the `/me` command and better handles sending
long messages. I've released a new bugfix version of [soju], with various
stability improvements around stuck `WHO` responses and Web Push. I've also
fixed a bug in [OFTC's server][oftc-fix] which was causing some issues with
soju and Goguma.

That's it for now, see you next month!

[wlroots-rs]: https://git.sr.ht/~emersion/wlroots-rs
[Smithay]: https://github.com/Smithay/smithay
[wlroots-rs-handler-v2]: https://git.sr.ht/~emersion/wlroots-rs/tree/handler-v2/item/wlroots-sys/examples/basic.rs
[kms-atomic-async-flip]: https://patchwork.freedesktop.org/series/107683/
[wl-tearing-updates]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/65
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[libdisplay-info-web]: https://emersion.fr/libdisplay-info/
[OAuth integration with IRC]: https://emersion.fr/blog/2022/irc-and-oauth2/
[Goguma]: https://sr.ht/~emersion/goguma/
[soju]: https://soju.im
[oftc-fix]: https://github.com/oftc/oftc-hybrid/pull/71
