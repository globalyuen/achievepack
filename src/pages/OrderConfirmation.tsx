import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { CheckCircle, Package, Mail, ArrowRight, User, Upload, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { useStore } from '../store/StoreContext'

const OrderConfirmation: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const { clearCart } = useStore()
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [statusUpdated, setStatusUpdated] = useState(false)
  
  // Get order number from URL or state
  const sessionId = searchParams.get('session_id')
  const orderFromUrl = searchParams.get('order')
  const orderNumber = orderFromUrl || location.state?.orderNumber || `AP-${Date.now().toString(36).toUpperCase()}`
  const paymentNote = location.state?.paymentNote

  // Update order status when returning from Stripe
  useEffect(() => {
    const updateOrderStatus = async () => {
      if (sessionId && orderNumber && !statusUpdated) {
        setUpdatingStatus(true)
        try {
          // Update order status via API (bypasses RLS)
          const response = await fetch('/api/update-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderNumber,
              sessionId,
              status: 'confirmed',
              paymentStatus: 'paid'
            })
          })
          const result = await response.json()

          if (!result.success) {
            console.error('Error updating order status:', result.error)
          } else {
            console.log(`Order ${orderNumber} updated to confirmed`)
            setStatusUpdated(true)
          }
          
          // Clear the cart after successful payment
          clearCart()
        } catch (err) {
          console.error('Error updating order:', err)
        } finally {
          setUpdatingStatus(false)
        }
      }
    }

    updateOrderStatus()
  }, [sessionId, orderNumber, statusUpdated, clearCart])

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">{t('customerCenter.orderConfirmation.title')}</h1>
        <p className="text-neutral-600 mb-6">{t('customerCenter.orderConfirmation.thankYou')}</p>
        
        <div className="bg-neutral-50 rounded-xl p-4 mb-6">
          <div className="text-sm text-neutral-500">{t('customerCenter.orderConfirmation.orderNumber')}</div>
          <div className="text-xl font-bold text-neutral-900">{orderNumber}</div>
          {sessionId && (
            <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Payment confirmed via Stripe
            </div>
          )}
          {updatingStatus && (
            <div className="text-xs text-blue-600 mt-1 flex items-center gap-1">
              <Loader2 className="h-3 w-3 animate-spin" /> Updating order status...
            </div>
          )}
        </div>

        {paymentNote && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-amber-800">{paymentNote}</p>
          </div>
        )}

        <div className="space-y-3 text-left mb-8">
          <div className="flex items-center gap-3 text-neutral-600">
            <Mail className="h-5 w-5 text-primary-500" />
            <span>{t('customerCenter.orderConfirmation.emailSent')}</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <Package className="h-5 w-5 text-primary-500" />
            <span>{t('customerCenter.orderConfirmation.estimatedDelivery')}</span>
          </div>
        </div>

        <div className="space-y-3">
          {user && (
            <>
              <Link to="/dashboard?tab=artwork" className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
                <Upload className="h-5 w-5" /> Upload Artwork for This Order
              </Link>
              <Link to="/dashboard" className="block w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
                <User className="h-5 w-5" /> {t('customerCenter.orderConfirmation.goToDashboard')}
              </Link>
            </>
          )}
          <Link to="/store" className={`block w-full py-3 ${user ? 'border border-neutral-300 hover:bg-neutral-50 text-neutral-700' : 'bg-primary-600 hover:bg-primary-700 text-white'} font-semibold rounded-xl transition`}>
            {t('customerCenter.orderConfirmation.continueShopping')}
          </Link>
          <Link to="/" className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-xl transition flex items-center justify-center gap-2">
            {t('customerCenter.orderConfirmation.backToHome')} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation
