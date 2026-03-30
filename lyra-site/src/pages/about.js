import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('about')}

${getPageHeader('Built by a founder tired of agencies that over-promise', "Lyra Capital exists because Niko could not find an automation partner he actually trusted.")}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">The real story</span>
        <h2 class="mb-24">Hi, I'm <span class="text-gradient">Niko.</span></h2>
        <p class="mb-16">I'm a 28-year-old founder from London. Before starting Lyra Capital, I spent years watching small business owners get burned by agencies that charged thousands for cookie-cutter "marketing strategies" that never delivered.</p>
        <p class="mb-16">I saw plumbers, salons, and contractors paying thousands per month for the same recycled templates and generic follow-up sequences. None of them were actually designed for how their business worked.</p>
        <p class="mb-16">So I built something different. Lyra Capital is not a marketing agency — <strong style="color: var(--text-primary);">we are a systems company.</strong> We build AI-powered automations that genuinely run your business operations: answering phones, following up with leads, booking appointments, and collecting reviews — all automatically.</p>
        <p>The result? Our clients keep 98% of their leads instead of losing 40% to slow follow-up. That is not a marketing tagline — it is maths.</p>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <div class="founder-portrait">
          <img src="/images/niko-real.jpg" alt="Nikolai Blair — Founder and CEO of Lyra Capital" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Values as proof -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">How we are different</span>
      <h2 class="mb-16">Things agencies will not tell you. <span class="text-gradient">We will.</span></h2>
    </div>
    <div class="grid grid--3">
      <div class="card reveal reveal--delay-1">
        <h4 class="card__title">No long contracts</h4>
        <p class="card__text">We keep clients because we deliver results, not because we locked them in. Every plan is month-to-month. Cancel anytime.</p>
      </div>
      <div class="card reveal reveal--delay-2">
        <h4 class="card__title">We show you the data</h4>
        <p class="card__text">Full dashboard access. You see every lead, every call, every text — in real time. No "trust us, it is working" handwaving.</p>
      </div>
      <div class="card reveal reveal--delay-3">
        <h4 class="card__title">We tell you if it is not a fit</h4>
        <p class="card__text">Not every business needs what we offer. If you would be better served elsewhere, we will tell you — even if it means losing the sale.</p>
      </div>
    </div>
  </div>
</section>

<!-- Numbers -->
<section class="section">
  <div class="container">
    <div class="stats reveal">
      <div>
        <div class="stat__number" data-count="20" data-suffix="+">0</div>
        <div class="stat__label">Businesses automated</div>
      </div>
      <div>
        <div class="stat__number" data-count="47" data-suffix="K+">0</div>
        <div class="stat__label">Leads captured</div>
      </div>
      <div>
        <div class="stat__number" data-count="98" data-suffix="%">0</div>
        <div class="stat__label">Client retention</div>
      </div>
      <div>
        <div class="stat__number" data-count="24" data-suffix="hr">0</div>
        <div class="stat__label">Average setup time</div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-32">
      <h2>Want to see if it works for your business?</h2>
      <p class="max-w-640 mx-auto mt-16" style="color: var(--text-muted);">Book a free 15-minute call. I will personally show you how the system works and whether it makes sense for you. No pitch. No pressure.</p>
    </div>
    <div class="reveal">
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Talk to Niko — Free Call <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">🛡️ 14-day money-back guarantee if you sign up.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
