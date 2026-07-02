import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Droplets, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

const localTranslations: Record<string, Record<string, string>> = {
  en: {
    probTitle: "5 Common Spout Pouch Problems (And Solutions)",
    prob1Title: "1. Spout Leakage",
    prob1Desc: "Poor sealing around the spout causing liquid leaks.",
    prob1Sol: "Ultrasonic welding and multi-layer structural reinforcement around the spout.",
    prob2Title: "2. Poor Barrier Properties",
    prob2Desc: "Oxygen and moisture permeation ruining product quality.",
    prob2Sol: "Using AL (Aluminum) or EVOH high-barrier films to prevent permeation.",
    prob3Title: "3. Bursting Under Pressure",
    prob3Desc: "Pouches bursting during transportation or dropping.",
    prob3Sol: "Drop-test certified nylon (NY) laminated structures for enhanced burst strength.",
    prob4Title: "4. Difficult to Pour Completely",
    prob4Desc: "Residual product left inside due to poor structural design.",
    prob4Sol: "Ergonomic directional spout placement and optimized bottom gusset design.",
    prob5Title: "5. Spout Detachment During Transit",
    prob5Desc: "Spout separates from the pouch due to mechanical stress.",
    prob5Sol: "High-temperature heat sealing with specialized spout molds tailored to the spout flange."
  },
  es: {
    probTitle: "5 problemas comunes de las bolsas con boquilla (y soluciones)",
    prob1Title: "1. Fugas en la boquilla",
    prob1Desc: "Mal sellado alrededor de la boquilla que causa fugas de líquido.",
    prob1Sol: "Soldadura ultrasónica y refuerzo estructural multicapa alrededor de la boquilla.",
    prob2Title: "2. Pobres propiedades de barrera",
    prob2Desc: "Permeabilidad al oxígeno y la humedad que arruina la calidad del producto.",
    prob2Sol: "Uso de películas de alta barrera AL (Aluminio) o EVOH para evitar la permeación.",
    prob3Title: "3. Estallido bajo presión",
    prob3Desc: "Bolsas que estallan durante el transporte o al caer.",
    prob3Sol: "Estructuras laminadas de nailon (NY) certificadas por pruebas de caída para mejorar la resistencia al estallido.",
    prob4Title: "4. Difícil de vaciar completamente",
    prob4Desc: "Producto residual en el interior debido a un diseño estructural deficiente.",
    prob4Sol: "Colocación ergonómica y direccional de la boquilla y diseño optimizado del fuelle inferior.",
    prob5Title: "5. Desprendimiento de la boquilla durante el tránsito",
    prob5Desc: "La boquilla se separa de la bolsa debido al estrés mecánico.",
    prob5Sol: "Sellado térmico a alta temperatura con moldes de boquilla especializados adaptados a la brida de la boquilla."
  },
  fr: {
    probTitle: "5 problèmes courants des sachets à bec (et solutions)",
    prob1Title: "1. Fuite du bec",
    prob1Desc: "Mauvaise étanchéité autour du bec provoquant des fuites de liquide.",
    prob1Sol: "Soudage par ultrasons et renforcement structurel multicouche autour du bec.",
    prob2Title: "2. Mauvaises propriétés de barrière",
    prob2Desc: "Perméation de l'oxygène et de l'humidité ruinant la qualité du produit.",
    prob2Sol: "Utilisation de films à haute barrière AL (Aluminium) ou EVOH pour empêcher la perméation.",
    prob3Title: "3. Éclatement sous pression",
    prob3Desc: "Éclatement des sachets pendant le transport ou la chute.",
    prob3Sol: "Structures stratifiées en nylon (NY) certifiées par test de chute pour une meilleure résistance à l'éclatement.",
    prob4Title: "4. Difficile à vider complètement",
    prob4Desc: "Produit résiduel laissé à l'intérieur en raison d'une mauvaise conception structurelle.",
    prob4Sol: "Placement ergonomique du bec directionnel et conception optimisée du soufflet inférieur.",
    prob5Title: "5. Détachement du bec pendant le transport",
    prob5Desc: "Le bec se sépare du sachet en raison de contraintes mécaniques.",
    prob5Sol: "Thermoscellage à haute température avec des moules de bec spécialisés adaptés à la bride du bec."
  },
  'zh-TW': {
    probTitle: "5 個常見的吸嘴袋問題（及解決方案）",
    prob1Title: "1. 吸嘴漏液",
    prob1Desc: "吸嘴周圍密封不良導致液體洩漏。",
    prob1Sol: "吸嘴周圍採用超聲波焊接和多層結構加固。",
    prob2Title: "2. 阻隔性差",
    prob2Desc: "氧氣和水分滲透破壞產品質量。",
    prob2Sol: "使用 AL（鋁箔）或 EVOH 高阻隔薄膜防止滲透。",
    prob3Title: "3. 承壓破裂",
    prob3Desc: "運輸或跌落過程中袋子破裂。",
    prob3Sol: "通過跌落測試認證的尼龍（NY）複合結構，增強抗破裂強度。",
    prob4Title: "4. 難以完全倒出",
    prob4Desc: "由於結構設計不佳，導致內部殘留產品。",
    prob4Sol: "符合人體工學的定向吸嘴位置和優化的底部折邊設計。",
    prob5Title: "5. 運輸中吸嘴脫落",
    prob5Desc: "由於機械應力，吸嘴與袋子分離。",
    prob5Sol: "使用針對吸嘴法蘭定制的專用吸嘴模具進行高溫熱封。"
  }
}

