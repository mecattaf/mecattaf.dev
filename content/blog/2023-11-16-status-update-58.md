+++
date = "2023-11-16T00:00:00+02:00"
title = "Status update, November 2023"
slug = "status-update-58"
lang = "en"
tags = ["status update"]
+++

Hi! This month I've started a new <abbr title="Project of the Month">PotM</abbr>
called [pyonji]. It's an easy-to-use replacement for the venerable
`git-send-email` command. The goal is to make it less painful for a new
contributor not familiar with the e-mail based patch submission to submit
patches.

<a href="https://asciinema.org/a/620880" target="_blank"><img src="https://asciinema.org/a/620880.svg" class="opaque"/></a>

Users are expected to use the same workflow as GitHub, GitLab and friends when
contributing: create a new branch and add commits there. Instead of pushing to
a fork though, users simply invoke `pyonji`.

When run for the first time, pyonji will ask for your e-mail account details:
e-mail address, password… and nothing else. The SMTP server hostname, port and
other details are automatically detected (via multiple means: SRV records,
Mozilla auto-configuration database, common subdomains, etc). Once the password
is verified pyonji will store everything in the Git configuration (in the same
fashion that git-send-email expects it).

Then pyonji will present a UI with a list of commits to be submitted for
review. The user can tweak details such as the base branch, the mailing list
address, the version of the patch, however that's rarely needed: pyonji will
find good defaults for these. The user can add a cover letter if desired with
a longer description for the set of patches. Then the big blue "submit" button
can be pressed to send the patches.

Unlike git-send-email, pyonji will remember for you what the last submitted
version number was (and automatically increment it). pyonji will save the cover
letter so that it's not lost if the network is flaky and you don't need to
re-type it for the next submission. pyonji will not waste your time with
uninteresting questions such as "which encoding should I use?". pyonji will
automatically include the [base tree information] in the patches so that any
conflicts are more easily resolved by the reviewer.

Please try it and let me know how it goes! In particular, I'm wondering if the
logic to auto-detect the e-mail server settings are robust enough, or if there
are e-mail providers I don't handle correctly yet.

There is still a lot to be done to improve pyonji. Setup is painful for GMail
and Fastmail users because app passwords are required. I wanted to use OAuth to
fix this but both of these providers heavily restrict how SMTP OAuth apps can
be registered. Setup doesn't work for ProtonMail users because the bridge uses
a self-signed certificate, that can be fixed but setup will remain painful.
I'd like to add UI to change the base branch, improve the heuristics to pick a
good default for the base branch, support for the MAINTAINERS file for easier
contribution to big projects such as the kernel, add an easy way to mark a
patch series as RFC, and probably a million of other things.

Apart from pyonji, I've been working on some graphics-related stuff as always.
We're getting closer to the wlroots 0.17 release, fixing the few remaining
blocking issues. A [new API][wlr!4131] to clip surfaces with the
scene-graph has been merged, many thanks to Alexander Orzechowski and Isaac
Freund! I've [fixed a Mesa regression][mesa!26205] introduced by a previous
patch I've reviewed related to EGL and split render/display SoCs (I hate these).
And I've been [discussing][vc4 heap] with other kernel developers about a way
to stop (ab)using KMS dumb buffers for split render/display SoCs (I swear I
really hate these). We're trying to come up with a solution which could on the
long run also help with the Buffer Allocation Constraints Problem (see the
[XDC 2020 talk] for more info).

I've written a few patches to add support for OAuth 2.0 refresh tokens to
meta.sr.ht. If you've ever used an OAuth sr.ht app (like hottub or yojo to
integrate builds.sr.ht with GitHub or Forgejo), you probably know that tokens
expire after one year, and that you need to redo the setup step when that
happens. This is annoying, and adding support for refresh tokens to meta.sr.ht
and the OAuth apps should fix this.

Last, I'm now part of the [FreeDesktop Code of Conduct] team. This is not a
technical role, but it's very important to have folks doing this work. I've
attended a Code of Conduct workshop to learn how to do it, that's been pretty
interesting and helpful. The workshop focused a lot more on trying to change
people's behavior, instead of bringing down the ban hammer.

That's all for now, see you next month!

[pyonji]: https://sr.ht/~emersion/pyonji/
[base tree information]: https://git-scm.com/docs/git-format-patch#_base_tree_information
[wlr!4131]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4131
[mesa!26205]: https://gitlab.freedesktop.org/mesa/mesa/-/merge_requests/26205
[vc4 heap]: https://lore.kernel.org/dri-devel/20231109074545.148149-1-contact@emersion.fr/T/#m8f4e6718d387ab509b41a27c82534ba0a4b03ff5
[XDC 2020 talk]: https://lpc.events/event/9/contributions/615/
[FreeDesktop Code of Conduct]: https://www.freedesktop.org/wiki/CodeOfConduct/
