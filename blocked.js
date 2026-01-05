// Logic for blocked.html (kept external for default extension CSP compliance)
(() => {
  const IGNORE_MARKER = '__STEAMAUTH_IGNORE_SCAM__';

  const params = new URLSearchParams(window.location.search);
  const site = params.get('site');
  const reason = params.get('reason');
  const url = params.get('url');

  const domainEl = document.getElementById('blocked-domain');
  const badgeEl = document.getElementById('reason-badge');

  if (domainEl && site) {
    domainEl.textContent = site;
  }

  if (badgeEl && reason) {
    badgeEl.textContent = reason;
    badgeEl.classList.add('visible');
  }

  document.getElementById('btn-go-back')?.addEventListener('click', () => {
    if (window.history.length > 2) {
      window.history.go(-2);
    } else {
      window.location.href = 'https://google.com';
    }
  });

  document.getElementById('btn-proceed')?.addEventListener('click', (e) => {
    e.preventDefault();

    if (!site) return;

    const ok = confirm(
      'Are you absolutely sure? This site is flagged as dangerous and may steal your Steam credentials.'
    );
    if (!ok) return;

    // Mark this tab to skip the scam warning once after navigation.
    // This survives the redirect from moz-extension:// back to the website.
    if (typeof window.name === 'string' && !window.name.includes(IGNORE_MARKER)) {
      window.name += IGNORE_MARKER;
    }

    // Prefer exact URL if provided; otherwise fall back to https://<site>
    const target = url || `https://${site}`;
    window.location.href = target;
  });

  document.getElementById('btn-settings')?.addEventListener('click', (e) => {
    e.preventDefault();

    const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
    const getURL = browserAPI?.runtime?.getURL;
    window.open(getURL ? getURL('index.html?page=scam-sites') : 'about:blank', '_blank');
  });
})();
