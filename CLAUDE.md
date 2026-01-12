# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

### About This Project

This project is a website for my Travel Agency, to highlight what I have to offer to clients, how clients can request a quote, and testamonials from past and current clients as I have helped them plan a vacation.

### Tech Stack

- **Framework:**
React 19 + TypeScript + Vite SPA for a boutique travel advisor (Disney destinations, cruises).
- **Language:**
- **Database:**
- **Other:**
Multi-page marketing site using react-router-dom for client-side routing. No external API calls.

### Key Directories

```
src/
├── components/       → React components (Header, Hero, Footer, etc.)
├── constants/        → Shared constants
│   └── assets.ts     → Centralized asset URLs (ASSETS object)
├── hooks/            → Custom React hooks
│   ├── useScrollAnimation.ts
│   └── useParallax.ts
├── pages/            → Route-based page components
├── App.tsx           → Main app with routing
└── index.css         → Global styles, Tailwind config, design system
tests/                → Test files
config/               → Configuration
docs/                 → Documentation
```
### Build Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript check + Vite production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
npm test          # Testing
```


### Code Style
```tsx
// ✅ Good: Named exports, explicit types
export const fetchUser = async (id: string): Promise<User> => {
  // implementation
}

// ❌ Bad: Default exports, implicit any
export default function(id) { ... }
```
### Workflow

1. Create feature branch from `main`
2. Write tests first
3. Implement feature
4. Open PR with description

### Boundaries

✅ **Always:**

- Run tests before committing
- Use TypeScript strict mode

⚠️ **Ask first:**

- Changes to `/migrations`
- Modifying public APIs

🚫 **Never:**

- Commit secrets or credentials
- Delete failing tests
- Modify `/vendor` directory


### Known Gotchas
- Never use background colors behind icons. Show icons directly without circular/rounded backgrounds. Apply color directly to the icon.


### Component Structure

```
App.tsx
├── PromoBanner   # Dismissible top banner for time-sensitive offers
├── Header        # Fixed nav, mobile hamburger menu, logo (shifts with banner)
├── Hero          # Full-screen parallax, main CTA
├── Promotions    # Auto-rotating carousel with destination images, modal details
├── Destinations  # 9-card grid (4 columns on xl) - Disney, cruises, hotels, etc.
├── About         # Tom's profile, 4 feature benefit cards
├── Testimonials  # 4 reviews in 2x2 grid
├── Contact       # 3 contact cards, CTA
└── Footer        # 4-column layout, social links
```


### Custom Hooks

- `useScrollAnimation()` - Intersection Observer for scroll-triggered fade-in animations
- `useParallax()` - Scroll offset calculation for parallax effects

## Design System (from `src/index.css`)

### Colors

| Category | Name | Hex | Tailwind Class |
|----------|------|-----|----------------|
| Primary | Aqua | #00B4D8 | `bg-aqua`, `text-aqua` |
| Primary | Aqua Light | #48CAE4 | `bg-aqua-light` |
| Primary | Aqua Dark | #0096B4 | `bg-aqua-dark` |
| Primary | Magenta | #E63946 | `bg-magenta`, `text-magenta` |
| Primary | Magenta Light | #EF5A67 | `bg-magenta-light` |
| Primary | Magenta Dark | #C42D39 | `bg-magenta-dark` |
| Secondary | Sky | #CAF0F8 | `bg-sky` |
| Secondary | Sky Light | #E0F7FB | `bg-sky-light` |
| Secondary | Sky Dark | #90E0EF | `bg-sky-dark` |
| Accent | Yellow | #FFD60A | `text-yellow`, `hover:text-yellow` |
| Accent | Ocean | #023E8A | `bg-ocean`, `text-ocean` |
| Accent | Ocean Light | #0353A4 | `bg-ocean-light` |
| Accent | Ocean Dark | #012A5E | `bg-ocean-dark` |

### Typography

- **Headings:** Montserrat → `font-serif` (configured in Tailwind)
- **Body:** Inter → `font-sans`

### Gradients

Four primary gradients for consistent design:

| Gradient | Use Cases | CSS Class | Tailwind |
|----------|-----------|-----------|----------|
| Ocean Flow | Hero sections, headers, navigation | `.gradient-ocean-flow` | `bg-gradient-to-br from-ocean via-ocean-light to-aqua-dark` |
| Warm CTA | Buttons, banners, promotional highlights | `.gradient-warm-cta` | `bg-gradient-to-br from-magenta-dark via-magenta to-magenta-light` |
| Sky Wash | Content cards, feature sections, light backgrounds | `.gradient-sky-wash` | `bg-gradient-to-b from-white to-sky` |
| Vibrant Blend | Card headers, accent sections | `.gradient-vibrant-blend` | `bg-gradient-to-r from-magenta to-ocean` |

### Button Classes

| Class | Use | Behavior |
|-------|-----|----------|
| `.btn-primary` | Primary actions | Aqua bg, white text, lifts on hover |
| `.btn-secondary` | Secondary actions (on dark bg) | Transparent, white border, fills white on hover |
| `.btn-outline` | Outline style (on dark bg) | Same as btn-secondary |

### Key Design Rules

1. **CTA buttons:** Always WHITE text on magenta/aqua backgrounds (enforced in CSS)
2. **Navigation:** White text, yellow hover state
3. **Icons:** Direct color on icons - never use background circles/shapes behind icons (exception: timeline nodes where backgrounds provide visual continuity)
4. **Hero overlay:** Use `from-ocean-dark/50 via-ocean/40 to-ocean-dark/50` for text readability
5. **Tom's photo:** Use `object-top` to prevent head cropping
6. **Accent words:** Use `text-yellow italic` for highlighted text on dark backgrounds

### Reusable CSS Utilities

Located in `src/index.css`:

- `.card-hover` - Lift effect on hover with shadow
- `.animate-on-scroll` + `.visible` - Scroll-triggered fade-in
- `.parallax-bg` - Fixed background parallax effect
- `.carousel-track`, `.carousel-slide`, `.carousel-dot` - Carousel components
- `.promotion-content` - Styled markdown content for promotion modals
- `.logo-animated` - Optimized logo animations

## External Dependencies

- **Quote Form:** All "Get a Free Quote" CTAs link to `https://tinyurl.com/advbytom` (opens in new tab)
- **Assets:** Centralized in `src/constants/assets.ts` - use `ASSETS` object or `getDestinationImage()` helper
  - Logos, team photos, cruise lines, theme parks, destinations
  - All hosted on Supabase CDN

## Contact Info

- Email: tom@magicalparkvacations.com
- Phone: (585) 754-5434
