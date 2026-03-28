import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('pricing')}

${getPageHeader('Cheaper than hiring. Smarter than outsourcing.', 'A part-time receptionist costs £1,200/mo and works 9-5. Our AI costs from £88/mo and never sleeps.')}

<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <a href="/web-development.html" class="btn btn--outline btn--large" style="border-color: var(--accent-cyan); color: var(--accent-cyan);">
        🎁 TRY SMART-WEBSITE FREE FOR 14 DAYS <span class="btn-arrow">→</span>
      </a>
    </div>

    <div class="grid grid--3 mb-64">
      <div class="pricing-card reveal reveal--delay-1" id="starter">
        <h4 class="pricing-card__name">Starter</h4>
        <div class="pricing-card__price">£260.17</div>
        <div class="pricing-card__period">per month</div>
        <p class="pricing-card__desc">Small businesses or startups looking to establish their online presence.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Smart website integration/creation</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Basic email marketing</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Basic lead management and nurturing</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004GXE0V26P" target="_blank" class="btn btn--outline btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>

      <div class="pricing-card pricing-card--featured reveal reveal--delay-2" id="growth">
        <h4 class="pricing-card__name">Growth</h4>
        <div class="pricing-card__price">£422.88</div>
        <div class="pricing-card__period">per month</div>
        <p class="pricing-card__desc">Midlevel businesses or startups looking to scale.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Everything in the basic plan</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> CRM (All messages + data analytics)</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> A.I. receptionist for calls and bookings</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Reputation management</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004GXF58PBA" target="_blank" class="btn btn--primary btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>

      <div class="pricing-card reveal reveal--delay-3" id="pro">
        <h4 class="pricing-card__name">Pro</h4>
        <div class="pricing-card__price">£1,520</div>
        <div class="pricing-card__period">per month</div>
        <p class="pricing-card__desc">Large businesses or Enterprises looking to scale and increase productivity.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Everything in all other plans</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> A.I. Receptionist (Handles calls & books appointments)</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> CRM + Data Analytics</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Automatic Invoicing</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Social media marketing and A.I. ad creation</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004GXEE54W6" target="_blank" class="btn btn--outline btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>
    </div>

    <!-- Additional Plans -->
    <div class="text-center reveal mb-32">
      <span class="section-label">Additional Options</span>
      <h3 class="mb-16">More Ways to Get Started</h3>
    </div>

    <div class="grid grid--3">
      <div class="pricing-card reveal reveal--delay-1" id="yearly">
        <h4 class="pricing-card__name">Yearly Premium</h4>
        <div class="pricing-card__price">£4,400.88</div>
        <div class="pricing-card__period">per year</div>
        <p class="pricing-card__desc">Everything in the premium plan + extra perks. Best value for committed growth.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> All Pro features included</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Yearly savings vs monthly</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Priority support</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004GXF8E4VX" target="_blank" class="btn btn--outline btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>

      <div class="pricing-card reveal reveal--delay-2">
        <h4 class="pricing-card__name">A.I. Smart Website</h4>
        <div class="pricing-card__price">£88.44</div>
        <div class="pricing-card__period">per month</div>
        <p class="pricing-card__desc">Standalone AI-powered website with voice AI and chatbot functionality.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> AI-powered website</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Voice A.I. included</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Hosting included</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004N7YBFT7A" target="_blank" class="btn btn--outline btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>

      <div class="pricing-card reveal reveal--delay-3">
        <h4 class="pricing-card__name">A.I. Receptionist</h4>
        <div class="pricing-card__price">£211.40</div>
        <div class="pricing-card__period">per month</div>
        <p class="pricing-card__desc">Standalone AI receptionist for call handling and appointment booking.</p>
        <div class="pricing-card__features">
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> 24/7 call answering</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Lead qualification</div>
          <div class="pricing-card__feature"><span class="pricing-card__check">✓</span> Appointment booking</div>
        </div>
        <a href="https://pay.gocardless.com/BRT0004QSP3FJ0Q" target="_blank" class="btn btn--outline btn--full">Start Automating Today! <span class="btn-arrow">→</span></a>
      </div>
    </div>

    <div class="text-center reveal mt-48 mb-48">
      <p style="color: var(--text-muted); font-size: 0.9rem;">🛡️ 14-day money-back guarantee on all plans. No contracts — cancel anytime with one click.</p>
    </div>
  </div>
</section>

<!-- FAQ -->  
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Common questions</span>
      <h2 class="mb-16">Before you <span class="text-gradient">decide</span></h2>
    </div>
    <div class="max-w-800 mx-auto">
      <div class="card reveal reveal--delay-1" style="margin-bottom: 16px; padding: 24px 32px;">
        <h4 style="margin-bottom: 8px;">Am I locked into a contract?</h4>
        <p style="color: var(--text-muted);">No. Every plan is month-to-month. Cancel anytime with one click — no penalties, no phone calls, no guilt trips.</p>
      </div>
      <div class="card reveal reveal--delay-2" style="margin-bottom: 16px; padding: 24px 32px;">
        <h4 style="margin-bottom: 8px;">How fast will I be set up?</h4>
        <p style="color: var(--text-muted);">Under 24 hours for most plans. We build your system, configure the AI, and test everything before go-live. You just approve.</p>
      </div>
      <div class="card reveal reveal--delay-3" style="margin-bottom: 16px; padding: 24px 32px;">
        <h4 style="margin-bottom: 8px;">What if it doesn't work for my business?</h4>
        <p style="color: var(--text-muted);">14-day money-back guarantee. If you're not seeing results, we'll refund every penny. No questions asked.</p>
      </div>
      <div class="card reveal" style="margin-bottom: 16px; padding: 24px 32px;">
        <h4 style="margin-bottom: 8px;">Can I switch plans later?</h4>
        <p style="color: var(--text-muted);">Absolutely. Upgrade or downgrade at any time. Your data and configuration carry over seamlessly.</p>
      </div>
    </div>
    <div class="text-center reveal mt-48">
      <h3 class="mb-16">Still unsure? Let's talk.</h3>
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Book a Free 15-Min Call <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">We'll recommend the right plan for your business — or tell you if it's not a fit.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
