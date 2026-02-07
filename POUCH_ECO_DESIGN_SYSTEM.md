# Pouch.eco Design System

**Inspired by:** AchievePack Pet Demo (Neo-Brutalist Style)  
**Brand Positioning:** B2C, Bold, Modern, Tech-Forward  
**Last Updated:** 2025-01-30

---

## 🎨 Color Palette (Neo-Brutalist)

### Primary Colors (High Contrast)
```css
--pouch-primary: #D4FF00;           /* Neon Yellow - Main brand color */
--pouch-primary-bright: #FFFF00;    /* Bright Yellow - Highlights */
--pouch-primary-dark: #B8DC00;      /* Dark Yellow - Hover states */
--pouch-black: #000000;             /* Pure Black - Borders, text */
```

### Secondary Colors (Vibrant Tech)
```css
--pouch-cyan: #00FFFF;              /* Electric Cyan - Accents */
--pouch-magenta: #FF00FF;           /* Vivid Magenta - Cards, badges */
--pouch-red: #FF4D4D;               /* Bright Red - Alerts, emphasis */
--pouch-green: #10b981;             /* Eco Green - Sustainability focus */
```

### Neutral Colors
```css
--pouch-bg-primary: #F0F0F0;        /* Light gray background */
--pouch-bg-surface: #FFFFFF;        /* White card surface */
--pouch-text-primary: #000000;      /* Black text */
--pouch-text-secondary: #333333;    /* Dark gray text */
--pouch-border: #000000;            /* Black borders (4px default) */
```

### Background Patterns
```css
--pouch-dot-grid: radial-gradient(#000 1px, transparent 1px);
--pouch-dot-size: 20px 20px;
--pouch-texture: url('https://www.transparenttextures.com/patterns/diagmonds-light.png');
```

---

## 🔤 Typography (Neo-Brutalist)

### Font Families
```css
--pouch-font-display: 'Space Grotesk', 'Inter', sans-serif;    /* Bold headlines */
--pouch-font-mono: 'JetBrains Mono', 'Courier New', monospace; /* Technical text */
--pouch-font-body: 'Space Grotesk', sans-serif;                /* Body text */
```

**Import Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### Font Sizes & Weights
```css
/* Headlines - BOLD & BLACK */
--pouch-text-mega: 8rem;         /* 128px - Hero headlines */
--pouch-text-hero: 6rem;         /* 96px - Section headlines */
--pouch-text-h1: 4rem;           /* 64px */
--pouch-text-h2: 3rem;           /* 48px */
--pouch-text-h3: 2rem;           /* 32px */

/* Body - MONO & BOLD */
--pouch-text-body-lg: 1.25rem;   /* 20px */
--pouch-text-body: 1rem;         /* 16px */
--pouch-text-sm: 0.875rem;       /* 14px */
--pouch-text-xs: 0.75rem;        /* 12px */

/* Weights */
--pouch-font-black: 900;         /* Headlines */
--pouch-font-bold: 700;          /* Sub-heads, mono text */
--pouch-font-regular: 400;       /* Body text */
```

### Typography Rules
- **Headlines:** ALWAYS UPPERCASE, font-black (900)
- **Mono Text:** Used for technical info, stats, labels
- **Tracking:** Wide letter-spacing (`tracking-widest`) for emphasis
- **Line Height:** Tight (0.9) for headlines, relaxed (1.6) for body

---

## 📐 Spacing System (Grid-Based)

### Base Unit: 4px
```css
--pouch-space-1: 0.25rem;   /* 4px */
--pouch-space-2: 0.5rem;    /* 8px */
--pouch-space-3: 0.75rem;   /* 12px */
--pouch-space-4: 1rem;      /* 16px */
--pouch-space-6: 1.5rem;    /* 24px */
--pouch-space-8: 2rem;      /* 32px */
--pouch-space-12: 3rem;     /* 48px */
--pouch-space-16: 4rem;     /* 64px */
--pouch-space-24: 6rem;     /* 96px */
```

**Neo-Brutalist Spacing:**
- Large gaps between sections (64-96px)
- Generous padding in cards (32px)
- Tight spacing in grids (8px)

---

## 🔘 Border & Shadow System (Hard Edges)

### Borders (THICK & BLACK)
```css
--pouch-border-thin: 2px solid #000;
--pouch-border-default: 4px solid #000;
--pouch-border-thick: 8px solid #000;
--pouch-border-radius: 0;               /* NO ROUNDED CORNERS */
```

### Shadows (Hard Drop Shadows)
```css
/* Neo-Brutalist Shadows - Offset, No Blur */
--pouch-shadow-sm: 4px 4px 0px 0px rgba(0,0,0,1);
--pouch-shadow-md: 8px 8px 0px 0px rgba(0,0,0,1);
--pouch-shadow-lg: 12px 12px 0px 0px rgba(0,0,0,1);
--pouch-shadow-xl: 16px 16px 0px 0px rgba(0,0,0,1);

/* Colored Shadows */
--pouch-shadow-yellow: 8px 8px 0px 0px #D4FF00;
--pouch-shadow-cyan: 8px 8px 0px 0px #00FFFF;
--pouch-shadow-magenta: 8px 8px 0px 0px #FF00FF;
```

