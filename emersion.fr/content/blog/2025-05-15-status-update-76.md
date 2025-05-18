+++
date = "2025-05-15T00:00:00+02:00"
title = "Status update, May 2025"
slug = "status-update-76"
lang = "en"
tags = ["status update"]
+++

Hi!

Today [wlroots 0.19.0] has finally been released! Among the newly supported
protocols, color-management-v1 lays the first stone of HDR support (backend
and renderer bits are still being reviewed) and ext-image-copy-capture-v1
enhances the previous screen capture protocol with better performance. Explicit
synchronization is now fully supported, and display-only devices such as gud or
DisplayLink can now be used with wlroots. See the release notes for more
details! I hope I'll be able to go back to some feature work and reviews now
that the release is out of the way.

In other graphics news, I've finished my review of the core DRM patches for the
[new KMS color pipeline]. Other kernel folks have reviewed the patches, we're
just waiting on a user-space implementation now (which various compositor folks
are working on). I've [started a discussion][libliftoff#85] about libliftoff
support.

In addition to wlroots, this month I've also released a new version of my
mobile IRC client, [Goguma 0.8.0]. delthas has sent a patch to synchronize
pinned and muted conversations across devices via soju. Thanks to pounce,
Goguma now supports message reactions (not included in the release):

<div style="overflow-y: auto; white-space: nowrap;">
<img src="/img/blog/2025-05-15-status-update-76/reaction-bubble.png" width="280" class="opaque" alt="A conversation with a reaction to a message">
<img src="/img/blog/2025-05-15-status-update-76/reaction-menu.png" width="280" class="opaque" alt="Message menu with quick reaction buttons">
<img src="/img/blog/2025-05-15-status-update-76/emoji-grid.png" width="280" class="opaque" alt="Emoji picker">
<img src="/img/blog/2025-05-15-status-update-76/reaction-list.png" width="280" class="opaque" alt="Detailed list of reactions to a message">
</div>

My [extended-isupport] IRCv3 specification has been accepted. It allows servers
to advertise metadata such as the maximum nickname length or IRC network name
early (before the user provides a nickname and authentication details), which
is useful for building nice connection UIs. I've posted another proposal for
[IRC network icons].

[go-smtp 0.22.0] has been released with an improved `DATA` command API, RRVS
support (Require Recipient Valid Since), and custom hello after reset or
STARTTLS. I've also spent quite a bit of time reaching out to companies for
[XDC 2025] sponsorships.

See you next month!

[wlroots 0.19.0]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.19.0
[new KMS color pipeline]: https://lore.kernel.org/dri-devel/20250430011115.223996-1-alex.hung@amd.com/
[libliftoff#85]: https://gitlab.freedesktop.org/emersion/libliftoff/-/issues/85
[Goguma 0.8.0]: https://codeberg.org/emersion/goguma/releases/tag/v0.8.0
[extended-isupport]: https://github.com/ircv3/ircv3-specifications/pull/543
[IRC network icons]: https://github.com/ircv3/ircv3-specifications/pull/563
[go-smtp 0.22.0]: https://github.com/emersion/go-smtp/releases/tag/v0.22.0
[XDC 2025]: https://indico.freedesktop.org/event/10/
