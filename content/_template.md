---
# Copy this file to content/NNNN-slug.md and fill it in.
# Filename: zero-padded number + kebab-case slug, e.g. content/0003-my-post.md
number: "0003"                # 4 digits, quoted. Must be unique. Higher = top of index.
title: My Post Title          # plain text
state: Discussion             # Discussion | Published | Implemented  (see CLAUDE.md)
visibility: Public            # Public  (this is a static site — everything is public)
authors:
  - name: Thomas Mecattaf
    email: thomas@mecattaf.dev
created: 2026-06-18            # YYYY-MM-DD — shown as "Created"; set once
updated: 2026-06-18            # YYYY-MM-DD — shown as "Updated" + the index "Updated" column; bump on edits
labels:                       # lowercase tags -> the index "Labels" column + search keywords
  - meta
summary: >-                    # 1-2 sentences. Used as the meta/OG description AND the search excerpt.
  A short description of the post that shows up in search results and link
  previews.
---

## First section

Body in Markdown. Headings (`#`, `##`) become the "On this page" table of
contents on the right. Code blocks get Shiki dual-theme highlighting:

```python
print("hello")
```

Images live on Cloudflare Images; reference them by URL:

![](https://imagedelivery.net/<account-hash>/<image-id>/public)
