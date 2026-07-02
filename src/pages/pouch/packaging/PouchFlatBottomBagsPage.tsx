import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Box, AlertTriangle, TrendingUp, Droplets, PackageCheck, Wind } from 'lucide-react'

const localTranslations = {
  en: {
    painPointsTitle: "5 Common Flat Bottom Bag Problems (And Solutions)",
    painPoints: [
      {
        icon: 'AlertTriangle',
        problem: "1. Poor Shelf Stability: Standard pouches tip over easily, ruining retail display.",
        solution: "Solution: True flat bottom design with sealed gussets creates a rigid, brick-like foundation."
      },
      {
        icon: 'Wind',
        problem: "2. Loss of Freshness: Coffee or snacks lose flavor due to oxygen and moisture ingress.",
        solution: "Solution: High-barrier multi-layer laminations (AL/VMPET) combined with one-way degassing valves."
      },
      {
        icon: 'PackageCheck',
        problem: "3. Inefficient Storage Volume: Wasted space during transit increases shipping costs.",
        solution: "Solution: The box-like shape maximizes internal volume, holding more product in a smaller footprint."
      },
      {
        icon: 'Droplets',
        problem: "4. Weak Side Seals Bursting: Bags split open under stacking pressure or impact.",
        solution: "Solution: Quad-seal reinforced edges distribute pressure evenly, preventing blowouts."
      },
      {
        icon: 'TrendingUp',
        problem: "5. Poor Pouring Experience: Products spill or get trapped in corners.",
        solution: "Solution: Wide top openings with integrated zippers allow for easy scooping and pouring."
      }
    ]
  },
  es: {
    painPointsTitle: "5 problemas comunes de las bolsas de fondo plano (y soluciones)",
    painPoints: [
      {
        icon: 'AlertTriangle',
        problem: "1. Mala estabilidad en los estantes: Las bolsas estándar se vuelcan fácilmente.",
        solution: "Solución: El diseño de fondo plano real con fuelles sellados crea una base rígida."
      },
      {
        icon: 'Wind',
        problem: "2. Pérdida de frescura: El café o los snacks pierden sabor por el oxígeno y la humedad.",
        solution: "Solución: Laminaciones multicapa de alta barrera con válvulas desgasificadoras unidireccionales."
      },
      {
        icon: 'PackageCheck',
        problem: "3. Volumen de almacenamiento ineficiente: El espacio desperdiciado aumenta los costos de envío.",
        solution: "Solución: La forma de caja maximiza el volumen interno, almacenando más en menos espacio."
      },
      {
        icon: 'Droplets',
        problem: "4. Sellos laterales débiles: Las bolsas se rompen bajo la presión de apilamiento.",
        solution: "Solución: Los bordes reforzados con sello cuádruple distribuyen la presión uniformemente."
      },
      {
        icon: 'TrendingUp',
        problem: "5. Mala experiencia de vertido: Los productos se derraman o se atrapan en las esquinas.",
        solution: "Solución: Aberturas superiores anchas con cremalleras integradas para facilitar el uso."
      }
    ]
  },
  fr: {
    painPointsTitle: "5 problèmes courants des sachets à fond plat (et solutions)",
    painPoints: [
      {
        icon: 'AlertTriangle',
        problem: "1. Mauvaise stabilité en rayon : Les sachets standard se renversent facilement.",
        solution: "Solution : La conception à fond plat véritable avec soufflets scellés crée une base rigide."
      },
      {
        icon: 'Wind',
        problem: "2. Perte de fraîcheur : Le café ou les snacks perdent leur saveur à cause de l'oxygène et de l'humidité.",
        solution: "Solution : Stratifications multicouches à haute barrière avec valves de dégazage unidirectionnelles."
      },
      {
        icon: 'PackageCheck',
        problem: "3. Volume de stockage inefficace : L'espace gaspillé augmente les coûts d'expédition.",
        solution: "Solution : La forme en boîte maximise le volume interne, contenant plus de produit."
      },
      {
        icon: 'Droplets',
        problem: "4. Faiblesse des joints latéraux : Les sacs éclatent sous la pression d'empilement.",
        solution: "Solution : Les bords renforcés à quatre joints répartissent la pression uniformément."
      },
      {
        icon: 'TrendingUp',
        problem: "5. Mauvaise expérience de versement : Les produits se renversent ou restent coincés dans les coins.",
        solution: "Solution : Larges ouvertures supérieures avec fermetures éclair intégrées pour un service facile."
      }
    ]
  },
  'zh-TW': {
    painPointsTitle: "八邊封平底袋的 5 個常見痛點 (與解決方案)",
    painPoints: [
      {
        icon: 'AlertTriangle',
        problem: "1. 貨架穩定性差：標準包裝袋容易傾倒，破壞商品展示。",
        solution: "解決方案：真正的平底設計和密封側片，打造如磚塊般堅固的底座。"
      },
      {
        icon: 'Wind',
        problem: "2. 失去新鮮度：咖啡或零食因氧氣和濕氣進入而失去風味。",
        solution: "解決方案：高阻隔多層複合材料 (AL/VMPET) 結合單向排氣閥。"
      },
      {
        icon: 'PackageCheck',
        problem: "3. 儲存體積效率低：運輸過程中的空間浪費增加了運輸成本。",
        solution: "解決方案：盒狀設計最大化了內部體積，在更小的佔地面積內容納更多產品。"
      },
      {
        icon: 'Droplets',
        problem: "4. 側邊封口薄弱導致破裂：包裝袋在堆疊壓力或衝擊下裂開。",
        solution: "解決方案：四邊封加固邊緣均勻分佈壓力，防止破裂。"
      },
      {
        icon: 'TrendingUp',
        problem: "5. 倒出體驗差：產品容易溢出或卡在角落。",
        solution: "解決方案：帶有集成夾鏈的寬頂部開口，方便舀取和倒出。"
      }
    ]
  }
}

