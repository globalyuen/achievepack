import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import { ArrowRight, Eye, FileText, FlaskConical, Layers, ShieldCheck, Zap } from 'lucide-react'

// Reusing Neo-components for consistency
const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1 inline-flex items-center gap-2"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#FF00FF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

export default function PouchTechSpecsPage() {
  const specs = [
    {
      id: 'compostable',
      title: 'Compostable',
      subtitle: 'Kraft / Triplex',
      description: 'High barrier compostable structure designed for maximum shelf life while maintaining eco-compliance.',
      image: '/imgs/spec/bio-kraft-vm-cello.webp', // Updated to correct compostable structure
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
        { name: 'Sealant', desc: 'Bio-PE (Sugar Cane)' }
      ],
      features: ['Renewable Resource', 'Carbon Negative', 'High Strength', 'Drop-in Replacement'],
      certifications: ['Bonsucro', 'ASTM D6866', 'Carbon Trust'],
      pdfUrl: '/pdfs/bio-pe-spec-sheet.pdf'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Technical Specifications | POUCH.ECO</title>
        <meta name="description" content="Detailed technical specifications for our eco-friendly packaging materials. Download data sheets and view layer structures." />
      </Helmet>

      {/* Hero Section */}
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
                 <NeoButton onClick={() => document.getElementById('specs-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Specs <ArrowRight className="w-5 h-5" />
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

      {/* Specs Grid */}
      <section id="specs-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <NeoCard key={spec.id} className="flex flex-col h-full" color={index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                <div className="border-b-4 border-black pb-4 mb-6">
                   <div className="flex justify-between items-start mb-2">
                      <h2 className="font-black text-2xl uppercase">{spec.title}</h2>
                      <div className="bg-black text-white px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold">
                        {spec.id.toUpperCase()}
                      </div>
                   </div>
                   <p className="font-['JetBrains_Mono'] font-bold text-gray-500">{spec.subtitle}</p>
                </div>

                <div className="mb-6 border-4 border-black overflow-hidden relative group">
                  <img src={spec.image} alt={spec.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye className="text-white w-12 h-12" />
                   </div>
                </div>

                <p className="font-['Space_Grotesk'] mb-6 flex-grow">{spec.description}</p>

                <div className="space-y-6 mb-8">
                   {/* Layers */}
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
                   
                   {/* Certs */}
                   <div>
                      <div className="flex items-center gap-2 mb-2 font-bold font-['JetBrains_Mono'] uppercase text-sm">
                         <ShieldCheck className="w-4 h-4" /> Certifications
                      </div>
                      <div className="flex flex-wrap gap-2">
                         {spec.certifications.map((cert) => (
                            <NeoBadge key={cert} color="bg-[#00FFFF]">{cert}</NeoBadge>
                         ))}
                      </div>
                   </div>
                </div>

                <NeoButton variant="dark" className="w-full justify-center mt-auto" onClick={() => window.open(spec.pdfUrl, '_blank')}>
                   <FileText className="w-4 h-4" /> Download PDF
                </NeoButton>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Testing Section */}
      <section className="py-24 border-t-4 border-black bg-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                 <h2 className="font-black text-4xl md:text-6xl uppercase mb-6 leading-none">
                    Verified<br/>Performance.
                 </h2>
                 <p className="font-['Space_Grotesk'] text-xl mb-8 font-bold border-l-4 border-black pl-6">
                    We don't just guess. Every material undergoes rigorous testing for barrier properties, seal strength, and compostability.
                 </p>
                 <ul className="space-y-4 font-['JetBrains_Mono'] mb-8">
                    <li className="flex items-center gap-3">
                       <FlaskConical className="w-6 h-6 border-2 border-black rounded-full p-1 bg-white" />
                       WVTR (Water Vapor Transmission Rate) Testing
                    </li>
                    <li className="flex items-center gap-3">
                       <Zap className="w-6 h-6 border-2 border-black rounded-full p-1 bg-white" />
                       OTR (Oxygen Transmission Rate) Analysis
                    </li>
                    <li className="flex items-center gap-3">
                       <ShieldCheck className="w-6 h-6 border-2 border-black rounded-full p-1 bg-white" />
                       Tensile & Puncture Strength Verification
                    </li>
                 </ul>
                 <NeoButton variant="secondary" onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
                    Request Test Reports
                 </NeoButton>
              </div>
              <div className="flex-1">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                       <div className="font-black text-4xl mb-2">0.5</div>
                       <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase">g/m²/day WVTR</div>
                    </div>
                    <div className="bg-black text-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                       <div className="font-black text-4xl mb-2 text-[#D4FF00]">&lt;1.0</div>
                       <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase">cc/m²/day OTR</div>
                    </div>
                    <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] col-span-2">
                       <div className="font-black text-4xl mb-2">100%</div>
                       <div className="font-['JetBrains_Mono'] text-xs font-bold uppercase">BPI Certified Compostable</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </PouchLayout>
  )
}
