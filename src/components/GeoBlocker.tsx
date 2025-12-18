import React, { useState, useEffect, ReactNode } from 'react'
import { Mail, Phone, MessageCircle, Lock, Eye, EyeOff } from 'lucide-react'

interface GeoBlockerProps {
  children: ReactNode
}

// Access password for China region
const ACCESS_PASSWORD = 'jr1357924680'
const STORAGE_KEY = 'achievepack_access_granted'

const GeoBlocker: React.FC<GeoBlockerProps> = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [accessGranted, setAccessGranted] = useState(false)

  useEffect(() => {
    // Check if access was previously granted
    const savedAccess = sessionStorage.getItem(STORAGE_KEY)
    if (savedAccess === 'true') {
      setAccessGranted(true)
      setIsChecking(false)
      return
    }

    const checkLocation = async () => {
      try {
        // Use free IP geolocation API
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000) // 5 second timeout
        })
        
        if (response.ok) {
          const data = await response.json()
          // Check if country is China (CN)
          if (data.country_code === 'CN' || data.country === 'China') {
            setIsBlocked(true)
          }
        }
      } catch (error) {
        // If API fails, allow access (fail-open for better UX)
        console.log('Geo check failed, allowing access')
      } finally {
        setIsChecking(false)
      }
    }

    checkLocation()
  }, [])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ACCESS_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true')
      setAccessGranted(true)
      setPasswordError('')
    } else {
      setPasswordError('密码错误 / Incorrect password')
    }
  }

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Show blocked page for China visitors (with password option)
  if (isBlocked && !accessGranted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/achieve-pack-logo.png" 
              alt="Achieve Pack" 
              className="h-16 mx-auto"
            />
          </div>

          {/* Status Icon */}
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-amber-500" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-neutral-900 mb-3">
            Access Required
          </h1>
          <p className="text-lg text-neutral-500 mb-2">
            需要访问密码
          </p>

          {/* Password Form */}
          <form onSubmit={handlePasswordSubmit} className="mb-8">
            <p className="text-neutral-600 mb-4 text-sm">
              Please enter the access password to view the website.
            </p>
            <p className="text-neutral-500 text-sm mb-4">
              请输入访问密码以查看网站。
            </p>
            
            <div className="relative mb-3">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入密码 / Enter password"
                className="w-full px-4 py-3 pr-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            
            {passwordError && (
              <p className="text-red-500 text-sm mb-3">{passwordError}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-medium"
            >
              确认访问 / Confirm Access
            </button>
          </form>

          <div className="border-t border-neutral-200 pt-6">
            {/* Contact Options */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4">
                或联系我们 / Or Contact Us
              </h3>
            
              {/* Email */}
              <a 
                href="mailto:ryan@achievepack.com"
                className="flex items-center justify-center gap-3 w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>ryan@achievepack.com</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/85269704411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp: +852 6970 4411</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+85269704411"
                className="flex items-center justify-center gap-3 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-3 px-6 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+852 6970 4411</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-neutral-400 mt-8">
            © {new Date().getFullYear()} Achieve Pack. All rights reserved.
          </p>
        </div>
      </div>
    )
  }

  // Allow access for non-blocked regions
  return <>{children}</>
}

export default GeoBlocker
