+++
date = "2024-10-21T00:00:00+02:00"
title = "Status update, October 2024"
slug = "status-update-69"
lang = "en"
tags = ["status update"]
+++

Hi!

This month [XDC 2024] took place in Montreal. I wasn't there in-person, but
thanks to the organizers I could still ask questions and attend workshops
remotely (thanks!). As usual, XDC has been a great reminder of many things I
wanted to do but which got buried under a pile of emails. We've discussed the
upcoming KMS color management uAPI again, I've taken a bit of time to send more
comments and it looks like this one is getting close to completion (famous last
words). We've also discussed about display muxing (switching a connector from
one GPU to another one), it's quite fun how surprisingly tricky this process
is. Another topic was better multi-GPU support, in particular how to avoid
going through the main GPU when an application is rendered and displayed on
a secondary GPU. I've [sent a proposal] to improve the kernel DMA-BUF uAPI.

New this year was the Wayland workshop organized by Mike Blumenkrantz,
Daniel Stone and Jonas Ådahl. We've discussed the governance change proposals
sent earlier this month. Various changes are being discussed, all have the goal
to lower the barrier to entry when contributing a protocol and preventing
patches from getting stuck. I'm excited to see how this turns out!

We've finally started the release candidate cycle for Sway 1.10. I've released
Sway 1.10-rc4 this weekend with a bunch more fixes, I'm hoping the final
release can go out soon! I've also released the long overdue [cage 0.2.0],
which fast forwards wlroots to version 0.18 and adds primary selection support.

I've sent a patch to [add a udmabuf allocator] to wlroots. This is useful for
running the wlroots GLES2 and Vulkan renderers with software rendering
(e.g. llvmpipe and lavapipe), which is handy for CI and exercises the same
codepaths as real hardware instead of the seldom used Pixman renderer.

[wlroots-rs] has been updated to wlroots v0.18, and I've revamped the way the
compositor state is managed. Previously the library forced the use of
`Rc<RefCell<T>>` to hold the state, which caused issues with double mutable
borrows at runtime when compositor callbacks were nested (wlroots invokes
compositor callback which borrows state and calls into wlroots which invokes
another compositor callback which borrows state). With the new design the
compositor must pass its state as an argument to all wlroots functions which
may emit signals and call back into the compositor.

delthas has contributed a whole bunch of [soju] patches used by his new hosted
bouncer service, [IRC Today]. Uploaded videos and PDF files can now be viewed
inline in Web browsers, a new HTTP basic authentication backend has been added,
file uploads can now be delegated to a separate HTTP backend, a new
[`soju.im/SAFERATE`] specification indicates when clients don't need to
rate-limit their messages, and a bunch of various smaller improvements and
fixes. A bunch of exciting new features are in the pipeline as well (but I
won't spoil them just yet)!

Matthew Hague has contributed TLS certificate pinning to Goguma. When hitting
an invalid certificate, Goguma will now offer the user a choice to trust this
specific certificate (trust on first use). gamja now supports drag-and-drop for
file uploads thanks to xse. Both gamja and Goguma have moved to Codeberg, I
hope this lowers the barrier to entry for contributing. A tiny
<abbr title="New Project of the Month">NPotM</abbr> is [soju-containers]¸ a
repository containing Dockerfiles for soju and gamja, for easy deployment and
testing.

Both [hottub] and [yojo] now have support for build secrets. For hottub,
secrets are only enabled when the owner pushes commits (and enables the feature
at setup time). For yojo, the owner needs to enable the feature at setup time
and can then select specific secrets to expose on specific repositories. All of
this is locked down to prevent collaborators from gaining access to arbitrary
secrets when pushing to a repository.

That's all for now, see you next month!

[XDC 2024]: https://indico.freedesktop.org/event/6/
[sent a proposal]: https://lore.kernel.org/dri-devel/20241013133431.1356874-1-contact@emersion.fr/T/#u
[cage 0.2.0]: https://github.com/cage-kiosk/cage/releases/tag/v0.2.0
[add a udmabuf allocator]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4839
[wlroots-rs]: https://gitlab.freedesktop.org/emersion/wlroots-rs/
[soju]: https://soju.im
[IRC Today]: https://irctoday.com/
[`soju.im/SAFERATE`]: https://codeberg.org/emersion/soju/src/branch/master/doc/ext/saferate.md
[soju-containers]: https://codeberg.org/emersion/soju-containers
[hottub]: https://git.sr.ht/~emersion/hottub
[yojo]: https://codeberg.org/emersion/yojo
