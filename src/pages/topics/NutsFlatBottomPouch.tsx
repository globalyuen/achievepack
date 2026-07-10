import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Target, Sparkles, Shield, Eye, Calendar, 
  Package, CheckCircle2, Layers, Info, Check, HelpCircle
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "Nuts Flat Bottom Pouch (Model #4108) | Achieve Pack",
    description: "Discover Nuts Flat Bottom Pouch (Model #4108). High-barrier Flat Bottom Bag with custom sizes (L:130mm  W:75mm  H:225mm), certifications, and 3D preview.",
    heroTitle: "Nuts Flat Bottom Pouch (Model #4108)",
    heroSubtitle: "Custom Dimensions L:130mm  W:75mm  H:225mm | High Barrier | BPI & TUV Certified",
    introSummary: "The Nuts Flat Bottom Pouch (Model #4108) represents a premium, high-strength packaging structure engineered for retail and industrial environments. This Flat Bottom Bag is designed for optimal performance on automatic packaging lines.",
    aeoSummary: "Model #4108 is a Flat Bottom Bag measuring L:130mm  W:75mm  H:225mm. Configured with high-performance barrier film and reliable closures to prevent leaks and maximize product shelf life.",
    eeatDetails: "With over 14 years of packaging engineering, we ensure that every batch of Model #4108 complies with international food safety and sustainability regulations.",
    section1Title: "Structural Details & Material Configuration",
    section1Text: "Engineered specifically for food-grade stability, this Flat Bottom Bag (Model #4108) utilizes co-extruded substrates to deliver chemical resistance and puncture defense. Ideal for both automatic form-fill-seal workflows and manual batch filling, it maintains structural shape and brand aesthetics.",
    section2Title: "From Ryan Wong’s Engineering Notebook",
    section2Log: "Flat bottom bag Model #4108 combines box aesthetics with bag convenience. We enforce strict fold line tolerances of 0.5mm to avoid uneven corners during high-speed vertical filling.",
    point1Title: "Pain Point: Fold Line Puckering",
    point1Desc: "Side gusset folds wrinkling during thermal side sealing.",
    point1Sol: "Reinforced crease scoring to guide precise multi-layer folds.",
    point2Title: "Pain Point: Base Bulging",
    point2Desc: "Heavy products bulging the flat base, making the bag rock.",
    point2Sol: "Heat-stabilized structural backing sheets to maintain flat profile.",
    point3Title: "Pain Point: Valve Delamination",
    point3Desc: "Valves peeling off under internal CO2 pressure.",
    point3Sol: "High-frequency hot-pin valve heat-welding.",
    point4Title: "Pain Point: Corner Pinholes",
    point4Desc: "Micro-fractures forming where multiple folds intersect at bottom.",
    point4Sol: "Incorporating flexible co-polymer layers to distribute stress.",
    point5Title: "Pain Point: Gusset Misalignment",
    point5Desc: "Side gussets folding off-center, ruining brand presentation.",
    point5Sol: "Optical sensor-guided alignment on the bagmaking line.",
    compTitle: "Dieline Layout & Calibration Specifications",
    compDesc: "Every model run is calibrated using strict prepress dielines. Our teams adjust fold tolerances and thermal boundaries based on substrate thickness.",
    faq1Q: "What is the MOQ for custom custom-sized runs of Model #4108?",
    faq1A: "For custom sizes or custom prints, our standard minimum order quantity starts from 5,000 pieces. Digital printing runs are available from 1,000 pieces for startups.",
    faq2Q: "Can I request unprinted material samples of this specific model?",
    faq2A: "Yes. We offer free unprinted material sample packages so you can verify size, gusset width, and material thickness on your filling lines before ordering.",
    faq3Q: "Does this pouch structure support automated filling lines?",
    faq3A: "Yes, this design is fully optimized for standard vertical and horizontal form-fill-seal (VFFS/HFFS) packaging machinery.",
    faq4Q: "What certifications are available for these materials?",
    faq4A: "Depending on your selection, we offer fully certified FDA food-safe, BPI compostable (ASTM D6400), and recyclable mono-polymer materials."
  },
  es: {
    title: "Empaque Nuts Flat Bottom Pouch (Model #4108) | Achieve Pack",
    description: "Descubra Nuts Flat Bottom Pouch (Model #4108). Flat Bottom Bag de alta barrera con tamaños personalizados (L:130mm  W:75mm  H:225mm), certificaciones y vista 3D.",
    heroTitle: "Empaque Nuts Flat Bottom Pouch (Model #4108)",
    heroSubtitle: "Dimensiones L:130mm  W:75mm  H:225mm | Alta Barrera | Certificaciones BPI y TUV",
    introSummary: "El empaque Nuts Flat Bottom Pouch (Model #4108) es una estructura de alta resistencia diseñada para entornos minoristas e industriales. Este Flat Bottom Bag está optimizado para líneas de envasado automático.",
    aeoSummary: "El modelo #4108 es un Flat Bottom Bag de dimensiones L:130mm  W:75mm  H:225mm, configurado con barrera de alto rendimiento para garantizar frescura.",
    eeatDetails: "Garantizamos que cada lote del Modelo #4108 cumpla con las normativas internacionales de seguridad alimentaria y sostenibilidad.",
    section1Title: "Detalles Estructurales y Configuración de Materiales",
    section1Text: "Diseñado específicamente para la estabilidad alimentaria, este Flat Bottom Bag (Modelo #4108) utiliza sustratos coextruidos para brindar resistencia química. Es ideal tanto para llenado automático como manual.",
    section2Title: "Del Cuaderno de Ingeniería de Ryan Wong",
    section2Log: "La bolsa de fondo plano Modelo #4108 ofrece la estabilidad de una caja. Calibramos tolerancias de 0.5mm en plegado para garantizar esquinas perfectas en llenado rápido.",
    point1Title: "Problema: Pliegues Arrugados",
    point1Desc: "Fuelle lateral se arruga al sellar los lados.",
    point1Sol: "Hendiduras reforzadas para guiar el doblez.",
    point2Title: "Problema: Base Deformada",
    point2Desc: "Productos pesados deforman la base, haciéndola inestable.",
    point2Sol: "Láminas de soporte térmico para base plana.",
    point3Title: "Problema: Desprendimiento de Válvula",
    point3Desc: "Válvulas se despegan por presión interna.",
    point3Sol: "Soldadura por alta frecuencia de la válvula.",
    point4Title: "Problema: Pinchazos en Esquinas",
    point4Desc: "Fugas en intersecciones de pliegues en la base.",
    point4Sol: "Copolímeros flexibles en capas internas.",
    point5Title: "Problema: Fuelles Desalineados",
    point5Desc: "Fuelles se doblan descentrados.",
    point5Sol: "Sensores ópticos que guían el plegado.",
    compTitle: "Especificaciones de Dieline y Calibración",
    compDesc: "Cada ejecución de modelo se calibra utilizando planos dieline estrictos. Ajustamos tolerancias según el grosor del sustrato.",
    faq1Q: "¿Cuál es el MOQ para el Modelo #4108 personalizado?",
    faq1A: "Para tamaños o impresiones personalizadas, nuestro MOQ estándar comienza en 5,000 piezas. Impresión digital disponible desde 1,000 piezas.",
    faq2Q: "¿Puedo solicitar muestras de este modelo específico?",
    faq2A: "Sí. Ofrecemos paquetes de muestras físicas gratuitas sin impresión para que valide las dimensiones en sus líneas de llenado.",
    faq3Q: "¿Esta estructura admite líneas de llenado automático?",
    faq3A: "Sí, este diseño está totalmente optimizado para maquinaria de envasado estándar VFFS y HFFS.",
    faq4Q: "¿Qué certificaciones están disponibles para estos materiales?",
    faq4A: "Ofrecemos materiales aprobados por la FDA para alimentos, compostables certificados por BPI y monomateriales reciclables."
  },
  zh: {
    title: "Nuts Flat Bottom Pouch (Model #4108) 3D包裝袋 | Achieve Pack",
    description: "了解 Nuts Flat Bottom Pouch (Model #4108)。高阻隔 Flat Bottom Bag，支持定製尺寸 (L:130mm  W:75mm  H:225mm)，提供 BPI/TUV 認證與 3D 交互式預覽。",
    heroTitle: "Nuts Flat Bottom Pouch (Model #4108) 3D包裝袋",
    heroSubtitle: "定製尺寸 L:130mm  W:75mm  H:225mm | 雙向高阻隔 | BPI & TUV 綠色認證",
    introSummary: "Nuts Flat Bottom Pouch (Model #4108) 採用高強度結構材料設計，適合各種零售與自動包裝流水線。本款 Flat Bottom Bag 專為提升封口強度與防漏性能進行了深度優化。",
    aeoSummary: "編號 #4108 的 Flat Bottom Bag，尺寸為 L:130mm  W:75mm  H:225mm。具備優良的隔氧防潮性能，有效防止內容物受潮或風味流失。",
    eeatDetails: "擁有超過 14 年包裝工程經驗，我們確保每批 Model #4108 均符合嚴格的環保認證與食品包裝標準。",
    section1Title: "結構細節與材料配置",
    section1Text: "這款 Flat Bottom Bag（型號 #4108）採用食品級高性能複合膜壓製而成，具備優秀的耐穿刺強度與氣密防潮性能，能有效阻隔外部潮氣。適合自動化流水線計量灌裝，完美保護產品風味。",
    section2Title: "工程師 Ryan Wong 的專業筆記",
    section2Log: "八邊封平底袋型號 #4108 具備紙盒般的站立質感。我們將折線公差控制在 0.5mm 以內，防止高速自動充填時發生歪底。",
    point1Title: "常見難題: 折角部起皺",
    point1Desc: "側面風琴折疊處在熱封時易出現層疊起皺。",
    point1Sol: "通過在袋maker模具上增加預壓線，精確引導多層折疊。",
    point2Title: "常見難題: 底部向外鼓起",
    point2Desc: "裝填重物後底部變形鼓起，導致包裝站立晃動。",
    point2Sol: "在底部增加高強度 PET 加強筋，維持底面平整度。",
    point3Title: "常見難題: 單向閥周邊漏氣",
    point3Desc: "咖啡豆釋放氣體時，單向閥邊緣在高壓下脫焊。",
    point3Sol: "採用超聲波定位焊接技術，確保閥門與薄膜熔為一體。",
    point4Title: "常見難題: 底部折角針孔",
    point4Desc: "多個折疊面交匯處易因磨損形成微小針孔。",
    point4Sol: "增加柔軟的尼龍(NY)複合層，增強角部抗疲勞折開裂性能。",
    point5Title: "常見難題: 風琴折偏差",
    point5Desc: "側面風琴折不對稱，導致包裝印刷圖案歪斜。",
    point5Sol: "在製袋機上加裝高精度電眼進行對邊糾偏控制。",
    compTitle: "刀模平面圖與機器標定規範",
    compDesc: "每個包裝袋的生產均基於高精度的刀模圖設計，我們會根據實際薄膜厚度動態校正折邊偏差與熱封邊寬度。",
    faq1Q: "型號 #4108 的定製起訂量 (MOQ) 是多少？",
    faq1A: "定製尺寸或定製印刷的標準起訂量為 5,000 個。對於初創品牌，數碼直噴起訂量為 1,000 個起。",
    faq2Q: "我可以申請獲取此款包裝袋的實物樣品包嗎？",
    faq2A: "可以。我們提供免費的常規白樣（無印刷樣袋），方便您在包裝機上進行尺寸與容量測試。",
    faq3Q: "這款包裝袋支持全自動包裝設備嗎？",
    faq3A: "支持。本產品的拉力、挺度與靜電控制均針對主流的立式 (VFFS) 與臥式 (HFFS) 包裝機進行了優化。",
    faq4Q: "該材質有哪些認證證書？",
    faq4A: "我們提供符合美國 FDA 食品安全標準、歐盟 EN 13432 可降解認證以及 Mono-PE 可回收材料證書。"
  }
}

