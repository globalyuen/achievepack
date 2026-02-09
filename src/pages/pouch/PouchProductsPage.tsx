import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { ShoppingBag, Package, Zap } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'

// Reusing Neo-components for consistency
const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </button>
  )
}

const NeoCard = ({ children, className = '', color = 'bg-white' }: any) => (
  <div className={`border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${color} ${className} transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </div>
)

const NeoBadge = ({ children, color = 'bg-[#FF00FF]' }: any) => (
  <span className={`inline-block px-3 py-1 text-xs font-black uppercase border-2 border-black ${color} text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
    {children}
  </span>
)

export default function PouchProductsPage() {
  const PRODUCTS = [
    {
      id: 'stand-up',
      name: 'STAND_UP_POUCH',
      description: 'The industry standard for shelf presence. Perfect for snacks, granola, and supplements.',
      problem: 'Your brand needs to stand out, but custom printing usually requires ordering 10,000+ bags and paying expensive plate fees.',
      solution: 'Our digital print Stand Up Pouches let you launch with pro-level packaging from just 500 units—no plate fees, fast turnaround.',
      price: '$0.50',
      stats: { moq: '500', material: 'BIO/PCR', barrier: 'HIGH' },
      features: ['Self-Standing Design', 'Resealable Zipper', 'Maximum Shelf Appeal'],
      color: 'bg-[#D4FF00]', // Yellow
      image: '/3d/2d-pouch/pouch2.webp'
    },
    {
      id: 'flat-bottom',
      name: 'FLAT_BOTTOM_POUCH',
      description: 'The premium choice for coffee and high-end goods. Box-like stability with flexible benefits.',
      problem: 'Premium coffee and tea need stability on the shelf and distinct branding, which standard pouches often lack.',
      solution: 'Our Flat Bottom Pouch (Box Bottom) offers 5 printable faces and maximum stability—giving your product a top-tier look.',
      price: '$0.65',
      stats: { moq: '500', material: 'RECYCLABLE', barrier: 'MAX' },
      features: ['5 Printable Faces', 'Box-Like Stability', 'Premium Look & Feel'],
      color: 'bg-[#00FFFF]', // Cyan
      image: '/3d/2d-pouch/pouch1.webp'
    },
    {
      id: 'spouted',
      name: 'SPOUTED_POUCH',
      description: 'The modern alternative to rigid bottles. Lighter, unbreakable, and eco-friendly.',
      problem: 'Selling liquids in bottles is heavy, fragile, and expensive to ship—eating into your margins.',
      solution: 'Switch to flexible Spouted Pouches—lighter, durable, and uses 80% less plastic than rigid bottles. Perfect for refills.',
      price: '$0.45',
      stats: { moq: '1K', material: 'MONO-PE', barrier: 'LIQUID' },
      features: ['Leak-Proof Spout', '80% Less Plastic', 'Cheaper Shipping'],
      color: 'bg-[#FF00FF]', // Magenta
      image: '/3d/2d-pouch/pouch4.webp'
    },
    {
      id: 'sachet',
      name: 'SACHET',
      description: 'The conversion engine. 3-side seal flat pouches perfect for single-serves and samples.',
      problem: 'Customers want to try before they buy, but generic sample packaging cheapens your brand.',
      solution: 'Our custom-printed 3-Side Seal Sachets provide a premium unboxing experience even for trial sizes. Convert browsers into buyers.',
      price: '$0.25',
      stats: { moq: '2K', material: 'ANY', barrier: 'HIGH' },
      features: ['Cost-Effective', 'Mail-Friendly', 'High Conversion'],
      color: 'bg-white', // White
      image: '/3d/2d-pouch/pouch3.webp'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Products | POUCH.ECO</title>
        <meta name="description" content="Explore our eco-friendly pouch options including compostable and recyclable materials. Low MOQs available." />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative py-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-products"
          >
            <source src="/video/pouch-eco-marketing-videos/use.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block bg-black text-white px-4 py-1 mb-6 font-['JetBrains_Mono'] font-bold transform -rotate-2">
            CATALOG_V1
          </div>
          <h1 className="font-black text-6xl md:text-8xl uppercase mb-8 leading-none">
            Our<br />Products
          </h1>
          <p className="font-['JetBrains_Mono'] text-xl max-w-2xl mx-auto">
            Simple pricing. Sustainable materials. No hidden fees.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-12">
            {PRODUCTS.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                   <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${product.color}`}>
                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                     <img 
                       src={product.image} 
                       alt={product.name}
                       className="w-full h-full object-cover mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-110"
                     />
                     <div className="absolute top-4 left-4 z-20">
                       <NeoBadge color="bg-black text-white">{product.stats.material}_TECH</NeoBadge>
                     </div>
                   </NeoCard>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-black text-4xl md:text-6xl uppercase">{product.name}</h2>
                  <div className="flex gap-4 font-['JetBrains_Mono'] font-bold text-sm">
                    <span className="bg-black text-white px-2 py-1">MOQ: {product.stats.moq}</span>
                    <span className="border-2 border-black px-2 py-1">BARRIER: {product.stats.barrier}</span>
                  </div>
                  <p className="font-['Space_Grotesk'] text-xl leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-4 font-['JetBrains_Mono'] text-sm border-y-2 border-black py-4">
                    <div>
                      <span className="font-bold block bg-black text-white px-2 inline-block mb-1">THE_PROBLEM:</span>
                      <p className="leading-relaxed text-gray-700">{product.problem}</p>
                    </div>
                    <div>
                      <span className="font-bold block bg-[#D4FF00] text-black px-2 inline-block mb-1 border-2 border-black">THE_SOLUTION:</span>
                      <p className="leading-relaxed font-bold">{product.solution}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                    {product.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <Zap className="w-4 h-4" /> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t-2 border-black flex items-center justify-between">
                    <div className="font-black text-3xl">{product.price}</div>
                    <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
                      Book Call
                    </NeoButton>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
