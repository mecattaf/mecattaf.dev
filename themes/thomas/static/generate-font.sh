#!/bin/sh -eux

# Extract the subset of Nanum Gothic Coding font we use
#
# Depends on python-fonttools

src_dir=node_modules/nanum-gothic-coding/fonts
basename=NanumGothicCoding-Bold
unicode_range="U+30E1,U+30AB,U+30BF,U+30D5" # メカタフ
for format in woff2 woff; do
	pyftsubset "$src_dir/$basename.woff2" --output-file="font/$basename.$format" --flavor=$format --layout-features='*' --unicodes="$unicode_range" &
done

wait
