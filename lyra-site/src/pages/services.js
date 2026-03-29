import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('services')}

<!-- SERVICES HERO -->
<section class="svc-hero">
  <div class="svc-hero__bg" aria-hidden="true">
    <div class="svc-hero__glow svc-hero__glow--1"></div>
    <div class="svc-hero__glow svc-hero__glow--2"></div>
  </div>

  <div class="container svc-hero__content">
    <!-- Announcement Badge -->
    <aside class="svc-hero__badge reveal">
      <span class="svc-hero__badge-dot"></span>
      <span class="svc-hero__badge-text">AI-powered automation, live in 24 hours</span>
      <a href="/free-trial.html" class="svc-hero__badge-link">
        Try free for 14 days
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
    </aside>

    <!-- Headline -->
    <h1 class="svc-hero__title reveal">
      What we build for you —<br>
      <span class="svc-hero__title-gradient">the systems that grow your business</span>
    </h1>

    <!-- Subtitle -->
    <p class="svc-hero__subtitle reveal">
      Every service is designed to do one thing: put more money in your pocket.<br>
      AI phone agents, automated follow-ups, smart websites, and more.
    </p>

    <!-- CTA -->
    <div class="svc-hero__actions reveal">
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large svc-hero__cta">
        Get started
      </a>
    </div>

    <!-- Dashboard Preview -->
    <div class="svc-hero__preview reveal">
      <div class="svc-hero__preview-glow" aria-hidden="true"></div>
      <div class="svc-hero__preview-frame">
        <img src="/images/lyra-logo.png" alt="Lyra Capital" class="svc-hero__preview-logo" />
        <img src="/images/analytics-dashboard.png" alt="Lyra Capital AI-powered dashboard — analytics, leads, and automations in one place" class="svc-hero__preview-img" loading="eager" />
      </div>
    </div>
  </div>
</section>

<!-- Service Cards Grid -->
<section class="section">
  <div class="container">
    <div class="grid grid--3 mb-64">
      <a href="/reputation-management.html" class="card reveal reveal--delay-1" style="text-decoration: none;">
        <div class="card__icon">⭐</div>
        <h4 class="card__title">Social Media & Reputation Management</h4>
        <p class="card__text">Boost visibility and Customer Trust by gaining good Google reviews.</p>
        <span style="color: var(--accent-primary); font-size: 0.9rem; font-weight: 500; margin-top: 16px; display: inline-block;">Learn More →</span>
      </a>
      <a href="/lead-management.html" class="card reveal reveal--delay-2" style="text-decoration: none;">
        <div class="card__icon">📋</div>
        <h4 class="card__title">Lead Management</h4>
        <p class="card__text">Duplicate cleanup and lifecycle normalisation. Fuzzy matching across email variations with preserved history.</p>
        <span style="color: var(--accent-primary); font-size: 0.9rem; font-weight: 500; margin-top: 16px; display: inline-block;">Learn More →</span>
      </a>
      <a href="/web-development.html" class="card reveal reveal--delay-3" style="text-decoration: none;">
        <div class="card__icon">🌐</div>
        <h4 class="card__title">Smart Websites</h4>
        <p class="card__text">AI-personalised email and SMS follow-ups triggered by CRM activity.</p>
        <span style="color: var(--accent-primary); font-size: 0.9rem; font-weight: 500; margin-top: 16px; display: inline-block;">Learn More →</span>
      </a>
      <a href="/agents.html" class="card reveal reveal--delay-1" style="text-decoration: none;">
        <div class="card__icon">🤖</div>
        <h4 class="card__title">AI Agents</h4>
        <p class="card__text">Save time by letting your agent handle repetitive tasks.</p>
        <span style="color: var(--accent-primary); font-size: 0.9rem; font-weight: 500; margin-top: 16px; display: inline-block;">Learn More →</span>
      </a>
      <a href="/ai-ads.html" class="card reveal reveal--delay-2" style="text-decoration: none;">
        <div class="card__icon">📢</div>
        <h4 class="card__title">AI Ads</h4>
        <p class="card__text">Reach more customers with AI-powered advertising.</p>
        <span style="color: var(--accent-primary); font-size: 0.9rem; font-weight: 500; margin-top: 16px; display: inline-block;">Learn More →</span>
      </a>
    </div>
    <div class="text-center reveal mt-32 mb-16">
      <p style="color: var(--text-muted); font-size: 0.95rem;">Not sure which service you need? We'll tell you on a free 15-min call.</p>
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large mt-16">Book Free Strategy Call <span class="btn-arrow">→</span></a>
    </div>
  </div>
