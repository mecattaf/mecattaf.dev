+++
date = "2023-10-25T00:00:00+02:00"
title = "Status update, October 2023"
slug = "status-update-57"
lang = "en"
tags = ["status update"]
+++

Hi all, long time no see! It's been more than two months since the last status
update. My excuse for this silence is two-fold: I was on leave for 5 weeks,
and then [X.Org Developer's Conference][XDC] happened. During my time off,
I've traveled in Korea and Japan. I will be blunt: these last two months have
been fantastic! And to be honest, that's a huge understatement.

![Busan view from Jangsan](https://pxscdn.com/public/m/_v2/1521/f1538e3aa-7b3151/szQZbtIs7rgT/mULRQYscLuW86sjRI6dHuMM89lLgaVUchxrPeGnn.jpg)

![East gate](https://pxscdn.com/public/m/_v2/1521/f1538e3aa-7b3151/EeHyXzOn2U1p/Kngw1IvQ8mMvnpFAGfMDGWDUkAzbbYIaAYB9lvnU.jpg)

After my trip in Asia, I went to a 2-day Valve hackfest in Igalia's
headquarters. I met other Valve contractors there, we discussed about various
topics such as color management, variable refresh rate, flicker-free startup,
and more.

At XDC, there were lots of interesting talks and workshops: HDR by Joshua and
Melissa, NVK by Faith, Asahi by Alyssa et al, wlroots frame scheduling by Rose
(my GSoC student), CI by Martin, VKMS by Maíra, Wine Wayland by Alexandros,
Wine X11 by Arek, and many more! Everything should be available online if you
haven't watched live. That said, as usual, the part I enjoyed the most is the
so-called hallway track. It's great to have free-form discussions with fellow
graphics developers, it results in a pretty different train of thought than the
usual focused discussions we have online.

Apart from these events, I've found some time to do a bit of actual work, too.
I've re-spinned an old patch I wrote to introduce a new [CLOSEFB] IOCTL, to
allow a DRM master to leave a framebuffer on-screen when quitting so that the
next DRM master can take over without a black screen in-between. This time I
also included a user-space patch and an IGT test (both requirements for new
kernel uAPI). I sent (and merged) [another kernel patch][relax registered check]
to fix black screens in some situations when unplugging USB-C docks.

On the Wayland side, I continued working on explicit synchronization, updating
the protocol and submitting a [gamescope patch]. Joshua has been working on a
[Mesa patch], so all of the pieces are coming together now. On the SourceHut
side, I've sent a patch to add HTTP/2 support to [pages.sr.ht]. It's been
merged and deployed, enjoy! The
<abbr title="New Project of the Two Months">NPotTM</abbr> is [libicc], a small
library to parse ICC profile files. Unlike LittleCMS, it provides lower-level
access to the ICC structure and the exact color transformation operations.

That's all for now, see you next month!

[XDC]: https://indico.freedesktop.org/event/4/
[CLOSEFB]: https://lore.kernel.org/dri-devel/20231020101926.145327-2-contact@emersion.fr/
[relax registered check]: https://lore.kernel.org/dri-devel/20231005131623.114379-1-contact@emersion.fr/
[gamescope patch]: https://github.com/ValveSoftware/gamescope/pull/982
[Mesa patch]: https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/25709
[pages.sr.ht]: https://pages.sr.ht
[libicc]: https://gitlab.freedesktop.org/emersion/libicc
