# ConvertKit Minimal Email Template

This minimal HTML email template provides:
- **600px max-width** with centered layout
- **Black text (#000000)** on white background
- **16px body text** with proportional headers (h1: 32px, h2: 24px, h3: 20px)
- **Grey italic subscription text** (#A8A8A8, 14px) at top and bottom
- **Direct signup link** to https://mecattaf.kit.com/12fe0129b8

## Setup in ConvertKit

1. Log into ConvertKit
2. Go to **Email Templates**
3. Click **"New Email Template"**
4. Name it (e.g., "Minimal Newsletter")
5. Paste the HTML from `convertkit-email-template.html`
6. Save

## Template Structure

```
[Grey italic: "If you were forwarded... subscribe here"]
            ↓
    [Your blog content - 600px wide]
            ↓
[Grey italic: "If you didn't enjoy... unsubscribe"]
[Grey italic: Your address]
```

## What It Does

- Forces 600px width across all email clients
- Sets proper header sizes (2x, 1.5x, 1.25x of body text)
- Keeps everything minimal - just black text on white
- Subscription-related text is grey (#A8A8A8) and italic

Your GitHub Action remains unchanged - it sends HTML that gets inserted at `{{ message_content }}`.
