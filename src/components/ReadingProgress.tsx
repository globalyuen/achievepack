import { useEffect } from 'react'
import { motion, useSpring } from 'motion/react'

// Reading Progress Bar Component - Fixed at top of page
const ReadingProgress: React.FC = () => {
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      scaleX.set(Math.min(1, Math.max(0, scrollPercent)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scaleX])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full h-1 bg-primary-200/30">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500"
        style={{ scaleX, transformOrigin: 'left' }}
      />
    </div>
  )
}

export default ReadingProgress
