import '../styles.css';
import { getNav, getFooter } from '../components.js';
import { initAll } from '../shared.js';

document.getElementById('app').innerHTML = `
${getNav('demo')}

<section class="page-header">
  <div class="page-header__bg">
    <div class="page-header__gradient"></div>
  </div>
  <div class="container page-header__content">
    <h1>See It In Action</h1>
    <p>Watch how our AI handles real conversations — then try the chatbot yourself (bottom right corner).</p>
  </div>
</section>

<!-- Demo Video -->
<section class="section">
  <div class="container">
    <div class="text-center reveal mb-48">
      <span class="section-label">Live Demo</span>
      <h2 class="mb-16">Watch the AI <span class="text-gradient">do its thing.</span></h2>
      <p class="max-w-640 mx-auto">No scripts. No actors. Just our AI receptionist handling a real conversation from start to booked appointment.</p>
    </div>
    <div class="reveal" style="max-width: 800px; margin: 0 auto;">
      <video id="demo-video" controls playsinline style="width: 100%; border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); display: block;">
        <source src="https://assets.cdn.filesafe.space/KWZyDz7xRE0SCdkcDf1P/media/673dfd3d486b9199ff4982e2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

<!-- Try It Now — Animated CTA -->
<section class="section section--dark" id="tryChatSection">
  <div class="container">
    <div class="try-chat reveal">
      <div class="try-chat__content">
        <span class="section-label">Your Turn</span>
        <h2 class="mb-16">Now <span class="text-gradient">you try it.</span></h2>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 32px;">You just saw the AI in action. Now have a real conversation with it — ask anything, try to stump it, or book a fake appointment. It's live.</p>
        <div class="try-chat__pointer-wrap" id="chatPointer">
          <div class="try-chat__bubble">
            <span class="try-chat__bubble-icon">💬</span>
            <span class="try-chat__bubble-text">Click the chat in the corner ↘</span>
          </div>
        </div>
      </div>
      <div class="try-chat__actions mt-48">
        <a href="/strategy-meeting.html" class="btn btn--primary btn--large">Want This For Your Business? <span class="btn-arrow">→</span></a>
        <p style="color: var(--text-muted); margin-top: 12px; font-size: 0.85rem;">✓ No contracts · ✓ Set up in under 24hrs</p>
      </div>
    </div>
  </div>
</section>

${getFooter()}
`;

initAll();

// Wait for section to scroll into view, then show indicators
const tryChatSection = document.getElementById('tryChatSection');
if (tryChatSection) {
  let overlayCreated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tryChatSection.classList.add('try-chat--visible');
        if (!overlayCreated) {
          const overlay = document.createElement('div');
          overlay.className = 'try-chat__widget-overlay try-chat__widget-overlay--active';
          overlay.innerHTML = `
            <div class="try-chat__down-label">Try it!</div>
            <svg class="try-chat__down-arrow" viewBox="0 0 40 80" fill="none">
              <path d="M20 5 L20 60" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" fill="none"/>
              <polygon points="12,58 20,72 28,58" fill="#10b981"/>
            </svg>
            <div class="try-chat__rings">
              <div class="try-chat__ring"></div>
              <div class="try-chat__ring try-chat__ring--2"></div>
              <div class="try-chat__ring try-chat__ring--3"></div>
            </div>
          `;
          document.body.appendChild(overlay);
          overlayCreated = true;
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(tryChatSection);
}
