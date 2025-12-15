import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider as HelmetProviderOriginal } from 'react-helmet-async'
const HelmetProvider = HelmetProviderOriginal as any
import { ErrorBoundary } from './components/ErrorBoundary.tsx'
import { StoreProvider } from './store/StoreContext'
import CartSidebar from './components/store/CartSidebar'
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

// Legal Pages
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage'
import ShippingPolicyPage from './pages/legal/ShippingPolicyPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
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
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/shipping" element={<ShippingPolicyPage />} />
            </Routes>
          </StoreProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
)
