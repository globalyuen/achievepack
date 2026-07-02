import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowLeftRight, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  CheckCircle, 
  FileText, 
  Lock, 
  ShoppingBag, 
  Calendar, 
  ChevronRight, 
  Award,
  Sparkles,
  Zap,
  Info,
  ArrowRight
} from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import { getBaseUrl } from '../../../utils/domain'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    problems: {
      title: "5 Common Custom vs Standard Packaging Problems (And Solutions)",
      items: [
        { q: "1. High MOQs for Custom Packaging", a: "Solution: Start with standard pouches and premium labels to test the market before committing to large print runs." },
        { q: "2. Expensive Setup Costs (Plates)", a: "Solution: Utilize digital printing technology which eliminates the need for expensive printing plates." },
        { q: "3. Poor Brand Differentiation with Standard Pouches", a: "Solution: Apply premium textured labels (like hot foil or spot UV) to elevate the look of standard packaging." },
        { q: "4. Long Lead Times for Custom Runs", a: "Solution: Use standard pouches which are in stock and can be labeled and shipped in a fraction of the time." },
        { q: "5. Managing Multiple SKUs is Expensive", a: "Solution: Use the 'Combined SKU Hack'—print a universal custom pouch and apply variable data labels for each specific product variant." }
      ]
    }
  },
  es: {
    problems: {
      title: "5 Problemas Comunes de Empaques Personalizados vs Estándar (Y Soluciones)",
      items: [
        { q: "1. Altos MOQs para Empaques Personalizados", a: "Solución: Comience con bolsas estándar y etiquetas premium para probar el mercado antes de comprometerse con grandes tiradas de impresión." },
        { q: "2. Costos de Configuración Costosos (Planchas)", a: "Solución: Utilice la tecnología de impresión digital que elimina la necesidad de costosas planchas de impresión." },
        { q: "3. Poca Diferenciación de Marca con Bolsas Estándar", a: "Solución: Aplique etiquetas texturizadas premium (como estampado en caliente o UV puntual) para elevar el aspecto del empaque estándar." },
        { q: "4. Largos Tiempos de Entrega para Tiradas Personalizadas", a: "Solución: Utilice bolsas estándar que estén en stock y puedan etiquetarse y enviarse en una fracción del tiempo." },
        { q: "5. Gestionar Múltiples SKUs es Costoso", a: "Solución: Utilice el 'Truco de SKU Combinado': imprima una bolsa personalizada universal y aplique etiquetas de datos variables para cada variante de producto específico." }
      ]
    }
  },
  fr: {
    problems: {
      title: "5 Problèmes Courants d'Emballages Personnalisés vs Standard (Et Solutions)",
      items: [
        { q: "1. MOQ Élevés pour l'Emballage Personnalisé", a: "Solution : Commencez par des sachets standard et des étiquettes premium pour tester le marché avant de vous engager dans de grands tirages d'impression." },
        { q: "2. Coûts de Configuration Coûteux (Plaques)", a: "Solution : Utilisez la technologie d'impression numérique qui élimine le besoin de plaques d'impression coûteuses." },
        { q: "3. Mauvaise Différenciation de Marque avec les Sachets Standard", a: "Solution : Appliquez des étiquettes texturées premium (comme le marquage à chaud ou le vernis sélectif) pour rehausser l'aspect de l'emballage standard." },
        { q: "4. Délais de Livraison Longs pour les Tirages Personnalisés", a: "Solution : Utilisez des sachets standard qui sont en stock et peuvent être étiquetés et expédiés en une fraction du temps." },
        { q: "5. Gérer Plusieurs SKU est Coûteux", a: "Solution : Utilisez le « Hack SKU Combiné » — imprimez un sachet personnalisé universel et appliquez des étiquettes de données variables pour chaque variante de produit spécifique." }
      ]
    }
  },
  'zh-TW': {
    problems: {
      title: "定制與標準包裝的 5 個常見問題 (及解決方案)",
      items: [
        { q: "1. 定制包裝的最低訂購量（MOQ）過高", a: "解決方案：在承諾大量印刷之前，先使用標準小袋和高級標籤來測試市場。" },
        { q: "2. 昂貴的設置成本（印版）", a: "解決方案：利用數位印刷技術，消除昂貴印刷版的需求。" },
        { q: "3. 採用標準包裝難以凸顯品牌差異化", a: "解決方案：應用高級紋理標籤（如燙金或局部 UV）以提升標準包裝的外觀。" },
        { q: "4. 定制印刷的交貨時間長", a: "解決方案：使用庫存中的標準小袋，這些小袋可以在短時間內貼上標籤並發貨。" },
        { q: "5. 管理多個 SKU 成本高昂", a: "解決方案：使用「合併 SKU 技巧」—印刷通用的定制小袋，並為每個特定產品變體應用可變數據標籤。" }
      ]
    }
  }
};

