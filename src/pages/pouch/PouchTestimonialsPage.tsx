import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, Award, TrendingUp, Heart } from 'lucide-react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getImagesForPage } from '../../data/imageHub'

export default function PouchTestimonialsPage() {
  // 从 imageHub 获取相关图片
  const pageImages = getImagesForPage('/testimonials')

  const testimonials = [
    {
      company: 'Bean & Bole Coffee',
      industry: 'Coffee Roastery',
      location: 'Portland, OR',
      quote: 'Switching to compostable bags was a no-brainer for our eco-conscious customers. The 500 MOQ meant we could test without huge risk. Sales increased 23% after the launch!',
      person: 'Sarah Chen',
      role: 'Founder',
      rating: 5,
      image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp',
      highlights: ['23% Sales Increase', 'Zero Waste', 'Customer Love']
    },
    {
      company: 'NourishNow',
      industry: 'Wellness Brand',
      location: 'Seattle, WA',
      quote: 'The soft-touch matte finish made our superfood pouches feel luxury. Customers keep telling us they love the tactile experience. Worth every penny!',
      person: 'Marcus Johnson',
      role: 'Product Manager',
      rating: 5,
      image: '/imgs/seo-photos/a_nourishnow_seattle_morning_wellness_pouch_1061333.webp',
      highlights: ['Premium Feel', 'Customer Feedback', 'Brand Uplift']
    },
    {
      company: 'VitalGreen',
      industry: 'Superfood Brand',
      location: 'Chicago, IL',
      quote: 'From inquiry to delivery in 3 weeks! Ryan walked us through every step. The digital printing quality is stunning, and the price was better than local suppliers.',
      person: 'Jessica Lee',
      role: 'Co-Founder',
      rating: 5,
      image: '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp?v=2',
      highlights: ['3-Week Turnaround', 'Great Support', 'Amazing Quality']
    },
    {
      company: 'Wholesome Bakery',
      industry: 'Artisan Bakery',
      location: 'Austin, TX',
      quote: 'We needed packaging that matched our artisan brand values. The kraft pouches with clear windows let our products shine while staying eco-friendly!',
      person: 'David Miller',
      role: 'Owner',
      rating: 5,
      image: '/imgs/seo-photos/a_wholesome_bakery_pouch_kitchen_9227377.webp?v=2',
      highlights: ['Artisan Look', 'Perfect Fit', 'Eco Values']
    },
    {
      company: 'Nutrivie',
      industry: 'Organic Snacks',
      location: 'San Francisco, CA',
      quote: 'The barrier options were confusing at first, but the team helped us choose the perfect medium barrier for our nuts. 8-month shelf life - exactly what we needed!',
      person: 'Emma Rodriguez',
      role: 'Operations Lead',
      rating: 5,
      image: '/imgs/seo-photos/a_nutrivie_nuts_sustainable_pouch_lifestyle_0132786.webp?v=2',
      highlights: ['Perfect Barrier', 'Great Guidance', '8-Month Shelf Life']
    },
    {
      company: 'Roast Ritual NYC',
      industry: 'Urban Coffee',
      location: 'New York, NY',
      quote: 'As a NYC startup, low MOQ was critical. Started with 500 bags, now ordering 5,000 per month. The degassing valve keeps our beans fresh for weeks!',
      person: 'Alex Park',
      role: 'Head Roaster',
      rating: 5,
      image: '/imgs/seo-photos/a_roast_ritual_nyc_coffee_urban_2153150.webp?v=2',
      highlights: ['Started Small', 'Scaled Fast', 'Fresh Coffee']
    },
    {
      company: 'PureLeaf Organics',
      industry: 'Tea Brand',
      location: 'Boulder, CO',
      quote: 'We loved the kraft-look material with bio-based barrier. Our customers appreciate the natural aesthetic and the fact it\'s 100% compostable. Game changer for our brand!',
      person: 'Maya Patel',
      role: 'Brand Director',
      rating: 5,
      image: '/imgs/seo-photos/pureleaf_tea_pouch.png?v=2',
      highlights: ['Natural Look', 'Compostable', 'Brand Win']
    },
    {
      company: 'SnackSmart',
      industry: 'Healthy Snacks',
      location: 'Los Angeles, CA',
      quote: 'The clear window on our pouches was a must-have. Customers love seeing the product before buying. The response has been incredible - our retail partners love it too!',
      person: 'Tom Chen',
      role: 'Founder & CEO',
      rating: 5,
      image: '/imgs/seo-photos/snacksmart_pouch.png?v=2',
      highlights: ['Clear Window', 'Retail Success', 'Customer Trust']
    },
    {
      company: 'Meadow & Moon',
      industry: 'Herbal Wellness',
      location: 'Portland, ME',
      quote: 'As a small batch producer, finding 500 unit minimums was impossible until we found pouch.eco. The quality rivals brands 10x our size. Our customers think we\'re much bigger!',
      person: 'Rachel Green',
      role: 'Owner',
      rating: 5,
      image: '/imgs/seo-photos/meadow_moon_pouch.png?v=2',
      highlights: ['Small Batch', 'Premium Quality', 'Brand Perception']
    },
    {
      company: 'Peak Performance',
      industry: 'Sports Nutrition',
      location: 'Denver, CO',
      quote: 'The matte black finish with spot UV logo - absolute fire! Our pre-workout pouches look like they cost $50 when they\'re only $25. Instagram engagement went through the roof!',
      person: 'Jordan Smith',
      role: 'Co-Founder',
      rating: 5,
      image: '/imgs/seo-photos/peak_performance_pouch.png?v=2',
      highlights: ['Matte Black', 'Premium Look', 'Social Media Win']
    },
    {
      company: 'Little Sprouts',
      industry: 'Baby Food',
      location: 'San Diego, CA',
      quote: 'Parents love that our pouches are BPI certified compostable. The resealable zipper keeps snacks fresh all day. We\'ve had zero complaints about leaking or quality issues!',
      person: 'Amanda Foster',
      role: 'Founder',
      rating: 5,
      image: '/imgs/seo-photos/little_sprouts_pouch.png?v=2',
      highlights: ['BPI Certified', 'Parent Approved', 'Zero Issues']
    },
    {
      company: 'Grind Culture',
      industry: 'Specialty Coffee',
      location: 'Brooklyn, NY',
      quote: 'The one-way degassing valve was essential for our micro-roastery. Keeps beans fresh for 6+ weeks. Our subscription customers notice the difference immediately!',
      person: 'Chris Martinez',
      role: 'Head Roaster',
      rating: 5,
      image: '/imgs/seo-photos/grind_culture_pouch.png?v=2',
      highlights: ['Degassing Valve', '6-Week Freshness', 'Subscription Hit']
    }
  ]

  const stats = [
    { icon: Heart, value: '2,000+', label: 'Happy Brands' },
    { icon: TrendingUp, value: '98%', label: 'Repeat Customers' },
    { icon: Award, value: '4.9/5', label: 'Average Rating' },
    { icon: Sparkles, value: '500', label: 'Minimum Order' }
  ]

  // 客户 Logo 数据
  const clientLogos = [
    { name: 'Morlife', image: '/imgs/clien-logos/morlife.png' },
    { name: 'Sustenir Agriculture', image: '/imgs/clien-logos/sustenir.png' },
    { name: 'Two Rivers', image: '/imgs/clien-logos/tworivers.png' },
    { name: 'Humble Snacks', image: '/imgs/clien-logos/humble.png' },
    { name: 'Mavella Superfoods', image: '/imgs/clien-logos/mavella.png' },
    { name: 'Superfood Lab Asia', image: '/imgs/clien-logos/superfood.png' },
    { name: 'Green Urban Foods', image: '/imgs/clien-logos/green-urban.png' },
    { name: 'Knowrish Well', image: '/imgs/clien-logos/knowrish.png' },
    { name: 'Fodilicious', image: '/imgs/clien-logos/fodilicious.png' },
    { name: 'Hike Again Remedies', image: '/imgs/clien-logos/hike.png' },
    { name: 'Nuditea', image: '/imgs/clien-logos/nuditea.png' },
    { name: 'Winand Products', image: '/imgs/clien-logos/winand.png' },
    { name: 'Freshfield', image: '/imgs/clien-logos/freshfield.png' },
    { name: 'Honestea', image: '/imgs/clien-logos/honestea.png' },
    { name: 'Moom Health', image: '/imgs/clien-logos/moom.png' }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Customer Stories | Real Results from Real Brands | POUCH.ECO</title>
        <meta 
          name="description" 
          content="See how 2,000+ sustainable brands launched with our eco pouches. From 500 unit startups to 50,000 unit brands - real stories, real results." 
        />
        <link rel="canonical" href="https://pouch.eco/testimonials" />
        <meta property="og:title" content="Customer Success Stories | POUCH.ECO" />
        <meta property="og:description" content="Real brands, real results. See how sustainable packaging transformed these businesses." />
        <meta property="og:url" content="https://pouch.eco/testimonials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://pouch.eco/imgs/seo-photos/og-testimonials-pouch.png" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-testimonials"
          >
            <source src="/video/pouch-eco-marketing-videos/compost.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <span className="font-['JetBrains_Mono'] font-bold">REAL_STORIES</span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            2,000+ Brands<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Started Here
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From 500-unit startups to established brands ordering 50,000+ units monthly. <strong>See how sustainable packaging transformed these businesses.</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="font-black text-3xl mb-1">{stat.value}</div>
                <div className="font-['JetBrains_Mono'] text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4FF00]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#00FFFF] opacity-50" />
                  <p className="font-['Space_Grotesk'] text-lg pl-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Company Image */}
                {testimonial.image && (
                  <div className="mb-4 border-2 border-black overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.company} packaging`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.highlights.map((highlight, hIdx) => (
                    <span 
                      key={hIdx}
                      className="bg-[#D4FF00] border-2 border-black px-3 py-1 text-xs font-['JetBrains_Mono'] font-bold"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Person & Company Info */}
                <div className="border-t-2 border-black pt-4">
                  <div className="font-black text-lg">{testimonial.person}</div>
                  <div className="font-['JetBrains_Mono'] text-sm">
                    {testimonial.role} @ <strong>{testimonial.company}</strong>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {testimonial.industry} • {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Neo-Brutalist Style */}
      <section className="py-16 px-4 bg-white border-y-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">TRUSTED_BY</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
            Join <span className="text-[#10b981]">500+</span> Brands
          </h2>
          <p className="text-lg text-gray-700 font-['Space_Grotesk']">
            From startups to established names - they all started with 500 units
          </p>
        </div>

        {/* Logo Strip 1 - Scrolling Left */}
        <div className="relative -rotate-1 mb-6">
          <div className="bg-black border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`logo-1-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, idx) => (
                <div 
                  key={`logo-2-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(212,255,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Strip 2 - Scrolling Right */}
        <div className="relative rotate-1">
          <div className="bg-[#10b981] border-4 border-black py-6 overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* First set */}
              {clientLogos.slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-3-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.slice().reverse().map((logo, idx) => (
                <div 
                  key={`logo-4-${idx}`} 
                  className="flex-shrink-0 mx-8 h-16 w-32 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name} 
                    className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom CSS for infinite scroll animations */}
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl mb-6 uppercase">
            Your Story<br/>Next?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto font-['Space_Grotesk']">
            Join 2,000+ brands who launched with confidence. <strong>From 500 units. Zero compromise on quality or planet.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://calendly.com/30-min-free-packaging-consultancy', '_blank')}
              className="bg-black text-white px-8 py-4 font-black uppercase border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Book Free Call
            </button>
            <a
              href="mailto:ryan@achievepack.com"
              className="bg-white text-black px-8 py-4 font-black uppercase border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Request Samples
            </a>
          </div>

          <div className="mt-8 font-['JetBrains_Mono'] text-sm font-bold">
            📧 ryan@achievepack.com • ⏱️ Response in 24 hours
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
