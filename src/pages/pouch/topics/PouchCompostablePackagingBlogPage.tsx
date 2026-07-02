import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Leaf, ShieldCheck, Thermometer, Droplets, CheckCircle, HelpCircle, ArrowRight, Globe, BarChart3, FlaskConical, FileText, Zap, AlertCircle } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    sectionTitle: "5 Common Compostable Packaging Problems (And Solutions)",
    problems: [
      {
        title: "Packaging Tearing Easily",
        desc: "Lower tensile strength can cause bags to rip during transit or handling.",
        solution: "Solution: Use multi-layer compostable films or thicker gauge materials to enhance durability without sacrificing compostability."
      },
      {
        title: "Premature Degradation in High Humidity",
        desc: "Moisture in the air can trigger the composting process too early, weakening the packaging.",
        solution: "Solution: Apply a certified compostable barrier coating to block moisture while maintaining biodegradation properties."
      },
      {
        title: "Poor Oxygen and Moisture Barrier",
        desc: "Inadequate barriers allow oxygen and moisture to spoil sensitive products like coffee or snacks.",
        solution: "Solution: Utilize high-barrier compostable metallization (e.g. NatureFlex) to protect sensitive goods."
      },
      {
        title: "Weak Heat Seals Causing Bag Failures",
        desc: "Compostable materials can be harder to seal properly, leading to leaks or bursts.",
        solution: "Solution: Optimize sealing temperatures and use specialized compostable sealant layers designed for stronger bonds."
      },
      {
        title: "Confusion Over Disposal Instructions",
        desc: "Consumers often don't know whether to use home or industrial composting bins.",
        solution: "Solution: Clearly print certified compostable logos (e.g., BPI, TUV) and simple disposal instructions."
      }
    ]
  },
  es: {
    sectionTitle: "5 Problemas Comunes del Empaque Compostable (Y Soluciones)",
    problems: [
      {
        title: "El Empaque se Rompe Fácilmente",
        desc: "La menor resistencia a la tracción puede hacer que las bolsas se rompan durante el tránsito o la manipulación.",
        solution: "Solución: Utilice películas compostables multicapa o materiales de mayor calibre para mejorar la durabilidad."
      },
      {
        title: "Degradación Prematura en Alta Humedad",
        desc: "La humedad en el aire puede desencadenar el proceso de compostaje demasiado pronto, debilitando el empaque.",
        solution: "Solución: Aplique un recubrimiento de barrera compostable certificado para bloquear la humedad."
      },
      {
        title: "Pobre Barrera de Oxígeno y Humedad",
        desc: "Las barreras inadecuadas permiten que el oxígeno y la humedad echen a perder productos sensibles como café o snacks.",
        solution: "Solución: Utilice metalización compostable de alta barrera para proteger productos sensibles."
      },
      {
        title: "Sellos Térmicos Débiles que Causan Fallas",
        desc: "Los materiales compostables pueden ser más difíciles de sellar adecuadamente, lo que provoca fugas o roturas.",
        solution: "Solución: Optimice las temperaturas de sellado y use capas selladoras compostables especializadas diseñadas para uniones más fuertes."
      },
      {
        title: "Confusión sobre las Instrucciones de Desecho",
        desc: "Los consumidores a menudo no saben si usar contenedores de compostaje doméstico o industrial.",
        solution: "Solución: Imprima claramente logotipos compostables certificados e instrucciones sencillas de eliminación."
      }
    ]
  },
  fr: {
    sectionTitle: "5 Problèmes Courants d'Emballage Compostable (Et Solutions)",
    problems: [
      {
        title: "L'emballage se déchire facilement",
        desc: "Une résistance à la traction plus faible peut provoquer la déchirure des sacs pendant le transport ou la manipulation.",
        solution: "Solution : Utilisez des films compostables multicouches ou des matériaux plus épais pour améliorer la durabilité."
      },
      {
        title: "Dégradation prématurée à forte humidité",
        desc: "L'humidité de l'air peut déclencher le processus de compostage trop tôt, affaiblissant l'emballage.",
        solution: "Solution : Appliquez un revêtement barrière compostable certifié pour bloquer l'humidité."
      },
      {
        title: "Mauvaise barrière à l'oxygène et à l'humidité",
        desc: "Des barrières inadéquates permettent à l'oxygène et à l'humidité de gâter les produits sensibles comme le café ou les collations.",
        solution: "Solution : Utilisez une métallisation compostable à haute barrière pour protéger les produits sensibles."
      },
      {
        title: "Faibles scellages thermiques causant des ruptures",
        desc: "Les matériaux compostables peuvent être plus difficiles à sceller correctement, entraînant des fuites ou des éclatements.",
        solution: "Solution : Optimisez les températures de scellage et utilisez des couches scellantes compostables spécialisées."
      },
      {
        title: "Confusion sur les instructions d'élimination",
        desc: "Les consommateurs ne savent souvent pas s'ils doivent utiliser des bacs de compostage domestiques ou industriels.",
        solution: "Solution : Imprimez clairement les logos compostables certifiés et les instructions d'élimination simples."
      }
    ]
  },
  'zh-TW': {
    sectionTitle: "可堆肥包裝的 5 個常見問題（及解決方案）",
    problems: [
      {
        title: "包裝容易撕裂",
        desc: "較低的抗拉強度可能導致袋子在運輸或搬運過程中破裂。",
        solution: "解決方案：使用多層可堆肥薄膜或更厚的材料以增強耐用性，而不犧牲可堆肥性。"
      },
      {
        title: "在高濕度環境中過早降解",
        desc: "空氣中的水分可能過早觸發堆肥過程，削弱包裝的強度。",
        solution: "解決方案：塗上經過認證的可堆肥阻隔塗層，以在保持生物降解特性的同時阻擋水分。"
      },
      {
        title: "氧氣和水分阻隔性差",
        desc: "阻隔不足會讓氧氣和水分破壞如咖啡或零食等敏感產品。",
        solution: "解決方案：使用高阻隔可堆肥金屬化材料（例如 NatureFlex）來保護敏感產品。"
      },
      {
        title: "熱封強度弱導致袋子破裂",
        desc: "可堆肥材料可能更難正確密封，導致洩漏或破裂。",
        solution: "解決方案：優化密封溫度並使用專為更強粘合而設計的專門可堆肥密封層。"
      },
      {
        title: "處置說明令人困惑",
        desc: "消費者通常不知道該使用家庭堆肥桶還是工業堆肥桶。",
        solution: "解決方案：清楚印製經認證的可堆肥標誌（例如 BPI、TUV）和簡單的處置說明。"
      }
    ]
  }
} as const;

