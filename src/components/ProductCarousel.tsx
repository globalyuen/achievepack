import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductCarouselProps {
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

// 所有产品照片路径
const productImages = [
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
  className = ''
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-play功能
  useEffect(() => {
    if (!autoPlay || isHovering) return

    const timer = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [currentIndex, autoPlay, autoPlayInterval, isHovering])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
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

  return (
    <div 
      className={`relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 主图片容器 */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-neutral-50">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={productImages[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </AnimatePresence>

        {/* 左右箭头按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black hover:bg-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 z-10 flex items-center justify-center group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-black hover:bg-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-105 z-10 flex items-center justify-center group"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* 图片计数器 */}
        <div className="absolute top-4 right-4 bg-black text-[#D4FF00] px-3 py-1 font-['JetBrains_Mono'] text-sm font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(212,255,0,1)] z-10">
          {currentIndex + 1} / {productImages.length}
        </div>
      </div>

      {/* 指示器点 */}
      <div className="flex items-center justify-center gap-2 py-4 px-4 bg-neutral-50 border-t-4 border-black overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all border-2 border-black ${
                index === currentIndex
                  ? 'w-12 h-4 bg-[#10b981] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'w-4 h-4 bg-white hover:bg-[#D4FF00] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 缩略图预览（桌面端） */}
      <div className="hidden md:flex items-center gap-3 p-4 bg-white border-t-4 border-black overflow-x-auto">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-20 h-20 border-4 overflow-hidden transition-all hover:scale-105 ${
              index === currentIndex
                ? 'border-[#10b981] shadow-[4px_4px_0px_0px_rgba(16,185,129,1)]'
                : 'border-black hover:border-[#D4FF00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
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
