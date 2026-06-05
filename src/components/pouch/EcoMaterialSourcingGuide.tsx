import React from 'react'
import { Link } from 'react-router-dom'
import { Award, ShieldCheck, Leaf, Recycle, Sparkles } from 'lucide-react'
import { isPouch } from '../../utils/domain'

export default function EcoMaterialSourcingGuide() {
  const isPouchDomain = isPouch()

  const materials = [
    {
      title: '1. Curbside Recyclable Mono-PE',
      desc: 'Made from 100% Polyethylene (LDPE #4). This single-polymer structure is fully recyclable through European/UK curbside collection and USA Store Drop-Off networks. Optional EVOH coatings (<5% total weight) deliver extreme oxygen and moisture barriers without compromising the recycling stream.',
      link: '/materials/recyclable-mono-pe',
      color: 'bg-[#D4FF00]',
      icon: <Recycle className="w-6 h-6 text-black" />,
      tag: 'Widely Recyclable'
    },
    {
      title: '2. Heat-Resistant Recyclable Mono-PP',
      desc: 'Formulated from single-polymer Polypropylene (PP #5), providing excellent optical clarity, high rigidity, and thermal tolerance. Engineered specifically to survive hot-fill processes, pasteurization, retort cooking, and microwave sterilization lines.',
      link: '/materials/recyclable-mono-pp',
      color: 'bg-[#00FFFF]',
      icon: <Sparkles className="w-6 h-6 text-black" />,
      tag: 'PP #5 Circular'
    },
    {
      title: '3. Certified Compostable Biopolymers',
      desc: 'Constructed from plant-derived biopolymers including natural Kraft paper, NatureFlex cellulose, and certified PLA/PBAT/PHA sealable blends. Extensively tested and certified under ASTM D6400 (USA) and EN 13432 (EU) to degrade into organic soil nutrients within 180 days.',
      link: '/materials/compostable',
      color: 'bg-emerald-50',
      icon: <Leaf className="w-6 h-6 text-emerald-700" />,
      tag: 'ASTM D6400 / EN 13432'
    },
    {
      title: '4. PCR (Post-Consumer Recycled) Polymers',
      desc: 'Integrates GRS-certified post-consumer recycled plastic resins into the laminate structure. Helps brands reduce dependence on virgin fossil resources, lower carbon footprints, and completely bypass plastic packaging taxes in global regions.',
      link: '/materials/pcr',
      color: 'bg-neutral-100',
      icon: <ShieldCheck className="w-6 h-6 text-neutral-800" />,
      tag: 'GRS Recycled Content'
    },
    {
      title: '5. Carbon-Negative Sugarcane Bio-PE',
      desc: 'Sourced from sugarcane bio-PE that acts exactly like petroleum PE. Captures atmospheric CO₂ during sugarcane growth, delivering carbon-negative performance while remaining 100% recyclable in standard PE sorting streams (#4).',
      link: '/materials/bio-pe',
      color: 'bg-[#FFA500]',
      icon: <Award className="w-6 h-6 text-black" />,
      tag: 'Carbon Negative'
    }
  ]

  if (isPouchDomain) {
    return (
      <section className="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-12">
        <div className="flex items-start gap-4 border-b-4 border-black pb-4 mb-6">
          <div className="p-3 bg-[#D4FF00] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Award className="w-8 h-8 text-black" />
          </div>
          <div>
            <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight text-black">
              AchievePack Eco Material Specifications
            </h2>
            <p className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-500 uppercase mt-1">
              Direct-Factory Certified Sustainable Laminates
            </p>
          </div>
        </div>

        <p className="font-['JetBrains_Mono'] text-sm md:text-base text-neutral-800 leading-relaxed mb-8 font-medium">
          AchievePack designs and manufactures five classes of circular flexible barrier packaging materials. These options help brand owners meet regulatory standards (like EU PPWR and state-level laws) without sacrificing barrier performance or shelf-life.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {materials.slice(0, 4).map((m, idx) => (
            <div key={idx} className={`border-4 border-black p-5 ${m.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex flex-col justify-between text-black`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 border-2 border-black bg-white rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {m.icon}
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black">
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-black text-lg uppercase mb-2">{m.title}</h3>
                <p className="font-['JetBrains_Mono'] text-xs text-neutral-800 leading-relaxed mb-4 font-medium">
                  {m.desc}
                </p>
              </div>
              <Link 
                to={m.link}
                className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-black uppercase underline hover:text-neutral-700 mt-2"
              >
                Learn More & Specs →
              </Link>
            </div>
          ))}
        </div>

        <div className={`border-4 border-black p-5 ${materials[4].color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg flex flex-col justify-between text-black`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 border-2 border-black bg-white rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {materials[4].icon}
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black">
                {materials[4].tag}
              </span>
            </div>
            <h3 className="font-black text-lg uppercase mb-2">{materials[4].title}</h3>
            <p className="font-['JetBrains_Mono'] text-xs text-neutral-800 leading-relaxed mb-4 font-medium">
              {materials[4].desc}
            </p>
          </div>
          <Link 
            to={materials[4].link}
            className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-black uppercase underline hover:text-neutral-700 mt-2 self-start"
          >
            Learn More & Specs →
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-100 pb-4 mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-primary-50 rounded-lg text-primary-600">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-bold text-xl md:text-2xl text-neutral-900">
              AchievePack Sustainable Material Specifications
            </h2>
            <p className="text-sm text-neutral-500 font-medium">
              Factory-Direct Certified Sustainable Flexible Packaging Structures
            </p>
          </div>
        </div>
      </div>

      <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
        AchievePack engineers and manufactures five core classifications of circular flexible packaging. Designed for modern eco-conscious brands, these materials guarantee regulatory compliance (such as EU PPWR and state-level environmental guidelines) while maintaining optimal barrier integrity and shelf life.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {materials.slice(0, 4).map((m, idx) => (
          <div key={idx} className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white rounded-lg border border-neutral-200 shadow-sm">
                  {m.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
                  {m.tag}
                </span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{m.title}</h3>
              <p className="text-neutral-600 text-xs leading-relaxed mb-4">
                {m.desc}
              </p>
            </div>
            <Link 
              to={m.link}
              className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 mt-2 hover:underline"
            >
              Learn More & Specs →
            </Link>
          </div>
        ))}
      </div>

      <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 transition flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white rounded-lg border border-neutral-200 shadow-sm">
              {materials[4].icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2 py-0.5 rounded-full">
              {materials[4].tag}
            </span>
          </div>
          <h3 className="font-bold text-neutral-900 mb-2">{materials[4].title}</h3>
          <p className="text-neutral-600 text-xs leading-relaxed mb-4">
            {materials[4].desc}
          </p>
        </div>
        <Link 
          to={materials[4].link}
          className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 mt-2 hover:underline self-start"
        >
          Learn More & Specs →
        </Link>
      </div>
    </section>
  )
}
