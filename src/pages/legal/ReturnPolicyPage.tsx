import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, RefreshCw, AlertCircle, CheckCircle, Package, Mail, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const ReturnPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Return Policy | Achieve Pack</title>
        <meta name="description" content="Return and refund policy for Achieve Pack. Find information about returning stock items, custom packaging, and our refund process." />
        <link rel="canonical" href="https://achievepack.com/return-policy" />
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
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <RefreshCw className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Return & Refund Policy</h1>
            <p className="text-blue-100">Clear, fair, and straightforward policies for our B2B customers.</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            {/* Quick Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h2 className="font-semibold text-blue-800 mb-2">Quick Summary</h2>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Stock Items:</strong> Returnable within 30 days of delivery (unused, original condition).</li>
                <li>• <strong>Custom Printed Packaging:</strong> Non-returnable unless there is a manufacturing defect.</li>
                <li>• <strong>Samples:</strong> Non-returnable.</li>
                <li>• <strong>Defective Items:</strong> Must be reported within 14 days of delivery.</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Package className="h-6 w-6 text-blue-600" />
                Stock Items Return Policy
              </h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  For non-customized, standard stock items (e.g., plain eco stock pouches, plain mailer boxes), we accept returns within <strong>30 days</strong> of the delivery date.
                </p>
                <h3 className="font-semibold mt-4">Conditions for Stock Returns:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Items must be unused, undamaged, and in their original packaging.</li>
                  <li>A Return Merchandise Authorization (RMA) number must be requested before sending items back.</li>
                  <li>The customer is responsible for return shipping costs unless the return is due to our error.</li>
                  <li>A restocking fee of 15% may apply to large bulk orders returned without defect.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                Custom Orders & Printed Packaging
              </h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Due to the personalized nature of custom-printed and custom-sized packaging, <strong>we do not accept returns or offer refunds for custom orders</strong> once production has commenced, except in the case of a manufacturing defect.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                  <h3 className="font-semibold text-amber-800 mb-2">Artwork Approval</h3>
                  <p className="text-sm text-amber-700">
                    We require formal digital proof approval before starting any custom production. Please review all proofs carefully for spelling, colors, layout, and dimensions. Achieve Pack is not responsible for errors approved by the client during the proofing stage.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                Manufacturing Defects
              </h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  We stand by the quality of our products. If your order (custom or stock) arrives with a manufacturing defect or does not match the approved specifications, we will make it right.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Notification Period:</strong> You must notify us of any defects within <strong>14 days</strong> of receiving your order.</li>
                  <li><strong>Evidence:</strong> Please provide clear photos or videos demonstrating the defect, along with your order number.</li>
                  <li><strong>Resolution:</strong> If a defect is confirmed, we will either reprint the defective items at no additional cost or issue a partial/full refund depending on the severity of the issue.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Refund Process</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Approved refunds will be processed and a credit will automatically be applied to your credit card or original method of payment within 5-10 business days.</li>
                  <li>Original shipping charges are non-refundable.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">How to Initiate a Return</h2>
              <div className="text-neutral-700 space-y-4">
                <p>To start a return process, please contact our support team:</p>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Mail className="h-4 w-4 text-primary-600" />
                    <a href="mailto:ryan@achievepack.com" className="hover:text-primary-600">ryan@achievepack.com</a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-neutral-700">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <a href="tel:+85269704411" className="hover:text-primary-600">+852 6970 4411</a>
                  </div>
                  <p className="text-sm mt-3">Please include your Order ID and the reason for the return in your message.</p>
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
              <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-10 w-auto rounded grayscale" loading="lazy" decoding="async" />
              <img src="/imgs/cert-b.webp" alt="B Corp Certified" className="h-10 w-auto grayscale" loading="lazy" decoding="async" />
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
              <Link to="/return-policy" className="hover:text-primary-400 text-white">Return Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ReturnPolicyPage
