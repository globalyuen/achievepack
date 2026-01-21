import React, { useState } from 'react'
import { Shield, Lock, Package, Leaf, AlertTriangle, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Baby, Droplets, Factory, Award, Users, Globe, FileCheck, Building2, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/child/
const childResistantGallery = [
  { src: '/imgs/function/child/a_hero_kv_child_resistant_6350351.webp', title: 'Child-Resistant Zipper Bags', desc: 'ChildrenChild-Resistant ZipperStand-Up Pouches' },
  { src: '/imgs/function/child/a_info_why_child_resistant_2579617.webp', title: 'Why Child-Resistant Matters', desc: 'ForWhatRequireNeedChildrenChild-ResistantPackaging' },
  { src: '/imgs/function/child/a_manual_instruction_sequence_1396492.webp', title: 'Child-Resistant Zipper Mechanism', desc: 'Certified Child-Resistant Structure' },
  { src: '/imgs/function/child/a_detail_adult_usability_1537698.webp', title: 'Adult-Friendly Usability', desc: 'ForFormPersonFriendGood，ForChildrenDifficult' },
  { src: '/imgs/function/child/a_detail_high_barrier_1342803.webp', title: 'High Barrier Mylar Structure', desc: 'High Barrier Protection' },
  { src: '/imgs/function/child/a_detail_odor_tamper_2823302.webp', title: 'Odor Control & Tamper-Evidence', desc: 'OdorBarrierAndAntiDisassembleSeal' },
  { src: '/imgs/function/child/a_detail_eco_friendly_0335391.webp', title: 'Eco-Friendly Material Options', desc: 'Eco-Friendly MaterialsSolution' },
  { src: '/imgs/function/child/child-resistant-zipper-application.webp', title: 'Applications Across Industries', desc: 'MultipleProductCategorySuitableWith' },
  { src: '/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp', title: 'On-Shelf Branding & Compliance', desc: 'ShelfPerformanceAndSuitableSpec Info' },
  { src: '/imgs/function/child/a_hero_card_sustainability_1266701.webp', title: 'Design Your Child-Resistant System', desc: 'And Achieve Pack TogetherDesign' },
]

const ChildResistantBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = childResistantGallery.length - 1
    if (newIndex >= childResistantGallery.length) newIndex = 0
    setGalleryEnlarged({ src: childResistantGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component
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
      title: 'Child-Resistant Zipper Bags Overview',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Certified safety for cannabis, pharma, supplements & more</strong> — Child-resistant zipper bags designed to meet international safety standards while remaining easy for adults to open.
            </p>
            <p className="text-neutral-700">
              For Cannabis、Pharmaceuticals、Nutritional SupplementsEtcHighSensitiveProductOfCertificationSafePackaging — PressCountryBoundaryChildrenSafeStandardDesign，FormPersonOpenSmoothHand
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
            imageAlt="Child-Resistant Zipper Bags Hero"
            title="Child-Resistant Zipper Bags"
            titleCn="ChildrenChild-Resistant ZipperStand-Up Pouches"
            content="Our child-resistant zipper bags feature certified push-to-open and pinch-and-slide mechanisms, designed and tested to U.S. 16 CFR 1700 child safety standards. Perfect for cannabis, pharmaceuticals, supplements, and any product requiring secure, compliant packaging."
            contentCn="OurChildrenChild-Resistant ZipperBagUsingCertificationOfPressPressureOpenAndPinchPressureSlideInstitution，PressPhotoUSA 16 CFR 1700 ChildrenSafeStandardDesignAndTest。Ideal forSuitableLargeHemp、Pharmaceuticals、Nutritional SupplementsWithAndAnyRequireNeedSafeSuitableSpecificationPackagingOfProduct。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'why-child-resistant',
      title: 'Why Child-Resistant Matters',
      icon: <Baby className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_info_why_child_resistant_2579617.webp"
            imageAlt="Why Child-Resistant Packaging Matters"
            title="Protect Children, Protect Your Brand"
            titleCn="ForWhatRequireNeedChildrenChild-ResistantPackaging"
            content="Child-resistant packaging helps prevent accidental ingestion by children and is required for cannabis, certain medicines and chemicals in many markets. It provides peace of mind for brands and consumers alike, ensuring compliance with safety regulations."
            contentCn="ChildrenChild-ResistantPackagingHelpPreventChildrenErrorFoodDangerProduct，InAllowMultipleMarketInIsLargeHemp、PartDividePharmaceuticalsAndizationStudyProductOfRegulationsNeedDemand。LetBrandAndConsumerMoreSafeHeart，EnsureMatchSuitableSafeRegulations。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Prevent accidental ingestion</h4>
              <p className="text-sm text-green-700">HelpPreventChildrenErrorFood</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <AlertTriangle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Required by law in many markets</h4>
              <p className="text-sm text-green-700">MultipleGroundAreaRegulationsNeedDemand</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Peace of mind for all</h4>
              <p className="text-sm text-green-700">BrandAndConsumerAllMoreSafeHeart</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-mechanism',
      title: 'Child-Resistant Zipper Mechanism',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_manual_instruction_sequence_1396492.webp"
            imageAlt="Child-Resistant Zipper Mechanism Detail"
            title="Certified Child-Resistant Closure"
            titleCn="Certified Child-Resistant Structure"
            content="The child-resistant zipper track features a special locking mechanism that requires a press-and-slide or pinch-and-pull motion to open. Designed to meet U.S. 16 CFR 1700 child safety standards, with CPSC certification reports available."
            contentCn="ChildrenChild-Resistant ZipperTrackToolHaveSpecialLockInstitution，RequireNeedPressPressureAndSlideOrPinchPressureAndPullMoveOnlyCanOpen。PressPhotoUSA 16 CFR 1700 ChildrenSafeStandardDesign，CanProvide CPSC CertificationReport。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'adult-friendly',
      title: 'Adult-Friendly Usability',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_adult_usability_1537698.webp"
            imageAlt="Adult-Friendly Usability"
            title="Easy for Adults, Hard for Kids"
            titleCn="ForFormPersonFriendGood，ForChildrenDifficult"
            content="The engineered locking motions are intuitive for adults but challenging for children under five. Complex actions like press-and-slide or pinch-and-pull prevent young children from accessing contents while remaining convenient for everyday adult use."
            contentCn="LockMoveWorkForFormPersonStraightViewEasyUnderstand，ButLetFiveAgeWithUnderChildrenDifficultWithOpen。PressPressureSlideOrPinchPressurePullMoveEtcCompoundMixedMoveWorkCanChild-ResistantContactInsideCapacityMaterial，MeanwhileForFormPersonDailyUseStillNaturalConvenientQuick。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'high-barrier',
      title: 'High Barrier Protection',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_high_barrier_1342803.webp"
            imageAlt="High Barrier Mylar Structure"
            title="Multi-Layer Barrier Protection"
            titleCn="High Barrier Protection"
            content="Our child-resistant pouches feature multi-layer Mylar/PET composite structures with excellent oxygen, moisture, UV and odor barrier capabilities. Ideal for pharmaceuticals, supplements, cannabis, and chemical-based products that require maximum protection."
            contentCn="Multi-Layer Mylar/PET Composite Structure，ToolHaveExcellentGoodOfOxygen、WaterSteam、UV AndOdorBarrierCanPower，SuitableSuitablePharmaceuticals、SupplementAgent、LargeHemp、DetergentEtcSensitiveFeelOrHaveOdorProduct。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'odor-tamper',
      title: 'Odor Control & Tamper-Evidence',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_odor_tamper_2823302.webp"
            imageAlt="Odor Control and Tamper-Evidence"
            title="Keep Strong Aromas In, Tampering Out"
            titleCn="Lock InStrongStrongOdor，PreventBeLightEasyTamperChange"
            content="Our pouches feature odor-control sealing to contain strong aromas, plus optional tamper-evident heat seals and tear notches. Large printable areas accommodate warning labels, dosage instructions, and regulatory icons alongside your brand graphics."
            contentCn="BagChildToolHaveOdorBarrierSeal，CanLock InStrongStrongOdor，AnotherHaveOptionalOfAntiDisassembleSealHeat SealAndTearSplitOpeningStructure。LargeAreaCanPrintingAreaCanPlaceSetWarning Text、AgentVolumeInstructions、RegulationsIcon，MeanwhileDisplayBrandPattern。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'eco-friendly',
      title: 'Eco-Friendly Material Options',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_detail_eco_friendly_0335391.webp"
            imageAlt="Eco-Friendly Material Options"
            title="Child Safety Meets Sustainability"
            titleCn="Eco-Friendly MaterialsSolution"
            content="We offer eco-friendly child-resistant packaging options including recyclable PE structures and compostable PLA laminates. Achieve child safety without compromising your brand's sustainability goals and ESG narrative."
            contentCn="ProvideEco-FriendlyEditionChildrenChild-ResistantPackagingSolution，PackIncludingRecyclable PE StructureAndCanCompostable PLA Composite Structure。InNotSacrificeChildrenSafeOfBeforeRaiseUnderAchieveEco-FriendlyTarget，HelpBrandCompleteForm ESG Narrative。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Recyclable PE Structures</h4>
              <p className="text-sm text-green-700">Recyclable PE Structure</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Compostable PLA Laminates</h4>
              <p className="text-sm text-green-700">CanCompostable PLA Composite Structure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Applications Across Industries',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-application.webp"
            imageAlt="Child-Resistant Bags Applications"
            title="One Child-Resistant System, Many Applications"
            titleCn="OneSetChildrenChild-ResistantSystem，CoverMultipleProductCategory"
            content="Our child-resistant pouches are suitable for pharmaceuticals, nutritional supplements, batteries, small accessories, cleaning products, personal care items, as well as cannabis flower and edibles. Available in stand-up, flat, and gusset styles."
            contentCn="Suitable forPharmaceuticals、CampNurtureSupplementChargeAgent、ElectricPool、SmallMaterialPiece、Detergent、UnitProtectProductWithAndLargeHempFlowerAndFoodEtc，ProvideStand-Up Pouches、FlatBag、SideAccordionEtcMultipleBagType。"
            imageLeft={false}
            index={7}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">Medicine</h4>
              <p className="text-xs text-neutral-500">Pharmaceuticals</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">Supplements</h4>
              <p className="text-xs text-neutral-500">Nutritional Supplements</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">Cannabis</h4>
              <p className="text-xs text-neutral-500">LargeHempProduct</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <h4 className="font-semibold text-neutral-800">Cleaners</h4>
              <p className="text-xs text-neutral-500">Detergent</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'branding-compliance',
      title: 'On-Shelf Branding & Compliance',
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/child-resistant-zipper-Stand-out branding with full compliance.webp"
            imageAlt="On-Shelf Branding and Compliance"
            title="Stand-Out Branding with Full Compliance"
            titleCn="CompatibleCustomerShelfPerformanceAndSuitableSpec Info"
            content="Our child-resistant pouches feature large printable areas for high-impact graphics and regulated labels. Bold branding areas with clear warning triangles and dosage text panels ensure your product stands out while meeting all regulatory requirements."
            contentCn="LargeAreaCanPrintingArea，CompatibleCapacityBrandImageFormAndRegulationsLabel。ClearOfWarningThreeAngleAndAgentVolumeTextCharacterFaceBoardEnsureProductInShelfUpStand OutAndOut，MeanwhileMeetAllRegulationsNeedDemand。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'design-system',
      title: 'Design Your System',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/child/a_hero_card_sustainability_1266701.webp"
            imageAlt="Design Your Child-Resistant System"
            title="Design Your Child-Resistant Zipper Bag Line"
            titleCn="And Achieve Pack TogetherDesignYouOfChildrenChild-Resistant ZipperBagSeries"
            content="Work with Achieve Pack to create your custom child-resistant packaging solution. Choose your pouch type and size, select barrier level and eco materials, then add certified child-resistant zippers and your brand artwork."
            contentCn="Safe、BarrierAndCanContinuousCollectionAtOneBodyOfSoftPropertyPackaging。ChooseBagTypeAndDimensions，ChooseBarrier LevelAndEco-Friendly Materials，PlusCertificationChildrenChild-Resistant ZipperAndBrandDesign。"
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
              <h4 className="font-semibold text-neutral-800 mb-1">Choose Pouch Type & Size</h4>
              <p className="text-sm text-neutral-600">ChooseBagTypeAndDimensions</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">2</div>
              <h4 className="font-semibold text-neutral-800 mb-1">Select Barrier & Eco Materials</h4>
              <p className="text-sm text-neutral-600">ChooseBarrier LevelAndEco-Friendly Materials</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">3</div>
              <h4 className="font-semibold text-neutral-800 mb-1">Add Zipper & Artwork</h4>
              <p className="text-sm text-neutral-600">PlusCertificationChildrenChild-Resistant ZipperAndBrandDesign</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Child-Resistant Packaging</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of experience manufacturing flexible packaging, Achieve Pack has supplied child-resistant pouches to cannabis dispensaries, pharmaceutical companies, and supplement brands across North America, Europe, and Asia-Pacific.
            </p>
            <p className="text-neutral-600 text-sm">
              With Over 13 Years of FlexiblePackagingMadeMakeThroughTest，Achieve Pack Already Served North America、EuropeAndAsia PacificOfLargeHempPharmacy、PharmaceuticalCompanyAndNutritional SupplementsBrandProvideChildrenChild-ResistantBag。
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">CPSC Compliant</h4>
              <p className="text-xs text-neutral-500">U.S. 16 CFR 1700 certified</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-500">Food safety standard</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">500+ Brands</h4>
              <p className="text-xs text-neutral-500">Trusted worldwide</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industry experience</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Sparkles className="h-4 w-4" /> Carbon Neutral Bags
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Shield className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Child-Resistant Zipper Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What certifications do your child-resistant bags have?",
      answer: "Our child-resistant zipper bags are designed to meet U.S. 16 CFR 1700 child safety standards. We can provide CPSC certification reports and testing documentation upon request. The bags use certified push-to-open and pinch-and-slide mechanisms. Our manufacturing facility is also BRC certified for food safety."
    },
    {
      question: "Are these bags suitable for cannabis products?",
      answer: "Yes, our child-resistant pouches are specifically designed for cannabis flower, edibles, and concentrates. They meet regulatory requirements for child-resistant packaging in most cannabis markets including California, Colorado, and Canada, with high barrier properties to contain odors and maintain freshness."
    },
    {
      question: "How do the child-resistant zippers work?",
      answer: "The child-resistant zipper requires a specific motion to open—either press-and-slide or pinch-and-pull. These complex actions are intuitive for adults but challenging for children under five, meeting safety requirements while remaining convenient for everyday use."
    },
    {
      question: "Do you offer eco-friendly child-resistant options?",
      answer: "Yes! We offer recyclable PE structures and compostable PLA laminates that maintain child-resistant functionality. These options help brands achieve sustainability goals without compromising child safety compliance. See our compostable materials page for more details."
    },
    {
      question: "What pouch styles are available with child-resistant zippers?",
      answer: "Child-resistant zippers can be added to stand-up pouches, flat pouches, and side gusset bags. We offer various sizes and custom dimensions to suit your product requirements. All styles feature high-barrier multi-layer construction."
    },
    {
      question: "What is the minimum order quantity for child-resistant bags?",
      answer: "Our minimum order quantity starts at 1,000 pieces for stock sizes. For custom sizes or printing, MOQ typically starts at 5,000-10,000 pieces depending on specifications. Contact us for exact quotes based on your requirements."
    },
    {
      question: "How long does production take for child-resistant pouches?",
      answer: "Standard production time is 2-3 weeks for stock items and 3-4 weeks for custom printed child-resistant bags. Rush orders may be available for urgent projects. Check our lead time page for current production schedules."
    },
    {
      question: "Can I get samples before placing a bulk order?",
      answer: "Yes, we offer sample packs of our child-resistant bags so you can test the closure mechanism and material quality before committing to a bulk order. Sample requests can be made through our contact form or by scheduling a consultation."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Pouches", url: "/materials/compostable", description: "100% plastic-free eco-friendly material options" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Fully recyclable single-material structure" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content options" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom pouch style" },
    { title: "Side Gusset Bags", url: "/packaging/side-gusset-bags", description: "Traditional gusseted bag format" },
    // Features
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "All zipper and seal types available" },
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Surface Finishes", url: "/features/surface-finish", description: "Matte, gloss, soft-touch options" },
    // Related function pages
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging solutions" },
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Food-safe heating pouches" },
    // Industry applications
    { title: "Supplements Packaging", url: "/industry/supplements-powders", description: "Nutraceutical pouch solutions" },
    { title: "Pet Food Bags", url: "/industry/pet-food", description: "Durable pet treat packaging" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our safety certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Child-Resistant Zipper Bags | Certified Safety Pouches"
        description="Certified child-resistant zipper bags for cannabis, pharmaceuticals, supplements and more. Push-to-open mechanism meets U.S. 16 CFR 1700 standards. High barrier, odor-proof, eco-friendly options available."
        keywords={['child-resistant bags', 'child-resistant pouches', 'cannabis packaging', 'pharmaceutical pouches', 'CPSC certified bags', 'child-proof packaging', 'push-to-open bags', 'child safety packaging', 'CR zipper bags', 'compliant cannabis bags', 'supplement safety pouches', '16 CFR 1700 bags', 'tamper evident pouches', 'odor proof cannabis bags', 'eco friendly child resistant']}
        canonicalUrl="https://achievepack.com/function/child-resistant-bags"
        heroTitle="Child-Resistant Zipper Bags"
        heroSubtitle="Certified safety for cannabis, pharma, supplements & more / For Cannabis、Pharmaceuticals、Nutritional SupplementsEtcHighSensitiveProductOfCertificationSafePackaging"
        heroImage="/imgs/function/child/a_hero_kv_child_resistant_6350351.webp"
        heroImageAlt="Achieve Pack Child-Resistant Zipper Bags"
        introSummary="Child-resistant zipper bags designed to U.S. 16 CFR 1700 standards. Push-to-open and pinch-and-slide mechanisms keep children safe while remaining easy for adults. High barrier, odor-proof, with eco-friendly options."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Child-Resistant Bags?"
        ctaDescription="Get certified child-resistant packaging for your cannabis, pharmaceutical, or supplement brand. Eco-friendly options available."
        ctaButtonText="Get a Quote"
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
          <img src={galleryEnlarged.src} alt={childResistantGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{childResistantGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{childResistantGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {childResistantGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChildResistantBagsPage
