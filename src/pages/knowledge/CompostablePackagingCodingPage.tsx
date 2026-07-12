import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Leaf, Award, Compass, ArrowRight, Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'
import { getDomain } from '../../utils/domain'

const translations: Record<string, any> = {
  en: {
    title: "Eco Pouch Coding: Date Printing on Compostable Materials | Achieve Pack",
    metaDesc: "Discover the engineering challenges of printing expiration dates on bioplastics like PLA/PHA and Kraft paper without breaking barrier properties or eco-certification.",
    keywords: "compostable packaging printing, bioplastic inkjet coding, PLA date coding, eco friendly packaging printer",
    heroTitle: "Eco Pouch Coding: Date Printing on Compostable Films",
    heroSubtitle: "How to print smudge-proof dates on PLA, PHA, and Kraft paper pouches without compromising compostability.",
    quickAnswer: "Quick Answer: Printing on compostable bioplastics (PLA, PBAT, PHA) or Kraft paper requires careful ink formulation. Water-based inks smudge on bioplastic, while standard harsh chemical inks might compromise compostability certifications (BPI/EN 13432). The solution is using high-resolution Thermal Inkjet (TIJ) systems equipped with eco-compliant fast-dry solvent inks that offer strong adhesion without damaging the underlying substrate.",
    ryanTitle: "Memo from Ryan Wong, Co-Founder & Packaging Lead",
    ryanLog: "Bioplastics have low surface tension, meaning ink struggles to bind. Standard inks take too long to dry and smudge during packaging. Our fast-dry, eco-compliant solvent inks cure in 0.3 seconds on PLA and PCR films, ensuring your lot codes are permanent and compliant with organic standards.",
    sec1Title: "1. Understanding Biopolymer Surfaces",
    sec1Text: "PLA (Polylactic Acid) and PBAT films are highly sensitive to heat and chemical solvents. Traditional CIJ printing solvents can erode thin bioplastics. TIJ (Thermal Inkjet) printing provides a non-contact micro-spray that preserves the barrier properties while delivering crisp, readable dates.",
    sec2Title: "2. Preserving Compostability Certifications",
    sec2Text: "Adding heavy petroleum-based stickers or high-volatile solvent inks can invalidate compostability certificates. Our recommended ink solutions comply with EN 13432 limits for heavy metals and ecotoxicity, ensuring your entire package remains fully compostable.",
    sec3Title: "3. Printing on Kraft Paper vs. Bioplastics",
    sec3Text: "Kraft paper is porous and absorbs ink easily, but it requires highly pigmented inks to prevent bleeding. Bioplastics require fast-evaporating eco-solvents. Setting the right DPI and voltage on your TIJ printer is key to optimal results on both surfaces.",
    upgradeCta: "Upgrade Your Eco Coding setup",
    upgradeDesc: "Explore our eco-friendly unprinted pouches, compostable labels, and smart coding systems.",
    btnText: "Consult an Engineer"
  },
  zh: {
    title: "環保降解袋打碼指南：如何在可堆肥材質上噴印日期 | Achieve Pack",
    metaDesc: "探討如何在 PLA、PBAT、PHA 生物塑料及牛皮紙袋上噴印批次與保質期。解析附著力問題，保證噴碼清晰，同時不損壞材質的防潮屏障與環保認證。",
    keywords: "可降解包裝印刷, 生物塑料打碼, PLA噴印, 環保袋打碼機, 可堆肥包裝打碼",
    heroTitle: "環保降解袋噴印指南：可堆肥薄膜打碼技術",
    heroSubtitle: "如何在 PLA、PHA 生物塑料與牛皮紙袋表面實現耐磨噴印，同時保留包裝的可降解性。",
    quickAnswer: "快速解答：在生物可降解塑料（PLA、PBAT、PHA）及牛皮紙袋上進行噴印，需要精準控制墨水配方。一般水性墨水在薄膜上難以固化，而傳統強溶劑油墨可能破壞薄膜並影響可堆肥認證（BPI/EN 13432）。最佳方案是採用 TIJ 熱噴墨系統，配合環保快乾溶劑墨水，在不破壞生物降解特性的前提下，實現 0.3 秒極速固化與高對比度噴印。",
    ryanTitle: "來自聯合創始人兼首席工程師 Ryan Wong 的環保噴碼備忘錄",
    ryanLog: "生物塑料的表面能通常較低，容易造成油墨附著力不足而糊字。如果墨水乾燥過慢，在裝箱物流中字跡會完全磨損。我們的智能噴碼機配備專用快乾環保墨盒，專為 PLA 及 PCR 薄膜優化，能確保日期不脫落，並通過環保毒性與重金屬檢測。",
    sec1Title: "1. 生物聚合物薄膜的表面挑戰",
    sec1Text: "PLA 和 PBAT 薄膜對熱與化學溶劑十分敏感。強酸或強鹼性溶劑會侵蝕薄膜。TIJ 熱噴墨打碼採用非接觸微噴技術，不對薄膜施加物理壓力和高溫，保護包裝固有的屏障（阻氧與阻濕）性能。",
    sec2Title: "2. 維護可堆肥認證合規性",
    sec2Text: "在可堆肥袋上使用非降解的不乾膠貼紙或含重金屬的工業油墨，會導致包裝在進入堆肥設施時被判定為污染物。選擇符合 EN 13432 標準的環保溶劑墨水，方能保障包裝的「綠色認證」依然有效。",
    sec3Title: "3. 牛皮紙與生物降解膜的打碼差異",
    sec3Text: "牛皮紙為多孔性吸收材質，墨水易滲透，但需控制墨滴大小以防暈染；而生物薄膜則需要極速揮發的環保溶劑。根據材質在智能噴碼機中調節適當的電壓與噴印解析度 (DPI)，是獲得完美打碼效果的關鍵。",
    upgradeCta: "優化您的綠色包裝產線",
    upgradeDesc: "選購 Achieve Pack  blank 牛皮紙降解袋、可降解貼紙及智能噴碼機組合，打造無塑包裝。",
    btnText: "諮詢包裝工程師"
  },
  fr: {
    title: "Codage d'emballage éco-responsable : Impression sur biosourcés | Achieve Pack",
    metaDesc: "Découvrez comment imprimer les dates limite de consommation sur PLA/PHA et papier Kraft sans altérer la biodégradabilité ni les propriétés barrière du sachet.",
    keywords: "impression emballage compostable, codage bioplastique, codage PLA, imprimante emballage écologique",
    heroTitle: "Codage d'emballages éco : Impression sur films compostables",
    heroSubtitle: "Comment imprimer des dates indélébiles sur PLA, PHA et papier Kraft sans altérer leur compostabilité.",
    quickAnswer: "Réponse rapide: L'impression sur bioplastiques (PLA, PBAT, PHA) ou papier Kraft requiert des encres adaptées. Les systèmes jet d'encre thermique (TIJ) équipés d'encres solvant écologiques à séchage rapide offrent une adhérence maximale sans endommager le film ni compromettre la certification EN 13432.",
    ryanTitle: "Note de Ryan Wong, Cofondateur & Expert Emballage",
    ryanLog: "Les bioplastiques ont une faible tension de surface, ce qui gêne l'adhérence de l'encre. Nos cartouches solvant écologiques sèchent en 0,3 s sur PLA et films PCR, évitant tout maculage lors de la mise en boîte.",
    sec1Title: "1. Comprendre la surface des biopolymères",
    sec1Text: "Les films PLA (Acide Polylactique) et PBAT sont sensibles à la chaleur. Le codage jet d'encre TIJ sans contact évite d'altérer les propriétés barrière de l'emballage tout en assurant un marquage ultra-précis.",
    sec2Title: "2. Préserver les certifications de compostabilité",
    sec2Text: "L'usage d'encres toxiques peut invalider les certifications de compostabilité (comme la norme EN 13432). Nos formulations d'encre sont testées pour garantir l'absence de métaux lourds.",
    sec3Title: "3. Impression sur papier Kraft vs Bioplastique",
    sec3Text: "Le papier Kraft absorbe l'encre rapidement mais nécessite des pigments denses pour éviter les bavures. Le bioplastique requiert des solvants à évaporation rapide pour sécher instantanément.",
    upgradeCta: "Optimisez votre codage écologique",
    upgradeDesc: "Découvrez notre gamme de sachets kraft vierges compostables, d'étiquettes PLA et d'imprimantes intelligentes.",
    btnText: "Consulter un Ingénieur"
  },
  es: {
    title: "Codificación ecológica: Impresión en materiales compostables | Achieve Pack",
    metaDesc: "Aprenda a imprimir en bioplásticos como PLA/PHA y papel Kraft sin perder las propiedades de barrera del empaque ni las certificaciones ecológicas.",
    keywords: "impresión empaque compostable, codificador bioplástico, fecha caducidad PLA, impresora empaques ecológicos",
    heroTitle: "Codificación ecológica: Impresión en películas compostables",
    heroSubtitle: "Cómo imprimir fechas de caducidad en PLA, PHA y papel Kraft de forma limpia y sostenible.",
    quickAnswer: "Respuesta rápida: La impresión sobre bioplásticos (PLA, PBAT, PHA) y papel Kraft requiere formulaciones de tinta específicas. El uso de codificadoras TIJ con tintas solventes ecológicas garantiza el secado instantáneo y la adherencia en superficies complejas sin dañar el empaque ni invalidar la norma EN 13432.",
    ryanTitle: "Nota de Ryan Wong, Cofundador y Especialista en Empaque",
    ryanLog: "Los bioplásticos tienen baja tensión superficial. Nuestras tintas solventes de secado rápido curan en 0,3 segundos en PLA y películas PCR, asegurando que las fechas no se borren en el trayecto de envío.",
    sec1Title: "1. Desafíos de superficie en biopolímeros",
    sec1Text: "El PLA y el PBAT son sensibles a solventes fuertes y al calor. Las impresoras TIJ aplican micropulverización sin contacto directo, protegiendo las propiedades de barrera (humedad y oxígeno) del empaque.",
    sec2Title: "2. Protección de certificaciones de compostabilidad",
    sec2Text: "El uso de pegatinas plásticas convencionales o tintas con metales pesados anula las propiedades compostables. Nuestras tintas recomendadas cumplen con los criterios de ecotoxicidad de la norma EN 13432.",
    sec3Title: "3. Impresión sobre papel Kraft vs. Bioplásticos",
    sec3Text: "El papel Kraft absorbe la tinta de forma natural, requiriendo alta densidad de pigmento. Los bioplásticos exigen solventes volátiles especiales. Configurar correctamente la resolución (DPI) y el voltaje de la impresora TIJ es clave.",
    upgradeCta: "Mejore su empaque ecológico",
    upgradeDesc: "Explore nuestras bolsas kraft compostables sin impresión, etiquetas PLA biodegradables y sistemas de codificación inteligentes.",
    btnText: "Consultar con un Ingeniero"
  }
}

