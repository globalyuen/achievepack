import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Heart, Baby, FileCheck, Thermometer, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

export default function PouchBabyFoodPage() {
  const { t } = useTranslation()

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t('seoPages.pages.pouchBabyFood.metaTitle')
  const description = t('seoPages.pages.pouchBabyFood.metaDescription')

  const SAFETY_METRICS = [
    { label: t('seoPages.pages.pouchBabyFood.bpaMigration'), value: '0.00%', desc: t('seoPages.pages.pouchBabyFood.certifiedZeromigrationPolymers') },
    { label: t('seoPages.pages.pouchBabyFood.phthalateFree'), value: '100%', desc: t('seoPages.pages.pouchBabyFood.safeForDirectInfant') },
    { label: t('seoPages.pages.pouchBabyFood.heavyMetals'), value: 'Non-Detect', desc: t('seoPages.pages.pouchBabyFood.verifiedByAstmF963') },
    { label: t('seoPages.pages.pouchBabyFood.heatStable'), value: '95°C', desc: t('seoPages.pages.pouchBabyFood.safeForHotfillPuree') }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="https://pouch.eco/imgs/artifacts/baby_food_hero.jpg" />
        <link rel="canonical" href="https://pouch.eco/industry/baby-food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">{t('seoPages.pages.pouchBabyFood.industrycodeBaby04')}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchBabyFood.pure')}<br/>
                {t('seoPages.pages.pouchBabyFood.safe')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-pink-600">{t('seoPages.pages.pouchBabyFood.healthy')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchBabyFood.gtBpafreeFoodSafe')}<br/>
                {t('seoPages.pages.pouchBabyFood.gtAntichokeCapTech')}<br/>
                {t('seoPages.pages.pouchBabyFood.gtSpoutedStandupOptions')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchBabyFood.quoteNow')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('seoPages.pages.pouchBabyFood.requestSafetyKit')}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative">
                  <img 
                    src="/imgs/artifacts/baby_food_hero.jpg" 
                    alt={t('seoPages.pages.pouchBabyFood.alt_safeBabyFoodPackaging')} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    FOOD_GRADE_CERT
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt={t('seoPages.pages.pouchBabyFood.alt_safeBabyFoodPackaging')} 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">CERTIFIED_CLEAN</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic text-pink-600">{t('seoPages.pages.pouchBabyFood.trustIs')}<br/>{t('seoPages.pages.pouchBabyFood.everything')}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('seoPages.pages.pouchBabyFood.babyFoodBrandsFace')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{m.label}</h4>
                    <p className="text-xl font-black">{m.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-pink-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">VISUAL_SHOWCASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchBabyFood.formats')}<br/>{t('seoPages.pages.pouchBabyFood.styles')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_compostableBabyFoodBags')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_spoutPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babySnackStandUp')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_snackPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babyFoodBoxPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_formulaBags')}
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_dtcBabyFoodDelivery')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_dtcPackaging')}
            />
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">GLOBAL_SAFETY_STANDARDS</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 italic">{t('seoPages.pages.pouchBabyFood.noCompromise')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <FileCheck className="w-12 h-12 mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.fda21Cfr')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.fullComplianceWithUs')}</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <Shield className="w-12 h-12 mb-6 text-blue-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.eu102011')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.europeanSafetyVerificationFor')}</p>
            </NeoCard>
            <NeoCard>
              <Award className="w-12 h-12 mb-6 text-green-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.tuvOkHome')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.certifiedToBreakDown')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="pink">INDUSTRY_DEEP_DIVE</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            {t('seoPages.pages.pouchBabyFood.theNewStandardIn')} <span className="text-[#10b981]">{t('seoPages.pages.pouchBabyFood.babyFoodPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchBabyFood.whenItComesTo')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.atPouchecoWeAre')}
            </p>
            
            <ClickableImage 
              src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babyFoodPouchPackaging')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchBabyFood.caption_zeroLeachingZeroMicroplastics')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.eradicatingChemicalLeaching')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.thePrimaryConcernFor')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.ourCompostableLaminationsAre')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.theHotfillProcessAnd')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.manyBabyFoodPurees')} 
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.throughIntensiveRdPoucheco')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.empoweringStartupBrands')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.theOrganicBabyFood')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.weLevelThePlaying')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">KNOWLEDGE_BASE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchBabyFood.frequentlyAsked')}<br/>{t('seoPages.pages.pouchBabyFood.questions')}</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.areYourPouchesSafe')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.yes100OurMaterials')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.areTheSpoutsAnd')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.weOfferBothStandard')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.canThesePouchesBe')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.yesOurHighbarrierStructures')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.whatIsTheMoq')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.weSupportStartupOrganic')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">SOIL_FRIENDLY</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">{t('seoPages.pages.pouchBabyFood.protectTheir')}<br/>{t('seoPages.pages.pouchBabyFood.future')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('seoPages.pages.pouchBabyFood.empoweringNextgenBabyFood')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">{t('seoPages.pages.pouchBabyFood.getSafetySamples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white" href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchBabyFood.consultSafetyExpert')}</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchBabyFood.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/frozen-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/frozen_food_hero.jpg"
                  alt={t('seoPages.pages.pouchBabyFood.alt_frozenFoodPackaging')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.frozenFood')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.arcticgradeDurabilityPunctureResistant')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/packaging/spout-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
                  alt={t('seoPages.pages.pouchBabyFood.alt_spoutPouchesGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.spoutPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.spoutPouchesLeakproofCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/eco-friendly-food-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
                  alt={t('seoPages.pages.pouchBabyFood.alt_foodPackagingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.foodSafeGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.safetyProtocolsForFood')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
