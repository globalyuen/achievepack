import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, BookOpen, AlertCircle, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    heading: "5 Common USA Pouch Labeling Problems (And Solutions)",
    p1Title: "1. Non-compliant Nutrition Facts",
    p1Desc: "The FDA has strict rules for font sizes and formatting on nutrition panels. Solution: Use automated pre-flight checks and templates that strictly adhere to 21 CFR 101.9.",
    p2Title: "2. Distorted Barcodes on Curves",
    p2Desc: "Pouch curvature can stretch or warp barcodes, making them unreadable by scanners. Solution: Orient barcodes vertically (ladder style) or place them on flat gusset areas.",
    p3Title: "3. Incorrect Allergen Declarations",
    p3Desc: "Failing to clearly state major food allergens in the 'Contains' statement leads to recalls. Solution: Implement a bolding system and secondary review for all allergen text.",
    p4Title: "4. Ink Smudging and Scuffing",
    p4Desc: "Standard inks can rub off flexible films during transit. Solution: Utilize UV-cured inks or add a protective over-varnish to the printed label.",
    p5Title: "5. Misaligned Labels on Stand-up Pouches",
    p5Desc: "Manual application often results in crooked labels on the non-uniform surface of a pouch. Solution: Use automated labeling machines with custom fixtures for flexible packaging."
  },
  es: {
    heading: "5 Problemas Comunes de Etiquetado de Bolsas en EE. UU. (Y Soluciones)",
    p1Title: "1. Información Nutricional No Conforme",
    p1Desc: "La FDA tiene reglas estrictas para el tamaño de fuente y el formato. Solución: Use plantillas y revisiones automáticas que cumplan estrictamente con 21 CFR 101.9.",
    p2Title: "2. Códigos de Barras Distorsionados en Curvas",
    p2Desc: "La curvatura de la bolsa puede deformar los códigos de barras. Solución: Oriente los códigos de barras verticalmente o colóquelos en áreas planas del fuelle.",
    p3Title: "3. Declaraciones de Alérgenos Incorrectas",
    p3Desc: "No declarar claramente los alérgenos principales provoca retiros. Solución: Implemente un sistema de resaltado y una revisión secundaria.",
    p4Title: "4. Manchas y Desgaste de Tinta",
    p4Desc: "Las tintas estándar pueden borrarse durante el tránsito. Solución: Utilice tintas de secado UV o agregue un barniz protector.",
    p5Title: "5. Etiquetas Desalineadas en Bolsas Doypack",
    p5Desc: "La aplicación manual suele resultar en etiquetas torcidas. Solución: Utilice máquinas etiquetadoras automáticas con accesorios personalizados."
  },
  fr: {
    heading: "5 Problèmes Courants d'Étiquetage des Sachets aux États-Unis (Et Solutions)",
    p1Title: "1. Valeurs Nutritionnelles Non Conformes",
    p1Desc: "La FDA a des règles strictes concernant la taille des polices et le formatage. Solution : Utilisez des vérifications automatisées et des modèles conformes au 21 CFR 101.9.",
    p2Title: "2. Codes-barres Déformés sur les Courbes",
    p2Desc: "La courbure du sachet peut déformer les codes-barres. Solution : Orientez les codes-barres verticalement ou placez-les sur des zones planes.",
    p3Title: "3. Déclarations d'Allergènes Incorrectes",
    p3Desc: "L'omission de déclarer clairement les principaux allergènes entraîne des rappels. Solution : Mettez en place un système de mise en évidence et une double vérification.",
    p4Title: "4. Maculage et Éraflures d'Encre",
    p4Desc: "Les encres standard peuvent s'effacer pendant le transport. Solution : Utilisez des encres à séchage UV ou ajoutez un vernis de protection.",
    p5Title: "5. Étiquettes Mal Alignées sur les Sachets Tient-debout",
    p5Desc: "L'application manuelle entraîne souvent des étiquettes de travers. Solution : Utilisez des étiqueteuses automatiques avec des supports adaptés."
  },
  'zh-TW': {
    heading: "5 個常見的美國軟包裝標籤問題（及解決方案）",
    p1Title: "1. 營養標示不合規",
    p1Desc: "FDA 對營養標籤的字體大小和格式有嚴格規定。解決方案：使用嚴格遵守 21 CFR 101.9 的自動化預檢和模板。",
    p2Title: "2. 條碼在曲面上變形",
    p2Desc: "袋子的彎曲會拉伸或扭曲條碼，導致掃描器無法讀取。解決方案：將條碼垂直放置（梯形）或放置在平坦的側折區域。",
    p3Title: "3. 過敏原聲明錯誤",
    p3Desc: "未清楚標明主要食物過敏原會導致產品回收。解決方案：對所有過敏原文字實施粗體系統和二次審核。",
    p4Title: "4. 墨水暈染和刮擦",
    p4Desc: "標準墨水在運輸過程中可能會從薄膜上摩擦掉。解決方案：使用 UV 固化墨水或在印刷標籤上添加保護油墨。",
    p5Title: "5. 直立袋標籤貼歪",
    p5Desc: "手動貼標通常會導致標籤在袋子表面歪斜。解決方案：使用帶有軟包裝專用夾具的自動貼標機。"
  }
}

