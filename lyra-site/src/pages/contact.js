import '../styles.css';
import { getNav, getFooter, getPageHeader } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('contact')}

${getPageHeader('Contact Us', 'Get in touch — we\'d love to hear from you.')}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
        <!-- Mobile tap-to-call (hidden on desktop via CSS) -->
        <a href="tel:+448003167364" class="contact-tap-call">📞 Tap to Call — Free Consultation</a>

        <div class="contact-info mb-48">
          <div class="contact-info__item">
            <div class="contact-info__icon">✉️</div>
            <div>
              <div class="contact-info__label">Our Email</div>
              <a href="mailto:contact@lyracapital.co.uk" class="contact-info__value">contact@lyracapital.co.uk</a>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon">📞</div>
            <div>
              <div class="contact-info__label">Call Us Anytime</div>
              <a href="tel:+448003167364" class="contact-info__value">+44 800 316 7364</a>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon">📅</div>
            <div>
              <div class="contact-info__label">Free Consultation</div>
              <a href="/strategy-meeting.html" class="contact-info__value" style="color: var(--accent-primary);">Book a free Strategy Call →</a>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal reveal--delay-2">
        <div class="booking-embed" id="contact-booking-widget">
          <iframe src="https://api.leadconnectorhq.com/widget/booking/EQMnUPQLTTYw7mltzfqm" style="width: 100%;border:none;overflow: hidden;min-height: 700px;" scrolling="no" id="contact-booking-iframe"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
