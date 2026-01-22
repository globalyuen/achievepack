import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft, Package } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

// Random banner images
const BANNER_IMAGES = [
  '/imgs/banner/transparent/a_achievepack_hero_3d_depth_5416790 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_eco_nature_7180632 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_flatlay_5941661 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_gradient_eco_9331347 (1).png',
  '/imgs/banner/transparent/a_achievepack_hero_shot_1_white_background_2665361 (1).png',
]

const NotFoundPage = () => {
  // Select random full-page hero on mount
  const randomHero = useMemo(() => 
    BANNER_IMAGES[Math.floor(Math.random() * BANNER_IMAGES.length)], 
  [])
  
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Achieve Pack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Full Page Background Image */}
        <div className="absolute inset-0">
          <img 
            src={randomHero} 
            alt="Achieve Pack Eco Packaging" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content - Centered */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
          <div className="text-center">
            {/* Large 404 */}
            <h1 className="text-[120px] md:text-[180px] font-bold text-white drop-shadow-2xl leading-none mb-4">404</h1>
            
            {/* Error Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Package className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-neutral-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
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
              <div className="border-t border-neutral-200 pt-5">
                <p className="text-xs text-neutral-500 mb-3">Popular Pages:</p>
                <div className="flex flex-wrap gap-2 justify-center text-sm">
                  <Link to="/materials/compostable" className="text-primary-600 hover:underline">
                    Compostable
                  </Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">
                    Coffee & Tea
                  </Link>
                  <span className="text-neutral-300">•</span>
                  <Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">
                    Stand-Up Pouches
                  </Link>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-6 text-center">
              <a
                href="mailto:sales@achievepack.com"
                className="text-white/90 hover:text-white text-sm"
              >
                Need help? Contact sales@achievepack.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
