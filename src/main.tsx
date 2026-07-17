import RecyclableRollstockFilmPage from './pages/topics/RecyclableRollstockFilmPage'
import HolographicRetortPouchPage from './pages/topics/HolographicRetortPouchPage'
import WovenPolypropyleneSackPage from './pages/topics/WovenPolypropyleneSackPage'
import ResealableMylarBagSnacksPage from './pages/topics/ResealableMylarBagSnacksPage'
import CompostableVacuumSealBagPage from './pages/topics/CompostableVacuumSealBagPage'
import ChildResistantExitBagPage from './pages/topics/ChildResistantExitBagPage'
import TransparentSpoutPouchPage from './pages/topics/TransparentSpoutPouchPage'
import MatteFoilCoffeeBagPage from './pages/topics/MatteFoilCoffeeBagPage'
import KraftPaperFlatBottomBagPage from './pages/topics/KraftPaperFlatBottomBagPage'
import CustomStandUpPouchPetFoodPage from './pages/topics/CustomStandUpPouchPetFoodPage'
import React, { StrictMode, Suspense, lazy, ComponentType, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StoreProvider } from './store/StoreContext'
import { CalendlyProvider } from './contexts/CalendlyContext'
import { CustomQuoteProvider } from './contexts/CustomQuoteContext'
import './index.css'
import i18n from './i18n'
import { getDomain } from './utils/domain'

// Dynamic language and basename utility
export const getLanguageFromPath = () => {
  if (typeof window === 'undefined') return 'en';
  const pathname = window.location.pathname;
  const parts = pathname.split('/').filter(Boolean);
  const possibleLang = parts[0]?.toLowerCase();
  if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
    return possibleLang;
  }
  return 'en';
};

// Layout component to switch i18n active language dynamically
const LanguageWrapper = ({ lang }: { lang: string }) => {
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <Outlet />;
};

const Adancinglionchocolatelogo9125312 = lazyWithRetry(() => import('./pages/topics/ADancingLionChocolateLogo9125312'));
const ABioPeCardV34603248 = lazyWithRetry(() => import('./pages/topics/ABioPeCardV34603248'));
const ACorporateSustainabilityVariation21276624 = lazyWithRetry(() => import('./pages/topics/ACorporateSustainabilityVariation21276624'));
const PackFlatBottom = lazyWithRetry(() => import('./pages/topics/PackFlatBottom'));
const PackStandUp = lazyWithRetry(() => import('./pages/topics/PackStandUp'));
const PackSpout = lazyWithRetry(() => import('./pages/topics/PackSpout'));
const ACtaRevised7607342 = lazyWithRetry(() => import('./pages/topics/ACtaRevised7607342'));
const AValveClosureDetail6401844 = lazyWithRetry(() => import('./pages/topics/AValveClosureDetail6401844'));
const Aemuelixirlogo7729355 = lazyWithRetry(() => import('./pages/topics/AEmuElixirLogo7729355'));
const Ahikeagainremedieslogo3308658 = lazyWithRetry(() => import('./pages/topics/AHikeAgainRemediesLogo3308658'));
const Ajustbekindlogo9956961 = lazyWithRetry(() => import('./pages/topics/AJustBeKindLogo9956961'));
const Amorlifelogo7487286 = lazyWithRetry(() => import('./pages/topics/AMorlifeLogo7487286'));
const Amylkmadelogo6762912 = lazyWithRetry(() => import('./pages/topics/AMylkMadeLogo6762912'));
const Aplantpowderscompanylogo3847855 = lazyWithRetry(() => import('./pages/topics/APlantpowdersCompanyLogo3847855'));
const Aprofessionalportraitenhanced6830169 = lazyWithRetry(() => import('./pages/topics/AProfessionalPortraitEnhanced6830169'));
const Awiseanglerlogo8090229 = lazyWithRetry(() => import('./pages/topics/AWiseAnglerLogo8090229'));
const Arielle40Af85 = lazyWithRetry(() => import('./pages/topics/Arielle40af85'));
const Arielle41119A = lazyWithRetry(() => import('./pages/topics/Arielle41119a'));
const Cheryl = lazyWithRetry(() => import('./pages/topics/Cheryl'));
const Condimentsachetthreesidesealpage = lazyWithRetry(() => import('./pages/topics/CondimentSachetThreeSideSealPage'));
const Cosmeticcleanserthreesidezipperpouchpage = lazyWithRetry(() => import('./pages/topics/CosmeticCleanserThreeSideZipperPouchPage'));
const Cosmeticcreamstanduppouchpage = lazyWithRetry(() => import('./pages/topics/CosmeticCreamStandUpPouchPage'));
const Cosmeticsamplethreesidesealpage = lazyWithRetry(() => import('./pages/topics/CosmeticSampleThreeSideSealPage'));
const Davida7Ffbd = lazyWithRetry(() => import('./pages/topics/DavidA7ffbd'));
const Digitalproductpassportpackagingpage = lazyWithRetry(() => import('./pages/topics/DigitalProductPassportPackagingPage'));
const Driedfruitflatbottompouchpage = lazyWithRetry(() => import('./pages/topics/DriedFruitFlatBottomPouchPage'));
const Driedfruithangingzipperpouchpage = lazyWithRetry(() => import('./pages/topics/DriedFruitHangingZipperPouchPage'));
const Driedfruitstearnotchpage = lazyWithRetry(() => import('./pages/topics/DriedFruitsTearNotchPage'));
const Jemmacd3Fe7 = lazyWithRetry(() => import('./pages/topics/JemmaCd3fe7'));
const Leobfa697 = lazyWithRetry(() => import('./pages/topics/LeoBfa697'));
const Michelle294743 = lazyWithRetry(() => import('./pages/topics/Michelle294743'));
const Michelleb4C207 = lazyWithRetry(() => import('./pages/topics/MichelleB4c207'));
const Morlife = lazyWithRetry(() => import('./pages/topics/Morlife'));
const Nicole21E1Ff = lazyWithRetry(() => import('./pages/topics/Nicole21e1ff'));
const Nicole3D79B6 = lazyWithRetry(() => import('./pages/topics/Nicole3d79b6'));
const Paul11D985 = lazyWithRetry(() => import('./pages/topics/Paul11d985'));
const Paul8F1216 = lazyWithRetry(() => import('./pages/topics/Paul8f1216'));
const Remieeb5Ae = lazyWithRetry(() => import('./pages/topics/RemiEeb5ae'));
const Riceflatbottombagpage = lazyWithRetry(() => import('./pages/topics/RiceFlatBottomBagPage'));
const Richard498Cc2 = lazyWithRetry(() => import('./pages/topics/Richard498cc2'));
const Richarda2C72C = lazyWithRetry(() => import('./pages/topics/RichardA2c72c'));
const Ruby63D5B1 = lazyWithRetry(() => import('./pages/topics/Ruby63d5b1'));
const Ruby67Bc0A = lazyWithRetry(() => import('./pages/topics/Ruby67bc0a'));
const Steph5897C2 = lazyWithRetry(() => import('./pages/topics/Steph5897c2'));
const CompostableBabyFoodBags = lazyWithRetry(() => import('./pages/topics/compostable-baby-food-bags'));
const CompostableCertificationFaq = lazyWithRetry(() => import('./pages/topics/compostable-certification-faq'));
const CompostableHumidityControl = lazyWithRetry(() => import('./pages/topics/compostable-humidity-control'));
const CompostablePackagingBlog = lazyWithRetry(() => import('./pages/topics/compostable-packaging-blog'));
const CompostableSpoutedPouches = lazyWithRetry(() => import('./pages/topics/compostable-spouted-pouches'));
const CompostableZipperDurability = lazyWithRetry(() => import('./pages/topics/compostable-zipper-durability'));
const CondimentSachetThreeSideSeal = lazyWithRetry(() => import('./pages/topics/condiment-sachet-three-side-seal'));
const CosmeticCleanserThreeSideZipperPouch = lazyWithRetry(() => import('./pages/topics/cosmetic-cleanser-three-side-zipper-pouch'));
const CosmeticCreamStandUpPouch = lazyWithRetry(() => import('./pages/topics/cosmetic-cream-stand-up-pouch'));
const CosmeticSampleThreeSideSeal = lazyWithRetry(() => import('./pages/topics/cosmetic-sample-three-side-seal'));
const CosmeticSerumStandUpPouch = lazyWithRetry(() => import('./pages/topics/cosmetic-serum-stand-up-pouch'));
const CrispsShaped = lazyWithRetry(() => import('./pages/topics/crisps-shaped'));
const CustomBrandPackaging = lazyWithRetry(() => import('./pages/topics/custom-brand-packaging'));
const CustomBrandPackagingService = lazyWithRetry(() => import('./pages/topics/custom-brand-packaging-service'));
const CustomCompostablePouchSuppliers = lazyWithRetry(() => import('./pages/topics/custom-compostable-pouch-suppliers'));
const CustomPrintedSustainablePouches = lazyWithRetry(() => import('./pages/topics/custom-printed-sustainable-pouches'));
const CustomVsStandardPackaging = lazyWithRetry(() => import('./pages/topics/custom-vs-standard-packaging'));
const DdpPackaging = lazyWithRetry(() => import('./pages/topics/ddp-packaging'));
const DetergentSpout = lazyWithRetry(() => import('./pages/topics/detergent-spout'));
const DtcSustainablePackaging = lazyWithRetry(() => import('./pages/topics/dtc-sustainable-packaging'));
const EcommerceBrandPackagingSolutions = lazyWithRetry(() => import('./pages/topics/EcommerceBrandPackagingSolutions'));
const PackagingBarrierOptionsPresentation = lazyWithRetry(() => import('./pages/topics/PackagingBarrierOptionsPresentation'));
const BabyFoodPackagingV2 = lazyWithRetry(() => import('./pages/topics/BabyFoodPackagingV2'));
const PackagingLabelingGuideV2 = lazyWithRetry(() => import('./pages/topics/PackagingLabelingGuideV2'));
const SnackBrandVariation = lazyWithRetry(() => import('./pages/topics/SnackBrandVariation'));
const PackagingSizeGuideCardV2 = lazyWithRetry(() => import('./pages/topics/PackagingSizeGuideCardV2'));
const CompostablePackagingInsights = lazyWithRetry(() => import('./pages/topics/CompostablePackagingInsights'));
const SustainableMaterialsGuide = lazyWithRetry(() => import('./pages/topics/SustainableMaterialsGuide'));
const SurfaceFinishCloseDetail = lazyWithRetry(() => import('./pages/topics/SurfaceFinishCloseDetail'));
const BabyFoodPackagingV3 = lazyWithRetry(() => import('./pages/topics/BabyFoodPackagingV3'));

const AAchievePackClosureDecisionGuide8541101 = lazyWithRetry(() => import('./pages/topics/AAchievePackClosureDecisionGuide8541101'))
const Img360 = lazyWithRetry(() => import('./pages/topics/Img360'))
const Img1757 = lazyWithRetry(() => import('./pages/topics/Img1757'))
const Img2921 = lazyWithRetry(() => import('./pages/topics/Img2921'))
const Img2854 = lazyWithRetry(() => import('./pages/topics/Img2854'))
const Img607 = lazyWithRetry(() => import('./pages/topics/Img607'))
const Img954 = lazyWithRetry(() => import('./pages/topics/Img954'))
const Img2922 = lazyWithRetry(() => import('./pages/topics/Img2922'))
const Img767 = lazyWithRetry(() => import('./pages/topics/Img767'))
const Img945 = lazyWithRetry(() => import('./pages/topics/Img945'))
const Img5091 = lazyWithRetry(() => import('./pages/topics/Img5091'))
const Img4101 = lazyWithRetry(() => import('./pages/topics/Img4101'))
const Img1050 = lazyWithRetry(() => import('./pages/topics/Img1050'))
const Img927 = lazyWithRetry(() => import('./pages/topics/Img927'))
const Img1282 = lazyWithRetry(() => import('./pages/topics/Img1282'))
const Img677 = lazyWithRetry(() => import('./pages/topics/Img677'))
const Img524 = lazyWithRetry(() => import('./pages/topics/Img524'))
const Img4724 = lazyWithRetry(() => import('./pages/topics/Img4724'))
const Img4056 = lazyWithRetry(() => import('./pages/topics/Img4056'))
const Img4108 = lazyWithRetry(() => import('./pages/topics/Img4108'))
const Img4859 = lazyWithRetry(() => import('./pages/topics/Img4859'))
const Img680 = lazyWithRetry(() => import('./pages/topics/Img680'))
const Img2928 = lazyWithRetry(() => import('./pages/topics/Img2928'))
const Img368 = lazyWithRetry(() => import('./pages/topics/Img368'))
const Img587 = lazyWithRetry(() => import('./pages/topics/Img587'))
const Img975 = lazyWithRetry(() => import('./pages/topics/Img975'))
const Img586 = lazyWithRetry(() => import('./pages/topics/Img586'))
const Img380 = lazyWithRetry(() => import('./pages/topics/Img380'))
const Img4812 = lazyWithRetry(() => import('./pages/topics/Img4812'))
const Img1995 = lazyWithRetry(() => import('./pages/topics/Img1995'))
const Img3947 = lazyWithRetry(() => import('./pages/topics/Img3947'))
const Img4780 = lazyWithRetry(() => import('./pages/topics/Img4780'))
const Xnip20260102150348 = lazyWithRetry(() => import('./pages/topics/Xnip20260102150348'))
const BenefitsGridShowing = lazyWithRetry(() => import('./pages/topics/BenefitsGridShowing'))
const HeroIllustration = lazyWithRetry(() => import('./pages/topics/HeroIllustration'))
const EducationalCrossSection = lazyWithRetry(() => import('./pages/topics/EducationalCrossSection'))
const CommercialCompostingFacilityIllustration = lazyWithRetry(() => import('./pages/topics/CommercialCompostingFacilityIllustration'))
const TestSlugSchemaInfographic6 = lazyWithRetry(() => import('./pages/topics/TestSlugSchemaInfographic6'))

const APcrQualityComparisonPhoto2754953 = lazyWithRetry(() => import('./pages/topics/APcrQualityComparisonPhoto2754953'));
const ASupplyChainDiversityInfographic0424873 = lazyWithRetry(() => import('./pages/topics/ASupplyChainDiversityInfographic0424873'));
const AEnvironmentalImpactMetricsInfographic2859824 = lazyWithRetry(() => import('./pages/topics/AEnvironmentalImpactMetricsInfographic2859824'));
const HeroPcr7 = lazyWithRetry(() => import('./pages/topics/HeroPcr7'));
const ALandscapeComparisonPcrVirgin9079701 = lazyWithRetry(() => import('./pages/topics/ALandscapeComparisonPcrVirgin9079701'));
const ALandscapeSupplyChainConfidence4178486 = lazyWithRetry(() => import('./pages/topics/ALandscapeSupplyChainConfidence4178486'));
const AAchievepackSeaSaltVinegarChips1689612 = lazyWithRetry(() => import('./pages/topics/AAchievepackSeaSaltVinegarChips1689612'));
const AchieveBabyPea1770342362697 = lazyWithRetry(() => import('./pages/topics/AchieveBabyPea1770342362697'));
const AchieveBabyCarrot1770342349368 = lazyWithRetry(() => import('./pages/topics/AchieveBabyCarrot1770342349368'));
const ACalculatorRigidPlastic9646528 = lazyWithRetry(() => import('./pages/topics/ACalculatorRigidPlastic9646528'));
const ValveClosureDetail = lazyWithRetry(() => import('./pages/topics/ValveClosureDetail'));
const SizingFinderHero = lazyWithRetry(() => import('./pages/topics/SizingFinderHero'));
const InvestCalHero = lazyWithRetry(() => import('./pages/topics/InvestCalHero'));
const CtaRevisedDesign = lazyWithRetry(() => import('./pages/topics/CtaRevisedDesign'));
const SpoutPouchPackaging = lazyWithRetry(() => import('./pages/topics/SpoutPouchPackaging'));
const StandUpPouchPackaging = lazyWithRetry(() => import('./pages/topics/StandUpPouchPackaging'));
const FlatBottomPouchPackaging = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchPackaging'));
const CorporateSustainabilityVariation = lazyWithRetry(() => import('./pages/topics/CorporateSustainabilityVariation'));
const IllustratedPouchDesignVariation = lazyWithRetry(() => import('./pages/topics/IllustratedPouchDesignVariation'));
const BioPeCardSustainable = lazyWithRetry(() => import('./pages/topics/BioPeCardSustainable'));

const BiodegradableStandUpPouchSuppliersPage = lazyWithRetry(() => import('./pages/topics/BiodegradableStandUpPouchSuppliersPage'));
const CompostablePouchSizeChartForLiquidsPage = lazyWithRetry(() => import('./pages/topics/CompostablePouchSizeChartForLiquidsPage'));
const WholesalePricesForCompostablePouchesPage = lazyWithRetry(() => import('./pages/topics/WholesalePricesForCompostablePouchesPage'));
const DigitalPrintingFlexiblePackagingSmallRunsPage = lazyWithRetry(() => import('./pages/topics/DigitalPrintingFlexiblePackagingSmallRunsPage'));
const CompostableTeaPouchWithZipperPage = lazyWithRetry(() => import('./pages/topics/CompostableTeaPouchWithZipperPage'));
const CustomShapeDieCutPouchPage = lazyWithRetry(() => import('./pages/topics/CustomShapeDieCutPouchPage'));
const StandUpPouchDimensionsChartForPowdersPage = lazyWithRetry(() => import('./pages/topics/StandUpPouchDimensionsChartForPowdersPage'));
const CompostableHighBarrierFilmSuppliersPage = lazyWithRetry(() => import('./pages/topics/CompostableHighBarrierFilmSuppliersPage'));
const PrintedCompostableRetortBagsPage = lazyWithRetry(() => import('./pages/topics/PrintedCompostableRetortBagsPage'));
const CustomPrintedBarrierSachetsPage = lazyWithRetry(() => import('./pages/topics/CustomPrintedBarrierSachetsPage'));

const EcommerceBrandVariation2 = lazyWithRetry(() => import('./pages/topics/EcommerceBrandVariation2'))
const BarrierOptionsPresentationC = lazyWithRetry(() => import('./pages/topics/BarrierOptionsPresentationC'))
const BabyFoodHeroV2 = lazyWithRetry(() => import('./pages/topics/BabyFoodHeroV2'))
const LabelingGuideV2 = lazyWithRetry(() => import('./pages/topics/LabelingGuideV2'))
const SnackBrandVariation2 = lazyWithRetry(() => import('./pages/topics/SnackBrandVariation2'))
const SizeGuideCardV2 = lazyWithRetry(() => import('./pages/topics/SizeGuideCardV2'))
const CustomPackagingDesign4AAC = lazyWithRetry(() => import('./pages/topics/CustomPackagingDesign4AAC'))
const CustomPackagingDesign7D28 = lazyWithRetry(() => import('./pages/topics/CustomPackagingDesign7D28'))
const SurfaceFinishCloseDetailB = lazyWithRetry(() => import('./pages/topics/SurfaceFinishCloseDetailB'))
const BabyFoodHeroV3 = lazyWithRetry(() => import('./pages/topics/BabyFoodHeroV3'))

