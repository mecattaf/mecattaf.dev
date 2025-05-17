+++
date = "2023-03-20T00:00:00+02:00"
title = "Status update, March 2023"
slug = "status-update-51"
lang = "en"
tags = ["status update"]
+++

Hi all!

In the past week or so I've focused on a <abbr title="New Project of the
Month">NPotM</abbr>: [go-imap], an IMAP library for Go. "But Simon, a New
Project of the Month is supposed to be _new_!" Right, right, the NPotM is a
lie… But only a half-lie: I'm rewriting it from scratch. go-imap was one of the
first Go projects I've written, and I couldn't recite the IMAP4rev1 RFC by
heart at the time. This is just a roundabout way to say that mistakes were
made. IMAP extensions — a lot of which provide important functionality — were
designed to be implemented out-of-tree in separate Go modules. However many
extensions change the behavior of existing commands, so trying to design a
modular system is a fool's errand which only results in a more complicated API.
Go channels were (ab)overused in the public API. The internals were not
designed with goroutine safety in mind, so races were ducktaped after the fact.
It's not possible to run multiple IMAP commands concurrently: each time
a command is sent, the caller gets to twiddle their thumbs until the reply
comes back before sending a new one, paying the full price of the roundtrip.
The parser has a weird intermediate representation based on `interface{}` Go
values. Many functions and types are exported in the public API but really
shouldn't be.

For all of these reasons, I've decided to start from scratch rather than trying
to incrementally improve the library. This turned out to be a good decision: in
one week, I had a working client which has less bugs and more features than
go-imap v1. I based my work on the newer IMAP4rev2 RFC, which provides a better
base feature set than IMAP4rev1. I've ported [alps] to the new API to make sure
I didn't miss anything. I still need to write the server part and tests.

In IRC news, the [soju] database message store submitted by delthas has finally
been merged. Now, the message history can be stored in the database rather than
in plain-text files. This enables features such as full-text search and
retaining IRCv3 message tags. The [goguma] mobile client now has a gallery view
for images, supports replies via the [`reply` client tag] (in a non-intrusive
fashion), and scrolls to the unread indicator when a conversation is opened.

As usual, I worked on many other smaller tasks in other projects. The wlroots
[output layers] have been merged, but are still opt-in and require compositor
support. lists.sr.ht now uses [go-emailthreads] to display replies in the patch
view. `hut pages publish` can now take a directory as input, and will generate
the tarball on-the-fly. There are many other tiny improvements I could mention,
but it'd get boring, let's wrap up this status update. See you next month!

[go-imap]: https://github.com/emersion/go-imap/tree/v2
[alps]: https://sr.ht/~migadu/alps/
[soju]: https://soju.im
[goguma]: https://sr.ht/~emersion/goguma/
[`reply` client tag]: https://ircv3.net/specs/client-tags/reply
[output layers]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/3640
[go-emailthreads]: https://git.sr.ht/~emersion/go-emailthreads
