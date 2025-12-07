import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ReactGA from "react-ga4";
import { Menu, X, Leaf, Package, CheckCircle, Clock, Truck, Factory, Recycle, Globe, Calculator as CalcIcon, Calendar, Phone, Mail, MapPin, ChevronDown, Star, Users, Award, Zap, Target, TrendingUp, Shield } from 'lucide-react'
import { HeroGrainBackground } from './components/HeroGrainBackground'
import { getImage } from './utils/imageMapper'
import Calculator from './components/Calculator'
import type { CalculatorResults } from './utils/calculatorUtils'

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalAlt, setModalAlt] = useState('')
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null)
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
    const handleScroll = () => {
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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/achieve-pack-logo.png" alt="Achieve Pack Logo" className="h-10 w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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
                  className={`text-base font-medium transition-colors duration-200 ${activeSection === id
                    ? 'text-primary-500 font-semibold'
                    : 'text-neutral-700 hover:text-primary-500'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  className="p-2 text-neutral-700 hover:text-primary-500 transition-colors"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                >
                  <Globe className="h-5 w-5" />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-neutral-100">
                    <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">English</button>
                    <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">Français</button>
                    <button onClick={() => changeLanguage('es')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">Español</button>
                    <button onClick={() => changeLanguage('zh-TW')} className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm">繁體中文</button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
              >
                {t('nav.getStarted')}
              </button>
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
              <div className="absolute inset-0 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
              <img
                src={img("about-hero")}
                alt="Premium Sustainable Packaging"
                className="relative z-10 w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                onClick={() => {
                  setModalImage(img("about-hero"))
                  setModalAlt('Premium Sustainable Packaging')
                  setIsModalOpen(true)
                }}
              />
            </div>
          </div>
        </div>
      </section>

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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('benefits.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Environmental Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 flex items-center">
                <Leaf className="h-6 w-6 text-primary-500 mr-3" />
                {t('benefits.envTitle')}
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-carbon-footprint")}
                    alt={t('benefits.env.carbon.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-carbon-footprint"))
                      setModalAlt(t('benefits.env.carbon.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.env.carbon.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.env.carbon.desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-compostable")}
                    alt={t('benefits.env.compostable.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-compostable"))
                      setModalAlt(t('benefits.env.compostable.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.env.compostable.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.env.compostable.desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-plant-based")}
                    alt={t('benefits.env.plantBased.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-plant-based"))
                      setModalAlt(t('benefits.env.plantBased.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.env.plantBased.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.env.plantBased.desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-grs-recyclable")}
                    alt={t('benefits.env.recyclable.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-grs-recyclable"))
                      setModalAlt(t('benefits.env.recyclable.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.env.recyclable.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.env.recyclable.desc')}</p>
                </div>
              </div>
            </div>

            {/* Business Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 flex items-center">
                <Zap className="h-6 w-6 text-accent-500 mr-3" />
                {t('benefits.bizTitle')}
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-low-moq")}
                    alt={t('benefits.biz.moq.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-low-moq"))
                      setModalAlt(t('benefits.biz.moq.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.biz.moq.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.biz.moq.desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-fast-turnaround")}
                    alt={t('benefits.biz.turnaround.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-fast-turnaround"))
                      setModalAlt(t('benefits.biz.turnaround.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.biz.turnaround.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.biz.turnaround.desc')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-shipping-storage")}
                    alt={t('benefits.biz.shipping.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-shipping-storage"))
                      setModalAlt(t('benefits.biz.shipping.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.biz.shipping.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.biz.shipping.desc')}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src={img("infographic-premium-finishes")}
                    alt={t('benefits.biz.finish.title')}
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage(img("infographic-premium-finishes"))
                      setModalAlt(t('benefits.biz.finish.title'))
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{t('benefits.biz.finish.title')}</h4>
                  <p className="text-neutral-700">{t('benefits.biz.finish.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('products.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src={img("product-composting-timeline")}
                alt={t('products.items.compostable.title')}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("product-composting-timeline"))
                  setModalAlt(t('products.items.compostable.title'))
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('products.items.compostable.title')}</h3>
              <p className="text-neutral-700 mb-4">{t('products.items.compostable.desc')}</p>
              <div className="text-sm text-primary-500 font-medium">{t('products.items.compostable.badge')}</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src={img("product-recyclable-pouches")}
                alt={t('products.items.recyclable.title')}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("product-recyclable-pouches"))
                  setModalAlt(t('products.items.recyclable.title'))
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('products.items.recyclable.title')}</h3>
              <p className="text-neutral-700 mb-4">{t('products.items.recyclable.desc')}</p>
              <div className="text-sm text-primary-500 font-medium">{t('products.items.recyclable.badge')}</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src={img("product-pcr-biobased")}
                alt={t('products.items.pcr.title')}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("product-pcr-biobased"))
                  setModalAlt(t('products.items.pcr.title'))
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('products.items.pcr.title')}</h3>
              <p className="text-neutral-700 mb-4">{t('products.items.pcr.desc')}</p>
              <div className="text-sm text-primary-500 font-medium">{t('products.items.pcr.badge')}</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src={img("about-hero")}
                alt={t('products.items.bio.title')}
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage(img("about-hero"))
                  setModalAlt(t('products.items.bio.title'))
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('products.items.bio.title')}</h3>
              <p className="text-neutral-700 mb-4">{t('products.items.bio.desc')}</p>
              <div className="text-sm text-primary-500 font-medium">{t('products.items.bio.badge')}</div>
            </div>
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

      {/* Comparison Section */}
      <section id="comparison" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('comparison.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('comparison.description')}
            </p>
            <div className="mt-8">
              <img
                src={img("comparison-flexible-vs-rigid")}
                alt={t('comparison.title')}
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg cursor-pointer"
                onClick={() => {
                  setModalImage(img("comparison-flexible-vs-rigid"))
                  setModalAlt(t('comparison.title'))
                  setIsModalOpen(true)
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-8 shadow-card border-t-4 border-primary-500">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('comparison.flexible.title')}</h3>
              <p className="text-primary-500 font-medium mb-6">{t('comparison.flexible.subtitle')}</p>
              <ul className="space-y-4">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i1')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i2')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i3')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i4')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i5')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i6')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i7')}
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                  {t('comparison.flexible.i8')}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card border-t-4 border-neutral-300">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('comparison.rigid.title')}</h3>
              <p className="text-neutral-500 font-medium mb-6">{t('comparison.rigid.subtitle')}</p>
              <ul className="space-y-4">
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i1')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i2')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i3')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i4')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i5')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i6')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i7')}
                </li>
                <li className="flex items-center text-neutral-600">
                  <X className="h-5 w-5 text-neutral-400 mr-3 flex-shrink-0" />
                  {t('comparison.rigid.i8')}
                </li>
              </ul>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {['sarah', 'michael', 'emily'].map((key) => (
              <div key={key} className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{t(`testimonials.items.${key}.quote`)}"</p>
                <div>
                  <div className="font-semibold text-neutral-900">{t(`testimonials.items.${key}.name`)}</div>
                  <div className="text-sm text-neutral-600">{t(`testimonials.items.${key}.company`)}</div>
                  <div className="text-sm text-primary-500">{t(`testimonials.items.${key}.industry`)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">{t('testimonials.trusted')}</h3>
            <div className="flex justify-center items-center opacity-70">
              <img
                src={img("testimonials-client-logos")}
                alt={t('testimonials.trusted')}
                className="w-full max-w-4xl h-auto object-contain"
              />
            </div>
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
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-primary-500" />
                <span className="text-xl font-bold">{t('footer.brand')}</span>
              </div>
              <p className="text-neutral-300 mb-4">
                {t('footer.tagline')}
              </p>
              <p className="text-sm text-neutral-400">
                {t('footer.copyright')}
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.products.title')}</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.products.compostable')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.products.recyclable')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.products.biobased')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.products.custom')}</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#about" className="hover:text-primary-500 transition-colors">{t('footer.company.about')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.company.sustainability')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.company.certifications')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.company.careers')}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#contact" className="hover:text-primary-500 transition-colors">{t('footer.contact.getInTouch')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.contact.support')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.contact.documentation')}</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">{t('footer.contact.legal')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">
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
- Material Savings: $${results.costSavings.materialSavings.toLocaleString()}
- Shipping Savings: $${results.costSavings.shippingSavings.toLocaleString()}
- Storage Savings: $${results.costSavings.storageSavings.toLocaleString()}
- CO₂ Reduction: ${results.environmentalImpact.co2Reduction.toFixed(0)} kg/year
- Plastic Reduction: ${results.environmentalImpact.plasticReduction.toFixed(0)} kg/year
- Water Savings: ${results.environmentalImpact.waterSavings.toFixed(0)} liters/year

Please contact me to discuss custom packaging solutions.`;

          setFormData(prev => ({ ...prev, message }));

          // Scroll to contact section after a short delay to ensure state update
          setTimeout(() => {
            scrollToSection('contact');
          }, 100);
        }}
      />
    </div>
  )
}

export default App