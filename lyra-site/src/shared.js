/* ============================================
   LYRA CAPITAL — Shared JavaScript
   Navigation, GSAP Animations, Particles, Utils
   ============================================ */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ---------- Navigation ----------
export function initNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav?.classList.add('nav--scrolled');
    } else {
      nav?.classList.remove('nav--scrolled');
    }
  });

  // Mobile toggle
  burger?.addEventListener('click', () => {
    mobile?.classList.toggle('active');
    document.body.style.overflow = mobile?.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobile?.querySelectorAll('.nav__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ---------- Scroll Reveal (Pure IntersectionObserver — no GSAP ScrollTrigger) ----------
export function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  // Use IntersectionObserver to add 'revealed' class when elements enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // Read delay from modifier classes
        let delay = 0;
        if (el.classList.contains('reveal--delay-1')) delay = 100;
        else if (el.classList.contains('reveal--delay-2')) delay = 200;
        else if (el.classList.contains('reveal--delay-3')) delay = 300;
        else if (el.classList.contains('reveal--delay-4')) delay = 400;

        setTimeout(() => {
          el.classList.add('revealed');
        }, delay);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(el => observer.observe(el));

  // Hero entrance — use gsap.to() from a CSS-defined hidden state
  const heroTitle = document.querySelector('.hero__title');
  const heroSub = document.querySelector('.hero__subtitle');
  const heroText = document.querySelector('.hero__text');
  const heroActions = document.querySelector('.hero__actions');
  const heroVisual = document.querySelector('.hero__visual');

  const heroEls = [heroSub, heroTitle, heroText, heroActions].filter(Boolean);
  heroEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400 + i * 150);
  });

  if (heroVisual) {
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'translateX(50px)';
    setTimeout(() => {
      heroVisual.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'translateX(0)';
    }, 700);
  }
}

// ---------- Counter Animation ----------
export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        animateCounter(el, target, prefix, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el, target, prefix, suffix) {
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const stepTime = duration / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, stepTime);
}

// ---------- FAQ Accordion ----------
export function initFAQ() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const wasActive = item.classList.contains('active');
      
      // Close all
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('active'));
      
      // Toggle current
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

// ---------- Tabs ----------
export function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const triggers = tabGroup.querySelectorAll('.tabs__trigger');
    const contents = tabGroup.querySelectorAll('.tabs__content');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.dataset.tab;
        
        triggers.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        trigger.classList.add('active');
        tabGroup.querySelector(`#${targetId}`)?.classList.add('active');
      });
    });
  });
}

// ---------- Particle Background ----------
export function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3.5 + 1.5,
      opacity: Math.random() * 0.5 + 0.1,
    };
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(350, Math.floor(canvas.width * canvas.height / 3500));
    for (let i = 0; i < count; i++) {
      particles.push(createParticle());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.06 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    init();
    draw();
  });
}

// ---------- Smooth Page Load ----------
export function initPageTransition() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  
  const showBody = () => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    showBody();
  } else {
    window.addEventListener('load', showBody);
  }

  // Hard fallback — body MUST be visible within 1s no matter what
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 1000);
}

// ---------- Spotlight Border Cards (taste-skill) ----------
export function initSpotlightCards() {
  const cards = document.querySelectorAll('.card, .pricing-card, .process-2__card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--spotlight-x');
      card.style.removeProperty('--spotlight-y');
    });
  });
}

// ---------- Stagger Index (taste-skill) ----------
export function initStaggerIndex() {
  document.querySelectorAll('.grid, .steps, .blue-features__list').forEach(container => {
    [...container.children].forEach((child, i) => {
      child.style.setProperty('--index', i);
    });
  });
}

// ---------- Chat Widget Dark Mode ----------
export function initChatWidgetDarkMode() {
  const DARK_FILTER = 'invert(0.88) hue-rotate(180deg)';
  const DARK_BG = '#0d1117';

  function applyDarkMode(el) {
    if (!el || el.dataset.darkened) return;
    el.dataset.darkened = 'true';

    // Style the chat iframe itself
    if (el.tagName === 'IFRAME') {
      el.style.filter = DARK_FILTER;
      el.style.background = DARK_BG;
      el.style.borderRadius = '16px';
      el.style.border = '1px solid rgba(59,91,255,0.2)';
      el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 60px rgba(59,91,255,0.08)';
    }
  }

  function scanForWidgets() {
    // Target GHL chat widget iframes — they're usually inside divs near the data-widget-id script
    document.querySelectorAll('iframe').forEach(iframe => {
      const src = iframe.src || '';
      // GHL chat widget iframes contain leadconnectorhq or msgsndr
      if ((src.includes('leadconnectorhq') || src.includes('msgsndr') || src.includes('widgets.'))
          && !iframe.closest('.booking-embed')
          && !iframe.closest('.trial-form-card__body')
          && !iframe.id?.includes('inline-')) {
        applyDarkMode(iframe);
      }
    });

    // Also target common GHL widget wrapper classes
    document.querySelectorAll('[class*="lc-"] iframe, [class*="chat-widget"] iframe').forEach(iframe => {
      if (!iframe.closest('.booking-embed') && !iframe.closest('.trial-form-card__body')) {
        applyDarkMode(iframe);
      }
    });
  }

  // Initial scan
  scanForWidgets();

  // Watch for dynamically injected chat widget
  const observer = new MutationObserver((mutations) => {
    let shouldScan = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldScan = true;
        break;
      }
    }
    if (shouldScan) scanForWidgets();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Periodic fallback — some widgets inject after delays
  let checks = 0;
  const interval = setInterval(() => {
    scanForWidgets();
    checks++;
    if (checks >= 20) clearInterval(interval); // Stop after ~10s
  }, 500);
}

// ---------- Mobile Sticky CTA Bar ----------
export function initMobileStickyCtaBar() {
  const bar = document.getElementById('mobileStickyCtaBar');
  if (!bar) return;

  // Only activate on mobile viewports
  if (window.innerWidth > 768) return;

  // Find the first major section to observe (hero or page-header)
  const trigger = document.querySelector('.hero') ||
                  document.querySelector('.svc-hero') ||
                  document.querySelector('.page-header') ||
                  document.querySelector('.trial-hero') ||
                  document.querySelector('section');
  if (!trigger) {
    bar.classList.add('visible');
    return;
  }

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      bar.classList.remove('visible');
    } else {
      bar.classList.add('visible');
    }
  }, { threshold: 0 });

  observer.observe(trigger);
}

// ---------- Initialize All ----------
export function initAll() {
  initPageTransition();
  initNav();
  initReveal();
  initCounters();
  initFAQ();
  initTabs();
  initParticles();
  initSpotlightCards();
  initStaggerIndex();
  initChatWidgetDarkMode();
  initMobileStickyCtaBar();
}
