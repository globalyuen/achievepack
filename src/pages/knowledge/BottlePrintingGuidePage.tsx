import React from 'react'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { Printer, ShieldCheck, Flame, Scissors, HelpCircle, Layers, ArrowRight, Award, Box } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import RelatedProductsShowcase from '../../components/RelatedProductsShowcase'

const translations = {
  en: {
    title: "How to Print on Bottles & Canisters: 5 Main Methods Compared",
    metaDesc: "Compare Heat Transfer, Laser Engraving, Sticker Labeling, Silk Screen, and Pad Printing for custom bottles and canisters. Read materials specs, wash limits, and GRS auditing standards.",
    heroTitle: "How to Print on Bottles & Jars: The Ultimate Customization Guide",
    heroSubtitle: "Analyzing heat transfer, laser engraving, stickers, silk screen, and pad printing for sustainable rigid packaging.",
    faq1q: "Which printing method is best for cylindrical acrylic canisters?",
    faq1a: "For cylindrical acrylic canisters, silk screen printing is the industry standard for 1-2 spot colors due to high adhesion and lower cost. For complex full-color designs, heat transfer film via a heated silicone roller offers the best wrap-around result, while adhesive labels are the most versatile for fast product runs.",
    faq2q: "How does heat transfer printing on a bottle bottom work?",
    faq2a: "Heat transfer printing uses a heated silicone plate or roller to apply pressure to a carrier film. As the bottle rotates on rollers, the heat (150°C-210°C) melts the adhesive layer of the film, releasing the printed ink onto the plastic/acrylic surface, creating a permanent high-resolution graphic wrap.",
    faq3q: "Is laser engraving permanent on painted metallic and plastic surfaces?",
    faq3a: "Yes. Laser engraving is a subtractive process that uses a high-energy laser beam to vaporize or etch the top coat of the bottle, exposing the material underneath (such as stainless steel or contrasting polymer layers). It is 100% permanent, wash-proof, and won't fade.",
    introTitle: "Rigid Packaging Customization: Decoding the Print Pipeline",
    quickAnswer: "Quick Answer: Small spot-color logos on bottom curves are printed using Pad Printing. Silk Screen is best for body spot colors, while full-color wraps require Heat Transfer. Laser Engraving provides permanent markings, and Sticker Labels are best for versatile smaller batches.",
    takeawayTitle: "Key Takeaways",
    takeaway1: "Silk screen printing provides the thickest ink layer, delivering vibrant spot colors with excellent chemical resistance.",
    takeaway2: "Heat transfer plates transfer complex photographic graphics from a PET carrier film to the bottle surface at 180°C.",
    takeaway3: "Laser engraving vaporizes surface coats, creating durable, tactile, and completely wash-proof branding.",
    takeaway4: "Self-adhesive sticker labels are highly versatile, allowing easy design pivots and material textures.",
    takeaway5: "Pad printing uses a soft silicone bulb to transfer ink onto complex or recessed surfaces like curved bottle bottoms.",
    introP1: "Customizing rigid containers like acrylic canisters, PET bottles, and metal jars requires selecting the correct mechanical printing pipeline. The right choice depends on the surface curvature, container material, design complexity, and expected lifecycle limits.",
    introP2: "Below, we dive deep into the mechanics of Heat Transfer, Laser Engraving, Sticker Decals, Silk Screen, and Pad Printing, analyzing how they perform under commercial wash cycles, GRS standards, and everyday shipping environments.",
    expertTitle: "Expert Engineering Insight",
    expertSub: "From Ryan Wong's Engineering Notebook",
    expertQ1: "\"A common error in bottle customization is trying to use direct heat transfer iron-ons on the bottom curve of an acrylic jar. Direct heat plates cause uneven pressure, resulting in micro-bubbles and logo peeling.\"",
    expertQ2: "To print successfully on curved bottoms, we employ a heated silicone rubber transfer roller or utilize pad printing. The soft silicone pad or roller conforms to the bottle surface, ensuring even pressure and thermal dwell time. For rigid acrylic, we also pre-treat the surface with a flame or corona discharge to maximize ink adhesion and pass the 3M tape test.",
    matrixTitle: "Technical Comparison Matrix: Bottle Customization",
    matrixParam: "Technical Parameter",
    methodHeat: "Heat Transfer",
    methodLaser: "Laser Engraving",
    methodSticker: "Stickers & Labels",
    methodScreen: "Silk Screen",
    methodPad: "Pad Printing",
    durability: "Wash Durability (Cycles)",
    heatDur: "100+ Cycles (Commercial)",
    laserDur: "Infinite (Lifetime Permanent)",
    stickerDur: "50-100 Cycles (Premium PET)",
    screenDur: "200+ Cycles (Epoxy Inks)",
    padDur: "150+ Cycles (Silicone Inks)",
    setupCost: "Initial Setup / Plates Cost",
    heatSetup: "High (Per Cylinder Plate)",
    laserSetup: "Zero (Digital Vector)",
    stickerSetup: "Low (Digital Die-Cut)",
    screenSetup: "Medium (Mesh Screen)",
    padSetup: "Low-Medium (Etched Cliché)",
    minOrder: "Minimum Order Quantity (MOQ)",
    heatMoq: "3,000+ units",
    laserMoq: "100+ units",
    stickerMoq: "100+ units",
    screenMoq: "500+ units",
    padMoq: "1,000+ units",
    colorCapability: "Color Capability",
    heatColor: "Full-color photographic gradients",
    laserColor: "Monochrome (Subtracted layer)",
    stickerColor: "Full CMYK + Metallic/Textured",
    screenColor: "1-4 Spot Colors (PMS matching)",
    padColor: "1-2 Spot Colors (Ideal for bottom curves)",
    ctaTitle: "Request a Printing Feasibility Review",
    ctaDesc: "Send us your artwork to analyze the optimal printing setup for your bottles, canisters, and lids under GRS circular standards.",
    ctaBtn: "Consult with Ryan Wong",
    upgradeCta: "Shop Customizable Jars",
    upgradeDesc: "Explore our wholesale-priced high-clarity reusable airtight canisters and jars with customization options.",
    shopTitle: "Customize Reusable Canisters",
    shopDesc: "We support screen printing, laser engraving, and custom label application from 100+ units.",
    shopBtn: "Shop Reusable Canisters",
    processTitle: "Five Main Printing Processes Illustrated",
    problemTitle: "5 Common Bottle Printing Problems (And Solutions)",
    prob1Title: "1. Ink Peeling / Poor Adhesion",
    prob1Desc: "Problem: Inks failing to bond with smooth surfaces like PET or acrylic. Solution: Pre-treating the surface with flame or corona discharge to increase surface tension before printing.",
    prob2Title: "2. Color Mismatch",
    prob2Desc: "Problem: Printed colors not matching the brand's Pantone (PMS) specifications due to base material color interference. Solution: Printing a double layer of opaque white base coat underneath the colored inks.",
    prob3Title: "3. Registration Issues / Blurry Print",
    prob3Desc: "Problem: Blurry prints or misaligned colors on multi-color passes (especially on curved surfaces). Solution: Using high-precision servo-driven rotary machines or switching to heat transfer for perfect multi-color alignment in a single pass.",
    prob4Title: "4. Scratching & Scuffing",
    prob4Desc: "Problem: Logos rubbing off during shipping or daily friction. Solution: Applying a clear UV-cured topcoat over the print, or utilizing Laser Engraving for a permanent physical etch.",
    prob5Title: "5. Distorted Graphics on Curves",
    prob5Desc: "Problem: Logos warping out of proportion when printed on tapered or dual-curve bottoms. Solution: Employing Pad Printing with soft silicone bulbs that deform naturally around uneven geometries to transfer the ink cleanly.",
    shrinkSleeveSectionTitle: "Why Shrink Sleeves Outperform Direct Bottle Printing",
    shrinkSleeveIntro: "While direct screen printing, pad printing, and labeling are standard for basic containers, they have strict physical limitations. High-volume premium beverage, cosmetic, and food brands switch to heat-shrinkable film sleeve labels to overcome printing zones, shape constraints, and color resolution limits. Here are the 5 major rigid packaging problems solved by shrink sleeves.",
    problem: "Problem",
    solution: "Solution",
    sleeveP1Title: "1. Tactile Gloss/Matte Contrast (Spot Varnish)",
    sleeveP1Prob: "Direct printing inks lay flat, making it impossible to render rich tactile patterns, embossing feel, or matte-gloss contrast on the container's surface.",
    sleeveP1Sol: "Shrink sleeves support reverse spot-varnish gravure printing, integrating premium matte finishes with glossy window logos to deliver sensory depth.",
    sleeveP2Title: "2. Photorealistic High-Resolution Print",
    sleeveP2Prob: "Direct silk screen printing is limited by screen mesh sizes (typically under 80 LPI), causing grainy halftones and making photorealistic color gradients impossible.",
    sleeveP2Sol: "Flexographic and digital gravure shrink sleeve printing easily exceeds 150 LPI, rendering micro-details, ultra-sharp vector text, and seamless photographic gradients.",
    sleeveP3Title: "3. Seamless 360° Wrap (No 5mm Non-Print Zone)",
    sleeveP3Prob: "Direct screen printers require a mechanical registration gap (typically a 5mm to 8mm unprinted vertical band) to prevent wet ink from smudging when the bottle rotates.",
    sleeveP3Sol: "Shrink sleeves are printed flat on rollstock before being seamed, enabling continuous 360° coverage from neck to base with zero blank margins.",
    sleeveP4Title: "4. Contoured Match for Irregular Geometries",
    sleeveP4Prob: "Flat screen printing or rigid rollers cannot print on tapered necks, contoured waists, or hourglass jars without severe graphic warping and ink accumulation.",
    sleeveP4Sol: "Heat shrink tunnels shrink the film label dynamically to conform to the container's exact geometry, accommodating stretch ratios up to 75% without distortion.",
    sleeveP5Title: "5. Internal Reverse Print for Ultimate Durability",
    sleeveP5Prob: "Directly printed surface inks are exposed to scratching during transit, hand friction, oils, and soap wash cycles, leading to premature branding degradation.",
    sleeveP5Sol: "Shrink sleeves print ink on the inside of the transparent film, so the plastic barrier itself shields the design from mechanical scratch, moisture, and chemical cleaners.",
    sleeveCtaTitle: "Establish 360° Branding with Custom Shrink Sleeves",
    sleeveCtaDesc: "Boost your product shelf-appeal with high-gloss contour-matched shrink sleeves. Order customized runs starting from low MOQ.",
    sleeveCtaBtn: "Shop Custom Shrink Sleeves"
  },
  'zh-TW': {
    title: "瓶罐印刷指南：五種主流客製化工藝深度比較",
    metaDesc: "比較熱轉印、雷射雕刻、不干膠貼紙、絲網印刷與移印五種瓶罐客製化工藝。了解材料適性、耐洗性與 GRS 永續包裝規範。",
    heroTitle: "瓶罐客製化指南：解密五種主流印刷工藝",
    heroSubtitle: "深入分析熱轉印、雷射雕刻、貼標、絲網印刷與移印在永續硬質包裝中的應用與技術規格。",
    faq1q: "哪種印刷方法最適合亞克力罐？",
    faq1a: "對於亞克力罐，絲網印刷是印製 1-2 色單色標誌的首選，附著力強且成本較低。若有複雜的多色或漸層設計，採用矽膠輪加熱的熱轉印膜是最佳選擇；而對於小批量和多品項，不干膠貼紙是最具彈性的做法。",
    faq2q: "瓶底或瓶身的熱轉印是如何運作的？",
    faq2a: "熱轉印印刷是使用加熱的矽膠印版或膠輪向轉印膜施壓。當瓶子在滾輪上旋轉時，高溫（150°C-210°C）熔化轉印膜上的熱熔膠層，將印刷圖案釋放並牢固粘合到亞克力或塑料表面，完成精細的全彩色包裝。",
    faq3q: "雷射雕刻在塗層金屬或塑料表面是永久性的嗎？",
    faq3a: "是的。雷射雕刻是一種減法工藝，利用高能量雷射光束氣化或蝕刻瓶子表面的塗層，顯露出底層的材質色彩（如不鏽鋼或不同顏色的聚合物層）。它100%永久存在，耐磨防刮且油墨不褪色。",
    introTitle: "硬質包裝客製化：解構印刷生產鏈",
    quickAnswer: "快速解答：瓶底或小面積凹凸弧面首選「移印」；瓶身單色標誌採用「絲網印刷」；全彩漸層大面積使用「熱轉印膜」；金屬與高端耐磨標誌推薦「雷射雕刻」；小批量靈活設計選用「不干膠貼紙」。",
    takeawayTitle: "關鍵要點",
    takeaway1: "絲網印刷能提供最厚實的墨層，呈現飽滿的專色並具備極佳的耐化學性。",
    takeaway2: "熱轉印工藝在高溫（180°C）下，將 PET 載體膜上的全彩照片級圖案完整轉移至瓶身。",
    takeaway3: "雷射雕刻直接氣化表面塗層，創造出極佳的耐磨性、質感與完全防洗的品牌標誌。",
    takeaway4: "不干膠貼紙提供最大的材質選擇與彈性，適合產品迭代與豐富的表面紋理。",
    takeaway5: "移印工藝使用軟性矽膠移印頭，能將油墨精準轉移到瓶底凹槽或雙曲面等複雜區域。",
    introP1: "硬質包裝容器（如亞克力密封罐、PET 瓶和金屬茶罐）的客製化，首要步驟是選擇正確的物理印刷生產工藝。這取決於容器的表面曲率、材質特性、設計複雜度以及預期的生命週期。",
    introP2: "下面我們將深入探討熱轉印、雷射雕刻、貼標、絲網印刷與移印的工藝機制，並分析其在商業清洗、GRS 永續標準與物流運輸中的實際表現。",
    expertTitle: "專家工程見解",
    expertSub: "來自 Ryan Wong 的工程筆記",
    expertQ1: "「張力不足是導致油墨脫落的主要原因。我們在印刷前通常會使用火焰或電暈處理表面以增加附著力。」",
    expertQ2: "為了解決瓶底或雙曲面印刷，我們採用軟性矽膠轉印滾輪或移印。矽膠移印頭能順應複雜的瓶底弧度，確保壓力和油墨轉移均勻。對於表面緻密的亞克力，我們會先進行電暈預處理，以提升油墨的附著力，確保通過 3M 拉力測試。」",
    matrixTitle: "技術參數比較表：瓶罐客製化印刷",
    matrixParam: "技術參數",
    methodHeat: "熱轉印 (Transfer)",
    methodLaser: "雷射雕刻 (Laser)",
    methodSticker: "貼紙標籤 (Stickers)",
    methodScreen: "絲網印刷 (Screen)",
    methodPad: "移印工藝 (Pad)",
    durability: "耐清洗壽命 (洗碗機測試)",
    heatDur: "100次以上商業洗滌",
    laserDur: "永久不磨損 (與材質共存)",
    stickerDur: "50-100次 (高端防水PET)",
    screenDur: "200次以上 (環氧樹脂油墨)",
    padDur: "150次以上 (矽膠固化油墨)",
    setupCost: "版費與前期設置成本",
    heatSetup: "高 (需製作電雕鋼版鋼輥)",
    laserSetup: "零版費 (數位向量控制)",
    stickerSetup: "極低 (數位刀模切)",
    screenSetup: "中等 (網版感光製版)",
    padSetup: "中低 (凹版鋼板/鋼模製版)",
    minOrder: "最低起訂量 (MOQ)",
    heatMoq: "3,000 個起",
    laserMoq: "100 個起",
    stickerMoq: "100 個起",
    screenMoq: "500 個起",
    padMoq: "1,000 個起",
    colorCapability: "色彩表現力",
    heatColor: "支持全彩色相片級漸層",
    laserColor: "單色 (取決於底材顯色)",
    stickerColor: "全彩 CMYK + 燙金與局部紋理",
    screenColor: "1-4 色專色 (PMS 對色系統)",
    padColor: "1-2 色專色 (最適合瓶底與凹面)",
    ctaTitle: "預約瓶罐客製化工藝評估",
    ctaDesc: "提供您的標誌與包裝設計，由包裝工程師為您規劃最符合 GRS 永續認證與生產預算的印刷方案。",
    ctaBtn: "預約 Ryan Wong 的諮詢",
    upgradeCta: "選購可客製化密封罐",
    upgradeDesc: "選購高透光、可重複使用的食品級密封罐，支持多種客製化印刷工藝。",
    shopTitle: "客製化可重複使用罐",
    shopDesc: "支持 100 個起進行絲網印刷、雷射雕刻與標籤貼紙定制服務。",
    shopBtn: "選購密封罐系列",
    processTitle: "五種主流印刷工藝工作原理圖",
    problemTitle: "五個常見的瓶罐印刷問題（及其解決方案）",
    prob1Title: "1. 墨水剝落 / 附著力差",
    prob1Desc: "問題：油墨無法與PET或亞克力等光滑表面結合。 解決方案：在印刷前使用火焰或電暈處理表面，以增加表面張力。",
    prob2Title: "2. 顏色不匹配",
    prob2Desc: "問題：由於基材顏色的干擾，印刷顏色與品牌的Pantone（PMS）規格不符。 解決方案：在彩色油墨下方印刷雙層不透明的白色底漆。",
    prob3Title: "3. 套印不準 / 印刷模糊",
    prob3Desc: "問題：在多色套印中（特別是在曲面上）出現模糊的印刷或顏色錯位。 解決方案：使用高精度伺服驅動旋轉機器，或改用熱轉印技術，在單次印刷中實現完美的多色對齊。",
    prob4Title: "4. 刮痕與磨損",
    prob4Desc: "問題：標誌在運輸或日常摩擦中被磨掉。 解決方案：在印刷品上塗抹透明的UV固化頂層，或利用雷射雕刻進行永久性的物理蝕刻。",
    prob5Title: "5. 曲面圖案變形",
    prob5Desc: "問題：在錐形或雙曲面底部印刷時，標誌變形且比例失調。 解決方案：採用移印工藝，利用柔軟的矽膠移印頭，自然地貼合不規則幾何形狀，將油墨乾淨地轉移。",
    shrinkSleeveSectionTitle: "為何收縮膜套標優於瓶身直接印刷：解決五大包裝痛點",
    shrinkSleeveIntro: "雖然直接絲網印刷、移印和貼紙是目前瓶罐客製化的常用方法，但它們存在著無法逾越的物理限制。高端飲料、化妝品和食品品牌通常會切換到熱收縮膜套標（Shrink Sleeves），以解決印刷盲區、複雜瓶身曲度以及色彩解析度受限等問題。以下是收縮膜套標解決的五大硬質包裝印刷痛點。",
    problem: "問題",
    solution: "解決方案",
    sleeveP1Title: "1. 局部啞光與光澤對比（暗花 / 觸感局部光）",
    sleeveP1Prob: "瓶身直接印刷的油墨層相對平坦，無法在容器表面呈現豐富的觸感紋理、凹凸立體感或局部的啞光/光澤對比（即「暗花」效果）。",
    sleeveP1Sol: "收縮膜套標支持反向凹版局部上光印刷，可將高端啞光磨砂觸感與光澤明亮的圖案或透明窗口無縫融合，帶來極佳的立體視覺與觸覺質感。",
    sleeveP2Title: "2. 照片級高解析度印刷與漸層",
    sleeveP2Prob: "直接絲網印刷受限於網目大小（通常低於 80 LPI），在處理多色漸層時會產生粗糙的網點，無法實現照片級的精細彩色圖像。",
    sleeveP2Sol: "柔版與數位凹版套標印刷解析度輕鬆超過 150 LPI，能完美呈現微米級細節、極度清晰的向量文字與流暢無痕的照片級色彩漸層。",
    sleeveP3Title: "3. 無縫 360° 全包覆印刷（無 5mm 印刷留白盲區）",
    sleeveP3Prob: "直接絲網印刷需要機械定位對點留白區（通常為 5mm 至 8mm 的垂直非印刷帶），以防瓶子旋轉時濕油墨發生重疊擦碰和模糊。",
    sleeveP3Sol: "收縮膜套標在製袋合掌前以平面捲材形式印刷，收縮後能實現從瓶口到瓶底 360° 完全不間斷的圖案包覆，無任何空白邊緣。",
    sleeveP4Title: "4. 完美貼合異形與複雜曲線瓶身",
    sleeveP4Prob: "平網印刷或硬性轉印輥無法在錐形瓶頸、收腰曲線或沙漏型瓶罐上進行印刷，否則會導致嚴重的圖案扭曲變形與油墨堆積。",
    sleeveP4Sol: "通過熱收縮通道（蒸汽或熱風），薄膜套標會動態收縮以緊密貼合容器的幾何形狀，能適應高達 75% 的收縮率且圖像不變形。",
    sleeveP5Title: "5. 內層反向印刷帶來的極致耐磨防刮性",
    sleeveP5Prob: "直接印刷在瓶罐表面的油墨容易在物流運輸、日常手部摩擦、化學油脂以及洗潔精洗滌中被劃傷剥落，導致品牌形象磨損損壞。",
    sleeveP5Sol: "收縮膜套標將油墨印刷在透明薄膜的內側（反印工藝），外層的塑料薄膜屏障能自然保護印刷圖案免受物理刮擦、潮濕和化學清洗劑的損害。",
    sleeveCtaTitle: "使用收縮膜套標打造無縫 360° 品牌形象",
    sleeveCtaDesc: "利用高光澤、高貼合度的收縮套標提升產品在貨架上的吸引力。起訂量低，支持多種材質與光澤工藝。",
    sleeveCtaBtn: "客製化收縮膜套標系列"
  },
  'es': {
    title: "Cómo imprimir en botellas y botes: comparación de 5 métodos",
    metaDesc: "Compare la transferencia de calor, el grabado láser, el etiquetado adhesivo, la serigrafía y la tampografía para botellas y botes personalizados. GRS e i18n compatibles.",
    heroTitle: "Cómo imprimir en botellas y frascos: guía definitiva de personalización",
    heroSubtitle: "Análisis de transferencia de calor, grabado láser, adhesivos, serigrafía y tampografía para envases rígidos.",
    faq1q: "¿Qué método de impresión es mejor para botes acrílicos cilíndricos?",
    faq1a: "Para botes acrílicos cilíndricos, la serigrafía es el estándar para 1-2 colores directos debido a su alta adherencia y bajo costo. Para diseños a todo color complejos, la película de transferencia de calor ofrece el mejor resultado, mientras que las etiquetas adhesivas son las más versátiles para tiradas rápidas.",
    faq2q: "¿Cómo funciona la transferencia de calor en el fondo de una botella?",
    faq2a: "Utiliza un rodillo o placa de silicona caliente para aplicar presión a una película portadora. A medida que la botella gira, el calor (150°C-210°C) funde la capa adhesiva de la película, liberando la tinta sobre la superficie plástica, creando un diseño permanente.",
    faq3q: "¿El grabado láser es permanente en superficies metálicas y plásticas?",
    faq3a: "Sí. Es un proceso sustractivo que utiliza un rayo láser para vaporizar la capa superior de la botella, exponiendo el material inferior. Es 100% permanente y resistente al lavado.",
    introTitle: "Personalización de envases rígidos: el pipeline de impresión",
    quickAnswer: "Respuesta rápida: Tampografía para logotipos pequeños en curvas de fondo. Serigrafía para colores directos en el cuerpo. Transferencia de calor para envolturas a todo color. Grabado láser para marcas permanentes. Etiquetas adhesivas para tiradas pequeñas.",
    takeawayTitle: "Puntos clave",
    takeaway1: "La serigrafía proporciona la capa de tinta más gruesa, ofreciendo colores vibrantes y resistencia química.",
    takeaway2: "La transferencia de calor aplica gráficos fotográficos complejos a 180°C desde una película PET.",
    takeaway3: "El grabado láser vaporiza las capas superficiales, logrando un grabado permanente y resistente.",
    takeaway4: "Las etiquetas adhesivas son muy versátiles, ideales para cambios de diseño rápidos.",
    takeaway5: "La tampografía utiliza una bombilla de silicona suave para transferir tinta a superficies empotradas.",
    introP1: "La personalización de contenedores rígidos como frascos de acrílico o botellas de PET requiere elegir el pipeline mecánico adecuado según la curvatura, material y ciclo de vida.",
    introP2: "Analizamos el rendimiento de cada método bajo ciclos de lavado comerciales y estándares GRS.",
    expertTitle: "Perspectiva del experto",
    expertSub: "Del cuaderno de Ryan Wong",
    expertQ1: "\"Un error común es intentar aplicar transferencias directas en la curva inferior de un frasco. Las placas de calor directo causan presión desigual, burbujas y desprendimientos.\"",
    expertQ2: "Para imprimir en fondos curvos, usamos rodillos de transferencia de silicona caliente o tampografía. Pretratamos el acrílico rígido con llama para maximizar la adherencia.",
    matrixTitle: "Matriz técnica de comparación de impresión en botellas",
    matrixParam: "Parámetro técnico",
    methodHeat: "Transferencia de calor",
    methodLaser: "Grabado láser",
    methodSticker: "Etiquetas y adhesivos",
    methodScreen: "Serigrafía",
    methodPad: "Tampografía",
    durability: "Durabilidad al lavado (ciclos)",
    heatDur: "100+ ciclos (comercial)",
    laserDur: "Infinito (permanente)",
    stickerDur: "50-100 ciclos (PET Premium)",
    screenDur: "200+ ciclos (tintas epoxi)",
    padDur: "150+ ciclos (tintas de silicona)",
    setupCost: "Costo de configuración inicial",
    heatSetup: "Alto (cilindro grabado)",
    laserSetup: "Cero (vector digital)",
    stickerSetup: "Bajo (troquel digital)",
    screenSetup: "Medio (pantalla de malla)",
    padSetup: "Bajo-medio (placa grabada)",
    minOrder: "Cantidad mínima de pedido (MOQ)",
    heatMoq: "3,000+ unidades",
    laserMoq: "100+ unidades",
    stickerMoq: "100+ unidades",
    screenMoq: "500+ unidades",
    padMoq: "1,000+ unidades",
    colorCapability: "Capacidad de color",
    heatColor: "Gradientes fotográficos a todo color",
    laserColor: "Monocromático (material de fondo)",
    stickerColor: "CMYK completo + metalizado",
    screenColor: "1-4 colores directos (PMS)",
    padColor: "1-2 colores directos (curvas de fondo)",
    ctaTitle: "Solicite una revisión de viabilidad",
    ctaDesc: "Envíenos su diseño para analizar la mejor configuración de impresión según estándares circulares GRS.",
    ctaBtn: "Consultar con Ryan Wong",
    upgradeCta: "Comprar frascos personalizables",
    upgradeDesc: "Explore nuestros frascos y botes herméticos reutilizables con opciones de personalización.",
    shopTitle: "Personalizar botes reutilizables",
    shopDesc: "Admitimos serigrafía, grabado láser y etiquetado a partir de 100 unidades.",
    shopBtn: "Comprar botes reutilizables",
    processTitle: "Ilustración de los 5 procesos de impresión",
    problemTitle: "5 problemas comunes de impresión en botellas (y soluciones)",
    prob1Title: "1. Desprendimiento de tinta / mala adherencia",
    prob1Desc: "Problema: Las tintas no se adhieren al PET o acrílico liso. Solución: Pretratar la superficie con llama o descarga corona antes de imprimir.",
    prob2Title: "2. Discordancia de color",
    prob2Desc: "Problema: El color impreso no coincide con Pantone debido al color del material base. Solución: Imprimir una base blanca opaca.",
    prob3Title: "3. Problemas de registro / impresión borrosa",
    prob3Desc: "Problema: Colores desalineados en pasadas múltiples. Solución: Usar servomotores rotativos o transferencia de calor de una pasada.",
    prob4Title: "4. Arañazos y desgaste",
    prob4Desc: "Problema: Los logotipos se borran con la fricción. Solución: Aplicar barniz UV o usar grabado láser permanente.",
    prob5Title: "5. Gráficos distorsionados en curvas",
    prob5Desc: "Problema: Diseños deformados en fondos cónicos. Solución: Tampografía con bulbos de silicona que se adaptan a la curva.",
    shrinkSleeveSectionTitle: "Por qué las etiquetas termorretráctiles superan la impresión directa en botellas",
    shrinkSleeveIntro: "Aunque la serigrafía directa, la tampografía y el etiquetado son comunes, tienen límites físicos estrictos. Las marcas premium de bebidas, cosméticos y alimentos cambian a fundas termorretráctiles para superar los límites de color y forma. Presentamos los 5 problemas principales que solucionan las fundas.",
    problem: "Problema",
    solution: "Solución",
    sleeveP1Title: "1. Contraste táctil brillo/mate (Detalles texturizados)",
    sleeveP1Prob: "Las tintas de impresión directa quedan planas, lo que imposibilita renderizar patrones táctiles ricos o contrastes de brillo y mate en la botella.",
    sleeveP1Sol: "Las fundas termorretráctiles admiten la impresión en huecograbado con barniz localizado invertido, integrando acabados mate premium con logotipos brillantes.",
    sleeveP2Title: "2. Impresión fotorrealista de alta resolución",
    sleeveP2Prob: "La serigrafía directa está limitada por los tamaños de malla de pantalla, lo que genera semitonos granulados e imposibilita gradientes de color complejos.",
    sleeveP2Sol: "La impresión flexográfica y digital en fundas termorretráctiles supera los 150 LPI, logrando microdetalles y gradientes fotográficos impecables.",
    sleeveP3Title: "3. Envoltura de 360° sin costuras (Sin zona de 5 mm)",
    sleeveP3Prob: "Las impresoras de serigrafía directa requieren un espacio de registro mecánico (banda vertical sin imprimir) para evitar manchas de tinta.",
    sleeveP3Sol: "Las fundas termorretráctiles se imprimen en plano antes de sellarse, lo que permite una cobertura continua de 360° de arriba a abajo.",
    sleeveP4Title: "4. Ajuste contorneado para geometrías irregulares",
    sleeveP4Prob: "La serigrafía plana o los rodillos rígidos no pueden imprimir en cuellos cónicos o frascos de reloj de arena sin deformaciones severas.",
    sleeveP4Sol: "Los túneles de encogimiento térmico encogen la funda dinámicamente para adaptarse a la geometría exacta, tolerando ratios de hasta 75%.",
    sleeveP5Title: "5. Impresión inversa interna para máxima durabilidad",
    sleeveP5Prob: "Las tintas impresas directamente en la superficie se rayan con facilidad debido a la fricción, aceites y ciclos de lavado.",
    sleeveP5Sol: "Las fundas termorretráctiles imprimen la tinta en el interior de la película, protegiendo el diseño de arañazos mecánicos y humedad.",
    sleeveCtaTitle: "Establezca una marca de 360° con fundas termorretráctiles",
    sleeveCtaDesc: "Aumente el atractivo de su producto en el estante con fundas termoencogibles. Bajo MOQ para producciones flexibles.",
    sleeveCtaBtn: "Comprar fundas termorretráctiles"
  },
  'fr': {
    title: "Guide d'impression sur bouteilles : 5 méthodes comparées",
    metaDesc: "Comparez le transfert thermique, la gravure laser, l'étiquetage, la sérigraphie et la tampographie pour bouteilles et pots personnalisés. Conforme GRS.",
    heroTitle: "Impression sur bouteilles et pots : le guide de personnalisation ultime",
    heroSubtitle: "Analyse des techniques d'impression pour des emballages rigides durables.",
    faq1q: "Quelle méthode d'impression convient le mieux aux pots en acrylique ?",
    faq1a: "Pour les botes cylindriques en acrylique, la sérigraphie est le standard pour 1 ou 2 couleurs en raison de sa forte adhérence et de son faible coût. Le transfert thermique est recommandé pour des motifs complexes multicolores, tandis que les étiquettes adhésives sont plus flexibles pour les petites séries.",
    faq2q: "Comment fonctionne le transfert thermique sur le fond d'une bouteille ?",
    faq2a: "Il applique une pression thermique sur un film de transfert à l'aide d'un rouleau en silicone chaud (150°C-210°C), faisant fondre la couche adhésive pour lier l'encre de manière permanente sur le plastique.",
    faq3q: "La gravure laser est-elle permanente sur le métal et le plastique ?",
    faq3a: "Oui. C'est un processus soustractif qui vaporise la couche supérieure de surface pour exposer le matériau inférieur. C'est 100% permanent et résistant au lavage.",
    introTitle: "Personnalisation des emballages rigides : les flux d'impression",
    quickAnswer: "Réponse rapide : Tampographie pour petits logos sur courbes de fond. Sérigraphie pour couleurs directes du corps. Transfert thermique pour habillages complets. Gravure laser pour marquages permanents. Étiquettes adhésives pour séries limitées.",
    takeawayTitle: "Points clés",
    takeaway1: "La sérigraphie offre la couche d'encre la plus épaisse, avec d'excellentes résistances chimiques.",
    takeaway2: "Le transfert thermique applique des graphiques complexes à 180°C depuis un film PET.",
    takeaway3: "La gravure laser crée des marquages durables, tactiles et résistants au lave-vaisselle.",
    takeaway4: "Les étiquettes adhésives offrent une grande flexibilité de conception et de textures.",
    takeaway5: "La tampographie utilise un tampon en silicone souple pour imprimer sur les surfaces courbes et bouteilles.",
    introP1: "Le choix du pipeline d'impression pour les emballages rigides dépend de la forme du conteneur, du matériau et de la durabilité requise.",
    introP2: "Nous évaluons chaque méthode d'impression selon les normes GRS et la résistance aux lavages industriels.",
    expertTitle: "L'avis de l'expert",
    expertSub: "Du carnet d'ingénierie de Ryan Wong",
    expertQ1: "\"Une erreur fréquente est d'utiliser le transfert direct sur la courbe inférieure d'un pot. Les plaques rigides créent des bulles et provoquent le décollement de l'encre.\"",
    expertQ2: "Pour les surfaces courbes, nous appliquons un rouleau chaud ou la tampographie. Nous traitons préalablement les surfaces plastiques avec une flamme pour assurer l'adhérence.",
    matrixTitle: "Matrice de comparaison technique d'impression sur bouteilles",
    matrixParam: "Paramètre technique",
    methodHeat: "Transfert thermique",
    methodLaser: "Gravure laser",
    methodSticker: "Étiquettes et adhésifs",
    methodScreen: "Sérigraphie",
    methodPad: "Tampographie",
    durability: "Résistance au lavage (cycles)",
    heatDur: "100+ cycles (commercial)",
    laserDur: "Infini (permanent)",
    stickerDur: "50-100 cycles (PET Premium)",
    screenDur: "200+ cycles (encres époxy)",
    padDur: "150+ cycles (encres silicone)",
    setupCost: "Coût d'installation initial",
    heatSetup: "Élevé (cylindre gravé)",
    laserSetup: "Zéro (contrôle numérique)",
    stickerSetup: "Faible (découpe numérique)",
    screenSetup: "Moyen (écran de maille)",
    padSetup: "Faible-moyen (cliché gravé)",
    minOrder: "Quantité minimum de commande (MOQ)",
    heatMoq: "3 000+ unités",
    laserMoq: "100+ unités",
    stickerMoq: "100+ unités",
    screenMoq: "500+ unités",
    padMoq: "1 000+ unités",
    colorCapability: "Performance couleur",
    heatColor: "Dégradés photographiques complets",
    laserColor: "Monochrome (selon matériau)",
    stickerColor: "CMYK complet + dorure/textures",
    screenColor: "1-4 couleurs directes (PMS)",
    padColor: "1-2 couleurs directes (fond courbé)",
    ctaTitle: "Demander une étude de faisabilité",
    ctaDesc: "Envoyez-nous vos fichiers graphiques pour évaluer le meilleur processus d'impression selon vos contraintes GRS.",
    ctaBtn: "Consulter Ryan Wong",
    upgradeCta: "Acheter des pots personnalisables",
    upgradeDesc: "Découvrez nos botes hermétiques réutilisables avec des options de personnalisation d'impression.",
    shopTitle: "Personnaliser des pots réutilisables",
    shopDesc: "Nous prenons en charge la sérigraphie, le laser et l'étiquetage à partir de 100 unités.",
    shopBtn: "Acheter des pots réutilisables",
    processTitle: "Illustration des 5 processus d'impression",
    problemTitle: "5 problèmes d'impression courants (et solutions)",
    prob1Title: "1. Décollement de l'encre / mauvaise adhérence",
    prob1Desc: "Problème: L'encre n'adhère pas au PET ou à l'acrylique lisse. Solution: Traitement préalable à la flamme ou décharge corona pour augmenter la tension superficielle.",
    prob2Title: "2. Écart de couleur",
    prob2Desc: "Problème: La couleur imprimée ne correspond pas au Pantone de la marque. Solution: Imprimer une sous-couche blanche opaque.",
    prob3Title: "3. Problèmes de repérage / impression floue",
    prob3Desc: "Problème: Couleurs mal alignées lors de passes multiples. Solution: Utiliser des servomoteurs rotatifs ou le transfert thermique en une seule passe.",
    prob4Title: "4. Éraflures et rayures",
    prob4Desc: "Problème: Les logos s'effacent lors du frottement quotidien. Solution: Appliquer un vernis de finition UV ou utiliser la gravure laser.",
    prob5Title: "5. Graphismes déformés sur courbes",
    prob5Desc: "Problème: Logos déformés sur fonds coniques. Solution: Tampographie avec des tampons en silicone qui épousent la courbure.",
    shrinkSleeveSectionTitle: "Pourquoi les manchons thermorétractables surpassent l'impression directe",
    shrinkSleeveIntro: "Bien que la sérigraphie directe, la tampographie et l'étiquetage soient courants, ils présentent des limites physiques strictes. Les marques premium passent aux manchons thermorétractables pour surmonter les limites de couleur et de forme. Voici les 5 problèmes majeurs résolus par les manchons.",
    problem: "Problème",
    solution: "Solution",
    sleeveP1Title: "1. Contraste tactile brillant/mat (Détails texturés)",
    sleeveP1Prob: "Les encres d'impression directe restent plates, ce qui empêche de restituer des motifs tactiles riches ou des contrastes brillant/mat sur le flacon.",
    sleeveP1Sol: "Les manchons thermorétractables prennent en charge l'héliogravure avec vernis sélectif inversé, combinant finitions mates haut de gamme et logos brillants.",
    sleeveP2Title: "2. Impression haute résolution photoréaliste",
    sleeveP2Prob: "La sérigraphie directe est limitée par la taille des mailles de l'écran, ce qui génère des trames granuleuses et empêche les dégradés complexes.",
    sleeveP2Sol: "L'impression flexographique et numérique sur manchons dépasse les 150 LPI, offrant des micro-détails et des dégradés photographiques parfaits.",
    sleeveP3Title: "3. Habillage 360° sans couture (Sans marge de 5 mm)",
    sleeveP3Prob: "Les imprimantes directes nécessitent un espace de repérage mécanique (bande verticale non imprimée) pour éviter les bavures d'encre.",
    sleeveP3Sol: "Les manchons sont imprimés à plat avant d'être scellés, permettant un habillage continu à 360° du col à la base.",
    sleeveP4Title: "4. Adaptation aux géométries irrégulières",
    sleeveP4Prob: "La sérigraphie plane ou les rouleaux rigides ne peuvent imprimer sur des cols coniques sans déformations graphiques majeures.",
    sleeveP4Sol: "Les tunnels de rétraction thermique rétractent le manchon pour épouser la géométrie exacte, avec des taux de rétraction allant jusqu'à 75%.",
    sleeveP5Title: "5. Impression inversée interne pour une durabilité maximale",
    sleeveP5Prob: "Les encres imprimées en surface sont exposées aux rayures lors du transport, aux frottements et aux cycles de lavage.",
    sleeveP5Sol: "Les manchons impriment l'encre à l'intérieur du film, protégeant le graphisme des rayures mécaniques et de l'humidité.",
    sleeveCtaTitle: "Créez un habillage de marque à 360° avec les manchons",
    sleeveCtaDesc: "Boostez l'attractivité de vos produits avec des manchons thermorétractables. MOQ bas pour des lancements flexibles.",
    sleeveCtaBtn: "Acheter des manchons thermorétractables"
  }
};

const HeatTransferSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    {/* Background Grid Lines */}
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </pattern>
      <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Heated Roller */}
    <circle cx="200" cy="110" r="45" fill="url(#heatGrad)" opacity="0.9" className="animate-pulse" />
    <circle cx="200" cy="110" r="35" fill="#3f3f46" stroke="#18181b" strokeWidth="4" />
    <text x="200" y="115" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[9px] font-black uppercase">180°C HEAT</text>
    
    {/* Film Sheet Rollers */}
    <line x1="80" y1="162" x2="320" y2="162" stroke="#e2e8f0" strokeWidth="4" strokeDasharray="5,5" />
    <circle cx="80" cy="162" r="10" fill="#a1a1aa" />
    <circle cx="320" cy="162" r="10" fill="#a1a1aa" />
    
    {/* Carrier Film Path and ink */}
    <path d="M 80 162 C 140 162, 170 157, 200 155 C 230 157, 260 162, 320 162" fill="none" stroke="#60a5fa" strokeWidth="2" />
    <rect x="180" y="152" width="40" height="4" fill="#10b981" />
    
    {/* Bottle */}
    <rect x="130" y="180" width="140" height="75" rx="8" fill="none" stroke="#38bdf8" strokeWidth="6" />
    <rect x="140" y="190" width="120" height="55" rx="4" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.5" />
    {/* Rotating Arrows */}
    <path d="M 285 205 A 15 15 0 0 1 285 230" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,3" />
    <polygon points="280,230 290,232 285,225" fill="#38bdf8" />
    
    {/* Pressure indicators */}
    <path d="M 200 60 L 200 25" stroke="#ef4444" strokeWidth="3" />
    
    {/* Labeling Text */}
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Silicon Roller Pressing Film on Bottle</text>
  </svg>
)

const LaserEngravingSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Laser Head */}
    <rect x="175" y="30" width="50" height="50" rx="4" fill="#27272a" stroke="#52525b" strokeWidth="3" />
    <circle cx="200" cy="80" r="8" fill="#18181b" />
    
    {/* Laser Beam */}
    <line x1="200" y1="80" x2="200" y2="175" stroke="#00ffff" strokeWidth="3" className="animate-pulse" />
    <line x1="200" y1="80" x2="200" y2="175" stroke="#ffffff" strokeWidth="1" />
    
    {/* Sparks */}
    <circle cx="200" cy="175" r="3" fill="#eab308" />
    <path d="M 195 170 L 190 165 M 205 170 L 210 165 M 200 178 L 200 185" stroke="#eab308" strokeWidth="2" />
    
    {/* Bottle */}
    <rect x="120" y="175" width="160" height="80" rx="4" fill="#18181b" stroke="#3f3f46" strokeWidth="4" />
    <rect x="170" y="200" width="60" height="30" fill="none" stroke="#00ffff" strokeWidth="2" strokeDasharray="3,3" />
    <text x="200" y="218" textAnchor="middle" fill="#00ffff" className="font-['JetBrains_Mono'] text-[10px] font-bold">LOGO</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">CNC Vector Laser Beam Ablation</text>
  </svg>
)

const StickerLabelSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Bottle */}
    <rect x="130" y="80" width="140" height="150" rx="10" fill="none" stroke="#60a5fa" strokeWidth="4" />
    
    {/* Backing paper peeling off */}
    <path d="M 330 90 C 270 90, 240 120, 200 135 C 160 150, 130 150, 100 150" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4,4" />
    <circle cx="330" cy="90" r="6" fill="#f43f5e" />
    
    {/* Sticker Adhesive Layer */}
    <rect x="145" y="115" width="110" height="80" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" opacity="0.9" />
    <rect x="155" y="125" width="90" height="60" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
    <text x="200" y="155" textAnchor="middle" fill="#ca8a04" className="font-sans text-[8px] font-black">ORGANIC TEA</text>
    <text x="200" y="165" textAnchor="middle" fill="#ca8a04" className="font-sans text-[7px] font-bold">100g Loose Leaf</text>
    
    {/* Hand or Roller Pressing */}
    <circle cx="255" cy="155" r="16" fill="#10b981" opacity="0.8" />
    <text x="255" y="159" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[9px] font-bold">PRESS</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Self-Adhesive Film Labeling Process</text>
  </svg>
)

const SilkScreenSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
    <rect width="100%" height="100%" fill="url(#grid)" />
    
    {/* Screen Frame */}
    <rect x="70" y="70" width="260" height="12" fill="#d4d4d8" stroke="#71717a" strokeWidth="2" />
    <line x1="80" y1="82" x2="320" y2="82" stroke="#a1a1aa" strokeWidth="2" />
    
    {/* Screen Mesh Stencil holes (fine lines) */}
    <line x1="160" y1="82" x2="160" y2="92" stroke="#10b981" strokeWidth="3" />
    <line x1="240" y1="82" x2="240" y2="92" stroke="#10b981" strokeWidth="3" />
    
    {/* Squeegee */}
    <polygon points="190,40 210,40 205,79 195,79" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
    <rect x="180" y="30" width="40" height="10" fill="#3f3f46" />
    <text x="200" y="60" textAnchor="middle" fill="#ffffff" className="font-['JetBrains_Mono'] text-[8px] font-black uppercase">SQUEEGEE</text>
    
    {/* Green Ink Pool */}
    <path d="M 180 79 C 190 75, 210 75, 220 79 Z" fill="#10b981" />
    
    {/* Bottle Under Screen */}
    <rect x="130" y="130" width="140" height="110" rx="6" fill="none" stroke="#e2e8f0" strokeWidth="4" />
    {/* Ink Transferring */}
    <path d="M 200 82 L 200 130" stroke="#10b981" strokeWidth="4" strokeDasharray="3,3" />
    
    {/* Printed Logo on Bottle */}
    <circle cx="200" cy="180" r="25" fill="none" stroke="#10b981" strokeWidth="4" />
    <text x="200" y="184" textAnchor="middle" fill="#10b981" className="font-['JetBrains_Mono'] text-[9px] font-black">ECO</text>
    
    <text x="200" y="275" textAnchor="middle" fill="#94a3b8" className="font-['JetBrains_Mono'] text-xs font-bold uppercase">Squeegee Forcing Ink through Screen Mesh</text>
  </svg>
)

