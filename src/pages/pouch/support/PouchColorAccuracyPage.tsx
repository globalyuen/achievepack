import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Monitor, Printer, Palette, CheckCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchColorAccuracyPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchColorAccuracy';

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.seo.title`, "Color Accuracy in Digital Printing | POUCH.ECO")
  const description = t(`${p}.seo.description`, "Understand the digital vs. physical color gap. Learn why standard group printing causes a 10% variance and when you need an individual color run.")

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/support/color-accuracy-digital-printing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#db2777] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.hero.label`, "COLOR_GUIDE: DIGITAL_V_PHYSICAL")}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.hero.titleLine1`, "RGB vs.")}<br/>
                <span className="text-[#db2777]">{t(`${p}.hero.titleLine2`, "CMYK")}</span><br/>
                {t(`${p}.hero.titleLine3`, "Reality.")}
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.hero.bullet1`, "> Screens glow. Ink absorbs.")}<br/>
                {t(`${p}.hero.bullet2`, "> Expect a 10% natural variance.")}<br/>
                {t(`${p}.hero.bullet3`, "> Precision runs vs Group efficiency.")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.hero.cta`, "Talk to an Expert")}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#facc15] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden bg-white p-4">
                  <img 
                    src="/imgs/support/color-accuracy.png" 
                    alt={t(`${p}.hero.imgAlt`, "Digital Printing Color Accuracy")} 
                    className="w-full h-full object-cover border-2 border-black"
                  />
                  <motion.div animate={floatAnim} className="absolute top-8 right-8 bg-[#db2777] text-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                    {t(`${p}.hero.hexLabel`, "HEX #B99A5A")}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#db2777] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.deepDive.titleLine1`, "The Digital vs.")} <span className="text-[#db2777]">{t(`${p}.deepDive.titleLine2`, "Physical Gap")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.deepDive.intro1`, "To ensure we achieve the best result for your packaging, there are a few technical realities regarding color that are important to consider before we move to production. The hex code you provided (e.g., ")}<strong>#b99a5a</strong>{t(`${p}.deepDive.intro2`, ") is a digital value designed for screens (RGB). Physical printing presses use ink (CMYK).")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Monitor className="w-8 h-8 mb-4 text-[#db2777]" />
                <h4 className="font-['Space_Grotesk'] font-black uppercase text-xl mb-2">{t(`${p}.deepDive.features.screenVariance.title`, "Screen Variance")}</h4>
                <p className="text-sm">{t(`${p}.deepDive.features.screenVariance.desc`, 'Every monitor displays color differently depending on its brightness and calibration. The "gold" you see on your phone will look different than the "gold" on your laptop.')}</p>
              </div>
              <div className="bg-[#facc15] border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                <Palette className="w-8 h-8 mb-4 text-black" />
                <h4 className="font-['Space_Grotesk'] font-black uppercase text-xl mb-2">{t(`${p}.deepDive.features.rule10.title`, "The 10% Rule")}</h4>
                <p className="text-sm">{t(`${p}.deepDive.features.rule10.desc1`, "Because light (screen) and ink (paper/plastic) are different mediums, a ")}<strong>{t(`${p}.deepDive.features.rule10.descHighlight`, "10% color discrepancy")}</strong>{t(`${p}.deepDive.features.rule10.desc2`, " is a standard industry expectation. The printed version will naturally be more matte than a glowing screen.")}</p>
              </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.groupPrinting.title`, "Standard Group Printing")}</h3>
            <p>
              {t(`${p}.deepDive.groupPrinting.desc1`, "Most orders are produced via ")}<strong>{t(`${p}.deepDive.groupPrinting.descHighlight`, "Group Printing")}</strong>{t(`${p}.deepDive.groupPrinting.desc2`, ", where your artwork is laid out on a large sheet with other clients' designs.")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{t(`${p}.deepDive.groupPrinting.bullet1Label`, "Efficiency vs Control:")}</strong> {t(`${p}.deepDive.groupPrinting.bullet1Desc`, "Because multiple designs are printed at once on standard materials, we cannot \"tweak\" the ink levels for just one design.")}</li>
              <li><strong>{t(`${p}.deepDive.groupPrinting.bullet2Label`, "The Result:")}</strong> {t(`${p}.deepDive.groupPrinting.bullet2Desc`, "This keeps costs incredibly low for small batches, but it means we cannot guarantee a 100% exact color match to your monitor.")}</li>
            </ul>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.individualRun.title`, "Individual Run (Precision Scaling)")}</h3>
            <p>
              {t(`${p}.deepDive.individualRun.desc1`, "If your brand requires 100% color precision, we can perform an ")}<strong>{t(`${p}.deepDive.individualRun.descHighlight`, "Individual Run")}</strong>{t(`${p}.deepDive.individualRun.desc2`, ". This means the press is set up exclusively for your design, allowing us to calibrate the color exactly. However, because the setup labor is the same regardless of quantity, the cost per unit is higher for smaller orders:")}
            </p>

            <div className="my-8 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-4 border-black">
                    <th className="py-4 px-6 font-['Space_Grotesk'] font-black uppercase text-lg border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.col1`, "Order Quantity")}</th>
                    <th className="py-4 px-6 font-['Space_Grotesk'] font-black uppercase text-lg">{t(`${p}.deepDive.individualRun.table.col2`, "Cost Comparison")}</th>
                  </tr>
                </thead>
                <tbody className="font-['JetBrains_Mono']">
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row1Col1`, "Under 500 pcs")}</td>
                    <td className="py-4 px-6 text-[#db2777] font-bold">{t(`${p}.deepDive.individualRun.table.row1Col2`, "5x higher cost")}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row2Col1`, "Under 1,000 pcs")}</td>
                    <td className="py-4 px-6 text-[#ea580c] font-bold">{t(`${p}.deepDive.individualRun.table.row2Col2`, "3x higher cost")}</td>
                  </tr>
                  <tr className="border-b-2 border-gray-200">
                    <td className="py-4 px-6 font-bold border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row3Col1`, "Under 3,000 pcs")}</td>
                    <td className="py-4 px-6 text-[#ca8a04] font-bold">{t(`${p}.deepDive.individualRun.table.row3Col2`, "2x higher cost")}</td>
                  </tr>
                  <tr className="bg-[#D4FF00]">
                    <td className="py-4 px-6 font-black border-r-4 border-black">{t(`${p}.deepDive.individualRun.table.row4Col1`, "Over 5,000 pcs")}</td>
                    <td className="py-4 px-6 font-black">{t(`${p}.deepDive.individualRun.table.row4Col2`, "Standard Price (Individual run included)")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="bg-black text-white p-4 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(219,39,119,1)]">
              {t(`${p}.deepDive.individualRun.logic`, "Logic: Once you reach 5,000 pieces, the volume is large enough to justify a dedicated production run at our standard pricing. At this level, you receive maximum color control without the \"small-batch\" premium.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.proceed.title`, "How would you like to proceed?")}</h3>
            <p>
              {t(`${p}.deepDive.proceed.desc`, "We can move forward with the standard group run if a slight variance is acceptable, or we can quote you for a dedicated run if accuracy is the priority.")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#db2777] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.titleLine1`, "Let's Print")}<br/>{t(`${p}.cta.titleLine2`, "Your Vision.")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-90">
            {t(`${p}.cta.desc`, "Accept the 10% variance for startup savings, or go big for absolute precision.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.cta.button1`, "Book Consultation")}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.cta.button2`, "Request a Sample")}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
