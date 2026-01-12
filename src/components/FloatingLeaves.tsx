import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

interface LeafProps {
  src: string
  size: number // in px
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  rotation: number
  filter: string // CSS filter for color adjustment
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  parallaxStrength?: number
}

function FloatingLeaf({ 
  src, 
  size, 
  position, 
  rotation, 
  filter, 
  delay = 0,
  direction = 'up',
  parallaxStrength = 100
}: LeafProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Create parallax effect based on direction
  const yTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [parallaxStrength, -parallaxStrength] : [-parallaxStrength, parallaxStrength]
  )
  
  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [parallaxStrength/2, -parallaxStrength/2] : [-parallaxStrength/2, parallaxStrength/2]
  )

  const rotateTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [rotation - 15, rotation + 15]
  )

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      ref={ref}
      className="absolute pointer-events-none z-0"
      style={{
        ...position,
        width: size,
        height: size,
        y: yTransform,
        x: ['left', 'right'].includes(direction) ? xTransform : 0,
        rotate: rotateTransform,
        opacity: opacityTransform,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-contain"
        style={{ filter }}
        loading="lazy"
      />
    </motion.div>
  )
}

interface FloatingLeavesProps {
  variant?: 'hero' | 'light' | 'green' | 'neutral' | 'warm' | 'cool' | 'accent' | 'soft'
  density?: 'low' | 'medium' | 'high'
  pattern?: 'corners' | 'scattered' | 'diagonal' | 'wave' | 'cluster'
}

