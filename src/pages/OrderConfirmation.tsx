import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, Package, Mail, ArrowRight, User } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const OrderConfirmation: React.FC = () => {
  const location = useLocation()
  const { user } = useAuth()
  const orderNumber = location.state?.orderNumber || `AP-${Date.now().toString(36).toUpperCase()}`

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Order Confirmed!</h1>
        <p className="text-neutral-600 mb-6">Thank you for your order. We've sent a confirmation to your email.</p>
        
        <div className="bg-neutral-50 rounded-xl p-4 mb-6">
          <div className="text-sm text-neutral-500">Order Number</div>
          <div className="text-xl font-bold text-neutral-900">{orderNumber}</div>
        </div>

        <div className="space-y-3 text-left mb-8">
          <div className="flex items-center gap-3 text-neutral-600">
            <Mail className="h-5 w-5 text-primary-500" />
            <span>Confirmation email sent</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <Package className="h-5 w-5 text-primary-500" />
            <span>Estimated delivery: 15-20 business days</span>
          </div>
        </div>

        <div className="space-y-3">
          {user && (
            <Link to="/dashboard" className="block w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <User className="h-5 w-5" /> Go to Dashboard
            </Link>
          )}
          <Link to="/store" className={`block w-full py-3 ${user ? 'border border-neutral-300 hover:bg-neutral-50 text-neutral-700' : 'bg-primary-600 hover:bg-primary-700 text-white'} font-semibold rounded-xl transition`}>
            Continue Shopping
          </Link>
          <Link to="/" className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-xl transition flex items-center justify-center gap-2">
            Back to Homepage <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation
