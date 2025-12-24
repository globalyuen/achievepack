import React, { useState } from 'react'
import { Shield, Layers, Package, CheckCircle, Clock, Image, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'

const mediumBarrierGallery = [
  { src: '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp', title: 'Barrier Technology Overview', desc: 'Eco-friendly barrier solutions for balanced protection' },
  { src: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', title: 'Barrier Level Chart', desc: 'Medium barrier provides 6-12 months protection' },
  { src: '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp', title: 'Kraft Paper Options', desc: 'Paper-based solutions with medium barrier properties' },
  { src: '/imgs/barrier/ads/a_transparent_options_3839456.webp', title: 'Transparent Options', desc: 'Clear films with medium barrier for product visibility' },
  { src: '/imgs/barrier/ads/a_application_scenarios_2234685.webp', title: 'Application Scenarios', desc: 'Coffee beans, nuts, pet food, and protein powders' },
  { src: '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp', title: 'Eco Value Proposition', desc: 'Sustainable medium barrier without compromising protection' },
];

const MediumBarrierPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.mediumBarrier'
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = mediumBarrierGallery.length - 1
    if (newIndex >= mediumBarrierGallery.length) newIndex = 0
    setGalleryEnlarged({ src: mediumBarrierGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'overview',
      title: 'Medium Barrier Packaging (6-12 Months Shelf Life)',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Medium barrier packaging provides balanced protection with 6-12 months shelf life.</strong> The sweet spot for most food products, combining good barrier properties with excellent sustainability credentials.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">Technical Specifications</h4>
            <ul className="text-sm space-y-1 text-blue-700">
              <li>• <strong>OTR:</strong> 5-20 cc/m²/day</li>
              <li>• <strong>MVTR:</strong> 2-5 g/m²/day</li>
              <li>• <strong>Shelf Life:</strong> 6-12 months typical</li>
              <li>• <strong>Sustainability:</strong> Recyclable mono-materials available</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Medium Barrier Solutions Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our medium barrier packaging solutions. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {mediumBarrierGallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setGalleryEnlarged({ src: img.src, index })}
                className="text-left bg-white rounded-xl border border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-lg group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-3">
                  <h5 className="font-semibold text-sm text-neutral-800 mb-1">{img.title}</h5>
                  <p className="text-xs text-neutral-600 line-clamp-2">{img.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Medium Barrier Material Options',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Mono-PE (Recyclable)</h4>
              <p className="text-sm mb-3">Single material polyethylene structure. Widely recyclable.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ 100% PE recyclable</li>
                <li>✓ Excellent seal strength</li>
                <li>✓ Good moisture barrier</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Bio-PE (Sugarcane-Based)</h4>
              <p className="text-sm mb-3">Plant-based polyethylene from renewable sugarcane.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Carbon-negative material</li>
                <li>✓ Same performance as fossil PE</li>
                <li>✓ Recyclable in PE streams</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">PCR Plastic (30-100%)</h4>
              <p className="text-sm mb-3">Post-consumer recycled content for circular economy.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Up to 100% recycled content</li>
                <li>✓ GRS certified available</li>
                <li>✓ Reduces virgin plastic use</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Metallized Kraft</h4>
              <p className="text-sm mb-3">Paper with metallized layer for enhanced protection.</p>
              <ul className="text-xs space-y-1 text-neutral-600">
                <li>✓ Premium natural look</li>
                <li>✓ Good oxygen barrier</li>
                <li>✓ Partially recyclable</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Ideal Product Applications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Medium barrier packaging is perfect for:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">☕</div>
              <h5 className="font-semibold text-sm">Roasted Coffee Beans</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥜</div>
              <h5 className="font-semibold text-sm">Nuts & Seeds</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🐕</div>
              <h5 className="font-semibold text-sm">Pet Food & Treats</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">💪</div>
              <h5 className="font-semibold text-sm">Protein Powders</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🥣</div>
              <h5 className="font-semibold text-sm">Breakfast Cereals</h5>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl mb-2">🍫</div>
              <h5 className="font-semibold text-sm">Chocolate & Confections</h5>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Why Choose Medium Barrier?',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Balanced Performance</h4>
                <p className="text-sm">Optimal protection for most food products</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Recyclable Options</h4>
                <p className="text-sm">Mono-PE and Bio-PE are widely recyclable</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Cost-Effective</h4>
                <p className="text-sm">Great value for extended shelf life needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Versatile Applications</h4>
                <p className="text-sm">Suitable for the widest range of products</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'order',
      title: 'Order Information',
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Minimum Order</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15-20</div>
              <div className="text-sm text-neutral-600">Days Lead Time</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Free</div>
              <div className="text-sm text-neutral-600">Barrier Testing</div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const relatedLinks = [
    { title: "Low Barrier Options", url: "/features/low-barrier", description: "3-6 month protection" },
    { title: "High Barrier Options", url: "/features/high-barrier", description: "12-24 month protection" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "100% recyclable material" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['medium barrier packaging', 'recyclable pouches', 'mono-PE packaging', 'bio-PE pouches', 'coffee packaging', 'pet food packaging']}
        canonicalUrl="https://achievepack.com/features/medium-barrier"
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage="/imgs/seo-photos/a_achievepack_medium_barrier_pantry_7988653.webp"
        heroImageAlt="Medium barrier recyclable packaging for pantry products"
        introSummary={t(`${p}.introSummary`)}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t(`${p}.cta.title`)}
        ctaDescription={t(`${p}.cta.description`)}
        ctaButtonText={t(`${p}.cta.button`)}
        ctaButtonUrl="/contact"
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={mediumBarrierGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{mediumBarrierGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{mediumBarrierGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {mediumBarrierGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MediumBarrierPage
