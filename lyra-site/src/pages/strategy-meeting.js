import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('')}

${getPageHeader('Your free 15-minute strategy call', "No pitch. No pressure. We'll show you exactly where you're losing leads — and how to fix it.")}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <h2 class="mb-24">Here's what happens on the call:</h2>
        <div class="feature-list" style="margin-bottom: 32px;">
          <div class="feature-item" style="margin-bottom: 16px;">
            <span class="feature-item__icon" style="font-size: 1.3rem;">1️⃣</span>
            <div><strong style="color: var(--text-primary);">We audit your current setup</strong><br><span style="color: var(--text-muted); font-size: 0.9rem;">How are leads reaching you? Where are they falling off? We find the gaps in 5 minutes.</span></div>
          </div>
          <div class="feature-item" style="margin-bottom: 16px;">
            <span class="feature-item__icon" style="font-size: 1.3rem;">2️⃣</span>
            <div><strong style="color: var(--text-primary);">We show you the fix</strong><br><span style="color: var(--text-muted); font-size: 0.9rem;">Live demo of the AI phone agent, automated follow-ups, and CRM — using YOUR business as the example.</span></div>
          </div>
          <div class="feature-item" style="margin-bottom: 16px;">
            <span class="feature-item__icon" style="font-size: 1.3rem;">3️⃣</span>
            <div><strong style="color: var(--text-primary);">We give you a plan</strong><br><span style="color: var(--text-muted); font-size: 0.9rem;">Whether you work with us or not, you'll leave with a clear action plan to capture more leads.</span></div>
          </div>
        </div>

        <div class="card" style="padding: 20px 24px; margin-bottom: 32px; border-color: rgba(34,197,94,0.3);">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="font-size: 1.5rem;">🛡️</div>
            <div>
              <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">Zero-pressure guarantee</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">If it's not a fit, we'll tell you. No awkward follow-up emails. No guilt trips.</div>
            </div>
          </div>
        </div>

        <div class="contact-info">
          <div class="contact-info__item">
            <div class="contact-info__icon">📞</div>
            <div>
              <div class="contact-info__label">Prefer to call?</div>
              <a href="tel:+448003167364" class="contact-info__value">+44 800 316 7364</a>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon">✉️</div>
            <div>
              <div class="contact-info__label">Email us</div>
              <a href="mailto:contact@lyracapital.co.uk" class="contact-info__value">contact@lyracapital.co.uk</a>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal reveal--delay-2">
        <div class="booking-embed" id="booking-widget">
          <iframe src="https://api.leadconnectorhq.com/widget/booking/EQMnUPQLTTYw7mltzfqm" style="width: 100%;border:none;overflow: hidden;min-height: 700px;" scrolling="no" id="ijlR6hS7PsXeLJb1Njon_1774676961910"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
