# [mecattaf.dev](https://mecattaf.dev)

Thomas Mecattaf's personal site, generated with
[mmdoc](https://github.com/ryantm/mmdoc). The generated interface is stock
mmdoc: its layout, navigation, search, typography, responsive behavior, and
light/dark theme handling all come directly from upstream. A small companion
stylesheet contains only the presentation corrections requested for this site.

The site-specific presentation files are:

- `static/palette.css`, which maps mmdoc's color variables to the existing
  mecattaf.dev light and dark palettes.
- `static/site.css`, which uses Lucide vectors for the mmdoc toolbar, removes
  the selected-page left rail, and keeps the Markdown sidebar footer links
  inline.
- `content/favicon.svg`, the blue-circle favicon.

## Write

Each published page is a normal Markdown file in `content/` with an explicit
anchor on its first heading:

```markdown
# Page title {#page-anchor}
```

Add the anchor to `content/toc.md` where the page should appear. mmdoc uses the
first entry as the site root and the remaining files as multipage routes.

## Build

```bash
./scripts/build.sh
./scripts/check.sh
```

The build writes the deployable multipage site to `dist/`. It uses the
repository's committed static `vendor/mmdoc` binary, so Cloudflare Pages does
not need Nix or a C toolchain.

To run the pinned upstream package directly with Nix:

```bash
nix run .#mmdoc -- mecattaf.dev content out
```

## Stay current

`flake.lock` pins a tested mmdoc revision. The `Update mmdoc` GitHub Actions
workflow runs every day, updates that input, builds a fresh static binary,
checks the complete site, and commits the update to `main` only when all checks
pass. This keeps the site current with upstream without making production
builds depend on an untested moving branch.

## Deploy

Cloudflare Pages builds `main` with `./scripts/build.sh` and serves `dist/`.
Legacy `/0001/` and `/0002/` URLs are retained through `_redirects`.

## License

Content is licensed under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/us/deed.en_US);
source is under the [MIT license](https://opensource.org/licenses/mit-license.php).
The embedded Lucide toolbar vectors retain their upstream notices in
`THIRD_PARTY_NOTICES.md`.