export default function BottlePrintingGuidePage() {
  const { i18n } = useTranslation()
  const isPouchDomain = getDomain() === 'pouch'
  
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null)
  const [lightboxCaption, setLightboxCaption] = React.useState<string>('')

  const openLightbox = (imgSrc: string, caption: string) => {
    setLightboxImage(imgSrc)
    setLightboxCaption(caption)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    setLightboxCaption('')
  }
  
  // Language switcher translation selector
  let currentLang = 'en';
  if (i18n.language) {
    if (i18n.language.startsWith('zh')) currentLang = 'zh-TW';
    else if (i18n.language.startsWith('es')) currentLang = 'es';
    else if (i18n.language.startsWith('fr')) currentLang = 'fr';
  }
  const t = { ...translations['en'], ...(translations[currentLang as keyof typeof translations] || {}) };

  const seoProps = {
    title: t.title,
    metaDescription: t.metaDesc,
    keywords: ["bottle printing", "acrylic canister printing", "heat transfer film", "laser engraving glass", "sticker label bottle", "silk screen printing jar"],
    canonicalUrl: isPouchDomain ? "https://www.pouch.eco/knowledge/bottle-printing-guide" : "https://achievepack.com/knowledge/bottle-printing-guide"
  }

  const heroProps = {
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle
  }

  const faqSections = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a }
  ]

  // B2C Pouch.eco Sections Layout
  const sectionsForPouch = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Printer className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[#D4FF00] border-4 border-black p-6 font-['JetBrains_Mono'] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-black"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP1}</p>
          <p className="text-black font-semibold text-base leading-relaxed">{t.introP2}</p>
          <div className="bg-white border-4 border-black p-6 font-['JetBrains_Mono'] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-6">
            <h5 className="font-black text-sm uppercase mb-2">// Cross-Reference</h5>
            <p className="text-black text-xs leading-relaxed mb-0">
              To understand flexible packaging printing techniques, check out our guide on <Link to="/knowledge/printing-types" className="font-bold underline">Modern Printing Methods</Link> or read about the technical details of <Link to="/knowledge/white-ink-underprint" className="font-bold underline">White Ink Underprint & Backing</Link>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "process-diagrams",
      title: t.processTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">1. {t.methodHeat}</h4>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="relative group cursor-zoom-in overflow-hidden rounded border border-black aspect-[4/3] bg-slate-950">
                <img 
                  src="/imgs/knowledge/bottle-printing-heat-transfer.jpg" 
                  alt="Heat Transfer Printing Machine Schematic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                  onClick={() => openLightbox("/imgs/knowledge/bottle-printing-heat-transfer.jpg", currentLang === 'zh-TW' ? "技術原理圖：滾輪式瓶身熱轉印" : "Technical Schematic: Roller-based Bottle Heat Transfer")}
                />
                <span className="absolute bottom-1 right-1 bg-black text-white text-[9px] px-1 font-['JetBrains_Mono'] uppercase">Schematic</span>
              </div>
              <div className="relative group cursor-zoom-in overflow-hidden rounded border border-black aspect-[4/3] bg-slate-950">
                <img 
                  src="/imgs/knowledge/bottle-printing-foiling-hot-stamping.png" 
                  alt="Heat Transfer / Hot Foiling Production" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                  onClick={() => openLightbox("/imgs/knowledge/bottle-printing-foiling-hot-stamping.png", currentLang === 'zh-TW' ? "真實生產線：瓶罐熱轉印與燙金工藝" : "Production Line: Bottle Heat Transfer & Hot Foiling Process")}
                />
                <span className="absolute bottom-1 right-1 bg-black text-white text-[9px] px-1 font-['JetBrains_Mono'] uppercase">Live Photo</span>
              </div>
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "技術原理（左）：滾輪式熱轉印。生產實拍（右）：通過加熱矽膠輪將轉印薄膜壓合至瓶身，實現高解析度全彩印刷與燙金。"
                : "Schematic (Left): Roller-based transfer. Live (Right): Heated silicone roller transfers design under pressure for high-resolution graphics and hot foiling."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">2. {t.methodLaser}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-laser-engraving.jpg" 
                alt="Laser Engraving Schematic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-laser-engraving.jpg", currentLang === 'zh-TW' ? "技術原理圖：高能雷射雕刻" : "Technical Schematic: High-Energy Laser Engraving")}
              />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "高能雷射束微米級氣化塗層，露出底部金屬或塑料本色，實現永久不磨損的防偽標誌。"
                : "CNC-guided laser vaporizes the topcoat of the container, exposing the contrasting bottom material."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">3. {t.methodSticker}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-sticker-label.jpg" 
                alt="Sticker Labeling Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-sticker-label.jpg", currentLang === 'zh-TW' ? "技術原理圖：不干膠貼標機" : "Technical Schematic: Self-Adhesive Labeling")}
              />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "在底紙上印好高粘度不干膠，由貼標機平整貼合，是目前小批量最穩妥的客製化方案。"
                : "Adhesive decal labels peeled from PET lining and pressed flat onto the bottle via rubber squeegee."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <h4 className="font-black text-lg uppercase mb-3 text-black">4. {t.methodScreen}</h4>
            <div className="w-full aspect-[4/3] mb-3 overflow-hidden rounded border border-black relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-silk-screen.jpg" 
                alt="Silk Screen Printing Schematic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-silk-screen.jpg", currentLang === 'zh-TW' ? "技術原理圖：絲網印刷" : "Technical Schematic: Silk Screen Printing")}
              />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "刮油刀施壓使專色油墨穿過感光開孔網布，覆蓋在瓶身上，墨層厚實飽滿且附著力佳。"
                : "Flexible squeegee forces thick resin-based ink through open stencil mesh directly on bottle."}
            </p>
          </div>

          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between col-span-1 md:col-span-2">
            <h4 className="font-black text-lg uppercase mb-3 text-black">5. {t.methodPad}</h4>
            <div className="w-full max-w-xl mx-auto aspect-[4/3] mb-3 overflow-hidden rounded border border-black relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-pad.jpg" 
                alt="Pad Printing Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-pad.jpg", currentLang === 'zh-TW' ? "技術原理圖：凹凸面與瓶底移印工藝" : "Technical Schematic: Curved Bottom Pad Printing")}
              />
            </div>
            <p className="text-xs text-neutral-600 font-bold font-['JetBrains_Mono']">
              {currentLang === 'zh-TW' 
                ? "移印頭（矽膠球）將油墨從凹版鋼板轉移到瓶罐底部或雙曲面凹陷處，能適應極具挑戰性的曲面與瓶底標示。"
                : "Silicone transfer bulb absorbs ink from an etched steel plate and stamps it onto non-flat bottom grooves or dual-curve surfaces."}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "problems-solutions",
      title: t.problemTitle,
      icon: <HelpCircle className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            <div className="flex items-center gap-2"><Flame className="w-8 h-8 text-[#ff00ff]" /><h4 className="font-black text-lg text-black uppercase">{t.prob1Title}</h4></div>
            <p className="text-sm font-semibold text-neutral-800">{t.prob1Desc}</p>
          </div>
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            <div className="flex items-center gap-2"><Scissors className="w-8 h-8 text-[#ff00ff]" /><h4 className="font-black text-lg text-black uppercase">{t.prob2Title}</h4></div>
            <p className="text-sm font-semibold text-neutral-800">{t.prob2Desc}</p>
          </div>
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            <div className="flex items-center gap-2"><Layers className="w-8 h-8 text-[#ff00ff]" /><h4 className="font-black text-lg text-black uppercase">{t.prob3Title}</h4></div>
            <p className="text-sm font-semibold text-neutral-800">{t.prob3Desc}</p>
          </div>
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            <div className="flex items-center gap-2"><ShieldCheck className="w-8 h-8 text-[#ff00ff]" /><h4 className="font-black text-lg text-black uppercase">{t.prob4Title}</h4></div>
            <p className="text-sm font-semibold text-neutral-800">{t.prob4Desc}</p>
          </div>
          <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3 md:col-span-2">
            <div className="flex items-center gap-2"><Printer className="w-8 h-8 text-[#ff00ff]" /><h4 className="font-black text-lg text-black uppercase">{t.prob5Title}</h4></div>
            <p className="text-sm font-semibold text-neutral-800">{t.prob5Desc}</p>
          </div>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-6 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-4 border-b-4 border-black pb-4 mb-4">
            <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-full overflow-hidden">
              <img src="/imgs/seo/ryan_headshot_new.png" alt="Ryan Wong" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-2xl uppercase">{t.expertSub}</h4>
              <p className="text-xs font-['JetBrains_Mono'] font-black uppercase bg-[#D4FF00] border-2 border-black px-2 py-0.5 mt-1 inline-block">14+ Years Experience | GRS Auditing</p>
            </div>
          </div>
          <p className="text-black font-bold italic text-lg border-l-4 border-black pl-4 my-4">"{t.expertQ1}"</p>
          <p className="text-black text-base leading-relaxed">{t.expertQ2}</p>
          
          <div className="bg-[#00FFFF] border-4 border-black p-6 mt-8 font-['JetBrains_Mono'] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h5 className="font-black text-lg uppercase mb-2">{t.shopTitle}</h5>
            <p className="text-black text-sm mb-4">{t.shopDesc}</p>
            <Link to="/shop/reusable-acrylic-airtight-canister" className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-black uppercase text-xs hover:bg-[#D4FF00] transition-colors">
              {t.shopBtn} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "comparison",
      title: t.matrixTitle,
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto">
          <table className="w-full border-collapse border-2 border-black font-['JetBrains_Mono'] text-sm">
            <thead>
              <tr className="bg-[#FF00FF] text-white border-b-2 border-black">
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.matrixParam}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black bg-black text-[#D4FF00]">{t.methodHeat}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodLaser}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodSticker}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodScreen}</th>
                <th className="border-2 border-black p-3 text-left uppercase font-black">{t.methodPad}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.durability}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatDur}</td>
                <td className="border-2 border-black p-3">{t.laserDur}</td>
                <td className="border-2 border-black p-3">{t.stickerDur}</td>
                <td className="border-2 border-black p-3">{t.screenDur}</td>
                <td className="border-2 border-black p-3">{t.padDur}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.setupCost}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatSetup}</td>
                <td className="border-2 border-black p-3">{t.laserSetup}</td>
                <td className="border-2 border-black p-3">{t.stickerSetup}</td>
                <td className="border-2 border-black p-3">{t.screenSetup}</td>
                <td className="border-2 border-black p-3">{t.padSetup}</td>
              </tr>
              <tr className="border-b-2 border-black">
                <td className="border-2 border-black p-3 font-bold">{t.minOrder}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatMoq}</td>
                <td className="border-2 border-black p-3">{t.laserMoq}</td>
                <td className="border-2 border-black p-3">{t.stickerMoq}</td>
                <td className="border-2 border-black p-3">{t.screenMoq}</td>
                <td className="border-2 border-black p-3">{t.padMoq}</td>
              </tr>
              <tr>
                <td className="border-2 border-black p-3 font-bold">{t.colorCapability}</td>
                <td className="border-2 border-black p-3 bg-[#D4FF00]/30">{t.heatColor}</td>
                <td className="border-2 border-black p-3">{t.laserColor}</td>
                <td className="border-2 border-black p-3">{t.stickerColor}</td>
                <td className="border-2 border-black p-3">{t.screenColor}</td>
                <td className="border-2 border-black p-3">{t.padColor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: "shrink-sleeves-comparison",
      title: t.shrinkSleeveSectionTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="space-y-12 my-8">
          <p className="text-black font-semibold text-lg leading-relaxed">
            {t.shrinkSleeveIntro}
          </p>
          
          <div className="space-y-10">
            {/* Point 1: Textured Details */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-black text-xl uppercase text-black mb-3">{t.sleeveP1Title}</h4>
                <p className="text-sm font-semibold text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP1Prob}</p>
                <p className="text-sm font-semibold text-green-700"><strong>{t.solution}:</strong> {t.sleeveP1Sol}</p>
              </div>
              <div className="border-2 border-black rounded overflow-hidden aspect-[4/3] bg-neutral-100 cursor-zoom-in relative group">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-textured-detail.jpg" 
                  alt={t.sleeveP1Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-textured-detail.jpg", t.sleeveP1Title)}
                />
              </div>
            </div>

            {/* Point 2: Ultra High Resolution */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-black text-xl uppercase text-black mb-3">{t.sleeveP2Title}</h4>
                <p className="text-sm font-semibold text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP2Prob}</p>
                <p className="text-sm font-semibold text-green-700"><strong>{t.solution}:</strong> {t.sleeveP2Sol}</p>
              </div>
              <div className="border-2 border-black rounded overflow-hidden aspect-[4/3] bg-neutral-100 cursor-zoom-in relative group">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-high-resolution.jpg" 
                  alt={t.sleeveP2Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-high-resolution.jpg", t.sleeveP2Title)}
                />
              </div>
            </div>

            {/* Point 3: 360-Degree Printing */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-black text-xl uppercase text-black mb-3">{t.sleeveP3Title}</h4>
                <p className="text-sm font-semibold text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP3Prob}</p>
                <p className="text-sm font-semibold text-green-700"><strong>{t.solution}:</strong> {t.sleeveP3Sol}</p>
              </div>
              <div className="border-2 border-black rounded overflow-hidden aspect-[4/3] bg-neutral-100 cursor-zoom-in relative group">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-seamless-wrap.jpg" 
                  alt={t.sleeveP3Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-seamless-wrap.jpg", t.sleeveP3Title)}
                />
              </div>
            </div>

            {/* Point 4: Irregular Shapes */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-black text-xl uppercase text-black mb-3">{t.sleeveP4Title}</h4>
                <p className="text-sm font-semibold text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP4Prob}</p>
                <p className="text-sm font-semibold text-green-700"><strong>{t.solution}:</strong> {t.sleeveP4Sol}</p>
              </div>
              <div className="border-2 border-black rounded overflow-hidden aspect-[4/3] bg-neutral-100 cursor-zoom-in relative group">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-irregular-shape.jpg" 
                  alt={t.sleeveP4Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-irregular-shape.jpg", t.sleeveP4Title)}
                />
              </div>
            </div>

            {/* Point 5: Scratch and Water Durability */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-black text-xl uppercase text-black mb-3">{t.sleeveP5Title}</h4>
                <p className="text-sm font-semibold text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP5Prob}</p>
                <p className="text-sm font-semibold text-green-700"><strong>{t.solution}:</strong> {t.sleeveP5Sol}</p>
              </div>
              <div className="border-2 border-black rounded overflow-hidden aspect-[4/3] bg-neutral-100 cursor-zoom-in relative group">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-durable-protection.jpg" 
                  alt={t.sleeveP5Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-durable-protection.jpg", t.sleeveP5Title)}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#D4FF00] border-4 border-black p-8 font-['JetBrains_Mono'] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h5 className="font-black text-xl uppercase mb-2 text-black">{t.sleeveCtaTitle}</h5>
            <p className="text-black text-sm mb-6">{t.sleeveCtaDesc}</p>
            <Link to="/packaging/shrink-sleeves" className="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-6 py-3 font-black uppercase text-sm hover:bg-white hover:text-black transition-colors">
              {t.sleeveCtaBtn} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "related-store-products",
      title: "Related Products & Equipment",
      icon: <Box className="h-6 w-6" />,
      content: <RelatedProductsShowcase productIds={['automatic-labeling-machine']} />
    }
  ]

  // B2B Achieve Pack Sections Layout
  const sectionsForAchieve = [
    {
      id: "introduction",
      title: t.introTitle,
      icon: <Printer className="h-6 w-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-primary-50 border-l-4 border-primary-500 p-5 mb-8 rounded-r-lg">
            <p className="text-primary-900 font-medium text-lg"><strong>{t.quickAnswer.split(':')[0]}:</strong> {t.quickAnswer.split(':')[1]}</p>
          </div>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP1}</p>
          <p className="text-neutral-700 text-lg leading-relaxed">{t.introP2}</p>
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 my-6">
            <h4 className="font-bold text-lg mb-2">Cross-Reference</h4>
            <p className="text-neutral-600 mb-0 text-sm">
              To understand flexible packaging printing techniques, check out our guide on <Link to="/knowledge/printing-types" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1">Modern Printing Methods <ArrowRight className="w-3 h-3"/></Link> or read about the technical details of <Link to="/knowledge/white-ink-underprint" className="text-primary-600 font-medium hover:underline inline-flex items-center gap-1">White Ink Underprint & Backing <ArrowRight className="w-3 h-3"/></Link>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "process-diagrams",
      title: t.processTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">1. {t.methodHeat}</h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="relative group cursor-zoom-in overflow-hidden rounded-xl border border-neutral-100 aspect-[4/3] bg-slate-950 shadow-sm">
                <img 
                  src="/imgs/knowledge/bottle-printing-heat-transfer.jpg" 
                  alt="Heat Transfer Printing Machine Schematic" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                  onClick={() => openLightbox("/imgs/knowledge/bottle-printing-heat-transfer.jpg", currentLang === 'zh-TW' ? "技術原理圖：滾輪式瓶身熱轉印" : "Technical Schematic: Roller-based Bottle Heat Transfer")}
                />
                <span className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-sm text-white text-[9px] px-1.5 py-0.5 rounded font-['JetBrains_Mono'] uppercase">Schematic</span>
              </div>
              <div className="relative group cursor-zoom-in overflow-hidden rounded-xl border border-neutral-100 aspect-[4/3] bg-slate-950 shadow-sm">
                <img 
                  src="/imgs/knowledge/bottle-printing-foiling-hot-stamping.png" 
                  alt="Heat Transfer / Hot Foiling Production" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                  onClick={() => openLightbox("/imgs/knowledge/bottle-printing-foiling-hot-stamping.png", currentLang === 'zh-TW' ? "真實生產線：瓶罐熱轉印與燙金工藝" : "Production Line: Bottle Heat Transfer & Hot Foiling Process")}
                />
                <span className="absolute bottom-2 right-2 bg-neutral-900/80 backdrop-blur-sm text-white text-[9px] px-1.5 py-0.5 rounded font-['JetBrains_Mono'] uppercase">Live Photo</span>
              </div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "技術原理（左）：熱轉印。生產實拍（右）：利用矽膠輪將轉印薄膜壓印到旋轉的瓶身，高溫（約180°C）熔化圖案並牢固附著。"
                : "Schematic (Left): Heat transfer process. Live Photo (Right): Roll-to-roll heat transfer press rolling reverse-printed PET carrier graphics onto the bottle."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">2. {t.methodLaser}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100 relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-laser-engraving.jpg" 
                alt="Laser Engraving Schematic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-laser-engraving.jpg", currentLang === 'zh-TW' ? "技術原理圖：高能雷射雕刻" : "Technical Schematic: High-Energy Laser Engraving")}
              />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "通過高能雷射光束氣化或蝕刻瓶罐表面塗層，露出底部材質本色，印記永久防刮防洗。"
                : "CNC laser beam strips the surface coating of metal/plastic bottles, creating permanent, eco-friendly marks."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">3. {t.methodSticker}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100 relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-sticker-label.jpg" 
                alt="Sticker Labeling Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-sticker-label.jpg", currentLang === 'zh-TW' ? "技術原理圖：不干膠貼標機" : "Technical Schematic: Self-Adhesive Labeling")}
              />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "將印製好的高粘性防水貼紙直接粘貼於瓶身指定位置，材料與工藝選擇豐富多樣。"
                : "Rolls of printed self-adhesive decals are positioned and applied using precision pressure rollers."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">4. {t.methodScreen}</h4>
            <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100 relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-silk-screen.jpg" 
                alt="Silk Screen Printing Schematic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-silk-screen.jpg", currentLang === 'zh-TW' ? "技術原理圖：絲網印刷" : "Technical Schematic: Silk Screen Printing")}
              />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "刮刀將油墨透過感光網版的孔洞均勻擠壓到瓶罐表面，墨層厚實飽滿，耐用性極高。"
                : "Squeegee sweeps thick chemical-resistant screen ink through stencil mesh holes onto the curved surface."}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-between col-span-1 md:col-span-2">
            <h4 className="font-bold text-xl text-neutral-900 mb-4">5. {t.methodPad}</h4>
            <div className="w-full max-w-2xl mx-auto aspect-[4/3] mb-4 overflow-hidden rounded-xl border border-neutral-100 relative group cursor-zoom-in bg-slate-950">
              <img 
                src="/imgs/knowledge/bottle-printing-pad.jpg" 
                alt="Pad Printing Machine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
                onClick={() => openLightbox("/imgs/knowledge/bottle-printing-pad.jpg", currentLang === 'zh-TW' ? "技術原理圖：凹凸面與瓶底移印工藝" : "Technical Schematic: Curved Bottom Pad Printing")}
              />
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {currentLang === 'zh-TW' 
                ? "移印頭（矽膠球）將油墨從凹版鋼板轉移到瓶罐底部或雙曲面凹陷處，能適應極具挑戰性的曲面與瓶底標示。"
                : "Silicone transfer bulb absorbs ink from an etched steel plate and stamps it onto non-flat bottom grooves or dual-curve surfaces."}
            </p>
          </div>
        </div>
      )
    },
    {
      id: "problems-solutions",
      title: t.problemTitle,
      icon: <HelpCircle className="h-6 w-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3"><div className="p-3 bg-primary-50 rounded-xl"><Flame className="w-6 h-6 text-primary-600" /></div><h4 className="font-bold text-lg text-neutral-900">{t.prob1Title}</h4></div>
            <p className="text-sm text-neutral-600 leading-relaxed">{t.prob1Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3"><div className="p-3 bg-primary-50 rounded-xl"><Scissors className="w-6 h-6 text-primary-600" /></div><h4 className="font-bold text-lg text-neutral-900">{t.prob2Title}</h4></div>
            <p className="text-sm text-neutral-600 leading-relaxed">{t.prob2Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3"><div className="p-3 bg-primary-50 rounded-xl"><Layers className="w-6 h-6 text-primary-600" /></div><h4 className="font-bold text-lg text-neutral-900">{t.prob3Title}</h4></div>
            <p className="text-sm text-neutral-600 leading-relaxed">{t.prob3Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3"><div className="p-3 bg-primary-50 rounded-xl"><ShieldCheck className="w-6 h-6 text-primary-600" /></div><h4 className="font-bold text-lg text-neutral-900">{t.prob4Title}</h4></div>
            <p className="text-sm text-neutral-600 leading-relaxed">{t.prob4Desc}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col gap-4 md:col-span-2">
            <div className="flex items-center gap-3"><div className="p-3 bg-primary-50 rounded-xl"><Printer className="w-6 h-6 text-primary-600" /></div><h4 className="font-bold text-lg text-neutral-900">{t.prob5Title}</h4></div>
            <p className="text-sm text-neutral-600 leading-relaxed">{t.prob5Desc}</p>
          </div>
        </div>
      )
    },
    {
      id: "expert-insight",
      title: t.expertTitle,
      icon: <Award className="h-6 w-6" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-24 h-24 bg-neutral-100 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="/imgs/seo/ryan_headshot_new.png" alt="Ryan Wong" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-2xl text-neutral-900 mb-2">{t.expertSub}</h4>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1.5 rounded-md">14+ Years Packaging Engineering</span>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1.5 rounded-md">GRS Material Specialist</span>
              </div>
              <p className="text-neutral-600 mb-5 text-lg italic border-l-4 border-neutral-200 pl-4">"{t.expertQ1}"</p>
              <p className="text-neutral-700 text-lg leading-relaxed">{t.expertQ2}</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary-900 to-emerald-950 p-8 rounded-2xl text-white shadow-lg border border-primary-800">
            <h4 className="font-bold text-2xl mb-2">{t.shopTitle}</h4>
            <p className="text-primary-100 text-base mb-6 max-w-xl">{t.shopDesc}</p>
            <Link to="/store/product/reusable-acrylic-airtight-canister" className="inline-flex items-center gap-2 bg-[#D4FF00] hover:bg-white text-black font-bold px-6 py-3 rounded-xl transition-all shadow-md">
              {t.shopBtn} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "comparison",
      title: t.matrixTitle,
      icon: <ShieldCheck className="h-6 w-6" />,
      content: (
        <div className="overflow-hidden rounded-2xl border border-neutral-200 mt-8 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-neutral-50 text-neutral-800 border-b border-neutral-200">
                  <th className="p-5 font-semibold w-1/6 uppercase tracking-wider text-xs">{t.matrixParam}</th>
                  <th className="p-5 font-bold text-primary-800 bg-primary-50 w-1/6 uppercase tracking-wider text-xs border-x border-primary-100">{t.methodHeat}</th>
                  <th className="p-5 font-semibold w-1/6 uppercase tracking-wider text-xs">{t.methodLaser}</th>
                  <th className="p-5 font-semibold w-1/6 uppercase tracking-wider text-xs">{t.methodSticker}</th>
                  <th className="p-5 font-semibold w-1/6 uppercase tracking-wider text-xs">{t.methodScreen}</th>
                  <th className="p-5 font-semibold w-1/6 uppercase tracking-wider text-xs bg-neutral-100 text-neutral-800">{t.methodPad}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.durability}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.heatDur}</td>
                  <td className="p-5 text-neutral-600">{t.laserDur}</td>
                  <td className="p-5 text-neutral-600">{t.stickerDur}</td>
                  <td className="p-5 text-neutral-600">{t.screenDur}</td>
                  <td className="p-5 text-neutral-600 bg-neutral-50/50">{t.padDur}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.setupCost}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.heatSetup}</td>
                  <td className="p-5 text-neutral-600">{t.laserSetup}</td>
                  <td className="p-5 text-neutral-600">{t.stickerSetup}</td>
                  <td className="p-5 text-neutral-600">{t.screenSetup}</td>
                  <td className="p-5 text-neutral-600 bg-neutral-50/50">{t.padSetup}</td>
                </tr>
                <tr className="hover:bg-neutral-50 border-b border-neutral-200">
                  <td className="p-5 font-medium text-neutral-900">{t.minOrder}</td>
                  <td className="p-5 bg-primary-50/50 text-green-700 font-medium border-x border-primary-100">{t.heatMoq}</td>
                  <td className="p-5 text-neutral-600">{t.laserMoq}</td>
                  <td className="p-5 text-neutral-600">{t.stickerMoq}</td>
                  <td className="p-5 text-neutral-600">{t.screenMoq}</td>
                  <td className="p-5 text-neutral-600 bg-neutral-50/50">{t.padMoq}</td>
                </tr>
                <tr className="bg-neutral-50/50 hover:bg-neutral-50">
                  <td className="p-5 font-medium text-neutral-900">{t.colorCapability}</td>
                  <td className="p-5 bg-primary-50/50 text-neutral-800 font-medium border-x border-primary-100">{t.heatColor}</td>
                  <td className="p-5 text-neutral-600">{t.laserColor}</td>
                  <td className="p-5 text-neutral-600">{t.stickerColor}</td>
                  <td className="p-5 text-neutral-600">{t.screenColor}</td>
                  <td className="p-5 text-neutral-600 bg-neutral-50/50">{t.padColor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "shrink-sleeves-comparison",
      title: t.shrinkSleeveSectionTitle,
      icon: <Layers className="h-6 w-6" />,
      content: (
        <div className="space-y-10 my-8">
          <p className="text-neutral-700 text-lg leading-relaxed">
            {t.shrinkSleeveIntro}
          </p>
          
          <div className="space-y-8">
            {/* Point 1: Textured Details */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 mb-3">{t.sleeveP1Title}</h4>
                <p className="text-sm text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP1Prob}</p>
                <p className="text-sm text-green-700"><strong>{t.solution}:</strong> {t.sleeveP1Sol}</p>
              </div>
              <div className="border border-neutral-100 rounded overflow-hidden aspect-[4/3] bg-neutral-50 cursor-zoom-in relative group shadow-inner">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-textured-detail.jpg" 
                  alt={t.sleeveP1Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-textured-detail.jpg", t.sleeveP1Title)}
                />
              </div>
            </div>

            {/* Point 2: Ultra High Resolution */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 mb-3">{t.sleeveP2Title}</h4>
                <p className="text-sm text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP2Prob}</p>
                <p className="text-sm text-green-700"><strong>{t.solution}:</strong> {t.sleeveP2Sol}</p>
              </div>
              <div className="border border-neutral-100 rounded overflow-hidden aspect-[4/3] bg-neutral-50 cursor-zoom-in relative group shadow-inner">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-high-resolution.jpg" 
                  alt={t.sleeveP2Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-high-resolution.jpg", t.sleeveP2Title)}
                />
              </div>
            </div>

            {/* Point 3: 360-Degree Printing */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 mb-3">{t.sleeveP3Title}</h4>
                <p className="text-sm text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP3Prob}</p>
                <p className="text-sm text-green-700"><strong>{t.solution}:</strong> {t.sleeveP3Sol}</p>
              </div>
              <div className="border border-neutral-100 rounded overflow-hidden aspect-[4/3] bg-neutral-50 cursor-zoom-in relative group shadow-inner">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-seamless-wrap.jpg" 
                  alt={t.sleeveP3Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-seamless-wrap.jpg", t.sleeveP3Title)}
                />
              </div>
            </div>

            {/* Point 4: Irregular Shapes */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 mb-3">{t.sleeveP4Title}</h4>
                <p className="text-sm text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP4Prob}</p>
                <p className="text-sm text-green-700"><strong>{t.solution}:</strong> {t.sleeveP4Sol}</p>
              </div>
              <div className="border border-neutral-100 rounded overflow-hidden aspect-[4/3] bg-neutral-50 cursor-zoom-in relative group shadow-inner">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-irregular-shape.jpg" 
                  alt={t.sleeveP4Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-irregular-shape.jpg", t.sleeveP4Title)}
                />
              </div>
            </div>

            {/* Point 5: Scratch and Water Durability */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-bold text-lg text-neutral-900 mb-3">{t.sleeveP5Title}</h4>
                <p className="text-sm text-red-600 mb-2"><strong>{t.problem}:</strong> {t.sleeveP5Prob}</p>
                <p className="text-sm text-green-700"><strong>{t.solution}:</strong> {t.sleeveP5Sol}</p>
              </div>
              <div className="border border-neutral-100 rounded overflow-hidden aspect-[4/3] bg-neutral-50 cursor-zoom-in relative group shadow-inner">
                <img 
                  src="/imgs/knowledge/shrink-sleeve-durable-protection.jpg" 
                  alt={t.sleeveP5Title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  onClick={() => openLightbox("/imgs/knowledge/shrink-sleeve-durable-protection.jpg", t.sleeveP5Title)}
                />
              </div>
            </div>
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 shadow-sm">
            <h5 className="font-bold text-xl text-primary-900 mb-2">{t.sleeveCtaTitle}</h5>
            <p className="text-primary-800 text-sm mb-6">{t.sleeveCtaDesc}</p>
            <Link to="/packaging/shrink-sleeves" className="inline-flex items-center gap-2 bg-primary-600 text-white rounded-lg px-6 py-3 font-semibold text-sm hover:bg-primary-700 transition-colors shadow-sm">
              {t.sleeveCtaBtn} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )
    },
    {
      id: "related-store-products",
      title: "Related Products & Equipment",
      icon: <Box className="h-6 w-6" />,
      content: <RelatedProductsShowcase productIds={['automatic-labeling-machine']} />
    }
  ]

  const renderLightbox = () => {
    if (!lightboxImage) return null;
    return (
      <div 
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 p-4 transition-all duration-300"
        onClick={closeLightbox}
      >
        <button 
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border border-white/20 transition-all font-mono text-xl focus:outline-none animate-pulse"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          ✕
        </button>
        <div className="relative max-w-5xl max-h-[80vh] overflow-hidden flex items-center justify-center border-4 border-white shadow-2xl bg-slate-900 rounded-lg">
          <img 
            src={lightboxImage} 
            alt={lightboxCaption} 
            className="max-w-full max-h-[75vh] object-contain select-none pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {lightboxCaption && (
          <p className="mt-4 text-white font-['JetBrains_Mono'] font-bold text-sm bg-black/75 px-4 py-2 rounded border border-white/10 max-w-2xl text-center shadow-lg">
            {lightboxCaption}
          </p>
        )}
      </div>
    );
  };

  if (isPouchDomain) {
    return (
      <>
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            {faqSections.map((faq, i) => (
              <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{faq.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{faq.a}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
        <BlogArticleTemplate
          {...seoProps}
          {...heroProps}
          sections={sectionsForPouch}
          faqSections={faqSections}
          ctaTitle={t.upgradeCta}
          ctaDescription={t.upgradeDesc}
        />
        {renderLightbox()}
      </>
    )
  }

  // B2B Enterprise Layout (Achieve Pack)
  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          {faqSections.map((faq, i) => (
            <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{faq.q}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">{faq.a}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
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
        faqs={faqSections.map(f => ({ question: f.q, answer: f.a }))}
        schemaType="Article"
        ctaTitle={t.ctaTitle}
        ctaDescription={t.ctaDesc}
        ctaButtonText={t.ctaBtn}
        heroStyle="banner"
      />
      {renderLightbox()}
    </>
  )
}
