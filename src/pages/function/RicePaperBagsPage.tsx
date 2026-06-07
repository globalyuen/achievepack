import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Package, Leaf, Layers, Settings, ShoppingBag, Coffee, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Palette, Ruler, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { getDomain } from '../../utils/domain'
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'

// Gallery images from /imgs/function/rice/


const RicePaperBagsPage: React.FC = () => {
  const { t } = useTranslation()

  const ricePaperGallery = [
  { src: '/imgs/function/rice/hero.webp', title: t('seoPages.pages.ricePaperBags.title_achievePackRicePaperPla'), desc: t('seoPages.pages.ricePaperBags.desc_achievePackRicePaperPla') },
  { src: '/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp', title: t('seoPages.pages.ricePaperBags.title_ecoMaterialCloseupTexture'), desc: t('seoPages.pages.ricePaperBags.desc_ecofriendlymaterialtexturecloseup') },
  { src: '/imgs/function/rice/a_achievepack_structure_variety_infographic_9570629.webp', title: t('seoPages.pages.ricePaperBags.title_structureVarietyInfographic'), desc: t('seoPages.pages.ricePaperBags.desc_multiplebagtypestructure') },
  { src: '/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp', title: t('seoPages.pages.ricePaperBags.title_coffeeValveDegassingSystem'), desc: t('seoPages.pages.ricePaperBags.desc_coffeedegassingValvesystem') },
  { src: '/imgs/function/rice/a_achievepack_snacks_drygood_lifestyle_9593537.webp', title: t('seoPages.pages.ricePaperBags.title_snacksDryGoodsApplications'), desc: t('seoPages.pages.ricePaperBags.desc_dryGoodssnackapplicationscenario') },
  { src: '/imgs/function/rice/a_achievepack_coffee_tea_scene_3005344.webp', title: t('seoPages.pages.ricePaperBags.title_coffeeTeaScene'), desc: t('seoPages.pages.ricePaperBags.desc_coffeeandteaapplicationscenario') },
  { src: '/imgs/function/rice/a_achievepack_size_customization_chart_0780816.webp', title: t('seoPages.pages.ricePaperBags.title_sizeCustomizationChart'), desc: t('seoPages.pages.ricePaperBags.desc_dimensionscustomsolution') },
  { src: '/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp', title: t('seoPages.pages.ricePaperBags.title_printingBrandingDetail'), desc: t('seoPages.pages.ricePaperBags.desc_printingandbranddetails') },
  { src: '/imgs/function/rice/a_achievepack_sustainability_manifesto_6720236.webp', title: t('seoPages.pages.ricePaperBags.title_sustainabilityManifesto'), desc: t('seoPages.pages.ricePaperBags.desc_cancontinuousdeclaration') },
]


  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const isPouchDomain = getDomain() === 'pouch'

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = ricePaperGallery.length - 1
    if (newIndex >= ricePaperGallery.length) newIndex = 0
    setGalleryEnlarged({ src: ricePaperGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component for B2B layout
  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string
    contentCn: string
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge Click to enlarge</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: t('seoPages.pages.ricePaperBags.title_achievePackRicePaperPla'),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.ricePaperBags.premiumCompostablePackagingWithNatural')}</strong> {t('seoPages.pages.ricePaperBags.achievePackRicePaperBags')}
            </p>
            <p className="text-neutral-700">
              {t('seoPages.pages.ricePaperBags.naturalricePapertextureofpremiumcomposta')}
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/rice/hero.webp"
            imageAlt="Achieve Pack Rice Paper & PLA Packaging Hero"
            title={t('seoPages.pages.ricePaperBags.title_achievePackRicePaperPla')}
            titleCn="Achieve Pack® Rice Paper PLA Compostable Packaging"
            content="Our rice paper pouches feature natural fiber texture on the exterior with fully compostable PLA or cellophane inner layers. Certified home compostable or industrial compostable options available. Ideal for brands seeking authentic, eco-conscious packaging with premium aesthetics."
            contentCn="OurRice PaperBagOutsideLayerUsingNaturalFiber Texture，InsideLayerForCompleteCanCompostableOf PLA OrCellophane。OptionalHomeFamilyCanCompostableOrWorkerIndustryCanCompostableCertification。SuitableSuitablePursueNatural、Eco-FriendlyAndToolHavePremiumBeautyFeelOfBrand。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'eco-materials',
      title: t('seoPages.pages.ricePaperBags.title_ecofriendlyMaterialsCompostability'),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp"
            imageAlt="Rice Paper Material Closeup Texture"
            title={t('seoPages.pages.ricePaperBags.title_ricePaperPlacellophane100Compostable')}
            titleCn="Rice Paper + PLA/Cellophane：100% CanCompostable"
            content="Rice paper substrate provides natural fiber texture and feel. Combined with PLA (polylactic acid) or cellophane inner layers, the entire structure is fully compostable. Replaces traditional plastic packaging for coffee, tea, snacks, and dry goods with a sustainable alternative that breaks down naturally."
            contentCn="Rice PaperBase MaterialProvideNaturalFiber TextureAndTouchFeel。KnotSuitable PLA（Polylactic Acid）OrCellophaneInsideLayer，WholeBodyStructureCompleteCanCompostable。UseCanDegradableOfCanContinuousAlternativeProductTakeGenerationCoffee、Tea Leaves、SnackAndDry GoodsOfTraditionalPlasticPackaging。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Leaf className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.ricePaperBags.ricePaperBase')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.ricePaperBags.naturalFiberTextureSubstrate')}</p>
              <p className="text-xs text-green-600 mt-1">{t('seoPages.pages.ricePaperBags.naturalfiberTexturebaseMaterial')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Recycle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.ricePaperBags.plaOrCellophane')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.ricePaperBags.compostableInnerBarrier')}</p>
              <p className="text-xs text-green-600 mt-1">{t('seoPages.pages.ricePaperBags.cancompostableinsidelayerbarrier')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.ricePaperBags.certifiedCompostable')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.ricePaperBags.homeOrIndustrialOptions')}</p>
              <p className="text-xs text-green-600 mt-1">{t('seoPages.pages.ricePaperBags.homefamilyorworkerindustrycancompostable')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'structures',
      title: t('seoPages.pages.ricePaperBags.title_multipleBagStructuresAvailable'),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_structure_variety_infographic_9570629.webp"
            imageAlt="Rice Paper Bag Structure Variety"
            title={t('seoPages.pages.ricePaperBags.title_standUpSideGussetFlat')}
            titleCn="Stand-Up Pouches、Side GussetBag、Flat Bottom Bags、ThreeEdgeSeal"
            content="Achieve Pack® rice paper bags are available in all major pouch structures: Stand up pouch for shelf presence, Side gusset pouch for bulk products, Flat bottom (box pouch) for premium presentation, and Flat pouch (3-side seal) for sachets and samples. Each structure optimized for your specific product requirements."
            contentCn="Achieve Pack® Rice PaperBagProvideAllMainstreamBagTypeStructure：Stand-Up PouchesDisplayPropertyBest，Side GussetBagSuitableSuitableLargeCapacityProduct，FlatBottomBoxTypeBagPresentPremiumQualityFeel，ThreeEdgeSealFlatBagUseAtSmallBagSample。Each TypeStructureEvenNeedleForYouOfProductRequireDemandOptimizeization。"
            imageLeft={true}
            index={2}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t('seoPages.pages.ricePaperBags.standUpPouch')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.standupPouches')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t('seoPages.pages.ricePaperBags.sideGusset')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.sideGussetbag')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t('seoPages.pages.ricePaperBags.flatBottom')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.flatBottomBags')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">{t('seoPages.pages.ricePaperBags.flatPouch')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.threeedgeseal')}</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">{t('seoPages.pages.ricePaperBags.optionalFeatures')}</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>{t('seoPages.pages.ricePaperBags.selfstandingBottom')}</strong></p>
                <p className="text-amber-600">{t('seoPages.pages.ricePaperBags.standupBottomdesign')}</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>{t('seoPages.pages.ricePaperBags.hangHoleEuroSlot')}</strong></p>
                <p className="text-amber-600">{t('seoPages.pages.ricePaperBags.hangHoleEurostylehangHole')}</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>{t('seoPages.pages.ricePaperBags.easyTearNotch')}</strong></p>
                <p className="text-amber-600">{t('seoPages.pages.ricePaperBags.easytearopening')}</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>{t('seoPages.pages.ricePaperBags.sideGussetExpansion')}</strong></p>
                <p className="text-amber-600">{t('seoPages.pages.ricePaperBags.sideGussetaddwide')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: t('seoPages.pages.ricePaperBags.title_functionalFeaturesZipperValveWindow'),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp"
            imageAlt="Rice Paper Bag Coffee Valve Degassing"
            title={t('seoPages.pages.ricePaperBags.title_resealableZipperDegassingValveClear')}
            titleCn="CanRepeatedSealedZipper、Degassing Valve、TransparentWindow"
            content="Add functional features to your rice paper pouches: Resealable zipper or ziplock for extended freshness, one-way degassing valve perfect for coffee packaging, and clear window options for product visibility. All features maintain the compostable integrity of the packaging."
            contentCn="ForRice PaperBagAddFunctionCanWithPiece：CanRepeatedSealedZipperExtendLongFresh KeepingPeriod，SingleTowardDegassing ValveSuitableSuitableCoffeePackaging，TransparentWindowDisplayProduct。AllWithPieceEvenMaintainPackagingOfCanCompostableSpecialProperty。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Settings className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.ricePaperBags.zipperZiplock')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.ricePaperBags.resealableClosureOptions')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.ricePaperBags.canrepeatedsealzipper')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Coffee className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.ricePaperBags.degassingValve')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.ricePaperBags.onewayValveForCoffee')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.ricePaperBags.coffeeprofessionalusedegassingValve')}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Package className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">{t('seoPages.pages.ricePaperBags.clearWindow')}</h4>
              <p className="text-sm text-blue-700">{t('seoPages.pages.ricePaperBags.productVisibilityOption')}</p>
              <p className="text-xs text-blue-600 mt-1">{t('seoPages.pages.ricePaperBags.productcanviewwindow')}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">{t('seoPages.pages.ricePaperBags.barrierPerformance')}</h4>
            <p className="text-neutral-700 mb-2">
              {t('seoPages.pages.ricePaperBags.ricePaperPouchesWithPla')}
            </p>
            <p className="text-neutral-600 text-sm">
              {t('seoPages.pages.ricePaperBags.ricePaperbagwithsuitablePlaOrcellophanei')}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'applications-snacks',
      title: t('seoPages.pages.ricePaperBags.title_applicationsSnacksNutsDryGoods'),
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_snacks_drygood_lifestyle_9593537.webp"
            imageAlt="Rice Paper Bags for Snacks and Dry Goods"
            title={t('seoPages.pages.ricePaperBags.title_perfectForSnacksCerealsNuts')}
            titleCn="Snack、Cereal、Nuts、SuperFoodOfIdealPackaging"
            content="Rice paper pouches are ideal for dry goods that benefit from natural, premium presentation. The authentic fiber texture conveys quality and sustainability. Stand up pouches with clear windows showcase your product while maintaining freshness with resealable zipper closures."
            contentCn="Rice PaperBagIsDry GoodsCategoryProductOfIdealPackaging，NaturalPremiumOfPresentMethod。TrueRealOfFiber TextureTransferReachQualityAndCanContinuousReasonConcept。WithTransparentWindowOfStand-Up PouchesDisplayProduct，MeanwhileWithSuitableCanRepeatedSealZipperMaintainFreshDegree。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥜</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.ricePaperBags.nutsSeeds')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.nutstypechild')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.ricePaperBags.snacks')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.casualsnack')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥣</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.ricePaperBags.cereals')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.cerealgrains')}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🫐</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">{t('seoPages.pages.ricePaperBags.superfoods')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.superfood')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications-coffee',
      title: t('seoPages.pages.ricePaperBags.title_applicationsCoffeeTea'),
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_coffee_tea_scene_3005344.webp"
            imageAlt="Rice Paper Bags for Coffee and Tea"
            title={t('seoPages.pages.ricePaperBags.title_compostableCoffeeTeaPackaging')}
            titleCn="CanCompostableCoffeeAndTea LeavesPackaging"
            content="Rice paper coffee bags with one-way degassing valve are perfect for specialty coffee roasters. The natural paper texture aligns with artisan, sustainable brand values. Available in side gusset and flat bottom structures with capacity from 250g to 1kg+. Tea pouches benefit from the premium presentation and eco-friendly messaging."
            contentCn="WithSingleTowardDegassing ValveOfRice PaperCoffeeBagIdeal forSuitableFineProductCoffeeBakingBusiness。NaturalPaperQualityTextureContractSuitableHandWorkerArt、CanContinuousOfBrandPriceValueView。ProvideSide GussetBagAndFlat Bottom BagsStructure，CapacityFrom 250g To 1kg+。Tea LeavesBagSameStyleReceiveBenefitAtPremiumPresentAndEco-FriendlyReasonConcept。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Coffee className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-2">{t('seoPages.pages.ricePaperBags.coffeePackaging')}</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>{t('seoPages.pages.ricePaperBags.onewayDegassingValveSingletowarddegassin')}</li>
                <li>{t('seoPages.pages.ricePaperBags.sideGussetOrFlatBottom')}</li>
                <li>{t('seoPages.pages.ricePaperBags.250gTo2kgCapacityMultiplespecification')}</li>
                <li>{t('seoPages.pages.ricePaperBags.premiumRoasterPresentationPremiumbakingp')}</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <Leaf className="h-6 w-6 text-green-700 mb-2" />
              <h4 className="font-semibold text-green-800 mb-2">{t('seoPages.pages.ricePaperBags.teaPackaging')}</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>{t('seoPages.pages.ricePaperBags.looseLeafOrTeaBag')}</li>
                <li>{t('seoPages.pages.ricePaperBags.standUpOrFlatPouch')}</li>
                <li>{t('seoPages.pages.ricePaperBags.smallSachetsAvailableSmallbaginstallopti')}</li>
                <li>{t('seoPages.pages.ricePaperBags.naturalAestheticAppealNaturalbeautystudy')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sizes-customization',
      title: t('seoPages.pages.ricePaperBags.title_sizesCustomization'),
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_size_customization_chart_0780816.webp"
            imageAlt="Rice Paper Bag Size Customization"
            title={t('seoPages.pages.ricePaperBags.title_from250gTo2kgCustom')}
            titleCn="From 250g To 2kg+：CustomDimensionsAnd OEM Service"
            content="Achieve Pack® rice paper pouches are available in standard sizes from 250g to 2kg capacity, with fully custom dimensions available. Choose from kraft brown, white kraft, or natural rice paper texture surfaces. Support for digital printing or gravure printing with brand-specific artwork and logos."
            contentCn="Achieve Pack® Rice PaperBagProvide 250g To 2kg StandardSpecification，AlsoSupportCompleteCustomDimensions。OptionalBrown KraftSkin、WhiteCowSkinOrNaturalRice PaperTextureSurface。SupportDigitalPrintingOrGravurePrinting，WithSuitableBrandProfessionalBelongPatternAnd Logo。"
            imageLeft={true}
            index={6}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">{t('seoPages.pages.ricePaperBags.standardSizeOptions')}</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">{t('seoPages.pages.ricePaperBags.250g')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.sampleRetailSize')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">{t('seoPages.pages.ricePaperBags.500g')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.standardRetail')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">{t('seoPages.pages.ricePaperBags.1kg')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.familyBulkSize')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">{t('seoPages.pages.ricePaperBags.2kg')}</h5>
                <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.commercialSize')}</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800">{t('seoPages.pages.ricePaperBags.kraftBrown')}</h4>
              <p className="text-sm text-amber-700">{t('seoPages.pages.ricePaperBags.classicNaturalLook')}</p>
              <p className="text-xs text-amber-600 mt-1">{t('seoPages.pages.ricePaperBags.throughclassicbrownKraftskin')}</p>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg border border-neutral-300">
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.ricePaperBags.whiteKraft')}</h4>
              <p className="text-sm text-neutral-700">{t('seoPages.pages.ricePaperBags.cleanModernAesthetic')}</p>
              <p className="text-xs text-neutral-600 mt-1">{t('seoPages.pages.ricePaperBags.whiteKraftPaper')}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800">{t('seoPages.pages.ricePaperBags.ricePaperTexture')}</h4>
              <p className="text-sm text-green-700">{t('seoPages.pages.ricePaperBags.premiumFiberFeel')}</p>
              <p className="text-xs text-green-600 mt-1">{t('seoPages.pages.ricePaperBags.ricePapertexture')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'printing-branding',
      title: t('seoPages.pages.ricePaperBags.title_printingBrandCustomization'),
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp"
            imageAlt="Rice Paper Bag Printing and Branding"
            title={t('seoPages.pages.ricePaperBags.title_highqualityCustomPrinting')}
            titleCn="HighQualityCustomPrinting"
            content="Achieve Pack® supports both digital printing for low MOQ orders (from 500 pieces) and gravure/plate printing for larger runs. Print your brand artwork, illustrations, and logos with vibrant colors on rice paper substrates. The natural paper texture enhances the premium feel of your printed design."
            contentCn="Achieve Pack® SupportDigitalPrinting（LowTo 500 PieceMinimum Order）AndGravurePrinting（LargeBatchVolumeOrder）。InRice PaperBase MaterialUpPrintingYouOfBrandPattern、InsertDrawAnd Logo，ColorColorBright。NaturalPaperQualityTextureIncreaseStrongPrintingDesignOfPremiumQualityFeel。"
            imageLeft={false}
            index={7}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">{t('seoPages.pages.ricePaperBags.digitalPrinting')}</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.lowMoqFrom500pcs')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.noPlateCosts')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.variableDataPrinting')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.fastTurnaround')}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">{t('seoPages.pages.ricePaperBags.gravurePrinting')}</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.bestForLargeVolumes')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.excellentColorConsistency')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.specialFinishesAvailable')}</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.costeffectiveAtScale')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: t('seoPages.pages.ricePaperBags.title_whyTrustAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_sustainability_manifesto_6720236.webp"
            imageAlt="Achieve Pack Sustainability Manifesto"
            title={t('seoPages.pages.ricePaperBags.title_designedForSustainableBrands')}
            titleCn="ForCanContinuousBrandAndDesign"
            content="With over 13 years of flexible packaging expertise, Achieve Pack has supplied compostable rice paper pouches to coffee roasters, tea brands, superfood companies, and snack producers across North America, Europe, and Asia-Pacific. Our rice paper bags are certified compostable and trusted by 500+ brands worldwide."
            contentCn="With Over 13 Years of FlexiblePackagingProfessionalIndustryThroughTest，Achieve Pack Already Served North America、EuropeAndAsia PacificOfCoffeeBakingBusiness、Tea LeavesBrand、SuperFoodCompanyAndSnackProductionBusinessProvideCanCompostableRice PaperBag。OurRice PaperBagThroughThroughCanCompostableCertification，ReceiveToGlobal 500+ BrandTrust。"
            imageLeft={true}
            index={8}
          />
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.ricePaperBags.fdaCompliant')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.foodContactApproved')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.ricePaperBags.brcCertified')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.foodSafetyStandard')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.ricePaperBags.500Brands')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.trustedWorldwide')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">{t('seoPages.pages.ricePaperBags.13Years')}</h4>
              <p className="text-xs text-neutral-500">{t('seoPages.pages.ricePaperBags.industryExperience')}</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">{t('seoPages.pages.ricePaperBags.exploreRelatedSolutions')}</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.compostableMaterials')}
              </Link>
              <Link to="/materials/home-compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.homeCompostable')}
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.standUpPouches')}
              </Link>
              <Link to="/industry/coffee-tea" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Coffee className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.coffeeTeaIndustry')}
              </Link>
              <Link to="/products/compostable-coffee-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.compostableCoffeeBags')}
              </Link>
              <Link to="/printing/digital-printing" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Palette className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.digitalPrinting')}
              </Link>
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Settings className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.reclosureOptions')}
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.ourCertifications')}
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> {t('seoPages.pages.ricePaperBags.faqs')}
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.ricePaperBags.title_readyToGetStarted'),
      icon: <Sparkles className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('seoPages.pages.ricePaperBags.chooseHowYoudLikeTo')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.ricePaperBags.bookACall')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.ricePaperBags.30minFreeConsultation')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                {t('seoPages.pages.ricePaperBags.scheduleNow')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t('seoPages.pages.ricePaperBags.emailQuote')}</h4>
              <p className="text-sm text-white/80 mb-4">{t('seoPages.pages.ricePaperBags.getResponseWithin24hrs')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Rice Paper Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                {t('seoPages.pages.ricePaperBags.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.ricePaperBags.question_whatIsRicePaperPackaging'),
      answer: t('seoPages.pages.ricePaperBags.answer_ricePaperPackagingFromAchieve')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_isRicePaperPackagingTruly'),
      answer: t('seoPages.pages.ricePaperBags.answer_yesAchievePackRicePaper')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_whatProductsAreBestSuited'),
      answer: t('seoPages.pages.ricePaperBags.answer_ricePaperBagsAreIdeal')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_canIAddADegassing'),
      answer: t('seoPages.pages.ricePaperBags.answer_yesWeOfferOnewayDegassing')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_whatAreTheMinimumOrder'),
      answer: t('seoPages.pages.ricePaperBags.answer_forDigitallyPrintedRicePaper')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_whatSizesAreAvailableFor'),
      answer: t('seoPages.pages.ricePaperBags.answer_weOfferStandardSizesFrom')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_canIPrintMyBrand'),
      answer: t('seoPages.pages.ricePaperBags.answer_yesWeOfferBothDigital')
    },
    {
      question: t('seoPages.pages.ricePaperBags.question_whatBarrierOptionsAreAvailable'),
      answer: t('seoPages.pages.ricePaperBags.answer_ricePaperPouchesWithPla')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.ricePaperBags.title_compostableMaterials'), url: "/materials/compostable", description: t('seoPages.pages.ricePaperBags.description_100PlasticfreeEcofriendlyMaterialOptions') },
    { title: t('seoPages.pages.ricePaperBags.title_homeCompostable'), url: "/materials/home-compostable", description: t('seoPages.pages.ricePaperBags.description_okCompostHomeCertifiedMaterials') },
    { title: t('seoPages.pages.ricePaperBags.title_industrialCompostable'), url: "/materials/industrial-compostable", description: t('seoPages.pages.ricePaperBags.description_en13432AstmD6400Certified') },
    { title: t('seoPages.pages.ricePaperBags.title_standUpPouches'), url: "/packaging/stand-up-pouches", description: t('seoPages.pages.ricePaperBags.description_versatileSelfstandingPackaging') },
    { title: t('seoPages.pages.ricePaperBags.title_flatBottomBags'), url: "/packaging/flat-bottom-bags", description: t('seoPages.pages.ricePaperBags.description_premiumBoxbottomPouchStyle') },
    { title: t('seoPages.pages.ricePaperBags.title_sideGussetBags'), url: "/packaging/side-gusset-bags", description: t('seoPages.pages.ricePaperBags.description_classicSidefoldCoffeeBagFormat') },
    { title: t('seoPages.pages.ricePaperBags.title_compostableCoffeeBags'), url: "/products/compostable-coffee-bags", description: t('seoPages.pages.ricePaperBags.description_ecofriendlyCoffeePackaging') },
    { title: t('seoPages.pages.ricePaperBags.title_compostableStandUpPouches'), url: "/products/compostable-stand-up-pouches", description: t('seoPages.pages.ricePaperBags.description_fullyCompostableStandingPouches') },
    { title: t('seoPages.pages.ricePaperBags.title_reclosureOptions'), url: "/features/reclosure-options", description: t('seoPages.pages.ricePaperBags.description_zipperAndSealTypesAvailable') },
    { title: t('seoPages.pages.ricePaperBags.title_digitalPrinting'), url: "/printing/digital-printing", description: t('seoPages.pages.ricePaperBags.description_lowMoqCustomPrintedPouches') },
    { title: t('seoPages.pages.ricePaperBags.title_coffeeTeaIndustry'), url: "/industry/coffee-tea", description: t('seoPages.pages.ricePaperBags.description_specialtyCoffeeTeaPackaging') },
    { title: t('seoPages.pages.ricePaperBags.title_snacksFood'), url: "/industry/snacks-food", description: t('seoPages.pages.ricePaperBags.description_drySnackPackagingSolutions') },
    { title: t('seoPages.pages.ricePaperBags.title_petFood'), url: "/industry/pet-food", description: t('seoPages.pages.ricePaperBags.description_petTreatAndFoodPouches') },
    { title: t('seoPages.pages.ricePaperBags.title_carbonNeutralBags'), url: "/function/carbon-neutral-bags", description: t('seoPages.pages.ricePaperBags.description_climatepositivePackagingSolutions') },
    { title: t('seoPages.pages.ricePaperBags.title_spoutPouches'), url: "/function/spout-pouches-juice", description: t('seoPages.pages.ricePaperBags.description_liquidPackagingWithSpout') },
    { title: t('seoPages.pages.ricePaperBags.title_certificates'), url: "/company/certificates", description: t('seoPages.pages.ricePaperBags.description_viewOurCertifications') },
    { title: t('seoPages.pages.ricePaperBags.title_faqs'), url: "/support/faqs", description: t('seoPages.pages.ricePaperBags.description_commonQuestionsAnswered') }
  ]

  // B2C Specific Content & Layout
  const b2cSections = [
    {
      id: 'organic-texture',
      title: t('seoPages.pages.ricePaperBags.title_ecoaestheticAuthenticRicePaperTexture'),
      icon: <Coffee className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.ricePaperBags.forModernDirecttoconsumerDtcOrganic')} <em>{t('seoPages.pages.ricePaperBags.feel')}</em> {t('seoPages.pages.ricePaperBags.theBag')}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-['JetBrains_Mono']">
            <p className="text-lg font-black text-neutral-900 mb-2 uppercase">
              {t('seoPages.pages.ricePaperBags.touchIsTheFirstSensor')}
            </p>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {t('seoPages.pages.ricePaperBags.ourAuthenticRicePaperPouches')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/rice/hero.webp', index: 0 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/rice/hero.webp" alt={t('seoPages.pages.ricePaperBags.alt_authenticRicePaperTexture')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.ricePaperBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.ricePaperBags.whyOrganicStartupsChooseRice')}</h4>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.artisanAppeal')}</strong> {t('seoPages.pages.ricePaperBags.conveysAHandcraftedPremiumMicrobatch')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.visualContrast')}</strong> {t('seoPages.pages.ricePaperBags.theDelicateCloudlikePaperFibers')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.100OrganicMatch')}</strong> {t('seoPages.pages.ricePaperBags.alignYourPackagingMaterialWith')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'low-moq',
      title: t('seoPages.pages.ricePaperBags.title_lowriskLaunches500unitMoqMultisku'),
      icon: <Sparkles className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.ricePaperBags.manyTraditionalB2bManufacturersRequire')}
          </p>
          <div className="bg-[#00FFFF] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.zeroPlateSetupFeesLaunch')}</h4>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {t('seoPages.pages.ricePaperBags.atPouchecoWeBelieveIn')} <strong>{t('seoPages.pages.ricePaperBags.500Units')}</strong>{t('seoPages.pages.ricePaperBags.andBecauseWeUseHighfidelity')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.ricePaperBags.startSmallScaleSmart')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('seoPages.pages.ricePaperBags.testCustomPackagingDirectlyWith')}
              </p>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp', index: 7 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp" alt={t('seoPages.pages.ricePaperBags.alt_customPrintedRicePaperBags')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.ricePaperBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'diy-stamping',
      title: t('seoPages.pages.ricePaperBags.title_diyFriendlyHandwritingInkstampingCompati'),
      icon: <Palette className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.ricePaperBags.startupsLoveTheAuthenticRustic')}
          </p>
          <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-bold text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.theRusticMicrobatchAesthetic')}</h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t('seoPages.pages.ricePaperBags.insteadOfPrintingEverySingle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#F0F0F0] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-bold uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.stamperFriendly')}</h5>
              <p className="text-xs text-neutral-700">{t('seoPages.pages.ricePaperBags.porousTextureAbsorbsInksPerfectly')}</p>
            </div>
            <div className="bg-[#D4FF00] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-bold uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.handwriteBatches')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.ricePaperBags.perfectForAddingCustomSignatures')}</p>
            </div>
            <div className="bg-[#00FFFF] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h5 className="font-bold uppercase text-xs tracking-wider mb-2 font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.stickerCompatibility')}</h5>
              <p className="text-xs text-black">{t('seoPages.pages.ricePaperBags.texturedSurfaceAllowsOrganicPaperbased')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compostability',
      title: t('seoPages.pages.ricePaperBags.title_compostabilityWithoutCompromiseBpiEn'),
      icon: <Leaf className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.ricePaperBags.forEcoconsciousConsumersASustainable')}
          </p>
          <div className="bg-[#D4FF00] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="font-black text-neutral-900 mb-2 uppercase font-['JetBrains_Mono']">{t('seoPages.pages.ricePaperBags.100CertifiedCompostableStructure')}</h4>
            <p className="text-sm text-neutral-800 leading-relaxed font-semibold">
              {t('seoPages.pages.ricePaperBags.ourRicePaperPouchesAre')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center mt-6">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp', index: 1 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp" alt={t('seoPages.pages.ricePaperBags.alt_certifiedCompostableMaterialLayerCloseup')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.ricePaperBags.clickToEnlarge')}</div>
            </button>
            <div className="space-y-3">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.ricePaperBags.highperformanceBarrierFeatures')}</h4>
              <ul className="text-sm space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.vaporAromaLock')}</strong> {t('seoPages.pages.ricePaperBags.keepsYourDelicateWholeBean')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.oxygenMoistureDefense')}</strong> {t('seoPages.pages.ricePaperBags.preventsPrematureOxidationOrHumidity')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.fullyEcocertified')}</strong> {t('seoPages.pages.ricePaperBags.printBpiOrOkCompost')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'customization',
      title: t('seoPages.pages.ricePaperBags.title_agileCustomizationCompostableZippersClea'),
      icon: <Layers className="h-5 w-5 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.ricePaperBags.aGreatBagIsBoth')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 font-['JetBrains_Mono'] uppercase">{t('seoPages.pages.ricePaperBags.tailoredAddonsForModernProducts')}</h4>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.compostableZippers')}</strong> {t('seoPages.pages.ricePaperBags.addAnAirtightResealableCompostable')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.transparentWindows')}</strong> {t('seoPages.pages.ricePaperBags.incorporateCleanClearBiodegradableWindow')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.onewayDegassingValves')}</strong> {t('seoPages.pages.ricePaperBags.essentialForFreshCoffeeBeans')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span><strong>{t('seoPages.pages.ricePaperBags.customDimensions')}</strong> {t('seoPages.pages.ricePaperBags.from2ozSampleSachetsTo')}</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={() => setGalleryEnlarged({ src: '/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp', index: 3 })}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <img src="/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp" alt={t('seoPages.pages.ricePaperBags.alt_coffeeDegassingValveFeature')} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center border-t-2 border-neutral-200">{t('seoPages.pages.ricePaperBags.clickToEnlarge')}</div>
            </button>
          </div>
        </div>
      )
    }
  ]

  if (isPouchDomain) {
    return (
      <BlogArticleTemplate
        title={t('seoPages.pages.ricePaperBags.title_ricePaperBagsPremiumTactile')}
        metaDescription={t('seoPages.pages.ricePaperBags.metaDescription')}
        canonicalUrl="https://pouch.eco/function/rice-paper-bags"
        keywords={['rice paper bags', 'compostable pouches', 'organic tea packaging', 'textured coffee bag', 'low MOQ custom printed bags', 'BPI certified compostable']}
        publishedDate="2026-05-27"
        modifiedDate="2026-05-27"
        author="POUCH.ECO Editorial Team"
        heroTitle={
          <span>
            Rice Paper <span className="bg-[#D4FF00] px-2 text-black">Bags</span>
          </span>
        }
        heroSubtitle={t('seoPages.pages.ricePaperBags.heroSubtitle')}
        heroImage="/imgs/function/rice/hero.webp"
        heroImageAlt="Tactile rice paper packaging for startups"
        categoryTag="Function & Aesthetic"
        categoryColor="#D4FF00"
        readTime="4 min read"
        sections={b2cSections}
        ctaTitle={t('seoPages.pages.ricePaperBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.ricePaperBags.ctaDescription')}
        calendlyUrl="https://calendly.com/30-min-free-packaging-consultancy"
        achievePackLink="https://achievepack.com/function/rice-paper-bags"
        achievePackText={t('seoPages.pages.ricePaperBags.achievePackText')}
        showTableOfContents={true}
      />
    )
  }

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.ricePaperBags.title_ricePaperBagsAchievePack')}
        description={t('seoPages.pages.ricePaperBags.description')}
        keywords={['rice paper bags', 'compostable pouches', 'rice paper packaging', 'PLA pouches', 'cellophane bags', 'eco-friendly packaging', 'compostable coffee bags', 'natural fiber pouches', 'sustainable packaging', 'biodegradable bags', 'kraft paper bags', 'stand up pouch', 'side gusset bag', 'Rice PaperBag', 'Compostable Packaging', 'PLAPackaging']}
        canonicalUrl="https://achievepack.com/function/rice-paper-bags"
        heroTitle={t('seoPages.pages.ricePaperBags.heroTitle')}
        heroSubtitle={t('seoPages.pages.ricePaperBags.heroSubtitle')}
        heroImage="/imgs/function/rice/hero.webp"
        heroImageAlt="Achieve Pack Rice Paper & PLA Compostable Packaging"
        introSummary={t('seoPages.pages.ricePaperBags.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.ricePaperBags.ctaTitle')}
        ctaDescription={t('seoPages.pages.ricePaperBags.ctaDescription')}
        ctaButtonText={t('seoPages.pages.ricePaperBags.ctaButtonText')}
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={ricePaperGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{ricePaperGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{ricePaperGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default RicePaperBagsPage
