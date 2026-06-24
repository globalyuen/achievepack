import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle, XCircle, Mail, ArrowLeft } from 'lucide-react'
import { useTranslation, Trans } from "react-i18next";

const UnsubscribePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.unsubscribe';
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')
  const email = searchParams.get('email')
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<'success' | 'error' | null>(status as 'success' | 'error' | null)

  // If email is provided but no status, process the unsubscribe
  useEffect(() => {
    const emailParam = searchParams.get('email')
    const statusParam = searchParams.get('status')
    
    if (emailParam && !statusParam) {
      handleUnsubscribe(emailParam)
    }
  }, [searchParams])

  const handleUnsubscribe = async (emailToUnsubscribe: string) => {
    setProcessing(true)
    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailToUnsubscribe })
      })
      
      if (response.ok) {
        setResult('success')
      } else {
        setResult('error')
      }
    } catch {
      setResult('error')
    } finally {
      setProcessing(false)
    }
  }

  if (processing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="animate-spin h-12 w-12 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h1 className="text-xl font-semibold text-gray-900">{t(`${p}.processingYourRequest`)}</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {result === 'success' ? (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{t(`${p}.successfullyUnsubscribed`)}</h1>
              <p className="text-gray-600 mb-2">
                {email && (
                  <span className="block text-sm text-gray-500 mb-2">
                    {t(`${p}.email`)}<strong>{email}</strong>
                  </span>
                )}
                {t(`${p}.youVeBeenRemovedFromOurMarketi`)}</p>
              <p className="text-sm text-gray-500 mt-4">
                {t(`${p}.noteYouMayStillReceiveTransact`)}</p>
            </>
          ) : result === 'error' ? (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{t(`${p}.somethingWentWrong`)}</h1>
              <p className="text-gray-600 mb-4">
                {t(`${p}.weCouldnTProcessYourUnsubscrib`)}</p>
              <a 
                href="mailto:ryan@achievepack.com?subject=Unsubscribe Request"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Mail className="h-4 w-4" />
                {t(`${p}.contactSupport`)}</a>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-gray-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{t(`${p}.unsubscribeFromEmails`)}</h1>
              <p className="text-gray-600 mb-6">
                {t(`${p}.clickTheButtonBelowToUnsubscri`)}</p>
              <p className="text-sm text-gray-500 mb-6">
                {t(`${p}.youReReceivingOurEmailsBecause`)}</p>
            </>
          )}
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t(`${p}.backToAchievePack`)}</Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/ap-logo.svg" alt="Achieve Pack" className="h-6" />
            <span className="text-gray-400">×</span>
            <img src="/ep-logo.svg" alt="Pouch.eco" className="h-5" />
          </div>
          <p className="text-xs text-gray-500">
            {t(`${p}.sustainablePackagingSolutionsF`)}</p>
        </div>
      </div>
    </div>
  )
}

export default UnsubscribePage