export default function PouchUSALabelingGuidePage() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localT = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en
  const title = t('pouchUSALabelingGuidePage.title')
  const description = t('pouchUSALabelingGuidePage.description')

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/labeling-guide" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchUSALabelingGuidePage.marketHub')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                {t('pouchUSALabelingGuidePage.heroTitleStart')}<br/>
                <span className="text-[#D4FF00] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchUSALabelingGuidePage.heroTitleSpan')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t('pouchUSALabelingGuidePage.heroDesc')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 -rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="border-4 border-black p-4 bg-white w-full h-full flex flex-col justify-between">
                     <div className="border-b-4 border-black pb-2 mb-2">
                        <h3 className="font-black text-3xl">{t('pouchUSALabelingGuidePage.cardTitle')}</h3>
                        <p className="font-['JetBrains_Mono'] text-sm">{t('pouchUSALabelingGuidePage.cardServings')}</p>
                     </div>
                     <div className="space-y-2 flex-grow">
                        <div className="flex justify-between border-b-2 border-gray-300 pb-1">
                           <span className="font-bold">{t('pouchUSALabelingGuidePage.cardCalories')}</span><span className="font-black text-xl">{t('pouchUSALabelingGuidePage.cardCaloriesVal')}</span>
                        </div>
                        <div className="w-full h-24 bg-gray-200 mt-4 flex items-center justify-center">
                           <span className="font-['JetBrains_Mono']">{t('pouchUSALabelingGuidePage.cardBarcodeArea')}</span>
                        </div>
                     </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {t('pouchUSALabelingGuidePage.cardBadge')}
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
            {t('pouchUSALabelingGuidePage.sectionHeadingStart')}<span className="text-blue-500">{t('pouchUSALabelingGuidePage.sectionHeadingSpan')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchUSALabelingGuidePage.para1')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading1')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para2')}
            </p>
            <p>
              {t('pouchUSALabelingGuidePage.para3')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading2')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para4')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading3')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para5')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSALabelingGuidePage.subheading4')}</h3>
            <p>
              {t('pouchUSALabelingGuidePage.para6')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-[#FFF5E1] border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
                {localT.heading}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{localT.p1Title}</h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mt-2">{localT.p1Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{localT.p2Title}</h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mt-2">{localT.p2Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{localT.p3Title}</h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mt-2">{localT.p3Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{localT.p4Title}</h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mt-2">{localT.p4Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase">{localT.p5Title}</h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mt-2">{localT.p5Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <NeoCard className="bg-white border-4 border-black p-2 transform rotate-2">
                <img src="/imgs/knowledge/usa-pouch-labeling-pain-points.jpg" alt="Packaging labeling problems" className="w-full h-auto border-2 border-black" />
              </NeoCard>
              <div className="absolute top-6 -right-6 w-full h-full border-4 border-black bg-blue-500 -z-10 -rotate-1" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchUSALabelingGuidePage.faqHeadingStart')}<span className="text-blue-500">{t('pouchUSALabelingGuidePage.faqHeadingSpan')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('pouchUSALabelingGuidePage.faqQ1'),
                a: t('pouchUSALabelingGuidePage.faqA1')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ2'),
                a: t('pouchUSALabelingGuidePage.faqA2')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ3'),
                a: t('pouchUSALabelingGuidePage.faqA3')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ4'),
                a: t('pouchUSALabelingGuidePage.faqA4')
              },
              {
                q: t('pouchUSALabelingGuidePage.faqQ5'),
                a: t('pouchUSALabelingGuidePage.faqA5')
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
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-blue-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] text-black border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchUSALabelingGuidePage.ctaHeading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t('pouchUSALabelingGuidePage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-black !text-white w-full sm:w-auto text-xl py-4">
              {t('pouchUSALabelingGuidePage.ctaBtn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
