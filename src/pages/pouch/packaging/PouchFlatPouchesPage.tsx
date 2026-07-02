import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { ThreePouchViewer } from '../../../components/ThreePouchViewer'

const localTranslations = {
  en: {
    title: "5 Common Flat Pouch Problems (And Engineering Solutions)",
    problems: [
      {
        title: "Poor Shelf Visibility & Display",
        desc: "Solution: Integrate custom euro-hole or round peg punches into the top seal, enabling clean hanging displays that maximize retail visibility."
      },
      {
        title: "Difficulty Opening / Tearing",
        desc: "Solution: Implement precision laser-scored tear notches on both sides of the top seal, ensuring a clean, straight tear every time."
      },
      {
        title: "Weak Seal Integrity & Leaks",
        desc: "Solution: Utilize high-barrier multi-layer laminations (e.g., PET/AL/PE) with optimized 10mm hermetic seals to eliminate leaks."
      },
      {
        title: "Static Cling During Filling",
        desc: "Solution: Apply an anti-static coating to the inner PE layer, which speeds up the automated filling process by preventing product from sticking."
      },
      {
        title: "Limited Volume Capacity",
        desc: "Solution: Optimize 3-side seal geometry with high-flexibility films to allow maximal product expansion without stressing the seams."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas Planas (y Soluciones Técnicas)",
    problems: [
      {
        title: "Mala Visibilidad en Estantes",
        desc: "Solución: Integrar perforaciones tipo euro o redondas en el sello superior para permitir una exhibición colgante limpia que maximice la visibilidad."
      },
      {
        title: "Dificultad para Abrir / Rasgar",
        desc: "Solución: Implementar muescas de desgarro marcadas con láser de precisión en ambos lados, asegurando un desgarro limpio y recto cada vez."
      },
      {
        title: "Integridad de Sello Débil y Fugas",
        desc: "Solución: Utilizar laminaciones multicapa de alta barrera (ej. PET/AL/PE) con sellos herméticos optimizados de 10 mm para eliminar fugas."
      },
      {
        title: "Electricidad Estática Durante el Llenado",
        desc: "Solución: Aplicar un recubrimiento antiestático a la capa interna de PE, acelerando el llenado automatizado al evitar que el producto se pegue."
      },
      {
        title: "Capacidad de Volumen Limitada",
        desc: "Solución: Optimizar la geometría de sellado de 3 lados con películas de alta flexibilidad para permitir la máxima expansión del producto sin forzar las uniones."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants des Sachets Plats (et Solutions d'Ingénierie)",
    problems: [
      {
        title: "Mauvaise Visibilité en Rayon",
        desc: "Solution : Intégrer des perforations euro ou rondes dans la soudure supérieure, permettant une présentation suspendue nette qui maximise la visibilité."
      },
      {
        title: "Difficulté d'Ouverture / Déchirure",
        desc: "Solution : Mettre en œuvre des encoches de déchirure découpées au laser avec précision des deux côtés, garantissant une déchirure nette et droite à chaque fois."
      },
      {
        title: "Faible Intégrité de Soudure et Fuites",
        desc: "Solution : Utiliser des laminations multicouches à haute barrière avec des soudures hermétiques optimisées de 10 mm pour éliminer les fuites."
      },
      {
        title: "Électricité Statique Lors du Remplissage",
        desc: "Solution : Appliquer un revêtement antistatique sur la couche interne en PE, ce qui accélère le processus de remplissage automatisé en empêchant le produit de coller."
      },
      {
        title: "Capacité de Volume Limitée",
        desc: "Solution : Optimiser la géométrie de soudure sur 3 côtés avec des films à haute flexibilité pour permettre une expansion maximale du produit sans contraindre les coutures."
      }
    ]
  },
  'zh-TW': {
    title: "平底袋的 5 個常見問題 (與工程解決方案)",
    problems: [
      {
        title: "貨架展示能見度差",
        desc: "解決方案：在頂部封口處整合圓孔或飛機孔打孔設計，實現整潔的懸掛展示，最大化零售能見度。"
      },
      {
        title: "難以撕開 / 開啟",
        desc: "解決方案：在頂部兩側採用精密雷射打線易撕口，確保每次都能直線且乾淨地撕開。"
      },
      {
        title: "封口強度不足與漏氣",
        desc: "解決方案：採用高阻隔多層複合材料 (如 PET/AL/PE) 並結合最佳化的 10mm 氣密熱封，杜絕洩漏。"
      },
      {
        title: "充填過程中的靜電吸附",
        desc: "解決方案：在內層 PE 應用抗靜電塗層，防止產品沾黏，從而加快自動化充填流程的速度。"
      },
      {
        title: "容量空間受限",
        desc: "解決方案：使用高柔韌性薄膜最佳化三邊封幾何結構，使產品能達到最大膨脹空間而不會拉扯接縫。"
      }
    ]
  }
};


export default function PouchFlatPouchesPage() {
  const { t, i18n } = useTranslation()
  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations
  const trans = localTranslations[currentLang] || localTranslations.en
  const p = 'seoPages.pages.pouchFlatPouches'

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
              <div className="inline-block bg-[#FF00FF] text-white border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">{t(`${p}.heroClass`)}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                {t(`${p}.heroTitleFlat`)}<br/>
                {t(`${p}.heroTitleFast`)}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t(`${p}.heroTitleSleek`)}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; {t(`${p}.heroBullet1`)}<br/>
                &gt; {t(`${p}.heroBullet2`)}<br/>
                &gt; {t(`${p}.heroBullet3`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.heroBtnExplore`)}</NeoButton>
                <NeoButton variant="secondary">{t(`${p}.heroBtnDownload`)}</NeoButton>
              </div>
            </div>

            {/* 3D Viewer Card */}
            <div className="relative w-full h-[500px]">
              <ThreePouchViewer
                modelUrl="/3d/3d-pouch/3-side-seal.glb"
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

          <NeoCard color="bg-[#00FFFF]">
            <Shield className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">{t(`${p}.card2Title`)}</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              {t(`${p}.card2Desc`)}
            </p>
            <NeoBadge color="bg-[#FF00FF]">{t(`${p}.card2Badge`)}</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Award className="w-12 h-12 mb-4 text-[#FF00FF]" />
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-black text-4xl md:text-5xl uppercase mb-8">
                {trans.title}
              </h2>
              <div className="space-y-6">
                {trans.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#D4FF00] hover:bg-[#FF00FF] hover:text-white transition-colors group">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-1">{prob.title}</h4>
                      <p className="font-['JetBrains_Mono'] text-sm leading-relaxed">{prob.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <img 
                  src="/imgs/knowledge/flat-pouches-pain-points.jpg" 
                  alt="Flat Pouches Problems and Solutions"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FF00FF] border-t-4 border-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-black text-5xl md:text-7xl uppercase">{t(`${p}.ctaTitle`)}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl">
            {t(`${p}.ctaDesc`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.ctaBtnConsult`)}</NeoButton>
            <NeoButton variant="secondary" className="!text-black">{t(`${p}.ctaBtnPrice`)}</NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
