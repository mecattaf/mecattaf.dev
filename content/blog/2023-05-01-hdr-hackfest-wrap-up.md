+++
date = "2023-05-01T00:00:00+02:00"
title = "HDR hackfest wrap-up"
slug = "hdr-hackfest-wrap-up"
lang = "en"
tags = ["gfx"]
+++

Last week I've been attending the [HDR hackfest] organized by Red Hat. The trip
to Prague was rather chaotic: the morning right after the [SourceHut DoS
incident], I got a notification that my plane was cancelled, so had to re-book
a new flight and hotel. Then a few hours before leaving for the airport, I
realized that the train line to get there was cut off, so I had to take a
longer route via bus (and of course, everybody taking a plane had the same
idea). Thankfully Saturday evening I arrived in Prague as planned, and even had
some time before the train the next day to visit the old city center with the
Jewish cemetery and synagogues, and enjoy a traditional guláš. I arrived at
Brno — the venue of the hackfest — on Sunday evening.

I met with some hackfest participants Monday morning in the hotel lobby, then
we joined everybody else at the Red Hat office. People from various
organizations were on-site: Red Hat, KDE, System76, AMD, Igalia, Collabora,
Canonical, etc. Some more people from NVIDIA, Intel and Google joined us
remotely (some of them waking up at 2 AM due to their timezone!). It was super
nice meeting all these folks I've been working with remotely for years!

