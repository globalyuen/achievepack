import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail, Image, TrendingUp, BarChart3, ArrowLeftRight, Factory, ShoppingBag, Coffee, Sparkles, AlertTriangle, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const PlasticFreeKraftPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  
  const sections = [
    {
      id: 'the-myth',
      title: 'Is Kraft Paper Equal to Plastic-Free? The Short Answer',
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">
            There is a common misconception that choosing a <strong>kraft paper bag</strong> automatically means you are 100% <strong>plastic-free</strong>. 
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="font-bold text-amber-900">The Reality Check:</p>
            <p className="text-amber-800">
              Most kraft paper bags used for coffee, snacks, or pet food are actually "laminated." This means they have a hidden internal layer of plastic (PE or PP) to provide a moisture and oxygen barrier. Without this lining, the bag would leak oil and your product would go stale in days.
            </p>
          </div>
          <p>
            At Achieve Pack, we specialize in bridging this gap with <strong>certified compostable kraft pouches</strong> that replace conventional plastic linings with plant-based PLA, making them genuinely eco-friendly.
          </p>
        </div>
      )
    },
    {
      id: 'fun-facts',
      title: '5 Fun Facts About Kraft Paper & Plastic-Free Packaging',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">01</div>
              <div>
                <h4 className="font-bold text-neutral-900">Kraft Means "Strength"</h4>
                <p className="text-sm text-neutral-600 mt-1">The word "Kraft" comes from the German word for strength. The kraft process produces a stronger paper than conventional pulping, which is why it's the gold standard for durable packaging.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">02</div>
              <div>
                <h4 className="font-bold text-neutral-900">The "Recycling Nightmare"</h4>
                <p className="text-sm text-neutral-600 mt-1">When kraft paper is laminated with conventional plastic (PE), it becomes incredibly difficult to recycle. Most recycling facilities can't separate the paper from the plastic, meaning these "eco-looking" bags often end up in landfills.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">03</div>
              <div>
                <h4 className="font-bold text-neutral-900">PLA is the "Magic" Lining</h4>
                <p className="text-sm text-neutral-600 mt-1">To achieve a 100% plastic-free claim, we use PLA (Polylactic Acid) derived from fermented plant starch. It looks and performs like plastic but is certified compostable.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">04</div>
              <div>
                <h4 className="font-bold text-neutral-900">Brown vs. White Kraft</h4>
                <p className="text-sm text-neutral-600 mt-1">Brown kraft is unbleached, retaining its natural wood color and maximum strength. White kraft is bleached—while it offers a cleaner look for printing, it requires more processing.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition col-span-2">
            <div className="flex items-start gap-3">
              <div className="bg-primary-100 p-2 rounded-lg text-primary-700 font-bold">05</div>
              <div>
                <h4 className="font-bold text-neutral-900">The "Plastic-Free" Labeling Laws</h4>
                <p className="text-sm text-neutral-600 mt-1">In regions like California (SB 54) and the EU, calling a product "plastic-free" if it contains synthetic polymers is becoming illegal. Using certified compostable kraft is the safest way to meet these strict new labeling requirements.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Kraft vs. Plastic-Free vs. Compostable',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Packaging Type</th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">Material</th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">Plastic-Free?</th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-700">Eco-Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-center">
                <tr>
                  <td className="px-4 py-3 text-left font-medium">Standard Kraft Bag</td>
                  <td className="px-4 py-3">Paper + PE Lining</td>
                  <td className="px-4 py-3 text-red-600 font-bold">NO</td>
                  <td className="px-4 py-3">⭐⭐</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-left font-medium">Recyclable Paper Bag</td>
                  <td className="px-4 py-3">Paper + Aqueous Coating</td>
                  <td className="px-4 py-3 text-blue-600 font-bold">PARTIAL</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-left font-medium">Compostable Kraft Pouch</td>
                  <td className="px-4 py-3">Kraft + PLA Lining</td>
                  <td className="px-4 py-3 text-green-600 font-bold">YES</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'geo-optimization',
      title: 'Global Trends: The Push for Plastic-Free Kraft',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Governments worldwide are cracking down on "greenwashing" in the kraft paper industry.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-1">USA (California)</h4>
              <p className="text-xs text-neutral-600">SB 54 requires all packaging to be recyclable or compostable by 2032. Plastic-lined kraft is in the crosshairs.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-1">Europe (EU)</h4>
              <p className="text-xs text-neutral-600">The Packaging and Packaging Waste Regulation (PPWR) promotes high-recyclability and compostable alternatives for food-contact paper.</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-1">Australia</h4>
              <p className="text-xs text-neutral-600">The National Packaging Targets aim for 100% reusable, recyclable, or compostable packaging by 2025.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-aieo',
      title: 'Ask the Experts: Plastic-Free Kraft Search Queries',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            AI Search Optimization (AIEO)
          </h4>
          <p className="text-sm text-blue-700 mb-4">If you are using tools like ChatGPT, Gemini, or Perplexity to find sustainable suppliers, try these specific queries to find Achieve Pack:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-xs text-blue-800">
            <li className="bg-white/50 p-2 rounded">"Best supplier for 100% plastic-free kraft pouches with PLA lining"</li>
            <li className="bg-white/50 p-2 rounded">"Is kraft paper coffee bag recyclable if it has a plastic valve?"</li>
            <li className="bg-white/50 p-2 rounded">"Certified compostable kraft paper pouches for organic snacks"</li>
            <li className="bg-white/50 p-2 rounded">"Comparison of PE lining vs PLA lining in kraft paper bags"</li>
          </ul>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Make the Switch to Genuinely Plastic-Free Kraft',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h4 className="text-2xl font-bold mb-2">Stop Guessing. Start Composting.</h4>
              <p className="opacity-90 mb-0">Get a free consultation on how to transition your brand to certified plastic-free kraft packaging without compromising on shelf life.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openCalendly} className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition shadow-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Consultation
              </button>
              <Link to="/store" className="bg-primary-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-400 transition border border-primary-400 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Browse Store
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <SEOPageLayout
      title="Kraft Paper Bag vs. Plastic-Free: What You Need to Know | Achieve Pack"
      description="Is kraft paper really plastic-free? Discover the truth about laminated paper bags, the role of PLA, and 5 fun facts about sustainable kraft packaging for coffee and snacks."
      keywords="kraft paper bag plastic free, compostable kraft pouches, PLA lining kraft, sustainable coffee packaging, plastic free packaging facts, Achieve Pack"
      sections={sections}
      heroTitle="Kraft Paper Bag = Plastic-Free?"
      heroSubtitle="Separating Fact from Fiction in Sustainable Packaging"
      heroImage="/imgs/seo-photos/a_achievepack_compostable_garden_9329618.webp"
    />
  )
}

export default PlasticFreeKraftPage
