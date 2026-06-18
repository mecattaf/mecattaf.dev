const THEME_STORAGE_KEY = 'earendil-rfc-theme';
const DARK_THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';

function normalizeThemeMode(value) {
  return value === 'auto' || value === 'light' || value === 'dark' ? value : 'auto';
}

function getStoredThemeMode() {
  try {
    return normalizeThemeMode(window.localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return 'auto';
  }
}

function setStoredThemeMode(mode) {
  const nextMode = normalizeThemeMode(mode);
  try {
    if (nextMode === 'auto') {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    }
  } catch {
    // Ignore storage failures; the theme still applies for this page view.
  }
  return nextMode;
}

function getSystemThemePreference() {
  if (typeof window.matchMedia === 'function' && window.matchMedia(DARK_THEME_MEDIA_QUERY).matches) {
    return 'dark';
  }
  return 'light';
}

function getResolvedThemeForMode(mode) {
  const nextMode = normalizeThemeMode(mode);
  return nextMode === 'auto' ? getSystemThemePreference() : nextMode;
}

function applyThemeMode(mode) {
  const nextMode = normalizeThemeMode(mode);
  const resolvedTheme = getResolvedThemeForMode(nextMode);
  document.documentElement.dataset.themeMode = nextMode;

  if (nextMode === 'auto') {
    delete document.documentElement.dataset.theme;
    document.documentElement.style.colorScheme = '';
    return;
  }

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
}

function getCurrentThemeMode() {
  return normalizeThemeMode(document.documentElement.dataset.themeMode || getStoredThemeMode());
}

function getNextThemeMode(mode) {
  const currentMode = normalizeThemeMode(mode);
  if (currentMode === 'light') {
    return 'dark';
  }
  if (currentMode === 'dark') {
    return 'auto';
  }
  return 'light';
}

function formatThemeMode(mode) {
  const normalized = normalizeThemeMode(mode);
  if (normalized === 'dark') {
    return 'Dark';
  }
  if (normalized === 'light') {
    return 'Light';
  }
  return 'Auto';
}

function updateThemeToggleLabels() {
  const currentMode = getCurrentThemeMode();
  const resolvedTheme = getResolvedThemeForMode(currentMode);
  const nextMode = getNextThemeMode(currentMode);
  const currentLabel = formatThemeMode(currentMode);
  const resolvedLabel = resolvedTheme === 'dark' ? 'dark' : 'light';
  const nextLabel = formatThemeMode(nextMode).toLowerCase();
  const autoDetail = currentMode === 'auto' ? ' (currently ' + resolvedLabel + ')' : '';

  for (const button of document.querySelectorAll('[data-theme-toggle]')) {
    if (!(button instanceof HTMLButtonElement)) {
      continue;
    }

    button.setAttribute('aria-pressed', currentMode === 'auto' ? 'mixed' : currentMode === 'dark' ? 'true' : 'false');
    button.setAttribute('aria-label', 'Theme: ' + currentLabel.toLowerCase() + autoDetail + '; switch to ' + nextLabel);
    button.title = 'Theme: ' + currentLabel + autoDetail + '. Switch to ' + formatThemeMode(nextMode) + '.';

    const label = button.querySelector('[data-theme-toggle-label]');
    if (label instanceof HTMLElement) {
      label.textContent = currentLabel;
    } else {
      button.textContent = currentLabel;
    }
  }
}

function wireThemeToggle() {
  applyThemeMode(getStoredThemeMode());
  updateThemeToggleLabels();

  for (const button of document.querySelectorAll('[data-theme-toggle]')) {
    if (!(button instanceof HTMLButtonElement)) {
      continue;
    }

    button.addEventListener('click', () => {
      const nextMode = getNextThemeMode(getCurrentThemeMode());
      setStoredThemeMode(nextMode);
      applyThemeMode(nextMode);
      updateThemeToggleLabels();
    });
  }

  if (typeof window.matchMedia !== 'function') {
    return;
  }

  const mediaQuery = window.matchMedia(DARK_THEME_MEDIA_QUERY);
  const handleSystemThemeChange = () => {
    if (getCurrentThemeMode() !== 'auto') {
      return;
    }
    updateThemeToggleLabels();
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return;
  }

  if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleSystemThemeChange);
  }
}

