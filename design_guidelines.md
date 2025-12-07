# Design Guidelines: Modern Cash Home Buyer Landing Page

## Design Approach
**Reference-Based Approach**: Modern real estate tech (Opendoor, Zillow Offers) meets contemporary SaaS aesthetics (Stripe, Linear) - professional, trustworthy, conversion-optimized with clean minimalism that avoids traditional real estate investor "we buy ugly houses" aesthetic.

## Typography
- **Primary Font**: Inter or Manrope from Google Fonts
- **Hierarchy**:
  - H1: Bold, 3xl-5xl (Hero only, single instance)
  - H2: Semibold, 2xl-4xl (Section headings)
  - H3: Semibold, xl-2xl (Subsections, cards)
  - Body: Regular, base-lg
  - Small text: Regular, sm (disclaimers, captions)

## Layout System
- **Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-6, etc.)
- **Container**: max-w-7xl with px-4 to px-8 padding
- **Section Padding**: py-16 to py-24 (desktop), py-12 (mobile)
- **Grid Patterns**: 
  - 3-column for situations grid (1 col mobile, 2 tablet, 3 desktop)
  - 2-column for comparison section
  - Single column for forms with max-w-2xl

## Color Strategy (Placeholder References - Colors TBD)
- Professional blues/teals for primary elements
- Warm orange/green for CTAs and conversion points
- Neutral grays for backgrounds and text
- Gradient overlays on hero imagery
- Glassmorphism effects (backdrop-blur) on cards over images

## Component Library

### Header
- Sticky navigation with logo, minimal links (How It Works, Contact, Phone)
- Smooth scroll behavior with background transition on scroll
- Mobile: Hamburger menu
- Phone number prominently displayed with call icon

### Hero Section (Full viewport ~80-90vh)
- **Image**: High-quality modern home exterior or happy homeowner, subtle gradient overlay
- Headline + subheadline with trust messaging
- Lead capture form (3 fields: Address, Phone, Email) with floating labels
- Trust badges row (Fox, NBC, ABC, CBS logos) - grayscale with subtle opacity
- Primary CTA button with blur background over image

### How It Works (3-Step Process)
- Horizontal timeline on desktop, vertical on mobile
- Animated step indicators (numbered circles with connecting lines)
- Icons for each step (contact, document, handshake)
- Brief description under each step
- Use intersection observer for reveal animations (fade-up)

### Benefits Comparison
- Two-column table/grid layout
- Left: "Our Process" (green checkmarks, positive framing)
- Right: "Traditional Real Estate" (red X marks, negative framing)
- 6-8 comparison points
- Card-based design with subtle borders

### Situations Grid
- 8 cards in responsive grid (2x4 desktop, 2x2 tablet, 1 col mobile)
- Icon + title + brief description per card
- Icons: Heroicons (home, users, wrench, clock, currency, truck, etc.)
- Hover lift effect (translate-y subtle)
- Cards with light background, rounded corners

### Testimonials Carousel
- 3-4 testimonial cards
- Each card: Quote, name, location, star rating, verified badge
- Auto-rotating carousel with manual controls
- Avatar images (circular, 64px)
- Quotation marks styling

### About/Trust Section
- Split layout: Content + supporting visual/stats
- Stat counters with animated numbers (count-up effect)
- "Trusted Since [Year]", "X Homes Purchased", "X+ Happy Sellers"
- Professional team image or handshake visual

### Final CTA Section
- Urgency messaging ("Get Your Offer Today")
- Duplicate lead form or simplified version
- Large phone number with click-to-call
- Background with subtle pattern or gradient

### Footer
- 3-column layout (desktop), stacked (mobile)
- Column 1: Logo + company description
- Column 2: Quick links (How It Works, FAQ, Privacy, Blog)
- Column 3: Contact info + social icons
- Copyright + compliance disclaimers

## Forms Design
- Floating label inputs (label moves up on focus/fill)
- Phone number auto-formatting (XXX) XXX-XXXX
- Real-time validation with inline error messages
- Loading spinner on submit
- Success state with checkmark animation
- Input fields: border-2, rounded-lg, px-4, py-3
- Focus states with ring offset

## Animations (Framer Motion)
- **Scroll Animations**: Fade-in-up for sections (stagger children)
- **Counters**: Animate numbers counting up when in view
- **Carousel**: Smooth slide transitions
- **Hover**: Subtle scale (1.02) and shadow increase on cards
- **Form**: Success checkmark bounce-in
- **CTA Buttons**: Pulse effect (subtle, 2s loop)
- Keep animations subtle - enhance, don't distract

## Images Specification
- **Hero Image**: Modern single-family home exterior, professional photography, sunny day, well-maintained property (1920x1080, optimized)
- **About Section**: Professional handshake or team photo (1200x800)
- **Trust Badges**: Official Fox, NBC, ABC, CBS logos (SVG format, grayscale)
- **Testimonial Avatars**: Circular headshots, 128x128 minimum
- All images: Next.js Image component, lazy load below fold, descriptive alt text

## Responsive Behavior
- **Mobile (<768px)**: Single column, stacked sections, full-width forms, sticky phone CTA button (bottom fixed)
- **Tablet (768px-1024px)**: 2-column grids, larger spacing
- **Desktop (>1024px)**: Full multi-column layouts, expanded hero, larger typography

## SEO & Semantic Structure
- Proper heading hierarchy (single H1 in hero)
- Semantic HTML5: header, nav, main, section, article, footer
- All forms with proper labels and ARIA attributes
- Schema markup: LocalBusiness, Organization, AggregateRating
- Alt text for all images (keyword-rich, descriptive)

## Trust & Conversion Elements
- Multiple CTAs (hero, mid-page, footer) - no single CTA
- Social proof throughout (badges, testimonials, stats)
- Phone number visible in header + sticky mobile button
- "No obligation" messaging near forms
- Progress indicators for multi-step interactions