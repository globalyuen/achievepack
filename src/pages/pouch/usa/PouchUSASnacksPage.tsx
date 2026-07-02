import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard } from '../../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    painPointsTitle: "5 Common Snacks Packaging Problems (And Solutions)",
    points: [
      {
        title: "Stale Snacks (Loss of Freshness)",
        desc: "High-barrier films and resealable zippers lock out oxygen and moisture, extending shelf life."
      },
      {
        title: "Punctures from Sharp Snacks",
        desc: "Puncture-resistant laminated materials ensure durability against chips and pretzels."
      },
      {
        title: "Grease and Oil Leakage",
        desc: "Specialized oil-resistant inner linings (e.g., PE or foil) prevent unsightly stains."
      },
      {
        title: "Poor Shelf Presence",
        desc: "Custom stand-up pouches with vivid, high-definition printing attract consumers instantly."
      },
      {
        title: "Non-Recyclable Packaging",
        desc: "Mono-material recyclable pouches or compostable films meet modern sustainability goals."
      }
    ]
  },
  es: {
    painPointsTitle: "5 Problemas Comunes de Empaques para Snacks (Y Soluciones)",
    points: [
      {
        title: "Snacks Rancios (Pérdida de Frescura)",
        desc: "Las películas de alta barrera y los cierres herméticos bloquean el oxígeno y la humedad, prolongando la vida útil."
      },
      {
        title: "Perforaciones por Snacks Puntiagudos",
        desc: "Materiales laminados resistentes a las perforaciones garantizan durabilidad frente a papas fritas y pretzels."
      },
      {
        title: "Fugas de Grasa y Aceite",
        desc: "Revestimientos internos especializados resistentes al aceite evitan manchas antiestéticas."
      },
      {
        title: "Poca Presencia en el Estante",
        desc: "Las bolsas doypack personalizadas con impresión de alta definición atraen instantáneamente a los consumidores."
      },
      {
        title: "Empaques No Reciclables",
        desc: "Las bolsas reciclables de un solo material o películas compostables cumplen con los objetivos de sostenibilidad."
      }
    ]
  },
  fr: {
    painPointsTitle: "5 Problèmes Courants d'Emballage de Snacks (Et Solutions)",
    points: [
      {
        title: "Snacks Rassasiés (Perte de Fraîcheur)",
        desc: "Les films à haute barrière et les fermetures zippées refermables bloquent l'oxygène et l'humidité."
      },
      {
        title: "Perforations dues aux Snacks Pointus",
        desc: "Les matériaux stratifiés résistants aux perforations assurent la durabilité contre les chips et les bretzels."
      },
      {
        title: "Fuite de Graisse et d'Huile",
        desc: "Des revêtements internes spéciaux résistants à l'huile empêchent les taches disgracieuses."
      },
      {
        title: "Mauvaise Présence en Rayon",
        desc: "Les sachets tenant debout personnalisés avec une impression haute définition attirent instantanément les consommateurs."
      },
      {
        title: "Emballages Non Recyclables",
        desc: "Les sachets recyclables mono-matériau ou les films compostables répondent aux objectifs modernes de durabilité."
      }
    ]
  },
  'zh-TW': {
    painPointsTitle: "5 個常見的零食包裝問題（與解決方案）",
    points: [
      {
        title: "零食變質（失去新鮮度）",
        desc: "高阻隔薄膜和可重複密封的拉鏈能阻擋氧氣和水分，延長保質期。"
      },
      {
        title: "尖銳零食刺破包裝",
        desc: "抗刺穿的層壓材料確保包裝能承受薯片和蝴蝶餅的碰撞。"
      },
      {
        title: "油漬滲漏",
        desc: "防油內襯（如 PE 或鋁箔）可防止出現不美觀的油漬。"
      },
      {
        title: "貨架吸引力不足",
        desc: "客製化自立袋搭配高解析度生動印刷，能瞬間吸引消費者目光。"
      },
      {
        title: "不可回收包裝",
        desc: "單一材質可回收包裝袋或可堆肥薄膜，符合現代永續發展目標。"
      }
    ]
  }
};

export default function PouchUSASnacksPage() {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations;
  const langData = localTranslations[currentLang] || localTranslations['en'];
  const title = t('pouchUSASnacksPage.title')
  const description = t('pouchUSASnacksPage.description')

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://pouch.eco/usa/snacks-packaging" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-white text-black border-4 border-black px-4 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm tracking-wider">{t('pouchUSASnacksPage.marketHub')}</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-black">
                {t('pouchUSASnacksPage.heroTitleStart')}<span className="text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchUSASnacksPage.heroTitleSpan')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-black border-2 border-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-white">
                {t('pouchUSASnacksPage.heroDesc')}
              </p>
            </div>

            <div className="relative">
              <NeoCard className="bg-white relative z-10 rotate-3 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/imgs/industry/snacks/a_beef_jerky_pouch_packaging_6519922.webp" 
                    alt={t('pouchUSASnacksPage.imgAlt1')} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#D4FF00] border-2 border-black px-3 py-1 font-['Space_Grotesk'] font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {t('pouchUSASnacksPage.imgBadge')}
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
            {t('pouchUSASnacksPage.sectionHeadingStart')}<span className="text-orange-500">{t('pouchUSASnacksPage.sectionHeadingSpan')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchUSASnacksPage.para1')}
            </p>

            <img 
              src="/imgs/pouch-shape/k-seal/a_kseal_gusset_grain_cereal_4708928.webp" 
              alt={t('pouchUSASnacksPage.imgAlt2')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSASnacksPage.subheading1')}</h3>
            <p>
              {t('pouchUSASnacksPage.para2')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSASnacksPage.subheading2')}</h3>
            <p>
              {t('pouchUSASnacksPage.para3')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSASnacksPage.subheading3')}</h3>
            <p>
              {t('pouchUSASnacksPage.para4')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchUSASnacksPage.subheading4')}</h3>
            <p>
              {t('pouchUSASnacksPage.para5')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {langData.painPointsTitle}
          </h2>
          
          <img 
            src="/imgs/knowledge/[topic-name-pain-points].jpg" 
            alt="Snacks Packaging Pain Points" 
            className="w-full h-96 object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12"
          />

          <div className="space-y-6">
            {langData.points.map((point, idx) => (
              <div key={idx} className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4">
                <CheckCircle className="text-orange-500 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="font-['Space_Grotesk'] font-black text-xl uppercase mb-2">{point.title}</h3>
                  <p className="font-['JetBrains_Mono'] text-gray-700">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchUSASnacksPage.faqHeadingStart')}<span className="text-orange-500">{t('pouchUSASnacksPage.faqHeadingSpan')}</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('pouchUSASnacksPage.faqQ1'),
                a: t('pouchUSASnacksPage.faqA1')
              },
              {
                q: t('pouchUSASnacksPage.faqQ2'),
                a: t('pouchUSASnacksPage.faqA2')
              },
              {
                q: t('pouchUSASnacksPage.faqQ3'),
                a: t('pouchUSASnacksPage.faqA3')
              },
              {
                q: t('pouchUSASnacksPage.faqQ4'),
                a: t('pouchUSASnacksPage.faqA4')
              },
              {
                q: t('pouchUSASnacksPage.faqQ5'),
                a: t('pouchUSASnacksPage.faqA5')
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
                  <span className="text-orange-500 flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-orange-500">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchUSASnacksPage.ctaHeading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-gray-300">
            {t('pouchUSASnacksPage.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary" className="!bg-[#D4FF00] !text-black w-full sm:w-auto text-xl py-4">
              {t('pouchUSASnacksPage.ctaBtn')} <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
