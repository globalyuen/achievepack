import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Eye, Star, Heart, CheckCircle, Palette, ChevronDown, ArrowRight, Leaf } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'
import ClickableImage from '../../components/ClickableImage'

// Neo-Brutalist Components
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

interface FAQItem {
  q: string
  a: string
}

export default function PouchSurfaceFinishPage() {
  const baseUrl = getBaseUrl()
  const { t } = useTranslation()
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const FINISHES = [
    {
      name: t('pouchSurfaceFinishPage.explore.finishes.matte.name'),
      tagline: t('pouchSurfaceFinishPage.explore.finishes.matte.tagline'),
      desc: t('pouchSurfaceFinishPage.explore.finishes.matte.desc'),
      features: t('pouchSurfaceFinishPage.explore.finishes.matte.features', { returnObjects: true }) as string[] || [],
      bestFor: t('pouchSurfaceFinishPage.explore.finishes.matte.bestFor'),
      price: t('pouchSurfaceFinishPage.explore.finishes.matte.price'),
      color: "bg-emerald-50 border-emerald-900 text-emerald-950",
      icon: Eye
    },
    {
      name: t('pouchSurfaceFinishPage.explore.finishes.gloss.name'),
      tagline: t('pouchSurfaceFinishPage.explore.finishes.gloss.tagline'),
      desc: t('pouchSurfaceFinishPage.explore.finishes.gloss.desc'),
      features: t('pouchSurfaceFinishPage.explore.finishes.gloss.features', { returnObjects: true }) as string[] || [],
      bestFor: t('pouchSurfaceFinishPage.explore.finishes.gloss.bestFor'),
      price: t('pouchSurfaceFinishPage.explore.finishes.gloss.price'),
      color: "bg-emerald-50 border-emerald-900 text-emerald-950",
      icon: Sparkles
    },
    {
      name: t('pouchSurfaceFinishPage.explore.finishes.spot.name'),
      tagline: t('pouchSurfaceFinishPage.explore.finishes.spot.tagline'),
      desc: t('pouchSurfaceFinishPage.explore.finishes.spot.desc'),
      features: t('pouchSurfaceFinishPage.explore.finishes.spot.features', { returnObjects: true }) as string[] || [],
      bestFor: t('pouchSurfaceFinishPage.explore.finishes.spot.bestFor'),
      price: t('pouchSurfaceFinishPage.explore.finishes.spot.price'),
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Palette
    },
    {
      name: t('pouchSurfaceFinishPage.explore.finishes.soft.name'),
      tagline: t('pouchSurfaceFinishPage.explore.finishes.soft.tagline'),
      desc: t('pouchSurfaceFinishPage.explore.finishes.soft.desc'),
      features: t('pouchSurfaceFinishPage.explore.finishes.soft.features', { returnObjects: true }) as string[] || [],
      bestFor: t('pouchSurfaceFinishPage.explore.finishes.soft.bestFor'),
      price: t('pouchSurfaceFinishPage.explore.finishes.soft.price'),
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Heart
    },
    {
      name: t('pouchSurfaceFinishPage.explore.finishes.foil.name'),
      tagline: t('pouchSurfaceFinishPage.explore.finishes.foil.tagline'),
      desc: t('pouchSurfaceFinishPage.explore.finishes.foil.desc'),
      features: t('pouchSurfaceFinishPage.explore.finishes.foil.features', { returnObjects: true }) as string[] || [],
      bestFor: t('pouchSurfaceFinishPage.explore.finishes.foil.bestFor'),
      price: t('pouchSurfaceFinishPage.explore.finishes.foil.price'),
      color: "bg-emerald-100/40 border-emerald-900 text-emerald-950",
      icon: Star
    }
  ]

  const SPEC_MATRIX = [
    {
      metric: t('pouchSurfaceFinishPage.metrics.rows.r1.metric'),
      matte: t('pouchSurfaceFinishPage.metrics.rows.r1.matte'),
      gloss: t('pouchSurfaceFinishPage.metrics.rows.r1.gloss'),
      utility: t('pouchSurfaceFinishPage.metrics.rows.r1.utility')
    },
    {
      metric: t('pouchSurfaceFinishPage.metrics.rows.r2.metric'),
      matte: t('pouchSurfaceFinishPage.metrics.rows.r2.matte'),
      gloss: t('pouchSurfaceFinishPage.metrics.rows.r2.gloss'),
      utility: t('pouchSurfaceFinishPage.metrics.rows.r2.utility')
    },
    {
      metric: t('pouchSurfaceFinishPage.metrics.rows.r3.metric'),
      matte: t('pouchSurfaceFinishPage.metrics.rows.r3.matte'),
      gloss: t('pouchSurfaceFinishPage.metrics.rows.r3.gloss'),
      utility: t('pouchSurfaceFinishPage.metrics.rows.r3.utility')
    },
    {
      metric: t('pouchSurfaceFinishPage.metrics.rows.r4.metric'),
      matte: t('pouchSurfaceFinishPage.metrics.rows.r4.matte'),
      gloss: t('pouchSurfaceFinishPage.metrics.rows.r4.gloss'),
      utility: t('pouchSurfaceFinishPage.metrics.rows.r4.utility')
    },
    {
      metric: t('pouchSurfaceFinishPage.metrics.rows.r5.metric'),
      matte: t('pouchSurfaceFinishPage.metrics.rows.r5.matte'),
      gloss: t('pouchSurfaceFinishPage.metrics.rows.r5.gloss'),
      utility: t('pouchSurfaceFinishPage.metrics.rows.r5.utility')
    }
  ]

  const FAQS: FAQItem[] = t('pouchSurfaceFinishPage.faq.questions', { returnObjects: true }) as FAQItem[] || []

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchSurfaceFinishPage.title')}</title>
        <meta name="description" content={t('pouchSurfaceFinishPage.metaDesc')} />
        <link rel="canonical" href={`${baseUrl}/options/surface-finish`} />
        
        <meta property="og:title" content={t('pouchSurfaceFinishPage.title')} />
        <meta property="og:description" content={t('pouchSurfaceFinishPage.metaDesc')} />
        <meta property="og:url" content={`${baseUrl}/options/surface-finish`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/options/surface-finish-comparison.png`} />
      </Helmet>

      {/* Breadcrumbs Navigation */}
      <nav className="bg-emerald-950/5 border-b-2 border-black py-4 px-6" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium text-emerald-950/80">
          <Link to="/" className="hover:underline hover:text-emerald-800 transition-colors">{t('pouchSurfaceFinishPage.breadcrumb.home')}</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">{t('pouchSurfaceFinishPage.breadcrumb.options')}</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-950 font-bold" aria-current="page">{t('pouchSurfaceFinishPage.breadcrumb.current')}</span>
        </div>
      </nav>

      {/* Hero Section - Soothing Dark Green Botanical Theme */}
      <section className="relative pt-16 pb-24 border-b-4 border-black bg-gradient-to-br from-emerald-50 via-green-50/70 to-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="border-emerald-900 bg-emerald-900 text-white font-bold tracking-wider">
              <Leaf className="w-4 h-4 inline-block mr-1 text-green-300" /> {t('pouchSurfaceFinishPage.hero.badge')}
            </NeoBadge>
            <h1 className="mt-8 font-black text-5xl md:text-7xl leading-tight text-emerald-950">
              {t('pouchSurfaceFinishPage.hero.title')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-900">{t('pouchSurfaceFinishPage.hero.titleColored')}</span>
            </h1>
            <p className="mt-8 text-xl text-emerald-950/80 max-w-4xl mx-auto leading-relaxed">
              {t('pouchSurfaceFinishPage.hero.desc')}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Sparkles className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">{t('pouchSurfaceFinishPage.hero.c1.title')}</h3>
              <p className="text-emerald-950/70 text-sm mb-3">{t('pouchSurfaceFinishPage.hero.c1.desc')}</p>
              <NeoBadge color="emerald">{t('pouchSurfaceFinishPage.hero.c1.badge')}</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Eye className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">{t('pouchSurfaceFinishPage.hero.c2.title')}</h3>
              <p className="text-emerald-950/70 text-sm mb-3">{t('pouchSurfaceFinishPage.hero.c2.desc')}</p>
              <NeoBadge color="emerald">{t('pouchSurfaceFinishPage.hero.c2.badge')}</NeoBadge>
            </NeoCard>
            
            <NeoCard className="text-center bg-white border-2 border-emerald-950/30 hover:shadow-lg transition-shadow">
              <Palette className="w-10 h-10 mx-auto text-emerald-800 mb-4" />
              <h3 className="font-bold text-lg mb-1 text-emerald-950">{t('pouchSurfaceFinishPage.hero.c3.title')}</h3>
              <p className="text-emerald-950/70 text-sm mb-3">{t('pouchSurfaceFinishPage.hero.c3.desc')}</p>
              <NeoBadge color="emerald">{t('pouchSurfaceFinishPage.hero.c3.badge')}</NeoBadge>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Visual Infographic Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
                {t('pouchSurfaceFinishPage.showcase.badge')}
              </NeoBadge>
              <h2 className="font-black text-4xl md:text-5xl text-emerald-950 leading-tight">
                {t('pouchSurfaceFinishPage.showcase.title')}
              </h2>
              <p className="text-lg text-emerald-900/80 leading-relaxed">
                {t('pouchSurfaceFinishPage.showcase.desc')}
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700"><strong>{t('pouchSurfaceFinishPage.showcase.p1')}</strong> {t('pouchSurfaceFinishPage.showcase.p1Val')}</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700"><strong>{t('pouchSurfaceFinishPage.showcase.p2')}</strong> {t('pouchSurfaceFinishPage.showcase.p2Val')}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <NeoCard className="p-2 bg-emerald-50 border-4 border-emerald-900 shadow-[8px_8px_0px_0px_#022c22]">
                <ClickableImage 
                  src="/imgs/options/surface-finish-comparison.png" 
                  alt="Amazon-quality flexible stand-up packaging surface finishes infographic comparing Matte, Gloss, and Spot UV contrast in a dark green theme." 
                  className="w-full object-cover border-2 border-black"
                />
                <div className="p-3 text-center text-xs text-emerald-900/80 font-mono">
                  {t('pouchSurfaceFinishPage.showcase.clickEnlarge')}
                </div>
              </NeoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Finishes Section */}
      <section className="py-24 bg-emerald-50/20 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mb-4">
              {t('pouchSurfaceFinishPage.explore.title')}
            </h2>
            <p className="text-xl text-emerald-900/70">
              {t('pouchSurfaceFinishPage.explore.desc')}
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {FINISHES.map((finish, index) => (
              <NeoCard key={index} className={`border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22] ${finish.color}`}>
                <div className="grid lg:grid-cols-5 gap-8 items-start">
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white border-2 border-emerald-900">
                        <finish.icon className="w-8 h-8 text-emerald-950" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl text-emerald-950">{finish.name}</h3>
                        <p className="text-sm font-semibold text-emerald-900/70">{finish.tagline}</p>
                      </div>
                    </div>
                    <p className="text-emerald-950/80 text-base leading-relaxed">{finish.desc}</p>
                    
                    <div className="grid sm:grid-cols-3 gap-3 pt-2">
                      {finish.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                          <span className="text-xs font-medium text-emerald-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2 bg-white/70 border-2 border-emerald-900/30 p-5 space-y-4">
                    <div>
                      <p className="text-[10px] font-black text-emerald-950/60 uppercase tracking-widest mb-1">{t('pouchSurfaceFinishPage.explore.commercialApp')}</p>
                      <p className="font-bold text-sm text-emerald-950">{finish.bestFor}</p>
                    </div>
                    <div className="pt-3 border-t border-emerald-900/20 flex justify-between items-center">
                      <div>
                        <p className="text-[10px] font-black text-emerald-950/60 uppercase tracking-widest">{t('pouchSurfaceFinishPage.explore.baseCost')}</p>
                        <p className="font-black text-lg text-emerald-900">{finish.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technical-to-Purchasing Specification Matrix */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
              {t('pouchSurfaceFinishPage.metrics.badge')}
            </NeoBadge>
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mt-4 mb-4">
              {t('pouchSurfaceFinishPage.metrics.title')}
            </h2>
            <p className="text-lg text-emerald-900/70 max-w-3xl mx-auto">
              {t('pouchSurfaceFinishPage.metrics.desc')}
            </p>
          </div>

          <div className="overflow-x-auto border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-950 text-white border-b-2 border-emerald-900">
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">{t('pouchSurfaceFinishPage.metrics.thParam')}</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">{t('pouchSurfaceFinishPage.metrics.thMatte')}</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider border-r border-emerald-900/30">{t('pouchSurfaceFinishPage.metrics.thGloss')}</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider">{t('pouchSurfaceFinishPage.metrics.thSignif')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/20 text-sm">
                {SPEC_MATRIX.map((row, index) => (
                  <tr key={index} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="p-4 font-bold text-emerald-950 border-r border-emerald-900/20 font-mono bg-emerald-50/10">{row.metric}</td>
                    <td className="p-4 text-gray-700 border-r border-emerald-900/20 font-mono">{row.matte}</td>
                    <td className="p-4 text-gray-700 border-r border-emerald-900/20 font-mono">{row.gloss}</td>
                    <td className="p-4 text-emerald-900 font-medium">{row.utility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive 6-Pillar FAQ Accordion */}
      <section className="py-24 bg-emerald-50/20 border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="emerald" className="bg-emerald-900 border-emerald-900 text-white font-bold">
              {t('pouchSurfaceFinishPage.faq.badge')}
            </NeoBadge>
            <h2 className="font-black text-4xl md:text-5xl text-emerald-950 mt-4 mb-4">
              {t('pouchSurfaceFinishPage.faq.title')}
            </h2>
            <p className="text-lg text-emerald-900/70">
              {t('pouchSurfaceFinishPage.faq.desc')}
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="border-2 border-emerald-900 bg-white hover:border-emerald-700 transition-colors shadow-[4px_4px_0px_0px_#022c22] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-bold text-lg text-emerald-950">{faq.q}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-emerald-900 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 pt-0 border-t border-emerald-900/20 text-gray-700 leading-relaxed text-sm bg-emerald-50/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA B2B Wholesale / Sample Order Section */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="font-black text-4xl md:text-6xl text-white">
            {t('pouchSurfaceFinishPage.cta.title')} <br/>
            <span className="text-green-300">{t('pouchSurfaceFinishPage.cta.titleColored')}</span>
          </h2>
          <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
            {t('pouchSurfaceFinishPage.cta.desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-6">
            <NeoCard className="bg-emerald-900 border-2 border-emerald-800 text-left p-6 flex flex-col justify-between shadow-none text-white">
              <div>
                <NeoBadge color="emerald" className="bg-green-700 border-green-600 text-white font-bold text-xs uppercase mb-4">
                  {t('pouchSurfaceFinishPage.cta.d2cBadge')}
                </NeoBadge>
                <h3 className="font-bold text-xl mb-2 text-white">{t('pouchSurfaceFinishPage.cta.d2cTitle')}</h3>
                <p className="text-sm text-green-100/70 mb-6">
                  {t('pouchSurfaceFinishPage.cta.d2cDesc')}
                </p>
              </div>
              <NeoButton 
                variant="primary" 
                className="w-full text-center py-3 bg-green-500 hover:bg-green-400 text-emerald-950 border-emerald-950 font-bold justify-center"
              >
                {t('pouchSurfaceFinishPage.cta.d2cBtn')} <ArrowRight className="w-4 h-4 ml-2" />
              </NeoButton>
            </NeoCard>

            <NeoCard className="bg-emerald-900/40 border-2 border-emerald-800/80 text-left p-6 flex flex-col justify-between shadow-none text-white">
              <div>
                <NeoBadge color="emerald" className="bg-emerald-800 border-emerald-700 text-white font-bold text-xs uppercase mb-4">
                  {t('pouchSurfaceFinishPage.cta.b2bBadge')}
                </NeoBadge>
                <h3 className="font-bold text-xl mb-2 text-white">{t('pouchSurfaceFinishPage.cta.b2bTitle')}</h3>
                <p className="text-sm text-green-100/70 mb-6">
                  {t('pouchSurfaceFinishPage.cta.b2bDesc')}
                </p>
              </div>
              <a 
                href="https://www.achievepack.com/features/surface-finish" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <NeoButton 
                  variant="dark" 
                  className="w-full text-center py-3 border-green-400 text-green-300 hover:bg-emerald-900/50 font-bold justify-center"
                >
                  {t('pouchSurfaceFinishPage.cta.b2bBtn')} <ArrowRight className="w-4 h-4 ml-2" />
                </NeoButton>
              </a>
            </NeoCard>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
