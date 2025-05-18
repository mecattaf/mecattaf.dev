+++
date = "2022-02-17T00:00:00+02:00"
title = "Status update, February 2022"
slug = "status-update-38"
lang = "en"
tags = ["status update"]
+++

Hi! This month I've prepared [a talk][fosdem-talk] for FOSDEM. It's about
optimizing GPU buffer allocations on Wayland. If you haven't already, check it
out!

<video preload="none" controls>
<source src="https://video.fosdem.org/2022/D.graphics/dmabuffeedback.webm" type="video/webm">
<source src="https://video.fosdem.org/2022/D.graphics/dmabuffeedback.mp4" type="video/mp4">
</video>

In other graphics news, wlroots 0.15.1 has been released with various fixes
(one to make Firefox popups work again, and a lot of the remaining ones are
about the new scene-graph API). Kirill Primak has been working on refactoring a
big chunk of our xdg-shell implementation. This effort improves the type safety
of our APIs. Simon Zeni has focused on refactoring our messy input device APIs.
This kind of work may not add any new feature, but really helps improving the
overall quality of the wlroots project. Thanks both!

I've released [libliftoff 0.2.0], which contains misc API improvements, a few
bug fixes, and new tests. For a library including some quite involved logic
like libliftoff, it's really great to have good test coverage. Also it's used
on the upcoming Steam Deck, so I got a few bug reports from there (some of
which had already a fix sitting in a merge request…). The next step is to plug
everything in wlroots, I've made some previous attempts but I'm wondering if a
[different approach][wlr-paint-list] might be simpler. More on that next month!

Support for a brand new [READ][soju-read] IRC extension has been merged in
soju and gamja. It allows clients to synchronize their unread markers. For
instance, if I read a discussion on my phone, then go back to my workstation,
it'll automatically be marked as read there too. That's a neat feature, and the
[spec][read-spec] is very simple. Thanks delthas for taking care of the soju
side! I'll look into submitting the extension to upstream IRCv3 once we've
obtained more real-world testing feedback.

Thanks to a lot of help from Thorben Günther, we've made steady progress in the
development of the [hut] CLI tool. Following the release of the todo.sr.ht
writable GraphQL API, hut has been updated with a new `hut todo` command to
list/delete trackers and show tickets. A variety of other new commands have
been added, e.g. to manage ACLs and work with mailing list patchsets. The
default mailing list used for the `hut lists` command is now parsed from the
Git sendemail configuration. Most of the commands have been updated to
consistently parse resource names. For instance, all of the following are
equivalent when working in the hut repository: `lists patchset apply 28951`,
`lists patchset apply ~emersion/hut-dev/28951` and
`lists patchset apply https://lists.sr.ht/~emersion/hut-dev/patches/28951`.

The official New Project of the Month is [hottub]. It's a simple CI bridge from
GitHub to SourceHut. Since dispatch.sr.ht will eventually be phased out I
needed a solution for my GitHub projects which haven't migrated elsewhere yet.
A nice side-effect is that hottub can be configured once for all GitHub
repositories, no need to manually configure each individual repository anymore.

See you next month!

[fosdem-talk]: https://fosdem.org/2022/schedule/event/dmabuffeedback/
[libliftoff 0.2.0]: https://gitlab.freedesktop.org/emersion/libliftoff/-/releases/v0.2.0
[wlr-paint-list]: https://gitlab.freedesktop.org/wlroots/wlroots/-/issues/3371
[hut]: https://sr.ht/~emersion/hut
[soju-read]: https://github.com/emersion/soju/pull/27
[read-spec]: https://git.sr.ht/~emersion/soju/tree/master/item/doc/ext/read.md
[hottub]: https://sr.ht/~emersion/hottub
