import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('agents')}

<section class="page-header">
  <div class="page-header__bg">
    <div class="page-header__gradient"></div>
  </div>
  <div class="container page-header__content">
    <h1>An AI receptionist that costs less than your phone bill</h1>
    <p>It answers every call, qualifies every lead, and books appointments — even at 3am on a Sunday.</p>
    <a href="/demo.html" class="demo-proof-link">
      <span class="demo-proof-link__icon">▶</span>
      Watch it handle a real call — quick demo
    </a>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">Right for you if...</span>
        <div class="feature-list" style="margin-top: 16px;">
          <div class="feature-item"><span class="feature-item__icon" style="font-size: 1.3rem;">✓</span> <span style="font-size: 1.05rem;">You're a business that relies on leads and appointments</span></div>
          <div class="feature-item"><span class="feature-item__icon" style="font-size: 1.3rem;">✓</span> <span style="font-size: 1.05rem;">You're tired of losing leads who don't reply</span></div>
          <div class="feature-item"><span class="feature-item__icon" style="font-size: 1.3rem;">✓</span> <span style="font-size: 1.05rem;">You want to grow without chasing people or hiring staff</span></div>
          <div class="feature-item"><span class="feature-item__icon" style="font-size: 1.3rem;">✓</span> <span style="font-size: 1.05rem;">You want something simple, proven, and ready to use</span></div>
        </div>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 400px; aspect-ratio: 1; background: linear-gradient(135deg, rgba(59,91,255,0.15), rgba(6,182,212,0.1)); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-subtle);">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; margin-bottom: 16px;">🤖</div>
            <p style="font-size: 1.2rem; font-weight: 600;">AI Receptionist</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Never miss a lead again</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Setup Steps -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Virtual Assistant</span>
      <h2 class="mb-16">Set Up in Minutes, <span class="text-gradient">Start Booking Calls Instantly</span></h2>
      <p class="max-w-640 mx-auto">See how our AI receptionists handle everything for you—fast, simple, and stress-free.</p>
    </div>
    <div class="steps">
      <div class="step reveal reveal--delay-1">
        <div class="step__number">01</div>
        <h3 class="step__title">Create Your Account</h3>
        <p class="step__text">Answer a few questions about your business and your typical customers.</p>
      </div>
      <div class="step reveal reveal--delay-2">
        <div class="step__number">02</div>
        <h3 class="step__title">We Build Your AI</h3>
        <p class="step__text">We'll automatically transform your details into customized prompts. You can update and edit anytime.</p>
      </div>
      <div class="step reveal reveal--delay-3">
        <div class="step__number">03</div>
        <h3 class="step__title">Train & Launch</h3>
        <p class="step__text">Upload training documents, call scripts, recordings. Enter any website URL to copy info straight to your agent's Knowledge Base.</p>
      </div>
    </div>
    <div class="text-center reveal mt-48">
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Hear It In Action — Free Demo <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem; text-align: center;">✓ No contracts · ✓ Set up in under 24hrs</p>
    </div>
  </div>
</section>

<!-- ROI Calculator -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Lyra Capital</span>
      <h2>ROI Calculator</h2>
    </div>
    <div class="reveal max-w-800 mx-auto">
      <div class="card" style="padding: 40px;">
        <div style="display: grid; gap: 24px; margin-bottom: 32px;">
          <div>
            <label style="display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Missed calls per month</label>
            <input type="range" id="roi-calls" min="10" max="200" value="50" style="width: 100%; accent-color: var(--accent-primary);" />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);"><span>10</span><span id="roi-calls-val">50</span><span>200</span></div>
          </div>
          <div>
            <label style="display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Average deal value (£)</label>
            <input type="range" id="roi-deal" min="50" max="2000" value="500" step="50" style="width: 100%; accent-color: var(--accent-primary);" />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);"><span>£50</span><span id="roi-deal-val">£500</span><span>£2,000</span></div>
          </div>
        </div>
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px;">
          <h3 class="text-gradient mb-24">Results:</h3>
          <div class="grid grid--3" style="text-align: center;">
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Revenue Left on Table</div>
              <div id="roi-result-revenue" style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: #ef4444;">£5,000</div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Monthly Fee</div>
              <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--accent-primary);">£211.40</div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">ROI</div>
              <div id="roi-result-roi" style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: #22c55e;">2,265%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Smart Website Bots -->
