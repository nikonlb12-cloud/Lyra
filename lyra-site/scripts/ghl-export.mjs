/**
 * GHL Export Script v3 — Separated CSS/JS/HTML for GoHighLevel
 * 
 * GHL structure requires:
 *   1. Shared CSS → Site Settings → Custom CSS (pasted ONCE)
 *   2. Shared JS  → Site Settings → Custom Code → Footer (pasted ONCE)
 *   3. Per-page HTML → Each page's Custom Code editor (body content only)
 * 
 * This script generates:
 *   ghl-export/
 *     _shared/
 *       site-css.css          ← Paste into GHL "Custom CSS"
 *       site-footer-js.html   ← Paste into GHL "Custom Code → Footer"
 *     pages/
 *       index.html             ← Paste into Homepage code editor
 *       about.html             ← Paste into About page code editor
 *       ...etc for all 14 pages
 * 
 * Each page HTML contains ONLY the <div id="app">...</div> content
 * plus any page-specific widget scripts (e.g., booking iframes).
 * It does NOT contain <html>, <head>, <style>, or the shared <script>.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');
const OUTPUT_DIR = join(process.cwd(), 'ghl-export');
const SHARED_DIR = join(OUTPUT_DIR, '_shared');
const PAGES_DIR = join(OUTPUT_DIR, 'pages');
const ASSETS_DIR = join(DIST_DIR, 'assets');
const SRC_DIR = join(process.cwd(), 'src');

// GitHub raw CDN for images — no GHL upload needed
const IMAGE_CDN = 'https://raw.githubusercontent.com/nikonlb12-cloud/Lyra/main/public/images';

mkdirSync(SHARED_DIR, { recursive: true });
mkdirSync(PAGES_DIR, { recursive: true });

// ─── 1. Extract and write shared CSS ───────────────────────────────────────────
const cssFile = readdirSync(ASSETS_DIR).find(f => f.endsWith('.css'));
const css = cssFile ? readFileSync(join(ASSETS_DIR, cssFile), 'utf-8') : '';

writeFileSync(join(SHARED_DIR, 'site-css.css'), css, 'utf-8');
const cssSizeKB = (Buffer.byteLength(css, 'utf-8') / 1024).toFixed(1);
console.log(`\n📦 Shared CSS → _shared/site-css.css (${cssSizeKB} KB)`);

// ─── 2. Build and write shared JS ─────────────────────────────────────────────
// This is the interactive JS that runs on every page. In GHL, paste this ONCE
// into Site Settings → Custom Code → Footer.
const interactiveJS = `
(function() {
  'use strict';
  
  // ── Scroll-triggered nav ──
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  });
  
  // ── Mobile menu ──
  var burger = document.getElementById('navBurger');
  var mobile = document.getElementById('navMobile');
  if (burger && mobile) {
    burger.addEventListener('click', function() {
      mobile.classList.toggle('active');
      burger.classList.toggle('open');
      document.body.style.overflow = mobile.classList.contains('active') ? 'hidden' : '';
    });
    // Close on link click
    mobile.querySelectorAll('.nav__mobile-link').forEach(function(link) {
      link.addEventListener('click', function() {
        mobile.classList.remove('active');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
  
  // ── Reveal on scroll ──
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          var el = e.target;
          var delay = 0;
          if (el.classList.contains('reveal--delay-1')) delay = 100;
          else if (el.classList.contains('reveal--delay-2')) delay = 200;
          else if (el.classList.contains('reveal--delay-3')) delay = 300;
          else if (el.classList.contains('reveal--delay-4')) delay = 400;
          setTimeout(function() { el.classList.add('revealed'); }, delay);
          revealObs.unobserve(el);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(function(el) { revealObs.observe(el); });
  }
  
  // ── Counter animation ──
  document.querySelectorAll('[data-count]').forEach(function(el) {
    var target = parseInt(el.dataset.count);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          obs.unobserve(el);
          var duration = 2000;
          var startTime = null;
          function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });
  
  // ── FAQ accordion ──
  document.querySelectorAll('.faq__question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq__item');
      var wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq__item').forEach(function(i) { i.classList.remove('active'); });
      if (!wasActive) item.classList.add('active');
    });
  });
  // Legacy FAQ selector for older markup
  document.querySelectorAll('.faq-item__q').forEach(function(q) {
    q.addEventListener('click', function() {
      q.closest('.faq-item').classList.toggle('faq-item--open');
    });
  });
  
  // ── Tabs ──
  document.querySelectorAll('.tabs').forEach(function(tabGroup) {
    var triggers = tabGroup.querySelectorAll('.tabs__trigger');
    var contents = tabGroup.querySelectorAll('.tabs__content');
    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        var targetId = trigger.dataset.tab;
        triggers.forEach(function(t) { t.classList.remove('active'); });
        contents.forEach(function(c) { c.classList.remove('active'); });
        trigger.classList.add('active');
        var panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  });
  
  // ── Mobile sticky CTA ──
  var stickyBar = document.getElementById('mobileStickyCtaBar');
  if (stickyBar && window.innerWidth <= 768) {
    var trigger = document.querySelector('.hero') || document.querySelector('.svc-hero') || document.querySelector('.page-header') || document.querySelector('.trial-hero') || document.querySelector('section');
    if (trigger) {
      new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          stickyBar.classList.toggle('visible', !e.isIntersecting);
        });
      }, { threshold: 0 }).observe(trigger);
    } else {
      stickyBar.classList.add('visible');
    }
  }
  
  // ── Desktop sticky CTA ──
  var stickyCta = document.getElementById('stickyCta');
  if (stickyCta && window.innerWidth > 768) {
    var hero = document.querySelector('.hero') || document.querySelector('.svc-hero') || document.querySelector('.page-header') || document.querySelector('.trial-hero') || document.querySelector('section');
    if (hero) {
      new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          stickyCta.classList.toggle('visible', !e.isIntersecting);
        });
      }, { threshold: 0 }).observe(hero);
    }
  }
  
  // ── Spotlight cards (mouse-follow glow) ──
  document.querySelectorAll('.card, .pricing-card, .process-2__card').forEach(function(card, i) {
    card.style.setProperty('--stagger', i);
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--spotlight-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--spotlight-y', (e.clientY - rect.top) + 'px');
    });
    card.addEventListener('mouseleave', function() {
      card.style.removeProperty('--spotlight-x');
      card.style.removeProperty('--spotlight-y');
    });
  });

  // ── Stagger index  ──
  document.querySelectorAll('.grid, .steps, .blue-features__list').forEach(function(container) {
    Array.from(container.children).forEach(function(child, i) {
      child.style.setProperty('--index', i);
    });
  });
  
  // ── Particle background ──
  var canvas = document.getElementById('particles-canvas');
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var animId;
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1
      };
    }
    function initParticles() {
      resizeCanvas();
      particles = [];
      var count = Math.min(350, Math.floor(canvas.width * canvas.height / 3500));
      for (var i = 0; i < count; i++) particles.push(createParticle());
    }
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(function(p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, ' + p.opacity + ')';
        ctx.fill();
      });
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(37, 99, 235, ' + (0.06 * (1 - dist / 150)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(drawParticles);
    }
    initParticles();
    drawParticles();
    window.addEventListener('resize', function() {
      cancelAnimationFrame(animId);
      initParticles();
      drawParticles();
    });
  }

  // ── Chat widget dark mode ──
  function applyDarkMode(el) {
    if (!el || el.dataset.darkened) return;
    el.dataset.darkened = 'true';
    if (el.tagName === 'IFRAME') {
      el.style.filter = 'invert(0.88) hue-rotate(180deg)';
      el.style.background = '#0d1117';
      el.style.borderRadius = '16px';
      el.style.border = '1px solid rgba(59,91,255,0.2)';
      el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 60px rgba(59,91,255,0.08)';
    }
  }
  function scanForWidgets() {
    document.querySelectorAll('iframe').forEach(function(iframe) {
      var src = iframe.src || '';
      if ((src.includes('leadconnectorhq') || src.includes('msgsndr') || src.includes('widgets.'))
          && !iframe.closest('.booking-embed')
          && !iframe.closest('.trial-form-card__body')) {
        applyDarkMode(iframe);
      }
    });
  }
  scanForWidgets();
  var widgetObserver = new MutationObserver(function(mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].addedNodes.length > 0) { scanForWidgets(); break; }
    }
  });
  widgetObserver.observe(document.body, { childList: true, subtree: true });
  var widgetChecks = 0;
  var widgetInterval = setInterval(function() {
    scanForWidgets();
    widgetChecks++;
    if (widgetChecks >= 20) clearInterval(widgetInterval);
  }, 500);

  // ── Hero entrance animation ──
  var heroTitle = document.querySelector('.hero__title');
  var heroSub = document.querySelector('.hero__subtitle');
  var heroText = document.querySelector('.hero__text');
  var heroActions = document.querySelector('.hero__actions');
  var heroVisual = document.querySelector('.hero__visual');
  [heroSub, heroTitle, heroText, heroActions].filter(Boolean).forEach(function(el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(function() {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400 + i * 150);
  });
  if (heroVisual) {
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'translateX(50px)';
    setTimeout(function() {
      heroVisual.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'translateX(0)';
    }, 700);
  }

  // ── Page fade-in ──
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(function() {
    document.body.style.opacity = '1';
  });
  setTimeout(function() { document.body.style.opacity = '1'; }, 1000);
})();
`;

const footerCodeBlock = `<!-- Lyra Capital — Shared Footer JS -->
<script>
${interactiveJS}
</script>`;

writeFileSync(join(SHARED_DIR, 'site-footer-js.html'), footerCodeBlock, 'utf-8');
const jsSizeKB = (Buffer.byteLength(footerCodeBlock, 'utf-8') / 1024).toFixed(1);
console.log(`📦 Shared JS  → _shared/site-footer-js.html (${jsSizeKB} KB)`);

// ─── 3. Process each page ──────────────────────────────────────────────────────

const componentsJS = readFileSync(join(SRC_DIR, 'components.js'), 'utf-8');

const pages = [
  { file: 'index.html', src: 'home.js' },
  { file: 'about.html', src: 'about.js' },
  { file: 'agents.html', src: 'agents.js' },
  { file: 'ai-ads.html', src: 'ai-ads.js' },
  { file: 'contact.html', src: 'contact.js' },
  { file: 'core-values.html', src: 'core-values.js' },
  { file: 'free-trial.html', src: 'free-trial.js' },
  { file: 'lead-management.html', src: 'lead-management.js' },
  { file: 'pricing.html', src: 'pricing.js' },
  { file: 'reputation-management.html', src: 'reputation-management.js' },
  { file: 'services.html', src: 'services.js' },
  { file: 'strategy-meeting.html', src: 'strategy-meeting.js' },
  { file: 'web-development.html', src: 'web-development.js' },
  { file: 'why-us.html', src: 'why-us.js' },
];

// --- Template extraction helpers ---

function extractFunctionBody(code, funcName) {
  const marker = `export function ${funcName}`;
  const idx = code.indexOf(marker);
  if (idx === -1) return null;
  
  const returnIdx = code.indexOf('return `', idx);
  if (returnIdx === -1) return null;
  
  let i = returnIdx + 8; // after the opening backtick
  let result = '';
  while (i < code.length) {
    if (code[i] === '`' && code[i-1] !== '\\') break;
    result += code[i];
    i++;
  }
  return result;
}

function getNavHTML(activePage) {
  const navTemplate = extractFunctionBody(componentsJS, 'getNav');
  if (!navTemplate) return '<!-- Nav extraction failed -->';
  
  let html = navTemplate;
  
  // Handle: ${activePage === 'xxx' ? 'active' : ''}
  html = html.replace(/\$\{activePage\s*===\s*'([\w-]*)'\s*\?\s*'([^']*)'\s*:\s*'([^']*)'\}/g, 
    (match, page, activeClass, inactiveClass) => {
      return page === activePage ? activeClass : inactiveClass;
    }
  );
  
  // Handle: ${['about','core-values','why-us'].includes(activePage) ? 'active' : ''}
  html = html.replace(/\$\{\[([^\]]+)\]\.includes\(activePage\)\s*\?\s*'([^']*)'\s*:\s*'([^']*)'\}/g, 
    (match, arrayStr, activeClass, inactiveClass) => {
      const pages = arrayStr.replace(/'/g, '').split(',').map(s => s.trim());
      return pages.includes(activePage) ? activeClass : inactiveClass;
    }
  );
  
  return html;
}

function getFooterHTML() {
  const footerTemplate = extractFunctionBody(componentsJS, 'getFooter');
  return footerTemplate || '<!-- Footer extraction failed -->';
}

function getPageHeaderHTML(title, subtitle) {
  return `
  <section class="page-header">
    <div class="page-header__bg">
      <div class="page-header__gradient"></div>
    </div>
    <div class="container page-header__content">
      <h1>${title}</h1>
      ${subtitle ? `<p>${subtitle}</p>` : ''}
    </div>
  </section>`;
}

console.log(`\n🚀 Processing ${pages.length} pages...\n`);

for (const page of pages) {
  // Read the dist HTML for meta info
  const distHTML = existsSync(join(DIST_DIR, page.file)) 
    ? readFileSync(join(DIST_DIR, page.file), 'utf-8') 
    : '';
  
  const titleMatch = distHTML.match(/<title>([^<]+)<\/title>/);
  const metaMatch = distHTML.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/);
  const title = titleMatch ? titleMatch[1] : 'Lyra Capital';
  const metaDesc = metaMatch ? metaMatch[1] : '';
  
  // Read the source JS for template content
  const pageSrc = readFileSync(join(SRC_DIR, 'pages', page.src), 'utf-8');
  
  // Extract the active page name from getNav call
  const navMatch = pageSrc.match(/getNav\(['"]([\w-]*)['"]\)/);
  const activePage = navMatch ? navMatch[1] : 'home';
  
  // Get the page body content
  const templateMatch = pageSrc.match(/\.innerHTML\s*=\s*`([\s\S]*?)`\s*;/);
  let bodyContent = templateMatch ? templateMatch[1] : '';
  
  // Replace template function calls
  bodyContent = bodyContent.replace(/\$\{getNav\([^)]*\)\}/g, getNavHTML(activePage));
  bodyContent = bodyContent.replace(/\$\{getFooter\(\)\}/g, getFooterHTML());
  
  // getPageHeader
  bodyContent = bodyContent.replace(/\$\{getPageHeader\(([^)]+)\)\}/g, (match, args) => {
    let argMatch = args.match(/^'((?:[^'\\]|\\.)*)'(?:\s*,\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"))?\\s*$/);
    if (!argMatch) {
      // Try a more lenient match
      argMatch = args.match(/^'((?:[^'\\]|\\.)*)'(?:\s*,\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"))?/);
    }
    if (argMatch) {
      const title = (argMatch[1] || '').replace(/\\'/g, "'");
      const subtitle = (argMatch[2] || argMatch[3] || '').replace(/\\'/g, "'").replace(/\\"/g, '"');
      return getPageHeaderHTML(title, subtitle);
    }
    return match;
  });
  
  // getFormEmbed
  bodyContent = bodyContent.replace(/\$\{getFormEmbed\(([^)]*)\)\}/g, (match, args) => {
    const labelMatch = args.match(/['"]([^'"]*)['"]/);
    const label = labelMatch ? labelMatch[1] : 'Contact Form';
    return `
    <div class="form-embed" id="ghl-form-placeholder">
      <div class="form-embed__icon">📝</div>
      <p class="form-embed__text">${label}</p>
      <p class="form-embed__hint">Replace with your GHL form embed code</p>
    </div>`;
  });
  
  // getCalendarEmbed
  bodyContent = bodyContent.replace(/\$\{getCalendarEmbed\(([^)]*)\)\}/g, () => {
    return `
    <div class="form-embed" id="ghl-calendar-placeholder">
      <div class="form-embed__icon">📅</div>
      <p class="form-embed__text">Calendar</p>
      <p class="form-embed__hint">Replace with your GHL calendar embed</p>
    </div>`;
  });
  
  // renderSlider
  bodyContent = bodyContent.replace(/\$\{renderSlider\([^)]*\)\}/g, 
    '<!-- Portfolio slider: Add your portfolio images here in GHL -->');
  
  // Extract page-specific widget scripts from dist HTML
  const widgetScripts = [];
  const widgetRegex = /<script\s+src="https:\/\/widgets[^"]*"[^>]*><\/script>/g;
  let wm;
  while ((wm = widgetRegex.exec(distHTML)) !== null) {
    widgetScripts.push(wm[0]);
  }
  // Also get msgsndr form embed scripts from source
  const formScripts = [];
  const formRegex = /<script\s+src="https:\/\/link\.msgsndr[^"]*"[^>]*><\/script>/g;
  while ((wm = formRegex.exec(pageSrc)) !== null) {
    formScripts.push(wm[0]);
  }
  
  // ── Build the page HTML ──
  // This is what gets pasted into each GHL page's Custom Code editor.
  // It includes <head> tags for title/meta (GHL merges these), 
  // and the body content. The CSS and JS come from site-wide settings.
  
  const pageSpecificScripts = [...widgetScripts, ...formScripts].join('\n');
  
  // Replace /images/ with GitHub CDN URL
  bodyContent = bodyContent.replace(/\/images\//g, IMAGE_CDN + '/');
  bodyContent = bodyContent.replace(/"images\//g, '"' + IMAGE_CDN + '/');
  
  const pageHTML = `<!-- ${page.file} — Lyra Capital -->
<!-- GHL: Paste this into the page's Custom Code editor -->
<!-- Make sure site-css.css is in Site Settings → Custom CSS -->
<!-- Make sure site-footer-js.html is in Site Settings → Custom Code → Footer -->

<div id="app">
${bodyContent}
</div>

${pageSpecificScripts ? `\n<!-- Page-specific widgets -->\n${pageSpecificScripts}\n` : ''}`;

  const outputPath = join(PAGES_DIR, page.file);
  writeFileSync(outputPath, pageHTML, 'utf-8');
  
  const sizeKB = (Buffer.byteLength(pageHTML, 'utf-8') / 1024).toFixed(1);
  console.log(`  ✅ ${page.file.padEnd(30)} → ${sizeKB} KB`);
}

// ─── 4. Also keep the self-contained versions for preview ──────────────────────
const STANDALONE_DIR = join(OUTPUT_DIR, 'standalone');
mkdirSync(STANDALONE_DIR, { recursive: true });

console.log(`\n📄 Generating standalone preview files...\n`);

for (const page of pages) {
  const distHTML = existsSync(join(DIST_DIR, page.file)) 
    ? readFileSync(join(DIST_DIR, page.file), 'utf-8') 
    : '';
  
  const titleMatch = distHTML.match(/<title>([^<]+)<\/title>/);
  const metaMatch = distHTML.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/);
  const title = titleMatch ? titleMatch[1] : 'Lyra Capital';
  const metaDesc = metaMatch ? metaMatch[1] : '';
  
  const pageSrc = readFileSync(join(SRC_DIR, 'pages', page.src), 'utf-8');
  const navMatch = pageSrc.match(/getNav\(['"]([\w-]*)['"]\)/);
  const activePage = navMatch ? navMatch[1] : 'home';
  
  const templateMatch = pageSrc.match(/\.innerHTML\s*=\s*`([\s\S]*?)`\s*;/);
  let bodyContent = templateMatch ? templateMatch[1] : '';
  
  bodyContent = bodyContent.replace(/\$\{getNav\([^)]*\)\}/g, getNavHTML(activePage));
  bodyContent = bodyContent.replace(/\$\{getFooter\(\)\}/g, getFooterHTML());
  bodyContent = bodyContent.replace(/\$\{getPageHeader\(([^)]+)\)\}/g, (match, args) => {
    let argMatch = args.match(/^'((?:[^'\\]|\\.)*)'(?:\s*,\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"))?/);
    if (argMatch) {
      const t = (argMatch[1] || '').replace(/\\'/g, "'");
      const s = (argMatch[2] || argMatch[3] || '').replace(/\\'/g, "'").replace(/\\"/g, '"');
      return getPageHeaderHTML(t, s);
    }
    return match;
  });
  bodyContent = bodyContent.replace(/\$\{getFormEmbed\(([^)]*)\)\}/g, (m, a) => {
    const lm = a.match(/['"]([^'"]*)['"]/);
    return `<div class="form-embed"><div class="form-embed__icon">📝</div><p class="form-embed__text">${lm ? lm[1] : 'Form'}</p><p class="form-embed__hint">Replace with GHL form embed</p></div>`;
  });
  bodyContent = bodyContent.replace(/\$\{getCalendarEmbed\(([^)]*)\)\}/g, () =>
    '<div class="form-embed"><div class="form-embed__icon">📅</div><p class="form-embed__text">Calendar</p><p class="form-embed__hint">Replace with GHL calendar embed</p></div>');
  bodyContent = bodyContent.replace(/\$\{renderSlider\([^)]*\)\}/g, '<!-- Portfolio slider -->');
  
  // Replace /images/ with GitHub CDN URL
  bodyContent = bodyContent.replace(/\/images\//g, IMAGE_CDN + '/');
  bodyContent = bodyContent.replace(/"images\//g, '"' + IMAGE_CDN + '/');
  
  const widgetScripts = [];
  const widgetRegex2 = /<script\s+src="https:\/\/widgets[^"]*"[^>]*><\/script>/g;
  let wm2;
  while ((wm2 = widgetRegex2.exec(distHTML)) !== null) widgetScripts.push(wm2[0]);
  
  const standaloneHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${metaDesc}" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <style>
${css}
  </style>
</head>
<body>
  <div id="app">
${bodyContent}
  </div>
  
  ${widgetScripts.join('\n  ')}
  
  <script>
${interactiveJS}
  </script>
</body>
</html>`;

  writeFileSync(join(STANDALONE_DIR, page.file), standaloneHTML, 'utf-8');
  const sizeKB = (Buffer.byteLength(standaloneHTML, 'utf-8') / 1024).toFixed(1);
  console.log(`  📄 ${page.file.padEnd(30)} → ${sizeKB} KB (standalone)`);
}

// ─── 5. Summary ────────────────────────────────────────────────────────────────
console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎉 GHL Export Complete!

📁 Output structure:
   ghl-export/
   ├── _shared/
   │   ├── site-css.css            ← Site Settings → Custom CSS
   │   └── site-footer-js.html     ← Site Settings → Custom Code → Footer
   ├── pages/
   │   ├── index.html              ← Homepage code editor
   │   ├── about.html              ← About page code editor
   │   └── ... (14 pages total)
   └── standalone/
       └── ... (self-contained previews, open in browser to test)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 HOW TO ADD TO GHL:

  STEP 1: Shared CSS
     GHL Dashboard → Sites → Select your site
     → Site Settings (⚙️) → Custom CSS
     → Paste the entire contents of _shared/site-css.css
     → Save

  STEP 2: Shared JavaScript
     GHL Dashboard → Sites → Select your site
     → Site Settings (⚙️) → Custom Code → Footer
     → Paste the entire contents of _shared/site-footer-js.html
     → Save

  STEP 3: Create Pages (repeat for all 14 pages)
     → Sites → Websites → Add Page (use "Blank" template)
     → Click the { } Code Editor icon (top-right)
     → Delete all existing code
     → Paste the contents from pages/{page-name}.html
     → Save & Publish

  STEP 4: Upload Images
     → Upload all files from public/images/ to GHL Media Library
     → Find-replace "/images/" with your GHL CDN URL in each page

  STEP 5: Connect Domain
     → Settings → Domains → Connect your custom domain

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
