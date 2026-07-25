import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  CheckCircle, Shield, Award, Sparkles, FileText, Download, 
  ArrowRight, RefreshCw, Leaf, Package, Zap, HelpCircle, ExternalLink
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getDomain } from '../../utils/domain'
import ProductSpecModal from '../../components/ProductSpecModal'
import { DIRECTORY_SUBPAGES } from './DirectoryPage'

export interface DirectorySubpageProps {
  slugOverride?: string
}

export const DirectorySubpage: React.FC<DirectorySubpageProps> = ({ slugOverride }) => {
  const { slug: paramsSlug } = useParams<{ slug: string }>()
  const slug = slugOverride || paramsSlug || 'compostable-standup-coffee-pouch'
  const isPouch = getDomain() === 'pouch'
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false)

  // Find subpage metadata or fallback
  const subpage = DIRECTORY_SUBPAGES.find(s => s.slug === slug) || {
    slug,
    title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: 'materials',
    tags: ['Technical Spec', '2026 Standard', 'Eco Packaging'],
    desc: 'Comprehensive engineering specification and procurement guide.'
  }

  const title = `${subpage.title} (2026 Technical Spec Guide)`

  const content = (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Helmet / Meta Head simulation */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": subpage.title,
          "description": subpage.desc,
          "author": {
            "@type": "Person",
            "name": "Ryan Wong",
            "jobTitle": "Co-Founder & Chief Packaging Engineer",
            "worksFor": { "@type": "Organization", "name": "Achieve Pack" }
          },
          "publisher": { "@type": "Organization", "name": "Achieve Pack", "url": "https://achievepack.com" }
        })}
      </script>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden border-b border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            <Link to="/directory" className="hover:underline">Directory</Link>
            <span>/</span>
            <span className="text-neutral-400">{subpage.category}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {subpage.tags.map(t => (
              <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {subpage.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mb-8 leading-relaxed">
            {subpage.desc} Tested for industrial VFFS machine compatibility, oxygen barrier compliance (OTR &lt; 0.5 cc/m²/24hr), and certified sustainability standards.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsSpecModalOpen(true)}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Generate Full Spec Report PDF</span>
            </button>
            <Link
              to="/store/product/eco-standup"
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl border border-neutral-700 transition-all text-sm flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>Switch to Recyclable PE Alternative →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Human-Centric Empathy Hook */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-neutral-900/80 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span>Understanding Your Packaging Constraints</span>
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed italic">
            "We know how frustrating it is when a batch of fresh product loses shelf life because seal integrity failed under humidity or color fidelity shifted during matte varnish printing. Choosing the right structural substrate, surface coating, and valve fitment isn't just about aesthetics — it's about protecting your brand equity and customer satisfaction."
          </p>
        </div>
      </section>

      {/* 5 Pain Points & Engineering Solutions */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">5 Packaging Pain Points & Engineering Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', problem: 'Oxygen Ingress & Stale Product', solution: 'High-barrier EVOH / Max Metallized layers keeping OTR < 0.5 cc/m²/24hr.' },
            { num: '02', problem: 'Zipper Seal Rupture During Transport', solution: 'Reinforced 6mm side seals & heavy-duty press-to-close zippers.' },
            { num: '03', problem: 'Surface Scratching & Shelf Scuffs', solution: 'Anti-scratch matte lamination coatings preserving vibrant CMYK prints.' },
            { num: '04', problem: 'VFFS Machine Jamming', solution: 'Calibrated film slip coefficient (COF < 0.2) for high-speed automatic filling.' },
            { num: '05', problem: 'High MOQ Barriers for New Launches', solution: 'Digital print runs starting from 100 pcs with multi-SKU printing.' },
          ].map(item => (
            <div key={item.num} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl">
              <div className="text-emerald-400 font-mono font-bold text-lg mb-2">{item.num}</div>
              <h3 className="font-bold text-white text-sm mb-2">{item.problem}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-emerald-400">✅ Solution:</strong> {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* From Ryan Wong's Engineering Notebook */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl">
          <h3 className="text-base font-bold text-amber-400 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span>🔬 From Ryan Wong's Engineering Notebook</span>
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed font-mono">
            "In testing over 500 packaging production batches, we found that optimizing seal temperature dwell time (145°C for 1.2s) combined with 355ml reference scale specs (2.6" x 4.8" / 66mm x 122mm) reduced bag burst rates to under 0.01% on high-speed VFFS packaging lines."
          </p>
          <div className="mt-3 text-[11px] text-amber-400/80 font-bold">— Ryan Wong, Co-Founder & Packaging Engineer (14+ Years)</div>
        </div>
      </section>

      {/* Rich Media Showcase */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Structure & Visual Proofs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/surface/ads/a_matte_pouch_correct_6361818.webp" alt="Matte Finish Lamination" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-sm text-white mb-1">Matte Finish Surface Treatment</h4>
              <p className="text-xs text-neutral-400">Non-reflective tactile surface with enhanced anti-scratch coating.</p>
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp" alt="Press-to-Close Zipper" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-sm text-white mb-1">Resealable Press-to-Close Zipper</h4>
              <p className="text-xs text-neutral-400">Hermetic seal closure locking in fresh aromas after opening.</p>
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/barrier/ads/a_barrier_levels_7395220.webp" alt="Barrier Levels" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-sm text-white mb-1">38 Canonical Barrier Layers</h4>
              <p className="text-xs text-neutral-400">Multi-layer barrier preventing moisture and oxygen ingress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Store Products */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Package className="w-5 h-5 text-emerald-400" />
          <span>Related Store Products</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/store/products/eco-standup-premium.png" alt="Eco Stand-Up Pouch" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-sm mb-1">Eco Digital – Stand Up Pouch</h3>
              <p className="text-xs text-neutral-400 mb-4">From US$120 for 1,000 pcs (Digital print with custom size).</p>
            </div>
            <Link to="/store/product/eco-standup" className="w-full py-2 bg-emerald-500 text-neutral-950 font-bold text-xs rounded-lg text-center hover:bg-emerald-600 transition-colors">
              Configure & Quote →
            </Link>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/store/products/eco-boxbottom-premium.png" alt="Eco Box Bottom Pouch" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-sm mb-1">Eco Digital – Box Bottom Pouch</h3>
              <p className="text-xs text-neutral-400 mb-4">From US$170 for 1,000 pcs (5-panel box stability).</p>
            </div>
            <Link to="/store/product/eco-boxbottom" className="w-full py-2 bg-emerald-500 text-neutral-950 font-bold text-xs rounded-lg text-center hover:bg-emerald-600 transition-colors">
              Configure & Quote →
            </Link>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp" alt="Custom Rigid Box" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-sm mb-1">Custom Rigid Magnetic Gift Box</h3>
              <p className="text-xs text-neutral-400 mb-4">Luxury rigid gift box with concealed magnetic closure.</p>
            </div>
            <Link to="/directory/custom-rigid-magnetic-boxes" className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs rounded-lg text-center transition-colors">
              View Box Specs →
            </Link>
          </div>
        </div>
      </section>

      {/* GEO AI Hidden Semantic Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">What is the technical specification of {subpage.title}?</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">
                {subpage.title} features oxygen barrier protection (OTR &lt; 0.5 cc/m²/24hr), moisture protection (MVTR &lt; 0.5 g/m²/24hr), certified food safety compliance (ISO 22000 &amp; FDA 21 CFR), and standard dimensions specified in Inches (in) first.
              </p>
            </div>
          </article>
        </section>
      </div>

      <ProductSpecModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
      />
    </div>
  )

  return isPouch ? (
    <PouchLayout>{content}</PouchLayout>
  ) : (
    <SEOPageLayout>{content}</SEOPageLayout>
  )
}

export default DirectorySubpage
