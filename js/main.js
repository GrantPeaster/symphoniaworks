// ── Symphonia — main.js ──────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Determine active nav link based on current page
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { label: 'What We Do',        href: 'what-we-do.html',   pages: ['what-we-do.html'] },
    { label: 'Hear Our Results',  href: 'results.html',      pages: ['results.html'] },
    { label: 'Book a Presentation', href: 'book.html',       pages: ['book.html'], cta: true },
  ];

  // Detect if we're inside the pages/ subdirectory
  const inPages = window.location.pathname.includes('/pages/');
  const prefix  = inPages ? '' : 'pages/';
  const logoSrc = inPages ? '../images/logo.png' : 'images/logo.png';
  const homeHref = inPages ? '../index.html' : 'index.html';

  // ── Build Header ────────────────────────────────────────
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = `
      <div class="header-inner">
        <a class="logo-link" href="${homeHref}">
          <img src="${logoSrc}" alt="Symphonia" />
        </a>
        <nav id="main-nav">
          ${navLinks.map(l => {
            const href = prefix + l.href;
            const active = l.pages.includes(page) ? 'active' : '';
            const cls = [active, l.cta ? 'cta-nav' : ''].filter(Boolean).join(' ');
            return `<a href="${href}" class="${cls}">${l.label}</a>`;
          }).join('')}
        </nav>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-nav" id="mobile-nav">
        ${navLinks.map(l => {
          const href = prefix + l.href;
          return `<a href="${href}">${l.label}</a>`;
        }).join('')}
      </div>
    `;

    document.getElementById('hamburger')?.addEventListener('click', () => {
      document.getElementById('mobile-nav')?.classList.toggle('open');
    });
  }

  // ── Build Footer ────────────────────────────────────────
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <a class="footer-logo" href="${homeHref}">
          <img src="${logoSrc}" alt="Symphonia" />
        </a>
        <div class="footer-right">
          <a class="footer-book" href="${prefix}book.html">Book Us</a>
          <span class="footer-copy">&copy; ${new Date().getFullYear()} Symphonia. All rights reserved.</span>
        </div>
      </div>
    `;
  }

});
