import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Leaf, Package, CheckCircle, Award, Zap, Globe, Factory, Recycle, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Target, Shield, MessageCircle, Thermometer, Wind, Droplets, Microscope, Beaker, Layers } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations: Record<string, any> = {
  en: {
    problemsSectionTitle: "5 Common Compostable Certification Problems (And Solutions)",
    p1Title: "1. Long Testing Durations",
    p1Desc: "Industrial composting certification can take up to 12 months. Solution: Leverage pre-certified materials (e.g., NatureFlex) to bypass initial material testing.",
    p2Title: "2. High Certification Costs",
    p2Desc: "Small brands struggle with thousands of dollars in fees. Solution: Partner with a manufacturer holding umbrella certifications to extend to your brand.",
    p3Title: "3. Home vs. Industrial Confusion",
    p3Desc: "Mislabeling can lead to greenwashing accusations. Solution: Ensure strict adherence to BPI (Industrial) or OK Compost Home standards with distinct on-pack messaging.",
    p4Title: "4. Supply Chain Traceability",
    p4Desc: "Difficulty proving the organic origin of biopolymers. Solution: Implement strict material audits and utilize supplier transparency tracking.",
    p5Title: "5. Inks & Adhesives Compliance",
    p5Desc: "Standard inks can ruin a compostable structure. Solution: Utilize heavy-metal-free, water-based inks and compostable-certified adhesives.",
  },
  es: {
    problemsSectionTitle: "5 Problemas Comunes de Certificación de Compostaje (Y Soluciones)",
    p1Title: "1. Largos períodos de prueba",
    p1Desc: "La certificación de compostaje industrial puede tardar hasta 12 meses. Solución: Aprovechar materiales precertificados (ej. NatureFlex) para evitar pruebas iniciales.",
    p2Title: "2. Altos costos de certificación",
    p2Desc: "Las pequeñas marcas luchan con tarifas de miles de dólares. Solución: Asociarse con un fabricante con certificaciones paraguas para extenderlas a su marca.",
    p3Title: "3. Confusión entre compostaje doméstico e industrial",
    p3Desc: "El mal etiquetado puede llevar a acusaciones de lavado verde (greenwashing). Solución: Garantizar el cumplimiento estricto de BPI o OK Compost Home con mensajes claros en el empaque.",
    p4Title: "4. Trazabilidad de la cadena de suministro",
    p4Desc: "Dificultad para demostrar el origen orgánico de los biopolímeros. Solución: Implementar auditorías estrictas de materiales y usar seguimiento de transparencia de proveedores.",
    p5Title: "5. Cumplimiento de tintas y adhesivos",
    p5Desc: "Las tintas estándar pueden arruinar una estructura compostable. Solución: Utilizar tintas a base de agua sin metales pesados y adhesivos certificados compostables.",
  },
  fr: {
    problemsSectionTitle: "5 Problèmes Courants de Certification de Compostage (Et Solutions)",
    p1Title: "1. Longues durées de test",
    p1Desc: "La certification de compostage industriel peut prendre jusqu'à 12 mois. Solution : Utiliser des matériaux pré-certifiés pour éviter les tests initiaux.",
    p2Title: "2. Coûts de certification élevés",
    p2Desc: "Les petites marques luttent contre des frais de plusieurs milliers de dollars. Solution : S'associer à un fabricant détenant des certifications parapluie.",
    p3Title: "3. Confusion entre compostage domestique et industriel",
    p3Desc: "Un mauvais étiquetage peut mener à des accusations d'écoblanchiment. Solution : Assurer un respect strict des normes BPI ou OK Compost Home avec des messages clairs.",
    p4Title: "4. Traçabilité de la chaîne d'approvisionnement",
    p4Desc: "Difficulté à prouver l'origine organique des biopolymères. Solution : Mettre en œuvre des audits de matériaux stricts.",
    p5Title: "5. Conformité des encres et adhésifs",
    p5Desc: "Les encres standards peuvent ruiner une structure compostable. Solution : Utiliser des encres à l'eau sans métaux lourds et des adhésifs certifiés.",
  },
  'zh-TW': {
    problemsSectionTitle: "5 個常見的可堆肥認證問題（及解決方案）",
    p1Title: "1. 測試時間過長",
    p1Desc: "工業堆肥認證可能需要長達12個月。解決方案：利用預先認證的材料（例如NatureFlex）來跳過初步測試。",
    p2Title: "2. 認證成本高昂",
    p2Desc: "小品牌難以負擔數千美元的費用。解決方案：與擁有傘形認證的製造商合作，將認證延伸至您的品牌。",
    p3Title: "3. 家庭與工業堆肥的混淆",
    p3Desc: "標籤錯誤可能導致漂綠指控。解決方案：嚴格遵守BPI（工業）或OK Compost Home標準，並在包裝上提供清晰的訊息。",
    p4Title: "4. 供應鏈可追溯性",
    p4Desc: "難以證明生物聚合物的有機來源。解決方案：實施嚴格的材料審計並利用供應商透明度追蹤。",
    p5Title: "5. 油墨和黏合劑的合規性",
    p5Desc: "標準油墨會破壞可堆肥結構。解決方案：使用不含重金屬的水性油墨和經過可堆肥認證的黏合劑。",
  }
}

const PouchCompostableCertificationFAQPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'pouchCompostableCertificationFAQPage'
  const baseUrl = getBaseUrl()
  
  const currentLang = i18n.language || 'en'
  const tLocal = translations[currentLang] || translations['en']
  
  const CERT_METRICS = [
    { label: t(`${p}.metrics.biodegradation.label`), value: t(`${p}.metrics.biodegradation.value`), unit: t(`${p}.metrics.biodegradation.unit`), desc: t(`${p}.metrics.biodegradation.desc`) },
    { label: t(`${p}.metrics.disintegration.label`), value: t(`${p}.metrics.disintegration.value`), unit: t(`${p}.metrics.disintegration.unit`), desc: t(`${p}.metrics.disintegration.desc`) },
    { label: t(`${p}.metrics.ecotoxicity.label`), value: t(`${p}.metrics.ecotoxicity.value`), unit: t(`${p}.metrics.ecotoxicity.unit`), desc: t(`${p}.metrics.ecotoxicity.desc`) },
    { label: t(`${p}.metrics.standard.label`), value: t(`${p}.metrics.standard.value`), unit: t(`${p}.metrics.standard.unit`), desc: t(`${p}.metrics.standard.desc`) }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/compostable-certification-faq`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <NeoBadge color="magenta">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none uppercase italic">
                {t(`${p}.hero.titlePart1`)}<br/>
                {t(`${p}.hero.titlePart2`)}<br/>
                <span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
              </h1>
              <p className="mt-8 text-xl font-bold font-['JetBrains_Mono'] text-gray-800 bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                {t(`${p}.hero.subtitle`)}
              </p>
              <div className="flex flex-wrap gap-6 mt-12">
                <NeoButton variant="primary" to="/products">{t(`${p}.hero.btnBrowse`)}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t(`${p}.hero.btnRequest`)}</NeoButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/illustrated/a_home_compostable_card_v1_2166648.webp" 
                alt={t(`${p}.hero.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering: The Testing Protocol */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/composting/plastic-free/a_lifecycle_journey_compostable_1656229.webp" 
                alt={t(`${p}.engineering.imageAlt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="blue">{t(`${p}.engineering.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.engineering.titlePart1`)}<br/>
                {t(`${p}.engineering.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.engineering.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {CERT_METRICS.map((p, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-700">{p.label}</h4>
                    <p className="text-xl font-black">{p.value} <span className="text-[10px] opacity-60 font-normal">{p.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical: Global Standards Matrix */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.tech.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.tech.titlePart1`)}<br/>
            {t(`${p}.tech.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item1Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item2Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item3Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.tech.item4Title`)}</h3>
              <p className="text-lg font-['JetBrains_Mono'] opacity-70 leading-relaxed">
                {t(`${p}.tech.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="blue">{t(`${p}.science.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.science.titlePart1`)}<br/>
            {t(`${p}.science.titlePart2`)}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <Microscope className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item1Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item1Desc`)}</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(212,255,0,1)]">
              <Beaker className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item2Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item2Desc`)}</p>
            </NeoCard>
            <NeoCard>
              <Droplets className="w-12 h-12 mb-6 mx-auto" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.science.item3Title`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70">{t(`${p}.science.item3Desc`)}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* 5 Common Problems */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="blue">Problem Solving</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12">
            {tLocal.problemsSectionTitle}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { title: tLocal.p1Title, desc: tLocal.p1Desc, icon: Thermometer },
                { title: tLocal.p2Title, desc: tLocal.p2Desc, icon: Target },
                { title: tLocal.p3Title, desc: tLocal.p3Desc, icon: Globe },
                { title: tLocal.p4Title, desc: tLocal.p4Desc, icon: BarChart3 },
                { title: tLocal.p5Title, desc: tLocal.p5Desc, icon: Beaker },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="bg-emerald-100 p-3 rounded-full border-2 border-black flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl uppercase mb-2">{item.title}</h4>
                    <p className="font-['JetBrains_Mono'] text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/knowledge/compostable-certification-pain-points.jpg" 
                alt={tLocal.problemsSectionTitle} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Certification Intelligence */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="magenta">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}<br/>
            {t(`${p}.faq.titlePart2`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1.q`), a: t(`${p}.faq.q1.a`) },
              { q: t(`${p}.faq.q2.q`), a: t(`${p}.faq.q2.a`) },
              { q: t(`${p}.faq.q3.q`), a: t(`${p}.faq.q3.a`) },
              { q: t(`${p}.faq.q4.q`), a: t(`${p}.faq.q4.a`) }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <h4 className="font-black text-xl uppercase mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs">Q</span>
                  {faq.q}
                </h4>
                <p className="font-['JetBrains_Mono'] text-gray-600 pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <NeoBadge color="lime">{t(`${p}.cta.badge`)}</NeoBadge>
          <h2 className="font-black text-6xl md:text-9xl uppercase leading-none italic">
            {t(`${p}.cta.titlePart1`)}<br/>
            {t(`${p}.cta.titlePart2`)}
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t(`${p}.cta.description`)}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-emerald-900">{t(`${p}.cta.btnReview`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnEngineer`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCompostableCertificationFAQPage
