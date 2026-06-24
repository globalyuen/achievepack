import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Printer, Cpu, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchPrintingTypesPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchPrintingTypes';

  const title = t(`${p}.seo.title`, "Digital vs Rotogravure Printing for Pouches | POUCH.ECO")
  const description = t(`${p}.seo.description`, "Understand the difference between Digital (HP Indigo) and Rotogravure printing for flexible packaging. Learn about MOQs, print quality, setup costs, and finishes.")

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/knowledge/printing-types" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-pink-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t(`${p}.hero.label`, "KNOWLEDGE_BASE // PRINTING")}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t(`${p}.hero.titleLine1`, "Ink meets")} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.hero.titleLine2`, "Film.")}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t(`${p}.hero.desc`, "Demystifying the packaging printing process. Compare Digital vs. Rotogravure printing to determine the most cost-effective and visually stunning method for your brand.")}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100">
                   <img 
                    src="/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp" 
                    alt={t(`${p}.hero.imgAlt`, "Various printing finishes on custom pouches")} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    {t(`${p}.hero.hexLabel`, "CMYK + PANTONE")}
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t(`${p}.deepDive.titleLine1`, "Digital vs. Rotogravure")} <span className="text-pink-500">{t(`${p}.deepDive.titleLine2`, "Printing")}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t(`${p}.deepDive.intro`, "In the flexible packaging industry, the way your artwork is transferred onto the film dictates not only the visual quality of the final bag but also the minimum order quantities (MOQs) and the upfront costs. The two dominant technologies are HP Indigo Digital Printing and Traditional Rotogravure Printing. Understanding the difference is crucial to optimizing your packaging budget.")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
               <div className="bg-blue-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase flex items-center gap-2 mb-4 text-black">
                    <Cpu className="text-blue-500" /> {t(`${p}.deepDive.digital.title`, "Digital Printing")}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>{t(`${p}.deepDive.digital.bestForLabel`, "Best For:")}</strong> {t(`${p}.deepDive.digital.bestFor`, "Startups, multiple SKUs, seasonal designs.")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.moqLabel`, "MOQ:")}</strong> {t(`${p}.deepDive.digital.moq`, "Very Low (500 - 1,000 pcs)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.setupLabel`, "Setup Costs:")}</strong> {t(`${p}.deepDive.digital.setup`, "$0 (No plate fees)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.leadLabel`, "Lead Time:")}</strong> {t(`${p}.deepDive.digital.lead`, "Fast (10-15 days)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.qualityLabel`, "Quality:")}</strong> {t(`${p}.deepDive.digital.quality`, "Excellent (HP Indigo 1200 dpi)")}</li>
                    <li><strong>{t(`${p}.deepDive.digital.costLabel`, "Unit Cost:")}</strong> {t(`${p}.deepDive.digital.cost`, "Higher per bag at low volumes.")}</li>
                  </ul>
               </div>

               <div className="bg-orange-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['Space_Grotesk'] font-black text-2xl uppercase flex items-center gap-2 mb-4 text-black">
                    <Printer className="text-orange-500" /> {t(`${p}.deepDive.rotogravure.title`, "Rotogravure")}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>{t(`${p}.deepDive.rotogravure.bestForLabel`, "Best For:")}</strong> {t(`${p}.deepDive.rotogravure.bestFor`, "Large established brands, high volume.")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.moqLabel`, "MOQ:")}</strong> {t(`${p}.deepDive.rotogravure.moq`, "High (10,000+ pcs per SKU)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.setupLabel`, "Setup Costs:")}</strong> {t(`${p}.deepDive.rotogravure.setup`, "Cylinder Plate Fees ($100-$150 per color)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.leadLabel`, "Lead Time:")}</strong> {t(`${p}.deepDive.rotogravure.lead`, "Longer (20-30 days)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.qualityLabel`, "Quality:")}</strong> {t(`${p}.deepDive.rotogravure.quality`, "Flawless (Perfect Pantone matching)")}</li>
                    <li><strong>{t(`${p}.deepDive.rotogravure.costLabel`, "Unit Cost:")}</strong> {t(`${p}.deepDive.rotogravure.cost`, "Extremely low per bag at scale.")}</li>
                  </ul>
               </div>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.howDigitalWorks.title`, "How HP Indigo Digital Printing Works")}</h3>
            <p>
              {t(`${p}.deepDive.howDigitalWorks.desc1`, "Digital printing works much like a massive version of your office laser printer. Your digital PDF file is sent directly to the press, and the artwork is printed onto the film in one continuous pass.")} 
            </p>
            <p>
              {t(`${p}.deepDive.howDigitalWorks.desc2`, "Because there are no physical printing plates to engrave, the upfront setup cost is zero. This makes digital printing the absolute best choice for brands launching multiple flavor SKUs (e.g., 5 different coffee roasts) at low quantities. You can print 1,000 bags of each flavor without paying thousands of dollars in plate fees. POUCH.ECO utilizes state-of-the-art HP Indigo 20000 presses, ensuring vibrant, high-resolution CMYK graphics.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.howRotoWorks.title`, "How Rotogravure Printing Works")}</h3>
            <p>
              {t(`${p}.deepDive.howRotoWorks.desc1`, "Rotogravure is the traditional powerhouse of flexible packaging. The artwork is physically engraved onto massive metal cylinders (plates). Each color in your design requires a separate cylinder. The film passes over these spinning, ink-filled cylinders to build the image.")}
            </p>
            <p>
              {t(`${p}.deepDive.howRotoWorks.desc2`, "Because engraving the metal cylinders is expensive (typically $100 to $150 per color per SKU), the upfront cost is high. However, once the cylinders are made, the press runs at incredibly high speeds, making the actual cost per bag incredibly cheap. Rotogravure also allows for precise Pantone (PMS) spot color matching, metallic inks, and specialized spot UV varnishes.")}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t(`${p}.deepDive.whichToChoose.title`, "Which should you choose?")}</h3>
            <p>
              {t(`${p}.deepDive.whichToChoose.desc`, "The decision is almost entirely mathematical. If you are ordering fewer than 5,000 to 10,000 bags per design, Digital Printing is cheaper because you avoid plate fees. Once you cross the 10,000 bag threshold per design, the cheap unit cost of Rotogravure outweighs the initial cost of the plates, making it the most economical choice.")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t(`${p}.faq.titleLine1`, "Printing")} <span className="text-pink-500">{t(`${p}.faq.titleLine2`, "FAQ")}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t(`${p}.faq.items.0.q`, 'Do I have to pay cylinder/plate fees every time I reorder?'),
                a: t(`${p}.faq.items.0.a`, 'No. For rotogravure printing, the cylinder plates are a one-time fee. We keep your plates in our climate-controlled facility, so you never pay for them again when reordering the exact same design.')
              },
              {
                q: t(`${p}.faq.items.1.q`, 'Can digital printing hit my exact Pantone (PMS) color?'),
                a: t(`${p}.faq.items.1.a`, 'Digital printing utilizes a CMYK process. While HP Indigo presses are incredibly advanced and can simulate about 90% of the Pantone spectrum very accurately, true, flawless Pantone spot color matching requires Rotogravure printing.')
              },
              {
                q: t(`${p}.faq.items.2.q`, 'Can I do a mix of Matte and Gloss (Spot UV) on digital?'),
                a: t(`${p}.faq.items.2.a`, 'While we can simulate some effects digitally, true Spot UV (where the bag is matte but your logo is high-gloss) requires a physical varnish plate, meaning it is only available via Rotogravure printing.')
              },
              {
                q: t(`${p}.faq.items.3.q`, 'I have 5 different flavors. Do I need plates for all of them?'),
                a: t(`${p}.faq.items.3.a`, 'If you use Rotogravure, yes. If your design has 5 colors, and you have 5 flavors, you would need 25 plates. This is why Digital Printing is the perfect solution for multi-SKU brands, as you pay zero plate fees.')
              },
              {
                q: t(`${p}.faq.items.4.q`, 'What color mode should my artwork be in?'),
                a: t(`${p}.faq.items.4.a`, 'All artwork submitted for packaging printing must be in CMYK color mode. If you submit RGB artwork (which is meant for screens), the colors will shift when printed.')
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
                  <span className="text-pink-500 flex-shrink-0">{t(`${p}.faq.qLabel`, "Q:")}</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-pink-500">{t(`${p}.faq.aLabel`, "A:")}</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.cta.title`, "Ready to Print?")}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t(`${p}.cta.desc`, "Whether you need 500 digitally printed bags or 50,000 rotogravure bags, we have the presses to make your brand pop.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/quote" variant="primary" className="!bg-pink-400 !text-black w-full sm:w-auto text-xl py-4 hover:!bg-pink-300">
              {t(`${p}.cta.button`, "Get Print Quote")} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
