// mecattaf.dev — static RFC site generator.
// Markdown (+ YAML frontmatter) -> Earendil-style HTML. No backend.
//
//   npm install && npm run build   ->   dist/
//     dist/index.html              the "Requests for Comments" index (+ search)
//     dist/<number>/index.html     one page per RFC
//
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, rmSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import Shiki from '@shikijs/markdown-it';

const ROOT = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(ROOT, 'content');
const DIST = join(ROOT, 'dist');
const ASSET_VERSION = 'v1';

const SITE = {
  kicker: 'Mecattaf RFCs',
  title: 'Requests for Comments',
  ogSiteName: 'Mecattaf RFCs',
  baseUrl: 'https://mecattaf.dev',
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const attr = (s) => esc(s);
const slugifyState = (s) => String(s || '').toLowerCase();

const md = new MarkdownIt({ html: false, linkify: true, typographer: true });
md.use(anchor, { slugify: (s) => s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') });
md.use(await Shiki({ themes: { light: 'one-light', dark: 'one-dark-pro' } }));

const fmtDate = (d) => {
  const iso = typeof d === 'string' ? d : new Date(d).toISOString().slice(0, 10);
  return {
    iso,
    human: new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
  };
};

function pageActions() {
  return `
    <div class="page-actions">
      <button class="theme-toggle" type="button" data-theme-toggle aria-label="Theme: auto">
        <span class="theme-toggle-icon" aria-hidden="true"></span>
        <span data-theme-toggle-label>Auto</span>
      </button>
    </div>`;
}

function htmlHead({ title, description, canonical, ogType }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>${esc(title)}</title>
  <meta name="description" content="${attr(description)}">
  <link rel="canonical" href="${attr(canonical)}">
  <meta property="og:site_name" content="${attr(SITE.ogSiteName)}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${attr(title)}">
  <meta property="og:description" content="${attr(description)}">
  <meta property="og:url" content="${attr(canonical)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${attr(title)}">
  <meta name="twitter:description" content="${attr(description)}">
  <script>try{const theme=localStorage.getItem("earendil-rfc-theme");if(theme==="light"||theme==="dark"){document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}}catch{}</script>
  <link rel="stylesheet" href="/assets/site.css?v=${ASSET_VERSION}">
  <script defer src="/assets/app.js?v=${ASSET_VERSION}"></script>
</head>
<body>`;
}

// ---------- parse ----------
function parseRfc(file) {
  const raw = readFileSync(file, 'utf8');
  const { data: fm, content } = matter(raw);
  const env = {};
  const tokens = md.parse(content, env);
  const bodyHtml = md.renderer.render(tokens, md.options, env);

  // TOC from h1/h2
  const toc = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type !== 'heading_open' || (t.tag !== 'h1' && t.tag !== 'h2')) continue;
    toc.push({ level: t.tag === 'h1' ? 1 : 2, id: t.attrGet('id') || '', text: tokens[i + 1]?.content || '' });
  }

  return {
    number: String(fm.number),
    title: fm.title,
    state: fm.state || 'Published',
    visibility: fm.visibility || 'Public',
    authors: fm.authors || [],
    labels: fm.labels || [],
    summary: (fm.summary || '').trim(),
    created: fmtDate(fm.created),
    updated: fmtDate(fm.updated),
    bodyHtml,
    toc,
    href: `/${fm.number}/`,
  };
}

// ---------- RFC page ----------
function renderRfcPage(r) {
  const authors = r.authors
    .map((a) => (a.email ? `<a href="mailto:${attr(a.email)}">${esc(a.name)}</a>` : esc(a.name)))
    .join(', ');
  const labels = r.labels.map((l) => `\n        <a class="keyword-tag" href="/keyword/${attr(l)}/">${esc(l)}</a>\n      `).join('');
  const tocHtml = r.toc.length
    ? `
      <aside class="rfc-toc" aria-label="Table of contents">
        <div class="rfc-toc-title">On this page</div>
        <ol>
${r.toc.map((it) => `          <li class="toc-level-${it.level}"><a href="#${attr(it.id)}">${esc(it.text)}</a></li>`).join('\n')}
        </ol>
      </aside>`
    : '';

  const docTitle = `RFC ${r.number} · ${r.title}`;
  return `${htmlHead({ title: docTitle, description: r.summary, canonical: `${SITE.baseUrl}/${r.number}/`, ogType: 'article' })}
<main class="page-shell page-shell-rfc">
        <article class="paper rfc-paper">
          <div class="rfc-topline">
            <a class="back-link" href="/">All RFCs</a>
${pageActions()}
          </div>
          <header class="rfc-hero">
            <div class="rfc-hero-number">RFC ${esc(r.number)}</div>
            <div class="rfc-hero-main">
              <a class="rfc-state-chip state-pill-${slugifyState(r.state)}" href="/state/${slugifyState(r.state)}/">${esc(r.state)}</a>
              <h1>${esc(r.title)}</h1>
              <a class="visibility-note" href="/keyword/${slugifyState(r.visibility)}/">
                <strong>Visibility</strong>
                <span>${esc(r.visibility)}</span>
              </a>
              <div class="keyword-tags">${labels}</div>
            </div>
          </header>
          <dl class="rfc-meta-rows">
    <div class="rfc-meta-row"><dt>Authors</dt><dd>${authors}</dd></div>
    <div class="rfc-meta-row"><dt>Created</dt><dd>${esc(r.created.human)}</dd></div>
    <div class="rfc-meta-row"><dt>Updated</dt><dd>${esc(r.updated.human)}</dd></div>
  </dl>
          <div class="rfc-content-grid">
            <div class="prose">${r.bodyHtml}</div>
${tocHtml}
          </div>
        </article>
      </main>
</body>
</html>
`;
}

// ---------- index ----------
function renderIndex(rfcs) {
  const items = rfcs.map((r) => {
    const labelsPills =
      `<a class="list-pill list-pill-subtle" href="/keyword/${slugifyState(r.visibility)}/">${esc(r.visibility)}</a>` +
      r.labels.map((l) => `<a class="keyword-tag" href="/keyword/${attr(l)}/">${esc(l)}</a>`).join('');
    const authorsText = r.authors.map((a) => `${a.name}${a.email ? ' ' + a.email : ''}`).join(' ');
    const keywords = r.labels.join(' ');
    const searchText = [`RFC ${r.number}`, r.number, String(Number(r.number)), r.title, r.state, r.visibility, authorsText, keywords, r.summary]
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
    return `    <li class="index-item" data-index-search-entry data-search-href="${r.href}" data-search-number="${attr(r.number)}" data-search-title="${attr(r.title)}" data-search-state="${attr(r.state)}" data-search-authors="${attr(authorsText)}" data-search-keywords="${attr(keywords)}" data-search-excerpt="${attr(r.summary)}" data-search-text="${attr(searchText)}">
      <div class="index-link index-link-clickable index-link-public" role="link" tabindex="0" data-row-href="${r.href}" aria-label="Open RFC ${attr(r.number)} ${attr(r.title)}">
        <div class="index-col index-col-title">
          <div class="index-number">RFC ${esc(r.number)}</div>
          <div class="index-content">
            <h2>${esc(r.title)}</h2>
          </div>
        </div>
        <div class="index-col index-col-state">
          <a class="list-pill state-pill-${slugifyState(r.state)}" href="/state/${slugifyState(r.state)}/">${esc(r.state)}</a>
        </div>
        <div class="index-col index-col-updated">
          <time datetime="${attr(r.updated.iso)}">${esc(r.updated.human)}</time>
        </div>
        <div class="index-col index-col-labels">${labelsPills}</div>
      </div>
    </li>`;
  }).join('\n');

  return `${htmlHead({ title: SITE.ogSiteName, description: 'Rendered RFC index', canonical: `${SITE.baseUrl}/`, ogType: 'website' })}
<main class="page-shell page-shell-index">
        <section class="paper index-paper">
          <header class="index-header index-header-list">
            <div class="index-eyebrow-row">
              <div class="rfc-kicker"><a class="kicker-link" href="/">${esc(SITE.kicker)}</a></div>
${pageActions()}
            </div>
            <h1>${esc(SITE.title)}</h1>
          </header>
          <div class="index-search" data-index-search>
            <div class="index-search-control">
              <input class="index-search-input" type="search" inputmode="search" autocomplete="off" spellcheck="false"
                placeholder="Search RFCs by number, title, author, keywords, or summary" aria-label="Search RFCs" data-index-search-input>
              <button class="index-search-clear" type="button" data-index-search-clear hidden>Clear</button>
            </div>
            <div class="index-search-panel" data-index-search-panel hidden>
              <div class="index-search-panel-head">Top matches</div>
              <ol class="index-search-panel-list" data-index-search-panel-list></ol>
              <p class="index-search-panel-empty" data-index-search-panel-empty hidden>No RFCs match this search.</p>
            </div>
            <p class="index-search-hint">Press <kbd>/</kbd> to focus</p>
          </div>
          <div class="list-shell">
            <div class="list-head">
              <div>Number / Title</div>
              <div>State</div>
              <div>Updated</div>
              <div>Labels</div>
            </div>
            <ol class="rfc-index-list" data-index-search-list>
${items}
            </ol>
            <p class="index-search-empty" data-index-search-empty hidden>No RFCs match this search.</p>
          </div>
          <div class="index-results-footer" data-index-results data-index-results-total="${rfcs.length}">
            Results: <span data-index-results-count>${rfcs.length}</span><span data-index-results-extra></span>
          </div>
        </section>
      </main>
</body>
</html>
`;
}

// ---------- build ----------
rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, 'assets'), { recursive: true });
for (const f of readdirSync(join(ROOT, 'assets'))) copyFileSync(join(ROOT, 'assets', f), join(DIST, 'assets', f));
// static passthrough (favicon, _redirects, etc.)
try { for (const f of readdirSync(join(ROOT, 'static'))) copyFileSync(join(ROOT, 'static', f), join(DIST, f)); } catch {}

const rfcs = readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
  .map((f) => parseRfc(join(CONTENT_DIR, f)))
  .sort((a, b) => Number(b.number) - Number(a.number));

for (const r of rfcs) {
  const outDir = join(DIST, r.number);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), renderRfcPage(r));
  console.log(`  RFC ${r.number} -> dist/${r.number}/index.html`);
}
writeFileSync(join(DIST, 'index.html'), renderIndex(rfcs));
console.log(`  index (${rfcs.length} RFCs) -> dist/index.html`);
