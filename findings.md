# Lyra — Findings & Research

> Discoveries, constraints, and research notes accumulated during the project.

---

## Discovery Phase

### Source Website Analysis (lyra-capital.info)

**Company:** Lyra Capital — London-based AI automation & technology agency  
**Founder:** Nikolai Blair, 28, London, England  
**Phone:** +44 800 316 7364  
**Email:** contact@lyracapital.co.uk  
**Copyright:** © 2026 Lyra Capital

### Brand Identity
- **Theme:** Premium Dark — deep navy/black backgrounds (#0B0E14)
- **Primary Color:** Electric Blue (#2D46B9) — CTAs, accents, highlights
- **Secondary:** Vibrant blue sections for feature breakdowns
- **Accent:** White text, cyan/light blue gradients
- **Visual style:** Glassmorphism, geometric blue light shards, card-based layouts
- **Typography:** Bold sans-serif (Montserrat/Lato style), strong hierarchy
- **Overall feel:** Tech-forward, premium, authoritative

### Site Structure (Pages)
1. **Home** — Hero, 3-step process, feature breakdown, services overview, pricing, footer
2. **About** — Our Story, Core Values, Why Choose Us
3. **Services** — Full service grid, ROI calculator, detailed service descriptions, stats
4. **Pricing** — 3 tiers + yearly premium
5. **Contact** — Email, phone, booking form

### Services Offered
1. Web Design & Development (Responsive, Chatbot, Voice AI)
2. Lead Management (CRM, fuzzy matching, lifecycle tracking)
3. Reputation Management (Google reviews, visibility)
4. AI Employees (Agents for repetitive tasks)
5. AI Ads (Customer reach optimization)

### Pricing Tiers (GBP)
| Plan | Price | Target |
|------|-------|--------|
| Starter | £170.17/mo | Small businesses/startups |
| Growth | £422.88/mo | Midlevel businesses |
| Pro | £1,520.00/mo | Large businesses/enterprises |
| Yearly-Premium | TBD | Premium + extra perks |

### Payment Links
- GoCardless integration for payments

### Key CTAs
- "Get Free Consultation" → strategy meeting booking
- "Book A Free Demo" → strategy meeting booking
- "Get Started Now" → pricing page
- "Start Automating Today!" → GoCardless payment links

### Stats Displayed
- 10+ businesses
- 20+ customers
- 50+ leads
- 800+ conversations

---

## Go High Level Integration Research

### Integration Options
1. **Form Embedding** — Inline, Popup, Sticky Sidebar, Polite Slide-In
   - Copy embed code from GHL → paste HTML into site
   - Works with any static site
2. **API v2** — OAuth 2.0 authentication
   - Endpoints: Get Forms, Get Submissions, Upload Files
   - Rate limits: 100 req/10s burst, 200K/day
3. **Calendar/Booking** — Can embed GHL calendars
4. **Chat Widget** — Can embed GHL chat widget

### Recommended Approach
- Embed GHL forms/calendars via iframe embed codes
- Embed GHL chat widget for live support
- No need for complex API integration for a marketing website
- GHL handles the backend CRM/automation; website is the frontend

---

## Design Research — Competitive Benchmarks
- Premium dark theme is standard for AI/tech agencies
- Micro-animations and scroll-triggered effects are expected
- Particle backgrounds / animated gradients add depth
- Interactive pricing toggles improve engagement
- Testimonial carousels build trust
- Stats with count-up animations create impact
