+++
date = "2022-03-15T00:00:00+02:00"
title = "Status update, March 2022"
slug = "status-update-39"
lang = "en"
tags = ["status update"]
+++

Hi all!

My main focus these last few weeks has been a new project: [goguma]. It's a new
IRC client for mobile devices.

<div style="overflow-y: auto; white-space: nowrap;">
<img src="/img/blog/2022-03-15-status-update-39/goguma-main.png" width="280" class="opaque" alt="Conversation list">
<img src="/img/blog/2022-03-15-status-update-39/goguma-buffer.png" width="280" class="opaque" alt="Conversation view">
<img src="/img/blog/2022-03-15-status-update-39/goguma-details.png" width="280" class="opaque" alt="Conversation details">
<img src="/img/blog/2022-03-15-status-update-39/goguma-dark.png" width="280" class="opaque" alt="Conversation view, dark">
</div>

It's quite different from traditional IRC clients, because I wanted to
experiment with new ideas. I expect some people will dislike it, and it's
perfectly fine, there are other Android IRC clients. For instance, goguma is
intentionally missing the concept of "server buffers". The conversation list
doesn't group by network, it shows conversations with recent activity first.
The username and hostname (`emersion!emersion@source/staff/emersion`) are never
displayed, only the nickname and realname are. goguma focuses on first-class
support for servers with recent IRCv3 extensions and bouncers, older servers
might have a degraded experience.

The goals are outlined in the project's README. Most notably, goguma will try
to go easy on the battery, and conversations can be read without network access
(existing Android IRC clients are pretty bad at these two things). The former
is currently achieved by periodically being woken up by Android to check for
new messages. This is better than the status quo but delays notifications and
is still wasteful. I'm working on support for push notifications to hopefully
completely fix this issue, but it's quite an involved task.

At the moment, goguma supports the basic features you'd expect from a messaging
app, and not much else. It shows notifications for new direct messages and
highlights, supports infinite chat history scrolling, synchronizes read markers
with other clients, and supports swipe-to-reply gestures. The
yet-to-be-implemented features include displaying timestamps and events (topic
changed, user joined, and so on) in conversations. There's much to be done, for
more information see the [issue tracker][goguma-todo].

Under the hood, goguma uses Flutter. Flutter is compiled to native code, so
should have performance comparable to regular Android applications. The main
reason for Flutter is that I'd like to eventually be able to run goguma on
devices such as the PinePhone, without an Android emulator or similar. As a
side effect, Flutter lets me work on goguma without having to spin Android
Studio nor an Android emulator. Additionally, at the time I started playing
around with the idea of a new IRC client, Android's Jetpack Compose framework
was still very unstable, so wasn't really an option. Flutter also hides all
slow operations behind `async`/`await` so there's no need to offload work from
the main thread to helper threads and services like in Kotlin (technically
Kotlin supports this as well but it seems a bit hit-or-miss). Of course,
Flutter has many downsides: app bundle size is larger, interactions with
Android APIs (e.g. for notifications) require more boilerplate, and the native
Android widgets aren't used. Overall, I think mobile development is a "pick
your poison" situation, much like web development, so I'm not regretting this
choice so far.

On the whole, I'm pretty happy with my progress so far. It feels refreshing to
finally have an IRC app which integrates well with Android and soju. If you're
interested, feel free to try it out, come ask questions on IRC and send patches!

In other IRC news, I've deployed a chat.sr.ht update yesterday. It should now
have all of the fancy new soju and gamja features, including the `soju.im/read`
extension to synchronize read markers between devices. Additionally, we now
have [a nice metrics.sr.ht graph][chat.sr.ht-network-metrics] displaying
per-network connection counts for the bouncer. This helps us make sure we don't
hit connection limits.

Simon Zeni and Kirill Primak have kept wlroots busy by submitting a bunch of
improvements and large refactorings for xdg-positioner and input devices. As
wlroots grows older, we're trying to minimize the number of breaking changes we
force compositors to track, but these two APIs were very old and needed an
overhaul.

A number of improvements have been implemented for the [hut] CLI tool. A
`hut init` command walks users through the first-time setup. Thorben Günther
has made numerous additions to the `hut todo` subcommand: labels and access
control lists can be listed and managed by the tool, among other things. There
is a ton of pending patches I still need to go through and review, but more on
that next month!

[goguma]: https://sr.ht/~emersion/goguma/
[goguma-notifications]: https://git.sr.ht/~emersion/goguma/tree/master/item/doc/notifications.md
[goguma-todo]: https://todo.sr.ht/~emersion/goguma
[chat.sr.ht-network-metrics]: https://metrics.sr.ht/graph?g0.expr=soju_networks_total&g0.tab=0&g0.stacked=0&g0.show_exemplars=0&g0.range_input=2d
[hut]: https://sr.ht/~emersion/hut/
