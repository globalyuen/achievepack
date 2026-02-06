import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Heart, Leaf } from 'lucide-react'

// Asset imports (placeholders for now, normally we'd import or use absolute paths)
const ASSETS = {
  hero: "/imgs/demo-site/baby/achieve_baby_hero_v2_1770342396693.png", 
  carrot: "/imgs/demo-site/baby/achieve_baby_carrot_1770342349368.png",
  pea: "/imgs/demo-site/baby/achieve_baby_pea_1770342362697.png"
}

export default function AchieveBabyDemoPage() {
  return (
    <div className="min-h-screen bg-[#FFF5F5] font-sans selection:bg-[#FFABAB] selection:text-white overflow-hidden">
      <Helmet>
        <title>Achieve Baby | Gentle Nutrition for Little Tummies</title>
        <meta name="description" content="Organic purées in soft-touch pouches. Safe, squeezy, and nutritious." />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/free-service" 
            className="flex items-center gap-2 text-[#718096] hover:text-[#2D3748] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Demos</span>
          </Link>
          
          <div className="text-2xl font-bold text-[#4A4A4A] tracking-tight">
            Achieve<span className="text-[#FFABAB]">Baby</span>
          </div>

          <button className="p-3 bg-white rounded-full shadow-[0_8px_16px_rgba(255,171,171,0.3)] hover:shadow-[0_12px_24px_rgba(255,171,171,0.4)] transition-all">
            <ShoppingBag className="w-5 h-5 text-[#FFABAB]" />
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative">
        {/* Soft Blob Backgrounds */}
        <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#E3F9E5] rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFF0F0] rounded-full blur-[80px] opacity-80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <Leaf className="w-4 h-4 text-[#68D391]" />
                <span className="text-sm font-medium text-[#718096]">100% Certified Organic</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-[#2D3748] leading-[1.1] mb-8 tracking-tight">
                Gentle Nutrition <br />
                <span className="text-[#FFABAB]">Little Tummies</span>
              </h1>
              
              <p className="text-xl text-[#718096] leading-relaxed mb-10 max-w-lg">
                Organic purées in our patented <strong>Soft-Touch™</strong> squeezable pouches. Designed with rounded corners for safe, easy self-feeding.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#FFABAB] text-white rounded-full font-bold text-lg shadow-[0_8px_20px_rgba(255,171,171,0.4)] hover:shadow-[0_12px_28px_rgba(255,171,171,0.5)] hover:-translate-y-1 transition-all">
                  Shop Starting Set
                </button>
                <button className="px-8 py-4 bg-white text-[#718096] rounded-full font-bold text-lg shadow-sm hover:bg-[#F7FAFC] transition-colors">
                  Our Safety Promise
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-[60px] bg-gradient-to-br from-white to-[#FFF5F5] shadow-[0_30px_60px_rgba(0,0,0,0.05)] p-12 flex items-center justify-center relative overflow-hidden">
                 <motion.img 
                  src={ASSETS.hero}
                  alt="Achieve Baby Pouches"
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-20 right-20 w-16 h-16 bg-[#F0FFF4] rounded-2xl rotate-12 shadow-md flex items-center justify-center"
                  animate={{ rotate: [12, 24, 12], y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                    <span className="text-2xl">🥕</span>
                </motion.div>
                <motion.div 
                    className="absolute bottom-32 left-12 w-20 h-20 bg-[#FFF5F5] rounded-full shadow-lg flex items-center justify-center"
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                >
                    <span className="text-3xl">☁️</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid (Claymorphism Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { 
                icon: ShieldCheck, 
                color: "text-[#68D391]", 
                bg: "bg-[#F0FFF4]",
                title: "Safety First", 
                desc: "Rounded corners and anti-choke caps for peace of mind." 
              },
              { 
                icon: Heart, 
                color: "text-[#FFABAB]", 
                bg: "bg-[#FFF5F5]",
                title: "Gentle Recipes", 
                desc: "No added sugar, salt, or fillers. Just pure organic goodness." 
              },
              { 
                icon: Star, 
                color: "text-[#F6AD55]", 
                bg: "bg-[#FFFAF0]",
                title: "Sensory Texture", 
                desc: "Perfectly smooth blends for developing palates." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white/50"
              >
                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-[#2D3748] mb-3">{feature.title}</h3>
                <p className="text-[#718096] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Product Showcase */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">Our Gentle Favorites</h2>
            <p className="text-[#718096] text-lg max-w-2xl mx-auto">Start their journey with our most popular single-ingredient purées.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32">
            {/* Carrot Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-[40px] p-8 shadow-[0_20px_50px_rgba(237,137,54,0.1)] border-4 border-transparent hover:border-[#FBD38D] transition-all"
            >
              <div className="bg-[#FFFAF0] rounded-[32px] h-[400px] mb-8 flex items-center justify-center p-12 overflow-hidden relative">
                <motion.img 
                  src={ASSETS.carrot}
                  alt="Sweet Carrot Pouch"
                  className="h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-[#2D3748] mb-2">Sweet Carrot</h3>
                  <p className="text-[#718096]">Stage 1 • 6+ Months</p>
                </div>
                <p className="text-2xl font-bold text-[#ED8936]">$3.50</p>
              </div>
            </motion.div>

            {/* Pea Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-[40px] p-8 shadow-[0_20px_50px_rgba(72,187,120,0.1)] border-4 border-transparent hover:border-[#9AE6B4] transition-all"
            >
              <div className="bg-[#F0FFF4] rounded-[32px] h-[400px] mb-8 flex items-center justify-center p-12 overflow-hidden relative">
                <motion.img 
                  src={ASSETS.pea}
                  alt="Spring Pea Pouch"
                  className="h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-[#2D3748] mb-2">Spring Pea</h3>
                  <p className="text-[#718096]">Stage 1 • 6+ Months</p>
                </div>
                <p className="text-2xl font-bold text-[#48BB78]">$3.50</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FFF5F5] border-t border-[#FED7D7] pt-20 pb-10 text-center">
             <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold text-[#2D3748] mb-6">Join the Achieve Baby Club</h3>
                 <div className="flex gap-4 max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Parent's Email" 
                        className="flex-1 px-6 py-4 rounded-full border-none shadow-sm focus:ring-2 focus:ring-[#FFABAB] outline-none"
                    />
                    <button className="px-8 py-4 bg-[#FFABAB] text-white rounded-full font-bold shadow-md hover:bg-[#F56565] transition-colors">
                        Join
                    </button>
                 </div>
             </div>
        </div>

      </main>
    </div>
  )
}
