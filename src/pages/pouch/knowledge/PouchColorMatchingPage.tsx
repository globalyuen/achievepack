import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Palette, Droplet, AlertTriangle, Monitor, Sparkles, Sliders, Globe, ChevronDown } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'
import { useCalendly } from '../../../contexts/CalendlyContext'

export default function PouchColorMatchingPage() {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const p = 'seoPages.pages.colorMatching'

  const faqs = [
    {
      q: t(`${p}.faq.q1`),
      a: t(`${p}.faq.a1`)
    },
    {
      q: t(`${p}.faq.q2`),
      a: t(`${p}.faq.a2`)
    },
    {
      q: t(`${p}.faq.q3`),
      a: t(`${p}.faq.a3`)
    },
    {
      q: t(`${p}.faq.q4`),
      a: t(`${p}.faq.a4`)
    },
    {
      q: t(`${p}.faq.q5`),
      a: t(`${p}.faq.a5`)
    },
    {
      q: t(`${p}.faq.q6`),
      a: t(`${p}.faq.a6`)
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)} | POUCH.ECO</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://pouch.eco/knowledge/digital-printing-pantone-color-matching" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[#D4FF00] text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider uppercase">KNOWLEDGE_BASE // COLOR_ACCURACY</span>
                </div>
                
                {/* Neo-brutalist Language Selector */}
                <div className="relative">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="inline-flex items-center gap-1.5 bg-white border-4 border-black px-4 py-2 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{i18n.language === 'zh-TW' ? t('locale.zh-TW-short', '繁中') : i18n.language.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isLangMenuOpen && (
                    <div className="absolute left-0 mt-2 w-36 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-1 z-50 text-black font-['JetBrains_Mono'] font-bold text-xs">
                      <button onClick={() => { i18n.changeLanguage('en'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-neutral-100">ENGLISH</button>
                      <button onClick={() => { i18n.changeLanguage('fr'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-neutral-100">FRANÇAIS</button>
                      <button onClick={() => { i18n.changeLanguage('es'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-neutral-100">ESPAÑOL</button>
                      <button onClick={() => { i18n.changeLanguage('zh-TW'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-neutral-100">{t('locale.zh-TW', '繁體中文')}</button>
                    </div>
                  )}
                </div>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Pantone <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Accuracy</span> in CMYK.
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroSubtitle`)}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src="/imgs/knowledge/color-matching/pms-cmyk-deviation.png"
                    alt="Pantone Color Matching on Digital Packaging"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black border-2 border-white text-white px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    CMYK PROOF
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Block */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-neutral-100 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-['Space_Grotesk'] font-black text-2xl mb-4 text-black uppercase">The Short Version</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-neutral-800">
              {t(`${p}.introSummary`)}
            </p>
            <div className="mt-6 flex gap-3 text-xs bg-amber-200 border-2 border-black p-4 text-black font-bold font-['JetBrains_Mono']">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <div>
                Matte varnish disperses light, meaning colors appear darker and desaturated compared to glossy films. If color fidelity is critical, matte finishes require specialized calibration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-24 bg-cyan-100 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            How We Match <span className="text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-black px-2">Your Pantone</span> Target
          </h2>
          
          <div className="overflow-x-auto border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full text-left font-['JetBrains_Mono'] border-collapse">
              <thead>
                <tr className="bg-black text-white text-sm">
                  <th className="p-4 border-b-4 border-black">Method</th>
                  <th className="p-4 border-b-4 border-black">Color Base</th>
                  <th className="p-4 border-b-4 border-black">Accuracy</th>
                  <th className="p-4 border-b-4 border-black">Cost</th>
                  <th className="p-4 border-b-4 border-black">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black text-sm text-black">
                <tr>
                  <td className="p-4 font-bold">Standard CMYK Formula</td>
                  <td className="p-4">Textbook values</td>
                  <td className="p-4 text-red-500 font-bold">Low (Shifts on material)</td>
                  <td className="p-4 font-bold">Free</td>
                  <td className="p-4">Design mockups only</td>
                </tr>
                <tr className="bg-[#D4FF00]">
                  <td className="p-4 font-bold">Pouch.eco Video Proofing</td>
                  <td className="p-4">Custom CMYK values</td>
                  <td className="p-4 text-emerald-700 font-bold">High (Visual matching)</td>
                  <td className="p-4 font-bold">Free</td>
                  <td className="p-4 font-bold">Low-MOQ startup runs (100+ pcs)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Physical Mockup Pouch</td>
                  <td className="p-4">Custom CMYK proof bag</td>
                  <td className="p-4 text-emerald-700 font-bold">Excellent (Physical copy)</td>
                  <td className="p-4">Paid</td>
                  <td className="p-4">Brand-critical product releases</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Rotogravure Cylinder</td>
                  <td className="p-4">Spot wet ink (PMS)</td>
                  <td className="p-4 text-emerald-700 font-bold">Perfect (Exact mix)</td>
                  <td className="p-4">High Setup Cost</td>
                  <td className="p-4">Bulk scaling (5,000+ pcs)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            Why CMYK Shifts <span className="text-[#D4FF00] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-black px-2">On Material</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              Digital printing simulates Pantone colors by mixing Cyan, Magenta, Yellow, and Black. Since packaging sustrates are not basic white paper, raw elements like brown Kraft paper or reflective silver foil interact with ink transparency, altering the final visual shade.
            </p>
            <p>
              Colors containing multiple CMYK channels, such as purple, warm grey, or dark olive, are extremely sensitive to microscopic press variations. Even a 1% shift in cyan can make a grey pouch look muddy. We resolve this by manually tuning the CMYK file and validating the physical print through a live photo/video calibration strip before your run.
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">Our Free 4-Step Proofing Workflow</h3>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="font-['Space_Grotesk'] font-black text-lg mb-2 text-black">1. Submit Pantone Target</h4>
                <p className="text-sm">Provide your official Pantone Matching System (PMS) codes along with your Illustrator files.</p>
              </div>
              <div className="border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="font-['Space_Grotesk'] font-black text-lg mb-2 text-black">2. Custom CMYK Calibration</h4>
                <p className="text-sm">We print a calibration strip on your actual packaging material, altering CMYK ratios slightly across adjacent blocks.</p>
              </div>
              <div className="border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="font-['Space_Grotesk'] font-black text-lg mb-2 text-black">3. Live Video Approval</h4>
                <p className="text-sm">We film and photograph the output under standardized D65 studio lights, allowing you to select the best visual match.</p>
              </div>
              <div className="border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#D4FF00]">
                <h4 className="font-['Space_Grotesk'] font-black text-lg mb-2 text-black">4. Lock Custom CMYK</h4>
                <p className="text-sm font-bold">We register this CMYK formula as your brand's unique color profile for all future bulk orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            Color Accuracy <span className="text-cyan-500">FAQ</span>
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
                  <span className="text-cyan-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-cyan-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">Zero Printing Errors</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            Submit your artwork. Work directly with our color matching team via free video proofing to lock in your brand colors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton onClick={openCalendly} variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              Schedule Free Video Proofing <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