</section>

<!-- AI Simulator Demo -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">See It In Action</span>
      <h2 class="mb-16">Watch Our AI <span class="text-gradient">Close Deals For You</span></h2>
      <p class="max-w-640 mx-auto">Real conversations. Zero human effort. Pick a scenario and watch the system work.</p>
    </div>

    <div class="simulator-container reveal">
      <div class="sim-tab-container">
        <button class="sim-tab-btn active" data-sim="booking">Booking Bot</button>
        <button class="sim-tab-btn" data-sim="reviews">Review Engine</button>
        <button class="sim-tab-btn" data-sim="reactivation">Client Reactivation</button>
      </div>

      <div class="sim-phone">
        <div class="sim-phone__notch"></div>
        <div class="sim-phone__screen">
          <div class="sim-chat-header">
            <div class="sim-chat-avatar sim-chat-avatar--booking" id="simAvatar">BA</div>
            <div>
              <div class="sim-chat-name" id="simName">Booking Assistant</div>
              <div class="sim-chat-status">Active Now</div>
            </div>
          </div>
          <div class="sim-chat-messages" id="simMessages"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ROI Calculator -->
<section class="section section--dark">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">ROI Calculator</span>
      <h2 class="mb-16">How Much Could Automation <span class="text-gradient">Save Your Business?</span></h2>
      <p class="max-w-640 mx-auto">Answer a few simple questions to see your real-world savings.</p>
    </div>
    <div class="reveal max-w-800 mx-auto">
      <div class="card" style="padding: 40px;">
        <div style="display: grid; gap: 24px; margin-bottom: 32px;">
          <div>
            <label style="display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Hours spent on repetitive tasks per week</label>
            <input type="range" id="calc-hours" min="5" max="60" value="20" style="width: 100%; accent-color: var(--accent-primary);" />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);"><span>5 hrs</span><span id="calc-hours-val">20 hrs</span><span>60 hrs</span></div>
          </div>
          <div>
            <label style="display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Average hourly cost of employee time (£)</label>
            <input type="range" id="calc-rate" min="10" max="100" value="25" style="width: 100%; accent-color: var(--accent-primary);" />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);"><span>£10</span><span id="calc-rate-val">£25</span><span>£100</span></div>
          </div>
          <div>
            <label style="display: block; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">Leads missed per month due to slow follow-up</label>
            <input type="range" id="calc-leads" min="5" max="100" value="30" style="width: 100%; accent-color: var(--accent-primary);" />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);"><span>5</span><span id="calc-leads-val">30</span><span>100</span></div>
          </div>
        </div>
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 24px;">
          <h3 class="text-gradient mb-24">Your AI Automation Impact</h3>
          <div class="grid grid--3" style="text-align: center;">
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">✅ Est. Hours Saved/Month</div>
              <div id="calc-result-hours" style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--accent-primary);">60 hrs</div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">✅ Est. Money Saved/Month</div>
              <div id="calc-result-money" style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--accent-primary);">£1,500</div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">✅ Potential Extra Revenue</div>
              <div id="calc-result-revenue" style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--accent-primary);">£6,000</div>
            </div>
          </div>
        </div>
        <div class="text-center mt-32">
          <a href="/strategy-meeting.html" class="btn btn--primary btn--large">See What We'd Save You — Free Call <span class="btn-arrow">→</span></a>
          <p style="color: var(--text-muted); margin-top: 8px; font-size: 0.85rem;">Takes 15 minutes. No obligation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Customers In One Place -->
<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">Unified Inbox</span>
        <h2 class="mb-16">Customers In One Place</h2>
        <p class="mb-24">Track every conversation in one place—SMS, email, phone calls, WhatsApp, and Facebook messages, with built-in two-way texting.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> All-in-1 Conversation Flow</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Centralized View - Email, SMS, Messenger, Calls</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> 1-Click Appointments or Add to Campaigns</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Automate responses and follow-ups</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Connect with leads on the platform they use most</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Build trust with fast, personal communication</div>
        </div>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <img src="/images/source-image-1.png" alt="Lyra Capital CRM — Unified Inbox" style="width: 100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />
      </div>
    </div>
  </div>
</section>

