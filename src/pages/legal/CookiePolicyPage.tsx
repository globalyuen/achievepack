import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Cookie, Mail, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Achieve Pack - Eco-Friendly Packaging</title>
        <meta name="description" content="Achieve Pack's cookie policy explains how we use cookies and similar technologies to enhance your browsing experience on our website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://achievepack.com/cookie-policy" />
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
        <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Cookie className="h-12 w-12 text-amber-300 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-amber-200">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. What Are Cookies</h2>
              <p className="text-neutral-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                Cookies help us understand how you interact with our website, remember your preferences, and improve your overall experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-neutral-700 mb-4">We use cookies for the following purposes:</p>
              <div className="space-y-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Essential Cookies</h3>
                  <p className="text-neutral-700 text-sm">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Analytics Cookies</h3>
                  <p className="text-neutral-700 text-sm">
                    We use analytics cookies (including Google Analytics) to understand how visitors interact with our website. This helps us improve our site and services. These cookies collect information anonymously.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Functional Cookies</h3>
                  <p className="text-neutral-700 text-sm">
                    These cookies allow us to remember choices you make (such as your language preference) and provide enhanced, personalized features.
                  </p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">Marketing Cookies</h3>
                  <p className="text-neutral-700 text-sm">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="text-left p-3 border">Cookie Name</th>
                      <th className="text-left p-3 border">Purpose</th>
                      <th className="text-left p-3 border">Duration</th>
                      <th className="text-left p-3 border">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr>
                      <td className="p-3 border">cookie_consent</td>
                      <td className="p-3 border">Stores your cookie preference</td>
                      <td className="p-3 border">1 year</td>
                      <td className="p-3 border">Essential</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="p-3 border">_ga</td>
                      <td className="p-3 border">Google Analytics - Distinguishes users</td>
                      <td className="p-3 border">2 years</td>
                      <td className="p-3 border">Analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">_ga_*</td>
                      <td className="p-3 border">Google Analytics - Session state</td>
                      <td className="p-3 border">2 years</td>
                      <td className="p-3 border">Analytics</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="p-3 border">_gid</td>
                      <td className="p-3 border">Google Analytics - Session identifier</td>
                      <td className="p-3 border">24 hours</td>
                      <td className="p-3 border">Analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 border">cart_items</td>
                      <td className="p-3 border">Stores shopping cart contents</td>
                      <td className="p-3 border">Session</td>
                      <td className="p-3 border">Functional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-neutral-700 mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Vercel Analytics:</strong> For performance insights and speed optimization</li>
                <li><strong>Calendly:</strong> For scheduling meetings and consultations</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Managing Cookies</h2>
              <p className="text-neutral-700 mb-4">
                You have several options for managing cookies:
              </p>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Cookie Consent Banner</h3>
                  <p>When you first visit our website, you can accept or decline non-essential cookies using our cookie consent banner.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Browser Settings</h3>
                  <p>Most browsers allow you to control cookies through their settings. You can:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>View what cookies are stored and delete them individually</li>
                    <li>Block third-party cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block all cookies</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Opt-Out Links</h3>
                  <p>You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Impact of Disabling Cookies</h2>
              <p className="text-neutral-700">
                If you choose to disable cookies, some features of our website may not function properly. This includes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-neutral-700">
                <li>Shopping cart functionality</li>
                <li>Remembering your login status</li>
                <li>Personalized recommendations</li>
                <li>Language and currency preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-neutral-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about our use of cookies, please contact us:
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

            {/* Related Policies */}
            <section className="border-t pt-8">
              <h3 className="font-semibold text-neutral-900 mb-4">Related Policies</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
                <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link>
                <Link to="/shipping" className="text-primary-600 hover:underline">Shipping Policy</Link>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-800 text-white py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Achieve Pack Limited. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default CookiePolicyPage
