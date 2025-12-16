import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Factory, Truck, Calendar, AlertTriangle, Lightbulb, CheckCircle, Plane, Ship, Package } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const LeadTimePage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.leadTime';

  const heroImage = '/imgs/seo-photos/a_shipping_storage_savings_infographic_8051355.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Understanding Lead Times',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Lead time is the total time from order confirmation to delivery at your door. Understanding our timelines helps you plan inventory and product launches effectively.</p>
          <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-600" />
              Total Lead Time = Production + Shipping
            </h4>
            <p className="text-primary-700 text-sm">Production times vary by printing method and complexity. Shipping adds 1-5 weeks depending on the method you choose.</p>
          </div>
        </div>
      )
    },
    {
      id: 'production',
      title: 'Production Timelines',
      icon: <Factory className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary-100">
                  <th className="p-3 text-left border border-primary-200 font-semibold text-primary-800">Order Type</th>
                  <th className="p-3 text-left border border-primary-200 font-semibold text-primary-800">Timeline</th>
                  <th className="p-3 text-left border border-primary-200 font-semibold text-primary-800">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-neutral-50"><td className="p-3 border font-medium">Printed Samples</td><td className="p-3 border text-primary-600 font-semibold">2-3 weeks</td><td className="p-3 border text-neutral-600">Single printed pouch for approval</td></tr>
                <tr className="bg-neutral-50 hover:bg-neutral-100"><td className="p-3 border font-medium">Digital Print Production</td><td className="p-3 border text-primary-600 font-semibold">4-5 weeks</td><td className="p-3 border text-neutral-600">No plate setup needed</td></tr>
                <tr className="bg-white hover:bg-neutral-50"><td className="p-3 border font-medium">Plate Print Production</td><td className="p-3 border text-primary-600 font-semibold">6-8 weeks</td><td className="p-3 border text-neutral-600">Includes plate making</td></tr>
                <tr className="bg-neutral-50 hover:bg-neutral-100"><td className="p-3 border font-medium">Repeat Orders (plates exist)</td><td className="p-3 border text-primary-600 font-semibold">4-5 weeks</td><td className="p-3 border text-neutral-600">Faster as plates are ready</td></tr>
                <tr className="bg-white hover:bg-neutral-50"><td className="p-3 border font-medium">Rush Production</td><td className="p-3 border text-amber-600 font-semibold">3-4 weeks</td><td className="p-3 border text-neutral-600">Digital only, fees apply</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-600">Production starts after artwork approval and deposit payment.</p>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping Options & Transit Times',
      icon: <Truck className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg text-blue-800 mb-2">Air Freight</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">5-7 days</div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Fastest option</li>
                <li>• Higher cost per kg</li>
                <li>• Best for urgent orders</li>
                <li>• Ideal for samples</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Ship className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg text-green-800 mb-2">Sea Freight</h4>
              <div className="text-3xl font-bold text-green-600 mb-2">25-35 days</div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Most economical</li>
                <li>• Best for large orders</li>
                <li>• Lower carbon footprint</li>
                <li>• Plan ahead needed</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="font-semibold text-lg text-amber-800 mb-2">Express Courier</h4>
              <div className="text-3xl font-bold text-amber-600 mb-2">3-5 days</div>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• DHL/FedEx/UPS</li>
                <li>• Door-to-door</li>
                <li>• Small shipments</li>
                <li>• Premium cost</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-xl">
            <h4 className="font-semibold mb-3">Destination Estimates (Sea Freight):</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-primary-700">Americas</p>
                <ul className="text-neutral-600">
                  <li>• US West Coast: 18-22 days</li>
                  <li>• US East Coast: 28-32 days</li>
                  <li>• Canada: 20-28 days</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-primary-700">Europe & Others</p>
                <ul className="text-neutral-600">
                  <li>• UK/EU: 30-35 days</li>
                  <li>• Australia: 18-25 days</li>
                  <li>• Southeast Asia: 7-14 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'total',
      title: 'Total Lead Time Examples',
      icon: <Calendar className="h-5 w-5 text-purple-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Here are typical total timelines for common scenarios:</p>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-blue-800">Small Order (Digital + Air)</h4>
                <span className="text-2xl font-bold text-blue-600">5-6 weeks</span>
              </div>
              <p className="text-sm text-blue-700">500 pieces, digital printing, air freight to USA West Coast</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-green-800">Standard Order (Plate + Sea)</h4>
                <span className="text-2xl font-bold text-green-600">10-12 weeks</span>
              </div>
              <p className="text-sm text-green-700">10,000 pieces, plate printing, sea freight to UK</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-purple-800">Repeat Order (Plate + Sea)</h4>
                <span className="text-2xl font-bold text-purple-600">8-9 weeks</span>
              </div>
              <p className="text-sm text-purple-700">Reorder with existing plates, sea freight to Australia</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-amber-800">Rush Order (Digital + Express)</h4>
                <span className="text-2xl font-bold text-amber-600">3-4 weeks</span>
              </div>
              <p className="text-sm text-amber-700">200 pieces, rush digital, express courier. Rush fees apply.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'factors',
      title: 'Factors Affecting Lead Time',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-lg mb-3 text-green-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Can Speed Up
            </h4>
            <ul className="text-green-700 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Digital printing (no plates)</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Print-ready artwork</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Standard sizes/materials</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Quick approval turnaround</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Air freight shipping</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Rush production (fees apply)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-lg mb-3 text-amber-800 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Can Add Time
            </h4>
            <ul className="text-amber-700 space-y-2 text-sm">
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Plate printing (new plates)</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Complex custom designs</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Non-standard sizes</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Multiple revision rounds</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Peak season (Chinese New Year)</li>
              <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /> Remote destinations</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'planning',
      title: 'Planning Tips',
      icon: <Lightbulb className="h-5 w-5 text-yellow-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
          <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary-600" />
            How to Plan Your Orders:
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-4 rounded-lg">
              <p className="font-medium text-primary-700 mb-2">Product Launch</p>
              <p className="text-sm text-primary-700">Start the packaging process 12-16 weeks before your launch date. This gives buffer for samples, approvals, and shipping.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg">
              <p className="font-medium text-primary-700 mb-2">Reorder Point</p>
              <p className="text-sm text-primary-700">Reorder when you have 8-10 weeks of inventory remaining. This ensures continuity without rush fees.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg">
              <p className="font-medium text-primary-700 mb-2">Seasonal Products</p>
              <p className="text-sm text-primary-700">For holiday seasons, place orders by early September. Chinese New Year (Jan/Feb) can add 2-3 weeks delay.</p>
            </div>
            <div className="bg-white/60 p-4 rounded-lg">
              <p className="font-medium text-primary-700 mb-2">First Orders</p>
              <p className="text-sm text-primary-700">Allow extra time for first orders—sampling and approval takes longer when establishing specifications.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['lead time', 'production time', 'shipping time', 'packaging timeline', 'delivery schedule']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary={t(`${p}.introSummary`)}
      faqs={faqs}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default LeadTimePage;
