+++
date = "2024-07-16T00:00:00+02:00"
title = "Status update, July 2024"
slug = "status-update-66"
lang = "en"
tags = ["status update"]
+++

Hi!

This month [wlroots 0.18.0] has been released! This new version includes a fair
share of niceties: ICC profiles, GPU reset recovery, less black screens when
plugging in a monitor on Intel, a whole bunch of new protocol implementations,
and much more. Thanks a lot to all contributors! Two recent merge requests made
it in the release: Kenny's Vulkan renderer optimizations, and support for the
[`SIZE_HINTS` KMS property] to use a smaller cursor plane on Intel to save power.
For the next release we'll be trying out release candidates to formally focus
on bugfixing and leave time for compositors and language bindings to update and
report issues.

I've continued working on various graphics-related topics, for instance the
wlroots implementation of the upcoming [ext-screencopy-v1] protocol is now
complete and the protocol itself is almost ready (still figuring out the most
difficult part: how to name it). I also sent out a kernel patch to [fix tearing
page-flips] when cursor/overlay planes don't change (and are included in the
atomic commit). I reviewed patches by Enrico Weigelt to improve libdrm's
portability to OpenBSD and Solaris. Last, I've released [libdisplay-info 0.2.0]
with a new high-level API for colorimetry and support for more
EDID/CTA/DisplayID blocks.

To get the releases over with, let's briefly mention [Goguma 0.7.0]. This one
unlocks file uploads, a new look based on Material You with an adaptive color
scheme, many improvements to the iOS port, and text/media can be shared to
Goguma from other apps. slingamn has played with a gamja/Ergo setup configured
with Forgejo as an OAuth server, and it worked nicely after fixing a gamja
SASL-related bug and implementing a missing feature in Forgejo's OAuth token
introspection endpoint!

Last, I also added a new [libscfg] API to write files - this can be useful to
auto-generate some configuration files for instance. And I also performed some
more boring X.Org Foundation sysadmin stuff, such as dealing with
domain-related issues, recovering a server running out of disk space again, and
convincing Postfix to start up.

See you next month!

[wlroots 0.18.0]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.18.0
[`SIZE_HINTS` KMS property]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4620
[ext-screencopy-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/124
[fix tearing page-flips]: https://lore.kernel.org/dri-devel/20240629152204.666748-1-contact@emersion.fr/
[libdisplay-info 0.2.0]: https://lists.freedesktop.org/archives/wayland-devel/2024-June/043678.html
[goguma 0.7.0]: https://git.sr.ht/~emersion/goguma/refs/v0.7.0
[libscfg]: https://git.sr.ht/~emersion/libscfg
