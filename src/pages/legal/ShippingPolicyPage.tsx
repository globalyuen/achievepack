import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Truck, Globe, Clock, Package, Mail, Phone } from 'lucide-react'
import { Helmet as HelmetOriginal } from 'react-helmet-async'
const Helmet = HelmetOriginal as any

const ShippingPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Policy | Achieve Pack - Global Packaging Delivery</title>
        <meta name="description" content="Achieve Pack shipping information: worldwide delivery, shipping times, costs, and tracking. We ship to USA, UK, EU, Australia, and 100+ countries." />
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
            <Truck className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-blue-100">Worldwide delivery to 100+ countries</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            {/* Quick Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h2 className="font-semibold text-blue-800 mb-2">Quick Summary</h2>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Production time:</strong> 2-3 weeks after artwork approval</li>
                <li>• <strong>Shipping time:</strong> 3-7 business days (express) or 2-4 weeks (sea)</li>
                <li>• <strong>Free shipping:</strong> Orders over $2,000 USD (select regions)</li>
                <li>• <strong>Tracking:</strong> Provided for all shipments</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-600" />
                Shipping Destinations
              </h2>
              <p className="text-neutral-700 mb-4">
                Achieve Pack ships to over 100 countries worldwide. Our main markets include:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'United States', 'United Kingdom', 'Canada', 'Australia',
                  'New Zealand', 'Germany', 'France', 'Netherlands',
                  'Ireland', 'Singapore', 'Hong Kong', 'Japan'
                ].map((country, idx) => (
                  <div key={idx} className="bg-neutral-50 px-3 py-2 rounded-lg text-sm text-center">
                    {country}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                Don't see your country? Contact us for a shipping quote.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                Shipping Times
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">Region</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">Express Air</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">Standard Air</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">Sea Freight</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">USA / Canada</td>
                      <td className="py-3 px-4">3-5 days</td>
                      <td className="py-3 px-4">7-10 days</td>
                      <td className="py-3 px-4">3-4 weeks</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">UK / Europe</td>
                      <td className="py-3 px-4">3-5 days</td>
                      <td className="py-3 px-4">7-12 days</td>
                      <td className="py-3 px-4">4-5 weeks</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">Australia / NZ</td>
                      <td className="py-3 px-4">3-5 days</td>
                      <td className="py-3 px-4">5-8 days</td>
                      <td className="py-3 px-4">2-3 weeks</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">Asia Pacific</td>
                      <td className="py-3 px-4">2-4 days</td>
                      <td className="py-3 px-4">5-7 days</td>
                      <td className="py-3 px-4">1-2 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                * Times shown are from shipment date, after production is complete. Production typically takes 2-3 weeks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Package className="h-6 w-6 text-blue-600" />
                Shipping Costs
              </h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Shipping costs are calculated based on order weight, volume, destination, and shipping method. We provide shipping quotes with your order quotation.
                </p>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-800 mb-2">Free Shipping Eligibility</h3>
                  <ul className="text-sm space-y-1 text-primary-700">
                    <li>• Orders over <strong>$2,000 USD</strong>: Free express shipping to USA, UK, Australia</li>
                    <li>• Orders over <strong>$5,000 USD</strong>: Free express shipping worldwide</li>
                    <li>• Sample orders: Flat rate $25-50 depending on destination</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Import Duties & Taxes</h3>
                  <p className="text-sm text-amber-700">
                    All shipments are sent DDP (Delivered Duty Paid) where possible, meaning we cover import duties and taxes. For some destinations, you may be responsible for local import charges. We'll inform you before shipment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Shipping Carriers</h2>
              <p className="text-neutral-700 mb-4">
                We partner with reliable international carriers to ensure safe and timely delivery:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {['DHL Express', 'FedEx', 'UPS', 'SF Express', 'Maersk (Sea)', 'COSCO (Sea)'].map((carrier, idx) => (
                  <div key={idx} className="bg-neutral-100 px-3 py-2 rounded-lg text-sm text-center font-medium">
                    {carrier}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Tracking Your Order</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  All shipments include tracking. You will receive:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Shipment confirmation email with tracking number</li>
                  <li>Link to carrier's tracking page</li>
                  <li>Estimated delivery date</li>
                  <li>Delivery confirmation notification</li>
                </ul>
                <p>
                  If you haven't received tracking information within 24 hours of shipment notification, please contact us.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Delivery Issues</h2>
              <div className="text-neutral-700 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Delayed Shipments</h3>
                  <p className="text-sm">
                    While we strive for on-time delivery, delays may occur due to customs clearance, weather, or carrier issues. We monitor shipments and will proactively notify you of any significant delays.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Damaged or Lost Packages</h3>
                  <p className="text-sm">
                    All shipments are fully insured. If your package arrives damaged or is lost in transit, contact us within 7 days of expected delivery. We will file a claim and arrange replacement or refund.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Incorrect Address</h3>
                  <p className="text-sm">
                    Please ensure your shipping address is correct when ordering. Re-delivery fees or return shipping costs for incorrect addresses are the customer's responsibility.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                Questions about shipping? We're here to help:
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-neutral-700">
                  <Mail className="h-4 w-4 text-primary-600" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-600">ryan@achievepack.com</a>
                </div>
                <div className="flex items-center gap-2 mt-2 text-neutral-700">
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

export default ShippingPolicyPage
