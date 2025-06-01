# [mecattaf.dev](https://mecattaf.dev)

Personal Website

## Newsletter Automation

This blog automatically sends newsletters via ConvertKit when publishing new posts.

### How to Send a Newsletter

Add `[Newsletter]` or `[Draft]` to your commit message when ready to publish:

```bash
# Creates and sends newsletter immediately
git commit -m "Weekly update on startup progress [Newsletter]"

# Creates draft in ConvertKit for review before sending
git commit -m "New post about Linux setup [Draft]"
```

**Note**: The automation only triggers on commits that modify files in `/content/blog/` and contain the trigger word in the commit message.

## License

The content of this project itself is licensed under the [Creative Commons Attribution 3.0 license](http://creativecommons.org/licenses/by/3.0/us/deed.en_US), and the underlying source code used to format and display that content is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).
