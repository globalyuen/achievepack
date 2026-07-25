import React from 'react'
import { Palette, Zap, Package, CheckCircle, Clock } from 'lucide-react'
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
      printQualityTitle: string
      printQualityItems: string[]
      foodSafeInksTitle: string
      foodSafeInksItems: string[]
    }
    applications: {
      title: string
      summary: string
      items: string[]
    }
    comparison: {
      title: string
      summary: string
      headers: {
        feature: string
        digital: string
        plate: string
      }
      rows: {
        feature: string
        digital: string
        plate: string
        digitalHighlight?: boolean
      }[]
    }
    order: {
      title: string
      cards: {
        value: string
        label: string
      }[]
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
    title: "Digital Printing for Eco Pouches | No Plate Cost | Achieve Pack",
    description: "Low MOQ digital printing on sustainable pouches. No plate costs, unlimited colors, 500pc minimum. HP Indigo quality with 2-3 week turnaround. Perfect for startups and small batches.",
    keywords: ['digital printing pouches', 'low MOQ packaging', 'HP Indigo flexible packaging', 'custom printed pouches', 'no plate cost printing', 'small batch packaging'],
    heroTitle: "HP Indigo Digital Pouch Printing",
    heroSubtitle: "Photographic print quality, zero plate setup fees, and 500-unit low MOQs for sustainable flexible packaging.",
    introSummary: "Accelerate your product launch with Achieve Pack's HP Indigo 25K digital printing technology. Enjoy vibrant full-color printing, custom variable data, and fast 2-3 week lead times without paying for traditional printing plates.",
    sections: {
      overview: {
        title: "Digital Printing for Eco-Friendly Pouches",
        summaryStrong: "Achieve Pack's digital printing technology enables unlimited colors, photographic quality, and variable data printing on sustainable packaging.",
        summaryRest: "Perfect for small batches, seasonal designs, and brands that need flexibility without minimum order commitments.",
        advantagesTitle: "Digital Printing Advantages:",
        advantages: [
          { label: "No plate costs", detail: "Eliminate expensive plate setup fees (saving $500-$2000)" },
          { label: "Unlimited colors", detail: "Full CMYK + white, no extra cost for additional colors" },
          { label: "Low MOQ", detail: "Start from just 500 pouches for custom designs" },
          { label: "Fast turnaround", detail: "2-3 weeks vs 4-6 weeks for traditional printing" },
          { label: "Variable data", detail: "Unique QR codes, serial numbers, or personalization per pouch" }
        ]
      },
      technology: {
        title: "HP Indigo Digital Technology",
        summary: "We use HP Indigo 25K digital presses, the gold standard for flexible packaging printing:",
        printQualityTitle: "Print Quality",
        printQualityItems: [
          "1200 dpi resolution for sharp text and images",
          "97% Pantone color matching capability",
          "Photorealistic image reproduction",
          "Consistent color across entire print run"
        ],
        foodSafeInksTitle: "Food-Safe Inks",
        foodSafeInksItems: [
          "FDA-compliant electroink technology",
          "Low migration inks for food contact",
          "Odorless and taste-neutral",
          "Swiss Ordonnance certified"
        ]
      },
      applications: {
        title: "Ideal Applications",
        summary: "Digital printing is perfect for:",
        items: [
          "Startup Brands (500-5000 units)",
          "Seasonal Limited Editions",
          "Product Testing & Trials",
          "Multiple SKU Variations",
          "Event & Promotional Packaging",
          "Personalized Gifts & Subscriptions",
          "Regional Flavor Variants",
          "Short-Run Private Labels",
          "Prototype & Mockup Production"
        ]
      },
      comparison: {
        title: "Digital vs Plate Printing",
        summary: "Choose the right printing method for your needs:",
        headers: { feature: "Feature", digital: "Digital Printing", plate: "Plate Printing" },
        rows: [
          { feature: "Setup Cost", digital: "$0", plate: "$500-2000", digitalHighlight: true },
          { feature: "Minimum Order", digital: "500 pcs", plate: "5,000-10,000 pcs", digitalHighlight: true },
          { feature: "Colors", digital: "Unlimited", plate: "Up to 10 colors", digitalHighlight: true },
          { feature: "Lead Time", digital: "2-3 weeks", plate: "4-6 weeks", digitalHighlight: true },
          { feature: "Best For", digital: "Small batches, testing", plate: "High volume production" }
        ]
      },
      order: {
        title: "Order Information",
        cards: [
          { value: "500", label: "Minimum Order (pcs)" },
          { value: "$0", label: "Plate Setup Cost" },
          { value: "2-3", label: "Weeks Turnaround" }
        ]
      }
    },
    faqs: [
      {
        question: "What is the maximum print size for digital printing?",
        answer: "Our HP Indigo presses can print up to 720mm web width, suitable for pouches up to 350mm x 500mm. For larger formats, we recommend our plate printing service."
      },
      {
        question: "Can digital printing match my exact Pantone colors?",
        answer: "HP Indigo achieves 97% Pantone matching capability. For critical brand colors, we recommend a proof sample before production. Some fluorescent and metallic colors may require plate printing."
      },
      {
        question: "Is digital printing suitable for food packaging?",
        answer: "Yes, our HP Indigo electroinks are FDA-compliant and Swiss Ordonnance certified for food contact. The inks are low-migration and odorless, making them safe for direct food packaging."
      },
      {
        question: "What file format should I submit for digital printing?",
        answer: "We accept PDF (preferred), AI, or PSD files at 300dpi minimum. CMYK color mode is required. We provide free artwork checks and can help with file preparation if needed."
      }
    ],
    relatedLinks: [
      { title: "Plate Printing (10 Colors)", url: "/printing/plate-printing", description: "High-volume gravure printing for large orders" },
      { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for retail products" },
      { title: "Compostable Materials", url: "/materials/compostable", description: "Eco-friendly substrate options" }
    ],
    cta: {
      title: "Ready for High-Quality Custom Digital Printing?",
      description: "Start your custom pouch production with zero plate fees and a low 500-unit MOQ. Get an instant quote today!",
      button: "Get Digital Printing Quote"
    }
  },
  'zh-tw': {
    title: "環保袋數位印刷 | 免版費低起訂量 | Achieve Pack",
    description: "提供可持續包裝袋的低 MOQ 數位印刷服務。免製版費、無限色彩、起訂量僅 500 個。HP Indigo 相片級畫質，2-3 週快速交貨，最適合初創品牌與小批量生產。",
    keywords: ['數位印刷袋', '小批量包裝', 'HP Indigo 軟包裝', '客製化印刷袋', '免版費印刷', '小批量生產'],
    heroTitle: "HP Indigo 數位包裝袋印刷",
    heroSubtitle: "相片級印刷品質、零製版費用，起訂量僅 500 個，為您打造可持續的客製化軟包裝。",
    introSummary: "透過 Achieve Pack 的 HP Indigo 25K 數位印刷技術加速您的新品上市。享受全彩鮮艷印刷、客製化可變數據，以及 2-3 週的快速交貨期，無需支付傳統印版費用。",
    sections: {
      overview: {
        title: "環保袋數位印刷方案",
        summaryStrong: "Achieve Pack 的數位印刷技術支援無限色彩、相片級精細度與可變數據印刷，應用於各類可持續包裝材料上。",
        summaryRest: "非常適合小批量試產、季節性設計以及需要靈活性而無高額起訂量負擔的品牌。",
        advantagesTitle: "數位印刷優勢：",
        advantages: [
          { label: "免製版費用", detail: "省去昂貴的凹版開模與製版費用（每套節省 $500-$2000 美金）" },
          { label: "無限色彩呈現", detail: "CMYK 全彩 + 高遮蓋力白墨，無需因增加顏色而支付額外費用" },
          { label: "極低起訂量 (MOQ)", detail: "客製化印刷袋起訂量僅需 500 個即可開印" },
          { label: "交貨速度快", detail: "只需 2-3 週，遠快於傳統印刷的 4-6 週" },
          { label: "可變數據印刷", detail: "每張袋子皆可印製獨一無二的 QR Code、序列號或個人化圖案" }
        ]
      },
      technology: {
        title: "HP Indigo 數位印刷技術",
        summary: "我們採用軟包裝印刷業界黃金標準——HP Indigo 25K 數位印刷機：",
        printQualityTitle: "印刷品質優勢",
        printQualityItems: [
          "1200 dpi 高解析度，呈現極致清晰的文字與細緻圖像",
          "高達 97% 的 Pantone 色彩還原匹配能力",
          "相片級逼真色彩重現",
          "整批印刷顏色高度一致，無色差問題"
        ],
        foodSafeInksTitle: "食品級安全墨水",
        foodSafeInksItems: [
          "符合 FDA 法規要求的電子墨水 (ElectroInk) 技術",
          "低遷移 (Low-migration) 墨水，適用於食品直接/間接接觸",
          "無異味、不影響食品風味",
          "通過瑞士法規 (Swiss Ordinance) 嚴格認證"
        ]
      },
      applications: {
        title: "最佳應用場景",
        summary: "數位印刷非常適合以下需求：",
        items: [
          "初創品牌與試賣 (500-5000 個)",
          "季節性與限定版包裝",
          "新產品市場測試與樣品",
          "多款 SKU 變體同時生產",
          "展會與促銷活動專用包裝",
          "個人化禮品與訂閱盒包裝",
          "區域限定風味或版本",
          "小批量自有品牌 (Private Label)",
          "打樣與 3D 擬真樣袋製作"
        ]
      },
      comparison: {
        title: "數位印刷 vs 凹版印刷",
        summary: "根據您的生產規模與預算選擇最適宜的印刷方式：",
        headers: { feature: "對比項目", digital: "數位印刷 (Digital)", plate: "凹版印刷 (Plate)" },
        rows: [
          { feature: "製版費用", digital: "$0 (免版費)", plate: "$500-2000 美金", digitalHighlight: true },
          { feature: "最低起訂量", digital: "500 個", plate: "5,000-10,000 個", digitalHighlight: true },
          { feature: "顏色數量", digital: "無限全彩", plate: "最多 10 色", digitalHighlight: true },
          { feature: "生產週期", digital: "2-3 週", plate: "4-6 週", digitalHighlight: true },
          { feature: "最佳適用對象", digital: "小批量、多款式、市場測試", plate: "大批量穩定生產" }
        ]
      },
      order: {
        title: "訂購資訊",
        cards: [
          { value: "500", label: "最低起訂量 (個)" },
          { value: "$0", label: "開模製版費用" },
          { value: "2-3", label: "週快速交貨" }
        ]
      }
    },
    faqs: [
      {
        question: "數位印刷的最大印刷尺寸是多少？",
        answer: "我們的 HP Indigo 印刷機最大印製膜寬可達 720mm，適用於最大尺寸 350mm x 500mm 的袋型。若需更大尺寸的包裝袋，建議採用凹版印刷。"
      },
      {
        question: "數位印刷能否精準匹配我的 Pantone 專色？",
        answer: "HP Indigo 可達到 97% 的 Pantone 色彩涵蓋度。針對關鍵品牌色，我們建議在正式大貨前進行數位打樣。部分螢光色或金屬色可能仍需透過凹版專色印刷。"
      },
      {
        question: "數位印刷墨水是否安全，可用於食品包裝？",
        answer: "是的，我們採用的 HP Indigo 電子墨水符合 FDA 標準與瑞士法規 (Swiss Ordinance) 認證。墨水具備低遷移特性且無味，可安全用於各類食品包裝。"
      },
      {
        question: "數位印刷需要提供什麼格式的檔案？",
        answer: "我們接受 PDF（首選）、AI 或 PSD 檔案，解析度需在 300dpi 以上，色彩模式需轉換為 CMYK。我們提供免費的檔案檢測服務，必要時亦可協助稿件修整。"
      }
    ],
    relatedLinks: [
      { title: "10 色凹版印刷", url: "/printing/plate-printing", description: "適合大批量訂單的高品質銅版印刷服務" },
      { title: "站立自立袋 (Stand-Up Pouches)", url: "/packaging/stand-up-pouches", description: "最受零售市場歡迎的熱門袋型" },
      { title: "堆肥可降解材料", url: "/materials/compostable", description: "綠色環保的基材選擇" }
    ],
    cta: {
      title: "準備好開始客製化數位印刷了嗎？",
      description: "零製版費、500 個低起訂量，立即獲取您的高品質環保包裝袋報價！",
      button: "獲取數位印刷報價"
    }
  },
  fr: {
    title: "Impression Numérique pour Sachet Éco | Sans Frais de Cliché | Achieve Pack",
    description: "Impression numérique à faible MOQ sur sachets écoresponsables. Sans frais de cliché, couleurs illimitées, minimum 500 pcs. Qualité HP Indigo sous 2-3 semaines. Idéal pour startups.",
    keywords: ['impression numérique sachets', 'emballage faible MOQ', 'HP Indigo emballage flexible', 'sachets personnalisés', 'impression sans cliché', 'emballage petite série'],
    heroTitle: "Impression Numérique de Sachets HP Indigo",
    heroSubtitle: "Qualité d'impression photo, zéro frais de cliché et MOQ de 500 unités pour vos emballages flexibles écoresponsables.",
    introSummary: "Accélérez le lancement de vos produits avec la technologie d'impression numérique HP Indigo 25K d'Achieve Pack. Profitez d'une impression couleur éclatante, de données variables personnalisées et de délais rapides de 2 à 3 semaines sans payer de plaques d'impression.",
    sections: {
      overview: {
        title: "Impression Numérique pour Sachets Écoresponsables",
        summaryStrong: "La technologie d'impression numérique d'Achieve Pack offre des couleurs illimitées, une qualité photographique et l'impression de données variables sur des emballages durables.",
        summaryRest: "Parfait pour les petites séries, les éditions saisonnières et les marques recherchant une grande flexibilité sans engagement volumétrique.",
        advantagesTitle: "Avantages de l'Impression Numérique :",
        advantages: [
          { label: "Aucun frais de cliché", detail: "Éliminez les frais de cylindre coûteux (économisez de 500 $ à 2000 $)" },
          { label: "Couleurs illimitées", detail: "CMJN complet + blanc, aucun coût supplémentaire pour les couleurs additionnelles" },
          { label: "Faible MOQ", detail: "À partir de seulement 500 sachets pour vos designs personnalisés" },
          { label: "Délai de fabrication rapide", detail: "2-3 semaines contre 4-6 semaines pour l'héliogravure traditionnelle" },
          { label: "Données variables", detail: "Codes QR uniques, numérotation de série ou personnalisation par sachet" }
        ]
      },
      technology: {
        title: "Technologie Numérique HP Indigo",
        summary: "Nous utilisons des presses numériques HP Indigo 25K, la référence mondiale pour l'impression d'emballages flexibles :",
        printQualityTitle: "Qualité d'Impression",
        printQualityItems: [
          "Résolution de 1200 dpi pour un texte et des visuels d'une netteté parfaite",
          "Capacité de correspondance Pantone à 97%",
          "Reproduction d'images photoréalistes",
          "Couleurs constantes sur l'ensemble du tirage"
        ],
        foodSafeInksTitle: "Encres Certifiées Contact Alimentaire",
        foodSafeInksItems: [
          "Technologie ElectroInk conforme aux normes FDA",
          "Encres à faible migration pour le contact alimentaire direct et indirect",
          "Inodores et neutres au goût",
          "Certifié selon l'Ordonnance Suisse (Swiss Ordinance)"
        ]
      },
      applications: {
        title: "Applications Idéales",
        summary: "L'impression numérique est parfaite pour :",
        items: [
          "Marques émergentes et startups (500 à 5000 unités)",
          "Éditions limitées et saisonnières",
          "Tests de marché et lancements de produits",
          "Multi-références SKU simultanées",
          "Emballages événementiels et promotionnels",
          "Cadeaux personnalisés et coffrets d'abonnement",
          "Déclinaisons de saveurs régionales",
          "Marques de distributeur en petite série",
          "Production de prototypes et prototypes 3D"
        ]
      },
      comparison: {
        title: "Impression Numérique vs Héliogravure",
        summary: "Choisissez la méthode d'impression la plus adaptée à vos besoins :",
        headers: { feature: "Caractéristiques", digital: "Impression Numérique", plate: "Impression Héliogravure" },
        rows: [
          { feature: "Frais de Cliché", digital: "0 $ (Inclus)", plate: "500 $ - 2000 $", digitalHighlight: true },
          { feature: "Commande Minimale (MOQ)", digital: "500 pcs", plate: "5 000 - 10 000 pcs", digitalHighlight: true },
          { feature: "Nombre de Couleurs", digital: "Illimité", plate: "Jusqu'à 10 couleurs", digitalHighlight: true },
          { feature: "Délai de Livraison", digital: "2-3 semaines", plate: "4-6 semaines", digitalHighlight: true },
          { feature: "Recommandé Pour", digital: "Petites séries, tests, flexibilité", plate: "Production industrielle à grand volume" }
        ]
      },
      order: {
        title: "Informations de Commande",
        cards: [
          { value: "500", label: "Commande Minimale (pcs)" },
          { value: "0 $", label: "Frais de Cliché" },
          { value: "2-3", label: "Semaines de Délai" }
        ]
      }
    },
    faqs: [
      {
        question: "Quelle est la taille maximale d'impression numérique ?",
        answer: "Nos presses HP Indigo peuvent imprimer jusqu'à une laize de 720 mm, ce qui convient à des sachets allant jusqu'à 350 mm x 500 mm. Pour des formats plus grands, nous recommandons l'héliogravure."
      },
      {
        question: "L'impression numérique peut-elle reproduire mes couleurs Pantone ?",
        answer: "HP Indigo atteint 97 % de précision sur le nuancier Pantone. Pour des couleurs de marque très strictes, nous conseillons une épreuve numérique avant production. Certaines encres métallisées ou fluo nécessitent l'héliogravure."
      },
      {
        question: "L'impression numérique convient-elle aux emballages alimentaires ?",
        answer: "Oui, nos encres HP Indigo ElectroInk sont conformes aux exigences de la FDA et à l'Ordonnance Suisse pour le contact alimentaire. Elles sont inodores et à faible migration."
      },
      {
        question: "Quel format de fichier dois-je fournir ?",
        answer: "Nous acceptons les fichiers PDF (recommandé), AI ou PSD d'une résolution minimale de 300 dpi en mode colorimétrique CMJN. Nous vérifions gratuitement vos fichiers avant le tirage."
      }
    ],
    relatedLinks: [
      { title: "Impression Héliogravure (10 Couleurs)", url: "/printing/plate-printing", description: "Héliogravure haute performance pour grands volumes" },
      { title: "Sachets Tenue Debout (Stand-Up)", url: "/packaging/stand-up-pouches", description: "Format incontournable pour la vente au détail" },
      { title: "Matériaux Compostables", url: "/materials/compostable", description: "Options de substrats écologiques et biodégradables" }
    ],
    cta: {
      title: "Prêt pour votre impression numérique sur mesure ?",
      description: "Lancez la production de vos sachets sans frais de cliché et dès 500 unités. Demandez votre devis gratuit dès aujourd'hui !",
      button: "Obtenir un Devis Numérique"
    }
  },
  es: {
    title: "Impresión Digital para Bolsas Ecológicas | Sin Coste de Grabado | Achieve Pack",
    description: "Impresión digital con MOQ bajo para bolsas sostenibles. Sin costes de plancha, colores ilimitados y desde 500 uds. Calidad HP Indigo con entrega en 2-3 semanas.",
    keywords: ['impresión digital bolsas', 'empaque bajo MOQ', 'HP Indigo empaque flexible', 'bolsas personalizadas', 'impresión sin plancha', 'empaque pequeñas series'],
    heroTitle: "Impresión Digital de Bolsas con HP Indigo",
    heroSubtitle: "Calidad fotorrealista, cero costes de grabado y un MOQ desde 500 unidades para sus envases flexibles sostenibles.",
    introSummary: "Acelere el lanzamiento de sus productos con la tecnología de impresión digital HP Indigo 25K de Achieve Pack. Disfrute de una impresión a todo color, datos variables personalizados y plazos de entrega rápidos de 2 a 3 semanas sin pagar costes de cliché.",
    sections: {
      overview: {
        title: "Impresión Digital para Bolsas Ecológicas",
        summaryStrong: "La tecnología de impresión digital de Achieve Pack permite colores ilimitados, calidad fotográfica e impresión de datos variables en envases sostenibles.",
        summaryRest: "Ideal para lotes pequeños, ediciones de temporada y marcas que buscan flexibilidad sin compromisos de pedido mínimo masivos.",
        advantagesTitle: "Ventajas de la Impresión Digital:",
        advantages: [
          { label: "Sin costes de grabado/plancha", detail: "Elimine los costosos gastos de preparación de cilindros (ahorre entre $500 y $2000)" },
          { label: "Colores ilimitados", detail: "CMYK completo + tinta blanca, sin costes adicionales por color extra" },
          { label: "MOQ bajo", detail: "Comience desde solo 500 bolsas para sus diseños personalizados" },
          { label: "Rápido plazo de entrega", detail: "2-3 semanas frente a las 4-6 semanas de la impresión tradicional" },
          { label: "Datos variables", detail: "Códigos QR únicos, números de serie o personalización por cada bolsa" }
        ]
      },
      technology: {
        title: "Tecnología Digital HP Indigo",
        summary: "Utilizamos prensas digitales HP Indigo 25K, el estándar de oro en impresión de empaque flexible:",
        printQualityTitle: "Calidad de Impresión",
        printQualityItems: [
          "Resolución de 1200 dpi para textos e imágenes nítidas",
          "Capacidad de coincidencia Pantone del 97%",
          "Reproducción de imágenes fotográficas realistas",
          "Color consistente en toda la tirada de producción"
        ],
        foodSafeInksTitle: "Tintas Aptas para Contacto Alimentario",
        foodSafeInksItems: [
          "Tecnología ElectroInk conforme con normativas de la FDA",
          "Tintas de baja migración para contacto con alimentos",
          "Inodoras y de sabor neutro",
          "Certificación de la Ordenanza Suiza (Swiss Ordinance)"
        ]
      },
      applications: {
        title: "Aplicaciones Ideales",
        summary: "La impresión digital es perfecta para:",
        items: [
          "Marcas emergentes y startups (500-5000 unidades)",
          "Ediciones limitadas y de temporada",
          "Pruebas de mercado y lanzamientos de productos",
          "Múltiples variaciones de SKU simultáneas",
          "Empaques promocionales y para eventos",
          "Regalos personalizados y cajas de suscripción",
          "Variantes de sabores regionales",
          "Marcas privadas de tirada corta",
          "Producción de prototipos y maquetas 3D"
        ]
      },
      comparison: {
        title: "Impresión Digital vs Rotograbado",
        summary: "Elija el método de impresión idóneo según sus necesidades:",
        headers: { feature: "Característica", digital: "Impresión Digital", plate: "Impresión por Plancha/Grabado" },
        rows: [
          { feature: "Coste de Preparación", digital: "$0 (Sin costes)", plate: "$500 - $2000", digitalHighlight: true },
          { feature: "Pedido Mínimo (MOQ)", digital: "500 uds", plate: "5.000 - 10.000 uds", digitalHighlight: true },
          { feature: "Colores", digital: "Ilimitados", plate: "Hasta 10 colores", digitalHighlight: true },
          { feature: "Plazo de Entrega", digital: "2-3 semanas", plate: "4-6 semanas", digitalHighlight: true },
          { feature: "Ideal Para", digital: "Pequeños lotes, pruebas, flexibilidad", plate: "Producción masiva de gran volumen" }
        ]
      },
      order: {
        title: "Información de Pedido",
        cards: [
          { value: "500", label: "Pedido Mínimo (uds)" },
          { value: "$0", label: "Coste de Planchas" },
          { value: "2-3", label: "Semanas de Entrega" }
        ]
      }
    },
    faqs: [
      {
        question: "¿Cuál es el tamaño máximo de impresión digital?",
        answer: "Nuestras prensas HP Indigo imprimen un ancho de bobina de hasta 720 mm, adecuado para bolsas de hasta 350 mm x 500 mm. Para formatos más grandes, recomendamos la impresión por rotograbado."
      },
      {
        question: "¿Puede la impresión digital igualar mis colores Pantone exactos?",
        answer: "HP Indigo ofrece una cobertura del 97% del muestrario Pantone. Para colores corporativos críticos, recomendamos una prueba impresa previa. Ciertos tonos fluorescentes o metálicos pueden requerir planchas."
      },
      {
        question: "¿Es adecuada la impresión digital para envases de alimentos?",
        answer: "Sí, nuestras tintas HP Indigo ElectroInk cumplen con la FDA y la Ordenanza Suiza para contacto con alimentos. Son tintas de baja migración e inodoras, garantizando máxima seguridad."
      },
      {
        question: "¿Qué formato de archivo debo enviar?",
        answer: "Aceptamos archivos en PDF (preferido), AI o PSD con un mínimo de 300 dpi en modo CMYK. Ofrecemos revisión gratuita del diseño antes de la producción."
      }
    ],
    relatedLinks: [
      { title: "Impresión por Planchas (10 Colores)", url: "/printing/plate-printing", description: "Rotograbado de alta capacidad para pedidos volumétricos" },
      { title: "Bolsas Stand-Up (Doypack)", url: "/packaging/stand-up-pouches", description: "Formato de gran presencia en estantería comercial" },
      { title: "Materiales Compostables", url: "/materials/compostable", description: "Opciones de sustratos ecológicos y biodegradables" }
    ],
    cta: {
      title: "¿Listo para su Impresión Digital Personalizada?",
      description: "Comience la fabricación de sus bolsas sin costes de plancha y desde solo 500 unidades. ¡Solicite su presupuesto hoy!",
      button: "Obtener Presupuesto Digital"
    }
  }
}

