# [mecattaf.dev](https://mecattaf.dev)

Personal site, built as an **RFC index** in the style of
[rfc.earendil.com](https://rfc.earendil.com/). Each post is one Markdown file
with YAML frontmatter; a tiny Node script renders it to static HTML. No CMS, no
framework, no backend.

## Layout

```
content/NNNN-slug.md   # one RFC per file (frontmatter + Markdown body)
assets/site.css        # styling (Earendil look: paper light + dark, serif, TOC)
assets/app.js          # theme toggle, clickable rows, client-side fuzzy search
static/                # passthrough (favicon, _redirects)
build.mjs              # markdown -> HTML (markdown-it + Shiki dual theme + anchors + TOC)
dist/                  # build output (gitignored) — what gets deployed
```

## Write a post

Drop a file in `content/`, e.g. `content/0003-my-post.md`:

```markdown
---
number: "0003"
title: My Post
state: Published          # Discussion | Published | Implemented
visibility: Public
authors:
  - name: Thomas Mecattaf
    email: thomas@mecattaf.dev
created: 2026-06-18
updated: 2026-06-18
labels: [meta]
summary: >-
  One or two sentences; shown in search and as the meta description.
---

## First section

Body in Markdown. Code blocks get Shiki dual-theme highlighting.
```

Higher numbers sort to the top of the index.

## Build & preview

```bash
npm install
npm run build      # -> dist/
npm run serve      # http://localhost:8000  (serves dist/ as web root)
```

Asset paths are absolute (`/assets/...`, `/0003/`), so always serve `dist/` as
the web root — don't open the files directly.

## Deploy (Cloudflare Pages)

This repo is wired for Cloudflare Pages git integration:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** None

(or one-off from the CLI: `npx wrangler pages deploy dist`).

## Photos

Images are hosted on **Cloudflare R2** (served at `assets.mecattaf.dev`) and
referenced by URL in the Markdown, e.g.
`![](https://assets.mecattaf.dev/images/<name>_<id>.<ext>)`.

## Migration notes

- Previously a Hugo site (theme `thomas`) with a ConvertKit newsletter GitHub
  Action. Both were removed in the move to this simpler engine.
- The old orphaned content (the `52-posts/`, `internet-history/`,
  `jan-2025-india-my-linux/`, `email-templates/` trees, plus the old Hugo
  content) was externalized to `~/mecattaf/notes/RECOVERED-mecattaf-dev-blog/`
  and remains in this repo's git history on `main`.

## License

Content under [Creative Commons Attribution 3.0](http://creativecommons.org/licenses/by/3.0/us/deed.en_US);
source under the [MIT license](http://opensource.org/licenses/mit-license.php).
