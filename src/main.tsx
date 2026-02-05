import { StrictMode, Suspense, lazy, ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StoreProvider } from './store/StoreContext'
import { CalendlyProvider } from './contexts/CalendlyContext'
import { CustomQuoteProvider } from './contexts/CustomQuoteContext'
import './index.css'
import './i18n'

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
  '/features/reclosure-options': () => import('./pages/features/ReclosureOptionsPage'),
  '/features/surface-finish': () => import('./pages/features/SurfaceFinishPage'),
  '/features/barrier-options': () => import('./pages/features/BarrierOptionsPage'),
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
const UnsubscribePage = lazyWithRetry(() => import('./pages/UnsubscribePage'))

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
const KraftHighBarrierPage = lazyWithRetry(() => import('./pages/materials/KraftHighBarrierPage'))

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

// Function Pages - Lazy loaded
const MicrowaveSteamBagsPage = lazyWithRetry(() => import('./pages/function/MicrowaveSteamBagsPage'))
const CarbonNeutralBagsPage = lazyWithRetry(() => import('./pages/function/CarbonNeutralBagsPage'))
const SpoutPouchesJuicePage = lazyWithRetry(() => import('./pages/function/SpoutPouchesJuicePage'))
const ChildResistantBagsPage = lazyWithRetry(() => import('./pages/function/ChildResistantBagsPage'))
const PreZipperedRollstockPage = lazyWithRetry(() => import('./pages/function/PreZipperedRollstockPage'))
const DigitalPrintedRetortBagsPage = lazyWithRetry(() => import('./pages/function/DigitalPrintedRetortBagsPage'))
const RicePaperBagsPage = lazyWithRetry(() => import('./pages/function/RicePaperBagsPage'))
const PVAWaterSolubleBagsPage = lazyWithRetry(() => import('./pages/function/PVAWaterSolubleBagsPage'))

// Lab Pages - Lazy loaded
const LateralFilterBagsPage = lazyWithRetry(() => import('./pages/lab/LateralFilterBagsPage'))
const WireClosureBagsPage = lazyWithRetry(() => import('./pages/lab/WireClosureBagsPage'))
const LabBlenderBagsPage = lazyWithRetry(() => import('./pages/lab/LabBlenderBagsPage'))

// Legal Pages - Lazy loaded
const PrivacyPolicyPage = lazyWithRetry(() => import('./pages/legal/PrivacyPolicyPage'))
const ShippingPolicyPage = lazyWithRetry(() => import('./pages/legal/ShippingPolicyPage'))
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

// Support Pages - Lazy loaded
const FAQsPage = lazyWithRetry(() => import('./pages/support/FAQsPage'))
const LeadTimePage = lazyWithRetry(() => import('./pages/support/LeadTimePage'))

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
const CompostableStandUpPouchesPage = lazyWithRetry(() => import('./pages/products/CompostableStandUpPouchesPage'))
const RecyclableMonoMaterialPage = lazyWithRetry(() => import('./pages/products/RecyclableMonoMaterialPage'))
const CoffeeBagsDegassingValvePage = lazyWithRetry(() => import('./pages/products/CoffeeBagsDegassingValvePage'))
const LowMOQPackagingPage = lazyWithRetry(() => import('./pages/products/LowMOQPackagingPage'))
const CustomLabelsPage = lazyWithRetry(() => import('./pages/products/CustomLabelsPage'))
const CustomStickersPage = lazyWithRetry(() => import('./pages/products/CustomStickersPage'))
const LabelsAndStickersPage = lazyWithRetry(() => import('./pages/products/LabelsAndStickersPage'))
const LabBagsPage = lazyWithRetry(() => import('./pages/products/LabBagsPage'))

// Solutions Pages - Persona Based SEO - Lazy loaded
const StartupFounderPage = lazyWithRetry(() => import('./pages/solutions/StartupFounderPage'))
const EcommerceBrandPage = lazyWithRetry(() => import('./pages/solutions/EcommerceBrandPage'))
const CorporateSustainabilityPage = lazyWithRetry(() => import('./pages/solutions/CorporateSustainabilityPage'))
const FoodManufacturerPage = lazyWithRetry(() => import('./pages/solutions/FoodManufacturerPage'))
const ProductDeveloperPage = lazyWithRetry(() => import('./pages/solutions/ProductDeveloperPage'))
const CoffeeRoasterPage = lazyWithRetry(() => import('./pages/solutions/CoffeeRoasterPage'))
const ArtisanProducerPage = lazyWithRetry(() => import('./pages/solutions/ArtisanProducerPage'))
const SnackBrandManagerPage = lazyWithRetry(() => import('./pages/solutions/SnackBrandManagerPage'))

