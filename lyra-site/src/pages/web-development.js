import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

// Portfolio items for the slider
const portfolioRow1 = [
  { img: '/images/portfolio-donut.webp', label: 'Donut Delight', link: '#' },
  { img: '/images/portfolio-landscaping.webp', label: 'Landscaping – A Yard You\'ll Love', link: '#' },
  { img: '/images/portfolio-nails.webp', label: 'Alisa Nails', link: '#' },
  { img: '/images/portfolio-junk.webp', label: 'Junk Removal Pro', link: '#' },
  { img: '/images/portfolio-barber.webp', label: 'Sharpcuts Barber', link: '#' },
];

const portfolioRow2 = [
  { img: '/images/portfolio-travel.webp', label: 'Sun, Sand & Sea Travel', link: '#' },
  { img: '/images/portfolio-car.webp', label: 'Dr. Charles Auto', link: '#' },
  { img: '/images/portfolio-8.webp', label: 'Premium Business Site', link: '#' },
  { img: '/images/portfolio-9.webp', label: 'Professional Services', link: '#' },
  { img: '/images/portfolio-10.webp', label: 'Digital Commerce', link: '#' },
];

function renderSlider(items, reverse = false) {
  const duplicated = [...items, ...items]; // Duplicate for infinite loop
  return `
  <div class="portfolio-slider ${reverse ? 'portfolio-slider--reverse' : ''}">
    <div class="portfolio-slider__track">
      ${duplicated.map(item => `
        <div class="portfolio-slider__item">
          <img src="${item.img}" alt="${item.label}" loading="lazy" />
          <div class="portfolio-slider__item__label">${item.label}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

document.getElementById('app').innerHTML = `
${getNav('web-development')}

<!-- Hero -->
<section class="hero" style="min-height: auto; padding: 140px 0 80px;">
  <div class="hero__bg">
    <div class="hero__gradient hero__gradient--1"></div>
    <div class="hero__gradient hero__gradient--2"></div>
  </div>
  <div class="container hero__content" style="text-align: center;">
    <div class="hero__urgency-badge reveal">🔥 Only 12 free builds left this month</div>
    <h1 class="hero__title" style="max-width: 800px; margin: 0 auto 24px;">Yes, I'll Build Your Local Business Website for <span class="text-gradient">FREE</span></h1>
    <p class="hero__text mx-auto" style="max-width: 600px; margin-bottom: 36px;">Get a professional, AI-powered website designed and launched in under 24 hours. Zero cost for the build.</p>
    <a href="#signup" class="btn btn--primary btn--large">Claim My Spot Now <span class="btn-arrow">→</span></a>
    <p class="hero__trust-line" style="margin-top: 16px;">✓ No contracts · ✓ Cancel anytime · ✓ Live in 24hrs · ✓ 14-day money-back</p>
  </div>
</section>

<!-- Portfolio Slider — Row 1 -->
<section class="section" style="padding-top: 40px; padding-bottom: 0;">
  <div class="container--wide" style="max-width: 100%; padding: 0;">
    <div class="text-center reveal mb-32" style="padding: 0 var(--container-pad);">
      <span class="section-label">Our Portfolio</span>
      <h2 class="mb-8">You can skip the £2,000 design fee</h2>
      <p class="max-w-640 mx-auto">Get a premium, high-converting website today. You only cover the hosting (£88.44/mo)</p>
    </div>
    ${renderSlider(portfolioRow1)}
  </div>
</section>

<!-- Portfolio Slider — Row 2 (Reverse) -->
<section class="section" style="padding-top: 24px;">
  <div class="container--wide" style="max-width: 100%; padding: 0;">
    ${renderSlider(portfolioRow2, true)}
  </div>
</section>

<!-- The 2-Step Process -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Dead Simple</span>
      <h2 class="mb-16">The 2-Step Process</h2>
      <p class="max-w-640 mx-auto">No complicated onboarding. No back-and-forth emails. Just two steps between you and a live website.</p>
    </div>

    <div class="process-2 reveal">
      <!-- Step 1 -->
      <div class="process-2__card">
        <span class="process-2__float-icon process-2__float-icon--1">📋</span>
        <span class="process-2__float-icon process-2__float-icon--2">✍️</span>
        <div class="process-2__step-badge">1</div>
        <h3 class="process-2__title">Fill Onboarding Form</h3>
        <div class="process-2__time">⏱️ 15 mins</div>
        <p class="process-2__desc">Give us your brand details, logo, and basic info. It takes about 15 minutes to complete — and we handle everything from there.</p>
      </div>

      <!-- Animated Connector -->
      <div class="process-2__connector">
        <div class="process-2__connector-line" id="processLine">
          <div class="process-2__connector-particle"></div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="process-2__card">
        <span class="process-2__float-icon process-2__float-icon--3">🚀</span>
        <span class="process-2__float-icon process-2__float-icon--4">🌐</span>
        <div class="process-2__step-badge">2</div>
        <h3 class="process-2__title">We Build Your Site</h3>
        <div class="process-2__time">⚡ Max 24 hrs</div>
        <p class="process-2__desc">Our team designs and launches your site in under 24 hours. You wake up to a live, professional website ready to convert visitors.</p>
      </div>
    </div>

    <div class="text-center reveal mt-48">
      <a href="#signup" class="btn btn--primary btn--large">Start My Free Website <span class="btn-arrow">→</span></a>
    </div>
  </div>
</section>

<!-- The Catch — with Niko portrait -->
<section class="section section--dark">
  <div class="container">
    <div class="two-col">
      <div class="reveal reveal--delay-1" style="display: flex; justify-content: center;">
        <div class="founder-portrait">
          <img src="/images/niko-real.webp" alt="Nikolai Blair — Founder of Lyra Capital" />
        </div>
      </div>
      <div class="reveal">
        <h2 class="mb-24">"Alright, what's the <span class="text-gradient">catch?</span>"</h2>
        <p class="mb-16">Look, I know what you're thinking: "What's the catch?"</p>
        <p class="mb-16">In a world of hidden fees and bait-and-switch offers, it's rare to find someone giving away £2,000 worth of work for nothing. But my reason is simple: <strong style="color: var(--text-primary);">I need 30 massive success stories in 30 days.</strong></p>
        <p class="mb-16">By handling the build for you, I get to showcase what I can do, and you get a world-class website that actually makes money.</p>
        <p class="mb-16"><strong style="color: var(--text-primary);">The Deal:</strong> You cover the £88.44/mo tech and hosting fee. That's it. You can cancel anytime — no contracts, no handcuffs.</p>
        <p class="mb-16">If you love the results and want to upgrade to my advanced automation, AI follow-ups, or CRM features later? Awesome, we can talk. If not? You still keep the beautiful website. No pressure.</p>
        <p style="color: var(--text-primary); font-style: italic;">— Niko</p>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 8px;">Ps. it'll be live in under 24 hrs :)</p>
      </div>
    </div>
  </div>
</section>

<!-- What You Get -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">The Package</span>
      <h2>What's Included</h2>
    </div>
    <div class="two-col" style="gap: 48px;">
      <div class="reveal">
        <div class="card" style="text-align: center; border-color: var(--accent-primary); padding: 48px 32px;">
          <h3 class="mb-8" style="font-size: 3rem;">£0</h3>
          <p style="color: var(--accent-primary); font-weight: 600; margin-bottom: 24px; font-size: 1.1rem;">+£88.44/mo Hosting and A.I. Fee (voice A.I.)</p>
          <div class="feature-list" style="text-align: left;">
            <div class="feature-item"><span class="feature-item__icon">✓</span> Up to 5 Pages</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Contact Form to Email Notification Setup</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Calendar Integration</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Cancel Anytime Policy</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Done in Max 24hrs</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Suitable for any industry</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Voice A.I. (talking website)</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Conversation A.I. (chatbot)</div>
          </div>
          <a href="#signup" class="btn btn--primary btn--large btn--full mt-32">Claim My Free Website <span class="btn-arrow">→</span></a>
        </div>
      </div>
      <div class="reveal reveal--delay-2">
        <div class="card" style="text-align: center; padding: 48px 32px;">
          <h3 class="mb-8" style="font-size: 2rem;">Without voice A.I.?</h3>
          <p style="color: var(--text-muted); font-weight: 500; margin-bottom: 24px;">Still totally free to build</p>
          <div class="feature-list" style="text-align: left;">
            <div class="feature-item"><span class="feature-item__icon">✓</span> Up to 5 Pages</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Contact Form</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Calendar Integration</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Cancel Anytime Policy</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Done in Max 24hrs</div>
            <div class="feature-item"><span class="feature-item__icon">✓</span> Suitable for any industry</div>
          </div>
          <p style="font-size: 1.5rem; font-weight: 800; color: var(--accent-primary); margin-top: 24px;">£26/mo</p>
          <a href="#signup" class="btn btn--outline btn--large btn--full mt-32">Get Started <span class="btn-arrow">→</span></a>
        </div>
      </div>
    </div>
    <div class="text-center reveal mt-32">
      <div class="card" style="max-width: 600px; margin: 0 auto; padding: 24px 32px; text-align: center;">
        <div style="color: #fbbf24; letter-spacing: 2px; margin-bottom: 8px;">★★★★★</div>
        <p style="font-style: italic; color: var(--text-secondary); margin-bottom: 12px;">"I expected a basic template. What I got was a £3,000-quality site with a chatbot that actually books appointments. All for £88/mo. Unreal."</p>
        <p style="font-weight: 600; font-size: 0.85rem;">— Marcus T., Electrical Contractor</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">FAQ</span>
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq reveal">
      <div class="faq__item">
        <button class="faq__question">Is it really free? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Yes, the design and development work is 100% free. You are only responsible for the £88.44 monthly hosting and tech fee, which is standard for any professional business to stay online.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">What happens if I want to cancel? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>There are zero contracts and zero "exit fees." If you feel like the site isn't bringing you value, you can cancel your hosting at any time with one click. I want to keep you as a client because I provide results, not because I trapped you in a contract.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">Why should I trust you? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Great question. You shouldn't trust anyone blindly online. But I'm an open book because I'm building a long-term brand, not a quick buck.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">Do I need my own domain? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Yes, you'll need a domain (like yourbusiness.com). If you already have one, we'll help you connect it. If you don't, we can show you how to grab one for about £3 - £12 a year.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">What's the real goal here? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>I'm launching a new premium agency offer next year. To make that launch successful, I need a wall of video testimonials and case studies. By building these sites for free now, I'm "buying" the social proof I need for my future launch. It's a win-win: you get a £2k site, I get a review.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">What if I want a website without A.I.? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>That's fine! I'll still build your website completely for free and only charge a £26/m hosting and maintenance fee.</p></div>
      </div>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();

// Animate the process connector line when it scrolls into view
const processLine = document.getElementById('processLine');
if (processLine) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        processLine.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(processLine.closest('.process-2'));
}
