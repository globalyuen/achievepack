import React from 'react'
import { Layers, Award, Package, CheckCircle, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'

interface LocalTranslation {
  title: string
  description: string
  keywords: string[]
  heroTitle: string
  heroSubtitle: string
  introSummary: string
  sections: {
    overview: {
      title: string
      summaryStrong: string
      summaryRest: string
      advantagesTitle: string
      advantages: { label: string; detail: string }[]
    }
    technology: {
      title: string
      summary: string
      printExcellenceTitle: string
      printExcellenceItems: string[]
      specialEffectsTitle: string
      specialEffectsItems: string[]
    }
    applications: {
      title: string
      summary: string
      items: string[]
    }
    finishes: {
      title: string
      summary: string
      surfaceFinishesTitle: string
      surfaceFinishesItems: string[]
      premiumEffectsTitle: string
      premiumEffectsItems: string[]
      securityFeaturesTitle: string
      securityFeaturesItems: string[]
    }
    order: {
      title: string
      cards: {
        value: string
        label: string
      }[]
      note: string
    }
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedLinks: {
    title: string
    url: string
    description: string
  }[]
  cta: {
    title: string
    description: string
    button: string
  }
}

const localTranslations: Record<string, LocalTranslation> = {
  en: {
    title: "Rotogravure Plate Printing | Up to 10 Colors | Achieve Pack",
    description: "High-volume rotogravure printing for eco-friendly pouches. Up to 10 spot colors, metallic inks, spot UV, and hot foil stamping. Best unit cost for orders 10,000+.",
    keywords: ['gravure printing', 'plate printing pouches', 'rotogravure packaging', 'metallic ink printing', 'high volume packaging', 'premium pouch printing'],
    heroTitle: "Rotogravure Plate Pouch Printing",
    heroSubtitle: "Up to 10 spot colors, metallic & specialty inks, and lowest unit costs for high-volume flexible packaging production.",
    introSummary: "Scale your packaging volume with Achieve Pack's high-precision rotogravure plate printing technology. Engineered for established brands needing flawless color consistency, premium finishes, and maximum cost efficiency on large runs.",
    sections: {
      overview: {
        title: "Rotogravure Plate Printing Overview",
        summaryStrong: "Achieve Pack's rotogravure plate printing delivers exceptional quality for high-volume production runs.",
        summaryRest: "With up to 10 spot colors, metallic inks, and premium finishes, plate printing is the choice for established brands seeking maximum shelf impact.",
        advantagesTitle: "Plate Printing Advantages:",
        advantages: [
          { label: "Up to 10 spot colors", detail: "Including Pantone matching, metallics, and fluorescents" },
          { label: "Lowest unit cost", detail: "Economies of scale for orders 10,000+ units" },
          { label: "Premium finishes", detail: "Matte, gloss, soft-touch, spot UV, hot foil stamping" },
          { label: "Consistent quality", detail: "Precise registration across millions of impressions" },
          { label: "Large format capability", detail: "Up to 1200mm web width for oversized pouches" }
        ]
      },
      technology: {
        title: "Rotogravure Technical Excellence",
        summary: "Our state-of-the-art gravure presses deliver unmatched print quality:",
        printExcellenceTitle: "Print Excellence",
        printExcellenceItems: [
          "175-200 LPI screen for fine detail",
          "Laser-engraved chrome cylinders",
          "Sub-0.1mm registration accuracy",
          "Consistent ink density across run"
        ],
        specialEffectsTitle: "Special Effects",
        specialEffectsItems: [
          "Metallic gold, silver, copper inks",
          "Spot UV and matte varnish",
          "Hot foil stamping and embossing",
          "Holographic and security features"
        ]
      },
      applications: {
        title: "Ideal Applications",
        summary: "Plate printing is ideal for:",
        items: [
          "Established Brands (10,000+ units)",
          "National Retail Distribution",
          "Premium Product Lines",
          "Metallic & Specialty Colors",
          "Long-Term Supply Contracts",
          "Private Label Manufacturing",
          "Luxury Food & Beverage",
          "Export & Multi-Market Products",
          "High-Volume Subscription Boxes"
        ]
      },
      finishes: {
        title: "Finishing & Coating Options",
        summary: "Elevate your packaging with our finishing options:",
        surfaceFinishesTitle: "Surface Finishes",
        surfaceFinishesItems: ["Gloss lamination", "Matte lamination", "Soft-touch coating", "Anti-scuff varnish"],
        premiumEffectsTitle: "Premium Effects",
        premiumEffectsItems: ["Spot UV highlight", "Hot foil stamping", "Embossing/debossing", "Registered metallics"],
        securityFeaturesTitle: "Security Features",
        securityFeaturesItems: ["Holographic strips", "UV-reactive inks", "Micro-text printing", "QR authentication"]
      },
      order: {
        title: "Order Information",
        cards: [
          { value: "5,000", label: "Minimum Order (pcs)" },
          { value: "10", label: "Max Spot Colors" },
          { value: "4-6", label: "Weeks Lead Time" }
        ],
        note: "*Plate costs typically range from $500-2000 depending on number of colors and cylinder size. Plates are stored free for 2 years for repeat orders."
      }
    },
    faqs: [
      {
        question: "How much do printing plates cost?",
        answer: "Plate costs vary based on pouch size and number of colors. Typical costs range from $50-200 per color cylinder. A 6-color job on a standard pouch size would cost approximately $600-1200 for plates. Plates are stored free for 2 years, making repeat orders much more economical."
      },
      {
        question: "What's the minimum order for plate printing?",
        answer: "Our minimum order for rotogravure plate printing is 5,000 units. For smaller quantities (500-5000), we recommend digital printing which has no plate costs. For orders above 10,000 units, plate printing typically becomes more cost-effective."
      },
      {
        question: "Can I use metallic Pantone colors?",
        answer: "Yes, our gravure printing supports metallic Pantone colors including golds, silvers, and copper. We can also print with metallic base inks overlaid with transparent colors for unique effects. Metallic inks count as spot colors in your design."
      },
      {
        question: "How long are plates stored for reorders?",
        answer: "We store your printing cylinders free of charge for 2 years from the last order. After 2 years of inactivity, we'll contact you before disposal. For active accounts, plates are stored indefinitely at no additional cost."
      }
    ],
    relatedLinks: [
      { title: "Digital Printing", url: "/printing/digital-printing", description: "Low MOQ option for small batches" },
      { title: "Surface Finish Options", url: "/features/surface-finish", description: "Matte, gloss, soft-touch finishes" },
      { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium shelf presence format" }
    ],
    cta: {
      title: "Ready for High-Volume Gravure Plate Printing?",
      description: "Achieve the lowest unit costs and unmatched print quality for your large-scale pouch orders. Contact our team for a custom quote!",
      button: "Get Plate Printing Quote"
    }
  },
  'zh-tw': {
    title: "電雕凹版印刷 | 高達 10 色專色印刷 | Achieve Pack",
    description: "適合大批量生產的凹版印刷服務。支援高達 10 色專色、金屬墨水、局部 UV 與燙金工藝。訂單達 10,000 個以上享有最佳單價成本。",
    keywords: ['凹版印刷', '銅版袋印刷', '凹版包裝袋', '金屬墨印刷', '大批量包裝生產', '高級軟包裝印刷'],
    heroTitle: "電雕凹版包裝袋印刷",
    heroSubtitle: "支援高達 10 色專色印刷、金屬與特殊墨水，為大批量軟包裝生產提供最低的單價成本。",
    introSummary: "透過 Achieve Pack 精密的電雕凹版印刷技術擴大您的生產規模。專為需要極致色彩一致性、高級工藝效果和大批量成本優勢的成熟品牌打造。",
    sections: {
      overview: {
        title: "電雕凹版印刷方案",
        summaryStrong: "Achieve Pack 的電雕凹版印刷為大批量生產提供無可比擬的精細品質。",
        summaryRest: "支援高達 10 色專色印刷、金屬墨水及高級表面處理工藝，是成熟品牌打造貨架視覺衝擊力的最佳選擇。",
        advantagesTitle: "凹版印刷優勢：",
        advantages: [
          { label: "高達 10 色專色印製", detail: "包含精準 Pantone 色彩比對、金屬色及螢光墨水" },
          { label: "極低單價成本", detail: "訂量達 10,000 個以上展現極高規模經濟效應" },
          { label: "高級特殊工藝", detail: "啞光/亮光、觸感膜 (Soft-touch)、局部 UV、熱燙金/燙銀" },
          { label: "品質穩定一致", detail: "百萬張印刷套印精準度高，全批次無色差" },
          { label: "大尺寸印刷能力", detail: "印膜寬度高達 1200mm，輕鬆對應超大尺寸包裝袋" }
        ]
      },
      technology: {
        title: "凹版工藝技術精髓",
        summary: "我們引進的高端凹版印刷機，展現卓越不凡的印刷質感：",
        printExcellenceTitle: "極致印刷品質",
        printExcellenceItems: [
          "175-200 LPI 高網線率，呈現超細致網點與線條細節",
          "激光電雕鍍鉻銅輥，耐磨且圖案層次分明",
          "小於 0.1mm 的超高對位套印精確度",
          "全程自動控墨，確保墨色濃度極度均勻"
        ],
        specialEffectsTitle: "特殊效果與墨水",
        specialEffectsItems: [
          "金屬金、銀、銅專色墨水",
          "局部亮光 UV 與啞光清漆對比效果",
          "熱燙金 (Hot Foil Stamping) 與壓紋工藝",
          "雷射防偽標籤與安全防偽印刷"
        ]
      },
      applications: {
        title: "最佳應用場景",
        summary: "凹版印刷最適合以下需求：",
        items: [
          "成熟品牌大貨生產 (10,000 個以上)",
          "全國性零售通路與超市上架",
          "高端精品級產品線",
          "包含金屬色與特殊專色設計",
          "長期穩定供貨合約",
          "代工製造 (OEM/ODM Private Label)",
          "奢華食品與精品飲料包裝",
          "外銷與多國市場通用包裝",
          "高訂閱量訂閱盒專用袋"
        ]
      },
      finishes: {
        title: "表面處理與塗層選擇",
        summary: "透過多樣化的工藝選項提升您包裝的質感與檔次：",
        surfaceFinishesTitle: "基礎表面工藝",
        surfaceFinishesItems: ["亮光覆膜 (Gloss)", "啞光覆膜 (Matte)", "膚感/絲絨觸感膜", "防刮傷亮光漆"],
        premiumEffectsTitle: "高級特效工藝",
        premiumEffectsItems: ["局部亮光 UV (Spot UV)", "燙金 / 燙銀 (Hot Stamping)", "打凸 / 壓紋 (Embossing)", "對位金屬效果"],
        securityFeaturesTitle: "防偽安全功能",
        securityFeaturesItems: ["雷射防偽條帶", "UV 螢光感光墨水", "微縮文字印刷", "防偽 QR Code 驗證"]
      },
      order: {
        title: "訂購資訊",
        cards: [
          { value: "5,000", label: "最低起訂量 (個)" },
          { value: "10", label: "最高專色數 (色)" },
          { value: "4-6", label: "週生產週期" }
        ],
        note: "*印版/版輥費用通常在 $500-$2000 美金之間，取決於色數與版輥尺寸。續訂客戶可享有 2 年免費印版保管服務。"
      }
    },
    faqs: [
      {
        question: "印刷版輥（印版）費用如何計算？",
        answer: "印版費用取決於包裝袋尺寸與印刷顏色數量。每個顏色版輥費用約 $50-$200 美金不等。以標準袋型印製 6 色為例，印版總費用約為 $600-$1200 美金。印版享有 2 年免費保管，返單續訂無須再付版費。"
      },
      {
        question: "凹版印刷的最低起訂量 (MOQ) 是多少？",
        answer: "電雕凹版印刷的最低起訂量為 5,000 個。若數量在 500-5,000 個之間，建議採用免版費的數位印刷。當單次訂購量超過 10,000 個時，凹版印刷的單價成本將顯著下降。"
      },
      {
        question: "可以使用 Pantone 金屬色墨水嗎？",
        answer: "可以，我們的凹版印刷支援金屬金、銀、銅等 Pantone 金屬專色。我們也能使用金屬打底墨水疊印半透明色彩，創造出極具質感的金屬光澤效果。金屬墨水需算作獨立專色。"
      },
      {
        question: "版輥可以在工廠保管多久？",
        answer: "我們自您最後一次下單起免費為您保管印版 2 年。若超過 2 年未再續訂，我們在處置印版前會事先與您聯繫確認。對於常規下單的客戶，印版將永久免費儲存。"
      }
    ],
    relatedLinks: [
      { title: "數位印刷服務", url: "/printing/digital-printing", description: "適合小批量試產的免版費靈活選擇" },
      { title: "表面工藝選項", url: "/features/surface-finish", description: "啞光、亮光、觸感膜等質感比較" },
      { title: "平底方塊袋 (Flat Bottom)", url: "/packaging/flat-bottom-bags", description: "展現頂級貨架陳列效果的袋型" }
    ],
    cta: {
      title: "準備好開始大批量凹版印刷了嗎？",
      description: "為您的大批量包裝訂單獲取最低單價與絕佳品質。立即聯繫我們的專家團隊取得專屬報價！",
      button: "獲取凹版印刷報價"
    }
  },
  fr: {
    title: "Impression Héliogravure | Jusqu'à 10 Couleurs | Achieve Pack",
    description: "Héliogravure haute performance pour sachets écoresponsables. Jusqu'à 10 couleurs ton direct, encres métallisées, vernis sélectif et dorure à chaud. Meilleurs coûts.",
    keywords: ['héliogravure', 'impression sachets sur cliché', 'emballage héliogravure', 'impression encre métallisée', 'emballage grand volume', 'impression sachet haut de gamme'],
    heroTitle: "Impression sur Cliché Héliogravure",
    heroSubtitle: "Jusqu'à 10 couleurs ton direct, encres métalliques et coût unitaire minimal pour vos grandes séries d'emballages flexibles.",
    introSummary: "Augmentez votre volume de production d'emballages grâce à la technologie d'héliogravure haute précision d'Achieve Pack. Conçu pour les marques établies exigeant une constance chromatique irréprochable et des coûts unitaires optimisés.",
    sections: {
      overview: {
        title: "Présentation de l'Impression Héliogravure",
        summaryStrong: "L'impression par héliogravure d'Achieve Pack offre une qualité exceptionnelle pour les séries industrielles à grand volume.",
        summaryRest: "Avec jusqu'à 10 couleurs ton direct, des encres métalliques et des finitions premium, c'est le choix privilégié pour un impact maximal en rayon.",
        advantagesTitle: "Avantages de l'Héliogravure :",
        advantages: [
          { label: "Jusqu'à 10 couleurs ton direct", detail: "Gestion précise du nuancier Pantone, encres métallisées et fluo" },
          { label: "Coût unitaire minimal", detail: "Économies d'échelle maximales pour les commandes de 10 000+ unités" },
          { label: "Finitions haut de gamme", detail: "Finition mate, brillante, toucher doux (soft-touch), vernis sélectif, marquage à chaud" },
          { label: "Qualité constante", detail: "Repérage parfait et régularité de teinte sur des millions d'exemplaires" },
          { label: "Formats très grands", detail: "Impression sur laize allant jusqu'à 1200 mm pour grands sachets" }
        ]
      },
      technology: {
        title: "Excellence Technique de l'Héliogravure",
        summary: "Nos presses rotatives à héliogravure garantissent une qualité d'impression inégalée :",
        printExcellenceTitle: "Haute Précision",
        printExcellenceItems: [
          "Trame fine de 175-200 LPI pour un niveau de détail exceptionnel",
          "Cylindres en chrome gravés au laser",
          "Précision de repérage inférieure à 0,1 mm",
          "Densité d'encrage parfaitement uniforme tout au long du tirage"
        ],
        specialEffectsTitle: "Effets Spéciaux",
        specialEffectsItems: [
          "Encres métalliques or, argent et cuivre",
          "Vernis sélectif brillant sur fond mat",
          "Marquage à chaud (dorure) et gaufrage",
          "Bandes holographiques et fonctionnalités de sécurité"
        ]
      },
      applications: {
        title: "Applications Idéales",
        summary: "L'impression héliogravure convient particulièrement pour :",
        items: [
          "Marques bien établies (10 000+ sachets)",
          "Grande distribution nationale et internationale",
          "Gammes de produits premium et de luxe",
          "Graphismes nécessitant des couleurs métallisées",
          "Contrats d'approvisionnement récurrents",
          "Fabrication sous marque de distributeur",
          "Produits alimentaires et boissons haut de gamme",
          "Exportation et marchés multilingues",
          "Box d'abonnement à grand volume"
        ]
      },
      finishes: {
        title: "Options de Finitions et Pelliculage",
        summary: "Sublimez votre emballage avec nos options de finition :",
        surfaceFinishesTitle: "Finitions de Surface",
        surfaceFinishesItems: ["Pelliculage brillant", "Pelliculage mat", "Revêtement Soft-Touch (toucher doux)", "Vernis anti-rayures"],
        premiumEffectsTitle: "Effets Premium",
        premiumEffectsItems: ["Vernis UV sélectif", "Marquage à chaud (dorure)", "Gaufrage / Embossage", "Metallisation sélective"],
        securityFeaturesTitle: "Fonctionnalités de Sécurité",
        securityFeaturesItems: ["Bandes holographiques", "Encres réactives aux UV", "Impression micro-texte", "Authentification par QR Code"]
      },
      order: {
        title: "Informations de Commande",
        cards: [
          { value: "5 000", label: "Commande Minimale (pcs)" },
          { value: "10", label: "Couleurs Max" },
          { value: "4-6", label: "Semaines de Délai" }
        ],
        note: "*Le coût des clichés/cylindres varie généralement de 500 $ à 2000 $ selon le nombre de couleurs et la taille. Le stockage est offert pendant 2 ans pour vos réimpressions."
      }
    },
    faqs: [
      {
        question: "Combien coûtent les clichés d'impression ?",
        answer: "Le coût des cylindres dépend des dimensions du sachet et du nombre de couleurs. Comptez environ 50 $ à 200 $ par couleur. Pour un sachet standard à 6 couleurs, les clichés coûtent entre 600 $ et 1200 $. Ils sont conservés gratuitement pendant 2 ans."
      },
      {
        question: "Quelle est la quantité minimale pour l'héliogravure ?",
        answer: "Le minimum de commande est de 5 000 pièces. Pour des quantités plus faibles (500 à 5 000), nous recommandons l'impression numérique. Au-delà de 10 000 unités, l'héliogravure devient nettement plus rentable."
      },
      {
        question: "Puis-je utiliser des couleurs Pantone métallisées ?",
        answer: "Oui, notre procédé d'héliogravure prend en charge les teintes métallisées Pantone (or, argent, bronze). Nous pouvons également appliquer des couleurs transparentes sur sous-couche métallisée pour des effets uniques."
      },
      {
        question: "Combien de temps les cylindres sont-ils conservés ?",
        answer: "Nous stockons gratuitement vos cylindres pendant 2 ans à compter de la dernière commande. Pour les clients réguliers, le stockage est prolongé indéfiniment sans frais supplémentaires."
      }
    ],
    relatedLinks: [
      { title: "Impression Numérique", url: "/printing/digital-printing", description: "Option sans frais de cliché pour petites séries" },
      { title: "Options de Finitions Surface", url: "/features/surface-finish", description: "Comparatif des finitions mate, brillante et soft-touch" },
      { title: "Sachets à Fond Plat (Box Pouch)", url: "/packaging/flat-bottom-bags", description: "Format haut de gamme offrant une excellente tenue en rayon" }
    ],
    cta: {
      title: "Prêt pour votre impression héliogravure grand volume ?",
      description: "Bénéficiez du coût unitaire le plus bas et d'une qualité d'impression irréprochable pour vos sachets. Contactez nos experts pour votre devis sur mesure !",
      button: "Obtenir un Devis Héliogravure"
    }
  },
  es: {
    title: "Impresión por Rotograbado | Hasta 10 Colores | Achieve Pack",
    description: "Rotograbado de alto volumen para bolsas ecológicas. Hasta 10 colores directos, tintas metálicas, UV selectivo y estampado en caliente. El menor coste unitaire.",
    keywords: ['rotograbado bolsas', 'impresión con planchas', 'empaque en rotograbado', 'tintas metálicas empaque', 'impresión alto volumen', 'bolsas impresas premium'],
    heroTitle: "Impresión por Rotograbado (Cilindros)",
    heroSubtitle: "Hasta 10 colores Pantone/directos, tintas metálicas y el menor coste unitario para producciones de gran volumen.",
    introSummary: "Escale la producción de sus bolsas flexibles con la tecnología de impresión por rotograbado de alta precisión de Achieve Pack. Diseñada para marcas consolidadas que exigen máxima fidelidad cromática, acabados de lujo y máxima eficiencia en costes.",
    sections: {
      overview: {
        title: "Visión General del Rotograbado",
        summaryStrong: "La impresión por rotograbado de Achieve Pack ofrece una calidad excepcional para tiradas de gran volumen.",
        summaryRest: "Con hasta 10 colores directos, tintas metálicas y acabados de primera calidad, es la opción ideal para marcas que buscan el máximo impacto en el punto de venta.",
        advantagesTitle: "Ventajas del Rotograbado:",
        advantages: [
          { label: "Hasta 10 colores directos", detail: "Igualación exacta Pantone, tonos metálicos y fluorescentes" },
          { label: "Menor coste unitario", detail: "Máximas economías de escala para pedidos de 10.000+ unidades" },
          { label: "Acabados premium", detail: "Mate, brillo, tacto suave (soft-touch), barniz UV selectivo, estampado en caliente" },
          { label: "Calidad constante", detail: "Registro ultrapreciso en millones de impresiones" },
          { label: "Capacidad para gran formato", detail: "Impresión en bobina de hasta 1200 mm para bolsas gigantes" }
        ]
      },
      technology: {
        title: "Excelencia Técnica en Rotograbado",
        summary: "Nuestras rotativas de grabado garantizan una definición de impresión sin igual:",
        printExcellenceTitle: "Alta Precisión",
        printExcellenceItems: [
          "Trama lineal de 175-200 LPI para detalles de máxima precisión",
          "Cilindros de cromo grabados por láser",
          "Precisión de registro inferior a 0.1 mm",
          "Densidad de tinta totalmente uniforme durante la producción"
        ],
        specialEffectsTitle: "Efectos Especiales",
        specialEffectsItems: [
          "Tintas metálicas en oro, plata y cobre",
          "Barniz UV selectivo sobre acabado mate",
          "Estampado en caliente (foil) y relieve",
          "Tiras holográficas y características de seguridad"
        ]
      },
      applications: {
        title: "Aplicaciones Ideales",
        summary: "El rotograbado es perfecto para:",
        items: [
          "Marcas consolidadas (10.000+ unidades)",
          "Distribución en grandes cadenas de retail",
          "Líneas de productos premium",
          "Diseños con tintas metálicas o especiales",
          "Contratos de suministro a largo plazo",
          "Fabricación de marca blanca / marca de distribuidor",
          "Alimentos y bebidas de gama alta",
          "Productos de exportación y multimercado",
          "Cajas de suscripción con elevado volumen"
        ]
      },
      finishes: {
        title: "Opciones de Acabado y Laminación",
        summary: "Eleve la presencia de su producto con nuestros acabados superiores:",
        surfaceFinishesTitle: "Acabados de Superficie",
        surfaceFinishesItems: ["Laminado brillante", "Laminado mate", "Recubrimiento tacto suave (Soft-touch)", "Barniz antirrayaduras"],
        premiumEffectsTitle: "Efectos Premium",
        premiumEffectsItems: ["Barniz UV selectivo", "Estampado en caliente (stamping)", "Relieve / Gofrado", "Metalizado registrado"],
        securityFeaturesTitle: "Seguridad y Autenticidad",
        securityFeaturesItems: ["Bandas holográficas", "Tintas reactivas a la luz UV", "Impresión de microtexto", "Autenticación mediante código QR"]
      },
      order: {
        title: "Información de Pedido",
        cards: [
          { value: "5.000", label: "Pedido Mínimo (uds)" },
          { value: "10", label: "Máximo de Colores" },
          { value: "4-6", label: "Semanas de Entrega" }
        ],
        note: "*El coste de cilindros/planchas suele ser de $500-$2000 según cantidad de colores y tamaño. Se almacenan gratis durante 2 años para repeticiones."
      }
    },
    faqs: [
      {
        question: "¿Cuánto cuestan los cilindros de impresión?",
        answer: "El coste depende del tamaño de la bolsa y del número de colores. Cada cilindro cuesta entre $50 y $200. Un trabajo a 6 colores para una bolsa estándar cuesta entre $600 y $1200 en planchas. Las planchas se almacenan gratis durante 2 años."
      },
      {
        question: "¿Cuál es el pedido mínimo para impresión en rotograbado?",
        answer: "El pedido mínimo es de 5.000 unidades. Para volúmenes menores (500-5.000 uds), recomendamos impresión digital sin costes de planchas. Para pedidos superiores a 10.000 uds, el rotograbado resulta mucho más económico."
      },
      {
        question: "¿Puedo usar colores Pantone metálicos?",
        answer: "Sí, el rotograbado admite tintas metálicas Pantone como dorados, plateados y cobres. También aplicamos tintas de fondo metálico con capas de color transparente para lograr efectos brillantes exclusivos."
      },
      {
        question: "¿Durante cuánto tiempo se guardan las planchas?",
        answer: "Guardamos sus cilindros sin cargo adicional durante 2 años tras su último pedido. Transcurrido ese periodo de inactividad, nos pondremos en contacto antes de su reciclaje."
      }
    ],
    relatedLinks: [
      { title: "Impresión Digital", url: "/printing/digital-printing", description: "Opción de bajo MOQ sin coste de planchas" },
      { title: "Opciones de Acabado de Superficie", url: "/features/surface-finish", description: "Comparativa de acabados mate, brillo y tacto suave" },
      { title: "Bolsas de Fondo Plano (Flat Bottom)", url: "/packaging/flat-bottom-bags", description: "Formato de máximo impacto visual en estantería" }
    ],
    cta: {
      title: "¿Listo para su Impresión por Rotograbado a Gran Escala?",
      description: "Obtenga el menor coste unitario y la mayor calidad para sus pedidos de bolsas en gran volumen. ¡Contacte con nuestro equipo para su presupuesto!",
      button: "Obtener Presupuesto de Rotograbado"
    }
  }
}

const PlatePrintingPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const sections = [
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{tLocal.sections.overview.summaryStrong}</strong> {tLocal.sections.overview.summaryRest}
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">{tLocal.sections.overview.advantagesTitle}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {tLocal.sections.overview.advantages.map((adv, idx) => (
              <li key={idx}><strong>{adv.label}</strong> – {adv.detail}</li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'technology',
      title: tLocal.sections.technology.title,
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.technology.summary}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{tLocal.sections.technology.printExcellenceTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.sections.technology.printExcellenceItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{tLocal.sections.technology.specialEffectsTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.sections.technology.specialEffectsItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: tLocal.sections.applications.title,
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.applications.summary}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {tLocal.sections.applications.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'finishes',
      title: tLocal.sections.finishes.title,
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.finishes.summary}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.finishes.surfaceFinishesTitle}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                {tLocal.sections.finishes.surfaceFinishesItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.finishes.premiumEffectsTitle}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                {tLocal.sections.finishes.premiumEffectsItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">{tLocal.sections.finishes.securityFeaturesTitle}</h4>
              <ul className="text-sm space-y-1 text-neutral-600">
                {tLocal.sections.finishes.securityFeaturesItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: tLocal.sections.order.title,
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            {tLocal.sections.order.cards.map((card, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{card.value}</div>
                <div className="text-sm text-neutral-600">{card.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            {tLocal.sections.order.note}
          </p>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      heroBgColor="#1f2937"
      title={tLocal.title}
      description={tLocal.description}
      keywords={tLocal.keywords}
      canonicalUrl="https://achievepack.com/printing/plate-printing"
      heroTitle={tLocal.heroTitle}
      heroSubtitle={tLocal.heroSubtitle}
      heroImage="/imgs/seo-photos/a_plate_printing_quality_7667893.webp"
      heroImageAlt="Gravure printed premium eco-friendly pouches"
      introSummary={tLocal.introSummary}
      sections={sections}
      faqs={tLocal.faqs}
      relatedLinks={tLocal.relatedLinks}
      ctaTitle={tLocal.cta.title}
      ctaDescription={tLocal.cta.description}
      ctaButtonText={tLocal.cta.button}
    />
  )
}

export default PlatePrintingPage
