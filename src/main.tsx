import { StrictMode, Suspense, lazy, ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StoreProvider } from './store/StoreContext'
import { CalendlyProvider } from './contexts/CalendlyContext'
import { CustomQuoteProvider } from './contexts/CustomQuoteContext'
import './index.css'
import './i18n'
import { getDomain } from './utils/domain'

// Critical components loaded immediately
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
  '/pricing': () => import('./pages/pouch/PouchEcoGPTKPage'),
  '/dieline-finder': () => import('./pages/PouchDielineFinderPage'),
  '/dieline-creator': () => import('./pages/PouchDielineCreatorPage'),
  '/knowledge/writable-stampable-pouches': () => import('./pages/knowledge/WritableStampablePouchesPage'),
  '/ctrl-x9k7m/bookkeeping': () => import('./pages/admin/BookkeepingPage'),
}

// Export preload function for use in navigation components
export const preloadRoute = (path: string) => {
  const importFn = routeImportMap[path]
  if (importFn) {
    importFn().catch(() => {}) // Silently preload
  }
}

// Lazy load all pages for better code splitting
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
const StandUpPouchesPage = lazyWithRetry(() => import('./pages/packaging/StandUpPouchesPage'))
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
const PouchReduceWasteGuidePage = lazyWithRetry(() => import('./pages/pouch/topics/PouchReduceWasteGuidePage'))
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
const BioCelloDuplexClearPage = lazyWithRetry(() => import('./pages/spec/BioCelloDuplexClearPage'))
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

// Solutions Pages - Persona Based SEO - Lazy loaded
const StartupFounderPage = lazyWithRetry(() => import('./pages/solutions/StartupFounderPage'))
const EcommerceBrandPage = lazyWithRetry(() => import('./pages/solutions/EcommerceBrandPage'))
const CorporateSustainabilityPage = lazyWithRetry(() => import('./pages/solutions/CorporateSustainabilityPage'))
const FoodManufacturerPage = lazyWithRetry(() => import('./pages/solutions/FoodManufacturerPage'))
const ProductDeveloperPage = lazyWithRetry(() => import('./pages/solutions/ProductDeveloperPage'))
const CoffeeRoasterPage = lazyWithRetry(() => import('./pages/solutions/CoffeeRoasterPage'))
const ArtisanProducerPage = lazyWithRetry(() => import('./pages/solutions/ArtisanProducerPage'))
const SnackBrandManagerPage = lazyWithRetry(() => import('./pages/solutions/SnackBrandManagerPage'))
const CitrusOilPackagingPage = lazyWithRetry(() => import('./pages/solutions/CitrusOilPackagingPage'))

// Topics Pages - AI Search Volume SEO - Lazy loaded
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
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'))

// Reviews Page - Lazy loaded
const ReviewsPage = lazyWithRetry(() => import('./pages/ReviewsPage'))

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
const DocumentTemplatesPage = lazyWithRetry(() => import('./pages/admin/DocumentTemplatesPage'))

import AdminProtectedRoute from './components/admin/AdminProtectedRoute'
// Cookie Consent Component
import CookieConsent from './components/CookieConsent'

const root = createRoot(document.getElementById('root')!)