type LocaleKey = keyof typeof translations;

const PouchCompostablePackagingBlogPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentTranslations = translations[(i18n.language as LocaleKey) || 'en'] || translations.en;
  const baseUrl = getBaseUrl()

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchCompostablePackagingBlogPage.meta.title')}</title>
        <meta name="description" content={t('pouchCompostablePackagingBlogPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-packaging`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 border-b-8 border-black bg-emerald-400 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="blue">{t('pouchCompostablePackagingBlogPage.hero.badge')}</NeoBadge>
              <h1 
                className="mt-8 font-black text-6xl md:text-8xl leading-[0.8] uppercase tracking-tighter italic drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                dangerouslySetInnerHTML={{ __html: t('pouchCompostablePackagingBlogPage.hero.title') }}
              />
              <p className="mt-12 text-2xl font-black font-['JetBrains_Mono'] text-black bg-white border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                {t('pouchCompostablePackagingBlogPage.hero.subtitle')}
              </p>
              <div className="mt-16 flex flex-wrap gap-6">
                <NeoButton variant="dark" to="/quote">{t('pouchCompostablePackagingBlogPage.hero.start')}</NeoButton>
                <NeoButton variant="secondary" className="!text-white border-white" to="/materials">{t('pouchCompostablePackagingBlogPage.hero.lab')}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 translate-x-6 translate-y-6 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/homevs/a_blog_hero_banner_compostable_choice_5307332.webp" 
                alt="Compostable Packaging Hero" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biodegradation Section */}
      <section className="py-24 bg-white border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <NeoBadge color="magenta">{t('pouchCompostablePackagingBlogPage.kinetics.badge')}</NeoBadge>
            <h2 
              className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic"
              dangerouslySetInnerHTML={{ __html: t('pouchCompostablePackagingBlogPage.kinetics.title') }}
            />
            <p className="mt-8 text-xl text-gray-800 leading-relaxed">
              {t('pouchCompostablePackagingBlogPage.kinetics.p1')}
            </p>
            <div className="mt-12 space-y-6">
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <Thermometer className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t('pouchCompostablePackagingBlogPage.kinetics.t1_title')}</h4>
                    <p className="mt-2 text-sm text-gray-600">{t('pouchCompostablePackagingBlogPage.kinetics.t1_desc')}</p>
                  </div>
                </div>
              </NeoCard>
              <NeoCard color="bg-[#F0F0F0]" className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <FlaskConical className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-xl uppercase">{t('pouchCompostablePackagingBlogPage.kinetics.t2_title')}</h4>
                    <p className="mt-2 text-sm text-gray-600">{t('pouchCompostablePackagingBlogPage.kinetics.t2_desc')}</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 translate-x-6 translate-y-6 border-4 border-black" />
            <div className="relative z-10 border-8 border-black bg-white overflow-hidden">
              <ClickableImage 
                src="/imgs/illustrated/a_home_compostable_card_v1_2166648.webp" 
                alt="Compostable Material Science" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Research Content */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black font-['JetBrains_Mono']">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <h3 className="font-black text-4xl uppercase italic mb-8">{t('pouchCompostablePackagingBlogPage.deep.title')}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.p1')}
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.p2')}
              </p>
              
              <div className="my-12 p-12 bg-white border-8 border-black shadow-[20px_20px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-3xl uppercase mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" /> {t('pouchCompostablePackagingBlogPage.deep.specs.title')}
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l1')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l2')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 mt-1" />
                    <span>{t('pouchCompostablePackagingBlogPage.deep.specs.l3')}</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-black text-4xl uppercase italic mb-8">{t('pouchCompostablePackagingBlogPage.deep.home_title')}</h3>
              <p className="text-gray-800 text-lg leading-relaxed">
                {t('pouchCompostablePackagingBlogPage.deep.home_p')}
              </p>
            </div>
            
            <aside className="space-y-8">
              <NeoCard color="bg-black" className="text-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(16,185,129,1)]">
                <h4 className="font-black text-2xl uppercase mb-6 flex items-center gap-2"><Zap className="text-emerald-400" /> {t('pouchCompostablePackagingBlogPage.aside.title')}</h4>
                <div className="space-y-4 text-xs font-black">
                  <div>
                    <p className="mb-1 uppercase">{t('pouchCompostablePackagingBlogPage.aside.frag')}</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 uppercase">{t('pouchCompostablePackagingBlogPage.aside.carbon')}</p>
                    <div className="h-4 bg-gray-800 border border-white">
                      <div className="h-full bg-emerald-400" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                <NeoButton variant="primary" className="mt-8 !bg-emerald-400 !text-white w-full border-2 border-white" to="/quote">{t('pouchCompostablePackagingBlogPage.aside.start')}</NeoButton>
              </NeoCard>
              
              <div className="bg-white p-8 border-4 border-black font-black uppercase text-xs">
                <h4 className="text-xl mb-4">{t('pouchCompostablePackagingBlogPage.aside.title2')}</h4>
                <div className="p-2 border-2 border-black mb-2">{t('pouchCompostablePackagingBlogPage.aside.non_gmo')}</div>
                <div className="p-2 border-2 border-black mb-2">{t('pouchCompostablePackagingBlogPage.aside.heavy_metal')}</div>
                <div className="p-2 border-2 border-black">{t('pouchCompostablePackagingBlogPage.aside.ecotox')}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-[#F0F0F0] border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-7xl uppercase italic">
              {currentTranslations.sectionTitle}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-600 translate-x-6 translate-y-6 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/compostable-packaging-pain-points.jpg" 
                alt="Compostable Packaging Problems and Solutions" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              {currentTranslations.problems.map((prob, idx) => (
                <NeoCard key={idx} color="bg-white" className="border-4 border-black p-6 hover:bg-emerald-50 transition-colors">
                  <div className="flex gap-4">
                    <div className="bg-emerald-400 p-2 border-2 border-black h-fit">
                      <AlertCircle className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl uppercase mb-2">{prob.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-4">{prob.desc}</p>
                      <div className="bg-green-100 p-4 border-l-4 border-emerald-600 font-['JetBrains_Mono'] text-sm font-bold text-emerald-900">
                        {prob.solution}
                      </div>
                    </div>
                  </div>
                </NeoCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-black text-6xl md:text-9xl uppercase italic mb-16 text-center">{t('pouchCompostablePackagingBlogPage.faq.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q1_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q1_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q2_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q2_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q3_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q3_a')
              },
              {
                q: t('pouchCompostablePackagingBlogPage.faq.q4_q'),
                a: t('pouchCompostablePackagingBlogPage.faq.q4_a')
              }
            ].map((faq, i) => (
              <NeoCard key={i} color="bg-[#F0F0F0]" className="border-4 border-black p-8 hover:bg-emerald-600 hover:text-white transition-all group">
                <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-emerald-600 group-hover:text-white" /> {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm leading-relaxed text-gray-600 group-hover:text-white">{faq.a}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-6xl md:text-[10rem] uppercase leading-none mb-12 italic">
            {t('pouchCompostablePackagingBlogPage.cta.title').replace('<//br>', '<br/>').split('<br/>')[0]}<br/>
            <span className="text-emerald-400">{t('pouchCompostablePackagingBlogPage.cta.title').replace('<//br>', '<br/>').split('<br/>')[1]}</span>
          </h2>
          <NeoButton variant="primary" className="!bg-emerald-400 !text-white !text-2xl px-12 py-6 border-4 border-white" to="/quote">
            {t('pouchCompostablePackagingBlogPage.cta.btn')}
          </NeoButton>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostablePackagingBlogPage
