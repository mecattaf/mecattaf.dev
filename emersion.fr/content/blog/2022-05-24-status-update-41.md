+++
date = "2022-05-24T00:00:00+02:00"
title = "Status update, May 2022"
slug = "status-update-41"
lang = "en"
tags = ["status update"]
+++

Hi all! This month's status update will be shorter than usual, because I've
taken some time off to visit Napoli. Discovering the city and the surrounding
region was great! Of course the main reason to visit is to taste true
Neapolitan pizza. I must admit, [this][Pepe in Grani] [wasn't][Gorizia]
[a let-down][AVPN]. Should you also be interested in pizza, I found some time
to put together a tiny <abbr title="New Project of the Month">NPotM</abbr>
which displays a [map of Neapolitan pizzerias](https://avpn.emersion.fr). The
source is [on sr.ht][avpn-extract].

![Landscape of the Amalfi coast](/img/blog/2022-05-24-status-update-41/amalfi.jpg)

But that's enough of that, let's get down to business. This month Conrad
Hoffmann has been submitting a lot of patches for [go-webdav]. The end goal is
to build a brand new CardDAV/CalDAV server, [tokidoki]. Conrad has upstreamed
a CalDAV server implementation and a lot of other improvements (mostly to
server code, but a few changes also benefit the client implementation). While
tokidoki is missing a bunch of features, it's already pretty usable!

I've released a new version of the [goguma] mobile IRC client yesterday. A
network details page has been added, delthas has implemented typing indicators
(disabled by default), and a whole lot of reliability improvements have been
pushed. I've continued polishing my work-in-progress branch with push
notifications support, hopefully we'll be able to merge this soon.

I've started working on the [gyosu] C documentation generator again, and it's
shaping up pretty well. I've published an [example of rendered docs for
wlroots][gyosu-wlr]. gyosu will now generate one doc page per header file, and
correctly link between these pages. Next I'll focus on retaining comments
inside structs/enums and grouping functions per type.

Pekka, Sebastian and I have finally came to a consensus regarding the
[libdisplay-info] API. The basic API has been merged alongside the testing
infrastructure, and we'll incrementally add new features on top. Because EDID
is such a _beautiful_ format, there are still a lot of surprising API decisions
that we need to make.

In other FOSS graphics news, I've updated [drmdb] with a new page to list
devices supporting a KMS property (example: [alpha][drmdb-alpha] property), and
I've improved the filtering UI a bit. I've automated the [Wayland docs]
deployment on GitLab, and I've planned a new release.

That's it for now, see you next month!

[Pepe in Grani]: https://www.pepeingrani.it/
[Gorizia]: https://www.gorizia1916.com/
[AVPN]: https://www.pizzanapoletana.org
[avpn-extract]: https://git.sr.ht/~emersion/avpn-extract
[go-webdav]: https://github.com/emersion/go-webdav
[tokidoki]: https://sr.ht/~sircmpwn/tokidoki/
[goguma]: https://sr.ht/~emersion/goguma/
[gyosu]: https://sr.ht/~emersion/gyosu/
[gyosu-wlr]: https://wayland.emersion.fr/wlroots/
[libdisplay-info]: https://gitlab.freedesktop.org/emersion/libdisplay-info
[drmdb]: https://drmdb.emersion.fr
[drmdb-alpha]: https://drmdb.emersion.fr/properties/4008636142/alpha/devices
[Wayland docs]: https://wayland.freedesktop.org/docs/html/
