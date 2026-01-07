import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react'
import { supabase } from '../../lib/supabase'

// Default demo content - can be overridden by admin settings
const DEFAULT_CONTENT = {
  brand: {
    name: 'Achieve Coffee',
    tagline: 'Go Against the Grain',
    taglineWords: ['Go', 'Against', 'the', 'Grain'],
    description: 'Surrender to the moment with each sip and every cup of our wide and varied specialty coffee selection.',
    ctaText: 'Shop Now',
    ctaLink: '#shop'
  },
  hero: {
    backgroundImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
    overlayOpacity: 0.4
  },
  marquee: {
    text: 'NEW * FRESH OFF THE TREE * NEW',
    speed: 30
  },
  products: [
    {
      id: '1',
      name: 'Achieve Signature Blend',
      price: 29.00,
      type: 'Single Origin',
      origin: 'Ethiopia',
      process: 'Natural',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'
    },
    {
      id: '2',
      name: 'Morning Ritual',
      price: 25.00,
      type: 'Single Origin',
      origin: 'Colombia',
      process: 'Washed',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80'
    },
    {
      id: '3',
      name: 'Red Honey Reserve',
      price: 34.00,
      type: 'Single Origin',
      origin: 'Costa Rica',
      process: 'Red Honey',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
    }
  ],
  collections: [
    {
      id: 'limited',
      name: 'Limited Series',
      logo: 'LIMITED',
      description: "They're the highest echelon of quality we find with producers we already work with. These coffees are produced in very small quantity which makes them highly limited.",
      bgColor: 'from-amber-900 to-amber-950',
      images: [
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80'
      ]
    },
    {
      id: 'bright',
      name: 'Bright Series',
      logo: 'BRIGHT',
      description: 'They are developed with bright aromatic flavors in mind. These lighter roasts will require more attention to the extraction details.',
      bgColor: 'from-orange-800 to-orange-950',
      images: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80'
      ]
    },
    {
      id: 'warm',
      name: 'Warm Series',
      logo: 'WARM',
      description: 'It showcases the personality of the coffee without adding a burnt taste. These coffees are developed with sweetness, warmth, round body in mind.',
      bgColor: 'from-stone-800 to-stone-950',
      images: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
        'https://images.unsplash.com/photo-1587734005433-0a43e5f9e7c4?w=400&q=80'
      ]
    }
  ],
  mission: {
    title: 'Our Mission',
    content: "We've been accused of having a one-track mind. And to those accusations we say - thank you. Because we know it's by focusing on one thing that many things happen. And at Achieve, that one thing was always coffee.",
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
    coordinates: '22.3193° N — 114.1694° E'
  },
  subscription: {
    title: 'Never Run Out',
    steps: [
      'Select your coffee and size',
      'Select your frequency',
      'Sit back and Achieve'
    ],
    discount: 'Save up to 15% on every order'
  }
}

// Parallax hook for scroll effects
const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY
        setOffset(scrolled * speed)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}

