import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('reputation-management')}

${getPageHeader('Your Google reviews are your best salesperson', '90% of customers read reviews before choosing a business. We make sure yours are 5 stars.')}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <h2 class="mb-16">From 3.2 stars to 4.8-5 <span class="text-gradient">in 8 weeks.</span></h2>
        <p class="mb-16">Here's the problem: your happy customers don't leave reviews. Your angry ones do. That's why your rating doesn't reflect how good your service actually is.</p>
        <p class="mb-16">Our system fixes this automatically. After every completed job, we send a friendly SMS asking for feedback. Happy? They're guided straight to Google. Unhappy? The feedback comes to you privately — so you can fix it before it goes public.</p>
        <div class="feature-list mb-24">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Automated review requests after every service</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Happy → Google review. Unhappy → private feedback</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Works via SMS and email simultaneously</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Dashboard to monitor all reviews in one place</div>
        </div>
        <a href="/strategy-meeting.html" class="btn btn--primary btn--large">See It Working — Free Demo <span class="btn-arrow">→</span></a>
        <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">✓ No contracts · ✓ Set up in under 24hrs</p>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
        <img src="/images/reputation-analytics.png" alt="Reputation Management Analytics" style="width: 100%; max-width: 420px; border-radius: 0; box-shadow: none; -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); -webkit-mask-composite: destination-in; mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); mask-composite: intersect;" />
      </div>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">How it works</span>
      <h2 class="mb-16">3 steps to a <span class="text-gradient">5-star reputation</span></h2>
    </div>
    <div class="steps">
      <div class="step reveal reveal--delay-1">
        <div class="step__number">01</div>
        <h3 class="step__title">Complete a job</h3>
        <p class="step__text">When a service is marked complete in your CRM, the review system triggers automatically.</p>
      </div>
      <div class="step reveal reveal--delay-2">
        <div class="step__number">02</div>
        <h3 class="step__title">Customer gets a text</h3>
        <p class="step__text">"How was your experience with [Your Business]?" One tap takes them to your Google review page.</p>
      </div>
      <div class="step reveal reveal--delay-3">
        <div class="step__number">03</div>
        <h3 class="step__title">Reviews pile up</h3>
        <p class="step__text">Within weeks, your Google profile fills with genuine 5-star reviews. More reviews = more phone calls.</p>
      </div>
    </div>
  </div>
</section>

<!-- Social Proof -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">The numbers</span>
      <h2 class="mb-16">Why reviews <span class="text-gradient">matter more than ads</span></h2>
    </div>
    <div class="grid grid--3">
      <div class="card reveal reveal--delay-1" style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-primary); font-family: var(--font-heading); margin-bottom: 8px;">90%</div>
        <p class="card__text">of consumers read online reviews before visiting a business</p>
      </div>
      <div class="card reveal reveal--delay-2" style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-primary); font-family: var(--font-heading); margin-bottom: 8px;">4.2★</div>
        <p class="card__text">is the minimum rating consumers trust — below that, they skip you entirely</p>
      </div>
      <div class="card reveal reveal--delay-3" style="text-align: center;">
        <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-primary); font-family: var(--font-heading); margin-bottom: 8px;">270%</div>
        <p class="card__text">more likely to purchase when a business has positive reviews vs. none</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-32">
      <h2>Your competitors have more reviews than you.</h2>
      <p class="max-w-640 mx-auto mt-16" style="color: var(--text-muted);">Every day without an automated review system is another day they outrank you on Google. Let's fix that.</p>
    </div>
    <div class="reveal">
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Book Your Free Demo <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">🛡️ 14-day money-back guarantee. No contracts.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
