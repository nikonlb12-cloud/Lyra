import '../styles.css';
import { getNav, getFooter } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('free-trial')}

<!-- FREE TRIAL HERO -->
<section class="trial-hero">
  <div class="trial-hero__bg">
    <div class="trial-hero__orb trial-hero__orb--1"></div>
    <div class="trial-hero__orb trial-hero__orb--2"></div>
    <div class="trial-hero__orb trial-hero__orb--3"></div>
    <div class="trial-hero__grid-lines" aria-hidden="true"></div>
  </div>
  <div class="container trial-hero__content">
    <div class="trial-hero__badge reveal">
      <span class="trial-hero__badge-icon">🎁</span>
      <span>Limited Time Offer</span>
    </div>
    <h1 class="trial-hero__title reveal">
      Try Smart-Website<br>
      <span class="text-gradient">Free for 14 Days</span>
    </h1>
    <p class="trial-hero__subtitle reveal">
      Your AI-powered website that captures leads, answers calls, and books appointments — even while you sleep. No credit card. No commitment. Just results.
    </p>
    <div class="trial-hero__trust reveal">
      <div class="trial-hero__trust-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>No credit card required</span>
      </div>
      <div class="trial-hero__trust-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Live in under 24 hours</span>
      </div>
      <div class="trial-hero__trust-item">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>Cancel anytime, zero hassle</span>
      </div>
    </div>
  </div>
</section>

