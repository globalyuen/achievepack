import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, ArrowRight, Shield, Zap, Leaf, XCircle } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import EcoMaterialSourcingGuide from '../../components/pouch/EcoMaterialSourcingGuide'

export default function CompostableZipperNoRemovalPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.compostableZipperNoRemoval'

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.metaTitle`)
  const description = t(`${p}.metaDesc`)

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://achievepack.com/blog/compostable-zipper-no-removal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#059669] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-white">{t(`${p}.achieveLabs`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Zero.<br/>
                Removal.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-emerald-600">Protocol.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.doINeedToRemove`)}
                &gt; Do I need to cut out the valve?<br/>
                &gt; The answer: ABSOLUTELY NOT.
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#D4FF00] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/samples/kraft-compostable-zipper.png" 
                    alt="Kraft compostable pouch with fully compostable zipper" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    100%_COMPOSABLE
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#059669] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <NeoBadge color="emerald">CIRCULAR_KNOWLEDGE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            Stop Ripping Your <span className="text-[#059669]">Compostable Bags</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              One of the most frequent points of confusion for eco-conscious consumers is the disposal of compostable pouches. You've likely seen bags that instruct you to "cut off the zipper" or "remove the valve" before composting. At Achieve Pack, we find this practice unacceptable. It's a hallmark of "greenwashed" packaging that introduces friction and leads to higher landfill rates.
            </p>
            <p>
              Our mission is to provide 100% circular packaging. That means every single component—the film, the zipper, the valve, and even the ink—must be certified to break down safely in the soil.
            </p>
            
            <img 
              src="/imgs/store/closure/normal-zipper.webp" 
              alt="Close up of Achieve Pack compostable press-to-close zipper" 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Why Removal Is Often Required (Elsewhere)</h3>
            <p>
              Many manufacturers take a shortcut. They use a compostable material for the body of the bag to make the marketing claim, but then they apply a cheap, conventional plastic zipper or degassing valve. If a consumer composts the entire bag, these plastic components will remain as permanent microplastics in the soil. 
            </p>
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <XCircle className="w-10 h-10 text-red-600 mb-4" />
                <h4 className="font-black uppercase mb-2">Conventional Zippers</h4>
                <p className="text-sm">Leave permanent microplastics. Require manual removal. Ruin compost quality.</p>
              </div>
              <div className="bg-emerald-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="font-black uppercase mb-2">Achieve Pack Zippers</h4>
                <p className="text-sm">100% plant-based bio-polymers. Breaks down into biomass. Zero removal required.</p>
              </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Certified Zero-Friction Composting</h3>
            <p>
              Our press-to-close zippers and one-way coffee degassing valves have passed the same rigorous TUV Austria (OK Compost Home & Industrial) and EN 13432 testing as our films. They are manufactured from PLA (Polylactic Acid) and other bio-resins that are designed to be consumed by microbes.
            </p>
            <p>
              When your customer finishes your product, they can simply toss the entire intact bag into the compost bin. No scissors, no ripping, no waste. This is what true circularity looks like.
            </p>
            
            <img 
              src="/imgs/4-infograhic/compost.webp" 
              alt="Infographic showing full composting process of Achieve Pack bags" 
              className="w-full h-80 object-contain bg-gray-50 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />
          </div>

          <EcoMaterialSourcingGuide />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Common <span className="text-emerald-600">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Do I need to rip the zipper off a compostable bag?',
                a: 'If you purchase fully certified compostable pouches from Achieve Pack, the answer is NO. Our zippers are made from the exact same certified compostable plant-polymers as the bag itself. You can throw the entire intact bag into the compost bin.'
              },
              {
                q: 'Do I need to cut out the coffee degassing valve before composting?',
                a: 'Absolutely not. Unlike traditional plastic valves, our degassing valves are engineered from bio-resins and are TUV certified for composting. The entire bag, valve included, is safe for the soil.'
              },
              {
                q: 'How long does a compostable zipper take to break down?',
                a: 'Because the zipper profile is slightly thicker than the film body, it may take slightly longer to visually disappear. However, under standard composting conditions, the entire pouch—including the zipper—will break down into organic biomass within 180 days.'
              },
              {
                q: 'What happens if I forget to remove a plastic zipper from a competitor bag?',
                a: 'If a conventional plastic zipper enters the composting stream, it will eventually fragment into microplastics. These cannot be further broken down by microbes and will contaminate the resulting compost, making it unsafe for agricultural use.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase mb-3 flex items-start gap-3">
                  <span className="text-emerald-600 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-emerald-600">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#059669] text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase italic">Ready for True Sustainability?</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-white opacity-90 max-w-2xl mx-auto">
            Get 100% certified compostable packaging. No greenwashing. No hidden plastics. No consumer friction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton to="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Get Your Free Samples <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
            <NeoButton to="/contact" variant="secondary" className="!border-white !text-white w-full sm:w-auto text-xl py-4">
              Speak to an Expert
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
