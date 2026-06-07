import React, { useState } from 'react'
import { Tag, Sticker, Layers, Leaf, Palette, Printer, Sparkles, Settings, Truck, Building2, Package, CheckCircle, Star, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck, Shield, Users, Droplets, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

// Combined gallery images from custom-label and custom-sticker
const combinedGallery = [
  // Custom Labels
  { src: '/imgs/label/custom-label/hero.webp', title: 'Custom Sheet Labels', desc: 'CustomPaperNotAdhesiveLabel', category: 'labels' },
  { src: '/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp', title: 'Brand Label Overview', desc: 'BrandLabelOverview', category: 'labels' },
  { src: '/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp', title: 'Labels on Pouches', desc: 'LabelApplicationAtStand-Up Pouches', category: 'labels' },
  { src: '/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp', title: 'Multi-Material Labels', desc: 'MultipleMaterialLabel', category: 'labels' },
  // Custom Stickers
  { src: '/imgs/label/custom-sticker/hero.webp', title: 'Custom Stickers', desc: 'CustomSticker', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp', title: 'Four Sticker Types', desc: 'Four TypesStickerCategoryType', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp', title: 'Custom Shapes', desc: 'Custom Shape', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp', title: 'Eco-Friendly Materials', desc: 'Eco-Friendly Materials', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp', title: 'Surface Finishes', desc: 'Surface Finish', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp', title: 'Brand Applications', desc: 'BrandApplicationScenario', category: 'stickers' },
]

const LabelsAndStickersPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const translatedGallery = combinedGallery.map((item, idx) => ({
    ...item,
    title: t(`seoPages.pages.labelsAndStickers.achievePack.gallery.item${idx + 1}.title`, { defaultValue: item.title }),
    desc: t(`seoPages.pages.labelsAndStickers.achievePack.gallery.item${idx + 1}.desc`, { defaultValue: item.desc }),
  }))

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = combinedGallery.length - 1
    if (newIndex >= combinedGallery.length) newIndex = 0
    setGalleryEnlarged({ src: combinedGallery[newIndex].src, index: newIndex })
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">
              {t('seoPages.pages.labelsAndStickers.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}
            </div>
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">
              {t('seoPages.pages.labelsAndStickers.achievePack.clickToEnlarge', { defaultValue: 'Click to enlarge Click to enlarge' })}
            </div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.title', { defaultValue: 'Custom Labels & Stickers Overview' }),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>{t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.summaryStrong', { defaultValue: 'Complete labeling and sticker solutions for every brand' })}</strong>{t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.summaryText', { defaultValue: ' — From professional sheet labels to factory-grade roll stickers, we provide full customization with premium materials, eco-friendly options, and expert printing capabilities.' })}
            </p>
            <p className="text-neutral-700 mb-4">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.summaryStrongCn', { defaultValue: 'ForEachUnitBrandProvideCompleteOfLabelAndStickerSolveSolution' })}{t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.summaryTextCn', { defaultValue: ' — FromProfessionalIndustryPaperNotAdhesiveLabelToFactory GradeRoll FormSticker，WeProvidePremiumMaterial、Eco-FriendlyOptionsAndProfessionalIndustryPrintingCanPowerOfFullFaceCustomService。' })}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.badgeSheet', { defaultValue: 'Sheet Labels' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.badgeRoll', { defaultValue: 'Roll Stickers' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.badgeDieCut', { defaultValue: 'Die-Cut Stickers' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.badgeKissCut', { defaultValue: 'Kiss Cut' })}
              </span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.badgeEcoFriendly', { defaultValue: 'Eco-Friendly' })}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/products/custom-labels" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/label/custom-label/hero.webp" alt={t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardLabels.title', { defaultValue: 'Custom Sheet Labels' })} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 mb-2">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardLabels.title', { defaultValue: 'Custom Sheet Labels' })}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-2">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardLabels.titleCn', { defaultValue: 'CustomPaperNotAdhesiveLabel' })}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardLabels.desc', { defaultValue: 'Professional sheet labels with no minimum order, print-ready in 2-3 business days. Perfect for products, events, and small batch customization.' })}
              </p>
            </Link>
            <Link to="/products/custom-stickers" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/label/custom-sticker/hero.webp" alt={t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardStickers.title', { defaultValue: 'Custom Stickers' })} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 mb-2">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardStickers.title', { defaultValue: 'Custom Stickers' })}
              </h3>
              <p className="text-sm text-primary-600 font-medium mb-2">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardStickers.titleCn', { defaultValue: 'Factory GradeCustomSticker' })}
              </p>
              <p className="text-neutral-600 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.overview.cardStickers.desc', { defaultValue: 'Factory-grade custom stickers with multiple types, shapes, materials, and finishes. Cut-to-size, roll, sheet, and kiss-cut options.' })}
              </p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'labels',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.title', { defaultValue: 'Custom Sheet Labels' }),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp"
            imageAlt="Brand label product overview"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section1.title', { defaultValue: 'Professional Sheet Labels for Any Product' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section1.titleCn', { defaultValue: 'Suitable forAnyProductOfProfessionalIndustryPaperLabel' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section1.content', { defaultValue: 'High-quality sheet labels designed for products, events, personal use, and small batch customization. Multiple material options including white matte, glossy, kraft, and clear films. Strong permanent adhesive ensures your labels stay perfectly applied.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section1.contentCn', { defaultValue: 'High Quality Paper Adhesive Labels，Suitable forProductLabel、ActivityLabel、UnitPersonCustomAndSmall BatchProduction。MultipleMaterialOptional，PackIncludingWhiteMatte、Gloss、Kraft PaperAndTransparentFilm。StrongPowerPermanentLongGlueStickAgentEnsureLabelCompleteBeautyPasteAttach。' })}
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp"
            imageAlt="Labels on stand-up pouches"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section2.title', { defaultValue: 'Perfect Pairing with Flexible Packaging' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section2.titleCn', { defaultValue: 'AndFlexiblePackagingCompleteBeautyMatchWith' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section2.content', { defaultValue: 'Our custom labels are designed to complement our stand-up pouches and flexible packaging. Whether you need branded labels for your pouches or separate product labeling, we ensure consistent quality across your entire packaging system.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.section2.contentCn', { defaultValue: 'OurCustomLabelPurposeInAndStand-Up PouchesAndFlexiblePackagingCompleteBeautyWithSuitable。NoTheoryYouRequireNeedBagChildBrandLabelAlsoIsIndependentProductLabeling，WeEnsureWholeUnitPackagingSystemOfOneUltimateQualityVolume。' })}
            imageLeft={false}
            index={2}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <FileCheck className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.noMinimum.title', { defaultValue: 'No Minimum' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.noMinimum.desc', { defaultValue: 'Order any quantity' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.noMinimum.sub', { defaultValue: 'NoMostLowMinimum OrderVolume' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Truck className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.days.title', { defaultValue: '2-3 Days' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.days.desc', { defaultValue: 'Print-ready turnaround' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.days.sub', { defaultValue: 'FastOutGoods' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Palette className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.multiDesign.title', { defaultValue: 'Multi-Design' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.multiDesign.desc', { defaultValue: 'Discounts available' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.multiDesign.sub', { defaultValue: 'Multi-Design Discounts' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.strongAdhesive.title', { defaultValue: 'Strong Adhesive' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.strongAdhesive.desc', { defaultValue: 'Permanent hold' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.labels.benefits.strongAdhesive.sub', { defaultValue: 'StrongPowerGlueStick' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'stickers',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.title', { defaultValue: 'Custom Stickers' }),
      icon: <Sticker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp"
            imageAlt="Four types of custom stickers"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section1.title', { defaultValue: 'Four Sticker Types for Every Need' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section1.titleCn', { defaultValue: 'Four TypesStickerCategoryTypeMeetVariousRequireDemand' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section1.content', { defaultValue: 'Choose from Cut to Size (individual die-cut stickers), Roll (continuous roll for high-volume application), Sheet (multiple stickers per sheet), and Kiss Cut (stickers on backing sheet for easy peeling). Each type is optimized for specific use cases.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section1.contentCn', { defaultValue: 'CanChooseDie-Cut Sheets、Roll Form、Paper StyleAndDie Cut。Each TypeCategoryTypeAllNeedleForSpecificUseScenarioOptimizeization。' })}
            imageLeft={true}
            index={5}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp"
            imageAlt="Custom shapes and sizes for stickers"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section2.title', { defaultValue: 'Unlimited Shape & Size Options' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section2.titleCn', { defaultValue: 'NoLimitShapeAndDimensionsChoose' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section2.content', { defaultValue: 'Go beyond standard shapes with our custom die-cutting capabilities. Square, circle, oval, rounded rectangle, heart, hexagon, starburst, or completely custom shapes — we can produce any design you need with precision cutting.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.section2.contentCn', { defaultValue: 'Break ThroughStandardShapeLimit，WeProvideCustomDie CutCanPower。Square、Round、Oval、Rounded RectangleForm、HeartForm、SixEdgeForm，OrCompleteCustom Shape。' })}
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.roll.title', { defaultValue: 'Roll Stickers' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.roll.desc', { defaultValue: 'High-volume ready' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.roll.sub', { defaultValue: 'Roll FormSticker' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Settings className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.dieCut.title', { defaultValue: 'Die-Cut' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.dieCut.desc', { defaultValue: 'Custom shapes' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.dieCut.sub', { defaultValue: 'Die CutFormType' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.sheet.title', { defaultValue: 'Sheet Stickers' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.sheet.desc', { defaultValue: 'Multi per sheet' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.sheet.sub', { defaultValue: 'Paper Style' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Sparkles className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.kissCut.title', { defaultValue: 'Kiss Cut' })}
              </h5>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.kissCut.desc', { defaultValue: 'Easy peeling' })}
              </p>
              <p className="text-xs text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.stickers.benefits.kissCut.sub', { defaultValue: 'Die Cut' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.title', { defaultValue: 'Materials & Finishes' }),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp"
            imageAlt="Eco-friendly PLA and paper-based materials"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section1.title', { defaultValue: 'Eco-Friendly & Sustainable Options' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section1.titleCn', { defaultValue: 'Eco-FriendlyCanContinuousChoose' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section1.content', { defaultValue: 'Choose environmentally responsible materials including PLA-based biodegradable films, FSC-certified paper stocks, and recyclable substrates. Perfect for brands committed to reducing environmental impact.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section1.contentCn', { defaultValue: 'ChooseEco-FriendlyResponsibleOfMaterial，PackIncludingPLABaseCanDegradableFilm、FSCCertificationPaperAndRecyclableBase Material。Ideal forSuitableUltimatePowerAtReduceEnvironmentImpactOfBrand。' })}
            imageLeft={true}
            index={7}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp"
            imageAlt="Surface finish comparison"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section2.title', { defaultValue: 'Premium Surface Finishes' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section2.titleCn', { defaultValue: 'Premium Surface Finishing' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section2.content', { defaultValue: 'Elevate your labels and stickers with professional finishes: Matte for sophisticated, non-reflective look; Gloss for vibrant shine; UV Coating for enhanced durability; and Hot Foil Stamping for luxurious metallic accents.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.section2.contentCn', { defaultValue: 'UseProfessionalIndustrySurfaceProcessingImproveLabelAndStickerQuality：MattePresentFineUltimateOutsideView、GlossWithComeGloss、UVCoatingLayerIncreaseStrongResistantLongProperty、Hot StampingWorkerArtStrikeMakeLuxury GoldBelongQualityFeel。' })}
            imageLeft={false}
            index={8}
          />

          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.matte.title', { defaultValue: 'Matte' })}
              </div>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.matte.sub', { defaultValue: 'Matte' })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.gloss.title', { defaultValue: 'Gloss' })}
              </div>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.gloss.sub', { defaultValue: 'Gloss' })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.uv.title', { defaultValue: 'UV Coating' })}
              </div>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.uv.sub', { defaultValue: 'UVCoatingLayer' })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.foil.title', { defaultValue: 'Hot Foil' })}
              </div>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.foil.sub', { defaultValue: 'Hot Stamping' })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.kraft.title', { defaultValue: 'Kraft' })}
              </div>
              <p className="text-xs text-neutral-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.materials.finishes.kraft.sub', { defaultValue: 'Kraft Paper' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.title', { defaultValue: 'Brand Applications' }),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp"
            imageAlt="Brand application collage"
            title={t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.section1.title', { defaultValue: 'From Factory to Brand Application' })}
            titleCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.section1.titleCn', { defaultValue: 'FromFactoryToBrandLand' })}
            content={t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.section1.content', { defaultValue: 'Our labels and stickers work seamlessly across applications: product branding on bottles and jars, flexible packaging labeling, box sealing, food container identification, promotional materials, and event marketing.' })}
            contentCn={t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.section1.contentCn', { defaultValue: 'OurLabelAndStickerCanNoSeamApplicationAtVariousScenario：Bottles and JarsProductBrand、FlexiblePackagingLabeling、BoxChildSeal、FoodCapacityDeviceIdentification、PromotionMaterialAndActivityMarketing。' })}
            imageLeft={true}
            index={9}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Package className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.branding.title', { defaultValue: 'Product Branding' })}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.branding.desc', { defaultValue: 'Bottles, jars, pouches, boxes' })}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.branding.sub', { defaultValue: 'ProductBrandLabeling' })}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.sealing.title', { defaultValue: 'Package Sealing' })}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.sealing.desc', { defaultValue: 'Seal bags, boxes, envelopes' })}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.sealing.sub', { defaultValue: 'PackagingSeal' })}
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Zap className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.marketing.title', { defaultValue: 'Marketing & Events' })}
              </h5>
              <p className="text-sm text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.marketing.desc', { defaultValue: 'Promotional, giveaways' })}
              </p>
              <p className="text-xs text-primary-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.applications.benefits.marketing.sub', { defaultValue: 'MarketingAndActivity' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.related.title', { defaultValue: 'Complete Your Packaging Solution' }),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.content', { defaultValue: 'Combine custom labels and stickers with our flexible packaging solutions for a complete branded experience:' })}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item1.title', { defaultValue: 'Stand-Up Pouches' })}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item1.desc', { defaultValue: 'Flexible packaging base' })}
              </p>
            </Link>
            <Link to="/packaging/flat-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Layers className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item2.title', { defaultValue: 'Flat Pouches' })}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item2.desc', { defaultValue: 'Sachets & samples' })}
              </p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item3.title', { defaultValue: 'Surface Finishes' })}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item3.desc', { defaultValue: 'Matte, gloss, soft-touch' })}
              </p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Leaf className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item4.title', { defaultValue: 'Compostable Materials' })}
              </h5>
              <p className="text-xs text-neutral-600 mt-1">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.related.item4.desc', { defaultValue: 'Eco-friendly options' })}
              </p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.title', { defaultValue: 'Frequently Asked Questions' }),
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q1.q', { defaultValue: 'What is the difference between labels and stickers?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q1.a', { defaultValue: 'Labels are typically functional identifiers designed for product packaging, with focus on information display and brand identity. Stickers can be both functional and decorative, often used for marketing, branding, sealing, and promotional purposes. Both use similar materials and printing methods.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q2.q', { defaultValue: 'Do you offer eco-friendly label options?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q2.a', { defaultValue: 'Yes! We offer PLA-based biodegradable films, FSC-certified paper stocks, and recyclable substrates. Our eco-friendly options work great with our compostable packaging to create a fully sustainable brand experience.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q3.q', { defaultValue: 'Can I use custom labels with your stand-up pouches?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q3.a', { defaultValue: 'Absolutely! Our custom labels are specifically designed to complement our stand-up pouches and flexible packaging. We ensure adhesive compatibility and sizing works perfectly with our pouch surfaces for a cohesive brand presentation.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q4.q', { defaultValue: 'What finishing options are available?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q4.a', { defaultValue: 'We offer multiple finishes: Matte for sophisticated appeal, Gloss for vibrant shine, UV Coating for durability, Hot Foil Stamping for metallic accents, and Kraft for natural aesthetics. Finishes can dramatically elevate your product\'s appearance.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q5.q', { defaultValue: 'How fast is the turnaround time?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.faq.q5.a', { defaultValue: 'For sheet labels, turnaround is 2-3 business days after design approval. Roll stickers and larger orders typically take 7-10 days production. Our team reviews every file and provides feedback before printing begins.' })}
            </div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.title', { defaultValue: 'Ready to Order Custom Labels & Stickers?' }),
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            {t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.subtitle', { defaultValue: 'Get Your Custom Quote Today' })}
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            {t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.content', { defaultValue: 'Contact our team to discuss your labeling and sticker requirements. Professional quality, flexible options, and expert support throughout the process.' })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <Calendar className="h-5 w-5" />
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.btnCall', { defaultValue: 'Book Free Consultation' })}
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20labels%20and%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.btnWa', { defaultValue: 'WhatsApp Chat' })}
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Labels and Stickers Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              {t('seoPages.pages.labelsAndStickers.achievePack.sections.cta.btnMail', { defaultValue: 'Email Quote' })}
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.labelsAndStickers.achievePack.seo.title', { defaultValue: 'Custom Labels & Stickers | Sheet Labels, Roll Stickers, Die-Cut | Achieve Pack' })}
        description={t('seoPages.pages.labelsAndStickers.achievePack.seo.description', { defaultValue: 'Professional custom labels and stickers with premium materials, eco-friendly options, and expert finishes. Sheet labels, roll stickers, die-cut, and kiss-cut types. No minimum order.' })}
        canonicalUrl="https://achievepack.com/products/labels-and-stickers"
        heroTitle={t('seoPages.pages.labelsAndStickers.achievePack.seo.heroTitle', { defaultValue: 'Custom Labels & Stickers' })}
        heroSubtitle={t('seoPages.pages.labelsAndStickers.achievePack.seo.heroSubtitle', { defaultValue: 'Sheet Labels • Roll Stickers • Die-Cut • Eco-Friendly Options' })}
        introSummary={t('seoPages.pages.labelsAndStickers.achievePack.seo.introSummary', { defaultValue: 'Complete labeling and sticker solutions with premium materials, custom shapes, and professional finishes for every brand.' })}
        heroImage="/imgs/label/custom-label/hero.webp"
        sections={sections}
        keywords={t('seoPages.pages.labelsAndStickers.achievePack.seo.keywords', { returnObjects: true }) as string[]}
        schemaType="Product"
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={translatedGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{translatedGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{translatedGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {combinedGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LabelsAndStickersPage
