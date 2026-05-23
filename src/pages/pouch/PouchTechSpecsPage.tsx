import React, { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'
import { isPouch } from '../../utils/domain'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Eye, 
  FileText, 
  FlaskConical, 
  Home, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Coffee, 
  Sparkles, 
  Check, 
  RotateCcw, 
  AlertCircle,
  HelpCircle,
  Award,
  Package,
  Droplet,
  Heart
} from 'lucide-react'

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

// Technical specifications database for the Material Spec Finder App
const SPEC_FINDER_DATABASE = [
  {
    id: 'pcr-pet-triplex-aluminum',
    name: 'PCR PET Triplex Aluminum',
    series: 'PCR Series',
    badge: 'PCR Content',
    image: '/imgs/spec/pcr-pet-triplex-aluminum.webp',
    path: '/spec/pcr-pet-triplex-aluminum',
    wvtr: '< 0.01 g/m²/day',
    otr: '< 0.01 cc/m²/day',
    thickness: '120 micron (4.7 mil)',
    structure: 'PCR-PET / Aluminum Foil / PCR-PE',
    ecoType: 'pcr',
    barrierLevel: 'ultra',
    industries: ['coffee', 'powder', 'liquids', 'pet', 'snacks'],
    certifications: ['GRS Certified', 'FDA Compliant', 'ISO 9001'],
    desc: 'The gold standard for total molecular isolation. Incorporates certified post-consumer recycled plastic to drastically reduce reliance on virgin materials while offering near-zero OTR and WVTR protection.'
  },
  {
    id: 'bio-kraft-vm-cello',
    name: 'Bio-Kraft VM-Cello',
    series: 'Compostable Series',
    badge: 'Certified Compostable',
    image: '/imgs/spec/bio-kraft-vm-cello.webp',
    path: '/spec/bio-kraft-vm-cello',
    wvtr: '< 5 g/m²/day',
    otr: '< 2 cc/m²/day',
    thickness: '125 micron (4.9 mil)',
    structure: 'Kraft Paper / VM Cellulose / PBAT',
    ecoType: 'compostable',
    barrierLevel: 'high',
    industries: ['coffee', 'pet', 'snacks', 'powder'],
    certifications: ['BPI Certified', 'TUV Industrial', 'EN 13432'],
    desc: 'Combines a rustic, organic unbleached paper exterior with a vacuum-metallized cellulose layer to offer premium grease barrier and vapor protection in a fully compostable package.'
  },
  {
    id: 'mono-pe-duplex-clear',
    name: 'Mono-PE Duplex Clear',
    series: 'Recyclable Series',
    badge: '100% Recyclable',
    image: '/imgs/spec/mono-pe-duplex-clear.webp',
    path: '/spec/mono-pe-duplex-clear',
    wvtr: '< 1.5 g/m²/day',
    otr: '< 2.5 cc/m²/day',
    thickness: '100 micron (3.9 mil)',
    structure: 'MDO-PE / Polyethylene',
    ecoType: 'recyclable',
    barrierLevel: 'medium',
    industries: ['snacks', 'pet', 'liquids'],
    certifications: ['How2Recycle Store Drop-off', 'CE Compliant'],
    desc: 'Made completely of polymers from the Polyethylene family, enabling curbside or store drop-off collection compatibility. Highly flexible, with excellent puncture resistance.'
  },
  {
    id: 'biope-kraft-vmpet',
    name: 'Bio-PE Kraft VMPET',
    series: 'Bio-PE Series',
    badge: 'Sugar Cane Derived',
    image: '/imgs/spec/biope-kraft-vmpet.webp',
    path: '/spec/biope-kraft-vmpet',
    wvtr: '< 0.5 g/m²/day',
    otr: '< 1.0 cc/m²/day',
    thickness: '130 micron (5.1 mil)',
    structure: 'Kraft Paper / VMPET / Sugarcane PE',
    ecoType: 'biope',
    barrierLevel: 'high',
    industries: ['coffee', 'pet', 'snacks', 'powder'],
    certifications: ['Bonsucro Certified', 'ASTM D6866'],
    desc: 'Uses carbon-negative sugarcane-derived PE in the sealant layer. Same physical and heat-weld performance as petroleum-based PE but derived from renewable sugarcane fields.'
  },
  {
    id: 'bio-kraft-pbat-low',
    name: 'Bio-Kraft PBAT Low',
    series: 'Compostable Series',
    badge: 'Certified Compostable',
    image: '/imgs/spec/bio-kraft-pbat-low.webp',
    path: '/spec/bio-kraft-pbat-low',
    wvtr: '< 150 g/m²/day',
    otr: '< 80 cc/m²/day',
    thickness: '130 micron (5.1 mil)',
    structure: 'Kraft Paper / PBAT Film',
    ecoType: 'compostable',
    barrierLevel: 'low',
    industries: ['snacks', 'artisan'],
    certifications: ['TUV Home Compostable', 'EN 13432'],
    desc: 'A simple bioplastic coating on unbleached FSC paper. Offers moderate grease barrier and maximum environmental breathability, certified for home composting.'
  },
  {
    id: 'bio-cello-duplex-clear',
    name: 'Bio-Cello Duplex Clear',
    series: 'Compostable Series',
    badge: 'Certified Compostable',
    image: '/imgs/spec/bio-cello-duplex-clear.webp',
    path: '/spec/bio-cello-duplex-clear',
    wvtr: '< 25 g/m²/day',
    otr: '< 15 cc/m²/day',
    thickness: '80 micron (3.1 mil)',
    structure: 'Cellulose Film / PBAT Film',
    ecoType: 'compostable',
    barrierLevel: 'medium',
    industries: ['snacks', 'pet', 'powder'],
    certifications: ['TUV Industrial', 'ASTM D6400'],
    desc: 'Transparent plant-based cellulose lamination. Provides an excellent crystal clear window for shoppers to see your premium snacks or tea while decomposing naturally.'
  },
  {
    id: 'bio-cello-triplex-highest',
    name: 'Bio-Cello Triplex Highest',
    series: 'Compostable Series',
    badge: 'Certified Compostable',
    image: '/imgs/spec/bio-cello-triplex-highest.webp',
    path: '/spec/bio-cello-triplex-highest',
    wvtr: '< 1.0 g/m²/day',
    otr: '< 1.0 cc/m²/day',
    thickness: '110 micron (4.3 mil)',
    structure: 'Cellulose / VM Cellulose / PBAT',
    ecoType: 'compostable',
    barrierLevel: 'ultra',
    industries: ['coffee', 'powder', 'pet'],
    certifications: ['BPI Certified', 'EN 13432', 'TUV Industrial'],
    desc: 'Our absolute highest-barrier fully compostable bioplastic structure. Specially coated transparent layers achieve EVOH-like gas insulation, perfect for keeping roasted beans and fine active supplements fresh.'
  },
  {
    id: 'pcr-kraft-vmpet',
    name: 'PCR Kraft VMPET',
    series: 'PCR Series',
    badge: 'PCR Content',
    image: '/imgs/spec/pcr-kraft-vmpet.webp',
    path: '/spec/pcr-kraft-vmpet',
    wvtr: '< 0.5 g/m²/day',
    otr: '< 1.0 cc/m²/day',
    thickness: '125 micron (4.9 mil)',
    structure: 'FSC Kraft / VMPET / PCR-PE',
    ecoType: 'pcr',
    barrierLevel: 'high',
    industries: ['coffee', 'pet', 'snacks'],
    certifications: ['GRS Certified', 'FDA Approved'],
    desc: 'A gorgeous paper structure featuring an FSC unbleached exterior and a PCR-PE sealant layer. Highly effective for B2B brands wanting grease control and circular economy branding.'
  }
]

