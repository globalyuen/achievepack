import React, { useState } from 'react'
import { Package, Beaker, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Microscope, Droplets, Zap, Award, FileCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/lab/blend/
const blenderBagsGallery = [
  { src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', title: 'AchievePack® Sterile Lab Blender Bags 5-80 mL', desc: 'AchievePack® NoBacteriaLaboratoryHomogenizerBag 5-80 mL' },
  { src: '/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp', title: 'Capacity & Size - 5-80 mL, 155 × 105 mm', desc: 'CapacityAndDimensions - 5-80 mL, 155 × 105 mm' },
  { src: '/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp', title: 'Material & Thickness - 75 μm LDPE Film', desc: 'MaterialAndThickness - 75 μm LDPE Film' },
  { src: '/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp', title: 'Gamma Irradiated Sterility 10-25 kGy', desc: 'γ Radiation Sterilization 10-25 kGy' },
  { src: '/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp', title: 'Impact Resistance & Strength', desc: 'Impact ResistantStrongDegree' },
  { src: '/imgs/lab/blend/a_kv_microbiology_application_2438663.webp', title: 'Microbiology Sample Preparation', desc: 'Microbial Sample Preparation' },
  { src: '/imgs/lab/blend/a_kv_transparency_observation_4148902.webp', title: 'High Clarity for Visual Observation', desc: 'High TransparencyCanViewObserve' },
  { src: '/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp', title: 'Bulk Packaging - 1,000 bags/case', desc: 'BatchVolumePackaging - Per Carton 1,000 Only' },
  { src: '/imgs/lab/blend/a_kv_specifications_summary_8537834.webp', title: 'Complete Technical Specifications', desc: 'CompleteTechnologySpecification' },
  { src: '/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp', title: 'AchievePack® Lab Solutions', desc: 'AchievePack® LaboratorySolveSolution' },
]

const LabBlenderBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = blenderBagsGallery.length - 1
    if (newIndex >= blenderBagsGallery.length) newIndex = 0
    setGalleryEnlarged({ src: blenderBagsGallery[newIndex].src, index: newIndex })
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
      title: 'AchievePack® Lab Blender Bags Overview',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Sterile lab blender bags for small-volume sample preparation</strong> — AchievePack® Lab Blender Bags feature high-clarity virgin LDPE film with gamma irradiation sterilization. Ideal for 5-80 mL microbiology samples in food testing, pharmaceutical QC, and environmental laboratories.
            </p>
            <p className="text-neutral-700">
              SmallBodyAreaSamplePreparationProfessionalUseNoBacteriaHomogenizerBag — AchievePack® LaboratoryHomogenizerBagUsingHighTransparentFood GradeOriginalRaw LDPE Film，γ Irradiation Sterilization。Suitable forFood Testing、PharmaceuticalQuality ControlAndEnvironmentLaboratoryOf 5-80 mL MicrobialSample。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
            imageAlt="AchievePack Lab Blender Bags Hero"
            title="Sterile Lab Blender Bags for Microbiology"
            titleCn="MicrobialStudyProfessionalUseNoBacteriaLaboratoryHomogenizerBag"
            content="AchievePack® Lab Blender Bags are designed for professional microbiology laboratories, food testing facilities, and pharmaceutical QC departments. Made from high-clarity virgin LDPE film, these sterile bags provide a reliable, contamination-free environment for sample preparation and homogenization."
            contentCn="AchievePack® LaboratoryHomogenizerBagProfessionalForProfessionalIndustryMicrobialLaboratory、Food TestingInstitutionAndPharmaceuticalQuality ControlPartDoorDesign。UsingHigh TransparencyFood GradeOriginalRaw LDPE FilmMadeForm，TheseNoBacteriaBagForSamplePreparationAndHomogenizerizationProvideCanReliableOfNoContaminationEnvironment。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'capacity',
      title: 'Optimized Small Volume Capacity',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp"
            imageAlt="Capacity and Dimensions"
            title="5-80 mL Capacity Range"
            titleCn="5-80 mL CapacityRange"
            content={`With a capacity range of 5-80 mL and standard dimensions of 155 mm \u00d7 105 mm (6" \u00d7 4"), these bags are perfectly sized for microbiology sample preparation, environmental testing, and quality control applications. The compact size ensures efficient use of laboratory space while maintaining sample integrity.`}
            contentCn={`CapacityRange 5-80 mL，StandardDimensions 155 mm \u00d7 105 mm（6" \u00d7 4"），TheseBagChildIdeal forSuitableMicrobial Sample Preparation、Environmental TestingAndQuality ControlApplication。CompactOfDimensionsEnsureLaboratorySpaceOfEfficientBenefitUse，MeanwhileMaintainSampleCompleteProperty。`}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">5-80 mL</h4>
              <p className="text-xs text-neutral-500">Capacity Capacity</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">155 × 105 mm</h4>
              <p className="text-xs text-neutral-500">Dimensions Dimensions</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">75 μm</h4>
              <p className="text-xs text-neutral-500">Wall Thickness Wall Thickness</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">1,000/case</h4>
              <p className="text-xs text-neutral-500">Packaging Packaging</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material',
      title: 'High-Clarity LDPE Film Material',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp"
            imageAlt="Material and Thickness Detail"
            title="Reinforced 75 μm LDPE Film"
            titleCn="AddThick 75 μm LDPE Film"
            content="Our lab blender bags feature a robust 75 μm (3 mil) high-clarity LDPE film with a reinforced single wide bottom seal and no side seams. This construction ensures maximum strength and puncture resistance during intensive paddle blending and stomaching operations, preventing leaks and sample loss."
            contentCn="OurLaboratoryHomogenizerBagUsingSolidSolidOf 75 μm（3 mil）High Transparency LDPE Film，WithPrepareStrengthenTypeSingleWideBottomSeal，NoSideSealDesign。ThisStructureEnsureInHighStrongDegreeSlapHomogenizerAndStomachBagStyleOperationProcessInToolHaveMostLargeStrongDegreeAndPuncture ResistantProperty，PreventLeakAndSampleLoss。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'sterility',
      title: 'Gamma Irradiation Sterilization',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp"
            imageAlt="Gamma Sterilization"
            title="Gamma Irradiated for Guaranteed Sterility"
            titleCn="γ Radiation Sterilization，EnsureNoBacteria"
            content="Each bag is gamma irradiated at 10-25 kGy to ensure complete sterility. Designed for single-use applications, these bags eliminate the risk of cross-contamination between samples, making them ideal for microbiology, pharmaceutical, and food safety testing laboratories."
            contentCn="EachUnitBagChildAllThroughThrough 10-25 kGy Of γ Radiation Sterilization，WithEnsureCompleteNoBacteria。TheseBagChildDesignForOncePropertyUse，EliminateDoneSampleOfBetweenCrossContaminationOfRisk，Ideal forSuitableMicrobialStudy、PharmaceuticalAndFoodSafeTestingLaboratoryUse。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Gamma Sterilized</h4>
              <p className="text-sm text-blue-700">10-25 kGy irradiation</p>
              <p className="text-xs text-blue-600 mt-1">γ InjectLine 10-25 kGy Sterilization</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Single-Use Design</h4>
              <p className="text-sm text-blue-700">Eliminates cross-contamination</p>
              <p className="text-xs text-blue-600 mt-1">OncePropertyUseEliminateContamination</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <CheckCircle className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Contamination-Free</h4>
              <p className="text-sm text-blue-700">Pre-use sterility guaranteed</p>
              <p className="text-xs text-blue-600 mt-1">UseBeforeNoBacteriaGuarantee</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'strength',
      title: 'Impact Resistance & Durability',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp"
            imageAlt="Strength and Impact Resistance"
            title="Built to Withstand Intensive Blending"
            titleCn="ResistantReceiveHighStrongDegreeSlapHomogenizer"
            content="The reinforced wall strength and wide bottom seal design allow these bags to endure prolonged paddle blending without rupture or puncture. Compatible with leading paddle blender models (e.g., Paddle Blender Model 80/3500), they maintain integrity even under vigorous agitation, ensuring reliable sample homogenization."
            contentCn="StrengthenTypeBagWallStrongDegreeAndWideBottomSealDesignEnableTheseBagChildCanEnoughWithstandLongTimeBetweenOfSlapHomogenizerAndNotBreakSplitOrPierceHole。CompatibleCapacityMainstreamSlapStyleHomogenizerDeviceTypeNumber（If Paddle Blender Model 80/3500），ImmediatelyEnableInDramaStrongStirUnderAlsoCanMaintainCompleteProperty，EnsureCanReliableOfSampleHomogenizerization。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Microbiology Applications',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_microbiology_application_2438663.webp"
            imageAlt="Microbiology Applications"
            title="Ideal for Microbiology Sample Preparation"
            titleCn="Microbial Sample PreparationOfIdealChoose"
            content="Specifically designed for microbiology sample preparation, storage, and transport, these bags are widely used in food microbiology testing, pharmaceutical QC, environmental sample processing, and clinical laboratory applications. The sterile environment ensures accurate, contamination-free results."
            contentCn="ProfessionalForMicrobial Sample Preparation、StoreAndTransportationDesign，TheseBagChildWideApplicationAtFoodMicrobialTesting、PharmaceuticalQuality Control、EnvironmentSampleProcessingAndClinicalLaboratoryApplication。NoBacteriaEnvironmentEnsureStandardExact、NoContaminationOfKnotResult。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <span className="text-2xl mb-2 block">🥗</span>
              <h4 className="font-semibold text-green-800 text-sm">Food Testing</h4>
              <p className="text-xs text-green-600">Food Testing</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <span className="text-2xl mb-2 block">💊</span>
              <h4 className="font-semibold text-purple-800 text-sm">Pharmaceutical QC</h4>
              <p className="text-xs text-purple-600">PharmaceuticalQuality Control</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
              <span className="text-2xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-teal-800 text-sm">Environmental</h4>
              <p className="text-xs text-teal-600">Environmental Testing</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <span className="text-2xl mb-2 block">🔬</span>
              <h4 className="font-semibold text-blue-800 text-sm">Research Labs</h4>
              <p className="text-xs text-blue-600">ResearchLaboratory</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transparency',
      title: 'High Clarity for Visual Observation',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_transparency_observation_4148902.webp"
            imageAlt="High Clarity Visual Observation"
            title="Crystal-Clear Film for Easy Sample Observation"
            titleCn="HighTransparentFilmConvenientAtObserveSample"
            content="The high-clarity LDPE film allows technicians to easily observe sample status, homogenization progress, and any particulate matter throughout the preparation process. This transparency improves workflow efficiency and quality control, reducing the need to open bags unnecessarily."
            contentCn="High Transparency LDPE FilmEnableTechnologyPersonStaffCanEnoughInWholeUnitPreparationProcessInLightLooseObserveSampleStatus、HomogenizerizationIntoDegreeAndAnyParticleMaterialQuality。ThisTransparentDegreeRaiseHighDoneWorkProcessEfficiencyAndQuality Control，ReduceDoneNotMustNeedOpenBagChildOfRequireDemand。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'packaging',
      title: 'Bulk Packaging & Supply',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp"
            imageAlt="Bulk Packaging"
            title="Convenient Bulk Packaging"
            titleCn="ConvenientQuickBatchVolumePackaging"
            content="Available in cases of 1,000 bags with inner sachet packing for easy dispensing and protection. The resealable inner packaging helps maintain sterility of unused bags and simplifies inventory management in busy laboratory environments."
            contentCn="Per Carton 1,000 Only，WithHaveCanSealInsideBagSmallPackaging，ConvenientAtDivideSendAndProtection。CanHeavyNewSealedOfInsidePackagingHaveAssistAtMaintainNotUseBagChildOfNoBacteriaStatus，AndSimpleizationBusyLaboratoryEnvironmentInOfInventoryManagement。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_specifications_summary_8537834.webp"
            imageAlt="Technical Specifications"
            title="Complete Technical Specifications"
            titleCn="CompleteTechnologySpecification"
            content="Material: Polyethylene (LDPE) | Thickness: 75 μm (3 mil) | Capacity: 5-80 mL | Size: 155 × 105 mm | Sterility: Gamma irradiated 10-25 kGy | Autoclavable: No | Color: Transparent | Use: Laboratory blender sample preparation | Packaging: 1,000 bags per case with sachet inner packing."
            contentCn="Material：Polyethylene（LDPE）| Thickness：75 μm（3 mil）| Capacity：5-80 mL | Dimensions：155 × 105 mm | SterilizationMethod：γ InjectLine 10-25 kGy | CanHighPressureSterilization：Whether | ColorColor：Transparent | UseRoute：LaboratoryHomogenizerDeviceSamplePreparation | Packaging：Per Carton 1,000 Only，WithHaveInsideBagSmallPackaging。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'brand',
      title: 'AchievePack® Lab Solutions',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp"
            imageAlt="AchievePack Lab Solutions"
            title="AchievePack® Lab Packaging Solutions"
            titleCn="AchievePack® LaboratoryPackagingSolveSolution"
            content="Trust AchievePack® for comprehensive lab packaging solutions. Our sterile blender bags are manufactured in cleanroom facilities following strict quality control standards. We provide reliable, contamination-free packaging for microbiology labs, QC departments, and research institutions worldwide."
            contentCn="Trust AchievePack® ProvideOfFullFaceLaboratoryPackagingSolveSolution。OurNoBacteriaHomogenizerBagInCleanClean RoomSetApplyInProduction，FollowStrictOfQuality ControlStandard。WeForGlobalMicrobialLaboratory、Quality ControlPartDoorAndResearch InstitutionProvideCanReliable、NoContaminationOfPackaging。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              AchievePack Quality Assurance QualityGuarantee
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Clean Room Production Cleanroom Production</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Gamma Sterilized γ Irradiation Sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Strict Quality Control StrictQuality Control</span>
              </div>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Order Lab Blender Bags?</h3>
              <p className="text-primary-100 mb-2">StandardPrepareGoodOrderLaboratoryHomogenizerBag?？</p>
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
    { question: 'What are Lab Blender Bags used for?', answer: 'Lab blender bags are sterile, single-use bags designed for microbiology sample preparation, homogenization, storage, and transport. They are ideal for food testing, pharmaceutical QC, and environmental sample processing in laboratory settings.' },
    { question: 'What is the capacity range of these blender bags?', answer: 'AchievePack® Lab Blender Bags are designed for small volume samples ranging from 5 to 80 mL, with typical dimensions of 155 mm × 105 mm (6" × 4").' },
    { question: 'Are these bags sterile?', answer: 'Yes, all AchievePack® Lab Blender Bags are gamma irradiated (10-25 kGy) for guaranteed sterility. They are single-use bags to eliminate cross-contamination risks.' },
    { question: 'Can these bags be autoclaved?', answer: 'No, these blender bags are not autoclavable. They come pre-sterilized by gamma irradiation and are designed for single-use applications only.' },
    { question: 'What material are the bags made from?', answer: 'The bags are made from high-clarity, food-grade virgin LDPE (Low-Density Polyethylene) film with a thickness of 75 μm (3 mil), providing excellent transparency for sample observation.' },
    { question: 'Are these bags compatible with paddle blenders?', answer: 'Yes, these bags are specifically designed to work with paddle blender systems such as the Paddle Blender Model 80/3500 and similar stomacher-type homogenizers.' },
  ]

  const relatedLinks = [
    { title: 'Lateral Filter Bags', url: '/lab/lateral-filter-bags', description: 'Sterile bags with lateral filter membrane' },
    { title: 'Wire Closure Bags', url: '/lab/wire-closure-bags', description: 'Lab bags with superior metal wire seal' },
    { title: 'Company Certificates', url: '/company/certificates', description: 'ISO certifications and quality standards' },
    { title: 'About Achieve Pack', url: '/company/about', description: 'Learn about our company and mission' },
    { title: 'Factory Tour', url: '/company/factory-tour', description: 'See our cleanroom manufacturing facility' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Flexible stand-up packaging solutions' },
    { title: 'Flat Pouches', url: '/packaging/flat-pouches', description: 'Flat-bottom pouch packaging' },
    { title: 'Barrier Options', url: '/features/barrier-options', description: 'Material barrier performance guide' },
    { title: 'Digital Printing', url: '/printing/digital-printing', description: 'Custom digital printing services' },
    { title: 'FAQs', url: '/support/faqs', description: 'Frequently asked questions' },
  ]

  return (
    <>
      <SEOPageLayout
        title="Lab Blender Bags | Sterile Sample Preparation Bags | AchievePack"
        description="AchievePack® sterile lab blender bags for microbiology sample preparation. 5-80 mL capacity, gamma irradiated, high-clarity LDPE, impact resistant. Perfect for food testing, pharmaceutical QC, and environmental labs."
        keywords={['lab blender bags', 'sterile sample bags', 'microbiology bags', 'homogenizer bags', 'paddle blender bags', 'stomacher bags', 'laboratory sample preparation', 'gamma irradiated bags', 'food testing bags', 'pharmaceutical QC bags', '5-80 mL bags', 'LDPE sterile bags']}
        canonicalUrl="https://achievepack.com/lab/lab-blender-bags"
        heroTitle="Lab Blender Bags"
        heroSubtitle="Sterile, high-clarity LDPE bags for 5-80 mL microbiology sample preparation. Gamma sterilized, impact resistant. Perfect for food, pharma & environmental testing. NoBacteriaHighTransparent LDPE Bag，Suitable for 5-80 mL Microbial Sample Preparation。γ Sterilization，Impact Resistant。"
        heroImage="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
        introSummary="AchievePack® Lab Blender Bags provide sterile, single-use bags for microbiology sample preparation with 5-80 mL capacity. Made from high-clarity 75 μm LDPE film, gamma irradiated at 10-25 kGy. Ideal for food testing, pharmaceutical QC, environmental labs, and research institutions requiring contamination-free sample homogenization."
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
              alt={blenderBagsGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{blenderBagsGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{blenderBagsGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {blenderBagsGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LabBlenderBagsPage
