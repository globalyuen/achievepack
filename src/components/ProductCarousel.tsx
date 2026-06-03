/**
 * ProductCarousel Component
 * 
 * Displays product photos in a carousel format with auto-play functionality
 * Deployed: 2026-02-08
 */
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductCarouselProps {
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
  variant?: 'neobrutalist' | 'clean'
}

// 所有产品照片路径
const productImages = [
  // New Client Samples
  '/imgs/clients-sample/IMG_6311.jpg',
  '/imgs/clients-sample/IMG_6312.jpg',
  '/imgs/clients-sample/IMG_8013.jpg',
  '/imgs/clients-sample/IMG_8016.jpg',
  '/imgs/clients-sample/IMG_8020.jpg',
  '/imgs/clients-sample/IMG_8028.jpg',
  '/imgs/clients-sample/IMG_8032.jpg',
  '/imgs/clients-sample/IMG_8034.jpg',
  '/imgs/clients-sample/IMG_8042.jpg',
  '/imgs/clients-sample/IMG_8043.jpg',
  '/imgs/clients-sample/IMG_8048.jpg',
  '/imgs/clients-sample/IMG_8053.jpg',

  // Original Product Photos
  '/all-product-photos/IMG_4362.webp',
  '/all-product-photos/IMG_4372.webp',
  '/all-product-photos/IMG_4385.webp',
  '/all-product-photos/IMG_4395.webp',
  '/all-product-photos/IMG_4407.webp',
  '/all-product-photos/IMG_4414.webp',
  '/all-product-photos/IMG_4425.webp',
  '/all-product-photos/IMG_4447.webp',
  '/all-product-photos/IMG_4456.webp',
  '/all-product-photos/IMG_4464.webp',
  '/all-product-photos/IMG_4474.webp',
  '/all-product-photos/IMG_4486.webp',
  '/all-product-photos/IMG_4495.webp',
  '/all-product-photos/IMG_4503.webp',
  '/all-product-photos/IMG_4513.webp',
  '/all-product-photos/IMG_4525.webp',
  '/all-product-photos/IMG_4534.webp',
  '/all-product-photos/IMG_4543.webp',
  '/all-product-photos/IMG_4561.webp',
  '/all-product-photos/IMG_4562.webp',
  '/all-product-photos/IMG_4563.webp',
  '/all-product-photos/IMG_4564.webp',
  '/all-product-photos/IMG_4565.webp',
  '/all-product-photos/IMG_4567.webp',
  '/all-product-photos/IMG_4569.webp'
]

export default function ProductCarousel({ 
  autoPlay = true, 
  autoPlayInterval = 4000,
  className = '',
  variant = 'neobrutalist'
}: ProductCarouselProps) {
  // Randomize all images sequence once on load (synchronously initialized)
  const [shuffledImages] = useState<string[]>(() => {
    return [...productImages].sort(() => Math.random() - 0.5)
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-play功能
  useEffect(() => {
    if (!autoPlay || isHovering || shuffledImages.length === 0) return

    const timer = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, autoPlayInterval, isHovering, shuffledImages])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  if (shuffledImages.length === 0) return null

  // Conditional class configurations based on variant
  const containerClass = variant === 'neobrutalist'
    ? `border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white overflow-hidden`
    : `border border-neutral-200 rounded-2xl shadow-xl bg-white overflow-hidden`

  const imageContainerClass = variant === 'neobrutalist'
    ? `relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-50`
    : `relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-50 rounded-t-2xl`

  const prevBtnClass = variant === 'neobrutalist'
    ? `absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black hover:bg-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 z-10 flex items-center justify-center group`
    : `absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-full text-neutral-700 hover:bg-primary-500 hover:text-white transition-all shadow-md hover:scale-105 z-10 flex items-center justify-center group`

  const nextBtnClass = variant === 'neobrutalist'
    ? `absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black hover:bg-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 z-10 flex items-center justify-center group`
    : `absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-full text-neutral-700 hover:bg-primary-500 hover:text-white transition-all shadow-md hover:scale-105 z-10 flex items-center justify-center group`

  const counterClass = variant === 'neobrutalist'
    ? `absolute top-4 right-4 bg-black text-[#D4FF00] px-3 py-1 font-['JetBrains_Mono'] text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(212,255,0,1)] z-10`
    : `absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-10`

  const dotsContainerClass = variant === 'neobrutalist'
    ? `flex items-center justify-center gap-2 py-4 px-4 bg-neutral-50 border-t-4 border-black overflow-x-auto`
    : `flex items-center justify-center gap-2 py-4 px-4 bg-neutral-50 border-t border-neutral-200 overflow-x-auto`

  const thumbnailsContainerClass = variant === 'neobrutalist'
    ? `hidden md:flex items-center gap-3 p-4 bg-white border-t-4 border-black overflow-x-auto`
    : `hidden md:flex items-center gap-3 p-4 bg-white border-t border-neutral-200 overflow-x-auto`

  const getDotClass = (isActive: boolean) => {
    if (variant === 'neobrutalist') {
      return `transition-all border-2 border-black ${
        isActive
          ? 'w-12 h-4 bg-[#10b981] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
          : 'w-4 h-4 bg-white hover:bg-[#D4FF00] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
      }`
    } else {
      return `transition-all rounded-full ${
        isActive
          ? 'w-8 h-2 bg-primary-500'
          : 'w-2 h-2 bg-neutral-300 hover:bg-primary-400'
      }`
    }
  }

  const getThumbnailClass = (isActive: boolean) => {
    if (variant === 'neobrutalist') {
      return `flex-shrink-0 w-20 h-20 border-4 overflow-hidden transition-all hover:scale-105 ${
        isActive
          ? 'border-[#10b981] shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]'
          : 'border-black hover:border-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
      }`
    } else {
      return `flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-all hover:scale-105 ${
        isActive
          ? 'border-primary-500 shadow-md scale-105'
          : 'border-neutral-200 hover:border-primary-300 shadow-sm'
      }`
    }
  }

  return (
    <div 
      className={`relative ${containerClass} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 主图片容器 */}
      <div className={imageContainerClass}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={shuffledImages[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring" as const, stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </AnimatePresence>

        {/* 左右箭头按钮 */}
        <button
          onClick={prevSlide}
          className={prevBtnClass}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className={nextBtnClass}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* 图片计数器 */}
        <div className={counterClass}>
          {currentIndex + 1} / {shuffledImages.length}
        </div>
      </div>

      {/* 指示器点 */}
      <div className={dotsContainerClass}>
        <div className="flex items-center gap-2 min-w-max">
          {shuffledImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={getDotClass(index === currentIndex)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 缩略图预览（桌面端） */}
      <div className={thumbnailsContainerClass}>
        {shuffledImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={getThumbnailClass(index === currentIndex)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
