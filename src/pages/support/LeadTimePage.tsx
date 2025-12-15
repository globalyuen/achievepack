import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const LeadTimePage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_shipping_storage_savings_infographic_8051355.webp';
  
  const sections = [
    {
      id: 'overview',
      title: 'Understanding Lead Times',
      content: `
        <p class="mb-4">Lead time is the total time from order confirmation to delivery at your door. Understanding our timelines helps you plan inventory and product launches effectively.</p>
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-3">Total Lead Time = Production + Shipping</h4>
          <p class="text-neutral-700 text-sm">Production times vary by printing method and complexity. Shipping adds 1-5 weeks depending on the method you choose.</p>
        </div>
      `
    },
    {
      id: 'production',
      title: 'Production Timelines',
      content: `
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-primary-100">
                <th class="p-3 text-left border">Order Type</th>
                <th class="p-3 text-left border">Timeline</th>
                <th class="p-3 text-left border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white"><td class="p-3 border font-medium">Printed Samples</td><td class="p-3 border">2-3 weeks</td><td class="p-3 border">Single printed pouch for approval</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Digital Print Production</td><td class="p-3 border">4-5 weeks</td><td class="p-3 border">No plate setup needed</td></tr>
              <tr class="bg-white"><td class="p-3 border font-medium">Plate Print Production</td><td class="p-3 border">6-8 weeks</td><td class="p-3 border">Includes plate making</td></tr>
              <tr class="bg-neutral-50"><td class="p-3 border font-medium">Repeat Orders (plates exist)</td><td class="p-3 border">4-5 weeks</td><td class="p-3 border">Faster as plates are ready</td></tr>
              <tr class="bg-white"><td class="p-3 border font-medium">Rush Production</td><td class="p-3 border">3-4 weeks</td><td class="p-3 border">Digital only, fees apply</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-sm text-neutral-600">Production starts after artwork approval and deposit payment.</p>
      `
    },
    {
      id: 'shipping',
      title: 'Shipping Options & Transit Times',
      content: `
        <div class="grid md:grid-cols-3 gap-6 mb-6">
          <div class="bg-white p-6 rounded-xl border-2 border-blue-200">
            <div class="text-2xl mb-2">✈️</div>
            <h4 class="font-semibold text-lg text-blue-700 mb-2">Air Freight</h4>
            <div class="text-3xl font-bold text-blue-600 mb-2">5-7 days</div>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Fastest option</li>
              <li>• Higher cost per kg</li>
              <li>• Best for urgent orders</li>
              <li>• Ideal for samples</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border-2 border-green-200">
            <div class="text-2xl mb-2">🚢</div>
            <h4 class="font-semibold text-lg text-green-700 mb-2">Sea Freight</h4>
            <div class="text-3xl font-bold text-green-600 mb-2">25-35 days</div>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• Most economical</li>
              <li>• Best for large orders</li>
              <li>• Lower carbon footprint</li>
              <li>• Plan ahead needed</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border-2 border-orange-200">
            <div class="text-2xl mb-2">📦</div>
            <h4 class="font-semibold text-lg text-orange-700 mb-2">Express Courier</h4>
            <div class="text-3xl font-bold text-orange-600 mb-2">3-5 days</div>
            <ul class="text-sm text-neutral-600 space-y-1">
              <li>• DHL/FedEx/UPS</li>
              <li>• Door-to-door</li>
              <li>• Small shipments</li>
              <li>• Premium cost</li>
            </ul>
          </div>
        </div>
        <div class="bg-neutral-100 p-6 rounded-xl">
          <h4 class="font-semibold mb-3">Destination Estimates (Sea Freight):</h4>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-medium text-primary-700">Americas</p>
              <ul class="text-neutral-600">
                <li>• US West Coast: 18-22 days</li>
                <li>• US East Coast: 28-32 days</li>
                <li>• Canada: 20-28 days</li>
              </ul>
            </div>
            <div>
              <p class="font-medium text-primary-700">Europe & Others</p>
              <ul class="text-neutral-600">
                <li>• UK/EU: 30-35 days</li>
                <li>• Australia: 18-25 days</li>
                <li>• Southeast Asia: 7-14 days</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'total',
      title: 'Total Lead Time Examples',
      content: `
        <p class="mb-4">Here are typical total timelines for common scenarios:</p>
        <div class="space-y-4">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-primary-700">Small Order (Digital + Air)</h4>
              <span class="text-2xl font-bold text-primary-600">5-6 weeks</span>
            </div>
            <p class="text-sm text-neutral-600">500 pieces, digital printing, air freight to USA West Coast</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-primary-700">Standard Order (Plate + Sea)</h4>
              <span class="text-2xl font-bold text-primary-600">10-12 weeks</span>
            </div>
            <p class="text-sm text-neutral-600">10,000 pieces, plate printing, sea freight to UK</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-primary-700">Repeat Order (Plate + Sea)</h4>
              <span class="text-2xl font-bold text-primary-600">8-9 weeks</span>
            </div>
            <p class="text-sm text-neutral-600">Reorder with existing plates, sea freight to Australia</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-primary-700">Rush Order (Digital + Express)</h4>
              <span class="text-2xl font-bold text-primary-600">3-4 weeks</span>
            </div>
            <p class="text-sm text-neutral-600">200 pieces, rush digital, express courier. Rush fees apply.</p>
          </div>
        </div>
      `
    },
    {
      id: 'factors',
      title: 'Factors Affecting Lead Time',
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Can Speed Up</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Digital printing (no plates)</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Print-ready artwork</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Standard sizes/materials</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Quick approval turnaround</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Air freight shipping</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Rush production (fees apply)</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-3 text-primary-700">Can Add Time</h4>
            <ul class="text-neutral-600 space-y-2 text-sm">
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Plate printing (new plates)</li>
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Complex custom designs</li>
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Non-standard sizes</li>
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Multiple revision rounds</li>
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Peak season (Chinese New Year)</li>
              <li class="flex items-center gap-2"><span class="text-orange-500">△</span> Remote destinations</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'planning',
      title: 'Planning Tips',
      content: `
        <div class="bg-primary-50 p-6 rounded-xl">
          <h4 class="font-semibold text-primary-700 mb-4">How to Plan Your Orders:</h4>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <p class="font-medium text-primary-700 mb-2">Product Launch</p>
              <p class="text-sm text-neutral-700">Start the packaging process 12-16 weeks before your launch date. This gives buffer for samples, approvals, and shipping.</p>
            </div>
            <div>
              <p class="font-medium text-primary-700 mb-2">Reorder Point</p>
              <p class="text-sm text-neutral-700">Reorder when you have 8-10 weeks of inventory remaining. This ensures continuity without rush fees.</p>
            </div>
            <div>
              <p class="font-medium text-primary-700 mb-2">Seasonal Products</p>
              <p class="text-sm text-neutral-700">For holiday seasons, place orders by early September. Chinese New Year (Jan/Feb) can add 2-3 weeks delay.</p>
            </div>
            <div>
              <p class="font-medium text-primary-700 mb-2">First Orders</p>
              <p class="text-sm text-neutral-700">Allow extra time for first orders—sampling and approval takes longer when establishing specifications.</p>
            </div>
          </div>
        </div>
      `
    }
  ];

  const faqs = [
    {
      question: 'Can you guarantee delivery dates?',
      answer: 'We provide estimated timelines based on typical production and shipping. While we strive to meet all dates, factors like customs delays or shipping disruptions can occasionally affect delivery. We keep you updated throughout.'
    },
    {
      question: 'What happens if I need to change my delivery date?',
      answer: 'Contact us as early as possible. Before production starts, we can usually adjust. Once production begins, changes may not be possible, but we can sometimes adjust shipping speed.'
    },
    {
      question: 'Do you offer rush production?',
      answer: 'Yes, for digital printing orders. Rush fees apply and depend on current production load. Contact us with your deadline and we\'ll confirm if rush is possible.'
    },
    {
      question: 'How do holidays affect lead time?',
      answer: 'Chinese New Year (late Jan/Feb) significantly impacts production—plan 2-3 weeks extra. Other holidays have minimal impact. We\'ll advise on any timing concerns during quotation.'
    }
  ];

  return (
    <SEOPageLayout
      title="Lead Time Guide | Production & Shipping Timeline"
      description="Understand Achieve Pack's lead times for sustainable packaging. Production timelines, shipping options, and tips for planning your packaging orders."
      keywords={['lead time', 'production time', 'shipping time', 'packaging timeline', 'delivery schedule']}
      heroTitle="Lead Time Guide"
      heroSubtitle="Plan your packaging orders with confidence. Understand production and shipping timelines for smooth inventory management."
      heroImage={heroImage}
      sections={sections}
      introSummary="Total lead time ranges from 3-4 weeks (rush digital + express) to 10-12 weeks (plate printing + sea freight). This guide helps you understand timelines and plan effectively."
      faqs={faqs}
      ctaTitle="Need a Timeline Estimate?"
      ctaDescription="Tell us about your order and we'll provide a specific timeline."
      ctaButtonText="Get Quote with Timeline"
      ctaButtonUrl="/contact"
    />
  );
};

export default LeadTimePage;
