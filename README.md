# LUX MEDIA - Premium Marketing Agency Website

A bespoke, high-performance website designed to elevate brand perception and drive enterprise lead generation for LUX MEDIA.

## 🎯 **Project Overview**

**Brand:** LUX MEDIA  
**Industry:** Marketing Agency  
**Target:** Enterprise clients seeking premium brand transformation  
**Goal:** Convert template-level site into $50K+ premium experience  

## 🏗️ **Architecture & Tech Stack**

### **Core Technologies**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom design tokens
- **Animations:** Framer Motion with premium easing curves
- **Forms:** React Hook Form + Zod validation
- **UI Components:** shadcn/ui primitives
- **Performance:** Next.js Image optimization, edge caching

### **Design System**
- **Typography:** Fluid responsive scale (1.125 ratio)
- **Colors:** Tokenized palette with semantic roles
- **Spacing:** 8px base unit system
- **Motion:** Custom easing functions and spring presets
- **Accessibility:** WCAG 2.2 AA compliance

## 🎨 **Design System Implementation**

### **Typography Scale**
```css
/* Fluid typography using clamp() */
.text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
.text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
.text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem)
.text-6xl: clamp(3.5rem, 2.9rem + 3vw, 5.5rem)
```

### **Color Palette**
```typescript
// Primary brand colors
primary: {
  500: '#f0c23d', // Main gold
  600: '#e6a81f', // Darker gold
}

// Semantic colors
success: { 500: '#22c55e' }
warning: { 500: '#f59e0b' }
error: { 500: '#ef4444' }
```

### **Motion Tokens**
```typescript
// Custom easing functions
easing: {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
}
```

## 🧩 **Premium Components**

### **1. SiteHeader**
- **Features:** Sticky navigation, mega-menu, scroll state
- **Interactions:** Hover intent, smooth transitions
- **Accessibility:** Keyboard navigation, ARIA labels

```tsx
<SiteHeader />
```

### **2. HeroShowcase**
- **Features:** Cinematic video background, fluid typography
- **Animations:** Parallax scroll, staggered reveals
- **Performance:** Optimized video loading

```tsx
<HeroShowcase
  headline="We Don't Sell Services. We Sell Outcomes."
  subheadline="Strategy-led creative and digital experiences..."
  primaryCTA="Book Your Discovery Call"
  secondaryCTA="See Results"
/>
```

### **3. ServicesAccordion**
- **Features:** Horizontal scrolling cards, hero card system
- **Interactions:** Navigation arrows, card transitions
- **Layout:** Responsive grid with featured items

```tsx
<ServicesAccordion className="bg-foreground/[0.02]" />
```

### **4. FooterCTA**
- **Features:** Newsletter signup, lead magnet
- **Conversion:** Multi-step form, success states
- **Design:** Premium gradients, backdrop blur

```tsx
<FooterCTA
  title="Ready to transform your brand?"
  leadMagnetTitle="Free Growth Audit Template"
/>
```

## 🚀 **Performance Optimization**

### **Target Metrics**
- **LCP:** < 2.0s
- **CLS:** < 0.05
- **Lighthouse:** ≥ 95
- **Core Web Vitals:** All green

### **Optimization Strategies**
1. **Image Optimization:** Next.js Image with responsive sources
2. **Font Loading:** Display swap, subset fonts
3. **Code Splitting:** Dynamic imports for heavy components
4. **Caching:** Edge caching, static generation
5. **Bundle Analysis:** Tree shaking, code splitting

### **Performance Checklist**
- [ ] All images use `next/image` with proper sizing
- [ ] Fonts loaded with `display=swap`
- [ ] Critical CSS inlined
- [ ] Non-critical CSS deferred
- [ ] JavaScript bundles optimized
- [ ] Third-party scripts loaded efficiently

## ♿ **Accessibility Implementation**

