import '../styles.css';
import { getNav, getFooter, getPageHeader, getFormEmbed } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('lead-management')}

<!-- Hero -->
<section class="wl-hero wl-hero--compact">
  <div class="wl-hero__bg">
    <div class="wl-hero__ring wl-hero__ring--outer">
      <img src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048" alt="" />
    </div>
    <div class="wl-hero__ring wl-hero__ring--mid">
      <img src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024" alt="" />
    </div>
    <div class="wl-hero__ring wl-hero__ring--inner">
      <img src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png" alt="" />
    </div>
  </div>
  <div class="wl-hero__overlay"></div>
  <div class="wl-hero__content">
    <h1 class="wl-hero__title">Never lose a lead again.</h1>
    <p class="wl-hero__subtitle">Every missed call, slow reply, and forgotten follow-up is money walking out the door. We fix that.</p>
    <a href="/strategy-meeting.html" class="btn btn--primary btn--large mt-24">See It Working — Free Demo <span class="btn-arrow">→</span></a>
    <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 12px;">✓ No contracts · ✓ Live in under 24hrs</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <h2 class="mb-16">Your leads aren't bad. <span class="text-gradient">Your follow-up is.</span></h2>
        <p class="mb-24">Studies show 78% of customers buy from whoever responds first. If you're taking hours to reply, your competitors are closing YOUR leads. Our system responds in under 60 seconds — via text, email, and voicemail — automatically.</p>
        <div class="feature-list mb-24">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Instant response within 60 seconds</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Multi-channel: SMS, email, voicemail, Messenger</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Automated nurture sequences until they book</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> One dashboard for every conversation</div>
        </div>
        <a href="/strategy-meeting.html" class="btn btn--primary btn--large">See It Working — Free Demo <span class="btn-arrow">→</span></a>
        <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">✓ No contracts · ✓ Live in under 24hrs</p>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 400px; aspect-ratio: 1; background: linear-gradient(135deg, rgba(59,91,255,0.15), rgba(139,92,246,0.1)); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-subtle);">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; margin-bottom: 16px;">📋</div>
            <p style="font-size: 1.2rem; font-weight: 600;">Lead Automation</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Convert more. Lose less.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Before/After -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">The difference</span>
      <h2 class="mb-16">Without Lyra <span class="text-gradient">vs. with Lyra</span></h2>
    </div>
    <div class="grid grid--2 mb-64">
      <div class="card reveal reveal--delay-1" style="border-color: rgba(239,68,68,0.3);">
        <h4 class="card__title" style="color: #f87171;">❌ Without Lyra</h4>
        <div class="feature-list" style="margin-top: 16px;">
          <div class="feature-item" style="color: var(--text-muted);"><span class="feature-item__icon" style="color: #f87171;">✗</span> Leads wait hours for a response</div>
          <div class="feature-item" style="color: var(--text-muted);"><span class="feature-item__icon" style="color: #f87171;">✗</span> Follow-ups are manual and inconsistent</div>
          <div class="feature-item" style="color: var(--text-muted);"><span class="feature-item__icon" style="color: #f87171;">✗</span> Messages scattered across 5 different apps</div>
          <div class="feature-item" style="color: var(--text-muted);"><span class="feature-item__icon" style="color: #f87171;">✗</span> No idea which leads are hot</div>
          <div class="feature-item" style="color: var(--text-muted);"><span class="feature-item__icon" style="color: #f87171;">✗</span> Missed calls go to voicemail (and nowhere else)</div>
        </div>
      </div>
      <div class="card reveal reveal--delay-2" style="border-color: rgba(34,197,94,0.3);">
        <h4 class="card__title" style="color: #22c55e;">✅ With Lyra</h4>
        <div class="feature-list" style="margin-top: 16px;">
          <div class="feature-item"><span class="feature-item__icon" style="color: #22c55e;">✓</span> Auto-response in under 60 seconds</div>
          <div class="feature-item"><span class="feature-item__icon" style="color: #22c55e;">✓</span> AI follows up until they book or unsubscribe</div>
          <div class="feature-item"><span class="feature-item__icon" style="color: #22c55e;">✓</span> Every message in one unified inbox</div>
          <div class="feature-item"><span class="feature-item__icon" style="color: #22c55e;">✓</span> Lead scoring tells you who to call first</div>
          <div class="feature-item"><span class="feature-item__icon" style="color: #22c55e;">✓</span> AI answers calls and books appointments 24/7</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Automation Channels -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Multi-channel outreach</span>
      <h2 class="mb-16">We reach leads <span class="text-gradient">wherever they are</span></h2>
      <p class="max-w-640 mx-auto">Your leads don't check just one channel. Neither do we. Our system fires across SMS, email, voicemail, and Messenger simultaneously.</p>
    </div>
    <div class="grid grid--2">
      <div class="card reveal reveal--delay-1">
        <div class="card__icon">📱</div>
        <h4 class="card__title">2-Way SMS Messaging</h4>
        <p class="card__text">Real conversations, not blasts. Leads can reply directly and your AI keeps the thread going until they book.</p>
      </div>
      <div class="card reveal reveal--delay-2">
        <div class="card__icon">📧</div>
        <h4 class="card__title">Email Drip Campaigns</h4>
        <p class="card__text">Automated sequences that nurture cold leads over days and weeks. Personalised, timed, relentless.</p>
      </div>
      <div class="card reveal reveal--delay-3">
        <div class="card__icon">📞</div>
        <h4 class="card__title">Ringless Voicemail Drops</h4>
        <p class="card__text">Leave a personal voicemail without the phone ringing. Non-intrusive. High open rates. Zero effort from you.</p>
      </div>
      <div class="card reveal reveal--delay-4">
        <div class="card__icon">💬</div>
        <h4 class="card__title">Facebook Messenger</h4>
        <p class="card__text">Reach leads on the platform they use most. AI handles the conversation and pushes them to book.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-32">
      <h2>Stop losing leads to slow follow-up.</h2>
      <p class="max-w-640 mx-auto mt-16" style="color: var(--text-muted);">Book a free 15-minute call. We'll show you exactly how many leads you're losing and how we'd fix it — for your specific business.</p>
    </div>
    <div class="reveal">
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Book Your Free Strategy Call <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">🛡️ 14-day money-back guarantee. No contracts.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
