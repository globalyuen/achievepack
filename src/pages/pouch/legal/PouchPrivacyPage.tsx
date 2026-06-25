import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Users, Database, Share2, Settings, Clock, RefreshCw, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { useTranslation } from 'react-i18next'

const PouchPrivacyPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.pouchPrivacy'
  const [activeSection, setActiveSection] = useState('intro')

  const sections = [
    { id: 'intro', label: t(`${p}.sections.intro.label`) },
    { id: 'information-collect', label: t(`${p}.sections.information-collect.label`) },
    { id: 'how-we-use', label: t(`${p}.sections.how-we-use.label`) },
    { id: 'sharing', label: t(`${p}.sections.sharing.label`) },
    { id: 'your-choices', label: t(`${p}.sections.your-choices.label`) },
    { id: 'data-retention', label: t(`${p}.sections.data-retention.label`) },
    { id: 'changes', label: t(`${p}.sections.changes.label`) },
    { id: 'contact', label: t(`${p}.sections.contact.label`) },
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
      const sectionIds = sections.map(s => s.id)
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
  }, [sections])

  return (
    <>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
        <link rel="canonical" href="https://achievepack.com/privacy" />
      </Helmet>
      
      <PouchLayout>
      <div className="min-h-screen bg-neutral-50 border-t-4 border-black">

        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t(`${p}.toc`)}</h3>
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">{t(`${p}.pageTitle`)}</h1>
              <p className="text-neutral-500">{t(`${p}.lastUpdated`)}</p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <section id="intro" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.intro.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.intro.p1`)}</p>
                  <p>{t(`${p}.sections.intro.p2`)}</p>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collect" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.information-collect.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.information-collect.p1`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.information-collect.personal`)}</h3>
                  <p>{t(`${p}.sections.information-collect.personalDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.information-collect.device`)}</h3>
                  <p>{t(`${p}.sections.information-collect.deviceDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.information-collect.usage`)}</h3>
                  <p>{t(`${p}.sections.information-collect.usageDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.information-collect.location`)}</h3>
                  <p>{t(`${p}.sections.information-collect.locationDesc`)}</p>
                  
                  <p className="mt-4">{t(`${p}.sections.information-collect.p2`)}</p>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.how-we-use.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.how-we-use.p1`)}</p>
                  <ul>
                    <li>{t(`${p}.sections.how-we-use.li1`)}</li>
                    <li>{t(`${p}.sections.how-we-use.li2`)}</li>
                    <li>{t(`${p}.sections.how-we-use.li3`)}</li>
                    <li>{t(`${p}.sections.how-we-use.li4`)}</li>
                  </ul>
                  <p>{t(`${p}.sections.how-we-use.p2`)}</p>
                </div>
              </section>

              {/* Sharing Your Information */}
              <section id="sharing" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Share2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.sharing.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.sharing.p1`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.sharing.serviceProviders`)}</h3>
                  <p>{t(`${p}.sections.sharing.serviceProvidersDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.sharing.legal`)}</h3>
                  <p>{t(`${p}.sections.sharing.legalDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.sharing.business`)}</h3>
                  <p>{t(`${p}.sections.sharing.businessDesc`)}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <p className="text-green-800 font-medium">{t(`${p}.sections.sharing.noSell`)}</p>
                    <p className="text-green-700 text-sm mt-1">{t(`${p}.sections.sharing.noSellDesc`)}</p>
                  </div>
                </div>
              </section>

              {/* Your Choices */}
              <section id="your-choices" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Settings className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.your-choices.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.your-choices.p1`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.your-choices.marketing`)}</h3>
                  <p>{t(`${p}.sections.your-choices.marketingDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.your-choices.cookies`)}</h3>
                  <p>{t(`${p}.sections.your-choices.cookiesDesc`)}</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">{t(`${p}.sections.your-choices.rights`)}</h3>
                  <p>{t(`${p}.sections.your-choices.rightsDesc`)}</p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-800 text-sm">{t(`${p}.sections.your-choices.note`)}</p>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.data-retention.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.data-retention.p1`)}</p>
                  <ul>
                    <li>{t(`${p}.sections.data-retention.li1`)}</li>
                    <li>{t(`${p}.sections.data-retention.li2`)}</li>
                    <li>{t(`${p}.sections.data-retention.li3`)}</li>
                    <li>{t(`${p}.sections.data-retention.li4`)}</li>
                  </ul>
                  <p>{t(`${p}.sections.data-retention.p2`)}</p>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section id="changes" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.changes.title`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.changes.p1`)}</p>
                  <p>{t(`${p}.sections.changes.p2`)}</p>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact" className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sections.contact.label`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.sections.contact.p1`)}</p>
                  <div className="bg-white rounded-lg p-6 mt-4 not-prose">
                    <a href="mailto:support@achievepack.com" className="text-xl font-semibold text-primary-600 hover:underline">
                      {t(`${p}.sections.contact.email`)}
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToHome`)}
              </Link>
            </div>
          </main>
        </div>
      </div>
      </PouchLayout>
    </>
  )
}

export default PouchPrivacyPage
