+++
title = "Newsletter Template - Do Not Publish"
date = "2020-01-01T00:00:00+00:00"
draft = true
+++

scoping the nvim workflow consists of first making sure that the github `gh` cli is authenticated with the right permissions. 
```
# Verify GitHub CLI authentication
gh auth status

# If not authenticated:
gh auth login

# Add necessary scopes for Octo.nvim
gh auth refresh -s read:project
```
currently i see 
```
gh auth status
github.com
  ✓ Logged in to github.com account mecattaf (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'read:project', 'repo', 'workflow'
```










This is a template for testing the newsletter automation.

## Sample Header

This is sample content with **bold text** and *italic text*.

Here's a [sample link](https://example.com) to test link formatting.

### Sample Subheader

- Bullet point one
- Bullet point two

Some `inline code` and a code block:

```javascript
console.log("Hello world");
```
