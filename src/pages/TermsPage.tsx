import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Truck, CreditCard, Package, Shield, AlertCircle, Scale, Palette, CheckCircle } from 'lucide-react'

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </Link>
          <span className="text-xl font-bold text-primary-600">AchievePack</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-neutral-600">ACHIEVE PACK Order & Service Agreement</p>
        </div>

        <div className="space-y-8">
          {/* Production & Order Process */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Production & Order Process</h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Production Lead Time</h3>
                <p>10 working days (±1-2 days) from receipt of signed PO, deposit, certificates, authorization letter, and approved artwork.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Artwork Requirements</h3>
                <p>Print-ready files (AI, PDF, EPS) with 300 DPI, CMYK color mode, 3mm bleed. Customer responsible for artwork errors.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Pre-Production Sample</h3>
                <p>One free printed sample for color/pattern confirmation. Production starts day after approval.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Order Confirmation</h3>
                <p>Deposit or full payment and artwork confirmation required before production begins.</p>
              </div>
            </div>
          </section>

          {/* Shipping & Delivery */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Shipping & Delivery</h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Shipping Times</h3>
                <p>Air: 20 days | Sea: 60 days. Subject to carrier availability and customs.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Costs & Terms</h3>
                <p>Free delivery within Shenzhen. Customer bears costs outside Shenzhen. FOB Hong Kong terms.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Inspection</h3>
                <p>Customer must inspect goods within 7 days and report issues in writing. Failure to report deems goods accepted.</p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Payment Terms</h2>
            </div>
            
            <div className="text-neutral-700">
              <p>Net 15 days unless specified otherwise. Orders may be canceled/held for non-payment. No refunds for custom orders after production begins. 10% cancellation fee before production.</p>
            </div>
          </section>

          {/* Product Specifications */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Product Specifications</h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Size Tolerances</h3>
                <p>Pouches have fully customizable sizes with tolerances typically ±2mm to ±4mm. Standard tolerances: thickness ±0.05mm, dimensions ±3mm, registration ±1mm, hole punching ±3mm.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Fit for Use</h3>
                <p>Customer must confirm size compatibility. ACHIEVE PACK not liable for fit issues. Recommend ordering size pack for testing.</p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Intellectual Property</h2>
            </div>
            
            <div className="text-neutral-700 space-y-2">
              <p>Customer warrants artwork doesn't infringe IP rights. Customer provides qualification certificates and authorization letter. Customer liable for all infringement claims and must compensate ACHIEVE PACK for losses.</p>
              <p>ACHIEVE PACK may use designs for portfolio/marketing unless specified otherwise.</p>
            </div>
          </section>

          {/* Color Accuracy */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Palette className="h-5 w-5 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Color Accuracy</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Material</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Tolerance</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Kraft Paper</td>
                    <td className="py-3 px-4">±15%</td>
                    <td className="py-3 px-4">Duller due to absorption</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">White Paper</td>
                    <td className="py-3 px-4">±10%</td>
                    <td className="py-3 px-4">Vibrant colors</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">Plastic/Laminated</td>
                    <td className="py-3 px-4">±8%</td>
                    <td className="py-3 px-4">High fidelity</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Specialty Materials</td>
                    <td className="py-3 px-4">±12%</td>
                    <td className="py-3 px-4">Varies by material</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-500 mt-4">Sample provided for confirmation at cost.</p>
          </section>

          {/* Quantity Tolerances */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Quantity Tolerances</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Order Qty</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Tolerance</th>
                    <th className="text-left py-3 px-4 font-semibold text-neutral-900">Resolution</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">100-1,000</td>
                    <td className="py-3 px-4">±50%</td>
                    <td className="py-3 px-4">Refund/discount offered</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">1,001-2,000</td>
                    <td className="py-3 px-4">±40%</td>
                    <td className="py-3 px-4">Refund/discount offered</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">2,001-5,000</td>
                    <td className="py-3 px-4">±30%</td>
                    <td className="py-3 px-4">Refund/discount offered</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">5,001-10,000</td>
                    <td className="py-3 px-4">±20%</td>
                    <td className="py-3 px-4">Refund/additional production</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">10,001-100,000</td>
                    <td className="py-3 px-4">±10%</td>
                    <td className="py-3 px-4">Refund/additional production</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">&gt;100,000</td>
                    <td className="py-3 px-4">±5%</td>
                    <td className="py-3 px-4">Refund/additional production</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quality Standards */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Quality Standards</h2>
            </div>
            
            <div className="text-neutral-700">
              <p>Based on approved artwork/sample. Tested per China GB Standards. Customer inspects within 7 days. Free replacement/refund for confirmed defects.</p>
            </div>
          </section>

          {/* Cancellations & Returns */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Cancellations & Returns</h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Cancellations</h3>
                <p>Before production with 10% fee. No cancellations after production starts.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Returns</h3>
                <p>Only defective products within 7 days. Return shipping customer's responsibility unless defect confirmed.</p>
              </div>
            </div>
          </section>

          {/* Liability Limitations */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <Scale className="h-5 w-5 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Liability Limitations</h2>
            </div>
            
            <div className="text-neutral-700">
              <p>ACHIEVE PACK not liable for delays by third parties or force majeure. Customer responsible for third-party disputes. All specifications must be confirmed before production.</p>
            </div>
          </section>

          {/* Customer Acknowledgment */}
          <section className="bg-primary-50 rounded-xl p-8 border border-primary-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Customer Acknowledgment</h2>
            <p className="text-neutral-700 mb-6">By placing an order, you acknowledge and agree to these terms and conditions.</p>
            
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                  <div className="h-10 border-b-2 border-neutral-300"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                  <div className="h-10 border-b-2 border-neutral-300"></div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Signature</label>
                  <div className="h-10 border-b-2 border-neutral-300"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Date</label>
                  <div className="h-10 border-b-2 border-neutral-300"></div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-neutral-600 mt-6">
              For inquiries or clarifications, contact ACHIEVE PACK at{' '}
              <a href="mailto:ryan@achievepack.com" className="text-primary-600 hover:underline">ryan@achievepack.com</a>
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-neutral-400 text-sm">
            © 2025 Achieve Pack. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs mt-2">
            Hong Kong Business Registration Number: 41007097 | No.41 1/F Wo Liu Hang Tsuen, Fotan, HK
          </p>
        </div>
      </footer>
    </div>
  )
}

export default TermsPage
