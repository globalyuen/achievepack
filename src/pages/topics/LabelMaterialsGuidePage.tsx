import React, { useState } from 'react'
import { Tag, Leaf, Shield, Award, Clock, Users, Calendar, Mail, FileCheck, CheckCircle, Star, Sparkles, Truck, Layers, ChevronDown, ChevronLeft, ChevronRight, X, Sparkle, ShoppingBag, ArrowRight, Info, AlertTriangle, HelpCircle, FileText, Image as ImageIcon, BarChart3, Database } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { isPouch, getBaseUrl } from '../../utils/domain'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { useTranslation } from 'react-i18next'
import ClickableImage from '../../components/ClickableImage'

// Multilingual translations encapsulated inside the component file
const translations: Record<string, any> = {
  en: {
    seoTitle: "Custom Label Materials & Printing Guide | Achieve Pack",
    seoDesc: "Compare 11 custom label materials including transparent film, metallic flat silver, PP synthetic paper, art paper, brushed gold, and white PVC. Guide to adhesives and finishes.",
    keywords: ["custom labels", "label materials", "transparent sticker", "PP synthetic paper", "metallic label", "holographic sticker", "brushed gold label", "packaging labels"],
    heroBadge: "Engineering & Material Spec",
    heroTitle1: "Label Materials",
    heroTitle2: "Selection Guide",
    heroDesc: "A comprehensive B2B reference guide for selecting the optimal adhesive label material, liner, glue chemistry, and print finishing for custom product packaging.",
    btnCall: "Book Technical Consult",
    btnWa: "WhatsApp Inquiries",
    moqBadge: "FREE SAMPLE KIT",
    empathyHookTitle: "The Critical Science of Label Selection",
    empathyHookText: "A label is more than just decoration; it is a critical engineering component of your product's packaging system. Selecting the wrong combination of face stock, adhesive chemistry, or release liner can lead to catastrophic failures on the packaging line or retail shelves—such as label curling on tight-radius cosmetic tubes, adhesive bleeding on high-speed bottling lines, or moisture-induced peeling in refrigerated environments. Understanding the physical properties of films, synthetic papers, metallized foils, and standard papers ensures consistent performance, flawless application, and maximum brand presence.",
    ryanNotebookTitle: "Ryan Wong's Engineering Notebook: Resolving Squeeze Tube Peeling",
    ryanNotebookText: "In early 2025, a premium organic cosmetics client reached out after their high-end face wash tubes suffered severe label wrinkling and peeling at retail outlets. They were using a standard 80-micron glossy polypropylene (PP) film label with a standard emulsion acrylic adhesive. Upon diagnostic analysis, I identified two compounding issues: first, the squeeze tube material (LDPE) has low surface energy, which prevents the adhesive from establishing a strong bond; second, the constant flexing from squeezing the tube caused shear stress on the adhesive layer, leading to delamination. I recommended switching to a highly flexible 50-micron transparent PE film label coated with a high-tack solvent acrylic adhesive on a Glassine liner, underprinted with white ink and protected by a flexible glossy lamination. This combination perfectly matched the low surface energy of the tube and flexed along with it, completely eliminating failures and maintaining pristine shelf appearance.",
    painPointsTitle: "5 Common Label Failures Solved",
    painPoints: [
      {
        num: "1",
        problem: "Peeling & Lifting in Cold/Damp Conditions",
        solution: "Use synthetic PP or PVC film coupled with an all-temperature solvent acrylic adhesive. Avoid standard emulsion-based glues for refrigerated products."
      },
      {
        num: "2",
        problem: "Bubbles & Wrinkles on Curved/Squeeze Bottles",
        solution: "Deploy highly flexible face stocks like 50-micron transparent PE or PP rather than rigid PVC or art paper, combined with a high-tack adhesive."
      },
      {
        num: "3",
        problem: "Adhesive Bleeding and Jamming on Labeling Machines",
        solution: "Specify high-quality Glassine liners with precise silicone release levels and use acrylic adhesives with high cohesion strength to prevent glue migration."
      },
      {
        num: "4",
        problem: "Scratching & Ink Fading on Transit or Shelf",
        solution: "Apply a protective glossy/matte laminate film over the printed graphics, or use UV varnish coat to lock in colors and shield against scuffing."
      },
      {
        num: "5",
        problem: "Lack of Contrast on Transparent Bottles",
        solution: "Employ a white ink underprint layer beneath colored graphics on transparent films to block out the product color and make design details pop."
      }
    ],
    specTitle: "Technical Specification Matrix",
    specSubtitle: "Engineering parameters of the 11 key custom label materials:",
    thMaterial: "Material / Finish",
    thThickness: "Thickness",
    thAdhesive: "Adhesive Type",
    thLiner: "Liner Type",
    thTemp: "Temp Range",
    thBestUse: "Best Application",
    faqTitle: "Technical FAQs",
    faqs: [
      {
        q: "What is the difference between oil-based (solvent) adhesive and water-based (emulsion) adhesive?",
        a: "Solvent (oil-based) adhesives offer superior resistance to water, moisture, chemical solvents, and high temperatures, making them ideal for outdoor, cosmetics, and cold-chain labeling. Emulsion (water-based) adhesives are cost-effective, environmentally friendly, and perform well in dry, indoor conditions but can break down in high-moisture environments."
      },
      {
        q: "Why is a Glassine liner preferred over standard Kraft paper liners?",
        a: "Glassine liners are highly transparent, uniform in thickness, and resistant to tearing. They are essential for high-speed automatic labeling machines because the sensor can read the gap between labels accurately, and the smooth surface ensures clean release without web breaks."
      },
      {
        q: "What is white ink underprinting, and when is it necessary?",
        a: "Transparent and metallic labels have no white background. When printing colored inks directly onto them, the ink appears translucent or takes on the color of the container/metallic base. Underprinting a solid layer of white ink underneath the colored design elements provides opacity, ensuring accurate color rendering."
      },
      {
        q: "Can PP synthetic paper labels be recycled with the container?",
        a: "Yes, PP (Polypropylene) synthetic paper labels are highly compatible with PP and HDPE plastic recycling streams. Because they belong to the same olefin family, they do not need to be separated from the container during the mechanical recycling process, unlike PVC labels."
      },
      {
        q: "What is the optimal storage condition for custom roll labels?",
        a: "Custom labels should be stored in a temperature-controlled environment at 22°C ± 5°C with 50% ± 10% relative humidity. Keep them wrapped in plastic bags to prevent moisture absorption, and store rolls horizontally to avoid adhesive migration and edge curling."
      }
    ],
    showcaseTitle: "Custom Label Sample Showcase",
    showcaseDesc: "Real-world micro-details of our 11 premium label material and finishing options:",
    samples: [
      {
        title: "5c Transparent Self-Adhesive",
        desc: "50-micron crystal clear film on Glassine liner. Featuring glossy lamination, die-cut, white ink underprint, and hot-stamped gold foil. Perfect for a premium 'no-label' look on bakery, cosmetics, and glass packaging."
      },
      {
        title: "5c Matte Silver Film",
        desc: "50-micron matte silver metallic film. Finished with a clean matte lamination. Delivers a sophisticated, high-end metallic appearance for premium apparel tags, electronics, and cosmetics."
      },
      {
        title: "Thick Backing PP Synthetic Paper",
        desc: "High-opacity PP synthetic paper on a thick release liner with glossy lamination. Provides excellent tear resistance and water protection. Highly recommended for milk powder, nutrition tablets, and squeeze containers."
      },
      {
        title: "Glassine Liner Art Paper (Hot Melt Glue)",
        desc: "Traditional semi-gloss art paper on Glassine liner using high-tack hot-melt adhesive. Embellished with glossy varnish and gold hot stamping. Ideal for fresh fruits, vegetables, and short-term logistics."
      },
      {
        title: "Avery Glassine Art Paper (Laser Film)",
        desc: "Premium Avery Dennison art paper face stock finished with laser holographic lamination. Displays a striking, dynamic rainbow light diffraction pattern. Excellent for eye-catching automotive, cosmetics, and security seals."
      },
      {
        title: "Glassine Liner Flat Silver Film",
        desc: "Flat matte-metallic silver film on Glassine liner. Treated with gloss lamination and white ink underprint. Ideal for product certificate plates, barcodes, machinery serial tags, and mineral water labels."
      },
      {
        title: "Glassine Liner PP Synthetic Paper (Gold Foil)",
        desc: "PP synthetic paper face stock on a Glassine release liner. Embellished with glossy lamination and shiny gold hot-stamping foil. Highly resistant to water and oil, making it the industry standard for wild honey, organic food, and cosmetics."
      },
      {
        title: "Brushed Gold Film",
        desc: "Premium brushed metallic gold texture film on Glassine liner. Finished with a protective glossy laminate. Best suited for high-end industrial grease, automotive fluids, electronics, and luxury packaging labels."
      },
      {
        title: "5c Glassine Liner Glossy Silver",
        desc: "50-micron high-gloss silver metallic film on a smooth Glassine liner. Designed with waterproof adhesive and sharp high-contrast printing. Best for electrical control gear, heavy machinery ballast plates, and auto parts."
      },
      {
        title: "Glassine Liner Pearl Film",
        desc: "Pearlized white film stock offering a subtle, elegant pearlescent luster. Treated with gloss lamination. Heavily used in vintage beverage labels, high-end tea canisters, and bath cosmetics."
      },
      {
        title: "8c Glossy White PVC (Solvent Glue)",
        desc: "80-micron heavy-duty glossy white PVC film coated with strong solvent acrylic adhesive. Highly resistant to outdoor weather, UV radiation, and heavy moisture. Perfect for waste sorting bin markers and chemical drums."
      }
    ]
  },
  'zh-TW': {
    seoTitle: "客製化貼紙標籤材質與印刷指南 | Achieve Pack",
    seoDesc: "對比 11 種客製化標籤材質，包括透明不干膠、格底平光銀、PP合成紙、銅版紙、拉絲金及白色PVC。膠水化學成分與表面工藝指南。",
    keywords: ["客製化貼紙", "標籤材質", "透明貼紙", "PP合成紙", "金屬標籤", "雷射貼紙", "拉絲金貼紙", "包裝貼紙"],
    heroBadge: "工程與材質規格說明書",
    heroTitle1: "不干膠貼紙",
    heroTitle2: "材質選型指南",
    heroDesc: "為客製化產品包裝提供最佳不干膠貼紙材質、底紙、膠水化學成份及印刷後加工工藝選擇的 B2B 專業指南。",
    btnCall: "預約技術諮詢",
    btnWa: "WhatsApp 查詢",
    moqBadge: "免費樣辦套裝",
    empathyHookTitle: "標籤選型嘅關鍵科學",
    empathyHookText: "一個標籤唔單止係裝飾，更加係你產品包裝系統中嘅關鍵工程組件。選錯面材、膠水化學成分或離型底紙嘅組合，可能會喺包裝生產線或零售貨架上造成災難性嘅失敗——例如標籤喺小弧度嘅化妝品軟管上起翹、喺高速灌裝線上溢膠、或者喺冷藏環境中受潮脫落。深入了解薄膜、合成紙、金屬箔和標準紙嘅物理特性，能確保貼標表現一致、完美貼合，發揮最大嘅品牌展示效果。",
    ryanNotebookTitle: "黃工 (Ryan Wong) 的工程筆記：解決軟管標籤起翹起皺問題",
    ryanNotebookText: "喺2025年初，一個高端有機化妝品客戶搵我求助，佢哋嘅高檔潔面乳軟管喺零售店出現嚴重嘅標籤起皺同邊緣起翹脫落問題。佢哋原本使用標準嘅 80 微米亮面聚丙烯 (PP) 薄膜標籤配標準水乳膠。經過診斷分析，我發現咗兩個複合問題：第一，軟管材料 (LDPE) 表面能極低，水性膠水難以建立牢固嘅黏合力；第二，使用過程中不斷擠壓軟管，對膠水層產生剪切應力，導致分層脫落。我建議佢哋更換為高柔韌性嘅 50 微米透明 PE 薄膜標籤，搭配高黏性油性溶劑丙烯酸膠水（油膠）和格拉辛底紙，表面印白墨打底並過軟性光膜保護。呢個組合完美契合軟管嘅低表面能，並能跟隨軟管一齊形變，徹底解決咗起皺問題，確保產品長久保持完美外觀。",
    painPointsTitle: "解決 5 大不干膠標籤失效問題",
    painPoints: [
      {
        num: "1",
        problem: "冷藏/潮濕環境下起翹脫落",
        solution: "使用合成 PP 或 PVC 薄膜搭配耐低溫油性溶劑膠（油膠）。避免冷藏產品使用普通水性乳膠。"
      },
      {
        num: "2",
        problem: "弧面或軟管包裝出現氣泡和起皺",
        solution: "使用高柔韌性嘅面材（如 50 微米透明 PE 或 PP）代替剛性較強嘅 PVC 或銅版紙，並搭配高黏度膠水。"
      },
      {
        num: "3",
        problem: "貼標機上溢膠並造成塞機",
        solution: "指定使用高質量嘅格拉辛底紙，具備精確嘅矽離型度，並使用高內聚力嘅丙烯酸膠水以防止膠水側漏遷移。"
      },
      {
        num: "4",
        problem: "運輸或貨架上標籤被刮花或油墨褪色",
        solution: "喺印刷圖案表面覆亮膜或啞膜以鎖住色彩，或者加過一層 UV 光油以防刮耐磨。"
      },
      {
        num: "5",
        problem: "透明瓶身標籤色彩不夠醒目",
        solution: "喺透明薄膜嘅彩色圖案下方印刷一層白墨打底，阻隔瓶身或內部液體顏色，令設計細節鮮豔突出。"
      }
    ],
    specTitle: "材質技術參數對比表",
    specSubtitle: "11 款核心標籤材質嘅詳細工程參數對比：",
    thMaterial: "材質名稱 / 表面工藝",
    thThickness: "厚度",
    thAdhesive: "膠水類型",
    thLiner: "底紙類型",
    thTemp: "耐溫範圍",
    thBestUse: "最佳應用場景",
    faqTitle: "技術問答 FAQ",
    faqs: [
      {
        q: "油膠（溶劑型膠水）同水膠（乳液型膠水）有咩分別？",
        a: "油膠（溶劑型）對水、潮氣、化學溶劑同高溫有極佳嘅抵抗力，黏性強且持久，非常適合室外、化妝品同冷鏈標籤。水膠（乳液型）成本較低、環保，適合乾燥嘅室內環境，但受潮易脫膠。"
      },
      {
        q: "點解高速自動貼標機首選格拉辛底紙？",
        a: "格拉辛（Glassine）底紙具有極高嘅透光率、厚度均勻且抗拉強度高。自動貼標機嘅光電傳感器可以精確識別標籤間距，光滑且堅韌嘅特性能保證高速剝離而不斷紙。"
      },
      {
        q: "透明或金屬標籤點解要印白墨打底？",
        a: "透明貼紙和金屬銀膜貼紙本身沒有白色背景。彩色油墨直接印上去會呈半透明狀，或被瓶身顏色干擾。先在圖案下方印一層飽和嘅白墨，可以起到遮底作用，令後續彩色還原精確醒目。"
      },
      {
        q: "PP合成紙標籤可以同塑料瓶一齊回收嗎？",
        a: "可以。PP（聚丙烯）合成紙標籤與 PP 和 HDPE 塑料瓶高度相容。由於屬於同一烯烴家族，回收時無需像 PVC 標籤那樣強行分離，可直接進入機械回收再造流程。"
      },
      {
        q: "客製化標籤卷的最佳存放條件是什麼？",
        a: "標籤卷應存放於 22°C ± 5°C、相對濕度 50% ± 10% 嘅溫濕度控制環境中。保持用塑料袋密封以防受潮，且卷裝必須水平橫放，防止重力擠壓導致膠水滲出及邊緣變形。"
      }
    ],
    showcaseTitle: "標籤實物樣辦展示",
    showcaseDesc: "11 款高端不干膠標籤材質及表面工藝嘅真實細節展示：",
    samples: [
      {
        title: "5丝透明不干胶",
        desc: "50微米超透明薄膜面材，格拉辛底紙。採用覆亮膜、模切、白墨打底並印刷、表面燙亮黃金工藝。呈現高檔「無貼紙感」視覺，適用於烘焙包裝、化妝品及玻璃瓶貼標。"
      },
      {
        title: "5丝哑面双面银",
        desc: "50微米金屬啞銀質感薄膜。覆啞膜與精細模切。提供極具科技感同現代感嘅金屬啞光外觀，適用於高端服裝吊牌、電子電器及化妝品標籤。"
      },
      {
        title: "厚底PP合成纸",
        desc: "高遮蓋力 PP 合成紙，搭配加厚離型底紙和亮膜面。具備極強嘅抗撕裂同防水性能。高度推薦用於奶粉罐、保健品壓片糖果瓶及軟管軟塑容器。"
      },
      {
        title: "格底铜版不干胶 (热胶)",
        desc: "傳統半高光銅版紙面材，格拉辛底紙配強黏性熱熔膠。表面過光油保護，搭配燙亮黃金。極為適合新鮮水果、蔬菜貼標以及中短期物流標籤。"
      },
      {
        title: "艾利格底铜版 (覆镭射膜)",
        desc: "進口艾利丹尼森銅版紙面材，表面覆高光雷射全息防偽膜。光照下呈現斑斕奪目嘅彩虹折射光澤。適用於汽車保養品、潮牌包裝和防偽封口貼。"
      },
      {
        title: "格底银平光",
        desc: "格拉辛底紙平光啞銀金屬薄膜。表面覆亮膜，彩色印製前進行局部白墨打底。常用於產品合格證、條形碼銘牌、機電序列號貼及桶裝礦泉水貼紙。"
      },
      {
        title: "格底PP合成纸 (燙金)",
        desc: "格拉辛底紙 PP 合成紙。表面覆亮膜，文字進行立體燙亮黃金工藝。具有強大嘅防水防油特點，係野生蜂蜜、有機食品及洗護化妝品嘅行業標準標籤。"
      },
      {
        title: "拉丝金",
        desc: "格拉辛底紙，表面有精細拉絲金屬紋理嘅金膜。覆高透亮膜保護。專為高端工業潤滑油、汽車化工品、高端機電產品及奢華禮盒包裝而設。"
      },
      {
        title: "5丝格底亮银",
        desc: "50微米高光澤鏡面亮銀金屬膜，格拉辛底紙。配備耐候防水溶劑膠與高對比油墨印刷。主要應用於汽車大燈安定器、控制器等精密電子標籤。"
      },
      {
        title: "格底珠光膜 (國產膠)",
        desc: "珍珠白色澤面材，帶有柔和高雅嘅珠光貝殼光澤。表面覆亮膜。廣泛應用於復古飲料標籤、高檔茶葉罐和洗浴護膚品。"
      },
      {
        title: "8丝光白PVC油胶",
        desc: "80微米重型高光白色 PVC 薄膜，塗佈超強溶劑型丙烯酸膠水（油膠）。具備優異嘅戶外耐候、耐紫外線和抗水泡性能。適用於垃圾分類標識及化學品桶標。"
      }
    ]
  },
  es: {
    seoTitle: "Guía de Materiales de Etiquetas | Achieve Pack",
    seoDesc: "Compare 11 materiales de etiquetas que incluyen película transparente, plata métallique mate, papel sintético PP, papel estucado, oro cepillado y PVC blanco.",
    keywords: ["etiquetas personalizadas", "materiales de etiquetas", "adhesivos transparentes", "papel sintético PP", "etiquetas metálicas", "etiquetas industriales"],
    heroBadge: "Especificaciones Técnicas",
    heroTitle1: "Materiales de",
    heroTitle2: "Etiquetas Autoadhesivas",
    heroDesc: "Una guía de referencia técnica para seleccionar el material frontal, adhesivo, soporte y acabados de impresión adecuados para el embalaje de sus productos.",
    btnCall: "Reservar Consulta Técnica",
    btnWa: "Consulta por WhatsApp",
    moqBadge: "KIT DE MUESTRAS GRATIS",
    empathyHookTitle: "La ciencia crítica de la selección de etiquetas",
    empathyHookText: "Una etiqueta es más que una simple decoración; es un componente de ingeniería fundamental en el sistema de envasado de su producto. Seleccionar una combinación incorrecta de frontal, adhesivo o soporte puede provocar fallos críticos en la línea de envasado o en los lineales de venta, como el desprendimiento de etiquetas en tubos de cosméticos de radio estrecho, la migración de adhesivo en líneas de embotellado de alta velocidad o el desprendimiento por humedad en entornos refrigerados. Conocer las propiedades físicas de las películas, papeles sintéticos, hojas metalizadas y papeles estandarizados garantiza un rendimiento uniforme, una aplicación impecable y la máxima presencia de marca.",
    ryanNotebookTitle: "Cuaderno de ingeniería de Ryan Wong: Solución al desprendimiento de etiquetas en tubos flexibles",
    ryanNotebookText: "A principios de 2025, un cliente de cosmética orgánica de gama alta acudió a nosotros debido a que las etiquetas de sus tubos de limpiador facial se arrugaban y despegaban gravemente en los puntos de venta. Utilizaban una etiqueta estándar de película de polipropileno (PP) brillante de 80 micras con un adhesivo acrílico en emulsión común. Al realizar el análisis de diagnóstico, identifiqué dos problemas combinados: primero, el material del tubo flexible (LDPE) tiene una energía superficial baja, lo que impide que el adhesivo establezca una unión fuerte; segundo, la flexión constante al apretar el tubo ejercía un esfuerzo cortante sobre la capa de adhesivo, provocando la delaminación. Recomendé cambiar a una etiqueta de película de PE transparente de 50 micras altamente flexible con adhesivo acrílico solvente de alto agarre sobre soporte Glassine, subimpresa con tinta blanca y protegida por un laminado brillante flexible. Esta combinación se adaptó perfectamente a la baja energía superficial del tubo y se flexionó con él, eliminando por completo los fallos y manteniendo una apariencia impecable en el lineal.",
    painPointsTitle: "Soluciones a 5 Fallos Comunes de Etiquetas",
    painPoints: [
      {
        num: "1",
        problem: "Desprendimiento en condiciones frías o húmedas",
        solution: "Utilice una película sintética de PP o PVC junto con un adhesivo acrílico solvente resistente al frío. Evite las colas en emulsión estándar en productos refrigerados."
      },
      {
        num: "2",
        problem: "Burbujas y arrugas en envases curvos o tubos flexibles",
        solution: "Use materiales frontales altamente flexibles, como PE o PP transparente de 50 micras, en lugar de PVC rígido o papel estucado, combinados con un adhesivo de alta adherencia."
      },
      {
        num: "3",
        problem: "Migración de adhesivo y atascos en las etiquetadoras",
        solution: "Especifique soportes Glassine de alta calidad con niveles de liberación de silicona controlados y adhesivos acrílicos con alta cohesión para evitar fugas."
      },
      {
        num: "4",
        problem: "Arañazos y decoloración durante el transporte o en tienda",
        solution: "Aplique una película laminada brillante o mate sobre los gráficos impresos, o use un barniz protector UV para fijar las tintas y evitar la abrasión."
      },
      {
        num: "5",
        problem: "Falta de contraste en botellas transparentes",
        solution: "Utilice una capa de tinta blanca de fondo bajo la impresión en color sobre películas transparentes para bloquear el color del envase o del producto líquido y resaltar el diseño."
      }
    ],
    specTitle: "Matriz de Especificaciones Técnicas",
    specSubtitle: "Parámetros de ingeniería de los 11 materiales de etiquetas principales:",
    thMaterial: "Material / Acabado",
    thThickness: "Espesor",
    thAdhesive: "Tipo de Adhesivo",
    thLiner: "Tipo de Soporte",
    thTemp: "Rango de Temp",
    thBestUse: "Mejor Aplicación",
    faqTitle: "Preguntas Frecuentes Técnicas",
    faqs: [
      {
        q: "¿Cuál es la diferencia entre el adhesivo solvente y el adhesivo en emulsión?",
        a: "Los adhesivos solventes (a base de aceite) ofrecen una resistencia superior al agua, los solventes químicos, la humedad y las altas temperaturas, ideales para exteriores, cosméticos y cadena de frío. Los adhesivos en emulsión (a base de agua) son más económicos y ecológicos, aptos para interiores secos, pero se degradan con la humedad extrema."
      },
      {
        q: "¿Por qué se prefiere el soporte Glassine sobre los soportes de papel Kraft comunes?",
        a: "El soporte Glassine tiene un espesor muy uniforme, alta transparencia y alta resistencia a la tracción. Facilita el correcto funcionamiento de los sensores ópticos de las etiquetadoras automáticas de alta velocidad y garantiza un desprendimiento limpio sin roturas."
      },
      {
        q: "¿Qué es la subimpresión de tinta blanca y cuándo es necesaria?",
        a: "Las etiquetas transparentes o metalizadas carecen de fondo blanco. Al imprimir colores sobre ellas, las tintas se ven translúcidas o se mezclan con el color del envase. Subimprimir una base de tinta blanca opaca debajo del diseño asegura la correcta reproducción de los colores."
      },
      {
        q: "¿Se pueden reciclar las etiquetas de papel sintético PP con el envase?",
        a: "Sí, las etiquetas de PP sintético son altamente compatibles en el flujo de reciclaje de envases de PP y HDPE. Al pertenecer a la misma familia de olefinas, no requieren separación forzada durante el proceso mecánico, a diferencia del PVC."
      },
      {
        q: "¿Cuáles son las condiciones óptimas de almacenamiento para las bobinas de etiquetas?",
        a: "Deben almacenarse a 22°C ± 5°C y 50% ± 10% de humedad relativa en su bolsa original sellada. Coloque las bobinas en posición horizontal para evitar que el adhesivo fluya por gravedad y deforme los bordes."
      }
    ],
    showcaseTitle: "Galería de Muestras de Etiquetas",
    showcaseDesc: "Detalles físicos de nuestros 11 materiales y acabados de etiquetas premium:",
    samples: [
      {
        title: "Etiqueta Autoadhesiva Transparente 5c",
        desc: "Película ultra transparente de 50 micras sobre soporte Glassine. Con laminado brillante, troquelado, tinta blanca de fondo y estampado de oro en caliente. Ideal para cosméticos y envases de vidrio."
      },
      {
        title: "Película Plata Mate 5c",
        desc: "Película metalizada plata de 50 micras con acabado mate sedoso. Resistente e impermeable. Aporta una estética tecnológica y moderna a dispositivos electrónicos, perfumería y moda."
      },
      {
        title: "Papel Sintético PP de Soporte Grueso",
        desc: "Papel sintético PP de alta opacidad sobre soporte protector grueso y acabado brillante. Máxima resistencia a la rotura y al agua. Ideal para botes de leche en polvo y tubos flexibles."
      },
      {
        title: "Papel Estucado Glassine (Hot Melt)",
        desc: "Papel estucado semi-brillante tradicional sobre soporte Glassine con cola hot-melt de alto agarre inicial. Acabado con barniz brillante y oro en caliente. Perfecto para frutas, verduras y logística."
      },
      {
        title: "Papel Estucado Avery Glassine (Holográfico)",
        desc: "Papel estucado de la marca Avery Dennison cubierto con laminación holográfica láser. Crea un impresionante efecto de arcoíris según el ángulo de luz. Ideal para sellos de seguridad y packaging llamativo."
      },
      {
        title: "Película Plata Plana Glassine",
        desc: "Película metalizada plata lisa sobre Glassine con laminación brillante y tinta blanca de fondo. Muy utilizada en placas de características de maquinaria, códigos de barras y botellas de agua."
      },
      {
        title: "Papel Sintético PP Glassine (Oro en Caliente)",
        desc: "Material frontal de papel sintético PP sobre soporte Glassine. Decorado con laminado brillante y estampado de oro en caliente. Excelente resistencia a aceites y grasas, ideal para tarros de miel orgánica."
      },
      {
        title: "Película Oro Cepillado",
        desc: "Película metalizada con textura de oro cepillado de alta calidad sobre soporte Glassine. Con laminado brillante protector. Ideal para etiquetas de aceites industriales, automoción y cosmética de lujo."
      },
      {
        title: "Plata Brillante Glassine 5c",
        desc: "Película de plata espejo brillante de 50 micras sobre Glassine. Con adhesivo acrílico solvente resistente al agua. Diseñada para balastos de Xenón, componentes de automoción y maquinaria pesada."
      },
      {
        title: "Película Perlada Glassine",
        desc: "Material frontal blanco perlado que proporciona un brillo sutil y sofisticado. Con laminado brillante. Muy utilizado en etiquetas de vinos vintage, latas de té premium y cosmética de baño."
      },
      {
        title: "PVC Blanco Brillante 8c (Cola Solvente)",
        desc: "Película de PVC blanco brillante de 80 micras con adhesivo solvente acrílico fuerte. Excelente resistencia al exterior, lluvia y rayos UV. Ideal para marcadores de contenedores y bidones químicos."
      }
    ]
  },
  fr: {
    seoTitle: "Guide des Matériaux d'Étiquettes | Achieve Pack",
    seoDesc: "Comparez 11 matériaux d'étiquettes personnalisées : film transparent, argent mat, papier synthétique PP, papier couché, or brossé et PVC blanc. Conseils techniques.",
    keywords: ["etiquettes personnalisees", "materiaux d'etiquettes", "autocollant transparent", "papier synthetique PP", "etiquette metallique", "etiquette de bouteille"],
    heroBadge: "Fiche Technique & Paramètres",
    heroTitle1: "Matériaux d'Étiquettes",
    heroTitle2: "Guide de Sélection",
    heroDesc: "Un guide de référence B2B complet pour choisir le support d'étiquette, la chimie de l'adhésif, le dorsal et les finitions d'impression pour vos emballages.",
    btnCall: "Réserver un RDV Technique",
    btnWa: "Contact par WhatsApp",
    moqBadge: "KIT D'ÉCHANTILLONS GRATUIT",
    empathyHookTitle: "La science critique de la sélection d'étiquettes",
    empathyHookText: "Une étiquette est bien plus qu'un simple élément décoratif ; c'est un composant d'ingénierie essentiel du système d'emballage de votre produit. Choisir une mauvaise combinaison de frontal, d'adhésif ou de support peut entraîner des défaillances critiques sur la chaîne de conditionnement ou en magasin—telles que le décollement de l'étiquette sur des tubes cosmétiques flexibles à faible rayon, le fluage de la colle sur les lignes d'embouteillage rapides, ou le décollement dû à l'humidité dans les environnements réfrigérés. Maîtriser les propriétés physiques des films, des papiers synthétiques, des feuilles métallisées et des papiers couchés garantit des performances constantes, une pose parfaite et un impact visuel optimal de votre marque.",
    ryanNotebookTitle: "Carnet d'ingénierie de Ryan Wong : Résolution du décollement d'étiquette sur tube souple",
    ryanNotebookText: "Début 2025, un client en cosmétique biologique haut de gamme nous a contactés car les étiquettes de ses tubes de gel nettoyant visage se plissaient et se décollaient dans les magasins. Ils utilisaient une étiquette en film polypropylène (PP) brillant standard de 80 microns avec un adhésif acrylique en émulsion classique. Mon diagnostic a révélé deux problèmes cumulés : premièrement, le matériau du tube (LDPE) a une faible énergie de surface, empêchant l'adhésif de créer un lien fort ; deuxièmement, les pressions répétées sur le tube exerçaient une contrainte de cisaillement sur l'adhésif, causant le décollement. J'ai recommandé de passer à une étiquette en PE transparent de 50 microns très flexible, enduite d'un adhésif solvant acrylique à fort tack sur dorsal Glassine, avec sous-couche d'encre blanche et pelliculage brillant flexible. Cette solution a parfaitement épousé la faible énergie de surface du tube et s'est déformée avec lui, éliminant totalement les défauts tout en préservant l'esthétique du produit.",
    painPointsTitle: "Solutions aux 5 Défaillances d'Étiquettes Courantes",
    painPoints: [
      {
        num: "1",
        problem: "Décollement en milieu froid ou humide",
        solution: "Utilisez un film PP synthétique ou PVC combiné à un adhésif solvant acrylique résistant au gel. Évitez les colles en émulsion standard pour les produits réfrigérés."
      },
      {
        num: "2",
        problem: "Bulles et plissements sur flacons courbes ou flexibles",
        solution: "Utilisez des supports souples comme le PE ou PP transparent de 50 microns plutôt que du PVC rigide ou du papier couché, associés à un adhésif à fort pouvoir collant."
      },
      {
        num: "3",
        problem: "Fluage d'adhésif et bourrages sur les étiqueteuses",
        solution: "Optez pour des supports Glassine de haute qualité avec des forces de libération de silicone contrôlées et des adhésifs acryliques à haute cohésion pour éviter les coulures."
      },
      {
        num: "4",
        problem: "Rayures et décoloration de l'encre durant le transport",
        solution: "Appliquez un pelliculage brillant ou mat protecteur sur les graphismes imprimés, ou déposez un vernis de protection UV pour fixer les couleurs et éviter l'usure."
      },
      {
        num: "5",
        problem: "Manque de contraste sur les flacons transparents",
        solution: "Imprimez un fond de soutien d'encre blanche opaque sous les décors colorés sur les films transparents pour faire ressortir le visuel malgré la couleur du produit."
      }
    ],
    specTitle: "Matrice des Spécifications Techniques",
    specSubtitle: "Paramètres physiques des 11 matériaux d'étiquettes principaux :",
    thMaterial: "Matériau / Finition",
    thThickness: "Épaisseur",
    thAdhesive: "Type d'Adhésif",
    thLiner: "Type de Dorsal",
    thTemp: "Plage de Temp",
    thBestUse: "Meilleure Application",
    faqTitle: "Questions Fréquentes Techniques",
    faqs: [
      {
        q: "Quelle est la différence entre un adhésif solvant (base huile) et un adhésif émulsion (base eau) ?",
        a: "Les adhésifs solvants (base huile) offrent une excellente résistance à l'eau, à l'humidité, aux solvants chimiques et aux températures élevées, parfaits pour l'extérieur, la cosmétique et le froid. Les adhésifs en émulsion (base eau) sont plus économiques et écologiques, adaptés aux intérieurs secs, mais s'altèrent en milieu très humide."
      },
      {
        q: "Pourquoi préfère-t-on un support Glassine aux supports de papier Kraft ordinaires ?",
        a: "Le support Glassine a une épaisseur constante, une haute transparence et une forte résistance à la traction. Il permet aux capteurs optiques des étiqueteuses automatiques rapides de détecter précisément l'écart entre les étiquettes et assure une libération propre sans rupture."
      },
      {
        q: "Qu'est-ce que le soutien en encre blanche et quand est-il nécessaire ?",
        a: "Les étiquettes transparentes ou métallisées n'ont pas de fond blanc. Si l'on imprime directement des encres de couleur, elles paraissent translucides. L'impression d'une couche d'encre blanche opaque sous le décor assure un rendu des couleurs fidèle et vif."
      },
      {
        q: "Les étiquettes en papier synthétique PP peuvent-elles être recyclées avec le flacon ?",
        a: "Oui, les étiquettes en PP synthétique sont compatibles avec le recyclage des emballages en PP et HDPE. Appartenant à la même famille de polymères, elles ne nécessitent pas de tri mécanique forcé lors du traitement, contrairement au PVC."
      },
      {
        q: "Quelles sont les conditions optimales de stockage des bobines d'étiquettes ?",
        a: "Elles doivent être stockées dans un endroit régulé à 22°C ± 5°C avec 50% ± 10% d'humidité relative. Conservez les bobines sous plastique étanche et stockez-les à l'horizontale pour éviter que la colle ne migre par gravité sur les bords."
      }
    ],
    showcaseTitle: "Galerie d'Échantillons d'Étiquettes",
    showcaseDesc: "Détails macro-physiques de nos 11 options d'étiquettes premium :",
    samples: [
      {
        title: "Étiquette Autocollante Transparente 5c",
        desc: "Film ultra transparent de 50 microns sur dorsal Glassine. Finition vernis brillant, découpe à la forme, soutien blanc opaque et dorure à chaud brillante. Idéal pour un effet sans étiquette sur flacon en verre ou cosmétique."
      },
      {
        title: "Film Argent Mat 5c",
        desc: "Film argent métallisé mat de 50 microns. Pelliculage mat protecteur. Confère un rendu haut de gamme sobre et technologique pour les étiquettes d'appareils, la parfumerie ou les articles de mode."
      },
      {
        title: "Papier Synthétique PP Dorsal Épais",
        desc: "Papier synthétique PP à forte opacité sur dorsal épais avec pelliculage brillant. Excellente résistance à la déchirure et à l'eau. Recommandé pour le lait en poudre, la nutrition et les flacons souples."
      },
      {
        title: "Papier Couché Glassine (Hot Melt)",
        desc: "Papier couché semi-brillant classique sur dorsal Glassine avec adhésif hot-melt à forte adhésion immédiate. Finition vernis brillant et dorure dorée. Parfait pour les fruits, légumes et la logistique."
      },
      {
        title: "Papier Couché Avery Glassine (Laser)",
        desc: "Papier couché Avery Dennison sur Glassine recouvert d'une lamination holographique laser. Crée un effet de diffraction arc-en-ciel sous la lumière. Idéal pour les scellés de sécurité."
      },
      {
        title: "Film Argent Plat Glassine",
        desc: "Film métallisé argent plat lisse sur Glassine avec pelliculage brillant et impression avec soutien blanc. Très utilisé sur les plaques d'immatriculation d'équipements, codes-barres et bouteilles d'eau."
      },
      {
        title: "Papier Synthétique PP Glassine (Dorure à Chaud)",
        desc: "Papier synthétique PP imperméable sur Glassine. Finition pelliculage brillant et dorure dorée à chaud brillante. Très résistant à l'eau et aux huiles, standard pour le miel biologique et la cosmétique."
      },
      {
        title: "Film Or Brossé",
        desc: "Film métallisé or brossé de qualité supérieure sur support Glassine. Finition pelliculage brillant. Adapté pour les étiquettes de lubrifiants industriels, chimie, automobile et luxe."
      },
      {
        title: "Argent Miroir Glassine 5c",
        desc: "Film métallique argent brillant miroir de 50 microns sur Glassine. Adhésif acrylique solvant ultra-résistant à l'eau. Idéal pour les ballasts Xenon, l'électronique et l'automobile."
      },
      {
        title: "Film Nacré Glassine",
        desc: "Film blanc nacré offrant un éclat perlé délicat et élégant. Finition vernis brillant. Couramment utilisé pour les boissons vintage, les boîtes de thé haut de gamme et les soins du bain."
      },
      {
        title: "PVC Blanc Brillant 8c (Colle Solvant)",
        desc: "Film PVC blanc brillant robuste de 80 microns avec adhésif acrylique solvant puissant. Parfaite résistance extérieure, humidité et UV. Idéal pour les fûts chimiques et les conteneurs."
      }
    ]
  }
}

