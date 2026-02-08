import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RollingStripItem {
  type: 'brand' | 'testimonial' | 'product'
  image: string
  title: string
  subtitle?: string
  quote?: string
}

interface RollingStripProps {
  items: RollingStripItem[]
  autoPlay?: boolean
  interval?: number
}

export default function RollingStrip({ items, autoPlay = true, interval = 5000 }: RollingStripProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, items.length])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const currentItem = items[currentIndex]

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-hidden bg-black border-y-4 border-black"
    >
      {/* Main Strip */}
      <div className="relative h-[400px] md:h-[500px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={currentItem.image} 
                alt={currentItem.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center px-6 md:px-12">
              <div className="max-w-2xl">
                {/* Type Badge */}
                <div className="inline-block bg-[#D4FF00] border-2 border-white px-3 py-1 text-xs font-['JetBrains_Mono'] font-bold uppercase mb-4">
                  {currentItem.type === 'brand' && 'CLIENT'}
                  {currentItem.type === 'testimonial' && 'TESTIMONIAL'}
                  {currentItem.type === 'product' && 'PRODUCT'}
                </div>

                {/* Title */}
                <h3 className="font-black text-4xl md:text-6xl text-white mb-4 leading-none drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                  {currentItem.title}
                </h3>

                {/* Subtitle */}
                {currentItem.subtitle && (
                  <p className="text-white text-xl md:text-2xl mb-4 font-['Space_Grotesk'] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {currentItem.subtitle}
                  </p>
                )}

                {/* Quote */}
                {currentItem.quote && (
                  <p className="text-white text-lg italic border-l-4 border-[#D4FF00] pl-4 font-['Space_Grotesk'] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    "{currentItem.quote}"
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 z-20">
        {/* Prev Button */}
        <button
          onClick={goToPrev}
          className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#D4FF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="bg-white border-4 border-black px-4 py-2 font-['JetBrains_Mono'] font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-[#D4FF00] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1)
              setCurrentIndex(idx)
            }}
            className={`w-3 h-3 border-2 border-white transition-all ${
              idx === currentIndex ? 'bg-[#D4FF00] scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Pre-configured items for easy use
export const brandCaseItems: RollingStripItem[] = [
  {
    type: 'brand',
    image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp',
    title: 'Bean & Bole',
    subtitle: 'Portland Coffee Roastery',
    quote: '23% sales increase after switching to compostable bags'
  },
  {
    type: 'brand',
    image: '/imgs/seo-photos/a_nourishnow_seattle_morning_wellness_pouch_1061333.webp',
    title: 'NourishNow',
    subtitle: 'Seattle Wellness Brand',
    quote: 'Customers love the soft-touch matte finish'
  },
  {
    type: 'brand',
    image: '/imgs/seo-photos/a_roast_ritual_nyc_coffee_urban_2153150.webp',
    title: 'Roast Ritual NYC',
    subtitle: 'Urban Coffee Brand',
    quote: 'Started with 500, now ordering 5,000 monthly'
  },
  {
    type: 'brand',
    image: '/imgs/seo-photos/a_wholesome_bakery_pouch_kitchen_9227377.webp',
    title: 'Wholesome Bakery',
    subtitle: 'Artisan Bakery',
    quote: 'Perfect match for our artisan brand values'
  }
]

export const productShowcaseItems: RollingStripItem[] = [
  {
    type: 'product',
    image: '/all-product-photos/IMG_4362.webp',
    title: 'Compostable Pouches',
    subtitle: 'Home & Industrial Certified'
  },
  {
    type: 'product',
    image: '/all-product-photos/IMG_4395.webp',
    title: 'Coffee Bags',
    subtitle: 'With Degassing Valve'
  },
  {
    type: 'product',
    image: '/all-product-photos/IMG_4456.webp',
    title: 'Recyclable Mono-PE',
    subtitle: 'Circular Economy Ready'
  },
  {
    type: 'product',
    image: '/all-product-photos/IMG_4503.webp',
    title: 'Stand-Up Pouches',
    subtitle: 'Premium Shelf Presence'
  },
  {
    type: 'product',
    image: '/all-product-photos/IMG_4534.webp',
    title: 'Kraft Pouches',
    subtitle: 'Natural Eco Look'
  }
]
