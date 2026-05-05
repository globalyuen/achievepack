import React from 'react'
import { DollarSign, Package, Calculator, TrendingDown, BarChart3, CheckCircle, Truck, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'

const PackagingCostGuidePage: React.FC = () => {
  const heroImage = '/imgs/seo-photos/a_packaging_cost_comparison_8724501.jpg'

  const sections = [
    {
      id: 'cost-breakdown',
      title: 'Custom Packaging Cost Breakdown (2025 Prices)',
      icon: <DollarSign className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Custom packaging costs depend on 4 key factors:</strong> material, size, print type, and quantity. Here's what real brands pay in 2025.
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">Package Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">100 pcs</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">1,000 pcs</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">5,000 pcs</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">10,000+ pcs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Stand Up Pouch (Compostable)</td>
                  <td className="px-4 py-3">$0.80–1.20</td>
                  <td className="px-4 py-3">$0.35–0.55</td>
                  <td className="px-4 py-3">$0.20–0.35</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.12–0.22</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Flat Bottom Bag (Recyclable)</td>
                  <td className="px-4 py-3">$1.00–1.50</td>
                  <td className="px-4 py-3">$0.45–0.70</td>
                  <td className="px-4 py-3">$0.25–0.40</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.15–0.28</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">3-Side Seal Sachet</td>
                  <td className="px-4 py-3">$0.50–0.80</td>
                  <td className="px-4 py-3">$0.20–0.35</td>
                  <td className="px-4 py-3">$0.12–0.20</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.08–0.15</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Side Gusset Bag</td>
                  <td className="px-4 py-3">$0.90–1.30</td>
                  <td className="px-4 py-3">$0.40–0.60</td>
                  <td className="px-4 py-3">$0.22–0.35</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.14–0.25</td>
                </tr>
                <tr className="hover:bg-neutral-50 bg-amber-50">
                  <td className="px-4 py-3 font-medium">Custom Corrugated Box</td>
                  <td className="px-4 py-3">$2.00–4.00</td>
                  <td className="px-4 py-3">$1.00–2.00</td>
                  <td className="px-4 py-3">$0.60–1.20</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">$0.40–0.80</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-neutral-500 mt-2">
            *Prices are approximate and vary by material, size, and printing complexity. Contact us for an exact quote.
          </p>
        </div>
      )
    },
    {
      id: 'factors-affecting-cost',
      title: '4 Factors That Determine Your Packaging Cost',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_packaging_cost_digital_factory_8412414.jpg" alt="Modern digital printing press producing high-quality flexible packaging pouches" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">Digital printing allows for lower MOQs without plate fees, significantly impacting cost.</figcaption>
          </figure>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">1. Material</h4>
              </div>
              <p className="text-sm">Compostable materials cost 15-30% more than conventional plastic. Recyclable mono-PE is comparable to traditional options. Bio-PE sits in between.</p>
            </div>
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800">2. Quantity (MOQ)</h4>
              </div>
              <p className="text-sm">The biggest cost driver. 100pcs costs 5-8x more per unit than 10,000pcs. We offer MOQ as low as 100 pieces for digital printing.</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="h-5 w-5 text-amber-600" />
                <h4 className="font-semibold text-amber-800">3. Printing Method</h4>
              </div>
              <p className="text-sm">Digital printing has no plate costs ($0 setup) but higher per-unit price. Plate printing (rotogravure) is cheaper per unit at 5,000+ but has $200-600 plate fees.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">4. Size & Features</h4>
              </div>
              <p className="text-sm">Larger pouches cost more. Add-ons like zippers ($0.01-0.03/pc), valves ($0.02-0.05/pc), tear notches, and hang holes add small increments.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'save-money',
      title: '5 Ways to Reduce Your Packaging Costs',
      icon: <TrendingDown className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <figure className="my-6">
            <img src="/imgs/seo-photos/a_packaging_cost_quality_compare_8712411.jpg" alt="Comparison between cheap poorly printed pouch and high-quality premium custom printed pouch" className="w-full rounded-xl shadow-sm border border-neutral-100" />
            <figcaption className="text-center text-sm text-neutral-500 mt-2">Investing slightly more in quality packaging elevates your brand's perceived value.</figcaption>
          </figure>
          <div className="space-y-3">
            {[
              { title: 'Start with digital, scale to plate', desc: 'Test your design at 1,000 units with digital printing, then switch to plate printing at 5,000+ for 30-50% savings.' },
              { title: 'Choose standard sizes', desc: 'Custom sizes add 1-2 weeks lead time and can cost 10-20% more. Standard sizes ship faster and cost less.' },
              { title: 'Simplify your design', desc: 'Full-bleed printing with heavy ink coverage costs more. White-space designs use less ink and look premium.' },
              { title: 'Consolidate SKUs', desc: 'Instead of 5 different sizes, use 2-3 and adjust fill levels. This increases your quantity per SKU and lowers cost.' },
              { title: 'Plan 3-6 months ahead', desc: 'Rush orders cost 15-30% more. Standard lead time is 3-5 weeks — plan ahead to avoid express shipping charges.' }
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">{tip.title}</h4>
                  <p className="text-sm mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'compare-suppliers',
      title: 'How Achieve Pack Compares to Other Suppliers',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-neutral-200 rounded-xl overflow-hidden">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-primary-800">Achieve Pack</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-600">Generic Supplier</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-600">Alibaba</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Minimum Order</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">100 pcs ✅</td>
                  <td className="px-4 py-3">5,000 pcs</td>
                  <td className="px-4 py-3">10,000 pcs</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Eco Materials</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">Compostable, Recyclable, Bio-PE ✅</td>
                  <td className="px-4 py-3">Limited options</td>
                  <td className="px-4 py-3">Conventional only</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Free Design Help</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">Yes ✅</td>
                  <td className="px-4 py-3">Extra fee</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Lead Time</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">2-5 weeks ✅</td>
                  <td className="px-4 py-3">4-6 weeks</td>
                  <td className="px-4 py-3">6-10 weeks</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Certifications</td>
                  <td className="px-4 py-3 text-primary-700 font-medium">EN13432, ASTM D6400, BPI ✅</td>
                  <td className="px-4 py-3">Varies</td>
                  <td className="px-4 py-3">None verified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: 'How much does custom packaging cost for a small brand?',
      answer: 'For small brands ordering 100-500 pieces with digital printing, expect to pay $0.50-$1.50 per pouch depending on size and material. Compostable stand-up pouches at 1,000 pieces typically cost $0.35-$0.55 each. Prices drop significantly at 5,000+ quantities.'
    },
    {
      question: 'What is the cheapest eco-friendly packaging option?',
      answer: 'Recyclable mono-PE pouches are the most affordable eco option, priced similarly to conventional plastic. 3-side seal sachets in recyclable material start at $0.08-$0.15 per piece at volume. Compostable packaging costs about 15-30% more but offers stronger marketing appeal.'
    },
    {
      question: 'Is there a setup fee for custom printing?',
      answer: 'Digital printing has zero setup fees — you pay only per-unit costs. Plate printing (rotogravure) has one-time plate fees of $200-$600 depending on colors, but the per-unit cost is 30-50% lower at 5,000+ quantities, making it more economical for larger orders.'
    },
    {
      question: 'How much does shipping add to the cost?',
      answer: 'Shipping from our factory to the USA, UK, or EU typically costs $0.01-$0.05 per pouch via sea freight (3-4 weeks) or $0.05-$0.15 per pouch via air (5-7 days). We include shipping quotes in all our proposals so there are no surprises.'
    },
    {
      question: 'Can I order samples before placing a bulk order?',
      answer: 'Yes! We offer free generic material samples and paid custom printed samples (usually $50-$100 for 10-20 pieces with your design). This lets you test fill, check print quality, and verify shelf presence before committing to a larger order.'
    }
  ]

  const relatedLinks = [
    { title: 'Shop Low MOQ Packaging', url: '/products/low-moq-packaging', description: 'Order from 100 pieces' },
    { title: 'Request Free Samples', url: '/free-service', description: 'Try before you buy' },
    { title: 'Pouch Sizing Guide', url: '/knowledge/pouch-sizing', description: 'Find the right size' },
    { title: 'Get a Custom Quote', url: '/contact', description: 'Tailored pricing for your brand' },
  ]

  return (
    <SEOPageLayout
      title="How Much Does Custom Packaging Cost in 2025? | Price Guide"
      description="Complete custom packaging cost breakdown for 2025. Compare prices for compostable pouches, recyclable bags & custom boxes from 100 to 10,000+ pieces. Real prices, no hidden fees."
      keywords={[
        'custom packaging cost',
        'packaging price per unit',
        'eco packaging cost',
        'custom pouch pricing',
        'compostable packaging cost',
        'packaging MOQ pricing',
        'sustainable packaging cost comparison',
        'bulk pouch pricing'
      ]}
      heroTitle="How Much Does Custom Packaging Cost?"
      heroSubtitle="2025 Price Guide — Real Prices for Every Budget"
      heroImage={heroImage}
      heroLogo="/eco-logo/white-bkg/eco-logo-pcr.png"
      heroLogoAlt="Eco Packaging"
      sections={sections}
      introSummary="Wondering how much custom eco-friendly packaging really costs? This guide gives you transparent, real-world prices for stand-up pouches, flat bottom bags, sachets, and boxes — from startup orders of 100 pieces to bulk runs of 10,000+. No sales pitch, just honest numbers."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Get Your Custom Quote"
      ctaDescription="Tell us about your product and quantity — we'll send you an exact price within 24 hours."
      ctaButtonText="Request Free Quote"
      ctaButtonUrl="/contact"
      canonicalUrl="https://achievepack.com/blog/packaging-cost-guide"
      schemaType="Article"
      heroStyle="banner"
    />
  )
}

export default PackagingCostGuidePage
