import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, RefreshCw, AlertCircle, CheckCircle, Package, Mail, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { isPouch, getBrandConfig, getBaseUrl } from '../../utils/domain'
import Footer from '../../components/Footer'
import StoreFooter from '../../components/StoreFooter'

const ReturnPolicyPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.returnPolicy'
  const isPouchDomain = isPouch()
  const brand = getBrandConfig()

  return (
    <>
      <Helmet>
        <title>{isPouchDomain ? `Return & Refund Policy | Pouch.eco` : t(`${p}.metaTitle`)}</title>
        <meta name="description" content={isPouchDomain ? `Return and refund policy for Pouch.eco. Learn about our food-grade safety guidelines and defect claims.` : t(`${p}.metaDesc`)} />
        <link rel="canonical" href={`${getBaseUrl()}/return-policy`} />
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
              <span className="text-xl font-bold text-primary-600">{brand.name}</span>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className={`bg-gradient-to-br ${isPouchDomain ? 'from-green-600 to-green-800' : 'from-blue-600 to-blue-800'} text-white py-16`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <RefreshCw className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">{t(`${p}.returnAndRefund`)}</h1>
            <p className="text-blue-100">{isPouchDomain ? 'Clear, fair, and straightforward policies for our packaging storefront.' : t(`${p}.returnSubtitle`)}</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            {/* Quick Summary */}
            <div className={`border-l-4 p-4 rounded-r-lg ${isPouchDomain ? 'bg-green-50 border-green-500 text-green-700' : 'bg-blue-50 border-blue-500 text-blue-700'}`}>
              <h2 className={`font-semibold mb-2 ${isPouchDomain ? 'text-green-800' : 'text-blue-800'}`}>{t(`${p}.quickSummary`)}</h2>
              <ul className="text-sm space-y-1">
                <li>• <strong>No Physical Returns:</strong> Due to food safety and hygiene regulations, we cannot accept physical returns of packaging materials.</li>
                <li>• <strong>Custom Printed Packaging:</strong> Non-refundable unless there is a confirmed manufacturing defect.</li>
                <li>• <strong>Defective Items:</strong> Must be reported within 14 days and destroyed with proof.</li>
                <li>• <strong>Proof of Destruction:</strong> Required for all claims involving defective batches.</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
                Hygiene & Food Safety Notice
              </h2>
              <div className="text-neutral-700 space-y-4">
                <p className="font-medium text-red-700">
                  As a supplier of food-grade packaging, {brand.name} maintains strict hygiene and safety protocols.
                </p>
                
                <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                  <img 
                    src="/imgs/legal/hygiene-safety.png" 
                    alt="Food Safe Packaging Environment" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-neutral-50 px-4 py-2 text-xs text-neutral-500 italic">
                    Our sterile facility ensures every pouch meets strict international hygiene standards.
                  </div>
                </div>

                <p>
                  To prevent the risk of cross-contamination and ensure the integrity of our food-safe environment, <strong>we do not accept the physical return of any packaging materials</strong> once they have left our controlled facility and been delivered to the customer.
                </p>
                <p>
                  This policy applies to all products, including plain stock items and custom-printed orders.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-blue-600" />
                Defective Goods & Quality Claims
              </h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  We stand by our quality standards. If your order arrives with a manufacturing defect (e.g., sealing failure, printing error, or material delamination) that does not match the approved specifications:
                </p>
                <h3 className="font-semibold mt-4">1. Reporting Defects:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Defects must be reported within <strong>14 days</strong> of delivery.</li>
                  <li>Provide a detailed description of the issue along with high-resolution photos and videos.</li>
                </ul>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
                  <img 
                    src="/imgs/legal/quality-control.png" 
                    alt="Quality Control Inspection" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="font-semibold mt-4">2. Destruction with Third-Party Proof:</h3>
                <p>
                  Instead of a physical return, we require the customer to destroy the defective batch and provide verifiable proof. This ensures defective food packaging does not enter the market.
                </p>
                
                <div className="my-8 flex justify-center">
                  <div className="max-w-md rounded-2xl overflow-hidden shadow-md border border-neutral-100">
                    <img 
                      src="/imgs/legal/verified-destruction.png" 
                      alt="Verified Quality Assurance" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Visual Proof:</strong> Photos or videos showing the destruction process (e.g., cutting through the pouches, shredding, or indelible marking).</li>
                  <li><strong>Third-Party Verification:</strong> For large-scale batch claims (over $1,000 USD), we may require a signed certificate of destruction from an independent third-party inspection company or a professional waste disposal service.</li>
                  <li><strong>Inventory Count:</strong> Verification of the total quantity of destroyed items.</li>
                </ul>

                <h3 className="font-semibold mt-6 text-neutral-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm">3</span>
                  Color Accuracy & Discrepancy
                </h3>
                <p>
                  We understand the importance of brand consistency. Our printing process is calibrated to match your approved color proofs.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Tolerance Level:</strong> A color discrepancy of up to 15% is considered within the acceptable industry standard for flexible packaging printing.</li>
                  <li><strong>Valid Claims:</strong> If the printed color discrepancy is <strong>higher than 15%</strong> against the approved color proof, the order qualifies for a full replacement or refund.</li>
                </ul>

                <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-white p-4">
                  <h4 className="text-sm font-bold text-neutral-800 mb-4 text-center uppercase tracking-wider">Color Accuracy Comparison Guide</h4>
                  <img 
                    src="/imgs/legal/color-discrepancy.png" 
                    alt="Color Discrepancy Comparison: Approved Proof vs Delivered Product" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-4 text-xs text-neutral-500 text-center italic">
                    Example: When the delivered product (right) shows a shift of &gt;15% from the approved proof (left), a replacement is guaranteed.
                  </p>
                </div>
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
                    We require formal digital proof approval before starting any custom production. Please review all proofs carefully for spelling, colors, layout, and dimensions. {brand.name} is not responsible for errors approved by the client during the proofing stage.
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
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.refundReplacement`)}</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  Once your claim and destruction proof have been verified by our quality control team:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Replacement:</strong> We will expedite a reprint/remake of the defective items at no additional cost.</li>
                  <li><strong>Refund:</strong> If a replacement is not possible or desired, a refund will be issued to your original payment method.</li>
                </ul>

                {/* Structured Return Costs & Restocking Fee Table for Google Merchant Center / Store Quality */}
                <h3 className="font-semibold text-neutral-900 mt-6">Return Costs & Restocking Fees (退貨費用與手續費)</h3>
                <div className="overflow-x-auto border border-neutral-200 rounded-lg my-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-50 text-neutral-700">
                        <th className="text-left py-3 px-4 font-semibold">Fee Type (費用項目)</th>
                        <th className="text-left py-3 px-4 font-semibold">Cost (金額)</th>
                        <th className="text-left py-3 px-4 font-semibold">Details (說明)</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-600">
                      <tr className="border-b border-neutral-100">
                        <td className="py-3 px-4 font-medium text-neutral-900">Return Shipping (退貨運費)</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">$0.00 (Free / 免運)</td>
                        <td className="py-3 px-4">For food safety/hygiene, we do not accept physical returns. No return shipping is required.</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-3 px-4 font-medium text-neutral-900">Restocking Fee (上架手續費)</td>
                        <td className="py-3 px-4 text-neutral-900">$0.00 (None / 無)</td>
                        <td className="py-3 px-4">We never charge restocking or admin fees for any processed refund or defect replacement.</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-3 px-4 font-medium text-neutral-900">Replacement Shipping (換貨運費)</td>
                        <td className="py-3 px-4 text-green-600 font-semibold">$0.00 (Free / 免運)</td>
                        <td className="py-3 px-4">Replacements for verified defective goods are printed and shipped 100% free of charge.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.howToInitiate`)}</h2>
              <div className="text-neutral-700 space-y-4">
                <p>To start a return process, please contact our support team:</p>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Mail className="h-4 w-4 text-primary-600" />
                    <a href={`mailto:${brand.email}`} className="hover:text-primary-600">{brand.email}</a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-neutral-700">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="hover:text-primary-600">{brand.phone}</a>
                  </div>
                  <p className="text-sm mt-3">Please include your Order ID and the reason for the return in your message.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/" className={`inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition ${isPouchDomain ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-600 hover:bg-primary-700'}`}>
              <ArrowLeft className="h-5 w-5" /> Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        {isPouchDomain ? <Footer /> : <StoreFooter />}
      </div>
    </>
  )
}

export default ReturnPolicyPage
