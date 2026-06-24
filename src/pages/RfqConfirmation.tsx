import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CheckCircle, FileText, Mail, ArrowRight, User, Clock } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation, Trans } from "react-i18next";

const RfqConfirmation: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.rfqConfirmation';
  const location = useLocation()
  const { user } = useAuth()
  const rfqNumber = location.state?.rfqNumber || `RFQ-${Date.now().toString(36).toUpperCase()}`

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-lg">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-amber-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">{t(`${p}.quoteRequestSubmitted`)}</h1>
        <p className="text-neutral-600 mb-6">
          {t(`${p}.thankYouForYourInquiryOurTeamW`)}</p>
        
        <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
          <div className="text-sm text-amber-700">{t(`${p}.referenceNumber`)}</div>
          <div className="text-xl font-bold text-amber-800">{rfqNumber}</div>
        </div>

        <div className="space-y-3 text-left mb-8">
          <div className="flex items-center gap-3 text-neutral-600">
            <Mail className="h-5 w-5 text-amber-500" />
            <span>{t(`${p}.confirmationEmailSentToYourInb`)}</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <Clock className="h-5 w-5 text-amber-500" />
            <span>{t(`${p}.quoteWillBeReadyWithin24Hours`)}</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-600">
            <FileText className="h-5 w-5 text-amber-500" />
            <span>{t(`${p}.ourTeamWillContactYouWithPrici`)}</span>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-xl p-4 mb-6 text-left">
          <h3 className="font-semibold text-neutral-800 mb-2">{t(`${p}.whatHappensNext`)}</h3>
          <ol className="text-sm text-neutral-600 space-y-2">
            <li>{t(`${p}.1OurPackagingSpecialistsWillRe`)}</li>
            <li>{t(`${p}.2WeLlPrepareADetailedQuoteWith`)}</li>
            <li>{t(`${p}.3YouLlReceiveTheQuoteViaEmailW`)}</li>
            <li>{t(`${p}.4OnceApprovedWeLlBeginProducti`)}</li>
          </ol>
        </div>

        <div className="space-y-3">
          {user && (
            <Link to="/dashboard" className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <User className="h-5 w-5" /> {t(`${p}.goToMyDashboard`)}</Link>
          )}
          <Link to="/store" className={`block w-full py-3 ${user ? 'border border-neutral-300 hover:bg-neutral-50 text-neutral-700' : 'bg-amber-500 hover:bg-amber-600 text-white'} font-semibold rounded-xl transition`}>
            {t(`${p}.continueShopping`)}</Link>
          <Link to="/" className="block w-full py-3 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-xl transition flex items-center justify-center gap-2">
            {t(`${p}.backToHome`)}<ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RfqConfirmation
