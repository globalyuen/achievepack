import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HelpCircle, Layers, Shield, Sparkles } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

export default function FlexiblePouchesCatalogPage() {
  const pouchModels = [
    { id: '4017', name: 'Three-Side Seal Pouch (三边封袋)', desc: 'Standard flat bag sealed on three sides, great for single-serve treats.' },
    { id: '915', name: 'Zipper Side-gusset Pouch (拉链风琴袋)', desc: 'Side creases expand to maximize storage volume, perfect for coffee beans.' },
  ];

  return (
    <SEOPageLayout
      title="Custom Flexible Pouches Catalog | Barrier Film Packaging Bags"
      description="Sourcing premium stand-up pouches, flat bottom coffee bags, and spouted liquid pouches. High barrier EVOH structures, recyclable Mono-PE, and compostable films."
    >
      <div className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6 lg:px-12 font-sans">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              High-Barrier Flexible Packaging
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-none">
              Custom High-Barrier Pouches
            </h1>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Engineered with advanced co-extruded barrier films to protect flavor, aroma, and freshness. Available in stand-up doypacks, flat-bottom coffee bags, and child-resistant locking formats.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/solutions/catalog?category=pouch"
                className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Browse 400+ Pouch Shapes
              </Link>
              <Link
                to="/app"
                className="border border-neutral-700 hover:border-neutral-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                Launch 3D Studio
              </Link>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <ClickableImage
              src="/assets/images/stand_up_pouch_coffee.jpg"
              alt="Premium Stand Up Coffee Pouch Mockup"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Pouch Classifications */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            Advanced Pouch Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Stand-Up Doypacks</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Bottom-gusseted bags that stand upright on retail shelves, maximizing brand display space. Best for snacks, pet food, and powders.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Flat-Bottom Bags</h3>
              <p className="text-sm text-neutral-450 leading-relaxed">
                Box-shaped bags with side creases and five printing panels. Features a stable footprint, making it the industry standard for coffee roasters.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Three-Side Seal Flat</h3>
              <p className="text-sm text-neutral-450 leading-relaxed">
                Cost-effective flat sachets sealed on the bottom and two sides. Ideal for single-serve samples, cosmetics wipes, and nutritional bars.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Model Showcase */}
        <div className="max-w-7xl mx-auto mb-20 bg-neutral-950/40 border border-neutral-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Dynamic 3D Pouch Showcase</h2>
              <p className="text-sm text-neutral-400 mt-1">Select a flexible pouch structure below to map graphics onto the 3D dieline canvas.</p>
            </div>
            <Link
              to="/solutions/catalog?category=pouch"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              See all pouch designs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pouchModels.map((pouch) => (
              <div key={pouch.id} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">Model #{pouch.id}</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-emerald-400 transition-colors">{pouch.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{pouch.desc}</p>
                </div>
                <Link
                  to={`/app?shape=${pouch.id}`}
                  className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-neutral-300 hover:text-neutral-950 hover:bg-emerald-500 font-bold text-xs py-2.5 px-4 rounded-lg transition-all"
                >
                  Load Model in 3D Studio
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Barrier & Sustainability Specs */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Advanced Barrier Materials</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Recyclable Mono-PE Structures</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Single-material structure that can be thrown directly in the PE recycling stream, matching PET barrier properties.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Compostable Cellulose & PLA</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Certified plant-based home compostable structures that decay completely within 180 days in organic soil.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">EVOH High-Barrier Layer</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">An ultra-thin oxygen barrier layer that blocks oxygen, moisture, and odors to extend food shelf life without bulk metal layers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Why choose high-barrier pouches?</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Our pouches conform to FDA and BRC guidelines for direct food contact. Standard layers include:
            </p>
            <ul className="text-xs text-neutral-450 space-y-2">
              <li className="flex items-center gap-2">✓ Outer layer: Matte or Gloss finish (PET/OPP)</li>
              <li className="flex items-center gap-2">✓ Barrier layer: Moisture & Gas protection (VMPET/AL/EVOH)</li>
              <li className="flex items-center gap-2">✓ Inner layer: Heat-sealable food safety film (PE/CPP)</li>
            </ul>
          </div>
        </div>

        {/* Troubleshooting FAQ */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            Flexible Packaging QA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">Can you print custom textures like matte or gloss varnishes?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Yes! We support registered spot matte varnish, metallic foil print, and tactile sand-feel textures.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">Do the pouches include zippers and tear notches?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                All stand-up pouches come with tear notches standard. Press-to-close zippers, pocket zippers, and degassing valves can be added.
              </p>
            </div>
          </div>
        </div>

      </div>
    </SEOPageLayout>
  );
}
