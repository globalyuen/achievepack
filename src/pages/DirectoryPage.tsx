import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import { 
  Search, Filter, ChevronRight, ShieldCheck, Download, 
  Sparkles, Layers, Box, CheckCircle, RefreshCw, Eye, ExternalLink
} from 'lucide-react';
import pseoMatrixData from '../data/pseo_matrix_487.json';

interface MatrixItem {
  id: number;
  sku: string;
  unique_code: string;
  slug: string;
  template_type: string;
  template_name: string;
  pouch_type: string;
  material: {
    name: string;
    eco: boolean;
    ap_focus: string;
    ep_focus: string;
    otr: string;
    wvtr: string;
    seal_temp: string;
    puncture_n: string;
  };
  application: string;
  size: {
    label: string;
    capacity_ml: number;
    dim: string;
  };
  title: string;
  unique_narrative: string;
  ap_canonical: string;
  ep_canonical: string;
  keywords: string[];
  engineering_datasheet?: {
    otr: string;
    wvtr: string;
    seal_temp_range: string;
    puncture_resistance: string;
    tensile_strength: string;
    burst_pressure: string;
    shelf_life_extension: string;
  };
  vault_case_study?: {
    title: string;
    excerpt: string;
  };
  compliance_standards?: string[];
  imagen_image_url?: string;
}