**Key Principle:** Sharp, geometric shadows with NO blur or fade

---

## 🎭 Component Patterns (Neo-Brutalist)

### 1. NeoButton
```typescript
// Primary Yellow Button
className="
  relative px-8 py-4 
  font-black uppercase tracking-widest 
  border-4 border-black 
  bg-[#D4FF00] text-black 
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
  hover:-translate-y-1 hover:-translate-x-1
  active:translate-x-1 active:translate-y-1
  transition-all
"

// Secondary White Button
className="
  bg-white text-black 
  border-4 border-black
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
"

// Dark Button
className="
  bg-black text-[#D4FF00] 
  border-4 border-[#D4FF00]
  hover:shadow-[8px_8px_0px_0px_#D4FF00]
"
```

### 2. NeoCard
```typescript
className="
  border-4 border-black 
  p-8 
  shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
  bg-white
  transition-transform 
  hover:translate-x-[-2px] hover:translate-y-[-2px] 
  hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]
"
```

### 3. NeoBadge
```typescript
className="
  inline-block px-3 py-1 
  text-xs font-black uppercase 
  border-2 border-black 
  bg-[#FF00FF] text-black 
  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
"
```

### 4. Hero Section Pattern
```
Structure:
- Dot grid background pattern
- 2-column layout (text left, visual right)
- Huge headline (96px, font-black, uppercase)
- Mono-spaced body text in bordered box
- Colorful product card with rotation
- Floating decorative elements
- NEW badge with animation

Background: radial-gradient dot pattern
Spacing: 96px vertical padding
```

### 5. Product Card Pattern
```
Structure:
- White card with black border (4px)
- Colored shadow layer (offset background)
- Product image on gray background
- ID badge (top-left, black/white)
- Stats grid (3 columns, bordered)
- Bold uppercase product name
- Mono-spaced description
- Yellow CTA button

Shadow: Dual-layer effect (colored bg + black card)
Hover: Shadow grows, image scales/rotates
```

### 6. Bento Grid Layout
```css
/* Mixed-size grid layout */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.bento-item-large {
  grid-column: span 2; /* 2/3 width */
}

.bento-item-tall {
  grid-row: span 2; /* Double height */
}
```

---

## 🎬 Animations (Bold & Geometric)

### 1. Hard Translate (Signature Move)
```css
/* Button Hover - Lift Effect */
.neo-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
}

.neo-button:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
```

### 2. Rotation Transform
```css
/* Card Tilt */
.tilted-card {
  transform: rotate(2deg);
  transition: transform 0.3s ease;
}

.tilted-card:hover {
  transform: rotate(4deg) scale(1.05);
}
```

