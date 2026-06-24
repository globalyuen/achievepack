import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, Quote, Sparkles, Award, TrendingUp, Heart } from 'lucide-react'
import { useEffect } from 'react'
import PouchLayout from '../../components/pouch/PouchLayout'
import { getImagesForPage } from '../../data/imageHub'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { useTranslation } from 'react-i18next'

export default function PouchTestimonialsPage() {
  const { t } = useTranslation();
  const p = 'seoPages.pages.pouchTestimonials';

  // 从 imageHub 获取相关图片
  const pageImages = getImagesForPage('/testimonials')

  // Add scroll detection for marquee speed boost
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      document.body.classList.add('is-scrolling')
      
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling')
      }, 150)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  const testimonials = [
    {
      company: t(`${p}.testimonials.0.company`, 'Bean & Bole Coffee'),
      industry: t(`${p}.testimonials.0.industry`, 'Coffee Roastery'),
      location: t(`${p}.testimonials.0.location`, 'Portland, OR'),
      quote: t(`${p}.testimonials.0.quote`, 'Switching to compostable bags was a no-brainer for our eco-conscious customers. The 500 MOQ meant we could test without huge risk. Sales increased 23% after the launch!'),
      person: t(`${p}.testimonials.0.person`, 'Sarah Chen'),
      role: t(`${p}.testimonials.0.role`, 'Founder'),
      rating: 5,
      image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp',
      highlights: [t(`${p}.testimonials.0.highlights.0`, '23% Sales Increase'), t(`${p}.testimonials.0.highlights.1`, 'Zero Waste'), t(`${p}.testimonials.0.highlights.2`, 'Customer Love')]
    },
    {
      company: t(`${p}.testimonials.1.company`, 'NourishNow'),
      industry: t(`${p}.testimonials.1.industry`, 'Wellness Brand'),
      location: t(`${p}.testimonials.1.location`, 'Seattle, WA'),
      quote: t(`${p}.testimonials.1.quote`, 'The soft-touch matte finish made our superfood pouches feel luxury. Customers keep telling us they love the tactile experience. Worth every penny!'),
      person: t(`${p}.testimonials.1.person`, 'Marcus Johnson'),
      role: t(`${p}.testimonials.1.role`, 'Product Manager'),
      rating: 5,
      image: '/imgs/seo-photos/a_nourishnow_seattle_morning_wellness_pouch_1061333.webp',
      highlights: [t(`${p}.testimonials.1.highlights.0`, 'Premium Feel'), t(`${p}.testimonials.1.highlights.1`, 'Customer Feedback'), t(`${p}.testimonials.1.highlights.2`, 'Brand Uplift')]
    },
    {
      company: t(`${p}.testimonials.2.company`, 'VitalGreen'),
      industry: t(`${p}.testimonials.2.industry`, 'Superfood Brand'),
      location: t(`${p}.testimonials.2.location`, 'Chicago, IL'),
      quote: t(`${p}.testimonials.2.quote`, 'From inquiry to delivery in 3 weeks! Ryan walked us through every step. The digital printing quality is stunning, and the price was better than local suppliers.'),
      person: t(`${p}.testimonials.2.person`, 'Jessica Lee'),
      role: t(`${p}.testimonials.2.role`, 'Co-Founder'),
      rating: 5,
      image: '/imgs/seo-photos/a_vitalgreen_superfood_chicago_wellness_pouch_1211501.webp?v=2',
      highlights: [t(`${p}.testimonials.2.highlights.0`, '3-Week Turnaround'), t(`${p}.testimonials.2.highlights.1`, 'Great Support'), t(`${p}.testimonials.2.highlights.2`, 'Amazing Quality')]
    },
    {
      company: t(`${p}.testimonials.3.company`, 'Wholesome Bakery'),
      industry: t(`${p}.testimonials.3.industry`, 'Artisan Bakery'),
      location: t(`${p}.testimonials.3.location`, 'Austin, TX'),
      quote: t(`${p}.testimonials.3.quote`, 'We needed packaging that matched our artisan brand values. The kraft pouches with clear windows let our products shine while staying eco-friendly!'),
      person: t(`${p}.testimonials.3.person`, 'David Miller'),
      role: t(`${p}.testimonials.3.role`, 'Owner'),
      rating: 5,
      image: '/imgs/seo-photos/a_wholesome_bakery_pouch_kitchen_9227377.webp?v=2',
      highlights: [t(`${p}.testimonials.3.highlights.0`, 'Artisan Look'), t(`${p}.testimonials.3.highlights.1`, 'Perfect Fit'), t(`${p}.testimonials.3.highlights.2`, 'Eco Values')]
    },
    {
      company: t(`${p}.testimonials.4.company`, 'Nutrivie'),
      industry: t(`${p}.testimonials.4.industry`, 'Organic Snacks'),
      location: t(`${p}.testimonials.4.location`, 'San Francisco, CA'),
      quote: t(`${p}.testimonials.4.quote`, 'The barrier options were confusing at first, but the team helped us choose the perfect medium barrier for our nuts. 8-month shelf life - exactly what we needed!'),
      person: t(`${p}.testimonials.4.person`, 'Emma Rodriguez'),
      role: t(`${p}.testimonials.4.role`, 'Operations Lead'),
      rating: 5,
      image: '/imgs/seo-photos/a_nutrivie_nuts_sustainable_pouch_lifestyle_0132786.webp?v=2',
      highlights: [t(`${p}.testimonials.4.highlights.0`, 'Perfect Barrier'), t(`${p}.testimonials.4.highlights.1`, 'Great Guidance'), t(`${p}.testimonials.4.highlights.2`, '8-Month Shelf Life')]
    },
    {
      company: t(`${p}.testimonials.5.company`, 'Roast Ritual NYC'),
      industry: t(`${p}.testimonials.5.industry`, 'Urban Coffee'),
      location: t(`${p}.testimonials.5.location`, 'New York, NY'),
      quote: t(`${p}.testimonials.5.quote`, 'As a NYC startup, low MOQ was critical. Started with 500 bags, now ordering 5,000 per month. The degassing valve keeps our beans fresh for weeks!'),
      person: t(`${p}.testimonials.5.person`, 'Alex Park'),
      role: t(`${p}.testimonials.5.role`, 'Head Roaster'),
      rating: 5,
      image: '/imgs/seo-photos/a_roast_ritual_nyc_coffee_urban_2153150.webp?v=2',
      highlights: [t(`${p}.testimonials.5.highlights.0`, 'Started Small'), t(`${p}.testimonials.5.highlights.1`, 'Scaled Fast'), t(`${p}.testimonials.5.highlights.2`, 'Fresh Coffee')]
    },
    {
      company: t(`${p}.testimonials.6.company`, 'PureLeaf Organics'),
      industry: t(`${p}.testimonials.6.industry`, 'Tea Brand'),
      location: t(`${p}.testimonials.6.location`, 'Boulder, CO'),
      quote: t(`${p}.testimonials.6.quote`, 'We loved the kraft-look material with bio-based barrier. Our customers appreciate the natural aesthetic and the fact it\'s 100% compostable. Game changer for our brand!'),
      person: t(`${p}.testimonials.6.person`, 'Maya Patel'),
      role: t(`${p}.testimonials.6.role`, 'Brand Director'),
      rating: 5,
      image: '/imgs/seo-photos/pureleaf_tea_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.6.highlights.0`, 'Natural Look'), t(`${p}.testimonials.6.highlights.1`, 'Compostable'), t(`${p}.testimonials.6.highlights.2`, 'Brand Win')]
    },
    {
      company: t(`${p}.testimonials.7.company`, 'SnackSmart'),
      industry: t(`${p}.testimonials.7.industry`, 'Healthy Snacks'),
      location: t(`${p}.testimonials.7.location`, 'Los Angeles, CA'),
      quote: t(`${p}.testimonials.7.quote`, 'The clear window on our pouches was a must-have. Customers love seeing the product before buying. The response has been incredible - our retail partners love it too!'),
      person: t(`${p}.testimonials.7.person`, 'Tom Chen'),
      role: t(`${p}.testimonials.7.role`, 'Founder & CEO'),
      rating: 5,
      image: '/imgs/seo-photos/snacksmart_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.7.highlights.0`, 'Clear Window'), t(`${p}.testimonials.7.highlights.1`, 'Retail Success'), t(`${p}.testimonials.7.highlights.2`, 'Customer Trust')]
    },
    {
      company: t(`${p}.testimonials.8.company`, 'Meadow & Moon'),
      industry: t(`${p}.testimonials.8.industry`, 'Herbal Wellness'),
      location: t(`${p}.testimonials.8.location`, 'Portland, ME'),
      quote: t(`${p}.testimonials.8.quote`, 'As a small batch producer, finding 500 unit minimums was impossible until we found pouch.eco. The quality rivals brands 10x our size. Our customers think we\'re much bigger!'),
      person: t(`${p}.testimonials.8.person`, 'Rachel Green'),
      role: t(`${p}.testimonials.8.role`, 'Owner'),
      rating: 5,
      image: '/imgs/seo-photos/meadow_moon_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.8.highlights.0`, 'Small Batch'), t(`${p}.testimonials.8.highlights.1`, 'Premium Quality'), t(`${p}.testimonials.8.highlights.2`, 'Brand Perception')]
    },
    {
      company: t(`${p}.testimonials.9.company`, 'Peak Performance'),
      industry: t(`${p}.testimonials.9.industry`, 'Sports Nutrition'),
      location: t(`${p}.testimonials.9.location`, 'Denver, CO'),
      quote: t(`${p}.testimonials.9.quote`, 'The matte black finish with spot UV logo - absolute fire! Our pre-workout pouches look like they cost $50 when they\'re only $25. Instagram engagement went through the roof!'),
      person: t(`${p}.testimonials.9.person`, 'Jordan Smith'),
      role: t(`${p}.testimonials.9.role`, 'Co-Founder'),
      rating: 5,
      image: '/imgs/seo-photos/peak_performance_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.9.highlights.0`, 'Matte Black'), t(`${p}.testimonials.9.highlights.1`, 'Premium Look'), t(`${p}.testimonials.9.highlights.2`, 'Social Media Win')]
    },
    {
      company: t(`${p}.testimonials.10.company`, 'Little Sprouts'),
      industry: t(`${p}.testimonials.10.industry`, 'Baby Food'),
      location: t(`${p}.testimonials.10.location`, 'San Diego, CA'),
      quote: t(`${p}.testimonials.10.quote`, 'Parents love that our pouches are BPI certified compostable. The resealable zipper keeps snacks fresh all day. We\'ve had zero complaints about leaking or quality issues!'),
      person: t(`${p}.testimonials.10.person`, 'Amanda Foster'),
      role: t(`${p}.testimonials.10.role`, 'Founder'),
      rating: 5,
      image: '/imgs/seo-photos/little_sprouts_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.10.highlights.0`, 'BPI Certified'), t(`${p}.testimonials.10.highlights.1`, 'Parent Approved'), t(`${p}.testimonials.10.highlights.2`, 'Zero Issues')]
    },
    {
      company: t(`${p}.testimonials.11.company`, 'Grind Culture'),
      industry: t(`${p}.testimonials.11.industry`, 'Specialty Coffee'),
      location: t(`${p}.testimonials.11.location`, 'Brooklyn, NY'),
      quote: t(`${p}.testimonials.11.quote`, 'The one-way degassing valve was essential for our micro-roastery. Keeps beans fresh for 6+ weeks. Our subscription customers notice the difference immediately!'),
      person: t(`${p}.testimonials.11.person`, 'Chris Martinez'),
      role: t(`${p}.testimonials.11.role`, 'Head Roaster'),
      rating: 5,
      image: '/imgs/seo-photos/grind_culture_pouch.png?v=2',
      highlights: [t(`${p}.testimonials.11.highlights.0`, 'Degassing Valve'), t(`${p}.testimonials.11.highlights.1`, '6-Week Freshness'), t(`${p}.testimonials.11.highlights.2`, 'Subscription Hit')]
    }
  ]

  const stats = [
    { icon: Heart, value: t(`${p}.hero.stats.0.value`, '2,000+'), label: t(`${p}.hero.stats.0.label`, 'Happy Brands') },
    { icon: TrendingUp, value: t(`${p}.hero.stats.1.value`, '98%'), label: t(`${p}.hero.stats.1.label`, 'Repeat Customers') },
    { icon: Award, value: t(`${p}.hero.stats.2.value`, '4.9/5'), label: t(`${p}.hero.stats.2.label`, 'Average Rating') },
    { icon: Sparkles, value: t(`${p}.hero.stats.3.value`, '500'), label: t(`${p}.hero.stats.3.label`, 'Minimum Order') }
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
        <title>{t(`${p}.seo.title`, "Customer Stories | Real Results from Real Brands | POUCH.ECO")}</title>
        <meta 
          name="description" 
          content={t(`${p}.seo.description`, "See how 2,000+ sustainable brands launched with our eco pouches. From 500 unit startups to 50,000 unit brands - real stories, real results.")}
        />
        <link rel="canonical" href="https://pouch.eco/testimonials" />
        <meta property="og:title" content={t(`${p}.seo.ogTitle`, "Customer Success Stories | POUCH.ECO")} />
        <meta property="og:description" content={t(`${p}.seo.ogDescription`, "Real brands, real results. See how sustainable packaging transformed these businesses.")} />
        <meta property="og:url" content="https://pouch.eco/testimonials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://pouch.eco/imgs/seo-photos/og-testimonials-pouch.png" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video muted={true}
            autoPlay
            loop
            
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
            <span className="font-['JetBrains_Mono'] font-bold">{t(`${p}.hero.label`, "REAL_STORIES")}</span>
          </div>

          <h1 className="font-black text-5xl md:text-7xl leading-none mb-6">
            {t(`${p}.hero.titleLine1`, "2,000+ Brands")}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {t(`${p}.hero.titleLine2`, "Started Here")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t(`${p}.hero.desc1`, "From 500-unit startups to established brands ordering 50,000+ units monthly. ")}<strong>{t(`${p}.hero.desc2`, "See how sustainable packaging transformed these businesses.")}</strong>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <NeoCard
                key={idx}
                className="p-6"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="font-black text-3xl mb-1">{stat.value}</div>
                <div className="font-['JetBrains_Mono'] text-xs font-bold">{stat.label}</div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <NeoCard
                key={idx}
                className="bg-[#F0F0F0] !p-6"
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
                    <NeoBadge 
                      key={hIdx}
                      color="lime"
                    >
                      {highlight}
                    </NeoBadge>
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
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Logo Marquee - Neo-Brutalist Style */}
      <section className="py-16 px-4 bg-white border-y-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="font-['JetBrains_Mono'] font-bold uppercase">{t(`${p}.trustedBy.label`, "TRUSTED_BY")}</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl uppercase mb-4">
            {t(`${p}.trustedBy.titleLine1`, "Join ")}<span className="text-[#10b981]">{t(`${p}.trustedBy.titleLine2`, "500+")}</span>{t(`${p}.trustedBy.titleLine3`, " Brands")}
          </h2>
          <p className="text-lg text-gray-700 font-['Space_Grotesk']">
            {t(`${p}.trustedBy.desc`, "From startups to established names - they all started with 500 units")}
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

          @keyframes scroll-left-fast {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-right-fast {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 13s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 13s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }

          /* Speed up on page scroll */
          body.is-scrolling .animate-scroll-left {
            animation: scroll-left-fast 4s linear infinite;
          }

          body.is-scrolling .animate-scroll-right {
            animation: scroll-right-fast 4s linear infinite;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl mb-6 uppercase">
            {t(`${p}.cta.titleLine1`, "Your Story")}<br/>{t(`${p}.cta.titleLine2`, "Next?")}
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto font-['Space_Grotesk']">
            {t(`${p}.cta.desc1`, "Join 2,000+ brands who launched with confidence. ")}<strong>{t(`${p}.cta.desc2`, "From 500 units. Zero compromise on quality or planet.")}</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton
              href="https://calendly.com/30-min-free-packaging-consultancy"
              className="text-lg"
            >
              {t(`${p}.cta.button1`, "Book Free Call")}
            </NeoButton>
            <NeoButton
              href="mailto:ryan@achievepack.com"
              variant="secondary"
              className="text-lg"
            >
              {t(`${p}.cta.button2`, "Request Samples")}
            </NeoButton>
          </div>

          <div className="mt-8 font-['JetBrains_Mono'] text-sm font-bold">
            {t(`${p}.cta.footer`, "📧 ryan@achievepack.com • ⏱️ Response in 24 hours")}
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
