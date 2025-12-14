import { useCallback } from 'react'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ClimateAction() {
  const { t } = useTranslation()
  
  // 使用 useCallback 优化性能，避免 INP 问题
  const handleLearnMore = useCallback(() => {
    // 直接在新窗口打开外部链接，避免 iframe 被拒绝连接
    window.open('https://climate.stripe.com/WPsfbU', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <>
      {/* Climate Action Section */}
      <section id="climate" className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Animated Air Flow Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="airflow" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0,50 Q25,30 50,50 T100,50"
                  fill="none"
                  stroke="rgba(74, 222, 128, 0.3)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M0,50 Q25,30 50,50 T100,50;M0,50 Q25,70 50,50 T100,50;M0,50 Q25,30 50,50 T100,50"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M0,30 Q25,10 50,30 T100,30"
                  fill="none"
                  stroke="rgba(74, 222, 128, 0.2)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M0,30 Q25,10 50,30 T100,30;M0,30 Q25,50 50,30 T100,30;M0,30 Q25,10 50,30 T100,30"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M0,70 Q25,50 50,70 T100,70"
                  fill="none"
                  stroke="rgba(74, 222, 128, 0.15)"
                  strokeWidth="1"
                >
                  <animate
                    attributeName="d"
                    values="M0,70 Q25,50 50,70 T100,70;M0,70 Q25,90 50,70 T100,70;M0,70 Q25,50 50,70 T100,70"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#airflow)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0) translateX(0);
              }
              33% {
                transform: translateY(-20px) translateX(10px);
              }
              66% {
                transform: translateY(20px) translateX(-10px);
              }
            }
          `}
        </style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('climate.title')}
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                {t('climate.description')}
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">0.5%</div>
                  <div className="text-sm text-neutral-300">{t('climate.stats.revenue')}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">CO₂</div>
                  <div className="text-sm text-neutral-300">{t('climate.stats.removal')}</div>
                </div>
              </div>

              <button
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{t('climate.learnMore')}</span>
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/imgs/climate.webp"
                  alt="Climate Action"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback to a gradient background if image doesn't exist
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                    e.currentTarget.parentElement!.style.minHeight = '400px'
                  }}
                />
                {/* Green overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">Stripe Climate</div>
                    <div className="text-xs text-neutral-500">Carbon Removal Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
