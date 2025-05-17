+++
date = "2023-06-15T00:00:00+02:00"
title = "Status update, June 2023"
slug = "status-update-54"
lang = "en"
tags = ["status update"]
+++

Hi!

This month Rose Hudson has started working on wlroots as part of Google Summer
of Code! She will focus on reducing frame latency by implementing an adaptive
frame scheduler. She already has landed new wlroots APIs to
[measure render time]. You can follow [Rose's blog] if you're interested.

Other wlroots contributors have been hard at work too. Alexander has
implemented the new [render pass API for GLES2], and while at it he's
significantly improved its performance. I hope this will help with weak SoCs
and power usage. A big refactoring from vyivel has been merged to
[unify the map/unmap logic] across all shells. I've moved some of the cursor
logic over from `wlr_output` to `wlr_cursor` (with the eventual goal of
simplifying `wlr_output` and removing most of the cursor-specific logic). And
we've all fixed a whole bunch of bugs!

The <abbr title="New Project of the Month">NPotM</abbr> is [lodns]. It's a
simple local DNS resolver which forwards queries to a DNS-over-TLS or
DNS-over-HTTPS server. It's somewhat similar to `systemd-resolved`. Still
missing are a way to forward local hostnames to the DNS resolver advertised via
DHCP and support for `/etc/hosts`.

<center>
<img title="gamja switcher" class="opaque" src="https://assets.octodon.social/media_attachments/files/110/542/716/369/448/635/original/a6823f1ef34678cb.png">
<br>
<small>The new gamja channel switcher</small>
</center>

As usual, I've made small improvements to various projects. I've added a fast
tab switcher for [gamja]: press Ctrl+k, type a few letters to filter the
channels, and press enter to switch. I've contributed to the upcoming
[IRCv3 message redaction] extension and implemented it in [goguma]. [kanshi]
has gained a `kanshictl switch` command to manually switch to another profile.
[go-oauth2] now supports [dynamic client registration]. [gyosu] generates
documentation for `typedef`. And more! But that's enough for today, see you
next month!

[measure render time]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4159
[Rose's blog]: https://blog.krx.sh/
[render pass API for GLES2]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4135
[unify the map/unmap logic]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4043
[lodns]: https://git.sr.ht/~emersion/lodns
[go-oauth2]: https://git.sr.ht/~emersion/go-oauth2
[dynamic client registration]: https://www.rfc-editor.org/rfc/rfc7591
[gamja]: https://sr.ht/~emersion/gamja
[kanshi]: https://sr.ht/~emersion/kanshi
[gyosu]: https://sr.ht/~emersion/gyosu
[IRCv3 message redaction]: https://github.com/ircv3/ircv3-specifications/pull/524
[goguma]: https://sr.ht/~emersion/goguma
