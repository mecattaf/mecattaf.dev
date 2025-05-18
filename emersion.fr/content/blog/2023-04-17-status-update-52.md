+++
date = "2023-04-17T00:00:00+02:00"
title = "Status update, April 2023"
slug = "status-update-52"
lang = "en"
tags = ["status update"]
+++

Hi!

In the last month I've continued working on [go-imap] v2. I've written the
server side, implemented an in-memory server backend, and spent quite a bit of
time fixing issues reported by [imaptest]. I only have a handful of test
failures, most of which due to `\Recent` being unimplemented on purpose because
it's been removed from the new IMAP4rev2 RFC. The end result is a much more
correct and reliable server implementation compared to v1. I've pushed some
incremental improvements for the client side as well, fixing compatibility
issues with servers in the wild and adding a few more extensions. Next, I'd
like to explore server-side command pipelining and fix the remaining issues
related to unilateral updates.

In other news, I've (finally!) released new versions of soju and goguma.
[soju v0.6.0] adds a database message store, a new sojuctl utility, external
authentication support, and many more improvements. [goguma v0.5.0] adds image
previews, UnifiedPush support, performance improvements, and new IRCv3
extensions. Since the goguma release I've also implemented previews for Web
pages.

While we're on the topic of new releases, there is one more piece of software
which got its version bumped this month: [hut v0.3.0] adds pagination, improved
Web hooks support, a few new sub-commands and other quality-of-life
improvements. Thanks a lot to Thorben Günther for their numerous contributions!

The <abbr title="New Project of the Month">NPotM</abbr> is [yojo]. I've already
written two tools to integrate builds.sr.ht with other code forges, so here's a
third one focused on Forgejo/Gitea. It's pretty similar to [hottub], a [public
instance][yojo public instance] is available for [Codeberg] integration. It
doesn't support pull requests yet, patches welcome! While working on yojo I got
once again [annoyed] by `golang.org/x/oauth2` so I started working on a simpler
alternative creatively called [go-oauth2].

Last but not least, after days of battling with the Pixman API, I've managed to
finish up my [new renderer API] for wlroots. I'm excited about it because the
next step is to lay down the first bricks of the color management
infrastructure. My plan is to work on basic support for per-output ICC
profiles, then go from there. I'll be participating in Red Hat's [HDR hackfest]
next week, I hope the discussions with the rest of the stakeholders (compositor
and driver developers) can help us move this forward!

That's all for April, see you next month!

[go-imap]: https://github.com/emersion/go-imap
[imaptest]: https://imapwiki.org/ImapTest
[soju v0.6.0]: https://git.sr.ht/~emersion/soju/refs/v0.6.0
[goguma v0.5.0]: https://git.sr.ht/~emersion/goguma/refs/v0.5.0
[hut v0.3.0]: https://git.sr.ht/~emersion/hut/refs/v0.3.0
[yojo]: https://sr.ht/~emersion/yojo/
[hottub]: https://git.sr.ht/~emersion/hottub
[yojo public instance]: https://yojo.emersion.fr
[Codeberg]: https://codeberg.org/
[annoyed]: https://octodon.social/@emersion/110153938634205864
[go-oauth2]: https://git.sr.ht/~emersion/go-oauth2
[new renderer API]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3631
[HDR hackfest]: https://wiki.gnome.org/Hackfests/ShellDisplayNext2023
