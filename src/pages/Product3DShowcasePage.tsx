import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Leaf, Palette, Download, Mail } from 'lucide-react'

export default function Product3DShowcasePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2])

  const section2Y = useTransform(scrollYProgress, [0.2, 0.4], [100, 0])
  const section2Opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1])

  const section3Scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1])

  const section4Y = useTransform(scrollYProgress, [0.6, 0.8], [50, 0])
  const section4Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

  const ctaScale = useTransform(scrollYProgress, [0.85, 1], [0.9, 1])

  return (
    <div ref={containerRef} className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ rotateY: -30, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl transform rotate-6 blur-2xl opacity-30" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  📦
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              NEW Free 3D Product Generator
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              See Your Product
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                In 3D Reality
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Generate photorealistic 3D mockups instantly. No design skills needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#generate"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Generate Free 3D Model
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2 - Materials */}
      <section className="relative min-h-screen flex items-center py-32">
        <motion.div
          style={{ y: section2Y, opacity: section2Opacity }}
          className="container mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Sustainable Materials
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Visualize Eco-Friendly Materials in 3D
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See exactly how your packaging will look with certified compostable materials.
              </p>
              <ul className="space-y-4">
                {['Home Compostable', 'Industrial Compostable', 'Recycled Content', 'FSC Certified'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl transform -rotate-6 blur-3xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 text-6xl flex items-center justify-center">
                🌿
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 3 - Customization */}
      <section className="relative min-h-screen flex items-center py-32 bg-gray-50">
        <motion.div
          style={{ scale: section3Scale }}
          className="container mx-auto px-6"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Infinite Customization
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Customize Every Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adjust colors, add logos, change materials. See updates in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🎨', title: 'Colors & Finishes', desc: 'Matte, glossy, metallic' },
              { icon: '📐', title: 'Custom Sizes', desc: 'Any dimension you need' },
              { icon: '🖼️', title: 'Artwork Upload', desc: 'See your design applied' }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 4 - Sustainability */}
      <section className="relative min-h-screen flex items-center py-32">
        <motion.div
          style={{ y: section4Y, opacity: section4Opacity }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            From Creation to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Complete Decomposition
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Watch the full lifecycle in animated 3D
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video max-w-4xl mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl shadow-2xl flex items-center justify-center text-8xl"
          >
            ♻️
          </motion.div>
        </motion.div>
      </section>

      {/* Section 5 - CTA */}
      <section id="generate" className="relative min-h-screen flex items-center py-32 bg-gradient-to-br from-green-600 to-emerald-700">
        <motion.div
          style={{ scale: ctaScale }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto text-center text-white mb-8">
            <h2 className="text-6xl font-bold mb-6">
              Ready to See Your Product in 3D?
            </h2>
            <p className="text-2xl opacity-90 mb-12">
              Generate photorealistic mockups in seconds. Completely free.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto"
          >
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Product Name"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
              />
              <select className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg">
                <option>Stand Up Pouch</option>
                <option>Flat Bottom Pouch</option>
                <option>Side Gusset Pouch</option>
              </select>
              <button
                type="submit"
                className="w-full py-5 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-xl shadow-lg flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" />
                Generate My Free 3D Model
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-6 text-center">
              No credit card • Instant delivery • Commercial use allowed
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold">AchievePack</span>
          </div>
          <p className="text-gray-400 mb-6">
            Sustainable packaging solutions for conscious brands
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail className="w-4 h-4" />
            hello@achievepack.com
          </div>
          <div className="mt-8 text-sm text-gray-500">
            © 2025 AchievePack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