const iconMap = {
  AlertTriangle, Wind, PackageCheck, Droplets, TrendingUp
}
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

export default function PouchFlatBottomBagsPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language || 'en') as keyof typeof localTranslations
  const currentTranslations = localTranslations[lang] || localTranslations.en
  const [scrollPercent, setScrollPercent] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY
      const d = document.documentElement.scrollHeight - window.innerHeight
      if (d > 0) setScrollPercent(s / d)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroCardRef.current) return
    const rect = heroCardRef.current.getBoundingClientRect()
    setTilt({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 30, y: ((e.clientY - rect.top) / rect.height - 0.5) * -30 })
  }

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t('pouchFlatBottomBagsPage.title')
  const description = t('pouchFlatBottomBagsPage.description')

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchFlatBottomBagsPage.premiumType')}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t('pouchFlatBottomBagsPage.hero.part1')}<br/>
                {t('pouchFlatBottomBagsPage.hero.part2')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchFlatBottomBagsPage.hero.part3')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t('pouchFlatBottomBagsPage.hero.descLine1')}<br/>
                &gt; {t('pouchFlatBottomBagsPage.hero.descLine2')}<br/>
                &gt; {t('pouchFlatBottomBagsPage.hero.descLine3')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchFlatBottomBagsPage.hero.getQuote')}</NeoButton>
                <NeoButton variant="secondary">{t('pouchFlatBottomBagsPage.hero.compareFormats')}</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]">
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/coffee-pouch.glb"
                tilt={tilt}
                scrollPercent={scrollPercent}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Award className="w-12 h-12 mb-4 text-[#00FFFF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatBottomBagsPage.benefits.fivePanel.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatBottomBagsPage.benefits.fivePanel.desc')}
            </p>
            <NeoBadge color="bg-[#FF00FF]">{t('pouchFlatBottomBagsPage.benefits.fivePanel.badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Box className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatBottomBagsPage.benefits.flatFoundation.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatBottomBagsPage.benefits.flatFoundation.desc')}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t('pouchFlatBottomBagsPage.benefits.flatFoundation.badge')}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t('pouchFlatBottomBagsPage.benefits.volumeOptimization.title')}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t('pouchFlatBottomBagsPage.benefits.volumeOptimization.desc')}
            </p>
            <NeoBadge color="bg-white">{t('pouchFlatBottomBagsPage.benefits.volumeOptimization.badge')}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Pain Points Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto border-t-4 border-black bg-white">
        <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
          {currentTranslations.painPointsTitle}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {currentTranslations.painPoints.map((item, idx) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={idx} className="bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF00FF] p-3 border-2 border-black">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Space_Grotesk'] font-bold text-xl text-black mb-2">{item.problem}</h4>
                      <p className="font-['JetBrains_Mono'] text-gray-700 font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <img 
              src="/imgs/knowledge/flat-bottom-bags-pain-points.jpg" 
              alt="Flat Bottom Bags Pain Points"
              className="w-full h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-8">
            {t('pouchFlatBottomBagsPage.guide.heading')}
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('pouchFlatBottomBagsPage.guide.p1')}
            </p>
            
            <img 
              src="/imgs/pouch-shape/flat-bottom-premium.png" 
              alt={t('pouchFlatBottomBagsPage.guide.imageAlt')}
              className="w-full h-[600px] object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchFlatBottomBagsPage.guide.subheading1')}</h3>
            <p>
              {t('pouchFlatBottomBagsPage.guide.p2')}
            </p>
            <p>
              {t('pouchFlatBottomBagsPage.guide.p3')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchFlatBottomBagsPage.guide.subheading2')}</h3>
            <p>
              {t('pouchFlatBottomBagsPage.guide.p4')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('pouchFlatBottomBagsPage.guide.subheading3')}</h3>
            <p>
              {t('pouchFlatBottomBagsPage.guide.p5')}
            </p>
            <p>
              {t('pouchFlatBottomBagsPage.guide.p6')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {t('pouchFlatBottomBagsPage.faq.heading')}
          </h2>

          <div className="space-y-6">
            {[
              {
                q: t('pouchFlatBottomBagsPage.faq.q1.q'),
                a: t('pouchFlatBottomBagsPage.faq.q1.a')
              },
              {
                q: t('pouchFlatBottomBagsPage.faq.q2.q'),
                a: t('pouchFlatBottomBagsPage.faq.q2.a')
              },
              {
                q: t('pouchFlatBottomBagsPage.faq.q3.q'),
                a: t('pouchFlatBottomBagsPage.faq.q3.a')
              },
              {
                q: t('pouchFlatBottomBagsPage.faq.q4.q'),
                a: t('pouchFlatBottomBagsPage.faq.q4.a')
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
                  <span className="text-[#00FFFF] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="font-['JetBrains_Mono'] text-sm text-gray-700 pl-8">
                  <span className="font-bold text-[#00FFFF]">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t('pouchFlatBottomBagsPage.cta.heading')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t('pouchFlatBottomBagsPage.cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('pouchFlatBottomBagsPage.cta.bookConsultation')}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t('pouchFlatBottomBagsPage.cta.orderSamples')}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
