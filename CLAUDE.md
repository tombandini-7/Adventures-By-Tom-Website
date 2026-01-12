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
src/          → Application code
tests/        → Test files
config/       → Configuration
docs/         → Documentation
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

**Colors:**
- Primary: Aqua (#00B4D8), Magenta (#E63946)
- Accent: Yellow (#FFD60A), Ocean Blue (#023E8A), Sky (#CAF0F8)

**Typography:**
- Headings: Montserrat (sans-serif)
- Body: Inter (sans-serif)

**Key Design Rules:**
1. CTA buttons: WHITE text on magenta/aqua backgrounds
2. Navigation: White text, yellow hover state
3. Icons: Direct color on icons - never use background circles/shapes behind icons
4. Hero overlay: Strong dark gradient for text readability
5. Tom's photo: Use `object-top` to prevent head cropping

**Button Classes:** `.btn-primary`, `.btn-secondary`, `.btn-outline`

## External Dependencies

- **Quote Form:** All "Get a Free Quote" CTAs link to `https://tinyurl.com/advbytom` (opens in new tab)
- **Assets:** Centralized in `src/constants/assets.ts` - use `ASSETS` object or `getDestinationImage()` helper
  - Logos, team photos, cruise lines, theme parks, destinations
  - All hosted on Supabase CDN

## Contact Info

- Email: tom@magicalparkvacations.com
- Phone: (585) 754-5434
