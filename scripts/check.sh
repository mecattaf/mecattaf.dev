#!/usr/bin/env bash
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
"$repo_root/scripts/build.sh"

test -f "$repo_root/dist/index.html"
test -f "$repo_root/dist/enoki-postmortem/index.html"
test -f "$repo_root/dist/favicon.svg"
test -f "$repo_root/dist/palette.css"
test -f "$repo_root/dist/site.css"
test -f "$repo_root/dist/_redirects"
test ! -e "$repo_root/content/home.md"
test ! -e "$repo_root/dist/hello-world"

grep -q "thomas@mecattaf.dev" "$repo_root/dist/index.html"
grep -q "Questions or feedback?" "$repo_root/dist/index.html"
grep -q "https://github.com/ryantm/mmdoc" "$repo_root/dist/index.html"
grep -q "Hello World" "$repo_root/dist/index.html"
grep -q "<h2>mecattaf.dev</h2>" "$repo_root/dist/index.html"
grep -q "Postmortem of a Venture-Backed Startup" "$repo_root/dist/enoki-postmortem/index.html"
grep -q "class='sidebar-toggle'" "$repo_root/dist/index.html"
grep -q "class='search-toggle'" "$repo_root/dist/index.html"
grep -q "class='theme-toggle'" "$repo_root/dist/index.html"
grep -q "href='palette.css'" "$repo_root/dist/index.html"
grep -q "href='site.css'" "$repo_root/dist/index.html"
grep -q "href='palette.css'" "$repo_root/dist/enoki-postmortem/index.html"
grep -q -- '--light_background:' "$repo_root"/dist/mmdoc.*.css
grep -q -- '--dark_accent: #70b8ff' "$repo_root/dist/palette.css"
grep -q 'box-shadow: none' "$repo_root/dist/site.css"
grep -q "M4 5h16" "$repo_root/dist/site.css"
grep -q "m21 21-4.34-4.34" "$repo_root/dist/site.css"
grep -q "M14.837 16.385" "$repo_root/dist/site.css"
grep -q "m15 18-6-6 6-6" "$repo_root/dist/site.css"
grep -q "m9 18 6-6-6-6" "$repo_root/dist/site.css"
grep -q 'mask: var(--toolbar-icon)' "$repo_root/dist/site.css"
grep -q 'display: none' "$repo_root/dist/site.css"
grep -q '.nav-top > :nth-child(4)' "$repo_root"/dist/mmdoc.*.css
grep -q 'margin-left: auto' "$repo_root"/dist/mmdoc.*.css
grep -q "class='chapter-next' href='enoki-postmortem/#enoki-postmortem'" "$repo_root/dist/index.html"
grep -q "class='chapter-previous' href='./#hello-world'" "$repo_root/dist/enoki-postmortem/index.html"
grep -q '^/0001    /    301$' "$repo_root/dist/_redirects"
grep -q 'fill="#70B8FF"' "$repo_root/dist/favicon.svg"

printf 'site checks passed\n'
