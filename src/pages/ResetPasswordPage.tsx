import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Eye, EyeOff, CheckCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'

const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.resetPassword'
  const navigate = useNavigate()
  const { updatePassword, session } = useAuth()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Check if user came from password reset email
    if (!session) {
      navigate('/signin')
    }
  }, [session, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError(t(`${p}.passwordMismatch`))
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError(t(`${p}.passwordLength`))
      setLoading(false)
      return
    }

    const { error } = await updatePassword(password)

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
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
            {t(`${p}.successDesc`)}
          </p>
          <p className="text-sm text-neutral-500">
            {t(`${p}.redirecting`)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {t(`${p}.pageTitle`)}
          </h1>
          <p className="text-neutral-600">
            {t(`${p}.pageDesc`)}
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
              {t(`${p}.newPassword`)}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                placeholder={t(`${p}.newPasswordPlaceholder`)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t(`${p}.confirmPassword`)}
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder={t(`${p}.confirmPasswordPlaceholder`)}
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
                {t(`${p}.updatingBtn`)}
              </>
            ) : (
              t(`${p}.updateBtn`)
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage
