import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, FileText, Truck, CreditCard, Package, Shield, AlertCircle, Scale, Palette, CheckCircle, Globe } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'

export const sectionsForPouch = ["5 Common Packaging Order Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Packaging Order Problems (And Solutions)"];

const termsTranslations: Record<string, any> = {
  en: {
    problemsTitle: "5 Common Packaging Order Problems (And Solutions)",
    prob1Title: "Unexpected Color Variations",
    prob1Desc: "Pain Point: Colors look different from digital proof to final product. Solution: We utilize strict Pantone matching and transparent tolerance guidelines.",
    prob2Title: "Hidden Shipping Fees",
    prob2Desc: "Pain Point: Surprise customs or duty charges on delivery. Solution: We offer DDP shipping ensuring all costs are calculated upfront.",
    prob3Title: "Incorrect Sizing",
    prob3Desc: "Pain Point: The pouch doesn't fit the actual product perfectly. Solution: We provide physical sample verification and 3D mockups before mass production.",
    prob4Title: "Production Delays",
    prob4Desc: "Pain Point: Missing launch dates due to factory delays. Solution: We offer guaranteed timelines with transparent real-time tracking.",
    prob5Title: "Quantity Shortages",
    prob5Desc: "Pain Point: Receiving fewer units than ordered without compensation. Solution: We clearly outline quantity tolerances and automatically refund any shortages."
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Pedidos de Empaque (y Soluciones)",
    prob1Title: "Variaciones de Color Inesperadas",
    prob1Desc: "Problema: Los colores difieren de la prueba digital al producto final. Solución: Utilizamos una estricta igualación de Pantone y pautas de tolerancia transparentes.",
    prob2Title: "Tarifas de Envío Ocultas",
    prob2Desc: "Problema: Cargos sorpresivos de aduanas en la entrega. Solución: Ofrecemos envío DDP asegurando que todos los costos se calculan por adelantado.",
    prob3Title: "Tamaño Incorrecto",
    prob3Desc: "Problema: La bolsa no se ajusta perfectamente al producto real. Solución: Proporcionamos verificación física de muestras y maquetas 3D antes de la producción en masa.",
    prob4Title: "Retrasos en la Producción",
    prob4Desc: "Problema: Fechas de lanzamiento perdidas debido a retrasos de fábrica. Solución: Ofrecemos plazos garantizados con seguimiento transparente en tiempo real.",
    prob5Title: "Escasez de Cantidad",
    prob5Desc: "Problema: Recibir menos unidades de las pedidas sin compensación. Solución: Detallamos claramente las tolerancias de cantidad y reembolsamos automáticamente las faltas."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de Commandes d'Emballage (Et Solutions)",
    prob1Title: "Variations de Couleur Inattendues",
    prob1Desc: "Problème: Les couleurs diffèrent de l'épreuve numérique au produit final. Solution: Nous utilisons une correspondance Pantone stricte et des directives de tolérance transparentes.",
    prob2Title: "Frais d'Expédition Cachés",
    prob2Desc: "Problème: Frais de douane surprises à la livraison. Solution: Nous offrons l'expédition DDP garantissant que tous les coûts sont calculés à l'avance.",
    prob3Title: "Dimensionnement Incorrect",
    prob3Desc: "Problème: La pochette ne s'adapte pas parfaitement au produit réel. Solution: Nous fournissons une vérification physique des échantillons et des maquettes 3D avant la production de masse.",
    prob4Title: "Retards de Production",
    prob4Desc: "Problème: Dates de lancement manquées en raison de retards d'usine. Solution: Nous offrons des délais garantis avec un suivi transparent en temps réel.",
    prob5Title: "Pénurie de Quantité",
    prob5Desc: "Problème: Recevoir moins d'unités que commandé sans compensation. Solution: Nous décrivons clairement les tolérances de quantité et remboursons automatiquement les manques."
  },
  'zh-TW': {
    problemsTitle: "5 個常見包裝訂單問題（與解決方案）",
    prob1Title: "意外的顏色差異",
    prob1Desc: "痛點：最終產品與數位校對的顏色不同。 解決方案：我們採用嚴格的 Pantone 配色和透明的公差指南。",
    prob2Title: "隱藏的運輸費用",
    prob2Desc: "痛點：交貨時出現意外的海關或關稅費用。 解決方案：我們提供 DDP 運輸，確保所有費用都會提前計算。",
    prob3Title: "尺寸不正確",
    prob3Desc: "痛點：包裝袋無法完美貼合實際產品。 解決方案：我們在量產前提供實體樣品驗證和 3D 模型。",
    prob4Title: "生產延遲",
    prob4Desc: "痛點：因工廠延遲而錯過上市日期。 解決方案：我們提供有保證的時間表和透明的即時追蹤。",
    prob5Title: "數量短缺",
    prob5Desc: "痛點：收到的單位少於訂購數量，且未獲得補償。 解決方案：我們明確列出數量公差，並自動退還任何短缺的費用。"
  }
}

const PouchTermsPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const currentLang = termsTranslations[lang] || termsTranslations['en']
  const [activeSection, setActiveSection] = useState('production')

  const sections = [
    { id: 'production', label: t('terms.nav.production') },
    { id: 'shipping', label: t('terms.nav.shipping') },
    { id: 'payment', label: t('terms.nav.payment') },
    { id: 'specifications', label: t('terms.nav.specifications') },
    { id: 'ip', label: t('terms.nav.ip') },
    { id: 'color', label: t('terms.nav.color') },
    { id: 'quantity', label: t('terms.nav.quantity') },
    { id: 'quality', label: t('terms.nav.quality') },
    { id: 'problems', label: currentLang.problemsTitle },
    { id: 'cancellations', label: t('terms.nav.cancellations') },
    { id: 'liability', label: t('terms.nav.liability') },
    { id: 'acknowledgment', label: t('terms.nav.acknowledgment') },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['production', 'shipping', 'payment', 'specifications', 'ip', 'color', 'quantity', 'quality', 'problems', 'cancellations', 'liability', 'acknowledgment']
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Terms of Service | Achieve Pack - Eco-Friendly Packaging</title>
        <meta name="description" content="Achieve Pack terms of service covering production, shipping, payment, and quality guarantees for custom eco-friendly packaging orders." />
        <link rel="canonical" href="https://achievepack.com/terms" />
      </Helmet>
      <PouchLayout>
      <div className="min-h-screen bg-neutral-50 border-t-4 border-black">

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t('terms.tableOfContents')}</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">{t('terms.title')}</h1>
            <p className="text-lg text-neutral-600">{t('terms.subtitle')}</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2 rounded-lg text-sm">
              <Globe className="h-4 w-4" />
              {t('terms.englishReference')}
            </div>
          </div>

          <div className="space-y-8">
            {/* Production & Order Process */}
            <section id="production" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.production.title')}</h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.production.leadTime.title')}</h3>
                  <p>{t('terms.production.leadTime.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.production.artwork.title')}</h3>
                  <p>{t('terms.production.artwork.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.production.sample.title')}</h3>
                  <p>{t('terms.production.sample.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.production.confirmation.title')}</h3>
                  <p>{t('terms.production.confirmation.desc')}</p>
                </div>
              </div>
            </section>

            {/* Shipping & Delivery */}
            <section id="shipping" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.shipping.title')}</h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.shipping.times.title')}</h3>
                  <p>{t('terms.shipping.times.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.shipping.costs.title')}</h3>
                  <p>{t('terms.shipping.costs.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.shipping.inspection.title')}</h3>
                  <p>{t('terms.shipping.inspection.desc')}</p>
                </div>
                {/* Third Party Shipping Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-amber-800 mb-2">{t('terms.shipping.thirdParty.title')}</h3>
                  <p className="text-amber-700 text-sm">{t('terms.shipping.thirdParty.desc')}</p>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section id="payment" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.payment.title')}</h2>
              </div>
              <div className="text-neutral-700">
                <p>{t('terms.payment.desc')}</p>
              </div>
            </section>

            {/* Product Specifications */}
            <section id="specifications" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.specifications.title')}</h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.specifications.size.title')}</h3>
                  <p>{t('terms.specifications.size.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.specifications.fit.title')}</h3>
                  <p>{t('terms.specifications.fit.desc')}</p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="ip" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.ip.title')}</h2>
              </div>
              <div className="text-neutral-700 space-y-2">
                <p>{t('terms.ip.desc1')}</p>
                <p>{t('terms.ip.desc2')}</p>
              </div>
            </section>

            {/* Color Accuracy */}
            <section id="color" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Palette className="h-5 w-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.color.title')}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.color.table.material')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.color.table.tolerance')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.color.table.notes')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t('terms.color.kraft.name')}</td>
                      <td className="py-3 px-4">±15%</td>
                      <td className="py-3 px-4">{t('terms.color.kraft.note')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t('terms.color.white.name')}</td>
                      <td className="py-3 px-4">±10%</td>
                      <td className="py-3 px-4">{t('terms.color.white.note')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t('terms.color.plastic.name')}</td>
                      <td className="py-3 px-4">±8%</td>
                      <td className="py-3 px-4">{t('terms.color.plastic.note')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">{t('terms.color.specialty.name')}</td>
                      <td className="py-3 px-4">±12%</td>
                      <td className="py-3 px-4">{t('terms.color.specialty.note')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-500 mt-4">{t('terms.color.sample')}</p>
            </section>

            {/* Quantity Tolerances */}
            <section id="quantity" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.quantity.title')}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.quantity.table.qty')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.quantity.table.tolerance')}</th>
                      <th className="text-left py-3 px-4 font-semibold text-neutral-900">{t('terms.quantity.table.resolution')}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">100-1,000</td>
                      <td className="py-3 px-4">±50%</td>
                      <td className="py-3 px-4">{t('terms.quantity.refund')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">1,001-2,000</td>
                      <td className="py-3 px-4">±40%</td>
                      <td className="py-3 px-4">{t('terms.quantity.refund')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">2,001-5,000</td>
                      <td className="py-3 px-4">±30%</td>
                      <td className="py-3 px-4">{t('terms.quantity.refund')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">5,001-10,000</td>
                      <td className="py-3 px-4">±20%</td>
                      <td className="py-3 px-4">{t('terms.quantity.production')}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">10,001-100,000</td>
                      <td className="py-3 px-4">±10%</td>
                      <td className="py-3 px-4">{t('terms.quantity.production')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">&gt;100,000</td>
                      <td className="py-3 px-4">±5%</td>
                      <td className="py-3 px-4">{t('terms.quantity.production')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quality Standards */}
            <section id="quality" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.quality.title')}</h2>
              </div>
              <div className="text-neutral-700">
                <p>{t('terms.quality.desc')}</p>
              </div>
            </section>

            {/* 5 Common Problems */}
            <section id="problems" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{currentLang.problemsTitle}</h2>
              </div>
              <div className="mb-6">
                <img 
                  src="/imgs/knowledge/packaging-terms-of-service-pain-points.jpg" 
                  alt="Packaging Terms of Service Pain Points" 
                  className="w-full rounded-xl shadow-sm object-cover h-64"
                />
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><Palette className="h-5 w-5 text-indigo-500" /></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{currentLang.prob1Title}</h3>
                    <p className="text-neutral-700">{currentLang.prob1Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Truck className="h-5 w-5 text-indigo-500" /></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{currentLang.prob2Title}</h3>
                    <p className="text-neutral-700">{currentLang.prob2Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Package className="h-5 w-5 text-indigo-500" /></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{currentLang.prob3Title}</h3>
                    <p className="text-neutral-700">{currentLang.prob3Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle className="h-5 w-5 text-indigo-500" /></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{currentLang.prob4Title}</h3>
                    <p className="text-neutral-700">{currentLang.prob4Desc}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Scale className="h-5 w-5 text-indigo-500" /></div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{currentLang.prob5Title}</h3>
                    <p className="text-neutral-700">{currentLang.prob5Desc}</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* Cancellations & Returns */}
            <section id="cancellations" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.cancellations.title')}</h2>
              </div>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.cancellations.cancel.title')}</h3>
                  <p>{t('terms.cancellations.cancel.desc')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{t('terms.cancellations.returns.title')}</h3>
                  <p>{t('terms.cancellations.returns.desc')}</p>
                </div>
              </div>
            </section>

            {/* Liability Limitations */}
            <section id="liability" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Scale className="h-5 w-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t('terms.liability.title')}</h2>
              </div>
              <div className="text-neutral-700">
                <p>{t('terms.liability.desc')}</p>
              </div>
            </section>

            {/* Customer Acknowledgment */}
            <section id="acknowledgment" className="bg-primary-50 rounded-xl p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t('terms.acknowledgment.title')}</h2>
              <p className="text-neutral-700 mb-6">{t('terms.acknowledgment.desc')}</p>
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">{t('terms.acknowledgment.name')}</label>
                    <div className="h-10 border-b-2 border-neutral-300"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">{t('terms.acknowledgment.company')}</label>
                    <div className="h-10 border-b-2 border-neutral-300"></div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">{t('terms.acknowledgment.signature')}</label>
                    <div className="h-10 border-b-2 border-neutral-300"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">{t('terms.acknowledgment.date')}</label>
                    <div className="h-10 border-b-2 border-neutral-300"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-6">
                {t('terms.acknowledgment.contact')}{' '}
                <a href="mailto:ryan@achievepack.com" className="text-primary-600 hover:underline">ryan@achievepack.com</a>
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              <ArrowLeft className="h-5 w-5" /> {t('terms.backToHome')}
            </Link>
          </div>
        </main>
      </div>
      </div>
      </PouchLayout>
    </>
  )
}

export default PouchTermsPage
