import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { ShoppingBag, Package, Zap } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { ThreeFloatingBackground } from '../../components/ThreeFloatingBackground'

import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchProductsPage() {
  const { t } = useTranslation()
  const PRODUCTS = [
    {
      id: 'stand-up',
      name: 'STAND_UP_POUCH',
      description: 'The industry standard for shelf presence. Perfect for snacks, granola, and supplements.',
      problem: 'Your brand needs to stand out, but custom printing usually requires ordering 10,000+ bags and paying expensive plate fees.',
      solution: 'Our digital print Stand Up Pouches let you launch with pro-level packaging from just 500 units—no plate fees, fast turnaround.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      features: ['Self-Standing Design', 'Resealable Zipper', 'Maximum Shelf Appeal'],
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp',
      link: '/packaging/stand-up-pouches'
    },
    {
      id: 'flat-bottom',
      name: 'FLAT_BOTTOM_POUCH',
      description: 'The premium choice for coffee and high-end goods. Box-like stability with flexible benefits.',
      problem: 'Premium coffee and tea need stability on the shelf and distinct branding, which standard pouches often lack.',
      solution: 'Our Flat Bottom Pouch (Box Bottom) offers 5 printable faces and maximum stability—giving your product a top-tier look.',
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      features: ['5 Printable Faces', 'Box-Like Stability', 'Premium Look & Feel'],
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp',
      link: '/packaging/flat-bottom-bags'
    },
    {
      id: 'spouted',
      name: 'SPOUTED_POUCH',
      description: 'The modern alternative to rigid bottles. Lighter, unbreakable, and eco-friendly.',
      problem: 'Selling liquids in bottles is heavy, fragile, and expensive to ship—eating into your margins.',
      solution: 'Switch to flexible Spouted Pouches—lighter, durable, and uses 80% less plastic than rigid bottles. Perfect for refills.',
      price: '$0.90',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      features: ['Leak-Proof Spout', '80% Less Plastic', 'Cheaper Shipping'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp',
      link: '/packaging/spout-pouches'
    },
    {
      id: 'sachet',
      name: 'SACHET',
      description: 'The conversion engine. 3-side seal flat pouches perfect for single-serves and samples.',
      problem: 'Customers want to try before they buy, but generic sample packaging cheapens your brand.',
      solution: 'Our custom-printed 3-Side Seal Sachets provide a premium unboxing experience even for trial sizes. Convert browsers into buyers.',
      price: '$0.40',
      stats: { moq: '500', material: 'ANY', barrier: 'HIGH' },
      features: ['Cost-Effective', 'Mail-Friendly', 'High Conversion'],
      color: 'bg-white', // White
      image: '/3d/2d-pouch/pouch3.webp',
      link: '/packaging/flat-pouches'
    },
    {
      id: 'side-gusset',
      name: 'SIDE_GUSSET_BAG',
      description: 'The classic coffee format. Quad seal structure with expandable side panels.',
      problem: 'Roasters need a classic blocky shape that holds maximum volume without taking up too much width on the shelf.',
      solution: 'Our Side Gusset Bags offer a quad seal for rigid structure and large capacity, with no plate fees.',
      price: '$0.55',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'HIGH' },
      features: ['Classic Coffee Shape', 'High Volume Capacity', 'Quad Seal Rigidity'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/imgs/pouch-shape/side-gusset-pouch-eco.png',
      link: '/packaging/side-gusset-bags'
    }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={t('pouchProductsPage.meta.title')}
        description={t('pouchProductsPage.meta.description')}
      />

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-products"
          >
            <source src="/video/pouch-eco-marketing-videos/use.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-2">
            {t('pouchProductsPage.hero.badge')}
          </div>
          <h1 className="font-black text-6xl md:text-8xl uppercase mb-8 leading-none">
            {t('pouchProductsPage.hero.titleLine1')}<br />{t('pouchProductsPage.hero.titleLine2')}
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            {t('pouchProductsPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-[#F0F0F0] relative overflow-hidden">
        {/* Floating 3D Pouch Background Animation */}
        <ThreeFloatingBackground opacity={0.07} tint={0x8898bb} countPerModel={2} />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12">
            {PRODUCTS.map((product, index) => (
              <NeoCard key={product.id} className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-8 items-center bg-white !p-6`}>
                
                {/* Image Side - Make it full width on mobile, half on desktop */}
                <div className="w-full md:w-1/2">
                   <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${product.color} w-full`}>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-110"
                     />
                     <div className="absolute top-4 left-4 z-20">
                       <NeoBadge color="bg-black text-white">{product.stats.material}_TECH</NeoBadge>
                     </div>
                   </NeoCard>
                </div>

                {/* Content Side - Ensure it wraps correctly */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-black text-3xl md:text-5xl uppercase break-words">{t(`pouchProductsPage.products.${index}.name`, product.name.replace(/_/g, ' '))}</h2>
                  <div className="flex flex-wrap gap-2 font-['JetBrains_Mono'] font-bold text-xs md:text-sm">
                    <span className="bg-black text-white px-2 py-1">{t('pouchProductsPage.labels.moq')} {product.stats.moq}</span>
                    <span className="border-2 border-black px-2 py-1">{t('pouchProductsPage.labels.barrier')} {product.stats.barrier}</span>
                  </div>
                  
                  <div className="space-y-4 font-['JetBrains_Mono'] text-xs md:text-sm border-y-2 border-black py-4">
                    <div>
                      <span className="font-bold block bg-black text-white px-2 inline-block mb-1">{t('pouchProductsPage.labels.theProblem')}</span>
                      <p className="leading-relaxed text-gray-700">{t(`pouchProductsPage.products.${index}.problem`)}</p>
                    </div>
                    <div>
                      <span className="font-bold block bg-[#D4FF00] text-black px-2 inline-block mb-1 border-2 border-black">{t('pouchProductsPage.labels.theSolution')}</span>
                      <p className="leading-relaxed font-bold">{t(`pouchProductsPage.products.${index}.solution`)}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-xs md:text-sm">
                    {product.features.map((feature, fIndex) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 min-w-[16px]" /> {t(`pouchProductsPage.products.${index}.features.${fIndex}`)}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="font-black text-2xl md:text-3xl">{t('pouchProductsPage.labels.from')} {product.price}+</div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      {product.link && (
                        <NeoButton className="w-full sm:w-auto !bg-white !text-black" href={product.link}>
                          {t('pouchProductsPage.labels.viewDetails')}
                        </NeoButton>
                      )}
                      <NeoButton className="w-full sm:w-auto" href="https://calendly.com/30-min-free-packaging-consultancy">
                        {t('pouchProductsPage.labels.bookCall')}
                      </NeoButton>
                    </div>
                  </div>
                </div>

              </NeoCard>
            ))}
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
