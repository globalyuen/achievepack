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
    title: "AI Layered Assets and Prepress Print Specifications",
    description: "Learn why separating AI-generated backgrounds, text, and dielines into layers is critical for high-definition packaging. Set up white ink underprints and spot UV.",
    heroTitle: "Layered Packaging Assets Guide",
    heroSubtitle: "Prepress Layer Separation | Vector Text Overlays | Opaque White Underprints",
    introSummary: "Flattened AI designs (like single JPG or PNG exports) limit print quality. To achieve professional packaging results, your files must be structured into separate layers: one for the dieline, one for the background artwork, one for vector text and logos, and another for special finishes like spot UV or hot stamping.",
    aeoSummary: "Custom flexible packaging requires layered design files (PSD, AI, or PDF) to support prepress processing. Layer separation is mandatory to generate the white ink underprint plate, define spot UV masks, isolate vector line art from raster layers, and prevent print misregistrations.",
    eeatDetails: "With over 14 years of packaging engineering experience, we specialize in multi-channel color profiling. We verify layer separation on every file to configure white underprint plates and prevent color absorption.",
    
    section1Title: "The Power of Layer Separation",
    section1Text: "Flexible packaging printing relies on physical plates or digital channels that apply ink sequentially. A flattened image forces the RIP (Raster Image Processor) software to separate colors automatically, which leads to fuzzy text edges and color contamination. By keeping your text and brand logos in vector formats on separate layers above your high-resolution background artwork, prepress engineers can create clean printing plates that register perfectly. Furthermore, special finishes like Spot UV or foil stamping require their own vector mask layers to tell the machine exactly where to apply the gloss or metallic film.",
    
    section2Title: "From Ryan Wong’s Engineering Notebook",
    section2Log: "In my 14 years in prepress engineering, a flattened JPG file is the absolute bane of a clean print run. This is especially true when printing on brown Kraft paper. Because Kraft paper is naturally brown, printing CMYK ink directly onto it results in dark, muddy, and illegible colors. To prevent this, we must print an opaque white ink underprint layer first, acting as a white base for the CMYK colors. Creating this white plate is impossible if the design is a single flat image. By providing separate layers, we can generate a precise white ink mask that aligns perfectly with your colored elements.",

    point1Title: "Muddy Inks on Dark or Kraft Materials",
    point1Desc: "CMYK inks are semi-transparent; printing them directly onto brown Kraft paper or clear films results in dark, muddy, or invisible graphics.",
    point1Sol: "Isolate a separate 'White Underprint' vector layer representing where white ink should be printed as an opaque base for color vibrancy.",

    point2Title: "Dieline Outlines Printed onto Pouches",
    point2Desc: "Flattening the template dielines into the background design causes the red cutting and fold lines to be printed onto the final bag.",
    point2Sol: "Place the dieline template on its own locked layer at the top of the layer stack and mark it as a non-printing element.",

    point3Title: "Spot UV or Hot Foil Alignment Failures",
    point3Desc: "Without clean vector shapes, varnish or metallic foil application overlaps with printed boundaries, creating offset distortions.",
    point3Sol: "Provide dedicated vector layers labeled 'Spot UV' or 'Foil Stamp' using 100% solid K (Black) vector paths to define the masks.",

    point4Title: "Out-of-Register Color Gaps (Misregistration)",
    point4Desc: "Slight paper or film shifts during printing cause tiny white gaps between abutting color shapes if they are flattened.",
    point4Sol: "Implement trapping (overlapping adjacent color shapes by 0.15mm) on separate vector layers to hide normal mechanical shifts.",

    point5Title: "Rasterized Fuzzy Typography",
    point5Desc: "Saving text as part of a raster image (JPG) converts the sharp lines into fuzzy halftone dots, reducing reading clarity.",
    point5Sol: "Keep all text as active live vector paths, outline all fonts before exporting, and export in layered PDF or AI formats.",

    compTitle: "Visual Comparison: Flattened JPG vs. Layered Vector Print",
    compDesc: "See the difference in ink vibrancy and text clarity when using separated layers on raw Kraft material:",
    
    faq1Q: "Why can't I just upload a flat JPG of my design?",
    faq1A: "Flat JPG files lack layer data. We cannot isolate your text to keep it vector, nor can we generate the necessary white underprint plates for Kraft or clear materials, or set up Spot UV masks. Layered files are required to create separate plates.",
    faq2Q: "How do I set up a white ink underprint layer?",
    faq2A: "Create a separate design layer in Illustrator or Photoshop named 'White Underprint' or 'Spot White'. Draw vector shapes or solid fills covering the exact areas where you want the CMYK colors to look bright and opaque.",
    faq3Q: "What file formats does Achieve Pack accept?",
    faq3A: "We accept layered Adobe Illustrator (.ai), Photoshop (.psd), and print-ready layered PDF files. Ensure all fonts are outlined and links are embedded.",
    faq4Q: "What is trapping and why does it require layers?",
    faq4A: "Trapping is the process of overlapping adjacent colors slightly (about 0.1mm to 0.2mm) to prevent thin white gaps if the film shifts. Doing this requires vector layers so the prepress team can modify color boundaries independently."
  },
  es: {
    title: "Requisitos de Capas de Diseño en Preimpresión",
    description: "Conozca por qué separar fondos, textos y troqueles en capas es crítico para empaques de alta definición. Configure capas de base blanca.",
    heroTitle: "Guía de Capas de Diseño de Empaque",
    heroSubtitle: "Separación de Capas Preimpresión | Texto Vectorial | Base de Tinta Blanca",
    introSummary: "Los archivos aplanados (como JPG o PNG) limitan la calidad. Para empaques profesionales, su archivo debe estar estructurado en capas separadas para troquel, fondos, logotipos vectoriales y acabados especiales.",
    aeoSummary: "El empaque flexible requiere archivos con capas (PSD, AI o PDF) para permitir la preimpresión. Es obligatorio para generar la plancha de tinta blanca y máscaras de barniz UVI.",
    eeatDetails: "Con más de 14 años de experiencia en empaques, verificamos la separación de capas en cada archivo para configurar la base blanca y evitar la absorción de color.",
    
    section1Title: "El Poder de la Separación de Capas",
    section1Text: "La impresión de empaques aplica tinta de forma secuencial. Una imagen aplanada obliga al software a separar los colores de forma automática, produciendo bordes borrosos. Mantener los textos en capas vectoriales asegura bordes limpios.",
    
    section2Title: "Del Cuaderno de Ingeniería de Ryan Wong",
    section2Log: "En mis 14 años, un JPG plano es la ruina de una tirada de impresión limpia, especialmente sobre papel Kraft. La tinta CMYK impresa sobre Kraft marrón se vuelve oscura y opaca. Imprimir una capa de base blanca primero es obligatorio, lo cual es imposible con una imagen plana. Las capas nos permiten crear la máscara de tinta blanca perfecta.",

    point1Title: "Tintas Oscuras sobre Papel Kraft o Películas",
    point1Desc: "Las tintas CMYK son semi-transparentes; impresas sobre papel marrón se absorben y pierden su color.",
    point1Sol: "Cree una capa vectorial 'Tinta Blanca' que actúe como base opaca para dar viveza a los colores CMYK.",

    point2Title: "Líneas de Troquel Impresas en la Bolsa",
    point2Desc: "Aplanar las líneas de troquel en el diseño final causa que las líneas rojas se impriman sobre el empaque.",
    point2Sol: "Coloque el troquel en una capa superior bloqueada y márquela como elemento de no impresión.",

    point3Title: "Desalineación en Barniz UVI o Estampado de Foil",
    point3Desc: "Sin formas vectoriales limpias, el barniz o foil metálico se desplaza de sus límites en el empaque.",
    point3Sol: "Proporcione capas vectoriales llamadas 'Spot UV' o 'Foil' con trazados negros sólidos al 100% de color K.",

    point4Title: "Espacios de Color por Desplazamiento (Registro)",
    point4Desc: "El movimiento de la película durante la impresión genera pequeñas líneas blancas entre colores adyacentes.",
    point4Sol: "Aplique técnicas de reventado (trapping) con superposición de 0.15mm en las capas vectoriales independientes.",

    point5Title: "Tipografía Vectorial Rasterizada",
    point5Desc: "Guardar el texto como parte de una imagen (JPG) convierte los bordes en puntos difusos de medio tono.",
    point5Sol: "Mantenga los textos como trazados vectoriales activos y convierta las fuentes a curvas antes de exportar.",

    compTitle: "Prueba Física: JPG Aplanado vs. Vector con Capas",
    compDesc: "Observe la diferencia de intensidad y legibilidad del texto utilizando capas en papel Kraft:",
    
    faq1Q: "¿Por qué no puedo subir un JPG aplanado de mi diseño?",
    faq1A: "Los JPG planos no tienen información de capas. No podemos aislar el texto ni crear la base de tinta blanca para Kraft o películas transparentes.",
    faq2Q: "¿Cómo configuro una capa de base blanca?",
    faq2A: "Cree una capa en Illustrator llamada 'White Underprint' y dibuje formas vectoriales donde desee que la tinta sea opaca y brillante.",
    faq3Q: "¿Qué formatos de archivo acepta Achieve Pack?",
    faq3A: "Aceptamos archivos de Illustrator (.ai), Photoshop (.psd) y PDF con capas. Asegúrese de trazar las fuentes.",
    faq4Q: "¿Qué es el trapping y por qué requiere capas?",
    faq4A: "El trapping es la superposición de colores (0.1mm - 0.2mm) para evitar líneas blancas si el film se mueve. Requiere capas para ajustar los bordes de color."
  },
  fr: {
    title: "Exigences de Fichiers avec Calques en Prépresse",
    description: "Apprenez pourquoi la séparation des arrière-plans et des textes en calques est essentielle en emballage. Configurez les calques de blanc de soutien.",
    heroTitle: "Guide des Calques pour Emballages",
    heroSubtitle: "Séparation des Calques Prépresse | Tracés Vectoriels | Blanc de Soutien Opaque",
    introSummary: "Les designs IA aplatis (JPG ou PNG) altèrent la qualité d'impression. Pour des résultats professionnels, vos fichiers doivent être calqués : le tracé de découpe, les arrière-plans, et les textes vectoriels séparés.",
    aeoSummary: "L'emballage flexible nécessite des fichiers avec calques (PSD, AI, PDF) pour le traitement prépresse. C'est obligatoire pour configurer le blanc de soutien et les vernis sélectifs.",
    eeatDetails: "Avec plus de 14 ans d'expérience, nous validons la séparation des calques pour caler les plaques de blanc de soutien et garantir la fidélité des couleurs.",
    
    section1Title: "Les Avantages de la Séparation des Calques",
    section1Text: "L'impression d'emballages applique les couleurs successivement. Un fichier aplati contraint le logiciel à générer des séparations de couleur automatiques, ce qui altère la netteté du texte.",
    
    section2Title: "Carnet d'Ingénierie de Ryan Wong",
    section2Log: "En 14 ans de carrière, un JPG aplati est le pire ennemi d'une impression propre, surtout sur papier Kraft. Les encres imprimées sur support marron deviennent ternes. Appliquer un blanc de soutien opaque est indispensable, ce qui est impossible sur une image aplatie. Les calques permettent d'isoler ce masque de blanc.",

    point1Title: "Couleurs Ternes sur Papier Kraft ou Films",
    point1Desc: "Les encres d'impression sont translucides ; appliquées sur support marron, les teintes s'assombrissent.",
    point1Sol: "Isolez un calque vectoriel 'White Underprint' indiquant les zones à couvrir de blanc de soutien pour faire ressortir les couleurs.",

    point2Title: "Lignes de Découpe Imprimées sur le Sachet",
    point2Desc: "Aplatir les tracés de découpe avec le design entraîne l'impression des lignes rouges de pliage sur le sachet.",
    point2Sol: "Placez le gabarit de découpe sur un calque verrouillé en haut de la pile, configuré comme non-imprimable.",

    point3Title: "Défauts de Calage du Vernis ou Dorure",
    point3Desc: "Sans tracés vectoriels isolés, le vernis UVI ou la dorure déborde de ses limites graphiques.",
    point3Sol: "Créez des calques dédiés nommés 'Spot UV' ou 'Foil' contenant des tracés vectoriels en noir 100% (K).",

    point4Title: "Fils Blancs entre les Zones de Couleur",
    point4Desc: "Des décalages de film lors de l'impression créent des espaces blancs fins entre deux aplats de couleur.",
    point4Sol: "Définissez un recouvrement (trapping) de 0,15mm sur des calques vectoriels séparés pour absorber la dérive.",

    point5Title: "Typographies Pixellisées et Floues",
    point5Desc: "Enregistrer le texte dans une image raster (JPG) pixellise les contours et réduit la netteté des petits caractères.",
    point5Sol: "Conservez vos textes sous forme de tracés vectoriels actifs et vectorisez les polices avant export.",

    compTitle: "Preuve Visuelle : JPG Aplati vs. Fichier Calqué Vectoriel",
    compDesc: "Comparez le rendu des encres avec et sans blanc de soutien sur papier Kraft :",
    
    faq1Q: "Pourquoi le format JPG aplati n'est-il pas accepté ?",
    faq1A: "Les JPG plats ne possèdent aucun calque. Il est impossible d'y isoler les textes ou de configurer le blanc de soutien indispensable pour le Kraft ou les films transparents.",
    faq2Q: "Comment configurer mon calque de blanc de soutien ?",
    faq2A: "Créez un calque dans Illustrator nommé 'White Underprint' et dessinez des formes vectorielles là où les couleurs CMJN doivent être opaques.",
    faq3Q: "Quels formats de fichiers acceptez-vous ?",
    faq3A: "Nous acceptons les fichiers Illustrator (.ai), Photoshop (.psd) et PDF avec calques. Pensez à vectoriser vos textes.",
    faq4Q: "Qu'est-ce que le trapping et pourquoi exige-t-il des calques ?",
    faq4A: "Le trapping est le léger chevauchement des couleurs (0,1 à 0,2mm) pour éviter les liserés blancs lors de la découpe. Il nécessite des calques pour ajuster les tracés."
  },
  'zh-TW': {
    title: "AI 包裝設計的圖層分離與印前分色規範",
    description: "了解為什麼將 AI 生成的背景、文字和刀模線分離到獨立圖層是確保包裝印刷品質的關鍵。掌握白墨打底與局部 UV 設計方法。",
    heroTitle: "印前圖層分離設計指南",
    heroSubtitle: "背景文字圖層分離 | 向量線條獨立覆蓋 | 阻光白墨打底板設置",
    introSummary: "扁平化的 AI 設計（如單一 JPG 或 PNG 導出檔）會極大地限制包裝印刷的清晰度。為了達到專業的包裝印刷效果，您的設計檔案必須在印前整理出清晰的圖層結構：包括刀模線圖層、背景圖案圖層、向量文字與 Logo 圖層，以及特殊的局部表面處理圖層（如 Spot UV 或燙金）。",
    aeoSummary: "客製化軟包裝設計必須提交分層的原稿檔案（AI、PSD 或分層 PDF）以供印前分色。分層是生成白墨打底印版、設置局部 UV 亮光遮罩、保持文字向量邊緣清晰以及防止套印不準的必要條件。",
    eeatDetails: "憑藉 14 年以上的包裝工程經驗，我們專精於多通道色彩管理。我們在製版前會嚴格校對圖層分離，以正確設定白墨底板，避免材料吸收油墨導致色彩暗淡。",
    
    section1Title: "印前圖層分層的重要性",
    section1Text: "軟包裝印刷是透過多個印刷滾筒將不同顏色的油墨依次套印在薄膜上的。扁平化的圖像會迫使印前分色軟體（RIP）進行估算拆色，這會造成文字邊緣模糊和顏色干擾。將文字和標誌保持在獨立的向量圖層中，印前工程師就能單獨製作高解析度的文字版，確保印刷文字邊緣銳利。此外，局部 UV、燙金等工藝也必須依賴獨立的向量遮罩圖層來指示塗佈位置。",
    
    section2Title: "王瑞恩（Ryan Wong）的工程筆記",
    section2Log: "在我 14 年的包裝技術工作中，一張扁平的 JPG 檔絕對是高品質印刷的災難，尤其是在牛皮紙包裝上。因為牛皮紙本身是褐色的，如果直接把 CMYK 彩色油墨印在牛皮紙上，紙張會吸收油墨，導致圖案變得非常昏暗、渾濁。為了解決這個問題，我們必須先印一層阻光的白墨（White Underprint）作為彩色油墨的底色。如果設計稿是扁平的圖片，我們就完全無法提取出這個白墨版。提供分離的圖層，是實現鮮豔色彩的唯一方法。",

    point1Title: "牛皮紙或透明薄膜上顏色暗淡渾濁",
    point1Desc: "包裝印刷油墨具有半透明性，直接印在褐色紙張或透明薄膜上，顏色會被紙色吸收或直接透光而變暗。",
    point1Sol: "建立一個名為『White Underprint』的向量圖層，用來指示在哪裡印刷不透明的白墨作為彩色油墨的鮮豔底座。",

    point2Title: "刀模裁切線被印到了成品包裝袋上",
    point2Desc: "將刀模模板線與背景圖案合併在同一個點陣圖層中，會導致紅色裁切線和折疊線直接被印刷出來。",
    point2Sol: "將刀模線放置在最頂層的獨立圖層中，並鎖定該圖層，在印前軟體中將其屬性設定為『不列印』。",

    point3Title: "局部 UV 亮光或燙金位置跑偏",
    point3Desc: "如果沒有清晰的向量邊界，表面處理的清漆或金屬箔會溢出設計邊界，產生毛邊和對位偏差。",
    point3Sol: "在檔案中提供名為『Spot UV』或『Foil』的獨立圖層，並使用 100% 單色 K（黑）向量路徑精確填滿需要處理的區域。",

    point4Title: "色塊銜接處露出白色接縫（套印不準）",
    point4Desc: "印刷薄膜在高速滾筒中拉伸時會產生微小物理位移，扁平的設計在顏色接縫處容易因為對位不準而露出白線。",
    point4Sol: "在獨立的向量圖層中，將相鄰色塊的邊緣向外擴展 0.15mm 進行補漏白（Trapping），以遮蓋正常的對位偏差。",

    point5Title: "說明文字變成模糊的網點字",
    point5Desc: "將文字直接存入點陣圖檔（如 JPG）中，會把原本平滑的字體邊緣轉化成半色調墨點，使小字變得模糊難認。",
    point5Sol: "文字部分在 Illustrator 中保持向量格式，並在導出前將所有字體轉化為輪廓（Create Outlines），以分層 PDF 格式儲存。",

    compTitle: "物理對比：扁平化 JPG 印刷 vs. 圖層分離向量印刷對比",
    compDesc: "以下在牛皮紙底材上的實物印刷效果，清楚展示了白墨打底與分層向量處理對清晰度的決定性影響：",
    
    faq1Q: "為什麼我不能直接上傳一張設計好的扁平 JPG 圖片？",
    faq1A: "扁平的 JPG 檔案遺失了所有圖層資訊。我們將無法分離您的文字來保持向量清晰度，也無法為牛皮紙或透明薄膜製作必備的白墨打底版，更無法設定局部 UV 或燙金鋼版。必須使用分層檔案。",
    faq2Q: "如何建立白墨打底（White Underprint）圖層？",
    faq2A: "在 Illustrator 中新建一個獨立圖層，命名為『White Underprint』。在該圖層上，用向量形狀繪製出需要印白底的區域，通常與您正面的彩色設計形狀完全對應。",
    faq3Q: "Achieve Pack 接受哪些設計檔案格式？",
    faq3A: "我們接受分層的 Adobe Illustrator (.ai) 向量檔、Photoshop (.psd) 點陣分層檔以及保留圖層資訊的 PDF 印刷完稿檔。請務必將文字轉外框並嵌入圖片連結。",
    faq4Q: "什麼是補漏白（Trapping），為什麼一定要向量圖層才能做？",
    faq4A: "補漏白是印前處理中，將相鄰的顏色邊緣微調重疊（約 0.1mm 至 0.2mm）以防止裁切或套印偏移露出白邊的技術。這需要向量圖層，印前工程師才能獨立編輯和擴展色塊邊界。"
  }
}