async function fetchJson(url) {
  const response = await fetch(url, { credentials: 'same-origin' });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

function wireClickableRows() {
  for (const row of document.querySelectorAll('[data-row-href]')) {
    row.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) {
        return;
      }
      const href = row.getAttribute('data-row-href');
      if (href) {
        window.location.href = href;
      }
    });

    row.addEventListener('keydown', (event) => {
      if (!(event instanceof KeyboardEvent)) {
        return;
      }
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      const href = row.getAttribute('data-row-href');
      if (href) {
        window.location.href = href;
      }
    });
  }
}

function normalizeSearchText(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/s+/g, ' ')
    .trim();
}

function isEditableElement(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }

  if (element.isContentEditable) {
    return true;
  }

  if (element instanceof HTMLTextAreaElement) {
    return true;
  }

  if (element instanceof HTMLInputElement) {
    const type = (element.type || 'text').toLowerCase();
    return ![
      'button',
      'checkbox',
      'color',
      'file',
      'hidden',
      'image',
      'radio',
      'range',
      'reset',
      'submit',
    ].includes(type);
  }

  return false;
}

function truncateText(value, maxLength) {
  if (!value) {
    return '';
  }

  if (value.length <= maxLength) {
    return value;
  }

  return value.slice(0, Math.max(0, maxLength - 1)) + '…';
}

function wireIndexSearch() {
  const searchRoot = document.querySelector('[data-index-search]');
  const list = document.querySelector('[data-index-search-list]');
  const searchInput = document.querySelector('[data-index-search-input]');

  if (!(searchRoot instanceof HTMLElement) || !(list instanceof HTMLElement) || !(searchInput instanceof HTMLInputElement)) {
    return;
  }

  const clearButton = document.querySelector('[data-index-search-clear]');
  const emptyState = document.querySelector('[data-index-search-empty]');
  const resultsContainer = document.querySelector('[data-index-results]');
  const resultCount = document.querySelector('[data-index-results-count]');
  const resultExtra = document.querySelector('[data-index-results-extra]');
  const panel = searchRoot.querySelector('[data-index-search-panel]');
  const panelList = searchRoot.querySelector('[data-index-search-panel-list]');
  const panelEmpty = searchRoot.querySelector('[data-index-search-panel-empty]');

  const entries = [...list.querySelectorAll('[data-index-search-entry]')]
    .filter((entry) => entry instanceof HTMLElement)
    .map((entry, index) => ({
      element: entry,
      index,
      href: entry.getAttribute('data-search-href') || '',
      displayNumber: entry.getAttribute('data-search-number') || '',
      displayTitle: entry.getAttribute('data-search-title') || '',
      displayState: entry.getAttribute('data-search-state') || '',
      displayAuthors: entry.getAttribute('data-search-authors') || '',
      displayKeywords: entry.getAttribute('data-search-keywords') || '',
      displayExcerpt: entry.getAttribute('data-search-excerpt') || '',
      searchText: normalizeSearchText(entry.getAttribute('data-search-text') || entry.textContent || ''),
      titleText: normalizeSearchText(entry.getAttribute('data-search-title') || ''),
      numberText: normalizeSearchText(entry.getAttribute('data-search-number') || ''),
      keywordText: normalizeSearchText(entry.getAttribute('data-search-keywords') || ''),
    }));

  if (entries.length === 0) {
    return;
  }

  const totalCount = Number.parseInt(resultsContainer?.getAttribute('data-index-results-total') || '', 10) || entries.length;
  let currentMatches = [];
  let panelLinks = [];
  let activePanelIndex = -1;

  function hidePanel() {
    if (panel instanceof HTMLElement) {
      panel.hidden = true;
    }
    if (panelEmpty instanceof HTMLElement) {
      panelEmpty.hidden = true;
    }
    panelLinks = [];
    activePanelIndex = -1;
  }

  function setActivePanelIndex(nextIndex) {
    activePanelIndex = nextIndex;

    for (let index = 0; index < panelLinks.length; index += 1) {
      const link = panelLinks[index];
      const isActive = index === activePanelIndex;
      link.classList.toggle('index-search-panel-link-active', isActive);
      link.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) {
        link.scrollIntoView({ block: 'nearest' });
      }
    }
  }

  function renderFloatingPanel(matches, hasQuery) {
    if (!(panel instanceof HTMLElement) || !(panelList instanceof HTMLElement)) {
      return;
    }

    panelList.textContent = '';
    panelLinks = [];
    activePanelIndex = -1;

    if (!hasQuery) {
      hidePanel();
      return;
    }

    panel.hidden = false;

    if (matches.length === 0) {
      if (panelEmpty instanceof HTMLElement) {
        panelEmpty.hidden = false;
      }
      return;
    }

    if (panelEmpty instanceof HTMLElement) {
      panelEmpty.hidden = true;
    }

    const visibleMatches = matches.slice(0, 8);
    for (const match of visibleMatches) {
      if (!match.entry.href) {
        continue;
      }

      const item = document.createElement('li');
      item.className = 'index-search-panel-item';

      const link = document.createElement('a');
      link.className = 'index-search-panel-link';
      link.href = match.entry.href;
      link.setAttribute('role', 'option');
      link.setAttribute('aria-selected', 'false');

      const title = document.createElement('span');
      title.className = 'index-search-panel-title';
      title.textContent = 'RFC ' + match.entry.displayNumber + ' · ' + match.entry.displayTitle;

      const meta = document.createElement('span');
      meta.className = 'index-search-panel-meta';
      const metaParts = [];
      if (match.entry.displayState) {
        metaParts.push(match.entry.displayState);
      }
      if (match.entry.displayAuthors) {
        metaParts.push(truncateText(match.entry.displayAuthors, 72));
      }
      if (match.entry.displayKeywords) {
        metaParts.push('keywords: ' + truncateText(match.entry.displayKeywords, 56));
      }
      meta.textContent = metaParts.join(' · ');

      const excerpt = document.createElement('span');
      excerpt.className = 'index-search-panel-excerpt';
      excerpt.textContent = truncateText(match.entry.displayExcerpt, 140);

      link.append(title);
      if (meta.textContent !== '') {
        link.append(meta);
      }
      if (excerpt.textContent !== '') {
        link.append(excerpt);
      }

      link.addEventListener('mousemove', () => {
        const nextIndex = panelLinks.indexOf(link);
        if (nextIndex >= 0) {
          setActivePanelIndex(nextIndex);
        }
      });

      item.append(link);
      panelList.append(item);
      panelLinks.push(link);
    }
  }

  function restoreOriginalOrder() {
    for (const entry of [...entries].sort((left, right) => left.index - right.index)) {
      entry.element.hidden = false;
      list.append(entry.element);
    }
  }

  function updateResultSummary(count, hasQuery) {
    if (resultCount) {
      resultCount.textContent = String(count);
    }

    if (resultExtra) {
      resultExtra.textContent = hasQuery && count !== totalCount
        ? ' of ' + String(totalCount)
        : '';
    }
  }

  function scoreEntry(entry, normalizedQuery, tokens) {
    for (const token of tokens) {
      if (!entry.searchText.includes(token)) {
        return -1;
      }
    }

    let score = 0;
    if (entry.numberText === normalizedQuery) {
      score += 240;
    }
    if (entry.titleText === normalizedQuery) {
      score += 180;
    }
    if (entry.keywordText === normalizedQuery) {
      score += 180;
    }
    if (entry.titleText.includes(normalizedQuery)) {
      score += 120;
    }
    if (entry.numberText.includes(normalizedQuery)) {
      score += 120;
    }
    if (entry.keywordText.includes(normalizedQuery)) {
      score += 120;
    }

    for (const token of tokens) {
      if (entry.titleText.includes(token)) {
        score += 35;
      }
      if (entry.numberText.includes(token)) {
        score += 50;
      }
      if (entry.keywordText.includes(token)) {
        score += 50;
      }
      if (entry.searchText.includes(token)) {
        score += 8;
      }
    }

    if (entry.searchText.startsWith(normalizedQuery)) {
      score += 15;
    }

    return score;
  }

  function applySearch(rawQuery) {
    const normalizedQuery = normalizeSearchText(rawQuery);
    const tokens = normalizedQuery.split(' ').filter(Boolean);

    if (tokens.length === 0) {
      restoreOriginalOrder();
      updateResultSummary(totalCount, false);
      currentMatches = [];
      hidePanel();

      if (emptyState instanceof HTMLElement) {
        emptyState.hidden = true;
      }

      if (clearButton instanceof HTMLButtonElement) {
        clearButton.hidden = true;
      }

      return;
    }

    const matches = [];
    for (const entry of entries) {
      const score = scoreEntry(entry, normalizedQuery, tokens);
      if (score < 0) {
        entry.element.hidden = true;
        continue;
      }

      entry.element.hidden = false;
      matches.push({
        entry,
        score,
      });
    }

    const sortedMatches = matches
      .sort((left, right) => right.score - left.score || left.entry.index - right.entry.index);

    sortedMatches
      .forEach(({ entry }) => {
        list.append(entry.element);
      });

    currentMatches = sortedMatches;
    renderFloatingPanel(sortedMatches, true);

    updateResultSummary(sortedMatches.length, true);

    if (emptyState instanceof HTMLElement) {
      emptyState.hidden = sortedMatches.length !== 0;
    }

    if (clearButton instanceof HTMLButtonElement) {
      clearButton.hidden = false;
    }
  }

  function updateQueryInUrl(rawQuery) {
    const trimmedQuery = rawQuery.trim();
    const url = new URL(window.location.href);

    if (trimmedQuery) {
      url.searchParams.set('q', trimmedQuery);
    } else {
      url.searchParams.delete('q');
    }

    const nextLocation = url.pathname + url.search + url.hash;
    const currentLocation = window.location.pathname + window.location.search + window.location.hash;

    if (nextLocation !== currentLocation) {
      history.replaceState(null, '', nextLocation);
    }
  }

  searchInput.addEventListener('input', () => {
    applySearch(searchInput.value);
    updateQueryInUrl(searchInput.value);
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() === '') {
      hidePanel();
      return;
    }
    renderFloatingPanel(currentMatches, true);
  });

  searchInput.addEventListener('keydown', (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key === 'Escape') {
      hidePanel();
      return;
    }

    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') {
      return;
    }

    if (searchInput.value.trim() === '') {
      return;
    }

    if (panel instanceof HTMLElement && panel.hidden) {
      renderFloatingPanel(currentMatches, true);
    }

    if (event.key === 'Enter') {
      if (activePanelIndex < 0 || activePanelIndex >= panelLinks.length) {
        return;
      }
      event.preventDefault();
      window.location.href = panelLinks[activePanelIndex].href;
      return;
    }

    if (panelLinks.length === 0) {
      return;
    }

    event.preventDefault();

    if (event.key === 'ArrowDown') {
      const nextIndex = activePanelIndex < panelLinks.length - 1
        ? activePanelIndex + 1
        : 0;
      setActivePanelIndex(nextIndex);
      return;
    }

    const previousIndex = activePanelIndex > 0
      ? activePanelIndex - 1
      : panelLinks.length - 1;
    setActivePanelIndex(previousIndex);
  });

  if (clearButton instanceof HTMLButtonElement) {
    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      applySearch('');
      updateQueryInUrl('');
      hidePanel();
      searchInput.focus();
    });
  }

  document.addEventListener('pointerdown', (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }

    if (searchRoot.contains(event.target)) {
      return;
    }

    hidePanel();
  });

  document.addEventListener('keydown', (event) => {
    if (!(event instanceof KeyboardEvent)) {
      return;
    }

    if (event.key !== '/') {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    if (isEditableElement(document.activeElement)) {
      return;
    }

    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  });

  const initialQuery = new URL(window.location.href).searchParams.get('q');
  if (initialQuery && initialQuery.trim() !== '') {
    searchInput.value = initialQuery;
  }

  applySearch(searchInput.value);
  if (searchInput.value.trim() !== '') {
    updateQueryInUrl(searchInput.value);
  }
}

// --- init (auth/session/Google-Docs hydration from the original is omitted) ---
window.addEventListener('DOMContentLoaded', () => {
  wireThemeToggle();
  wireClickableRows();
  wireIndexSearch();
});
