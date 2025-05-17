#!/bin/sh -eu

mkdir -p data
go run openring.go >data/openring.toml \
	-s "https://ppaalanen.blogspot.com/feeds/posts/default?alt=rss" \
	-s "https://blog.ffwll.ch/feed.xml" \
	-s "https://www.fooishbar.org/index.xml" \
	-s "https://idea.popcount.org/rss.xml" \
	-s "https://mstoeckl.com/notes/gsoc/rss.xml" \
	-s "https://research.swtch.com/feed.atom" \
	-s "https://ewontfix.com/feed.rss" \
	-s "https://rosenzweig.io/blog/gpu-feed.xml" \
	-s "https://www.basnieuwenhuizen.nl/feed.xml" \
	-s "https://www.supergoodcode.com/feed.xml" \
	-s "https://melissawen.github.io/feed.xml" \
	-s "https://mairacanal.github.io/atom.xml" \
	-s "https://zamundaaa.github.io/feed.xml" \
	-s "https://isaacfreund.com/blog/feed.xml" \
	-s "https://blog.hiler.eu/feed.xml"