![](https://media.pixelfed.social/public/m/_v2/1521/c537ce87c-f5971d/yLQr10N01cGA/NZCL2D9vsymvGZNnLBJJMp8jYiMstXGmHaKXg7jc.jpg)

Sebastian had prepared a list of topics we could discuss. We started by
brainstorming use-cases we cared about for HDR and color management. There are
two main separate classes of users here: one wants to enjoy HDR movies and
games, the other wants to perform color-critical work such as image or video
editing. The former mainly cares about the colors looking _good_, while the
latter cares about the colors looking _right_. These two use-cases are kind of
orthogonal (a compositor can implement one without the other) but still closely
related. We noted that displaying a single HDR surface full-screen is pretty
easy to achieve but we really want to properly handle mixing HDR and SDR
content, if only to be able to display overlay menus, notifications, cursors,
and so on (and of course windowed HDR content). Additionally keeping the power
usage down is important for mobile devices. We mentioned a million of other
issues (screen recording, brightness adjustment, "Night Light" feature, etc)
but this blog post would turn into a thick book if I tried to cover everything.

Then we switched gears and discussed about variable refresh rate (VRR). There
are two unresolved issues when it comes to VRR: cursor handling and flickering.
The first issue manifests itself when the cursor plane is moved while VRR is
enabled. Either the cursor is moved at the maximum refresh rate (effectively
disabling VRR), either the cursor is moved at the game/video refresh rate
(resulting in a very choppy result). We need a new kernel uAPI to move the
cursor plane without scheduling a new page-flip somehow. The second issue is
that some screens (not all) flicker when the refresh rate is changed abruptly.
This is a bit annoying to handle, we need to ensure that refresh rate changes
are smoothed over multiple frames for these displays. It would be best for
user-space to handle this, because the refresh rate compensation will mess up
frame timings. It would be nice to be able to automatically tell apart "good"
and "bad" screens, there are some HDMI and DisplayID standards for this but
they are not widely supported. More experimentation and testing is required to
figure out how much we can do in user-space.

Then we got into the color management topics. First the "easy" part: AMD is
missing support for the [Colorspace KMS property]. There are patches floating
around but a blocker: AMD may decide to encode the signal as either RGB or YUV
on the wire depending on the available bandwidth, and the Colorspace property
has different enum entries for RGB and YUV. However user-space has no way to
know whether the driver picked RGB or YUV, so has no way to pick the correct
enum entry. We decided that the best course of action was to retain backwards
uAPI compatibility by keeping the existing enum entries, but treat them as
equal in the driver and let it Do The Right Thing. That way user-space can
unconditionally pick the RGB variant and the driver will silently convert that
to the YUV variant if it happens to encode the signal as YUV on the wire.

Before we got into some more complicated color management and HDR discussions,
Sebastian and Pekka explained in more detail how it's all supposed to work.
This is a very wide and tricky topic, so it can be especially complicated to
learn and understand. Pekka gave some enlightening and colorful explanations
(see what I did here?), I believe that helped a lot of people in the room. If
you are interested, have a look at the [learn page] in Pekka's color-and-hdr
repository.

![](https://media.pixelfed.social/public/m/_v2/1521/c537ce87c-f5971d/ttL851GmdlyA/k80OQPEgtBYctLh1esgwBnFBBxFUlnKdBNhGzSqF.jpg)

With that out of the way, we started debating about vendor-specific KMS
properties. With the existing kernel uAPI, compositors can implement HDR and
color management just fine, but have to resort to OpenGL or Vulkan shaders.
This isn't great for power efficiency, because this keeps the 3D engine in GPUs
busy. Ideally we want to offload all color transformations to the display
engine and keep the 3D engine completely idle (during video playback with
hardware-accelerated decoding for instance). So we need a new kernel API.

A week before, Melissa has sent a [patch series][AMD color management] to
introduce AMD-specific KMS properties to configure various color management
related hardware blocks. The [amdgpu documentation] explains exactly what these
hardware blocks are. Josh has implemented support for this in [gamescope] and
this will be shipped in SteamOS soon. This is great, because this is the first
time a real HDR compositor has been implemented on Linux, and with full
hardware acceleration even! If nothing else, this is a very valuable testing
grounds. So the question we asked ourselves is whether or not we want to merge
the KMS vendor-specific properties. On one hand this allows easier and wider
experimentation to come up with a good vendor-neutral uAPI. On the other hand
we don't want to end up stuck with vendor-specific user-space and no generic
API. Everybody had a different opinion on this topic, so that made for an
interesting discussion. At the end, we agreed that we can merge vendor-specific
color management properties on the condition that the uAPI is documented as
unstable, hidden behind an experimental build option and a kernel parameter.
This should allow for more testing while avoiding the pitfalls of hardcoding
chunks of vendor-specific code in each compositor.

Things got really interesting when we discussed about long-term plans. We want
to design some kind of vendor-neutral API that compositors can use to program
the color pipeline in GPUs. Other platforms (e.g. Android) typically provide a
_descriptive_ API: compositors set the color space and other related parameters
for the source and the destination, and the driver comes up with the appropriate
hardware configuration. However there are multiple ways of doing color
conversions (e.g. gamut and tone mapping). Each way will give a different
result. This will result in glitches when switching between OpenGL/Vulkan and
KMS offloading. Unfortunately the switches can happen pretty often, e.g. when
a notification comes in, or when a window is moved around. Another issue is
that the descriptive API doesn't give full control to the compositors, thus
compositors cannot come up with novel color pipelines. We've decided that for
KMS a _prescriptive_ API would be superior: drivers expose a list of available
hardware blocks (mathematical operations like look-up tables and matrices),
then user-space directly programs each hardware block. The tricky part is
coming up with a good API which fits all hardware, present and future. It would
seem like this design would work well for AMD and Intel hardware, but NVIDIA
GPUs are more opinionated and have hardware blocks converting between two fixed
color spaces and cannot be disabled. We decided that it would be reasonable to
expose these fixed hardware blocks to user-space as well just like any other
hardware block. I will soon send an RFC to the dri-devel mailing list with more
details about our API proposal.

Since the kernel API would just expose what the hardware can do (very much like
KMS planes), user-space will need to translate its color pipeline to the
hardware, and fallback to shaders if it cannot leverage the hardware. We plan
to establish a common user-space library (similar to libliftoff) to help
offload color pipelines to KMS.

Throughout the days we had various other discussions, for instance about
testing or about new features we'd like KMS to have. The detailed notes should
get published soon if you're interested.

You can probably tell, we didn't write much code during this hackfest. We just
talked together the whole time. Everyone was very passionate and invested in
the topics we discussed. The hackfest was very exhausting, by 5 PM the
discussions were a lot slower. However that effort payed off, and we've made
great progress! We now have a clear path forward, and I can't wait to see the
fruits of the hackfest materialize in various Git repositories. Many thanks to
Carlos for organizing everything, and to Red Hat + Collabora for sponsoring the
event!

[HDR hackfest]: https://wiki.gnome.org/Hackfests/ShellDisplayNext2023
[SourceHut DoS incident]: https://status.sr.ht/issues/2023-04-20-unplanned-outage/
[Colorspace KMS property]: https://drmdb.emersion.fr/properties/3233857728/Colorspace
[learn page]: https://gitlab.freedesktop.org/pq/color-and-hdr/-/blob/main/doc/learn.md
[AMD color management]: https://patchwork.freedesktop.org/series/116863/
[amdgpu documentation]: https://dri.freedesktop.org/docs/drm/gpu/amdgpu/display/display-manager.html#c.dc_validation_set
[gamescope]: https://github.com/ValveSoftware/gamescope/blob/171655531375689c8dcd4eb1efcf5c6e67468a56/src/docs/Steam%20Deck%20Display%20Pipeline.png
