import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import LazyRoute from '../components/LazyRoute';

// Fallback component for lazy loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500 mb-2"></div>
      <p className="text-neutral-600">Loading...</p>
    </div>
  </div>
);

// Lazy load all components
const App = lazy(() => import('../App'));
const StorePage = lazy(() => import('../pages/StorePage'));
const ProductPage = lazy(() => import('../pages/ProductPage'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const OrderConfirmation = lazy(() => import('../pages/OrderConfirmation'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('../pages/ResetPasswordPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AdminPage = lazy(() => import('../pages/AdminPage'));
const OrderManagementPage = lazy(() => import('../pages/OrderManagementPage'));

// Industry Pages
const CoffeeTeaPage = lazy(() => import('../pages/industry/CoffeeTeaPage'));
const SnacksFoodPage = lazy(() => import('../pages/industry/SnacksFoodPage'));
const PetFoodPage = lazy(() => import('../pages/industry/PetFoodPage'));
const SupplementsPowdersPage = lazy(() => import('../pages/industry/SupplementsPowdersPage'));
const BabyFoodPage = lazy(() => import('../pages/industry/BabyFoodPage'));
const FrozenFoodPage = lazy(() => import('../pages/industry/FrozenFoodPage'));
const SaucesCondimentsPage = lazy(() => import('../pages/industry/SaucesCondimentsPage'));

// Packaging Pages
const StandUpPouchesPage = lazy(() => import('../pages/packaging/StandUpPouchesPage'));
const FlatBottomBagsPage = lazy(() => import('../pages/packaging/FlatBottomBagsPage'));
const SpoutPouchesPage = lazy(() => import('../pages/packaging/SpoutPouchesPage'));
const FlatPouchesPage = lazy(() => import('../pages/packaging/FlatPouchesPage'));
const SideGussetBagsPage = lazy(() => import('../pages/packaging/SideGussetBagsPage'));
const VacuumPouchesPage = lazy(() => import('../pages/packaging/VacuumPouchesPage'));
const CustomBoxesPage = lazy(() => import('../pages/packaging/CustomBoxesPage'));

// Materials Pages
const CompostablePage = lazy(() => import('../pages/materials/CompostablePage'));
const RecyclableMonoPEPage = lazy(() => import('../pages/materials/RecyclableMonoPEPage'));
const RecyclableMonoPPPage = lazy(() => import('../pages/materials/RecyclableMonoPPPage'));
const BioPEPage = lazy(() => import('../pages/materials/BioPEPage'));
const PCRPage = lazy(() => import('../pages/materials/PCRPage'));
const HomeCompostablePage = lazy(() => import('../pages/materials/HomeCompostablePage'));
const IndustrialCompostablePage = lazy(() => import('../pages/materials/IndustrialCompostablePage'));

// Printing Pages
const DigitalPrintingPage = lazy(() => import('../pages/printing/DigitalPrintingPage'));
const PlatePrintingPage = lazy(() => import('../pages/printing/PlatePrintingPage'));

// Feature Pages
const ReclosureOptionsPage = lazy(() => import('../pages/features/ReclosureOptionsPage'));
const SurfaceFinishPage = lazy(() => import('../pages/features/SurfaceFinishPage'));
const BarrierOptionsPage = lazy(() => import('../pages/features/BarrierOptionsPage'));
const LowBarrierPage = lazy(() => import('../pages/features/LowBarrierPage'));
const MediumBarrierPage = lazy(() => import('../pages/features/MediumBarrierPage'));
const HighBarrierPage = lazy(() => import('../pages/features/HighBarrierPage'));

// Legal Pages
const PrivacyPolicyPage = lazy(() => import('../pages/legal/PrivacyPolicyPage'));
const ShippingPolicyPage = lazy(() => import('../pages/legal/ShippingPolicyPage'));

// Company Pages
const AboutPage = lazy(() => import('../pages/company/AboutPage'));
const FactoryTourPage = lazy(() => import('../pages/company/FactoryTourPage'));
const CertificatesPage = lazy(() => import('../pages/company/CertificatesPage'));

// Knowledge Pages
const AllOptionsPage = lazy(() => import('../pages/knowledge/AllOptionsPage'));
const SizeGuidePage = lazy(() => import('../pages/knowledge/SizeGuidePage'));
const PouchSizingPage = lazy(() => import('../pages/knowledge/PouchSizingPage'));
const PrintingTypesPage = lazy(() => import('../pages/knowledge/PrintingTypesPage'));
const WorkflowPage = lazy(() => import('../pages/knowledge/WorkflowPage'));

// Support Pages
const FAQsPage = lazy(() => import('../pages/support/FAQsPage'));
const LeadTimePage = lazy(() => import('../pages/support/LeadTimePage'));

// Case Studies Pages
const CoffeeRoasteryCaseStudy = lazy(() => import('../pages/case-studies/CoffeeRoasteryCaseStudy'));
const TeaBrandCaseStudy = lazy(() => import('../pages/case-studies/TeaBrandCaseStudy'));
const SuperfoodBrandCaseStudy = lazy(() => import('../pages/case-studies/SuperfoodBrandCaseStudy'));
const PetTreatsCaseStudy = lazy(() => import('../pages/case-studies/PetTreatsCaseStudy'));
const ChocolateBrandCaseStudy = lazy(() => import('../pages/case-studies/ChocolateBrandCaseStudy'));
const CandleBrandCaseStudy = lazy(() => import('../pages/case-studies/CandleBrandCaseStudy'));
const BakeryCaseStudy = lazy(() => import('../pages/case-studies/BakeryCaseStudy'));
const WellnessBrandCaseStudy = lazy(() => import('../pages/case-studies/WellnessBrandCaseStudy'));
const OrganicNutsCaseStudy = lazy(() => import('../pages/case-studies/OrganicNutsCaseStudy'));
const BathProductsCaseStudy = lazy(() => import('../pages/case-studies/BathProductsCaseStudy'));
const AdaptogensCaseStudy = lazy(() => import('../pages/case-studies/AdaptogensCaseStudy'));
const OutdoorSnacksCaseStudy = lazy(() => import('../pages/case-studies/OutdoorSnacksCaseStudy'));

// Blog Pages
const BlogPage = lazy(() => import('../pages/blog/BlogPage'));
const BlogPostPage = lazy(() => import('../pages/blog/BlogPostPage'));

// USA Pages
const USACompostableHubPage = lazy(() => import('../pages/usa/USACompostableHubPage'));
const USACoffeePage = lazy(() => import('../pages/usa/USACoffeePage'));
const USASnacksPage = lazy(() => import('../pages/usa/USASnacksPage'));
const USALabelingGuidePage = lazy(() => import('../pages/usa/USALabelingGuidePage'));

// Spec Pages - Material Structures
const PcrPetDuplexClearPage = lazy(() => import('../pages/spec/PcrPetDuplexClearPage'));
const PcrPpDuplexClearPage = lazy(() => import('../pages/spec/PcrPpDuplexClearPage'));
const PcrPetKraftTriplexClearPage = lazy(() => import('../pages/spec/PcrPetKraftTriplexClearPage'));
const PcrPpKraftTriplexClearPage = lazy(() => import('../pages/spec/PcrPpKraftTriplexClearPage'));
const PcrPetDuplexNoWindowPage = lazy(() => import('../pages/spec/PcrPetDuplexNoWindowPage'));
const PcrPpDuplexNoWindowPage = lazy(() => import('../pages/spec/PcrPpDuplexNoWindowPage'));
const PcrPetTriplexMetalisedPage = lazy(() => import('../pages/spec/PcrPetTriplexMetalisedPage'));
const PcrPpTriplexMetalisedPage = lazy(() => import('../pages/spec/PcrPpTriplexMetalisedPage'));
const PcrKraftVmpetPage = lazy(() => import('../pages/spec/PcrKraftVmpetPage'));
const PcrPetTriplexAluminumPage = lazy(() => import('../pages/spec/PcrPetTriplexAluminumPage'));
const PcrPpTriplexAluminumPage = lazy(() => import('../pages/spec/PcrPpTriplexAluminumPage'));
const PcrPetKraftQuadlexAluminumPage = lazy(() => import('../pages/spec/PcrPetKraftQuadlexAluminumPage'));
const PcrPpKraftQuadlexAluminumPage = lazy(() => import('../pages/spec/PcrPpKraftQuadlexAluminumPage'));
const PcrKraftDuplexLowPage = lazy(() => import('../pages/spec/PcrKraftDuplexLowPage'));
const MonoPeDuplexClearPage = lazy(() => import('../pages/spec/MonoPeDuplexClearPage'));
const MonoPpDuplexClearPage = lazy(() => import('../pages/spec/MonoPpDuplexClearPage'));
const MonoPeDuplexNoWindowPage = lazy(() => import('../pages/spec/MonoPeDuplexNoWindowPage'));
const MonoPpDuplexNoWindowPage = lazy(() => import('../pages/spec/MonoPpDuplexNoWindowPage'));
const BioCelloDuplexClearPage = lazy(() => import('../pages/spec/BioCelloDuplexClearPage'));
const BioCelloTriplexHighestPage = lazy(() => import('../pages/spec/BioCelloTriplexHighestPage'));
const BioCelloTriplexMetalisedPage = lazy(() => import('../pages/spec/BioCelloTriplexMetalisedPage'));
const BioKraftVmCelloPage = lazy(() => import('../pages/spec/BioKraftVmCelloPage'));
const BioKraftPbatLowPage = lazy(() => import('../pages/spec/BioKraftPbatLowPage'));

// BioPE Spec Pages - Plant-Based Bio-PE Structures
const BioPePetDuplexClearPage = lazy(() => import('../pages/spec/BioPePetDuplexClearPage'));
const BioPePpDuplexClearPage = lazy(() => import('../pages/spec/BioPePpDuplexClearPage'));
const BioPePetKraftTriplexClearPage = lazy(() => import('../pages/spec/BioPePetKraftTriplexClearPage'));
const BioPePpKraftTriplexClearPage = lazy(() => import('../pages/spec/BioPePpKraftTriplexClearPage'));
const BioPePetDuplexNoWindowPage = lazy(() => import('../pages/spec/BioPePetDuplexNoWindowPage'));
const BioPePpDuplexNoWindowPage = lazy(() => import('../pages/spec/BioPePpDuplexNoWindowPage'));
const BioPePetTriplexMetalisedPage = lazy(() => import('../pages/spec/BioPePetTriplexMetalisedPage'));
const BioPePpTriplexMetalisedPage = lazy(() => import('../pages/spec/BioPePpTriplexMetalisedPage'));
const BioPeKraftVmpetPage = lazy(() => import('../pages/spec/BioPeKraftVmpetPage'));
const BioPePetTriplexAluminumPage = lazy(() => import('../pages/spec/BioPePetTriplexAluminumPage'));
const BioPePpTriplexAluminumPage = lazy(() => import('../pages/spec/BioPePpTriplexAluminumPage'));
const BioPePetKraftQuadlexAluminumPage = lazy(() => import('../pages/spec/BioPePetKraftQuadlexAluminumPage'));
const BioPePpKraftQuadlexAluminumPage = lazy(() => import('../pages/spec/BioPePpKraftQuadlexAluminumPage'));
const BioPeKraftDuplexLowPage = lazy(() => import('../pages/spec/BioPeKraftDuplexLowPage'));

// Team Pages
const RyanWongPage = lazy(() => import('../pages/team/RyanWongPage'));

// Products Pages - SEO Focused
const CompostableCoffeeBagsPage = lazy(() => import('../pages/products/CompostableCoffeeBagsPage'));
const CompostableStandUpPouchesPage = lazy(() => import('../pages/products/CompostableStandUpPouchesPage'));
const RecyclableMonoMaterialPage = lazy(() => import('../pages/products/RecyclableMonoMaterialPage'));
const CoffeeBagsDegassingValvePage = lazy(() => import('../pages/products/CoffeeBagsDegassingValvePage'));
const LowMOQPackagingPage = lazy(() => import('../pages/products/LowMOQPackagingPage'));

// Solutions Pages - Persona Based SEO
const StartupFounderPage = lazy(() => import('../pages/solutions/StartupFounderPage'));
const EcommerceBrandPage = lazy(() => import('../pages/solutions/EcommerceBrandPage'));
const CorporateSustainabilityPage = lazy(() => import('../pages/solutions/CorporateSustainabilityPage'));
const FoodManufacturerPage = lazy(() => import('../pages/solutions/FoodManufacturerPage'));
const ProductDeveloperPage = lazy(() => import('../pages/solutions/ProductDeveloperPage'));
const CoffeeRoasterPage = lazy(() => import('../pages/solutions/CoffeeRoasterPage'));
const ArtisanProducerPage = lazy(() => import('../pages/solutions/ArtisanProducerPage'));
const SnackBrandManagerPage = lazy(() => import('../pages/solutions/SnackBrandManagerPage'));

// Topics Pages - AI Search Volume SEO
const EcoFriendlyFoodPackagingPage = lazy(() => import('../pages/topics/EcoFriendlyFoodPackagingPage'));
const DTCSustainablePackagingPage = lazy(() => import('../pages/topics/DTCSustainablePackagingPage'));
const GreenCoffeeMaterialsPage = lazy(() => import('../pages/topics/GreenCoffeeMaterialsPage'));
const DigitalPrintingEcoPackagingPage = lazy(() => import('../pages/topics/DigitalPrintingEcoPackagingPage'));
const RecyclableSnackPackagingPage = lazy(() => import('../pages/topics/RecyclableSnackPackagingPage'));
const CustomPrintedSustainablePouchesPage = lazy(() => import('../pages/topics/CustomPrintedSustainablePouchesPage'));
const EcoPackagingRegulationsPage = lazy(() => import('../pages/topics/EcoPackagingRegulationsPage'));
const CustomCompostablePouchSuppliersPage = lazy(() => import('../pages/topics/CustomCompostablePouchSuppliersPage'));
const LowMOQStartupPackagingPage = lazy(() => import('../pages/topics/LowMOQStartupPackagingPage'));
const CompostableBabyFoodBagsPage = lazy(() => import('../pages/topics/CompostableBabyFoodBagsPage'));

// 404 Page
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Define all routes
const routes = [
  { path: "/", element: <LazyRoute component={() => import('../pages/DomainHomePage')} fallback={<LoadingFallback />} /> },
  { path: "/store", element: <LazyRoute component={() => import('../pages/StorePage')} fallback={<LoadingFallback />} /> },
  { path: "/store/product/:productId", element: <LazyRoute component={() => import('../pages/ProductPage')} fallback={<LoadingFallback />} /> },
  { path: "/store/checkout", element: <LazyRoute component={() => import('../pages/CheckoutPage')} fallback={<LoadingFallback />} /> },
  { path: "/store/order-confirmation", element: <LazyRoute component={() => import('../pages/OrderConfirmation')} fallback={<LoadingFallback />} /> },
  { path: "/store/rfq-confirmation", element: <LazyRoute component={() => import('../pages/RfqConfirmation')} fallback={<LoadingFallback />} /> },
  { path: "/signin", element: <LazyRoute component={() => import('../pages/SignInPage')} fallback={<LoadingFallback />} /> },
  { path: "/forgot-password", element: <LazyRoute component={() => import('../pages/ForgotPasswordPage')} fallback={<LoadingFallback />} /> },
  { path: "/reset-password", element: <LazyRoute component={() => import('../pages/ResetPasswordPage')} fallback={<LoadingFallback />} /> },
  { path: "/dashboard", element: <LazyRoute component={() => import('../pages/DashboardPage')} fallback={<LoadingFallback />} /> },
  { path: "/terms", element: <LazyRoute component={() => import('../pages/TermsPage')} fallback={<LoadingFallback />} /> },
  { path: "/contact", element: <LazyRoute component={() => import('../pages/ContactPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions", element: <LazyRoute component={() => import('../pages/PouchEcoSolutionsPage')} fallback={<LoadingFallback />} /> },
  { path: "/size-guide", element: <LazyRoute component={() => import('../pages/PouchEcoSizeGuidePage')} fallback={<LoadingFallback />} /> },
  { path: "/ctrl-x9k7m", element: <LazyRoute component={() => import('../pages/AdminPage')} fallback={<LoadingFallback />} /> },
  { path: "/ctrl-x9k7m/management", element: <LazyRoute component={() => import('../pages/OrderManagementPage')} fallback={<LoadingFallback />} /> },

  // Industry Pages
  { path: "/industry/coffee-tea", element: <LazyRoute component={() => import('../pages/industry/CoffeeTeaPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/snacks-food", element: <LazyRoute component={() => import('../pages/industry/SnacksFoodPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/pet-food", element: <LazyRoute component={() => import('../pages/industry/PetFoodPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/supplements-powders", element: <LazyRoute component={() => import('../pages/industry/SupplementsPowdersPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/baby-food", element: <LazyRoute component={() => import('../pages/industry/BabyFoodPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/frozen-food", element: <LazyRoute component={() => import('../pages/industry/FrozenFoodPage')} fallback={<LoadingFallback />} /> },
  { path: "/industry/sauces-condiments", element: <LazyRoute component={() => import('../pages/industry/SaucesCondimentsPage')} fallback={<LoadingFallback />} /> },

  // Packaging Pages
  { path: "/packaging/stand-up-pouches", element: <LazyRoute component={() => import('../pages/packaging/StandUpPouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/flat-bottom-bags", element: <LazyRoute component={() => import('../pages/packaging/FlatBottomBagsPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/spout-pouches", element: <LazyRoute component={() => import('../pages/packaging/SpoutPouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/flat-pouches", element: <LazyRoute component={() => import('../pages/packaging/FlatPouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/side-gusset-bags", element: <LazyRoute component={() => import('../pages/packaging/SideGussetBagsPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/vacuum-pouches", element: <LazyRoute component={() => import('../pages/packaging/VacuumPouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/packaging/custom-boxes", element: <LazyRoute component={() => import('../pages/packaging/CustomBoxesPage')} fallback={<LoadingFallback />} /> },

  // Materials Pages
  { path: "/materials/compostable", element: <LazyRoute component={() => import('../pages/materials/CompostablePage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/cello-kraft-triplex", element: <LazyRoute component={() => import('../pages/PouchEcoGPTKPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/kraft-duplex", element: <LazyRoute component={() => import('../pages/PouchEcoPTNPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/recyclable-mono-pe", element: <LazyRoute component={() => import('../pages/materials/RecyclableMonoPEPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/recyclable-mono-pp", element: <LazyRoute component={() => import('../pages/materials/RecyclableMonoPPPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/bio-pe", element: <LazyRoute component={() => import('../pages/materials/BioPEPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/pcr", element: <LazyRoute component={() => import('../pages/materials/PCRPage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/home-compostable", element: <LazyRoute component={() => import('../pages/materials/HomeCompostablePage')} fallback={<LoadingFallback />} /> },
  { path: "/materials/industrial-compostable", element: <LazyRoute component={() => import('../pages/materials/IndustrialCompostablePage')} fallback={<LoadingFallback />} /> },

  // Printing Pages
  { path: "/printing/digital-printing", element: <LazyRoute component={() => import('../pages/printing/DigitalPrintingPage')} fallback={<LoadingFallback />} /> },
  { path: "/printing/plate-printing", element: <LazyRoute component={() => import('../pages/printing/PlatePrintingPage')} fallback={<LoadingFallback />} /> },

  // Feature Pages
  { path: "/features/reclosure-options", element: <LazyRoute component={() => import('../pages/features/ReclosureOptionsPage')} fallback={<LoadingFallback />} /> },
  { path: "/features/surface-finish", element: <LazyRoute component={() => import('../pages/features/SurfaceFinishPage')} fallback={<LoadingFallback />} /> },
  { path: "/features/barrier-options", element: <LazyRoute component={() => import('../pages/features/BarrierOptionsPage')} fallback={<LoadingFallback />} /> },
  { path: "/features/low-barrier", element: <LazyRoute component={() => import('../pages/features/LowBarrierPage')} fallback={<LoadingFallback />} /> },
  { path: "/features/medium-barrier", element: <LazyRoute component={() => import('../pages/features/MediumBarrierPage')} fallback={<LoadingFallback />} /> },
  { path: "/features/high-barrier", element: <LazyRoute component={() => import('../pages/features/HighBarrierPage')} fallback={<LoadingFallback />} /> },

  // Legal Pages
  { path: "/privacy", element: <LazyRoute component={() => import('../pages/legal/PrivacyPolicyPage')} fallback={<LoadingFallback />} /> },
  { path: "/shipping", element: <LazyRoute component={() => import('../pages/legal/ShippingPolicyPage')} fallback={<LoadingFallback />} /> },

  // Company Pages
  { path: "/company/about", element: <LazyRoute component={() => import('../pages/company/AboutPage')} fallback={<LoadingFallback />} /> },
  { path: "/company/factory-tour", element: <LazyRoute component={() => import('../pages/company/FactoryTourPage')} fallback={<LoadingFallback />} /> },
  { path: "/company/certificates", element: <LazyRoute component={() => import('../pages/company/CertificatesPage')} fallback={<LoadingFallback />} /> },
  
  // Team Pages
  { path: "/team/ryan-wong", element: <LazyRoute component={() => import('../pages/team/RyanWongPage')} fallback={<LoadingFallback />} /> },

  // Knowledge Pages
  { path: "/knowledge/all-options", element: <LazyRoute component={() => import('../pages/knowledge/AllOptionsPage')} fallback={<LoadingFallback />} /> },
  { path: "/knowledge/size-guide", element: <LazyRoute component={() => import('../pages/knowledge/SizeGuidePage')} fallback={<LoadingFallback />} /> },
  { path: "/knowledge/pouch-sizing", element: <LazyRoute component={() => import('../pages/knowledge/PouchSizingPage')} fallback={<LoadingFallback />} /> },
  { path: "/knowledge/printing-types", element: <LazyRoute component={() => import('../pages/knowledge/PrintingTypesPage')} fallback={<LoadingFallback />} /> },
  { path: "/knowledge/workflow", element: <LazyRoute component={() => import('../pages/knowledge/WorkflowPage')} fallback={<LoadingFallback />} /> },

  // Support Pages
  { path: "/support/faqs", element: <LazyRoute component={() => import('../pages/support/FAQsPage')} fallback={<LoadingFallback />} /> },
  { path: "/support/lead-time", element: <LazyRoute component={() => import('../pages/support/LeadTimePage')} fallback={<LoadingFallback />} /> },

  // Case Studies Pages
  { path: "/case-studies/coffee-roastery", element: <LazyRoute component={() => import('../pages/case-studies/CoffeeRoasteryCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/tea-brand", element: <LazyRoute component={() => import('../pages/case-studies/TeaBrandCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/superfood-brand", element: <LazyRoute component={() => import('../pages/case-studies/SuperfoodBrandCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/pet-treats", element: <LazyRoute component={() => import('../pages/case-studies/PetTreatsCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/chocolate-brand", element: <LazyRoute component={() => import('../pages/case-studies/ChocolateBrandCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/candle-brand", element: <LazyRoute component={() => import('../pages/case-studies/CandleBrandCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/bakery", element: <LazyRoute component={() => import('../pages/case-studies/BakeryCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/wellness-brand", element: <LazyRoute component={() => import('../pages/case-studies/WellnessBrandCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/organic-nuts", element: <LazyRoute component={() => import('../pages/case-studies/OrganicNutsCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/bath-products", element: <LazyRoute component={() => import('../pages/case-studies/BathProductsCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/adaptogens", element: <LazyRoute component={() => import('../pages/case-studies/AdaptogensCaseStudy')} fallback={<LoadingFallback />} /> },
  { path: "/case-studies/outdoor-snacks", element: <LazyRoute component={() => import('../pages/case-studies/OutdoorSnacksCaseStudy')} fallback={<LoadingFallback />} /> },

  // Blog Pages
  { path: "/blog", element: <LazyRoute component={() => import('../pages/blog/BlogPage')} fallback={<LoadingFallback />} /> },
  { path: "/blog/:slug", element: <LazyRoute component={() => import('../pages/blog/BlogPostPage')} fallback={<LoadingFallback />} /> },

  // USA Pages
  { path: "/usa/compostable-packaging", element: <LazyRoute component={() => import('../pages/usa/USACompostableHubPage')} fallback={<LoadingFallback />} /> },
  { path: "/usa/coffee-packaging", element: <LazyRoute component={() => import('../pages/usa/USACoffeePage')} fallback={<LoadingFallback />} /> },
  { path: "/usa/snacks-packaging", element: <LazyRoute component={() => import('../pages/usa/USASnacksPage')} fallback={<LoadingFallback />} /> },
  { path: "/usa/labeling-guide", element: <LazyRoute component={() => import('../pages/usa/USALabelingGuidePage')} fallback={<LoadingFallback />} /> },

  // Products Pages - SEO Focused
  { path: "/products/compostable-coffee-bags", element: <LazyRoute component={() => import('../pages/products/CompostableCoffeeBagsPage')} fallback={<LoadingFallback />} /> },
  { path: "/products/compostable-stand-up-pouches", element: <LazyRoute component={() => import('../pages/products/CompostableStandUpPouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/products/recyclable-mono-material-pouches", element: <LazyRoute component={() => import('../pages/products/RecyclableMonoMaterialPage')} fallback={<LoadingFallback />} /> },
  { path: "/products/coffee-bags-degassing-valve", element: <LazyRoute component={() => import('../pages/products/CoffeeBagsDegassingValvePage')} fallback={<LoadingFallback />} /> },
  { path: "/products/low-moq-packaging", element: <LazyRoute component={() => import('../pages/products/LowMOQPackagingPage')} fallback={<LoadingFallback />} /> },

  // Solutions Pages - Persona Based SEO
  { path: "/solutions/startup-founder", element: <LazyRoute component={() => import('../pages/solutions/StartupFounderPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/ecommerce-brand", element: <LazyRoute component={() => import('../pages/solutions/EcommerceBrandPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/corporate-sustainability", element: <LazyRoute component={() => import('../pages/solutions/CorporateSustainabilityPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/food-manufacturer", element: <LazyRoute component={() => import('../pages/solutions/FoodManufacturerPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/product-developer", element: <LazyRoute component={() => import('../pages/solutions/ProductDeveloperPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/coffee-roaster", element: <LazyRoute component={() => import('../pages/solutions/CoffeeRoasterPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/artisan-producer", element: <LazyRoute component={() => import('../pages/solutions/ArtisanProducerPage')} fallback={<LoadingFallback />} /> },
  { path: "/solutions/snack-brand-manager", element: <LazyRoute component={() => import('../pages/solutions/SnackBrandManagerPage')} fallback={<LoadingFallback />} /> },

  // Topics Pages - AI Search Volume SEO
  { path: "/topics/eco-friendly-food-packaging", element: <LazyRoute component={() => import('../pages/topics/EcoFriendlyFoodPackagingPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/dtc-sustainable-packaging", element: <LazyRoute component={() => import('../pages/topics/DTCSustainablePackagingPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/green-coffee-materials", element: <LazyRoute component={() => import('../pages/topics/GreenCoffeeMaterialsPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/digital-printing-eco-packaging", element: <LazyRoute component={() => import('../pages/topics/DigitalPrintingEcoPackagingPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/recyclable-snack-packaging", element: <LazyRoute component={() => import('../pages/topics/RecyclableSnackPackagingPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/custom-printed-sustainable-pouches", element: <LazyRoute component={() => import('../pages/topics/CustomPrintedSustainablePouchesPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/eco-packaging-regulations", element: <LazyRoute component={() => import('../pages/topics/EcoPackagingRegulationsPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/compostable-pouch-suppliers", element: <LazyRoute component={() => import('../pages/topics/CustomCompostablePouchSuppliersPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/low-moq-startup-packaging", element: <LazyRoute component={() => import('../pages/topics/LowMOQStartupPackagingPage')} fallback={<LoadingFallback />} /> },
  { path: "/topics/compostable-baby-food-bags", element: <LazyRoute component={() => import('../pages/topics/CompostableBabyFoodBagsPage')} fallback={<LoadingFallback />} /> },

  // Spec Pages - Material Structures
  { path: "/spec/pcr-pet-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/PcrPetDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/PcrPpDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pet-kraft-triplex-clear", element: <LazyRoute component={() => import('../pages/spec/PcrPetKraftTriplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-kraft-triplex-clear", element: <LazyRoute component={() => import('../pages/spec/PcrPpKraftTriplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pet-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/PcrPetDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/PcrPpDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pet-triplex-metalised", element: <LazyRoute component={() => import('../pages/spec/PcrPetTriplexMetalisedPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-triplex-metalised", element: <LazyRoute component={() => import('../pages/spec/PcrPpTriplexMetalisedPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-kraft-vmpet", element: <LazyRoute component={() => import('../pages/spec/PcrKraftVmpetPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pet-triplex-aluminum", element: <LazyRoute component={() => import('../pages/spec/PcrPetTriplexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-triplex-aluminum", element: <LazyRoute component={() => import('../pages/spec/PcrPpTriplexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pet-kraft-quadlex-aluminum", element: <LazyRoute component={() => import('../pages/spec/PcrPetKraftQuadlexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-pp-kraft-quadlex-aluminum", element: <LazyRoute component={() => import('../pages/spec/PcrPpKraftQuadlexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/pcr-kraft-duplex-low", element: <LazyRoute component={() => import('../pages/spec/PcrKraftDuplexLowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/mono-pe-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/MonoPeDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/mono-pp-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/MonoPpDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/mono-pe-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/MonoPeDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/mono-pp-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/MonoPpDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/bio-cello-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/BioCelloDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/bio-cello-triplex-highest", element: <LazyRoute component={() => import('../pages/spec/BioCelloTriplexHighestPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/bio-cello-triplex-metalised", element: <LazyRoute component={() => import('../pages/spec/BioCelloTriplexMetalisedPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/bio-kraft-vm-cello", element: <LazyRoute component={() => import('../pages/spec/BioKraftVmCelloPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/bio-kraft-pbat-low", element: <LazyRoute component={() => import('../pages/spec/BioKraftPbatLowPage')} fallback={<LoadingFallback />} /> },

  // BioPE Spec Pages - Plant-Based Bio-PE Structures
  { path: "/spec/biope-pet-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/BioPePetDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-duplex-clear", element: <LazyRoute component={() => import('../pages/spec/BioPePpDuplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pet-kraft-triplex-clear", element: <LazyRoute component={() => import('../pages/spec/BioPePetKraftTriplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-kraft-triplex-clear", element: <LazyRoute component={() => import('../pages/spec/BioPePpKraftTriplexClearPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pet-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/BioPePetDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-duplex-nowindow", element: <LazyRoute component={() => import('../pages/spec/BioPePpDuplexNoWindowPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pet-triplex-metalised", element: <LazyRoute component={() => import('../pages/spec/BioPePetTriplexMetalisedPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-triplex-metalised", element: <LazyRoute component={() => import('../pages/spec/BioPePpTriplexMetalisedPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-kraft-vmpet", element: <LazyRoute component={() => import('../pages/spec/BioPeKraftVmpetPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pet-triplex-aluminum", element: <LazyRoute component={() => import('../pages/spec/BioPePetTriplexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-triplex-aluminum", element: <LazyRoute component={() => import('../pages/spec/BioPePpTriplexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pet-kraft-quadlex-aluminum", element: <LazyRoute component={() => import('../pages/spec/BioPePetKraftQuadlexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-pp-kraft-quadlex-aluminum", element: <LazyRoute component={() => import('../pages/spec/BioPePpKraftQuadlexAluminumPage')} fallback={<LoadingFallback />} /> },
  { path: "/spec/biope-kraft-duplex-low", element: <LazyRoute component={() => import('../pages/spec/BioPeKraftDuplexLowPage')} fallback={<LoadingFallback />} /> },

  // 404 - Catch All Route
  { path: "*", element: <LazyRoute component={() => import('../pages/NotFoundPage')} fallback={<LoadingFallback />} /> },
];

export default routes;
