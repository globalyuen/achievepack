import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Shield, Mail, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Achieve Pack - Eco-Friendly Packaging</title>
        <meta name="description" content="Achieve Pack's privacy policy explains how we collect, use, and protect your personal information when you use our website and services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">AchievePack</span>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Shield className="h-12 w-12 text-primary-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-neutral-300">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
              <p className="text-neutral-700 leading-relaxed">
                Achieve Pack Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website achievepack.com and pouch.eco, or engage with our services.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                <strong>Company Information:</strong><br />
                Achieve Pack Limited<br />
                Hong Kong Business Registration: 41007097<br />
                Address: No.41 1/F Wo Liu Hang Tsuen, Fotan, Hong Kong
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Personal Information</h3>
                  <p>We may collect personal information that you voluntarily provide, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Name and business name</li>
                    <li>Email address and phone number</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                    <li>Product and packaging requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Automatically Collected Information</h3>
                  <p>When you visit our website, we may automatically collect:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website or search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-neutral-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>Process and fulfill your orders for packaging products</li>
                <li>Communicate with you about quotes, orders, and inquiries</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and protect our business</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Information Sharing</h2>
              <p className="text-neutral-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li><strong>Service providers:</strong> Shipping carriers, payment processors, email marketing platforms</li>
                <li><strong>Manufacturing partners:</strong> To fulfill your packaging orders</li>
                <li><strong>Analytics providers:</strong> Google Analytics, for website optimization</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-neutral-700 mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Cookies and Tracking</h2>
              <p className="text-neutral-700 mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-neutral-700 mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Data Security</h2>
              <p className="text-neutral-700">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls limiting employee access to personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Your Rights</h2>
              <p className="text-neutral-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing for marketing purposes</li>
                <li><strong>Withdraw consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="text-neutral-700 mt-4">
                To exercise these rights, contact us at <a href="mailto:ryan@achievepack.com" className="text-primary-600 hover:underline">ryan@achievepack.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Data Retention</h2>
              <p className="text-neutral-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Order and transaction records are typically retained for 7 years for accounting and legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. International Transfers</h2>
              <p className="text-neutral-700">
                Your information may be transferred to and processed in countries other than your own, including Hong Kong and our manufacturing facilities in Asia. We ensure appropriate safeguards are in place for international data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Children's Privacy</h2>
              <p className="text-neutral-700">
                Our services are intended for business users and are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-neutral-700">
                We may update this Privacy Policy periodically. The updated version will be indicated by the "Last updated" date at the top of this page. We encourage you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="font-semibold">Achieve Pack Limited</p>
                <div className="flex items-center gap-2 mt-2 text-neutral-700">
                  <Mail className="h-4 w-4 text-primary-600" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-600">ryan@achievepack.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1 text-neutral-700">
                  <Phone className="h-4 w-4 text-primary-600" />
                  <a href="tel:+85269704411" className="hover:text-primary-600">+852 6970 4411</a>
                </div>
              </div>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Certification Logos & SSL Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-10 w-auto rounded" loading="lazy" decoding="async" />
              <img src="/imgs/cert/cert-ISO9001.webp" alt="ISO 9001 Certified" className="h-10 w-auto" loading="lazy" decoding="async" />
              <img src="/imgs/cert/cert-ISO14001-cert.webp" alt="ISO 14001 Certified" className="h-10 w-auto" loading="lazy" decoding="async" />
              <img src="/imgs/cert/cert-fsc.png" alt="FSC Certified" className="h-10 w-auto" loading="lazy" decoding="async" />
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Transactions</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Achieve Pack. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-neutral-500">
              <Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link>
              <Link to="/shipping" className="hover:text-primary-400">Shipping Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
