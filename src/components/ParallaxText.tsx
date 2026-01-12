import { useRef, ReactNode } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react'

/**
 * wrap utility function - wraps a value between min and max
 */
function wrap(min: number, max: number, v: number): number {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

interface ParallaxTextProps {
  children: ReactNode
  baseVelocity?: number
  className?: string
  textClassName?: string
}

/**
 * ParallaxText - A scroll-velocity-based parallax text marquee effect
 * 
 * @param children - The text to display and repeat
 * @param baseVelocity - Base speed of the text movement (negative = left, positive = right)
 * @param className - Additional classes for the container
 * @param textClassName - Additional classes for the text spans
 */
export function ParallaxText({ 
  children, 
  baseVelocity = 100,
  className = '',
  textClassName = ''
}: ParallaxTextProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  // Transform baseX to a percentage that wraps smoothly
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    // Change direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div 
        className="flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className={`block mr-8 ${textClassName}`}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/**
 * ParallaxTextSection - A complete section with two rows of parallax text
 * moving in opposite directions
 */
interface ParallaxTextSectionProps {
  text1: string
  text2: string
  velocity1?: number
  velocity2?: number
  className?: string
  textClassName?: string
  bgClassName?: string
}

export function ParallaxTextSection({
  text1,
  text2,
  velocity1 = -5,
  velocity2 = 5,
  className = '',
  textClassName = 'text-5xl md:text-7xl font-bold uppercase tracking-tight',
  bgClassName = 'py-12 bg-black'
}: ParallaxTextSectionProps) {
  return (
    <section className={`${bgClassName} ${className}`}>
      <ParallaxText baseVelocity={velocity1} textClassName={textClassName}>
        {text1}
      </ParallaxText>
      <ParallaxText baseVelocity={velocity2} textClassName={textClassName}>
        {text2}
      </ParallaxText>
    </section>
  )
}

export default ParallaxText