const WasteReductionPackagingStrategiesPage = lazyWithRetry(() => import('./pages/topics/WasteReductionPackagingStrategiesPage'))
const MonoMaterialRecyclablePackagingPage = lazyWithRetry(() => import('./pages/topics/MonoMaterialRecyclablePackagingPage'))
const GrsCertifiedRecycledPackagingPage = lazyWithRetry(() => import('./pages/topics/GrsCertifiedRecycledPackagingPage'))
const PackagingSustainabilityEcoAuditPage = lazyWithRetry(() => import('./pages/topics/PackagingSustainabilityEcoAuditPage'))
const ProductCompostingTimelinePage = lazyWithRetry(() => import('./pages/topics/ProductCompostingTimelinePage'))
const PremiumPackagingFinishesGuidePage = lazyWithRetry(() => import('./pages/topics/PremiumPackagingFinishesGuidePage'))
const RecyclablePackagingDesignGuidePage = lazyWithRetry(() => import('./pages/topics/RecyclablePackagingDesignGuidePage'))
const BpiCertifiedCompostablePouchesPage = lazyWithRetry(() => import('./pages/topics/BpiCertifiedCompostablePouchesPage'))
const SustainablePackagingCertificationsFaqPage = lazyWithRetry(() => import('./pages/topics/SustainablePackagingCertificationsFaqPage'))
const CustomPackagingDesignPatternsPage = lazyWithRetry(() => import('./pages/topics/CustomPackagingDesignPatternsPage'))
export const MultilingualRoutes = ({ children }: { children: React.ReactNode }) => {
  const languages = ['fr', 'es', 'zh-tw'];

  return (
    <Routes>
          <Route path="/topics/a-pcr-quality-comparison-photo-2754953" element={<APcrQualityComparisonPhoto2754953 />} />
              <Route path="/topics/bio-pe-sustainable-material" element={<ABioPeCardV34603248 />} />
              <Route path="/topics/corporate-sustainability-strategy" element={<ACorporateSustainabilityVariation21276624 />} />
              <Route path="/topics/flat-bottom-pouch-packaging" element={<PackFlatBottom />} />
              <Route path="/topics/stand-up-pouch-packaging" element={<PackStandUp />} />
              <Route path="/topics/spouted-pouch-packaging" element={<PackSpout />} />
              <Route path="/topics/custom-packaging-cta" element={<ACtaRevised7607342 />} />
              <Route path="/topics/valve-closure-detail" element={<AValveClosureDetail6401844 />} />
          <Route path="/topics/a-supply-chain-diversity-infographic-0424873" element={<ASupplyChainDiversityInfographic0424873 />} />
          <Route path="/topics/a-environmental-impact-metrics-infographic-2859824" element={<AEnvironmentalImpactMetricsInfographic2859824 />} />
          <Route path="/topics/hero-pcr-7" element={<HeroPcr7 />} />
          <Route path="/topics/a-landscape-comparison-pcr-virgin-9079701" element={<ALandscapeComparisonPcrVirgin9079701 />} />
          <Route path="/topics/a-landscape-supply-chain-confidence-4178486" element={<ALandscapeSupplyChainConfidence4178486 />} />
          <Route path="/topics/a-achievepack-sea-salt-vinegar-chips-1689612" element={<AAchievepackSeaSaltVinegarChips1689612 />} />
          <Route path="/topics/achieve-baby-pea-1770342362697" element={<AchieveBabyPea1770342362697 />} />
          <Route path="/topics/achieve-baby-carrot-1770342349368" element={<AchieveBabyCarrot1770342349368 />} />
          <Route path="/topics/a-calculator-rigid-plastic-9646528" element={<ACalculatorRigidPlastic9646528 />} />
          <Route path="/topics/valve-closure-detail" element={<ValveClosureDetail />} />
          <Route path="/topics/sizing-finder-hero" element={<SizingFinderHero />} />
          <Route path="/topics/invest-cal-hero" element={<InvestCalHero />} />
          <Route path="/topics/cta-revised-design" element={<CtaRevisedDesign />} />
          <Route path="/topics/spout-pouch-packaging" element={<SpoutPouchPackaging />} />
          <Route path="/topics/stand-up-pouch-packaging" element={<StandUpPouchPackaging />} />
          <Route path="/topics/flat-bottom-pouch-packaging" element={<FlatBottomPouchPackaging />} />
          <Route path="/topics/corporate-sustainability-variation" element={<CorporateSustainabilityVariation />} />
          <Route path="/topics/illustrated-pouch-design-variation" element={<IllustratedPouchDesignVariation />} />
          <Route path="/topics/bio-pe-card-sustainable" element={<BioPeCardSustainable />} />
              <Route path="/topics/textured-burlap-cork-pattern-coffee-pouch-with-valve-thumbnail-7" element={<TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail7 />} />
          <Route path="/topics/compostable-packaging-breakdown-timeline" element={<ProductCompostingTimelinePage />} />
          <Route path="/topics/custom-packaging-design-patterns" element={<CustomPackagingDesignPatternsPage />} />
          <Route path="/topics/grs-certified-recycled-packaging" element={<GrsCertifiedRecycledPackagingPage />} />
          <Route path="/topics/premium-packaging-finishes-guide" element={<PremiumPackagingFinishesGuidePage />} />
          <Route path="/topics/bpi-certified-compostable-pouches" element={<BpiCertifiedCompostablePouchesPage />} />
          <Route path="/topics/mono-material-recyclable-packaging" element={<MonoMaterialRecyclablePackagingPage />} />
          <Route path="/topics/packaging-sustainability-eco-audit" element={<PackagingSustainabilityEcoAuditPage />} />
          <Route path="/topics/recyclable-packaging-design-guide" element={<RecyclablePackagingDesignGuidePage />} />
          <Route path="/topics/waste-reduction-packaging-strategies" element={<WasteReductionPackagingStrategiesPage />} />
          <Route path="/topics/sustainable-packaging-certifications-faq" element={<SustainablePackagingCertificationsFaqPage />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-2" element={<SpoutedFoilPouchThumbnail2 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-13" element={<SpoutedFoilPouchThumbnail13 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-9" element={<FlatBottomPouchTinTieThumbnail9 />} />
              <Route path="/topics/textured-burlap-cork-pattern-coffee-pouch-with-valve-thumbnail-3" element={<TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail3 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-29" element={<SpoutedFoilPouchThumbnail29 />} />
              <Route path="/topics/textured-burlap-cork-pattern-coffee-pouch-with-valve-thumbnail-6" element={<TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail6 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-6" element={<FlatBottomZipperPouchThumbnail6 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-14" element={<FlatBottomZipperPouchThumbnail14 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-5" element={<FlatBottomPouchTinTieThumbnail5 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-11" element={<ClearMatteZipperStandUpPouchThumbnail11 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-25" element={<SpoutedFoilPouchThumbnail25 />} />
              <Route path="/topics/textured-burlap-cork-pattern-coffee-pouch-with-valve-thumbnail-5" element={<TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail5 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-1" element={<FlatBottomZipperPouchThumbnail1 />} />
              <Route path="/topics/textured-burlap-cork-pattern-coffee-pouch-with-valve-thumbnail-4" element={<TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail4 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-8" element={<RetroHorizontalKraftFoodHandleBagThumbnail8 />} />
              <Route path="/topics/bottle-shape-sachet-bag-thumbnail-11" element={<BottleShapeSachetBagThumbnail11 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-10" element={<RetroHorizontalKraftFoodHandleBagThumbnail10 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-14" element={<SpoutedFoilPouchThumbnail14 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-20" element={<ClearMatteZipperStandUpPouchThumbnail20 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-2" element={<FlatBottomZipperPouchThumbnail2 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-5" element={<SpoutedFoilPouchThumbnail5 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-4" element={<ClearMatteZipperStandUpPouchThumbnail4 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-4" element={<RetroHorizontalKraftFoodHandleBagThumbnail4 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-16" element={<ClearMatteZipperStandUpPouchThumbnail16 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-22" element={<SpoutedFoilPouchThumbnail22 />} />
              <Route path="/topics/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip-thumbnail-8" element={<CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail8 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-2" element={<FlatBottomPouchTinTieThumbnail2 />} />
              <Route path="/topics/coffee-tea-one-sided-zipper-flat-bottom-pouch-with-hanging-strip-thumbnail-9" element={<CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail9 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-13" element={<FlatBottomZipperPouchThumbnail13 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-9" element={<SpoutedFoilPouchThumbnail9 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-8" element={<ClearMatteZipperStandUpPouchThumbnail8 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-9" element={<ClearMatteZipperStandUpPouchThumbnail9 />} />
              <Route path="/topics/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch-thumbnail-9" element={<UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail9 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-8" element={<SpoutedFoilPouchThumbnail8 />} />
              <Route path="/topics/flat-bottom-zipper-pouch-thumbnail-12" element={<FlatBottomZipperPouchThumbnail12 />} />
              <Route path="/topics/flat-bottom-pouch-with-card-insert-thumbnail-1" element={<FlatBottomPouchWithCardInsertThumbnail1 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-19" element={<SpoutedFoilPouchThumbnail19 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-1" element={<FlatBottomPouchTinTieThumbnail1 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-3" element={<FlatBottomPouchTinTieThumbnail3 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-17" element={<ClearMatteZipperStandUpPouchThumbnail17 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-23" element={<SpoutedFoilPouchThumbnail23 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-5" element={<RetroHorizontalKraftFoodHandleBagThumbnail5 />} />
              <Route path="/topics/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch-thumbnail-8" element={<UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail8 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-5" element={<ClearMatteZipperStandUpPouchThumbnail5 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-4" element={<SpoutedFoilPouchThumbnail4 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-11" element={<RetroHorizontalKraftFoodHandleBagThumbnail11 />} />
              <Route path="/topics/spouted-foil-pouch-thumbnail-15" element={<SpoutedFoilPouchThumbnail15 />} />
              <Route path="/topics/bottle-shape-sachet-bag-thumbnail-10" element={<BottleShapeSachetBagThumbnail10 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-9" element={<RetroHorizontalKraftFoodHandleBagThumbnail9 />} />
              <Route path="/topics/compostable-blog" element={<CompostableBlog />} />
              <Route path="/topics/sustainable-pillar" element={<SustainablePillar />} />
              <Route path="/topics/a-achieve-coffee-kv-warm-series-5435371" element={<AAchieveCoffeeKvWarmSeries5435371 />} />
              <Route path="/topics/a-achieve-detail-10-final-masterpiece-6237738" element={<AAchieveDetail10FinalMasterpiece6237738 />} />
              <Route path="/topics/a-achieve-detail-09-signature-0200823" element={<AAchieveDetail09Signature0200823 />} />
              <Route path="/topics/a-achieve-coffee-kv-brand-statement-8692247" element={<AAchieveCoffeeKvBrandStatement8692247 />} />
              <Route path="/topics/a-achieve-detail-02-design-1799169" element={<AAchieveDetail02Design1799169 />} />
              <Route path="/topics/a-achieve-detail-01-limited-series-5452944" element={<AAchieveDetail01LimitedSeries5452944 />} />
              <Route path="/topics/a-achieve-coffee-kv-bright-series-0823684" element={<AAchieveCoffeeKvBrightSeries0823684 />} />
              <Route path="/topics/a-achieve-coffee-kv-flagship-opening-9453786" element={<AAchieveCoffeeKvFlagshipOpening9453786 />} />
              <Route path="/topics/a-achieve-detail-03-perspectives-1618831" element={<AAchieveDetail03Perspectives1618831 />} />
              <Route path="/topics/a-achieve-detail-06-typography-5171494" element={<AAchieveDetail06Typography5171494 />} />
              <Route path="/topics/a-achieve-coffee-kv-limited-series-2884858" element={<AAchieveCoffeeKvLimitedSeries2884858 />} />
              <Route path="/topics/paul" element={<Paul />} />
              <Route path="/topics/vibrant-pink" element={<VibrantPink />} />
              <Route path="/topics/jasmin-compostable" element={<JasminCompostable />} />
              <Route path="/topics/richard" element={<Richard />} />
              <Route path="/topics/nicole" element={<Nicole />} />
              <Route path="/topics/michelle" element={<Michelle />} />
              <Route path="/topics/arielle" element={<Arielle />} />
              <Route path="/topics/minimal-black" element={<MinimalBlack />} />
              <Route path="/topics/ruby" element={<Ruby />} />
              <Route path="/topics/steph" element={<Steph />} />
              <Route path="/topics/modern-cyan" element={<ModernCyan />} />
              <Route path="/topics/remi" element={<Remi />} />
              <Route path="/topics/holly" element={<Holly />} />
              <Route path="/topics/jemma" element={<Jemma />} />
              <Route path="/topics/organic-amber" element={<OrganicAmber />} />
              <Route path="/topics/leo" element={<Leo />} />
              <Route path="/topics/david" element={<David />} />
              <Route path="/topics/eco-biodegradable-blue" element={<EcoBiodegradableBlue />} />
              <Route path="/topics/eloquence-luxury" element={<EloquenceLuxury />} />
              <Route path="/topics/nano-pro-k-seal" element={<NanoProKSeal />} />
              <Route path="/topics/nano-pro-sup-v2" element={<NanoProSupV2 />} />
              <Route path="/topics/flat-bottom-premium" element={<FlatBottomPremium />} />
              <Route path="/topics/nano-pro-sup-lifestyle" element={<NanoProSupLifestyle />} />
              <Route path="/topics/achieve-pack-k-seal" element={<AchievePackKSeal />} />
              <Route path="/topics/achieve-pack-branding-spotlight" element={<AchievePackBrandingSpotlight />} />
              <Route path="/topics/a-coffee-tea-hero-v2-3426201" element={<ACoffeeTeaHeroV23426201 />} />
              <Route path="/topics/a-industrial-compostable-card-v1-5916306" element={<AIndustrialCompostableCardV15916306 />} />
              <Route path="/topics/coffee-bags-degassing-valve-seo-infographic" element={<CoffeeBagsDegassingValveSeoInfographic />} />
              <Route path="/topics/home-compostable-coffee-bags-seo-infographic" element={<HomeCompostableCoffeeBagsSeoInfographic />} />
              <Route path="/topics/dtc-sustainable-packaging-seo-infographic" element={<DtcSustainablePackagingSeoInfographic />} />
              <Route path="/topics/compostable-spouted-pouches-seo-infographic" element={<CompostableSpoutedPouchesSeoInfographic />} />
              <Route path="/topics/mono-pe-pouches-seo-infographic" element={<MonoPePouchesSeoInfographic />} />
              <Route path="/topics/recyclable-mono-material-pouches-seo-infographic" element={<RecyclableMonoMaterialPouchesSeoInfographic />} />
              <Route path="/topics/custom-compostable-pouch-suppliers-seo-infographic" element={<CustomCompostablePouchSuppliersSeoInfographic />} />
              <Route path="/topics/custom-printed-sustainable-pouches-seo-infographic" element={<CustomPrintedSustainablePouchesSeoInfographic />} />
              <Route path="/topics/coffee-roaster-seo-infographic" element={<CoffeeRoasterSeoInfographic />} />
              <Route path="/topics/child-resistant-mylar-bags-seo-infographic" element={<ChildResistantMylarBagsSeoInfographic />} />
                    <Route path="/topics/ecommerce-brand-packaging-solutions" element={<EcommerceBrandPackagingSolutions />} />
              <Route path="/topics/barrier-options-presentation" element={<PackagingBarrierOptionsPresentation />} />
              <Route path="/topics/baby-food-packaging-v2" element={<BabyFoodPackagingV2 />} />
              <Route path="/topics/labeling-guide-v2" element={<PackagingLabelingGuideV2 />} />
              <Route path="/topics/snack-brand-variation" element={<SnackBrandVariation />} />
              <Route path="/topics/size-guide-card-v2" element={<PackagingSizeGuideCardV2 />} />
              <Route path="/topics/compostable-packaging-insights" element={<CompostablePackagingInsights />} />
              <Route path="/topics/sustainable-materials-guide" element={<SustainableMaterialsGuide />} />
              <Route path="/topics/surface-finish-close-detail" element={<SurfaceFinishCloseDetail />} />
              <Route path="/topics/baby-food-packaging-v3" element={<BabyFoodPackagingV3 />} />
      {/* English / Default route group */}
      <Route path="/" element={<LanguageWrapper lang="en" />}>
        {children}
      </Route>

      {/* Translated route groups */}
      {languages.map(lang => (
        <Route key={lang} path={`/${lang}`} element={<LanguageWrapper lang={lang} />}>
          {React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === Route) {
              const routeChild = child as React.ReactElement<{ path?: string; [key: string]: any }>;
              const originalPath = routeChild.props.path;
              if (!originalPath || originalPath === '*') {
                return child; // Keep wildcard as-is
              }
              // Strip leading slash for nested routes
              const relativePath = originalPath.startsWith('/') 
                ? originalPath.substring(1) 
                : originalPath;
              
              return React.cloneElement(routeChild, {
                path: relativePath
              });
            }
            return child;
          })}
        </Route>
      ))}
                  <Route path="/topics/pouch-3d-studio-promo" element={<Pouch3dStudioPromo />} />
              <Route path="/topics/feature-pouch-shapes" element={<FeaturePouchShapes />} />
              <Route path="/topics/pouch-fb-hero" element={<PouchFbHero />} />
              <Route path="/topics/a-achievepack-coffee-bag-product-2479917" element={<AAchievepackCoffeeBagProduct2479917 />} />
              <Route path="/topics/a-retail-compliance-packaging-photo-5269551" element={<ARetailCompliancePackagingPhoto5269551 />} />
              <Route path="/topics/a-calculator-cardboard-box-8054435" element={<ACalculatorCardboardBox8054435 />} />
              <Route path="/topics/a-calculator-flexible-pouch-8495656" element={<ACalculatorFlexiblePouch8495656 />} />
              <Route path="/topics/tea-pouch" element={<TeaPouch />} />
              <Route path="/topics/sauce-pouch" element={<SaucePouch />} />
              <Route path="/topics/decal-packaging" element={<DecalPackaging />} />
              <Route path="/topics/side-gusset-pouch-eco" element={<SideGussetPouchEco />} />
              <Route path="/topics/eco-stand-up-pouch" element={<EcoStandUpPouch />} />
              <Route path="/topics/pack-box" element={<PackBox />} />
              <Route path="/topics/a-achievepack-vacuum-pouches-8597303" element={<AAchievepackVacuumPouches8597303 />} />
              <Route path="/topics/a-achievepack-sidegusset-bags-7074883" element={<AAchievepackSidegussetBags7074883 />} />
              <Route path="/topics/a-standuppouches-warm-2436938" element={<AStanduppouchesWarm2436938 />} />
              <Route path="/topics/a-achievepack-custom-boxes-6574270" element={<AAchievepackCustomBoxes6574270 />} />
              <Route path="/topics/a-achievepack-flat-pouches-0260646" element={<AAchievepackFlatPouches0260646 />} />
              <Route path="/topics/a-achievepack-standup-pouches-9884402" element={<AAchievepackStandupPouches9884402 />} />
              <Route path="/topics/a-coffee-packaging-v1-3532652" element={<ACoffeePackagingV13532652 />} />
              <Route path="/topics/a-achievepack-spout-pouches-1062736" element={<AAchievepackSpoutPouches1062736 />} />
              <Route path="/topics/compostable-zipper-detail" element={<CompostableZipperDetail />} />
              <Route path="/topics/a-snacks-packaging-card-v2-6247579" element={<ASnacksPackagingCardV26247579 />} />
              <Route path="/topics/digital-printing-eco-packaging-seo-infographic" element={<DigitalPrintingEcoPackagingSeoInfographic />} />
              <Route path="/topics/recycled-ocean-plastic-packaging-seo-infographic" element={<RecycledOceanPlasticPackagingSeoInfographic />} />
              <Route path="/topics/compostable-coffee-bags-seo-infographic" element={<CompostableCoffeeBagsSeoInfographic />} />
              <Route path="/topics/compostable-baby-food-bags-seo-infographic" element={<CompostableBabyFoodBagsSeoInfographic />} />
              <Route path="/topics/recyclable-snack-packaging-seo-infographic" element={<RecyclableSnackPackagingSeoInfographic />} />
              <Route path="/topics/pfas-free-packaging-seo-infographic" element={<PfasFreePackagingSeoInfographic />} />
              <Route path="/topics/custom-vs-standard-packaging-seo-infographic" element={<CustomVsStandardPackagingSeoInfographic />} />
                          <Route path="/topics/wholesale-prices-for-compostable-pouches-hero-46996" element={<WholesalePricesForCompostablePouchesHero46996 />} />
              <Route path="/topics/mono-material-flexible-packaging-for-pet-food-hero-60000" element={<MonoMaterialFlexiblePackagingForPetFoodHero60000 />} />
              <Route path="/topics/digital-printing-kraft-paper-stand-up-pouches-hero-19878" element={<DigitalPrintingKraftPaperStandUpPouchesHero19878 />} />
              <Route path="/topics/side-gusset-premium-box-84039" element={<SideGussetPremiumBox84039 />} />
              <Route path="/topics/stand-up-pouch-dimensions-for-6-oz-infographic-5-18894" element={<StandUpPouchDimensionsFor6OzInfographic518894 />} />
              <Route path="/topics/kraft-paper-flat-bottom-pouches-wholesale-hero-22933" element={<KraftPaperFlatBottomPouchesWholesaleHero22933 />} />
              <Route path="/topics/vxulnp13owrzxhe-qkwn3ughcwirk5tzblhb7q8jj30-12692" element={<Vxulnp13owrzxheQkwn3ughcwirk5tzblhb7q8jj3012692 />} />
              <Route path="/topics/custom-digital-print-barrier-pouches-hero-72004" element={<CustomDigitalPrintBarrierPouchesHero72004 />} />
              <Route path="/topics/custom-digital-printed-sachets-infographic-32958" element={<CustomDigitalPrintedSachetsInfographic32958 />} />
              <Route path="/topics/eco-friendly-kraft-honeycomb-packing-paper-wrap-thumbnail-1-43244" element={<EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail143244 />} />
              <Route path="/topics/biodegradable-barrier-film-for-pet-food-hero-12681" element={<BiodegradableBarrierFilmForPetFoodHero12681 />} />
              <Route path="/topics/recyclable-stand-up-pouch-dimensions-chart-hero-99023" element={<RecyclableStandUpPouchDimensionsChartHero99023 />} />
              <Route path="/topics/usa-compostable-packaging-guide-infographic-3-46030" element={<UsaCompostablePackagingGuideInfographic346030 />} />
              <Route path="/topics/eco-friendly-cork-gift-boxes-sustainable-luxury-hero-31676" element={<EcoFriendlyCorkGiftBoxesSustainableLuxuryHero31676 />} />
              <Route path="/topics/mono-material-recyclable-sachet-dimensions-hero-59256" element={<MonoMaterialRecyclableSachetDimensionsHero59256 />} />
              <Route path="/topics/custom-shape-pouches-digital-printing-infographic-6-81411" element={<CustomShapePouchesDigitalPrintingInfographic681411 />} />
              <Route path="/topics/a-material-benefits-page-4228725-51834" element={<AMaterialBenefitsPage422872551834 />} />
              <Route path="/topics/comparison-48528" element={<Comparison48528 />} />
              <Route path="/topics/unprinted-white-kraft-compostable-and-biodegrable-zipper-stand-up-pouch-thumbnail-7-27749" element={<UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail727749 />} />
              <Route path="/topics/a-recyclable-cosmetic-packaging-pouches-3486985-20106" element={<ARecyclableCosmeticPackagingPouches348698520106 />} />
              <Route path="/topics/eco-friendly-kraft-honeycomb-packing-paper-wrap-thumbnail-11-35064" element={<EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail1135064 />} />
              <Route path="/topics/material-45943" element={<Material45943 />} />
              <Route path="/topics/process-32178" element={<Process32178 />} />
              <Route path="/topics/compostable-pouch-size-chart-for-liquids-infographic-81804" element={<CompostablePouchSizeChartForLiquidsInfographic81804 />} />
              <Route path="/topics/digital-printed-flat-bottom-pouches-low-moq-hero-29386" element={<DigitalPrintedFlatBottomPouchesLowMoqHero29386 />} />
              <Route path="/topics/mono-pe-recyclable-barrier-film-for-flexible-packaging-hero-25657" element={<MonoPeRecyclableBarrierFilmForFlexiblePackagingHero25657 />} />
              <Route path="/topics/clear-matte-zipper-stand-up-pouch-thumbnail-12-65090" element={<ClearMatteZipperStandUpPouchThumbnail1265090 />} />
              <Route path="/topics/sustainable-packaging-for-protein-powder-pouches-hero-55060" element={<SustainablePackagingForProteinPowderPouchesHero55060 />} />
              <Route path="/topics/eco-flatbottom-premium-31645" element={<EcoFlatbottomPremium31645 />} />
              <Route path="/topics/compostable-pouch-sizes-for-powders-infographic-3-41079" element={<CompostablePouchSizesForPowdersInfographic341079 />} />
              <Route path="/topics/retail-shelf-pouch-74567" element={<RetailShelfPouch74567 />} />
              <Route path="/topics/spout-pouch-transparent-1500-1783005719700-89534" element={<SpoutPouchTransparent1500178300571970089534 />} />
              <Route path="/topics/bottle-shape-sachet-bag-thumbnail-12-25085" element={<BottleShapeSachetBagThumbnail1225085 />} />
              <Route path="/topics/eco-friendly-retort-bags-for-baby-food-hero-17104" element={<EcoFriendlyRetortBagsForBabyFoodHero17104 />} />
              <Route path="/topics/mylar-vs-compostable-packaging-infographic-5-27759" element={<MylarVsCompostablePackagingInfographic527759 />} />
              <Route path="/topics/a-detail-edge-finish-8463428-95367" element={<ADetailEdgeFinish846342895367 />} />
              <Route path="/topics/eco-custom-label-thumbnail-3-46322" element={<EcoCustomLabelThumbnail346322 />} />
              <Route path="/topics/humidity-pack-eco-26973" element={<HumidityPackEco26973 />} />
              <Route path="/topics/recyclable-pouch-size-chart-for-snacks-hero-74118" element={<RecyclablePouchSizeChartForSnacksHero74118 />} />
              <Route path="/topics/high-barrier-sustainable-flexible-films-infographic-21416" element={<HighBarrierSustainableFlexibleFilmsInfographic21416 />} />
              <Route path="/topics/flat-bottom-pouch-tin-tie-thumbnail-12-21686" element={<FlatBottomPouchTinTieThumbnail1221686 />} />
              <Route path="/topics/mono-pe-recyclable-barrier-pouches-infographic-80667" element={<MonoPeRecyclableBarrierPouchesInfographic80667 />} />
              <Route path="/topics/custom-shaped-pouch-for-powders-low-moq-hero-83667" element={<CustomShapedPouchForPowdersLowMoqHero83667 />} />
              <Route path="/topics/sustainable-lifecycle-hero-pillar-59173" element={<SustainableLifecycleHeroPillar59173 />} />
              <Route path="/topics/retro-horizontal-kraft-food-handle-bag-thumbnail-3-50561" element={<RetroHorizontalKraftFoodHandleBagThumbnail350561 />} />
              <Route path="/topics/mono-pe-vs-mono-pp-infographic-59032" element={<MonoPeVsMonoPpInfographic59032 />} />
              <Route path="/topics/sustainable-pouch-sizes-for-powders-hero-35425" element={<SustainablePouchSizesForPowdersHero35425 />} />
              <Route path="/topics/rice-paper-flat-bottom-flat-bottom-thumbnail-2-95655" element={<RicePaperFlatBottomFlatBottomThumbnail295655 />} />
              <Route path="/topics/spouted-foil-31-79874" element={<SpoutedFoil3179874 />} />
              <Route path="/topics/ecommerce-brand-variation-2" element={<EcommerceBrandVariation2 />} />
              <Route path="/topics/barrier-options-presentation-c" element={<BarrierOptionsPresentationC />} />
              <Route path="/topics/baby-food-packaging-v2" element={<BabyFoodHeroV2 />} />
              <Route path="/topics/labeling-guide-v2" element={<LabelingGuideV2 />} />
              <Route path="/topics/snack-brand-variation-2" element={<SnackBrandVariation2 />} />
              <Route path="/topics/size-guide-card-v2" element={<SizeGuideCardV2 />} />
              <Route path="/topics/custom-packaging-design-4aac" element={<CustomPackagingDesign4AAC />} />
              <Route path="/topics/custom-packaging-design-7d28" element={<CustomPackagingDesign7D28 />} />
              <Route path="/topics/surface-finish-close-detail-b" element={<SurfaceFinishCloseDetailB />} />
              <Route path="/topics/baby-food-packaging-v3" element={<BabyFoodHeroV3 />} />

              <Route path="/topics/bottle-shape-sachet-bag-thumbnail-4-22333" element={<BottleShapeSachetBagThumbnail422333 />} />
              <Route path="/topics/cheryl" element={<Cheryl />} />
              <Route path="/topics/michelle294743" element={<Michelle294743 />} />
              <Route path="/topics/morlife" element={<Morlife />} />
              <Route path="/topics/condiment-sachet-three-side-seal" element={<CondimentSachetThreeSideSeal />} />
              <Route path="/topics/cosmetic-cleanser-three-side-zipper-pouch" element={<CosmeticCleanserThreeSideZipperPouch />} />
              <Route path="/topics/cosmetic-cream-stand-up-pouch" element={<CosmeticCreamStandUpPouch />} />
              <Route path="/topics/cosmetic-sample-three-side-seal" element={<CosmeticSampleThreeSideSeal />} />
              <Route path="/topics/cosmetic-serum-stand-up-pouch" element={<CosmeticSerumStandUpPouch />} />
              <Route path="/topics/crisps-shaped" element={<CrispsShaped />} />
              <Route path="/topics/ddp-packaging" element={<DdpPackaging />} />
              <Route path="/topics/detergent-spout" element={<DetergentSpout />} />
      <Route path="/topics/a-plate-printing-close-detail-b-8707945" element={<APlatePrintingCloseDetailB8707945 />} />
      <Route path="/topics/a-digital-printing-close-detail-b-7761926" element={<ADigitalPrintingCloseDetailB7761926 />} />
      <Route path="/topics/a-startup-founder-variation-3-2900816" element={<AStartupFounderVariation32900816 />} />
      <Route path="/topics/a-recyclable-mono-pp-card-v2-2805205" element={<ARecyclableMonoPpCardV22805205 />} />
      <Route path="/topics/a-artisan-producer-variation-3-5916328" element={<AArtisanProducerVariation35916328 />} />
      <Route path="/topics/a-reclosure-options-close-detail-b-4502553" element={<AReclosureOptionsCloseDetailB4502553 />} />
      <Route path="/topics/a-artisan-producer-variation-1-5454378" element={<AArtisanProducerVariation15454378 />} />
      <Route path="/topics/a-snacks-v1-3103675" element={<ASnacksV13103675 />} />
      <Route path="/topics/ryan-photo" element={<RyanPhoto />} />
      <Route path="/topics/outreach-header-2026" element={<OutreachHeader2026 />} />
      <Route path="/topics/ryan-headshot-v2" element={<RyanHeadshotV2 />} />
      <Route path="/topics/artisan-producer-seo-infographic" element={<ArtisanProducerSeoInfographic />} />
      <Route path="/topics/low-moq-startup-packaging-seo-infographic" element={<LowMoqStartupPackagingSeoInfographic />} />
      <Route path="/topics/startup-founder-seo-infographic" element={<StartupFounderSeoInfographic />} />
      <Route path="/topics/snack-brand-manager-seo-infographic" element={<SnackBrandManagerSeoInfographic />} />
      <Route path="/topics/minimalist-d2c-packaging-seo-infographic" element={<MinimalistD2cPackagingSeoInfographic />} />
      <Route path="/topics/low-moq-packaging-seo-infographic" element={<LowMoqPackagingSeoInfographic />} />
      <Route path="/topics/product-developer-seo-infographic" element={<ProductDeveloperSeoInfographic />} />
      <Route path="/topics/green-coffee-materials-seo-infographic" element={<GreenCoffeeMaterialsSeoInfographic />} />
      <Route path="/topics/food-manufacturer-seo-infographic" element={<FoodManufacturerSeoInfographic />} />
      <Route path="/topics/corporate-sustainability-seo-infographic" element={<CorporateSustainabilitySeoInfographic />} />
      <Route path="/topics/tech-spec-hero-b2b" element={<TechSpecHeroB2b />} />
      <Route path="/topics/pcr-pp-duplex-nowindow" element={<PcrPpDuplexNowindow />} />
      <Route path="/topics/mono-pp-duplex-nowindow" element={<MonoPpDuplexNowindow />} />
      <Route path="/topics/biope-pp-triplex-metalised" element={<BiopePpTriplexMetalised />} />
      <Route path="/topics/mono-pe-duplex-nowindow" element={<MonoPeDuplexNowindow />} />
      <Route path="/topics/biope-pp-duplex-clear" element={<BiopePpDuplexClear />} />
      <Route path="/topics/pcr-pet-duplex-nowindow" element={<PcrPetDuplexNowindow />} />
      <Route path="/topics/biope-pet-duplex-clear" element={<BiopePetDuplexClear />} />
      <Route path="/topics/biope-pet-triplex-aluminum" element={<BiopePetTriplexAluminum />} />
      <Route path="/topics/biope-pet-duplex-nowindow" element={<BiopePetDuplexNowindow />} />
      <Route path="/topics/biope-pet-duplex-nowindow-2" element={<BiopePetDuplexNowindow2 />} />
      <Route path="/topics/biope-pp-triplex-aluminum" element={<BiopePpTriplexAluminum />} />
      <Route path="/topics/biope-pp-duplex-nowindow" element={<BiopePpDuplexNowindow />} />
                  <Route path="/topics/a-achieve-pack-closure-decision-guide-8541101" element={<AAchievePackClosureDecisionGuide8541101 />} />
              <Route path="/topics/360" element={<Img360 />} />
              <Route path="/topics/1757" element={<Img1757 />} />
              <Route path="/topics/2921" element={<Img2921 />} />
              <Route path="/topics/2854" element={<Img2854 />} />
              <Route path="/topics/607" element={<Img607 />} />
              <Route path="/topics/954" element={<Img954 />} />
              <Route path="/topics/2922" element={<Img2922 />} />
              <Route path="/topics/767" element={<Img767 />} />
              <Route path="/topics/945" element={<Img945 />} />
              <Route path="/topics/5091" element={<Img5091 />} />
              <Route path="/topics/4101" element={<Img4101 />} />
              <Route path="/topics/1050" element={<Img1050 />} />
              <Route path="/topics/927" element={<Img927 />} />
              <Route path="/topics/1282" element={<Img1282 />} />
              <Route path="/topics/677" element={<Img677 />} />
              <Route path="/topics/524" element={<Img524 />} />
              <Route path="/topics/4724" element={<Img4724 />} />
              <Route path="/topics/4056" element={<Img4056 />} />
              <Route path="/topics/4108" element={<Img4108 />} />
              <Route path="/topics/4859" element={<Img4859 />} />
              <Route path="/topics/680" element={<Img680 />} />
              <Route path="/topics/2928" element={<Img2928 />} />
              <Route path="/topics/368" element={<Img368 />} />
              <Route path="/topics/587" element={<Img587 />} />
              <Route path="/topics/975" element={<Img975 />} />
              <Route path="/topics/586" element={<Img586 />} />
              <Route path="/topics/380" element={<Img380 />} />
              <Route path="/topics/4812" element={<Img4812 />} />
              <Route path="/topics/1995" element={<Img1995 />} />
              <Route path="/topics/3947" element={<Img3947 />} />
              <Route path="/topics/4780" element={<Img4780 />} />
              <Route path="/topics/xnip2026-01-02-15-03-48" element={<Xnip20260102150348 />} />
              <Route path="/topics/benefits-grid-showing" element={<BenefitsGridShowing />} />
              <Route path="/topics/hero-illustration" element={<HeroIllustration />} />
              <Route path="/topics/educational-cross-section" element={<EducationalCrossSection />} />
              <Route path="/topics/commercial-composting-facility-illustration" element={<CommercialCompostingFacilityIllustration />} />
              <Route path="/topics/test-slug-schema-infographic-6" element={<TestSlugSchemaInfographic6 />} />
    
              <Route path="/topics/packaging-branding-og-image" element={<PackagingBrandingOgImage />} />
              <Route path="/topics/sustainable-climate-packaging" element={<SustainableClimatePackaging />} />
              <Route path="/topics/biope-plant-based-barrier-films" element={<BiopePlantBasedBarrierFilms />} />
              <Route path="/topics/food-beverage-flexible-packaging" element={<FoodBeverageFlexiblePackaging />} />
              <Route path="/topics/plant-based-packaging-infographic" element={<PlantBasedPackagingInfographic />} />
              <Route path="/topics/premium-brand-identity-packaging" element={<PremiumBrandIdentityPackaging />} />
              <Route path="/topics/shipping-storage-efficiency-packaging" element={<ShippingStorageEfficiencyPackaging />} />
              <Route path="/topics/flexible-vs-rigid-packaging-comparison" element={<FlexibleVsRigidPackagingComparison />} />
              <Route path="/topics/5-step-custom-packaging-process" element={<FiveStepCustomPackagingProcess />} />
              <Route path="/topics/custom-packaging-solutions-consultation" element={<CustomPackagingSolutionsConsultation />} />
      <Route path="/topics/food-supplier-packaging" element={<FoodSupplierPackaging />} />
      <Route path="/topics/pcr-packaging-guide" element={<PcrPackagingGuide />} />
      <Route path="/topics/bio-pe-product-residue-analysis" element={<BioPeProductResidueAnalysis />} />
      <Route path="/topics/bio-pe-epr-residue-analysis" element={<BioPeEprResidueAnalysis />} />
      <Route path="/topics/pcr-material-science-recycling-diagram" element={<PcrMaterialScienceDiagram />} />
      <Route path="/topics/pcr-testing-validation-diagram" element={<PcrTestingValidationDiagram />} />
      <Route path="/topics/pcr-packaging-hero-overview" element={<PcrPackagingHeroOverview />} />
      <Route path="/topics/eco-digital-printing-advantage" element={<EcoDigitalPrintingAdvantage />} />
      <Route path="/topics/sme-packaging-journey-portfolio" element={<SmePackagingJourney />} />
      <Route path="/topics/pcr-packaging-cost-benefit-infographic" element={<PcrCostBenefitInfographic />} />
    
              <Route path="/topics/brc-cert" element={<BrcCert />} />
              <Route path="/topics/landing-hero" element={<LandingHero />} />
              <Route path="/topics/testimonials-client-logos" element={<TestimonialsClientLogos />} />
              <Route path="/topics/solution-pet-products" element={<SolutionPetProducts />} />
              <Route path="/topics/solution-cosmetics" element={<SolutionCosmetics />} />
              <Route path="/topics/cert-home-compost" element={<CertHomeCompost />} />
              <Route path="/topics/feature-reclosure-solutions" element={<FeatureReclosureSolutions />} />
              <Route path="/topics/landing-hero" element={<LandingHero />} />
              <Route path="/topics/infographic-carbon-footprint" element={<InfographicCarbonFootprint />} />
              <Route path="/topics/solution-wellness" element={<SolutionWellness />} />
            <Route path="/topics/custom-printed-stand-up-pouch-pet-food" element={<CustomStandUpPouchPetFoodPage />} />
                <Route path="/topics/eco-friendly-kraft-paper-flat-bottom-bag" element={<KraftPaperFlatBottomBagPage />} />
                <Route path="/topics/matte-aluminum-foil-coffee-bag-valve" element={<MatteFoilCoffeeBagPage />} />
                <Route path="/topics/transparent-window-spout-pouch-beverages" element={<TransparentSpoutPouchPage />} />
                <Route path="/topics/child-resistant-exit-bag-pharmaceuticals" element={<ChildResistantExitBagPage />} />
                <Route path="/topics/compostable-vacuum-seal-bag-fresh-produce" element={<CompostableVacuumSealBagPage />} />
                <Route path="/topics/resealable-ziplock-mylar-bag-snacks" element={<ResealableMylarBagSnacksPage />} />
                <Route path="/topics/heavy-duty-woven-polypropylene-sack-agriculture" element={<WovenPolypropyleneSackPage />} />
                <Route path="/topics/holographic-retort-pouch-ready-to-eat" element={<HolographicRetortPouchPage />} />
                <Route path="/topics/recyclable-rollstock-film-automated-packaging" element={<RecyclableRollstockFilmPage />} />
          <Route path="/topics/environmental-chart" element={<EnvironmentalChart />} />
          <Route path="/topics/question-mark" element={<QuestionMark />} />
          <Route path="/topics/shipping-illustration" element={<ShippingIllustration />} />
          <Route path="/topics/glass-jar" element={<GlassJar />} />
          <Route path="/topics/dimensions-guide" element={<DimensionsGuide />} />
          <Route path="/topics/projection-graph" element={<ProjectionGraph />} />
          <Route path="/topics/savings-chart" element={<SavingsChart />} />
          <Route path="/topics/success-icon" element={<SuccessIcon />} />
          <Route path="/topics/metal-can" element={<MetalCan />} />
          <Route path="/topics/img" element={<Img />} />
          <Route path="/topics/illustrated-sustainability-concept" element={<IllustratedPouchDesignVariation />} />\n          <Route path="/topics/biodegradable-stand-up-pouch-suppliers" element={<BiodegradableStandUpPouchSuppliersPage />} />
          <Route path="/topics/compostable-pouch-size-chart-for-liquids" element={<CompostablePouchSizeChartForLiquidsPage />} />
          <Route path="/topics/wholesale-prices-for-compostable-pouches" element={<WholesalePricesForCompostablePouchesPage />} />
          <Route path="/topics/digital-printing-flexible-packaging-small-runs" element={<DigitalPrintingFlexiblePackagingSmallRunsPage />} />
          <Route path="/topics/compostable-tea-pouch-with-zipper" element={<CompostableTeaPouchWithZipperPage />} />
          <Route path="/topics/custom-shape-die-cut-pouch" element={<CustomShapeDieCutPouchPage />} />
          <Route path="/topics/stand-up-pouch-dimensions-chart-for-powders" element={<StandUpPouchDimensionsChartForPowdersPage />} />
          <Route path="/topics/compostable-high-barrier-film-suppliers" element={<CompostableHighBarrierFilmSuppliersPage />} />
          <Route path="/topics/printed-compostable-retort-bags" element={<PrintedCompostableRetortBagsPage />} />
          <Route path="/topics/custom-printed-barrier-sachets" element={<CustomPrintedBarrierSachetsPage />} />
      </Routes>
  );
};

// Critical components loaded immediately
import FoodSupplierPackaging from './pages/topics/FoodSupplierPackaging';
import PcrPackagingGuide from './pages/topics/PcrPackagingGuide';
import BioPeProductResidueAnalysis from './pages/topics/BioPeProductResidueAnalysis';
import BioPeEprResidueAnalysis from './pages/topics/BioPeEprResidueAnalysis';
import PcrMaterialScienceDiagram from './pages/topics/PcrMaterialScienceDiagram';
import PcrTestingValidationDiagram from './pages/topics/PcrTestingValidationDiagram';
import PcrPackagingHeroOverview from './pages/topics/PcrPackagingHeroOverview';
import EcoDigitalPrintingAdvantage from './pages/topics/EcoDigitalPrintingAdvantage';
import SmePackagingJourney from './pages/topics/SmePackagingJourney';
import PcrCostBenefitInfographic from './pages/topics/PcrCostBenefitInfographic';
import EcommerceBrandPackagingVariation2 from './pages/topics/EcommerceBrandPackagingVariation2';
import BabyFoodHeroPackagingV2 from './pages/topics/BabyFoodHeroPackagingV2';

import SnackBrandPackagingVariation2 from './pages/topics/SnackBrandPackagingVariation2';

import CustomPouchDesign4aac2432 from './pages/topics/CustomPouchDesign4aac2432';
import CustomPackagingDesign7d2800dc from './pages/topics/CustomPackagingDesign7d2800dc';
import BabyFoodHeroPackagingV3 from './pages/topics/BabyFoodHeroPackagingV3';
import App from './App.tsx'
import CartSidebar from './components/store/CartSidebar'
import FloatingButtons from './components/FloatingButtons'
import GeoBlocker from './components/GeoBlocker'

// Helper function for lazy loading with error handling for stale chunks
function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return lazy(() => {
    return componentImport().catch((error) => {
      // Check if this is a chunk loading error
      if (
        error.message?.includes('Failed to fetch dynamically imported module') ||
        error.message?.includes('Loading chunk') ||
        error.message?.includes('Loading CSS chunk')
      ) {
        // Reload the page to get the latest version
        console.warn('Chunk loading failed, reloading page...', error)
        window.location.reload()
        // Return a never-resolving promise to prevent rendering stale content
        return new Promise(() => { })
      }
      throw error
    })
  })
}

// Lazy load heavy widget
const PackagingAssistantWidget = lazyWithRetry(() => import('./components/PackagingAssistantWidget'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  </div>
)

// P2: Route preload map for hover prefetching
const routeImportMap: Record<string, () => Promise<any>> = {
  '/store': () => import('./pages/StorePage'),
  '/function/smart-degassing-sticker': () => import('./pages/function/SmartDegassingStickerPage'),
  '/pouch/smart-degassing-sticker': () => import('./pages/pouch/options/SmartDegassingStickerPage'),
  '/blog': () => import('./pages/blog/BlogPage'),
  '/dashboard': () => import('./pages/DashboardPage'),
  '/packaging/stand-up-pouches': () => import('./pages/packaging/StandUpPouchesPage'),
  '/packaging/flat-bottom-bags': () => import('./pages/packaging/FlatBottomBagsPage'),
  '/materials/compostable': () => import('./pages/materials/CompostablePage'),
  '/materials/recyclable-mono-pe': () => import('./pages/materials/RecyclableMonoPEPage'),
  '/materials/recyclable-mono-pp': () => import('./pages/materials/RecyclableMonoPPPage'),
  '/features/reclosure-options': () => import('./pages/features/ReclosureOptionsPage'),
  '/features/surface-finish': () => import('./pages/features/SurfaceFinishPage'),
  '/features/barrier-options': () => import('./pages/features/BarrierOptionsPage'),
  '/pouch/reclosure-options': () => import('./pages/pouch/PouchReclosureOptionsPage'),
  '/pouch/surface-finish': () => import('./pages/pouch/PouchSurfaceFinishPage'),
  '/pouch/surface-and-reclosure-options': () => import('./pages/pouch/options/SurfaceAndReclosureOptionsPage'),
  '/pouch/barrier-overview': () => import('./pages/pouch/PouchBarrierOverviewPage'),
  '/pouch/material-barrier-properties': () => import('./pages/pouch/PouchMaterialBarrierPropertiesPage'),
  '/pouch/material-data-sheet': () => import('./pages/pouch/MaterialDataSheetPage'),
  '/materials/data-sheet': () => import('./pages/materials/MaterialDataSheetPage'),
  '/materials/kraft-low-barrier': () => import('./pages/materials/KraftLowBarrierPage'),
  '/materials/kraft-medium-barrier': () => import('./pages/materials/KraftMediumBarrierPage'),
  '/materials/kraft-high-barrier': () => import('./pages/materials/KraftHighBarrierPage'),
  '/materials/plastic-free-kraft': () => import('./pages/materials/PlasticFreeKraftPage'),
  '/function/heat-resistant-compostable-pouches': () => import('./pages/function/HeatResistantCandlePackagingPage'),
  '/function/child-resistant-bags': () => import('./pages/function/ChildResistantBagsPage'),
  '/function/microwave-steam-bags': () => import('./pages/function/MicrowaveSteamBagsPage'),
  '/function/carbon-neutral-bags': () => import('./pages/function/CarbonNeutralBagsPage'),
  '/function/spout-pouches-juice': () => import('./pages/function/SpoutPouchesJuicePage'),
  '/function/rice-paper-bags': () => import('./pages/function/RicePaperBagsPage'),
  '/function/pva-water-soluble-bags': () => import('./pages/function/PVAWaterSolubleBagsPage'),
  '/function/large-format-kraft-heavy-bags': () => import('./pages/function/LargeFormatKraftHeavyBagPage'),
  '/function/pre-zippered-rollstock': () => import('./pages/function/PreZipperedRollstockPage'),
  '/products/custom-compostable-labels': () => import('./pages/products/CustomCompostableLabelsPage'),
  '/products/compostable-side-gusset-bags': () => import('./pages/products/CompostableSideGussetPage'),
  '/solutions/citrus-oil-packaging': () => import('./pages/solutions/CitrusOilPackagingPage'),
  '/solutions/catalog': () => import('./pages/solutions/CatalogPage'),
  '/solutions/custom-boxes-catalog': () => import('./pages/solutions/CustomBoxesCatalogPage'),
  '/solutions/flexible-pouches-catalog': () => import('./pages/solutions/FlexiblePouchesCatalogPage'),
  '/solutions/cosmetics-bottles-catalog': () => import('./pages/solutions/CosmeticsBottlesCatalogPage'),
  '/solutions/shapes/:id': () => import('./pages/solutions/ShapeDetailPage'),
  '/topics/digital-product-passport-packaging': () => import('./pages/topics/DigitalProductPassportPackaging'),
  '/topics/sensory-unboxing-experience': () => import('./pages/topics/SensoryUnboxingExperience'),
  '/topics/epr-tax-minimization-strategies': () => import('./pages/topics/EprTaxMinimizationStrategies'),
  '/topics/ultrasonic-vs-heat-sealing': () => import('./pages/topics/UltrasonicVsHeatSealing'),
  '/topics/plant-based-barrier-coatings': () => import('./pages/topics/PlantBasedBarrierCoatings'),
  '/topics/ocean-bound-plastic-packaging': () => import('./pages/topics/OceanBoundPlasticPackaging'),
  '/topics/active-modified-atmosphere-packaging': () => import('./pages/topics/ActiveModifiedAtmospherePackaging'),
  '/topics/tamper-evident-sealing-standards': () => import('./pages/topics/TamperEvidentSealingStandards'),
  '/topics/liquid-barrier-packaging-spouts': () => import('./pages/topics/LiquidBarrierPackagingSpouts'),
  '/topics/carbon-footprint-tracking-packaging': () => import('./pages/topics/CarbonFootprintTrackingPackaging'),

  '/app': () => import('./pages/PackageEditorPage'),
  '/studio': () => import('./pages/PackageEditorPage'),
  '/pricing': () => import('./pages/pouch/PouchEcoGPTKPage'),
  '/dieline-finder': () => import('./pages/PouchDielineFinderPage'),
  '/dieline-creator': () => import('./pages/PouchDielineCreatorPage'),
  '/knowledge/writable-stampable-pouches': () => import('./pages/knowledge/WritableStampablePouchesPage'),
  '/knowledge/hand-clamp-sealer': () => import('./pages/knowledge/HandClampSealerPage'),
  '/knowledge/pouch-date-coding-guide': () => import('./pages/knowledge/PouchDateCodingGuidePage'),
  '/knowledge/food-packaging-compliance-date-coding': () => import('./pages/knowledge/FoodPackagingCompliancePage'),
  '/knowledge/packaging-line-automation-date-coding': () => import('./pages/knowledge/PackagingLineAutomationPage'),
  '/knowledge/compostable-packaging-inkjet-coding': () => import('./pages/knowledge/CompostablePackagingCodingPage'),
  '/knowledge/k-seal-stand-up-pouches': () => import('./pages/knowledge/KSealStandUpPouchesPage'),
  '/knowledge/eco-packaging-reality': () => import('./pages/knowledge/EcoPackagingRealityPage'),
  '/knowledge/flat-bottom-vs-gusset': () => import('./pages/knowledge/FlatBottomVsGussetPage'),
  '/ctrl-x9k7m/bookkeeping': () => import('./pages/admin/BookkeepingPage'),
}

const WholesalePricesForCompostablePouchesHero46996 = lazyWithRetry(() => import('./pages/topics/WholesalePricesForCompostablePouchesHero46996'))
const MonoMaterialFlexiblePackagingForPetFoodHero60000 = lazyWithRetry(() => import('./pages/topics/MonoMaterialFlexiblePackagingForPetFoodHero60000'))
const DigitalPrintingKraftPaperStandUpPouchesHero19878 = lazyWithRetry(() => import('./pages/topics/DigitalPrintingKraftPaperStandUpPouchesHero19878'))
const SideGussetPremiumBox84039 = lazyWithRetry(() => import('./pages/topics/SideGussetPremiumBox84039'))
const StandUpPouchDimensionsFor6OzInfographic518894 = lazyWithRetry(() => import('./pages/topics/StandUpPouchDimensionsFor6OzInfographic518894'))
const KraftPaperFlatBottomPouchesWholesaleHero22933 = lazyWithRetry(() => import('./pages/topics/KraftPaperFlatBottomPouchesWholesaleHero22933'))
const Vxulnp13owrzxheQkwn3ughcwirk5tzblhb7q8jj3012692 = lazyWithRetry(() => import('./pages/topics/Vxulnp13owrzxheQkwn3ughcwirk5tzblhb7q8jj3012692'))
const CustomDigitalPrintBarrierPouchesHero72004 = lazyWithRetry(() => import('./pages/topics/CustomDigitalPrintBarrierPouchesHero72004'))
const CustomDigitalPrintedSachetsInfographic32958 = lazyWithRetry(() => import('./pages/topics/CustomDigitalPrintedSachetsInfographic32958'))
const EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail143244 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail143244'))
const BiodegradableBarrierFilmForPetFoodHero12681 = lazyWithRetry(() => import('./pages/topics/BiodegradableBarrierFilmForPetFoodHero12681'))
const RecyclableStandUpPouchDimensionsChartHero99023 = lazyWithRetry(() => import('./pages/topics/RecyclableStandUpPouchDimensionsChartHero99023'))
const UsaCompostablePackagingGuideInfographic346030 = lazyWithRetry(() => import('./pages/topics/UsaCompostablePackagingGuideInfographic346030'))
const EcoFriendlyCorkGiftBoxesSustainableLuxuryHero31676 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyCorkGiftBoxesSustainableLuxuryHero31676'))
const MonoMaterialRecyclableSachetDimensionsHero59256 = lazyWithRetry(() => import('./pages/topics/MonoMaterialRecyclableSachetDimensionsHero59256'))
const CustomShapePouchesDigitalPrintingInfographic681411 = lazyWithRetry(() => import('./pages/topics/CustomShapePouchesDigitalPrintingInfographic681411'))
const AMaterialBenefitsPage422872551834 = lazyWithRetry(() => import('./pages/topics/AMaterialBenefitsPage422872551834'))
const Comparison48528 = lazyWithRetry(() => import('./pages/topics/Comparison48528'))
const UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail727749 = lazyWithRetry(() => import('./pages/topics/UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail727749'))
const ARecyclableCosmeticPackagingPouches348698520106 = lazyWithRetry(() => import('./pages/topics/ARecyclableCosmeticPackagingPouches348698520106'))
const EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail1135064 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyKraftHoneycombPackingPaperWrapThumbnail1135064'))
const Material45943 = lazyWithRetry(() => import('./pages/topics/Material45943'))
const Process32178 = lazyWithRetry(() => import('./pages/topics/Process32178'))
const CompostablePouchSizeChartForLiquidsInfographic81804 = lazyWithRetry(() => import('./pages/topics/CompostablePouchSizeChartForLiquidsInfographic81804'))
const DigitalPrintedFlatBottomPouchesLowMoqHero29386 = lazyWithRetry(() => import('./pages/topics/DigitalPrintedFlatBottomPouchesLowMoqHero29386'))
const MonoPeRecyclableBarrierFilmForFlexiblePackagingHero25657 = lazyWithRetry(() => import('./pages/topics/MonoPeRecyclableBarrierFilmForFlexiblePackagingHero25657'))
const ClearMatteZipperStandUpPouchThumbnail1265090 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail1265090'))
const SustainablePackagingForProteinPowderPouchesHero55060 = lazyWithRetry(() => import('./pages/topics/SustainablePackagingForProteinPowderPouchesHero55060'))
const EcoFlatbottomPremium31645 = lazyWithRetry(() => import('./pages/topics/EcoFlatbottomPremium31645'))
const CompostablePouchSizesForPowdersInfographic341079 = lazyWithRetry(() => import('./pages/topics/CompostablePouchSizesForPowdersInfographic341079'))
const RetailShelfPouch74567 = lazyWithRetry(() => import('./pages/topics/RetailShelfPouch74567'))
const SpoutPouchTransparent1500178300571970089534 = lazyWithRetry(() => import('./pages/topics/SpoutPouchTransparent1500178300571970089534'))
const BottleShapeSachetBagThumbnail1225085 = lazyWithRetry(() => import('./pages/topics/BottleShapeSachetBagThumbnail1225085'))
const EcoFriendlyRetortBagsForBabyFoodHero17104 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyRetortBagsForBabyFoodHero17104'))
const MylarVsCompostablePackagingInfographic527759 = lazyWithRetry(() => import('./pages/topics/MylarVsCompostablePackagingInfographic527759'))
const ADetailEdgeFinish846342895367 = lazyWithRetry(() => import('./pages/topics/ADetailEdgeFinish846342895367'))
const EcoCustomLabelThumbnail346322 = lazyWithRetry(() => import('./pages/topics/EcoCustomLabelThumbnail346322'))
const HumidityPackEco26973 = lazyWithRetry(() => import('./pages/topics/HumidityPackEco26973'))
const RecyclablePouchSizeChartForSnacksHero74118 = lazyWithRetry(() => import('./pages/topics/RecyclablePouchSizeChartForSnacksHero74118'))
const HighBarrierSustainableFlexibleFilmsInfographic21416 = lazyWithRetry(() => import('./pages/topics/HighBarrierSustainableFlexibleFilmsInfographic21416'))
const FlatBottomPouchTinTieThumbnail1221686 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail1221686'))
const MonoPeRecyclableBarrierPouchesInfographic80667 = lazyWithRetry(() => import('./pages/topics/MonoPeRecyclableBarrierPouchesInfographic80667'))
const CustomShapedPouchForPowdersLowMoqHero83667 = lazyWithRetry(() => import('./pages/topics/CustomShapedPouchForPowdersLowMoqHero83667'))
const SustainableLifecycleHeroPillar59173 = lazyWithRetry(() => import('./pages/topics/SustainableLifecycleHeroPillar59173'))
const RetroHorizontalKraftFoodHandleBagThumbnail350561 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail350561'))
const MonoPeVsMonoPpInfographic59032 = lazyWithRetry(() => import('./pages/topics/MonoPeVsMonoPpInfographic59032'))
const SustainablePouchSizesForPowdersHero35425 = lazyWithRetry(() => import('./pages/topics/SustainablePouchSizesForPowdersHero35425'))
const RicePaperFlatBottomFlatBottomThumbnail295655 = lazyWithRetry(() => import('./pages/topics/RicePaperFlatBottomFlatBottomThumbnail295655'))
const SpoutedFoil3179874 = lazyWithRetry(() => import('./pages/topics/SpoutedFoil3179874'))
const BottleShapeSachetBagThumbnail422333 = lazyWithRetry(() => import('./pages/topics/BottleShapeSachetBagThumbnail422333'))

// Export preload function for use in navigation components
export const preloadRoute = (path: string) => {
  const importFn = routeImportMap[path]
  if (importFn) {
    importFn().catch(() => {}) // Silently preload
  }
}

// Lazy load all pages for better code splitting
const DigitalProductPassportPackagingPage = lazyWithRetry(() => import('./pages/topics/DigitalProductPassportPackaging'))
const SensoryUnboxingExperiencePage = lazyWithRetry(() => import('./pages/topics/SensoryUnboxingExperience'))
const EprTaxMinimizationStrategiesPage = lazyWithRetry(() => import('./pages/topics/EprTaxMinimizationStrategies'))
const UltrasonicVsHeatSealingPage = lazyWithRetry(() => import('./pages/topics/UltrasonicVsHeatSealing'))
const PlantBasedBarrierCoatingsPage = lazyWithRetry(() => import('./pages/topics/PlantBasedBarrierCoatings'))
const OceanBoundPlasticPackagingPage = lazyWithRetry(() => import('./pages/topics/OceanBoundPlasticPackaging'))
const ActiveModifiedAtmospherePackagingPage = lazyWithRetry(() => import('./pages/topics/ActiveModifiedAtmospherePackaging'))
const TamperEvidentSealingStandardsPage = lazyWithRetry(() => import('./pages/topics/TamperEvidentSealingStandards'))
const LiquidBarrierPackagingSpoutsPage = lazyWithRetry(() => import('./pages/topics/LiquidBarrierPackagingSpouts'))
const CarbonFootprintTrackingPackagingPage = lazyWithRetry(() => import('./pages/topics/CarbonFootprintTrackingPackaging'))

const StorePage = lazyWithRetry(() => import('./pages/StorePage'))
const ProductPage = lazyWithRetry(() => import('./pages/ProductPage'))
const CheckoutPage = lazyWithRetry(() => import('./pages/CheckoutPage'))
const OrderConfirmation = lazyWithRetry(() => import('./pages/OrderConfirmation'))
const RfqConfirmation = lazyWithRetry(() => import('./pages/RfqConfirmation'))
const SignInPage = lazyWithRetry(() => import('./pages/SignInPage'))
const ForgotPasswordPage = lazyWithRetry(() => import('./pages/ForgotPasswordPage'))
const ResetPasswordPage = lazyWithRetry(() => import('./pages/ResetPasswordPage'))
const AuthCallbackPage = lazyWithRetry(() => import('./pages/AuthCallbackPage'))
const DashboardPage = lazyWithRetry(() => import('./pages/DashboardPage'))
const TermsPage = lazyWithRetry(() => import('./pages/TermsPage'))
const TermsOfUsePage = lazyWithRetry(() => import('./pages/legal/TermsOfUsePage'))
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'))
const AdminPage = lazyWithRetry(() => import('./pages/AdminPage'))
const OrderManagementPage = lazyWithRetry(() => import('./pages/OrderManagementPage'))
const OrderWorkflowPage = lazyWithRetry(() => import('./pages/OrderWorkflowPage'))
const CustomerMapPage = lazyWithRetry(() => import('./pages/CustomerMapPage'))
const ImageCatalogPage = lazyWithRetry(() => import('./pages/ImageCatalogPage'))
const ArtworkHubPage = lazyWithRetry(() => import('./pages/ArtworkHubPage'))
const ImageGeneratorPage = lazyWithRetry(() => import('./pages/admin/ImageGeneratorPage'))
const DailyReportsPage = lazyWithRetry(() => import('./pages/admin/DailyReportsPage'))
const EmailCampaignPage = lazyWithRetry(() => import('./pages/admin/EmailCampaignPage'))
const UnsubscribePage = lazyWithRetry(() => import('./pages/UnsubscribePage'))
const RFQGeneratorPage = lazyWithRetry(() => import('./pages/admin/rfq/RFQGeneratorPage'))
const RFQComparisonPage = lazyWithRetry(() => import('./pages/admin/rfq/RFQComparisonPage'))
const SupplierHubPage = lazyWithRetry(() => import('./pages/rfq/SupplierHubPage'))
const QuoteAnalyticsPage = lazyWithRetry(() => import('./pages/admin/QuoteAnalyticsPage'))
const BookkeepingPage = lazyWithRetry(() => import('./pages/admin/BookkeepingPage'))

// Industry Pages - Lazy loaded
const CoffeeTeaPage = lazyWithRetry(() => import('./pages/industry/CoffeeTeaPage'))
const SnacksFoodPage = lazyWithRetry(() => import('./pages/industry/SnacksFoodPage'))
const PetFoodPage = lazyWithRetry(() => import('./pages/industry/PetFoodPage'))
const SupplementsPowdersPage = lazyWithRetry(() => import('./pages/industry/SupplementsPowdersPage'))
const BabyFoodPage = lazyWithRetry(() => import('./pages/industry/BabyFoodPage'))
const FrozenFoodPage = lazyWithRetry(() => import('./pages/industry/FrozenFoodPage'))
const SaucesCondimentsPage = lazyWithRetry(() => import('./pages/industry/SaucesCondimentsPage'))

// Packaging Pages - Lazy loaded
const FreshProducePage = lazyWithRetry(() => import('./pages/industry/FreshProducePage'))
const PremiummattepouchesPage = lazyWithRetry(() => import('./pages/industry/premiummattepouchesPage'))
const WholesaleunprintedpouchesPage = lazyWithRetry(() => import('./pages/industry/wholesaleunprintedpouchesPage'))
const HighbarrierfoodpouchesPage = lazyWithRetry(() => import('./pages/industry/highbarrierfoodpouchesPage'))
const AustraliashippingcooPage = lazyWithRetry(() => import('./pages/industry/australiashippingcooPage'))
const PremiumfinishesPage = lazyWithRetry(() => import('./pages/industry/premiumfinishesPage'))
const HighbarrierretortPage = lazyWithRetry(() => import('./pages/industry/highbarrierretortPage'))
const CustomspoutpouchesPage = lazyWithRetry(() => import('./pages/industry/customspoutpouchesPage'))
const AutomaticLabelingMachinePage = lazyWithRetry(() => import('./pages/industry/automaticlabelingmachinePage'))
const StockbagspoutedpouchPage = lazyWithRetry(() => import('./pages/industry/stockbagspoutedpouchPage'))
const PetfoodquadsealPage = lazyWithRetry(() => import('./pages/industry/petfoodquadsealPage'))
const KraftwindowpouchPage = lazyWithRetry(() => import('./pages/industry/kraftwindowpouchPage'))
const MatchasupplementsachetsPage = lazyWithRetry(() => import('./pages/industry/matchasupplementsachetsPage'))
const LowmoqfastturnaroundPage = lazyWithRetry(() => import('./pages/industry/lowmoqfastturnaroundPage'))
const PremiumsofttouchPage = lazyWithRetry(() => import('./pages/industry/premiumsofttouchPage'))
const CustomdiecutpouchesPage = lazyWithRetry(() => import('./pages/industry/customdiecutpouchesPage'))
const ResealabletintiebagsPage = lazyWithRetry(() => import('./pages/industry/resealabletintiebagsPage'))
const SustainablekraftsolutionsPage = lazyWithRetry(() => import('./pages/industry/sustainablekraftsolutionsPage'))
const DurablereusablepouchesPage = lazyWithRetry(() => import('./pages/composting/durablereusablepouchesPage'))
const PlacompostablepackagingPage = lazyWithRetry(() => import('./pages/composting/placompostablepackagingPage'))
const SustainablehealthcarepackagingPage = lazyWithRetry(() => import('./pages/composting/sustainablehealthcarepackagingPage'))
const EcofriendlyteacoffeePage = lazyWithRetry(() => import('./pages/composting/ecofriendlyteacoffeePage'))
const CompostablelaminatedfilmPage = lazyWithRetry(() => import('./pages/composting/compostablelaminatedfilmPage'))
const ChildresistantcbdPage = lazyWithRetry(() => import('./pages/composting/childresistantcbdPage'))
const CompostableproteinbagsPage = lazyWithRetry(() => import('./pages/composting/compostableproteinbagsPage'))
const CleartransparentpouchesPage = lazyWithRetry(() => import('./pages/composting/cleartransparentpouchesPage'))
const RecyclablevacuumbagsPage = lazyWithRetry(() => import('./pages/composting/recyclablevacuumbagsPage'))
const EcocoffeebagsvalvePage = lazyWithRetry(() => import('./pages/composting/ecocoffeebagsvalvePage'))
const PcrpackagingpouchesPage = lazyWithRetry(() => import('./pages/composting/pcrpackagingpouchesPage'))
const EuroholehangbagsPage = lazyWithRetry(() => import('./pages/composting/euroholehangbagsPage'))
const SustainableteasachetsPage = lazyWithRetry(() => import('./pages/composting/sustainableteasachetsPage'))
const MeatjerkypackagingPage = lazyWithRetry(() => import('./pages/composting/meatjerkypackagingPage'))
const BrownwhitekraftPage = lazyWithRetry(() => import('./pages/composting/brownwhitekraftPage'))
const SugarcaneboxPage = lazyWithRetry(() => import('./pages/composting/sugarcaneboxPage'))
const StandUpPouchesPage = lazyWithRetry(() => import('./pages/packaging/StandUpPouchesPage'))
const ShrinkSleevesPage = lazyWithRetry(() => import('./pages/packaging/ShrinkSleevesPage'))
const FlatBottomBagsPage = lazyWithRetry(() => import('./pages/packaging/FlatBottomBagsPage'))
const SpoutPouchesPage = lazyWithRetry(() => import('./pages/packaging/SpoutPouchesPage'))
const FlatPouchesPage = lazyWithRetry(() => import('./pages/packaging/FlatPouchesPage'))
const SideGussetBagsPage = lazyWithRetry(() => import('./pages/packaging/SideGussetBagsPage'))
const VacuumPouchesPage = lazyWithRetry(() => import('./pages/packaging/VacuumPouchesPage'))
const CustomBoxesPage = lazyWithRetry(() => import('./pages/packaging/CustomBoxesPage'))

// Materials Pages - Lazy loaded
const CompostablePage = lazyWithRetry(() => import('./pages/materials/CompostablePage'))
const RecyclableMonoPEPage = lazyWithRetry(() => import('./pages/materials/RecyclableMonoPEPage'))
const RecyclableMonoPPPage = lazyWithRetry(() => import('./pages/materials/RecyclableMonoPPPage'))
const BioPEPage = lazyWithRetry(() => import('./pages/materials/BioPEPage'))
const PCRPage = lazyWithRetry(() => import('./pages/materials/PCRPage'))
const HomeCompostablePage = lazyWithRetry(() => import('./pages/materials/HomeCompostablePage'))
const IndustrialCompostablePage = lazyWithRetry(() => import('./pages/materials/IndustrialCompostablePage'))
const KraftLowBarrierPage = lazyWithRetry(() => import('./pages/materials/KraftLowBarrierPage'))
const KraftMediumBarrierPage = lazyWithRetry(() => import('./pages/materials/KraftMediumBarrierPage'))
const KraftHighBarrierPage = lazyWithRetry(() => import('./pages/materials/KraftHighBarrierPage'))
const PlasticFreeKraftPage = lazyWithRetry(() => import('./pages/materials/PlasticFreeKraftPage'))
const CombustionSafetyTestPage = lazyWithRetry(() => import('./pages/materials/CombustionSafetyTestPage'))
const ConventionalPrintedSachetsPage = lazyWithRetry(() => import('./pages/materials/ConventionalPrintedSachetsPage'))

// Pouch Topics
const PouchEcoFriendlyFoodPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchEcoFriendlyFoodPackagingPage'))
const PouchRealWorldSustainabilityPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchRealWorldSustainabilityPage'))
const PouchSustainablePackagingPillarPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchSustainablePackagingPillarPage'))
const PouchRecyclablePackagingGuidePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchRecyclablePackagingGuidePage'))
const PouchCompostablePackagingBlogPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostablePackagingBlogPage'))
const PouchCompostableCertificationFAQPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableCertificationFAQPage'))
const PouchMonoMaterialSolutionPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchMonoMaterialSolutionPage'))
const PouchPCRPackagingGuidePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchPCRPackagingGuidePage'))
const PouchFoodPackagingSupplierServicePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchFoodPackagingSupplierServicePage'))
const PouchEcoFriendlySupplierServicePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchEcoFriendlySupplierServicePage'))
const PouchCustomBrandPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCustomBrandPackagingPage'))
const PouchCompostableBabyFoodBagsPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableBabyFoodBagsPage'))
const PouchGreenCoffeeMaterialsPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchGreenCoffeeMaterialsPage'))
const PouchRecyclableSnackPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchRecyclableSnackPackagingPage'))
const PouchCustomPrintedSustainablePouchesPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCustomPrintedSustainablePouchesPage'))
const PouchDigitalPrintingEcoPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchDigitalPrintingEcoPackagingPage'))
const PouchCompostableHumidityControlPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableHumidityControlPage'))
const PouchEcoPackagingRegulationsPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchEcoPackagingRegulationsPage'))
const PouchCustomCompostablePouchSuppliersPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCustomCompostablePouchSuppliersPage'))
const PouchLowMOQStartupPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchLowMOQStartupPackagingPage'))
const PouchDTCSustainablePackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchDTCSustainablePackagingPage'))
const PouchPFASFreePackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchPFASFreePackagingPage'))
const PouchHomeCompostableCoffeeBagsPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchHomeCompostableCoffeeBagsPage'))
const PouchCompostableZipperNoRemovalPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableZipperNoRemovalPage'))
const PouchCompostableZipperDurabilityPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableZipperDurabilityPage'))
const PouchCompostableSpoutedPouchesPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCompostableSpoutedPouchesPage'))
const PouchCustomVsStandardPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCustomVsStandardPackagingPage'))
const PouchMonoPEPouchesPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchMonoPEPouchesPage'))
const PouchChildResistantMylarBagsPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchChildResistantMylarBagsPage'))
const PouchHighHeatCandlePackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchHighHeatCandlePackagingPage'))


const PouchUSACoffeePage = lazyWithRetry(() => import('./pages/pouch/usa/PouchUSACoffeePage'))
const PouchUSACompostableHubPage = lazyWithRetry(() => import('./pages/pouch/usa/PouchUSACompostableHubPage'))
const PouchUSALabelingGuidePage = lazyWithRetry(() => import('./pages/pouch/usa/PouchUSALabelingGuidePage'))
const PouchUSASnacksPage = lazyWithRetry(() => import('./pages/pouch/usa/PouchUSASnacksPage'))

const PouchAllOptionsPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchAllOptionsPage'))
const PouchKnowledgeSizeGuidePage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchSizeGuidePage'))
const PouchPouchSizingPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchPouchSizingPage'))
const PouchPrintingTypesPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchPrintingTypesPage'))
const PouchWorkflowPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchWorkflowPage'))
const PouchKSealStandUpPouchesPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchKSealStandUpPouchesPage'))
const PouchWhiteInkUnderprintPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchWhiteInkUnderprintPage'))
const PouchFinSealLapSealPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchFinSealLapSealPage'))
const PouchFlatBottomVsGussetPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchFlatBottomVsGussetPage'))
const PouchColorMatchingPage = lazyWithRetry(() => import('./pages/pouch/knowledge/PouchColorMatchingPage'))
const PouchRecycledOceanPlasticPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchRecycledOceanPlasticPackagingPage'))
const PouchMinimalistD2CPackagingPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchMinimalistD2CPackagingPage'))
const DynamicPouchTopicPage = lazyWithRetry(() => import('./pages/pouch/topics/DynamicPouchTopicPage'))
const EUPPWRCompliancePage = lazyWithRetry(() => import('./pages/topics/EUPPWRCompliancePage'))
const PouchCustomBrandPackagingServicePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchCustomBrandPackagingServicePage'))
const PouchEcoFriendlySupplierVerificationPage = lazyWithRetry(() => import('./pages/pouch/topics/PouchEcoFriendlySupplierVerificationPage'))
const PouchReducePackagingWasteGuidePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchReducePackagingWasteGuidePage'))

// Printing Pages - Lazy loaded
const DigitalPrintingPage = lazyWithRetry(() => import('./pages/printing/DigitalPrintingPage'))
const PlatePrintingPage = lazyWithRetry(() => import('./pages/printing/PlatePrintingPage'))

// Feature Pages - Lazy loaded
const ReclosureOptionsPage = lazyWithRetry(() => import('./pages/features/ReclosureOptionsPage'))
const SurfaceFinishPage = lazyWithRetry(() => import('./pages/features/SurfaceFinishPage'))
const BarrierOptionsPage = lazyWithRetry(() => import('./pages/features/BarrierOptionsPage'))
const LowBarrierPage = lazyWithRetry(() => import('./pages/features/LowBarrierPage'))
const MediumBarrierPage = lazyWithRetry(() => import('./pages/features/MediumBarrierPage'))
const HighBarrierPage = lazyWithRetry(() => import('./pages/features/HighBarrierPage'))
const MaterialBarrierPropertiesPage = lazyWithRetry(() => import('./pages/features/MaterialBarrierPropertiesPage'))

// Function Pages - Lazy loaded
const MicrowaveSteamBagsPage = lazyWithRetry(() => import('./pages/function/MicrowaveSteamBagsPage'))
const SmartDegassingStickerPageB2B = lazyWithRetry(() => import('./pages/function/SmartDegassingStickerPage'))
const SmartDegassingStickerPageB2C = lazyWithRetry(() => import('./pages/pouch/options/SmartDegassingStickerPage'))
const CarbonNeutralBagsPage = lazyWithRetry(() => import('./pages/function/CarbonNeutralBagsPage'))
const SpoutPouchesJuicePage = lazyWithRetry(() => import('./pages/function/SpoutPouchesJuicePage'))
const ChildResistantBagsPage = lazyWithRetry(() => import('./pages/function/ChildResistantBagsPage'))
const PreZipperedRollstockPage = lazyWithRetry(() => import('./pages/function/PreZipperedRollstockPage'))
const DigitalPrintedRetortBagsPage = lazyWithRetry(() => import('./pages/function/DigitalPrintedRetortBagsPage'))
const RicePaperBagsPage = lazyWithRetry(() => import('./pages/function/RicePaperBagsPage'))
const PVAWaterSolubleBagsPage = lazyWithRetry(() => import('./pages/function/PVAWaterSolubleBagsPage'))
const LargeFormatKraftHeavyBagPage = lazyWithRetry(() => import('./pages/function/LargeFormatKraftHeavyBagPage'))
const HeatResistantCandlePackagingPage = lazyWithRetry(() => import('./pages/function/HeatResistantCandlePackagingPage'))


// Lab Pages - Lazy loaded
const LateralFilterBagsPage = lazyWithRetry(() => import('./pages/lab/LateralFilterBagsPage'))
const WireClosureBagsPage = lazyWithRetry(() => import('./pages/lab/WireClosureBagsPage'))
const LabBlenderBagsPage = lazyWithRetry(() => import('./pages/lab/LabBlenderBagsPage'))

// Legal Pages - Lazy loaded
const PrivacyPolicyPage = lazyWithRetry(() => import('./pages/legal/PrivacyPolicyPage'))
const ShippingPolicyPage = lazyWithRetry(() => import('./pages/legal/ShippingPolicyPage'))
const ReturnPolicyPage = lazyWithRetry(() => import('./pages/legal/ReturnPolicyPage'))
const CookiePolicyPage = lazyWithRetry(() => import('./pages/legal/CookiePolicyPage'))

// Company Pages - Lazy loaded
const AboutPage = lazyWithRetry(() => import('./pages/company/AboutPage'))
const FactoryTourPage = lazyWithRetry(() => import('./pages/company/FactoryTourPage'))
const CertificatesPage = lazyWithRetry(() => import('./pages/company/CertificatesPage'))
const BCorpPage = lazyWithRetry(() => import('./pages/company/BCorpPage'))
const BPICertifiedPage = lazyWithRetry(() => import('./pages/company/BPICertifiedPage'))

// Knowledge Pages - Lazy loaded
const AllOptionsPage = lazyWithRetry(() => import('./pages/knowledge/AllOptionsPage'))
const SizeGuidePage = lazyWithRetry(() => import('./pages/knowledge/SizeGuidePage'))
const PouchSizingPage = lazyWithRetry(() => import('./pages/knowledge/PouchSizingPage'))
const PrintingTypesPage = lazyWithRetry(() => import('./pages/knowledge/PrintingTypesPage'))
const WorkflowPage = lazyWithRetry(() => import('./pages/knowledge/WorkflowPage'))
const KSealStandUpPouchesPage = lazyWithRetry(() => import('./pages/knowledge/KSealStandUpPouchesPage'))
const WhiteInkUnderprintPage = lazyWithRetry(() => import('./pages/knowledge/WhiteInkUnderprintPage'))
const FinSealLapSealPage = lazyWithRetry(() => import('./pages/knowledge/FinSealLapSealPage'))
const FlatBottomVsGussetPage = lazyWithRetry(() => import('./pages/knowledge/FlatBottomVsGussetPage'))
const EcoPackagingRealityPage = lazyWithRetry(() => import('./pages/knowledge/EcoPackagingRealityPage'))
const WritableStampablePouchesPage = lazyWithRetry(() => import('./pages/knowledge/WritableStampablePouchesPage'))
const ColorMatchingPage = lazyWithRetry(() => import('./pages/knowledge/ColorMatchingPage'))
const PhaVsPla = lazyWithRetry(() => import('./pages/knowledge/PhaVsPla'))
const ReusablePackagingPage = lazyWithRetry(() => import('./pages/knowledge/ReusablePackagingPage'))
const BottlePrintingGuidePage = lazyWithRetry(() => import('./pages/knowledge/BottlePrintingGuidePage'))
const PouchHeatSealingGuidePage = lazyWithRetry(() => import('./pages/knowledge/PouchHeatSealingGuidePage'))
const HandClampSealerPage = lazyWithRetry(() => import('./pages/knowledge/HandClampSealerPage'))
const PouchDateCodingGuidePage = lazyWithRetry(() => import('./pages/knowledge/PouchDateCodingGuidePage'))
const FoodPackagingCompliancePage = lazyWithRetry(() => import('./pages/knowledge/FoodPackagingCompliancePage'))
const PackagingLineAutomationPage = lazyWithRetry(() => import('./pages/knowledge/PackagingLineAutomationPage'))
const CompostablePackagingCodingPage = lazyWithRetry(() => import('./pages/knowledge/CompostablePackagingCodingPage'))
const DupontPaperToteBagsBenefits = lazyWithRetry(() => import('./pages/knowledge/DupontPaperToteBagsBenefits'))
const TyvekVsCanvasToteBags = lazyWithRetry(() => import('./pages/knowledge/TyvekVsCanvasToteBags'))
const EcoFriendlyDupontPaperBags = lazyWithRetry(() => import('./pages/knowledge/EcoFriendlyDupontPaperBags'))
const MoldedPulpPackagingBenefits = lazyWithRetry(() => import('./pages/knowledge/MoldedPulpPackagingBenefits'))
const MoldedPulpGuide = lazyWithRetry(() => import('./pages/knowledge/MoldedPulpGuide'))
const AutomatingPulpLines = lazyWithRetry(() => import('./pages/knowledge/AutomatingPulpLines'))
const EcoDegradablePulpBoxesGuide = lazyWithRetry(() => import('./pages/knowledge/EcoDegradablePulpBoxesGuide'))
const PulpBoxesVsCorrugatedCardboard = lazyWithRetry(() => import('./pages/knowledge/PulpBoxesVsCorrugatedCardboard'))
const LuxuryCorkGiftBoxes = lazyWithRetry(() => import('./pages/knowledge/LuxuryCorkGiftBoxes'))
const CorkPackagingSustainability = lazyWithRetry(() => import('./pages/knowledge/CorkPackagingSustainability'))
const CustomCorkGiftBoxesDesign = lazyWithRetry(() => import('./pages/knowledge/CustomCorkGiftBoxesDesign'))
const SoftWoodGiftBoxesWholesale = lazyWithRetry(() => import('./pages/knowledge/SoftWoodGiftBoxesWholesale'))
const WoodenGiftBoxesSustainability = lazyWithRetry(() => import('./pages/knowledge/WoodenGiftBoxesSustainability'))
const BalsaSoftWoodPackaging = lazyWithRetry(() => import('./pages/knowledge/BalsaSoftWoodPackaging'))

// Support Pages - Lazy loaded
const FAQsPage = lazyWithRetry(() => import('./pages/support/FAQsPage'))
const LeadTimePage = lazyWithRetry(() => import('./pages/support/LeadTimePage'))
const CustomPrintedSamplePage = lazyWithRetry(() => import('./pages/support/CustomPrintedSamplePage'))
const UnprintedSamplesPage = lazyWithRetry(() => import('./pages/support/UnprintedSamplesPage'))
const ColorAccuracyDigitalPrintingPage = lazyWithRetry(() => import('./pages/support/ColorAccuracyDigitalPrintingPage'))

// Case Studies Pages - Lazy loaded
const CoffeeRoasteryCaseStudy = lazyWithRetry(() => import('./pages/case-studies/CoffeeRoasteryCaseStudy'))
const TeaBrandCaseStudy = lazyWithRetry(() => import('./pages/case-studies/TeaBrandCaseStudy'))
const SuperfoodBrandCaseStudy = lazyWithRetry(() => import('./pages/case-studies/SuperfoodBrandCaseStudy'))
const PetTreatsCaseStudy = lazyWithRetry(() => import('./pages/case-studies/PetTreatsCaseStudy'))
const ChocolateBrandCaseStudy = lazyWithRetry(() => import('./pages/case-studies/ChocolateBrandCaseStudy'))
const CandleBrandCaseStudy = lazyWithRetry(() => import('./pages/case-studies/CandleBrandCaseStudy'))
const BakeryCaseStudy = lazyWithRetry(() => import('./pages/case-studies/BakeryCaseStudy'))
const WellnessBrandCaseStudy = lazyWithRetry(() => import('./pages/case-studies/WellnessBrandCaseStudy'))
const OrganicNutsCaseStudy = lazyWithRetry(() => import('./pages/case-studies/OrganicNutsCaseStudy'))
const BathProductsCaseStudy = lazyWithRetry(() => import('./pages/case-studies/BathProductsCaseStudy'))
const AdaptogensCaseStudy = lazyWithRetry(() => import('./pages/case-studies/AdaptogensCaseStudy'))
const OutdoorSnacksCaseStudy = lazyWithRetry(() => import('./pages/case-studies/OutdoorSnacksCaseStudy'))

// Blog Pages - Lazy loaded
const BlogPage = lazyWithRetry(() => import('./pages/blog/BlogPage'))
const BlogPostPage = lazyWithRetry(() => import('./pages/blog/BlogPostPage'))
const PackagingCostGuidePage = lazyWithRetry(() => import('./pages/blog/PackagingCostGuidePage'))
const CompostableVsRecyclablePage = lazyWithRetry(() => import('./pages/blog/CompostableVsRecyclablePage'))
const EcoPackagingMistakesPage = lazyWithRetry(() => import('./pages/blog/EcoPackagingMistakesPage'))
const CompostableZipperNoRemovalPage = lazyWithRetry(() => import('./pages/blog/CompostableZipperNoRemovalPage'))
const StampFoilRecyclabilityPage = lazyWithRetry(() => import('./pages/blog/StampFoilRecyclabilityPage'))

// Learn Center - Lazy loaded
const LearnSearchPage = lazyWithRetry(() => import('./pages/LearnSearchPage'))

// USA Pages - Lazy loaded
const USACompostableHubPage = lazyWithRetry(() => import('./pages/usa/USACompostableHubPage'))
const USACoffeePage = lazyWithRetry(() => import('./pages/usa/USACoffeePage'))
const USASnacksPage = lazyWithRetry(() => import('./pages/usa/USASnacksPage'))
const USALabelingGuidePage = lazyWithRetry(() => import('./pages/usa/USALabelingGuidePage'))

// Spec Pages - Material Structures - Lazy loaded
const PcrPetDuplexClearPage = lazyWithRetry(() => import('./pages/spec/PcrPetDuplexClearPage'))
const PcrPpDuplexClearPage = lazyWithRetry(() => import('./pages/spec/PcrPpDuplexClearPage'))
const PcrPetKraftTriplexClearPage = lazyWithRetry(() => import('./pages/spec/PcrPetKraftTriplexClearPage'))
const PcrPpKraftTriplexClearPage = lazyWithRetry(() => import('./pages/spec/PcrPpKraftTriplexClearPage'))
const PcrPetDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/PcrPetDuplexNoWindowPage'))
const PcrPpDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/PcrPpDuplexNoWindowPage'))
const PcrPetTriplexMetalisedPage = lazyWithRetry(() => import('./pages/spec/PcrPetTriplexMetalisedPage'))
const PcrPpTriplexMetalisedPage = lazyWithRetry(() => import('./pages/spec/PcrPpTriplexMetalisedPage'))
const PcrKraftVmpetPage = lazyWithRetry(() => import('./pages/spec/PcrKraftVmpetPage'))
const PcrPetTriplexAluminumPage = lazyWithRetry(() => import('./pages/spec/PcrPetTriplexAluminumPage'))
const PcrPpTriplexAluminumPage = lazyWithRetry(() => import('./pages/spec/PcrPpTriplexAluminumPage'))
const PcrPetKraftQuadlexAluminumPage = lazyWithRetry(() => import('./pages/spec/PcrPetKraftQuadlexAluminumPage'))
const PcrPpKraftQuadlexAluminumPage = lazyWithRetry(() => import('./pages/spec/PcrPpKraftQuadlexAluminumPage'))
const PcrKraftDuplexLowPage = lazyWithRetry(() => import('./pages/spec/PcrKraftDuplexLowPage'))
const MonoPeDuplexClearPage = lazyWithRetry(() => import('./pages/spec/MonoPeDuplexClearPage'))
const MonoPpDuplexClearPage = lazyWithRetry(() => import('./pages/spec/MonoPpDuplexClearPage'))
const MonoPeDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/MonoPeDuplexNoWindowPage'))
const MonoPpDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/MonoPpDuplexNoWindowPage'))
const CompostableMaterialStructurePage = lazyWithRetry(() => import('./pages/spec/CompostableMaterialStructurePage'))
const BioCelloTriplexHighestPage = lazyWithRetry(() => import('./pages/spec/BioCelloTriplexHighestPage'))
const BioCelloTriplexMetalisedPage = lazyWithRetry(() => import('./pages/spec/BioCelloTriplexMetalisedPage'))
const BioKraftVmCelloPage = lazyWithRetry(() => import('./pages/spec/BioKraftVmCelloPage'))
const BioKraftPbatLowPage = lazyWithRetry(() => import('./pages/spec/BioKraftPbatLowPage'))
const CompostablePouchGeoPage = lazyWithRetry(() => import('./pages/spec/CompostablePouchGeoPage'))

// BioPE Spec Pages - Plant-Based Bio-PE Structures - Lazy loaded
const BioPePetDuplexClearPage = lazyWithRetry(() => import('./pages/spec/BioPePetDuplexClearPage'))
const BioPePpDuplexClearPage = lazyWithRetry(() => import('./pages/spec/BioPePpDuplexClearPage'))
const BioPePetKraftTriplexClearPage = lazyWithRetry(() => import('./pages/spec/BioPePetKraftTriplexClearPage'))
const BioPePpKraftTriplexClearPage = lazyWithRetry(() => import('./pages/spec/BioPePpKraftTriplexClearPage'))
const BioPePetDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/BioPePetDuplexNoWindowPage'))
const BioPePpDuplexNoWindowPage = lazyWithRetry(() => import('./pages/spec/BioPePpDuplexNoWindowPage'))
const BioPePetTriplexMetalisedPage = lazyWithRetry(() => import('./pages/spec/BioPePetTriplexMetalisedPage'))
const BioPePpTriplexMetalisedPage = lazyWithRetry(() => import('./pages/spec/BioPePpTriplexMetalisedPage'))
const BioPeKraftVmpetPage = lazyWithRetry(() => import('./pages/spec/BioPeKraftVmpetPage'))
const BioPePetTriplexAluminumPage = lazyWithRetry(() => import('./pages/spec/BioPePetTriplexAluminumPage'))
const BioPePpTriplexAluminumPage = lazyWithRetry(() => import('./pages/spec/BioPePpTriplexAluminumPage'))
const BioPePetKraftQuadlexAluminumPage = lazyWithRetry(() => import('./pages/spec/BioPePetKraftQuadlexAluminumPage'))
const BioPePpKraftQuadlexAluminumPage = lazyWithRetry(() => import('./pages/spec/BioPePpKraftQuadlexAluminumPage'))
const BioPeKraftDuplexLowPage = lazyWithRetry(() => import('./pages/spec/BioPeKraftDuplexLowPage'))

// Team Pages - Lazy loaded
const RyanWongPage = lazyWithRetry(() => import('./pages/team/RyanWongPage'))

// Products Pages - SEO Focused - Lazy loaded
const CompostableCoffeeBagsPage = lazyWithRetry(() => import('./pages/products/CompostableCoffeeBagsPage'))
const CompostableSideGussetPage = lazyWithRetry(() => import('./pages/products/CompostableSideGussetPage'))
const CompostableStandUpPouchesPage = lazyWithRetry(() => import('./pages/products/CompostableStandUpPouchesPage'))
const RecyclableMonoMaterialPage = lazyWithRetry(() => import('./pages/products/RecyclableMonoMaterialPage'))
const CoffeeBagsDegassingValvePage = lazyWithRetry(() => import('./pages/products/CoffeeBagsDegassingValvePage'))
const LowMOQPackagingPage = lazyWithRetry(() => import('./pages/products/LowMOQPackagingPage'))
const CustomLabelsPage = lazyWithRetry(() => import('./pages/products/CustomLabelsPage'))
const CustomStickersPage = lazyWithRetry(() => import('./pages/products/CustomStickersPage'))
const LabelsAndStickersPage = lazyWithRetry(() => import('./pages/products/LabelsAndStickersPage'))
const LabBagsPage = lazyWithRetry(() => import('./pages/products/LabBagsPage'))
const CustomCompostableLabelsPage = lazyWithRetry(() => import('./pages/products/CustomCompostableLabelsPage'))

// 9 New SEO Pages
const CompostableBlog = lazyWithRetry(() => import('./pages/topics/CompostableBlog'))
const SustainablePillar = lazyWithRetry(() => import('./pages/topics/SustainablePillar'))
const AAchieveCoffeeKvWarmSeries5435371 = lazyWithRetry(() => import('./pages/topics/AAchieveCoffeeKvWarmSeries5435371'))
const AAchieveDetail10FinalMasterpiece6237738 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail10FinalMasterpiece6237738'))
const AAchieveDetail09Signature0200823 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail09Signature0200823'))
const AAchieveCoffeeKvBrandStatement8692247 = lazyWithRetry(() => import('./pages/topics/AAchieveCoffeeKvBrandStatement8692247'))
const AAchieveDetail02Design1799169 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail02Design1799169'))
const AAchieveDetail01LimitedSeries5452944 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail01LimitedSeries5452944'))
const AAchieveCoffeeKvBrightSeries0823684 = lazyWithRetry(() => import('./pages/topics/AAchieveCoffeeKvBrightSeries0823684'))
const AAchieveCoffeeKvFlagshipOpening9453786 = lazyWithRetry(() => import('./pages/topics/AAchieveCoffeeKvFlagshipOpening9453786'))
const AAchieveDetail03Perspectives1618831 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail03Perspectives1618831'))
const AAchieveDetail06Typography5171494 = lazyWithRetry(() => import('./pages/topics/AAchieveDetail06Typography5171494'))
const AAchieveCoffeeKvLimitedSeries2884858 = lazyWithRetry(() => import('./pages/topics/AAchieveCoffeeKvLimitedSeries2884858'))
const Paul = lazyWithRetry(() => import('./pages/topics/Paul'))
const VibrantPink = lazyWithRetry(() => import('./pages/topics/VibrantPink'))
const JasminCompostable = lazyWithRetry(() => import('./pages/topics/JasminCompostable'))
const Richard = lazyWithRetry(() => import('./pages/topics/Richard'))
const Nicole = lazyWithRetry(() => import('./pages/topics/Nicole'))
const Michelle = lazyWithRetry(() => import('./pages/topics/Michelle'))
const Arielle = lazyWithRetry(() => import('./pages/topics/Arielle'))
const MinimalBlack = lazyWithRetry(() => import('./pages/topics/MinimalBlack'))
const Ruby = lazyWithRetry(() => import('./pages/topics/Ruby'))
const Steph = lazyWithRetry(() => import('./pages/topics/Steph'))
const ModernCyan = lazyWithRetry(() => import('./pages/topics/ModernCyan'))
const Remi = lazyWithRetry(() => import('./pages/topics/Remi'))
const Holly = lazyWithRetry(() => import('./pages/topics/Holly'))
const Jemma = lazyWithRetry(() => import('./pages/topics/Jemma'))
const OrganicAmber = lazyWithRetry(() => import('./pages/topics/OrganicAmber'))
const Leo = lazyWithRetry(() => import('./pages/topics/Leo'))
const David = lazyWithRetry(() => import('./pages/topics/David'))
const EcoBiodegradableBlue = lazyWithRetry(() => import('./pages/topics/EcoBiodegradableBlue'))
const EloquenceLuxury = lazyWithRetry(() => import('./pages/topics/EloquenceLuxury'))
const NanoProKSeal = lazyWithRetry(() => import('./pages/topics/NanoProKSeal'))
const NanoProSupV2 = lazyWithRetry(() => import('./pages/topics/NanoProSupV2'))
const FlatBottomPremium = lazyWithRetry(() => import('./pages/topics/FlatBottomPremium'))
const NanoProSupLifestyle = lazyWithRetry(() => import('./pages/topics/NanoProSupLifestyle'))
const AchievePackKSeal = lazyWithRetry(() => import('./pages/topics/AchievePackKSeal'))
const AchievePackBrandingSpotlight = lazyWithRetry(() => import('./pages/topics/AchievePackBrandingSpotlight'))
const ACoffeeTeaHeroV23426201 = lazyWithRetry(() => import('./pages/topics/ACoffeeTeaHeroV23426201'))
const AIndustrialCompostableCardV15916306 = lazyWithRetry(() => import('./pages/topics/AIndustrialCompostableCardV15916306'))
const CoffeeBagsDegassingValveSeoInfographic = lazyWithRetry(() => import('./pages/topics/CoffeeBagsDegassingValveSeoInfographic'))
const HomeCompostableCoffeeBagsSeoInfographic = lazyWithRetry(() => import('./pages/topics/HomeCompostableCoffeeBagsSeoInfographic'))
const DtcSustainablePackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/DtcSustainablePackagingSeoInfographic'))
const CompostableSpoutedPouchesSeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableSpoutedPouchesSeoInfographic'))
const MonoPePouchesSeoInfographic = lazyWithRetry(() => import('./pages/topics/MonoPePouchesSeoInfographic'))
const RecyclableMonoMaterialPouchesSeoInfographic = lazyWithRetry(() => import('./pages/topics/RecyclableMonoMaterialPouchesSeoInfographic'))
const CustomCompostablePouchSuppliersSeoInfographic = lazyWithRetry(() => import('./pages/topics/CustomCompostablePouchSuppliersSeoInfographic'))
const CustomPrintedSustainablePouchesSeoInfographic = lazyWithRetry(() => import('./pages/topics/CustomPrintedSustainablePouchesSeoInfographic'))
const CoffeeRoasterSeoInfographic = lazyWithRetry(() => import('./pages/topics/CoffeeRoasterSeoInfographic'))
const ChildResistantMylarBagsSeoInfographic = lazyWithRetry(() => import('./pages/topics/ChildResistantMylarBagsSeoInfographic'))
const EcoStandUpPouchGuidePage = lazyWithRetry(() => import('./pages/products/EcoStandUpPouchGuidePage'))
const EcoStandUpCoffeePouchPage = lazyWithRetry(() => import('./pages/products/EcoStandUpCoffeePouchPage'))
const EcoVsConventionalPouchPage = lazyWithRetry(() => import('./pages/products/EcoVsConventionalPouchPage'))
const EcoSideGussetGuidePage = lazyWithRetry(() => import('./pages/products/EcoSideGussetGuidePage'))
const SideGussetCoffeeBagPage = lazyWithRetry(() => import('./pages/products/SideGussetCoffeeBagPage'))
const RecyclableSideGussetPage = lazyWithRetry(() => import('./pages/products/RecyclableSideGussetPage'))
const EcoBoxBottomPouchPage = lazyWithRetry(() => import('./pages/products/EcoBoxBottomPouchPage'))
const EcoFlatBottomPouchPage = lazyWithRetry(() => import('./pages/products/EcoFlatBottomPouchPage'))
const PremiumEcoPackagingComparisonPage = lazyWithRetry(() => import('./pages/products/PremiumEcoPackagingComparisonPage'))
const CustomCorrugatedBoxesPage = lazyWithRetry(() => import('./pages/products/CustomCorrugatedBoxesPage'))
const CustomTuckBoxesPage = lazyWithRetry(() => import('./pages/products/CustomTuckBoxesPage'))
const CottonPaperFoilPouchPage = lazyWithRetry(() => import('./pages/products/CottonPaperFoilPouchPage'))

// Solutions Pages - Persona Based SEO - Lazy loaded
const FoodCodingComplianceSolutionsPage = lazyWithRetry(() => import('./pages/solutions/FoodCodingCompliancePage'))
const PackagingLineAutomationSolutionsPage = lazyWithRetry(() => import('./pages/solutions/PackagingLineAutomationPage'))
const EcoPackagingCodingPage = lazyWithRetry(() => import('./pages/solutions/EcoPackagingCodingPage'))
const StartupFounderPage = lazyWithRetry(() => import('./pages/solutions/StartupFounderPage'))
const EcommerceBrandPage = lazyWithRetry(() => import('./pages/solutions/EcommerceBrandPage'))
const CorporateSustainabilityPage = lazyWithRetry(() => import('./pages/solutions/CorporateSustainabilityPage'))
const FoodManufacturerPage = lazyWithRetry(() => import('./pages/solutions/FoodManufacturerPage'))
const ProductDeveloperPage = lazyWithRetry(() => import('./pages/solutions/ProductDeveloperPage'))
const CoffeeRoasterPage = lazyWithRetry(() => import('./pages/solutions/CoffeeRoasterPage'))
const ArtisanProducerPage = lazyWithRetry(() => import('./pages/solutions/ArtisanProducerPage'))
const SnackBrandManagerPage = lazyWithRetry(() => import('./pages/solutions/SnackBrandManagerPage'))
const CitrusOilPackagingPage = lazyWithRetry(() => import('./pages/solutions/CitrusOilPackagingPage'))
const CatalogPage = lazyWithRetry(() => import('./pages/solutions/CatalogPage'))
const CustomBoxesCatalogPage = lazyWithRetry(() => import('./pages/solutions/CustomBoxesCatalogPage'))
const FlexiblePouchesCatalogPage = lazyWithRetry(() => import('./pages/solutions/FlexiblePouchesCatalogPage'))
const CosmeticsBottlesCatalogPage = lazyWithRetry(() => import('./pages/solutions/CosmeticsBottlesCatalogPage'))
const ShapeDetailPage = lazyWithRetry(() => import('./pages/solutions/ShapeDetailPage'))
const PackageEditorPage = lazyWithRetry(() => import('./pages/PackageEditorPage'))

// Topics Pages - AI Search Volume SEO - Lazy loaded
const AiPackagingResolutionPage = lazyWithRetry(() => import('./pages/topics/AiPackagingResolution'))
const AiPackagingBleedDimensionsPage = lazyWithRetry(() => import('./pages/topics/AiPackagingBleedDimensions'))
const AiPackagingSafeMarginsPage = lazyWithRetry(() => import('./pages/topics/AiPackagingSafeMargins'))
const AiPackagingLayeredAssetsPage = lazyWithRetry(() => import('./pages/topics/AiPackagingLayeredAssets'))
const AiPackagingBarcodesBottomFoldPage = lazyWithRetry(() => import('./pages/topics/AiPackagingBarcodesBottomFold'))

const MatchaSachetPage = lazyWithRetry(() => import('./pages/topics/MatchaSachet'))
const SnackFoodStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/SnackFoodStandUpPouch'))
const JellyBeverageStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/JellyBeverageStandUpPouch'))
const OatmealCerealStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/OatmealCerealStandUpPouch'))
const CosmeticCreamStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/CosmeticCreamStandUpPouch'))
const CosmeticSerumStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/CosmeticSerumStandUpPouch'))
const SnackStandUpPouchLargePage = lazyWithRetry(() => import('./pages/topics/SnackStandUpPouchLarge'))
const BeverageSoftStandUpPouchPage = lazyWithRetry(() => import('./pages/topics/BeverageSoftStandUpPouch'))
const KraftPaperShoppingBagPage = lazyWithRetry(() => import('./pages/topics/KraftPaperShoppingBag'))
const TeaStandUpZipperPouchPage = lazyWithRetry(() => import('./pages/topics/TeaStandUpZipperPouch'))
const PetTreatStandUpZipperPouchPage = lazyWithRetry(() => import('./pages/topics/PetTreatStandUpZipperPouch'))
const CondimentSachetThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/CondimentSachetThreeSideSeal'))
const MedicalTapeThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/MedicalTapeThreeSideSeal'))
const HouseholdJamThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/HouseholdJamThreeSideSeal'))
const CerealSachetThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/CerealSachetThreeSideSeal'))
const CosmeticSampleThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/CosmeticSampleThreeSideSeal'))
const DriedFruitHangingZipperPouchPage = lazyWithRetry(() => import('./pages/topics/DriedFruitHangingZipperPouch'))
const CosmeticCleanserThreeSideZipperPouchPage = lazyWithRetry(() => import('./pages/topics/CosmeticCleanserThreeSideZipperPouch'))
const SnackSachetThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/SnackSachetThreeSideSeal'))
const TeaSachetThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/TeaSachetThreeSideSeal'))
const CoffeeSachetThreeSideSealPage = lazyWithRetry(() => import('./pages/topics/CoffeeSachetThreeSideSeal'))
const DriedFruitFlatBottomPouchPage = lazyWithRetry(() => import('./pages/topics/DriedFruitFlatBottomPouch'))
const RiceFlatBottomBagPage = lazyWithRetry(() => import('./pages/topics/RiceFlatBottomBag'))
const BreadFlatBottomBagPage = lazyWithRetry(() => import('./pages/topics/BreadFlatBottomBag'))
const CoffeeBeansFlatBottomPouchPage = lazyWithRetry(() => import('./pages/topics/CoffeeBeansFlatBottomPouch'))
const NutsFlatBottomPouchPage = lazyWithRetry(() => import('./pages/topics/NutsFlatBottomPouch'))
const PetFoodFlatBottomBagPage = lazyWithRetry(() => import('./pages/topics/PetFoodFlatBottomBag'))
const PillowPackSnackBagPage = lazyWithRetry(() => import('./pages/topics/PillowPackSnackBag'))
const HouseholdBackSealBagPage = lazyWithRetry(() => import('./pages/topics/HouseholdBackSealBag'))
const BeefJerkyPillowPouchPage = lazyWithRetry(() => import('./pages/topics/BeefJerkyPillowPouch'))
const GrainsBackSealPouchPage = lazyWithRetry(() => import('./pages/topics/GrainsBackSealPouch'))

const CacaoStandUpPage = lazyWithRetry(() => import('./pages/topics/CacaoStandUp'))
const SpicesMoistureProofPage = lazyWithRetry(() => import('./pages/topics/SpicesMoistureProof'))
const PremiumTeaPage = lazyWithRetry(() => import('./pages/topics/PremiumTea'))
const CocktailSpoutPage = lazyWithRetry(() => import('./pages/topics/CocktailSpout'))
const CandyUvPage = lazyWithRetry(() => import('./pages/topics/CandyUv'))
const CrispsShapedPage = lazyWithRetry(() => import('./pages/topics/CrispsShaped'))
const DriedFruitsTearNotchPage = lazyWithRetry(() => import('./pages/topics/DriedFruitsTearNotch'))
const CheesePocketZipperPage = lazyWithRetry(() => import('./pages/topics/CheesePocketZipper'))
const EuroHoleHangPage = lazyWithRetry(() => import('./pages/topics/EuroHoleHang'))
const PetFoodQuadSealPage = lazyWithRetry(() => import('./pages/topics/PetFoodQuadSeal'))
const PharmaVelcroPage = lazyWithRetry(() => import('./pages/topics/PharmaVelcro'))
const DetergentSpoutPage = lazyWithRetry(() => import('./pages/topics/DetergentSpout'))
const ElectronicsAntiStaticPage = lazyWithRetry(() => import('./pages/topics/ElectronicsAntiStatic'))
const ApparelZipperPage = lazyWithRetry(() => import('./pages/topics/ApparelZipper'))
const HologramHotStampingPage = lazyWithRetry(() => import('./pages/topics/HologramHotStamping'))
const GranolaSoftTouchPage = lazyWithRetry(() => import('./pages/topics/GranolaSoftTouch'))
const CollagenHighBarrierPage = lazyWithRetry(() => import('./pages/topics/CollagenHighBarrier'))
const PlaRicePage = lazyWithRetry(() => import('./pages/topics/PlaRice'))
const RicePaperArtisanalPage = lazyWithRetry(() => import('./pages/topics/RicePaperArtisanal'))
const DdpPackagingPage = lazyWithRetry(() => import('./pages/topics/DdpPackaging'))
const FastAirFreightPage = lazyWithRetry(() => import('./pages/topics/FastAirFreight'))
const FdaBrcCertifiedPage = lazyWithRetry(() => import('./pages/topics/FdaBrcCertified'))
const IsoSustainablePage = lazyWithRetry(() => import('./pages/topics/IsoSustainable'))
const UrgentOrdersPage = lazyWithRetry(() => import('./pages/topics/UrgentOrders'))
const FrozenVacuumPage = lazyWithRetry(() => import('./pages/topics/FrozenVacuum'))
const EvohRetortPage = lazyWithRetry(() => import('./pages/topics/EvohRetort'))
const BeefJerkyBarrierPage = lazyWithRetry(() => import('./pages/topics/BeefJerkyBarrier'))
const ValveCoffeeBagsPage = lazyWithRetry(() => import('./pages/topics/ValveCoffeeBags'))
const HomeVsIndustrialCompostablePage = lazyWithRetry(() => import('./pages/topics/HomeVsIndustrialCompostable'))
const EcoFriendlyFoodPackagingPage = lazyWithRetry(() => import('./pages/topics/EcoFriendlyFoodPackagingPage'))
const RealWorldSustainabilityPage = lazyWithRetry(() => import('./pages/topics/RealWorldSustainabilityPage'))
const SustainablePackagingPillarPage = lazyWithRetry(() => import('./pages/topics/SustainablePackagingPillarPage'))
const RecyclablePackagingGuidePage = lazyWithRetry(() => import('./pages/topics/RecyclablePackagingGuidePage'))
const CompostablePackagingBlogPage = lazyWithRetry(() => import('./pages/topics/CompostablePackagingBlogPage'))
const CompostableCertificationFAQPage = lazyWithRetry(() => import('./pages/topics/CompostableCertificationFAQPage'))
const MonoMaterialSolutionPage = lazyWithRetry(() => import('./pages/topics/MonoMaterialSolutionPage'))
const PCRPackagingGuidePage = lazyWithRetry(() => import('./pages/topics/PCRPackagingGuidePage'))
const FoodPackagingSupplierServicePage = lazyWithRetry(() => import('./pages/topics/FoodPackagingSupplierServicePage'))
const FoodPackagingSupplierPage = lazyWithRetry(() => import('./pages/topics/FoodPackagingSupplierPage'))
const EcoFriendlySupplierServicePage = lazyWithRetry(() => import('./pages/topics/EcoFriendlySupplierServicePage'))
const CustomBrandPackagingPage = lazyWithRetry(() => import('./pages/topics/CustomBrandPackagingPage'))
const ReduceWasteGuidePage = lazyWithRetry(() => import('./pages/topics/ReduceWasteGuidePage'))
const CustomBrandPackagingServicePage = lazyWithRetry(() => import('./pages/topics/CustomBrandPackagingServicePage'))
const EcoFriendlySupplierVerificationPage = lazyWithRetry(() => import('./pages/topics/EcoFriendlySupplierVerificationPage'))
const ReducePackagingWasteGuidePage = lazyWithRetry(() => import('./pages/topics/ReducePackagingWasteGuidePage'))
const DTCSustainablePackagingPage = lazyWithRetry(() => import('./pages/topics/DTCSustainablePackagingPage'))
const GreenCoffeeMaterialsPage = lazyWithRetry(() => import('./pages/topics/GreenCoffeeMaterialsPage'))
const DigitalPrintingEcoPackagingPage = lazyWithRetry(() => import('./pages/topics/DigitalPrintingEcoPackagingPage'))
const RecyclableSnackPackagingPage = lazyWithRetry(() => import('./pages/topics/RecyclableSnackPackagingPage'))
const CustomPrintedSustainablePouchesPage = lazyWithRetry(() => import('./pages/topics/CustomPrintedSustainablePouchesPage'))
const EcoPackagingRegulationsPage = lazyWithRetry(() => import('./pages/topics/EcoPackagingRegulationsPage'))
const CustomCompostablePouchSuppliersPage = lazyWithRetry(() => import('./pages/topics/CustomCompostablePouchSuppliersPage'))
const LowMOQStartupPackagingPage = lazyWithRetry(() => import('./pages/topics/LowMOQStartupPackagingPage'))
const CompostableBabyFoodBagsPage = lazyWithRetry(() => import('./pages/topics/CompostableBabyFoodBagsPage'))
const CompostableHumidityControlPage = lazyWithRetry(() => import('./pages/topics/CompostableHumidityControlPage'))
const CompostableZipperDurabilityPage = lazyWithRetry(() => import('./pages/topics/CompostableZipperDurabilityPage'))
const CompostableSpoutedPouchesPage = lazyWithRetry(() => import('./pages/topics/CompostableSpoutedPouchesPage'))
const CustomVsStandardPackagingPage = lazyWithRetry(() => import('./pages/topics/CustomVsStandardPackagingPage'))
const PFASFreePackagingPage = lazyWithRetry(() => import('./pages/topics/PFASFreePackagingPage'))
const HomeCompostableCoffeeBagsPage = lazyWithRetry(() => import('./pages/topics/HomeCompostableCoffeeBagsPage'))
const MonoPEPouchesPage = lazyWithRetry(() => import('./pages/topics/MonoPEPouchesPage'))
const ChildResistantMylarBagsPage = lazyWithRetry(() => import('./pages/topics/ChildResistantMylarBagsPage'))
const RecycledOceanPlasticPackagingPage = lazyWithRetry(() => import('./pages/topics/RecycledOceanPlasticPackagingPage'))
const MinimalistD2CPackagingPage = lazyWithRetry(() => import('./pages/topics/MinimalistD2CPackagingPage'))

// Compostable Education Pages - Lazy loaded
const BiodegradableVsCompostablePage = lazyWithRetry(() => import('./pages/composting/BiodegradableVsCompostablePage'))
const CompostServiceFinderPage = lazyWithRetry(() => import('./pages/composting/CompostServiceFinderPage'))
const CompostingBenefitsPage = lazyWithRetry(() => import('./pages/composting/CompostingBenefitsPage'))
const CommercialCompostingPage = lazyWithRetry(() => import('./pages/composting/CommercialCompostingPage'))
const HomeVsIndustrialCompostPage = lazyWithRetry(() => import('./pages/composting/HomeVsIndustrialCompostPage'))
const PlasticFreePage = lazyWithRetry(() => import('./pages/composting/PlasticFreePage'))
const NaturalCelluloseFiberPage = lazyWithRetry(() => import('./pages/composting/NaturalCelluloseFiberPage'))
const OrganicComplianceSupportPage = lazyWithRetry(() => import('./pages/composting/OrganicComplianceSupportPage'))

// Free Service Pages - Lazy loaded
const FreePackagingDesignPage = lazyWithRetry(() => import('./pages/free-service/FreePackagingDesignPage'))
const FreeWebsiteUpgradePage = lazyWithRetry(() => import('./pages/free-service/FreeWebsiteUpgradePage'))

const FreeMockupPage = lazyWithRetry(() => import('./pages/free-service/FreeMockupPage'))
const FreeCustomerCenterPage = lazyWithRetry(() => import('./pages/free-service/FreeCustomerCenterPage'))
const MaxiFoodsDemoPage = lazyWithRetry(() => import('./pages/free-service/MaxiFoodsDemoPage'))
const AchieveChipsDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveChipsDemoPage'))
const PencilDemoPage = lazyWithRetry(() => import('./pages/free-service/PencilDemoPage'))
const AchieveChocolateDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveChocolateDemoPage'))
const AchieveSupplementDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveSupplementDemoPage'))
const AchieveTeaDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveTeaDemoPage'))
const AchieveEnergyDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveEnergyDemoPage'))
const AchieveHoneyDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveHoneyDemoPage'))
const AchieveSuperfoodDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveSuperfoodDemoPage'))
const AchieveCleaningDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveCleaningDemoPage'))
const AchieveSpreadsDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveSpreadsDemoPage'))
const AchieveMuesliDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveMuesliDemoPage'))
const AchieveBathDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveBathDemoPage'))
const AchievePetDemoPage = lazyWithRetry(() => import('./pages/free-service/AchievePetDemoPage'))
const AchieveSkinDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveSkinDemoPage'))
const AchieveBabyDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveBabyDemoPage'))
const AchievePouchEcoDemoPage = lazyWithRetry(() => import('./pages/free-service/AchievePouchEcoDemoPage'))

// Pouch.eco Design Demo - Denterity-inspired
const PouchEcoDemo = lazyWithRetry(() => import('./pages/PouchEcoDemo'))
const TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail7 = lazyWithRetry(() => import('./pages/topics/TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail7'))
const SpoutedFoilPouchThumbnail2 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail2'))
const SpoutedFoilPouchThumbnail13 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail13'))
const FlatBottomPouchTinTieThumbnail9 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail9'))
const TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail3 = lazyWithRetry(() => import('./pages/topics/TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail3'))
const SpoutedFoilPouchThumbnail29 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail29'))
const TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail6 = lazyWithRetry(() => import('./pages/topics/TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail6'))
const FlatBottomZipperPouchThumbnail6 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail6'))
const FlatBottomZipperPouchThumbnail14 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail14'))
const FlatBottomPouchTinTieThumbnail5 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail5'))
const ClearMatteZipperStandUpPouchThumbnail11 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail11'))
const SpoutedFoilPouchThumbnail25 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail25'))
const TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail5 = lazyWithRetry(() => import('./pages/topics/TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail5'))
const FlatBottomZipperPouchThumbnail1 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail1'))
const TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail4 = lazyWithRetry(() => import('./pages/topics/TexturedBurlapCorkPatternCoffeePouchWithValveThumbnail4'))
const RetroHorizontalKraftFoodHandleBagThumbnail8 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail8'))
const BottleShapeSachetBagThumbnail11 = lazyWithRetry(() => import('./pages/topics/BottleShapeSachetBagThumbnail11'))
const RetroHorizontalKraftFoodHandleBagThumbnail10 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail10'))
const SpoutedFoilPouchThumbnail14 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail14'))
const ClearMatteZipperStandUpPouchThumbnail20 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail20'))
const FlatBottomZipperPouchThumbnail2 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail2'))
const SpoutedFoilPouchThumbnail5 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail5'))
const ClearMatteZipperStandUpPouchThumbnail4 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail4'))
const RetroHorizontalKraftFoodHandleBagThumbnail4 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail4'))
const ClearMatteZipperStandUpPouchThumbnail16 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail16'))
const SpoutedFoilPouchThumbnail22 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail22'))
const CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail8 = lazyWithRetry(() => import('./pages/topics/CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail8'))
const FlatBottomPouchTinTieThumbnail2 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail2'))
const CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail9 = lazyWithRetry(() => import('./pages/topics/CoffeeTeaOneSidedZipperFlatBottomPouchWithHangingStripThumbnail9'))
const FlatBottomZipperPouchThumbnail13 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail13'))
const SpoutedFoilPouchThumbnail9 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail9'))
const ClearMatteZipperStandUpPouchThumbnail8 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail8'))
const ClearMatteZipperStandUpPouchThumbnail9 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail9'))
const UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail9 = lazyWithRetry(() => import('./pages/topics/UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail9'))
const SpoutedFoilPouchThumbnail8 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail8'))
const FlatBottomZipperPouchThumbnail12 = lazyWithRetry(() => import('./pages/topics/FlatBottomZipperPouchThumbnail12'))
const FlatBottomPouchWithCardInsertThumbnail1 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchWithCardInsertThumbnail1'))
const SpoutedFoilPouchThumbnail19 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail19'))
const FlatBottomPouchTinTieThumbnail1 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail1'))
const FlatBottomPouchTinTieThumbnail3 = lazyWithRetry(() => import('./pages/topics/FlatBottomPouchTinTieThumbnail3'))
const ClearMatteZipperStandUpPouchThumbnail17 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail17'))
const SpoutedFoilPouchThumbnail23 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail23'))
const RetroHorizontalKraftFoodHandleBagThumbnail5 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail5'))
const UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail8 = lazyWithRetry(() => import('./pages/topics/UnprintedWhiteKraftCompostableAndBiodegrableZipperStandUpPouchThumbnail8'))
const ClearMatteZipperStandUpPouchThumbnail5 = lazyWithRetry(() => import('./pages/topics/ClearMatteZipperStandUpPouchThumbnail5'))
const SpoutedFoilPouchThumbnail4 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail4'))
const RetroHorizontalKraftFoodHandleBagThumbnail11 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail11'))
const SpoutedFoilPouchThumbnail15 = lazyWithRetry(() => import('./pages/topics/SpoutedFoilPouchThumbnail15'))
const BottleShapeSachetBagThumbnail10 = lazyWithRetry(() => import('./pages/topics/BottleShapeSachetBagThumbnail10'))
const RetroHorizontalKraftFoodHandleBagThumbnail9 = lazyWithRetry(() => import('./pages/topics/RetroHorizontalKraftFoodHandleBagThumbnail9'))
const PouchHomePage = lazyWithRetry(() => import('./pages/pouch/PouchHomePage'))
const PouchProductsPage = lazyWithRetry(() => import('./pages/pouch/PouchProductsPage'))
const PouchMaterialsPage = lazyWithRetry(() => import('./pages/pouch/PouchMaterialsPage'))
const PouchSolutionsPage = lazyWithRetry(() => import('./pages/pouch/PouchSolutionsPage'))
const PouchCitrusOilPackagingPage = lazyWithRetry(() => import('./pages/pouch/solutions/PouchCitrusOilPackagingPage'))
const PouchSizeGuidePage = lazyWithRetry(() => import('./pages/pouch/PouchSizeGuidePage'))
const PouchTestimonialsPage = lazyWithRetry(() => import('./pages/pouch/PouchTestimonialsPage'))
const PouchBlogPage = lazyWithRetry(() => import('./pages/pouch/PouchBlogPage'))
const PouchCertificationsPage = lazyWithRetry(() => import('./pages/pouch/PouchCertificationsPage'))
const PouchFactoryTourPage = lazyWithRetry(() => import('./pages/pouch/company/PouchFactoryTourPage'))
const PouchAboutPage = lazyWithRetry(() => import('./pages/pouch/company/PouchAboutPage'))
const PouchCustomBoxesPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchCustomBoxesPage'))
const PouchRecyclableMonoPEPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchRecyclableMonoPEPage'))
const PouchPlasticFreePage = lazyWithRetry(() => import('./pages/pouch/composting/PouchPlasticFreePage'))
const PouchCompostingBenefitsPage = lazyWithRetry(() => import('./pages/pouch/composting/PouchCompostingBenefitsPage'))
const PouchCompostingServicesPage = lazyWithRetry(() => import('./pages/pouch/composting/PouchCompostingServicesPage'))
const PouchCustomPrintedSamplePage = lazyWithRetry(() => import('./pages/pouch/PouchCustomPrintedSamplePage'))
const PouchUnprintedSamplesPage = lazyWithRetry(() => import('./pages/pouch/PouchUnprintedSamplesPage'))
const PackagingReport2026 = lazyWithRetry(() => import('./pages/pouch/reports/PackagingReport2026'))
const WorkshopRegisterPage = lazyWithRetry(() => import('./pages/pouch/WorkshopRegisterPage'))
// Blog Article Pages
const USACompostableGuide = lazyWithRetry(() => import('./pages/pouch/blog/USACompostableGuide'))
const CoffeePackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/CoffeePackagingGuide'))
const PouchHumidityControlGuide = lazyWithRetry(() => import('./pages/pouch/blog/CompostableHumidityControlGuide'))
const USACoffeePackaging = lazyWithRetry(() => import('./pages/pouch/blog/USACoffeePackaging'))
const CompostableStandUpPouchesGuide = lazyWithRetry(() => import('./pages/pouch/blog/CompostableStandUpPouchesGuide'))
const LowMOQPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/LowMOQPackagingGuide'))
const USASnacksPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/USASnacksPackagingGuide'))
const USALabelingGuide = lazyWithRetry(() => import('./pages/pouch/blog/USALabelingGuide'))
const IndustrialCompostableGuide = lazyWithRetry(() => import('./pages/pouch/blog/IndustrialCompostableGuide'))
const BPICertifiedGuide = lazyWithRetry(() => import('./pages/pouch/blog/BPICertifiedGuide'))
const CoffeeDegassingValveGuide = lazyWithRetry(() => import('./pages/pouch/blog/CoffeeDegassingValveGuide'))
const HomeCompostableGuide = lazyWithRetry(() => import('./pages/pouch/blog/HomeCompostableGuide'))
const OrganicComplianceSupportGuide = lazyWithRetry(() => import('./pages/pouch/blog/OrganicComplianceSupportGuide'))
const PouchStampFoilRecyclabilityPage = lazyWithRetry(() => import('./pages/pouch/blog/PouchStampFoilRecyclabilityPage'))
// Material Pages
const PouchCelloKraftPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchCelloKraftPage'))
const PouchReclosureOptionsPage = lazyWithRetry(() => import('./pages/pouch/PouchReclosureOptionsPage'))
const PouchSurfaceFinishPage = lazyWithRetry(() => import('./pages/pouch/PouchSurfaceFinishPage'))
const SurfaceAndReclosureOptionsPage = lazyWithRetry(() => import('./pages/pouch/options/SurfaceAndReclosureOptionsPage'))
const PouchKraftDuplexPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchKraftDuplexPage'))
const PouchMaterialDataSheetPage = lazyWithRetry(() => import('./pages/pouch/MaterialDataSheetPage'))
const AchieveMaterialDataSheetPage = lazyWithRetry(() => import('./pages/materials/MaterialDataSheetPage'))
const PouchBarrierOverviewPage = lazyWithRetry(() => import('./pages/pouch/PouchBarrierOverviewPage'))
const PouchMaterialBarrierPropertiesPage = lazyWithRetry(() => import('./pages/pouch/PouchMaterialBarrierPropertiesPage'))
const PouchDigitalPrintingPage = lazyWithRetry(() => import('./pages/pouch/PouchDigitalPrintingPage'))
const PouchMaterialCatalogPage = lazyWithRetry(() => import('./pages/pouch/PouchMaterialCatalogPage'))
const PouchSEOPage = lazyWithRetry(() => import('./pages/pouch/PouchSEOPage'))
const PouchColorAccuracyPage = lazyWithRetry(() => import('./pages/pouch/support/PouchColorAccuracyPage'))
// Industry Pages
const PouchCoffeeTeaPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchCoffeeTeaPage'))
const PouchPetFoodPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchPetFoodPage'))
const PouchSnacksPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchSnacksPage'))
const PouchSupplementsPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchSupplementsPage'))
const PouchTechSpecsPage = lazyWithRetry(() => import('./pages/pouch/PouchTechSpecsPage'))

// New Pouch SEO Pages
const PouchStandUpPouchesPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchStandUpPouchesPage'))
const PouchFlatBottomBagsPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchFlatBottomBagsPage'))
const PouchSideGussetBagsPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchSideGussetBagsPage'))
const PouchCompostablePage = lazyWithRetry(() => import('./pages/pouch/materials/PouchCompostablePage'))
const PouchBioPEPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchBioPEPage'))
const PouchPCRPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchPCRPage'))
const PouchHomeCompostablePage = lazyWithRetry(() => import('./pages/pouch/materials/PouchHomeCompostablePage'))
const PouchIndustrialCompostablePage = lazyWithRetry(() => import('./pages/pouch/materials/PouchIndustrialCompostablePage'))
const PouchKraftHighBarrierPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchKraftHighBarrierPage'))
const PouchRecyclablePage = lazyWithRetry(() => import('./pages/pouch/materials/PouchRecyclablePage'))
const PouchBabyFoodPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchBabyFoodPage'))
const PouchSpoutPouchesPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchSpoutPouchesPage'))
const PouchFlatPouchesPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchFlatPouchesPage'))
const PouchVacuumPouchesPage = lazyWithRetry(() => import('./pages/pouch/packaging/PouchVacuumPouchesPage'))
const PouchFrozenFoodPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchFrozenFoodPage'))
const PouchSaucesPage = lazyWithRetry(() => import('./pages/pouch/industry/PouchSaucesPage'))
const PouchPlasticFreeKraftPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchPlasticFreeKraftPage'))
const PouchCombustionSafetyTestPage = lazyWithRetry(() => import('./pages/pouch/materials/PouchCombustionSafetyTestPage'))

// Legacy Pouch SEO Pages
const DrinkLiquidPouchPage = lazyWithRetry(() => import('./pages/pouch/legacy/DrinkLiquidPouchPage'))
const LowMOQStandUpPouchPage = lazyWithRetry(() => import('./pages/pouch/legacy/LowMOQStandUpPouchPage'))
const BioBasedSpoutPouchesPage = lazyWithRetry(() => import('./pages/pouch/legacy/BioBasedSpoutPouchesPage'))
const TrappingKeylinePage = lazyWithRetry(() => import('./pages/pouch/legacy/TrappingKeylinePage'))
const RefillPouchesPage = lazyWithRetry(() => import('./pages/pouch/legacy/RefillPouchesPage'))
const KSealHeavyContentPage = lazyWithRetry(() => import('./pages/pouch/legacy/KSealHeavyContentPage'))
const TechnicalDataSheetCategoryPage = lazyWithRetry(() => import('./pages/pouch/legacy/TechnicalDataSheetCategoryPage'))

const FreeServicesHubPage = lazyWithRetry(() => import('./pages/free-service/FreeServicesHubPage'))
const EcoFriendlyFoodPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/EcoFriendlyFoodPackagingGuide'))
const DTCSustainablePackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/DTCSustainablePackagingGuide'))
const RecyclableSnackPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/RecyclableSnackPackagingGuide'))
const CompostableBabyFoodPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/CompostableBabyFoodPackagingGuide'))
const CustomCompostablePouchSuppliersGuide = lazyWithRetry(() => import('./pages/pouch/blog/CustomCompostablePouchSuppliersGuide'))
const CustomPrintedMaterialsGuide = lazyWithRetry(() => import('./pages/pouch/blog/CustomPrintedMaterialsGuide'))
const DigitalPrintingEcoPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/DigitalPrintingEcoPackagingGuide'))
const EcoPackagingRegulationsGuide = lazyWithRetry(() => import('./pages/pouch/blog/EcoPackagingRegulationsGuide'))
const GreenCoffeeMaterialsGuide = lazyWithRetry(() => import('./pages/pouch/blog/GreenCoffeeMaterialsGuide'))
const LowMOQStartupPackagingGuide = lazyWithRetry(() => import('./pages/pouch/blog/LowMOQStartupPackagingGuide'))

const FreeServicesPage = lazyWithRetry(() => import('./pages/free-service/FreeServicesPage'))
const PouchBlogArticlePage = lazyWithRetry(() => import('./pages/pouch/blog/PouchBlogArticlePage'))
const Product3DShowcasePage = lazyWithRetry(() => import('./pages/Product3DShowcasePage'))
const PouchEcoGPTKPage = lazyWithRetry(() => import('./pages/pouch/PouchEcoGPTKPage'))
const PouchDielineFinderPage = lazyWithRetry(() => import('./pages/PouchDielineFinderPage'))
const PouchDielineCreatorPage = lazyWithRetry(() => import('./pages/PouchDielineCreatorPage'))

// Bio-PE Pages - Lazy loaded
const WhatIsBioPEPage = lazyWithRetry(() => import('./pages/biope/WhatIsBioPEPage'))
const BioPEVsCompostablePage = lazyWithRetry(() => import('./pages/biope/BioPEVsCompostablePage'))
const BioPEEPRPage = lazyWithRetry(() => import('./pages/biope/BioPEEPRPage'))
const InsideImGreenBioPEPage = lazyWithRetry(() => import('./pages/biope/InsideImGreenBioPEPage'))

// PCR SEO Pages - Lazy loaded
const PCRGuidePage = lazyWithRetry(() => import('./pages/pcr/PCRGuidePage'))
const PCR7ChecklistPage = lazyWithRetry(() => import('./pages/pcr/PCR7ChecklistPage'))
const PCRRealisticPage = lazyWithRetry(() => import('./pages/pcr/PCRRealisticPage'))
const RecyclableVsPCRPage = lazyWithRetry(() => import('./pages/pcr/RecyclableVsPCRPage'))

// Recyclable SEO Pages - Lazy loaded
const WhatIsRecyclablePage = lazyWithRetry(() => import('./pages/recyclable/WhatIsRecyclablePage'))
const RecyclableRoadmapPage = lazyWithRetry(() => import('./pages/recyclable/RecyclableRoadmapPage'))
const MonoMaterialFoundationPage = lazyWithRetry(() => import('./pages/recyclable/MonoMaterialFoundationPage'))

// 404 Page - Lazy loaded
const TopicDirectoryPage = lazyWithRetry(() => import('./pages/TopicDirectoryPage'))
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'))
const ImageGalleryPage = lazyWithRetry(() => import('./pages/knowledge/ImageGalleryPage'))

// Reviews Page - Lazy loaded
const ReviewsPage = lazyWithRetry(() => import('./pages/ReviewsPage'))

// EP Shop Pages - Lazy loaded
const PouchShopPage = lazyWithRetry(() => import('./pages/pouch/PouchShopPage'))
const PouchProductDetailPage = lazyWithRetry(() => import('./pages/pouch/PouchProductDetailPage'))

// Artwork Batch Pages - Lazy loaded
const ArtworkBatchesPage = lazyWithRetry(() => import('./pages/ArtworkBatchesPage'))
const ArtworkReviewPage = lazyWithRetry(() => import('./pages/ArtworkReviewPage'))
const RyanHologramPage = lazyWithRetry(() => import('./pages/RyanHologramPage'))

// Quotation Pages - Lazy loaded
const QuotationBatchesPage = lazyWithRetry(() => import('./pages/QuotationBatchesPage'))
const QuotationViewPage = lazyWithRetry(() => import('./pages/QuotationViewPage'))
const CoffeePouchQuotePage = lazyWithRetry(() => import('./pages/quotes/CoffeePouchQuotePage'))
const FlatBottomQuotePage = lazyWithRetry(() => import('./pages/quotes/FlatBottomQuotePage'))
const StandUpPouchQuotePage = lazyWithRetry(() => import('./pages/quotes/StandUpPouchQuotePage'))
const SpoutedPouchQuotePage = lazyWithRetry(() => import('./pages/quotes/SpoutedPouchQuotePage'))
const ThreeSideSealQuotePage = lazyWithRetry(() => import('./pages/quotes/ThreeSideSealQuotePage'))
const CertificateDownloadPage = lazyWithRetry(() => import('./pages/quotes/CertificateDownloadPage'))
const RollstockQuotePage = lazyWithRetry(() => import('./pages/quotes/RollstockQuotePage'))

// Prospect Finder Pages - Lazy loaded
const ProspectFinderPage = lazyWithRetry(() => import('./pages/admin/prospects/ProspectFinderPage'))
const ProspectListsPage = lazyWithRetry(() => import('./pages/admin/prospects/ProspectListsPage'))

// Shipment Document Hub Pages - Lazy loaded
const ShipmentHubPage = lazyWithRetry(() => import('./pages/admin/ShipmentHubPage'))
const ShipmentDetailPage = lazyWithRetry(() => import('./pages/admin/ShipmentDetailPage'))
const ShipmentTrackingPage = lazyWithRetry(() => import('./pages/ShipmentTrackingPage'))
const SharedQuotePage = lazyWithRetry(() => import('./pages/SharedQuotePage'))
const SharedPackingPage = lazyWithRetry(() => import('./pages/SharedPackingPage'))
const DocumentTemplatesPage = lazyWithRetry(() => import('./pages/admin/DocumentTemplatesPage'))
const SharedStudioPage = lazyWithRetry(() => import('./pages/SharedStudioPage'))
const SustainableFlexiblePackagingForPowdersPage = lazyWithRetry(() => import('./pages/seo/SustainableFlexiblePackagingForPowdersPage'));
const CustomPrintedKraftPaperSachetsForHerbsPage = lazyWithRetry(() => import('./pages/seo/CustomPrintedKraftPaperSachetsForHerbsPage'));
const FreezerSafeVacuumPackagingPage = lazyWithRetry(() => import('./pages/seo/FreezerSafeVacuumPackagingPage'));
const SustainablePouchSizesForCoffeeBeansPage = lazyWithRetry(() => import('./pages/seo/SustainablePouchSizesForCoffeeBeansPage'));
const DigitalPrintFlexiblePackagingForPharmaceuticalsPage = lazyWithRetry(() => import('./pages/seo/DigitalPrintFlexiblePackagingForPharmaceuticalsPage'));
const CompostableBarrierPackagingForNutsPage = lazyWithRetry(() => import('./pages/seo/CompostableBarrierPackagingForNutsPage'));
const CustomShapedSachetsForSpicesPage = lazyWithRetry(() => import('./pages/seo/CustomShapedSachetsForSpicesPage'));
const OrganicComplianceSupportGuidePage = lazyWithRetry(() => import('./pages/seo/OrganicComplianceSupportGuidePage'));
const FlexibleSachetSourcingForPowdersPage = lazyWithRetry(() => import('./pages/seo/FlexibleSachetSourcingForPowdersPage'));
const DigitalPrintedStandUpPouchesForPetFoodPage = lazyWithRetry(() => import('./pages/seo/DigitalPrintedStandUpPouchesForPetFoodPage'));
const EcoFriendlyDupontPaperBagsPage = lazyWithRetry(() => import('./pages/seo/EcoFriendlyDupontPaperBagsPage'));
const FlatBottomPouchPeEvohPe140MicronsPage = lazyWithRetry(() => import('./pages/seo/FlatBottomPouchPeEvohPe140MicronsPage'));
const DigitalPrintedBarrierPouchesSmallBatchPage = lazyWithRetry(() => import('./pages/seo/DigitalPrintedBarrierPouchesSmallBatchPage'));
const SmallSachetSilkPage = lazyWithRetry(() => import('./pages/seo/SmallSachetSilkPage'));
const MiddleSealGussetBagWhiteKraftPaperPlaAluminizedPage = lazyWithRetry(() => import('./pages/seo/MiddleSealGussetBagWhiteKraftPaperPlaAluminizedPage'));
const Pouch3dStudioPromo = lazyWithRetry(() => import('./pages/topics/Pouch3dStudioPromo'));
const FeaturePouchShapes = lazyWithRetry(() => import('./pages/topics/FeaturePouchShapes'));
const PouchFbHero = lazyWithRetry(() => import('./pages/topics/PouchFbHero'));
const AAchievepackCoffeeBagProduct2479917 = lazyWithRetry(() => import('./pages/topics/AAchievepackCoffeeBagProduct2479917'));
const ARetailCompliancePackagingPhoto5269551 = lazyWithRetry(() => import('./pages/topics/ARetailCompliancePackagingPhoto5269551'));
const ACalculatorCardboardBox8054435 = lazyWithRetry(() => import('./pages/topics/ACalculatorCardboardBox8054435'));
const ACalculatorFlexiblePouch8495656 = lazyWithRetry(() => import('./pages/topics/ACalculatorFlexiblePouch8495656'));
const TeaPouch = lazyWithRetry(() => import('./pages/topics/TeaPouch'));
const SaucePouch = lazyWithRetry(() => import('./pages/topics/SaucePouch'));
const DecalPackaging = lazyWithRetry(() => import('./pages/topics/DecalPackaging'));
const SideGussetPouchEco = lazyWithRetry(() => import('./pages/topics/SideGussetPouchEco'));
const EcoStandUpPouch = lazyWithRetry(() => import('./pages/topics/EcoStandUpPouch'));
const PackBox = lazyWithRetry(() => import('./pages/topics/PackBox'));
const AAchievepackVacuumPouches8597303 = lazyWithRetry(() => import('./pages/topics/AAchievepackVacuumPouches8597303'));
const AAchievepackSidegussetBags7074883 = lazyWithRetry(() => import('./pages/topics/AAchievepackSidegussetBags7074883'));
const AStanduppouchesWarm2436938 = lazyWithRetry(() => import('./pages/topics/AStanduppouchesWarm2436938'));
const AAchievepackCustomBoxes6574270 = lazyWithRetry(() => import('./pages/topics/AAchievepackCustomBoxes6574270'));
const AAchievepackFlatPouches0260646 = lazyWithRetry(() => import('./pages/topics/AAchievepackFlatPouches0260646'));
const AAchievepackStandupPouches9884402 = lazyWithRetry(() => import('./pages/topics/AAchievepackStandupPouches9884402'));
const ACoffeePackagingV13532652 = lazyWithRetry(() => import('./pages/topics/ACoffeePackagingV13532652'));
const AAchievepackSpoutPouches1062736 = lazyWithRetry(() => import('./pages/topics/AAchievepackSpoutPouches1062736'));
const CompostableZipperDetail = lazyWithRetry(() => import('./pages/topics/CompostableZipperDetail'));
const ASnacksPackagingCardV26247579 = lazyWithRetry(() => import('./pages/topics/ASnacksPackagingCardV26247579'));
const DigitalPrintingEcoPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/DigitalPrintingEcoPackagingSeoInfographic'));
const RecycledOceanPlasticPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/RecycledOceanPlasticPackagingSeoInfographic'));
const CompostableCoffeeBagsSeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableCoffeeBagsSeoInfographic'));
const CompostableBabyFoodBagsSeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableBabyFoodBagsSeoInfographic'));
const RecyclableSnackPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/RecyclableSnackPackagingSeoInfographic'));
const PfasFreePackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/PfasFreePackagingSeoInfographic'));
const CustomVsStandardPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/CustomVsStandardPackagingSeoInfographic'));
const FastAirFreight = lazyWithRetry(() => import('./pages/topics/FastAirFreight'));
const MedicalTapeThreeSideSeal = lazyWithRetry(() => import('./pages/topics/MedicalTapeThreeSideSeal'));
const FrozenVacuum = lazyWithRetry(() => import('./pages/topics/FrozenVacuum'));
const ActiveModifiedAtmospherePackaging = lazyWithRetry(() => import('./pages/topics/ActiveModifiedAtmospherePackaging'));
const BeefJerkyPillowPouch = lazyWithRetry(() => import('./pages/topics/BeefJerkyPillowPouch'));
const PharmaVelcro = lazyWithRetry(() => import('./pages/topics/PharmaVelcro'));
const AiPackagingLayeredAssets = lazyWithRetry(() => import('./pages/topics/AiPackagingLayeredAssets'));
const BeverageSoftStandUpPouch = lazyWithRetry(() => import('./pages/topics/BeverageSoftStandUpPouch'));
const JellyBeverageStandUpPouch = lazyWithRetry(() => import('./pages/topics/JellyBeverageStandUpPouch'));
const AiPackagingSafeMargins = lazyWithRetry(() => import('./pages/topics/AiPackagingSafeMargins'));
const ValveCoffeeBags = lazyWithRetry(() => import('./pages/topics/ValveCoffeeBags'));
const DriedFruitFlatBottomPouch = lazyWithRetry(() => import('./pages/topics/DriedFruitFlatBottomPouch'));
const SensoryUnboxingExperience = lazyWithRetry(() => import('./pages/topics/SensoryUnboxingExperience'));
const MatchaSachet = lazyWithRetry(() => import('./pages/topics/MatchaSachet'));
const LiquidBarrierPackagingSpouts = lazyWithRetry(() => import('./pages/topics/LiquidBarrierPackagingSpouts'));
const RicePaperArtisanal = lazyWithRetry(() => import('./pages/topics/RicePaperArtisanal'));
const DriedFruitsTearNotch = lazyWithRetry(() => import('./pages/topics/DriedFruitsTearNotch'));
const SpicesMoistureProof = lazyWithRetry(() => import('./pages/topics/SpicesMoistureProof'));
const IsoSustainable = lazyWithRetry(() => import('./pages/topics/IsoSustainable'));
const UrgentOrders = lazyWithRetry(() => import('./pages/topics/UrgentOrders'));
const DriedFruitHangingZipperPouch = lazyWithRetry(() => import('./pages/topics/DriedFruitHangingZipperPouch'));
const CheesePocketZipper = lazyWithRetry(() => import('./pages/topics/CheesePocketZipper'));
const CocktailSpout = lazyWithRetry(() => import('./pages/topics/CocktailSpout'));
const EprTaxMinimizationStrategies = lazyWithRetry(() => import('./pages/topics/EprTaxMinimizationStrategies'));
const NutsFlatBottomPouch = lazyWithRetry(() => import('./pages/topics/NutsFlatBottomPouch'));
const CoffeeBeansFlatBottomPouch = lazyWithRetry(() => import('./pages/topics/CoffeeBeansFlatBottomPouch'));
const SnackStandUpPouchLarge = lazyWithRetry(() => import('./pages/topics/SnackStandUpPouchLarge'));
const ApparelZipper = lazyWithRetry(() => import('./pages/topics/ApparelZipper'));
const CandyUv = lazyWithRetry(() => import('./pages/topics/CandyUv'));
const HologramHotStamping = lazyWithRetry(() => import('./pages/topics/HologramHotStamping'));
const BeefJerkyBarrier = lazyWithRetry(() => import('./pages/topics/BeefJerkyBarrier'));
const PlantBasedBarrierCoatings = lazyWithRetry(() => import('./pages/topics/PlantBasedBarrierCoatings'));
const CerealSachetThreeSideSeal = lazyWithRetry(() => import('./pages/topics/CerealSachetThreeSideSeal'));
const OceanBoundPlasticPackaging = lazyWithRetry(() => import('./pages/topics/OceanBoundPlasticPackaging'));
const TeaSachetThreeSideSeal = lazyWithRetry(() => import('./pages/topics/TeaSachetThreeSideSeal'));
const GranolaSoftTouch = lazyWithRetry(() => import('./pages/topics/GranolaSoftTouch'));
const ElectronicsAntiStatic = lazyWithRetry(() => import('./pages/topics/ElectronicsAntiStatic'));
const DigitalProductPassportPackaging = lazyWithRetry(() => import('./pages/topics/DigitalProductPassportPackaging'));
const HouseholdJamThreeSideSeal = lazyWithRetry(() => import('./pages/topics/HouseholdJamThreeSideSeal'));
const AiPackagingBleedDimensions = lazyWithRetry(() => import('./pages/topics/AiPackagingBleedDimensions'));
const AiPackagingResolution = lazyWithRetry(() => import('./pages/topics/AiPackagingResolution'));
const PetFoodFlatBottomBag = lazyWithRetry(() => import('./pages/topics/PetFoodFlatBottomBag'));
const OatmealCerealStandUpPouch = lazyWithRetry(() => import('./pages/topics/OatmealCerealStandUpPouch'));
const PremiumTea = lazyWithRetry(() => import('./pages/topics/PremiumTea'));
const BreadFlatBottomBag = lazyWithRetry(() => import('./pages/topics/BreadFlatBottomBag'));
const TeaStandUpZipperPouch = lazyWithRetry(() => import('./pages/topics/TeaStandUpZipperPouch'));
const UltrasonicVsHeatSealing = lazyWithRetry(() => import('./pages/topics/UltrasonicVsHeatSealing'));
const TamperEvidentSealingStandards = lazyWithRetry(() => import('./pages/topics/TamperEvidentSealingStandards'));
const EvohRetort = lazyWithRetry(() => import('./pages/topics/EvohRetort'));
const RiceFlatBottomBag = lazyWithRetry(() => import('./pages/topics/RiceFlatBottomBag'));
const CoffeeSachetThreeSideSeal = lazyWithRetry(() => import('./pages/topics/CoffeeSachetThreeSideSeal'));
const HomeVsIndustrialCompostable = lazyWithRetry(() => import('./pages/topics/HomeVsIndustrialCompostable'));
const SnackSachetThreeSideSeal = lazyWithRetry(() => import('./pages/topics/SnackSachetThreeSideSeal'));
const SnackFoodStandUpPouch = lazyWithRetry(() => import('./pages/topics/SnackFoodStandUpPouch'));
const GrainsBackSealPouch = lazyWithRetry(() => import('./pages/topics/GrainsBackSealPouch'));
const HouseholdBackSealBag = lazyWithRetry(() => import('./pages/topics/HouseholdBackSealBag'));
const CacaoStandUp = lazyWithRetry(() => import('./pages/topics/CacaoStandUp'));
const PlaRice = lazyWithRetry(() => import('./pages/topics/PlaRice'));
const PillowPackSnackBag = lazyWithRetry(() => import('./pages/topics/PillowPackSnackBag'));
const CarbonFootprintTrackingPackaging = lazyWithRetry(() => import('./pages/topics/CarbonFootprintTrackingPackaging'));
const EuroHoleHang = lazyWithRetry(() => import('./pages/topics/EuroHoleHang'));
const FdaBrcCertified = lazyWithRetry(() => import('./pages/topics/FdaBrcCertified'));
const PetTreatStandUpZipperPouch = lazyWithRetry(() => import('./pages/topics/PetTreatStandUpZipperPouch'));
const PetFoodQuadSeal = lazyWithRetry(() => import('./pages/topics/PetFoodQuadSeal'));
const KraftPaperShoppingBag = lazyWithRetry(() => import('./pages/topics/KraftPaperShoppingBag'));
const CollagenHighBarrier = lazyWithRetry(() => import('./pages/topics/CollagenHighBarrier'));
const AiPackagingBarcodesBottomFold = lazyWithRetry(() => import('./pages/topics/AiPackagingBarcodesBottomFold'));
const EcoAudit = lazyWithRetry(() => import('./pages/topics/EcoAudit'))
const AEcoDigitalAdvantagePhoto6226161 = lazyWithRetry(() => import('./pages/topics/AEcoDigitalAdvantagePhoto6226161'))
const AEcommerceBrandVariation25348466 = lazyWithRetry(() => import('./pages/topics/AEcommerceBrandVariation25348466'))
const EcoPackagingRegulationsSeoInfographic = lazyWithRetry(() => import('./pages/topics/EcoPackagingRegulationsSeoInfographic'))
const EcommerceBrandSeoInfographic = lazyWithRetry(() => import('./pages/topics/EcommerceBrandSeoInfographic'))
const CompostableZipperDurabilitySeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableZipperDurabilitySeoInfographic'))
const CompostableStandUpPouchesSeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableStandUpPouchesSeoInfographic'))
const EcoFriendlyFoodPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/EcoFriendlyFoodPackagingSeoInfographic'))
const CompostableHumidityControlSeoInfographic = lazyWithRetry(() => import('./pages/topics/CompostableHumidityControlSeoInfographic'))
const BiopePetKraftQuadlexAluminum = lazyWithRetry(() => import('./pages/topics/BiopePetKraftQuadlexAluminum'))
const CompostableRollstockStructure = lazyWithRetry(() => import('./pages/topics/CompostableRollstockStructure'))
const BiopeKraftDuplexLow = lazyWithRetry(() => import('./pages/topics/BiopeKraftDuplexLow'))
const BiopePpKraftTriplexClear = lazyWithRetry(() => import('./pages/topics/BiopePpKraftTriplexClear'))
const BiopePpKraftQuadlexAluminum = lazyWithRetry(() => import('./pages/topics/BiopePpKraftQuadlexAluminum'))
const SachetCostChinese = lazyWithRetry(() => import('./pages/topics/SachetCostChinese'))
const AStandupPouchesMain6878547 = lazyWithRetry(() => import('./pages/topics/AStandupPouchesMain6878547'))
const AGlossPouchCorrect5078762 = lazyWithRetry(() => import('./pages/topics/AGlossPouchCorrect5078762'))
const AMattePouchCorrect6361818 = lazyWithRetry(() => import('./pages/topics/AMattePouchCorrect6361818'))
const CustomSachetPackagingForSpicesInfographic2 = lazyWithRetry(() => import('./pages/topics/CustomSachetPackagingForSpicesInfographic2'))
const LowMinimumDigitalPouchPrintingInfographic4 = lazyWithRetry(() => import('./pages/topics/LowMinimumDigitalPouchPrintingInfographic4'))
const EcoFriendlyStandUpPouchDimensionsInfographic5 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyStandUpPouchDimensionsInfographic5'))
const EcoFriendlyDigitalPrintBagsInfographic5 = lazyWithRetry(() => import('./pages/topics/EcoFriendlyDigitalPrintBagsInfographic5'))
const DtcSustainablePackagingGuideInfographic3 = lazyWithRetry(() => import('./pages/topics/DtcSustainablePackagingGuideInfographic3'))
const DigitalPrintingEcoPackagingGuideInfographic5 = lazyWithRetry(() => import('./pages/topics/DigitalPrintingEcoPackagingGuideInfographic5'))
const KraftStandUpPouchesWithWindowInfographic6 = lazyWithRetry(() => import('./pages/topics/KraftStandUpPouchesWithWindowInfographic6'))
const FlexiblePackagingSachetSizesForPowdersInfographic4 = lazyWithRetry(() => import('./pages/topics/FlexiblePackagingSachetSizesForPowdersInfographic4'))
const CustomPrintedBarrierSachetsInfographic4 = lazyWithRetry(() => import('./pages/topics/CustomPrintedBarrierSachetsInfographic4'))
const CustomPrintedBarrierSachetsInfographic = lazyWithRetry(() => import('./pages/topics/CustomPrintedBarrierSachetsInfographic'))
const PrintedCompostableRetortBagsInfographic3 = lazyWithRetry(() => import('./pages/topics/PrintedCompostableRetortBagsInfographic3'))
const KraftPaperZipperDoypackInfographic6 = lazyWithRetry(() => import('./pages/topics/KraftPaperZipperDoypackInfographic6'))
const CustomShapeDieCutPouchInfographic3 = lazyWithRetry(() => import('./pages/topics/CustomShapeDieCutPouchInfographic3'))
const CompostableTeaPouchWithZipperInfographic4 = lazyWithRetry(() => import('./pages/topics/CompostableTeaPouchWithZipperInfographic4'))
const WholesalePricesForCompostablePouchesInfographic3 = lazyWithRetry(() => import('./pages/topics/WholesalePricesForCompostablePouchesInfographic3'))
const CustomPouchDielineTemplateInfographic = lazyWithRetry(() => import('./pages/topics/CustomPouchDielineTemplateInfographic'))
const CompostablePouchSizeChartForLiquidsInfographic5 = lazyWithRetry(() => import('./pages/topics/CompostablePouchSizeChartForLiquidsInfographic5'))
const SmallBatchCustomPouchPrintingInfographic = lazyWithRetry(() => import('./pages/topics/SmallBatchCustomPouchPrintingInfographic'))
const HomeCompostableGuideInfographic6 = lazyWithRetry(() => import('./pages/topics/HomeCompostableGuideInfographic6'))
const RecyclableStandUpPouchWithSpoutInfographic3 = lazyWithRetry(() => import('./pages/topics/RecyclableStandUpPouchWithSpoutInfographic3'))
const StandUpPouchDimensionsFor6OzInfographic2 = lazyWithRetry(() => import('./pages/topics/StandUpPouchDimensionsFor6OzInfographic2'))
const CompostableHumidityControlGuideInfographic6 = lazyWithRetry(() => import('./pages/topics/CompostableHumidityControlGuideInfographic6'))
const StandUpPouchDimensionsFor6OzInfographic3 = lazyWithRetry(() => import('./pages/topics/StandUpPouchDimensionsFor6OzInfographic3'))
const CompostableRetortPouchDimensionsInfographic = lazyWithRetry(() => import('./pages/topics/CompostableRetortPouchDimensionsInfographic'))
const RecyclableStandUpPouchWithSpoutInfographic2 = lazyWithRetry(() => import('./pages/topics/RecyclableStandUpPouchWithSpoutInfographic2'))
const KraftStandUpPouchesWithWindowInfographic = lazyWithRetry(() => import('./pages/topics/KraftStandUpPouchesWithWindowInfographic'))
const BiodegradableStandUpPouchSuppliersInfographic = lazyWithRetry(() => import('./pages/topics/BiodegradableStandUpPouchSuppliersInfographic'))
const CompostablePouchSizeChartForLiquidsInfographic4 = lazyWithRetry(() => import('./pages/topics/CompostablePouchSizeChartForLiquidsInfographic4'))
const WholesalePricesForCompostablePouchesInfographic2 = lazyWithRetry(() => import('./pages/topics/WholesalePricesForCompostablePouchesInfographic2'))
const CompostableTeaPouchWithZipperInfographic5 = lazyWithRetry(() => import('./pages/topics/CompostableTeaPouchWithZipperInfographic5'))
const CustomShapeDieCutPouchInfographic2 = lazyWithRetry(() => import('./pages/topics/CustomShapeDieCutPouchInfographic2'))
const StandUpPouchDimensionsChartForPowdersInfographic = lazyWithRetry(() => import('./pages/topics/StandUpPouchDimensionsChartForPowdersInfographic'))
const APlatePrintingCloseDetailB8707945 = lazyWithRetry(() => import('./pages/topics/APlatePrintingCloseDetailB8707945'));
const ADigitalPrintingCloseDetailB7761926 = lazyWithRetry(() => import('./pages/topics/ADigitalPrintingCloseDetailB7761926'));
const AStartupFounderVariation32900816 = lazyWithRetry(() => import('./pages/topics/AStartupFounderVariation32900816'));
const ARecyclableMonoPpCardV22805205 = lazyWithRetry(() => import('./pages/topics/ARecyclableMonoPpCardV22805205'));
const AArtisanProducerVariation35916328 = lazyWithRetry(() => import('./pages/topics/AArtisanProducerVariation35916328'));
const AReclosureOptionsCloseDetailB4502553 = lazyWithRetry(() => import('./pages/topics/AReclosureOptionsCloseDetailB4502553'));
const AArtisanProducerVariation15454378 = lazyWithRetry(() => import('./pages/topics/AArtisanProducerVariation15454378'));
const ASnacksV13103675 = lazyWithRetry(() => import('./pages/topics/ASnacksV13103675'));
const RyanPhoto = lazyWithRetry(() => import('./pages/topics/RyanPhoto'));
const OutreachHeader2026 = lazyWithRetry(() => import('./pages/topics/OutreachHeader2026'));
const RyanHeadshotV2 = lazyWithRetry(() => import('./pages/topics/RyanHeadshotV2'));
const ArtisanProducerSeoInfographic = lazyWithRetry(() => import('./pages/topics/ArtisanProducerSeoInfographic'));
const LowMoqStartupPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/LowMoqStartupPackagingSeoInfographic'));
const StartupFounderSeoInfographic = lazyWithRetry(() => import('./pages/topics/StartupFounderSeoInfographic'));
const SnackBrandManagerSeoInfographic = lazyWithRetry(() => import('./pages/topics/SnackBrandManagerSeoInfographic'));
const MinimalistD2cPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/MinimalistD2cPackagingSeoInfographic'));
const LowMoqPackagingSeoInfographic = lazyWithRetry(() => import('./pages/topics/LowMoqPackagingSeoInfographic'));
const ProductDeveloperSeoInfographic = lazyWithRetry(() => import('./pages/topics/ProductDeveloperSeoInfographic'));
const GreenCoffeeMaterialsSeoInfographic = lazyWithRetry(() => import('./pages/topics/GreenCoffeeMaterialsSeoInfographic'));
const FoodManufacturerSeoInfographic = lazyWithRetry(() => import('./pages/topics/FoodManufacturerSeoInfographic'));
const CorporateSustainabilitySeoInfographic = lazyWithRetry(() => import('./pages/topics/CorporateSustainabilitySeoInfographic'));
const TechSpecHeroB2b = lazyWithRetry(() => import('./pages/topics/TechSpecHeroB2b'));
const PcrPpDuplexNowindow = lazyWithRetry(() => import('./pages/topics/PcrPpDuplexNowindow'));
const MonoPpDuplexNowindow = lazyWithRetry(() => import('./pages/topics/MonoPpDuplexNowindow'));
const BiopePpTriplexMetalised = lazyWithRetry(() => import('./pages/topics/BiopePpTriplexMetalised'));
const MonoPeDuplexNowindow = lazyWithRetry(() => import('./pages/topics/MonoPeDuplexNowindow'));
const BiopePpDuplexClear = lazyWithRetry(() => import('./pages/topics/BiopePpDuplexClear'));
const PcrPetDuplexNowindow = lazyWithRetry(() => import('./pages/topics/PcrPetDuplexNowindow'));
const BiopePetDuplexClear = lazyWithRetry(() => import('./pages/topics/BiopePetDuplexClear'));
const BiopePetTriplexAluminum = lazyWithRetry(() => import('./pages/topics/BiopePetTriplexAluminum'));
const BiopePetDuplexNowindow = lazyWithRetry(() => import('./pages/topics/BiopePetDuplexNowindow'));
const BiopePetDuplexNowindow2 = lazyWithRetry(() => import('./pages/topics/BiopePetDuplexNowindow2'));
const BiopePpTriplexAluminum = lazyWithRetry(() => import('./pages/topics/BiopePpTriplexAluminum'));
const BiopePpDuplexNowindow = lazyWithRetry(() => import('./pages/topics/BiopePpDuplexNowindow'));

import AdminProtectedRoute from './components/admin/AdminProtectedRoute'
// Cookie Consent Component
import CookieConsent from './components/CookieConsent'

const root = createRoot(document.getElementById('root')!)

const initialLang = getLanguageFromPath()

const routerBasename = '/'
i18n.changeLanguage(initialLang)

if (getDomain() === 'pouch') {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <GeoBlocker>
            <BrowserRouter basename={routerBasename}>
              <StoreProvider>
                <CalendlyProvider>
                  <CustomQuoteProvider>
                    <CartSidebar />
                    <Suspense fallback={<PageLoader />}>
                      <MultilingualRoutes>
                        <Route path="/shop" element={<PouchShopPage />} />
                        <Route path="/shop/:productId" element={<PouchProductDetailPage />} />
                        <Route path="/pricing" element={<PouchEcoGPTKPage />} />
                  <Route path="/dieline-finder" element={<PouchDielineFinderPage />} />
                  <Route path="/dieline-creator" element={<PouchDielineCreatorPage />} />
                  <Route path="/solutions" element={<PouchSolutionsPage />} />
                  <Route path="/size-guide" element={<Navigate to="/knowledge/pouch-sizing" replace />} />
                  <Route path="/testimonials" element={<PouchTestimonialsPage />} />
                  <Route path="/blog" element={<PouchBlogPage />} />
                  <Route path="/blog/:slug" element={<PouchBlogArticlePage />} />
                  {/* Static B2C blog routes commented out to enable dynamic database rendering */}
                  <Route path="/blog/eu-ppwr-compliance-guide" element={<EUPPWRCompliancePage />} />
                  {/* <Route path="/blog/usa-compostable-packaging-guide" element={<USACompostableGuide />} /> */}
                  {/* <Route path="/blog/coffee-packaging-guide" element={<CoffeePackagingGuide />} /> */}
                  {/* <Route path="/blog/usa-coffee-packaging" element={<USACoffeePackaging />} /> */}
                  {/* <Route path="/blog/compostable-stand-up-pouches-guide" element={<CompostableStandUpPouchesGuide />} /> */}
                  {/* <Route path="/blog/low-moq-packaging-guide" element={<LowMOQPackagingGuide />} /> */}
                  {/* <Route path="/blog/usa-snacks-packaging-guide" element={<USASnacksPackagingGuide />} /> */}
                  {/* <Route path="/blog/usa-labeling-guide" element={<USALabelingGuide />} /> */}

                  {/* USA Hub Pages */}
                  <Route path="/usa/coffee-packaging" element={<PouchUSACoffeePage />} />
                  <Route path="/usa/compostable-packaging" element={<PouchUSACompostableHubPage />} />
                  <Route path="/usa/labeling-guide" element={<PouchUSALabelingGuidePage />} />
                  <Route path="/usa/snacks-packaging" element={<PouchUSASnacksPage />} />

                  {/* Knowledge Pages */}
                  <Route path="/knowledge/all-options" element={<PouchAllOptionsPage />} />
                  <Route path="/knowledge/size-guide" element={<PouchKnowledgeSizeGuidePage />} />
                  <Route path="/knowledge/pouch-sizing" element={<PouchPouchSizingPage />} />
                  <Route path="/knowledge/printing-types" element={<PouchPrintingTypesPage />} />
                  <Route path="/gallery" element={<ImageGalleryPage />} />
                  <Route path="/knowledge/workflow" element={<PouchWorkflowPage />} />
                  <Route path="/knowledge/k-seal-stand-up-pouches" element={<PouchKSealStandUpPouchesPage />} />
                  <Route path="/knowledge/white-ink-underprint" element={<PouchWhiteInkUnderprintPage />} />
                  <Route path="/knowledge/fin-seal-lap-seal" element={<PouchFinSealLapSealPage />} />
                  <Route path="/knowledge/flat-bottom-vs-gusset" element={<PouchFlatBottomVsGussetPage />} />
                  <Route path="/knowledge/eco-packaging-reality" element={<EcoPackagingRealityPage />} />
                  <Route path="/knowledge/writable-stampable-pouches" element={<WritableStampablePouchesPage />} />
                  <Route path="/knowledge/digital-printing-pantone-color-matching" element={<PouchColorMatchingPage />} />
                  <Route path="/knowledge/pha-vs-pla" element={<PhaVsPla />} />
                  <Route path="/knowledge/reusable-packaging" element={<ReusablePackagingPage />} />
                  <Route path="/knowledge/bottle-printing-guide" element={<BottlePrintingGuidePage />} />
                  <Route path="/knowledge/pouch-heat-sealing-temperature-guide" element={<PouchHeatSealingGuidePage />} />
                  <Route path="/knowledge/hand-clamp-sealer" element={<HandClampSealerPage />} />
                  <Route path="/knowledge/pouch-date-coding-guide" element={<PouchDateCodingGuidePage />} />
                  <Route path="/knowledge/food-packaging-compliance-date-coding" element={<FoodPackagingCompliancePage />} />
                  <Route path="/knowledge/packaging-line-automation-date-coding" element={<PackagingLineAutomationPage />} />
                  <Route path="/knowledge/compostable-packaging-inkjet-coding" element={<CompostablePackagingCodingPage />} />
                  <Route path="/knowledge/molded-pulp-packaging-benefits" element={<MoldedPulpPackagingBenefits />} />
                  <Route path="/knowledge/molded-pulp-guide" element={<MoldedPulpGuide />} />
                  <Route path="/knowledge/automating-pulp-packaging-lines" element={<AutomatingPulpLines />} />
                  {/* <Route path="/blog/industrial-compostable-guide" element={<IndustrialCompostableGuide />} /> */}
                  {/* <Route path="/blog/bpi-certified-guide" element={<BPICertifiedGuide />} /> */}
                  {/* <Route path="/blog/coffee-degassing-valve-guide" element={<CoffeeDegassingValveGuide />} /> */}
                  {/* <Route path="/blog/home-compostable-guide" element={<HomeCompostableGuide />} /> */}
                  {/* <Route path="/blog/organic-compliance-support-guide" element={<OrganicComplianceSupportGuide />} /> */}
                  {/* <Route path="/blog/compostable-humidity-control-guide" element={<PouchHumidityControlGuide />} /> */}
                  {/* <Route path="/blog/compostable-zipper-no-removal" element={<PouchCompostableZipperNoRemovalPage />} /> */}
                  {/* <Route path="/blog/stamp-foil-recyclability" element={<PouchStampFoilRecyclabilityPage />} /> */}
                  <Route path="/certifications" element={<PouchCertificationsPage />} />
                  <Route path="/factory-tour" element={<PouchFactoryTourPage />} />
                  <Route path="/company/factory-tour" element={<PouchFactoryTourPage />} />
                  <Route path="/company/about" element={<PouchAboutPage />} />
                  <Route path="/materials/cello-kraft-triplex" element={<PouchCelloKraftPage />} />
                  <Route path="/materials/kraft-duplex" element={<PouchKraftDuplexPage />} />
                  <Route path="/materials/data-sheet" element={<PouchMaterialDataSheetPage />} />
                  <Route path="/materials/catalog" element={<PouchMaterialCatalogPage />} />
                  <Route path="/options/reclosure" element={<PouchReclosureOptionsPage />} />
                  <Route path="/options/surface-finish" element={<PouchSurfaceFinishPage />} />
                  <Route path="/options/surface-and-reclosure" element={<SurfaceAndReclosureOptionsPage />} />
                  <Route path="/options/smart-degassing-sticker" element={<SmartDegassingStickerPageB2C />} />
                  <Route path="/function/smart-degassing-sticker" element={<SmartDegassingStickerPageB2C />} />
                  <Route path="/barriers/overview" element={<PouchBarrierOverviewPage />} />
                  <Route path="/barriers/material-properties" element={<PouchMaterialBarrierPropertiesPage />} />
                  <Route path="/printing/digital" element={<PouchDigitalPrintingPage />} />
                  <Route path="/products" element={<PouchProductsPage />} />
                  <Route path="/materials" element={<PouchMaterialsPage />} />
                  <Route path="/solutions/citrus-oil-packaging" element={<PouchCitrusOilPackagingPage />} />
                  <Route path="/seo-guide" element={<PouchSEOPage />} />
                  
                  {/* New SEO Pages */}
                  <Route path="/function/heat-resistant-compostable-pouches" element={<HeatResistantCandlePackagingPage />} />
                  <Route path="/function/child-resistant-bags" element={<ChildResistantBagsPage />} />
                  <Route path="/function/microwave-steam-bags" element={<MicrowaveSteamBagsPage />} />
                  <Route path="/function/carbon-neutral-bags" element={<CarbonNeutralBagsPage />} />
                  <Route path="/function/spout-pouches-juice" element={<SpoutPouchesJuicePage />} />
                  <Route path="/function/rice-paper-bags" element={<RicePaperBagsPage />} />
                  <Route path="/function/pva-water-soluble-bags" element={<PVAWaterSolubleBagsPage />} />
                  <Route path="/function/large-format-kraft-heavy-bags" element={<LargeFormatKraftHeavyBagPage />} />
                  <Route path="/function/pre-zippered-rollstock" element={<PreZipperedRollstockPage />} />
                  <Route path="/packaging/stand-up-pouches" element={<PouchStandUpPouchesPage />} />
                  <Route path="/packaging/shrink-sleeves" element={<ShrinkSleevesPage />} />
                  <Route path="/packaging/flat-bottom-bags" element={<PouchFlatBottomBagsPage />} />
                  <Route path="/packaging/side-gusset-bags" element={<PouchSideGussetBagsPage />} />
                  <Route path="/packaging/custom-boxes" element={<PouchCustomBoxesPage />} />
                  <Route path="/materials/compostable" element={<PouchCompostablePage />} />
                  <Route path="/materials/bio-pe" element={<PouchBioPEPage />} />
                  <Route path="/materials/pcr" element={<PouchPCRPage />} />
                  <Route path="/materials/home-compostable" element={<PouchHomeCompostablePage />} />
                  <Route path="/materials/industrial-compostable" element={<PouchIndustrialCompostablePage />} />
                  <Route path="/materials/kraft-low-barrier" element={<KraftLowBarrierPage />} />
                  <Route path="/materials/kraft-medium-barrier" element={<KraftMediumBarrierPage />} />
                  <Route path="/materials/kraft-high-barrier" element={<PouchKraftHighBarrierPage />} />
                  <Route path="/materials/recyclable" element={<PouchRecyclablePage />} />
                  <Route path="/materials/recyclable-mono-pe" element={<PouchRecyclableMonoPEPage />} />
                  <Route path="/materials/recyclable-mono-pp" element={<RecyclableMonoPPPage />} />
                  <Route path="/spec/compostable-pouch-geo" element={<CompostablePouchGeoPage />} />
                  <Route path="/materials/plastic-free-kraft" element={<PouchPlasticFreeKraftPage />} />
                  <Route path="/materials/combustion-safety-test" element={<PouchCombustionSafetyTestPage />} />
                  <Route path="/materials/conventional-printed-sachets" element={<ConventionalPrintedSachetsPage />} />
                  <Route path="/composting/plastic-free" element={<PouchPlasticFreePage />} />
                  <Route path="/composting/composting-benefits" element={<PouchCompostingBenefitsPage />} />
                  <Route path="/composting/composting-services" element={<PouchCompostingServicesPage />} />
                  <Route path="/industry/baby-food" element={<PouchBabyFoodPage />} />
                  <Route path="/packaging/spout-pouches" element={<PouchSpoutPouchesPage />} />
                  <Route path="/packaging/flat-pouches" element={<PouchFlatPouchesPage />} />
                  <Route path="/packaging/vacuum-pouches" element={<PouchVacuumPouchesPage />} />
                  <Route path="/industry/frozen-food" element={<PouchFrozenFoodPage />} />
                  <Route path="/industry/sauces-condiments" element={<PouchSaucesPage />} />
                  <Route path="/industry/fresh-produce" element={<FreshProducePage />} />
                  <Route path="/industry/premium-matte-pouches" element={<PremiummattepouchesPage />} />
                  <Route path="/industry/wholesale-unprinted-pouches" element={<WholesaleunprintedpouchesPage />} />
                  <Route path="/industry/high-barrier-food-pouches" element={<HighbarrierfoodpouchesPage />} />
                  <Route path="/industry/australia-shipping-coo" element={<AustraliashippingcooPage />} />
                  <Route path="/industry/premium-finishes" element={<PremiumfinishesPage />} />
                  <Route path="/industry/high-barrier-retort" element={<HighbarrierretortPage />} />
                  <Route path="/industry/custom-spout-pouches" element={<CustomspoutpouchesPage />} />
                  <Route path="/industry/automatic-labeling-machine" element={<AutomaticLabelingMachinePage />} />
                  <Route path="/industry/stock-bag-spouted-pouch" element={<StockbagspoutedpouchPage />} />
                  <Route path="/industry/pet-food-quad-seal" element={<PetfoodquadsealPage />} />
                  <Route path="/industry/kraft-window-pouch" element={<KraftwindowpouchPage />} />
                  <Route path="/industry/matcha-supplement-sachets" element={<MatchasupplementsachetsPage />} />
                  <Route path="/industry/low-moq-fast-turnaround" element={<LowmoqfastturnaroundPage />} />
                  <Route path="/industry/premium-soft-touch" element={<PremiumsofttouchPage />} />
                  <Route path="/industry/custom-die-cut-pouches" element={<CustomdiecutpouchesPage />} />
                  <Route path="/industry/resealable-tin-tie-bags" element={<ResealabletintiebagsPage />} />
                  <Route path="/industry/sustainable-kraft-solutions" element={<SustainablekraftsolutionsPage />} />
                  <Route path="/industry/durable-reusable-pouches" element={<DurablereusablepouchesPage />} />
                  <Route path="/industry/pla-compostable-packaging" element={<PlacompostablepackagingPage />} />
                  <Route path="/industry/sustainable-healthcare-packaging" element={<SustainablehealthcarepackagingPage />} />
                  <Route path="/industry/eco-friendly-tea-coffee" element={<EcofriendlyteacoffeePage />} />
                  <Route path="/industry/compostable-laminated-film" element={<CompostablelaminatedfilmPage />} />
                  <Route path="/industry/child-resistant-cbd" element={<ChildresistantcbdPage />} />
                  <Route path="/industry/compostable-protein-bags" element={<CompostableproteinbagsPage />} />
                  <Route path="/industry/clear-transparent-pouches" element={<CleartransparentpouchesPage />} />
                  <Route path="/industry/recyclable-vacuum-bags" element={<RecyclablevacuumbagsPage />} />
                  <Route path="/industry/eco-coffee-bags-valve" element={<EcocoffeebagsvalvePage />} />
                  <Route path="/industry/pcr-packaging-pouches" element={<PcrpackagingpouchesPage />} />
                  <Route path="/industry/euro-hole-hang-bags" element={<EuroholehangbagsPage />} />
                  <Route path="/industry/sustainable-tea-sachets" element={<SustainableteasachetsPage />} />
                  <Route path="/industry/meat-jerky-packaging" element={<MeatjerkypackagingPage />} />
                  <Route path="/industry/brown-white-kraft" element={<BrownwhitekraftPage />} />
                  <Route path="/industry/compostable-sugarcane-pulp-box" element={<SugarcaneboxPage />} />
                  <Route path="/topics/digital-product-passport-packaging" element={<DigitalProductPassportPackagingPage />} />
                  <Route path="/topics/dried-fruit-hanging-zipper-pouch" element={<DriedFruitHangingZipperPouchPage />} />
                  <Route path="/topics/dried-fruit-flat-bottom-pouch" element={<DriedFruitFlatBottomPouchPage />} />
                  <Route path="/topics/rice-flat-bottom-bag" element={<RiceFlatBottomBagPage />} />

                  <Route path="/topics/dried-fruits-tear-notch" element={<DriedFruitsTearNotchPage />} />
                  <Route path="/image-catalog" element={<ImageCatalogPage />} />
                  <Route path="/quote/coffee-pouch-2025" element={<CoffeePouchQuotePage />} />
                  <Route path="/return-policy" element={<ReturnPolicyPage />} />
                  <Route path="/ryan" element={<RyanHologramPage />} />
                  <Route path="/topics/eu-ppwr-compliance" element={<EUPPWRCompliancePage />} />
                  <Route path="/topics/food-packaging-supplier-audit" element={<FoodPackagingSupplierPage />} />
                  {/* Industry Solution Pages */}
                  <Route path="/industry/coffee-tea" element={<PouchCoffeeTeaPage />} />
                  <Route path="/industry/pet-food" element={<PouchPetFoodPage />} />
                  <Route path="/industry/snacks" element={<PouchSnacksPage />} />
                  <Route path="/industry/snacks-food" element={<PouchSnacksPage />} />
                  <Route path="/industry/supplements" element={<PouchSupplementsPage />} />
                  <Route path="/industry/supplements-powders" element={<PouchSupplementsPage />} />
                  {/* <Route path="/blog/eco-friendly-food-packaging-guide" element={<EcoFriendlyFoodPackagingGuide />} /> */}
                  {/* <Route path="/blog/dtc-sustainable-packaging-guide" element={<DTCSustainablePackagingGuide />} /> */}
                  {/* <Route path="/blog/recyclable-snack-packaging-guide" element={<RecyclableSnackPackagingGuide />} /> */}
                  {/* <Route path="/blog/compostable-baby-food-packaging-guide" element={<CompostableBabyFoodPackagingGuide />} /> */}
                  {/* <Route path="/blog/custom-compostable-pouch-suppliers-guide" element={<CustomCompostablePouchSuppliersGuide />} /> */}
                  {/* <Route path="/blog/custom-printed-materials-guide" element={<CustomPrintedMaterialsGuide />} /> */}
                  {/* <Route path="/blog/digital-printing-eco-packaging-guide" element={<DigitalPrintingEcoPackagingGuide />} /> */}
                  {/* <Route path="/blog/eco-packaging-regulations-guide" element={<EcoPackagingRegulationsGuide />} /> */}
                  {/* <Route path="/blog/green-coffee-materials-guide" element={<GreenCoffeeMaterialsGuide />} /> */}
                  {/* <Route path="/blog/low-moq-startup-packaging-guide" element={<LowMOQStartupPackagingGuide />} /> */}
                  <Route path="/products/recyclable-mono-material-pouches" element={<RecyclableSnackPackagingGuide />} />
                  <Route path="/products/coffee-bags-degassing-valve" element={<CoffeeDegassingValveGuide />} />
                  <Route path="/products/low-moq-packaging" element={<LowMOQPackagingGuide />} />
                  <Route path="/products/compostable-stand-up-pouches" element={<CompostableStandUpPouchesGuide />} />
                  <Route path="/products/custom-compostable-labels" element={<CustomCompostableLabelsPage />} />
                  <Route path="/products/compostable-side-gusset-bags" element={<CompostableSideGussetPage />} />
                  <Route path="/products/eco-stand-up-pouch-guide" element={<EcoStandUpPouchGuidePage />} />
                  <Route path="/products/eco-stand-up-coffee-pouch" element={<EcoStandUpCoffeePouchPage />} />
                  <Route path="/products/eco-vs-conventional-pouch-comparison" element={<EcoVsConventionalPouchPage />} />
                  <Route path="/products/eco-side-gusset-pouch-guide" element={<EcoSideGussetGuidePage />} />
                  <Route path="/products/side-gusset-coffee-bag-packaging" element={<SideGussetCoffeeBagPage />} />
                  <Route path="/products/recyclable-side-gusset-bags" element={<RecyclableSideGussetPage />} />
                  <Route path="/products/eco-box-bottom-pouch" element={<EcoBoxBottomPouchPage />} />
                  <Route path="/products/eco-flat-bottom-pouch" element={<EcoFlatBottomPouchPage />} />
                  <Route path="/products/premium-eco-packaging-comparison" element={<PremiumEcoPackagingComparisonPage />} />
                  <Route path="/products/custom-printed-corrugated-boxes" element={<CustomCorrugatedBoxesPage />} />
                  <Route path="/products/custom-printed-tuck-boxes" element={<CustomTuckBoxesPage />} />
                  <Route path="/products/premium-cotton-paper-foil-pouch" element={<CottonPaperFoilPouchPage />} />
                  
                  {/* Legacy pouch.eco routes recovery */}
                  <Route path="/100-compostable-3-side-sealed-pouch-for-drink-liquid-alcohol-etc" element={<DrinkLiquidPouchPage />} />
                  <Route path="/digital-print-conventional-zipper-stand-up-pouch-bag-with-moq-start-from-100pcs" element={<LowMOQStandUpPouchPage />} />
                  <Route path="/eco-friendly-packaging-revolution-introducing-bio-based-spout-pouches-for-liquid" element={<BioBasedSpoutPouchesPage />} />
                  <Route path="/understand-trapping-why-we-need-to-add-a-keyline" element={<TrappingKeylinePage />} />
                  <Route path="/sustainable-packaging-revolution-glass-bottles-paired-with-compostable-refill-pouches-for-an-eco-friendly-lifestyle" element={<RefillPouchesPage />} />
                  <Route path="/the-way-to-use-k-seal-bag-packing-heavy-content" element={<KSealHeavyContentPage />} />
                  <Route path="/category/packaging-technical-data-sheet" element={<TechnicalDataSheetCategoryPage />} />
                  
                  <Route path="/tech-specs" element={<PouchTechSpecsPage />} />
                  <Route path="/quotes/flat-bottom" element={<FlatBottomQuotePage />} />
                  <Route path="/quotes/three-side-seal" element={<ThreeSideSealQuotePage />} />
                  <Route path="/quotes/stand-up-pouch" element={<StandUpPouchQuotePage />} />
                  <Route path="/quotes/spouted-pouch" element={<SpoutedPouchQuotePage />} />
                  <Route path="/quotes/rollstock" element={<RollstockQuotePage />} />
                  <Route path="/cert" element={<CertificateDownloadPage />} />
                  <Route path="/sample" element={<PouchCustomPrintedSamplePage />} />
                  <Route path="/unprinted-samples" element={<PouchUnprintedSamplesPage />} />
                  <Route path="/support/color-accuracy-digital-printing" element={<PouchColorAccuracyPage />} />
                  <Route path="/quote" element={<QuotationViewPage />} />
                  <Route path="/quote/:id" element={<QuotationViewPage />} />
                  <Route path="/artwork-review/:batchId" element={<ArtworkReviewPage />} />
                  <Route path="/support/sample-quote" element={<CustomPrintedSamplePage />} />
                  <Route path="/support/unprinted-samples" element={<UnprintedSamplesPage />} />
                  <Route path="/reports/state-of-packaging-2026" element={<PackagingReport2026 />} />
                  <Route path="/workshop-register" element={<WorkshopRegisterPage />} />

                  {/* Batch 7 Spec Pages */}
                  <Route path="/spec/pcr-kraft-vmpet" element={<PcrKraftVmpetPage />} />
                  <Route path="/spec/biope-kraft-vmpet" element={<BioPeKraftVmpetPage />} />
                  <Route path="/spec/biope-pet-kraft-triplex-clear" element={<BioPePetKraftTriplexClearPage />} />
                  <Route path="/spec/biope-pet-triplex-aluminum" element={<BioPePetTriplexAluminumPage />} />
                  <Route path="/spec/mono-pe-duplex-clear" element={<MonoPeDuplexClearPage />} />
                  <Route path="/spec/biope-pp-duplex-nowindow" element={<BioPePpDuplexNoWindowPage />} />
                  <Route path="/spec/pcr-pp-triplex-aluminum" element={<PcrPpTriplexAluminumPage />} />
                  <Route path="/spec/biope-pp-triplex-metalised" element={<BioPePpTriplexMetalisedPage />} />
                  <Route path="/spec/pcr-pet-triplex-metalised" element={<PcrPetTriplexMetalisedPage />} />
                  <Route path="/spec/compostable-material-structure" element={<CompostableMaterialStructurePage />} />
                  <Route path="/spec/pcr-pp-duplex-clear" element={<PcrPpDuplexClearPage />} />
                  <Route path="/spec/pcr-pet-triplex-aluminum" element={<PcrPetTriplexAluminumPage />} />
                  <Route path="/spec/pcr-pet-kraft-triplex-clear" element={<PcrPetKraftTriplexClearPage />} />
                  <Route path="/spec/pcr-pet-duplex-clear" element={<PcrPetDuplexClearPage />} />
                  <Route path="/spec/pcr-kraft-duplex-low" element={<PcrKraftDuplexLowPage />} />

                  {/* Batch 8 Spec Pages (All remaining spec pages) */}
                  <Route path="/spec/pcr-pp-kraft-triplex-clear" element={<PcrPpKraftTriplexClearPage />} />
                  <Route path="/spec/pcr-pet-duplex-nowindow" element={<PcrPetDuplexNoWindowPage />} />
                  <Route path="/spec/pcr-pp-duplex-nowindow" element={<PcrPpDuplexNoWindowPage />} />
                  <Route path="/spec/pcr-pp-triplex-metalised" element={<PcrPpTriplexMetalisedPage />} />
                  <Route path="/spec/pcr-pet-kraft-quadlex-aluminum" element={<PcrPetKraftQuadlexAluminumPage />} />
                  <Route path="/spec/pcr-pp-kraft-quadlex-aluminum" element={<PcrPpKraftQuadlexAluminumPage />} />
                  <Route path="/spec/mono-pp-duplex-clear" element={<MonoPpDuplexClearPage />} />
                  <Route path="/spec/mono-pe-duplex-nowindow" element={<MonoPeDuplexNoWindowPage />} />
                  <Route path="/spec/mono-pp-duplex-nowindow" element={<MonoPpDuplexNoWindowPage />} />
                  <Route path="/spec/bio-cello-triplex-highest" element={<BioCelloTriplexHighestPage />} />
                  <Route path="/spec/bio-cello-triplex-metalised" element={<BioCelloTriplexMetalisedPage />} />
                  <Route path="/spec/bio-kraft-vm-cello" element={<BioKraftVmCelloPage />} />
                  <Route path="/spec/bio-kraft-pbat-low" element={<BioKraftPbatLowPage />} />
                  <Route path="/spec/biope-pet-duplex-clear" element={<BioPePetDuplexClearPage />} />
                  <Route path="/spec/biope-pp-duplex-clear" element={<BioPePpDuplexClearPage />} />
                  <Route path="/spec/biope-pp-kraft-triplex-clear" element={<BioPePpKraftTriplexClearPage />} />
                  <Route path="/spec/biope-pet-duplex-nowindow" element={<BioPePetDuplexNoWindowPage />} />
                  <Route path="/spec/biope-pet-triplex-metalised" element={<BioPePetTriplexMetalisedPage />} />
                  <Route path="/spec/biope-pp-triplex-aluminum" element={<BioPePpTriplexAluminumPage />} />
                  <Route path="/spec/biope-pet-kraft-quadlex-aluminum" element={<BioPePetKraftQuadlexAluminumPage />} />
                  <Route path="/spec/biope-pp-kraft-quadlex-aluminum" element={<BioPePpKraftQuadlexAluminumPage />} />
                  <Route path="/spec/biope-kraft-duplex-low" element={<BioPeKraftDuplexLowPage />} />

                  {/* Migrated B2C Solutions & Case Studies */}
                  <Route path="/solutions/food-coding-compliance" element={<FoodCodingComplianceSolutionsPage />} />
                  <Route path="/solutions/packaging-line-automation" element={<PackagingLineAutomationSolutionsPage />} />
                  <Route path="/solutions/eco-packaging-coding" element={<EcoPackagingCodingPage />} />
                  <Route path="/solutions/startup-founder" element={<StartupFounderPage />} />
                  <Route path="/solutions/ecommerce-brand" element={<EcommerceBrandPage />} />
                  <Route path="/solutions/corporate-sustainability" element={<CorporateSustainabilityPage />} />
                  <Route path="/solutions/food-manufacturer" element={<FoodManufacturerPage />} />
                  <Route path="/solutions/product-developer" element={<ProductDeveloperPage />} />
                  <Route path="/solutions/coffee-roaster" element={<CoffeeRoasterPage />} />
                  <Route path="/solutions/artisan-producer" element={<ArtisanProducerPage />} />
                  <Route path="/solutions/snack-brand-manager" element={<SnackBrandManagerPage />} />
                  <Route path="/solutions/catalog" element={<CatalogPage />} />
                  <Route path="/solutions/custom-boxes-catalog" element={<CustomBoxesCatalogPage />} />
                  <Route path="/solutions/flexible-pouches-catalog" element={<FlexiblePouchesCatalogPage />} />
                  <Route path="/solutions/cosmetics-bottles-catalog" element={<CosmeticsBottlesCatalogPage />} />
                  <Route path="/solutions/shapes/:id" element={<ShapeDetailPage />} />
                  <Route path="/app" element={<Navigate to="/studio" replace />} />
                  <Route path="/studio" element={<PackageEditorPage />} />
                  <Route path="/case-studies/coffee-roastery" element={<CoffeeRoasteryCaseStudy />} />
                  <Route path="/case-studies/tea-brand" element={<TeaBrandCaseStudy />} />
                  <Route path="/case-studies/superfood-brand" element={<SuperfoodBrandCaseStudy />} />
                  <Route path="/case-studies/pet-treats" element={<PetTreatsCaseStudy />} />
                  <Route path="/case-studies/chocolate-brand" element={<ChocolateBrandCaseStudy />} />
                  <Route path="/case-studies/candle-brand" element={<CandleBrandCaseStudy />} />
                  <Route path="/case-studies/bakery" element={<BakeryCaseStudy />} />
                  <Route path="/case-studies/wellness-brand" element={<WellnessBrandCaseStudy />} />
                  <Route path="/case-studies/organic-nuts" element={<OrganicNutsCaseStudy />} />
                  <Route path="/case-studies/bath-products" element={<BathProductsCaseStudy />} />
                  <Route path="/case-studies/adaptogens" element={<AdaptogensCaseStudy />} />
                  <Route path="/case-studies/outdoor-snacks" element={<OutdoorSnacksCaseStudy />} />

                  {/* Composting & Free Services */}
                  <Route path="/composting/biodegradable-vs-compostable" element={<BiodegradableVsCompostablePage />} />
                  <Route path="/composting/commercial-composting" element={<CommercialCompostingPage />} />
                  <Route path="/composting/home-vs-industrial-compostable" element={<HomeVsIndustrialCompostPage />} />
                  <Route path="/composting/natural-cellulose-fiber" element={<NaturalCelluloseFiberPage />} />
                  <Route path="/composting/organic-compliance-support" element={<OrganicComplianceSupportPage />} />
                  <Route path="/free-service/packaging-design-consultation" element={<FreePackagingDesignPage />} />
                  <Route path="/free-service/website-upgrade" element={<FreeWebsiteUpgradePage />} />
                  <Route path="/free-service/packaging-mockup" element={<FreeMockupPage />} />
                  <Route path="/free-service/customer-center" element={<FreeCustomerCenterPage />} />
                  <Route path="/free-service/maxi-foods-demo" element={<MaxiFoodsDemoPage />} />
                  <Route path="/free-service/achieve-chips-demo" element={<AchieveChipsDemoPage />} />
                  <Route path="/free-service/pencil-demo" element={<PencilDemoPage />} />
                  <Route path="/free-service/achieve-chocolate-demo" element={<AchieveChocolateDemoPage />} />
                  <Route path="/free-service/achieve-supplement-demo" element={<AchieveSupplementDemoPage />} />
                  <Route path="/free-service/achieve-tea-demo" element={<AchieveTeaDemoPage />} />
                  <Route path="/free-service/achieve-energy-demo" element={<AchieveEnergyDemoPage />} />
                  <Route path="/free-service/achieve-honey-demo" element={<AchieveHoneyDemoPage />} />
                  <Route path="/free-service/achieve-superfood-demo" element={<AchieveSuperfoodDemoPage />} />
                  <Route path="/free-service/achieve-cleaning-demo" element={<AchieveCleaningDemoPage />} />
                  <Route path="/free-service/achieve-spreads-demo" element={<AchieveSpreadsDemoPage />} />
                  <Route path="/free-service/achieve-muesli-demo" element={<AchieveMuesliDemoPage />} />
                  <Route path="/free-service/achieve-bath-demo" element={<AchieveBathDemoPage />} />
                  <Route path="/free-service/achieve-pet-demo" element={<AchievePetDemoPage />} />
                  <Route path="/free-service/achieve-skin-demo" element={<AchieveSkinDemoPage />} />
                  <Route path="/free-service/achieve-baby-demo" element={<AchieveBabyDemoPage />} />
                  <Route path="/free-service/achieve-pouch-eco-demo" element={<AchievePouchEcoDemoPage />} />
                  <Route path="/free-service/free-services-hub" element={<FreeServicesHubPage />} />
                  <Route path="/free-service/all" element={<FreeServicesHubPage />} />
                  <Route path="/free-service" element={<FreeServicesPage />} />

                  {/* Products, Bio-PE, PCR, Recyclable, Legal & Support */}
                  <Route path="/products/compostable-coffee-bags" element={<CompostableCoffeeBagsPage />} />
                  <Route path="/products/custom-labels" element={<CustomLabelsPage />} />
                  <Route path="/products/custom-stickers" element={<CustomStickersPage />} />
                  <Route path="/products/labels-and-stickers" element={<LabelsAndStickersPage />} />
                  <Route path="/products/lab-bags" element={<LabBagsPage />} />
                  <Route path="/demo" element={<PouchHomePage />} />
                  <Route path="/start" element={<PouchHomePage />} />
                  <Route path="/3d-showcase" element={<Product3DShowcasePage />} />
                  <Route path="/biope/what-is-bio-pe" element={<WhatIsBioPEPage />} />
                  <Route path="/biope/bio-pe-vs-compostable" element={<BioPEVsCompostablePage />} />
                  <Route path="/biope/bio-pe-epr-regulations" element={<BioPEEPRPage />} />
                  <Route path="/biope/inside-im-green-bio-pe" element={<InsideImGreenBioPEPage />} />
                  <Route path="/pcr/pcr-plastic-guide" element={<PCRGuidePage />} />
                  <Route path="/pcr/7-checklist" element={<PCR7ChecklistPage />} />
                  <Route path="/pcr/realistic-pcr-content" element={<PCRRealisticPage />} />
                  <Route path="/pcr/recyclable-vs-pcr-biobased" element={<RecyclableVsPCRPage />} />
                  <Route path="/recyclable/what-is-recyclable" element={<WhatIsRecyclablePage />} />
                  <Route path="/recyclable/roadmap-sme" element={<RecyclableRoadmapPage />} />
                  <Route path="/recyclable/mono-material-foundation" element={<MonoMaterialFoundationPage />} />
                  <Route path="/reviews" element={<ReviewsPage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/store/checkout" element={<CheckoutPage />} />
                  <Route path="/store/order-confirmation" element={<OrderConfirmation />} />
                  <Route path="/store/rfq-confirmation" element={<RfqConfirmation />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/reset-password" element={<ResetPasswordPage />} />
                  <Route path="/auth/callback" element={<AuthCallbackPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/shipping" element={<ShippingPolicyPage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/company/b-corp" element={<BCorpPage />} />
                  <Route path="/company/bpi-certified" element={<BPICertifiedPage />} />
                  <Route path="/company/certificates" element={<CertificatesPage />} />
                  <Route path="/team/ryan-wong" element={<RyanWongPage />} />
                  <Route path="/support/faqs" element={<FAQsPage />} />
                  <Route path="/support/lead-time" element={<LeadTimePage />} />
                  <Route path="/blog/packaging-cost-guide" element={<PackagingCostGuidePage />} />
                  <Route path="/blog/compostable-vs-recyclable" element={<CompostableVsRecyclablePage />} />
                  <Route path="/blog/eco-packaging-mistakes" element={<EcoPackagingMistakesPage />} />
                  <Route path="/learn" element={<LearnSearchPage />} />
                  <Route path="/topic-directory" element={<Navigate to="/learn" replace />} />

                  {/* Printing, Features & Lab Pages */}
                  <Route path="/printing/digital-printing" element={<DigitalPrintingPage />} />
                  <Route path="/printing/plate-printing" element={<PlatePrintingPage />} />
                  <Route path="/features/reclosure-options" element={<ReclosureOptionsPage />} />
                  <Route path="/features/surface-finish" element={<SurfaceFinishPage />} />
                  <Route path="/features/barrier-options" element={<BarrierOptionsPage />} />
                  <Route path="/features/low-barrier" element={<LowBarrierPage />} />
                  <Route path="/features/medium-barrier" element={<MediumBarrierPage />} />
                  <Route path="/features/high-barrier" element={<HighBarrierPage />} />
                  <Route path="/features/material-barrier-properties" element={<MaterialBarrierPropertiesPage />} />
                  <Route path="/function/digital-printed-retort-bags" element={<DigitalPrintedRetortBagsPage />} />
                  <Route path="/lab/lateral-filter-bags" element={<LateralFilterBagsPage />} />
                  <Route path="/lab/wire-closure-bags" element={<WireClosureBagsPage />} />
                  <Route path="/lab/lab-blender-bags" element={<LabBlenderBagsPage />} />
                  <Route path="/unsubscribe" element={<UnsubscribePage />} />

                  {/* Admin Protected Routes in B2C */}
                  <Route path="/ctrl-x9k7m" element={<AdminProtectedRoute><AdminPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/management" element={<AdminProtectedRoute><OrderManagementPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/order-workflow" element={<AdminProtectedRoute><OrderWorkflowPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/customer-map" element={<AdminProtectedRoute><CustomerMapPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/artwork-hub" element={<AdminProtectedRoute><ArtworkHubPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/artwork-batches" element={<AdminProtectedRoute><ArtworkBatchesPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/quotations" element={<AdminProtectedRoute><QuotationBatchesPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/prospects" element={<AdminProtectedRoute><ProspectFinderPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/prospects/lists" element={<AdminProtectedRoute><ProspectListsPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/shipments" element={<AdminProtectedRoute><ShipmentHubPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/document-templates" element={<AdminProtectedRoute><DocumentTemplatesPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/daily-reports" element={<AdminProtectedRoute><DailyReportsPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/email-campaign" element={<AdminProtectedRoute><EmailCampaignPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/ai-image" element={<AdminProtectedRoute><ImageGeneratorPage /></AdminProtectedRoute>} />
                  <Route path="/ctrl-x9k7m/bookkeeping" element={<AdminProtectedRoute><BookkeepingPage /></AdminProtectedRoute>} />

                  {/* Duplicate Root Routes for EP (pouch.eco aliases) */}
                  <Route path="/dupont-paper-tote-bags-benefits" element={<DupontPaperToteBagsBenefits />} />
                  <Route path="/tyvek-vs-canvas-tote-bags" element={<TyvekVsCanvasToteBags />} />
                  <Route path="/eco-friendly-dupont-paper-bags" element={<EcoFriendlyDupontPaperBags />} />
                  <Route path="/molded-pulp-packaging-benefits" element={<MoldedPulpPackagingBenefits />} />
                  <Route path="/molded-pulp-guide" element={<MoldedPulpGuide />} />
                  <Route path="/automating-pulp-packaging-lines" element={<AutomatingPulpLines />} />
                  <Route path="/eco-degradable-pulp-boxes-guide" element={<EcoDegradablePulpBoxesGuide />} />
                  <Route path="/pulp-boxes-vs-corrugated-cardboard" element={<PulpBoxesVsCorrugatedCardboard />} />
                  <Route path="/luxury-cork-gift-boxes" element={<LuxuryCorkGiftBoxes />} />
                  <Route path="/cork-packaging-sustainability" element={<CorkPackagingSustainability />} />
                  <Route path="/custom-cork-gift-boxes-design" element={<CustomCorkGiftBoxesDesign />} />
                  <Route path="/soft-wood-gift-boxes-wholesale" element={<SoftWoodGiftBoxesWholesale />} />
                  <Route path="/wooden-gift-boxes-sustainability" element={<WoodenGiftBoxesSustainability />} />
                  <Route path="/balsa-soft-wood-packaging" element={<BalsaSoftWoodPackaging />} />


                  {/* Fallback for other routes back to Home or 404, or keep as Home for now */}
                  <Route path="/:slug" element={<SharedStudioPage />} />
                  <Route path="*" element={<PouchHomePage />} />
                      </MultilingualRoutes>
              </Suspense>
            </CustomQuoteProvider>
          </CalendlyProvider>
        </StoreProvider>
      </BrowserRouter>
    </GeoBlocker>
    </ErrorBoundary>
  </HelmetProvider>
</StrictMode>
)
} else {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <GeoBlocker>
            <BrowserRouter basename={routerBasename}>
              <StoreProvider>
                <CalendlyProvider>
                  <CustomQuoteProvider>
                    <CartSidebar />
                    <Suspense fallback={<PageLoader />}>
                      <MultilingualRoutes>
                        <Route path="/store/product/:productId" element={<ProductPage />} />
                        
                        {/* Prospect Finder Routes */}

                        {/* Shipment Document Hub Routes */}
                        <Route path="/ctrl-x9k7m/shipments/:id" element={<AdminProtectedRoute><ShipmentDetailPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/quote-analytics" element={<AdminProtectedRoute><QuoteAnalyticsPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/rfq-generator" element={<AdminProtectedRoute><RFQGeneratorPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/rfq/:batchId/comparison" element={<AdminProtectedRoute><RFQComparisonPage /></AdminProtectedRoute>} />
                        <Route path="/hub/:batchId" element={<SupplierHubPage />} />
                        <Route path="/shipment/:batchId" element={<ShipmentTrackingPage />} />

                        <Route path="/view-quote/:id" element={<SharedQuotePage />} />
                        <Route path="/packing-list/:id" element={<SharedPackingPage />} />

                        {/* Industry Pages */}

                        {/* Packaging Pages */}

                        {/* Materials Pages */}

                        {/* Printing Pages */}

                        {/* Feature Pages */}

                        {/* Function Pages */}

                        {/* Lab Pages */}

                        {/* Legal Pages */}

                        {/* Company Pages */}

                        {/* Team Pages */}

                        {/* Knowledge Pages */}

                        {/* Support Pages */}

                        {/* Case Studies Pages */}

                        {/* Blog Pages */}

                        {/* Learn Center */}

                        {/* USA Pages */}

                        {/* Products Pages - SEO Focused */}

                        {/* Solutions Pages - Persona Based SEO */}
                        
                        {/* Topics Pages - AI Search Volume SEO */}

                        
                        {/* New Knowledge Base Routes */}
                        <Route path="/knowledge/dupont-paper-tote-bags-benefits" element={<DupontPaperToteBagsBenefits />} />
                        <Route path="/knowledge/tyvek-vs-canvas-tote-bags" element={<TyvekVsCanvasToteBags />} />
                        <Route path="/knowledge/eco-friendly-dupont-paper-bags" element={<EcoFriendlyDupontPaperBags />} />
                        <Route path="/knowledge/eco-degradable-pulp-boxes-guide" element={<EcoDegradablePulpBoxesGuide />} />
                        <Route path="/knowledge/pulp-boxes-vs-corrugated-cardboard" element={<PulpBoxesVsCorrugatedCardboard />} />
                        <Route path="/knowledge/luxury-cork-gift-boxes" element={<LuxuryCorkGiftBoxes />} />
                        <Route path="/knowledge/cork-packaging-sustainability" element={<CorkPackagingSustainability />} />
                        <Route path="/knowledge/custom-cork-gift-boxes-design" element={<CustomCorkGiftBoxesDesign />} />
                        <Route path="/knowledge/soft-wood-gift-boxes-wholesale" element={<SoftWoodGiftBoxesWholesale />} />
                        <Route path="/knowledge/wooden-gift-boxes-sustainability" element={<WoodenGiftBoxesSustainability />} />
                        <Route path="/knowledge/balsa-soft-wood-packaging" element={<BalsaSoftWoodPackaging />} />

                        {/* Duplicate Root Routes for EP (pouch.eco aliases) */}
                        <Route path="/topics/reduce-packaging-waste-guide" element={<ReducePackagingWasteGuidePage />} />
                        <Route path="/topics/compostable-pouch-suppliers" element={<CustomCompostablePouchSuppliersPage />} />

                        {/* Compostable Education Pages */}

                        {/* Free Service Pages */}

                        
                        {/* Pouch.eco Design Demo - Denterity Inspired */}
                        

                        {/* Bio-PE Pages */}

                        {/* PCR SEO Pages */}

                        {/* Recyclable SEO Pages */}

                        {/* Spec Pages - Material Structures */}

                        {/* BioPE Spec Pages - Plant-Based Bio-PE Structures */}

                        {/* Reviews Page */}

                        {/* Campaign Pages */}

                        {/* 404 - Catch All Route */}
              <Route path="/topics/eco-audit" element={<EcoAudit />} />
              <Route path="/topics/a-eco-digital-advantage-photo-6226161" element={<AEcoDigitalAdvantagePhoto6226161 />} />
              <Route path="/topics/a-ecommerce-brand-variation-2-5348466" element={<AEcommerceBrandVariation25348466 />} />
              <Route path="/topics/eco-packaging-regulations-seo-infographic" element={<EcoPackagingRegulationsSeoInfographic />} />
              <Route path="/topics/ecommerce-brand-seo-infographic" element={<EcommerceBrandSeoInfographic />} />
              <Route path="/topics/compostable-zipper-durability-seo-infographic" element={<CompostableZipperDurabilitySeoInfographic />} />
              <Route path="/topics/compostable-stand-up-pouches-seo-infographic" element={<CompostableStandUpPouchesSeoInfographic />} />
              <Route path="/topics/eco-friendly-food-packaging-seo-infographic" element={<EcoFriendlyFoodPackagingSeoInfographic />} />
              <Route path="/topics/compostable-humidity-control-seo-infographic" element={<CompostableHumidityControlSeoInfographic />} />
              <Route path="/topics/biope-pet-kraft-quadlex-aluminum" element={<BiopePetKraftQuadlexAluminum />} />
              <Route path="/topics/compostable-rollstock-structure" element={<CompostableRollstockStructure />} />
              <Route path="/topics/biope-kraft-duplex-low" element={<BiopeKraftDuplexLow />} />
              <Route path="/topics/biope-pp-kraft-triplex-clear" element={<BiopePpKraftTriplexClear />} />
              <Route path="/topics/biope-pp-kraft-quadlex-aluminum" element={<BiopePpKraftQuadlexAluminum />} />
              <Route path="/topics/sachet-cost-chinese" element={<SachetCostChinese />} />
              <Route path="/topics/a-standup-pouches-main-6878547" element={<AStandupPouchesMain6878547 />} />
              <Route path="/topics/a-gloss-pouch-correct-5078762" element={<AGlossPouchCorrect5078762 />} />
              <Route path="/topics/a-matte-pouch-correct-6361818" element={<AMattePouchCorrect6361818 />} />
              <Route path="/topics/custom-sachet-packaging-for-spices-infographic-2" element={<CustomSachetPackagingForSpicesInfographic2 />} />
              <Route path="/topics/low-minimum-digital-pouch-printing-infographic-4" element={<LowMinimumDigitalPouchPrintingInfographic4 />} />
              <Route path="/topics/eco-friendly-stand-up-pouch-dimensions-infographic-5" element={<EcoFriendlyStandUpPouchDimensionsInfographic5 />} />
              <Route path="/topics/eco-friendly-digital-print-bags-infographic-5" element={<EcoFriendlyDigitalPrintBagsInfographic5 />} />
              <Route path="/topics/dtc-sustainable-packaging-guide-infographic-3" element={<DtcSustainablePackagingGuideInfographic3 />} />
              <Route path="/topics/digital-printing-eco-packaging-guide-infographic-5" element={<DigitalPrintingEcoPackagingGuideInfographic5 />} />
              <Route path="/topics/kraft-stand-up-pouches-with-window-infographic-6" element={<KraftStandUpPouchesWithWindowInfographic6 />} />
              <Route path="/topics/flexible-packaging-sachet-sizes-for-powders-infographic-4" element={<FlexiblePackagingSachetSizesForPowdersInfographic4 />} />
              <Route path="/topics/custom-printed-barrier-sachets-infographic-4" element={<CustomPrintedBarrierSachetsInfographic4 />} />
              <Route path="/topics/custom-printed-barrier-sachets-infographic" element={<CustomPrintedBarrierSachetsInfographic />} />
              <Route path="/topics/printed-compostable-retort-bags-infographic-3" element={<PrintedCompostableRetortBagsInfographic3 />} />
              <Route path="/topics/kraft-paper-zipper-doypack-infographic-6" element={<KraftPaperZipperDoypackInfographic6 />} />
              <Route path="/topics/custom-shape-die-cut-pouch-infographic-3" element={<CustomShapeDieCutPouchInfographic3 />} />
              <Route path="/topics/compostable-tea-pouch-with-zipper-infographic-4" element={<CompostableTeaPouchWithZipperInfographic4 />} />
              <Route path="/topics/wholesale-prices-for-compostable-pouches-infographic-3" element={<WholesalePricesForCompostablePouchesInfographic3 />} />
              <Route path="/topics/custom-pouch-dieline-template-infographic" element={<CustomPouchDielineTemplateInfographic />} />
              <Route path="/topics/compostable-pouch-size-chart-for-liquids-infographic-5" element={<CompostablePouchSizeChartForLiquidsInfographic5 />} />
              <Route path="/topics/small-batch-custom-pouch-printing-infographic" element={<SmallBatchCustomPouchPrintingInfographic />} />
              <Route path="/topics/home-compostable-guide-infographic-6" element={<HomeCompostableGuideInfographic6 />} />
              <Route path="/topics/recyclable-stand-up-pouch-with-spout-infographic-3" element={<RecyclableStandUpPouchWithSpoutInfographic3 />} />
              <Route path="/topics/stand-up-pouch-dimensions-for-6-oz-infographic-2" element={<StandUpPouchDimensionsFor6OzInfographic2 />} />
              <Route path="/topics/compostable-humidity-control-guide-infographic-6" element={<CompostableHumidityControlGuideInfographic6 />} />
              <Route path="/topics/stand-up-pouch-dimensions-for-6-oz-infographic-3" element={<StandUpPouchDimensionsFor6OzInfographic3 />} />
              <Route path="/topics/compostable-retort-pouch-dimensions-infographic" element={<CompostableRetortPouchDimensionsInfographic />} />
              <Route path="/topics/recyclable-stand-up-pouch-with-spout-infographic-2" element={<RecyclableStandUpPouchWithSpoutInfographic2 />} />
              <Route path="/topics/kraft-stand-up-pouches-with-window-infographic" element={<KraftStandUpPouchesWithWindowInfographic />} />
              <Route path="/topics/biodegradable-stand-up-pouch-suppliers-infographic" element={<BiodegradableStandUpPouchSuppliersInfographic />} />
              <Route path="/topics/compostable-pouch-size-chart-for-liquids-infographic-4" element={<CompostablePouchSizeChartForLiquidsInfographic4 />} />
              <Route path="/topics/wholesale-prices-for-compostable-pouches-infographic-2" element={<WholesalePricesForCompostablePouchesInfographic2 />} />
              <Route path="/topics/compostable-tea-pouch-with-zipper-infographic-5" element={<CompostableTeaPouchWithZipperInfographic5 />} />
              <Route path="/topics/custom-shape-die-cut-pouch-infographic-2" element={<CustomShapeDieCutPouchInfographic2 />} />
              <Route path="/topics/stand-up-pouch-dimensions-chart-for-powders-infographic" element={<StandUpPouchDimensionsChartForPowdersInfographic />} />
              <Route path="/topics/custom-packaging-design-spotlight-8042" element={<CustomPackagingDesignSpotlight8042 />} />
              <Route path="/topics/how-to-start-packaging-journey" element={<HowToStartPackagingJourney />} />
              <Route path="/topics/remi-packaging-case-study" element={<RemiPackagingCaseStudy />} />
              <Route path="/topics/holly-brand-packaging-success" element={<HollyBrandPackagingSuccess />} />
              <Route path="/topics/jemma-sustainable-pouch-story" element={<JemmaSustainablePouchStory />} />
              <Route path="/topics/steph-retail-packaging-showcase" element={<StephRetailPackagingShowcase />} />
              <Route path="/topics/cheryl-eco-design-case" element={<CherylEcoDesignCase />} />
              <Route path="/topics/leo-custom-bag-innovation" element={<LeoCustomBagInnovation />} />
              <Route path="/topics/david-wholesale-pouch-experience" element={<DavidWholesalePouchExperience />} />
              <Route path="/topics/coffee-valve-closure-technology" element={<CoffeeValveClosureTechnology />} />
                      </MultilingualRoutes>
                    </Suspense>
                    {/* Global Floating Buttons - WhatsApp & Meeting */}
                    <FloatingButtons />
                    {/* AI Packaging Assistant Chat Widget */}
                    <Suspense fallback={null}>
                      <PackagingAssistantWidget />
                    </Suspense>
                    <Analytics />
                    <SpeedInsights />
                    <CookieConsent />
                  </CustomQuoteProvider>
                </CalendlyProvider>
              </StoreProvider>
            </BrowserRouter>
          </GeoBlocker>
        </ErrorBoundary>
      </HelmetProvider>
    </StrictMode>,
  )
}

const PackagingBrandingOgImage = lazyWithRetry(() => import('./pages/topics/PackagingBrandingOgImage'));
const SustainableClimatePackaging = lazyWithRetry(() => import('./pages/topics/SustainableClimatePackaging'));
const BiopePlantBasedBarrierFilms = lazyWithRetry(() => import('./pages/topics/BiopePlantBasedBarrierFilms'));
const FoodBeverageFlexiblePackaging = lazyWithRetry(() => import('./pages/topics/FoodBeverageFlexiblePackaging'));
const PlantBasedPackagingInfographic = lazyWithRetry(() => import('./pages/topics/PlantBasedPackagingInfographic'));
const PremiumBrandIdentityPackaging = lazyWithRetry(() => import('./pages/topics/PremiumBrandIdentityPackaging'));
const ShippingStorageEfficiencyPackaging = lazyWithRetry(() => import('./pages/topics/ShippingStorageEfficiencyPackaging'));
const FlexibleVsRigidPackagingComparison = lazyWithRetry(() => import('./pages/topics/FlexibleVsRigidPackagingComparison'));
const FiveStepCustomPackagingProcess = lazyWithRetry(() => import('./pages/topics/FiveStepCustomPackagingProcess'));
const CustomPackagingSolutionsConsultation = lazyWithRetry(() => import('./pages/topics/CustomPackagingSolutionsConsultation'));
const BrcCert = lazyWithRetry(() => import('./pages/topics/BrcCert'));
const LandingHero = lazyWithRetry(() => import('./pages/topics/LandingHero'));
const TestimonialsClientLogos = lazyWithRetry(() => import('./pages/topics/TestimonialsClientLogos'));
const SolutionPetProducts = lazyWithRetry(() => import('./pages/topics/SolutionPetProducts'));
const SolutionCosmetics = lazyWithRetry(() => import('./pages/topics/SolutionCosmetics'));
const CertHomeCompost = lazyWithRetry(() => import('./pages/topics/CertHomeCompost'));
const FeatureReclosureSolutions = lazyWithRetry(() => import('./pages/topics/FeatureReclosureSolutions'));
const InfographicCarbonFootprint = lazyWithRetry(() => import('./pages/topics/InfographicCarbonFootprint'));
const SolutionWellness = lazyWithRetry(() => import('./pages/topics/SolutionWellness'));
const EnvironmentalChart = lazyWithRetry(() => import('./pages/topics/EnvironmentalChart'));
const QuestionMark = lazyWithRetry(() => import('./pages/topics/QuestionMark'));
const ShippingIllustration = lazyWithRetry(() => import('./pages/topics/ShippingIllustration'));
const GlassJar = lazyWithRetry(() => import('./pages/topics/GlassJar'));
const DimensionsGuide = lazyWithRetry(() => import('./pages/topics/DimensionsGuide'));
const ProjectionGraph = lazyWithRetry(() => import('./pages/topics/ProjectionGraph'));
const SavingsChart = lazyWithRetry(() => import('./pages/topics/SavingsChart'));
const SuccessIcon = lazyWithRetry(() => import('./pages/topics/SuccessIcon'));
const MetalCan = lazyWithRetry(() => import('./pages/topics/MetalCan'));
const Img = lazyWithRetry(() => import('./pages/topics/Img'));
const CustomPackagingDesignSpotlight8042 = lazyWithRetry(() => import('./pages/topics/CustomPackagingDesignSpotlight8042'));
const HowToStartPackagingJourney = lazyWithRetry(() => import('./pages/topics/HowToStartPackagingJourney'));
const RemiPackagingCaseStudy = lazyWithRetry(() => import('./pages/topics/RemiPackagingCaseStudy'));
const HollyBrandPackagingSuccess = lazyWithRetry(() => import('./pages/topics/HollyBrandPackagingSuccess'));
const JemmaSustainablePouchStory = lazyWithRetry(() => import('./pages/topics/JemmaSustainablePouchStory'));
const StephRetailPackagingShowcase = lazyWithRetry(() => import('./pages/topics/StephRetailPackagingShowcase'));
const CherylEcoDesignCase = lazyWithRetry(() => import('./pages/topics/CherylEcoDesignCase'));
const LeoCustomBagInnovation = lazyWithRetry(() => import('./pages/topics/LeoCustomBagInnovation'));
const DavidWholesalePouchExperience = lazyWithRetry(() => import('./pages/topics/DavidWholesalePouchExperience'));
const CoffeeValveClosureTechnology = lazyWithRetry(() => import('./pages/topics/CoffeeValveClosureTechnology'));