export const DirectoryPage: React.FC = () => {
  // Domain detection
  const isPouchEco = typeof window !== 'undefined' && window.location.hostname.includes('pouch.eco');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPouch, setSelectedPouch] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [showWizard, setShowWizard] = useState(false);

  // Wizard state
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardApp, setWizardApp] = useState('');
  const [wizardPouch, setWizardPouch] = useState('');
  const [wizardMat, setWizardMat] = useState('');

  const matrix: MatrixItem[] = pseoMatrixData as any;

  // Extract unique filter options
  const pouchOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.pouch_type).filter(Boolean))), [matrix]);
  const materialOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.material?.name).filter(Boolean))), [matrix]);
  const applicationOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.application).filter(Boolean))), [matrix]);

  // Filtered items
  const filteredItems = useMemo(() => {
    return matrix.filter(item => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title?.toLowerCase().includes(q);
        const matchesSku = item.sku?.toLowerCase().includes(q);
        const matchesApp = item.application?.toLowerCase().includes(q);
        const matchesMat = item.material?.name?.toLowerCase().includes(q);
        const matchesPouch = item.pouch_type?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSku && !matchesApp && !matchesMat && !matchesPouch) {
          return false;
        }
      }

      if (selectedPouch !== 'all' && item.pouch_type !== selectedPouch) return false;
      if (selectedMaterial !== 'all' && item.material?.name !== selectedMaterial) return false;
      if (selectedApplication !== 'all' && item.application !== selectedApplication) return false;

      return true;
    });
  }, [matrix, searchQuery, selectedPouch, selectedMaterial, selectedApplication]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPouch('all');
    setSelectedMaterial('all');
    setSelectedApplication('all');
    setWizardStep(1);
    setWizardApp('');
    setWizardPouch('');
    setWizardMat('');
    setShowWizard(false);
  };

  const applyWizardResult = () => {
    if (wizardPouch) setSelectedPouch(wizardPouch);
    if (wizardMat) setSelectedMaterial(wizardMat);
    if (wizardApp) setSelectedApplication(wizardApp);
    setShowWizard(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      <Helmet>
        <title>
          {isPouchEco 
            ? "Sustainable Packaging Directory & Spec Finder | Pouch Eco" 
            : "Enterprise Packaging Directory & Engineering Specs | Achieve Pack"}
        </title>
        <meta 
          name="description" 
          content={isPouchEco 
            ? "Explore low MOQ 100% compostable and recyclable pouch specifications, sizes, and instant pricing quotes." 
            : "Search 480+ high-barrier enterprise pouch specifications, technical datasheets (OTR/WVTR), and 3D dieline catalogs."} 
        />
        <link 
          rel="canonical" 
          href={isPouchEco ? "https://pouch.eco/directory" : "https://achievepack.com/directory"} 
        />
      </Helmet>

      <MegaMenu />

      {/* Visual 3D Pouch Shape Picker Header */}
      <section className={`pt-24 pb-10 px-4 sm:px-6 lg:px-8 border-b ${isPouchEco ? 'bg-emerald-950 text-white' : 'bg-slate-950 text-white'}`}>
        <div className="max-w-7xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" /> 3D Packaging Studio & Spec Directory
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Select Your Pouch Structure to Open 3D Studio
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300 text-xs sm:text-sm">
            Click any pouch shape below to instantly open & customize in 3D Studio.
          </p>
        </div>

        {/* 7 Visual Pouch Shapes Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            {
              name: 'Stand-Up Pouch',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/stand-up.webp',
              studioUrl: '/studio?shape=348',
              badge: 'Doypack',
            },
            {
              name: 'Side Seal / Gusset',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/side%20-seal.webp',
              studioUrl: '/studio?shape=2777',
              badge: 'Coffee',
            },
            {
              name: '3-Side Seal',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/3-side.webp',
              studioUrl: '/studio?shape=355',
              badge: 'Sachet',
            },
            {
              name: 'Center Seal',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/center.webp',
              studioUrl: '/studio?shape=2744',
              badge: 'Pillow',
            },
            {
              name: 'Flat Bottom',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/flat-bottom.webp',
              studioUrl: '/studio?shape=1093',
              badge: 'Box Pouch',
            },
            {
              name: 'Quad Seal',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/quad-seal.webp',
              studioUrl: '/studio?shape=1290',
              badge: 'Heavy Duty',
            },
            {
              name: 'Spout Pouch',
              image: 'https://achievepack.com/imgs/store/pouch%20shape/spout.webp',
              isSpout: true,
              cornerUrl: '/studio?shape=4101',
              centerUrl: '/studio?shape=975',
              badge: 'Liquid',
            },
          ].map((shape, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/60 rounded-xl p-3 flex flex-col justify-between items-center text-center transition-all hover:scale-105 group shadow-md"
            >
              <div className="w-full aspect-square bg-slate-950 rounded-lg p-2 flex items-center justify-center mb-2 overflow-hidden border border-slate-800">
                <img
                  src={shape.image}
                  alt={shape.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">{shape.badge}</span>
              <h3 className="font-bold text-white text-xs leading-tight mb-2 line-clamp-1">{shape.name}</h3>

              {shape.isSpout ? (
                <div className="w-full grid grid-cols-2 gap-1 mt-auto">
                  <Link
                    to={shape.cornerUrl}
                    className="py-1 px-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[9px] rounded transition-colors text-center truncate"
                  >
                    Corner
                  </Link>
                  <Link
                    to={shape.centerUrl}
                    className="py-1 px-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[9px] rounded transition-colors text-center truncate"
                  >
                    Center
                  </Link>
                </div>
              ) : (
                <Link
                  to={shape.studioUrl!}
                  className="w-full py-1.5 px-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm mt-auto"
                >
                  Open 3D Studio <ChevronRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Visual Spec & Element Directory (Barrier, Surface, Reclosure Showcase with Thumbnails & Text) */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Visual Spec & Packaging Element Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Explore barrier ratings, surface finishes, and reclosure parts with high-resolution visual specifications.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: '🛡️ Barrier Options & Layer Structures (阻隔層數與材質截面)',
                items: [
                  { name: '2-Layer Duplex Clear (Mono-PE)', desc: 'PET/PE or Mono-PE. High clarity 2-layer structure for recyclable bags.', badge: '2-Layer Clear', link: '/features/low-barrier', img: '/imgs/spec/mono-pe-duplex-clear.webp' },
                  { name: '2-Layer Kraft Barrier (Kraft/PE)', desc: 'Kraft Paper/PE 2-layer structure. Natural paper look with low moisture barrier.', badge: 'Kraft 2-Layer', link: '/materials/kraft-low-barrier', img: '/imgs/spec/bio-kraft-pbat-low.webp' },
                  { name: '3-Layer Triplex Foil (PET/AL/PE)', desc: 'PET/AL/PE 3-layer metallic structure. Ultra-high OTR & WVTR oxygen/moisture barrier.', badge: '3-Layer Foil', link: '/features/high-barrier', img: '/imgs/spec/pcr-pet-triplex-aluminum.webp' },
                  { name: '3-Layer Metalized (PET/VMPET/PE)', desc: 'PET/VMPET/PE 3-layer metalized structure. High barrier for coffee, tea & snacks.', badge: '3-Layer VMPET', link: '/features/medium-barrier', img: '/imgs/spec/pcr-pet-triplex-metalised.webp' },
                  { name: '3-Layer Kraft Foil (Kraft/VMPET/PE)', desc: 'Kraft/VMPET/PE 3-layer structure. Eco Kraft texture with interior high barrier.', badge: 'Kraft 3-Layer', link: '/materials/kraft-high-barrier', img: '/imgs/spec/pcr-kraft-vmpet.webp' },
                  { name: '4-Layer Quadlex Heavy Duty (PET/AL/Kraft/PE)', desc: '4-layer heavy duty laminate for industrial bulk storage & aggressive contents.', badge: '4-Layer Quadlex', link: '/spec/pet-quadlex-aluminum-heavy', img: '/imgs/spec/pet-quadlex-aluminum-heavy.webp' },
                  { name: 'EVOH Composite Recyclable Barrier', desc: 'PE/EVOH/PE composite. Foil-free 100% recyclable high oxygen barrier film.', badge: 'EVOH Barrier', link: '/three-side-seal-bag-recyclable-pe-evoh-pe-composite-film-102', img: '/imgs/spec/compostable-rollstock-structure.png' },
                  { name: 'Compostable Barrier Film (Cellulose/NK/PBAT)', desc: 'Plant-based cellulose & NK paper compostable high barrier structure (EN13432).', badge: 'Compostable Layer', link: '/materials/compostable', img: '/imgs/spec/bio-cello-triplex-highest.webp' },
                ]
              },
              {
                title: '✨ Surface & Printing Finishes (表面質感與印刷工藝)',
                items: [
                  { name: 'Soft Touch Velvet Matte', desc: 'Ultra-luxurious tactile feel with anti-scratch velvet coating.', badge: 'Soft Touch', link: '/soft-touch-matte-standup-pouch-432b83ee', img: '/imgs/surface/a_softtouch_pouch_correct_7961783.webp' },
                  { name: 'Custom UV Transfer Metallic Stickers', desc: '3D metallic embossed logo transfers with gold/silver foil.', badge: '3D Metallic', link: '/custom-uv-transfer-logo-stickers', img: '/imgs/surface/a_metallic_gold_closeup_5151764.webp' },
                  { name: 'White Ink Underprint Technology', desc: 'Vibrant opaque color printing on transparent & metallic films.', badge: 'White Ink', link: '/white-ink-underprint', img: '/imgs/surface/spot-uv-pouch.png' },
                  { name: 'High-Gloss Finish Detail', desc: 'Mirror-like reflective high-gloss surface finish for bold visual pop.', badge: 'High Gloss', link: '/features/surface-finish', img: '/imgs/surface/a_gloss_finish_detail_5685549.webp' },
                  { name: 'Spot Matte & Spot Gloss Contrast', desc: 'Targeted spot gloss accents on matte pouch surfaces.', badge: 'Spot Contrast', link: '/features/surface-finish', img: '/imgs/surface/spot-matte-finish.webp' },
                  { name: 'Natural Kraft Paper Texture', desc: 'Unbleached natural brown or bleached white Kraft paper texture.', badge: 'Kraft Texture', link: '/materials/plastic-free-kraft', img: '/imgs/surface/kraft-texture.png' },
                ]
              },
              {
                title: '⚙️ Reclosure & Accessories (封口拉鏈與配件)',
                items: [
                  { name: 'Resealable Pocket Zipper', desc: 'Easy pull-tab opening with press-to-close resealable zipper.', badge: 'Press-to-Close', link: '/features/reclosure-options', img: '/imgs/reclose/a_reclosure_options_kv_product_photo_7983949.webp' },
                  { name: 'One-Way Coffee Degassing Valve', desc: 'Releases CO2 gases while preventing oxygen ingress.', badge: 'Coffee Valve', link: '/options/smart-degassing-sticker', img: '/imgs/reclose/a_valve_closure_detail_6401844.webp' },
                  { name: 'Tin Tie Fold-Down Closure', desc: 'Reusable metal tin tie closure for coffee & bakery paper bags.', badge: 'Tin Tie', link: '/flat-bottom-pouch-tin-tie', img: '/imgs/reclose/a_tintie_coffee_pouch_correct_4114906.webp' },
                  { name: 'Spout & Tamper-Evident Cap Assembly', desc: 'Leak-proof liquid pouring spouts with tamper-evident caps.', badge: 'Spout Cap', link: '/packaging/spout-pouches', img: '/imgs/reclose/a_spout_closure_closeup_detail_2705813.webp' },
                  { name: 'Child-Resistant Lock Zipper', desc: 'Push-and-slide safety zipper compliant with ASTM D3475 standards.', badge: 'ASTM CR Lock', link: '/function/child-resistant-bags', img: '/imgs/store/pouch%20shape/flat-bottom.webp' },
                  { name: 'Magic Tape Sealing', desc: 'Hook-and-loop magic tape closure for smooth reclosing.', badge: 'Magic Tape', link: '/flat-bottom-magic-tape-pouches', img: '/imgs/store/pouch%20shape/quad-seal.webp' },
                ]
              }
            ].map((section, sectionIdx) => (
              <div key={sectionIdx} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      to={item.link}
                      className="group bg-slate-950 border border-slate-800/80 hover:border-emerald-500/60 rounded-xl p-3.5 flex gap-3 transition-all hover:scale-[1.02] shadow-md"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover rounded group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-1">
                            {item.badge}
                          </span>
                          <h4 className="text-xs font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 mt-2">
                          View Spec &rarr;
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase Matrix (Industry Solutions & Persona Showcase) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Layers className="w-3.5 h-3.5" /> Industry & Persona Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Solutions Showcase Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl mx-auto">
              Explore targeted packaging solutions tailored for specific industries, business scales, eco mandates, and packaging automation systems.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                            "id": "artisan-producer",
                            "slug": "artisan-producer",
                            "title": "Artisan Producer",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/artisan-producer-hero.jpg",
                            "link": "/solutions/artisan-producer",
                            "description": "Engineered eco packaging solution for Artisan Producer with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-bath-salts-stand-up-pouch",
                            "slug": "bio-p-e-bath-salts-stand-up-pouch",
                            "title": "Bio P E Bath Salts Stand Up Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-bath-salts-stand-up-pouch-hero.jpg",
                            "link": "/solutions/bio-p-e-bath-salts-stand-up-pouch",
                            "description": "Engineered eco packaging solution for Bio P E Bath Salts Stand Up Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-beef-jerky-pillow-pouch",
                            "slug": "bio-p-e-beef-jerky-pillow-pouch",
                            "title": "Bio P E Beef Jerky Pillow Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-beef-jerky-pillow-pouch-hero.jpg",
                            "link": "/solutions/bio-p-e-beef-jerky-pillow-pouch",
                            "description": "Engineered eco packaging solution for Bio P E Beef Jerky Pillow Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-coffee-flat-bottom-pouch",
                            "slug": "bio-p-e-coffee-flat-bottom-pouch",
                            "title": "Bio P E Coffee Flat Bottom Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-coffee-flat-bottom-pouch-hero.jpg",
                            "link": "/solutions/bio-p-e-coffee-flat-bottom-pouch",
                            "description": "Engineered eco packaging solution for Bio P E Coffee Flat Bottom Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-cold-brew-coffee-bag",
                            "slug": "bio-p-e-cold-brew-coffee-bag",
                            "title": "Bio P E Cold Brew Coffee Bag",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-cold-brew-coffee-bag-hero.jpg",
                            "link": "/solutions/bio-p-e-cold-brew-coffee-bag",
                            "description": "Engineered eco packaging solution for Bio P E Cold Brew Coffee Bag with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-granola-stand-up-pouch",
                            "slug": "bio-p-e-granola-stand-up-pouch",
                            "title": "Bio P E Granola Stand Up Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-granola-stand-up-pouch-hero.jpg",
                            "link": "/solutions/bio-p-e-granola-stand-up-pouch",
                            "description": "Engineered eco packaging solution for Bio P E Granola Stand Up Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-matcha-green-tea-sachet",
                            "slug": "bio-p-e-matcha-green-tea-sachet",
                            "title": "Bio P E Matcha Green Tea Sachet",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-matcha-green-tea-sachet-hero.jpg",
                            "link": "/solutions/bio-p-e-matcha-green-tea-sachet",
                            "description": "Engineered eco packaging solution for Bio P E Matcha Green Tea Sachet with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-roasted-nuts-quad-seal",
                            "slug": "bio-p-e-roasted-nuts-quad-seal",
                            "title": "Bio P E Roasted Nuts Quad Seal",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-roasted-nuts-quad-seal-hero.jpg",
                            "link": "/solutions/bio-p-e-roasted-nuts-quad-seal",
                            "description": "Engineered eco packaging solution for Bio P E Roasted Nuts Quad Seal with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "bio-p-e-spice-powder-sachet",
                            "slug": "bio-p-e-spice-powder-sachet",
                            "title": "Bio P E Spice Powder Sachet",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/bio-p-e-spice-powder-sachet-hero.jpg",
                            "link": "/solutions/bio-p-e-spice-powder-sachet",
                            "description": "Engineered eco packaging solution for Bio P E Spice Powder Sachet with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "citrus-oil-packaging",
                            "slug": "citrus-oil-packaging",
                            "title": "Citrus Oil Packaging",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/citrus-oil-packaging-hero.jpg",
                            "link": "/solutions/citrus-oil-packaging",
                            "description": "Engineered eco packaging solution for Citrus Oil Packaging with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "coffee-roaster",
                            "slug": "coffee-roaster",
                            "title": "Coffee Roaster",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/coffee-roaster-hero.jpg",
                            "link": "/solutions/coffee-roaster",
                            "description": "Engineered eco packaging solution for Coffee Roaster with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-artisan-chocolate-wrap",
                            "slug": "compostable-artisan-chocolate-wrap",
                            "title": "Compostable Artisan Chocolate Wrap",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-artisan-chocolate-wrap-hero.jpg",
                            "link": "/solutions/compostable-artisan-chocolate-wrap",
                            "description": "Engineered eco packaging solution for Compostable Artisan Chocolate Wrap with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-c-b-d-gummy-child-resistant",
                            "slug": "compostable-c-b-d-gummy-child-resistant",
                            "title": "Compostable C B D Gummy Child Resistant",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-c-b-d-gummy-child-resistant-hero.jpg",
                            "link": "/solutions/compostable-c-b-d-gummy-child-resistant",
                            "description": "Engineered eco packaging solution for Compostable C B D Gummy Child Resistant with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-cosmetic-serum-spout",
                            "slug": "compostable-cosmetic-serum-spout",
                            "title": "Compostable Cosmetic Serum Spout",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-cosmetic-serum-spout-hero.jpg",
                            "link": "/solutions/compostable-cosmetic-serum-spout",
                            "description": "Engineered eco packaging solution for Compostable Cosmetic Serum Spout with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-kraft-coffee-doypack",
                            "slug": "compostable-kraft-coffee-doypack",
                            "title": "Compostable Kraft Coffee Doypack",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-kraft-coffee-doypack-hero.jpg",
                            "link": "/solutions/compostable-kraft-coffee-doypack",
                            "description": "Engineered eco packaging solution for Compostable Kraft Coffee Doypack with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-liquid-spout-pouch",
                            "slug": "compostable-liquid-spout-pouch",
                            "title": "Compostable Liquid Spout Pouch",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-liquid-spout-pouch-hero.jpg",
                            "link": "/solutions/compostable-liquid-spout-pouch",
                            "description": "Engineered eco packaging solution for Compostable Liquid Spout Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-loose-leaf-tea-doypack",
                            "slug": "compostable-loose-leaf-tea-doypack",
                            "title": "Compostable Loose Leaf Tea Doypack",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-loose-leaf-tea-doypack-hero.jpg",
                            "link": "/solutions/compostable-loose-leaf-tea-doypack",
                            "description": "Engineered eco packaging solution for Compostable Loose Leaf Tea Doypack with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-microgreens-produce-pouch",
                            "slug": "compostable-microgreens-produce-pouch",
                            "title": "Compostable Microgreens Produce Pouch",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-microgreens-produce-pouch-hero.jpg",
                            "link": "/solutions/compostable-microgreens-produce-pouch",
                            "description": "Engineered eco packaging solution for Compostable Microgreens Produce Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-protein-bar-flow-wrap",
                            "slug": "compostable-protein-bar-flow-wrap",
                            "title": "Compostable Protein Bar Flow Wrap",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-protein-bar-flow-wrap-hero.jpg",
                            "link": "/solutions/compostable-protein-bar-flow-wrap",
                            "description": "Engineered eco packaging solution for Compostable Protein Bar Flow Wrap with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-superfood-flat-bottom",
                            "slug": "compostable-superfood-flat-bottom",
                            "title": "Compostable Superfood Flat Bottom",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-superfood-flat-bottom-hero.jpg",
                            "link": "/solutions/compostable-superfood-flat-bottom",
                            "description": "Engineered eco packaging solution for Compostable Superfood Flat Bottom with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "compostable-whey-protein-flat-bottom",
                            "slug": "compostable-whey-protein-flat-bottom",
                            "title": "Compostable Whey Protein Flat Bottom",
                            "categoryBadge": "Home Compostable",
                            "image": "/imgs/solutions/compostable-whey-protein-flat-bottom-hero.jpg",
                            "link": "/solutions/compostable-whey-protein-flat-bottom",
                            "description": "Engineered eco packaging solution for Compostable Whey Protein Flat Bottom with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "corporate-sustainability",
                            "slug": "corporate-sustainability",
                            "title": "Corporate Sustainability",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/corporate-sustainability-hero.jpg",
                            "link": "/solutions/corporate-sustainability",
                            "description": "Engineered eco packaging solution for Corporate Sustainability with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "eco-packaging-coding",
                            "slug": "eco-packaging-coding",
                            "title": "Eco Packaging Coding",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/eco-packaging-coding-hero.jpg",
                            "link": "/solutions/eco-packaging-coding",
                            "description": "Engineered eco packaging solution for Eco Packaging Coding with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "ecommerce-brand",
                            "slug": "ecommerce-brand",
                            "title": "Ecommerce Brand",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/ecommerce-brand-hero.jpg",
                            "link": "/solutions/ecommerce-brand",
                            "description": "Engineered eco packaging solution for Ecommerce Brand with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "essential-oil-paper-tube-guide",
                            "slug": "essential-oil-paper-tube-guide",
                            "title": "Essential Oil Paper Tube Guide",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/essential-oil-paper-tube-guide-hero.jpg",
                            "link": "/solutions/essential-oil-paper-tube-guide",
                            "description": "Engineered eco packaging solution for Essential Oil Paper Tube Guide with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "food-coding-compliance",
                            "slug": "food-coding-compliance",
                            "title": "Food Coding Compliance",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/food-coding-compliance-hero.jpg",
                            "link": "/solutions/food-coding-compliance",
                            "description": "Engineered eco packaging solution for Food Coding Compliance with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "food-manufacturer",
                            "slug": "food-manufacturer",
                            "title": "Food Manufacturer",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/food-manufacturer-hero.jpg",
                            "link": "/solutions/food-manufacturer",
                            "description": "Engineered eco packaging solution for Food Manufacturer with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-e-electrolyte-powder-sachet",
                            "slug": "mono-p-e-electrolyte-powder-sachet",
                            "title": "Mono P E Electrolyte Powder Sachet",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-e-electrolyte-powder-sachet-hero.jpg",
                            "link": "/solutions/mono-p-e-electrolyte-powder-sachet",
                            "description": "Engineered eco packaging solution for Mono P E Electrolyte Powder Sachet with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-e-frozen-fruit-doypack",
                            "slug": "mono-p-e-frozen-fruit-doypack",
                            "title": "Mono P E Frozen Fruit Doypack",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-e-frozen-fruit-doypack-hero.jpg",
                            "link": "/solutions/mono-p-e-frozen-fruit-doypack",
                            "description": "Engineered eco packaging solution for Mono P E Frozen Fruit Doypack with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-e-laundry-detergent-pouch",
                            "slug": "mono-p-e-laundry-detergent-pouch",
                            "title": "Mono P E Laundry Detergent Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-e-laundry-detergent-pouch-hero.jpg",
                            "link": "/solutions/mono-p-e-laundry-detergent-pouch",
                            "description": "Engineered eco packaging solution for Mono P E Laundry Detergent Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-e-liquid-soap-spout-pouch",
                            "slug": "mono-p-e-liquid-soap-spout-pouch",
                            "title": "Mono P E Liquid Soap Spout Pouch",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-e-liquid-soap-spout-pouch-hero.jpg",
                            "link": "/solutions/mono-p-e-liquid-soap-spout-pouch",
                            "description": "Engineered eco packaging solution for Mono P E Liquid Soap Spout Pouch with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-e-snack-chips-pillow",
                            "slug": "mono-p-e-snack-chips-pillow",
                            "title": "Mono P E Snack Chips Pillow",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-e-snack-chips-pillow-hero.jpg",
                            "link": "/solutions/mono-p-e-snack-chips-pillow",
                            "description": "Engineered eco packaging solution for Mono P E Snack Chips Pillow with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "mono-p-p-dried-fruit-stand-up",
                            "slug": "mono-p-p-dried-fruit-stand-up",
                            "title": "Mono P P Dried Fruit Stand Up",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/mono-p-p-dried-fruit-stand-up-hero.jpg",
                            "link": "/solutions/mono-p-p-dried-fruit-stand-up",
                            "description": "Engineered eco packaging solution for Mono P P Dried Fruit Stand Up with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-cat-food-gusset",
                            "slug": "p-c-r-recycled-cat-food-gusset",
                            "title": "P C R Recycled Cat Food Gusset",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-cat-food-gusset-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-cat-food-gusset",
                            "description": "Engineered eco packaging solution for P C R Recycled Cat Food Gusset with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-coffee-side-gusset",
                            "slug": "p-c-r-recycled-coffee-side-gusset",
                            "title": "P C R Recycled Coffee Side Gusset",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-coffee-side-gusset-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-coffee-side-gusset",
                            "description": "Engineered eco packaging solution for P C R Recycled Coffee Side Gusset with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-collagen-flat-bottom",
                            "slug": "p-c-r-recycled-collagen-flat-bottom",
                            "title": "P C R Recycled Collagen Flat Bottom",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-collagen-flat-bottom-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-collagen-flat-bottom",
                            "description": "Engineered eco packaging solution for P C R Recycled Collagen Flat Bottom with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-dried-mushroom-flat-bottom",
                            "slug": "p-c-r-recycled-dried-mushroom-flat-bottom",
                            "title": "P C R Recycled Dried Mushroom Flat Bottom",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-dried-mushroom-flat-bottom-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-dried-mushroom-flat-bottom",
                            "description": "Engineered eco packaging solution for P C R Recycled Dried Mushroom Flat Bottom with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-pet-food-quad-seal",
                            "slug": "p-c-r-recycled-pet-food-quad-seal",
                            "title": "P C R Recycled Pet Food Quad Seal",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-pet-food-quad-seal-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-pet-food-quad-seal",
                            "description": "Engineered eco packaging solution for P C R Recycled Pet Food Quad Seal with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "p-c-r-recycled-sea-salt-flat-bottom",
                            "slug": "p-c-r-recycled-sea-salt-flat-bottom",
                            "title": "P C R Recycled Sea Salt Flat Bottom",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/p-c-r-recycled-sea-salt-flat-bottom-hero.jpg",
                            "link": "/solutions/p-c-r-recycled-sea-salt-flat-bottom",
                            "description": "Engineered eco packaging solution for P C R Recycled Sea Salt Flat Bottom with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "packaging-line-automation",
                            "slug": "packaging-line-automation",
                            "title": "Packaging Line Automation",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/packaging-line-automation-hero.jpg",
                            "link": "/solutions/packaging-line-automation",
                            "description": "Engineered eco packaging solution for Packaging Line Automation with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "product-developer",
                            "slug": "product-developer",
                            "title": "Product Developer",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/product-developer-hero.jpg",
                            "link": "/solutions/product-developer",
                            "description": "Engineered eco packaging solution for Product Developer with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "recyclable-mono-p-e-baby-food-spout",
                            "slug": "recyclable-mono-p-e-baby-food-spout",
                            "title": "Recyclable Mono P E Baby Food Spout",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/recyclable-mono-p-e-baby-food-spout-hero.jpg",
                            "link": "/solutions/recyclable-mono-p-e-baby-food-spout",
                            "description": "Engineered eco packaging solution for Recyclable Mono P E Baby Food Spout with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "recyclable-mono-p-e-pet-treat-gusset",
                            "slug": "recyclable-mono-p-e-pet-treat-gusset",
                            "title": "Recyclable Mono P E Pet Treat Gusset",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/recyclable-mono-p-e-pet-treat-gusset-hero.jpg",
                            "link": "/solutions/recyclable-mono-p-e-pet-treat-gusset",
                            "description": "Engineered eco packaging solution for Recyclable Mono P E Pet Treat Gusset with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "snack-brand-manager",
                            "slug": "snack-brand-manager",
                            "title": "Snack Brand Manager",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/snack-brand-manager-hero.jpg",
                            "link": "/solutions/snack-brand-manager",
                            "description": "Engineered eco packaging solution for Snack Brand Manager with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              },
              {
                            "id": "startup-founder",
                            "slug": "startup-founder",
                            "title": "Startup Founder",
                            "categoryBadge": "pSEO Solution",
                            "image": "/imgs/solutions/startup-founder-hero.jpg",
                            "link": "/solutions/startup-founder",
                            "description": "Engineered eco packaging solution for Startup Founder with high barrier protection, custom dielines, and certified sustainable materials.",
                            "specs": {
                                          "material": "Bio-PE / Compostable PLA / Mono-PE / PCR",
                                          "shape": "Flat Bottom / Stand Up / Side Gusset / Spout",
                                          "barrier": "EVOH Oxygen & Moisture Barrier (OTR <0.5)",
                                          "size": "Custom Sizes Available (Inches & mm)",
                                          "surface": "Soft-Touch Velvet Matte / Gloss / Spot UV",
                                          "features": "Pocket Zipper, Degassing Valve, Tear Notch"
                            }
              }
].map((sol) => (
              <div 
                key={sol.id} 
                className="bg-slate-950 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-5 flex flex-col justify-between transition-all hover:scale-[1.02] shadow-lg group"
              >
                <div>
                  {/* Thumbnail & Badge Header */}
                  <div className="relative w-full h-44 rounded-xl bg-slate-900 overflow-hidden border border-slate-800 mb-4 flex items-center justify-center p-2">
                    <img 
                      src={sol.image} 
                      alt={sol.title} 
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-slate-950 shadow-md">
                      {sol.categoryBadge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed line-clamp-2">
                    {sol.description}
                  </p>

                  {/* Key Specs Breakdown */}
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800/80 space-y-2 text-[11px]">
                    <div className="flex justify-between items-start border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Material:</span>
                      <span className="text-slate-200 font-semibold text-right">{sol.specs.material}</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Shape:</span>
                      <span className="text-slate-200 font-semibold text-right">{sol.specs.shape}</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Barrier:</span>
                      <span className="text-emerald-400 font-semibold text-right">{sol.specs.barrier}</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Size Range:</span>
                      <span className="text-slate-200 font-semibold text-right">{sol.specs.size}</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-slate-800 pb-1.5">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Surface:</span>
                      <span className="text-slate-200 font-semibold text-right">{sol.specs.surface}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-400 font-medium shrink-0 mr-2">Key Features:</span>
                      <span className="text-amber-400 font-semibold text-right">{sol.specs.features}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Link Action */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Solution Matrix</span>
                  <Link 
                    to={sol.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Explore Solution <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Second Smart Packaging Wizard Section */}
      {showWizard && (
        <div className="max-w-5xl mx-auto mt-6 px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                10-Second Packaging Configurator (Step {wizardStep} of 3)
              </h3>
              <button onClick={() => setShowWizard(false)} className="text-slate-400 hover:text-slate-600 text-sm">
                Cancel
              </button>
            </div>

            {wizardStep === 1 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 1: What is your primary product application?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {applicationOptions.slice(0, 8).map((app, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setWizardApp(app); setWizardStep(2); }}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardApp === app ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 2: What pouch structure do you prefer?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {pouchOptions.map((pouch, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setWizardPouch(pouch); setWizardStep(3); }}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardPouch === pouch ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {pouch}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setWizardStep(1)} className="text-xs text-slate-500 underline">← Back to Step 1</button>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 3: Select your sustainable material structure:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {materialOptions.map((mat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWizardMat(mat)}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardMat === mat ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={() => setWizardStep(2)} className="text-xs text-slate-500 underline">← Back to Step 2</button>
                  <button
                    onClick={applyWizardResult}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg shadow-md"
                  >
                    View Matching Specifications ({filteredItems.length})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6 bg-white p-5 rounded-2xl shadow-sm border border-slate-200 h-fit">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-600" />
                Faceted Filters
              </h2>
              <button onClick={resetFilters} className="text-xs text-slate-500 hover:text-emerald-600 flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Search Catalog</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Coffee, Mono-PE, 2oz..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Pouch Type Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Pouch Structure</label>
              <select
                value={selectedPouch}
                onChange={(e) => setSelectedPouch(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Pouch Types ({pouchOptions.length})</option>
                {pouchOptions.map((p, idx) => (
                  <option key={idx} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Material Spec</label>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Materials ({materialOptions.length})</option>
                {materialOptions.map((m, idx) => (
                  <option key={idx} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Application Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Application</label>
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Applications ({applicationOptions.length})</option>
                {applicationOptions.map((a, idx) => (
                  <option key={idx} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Quick Stat Summary */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <div className="flex justify-between">
                <span>Total Matrix SKUs:</span>
                <span className="font-bold text-slate-800">{matrix.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Matching Entries:</span>
                <span className="font-bold text-emerald-600">{filteredItems.length}</span>
              </div>
            </div>
          </div>

          {/* Main Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-slate-600">
                Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> specifications
              </p>
            </div>

            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <Box className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No matching specifications found</h3>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Visual Card Header */}
                    <div className="h-40 bg-slate-100 relative overflow-hidden flex items-center justify-center p-3">
                      <img 
                        src={item.imagen_image_url || 'https://achievepack.com/imgs/store/pouch%20shape/stand-up.webp'} 
                        alt={item.title}
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                          {item.pouch_type}
                        </span>
                        {item.material?.eco && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Eco Verified
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Application: <span className="font-medium text-slate-800">{item.application}</span>
                      </p>

                      {/* Specs Badge Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-50 p-2 rounded-lg">
                          <span className="text-[10px] uppercase text-slate-400 block font-semibold">OTR Barrier</span>
                          <span className="font-bold text-slate-800">{item.material?.otr || '0.5 cc/m²/d'}</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-lg">
                          <span className="text-[10px] uppercase text-slate-400 block font-semibold">WVTR Moisture</span>
                          <span className="font-bold text-slate-800">{item.material?.wvtr || '0.8 g/m²/d'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">{item.size?.label}</span>
                      <Link
                        to={`/directory/${item.slug}`}
                        className={`font-bold flex items-center gap-1 transition-colors ${
                          isPouchEco ? 'text-emerald-600 hover:text-emerald-700' : 'text-amber-600 hover:text-amber-700'
                        }`}
                      >
                        View Full Datasheet <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DirectoryPage;
