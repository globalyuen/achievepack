import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Flame, 
  AlertTriangle, 
  Leaf, 
  CheckCircle, 
  Clock, 
  Award, 
  Target, 
  Shield, 
  Sparkles, 
  ArrowLeftRight, 
  Wind, 
  Zap,
  Activity,
  ArrowRight
} from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchCombustionSafetyTestPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchCombustionSafetyTest'

  const floatAnim = {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  const faqs = [
    { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
    { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
    { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
    { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/materials/combustion-safety-test" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#14532d] text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroBadge`)}</span>
              </div>
              
              <h1 className="font-black text-4xl md:text-6xl leading-[0.95] tracking-tighter uppercase">
                {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-base md:text-lg max-w-xl bg-[#f8fafc] border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black leading-relaxed">
                {t(`${p}.heroDescription`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroCta1`)}</NeoButton>
                <NeoButton variant="secondary" href="#guide">{t(`${p}.heroCta2`)}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#14532d] relative z-10 rotate-1 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-[4/3] relative overflow-hidden bg-emerald-950">
                  <img 
                    src="/imgs/materials/combustion-safety-test.jpg" 
                    alt={t(`${p}.heroImageAlt`)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.burnVerifiedBadge`)}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-8 -right-8 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <NeoBadge color="magenta">{t(`${p}.audienceBadge`)}</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase">{t(`${p}.audienceTitle`)}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard color="bg-neutral-50" className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#FF00FF] border-2 border-black flex items-center justify-center font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">QA</div>
                <h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard1Title`)}</h3>
                <p className="font-['Space_Grotesk'] text-sm text-neutral-600 leading-relaxed">
                  {t(`${p}.audienceCard1Desc`)}
                </p>
              </div>
              <NeoBadge color="lime" className="mt-6 self-start">{t(`${p}.audienceCard1Badge`)}</NeoBadge>
            </NeoCard>

            <NeoCard color="bg-[#10b981]/10" className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#00FFFF] border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">DTC</div>
                <h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard2Title`)}</h3>
                <p className="font-['Space_Grotesk'] text-sm text-neutral-600 leading-relaxed">
                  {t(`${p}.audienceCard2Desc`)}
                </p>
              </div>
              <NeoBadge color="cyan" className="mt-6 self-start">{t(`${p}.audienceCard2Badge`)}</NeoBadge>
            </NeoCard>

            <NeoCard color="bg-[#D4FF00]/10" className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#D4FF00] border-2 border-black flex items-center justify-center font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">CSR</div>
                <h3 className="font-black text-xl uppercase">{t(`${p}.audienceCard3Title`)}</h3>
                <p className="font-['Space_Grotesk'] text-sm text-neutral-600 leading-relaxed">
                  {t(`${p}.audienceCard3Desc`)}
                </p>
              </div>
              <NeoBadge color="magenta" className="mt-6 self-start">{t(`${p}.audienceCard3Badge`)}</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 border-b-4 border-black bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <NeoBadge color="cyan">{t(`${p}.scienceBadge`)}</NeoBadge>
                <h2 className="font-black text-3xl md:text-5xl uppercase leading-none">{t(`${p}.scienceTitle1`)}<br/>{t(`${p}.scienceTitle2`)}</h2>
              </div>
              <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed text-neutral-700">
                {t(`${p}.scienceDesc1`)}
              </p>
              <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed text-neutral-700">
                {t(`${p}.scienceDesc2`)}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wind className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric1Title`)}</h4>
                  <p className="font-['Space_Grotesk'] text-sm text-neutral-600 leading-relaxed">
                    {t(`${p}.metric1Desc`)}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric2Title`)}</h4>
                  <p className="font-['Space_Grotesk'] text-sm text-neutral-600 leading-relaxed">
                    {t(`${p}.metric2Desc`)}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-4 border-black p-5 bg-[#D4FF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#D4FF00]" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-lg mb-1">{t(`${p}.metric3Title`)}</h4>
                  <p className="font-['Space_Grotesk'] text-sm text-neutral-900 leading-relaxed">
                    {t(`${p}.metric3Desc`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combustion Behavior Grid */}
      <section className="py-20 border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <NeoBadge color="lime">MATERIAL_DUEL</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase">PLA vs. PET Combustion Behavior</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Compostable PLA Card */}
            <NeoCard color="bg-[#14532d]/5" className="relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-neutral-900">Compostable PLA Film</h3>
                </div>
                
                <div className="inline-block bg-[#14532d] text-[#D4FF00] text-xs font-black uppercase px-3 py-1 mb-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Certified Compostable & Bio-Adhesive
                </div>
                
                <ul className="space-y-4 font-['Space_Grotesk'] text-sm mt-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Mild Natural Odor:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Burns cleanly with a pleasant, earthy scent resembling caramelized sugar, toasted corn, grass, or wood ash.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Stable Ash Integrity:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        The sticker body remains structurally solid and intact as a charcoal ash skeleton until fully extinguished.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Zero Dangerous Dripping:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Does not undergo toxic melting or dripping behavior, ensuring high physical safety during burn testing.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Zero Microplastics:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Breaks down completely in soil and industrial composting in ≤14 weeks without microplastics residue.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </NeoCard>

            {/* Standard PET Plastic Card */}
            <NeoCard color="bg-rose-50/30" className="relative overflow-hidden flex flex-col justify-between border-rose-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-rose-700" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-neutral-900">Standard PET Plastic</h3>
                </div>

                <div className="inline-block bg-rose-700 text-white text-xs font-black uppercase px-3 py-1 mb-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Fossil-Based Synthetic Polymer
                </div>

                <ul className="space-y-4 font-['Space_Grotesk'] text-sm mt-2">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Highly Pungent Odor:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Emits a highly pungent, chokingly acrid, and hazardous chemical smell characteristic of burnt synthetic plastics.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Melting & Splattering:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Melts incredibly fast and shrivels into a molten liquid pool, splattering during combustion.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Severe Toxic Dripping:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Drips hot, sticky, and flaming liquid polymer, which is highly dangerous and poses extreme contact burn risks.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900">Permanent Environmental Harm:</strong>
                      <span className="text-neutral-600 block mt-0.5">
                        Cannot biodegrade. Persists for 500+ years, fracturing into conventional toxic microplastics that enter food chains.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Visual Verification Section */}
      <section className="py-20 border-b-4 border-black bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <NeoBadge color="magenta">VISUAL_PROOF</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase text-center">Combustion Infographic</h2>
          </div>

          <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden bg-white max-w-2xl mx-auto">
            <ClickableImage 
              src="/imgs/materials/combustion-safety-test.jpg" 
              alt="Combustion Safety Test: AchievePack PLA vs. Standard PET Plastic"
              className="w-full h-auto object-cover cursor-pointer"
              caption="Left: Clean carbon-ash burn. Right: Molten PET dripping."
            />
          </div>

          <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-12 font-['Space_Grotesk']">
            <h4 className="font-black uppercase text-lg mb-3">Key Takeaways from the Lab Visuals:</h4>
            <ul className="list-disc pl-6 space-y-3 text-sm text-neutral-700">
              <li>
                <strong className="text-neutral-900">Ash Edge Stability:</strong> The PLA-based clear film generates a stable black/gray carbonized edge when burnt. It does not drop down or run.
              </li>
              <li>
                <strong className="text-neutral-900">Liquid Droplet Threat:</strong> Standard PET plastic immediately converts to a running liquid drop state that can drop onto fabrics, paper, or skin, causing deep heat-sink burns.
              </li>
              <li>
                <strong className="text-neutral-900">Natural Wood Scent vs. Pungent Benzene:</strong> PLA's gas emission is harmless CO₂ and trace water vapour with a wood ash aroma, whereas PET emits carcinogenic benzene vapors.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Materials Table Section */}
      <section className="py-20 border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <NeoBadge color="lime">TECH_SPECS</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase">Biodegradable Sticker Stack</h2>
          </div>
          
          <div className="font-['Space_Grotesk'] leading-relaxed text-neutral-700 space-y-6">
            <p className="text-lg">
              At Pouch.eco, our clear seal stickers are designed to offer the exact high-gloss transparency of standard BOPP/PET plastics while adhering to absolute compostability criteria.
            </p>
            <div className="border-4 border-black bg-white overflow-x-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <table className="w-full text-sm min-w-[600px]">
                <thead className="bg-[#D4FF00] border-b-4 border-black font-['JetBrains_Mono'] text-xs font-black uppercase text-black">
                  <tr>
                    <th className="px-6 py-4 text-left border-r-4 border-black">Layer</th>
                    <th className="px-6 py-4 text-left border-r-4 border-black">Composition</th>
                    <th className="px-6 py-4 text-left">Composting Performance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black font-['Space_Grotesk'] text-black font-medium">
                  <tr className="bg-white hover:bg-neutral-50">
                    <td className="px-6 py-4 font-bold uppercase border-r-4 border-black text-[#14532d]">1. Film Base</td>
                    <td className="px-6 py-4 border-r-4 border-black">Certified Compostable Clear PLA Film (100% plant dextrose)</td>
                    <td className="px-6 py-4">Breaks down into water, CO₂ and biomass in ≤14 weeks</td>
                  </tr>
                  <tr className="bg-white hover:bg-neutral-50">
                    <td className="px-6 py-4 font-bold uppercase border-r-4 border-black text-[#14532d]">2. Adhesive Layer</td>
                    <td className="px-6 py-4 border-r-4 border-black">Patent-pending Bio-Adhesive (natural resins & plant tackifiers)</td>
                    <td className="px-6 py-4">100% biodegradable, non-toxic, zero microplastics residue</td>
                  </tr>
                  <tr className="bg-white hover:bg-neutral-50">
                    <td className="px-6 py-4 font-bold uppercase border-r-4 border-black text-[#14532d]">3. Release Liner</td>
                    <td className="px-6 py-4 border-r-4 border-black">FSC Certified Supercalendered Glassine Paper (Silicone-free option)</td>
                    <td className="px-6 py-4">Fully recyclable in paper streams or home-compostable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-4 border-black p-6 bg-[#14532d] text-[#D4FF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-6 items-center mt-12">
              <Award className="w-16 h-16 text-[#D4FF00] flex-shrink-0" />
              <div>
                <h4 className="font-black text-xl uppercase text-white mb-2">Looking for a real-world application?</h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  This exact material stack is deployed in our popular <Link to="/store/product/eco-pla-sealing-sticker" className="underline font-black text-[#D4FF00] hover:text-white">[Premium PLA Biodegradable Clear Sealing Sticker]</Link>. It provides brands with crystal-clear high clarity, heavy adhesion to envelopes and product boxes, and fully certified compostability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Guide Section */}
      <section id="guide" className="py-20 border-b-4 border-black bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <NeoBadge color="magenta">LAB_GUIDE</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase text-center">How to Conduct a Combustion Test</h2>
          </div>

          <div className="border-4 border-black p-6 bg-amber-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 flex gap-4 font-['Space_Grotesk']">
            <AlertTriangle className="h-8 w-8 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-black uppercase text-amber-900">Safety Warning!</h4>
              <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                Because synthetic plastics (PET, PP) melt and drip sticky, highly burning droplets, NEVER hold the sample directly with your bare fingers. Vapors from conventional plastic materials are toxic—conduct the test only under a laboratory fume hood or in a highly ventilated open outdoor space.
              </p>
            </div>
          </div>

          <div className="space-y-6 font-['Space_Grotesk']">
            <div className="flex items-start gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-black text-[#D4FF00] font-black rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
              <div>
                <h5 className="font-black uppercase text-lg mb-1">Prepare Laboratory Tools</h5>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Gather a pair of steel laboratory tweezers (long-nosed pliers), a non-flammable metal tray or ceramic dish, a safety lighter, and a glass of water for emergency extinguishing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-black text-[#D4FF00] font-black rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
              <div>
                <h5 className="font-black uppercase text-lg mb-1">Secure the Film Sample</h5>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Cut a small piece of the clear sticker (approx. 2cm x 5cm) and peel it off its liner. Clamp it firmly at one extreme end with the steel tweezers, holding the tweezers horizontally.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-black text-[#D4FF00] font-black rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
              <div>
                <h5 className="font-black uppercase text-lg mb-1">Apply the Flame</h5>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Position the sample directly over the ceramic tray. Introduce the flame of your lighter to the bottom tip of the clear film. Observe how it takes fire and pull the flame source away.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-8 h-8 bg-black text-[#D4FF00] font-black rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</div>
              <div>
                <h5 className="font-black uppercase text-lg mb-1">Analyze Odor, Flame & Ash</h5>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Waft the air gently toward your nose. If it smells clean and woodsy, it's PLA. If it melts, drops flame, and releases black soot with a highly offensive rubber-chemical stench, it's conventional PET.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <section className="py-20 border-b-4 border-black bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <NeoBadge color="cyan">AI_SEARCH</NeoBadge>
            <h2 className="font-black text-3xl md:text-4xl uppercase text-center">Verify with AI</h2>
          </div>
          
          <NeoCard color="bg-black" className="text-[#D4FF00]">
            <h4 className="font-black text-2xl uppercase mb-4 text-white">💡 Evaluating Materials Using AI Assistants?</h4>
            <p className="font-['JetBrains_Mono'] text-sm text-white/80 mb-8">
              Copy and paste these precise search queries into AI models (like Gemini, ChatGPT, or Claude) to cross-reference and verify biodegradable material testing standards:
            </p>
            <ul className="space-y-4 font-['JetBrains_Mono'] text-xs font-bold">
              {[
                "What does burning PLA biopolymer smell like compared to burning standard PET plastic?",
                "Why does Polylactic Acid (PLA) leave a brittle black ash during burn tests while PET drops hot liquid plastic?",
                "Are bio-adhesives used on PLA clear sealing stickers certified biodegradable under ASTM D6400?",
                "How do I distinguish compostable packaging films from conventional plastic using a laboratory heat or burn test?"
              ].map((query, index) => (
                <li key={index} className="bg-white/10 border-2 border-[#D4FF00] p-4 text-white flex items-start gap-3">
                  <span className="text-[#D4FF00] font-black">Q:</span>
                  <span className="leading-relaxed">"{query}"</span>
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Frequently Asked <span className="text-[#10b981]">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-[#10b981] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#10b981]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#14532d] border-t-4 border-black text-[#D4FF00] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white leading-none">Ready to Elevate Your Packaging Integrity?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-80 max-w-2xl mx-auto leading-relaxed">
            Deploy certified compostable materials that stand up to the combustion test. Swap your standard conventional fossil-fuel plastic stickers for Pouch.eco's premium plant-based biopolymers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">Consult Eco Specialist</NeoButton>
            <NeoButton variant="secondary" className="!text-black" href="/store?category=sample">Request Samples Pack</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