<!-- MAIN CONTENT: BENEFITS + FORM -->
<section class="section" id="trial-signup">
  <div class="container">
    <div class="trial-layout">
      <!-- LEFT: What you get -->
      <div class="trial-benefits reveal">
        <span class="section-label">What's included</span>
        <h2 class="mb-24">Everything you need to <span class="text-gradient">dominate your market</span></h2>

        <div class="trial-benefit-list">
          <div class="trial-benefit">
            <div class="trial-benefit__icon">🌐</div>
            <div>
              <h4 class="trial-benefit__title">AI-Powered Smart Website</h4>
              <p class="trial-benefit__text">A conversion-optimised site with built-in chat, voice AI, and lead capture — not just a brochure page.</p>
            </div>
          </div>
          <div class="trial-benefit">
            <div class="trial-benefit__icon">🤖</div>
            <div>
              <h4 class="trial-benefit__title">AI Receptionist</h4>
              <p class="trial-benefit__text">Never miss a call again. Your AI answers the phone, qualifies leads, and books appointments 24/7.</p>
            </div>
          </div>
          <div class="trial-benefit">
            <div class="trial-benefit__icon">📲</div>
            <div>
              <h4 class="trial-benefit__title">Automated Follow-Ups</h4>
              <p class="trial-benefit__text">Instant SMS + email responses within 60 seconds. Convert leads while they're still hot.</p>
            </div>
          </div>
          <div class="trial-benefit">
            <div class="trial-benefit__icon">📊</div>
            <div>
              <h4 class="trial-benefit__title">CRM Dashboard</h4>
              <p class="trial-benefit__text">All your calls, texts, emails, and appointments in one place. Real-time analytics on everything.</p>
            </div>
          </div>
          <div class="trial-benefit">
            <div class="trial-benefit__icon">⭐</div>
            <div>
              <h4 class="trial-benefit__title">Review Automation</h4>
              <p class="trial-benefit__text">Automatically request Google reviews after every job. Watch your rating climb in weeks.</p>
            </div>
          </div>
        </div>

        <!-- SOCIAL PROOF -->
        <div class="trial-proof reveal">
          <div class="trial-proof__stat">
            <div class="trial-proof__number">20+</div>
            <div class="trial-proof__label">Businesses automated</div>
          </div>
          <div class="trial-proof__divider"></div>
          <div class="trial-proof__stat">
            <div class="trial-proof__number">47K+</div>
            <div class="trial-proof__label">Leads captured</div>
          </div>
          <div class="trial-proof__divider"></div>
          <div class="trial-proof__stat">
            <div class="trial-proof__number">98%</div>
            <div class="trial-proof__label">Client retention</div>
          </div>
        </div>

        <!-- TESTIMONIAL -->
        <div class="trial-quote reveal">
          <div class="trial-quote__stars">★★★★★</div>
          <p class="trial-quote__text">"We were losing about 15 leads a week to missed calls. Within the first month, we booked 47 new appointments without lifting a finger."</p>
          <div class="trial-quote__author">
            <div class="trial-quote__avatar">JM</div>
            <div>
              <div class="trial-quote__name">James Morrison</div>
              <div class="trial-quote__role">Owner, Morrison Plumbing</div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: FORM -->
      <div class="trial-form-wrapper reveal reveal--delay-2">
        <div class="trial-form-card" id="trial-form-card">
          <div class="trial-form-card__header">
            <div class="trial-form-card__badge">🎁 FREE 14-DAY TRIAL</div>
            <h3 class="trial-form-card__title">Start your free trial</h3>
            <p class="trial-form-card__subtitle">Fill in your details below and we'll have your AI Smart-Website live within 24 hours.</p>
          </div>
          <div class="trial-form-card__body">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/p8NpNcxTe1epLynDBwvx"
              style="width:100%;height:100%;border:none;border-radius:3px"
              id="inline-p8NpNcxTe1epLynDBwvx"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AISW Lead Form"
              data-height="1310"
              data-layout-iframe-id="inline-p8NpNcxTe1epLynDBwvx"
              data-form-id="p8NpNcxTe1epLynDBwvx"
              title="AISW Lead Form"
            ></iframe>
          </div>
          <div class="trial-form-card__footer">
            <div class="trial-form-card__guarantee">
              <span>🛡️</span>
              <span>14-day money-back guarantee · No contracts · Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Common questions</span>
      <h2 class="mb-16">Frequently asked <span class="text-gradient">questions</span></h2>
    </div>
    <div class="faq max-w-800 mx-auto">
      <div class="faq__item reveal">
        <button class="faq__question">
          <span>What happens after the 14-day trial?</span>
          <span class="faq__icon">+</span>
        </button>
        <div class="faq__answer">
          <p>If you love it (and you will), you can choose to continue on one of our affordable monthly plans starting at just £170.17/mo. If it's not for you, simply cancel — no awkward conversations, no hidden fees.</p>
        </div>
      </div>
      <div class="faq__item reveal reveal--delay-1">
        <button class="faq__question">
          <span>Do I need a credit card to start the trial?</span>
          <span class="faq__icon">+</span>
        </button>
        <div class="faq__answer">
          <p>No. Just fill out the form above and we'll set everything up for you. No payment details needed until you decide to continue.</p>
        </div>
      </div>
      <div class="faq__item reveal reveal--delay-2">
        <button class="faq__question">
          <span>How long does it take to get set up?</span>
          <span class="faq__icon">+</span>
        </button>
        <div class="faq__answer">
          <p>Most clients are live within 24 hours. We handle all the setup — AI configuration, CRM, website, integrations — so you don't have to touch a thing.</p>
        </div>
      </div>
      <div class="faq__item reveal reveal--delay-3">
        <button class="faq__question">
          <span>What if I already have a website?</span>
          <span class="faq__icon">+</span>
        </button>
        <div class="faq__answer">
          <p>No problem. We can integrate our AI systems (chat, voice, lead capture) into your existing website, or build you a brand new conversion-optimised Smart Website — whichever works best for you.</p>
        </div>
      </div>
      <div class="faq__item reveal">
        <button class="faq__question">
          <span>Is there really no catch?</span>
          <span class="faq__icon">+</span>
        </button>
        <div class="faq__answer">
          <p>Genuinely, no. We're confident enough in the results that we want you to experience it first-hand. If you don't see value in 14 days, walk away — no questions asked.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="section">
  <div class="container text-center">
    <div class="reveal">
      <span class="section-label">Don't wait</span>
      <h2 class="mb-16">Every day without this system <span class="text-gradient">costs you money</span></h2>
      <p class="max-w-640 mx-auto mb-48">While you're still answering calls manually and losing leads to slow follow-up, your competitors are automating. Get ahead — start your free trial now.</p>
      <a href="#trial-signup" class="btn btn--primary btn--large">
        🎁 Start Free Trial Now
        <span class="btn-arrow">→</span>
      </a>
      <p style="color: var(--text-muted); margin-top: 16px; font-size: 0.9rem;">No credit card required · Live in under 24 hours</p>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
