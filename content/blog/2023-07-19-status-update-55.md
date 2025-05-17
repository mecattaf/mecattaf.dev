+++
date = "2023-07-19T00:00:00+02:00"
title = "Status update, July 2023"
slug = "status-update-55"
lang = "en"
tags = ["status update"]
+++

Hi all!

As usual, this month has been rich in Wayland-related activities. Rose has
continued building and upstreaming better frame scheduling infrastructure for
wlroots, you can read more on [her blog][rose]. I've resurrected
[an old patch][wlr-dmabuf-waiter] to make wlroots behave better when the GPU is
under high load. In my testing this improves latency a lot some specific
scenarios and some specific hardware, but doesn't help on some others. It's not
super clear if anything can be done about this, it may be that we are hitting
some hardware limitations here: GPUs don't know how to preempt tasks very well.

I've also started working on [explicit synchronization] again. This was
previously blocked on a hard problem: drivers may want to use a new kind of
synchronization fence primitive (user-space memory fences) and it wasn't clear
how the current primitives (`drm_syncobj`) would hold up. We've been talking
about this new primitive for a few years but unfortunately it's a complicated
matter and nothing new has surfaced. However, after discussing with Daniel
Vetter, we've come to the conclusion that the kernel will provide backwards
compatibility for `drm_syncobj`, so we can just stop worrying and use that as
the basis for explicit synchronization protocols and implementations. Moreover,
NVIDIA engineers are interested in helping with this effort, so I hope we can
keep the momentum and join forces to push the new protocol, APIs and
implementations to the finish line.

There is a lot to be done to plumb explicit synchronization. This month I've
respinned [a new kernel uAPI patch][syncobj-eventfd] to allow compositors to
wait on a `drm_syncobj` without blocking. This also involved writing a test
suite in IGT and a wlroots patch to use the new uAPI. Everything is now
reviewed, I hope to merge this soon. Apart from this, we also need a
[new Wayland protocol][linux-explicit-synchronization-v2], a new Vulkan
extension for `drm_syncobj` import/export, more implementations of the
protocol, ideally [yet another new kernel uAPI][syncobj-sync_file] to improve
interoperability with `sync_file`, and even a new X11 protocol so that legacy
X11 clients (read: games) can take advantage of this whole thing. Oh my... As
French people say, [_there is some bread on the table_][pain sur la planche].

In other Wayland news, we've started having some more-or-less weekly meetings
for wayland-protocols standardization. We've been talking about upstreaming
some of the stuff currently in a private GTK protocol, IMEs, and layer-shell.
It's been great to be able to discuss face-to-face about blockers for these
protocols. The meeting notes are available [on the wiki][w-p meetings]. We've
done a lot of talking and gesturing, but also some actual work:
[security-context] has finally (!) been merged, and I've updated the
[ext-layer-shell] patch.

Apart from the explicit synchronization work, I've sent a few other kernel
patches. Numerous patches to improve the kernel uAPI documentation, and a few
patches to add more information to the hotplug events sent by
bridge/i915/nouveau so that compositors don't need to reload the whole KMS
state on each hotplug event (instead, they can now only reload the KMS state of
the one specific connector which got hotplugged). I've reviewed a few patches
as well. Thomas Zimmermann has made it so _all_ DRM drivers now support
DMA-BUFs (required for wlroots to run), so now wlroots works on e.g. gma500.
AMD engineers have sent patches to support more than 64 DRM devices, there are
some subtle uAPI stability issues at play I've tried to provide feedback on.

Let's wrap up this status update with a collection of various smaller
happenings. I've removed `dlsym()` related magic used in the Wayland test suite
which caused sporadic failures on FreeBSD. I've been gradually improving the
API for go-imap v2 and fixing a few bugs. hut now supports pagination on all
commands thanks to tireless work by Thorben Günther. kanshi now supports
configuring adaptive sync (VRR). I've improved the API of go-oauth2 a bit. Last
but not least, I've reworked an old patch to make it easier to
[parse scfg files][scfg unmarshal] from Go programs, by defining a Go struct
instead of hand-rolling parsing code.

See you next month!

[rose]: https://blog.krx.sh/
[wlr-dmabuf-waiter]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4040
[explicit synchronization]: https://gitlab.freedesktop.org/wlroots/wlroots/-/merge_requests/4262
[syncobj-eventfd]: https://lore.kernel.org/dri-devel/20230714111257.11940-1-contact@emersion.fr/
[linux-explicit-synchronization-v2]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/90
[syncobj-sync_file]: https://lore.kernel.org/dri-devel/d01ca12e-f914-12c4-de1b-8918a6dd0df0@nvidia.com/T/#u
[pain sur la planche]: https://en.wiktionary.org/wiki/avoir_du_pain_sur_la_planche
[w-p meetings]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/wikis/meetings
[security-context]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/68
[ext-layer-shell]: https://gitlab.freedesktop.org/wayland/wayland-protocols/-/merge_requests/28
[scfg unmarshal]: https://lists.sr.ht/~emersion/public-inbox/patches/42271
