import React, { useState, useMemo } from 'react';
import { 
  X, Search, Globe, Shield, Sparkles, Leaf, BookOpen, 
  Settings, Layers, ExternalLink, HelpCircle, GraduationCap,
  Award, Heart, Calendar, Zap, LayoutGrid, CheckCircle
} from 'lucide-react';

interface DirectoryItem {
  name: string;
  slug: string;
  category: 'specs' | 'tools' | 'composting' | 'cases' | 'blogs';
  apPath: string;
  epPath: string;
  description: string;
}

interface SearchDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  specs: <Layers className="w-4 h-4 text-blue-500" />,
  tools: <Sparkles className="w-4 h-4 text-amber-500" />,
  composting: <Leaf className="w-4 h-4 text-green-500" />,
  cases: <Award className="w-4 h-4 text-purple-500" />,
  blogs: <BookOpen className="w-4 h-4 text-rose-500" />
};

const DIRECTORY_ITEMS: DirectoryItem[] = [
  // 5. Technical Specifications (Specs)
  {
    name: "Bio-Cello Duplex Clear Spec",
    slug: "/spec/bio-cello-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/bio-cello-duplex-clear",
    epPath: "https://pouch.eco/spec/bio-cello-duplex-clear",
    description: "Clear compostable cellulose double-layer laminate spec sheets."
  },
  {
    name: "Bio-Cello Triplex Highest Spec",
    slug: "/spec/bio-cello-triplex-highest",
    category: "specs",
    apPath: "https://achievepack.com/spec/bio-cello-triplex-highest",
    epPath: "https://pouch.eco/spec/bio-cello-triplex-highest",
    description: "Compostable cellulose triple-layer maximum high-barrier laminate."
  },
  {
    name: "Bio-Cello Triplex Metalised Spec",
    slug: "/spec/bio-cello-triplex-metalised",
    category: "specs",
    apPath: "https://achievepack.com/spec/bio-cello-triplex-metalised",
    epPath: "https://pouch.eco/spec/bio-cello-triplex-metalised",
    description: "Metallized cellulose triple-layer compostable light shielding barrier."
  },
  {
    name: "Bio-Kraft PBAT Low Barrier Spec",
    slug: "/spec/bio-kraft-pbat-low",
    category: "specs",
    apPath: "https://achievepack.com/spec/bio-kraft-pbat-low",
    epPath: "https://pouch.eco/spec/bio-kraft-pbat-low",
    description: "Unbleached kraft compostable PBAT low-barrier flexible spec sheet."
  },
  {
    name: "Bio-Kraft VM-Cello High Barrier Spec",
    slug: "/spec/bio-kraft-vm-cello",
    category: "specs",
    apPath: "https://achievepack.com/spec/bio-kraft-vm-cello",
    epPath: "https://pouch.eco/spec/bio-kraft-vm-cello",
    description: "Premium unbleached kraft metallized compostable high-barrier spec."
  },
  {
    name: "BioPE-Kraft Duplex Low Barrier Spec",
    slug: "/spec/biope-kraft-duplex-low",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-kraft-duplex-low",
    epPath: "https://pouch.eco/spec/biope-kraft-duplex-low",
    description: "Eco-friendly bio-based sugarcane PE and kraft paper laminate."
  },
  {
    name: "BioPE-Kraft VMPET High Spec",
    slug: "/spec/biope-kraft-vmpet",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-kraft-vmpet",
    epPath: "https://pouch.eco/spec/biope-kraft-vmpet",
    description: "Sugarcane BioPE with metallized VMPET high-barrier spec sheet."
  },
  {
    name: "BioPE-PET Duplex Clear Spec",
    slug: "/spec/biope-pet-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-duplex-clear",
    epPath: "https://pouch.eco/spec/biope-pet-duplex-clear",
    description: "Sugarcane bio-based polymer transparent duplex laminate specs."
  },
  {
    name: "BioPE-PET Duplex No Window Spec",
    slug: "/spec/biope-pet-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-duplex-nowindow",
    epPath: "https://pouch.eco/spec/biope-pet-duplex-nowindow",
    description: "Solid opaque BioPE double-layer polymer custom spec sheet."
  },
  {
    name: "BioPE-PET-Kraft Quadlex Aluminum Spec",
    slug: "/spec/biope-pet-kraft-quadlex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-kraft-quadlex-aluminum",
    epPath: "https://pouch.eco/spec/biope-pet-kraft-quadlex-aluminum",
    description: "Four-layer heavy-duty BioPE laminate with pure aluminum core spec."
  },
  {
    name: "BioPE-PET-Kraft Triplex Clear Spec",
    slug: "/spec/biope-pet-kraft-triplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-kraft-triplex-clear",
    epPath: "https://pouch.eco/spec/biope-pet-kraft-triplex-clear",
    description: "Triple-layer clear BioPE with kraft structural backing spec sheet."
  },
  {
    name: "BioPE-PET Triplex Aluminum Spec",
    slug: "/spec/biope-pet-triplex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-triplex-aluminum",
    epPath: "https://pouch.eco/spec/biope-pet-triplex-aluminum",
    description: "Three-layer sugarcane BioPE with ultimate pure aluminum shield spec."
  },
  {
    name: "BioPE-PET Triplex Metalised Spec",
    slug: "/spec/biope-pet-triplex-metalised",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pet-triplex-metalised",
    epPath: "https://pouch.eco/spec/biope-pet-triplex-metalised",
    description: "Three-layer BioPE with high-potency metallized shielding spec sheet."
  },
  {
    name: "BioPE-PP Duplex Clear Spec",
    slug: "/spec/biope-pp-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-duplex-clear",
    epPath: "https://pouch.eco/spec/biope-pp-duplex-clear",
    description: "Sugarcane polymer double-layer polypropylene clear packaging spec."
  },
  {
    name: "BioPE-PP Duplex No Window Spec",
    slug: "/spec/biope-pp-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-duplex-nowindow",
    epPath: "https://pouch.eco/spec/biope-pp-duplex-nowindow",
    description: "Solid opaque BioPE/PP hybrid flexible double-layer spec."
  },
  {
    name: "BioPE-PP-Kraft Quadlex Aluminum Spec",
    slug: "/spec/biope-pp-kraft-quadlex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-kraft-quadlex-aluminum",
    epPath: "https://pouch.eco/spec/biope-pp-kraft-quadlex-aluminum",
    description: "Four-layer BioPE/PP hybrid with aluminum core heavy-duty specs."
  },
  {
    name: "BioPE-PP-Kraft Triplex Clear Spec",
    slug: "/spec/biope-pp-kraft-triplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-kraft-triplex-clear",
    epPath: "https://pouch.eco/spec/biope-pp-kraft-triplex-clear",
    description: "Triple-layer clear BioPE/PP sugarcane kraft structure spec sheet."
  },
  {
    name: "BioPE-PP Triplex Aluminum Spec",
    slug: "/spec/biope-pp-triplex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-triplex-aluminum",
    epPath: "https://pouch.eco/spec/biope-pp-triplex-aluminum",
    description: "Three-layer BioPE/PP with pure aluminum absolute protection spec."
  },
  {
    name: "BioPE-PP Triplex Metalised Spec",
    slug: "/spec/biope-pp-triplex-metalised",
    category: "specs",
    apPath: "https://achievepack.com/spec/biope-pp-triplex-metalised",
    epPath: "https://pouch.eco/spec/biope-pp-triplex-metalised",
    description: "Three-layer BioPE/PP sugarcane metallized high-barrier spec sheet."
  },
  {
    name: "Mono-PE Duplex Clear Recyclable Spec",
    slug: "/spec/mono-pe-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/mono-pe-duplex-clear",
    epPath: "https://pouch.eco/spec/mono-pe-duplex-clear",
    description: "100% recyclable single-polymer double-layer clear packaging spec."
  },
  {
    name: "Mono-PE Duplex No Window Recyclable Spec",
    slug: "/spec/mono-pe-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/mono-pe-duplex-nowindow",
    epPath: "https://pouch.eco/spec/mono-pe-duplex-nowindow",
    description: "Opaque curbside-recyclable mono-PE double-layer spec sheets."
  },
  {
    name: "Mono-PP Duplex Clear Recyclable Spec",
    slug: "/spec/mono-pp-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/mono-pp-duplex-clear",
    epPath: "https://pouch.eco/spec/mono-pp-duplex-clear",
    description: "100% recyclable single-polymer polypropylene double-layer clear spec."
  },
  {
    name: "Mono-PP Duplex No Window Recyclable Spec",
    slug: "/spec/mono-pp-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/mono-pp-duplex-nowindow",
    epPath: "https://pouch.eco/spec/mono-pp-duplex-nowindow",
    description: "Opaque curbside-recyclable mono-PP double-layer spec sheets."
  },
  {
    name: "PCR-Kraft Duplex Low Barrier Spec",
    slug: "/spec/pcr-kraft-duplex-low",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-kraft-duplex-low",
    epPath: "https://pouch.eco/spec/pcr-kraft-duplex-low",
    description: "Post-Consumer Recycled content combined with unbleached organic kraft."
  },
  {
    name: "PCR-Kraft VMPET High Barrier Spec",
    slug: "/spec/pcr-kraft-vmpet",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-kraft-vmpet",
    epPath: "https://pouch.eco/spec/pcr-kraft-vmpet",
    description: "PCR unbleached kraft with metallized high-barrier core spec."
  },
  {
    name: "PCR-PET Duplex Clear Spec",
    slug: "/spec/pcr-pet-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-duplex-clear",
    epPath: "https://pouch.eco/spec/pcr-pet-duplex-clear",
    description: "Transparent double-layer post-consumer recycled PET spec sheet."
  },
  {
    name: "PCR-PET Duplex No Window Spec",
    slug: "/spec/pcr-pet-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-duplex-nowindow",
    epPath: "https://pouch.eco/spec/pcr-pet-duplex-nowindow",
    description: "Opaque solid post-consumer recycled double-layer PET spec sheets."
  },
  {
    name: "PCR-PET-Kraft Quadlex Aluminum Spec",
    slug: "/spec/pcr-pet-kraft-quadlex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-kraft-quadlex-aluminum",
    epPath: "https://pouch.eco/spec/pcr-pet-kraft-quadlex-aluminum",
    description: "Four-layer heavy-duty PCR PET/Kraft with pure aluminum core specs."
  },
  {
    name: "PCR-PET-Kraft Triplex Clear Spec",
    slug: "/spec/pcr-pet-kraft-triplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-kraft-triplex-clear",
    epPath: "https://pouch.eco/spec/pcr-pet-kraft-triplex-clear",
    description: "Three-layer transparent PCR PET/Kraft structural packaging spec."
  },
  {
    name: "PCR-PET Triplex Aluminum Spec",
    slug: "/spec/pcr-pet-triplex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-triplex-aluminum",
    epPath: "https://pouch.eco/spec/pcr-pet-triplex-aluminum",
    description: "Three-layer post-consumer recycled PET with pure aluminum core spec."
  },
  {
    name: "PCR-PET Triplex Metalised Spec",
    slug: "/spec/pcr-pet-triplex-metalised",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pet-triplex-metalised",
    epPath: "https://pouch.eco/spec/pcr-pet-triplex-metalised",
    description: "Three-layer recycled PCR PET with metallized protection spec sheet."
  },
  {
    name: "PCR-PP Duplex Clear Spec",
    slug: "/spec/pcr-pp-duplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-duplex-clear",
    epPath: "https://pouch.eco/spec/pcr-pp-duplex-clear",
    description: "Recycled PCR polypropylene double-layer clear packaging spec."
  },
  {
    name: "PCR-PP Duplex No Window Spec",
    slug: "/spec/pcr-pp-duplex-nowindow",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-duplex-nowindow",
    epPath: "https://pouch.eco/spec/pcr-pp-duplex-nowindow",
    description: "Opaque solid post-consumer recycled PP double-layer spec sheets."
  },
  {
    name: "PCR-PP-Kraft Quadlex Aluminum Spec",
    slug: "/spec/pcr-pp-kraft-quadlex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-kraft-quadlex-aluminum",
    epPath: "https://pouch.eco/spec/pcr-pp-kraft-quadlex-aluminum",
    description: "Four-layer heavy-duty PCR PP/Kraft with pure aluminum core spec."
  },
  {
    name: "PCR-PP-Kraft Triplex Clear Spec",
    slug: "/spec/pcr-pp-kraft-triplex-clear",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-kraft-triplex-clear",
    epPath: "https://pouch.eco/spec/pcr-pp-kraft-triplex-clear",
    description: "Three-layer clear PCR PP with unbleached structural kraft spec."
  },
  {
    name: "PCR-PP Triplex Aluminum Spec",
    slug: "/spec/pcr-pp-triplex-aluminum",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-triplex-aluminum",
    epPath: "https://pouch.eco/spec/pcr-pp-triplex-aluminum",
    description: "Three-layer post-consumer recycled PP with pure aluminum core spec."
  },
  {
    name: "PCR-PP Triplex Metalised Spec",
    slug: "/spec/pcr-pp-triplex-metalised",
    category: "specs",
    apPath: "https://achievepack.com/spec/pcr-pp-triplex-metalised",
    epPath: "https://pouch.eco/spec/pcr-pp-triplex-metalised",
    description: "Three-layer recycled PCR PP with metallized high-barrier spec sheet."
  },

  // 6. Interactive Free Tools & Demos
  {
    name: "3D Pouch Showcase Simulator",
    slug: "/3d-showcase",
    category: "tools",
    apPath: "https://achievepack.com/3d-showcase",
    epPath: "https://pouch.eco/3d-showcase",
    description: "Interactive WebGL 3D structure simulator to visualize pouch layers."
  },
  {
    name: "Dynamic Dieline Finder",
    slug: "/dieline-finder",
    category: "tools",
    apPath: "https://achievepack.com/dieline-finder",
    epPath: "https://pouch.eco/dieline-finder",
    description: "Locate and download structural vector dieline blueprints for packaging layout."
  },
  {
    name: "Real-Time Dieline Creator",
    slug: "/dieline-creator",
    category: "tools",
    apPath: "https://achievepack.com/dieline-creator",
    epPath: "https://pouch.eco/dieline-creator",
    description: "Generate and output custom vector packaging dielines dynamically."
  },
  {
    name: "Packaging Design Consultation",
    slug: "/free-service/packaging-design-consultation",
    category: "tools",
    apPath: "https://achievepack.com/free-service/packaging-design-consultation",
    epPath: "https://pouch.eco/free-service/packaging-design-consultation",
    description: "Schedule free packaging engineering & graphic layout consultation."
  },
  {
    name: "Free 3D Mockup Generator",
    slug: "/free-service/packaging-mockup",
    category: "tools",
    apPath: "https://achievepack.com/free-service/packaging-mockup",
    epPath: "https://pouch.eco/free-service/packaging-mockup",
    description: "Request free visual mockups and 3D digital renderings for approval."
  },
  {
    name: "Website Modernizing Audit",
    slug: "/free-service/website-upgrade",
    category: "tools",
    apPath: "https://achievepack.com/free-service/website-upgrade",
    epPath: "https://pouch.eco/free-service/website-upgrade",
    description: "Request expert SEO/GEO website auditing and upgrading support."
  },
  {
    name: "CRM Client Portal Demonstration",
    slug: "/free-service/customer-center",
    category: "tools",
    apPath: "https://achievepack.com/free-service/customer-center",
    epPath: "https://pouch.eco/free-service/customer-center",
    description: "Interactive demo of our custom B2B wholesale customer portal hub."
  },
  {
    name: "Maxi Foods Mockup Demo",
    slug: "/free-service/maxi-foods-demo",
    category: "tools",
    apPath: "https://achievepack.com/free-service/maxi-foods-demo",
    epPath: "https://pouch.eco/free-service/maxi-foods-demo",
    description: "Visual mockup demonstration showcasing the Maxi Foods package design."
  },
  {
    name: "Achieve Chips Mockup Demo",
    slug: "/free-service/achieve-chips-demo",
    category: "tools",
    apPath: "https://achievepack.com/free-service/achieve-chips-demo",
    epPath: "https://pouch.eco/free-service/achieve-chips-demo",
    description: "Visual mockup showcase showing the premium Achieve Chips snack pack."
  },
  {
    name: "Pencil App UI Integrations",
    slug: "/free-service/pencil-demo",
    category: "tools",
    apPath: "https://achievepack.com/free-service/pencil-demo",
    epPath: "https://pouch.eco/free-service/pencil-demo",
    description: "Demo of integrated canvas-based Pencil mockup and workflow editor."
  },
  {
    name: "Achieve Chocolate Demo",
    slug: "/free-service/achieve-chocolate-demo",
    category: "tools",
    apPath: "https://achievepack.com/free-service/achieve-chocolate-demo",
    epPath: "https://pouch.eco/free-service/achieve-chocolate-demo",
    description: "Visual mockup presentation displaying eco-friendly chocolate boxes."
  },
  {
    name: "Achieve Supplements Demo",
    slug: "/free-service/achieve-supplement-demo",
    category: "tools",
    apPath: "https://achievepack.com/free-service/achieve-supplement-demo",
    epPath: "https://pouch.eco/free-service/achieve-supplement-demo",
    description: "Visual mockup presenting high-barrier wellness supplements pouches."
  },

  // 7. Composting & Circularity Guides
  {
    name: "Biodegradable vs Compostable",
    slug: "/composting/biodegradable-vs-compostable",
    category: "composting",
    apPath: "https://achievepack.com/composting/biodegradable-vs-compostable",
    epPath: "https://pouch.eco/composting/biodegradable-vs-compostable",
    description: "Deep dive explaining biological decomposition vs physical breakdown."
  },
  {
    name: "Commercial Composting Facilities",
    slug: "/composting/commercial-composting",
    category: "composting",
    apPath: "https://achievepack.com/composting/commercial-composting",
    epPath: "https://pouch.eco/composting/commercial-composting",
    description: "A directory guide outlining high-heat industrial compost processing."
  },
  {
    name: "Circularity & Composting Benefits",
    slug: "/composting/composting-benefits",
    category: "composting",
    apPath: "https://achievepack.com/composting/composting-benefits",
    epPath: "https://pouch.eco/composting/composting-benefits",
    description: "How compostable packaging builds circular economies and regenerates soil."
  },
  {
    name: "Composting Services Locator",
    slug: "/composting/composting-services",
    category: "composting",
    apPath: "https://achievepack.com/composting/composting-services",
    epPath: "https://pouch.eco/composting/composting-services",
    description: "Regional municipal collection services and drop-off hubs locator."
  },
  {
    name: "Home vs Industrial Composting",
    slug: "/composting/home-vs-industrial-compostable",
    category: "composting",
    apPath: "https://achievepack.com/composting/home-vs-industrial-compostable",
    epPath: "https://pouch.eco/composting/home-vs-industrial-compostable",
    description: "Comparing TÜV Home Composting (20°C) vs Industrial (58°C) standards."
  },
  {
    name: "Natural Cellulose Fiber Science",
    slug: "/composting/natural-cellulose-fiber",
    category: "composting",
    apPath: "https://achievepack.com/composting/natural-cellulose-fiber",
    epPath: "https://pouch.eco/composting/natural-cellulose-fiber",
    description: "Technical properties of organic wood pulp cellulose packaging films."
  },
  {
    name: "Organic Compliance Support",
    slug: "/composting/organic-compliance-support",
    category: "composting",
    apPath: "https://achievepack.com/composting/organic-compliance-support",
    epPath: "https://pouch.eco/composting/organic-compliance-support",
    description: "Securing organic food labeling approval with compliant compostable films."
  },
  {
    name: "Plastic-Free Packaging Circularity",
    slug: "/composting/plastic-free",
    category: "composting",
    apPath: "https://achievepack.com/composting/plastic-free",
    epPath: "https://pouch.eco/composting/plastic-free",
    description: "Eliminating petrochemical plastics using plant polymers and bio-resins."
  },

  // 8. Case Studies & Success Stories
  {
    name: "Specialty Coffee Roastery",
    slug: "/case-studies/coffee-roastery",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/coffee-roastery",
    epPath: "https://pouch.eco/case-studies/coffee-roastery",
    description: "Case study: Transitioning a specialty roaster to valve compostable bags."
  },
  {
    name: "Organic Tea Brand Launch",
    slug: "/case-studies/tea-brand",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/tea-brand",
    epPath: "https://pouch.eco/case-studies/tea-brand",
    description: "Case study: Zero-waste composting tea bags and pouches."
  },
  {
    name: "Superfood Protein Powders",
    slug: "/case-studies/superfood-brand",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/superfood-brand",
    epPath: "https://pouch.eco/case-studies/superfood-brand",
    description: "Case study: Puncture-resistant supplements packaging with heavy-duty seal."
  },
  {
    name: "Organic Pet Treats Success",
    slug: "/case-studies/pet-treats",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/pet-treats",
    epPath: "https://pouch.eco/case-studies/pet-treats",
    description: "Case study: Grease-proof bio-PE packaging for premium pet snacks."
  },
  {
    name: "Fair-Trade Chocolate Boxes",
    slug: "/case-studies/chocolate-brand",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/chocolate-brand",
    epPath: "https://pouch.eco/case-studies/chocolate-brand",
    description: "Case study: FSC display carton boxes with metallic foil accents."
  },
  {
    name: "Eco Candle Gifting Boxes",
    slug: "/case-studies/candle-brand",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/candle-brand",
    epPath: "https://pouch.eco/case-studies/candle-brand",
    description: "Case study: Custom divider inserts and heat-resistant card boxes."
  },
  {
    name: "Artisan Organic Bakery",
    slug: "/case-studies/bakery",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/bakery",
    epPath: "https://pouch.eco/case-studies/bakery",
    description: "Case study: Moisture-vapor barrier kraft bags preserving crispness."
  },
  {
    name: "Wellness Supplements & Tablets",
    slug: "/case-studies/wellness-brand",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/wellness-brand",
    epPath: "https://pouch.eco/case-studies/wellness-brand",
    description: "Case study: Airtight resealable child-resistant supplement bags."
  },
  {
    name: "Organic Nuts & Seeds Retailer",
    slug: "/case-studies/organic-nuts",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/organic-nuts",
    epPath: "https://pouch.eco/case-studies/organic-nuts",
    description: "Case study: Opaque high-barrier unbleached kraft stand-up pouches."
  },
  {
    name: "Zero-Waste Bath Products",
    slug: "/case-studies/bath-products",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/bath-products",
    epPath: "https://pouch.eco/case-studies/bath-products",
    description: "Case study: Moisture-proof bio-plastics protecting organic bath salts."
  },
  {
    name: "Adaptogens Botanical Blends",
    slug: "/case-studies/adaptogens",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/adaptogens",
    epPath: "https://pouch.eco/case-studies/adaptogens",
    description: "Case study: Opaque sugarcane bio-resins preserving delicate botanical oils."
  },
  {
    name: "Outdoor Granola Snacks",
    slug: "/case-studies/outdoor-snacks",
    category: "cases",
    apPath: "https://achievepack.com/case-studies/outdoor-snacks",
    epPath: "https://pouch.eco/case-studies/outdoor-snacks",
    description: "Case study: Curbside recyclable mono-PP doypack for heavy snacks."
  },

  // 9. B2C Deep-Dive SEO Blog Articles (Pouch.eco Only - Shared Routing)
  {
    name: "BPI Certified Guide",
    slug: "/blog/bpi-certified-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/bpi-certified-guide",
    epPath: "https://pouch.eco/blog/bpi-certified-guide",
    description: "SEO blog detailing BPI certification standards and packaging testing."
  },
  {
    name: "Coffee Valve Technology",
    slug: "/blog/coffee-degassing-valve-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/coffee-degassing-valve-guide",
    epPath: "https://pouch.eco/blog/coffee-degassing-valve-guide",
    description: "SEO blog explaining degassing valves and freshness engineering."
  },
  {
    name: "Sustainable Coffee Pouches",
    slug: "/blog/coffee-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/coffee-packaging-guide",
    epPath: "https://pouch.eco/blog/coffee-packaging-guide",
    description: "SEO blog outlining sustainable materials for artisan coffee roasters."
  },
  {
    name: "Compostable Baby Food Guide",
    slug: "/blog/compostable-baby-food-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/compostable-baby-food-packaging-guide",
    epPath: "https://pouch.eco/blog/compostable-baby-food-packaging-guide",
    description: "SEO blog detailing food-safe compostable purée spout bags."
  },
  {
    name: "Humidity Control Science",
    slug: "/blog/compostable-humidity-control",
    category: "blogs",
    apPath: "https://achievepack.com/blog/compostable-humidity-control",
    epPath: "https://pouch.eco/blog/compostable-humidity-control",
    description: "SEO blog explaining dynamic moisture balancing in sealed bags."
  },
  {
    name: "Stand-Up Pouch Guidelines",
    slug: "/blog/compostable-stand-up-pouches-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/compostable-stand-up-pouches-guide",
    epPath: "https://pouch.eco/blog/compostable-stand-up-pouches-guide",
    description: "SEO blog on sizing, layouts, and structures for doypacks."
  },
  {
    name: "Compostable vs Recyclable",
    slug: "/blog/compostable-vs-recyclable",
    category: "blogs",
    apPath: "https://achievepack.com/blog/compostable-vs-recyclable",
    epPath: "https://pouch.eco/blog/compostable-vs-recyclable",
    description: "SEO blog comparing composting circularity vs recycling streams."
  },
  {
    name: "Compostable Zippers Guide",
    slug: "/blog/compostable-zipper-no-removal",
    category: "blogs",
    apPath: "https://achievepack.com/blog/compostable-zipper-no-removal",
    epPath: "https://pouch.eco/blog/compostable-zipper-no-removal",
    description: "SEO blog explaining zero-waste compostable reclosable zippers."
  },
  {
    name: "Custom Pouch Suppliers",
    slug: "/blog/custom-compostable-pouch-suppliers-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/custom-compostable-pouch-suppliers-guide",
    epPath: "https://pouch.eco/blog/custom-compostable-pouch-suppliers-guide",
    description: "SEO blog detailing supplier selection and bulk audit grids."
  },
  {
    name: "Custom Printed Materials",
    slug: "/blog/custom-printed-materials-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/custom-printed-materials-guide",
    epPath: "https://pouch.eco/blog/custom-printed-materials-guide",
    description: "SEO blog comparing digital, plate, and gravure printing systems."
  },
  {
    name: "Digital Eco Printing",
    slug: "/blog/digital-printing-eco-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/digital-printing-eco-packaging-guide",
    epPath: "https://pouch.eco/blog/digital-printing-eco-packaging-guide",
    description: "SEO blog explaining low-MOQ digital printing without cylinder plates."
  },
  {
    name: "DTC Sustainable Best Practices",
    slug: "/blog/dtc-sustainable-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/dtc-sustainable-packaging-guide",
    epPath: "https://pouch.eco/blog/dtc-sustainable-packaging-guide",
    description: "SEO blog outlining DTC unboxing experiences and eco shipping."
  },
  {
    name: "Food-Grade Eco Packaging",
    slug: "/blog/eco-friendly-food-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/eco-friendly-food-packaging-guide",
    epPath: "https://pouch.eco/blog/eco-friendly-food-packaging-guide",
    description: "SEO blog on direct food contact compliance and FDA certifications."
  },
  {
    name: "Eco Packaging Mistakes",
    slug: "/blog/eco-packaging-mistakes",
    category: "blogs",
    apPath: "https://achievepack.com/blog/eco-packaging-mistakes",
    epPath: "https://pouch.eco/blog/eco-packaging-mistakes",
    description: "SEO blog highlighting common errors when choosing sustainable bags."
  },
  {
    name: "Eco Regulations Guidelines",
    slug: "/blog/eco-packaging-regulations-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/eco-packaging-regulations-guide",
    epPath: "https://pouch.eco/blog/eco-packaging-regulations-guide",
    description: "SEO blog explaining global plastic bans, circularity, and EPR fees."
  },
  {
    name: "EU PPWR Compliance Guide",
    slug: "/blog/eu-ppwr-compliance-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/eu-ppwr-compliance-guide",
    epPath: "https://pouch.eco/blog/eu-ppwr-compliance-guide",
    description: "SEO blog outlining the European Packaging & Packaging Waste Regulation."
  },
  {
    name: "Green Coffee Materials",
    slug: "/blog/green-coffee-materials-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/green-coffee-materials-guide",
    epPath: "https://pouch.eco/blog/green-coffee-materials-guide",
    description: "SEO blog comparing kraft paper laminate vs bio-PE for roasters."
  },
  {
    name: "Home Compostable Guide",
    slug: "/blog/home-compostable-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/home-compostable-guide",
    epPath: "https://pouch.eco/blog/home-compostable-guide",
    description: "SEO blog detailing backyard composting setups and decomposition rates."
  },
  {
    name: "Industrial Compostable Guide",
    slug: "/blog/industrial-compostable-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/industrial-compostable-guide",
    epPath: "https://pouch.eco/blog/industrial-compostable-guide",
    description: "SEO blog detailing BPI commercial composting facility integrations."
  },
  {
    name: "Low MOQ Pricing Guide",
    slug: "/blog/low-moq-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/low-moq-packaging-guide",
    epPath: "https://pouch.eco/blog/low-moq-packaging-guide",
    description: "SEO blog explaining custom pouch pricing structures for startups."
  },
  {
    name: "Low MOQ Startup Guide",
    slug: "/blog/low-moq-startup-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/low-moq-startup-packaging-guide",
    epPath: "https://pouch.eco/blog/low-moq-startup-packaging-guide",
    description: "SEO blog detailing low-investment small batch custom runs."
  },
  {
    name: "Organic Compliance Guide",
    slug: "/blog/organic-compliance-support",
    category: "blogs",
    apPath: "https://achievepack.com/blog/organic-compliance-support",
    epPath: "https://pouch.eco/blog/organic-compliance-support",
    description: "SEO blog outlining organic certification support for retail products."
  },
  {
    name: "Flexible Packaging Costs",
    slug: "/blog/packaging-cost-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/packaging-cost-guide",
    epPath: "https://pouch.eco/blog/packaging-cost-guide",
    description: "SEO blog breaking down cylinder plate costs vs digital setup."
  },
  {
    name: "Recyclable Snacks Pouch",
    slug: "/blog/recyclable-snack-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/recyclable-snack-packaging-guide",
    epPath: "https://pouch.eco/blog/recyclable-snack-packaging-guide",
    description: "SEO blog detailing curbside recyclable mono-PP doypacks for snacks."
  },
  {
    name: "US Coffee Packaging",
    slug: "/blog/usa-coffee-packaging",
    category: "blogs",
    apPath: "https://achievepack.com/blog/usa-coffee-packaging",
    epPath: "https://pouch.eco/blog/usa-coffee-packaging",
    description: "SEO blog outlining US-specific roaster material options."
  },
  {
    name: "US Compostable Guide",
    slug: "/blog/usa-compostable-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/usa-compostable-guide",
    epPath: "https://pouch.eco/blog/usa-compostable-guide",
    description: "SEO blog outlining ASTM D6400 composting guidelines in the USA."
  },
  {
    name: "US Labeling Regulations",
    slug: "/blog/usa-labeling-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/usa-labeling-guide",
    epPath: "https://pouch.eco/blog/usa-labeling-guide",
    description: "SEO blog outlining FDA and FTC guidelines for eco-labeling claims."
  },
  {
    name: "US Snacks Regulations",
    slug: "/blog/usa-snacks-packaging-guide",
    category: "blogs",
    apPath: "https://achievepack.com/blog/usa-snacks-packaging-guide",
    epPath: "https://pouch.eco/blog/usa-snacks-packaging-guide",
    description: "SEO blog detailing US snacks packaging safety and barrier rules."
  }
];

export default function SearchDirectoryModal({ isOpen, onClose }: SearchDirectoryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'specs' | 'tools' | 'composting' | 'cases' | 'blogs'>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(link);
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const filteredItems = useMemo(() => {
    return DIRECTORY_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm print:hidden">
      <div 
        className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1e293b] text-white p-6 border-b-4 border-black flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-black flex items-center gap-3">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4FF00]" />
              Dual-Domain Search Index Directory
            </h2>
            <p className="text-xs text-gray-300 mt-1">
              Complete index mapping of all active, searchable pages across <strong>achievepack.com</strong> (AP B2B) and <strong>pouch.eco</strong> (EP B2C).
            </p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 hover:scale-105 text-white p-2 rounded-xl border border-white/20 transition active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter controls */}
        <div className="bg-gray-50 p-4 sm:p-6 border-b-4 border-black flex flex-col md:flex-row gap-4 justify-between items-stretch sm:items-center">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            <input 
              type="text" 
              placeholder="Search page name, slug, keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 block w-full rounded-xl py-3 border-2 border-gray-300 bg-white focus:ring-4 focus:ring-blue-100 focus:border-black font-semibold text-sm outline-none transition"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1 -mx-2 px-2">
            {(['all', 'specs', 'tools', 'composting', 'cases', 'blogs'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border-2 border-black rounded-xl text-xs font-black uppercase transition-all whitespace-nowrap active:scale-95 ${
                  activeCategory === cat 
                    ? 'bg-[#D4FF00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5' 
                    : 'bg-white hover:bg-gray-100 text-black'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {cat !== 'all' && CATEGORY_ICONS[cat]}
                  <span>{cat}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50/50">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <HelpCircle className="w-16 h-16 text-gray-300 animate-bounce mb-3" />
              <h3 className="text-lg font-bold text-gray-700">No pages found matching your search</h3>
              <p className="text-sm text-gray-500 max-w-sm mt-1">
                Try searching for other keywords, checking spellings, or selecting the "All" tab.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map(item => (
                <div 
                  key={item.slug} 
                  className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-gray-100 text-gray-800 text-[10px] font-extrabold px-2.5 py-1 rounded border border-gray-200 uppercase tracking-wider flex items-center gap-1.5">
                        {CATEGORY_ICONS[item.category]}
                        {item.category}
                      </span>
                      <span className="font-mono text-[9px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded border">
                        {item.slug}
                      </span>
                    </div>
                    <h4 className="font-bold text-neutral-900 text-sm sm:text-base flex items-center gap-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {/* B2B AchievePack Link */}
                    <div className="flex flex-col gap-1.5">
                      <a 
                        href={item.apPath} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#1e293b] hover:bg-slate-800 text-white rounded-xl py-2 px-3 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95 border border-transparent shadow-sm"
                      >
                        <Globe className="w-3.5 h-3.5 text-blue-300" />
                        <span>Open B2B (AP)</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item.apPath)}
                        className="text-[10px] font-bold text-gray-500 hover:text-gray-800 transition active:scale-95 flex items-center justify-center gap-1"
                      >
                        {copiedLink === item.apPath ? (
                          <span className="text-green-600 flex items-center gap-0.5"><CheckCircle className="w-3 h-3" /> Copied</span>
                        ) : (
                          <span>Copy AP Link</span>
                        )}
                      </button>
                    </div>

                    {/* B2C EcoPouch Link */}
                    <div className="flex flex-col gap-1.5">
                      <a 
                        href={item.epPath} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl py-2 px-3 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95 border border-transparent shadow-sm"
                      >
                        <Leaf className="w-3.5 h-3.5 text-green-300" />
                        <span>Open B2C (EP)</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(item.epPath)}
                        className="text-[10px] font-bold text-gray-500 hover:text-gray-800 transition active:scale-95 flex items-center justify-center gap-1"
                      >
                        {copiedLink === item.epPath ? (
                          <span className="text-green-600 flex items-center gap-0.5"><CheckCircle className="w-3 h-3" /> Copied</span>
                        ) : (
                          <span>Copy EP Link</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 border-t-4 border-black flex justify-between items-center text-[10px] sm:text-xs font-semibold text-gray-500">
          <div>
            Showing <strong className="text-neutral-900">{filteredItems.length}</strong> of <strong className="text-neutral-900">{DIRECTORY_ITEMS.length}</strong> indexed pages.
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">🔷 AP = AchievePack B2B</span>
            <span className="flex items-center gap-1">🌱 EP = EcoPouch B2C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
