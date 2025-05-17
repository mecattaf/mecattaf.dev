+++
date = "2022-08-14T00:00:00+02:00"
title = "Status update, August 2022"
slug = "status-update-44"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month I've been pondering offline-first apps. The online aspect of modern
apps is an important feature for many use-cases: it enables collaboration
between multiple people and seamless transition between devices (e.g. I often
switch between my personal workstation, my laptop, and my phone). However
many modern apps come with a cost: often times they only work with a fixed
proprietary server, and only work online. I think that for many use-cases,
allowing users to pick their own open-source server instance and designing
offline-friendly apps is a good compromise between freedom and
ease-of-use/simplicity. Not to say that peer-to-peer or fully distributed apps
are always a bad choice, but they come at a significantly higher complexity
cost, which makes them more annoying to both build and use.

The main hurdle when writing an offline-first app is synchronization. All
devices must have a local copy of the database for offline use, and they need
to push changes to the server when the device comes online. Of course, it's
perfectly possible that changes were made on multiple devices while offline,
so some kind of conflict resolution is necessary. Instead of presenting a
"Oops, we've got a conflict, which version would you like to keep?" dialog to
the user, it'd be much nicer to just Do The Right Thing™. [CRDT]s are a solution
to that problem. They look a bit scary at first because of all of the obscure
naming (PN-Counter? LWW-Element-Set? anyone?) and intimidating theory in papers.
However I like to think of CRDTs as "use this one easy trick to make
synchronization work well", and not some kind of complicated abstract machinery.
In other words, by following some simple rules, it's not too difficult to write
well-behaved synchronization logic.

So, long story short, I've been experimenting with CRDTs this month. To get
some hands-on experience, I've started working on a small hacky group expense
tracking app, [seda]. I've got the idea for this
<abbr title="New Project of the Month">NPotM</abbr> while realizing that
there's no existing good open-source user-friendly collaborative
offline-capable (!) alternative yet. That said, it's just a toy for now,
nothing serious yet. If you want to play with it, you can have a look at the
[demo][seda demo] (feel free to toggle offline mode in the dev tools, then make
some changes, then go online). There's still a lot to be done: in particular,
things gets a bit hairy when one device deletes a participant and another creates
a transaction with that user at the same time. I plan to write some docs and
maybe a blog post about my findings.

I've released two new versions of software I maintain. [soju 0.5.0] adds
support for push notifications, a new IRC extension to search the chat history,
support for more IRCv3 extensions (some of which originate from soju itself),
and many other enhancements. [hut 0.2.0] adds numerous new commands and export
functionality.

In graphics news, I've been working on small tasks in various projects.
As part of my Valve contract, I've been investigating some DisplayPort MST
issues in the core kernel DRM code, and I've introduced a function to unset layer
properties in [libliftoff]. With the help of Petter Hutterer we've introduced a
new X11 [XWAYLAND] extension as a more reliable way for clients to figure out
whether they're running under Xwayland. Last, I've continued ticking more boxes
in [libdisplay-info]'s TODO list. We aren't too far from having a complete EDID
parser, but there are still so many extension blocks to add support for, and a
whole new high-level API to design.

See you next month!

[CRDT]: https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type
[seda]: https://git.sr.ht/~emersion/seda
[seda demo]: https://emersion.fr/seda/
[soju 0.5.0]: https://git.sr.ht/~emersion/soju/refs/v0.5.0
[hut 0.2.0]: https://git.sr.ht/~emersion/hut/refs/v0.2.0
[libliftoff]: https://gitlab.freedesktop.org/emersion/libliftoff/-/commit/9c84f7945aab0d88365f4c878f9de8a68deca3ea
[XWAYLAND]: https://who-t.blogspot.com/2022/08/the-new-xwayland-extension-is-available.html
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
