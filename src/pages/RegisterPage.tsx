import React, { useState, useRef } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Mail, ArrowLeft, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/dashboard'
  const { sendOtp, verifyOtp, signInWithGoogle } = useAuth()
  
  const [email, setEmail] = useState('')
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', ''])
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [loading, setLoading] = useState(false)
  const [sendingOtp, setSendingOtp] = useState(false)
  const [error, setError] = useState('')
  const [countdown, setCountdown] = useState(0)
  
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  // Handle send OTP
  const handleSendOtp = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    setSendingOtp(true)
    setError('')
    
    const { error } = await sendOtp(email)
    
    if (error) {
      setError(error.message)
      setSendingOtp(false)
    } else {
      setStep('otp')
      setSendingOtp(false)
      // Start countdown
      setCountdown(60)
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const digits = value.replace(/\D/g, '').slice(0, 6).split('')
      const newOtp = [...otpCode]
      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newOtp[index + i] = digit
        }
      })
      setOtpCode(newOtp)
      // Focus last filled or next empty
      const nextIndex = Math.min(index + digits.length, 5)
      otpRefs.current[nextIndex]?.focus()
    } else {
      const newOtp = [...otpCode]
      newOtp[index] = value.replace(/\D/g, '')
      setOtpCode(newOtp)
      // Auto focus next
      if (value && index < 5) {
        otpRefs.current[index + 1]?.focus()
      }
    }
  }

  // Handle OTP keydown
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  // Handle verify OTP
  const handleVerifyOtp = async () => {
    const code = otpCode.join('')
    if (code.length !== 6) {
      setError('Please enter the 6-digit code')
      return
    }
    
    setLoading(true)
    setError('')
    
    const { error } = await verifyOtp(email, code)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate(redirectTo)
    }
  }

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')
    const { error } = await signInWithGoogle()
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  // Resend OTP
  const handleResendOtp = async () => {
    if (countdown > 0) return
    await handleSendOtp()
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8">
          <ArrowLeft className="h-5 w-5" /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-neutral-900">
              {step === 'email' ? 'Sign In / Register' : 'Enter Verification Code'}
            </h1>
            <p className="text-neutral-600 mt-2">
              {step === 'email' 
                ? 'Enter your email to receive a verification code' 
                : `We sent a 6-digit code to ${email}`
              }
            </p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}
          
          {step === 'email' ? (
            <div className="space-y-4">
              {/* Email Input */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                    className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
              </div>
              
              {/* Send Code Button */}
              <button
                onClick={handleSendOtp}
                disabled={sendingOtp || !email}
                className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                {sendingOtp ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Get Verification Code'
                )}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-neutral-500">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full py-3 bg-white border border-neutral-300 hover:bg-neutral-50 disabled:bg-neutral-100 text-neutral-700 font-medium rounded-xl transition flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* OTP Input */}
              <div className="flex justify-center gap-2">
                {otpCode.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => otpRefs.current[index] = el}
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-bold border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              
              {/* Resend */}
              <div className="text-center">
                {countdown > 0 ? (
                  <p className="text-neutral-500 text-sm">Resend code in {countdown}s</p>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    className="text-primary-600 hover:underline text-sm font-medium"
                  >
                    Resend Code
                  </button>
                )}
              </div>
              
              {/* Verify Button */}
              <button
                onClick={handleVerifyOtp}
                disabled={loading || otpCode.join('').length !== 6}
                className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
              
              {/* Back to email */}
              <button
                onClick={() => {
                  setStep('email')
                  setOtpCode(['', '', '', '', '', ''])
                  setError('')
                }}
                className="w-full text-center text-neutral-600 hover:text-neutral-900 text-sm"
              >
                Use a different email
              </button>
            </div>
          )}
          
          {/* Terms and Privacy */}
          <p className="text-center text-xs text-neutral-500 mt-6">
            By signing in, you agree to our{' '}
            <Link to="/terms-of-use" className="text-primary-600 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