<section class="section section--dark">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">Smart Website Bots</span>
        <h2 class="mb-16">See how our A.I. Smart Website handles customer queries</h2>
        <p class="mb-16">Create an account and answer a few questions about your business and your typical customers.</p>
        <p class="mb-16">We'll tackle the hard part by automatically transforming the details you provide into customized prompts about your business.</p>
        <p>Then we look at how your business runs day-to-day, find the tasks that are costing you the most time or money, and automate those first—so you get the biggest return as quickly as possible.</p>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 400px; aspect-ratio: 1; background: linear-gradient(135deg, rgba(59,91,255,0.12), rgba(6,182,212,0.08)); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-subtle);">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; margin-bottom: 16px;">🌐</div>
            <p style="font-size: 1.2rem; font-weight: 600;">Smart Website Bot</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Always online. Always helpful.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Chatbot -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">AI Chat & Voice</span>
      <h2 class="mb-16">Your Business, <span class="text-gradient">Always Available</span></h2>
      <p class="max-w-640 mx-auto">Two AI agents that work 24/7 so you never miss a customer — whether they prefer typing or talking.</p>
    </div>

    <div class="two-col" style="align-items: center; gap: 64px;">
      <div class="reveal">
        <img src="/images/chatbot-widget.png" alt="AI Chatbot Widget" style="width: 100%; max-width: 460px; border-radius: 16px; display: block; margin: 0 auto; mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black 30%, transparent 80%); -webkit-mask-image: radial-gradient(ellipse 70% 65% at 50% 45%, black 30%, transparent 80%);" />
      </div>
      <div class="reveal reveal--delay-2">
        <span class="section-label">AI Chatbot</span>
        <h3 class="mb-16">Instant answers. <span class="text-gradient">Zero wait times.</span></h3>
        <p class="mb-24" style="color: var(--text-secondary); line-height: 1.6;">A smart chatbot that lives on your website 24/7. It answers questions, qualifies leads, and books appointments — all while sounding exactly like your brand.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Answers FAQs instantly so you do not have to</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Captures lead info before they bounce</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Books appointments directly into your calendar</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Trained on your business — not generic templates</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Talking Website -->
<section class="section section--dark">
  <div class="container">
    <div class="two-col" style="align-items: center; gap: 64px;">
      <div class="reveal">
        <span class="section-label">Talking Website</span>
        <h3 class="mb-16">Your website, but it <span class="text-gradient">talks back.</span></h3>
        <p class="mb-24" style="color: var(--text-secondary); line-height: 1.6;">A voice-enabled AI agent embedded on your website. Visitors click a button and have a real conversation — no typing, no waiting. It answers questions, qualifies leads, and books appointments through natural speech.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Voice conversations directly on your website</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Natural AI voice that represents your brand</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Books, reschedules, and confirms appointments</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Costs less than a part-time receptionist</div>
        </div>
        <a href="/strategy-meeting.html" class="btn btn--primary mt-32">See Both Agents Live <span class="btn-arrow">→</span></a>
        <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">✓ No contracts · ✓ Set up in under 24hrs</p>
      </div>
      <div class="reveal reveal--delay-2">
        <img src="/images/talking-website.png" alt="Talking Website Voice Widget" style="width: 100%; max-width: 520px; border-radius: 20px; display: block; margin: 0 auto; mask-image: radial-gradient(ellipse 65% 75% at 50% 48%, black 40%, transparent 85%); -webkit-mask-image: radial-gradient(ellipse 65% 75% at 50% 48%, black 40%, transparent 85%);" />
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div class="faq reveal">
      <div class="faq__item">
        <button class="faq__question">How long does it take to see results? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Some clients see new leads within days, but it depends on your market and speed of implementation.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">Can Lyra make outbound calls? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>No. Lyra is intentionally focused on providing the best solution for inbound calls only. This ensures reliability and a world-class customer experience. But we are at work on a cold calling A.I.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">What kind of businesses does this work for? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>It's designed for local businesses, service providers, coaches, consultants, and more — anyone who needs more leads and booked appointments.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">Does Lyra require technical skills to set up? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Not at all. Setup is designed for non-technical users. Just answer a few questions about your business, and Lyra will generate a custom AI employee tailored to your needs. Testing takes from 45 minutes to 24 hours depending on your package, and you can roleplay via chat or phone before going live.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">What tasks can be automated with AI? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>Almost any repetitive task can be automated: email follow-ups, data entry, report generation, lead qualification, social media posting, invoice processing, CRM updates, and much more. We start with an audit to identify your highest-impact automation opportunities and prioritise by ROI.</p></div>
      </div>
      <div class="faq__item">
        <button class="faq__question">Do I need technical skills to use the automations? <span class="faq__icon">+</span></button>
        <div class="faq__answer"><p>No. We build automations that run in the background without any technical knowledge required. We also provide training and documentation so your team feels confident managing day-to-day operations.</p></div>
      </div>
    </div>
    <div class="text-center reveal mt-48">
      <h3 class="mb-16">Ready to stop missing calls?</h3>
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Book Your Free Demo <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">🛡️ 14-day money-back guarantee. Cancel anytime.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

// ROI Calculator for agents page
const roiCalls = document.getElementById('roi-calls');
const roiDeal = document.getElementById('roi-deal');

function updateROI() {
  const calls = parseInt(roiCalls.value);
  const deal = parseInt(roiDeal.value);
  const conversionRate = 0.2;
  const revenue = Math.round(calls * conversionRate * deal);
  const roi = Math.round((revenue / 211.40) * 100);

  document.getElementById('roi-calls-val').textContent = calls;
  document.getElementById('roi-deal-val').textContent = '£' + deal;
  document.getElementById('roi-result-revenue').textContent = '£' + revenue.toLocaleString();
  document.getElementById('roi-result-roi').textContent = roi.toLocaleString() + '%';
}

roiCalls?.addEventListener('input', updateROI);
roiDeal?.addEventListener('input', updateROI);
updateROI();

initAll();
