import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, FileText, Mail, ArrowRight, User, Clock } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const RfqConfirmation: React.FC = () => {
  const location = useLocation()
  const { user } = useAuth()
  const rfqNumber = location.state?.rfqNumber || `RFQ-${Date.now().toString(36).toUpperCase()}`

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-lg">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-amber-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Quote Request Submitted!</h1>
        <p className="text-neutral-600 mb-6">
          Thank you for your inquiry. Our team will review your request and prepare a personalized quote.
        </p>
        
        <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
          <div className="text-sm text-amber-700">Reference Number</div>
          <div className="text-xl font-bold text-amber-800">{rfqNumber}</div>
        </div>

        <div className="space-y-3 text-left mb-8">
          <div className="flex items-center gap-3 text-neutral-600">
            <Mail className="h-5 w-5 text-amber-500" />
            <span>Confirmation email sent to your inbox</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <Clock className="h-5 w-5 text-amber-500" />
            <span>Quote will be ready within 24 hours</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <FileText className="h-5 w-5 text-amber-500" />
            <span>Our team will contact you with pricing details</span>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left">
          <h3 className="font-semibold text-neutral-800 mb-2">What happens next?</h3>
          <ol className="text-sm text-neutral-600 space-y-2">
            <li>1. Our packaging specialists will review your requirements</li>
            <li>2. We'll prepare a detailed quote with pricing and lead times</li>
            <li>3. You'll receive the quote via email within 24 hours</li>
            <li>4. Once approved, we'll begin production</li>
          </ol>
        </div>

        <div className="space-y-3">
          {user && (
            <Link to="/dashboard" className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <User className="h-5 w-5" /> Go to My Dashboard
            </Link>
          )}
          <Link to="/store" className={`block w-full py-3 ${user ? 'border border-neutral-300 hover:bg-neutral-50 text-neutral-700' : 'bg-amber-500 hover:bg-amber-600 text-white'} font-semibold rounded-xl transition`}>
            Continue Shopping
          </Link>
          <Link to="/" className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-xl transition flex items-center justify-center gap-2">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RfqConfirmation
