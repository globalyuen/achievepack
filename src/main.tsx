import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
          </Routes>
        </StoreProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
