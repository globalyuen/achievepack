import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation, Trans } from 'react-i18next'

const ForgotPasswordPage: React.FC = () => {
  const { resetPassword } = useAuth()
  const { t } = useTranslation()
  const p = 'seoPages.pages.forgotPassword'
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const { error } = await resetPassword(email)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            {t(`${p}.successTitle`)}
          </h1>
          <p className="text-neutral-600 mb-6">
            <Trans i18nKey={`${p}.successDesc`} values={{ email }} components={[<strong key="0" />]} />
          </p>
          <p className="text-sm text-neutral-500 mb-8">
            {t(`${p}.successNote`)}
          </p>
          <Link
            to="/signin"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(`${p}.backToLogin`)}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <Link
          to="/signin"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          {t(`${p}.backToLogin`)}
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {t(`${p}.title`)}
          </h1>
          <p className="text-neutral-600">
            {t(`${p}.subtitle`)}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t(`${p}.emailLabel`)}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder={t(`${p}.emailPlaceholder`)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t(`${p}.btnSending`)}
              </>
            ) : (
              t(`${p}.btnReset`)
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-neutral-600 text-sm">
          <Trans i18nKey={`${p}.rememberText`} components={[
            <Link to="/signin" className="text-primary-600 hover:text-primary-700 font-medium" key="0" />
          ]} />
        </p>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
