+++
title = "Newsletter Template - Do Not Publish"
date = "2020-01-01T00:00:00+00:00"
draft = true
+++

possible title: Vibe Coding is not enough - introducing git utility toolkit

a small note on writing software in 2025:
Curator rather than producer. It s like preparing dj sets on soundcloud. To follow on the dj analogy: We use rekordbox not ableton.
Most people posting on linkedin speak about vibe coding: zack prefers "agentic coding". This is a skill, and like each skill there is a learning curve. I agree with his definition.
I know people who were great engineering managers who have 10x their productivity by conceptualizing ai agents as a fleet of junior devs (and thay's a conservative understatement). I know founders who previously described themselves as "technically litterate" go all-in 
It doesn't take much to get to the Aha! moment where an LLM writes a functional piece of code for you and you realize: "Hey, I can do this too!"... There is no unseeing this once after you experience it.
There is no One true way to use ai (a). But there are some common best practices that emerge over time. And there are some individual decisions that each of us need to make (like choosing what IDE in the old days).
The barrier to entry to start building is lower than ever. Paradoxically, the standard for shipping good product is much higher. 
Everything that is sitting between you and your vision is:
- clear articulation of what you need (this was always an underrated skill)
- choice of tooling/building blocks: this has shifted slightly towards choice of inspiration (finding similar projects on github). Think designer's mood board but in markdown not figma
- tokens for your LLM of choice (the "cost of back-and-forth") being the only thing standing between you and the functional, deployed product
Now it's your move. 

```
Step 1
Requirements - high-level articulation of what you’re trying to do

Step 2
Utilities - Figure out what tools/utilities are needed for achieving the requirements. Ask AI to 1) identify/recommend the required/suggested utilities as well as provide implementations for each.

Step 3
Flow design - Figure out the flow design (this is the most important part so review carefully)
You are designing how to orchestrate all the steps, AI can help with the flow design;

Step 4
Data design - Figure out the data design (again, talk with AI)
This is about designing the data structure and how each node in the flow reads & writes data;

Step 5
Magic voila. make sure you have 1) requirements, 2) utilities, 3) flow design, and 4) data design straightened out and well-articulated. then go out for a stroll.

in agentic coding, generally, flow design first then utilities. but this ofc depends. if interface is more important, then utilities first, then flow design. this is the human operator's job to figure out. use ai for help.
```



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


```
Here's a list of all the non-AI automations you'll be using in your Git Utility Belt setup—these are GitHub-native and run entirely in the cloud via GitHub Actions:


---

Non-AI Automations

1. Conventional Commits Enforcement

Tool: Semantic Pull Requests GitHub App

File: .github/semantic.yml

What It Does:

Ensures all PR titles follow Conventional Commits (e.g. feat:, fix:)

Blocks merges of non-conforming PRs

Provides auto-comments on violations




---

2. Release Automation

Tool: release-please

File: .github/workflows/release-please.yml

What It Does:

Scans merged commits for semantic prefixes

Bumps package.json (or similar) version automatically

Creates/updates CHANGELOG.md

Opens release PRs or publishes tags (depending on setup)




---

3. CI/CD Pipeline

Tool: GitHub Actions (ci.yml)

File: .github/workflows/ci.yml

What It Does:

Runs on push/PR

Executes:

Linting (eslint, prettier, etc.)

Testing (vitest, jest, etc.)

Build step (tsc, vite, next build, etc.)





---

4. Optional: Deployment

Tool: Custom deploy.yml

File: .github/workflows/deploy.yml

What It Does:

Runs on push to main or on new release

Deploys to platforms like Vercel, Netlify, or Cloudflare Pages

Authenticated via GitHub Secrets




---

5. Optional: Scheduled Cleanup

Tool: Custom clean.yml

File: .github/workflows/clean.yml

What It Does:

Runs on a schedule (e.g. nightly)

Can clean up:

Preview deployments

Old PR branches

Unused Docker images, etc.





---

6. Issue & PR Templates

Tool: GitHub-native templating system

Files:

.github/ISSUE_TEMPLATE/*.yml

.github/pull_request_template.md


What It Does:

Provides structure for all new issues and PRs

Encourages linking to milestones

Prompts consistent formatting and labels




---

7. Labels & Milestones Management

Tool: Manual with GitHub UI (or optionally via scripts)

Setup:

Standard labels (e.g. type: bug, status: in progress, priority: high)

Milestones aligned with semantic version numbers


What It Enables:

Clear project tracking and planning

Retrospective reporting based on closed milestone issues




---

Seeems like those tools went out of fashion somehow. When were they big? Why did they go out of fashion?
```


some more items:
# Agentic Coding: The GitHub Actions Advantage

**Why everything runs in the cloud, not locally**

The entire workflow operates through GitHub Actions - no local npm installs, no pre-commit hooks, no environment setup required. Every automation (commit validation, versioning, deployments) executes in GitHub's cloud infrastructure when code is pushed or PRs are merged. Laptops become just editors; all heavy lifting happens server-side.

## What Actions Should Handle

• **Parallel Execution**: Frontend tests, backend tests, and documentation checks run simultaneously across different runner environments

• **Conditional Workflows**: Deploy to staging on PR creation, production only on release tags, cleanup on PR closure

• **Cross-Repository Triggers**: Update documentation sites when API schemas change, notify dependent projects of breaking changes

• **Secret Rotation**: Automatically refresh API tokens and deployment keys without manual intervention

• **Matrix Builds**: Test against multiple Node/Python versions or deployment targets in parallel

• **Failure Recovery**: Automatically retry flaky steps, rollback failed deployments, create issues for broken builds

The result: developers write code and open PRs. Everything else - from version bumping to production deployment - happens automatically based on commit messages and merge actions. This cloud-first approach eliminates "works on my machine" problems while maintaining enterprise-grade automation standards.






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