// Topics Pages - AI Search Volume SEO - Lazy loaded
const EcoFriendlyFoodPackagingPage = lazyWithRetry(() => import('./pages/topics/EcoFriendlyFoodPackagingPage'))
const DTCSustainablePackagingPage = lazyWithRetry(() => import('./pages/topics/DTCSustainablePackagingPage'))
const GreenCoffeeMaterialsPage = lazyWithRetry(() => import('./pages/topics/GreenCoffeeMaterialsPage'))
const DigitalPrintingEcoPackagingPage = lazyWithRetry(() => import('./pages/topics/DigitalPrintingEcoPackagingPage'))
const RecyclableSnackPackagingPage = lazyWithRetry(() => import('./pages/topics/RecyclableSnackPackagingPage'))
const CustomPrintedSustainablePouchesPage = lazyWithRetry(() => import('./pages/topics/CustomPrintedSustainablePouchesPage'))
const EcoPackagingRegulationsPage = lazyWithRetry(() => import('./pages/topics/EcoPackagingRegulationsPage'))
const CustomCompostablePouchSuppliersPage = lazyWithRetry(() => import('./pages/topics/CustomCompostablePouchSuppliersPage'))
const LowMOQStartupPackagingPage = lazyWithRetry(() => import('./pages/topics/LowMOQStartupPackagingPage'))
const CompostableBabyFoodBagsPage = lazyWithRetry(() => import('./pages/topics/CompostableBabyFoodBagsPage'))

// Compostable Education Pages - Lazy loaded
const BiodegradableVsCompostablePage = lazyWithRetry(() => import('./pages/composting/BiodegradableVsCompostablePage'))
const CompostServiceFinderPage = lazyWithRetry(() => import('./pages/composting/CompostServiceFinderPage'))
const CompostingBenefitsPage = lazyWithRetry(() => import('./pages/composting/CompostingBenefitsPage'))
const CommercialCompostingPage = lazyWithRetry(() => import('./pages/composting/CommercialCompostingPage'))
const HomeVsIndustrialCompostPage = lazyWithRetry(() => import('./pages/composting/HomeVsIndustrialCompostPage'))
const PlasticFreePage = lazyWithRetry(() => import('./pages/composting/PlasticFreePage'))
const NaturalCelluloseFiberPage = lazyWithRetry(() => import('./pages/composting/NaturalCelluloseFiberPage'))

// Free Service Pages - Lazy loaded
const FreePackagingDesignPage = lazyWithRetry(() => import('./pages/free-service/FreePackagingDesignPage'))
const FreeWebsiteUpgradePage = lazyWithRetry(() => import('./pages/free-service/FreeWebsiteUpgradePage'))
const AchieveCoffeeDemoPage = lazyWithRetry(() => import('./pages/free-service/AchieveCoffeeDemoPage'))
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
const FreeServicesHubPage = lazyWithRetry(() => import('./pages/free-service/FreeServicesHubPage'))
const FreeServicesPage = lazyWithRetry(() => import('./pages/free-service/FreeServicesPage'))
const Product3DShowcasePage = lazyWithRetry(() => import('./pages/Product3DShowcasePage'))

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

// Prospect Finder Pages - Lazy loaded
const ProspectFinderPage = lazyWithRetry(() => import('./pages/admin/prospects/ProspectFinderPage'))
const ProspectListsPage = lazyWithRetry(() => import('./pages/admin/prospects/ProspectListsPage'))

// Shipment Document Hub Pages - Lazy loaded
const ShipmentHubPage = lazyWithRetry(() => import('./pages/admin/ShipmentHubPage'))
const ShipmentDetailPage = lazyWithRetry(() => import('./pages/admin/ShipmentDetailPage'))
const ShipmentTrackingPage = lazyWithRetry(() => import('./pages/ShipmentTrackingPage'))
const DocumentTemplatesPage = lazyWithRetry(() => import('./pages/admin/DocumentTemplatesPage'))
const ImageGeneratorPage = lazyWithRetry(() => import('./pages/admin/ImageGeneratorPage'))

// Cookie Consent Component
import CookieConsent from './components/CookieConsent'