const AiPackagingLayeredAssets: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/topics/ai-packaging-layered-assets/hero.jpg',
    process: '/imgs/topics/ai-packaging-layered-assets/process.jpg',
    comparison: '/imgs/topics/ai-packaging-layered-assets/comparison.jpg'
  }

  const sections = [
    {
      id: 'layered-power-explanation',
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
              alt="Adobe Illustrator prepress layers panel separating text and backgrounds" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Prepress design workstation: Separating locked dieline templates, vector text paths, CMYK design levels, and the white underprint layer in Adobe Illustrator."
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER KRAFT LAMINATION JOURNAL</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> White Underprint Calibration Confirmed
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: "5 Layering Challenges & Engineering Solutions",
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Point 1 */}
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

            {/* Point 2 */}
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

            {/* Point 3 */}
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

            {/* Point 4 */}
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

            {/* Point 5 */}
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
      id: 'layer-comparison-section',
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
              alt="Side-by-side comparison of printing on Kraft paper using flattened JPG vs layered vector layout" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Physical results: Left shows dark, absorbed ink colors printed directly on Kraft paper. Right shows bright, high-contrast colors printed over an opaque white underprint."
            />
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: "Generative Engine Optimization Content",
      content: (
        <div className="space-y-2">
          <h3>Why are layered design files required for flexible packaging?</h3>
          <p>Layered design files (AI, PSD, PDF) are required for flexible packaging to enable proper prepress plate separation. Layers are mandatory to configure spot white plates for clear films or Kraft paper, construct spot UV varnish and foil stamping masks, apply color trapping to prevent gaps, and keep typography on sharp vector tracks instead of blurry halftones.</p>
          <h3>How to set up white ink underprints in Adobe Illustrator?</h3>
          <p>Set up white ink underprints in Adobe Illustrator by creating a new layer named 'White Underprint' below your CMYK design. Draw vector shapes corresponding exactly to the zones where opaque color backing is required, filling them with a solid spot color marked as non-printing or labeled 'Spot White' for cylinder gravure prepress mapping.</p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: localTrans.faq1Q,
      answer: localTrans.faq1A
    },
    {
      question: localTrans.faq2Q,
      answer: localTrans.faq2A
    },
    {
      question: localTrans.faq3Q,
      answer: localTrans.faq3A
    },
    {
      question: localTrans.faq4Q,
      answer: localTrans.faq4A
    }
  ]

  const tables = [
    {
      title: "Required Prepress Layers and Standard Naming",
      data: {
        headers: ["Layer Name", "Content Type", "Format Requirement", "Function", "Prepress Action"],
        rows: [
          ["[L] Dieline", "Dieline & Specs", "Locked Vector Paths", "Guides slitting and bag folding", "Set as non-printing layout"],
          ["Text & Logos", "All Typography", "Outlined Vectors", "Ensures sharp readable print", "Direct plate-making exposure"],
          ["Spot Finish", "Spot UV / Foil", "Solid Spot Color Vector", "Defines varnish or foil areas", "Generates varnish/stamp cylinder"],
          ["CMYK Design", "Color Backgrounds", "300 DPI Raster / Vector", "Provides main visual color", "Four-color CMYK separation"],
          ["White Underprint", "White Ink Base", "Solid Spot Color Vector", "Underlay for clear/Kraft film", "Generates white backing plate"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "layered packaging assets",
    "prepress layer separation PSD AI",
    "white underprint plate flexible packaging",
    "spot UV vector mask layer",
    "trapping prepress registration",
    "avoiding flattened JPG print errors",
    "outlined vector fonts packaging",
    "CMYK color separation channels"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.heroTitle} | Achieve Pack</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/ai-packaging-layered-assets`} />
        <meta name="keywords" content={schemaKeywords.join(', ')} />
        
        {/* Schema markup */}
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
            "mainEntityOfPage": `https://achievepack.com/topics/ai-packaging-layered-assets`
          })}
        </script>

        {/* FAQ Schema */}
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

      {/* Visual Hidden GEO Content for search crawlers */}
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
        heroImageAlt="Exploded 3D view of packaging material and print separation layers"
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Layer Setup & Prepress Production"
      />
    </>
  )
}

export default AiPackagingLayeredAssets