export default function CompostablePackagingCodingPage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const t = translations[langKey]

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: t.keywords,
    canonicalUrl: `https://achievepack.com/knowledge/compostable-packaging-inkjet-coding`
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: "/imgs/knowledge/bottle-printing-hero.jpg",
    categoryTag: "SUSTAINABILITY",
    categoryColor: "#10b981",
    readTime: "8 min read"
  }

  const sectionsForAchieve = [
    {
      id: "engineers-log",
      title: t.ryanTitle,
      icon: <Leaf className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 text-left">
          <p className="text-emerald-900 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '環保包裝打碼工程筆記' : 'Eco Engineering Memo'}
          </p>
          <p className="text-neutral-700 text-xs leading-relaxed italic">
            "{t.ryanLog}"
          </p>
        </div>
      )
    },
    {
      id: "biopolymer-surfaces",
      title: t.sec1Title,
      icon: <Compass className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec1Text}
          </p>
        </div>
      )
    },
    {
      id: "compostability-certs",
      title: t.sec2Title,
      icon: <Award className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec2Text}
          </p>
        </div>
      )
    },
    {
      id: "kraft-vs-bioplastic",
      title: t.sec3Title,
      icon: <Leaf className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec3Text}
          </p>
        </div>
      )
    },
    {
      id: "related-products-section",
      title: langKey === 'zh' ? '推薦的環保包裝及貼標設備' : 'Recommended Eco Packaging & Labeling',
      icon: <Box className="h-6 w-6 text-neutral-800" />,
      content: (
        <RelatedProductsShowcase productIds={['smart-inkjet-coding-machine', 'eco-custom-label', 'unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch']} />
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        {...seoProps}
        {...heroProps}
        sections={sectionsForAchieve}
        ctaTitle={t.upgradeCta}
        ctaDescription={t.upgradeDesc}
      />
    )
  }

  return (
    <SEOPageLayout
      title={seoProps.title}
      description={seoProps.metaDescription}
      keywords={seoProps.keywords}
      canonicalUrl={seoProps.canonicalUrl}
      heroTitle={heroProps.heroTitle}
      heroSubtitle={heroProps.heroSubtitle}
      heroImage="/imgs/knowledge/bottle-printing-hero.jpg"
      introSummary={t.quickAnswer}
      sections={sectionsForAchieve}
      schemaType="Article"
      ctaTitle={t.upgradeCta}
      ctaDescription={t.upgradeDesc}
      ctaButtonText={t.btnText}
      heroStyle="banner"
    />
  )
}
