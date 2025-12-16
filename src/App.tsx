import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import ReactGA from "react-ga4";
import { Menu, X, Leaf, Package, CheckCircle, Clock, Truck, Factory, Recycle, Globe, Calculator as CalcIcon, Calendar, Phone, Mail, MapPin, ChevronDown, Star, Users, Award, Zap, Target, TrendingUp, Shield, ShoppingCart, User, Linkedin, ArrowRight, Plus } from 'lucide-react'
import { HeroGrainBackground } from './components/HeroGrainBackground'
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card'
import { AnimatedTestimonials } from './components/ui/animated-testimonials'
import { Carousel, Card } from './components/ui/apple-cards-carousel'
import { getImage } from './utils/imageMapper'
import Calculator from './components/Calculator'
import Newsletter from './components/Newsletter'
import BriefTestimonials from './components/BriefTestimonials'
import TestimonialsWall from './components/TestimonialsWall'
import CartSidebar from './components/store/CartSidebar'
import FloatingButtons from './components/FloatingButtons'
import FloatingTestimonialVideo from './components/FloatingTestimonialVideo'
import YouTubeShorts from './components/YouTubeShorts'
import InstagramFeed from './components/InstagramFeed'
import ClimateAction from './components/ClimateAction'
import type { CalculatorResults } from './utils/calculatorUtils'
import { useStore } from './store/StoreContext'
import { FEATURED_PRODUCTS, type PouchProduct } from './store/productData'

