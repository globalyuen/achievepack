import { StrictMode, Suspense, lazy } from 'react'
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

// Lazy load heavy widget
const PackagingAssistantWidget = lazy(() => import('./components/PackagingAssistantWidget'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">Loading...</p>
    </div>
  </div>
)

// Lazy load all pages for better code splitting
const StorePage = lazy(() => import('./pages/StorePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const AdminManagementPage = lazy(() => import('./pages/AdminManagementPage'))
const ImageCatalogPage = lazy(() => import('./pages/ImageCatalogPage'))

// Industry Pages - Lazy loaded
const CoffeeTeaPage = lazy(() => import('./pages/industry/CoffeeTeaPage'))
const SnacksFoodPage = lazy(() => import('./pages/industry/SnacksFoodPage'))
const PetFoodPage = lazy(() => import('./pages/industry/PetFoodPage'))
const SupplementsPowdersPage = lazy(() => import('./pages/industry/SupplementsPowdersPage'))
const BabyFoodPage = lazy(() => import('./pages/industry/BabyFoodPage'))
const FrozenFoodPage = lazy(() => import('./pages/industry/FrozenFoodPage'))
const SaucesCondimentsPage = lazy(() => import('./pages/industry/SaucesCondimentsPage'))

// Packaging Pages - Lazy loaded
const StandUpPouchesPage = lazy(() => import('./pages/packaging/StandUpPouchesPage'))
const FlatBottomBagsPage = lazy(() => import('./pages/packaging/FlatBottomBagsPage'))
const SpoutPouchesPage = lazy(() => import('./pages/packaging/SpoutPouchesPage'))
const FlatPouchesPage = lazy(() => import('./pages/packaging/FlatPouchesPage'))
const SideGussetBagsPage = lazy(() => import('./pages/packaging/SideGussetBagsPage'))
const VacuumPouchesPage = lazy(() => import('./pages/packaging/VacuumPouchesPage'))
const CustomBoxesPage = lazy(() => import('./pages/packaging/CustomBoxesPage'))

// Materials Pages - Lazy loaded
const CompostablePage = lazy(() => import('./pages/materials/CompostablePage'))
const RecyclableMonoPEPage = lazy(() => import('./pages/materials/RecyclableMonoPEPage'))
const RecyclableMonoPPPage = lazy(() => import('./pages/materials/RecyclableMonoPPPage'))
const BioPEPage = lazy(() => import('./pages/materials/BioPEPage'))
const PCRPage = lazy(() => import('./pages/materials/PCRPage'))
const HomeCompostablePage = lazy(() => import('./pages/materials/HomeCompostablePage'))
const IndustrialCompostablePage = lazy(() => import('./pages/materials/IndustrialCompostablePage'))
const KraftHighBarrierPage = lazy(() => import('./pages/materials/KraftHighBarrierPage'))

// Printing Pages - Lazy loaded
const DigitalPrintingPage = lazy(() => import('./pages/printing/DigitalPrintingPage'))
const PlatePrintingPage = lazy(() => import('./pages/printing/PlatePrintingPage'))

// Feature Pages - Lazy loaded
const ReclosureOptionsPage = lazy(() => import('./pages/features/ReclosureOptionsPage'))
const SurfaceFinishPage = lazy(() => import('./pages/features/SurfaceFinishPage'))
const BarrierOptionsPage = lazy(() => import('./pages/features/BarrierOptionsPage'))
const LowBarrierPage = lazy(() => import('./pages/features/LowBarrierPage'))
const MediumBarrierPage = lazy(() => import('./pages/features/MediumBarrierPage'))
const HighBarrierPage = lazy(() => import('./pages/features/HighBarrierPage'))

// Function Pages - Lazy loaded
const MicrowaveSteamBagsPage = lazy(() => import('./pages/function/MicrowaveSteamBagsPage'))
const CarbonNeutralBagsPage = lazy(() => import('./pages/function/CarbonNeutralBagsPage'))
const SpoutPouchesJuicePage = lazy(() => import('./pages/function/SpoutPouchesJuicePage'))
const ChildResistantBagsPage = lazy(() => import('./pages/function/ChildResistantBagsPage'))
const PreZipperedRollstockPage = lazy(() => import('./pages/function/PreZipperedRollstockPage'))
const DigitalPrintedRetortBagsPage = lazy(() => import('./pages/function/DigitalPrintedRetortBagsPage'))
const RicePaperBagsPage = lazy(() => import('./pages/function/RicePaperBagsPage'))
const PVAWaterSolubleBagsPage = lazy(() => import('./pages/function/PVAWaterSolubleBagsPage'))

// Legal Pages - Lazy loaded
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'))
const ShippingPolicyPage = lazy(() => import('./pages/legal/ShippingPolicyPage'))

// Company Pages - Lazy loaded
const AboutPage = lazy(() => import('./pages/company/AboutPage'))
const FactoryTourPage = lazy(() => import('./pages/company/FactoryTourPage'))
const CertificatesPage = lazy(() => import('./pages/company/CertificatesPage'))

// Knowledge Pages - Lazy loaded
const AllOptionsPage = lazy(() => import('./pages/knowledge/AllOptionsPage'))
const SizeGuidePage = lazy(() => import('./pages/knowledge/SizeGuidePage'))
const PouchSizingPage = lazy(() => import('./pages/knowledge/PouchSizingPage'))
const PrintingTypesPage = lazy(() => import('./pages/knowledge/PrintingTypesPage'))
const WorkflowPage = lazy(() => import('./pages/knowledge/WorkflowPage'))

// Support Pages - Lazy loaded
const FAQsPage = lazy(() => import('./pages/support/FAQsPage'))
const LeadTimePage = lazy(() => import('./pages/support/LeadTimePage'))

// Case Studies Pages - Lazy loaded
const CoffeeRoasteryCaseStudy = lazy(() => import('./pages/case-studies/CoffeeRoasteryCaseStudy'))
const TeaBrandCaseStudy = lazy(() => import('./pages/case-studies/TeaBrandCaseStudy'))
const SuperfoodBrandCaseStudy = lazy(() => import('./pages/case-studies/SuperfoodBrandCaseStudy'))
const PetTreatsCaseStudy = lazy(() => import('./pages/case-studies/PetTreatsCaseStudy'))
const ChocolateBrandCaseStudy = lazy(() => import('./pages/case-studies/ChocolateBrandCaseStudy'))
const CandleBrandCaseStudy = lazy(() => import('./pages/case-studies/CandleBrandCaseStudy'))
const BakeryCaseStudy = lazy(() => import('./pages/case-studies/BakeryCaseStudy'))
const WellnessBrandCaseStudy = lazy(() => import('./pages/case-studies/WellnessBrandCaseStudy'))
const OrganicNutsCaseStudy = lazy(() => import('./pages/case-studies/OrganicNutsCaseStudy'))
const BathProductsCaseStudy = lazy(() => import('./pages/case-studies/BathProductsCaseStudy'))
const AdaptogensCaseStudy = lazy(() => import('./pages/case-studies/AdaptogensCaseStudy'))
const OutdoorSnacksCaseStudy = lazy(() => import('./pages/case-studies/OutdoorSnacksCaseStudy'))

// Blog Pages - Lazy loaded
const BlogPage = lazy(() => import('./pages/blog/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage'))

// USA Pages - Lazy loaded
const USACompostableHubPage = lazy(() => import('./pages/usa/USACompostableHubPage'))
const USACoffeePage = lazy(() => import('./pages/usa/USACoffeePage'))
const USASnacksPage = lazy(() => import('./pages/usa/USASnacksPage'))
const USALabelingGuidePage = lazy(() => import('./pages/usa/USALabelingGuidePage'))

// Spec Pages - Material Structures - Lazy loaded
const PcrPetDuplexClearPage = lazy(() => import('./pages/spec/PcrPetDuplexClearPage'))
const PcrPpDuplexClearPage = lazy(() => import('./pages/spec/PcrPpDuplexClearPage'))
const PcrPetKraftTriplexClearPage = lazy(() => import('./pages/spec/PcrPetKraftTriplexClearPage'))
const PcrPpKraftTriplexClearPage = lazy(() => import('./pages/spec/PcrPpKraftTriplexClearPage'))
const PcrPetDuplexNoWindowPage = lazy(() => import('./pages/spec/PcrPetDuplexNoWindowPage'))
const PcrPpDuplexNoWindowPage = lazy(() => import('./pages/spec/PcrPpDuplexNoWindowPage'))
const PcrPetTriplexMetalisedPage = lazy(() => import('./pages/spec/PcrPetTriplexMetalisedPage'))
const PcrPpTriplexMetalisedPage = lazy(() => import('./pages/spec/PcrPpTriplexMetalisedPage'))
const PcrKraftVmpetPage = lazy(() => import('./pages/spec/PcrKraftVmpetPage'))
const PcrPetTriplexAluminumPage = lazy(() => import('./pages/spec/PcrPetTriplexAluminumPage'))
const PcrPpTriplexAluminumPage = lazy(() => import('./pages/spec/PcrPpTriplexAluminumPage'))
const PcrPetKraftQuadlexAluminumPage = lazy(() => import('./pages/spec/PcrPetKraftQuadlexAluminumPage'))
const PcrPpKraftQuadlexAluminumPage = lazy(() => import('./pages/spec/PcrPpKraftQuadlexAluminumPage'))
const PcrKraftDuplexLowPage = lazy(() => import('./pages/spec/PcrKraftDuplexLowPage'))
const MonoPeDuplexClearPage = lazy(() => import('./pages/spec/MonoPeDuplexClearPage'))
const MonoPpDuplexClearPage = lazy(() => import('./pages/spec/MonoPpDuplexClearPage'))
const MonoPeDuplexNoWindowPage = lazy(() => import('./pages/spec/MonoPeDuplexNoWindowPage'))
const MonoPpDuplexNoWindowPage = lazy(() => import('./pages/spec/MonoPpDuplexNoWindowPage'))
const BioCelloDuplexClearPage = lazy(() => import('./pages/spec/BioCelloDuplexClearPage'))
const BioCelloTriplexHighestPage = lazy(() => import('./pages/spec/BioCelloTriplexHighestPage'))
const BioCelloTriplexMetalisedPage = lazy(() => import('./pages/spec/BioCelloTriplexMetalisedPage'))
const BioKraftVmCelloPage = lazy(() => import('./pages/spec/BioKraftVmCelloPage'))
const BioKraftPbatLowPage = lazy(() => import('./pages/spec/BioKraftPbatLowPage'))

// BioPE Spec Pages - Plant-Based Bio-PE Structures - Lazy loaded
const BioPePetDuplexClearPage = lazy(() => import('./pages/spec/BioPePetDuplexClearPage'))
const BioPePpDuplexClearPage = lazy(() => import('./pages/spec/BioPePpDuplexClearPage'))
const BioPePetKraftTriplexClearPage = lazy(() => import('./pages/spec/BioPePetKraftTriplexClearPage'))
const BioPePpKraftTriplexClearPage = lazy(() => import('./pages/spec/BioPePpKraftTriplexClearPage'))
const BioPePetDuplexNoWindowPage = lazy(() => import('./pages/spec/BioPePetDuplexNoWindowPage'))
const BioPePpDuplexNoWindowPage = lazy(() => import('./pages/spec/BioPePpDuplexNoWindowPage'))
const BioPePetTriplexMetalisedPage = lazy(() => import('./pages/spec/BioPePetTriplexMetalisedPage'))
const BioPePpTriplexMetalisedPage = lazy(() => import('./pages/spec/BioPePpTriplexMetalisedPage'))
const BioPeKraftVmpetPage = lazy(() => import('./pages/spec/BioPeKraftVmpetPage'))
const BioPePetTriplexAluminumPage = lazy(() => import('./pages/spec/BioPePetTriplexAluminumPage'))
const BioPePpTriplexAluminumPage = lazy(() => import('./pages/spec/BioPePpTriplexAluminumPage'))
const BioPePetKraftQuadlexAluminumPage = lazy(() => import('./pages/spec/BioPePetKraftQuadlexAluminumPage'))
const BioPePpKraftQuadlexAluminumPage = lazy(() => import('./pages/spec/BioPePpKraftQuadlexAluminumPage'))
const BioPeKraftDuplexLowPage = lazy(() => import('./pages/spec/BioPeKraftDuplexLowPage'))

// Team Pages - Lazy loaded
const RyanWongPage = lazy(() => import('./pages/team/RyanWongPage'))

// Products Pages - SEO Focused - Lazy loaded
const CompostableCoffeeBagsPage = lazy(() => import('./pages/products/CompostableCoffeeBagsPage'))
const CompostableStandUpPouchesPage = lazy(() => import('./pages/products/CompostableStandUpPouchesPage'))
const RecyclableMonoMaterialPage = lazy(() => import('./pages/products/RecyclableMonoMaterialPage'))
const CoffeeBagsDegassingValvePage = lazy(() => import('./pages/products/CoffeeBagsDegassingValvePage'))
const LowMOQPackagingPage = lazy(() => import('./pages/products/LowMOQPackagingPage'))

// Solutions Pages - Persona Based SEO - Lazy loaded
const StartupFounderPage = lazy(() => import('./pages/solutions/StartupFounderPage'))
const EcommerceBrandPage = lazy(() => import('./pages/solutions/EcommerceBrandPage'))
const CorporateSustainabilityPage = lazy(() => import('./pages/solutions/CorporateSustainabilityPage'))
const FoodManufacturerPage = lazy(() => import('./pages/solutions/FoodManufacturerPage'))
const ProductDeveloperPage = lazy(() => import('./pages/solutions/ProductDeveloperPage'))
const CoffeeRoasterPage = lazy(() => import('./pages/solutions/CoffeeRoasterPage'))
const ArtisanProducerPage = lazy(() => import('./pages/solutions/ArtisanProducerPage'))
const SnackBrandManagerPage = lazy(() => import('./pages/solutions/SnackBrandManagerPage'))

// Topics Pages - AI Search Volume SEO - Lazy loaded
const EcoFriendlyFoodPackagingPage = lazy(() => import('./pages/topics/EcoFriendlyFoodPackagingPage'))
const DTCSustainablePackagingPage = lazy(() => import('./pages/topics/DTCSustainablePackagingPage'))
const GreenCoffeeMaterialsPage = lazy(() => import('./pages/topics/GreenCoffeeMaterialsPage'))
const DigitalPrintingEcoPackagingPage = lazy(() => import('./pages/topics/DigitalPrintingEcoPackagingPage'))
const RecyclableSnackPackagingPage = lazy(() => import('./pages/topics/RecyclableSnackPackagingPage'))
const CustomPrintedSustainablePouchesPage = lazy(() => import('./pages/topics/CustomPrintedSustainablePouchesPage'))
const EcoPackagingRegulationsPage = lazy(() => import('./pages/topics/EcoPackagingRegulationsPage'))
const CustomCompostablePouchSuppliersPage = lazy(() => import('./pages/topics/CustomCompostablePouchSuppliersPage'))
const LowMOQStartupPackagingPage = lazy(() => import('./pages/topics/LowMOQStartupPackagingPage'))
const CompostableBabyFoodBagsPage = lazy(() => import('./pages/topics/CompostableBabyFoodBagsPage'))

// 404 Page - Lazy loaded
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/management" element={<AdminManagementPage />} />
              <Route path="/image-catalog" element={<ImageCatalogPage />} />

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

              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/shipping" element={<ShippingPolicyPage />} />

              {/* Company Pages */}
              <Route path="/company/about" element={<AboutPage />} />
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
              </CustomQuoteProvider>
              </CalendlyProvider>
          </StoreProvider>
        </BrowserRouter>
      </GeoBlocker>
    </ErrorBoundary>
  </HelmetProvider>
</StrictMode>,
)
