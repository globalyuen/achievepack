import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Users, Database, Share2, Settings, Clock, RefreshCw, Mail, AlertTriangle, CheckCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    sectionTitle: '5 Common Privacy Problems (And Solutions)',
    problems: [
      {
        title: 'Data Breaches',
        desc: 'Sensitive personal information exposed to malicious actors.',
        solution: 'Robust AES-256 encryption for all data at rest and in transit.'
      },
      {
        title: 'Unwanted Tracking',
        desc: 'Third-party cookies tracking users across the web without clear consent.',
        solution: 'Granular cookie controls allowing precise opt-in/opt-out preferences.'
      },
      {
        title: 'Third-Party Data Sharing',
        desc: 'User data sold or shared with unverified third-party vendors.',
        solution: 'Strict vendor audits and zero-sale data policies.'
      },
      {
        title: 'Complicated Opt-Outs',
        desc: 'Intentionally confusing settings making it hard to delete data.',
        solution: 'One-click opt-out dashboard and simple data deletion requests.'
      },
      {
        title: 'Opaque Data Policies',
        desc: 'Privacy policies filled with dense legalese that users cannot understand.',
        solution: 'Plain language summaries provided for all major policy updates.'
      }
    ]
  },
  es: {
    sectionTitle: '5 Problemas Comunes de Privacidad (Y Soluciones)',
    problems: [
      { title: 'Violaciones de Datos', desc: 'Información personal confidencial expuesta a actores malintencionados.', solution: 'Cifrado robusto AES-256 para todos los datos en reposo y en tránsito.' },
      { title: 'Rastreo no Deseado', desc: 'Cookies de terceros que rastrean a los usuarios en la web sin su consentimiento claro.', solution: 'Controles granulares de cookies que permiten preferencias precisas.' },
      { title: 'Intercambio de Datos con Terceros', desc: 'Datos del usuario vendidos o compartidos con proveedores no verificados.', solution: 'Auditorías estrictas de proveedores y políticas de cero venta de datos.' },
      { title: 'Exclusiones Complicadas', desc: 'Configuraciones intencionalmente confusas que dificultan la eliminación de datos.', solution: 'Panel de exclusión voluntaria con un clic y solicitudes sencillas de eliminación de datos.' },
      { title: 'Políticas de Datos Opacas', desc: 'Políticas de privacidad llenas de jerga legal que los usuarios no pueden entender.', solution: 'Resúmenes en lenguaje sencillo para todas las actualizaciones importantes de las políticas.' }
    ]
  },
  fr: {
    sectionTitle: '5 Problèmes Courants de Confidentialité (Et Solutions)',
    problems: [
      { title: 'Violations de Données', desc: 'Informations personnelles sensibles exposées à des acteurs malveillants.', solution: 'Chiffrement robuste AES-256 pour toutes les données au repos et en transit.' },
      { title: 'Suivi Indésirable', desc: 'Cookies tiers suivant les utilisateurs sur le web sans consentement clair.', solution: 'Contrôles granulaires des cookies permettant des préférences précises.' },
      { title: 'Partage de Données avec des Tiers', desc: 'Données utilisateur vendues ou partagées avec des fournisseurs non vérifiés.', solution: 'Audits stricts des fournisseurs et politiques de non-vente des données.' },
      { title: 'Désinscriptions Compliquées', desc: 'Paramètres intentionnellement confus rendant difficile la suppression des données.', solution: 'Tableau de bord de désinscription en un clic et demandes de suppression simples.' },
      { title: 'Politiques de Données Opaques', desc: 'Politiques de confidentialité remplies de jargon juridique incompréhensible.', solution: 'Résumés en langage clair pour toutes les mises à jour majeures.' }
    ]
  },
  'zh-TW': {
    sectionTitle: '5 個常見隱私問題（及解決方案）',
    problems: [
      { title: '資料外洩', desc: '敏感的個人資訊暴露給惡意行為者。', solution: '對所有靜態和傳輸中的資料進行強大的 AES-256 加密。' },
      { title: '不必要的追蹤', desc: '第三方 Cookie 在未經明確同意的情況下跨網路追蹤使用者。', solution: '精細的 Cookie 控制，允許精確的選擇加入/退出偏好。' },
      { title: '第三方資料分享', desc: '使用者資料被出售或分享給未經核實的第三方供應商。', solution: '嚴格的供應商稽核和零資料出售政策。' },
      { title: '複雜的退出機制', desc: '故意令人困惑的設定，使刪除資料變得困難。', solution: '一鍵退出儀表板和簡單的資料刪除請求。' },
      { title: '不透明的資料政策', desc: '隱私權政策充滿了使用者無法理解的艱澀法律術語。', solution: '為所有主要政策更新提供通俗易懂的摘要。' }
    ]
  }
}

const PouchPrivacyPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.pouchPrivacy'
  const currentLang = i18n.language || 'en'
  const langData = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en
  const [activeSection, setActiveSection] = useState('intro')

  const sections = [
    { id: 'intro', label: t(`${p}.sections.intro.label`) },
    { id: 'problems', label: langData.sectionTitle },
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

              {/* Common Problems */}
              <section id="problems" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900">{langData.sectionTitle}</h2>
                    </div>
                    <div className="space-y-6">
                      {langData.problems.map((problem, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="mt-1">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-900">{problem.title}</h3>
                            <p className="text-red-500 text-sm mt-1 mb-2"><span className="font-medium">Problem:</span> {problem.desc}</p>
                            <p className="text-green-600 text-sm"><span className="font-medium">Solution:</span> {problem.solution}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <img src="/imgs/knowledge/privacy-pain-points.jpg" alt="Privacy Problems and Solutions" className="w-full h-auto rounded-lg shadow-md object-cover" />
                  </div>
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
