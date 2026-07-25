import React from 'react';
import { Wind, Droplets, Info, CheckCircle, Target, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const propertiesData1 = [
  { material: 'OPP 20', o2: '1900', wvtr: '6' },
  { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
  { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
  { material: 'PET 12', o2: '85', wvtr: '55' },
  { material: 'NY 15', o2: '45', wvtr: '260' },
  { material: 'CPP 20', o2: '2000', wvtr: '6' },
  { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
  { material: 'CPP 40', o2: '1700', wvtr: '5' },
  { material: 'VMCPP 25', o2: '25', wvtr: '1' },
  { material: 'VMPET 12', o2: '2', wvtr: '2' },
  { material: 'AL 7', o2: '1', wvtr: '1.4' },
];

const propertiesData2 = [
  { material: 'AL 9', o2: '1', wvtr: '1.1' },
  { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
  { material: 'KOP 21', o2: '10', wvtr: '4' },
  { material: 'KNY 17', o2: '8', wvtr: '12' },
  { material: 'KPET 12', o2: '8', wvtr: '12' },
  { material: 'PEARL 30', o2: '2200', wvtr: '9' },
  { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
];

const localTranslations = {
  en: {
    seo: {
      title: "Flexible Packaging Material Barrier Properties Data Sheet | Achieve Pack",
      description: "Technical data sheet detailing Oxygen Transmission Rate (O2 TR) and Water Vapor Transmission Rate (WVTR) for transparent, metallized, and kraft pouch materials.",
      keywords: ['O2 TR', 'WVTR', 'barrier properties', 'aluminum foil barrier', 'packaging transmission rate', 'VMPET barrier', 'KOP barrier'],
      heroTitle: "Material Barrier Properties Data Sheet",
      heroSubtitle: "Technical Comparison of Oxygen and Water Vapor Transmission Rates (OTR & WVTR)",
      heroImageAlt: "Technical representation of material barrier characteristics",
      introSummary: "A comprehensive technical reference sheet providing statistical averages for O₂ TR and WVTR across common flexible packaging material layers.",
      ctaTitle: "Need Help Choosing the Right Barrier?",
      ctaDescription: "Still confused about OTR and WVTR values? Contact our packaging engineers to find the precise material combination suited for your product's exact shelf-life requirements.",
      ctaButton: "Contact Technical Support"
    },
    sections: {
      metrics: {
        title: "Understanding Barrier Metrics",
        o2Title: "O₂ Transmission Rate (O₂ TR)",
        o2Desc: "Oxygen barrier performance.",
        o2Unit: "Unit: cc/m² · 24hrs · atm (at 23°C, 0% RH)",
        o2Note: "*Lower values indicate better oxygen barrier",
        wvtrTitle: "Water Vapor Trans. Rate (WVTR)",
        wvtrDesc: "Moisture barrier performance.",
        wvtrUnit: "Unit: g/m² · 24hrs (at 38°C, 90% RH)",
        wvtrNote: "*Lower values indicate better moisture barrier"
      },
      propertiesData: {
        title: "Barrier Properties by Material",
        note: "Values presented below are typical industry averages and may vary slightly based on specific film manufacturer, thickness tolerances, and exact environmental conditions during testing.",
        thMaterial: "Material",
        thO2: "O₂ TR",
        o2Cond: "cc/m² 24hrs\n23°C, 0% RH",
        thWvtr: "WVTR",
        wvtrCond: "g/m² 24hrs\n38°C, 90% RH"
      },
      insights: {
        title: "Key Insights & Abbreviations",
        i1Title: "Standard Transparent Films (PET / NY / OPP)",
        i1Text: "PET and NY offer significantly better oxygen barrier out-of-the-box compared to standard OPP.",
        i2Title: "Metallized Films (VMCPP / VMPET)",
        i2Text: "Vacuum Metallized films vastly improve both moisture and oxygen barriers simultaneously, turning transparent films into high-barrier competitive options.",
        i3Title: "Aluminum Foil (AL)",
        i3Text: "The absolute highest barrier available against oxygen and moisture, effectively reducing both transmission values down to ~1. Cannot be seen through.",
        i4Title: "PVDC Coated (KOP, KNY, KPET)",
        i4Text: "The \"K\" prefix denotes PVDC (Polyvinylidene chloride) coating, which dramatically seals the barrier properties of standard transparent films while retaining full clarity."
      }
    },
    faqs: [
      { question: 'What does WVTR stand for?', answer: 'Water Vapor Transmission Rate. It measures how much moisture can pass through the material over a 24-hour period. Lower numbers mean a better moisture barrier.' },
      { question: 'What does O2 TR stand for?', answer: 'Oxygen Transmission Rate. It measures how much oxygen passes through the material over 24 hours. A lower number indicates a stronger oxygen barrier, crucial for keeping food fresh.' },
      { question: 'Which material provides the absolute highest barrier?', answer: 'Aluminum Foil (AL 7 or AL 9) provides the best overall barrier against both oxygen and moisture, reducing transmission rates to near zero (~1).' },
      { question: 'Can I have a high barrier but remain transparent?', answer: 'Yes! Materials treated with PVDC (like KOP, KNY, KPET) or Aluminum Oxide (AlOx) coatings offer very strong barriers while keeping the film completely see-through.' }
    ],
    links: {
      low: "Low Barrier Guide",
      lowDesc: "Learn about low barrier options.",
      medium: "Medium Barrier Guide",
      mediumDesc: "Learn about medium barrier options.",
      high: "High Barrier Guide",
      highDesc: "Learn about high barrier options.",
      dataSheet: "Material Data Sheet",
      dataSheetDesc: "View structural data sheets."
    }
  },
  'zh-tw': {
    seo: {
      title: "軟包裝材料阻隔性能技術數據表 | Achieve Pack",
      description: "詳細記錄透明薄膜、金屬化鍍膜及牛皮紙袋材料透氧率 (O₂ TR) 與透濕率 (WVTR) 的技術數據表。",
      keywords: ['O2 TR', 'WVTR', '阻隔性能', '鋁箔阻隔', '包裝透氣率', 'VMPET阻隔', 'KOP阻隔'],
      heroTitle: "材料阻隔性能技術數據表",
      heroSubtitle: "透氧率 (OTR) 與透濕率 (WVTR) 專業技術指標對比",
      heroImageAlt: "包裝材料阻隔特性的技術數據示意圖",
      introSummary: "權威技術參考數據表，提供常見軟包裝材料薄膜層在標準測試條件下的 O₂ TR 及 WVTR 統計平均數據。",
      ctaTitle: "需要幫助選擇正確的阻隔層嗎？",
      ctaDescription: "對 OTR 和 WVTR 數值感到困惑？聯繫我們的包裝工程師，為您的產品精確保質期需求找到最適合的材料組合。",
      ctaButton: "聯繫技術支援專家"
    },
    sections: {
      metrics: {
        title: "理解阻隔性能測試指標",
        o2Title: "透氧率 (O₂ TR)",
        o2Desc: "氧氣阻隔性能指標。",
        o2Unit: "單位: cc/m² · 24小時 · atm (於 23°C, 0% RH)",
        o2Note: "*數值越低代表阻隔氧氣能力越強",
        wvtrTitle: "透濕率 (WVTR)",
        wvtrDesc: "水氣/濕氣阻隔性能指標。",
        wvtrUnit: "單位: g/m² · 24小時 (於 38°C, 90% RH)",
        wvtrNote: "*數值越低代表防潮阻濕能力越強"
      },
      propertiesData: {
        title: "各類材料阻隔性能數據表",
        note: "下方數據為行業典型平均值。因具體薄膜生產商、厚度公差及測試時的精確環境條件不同，數值可能會有些許微幅差異。",
        thMaterial: "材料名稱",
        thO2: "透氧率 O₂ TR",
        o2Cond: "cc/m² 24小時\n23°C, 0% RH",
        thWvtr: "透濕率 WVTR",
        wvtrCond: "g/m² 24小時\n38°C, 90% RH"
      },
      insights: {
        title: "核心技術洞察與縮寫說明",
        i1Title: "標準透明薄膜 (PET / NY / OPP)",
        i1Text: "在未經特殊鍍膜的情況下，PET 和 NY（尼龍）的初始隔氧性能顯著優於標準 OPP 薄膜。",
        i2Title: "金屬化鍍膜薄膜 (VMCPP / VMPET)",
        i2Text: "真空鍍鋁薄膜能同時大幅度提升水氣與氧氣的阻隔能力，使透明薄膜具備極強的高阻隔競爭力。",
        i3Title: "純鋁箔 (AL)",
        i3Text: "現有防氧防潮阻隔性能最高峰的材料，能將兩項穿透率數值均壓低至 ~1 左右，具備完全避光性。",
        i4Title: "PVDC 塗層材料 (KOP, KNY, KPET)",
        i4Text: "\"K\" 前綴代表塗覆 PVDC (聚偏二氯乙烯) 塗層，能在完全保持薄膜高度透明清晰的同時，極大化封鎖材料的透氣率。"
      }
    },
    faqs: [
      { question: 'WVTR 代表什麼？', answer: 'WVTR (Water Vapor Transmission Rate) 代表透濕率。它測量 24 小時內穿過材料的水氣量，數值越低表示防潮性能越佳。' },
      { question: 'O2 TR 代表什麼？', answer: 'O2 TR (Oxygen Transmission Rate) 代表透氧率。它測量 24 小時內穿過材料的氧氣量，數值越低代表隔氧能力越強，對保持食品新鮮至關重要。' },
      { question: '哪種材料能提供最高等級的阻隔？', answer: '純鋁箔 (AL 7 或 AL 9) 提供最高等級的綜合防氧防潮阻隔，能將透過率降低至接近零 (~1)。' },
      { question: '可以在保持高阻隔的同時實現完全透明嗎？', answer: '可以！經過 PVDC 塗層處理（如 KOP、KNY、KPET）或氧化鋁 (AlOx) 塗層處理的材料，可以在維持全透明視覺的同時提供強大的阻隔性能。' }
    ],
    links: {
      low: "低阻隔指南",
      lowDesc: "了解低阻隔選項與應用。",
      medium: "中阻隔指南",
      mediumDesc: "了解中阻隔選項與應用。",
      high: "高阻隔指南",
      highDesc: "了解高阻隔選項與應用。",
      dataSheet: "材料數據表",
      dataSheetDesc: "查看結構數據表。"
    }
  },
  fr: {
    seo: {
      title: "Fiche Technique des Propriétés Barrières des Emballages Souples | Achieve Pack",
      description: "Fiche technique détaillée sur le taux de transmission de l'oxygène (O2 TR) et de la vapeur d'eau (WVTR) pour les films transparents, métallisés et papier kraft.",
      keywords: ['O2 TR', 'WVTR', 'propriétés barrières', 'barrière feuille aluminium', 'taux transmission emballage', 'barrière VMPET', 'barrière KOP'],
      heroTitle: "Fiche Technique des Propriétés Barrières des Matériaux",
      heroSubtitle: "Comparaison Technique des Taux de Transmission de l'Oxygène et de la Vapeur d'Eau (OTR & WVTR)",
      heroImageAlt: "Représentation technique des caractéristiques barrières des matériaux",
      introSummary: "Fiche de référence technique complète fournissant les moyennes statistiques d'O₂ TR et de WVTR sur les couches de matériaux d'emballage souple.",
      ctaTitle: "Besoin d'aide pour choisir la bonne barrière ?",
      ctaDescription: "Des questions sur les valeurs OTR et WVTR ? Contactez nos ingénieurs en emballage pour trouver la combinaison idéale adaptée à votre durée de conservation.",
      ctaButton: "Contacter le Support Technique"
    },
    sections: {
      metrics: {
        title: "Comprendre les Indicateurs Barrières",
        o2Title: "Taux de Transmission O₂ (O₂ TR)",
        o2Desc: "Performance barrière à l'oxygène.",
        o2Unit: "Unité: cc/m² · 24h · atm (à 23°C, 0% RH)",
        o2Note: "*Une valeur plus basse indique une meilleure barrière à l'oxygène",
        wvtrTitle: "Taux Trans. Vapeur d'Eau (WVTR)",
        wvtrDesc: "Performance barrière à l'humidité.",
        wvtrUnit: "Unité: g/m² · 24h (à 38°C, 90% RH)",
        wvtrNote: "*Une valeur plus basse indique une meilleure barrière à l'humidité"
      },
      propertiesData: {
        title: "Propriétés Barrières par Matériau",
        note: "Les valeurs présentées ci-dessous sont des moyennes industrielles typiques et peuvent varier légèrement selon le fabricant de film, les tolérances d'épaisseur et les conditions environnementales exactes lors des tests.",
        thMaterial: "Matériau",
        thO2: "O₂ TR",
        o2Cond: "cc/m² 24h\n23°C, 0% RH",
        thWvtr: "WVTR",
        wvtrCond: "g/m² 24h\n38°C, 90% RH"
      },
      insights: {
        title: "Informations Clés & Abréviations",
        i1Title: "Films Transparents Standards (PET / NY / OPP)",
        i1Text: "Le PET et le NY (Nylon) offrent une barrière à l'oxygène nettement supérieure au film OPP standard.",
        i2Title: "Films Métallisés (VMCPP / VMPET)",
        i2Text: "Les films métallisés sous vide améliorent considérablement la barrière à l'humidité et à l'oxygène, transformant les films clairs en options haute barrière compétitives.",
        i3Title: "Feuille d'Aluminium Pur (AL)",
        i3Text: "La barrière absolue la plus élevée contre l'oxygène et l'humidité, réduisant les valeurs de transmission à ~1.",
        i4Title: "Enduction PVDC (KOP, KNY, KPET)",
        i4Text: "Le préfixe \"K\" indique une couche de PVDC (Polychlorure de vinylidène), scellant fortement la perméabilité des films tout en conservant une parfaite transparence."
      }
    },
    faqs: [
      { question: 'Que signifie WVTR ?', answer: 'Taux de Transmission de la Vapeur d\'Eau. Il mesure la quantité d\'humidité traversant le matériau en 24 heures. Un chiffre bas indique une meilleure étanchéité.' },
      { question: 'Que signifie O2 TR ?', answer: 'Taux de Transmission de l\'Oxygène. Il mesure la quantité d\'oxygène traversant le matériau sur 24 heures, essentielle pour préserver la fraîcheur alimentaire.' },
      { question: 'Quel matériau offre la barrière la plus élevée ?', answer: 'La feuille d\'aluminium (AL 7 ou AL 9) offre la meilleure barrière globale, réduisant la perméabilité à un niveau proche de zéro (~1).' },
      { question: 'Peut-on combiner haute barrière et transparence ?', answer: 'Oui ! Les matériaux traités avec du PVDC (KOP, KNY, KPET) ou de l\'Oxide d\'Aluminium (AlOx) offrent de très fortes barrières tout en restant totalement transparents.' }
    ],
    links: {
      low: "Guide Faible Barrière",
      lowDesc: "Découvrez les options faible barrière.",
      medium: "Guide Barrière Moyenne",
      mediumDesc: "Découvrez les options barrière moyenne.",
      high: "Guide Haute Barrière",
      highDesc: "Découvrez les options haute barrière.",
      dataSheet: "Fiche Technique Matériaux",
      dataSheetDesc: "Consultez les fiches de structure."
    }
  },
  es: {
    seo: {
      title: "Ficha Técnica de Propiedades de Barrera de Materiales de Empaque | Achieve Pack",
      description: "Ficha técnica detallada del Tasa de Transmisión de Oxígeno (O2 TR) y Tasa de Transmisión de Vapor de Agua (WVTR) para bolsas transparentes, metalizadas y kraft.",
      keywords: ['O2 TR', 'WVTR', 'propiedades de barrera', 'barrera papel aluminio', 'tasa transmision empaque', 'barrera VMPET', 'barrera KOP'],
      heroTitle: "Ficha Técnica de Propiedades de Barrera",
      heroSubtitle: "Comparativa Técnica de Tasas de Transmisión de Oxígeno y Vapor de Agua (OTR & WVTR)",
      heroImageAlt: "Representación técnica de las características de barrera de los materiales",
      introSummary: "Una ficha de referencia técnica completa que proporciona promedios estadísticos de O₂ TR y WVTR para capas de materiales de empaque flexible.",
      ctaTitle: "¿Necesita ayuda para elegir la barrera adecuada?",
      ctaDescription: "¿Confundido con los valores OTR y WVTR? Contacte a nuestros ingenieros de empaque para encontrar la combinación exacta idónea para la vida útil de su producto.",
      ctaButton: "Contactar a Soporte Técnico"
    },
    sections: {
      metrics: {
        title: "Entendiendo las Métricas de Barrera",
        o2Title: "Tasa de Transmisión de O₂ (O₂ TR)",
        o2Desc: "Rendimiento de barrera al oxígeno.",
        o2Unit: "Unidad: cc/m² · 24hrs · atm (a 23°C, 0% RH)",
        o2Note: "*Valores menores indican mejor barrera al oxígeno",
        wvtrTitle: "Tasa Trans. Vapor de Agua (WVTR)",
        wvtrDesc: "Rendimiento de barrera a la humedad.",
        wvtrUnit: "Unidad: g/m² · 24hrs (a 38°C, 90% RH)",
        wvtrNote: "*Valores menores indican mejor barrera a la humedad"
      },
      propertiesData: {
        title: "Propiedades de Barrera por Material",
        note: "Los valores presentados son promedios industriales típicos y pueden variar ligeramente según el fabricante de la película, tolerancias de grosor y condiciones ambientales durante las pruebas.",
        thMaterial: "Material",
        thO2: "O₂ TR",
        o2Cond: "cc/m² 24hrs\n23°C, 0% RH",
        thWvtr: "WVTR",
        wvtrCond: "g/m² 24hrs\n38°C, 90% RH"
      },
      insights: {
        title: "Puntos Clave y Abreviaturas",
        i1Title: "Películas Transparentes Estándar (PET / NY / OPP)",
        i1Text: "El PET y el NY (Nylon) ofrecen una barrera al oxígeno significativamente mejor en comparación con el OPP estándar.",
        i2Title: "Películas Metalizadas (VMCPP / VMPET)",
        i2Text: "Las películas metalizadas al vacío mejoran drásticamente las barreras contra la humedad y el oxígeno simultáneamente.",
        i3Title: "Papel de Aluminio Puro (AL)",
        i3Text: "La barrera absoluta más alta disponible contra oxígeno y humedad, reduciendo la transmisión a valores cercanos a ~1.",
        i4Title: "Recubrimiento PVDC (KOP, KNY, KPET)",
        i4Text: "El prefijo \"K\" indica recubrimiento de PVDC (Policloruro de vinilideno), sellando la barrera de las películas transparentes manteniendo la claridad."
      }
    },
    faqs: [
      { question: '¿Qué significa WVTR?', answer: 'Tasa de Transmisión de Vapor de Agua. Mide cuánta humedad atraviesa el material en 24 horas. Números menores indican mejor barrera a la humedad.' },
      { question: '¿Qué significa O2 TR?', answer: 'Tasa de Transmisión de Oxígeno. Mide cuánto oxígeno atraviesa el material en 24 horas, vital para preservar la frescura de los alimentos.' },
      { question: '¿Qué material ofrece la barrera más alta?', answer: 'El Papel de Aluminio (AL 7 o AL 9) ofrece la mejor barrera contra oxígeno y humedad, reduciendo la transmisión a casi cero (~1).' },
      { question: '¿Es posible tener alta barrera y mantener la transparencia?', answer: '¡Sí! Los materiales tratados con recubrimientos de PVDC (como KOP, KNY, KPET) u Óxido de Aluminio (AlOx) brindan barreras muy fuertes sin perder visibilidad.' }
    ],
    links: {
      low: "Guía de Barrera Baja",
      lowDesc: "Conozca opciones de barrera baja.",
      medium: "Guía de Barrera Media",
      mediumDesc: "Conozca opciones de barrera media.",
      high: "Guía de Alta Barrera",
      highDesc: "Conozca opciones de alta barrera.",
      dataSheet: "Ficha Técnica de Materiales",
      dataSheetDesc: "Ver fichas estructurales."
    }
  }
}

const MaterialBarrierPropertiesPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const sections = [
    {
      id: 'understanding-barriers',
      title: tLocal.sections.metrics.title,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Wind className="w-4 h-4" />
              </div>
              <h3 className="bg-transparent font-bold text-blue-900 border-none inline-block pb-0 mb-0">{tLocal.sections.metrics.o2Title}</h3>
            </div>
            <p className="text-sm text-blue-800 mb-2">{tLocal.sections.metrics.o2Desc}</p>
            <div className="text-xs font-mono bg-white border border-blue-100 px-3 py-2 rounded text-blue-700">
              {tLocal.sections.metrics.o2Unit}
            </div>
            <p className="text-xs text-blue-600 mt-2 italic">{tLocal.sections.metrics.o2Note}</p>
          </div>

          <div className="bg-primary-50 border border-primary-100 p-5 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Droplets className="w-4 h-4" />
              </div>
              <h3 className="bg-transparent font-bold text-primary-900 border-none inline-block pb-0 mb-0">{tLocal.sections.metrics.wvtrTitle}</h3>
            </div>
            <p className="text-sm text-primary-800 mb-2">{tLocal.sections.metrics.wvtrDesc}</p>
            <div className="text-xs font-mono bg-white border border-primary-100 px-3 py-2 rounded text-primary-700">
              {tLocal.sections.metrics.wvtrUnit}
            </div>
            <p className="text-xs text-primary-600 mt-2 italic">{tLocal.sections.metrics.wvtrNote}</p>
          </div>
        </div>
      )
    },
    {
      id: 'properties-data',
      title: tLocal.sections.propertiesData.title,
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 mb-4">{tLocal.sections.propertiesData.note}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Table 1 */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700 text-sm">
                    <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">{tLocal.sections.propertiesData.thMaterial}</th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">{tLocal.sections.propertiesData.thO2}<br/><span className="text-[10px] font-normal leading-tight block text-blue-600 whitespace-pre-line">{tLocal.sections.propertiesData.o2Cond}</span></th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">{tLocal.sections.propertiesData.thWvtr}<br/><span className="text-[10px] font-normal leading-tight block text-primary-600 whitespace-pre-line">{tLocal.sections.propertiesData.wvtrCond}</span></th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {propertiesData1.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="p-3 border-b border-neutral-100 font-medium text-sm">{row.material}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.o2}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table 2 */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm h-fit">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-700 text-sm">
                    <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">{tLocal.sections.propertiesData.thMaterial}</th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">{tLocal.sections.propertiesData.thO2}<br/><span className="text-[10px] font-normal leading-tight block text-blue-600 whitespace-pre-line">{tLocal.sections.propertiesData.o2Cond}</span></th>
                    <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">{tLocal.sections.propertiesData.thWvtr}<br/><span className="text-[10px] font-normal leading-tight block text-primary-600 whitespace-pre-line">{tLocal.sections.propertiesData.wvtrCond}</span></th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  {propertiesData2.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="p-3 border-b border-neutral-100 font-medium text-sm">{row.material}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.o2}</td>
                      <td className="p-3 border-b border-neutral-100 text-center font-mono text-xs">{row.wvtr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'insights',
      title: tLocal.sections.insights.title,
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-white border border-neutral-200 p-6 rounded-xl mt-4">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">{tLocal.sections.insights.i1Title}</strong> {tLocal.sections.insights.i1Text}</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">{tLocal.sections.insights.i2Title}</strong> {tLocal.sections.insights.i2Text}</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">{tLocal.sections.insights.i3Title}</strong> {tLocal.sections.insights.i3Text}</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
              <div className="text-neutral-700"><strong className="text-neutral-900 block mb-1">{tLocal.sections.insights.i4Title}</strong> {tLocal.sections.insights.i4Text}</div>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const faqs = tLocal.faqs

  const relatedLinks = [
    { title: tLocal.links.low, url: "/features/low-barrier", description: tLocal.links.lowDesc },
    { title: tLocal.links.medium, url: "/features/medium-barrier", description: tLocal.links.mediumDesc },
    { title: tLocal.links.high, url: "/features/high-barrier", description: tLocal.links.highDesc },
    { title: tLocal.links.dataSheet, url: "/materials/data-sheet", description: tLocal.links.dataSheetDesc }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={tLocal.seo.title}
        description={tLocal.seo.description}
        keywords={tLocal.seo.keywords}
        canonicalUrl="https://achievepack.com/features/material-barrier-properties"
        heroTitle={tLocal.seo.heroTitle}
        heroSubtitle={tLocal.seo.heroSubtitle}
        heroImage="/imgs/seo-photos/a_high_barrier_premium_protection_0120312.webp"
        heroImageAlt={tLocal.seo.heroImageAlt}
        introSummary={tLocal.seo.introSummary}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={tLocal.seo.ctaTitle}
        ctaDescription={tLocal.seo.ctaDescription}
        ctaButtonText={tLocal.seo.ctaButton}
        ctaButtonUrl="/contact"
      />
    </>
  )
}

export default MaterialBarrierPropertiesPage;