### 3. Bounce (NEW Badge)
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.bounce-badge {
  animation: bounce 1s ease-in-out infinite;
}
```

### 4. Float (Product Images)
```typescript
// Framer Motion variant
const floatAnimation = {
  y: [0, -10, 0],
  transition: { 
    duration: 2, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }
}
```

### 5. Scale + Rotate (Product Hover)
```css
.product-image {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image:hover {
  transform: scale(1.1) rotate(3deg);
}
```

**Animation Principles:**
- Sharp, sudden movements (no easing curves)
- Geometric transforms (90°, 180°, not 45°)
- Bold scale changes (1.1x, 1.2x)
- Hard shadows that move with elements

---

## 🎯 Key Design Principles (Neo-Brutalism)

### 1. HIGH CONTRAST
- Pure black (#000) borders everywhere
- Neon yellow (#D4FF00) primary color
- No gradients (except for special effects)
- White or vibrant colored backgrounds

### 2. HARD EDGES
- Zero border-radius (sharp corners only)
- 4px thick borders minimum
- Hard drop shadows (no blur, no fade)
- Geometric shapes (squares, rectangles)

### 3. BOLD TYPOGRAPHY
- Font-black (900 weight) for headlines
- UPPERCASE for emphasis
- Monospace for technical/data display
- Wide letter-spacing (tracking-widest)

### 4. GEOMETRIC LAYOUTS
- Grid-based (Bento grid style)
- Hard alignment (no centered soft layouts)
- Overlapping elements with clear z-index
- Asymmetric but structured

### 5. TECH-FORWARD AESTHETICS
- Dot grid backgrounds
- Monospace labels (ID: WAGYU_X)
- System-style language ("PROTOCOL", "CORE", "MODULE")
- Status indicators and badges

### 6. LAYERED DEPTH
- Card on colored shadow layer
- Overlapping decorative rectangles
- Z-index stacking for visual interest
- Transform: translate for pseudo-3D

---

## 🚫 What NOT to Do (Anti-Patterns)

❌ **Don't use:**
- Rounded corners or curved edges
- Soft, blurred shadows
- Pastel or muted colors
- Gradient backgrounds (except dot patterns)
- Serif or script fonts
- Centered, symmetrical layouts
- Smooth, slow animations
- Organic shapes or illustrations

✅ **Do use:**
- Sharp 90-degree corners
- Hard drop shadows (8px offset, 0 blur)
- Vibrant, saturated colors (neon yellow, cyan, magenta)
- Solid color backgrounds or geometric patterns
- Sans-serif bold fonts (Space Grotesk) + monospace
- Asymmetric, grid-based layouts
- Snappy, geometric animations
- Angular decorative elements

---

## 📋 Implementation Checklist

### Phase 1: Foundation (Week 1)
- [ ] Add Space Grotesk & JetBrains Mono fonts
- [ ] Create CSS variables for neo-brutalist colors
- [ ] Setup 4px border utility classes
- [ ] Create hard shadow utilities

### Phase 2: Core Components (Week 2)
- [ ] NeoButton component (3 variants)
- [ ] NeoCard component
- [ ] NeoBadge component
- [ ] Neo-Hero section component
- [ ] Product card with dual-shadow

### Phase 3: Layouts (Week 3)
- [ ] Bento grid system
- [ ] Dot pattern backgrounds
- [ ] Marquee text component
- [ ] Layered decorative elements

### Phase 4: Pages (Week 4)
- [ ] Homepage redesign
- [ ] Product catalog page
- [ ] Product detail page
- [ ] About page

### Phase 5: Polish (Week 5)
- [ ] Mobile optimization
- [ ] Animation fine-tuning
- [ ] Performance optimization
- [ ] A/B test with users

---

## 🎨 Design File References

### Figma/Design Tools
- Color swatches (neon palette)
- Component library (Neo components)
- Page mockups
- Responsive layouts

### Asset Library
```
/public/
├── patterns/
│   ├── dot-grid.png
│   ├── diagmonds-light.png
│   └── graphy-dark.png
├── products/
│   └── (Product images on colored backgrounds)
└── icons/
    └── (Bold line icons, 2px stroke)
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
--pouch-bp-sm: 640px;   /* Small devices */
--pouch-bp-md: 768px;   /* Tablets */
--pouch-bp-lg: 1024px;  /* Laptops */
--pouch-bp-xl: 1280px;  /* Desktops */
```

### Mobile Adjustments (Neo-Brutalist)
- Keep bold typography (reduce size, not weight)
- Stack grid to single column
- Maintain 4px borders (don't reduce)
- Simplify layered decorations
- Keep hard shadows but reduce offset (4px instead of 8px)
- Ensure 48px minimum touch targets for buttons

---

## 📞 Design Review Process

**Before implementing a new page:**
1. Review this neo-brutalist design system
2. Check color usage (high contrast, neon accents)
3. Verify borders (4px black minimum)
4. Ensure zero border-radius (sharp corners only)
5. Test hard shadow implementation
6. Validate bold typography (font-black for headlines)
7. Check mobile responsiveness

**Design Review Checklist:**
- [ ] Uses neo-brutalist color palette
- [ ] Sharp corners (no border-radius)
- [ ] Hard shadows (no blur)
- [ ] Bold, uppercase headlines
- [ ] High contrast (black borders on everything)
- [ ] Grid-based layout
- [ ] Mobile-responsive
- [ ] Accessible (WCAG AA)

---

## 🎯 Neo-Brutalism vs. Other Styles

### Neo-Brutalism (Pouch.eco - Current)
- ✅ High contrast, neon colors
- ✅ Sharp corners, thick borders
- ✅ Hard shadows, no blur
- ✅ Bold typography, uppercase
- ✅ Tech-forward, geometric

### Brutalism (Original)
- Concrete, raw materials
- Monochrome or muted colors
- Minimal decoration
- Functional over aesthetic

### Minimalism
- Soft colors, lots of white space
- Thin or no borders
- Subtle shadows
- Light typography

### Material Design
- Soft shadows with blur
- Elevation layers
- Rounded corners (8-16px)
- Colorful but not neon

---

## 📝 Version History

- **v2.0** (2025-01-30): Updated to Neo-Brutalist design system (Pet Demo inspired)
- **v1.0** (2025-01-30): Initial design system (Denterity-inspired, deprecated)

---

## 🔗 Reference Links

- **Achieve Pet Demo:** `/free-service/achieve-pet-demo` (Primary reference)
- **Neo-Brutalism Guide:** https://brutalistwebsites.com/
- **Space Grotesk Font:** https://fonts.google.com/specimen/Space+Grotesk
- **JetBrains Mono:** https://fonts.google.com/specimen/JetBrains+Mono

---

**Remember:** pouch.eco should feel like a bold, tech-forward eco packaging brand — modern, geometric, and unapologetically loud. Every design decision should support this brand personality while maintaining the dual-domain SEO independence from achievepack.com.
