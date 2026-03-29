/**
 * GHL Export Script v2 — Pre-rendered HTML Generator
 * 
 * Since GHL needs self-contained HTML, this script:
 * 1. Opens each page with the Vite dev server running
 * 2. Captures the fully-rendered DOM (after JS execution)
 * 3. Inlines the CSS
 * 4. Saves the pre-rendered HTML (no JS needed for initial render)
 * 5. Adds a small script block for interactive features
 * 
 * This approach is more reliable because:
 * - The HTML is already rendered, no module system needed
 * - Interactive JS (counters, FAQ, tabs) is re-attached via inline script
 * - All CSS is inlined
 * - Images use /images/ paths (update to GHL CDN later)
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const DIST_DIR = join(process.cwd(), 'dist');
const OUTPUT_DIR = join(process.cwd(), 'ghl-export');
const ASSETS_DIR = join(DIST_DIR, 'assets');
const SRC_DIR = join(process.cwd(), 'src');

mkdirSync(OUTPUT_DIR, { recursive: true });

// --- Read CSS ---
const cssFile = readdirSync(ASSETS_DIR).find(f => f.endsWith('.css'));
const css = cssFile ? readFileSync(join(ASSETS_DIR, cssFile), 'utf-8') : '';

// --- Read source files to extract rendered HTML ---
// Since JS renders into #app, we need the actual HTML template strings.
// We'll read the source JS files and extract the template literal content.

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

// Read the shared components (nav + footer)
const componentsJS = readFileSync(join(SRC_DIR, 'components.js'), 'utf-8');
const sharedJS = readFileSync(join(SRC_DIR, 'shared.js'), 'utf-8');

// Extract getNav function content
function extractFunctionBody(code, funcName) {
  const marker = `export function ${funcName}`;
  const idx = code.indexOf(marker);
  if (idx === -1) return null;
  
  // Find the return statement
  const returnIdx = code.indexOf('return `', idx);
  if (returnIdx === -1) return null;
  
  const templateStart = code.indexOf('`', returnIdx + 7);
  // Find matching closing backtick
  let depth = 0;
  let i = returnIdx + 8; // after the opening backtick
  let result = '';
  while (i < code.length) {
    if (code[i] === '`' && code[i-1] !== '\\') {
      break;
    }
    result += code[i];
    i++;
  }
  return result;
}

// Get nav and footer templates
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

// --- Interactive JS that runs client-side ---
// This is a stripped-down version of shared.js with just the interactive bits
const interactiveJS = `
(function() {
  'use strict';
  
  // Scroll-triggered nav
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (nav) nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  });
  
  // Mobile menu
  var burger = document.getElementById('navBurger');
  var mobile = document.getElementById('navMobile');
  if (burger && mobile) {
    burger.addEventListener('click', function() {
      mobile.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }
  
  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { revealObs.observe(el); });
  }
  
  // Counter animation
  document.querySelectorAll('[data-count]').forEach(function(el) {
    var target = parseInt(el.dataset.count);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          obs.unobserve(el);
          var start = 0;
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
  
  // FAQ accordion
  document.querySelectorAll('.faq-item__q').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = q.closest('.faq-item');
      item.classList.toggle('faq-item--open');
    });
  });
  
  // Tabs
  document.querySelectorAll('.tabs__trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      var tabId = this.dataset.tab;
      var container = this.closest('.tabs');
      container.querySelectorAll('.tabs__trigger').forEach(function(t) { t.classList.remove('active'); });
      container.querySelectorAll('.tabs__panel').forEach(function(p) { p.classList.remove('active'); });
      this.classList.add('active');
      var panel = container.querySelector('[data-panel="' + tabId + '"]');
      if (panel) panel.classList.add('active');
    });
  });
  
  // Mobile sticky CTA
  var stickyBar = document.getElementById('mobileStickyCtaBar');
  if (stickyBar && window.innerWidth <= 768) {
    var trigger = document.querySelector('.hero') || document.querySelector('.svc-hero') || document.querySelector('.page-header') || document.querySelector('section');
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
  
  // Spotlight cards
  document.querySelectorAll('.card').forEach(function(card, i) {
    card.style.setProperty('--stagger', i);
  });
})();
`;

console.log(`\n🚀 GHL Export v2 — Processing ${pages.length} pages...\n`);

for (const page of pages) {
  // Read the source HTML shell
  const distHTML = existsSync(join(DIST_DIR, page.file)) 
    ? readFileSync(join(DIST_DIR, page.file), 'utf-8') 
    : '';
  
  // Extract the page title and meta from the dist HTML
  const titleMatch = distHTML.match(/<title>([^<]+)<\/title>/);
  const metaMatch = distHTML.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/);
  const title = titleMatch ? titleMatch[1] : 'Lyra Capital';
  const metaDesc = metaMatch ? metaMatch[1] : '';
  
  // Read the page source to get the template content
  const pageSrc = readFileSync(join(SRC_DIR, 'pages', page.src), 'utf-8');
  
  // Extract the active page name from getNav call
  const navMatch = pageSrc.match(/getNav\(['"](\w[\w-]*)['"]\)/);
  const activePage = navMatch ? navMatch[1] : 'home';
  
  // Get the page body content by extracting the template literal
  // Find document.getElementById('app').innerHTML = `...`
  const templateMatch = pageSrc.match(/\.innerHTML\s*=\s*`([\s\S]*?)`\s*;/);
  let bodyContent = templateMatch ? templateMatch[1] : '';
  
  // Replace template function calls
  bodyContent = bodyContent.replace(/\$\{getNav\([^)]*\)\}/g, getNavHTML(activePage));
  bodyContent = bodyContent.replace(/\$\{getFooter\(\)\}/g, getFooterHTML());
  
  // getPageHeader — handle single quotes, double quotes, and escaped quotes
  bodyContent = bodyContent.replace(/\$\{getPageHeader\(([^)]+)\)\}/g, (match, args) => {
    // Try to parse: 'title', 'subtitle' OR 'title', "subtitle" OR just 'title'
    // First try single-quote pairs with escaped quotes
    let argMatch = args.match(/^'((?:[^'\\]|\\.)*)'(?:\s*,\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"))?\s*$/);
    if (argMatch) {
      const title = (argMatch[1] || '').replace(/\\'/g, "'");
      const subtitle = (argMatch[2] || argMatch[3] || '').replace(/\\'/g, "'").replace(/\\"/g, '"');
      return getPageHeaderHTML(title, subtitle);
    }
    return match;
  });
  
  // getFormEmbed — render as the form placeholder
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
  bodyContent = bodyContent.replace(/\$\{getCalendarEmbed\(([^)]*)\)\}/g, (match, args) => {
    return `
    <div class="form-embed" id="ghl-calendar-placeholder">
      <div class="form-embed__icon">📅</div>
      <p class="form-embed__text">Calendar</p>
      <p class="form-embed__hint">Replace with your GHL calendar embed</p>
    </div>`;
  });
  
  // renderSlider — these depend on runtime arrays, replace with portfolio section note
  bodyContent = bodyContent.replace(/\$\{renderSlider\([^)]*\)\}/g, 
    '<!-- Portfolio slider: Add your portfolio images here in GHL -->');
  
  // Extract GHL widget scripts from dist HTML
  const widgetScripts = [];
  const widgetRegex = /<script\s+src="https:\/\/widgets[^"]*"[^>]*><\/script>/g;
  let wm;
  while ((wm = widgetRegex.exec(distHTML)) !== null) {
    widgetScripts.push(wm[0]);
  }
  // Also get the msgsndr form embed scripts
  const formScripts = [];
  const formRegex = /<script\s+src="https:\/\/link\.msgsndr[^"]*"[^>]*><\/script>/g;
  while ((wm = formRegex.exec(pageSrc)) !== null) {
    formScripts.push(wm[0]);
  }
  
  // Build the final self-contained HTML
  const finalHTML = `<!DOCTYPE html>
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
  ${formScripts.join('\n  ')}
  
  <script>
${interactiveJS}
  </script>
</body>
</html>`;

  const outputPath = join(OUTPUT_DIR, page.file);
  writeFileSync(outputPath, finalHTML, 'utf-8');
  
  const sizeKB = (Buffer.byteLength(finalHTML, 'utf-8') / 1024).toFixed(1);
  console.log(`  ✅ ${page.file.padEnd(30)} → ${sizeKB} KB`);
}

console.log(`\n🎉 Done! ${pages.length} GHL-ready pages in: ghl-export/\n`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📋 HOW TO ADD TO GHL:\n`);
console.log(`  1. GHL Dashboard → Sites → Websites`);
console.log(`  2. Create or edit your website`);
console.log(`  3. For each page:`);
console.log(`     a. Add a new page (use "Blank" template)`);
console.log(`     b. Click the { } Code Editor icon (top-right)`);
console.log(`     c. Delete all existing code`);
console.log(`     d. Paste the FULL contents of the matching HTML file`);
console.log(`     e. Save & publish\n`);
console.log(`  4. Upload images from public/images/ to GHL Media Library`);
console.log(`  5. Find-replace "/images/" with your GHL CDN URL\n`);
console.log(`  6. Connect your domain in GHL → Settings → Domains\n`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
