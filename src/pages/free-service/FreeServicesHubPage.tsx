import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Gift, ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from "react-i18next";

const FREE_SERVICES = [
  {
    id: 'design',
    title: 'Free Design Consultation',
    description: 'Expert packaging design advice from our team. Get custom dieline templates, color guidance, and print-ready artwork support.',
    emoji: '🎨',
    image: '/imgs/free-service/free-design-hero.webp',
    link: '/free-service/packaging-design-consultation',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'website',
    title: 'Free Website Design',
    description: 'Modern landing page for your brand. Professional design that showcases your products and converts visitors into customers.',
    emoji: '🌐',
    image: '/imgs/free-service/free-website-hero.webp',
    link: '/free-service/website-upgrade',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'management',
    title: 'Free Management Tool',
    description: 'Customer center dashboard to track orders, manage quotes, access documents, and streamline your packaging workflow.',
    emoji: '📊',
    image: '/imgs/free-service/free-management-hero.webp',
    link: '/free-service/customer-center',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'mockup',
    title: 'Free 3D Mockup',
    description: 'Visualize your packaging design before production. High-quality 3D renders to preview your product packaging.',
    emoji: '📦',
    image: '/imgs/free-service/free-mockup-hero.webp',
    link: '/free-service/packaging-mockup',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
}

export default function FreeServicesHubPage() {
    const { t } = useTranslation();
    const p = 'seoPages.pages.freeServicesHub';
  return (
    <>
      <Helmet>
        <title>{t(`${p}.freeServicesForCustomersAchiev`)}</title>
        <meta name="description" content="Explore exclusive FREE services for Achieve Pack customers: design consultation, website design, management tools, and 3D mockups." />
      </Helmet>

      {/* Modern Dark/Light Mesh Background */}
      <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 selection:bg-green-500/30 font-sans relative overflow-hidden">
        {/* Decorative Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

        {/* Hero Section */}
        <section className="pt-16 pb-10 px-4 md:pt-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-md rounded-2xl mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 ring-1 ring-neutral-900/5">
              <Gift className="h-6 w-6 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900">
              {t(`${p}.exclusiveFreeServices`)}</h1>
            <p className="text-lg text-neutral-500 max-w-md mx-auto leading-relaxed">
              {t(`${p}.unlockPremiumPackagingBenefits`)}</p>
          </motion.div>
        </section>

        {/* 3D Studio Spotlight Hero Section */}
        <section className="px-4 pb-16 max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-white rounded-[32px] overflow-hidden border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-500"
          >
            {/* Spotlight Accent */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-emerald-500/10 to-transparent blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">
              {/* Left Side Content */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold tracking-wide uppercase">
                  <Sparkles className="h-3.5 w-3.5" /> Featured Service
                </div>
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 leading-tight">
                  Free 3D Packaging Studio
                </h2>
                
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Access our industry-leading WebGL package design suite. Design, scale, and preview over 600+ custom boxes, pouches, and bottles in real-time 3D. Upload custom artwork, inspect dielines, adjust material finishes, and export print-ready layouts—100% free with no registration required.
                </p>
                
                <div className="grid grid-cols-2 gap-3 pb-1">
                  <div className="flex items-start gap-2">
                    <div className="flex-none w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-[10px] mt-0.5 font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-[11px] text-neutral-800">680+ 3D Models</h4>
                      <p className="text-[10px] text-neutral-400">Boxes, pouches & bottles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-none w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-[10px] mt-0.5 font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-[11px] text-neutral-800">Instant Dielines</h4>
                      <p className="text-[10px] text-neutral-400">Download 2D layout templates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-none w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-[10px] mt-0.5 font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-[11px] text-neutral-800">Real-Time WebGL</h4>
                      <p className="text-[10px] text-neutral-400">Interactive 3D preview</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-none w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-[10px] mt-0.5 font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-[11px] text-neutral-800">Zero Watermarks</h4>
                      <p className="text-[10px] text-neutral-400">Completely free downloads</p>
                    </div>
                  </div>
                </div>

                <div className="pt-1">
                  <Link 
                    to="/studio" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 text-white text-sm font-bold rounded-2xl shadow-[0_8px_25px_rgba(16,185,129,0.25)] hover:bg-emerald-500 hover:shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    Launch 3D Studio 
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Side Visual */}
              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl filter blur-2xl transform translate-x-4 translate-y-4 scale-95 pointer-events-none" />
                <div className="relative border border-neutral-100 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 group">
                  <img 
                    src="/imgs/free-service/free-3d-studio-hero.jpg" 
                    alt="Achieve Pack 3D Studio"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-16 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {FREE_SERVICES.map((service) => (
              <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -4 }}>
                <Link
                  to={service.link}
                  className={`group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500`}
                >
                  {/* Hero Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${service.bgGradient} overflow-hidden`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    {/* Glassmorphism Badge */}
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm border border-white/50`}>
                      <span className="text-2xl drop-shadow-sm">{service.emoji}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">{service.title}</h2>
                    <p className="text-neutral-500 mb-6 leading-relaxed flex-1">{service.description}</p>
                    <div className="flex items-center text-sm font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors mt-auto">
                      {t(`${p}.exploreService`)}<ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-lg mx-auto space-y-4"
          >
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 w-full py-4 bg-neutral-900 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="h-5 w-5 relative z-10" />
              <span className="relative z-10 flex items-center gap-2">{t(`${p}.bookFreeConsultation`)}<Sparkles className="h-4 w-4 text-emerald-200" /></span>
            </a>
            <Link
              to="/"
              className="flex items-center justify-center w-full py-4 bg-white border border-neutral-200 text-neutral-600 font-medium rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
            >
              {t(`${p}.backToHome`)}</Link>
          </motion.div>
        </section>
      </div>
    </>
  )
}

