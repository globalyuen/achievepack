import { Shield, Clock, Target, Zap, Package, Droplets, Wind, HelpCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'

// ============================================
// NEO-BRUTALIST COMPONENTS
// ============================================

const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-6 py-3 font-black uppercase text-sm tracking-wider border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1"
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#00FFFF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

const propertiesData1 = [
  { material: 'OPP 20', o2: '1900', wvtr: '6' },
  { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
  { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
  { material: 'PET 12', o2: '85', wvtr: '55' },
  { material: 'NY 15', o2: '45', wvtr: '260' },
  { material: 'CPP 20', o2: '2000', wvtr: '6' },
  { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
  { material: 'CPP 40', o2: '1700', wvtr: '5' },
  { material: 'VMCPP 25', o2: '25', wvtr: '1' },
  { material: 'VMPET 12', o2: '2', wvtr: '2' },
  { material: 'AL 7', o2: '1', wvtr: '1.4' },
];

const propertiesData2 = [
  { material: 'AL 9', o2: '1', wvtr: '1.1' },
  { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
  { material: 'KOP 21', o2: '10', wvtr: '4' },
  { material: 'KNY 17', o2: '8', wvtr: '12' },
  { material: 'KPET 12', o2: '8', wvtr: '12' },
  { material: 'PEARL 30', o2: '2200', wvtr: '9' },
  { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
];

// ============================================
// MAIN PAGE
// ============================================

export default function PouchMaterialBarrierPropertiesPage() {

  return (
    <PouchLayout>
      <Helmet>
        <title>Material Barrier Properties | Data Sheet | POUCH.ECO</title>
        <meta name="description" content="Technical data sheet detailing Oxygen Transmission Rate (O2 TR) and Water Vapor Transmission Rate (WVTR) for transparent, metallized, and kraft pouch materials." />
        <link rel="canonical" href="https://pouch.eco/barriers/material-properties" />
      </Helmet>

      {/* Hero */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <NeoBadge color="bg-[#D4FF00]">TECHNICAL SPECS</NeoBadge>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            Barrier Properties<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">The Hard Data</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl font-['Space_Grotesk']">
            <strong>Oxygen Transmission Rate (O₂ TR)</strong> and <strong>Water Vapor Transmission Rate (WVTR)</strong> across standard flexible packaging layers.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase">Key Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-[#00FFFF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Wind className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 leading-none">O₂ Transmission Rate</h3>
              </div>
              <p className="text-gray-900 mb-4 font-bold">Oxygen barrier performance.</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                Unit: cc/m² · 24hrs · atm (@ 23°C, 0% RH)
              </div>
              <p className="text-xs text-gray-700 mt-4 uppercase font-black tracking-wider">* Lower values = better barrier</p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white border-2 border-black w-14 h-14 flex items-center justify-center">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl uppercase m-0 text-white leading-none">Water Vapor Trans.</h3>
              </div>
              <p className="text-white mb-4 font-bold">Moisture barrier performance.</p>
              <div className="bg-white border-2 border-black p-3 font-mono text-sm mb-2 font-bold shadow-[4px_4px_0px_0px_#000]">
                Unit: g/m² · 24hrs (@ 38°C, 90% RH)
              </div>
              <p className="text-xs text-white mt-4 uppercase font-black tracking-wider">* Lower values = better barrier</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Main Tables */}
      <section className="py-16 px-4 bg-gray-50 border-t-4 border-b-4 border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl mb-4 uppercase text-center">The Data</h2>
          <p className="text-center text-sm font-['Space_Grotesk'] mb-12 max-w-2xl mx-auto border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Values are typical industry averages and vary based on exact film manufacturer, thickness tolerances, and environmental conditions.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#D4FF00] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">Material</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">O₂ TR<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">cc/m² 24hrs</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">WVTR<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">g/m² 24hrs</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData1.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 overflow-hidden self-start">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-[#FF00FF] font-['JetBrains_Mono']">
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm w-[40%]">Material</th>
                    <th className="p-4 border-b-4 border-r-2 border-black font-black uppercase text-sm text-center w-[30%]">O₂ TR<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">cc/m² 24hrs</span></th>
                    <th className="p-4 border-b-4 border-black font-black uppercase text-sm text-center w-[30%]">WVTR<br/><span className="text-[10px] font-normal leading-tight text-white block mt-1">g/m² 24hrs</span></th>
                  </tr>
                </thead>
                <tbody className="font-['Space_Grotesk'] font-bold">
                  {propertiesData2.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                      <td className="p-4 border-b-2 border-r-2 border-black">{row.material}</td>
                      <td className="p-4 border-b-2 border-r-2 border-black text-center font-['JetBrains_Mono']">{row.o2}</td>
                      <td className="p-4 border-b-2 border-black text-center font-['JetBrains_Mono']">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-black text-4xl mb-8 uppercase text-center">Translation for Humans</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <NeoCard color="bg-[#D4FF00]">
              <h3 className="font-black text-xl mb-4">Transparent Films</h3>
              <p className="text-gray-900 font-bold mb-2 text-sm uppercase">PET / NY / OPP</p>
              <p className="text-gray-800 text-sm font-['Space_Grotesk']">
                PET and NY offer significantly better oxygen barriers out-of-the-box compared to standard OPP.
              </p>
            </NeoCard>

            <NeoCard color="bg-black text-white">
              <h3 className="font-black text-xl mb-4 text-[#D4FF00]">Metallized Magic</h3>
              <p className="text-[#D4FF00] font-bold mb-2 text-sm uppercase">VMCPP / VMPET</p>
              <p className="text-gray-300 text-sm font-['Space_Grotesk']">
                Vacuum Metallizing vastly improves both moisture and oxygen barriers, upgrading clear films into high-barrier giants.
              </p>
            </NeoCard>

            <NeoCard color="bg-[#00FFFF]">
              <h3 className="font-black text-xl mb-4">The Ultimate Shield</h3>
              <p className="text-black font-bold mb-2 text-sm uppercase">Aluminum Foil (AL)</p>
              <p className="text-black text-sm font-['Space_Grotesk']">
                The absolute highest barrier available. Knocks both transmission rates down to ~1. Cannot be seen through.
              </p>
            </NeoCard>

            <NeoCard color="bg-[#FF00FF]">
              <h3 className="font-black text-xl mb-4 text-white">Clear But Mighty</h3>
              <p className="text-white font-bold mb-2 text-sm uppercase">PVDC Coated (KOP/KNY)</p>
              <p className="text-white text-sm font-['Space_Grotesk']">
                Applying a "K" (PVDC) coating dramatically boosts the barrier while keeping the film completely transparent.
              </p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Still Unsure? */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <NeoCard className="bg-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="font-black text-3xl mb-4">Still Not Sure?</h2>
            <p className="text-xl text-gray-700 mb-6 font-['Space_Grotesk']">
              These numbers can be dizzying! Book a <strong>FREE consultation</strong> to get a recommended barrier stack for your specific product!
            </p>
            <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
              Request Free Consultation
            </NeoButton>
          </NeoCard>
        </div>
      </section>

    </PouchLayout>
  )
}
