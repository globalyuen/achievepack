import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Users, Shield, Package, Gavel, Globe, Scale, Mail, AlertTriangle, RefreshCw, BookOpen } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const TermsOfUsePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('agreement')

  const sections = [
    { id: 'agreement', label: 'Agreement to Legal Terms' },
    { id: 'services', label: 'Our Services' },
    { id: 'representations', label: 'User Representations' },
    { id: 'ip-definitions', label: 'Content & IP – Definitions' },
    { id: 'ip-achieve', label: 'Achieve Pack Content' },
    { id: 'ip-user', label: 'User Content & Licence' },
    { id: 'ip-responsibility', label: 'Your Responsibility' },
    { id: 'public-private', label: 'Public & Private Content' },
    { id: 'customer-centre', label: 'Customer Centre & Support' },
    { id: 'user-conduct', label: 'User Conduct' },
    { id: 'prohibited', label: 'Prohibited Activities' },
    { id: 'orders', label: 'Orders & Shipping' },
    { id: 'contracts', label: 'Separate Contracts' },
    { id: 'privacy', label: 'Data & Privacy' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitations of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'modifications', label: 'Modifications' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'miscellaneous', label: 'Miscellaneous' },
    { id: 'contact', label: 'Contact' },
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
        <title>Terms of Use | Achieve Pack</title>
        <meta name="description" content="Achieve Pack Terms of Use - Legal agreement governing your access to and use of our websites, customer centre, and related services." />
        <link rel="canonical" href="https://achievepack.com/terms-of-use" />
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
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-neutral-100 p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
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
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Use</h1>
              <p className="text-neutral-500">Last updated: January 12, 2026</p>
            </div>

            <div className="space-y-8">
              {/* Agreement to Legal Terms */}
              <section id="agreement" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Agreement to Legal Terms</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>These Terms of Use ("Terms") form a legally binding agreement between you and Achieve Pack ("Achieve Pack", "we", "us", or "our") regarding your access to and use of our websites, customer centre, and related services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Services.</p>
                  <p>You are responsible for ensuring that your use of the Services complies with all applicable laws, rules, and regulations in your jurisdiction.</p>
                </div>
              </section>

              {/* Our Services */}
              <section id="services" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Our Services</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>The Services include Achieve Pack's websites, online portals, customer centre, communication tools, and any associated content, features, or functionality that we make available from time to time.</p>
                  <p>The Services are intended primarily for business users seeking sustainable and compostable packaging solutions and related customer support, order management, and after-sales services.</p>
                </div>
              </section>

              {/* User Representations */}
              <section id="representations" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">User Representations</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>By using the Services, you represent and warrant that:</p>
                  <ul>
                    <li>You have the legal capacity and authority to enter into and comply with these Terms</li>
                    <li>You are not a minor under the laws of your jurisdiction</li>
                    <li>You will not access or use the Services through automated or non-human means (including bots, scripts, or scraping tools) unless expressly authorised in writing by Achieve Pack</li>
                    <li>You will not use the Services for any unlawful or unauthorised purpose</li>
                    <li>Your use of the Services will not violate any applicable law, regulation, contract, or third-party right</li>
                  </ul>
                  <p>If any information you provide is untrue, inaccurate, outdated, or incomplete, we may suspend or terminate your access to the Services at our discretion.</p>
                </div>
              </section>

              {/* Content and IP – Definitions */}
              <section id="ip-definitions" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Content and Intellectual Property – Definitions</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p><strong>"Achieve Pack Content"</strong> means all text, graphics, logos, icons, images, photographs, designs, audio, video, software, documentation, data, and other materials made available through the Services by Achieve Pack or its licensors.</p>
                  <p><strong>"User Content"</strong> means any content, materials, data, or information you upload, submit, transmit, or otherwise provide through the Services.</p>
                </div>
              </section>

              {/* Achieve Pack Content */}
              <section id="ip-achieve" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Content and Intellectual Property – Achieve Pack Content</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>All Achieve Pack Content is the exclusive property of Achieve Pack and/or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.</p>
                  <p>You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use Achieve Pack Content solely for your internal, non-commercial business purposes in connection with evaluating or using Achieve Pack products and Services.</p>
                  <p>Any reproduction, modification, adaptation, translation, distribution, public display, republication, resale, or other exploitation of Achieve Pack Content without our prior written consent is prohibited, and you must not remove, alter, or obscure any copyright, trademark, or proprietary rights notice contained in or accompanying the Services.</p>
                </div>
              </section>

              {/* User Content & Licence */}
              <section id="ip-user" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-pink-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Content and Intellectual Property – User Content and Licence</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>As between you and Achieve Pack, you retain ownership of all intellectual property rights in your User Content.</p>
                  <p>By uploading, submitting, or otherwise providing any User Content through the Services, you grant Achieve Pack a worldwide, perpetual, irrevocable, royalty-free, fully paid-up, transferable, and sublicensable licence to host, store, use, reproduce, adapt, modify for technical or formatting purposes, translate, create derivative works from, communicate, publish, publicly perform and display, distribute, and otherwise process such User Content to the extent reasonably necessary to:</p>
                  <ul>
                    <li>Operate, maintain, provide, secure, and improve the Services</li>
                    <li>Handle enquiries, orders, and after-sales matters</li>
                    <li>Improve our products and internal processes</li>
                    <li>Comply with applicable legal and regulatory obligations</li>
                  </ul>
                </div>
              </section>

              {/* Your Responsibility */}
              <section id="ip-responsibility" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Content and Intellectual Property – Your Responsibility</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>You are solely responsible for your User Content and for having all necessary rights, licences, consents, and permissions to provide such User Content and to grant the licence described above.</p>
                  <p>You represent and warrant that:</p>
                  <ul>
                    <li>Your User Content does not infringe, misappropriate, or violate any third party's copyright, trademark, patent, trade secret, privacy, publicity, or other rights</li>
                    <li>Your User Content and your use of the Services comply with all applicable laws and regulations</li>
                    <li>Your User Content does not contain unlawful, defamatory, discriminatory, misleading, or otherwise objectionable material</li>
                  </ul>
                </div>
              </section>

              {/* Public and Private Content */}
              <section id="public-private" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Public and Private Content</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>Depending on the functions available, you may submit User Content that is visible only to Achieve Pack (such as private tickets, files, or messages) or visible to others (such as community posts or testimonials).</p>
                  <p>User Content that you intentionally make publicly accessible through the Services may be viewed, used, commented on, or copied by others, and you share such content at your own risk.</p>
                </div>
              </section>

              {/* Customer Centre and Support */}
              <section id="customer-centre" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Customer Centre and Support</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>The Achieve Pack customer centre is provided to assist with:</p>
                  <ul>
                    <li>Product and material enquiries (including sustainable and compostable packaging specifications and certifications)</li>
                    <li>Quotation and order-related questions</li>
                    <li>Shipment status and logistics issues</li>
                    <li>Quality concerns, after-sales support, and complaint handling</li>
                    <li>General technical guidance regarding packaging suitability and usage for reference purposes</li>
                  </ul>
                  <p>We aim to respond to general enquiries within one to two business days. More complex, technical, or third-party-dependent matters may require additional time.</p>
                  <p>You must provide accurate and sufficient information, including company details, order numbers, product specifications, and supporting materials such as photos or videos, to enable us to assess and handle your request.</p>
                </div>
              </section>

              {/* User Conduct */}
              <section id="user-conduct" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">User Conduct in the Customer Centre</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>You must communicate with Achieve Pack staff and representatives in a professional and respectful manner and must not engage in abusive, harassing, or discriminatory behaviour.</p>
                  <p>We may suspend or terminate support or access to the Services in the event of serious or repeated misconduct.</p>
                </div>
              </section>

              {/* Prohibited Activities */}
              <section id="prohibited" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Prohibited Activities</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>You must not:</p>
                  <ul>
                    <li>Use the Services for any unlawful, fraudulent, or unauthorised purpose</li>
                    <li>Use the Services in any manner that could damage, disable, overburden, or impair the Services</li>
                    <li>Systematically retrieve data or other content from the Services to create or compile a database or directory without our prior written permission</li>
                    <li>Use automated means (including robots, spiders, or scrapers) to access the Services unless expressly permitted in writing</li>
                    <li>Attempt to gain unauthorised access to any part of the Services, accounts, systems, or networks</li>
                    <li>Upload or transmit viruses, malware, or other harmful code</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  </ul>
                </div>
              </section>

              {/* Orders, Production, and Shipping */}
              <section id="orders" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Orders, Production, and Shipping</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>When the Services are used to place or manage orders, production timelines, quantity tolerances, colour variations, and material specifications are governed by the commercial terms set out in quotations, purchase orders, confirmations, and related documents agreed between you and Achieve Pack.</p>
                  <p>You are responsible for reviewing and confirming artwork, dimensions, technical data, and other order details prior to final approval.</p>
                  <p>Any lead times or shipping estimates are indicative only and may vary due to production, logistics, customs, or other factors beyond our reasonable control.</p>
                </div>
              </section>

              {/* Relationship with Separate Contracts */}
              <section id="contracts" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Relationship with Separate Contracts</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>These Terms do not replace or override any separate written contract or purchase terms agreed in writing between you and Achieve Pack.</p>
                  <p>If there is a conflict between these Terms and a signed contract or written order terms, the signed contract or written order terms will prevail.</p>
                </div>
              </section>

              {/* Data, Privacy, and Security */}
              <section id="privacy" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Data, Privacy, and Security</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We may collect and process information about you and your organisation when you use the Services, including enquiry details, communication records, uploaded files, and other data required to provide customer support and manage orders.</p>
                  <p>We implement reasonable technical and organisational measures to protect such information but cannot guarantee absolute security of data transmitted over the internet.</p>
                  <p>You should not submit highly sensitive information, such as passwords or full banking credentials, through general enquiry channels.</p>
                  <p>Additional information on our handling of personal data may be provided in a separate <Link to="/privacy" className="text-primary-600 hover:underline">privacy policy</Link> on our website.</p>
                </div>
              </section>

              {/* Disclaimers */}
              <section id="disclaimers" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Disclaimers</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>The Services and all Achieve Pack Content are provided on an <strong>"as is"</strong> and <strong>"as available"</strong> basis. To the maximum extent permitted by law, Achieve Pack disclaims all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                  <p>Any technical guidance, regulatory comments, or packaging recommendations provided through the Services are for general informational purposes only and do not constitute legal, regulatory, or professional advice.</p>
                  <p>You remain solely responsible for ensuring that your products, packaging, and labelling comply with applicable laws and regulations and should obtain independent professional advice where necessary.</p>
                </div>
              </section>

              {/* Limitations of Liability */}
              <section id="liability" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <Scale className="h-5 w-5 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Limitations of Liability</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>To the maximum extent permitted by law, Achieve Pack and its directors, employees, and agents are not liable for any indirect, consequential, incidental, special, punitive, or exemplary damages, including loss of profits, revenue, or data, arising out of or in connection with your use of or inability to use the Services, even if advised of the possibility of such damages.</p>
                  <p>To the extent permitted by law, because access to the Achieve Pack customer centre is provided free of charge, Achieve Pack's total aggregate liability arising out of or relating to the customer centre or these Terms, whether in contract, tort, or otherwise, shall in all cases be limited to <strong>USD 20</strong>.</p>
                </div>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-fuchsia-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-fuchsia-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Indemnification</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>You agree to indemnify, defend, and hold harmless Achieve Pack, its affiliates, and their respective officers, directors, employees, and agents from and against all claims, demands, actions, damages, losses, liabilities, costs, and expenses, including reasonable legal fees, arising out of or relating to:</p>
                  <ul>
                    <li>Your User Content</li>
                    <li>Your use of the Services</li>
                    <li>Your breach of these Terms</li>
                    <li>Your violation of any applicable law or any third party's rights</li>
                  </ul>
                  <p>We may, at our own expense, assume the exclusive defence and control of any matter subject to indemnification by you, and you agree to cooperate with such defence.</p>
                </div>
              </section>

              {/* Modifications and Interruptions */}
              <section id="modifications" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Modifications and Interruptions</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We may modify, suspend, or discontinue any part of the Services at any time without liability.</p>
                  <p>We do not guarantee that the Services will be available at all times or free from interruptions, errors, or defects, and we are not responsible for any loss or damage caused by any unavailability or malfunction of the Services.</p>
                </div>
              </section>

              {/* Governing Law and Dispute Resolution */}
              <section id="governing-law" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                    <Gavel className="h-5 w-5 text-lime-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Governing Law and Dispute Resolution</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>Unless otherwise required by mandatory law, these Terms and your use of the Services are governed by the laws of the <strong>Republic of Singapore</strong>, without regard to its conflict-of-laws rules.</p>
                  <p>You agree to first attempt to resolve any dispute, controversy, or claim arising out of or relating to these Terms or the Services by contacting us in writing and allowing at least 30 days for informal resolution.</p>
                  <p>If the dispute is not resolved within that period, it shall be submitted to the exclusive jurisdiction of the courts of Singapore, and you consent to such jurisdiction and venue.</p>
                </div>
              </section>

              {/* Changes to These Terms */}
              <section id="changes" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-neutral-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Changes to These Terms</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>We may update these Terms from time to time. The "Last updated" date at the top of this document reflects the latest version.</p>
                  <p>Your continued use of the Services after changes become effective constitutes your acceptance of the updated Terms, and you are responsible for reviewing these Terms periodically.</p>
                </div>
              </section>

              {/* Miscellaneous */}
              <section id="miscellaneous" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-gray-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Miscellaneous</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>These Terms, together with any additional policies or documents expressly incorporated by reference, constitute the entire agreement between you and Achieve Pack regarding the Services.</p>
                  <p>If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permitted, and the remaining provisions will remain in full force and effect.</p>
                  <p>We may assign any of our rights and obligations under these Terms to any affiliate or successor without notice. You may not assign or transfer any of your rights or obligations under these Terms without our prior written consent.</p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">Contact</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>For questions or concerns regarding these Terms or the Services, contact:</p>
                  <div className="bg-white rounded-lg p-6 mt-4">
                    <p className="font-semibold text-lg mb-2">Achieve Pack – Customer Centre</p>
                    <p>Email: <a href="mailto:ryan@achievepack.com" className="text-primary-600 hover:underline">ryan@achievepack.com</a></p>
                    <p>Website: <a href="https://achievepack.com" className="text-primary-600 hover:underline">achievepack.com</a></p>
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

export default TermsOfUsePage