### **WCAG 2.2 AA Compliance**
- **Color Contrast:** Minimum 4.5:1 ratio
- **Focus States:** Visible focus indicators
- **Keyboard Navigation:** Full keyboard support
- **Screen Readers:** Semantic HTML, ARIA labels
- **Motion:** Respects `prefers-reduced-motion`

### **Accessibility Checklist**
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text for all images
- [ ] Focus management
- [ ] Color contrast validation
- [ ] Screen reader testing

## 📱 **Responsive Design**

### **Breakpoint Strategy**
```typescript
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet portrait
lg: '1024px'  // Tablet landscape
xl: '1280px'  // Desktop
2xl: '1536px' // Large desktop
```

### **Container Queries**
- **Mobile-first approach**
- **Fluid typography scaling**
- **Responsive component behavior**
- **Touch-friendly interactions**

## 🎯 **Conversion Strategy**

### **Primary CTAs**
1. **"Book Your Discovery Call"** - Main conversion
2. **"Request Proposal"** - Enterprise leads
3. **"Download Template"** - Lead magnet

### **Lead Magnet Funnel**
1. **Awareness:** Hero showcase, case studies
2. **Interest:** Service details, testimonials
3. **Consideration:** Lead magnet download
4. **Conversion:** Discovery call booking

### **Social Proof Elements**
- Client logos carousel
- Case study results
- Testimonial videos
- Trust indicators

## 🔧 **Development Setup**

### **Installation (Vercel-aligned)**
```bash
# Node version
corepack enable                  # enables pnpm via Corepack
nvm use 20 || fnm use 20 || volta pin node@20

# Install dependencies with pnpm
pnpm install

# Install Vercel CLI locally (already in devDependencies)
pnpm dlx vercel@latest --version | cat   # optional check

# Start the development server (matches Vercel runtime)
pnpm dev   # runs: vercel dev
```

### **Environment Variables**
- Create a `.env.local` file at the project root. Example values:
  ```env
  NEXT_PUBLIC_SITE_URL=http://localhost:3000
  NEXT_PUBLIC_GA_ID=
  CALENDLY_URL=
  HUBSPOT_PORTAL_ID=
  ```
  `.env.local` is git-ignored and respected by `vercel dev`.

### **Available Scripts**
```bash
pnpm dev    # vercel dev (Edge + Serverless emulation)
pnpm build  # next build
pnpm start  # next start
pnpm lint   # next lint
```

## 📊 **Analytics & Tracking**

### **Google Analytics 4**
- Page view tracking
- Event tracking (CTA clicks, form submissions)
- Conversion funnel analysis
- User behavior insights

### **Conversion Tracking**
- Lead magnet downloads
- Discovery call bookings
- Newsletter signups
- Case study views

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push
4. Uses Node 20 runtime by default; this project matches that locally

### **Performance Monitoring**
- Vercel Analytics
- Core Web Vitals tracking
- Error monitoring
- Uptime monitoring

## 📈 **SEO Implementation**

### **Meta Tags**
- Dynamic title and description
- Open Graph images
- Twitter Card optimization
- Structured data markup

### **Technical SEO**
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Schema.org markup

## 🔮 **Future Enhancements**

### **Phase 2 Features**
- [ ] AI chat integration
- [ ] Multi-step lead forms
- [ ] ROI calculator
- [ ] Case study filter system
- [ ] Internationalization

### **Phase 3 Features**
- [ ] Personalization engine
- [ ] Advanced analytics
- [ ] A/B testing framework
- [ ] CRM integration
- [ ] Marketing automation

## 📞 **Support & Maintenance**

### **Regular Maintenance**
- Monthly performance audits
- Security updates
- Content updates
- Analytics review

### **Contact**
For technical support or questions:
- **Email:** dev@luxmedia.com
- **Documentation:** [docs.luxmedia.com](https://docs.luxmedia.com)

---

**Built with ❤️ for LUX MEDIA**  
*Transforming brands through strategic digital experiences*