<!-- Analytics -->
<section class="section section--dark">
  <div class="container">
    <div class="two-col" style="direction: rtl;">
      <div class="reveal" style="direction: ltr;">
        <span class="section-label">Analytics</span>
        <h2 class="mb-16">Complete Advanced Analytics Dashboard</h2>
        <p class="mb-24">The ability to track the ROI and Leads in a pipeline has become even easier through our advanced Dashboard. Track stats such as appointment rates, campaign effectiveness, and even response rates!</p>
      </div>
      <div class="reveal reveal--delay-2" style="direction: ltr; display: flex; justify-content: center;">
        <img src="/images/analytics-dashboard.png" alt="Lyra Capital Analytics Dashboard" style="width: 100%; max-width: 480px; border-radius: 0; box-shadow: none; -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); -webkit-mask-composite: destination-in; mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%); mask-composite: intersect;" />
      </div>
    </div>
  </div>
</section>

<!-- Close More Appointments -->
<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">Calendar</span>
        <h2 class="mb-16">Close More Appointments</h2>
        <p class="mb-24">Book leads directly to your online calendar and provide a seamless booking experience within your automations.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Unlimited Calendars</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> 1 Click Bookings</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Integrate Calendar (Google, Outlook)</div>
        </div>
      </div>
      <div class="reveal reveal--delay-2">
        <span class="section-label">Email Marketing</span>
        <h2 class="mb-16">Unlock the Power of Email Automation</h2>
        <p class="mb-24">Email marketing doesn't have to be complicated. With done-for-you sequences and automation, you can nurture prospects automatically.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> Send personalized campaigns at scale</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Turn cold leads into loyal customers</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Nurture prospects with done-for-you sequences</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AI Systems -->
<section class="section section--blue">
  <div class="container">
    <div class="text-center reveal mb-48">
      <h2 class="mb-16">AI Systems That Turn Leads Into Customers</h2>
      <p class="max-w-640 mx-auto">Six integrated systems working 24/7 to capture, nurture, and convert every opportunity — so you never lose a lead again.</p>
    </div>
    <div class="grid grid--2">
      <div class="blue-feature reveal reveal--delay-1">
        <div class="blue-feature__icon">📞</div>
        <h4 class="blue-feature__title">AI Receptionist</h4>
        <p class="blue-feature__text">Instantly answers calls, qualifies leads, and books appointments automatically.</p>
      </div>
      <div class="blue-feature reveal reveal--delay-2">
        <div class="blue-feature__icon">📋</div>
        <h4 class="blue-feature__title">Lead Capture & CRM</h4>
        <p class="blue-feature__text">Capture every enquiry and manage all conversations in one dashboard.</p>
      </div>
      <div class="blue-feature reveal reveal--delay-3">
        <div class="blue-feature__icon">🔄</div>
        <h4 class="blue-feature__title">Automated Follow-Ups</h4>
        <p class="blue-feature__text">Never lose a lead with automated SMS, email, and voicemail sequences.</p>
      </div>
      <div class="blue-feature reveal reveal--delay-4">
        <div class="blue-feature__icon">⭐</div>
        <h4 class="blue-feature__title">Reputation Management</h4>
        <p class="blue-feature__text">Generate more 5-star reviews and monitor your online reputation.</p>
      </div>
      <div class="blue-feature reveal">
        <div class="blue-feature__icon">📢</div>
        <h4 class="blue-feature__title">AI Marketing & Ads</h4>
        <p class="blue-feature__text">Create high-performing ads, emails, and social content in seconds.</p>
      </div>
      <div class="blue-feature reveal">
        <div class="blue-feature__icon">⚙️</div>
        <h4 class="blue-feature__title">Business Automation</h4>
        <p class="blue-feature__text">Streamline operations with intelligent workflows that run 24/7.</p>
      </div>
    </div>
  </div>
</section>

<!-- Stats -->
<section class="section">
  <div class="container">
    <div class="stats reveal">
      <div>
        <div class="stat__number" data-count="200" data-suffix="+">0</div>
        <div class="stat__label">Businesses automated</div>
      </div>
      <div>
        <div class="stat__number" data-count="47" data-prefix="" data-suffix="K+">0</div>
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
    <div class="text-center reveal mt-48">
      <h3 class="mb-16">Ready to see what AI can do for your business?</h3>
      <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Book Your Free Demo <span class="btn-arrow">→</span></a>
      <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">🛡️ 14-day money-back guarantee. No contracts.</p>
    </div>
  </div>
</section>

