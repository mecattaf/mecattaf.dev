# CLAUDE.md — authoring guide for mecattaf.dev

This is a **static** personal site in the RFC style of
[rfc.earendil.com](https://rfc.earendil.com/). Each post is one Markdown file
with YAML frontmatter; `build.mjs` renders everything to `dist/`. **No backend,
no CMS, no login, no RSS** — just Markdown in, static HTML out.

## How to add a post

1. Copy `content/_template.md` to `content/NNNN-slug.md`
   (4-digit number + kebab-case slug, e.g. `content/0003-on-workflows.md`).
2. Fill in the frontmatter (schema below) and write the body in Markdown.
3. `npm run build` then `npm run serve` → http://localhost:8000 to preview.

Files in `content/` starting with `_` (like `_template.md`) are **ignored** by
the build. Higher `number:` sorts to the **top** of the index.

## Frontmatter schema

```yaml
---
number: "0003"            # REQUIRED. 4 digits, quoted. Unique. Sort key (desc).
title: On Workflows       # REQUIRED. Plain text.
state: Discussion         # REQUIRED. One of: Discussion | Published | Implemented
visibility: Public        # Public only (static site — there is no private tier).
authors:                  # REQUIRED. List; email is optional (renders as mailto).
  - name: Thomas Mecattaf
    email: thomas@mecattaf.dev
created: 2026-06-18        # REQUIRED. YYYY-MM-DD. Shown as "Created". Set once.
updated: 2026-06-18        # REQUIRED. YYYY-MM-DD. "Updated" row + index column. Bump on edits.
labels:                   # Optional. Lowercase tags. Index "Labels" column + search.
  - meta
summary: >-               # Optional but recommended. 1-2 sentences.
  Meta/OG description AND the search excerpt shown under each result.
---
```

### `state` — the colored pill (use it like Earendil)

| State         | Meaning                                              | Pill color |
|---------------|------------------------------------------------------|------------|
| `Discussion`  | Draft / thinking out loud / open for change          | green      |
| `Published`   | Finished, stands as written                          | blue       |
| `Implemented` | The thing it describes has been built / shipped      | green-bold |

The string is matched case-insensitively to a CSS class
(`state-pill-discussion` / `-published` / `-implemented`), so spelling must be
exactly one of the three values above.

### `visibility`

Always `Public`. (Earendil also has Internal/Confidential, but those need the
server-side Google login this site does not have. Anything in `content/` is
world-readable once deployed.)

### `labels`

Lowercase, short. They render as pills in the index "Labels" column, link to
`/keyword/<label>/` (a stub path — no per-label pages are generated), and feed
the search index as keywords. The `visibility` value also appears as the first
("Public") label pill automatically.

### dates: `created` vs `updated`

- `created` is fixed at first publish.
- `updated` drives the **"Updated" column on the index** and the "Updated" meta
  row. **Bump `updated` whenever you meaningfully edit a post** — the index is
  sorted by `number`, not date, but readers use this column to see recency.

## What the build produces

- `dist/index.html` — the "Requests for Comments" index: a table of
  Number/Title · State · Updated · Labels, sorted by `number` descending, plus a
  client-side fuzzy search box (focus with `/`).
- `dist/<number>/index.html` — one page per RFC: hero (number, state, title,
  visibility, labels), Authors/Created/Updated rows, the Markdown body, and a
  right-hand "On this page" TOC built from `#`/`##` headings.

### Search (build-time, client-side)

There is no search server. `build.mjs` bakes `data-search-*` attributes
(number, title, state, authors, keywords, summary) into each index row;
`assets/app.js` filters/ranks them in the browser. So **anything you want
searchable must be in the frontmatter** (title, labels, summary) — the body text
is not indexed.

## Markdown features

- Headings `#`/`##` → the right-side TOC (anchored, slugified).
- Code fences → **Shiki** dual-theme highlighting (`one-light` / `one-dark-pro`),
  switches with the page theme.
- Smart typography (curly quotes, em dashes) is on.
- Images: host on **Cloudflare R2** (`assets.mecattaf.dev`), reference by URL
  `![](https://assets.mecattaf.dev/images/<name>_<id>.<ext>)`.

## Build / preview / deploy

```bash
npm install
npm run build      # -> dist/   (clears and regenerates)
npm run serve      # http://localhost:8000  (serve dist/ as web root; absolute asset paths)
```

Deploy: **Cloudflare Pages** — build command `npm run build`, output dir `dist`,
framework preset None. (CLI one-off: `npx wrangler pages deploy dist`.)

## Conventions / gotchas

- Don't edit `dist/` by hand — it's generated and gitignored.
- Keep `number:` quoted (`"0003"`) so YAML preserves the leading zeros.
- One author site, but `authors:` is a list — multiple are supported.
- To change the brand/title shown in the header, edit the `SITE` object at the
  top of `build.mjs` (`kicker`, `title`, `baseUrl`).
