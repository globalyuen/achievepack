import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Users, Database, Share2, Settings, Clock, RefreshCw, Mail } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicyPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro')

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'information-collect', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'sharing', label: 'Sharing Your Information' },
    { id: 'your-choices', label: 'Your Choices' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
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
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Achieve Pack</title>
        <meta name="description" content="Achieve Pack Privacy Policy - How we collect, use, and protect your personal information when using our services." />
        <link rel="canonical" href="https://achievepack.com/privacy" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-600">AchievePack</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-neutral-100 p-4">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">Table of Contents</h3>
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
              <p className="text-neutral-500">Last updated: January 12, 2026</p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <section id="intro" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Introduction</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>ACHIEVE PACK COMPANY (also referred to as "Achieve Pack", "we", "our" and "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and share information about you when you use our websites and other online services (collectively, the "Services").</p>
                  <p>By using the Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our policies and practices, do not use the Services.</p>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collect" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Database className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Information We Collect</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We collect information about you when you use the Services, including the following types of information:</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Personal Information</h3>
                  <p>Information that identifies you as an individual, such as your name, email address, telephone number, company name and role, and any information you choose to include in enquiries or support requests.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Device Information</h3>
                  <p>Information about the device you use to access the Services, such as device type, operating system, browser type, language settings, and unique device identifiers.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Usage Information</h3>
                  <p>Information about how you use the Services, such as the pages you visit, the links you click, the time and date of your visits, and other interactions with our content and customer centre.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Location Information</h3>
                  <p>Information about your approximate location, such as IP address–based location or other location-related signals provided by your device or network.</p>
                  
                  <p className="mt-4">We may also receive information about you from third parties, such as analytics providers, service partners, or platforms that you use to interact with us.</p>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">How We Use Your Information</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We use the information we collect about you to provide, maintain, and improve the Services and to personalise your experience. This includes using the information to:</p>
                  <ul>
                    <li>Provide the Services to you, including responding to enquiries, processing requests, and providing customer support.</li>
                    <li>Communicate with you about the Services, including service notices, updates, and responses to your messages.</li>
                    <li>Analyse and understand how the Services are used, in order to improve functionality, performance, and user experience.</li>
                    <li>Personalise the content you see within the Services, and, where applicable, provide information that is more relevant to your interests and interactions with us.</li>
                  </ul>
                  <p>We may also use your information for research and analytics, to help detect, prevent, and address technical issues or misuse, to enforce our policies and agreements, and as required or permitted by law.</p>
                </div>
              </section>

              {/* Sharing Your Information */}
              <section id="sharing" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Share2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Sharing Your Information</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We may share your information with third parties in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Service Providers</h3>
                  <p>With third-party vendors and service providers that perform services on our behalf, such as hosting, analytics, communication tools, or customer support platforms, subject to appropriate contractual safeguards.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Legal and Compliance</h3>
                  <p>To comply with applicable laws, regulations, legal processes, or governmental requests, or to protect the rights, property, or safety of Achieve Pack, our users, or others.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Business Operations</h3>
                  <p>In connection with a corporate transaction, such as a merger, acquisition, reorganisation, sale of assets, or in the context of due diligence for such transactions, where permitted by law.</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <p className="text-green-800 font-medium">We do not sell your personal information.</p>
                    <p className="text-green-700 text-sm mt-1">Where we share information for business purposes, we require recipients to use the information only as necessary to perform services for us or as otherwise permitted by law.</p>
                  </div>
                </div>
              </section>

              {/* Your Choices */}
              <section id="your-choices" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Settings className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Your Choices</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>You have certain choices regarding the information we collect and how it is used:</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Marketing Communications</h3>
                  <p>You can opt out of receiving marketing emails from us by following the unsubscribe instructions in those emails. Even if you opt out of marketing, we may still send you non-promotional messages related to your use of the Services.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Cookies and Similar Technologies</h3>
                  <p>You can adjust your browser settings to refuse or limit cookies, or to alert you when cookies are being sent. Some features of the Services may not function properly if cookies are disabled.</p>
                  
                  <h3 className="text-lg font-semibold mt-6 mb-3">Data Subject Rights</h3>
                  <p>Subject to applicable law, you may have the right to request access to your personal data, to request correction or deletion, to restrict or object to certain processing, or to request data portability. You can exercise these rights by contacting us using the contact details below.</p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-800 text-sm">Please note that if you choose not to provide certain information or if you exercise certain rights, you may not be able to use some features of the Services.</p>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section id="data-retention" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Data Retention</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We retain your personal data for as long as reasonably necessary to:</p>
                  <ul>
                    <li>Provide the Services to you</li>
                    <li>Fulfil the purposes described in this Privacy Policy</li>
                    <li>Comply with legal, regulatory, or reporting obligations</li>
                    <li>Protect the rights, property, or safety of Achieve Pack, our users, or others</li>
                  </ul>
                  <p>The specific retention period may vary depending on the type of data and the context in which it was collected. When we no longer need the data, we will delete it or anonymise it in accordance with applicable law.</p>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section id="changes" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Changes to This Privacy Policy</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other operational needs.</p>
                  <p>When we make changes, we will revise the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we handle your information and your choices.</p>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact" className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Contact Us</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
                  <div className="bg-white rounded-lg p-6 mt-4 not-prose">
                    <a href="mailto:support@achievepack.com" className="text-xl font-semibold text-primary-600 hover:underline">
                      support@achievepack.com
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                <ArrowLeft className="h-5 w-5" /> Back to Home
              </Link>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-neutral-400 text-sm">© 2026 Achieve Pack. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <Link to="/terms-of-use" className="text-neutral-400 hover:text-white">Terms of Use</Link>
              <Link to="/privacy" className="text-neutral-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-neutral-400 hover:text-white">Order Terms</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