export default function PouchSpoutPouchesPage() {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchSpoutPouches'
  const currentLang = i18n.language || 'en'
  const tLocal = localTranslations[currentLang] || localTranslations.en

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t(`${p}.title`)
  const description = t(`${p}.description`)

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#00FFFF] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroClass`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitlePour`)}<br/>
                {t(`${p}.heroTitleStore`)}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleFlow`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t(`${p}.heroBullet1`)}<br/>
                &gt; {t(`${p}.heroBullet2`)}<br/>
                &gt; {t(`${p}.heroBullet3`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroBtnExplore`)}</NeoButton>
                <NeoButton variant="secondary" to="/tech-specs">{t(`${p}.heroBtnDownload`)}</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]">
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/spouted-pouch.glb"
                tilt={{x: 0, y: 0}}
                scrollPercent={0}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card1Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card1Desc`)}
            </p>
            <NeoBadge color="bg-[#D4FF00]">{t(`${p}.card1Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card2Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card2Desc`)}
            </p>
            <NeoBadge color="bg-[#00FFFF]">{t(`${p}.card2Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#00FFFF]">
            <Droplets className="w-12 h-12 mb-4 text-[#FF00FF]" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card3Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card3Desc`)}
            </p>
            <NeoBadge color="bg-white">{t(`${p}.card3Badge`)}</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white text-black border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-50 overflow-hidden">
                <img 
                  src="/imgs/knowledge/spout-pouch-pain-points.jpg" 
                  alt="Spout Pouch Engineering" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-black text-4xl md:text-5xl uppercase leading-tight">
                {tLocal.probTitle}
              </h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-bold text-xl flex items-center gap-2 mb-2">
                      <AlertTriangle className="text-[#FF00FF] w-6 h-6" />
                      {tLocal[`prob${num}Title`]}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-sm text-gray-700 mb-2">
                      <span className="font-bold text-black">Problem:</span> {tLocal[`prob${num}Desc`]}
                    </p>
                    <p className="font-['JetBrains_Mono'] text-sm text-green-700">
                      <span className="font-bold text-black">Solution:</span> {tLocal[`prob${num}Sol`]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00FFFF] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.ctaTitle`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtnConsult`)}</NeoButton>
            <NeoButton variant="dark" to="/sample">{t(`${p}.ctaBtnPrice`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
