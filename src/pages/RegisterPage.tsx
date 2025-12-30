import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Building, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

const RegisterPage: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { signUp, signInWithGoogle } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '', fullName: '', company: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)

  // Load Turnstile script
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  // Render Turnstile widget
  useEffect(() => {
    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile) {
        if (turnstileWidgetId.current) {
          try { (window as any).turnstile.remove(turnstileWidgetId.current) } catch (e) {}
        }
        turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'error-callback': () => setError('Verification failed. Please refresh.'),
          theme: 'light',
          size: 'flexible'
        })
      }
    }
    
    if ((window as any).turnstile) {
      renderWidget()
    } else {
      const checkTurnstile = setInterval(() => {
        if ((window as any).turnstile) {
          clearInterval(checkTurnstile)
          renderWidget()
        }
      }, 100)
      return () => clearInterval(checkTurnstile)
    }
    
    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try { (window as any).turnstile.remove(turnstileWidgetId.current) } catch (e) {}
      }
    }
  }, [])

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError('')
    const { error } = await signInWithGoogle()
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Verify Turnstile token
    if (!turnstileToken) {
      setError('Please complete the security verification.')
      return
    }
    
    setLoading(true)
    setError('')
    const { error } = await signUp(formData.email, formData.password, { full_name: formData.fullName, company: formData.company })
    if (error) {
      setError(error.message)
      setLoading(false)
      // Reset Turnstile on error
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
      }
      setTurnstileToken('')
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">{t('customerCenter.register.checkEmail')}</h1>
          <p className="text-neutral-600 mb-6">{t('customerCenter.register.confirmationSent')} <strong>{formData.email}</strong></p>
          <Link to="/login" className="text-primary-600 hover:underline">{t('customerCenter.register.signIn')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8">
          <ArrowLeft className="h-5 w-5" /> {t('customerCenter.backToHome')}
        </Link>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-neutral-900">{t('customerCenter.register.title')}</h1>
            <p className="text-neutral-600">{t('customerCenter.register.subtitle')}</p>
          </div>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t('customerCenter.register.fullName')}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-lg" placeholder="John Doe" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t('customerCenter.register.company')}</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-lg" placeholder="Your Company" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t('customerCenter.register.email')}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-10 pr-4 py-3 border rounded-lg" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">{t('customerCenter.register.password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full pl-10 pr-12 py-3 border rounded-lg" placeholder="Min 6 characters" required minLength={6} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {/* Cloudflare Turnstile Widget */}
            <div className="flex justify-center">
              <div ref={turnstileRef} className="cf-turnstile" />
            </div>
            
            <button type="submit" disabled={loading || googleLoading || !turnstileToken} className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : t('customerCenter.register.createAccount')}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-neutral-500">Or continue with</span>
            </div>
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading || googleLoading}
            className="w-full py-3 bg-white border border-neutral-300 hover:bg-neutral-50 disabled:bg-neutral-100 text-neutral-700 font-medium rounded-lg transition flex items-center justify-center gap-3"
          >
            {googleLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            Continue with Google
          </button>

          <p className="text-center mt-6 text-neutral-600">
            {t('customerCenter.register.hasAccount')} <Link to="/login" className="text-primary-600 hover:underline font-medium">{t('customerCenter.register.signIn')}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
