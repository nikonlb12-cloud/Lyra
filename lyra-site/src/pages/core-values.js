import '../styles.css';
import { getNav, getFooter, getPageHeader, getFormEmbed } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('core-values')}

${getPageHeader('Core Values', 'The principles that guide every system we build and every partnership we form.')}

<section class="section">
  <div class="container">
    <div class="value-grid">
      <div class="value-card reveal reveal--delay-1">
        <div class="value-card__number">01</div>
        <h3 class="value-card__title">Automation With Purpose</h3>
        <p class="value-card__text">We believe AI should solve real business problems, not add complexity. Every system we build is designed to remove friction, save time, and create measurable impact—so businesses can focus on growth, not operations.</p>
      </div>
      <div class="value-card reveal reveal--delay-2">
        <div class="value-card__number">02</div>
        <h3 class="value-card__title">Human-Centric Technology</h3>
        <p class="value-card__text">Automation should enhance human effort, not replace it. Our AI solutions are built to support teams, elevate customer experience, and create more meaningful interactions at every touchpoint.</p>
      </div>
      <div class="value-card reveal reveal--delay-3">
        <div class="value-card__number">03</div>
        <h3 class="value-card__title">Efficiency Without Compromise</h3>
        <p class="value-card__text">Speed means nothing without accuracy. We prioritise systems that are fast, reliable, and precise—ensuring no lead is missed, no message is lost, and no opportunity slips through the cracks.</p>
      </div>
      <div class="value-card reveal reveal--delay-4">
        <div class="value-card__number">04</div>
        <h3 class="value-card__title">Scalable by Design</h3>
        <p class="value-card__text">Every solution we deploy is built with growth in mind. From startups to established businesses, our systems scale effortlessly alongside our clients, adapting as their needs evolve.</p>
      </div>
      <div class="value-card reveal reveal--delay-1">
        <div class="value-card__number">05</div>
        <h3 class="value-card__title">Seamless Integration</h3>
        <p class="value-card__text">Technology should fit into your business, not disrupt it. We design AI systems that integrate smoothly with existing tools, workflows, and platforms—delivering results without downtime or disruption.</p>
      </div>
      <div class="value-card reveal reveal--delay-2">
        <div class="value-card__number">06</div>
        <h3 class="value-card__title">Consistency Creates Trust</h3>
        <p class="value-card__text">24/7 responsiveness builds stronger brands. Our automation ensures consistent communication, follow-up, and engagement—so businesses remain reliable, professional, and present at all times.</p>
      </div>
      <div class="value-card reveal reveal--delay-3">
        <div class="value-card__number">07</div>
        <h3 class="value-card__title">Partnership First</h3>
        <p class="value-card__text">We don't sell software and disappear. We work closely with our clients as long-term partners, tailoring every strategy to their goals and supporting them as they scale.</p>
      </div>
      <div class="value-card reveal reveal--delay-4">
        <div class="value-card__number">08</div>
        <h3 class="value-card__title">Built for the Future</h3>
        <p class="value-card__text">The digital landscape evolves fast—and so do we. Lyra Capital exists to future-proof businesses with intelligent systems that keep them competitive in an AI-driven world.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container text-center">
    <div class="reveal mb-48">
      <span class="section-label">Get In Touch</span>
      <h2>Ready to experience these values in action?</h2>
    </div>
    ${getFormEmbed('Contact Form', 'Replace with your GHL contact form embed code')}
  </div>
</section>

${getFooter()}
`;

initAll();
