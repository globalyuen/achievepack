import { Helmet } from 'react-helmet-async'
import { Package, Leaf, Truck, Zap, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchSolutionsPage() {
  const { t } = useTranslation()
  const baseUrl = getBaseUrl()

  const SOLUTIONS = [
    {
      id: 'compostable',
      icon: Leaf,
      color: 'bg-[#D4FF00]',
      image: '/imgs/seo-photos/a_compostable_materials_home_transformation_8840512.webp'
    },
    {
      id: 'recyclable',
      icon: Package,
      color: 'bg-[#00FFFF]',
      image: '/imgs/seo-photos/a_grs_mono_material_luxury_texture_1597149.webp'
    },
    {
      id: 'bio-based',
      icon: Sparkles,
      color: 'bg-[#FF00FF]',
      image: '/imgs/seo-photos/a_pcr_biobased_pouches_workspace_6547751.webp'
    }
  ]

  const USE_CASES = [
    { icon: '☕' },
    { icon: '🍪' },
    { icon: '🐾' },
    { icon: '💊' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('pouchSolutionsPage.meta.title')}</title>
        <meta name="description" content={t('pouchSolutionsPage.meta.description')} />
        <link rel="canonical" href={`${baseUrl}/solutions`} />
        <meta property="og:title" content={t('pouchSolutionsPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchSolutionsPage.meta.ogDescription')} />
        <meta property="og:url" content={`${baseUrl}/solutions`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('pouchSolutionsPage.meta.twitterTitle')} />
        <meta name="twitter:description" content={t('pouchSolutionsPage.meta.twitterDescription')} />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-solutions"
          >
            <source src="/video/pouch-eco-marketing-videos/Environmental.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchSolutionsPage.hero.badge')}</span>
            </div>
            
            <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
              {t('pouchSolutionsPage.hero.titleLine1')}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">{t('pouchSolutionsPage.hero.titleLine2')}</span>
            </h1>

            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                {t('pouchSolutionsPage.hero.terminalLine1')}<br/>
                {t('pouchSolutionsPage.hero.terminalLine2')}<br/>
                {t('pouchSolutionsPage.hero.terminalLine3')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">
                {t('pouchSolutionsPage.hero.ctaConsultation')}
              </NeoButton>
              <NeoButton variant="secondary">{t('pouchSolutionsPage.hero.ctaMaterials')}</NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            {t('pouchSolutionsPage.solutions.title')}<br/>{t('pouchSolutionsPage.solutions.titleLine2')}
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            {t('pouchSolutionsPage.solutions.badge')}
          </div>
        </div>

        <div className="grid gap-12">
          {SOLUTIONS.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${solution.color}`}>
                  <img 
                    src={solution.image} 
                    alt={t(`pouchSolutionsPage.solutions.items.${index}.name`)}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <NeoBadge color="bg-black text-white">{t(`pouchSolutionsPage.solutions.items.${index}.name`)}</NeoBadge>
                  </div>
                </NeoCard>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 border-4 border-black ${solution.color} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-3xl md:text-5xl uppercase">{t(`pouchSolutionsPage.solutions.items.${index}.headline`)}</h3>
                </div>
                
                <p className="font-['Space_Grotesk'] text-xl leading-relaxed">
                  {t(`pouchSolutionsPage.solutions.items.${index}.description`)}
                </p>
                
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {[0, 1, 2, 3].map(benefitIndex => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#22c55e]" /> {t(`pouchSolutionsPage.solutions.items.${index}.benefits.${benefitIndex}`)}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <NeoButton className="text-sm" href="https://calendly.com/30-min-free-packaging-consultancy">
                    {t('pouchSolutionsPage.solutions.getQuote')}
                  </NeoButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            {t('pouchSolutionsPage.useCases.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {USE_CASES.map((useCase, index) => (
              <NeoCard key={index} className="bg-white h-full">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-black text-2xl mb-3 uppercase">{t(`pouchSolutionsPage.useCases.items.${index}.title`)}</h3>
                <p className="font-['Space_Grotesk'] text-lg mb-4 leading-relaxed">
                  {t(`pouchSolutionsPage.useCases.items.${index}.description`)}
                </p>
                <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4">
                  {t('pouchSolutionsPage.useCases.moqLabel')} <span className="font-bold">{t(`pouchSolutionsPage.useCases.items.${index}.moq`)}</span>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard className="bg-[#FF00FF] text-center">
          <h2 className="font-black text-4xl mb-8 uppercase">{t('pouchSolutionsPage.fastFacts.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 font-['JetBrains_Mono'] font-bold text-lg">
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat1Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat1Label')}</div>
            </div>
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat2Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat2Label')}</div>
            </div>
            <div>
              <div className="text-5xl mb-2">{t('pouchSolutionsPage.fastFacts.stat3Value')}</div>
              <div>{t('pouchSolutionsPage.fastFacts.stat3Label')}</div>
            </div>
          </div>
        </NeoCard>
      </section>

    </PouchLayout>
  )
}

