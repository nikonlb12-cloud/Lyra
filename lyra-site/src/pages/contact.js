import '../styles.css';
import { getNav, getFooter, getPageHeader, getFormEmbed, getCalendarEmbed } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('contact')}

${getPageHeader('Contact Us', 'Get in touch — we\'d love to hear from you.')}

<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="reveal">
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
        ${getFormEmbed('Get In Touch', 'Replace this div with your GHL contact form embed code')}
      </div>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();
