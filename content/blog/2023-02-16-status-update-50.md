+++
date = "2023-02-16T00:00:00+02:00"
title = "Status update, February 2023"
slug = "status-update-50"
lang = "en"
tags = ["status update"]
+++

Hi!

Earlier this month I went to FOSDEM with the rest of the SourceHut staff! It
was great meeting face-to-face all of the people I work with. I discussed with
lots of folks involved in Wayland, IRC, SourceHut and many other interesting
projects. This was my first post-pandemic offline conference

Last week we've released [wlroots 0.16.2] and [Sway 1.8.1]. We've spent a fair
bit of time trying to square away regressions, and I think we've addressed
almost all of them. This doesn't mean we haven't made any progress on new
features and improvements, quite the contrary. We've merged [Kenny Levinsen's
patches] for the new fractional-scaling-v1 protocol, which allows clients to
render at fractional scales rather than being forced to use the next integer
scale. I've continued working on the [new `wlr_renderer` API], and I've started
experimenting with [Vulkan compute]. I'm still not sure this is the right path
forward, we'll see where this takes us.

I've made a lot of progress on [libliftoff] integration in wlroots. I've
extended the [`wlr_output_layer` API] to include a feedback mechanism so that
clients can re-allocate their buffers on-the-fly to enable direct scan-out on
overlay planes. I've wired this up to a [new libliftoff API] to query which
planes would be good candidates for direct scan-out. I've fixed the remaining
wlroots bugs, optimized libliftoff… What's left is another testing and review
round, but we're getting close!

By the way, the wlroots IRC channel has moved. We were (ab)using #sway-devel
up until now, but now wlroots has its own separate #wlroots channel. Make sure
to join it if you've been idling in #sway-devel!

In other Wayland news, I've [landed a patch][wl_surface preferred scale and
transform] to add two new `wl_surface` events to indicate the preferred scale
and transform a client should use. No more guesswork via `wl_output`! I've also
sent out the schedule for the next Wayland release, if all goes well we'll ship
it in two months.

[libdisplay-info 0.1.0] has been released! After months of work, this initial
release includes full support for EDID, partial support for CTA-861-H, and very
basic support for DisplayID 1.3. Having a release out will allow us to leverage
the library in more projects: it's already used in DXVK and gamescope, I have
a patch to use it in wlroots, and there are plans to use it in Mutter and
Weston.

The <abbr title="New Project of the Month">NPotM</abbr> is [pixfmtdb]. It's a
simple website which describes the in-memory layout of pixel formats from
various graphics APIs. It also provides compatibility information: for each
format, equivalent formats coming from other APIs are listed. This can be handy
when wiring up multiple APIs together, for instance Cairo and Wayland, or
Vulkan and KMS. Under the hood, the [Khronos Data Format Specification] is used
to describe pixel formats in a standard way.

Recently delthas has been hard at work and has landed a lot of [soju] patches.
The new `user run` BouncerServ command can be used to run a command as another
user, which can be handy for administrators. soju now supports Unix admin
sockets to run any BouncerServ command from the shell. And support for external
authentication has been merged (right now, PAM and OAuth 2.0 are supported).

That's all for now! See you next month.

[wlroots 0.16.2]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.16.2
[Sway 1.8.1]: https://github.com/swaywm/sway/releases/tag/1.8.1
[Kenny Levinsen's patches]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3511
[new `wlr_renderer` API]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3631
[Vulkan compute]: https://gitlab.freedesktop.org/wlroots/wlroots/-/issues/3265
[libliftoff]: https://gitlab.freedesktop.org/emersion/libliftoff
[`wlr_output_layer` API]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3640
[new libliftoff API]: https://gitlab.freedesktop.org/emersion/libliftoff/-/merge_requests/71
[wl_surface preferred scale and transform]: https://gitlab.freedesktop.org/wayland/wayland/-/merge_requests/220
[libdisplay-info 0.1.0]: https://lore.kernel.org/dri-devel/eUGSsAPs9QWiofs9rUjNcIffY-PZRaZwsmwUA2NYKBijdqT7cW-4Mv0Lq9k_A6ptlYC8kXnSUV257b-T8AzsfYVJK_MO9shEOyIit_HoU-g=@emersion.fr/T/#u
[pixfmtdb]: https://pixfmtdb.emersion.fr/
[Khronos Data Format Specification]: https://registry.khronos.org/DataFormat/specs/1.3/dataformat.1.3.html
[soju]: https://soju.im/
