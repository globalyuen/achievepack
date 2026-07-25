import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
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

// Multilingual Subpage Dictionary
const localSubDict: Record<string, Record<string, string>> = {
  en: {
    directoryLink: 'Directory',
    techSpecTag: '2026 Technical Spec Guide',
    pdfBtn: 'Generate Full Spec Report PDF',
    switchBtn: 'Switch to Recyclable PE Alternative →',
    hookTitle: 'Understanding Your Packaging Constraints',
    hookText: 'We know how frustrating it is when a batch of fresh product loses shelf life because seal integrity failed under humidity or color fidelity shifted during matte varnish printing. Choosing the right structural substrate and closure is about protecting your brand equity.',
    painTitle: '5 Packaging Pain Points & Engineering Solutions',
    notebookTitle: '🔬 From Ryan Wong\'s Engineering Notebook',
    notebookText: 'In testing over 500 packaging production batches, optimizing seal temperature (145°C for 1.2s) with 355ml reference scale specs (2.6" x 4.8" / 66mm x 122mm) reduced burst rates under 0.01%.',
    proofsTitle: 'Technical Structure & Visual Proofs',
    relatedTitle: 'Related Store Products',
    quoteBtn: 'Configure & Quote →',
    viewBoxBtn: 'View Box Specs →'
  },
  'zh-tw': {
    directoryLink: '全選項目錄',
    techSpecTag: '2026 技術規格指南',
    pdfBtn: '一鍵生成 Full Spec PDF 報告',
    switchBtn: '切換至可回收 PE 同款袋型 →',
    hookTitle: '深知您的包裝與生產痛點',
    hookText: '我們明白當新批次產品因濕度影響封口而縮短保質期，或啞光打印出現色差時是多麼令人沮喪。選擇適當的材質結構與封口，是保護品牌聲譽的關鍵。',
    painTitle: '5 大包裝痛點與工程解決方案',
    notebookTitle: '🔬 Ryan Wong 包裝工程師筆記',
    notebookText: '在超過 500 個生產批次測試中，優化封口溫度 (145°C / 1.2秒) 並結合 355ml 參考罐規格 (2.6" x 4.8" / 66mm x 122mm)，將破袋率降至 0.01% 以下。',
    proofsTitle: '技術結構與實物視覺對照',
    relatedTitle: '相關 Store 產品推薦',
    quoteBtn: '選配與即時報價 →',
    viewBoxBtn: '查看盒型規格 →'
  },
  es: {
    directoryLink: 'Directorio',
    techSpecTag: 'Guía de Especificaciones Técnicas 2026',
    pdfBtn: 'Generar Reporte Full Spec PDF',
    switchBtn: 'Cambiar a Alternativa PE Reciclable →',
    hookTitle: 'Comprendiendo sus Desafíos de Empaque',
    hookText: 'Entendemos lo frustrante que es cuando un lote pierde vida útil por fallas en el sellado bajo humedad. Elegir el sustrato y cierre correcto protege el valor de su marca.',
    painTitle: '5 Problemas de Empaque y Soluciones de Ingeniería',
    notebookTitle: '🔬 Cuaderno de Ingeniería de Ryan Wong',
    notebookText: 'En pruebas de más de 500 lotes, optimizar la temperatura de sellado (145°C por 1.2s) con escala de lata de 355ml redujo la tasa de rotura al 0.01%.',
    proofsTitle: 'Estructura Técnica y Pruebas Visuales',
    relatedTitle: 'Productos Relacionados en Tienda',
    quoteBtn: 'Configurar y Cotizar →',
    viewBoxBtn: 'Ver Especificaciones de Cajas →'
  },
  fr: {
    directoryLink: 'Répertoire',
    techSpecTag: 'Guide de Spécifications Techniques 2026',
    pdfBtn: 'Générer Rapport Full Spec PDF',
    switchBtn: 'Passer à l\'Alternative PE Recyclable →',
    hookTitle: 'Comprendre vos Contraintes d\'Emballage',
    hookText: 'Nous savons à quel point il est frustrant lorsqu\'un lot perd sa durée de conservation à cause d\'un problème de scellage. Choisir le bon matériau et la bonne fermeture protège votre marque.',
    painTitle: '5 Problèmes d\'Emballage et Solutions d\'Ingénierie',
    notebookTitle: '🔬 Carnet d\'Ingénierie de Ryan Wong',
    notebookText: 'Sur plus de 500 lots testés, l\'optimisation de la température de scellage (145°C pendant 1.2s) avec canette de 355ml a réduit le taux de rupture sous 0,01%.',
    proofsTitle: 'Structure Technique et Preuves Visuelles',
    relatedTitle: 'Produits Connexes dans la Boutique',
    quoteBtn: 'Configurer & Devis →',
    viewBoxBtn: 'Voir Spécifications Boîtes →'
  }
}

