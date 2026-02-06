import React, { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ShoppingBag, Leaf, Recycle, HeartHandshake, Sprout, CheckCircle2, ArrowRight } from 'lucide-react'

// Realistic assets with compostable finish
const ASSETS = {
  hero: "/imgs/demo-site/baby/achieve_baby_realistic_hero.png",
  carrot: "/imgs/demo-site/baby/achieve_baby_carrot_realistic.png",
  pea: "/imgs/demo-site/baby/achieve_baby_pea_realistic.png",
  texture: "/imgs/demo-site/baby/achieve_baby_compost_texture.png"
}

export default function AchieveBabyDemoPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#CCD5AE] selection:text-[#2C3E50] overflow-hidden">
      <Helmet>
        <title>Achieve Baby | Pure Nutrition, Zero Waste</title>
        <meta name="description" content="Premium organic baby food in 100% home compostable pouches. Good for baby, good for the planet." />
      </Helmet>

      {/* Navigation - Minimal & Clean */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]/50 supports-[backdrop-filter]:bg-white/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/free-service" 
            className="group flex items-center gap-2 text-[#64748B] hover:text-[#2C3E50] transition-colors"
          >
            <div className="p-2 rounded-full bg-[#F1F5F9] group-hover:bg-[#E2E8F0] transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-wide text-sm">BACK TO DEMOS</span>
          </Link>
          
          <div className="flex flex-col items-center">
             <div className="text-2xl font-serif font-bold text-[#2C3E50] tracking-tight">
              Achieve<span className="text-[#A4C639]">Baby</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-medium">By AchievePack</span>
          </div>

          <button className="relative p-3 group">
            <ShoppingBag className="w-6 h-6 text-[#2C3E50] group-hover:text-[#A4C639] transition-colors" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#A4C639] rounded-full border-2 border-white scale-0 group-hover:scale-100 transition-transform" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - Split Layout with Parallax */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FAFAF8] -z-10" />
           <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#CCD5AE]/20 rounded-full blur-[120px] -z-10" />

           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9EDC9] text-[#5F6F52] rounded-full text-sm font-bold tracking-wide mb-8">
                  <Leaf className="w-4 h-4" />
                  <span>100% HOME COMPOSTABLE</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-serif font-medium text-[#2C3E50] leading-[1.1] mb-8">
                  Pure Love in <br/>
                  <span className="text-[#A4C639] italic">Every Fiber.</span>
                </h1>
                
                <p className="text-xl text-[#64748B] leading-relaxed mb-10 max-w-lg font-light">
                  Nutrient-dense organic purées packaged in the world's first certified home-compostable pouch. No microplastics, no guilt.
                </p>

                <div className="flex items-center gap-6">
                  <button className="px-8 py-4 bg-[#2C3E50] text-white rounded-full font-bold text-lg hover:bg-[#1A252F] hover:scale-105 transition-all shadow-xl shadow-[#2C3E50]/20">
                    The Starter Set
                  </button>
                  <Link to="#impact" className="flex items-center gap-2 text-[#64748B] font-medium hover:text-[#A4C639] transition-colors">
                    See Our Impact <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: heroY, opacity }}
                className="relative h-[600px] lg:h-[800px] w-full"
              >
                 <img 
                  src={ASSETS.hero} 
                  alt="Realistic Compostable Pouch Lifestyle"
                  className="w-full h-full object-contain filter drop-shadow-2xl scale-110"
                 />
                 {/* Floating Badge */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-20 left-0 lg:-left-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg max-w-xs border border-white/50"
                 >
                    <div className="flex items-start gap-4">
                      <div className="bg-[#E9EDC9] p-3 rounded-full text-[#5F6F52]">
                        <Sprout className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2C3E50]">Zero Waste</h4>
                        <p className="text-sm text-[#64748B] mt-1">Returns to the earth in 180 days.</p>
                      </div>
                    </div>
                 </motion.div>
              </motion.div>
           </div>
        </section>

        {/* Feature Strip */}
        <div className="bg-[#2C3E50] py-12">
           <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8 text-white/90">
              {[
                "Certified Organic",
                "Cold-Pressed",
                "Home Compostable Packaging",
                "BPA & Plastic Free"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#A4C639]" />
                  {item}
                </div>
              ))}
           </div>
        </div>

        {/* The Product - Realistic Cards */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-[#A4C639] font-bold tracking-widest text-sm uppercase block mb-4">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] mb-6">Simple Ingredients. Revolutionary Touch.</h2>
              <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
                Feel the difference of our matte, natural fiber pouches. Tactile, grippable, and completely safe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {/* Product 1 */}
               <div className="group cursor-pointer">
                  <div className="bg-[#FDF6E3] rounded-t-[200px] rounded-b-[40px] px-12 pt-24 pb-12 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF5D6]">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full opacity-0 group-hover:opacity-40 blur-[80px] transition-opacity" />
                     <img 
                      src={ASSETS.carrot} 
                      alt="Sweet Carrot"
                      className="w-full h-[500px] object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2 filter drop-shadow-xl"
                     />
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-3xl font-serif text-[#2C3E50] mb-2">Sweet Carrot</h3>
                    <p className="text-[#64748B] mb-4">Vitamin A Rich • Single Origin</p>
                    <span className="text-xl font-bold text-[#A4C639]">$3.50</span>
                  </div>
               </div>

               {/* Product 2 */}
               <div className="group cursor-pointer mt-0 md:mt-24">
                  <div className="bg-[#E9EDC9] rounded-t-[200px] rounded-b-[40px] px-12 pt-24 pb-12 relative overflow-hidden transition-all duration-500 group-hover:bg-[#D4E09B]">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full opacity-0 group-hover:opacity-40 blur-[80px] transition-opacity" />
                     <img 
                      src={ASSETS.pea} 
                      alt="Spring Pea"
                      className="w-full h-[500px] object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 filter drop-shadow-xl"
                     />
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-3xl font-serif text-[#2C3E50] mb-2">Spring Pea</h3>
                    <p className="text-[#64748B] mb-4">Protein Packed • Stage 1</p>
                    <span className="text-xl font-bold text-[#A4C639]">$3.50</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Compostable Education Section */}
        <section id="impact" className="py-32 bg-[#F5F5F0] relative overflow-hidden">
           {/* Texture Overlay */}
           <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" 
                style={{ backgroundImage: `url(${ASSETS.texture})`, backgroundSize: 'cover' }} 
           />

           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl group">
                 <img 
                  src={ASSETS.hero} // Using hero again or texture zoom here would be good, using hero for now but zoomed
                  alt="Packaging Detail"
                  className="w-full h-full object-cover scale-150 group-hover:scale-125 transition-transform duration-[2s]"
                 />
                 <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center">
                       <Recycle className="w-12 h-12 text-white" />
                    </div>
                 </div>
                 {/* Texture Zoom Inset */}
                 <div className="absolute bottom-8 right-8 w-48 h-48 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                    <img src={ASSETS.texture} alt="Material Texture" className="w-full h-full object-cover scale-150" />
                 </div>
              </div>

              <div>
                <span className="text-[#8B5E3C] font-bold tracking-widest text-sm uppercase block mb-4">Packaged by Earth</span>
                <h2 className="text-5xl font-serif text-[#2C3E50] mb-8 leading-tight">
                  Not Plastic.<br/>
                  <span className="italic text-[#A4C639]">Just Plants.</span>
                </h2>

                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#E9EDC9] rounded-full flex items-center justify-center shrink-0">
                      <Sprout className="w-6 h-6 text-[#5F6F52]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Bio-Based Materials</h3>
                      <p className="text-[#64748B] leading-relaxed">
                        Made from FSC-certified wood pulp and non-GMO cornstarch. Our pouches feel like paper because they essentially are.
                      </p>
                    </div>
                  </div>

                   <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#FADADD] rounded-full flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-6 h-6 text-[#A15C65]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Safe for Baby</h3>
                      <p className="text-[#64748B] leading-relaxed">
                        No BPAs, no phthalates, no microplastics leaching into food. Tested for safety at every stage.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-[#E0F2F1] rounded-full flex items-center justify-center shrink-0">
                      <Recycle className="w-6 h-6 text-[#00897B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Home Compostable</h3>
                      <p className="text-[#64748B] leading-relaxed">
                        Toss it in your backyard bin. It breaks down into healthy soil within 24 weeks, completing the cycle of life.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-[#E2E8F0]">
                  <p className="text-sm font-medium text-[#64748B]">Packaging technology powered by <strong className="text-[#2C3E50]">AchievePack.com</strong></p>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2C3E50] text-[#E2E8F0] py-24 text-center">
            <div className="max-w-4xl mx-auto px-6">
               <h2 className="text-4xl font-serif text-white mb-8">Ready to start the journey?</h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20"
                    />
                    <button className="px-8 py-4 bg-[#A4C639] text-[#2C3E50] font-bold rounded-full hover:bg-[#B5D64C] transition-colors">
                      Join Club
                    </button>
               </div>
               <div className="mt-16 flex items-center justify-center gap-2 opacity-50 text-sm">
                  <span>© 2024 Achieve Baby.</span>
                  <span>•</span>
                  <span>Proudly using AchievePack Sustainable Solutions.</span>
               </div>
            </div>
        </footer>

      </main>
    </div>
  )
}
