import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HelpCircle, Shield, Droplet, Sparkles } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

export default function CosmeticsBottlesCatalogPage() {
  const bottleModels = [
    { id: '626', name: 'Dispenser Pump Bottle (塑料泵头瓶)', desc: 'Standard plastic bottle with lotion pump dispenser, perfect for shampoo and body wash.' },
    { id: '657', name: 'Premium Skincare Glass Bottle (玻璃瓶)', desc: 'Heavy base cosmetic glass container, best for luxury facial serums and oils.' },
  ];

  return (
    <SEOPageLayout
      title="Cosmetics & Daily Chemical Bottles Catalog | Skincare Pump Containers"
      description="Sourcing premium cosmetic pump bottles, facial lotion jars, and organic essential oil dropper bottles. Post-consumer recycled PCR plastic, glass and bio-PE."
    >
      <div className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6 lg:px-12 font-sans">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Cosmetic Packaging & Daily Chemical Containers
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-none">
              Premium Cosmetics & Skincare Bottles
            </h1>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Explore our selection of glass dropper bottles, facial cream jars, and body wash pump dispensers. Available in sustainable post-consumer recycled (PCR) plastics and heavy-duty flint glass.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/solutions/catalog?category=bottle"
                className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Browse 1000+ Bottle Designs
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
              src="/assets/images/eco_shampoo_pump_bottle.jpg"
              alt="Eco Friendly Amber Shampoo Pump Bottle Mockup"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Bottles Classifications */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            Professional Cosmetic Containers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pump Dispensers</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Standard lotion pump mechanisms paired with PET, HDPE, or amber plastic containers. Engineered for shampoos, lotions, and soaps.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cosmetic Glass Jars</h3>
              <p className="text-sm text-neutral-405 leading-relaxed">
                Thick-walled glass jars with airtight lids. Protects facial creams, cosmetics, and body butters from oxygen degradation.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <ArrowRight className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dropper Bottles</h3>
              <p className="text-sm text-neutral-405 leading-relaxed">
                Precision pipettes with glass droppers in amber, blue, or clear flint glass. Perfect for facial oils, essential serums, and essences.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Model Showcase */}
        <div className="max-w-7xl mx-auto mb-20 bg-neutral-950/40 border border-neutral-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Dynamic 3D Bottle Showcase</h2>
              <p className="text-sm text-neutral-400 mt-1">Select a bottle preset below to test custom branding alignment in our live 3D Editor.</p>
            </div>
            <Link
              to="/solutions/catalog?category=bottle"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              See all bottle designs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bottleModels.map((bottle) => (
              <div key={bottle.id} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">Model #{bottle.id}</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-emerald-400 transition-colors">{bottle.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{bottle.desc}</p>
                </div>
                <Link
                  to={`/app?shape=${bottle.id}`}
                  className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-neutral-300 hover:text-neutral-950 hover:bg-emerald-500 font-bold text-xs py-2.5 px-4 rounded-lg transition-all"
                >
                  Load Model in 3D Studio
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PCR and Glass Specs */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Sustainable Resin Options</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Post-Consumer Recycled (PCR) Plastics</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Available in 30%, 50%, and 100% PCR PET and HDPE. Diverts ocean bound plastic waste back into production streams.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Plant-Based Bio-HDPE</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Extracted from sugarcane ethanol. Bio-based material that behaves identically to traditional HDPE but captures carbon during growth.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Infinite Recyclability Glass</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Heavy weight soda-lime cosmetics glass containers. Resists essential oil corrosive degradation and is infinitely recyclable.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Quality standards</h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              All skincare and chemical containers comply with strict B2B packaging benchmarks:
            </p>
            <ul className="text-xs text-neutral-455 space-y-2">
              <li className="flex items-center gap-2">✓ Airtight tests verifying leakproof seals</li>
              <li className="flex items-center gap-2">✓ Resistance verification protecting against active oil degradation</li>
              <li className="flex items-center gap-2">✓ Precision custom pump dosing outputs (0.2ml to 2.0ml per stroke)</li>
            </ul>
          </div>
        </div>

        {/* Troubleshooting FAQ */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            Bottle Procurement QA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">Can we order custom pump dispenser colors?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Yes! Pump dispensers can be matched to any custom Pantone color. Gold, silver, and metal collar accents are also available.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">What color options are standard for glass droppers?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Dropper rubber bulbs are available in white, black, and custom silicone finishes. Standard glass pipette options are clear or amber.
              </p>
            </div>
          </div>
        </div>

      </div>
    </SEOPageLayout>
  );
}
