import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Package, Leaf, Zap, Box as BoxIcon, Flame, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import PouchLayout from '../../components/pouch/PouchLayout'
import ProductCarousel from '../../components/ProductCarousel'
import VideoShowcase from '../../components/pouch/VideoShowcase'

// ============================================
// NEO-BRUTALIST COMPONENTS (Local)
// ============================================

const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#FF00FF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  
  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const typeSpeed = isDeleting ? 100 : 200
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
         // Finished typing word, wait before deleting
         setTimeout(() => setIsDeleting(true), 2000)
         return
      }
      
      if (isDeleting && text === '') {
         // Finished deleting, move to next word
         setIsDeleting(false)
         setWordIndex((prev) => prev + 1)
         return
      }
      
      setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1))
    }, typeSpeed)
    
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
      {text}<span className="text-black opacity-50 ml-1 animate-pulse">|</span>
    </span>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function PouchHomePage() {
  const navigate = useNavigate()
  const productsRef = useRef<HTMLElement>(null)

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Floating elements animation
  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }

  const PRODUCTS = [
    {
      id: 'stand-up',
      name: 'Stand Up Pouch',
      description: 'The industry standard. Perfect for snacks & supplements.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp'
    },
    {
      id: 'flat-bottom',
      name: 'Flat Bottom',
      description: 'Premium box-like stability. Best for coffee & tea.',
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp'
    },
    {
      id: 'spouted',
      name: 'Spouted Pouch',
      description: 'Flexible alternative to bottles. Lighter & cheaper.',
      price: '$0.90',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp'
    }
  ]

  // Add scroll detection for marquee speed boost
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <PouchLayout>
      <Helmet>
        <title>POUCH.ECO | Eco Packaging Protocol | Demo</title>
        <meta name="description" content="Sustainable packaging made simple. Low MOQ compostable pouches for startups. Get started with 500 units." />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video"
          >
            <source src="/video/pouch-eco-marketing-videos/problem.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/brand-reveal.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Material.mp4" type="video/mp4" />
            <source src="/video/pouch-eco-marketing-videos/Performance.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm">ECO_SYSTEM v2026</span>
              </div>
              
              <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                Start.<br/>
                Scale.<br/>
                <Typewriter words={["Sustain.", "Eco.", "Digital."]} />
              </h1>

              <div className="bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md">
                <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                  &gt; Eco packaging from 500 units.<br/>
                  &gt; Compostable // Recyclable // Bio-based.<br/>
                  &gt; Fast turnaround. No BS.
                </p>
                {/* Eco Material Badges */}
                <div className="flex gap-4 mt-4 border-t-2 border-black pt-4">
                  <img src="/eco-logo/transparent-bkg/compost.png" alt="Compostable" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/recycle.png" alt="Recyclable" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/biope.png" alt="Bio-based" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                  <img src="/eco-logo/transparent-bkg/pcr.png" alt="PCR" className="h-12 md:h-16 w-auto hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>Book Consultation</NeoButton>
                <NeoButton variant="secondary" onClick={() => navigate('/materials')}>View Materials</NeoButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <NeoCard className="bg-[#00FFFF] relative z-10 rotate-2 !p-0 overflow-hidden group max-w-md w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] opacity-20 z-0 mix-blend-multiply" />
                <img 
                  src="https://achievepack.com/imgs/landing-hero.webp" 
                  alt="Sustainable Pouch Hero" 
                  className="w-full h-full object-cover relative z-10 mix-blend-multiply opacity-90 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
                
                {/* Floating Tag */}
                <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20">
                  COMPOSTABLE_OK
                </motion.div>
                
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-[url('https://achievepack.com/imgs/paper-texture.png')] opacity-20 mix-blend-overlay z-10 pointer-events-none" />
              </NeoCard>
              
              {/* Decorative Background Elements */}
              <div className="absolute top-10 -right-4 md:-right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6 translate-y-4 translate-x-4" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF00FF] border-4 border-black flex items-center justify-center animate-bounce z-20 hidden md:flex">
                <span className="font-black text-xl rotate-[-15deg]">500!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Neo-Brutalist Style */}
      <section className="py-16 px-4 bg-white border-y-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">TRUSTED_BY</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
            Join <span className="text-[#10b981]">500+</span> Brands
          </h2>
          <p className="text-lg text-gray-700 font-['Space_Grotesk']">
            From startups to established names - they all started with 500 units
          </p>
        </div>

        {/* Logo Strip 1 - Scrolling Left */}
        <div className="relative -rotate-1 mb-6">
          <div className="bg-black border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Strip 2 - Scrolling Right */}
        <div className="relative rotate-1">
          <div className="bg-[#10b981] border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* First set */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-3-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
                { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
                { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
                { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
                { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
                { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
                { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
                { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
                { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
                { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
                { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
                { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
                { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
                { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
                { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
              ].slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-4-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for infinite scroll animations */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes scroll-left-fast {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right-fast {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 13s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 13s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }

          /* Speed up on page scroll */
          body.is-scrolling .animate-scroll-left {
            animation: scroll-left-fast 4s linear infinite;
          }

          body.is-scrolling .animate-scroll-right {
            animation: scroll-right-fast 4s linear infinite;
          }
        `}</style>
      </section>

      {/* Product Photos Carousel */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-[#D4FF00] px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-1">
            REAL_PRODUCTS • REAL_BRANDS
          </div>
          <h2 className="font-black text-5xl md:text-7xl uppercase mb-6">
            See Our <span className="text-[#10b981]">Work</span>
          </h2>
          <p className="font-['JetBrains_Mono'] text-lg max-w-2xl mx-auto text-gray-700">
            Browse real product photos from brands we've helped launch. Your brand could be next.
          </p>
        </div>
        
        <ProductCarousel autoPlay autoPlayInterval={4000} />
      </section>

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Feature Bento Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            Core<br/>Features
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            SELECT_MATERIAL_BELOW
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Low MOQ */}
          <NeoCard className="md:col-span-2 bg-[#F0F0F0] relative overflow-hidden group">
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-4 text-[#FF00FF]" />
              <h3 className="font-black text-3xl mb-4 uppercase">Low MOQ Protocol</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-md">
                Start with just 500 units. Test your market without massive inventory commitment. 
                Perfect for startups and new product launches.
              </p>
              <div className="flex gap-2">
                <NeoBadge color="bg-[#D4FF00]">500_MIN</NeoBadge>
                <NeoBadge color="bg-[#00FFFF]">Fast_Launch</NeoBadge>
              </div>
            </div>
             <img src="/imgs/infographic-low-moq.webp" className="absolute right-0 bottom-0 w-48 opacity-20 grayscale group-hover:scale-110 transition-transform duration-500" alt="Low MOQ" />
          </NeoCard>

          {/* Feature 2: Compostable */}
          <NeoCard color="bg-[#00FFFF]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Bio_Matrix</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Certified compostable materials. Industrial + home compost ready.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              STATUS: <span className="font-bold">BPI_CERTIFIED</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-compostable.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Compostable" />
          </NeoCard>

          {/* Feature 3: Fast Turnaround */}
          <NeoCard color="bg-[#D4FF00]" className="flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <Flame className="w-12 h-12 mb-4" />
              <h3 className="font-black text-3xl mb-2 uppercase">Fast_Ship</h3>
              <p className="font-['JetBrains_Mono'] text-sm mb-4">Samples in 2-3 weeks. Production in 6-8 weeks. No delays.</p>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4 relative z-10">
              SPEED: <span className="font-bold">OPTIMIZED</span>
            </div>
            <img src="https://achievepack.com/imgs/infographic-fast-turnaround.webp" className="absolute right-[-20%] bottom-[-20%] w-64 opacity-20 grayscale rotate-12 group-hover:rotate-0 transition-transform duration-500" alt="Fast Turnaround" />
          </NeoCard>

          {/* Feature 4: High Barrier */}
          <NeoCard className="md:col-span-2 bg-white relative overflow-hidden group">
            <div className="relative z-10">
              <BoxIcon className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="font-black text-3xl mb-4 uppercase">High-Barrier Tech</h3>
              <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 max-w-lg">
                Multi-layer barrier structures. O2 + moisture blocking. 
                Keeps product fresh for 6-18 months shelf life.
              </p>
              <NeoButton variant="primary" className="text-sm" onClick={() => navigate('/tech-specs')}>View Tech Specs</NeoButton>
            </div>
            <img src="https://achievepack.com/imgs/feature-barrier-options.webp" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500 mask-image-gradient" alt="Barrier Options" />
          </NeoCard>
        </div>
      </section>

      {/* Product Grid */}
      <section ref={productsRef} className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            Choose Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative">
                {/* Hover Card Effect */}
                <div className={`absolute inset-0 ${product.color} translate-x-4 translate-y-4 border-4 border-white transition-transform group-hover:translate-x-6 group-hover:translate-y-6`} />
                
                <div className="relative bg-white border-4 border-black p-6 h-full flex flex-col">
                  <div className="bg-gray-100 border-2 border-black aspect-square mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className={`absolute inset-0 ${product.color} opacity-20`} />
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 font-['JetBrains_Mono'] text-xs font-bold z-10">
                      ID: {product.id.toUpperCase()}
                    </div>
                  </div>

                  <h3 className="font-black text-3xl mb-2 uppercase">{product.name}</h3>
                  <p className="font-['JetBrains_Mono'] text-sm mb-6 flex-grow">{product.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 font-['JetBrains_Mono'] text-xs border-y-2 border-black py-4 bg-gray-50">
                    <div className="text-center">
                      <div className="font-bold">MOQ</div>
                      <div>{product.stats.moq}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">MAT</div>
                      <div>{product.stats.material}</div>
                    </div>
                    <div className="text-center border-l-2 border-black">
                      <div className="font-bold">BAR</div>
                      <div>{product.stats.barrier}</div>
                    </div>
                  </div>

                  <div className="text-center mb-4 font-black text-2xl">{product.price}</div>

                  <NeoButton className="w-full" onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
                    BOOK CALL
                  </NeoButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard color="bg-[#FF00FF]" className="text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-white" />
            ))}
          </div>
          <blockquote className="font-['JetBrains_Mono'] text-xl font-bold text-white mb-6 leading-relaxed">
            "Started with 500 pouches from POUCH.ECO. Best decision ever. Now ordering 10K+ monthly."
          </blockquote>
          <cite className="font-black text-lg text-white uppercase">
            - Sarah M., Brand Founder
          </cite>
        </NeoCard>
      </section>

      {/* Add animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-10px) rotate(-15deg);
          }
        }
        .mask-image-gradient {
          mask-image: linear-gradient(to left, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
        }
      `}</style>
    </PouchLayout>
  )
}