${getFooter()}
`;

// ROI Calculator logic
const calcHours = document.getElementById('calc-hours');
const calcRate = document.getElementById('calc-rate');
const calcLeads = document.getElementById('calc-leads');

function updateCalc() {
  const hours = parseInt(calcHours.value);
  const rate = parseInt(calcRate.value);
  const leads = parseInt(calcLeads.value);

  document.getElementById('calc-hours-val').textContent = hours + ' hrs';
  document.getElementById('calc-rate-val').textContent = '£' + rate;
  document.getElementById('calc-leads-val').textContent = leads;

  const savedHours = Math.round(hours * 0.75 * 4);
  const savedMoney = savedHours * rate;
  const extraRevenue = leads * 200;

  document.getElementById('calc-result-hours').textContent = savedHours + ' hrs';
  document.getElementById('calc-result-money').textContent = '£' + savedMoney.toLocaleString();
  document.getElementById('calc-result-revenue').textContent = '£' + extraRevenue.toLocaleString();
}

calcHours?.addEventListener('input', updateCalc);
calcRate?.addEventListener('input', updateCalc);
calcLeads?.addEventListener('input', updateCalc);
updateCalc();

// ── AI Simulator ──
(function initSimulator() {
  const msgs = document.getElementById('simMessages');
  const avatar = document.getElementById('simAvatar');
  const name = document.getElementById('simName');
  const tabs = document.querySelectorAll('.sim-tab-btn');
  if (!msgs) return;

  let timeouts = [];
  let started = false;

  const avatarMap = {
    booking:      { cls: 'sim-chat-avatar--booking',      text: 'BA', name: 'Booking Assistant' },
    reviews:      { cls: 'sim-chat-avatar--reviews',       text: 'RE', name: 'Review Engine' },
    reactivation: { cls: 'sim-chat-avatar--reactivation',  text: 'CR', name: 'Reactivation Bot' },
  };

  const sequences = {
    booking: [
      { text: "Hey, any openings this Friday?", sender: 'user', delay: 800 },
      { text: "Hey! 👋 Yes, 2:00 PM and 4:30 PM are open with Mike. Want one?", sender: 'bot', delay: 2400 },
      { text: "4:30 works.", sender: 'user', delay: 4000 },
      { text: "Great. Secure it with a deposit here: secure-book.com/pay", sender: 'bot', delay: 5500 },
      { text: "Done.", sender: 'user', delay: 7200 },
      { text: "Confirmed! ✅ See you Friday at 4:30 PM.", sender: 'bot', delay: 8200 },
    ],
    reviews: [
      { text: "Thanks for visiting today! How was the service?", sender: 'bot', delay: 800 },
      { text: "Amazing as always.", sender: 'user', delay: 2800 },
      { text: "Glad to hear it! Mind leaving a quick review? google.com/review", sender: 'bot', delay: 4200 },
      { text: "Sure doing it now.", sender: 'user', delay: 6200 },
      { type: 'system', text: "⭐ New 5-Star Review Detected", delay: 7800 },
    ],
    reactivation: [
      { type: 'system', text: "📋 Reactivation Campaign Sent to Inactive Clients", delay: 400 },
      { text: "Hi James, we haven't seen you in a while so we're offering past clients 20% off their next appointment this week. Book here: [Booking Link]", sender: 'bot', delay: 2000 },
      { text: "Oh nice, I might grab a slot.", sender: 'user', delay: 5000 },
      { text: "Great! Your returning client discount will be applied automatically when you book.", sender: 'bot', delay: 7000 },
    ],
  };

  function runSequence(tab) {
    timeouts.forEach(t => clearTimeout(t));
    timeouts = [];
    msgs.innerHTML = '';

    // Update avatar
    avatar.className = 'sim-chat-avatar ' + avatarMap[tab].cls;
    avatar.textContent = avatarMap[tab].text;
    name.textContent = avatarMap[tab].name;

    sequences[tab].forEach(msg => {
      const t = setTimeout(() => {
        if (msg.type === 'system') {
          const el = document.createElement('div');
          el.className = 'sim-system-alert';
          el.innerHTML = '<div class="sim-system-alert__inner">' + msg.text + '</div>';
          msgs.appendChild(el);
        } else {
          const el = document.createElement('div');
          el.className = 'sim-msg sim-msg--' + msg.sender;
          el.textContent = msg.text;
          msgs.appendChild(el);
        }
        msgs.scrollTop = msgs.scrollHeight;
      }, msg.delay);
      timeouts.push(t);
    });
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', function () {
      tabs.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      runSequence(this.dataset.sim);
    });
  });

  // Auto-start when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        runSequence('booking');
      }
    });
  }, { threshold: 0.3 });
  observer.observe(document.querySelector('.simulator-container'));
})();

initAll();
