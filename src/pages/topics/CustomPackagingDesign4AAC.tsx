import React from 'react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { getDomain } from '../../utils/domain'
import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle, Shield, Droplet, Box } from 'lucide-react'

const localTranslations = {
  en: {
    title: "Custom Packaging Design 4AAC",
    desc: "Discover Custom Packaging Design 4AAC with premium eco-friendly materials and custom sizing.",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed because the seal failed. You didn't spend months perfecting your recipe just to lose customers over cheap, unreliable packaging...",
    painPointsTitle: "5 Pain Points & Solutions",
    engineerTitle: "🔬 From Ryan Wong's Engineering Notebook",
    engineerLog: "Real-world testing has shown that OTR and MVTR levels can make or break a product shelf life. In my 14 years in packaging design, ensuring a less than 0.1% failure rate requires strict adherence to VFFS standards.",
    solutions: [
      { p: "Seal Integrity Failure", s: "Advanced heat seal testing parameters ensure leak-proof functionality up to 90 PSI." },
      { p: "Moisture Penetration", s: "Using multi-layered metallized films drops MVTR to &lt; 0.1g/m²/day." },
      { p: "Oxygen Degradation", s: "EVOH integration provides extreme oxygen barriers under &lt; 0.1cc/m²/day." },
      { p: "Puncture Vulnerability", s: "Thickened nylon layers provide superior puncture resistance during transit." },
      { p: "Branding Disconnect", s: "High-definition digital printing ensures 100% PMS color matching." }
    ]
  },
  es: {
    title: "Custom Packaging Design 4AAC (ES)",
    desc: "Descubra Custom Packaging Design 4AAC con materiales ecológicos premium.",
    hook: "Conocemos la sensación de frustración cuando el embalaje falla...",
    painPointsTitle: "5 Puntos de Dolor y Soluciones",
    engineerTitle: "🔬 Del Cuaderno de Ingeniería de Ryan Wong",
    engineerLog: "Las pruebas en el mundo real demuestran que los niveles de OTR y MVTR son críticos...",
    solutions: [
      { p: "Fallo de Integridad de Sello", s: "Los parámetros avanzados aseguran una funcionalidad a prueba de fugas." },
      { p: "Penetración de Humedad", s: "El uso de películas reduce MVTR a &lt; 0.1g/m²/día." },
      { p: "Degradación de Oxígeno", s: "La integración EVOH proporciona barreras de oxígeno extremas." },
      { p: "Vulnerabilidad a Pinchazos", s: "Las capas de nylon engrosadas proporcionan una resistencia superior." },
      { p: "Desconexión de Marca", s: "La impresión digital de alta definición garantiza un 100% de coincidencia." }
    ]
  },
  fr: {
    title: "Custom Packaging Design 4AAC (FR)",
    desc: "Découvrez Custom Packaging Design 4AAC avec des matériaux écologiques premium.",
    hook: "Nous connaissons le sentiment de frustration lorsque l'emballage échoue...",
    painPointsTitle: "5 Points de Douleur et Solutions",
    engineerTitle: "🔬 Du Carnet d'Ingénierie de Ryan Wong",
    engineerLog: "Les tests en monde réel montrent que les niveaux OTR et MVTR sont critiques...",
    solutions: [
      { p: "Défaillance de l'Intégrité", s: "Les paramètres avancés garantissent une fonctionnalité étanche." },
      { p: "Pénétration de l'Humidité", s: "L'utilisation de films réduit le MVTR à &lt; 0.1g/m²/jour." },
      { p: "Dégradation de l'Oxygène", s: "L'intégration EVOH fournit des barrières d'oxygène extrêmes." },
      { p: "Vulnérabilité aux Perforations", s: "Les couches de nylon épaissies offrent une résistance supérieure." },
      { p: "Déconnexion de la Marque", s: "L'impression numérique haute définition garantit une correspondance à 100%." }
    ]
  },
  'zh-tw': {
    title: "Custom Packaging Design 4AAC (ZH)",
    desc: "探索 Custom Packaging Design 4AAC 結合優質環保材料與客製化尺寸。",
    hook: "我們知道當包裝失敗時的挫折感...",
    painPointsTitle: "5個痛點與解決方案",
    engineerTitle: "🔬 來自 Ryan Wong 的工程筆記",
    engineerLog: "現實世界的測試表明，OTR 和 MVTR 水平非常關鍵...",
    solutions: [
      { p: "密封完整性失效", s: "先進的熱封參數確保防漏功能。" },
      { p: "水分滲透", s: "使用多層金屬化薄膜將 MVTR 降低至 &lt; 0.1g/m²/day。" },
      { p: "氧氣降解", s: "EVOH 整合提供極端的氧氣屏障。" },
      { p: "抗穿刺脆弱性", s: "加厚的尼龍層在運輸過程中提供卓越的抗穿刺性。" },
      { p: "品牌脫節", s: "高解析度數位印刷確保 100% PMS 色彩匹配。" }
    ]
  }
}

export default function CustomPackagingDesign4AAC() {
  const isPouchDomain = getDomain() === 'pouch'
  const lang = (typeof window !== 'undefined' && ['fr', 'es', 'zh-tw'].includes(window.location.pathname.split('/')[1])) ? window.location.pathname.split('/')[1] : 'en'
  const t = localTranslations[lang as keyof typeof localTranslations] || localTranslations.en
  
  return (
    <SEOPageLayout
      title={t.title}
      description={t.desc}
      heroImage="/imgs/illustrated/4aac2432-ccfb-47a2-bff2-83b4b4304f63.webp"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{t.hook}</p>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 p-6 rounded-xl mb-12">
          <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2">{t.engineerTitle}</h4>
          <p className="italic text-amber-800 dark:text-amber-300">"{t.engineerLog}" — Ryan Wong, Co-Founder</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t.painPointsTitle}</h2>
        <div className="grid gap-6">
          {t.solutions.map((s, i) => (
            <div key={i} className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">0{i+1}</span>
                <h3 className="font-bold text-lg">{s.p}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">✅ Solution: {s.s}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Related Store Products</h3>
          <div className="flex gap-4 justify-center">
            <Link to="/store/product/stand-up-pouch" className="text-primary-600 hover:underline">Stand Up Pouch</Link>
            <Link to="/store/product/flat-bottom-pouch" className="text-primary-600 hover:underline">Flat Bottom Pouch</Link>
            <Link to="/store/product/spout-pouch" className="text-primary-600 hover:underline">Spout Pouch</Link>
          </div>
        </div>
        
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
             {t.solutions.map((s, i) => (
               <article key={i} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                 <h3 itemProp="name">{s.p}</h3>
                 <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                   <p itemProp="text">{s.s}</p>
                 </div>
               </article>
             ))}
          </section>
        </div>
      </div>
    </SEOPageLayout>
  )
}