export const sectionsForPouch = ["5 Common Custom vs Standard Packaging Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Custom vs Standard Packaging Problems (And Solutions)"];

const PouchCustomVsStandardPackagingPage: React.FC = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Object.keys(translations).forEach(lang => {
      i18n.addResourceBundle(lang, 'translation', { pouchCustomVsStandardPackagingPage: translations[lang as keyof typeof translations] }, true, true)
    })
  }, [i18n])

  const currentLang = i18n.language || 'en';
  const pageT = translations[currentLang as keyof typeof translations] || translations.en;
  const p = 'pouchCustomVsStandardPackagingPage'
  const baseUrl = getBaseUrl()

  const METRICS = [
    { label: t(`${p}.metrics.combinedSku.label`), value: t(`${p}.metrics.combinedSku.value`), unit: t(`${p}.metrics.combinedSku.unit`), desc: t(`${p}.metrics.combinedSku.desc`) },
    { label: t(`${p}.metrics.digitalMooq.label`), value: t(`${p}.metrics.digitalMooq.value`), unit: t(`${p}.metrics.digitalMooq.unit`), desc: t(`${p}.metrics.digitalMooq.desc`) },
    { label: t(`${p}.metrics.closureReliability.label`), value: t(`${p}.metrics.closureReliability.value`), unit: t(`${p}.metrics.closureReliability.unit`), desc: t(`${p}.metrics.closureReliability.desc`) },
    { label: t(`${p}.metrics.turnaround.label`), value: t(`${p}.metrics.turnaround.value`), unit: t(`${p}.metrics.turnaround.unit`), desc: t(`${p}.metrics.turnaround.desc`) }
  ]

  const STORE_ITEMS = [
    { name: t(`${p}.headsUp.items.supMetZip`), path: '/store/product/conven-sup-met-zip' },
    { name: t(`${p}.headsUp.items.supMetXzip`), path: '/store/product/conven-sup-met-xzip' },
    { name: t(`${p}.headsUp.items.supClearZip`), path: '/store/product/conven-sup-clear-zip' },
    { name: t(`${p}.headsUp.items.supClearXzip`), path: '/store/product/conven-sup-clear-xzip' },
    { name: t(`${p}.headsUp.items.ss3MetZip`), path: '/store/product/conven-3ss-met-zip' },
    { name: t(`${p}.headsUp.items.ss3MetXzip`), path: '/store/product/conven-3ss-met-xzip' },
    { name: t(`${p}.headsUp.items.ss3ClearZip`), path: '/store/product/conven-3ss-clear-zip' },
    { name: t(`${p}.headsUp.items.ss3ClearXzip`), path: '/store/product/conven-3ss-clear-xzip' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.meta.title`)}</title>
        <meta name="description" content={t(`${p}.meta.description`)} />
        <link rel="canonical" href={`${baseUrl}/topics/custom-vs-standard-packaging`} />
        <meta name="keywords" content={t(`${p}.meta.keywords`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:24px_24px] bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <NeoBadge color="lime">{t(`${p}.hero.badge`)}</NeoBadge>
          <h1 className="mt-8 font-black text-5xl md:text-8xl lg:text-9xl leading-none uppercase italic">
            {t(`${p}.hero.titlePart1`)}<br/>
            {t(`${p}.hero.titlePart2`)}<br/>
            <span className="text-emerald-800 drop-shadow-[4px_4px_0px_rgba(212,255,0,1)]">{t(`${p}.hero.titlePart3`)}</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-bold font-['JetBrains_Mono'] text-gray-800 max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            {t(`${p}.hero.description`)}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <NeoButton variant="primary" href="https://calendly.com/30-min-free-packaging-consultancy">{t(`${p}.hero.btnSpec`)}</NeoButton>
            <NeoButton variant="secondary" to="/store?category=conventional-digital">{t(`${p}.hero.btnStore`)}</NeoButton>
          </div>
        </div>
      </section>

      {/* Core Concept: Store vs. Custom */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4FF00] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.webp" 
                alt={t(`${p}.flow.alt`)} 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
            <div>
              <NeoBadge color="magenta">{t(`${p}.flow.badge`)}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
                {t(`${p}.flow.titlePart1`)}<br/>
                {t(`${p}.flow.titlePart2`)}
              </h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t(`${p}.flow.description`)}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {METRICS.map((item, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                    <h4 className="font-black uppercase text-xs mb-1 text-emerald-800">{item.label}</h4>
                    <p className="text-xl font-black">{item.value} <span className="text-[10px] opacity-60 font-normal">{item.unit}</span></p>
                    <p className="text-[10px] font-bold opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined SKU Hack */}
      <section className="py-24 bg-black text-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.hack.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl mt-6 uppercase leading-none italic mb-16">
            {t(`${p}.hack.titlePart1`)}<br/>
            {t(`${p}.hack.titlePart2`)}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 font-['JetBrains_Mono']">
            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.hack.item1Title`)}</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {t(`${p}.hack.item1Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.hack.item2Title`)}</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {t(`${p}.hack.item2Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.hack.item3Title`)}</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {t(`${p}.hack.item3Desc`)}
              </p>
            </div>

            <div className="border-l-4 border-[#D4FF00] pl-8 py-4">
              <h3 className="text-3xl font-black uppercase mb-4">{t(`${p}.hack.item4Title`)}</h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {t(`${p}.hack.item4Desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zipper vs Velcro */}
      <section className="py-24 bg-emerald-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">{t(`${p}.closure.badge`)}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
              {t(`${p}.closure.titlePart1`)}<br/>
              {t(`${p}.closure.titlePart2`)}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard color="bg-white">
              <Lock className="w-12 h-12 mb-6" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.closure.standardTitle`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70 mb-6">
                {t(`${p}.closure.standardDesc`)}
              </p>
              <NeoBadge color="neutral">{t(`${p}.closure.standardBadge`)}</NeoBadge>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(20,83,45,1)]">
              <Sparkles className="w-12 h-12 mb-6" />
              <h4 className="font-black text-2xl uppercase mb-4">{t(`${p}.closure.velcroTitle`)}</h4>
              <p className="font-['JetBrains_Mono'] text-sm opacity-70 mb-6">
                {t(`${p}.closure.velcroDesc`)}
              </p>
              <NeoBadge color="lime">{t(`${p}.closure.velcroBadge`)}</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Heads Up: Store Related Items */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">{t(`${p}.headsUp.badge`)}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic">
              {t(`${p}.headsUp.titlePart1`)}<br/>
              {t(`${p}.headsUp.titlePart2`)}
            </h2>
            <p className="mt-4 font-['JetBrains_Mono'] text-sm text-gray-600">
              {t(`${p}.headsUp.description`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {STORE_ITEMS.map((item, i) => (
              <Link 
                key={i}
                to={item.path}
                className="border-4 border-black p-4 font-['JetBrains_Mono'] font-black text-xs uppercase bg-white hover:bg-[#D4FF00] hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between group"
              >
                {item.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-gray-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <NeoBadge color="blue">Insights</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl mt-6 uppercase leading-tight italic mb-12 text-center">
            {pageT.problems.title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {pageT.problems.items.map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-xl mb-2 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>{item.q}</span>
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-gray-700 pl-9">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 translate-x-4 translate-y-4 border-4 border-black" />
              <img 
                src="/imgs/knowledge/custom-vs-standard-packaging-pain-points.jpg" 
                alt="Custom vs Standard Packaging Pain Points" 
                className="relative z-10 border-4 border-black w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert FAQ */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="lime">{t(`${p}.faq.badge`)}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">
            {t(`${p}.faq.titlePart1`)}
          </h2>
          <div className="space-y-4">
            {[
              { q: t(`${p}.faq.q1`), a: t(`${p}.faq.a1`) },
              { q: t(`${p}.faq.q2`), a: t(`${p}.faq.a2`) },
              { q: t(`${p}.faq.q3`), a: t(`${p}.faq.a3`) },
              { q: t(`${p}.faq.q4`), a: t(`${p}.faq.a4`) }
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
      <section className="py-24 bg-emerald-950 text-white border-b-4 border-black">
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
            <NeoButton variant="primary" to="/store" className="!bg-white !text-emerald-950">{t(`${p}.cta.btnStore`)}</NeoButton>
            <NeoButton variant="secondary" className="!border-white !text-white" href="https://calendly.com/30-min-free-packaging-consultancy">
              {t(`${p}.cta.btnSpeak`)}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}

export default PouchCustomVsStandardPackagingPage
