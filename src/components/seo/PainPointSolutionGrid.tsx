import React from 'react'
import { Link } from 'react-router-dom'
import { getDomain } from '../../utils/domain'
import { AlertCircle, CheckCircle2, Box, Sparkles, Shield, ArrowRight } from 'lucide-react'

export interface PainPointSolutionGridProps {
  pageTitle?: string
  className?: string
}

interface PainPointItem {
  id: string
  problem: string
  impact: string
  solution: string
  feature: string
}

const DEFAULT_PAIN_POINTS: PainPointItem[] = [
  {
    id: '01',
    problem: 'Aroma Loss & Degassing Failure in Speciality Roast',
    impact: 'Beans oxidize quickly, resulting in customer complaints and lost brand value.',
    solution: 'One-Way Eco Degassing Valve + Aluminum-Free High-Barrier Foil',
    feature: 'Preserves CO2 outgassing without admitting oxygen or moisture.'
  },
  {
    id: '02',
    problem: 'Plastic Tax Liability & EU PPWR Compliance Risks',
    impact: 'Non-recyclable multi-layer plastics incur heavy customs tariffs & fines in EU/US.',
    solution: '100% Home Compostable (PLA) or Mono-Material Recyclable PE',
    feature: 'Fully GRS & TÜV OK Compost HOME certified for global distribution.'
  },
  {
    id: '03',
    problem: 'High MOQs & Generic Stock Packaging Stifling DTC Launches',
    impact: 'Small brands forced to buy 10,000+ units or rely on plain generic bags.',
    solution: 'Digital HD Printing with 500-Unit Low MOQs & 3D Interactive Design',
    feature: 'Print multi-SKU designs instantly with zero plate fees.'
  }
]

export const PainPointSolutionGrid: React.FC<PainPointSolutionGridProps> = ({
  pageTitle,
  className = ''
}) => {
  const isPouch = getDomain() === 'pouch'

  const cardClass = isPouch
    ? 'bg-black border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] text-white'
    : 'bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm text-neutral-900'

  const solutionBadge = isPouch
    ? 'inline-flex items-center gap-1 bg-[#D4FF00] border-2 border-black text-black font-black text-xs uppercase px-2.5 py-1 mb-3'
    : 'inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase px-2.5 py-1 rounded-full mb-3'

  return (
    <section className={`my-12 ${className}`}>
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className={`text-xs font-bold uppercase tracking-widest ${isPouch ? 'text-[#D4FF00] bg-black px-3 py-1 border-2 border-black' : 'text-primary-700 bg-primary-50 px-3 py-1 rounded-full'}`}>
          {isPouch ? 'Sustainable Packaging Engineering' : 'Enterprise Packaging Performance'}
        </span>
        <h2 className={`text-2xl md:text-3xl font-black mt-3 ${isPouch ? 'uppercase tracking-tight text-neutral-900' : 'text-neutral-900'}`}>
          {pageTitle ? `Solving Core Packaging Challenges for ${pageTitle}` : 'Core Packaging Challenges & Precision Engineering Solutions'}
        </h2>
        <p className="text-neutral-600 text-sm mt-2 max-w-xl mx-auto">
          Concise B2B technical benchmarks designed to eliminate transit failures, regulatory penalties, and aroma degradation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {DEFAULT_PAIN_POINTS.map((item) => (
          <div key={item.id} className={cardClass}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-bold ${isPouch ? 'text-[#00FFFF]' : 'text-primary-600'}`}>
                CHALLENGE {item.id}
              </span>
              <AlertCircle className={`w-5 h-5 ${isPouch ? 'text-amber-400' : 'text-amber-500'}`} />
            </div>

            <h3 className={`text-lg font-bold mb-2 ${isPouch ? 'text-white' : 'text-neutral-900'}`}>
              {item.problem}
            </h3>

            <p className={`text-xs mb-6 ${isPouch ? 'text-neutral-400 font-mono' : 'text-neutral-500'}`}>
              <strong>Risk:</strong> {item.impact}
            </p>

            <div className={`p-4 ${isPouch ? 'bg-neutral-900 border-2 border-neutral-700' : 'bg-emerald-50/60 border border-emerald-100 rounded-xl'}`}>
              <span className={solutionBadge}>
                <CheckCircle2 className="w-3.5 h-3.5" /> Engineer Solution
              </span>
              <h4 className={`text-sm font-bold ${isPouch ? 'text-[#00FFFF]' : 'text-emerald-950'}`}>
                {item.solution}
              </h4>
              <p className={`text-xs mt-1 ${isPouch ? 'text-neutral-300 font-mono' : 'text-emerald-800'}`}>
                {item.feature}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Domain-specific Action Banner */}
      <div className={`mt-8 p-6 ${isPouch ? 'bg-[#D4FF00] border-4 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : 'bg-gradient-to-r from-primary-900 to-neutral-900 text-white rounded-2xl'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className={`text-lg font-bold ${isPouch ? 'uppercase tracking-tight' : ''}`}>
              {isPouch ? '🌿 Ready for 100% Certified Eco Packaging?' : '💎 Experience 3D Packaging Design & Free Dielines'}
            </h3>
            <p className={`text-xs mt-1 ${isPouch ? 'font-mono text-neutral-800' : 'text-neutral-300'}`}>
              {isPouch ? 'Get custom TÜV OK Compost & Recyclable samples dispatched within 24 hours.' : 'Preview your pouch in 3D WebGL Studio and export production-ready dielines.'}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {isPouch ? (
              <Link
                to="/store"
                className="px-5 py-2.5 bg-black text-white font-black text-xs uppercase border-2 border-black hover:bg-neutral-800 transition-all flex items-center gap-1.5"
              >
                Order Samples <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to="/custom-packaging-studio"
                className="px-5 py-2.5 bg-primary-500 text-white font-bold text-xs rounded-lg hover:bg-primary-600 transition-all flex items-center gap-1.5 shadow-md"
              >
                Launch 3D Studio <Box className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PainPointSolutionGrid
