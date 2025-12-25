import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, FileText, Truck, CreditCard, Package, Shield, AlertCircle, Scale, Palette, CheckCircle, Globe } from 'lucide-react'

const TermsPage: React.FC = () => {
  const { t } = useTranslation()
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
      const sectionIds = ['production', 'shipping', 'payment', 'specifications', 'ip', 'color', 'quantity', 'quality', 'cancellations', 'liability', 'acknowledgment']
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
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> {t('terms.backToHome')}
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-primary-600">AchievePack</span>
          </div>
        </div>
      </header>

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

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Certification Logos & SSL Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-10 w-auto rounded grayscale" loading="lazy" decoding="async" />
            <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
              <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Transactions</span>
            </div>
          </div>
          <p className="text-neutral-400 text-sm">© 2025 Achieve Pack. All rights reserved.</p>
          <p className="text-neutral-500 text-xs mt-2">Hong Kong Business Registration Number: 41007097 | No.41 1/F Wo Liu Hang Tsuen, Fotan, HK</p>
        </div>
      </footer>
    </div>
  )
}

export default TermsPage
