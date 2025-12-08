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
          </Routes>
        </StoreProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
