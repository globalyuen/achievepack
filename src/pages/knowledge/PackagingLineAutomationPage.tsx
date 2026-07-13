import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Cpu, Settings, Zap, ArrowRight, Box, ShieldCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'
import ClickableImage from '../../components/ClickableImage'
import { getDomain } from '../../utils/domain'

const translations: Record<string, any> = {
  en: {
    title: "Packaging Line Automation: Scaling Up Date Coding for SMEs | Achieve Pack",
    metaDesc: "Transition from manual stamping to automated packaging. Learn how conveyor-integrated TIJ inkjet systems and labelers boost production throughput and cut labor costs.",
    keywords: "packaging automation, conveyor printing, automatic labeler, industrial inkjet, SME production scaling",
    heroTitle: "Packaging Line Automation & Date Coding",
    heroSubtitle: "How growing brands transition from manual stamping to inline conveyor printing and automatic labeling.",
    quickAnswer: "Quick Answer: For growing brands, manual date stamping becomes a massive bottleneck at volumes above 1,000 bags/day. Transitioning to inline coding requires integrating a conveyor belt with a static thermal inkjet (TIJ) bracket, allowing hands-free date and barcode printing at speeds up to 30 meters/minute. Combining this with an automatic labeling machine optimizes throughput and cuts labeling labor by 80%.",
    ryanTitle: "🔬 From Ryan Wong's Engineering Notebook",
    ryanLog: "A startup coffee brand was employing three full-time workers just to hand-apply sticker labels and stamp roast dates onto 2,000 bags a day. It was incredibly slow, and dates frequently smudged. We automated their line by mounting a TIJ coder on a small modular conveyor and installing an inline label applicator. Within one shift, they went from 250 bags/hour to over 1,500 bags/hour. A single operator now manages the entire line, and the other two employees were reassigned to sales. The capital investment was recovered in exactly 42 days. If you are doing more than 1,000 units daily, manual lines are actively costing you growth.",
    sec1Title: "1. The Manual Bottleneck vs. Inline Coding",
    sec1Text: "Manual stamping or hand-peeling labels is slow, inconsistent, and highly error-prone. By mounting a TIJ smart coder onto a conveyor guide rail with a photoelectric sensor, printing is automated as pouches pass by, producing identical, crisp dates and barcodes without human intervention.",
    sec2Title: "2. Integrating Conveyors & Sensors",
    sec2Text: "Smart TIJ systems sync with conveyor speeds using encoders. As the sensor detects a pouch edge, it signals the printhead to spray the pre-programmed template instantly. This non-contact process ensures zero damage to filled bags.",
    sec3Title: "3. Modular Line Setup",
    sec3Text: "A complete SME packaging line integrates direct heat sealing, date coding, and automatic label application. Using modular machinery ensures you can adapt to different pouch sizes and materials without purchasing entirely new lines.",
    upgradeCta: "Automate Your Production Line",
    upgradeDesc: "Explore our automatic labeling systems, conveyor belt combos, and smart inkjet printing packages.",
    btnText: "Consult an Engineer",
    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    pp1Title: "01 / Conveyor Speed Jitter & Print Distortion",
    pp1Desc: "Fluctuations in conveyor belt speed cause printed codes to stretch, compress, or become illegible.",
    pp1Sol: "Solution: Install high-resolution rotary encoders that track conveyor speed in real-time, dynamically adjusting the TIJ printhead spray rate.",
    pp2Title: "02 / Sensor Misalignment & Missed Packs",
    pp2Desc: "Photoelectric sensors fail to detect transparent pouches or bags with high reflectivity, causing skipped prints.",
    pp2Sol: "Solution: Deploy dual-frequency reflective sensors or fiber-optic sensors capable of detecting clear materials and triggering print cycles reliably.",
    pp3Title: "03 / Label Crinkling & Wrinkles",
    pp3Desc: "Manual or semi-automatic label application onto filled, uneven pouches results in bubbles and crease lines.",
    pp3Sol: "Solution: Implement an inline automatic labeling machine equipped with top-stabilizing sponge rollers that flatten the pouch surface before label roll release.",
    pp4Title: "04 / Downtime from Ink Clogging",
    pp4Desc: "Production stops because inkjet nozzles dry out during brief breaks or overnight shutdown.",
    pp4Sol: "Solution: Use TIJ coding units with auto-purging nozzle faceplates and solvent inks formulated with high cap-off times (up to 60 minutes).",
    pp5Title: "05 / Line Component Desynchronization",
    pp5Desc: "Heat sealers, conveyors, and printer brackets operate on different electrical speeds, causing product pile-ups.",
    pp5Sol: "Solution: Establish a centralized PLC control loop with emergency stop triggers to synchronize conveyor, sealer, and printing speeds."
  },
  zh: {
    title: "包裝線自動化：中小型品牌如何選擇日期噴碼與自動化設備 | Achieve Pack",
    metaDesc: "從手動打碼轉型自動化生產。介紹如何整合傳送帶噴碼系統與自動貼標機，降低人工成本，提升產線產能與標籤一致性。",
    keywords: "包裝自動化, 傳送帶噴碼, 自動貼標機, 工業噴碼機, 生產線升級, 自動打碼",
    heroTitle: "包裝線自動化：中小型品牌升級打碼方案",
    heroSubtitle: "探討如何從效率低下的手動敲印，升級至傳送帶自動噴印與全自動貼標生產線。",
    quickAnswer: "快速解答：當日產量超過 1,000 袋時，手動日期蓋印將成為重大的生產瓶頸。將熱噴墨 (TIJ) 噴碼機安裝於傳送帶支架上，配備光電感應器，可實現高達每分鐘 30 米的非接觸式自動噴碼。再配合全自動貼標機，能大幅節省 80% 的人工貼標工時，全面消除出貨延遲。",
    ryanTitle: "🔬 來自 Ryan Wong 的包裝工程筆記",
    ryanLog: "一家初創咖啡品牌曾僱用三名全職員工，只為了在每天 2,000 個袋子上手動貼標並加蓋烘焙日期。這速度慢得令人難以置信，而且日期經常被蹭糊。我們通過在小型模組化傳送帶上安裝 TIJ 噴碼機並配備在線標籤貼標機，實現了生產線的自動化。在短短一個工作班次內，他們的產能從每小時 250 袋提升至 1,500 袋以上。現在，整條產線只需一名操作員即可管理，其餘兩名員工被重新分配到銷售崗位。該項資本投資在整整 42 天內就完全收回了。如果您的日產量超過 1,000 件，手動操作線正白白消耗您的利潤與增長潛力。",
    sec1Title: "1. 手動瓶頸與在線自動化",
    sec1Text: "手動打碼容易出現位置偏移、字樣模糊等不良品。通過將 TIJ 噴頭固定於傳送帶旁，利用光電感應器偵測袋身，能在袋身通過的瞬間完成高精度噴印，確保字字清晰一致。",
    sec2Title: "2. 傳送帶與光電感應器整合",
    sec2Text: "智能噴碼系統與傳送帶配合，在感應到包裝邊緣時即刻觸發噴印。這種非接觸式噴印技術適用於已填充的立體袋、風琴袋或瓶罐，不會擠壓變形或影響包裝內部產品。",
    sec3Title: "3. 模組化流水線設計",
    sec3Text: "一條高效的包裝流水線包含：封口、噴碼、貼標三合一模組。選擇高度相容的模組化設備，便於未來針對不同袋型、規格進行微調，避免因包裝改版而更換整條生產線。",
    upgradeCta: "開啟您的自動化生產線",
    upgradeDesc: "選購 Achieve Pack 全自動貼標機、傳送帶組件及智能噴碼機套餐，實現高產出打包。",
    btnText: "諮詢包裝工程師",
    painPointsTitle: "5 大包裝線自動化痛點與工程解決方案",
    pp1Title: "01 / 傳送帶抖動與噴印變形",
    pp1Desc: "傳送帶的速度波動會導致噴印的日期或條碼被拉長、壓縮，甚至無法讀取。",
    pp1Sol: "解決方案：安裝高解析度的旋轉編碼器，實時追蹤傳送帶速度，動態調節 TIJ 噴頭的噴印速率。",
    pp2Title: "02 / 感應器對位失準與漏噴",
    pp2Desc: "光電傳感器無法檢測透明包裝袋或高反射率的包裝，導致漏噴碼。",
    pp2Sol: "解決方案：部署雙頻反射式光電感應器或光纖傳感器，精確捕捉透明或高亮材質邊緣，穩定觸發噴印。",
    pp3Title: "03 / 貼標起皺與氣泡",
    pp3Desc: "在已填充且表面不平整的立體袋上人工或半自動貼標時，易產生氣泡和摺皺。",
    pp3Sol: "解決方案：採用配備頂部平壓海綿輥的在線自動貼標機，在標籤捲釋放前先撫平袋身表面。",
    pp4Title: "04 / 噴嘴堵塞導致產線停工",
    pp4Desc: "在短暫歇息或隔夜停機期間，噴頭墨水乾涸導致噴嘴堵塞，停工清洗。",
    pp4Sol: "解決方案：使用具備自動排廢清洗噴頭蓋板的 TIJ 噴碼單元，並搭配高開蓋時間（最長達60分鐘）的溶劑墨水。",
    pp5Title: "05 / 產線組件速度不對稱",
    pp5Desc: "熱封口機、傳送帶和貼標機在不同電氣速度下運作，導致包裝袋在產線堆疊卡料。",
    pp5Sol: "解決方案：建立中央 PLC 控制迴路，配備聯動急停觸發器，實現傳送帶、封口機與貼標機速度的精確同步。"
  },
  fr: {
    title: "Automatisation de ligne d'emballage : Optimiser le codage | Achieve Pack",
    metaDesc: "Passez du codage manuel à l'automatisation. Apprenez comment les systèmes jet d'encre TIJ sur convoyeur augmentent la cadence et réduisent les coûts.",
    keywords: "automatisation emballage, convoyeur, étiqueteuse automatique, TIJ convoyeur, productivité PME",
    heroTitle: "Automatisation de la ligne d'emballage et codage",
    heroSubtitle: "Comment passer du marquage manuel au codage automatique sur convoyeur et à l'étiquetage automatique.",
    quickAnswer: "Réponse rapide: Pour les volumes supérieurs à 1 000 sachets par jour, le codage manuel ralentit la production. Intégrer un convoyeur avec un bras de support d'imprimante jet d'encre (TIJ) et un capteur photoélectrique permet d'automatiser l'impression à des vitesses élevées.",
    ryanTitle: "🔬 De l'Engineering Notebook de Ryan Wong",
    ryanLog: "Une startup de café employait trois personnes à plein temps uniquement pour coller des étiquettes et tamponner des dates sur 2 000 sacs par jour. C'était extrêmement lent. Nous avons automatisé leur ligne en installant un codeur TIJ sur un convoyeur modulaire et une étiqueteuse automatique. En une seule journée, ils sont passés de 250 sacs/heure à plus de 1 500 sacs/heure. Un seul opérateur gère désormais la ligne, et l'investissement a été amorti en 42 jours. Si vous produisez plus de 1 000 unités par jour, le manuel freine votre croissance.",
    sec1Title: "1. Le goulot d'étranglement du marquage manuel",
    sec1Text: "Le marquage manuel est irrégulier et source d'erreurs. Le montage d'un codeur TIJ sur rail de convoyeur assure des impressions constantes et nettes de manière 100% automatisée.",
    sec2Title: "2. Synchronisation convoyeur et capteurs",
    sec2Text: "Le capteur photoélectrique détecte le passage de l'emballage et déclenche instantanément l'impression jet d'encre sans contact, protégeant ainsi l'intégrité des produits fragiles.",
    sec3Title: "3. Configuration de ligne modulaire",
    sec3Text: "Une configuration modulaire combinant scellage, codage et étiquetage permet de s'adapter facilement à différents formats de sacs sans réinvestissement massif.",
    upgradeCta: "Automatisez votre ligne de conditionnement",
    upgradeDesc: "Découvrez nos étiqueteuses automatiques et convoyeurs équipés de systèmes de codage TIJ.",
    btnText: "Consulter un Ingénieur",
    painPointsTitle: "5 Problèmes d'Emballage & Solutions d'Ingénierie",
    pp1Title: "01 / Instabilité du Convoyeur & Déformation d'Impression",
    pp1Desc: "Les variations de vitesse du convoyeur provoquent l'étirement ou la compression des dates imprimées.",
    pp1Sol: "Solution : Installer des encodeurs rotatifs haute résolution pour suivre la vitesse du tapis et ajuster le jet de l'imprimante TIJ en temps réel.",
    pp2Title: "02 / Mauvais Alignement du Capteur & Rats de Marquage",
    pp2Desc: "Les cellules photoélectriques classiques ne détectent pas les films transparents ou brillants, provoquant des manques d'impression.",
    pp2Sol: "Solution : Déployer des capteurs réfléchissants double fréquence ou des fibres optiques sensibles pour détecter tout matériau.",
    pp3Title: "03 / Plissement de l'Étiquette sur Sacs Remplis",
    pp3Desc: "L'application manuelle ou semi-automatique sur des sachets bombés génère des plis et des bulles d'air.",
    pp3Sol: "Solution : Utiliser une étiqueteuse automatique équipée de rouleaux presseurs en mousse pour aplatir le sachet avant la dépose.",
    pp4Title: "04 / Temps d'Arrêt par Colmatage des Buses",
    pp4Desc: "L'encre solvant sèche dans les buses de l'imprimante lors des pauses, bloquant le redémarrage.",
    pp4Sol: "Solution : Utiliser des têtes TIJ avec purge automatique et des encres formulées avec un temps hors-cap élevé (jusqu'à 60 minutes).",
    pp5Title: "05 / Désynchronisation des Organes de la Ligne",
    pp5Desc: "Les soudeuses, convoyeurs et étiqueteuses fonctionnant à des vitesses différentes provoquent des bourrages de produits.",
    pp5Sol: "Solution : Mettre en place un contrôle centralisé par automate (PLC) avec arrêts d'urgence coordonnés pour synchroniser les vitesses."
  },
  es: {
    title: "Automatización de líneas de empaque: Codificación industrial | Achieve Pack",
    metaDesc: "Automatice su línea de producción. Descubra cómo las impresoras TIJ integradas en cinta transportadora y las etiquetadoras reducen costes y aumentan la velocidad.",
    keywords: "automatización empaque, cinta transportadora, etiquetadora automática, impresora TIJ lineal, escalabilidad producción",
    heroTitle: "Automatización de la línea de empaque y codificación",
    heroSubtitle: "El camino hacia la producción industrial mediante cinta transportadora e impresión jet de tinta lineal.",
    quickAnswer: "Respuesta rápida: Superar las 1,000 unidades diarias con sellado y codificación manual es ineficiente. La solución es montar un codificador TIJ en una cinta transportadora dotada de sensor fotoeléctrico, logrando imprimir lotes y fechas a velocidades de hasta 30 m/min.",
    ryanTitle: "🔬 De la Libreta de Ingeniería de Ryan Wong",
    ryanLog: "Una startup de café empleaba a tres trabajadores a tiempo completo solo para aplicar etiquetas a mano y estampar fechas en 2,000 bolsas al día. Era sumamente lento y las fechas se borraban. Automatizamos su línea montando un codificador TIJ en una pequeña cinta transportadora modular e instalando un aplicador de etiquetas. En un solo turno, pasaron de 250 bolsas/hora a más de 1,500 bolsas/hora. Ahora un solo operador gestiona la línea, y la inversión se amortizó en exactamente 42 días. Si procesa más de 1,000 unidades al día, el trabajo manual le está costando activamente el crecimiento.",
    sec1Title: "1. El cuello de botella manual vs. Codificación lineal",
    sec1Text: "Imprimir manualmente provoca variaciones en la posición y calidad. Los codificadores automáticos en línea garantizan marcas idénticas y profesionales de forma continua.",
    sec2Title: "2. Integración de cintas y sensores fotoeléctricos",
    sec2Text: "Los sensores detectan el paso del envase y activan la inyección de tinta en fracciones de segundo, garantizando que el texto quede centrado y sin contacto físico.",
    sec3Title: "3. Diseño de línea modular",
    sec3Text: "Combine selladoras continuas, codificadoras automáticas y etiquetadoras en una sola línea. La flexibilidad de nuestros equipos le permite cambiar de SKU rápidamente.",
    upgradeCta: "Automatice su producción hoy",
    upgradeDesc: "Vea nuestros combos de cinta transportadora, etiquetadoras automáticas e impresoras inteligentes de inyección de tinta.",
    btnText: "Consultar con un Ingeniero",
    painPointsTitle: "5 Problemas de Empaque y Soluciones de Ingeniería",
    pp1Title: "01 / Fluctuación de Velocidad & Distorsión del Impreso",
    pp1Desc: "Los tirones en la cinta transportadora hacen que los códigos impresos se estiren o compriman.",
    pp1Sol: "Solución: Instalar codificadores (encoders) rotativos de alta resolución que rastrean la velocidad de la cinta y ajustan la inyección de la TIJ en tiempo real.",
    pp2Title: "02 / Desalineación del Sensor & Omisión de Impresión",
    pp2Desc: "Los sensores ópticos estándar no logran detectar bolsas transparentes o de alto brillo, perdiendo impresiones.",
    pp2Sol: "Solución: Implementar sensores ópticos reflectantes de doble frecuencia o sensores de fibra óptica para detectar cualquier envase.",
    pp3Title: "03 / Arrugas en la Aplicación de Etiquetas",
    pp3Desc: "Colocar etiquetas a mano sobre bolsas llenas y desiguales genera burbujas y pliegues antiestéticos.",
    pp3Sol: "Solución: Emplear una etiquetadora automática en línea con rodillos de esponja superiores para aplanar la bolsa antes del pegado.",
    pp4Title: "04 / Parada de Producción por Boquillas Obstruidas",
    pp4Desc: "La tinta solvente se seca rápidamente en el cabezal de impresión durante las paradas, obstruyendo la boquilla.",
    pp4Sol: "Solución: Utilizar unidades TIJ con purga automática de boquillas y tintas solventes formuladas con tiempos de tapado prolongados (hasta 60 minutos).",
    pp5Title: "05 / Desincronización de Componentes de Línea",
    pp5Desc: "Selladoras y cintas funcionando a velocidades distintas acumulan bolsas y provocan atascos en la línea.",
    pp5Sol: "Solución: Establecer un bucle de control PLC centralizado con paradas de emergencia enlazadas para unificar las velocidades de toda la línea."
  }
}

export default function PackagingLineAutomationPage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  const currentLang = i18n.language || 'en'
  const langKey = currentLang.startsWith('zh') ? 'zh' : currentLang.startsWith('fr') ? 'fr' : currentLang.startsWith('es') ? 'es' : 'en'
  const t = translations[langKey]

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: t.keywords,
    canonicalUrl: `https://achievepack.com/knowledge/packaging-line-automation-date-coding`
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: "/imgs/knowledge/bottle-printing-hero.jpg",
    categoryTag: "AUTOMATION",
    categoryColor: "#2563eb",
    readTime: "9 min read"
  }

  const sectionsForAchieve = [
    {
      id: "engineers-log",
      title: t.ryanTitle,
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      content: (
        <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 text-left">
          <p className="text-blue-400 text-xs font-semibold mb-2 uppercase tracking-wide">
            {langKey === 'zh' ? '自動化工程日記' : 'Automation Memo'}
          </p>
          <p className="text-slate-200 text-xs leading-relaxed italic">
            "{t.ryanLog}"
          </p>
        </div>
      )
    },
    {
      id: "manual-vs-inline",
      title: t.sec1Title,
      icon: <Settings className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec1Text}
          </p>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/bottle-printing-heat-transfer.jpg" 
              alt="Automated heat transfer ribbon printing on packaging film rolls"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "conveyors-sensors",
      title: t.sec2Title,
      icon: <Zap className="h-6 w-6 text-neutral-800" />,
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
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
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
              <div key={i} className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm hover:border-blue-300 transition">
                <h4 className="text-sm font-bold text-neutral-900 mb-1">{card.title}</h4>
                <p className="text-neutral-600 text-xs mb-3">{card.desc}</p>
                <div className="text-xs font-semibold text-blue-700 bg-blue-50 p-2.5 rounded-lg border border-blue-100">
                  {card.sol}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "modular-setup",
      title: t.sec3Title,
      icon: <Cpu className="h-6 w-6 text-neutral-800" />,
      content: (
        <div className="space-y-4 text-left">
          <p className="text-neutral-700 text-xs leading-relaxed">
            {t.sec3Text}
          </p>
          <div className="my-6">
            <ClickableImage 
              src="/imgs/knowledge/bottle-printing-laser-engraving.jpg" 
              alt="Laser engraving and automated inline packaging line conveyor setup"
              className="w-full max-w-lg rounded-xl shadow-md border"
            />
          </div>
        </div>
      )
    },
    {
      id: "related-products-section",
      title: langKey === 'zh' ? '推薦的生產線自動化設備' : 'Recommended Automation Equipment',
      icon: <Box className="h-6 w-6 text-neutral-800" />,
      content: (
        <RelatedProductsShowcase productIds={['smart-inkjet-coding-machine', 'automatic-labeling-machine', 'hand-clamp-sealer']} />
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