// Performance data matrix comparing the 11 materials
const PERFORMANCE_DATA = [
  { key: "transparent", name: "5c Transparent", thickness: "50 μm (5丝)", adhesive: "Solvent Acrylic (油胶)", liner: "Glassine (格底)", temp: "-20°C to 90°C", bestUse: "Cosmetics, Glass Bottles, Food Jars" },
  { key: "matte_silver", name: "5c Matte Silver Film", thickness: "50 μm (5丝)", adhesive: "Emulsion Acrylic (水胶)", liner: "Paper (黄底/白底)", temp: "-10°C to 80°C", bestUse: "Apparel Tags, Electronics, Logistics" },
  { key: "pp_synthetic_thick", name: "PP Synthetic (Thick)", thickness: "75 μm", adhesive: "Solvent Acrylic (油胶)", liner: "Thick Kraft (厚底)", temp: "-20°C to 100°C", bestUse: "Milk Powder Tins, Squeeze Bottles" },
  { key: "art_paper_hotmelt", name: "Art Paper (Hot Melt)", thickness: "80 μm", adhesive: "Hot Melt (热熔胶)", liner: "Glassine (格底)", temp: "-5°C to 70°C", bestUse: "Fresh Produce, Fruit Stickers, Logistics" },
  { key: "avery_laser", name: "Avery Art Paper (Laser)", thickness: "80 μm", adhesive: "Emulsion Acrylic (水胶)", liner: "Glassine (格底)", temp: "-10°C to 85°C", bestUse: "Security Seals, Holographic Labels" },
  { key: "flat_silver", name: "Flat Silver Film", thickness: "50 μm (5丝)", adhesive: "Solvent Acrylic (油胶)", liner: "Glassine (格底)", temp: "-30°C to 120°C", bestUse: "Asset Tags, Machinery Ballasts, Barcodes" },
  { key: "pp_synthetic_gold", name: "PP Synthetic (Gold Foil)", thickness: "60 μm", adhesive: "Solvent Acrylic (油胶)", liner: "Glassine (格底)", temp: "-20°C to 90°C", bestUse: "Honey Jars, Organic Oils, Cosmetics" },
  { key: "brushed_gold", name: "Brushed Gold Film", thickness: "50 μm (5丝)", adhesive: "Solvent Acrylic (油胶)", liner: "Glassine (格底)", temp: "-20°C to 100°C", bestUse: "Industrial Grease, Ballasts, Luxury Tags" },
  { key: "mirror_silver", name: "5c Glossy Mirror Silver", thickness: "50 μm (5丝)", adhesive: "Solvent Acrylic (油胶)", liner: "Glassine (格底)", temp: "-20°C to 110°C", bestUse: "Ballasts, Xenon Lamps, Car Electronics" },
  { key: "pearl_film", name: "Pearlized White Film", thickness: "60 μm", adhesive: "Emulsion Acrylic (水胶)", liner: "Glassine (格底)", temp: "-10°C to 80°C", bestUse: "Tea Canisters, Premium Cosmetics" },
  { key: "white_pvc", name: "8c Glossy White PVC", thickness: "80 μm (8丝)", adhesive: "Solvent Acrylic (油胶)", liner: "Paper (黄底/白底)", temp: "-40°C to 120°C", bestUse: "Outdoor Signage, Chemical Drums, Bins" }
]

const LabelMaterialsGuidePage: React.FC = () => {
  const { i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const currentLang = i18n.language || 'en'
  const localT = translations[currentLang] || translations['en']

  // 11 images configuration
  const images = [
    { src: '/imgs/topics/label-materials/Image-1.jpg?v=2', title: localT.samples[0].title, desc: localT.samples[0].desc },
    { src: '/imgs/topics/label-materials/Image-2.jpg?v=2', title: localT.samples[1].title, desc: localT.samples[1].desc },
    { src: '/imgs/topics/label-materials/Image-3.jpg?v=2', title: localT.samples[2].title, desc: localT.samples[2].desc },
    { src: '/imgs/topics/label-materials/Image-4.jpg?v=2', title: localT.samples[3].title, desc: localT.samples[3].desc },
    { src: '/imgs/topics/label-materials/Image-5.jpg?v=2', title: localT.samples[4].title, desc: localT.samples[4].desc },
    { src: '/imgs/topics/label-materials/Image-6.jpg?v=2', title: localT.samples[5].title, desc: localT.samples[5].desc },
    { src: '/imgs/topics/label-materials/Image-7.jpg?v=2', title: localT.samples[6].title, desc: localT.samples[6].desc },
    { src: '/imgs/topics/label-materials/Image-8.jpg?v=2', title: localT.samples[7].title, desc: localT.samples[7].desc },
    { src: '/imgs/topics/label-materials/Image-9.jpg?v=2', title: localT.samples[8].title, desc: localT.samples[8].desc },
    { src: '/imgs/topics/label-materials/Image-10.jpg?v=2', title: localT.samples[9].title, desc: localT.samples[9].desc },
    { src: '/imgs/topics/label-materials/Image.jpg?v=2', title: localT.samples[10].title, desc: localT.samples[10].desc }
  ]

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = images.length - 1
    if (newIndex >= images.length) newIndex = 0
    setGalleryEnlarged({ src: images[newIndex].src, index: newIndex })
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (1): pouch.eco (B2C/DTC)
  // ----------------------------------------------------
  if (isPouch()) {
    return (
      <PouchLayout>
        <DualDomainSEOHead 
          title={localT.seoTitle}
          description={localT.seoDesc}
          keywords={localT.keywords}
          schemaType="Product"
        />

        {/* Hero Section */}
        <section className="bg-[#D4FF00] text-black py-24 px-6 border-b-4 border-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 space-y-6 text-left">
              <div className="inline-block bg-black text-[#D4FF00] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {localT.heroBadge}
              </div>
              <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl leading-none uppercase tracking-tight">
                {localT.heroTitle1}<br/>
                <span className="text-white bg-black px-4 py-1 border-4 border-black inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">LABELS</span>
              </h1>
              <p className="font-['JetBrains_Mono'] text-lg md:text-xl text-black font-semibold max-w-xl leading-relaxed">
                {localT.heroDesc}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
                  {localT.btnCall}
                </NeoButton>
                <NeoButton href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20labels%20from%20pouch.eco" variant="secondary">
                  {localT.btnWa}
                </NeoButton>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="relative border-4 border-black p-4 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] group rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/imgs/topics/label-materials/Image-1.jpg?v=2" 
                  alt="Custom Bakery Label" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -top-6 -right-6 bg-[#FF00FF] text-white font-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-6 text-sm">
                  {localT.moqBadge}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Empathy Hook */}
        <section className="py-20 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl uppercase tracking-tight flex items-center gap-3">
              <Sparkle className="h-8 w-8 text-primary-600" />
              {localT.empathyHookTitle}
            </h2>
            <p className="font-['JetBrains_Mono'] text-lg text-neutral-700 leading-relaxed">
              {localT.empathyHookText}
            </p>
          </div>
        </section>

        {/* Sample Gallery */}
        <section className="py-24 px-6 bg-[#F0F0F0] border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-6 tracking-tight">
              {localT.showcaseTitle}
            </h2>
            <p className="text-center font-['JetBrains_Mono'] text-neutral-600 max-w-xl mx-auto mb-16">{localT.showcaseDesc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((img, i) => (
                <div key={i} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col hover:-translate-y-1 transition duration-200">
                  <div className="relative border-b-4 border-black aspect-square overflow-hidden cursor-pointer" onClick={() => setGalleryEnlarged({ src: img.src, index: i })}>
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-black text-xl mb-3 uppercase font-['Space_Grotesk']">{img.title}</h3>
                      <p className="font-['JetBrains_Mono'] text-xs text-neutral-600 leading-relaxed mb-6">{img.desc}</p>
                    </div>
                    <button 
                      onClick={() => setGalleryEnlarged({ src: img.src, index: i })}
                      className="border-2 border-black font-black uppercase text-xs px-4 py-2 hover:bg-neutral-100 transition cursor-pointer self-start"
                    >
                      Enlarge View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Matrix Table */}
        <section className="py-24 bg-black text-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-center uppercase mb-16 text-[#D4FF00] tracking-tight">{localT.specTitle}</h2>
            <div className="overflow-x-auto border-4 border-white bg-black">
              <table className="w-full font-['JetBrains_Mono'] text-sm">
                <thead className="bg-white text-black border-b-4 border-black">
                  <tr>
                    <th className="p-6 text-left">{localT.thMaterial}</th>
                    <th className="p-6 text-left">{localT.thThickness}</th>
                    <th className="p-6 text-left">{localT.thAdhesive}</th>
                    <th className="p-6 text-left">{localT.thLiner}</th>
                    <th className="p-6 text-left">{localT.thTemp}</th>
                    <th className="p-6 text-left">{localT.thBestUse}</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-white/20">
                  {PERFORMANCE_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-900 transition-colors">
                      <td className="p-6 font-black uppercase text-[#D4FF00]">{row.name}</td>
                      <td className="p-6">{row.thickness}</td>
                      <td className="p-6">{row.adhesive}</td>
                      <td className="p-6">{row.liner}</td>
                      <td className="p-6">{row.temp}</td>
                      <td className="p-6 text-neutral-300">{row.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ryan's Engineering Notebook */}
        <section className="py-24 bg-[#FF00FF] text-black px-6 border-b-4 border-black">
          <div className="max-w-5xl mx-auto border-4 border-black p-8 md:p-12 bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 left-8 bg-[#D4FF00] text-black border-4 border-black font-black px-4 py-1 text-sm rotate-1">
              ENGINEERING NOTEBOOK
            </div>
            <h3 className="font-['Space_Grotesk'] font-black text-2xl md:text-3xl mt-4 mb-6 uppercase">{localT.ryanNotebookTitle}</h3>
            <p className="font-['JetBrains_Mono'] text-base md:text-lg leading-relaxed text-neutral-800 italic">
              "{localT.ryanNotebookText}"
            </p>
          </div>
        </section>

        {/* 5 Pain Points & Solutions */}
        <section className="py-24 px-6 bg-white border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl text-center uppercase mb-16 tracking-tight">{localT.painPointsTitle}</h2>
            <div className="space-y-8">
              {localT.painPoints.map((item: any, i: number) => (
                <div key={i} className="border-4 border-black p-6 bg-[#F0F0F0] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex gap-6 items-start">
                  <div className="bg-[#D4FF00] text-black border-4 border-black w-12 h-12 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-xl uppercase font-['Space_Grotesk']">{item.problem}</h4>
                    <p className="font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed"><strong className="text-[#10b981]">Solution:</strong> {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical FAQs */}
        <section className="py-24 bg-[#F0F0F0] px-6 border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Space_Grotesk'] font-black text-4xl text-center uppercase mb-16 tracking-tight flex items-center justify-center gap-3">
              <HelpCircle className="h-8 w-8 text-black" />
              {localT.faqTitle}
            </h2>
            <div className="space-y-6">
              {localT.faqs.map((faq: any, i: number) => (
                <details key={i} className="border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer group select-none">
                  <summary className="font-black text-lg uppercase flex justify-between items-center font-['Space_Grotesk'] outline-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-black group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <p className="mt-4 font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed border-t-2 border-black pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-black text-white px-6 text-center">
          <h2 className="font-['Space_Grotesk'] font-black text-5xl md:text-7xl uppercase mb-8 text-[#D4FF00] tracking-tight">Need Custom Labels?</h2>
          <p className="font-['JetBrains_Mono'] text-lg opacity-80 mb-12 max-w-xl mx-auto">Order a free label sample kit or schedule a brief technical consultation with our engineering team.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">Book Technical Call</NeoButton>
            <NeoButton href="https://wa.me/85269704411" variant="secondary">Direct WhatsApp</NeoButton>
          </div>
        </section>

        {/* Gallery Overlay Modal */}
        {galleryEnlarged && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button className="absolute top-6 right-6 text-white border-2 border-white rounded-full p-2 hover:bg-white/10 transition cursor-pointer" onClick={() => setGalleryEnlarged(null)}>
              <X className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 bg-white border-4 border-black p-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-left">
              <div className="w-full md:w-1/2 aspect-square relative border-4 border-black overflow-hidden bg-neutral-100 flex items-center justify-center">
                <img src={galleryEnlarged.src} alt={images[galleryEnlarged.index].title} className="max-w-full max-h-full object-contain" />
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 hover:bg-neutral-100 cursor-pointer" onClick={() => navigateGallery('prev')}>
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 hover:bg-neutral-100 cursor-pointer" onClick={() => navigateGallery('next')}>
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="inline-block bg-[#D4FF00] text-black border-2 border-black px-2 py-0.5 text-xs font-bold font-mono">
                    SAMPLE {galleryEnlarged.index + 1} OF {images.length}
                  </span>
                  <h3 className="font-black text-3xl font-['Space_Grotesk'] uppercase border-b-4 border-black pb-2">
                    {images[galleryEnlarged.index].title}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 leading-relaxed">
                    {images[galleryEnlarged.index].desc}
                  </p>
                </div>
                <button 
                  className="mt-6 border-4 border-black bg-black text-white hover:bg-neutral-800 transition font-black uppercase text-sm py-3 text-center cursor-pointer shadow-[4px_4px_0px_0px_rgba(156,163,175,1)]"
                  onClick={() => setGalleryEnlarged(null)}
                >
                  Close Showcase
                </button>
              </div>
            </div>
          </div>
        )}
      </PouchLayout>
    )
  }

  // ----------------------------------------------------
  // DUAL DOMAIN RENDERING BRANCH (2): achievepack.com (B2B)
  // ----------------------------------------------------
  const sections = [
    {
      id: 'overview',
      title: localT.empathyHookTitle,
      icon: <Info className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg font-medium leading-relaxed bg-neutral-50 p-6 border-l-4 border-primary-600 rounded-r-lg">
            {localT.empathyHookText}
          </p>
        </div>
      )
    },
    {
      id: 'samples-gallery',
      title: localT.showcaseTitle,
      icon: <ImageIcon className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-600 text-sm">{localT.showcaseDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between bg-white">
                <div>
                  <div className="aspect-square relative cursor-pointer overflow-hidden border-b" onClick={() => setGalleryEnlarged({ src: img.src, index: i })}>
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-neutral-900 text-base mb-1">{img.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">{img.desc}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <button 
                    onClick={() => setGalleryEnlarged({ src: img.src, index: i })}
                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 cursor-pointer"
                  >
                    View Macro Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'spec-matrix',
      title: localT.specTitle,
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 text-sm">{localT.specSubtitle}</p>
          <div className="overflow-x-auto border rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-neutral-200 text-sm">
              <thead className="bg-neutral-50 font-semibold text-neutral-700">
                <tr>
                  <th className="px-6 py-3 text-left">{localT.thMaterial}</th>
                  <th className="px-6 py-3 text-left">{localT.thThickness}</th>
                  <th className="px-6 py-3 text-left">{localT.thAdhesive}</th>
                  <th className="px-6 py-3 text-left">{localT.thLiner}</th>
                  <th className="px-6 py-3 text-left">{localT.thTemp}</th>
                  <th className="px-6 py-3 text-left">{localT.thBestUse}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-600">
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="px-6 py-4 font-semibold text-neutral-900">{row.name}</td>
                    <td className="px-6 py-4">{row.thickness}</td>
                    <td className="px-6 py-4 font-mono text-xs">{row.adhesive}</td>
                    <td className="px-6 py-4">{row.liner}</td>
                    <td className="px-6 py-4">{row.temp}</td>
                    <td className="px-6 py-4 text-xs text-neutral-500">{row.bestUse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'ryan-notebook',
      title: localT.ryanNotebookTitle,
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-6 md:p-8 space-y-4">
          <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            TECHNICAL CASE LOG
          </div>
          <p className="text-neutral-800 leading-relaxed italic font-serif text-lg">
            "{localT.ryanNotebookText}"
          </p>
        </div>
      )
    },
    {
      id: 'pain-points-solved',
      title: localT.painPointsTitle,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid gap-6">
          {localT.painPoints.map((item: any, i: number) => (
            <div key={i} className="border rounded-lg p-5 flex gap-4 bg-white">
              <span className="bg-primary-50 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {item.num}
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-neutral-900 text-base">{item.problem}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <strong className="text-primary-600 font-semibold">Solution: </strong> {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'faqs-block',
      title: localT.faqTitle,
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          {localT.faqs.map((faq: any, i: number) => (
            <details key={i} className="bg-white border rounded-lg p-4 cursor-pointer group select-none">
              <summary className="font-semibold text-neutral-900 flex justify-between items-center outline-none">
                <span>{faq.q}</span>
                <ChevronDown className="h-4 w-4 text-neutral-500 group-open:rotate-180 transition-transform duration-200" />
              </summary>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed border-t pt-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      )
    }
  ]

  const relatedLinks = [
    { title: "Custom Compostable Labels Page", url: "/products/custom-compostable-labels", description: "Learn about eco-friendly label options with GRS certifications." },
    { title: "Material Data Sheet Catalog", url: "/materials/data-sheet", description: "Download standard barrier film specifications sheets." },
    { title: "Stand Up Pouch Packaging Guide", url: "/topics/stand-up-pouch-packaging", description: "Details on dimensions, volumes, and material setups." }
  ]

  return (
    <SEOPageLayout
      heroBgColor="#1f2937"
      title={localT.seoTitle}
      description={localT.seoDesc}
      keywords={localT.keywords}
      canonicalUrl="https://achievepack.com/topics/label-materials-guide"
      heroTitle={localT.heroTitle1}
      heroSubtitle={localT.heroTitle2}
      heroImage="/imgs/topics/label-materials/Image-1.jpg?v=2"
      heroImageAlt="Custom adhesive labels sheet micro details"
      sections={sections}
      faqs={localT.faqs.map((f: any) => ({ question: f.q, answer: f.a }))}
      relatedLinks={relatedLinks}
    >
      {/* Lightbox Modal for AP Layout */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <div className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-left" onClick={(e) => e.stopPropagation()}>
            <div className="w-full md:w-1/2 aspect-square relative bg-neutral-100 flex items-center justify-center border-r">
              <img src={galleryEnlarged.src} alt={images[galleryEnlarged.index].title} className="max-w-full max-h-full object-contain p-2" />
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 border shadow cursor-pointer" 
                onClick={() => navigateGallery('prev')}
              >
                <ChevronLeft className="h-5 w-5 text-neutral-800" />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 border shadow cursor-pointer" 
                onClick={() => navigateGallery('next')}
              >
                <ChevronRight className="h-5 w-5 text-neutral-800" />
              </button>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
                  Label Sample {galleryEnlarged.index + 1} / {images.length}
                </span>
                <h3 className="font-bold text-2xl text-neutral-900 mt-3 border-b pb-2 mb-3">
                  {images[galleryEnlarged.index].title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {images[galleryEnlarged.index].desc}
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={openCalendly}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-lg text-center text-sm cursor-pointer"
                >
                  Consult on this Material
                </button>
                <button 
                  className="px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                  onClick={() => setGalleryEnlarged(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </SEOPageLayout>
  )
}

export default LabelMaterialsGuidePage
