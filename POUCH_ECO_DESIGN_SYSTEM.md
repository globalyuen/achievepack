# Pouch.eco Design System

**Inspired by:** denterity.com  
**Brand Positioning:** B2C, Friendly, Approachable, Modern  
**Last Updated:** 2025-01-30

---

## 🎨 Color Palette

### Primary Colors (Eco Green Family)
```css
--pouch-primary: #10b981;           /* Emerald green - Main brand color */
--pouch-primary-light: #6ee7b7;     /* Light emerald - Hover states */
--pouch-primary-pastel: #D1FAE5;    /* Pastel mint - Backgrounds */
--pouch-primary-dark: #059669;      /* Dark emerald - Active states */
```

### Secondary Colors (Pastel Accents - from Denterity)
```css
--pouch-secondary: #A8D8EA;         /* Sky blue - Headers, highlights */
--pouch-accent-pink: #FFD1DC;       /* Pastel pink - Cards, badges */
--pouch-accent-yellow: #FFF4D6;     /* Pastel yellow - Alerts, badges */
--pouch-accent-lavender: #E0C3FC;   /* Pastel lavender - Decorations */
```

### Neutral Colors
```css
--pouch-bg-primary: #FDFCFA;        /* Off-white background */
--pouch-bg-surface: #FFFFFF;        /* Card surface */
--pouch-text-primary: #1F2937;      /* Main text */
--pouch-text-secondary: #6B7280;    /* Secondary text */
--pouch-text-tertiary: #9CA3AF;     /* Tertiary text */
--pouch-border: #E5E7EB;            /* Borders */
```

### Gradient Presets
```css
--pouch-gradient-hero: linear-gradient(135deg, #FDFCFA 0%, #D1FAE5 50%, #A8D8EA 100%);
--pouch-gradient-card-green: linear-gradient(135deg, #D1FAE5 0%, #6ee7b7 100%);
--pouch-gradient-card-pink: linear-gradient(135deg, #FFD1DC 0%, #FFF4D6 100%);
--pouch-gradient-card-blue: linear-gradient(135deg, #A8D8EA 0%, #E0C3FC 100%);
```

---

## 🔤 Typography

### Font Families
```css
--pouch-font-heading: 'Poppins', 'DM Sans', sans-serif;     /* Rounded, friendly */
--pouch-font-body: 'DM Sans', 'Inter', sans-serif;          /* Clean, readable */
--pouch-font-handwriting: 'Caveat', cursive;                /* For special emphasis */
```

### Font Sizes
```css
/* Desktop */
--pouch-text-hero: 3.75rem;      /* 60px - Hero headlines */
--pouch-text-h1: 3rem;           /* 48px */
--pouch-text-h2: 2.25rem;        /* 36px */
--pouch-text-h3: 1.875rem;       /* 30px */
--pouch-text-h4: 1.5rem;         /* 24px */
--pouch-text-body-lg: 1.25rem;   /* 20px */
--pouch-text-body: 1rem;         /* 16px */
--pouch-text-sm: 0.875rem;       /* 14px */
--pouch-text-xs: 0.75rem;        /* 12px */

/* Mobile (scale down 20%) */
--pouch-text-hero-mobile: 3rem;
--pouch-text-h1-mobile: 2.5rem;
--pouch-text-h2-mobile: 1.875rem;
```

### Font Weights
```css
--pouch-font-normal: 400;
--pouch-font-medium: 500;
--pouch-font-semibold: 600;
--pouch-font-bold: 700;
--pouch-font-extrabold: 800;
```

---

## 📐 Spacing System

### Base Unit: 4px
```css
--pouch-space-1: 0.25rem;   /* 4px */
--pouch-space-2: 0.5rem;    /* 8px */
--pouch-space-3: 0.75rem;   /* 12px */
--pouch-space-4: 1rem;      /* 16px */
--pouch-space-5: 1.25rem;   /* 20px */
--pouch-space-6: 1.5rem;    /* 24px */
--pouch-space-8: 2rem;      /* 32px */
--pouch-space-10: 2.5rem;   /* 40px */
--pouch-space-12: 3rem;     /* 48px */
--pouch-space-16: 4rem;     /* 64px */
--pouch-space-20: 5rem;     /* 80px */
--pouch-space-24: 6rem;     /* 96px */
```