createRoot(document.getElementById('root')!).render(
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
                      <Route path="/ctrl-x9k7m" element={<AdminPage />} />
                      <Route path="/ctrl-x9k7m/management" element={<OrderManagementPage />} />
                      <Route path="/ctrl-x9k7m/order-workflow" element={<OrderWorkflowPage />} />
                      <Route path="/ctrl-x9k7m/customer-map" element={<CustomerMapPage />} />
                      <Route path="/image-catalog" element={<ImageCatalogPage />} />
                      <Route path="/ctrl-x9k7m/artwork-hub" element={<ArtworkHubPage />} />
                      <Route path="/ctrl-x9k7m/artwork-batches" element={<ArtworkBatchesPage />} />
                      <Route path="/artwork-review/:batchId" element={<ArtworkReviewPage />} />
                      
                      {/* Prospect Finder Routes */}
                      <Route path="/ctrl-x9k7m/prospects" element={<ProspectFinderPage />} />
                      <Route path="/ctrl-x9k7m/prospects/lists" element={<ProspectListsPage />} />

                      {/* Shipment Document Hub Routes */}
                      <Route path="/ctrl-x9k7m/shipments" element={<ShipmentHubPage />} />
                      <Route path="/ctrl-x9k7m/shipments/:id" element={<ShipmentDetailPage />} />
                      <Route path="/ctrl-x9k7m/document-templates" element={<DocumentTemplatesPage />} />
                                            <Route path="/ctrl-x9k7m/ai-image" element={<ImageGeneratorPage />} />
                      <Route path="/shipment/:batchId" element={<ShipmentTrackingPage />} />

                      <Route path="/unsubscribe" element={<UnsubscribePage />} />

                      {/* Industry Pages */}
                      <Route path="/industry/coffee-tea" element={<CoffeeTeaPage />} />
                      <Route path="/industry/snacks-food" element={<SnacksFoodPage />} />
                      <Route path="/industry/pet-food" element={<PetFoodPage />} />
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
                      <Route path="/materials/kraft-high-barrier" element={<KraftHighBarrierPage />} />

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

                      {/* Function Pages */}
                      <Route path="/function/microwave-steam-bags" element={<MicrowaveSteamBagsPage />} />
                      <Route path="/function/carbon-neutral-bags" element={<CarbonNeutralBagsPage />} />
                      <Route path="/function/spout-pouches-juice" element={<SpoutPouchesJuicePage />} />
                      <Route path="/function/child-resistant-bags" element={<ChildResistantBagsPage />} />
                      <Route path="/function/pre-zippered-rollstock" element={<PreZipperedRollstockPage />} />
                      <Route path="/function/digital-printed-retort-bags" element={<DigitalPrintedRetortBagsPage />} />
                      <Route path="/function/rice-paper-bags" element={<RicePaperBagsPage />} />
                      <Route path="/function/pva-water-soluble-bags" element={<PVAWaterSolubleBagsPage />} />

                      {/* Lab Pages */}
                      <Route path="/lab/lateral-filter-bags" element={<LateralFilterBagsPage />} />
                      <Route path="/lab/wire-closure-bags" element={<WireClosureBagsPage />} />
                      <Route path="/lab/lab-blender-bags" element={<LabBlenderBagsPage />} />

                      {/* Legal Pages */}
                      <Route path="/privacy" element={<PrivacyPolicyPage />} />
                      <Route path="/shipping" element={<ShippingPolicyPage />} />
                      <Route path="/cookie-policy" element={<CookiePolicyPage />} />

                      {/* Company Pages */}
                      <Route path="/company/about" element={<AboutPage />} />
                      <Route path="/company/b-corp" element={<BCorpPage />} />
                      <Route path="/company/bpi-certified" element={<BPICertifiedPage />} />
                      <Route path="/company/factory-tour" element={<FactoryTourPage />} />
                      <Route path="/company/certificates" element={<CertificatesPage />} />

                      {/* Team Pages */}
                      <Route path="/team/ryan-wong" element={<RyanWongPage />} />

                      {/* Knowledge Pages */}
                      <Route path="/knowledge/all-options" element={<AllOptionsPage />} />
                      <Route path="/knowledge/size-guide" element={<SizeGuidePage />} />
                      <Route path="/knowledge/pouch-sizing" element={<PouchSizingPage />} />
                      <Route path="/knowledge/printing-types" element={<PrintingTypesPage />} />
                      <Route path="/knowledge/workflow" element={<WorkflowPage />} />
                      <Route path="/knowledge/k-seal-stand-up-pouches" element={<KSealStandUpPouchesPage />} />
                      <Route path="/knowledge/white-ink-underprint" element={<WhiteInkUnderprintPage />} />
                                            <Route path="/knowledge/fin-seal-lap-seal" element={<FinSealLapSealPage />} />

                      {/* Support Pages */}
                      <Route path="/support/faqs" element={<FAQsPage />} />
                      <Route path="/support/lead-time" element={<LeadTimePage />} />

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
                      <Route path="/products/compostable-stand-up-pouches" element={<CompostableStandUpPouchesPage />} />
                      <Route path="/products/recyclable-mono-material-pouches" element={<RecyclableMonoMaterialPage />} />
                      <Route path="/products/coffee-bags-degassing-valve" element={<CoffeeBagsDegassingValvePage />} />
                      <Route path="/products/low-moq-packaging" element={<LowMOQPackagingPage />} />
                      <Route path="/products/custom-labels" element={<CustomLabelsPage />} />
                      <Route path="/products/custom-stickers" element={<CustomStickersPage />} />
                      <Route path="/products/labels-and-stickers" element={<LabelsAndStickersPage />} />
                      <Route path="/products/lab-bags" element={<LabBagsPage />} />

                      {/* Solutions Pages - Persona Based SEO */}
                      <Route path="/solutions/startup-founder" element={<StartupFounderPage />} />
                      <Route path="/solutions/ecommerce-brand" element={<EcommerceBrandPage />} />
                      <Route path="/solutions/corporate-sustainability" element={<CorporateSustainabilityPage />} />
                      <Route path="/solutions/food-manufacturer" element={<FoodManufacturerPage />} />
                      <Route path="/solutions/product-developer" element={<ProductDeveloperPage />} />
                      <Route path="/solutions/coffee-roaster" element={<CoffeeRoasterPage />} />
                      <Route path="/solutions/artisan-producer" element={<ArtisanProducerPage />} />
                      <Route path="/solutions/snack-brand-manager" element={<SnackBrandManagerPage />} />

                      {/* Topics Pages - AI Search Volume SEO */}
                      <Route path="/topics/eco-friendly-food-packaging" element={<EcoFriendlyFoodPackagingPage />} />
                      <Route path="/topics/dtc-sustainable-packaging" element={<DTCSustainablePackagingPage />} />
                      <Route path="/topics/green-coffee-materials" element={<GreenCoffeeMaterialsPage />} />
                      <Route path="/topics/digital-printing-eco-packaging" element={<DigitalPrintingEcoPackagingPage />} />
                      <Route path="/topics/recyclable-snack-packaging" element={<RecyclableSnackPackagingPage />} />
                      <Route path="/topics/custom-printed-sustainable-pouches" element={<CustomPrintedSustainablePouchesPage />} />
                      <Route path="/topics/eco-packaging-regulations" element={<EcoPackagingRegulationsPage />} />
                      <Route path="/topics/compostable-pouch-suppliers" element={<CustomCompostablePouchSuppliersPage />} />
                      <Route path="/topics/low-moq-startup-packaging" element={<LowMOQStartupPackagingPage />} />
                      <Route path="/topics/compostable-baby-food-bags" element={<CompostableBabyFoodBagsPage />} />

                      {/* Compostable Education Pages */}
                      <Route path="/composting/biodegradable-vs-compostable" element={<BiodegradableVsCompostablePage />} />
                      <Route path="/composting/composting-services" element={<CompostServiceFinderPage />} />
                      <Route path="/composting/composting-benefits" element={<CompostingBenefitsPage />} />
                      <Route path="/composting/commercial-composting" element={<CommercialCompostingPage />} />
                      <Route path="/composting/home-vs-industrial-compostable" element={<HomeVsIndustrialCompostPage />} />
                      <Route path="/composting/plastic-free" element={<PlasticFreePage />} />
                      <Route path="/composting/natural-cellulose-fiber" element={<NaturalCelluloseFiberPage />} />

                      {/* Free Service Pages */}
                      <Route path="/free-service/packaging-design-consultation" element={<FreePackagingDesignPage />} />
                      <Route path="/free-service/website-upgrade" element={<FreeWebsiteUpgradePage />} />
                      <Route path="/free-service/achieve-coffee-demo" element={<AchieveCoffeeDemoPage />} />
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
          <Route path="/free-service/free-services-hub" element={<FreeServicesHubPage />} />
                                            <Route path="/free-service" element={<FreeServicesPage />} />
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
