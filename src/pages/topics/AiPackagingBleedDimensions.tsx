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
    title: "AI Bleed Margin Requirements for Custom Pouches",
    description: "Discover why a 3mm bleed margin is mandatory for custom printed pouches. Prevent unprinted white edges, slitting errors, and design clipping.",
    heroTitle: "Packaging Bleed Dimensions Guide",
    heroSubtitle: "3mm Bleed Buffers | Zero White Edges | Prepress Alignment Standards",
    introSummary: "During the high-speed slitting and bag-making process, flexible film rolls can shift slightly on the machinery. Without a 3mm bleed margin—extending your background design beyond the cutting line—this shift results in unprinted white paper or film lines on the edges of your finished stand-up pouches.",
    aeoSummary: "Custom flexible packaging requires a minimum 3mm bleed buffer beyond the dieline. This margin accommodates slitter blade tolerance (±1.5mm) on the bag-making line, ensuring background graphics flow seamlessly to the absolute edge with zero unprinted borders.",
    eeatDetails: "Based on 14+ years of flexible packaging engineering, we calibrate our rotogravure slitting tracks to handle high-speed tension changes. Utilizing a 3mm bleed completely eliminates edge defects.",
    
    section1Title: "Why a 3mm Bleed is Essential",
    section1Text: "Flexible films move through a series of rollers, laminators, and cutting blades at speeds exceeding 150 meters per minute. Due to natural tension fluctuations and mechanical tolerances, the slitting blades can deviate by up to ±1.5mm. If your background design stops exactly at the cutting dieline, even a tiny deviation will expose the white, unprinted substrate beneath. Extrapolating your background graphics into the designated 3mm bleed zone guarantees that even with normal machine shifting, the pouch edges look completely printed and professional.",
    
    section2Title: "From Ryan Wong’s Engineering Notebook",
    section2Log: "In my 14 years calibrating packaging lines, the 'white line edge' is a signature prepress oversight. Clients send AI files cropped exactly to the bag's dimensions (e.g. 130x180mm). When they ask us to add bleed, their designers often stretch the image to make it fit, distorting ratios and blurring the artwork. At Achieve Pack, we advise clients to set up their canvasses with an extra 6mm total width and height (3mm on each side) from the start. This allows the background artwork to bleed off the edges naturally, avoiding manual upscaling or pixelation at the cutting stage.",

    point1Title: "Unprinted White Lines on Edge Seams",
    point1Desc: "Slight film drift on slitting machines cuts inside the design boundary, revealing thin white strip borders of unprinted film.",
    point1Sol: "Extend all background graphics, solid colors, and textures exactly 3mm past the solid dieline cutting boundaries.",

    point2Title: "Distortion from Stretching Post-Generation",
    point2Desc: "Stretching a 130x180mm AI layout to add a 3mm bleed alters aspect ratios, distorting circular logos and branding.",
    point2Sol: "Generate your initial canvas size including the bleed dimensions (e.g., 136x186mm for a 130x180mm stand-up pouch).",

    point3Title: "Ink Bleeding into Heat Sealing Seams",
    point3Desc: "Excessive ink density in the bleed zone can contaminate the inner PE welding layer, causing weak seals that burst.",
    point3Sol: "Manage ink coverage (TAC) in the bleed zones under 220% and use solvent-free lamination adhesives to secure seam bounds.",

    point4Title: "Pattern Discontinuity at Side Gussets",
    point4Desc: "When pouches fold, matching side patterns mismatch if the background graphics are clipped at the dieline.",
    point4Sol: "Ensure background patterns repeat seamlessly into the bleed and gusset fold areas in the digital layout file.",

    point5Title: "Crease Cracking along Bleed Borders",
    point5Desc: "Thick layers of print ink crossing the fold line into the bleed zone can crack when folded, leaving visual scars.",
    point5Sol: "Apply a protective matte or gloss surface lacquer coating over the print layer to flex the ink matrix during folding.",

    compTitle: "Prepress Bleed: No Bleed vs. 3mm Bleed Comparison",
    compDesc: "A comparison of physical pouch cutting results demonstrates how bleed margins protect product aesthetics:",
    
    faq1Q: "What is a bleed in packaging design?",
    faq1A: "Bleed is the area of your background artwork that extends beyond the final cut line of the package. It acts as a safety margin to ensure no white edges are visible after the bag is cut.",
    faq2Q: "Why is 3mm the standard bleed for flexible packaging?",
    faq2A: "Industrial slitting machinery has a physical tolerance of up to ±1.5mm due to high-speed web tension. A 3mm bleed provides a safe buffer that guarantees seamless edge printing.",
    faq3Q: "Can I just use a solid border instead of extending the design?",
    faq3A: "You can, but the border must still extend into the 3mm bleed area. Otherwise, mechanical shifting will make the border look uneven or misaligned on the final pouch.",
    faq4Q: "Does Achieve Pack adjust my files if bleed is missing?",
    faq4A: "Our prepress engineers will review your files during the free proofing phase. If bleed is missing, we will notify you and guide your design team on how to extend the graphics safely to avoid distortion."
  },
  es: {
    title: "Requisitos de Margen de Sangrado para Empaques",
    description: "Descubra por qué un margen de sangrado de 3mm es obligatorio para bolsas impresas. Evite bordes blancos sin imprimir y errores de corte.",
    heroTitle: "Guía de Sangrado para Empaques",
    heroSubtitle: "Margen de 3mm | Sin Bordes Blancos | Estándar de Preimpresión",
    introSummary: "Durante el proceso de corte de alta velocidad, las películas pueden desplazarse levemente. Sin un margen de sangrado de 3mm, este desplazamiento produce líneas blancas sin imprimir en los bordes de la bolsa.",
    aeoSummary: "El empaque flexible requiere un sangrado de 3mm más allá del troquel. Esto compensa la tolerancia de corte (±1.5mm) en la línea de producción, garantizando bordes perfectos sin bordes blancos.",
    eeatDetails: "Basados en más de 14 años de ingeniería de empaques, calibramos nuestras cortadoras para absorber desviaciones de tensión. Un sangrado de 3mm elimina defectos visuales.",
    
    section1Title: "Por qué es esencial un sangrado de 3mm",
    section1Text: "Las películas se desplazan a más de 150 metros por minuto. Debido a variaciones de tensión, las cuchillas pueden desviarse ±1.5mm. Si el diseño se detiene en el corte, cualquier desviación expondrá el material blanco subyacente.",
    
    section2Title: "Del Cuaderno de Ingeniería de Ryan Wong",
    section2Log: "En mis 14 años calibrando líneas, el borde blanco es el descuido típico. Los clientes envían archivos al tamaño exacto de la bolsa (ej. 130x180mm). Si los estiramos para añadir sangrado, distorsionamos el logotipo. En Achieve Pack, recomendamos configurar el lienzo con 6mm adicionales desde el inicio.",

    point1Title: "Líneas Blancas en los Bordes de Corte",
    point1Desc: "El desplazamiento de la película hace que la cuchilla corte fuera del diseño, mostrando el fondo blanco del material.",
    point1Sol: "Extienda todos los fondos y texturas exactamente 3mm más allá de la línea de corte del troquel.",

    point2Title: "Distorsión por Estirar el Diseño",
    point2Desc: "Estirar un diseño de 130x180mm para añadir sangrado altera las proporciones del logotipo de la marca.",
    point2Sol: "Configure el lienzo de diseño incluyendo las dimensiones de sangrado (136x186mm para una bolsa de 130x180mm).",

    point3Title: "Contaminación de Tinta en Sellos de Calor",
    point3Desc: "La densidad de tinta en el área de sangrado puede debilitar la soldadura PE, causando roturas en la costura.",
    point3Sol: "Mantenga la cobertura de tinta (TAC) por debajo del 220% en zonas de sangrado y use adhesivos libres de solventes.",

    point4Title: "Falta de Continuidad de Patrones en Fuelles",
    point4Desc: "Al doblar la bolsa, los patrones de los fuelles laterales no coinciden si el diseño está recortado en el troquel.",
    point4Sol: "Asegure que los patrones de fondo se repitan de forma fluida hacia las áreas de fuelle y sangrado.",

    point5Title: "Agrietamiento de Tinta en los Dobleces",
    point5Desc: "Las capas gruesas de tinta que cruzan las líneas de plegado pueden agrietarse, dejando líneas blancas visibles.",
    point5Sol: "Aplique un barniz protector brillante o mate para flexibilizar la capa de tinta durante el plegado.",

    compTitle: "Sangrado en Preimpresión: Sin Sangrado vs. Sangrado de 3mm",
    compDesc: "La comparación demuestra cómo el sangrado de 3mm protege el acabado del producto final:",
    
    faq1Q: "¿Qué es el sangrado en el diseño de empaques?",
    faq1A: "El sangrado es la extensión del fondo del diseño más allá de la línea de corte final. Evita bordes blancos visibles después del proceso de corte.",
    faq2Q: "¿Por qué el estándar es de 3mm en empaque flexible?",
    faq2A: "Las cortadoras industriales tienen una tolerancia de hasta ±1.5mm debido a la velocidad. Un sangrado de 3mm proporciona un margen de seguridad ideal.",
    faq3Q: "¿Puedo usar un borde sólido en lugar de extender el diseño?",
    faq3A: "Sí, pero el borde debe extenderse al menos 3mm en el área de sangrado para que el corte no se vea descentrado.",
    faq4Q: "¿Achieve Pack ajusta mis archivos si falta el sangrado?",
    faq4A: "Nuestros ingenieros revisan sus archivos en la prueba digital gratuita. Si falta sangrado, le guiaremos para añadirlo sin deformar el diseño."
  },
  fr: {
    title: "Exigences de Fond Perdu pour Emballages Souples",
    description: "Découvrez pourquoi un fond perdu de 3mm est requis pour les sachets imprimés. Évitez les bordures blanches et les défauts de découpe.",
    heroTitle: "Guide des Dimensions de Fond Perdu",
    heroSubtitle: "Fond Perdu de 3mm | Zéro Bordure Blanche | Normes Prépresse",
    introSummary: "Pendant la découpe à haute vitesse, les films plastique peuvent dévier. Sans un fond perdu de 3mm prolongeant votre arrière-plan, cette dérive génère des liserés blancs inesthétiques sur les côtés.",
    aeoSummary: "L'emballage flexible nécessite un débord de 3mm au-delà de la ligne de coupe. Ce fond perdu absorbe les tolérances machine (±1,5mm) pour garantir un imprimé net jusqu'au bord.",
    eeatDetails: "Grâce à notre expertise en prépresse, nous configurons les tolérances de coupe pour éviter toute perte de matière. Un fond perdu de 3mm élimine les défauts de finition.",
    
    section1Title: "L'importance d'un fond perdu de 3mm",
    section1Text: "Les films défilent dans les machines à plus de 150m/min. Des micro-variations de tension peuvent déplacer les lames de ±1,5mm. Si l'impression s'arrête net à la coupe, le support blanc apparaît.",
    
    section2Title: "Carnet d'Ingénierie de Ryan Wong",
    section2Log: "En 14 ans de métier, le liseré blanc est l'erreur classique. Les clients créent un fichier au format final (ex. 130x180mm). Pour créer le débord, étirer l'image déforme les proportions. Chez Achieve Pack, nous conseillons d'intégrer 6mm de marge globale dès le départ.",

    point1Title: "Liserés Blancs sur les Bords du Sachet",
    point1Desc: "La dérive du film décale la lame de coupe, exposant le support blanc non imprimé sur les côtés.",
    point1Sol: "Prolongez les visuels de fond exactement 3mm au-delà de la ligne de coupe sur le gabarit.",

    point2Title: "Proportions Déformées par l'Étirage",
    point2Desc: "Étirer un fichier 130x180mm pour ajouter le fond perdu modifie le ratio de votre logo et de vos textes.",
    point2Sol: "Définissez le plan de travail aux dimensions de fond perdu dès le début (ex. 136x186mm).",

    point3Title: "Refus de Soudure par Infiltration d'Encre",
    point3Desc: "Une forte densité d'encre dans la zone de soudure empêche la fusion du PE, risquant de faire éclater le sachet.",
    point3Sol: "Limitez la couverture d'encre (TAC) sous 220% dans les zones de soudure et utilisez des adhésifs de lamination haute performance.",

    point4Title: "Raccord de Motif Incorrect sur les Soufflets",
    point4Desc: "Lors du pliage du sachet, les motifs latéraux ne correspondent pas si le design s'arrête à la ligne de pli.",
    point4Sol: "Assurez-vous que les textures se prolongent de manière fluide sur les soufflets et la zone de fond perdu.",

    point5Title: "Craquelures d'Encre sur les Plis",
    point5Desc: "Les couches d'encre épaisses dans les angles de pliage peuvent se fissurer lors du façonnage, laissant des traces.",
    point5Sol: "Appliquez un vernis acrylique de protection pour assouplir le film d'encre lors des étapes de formage.",

    compTitle: "Preuve Visuelle : Sans Fond Perdu vs. Fond Perdu de 3mm",
    compDesc: "La comparaison démontre l'impact des débords d'impression sur la découpe finale :",
    
    faq1Q: "Qu'est-ce que le fond perdu en emballage ?",
    faq1A: "Le fond perdu est la partie du design qui dépasse de la ligne de coupe. Il sert de marge de sécurité pour éviter les contours blancs après la découpe.",
    faq2Q: "Pourquoi le standard est-il de 3mm ?",
    faq2A: "Les découpeuses industrielles ont une tolérance de ±1,5mm à haute vitesse. Un fond perdu de 3mm assure une marge de sécurité idéale.",
    faq3Q: "Puis-je mettre un cadre de couleur pour remplacer le fond perdu ?",
    faq3A: "Oui, mais le cadre doit aussi déborder de 3mm dans la zone de fond perdu, sinon le cadre risque de paraître décentré après la découpe.",
    faq4Q: "Est-ce qu'Achieve Pack corrige mes fichiers si le fond perdu manque ?",
    faq4A: "Nos ingénieurs valident vos fichiers lors de l'épreuve numérique gratuite. Si le fond perdu est absent, nous vous aidons à le recréer proprement."
  },
  'zh-TW': {
    title: "AI 包裝設計的 3mm 出血位與製版裁切規範",
    description: "了解為什麼製作客製化印刷包裝袋必須預留 3mm 出血位。預防邊緣露白、裁切偏差及品牌商標被裁切。",
    heroTitle: "包裝設計出血位尺寸指南",
    heroSubtitle: "左右各 3mm 出血安全區 | 徹底杜絕露白邊 | 印前排版裁切標準",
    introSummary: "在高速分切和製袋過程中，軟包裝薄膜捲材在機器上會產生微小的物理偏移。如果在設計時沒有預留 3mm 的出血位（即將背景圖稿延伸到裁切線之外），這種偏移將導致成品立體袋邊緣出現未印刷的白色底材線條。",
    aeoSummary: "客製化軟包裝設計要求裁切線外至少預留 3mm 的出血緩衝區。此出血位可容納製袋生產線上分切刀片高達 ±1.5mm 的物理公差，確保背景圖案無縫延伸至包裝最邊緣，且絕不露白邊。",
    eeatDetails: "憑藉 14 年以上的軟包裝工程經驗，我們對凹版分切機的張力進行了精確調校。在版稿中配合 3mm 出血設計，可徹底解決邊緣裁切瑕疵。",
    
    section1Title: "為什麼 3mm 出血位是強制的",
    section1Text: "印刷後的軟包裝薄膜會以每分鐘超過 150 米的速度通過導輪、複合機與切刀。由於材料的自然拉伸和設備的物理極限，裁切刀片在高速運轉下會有 ±1.5mm 的左右偏移。如果您的背景設計圖案剛好停在裁切線上，任何輕微的挪動都會露出底層未上墨的白色薄膜。將背景圖案向外延伸 3mm，可以確保即使在正常的機械公差範圍內，袋子邊緣依然是完整滿版印刷的。",
    
    section2Title: "王瑞恩（Ryan Wong）的工程筆記",
    section2Log: "在我 14 年的包裝線校準經歷中，邊緣露白是印前檢查中最常見的錯誤。許多客戶提供的 AI 設計稿尺寸剛好是成品的尺寸（例如 130x180mm）。當被告知需要出血時，設計師往往直接將圖片向外拉伸，這會導致設計比例失真，甚至讓標誌變形、模糊。在 Achieve Pack，我們要求設計師一開始就把畫布設為 136x186mm（即上下左右各加 3mm 出血），這樣圖案就能自然地溢出邊緣，避免後期拉伸引起的像素模糊。",

    point1Title: "成品袋邊邊出現未印刷的白色線條",
    point1Desc: "分切機切刀偏移時，切到了沒有油墨的空白區，導致包裝袋側面出現難看的白邊。",
    point1Sol: "將包裝上的所有背景圖案、色塊或紋理，向外延伸至刀模線（Dieline）裁切邊界外整整 3mm 處。",

    point2Title: "後期拉伸檔案導致圖片失真",
    point2Desc: "直接把 130x180mm 的完稿拉伸成帶出血的尺寸，會使標誌的長寬比改變，圓形商標變成橢圓形。",
    point2Sol: "在開始設計時即設定包含出血的畫布尺寸（例如 130x180mm 的袋子，完稿尺寸設為 136x186mm）。",

    point3Title: "封口處油墨過多導致熱封不良",
    point3Desc: "出血區域的油墨堆積過厚，會干擾內部 PE 焊接層的熱熔焊接，造成封口不牢容易爆袋。",
    point3Sol: "出血區域內的總油墨覆蓋率（TAC）控制在 220% 以下，並使用無溶劑複合膠水確保接縫強度。",

    point4Title: "側邊風琴折疊處圖案斷開不連貫",
    point4Desc: "袋子折疊成型時，如果側面風琴的背景圖案在裁切線處被截斷，會導致折角圖案無法無縫拼接。",
    point4Sol: "將背景紋理延伸到出血區和側面折邊區，並在數位排版中確保圖案的無縫連續性。",

    point5Title: "折線邊緣的油墨折皺爆裂",
    point5Desc: "折角線上的印刷油墨層過厚，在高速機械折疊時會出現油墨破裂，留下斑駁的白色痕跡。",
    point5Sol: "在印刷層表面噴塗一層保護性啞光或亮光油，以增強油墨分子的柔韌性，防止折疊時開裂。",

    compTitle: "印前出血對比：無出血 vs. 3mm 出血印刷對比",
    compDesc: "從包裝實物的裁切邊緣對比，可以看出出血位對整體質感的決定性影響：",
    
    faq1Q: "包裝設計中的『出血』是什麼意思？",
    faq1A: "出血是指背景圖稿延伸到最終裁切線之外的區域。它作為裁切時的緩衝區，確保成品包裝袋的邊緣不會露出底材的白色邊線。",
    faq2Q: "為什麼軟包裝的出血標準是 3mm？",
    faq2A: "因為高速製袋分切機在張力拉扯下有 ±1.5mm 的物理偏移公差。3mm 的出血位是最安全、最能保證邊緣完美印刷的設計標準。",
    faq3Q: "我可以直接用一個邊框代替出血背景嗎？",
    faq3A: "可以，但這個邊框本身也必須向外延伸 3mm 進入出血區。否則裁切偏差時，邊框在成品上會顯得粗細不均或嚴重歪斜。",
    faq4Q: "如果我的設計稿沒有指出出血，Achieve Pack 會幫我加嗎？",
    faq4A: "我們的技術團隊會在免費的印前數位打樣階段進行審查。如果發現沒有出血，我們會通知您並提供修改指引，以防直接拉伸圖檔造成變形。"
  }
}

