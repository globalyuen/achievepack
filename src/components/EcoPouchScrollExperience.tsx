import { useState } from 'react'
import { motion } from 'motion/react'
import { EcoBackground } from './EcoBackground'

// Material type definition
type MaterialType = 'compostable' | 'bioplastic' | 'pcr' | 'recyclable'

const MATERIALS = [
  {
    id: 'compostable',
    name: 'Compostable',
    headline: 'Compostable Material',
    subline: 'No plastic. No wastage. No problem.',
    description: 'Plant-based pouches certified to break down, not build up in landfills.',
    logo: '/eco-logo/transparent-bkg/compost.png',
    bgColor: '#f5f0e8',
    accentColor: '#8B7355',
  },
  {
    id: 'bioplastic',
    name: 'Bio Plastic',
    headline: 'Bio Plastic from Plants',
    subline: 'Sugarcane-based film that cuts fossil plastic.',
    description: 'Lower carbon footprint, same protection for your product.',
    logo: '/eco-logo/transparent-bkg/biope.png',
    bgColor: '#f0fdf4',
    accentColor: '#10b981',
  },
  {
    id: 'pcr',
    name: 'PCR',
    headline: 'Post-Consumer Recycled',
    subline: 'Give used plastic a second life.',
    description: 'Built with recycled content to support a circular packaging system.',
    logo: '/eco-logo/transparent-bkg/pcr.png',
    bgColor: '#f0f9ff',
    accentColor: '#0ea5e9',
  },
  {
    id: 'recyclable',
    name: '100% Recyclable',
    headline: '100% Recyclable Plastic',
    subline: 'Mono-material pouches for recycling systems.',
    description: 'Engineered to be collected, sorted, and recycled – not wasted.',
    logo: '/eco-logo/transparent-bkg/recycle.png',
    bgColor: '#f0fdf9',
    accentColor: '#14b8a6',
  },
]

export function EcoPouchScrollExperience() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [materialType] = useState<MaterialType>('compostable')

  const material = MATERIALS[currentIndex]

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 py-20">
      {/* Background Animation */}
      <EcoBackground materialType={materialType} />

      <div className="container mx-auto px-4">
        {/* Material Logo - Left Corner */}
        <div className="fixed left-8 md:left-16 lg:left-24 top-8 pointer-events-none z-20">
          <motion.div
            key={`logo-${material.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src={material.logo} 
              alt={material.name}
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Material Content - Right Side */}
        <div className="fixed right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-80 md:w-96 pointer-events-none z-20">
          <motion.div
            key={material.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3 leading-tight">
              {material.headline}
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-2" style={{ color: material.accentColor }}>
              {material.subline}
            </p>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              {material.description}
            </p>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
          {MATERIALS.map((mat, i) => (
            <button
              key={mat.id}
              onClick={() => setCurrentIndex(i)}
              className="w-3 h-3 rounded-full border-2 transition-all duration-300 cursor-pointer"
              style={{
                borderColor: mat.accentColor,
                backgroundColor: i === currentIndex ? mat.accentColor : 'transparent'
              }}
              aria-label={`View ${mat.name}`}
            />
          ))}
        </div>

        {/* Center content placeholder */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-neutral-800 mb-4">Eco-Friendly Materials</h3>
            <p className="text-lg text-neutral-600">Click the dots on the right to explore our sustainable packaging options</p>
          </div>
        </div>
      </div>
    </section>
  )
}