function App() {
  const { t, i18n } = useTranslation();
  const { cartCount, addToCart, setIsCartOpen } = useStore();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalAlt, setModalAlt] = useState('')
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<PouchProduct | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Helper function to get language-specific images
  const img = (imageName: string) => getImage(imageName, i18n.language as any);

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-JQTMH42E01");
    // Send initial pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    let ticking = false
    let rafId: number | null = null

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10)

          // Update active section based on scroll position
          const sections = ['hero', 'about', 'benefits', 'products', 'solutions', 'features', 'comparison', 'process', 'testimonials', 'faq', 'contact']
          const currentSection = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })
          setActiveSection(currentSection || '')
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 72
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}`

    // Create mailto link
    const mailtoLink = `mailto:ryan@achievepack.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' })

    alert('Thank you for your message! Your email client should open with the pre-filled email.')
  }

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-white border-b border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { id: 'about', label: t('nav.about') },
                { id: 'solutions', label: t('nav.solutions') },
                { id: 'products', label: t('nav.products') },
                { id: 'features', label: t('nav.features') }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors duration-200 ${activeSection === id
                    ? 'text-neutral-900 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Center Logo */}
            <div className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src="/achieve-pack-logo.png" alt="Achieve Pack Logo" className="h-12 w-auto" />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => {
                  if (cartCount === 0) {
                    navigate('/store')
                  } else {
                    setIsCartOpen(true)
                  }
                }}
                className="relative w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              <Link
                to="/dashboard"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <User className="h-5 w-5 text-white" />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <Globe className="h-5 w-5 text-white" />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">English</button>
                    <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Français</button>
                    <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">Español</button>
                    <button onClick={() => changeLanguage('zh-TW')} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100">繁體中文</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-primary-500 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200">
            <div className="px-4 py-4 space-y-3">
              {[
                { id: 'about', label: t('nav.about') },
                { id: 'benefits', label: t('nav.benefits') },
                { id: 'products', label: t('nav.products') },
                { id: 'solutions', label: t('nav.solutions') },
                { id: 'features', label: t('nav.features') },
                { id: 'contact', label: t('nav.contact') }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left text-base font-medium text-neutral-700 hover:text-primary-500 py-2"
                >
                  {label}
                </button>
              ))}
              <Link
                to="/dashboard"
                className="block w-full text-left text-base font-medium text-neutral-700 hover:text-primary-500 py-2"
              >
                {t('nav.customerCenter')}
              </Link>
              {/* Mobile Language Options */}
              <div className="py-2 border-t border-neutral-100 my-2">
                <div className="text-xs text-neutral-500 font-semibold mb-2 uppercase px-1">Language</div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => changeLanguage('en')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'en' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>English</button>
                  <button onClick={() => changeLanguage('fr')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'fr' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>Français</button>
                  <button onClick={() => changeLanguage('es')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'es' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>Español</button>
                  <button onClick={() => changeLanguage('zh-TW')} className={`text-sm py-1 px-2 rounded ${i18n.language === 'zh-TW' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>繁體中文</button>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-4"
              >
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 relative overflow-hidden">
        {/* GrainGradient 背景动效 */}
        <HeroGrainBackground animate={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                {t('hero.titlePrefix')}
                <span className="text-primary-500"> {t('hero.titleSuffix')}</span>
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8 max-w-xl">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
                >
                  <CalcIcon className="h-5 w-5" />
                  <span>{t('hero.calculateSavings')}</span>
                </button>
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 border-2 border-neutral-200 text-neutral-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-50 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>{t('hero.bookConsultation')}</span>
                </a>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">70%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">{t('hero.stats.carbon')}</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">70%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">{t('hero.stats.plastic')}</div>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">22%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">{t('hero.stats.shipping')}</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <CardContainer containerClassName="py-0">
                <CardBody className="relative group/card w-full">
                  <div className="absolute inset-0 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={img("about-hero")}
                      alt="Premium Sustainable Packaging"
                      className="relative z-10 w-full rounded-2xl shadow-2xl cursor-pointer group-hover/card:shadow-primary-500/[0.3]"
                      onClick={() => {
                        setModalImage(img("about-hero"))
                        setModalAlt('Premium Sustainable Packaging')
                        setIsModalOpen(true)
                      }}
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Testimonials - Avatar Row */}
      <BriefTestimonials />

      {/* YouTube Shorts Section - Hidden for now */}
      {/* <YouTubeShorts /> */}

      {/* Instagram Feed Section */}
      <InstagramFeed />

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">{t('about.title')}</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                {t('about.p2')}
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.en13432')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.astm')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.grs')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={img("cert-home-compost")}
                  alt="Home Compost Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-home-compost"))
                    setModalAlt('Home Compost Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-pcr-grs")}
                  alt="PCR GRS Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-pcr-grs"))
                    setModalAlt('PCR GRS Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-brc")}
                  alt="BRC Food Safety Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-brc"))
                    setModalAlt('BRC Food Safety Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-biope")}
                  alt="BioPE Sustainable Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-biope"))
                    setModalAlt('BioPE Sustainable Certification')
                    setIsModalOpen(true)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('benefits.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          {/* Environmental Benefits - Animated */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-neutral-900 flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-primary-500 mr-3" />
              {t('benefits.envTitle')}
            </h3>
            <AnimatedTestimonials
              autoplay={true}
              testimonials={[
                {
                  quote: t('benefits.env.carbon.desc'),
                  name: t('benefits.env.carbon.title'),
                  designation: "70% Less CO₂ Emissions",
                  src: img("infographic-carbon-footprint"),
                },
                {
                  quote: t('benefits.env.compostable.desc'),
                  name: t('benefits.env.compostable.title'),
                  designation: "EN13432 & ASTM D6400 Certified",
                  src: img("infographic-compostable"),
                },
                {
                  quote: t('benefits.env.plantBased.desc'),
                  name: t('benefits.env.plantBased.title'),
                  designation: "Renewable Resources",
                  src: img("infographic-plant-based"),
                },
                {
                  quote: t('benefits.env.recyclable.desc'),
                  name: t('benefits.env.recyclable.title'),
                  designation: "GRS Certified Materials",
                  src: img("infographic-grs-recyclable"),
                },
              ]}
            />
          </div>

          {/* Business Benefits - Animated */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-accent-500 mr-3" />
              {t('benefits.bizTitle')}
            </h3>
            <AnimatedTestimonials
              autoplay={true}
              testimonials={[
                {
                  quote: t('benefits.biz.moq.desc'),
                  name: t('benefits.biz.moq.title'),
                  designation: "Start from 1,000 units",
                  src: img("infographic-low-moq"),
                },
                {
                  quote: t('benefits.biz.turnaround.desc'),
                  name: t('benefits.biz.turnaround.title'),
                  designation: "2-3 Weeks Production",
                  src: img("infographic-fast-turnaround"),
                },
                {
                  quote: t('benefits.biz.shipping.desc'),
                  name: t('benefits.biz.shipping.title'),
                  designation: "70% Less Shipping Volume",
                  src: img("infographic-shipping-storage"),
                },
                {
                  quote: t('benefits.biz.finish.desc'),
                  name: t('benefits.biz.finish.title'),
                  designation: "Matte, Gloss & Soft Touch",
                  src: img("infographic-premium-finishes"),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Products Section - Shop Products Grid */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('products.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden border border-neutral-100 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative h-48 bg-neutral-50 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-500">({product.reviews})</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary-600">US${product.basePrice}</span>
                      <span className="text-xs text-neutral-500 block">for {product.minOrder} pcs</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          productId: product.id,
                          name: product.name,
                          image: product.images[0],
                          variant: { shape: 'stand-up', size: '120x200', barrier: 'clear', finish: 'glossy' },
                          quantity: 1,
                          unitPrice: product.basePrice,
                          totalPrice: product.basePrice
                        });
                      }}
                      className="flex items-center gap-1 bg-primary-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-10">
            <Link
              to="/store"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
            >
              <ShoppingCart className="h-5 w-5" />
              Explore Full Shop
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('solutions.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('solutions.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src={img("solution-food-beverage")}
                alt="Food & Beverage Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("solution-food-beverage"))
                  setModalAlt('Food & Beverage Packaging')
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.food.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.food.desc')}</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src={img("solution-cosmetics")}
                alt={t('solutions.items.cosmetics.title')}
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("solution-cosmetics"))
                  setModalAlt(t('solutions.items.cosmetics.title'))
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.cosmetics.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.cosmetics.desc')}</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src={img("solution-wellness")}
                alt={t('solutions.items.health.title')}
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("solution-wellness"))
                  setModalAlt(t('solutions.items.health.title'))
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.health.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.health.desc')}</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src={img("solution-pet-products")}
                alt={t('solutions.items.pet.title')}
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("solution-pet-products"))
                  setModalAlt(t('solutions.items.pet.title'))
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.pet.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.pet.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('features.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Barrier Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('features.barrier.title')}</h3>
              <div className="mb-6">
                <img
                  src={img("feature-barrier-options")}
                  alt={t('features.barrier.title')}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-barrier-options"))
                    setModalAlt(t('features.barrier.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">{t('features.barrier.low.title')}</div>
                  <div className="text-xs text-neutral-500">{t('features.barrier.low.desc')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">{t('features.barrier.medium.title')}</div>
                  <div className="text-xs text-neutral-500">{t('features.barrier.medium.desc')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">{t('features.barrier.high.title')}</div>
                  <div className="text-xs text-neutral-500">{t('features.barrier.high.desc')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">{t('features.barrier.max.title')}</div>
                  <div className="text-xs text-neutral-500">{t('features.barrier.max.desc')}</div>
                </div>
              </div>
            </div>

            {/* Pouch Shapes */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('features.shapes.title')}</h3>
              <div className="mb-6">
                <img
                  src={img("feature-pouch-shapes")}
                  alt={t('features.shapes.title')}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-pouch-shapes"))
                    setModalAlt(t('features.shapes.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.shapes.standup')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.shapes.flat')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.shapes.gusset')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.shapes.quad')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.shapes.threeside')}</div>
                </div>
              </div>
            </div>

            {/* Printing Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('features.printing.title')}</h3>
              <div className="mb-6">
                <img
                  src={img("feature-printing-finishes")}
                  alt={t('features.printing.title')}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-printing-finishes"))
                    setModalAlt(t('features.printing.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">{t('features.printing.methods.title')}</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• {t('features.printing.methods.i1')}</li>
                    <li>• {t('features.printing.methods.i2')}</li>
                    <li>• {t('features.printing.methods.i3')}</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">{t('features.printing.finishes.title')}</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• {t('features.printing.finishes.i1')}</li>
                    <li>• {t('features.printing.finishes.i2')}</li>
                    <li>• {t('features.printing.finishes.i3')}</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">{t('features.printing.effects.title')}</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• {t('features.printing.effects.i1')}</li>
                    <li>• {t('features.printing.effects.i2')}</li>
                    <li>• {t('features.printing.effects.i3')}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reclosure Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('features.reclosure.title')}</h3>
              <div className="mb-6">
                <img
                  src={img("feature-reclosure-solutions")}
                  alt={t('features.reclosure.title')}
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-reclosure-solutions"))
                    setModalAlt(t('features.reclosure.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.reclosure.zipper')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.reclosure.spout')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.reclosure.tintie')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.reclosure.press')}</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">{t('features.reclosure.child')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Pricing Style Design */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              {t('comparison.subtitle')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('comparison.headline')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              {t('comparison.description')}
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-neutral-600 font-medium">{t('comparison.trustedBy')}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Rigid Packaging Card - Left Side */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
              <div className="text-center px-8 pt-8 pb-6">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  {t('comparison.rigid.subtitle')}
                </p>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                  {t('comparison.rigid.title')}
                </h3>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i1')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i2')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i3')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i4')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i5')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i6')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i7')}</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.rigid.i8')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Flexible Packaging Card - Right Side (Featured) */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden">
              <div className="text-center px-8 pt-8 pb-6">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">
                  {t('comparison.flexible.subtitle')}
                </p>
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                  {t('comparison.flexible.title')}
                </h3>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i1')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i2')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i3')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i4')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i5')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i6')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i7')}</span>
                  </li>
                  <li className="flex items-start text-neutral-700">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{t('comparison.flexible.i8')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('process.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('process.description')}
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -z-10 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:border-primary-500 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-xl">1</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('process.steps.1.title')}</h3>
                <p className="text-sm text-neutral-600">{t('process.steps.1.desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:border-primary-500 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-xl">2</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('process.steps.2.title')}</h3>
                <p className="text-sm text-neutral-600">{t('process.steps.2.desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:border-primary-500 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-xl">3</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('process.steps.3.title')}</h3>
                <p className="text-sm text-neutral-600">{t('process.steps.3.desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:border-primary-500 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-xl">4</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('process.steps.4.title')}</h3>
                <p className="text-sm text-neutral-600">{t('process.steps.4.desc')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-neutral-200 text-center hover:border-primary-500 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600 font-bold text-xl">5</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{t('process.steps.5.title')}</h3>
                <p className="text-sm text-neutral-600">{t('process.steps.5.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Wall Section */}
      <TestimonialsWall />

      {/* Meet Our Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('team.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: 'Ryan Wong',
                roleKey: 'packagingSpecialist',
                image: '/imgs/team/Ryan Wong - Packaging Specialist.png',
                linkedin: 'https://www.linkedin.com/in/ryanwwc/',
                email: 'ryan@achievepack.com'
              },
              {
                name: 'Jericha Kwok',
                roleKey: 'businessDevelopment',
                image: '/imgs/team/Jericha Kwok - Business Development.png',
                linkedin: 'https://www.linkedin.com/in/jericha-kwok-474bb118a/',
                email: 'jericha@achievepack.com'
              },
              {
                name: 'Eric Kwok',
                roleKey: 'businessDevelopment',
                image: '/imgs/team/Eric Kwok - Business Development.png',
                email: 'eric@achievepack.com'
              },
              {
                name: 'Jackie Kwok',
                roleKey: 'customerSupport',
                image: '/imgs/team/Jackie Kwok - Customer Support.png',
                email: 'jackie@achievepack.com'
              },
              {
                name: 'Amy Huang',
                roleKey: 'customerSupport',
                image: '/imgs/team/Amy Huang - customer support.png',
                email: 'amy@achievepack.com'
              },
              {
                name: 'Emma Guo',
                roleKey: 'customerSupport',
                image: '/imgs/team/Emma Guo - customer support.png',
                email: 'emma@achievepack.com'
              }
            ].map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col items-center"
              >
                {/* Image Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-neutral-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-primary-600" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary-600" />
                    </a>
                  </div>
                </div>
                {/* Info Bubble on Hover */}
                <div className="mt-4 text-center transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{member.name}</h3>
                  <p className="text-sm text-neutral-600">{t(`team.roles.${member.roleKey}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('faq.title')}</h2>
            <p className="text-lg text-neutral-700">
              {t('faq.description')}
            </p>
          </div>

          <div className="space-y-4">
            {['certs', 'moq', 'time', 'cost', 'barrier', 'design'].map((key) => (
              <details key={key} className="bg-neutral-50 rounded-lg p-6">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-lg font-semibold text-neutral-900">{t(`faq.items.${key}.q`)}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 transition-transform duration-200" />
                </summary>
                <div className="mt-4 text-neutral-700 leading-relaxed">{t(`faq.items.${key}.a`)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Climate Action Section */}
      <ClimateAction />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
            <div className="mt-8">
              <img
                src={img("contact-cta-banner")}
                alt={t('contact.title')}
                className="w-full max-w-4xl mx-auto h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => {
                  setModalImage(img("contact-cta-banner"))
                  setModalAlt(t('contact.title'))
                  setIsModalOpen(true)
                }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('contact.form.title')}</h3>
              <div className="mb-4 text-sm text-primary-600 font-medium">{t('contact.form.sendTo')}: ryan@achievepack.com</div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-card">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-neutral-900">{t('contact.info.address')}</div>
                      <div className="text-neutral-700">{t('contact.info.addressLine1')}<br />{t('contact.info.addressLine2')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">{t('contact.info.phone')}</div>
                      <div className="text-neutral-700">{t('contact.info.phoneNumber')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">{t('contact.info.email')}</div>
                      <div className="text-neutral-700">{t('contact.info.emailAddress')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{t('contact.consultation.title')}</h3>
                <p className="text-neutral-700 mb-6">
                  {t('contact.consultation.description')}
                </p>
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{t('contact.consultation.button')}</span>
                </a>
              </div>

              <div className="bg-neutral-900 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">{t('contact.registration.title')}</h3>
                <p className="text-neutral-300">
                  {t('contact.registration.number')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-5 w-5 text-primary-500" />
                <span className="text-base font-bold">{t('footer.brand')}</span>
              </div>
              <p className="text-neutral-400 text-[10px] mb-2">
                {t('footer.tagline')}
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-2">
                <a href="https://www.instagram.com/pouch_eco/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-500 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=85269704411&text&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-500 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/achieve-pack/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.youtube.com/watch?v=3LZh1vHGAS0" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-red-500 transition-colors">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
              <img src="/imgs/cert-b.webp" alt="B Corp Certified" className="h-14 w-auto mt-2" />
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.products.title')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/packaging/stand-up-pouches" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.standUpPouches')}</Link></li>
                <li><Link to="/packaging/flat-bottom-bags" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.flatBottomBags')}</Link></li>
                <li><Link to="/packaging/spout-pouches" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.spoutPouches')}</Link></li>
                <li><Link to="/packaging/vacuum-pouches" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.vacuumPouches')}</Link></li>
                <li><Link to="/packaging/flat-pouches" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.flatPouches')}</Link></li>
                <li><Link to="/packaging/side-gusset-bags" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.sideGussetBags')}</Link></li>
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.materials')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/materials/home-compostable" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.homeCompostable')}</Link></li>
                <li><Link to="/materials/industrial-compostable" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.industrialCompostable')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.recyclableMonoPE')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pp" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.recyclableMonoPP')}</Link></li>
                <li><Link to="/materials/bio-pe" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.bioPE')}</Link></li>
                <li><Link to="/materials/pcr" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.pcrRecycled')}</Link></li>
              </ul>
            </div>

            {/* Options */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.options')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/printing/digital-printing" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.digitalPrinting')}</Link></li>
                <li><Link to="/printing/plate-printing" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.platePrinting')}</Link></li>
                <li><Link to="/features/reclosure-options" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.reclosureOptions')}</Link></li>
                <li><Link to="/features/surface-finish" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.surfaceFinishes')}</Link></li>
                <li><Link to="/features/barrier-options" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.barrierOptions')}</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.industries')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/industry/coffee-tea" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.coffeeTea')}</Link></li>
                <li><Link to="/industry/snacks-food" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.snacksFood')}</Link></li>
                <li><Link to="/industry/pet-food" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.petFood')}</Link></li>
                <li><Link to="/industry/supplements-powders" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.supplements')}</Link></li>
                <li><Link to="/industry/baby-food" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.babyFood')}</Link></li>
                <li><Link to="/industry/frozen-food" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.frozenFood')}</Link></li>
              </ul>
            </div>

            {/* Case Studies */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.caseStudies')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/case-studies/coffee-roastery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.coffeeRoastery')}</Link></li>
                <li><Link to="/case-studies/tea-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.teaBrand')}</Link></li>
                <li><Link to="/case-studies/superfood-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.superfood')}</Link></li>
                <li><Link to="/case-studies/pet-treats" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.petTreats')}</Link></li>
                <li><Link to="/case-studies/chocolate-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.chocolate')}</Link></li>
                <li><Link to="/case-studies/bakery" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.bakery')}</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.support')}</h4>
              <ul className="space-y-0.5 text-neutral-400 text-[10px]">
                <li><Link to="/support/faqs" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.faqs')}</Link></li>
                <li><Link to="/support/lead-time" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.leadTime')}</Link></li>
                <li><Link to="/knowledge/workflow" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.workflow')}</Link></li>
                <li><Link to="/company/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.aboutUs')}</Link></li>
                <li><Link to="/company/certificates" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.certificates')}</Link></li>
                <li><Link to="/company/factory-tour" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary-500">{t('footer.links.factoryTour')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold mb-1.5">{t('footer.contactUs')}</h4>
              <ul className="space-y-1 text-neutral-400 text-[10px]">
                <li className="flex items-center gap-1">
                  <Mail className="h-3 w-3 text-primary-500" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-500">ryan@achievepack.com</a>
                </li>
                <li className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-primary-500" />
                  <a href="tel:+85269704411" className="hover:text-primary-500">+852 6970 4411</a>
                </li>
              </ul>
              <a
                href="https://climate.stripe.com/WPsfbU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-1 bg-neutral-800 hover:bg-neutral-700 px-2 py-1.5 rounded transition-colors"
              >
                <svg className="h-3 w-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
                <span className="text-[10px] text-neutral-300">1% for Climate</span>
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-3 pt-3 flex flex-col md:flex-row justify-between items-center gap-1">
            <p className="text-neutral-500 text-[10px]">
              {t('footer.copyright')}
            </p>
            <p className="text-neutral-600 text-[9px]">
              {t('footer.registration')}
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={modalImage}
              alt={modalAlt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{modalAlt}</p>
          </div>
        </div>
      )}

      {/* Calculator Modal */}
      <Calculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        language={i18n.language}
        onSubmitToContact={(results) => {
          setCalculatorResults(results);
          setIsCalculatorOpen(false);

          // Pre-fill contact form with calculator results
          const message = `Hi, I used your savings calculator and found I could save $${results.costSavings.totalAnnualSavings.toLocaleString()} annually by switching to flexible packaging. I'd like to discuss this further.

Calculator Results:
- Annual Savings: $${results.costSavings.totalAnnualSavings.toLocaleString()}
- CO₂ Reduction: ${results.environmentalImpact.co2Reduction.toFixed(0)} kg/year
- Plastic Reduction: ${results.environmentalImpact.plasticReduction.toFixed(0)} kg/year

Please contact me to discuss custom solutions.`;

          setFormData({ ...formData, message });

          // Scroll to contact section
          scrollToSection('contact');
        }}
      />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.name}
                className="w-full h-64 object-contain bg-neutral-50 p-8"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-100 transition-colors"
              >
                <X className="h-5 w-5 text-neutral-700" />
              </button>
              {selectedProduct.badge && (
                <span className="absolute top-4 left-4 bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {selectedProduct.badge}
                </span>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                {selectedProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">US${selectedProduct.basePrice}</span>
                <span className="text-neutral-500 ml-2">for {selectedProduct.minOrder} pcs</span>
              </div>

              {/* Description */}
              <p className="text-neutral-700 mb-6">
                {selectedProduct.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-neutral-900 mb-3">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Turnaround & Stock */}
              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-neutral-500" />
                  <span className="text-neutral-700">{selectedProduct.turnaround}</span>
                </div>
                {selectedProduct.inStock && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-600">In Stock</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    addToCart({
                      productId: selectedProduct.id,
                      name: selectedProduct.name,
                      image: selectedProduct.images[0],
                      variant: { shape: 'stand-up', size: '120x200', barrier: 'clear', finish: 'glossy' },
                      quantity: 1,
                      unitPrice: selectedProduct.basePrice,
                      totalPrice: selectedProduct.basePrice
                    });
                    setSelectedProduct(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <Link
                  to="/store"
                  onClick={() => setSelectedProduct(null)}
                  className="flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Explore More
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Floating Contact Buttons */}
      <FloatingButtons />

      {/* Floating Testimonial Video */}
      <FloatingTestimonialVideo />
    </div>
  )
}

export default App