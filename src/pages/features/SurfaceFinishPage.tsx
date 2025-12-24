import React, { useState } from 'react'
import { Sparkles, Eye, Package, CheckCircle, Clock, Target, Shield, Calendar, Mail, Download, X, ChevronLeft, ChevronRight, Image } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

const surfaceGallery = [
  { src: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp', title: 'Six Premium Finishes', desc: 'Complete overview of all available surface treatment options' },
  { src: '/imgs/surface/ads/a_gloss_finish_detail_5685549.webp', title: 'Gloss Finish Detail', desc: 'High-shine reflective surface for maximum color vibrancy' },
  { src: '/imgs/surface/ads/a_gloss_pouch_correct_5078762.webp', title: 'Gloss Pouch Example', desc: 'Full gloss lamination creating eye-catching shelf presence' },
  { src: '/imgs/surface/ads/a_matte_finish_detail_7483118.webp', title: 'Matte Finish Detail', desc: 'Smooth non-reflective surface for elegant sophisticated look' },
  { src: '/imgs/surface/ads/a_matte_pouch_correct_6361818.webp', title: 'Matte Pouch Example', desc: 'Sophisticated matte finish perfect for premium brands' },
  { src: '/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp', title: 'Metallic Gold Effect', desc: 'Luxurious gold metallic finish for premium product positioning' },
  { src: '/imgs/surface/ads/a_softtouch_pouch_correct_7961783.webp', title: 'Soft Touch Finish', desc: 'Velvety tactile surface creating sensory brand appeal' },
  { src: '/imgs/surface/ads/a_embossed_navy_9933981.webp', title: 'Embossed Texture', desc: 'Raised patterns creating dimensional brand experience' },
  { src: '/imgs/surface/ads/a_foil_green_charcoal_7632386.webp', title: 'Foil Stamping', desc: 'Hot foil accents in gold, silver, or custom metallic colors' },
  { src: '/imgs/surface/ads/a_standup_pouches_main_6878547.webp', title: 'Stand-Up Collection', desc: 'Various surface finishes applied to standing pouch format' },
];

const SurfaceFinishPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = surfaceGallery.length - 1
    if (newIndex >= surfaceGallery.length) newIndex = 0
    setGalleryEnlarged({ src: surfaceGallery[newIndex].src, index: newIndex })
  }
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you want to <strong>elevate your packaging shelf presence</strong> with premium finishes while staying sustainable—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Premium Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Soft-touch, spot UV, hot foil</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Organic & Natural</h4>
              <p className="text-sm text-neutral-600 mt-1">Matte finish, kraft look</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Retail Ready</h4>
              <p className="text-sm text-neutral-600 mt-1">Gloss finish, vibrant colors</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: 'Surface Finish Options for Eco-Friendly Pouches',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Transform your sustainable packaging into a premium shelf presence with our range of surface finishes.</strong> From soft-touch tactile coatings to eye-catching spot UV, Achieve Pack offers finishing options that elevate your brand while maintaining eco-credentials.
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mt-6">Available Surface Finishes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Matte lamination</strong> – Sophisticated, non-reflective finish</li>
            <li><strong>Gloss lamination</strong> – Vibrant colors and high shine</li>
            <li><strong>Soft-touch coating</strong> – Velvety tactile experience</li>
            <li><strong>Spot UV</strong> – Selective gloss highlights</li>
            <li><strong>Hot foil stamping</strong> – Metallic accents and logos</li>
          </ul>
        </div>
      )
    },
    {
      id: 'visual-gallery',
      title: 'Surface Finish Gallery',
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore our range of premium surface finishes. Click any image to enlarge:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {surfaceGallery.map((img, index) => (
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
      id: 'lamination',
      title: 'Lamination Options',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">Gloss Lamination</h4>
              <ul className="text-sm space-y-1">
                <li>• Maximum color vibrancy</li>
                <li>• High light reflection</li>
                <li>• Easy to clean surface</li>
                <li>• Best for: Food, beverages</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Matte Lamination</h4>
              <ul className="text-sm space-y-1">
                <li>• Sophisticated, elegant look</li>
                <li>• Reduced glare</li>
                <li>• Fingerprint resistant</li>
                <li>• Best for: Premium, organic</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Soft-Touch Coating</h4>
              <ul className="text-sm space-y-1">
                <li>• Velvety tactile feel</li>
                <li>• Premium perception</li>
                <li>• Scuff-resistant</li>
                <li>• Best for: Luxury, cosmetics</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'special-effects',
      title: 'Special Effect Finishes',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Elevate your packaging with premium finishing effects:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Spot UV Varnish</h4>
              <p className="text-sm text-neutral-600 mb-2">Apply high-gloss coating to specific areas for contrast and emphasis.</p>
              <ul className="text-sm space-y-1">
                <li>• Highlight logos and text</li>
                <li>• Create texture patterns</li>
                <li>• Combine with matte base</li>
                <li>• Adds $0.02-0.05/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Hot Foil Stamping</h4>
              <p className="text-sm text-neutral-600 mb-2">Metallic foil transfer for premium brand elements.</p>
              <ul className="text-sm space-y-1">
                <li>• Gold, silver, copper, holographic</li>
                <li>• Logos and borders</li>
                <li>• Certificate/award seals</li>
                <li>• Adds $0.05-0.15/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Embossing/Debossing</h4>
              <p className="text-sm text-neutral-600 mb-2">Raised or recessed 3D patterns on the pouch surface.</p>
              <ul className="text-sm space-y-1">
                <li>• Tactile brand logos</li>
                <li>• Texture patterns</li>
                <li>• Combine with foil</li>
                <li>• Adds $0.03-0.08/unit</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-900 mb-2">Registered Metallics</h4>
              <p className="text-sm text-neutral-600 mb-2">Metallic ink effects printed in registration with design.</p>
              <ul className="text-sm space-y-1">
                <li>• Full metallic panels</li>
                <li>• Gradient metallic effects</li>
                <li>• More economical than foil</li>
                <li>• Included in plate printing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Finish Comparison',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-3 border">Finish</th>
                  <th className="text-left p-3 border">Look</th>
                  <th className="text-left p-3 border">Feel</th>
                  <th className="text-left p-3 border">Best For</th>
                  <th className="text-left p-3 border">Cost Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border font-medium">Gloss</td><td className="p-3 border">Shiny, vibrant</td><td className="p-3 border">Smooth</td><td className="p-3 border">Food, snacks</td><td className="p-3 border text-green-600">Base cost</td></tr>
                <tr><td className="p-3 border font-medium">Matte</td><td className="p-3 border">Elegant, subtle</td><td className="p-3 border">Smooth</td><td className="p-3 border">Premium, organic</td><td className="p-3 border text-green-600">Base cost</td></tr>
                <tr><td className="p-3 border font-medium">Soft-Touch</td><td className="p-3 border">Rich, premium</td><td className="p-3 border">Velvety</td><td className="p-3 border">Luxury, cosmetics</td><td className="p-3 border">+10-15%</td></tr>
                <tr><td className="p-3 border font-medium">Spot UV</td><td className="p-3 border">Contrast highlights</td><td className="p-3 border">Textured</td><td className="p-3 border">Branding emphasis</td><td className="p-3 border">+$0.02-0.05/unit</td></tr>
                <tr><td className="p-3 border font-medium">Hot Foil</td><td className="p-3 border">Metallic shine</td><td className="p-3 border">Smooth metallic</td><td className="p-3 border">Luxury, awards</td><td className="p-3 border">+$0.05-0.15/unit</td></tr>
              </tbody>
            </table>
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
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-sm text-neutral-600">Finish Options</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500</div>
              <div className="text-sm text-neutral-600">Min Order (Digital)</div>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5,000</div>
              <div className="text-sm text-neutral-600">Min Order (Foil/UV)</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Which finish for my brand?"</h4>
                  <p className="text-sm text-neutral-600">Free design consultation to recommend finishes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Are finishes eco-friendly?"</h4>
                  <p className="text-sm text-neutral-600">Yes, water-based coatings for compostable pouches</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"MOQ for special finishes?"</h4>
                  <p className="text-sm text-neutral-600">500 for digital, 5,000 for foil/UV</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I see samples?"</h4>
                  <p className="text-sm text-neutral-600">Free finish samples for evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Sparkles className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Surface Finish Quote" className="block w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test finishes first</p>
              <Link to="/contact" className="block w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Can I combine multiple finishes on one pouch?",
      answer: "Yes! Popular combinations include matte lamination + spot UV for contrast, or soft-touch + hot foil for luxury. We can help you design the optimal finish combination for your brand positioning."
    },
    {
      question: "Are special finishes available on compostable pouches?",
      answer: "Matte and gloss lamination are available on compostable materials. However, some special effects like hot foil require testing for compostability. We recommend water-based coatings for certified compostable packaging."
    },
    {
      question: "What is the minimum order for spot UV or hot foil?",
      answer: "Special finishes like spot UV and hot foil require plate printing (5,000+ MOQ) as they involve additional tooling. For smaller orders, we recommend metallic inks which can be done with digital printing."
    },
    {
      question: "Does soft-touch coating affect food safety?",
      answer: "Our soft-touch coating is applied to the exterior surface only and is FDA-compliant. The interior food-contact layer remains unaffected and meets all food safety standards."
    }
  ]

  const relatedLinks = [
    { title: "Plate Printing", url: "/printing/plate-printing", description: "Required for special finishes" },
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Complete your pouch design" },
    { title: "Stand-Up Pouches", url: "/packaging/stand-up-pouches", description: "Popular format for premium finishes" }
  ]

  return (
    <>
      <SEOPageLayout
        title={t('seoPages.pages.surfaceFinish.title')}
        description="Premium surface finishes for eco-friendly pouches. Matte, gloss, soft-touch coating, spot UV, hot foil stamping, and embossing options for sustainable packaging."
        keywords={['pouch finish options', 'matte packaging', 'soft touch coating', 'spot UV pouches', 'hot foil packaging', 'premium pouch finishes']}
        canonicalUrl="https://achievepack.com/features/surface-finish"
        heroTitle={t('seoPages.pages.surfaceFinish.heroTitle')}
        heroSubtitle={t('seoPages.pages.surfaceFinish.heroSubtitle')}
        heroImage="/imgs/seo-photos/a_finishing_options_premium_showcase_3613860.webp"
        heroImageAlt="Premium surface finishes on eco-friendly pouches"
        introSummary={t('seoPages.pages.surfaceFinish.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.surfaceFinish.cta.title')}
        ctaDescription={t('seoPages.pages.surfaceFinish.cta.description')}
        ctaButtonText={t('seoPages.pages.surfaceFinish.cta.button')}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"><X className="h-8 w-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2"><ChevronLeft className="h-10 w-10" /></button>
          <img src={galleryEnlarged.src} alt={surfaceGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2"><ChevronRight className="h-10 w-10" /></button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{surfaceGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{surfaceGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {surfaceGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SurfaceFinishPage
