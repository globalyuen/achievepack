import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StoreProvider } from './store/StoreContext'
import CartSidebar from './components/store/CartSidebar'
import FloatingButtons from './components/FloatingButtons'
import GeoBlocker from './components/GeoBlocker'
import './index.css'
import './i18n'
import App from './App.tsx'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmation from './pages/OrderConfirmation'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import DashboardPage from './pages/DashboardPage'
import TermsPage from './pages/TermsPage'
import AdminPage from './pages/AdminPage'
import AdminManagementPage from './pages/AdminManagementPage'

// Industry Pages
import CoffeeTeaPage from './pages/industry/CoffeeTeaPage'
import SnacksFoodPage from './pages/industry/SnacksFoodPage'
import PetFoodPage from './pages/industry/PetFoodPage'
import SupplementsPowdersPage from './pages/industry/SupplementsPowdersPage'
import BabyFoodPage from './pages/industry/BabyFoodPage'
import FrozenFoodPage from './pages/industry/FrozenFoodPage'
import SaucesCondimentsPage from './pages/industry/SaucesCondimentsPage'

// Packaging Pages
import StandUpPouchesPage from './pages/packaging/StandUpPouchesPage'
import FlatBottomBagsPage from './pages/packaging/FlatBottomBagsPage'
import SpoutPouchesPage from './pages/packaging/SpoutPouchesPage'
import FlatPouchesPage from './pages/packaging/FlatPouchesPage'
import SideGussetBagsPage from './pages/packaging/SideGussetBagsPage'
import VacuumPouchesPage from './pages/packaging/VacuumPouchesPage'

// Materials Pages
import CompostablePage from './pages/materials/CompostablePage'
import RecyclableMonoPEPage from './pages/materials/RecyclableMonoPEPage'
import RecyclableMonoPPPage from './pages/materials/RecyclableMonoPPPage'
import BioPEPage from './pages/materials/BioPEPage'
import PCRPage from './pages/materials/PCRPage'
import HomeCompostablePage from './pages/materials/HomeCompostablePage'
import IndustrialCompostablePage from './pages/materials/IndustrialCompostablePage'

// Printing Pages
import DigitalPrintingPage from './pages/printing/DigitalPrintingPage'
import PlatePrintingPage from './pages/printing/PlatePrintingPage'

// Feature Pages
import ReclosureOptionsPage from './pages/features/ReclosureOptionsPage'
import SurfaceFinishPage from './pages/features/SurfaceFinishPage'
import BarrierOptionsPage from './pages/features/BarrierOptionsPage'
import LowBarrierPage from './pages/features/LowBarrierPage'
import MediumBarrierPage from './pages/features/MediumBarrierPage'
import HighBarrierPage from './pages/features/HighBarrierPage'

// Legal Pages
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage'
import ShippingPolicyPage from './pages/legal/ShippingPolicyPage'

// Company Pages
import AboutPage from './pages/company/AboutPage'
import FactoryTourPage from './pages/company/FactoryTourPage'
import CertificatesPage from './pages/company/CertificatesPage'

// Knowledge Pages
import AllOptionsPage from './pages/knowledge/AllOptionsPage'
import SizeGuidePage from './pages/knowledge/SizeGuidePage'
import PrintingTypesPage from './pages/knowledge/PrintingTypesPage'
import WorkflowPage from './pages/knowledge/WorkflowPage'

// Support Pages
import FAQsPage from './pages/support/FAQsPage'
import LeadTimePage from './pages/support/LeadTimePage'

// Case Studies Pages
import CoffeeRoasteryCaseStudy from './pages/case-studies/CoffeeRoasteryCaseStudy'
import TeaBrandCaseStudy from './pages/case-studies/TeaBrandCaseStudy'
import SuperfoodBrandCaseStudy from './pages/case-studies/SuperfoodBrandCaseStudy'
import PetTreatsCaseStudy from './pages/case-studies/PetTreatsCaseStudy'
import ChocolateBrandCaseStudy from './pages/case-studies/ChocolateBrandCaseStudy'
import CandleBrandCaseStudy from './pages/case-studies/CandleBrandCaseStudy'
import BakeryCaseStudy from './pages/case-studies/BakeryCaseStudy'
import WellnessBrandCaseStudy from './pages/case-studies/WellnessBrandCaseStudy'
import OrganicNutsCaseStudy from './pages/case-studies/OrganicNutsCaseStudy'
import BathProductsCaseStudy from './pages/case-studies/BathProductsCaseStudy'
import AdaptogensCaseStudy from './pages/case-studies/AdaptogensCaseStudy'
import React, { Suspense } from 'react'
import OutdoorSnacksCaseStudy from './pages/case-studies/OutdoorSnacksCaseStudy'

// Blog Pages
import BlogPage from './pages/blog/BlogPage'
import BlogPostPage from './pages/blog/BlogPostPage'

// USA Pages
import USACompostableHubPage from './pages/usa/USACompostableHubPage'
import USACoffeePage from './pages/usa/USACoffeePage'
import USASnacksPage from './pages/usa/USASnacksPage'
import USALabelingGuidePage from './pages/usa/USALabelingGuidePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <GeoBlocker>
          <BrowserRouter>
            <StoreProvider>
              <CartSidebar />
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
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/management" element={<AdminManagementPage />} />

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

              {/* Materials Pages */}
              <Route path="/materials/compostable" element={<CompostablePage />} />
              <Route path="/materials/recyclable-mono-pe" element={<RecyclableMonoPEPage />} />
              <Route path="/materials/recyclable-mono-pp" element={<RecyclableMonoPPPage />} />
              <Route path="/materials/bio-pe" element={<BioPEPage />} />
              <Route path="/materials/pcr" element={<PCRPage />} />
              <Route path="/materials/home-compostable" element={<HomeCompostablePage />} />
              <Route path="/materials/industrial-compostable" element={<IndustrialCompostablePage />} />

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

              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/shipping" element={<ShippingPolicyPage />} />

              {/* Company Pages */}
              <Route path="/company/about" element={<AboutPage />} />
              <Route path="/company/factory-tour" element={<FactoryTourPage />} />
              <Route path="/company/certificates" element={<CertificatesPage />} />

              {/* Knowledge Pages */}
              <Route path="/knowledge/all-options" element={<AllOptionsPage />} />
              <Route path="/knowledge/size-guide" element={<SizeGuidePage />} />
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
            </Routes>
              {/* Global Floating Buttons - WhatsApp & Meeting */}
              <FloatingButtons />
          </StoreProvider>
        </BrowserRouter>
      </GeoBlocker>
    </ErrorBoundary>
  </HelmetProvider>
</StrictMode>,
)
