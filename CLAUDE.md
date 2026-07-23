# Authoring mecattaf.dev

This site is stock [mmdoc](https://github.com/ryantm/mmdoc) with the existing
palette and favicon plus narrowly scoped presentation fixes in
`static/site.css`. Do not add custom layout, components, JavaScript,
typography, or navigation. Improvements to those concerns belong upstream in
mmdoc.

## Add a page

1. Create a Markdown file under `content/`.
2. Give its first heading a unique explicit anchor:

   ```markdown
   # Page title {#page-anchor}
   ```

3. Add `* [](#page-anchor)` to `content/toc.md` in the intended order.
4. Run `./scripts/check.sh`.

The first reference in `toc.md` becomes `dist/index.html`. Each later file is
written to `dist/<markdown-filename>/index.html`.

## mmdoc Markdown

mmdoc supports CommonMark plus cross-references, GitHub tables, Pandoc-style
admonitions, and definition lists. Local SVG, JPEG, JPG, WebP, PNG, GIF, and BMP
files under `content/` are copied to both generated outputs. Article images may
also use the existing `https://assets.mecattaf.dev/` R2 URLs.

## Build and dependency updates

- `./scripts/build.sh` generates `dist/` with `vendor/mmdoc`.
- `./scripts/check.sh` builds and verifies the expected pages and overrides.
- `nix run .#mmdoc -- mecattaf.dev content out` runs the revision pinned in
  `flake.lock` directly.
- `.github/workflows/update-mmdoc.yml` updates the pin and static binary daily,
  tests them together, and commits only a passing update.

Do not edit generated `dist/` files or the `vendor/mmdoc` binary by hand.
