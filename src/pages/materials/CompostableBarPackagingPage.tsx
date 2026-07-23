import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Leaf, Shield, Award, CheckCircle, Globe, Mail, X, ChevronLeft, ChevronRight, BookOpen, ShoppingBag, Droplets, Zap, Thermometer, Settings, AlertTriangle, Layers, Calendar } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import ClickableImage from '../../components/ClickableImage'

export const localTranslations: Record<string, any> = {
  en: {
    painPointsTitle: "5 Packaging Pain Points & Engineering Solutions",
    painPoints: [
      {
        num: "01",
        problem: "Oil Staining & Paper Bleedthrough",
        solution: "High-fat ingredients like chocolate, nuts, and seed oils can seep through paper, causing unsightly dark grease spots. We solve this by laminating a 15-micron high-density Metallized PLA middle layer that completely blocks lipid migration and keeps the outer Kraft paper pristine.",
        iconName: "Droplets"
      },
      {
        num: "02",
        problem: "Brittle Heat Seals and Packaging Blowouts",
        solution: "Standard bioplastics like PLA have a very narrow sealing window and low elasticity, causing seams to burst on packing lines. Our proprietary inner sealing film blends PLA with flexible PBAT, widening the thermal window (140°C–160°C) and increasing tensile seam strength.",
        iconName: "Shield"
      },
      {
        num: "03",
        problem: "Rapid Oxidation & Stale Ingredients",
        solution: "Nuts, seeds, and protein powders degrade quickly in contact with oxygen, turning rancid. Our metalized PLA barrier reduces Oxygen Transmission Rate (OTR) to under 0.1 cc/m²/day, protecting delicate fats from oxidation and preserving crunch and flavor.",
        iconName: "Zap"
      },
      {
        num: "04",
        problem: "Moisture Absorption & Softening",
        solution: "Ambient humidity can penetrate simple paper wraps, making crispy energy bars soft and soggy. The laminated metalized PLA film acts as an excellent moisture barrier, keeping Moisture Vapor Transmission Rate (MVTR) below 0.1 g/m²/day to maintain product texture.",
        iconName: "Thermometer"
      },
      {
        num: "05",
        problem: "High Friction Jamming on VFFS Machines",
        solution: "Compostable films often have a tacky surface that sticks to forming collars, causing line stoppages on high-speed VFFS wrappers. We formulate our sealing layer with organic slip agents to lower the Coefficient of Friction (COF) to 0.2–0.3, matching standard plastic run speeds.",
        iconName: "Settings"
      }
    ],
    notebookTitle: "From Ryan Wong's Engineering Notebook",
    notebookStory: "In my 14 years designing sustainable packaging, high-speed wrapping compatibility was always the hurdle for compostable bar packaging. During a trial run for an organic protein bar brand, their HFFS machine kept jamming due to the high drag coefficient of pure PLA film. We formulated a custom outer slip-agent and switched to a PLA/PBAT blend. By optimizing the sealing temperature to exactly 148°C with a 1.2-second dwell time, we achieved a smooth run of 180 packs per minute—zero seal failures and zero jams. It proved that you don't have to sacrifice speed for sustainability.",
    expertTitle: "Ryan Wong",
    expertSubtitle: "Co-Founder & Chief Packaging Engineer",
    expertBio: "14+ Years Packaging Engineering | GRS & FSC Auditing Expert. Ryan Wong is a materials scientist who has helped 500+ global brands scale from prototype testing to industrial vertical packaging lines.",
    authorProfileCardTitle: "Expert Material Review by Ryan Wong",
    auditLinkText: "Schedule a 15-minute packaging audit with Ryan"
  },
  es: {
    painPointsTitle: "5 Problemas de Envasado y Soluciones de Ingeniería",
    painPoints: [
      {
        num: "01",
        problem: "Manchas de Aceite y Filtraciones de Papel",
        solution: "Los ingredientes con alto contenido de grasa como el chocolate, las nueces y los aceites pueden filtrarse a través del papel. Lo solucionamos laminando una capa intermedia de PLA metalizado de alta densidad de 15 micras que bloquea por completo la migración de lípidos y mantiene el papel Kraft exterior impecable.",
        iconName: "Droplets"
      },
      {
        num: "02",
        problem: "Sellados Térmicos Quebradizos y Roturas",
        solution: "Los bioplásticos estándar como el PLA tienen una ventana de sellado muy estrecha, lo que provoca que las costuras se rompan en las líneas de envasado. Nuestra película de sellado interna combina PLA con PBAT flexible, ampliando la ventana térmica (140°C–160°C) y aumentando la resistencia de la costura.",
        iconName: "Shield"
      },
      {
        num: "03",
        problem: "Oxidación Rápida e Ingredientes Ranciados",
        solution: "Los frutos secos, semillas y proteínas en polvo se degradan rápidamente en contacto con el oxígeno. Nuestra barrera de PLA metalizado reduce la tasa de transmisión de oxígeno (OTR) por debajo de 0.1 cc/m²/día, protegiendo las grasas de la oxidación y preservando el crujido y el sabor.",
        iconName: "Zap"
      },
      {
        num: "04",
        problem: "Absorción de Humedad y Ablandamiento",
        solution: "La humedad ambiental puede penetrar en los envoltorios de papel simples, ablandando las barras energéticas crujientes. La película de PLA metalizado laminado actúa como una excelente barrera contra la humedad, manteniendo la tasa de transmisión de vapor de agua (MVTR) por debajo de 0.1 g/m²/día.",
        iconName: "Thermometer"
      },
      {
        num: "05",
        problem: "Atascos por Alta Fricción en Máquinas VFFS",
        solution: "Las películas compostables suelen tener una superficie pegajosa que se adhiere a los cuellos de formado, deteniendo la línea en las envolvedoras de alta velocidad. Formulamos nuestra capa de sellado con agentes deslizantes orgánicos para reducir el coeficiente de fricción (COF) a 0.2–0.3.",
        iconName: "Settings"
      }
    ],
    notebookTitle: "Del cuaderno de ingeniería de Ryan Wong",
    notebookStory: "En mis 14 años diseñando envases sostenibles, la compatibilidad con el envolvedor de alta velocidad siempre fue el obstáculo para los envases compostables. Durante una prueba para una marca de barras de proteína orgánica, su máquina HFFS seguía atascándose debido al alto coeficiente de arrastre de la película de PLA puro. Formulamos un agente deslizante externo personalizado y cambiamos a una mezcla de PLA/PBAT. Al optimizar la temperatura de sellado a exactamente 148°C con un tiempo de permanencia de 1.2 segundos, logramos un funcionamiento fluido de 180 paquetes por minuto, con cero fallas de sellado y cero atascos. Demostró que no hay que sacrificar velocidad por sostenibilidad.",
    expertTitle: "Ryan Wong",
    expertSubtitle: "Co-fundador y Ingeniero Jefe de Empaque",
    expertBio: "Más de 14 años de ingeniería de empaques | Experto en auditoría GRS y FSC. Ryan Wong es un científico de materiales que ha ayudado a más de 500 marcas globales a escalar desde pruebas de prototipos hasta líneas industriales de envasado vertical.",
    authorProfileCardTitle: "Revisión experta de materiales por Ryan Wong",
    auditLinkText: "Programe una auditoría de empaque de 15 minutos con Ryan"
  },
  fr: {
    painPointsTitle: "5 Problèmes d'Emballage et Solutions d'Ingénierie",
    painPoints: [
      {
        num: "01",
        problem: "Taches de Graisse et Transpercement du Papier",
        solution: "Les ingrédients riches en matières grasses comme le chocolat et les noix peuvent s'infiltrer à travers le papier. Nous résolvons ce problème en laminant une couche intermédiaire en PLA métallisé de 15 microns qui bloque complètement la migration des lipides et préserve le papier Kraft extérieur.",
        iconName: "Droplets"
      },
      {
        num: "02",
        problem: "Soudures Thermiques Fragiles et Ruptures",
        solution: "Les bioplastiques standard comme le PLA ont une fenêtre de scellage très étroite, provoquant l'éclatement des coutures sur les lignes de conditionnement. Notre film de scellage interne mélange le PLA avec du PBAT flexible, élargissant la plage thermique (140°C–160°C) et renforçant la résistance des soudures.",
        iconName: "Shield"
      },
      {
        num: "03",
        problem: "Oxydation Rapide et Perte de Fraîcheur",
        solution: "Les noix, graines et protéines se dégradent rapidement au contact de l'oxygène. Notre barrière en PLA métallisé réduit le taux de transmission de l'oxygène (OTR) à moins de 0.1 cc/m²/jour, protégeant les graisses de l'oxydation et préservant le croustillant et le goût.",
        iconName: "Zap"
      },
      {
        num: "04",
        problem: "Absorption d'Humidité et Ramollissement",
        solution: "L'humidité ambiante peut pénétrer dans les emballages en papier simples, ramollissant les barres énergétiques. Le film PLA métallisé laminé agit comme une excellente barrière contre l'humidité, maintenant le taux de transmission de la vapeur d'eau (MVTR) en dessous de 0.1 g/m²/jour.",
        iconName: "Thermometer"
      },
      {
        num: "05",
        problem: "Blocages dus à une Friction Élevée sur VFFS",
        solution: "Les films compostables ont souvent une surface collante qui adhère aux cols de formage, provoquant des arrêts sur les emballeuses VFFS. Nous formulons notre couche de scellage avec des agents glissants organiques pour abaisser le coefficient de friction (COF) à 0.2–0.3.",
        iconName: "Settings"
      }
    ],
    notebookTitle: "Du carnet d'ingénierie de Ryan Wong",
    notebookStory: "Au cours de mes 14 années de conception d'emballages durables, la compatibilité avec l'ensachage à grande vitesse a toujours été l'obstacle pour les emballages de barres compostables. Lors d'un essai pour une marque de barres protéinées biologiques, leur machine HFFS se bloquait constamment à cause du coefficient de traînée élevé du film PLA pur. Nous avons formulé un agent glissant externe personnalisé et sommes passés à un mélange PLA/PBAT. En optimisant la température de scellage à exactement 148°C avec un temps de maintien de 1.2 seconde, nous avons obtenu un défilement fluide de 180 paquets par minute—zéro défaut de soudure et zéro bourrage. Cela prouve qu'il ne faut pas sacrifier la vitesse pour la durabilité.",
    expertTitle: "Ryan Wong",
    expertSubtitle: "Co-fondateur et ingénieur en chef de l'emballage",
    expertBio: "14+ ans d'expérience en ingénierie de l'emballage | Expert en audit GRS & FSC. Ryan Wong is a materials scientist who has helped 500+ global brands scale from prototype testing to industrial vertical packaging lines.",
    authorProfileCardTitle: "Examen des matériaux par l'expert Ryan Wong",
    auditLinkText: "Planifiez un audit d'emballage de 15 minutes avec Ryan"
  },
  'zh-tw': {
    painPointsTitle: "能量棒包裝5大痛點與工程解決方案",
    painPoints: [
      {
        num: "01",
        problem: "油脂滲透與牛皮紙污漬",
        solution: "巧克力、堅果和種子油等高脂肪成分會滲透紙張，產生難看的深色油漬。我們通過層壓15微米高密度鍍鋁PLA中層解決此問題，該層完全阻斷脂質遷移，保持外層牛皮紙潔淨美觀。",
        iconName: "Droplets"
      },
      {
        num: "02",
        problem: "熱封口易脆化與包裝破損爆袋",
        solution: "像PLA這樣的標準生物塑料具有非常窄的封口溫度窗口和低彈性，容易在包裝線上爆開。我們專有的內層熱封膜將PLA與柔韌的PBAT共混，拓寬了熱封溫度窗口（140°C–160°C）並增強了封口抗拉強度。",
        iconName: "Shield"
      },
      {
        num: "03",
        problem: "油脂氧化與食品快速變質變味",
        solution: "堅果、種子和蛋白質粉與氧氣接觸後會迅速變質。我們的鍍鋁PLA阻隔層將透氧率（OTR）降低至0.1 cc/m²/day以下，保護精細油脂免受氧化，鎖住新鮮、香脆與風味。",
        iconName: "Zap"
      },
      {
        num: "04",
        problem: "濕氣吸收與產品軟化坍塌",
        solution: "環境中的濕氣會滲透普通紙包裝，使酥脆的能量棒變得黏軟。層壓的鍍鋁PLA薄膜是極佳防護屏障，將透濕率（MVTR）保持在0.1 g/m²/day以下，維持完美的產品口感。",
        iconName: "Thermometer"
      },
      {
        num: "05",
        problem: "高速包裝機跑機阻力大卡機停線",
        solution: "可堆肥卷膜的表面摩擦力大，容易粘附在立式枕式包裝機的成型領上，造成卡機停線。我們在熱封層中加入有機爽滑劑，將動態摩擦係數（COF）降至0.2–0.3，完美匹配普通塑料的跑機速度。",
        iconName: "Settings"
      }
    ],
    notebookTitle: "摘自黃瑞恩（Ryan Wong）的包裝工程日誌",
    notebookStory: "在我設計環保包裝的14年裡，高速包裝機的兼容性一直是可堆肥能量棒包裝的瓶頸。在一份有機蛋白質棒品牌的測試運行中，由於純PLA薄膜的高拖拽阻力，客戶的HFFS枕包機頻繁卡頓。我們研發了定制的外層滑爽助劑並改用PLA/PBAT共混膜。通過將熱封溫度精確調整至148°C，熱封時間1.2秒，我們成功在高速生產線上達到了每分鐘180包的跑機速度——封口良率達100%，無一卡機。這證明了環保與產能效率完全可以兼得。",
    expertTitle: "黃瑞恩 (Ryan Wong)",
    expertSubtitle: "聯合創始人兼首席包裝工程師",
    expertBio: "14年以上包裝工程經驗 | GRS & FSC 認證審計專家。黃瑞恩是一位材料學專家，已協助全球500多個品牌從樣品測試成功對接到工業化自動包裝線。",
    authorProfileCardTitle: "包裝材料專家黃瑞恩審核",
    auditLinkText: "預約黃瑞恩進行15分鐘的包裝技術診斷"
  }
}