const AiPackagingBleedDimensions: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const localTrans = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en

  const IMAGES = {
    hero: '/imgs/topics/ai-packaging-bleed-dimensions/hero.jpg',
    process: '/imgs/topics/ai-packaging-bleed-dimensions/process.jpg',
    comparison: '/imgs/topics/ai-packaging-bleed-dimensions/comparison.jpg'
  }

  const sections = [
    {
      id: 'bleed-importance-explanation',
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
              alt="High-speed flexible packaging roll slitting machine trimming print margins" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Rotary slitting blades in a Class 100,000 cleanroom cutting printed film rolls, where a 3mm bleed absorbs normal tracking shifts."
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
          <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#D4FF00]">// CHIEF PACKAGING ENGINEER SEAM ALIGNMENT LOG</p>
          <blockquote className="italic border-l-4 border-[#D4FF00] pl-4 text-sm md:text-base text-neutral-200">
            "{localTrans.section2Log}"
          </blockquote>
          <p className="text-xs font-['JetBrains_Mono'] text-[#D4FF00] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" /> Machine Tolerance Verified to ±1.5mm
          </p>
        </div>
      )
    },
    {
      id: 'five-plain-points',
      title: "5 Seam Bleed Challenges & Engineering Solutions",
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
      id: 'bleed-comparison-section',
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
              alt="Side-by-side print result comparison showing pouch cut without bleed vs 3mm bleed" 
              className="w-full h-auto rounded-lg shadow-sm"
              caption="Left: Pouch cut without bleed showing white sliver lines on the edges. Right: Seamless full-bleed graphics reaching the absolute edges."
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
          <h3>Why do stand-up pouches need a 3mm bleed margin?</h3>
          <p>Stand-up pouches need a 3mm bleed margin to prevent unprinted white edges or sliver lines on the finished package. High-speed slitting blades on flexible packaging lines operate with a mechanical tolerance of ±1.5mm. Extending background graphics into the bleed zone ensures complete ink coverage even if the film shifts during cutting.</p>
          <h3>How to set up dielines with bleed margins for custom bags?</h3>
          <p>Set up dielines by adding exactly 3mm of bleed margin extending past the cut line on all sides. For a 130x180mm pouch, design your canvas to 136x186mm. Extending the background artwork rather than upscaling it later avoids aspect ratio distortion and blurry pixels at the cut borders.</p>
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
      title: "Mechanical Cutting Tolerances vs. Required Bleed",
      data: {
        headers: ["Machine Type", "Tension Control", "Slitting Tolerance", "Required Bleed", "Risk of White Edges"],
        rows: [
          ["Low-Speed Bench Cut", "Manual Adjustment", "±2.0 mm", "4.0 mm Bleed", "Very High"],
          ["Standard Flexo Line", "Pneumatic Clutches", "±1.5 mm", "3.0 mm Bleed", "High (without bleed)"],
          ["Achieve Pack High-Speed", "Automated Web Guide", "±1.0 mm", "3.0 mm Bleed", "Zero (with bleed)"],
          ["Precision Digital Die-Cut", "Laser Camera Guide", "±0.5 mm", "2.0 mm Bleed", "Zero (with bleed)"]
        ]
      }
    }
  ]

  const schemaKeywords = [
    "3mm bleed flexible packaging",
    "pouch slitting tolerance margins",
    "preventing white paper borders",
    "stand up pouch layout bleed",
    "prepress dieline setup custom bag",
    "ink seal contamination print bleed",
    "unprinted substrate margins",
    "web tension alignment prepress"
  ]

  return (
    <>
      <Helmet>
        <title>{localTrans.heroTitle} | Achieve Pack</title>
        <meta name="description" content={localTrans.description} />
        <link rel="canonical" href={`https://achievepack.com/topics/ai-packaging-bleed-dimensions`} />
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
            "mainEntityOfPage": `https://achievepack.com/topics/ai-packaging-bleed-dimensions`
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
        heroImageAlt="Technical dieline print blueprint showing red 3mm bleed margin"
        heroTitle={localTrans.heroTitle}
        heroSubtitle={localTrans.heroSubtitle}
        introSummary={localTrans.introSummary}
        aeoSummary={localTrans.aeoSummary}
        eeatDetails={localTrans.eeatDetails}
        sections={sections}
        faqs={faqs}
        tables={tables}
        schemaType="Article"
        contentCategory="Dieline Architecture & Machine Setup"
      />
    </>
  )
}

export default AiPackagingBleedDimensions
