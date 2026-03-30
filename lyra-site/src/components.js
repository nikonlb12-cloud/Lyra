/* ============================================
   LYRA CAPITAL — Shared HTML Components
   Nav, Footer, and reusable partials
   ============================================ */

export function getNav(activePage = '') {
  const strategyLink = activePage === 'strategy-meeting' ? '#booking-widget' : '/strategy-meeting.html';
  return `
  <a href="#main-content" class="skip-link">Skip to content</a>
  <canvas id="particles-canvas"></canvas>
  <nav class="nav" id="mainNav">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <img src="/images/lyra-logo.png" alt="Lyra Capital" class="nav__logo-img" />
      </a>
      <div class="nav__links">
        <a href="/" class="nav__link ${activePage === 'home' ? 'nav__link--active' : ''}">Home</a>
        <div class="nav__dropdown">
          <span class="nav__link nav__dropdown-trigger ${['about','core-values','why-us'].includes(activePage) ? 'nav__link--active' : ''}">
            About <span class="nav__dropdown-arrow">▼</span>
          </span>
          <div class="nav__dropdown-menu">
            <a href="/about.html" class="nav__dropdown-item">Our Story</a>
            <a href="/core-values.html" class="nav__dropdown-item">Core Values</a>
            <a href="/why-us.html" class="nav__dropdown-item">Why Choose Us</a>
          </div>
        </div>
        <div class="nav__dropdown">
          <a href="/pricing.html" class="nav__link nav__dropdown-trigger ${activePage === 'pricing' ? 'nav__link--active' : ''}">
            Plans & Pricing <span class="nav__dropdown-arrow">▼</span>
          </a>
          <div class="nav__dropdown-menu">
            <div style="padding: 16px;">
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px;">Choose your growth plan:</p>
              <a href="/pricing.html#starter" class="nav__dropdown-item">🚀 Starter — £260.17/mo</a>
              <a href="/pricing.html#growth" class="nav__dropdown-item">📈 Growth — £422.88/mo</a>
              <a href="/pricing.html#pro" class="nav__dropdown-item">⚡ Pro — £1,520/mo</a>
              <a href="/pricing.html#yearly" class="nav__dropdown-item">💎 Yearly Premium</a>
            </div>
          </div>
        </div>
        <a href="/services.html" class="nav__link ${activePage === 'services' ? 'nav__link--active' : ''}">Services</a>
      </div>
      <a href="/free-trial.html" class="nav__trial-cta ${activePage === 'free-trial' ? 'nav__trial-cta--active' : ''}">🎁 Free Trial</a>
      <a href="/contact.html" class="btn btn--primary nav__cta">Contact Us</a>
      <a href="/free-trial.html" class="nav__mobile-pill">🎁 Free Trial</a>
      <button class="nav__burger" id="navBurger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav__mobile" id="navMobile">
    <a href="/" class="nav__mobile-link">Home</a>
    <div class="nav__mobile-sub">
      <span class="nav__mobile-link" style="color: var(--accent-primary); font-weight: 600; border: none; padding-bottom: 8px;">About</span>
      <a href="/about.html" class="nav__mobile-link">Our Story</a>
      <a href="/core-values.html" class="nav__mobile-link">Core Values</a>
      <a href="/why-us.html" class="nav__mobile-link">Why Choose Us</a>
    </div>
    <a href="/pricing.html" class="nav__mobile-link">Plans & Pricing</a>
    <a href="/services.html" class="nav__mobile-link">Services</a>
    <a href="/contact.html" class="nav__mobile-link">Contact Us</a>
    <a href="/free-trial.html" class="nav__mobile-trial-cta">🎁 TRY SMART-WEBSITE FREE FOR 14 DAYS</a>
    <a href="${strategyLink}" class="btn btn--primary btn--full" style="margin-top: 12px;">Book Free Demo</a>
  </div>`;
}

export function getFooter(activePage = '') {
  const strategyLink = activePage === 'strategy-meeting' ? '#booking-widget' : '/strategy-meeting.html';
  return `
  <!-- Mobile Pre-Footer CTA (hidden on desktop) -->
  <div class="mobile-prefooter-cta">
    <div class="mobile-prefooter-cta__title">Still deciding?</div>
    <p class="mobile-prefooter-cta__text">Book a free 15-min call — we'll show you exactly what we'd build for your business.</p>
    <a href="${strategyLink}" class="btn btn--primary btn--large">Book Free Strategy Call <span class="btn-arrow">→</span></a>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="/images/lyra-logo.png" alt="Lyra Capital" class="footer__logo-img" />
          </div>
          <p class="footer__desc">London-based AI automation agency empowering businesses through intelligent digital systems. Where innovation meets results.</p>
        </div>
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          <a href="/" class="footer__link">Home</a>
          <a href="/services.html" class="footer__link">Services</a>
          <a href="/pricing.html" class="footer__link">Pricing</a>
          <a href="/contact.html" class="footer__link">Contact Us</a>
          <a href="/about.html" class="footer__link">About Us</a>
        </div>
        <div>
          <h4 class="footer__heading">Contact</h4>
          <div class="footer__contact-item">
            <span>📞</span>
            <a href="tel:+448003167364">+44 800 316 7364</a>
          </div>
          <div class="footer__contact-item">
            <span>✉️</span>
            <a href="mailto:contact@lyracapital.co.uk">contact@lyracapital.co.uk</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2026. Lyra Capital. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Mobile Sticky CTA Bar (hidden on desktop) -->
  <div class="mobile-sticky-cta" id="mobileStickyCtaBar">
    <a href="${strategyLink}" class="mobile-sticky-cta__btn">Book Free Demo <span class="btn-arrow">→</span></a>
    <a href="tel:+448003167364" class="mobile-sticky-cta__call" aria-label="Call us">📞</a>
  </div>`;
}

export function getPageHeader(title, subtitle = '') {
  return `
  <section class="page-header">
    <div class="page-header__bg">
      <div class="page-header__gradient"></div>
    </div>
    <div class="container page-header__content">
      <h1>${title}</h1>
      ${subtitle ? `<p>${subtitle}</p>` : ''}
    </div>
  </section>`;
}

export function getFormEmbed(label = 'Go High Level Form', hint = 'Replace this div with your GHL embed code') {
  return `
  <div class="form-embed" id="ghl-form-placeholder">
    <div class="form-embed__icon">📝</div>
    <p class="form-embed__text">${label}</p>
    <p class="form-embed__hint">${hint}</p>
  </div>`;
}

export function getCalendarEmbed(label = 'Go High Level Calendar') {
  return `
  <div class="form-embed" id="ghl-calendar-placeholder">
    <div class="form-embed__icon">📅</div>
    <p class="form-embed__text">${label}</p>
    <p class="form-embed__hint">Replace this div with your GHL calendar embed code</p>
  </div>`;
}
