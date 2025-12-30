import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation } from 'react-i18next'

const ADMIN_EMAIL = 'ryan@achievepack.com'
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAABkMYinChTAoKfnt'

const LoginPage: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { signIn, signInWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)

  const slides = [
    {
      image: '/imgs/sign-in/slide-1.webp',
      title: 'Customer Center Dashboard',
      description: 'Track all your orders, quotes, and documents in one centralized dashboard.'
    },
    {
      image: '/imgs/sign-in/slide-2.webp',
      title: 'Manage Quotes & Orders',
      description: 'Easily view, track, and manage all your quotes and orders with real-time status updates.'
    },
    {
      image: '/imgs/sign-in/slide-3.webp',
      title: 'Access Documents',
      description: 'Download certifications, compliance documents, and product catalogs anytime.'
    },
    {
      image: '/imgs/sign-in/slide-4.webp',
      title: 'Manage Artwork Files',
      description: 'Upload, review, and approve your packaging designs with our streamlined workflow.'
    }
  ]

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
    
    // Try immediately or wait for script to load
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
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
    const { error } = await signIn(email, password)
    if (error) {
      setError(error.message)
      setLoading(false)
      // Reset Turnstile on error
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
      }
      setTurnstileToken('')
    } else {
      // Redirect admin to /admin, others to /dashboard
      if (email.toLowerCase() === ADMIN_EMAIL) {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    }
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError('')
    const { error } = await signInWithGoogle()
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-md w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8 transition">
            <ArrowLeft className="h-5 w-5" /> {t('customerCenter.backToHome')}
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Sign in to Achieve Pack
            </h1>
            <p className="text-neutral-600">
              Don't have an account? <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">Create a free account</Link>
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
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                placeholder="Enter email to get started"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-neutral-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  placeholder="Enter your password"
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

            {/* Cloudflare Turnstile Widget */}
            <div className="flex justify-center">
              <div ref={turnstileRef} className="cf-turnstile" />
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading || !turnstileToken}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Log in'
              )}
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

          {/* Google Login Button */}
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
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden items-center justify-center p-12">
        <div className="relative w-full max-w-2xl">
          {/* Carousel Images */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-family="sans-serif" font-size="24"%3E' + slide.title + '%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition"
            >
              <ChevronLeft className="h-6 w-6 text-neutral-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition"
            >
              <ChevronRight className="h-6 w-6 text-neutral-700" />
            </button>
          </div>

          {/* Slide Content */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-neutral-600">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-primary-600'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