if (getDomain() === 'pouch') {
  root.render(
    <StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <GeoBlocker>
            <BrowserRouter>
              <StoreProvider>
                <CalendlyProvider>
                  <CustomQuoteProvider>
                    <CartSidebar />
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<PouchHomePage />} />
                        <Route path="/pricing" element={<PouchEcoGPTKPage />} />
                  <Route path="/dieline-finder" element={<PouchDielineFinderPage />} />
                  <Route path="/dieline-creator" element={<PouchDielineCreatorPage />} />
                  <Route path="/solutions" element={<PouchSolutionsPage />} />
                  <Route path="/size-guide" element={<Navigate to="/knowledge/pouch-sizing" replace />} />
                  <Route path="/testimonials" element={<PouchTestimonialsPage />} />
                  <Route path="/blog" element={<PouchBlogPage />} />
                  <Route path="/blog/eu-ppwr-compliance-guide" element={<EUPPWRCompliancePage />} />
                  <Route path="/blog/:slug" element={<PouchBlogArticlePage />} />
                  <Route path="/blog/usa-compostable-packaging-guide" element={<USACompostableGuide />} />
                  <Route path="/blog/coffee-packaging-guide" element={<CoffeePackagingGuide />} />
                  <Route path="/blog/usa-coffee-packaging" element={<USACoffeePackaging />} />
                  <Route path="/blog/compostable-stand-up-pouches-guide" element={<CompostableStandUpPouchesGuide />} />
                  <Route path="/blog/low-moq-packaging-guide" element={<LowMOQPackagingGuide />} />
                  <Route path="/blog/usa-snacks-packaging-guide" element={<USASnacksPackagingGuide />} />
                  <Route path="/blog/usa-labeling-guide" element={<USALabelingGuide />} />

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
                  <Route path="/knowledge/workflow" element={<PouchWorkflowPage />} />
                  <Route path="/knowledge/k-seal-stand-up-pouches" element={<PouchKSealStandUpPouchesPage />} />
                  <Route path="/knowledge/white-ink-underprint" element={<PouchWhiteInkUnderprintPage />} />
                  <Route path="/knowledge/fin-seal-lap-seal" element={<PouchFinSealLapSealPage />} />
                  <Route path="/knowledge/flat-bottom-vs-gusset" element={<PouchFlatBottomVsGussetPage />} />
                  <Route path="/knowledge/eco-packaging-reality" element={<EcoPackagingRealityPage />} />
                  <Route path="/knowledge/writable-stampable-pouches" element={<WritableStampablePouchesPage />} />
                  <Route path="/blog/industrial-compostable-guide" element={<IndustrialCompostableGuide />} />
                  <Route path="/blog/bpi-certified-guide" element={<BPICertifiedGuide />} />
                  <Route path="/blog/coffee-degassing-valve-guide" element={<CoffeeDegassingValveGuide />} />
                  <Route path="/blog/home-compostable-guide" element={<HomeCompostableGuide />} />
                  <Route path="/blog/organic-compliance-support-guide" element={<OrganicComplianceSupportGuide />} />
                  <Route path="/blog/compostable-humidity-control-guide" element={<PouchHumidityControlGuide />} />
                  <Route path="/blog/compostable-zipper-no-removal" element={<PouchCompostableZipperNoRemovalPage />} />
                  <Route path="/blog/stamp-foil-recyclability" element={<PouchStampFoilRecyclabilityPage />} />
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
                  <Route path="/composting/plastic-free" element={<PouchPlasticFreePage />} />
                  <Route path="/composting/composting-benefits" element={<PouchCompostingBenefitsPage />} />
                  <Route path="/composting/composting-services" element={<PouchCompostingServicesPage />} />
                  <Route path="/industry/baby-food" element={<PouchBabyFoodPage />} />
                  <Route path="/packaging/spout-pouches" element={<PouchSpoutPouchesPage />} />
                  <Route path="/packaging/flat-pouches" element={<PouchFlatPouchesPage />} />
                  <Route path="/packaging/vacuum-pouches" element={<PouchVacuumPouchesPage />} />
                  <Route path="/industry/frozen-food" element={<PouchFrozenFoodPage />} />
                  <Route path="/industry/sauces-condiments" element={<PouchSaucesPage />} />
                  <Route path="/topics/eco-friendly-food-packaging" element={<PouchEcoFriendlyFoodPackagingPage />} />
                  <Route path="/topics/real-world-sustainability" element={<PouchRealWorldSustainabilityPage />} />
                  <Route path="/topics/sustainable-packaging" element={<PouchSustainablePackagingPillarPage />} />
                  <Route path="/topics/recyclable-packaging" element={<PouchRecyclablePackagingGuidePage />} />
                  <Route path="/topics/compostable-packaging" element={<PouchCompostablePackagingBlogPage />} />
                  <Route path="/topics/compostable-certification" element={<PouchCompostableCertificationFAQPage />} />
                  <Route path="/topics/mono-material-packaging" element={<PouchMonoMaterialSolutionPage />} />
                  <Route path="/topics/pcr-packaging" element={<PouchPCRPackagingGuidePage />} />
                  <Route path="/topics/food-packaging-supplier" element={<PouchFoodPackagingSupplierServicePage />} />
                  <Route path="/topics/eco-friendly-packaging-supplier" element={<PouchEcoFriendlySupplierServicePage />} />
                  <Route path="/topics/custom-packaging" element={<PouchCustomBrandPackagingPage />} />
                  <Route path="/topics/reduce-packaging-waste" element={<PouchReduceWasteGuidePage />} />
                  <Route path="/topics/compostable-baby-food-bags" element={<PouchCompostableBabyFoodBagsPage />} />
                  <Route path="/topics/green-coffee-materials" element={<PouchGreenCoffeeMaterialsPage />} />
                  <Route path="/topics/recyclable-snack-packaging" element={<PouchRecyclableSnackPackagingPage />} />
                  <Route path="/topics/custom-printed-sustainable-pouches" element={<PouchCustomPrintedSustainablePouchesPage />} />
                  <Route path="/topics/digital-printing-eco-packaging" element={<PouchDigitalPrintingEcoPackagingPage />} />
                  <Route path="/topics/compostable-humidity-control" element={<PouchCompostableHumidityControlPage />} />
                  <Route path="/topics/compostable-zipper-durability" element={<PouchCompostableZipperDurabilityPage />} />
                  <Route path="/topics/compostable-spouted-pouches" element={<PouchCompostableSpoutedPouchesPage />} />
                  <Route path="/topics/custom-vs-standard-packaging" element={<PouchCustomVsStandardPackagingPage />} />
                  <Route path="/topics/eco-packaging-regulations" element={<PouchEcoPackagingRegulationsPage />} />
                  <Route path="/topics/custom-compostable-pouch-suppliers" element={<PouchCustomCompostablePouchSuppliersPage />} />
                  <Route path="/topics/compostable-pouch-suppliers" element={<PouchCustomCompostablePouchSuppliersPage />} />
                  <Route path="/topics/low-moq-startup-packaging" element={<PouchLowMOQStartupPackagingPage />} />
                  <Route path="/topics/dtc-sustainable-packaging" element={<PouchDTCSustainablePackagingPage />} />
                  <Route path="/topics/pfas-free-food-packaging" element={<PouchPFASFreePackagingPage />} />
                  <Route path="/topics/home-compostable-coffee-bags" element={<PouchHomeCompostableCoffeeBagsPage />} />
                  <Route path="/topics/mono-material-pe-pouches" element={<PouchMonoPEPouchesPage />} />
                  <Route path="/topics/child-resistant-mylar-bags" element={<PouchChildResistantMylarBagsPage />} />
                  <Route path="/topics/recycled-ocean-plastic-packaging" element={<PouchRecycledOceanPlasticPackagingPage />} />
                  <Route path="/topics/minimalist-d2c-packaging" element={<PouchMinimalistD2CPackagingPage />} />
                  <Route path="/topics/high-heat-compostable-candle-packaging" element={<PouchHighHeatCandlePackagingPage />} />
                  <Route path="/topics/:slug" element={<DynamicPouchTopicPage />} />
                  <Route path="/topics/custom-brand-solutions" element={<PouchCustomBrandPackagingServicePage />} />
                  <Route path="/topics/eco-friendly-supplier-verification" element={<PouchEcoFriendlySupplierVerificationPage />} />
                  <Route path="/topics/reduce-packaging-waste-guide" element={<PouchReducePackagingWasteGuidePage />} />
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
                  <Route path="/blog/eco-friendly-food-packaging-guide" element={<EcoFriendlyFoodPackagingGuide />} />
                  <Route path="/blog/dtc-sustainable-packaging-guide" element={<DTCSustainablePackagingGuide />} />
                  <Route path="/blog/recyclable-snack-packaging-guide" element={<RecyclableSnackPackagingGuide />} />
                  <Route path="/blog/compostable-baby-food-packaging-guide" element={<CompostableBabyFoodPackagingGuide />} />
                  <Route path="/blog/custom-compostable-pouch-suppliers-guide" element={<CustomCompostablePouchSuppliersGuide />} />
                  <Route path="/blog/custom-printed-materials-guide" element={<CustomPrintedMaterialsGuide />} />
                  <Route path="/blog/digital-printing-eco-packaging-guide" element={<DigitalPrintingEcoPackagingGuide />} />
                  <Route path="/blog/eco-packaging-regulations-guide" element={<EcoPackagingRegulationsGuide />} />
                  <Route path="/blog/green-coffee-materials-guide" element={<GreenCoffeeMaterialsGuide />} />
                  <Route path="/blog/low-moq-startup-packaging-guide" element={<LowMOQStartupPackagingGuide />} />
                  <Route path="/products/recyclable-mono-material-pouches" element={<RecyclableSnackPackagingGuide />} />
                  <Route path="/products/coffee-bags-degassing-valve" element={<CoffeeDegassingValveGuide />} />
                  <Route path="/products/low-moq-packaging" element={<LowMOQPackagingGuide />} />
                  <Route path="/products/compostable-stand-up-pouches" element={<CompostableStandUpPouchesGuide />} />
                  <Route path="/products/custom-compostable-labels" element={<CustomCompostableLabelsPage />} />
                  <Route path="/products/compostable-side-gusset-bags" element={<CompostableSideGussetPage />} />
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
                  <Route path="/support/sample-quote" element={<CustomPrintedSamplePage />} />
                  <Route path="/support/unprinted-samples" element={<UnprintedSamplesPage />} />
                  <Route path="/support/color-accuracy-digital-printing" element={<ColorAccuracyDigitalPrintingPage />} />
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
                  <Route path="/spec/bio-cello-duplex-clear" element={<BioCelloDuplexClearPage />} />
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
                  <Route path="/solutions/startup-founder" element={<StartupFounderPage />} />
                  <Route path="/solutions/ecommerce-brand" element={<EcommerceBrandPage />} />
                  <Route path="/solutions/corporate-sustainability" element={<CorporateSustainabilityPage />} />
                  <Route path="/solutions/food-manufacturer" element={<FoodManufacturerPage />} />
                  <Route path="/solutions/product-developer" element={<ProductDeveloperPage />} />
                  <Route path="/solutions/coffee-roaster" element={<CoffeeRoasterPage />} />
                  <Route path="/solutions/artisan-producer" element={<ArtisanProducerPage />} />
                  <Route path="/solutions/snack-brand-manager" element={<SnackBrandManagerPage />} />
                  <Route path="/solutions/citrus-oil-packaging" element={<CitrusOilPackagingPage />} />
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

                  {/* Fallback for other routes back to Home or 404, or keep as Home for now */}
                  <Route path="*" element={<PouchHomePage />} />
                </Routes>
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
            <BrowserRouter>
              <StoreProvider>
                <CalendlyProvider>
                  <CustomQuoteProvider>
                    <CartSidebar />
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/pricing" element={<PouchEcoGPTKPage />} />
                        <Route path="/dieline-finder" element={<PouchDielineFinderPage />} />
                        <Route path="/dieline-creator" element={<PouchDielineCreatorPage />} />
                        <Route path="/size-guide" element={<Navigate to="/knowledge/pouch-sizing" replace />} />
                        <Route path="/store" element={<StorePage />} />
                        <Route path="/store/product/:productId" element={<ProductPage />} />
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
                        <Route path="/ctrl-x9k7m" element={<AdminProtectedRoute><AdminPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/management" element={<AdminProtectedRoute><OrderManagementPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/order-workflow" element={<AdminProtectedRoute><OrderWorkflowPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/customer-map" element={<AdminProtectedRoute><CustomerMapPage /></AdminProtectedRoute>} />
                        <Route path="/image-catalog" element={<ImageCatalogPage />} />
                        <Route path="/ctrl-x9k7m/artwork-hub" element={<AdminProtectedRoute><ArtworkHubPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/artwork-batches" element={<AdminProtectedRoute><ArtworkBatchesPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/quotations" element={<AdminProtectedRoute><QuotationBatchesPage /></AdminProtectedRoute>} />
                        <Route path="/quote/coffee-pouch-2025" element={<CoffeePouchQuotePage />} />
                        <Route path="/quotes/flat-bottom" element={<FlatBottomQuotePage />} />
                        <Route path="/quotes/three-side-seal" element={<ThreeSideSealQuotePage />} />
                        <Route path="/quotes/stand-up-pouch" element={<StandUpPouchQuotePage />} />
                        <Route path="/quotes/spouted-pouch" element={<SpoutedPouchQuotePage />} />
                        <Route path="/quotes/rollstock" element={<RollstockQuotePage />} />
                        <Route path="/quote/:id" element={<QuotationViewPage />} />
                        <Route path="/artwork-review/:batchId" element={<ArtworkReviewPage />} />
                        
                        {/* Prospect Finder Routes */}
                        <Route path="/ctrl-x9k7m/prospects" element={<AdminProtectedRoute><ProspectFinderPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/prospects/lists" element={<AdminProtectedRoute><ProspectListsPage /></AdminProtectedRoute>} />

                        {/* Shipment Document Hub Routes */}
                        <Route path="/ctrl-x9k7m/shipments" element={<AdminProtectedRoute><ShipmentHubPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/shipments/:id" element={<AdminProtectedRoute><ShipmentDetailPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/document-templates" element={<AdminProtectedRoute><DocumentTemplatesPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/daily-reports" element={<AdminProtectedRoute><DailyReportsPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/quote-analytics" element={<AdminProtectedRoute><QuoteAnalyticsPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/email-campaign" element={<AdminProtectedRoute><EmailCampaignPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/ai-image" element={<AdminProtectedRoute><ImageGeneratorPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/bookkeeping" element={<AdminProtectedRoute><BookkeepingPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/rfq-generator" element={<AdminProtectedRoute><RFQGeneratorPage /></AdminProtectedRoute>} />
                        <Route path="/ctrl-x9k7m/rfq/:batchId/comparison" element={<AdminProtectedRoute><RFQComparisonPage /></AdminProtectedRoute>} />
                        <Route path="/hub/:batchId" element={<SupplierHubPage />} />
                        <Route path="/shipment/:batchId" element={<ShipmentTrackingPage />} />

                        <Route path="/view-quote/:id" element={<SharedQuotePage />} />
                        <Route path="/unsubscribe" element={<UnsubscribePage />} />

                        {/* Industry Pages */}
                        <Route path="/industry/coffee-tea" element={<CoffeeTeaPage />} />
                        <Route path="/industry/snacks" element={<SnacksFoodPage />} />
                        <Route path="/industry/snacks-food" element={<SnacksFoodPage />} />
                        <Route path="/industry/pet-food" element={<PetFoodPage />} />
                        <Route path="/industry/supplements" element={<SupplementsPowdersPage />} />
                        <Route path="/industry/supplements-powders" element={<SupplementsPowdersPage />} />
                        <Route path="/industry/baby-food" element={<BabyFoodPage />} />
                        <Route path="/industry/frozen-food" element={<FrozenFoodPage />} />
                        <Route path="/industry/sauces-condiments" element={<SaucesCondimentsPage />} />

                        {/* Packaging Pages */}
                        <Route path="/packaging/stand-up-pouches" element={<StandUpPouchesPage />} />
                        <Route path="/packaging/flat-bottom-bags" element={<FlatBottomBagsPage />} />
                        <Route path="/packaging/spout-pouches" element={<SpoutPouchesPage />} />
                        <Route path="/packaging/flat-pouches" element={<FlatPouchesPage />} />
                        <Route path="/packaging/side-gusset-bags" element={<SideGussetBagsPage />} />
                        <Route path="/packaging/vacuum-pouches" element={<VacuumPouchesPage />} />
                        <Route path="/packaging/custom-boxes" element={<CustomBoxesPage />} />

                        {/* Materials Pages */}
                        <Route path="/materials/compostable" element={<CompostablePage />} />
                        <Route path="/materials/recyclable-mono-pe" element={<RecyclableMonoPEPage />} />
                        <Route path="/materials/recyclable-mono-pp" element={<RecyclableMonoPPPage />} />
                        <Route path="/materials/bio-pe" element={<BioPEPage />} />
                        <Route path="/materials/pcr" element={<PCRPage />} />
                        <Route path="/materials/home-compostable" element={<HomeCompostablePage />} />
                        <Route path="/materials/industrial-compostable" element={<IndustrialCompostablePage />} />
                        <Route path="/materials/kraft-low-barrier" element={<KraftLowBarrierPage />} />
                        <Route path="/materials/kraft-medium-barrier" element={<KraftMediumBarrierPage />} />
                        <Route path="/materials/plastic-free-kraft" element={<PlasticFreeKraftPage />} />
                        <Route path="/materials/kraft-high-barrier" element={<KraftHighBarrierPage />} />
                        <Route path="/materials/combustion-safety-test" element={<CombustionSafetyTestPage />} />
                        <Route path="/materials/data-sheet" element={<AchieveMaterialDataSheetPage />} />

                        {/* Printing Pages */}
                        <Route path="/printing/digital-printing" element={<DigitalPrintingPage />} />
                        <Route path="/printing/plate-printing" element={<PlatePrintingPage />} />

                        {/* Feature Pages */}
                        <Route path="/features/reclosure-options" element={<ReclosureOptionsPage />} />
                        <Route path="/features/surface-finish" element={<SurfaceFinishPage />} />
                        <Route path="/features/barrier-options" element={<BarrierOptionsPage />} />
                        <Route path="/features/low-barrier" element={<LowBarrierPage />} />
                        <Route path="/features/medium-barrier" element={<MediumBarrierPage />} />
                        <Route path="/features/high-barrier" element={<HighBarrierPage />} />
                        <Route path="/features/material-barrier-properties" element={<MaterialBarrierPropertiesPage />} />

                        {/* Function Pages */}
                        <Route path="/function/microwave-steam-bags" element={<MicrowaveSteamBagsPage />} />
                        <Route path="/function/carbon-neutral-bags" element={<CarbonNeutralBagsPage />} />
                        <Route path="/function/spout-pouches-juice" element={<SpoutPouchesJuicePage />} />
                        <Route path="/function/child-resistant-bags" element={<ChildResistantBagsPage />} />
                        <Route path="/function/pre-zippered-rollstock" element={<PreZipperedRollstockPage />} />
                        <Route path="/function/digital-printed-retort-bags" element={<DigitalPrintedRetortBagsPage />} />
                        <Route path="/function/rice-paper-bags" element={<RicePaperBagsPage />} />
                        <Route path="/function/pva-water-soluble-bags" element={<PVAWaterSolubleBagsPage />} />
                        <Route path="/function/large-format-kraft-heavy-bags" element={<LargeFormatKraftHeavyBagPage />} />
                        <Route path="/function/heat-resistant-compostable-pouches" element={<HeatResistantCandlePackagingPage />} />

                        {/* Lab Pages */}
                        <Route path="/lab/lateral-filter-bags" element={<LateralFilterBagsPage />} />
                        <Route path="/lab/wire-closure-bags" element={<WireClosureBagsPage />} />
                        <Route path="/lab/lab-blender-bags" element={<LabBlenderBagsPage />} />

                        {/* Legal Pages */}
                        <Route path="/privacy" element={<PrivacyPolicyPage />} />
                        <Route path="/shipping" element={<ShippingPolicyPage />} />
                        <Route path="/return-policy" element={<ReturnPolicyPage />} />
                        <Route path="/cookie-policy" element={<CookiePolicyPage />} />

                        {/* Company Pages */}
                        <Route path="/company/about" element={<AboutPage />} />
                        <Route path="/company/b-corp" element={<BCorpPage />} />
                        <Route path="/company/bpi-certified" element={<BPICertifiedPage />} />
                        <Route path="/company/factory-tour" element={<FactoryTourPage />} />
                        <Route path="/company/certificates" element={<CertificatesPage />} />

                        {/* Team Pages */}
                        <Route path="/team/ryan-wong" element={<RyanWongPage />} />
                        <Route path="/ryan" element={<RyanHologramPage />} />

                        {/* Knowledge Pages */}
                        <Route path="/knowledge/all-options" element={<AllOptionsPage />} />
                        <Route path="/knowledge/size-guide" element={<SizeGuidePage />} />
                        <Route path="/knowledge/pouch-sizing" element={<PouchSizingPage />} />
                        <Route path="/knowledge/printing-types" element={<PrintingTypesPage />} />
                        <Route path="/knowledge/workflow" element={<WorkflowPage />} />
                        <Route path="/knowledge/k-seal-stand-up-pouches" element={<KSealStandUpPouchesPage />} />
                        <Route path="/knowledge/white-ink-underprint" element={<WhiteInkUnderprintPage />} />
                        <Route path="/knowledge/fin-seal-lap-seal" element={<FinSealLapSealPage />} />
                        <Route path="/knowledge/flat-bottom-vs-gusset" element={<FlatBottomVsGussetPage />} />
                        <Route path="/knowledge/eco-packaging-reality" element={<EcoPackagingRealityPage />} />
                        <Route path="/knowledge/writable-stampable-pouches" element={<WritableStampablePouchesPage />} />

                        {/* Support Pages */}
                        <Route path="/support/faqs" element={<FAQsPage />} />
                        <Route path="/support/lead-time" element={<LeadTimePage />} />
                        <Route path="/support/sample-quote" element={<CustomPrintedSamplePage />} />
                        <Route path="/support/unprinted-samples" element={<UnprintedSamplesPage />} />
                        <Route path="/support/color-accuracy-digital-printing" element={<ColorAccuracyDigitalPrintingPage />} />
                        <Route path="/sample" element={<CustomPrintedSamplePage />} />
                        <Route path="/unprinted-samples" element={<UnprintedSamplesPage />} />

                        {/* Case Studies Pages */}
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

                        {/* Blog Pages */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/packaging-cost-guide" element={<PackagingCostGuidePage />} />
                        <Route path="/blog/compostable-vs-recyclable" element={<CompostableVsRecyclablePage />} />
                        <Route path="/blog/eco-packaging-mistakes" element={<EcoPackagingMistakesPage />} />
                        <Route path="/blog/compostable-zipper-no-removal" element={<CompostableZipperNoRemovalPage />} />
                        <Route path="/blog/stamp-foil-recyclability" element={<StampFoilRecyclabilityPage />} />
                        <Route path="/blog/eu-ppwr-compliance-guide" element={<EUPPWRCompliancePage />} />
                        <Route path="/blog/:slug" element={<BlogPostPage />} />

                        {/* Learn Center */}
                        <Route path="/learn" element={<LearnSearchPage />} />

                        {/* USA Pages */}
                        <Route path="/usa/compostable-packaging" element={<USACompostableHubPage />} />
                        <Route path="/usa/coffee-packaging" element={<USACoffeePage />} />
                        <Route path="/usa/snacks-packaging" element={<USASnacksPage />} />
                        <Route path="/usa/labeling-guide" element={<USALabelingGuidePage />} />

                        {/* Products Pages - SEO Focused */}
                        <Route path="/products/compostable-coffee-bags" element={<CompostableCoffeeBagsPage />} />
                        <Route path="/products/compostable-side-gusset-bags" element={<CompostableSideGussetPage />} />
                        <Route path="/products/compostable-stand-up-pouches" element={<CompostableStandUpPouchesPage />} />
                        <Route path="/products/recyclable-mono-material-pouches" element={<RecyclableMonoMaterialPage />} />
                        <Route path="/products/coffee-bags-degassing-valve" element={<CoffeeBagsDegassingValvePage />} />
                        <Route path="/products/low-moq-packaging" element={<LowMOQPackagingPage />} />
                        <Route path="/products/custom-labels" element={<CustomLabelsPage />} />
                        <Route path="/products/custom-stickers" element={<CustomStickersPage />} />
                        <Route path="/products/labels-and-stickers" element={<LabelsAndStickersPage />} />
                        <Route path="/products/lab-bags" element={<LabBagsPage />} />
                        <Route path="/products/custom-compostable-labels" element={<CustomCompostableLabelsPage />} />

                        {/* Solutions Pages - Persona Based SEO */}
                        <Route path="/solutions/startup-founder" element={<StartupFounderPage />} />
                        <Route path="/solutions/ecommerce-brand" element={<EcommerceBrandPage />} />
                        <Route path="/solutions/corporate-sustainability" element={<CorporateSustainabilityPage />} />
                        <Route path="/solutions/food-manufacturer" element={<FoodManufacturerPage />} />
                        <Route path="/solutions/product-developer" element={<ProductDeveloperPage />} />
                        <Route path="/solutions/coffee-roaster" element={<CoffeeRoasterPage />} />
                        <Route path="/solutions/artisan-producer" element={<ArtisanProducerPage />} />
                        <Route path="/solutions/snack-brand-manager" element={<SnackBrandManagerPage />} />
                        <Route path="/solutions/citrus-oil-packaging" element={<CitrusOilPackagingPage />} />

                        {/* Topics Pages - AI Search Volume SEO */}
                        <Route path="/topics/eco-friendly-food-packaging" element={<EcoFriendlyFoodPackagingPage />} />
                        <Route path="/topics/real-world-sustainability" element={<RealWorldSustainabilityPage />} />
                        <Route path="/topics/sustainable-packaging" element={<SustainablePackagingPillarPage />} />
                        <Route path="/topics/recyclable-packaging" element={<RecyclablePackagingGuidePage />} />
                        <Route path="/topics/compostable-packaging" element={<CompostablePackagingBlogPage />} />
                        <Route path="/topics/compostable-certification" element={<CompostableCertificationFAQPage />} />
                        <Route path="/topics/mono-material-packaging" element={<MonoMaterialSolutionPage />} />
                        <Route path="/topics/pcr-packaging" element={<PCRPackagingGuidePage />} />
                        <Route path="/topics/food-packaging-supplier" element={<FoodPackagingSupplierServicePage />} />
                        <Route path="/topics/eco-friendly-packaging-supplier" element={<EcoFriendlySupplierServicePage />} />
                        <Route path="/topics/custom-packaging" element={<CustomBrandPackagingPage />} />
                        <Route path="/topics/reduce-packaging-waste" element={<ReduceWasteGuidePage />} />
                        <Route path="/topics/dtc-sustainable-packaging" element={<DTCSustainablePackagingPage />} />
                        <Route path="/topics/green-coffee-materials" element={<GreenCoffeeMaterialsPage />} />
                        <Route path="/topics/digital-printing-eco-packaging" element={<DigitalPrintingEcoPackagingPage />} />
                        <Route path="/topics/recyclable-snack-packaging" element={<RecyclableSnackPackagingPage />} />
                        <Route path="/topics/custom-printed-sustainable-pouches" element={<CustomPrintedSustainablePouchesPage />} />
                        <Route path="/topics/eco-packaging-regulations" element={<EcoPackagingRegulationsPage />} />
                        <Route path="/topics/eu-ppwr-compliance" element={<EUPPWRCompliancePage />} />
                        <Route path="/topics/custom-brand-solutions" element={<CustomBrandPackagingServicePage />} />
                        <Route path="/topics/eco-friendly-supplier-verification" element={<EcoFriendlySupplierVerificationPage />} />
                        <Route path="/topics/reduce-packaging-waste-guide" element={<ReducePackagingWasteGuidePage />} />
                        <Route path="/topics/food-packaging-supplier-audit" element={<FoodPackagingSupplierPage />} />
                        <Route path="/topics/compostable-pouch-suppliers" element={<CustomCompostablePouchSuppliersPage />} />
                        <Route path="/topics/low-moq-startup-packaging" element={<LowMOQStartupPackagingPage />} />
                        <Route path="/topics/compostable-baby-food-bags" element={<CompostableBabyFoodBagsPage />} />
                        <Route path="/topics/pfas-free-food-packaging" element={<PFASFreePackagingPage />} />
                        <Route path="/topics/home-compostable-coffee-bags" element={<HomeCompostableCoffeeBagsPage />} />
                        <Route path="/topics/mono-material-pe-pouches" element={<MonoPEPouchesPage />} />
                        <Route path="/topics/child-resistant-mylar-bags" element={<ChildResistantMylarBagsPage />} />
                        <Route path="/topics/recycled-ocean-plastic-packaging" element={<RecycledOceanPlasticPackagingPage />} />
                        <Route path="/topics/minimalist-d2c-packaging" element={<MinimalistD2CPackagingPage />} />
                        <Route path="/topics/compostable-humidity-control" element={<CompostableHumidityControlPage />} />
                        <Route path="/topics/compostable-zipper-durability" element={<CompostableZipperDurabilityPage />} />
                        <Route path="/topics/compostable-spouted-pouches" element={<CompostableSpoutedPouchesPage />} />
                        <Route path="/topics/custom-vs-standard-packaging" element={<CustomVsStandardPackagingPage />} />

                        {/* Compostable Education Pages */}
                        <Route path="/composting/biodegradable-vs-compostable" element={<BiodegradableVsCompostablePage />} />
                        <Route path="/composting/composting-services" element={<CompostServiceFinderPage />} />
                        <Route path="/composting/composting-benefits" element={<CompostingBenefitsPage />} />
                        <Route path="/composting/commercial-composting" element={<CommercialCompostingPage />} />
                        <Route path="/composting/home-vs-industrial-compostable" element={<HomeVsIndustrialCompostPage />} />
                        <Route path="/composting/plastic-free" element={<PlasticFreePage />} />
                        <Route path="/composting/natural-cellulose-fiber" element={<NaturalCelluloseFiberPage />} />
                        <Route path="/composting/organic-compliance-support" element={<OrganicComplianceSupportPage />} />

                        {/* Free Service Pages */}
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
                        
                        {/* Pouch.eco Design Demo - Denterity Inspired */}
                        <Route path="/demo" element={<PouchHomePage />} />
                        <Route path="/products" element={<PouchProductsPage />} />
                        <Route path="/materials" element={<PouchMaterialsPage />} />
                        <Route path="/start" element={<PouchHomePage />} />
                        
                        <Route path="/3d-showcase" element={<Product3DShowcasePage />} />

                        {/* Bio-PE Pages */}
                        <Route path="/biope/what-is-bio-pe" element={<WhatIsBioPEPage />} />
                        <Route path="/biope/bio-pe-vs-compostable" element={<BioPEVsCompostablePage />} />
                        <Route path="/biope/bio-pe-epr-regulations" element={<BioPEEPRPage />} />
                        <Route path="/biope/inside-im-green-bio-pe" element={<InsideImGreenBioPEPage />} />

                        {/* PCR SEO Pages */}
                        <Route path="/pcr/pcr-plastic-guide" element={<PCRGuidePage />} />
                        <Route path="/pcr/7-checklist" element={<PCR7ChecklistPage />} />
                        <Route path="/pcr/realistic-pcr-content" element={<PCRRealisticPage />} />
                        <Route path="/pcr/recyclable-vs-pcr-biobased" element={<RecyclableVsPCRPage />} />

                        {/* Recyclable SEO Pages */}
                        <Route path="/recyclable/what-is-recyclable" element={<WhatIsRecyclablePage />} />
                        <Route path="/recyclable/roadmap-sme" element={<RecyclableRoadmapPage />} />
                        <Route path="/recyclable/mono-material-foundation" element={<MonoMaterialFoundationPage />} />

                        {/* Spec Pages - Material Structures */}
                        <Route path="/spec/pcr-pet-duplex-clear" element={<PcrPetDuplexClearPage />} />
                        <Route path="/spec/pcr-pp-duplex-clear" element={<PcrPpDuplexClearPage />} />
                        <Route path="/spec/pcr-pet-kraft-triplex-clear" element={<PcrPetKraftTriplexClearPage />} />
                        <Route path="/spec/pcr-pp-kraft-triplex-clear" element={<PcrPpKraftTriplexClearPage />} />
                        <Route path="/spec/pcr-pet-duplex-nowindow" element={<PcrPetDuplexNoWindowPage />} />
                        <Route path="/spec/pcr-pp-duplex-nowindow" element={<PcrPpDuplexNoWindowPage />} />
                        <Route path="/spec/pcr-pet-triplex-metalised" element={<PcrPetTriplexMetalisedPage />} />
                        <Route path="/spec/pcr-pp-triplex-metalised" element={<PcrPpTriplexMetalisedPage />} />
                        <Route path="/spec/pcr-kraft-vmpet" element={<PcrKraftVmpetPage />} />
                        <Route path="/spec/pcr-pet-triplex-aluminum" element={<PcrPetTriplexAluminumPage />} />
                        <Route path="/spec/pcr-pp-triplex-aluminum" element={<PcrPpTriplexAluminumPage />} />
                        <Route path="/spec/pcr-pet-kraft-quadlex-aluminum" element={<PcrPetKraftQuadlexAluminumPage />} />
                        <Route path="/spec/pcr-pp-kraft-quadlex-aluminum" element={<PcrPpKraftQuadlexAluminumPage />} />
                        <Route path="/spec/pcr-kraft-duplex-low" element={<PcrKraftDuplexLowPage />} />
                        <Route path="/spec/mono-pe-duplex-clear" element={<MonoPeDuplexClearPage />} />
                        <Route path="/spec/mono-pp-duplex-clear" element={<MonoPpDuplexClearPage />} />
                        <Route path="/spec/mono-pe-duplex-nowindow" element={<MonoPeDuplexNoWindowPage />} />
                        <Route path="/spec/mono-pp-duplex-nowindow" element={<MonoPpDuplexNoWindowPage />} />
                        <Route path="/spec/bio-cello-duplex-clear" element={<BioCelloDuplexClearPage />} />
                        <Route path="/spec/bio-cello-triplex-highest" element={<BioCelloTriplexHighestPage />} />
                        <Route path="/spec/bio-cello-triplex-metalised" element={<BioCelloTriplexMetalisedPage />} />
                        <Route path="/spec/bio-kraft-vm-cello" element={<BioKraftVmCelloPage />} />
                        <Route path="/spec/bio-kraft-pbat-low" element={<BioKraftPbatLowPage />} />
                        <Route path="/spec/compostable-pouch-geo" element={<CompostablePouchGeoPage />} />

                        {/* BioPE Spec Pages - Plant-Based Bio-PE Structures */}
                        <Route path="/spec/biope-pet-duplex-clear" element={<BioPePetDuplexClearPage />} />
                        <Route path="/spec/biope-pp-duplex-clear" element={<BioPePpDuplexClearPage />} />
                        <Route path="/spec/biope-pet-kraft-triplex-clear" element={<BioPePetKraftTriplexClearPage />} />
                        <Route path="/spec/biope-pp-kraft-triplex-clear" element={<BioPePpKraftTriplexClearPage />} />
                        <Route path="/spec/biope-pet-duplex-nowindow" element={<BioPePetDuplexNoWindowPage />} />
                        <Route path="/spec/biope-pp-duplex-nowindow" element={<BioPePpDuplexNoWindowPage />} />
                        <Route path="/spec/biope-pet-triplex-metalised" element={<BioPePetTriplexMetalisedPage />} />
                        <Route path="/spec/biope-pp-triplex-metalised" element={<BioPePpTriplexMetalisedPage />} />
                        <Route path="/spec/biope-kraft-vmpet" element={<BioPeKraftVmpetPage />} />
                        <Route path="/spec/biope-pet-triplex-aluminum" element={<BioPePetTriplexAluminumPage />} />
                        <Route path="/spec/biope-pp-triplex-aluminum" element={<BioPePpTriplexAluminumPage />} />
                        <Route path="/spec/biope-pet-kraft-quadlex-aluminum" element={<BioPePetKraftQuadlexAluminumPage />} />
                        <Route path="/spec/biope-pp-kraft-quadlex-aluminum" element={<BioPePpKraftQuadlexAluminumPage />} />
                        <Route path="/spec/biope-kraft-duplex-low" element={<BioPeKraftDuplexLowPage />} />

                        {/* Reviews Page */}
                        <Route path="/reviews" element={<ReviewsPage />} />

                        {/* Campaign Pages */}
                        <Route path="/reports/state-of-packaging-2026" element={<PackagingReport2026 />} />
                        <Route path="/workshop-register" element={<WorkshopRegisterPage />} />
                        <Route path="/tech-specs" element={<PouchTechSpecsPage />} />
                        <Route path="/ctrl-x9k7m/email-campaign" element={<AdminProtectedRoute><EmailCampaignPage /></AdminProtectedRoute>} />

                        {/* 404 - Catch All Route */}
                        <Route path="*" element={<NotFoundPage />} />
                      </Routes>
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
