+++
date = "2022-12-19T00:00:00+02:00"
title = "Status update, December 2022"
slug = "status-update-48"
lang = "en"
tags = ["status update"]
+++

Hi!

Following last month's wlroots release, we've started the Sway release
candidate cycle. Kenny Levinsen and Ronan Pigott have helped fixing the bugs
and regressions that popped up, and I hope we'll be able to ship the final
release next week. I also plan to release wlroots 0.16.1 with the fixes we've
accumulated.

In other wlroots news, Manuel Stoeckl and I have continued to work on the
Vulkan renderer. A lot more pixel formats are now supported for textures, and
the buffer synchronization issues should all be sorted out. Next we'd like to
add support for rendering to high bit depth buffers for color management
purposes. This is a bit more involved since there is no shader stage which runs
after blending, so I'd like to experiment with compute shaders to see if
they're better suited for us. That ties in with the renderer API redesign I've
been planning for a while: the [new rendering API] should make it easier to use
compute shaders, and already shows a nice perf boost for the Pixman renderer.

I've been debugging some issues with USB-C docks where outputs wouldn't turn
back on after a plug-unplug-replug cycle. The result is an [i915 patch] which
fixes some of issues, but it seems there are more where that came from.
Ultimately this class of bugs should get fixed when we add support for
atomically turning off multiple outputs at once in wlroots, but this will
require a lot more work.

Alexander Orzechowski and I have been pushing [surface-invalidation], a new
Wayland protocol to help with GPU resets. GPU resets destroy the whole
GL/Vulkan state on the compositor side, so compositors which can recover from
resets are left with nothing to draw. The protocol allows compositors to
request a new buffer from clients.

New versions of swaybg, swayidle and slurp have been released. swaybg and
swayidle now take advantage of new protocols such as single-pixel-buffer-v1 and
ext-idle-notify-v1. slurp can now enforce a specific aspect ratio for the
selection rectangle, has a configurable font, and can print relative
coordinates in its format string.

[libdisplay-info] is growing bit by bit. Sebastian Wick has added support for
CTA short audio descriptors, and I've sent patches for CTA speaker allocation
data blocks. I've continued my work on [libjsonschema] to support JSON
serialization. By the way, libdisplay-info is [now used in DXVK] for EDID
parsing!

I've merged some nice patches from delthas for the soju IRC bouncer. Alongside
small quality-of-life improvements and fixes, a new [WHO cache] should make WHO
queries more reliable, no longer hitting the rate limits of the upstream
servers. Pending work on a [database-backed message store] will make chat
history much more reliable, faster, and lossless (currently we drop all message
tags). Last but not least, rj1 has implemented TLS certificate pinning to allow
soju to connect to servers using self-signed certificates.

The Goguma IRC client for Android also has received some love this month.
Various NOTICE and CTCP messages (e.g. from ChanServ or NickServ) should be
less annoying, as they're now treated as ephemeral. They don't open
notifications anymore, and if the user is not in a conversation with them the
messages show up in a temporary bar at the bottom of the screen. I've also
implemented image previews:

<center>
<img src="/img/blog/2022-12-19-status-update-48/goguma-image-preview.png" width="280" class="opaque" alt="Image previews in Goguma">
</center>

They are disabled by default because of privacy concerns, but can be enabled
in the settings. Only image links are supported for now, but I plan to add HTML
previews as well. Last, I've optimized the SQL queries run at startup, so
launching the app should be a bit faster now.

The <abbr title="New Project of the Month">NPoTM</abbr> is [glhf], a dead
simple IRC bot for GitLab projects. It'll announce GitLab events in the IRC
channel, and will expand links to issues and merge requests. We're using it in
`#sway-devel`, I'm pretty happy with it so far!

That's all for now, see you in January!

[new rendering API]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3631
[i915 patch]: https://patchwork.freedesktop.org/series/111967/
[surface-invalidation]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/180
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[libjsonschema]: https://sr.ht/~emersion/libjsonschema/
[now used in DXVK]: https://github.com/doitsujin/dxvk/pull/3076
[WHO cache]: https://git.sr.ht/~emersion/soju/commit/ec2c0685dd280da43b7422d677b42e2f75636758
[database-backed message store]: https://github.com/emersion/soju/pull/44
[glhf]: https://gitlab.freedesktop.org/emersion/glhf
