import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { Leaf, Recycle, Heart, ArrowRight, ShieldAlert, Droplets, Thermometer, Hammer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'

// Reusing Neo-components for consistency
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

const localTranslations = {
  en: {
    sectionTitle: "5 Common Pouch Materials Problems (And Solutions)",
    p1Title: "Barrier Property Failures",
    p1Desc: "Inadequate oxygen and moisture barriers cause premature product spoilage.",
    p1Sol: "Multi-layer laminations (e.g., AL/EVOH) to ensure maximum protection.",
    p2Title: "Delamination during Retort/Heat",
    p2Desc: "Layers separating when exposed to high heat or retort sterilization.",
    p2Sol: "High-temperature resistant adhesives and specialized retort-grade cast polypropylene (CPP).",
    p3Title: "Poor Seal Strength / Leaks",
    p3Desc: "Weak seals leading to leaks during transport or storage.",
    p3Sol: "Optimized sealant layers (like LLDPE) and adjusting seal temperature/pressure settings.",
    p4Title: "Sustainability vs. Performance",
    p4Desc: "Finding eco-friendly materials that don't compromise barrier properties.",
    p4Sol: "Using Mono-material structures (MDO-PE/PE) or advanced certified compostable laminates.",
    p5Title: "Puncture Resistance",
    p5Desc: "Punctures from sharp contents (e.g., pet food kibble, bones).",
    p5Sol: "Incorporating BOPA (Nylon) or thick PET layers to enhance mechanical strength."
  },
  es: {
    sectionTitle: "5 Problemas Comunes de Materiales para Bolsas (Y Soluciones)",
    p1Title: "Fallos en la Propiedad de Barrera",
    p1Desc: "Las barreras inadecuadas contra el oxígeno y la humedad provocan el deterioro del producto.",
    p1Sol: "Laminaciones multicapa (ej. AL/EVOH) para garantizar la máxima protección.",
    p2Title: "Delaminación durante la Esterilización",
    p2Desc: "Separación de capas al exponerse a altas temperaturas.",
    p2Sol: "Adhesivos resistentes a altas temperaturas y polipropileno cast (CPP) especial para autoclave.",
    p3Title: "Baja Resistencia del Sello / Fugas",
    p3Desc: "Sellos débiles que provocan fugas durante el transporte.",
    p3Sol: "Capas sellantes optimizadas (como LLDPE) y ajuste de temperatura/presión de sellado.",
    p4Title: "Sostenibilidad vs. Rendimiento",
    p4Desc: "Encontrar materiales ecológicos que no comprometan las propiedades de barrera.",
    p4Sol: "Uso de estructuras monomateriales (MDO-PE/PE) o laminados compostables certificados.",
    p5Title: "Resistencia a Perforaciones",
    p5Desc: "Perforaciones por contenidos punzantes (ej. comida para mascotas).",
    p5Sol: "Incorporar BOPA (Nylon) o capas gruesas de PET para mejorar la resistencia mecánica."
  },
  fr: {
    sectionTitle: "5 Problèmes Courants des Matériaux de Sachets (Et Solutions)",
    p1Title: "Défaillances des Propriétés Barrières",
    p1Desc: "Des barrières inadéquates à l'oxygène et à l'humidité entraînent la détérioration du produit.",
    p1Sol: "Laminations multicouches (ex: AL/EVOH) pour assurer une protection maximale.",
    p2Title: "Délamination lors de la Stérilisation",
    p2Desc: "Séparation des couches lors de l'exposition à une forte chaleur.",
    p2Sol: "Adhésifs résistant aux hautes températures et polypropylène coulé (CPP) spécial autoclave.",
    p3Title: "Faible Résistance des Scellés / Fuites",
    p3Desc: "Scellés faibles entraînant des fuites lors du transport.",
    p3Sol: "Couches de scellage optimisées (comme le LLDPE) et ajustement de la température/pression.",
    p4Title: "Durabilité vs. Performance",
    p4Desc: "Trouver des matériaux écologiques qui ne compromettent pas les propriétés barrières.",
    p4Sol: "Utilisation de structures mono-matériaux (MDO-PE/PE) ou de stratifiés compostables certifiés.",
    p5Title: "Résistance à la Perforation",
    p5Desc: "Perforations par des contenus tranchants.",
    p5Sol: "Intégration de BOPA (Nylon) ou de couches épaisses de PET pour renforcer la résistance mécanique."
  },
  'zh-TW': {
    sectionTitle: "軟包裝材料的 5 個常見問題（與解決方案）",
    p1Title: "阻隔性能失效",
    p1Desc: "氧氣和水分阻隔不足導致產品提前變質。",
    p1Sol: "多層複合材料 (如 AL/EVOH) 以確保最大程度的保護。",
    p2Title: "高溫殺菌過程中的脫層",
    p2Desc: "在高溫或高壓殺菌下，材料層之間發生分離。",
    p2Sol: "使用耐高溫黏合劑和專用的耐高溫流延聚丙烯 (CPP)。",
    p3Title: "封口強度差 / 洩漏",
    p3Desc: "封口不牢導致運輸或儲存過程中出現洩漏。",
    p3Sol: "優化熱封層 (如 LLDPE) 並調整封口溫度和壓力設定。",
    p4Title: "永續性與性能的取捨",
    p4Desc: "尋找既環保又不影響阻隔性能的材料。",
    p4Sol: "使用單一材質結構 (MDO-PE/PE) 或先進的認證可堆肥複合材料。",
    p5Title: "抗穿刺性不足",
    p5Desc: "內容物尖銳 (如寵物食品) 造成的穿刺。",
    p5Sol: "加入 BOPA (尼龍) 或厚 PET 層以增強機械強度。"
  }
}

export default function PouchMaterialsPage() {
  const { t, i18n } = useTranslation()
  const loc = (localTranslations[i18n.language as keyof typeof localTranslations] || localTranslations.en) as typeof localTranslations.en

  const MATERIALS = [
    {
      id: 'compostable',
      name: t('pouchMaterialsPage.materials.compostable.name'),
      description: t('pouchMaterialsPage.materials.compostable.description'),
      pros: [
        t('pouchMaterialsPage.materials.compostable.pros.0'),
        t('pouchMaterialsPage.materials.compostable.pros.1'),
        t('pouchMaterialsPage.materials.compostable.pros.2'),
        t('pouchMaterialsPage.materials.compostable.pros.3'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.compostable.cons.0'),
        t('pouchMaterialsPage.materials.compostable.cons.1'),
      ],
      icon: Leaf,
      color: 'bg-[#D4FF00]', // Yellow
    },
    {
      id: 'recyclable',
      name: t('pouchMaterialsPage.materials.recyclable.name'),
      description: t('pouchMaterialsPage.materials.recyclable.description'),
      pros: [
        t('pouchMaterialsPage.materials.recyclable.pros.0'),
        t('pouchMaterialsPage.materials.recyclable.pros.1'),
        t('pouchMaterialsPage.materials.recyclable.pros.2'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.recyclable.cons.0'),
        t('pouchMaterialsPage.materials.recyclable.cons.1'),
      ],
      icon: Recycle,
      color: 'bg-[#00FFFF]', // Cyan
    },
    {
      id: 'pcr',
      name: t('pouchMaterialsPage.materials.pcr.name'),
      description: t('pouchMaterialsPage.materials.pcr.description'),
      pros: [
        t('pouchMaterialsPage.materials.pcr.pros.0'),
        t('pouchMaterialsPage.materials.pcr.pros.1'),
        t('pouchMaterialsPage.materials.pcr.pros.2'),
        t('pouchMaterialsPage.materials.pcr.pros.3'),
      ],
      cons: [
        t('pouchMaterialsPage.materials.pcr.cons.0'),
        t('pouchMaterialsPage.materials.pcr.cons.1'),
      ],
      icon: Heart,
      color: 'bg-[#FF00FF]', // Magenta
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchMaterialsPage.meta.title')}
        description={t('pouchMaterialsPage.meta.description')}
      />

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-materials"
          >
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform rotate-2">
            {t('pouchMaterialsPage.hero.badge')}
          </div>
          <h1 className="font-black text-5xl md:text-8xl uppercase mb-8 leading-none">
            {t('pouchMaterialsPage.hero.titleLine1')}<br />{t('pouchMaterialsPage.hero.titleLine2')}
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            {t('pouchMaterialsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Material Grid */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {MATERIALS.map((material) => (
              <NeoCard key={material.id} className={`${material.color} flex flex-col h-full`}>
                <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <material.icon className="w-8 h-8" />
                </div>
                <h2 className="font-black text-2xl mb-4 uppercase">{material.name}</h2>
                <p className="font-['Space_Grotesk'] mb-6 flex-grow">{material.description}</p>
                
                <div className="font-['JetBrains_Mono'] text-xs space-y-4 border-t-2 border-black pt-4">
                  <div>
                    <span className="font-bold block mb-1">{t('pouchMaterialsPage.labels.pros')}</span>
                    <ul className="list-disc list-inside">
                      {material.pros.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold block mb-1">{t('pouchMaterialsPage.labels.cons')}</span>
                    <ul className="list-disc list-inside text-gray-600">
                      {material.cons.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-12 text-center">{loc.sectionTitle}</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <div className="border-4 border-black p-2 bg-[#F0F0F0] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img src="/imgs/knowledge/pouch-materials-pain-points.jpg" alt={loc.sectionTitle} className="w-full h-auto border-2 border-black" />
              </div>
            </div>
            
            <div className="flex-1 space-y-6 w-full">
              <NeoCard className="bg-white hover:bg-[#D4FF00] transition-colors">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl uppercase mb-2">1. {loc.p1Title}</h3>
                    <p className="font-['Space_Grotesk'] text-gray-700 mb-2">{loc.p1Desc}</p>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold border-l-2 border-black pl-3">{loc.p1Sol}</p>
                  </div>
                </div>
              </NeoCard>

              <NeoCard className="bg-white hover:bg-[#00FFFF] transition-colors">
                <div className="flex items-start gap-4">
                  <Thermometer className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl uppercase mb-2">2. {loc.p2Title}</h3>
                    <p className="font-['Space_Grotesk'] text-gray-700 mb-2">{loc.p2Desc}</p>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold border-l-2 border-black pl-3">{loc.p2Sol}</p>
                  </div>
                </div>
              </NeoCard>

              <NeoCard className="bg-white hover:bg-[#FF00FF] transition-colors">
                <div className="flex items-start gap-4">
                  <Droplets className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl uppercase mb-2">3. {loc.p3Title}</h3>
                    <p className="font-['Space_Grotesk'] text-gray-700 mb-2">{loc.p3Desc}</p>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold border-l-2 border-black pl-3">{loc.p3Sol}</p>
                  </div>
                </div>
              </NeoCard>

              <NeoCard className="bg-white hover:bg-[#D4FF00] transition-colors">
                <div className="flex items-start gap-4">
                  <Recycle className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl uppercase mb-2">4. {loc.p4Title}</h3>
                    <p className="font-['Space_Grotesk'] text-gray-700 mb-2">{loc.p4Desc}</p>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold border-l-2 border-black pl-3">{loc.p4Sol}</p>
                  </div>
                </div>
              </NeoCard>

              <NeoCard className="bg-white hover:bg-[#00FFFF] transition-colors">
                <div className="flex items-start gap-4">
                  <Hammer className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl uppercase mb-2">5. {loc.p5Title}</h3>
                    <p className="font-['Space_Grotesk'] text-gray-700 mb-2">{loc.p5Desc}</p>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold border-l-2 border-black pl-3">{loc.p5Sol}</p>
                  </div>
                </div>
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs CTA */}
      <section className="py-24 bg-black text-[#D4FF00] border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
           <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                 <div className="inline-block bg-[#D4FF00] text-black px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
                    {t('pouchMaterialsPage.techSpecs.badge')}
                 </div>
                 <h2 className="font-black text-4xl md:text-6xl uppercase mb-6 leading-none">
                    {t('pouchMaterialsPage.techSpecs.titleLine1')}<br/>{t('pouchMaterialsPage.techSpecs.titleLine2')}
                 </h2>
                 <p className="font-['Space_Grotesk'] text-xl mb-8 text-white max-w-xl">
                    {t('pouchMaterialsPage.techSpecs.description')}
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link to="/tech-specs">
                      <NeoButton variant="primary" className="inline-flex items-center justify-center w-full">
                         {t('pouchMaterialsPage.techSpecs.viewAllSpecs')} <ArrowRight className="w-5 h-5 ml-2" />
                      </NeoButton>
                   </Link>
                   <Link to="/barriers/material-properties">
                      <NeoButton variant="dark" className="inline-flex items-center justify-center w-full bg-black text-[#00FFFF] border-[#00FFFF] hover:shadow-[8px_8px_0px_0px_#00FFFF]">
                         {t('pouchMaterialsPage.techSpecs.barrierData')}
                      </NeoButton>
                   </Link>
                 </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="border-4 border-[#D4FF00] p-4 relative rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute -top-6 -left-6 bg-[#00FFFF] border-4 border-black p-4 font-['JetBrains_Mono'] font-bold text-black transform -rotate-6 z-10 shadow-[8px_8px_0px_0px_#D4FF00]">
                       {t('pouchMaterialsPage.techSpecs.downloadBadge')}
                    </div>
                    <img src="/imgs/spec/tech-spec-hero.png" alt={t('pouchMaterialsPage.techSpecs.imgAlt')} className="w-full h-auto border-2 border-[#D4FF00] grayscale hover:grayscale-0 transition-all" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Badges / Certs */}
      <section className="py-24 border-t-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-black text-4xl mb-12 uppercase">{t('pouchMaterialsPage.certifications.title')}</h2>
             <Link to="/company/certificates" className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
               <img src="/imgs/cert/cert-din-home-compost.png" alt={t('pouchMaterialsPage.certifications.dinAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt={t('pouchMaterialsPage.certifications.bpiAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ABA-as5810.png" alt={t('pouchMaterialsPage.certifications.abaAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-pcr-grs.webp" alt={t('pouchMaterialsPage.certifications.grsAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-BioPE.webp" alt={t('pouchMaterialsPage.certifications.biopeAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-fsc.png" alt={t('pouchMaterialsPage.certifications.fscAlt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO9001.webp" alt={t('pouchMaterialsPage.certifications.iso9001Alt')} className="h-24 w-auto object-contain mx-auto" />
               <img src="/imgs/cert/cert-ISO14001-cert.webp" alt={t('pouchMaterialsPage.certifications.iso14001Alt')} className="h-24 w-auto object-contain mx-auto" />
             </Link>
          <div className="mt-12">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
              {t('pouchMaterialsPage.certifications.speakToExpert')}
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