export default function PouchTechSpecsPage() {
  const pouchMode = isPouch()

  // Material Spec Finder States
  const [selectedIndustry, setSelectedIndustry] = useState<string>('coffee')
  const [selectedEco, setSelectedEco] = useState<string>('compostable')
  const [selectedBarrier, setSelectedBarrier] = useState<string>('high')

  // Recommendation Engine
  const recommendedSpecs = useMemo(() => {
    return SPEC_FINDER_DATABASE.map(spec => {
      let score = 0
      if (spec.industries.includes(selectedIndustry)) score += 4
      if (spec.ecoType === selectedEco) score += 3
      if (spec.barrierLevel === selectedBarrier) score += 2
      return { ...spec, score }
    }).sort((a, b) => b.score - a.score)
  }, [selectedIndustry, selectedEco, selectedBarrier])

  const bestMatch = recommendedSpecs[0]
  const alternatives = recommendedSpecs.slice(1, 4)

  const specs = [
    {
      id: 'home-compostable',
      title: 'Home Compostable',
      subtitle: 'Kraft + Compostable Film',
      description: '60gsm Kraft Paper + 50μ Compostable Inner Film. Simple low-barrier structure with home compostable potential. Ideal for fast-moving products at farmers markets, bakeries, and artisan retailers.',
      image: 'https://achievepack.com/imgs/spec/bio-kraft-pbat-low.webp',
      layers: [
        { name: 'Outer', desc: 'Kraft Paper 60gsm (80μ)' },
        { name: 'Inner', desc: 'Compostable Film 50μ (PBAT)' },
        { name: 'Total', desc: '130μ nominal thickness' }
      ],
      barrier: [
        { label: 'WVTR', value: '< 150 g/m²/day' },
        { label: 'OTR', value: '< 80 cc/m²/day' }
      ],
      features: ['Home Compostable', 'Moisture Barrier', 'Heat Sealable', 'Printable'],
      certifications: ['TUV Home Compost', 'EN 13432', 'ASTM D6400'],
      pdfUrl: '/pdfs/home-compostable-spec-sheet.pdf',
      dataSheet: {
        productName: '60gsm Kraft Paper + 50μ Compostable Inner Film',
        structure: 'Kraft paper / Compostable film',
        totalThickness: '0.13mm (130μ)',
        totalWeight: '130 g/m²',
        layers: [
          { layer: 'Outer / 外层', material: 'Kraft paper 牛皮纸 (uncoated)', gsm: '60', thicknessMm: '0.08', thicknessMu: '80', weightShare: '46.2', thickShare: '61.5' },
          { layer: 'Inner / 内层', material: 'Compostable film 可堆肥薄膜 (50μ, ρ=1.4)', gsm: '70', thicknessMm: '0.05', thicknessMu: '50', weightShare: '53.8', thickShare: '38.5' },
          { layer: 'Total / 合计', material: 'Laminated structure 复合结构', gsm: '130', thicknessMm: '0.13', thicknessMu: '130', weightShare: '100', thickShare: '100' }
        ]
      }
    },
    {
      id: 'compostable',
      title: 'Compostable',
      subtitle: 'Kraft / Triplex',
      description: 'High barrier compostable structure designed for maximum shelf life while maintaining eco-compliance.',
      image: '/imgs/spec/bio-kraft-vm-cello.webp',
      layers: [
        { name: 'Paper', desc: 'FSC Certified Kraft' },
        { name: 'Metallized', desc: 'High Barrier NKME' },
        { name: 'Sealant', desc: 'Bio-Polymer' }
      ],
      features: ['Moisture Barrier', 'Oxygen Barrier', 'Heat Sealable', 'Printable'],
      certifications: ['BPI', 'TUV Home', 'TUV Industrial'],
      pdfUrl: '/pdfs/compostable-spec-sheet.pdf'
    },
    {
      id: 'recyclable',
      title: 'Recyclable',
      subtitle: 'Mono-PE',
      description: 'Fully recyclable mono-material structure suitable for store drop-off recycling streams.',
      image: '/imgs/spec/mono-pe-duplex-clear.webp',
      layers: [
        { name: 'Print', desc: 'MDO-PE' },
        { name: 'Barrier', desc: 'EVOH (Optional)' },
        { name: 'Sealant', desc: 'PE' }
      ],
      features: ['Recyclable (Code 4)', 'High Clarity', 'Durable', 'Moisture Resistant'],
      certifications: ['How2Recycle', 'RedCycle'],
      pdfUrl: '/pdfs/recyclable-spec-sheet.pdf'
    },
    {
      id: 'pcr',
      title: 'PCR Content',
      subtitle: 'Post-Consumer Recycled',
      description: 'Incorporates recycled plastic to reduce virgin material usage and promote a circular economy.',
      image: '/imgs/spec/pcr-pet-duplex-clear.webp',
      layers: [
        { name: 'Outer', desc: 'PCR-PET' },
        { name: 'Barrier', desc: 'AL / VMPET' },
        { name: 'Inner', desc: 'PCR-PE' }
      ],
      features: ['Circular Economy', 'Reduced Carbon Footprint', 'Virgin Plastic Reduction'],
      certifications: ['GRS', 'SCS Global'],
      pdfUrl: '/pdfs/pcr-spec-sheet.pdf'
    },
    {
      id: 'aluminum',
      title: 'High Barrier Foil',
      subtitle: 'Premium Protection',
      description: 'The industry gold standard for oxygen and moisture protection. Ideal for coffee, powders, and long shelf-life products.',
      image: '/imgs/spec/pcr-pet-triplex-aluminum.webp',
      layers: [
        { name: 'Print', desc: 'PET / OPP' },
        { name: 'Barrier', desc: 'Aluminum Foil (7-9µm)' },
        { name: 'Sealant', desc: 'PE / RCPP' }
      ],
      features: ['Zero OTR/WVTR', 'Light Blocking', 'Retortable Option', 'Rigid Feel'],
      certifications: ['FDA Compliant', 'ISO 9001'],
      pdfUrl: '/pdfs/aluminum-spec-sheet.pdf'
    },
    {
      id: 'bio-pe',
      title: 'Bio-Based PE',
      subtitle: 'Sugar Cane Derived',
      description: 'Carbon negative polyethylene derived from renewable sugar cane resources. Same performance as fossil fuel PE.',
      image: '/imgs/spec/biope-kraft-vmpet.webp',
      layers: [
        { name: 'Print', desc: 'Bio-PET / Paper' },
        { name: 'Barrier', desc: 'AL / VMPET' },
        { name: 'Inner', desc: 'Bio-PE (Sugar Cane)' }
      ],
      features: ['Renewable Resource', 'Carbon Negative', 'High Strength', 'Drop-in Replacement'],
      certifications: ['Bonsucro', 'ASTM D6866', 'Carbon Trust'],
      pdfUrl: '/pdfs/bio-pe-spec-sheet.pdf'
    }
  ]

  const Content = pouchMode ? (
    <>
      <Helmet>
        <title>Technical Specifications | POUCH.ECO</title>
        <meta name="description" content="Detailed technical specifications for our eco-friendly packaging materials. Download data sheets and view layer structures." />
      </Helmet>

      {/* Hero Section - Neo-Brutalist */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden bg-[#F0F0F0]">
        <div className="absolute inset-0 bg-[url('/imgs/noise.png')] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
                DATA_SHEETS_V2.0
              </div>
              <h1 className="font-black text-5xl md:text-7xl uppercase mb-8 leading-none">
                Technical<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] [-webkit-text-stroke:2px_black]">Specs.</span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-xl max-w-xl mb-8 border-l-4 border-black pl-6">
                Deep dive into material structures, barrier properties, and certification data. Transparency is our policy.
              </p>
              <div className="flex flex-wrap gap-4">
                 <NeoButton onClick={() => document.getElementById('spec-finder-sec')?.scrollIntoView({ behavior: 'smooth' })}>
                  Spec Finder App <ArrowRight className="w-5 h-5" />
                 </NeoButton>
              </div>
            </div>
            <div className="flex-1 relative">
                <div className="border-4 border-black p-2 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-3 transition-transform hover:rotate-0">
                  <img src="/imgs/spec/tech-spec-hero.png" alt="Tech Spec Preview" className="w-full h-auto border-2 border-black" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2C Material Spec Finder Section */}
      <section id="spec-finder-sec" className="py-20 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="border-4 border-black bg-[#F9F9F9] p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* Wizard Steps */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="font-black text-3xl uppercase tracking-tight flex items-center gap-2 mb-2">
                    <Sparkles className="w-6 h-6 text-black fill-current animate-pulse" /> Material Spec Finder
                  </h2>
                  <p className="font-['JetBrains_Mono'] text-xs font-bold text-gray-500 uppercase">Input your target criteria to dynamically fetch compliant laminates.</p>
                </div>

                {/* Industry Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] text-gray-700 mb-2">// 1. SELECT PRODUCT CATEGORY</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'coffee', label: 'Coffee & Tea', icon: <Coffee className="w-4 h-4" /> },
                      { id: 'powder', label: 'Powders', icon: <Layers className="w-4 h-4" /> },
                      { id: 'pet', label: 'Pet Food', icon: <Heart className="w-4 h-4" /> },
                      { id: 'liquids', label: 'Liquids & Purees', icon: <Droplet className="w-4 h-4" /> },
                      { id: 'snacks', label: 'Snacks & Bakery', icon: <Package className="w-4 h-4" /> }
                    ].map(ind => (
                      <button
                        key={ind.id}
                        onClick={() => setSelectedIndustry(ind.id)}
                        className={`flex items-center gap-2 px-3 py-2.5 border-2 border-black font-bold text-xs uppercase tracking-tight transition ${
                          selectedIndustry === ind.id 
                            ? 'bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white hover:bg-[#D4FF00]'
                        }`}
                      >
                        {ind.icon}
                        <span>{ind.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Eco Preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] text-gray-700 mb-2">// 2. SELECT SUSTAINABILITY TARGET</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'compostable', label: 'Certified Compostable', badge: 'ASTM D6400' },
                      { id: 'recyclable', label: 'Curbside Recyclable', badge: 'Mono-Material' },
                      { id: 'pcr', label: 'Circular Recycled PCR', badge: 'GRS Certified' },
                      { id: 'biope', label: 'Sugarcane Bio-PE', badge: 'Carbon-Negative' }
                    ].map(eco => (
                      <button
                        key={eco.id}
                        onClick={() => setSelectedEco(eco.id)}
                        className={`text-left p-3 border-2 border-black font-bold transition flex flex-col justify-between ${
                          selectedEco === eco.id
                            ? 'bg-black text-[#00FFFF] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white hover:bg-[#00FFFF]'
                        }`}
                      >
                        <span className="text-xs uppercase">{eco.label}</span>
                        <span className={`text-[10px] font-mono mt-1 ${selectedEco === eco.id ? 'text-[#00FFFF]' : 'text-neutral-500'}`}>{eco.badge}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Barrier Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider font-['JetBrains_Mono'] text-gray-700 mb-2">// 3. SELECT REQUIRED BARRIER LEVEL</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'ultra', label: 'Ultra High', desc: 'Foil Equivalent' },
                      { id: 'high', label: 'High Barrier', desc: 'Metallized' },
                      { id: 'medium', label: 'Standard', desc: 'Clear/PVOH' },
                      { id: 'low', label: 'Low Barrier', desc: 'Breathable' }
                    ].map(bar => (
                      <button
                        key={bar.id}
                        onClick={() => setSelectedBarrier(bar.id)}
                        className={`text-center p-2.5 border-2 border-black font-bold transition flex flex-col items-center justify-center ${
                          selectedBarrier === bar.id
                            ? 'bg-black text-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-white hover:bg-[#D4FF00]'
                        }`}
                      >
                        <span className="text-xs uppercase leading-tight">{bar.label}</span>
                        <span className="text-[9px] font-normal font-mono opacity-80 mt-0.5">{bar.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Spec Output */}
              <div className="w-full lg:w-[360px] border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <div className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] text-xs font-bold uppercase py-1 px-2.5 inline-block mb-3">
                    RECOMMENDED_MATCH
                  </div>
                  <h3 className="font-black text-2xl uppercase leading-tight mb-2">{bestMatch.name}</h3>
                  <div className="text-xs font-['Space_Grotesk'] text-gray-500 mb-4">{bestMatch.series}</div>

                  <div className="border-2 border-black overflow-hidden aspect-[16/10] mb-4 bg-neutral-100">
                    <img src={bestMatch.image} alt={bestMatch.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Technical Metrics */}
                  <div className="space-y-2 border-t-2 border-dashed border-black pt-4 font-['JetBrains_Mono'] text-xs font-bold">
                    <div className="flex justify-between">
                      <span className="text-gray-500">STRUCTURE:</span>
                      <span className="text-black text-right max-w-[65%]">{bestMatch.structure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">THICKNESS:</span>
                      <span className="text-black">{bestMatch.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">WVTR RATE:</span>
                      <span className="text-green-700">{bestMatch.wvtr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">OTR RATE:</span>
                      <span className="text-green-700">{bestMatch.otr}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Link
                    to={bestMatch.path}
                    className="w-full border-4 border-black py-2.5 bg-black hover:bg-neutral-800 text-[#D4FF00] font-black uppercase text-center text-xs tracking-wider block shadow-[4px_4px_0px_0px_rgba(20,83,45,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    View Detailed Spec Sheet
                  </Link>
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-4 border-black py-2 bg-white hover:bg-neutral-100 text-black font-black uppercase text-center text-xs tracking-wider block"
                  >
                    Request Physical Sample Box
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section id="specs-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <NeoCard key={spec.id} className={`flex flex-col h-full ${spec.id === 'home-compostable' ? 'md:col-span-2 lg:col-span-3' : ''}`} color={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                <div className="border-b-4 border-black pb-4 mb-6">
                   <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {spec.id === 'home-compostable' && <Home className="w-6 h-6 text-green-600" />}
                        <h2 className="font-black text-2xl uppercase">{spec.title}</h2>
                      </div>
                      <div className="bg-black text-white px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold">
                        {spec.id.toUpperCase()}
                      </div>
                   </div>
                   <p className="font-['JetBrains_Mono'] font-bold text-gray-500">{spec.subtitle}</p>
                </div>

                {spec.id === 'home-compostable' ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Image + Description + Barrier */}
                    <div className="flex flex-col">
                      <div className="mb-6 border-4 border-black overflow-hidden relative group">
                        <img src={spec.image} alt={spec.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <Eye className="text-white w-12 h-12" />
                        </div>
                      </div>
                      <p className="font-['Space_Grotesk'] mb-6">{spec.description}</p>
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2 font-bold font-['JetBrains_Mono'] uppercase text-sm">
                          <Zap className="w-4 h-4" /> Barrier Properties
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {(spec as any).barrier?.map((b: any) => (
                            <div key={b.label} className="bg-green-50 border-2 border-black p-3 text-center">
                              <div className="font-black text-xl text-green-700">{b.value}</div>
                              <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase text-gray-500 mt-1">{b.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2 font-bold font-['JetBrains_Mono'] uppercase text-sm">
                          <Layers className="w-4 h-4" /> Structure
                        </div>
                        <div className="bg-gray-100 border-2 border-black p-3 space-y-2">
                          {spec.layers.map((layer, i) => (
                            <div key={i} className="flex justify-between text-sm border-b border-gray-300 last:border-0 pb-1 last:pb-0">
                              <span className="font-bold">{layer.name}</span>
                              <span className="font-mono text-gray-600">{layer.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2 font-bold font-['JetBrains_Mono'] uppercase text-sm">
                          <ShieldCheck className="w-4 h-4" /> Certifications
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {spec.certifications.map((cert) => (
                            <NeoBadge key={cert} color="bg-[#D4FF00]">{cert}</NeoBadge>
                          ))}
                        </div>
                      </div>
                      <NeoButton variant="dark" className="w-full justify-center mt-auto" href={spec.pdfUrl} target="_blank">
                        <FileText className="w-4 h-4" /> Download PDF
                      </NeoButton>
                    </div>

                    {/* Right: Data Sheet */}
                    {(spec as any).dataSheet && (
                      <div className="flex flex-col">
                        <div className="bg-amber-50 border-4 border-black p-6">
                          <h3 className="font-black text-lg uppercase mb-1 border-b-2 border-black pb-2 mb-4">Product Data Sheet</h3>
                          <div className="space-y-2 mb-4 font-['JetBrains_Mono'] text-sm">
                            <div className="flex justify-between border-b border-gray-300 pb-1">
                              <span className="font-bold">Product Name</span>
                              <span className="text-gray-700 text-right max-w-[55%]">{(spec as any).dataSheet.productName}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300 pb-1">
                              <span className="font-bold">Structure</span>
                              <span className="text-gray-700">{(spec as any).dataSheet.structure}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-300 pb-1">
                              <span className="font-bold">Total Thickness</span>
                              <span className="text-gray-700">{(spec as any).dataSheet.totalThickness}</span>
                            </div>
                            <div className="flex justify-between pb-1">
                              <span className="font-bold">Total Weight</span>
                              <span className="text-gray-700">{(spec as any).dataSheet.totalWeight}</span>
                            </div>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs border border-black border-collapse">
                              <thead className="bg-black text-white">
                                <tr>
                                  <th className="p-2 text-left border border-gray-600">Layer / 层级</th>
                                  <th className="p-2 text-left border border-gray-600">Material / 材料</th>
                                  <th className="p-2 text-center border border-gray-600">g/m²</th>
                                  <th className="p-2 text-center border border-gray-600">mm</th>
                                  <th className="p-2 text-center border border-gray-600">μm</th>
                                  <th className="p-2 text-center border border-gray-600">Wt%</th>
                                  <th className="p-2 text-center border border-gray-600">T%</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(spec as any).dataSheet.layers.map((row: any, i: number) => (
                                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/60'}>
                                    <td className="p-2 border border-gray-300 font-bold whitespace-nowrap">{row.layer}</td>
                                    <td className="p-2 border border-gray-300 text-gray-700">{row.material}</td>
                                    <td className="p-2 border border-gray-300 text-center font-mono">{row.gsm}</td>
                                    <td className="p-2 border border-gray-300 text-center font-mono">{row.thicknessMm}</td>
                                    <td className="p-2 border border-gray-300 text-center font-mono">{row.thicknessMu}</td>
                                    <td className="p-2 border border-gray-300 text-center font-mono">{row.weightShare}%</td>
                                    <td className="p-2 border border-gray-300 text-center font-mono">{row.thickShare}%</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="mb-6 border-4 border-black overflow-hidden relative group">
                      <img src={spec.image} alt={spec.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Eye className="text-white w-12 h-12" />
                       </div>
                    </div>
                    <p className="font-['Space_Grotesk'] mb-6 flex-grow">{spec.description}</p>
                    <div className="space-y-6 mb-8">
                       <div>
                          <div className="flex items-center gap-2 mb-2 font-bold font-['JetBrains_Mono'] uppercase text-sm">
                             <Layers className="w-4 h-4" /> Structure
                          </div>
                          <div className="bg-gray-100 border-2 border-black p-3 space-y-2">
                             {spec.layers.map((layer, i) => (
                                <div key={i} className="flex justify-between text-sm border-b border-gray-300 last:border-0 pb-1 last:pb-0">
                                   <span className="font-bold">{layer.name}</span>
                                   <span className="font-mono text-gray-600">{layer.desc}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                    <NeoButton variant="dark" className="w-full justify-center mt-auto" href={spec.pdfUrl} target="_blank">
                       <FileText className="w-4 h-4" /> Download PDF
                    </NeoButton>
                  </>
                )}
              </NeoCard>
            ))}
          </div>
        </div>
      </section>
    </>
  ) : (
    <>
      <Helmet>
        <title>Technical Specifications | Achieve Pack</title>
        <meta name="description" content="Technical data sheets and detailed material specifications for sustainable packaging. Achieve Pack engineering hub." />
      </Helmet>

      {/* Hero Section - Professional */}
      <section className="bg-neutral-900 text-white py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                <FlaskConical className="w-3.5 h-3.5" /> Technical Data Sheets v2.0
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Specification Hub</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                A comprehensive engineering directory of our sustainable material structures, barrier performance metrics, and regulatory certifications. Designed for rigorous compliance and circular economy standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#spec-finder-sec" className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2">
                  Launch Spec Finder <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#series-index" className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all border border-neutral-700">
                  Browse Series Catalog
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="relative group">
                {/* Visual Glow Effect */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                {/* Image card wrapper */}
                <div className="relative bg-neutral-950/60 backdrop-blur-xl border border-neutral-800 p-2.5 rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                  <img 
                    src="/imgs/spec/tech-spec-hero-b2b.png" 
                    alt="High-Barrier Sustainable Flexible Packaging Layers Diagram" 
                    className="w-full h-full object-cover rounded-2xl border border-neutral-850/80 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Material Spec Finder App */}
      <section id="spec-finder-sec" className="py-16 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 md:p-8 rounded-2xl border border-neutral-700 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* Wizard Steps */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-amber-400 flex items-center gap-2 mb-2">
                    <Sparkles className="w-6 h-6" /> Material Spec Finder
                  </h2>
                  <p className="text-xs text-neutral-300">Select your industry and performance targets to match precise material specifications.</p>
                </div>

                {/* Industry Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">1. What are you packaging?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'coffee', label: 'Coffee & Tea', icon: <Coffee className="w-4 h-4" /> },
                      { id: 'powder', label: 'Powders / Supplements', icon: <Layers className="w-4 h-4" /> },
                      { id: 'pet', label: 'Pet Food / Treats', icon: <Heart className="w-4 h-4" /> },
                      { id: 'liquids', label: 'Liquids & Purees', icon: <Droplet className="w-4 h-4" /> },
                      { id: 'snacks', label: 'Snacks & Bakery', icon: <Package className="w-4 h-4" /> }
                    ].map(ind => (
                      <button
                        key={ind.id}
                        onClick={() => setSelectedIndustry(ind.id)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium transition ${
                          selectedIndustry === ind.id 
                            ? 'bg-amber-500 border-amber-400 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20'
                            : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-200'
                        }`}
                      >
                        {ind.icon}
                        <span>{ind.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Eco Preference */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">2. What is your sustainability target?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'compostable', label: 'Certified Compostable', badge: 'EN 13432 / ASTM D6400' },
                      { id: 'recyclable', label: 'Curbside Recyclable', badge: 'Mono-Material PE/PP' },
                      { id: 'pcr', label: 'Circular Recycled PCR', badge: 'GRS Global Standard' },
                      { id: 'biope', label: 'Sugarcane Bio-PE', badge: 'Carbon-Negative Bio-Polymer' }
                    ].map(eco => (
                      <button
                        key={eco.id}
                        onClick={() => setSelectedEco(eco.id)}
                        className={`text-left p-3.5 rounded-xl border transition flex flex-col justify-between ${
                          selectedEco === eco.id
                            ? 'bg-amber-500 border-amber-400 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20'
                            : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-200'
                        }`}
                      >
                        <span className="text-xs uppercase">{eco.label}</span>
                        <span className={`text-[10px] font-mono mt-1 ${selectedEco === eco.id ? 'text-neutral-950 font-semibold' : 'text-neutral-400'}`}>{eco.badge}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Barrier Requirements */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">3. What is your required barrier level?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'ultra', label: 'Ultra High', desc: 'Foil Equivalent' },
                      { id: 'high', label: 'High Barrier', desc: 'Metallized' },
                      { id: 'medium', label: 'Standard', desc: 'Clear/EVOH' },
                      { id: 'low', label: 'Low Barrier', desc: 'Breathable' }
                    ].map(bar => (
                      <button
                        key={bar.id}
                        onClick={() => setSelectedBarrier(bar.id)}
                        className={`text-center p-2.5 rounded-xl border transition flex flex-col items-center justify-center ${
                          selectedBarrier === bar.id
                            ? 'bg-amber-500 border-amber-400 text-neutral-950 font-semibold shadow-lg shadow-amber-500/20'
                            : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-neutral-200'
                        }`}
                      >
                        <span className="text-xs uppercase leading-tight">{bar.label}</span>
                        <span className="text-[9px] font-normal font-mono opacity-80 mt-0.5">{bar.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* B2B Recommended Spec Output */}
              <div className="w-full lg:w-[360px] bg-neutral-950 p-6 rounded-xl border border-neutral-700 flex flex-col justify-between">
                <div>
                  <div className="text-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">// Recommended Material Match</span>
                    <h3 className="text-2xl font-extrabold text-amber-400 mt-1 leading-tight">{bestMatch.name}</h3>
                    <div className="text-xs text-neutral-400 font-medium mt-0.5">{bestMatch.series}</div>
                  </div>

                  <div className="border border-neutral-800 rounded-lg overflow-hidden aspect-[16/10] mb-4 bg-neutral-900">
                    <img src={bestMatch.image} alt={bestMatch.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Technical Metrics */}
                  <div className="space-y-2 text-xs border-t border-neutral-800 pt-4">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">STRUCTURE:</span>
                      <span className="font-bold text-neutral-200 text-right max-w-[65%]">{bestMatch.structure}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">THICKNESS:</span>
                      <span className="font-semibold text-neutral-300">{bestMatch.thickness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">WVTR RATE:</span>
                      <span className="font-bold text-green-400">{bestMatch.wvtr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">OTR RATE:</span>
                      <span className="font-bold text-green-400">{bestMatch.otr}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <Link
                    to={bestMatch.path}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl text-xs transition"
                  >
                    View Technical Spec Sheet
                  </Link>
                  <a
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 text-neutral-200 font-semibold rounded-xl text-xs transition"
                  >
                    Request Physical Sample Kit
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technical Index Hub */}
      <section id="series-index" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* PCR Series Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-neutral-200 pb-4">
              <h2 className="text-3xl font-bold text-neutral-900">PCR Series</h2>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">Post-Consumer Recycled</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: 'PCR PET Duplex Clear', path: '/spec/pcr-pet-duplex-clear' },
                { name: 'PCR PP Duplex Clear', path: '/spec/pcr-pp-duplex-clear' },
                { name: 'PCR PET Kraft Triplex Clear', path: '/spec/pcr-pet-kraft-triplex-clear' },
                { name: 'PCR PP Kraft Triplex Clear', path: '/spec/pcr-pp-kraft-triplex-clear' },
                { name: 'PCR PET Duplex No Window', path: '/spec/pcr-pet-duplex-nowindow' },
                { name: 'PCR PP Duplex No Window', path: '/spec/pcr-pp-duplex-nowindow' },
                { name: 'PCR PET Triplex Metalized', path: '/spec/pcr-pet-triplex-metalised' },
                { name: 'PCR PP Triplex Metalized', path: '/spec/pcr-pp-triplex-metalised' },
                { name: 'PCR Kraft VMPET', path: '/spec/pcr-kraft-vmpet' },
                { name: 'PCR PET Triplex Aluminum', path: '/spec/pcr-pet-triplex-aluminum' },
                { name: 'PCR PP Triplex Aluminum', path: '/spec/pcr-pp-triplex-aluminum' },
                { name: 'PCR PET Kraft Quadlex Aluminum', path: '/spec/pcr-pet-kraft-quadlex-aluminum' },
                { name: 'PCR PP Kraft Quadlex Aluminum', path: '/spec/pcr-pp-kraft-quadlex-aluminum' },
                { name: 'PCR Kraft Duplex Low', path: '/spec/pcr-kraft-duplex-low' },
              ].map((item) => {
                const slug = item.path.replace('/spec/', '');
                const imgPath = `/imgs/spec/${slug}.webp`;
                return (
                  <Link key={item.path} to={item.path} className="group bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary-500 transition-all flex flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-150">
                      <img src={imgPath} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex justify-between items-center flex-grow">
                      <span className="font-semibold text-neutral-800 group-hover:text-primary-600 text-xs leading-snug">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bio-PE Series Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-neutral-200 pb-4">
              <h2 className="text-3xl font-bold text-neutral-900">Bio-PE Series</h2>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase">Plant-Based Bio-Polyethylene</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: 'Bio-PE PET Duplex Clear', path: '/spec/biope-pet-duplex-clear' },
                { name: 'Bio-PE PP Duplex Clear', path: '/spec/biope-pp-duplex-clear' },
                { name: 'Bio-PE PET Kraft Triplex Clear', path: '/spec/biope-pet-kraft-triplex-clear' },
                { name: 'Bio-PE PP Kraft Triplex Clear', path: '/spec/biope-pp-kraft-triplex-clear' },
                { name: 'Bio-PE PET Duplex No Window', path: '/spec/biope-pet-duplex-nowindow' },
                { name: 'Bio-PE PP Duplex No Window', path: '/spec/biope-pp-duplex-nowindow' },
                { name: 'Bio-PE PET Triplex Metalized', path: '/spec/biope-pet-triplex-metalised' },
                { name: 'Bio-PE PP Triplex Metalized', path: '/spec/biope-pp-triplex-metalised' },
                { name: 'Bio-PE Kraft VMPET', path: '/spec/biope-kraft-vmpet' },
                { name: 'Bio-PE PET Triplex Aluminum', path: '/spec/biope-pet-triplex-aluminum' },
                { name: 'Bio-PE PP Triplex Aluminum', path: '/spec/biope-pp-triplex-aluminum' },
                { name: 'Bio-PE PET Kraft Quadlex Aluminum', path: '/spec/biope-pet-kraft-quadlex-aluminum' },
                { name: 'Bio-PE PP Kraft Quadlex Aluminum', path: '/spec/biope-pp-kraft-quadlex-aluminum' },
                { name: 'Bio-PE Kraft Duplex Low', path: '/spec/biope-kraft-duplex-low' },
              ].map((item) => {
                const slug = item.path.replace('/spec/', '');
                const imgPath = `/imgs/spec/${slug}.webp`;
                return (
                  <Link key={item.path} to={item.path} className="group bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary-500 transition-all flex flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-150">
                      <img src={imgPath} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex justify-between items-center flex-grow">
                      <span className="font-semibold text-neutral-800 group-hover:text-primary-600 text-xs leading-snug">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recyclable Mono-Material Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 border-b border-neutral-200 pb-4">
              <h2 className="text-3xl font-bold text-neutral-900">Recyclable Mono-Materials</h2>
              <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-2 py-1 rounded uppercase">100% Recyclable (PE/PP)</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: 'Mono-PE Duplex Clear', path: '/spec/mono-pe-duplex-clear' },
                { name: 'Mono-PP Duplex Clear', path: '/spec/mono-pp-duplex-clear' },
                { name: 'Mono-PE Duplex No Window', path: '/spec/mono-pe-duplex-nowindow' },
                { name: 'Mono-PP Duplex No Window', path: '/spec/mono-pp-duplex-nowindow' },
              ].map((item) => {
                const slug = item.path.replace('/spec/', '');
                const imgPath = `/imgs/spec/${slug}.webp`;
                return (
                  <Link key={item.path} to={item.path} className="group bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary-500 transition-all flex flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-150">
                      <img src={imgPath} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex justify-between items-center flex-grow">
                      <span className="font-semibold text-neutral-800 group-hover:text-primary-600 text-xs leading-snug">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Compostable Series Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-neutral-200 pb-4">
              <h2 className="text-3xl font-bold text-neutral-900">Compostable Series</h2>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded uppercase">Certified Compostable (EN 13432)</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { name: 'Bio-Cello Duplex Clear', path: '/spec/bio-cello-duplex-clear' },
                { name: 'Bio-Cello Triplex Highest', path: '/spec/bio-cello-triplex-highest' },
                { name: 'Bio-Cello Triplex Metalized', path: '/spec/bio-cello-triplex-metalised' },
                { name: 'Bio-Kraft VM-Cello', path: '/spec/bio-kraft-vm-cello' },
                { name: 'Bio-Kraft PBAT Low', path: '/spec/bio-kraft-pbat-low' },
              ].map((item) => {
                const slug = item.path.replace('/spec/', '');
                const imgPath = `/imgs/spec/${slug}.webp`;
                return (
                  <Link key={item.path} to={item.path} className="group bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-primary-500 transition-all flex flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden border-b border-neutral-150">
                      <img src={imgPath} alt={item.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex justify-between items-center flex-grow">
                      <span className="font-semibold text-neutral-800 group-hover:text-primary-600 text-xs leading-snug">{item.name}</span>
                      <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-primary-500 flex-shrink-0 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Lab Verification Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Verified Lab Performance</h2>
              <p className="text-xl text-neutral-400 mb-8">
                Every material structure in our catalog undergoes rigorous third-party testing to verify barrier properties, seal integrity, and environmental compliance.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">0.5</div>
                  <div className="text-sm text-neutral-400 uppercase font-bold tracking-wider">WVTR g/m²/day</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">&lt;1.0</div>
                  <div className="text-sm text-neutral-400 uppercase font-bold tracking-wider">OTR cc/m²/day</div>
                </div>
              </div>
              <a href="https://calendly.com/30-min-free-packaging-consultancy" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
                Request Test Reports
              </a>
            </div>
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
               <FlaskConical className="w-full h-full p-20" />
            </div>
          </div>
        </div>
      </section>
    </>
  )

  if (pouchMode) {
    return (
      <PouchLayout>
        {Content}
      </PouchLayout>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-grow">
        {Content}
      </main>
      <Footer />
    </div>
  )
}