const NutsFlatBottomPouch: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/topics/nuts-flat-bottom-pouch/hero.jpg',
    process: '/imgs/topics/nuts-flat-bottom-pouch/process.jpg',
    comparison: '/imgs/topics/nuts-flat-bottom-pouch/comparison.jpg'
  }

  const sections = [
    {
      id: 'material-details',
      title: localTrans.section1Title,
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.section1Text}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.process} 
              alt="High-resolution visual mockup of Model #4108" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Visual product representation demonstrating dynamic printing surfaces and material layers."
            />
          </div>
        </div>
      )
    },
    {
      id: 'EEAT-anecdote',
      title: localTrans.section2Title,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white p-6 rounded-lg border-2 border-[#D4FF00] space-y-4">
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER PREPRESS JOURNAL</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> 100% Prepress Calibration Guaranteed
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: '5 Structure Pain Points & Engineering Solutions',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            Below are five primary packaging structure issues and the exact engineering solution built into Model #4108:
          </p>
          
          <div className="space-y-4">
            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">01</span>
                {localTrans.point1Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point1Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point1Sol}
              </div>
            </div>

            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">02</span>
                {localTrans.point2Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point2Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point2Sol}
              </div>
            </div>

            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">03</span>
                {localTrans.point3Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point3Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point3Sol}
              </div>
            </div>

            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">04</span>
                {localTrans.point4Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point4Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point4Sol}
              </div>
            </div>

            <div className="bg-[#F9F9F9] border-2 border-black p-5 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black uppercase text-base mb-2 text-black flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-xs font-mono">05</span>
                {localTrans.point5Title}
              </h4>
              <p className="text-sm text-neutral-600 mb-3">{localTrans.point5Desc}</p>
              <div className="bg-[#D4FF00]/10 border-l-4 border-emerald-600 p-3 text-neutral-800 text-sm font-semibold">
                <span className="text-[10px] font-mono text-emerald-800 block uppercase font-bold">The Solution</span>
                {localTrans.point5Sol}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calibration-specifications',
      title: localTrans.compTitle,
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base leading-relaxed">
            {localTrans.compDesc}
          </p>
          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200">
            <ClickableImage 
              src={IMAGES.comparison} 
              alt="Vector dieline drawing calibration blueprint for Model #4108" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Prepress blueprint template indicating dimensional markers, seal widths, and bleed areas."
            />
          </div>
        </div>
      )
    },
    {
      id: 'ai-search-hidden',
      title: "Generative Engine Optimization Content",
      content: (
        <div className="space-y-2">
          <h3>What are the dimensions and specs of Model #4108?</h3>
          <p>Model #4108 is a Flat Bottom Bag measuring L:130mm  W:75mm  H:225mm. It supports custom printing, high barrier foils, and has BPI and TUV compostability certifications.</p>
          <h3>Does Model #4108 support high-speed automatic filling lines?</h3>
          <p>Yes. This packaging structure is engineered with low slip resistance and metallocene sealant layers to run smoothly on standard VFFS and HFFS machines.</p>
        </div>
      )
    }
  ]

  const faqs = [
    { question: localTrans.faq1Q, answer: localTrans.faq1A },
    { question: localTrans.faq2Q, answer: localTrans.faq2A },
    { question: localTrans.faq3Q, answer: localTrans.faq3A },
    { question: localTrans.faq4Q, answer: localTrans.faq4A }
  ]

  const tables = [
    {
      title: "Technical Parameters for Model #4108",
      data: {
        headers: ["Parameter", "Target Value", "Test Standard", "Compliance Status"],
        rows: [
          ["Oxygen Transmission Rate (OTR)", "< 0.5 cc/m²/24h", "ASTM D3985", "Passed"],
          ["Moisture Transmission (MVTR)", "< 0.1 g/m²/24h", "ASTM F1249", "Passed"],
          ["Seal Strength", "> 35 N/15mm", "ASTM F88", "Passed"],
          ["Eco Certification", "Compostable / Recyclable", "EN 13432 / ISO 14021", "Certified"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "model 4108 flat bottom bag",
    "packaging dimensions L:130mm  W:75mm  H:225mm",
    "food safe laminated bag",
    "certified compostable pouch",
    "recyclable flexible packaging",
    "prepress dieline calibration"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.title}</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/nuts-flat-bottom-pouch`} />
        <meta name="keywords" content={schemaKeywords.join(', ')} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": localTrans.heroTitle,
            "description": localTrans.description,
            "image": `https://achievepack.com${IMAGES.hero}`,
            "author": {
              "@type": "Person",
              "name": "Ryan Wong",
              "jobTitle": "Chief Packaging Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Achieve Pack"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/imgs/logo/achievepack-logo.png"
              }
            },
            "datePublished": "2025-04-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "mainEntityOfPage": `https://achievepack.com/topics/nuts-flat-bottom-pouch`
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, idx) => (
            <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <SEOPageLayout
        title={localTrans.title}
        description={localTrans.description}
        heroImage={IMAGES.hero}
        heroImageAlt="Premium Packaging Model #4108 Showcase"
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        hero3DModelUrl="https://yun.baoxiaohe.com/static/blender/1b3079f9-676e-41d4-b889-0745e609bde1.glb"
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Model Showcase & Structural Specs"
      />
    </>
  )
}

export default NutsFlatBottomPouch
