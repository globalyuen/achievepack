import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Leaf, Award, Compass, ArrowRight, Box, ShieldCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'

const translations: Record<string, any> = {
  en: {
    title: "Eco Pouch Coding: Date Printing on Compostable Materials | Achieve Pack",
    metaDesc: "Discover the engineering challenges of printing expiration dates on bioplastics like PLA/PHA and Kraft paper without breaking barrier properties or eco-certification.",
    keywords: "compostable packaging printing, bioplastic inkjet coding, PLA date coding, eco friendly packaging printer",
    heroTitle: "Eco Pouch Coding: Date Printing on Compostable Films",
    heroSubtitle: "How to print smudge-proof dates on PLA, PHA, and Kraft paper pouches without compromising compostability.",
    quickAnswer: "Quick Answer: Printing on compostable bioplastics (PLA, PBAT, PHA) or Kraft paper requires careful ink formulation. Water-based inks smudge on bioplastic, while standard harsh chemical inks might compromise compostability certifications (BPI/EN 13432). The solution is using high-resolution Thermal Inkjet (TIJ) systems equipped with eco-compliant fast-dry solvent inks that offer strong adhesion without damaging the underlying substrate.",
    ryanTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanLog: "Bioplastics have low surface tension, meaning ink struggles to bind. Standard inks take too long to dry and smudge during packaging. Our fast-dry, eco-compliant solvent inks cure in 0.3 seconds on PLA and PCR films, ensuring your lot codes are permanent and compliant with organic standards. We had a client whose backyard compost pile rejected their bags simply because the ink used contained high levels of cobalt. That's why we formulated our bio-compliant ink to be 100% metal-free, complying with EN 13432 limits.",
    sec1Title: "1. Understanding Biopolymer Surfaces",
    sec1Text: "PLA (Polylactic Acid) and PBAT films are highly sensitive to heat and chemical solvents. Traditional CIJ printing solvents can erode thin bioplastics. TIJ (Thermal Inkjet) printing provides a non-contact micro-spray that preserves the barrier properties while delivering crisp, readable dates.",
    sec2Title: "2. Preserving Compostability Certifications",
    sec2Text: "Adding heavy petroleum-based stickers or high-volatile solvent inks can invalidate compostability certificates. Our recommended ink solutions comply with EN 13432 limits for heavy metals and ecotoxicity, ensuring your entire package remains fully compostable.",
    sec3Title: "3. Printing on Kraft Paper vs. Bioplastics",
    sec3Text: "Kraft paper is porous and absorbs ink easily, but it requires highly pigmented inks to prevent bleeding. Bioplastics require fast-evaporating eco-solvents. Setting the right DPI and voltage on your TIJ printer is key to optimal results on both surfaces.",
    upgradeCta: "Upgrade Your Eco Coding setup",
    upgradeDesc: "Explore our eco-friendly unprinted pouches, compostable labels, and smart coding systems.",
    btnText: "Consult an Engineer",
    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Ink Smudging on Bioplastics",
    pp1Desc: "Low surface energy of PLA/PHA films causes ink to run or smudge during high-speed runs.",
    pp1Sol: "Solution: Integrate Thermal Inkjet (TIJ) systems utilizing fast-evaporating solvent inks (drying time < 0.3s) that cure instantly without external heat.",
    pp2Title: "02 / Thin Film Burn-Through",
    pp2Desc: "High-heat laser coding or thermal transfer ribbons can melt or distort compostable film membranes.",
    pp2Sol: "Solution: Employ non-contact TIJ printing or calibrated cold ultraviolet (UV) laser codes, ensuring minimal thermal transfer to 50-micron biopolymer barriers.",
    pp3Title: "03 / Certification Invalidation",
    pp3Desc: "Industrial black inks with heavy metals contaminate organic compost streams, violating EN 13432/ASTM D6400.",
    pp3Sol: "Solution: Utilize volatile solvent inks compliant with heavy metal restriction limits and ecotoxicity standards to keep the entire package compostable.",
    pp4Title: "04 / Bleeding on Kraft Paper",
    pp4Desc: "Porous natural Kraft fibers draw standard liquid inks, causing barcode blurriness.",
    pp4Sol: "Solution: Adjust printer settings to high DPI (300-600 DPI) and use high-viscosity, pigmented eco-solvents that bind to surface fibers without deep bleeding.",
    pp5Title: "05 / Poor Adhesion Under Condensation",
    pp5Desc: "Cold storage or moisture exposure causes printed lot codes to dissolve or peel.",
    pp5Sol: "Solution: Apply hydrophobically-modified solvent inks that chemically bond to both organic paper matrices and synthetic PLA surfaces, offering moisture resistance."
  },
  zh: {
    title: "環保降解袋打碼指南：如何在可堆肥材質上噴印日期 | Achieve Pack",
    metaDesc: "探討如何在 PLA、PBAT、PHA 生物塑料及牛皮紙袋上噴印批次與保質期。解析附著力問題，保證噴碼清晰，同時不損壞材質的防潮屏障與環保認證。",
    keywords: "可降解包裝印刷, 生物塑料打碼, PLA噴印, 環保袋打碼機, 可堆肥包裝打碼",
    heroTitle: "環保降解袋噴印指南：可堆肥薄膜打碼技術",
    heroSubtitle: "如何在 PLA、PHA 生物塑料與牛皮紙袋表面實現耐磨噴印，同時保留包裝的可降解性。",
    quickAnswer: "快速解答：在生物可降解塑料（PLA、PBAT、PHA）及牛皮紙袋上進行噴印，需要精準控制墨水配方。一般水性墨水在薄膜上難以固化，而傳統強溶劑油墨可能破壞薄膜並影響可堆肥認證（BPI/EN 13432）。最佳方案是採用 TIJ 熱噴墨系統，配合環保快乾溶劑墨水，在不破壞生物降解特性的前提下，實現 0.3 秒極速固化與高對比度噴印。",
    ryanTitle: "🔬 來自 Ryan Wong 的包裝工程筆記",
    ryanLog: "生物塑料的表面能通常較低，容易造成油墨附著力不足而糊字。如果墨水乾燥過慢，在裝箱物流中字跡會完全磨損。我們的智能噴碼機配備專用快乾環保墨盒，專為 PLA 及 PCR 薄膜優化，能確保日期不脫落，並通過環保毒性與重金屬檢測。我們曾有一位客戶的家庭堆肥箱拒收了他們的袋子，僅僅是因為所用的墨水含有超標的鈷。這就是為什麼我們將生物相容性墨水配方定為 100% 無金屬，以完全符合 EN 13432 限量標準。",
    sec1Title: "1. 生物聚合物薄膜的表面挑戰",
    sec1Text: "PLA 和 PBAT 薄膜對熱與化學溶劑十分敏感。強酸或強鹼性溶劑會侵蝕薄膜。TIJ 熱噴墨打碼採用非接觸微噴技術，不對薄膜施加物理壓力和高溫，保護包裝固有的屏障（阻氧與阻濕）性能。",
    sec2Title: "2. 維護可堆肥認證合規性",
    sec2Text: "在可堆肥袋上使用非降解的不乾膠貼紙或含重金屬的工業油墨，會導致包裝在進入堆肥設施時被判定為污染物。選擇符合 EN 13432 標準的環保溶劑墨水，方能保障包裝的「綠色認證」依然有效。",
    sec3Title: "3. 牛皮紙與生物降解膜的打碼差異",
    sec3Text: "牛皮紙為多孔性吸收材質，墨水易滲透，但需控制墨滴大小以防暈染；而生物薄膜則需要極速揮發的環保溶劑。根據材質在智能噴碼機中調節適當的電壓與噴印解析度 (DPI)，是獲得完美打碼效果的關鍵。",
    upgradeCta: "優化您的綠色包裝產線",
    upgradeDesc: "選購 Achieve Pack  blank 牛皮紙降解袋、可降解貼紙及智能噴碼機組合，打造無塑包裝。",
    btnText: "諮詢包裝工程師",
    painPointsTitle: "5 大包裝打碼痛點與工程解決方案",
    pp1Title: "01 / 生物塑料上的墨水暈染",
    pp1Desc: "PLA/PHA 薄膜的低表面能會導致墨水在高速運轉時流動或暈染。",
    pp1Sol: "解決方案：採用 TIJ 熱噴墨系統，配合極速揮發溶劑墨水（乾燥時間 < 0.3秒），無需外接烘乾設備即可瞬間固化。",
    pp2Title: "02 / 薄膜燒穿或變形",
    pp2Desc: "高溫激光打碼或熱轉印碳帶可能會熔化或損壞可堆肥薄膜屏障。",
    pp2Sol: "解決方案：使用非接觸式 TIJ 噴印或經精準校準的冷紫外 (UV) 激光打碼，確保對 50 微米生物聚合物阻隔層的熱傳遞降至最低。",
    pp3Title: "03 / 環保認證失效",
    pp3Desc: "含有重金屬的工業黑色油墨會污染有機堆肥流，違反 EN 13432/ASTM D6400 標準。",
    pp3Sol: "解決方案：使用符合重金屬限量及生態毒性測試標準的環保溶劑墨水，確保整體包裝可完全堆肥。",
    pp4Title: "04 / 牛皮紙表面毛邊與暈染",
    pp4Desc: "多孔的天然牛皮紙纖維會吸附一般液體墨水，導致條形碼或批號模糊不清。",
    pp4Sol: "解決方案：將打印機設置調整為高解析度（300-600 DPI），並使用高粘度顏料環保溶劑，固化於表面纖維，防止深層滲透。",
    pp5Title: "05 / 冷凝潮濕環境下字跡脫落",
    pp5Desc: "低溫冷藏或暴露於潮濕空氣中會導致打印的批號溶解或剝落。",
    pp5Sol: "解決方案：採用疏水性改性溶劑墨水，在有機紙張基質與合成 PLA 薄膜表面形成化學鍵合，提供極佳的防潮耐磨性。"
  },
  fr: {
    title: "Codage d'emballage éco-responsable : Impression sur biosourcés | Achieve Pack",
    metaDesc: "Découvrez comment imprimer les dates limite de consommation sur PLA/PHA et papier Kraft sans altérer la biodégradabilité ni les propriétés barrière du sachet.",
    keywords: "impression emballage compostable, codage bioplastique, codage PLA, imprimante emballage écologique",
    heroTitle: "Codage d'emballages éco : Impression sur films compostables",
    heroSubtitle: "Comment imprimer des dates indélébiles sur PLA, PHA et papier Kraft sans altérer leur compostabilité.",
    quickAnswer: "Réponse rapide: L'impression sur bioplastiques (PLA, PBAT, PHA) ou papier Kraft requiert des encres adaptées. Les systèmes jet d'encre thermique (TIJ) équipés d'encres solvant écologiques à séchage rapide offrent une adhérence maximale sans endommager le film ni compromettre la certification EN 13432.",
    ryanTitle: "🔬 De l'Engineering Notebook de Ryan Wong",
    ryanLog: "Les bioplastiques ont une faible tension de surface, ce qui gêne l'adhérence de l'encre. Nos cartouches solvant écologiques sèchent en 0,3 s sur PLA et films PCR, évitant tout maculage lors de la mise en boîte. Récemment, un composteur local a refusé les sachets compostables d'un client simplement parce que l'encre noire utilisée contenait du cobalt. C'est pourquoi nous formulons nos encres éco-compatibles à 100% sans métaux lourds, en parfaite conformité avec la norme EN 13432.",
    sec1Title: "1. Comprendre la surface des biopolymères",
    sec1Text: "Les films PLA (Acide Polylactique) et PBAT sont sensibles à la chaleur. Le codage jet d'encre TIJ sans contact évite d'altérer les propriétés barrière de l'emballage tout en assurant un marquage ultra-précis.",
    sec2Title: "2. Préserver les certifications de compostabilité",
    sec2Text: "L'usage d'encres toxiques peut invalider les certifications de compostabilité (comme la norme EN 13432). Nos formulations d'encre sont testées pour garantir l'absence de métaux lourds.",
    sec3Title: "3. Impression sur papier Kraft vs Bioplastique",
    sec3Text: "Le papier Kraft absorbe l'encre rapidement mais nécessite des pigments denses pour éviter les bavures. Le bioplastique requiert des solvants à évaporation rapide pour sécher instantanément.",
    upgradeCta: "Optimisez votre codage écologique",
    upgradeDesc: "Découvrez notre gamme de sachets kraft vierges compostables, d'étiquettes PLA et d'imprimantes intelligentes.",
    btnText: "Consulter un Ingénieur",
    painPointsTitle: "5 Problèmes d'Emballage & Solutions d'Ingénierie",
    pp1Title: "01 / Maculage d'Encre sur Bioplastiques",
    pp1Desc: "La faible tension superficielle des films PLA/PHA provoque des bavures d'encre lors de cadences élevées.",
    pp1Sol: "Solution : Intégrer des systèmes jet d'encre thermique (TIJ) avec des encres solvant à séchage ultra-rapide (< 0.3s) qui durcissent instantanément sans chaleur.",
    pp2Title: "02 / Altération Thermique du Film Fin",
    pp2Desc: "Le codage laser à haute température ou les rubans de transfert thermique peuvent fondre ou déformer les membranes compostables.",
    pp2Sol: "Solution : Utiliser le marquage jet d'encre TIJ sans contact ou des lasers UV froids calibrés pour minimiser le transfert thermique sur les films de 50 microns.",
    pp3Title: "03 / Invalidation des Certifications Éco",
    pp3Desc: "Les encres industrielles classiques contenant des métaux lourds contaminent les flux de compostage, violant la norme EN 13432/ASTM D6400.",
    pp3Sol: "Solution : Utiliser des encres solvant conformes aux directives d'écotoxicité et de limitation des métaux lourds pour préserver la compostabilité du sachet.",
    pp4Title: "04 / Dispersion d'Encre sur Papier Kraft",
    pp4Desc: "Les fibres poreuses du Kraft naturel absorbent l'encre liquide classique, rendant les codes-barres flous.",
    pp4Sol: "Solution : Configurer l'impression à haute résolution (300-600 DPI) et utiliser des encres pigmentées à haute viscosité pour se fixer en surface.",
    pp5Title: "05 / Perte d'Adhérence sous Condensation",
    pp5Desc: "Le stockage au froid ou l'humidité provoquent le délavage ou le décollement des codes de lot imprimés.",
    pp5Sol: "Solution : Appliquer des encres solvant à modification hydrophobe qui se lient chimiquement au papier et au PLA, offrant une résistance optimale à l'humidité."
  },
  es: {
    title: "Codificación ecológica: Impresión en materiales compostables | Achieve Pack",
    metaDesc: "Aprenda a imprimir en bioplásticos como PLA/PHA y papel Kraft sin perder las propiedades de barrera del empaque ni las certificaciones ecológicas.",
    keywords: "impresión empaque compostable, codificador bioplástico, fecha caducidad PLA, impresora empaques ecológicos",
    heroTitle: "Codificación ecológica: Impresión en películas compostables",
    heroSubtitle: "Cómo imprimir fechas de caducidad en PLA, PHA y papel Kraft de forma limpia y sostenible.",
    quickAnswer: "Respuesta rápida: La impresión sobre bioplásticos (PLA, PBAT, PHA) y papel Kraft requiere formulaciones de tinta específicas. El uso de codificadoras TIJ con tintas solventes ecológicas garantiza el secado instantáneo y la adherencia en superficies complejas sin dañar el empaque ni invalidar la norma EN 13432.",
    ryanTitle: "🔬 De la Libreta de Ingeniería de Ryan Wong",
    ryanLog: "Los bioplásticos tienen baja tensión superficial. Nuestras tintas solventes de secado rápido curan en 0,3 segundos en PLA y películas PCR, asegurando que las fechas no se borren en el trayecto de envío. Recientemente, una planta de compostaje industrial rechazó los lotes de un cliente porque la tinta de codificación industrial contenía trazas de cobalto. Por eso, hemos formulado nuestra tinta biocompatible 100% libre de metales, asegurando la plena conformidad con la norma EN 13432.",
    sec1Title: "1. Desafíos de superficie en biopolímeros",
    sec1Text: "El PLA y el PBAT son sensibles a solventes fuertes y al calor. Las impresoras TIJ aplican micropulverización sin contacto directo, protegiendo las propiedades de barrera (humedad y oxígeno) del empaque.",
    sec2Title: "2. Protección de certificaciones de compostabilidad",
    sec2Text: "El uso de pegatinas plásticas convencionales o tintas con metales pesados anula las propiedades compostables. Nuestras tintas recomendadas cumplen con los criterios de ecotoxicidad de la norma EN 13432.",
    sec3Title: "3. Impresión sobre papel Kraft vs. Bioplásticos",
    sec3Text: "El papel Kraft absorbe la tinta de forma natural, requiriendo alta densidad de pigmento. Los bioplásticos exigen solventes volátiles especiales. Configurar correctamente la resolución (DPI) y el voltaje de la impresora TIJ es clave.",
    upgradeCta: "Mejore su empaque ecológico",
    upgradeDesc: "Explore nuestras bolsas kraft compostables sin impresión, etiquetas PLA biodegradables y sistemas de codificación inteligentes.",
    btnText: "Consultar con un Ingeniero",
    painPointsTitle: "5 Problemas de Empaque y Soluciones de Ingeniería",
    pp1Title: "01 / Borrado de Tinta en Bioplásticos",
    pp1Desc: "La baja energía superficial de las películas de PLA/PHA hace que la tinta se corra o manche en procesos rápidos.",
    pp1Sol: "Solución: Integrar sistemas de inyección de tinta térmica (TIJ) con tintas solventes de evaporación rápida (secado < 0.3s) que curan al instante sin calor externo.",
    pp2Title: "02 / Perforación por Calor en Películas Finas",
    pp2Desc: "La codificación láser de alto calor o cintas de transferencia térmica pueden derretir o deformar las membranas compostables.",
    pp2Sol: "Solución: Emplear impresión TIJ sin contacto o códigos láser ultravioleta (UV) fríos calibrados, garantizando una transferencia térmica mínima a las barreras de biopolímeros de 50 micras.",
    pp3Title: "03 / Invalidación de Certificación Ecológica",
    pp3Desc: "Las tintas negras industriales con metales pesados contaminan los flujos de compost orgánico, violando las normas EN 13432/ASTM D6400.",
    pp3Sol: "Solución: Utilizar tintas solventes ecológicas que cumplan con los límites de restricción de metales pesados y ecotoxicidad para mantener el empaque 100% compostable.",
    pp4Title: "04 / Sangrado de Tinta en Papel Kraft",
    pp4Desc: "Las fibras porosas de Kraft natural absorben las tintas líquidas estándar, causando que los códigos de barras se vuelvan borrosos.",
    pp4Sol: "Solución: Ajustar la configuración a alta resolución (300-600 DPI) y usar solventes ecológicos pigmentados de alta viscosidad que se adhieran a las fibras superficiales.",
    pp5Title: "05 / Mala Adhesión Bajo Condensación",
    pp5Desc: "El almacenamiento en frío o la exposición a la humedad hacen que los códigos de lote impresos se disuelvan o se pelen.",
    pp5Sol: "Solución: Aplicar tintas solventes modificadas hidrofóbicamente que se unan químicamente a las matrices de papel y a las superficies de PLA, ofreciendo resistencia al agua."
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
        <div className="space-y-6">
          <div className="w-full rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/imgs/knowledge/explorer_tech_infographic.jpg" alt="Packaging Tech Guide" className="w-full h-auto" />
          </div>
          <div className="bg-emerald-950 text-emerald-100 p-6 rounded-2xl border border-emerald-800 text-left">
          <p className="text-emerald-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '環保包裝打碼工程筆記' : 'Eco Engineering Memo'}
          </p>
          <p className="text-emerald-100 text-xs leading-relaxed italic">
            "{t.ryanLog}"
          </p>
        </div>
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
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/pouch-coding-tij.jpg" 
              alt="High-resolution Thermal Inkjet TIJ coding on compostable biopolymer pouches by Achieve Pack"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
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
      id: "pain-points-solved",
      title: t.painPointsTitle,
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      content: (
        <div className="space-y-6 text-left">
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: t.pp1Title, desc: t.pp1Desc, sol: t.pp1Sol },
              { title: t.pp2Title, desc: t.pp2Desc, sol: t.pp2Sol },
              { title: t.pp3Title, desc: t.pp3Desc, sol: t.pp3Sol },
              { title: t.pp4Title, desc: t.pp4Desc, sol: t.pp4Sol },
              { title: t.pp5Title, desc: t.pp5Desc, sol: t.pp5Sol }
            ].map((card, i) => (
              <div key={i} className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:border-emerald-300 transition">
                <h4 className="text-sm font-bold text-neutral-900 mb-1">{card.title}</h4>
                <p className="text-neutral-600 text-xs mb-3">{card.desc}</p>
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                  {card.sol}
                </div>
              </div>
            ))}
          </div>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/compostable-packaging-pain-points.jpg" 
              alt="5 common compostable packaging coding pain points solved infographic"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
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

