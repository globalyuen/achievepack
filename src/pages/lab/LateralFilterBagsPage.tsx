import React, { useState } from 'react'
import { Package, Leaf, Layers, Settings, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Beaker, FlaskConical, Microscope, Droplets, Filter, Zap, ClipboardCheck, Factory } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/lab/filter/
const filterBagGallery = [
  { src: '/imgs/lab/filter/hero.webp', title: 'AchievePack® Lateral Filter Blender Bags', desc: 'AchievePack® Side Filter Membrane Homogenizer Bags' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp', title: 'Brand KV - Sterile Lab Bag Collection', desc: 'BrandMain KV - NoBacteriaLaboratoryHomogenizerBagSeries' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp', title: 'Lateral Non-woven Filter Detail', desc: 'SideNoFilter MembraneDetailsClose-Up' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_structure_infographic_0840540.webp', title: 'Size & Specification Infographic', desc: 'DimensionsAndSpecificationInstructions' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_film_material_detail_8198598.webp', title: 'Multilayer Film Material Detail', desc: 'Multi-LayerCompoundSuitableFilmMaterialDetails' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_packaging_display_1648666.webp', title: 'Sterile Packaging Display', desc: 'NoBacteriaPackagingDisplay' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_blender_compatible_6617683.webp', title: 'Lab Blender Compatibility', desc: 'LaboratoryHomogenizerDeviceCompatibleCapacityProperty' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_pouring_scene_9028758.webp', title: 'Particle-free Filtrate Pouring', desc: 'NoParticle FiltratePour' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_applications_infographic_4799610.webp', title: 'Multi-industry Applications', desc: 'MultipleLineIndustryApplicationScenario' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_weld_particle_detail_9222606.webp', title: 'Weld Structure & Brand Endorsement', desc: 'WeldSeamStructureAndBrandBackBook' },
  { src: '/imgs/lab/filter/a_achieve_pack_400ml_capacity_visualization_8316877.webp', title: '400mL Capacity Visualization', desc: '400mL CapacityCanViewization' },
]

const LateralFilterBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = filterBagGallery.length - 1
    if (newIndex >= filterBagGallery.length) newIndex = 0
    setGalleryEnlarged({ src: filterBagGallery[newIndex].src, index: newIndex })
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
      title: 'AchievePack® Lateral Filter Blender Bags Overview',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Premium sterile blender bags with lateral non-woven filter</strong> — AchievePack® BagFilter series features side-mounted filtration membrane for instant, particle-free sample preparation. Clean room produced and gamma sterilized for contamination-sensitive microbiology testing.
            </p>
            <p className="text-neutral-700">
              PremiumNoBacteriaSide Filter Membrane Homogenizer Bags — AchievePack® BagFilter SeriesUsingSideNoWoven FabricFilter MembraneDesign，AchieveInstantaneousNoParticleSamplePreparation。Cleanroom Production、γ Irradiation Sterilization，Suitable forContamination-SensitiveOfMicrobialTesting。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/lab/filter/hero.webp"
            imageAlt="AchievePack Lateral Filter Blender Bags Hero"
            title="AchievePack® Lateral Filter Blender Bags"
            titleCn="AchievePack® Side Filter Membrane Homogenizer Bags"
            content="Our 400mL lateral filter blender bags combine lateral non-woven filtration with gamma sterilization for safe, efficient microbiology sample preparation. Compatible with all major lab blenders for food, pharmaceutical, cosmetic, and environmental testing applications."
            contentCn="Our 400mL Side Filter Membrane Homogenizer BagsKnotSuitableSideNoWoven FabricThroughFilterAnd γ Irradiation Sterilization，AchieveSafeEfficientOfMicrobialSamplePreparation。CompatibleCapacityEachLargeBrandLaboratoryHomogenizerDevice，Suitable forFood、Pharmaceutical、CosmeticsAndEnvironmental Testing。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'filter-technology',
      title: 'Lateral Non-woven Filter Technology',
      icon: <Filter className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_filter_texture_detail_7479934.webp"
            imageAlt="Lateral Non-woven Filter Detail"
            title="Side-mounted Non-woven Filter: Instant Filtration"
            titleCn="SideNoFilter Membrane：InstantaneousThroughFilter"
            content="The lateral non-woven filter membrane features approximately <250μm pore size for instant filtration without additional filtration equipment. The intermediate weld structure allows easy pouring of particle-free filtrate from the bag opening while retaining solid residues behind the filter."
            contentCn="SideNoWoven FabricFilter MembraneThroughFilterHolePathAboutSmallAt 250μm，NoRequireExtraOutsideFilterDeviceImmediatelyCanAchieveInstantaneousThroughFilter。InWeldSeamStructureConvenientAtFromBagOpeningLightLoosePourNoParticle Filtrate，SolidBodyResidueBeFilter MembraneBlockInOneSide。"
            imageLeft={false}
            index={2}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Filter className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Lateral Filter</h4>
              <p className="text-sm text-blue-700">Non-woven membrane ≤250μm</p>
              <p className="text-xs text-blue-600 mt-1">SideNoFilter Membrane ≤250μm</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Instant Filtration</h4>
              <p className="text-sm text-blue-700">No additional equipment needed</p>
              <p className="text-xs text-blue-600 mt-1">NoRequireExtraOutsideFilterDeviceEquipment</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">No Cross-contamination</h4>
              <p className="text-sm text-blue-700">Single-use sterile design</p>
              <p className="text-xs text-blue-600 mt-1">OncePropertyNoBacteriaDesign</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Specifications & Dimensions',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_structure_infographic_0840540.webp"
            imageAlt="400mL Blender Bag Specifications"
            title="400mL Standard Capacity: Lab Blender Compatible"
            titleCn="400mL StandardCapacity：CompatibleCapacityMainstreamHomogenizerDevice"
            content="Standard 400mL capacity with typical dimensions of 190×300mm and wall thickness of approximately 72μm (~3 mil). Optimal homogenization volume ranges from 50-300mL. Single-use design ensures no risk of cross-contamination between samples."
            contentCn="Standard 400mL Capacity，ClassicTypeDimensionsAbout 190×300mm，BagWall ThicknessDegreeAbout 72μm（About 3 mil）。MostBestHomogenizerBodyAreaRange 50-300mL。OncePropertyUseDesignEnsureSampleBetweenNoCrossContaminationRisk。"
            imageLeft={true}
            index={3}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">400 mL</h4>
              <p className="text-xs text-neutral-500">Capacity Capacity</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">190 × 300 mm</h4>
              <p className="text-xs text-neutral-500">Dimensions Dimensions</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Settings className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">~72 μm</h4>
              <p className="text-xs text-neutral-500">Wall Thickness Wall Thickness</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Droplets className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">50–300 mL</h4>
              <p className="text-xs text-neutral-500">Optimal Volume MostBestHomogenizerVolume</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-quality',
      title: 'Multilayer Film & Transparency',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_film_material_detail_8198598.webp"
            imageAlt="Multilayer Reinforced Film Material"
            title="Multilayer Reinforced Film: Clear & Rigid"
            titleCn="Multi-LayerAddSolidCompoundSuitableFilm：TransparentStandIncluding"
            content="Premium multilayer reinforced composite film provides excellent transparency for sample observation and rigidity for easy handling. The clear bag body allows visual monitoring of homogenization process while maintaining structural integrity during blending operations."
            contentCn="HighQualityMulti-LayerAddSolidCompoundSuitableFilmProvideOutstandingTransparentDegreeConvenientAtSampleObserve，MeanwhileMaintainStandIncludingEasyAtOperation。TransparentBagBodyAllowCanViewizationMonitorHomogenizerProcess，MeanwhileInStirOperationInMaintainStructureCompleteProperty。"
            imageLeft={false}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'sterilization',
      title: 'Gamma Sterilization & Clean Room Production',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_packaging_display_1648666.webp"
            imageAlt="Sterile Packaging Clean Room"
            title="Clean Room Production + Gamma Sterilized"
            titleCn="Cleanroom Production + γ Irradiation Sterilization"
            content="All AchievePack BagFilter products are manufactured in controlled clean room environments and gamma irradiation sterilized before packaging. This ensures pre-use sterility critical for contamination-sensitive microbiology experiments including pre-enrichment, PCR, and flow cytometry applications."
            contentCn="All AchievePack BagFilter ProductEvenInReceiveControlled CleanroomEnvironmentInProduction，PackagingBeforeThrough γ Irradiation SterilizationProcessing。EnsureUseBeforeNoBacteriaStatus，ForAtPre-Enrichment、PCR AndFlow CytometryEtcContamination-SensitiveOfMicrobialRealTestToCloseHeavyNeed。"
            imageLeft={true}
            index={5}
          />
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-indigo-800 mb-3">✓ AchievePack Quality Assurance QualityGuarantee</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Factory className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">Clean Room Production</span>
                  <p className="text-indigo-600 text-xs">Cleanroom ProductionEnvironment</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">Gamma Sterilized</span>
                  <p className="text-indigo-600 text-xs">γ Irradiation Sterilization</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ClipboardCheck className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-indigo-800 font-medium">Sterile Certified</span>
                  <p className="text-indigo-600 text-xs">NoBacteriaCertification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'blender-compatibility',
      title: 'Lab Blender Compatibility',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_blender_compatible_6617683.webp"
            imageAlt="Lab Blender Compatibility"
            title="Compatible with All Major Lab Blenders"
            titleCn="CompatibleCapacityEachLargeBrandLaboratoryHomogenizerDevice"
            content="AchievePack lateral filter bags are designed to work seamlessly with all major laboratory blenders and stomacher equipment. Standardized 400mL capacity and dimensions ensure universal compatibility, simplifying laboratory equipment configuration and workflow."
            contentCn="AchievePack Side FilterBagDesignCanAndAllMainstreamLaboratoryHomogenizerDeviceAndSlapStyleEvenPulpMachineNoSeamWithSuitable。Standardization 400mL CapacityAndDimensionsEnsureConnectUseCompatibleCapacityProperty，SimpleizationLaboratoryEquipmentWithSetAndWorkProcess。"
            imageLeft={false}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'operation',
      title: 'Easy Pouring & Particle-free Filtrate',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_pouring_scene_9028758.webp"
            imageAlt="Pouring Particle-free Filtrate"
            title="Pour Clear Filtrate, Leave Residue Behind"
            titleCn="PourClearClearFilterLiquid，ResidueStayInBagInside"
            content="The unique intermediate weld structure enables easy pouring of particle-free filtrate directly from the bag opening into sterile tubes or containers. Solid residues and interference particles are retained behind the lateral filter, ensuring clean samples for downstream analysis including PCR and flow cytometry."
            contentCn="UniqueSpecialOfInWeldSeamStructureConvenientAtDirectFromBagOpeningWillNoParticle FiltratePourEnterNoBacteriaTryTubeOrCapacityDevice。SolidBodyResidueAndInterfereParticleBeSide FilterBlock，EnsureUseAt PCR AndFlow CytometryEtcUnderSwimDivideAnalyzeOfSampleClearClean。"
            imageLeft={true}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Multi-industry Applications',
      icon: <FlaskConical className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_applications_infographic_4799610.webp"
            imageAlt="Multi-industry Applications"
            title="Food, Pharma, Cosmetics & Environmental Testing"
            titleCn="Food、Pharmaceutical、CosmeticsAndEnvironmental Testing"
            content="AchievePack lateral filter bags are suitable for microbiology sample preparation across food, pharmaceutical, cosmetic, environmental, and public research applications. Supports demanding analytical workflows including pre-enrichment, small volume experiments (≤1000μL), PCR, and flow cytometry."
            contentCn="AchievePack Side FilterBagSuitable forFood、Pharmaceutical、Cosmetics、EnvironmentAndPublicResearch InstitutionOfMicrobialSamplePreparation。SupportHighNeedDemandDivideAnalyzeProcess，PackIncludingPre-Enrichment、SmallBodyAreaRealTest（≤1000μL）、PCR AndFlow Cytometry。"
            imageLeft={false}
            index={8}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <span className="text-2xl mb-2 block">🥗</span>
              <h4 className="font-semibold text-green-800 text-sm">Food Testing</h4>
              <p className="text-xs text-green-600">Food Testing</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <span className="text-2xl mb-2 block">💊</span>
              <h4 className="font-semibold text-purple-800 text-sm">Pharmaceutical</h4>
              <p className="text-xs text-purple-600">PharmaceuticalLineIndustry</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200 text-center">
              <span className="text-2xl mb-2 block">💄</span>
              <h4 className="font-semibold text-pink-800 text-sm">Cosmetics</h4>
              <p className="text-xs text-pink-600">Cosmetics</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
              <span className="text-2xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-teal-800 text-sm">Environmental</h4>
              <p className="text-xs text-teal-600">Environmental Testing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'brand-upgrade',
      title: 'AchievePack: Upgraded Lab Solution',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/filter/a_achieve_pack_400ml_weld_particle_detail_9222606.webp"
            imageAlt="AchievePack Brand Endorsement"
            title="AchievePack: Your Premium Lab Sample Prep Upgrade"
            titleCn="AchievePack：YouOfPremiumLaboratorySamplePreparationRiseGradeSolution"
            content="Compared to traditional plain sample bags without filtration, AchievePack lateral filter bags offer improved filtration efficiency, fewer handling steps, and lower contamination risk. Experience the difference with our clean room produced, gamma sterilized premium blender bags."
            contentCn="AndTraditionalNoFilter MembraneSampleBagCompared，AchievePack Side FilterBagProvideMoreHighThroughFilterEfficiency、MoreFewOperationSteps、MoreLowContaminationRisk。BodyTestWeCleanroom Production、γ Irradiation SterilizationOfPremiumHomogenizerBagWithComeOfDifference。"
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              AchievePack Advantage AchievePack ExcellentTrend
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Improved Filtration Efficiency ThroughFilterEfficiencyImprove</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Fewer Handling Steps OperationStepsReduce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Lower Contamination Risk ContaminationRiskReduceLow</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust',
      title: 'Quality Certifications & Trust',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">ISO Certified Production</h4>
                  <p className="text-sm text-neutral-500">ISO CertificationProduction</p>
                </div>
              </div>
              <p className="text-neutral-700 text-sm">Manufacturing facilities adhere to ISO quality standards ensuring consistent product quality and traceability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Sterility Validated</h4>
                  <p className="text-sm text-neutral-500">NoBacteriaTestProve</p>
                </div>
              </div>
              <p className="text-neutral-700 text-sm">Gamma sterilization process validated to ensure sterility assurance level (SAL) meeting laboratory requirements.</p>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-neutral-600 mb-4">Trusted by microbiology laboratories worldwide GlobalMicrobialLaboratoryTrusted Choice</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">Food Testing Labs</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">Pharma QC</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">Research Institutes</span>
              <span className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">Environmental Agencies</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Request Samples or Quote',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Upgrade Your Lab Sample Prep?</h3>
              <p className="text-primary-100 mb-2">StandardPrepareGoodRiseGradeYouOfLaboratorySamplePreparation?？</p>
              <p className="text-white/90 mb-6">Contact us for samples, pricing, or technical consultation. Our team is ready to support your laboratory needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                >
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </button>
                <a
                  href="mailto:ryan@achievepack.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <Mail className="h-5 w-5" />
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What is the filter pore size of AchievePack lateral filter bags?', answer: 'The lateral non-woven filter membrane has an approximate pore size of less than 250μm, providing effective filtration while allowing rapid liquid passage.' },
    { question: 'Are AchievePack blender bags sterile?', answer: 'Yes, all AchievePack BagFilter products are gamma irradiation sterilized and produced in clean room environments to ensure pre-use sterility for contamination-sensitive applications.' },
    { question: 'What is the standard capacity of AchievePack filter bags?', answer: 'Our standard lateral filter blender bags have a 400mL capacity with dimensions of approximately 190×300mm, compatible with most laboratory blenders.' },
    { question: 'Can these bags be used for PCR sample preparation?', answer: 'Yes, AchievePack lateral filter bags are suitable for PCR, flow cytometry, pre-enrichment, and other demanding analytical workflows requiring particle-free sample preparation.' },
    { question: 'What industries use AchievePack blender bags?', answer: 'Our bags are used across food testing, pharmaceutical QC, cosmetics, environmental testing, and research institutions worldwide.' },
    { question: 'Are the bags single-use or reusable?', answer: 'AchievePack lateral filter bags are designed for single-use to eliminate cross-contamination risk between samples. They are not designed for autoclaving or reuse.' },
    { question: 'What is the wall thickness of the bags?', answer: 'The multilayer reinforced film has a wall thickness of approximately 72μm (~3 mil), providing excellent clarity for observation while maintaining structural rigidity.' },
    { question: 'How do I order samples or get pricing?', answer: 'Contact us via email at ryan@achievepack.com or book a consultation through our website. We offer sample kits for evaluation and competitive pricing for bulk orders.' },
  ]

  const relatedLinks = [
    { title: 'Home Compostable Materials', url: '/materials/home-compostable' },
    { title: 'Industrial Compostable Options', url: '/materials/industrial-compostable' },
    { title: 'Company Certificates', url: '/company/certificates' },
    { title: 'About Achieve Pack', url: '/company/about' },
    { title: 'Factory Tour', url: '/company/factory-tour' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches' },
    { title: 'Flat Pouches', url: '/packaging/flat-pouches' },
    { title: 'Barrier Options', url: '/features/barrier-options' },
    { title: 'Digital Printing', url: '/printing/digital-printing' },
    { title: 'FAQs', url: '/support/faqs' },
  ]

  return (
    <>
      <SEOPageLayout
        title="Lateral Filter Blender Bags | Sterile Lab Sample Prep | AchievePack"
        description="AchievePack lateral filter blender bags feature side-mounted non-woven filtration membrane for instant, particle-free microbiology sample preparation. Gamma sterilized, clean room produced. 400mL capacity for food, pharma & environmental testing."
        keywords={['lateral filter bags', 'blender bags', 'lab filter bags', 'sterile sample bags', 'microbiology sample prep', 'gamma sterilized bags', 'clean room production', 'food testing', 'pharmaceutical QC', 'environmental testing', 'homogenizer bags', '400mL blender bags']}
        canonicalUrl="https://achievepack.com/lab/lateral-filter-bags"
        heroTitle="Lateral Filter Blender Bags"
        heroSubtitle="Sterile lab blender bags with lateral non-woven filter for instant, contamination-free sample preparation. Clean room produced, gamma sterilized. NoBacteriaLaboratoryHomogenizerBag，SideNoFilter MembraneDesign，AchieveInstantaneousNoContaminationSamplePreparation。Cleanroom Production，γ Irradiation Sterilization。"
        heroImage="/imgs/lab/filter/a_achieve_pack_400ml_kv_main_visual_5029578.webp"
        introSummary="AchievePack® BagFilter series provides premium sterile blender bags with lateral non-woven filtration membrane. Clean room produced and gamma sterilized, our 400mL bags offer instant, particle-free sample preparation for food, pharmaceutical, cosmetic, and environmental microbiology testing."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
      />
      
      {/* Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
            onClick={() => setGalleryEnlarged(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryEnlarged.src} 
              alt={filterBagGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{filterBagGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{filterBagGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {filterBagGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LateralFilterBagsPage