---

## 🔘 Border Radius

### Rounded Corners (Key to Denterity Style)
```css
--pouch-radius-sm: 0.5rem;      /* 8px - Small elements */
--pouch-radius-md: 1rem;        /* 16px - Cards, buttons */
--pouch-radius-lg: 1.5rem;      /* 24px - Large cards */
--pouch-radius-xl: 2rem;        /* 32px - Hero sections */
--pouch-radius-full: 9999px;    /* Pill buttons */
```

---

## 💫 Shadows

### Soft, Elevated Shadows (Denterity Style)
```css
--pouch-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--pouch-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
--pouch-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
--pouch-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
--pouch-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
```

---

## 🎭 Decorative Elements

### 1. Burst Illustrations (SVG)
**Purpose:** Add playfulness to hero sections and backgrounds  
**Colors:** Use primary-pastel, accent-pink, accent-yellow  
**Placement:** Top-right, bottom-left corners  
**Animation:** Gentle pulse (4s infinite)

### 2. Squiggly Lines
**Purpose:** Section dividers, decorative accents  
**Style:** Hand-drawn feel, 3px stroke  
**Colors:** Secondary blue, accent lavender  
**Placement:** Between sections, near headlines

### 3. Floating Elements
**Purpose:** Product showcase, feature highlights  
**Animation:** Float up/down (3s ease-in-out)  
**Examples:** Product images, icons, badges

### 4. Gradient Backgrounds
**Purpose:** Section differentiation  
**Style:** Soft, multi-color gradients  
**Transition:** Smooth, 45-135 degree angles

---

## 🎪 Component Patterns

### 1. Hero Section
```
Structure:
- Full-width gradient background
- 2-column layout (text left, image right)
- Large headline (60px) + subheadline (20px)
- 2 CTA buttons (primary + secondary)
- Decorative burst elements (2-3)
- Floating product images (optional)

Background: --pouch-gradient-hero
Padding: 80px vertical
```

### 2. Product Card
```
Structure:
- Rounded corners (24px)
- Gradient background (rotate per card)
- Product image on pastel background
- Product name (bold, 20px)
- Short description (14px)
- Price (24px bold)
- Color selector (circles)
- "Add to Cart" button (pill shape)

Shadow: --pouch-shadow-lg
Hover: Scale 1.02, shadow-xl
```

### 3. Feature Section
```
Structure:
- Alternating layout (left/right)
- Large icon or image
- Headline (36px)
- Body text (18px)
- Optional CTA
- Decorative squiggly line

Spacing: 64px between features
Background: Alternating white/pastel
```

### 4. CTA Button
```
Primary Style:
- Background: --pouch-primary
- Text: White, semibold
- Padding: 16px 32px
- Border-radius: full (pill)
- Shadow: lg
- Hover: Scale 1.05, shadow-xl

Secondary Style:
- Background: Transparent
- Border: 2px solid gray-300
- Hover: Border primary, text primary
```

### 5. Badge/Tag
```
Style:
- Small rounded rectangle (8px radius)
- Pastel background (pink/yellow/lavender)
- Small text (12px, medium weight)
- Padding: 6px 12px

Use Cases:
- "FREE Shipping"
- "New"
- "Limited Edition"
- "Bestseller"
```

---

## 🎬 Animations

### 1. Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
Duration: 3s
Easing: ease-in-out
```

### 2. Pulse Soft
```css
@keyframes pulse-soft {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
Duration: 4s
Easing: ease-in-out
```

### 3. Scale Hover
```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
hover: transform: scale(1.05);
```

### 4. Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 0.6s
Easing: ease-out
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
--pouch-bp-sm: 640px;   /* Small devices */
--pouch-bp-md: 768px;   /* Tablets */
--pouch-bp-lg: 1024px;  /* Laptops */
--pouch-bp-xl: 1280px;  /* Desktops */
--pouch-bp-2xl: 1536px; /* Large desktops */
```

### Mobile Adjustments
- Reduce font sizes by 20%
- Stack grid layouts vertically
- Increase button touch targets (min 44px)
- Simplify decorative elements
- Single column layouts

---

## 🎯 Key Design Principles

### 1. Soft & Approachable
- Use pastel colors, not bright/neon
- Round corners everywhere (16px+)
- Gentle shadows, never harsh
- Friendly, conversational copy

### 2. Breathing Space
- Generous padding (32px+)
- Large gaps between elements (24px+)
- Don't crowd the layout
- Let content breathe

### 3. Playful Details
- Decorative illustrations
- Subtle animations
- Unexpected color combinations
- Hand-drawn elements

### 4. Clear Hierarchy
- Bold headlines
- Clear CTAs
- Visual separation between sections
- Consistent spacing rhythm

### 5. Product-Focused
- Large, beautiful product images
- Clean backgrounds
- Highlight features visually
- Show products in context

---

## 🚫 What NOT to Do

❌ **Don't use:**
- Harsh, bright neon colors
- Sharp corners (< 8px radius)
- Heavy, dark shadows
- Corporate/formal language
- Cluttered layouts
- Too many competing CTAs
- Stock photos with people
- Complex backgrounds behind products

✅ **Do use:**
- Soft pastel colors
- Rounded corners (16px+)
- Light, elevated shadows
- Friendly, casual language
- Spacious layouts
- 1-2 clear CTAs per section
- Product-only photography
- Clean gradient backgrounds

---

## 📋 Implementation Checklist

### Phase 1: Foundation
- [ ] Add DM Sans & Poppins fonts
- [ ] Create CSS variables for colors
- [ ] Setup Tailwind theme extension
- [ ] Create SVG decoration library

### Phase 2: Core Components
- [ ] Hero section component
- [ ] Product card component
- [ ] CTA button component
- [ ] Feature section component
- [ ] Badge component

### Phase 3: Decorative Elements
- [ ] Burst SVG illustrations (3 colors)
- [ ] Squiggly line SVGs
- [ ] Animation utilities
- [ ] Gradient backgrounds

### Phase 4: Pages
- [ ] Homepage redesign
- [ ] Product catalog page
- [ ] Product detail page
- [ ] About page

### Phase 5: Polish
- [ ] Mobile optimization
- [ ] Animation fine-tuning
- [ ] Performance optimization
- [ ] A/B test with users

---

## 🎨 Design File References

### Figma/Design Tools
- Main color palette swatches
- Component library
- Page mockups
- Responsive layouts

### Asset Library
```
/public/
├── decorations/
│   ├── burst-green.svg
│   ├── burst-pink.svg
│   ├── burst-yellow.svg
│   ├── squiggle-blue.svg
│   └── squiggle-lavender.svg
├── products/
│   └── (Product images with transparent/gradient backgrounds)
└── icons/
    └── (Outline style icons)
```

---

## 📞 Design Review Process

**Before implementing a new page:**
1. Review this design system
2. Check color usage (primary/accent ratio)
3. Verify border radius (16px minimum)
4. Ensure sufficient spacing (32px+ sections)
5. Test on mobile (stack properly)

**Design Review Checklist:**
- [ ] Uses approved color palette
- [ ] Rounded corners (16px+)
- [ ] Soft shadows (not harsh)
- [ ] Friendly, casual copy
- [ ] Spacious layout (not cramped)
- [ ] Clear visual hierarchy
- [ ] Mobile-responsive
- [ ] Accessible (WCAG AA)

---

## 📝 Version History

- **v1.0** (2025-01-30): Initial design system based on Denterity.com inspiration
- Future updates will be logged here

---

**Remember:** pouch.eco should feel like a friendly neighborhood packaging shop — welcoming, modern, and approachable, not corporate or overly serious. Every design decision should support this brand personality.
