import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Leaf, Recycle, Heart } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'

// Reusing Neo-components for consistency
const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
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

export default function PouchMaterialsPage() {
  const MATERIALS = [
    {
      id: 'compostable',
      name: 'HOME & INDUSTRIAL COMPOSTABLE',
      description: 'Breaks down in home and industrial environments. Certified TUV & BPI.',
      pros: ['Zero Waste', 'Plant-Based', 'Certified', 'Industrial Compostable'],
      cons: ['6-12 Months Shelf Life', 'Higher Cost'],
      icon: Leaf,
      color: 'bg-[#D4FF00]', // Yellow
    },
    {
      id: 'recyclable',
      name: 'RECYCLABLE_MONO',
      description: 'Mono-material PE or PP structures. Acceptable in standard recycling streams.',
      pros: ['Excellent Barrier', 'Low Cost', 'Wide Acceptance'],
      cons: ['Requires Rinse', 'Not Compostable'],
      icon: Recycle,
      color: 'bg-[#00FFFF]', // Cyan
    },
    {
      id: 'pcr',
      name: 'PCR & BIO PE CONTENT',
      description: 'Post-Consumer Recycled plastics & Bio-based Polyethylene. Giving new life to old waste / Plant-based resources.',
      pros: ['Circular Economy', 'Reduced Virgin Plastic', 'Durable', 'Bio PE Available'],
      cons: ['Slight visual imperfections', 'Specific sourcing'],
      icon: Heart,
      color: 'bg-[#FF00FF]', // Magenta
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Materials | POUCH.ECO</title>
        <meta name="description" content="Detailed guide to our sustainable packaging materials: Compostable, Recyclable, and Post-Consumer Recycled (PCR)." />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-materials"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform rotate-2">
            MATERIAL_SCIENCE
          </div>
          <h1 className="font-black text-5xl md:text-8xl uppercase mb-8 leading-none">
            Choose<br />Wisely.
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            Not all "eco" is created equal. We prioritize verified, certified, and honest materials.
          </p>
        </div>
      </section>

      {/* Material Grid */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {MATERIALS.map((material) => (
              <NeoCard key={material.id} className={`${material.color} flex flex-col h-full`}>
                <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <material.icon className="w-8 h-8" />
                </div>
                <h2 className="font-black text-2xl mb-4 uppercase">{material.name}</h2>
                <p className="font-['Space_Grotesk'] mb-6 flex-grow">{material.description}</p>
                
                <div className="font-['JetBrains_Mono'] text-xs space-y-4 border-t-2 border-black pt-4">
                  <div>
                    <span className="font-bold block mb-1">PROS:</span>
                    <ul className="list-disc list-inside">
                      {material.pros.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">CONS:</span>
                    <ul className="list-disc list-inside text-gray-600">
                      {material.cons.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges / Certs */}
      <section className="py-24 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-black text-4xl mb-12 uppercase">Certifications Matter</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <img src="/imgs/cert/cert-din-home-compost.png" alt="DIN Home Compost" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ABA-as5810.png" alt="ABA Home Compost" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-pcr-grs.webp" alt="GRS Certified" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-BioPE.webp" alt="Biobased PE" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-fsc.png" alt="FSC Certified" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO9001.webp" alt="ISO 9001" className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO14001-cert.webp" alt="ISO 14001" className="h-24 w-auto object-contain mx-auto" />
             </div>
          <div className="mt-12">
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Speak to an Expert
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
