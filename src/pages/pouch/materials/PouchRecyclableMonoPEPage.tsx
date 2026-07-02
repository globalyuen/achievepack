import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Recycle, Shield, CheckCircle, HelpCircle, Award, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

const localTranslations = {
  en: {
    painPointsTitle: "5 Common Recyclable Mono-PE Problems (And Solutions)",
    painPointsBadge: "Engineering Challenges",
    points: [
      {
        title: "Poor Heat Resistance",
        problem: "Mono-PE films easily stretch or melt through during heat sealing compared to PET/PE structures.",
        solution: "Solution: Using cross-linked PE on the outer layer or employing precision temperature-controlled seal bars."
      },
      {
        title: "Inferior Barrier Properties",
        problem: "Standard PE lacks adequate oxygen and moisture barriers for perishable foods.",
        solution: "Solution: Incorporating a thin EVOH co-extrusion layer (under 5%) to maintain recyclability while boosting barrier performance."
      },
      {
        title: "Lower Puncture Resistance",
        problem: "Mono-material PE is often softer and more prone to tearing during transit.",
        solution: "Solution: Blending with metallocene LLDPE (mLLDPE) to significantly enhance toughness and puncture resistance."
      },
      {
        title: "Hazy or Dull Appearance",
        problem: "Standard PE lacks the glossy, premium retail finish of multi-material laminates.",
        solution: "Solution: Utilizing Machine Direction Oriented PE (MDO-PE) for high-clarity and excellent printability."
      },
      {
        title: "Slower Machinability",
        problem: "High extensibility causes stretching on high-speed packaging lines.",
        solution: "Solution: Increasing film stiffness with HDPE blends and using advanced slip additives for smooth feeding."
      }
    ]
  },
  es: {
    painPointsTitle: "5 Problemas Comunes del Mono-PE Reciclable (y Soluciones)",
    painPointsBadge: "Desafíos de Ingeniería",
    points: [
      {
        title: "Baja Resistencia al Calor",
        problem: "Las películas Mono-PE se estiran o se derriten fácilmente durante el sellado térmico en comparación con estructuras PET/PE.",
        solution: "Solución: Uso de PE reticulado en la capa externa o empleo de barras de sellado con control preciso de temperatura."
      },
      {
        title: "Propiedades de Barrera Inferiores",
        problem: "El PE estándar carece de barreras adecuadas contra oxígeno y humedad para alimentos perecederos.",
        solution: "Solución: Incorporación de una fina capa de coextrusión de EVOH (menos del 5%) para mantener la reciclabilidad."
      },
      {
        title: "Menor Resistencia a la Perforación",
        problem: "El PE monomaterial es a menudo más suave y propenso a rasgarse durante el tránsito.",
        solution: "Solución: Mezcla con LLDPE metaloceno (mLLDPE) para mejorar significativamente la tenacidad y resistencia."
      },
      {
        title: "Apariencia Opaca o Turbia",
        problem: "El PE estándar carece del acabado brillante de los laminados multimaterial.",
        solution: "Solución: Uso de PE Orientado en la Dirección de la Máquina (MDO-PE) para alta claridad y excelente imprimibilidad."
      },
      {
        title: "Menor Velocidad de Maquinabilidad",
        problem: "La alta extensibilidad causa estiramientos en líneas de envasado de alta velocidad.",
        solution: "Solución: Aumento de la rigidez de la película con mezclas de HDPE y aditivos de deslizamiento avanzados."
      }
    ]
  },
  fr: {
    painPointsTitle: "5 Problèmes Courants du Mono-PE Recyclable (et Solutions)",
    painPointsBadge: "Défis d'Ingénierie",
    points: [
      {
        title: "Faible Résistance à la Chaleur",
        problem: "Les films Mono-PE s'étirent ou fondent facilement lors du thermoscellage par rapport aux structures PET/PE.",
        solution: "Solution : Utilisation de PE réticulé sur la couche externe ou de barres de scellage avec contrôle précis de la température."
      },
      {
        title: "Propriétés Barrière Inférieures",
        problem: "Le PE standard manque de barrières adéquates contre l'oxygène et l'humidité pour les aliments périssables.",
        solution: "Solution : Intégration d'une fine couche de coextrusion d'EVOH (moins de 5 %) pour maintenir la recyclabilité."
      },
      {
        title: "Mindre Résistance à la Perforation",
        problem: "Le PE mono-matériau est souvent plus souple et sujet aux déchirures pendant le transport.",
        solution: "Solution : Mélange avec du LLDPE métallocène (mLLDPE) pour améliorer considérablement la ténacité."
      },
      {
        title: "Apparence Terne ou Opaque",
        problem: "Le PE standard n'a pas la finition brillante des stratifiés multi-matériaux.",
        solution: "Solution : Utilisation de PE Orienté dans le Sens de la Machine (MDO-PE) pour une clarté et une imprimabilité excellentes."
      },
      {
        title: "Usinabilité Plus Lente",
        problem: "L'extensibilité élevée provoque des étirements sur les lignes d'emballage à grande vitesse.",
        solution: "Solution : Augmentation de la rigidité du film avec des mélanges de HDPE et des additifs de glissement avancés."
      }
    ]
  },
  'zh-TW': {
    painPointsTitle: "5個常見的可回收單一PE問題（及解決方案）",
    painPointsBadge: "工程挑戰",
    points: [
      {
        title: "耐熱性差",
        problem: "與 PET/PE 結構相比，單一 PE 薄膜在熱封過程中容易拉伸或熔穿。",
        solution: "解決方案：在外層使用交聯 PE 或採用精確控溫的封口熱壓條。"
      },
      {
        title: "阻隔性能較差",
        problem: "標準 PE 缺乏對易腐食品足夠的氧氣和水分阻隔能力。",
        solution: "解決方案：加入薄層 EVOH 共擠出層（低於 5%），在保持可回收性的同時提升阻隔性能。"
      },
      {
        title: "抗穿刺性較低",
        problem: "單一材質 PE 通常較軟，在運輸過程中更容易撕裂。",
        solution: "解決方案：與茂金屬 LLDPE (mLLDPE) 混合，顯著增強韌性和抗穿刺性。"
      },
      {
        title: "外觀朦朧或暗淡",
        problem: "標準 PE 缺乏多材質複合膜那種光澤的高級零售質感。",
        solution: "解決方案：利用機器方向延伸 PE (MDO-PE) 以獲得高清晰度和卓越的印刷適性。"
      },
      {
        title: "機器加工速度較慢",
        problem: "高延展性會導致在高速包裝線上發生拉伸變形。",
        solution: "解決方案：透過 HDPE 混合物和先進的爽滑劑來增加薄膜硬度，確保進料順暢。"
      }
    ]
  },
  zh: {
    painPointsTitle: "5个常见的可回收单一PE问题（及解决方案）",
    painPointsBadge: "工程挑战",
    points: [
      {
        title: "耐热性差",
        problem: "与 PET/PE 结构相比，单一 PE 薄膜在热封过程中容易拉伸或熔穿。",
        solution: "解决方案：在外层使用交联 PE 或采用精确控温的封口热压条。"
      },
      {
        title: "阻隔性能较差",
        problem: "标准 PE 缺乏对易腐食品足够的氧气和水分阻隔能力。",
        solution: "解决方案：加入薄层 EVOH 共挤出层（低于 5%），在保持可回收性的同时提升阻隔性能。"
      },
      {
        title: "抗穿刺性较低",
        problem: "单一材质 PE 通常较软，在运输过程中更容易撕裂。",
        solution: "解决方案：与茂金属 LLDPE (mLLDPE) 混合，显著增强韧性和抗穿刺性。"
      },
      {
        title: "外观朦胧或暗淡",
        problem: "标准 PE 缺乏多材质复合膜那种光泽的高级零售质感。",
        solution: "解决方案：利用机器方向延伸 PE (MDO-PE) 以获得高清晰度和卓越的印刷适性。"
      },
      {
        title: "机器加工速度较慢",
        problem: "高延展性会导致在高速包装线上发生拉伸变形。",
        solution: "解决方案：通过 HDPE 混合物和先进的爽滑剂来增加薄膜硬度，确保进料顺畅。"
      }
    ]
  }
}

export default function PouchRecyclableMonoPEPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchRecyclableMonoPE'

  const currentLang = i18n.language || 'en'
  const langKey = localTranslations[currentLang as keyof typeof localTranslations] ? currentLang : 'en'
  const currentTranslations = localTranslations[langKey as keyof typeof localTranslations]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t(`${p}.faq1Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq1Answer`)
        }
      },
      {
        "@type": "Question",
        "name": t(`${p}.faq2Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq2Answer`)
        }
      },
      {
        "@type": "Question",
        "name": t(`${p}.faq3Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq3Answer`)
        }
      },
      {
        "@type": "Question",
        "name": t(`${p}.faq4Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq4Answer`)
        }
      },
      {
        "@type": "Question",
        "name": t(`${p}.faq5Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq5Answer`)
        }
      },
      {
        "@type": "Question",
        "name": t(`${p}.faq6Question`),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t(`${p}.faq6Answer`)
        }
      }
    ]
  }

  const specTranslations = [
    {
      label: t(`${p}.specs.polymer.label`),
      val: t(`${p}.specs.polymer.val`),
      desc: t(`${p}.specs.polymer.desc`)
    },
    {
      label: t(`${p}.specs.barrier.label`),
      val: t(`${p}.specs.barrier.val`),
      desc: t(`${p}.specs.barrier.desc`)
    },
    {
      label: t(`${p}.specs.seal.label`),
      val: t(`${p}.specs.seal.val`),
      desc: t(`${p}.specs.seal.desc`)
    },
    {
      label: t(`${p}.specs.structural.label`),
      val: t(`${p}.specs.structural.val`),
      desc: t(`${p}.specs.structural.desc`)
    }
  ]

  const faqs = [
    {
      q: t(`${p}.faq1Question`),
      a: t(`${p}.faq1Answer`)
    },
    {
      q: t(`${p}.faq2Question`),
      a: t(`${p}.faq2Answer`)
    },
    {
      q: t(`${p}.faq3Question`),
      a: t(`${p}.faq3Answer`)
    },
    {
      q: t(`${p}.faq4Question`),
      a: t(`${p}.faq4Answer`)
    },
    {
      q: t(`${p}.faq5Question`),
      a: t(`${p}.faq5Answer`)
    },
    {
      q: t(`${p}.faq6Question`),
      a: t(`${p}.faq6Answer`)
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
        <link rel="canonical" href="https://pouch.eco/materials/recyclable-mono-pe" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t(`${p}.breadcrumbHome`)}</Link>
            <span>/</span>
            <Link to="/materials" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">{t(`${p}.breadcrumbMaterials`)}</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">{t(`${p}.breadcrumbActive`)}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10 text-left">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t(`${p}.materialBadge`)}
                </span>
                <span className="inline-block bg-black text-white border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono'] font-black text-sm">
                  {t(`${p}.curbsideBadge`)}
                </span>
              </div>

              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitle1`)}<br/>{t(`${p}.heroTitle2`)}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleHighlight`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t(`${p}.heroDescription`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {t(`${p}.heroCta1`)}
                </NeoButton>
                <NeoButton variant="secondary" href="#science">
                  {t(`${p}.heroCta2`)}
                </NeoButton>
              </div>
            </div>

            {/* Premium Material Infographic Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/4-infograhic/recyclable.webp" 
                alt={t(`${p}.heroImageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Symbols Spotlight */}
      <section id="science" className="py-24 bg-white border-b-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/cert/logo-recycle-number-4-and-5.png" 
                alt={t(`${p}.logoRecycleAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl bg-neutral-100 p-8"
              />
            </div>
            
            <div className="space-y-8">
              <NeoBadge color="magenta">{t(`${p}.recycleBadge`)}</NeoBadge>
              <h2 className="font-black text-4xl md:text-6xl uppercase leading-tight italic">{t(`${p}.recycleTitle`)}</h2>
              
              <div className="prose prose-lg font-['JetBrains_Mono'] text-neutral-600 leading-relaxed space-y-4">
                <p>
                  {t(`${p}.recycleParagraph1`)}
                </p>
                <p>
                  {t(`${p}.recycleParagraph2`)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Translations */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <NeoBadge color="lime">{t(`${p}.specsBadge`)}</NeoBadge>
            <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">{t(`${p}.specsTitle`)}</h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.specsBadgeRight`)}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specTranslations.map((s, idx) => (
            <div key={idx} className="bg-neutral-50 border-4 border-black p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-0.5 border border-black font-['JetBrains_Mono']">
                {s.label}
              </span>
              <h4 className="font-black text-xl uppercase mt-4 mb-2">{s.val}</h4>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stateful 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t(`${p}.faqBadge`)}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              {t(`${p}.faqTitle`)}
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              {t(`${p}.faqSubtitle`)}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-t-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{currentTranslations.painPointsBadge}</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              {currentTranslations.painPointsTitle}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {currentTranslations.points.map((point, idx) => (
                <div key={idx} className="bg-neutral-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 bg-[#D4FF00] border-2 border-black flex items-center justify-center font-black">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-black" />
                      {point.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mb-2">
                      <strong>Problem:</strong> {point.problem}
                    </p>
                    <p className="font-['JetBrains_Mono'] text-sm text-green-700 font-bold flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {point.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/recyclable-mono-pe-pain-points.jpg" 
                alt="Recyclable Mono-PE Pain Points" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="bg-black text-white">{t(`${p}.ctaBadge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {t(`${p}.ctaTitle`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            {t(`${p}.ctaDesc`)}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/sample" variant="dark">
              {t(`${p}.ctaBtn1`)}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {t(`${p}.ctaBtn2`)}
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>{t(`${p}.wholesaleTitle`)}</strong><br/>
            {t(`${p}.wholesaleDesc`)}{" "}
            <a 
              href="https://achievepack.com/materials/recyclable-mono-pe" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/materials/recyclable-mono-pe →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
