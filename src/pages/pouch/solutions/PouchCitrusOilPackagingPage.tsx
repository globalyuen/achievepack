import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { Beaker, Shield, AlertTriangle, ArrowRight, Sparkles, CheckCircle, Package } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { getBaseUrl } from '../../../utils/domain'

export default function PouchCitrusOilPackagingPage() {
  const { t } = useTranslation()

  const baseUrl = getBaseUrl()

  const OPTION_CARDS = [
    {
      id: 'bottle-sachet',
      title: 'BOTTLE_FOIL_SACHET',
      badge: t('seoPages.pages.pouchCitrusOilPackaging.bestValueMvp'),
      badgeColor: 'cyan',
      description: t('seoPages.pages.pouchCitrusOilPackaging.anEyecatchingSpecialtyBottleshaped'),
      features: [
        'Holds ~5g to 35g product',
        'Foil core blocks all terpenes',
        'Tear notch for easy unboxing',
        'MOQ from just 100 units!'
      ],
      ctaText: t('seoPages.pages.pouchCitrusOilPackaging.shopSachetsFrom006'),
      ctaUrl: '/store/product/bottle-shape-sachet-bag',
      image: '/taobao/bottle-shape-sachet-bag/O1CN01q5cziX1wI7uDjUFyO_--1816946284-jpg_.webp',
      color: 'bg-white'
    },
    {
      id: 'foil-capsule',
      title: 'FOIL_CAPSULE_MVP',
      badge: t('seoPages.pages.pouchCitrusOilPackaging.premiumGifting'),
      badgeColor: 'amber',
      description: t('seoPages.pages.pouchCitrusOilPackaging.plasticfreePureAluminumCapsules'),
      features: [
        'Compact 40ml custom dosage',
        'Skincare-grade metallic look',
        'Pairs with custom boxes'
      ],
      ctaText: t('seoPages.pages.pouchCitrusOilPackaging.customCapsuleRfq'),
      ctaUrl: '/store',
      image: '/imgs/materials/citrus_foil_capsule.png',
      color: 'bg-white'
    },
    {
      id: 'recyclable-spout',
      title: 'RECYCLABLE_SPOUT_POUCH',
      badge: t('seoPages.pages.pouchCitrusOilPackaging.ecoRefillHub'),
      badgeColor: 'lime',
      description: t('seoPages.pages.pouchCitrusOilPackaging.aTransparentMonopeStanding'),
      features: [
        'High-density EVOH terpene barrier',
        'Single-material recyclable stream',
        'Lightweight, eco-conscious story'
      ],
      ctaText: t('seoPages.pages.pouchCitrusOilPackaging.shopRecyclableMoq500'),
      ctaUrl: '/store/product/eco-standup',
      image: '/imgs/materials/citrus_clear_spout_pouch.png',
      color: 'bg-white'
    },
    {
      id: 'biope-spout',
      title: 'BIO_PE_FOIL_POUCH',
      badge: t('seoPages.pages.pouchCitrusOilPackaging.sugarcaneShield'),
      badgeColor: 'magenta',
      description: t('seoPages.pages.pouchCitrusOilPackaging.organicSugarcanederivedPolyethylenePaired'),
      features: [
        ' sugarcane bio-materials',
        'Ultimate shelf life protection',
        'Reinforced puncture defense'
      ],
      ctaText: t('seoPages.pages.pouchCitrusOilPackaging.buyHighbarrierSpouts'),
      ctaUrl: '/store/product/spouted-foil-pouch',
      image: '/imgs/materials/citrus_biope_spout_pouch.png',
      color: 'bg-white'
    }
  ]

  const CHEMICAL_COMPATIBILITIES = [
    {
      property: "Material Core",
      sachet: "Matte Alum Foil",
      capsule: "Molded Aluminum",
      monoPe: "Co-Extruded Mono PE",
      bioPe: " Sugarcane PE"
    },
    {
      property: "D-Limonene Def.",
      sachet: "★★★★★ (Zero loss)",
      capsule: "★★★★★ (Zero loss)",
      monoPe: "★★★☆☆ (EVOH coated)",
      bioPe: "★★★★★ (Ultimate shield)"
    },
    {
      property: "Water Vapor Barrier",
      sachet: "★★★★★",
      capsule: "★★★★★",
      monoPe: "★★★★☆",
      bioPe: "★★★★★"
    },
    {
      property: "Sustainability",
      sachet: "FSC certified",
      capsule: "Plastic-free",
      monoPe: "Recyclable mono-PE",
      bioPe: "Plant-derived Sugarcane"
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('seoPages.pages.pouchCitrusOilPackaging.citrusOilPackagingLow')}</title>
        <meta name="description" content="Launch your liquid citrus oil or beauty brand with premium eco-friendly spouted pouches, foil capsules, and bottle-shaped sachets from just 100 pieces. Leak-proof and certified." />
        <link rel="canonical" href={`${baseUrl}/solutions/citrus-oil-packaging`} />
        <meta property="og:title" content="Citrus Oil & Cosmetics Packaging | Low MOQ | Pouch.eco" />
        <meta property="og:description" content="Compare bottle sachets, foil capsules, and recyclable mono-PE spout pouches designed for active botanical oils." />
        <meta property="og:url" content={`${baseUrl}/solutions/citrus-oil-packaging`} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-16 pb-24 border-b-4 border-black overflow-hidden bg-[#F0F0F0]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
          <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-['JetBrains_Mono'] font-bold text-sm">LAUNCH_SOLUTIONS_05</span>
          </div>

          <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
            {t('seoPages.pages.pouchCitrusOilPackaging.citrusOil')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">{t('seoPages.pages.pouchCitrusOilPackaging.packaging')}</span>
          </h1>

          <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto text-left font-['JetBrains_Mono'] space-y-2">
            <p className="font-bold text-base md:text-lg">
              {t('seoPages.pages.pouchCitrusOilPackaging.gtProblemActiveDlimonene')}
            </p>
            <p className="font-bold text-base md:text-lg">
              {t('seoPages.pages.pouchCitrusOilPackaging.gtResponse5Engineered')}
            </p>
            <p className="font-bold text-base md:text-lg">
              {t('seoPages.pages.pouchCitrusOilPackaging.gtAccessibilityLaunchWith')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="primary">
              {t('seoPages.pages.pouchCitrusOilPackaging.bookTechConsult')}
            </NeoButton>
            <NeoButton to="/products" variant="secondary">
              {t('seoPages.pages.pouchCitrusOilPackaging.browseStore')}
            </NeoButton>
          </div>
        </div>
      </section>

      {/* Terpene Chemical Insight Warning card */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto">
        <NeoCard color="bg-amber-100" className="border-4 border-black">
          <h2 className="font-black text-2xl md:text-3xl uppercase flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-600" /> {t('seoPages.pages.pouchCitrusOilPackaging.technicalWarningTerpenePermeation')}
          </h2>
          <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed mb-4">
            {t('seoPages.pages.pouchCitrusOilPackaging.citrusOilsContainHigh')}
          </p>
          <div className="border-t-2 border-dashed border-black pt-4 font-['JetBrains_Mono'] text-xs font-bold space-y-1">
            <div>{t('seoPages.pages.pouchCitrusOilPackaging.gtRecommendedWvtrWater')}</div>
            <div>{t('seoPages.pages.pouchCitrusOilPackaging.gtRecommendedOtrOxygen')}</div>
            <div>{t('seoPages.pages.pouchCitrusOilPackaging.gtApprovedBarrierMaterial')}</div>
          </div>
        </NeoCard>
      </section>

      {/* Main Options Grid */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-4xl md:text-6xl uppercase leading-none">
            {t('seoPages.pages.pouchCitrusOilPackaging.packaging')}<br/>{t('seoPages.pages.pouchCitrusOilPackaging.directions')}
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#00FFFF] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            FROM_LOW_COST_TO_PREMIUM
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {OPTION_CARDS.map((card) => (
            <NeoCard key={card.id} color={card.color} className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <NeoBadge color={card.badgeColor}>{card.badge}</NeoBadge>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-400">[{card.title}]</span>
                </div>
                
                <div className="aspect-video overflow-hidden border-4 border-black bg-neutral-100">
                  <ClickableImage 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-['Space_Grotesk'] text-lg leading-relaxed pt-2">
                  {card.description}
                </p>

                <ul className="space-y-1 font-['JetBrains_Mono'] text-xs font-bold bg-neutral-50 p-4 border-2 border-black">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <NeoButton href={card.ctaUrl} variant="primary" className="w-full text-center">
                  {card.ctaText}
                </NeoButton>
              </div>
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Foil Capsule Display Box matching concept */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <NeoCard color="bg-[#D4FF00]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/5 border-4 border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <ClickableImage 
                src="/imgs/materials/citrus_capsule_display_box.png" 
                alt={t('seoPages.pages.pouchCitrusOilPackaging.alt_fscRetailDisplayBox')} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 space-y-4">
              <span className="bg-black text-[#D4FF00] font-black uppercase text-[10px] px-3 py-1 border-2 border-[#D4FF00]">
                UNBOXING_DESIGN_ECOSYSTEM
              </span>
              <h3 className="font-black text-3xl md:text-5xl uppercase leading-none text-black">
                {t('seoPages.pages.pouchCitrusOilPackaging.fscCapsuleDisplayBox')}
              </h3>
              <p className="font-['Space_Grotesk'] text-lg text-black leading-relaxed">
                {t('seoPages.pages.pouchCitrusOilPackaging.elevateYourFoilCapsules')}
              </p>
              <div className="flex gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="dark">
                  {t('seoPages.pages.pouchCitrusOilPackaging.requestFree3dMockup')}
                </NeoButton>
              </div>
            </div>
          </div>
        </NeoCard>
      </section>

      {/* Chemical Compatibility Table */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <NeoCard className="overflow-x-auto">
          <h3 className="font-black text-2xl uppercase mb-6 flex items-center gap-2">
            <Beaker className="h-6 w-6" /> {t('seoPages.pages.pouchCitrusOilPackaging.materialPerformanceGrid')}
          </h3>
          <table className="w-full text-left font-['JetBrains_Mono'] text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b-4 border-black">
                <th className="pb-3 uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.property')}</th>
                <th className="pb-3 uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.bottleSachet')}</th>
                <th className="pb-3 uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.foilCapsule')}</th>
                <th className="pb-3 uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.recyclableMonope')}</th>
                <th className="pb-3 uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.biopeSugarcane')}</th>
              </tr>
            </thead>
            <tbody>
              {CHEMICAL_COMPATIBILITIES.map((row, idx) => (
                <tr key={idx} className="border-b-2 border-black/10 hover:bg-neutral-50 transition-colors">
                  <td className="py-3 font-bold">{row.property}</td>
                  <td className="py-3">{row.sachet}</td>
                  <td className="py-3">{row.capsule}</td>
                  <td className="py-3">{row.monoPe}</td>
                  <td className="py-3">{row.bioPe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </NeoCard>
      </section>

      {/* Seal sticker & PLA accessories */}
      <section className="py-16 px-4 md:px-6 max-w-4xl mx-auto">
        <NeoCard color="bg-[#00FFFF]" className="text-center space-y-6">
          <h3 className="font-black text-3xl md:text-4xl uppercase">{t('seoPages.pages.pouchCitrusOilPackaging.sealYourPackageSafely')}</h3>
          <p className="font-['Space_Grotesk'] text-lg">
            {t('seoPages.pages.pouchCitrusOilPackaging.ensureTamperevidentSecurityWith')} <strong>{t('seoPages.pages.pouchCitrusOilPackaging.premiumPlaSealingStickers')}</strong>{t('seoPages.pages.pouchCitrusOilPackaging.perfectForSealingFoil')}
          </p>
          <div className="flex gap-4 justify-center">
            <NeoButton href="/store/product/eco-pla-sealing-sticker" variant="dark">
              {t('seoPages.pages.pouchCitrusOilPackaging.orderPlaStickers')}
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary">
              {t('seoPages.pages.pouchCitrusOilPackaging.requestSamples')}
            </NeoButton>
          </div>
        </NeoCard>
      </section>
    </PouchLayout>
  )
}
