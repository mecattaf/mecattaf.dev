+++
date = "2024-12-15T00:00:00+02:00"
title = "Status update, December 2024"
slug = "status-update-71"
lang = "en"
tags = ["status update"]
+++

Hi!

For once let's open things up with the <abbr title="New Project of the Month">NPotM</abbr>.
I've started working on [sajin], an Android app which synchronizes camera
pictures in the background. I've grown tired of manually copying files around,
and I don't want to use proprietary services to backup my pictures, so I've
been meaning to write a tiny app to upload pictures to my server. It's super
simple: enter the WebDAV server URL and credentials, then just forget about the
app. It plays well with [sogogi] (my WebDAV file server) and [Photoview] (a Web
picture gallery). I'd like to implement feedback on synchronization status and
manual synchronization of older pictures. I really need to find an icon for it
too.

<div style="overflow-y: auto; white-space: nowrap;">
<img src="/img/blog/2024-12-15-status-update-71/sajin-setup.png" width="280" class="opaque" alt="Setup screen">
<img src="/img/blog/2024-12-15-status-update-71/sajin-success.png" width="280" class="opaque" alt="Success screen">
</div>

Once again, this month I've spent a fair bit of time on Sway and wlroots
bug fixes, in particular wlroots DRM backend issues affecting old GPUs (these
not supporting the atomic KMS API) and multi-GPU setups (I've had to bite the
bullet and bring my [super shaky setup] out of the closet). [wlroots 0.18.2]
has been released, among other things it also fixes some X11 drag-and-drop bugs
(thanks Consolatis!).

In IRC land, delthas has added [soju] support for the [metadata] extension,
enabling clients to mark conversations as pinned or muted. Once [senpai] and
[Goguma] add support for this extension, they will be able to synchronize this
bit of state. In other words, marking a conversation as pinned on a mobile
phone will also affect all other connected clients.

Thanks to John Regan, PostgreSQL message queries have been optimized by several
orders of magnitude: on large message stores, they now take a few milliseconds
instead of multiple seconds. I've turned on [WAL] mode for SQLite, which should
help with message insertion performance.

I've worked on making [Goguma] play better with direct connections to old IRC
servers such as Libera Chat and OFTC. These servers support only a few IRCv3
extensions, and they aggressively rate-limit TCP connections and commands
(including `CAP REQ` commands sent to initialize the connection). Goguma should
now reconnect less often on first setup and should connect more quickly (by
reducing the amount of `CAP REQ` commands).

Last, I've added proper support for GitLab Pages to [dalligi], a small bridge
to use builds.sr.ht as a GitLab CI runner. GitLab Pages requires to define a
special job with the exact name "pages", which is cumbersome with builds.sr.ht.
dalligi can now copy over artifacts of a previous job to this special "pages"
job. I hope this can be used to automatically publish [wlroots docs].

See you next year!

[sajin]: https://codeberg.org/emersion/sajin
[sogogi]: https://codeberg.org/emersion/sogogi
[Photoview]: https://github.com/photoview/photoview
[wlroots 0.18.2]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.18.2
[super shaky setup]: https://hachyderm.io/@emersion/113562552271170546
[soju]: https://soju.im
[metadata]: https://ircv3.net/specs/extensions/metadata
[senpai]: https://sr.ht/~delthas/senpai/
[Goguma]: https://codeberg.org/emersion/goguma
[WAL]: https://www.sqlite.org/wal.html
[dalligi]: https://git.sr.ht/~emersion/dalligi
[wlroots docs]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4247
