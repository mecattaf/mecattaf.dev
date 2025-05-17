+++
date = "2023-12-18T00:00:00+02:00"
title = "Status update, December 2023"
slug = "status-update-59"
lang = "en"
tags = ["status update"]
+++

Hi all!

This month we've finally released [wlroots 0.17.0]! It's been a long time since
the previous release (1 year), we'll try to ship future releases a bit more
frequently. We're preparing 0.17.1 with a collection of bugfixes, it should be
ready soon.

I've been working on [`wlr_surface_synced`], a new wlroots abstraction to allow
surface commits coming from clients to be delayed. This is required to avoid
stalling the whole compositor if a client GPU work is slow and to implement
explicit synchronization. I've also been working on a [commit-queue-v1]
implementation for wlroots and gamescope, which will allow us to get rid of a
CPU wait in Mesa. And I've put some finishing touches on Rose's
[frame scheduler patches]. Last, I've merged André Almeida's kernel patches for
atomic async page-flips, making it so modern compositors can enable tearing
page-flips without having to go through the legacy KMS uAPI.

I've added OAuth refresh tokens to meta.sr.ht. Having to renew OAuth tokens
every year on my clients is annoying, with refresh tokens that's a thing of the
past! I've already updated hottub (CI bridge for GitHub) to leverage this, and
I'd like to also implement this in hut (CLI tool) and yojo (CI bridge for
Codeberg). Note that since meta.sr.ht has only now started returning refresh
tokens on login, users will need to re-login one last time so that the OAuth
clients can grab the refresh token.

The <abbr title="New Project of the Month">NPotM</abbr> is a bit peculiar: I
haven't actually started working on it this month, and it's not in a usable
state yet. It's [go-sqlgen], a Go code generator which takes SQL as input. The
goal is to store SQL queries in a separate file, to make them safer (type
checking for the arguments) and faster (prepared statements). It's somewhat
similar to [sqlc] except it aims at being simpler and database-agnostic.
There's still much to do: I'd like to add support for named parameters, check
that the number of parameters in the query matches the number of procedure
arguments, and make it easy to write migrations. I'm not yet sure go-sqlgen is
worth the trouble: being database-agnostic limits its abilities, perhaps too
much.

Then comes the usual mix of random smaller updates. I've released [soju 0.7.0]
and [goguma 0.6.0] with a few new features and bugfixes. [pyonji] now
understands the [b4] config file, so it's possible to add this file to your
project to preconfigure pyonji with a mailing list ([example][b4-config-example]).
delthas has implemented account data import in hut, so it's now easy to migrate
accounts between sr.ht instances, or projects between accounts. [go-scfg] now
supports decoding a configuration file directly into a Go struct, making it
unnecessary to hand-roll parsing code ([example][go-scfg-example]).

I'll be giving a [FOSDEM talk] about quirks and gotchas of the IMAP protocol
this year. I'll be happy to say hi if any of you are coming as well. That's all
I have for this month, see you in January!

[wlroots 0.17.0]: https://gitlab.freedesktop.org/wlroots/wlroots/-/releases/0.17.0
[`wlr_surface_synced`]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4480
[commit-queue-v1]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/256
[frame scheduler patches]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4307
[go-sqlgen]: https://git.sr.ht/~emersion/go-sqlgen
[sqlc]: https://github.com/sqlc-dev/sqlc
[soju 0.7.0]: https://git.sr.ht/~emersion/soju/refs/v0.7.0
[goguma 0.6.0]: https://git.sr.ht/~emersion/goguma/refs/v0.6.0
[pyonji]: https://sr.ht/~emersion/pyonji/
[b4]: https://b4.docs.kernel.org/en/latest/
[b4-config-example]: https://git.sr.ht/~emersion/pyonji/tree/2b35313afaf619067f90b0a418cba1b65ef6de9f/item/.b4-config
[go-scfg]: https://git.sr.ht/~emersion/go-scfg
[go-scfg-example]: https://godocs.io/git.sr.ht/~emersion/go-scfg#example-Decoder
[FOSDEM talk]: https://fosdem.org/2024/schedule/event/fosdem-2024-2647--protocols-go-imap-v2-things-i-wish-i-knew-before-starting-to-write-an-imap-library/
