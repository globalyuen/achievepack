import { Helmet } from 'react-helmet-async'
import { Package, Leaf, Truck, Zap, CheckCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getBaseUrl } from '../../utils/domain'

// Neo-Brutalist Components
const NeoButton = ({ children, onClick, variant = 'primary', className = '' }: any) => {
  const baseStyle = "relative px-8 py-4 font-black uppercase tracking-widest border-4 border-black transition-all active:translate-x-1 active:translate-y-1"
  const variants = {
    primary: "bg-[#D4FF00] text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    secondary: "bg-white text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
    dark: "bg-black text-[#D4FF00] hover:shadow-[8px_8px_0px_0px_#D4FF00] hover:-translate-y-1 hover:-translate-x-1 border-[#D4FF00]"
  }
  return <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}>{children}</button>
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

export default function PouchSolutionsPage() {
  const baseUrl = getBaseUrl()

  const SOLUTIONS = [
    {
      id: 'compostable',
      name: 'COMPOSTABLE',
      icon: Leaf,
      headline: 'Goes Back to Earth Naturally',
      description: 'Perfect for organic brands and eco-conscious startups. Your packaging breaks down in 1-6 months—no microplastics.',
      benefits: ['Certified EN13432/ASTM D6400', 'Industrial & home compost', 'From just 500 units', 'Great for snacks, tea, supplements'],
      color: 'bg-[#D4FF00]',
      image: 'https://achievepack.com/imgs/material-compostable.webp'
    },
    {
      id: 'recyclable',
      name: 'RECYCLABLE',
      icon: Package,
      headline: 'Circular Economy Champion',
      description: 'Mono-material PE/PP pouches accepted in standard recycling streams. High barrier, longer shelf life.',
      benefits: ['Up to 70% PCR content', 'Single-stream recyclable', '9-18 month shelf life', 'Best for coffee, pet food'],
      color: 'bg-[#00FFFF]',
      image: 'https://achievepack.com/imgs/material-recyclable.webp'
    },
    {
      id: 'bio-based',
      name: 'BIO_PLASTIC',
      icon: Sparkles,
      headline: 'Plant-Powered Packaging',
      description: 'Made from renewable sugarcane & corn. Lower carbon footprint verified by recent studies.',
      benefits: ['Reduces fossil fuel use', 'Carbon-neutral production', 'Durable & reliable', 'Custom shapes available'],
      color: 'bg-[#FF00FF]',
      image: 'https://achievepack.com/imgs/material-bio-based.webp'
    }
  ]

  const USE_CASES = [
    {
      title: 'Coffee & Tea Brands',
      description: 'High barrier pouches keep beans fresh for 12-18 months. Degassing valves available.',
      icon: '☕',
      moq: '500 units'
    },
    {
      title: 'Snack Startups',
      description: 'Lightweight, resealable bags perfect for nuts, dried fruit, granola. Easy to ship.',
      icon: '🍪',
      moq: '500 units'
    },
    {
      title: 'Pet Treat Brands',
      description: 'Food-safe certified pouches with strong barrier. Child-safe zippers available.',
      icon: '🐾',
      moq: '1,000 units'
    },
    {
      title: 'Supplement Companies',
      description: 'Moisture-resistant compostable pouches. Perfect for powder or capsules.',
      icon: '💊',
      moq: '500 units'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Eco Packaging Solutions | Start with 500 Units | Pouch.eco</title>
        <meta name="description" content="Compostable, recyclable & bio-based pouches for startups. Low MOQ from 500 units. Fast turnaround, no minimums pressure." />
        <link rel="canonical" href={`${baseUrl}/solutions`} />
        <meta property="og:title" content="Eco Packaging Solutions | Start with 500 Units | Pouch.eco" />
        <meta property="og:description" content="Compostable, recyclable & bio-based pouches for startups. Low MOQ from 500 units." />
        <meta property="og:url" content={`${baseUrl}/solutions`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco Packaging Solutions | Pouch.eco" />
        <meta name="twitter:description" content="Start your eco brand with compostable pouches from just 500 units" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-24 border-b-4 border-black overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-solutions"
          >
            <source src="/video/pouch-eco-marketing-videos/Environmental.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block bg-black text-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-['JetBrains_Mono'] font-bold text-sm">SOLUTIONS_INDEX</span>
            </div>
            
            <h1 className="font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
              Pick Your<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Eco Path</span>
            </h1>

            <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl">
                &gt; Compostable // Recyclable // Bio-Based<br/>
                &gt; All certified. All from 500 units.<br/>
                &gt; Launch your sustainable brand today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoButton onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
                Book Free Consultation
              </NeoButton>
              <NeoButton variant="secondary">Explore Materials</NeoButton>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase leading-none">
            Three<br/>Solutions
          </h2>
          <div className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-2 border-black px-4 py-2">
            ALL_CERTIFIED_MATERIALS
          </div>
        </div>

        <div className="grid gap-12">
          {SOLUTIONS.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <NeoCard className={`!p-0 overflow-hidden aspect-square relative group ${solution.color}`}>
                  <img 
                    src={solution.image} 
                    alt={solution.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <NeoBadge color="bg-black text-white">{solution.name}</NeoBadge>
                  </div>
                </NeoCard>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 border-4 border-black ${solution.color} flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-black text-3xl md:text-5xl uppercase">{solution.headline}</h3>
                </div>
                
                <p className="font-['Space_Grotesk'] text-xl leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 font-['JetBrains_Mono'] text-sm">
                  {solution.benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#22c55e]" /> {benefit}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <NeoButton className="text-sm" onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}>
                    Get Quote
                  </NeoButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black border-y-4 border-[#D4FF00]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-black text-5xl md:text-7xl uppercase text-white mb-16 text-center">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {USE_CASES.map((useCase) => (
              <NeoCard key={useCase.title} className="bg-white h-full">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-black text-2xl mb-3 uppercase">{useCase.title}</h3>
                <p className="font-['Space_Grotesk'] text-lg mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="font-['JetBrains_Mono'] text-xs border-t-2 border-black pt-4 mt-4">
                  MOQ: <span className="font-bold">{useCase.moq}</span>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Facts Section */}
      <section className="py-24 px-4 md:px-6 max-w-5xl mx-auto">
        <NeoCard className="bg-[#FF00FF] text-center">
          <h2 className="font-black text-4xl mb-8 uppercase">Why Pouch.eco?</h2>
          <div className="grid md:grid-cols-3 gap-8 font-['JetBrains_Mono'] font-bold text-lg">
            <div>
              <div className="text-5xl mb-2">500</div>
              <div>MIN ORDER</div>
            </div>
            <div>
              <div className="text-5xl mb-2">2-3</div>
              <div>WEEKS SAMPLES</div>
            </div>
            <div>
              <div className="text-5xl mb-2">100%</div>
              <div>CERTIFIED</div>
            </div>
          </div>
        </NeoCard>
      </section>

    </PouchLayout>
  )
}
