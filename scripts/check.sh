#!/usr/bin/env bash
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
"$repo_root/scripts/build.sh"

test -f "$repo_root/dist/index.html"
test -f "$repo_root/dist/hello-world/index.html"
test -f "$repo_root/dist/enoki-postmortem/index.html"
test -f "$repo_root/dist/favicon.svg"
test -f "$repo_root/dist/palette.css"
test -f "$repo_root/dist/site.css"
test -f "$repo_root/dist/_redirects"

grep -q "Thomas Mecattaf" "$repo_root/dist/index.html"
grep -q "thomas@mecattaf.dev" "$repo_root/dist/index.html"
grep -q "https://www.twitter.com/_biased_" "$repo_root/dist/index.html"
grep -q "@_biased_" "$repo_root/dist/index.html"
grep -q "https://github.com/mecattaf" "$repo_root/dist/index.html"
grep -q "Questions or feedback?" "$repo_root/dist/index.html"
grep -q "https://github.com/ryantm/mmdoc" "$repo_root/dist/index.html"
grep -q "Hello World" "$repo_root/dist/hello-world/index.html"
grep -q "Postmortem of a Venture-Backed Startup" "$repo_root/dist/enoki-postmortem/index.html"
grep -q "href='palette.css'" "$repo_root/dist/index.html"
grep -q "href='site.css'" "$repo_root/dist/index.html"
grep -q "href='site.css'" "$repo_root/dist/hello-world/index.html"
grep -q "href='palette.css'" "$repo_root/dist/enoki-postmortem/index.html"
grep -q -- '--light_background:' "$repo_root"/dist/mmdoc.*.css
grep -q -- '--dark_accent: #70b8ff' "$repo_root/dist/palette.css"
grep -q 'box-shadow: none' "$repo_root/dist/site.css"
grep -q '.nav-top > :nth-child(4)' "$repo_root"/dist/mmdoc.*.css
grep -q 'margin-left: auto' "$repo_root"/dist/mmdoc.*.css
grep -q "class='chapter-previous' href='./#home'" "$repo_root/dist/hello-world/index.html"
grep -q "class='chapter-next' href='enoki-postmortem/#enoki-postmortem'" "$repo_root/dist/hello-world/index.html"
grep -q '^/0001    /hello-world/    301$' "$repo_root/dist/_redirects"
grep -q 'fill="#70B8FF"' "$repo_root/dist/favicon.svg"

printf 'site checks passed\n'
