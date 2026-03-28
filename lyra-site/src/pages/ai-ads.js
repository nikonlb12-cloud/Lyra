import '../styles.css';
import { getNav, getFooter, getPageHeader, getFormEmbed } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('ai-ads')}

${getPageHeader('A.I. Ads', 'Reach more customers with AI-powered advertising that converts.')}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <span class="section-label">AI-Powered Marketing</span>
        <h2 class="mb-16">Create High-Performing Ads <span class="text-gradient">In Seconds</span></h2>
        <p class="mb-16">Let AI handle the creative heavy lifting. Our AI ad system generates compelling ad copy, visuals, and targeting strategies that drive real results across social media platforms.</p>
        <p class="mb-24">From Facebook and Instagram to Google Ads, we optimize your campaigns for maximum ROI with minimal effort on your part.</p>
        <div class="feature-list">
          <div class="feature-item"><span class="feature-item__icon">✓</span> AI-generated ad copy and creative</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Multi-platform campaign management</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Automated A/B testing</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Real-time performance optimization</div>
          <div class="feature-item"><span class="feature-item__icon">✓</span> Detailed analytics and reporting</div>
        </div>
        <a href="/pricing.html" class="btn btn--primary btn--large mt-32">Get Started <span class="btn-arrow">→</span></a>
      </div>
      <div class="reveal reveal--delay-2" style="display: flex; justify-content: center;">
        <div style="width: 100%; max-width: 400px; aspect-ratio: 1; background: linear-gradient(135deg, rgba(59,91,255,0.15), rgba(139,92,246,0.1)); border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border-subtle);">
          <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; margin-bottom: 16px;">📢</div>
            <p style="font-size: 1.2rem; font-weight: 600;">AI Ad Engine</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Smarter ads. Better results.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-48">
      <span class="section-label">Get In Touch</span>
      <h2>Ready to supercharge your advertising?</h2>
    </div>
    ${getFormEmbed('Contact Form', 'Replace with your GHL form embed code')}
  </div>
</section>

${getFooter()}
`;

initAll();