// Scroll reveal hook
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Hero Text Animation Component - GSAP-like staggered reveal
const HeroText: React.FC<{ words: string[] }> = ({ words }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-black uppercase leading-[0.85] tracking-tighter">
      {words.map((word, i) => (
        <span
          key={i}
          className="block overflow-hidden"
        >
          <span
            className={`block transition-all duration-700 ease-out ${
              mounted
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  )
}

// Marquee Component - Infinite scroll
const Marquee: React.FC<{ text: string; speed?: number }> = ({ text, speed = 30 }) => {
  return (
    <div className="overflow-hidden bg-neutral-900 py-4">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-white/80 text-sm uppercase tracking-[0.3em] mx-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

// Product Card with hover effects
const ProductCard: React.FC<{
  product: typeof DEFAULT_CONTENT.products[0]
}> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-cream-100/10 backdrop-blur-sm border-2 transition-all duration-300 ${
          isHovered
            ? 'border-white/40 scale-[1.02] shadow-2xl shadow-white/10'
            : 'border-white/20'
        }`}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold mb-1">{product.name}</h3>
          <p className="text-2xl font-light mb-4">${product.price.toFixed(2)}</p>
          <div className="space-y-1 text-sm text-white/70">
            <p><span className="text-white/50">Type:</span> {product.type}</p>
            <p><span className="text-white/50">Origin:</span> {product.origin}</p>
            <p><span className="text-white/50">Process:</span> {product.process}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Collection Card with image carousel
const CollectionCard: React.FC<{
  collection: typeof DEFAULT_CONTENT.collections[0]
  isReversed?: boolean
}> = ({ collection, isReversed = false }) => {
  const { ref, isVisible } = useScrollReveal()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % collection.images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [collection.images.length])

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`${isReversed ? 'md:order-2' : ''}`}>
        <div className="flex gap-2 overflow-hidden">
          {collection.images.map((img, i) => (
            <div
              key={i}
              className={`w-1/3 aspect-[3/4] rounded-xl overflow-hidden transition-all duration-500 ${
                i === currentImage ? 'scale-105' : 'scale-100 opacity-70'
              }`}
            >
              <img
                src={img}
                alt={`${collection.name} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${isReversed ? 'md:order-1' : ''} text-white`}>
        <span className="text-xs tracking-[0.4em] text-white/50 mb-2 block">
          {collection.logo}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{collection.name}</h3>
        <p className="text-white/70 leading-relaxed mb-6">{collection.description}</p>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-white/30 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all">
            Shop
          </button>
          <button className="px-6 py-3 text-sm uppercase tracking-wider text-white/70 hover:text-white transition-all flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Demo Page Component
const AchieveCoffeeDemoPage: React.FC = () => {
  const [content, setContent] = useState(DEFAULT_CONTENT)
  const [isLoading, setIsLoading] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)
  const { ref: parallaxRef, offset } = useParallax(0.3)

  // Load content from Supabase first, fallback to localStorage
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Try to load from Supabase mini_sites table
        const { data, error } = await supabase
          .from('mini_sites')
          .select('content')
          .eq('slug', 'achieve-coffee-demo')
          .eq('status', 'published')
          .single()
        
        if (data?.content && !error) {
          // Successfully loaded from database
          setContent({ ...DEFAULT_CONTENT, ...data.content })
          // Also sync to localStorage for offline use
          localStorage.setItem('achieve_coffee_demo_content', JSON.stringify(data.content))
        } else {
          // Fallback to localStorage if database fails
          const savedContent = localStorage.getItem('achieve_coffee_demo_content')
          if (savedContent) {
            try {
              const parsed = JSON.parse(savedContent)
              setContent({ ...DEFAULT_CONTENT, ...parsed })
            } catch (e) {
              console.error('Failed to parse saved content')
            }
          }
        }
      } catch (err) {
        console.error('Error loading from Supabase:', err)
        // Fallback to localStorage
        const savedContent = localStorage.getItem('achieve_coffee_demo_content')
        if (savedContent) {
          try {
            const parsed = JSON.parse(savedContent)
            setContent({ ...DEFAULT_CONTENT, ...parsed })
          } catch (e) {
            console.error('Failed to parse saved content')
          }
        }
      }
      setIsLoading(false)
    }
    
    loadContent()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{content.brand.name} | Premium Specialty Coffee</title>
        <meta name="description" content={content.brand.description} />
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee var(--marquee-speed, 30s) linear infinite;
          }
        `}</style>
      </Helmet>

      <div className="min-h-screen bg-neutral-950 text-white font-sans">
        {/* Achieve Pack Return Banner */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              to="/free-service/website-upgrade" 
              className="flex items-center gap-2 text-sm hover:text-white/80 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Achieve Pack
            </Link>
            <span className="text-xs text-white/80 hidden sm:block">This is a demo website created by Achieve Pack</span>
            <Link 
              to="/store" 
              className="text-sm font-medium hover:text-white/80 transition"
            >
              Browse Packaging →
            </Link>
          </div>
        </div>

        {/* Fixed Navigation */}
        <nav className="fixed top-[40px] left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-bold tracking-tight">{content.brand.name}</span>
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              <a href="#shop" className="hover:text-white/60 transition">Shop</a>
              <a href="#collections" className="hover:text-white/60 transition">Collections</a>
              <a href="#about" className="hover:text-white/60 transition">About</a>
              <a href="#subscribe" className="hover:text-white/60 transition">Subscribe</a>
            </div>
            <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition">
              Cart (0)
            </button>
          </div>
        </nav>

        {/* Hero Section - Full viewport with parallax */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <div
            ref={parallaxRef}
            className="absolute inset-0 w-full h-[120%]"
            style={{ transform: `translateY(${offset}px)` }}
          >
            <img
              src={content.hero.backgroundImage}
              alt="Coffee hero"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-neutral-950"
              style={{ opacity: content.hero.overlayOpacity }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4">
            <HeroText words={content.brand.taglineWords} />
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
              {content.brand.description}
            </p>
            <a
              href={content.brand.ctaLink}
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 border-2 border-white/50 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              {content.brand.ctaText}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/50" />
          </div>
        </section>

        {/* Products Section */}
        <section id="shop" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.4em] text-white/50 mb-4 block">
                A SPECIALTY COFFEE COMPANY
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {content.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Marquee */}
        <Marquee text={content.marquee.text} speed={content.marquee.speed} />

        {/* Collections Section */}
        <section id="collections" className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Collections</h2>
              <a href="#" className="text-white/60 hover:text-white transition flex items-center justify-center gap-2">
                View all <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-32">
              {content.collections.map((collection, i) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                  isReversed={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${content.mission.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-neutral-950/70" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              {content.mission.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {content.mission.content}
            </p>
            <span className="text-white/40 text-sm tracking-widest">
              {content.mission.coordinates}
            </span>
          </div>
        </section>

        {/* Subscription Section */}
        <section id="subscribe" className="py-24 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {content.subscription.title}
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              {content.subscription.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <span className="text-white/70">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-white/60 mb-8">{content.subscription.discount}</p>
            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition">
              Subscribe Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-neutral-950 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-3xl font-bold tracking-tight block mb-8">
              {content.brand.name}
            </span>
            <p className="text-white/50 text-sm">
              Demo website created by <a href="https://achievepack.com" className="text-white/70 hover:text-white">Achieve Pack</a> • Free Web Design Service
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default AchieveCoffeeDemoPage
