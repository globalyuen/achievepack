import React from 'react'
import { useTranslation } from 'react-i18next'
import { Ruler, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Pouch Sizing Problems (And Solutions)",
    problems: [
      {
        title: "1. Pouch Too Small After Filling",
        desc: "Product density and fill volume can make a flat pouch bulge, reducing internal space.",
        solution: "Add 10-15% extra volume to your calculations and test with physical product."
      },
      {
        title: "2. Gusset Doesn't Open Properly",
        desc: "Incorrect gusset design for the product weight can cause the pouch to tip over.",
        solution: "Select K-seal for heavier items and Doyen seal for lighter items."
      },
      {
        title: "3. Zipper Placement Reduces Usable Space",
        desc: "Failing to account for the distance between the top seal and the zipper.",
        solution: "Account for 1-1.5 inches above the zipper and 0.5 inches below for the heat seal."
      },
      {
        title: "4. Valve Placement Interferes With Artwork",
        desc: "Degassing valves placed without considering the printed design or pouch fold.",
        solution: "Create dedicated safe zones for valves during the structural design phase."
      },
      {
        title: "5. Inaccurate Flat vs. Filled Dimensions",
        desc: "Measurements taken flat do not reflect the pouch's true shelf footprint.",
        solution: "Use 3D modeling and physical prototyping to verify filled dimensions before mass production."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Tamaño de Bolsas (Y Soluciones)",
    problems: [
      {
        title: "1. Bolsa Demasiado Pequeña Después del Llenado",
        desc: "La densidad del producto y el volumen de llenado pueden hacer que la bolsa se abulte, reduciendo el espacio interno.",
        solution: "Añada un 10-15% de volumen adicional a sus cálculos y pruebe con el producto físico."
      },
      {
        title: "2. El Fuelle no se Abre Correctamente",
        desc: "Un diseño de fuelle incorrecto para el peso del producto puede hacer que la bolsa se vuelque.",
        solution: "Seleccione el sello K para artículos más pesados y el sello Doyen para artículos más ligeros."
      },
      {
        title: "3. La Ubicación del Cierre Reduce el Espacio Útil",
        desc: "No tener en cuenta la distancia entre el sello superior y el cierre.",
        solution: "Considere 1-1.5 pulgadas sobre el cierre y 0.5 pulgadas debajo para el sello térmico."
      },
      {
        title: "4. La Válvula Interfiere con el Diseño",
        desc: "Válvulas desgasificadoras colocadas sin considerar el diseño impreso o el pliegue de la bolsa.",
        solution: "Cree zonas seguras dedicadas para las válvulas durante la fase de diseño estructural."
      },
      {
        title: "5. Dimensiones Planas vs. Llenas Inexactas",
        desc: "Las medidas tomadas en plano no reflejan el verdadero espacio de la bolsa en el estante.",
        solution: "Use modelado 3D y prototipos físicos para verificar las dimensiones llenas antes de la producción en masa."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de Taille de Sachet (Et Solutions)",
    problems: [
      {
        title: "1. Sachet Trop Petit Après Remplissage",
        desc: "La densité du produit et le volume de remplissage peuvent faire gonfler le sachet, réduisant l'espace interne.",
        solution: "Ajoutez 10 à 15 % de volume supplémentaire à vos calculs et testez avec le produit physique."
      },
      {
        title: "2. Le Soufflet ne s'Ouvre pas Correctement",
        desc: "Une conception de soufflet inadaptée au poids du produit peut faire basculer le sachet.",
        solution: "Sélectionnez un joint en K pour les articles plus lourds et un joint Doyen pour les plus légers."
      },
      {
        title: "3. Le Placement de la Fermeture Réduit l'Espace Utile",
        desc: "Omission de prendre en compte la distance entre le joint supérieur et la fermeture.",
        solution: "Prévoyez 1 à 1,5 pouces au-dessus de la fermeture et 0,5 pouce en dessous pour le scellage à chaud."
      },
      {
        title: "4. L'Emplacement de la Valve Interfère avec le Design",
        desc: "Valves de dégazage placées sans tenir compte du design imprimé ou du pli du sachet.",
        solution: "Créez des zones de sécurité dédiées pour les valves lors de la phase de conception structurelle."
      },
      {
        title: "5. Dimensions à Plat vs Remplies Inexactes",
        desc: "Les mesures prises à plat ne reflètent pas le véritable encombrement du sachet en rayon.",
        solution: "Utilisez la modélisation 3D et le prototypage physique pour vérifier les dimensions remplies avant la production de masse."
      }
    ]
  },
  'zh-TW': {
    problemsTitle: "5個常見的包裝袋尺寸問題（及解決方案）",
    problems: [
      {
        title: "1. 充填後包裝袋太小",
        desc: "產品密度和充填體積會使平放的包裝袋膨脹，從而減少內部空間。",
        solution: "在計算中增加 10-15% 的額外體積，並使用實物進行測試。"
      },
      {
        title: "2. 底部折邊無法正常打開",
        desc: "不符合產品重量的折邊設計可能導致包裝袋傾倒。",
        solution: "較重的物品選擇 K 型封口，較輕的物品選擇 Doyen 封口。"
      },
      {
        title: "3. 拉鍊位置減少可用空間",
        desc: "未考慮頂部封口和拉鍊之間的距離。",
        solution: "拉鍊上方預留 1-1.5 英寸，下方預留 0.5 英寸用於熱封。"
      },
      {
        title: "4. 排氣閥位置干擾圖案設計",
        desc: "放置排氣閥時未考慮印刷圖案或包裝袋的摺痕。",
        solution: "在結構設計階段為排氣閥預留專屬的安全區域。"
      },
      {
        title: "5. 平放與充填後尺寸不準確",
        desc: "平放測量的尺寸無法反映包裝袋在貨架上的真實佔用空間。",
        solution: "在大規模生產前，使用 3D 建模和實物原型驗證充填後的尺寸。"
      }
    ]
  }
}

export default function PouchSizeGuidePage() {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations
  const tLocal = localTranslations[currentLang] || localTranslations.en

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchKnowledgeSizeGuidePage.meta.title')}
        description={t('pouchKnowledgeSizeGuidePage.meta.description')}
        keywords={t('pouchKnowledgeSizeGuidePage.meta.keywords', '').split(',').map(k => k.trim()).filter(Boolean)}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchKnowledgeSizeGuidePage.hero.badge')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                {t('pouchKnowledgeSizeGuidePage.hero.heading1')} <span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchKnowledgeSizeGuidePage.hero.heading2')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t('pouchKnowledgeSizeGuidePage.hero.description')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden flex items-center justify-center bg-gray-100 p-8">
                  <div className="relative w-3/4 h-3/4 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Width (W) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 font-['JetBrains_Mono'] font-bold flex items-center gap-2 whitespace-nowrap">
                        <span className="text-xs">&larr;</span> Height (H) <span className="text-xs">&rarr;</span>
                     </div>
                     <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-['JetBrains_Mono'] font-bold flex items-center gap-2">
                        <span className="text-xs">&larr;</span> Gusset (G) <span className="text-xs">&rarr;</span>
                     </div>
                     <Ruler className="w-16 h-16 opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    DIMENSIONS
                  </div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-black -z-0 -rotate-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('pouchKnowledgeSizeGuidePage.content.heading')}
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.p1')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.formulaHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.formulaP')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>{t('pouchKnowledgeSizeGuidePage.content.widthDesc')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.heightDesc')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.gussetDesc')}</li>
            </ul>

            <div className="bg-gray-100 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8">
               <h4 className="font-['Space_Grotesk'] font-black text-xl mb-2">
                 {t('pouchKnowledgeSizeGuidePage.content.exampleHeading')}
               </h4>
               <p className="text-sm m-0">
                 {t('pouchKnowledgeSizeGuidePage.content.exampleDesc')}
               </p>
            </div>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.densityHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.densityP1')}
            </p>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.densityP2')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.dimensionsHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.dimensionsP')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">
              {t('pouchKnowledgeSizeGuidePage.content.coffeeHeading')}
            </h3>
            <p>
              {t('pouchKnowledgeSizeGuidePage.content.coffeeP')}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-black">
              <li>{t('pouchKnowledgeSizeGuidePage.content.size8oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size12oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size16oz')}</li>
              <li>{t('pouchKnowledgeSizeGuidePage.content.size2lb')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase">
                {tLocal.problemsTitle}
              </h2>
              <div className="space-y-6">
                {tLocal.problems.map((prob, idx) => (
                  <div key={idx} className="p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
                    <h3 className="font-['Space_Grotesk'] font-black text-xl mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      {prob.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4">
                      {prob.desc}
                    </p>
                    <div className="bg-[#D4FF00] p-4 border-2 border-black flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <p className="font-['JetBrains_Mono'] text-sm font-bold m-0">
                        Solution: {prob.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white p-2">
                <img 
                  src="/imgs/knowledge/pouch-size-guide-pain-points.jpg" 
                  alt="Pouch Size Guide Pain Points" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchKnowledgeSizeGuidePage.faq.heading')}
          </h2>

          <div className="space-y-6">
            {[0, 1, 2, 3, 4].map((idx) => (
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
                  {t(`pouchKnowledgeSizeGuidePage.faq.items.${idx}.q`)}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-cyan-500">A:</span> {t(`pouchKnowledgeSizeGuidePage.faq.items.${idx}.a`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">
            {t('pouchKnowledgeSizeGuidePage.cta.heading')}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t('pouchKnowledgeSizeGuidePage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="/free-service" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t('pouchKnowledgeSizeGuidePage.cta.btn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