export default function FloatingLeaves({ variant = 'light', density = 'medium', pattern = 'corners' }: FloatingLeavesProps) {
  const leafSrc = '/imgs/bkg/leaf1.png'
  
  // Extended filter presets for different sections - MORE VISIBLE
  const filters = {
    hero: 'brightness(1.2) saturate(0.5) opacity(0.35)',
    light: 'brightness(1.3) saturate(0.4) sepia(0.15) opacity(0.30)',
    green: 'brightness(1.1) saturate(0.7) hue-rotate(-10deg) opacity(0.35)',
    neutral: 'brightness(1.4) saturate(0.3) grayscale(0.4) opacity(0.25)',
    warm: 'brightness(1.2) saturate(0.5) sepia(0.4) hue-rotate(-20deg) opacity(0.30)',
    cool: 'brightness(1.2) saturate(0.4) hue-rotate(30deg) opacity(0.30)',
    accent: 'brightness(1.0) saturate(0.8) hue-rotate(40deg) opacity(0.35)',
    soft: 'brightness(1.5) saturate(0.2) grayscale(0.6) opacity(0.25)',
  }

  const filter = filters[variant]

  // Pattern-based leaf configurations - BIGGER SIZES
  const getPatternConfigs = (): LeafProps[] => {
    switch (pattern) {
      case 'diagonal':
        return [
          { src: leafSrc, size: 280, position: { top: '2%', left: '2%' }, rotation: 45, filter, direction: 'right', parallaxStrength: 100 },
          { src: leafSrc, size: 200, position: { top: '20%', left: '20%' }, rotation: 50, filter, delay: 0.1, direction: 'up', parallaxStrength: 120 },
          { src: leafSrc, size: 240, position: { top: '40%', left: '40%' }, rotation: 40, filter, delay: 0.2, direction: 'down', parallaxStrength: 110 },
          { src: leafSrc, size: 180, position: { top: '60%', left: '60%' }, rotation: 55, filter, delay: 0.3, direction: 'left', parallaxStrength: 130 },
          { src: leafSrc, size: 260, position: { bottom: '5%', right: '5%' }, rotation: 35, filter, delay: 0.4, direction: 'up', parallaxStrength: 90 },
        ]
      case 'wave':
        return [
          { src: leafSrc, size: 240, position: { top: '5%', left: '-5%' }, rotation: 20, filter, direction: 'right', parallaxStrength: 100 },
          { src: leafSrc, size: 200, position: { top: '15%', left: '15%' }, rotation: -15, filter, delay: 0.1, direction: 'up', parallaxStrength: 120 },
          { src: leafSrc, size: 220, position: { top: '10%', left: '35%' }, rotation: 25, filter, delay: 0.15, direction: 'down', parallaxStrength: 110 },
          { src: leafSrc, size: 180, position: { top: '20%', left: '55%' }, rotation: -20, filter, delay: 0.2, direction: 'up', parallaxStrength: 130 },
          { src: leafSrc, size: 260, position: { top: '5%', right: '-3%' }, rotation: 30, filter, delay: 0.25, direction: 'left', parallaxStrength: 90 },
          { src: leafSrc, size: 200, position: { bottom: '10%', left: '5%' }, rotation: -25, filter, delay: 0.3, direction: 'right', parallaxStrength: 105 },
          { src: leafSrc, size: 230, position: { bottom: '15%', left: '30%' }, rotation: 15, filter, delay: 0.35, direction: 'up', parallaxStrength: 115 },
          { src: leafSrc, size: 190, position: { bottom: '5%', right: '15%' }, rotation: -30, filter, delay: 0.4, direction: 'down', parallaxStrength: 95 },
        ]
      case 'cluster':
        return [
          // Top-left cluster
          { src: leafSrc, size: 300, position: { top: '0%', left: '-8%' }, rotation: 15, filter, direction: 'right', parallaxStrength: 80 },
          { src: leafSrc, size: 200, position: { top: '8%', left: '5%' }, rotation: 45, filter, delay: 0.1, direction: 'up', parallaxStrength: 100 },
          { src: leafSrc, size: 160, position: { top: '0%', left: '15%' }, rotation: -20, filter, delay: 0.15, direction: 'down', parallaxStrength: 120 },
          // Bottom-right cluster
          { src: leafSrc, size: 320, position: { bottom: '0%', right: '-10%' }, rotation: -25, filter, delay: 0.2, direction: 'left', parallaxStrength: 75 },
          { src: leafSrc, size: 180, position: { bottom: '10%', right: '5%' }, rotation: 35, filter, delay: 0.25, direction: 'up', parallaxStrength: 95 },
          { src: leafSrc, size: 140, position: { bottom: '3%', right: '20%' }, rotation: -10, filter, delay: 0.3, direction: 'down', parallaxStrength: 110 },
        ]
      case 'scattered':
        return [
          { src: leafSrc, size: 220, position: { top: '5%', left: '10%' }, rotation: 35, filter, direction: 'up', parallaxStrength: 110 },
          { src: leafSrc, size: 180, position: { top: '15%', right: '15%' }, rotation: -45, filter, delay: 0.1, direction: 'down', parallaxStrength: 120 },
          { src: leafSrc, size: 260, position: { top: '35%', left: '-5%' }, rotation: 20, filter, delay: 0.15, direction: 'right', parallaxStrength: 90 },
          { src: leafSrc, size: 200, position: { top: '50%', right: '5%' }, rotation: -30, filter, delay: 0.2, direction: 'left', parallaxStrength: 105 },
          { src: leafSrc, size: 170, position: { top: '30%', left: '45%' }, rotation: 55, filter, delay: 0.25, direction: 'up', parallaxStrength: 140 },
          { src: leafSrc, size: 240, position: { bottom: '10%', left: '20%' }, rotation: -15, filter, delay: 0.3, direction: 'down', parallaxStrength: 100 },
          { src: leafSrc, size: 190, position: { bottom: '5%', right: '25%' }, rotation: 40, filter, delay: 0.35, direction: 'up', parallaxStrength: 115 },
        ]
      case 'corners':
      default:
        // Use density-based configs for corners pattern
        return getDensityConfigs()
    }
  }

  const getDensityConfigs = (): LeafProps[] => {
    return density === 'high' ? [
      // Top corners - BIGGER
      { src: leafSrc, size: 360, position: { top: '0%', left: '-10%' }, rotation: 25, filter, direction: 'right', parallaxStrength: 100 },
      { src: leafSrc, size: 280, position: { top: '3%', right: '-8%' }, rotation: -30, filter, delay: 0.1, direction: 'left', parallaxStrength: 80 },
      
      // Middle section - scattered
      { src: leafSrc, size: 200, position: { top: '20%', left: '5%' }, rotation: 45, filter, delay: 0.2, direction: 'up', parallaxStrength: 140 },
      { src: leafSrc, size: 240, position: { top: '25%', right: '3%' }, rotation: -20, filter, delay: 0.15, direction: 'down', parallaxStrength: 120 },
      { src: leafSrc, size: 160, position: { top: '30%', left: '40%' }, rotation: 60, filter, delay: 0.3, direction: 'up', parallaxStrength: 170 },
      
      // Center area
      { src: leafSrc, size: 320, position: { top: '40%', left: '-12%' }, rotation: 15, filter, delay: 0.25, direction: 'right', parallaxStrength: 90 },
      { src: leafSrc, size: 180, position: { top: '45%', right: '0%' }, rotation: -45, filter, delay: 0.35, direction: 'left', parallaxStrength: 110 },
      
      // Lower middle
      { src: leafSrc, size: 220, position: { top: '55%', left: '10%' }, rotation: 30, filter, delay: 0.4, direction: 'up', parallaxStrength: 130 },
      { src: leafSrc, size: 260, position: { top: '60%', right: '8%' }, rotation: -15, filter, delay: 0.3, direction: 'down', parallaxStrength: 100 },
      
      // Bottom corners
      { src: leafSrc, size: 300, position: { bottom: '5%', left: '-8%' }, rotation: 40, filter, delay: 0.45, direction: 'right', parallaxStrength: 80 },
      { src: leafSrc, size: 340, position: { bottom: '0%', right: '-10%' }, rotation: -25, filter, delay: 0.5, direction: 'left', parallaxStrength: 70 },
    ] : density === 'medium' ? [
      // Corners - BIGGER
      { src: leafSrc, size: 320, position: { top: '0%', left: '-10%' }, rotation: 20, filter, direction: 'right', parallaxStrength: 100 },
      { src: leafSrc, size: 240, position: { top: '5%', right: '-6%' }, rotation: -35, filter, delay: 0.1, direction: 'left', parallaxStrength: 80 },
      
      // Middle scattered
      { src: leafSrc, size: 200, position: { top: '35%', left: '0%' }, rotation: 50, filter, delay: 0.2, direction: 'up', parallaxStrength: 120 },
      { src: leafSrc, size: 180, position: { top: '45%', right: '-2%' }, rotation: -40, filter, delay: 0.25, direction: 'down', parallaxStrength: 110 },
      
      // Bottom
      { src: leafSrc, size: 280, position: { bottom: '3%', left: '-8%' }, rotation: 35, filter, delay: 0.35, direction: 'right', parallaxStrength: 90 },
      { src: leafSrc, size: 260, position: { bottom: '0%', right: '-6%' }, rotation: -20, filter, delay: 0.4, direction: 'left', parallaxStrength: 80 },
    ] : [
      // Low density - BIGGER corners
      { src: leafSrc, size: 280, position: { top: '3%', left: '-8%' }, rotation: 25, filter, direction: 'right', parallaxStrength: 80 },
      { src: leafSrc, size: 240, position: { bottom: '3%', right: '-6%' }, rotation: -30, filter, delay: 0.2, direction: 'left', parallaxStrength: 70 },
    ]
  }

  const leafConfigs = pattern === 'corners' ? getDensityConfigs() : getPatternConfigs()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leafConfigs.map((config, index) => (
        <FloatingLeaf key={index} {...config} />
      ))}
    </div>
  )
}

// Section-specific wrapper component
interface SectionLeavesProps {
  children: React.ReactNode
  variant?: 'hero' | 'light' | 'green' | 'neutral' | 'warm' | 'cool' | 'accent' | 'soft'
  density?: 'low' | 'medium' | 'high'
  pattern?: 'corners' | 'scattered' | 'diagonal' | 'wave' | 'cluster'
  className?: string
}

export function SectionWithLeaves({ 
  children, 
  variant = 'light', 
  density = 'medium',
  pattern = 'corners',
  className = ''
}: SectionLeavesProps) {
  return (
    <div className={`relative ${className}`}>
      <FloatingLeaves variant={variant} density={density} pattern={pattern} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
