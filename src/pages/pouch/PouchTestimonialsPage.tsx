import { Helmet } from 'react-helmet-async'
import { Star, Quote, Leaf, Award, Heart, TrendingUp } from 'lucide-react'
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

const NeoCard = ({ children, className = '' }: any) => (
  <motion.div 
    className={`relative p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
    whileHover={{ y: -4, x: -4, boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
  >
    {children}
  </motion.div>
)

const NeoBadge = ({ children, color = 'lime' }: any) => {
  const colors = {
    lime: 'bg-[#D4FF00] text-black',
    cyan: 'bg-[#00FFFF] text-black',
    magenta: 'bg-[#FF00FF] text-white'
  }
  return <span className={`inline-block px-4 py-2 text-sm font-black uppercase border-2 border-black ${colors[color as keyof typeof colors]}`}>{children}</span>
}

export default function PouchTestimonialsPage() {
  const baseUrl = getBaseUrl()

  const TESTIMONIALS = [
    {
      name: "Sarah Chen",
      company: "Bloom Tea Co.",
      industry: "Organic Tea",
      quote: "Switching to Pouch.eco was the best decision for our brand. Our customers LOVE the compostable pouches, and we love how easy the process was. From 500 units—perfect for a startup!",
      result: "42% increase in repeat customers",
      avatar: "https://achievepack.com/imgs/testimonial-1.jpg"
    },
    {
      name: "Marcus Williams",
      company: "PureSnack",
      industry: "Healthy Snacks",
      quote: "The quality is amazing, and the turnaround is fast. We started with 1,000 pouches to test, and now we're ordering 10,000+ every month. The custom printing looks so professional!",
      result: "3x revenue growth in 6 months",
      avatar: "https://achievepack.com/imgs/testimonial-2.jpg"
    },
    {
      name: "Emma Rodriguez",
      company: "Paws & Claws",
      industry: "Pet Treats",
      quote: "As a small business, low MOQ was crucial. Pouch.eco delivered amazing compostable pouches from just 500 units. Our customers appreciate the eco-friendly packaging—it's a huge selling point!",
      result: "5-star reviews increased by 67%",
      avatar: "https://achievepack.com/imgs/testimonial-3.jpg"
    },
    {
      name: "David Kim",
      company: "Fuel Supplements",
      industry: "Sports Nutrition",
      quote: "We needed recyclable pouches with high barrier protection for our protein powder. Pouch.eco nailed it! The quality matches big brands, but at startup-friendly prices.",
      result: "Shelf life extended from 6 to 12 months",
      avatar: "https://achievepack.com/imgs/testimonial-4.jpg"
    },
  ]

  const BENEFITS = [
    { icon: Leaf, title: "Environmental Impact", desc: "Customers love brands that care about the planet", color: "bg-[#2cbc63]" },
    { icon: Award, title: "Premium Quality", desc: "Packaging that looks & feels expensive", color: "bg-[#D4FF00]" },
    { icon: Heart, title: "Customer Loyalty", desc: "Eco packaging builds trust & repeat sales", color: "bg-[#FF00FF]" },
    { icon: TrendingUp, title: "Brand Differentiation", desc: "Stand out from competitors on the shelf", color: "bg-[#00FFFF]" },
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Customer Success Stories | Real Results from Real Brands | Pouch.eco</title>
        <meta name="description" content="See how startups & small brands grew with eco-friendly packaging. Real testimonials from tea, snacks, pet treats & supplement companies who made the switch." />
        <link rel="canonical" href={`${baseUrl}/testimonials`} />
        
        <meta property="og:title" content="Customer Success Stories | Real Results from Real Brands | Pouch.eco" />
        <meta property="og:description" content="See how startups & small brands grew with eco-friendly packaging. Real testimonials from real businesses." />
        <meta property="og:url" content={`${baseUrl}/testimonials`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/testimonials-og.jpg`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Success Stories | Real Results from Real Brands | Pouch.eco" />
        <meta name="twitter:description" content="See how startups grew with eco-friendly packaging." />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Customer Testimonials",
            "description": "Success stories from brands using Pouch.eco eco-friendly packaging",
            "url": `${baseUrl}/testimonials`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": TESTIMONIALS.map((testimonial, index) => ({
                "@type": "Review",
                "@id": `${baseUrl}/testimonials#review-${index}`,
                "author": {
                  "@type": "Person",
                  "name": testimonial.name
                },
                "reviewBody": testimonial.quote,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Product",
                  "name": "Eco-friendly Compostable Pouches"
                },
                "position": index + 1
              }))
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <NeoBadge color="lime">REAL STORIES</NeoBadge>
            <h1 className="mt-8 font-black text-6xl md:text-8xl leading-none">
              Brands Growing With<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2cbc63] to-[#00FFFF]">Eco Packaging</span>
            </h1>
            <p className="mt-8 text-2xl text-gray-600 max-w-3xl mx-auto">
              See how startups and small businesses like yours made the switch to sustainable pouches—and saw real results!
            </p>
          </div>
        </div>
      </section>

      {/* Why Go Eco Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              Why Customers Love<br/>
              <span className="text-[#2cbc63]">Eco Packaging</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              It's not just about being green—it's about building a better brand
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <NeoCard key={index}>
                <div className="text-center">
                  <div className={`inline-block p-6 ${benefit.color} border-4 border-black mb-6`}>
                    <benefit.icon className="w-12 h-12 text-black" />
                  </div>
                  <h3 className="font-black text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#D4FF00]/10 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-black text-5xl md:text-6xl mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              From tea to treats to supplements—brands across industries trust us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <NeoCard key={index} className="relative">
                <div className="absolute top-6 right-6">
                  <Quote className="w-12 h-12 text-[#D4FF00]" />
                </div>
                
                <div className="flex items-start gap-6 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-black"
                  />
                  <div>
                    <h3 className="font-black text-2xl">{testimonial.name}</h3>
                    <p className="text-gray-600 font-bold">{testimonial.company}</p>
                    <NeoBadge color="cyan" className="mt-2 text-xs">{testimonial.industry}</NeoBadge>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4FF00] text-[#D4FF00]" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="pt-6 border-t-2 border-black">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-[#2cbc63]" />
                    <p className="font-black text-[#2cbc63]">{testimonial.result}</p>
                  </div>
                </div>
              </NeoCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <NeoCard className="inline-block">
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-black text-5xl text-[#2cbc63]">4.9/5.0</p>
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-[#D4FF00] text-[#D4FF00]" />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on 200+ reviews</p>
                </div>
                <div className="border-l-4 border-black pl-8">
                  <p className="font-black text-3xl">98%</p>
                  <p className="text-gray-600">Would recommend<br/>to other brands</p>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-black text-5xl md:text-6xl mb-8">
            Ready to Join<br/>
            <span className="text-[#D4FF00]">These Success Stories?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Start with just 500 units. No setup fees. Fast turnaround. Let's grow your brand together!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <NeoButton variant="primary">Get Started Now</NeoButton>
            <NeoButton variant="dark" className="!border-[#D4FF00] !text-[#D4FF00]">
              Order Free Sample
            </NeoButton>
          </div>
        </div>
      </section>

    </PouchLayout>
  )
}