const iconMap = {
  Droplets: Droplets,
  Shield: Shield,
  Zap: Zap,
  Thermometer: Thermometer,
  Settings: Settings
}

const CompostableBarPackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const currentLang = i18n.language || 'en'
  const isPouchDomain = getDomain() === 'pouch'

  const tLocal = (key: string) => {
    const langData = localTranslations[currentLang] || localTranslations.en
    return langData[key] || localTranslations.en[key]
  }

  const tPain = localTranslations[currentLang] || localTranslations.en
  const p = 'seoPages.pages.compostableBarPackaging'

  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; caption: string } | null>(null)

  const visualBreadcrumbsAndLabels = (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-neutral-300/90 uppercase tracking-wider">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <span className="text-neutral-400">/</span>
        <Link to="/materials" className="hover:text-white transition">Materials</Link>
        <span className="text-neutral-400">/</span>
        <span className="text-[#10b981] font-bold">Compostable Bar Wrappers</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-[#10b981] text-white rounded-full uppercase tracking-wider shadow-sm">
          🌱 Certified Eco Material
        </span>
        <Link 
          to="/products/compostable-stand-up-pouches" 
          className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-bold bg-white/10 hover:bg-white/20 text-white rounded-full transition border border-white/20 uppercase tracking-wider"
        >
          🔄 Conventional Stock Alternative →
        </Link>
      </div>
    </div>
  )

  const relatedProducts = [
    {
      name: 'Compostable Coffee Bags',
      link: '/products/compostable-coffee-bags',
      image: '/imgs/illustrated/a_coffee_roaster_variation_1_6758424.webp',
      desc: t('seoPages.pages.compostableBarPackaging.faqs.relatedProduct1Desc', 'Certified industrial and home compostable bags featuring high barrier properties.')
    },
    {
      name: 'Compostable Stand Up Pouches',
      link: '/products/compostable-stand-up-pouches',
      image: '/imgs/illustrated/a_compostable_v3_9254998.webp',
      desc: t('seoPages.pages.compostableBarPackaging.faqs.relatedProduct2Desc', 'Versatile and durable stand-up pouches with premium organic matte textures.')
    },
    {
      name: 'Compostable Side Gusset Bags',
      link: '/products/compostable-side-gusset-bags',
      image: '/imgs/store/products/compostable-side-gusset-collection.png',
      desc: t('seoPages.pages.compostableBarPackaging.faqs.relatedProduct3Desc', 'High-capacity side-gusseted bags designed for wholesale snack and coffee brands.')
    }
  ]

  const sections = [
    {
      id: 'structure-layers',
      title: t(`${p}.sections.detail1.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            {t(`${p}.sections.detail1.desc`)}
          </p>
          <div className="flex flex-col items-center my-6">
            <button 
              onClick={() => setGalleryEnlarged({
                src: '/imgs/knowledge/compostable-bar-packaging-layers.jpg',
                caption: '3-Layer Lamination exploded schematic layout showing Raw Kraft Paper, Metallized PLA, and PLA/PBAT sealing blend.'
              })}
              className="block rounded-xl overflow-hidden shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow cursor-pointer max-w-full md:max-w-md group"
            >
              <img src="/imgs/knowledge/compostable-bar-packaging-layers.jpg" alt="Technical diagram of compostable bar packaging layers" className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300" />
              <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center font-medium">Click to zoom blueprint</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'technical-specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <p>
            {t(`${p}.sections.specifications.desc`)}
          </p>
        </div>
      )
    },
    {
      id: 'notebook-experience',
      title: tLocal('notebookTitle'),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/10 rounded-full blur-2xl"></div>
            <h4 className="text-lg font-bold text-primary-400 mb-3 flex items-center gap-2">
              <span>🔬</span> {tLocal('notebookTitle')}
            </h4>
            <p className="italic text-neutral-300 text-sm leading-relaxed">
              "{tLocal('notebookStory')}"
            </p>
            <p className="text-xs font-semibold text-neutral-400 mt-4 border-t border-neutral-800 pt-3">
              — {tLocal('expertTitle')}, {tLocal('expertSubtitle')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'industry-pain-points',
      title: tLocal('painPointsTitle'),
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {tPain.painPoints.map((item: any, idx: number) => {
            const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || AlertTriangle
            return (
              <div key={idx} className="bg-neutral-900 text-white rounded-2xl p-6 border border-neutral-800 shadow-lg flex flex-col justify-between hover:border-primary-500/30 transition duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary-400 bg-primary-400/10 px-2.5 py-1 rounded-full">{item.num}</span>
                    <IconComponent className="h-5 w-5 text-primary-400" />
                  </div>
                  <h4 className="text-base font-bold mb-2 text-neutral-100">{item.problem}</h4>
                  <p className="text-neutral-300 text-xs leading-relaxed">
                    <span className="text-primary-400 font-semibold">✅ Solution:</span> {item.solution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )
    },
    {
      id: 'store-product-integration',
      title: 'Certified Store Products',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {relatedProducts.map((prod, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <img src={prod.image} alt={prod.name} className="w-full h-40 object-cover rounded-xl mb-4 border border-neutral-100" />
                <h4 className="font-bold text-neutral-900 mb-2 text-sm">{prod.name}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-5">{prod.desc}</p>
              </div>
              <Link to={prod.link} className="inline-flex items-center justify-center text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-4 rounded-xl transition">
                Configure Product
              </Link>
            </div>
          ))}
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faqs.q1`), answer: t(`${p}.faqs.a1`) },
    { question: t(`${p}.faqs.q2`), answer: t(`${p}.faqs.a2`) },
    { question: t(`${p}.faqs.q3`), answer: t(`${p}.faqs.a3`) }
  ]

  const relatedLinks = [
    { title: 'Home Compostable Materials Guide', url: '/materials/home-compostable', description: 'Explore packaging options that decompose naturally in backyard compost setups.' },
    { title: 'Industrial Compostable Overview', url: '/materials/industrial-compostable', description: 'Learn about commercial organic recycling routes and TUV certifications.' },
    { title: 'Organic Support & Cleanroom Compliances', url: '/composting/organic-compliance-support', description: 'Technical certifications for packaging organic food items.' }
  ]

  const rawHeaders = t(`${p}.table.headers`, { returnObjects: true })
  const headers = Array.isArray(rawHeaders) ? (rawHeaders as string[]) : []

  const rawRows = t(`${p}.table.rows`, { returnObjects: true })
  const rows = Array.isArray(rawRows) ? (rawRows as string[][]) : []

  const tableTitle = t(`${p}.table.title`)

  const tables = headers.length > 0 && rows.length > 0 ? [
    {
      title: tableTitle,
      data: { headers, rows }
    }
  ] : []

  // EEAT Author Profile section rendering
  const EEATAuthorProfileCard = () => (
    <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-8 mt-12 flex flex-col md:flex-row gap-6 items-center md:items-start">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-200 border-2 border-neutral-300 shrink-0">
        <img src="/imgs/team/ryan_wong.jpg" alt="Ryan Wong" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/imgs/eco-logo/logo-square.png' }} />
      </div>
      <div className="flex-1 space-y-3 text-center md:text-left">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{tLocal('authorProfileCardTitle')}</h4>
          <h3 className="text-xl font-bold text-neutral-900">{tLocal('expertTitle')}</h3>
          <p className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full inline-block">{tLocal('expertSubtitle')}</p>
        </div>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">{tLocal('expertBio')}</p>
        <div className="pt-2">
          <button 
            onClick={openCalendly}
            className="text-xs font-bold text-primary-700 hover:text-primary-800 underline underline-offset-4 flex items-center gap-1 mx-auto md:mx-0"
          >
            <span>{tLocal('auditLinkText')}</span> &rarr;
          </button>
        </div>
      </div>
    </div>
  )

  if (isPouchDomain) {
    const formattedFaqs = faqs.map(f => ({ q: f.question, a: f.answer }))
    const pouchSections = sections.map(s => ({
      id: s.id,
      title: s.title,
      icon: s.icon,
      content: s.content
    }))

    return (
      <>
        <BlogArticleTemplate
          title={t(`${p}.title`)}
          metaDescription={t(`${p}.description`)}
          canonicalUrl="https://pouch.eco/materials/compostable-bar-packaging"
          keywords={t(`${p}.keywords`)}
          heroTitle={
            <div className="leading-tight">
              Industrial Compostable<br />
              <span className="text-[#10b981]">Bar Wrappers</span><br />
              Material Guide
            </div>
          }
          heroSubtitle={t(`${p}.heroSubtitle`)}
          heroImage="/imgs/knowledge/compostable-bar-packaging-hero.jpg"
          heroImageAlt="POUCH.ECO industrial compostable bar packaging wrapper mockups"
          categoryTag="ECO_MATERIALS"
          categoryColor="#10b981"
          readTime={t(`${p}.heroReadTime`)}
          sections={pouchSections}
          faqSections={formattedFaqs}
          ctaTitle={t(`${p}.ctaTitle`)}
          ctaDescription={t(`${p}.ctaDescription`)}
          calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
          achievePackLink="https://achievepack.com/materials/compostable-bar-packaging"
          achievePackText="Switch to B2B Bulk Sourcing"
          showTableOfContents={true}
          relatedArticles={[
            { title: 'Home Compostable Materials Guide', url: '/materials/home-compostable', image: '/imgs/illustrated/a_compostable_v3_9254998.webp' },
            { title: 'Industrial Compostable Specifications', url: '/materials/industrial-compostable', image: '/imgs/knowledge/compostable-certification-pain-points.jpg' }
          ]}
        />
        {galleryEnlarged && (
          <div 
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
            onClick={() => setGalleryEnlarged(null)}
          >
            <button onClick={() => setGalleryEnlarged(null)} className="absolute top-6 right-6 text-white hover:text-neutral-300 transition">
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-3xl w-full flex flex-col items-center">
              <img src={galleryEnlarged.src} alt={galleryEnlarged.caption} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" />
              <p className="text-white text-center mt-4 text-sm font-medium leading-relaxed px-6">{galleryEnlarged.caption}</p>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <SEOPageLayout
        heroBgColor="#171717"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={t(`${p}.keywords`)}
        canonicalUrl="https://achievepack.com/materials/compostable-bar-packaging"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        aboveTitle={visualBreadcrumbsAndLabels}
        heroImage="/imgs/knowledge/compostable-bar-packaging-hero.jpg"
        heroImageAlt="Premium industrial compostable energy bar wrappers"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        tables={tables}
        relatedLinks={relatedLinks}
        ctaTitle={t(`${p}.ctaTitle`)}
        ctaDescription={t(`${p}.ctaDescription`)}
        ctaButtonText={t(`${p}.ctaButtonText`)}
      >
        {/* Render Author EEAT details inside children slot */}
        <EEATAuthorProfileCard />
      </SEOPageLayout>

      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-6 right-6 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-3xl w-full flex flex-col items-center">
            <img src={galleryEnlarged.src} alt={galleryEnlarged.caption} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" />
            <p className="text-white text-center mt-4 text-sm font-medium leading-relaxed px-6">{galleryEnlarged.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CompostableBarPackagingPage
