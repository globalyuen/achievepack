import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, Award, Calendar, MessageCircle, Target, Zap, ShoppingBag, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    metaTitle: "Custom Compostable Pouch Suppliers & B2B Manufacturer | Achieve Pack",
    metaDesc: "Verify top-tier compostable pouch suppliers with TUV OK Compost Home & BPI certification. High-barrier bio-polymers engineered for shelf-life & food safety.",
    heroTitle: "Custom Compostable Pouch Suppliers & Engineering Guide",
    heroTitle2: "Custom Compostable Pouch Suppliers & Manufacturing",
    heroSubtitle: "TUV OK Compost Home | BPI Certified | High Barrier | BRCGS Grade A",
    introSummary: "The compostable market is filled with unverified claims. This guide outlines how we use rigorous engineering and international certification standards to serve as the world's most reliable supplier of custom high-barrier compostable pouches—protecting both your product and your environmental integrity.",
    sec1Title: "Engineering for the Bio-Economy",
    sec1Intro: "Finding a reliable Compostable Pouch Supplier is no longer just about material availability; it is about certified performance and high-barrier engineering.",
    dilemmaTitle: "The Supplier Dilemma",
    dilemmaItem1: "Lack of verifiable TUV/BPI certifications",
    dilemmaItem2: "Poor moisture/oxygen barrier (short shelf life)",
    dilemmaItem3: "Structural failure (delamination/splitting)",
    dilemmaItem4: "Unreliable lead times and QC",
    standardTitle: "The Achieve Pack Standard",
    standardItem1: "TUV OK Compost Home & Industrial Certified",
    standardItem2: "High-Barrier PBS/Bio-EVOH Structures",
    standardItem3: "ISO 9001 & BRCGS Grade A Manufacturing",
    standardItem4: "Factory-Direct Supply Chain Security",
    sec1Body: "At Achieve Pack, we are a vertically integrated manufacturer and specialist supplier of custom compostable pouches. We engineer our bio-polymers to deliver the barrier performance of plastic with the environmental integrity of nature. Every batch is tested for Migration, Seal Integrity, and Bio-Degradability, ensuring your brand is protected against greenwashing and product failure.",
    sec2Title: "Supply Chain Integrity & Global Certifications",
    sec2Intro: "In the compostable market, Certification is your insurance policy. We provide the full technical audit trail required for global retail compliance.",
    cert1Title: "TUV Austria OK Compost",
    cert1Desc: "Certified for both Home and Industrial composting, ensuring full breakdown within 180 days.",
    cert2Title: "BPI Certified",
    cert2Desc: "Meets ASTM D6400 standards for North American commercial composting facilities.",
    cert3Title: "BRCGS Food Safety",
    cert3Desc: "Manufactured in GFSI-recognized Grade A facilities for total food-grade hygiene.",
    img1Caption: "EEAT Insight: Factory-direct transparency ensures every compostable claim is backed by laboratory evidence",
    sec3Title: "High-Barrier Bio-Polymer Engineering",
    sec3Intro: "The historic weakness of compostables was their poor barrier. We have solved this through advanced multi-layer bio-polymer laminations.",
    stackTitle: "The Bio-High-Barrier Stack",
    layer1Title: "NK Paper / PBS / Bio-EVOH",
    layer1Desc: "A structure designed to protect oxygen-sensitive snacks and coffee for up to 12 months.",
    layer2Title: "Puncture Resistance",
    layer2Desc: "Bio-polymers engineered for high-tenacity, preventing pouch failure during logistics.",
    layer3Title: "Heat Seal Integrity",
    layer3Desc: "Optimized for high-speed automated lines with consistent seal strength (ASTM F88).",
    roiTitle: "Sustainable Supplier ROI",
    roiDesc: "Working with a specialist compostable supplier reduces your R&D risk. We provide ready-to-use, certified structures that have already been validated in real-world retail and logistics environments.",
    ctaTitle: "Certified. High-Barrier. Factory-Direct.",
    ctaDesc: "Ready to secure a reliable, certified compostable supply chain for your brand? Our engineering team will review your requirements today.",
    btnCalendly: "Book Supplier Strategy Session",
    btnStore: "Order Compostable Samples",
    ctaFooter: "TUV CERTIFIED • BPI COMPLIANT • HIGH BARRIER • BRCGS GRADE A",
    faq1Q: "Are you a direct manufacturer or a broker?",
    faq1A: "We are a direct vertically-integrated manufacturer. This ensures total control over material quality, certification accuracy, and supply chain security.",
    faq2Q: "How do you verify home-compostability?",
    faq2A: "Every custom structure we produce is backed by TUV Austria 'OK Compost Home' certifications, proving it breaks down fully in a backyard compost environment within 180 days.",
    faq3Q: "What is the lead time for custom compostable pouches?",
    faq3A: "Typically 10-12 weeks for rotogravure production and 4-6 weeks for digital production, depending on the complexity of the material structure.",
    faq4Q: "Do you offer low MOQ options for compostables?",
    faq4A: "Yes. Using our HP Indigo digital technology, we can offer custom printed compostable pouches with MOQs as low as 500 units per SKU."
  },
  es: {
    metaTitle: "Proveedores de Bolsas Compostables Personalizadas | Achieve Pack",
    metaDesc: "Verifique proveedores de bolsas compostables con certificación TUV OK Compost Home y BPI. Biopolímeros de alta barrera diseñados para vida útil y seguridad alimentaria.",
    heroTitle: "Proveedores de Bolsas Compostables Personalizadas y Guía de Ingeniería",
    heroTitle2: "Proveedores y Fabricación de Bolsas Compostables Personalizadas",
    heroSubtitle: "TUV OK Compost Home | Certificado BPI | Alta Barrera | BRCGS Grado A",
    introSummary: "El mercado de compostables está lleno de afirmaciones no verificadas. Esta guía detalla cómo utilizamos una ingeniería rigurosa y estándares de certificación internacionales para servir como el proveedor más confiable de bolsas compostables de alta barrera.",
    sec1Title: "Ingeniería para la Bioeconomía",
    sec1Intro: "Encontrar un proveedor confiable de bolsas compostables ya no es solo cuestión de disponibilidad de material; se trata de rendimiento certificado e ingeniería de alta barrera.",
    dilemmaTitle: "El Dilema del Proveedor",
    dilemmaItem1: "Falta de certificaciones verificables TUV/BPI",
    dilemmaItem2: "Deficiente barrera a la humedad/oxígeno (corta vida útil)",
    dilemmaItem3: "Falla estructural (delaminación/ruptura)",
    dilemmaItem4: "Tiempos de entrega y control de calidad no confiables",
    standardTitle: "El Estándar Achieve Pack",
    standardItem1: "Certificado TUV OK Compost Home e Industrial",
    standardItem2: "Estructuras PBS/Bio-EVOH de Alta Barrera",
    standardItem3: "Fabricación ISO 9001 y BRCGS Grado A",
    standardItem4: "Seguridad en la Cadena de Suministro Directa de Fábrica",
    sec1Body: "En Achieve Pack somos un fabricante integrado verticalmente y proveedor especializado en bolsas compostables personalizadas. Diseñamos nuestros biopolímeros para ofrecer el rendimiento de barrera del plástico con la integridad ambiental de la naturaleza. Cada lote se somete a pruebas de migración, sellado y biodegradabilidad.",
    sec2Title: "Integridad de la Cadena de Suministro y Certificaciones Globales",
    sec2Intro: "En el mercado compostable, la certificación es su póliza de seguro. Proporcionamos el historial completo de auditoría técnica requerido para el cumplimiento minorista mundial.",
    cert1Title: "TUV Austria OK Compost",
    cert1Desc: "Certificado tanto para compostaje doméstico como industrial, garantizando la descomposición completa en 180 días.",
    cert2Title: "Certificación BPI",
    cert2Desc: "Cumple con las normas ASTM D6400 para instalaciones de compostaje comercial en América del Norte.",
    cert3Title: "Seguridad Alimentaria BRCGS",
    cert3Desc: "Fabricado en instalaciones Grado A reconocidas por GFSI para una higiene de grado alimentario total.",
    img1Caption: "Visión EEAT: La transparencia directa de fábrica garantiza que cada afirmación de compostabilidad esté respaldada por evidencia de laboratorio",
    sec3Title: "Ingeniería de Biopolímeros de Alta Barrera",
    sec3Intro: "La debilidad histórica de los compostables era su baja barrera. Hemos resuelto esto mediante laminaciones avanzadas de biopolímeros multicapa.",
    stackTitle: "Estructura de Alta Barrera Bio",
    layer1Title: "Papel NK / PBS / Bio-EVOH",
    layer1Desc: "Estructura diseñada para proteger snacks sensibles al oxígeno y café hasta por 12 meses.",
    layer2Title: "Resistencia a la Perforación",
    layer2Desc: "Biopolímeros diseñados para una alta tenacidad, evitando fallas en la logística.",
    layer3Title: "Integridad del Sellado Térmico",
    layer3Desc: "Optimizado para líneas automatizadas de alta velocidad con resistencia de sello constante (ASTM F88).",
    roiTitle: "ROI del Proveedor Sostenible",
    roiDesc: "Trabajar con un proveedor especializado en compostables reduce su riesgo de I+D. Proporcionamos estructuras certificadas listas para usar y validadas en entornos reales.",
    ctaTitle: "Certificado. Alta Barrera. Directo de Fábrica.",
    ctaDesc: "¿Listo para asegurar una cadena de suministro compostable, confiable y certificada para su marca? Nuestro equipo revisará sus requisitos hoy.",
    btnCalendly: "Reservar Sesión de Estrategia de Proveedores",
    btnStore: "Solicitar Muestras Compostables",
    ctaFooter: "CERTIFICADO TUV • CONFORME BPI • ALTA BARRERA • BRCGS GRADO A",
    faq1Q: "¿Son fabricantes directos o intermediarios?",
    faq1A: "Somos un fabricante directo integrado verticalmente. Esto garantiza un control total sobre la calidad del material, la precisión de la certificación y la seguridad de la cadena de suministro.",
    faq2Q: "¿Cómo verifican la compostabilidad doméstica?",
    faq2A: "Cada estructura personalizada está respaldada por la certificación TUV Austria 'OK Compost Home', demostrando su descomposición completa en compost doméstico en 180 días.",
    faq3Q: "¿Cuál es el tiempo de entrega para bolsas compostables personalizadas?",
    faq3A: "Típicamente de 10 a 12 semanas para producción en rotograbado y de 4 a 6 semanas para impresión digital.",
    faq4Q: "¿Ofrecen opciones de bajo MOQ para compostables?",
    faq4A: "Sí. Utilizando nuestra tecnología digital HP Indigo, podemos ofrecer bolsas compostables impresas con MOQ desde 500 unidades por SKU."
  },
  fr: {
    metaTitle: "Fournisseurs de Sachets Compostables Sur Mesure | Achieve Pack",
    metaDesc: "Fournisseur certifié TUV OK Compost Home & BPI de sachets compostables sur mesure. Biopolymères haute barrière conçus pour la conservation et la sécurité alimentaire.",
    heroTitle: "Guide d'Ingénierie & Fournisseurs de Sachets Compostables Sur Mesure",
    heroTitle2: "Fournisseurs & Fabrication de Sachets Compostables Sur Mesure",
    heroSubtitle: "TUV OK Compost Home | Certifié BPI | Haute Barrière | BRCGS Grade A",
    introSummary: "Le marché des emballages compostables regorge d'affirmations non vérifiées. Ce guide explique comment nous utilisons une ingénierie rigoureuse et des normes internationales pour servir de fournisseur de confiance de sachets compostables haute barrière.",
    sec1Title: "Ingénierie pour la Bioéconomie",
    sec1Intro: "Trouver un fournisseur fiable de sachets compostables ne dépend plus uniquement de la disponibilité des matériaux, mais d'une performance certifiée et d'une ingénierie haute barrière.",
    dilemmaTitle: "Le Dilemme des Fournisseurs",
    dilemmaItem1: "Manque de certifications TUV/BPI vérifiables",
    dilemmaItem2: "Barrière à l'humidité/oxygène médiocre (durée de vie courte)",
    dilemmaItem3: "Défaillance structurelle (délamination/fissuration)",
    dilemmaItem4: "Délais et contrôle qualité peu fiables",
    standardTitle: "Le Standard Achieve Pack",
    standardItem1: "Certifié TUV OK Compost Home & Industrial",
    standardItem2: "Structures PBS/Bio-EVOH Haute Barrière",
    standardItem3: "Fabrication ISO 9001 & BRCGS Grade A",
    standardItem4: "Sécurité de la Chaîne d'Approvisionnement Direct Usine",
    sec1Body: "Chez Achieve Pack, nous sommes un fabricant intégré verticalement et un fournisseur spécialisé dans les sachets compostables sur mesure. Nos biopolymères offrent les performances barrières du plastique traditionnel tout en préservant l'environnement. Chaque lot est testé pour la migration, l'étanchéité et la biodégradabilité.",
    sec2Title: "Intégrité de la Chaîne d'Approvisionnement & Certifications",
    sec2Intro: "Dans le secteur du compostable, la certification est votre assurance. Nous fournissons la traçabilité technique complète requise par les acteurs de la grande distribution.",
    cert1Title: "TUV Austria OK Compost",
    cert1Desc: "Certifié pour le compostage domestique et industriel, garantissant une décomposition complète en 180 jours.",
    cert2Title: "Certifié BPI",
    cert2Desc: "Conforme aux normes ASTM D6400 pour les installations de compostage commercial en Amérique du Nord.",
    cert3Title: "Sécurité Alimentaire BRCGS",
    cert3Desc: "Fabriqué dans des usines de Grade A reconnues GFSI pour une hygiène alimentaire totale.",
    img1Caption: "Insight EEAT : La transparence directe de l'usine garantit que chaque affirmation compostable repose sur des preuves de laboratoire",
    sec3Title: "Ingénierie des Biopolymères Haute Barrière",
    sec3Intro: "La faiblesse historique des matériaux compostables résidait dans leur barrière. Nous avons résolu ce problème grâce à des stratifications multicouches avancées.",
    stackTitle: "La Structure Bio-Haute Barrière",
    layer1Title: "Papier NK / PBS / Bio-EVOH",
    layer1Desc: "Une structure conçue pour protéger les produits secs et le café sensibles à l'oxygène jusqu'à 12 mois.",
    layer2Title: "Résistance à la Perforation",
    layer2Desc: "Biopolymères conçus pour une haute ténacité, évitant la rupture du sachet pendant le transport.",
    layer3Title: "Intégrité du Scellage à Chaud",
    layer3Desc: "Optimisé pour les lignes automatisées à grande vitesse avec une force de scellage constante (ASTM F88).",
    roiTitle: "ROI d'un Fournisseur Durable",
    roiDesc: "Travailler avec un fournisseur spécialisé réduit votre risque de R&D. Nous fournissons des structures certifiées prêtes à l'emploi et validées en conditions réelles.",
    ctaTitle: "Certifié. Haute Barrière. Direct Usine.",
    ctaDesc: "Prêt à sécuriser une chaîne d'approvisionnement compostable fiable pour votre marque ? Notre équipe étudie vos besoins dès aujourd'hui.",
    btnCalendly: "Réserver une Session Stratégique Fournisseur",
    btnStore: "Commander des Échantillons Compostables",
    ctaFooter: "CERTIFIÉ TUV • CONFORME BPI • HAUTE BARRIÈRE • BRCGS GRADE A",
    faq1Q: "Êtes-vous un fabricant direct ou un courtier ?",
    faq1A: "Nous sommes un fabricant direct intégré verticalement, garantissant un contrôle total de la qualité, des certifications et de la sécurité d'approvisionnement.",
    faq2Q: "Comment vérifiez-vous la compostabilité domestique ?",
    faq2A: "Chaque structure est certifiée TUV Austria 'OK Compost Home', prouvant sa décomposition complète en compost domestique sous 180 jours.",
    faq3Q: "Quel est le délai de livraison des sachets compostables sur mesure ?",
    faq3A: "Généralement 10 à 12 semaines pour l'héliogravure et 4 à 6 semaines pour l'impression numérique.",
    faq4Q: "Proposez-vous des options à faible MOQ ?",
    faq4A: "Oui. Grâce à notre technologie numérique HP Indigo, nous proposons des sachets compostables imprimés dès 500 unités par référence."
  },
  'zh-tw': {
    metaTitle: "可堆肥軟包裝袋製造商與供應商驗證指南 | Achieve Pack",
    metaDesc: "通過 TUV OK Compost Home 及 BPI 權威認證的可堆肥軟包裝袋專業製造商。提供高阻隔生物聚合物複合材料，完美保護產品保質期。",
    heroTitle: "可堆肥軟包裝袋供應商選型與工程技術指南",
    heroTitle2: "可堆肥軟包裝袋專業供應商與客製化製造",
    heroSubtitle: "TUV OK Compost Home | BPI 認證 | 高阻隔技術 | BRCGS A 級認證",
    introSummary: "可堆肥包裝市場充斥著未經證實的宣傳。本指南將深入解析我們如何透過嚴謹的工程技術與國際權威認證，打造全球最可靠的高阻隔可堆肥軟袋供應鏈，同時保護您的產品品質與品牌聲譽。",
    sec1Title: "生物經濟時代的包裝工程",
    sec1Intro: "尋找可靠的可堆肥包裝袋供應商，已不再只是確認材料供應，而是關乎通過驗證的阻隔性能與結構工程技術。",
    dilemmaTitle: "傳統供應商的常見困境",
    dilemmaItem1: "缺乏可追溯之 TUV / BPI 權威認證文件",
    dilemmaItem2: "防潮及防氧氣阻隔差（導致貨架期縮短）",
    dilemmaItem3: "結構強度不足（容易發生剝離與破袋）",
    dilemmaItem4: "交期不穩定與品管標準不一",
    standardTitle: "Achieve Pack 標準化工程規範",
    standardItem1: "通過 TUV OK Compost 家庭與工業堆肥雙認證",
    standardItem2: "高阻隔 PBS / Bio-EVOH 多層複合結構",
    standardItem3: "ISO 9001 與 BRCGS A 級食品安全工廠製造",
    standardItem4: "原廠直營的高安全度供應鏈",
    sec1Body: "Achieve Pack 是垂直整合的可堆肥包裝袋專業製造商與供應商。我們研發的生物聚合物能提供媲美傳統塑膠的高阻隔性能，同時維持對自然環境的純淨承諾。每批產品均通過溶出遷移、封口強度與生物降解測試。",
    sec2Title: "供應鏈誠信與全球權威認證",
    sec2Intro: "在可堆肥市場中，國際認證就是您的風險保險單。我們提供零售與進出口合規所需的完整技術稽核報告。",
    cert1Title: "TUV Austria OK Compost 認證",
    cert1Desc: "獲得家庭與工業堆肥雙重認證，確保在 180 天內於堆肥環境中完全分解。",
    cert2Title: "美國 BPI 權威認證",
    cert2Desc: "符合 ASTM D6400 標準，適用於北美商業堆肥設施規範。",
    cert3Title: "BRCGS 食品安全級製造",
    cert3Desc: "於 GFSI 認可之 A 級無塵潔淨工廠生產，確保食品級衛生與安全。",
    img1Caption: "EEAT 專業洞察：原廠直營透明化，確保每項可堆肥承諾皆有實驗室數據背書",
    sec3Title: "高阻隔生物聚合物工程技術",
    sec3Intro: "以往可堆肥材料最大的弱點在於阻隔性較差。我們透過先進的多層生物聚合物複合技術徹底解決了此問題。",
    stackTitle: "生物高阻隔層疊結構",
    layer1Title: "NK 牛皮紙 / PBS / Bio-EVOH",
    layer1Desc: "專為對氧氣與水氣敏感的咖啡、堅果與乾貨設計，提供長達 12 個月的貨架期保護。",
    layer2Title: "高抗穿刺性能",
    layer2Desc: "經增韌調配的生物聚合物，有效防止在運輸與物流過程中發生破包或撕裂。",
    layer3Title: "熱封強度完整性",
    layer3Desc: "針對高速自動化裝填封口線進行優化，具備穩定且優異的封口強度（符合 ASTM F88）。",
    roiTitle: "永續供應商投資回報 (ROI)",
    roiDesc: "與專業的可堆肥供應商合作能大幅降低您的研發風險。我們提供經過市場驗證、可直接量產的認證包裝結構。",
    ctaTitle: "國際認證．高阻隔保護．原廠直供",
    ctaDesc: "準備好為您的品牌建立穩定、合規且高品質的可堆肥包裝供應鏈了嗎？我們的工程團隊隨時為您提供評估。",
    btnCalendly: "預約供應商包裝策略諮詢",
    btnStore: "訂購可堆肥樣品盒",
    ctaFooter: "TUV 雙認證 • BPI 合規 • 高阻隔工程 • BRCGS A 級認證",
    faq1Q: "貴公司是直接製造工廠還是貿易中介？",
    faq1A: "我們是垂直整合的直接製造工廠，能全權控制材料品質、認證精確度與供應鏈交期。",
    faq2Q: "您如何驗證家庭可堆肥性？",
    faq2A: "我們生產的每款客製化結構均附有 TUV Austria 'OK Compost Home' 官方認證報告，證明其可在庭院堆肥環境中 180 天內完全降解。",
    faq3Q: "客製化可堆肥袋的生產交期需要多久？",
    faq3A: "凹版版費大貨生產通常需要 10-12 週；數位印刷生產則僅需 4-6 週。",
    faq4Q: "貴公司是否提供低起訂量 (MOQ) 的可堆肥方案？",
    faq4A: "是的。利用 HP Indigo 數位印刷技術，我們提供起訂量低至 500 個/SKU 的客製化印刷可堆肥袋。"
  }
}

const CustomCompostablePouchSuppliersPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh' || rawLang === 'zh_tw') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: tLocal.sec1Title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-lime-50 p-6 rounded-lg border border-emerald-200 shadow-sm">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {tLocal.sec1Intro}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-600">
                <h4 className="font-semibold text-emerald-800">{tLocal.dilemmaTitle}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {tLocal.dilemmaItem1}</li>
                  <li>• {tLocal.dilemmaItem2}</li>
                  <li>• {tLocal.dilemmaItem3}</li>
                  <li>• {tLocal.dilemmaItem4}</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-lime-500">
                <h4 className="font-semibold text-lime-800">{tLocal.standardTitle}</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• {tLocal.standardItem1}</li>
                  <li>• {tLocal.standardItem2}</li>
                  <li>• {tLocal.standardItem3}</li>
                  <li>• {tLocal.standardItem4}</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-4 leading-relaxed">
            {tLocal.sec1Body}
          </p>
        </div>
      )
    },
    {
      id: 'certified-supply-chain',
      title: tLocal.sec2Title,
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {tLocal.sec2Intro}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{tLocal.cert1Title}</h4>
              <p className="text-sm text-neutral-600">{tLocal.cert1Desc}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-lime-100 rounded-lg w-fit mb-4">
                <Award className="h-6 w-6 text-lime-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{tLocal.cert2Title}</h4>
              <p className="text-sm text-neutral-600">{tLocal.cert2Desc}</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                <Factory className="h-6 w-6 text-slate-600" />
              </div>
              <h4 className="font-bold text-neutral-900">{tLocal.cert3Title}</h4>
              <p className="text-sm text-neutral-600">{tLocal.cert3Desc}</p>
            </div>
          </div>

          <div className="bg-neutral-100 p-2 rounded-xl border-2 border-neutral-200 mt-8">
            <ClickableImage 
              src="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp" 
              alt="High performance custom compostable pouch" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption={tLocal.img1Caption}
            />
          </div>
        </div>
      )
    },
    {
      id: 'barrier-engineering',
      title: tLocal.sec3Title,
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {tLocal.sec3Intro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900">{tLocal.stackTitle}</h4>
              <ul className="space-y-3 text-sm">
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.layer1Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.layer1Desc}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.layer2Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.layer2Desc}</p>
                </li>
                <li className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm">
                  <h5 className="font-bold text-neutral-900">{tLocal.layer3Title}</h5>
                  <p className="text-xs text-neutral-600 mt-1">{tLocal.layer3Desc}</p>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col justify-center">
              <h4 className="font-bold text-neutral-900 mb-2">{tLocal.roiTitle}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {tLocal.roiDesc}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: tLocal.ctaTitle,
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-lime-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{tLocal.ctaTitle}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {tLocal.ctaDesc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {tLocal.btnCalendly}
            </button>
            <Link
              to="/store"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {tLocal.btnStore}
            </Link>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {tLocal.ctaFooter}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: tLocal.faq1Q,
      answer: tLocal.faq1A
    },
    {
      question: tLocal.faq2Q,
      answer: tLocal.faq2A
    },
    {
      question: tLocal.faq3Q,
      answer: tLocal.faq3A
    },
    {
      question: tLocal.faq4Q,
      answer: tLocal.faq4A
    }
  ]

  return (
    <>
      <Helmet>
        <title>{tLocal.metaTitle}</title>
        <meta name="description" content={tLocal.metaDesc} />
        <link rel="canonical" href="https://achievepack.com/topics/custom-compostable-pouch-suppliers" />
        <meta name="keywords" content="compostable pouch suppliers, custom compostable packaging, TUV certified pouches, BPI compostable bags, sustainable packaging manufacturer, bio-polymer pouches" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title={tLocal.heroTitle}
        description={tLocal.metaDesc}
        keywords={['compostable suppliers', 'bio-packaging', 'sustainable manufacturing']}
        heroTitle={tLocal.heroTitle2}
        heroSubtitle={tLocal.heroSubtitle}
        introSummary={tLocal.introSummary}
        sections={sections}
        faqs={faqs}
        schemaType="Service"
        heroImage="/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp"
      />
    </>
  )
}

export default CustomCompostablePouchSuppliersPage

