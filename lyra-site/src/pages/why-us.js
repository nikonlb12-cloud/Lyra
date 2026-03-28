import '../styles.css';
import { getNav, getFooter, getPageHeader, getFormEmbed } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('why-us')}

${getPageHeader('Why Choose Lyra Capital', 'Built for Businesses That Want to Scale Smarter')}

<section class="section">
  <div class="container">
    <div class="grid grid--2">
      <div class="card reveal reveal--delay-1">
        <div class="card__icon">🎯</div>
        <h4 class="card__title">Built for Businesses That Want to Scale Smarter</h4>
        <p class="card__text">We don't offer generic automation. Every system we design is tailored to your business goals, workflows, and customer journey—so you grow efficiently without adding complexity or headcount.</p>
      </div>
      <div class="card reveal reveal--delay-2">
        <div class="card__icon">🕐</div>
        <h4 class="card__title">AI That Works Around the Clock</h4>
        <p class="card__text">Our AI-driven systems operate 24/7, capturing leads, answering enquiries, booking appointments, and following up automatically. Your business stays responsive at all times, even when you're offline.</p>
      </div>
      <div class="card reveal reveal--delay-3">
        <div class="card__icon">🤝</div>
        <h4 class="card__title">Automation That Feels Human</h4>
        <p class="card__text">We design AI that enhances the customer experience, not one that feels robotic. Every interaction is built to be natural, professional, and consistent—helping you build trust while improving conversion rates.</p>
      </div>
      <div class="card reveal reveal--delay-4">
        <div class="card__icon">⚡</div>
        <h4 class="card__title">Faster Responses. Higher Conversions.</h4>
        <p class="card__text">Speed matters. Our systems engage leads instantly, reducing drop-offs and missed opportunities. The result: warmer conversations, better-qualified prospects, and more paying customers.</p>
      </div>
      <div class="card reveal reveal--delay-1">
        <div class="card__icon">🔗</div>
        <h4 class="card__title">Seamless Integration, Zero Disruption</h4>
        <p class="card__text">Our solutions integrate smoothly with your existing CRM, calendars, and business tools. No complicated migrations. No operational downtime. Just smarter systems that fit into what you already use.</p>
      </div>
      <div class="card reveal reveal--delay-2">
        <div class="card__icon">📈</div>
        <h4 class="card__title">Designed to Scale With You</h4>
        <p class="card__text">Whether you're handling 10 leads a week or 10,000, our automation grows with your business. We build future-proof systems that adapt as demand increases.</p>
      </div>
      <div class="card reveal reveal--delay-3">
        <div class="card__icon">📊</div>
        <h4 class="card__title">Results, Not Just Technology</h4>
        <p class="card__text">We focus on outcomes—more leads captured, better follow-up, improved efficiency, and measurable growth. Every automation we deploy is built to deliver real business impact.</p>
      </div>
      <div class="card reveal reveal--delay-4">
        <div class="card__icon">🤝</div>
        <h4 class="card__title">A True Long-Term Partner</h4>
        <p class="card__text">We don't just implement and walk away. We work alongside you, refining systems, optimising performance, and ensuring your automation continues to deliver as your business evolves.</p>
      </div>
    </div>

    <div class="card reveal mt-48" style="text-align: center; border-color: var(--accent-primary); background: linear-gradient(180deg, rgba(59,91,255,0.08), var(--bg-card));">
      <div class="card__icon mx-auto">💡</div>
      <h3 class="mb-16">Led by Vision, Backed by Execution</h3>
      <p class="max-w-640 mx-auto">Founded by Nikolai Blair, Lyra Capital combines strategic thinking with practical AI execution—bridging the gap between advanced technology and real-world business growth.</p>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-48">
      <span class="section-label">Get In Touch</span>
      <h2>See the difference for yourself</h2>
    </div>
    ${getFormEmbed('Contact Form', 'Replace with your GHL contact form embed code')}
  </div>
</section>

${getFooter()}
`;

initAll();
