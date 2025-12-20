import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft, Package } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

// Random banner images
const BANNER_IMAGES = [
  '/imgs/banner/a_achievepack_hero_3d_depth_5416790.webp',
  '/imgs/banner/a_achievepack_hero_eco_nature_7180632.webp',
  '/imgs/banner/a_achievepack_hero_flatlay_5941661.webp',
  '/imgs/banner/a_achievepack_hero_gradient_eco_9331347.webp',
  '/imgs/banner/a_achievepack_hero_shot_1_white_background_2665361.webp',
]

const NotFoundPage = () => {
  // Select random banner on mount
  const randomBanner = useMemo(() => 
    BANNER_IMAGES[Math.floor(Math.random() * BANNER_IMAGES.length)], 
  [])
  
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Achieve Pack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
        {/* Hero Banner */}
        <div className="w-full h-48 md:h-64 overflow-hidden relative">
          <img 
            src={randomBanner} 
            alt="Achieve Pack Eco Packaging" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-100/80"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-2xl mx-auto px-4 -mt-12 relative z-10 pb-12">
          {/* Large 404 */}
          <div className="text-center mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-primary-600 drop-shadow-lg">404</h1>
          </div>
          
          {/* Error Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                <Package className="h-10 w-10 text-primary-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              The page you're looking for doesn't exist or has been moved to a new location.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
              <Link
                to="/store"
                className="inline-flex items-center justify-center gap-2 bg-neutral-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-700 transition"
              >
                <Package className="h-5 w-5" />
                Browse Products
              </Link>
            </div>

            {/* Popular Links */}
            <div className="border-t border-neutral-200 pt-6">
              <p className="text-sm text-neutral-500 mb-4">Popular Pages:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/materials/compostable" className="text-sm text-primary-600 hover:underline">
                  Compostable Packaging
                </Link>
                <span className="text-neutral-300">•</span>
                <Link to="/industry/coffee-tea" className="text-sm text-primary-600 hover:underline">
                  Coffee & Tea Packaging
                </Link>
                <span className="text-neutral-300">•</span>
                <Link to="/packaging/stand-up-pouches" className="text-sm text-primary-600 hover:underline">
                  Stand-Up Pouches
                </Link>
                <span className="text-neutral-300">•</span>
                <Link to="/support/faqs" className="text-sm text-primary-600 hover:underline">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-neutral-600 mb-4">
              Need help? Contact our team
            </p>
            <a
              href="mailto:sales@achievepack.com"
              className="text-primary-600 hover:underline font-semibold"
            >
              sales@achievepack.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