const DigitalPrintingPage: React.FC = () => {
  const { i18n } = useTranslation()
  const rawLang = (i18n.language || 'en').toLowerCase()
  const currentLang = (rawLang === 'zh-tw' || rawLang === 'zh-hant' || rawLang === 'zh') ? 'zh-tw' : (rawLang === 'fr' ? 'fr' : (rawLang === 'es' ? 'es' : 'en'))
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const sections = [
    {
      id: 'overview',
      title: tLocal.sections.overview.title,
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <img src="/imgs/knowledge/explorer_printing_infographic.jpg" alt="Digital Printing Technical Breakdown" className="w-full rounded-2xl shadow-lg border border-neutral-200 mb-6" />
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
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.technology.summary}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{tLocal.sections.technology.printQualityTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.sections.technology.printQualityItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{tLocal.sections.technology.foodSafeInksTitle}</h4>
              <ul className="text-sm space-y-1">
                {tLocal.sections.technology.foodSafeInksItems.map((item, idx) => (
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
      id: 'comparison',
      title: tLocal.sections.comparison.title,
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{tLocal.sections.comparison.summary}</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">{tLocal.sections.comparison.headers.feature}</th>
                  <th className="text-left p-3 border">{tLocal.sections.comparison.headers.digital}</th>
                  <th className="text-left p-3 border">{tLocal.sections.comparison.headers.plate}</th>
                </tr>
              </thead>
              <tbody>
                {tLocal.sections.comparison.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-3 border font-medium">{row.feature}</td>
                    <td className={`p-3 border ${row.digitalHighlight ? 'text-green-600 font-medium' : ''}`}>{row.digital}</td>
                    <td className="p-3 border">{row.plate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      canonicalUrl="https://achievepack.com/printing/digital-printing"
      heroTitle={tLocal.heroTitle}
      heroSubtitle={tLocal.heroSubtitle}
      heroImage="/imgs/seo-photos/a_digital_printing_customization_2717640.webp"
      heroImageAlt="HP Indigo digital printed eco-friendly pouches"
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

export default DigitalPrintingPage