export const DirectorySubpage: React.FC<DirectorySubpageProps> = ({ slugOverride }) => {
  const { slug: paramsSlug } = useParams<{ slug: string }>()
  const slug = slugOverride || paramsSlug || 'compostable-standup-coffee-pouch'
  const { i18n } = useTranslation()
  const lang = (i18n.language || 'en').toLowerCase()
  const sd = localSubDict[lang] || localSubDict.en

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

  const content = (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Article Schema */}
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
      <section className="relative pt-24 pb-14 overflow-hidden border-b border-neutral-800 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            <Link to="/directory" className="hover:underline">{sd.directoryLink}</Link>
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
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 text-xs"
            >
              <Download className="w-4 h-4" />
              <span>{sd.pdfBtn}</span>
            </button>
            <Link
              to="/store/product/eco-standup"
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl border border-neutral-700 transition-all text-xs flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>{sd.switchBtn}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Human-Centric Empathy Hook */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-neutral-900/80 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl">
          <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{sd.hookTitle}</span>
          </h2>
          <p className="text-xs text-neutral-300 leading-relaxed italic">
            "{sd.hookText}"
          </p>
        </div>
      </section>

      {/* 5 Pain Points & Engineering Solutions */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-white mb-6">{sd.painTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { num: '01', problem: 'Oxygen Ingress & Stale Product', solution: 'High-barrier EVOH / Max Metallized layers keeping OTR < 0.5 cc/m²/24hr.' },
            { num: '02', problem: 'Zipper Seal Rupture During Transport', solution: 'Reinforced 6mm side seals & heavy-duty press-to-close zippers.' },
            { num: '03', problem: 'Surface Scratching & Shelf Scuffs', solution: 'Anti-scratch matte lamination coatings preserving vibrant CMYK prints.' },
            { num: '04', problem: 'VFFS Machine Jamming', solution: 'Calibrated film slip coefficient (COF < 0.2) for high-speed automatic filling.' },
            { num: '05', problem: 'High MOQ Barriers for New Launches', solution: 'Digital print runs starting from 100 pcs with multi-SKU printing.' },
          ].map(item => (
            <div key={item.num} className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
              <div className="text-emerald-400 font-mono font-bold text-base mb-1.5">{item.num}</div>
              <h3 className="font-bold text-white text-xs mb-1.5">{item.problem}</h3>
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
          <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>{sd.notebookTitle}</span>
          </h3>
          <p className="text-xs text-neutral-300 leading-relaxed font-mono">
            "{sd.notebookText}"
          </p>
          <div className="mt-3 text-[11px] text-amber-400/80 font-bold">— Ryan Wong, Co-Founder &amp; Packaging Engineer (14+ Years)</div>
        </div>
      </section>

      {/* Technical Visual Proofs */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-white mb-6">{sd.proofsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/surface/ads/a_matte_pouch_correct_6361818.webp" alt="Matte Finish Lamination" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xs text-white mb-1">Matte Finish Surface Treatment</h4>
              <p className="text-[11px] text-neutral-400">Non-reflective tactile surface with enhanced anti-scratch coating.</p>
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp" alt="Press-to-Close Zipper" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xs text-white mb-1">Resealable Press-to-Close Zipper</h4>
              <p className="text-[11px] text-neutral-400">Hermetic seal closure locking in fresh aromas after opening.</p>
            </div>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <img src="/imgs/barrier/ads/a_barrier_levels_7395220.webp" alt="Barrier Levels" className="w-full aspect-video object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-xs text-white mb-1">38 Canonical Barrier Layers</h4>
              <p className="text-[11px] text-neutral-400">Multi-layer barrier preventing moisture and oxygen ingress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Store Products */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-neutral-800">
        <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <Package className="w-5 h-5 text-emerald-400" />
          <span>{sd.relatedTitle}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/store/products/eco-standup-premium.png" alt="Eco Stand-Up Pouch" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-xs mb-1">Eco Digital – Stand Up Pouch</h3>
              <p className="text-[11px] text-neutral-400 mb-4">From US$120 for 1,000 pcs (Digital print with custom size).</p>
            </div>
            <Link to="/store/product/eco-standup" className="w-full py-2 bg-emerald-500 text-neutral-950 font-bold text-xs rounded-lg text-center hover:bg-emerald-600 transition-colors">
              {sd.quoteBtn}
            </Link>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/store/products/eco-boxbottom-premium.png" alt="Eco Box Bottom Pouch" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-xs mb-1">Eco Digital – Box Bottom Pouch</h3>
              <p className="text-[11px] text-neutral-400 mb-4">From US$170 for 1,000 pcs (5-panel box stability).</p>
            </div>
            <Link to="/store/product/eco-boxbottom" className="w-full py-2 bg-emerald-500 text-neutral-950 font-bold text-xs rounded-lg text-center hover:bg-emerald-600 transition-colors">
              {sd.quoteBtn}
            </Link>
          </div>
          <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col justify-between">
            <div>
              <img src="/imgs/illustrated/a_achievepack_custom_boxes_6574270.webp" alt="Custom Rigid Box" className="w-full aspect-video object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-white text-xs mb-1">Custom Rigid Magnetic Gift Box</h3>
              <p className="text-[11px] text-neutral-400 mb-4">Luxury rigid gift box with concealed magnetic closure.</p>
            </div>
            <Link to="/directory/custom-rigid-magnetic-boxes" className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs rounded-lg text-center transition-colors">
              {sd.viewBoxBtn}
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
