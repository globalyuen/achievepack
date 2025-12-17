import { useMemo } from 'react'
import { motion } from 'motion/react'

// Material color themes for each scene
export const MATERIAL_THEMES = {
  compostable: {
    blob1: ['#8B7355', '#a67c52'],  // kraft/earth tones
    blob2: ['#d4a574', '#c4a35a'],
    blob3: ['#6b8e23', '#556b2f'],  // olive green
    particles: ['#8B7355', '#d4a574', '#6b8e23', '#a67c52'],
    bgGradient: 'from-amber-50/60 via-transparent to-amber-100/40',
  },
  bioplastic: {
    blob1: ['#10b981', '#34d399'],  // fresh green
    blob2: ['#6ee7b7', '#a7f3d0'],
    blob3: ['#059669', '#047857'],
    particles: ['#10b981', '#34d399', '#6ee7b7', '#059669'],
    bgGradient: 'from-green-50/60 via-transparent to-emerald-100/40',
  },
  pcr: {
    blob1: ['#0ea5e9', '#38bdf8'],  // cool blue
    blob2: ['#7dd3fc', '#bae6fd'],
    blob3: ['#0284c7', '#0369a1'],
    particles: ['#0ea5e9', '#38bdf8', '#7dd3fc', '#64748b'],
    bgGradient: 'from-sky-50/60 via-transparent to-blue-100/40',
  },
  recyclable: {
    blob1: ['#14b8a6', '#2dd4bf'],  // teal/mint
    blob2: ['#5eead4', '#99f6e4'],
    blob3: ['#0d9488', '#0f766e'],
    particles: ['#14b8a6', '#2dd4bf', '#5eead4', '#10b981'],
    bgGradient: 'from-teal-50/60 via-transparent to-cyan-100/40',
  },
}

interface FloatingParticle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  colorIndex: number
  layer: 'front' | 'back' // front or back layer
}

interface EcoBackgroundProps {
  materialType?: 'compostable' | 'bioplastic' | 'pcr' | 'recyclable'
}

export function EcoBackground({ materialType = 'compostable' }: EcoBackgroundProps) {
  const theme = MATERIAL_THEMES[materialType]
  
  // Reduced particles (20 instead of 40) for cleaner look
  const particles: FloatingParticle[] = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // smaller particles
      duration: Math.random() * 20 + 15, // slower
      delay: Math.random() * 8,
      colorIndex: Math.floor(Math.random() * 4),
      layer: Math.random() > 0.5 ? 'front' : 'back'
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Particles (behind blobs) */}
      {particles.filter(p => p.layer === 'back').map((particle) => (
        <motion.div
          key={`back-${particle.id}`}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            width: particle.size,
            height: particle.size,
            backgroundColor: theme.particles[particle.colorIndex],
            opacity: 0.3,
          }}
          animate={{
            y: [0, -1400],
            opacity: [0, 0.4, 0.3, 0],
            scale: [0.5, 1, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Organic Blob Layer - Main eco energy field */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <motion.linearGradient 
            id="blob1-grad" 
            x1="0%" y1="0%" x2="100%" y2="100%"
          >
            <motion.stop 
              offset="0%" 
              animate={{ stopColor: theme.blob1[0] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.35" 
            />
            <motion.stop 
              offset="100%" 
              animate={{ stopColor: theme.blob1[1] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.15" 
            />
          </motion.linearGradient>
          <motion.linearGradient 
            id="blob2-grad" 
            x1="0%" y1="100%" x2="100%" y2="0%"
          >
            <motion.stop 
              offset="0%" 
              animate={{ stopColor: theme.blob2[0] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.25" 
            />
            <motion.stop 
              offset="100%" 
              animate={{ stopColor: theme.blob2[1] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.08" 
            />
          </motion.linearGradient>
          <motion.linearGradient 
            id="blob3-grad" 
            x1="100%" y1="0%" x2="0%" y2="100%"
          >
            <motion.stop 
              offset="0%" 
              animate={{ stopColor: theme.blob3[0] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.3" 
            />
            <motion.stop 
              offset="100%" 
              animate={{ stopColor: theme.blob3[1] }}
              transition={{ duration: 1.5 }}
              stopOpacity="0.1" 
            />
          </motion.linearGradient>
          <filter id="blob-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
          </filter>
        </defs>
        
        {/* Blob 1 - Large, Top Right - Main eco energy */}
        <motion.ellipse
          cx="700"
          cy="250"
          rx="350"
          ry="300"
          fill="url(#blob1-grad)"
          filter="url(#blob-blur)"
          animate={{
            cx: [700, 750, 680, 720, 700],
            cy: [250, 300, 220, 280, 250],
            rx: [350, 380, 320, 360, 350],
            ry: [300, 280, 320, 290, 300],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Blob 2 - Large, Bottom Left */}
        <motion.ellipse
          cx="250"
          cy="700"
          rx="400"
          ry="320"
          fill="url(#blob2-grad)"
          filter="url(#blob-blur)"
          animate={{
            cx: [250, 300, 200, 280, 250],
            cy: [700, 750, 680, 720, 700],
            rx: [400, 360, 420, 380, 400],
            ry: [320, 350, 300, 340, 320],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Blob 3 - Medium, Center - subtle accent */}
        <motion.ellipse
          cx="500"
          cy="450"
          rx="180"
          ry="160"
          fill="url(#blob3-grad)"
          filter="url(#blob-blur)"
          animate={{
            cx: [500, 550, 470, 520, 500],
            cy: [450, 420, 480, 440, 450],
            rx: [180, 200, 170, 190, 180],
            ry: [160, 180, 150, 170, 160],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Foreground Particles (in front of blobs, behind pouches) */}
      {particles.filter(p => p.layer === 'front').map((particle) => (
        <motion.div
          key={`front-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            width: particle.size * 1.2,
            height: particle.size * 1.2,
            backgroundColor: theme.particles[particle.colorIndex],
            opacity: 0.5,
            boxShadow: `0 0 ${particle.size * 2}px ${theme.particles[particle.colorIndex]}40`,
          }}
          animate={{
            y: [0, -1400],
            opacity: [0, 0.6, 0.5, 0],
            scale: [0.3, 1, 1, 0.2],
          }}
          transition={{
            duration: particle.duration * 0.8,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Dynamic gradient overlay based on material */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-b ${theme.bgGradient}`}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
