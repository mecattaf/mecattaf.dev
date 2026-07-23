#!/usr/bin/env bash
set -euo pipefail

repo_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
"$repo_root/scripts/build.sh"

test -f "$repo_root/dist/index.html"
test -f "$repo_root/dist/enoki-postmortem/index.html"
test -f "$repo_root/dist/favicon.svg"
test -f "$repo_root/dist/palette.css"
test -f "$repo_root/dist/_redirects"

grep -q "Hello World" "$repo_root/dist/index.html"
grep -q "Postmortem of a Venture-Backed Startup" "$repo_root/dist/enoki-postmortem/index.html"
grep -q "href='palette.css'" "$repo_root/dist/index.html"
grep -q "href='palette.css'" "$repo_root/dist/enoki-postmortem/index.html"
grep -q -- '--light_background:' "$repo_root"/dist/mmdoc.*.css
grep -q -- '--dark_accent: #70b8ff' "$repo_root/dist/palette.css"
grep -q 'fill="#70B8FF"' "$repo_root/dist/favicon.svg"

printf 'site checks passed\n'
