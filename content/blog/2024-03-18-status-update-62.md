+++
date = "2024-03-18T00:00:00+02:00"
title = "Status update, March 2024"
slug = "status-update-62"
lang = "en"
tags = ["status update"]
+++

Hi! It's this time of the month once again it seems…

We've finally released [Sway 1.9]! Note that it uses the new wlroots rendering
API, but doesn't use the scene-graph API: we've left that for 1.10. We've also
released [wlroots 0.17.2] with a whole bunch of bug fixes. Special thanks to
Simon Zeni for doing the backporting work!

In other Wayland news, the [wlroots merge request][wlroots!4548] to atomically
apply changes to multiple outputs has been merged! In addition, [another
merge request][wlroots!4567] to help compositors allocate the right kind of
buffers during modesets has been merged. These two combined should help
lighting up correctly more multi-output setups on Intel GPUs, which previously
required a workaround (`WLR_DRM_NO_MODIFIERS=1`). Thanks to Kenny for helping
with that work!

I also got around to writing a [Sway patch][sway#8063] to gracefully handle
GPU resets. This should be good news for users of a particular GPU vendor which
tends to be a bit trigger happy with resets! Sway will now survive and continue
running instead of being frozen. Note, clients may still glitch, need a nudge
to redraw, or freeze. [A few][wlroots!4604] [wlroots][wlroots!4606]
[patches][wlroots!4607] were also required to get this to work.

With the help of Jean Thomas, [Goguma] (and [pushgarden]) has gained support
for Apple Push Notification service (APNs). This means that Goguma iOS users
can now enjoy instantaneous notifications! This is also important to prove that
it's possible to design a standard (as an [IRC extension][ircv3-web-push])
which doesn't hardcode any proprietary platform (and thus doesn't force each
IRC server to have one codepath per platform), but still interoperates with
these proprietary platforms (important for usability) and ensures that said
proprietary platforms have minimal access to sensible data (via end-to-end
encryption between the IRC server and the IRC client).

It's now also possible to share links and files to Goguma. That is, when using
another app (e.g. the gallery, your favorite fediverse client, and many
others) and opening the share menu, Goguma will show up as an option. It will
then ask which conversation to share the content with, and automatically upload
any shared file.

No <abbr title="New Project of the Month">NPotM</abbr> this time around sadly.
To make up for it, I've implemented refresh tokens in [sinwon], and made most
of the remaining tests pass in [go-mls].

See you next month!

[Sway 1.9]: https://github.com/swaywm/sway/releases/tag/1.9
[wlroots 0.17.2]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.17.2
[wlroots!4548]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4548
[wlroots!4567]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4567
[sway#8063]: https://github.com/swaywm/sway/pull/8063
[wlroots!4604]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4604
[wlroots!4606]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4606
[wlroots!4607]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4607
[goguma]: https://git.sr.ht/~emersion/goguma
[pushgarden]: https://git.sr.ht/~emersion/pushgarden
[ircv3-web-push]: https://github.com/ircv3/ircv3-specifications/pull/471
[sinwon]: https://git.sr.ht/~emersion/sinwon
[go-mls]: https://git.sr.ht/~emersion/go-mls
