+++
date = "2023-11-09T00:00:00+02:00"
title = "Compiling the mainline kernel on a Raspberry Pi running under Arch Linux ARM"
slug = "raspberry-pi-archlinux-mainline-compilation"
lang = "en"
tags = ["gfx"]
+++

I've recently worked on [a patch][vc4 dma heap] for the vc4 display driver
used on the Raspberry Pi 4. To test this patch, I needed to compile the kernel
and install it, something I know how to do on x86 but not on Raspberry Pi.
Because I'm pretty stubborn I've also insisted on making my life harder:

- I installed Arch Linux ARM as the base system, instead of Raspberry Pi OS or
  Raspbian.
- I based my patches on top of the mainline kernel, instead of using
  [Raspberry Pi's tree].
- I wanted to install my built kernel alongside the one provided by the
  distribution, instead of overwriting it.

Raspberry Pi has an [official guide to compile the kernel], however it assumes
Raspberry Pi OS, Raspberry Pi's kernel tree, and overwrites the current kernel.
It was still very useful to get an idea of the process. Still, quite a few
adaptations have been required. This blog post serves as my personal notepad to
remember how to Do It.

First, the official guide instructs us to run `make bcm2711_defconfig` to
generate the kernel config, however mainline complains with:

    Can't find default configuration "arch/arm/configs/bcm2711_defconfig"

This can be fixed by grabbing this file from the Raspberry Pi tree:

    curl -L -o arch/arm/configs/bcm2711_defconfig "https://github.com/raspberrypi/linux/raw/rpi-6.1.y/arch/arm/configs/bcm2711_defconfig"

Once that's done, compiling the kernel as usual works fine. Then we need to
install it to the `/boot` partition. We can ignore the overlays stuff from the
official guide, we don't use these. The source paths need to be slightly
adjusted, and the destination paths need to be fixed up to use a subdirectory:

    doas make modules_install
    doas cp arch/arm/boot/dts/broadcom/*.dtb /boot/custom/
    doas cp arch/arm/boot/zImage /boot/custom/kernel7.img

Then we need to generate an initramfs. At first I forgot to do that step and
the kernel was hanging around USB bus discovery.

    doas mkinitcpio --generate /boot/custom/initramfs-linux.img --kernel /boot/custom/kernel7.img

The last step is updating the boot firmware configuration located at
`/boot/config.txt`. Comment out any `dtoverlay` directive, then add
`os_prefix=custom/` to point the firmware to our subdirectory (note, the final
slash is important).

For some reason my memory card was showing up as `/dev/mmcblk1` instead of
`/dev/mmcblk0`, so I had to ~~bang my head against the wall until I notice the
difference~~ adjust `/boot/cmdline.txt` and `/etc/fstab` accordingly.

That's it! After a reboot I was ready to start kernel hacking. Thanks to Maíra
Canal for replying to my distress signal on Mastodon and providing
recommendations!

[vc4 dma heap]: https://lore.kernel.org/dri-devel/20231109074545.148149-1-contact@emersion.fr/T/
[Raspberry Pi's tree]: https://github.com/raspberrypi/linux
[official guide to compile the kernel]: https://www.raspberrypi.com/documentation/computers/linux_kernel.html
