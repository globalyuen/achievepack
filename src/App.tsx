import { useState, useEffect, useCallback, useTransition, useMemo, lazy, Suspense, useRef, Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Leaf, Package, CheckCircle, Clock, Truck, Factory, Recycle, Globe, Calculator as CalcIcon, Calendar, Phone, Mail, MapPin, ChevronDown, Star, Users, Award, Zap, Target, TrendingUp, Shield, ShoppingCart, User, Linkedin, ArrowRight, Plus, AlertCircle, ChevronLeft, ChevronRight, Gift } from 'lucide-react'
import { HeroGrainBackground } from './components/HeroGrainBackground'
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card'
import { getImage } from './utils/imageMapper'
import Newsletter from './components/Newsletter'
import CartSidebar from './components/store/CartSidebar'
import MegaMenu, { RightNavMenu } from './components/MegaMenu'
import CoverflowCarousel from './components/CoverflowCarousel'
import NavAvatarGroup from './components/ui/avatar-group'
import { TextRotate } from './components/ui/TextRotate'
import type { CalculatorResults } from './utils/calculatorUtils'
import { useStore } from './store/StoreContext'
import { FEATURED_PRODUCTS, type PouchProduct } from './store/productData'

// Error boundary to handle chunk loading failures
class ChunkErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Check if it's a chunk loading error
    if (error.message.includes('Failed to fetch dynamically imported module') ||
        error.message.includes('Loading chunk') ||
        error.message.includes('Loading CSS chunk')) {
      // Clear cache and reload
      console.log('Chunk loading error detected, reloading page...')
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      return null // Return nothing, page will reload
    }
    return this.props.children
  }
}

// Helper function to handle dynamic import with retry
const lazyWithRetry = (componentImport: () => Promise<any>) =>
  lazy(async () => {
    try {
      return await componentImport()
    } catch (error: any) {
      // If chunk fails to load, reload the page
      if (error.message.includes('Failed to fetch dynamically imported module') ||
          error.message.includes('Loading chunk')) {
        window.location.reload()
      }
      throw error
    }
  })

// Lazy load non-critical components for better performance
const Calculator = lazyWithRetry(() => import('./components/Calculator'))
const BriefTestimonials = lazyWithRetry(() => import('./components/BriefTestimonials'))
const TestimonialsWall = lazyWithRetry(() => import('./components/TestimonialsWall'))
const FloatingTestimonialVideo = lazyWithRetry(() => import('./components/FloatingTestimonialVideo'))
const ClimateAction = lazyWithRetry(() => import('./components/ClimateAction'))
const RandomBanner = lazyWithRetry(() => import('./components/RandomBanner'))
const EcoVideoShowcase = lazyWithRetry(() => import('./components/EcoVideoShowcase'))
const FloatingInfoGraphics = lazyWithRetry(() => import('./components/FloatingInfoGraphics'))
const AnimatedTestimonials = lazyWithRetry(() => import('./components/ui/animated-testimonials').then(m => ({ default: m.AnimatedTestimonials })))

// Lazy load Google Analytics - not critical for initial render
const loadGA = () => {
  import('react-ga4').then((ReactGA) => {
    ReactGA.default.initialize("G-JQTMH42E01");
    ReactGA.default.send({ hitType: "pageview", page: window.location.pathname });
  });
};

function App() {
  const { t, i18n } = useTranslation();
  const { cartCount, addToCart, setIsCartOpen } = useStore();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
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
  const [isRyanProfileOpen, setIsRyanProfileOpen] = useState(false)
  const [pouchShapeEnlarged, setPouchShapeEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const pouchShapeImages = [
    '/imgs/pouch-shape/ads/a_achieve_pack_structure_overview_7409393.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_size_closure_options_7735113.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_brand_closing_6612868.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_spout_pouch_closeup_5874382.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_irregular_shape_closeup_0205542.webp',
    '/imgs/pouch-shape/ads/a_achieve_pack_rollstock_closeup_5394787.webp',
  ];
  
  const navigatePouchImage = (direction: 'prev' | 'next') => {
    if (!pouchShapeEnlarged) return;
    startTransition(() => {
      let newIndex = direction === 'prev' ? pouchShapeEnlarged.index - 1 : pouchShapeEnlarged.index + 1;
      if (newIndex < 0) newIndex = pouchShapeImages.length - 1;
      if (newIndex >= pouchShapeImages.length) newIndex = 0;
      setPouchShapeEnlarged({ src: pouchShapeImages[newIndex], index: newIndex });
    });
  };
  
  const [surfaceEnlarged, setSurfaceEnlarged] = useState<{ src: string; index: number } | null>(null);
  
  const surfaceImages = [
    '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp',
    '/imgs/surface/ads/a_gloss_finish_detail_5685549.webp',
    '/imgs/surface/ads/a_gloss_pouch_correct_5078762.webp',
    '/imgs/surface/ads/a_matte_finish_detail_7483118.webp',
    '/imgs/surface/ads/a_matte_pouch_correct_6361818.webp',
    '/imgs/surface/ads/a_metallic_gold_closeup_5151764.webp',
    '/imgs/surface/ads/a_softtouch_pouch_correct_7961783.webp',
    '/imgs/surface/ads/a_embossed_navy_9933981.webp',
    '/imgs/surface/ads/a_foil_green_charcoal_7632386.webp',
    '/imgs/surface/ads/a_standup_pouches_main_6878547.webp',
  ];
  
  const navigateSurfaceImage = (direction: 'prev' | 'next') => {
    if (!surfaceEnlarged) return;
    startTransition(() => {
      let newIndex = direction === 'prev' ? surfaceEnlarged.index - 1 : surfaceEnlarged.index + 1;
      if (newIndex < 0) newIndex = surfaceImages.length - 1;
      if (newIndex >= surfaceImages.length) newIndex = 0;
      setSurfaceEnlarged({ src: surfaceImages[newIndex], index: newIndex });
    });
  };
  
  const [recloseEnlarged, setRecloseEnlarged] = useState<{ src: string; index: number } | null>(null);
  
  const recloseImages = [
    '/imgs/reclose/ads/a_reclosure_options_kv_product_photo_7983949.webp',
    '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp',
    '/imgs/reclose/ads/a_reclosure_decision_guide_7052390.webp',
    '/imgs/reclose/ads/a_reclosure_value_proposition_0710400.webp',
    '/imgs/reclose/ads/a_reclosure_comparison_scene_9769566.webp',
    '/imgs/reclose/ads/a_presstoclose_closure_detail_5742103.webp',
    '/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp',
    '/imgs/reclose/ads/a_tintie_coffee_pouch_correct_4114906.webp',
    '/imgs/reclose/ads/a_valve_closure_detail_6401844.webp',
  ];
  
  const navigateRecloseImage = (direction: 'prev' | 'next') => {
    if (!recloseEnlarged) return;
    startTransition(() => {
      let newIndex = direction === 'prev' ? recloseEnlarged.index - 1 : recloseEnlarged.index + 1;
      if (newIndex < 0) newIndex = recloseImages.length - 1;
      if (newIndex >= recloseImages.length) newIndex = 0;
      setRecloseEnlarged({ src: recloseImages[newIndex], index: newIndex });
    });
  };
  
  const [barrierEnlarged, setBarrierEnlarged] = useState<{ src: string; index: number } | null>(null);
  
  const barrierImages = [
    '/imgs/barrier/ads/a_achieve_pack_barrier_kv_updated_green_definition_6833995.webp',
    '/imgs/barrier/ads/a_barrier_levels_7395220.webp',
    '/imgs/barrier/ads/a_kraft_levels_1_2_3604187.webp',
    '/imgs/barrier/ads/a_kraft_high_max_4456348.webp',
    '/imgs/barrier/ads/a_transparent_options_3839456.webp',
    '/imgs/barrier/ads/a_metallic_barrier_closeup_9656118.webp',
    '/imgs/barrier/ads/a_application_scenarios_2234685.webp',
    '/imgs/barrier/ads/a_value_barrier_eco_4905901.webp',
    '/imgs/barrier/ads/a_closing_consultation_6756895.webp',
  ];
  
  const navigateBarrierImage = (direction: 'prev' | 'next') => {
    if (!barrierEnlarged) return;
    startTransition(() => {
      let newIndex = direction === 'prev' ? barrierEnlarged.index - 1 : barrierEnlarged.index + 1;
      if (newIndex < 0) newIndex = barrierImages.length - 1;
      if (newIndex >= barrierImages.length) newIndex = 0;
      setBarrierEnlarged({ src: barrierImages[newIndex], index: newIndex });
    });
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [formError, setFormError] = useState('')
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [homeTurnstileToken, setHomeTurnstileToken] = useState<string | null>(null)
  const homeTurnstileRef = useRef<HTMLDivElement>(null)
  const homeTurnstileWidgetId = useRef<string | null>(null)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Load Turnstile script for homepage form
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  // Render Turnstile widget for homepage form
  useEffect(() => {
    const renderWidget = () => {
      if (homeTurnstileRef.current && (window as any).turnstile && !homeTurnstileWidgetId.current) {
        homeTurnstileWidgetId.current = (window as any).turnstile.render(homeTurnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setHomeTurnstileToken(token),
          'error-callback': () => setFormError('Verification failed. Please refresh the page.'),
          'expired-callback': () => setHomeTurnstileToken(null),
          theme: 'light',
          size: 'flexible'
        })
      }
    }

    const checkAndRender = () => {
      if ((window as any).turnstile) {
        renderWidget()
      } else {
        (window as any).onTurnstileLoad = renderWidget
      }
    }
    
    // Delay to ensure DOM is ready
    const timer = setTimeout(checkAndRender, 500)
    return () => clearTimeout(timer)
  }, [])

  // Optimized modal close handlers for INP
  const closeImageModal = useCallback(() => {
    startTransition(() => {
      setIsModalOpen(false)
    })
  }, [])

  const closeProductModal = useCallback(() => {
    startTransition(() => {
      setSelectedProduct(null)
    })
  }, [])

  const closeRyanProfile = useCallback(() => {
    startTransition(() => {
      setIsRyanProfileOpen(false)
    })
  }, [])

  const openRyanProfile = useCallback(() => {
    startTransition(() => {
      setIsRyanProfileOpen(true)
    })
  }, [])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Helper function to get language-specific images
  const img = (imageName: string) => getImage(imageName, i18n.language as any);

  useEffect(() => {
    // Load Google Analytics after initial render (non-blocking)
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadGA);
    } else {
      setTimeout(loadGA, 2000);
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')
    
    if (!homeTurnstileToken) {
      setFormError('Please wait for verification to complete.')
      return
    }
    
    setFormSubmitting(true)
    
    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          inquiryType: 'quote',
          subject: 'Homepage Contact Form',
          turnstileToken: homeTurnstileToken
        })
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      setFormSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err: any) {
      setFormError(err.message || 'Failed to send message. Please try again.')
      // Reset Turnstile
      if ((window as any).turnstile && homeTurnstileWidgetId.current) {
        (window as any).turnstile.reset(homeTurnstileWidgetId.current)
        setHomeTurnstileToken(null)
      }
    } finally {
      setFormSubmitting(false)
    }
  }

  // Memoize FAQ items to prevent unnecessary re-renders and improve INP
  const faqItems = useMemo(() => {
    const keys = ['certs', 'moq', 'time', 'cost', 'barrier', 'design', 'colorConsistency', 'defects', 'testReports', 'verifyCertification', 'switching']
    return keys.map(key => ({
      key,
      question: t(`faq.items.${key}.q`),
      answer: t(`faq.items.${key}.a`)
    }))
  }, [t])

  // Get current language for hreflang
  const currentLang = i18n.language || 'en'
  const baseUrl = 'https://achievepack.com'

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t('seo.home.title', 'Achieve Pack - Sustainable Eco-Friendly Packaging Solutions')}</title>
        <meta name="description" content={t('seo.home.description', 'Transform your business with certified eco-friendly packaging. Compostable, recyclable, and bio-based pouches with low MOQ from 100 pieces. 70% less plastic.')} />
        <link rel="canonical" href={baseUrl} />
        
        {/* hreflang for multi-language */}
        <link rel="alternate" hrefLang="en" href={baseUrl} />
        <link rel="alternate" hrefLang="zh-TW" href={`${baseUrl}?lang=zh-TW`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}?lang=es`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}?lang=fr`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('seo.home.title', 'Achieve Pack - Sustainable Eco-Friendly Packaging')} />
        <meta property="og:description" content={t('seo.home.description', 'Certified compostable & recyclable packaging with low MOQ. Trusted by 500+ brands.')} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/og-image.webp`} />
        <meta property="og:locale" content={currentLang === 'zh-TW' ? 'zh_TW' : currentLang === 'es' ? 'es_ES' : currentLang === 'fr' ? 'fr_FR' : 'en_US'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.home.title', 'Achieve Pack - Sustainable Packaging')} />
        <meta name="twitter:description" content={t('seo.home.description', 'Eco-friendly packaging solutions with low MOQ.')} />
        <meta name="twitter:image" content={`${baseUrl}/imgs/og-image.webp`} />

        {/* JSON-LD Structured Data - Organization (固定英文) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://achievepack.com/#organization",
            "name": "Achieve Pack Company Limited",
            "url": "https://achievepack.com",
            "logo": "https://achievepack.com/ap-logo.svg",
            "description": "Achieve Pack helps brands switch to certified eco-friendly pouches – compostable, recyclable and bio-based – without sacrificing product protection, lead times or margins.",
            "foundingDate": "2011",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No.41 1/F Wo Liu Hang Tsuen",
              "addressLocality": "Fotan",
              "addressRegion": "New Territories",
              "postalCode": "000000",
              "addressCountry": "HK"
            },
            "contactPoint": [{
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "ryan@achievepack.com",
              "telephone": "+852-6970-4411",
              "areaServed": ["US","CA","GB","EU","AU","NZ","HK"],
              "availableLanguage": ["en","zh-Hant","es","fr"]
            }],
            "sameAs": [
              "https://pouch.eco",
              "https://www.linkedin.com/company/achieve-pack/",
              "https://www.instagram.com/pouch_eco/",
              "https://www.youtube.com/@AchievePack",
              "https://climate.stripe.com/WPsfbU"
            ]
          })}
        </script>

        {/* JSON-LD Structured Data - WebSite + WebPage (动态语言) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://achievepack.com/#website",
                "url": "https://achievepack.com",
                "name": "Achieve Pack - Eco Packaging Partner behind pouch.eco",
                "publisher": {
                  "@id": "https://achievepack.com/#organization"
                },
                "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang,
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://achievepack.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://achievepack.com/#webpage",
                "url": "https://achievepack.com",
                "name": t('schema.webpage.name', 'Certified eco-friendly pouch packaging partner for global brands'),
                "isPartOf": {
                  "@id": "https://achievepack.com/#website"
                },
                "about": {
                  "@id": "https://achievepack.com/#organization"
                },
                "description": t('schema.webpage.description', 'Achieve Pack provides certified compostable, recyclable and bio-based pouches for coffee, snacks, pet treats and other food brands, with low MOQs, realistic lead times and full technical support.'),
                "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang,
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://achievepack.com/imgs/og-image.webp"
                }
              }
            ]
          })}
        </script>

        {/* JSON-LD Structured Data - FAQPage (动态翻译) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              'certs', 'moq', 'time', 'cost', 'barrier', 'design',
              'colorConsistency', 'defects', 'testReports', 'verifyCertification', 'switching'
            ].map(key => ({
              "@type": "Question",
              "name": t(`faq.items.${key}.q`),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faq.items.${key}.a`)
              }
            }))
          })}
        </script>
      </Helmet>
      
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-white border-b border-neutral-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Testimonial Avatars left + Icons on right */}
          <div className="hidden lg:flex items-center justify-between h-10 pt-2">
            {/* Testimonial Avatar Group */}
            <NavAvatarGroup />
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  if (cartCount === 0) {
                    navigate('/store')
                  } else {
                    setIsCartOpen(true)
                  }
                }}
                className="relative w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-4 w-4 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              <Link
                to="/dashboard"
                className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <User className="h-4 w-4 text-white" />
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
                >
                  <Globe className="h-4 w-4 text-white" />
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
          </div>
          
          {/* Bottom Row: Left menus + LOGO center + Right menus */}
          <div className="hidden lg:flex items-center justify-between h-14">
            {/* Left Navigation: SHAPE | CUSTOM | STOCK */}
            <MegaMenu />
            
            {/* Center Logo - Bigger */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-12 w-auto" loading="eager" decoding="async" width="160" height="48" fetchPriority="high" />
              </Link>
            </div>
            
            {/* Right Navigation: LEARN | BLOG | FREE */}
            <RightNavMenu />
          </div>
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-10 w-auto" loading="eager" decoding="async" width="120" height="40" fetchPriority="high" />
            </Link>

            {/* Mobile Menu Button with Store Icon */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/store"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
              </Link>
              {/* Glowing FREE Button */}
              <Link
                to="/free-service/packaging-design-consultation"
                className="relative w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg animate-pulse"
                style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
              >
                <Gift className="h-5 w-5 text-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-[8px] font-bold text-yellow-900 rounded-full flex items-center justify-center animate-bounce">!</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-700 hover:text-primary-500 transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Complete with Learn & Blog */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-3">
              {/* Shop Section */}
              <Link to="/store" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-base font-semibold text-neutral-900 py-2">
                🛒 Shop All
              </Link>
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2">Pouch Shapes</p>
                <div className="grid grid-cols-2 gap-1">
                  <Link to="/store?shape=stand-up" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Stand Up Pouch</Link>
                  <Link to="/store?shape=flat-bottom" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Box Bottom Pouch</Link>
                  <Link to="/store?shape=side-gusset" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">Side Gusset Pouch</Link>
                  <Link to="/store?shape=3-side-seal" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-neutral-700">3 Side Seal Pouch</Link>
                </div>
              </div>
              
              {/* Learn Section - Expandable Categories */}
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2 flex items-center gap-1">
                  📚 Learn Center
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Materials</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to="/materials/compostable" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Compostable</Link>
                      <Link to="/materials/home-compostable" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Home Compostable</Link>
                      <Link to="/materials/recyclable-mono-pe" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Recyclable Mono PE</Link>
                      <Link to="/materials/bio-pe" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Bio-PE</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Packaging Shapes</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to="/packaging/stand-up-pouches" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Stand Up Pouches</Link>
                      <Link to="/packaging/flat-bottom-bags" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Flat Bottom Bags</Link>
                      <Link to="/packaging/side-gusset-bags" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Side Gusset Bags</Link>
                      <Link to="/packaging/spout-pouches" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Spout Pouches</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Industries</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to="/industry/coffee-tea" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Coffee & Tea</Link>
                      <Link to="/industry/snacks-food" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Snacks & Food</Link>
                      <Link to="/industry/pet-food" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Pet Food</Link>
                      <Link to="/industry/supplements-powders" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Supplements</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Solutions</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to="/solutions/startup-founder" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Startup Founder</Link>
                      <Link to="/solutions/ecommerce-brand" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Ecommerce Brand</Link>
                      <Link to="/solutions/coffee-roaster" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Coffee Roaster</Link>
                      <Link to="/solutions/food-manufacturer" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Food Manufacturer</Link>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase mb-1">Features</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to="/printing/digital-printing" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Digital Printing</Link>
                      <Link to="/features/reclosure-options" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Reclosure Options</Link>
                      <Link to="/features/barrier-options" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Barrier Options</Link>
                      <Link to="/features/surface-finish" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Surface Finishes</Link>
                    </div>
                  </div>
                  <Link to="/learn" onClick={() => setIsMenuOpen(false)} className="block py-2 text-sm text-primary-600 font-medium">View All Learn Pages →</Link>
                </div>
              </div>

              {/* Blog Section */}
              <div className="border-t border-neutral-100 pt-3">
                <p className="text-xs font-bold text-primary-600 uppercase mb-2 flex items-center gap-1">
                  📝 Blog
                </p>
                <div className="grid grid-cols-2 gap-1">
                  <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">All Articles</Link>
                  <Link to="/blog?category=Packaging" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Packaging Tips</Link>
                  <Link to="/blog?category=Sustainability" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Sustainability</Link>
                  <Link to="/blog?category=Industry" onClick={() => setIsMenuOpen(false)} className="block py-1 text-sm text-neutral-700">Industry News</Link>
                </div>
              </div>

              {/* Other Links */}
              <div className="border-t border-neutral-100 pt-3">
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block py-2 text-neutral-700 font-medium">Customer Center</Link>
              </div>
              
              {/* Mobile Language Options */}
              <div className="py-2 border-t border-neutral-100 my-2">
                <div className="text-xs text-neutral-500 font-semibold mb-2 uppercase px-1">Language</div>
                <div className="grid grid-cols-4 gap-2">
                  <button onClick={() => changeLanguage('en')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'en' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>EN</button>
                  <button onClick={() => changeLanguage('fr')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'fr' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>FR</button>
                  <button onClick={() => changeLanguage('es')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'es' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>ES</button>
                  <button onClick={() => changeLanguage('zh-TW')} className={`text-xs py-1 px-2 rounded ${i18n.language === 'zh-TW' ? 'bg-primary-50 text-primary-600' : 'text-neutral-600'}`}>中文</button>
                </div>
              </div>

              <a
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-4 block text-center"
              >
                Book Free Consultation
              </a>
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
                Transform your business with certified{' '}
                <TextRotate
                  words={['eco-friendly', 'compostable', 'PCR', 'BioPE', 'recyclable']}
                  className="text-primary-600 font-semibold"
                  interval={2500}
                  animationType="flip"
                />{' '}
                packaging solutions that reduce your environmental impact while delivering exceptional business value.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
                <Link
                  to="/store"
                  className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Shop Now</span>
                </Link>
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
                  <div className="absolute inset-0 bg-primary-500 rounded-full filter blur-3xl opacity-10"></div>
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={img("about-hero")}
                      alt="Premium Sustainable Packaging"
                      width="600"
                      height="600"
                      fetchPriority="high"
                      decoding="async"
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

      {/* 3D Eco Pouch Material Experience - Disabled */}

      {/* Random Banner with Floating Infographic Icons - Below Hero */}
      <Suspense fallback={<div className="h-32" />}>
        <div className="relative">
          <RandomBanner className="" />
          <FloatingInfoGraphics />
        </div>
      </Suspense>

      {/* Discover Products - Coverflow Carousel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Discover Products</h2>
            <p className="text-lg md:text-xl text-neutral-600 mt-2 max-w-3xl mx-auto">Swipe or drag to explore our eco-friendly packaging</p>
            <Link 
              to="/store" 
              className="inline-flex text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors items-center gap-1 mt-3"
            >
              Shop All <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <CoverflowCarousel
            items={[
              { image: '/imgs/menu/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital', label: 'Eco Digital' },
              { image: '/imgs/menu/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital', label: 'Compostable' },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp', link: '/packaging/flat-pouches', label: '3 Side Seal' },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', link: '/packaging/flat-bottom-bags', label: 'Flat Bottom' },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', link: '/packaging/side-gusset-bags', label: 'Side Gusset' },
              { image: '/imgs/store/box/corrugated-box/ads/a_hero_kv_black_gold_mailer_4737831.webp', link: '/store?category=boxes', label: 'Custom Boxes' },
              { image: '/imgs/store/box/tuck-box/ads/a_hero_kv_tuck_box_3590474.webp', link: '/store?category=boxes', label: 'Tuck Boxes' },
              { image: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp', link: '/features/surface-finish', label: 'Surface Finish' },
              { image: '/imgs/surface/ads/a_embossed_navy_9933981.webp', link: '/features/surface-finish', label: 'Embossed' },
              { image: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', link: '/features/barrier-options', label: 'Barrier Options' },
              { image: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', link: '/features/reclosure-options', label: 'Reclosure' },
              { image: '/imgs/menu/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital', label: 'Recyclable' },
              { image: '/imgs/menu/mailer/447849b2-65ea-49fb-86de-1278a636c795_upscayl_3x_upscayl-standard-4x.webp', link: '/store?category=mailer', label: 'Mailer Bags' },
            ]}
          />
          

        </div>
      </section>

      {/* Eco Video Showcase */}
      <Suspense fallback={<div className="h-64 bg-green-50" />}>
        <EcoVideoShowcase className="" />
      </Suspense>

      {/* Brief Testimonials - Avatar Row */}
      <Suspense fallback={<div className="h-24" />}>
        <BriefTestimonials />
      </Suspense>

      {/* YouTube Shorts Section - Hidden for now */}
      {/* <YouTubeShorts /> */}

      {/* Instagram Feed Section - Removed for performance, icon in footer */}

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
            <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-lg" />}>
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
            </Suspense>
          </div>

          {/* Business Benefits - Animated */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-accent-500 mr-3" />
              {t('benefits.bizTitle')}
            </h3>
            <Suspense fallback={<div className="h-96 bg-neutral-100 rounded-lg" />}>
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
            </Suspense>
          </div>
        </div>
      </section>

      {/* Products Section - Coverflow Carousel */}
      <section id="products" className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">{t('products.title')}</h2>
            <p className="text-lg md:text-xl text-neutral-600 mt-2 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
            <Link 
              to="/store" 
              className="inline-flex text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors items-center gap-1 mt-3"
            >
              Shop All <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Products Coverflow Carousel - same style as Discover Products */}
          <CoverflowCarousel
            items={FEATURED_PRODUCTS.slice(0, 10).map((product) => ({
              image: product.images[0],
              link: `/store?product=${product.id}`,
              label: product.name.length > 25 ? product.name.substring(0, 22) + '...' : product.name,
            }))}
          />

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
            <Link to="/industry/snacks-food" className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100 block">
              <img
                src={img("solution-food-beverage")}
                alt="Food & Beverage Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.food.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.food.desc')}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>

            <Link to="/industry/coffee-tea" className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100 block">
              <img
                src={img("solution-cosmetics")}
                alt={t('solutions.items.cosmetics.title')}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.cosmetics.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.cosmetics.desc')}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>

            <Link to="/industry/supplements-powders" className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100 block">
              <img
                src={img("solution-wellness")}
                alt={t('solutions.items.health.title')}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.health.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.health.desc')}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>

            <Link to="/industry/pet-food" className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100 block">
              <img
                src={img("solution-pet-products")}
                alt={t('solutions.items.pet.title')}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.pet.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.pet.desc')}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">Learn more <ArrowRight className="h-4 w-4" /></span>
            </Link>
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-900">{t('features.barrier.title')}</h3>
                <Link to="/features/barrier-options" className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mb-4">
                <img
                  src={img("feature-barrier-options")}
                  alt={t('features.barrier.title')}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-barrier-options"))
                    setModalAlt(t('features.barrier.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 mb-6">
                {barrierImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setBarrierEnlarged({ src: imgSrc, index })}
                    className="aspect-square bg-neutral-100 rounded-lg border-2 border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-md group"
                  >
                    <img src={imgSrc} alt={`Barrier Option ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </button>
                ))}
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-900">{t('features.shapes.title')}</h3>
                <Link to="/knowledge/all-options" className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mb-4">
                <img
                  src={img("feature-pouch-shapes")}
                  alt={t('features.shapes.title')}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-pouch-shapes"))
                    setModalAlt(t('features.shapes.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2">
                {pouchShapeImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setPouchShapeEnlarged({ src: img, index })}
                    className="aspect-square bg-neutral-100 rounded-lg border-2 border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-md group"
                  >
                    <img src={img} alt={`Pouch Style ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </button>
                ))}
              </div>
            </div>

            {/* Printing Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-900">{t('features.printing.title')}</h3>
                <Link to="/features/surface-finish" className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mb-4">
                <img
                  src={img("feature-printing-finishes")}
                  alt={t('features.printing.title')}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-printing-finishes"))
                    setModalAlt(t('features.printing.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2 mb-6">
                {surfaceImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setSurfaceEnlarged({ src: imgSrc, index })}
                    className="aspect-square bg-neutral-100 rounded-lg border-2 border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-md group"
                  >
                    <img src={imgSrc} alt={`Surface Finish ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </button>
                ))}
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-neutral-900">{t('features.reclosure.title')}</h3>
                <Link to="/features/reclosure-options" className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mb-4">
                <img
                  src={img("feature-reclosure-solutions")}
                  alt={t('features.reclosure.title')}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setModalImage(img("feature-reclosure-solutions"))
                    setModalAlt(t('features.reclosure.title'))
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 mb-6">
                {recloseImages.map((imgSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setRecloseEnlarged({ src: imgSrc, index })}
                    className="aspect-square bg-neutral-100 rounded-lg border-2 border-neutral-200 hover:border-primary-400 overflow-hidden transition-all hover:shadow-md group"
                  >
                    <img src={imgSrc} alt={`Reclosure Option ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </button>
                ))}
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
      <Suspense fallback={<div className="h-96 bg-neutral-50" />}>
        <TestimonialsWall />
      </Suspense>

      {/* Meet Our Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('team.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
            {/* E-E-A-T Trust Signal */}
            <p className="text-base text-primary-600 font-medium mt-4 bg-primary-50 py-3 px-6 rounded-full inline-block">
              Our team has supported over 500+ brands in US, EU, NZ and Asia since 2011, across coffee, snacks, pet treats and supplements categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: 'Ryan Wong',
                roleKey: 'packagingSpecialist',
                image: '/imgs/team/Ryan Wong - Packaging Specialist.png',
                linkedin: 'https://www.linkedin.com/in/ryanwwc/',
                email: 'ryan@achievepack.com',
                profilePage: '/team/ryan-wong'
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
                    {member.profilePage && (
                      <button
                        onClick={openRyanProfile}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors"
                        title="View Profile"
                        aria-label="View Ryan Wong's Profile"
                      >
                        <User className="h-5 w-5 text-primary-600" />
                      </button>
                    )}
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

      {/* FAQ Section - Enhanced with AI Hints and Carousel */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('faq.title')}</h2>
            <p className="text-lg text-neutral-700 mb-6">
              {t('faq.description')}
            </p>
            {/* AI Search Hint Box */}
            <div className="bg-neutral-100 rounded-lg p-4 text-sm text-neutral-600 max-w-2xl mx-auto">
              <p className="font-medium text-neutral-700 mb-2">{t('faq.aiHint.text')}</p>
              <p className="italic">"{t('faq.aiHint.q1')}"</p>
              <p className="italic">"{t('faq.aiHint.q2')}"</p>
            </div>
          </div>

          {/* FAQ Grid with Scroll - 2 columns on desktop */}
          <div className="grid md:grid-cols-2 gap-4 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-neutral-100">
            {faqItems.map(({ key, question, answer }) => (
              <details key={key} className="bg-neutral-50 rounded-lg p-5 border border-neutral-200 hover:border-primary-300 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-base font-semibold text-neutral-900 pr-4">{question}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 transition-transform duration-200 flex-shrink-0 details-chevron" />
                </summary>
                <div className="mt-4 text-sm text-neutral-700 leading-relaxed">{answer}</div>
              </details>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-4 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-1">
              <ChevronDown className="h-4 w-4" />
              Scroll for more FAQs
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Climate Action Section */}
      <Suspense fallback={<div className="h-64 bg-green-50" />}>
        <ClimateAction />
      </Suspense>

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
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-neutral-600 mb-6">Thank you for contacting us. We'll respond within 24 hours.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-primary-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-primary-600 font-medium">{t('contact.form.sendTo')}: ryan@achievepack.com</div>
                  
                  {formError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      {formError}
                    </div>
                  )}
                  
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
                <div className="flex justify-center my-4">
                  <div ref={homeTurnstileRef} className="cf-turnstile w-full max-w-[300px]" />
                </div>
                <button
                  type="submit"
                  disabled={formSubmitting || !homeTurnstileToken}
                  className="w-full bg-primary-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formSubmitting ? 'Sending...' : t('contact.form.submit')}
                </button>
              </form>
                </>
              )}
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
      <footer className="bg-primary-800 text-white pt-12 pb-8 rounded-t-[3rem] mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
            {/* Company Info */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-5 w-5 text-primary-500" />
                <span className="text-base font-bold">{t('footer.brand')}</span>
              </div>
              <p className="text-neutral-400 text-xs mb-3">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.products.title')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/packaging/stand-up-pouches" className="hover:text-primary-500">{t('footer.links.standUpPouches')}</Link></li>
                <li><Link to="/packaging/flat-bottom-bags" className="hover:text-primary-500">{t('footer.links.flatBottomBags')}</Link></li>
                <li><Link to="/packaging/spout-pouches" className="hover:text-primary-500">{t('footer.links.spoutPouches')}</Link></li>
                <li><Link to="/packaging/vacuum-pouches" className="hover:text-primary-500">{t('footer.links.vacuumPouches')}</Link></li>
                <li><Link to="/packaging/flat-pouches" className="hover:text-primary-500">{t('footer.links.flatPouches')}</Link></li>
                <li><Link to="/packaging/side-gusset-bags" className="hover:text-primary-500">{t('footer.links.sideGussetBags')}</Link></li>
                <li><Link to="/packaging/custom-boxes" className="hover:text-primary-500">Custom Boxes</Link></li>
                <li><Link to="/products/labels-and-stickers" className="hover:text-primary-500">Labels & Stickers</Link></li>
                <li><Link to="/products/lab-bags" className="hover:text-primary-500">Lab Bags</Link></li>
              </ul>
            </div>

            {/* Materials */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.materials')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/materials/home-compostable" className="hover:text-primary-500">{t('footer.links.homeCompostable')}</Link></li>
                <li><Link to="/materials/industrial-compostable" className="hover:text-primary-500">{t('footer.links.industrialCompostable')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-500">{t('footer.links.recyclableMonoPE')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-500">{t('footer.links.recyclableMonoPP')}</Link></li>
                <li><Link to="/materials/bio-pe" className="hover:text-primary-500">{t('footer.links.bioPE')}</Link></li>
                <li><Link to="/materials/pcr" className="hover:text-primary-500">{t('footer.links.pcrRecycled')}</Link></li>
              </ul>
            </div>

            {/* Options */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.options')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/printing/digital-printing" className="hover:text-primary-500">{t('footer.links.digitalPrinting')}</Link></li>
                <li><Link to="/printing/plate-printing" className="hover:text-primary-500">{t('footer.links.platePrinting')}</Link></li>
                <li><Link to="/features/reclosure-options" className="hover:text-primary-500">{t('footer.links.reclosureOptions')}</Link></li>
                <li><Link to="/features/surface-finish" className="hover:text-primary-500">{t('footer.links.surfaceFinishes')}</Link></li>
                <li><Link to="/features/barrier-options" className="hover:text-primary-500">{t('footer.links.barrierOptions')}</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.industries')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/industry/coffee-tea" className="hover:text-primary-500">{t('footer.links.coffeeTea')}</Link></li>
                <li><Link to="/industry/snacks-food" className="hover:text-primary-500">{t('footer.links.snacksFood')}</Link></li>
                <li><Link to="/industry/pet-food" className="hover:text-primary-500">{t('footer.links.petFood')}</Link></li>
                <li><Link to="/industry/supplements-powders" className="hover:text-primary-500">{t('footer.links.supplements')}</Link></li>
                <li><Link to="/industry/baby-food" className="hover:text-primary-500">{t('footer.links.babyFood')}</Link></li>
                <li><Link to="/industry/frozen-food" className="hover:text-primary-500">{t('footer.links.frozenFood')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
            {/* Case Studies */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.caseStudies')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/case-studies/coffee-roastery" className="hover:text-primary-500">{t('footer.links.coffeeRoastery')}</Link></li>
                <li><Link to="/case-studies/tea-brand" className="hover:text-primary-500">{t('footer.links.teaBrand')}</Link></li>
                <li><Link to="/case-studies/superfood-brand" className="hover:text-primary-500">{t('footer.links.superfood')}</Link></li>
                <li><Link to="/case-studies/pet-treats" className="hover:text-primary-500">{t('footer.links.petTreats')}</Link></li>
                <li><Link to="/case-studies/chocolate-brand" className="hover:text-primary-500">{t('footer.links.chocolate')}</Link></li>
                <li><Link to="/case-studies/bakery" className="hover:text-primary-500">{t('footer.links.bakery')}</Link></li>
              </ul>
            </div>

            {/* USA */}
            <div>
              <h4 className="text-sm font-semibold mb-2">🇺🇸 USA</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/usa/compostable-packaging" className="hover:text-primary-500">Compostable Hub</Link></li>
                <li><Link to="/usa/coffee-packaging" className="hover:text-primary-500">Coffee Packaging</Link></li>
                <li><Link to="/usa/snacks-packaging" className="hover:text-primary-500">Snacks Packaging</Link></li>
                <li><Link to="/usa/labeling-guide" className="hover:text-primary-500">Labeling Guide</Link></li>
              </ul>
            </div>

            {/* Product Guides */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Product Guides</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-500">Compostable Coffee Bags</Link></li>
                <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-500">Compostable Stand-Up</Link></li>
                <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-500">Recyclable Mono-Material</Link></li>
                <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-500">Coffee Degassing Valve</Link></li>
                <li><Link to="/products/low-moq-packaging" className="hover:text-primary-500">Low MOQ Packaging</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Solutions</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/solutions/startup-founder" className="hover:text-primary-500">For Startups</Link></li>
                <li><Link to="/solutions/ecommerce-brand" className="hover:text-primary-500">For E-commerce</Link></li>
                <li><Link to="/solutions/coffee-roaster" className="hover:text-primary-500">For Coffee Roasters</Link></li>
                <li><Link to="/solutions/artisan-producer" className="hover:text-primary-500">For Artisan Makers</Link></li>
                <li><Link to="/solutions/snack-brand-manager" className="hover:text-primary-500">For Snack Brands</Link></li>
                <li><Link to="/solutions/corporate-sustainability" className="hover:text-primary-500">For Corporate ESG</Link></li>
                <li><Link to="/solutions/food-manufacturer" className="hover:text-primary-500">For Food Manufacturers</Link></li>
                <li><Link to="/solutions/product-developer" className="hover:text-primary-500">For Product Developers</Link></li>
              </ul>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Topics</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/topics/eco-friendly-food-packaging" className="hover:text-primary-500">Eco Food Packaging</Link></li>
                <li><Link to="/topics/dtc-sustainable-packaging" className="hover:text-primary-500">DTC Packaging</Link></li>
                <li><Link to="/topics/green-coffee-materials" className="hover:text-primary-500">Coffee Materials</Link></li>
                <li><Link to="/topics/digital-printing-eco-packaging" className="hover:text-primary-500">Digital Printing</Link></li>
                <li><Link to="/topics/recyclable-snack-packaging" className="hover:text-primary-500">Recyclable Snacks</Link></li>
                <li><Link to="/topics/eco-packaging-regulations" className="hover:text-primary-500">Regulations Guide</Link></li>
                <li><Link to="/topics/compostable-pouch-suppliers" className="hover:text-primary-500">Compostable Suppliers</Link></li>
                <li><Link to="/topics/low-moq-startup-packaging" className="hover:text-primary-500">Low MOQ Startup</Link></li>
                <li><Link to="/topics/compostable-baby-food-bags" className="hover:text-primary-500">Baby Food Bags</Link></li>
                <li><Link to="/topics/custom-printed-sustainable-pouches" className="hover:text-primary-500">Custom Printed Pouches</Link></li>
              </ul>
            </div>

            {/* Function */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Function</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-500">Microwave Steam Bags</Link></li>
                <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-500">Carbon Neutral Bags</Link></li>
                <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-500">Spout Pouches Juice</Link></li>
                <li><Link to="/function/child-resistant-bags" className="hover:text-primary-500">Child-Resistant Bags</Link></li>
                <li><Link to="/function/pre-zippered-rollstock" className="hover:text-primary-500">Pre-Zippered Rollstock</Link></li>
                <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-500">Digital Printed Retort</Link></li>
                <li><Link to="/function/rice-paper-bags" className="hover:text-primary-500">Rice Paper Bags</Link></li>
                                <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-500">PVA Water-Soluble Bags</Link></li>
              </ul>
            </div>

            {/* Lab Bag */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Lab Bag</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/lab/lateral-filter-bags" className="hover:text-primary-500">Lateral Filter Bags</Link></li>
                <li><Link to="/lab/wire-closure-bags" className="hover:text-primary-500">Wire Closure Bags</Link></li>
                <li><Link to="/lab/lab-blender-bags" className="hover:text-primary-500">Lab Blender Bags</Link></li>
              </ul>
            </div>

            {/* Composting */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Composting</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/composting/composting-benefits" className="hover:text-primary-500">Composting Benefits</Link></li>
                <li><Link to="/composting/composting-services" className="hover:text-primary-500">Service Finder</Link></li>
                <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-500">Biodegradable vs Compostable</Link></li>
                <li><Link to="/composting/commercial-composting" className="hover:text-primary-500">Commercial Composting</Link></li>
                <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-500">Home vs Industrial</Link></li>
              </ul>
            </div>

            {/* BioPE */}
            <div>
              <h4 className="text-sm font-semibold mb-2">BioPE</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-500">What is Bio-PE?</Link></li>
                <li><Link to="/biope/bio-pe-vs-compostable" className="hover:text-primary-500">Bio-PE vs Compostable</Link></li>
                <li><Link to="/biope/bio-pe-epr-regulations" className="hover:text-primary-500">Bio-PE & EPR</Link></li>
                <li><Link to="/biope/inside-im-green-bio-pe" className="hover:text-primary-500">Inside I'm green™</Link></li>
              </ul>
            </div>

            {/* PCR */}
            <div>
              <h4 className="text-sm font-semibold mb-2">PCR</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/pcr/pcr-plastic-guide" className="hover:text-primary-500">What Is PCR Plastic?</Link></li>
                <li><Link to="/pcr/7-checklist" className="hover:text-primary-500">PCR 7-Point Checklist</Link></li>
                <li><Link to="/pcr/realistic-pcr-content" className="hover:text-primary-500">Realistic PCR Content</Link></li>
                <li><Link to="/materials/pcr" className="hover:text-primary-500">PCR Materials</Link></li>
              </ul>
            </div>

            {/* Recyclable */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Recyclable</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-500">What Is 100% Recyclable?</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-500">Recyclable Mono-PE</Link></li>
                <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-500">Recyclable Mono-PP</Link></li>
              </ul>
            </div>

            {/* Structure Specs */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Structure Specs</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-500">PCR Structures</Link></li>
                <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-500">Mono PE/PP</Link></li>
                <li><Link to="/spec/bio-cello-duplex-clear" className="hover:text-primary-500">Compostable Bio</Link></li>
                <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-500">Bio-PE Structures</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.support')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/support/faqs" className="hover:text-primary-500">{t('footer.links.faqs')}</Link></li>
                <li><Link to="/support/lead-time" className="hover:text-primary-500">{t('footer.links.leadTime')}</Link></li>
                <li><Link to="/knowledge/workflow" className="hover:text-primary-500">{t('footer.links.workflow')}</Link></li>
                <li><Link to="/reviews" className="hover:text-primary-500">Customer Reviews</Link></li>
                <li><Link to="/company/about" className="hover:text-primary-500">{t('footer.links.aboutUs')}</Link></li>
                <li><Link to="/company/certificates" className="hover:text-primary-500">{t('footer.links.certificates')}</Link></li>
                <li><Link to="/company/factory-tour" className="hover:text-primary-500">{t('footer.links.factoryTour')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.contactUs')}</h4>
              <ul className="space-y-1.5 text-neutral-400 text-xs">
                <li className="flex items-center gap-1">
                  <Mail className="h-3 w-3 text-primary-500" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-500">ryan@achievepack.com</a>
                </li>
                <li className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-primary-500" />
                  <a href="tel:+85269704411" className="hover:text-primary-500">+852 6970 4411</a>
                </li>
              </ul>
            </div>

            {/* Blog & Store */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Blog & Store</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/blog" className="hover:text-primary-500">All Articles</Link></li>
                <li><Link to="/store" className="hover:text-primary-500">Online Store</Link></li>
              </ul>
            </div>

            {/* Knowledge */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Knowledge</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-500">Pouch Sizing Guide</Link></li>
                <li><Link to="/knowledge/size-guide" className="hover:text-primary-500">Size Reference</Link></li>
                <li><Link to="/knowledge/all-options" className="hover:text-primary-500">All Options</Link></li>
                <li><Link to="/knowledge/printing-types" className="hover:text-primary-500">Printing Types</Link></li>
              </ul>
            </div>
          </div>

          {/* Members for the Planet | Certifications & Payment | Connect with Us */}
          <div className="border-t border-neutral-800 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Members for the Planet */}
              <div className="text-center md:text-left">
                <h4 className="text-neutral-400 text-sm font-medium mb-4">Members for the planet</h4>
                <div className="flex items-center justify-center md:justify-start gap-6">
                  {/* 1% For The Planet Logo */}
                  <a href="https://www.onepercentfortheplanet.org/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    <svg className="h-12 w-auto" viewBox="0 0 200 60" fill="currentColor">
                      <g fill="#fff">
                        <circle cx="25" cy="30" r="22" stroke="#fff" strokeWidth="2" fill="none"/>
                        <text x="25" y="36" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fff">1%</text>
                        <text x="70" y="24" fontSize="9" fill="#fff">FOR THE</text>
                        <text x="70" y="38" fontSize="12" fontWeight="bold" fill="#fff">PLANET</text>
                        <text x="70" y="48" fontSize="6" fill="#999">MEMBER</text>
                      </g>
                    </svg>
                  </a>
                  {/* Leave No Trace Logo */}
                  <a href="https://lnt.org/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                    <svg className="h-10 w-auto" viewBox="0 0 100 40" fill="currentColor">
                      <g fill="#fff">
                        <path d="M15 20c0-8 6-14 14-14s14 6 14 14-6 14-14 14-14-6-14-14z" stroke="#fff" strokeWidth="1.5" fill="none"/>
                        <path d="M22 12c2-2 6-2 8 0s2 6 0 8c3 2 3 6 1 8s-6 2-8 0" stroke="#fff" strokeWidth="1" fill="none"/>
                        <text x="52" y="18" fontSize="7" fill="#fff">Leave</text>
                        <text x="52" y="26" fontSize="7" fontWeight="bold" fill="#fff">No</text>
                        <text x="52" y="34" fontSize="7" fill="#fff">Trace</text>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Center: Certifications, Carbon Commitment, Payment & SSL */}
              <div className="text-center">
                <div className="flex flex-col items-center gap-3">
                  {/* BPI & B Corp Logos */}
                  <img src="/bpi-bcorp-logos.svg" alt="BPI & B Corp Certified" className="h-12 w-auto" loading="lazy" decoding="async" />
                  {/* 1% Carbon Removal */}
                  <a 
                    href="https://climate.stripe.com/WPsfbU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-primary-300 hover:text-primary-200 transition-colors"
                  >
                    <svg className="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
                      <path d="M12 8v8M8 12h8"/>
                    </svg>
                    <span>At Achieve Pack pouch.eco, we contribute 1% of our revenue to carbon removal</span>
                  </a>
                  {/* Payment Logos */}
                  <img src="/pay-logos.svg" alt="Payment Methods" className="h-8 w-auto" loading="lazy" decoding="async" />
                  {/* SSL Secure Badge */}
                  <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-neutral-300 font-medium">SSL 100% Secure Transactions</span>
                  </div>
                </div>
              </div>

              {/* Right: Connect with Us */}
              <div className="text-center md:text-right">
                <h4 className="text-neutral-400 text-sm font-medium mb-4">Connect with us</h4>
                <div className="flex items-center justify-center md:justify-end gap-3">
                  {/* Instagram */}
                  <a href="https://www.instagram.com/pouch_eco/" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@pouch_eco" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/achievepack" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://twitter.com/achievepack" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/achieve-pack/" target="_blank" rel="noopener noreferrer" 
                     className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center text-white/80 hover:border-white hover:text-white hover:bg-white/10 transition-all">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Empty row for testimonial and chat icons */}
          <div className="border-t border-neutral-800 py-6">
            <div className="flex justify-center items-center gap-8 min-h-[40px]">
              {/* Space reserved for testimonial icon and chat icon */}
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-neutral-500 text-xs">
              {t('footer.copyright')}
            </p>
            <p className="text-neutral-600 text-xs">
              {t('footer.registration')}
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closeImageModal}
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

      {/* Pouch Shape Lightbox Modal */}
      {pouchShapeEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setPouchShapeEnlarged(null)}
        >
          <button 
            onClick={() => setPouchShapeEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigatePouchImage('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 rotate-90" />
          </button>
          
          <img 
            src={pouchShapeEnlarged.src} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigatePouchImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 -rotate-90" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {pouchShapeEnlarged.index + 1} / {pouchShapeImages.length}
          </div>
        </div>
      )}

      {/* Surface Finish Lightbox Modal */}
      {surfaceEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSurfaceEnlarged(null)}
        >
          <button 
            onClick={() => setSurfaceEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateSurfaceImage('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 rotate-90" />
          </button>
          
          <img 
            src={surfaceEnlarged.src} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateSurfaceImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 -rotate-90" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {surfaceEnlarged.index + 1} / {surfaceImages.length}
          </div>
        </div>
      )}

      {/* Reclose Lightbox Modal */}
      {recloseEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setRecloseEnlarged(null)}
        >
          <button 
            onClick={() => setRecloseEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateRecloseImage('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 rotate-90" />
          </button>
          
          <img 
            src={recloseEnlarged.src} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateRecloseImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 -rotate-90" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {recloseEnlarged.index + 1} / {recloseImages.length}
          </div>
        </div>
      )}

      {/* Barrier Lightbox Modal */}
      {barrierEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setBarrierEnlarged(null)}
        >
          <button 
            onClick={() => setBarrierEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateBarrierImage('prev'); }}
            className="absolute left-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 rotate-90" />
          </button>
          
          <img 
            src={barrierEnlarged.src} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigateBarrierImage('next'); }}
            className="absolute right-4 text-white hover:text-neutral-300 transition p-2"
          >
            <ChevronDown className="h-10 w-10 -rotate-90" />
          </button>
          
          <div className="absolute bottom-4 text-white text-sm">
            {barrierEnlarged.index + 1} / {barrierImages.length}
          </div>
        </div>
      )}

      {/* Calculator Modal */}
      <Suspense fallback={null}>
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
      </Suspense>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeProductModal}
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
                onClick={closeProductModal}
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
                <span className="text-neutral-600">{selectedProduct.rating}</span>
                <Link to="/reviews" onClick={closeProductModal} className="text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({selectedProduct.reviews} reviews)</Link>
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
                    closeProductModal();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <Link
                  to="/store"
                  onClick={closeProductModal}
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

      {/* Ryan Wong Profile Modal */}
      {isRyanProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeRyanProfile}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeRyanProfile}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
            >
              <X className="h-6 w-6 text-neutral-600" />
            </button>

            {/* Header Section */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white p-8 rounded-t-2xl" style={{backgroundColor: '#15803d', backgroundImage: 'linear-gradient(to bottom right, #15803d, #065f46)'}}>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img 
                  src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                  alt="Ryan Wong" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2" style={{color: '#ffffff'}}>Ryan Wong</h2>
                  <p className="text-xl mb-2" style={{color: '#ffffff'}}>Packaging Development Specialist</p>
                  <p className="text-sm" style={{color: '#ffffff'}}>
                    14 years experience | 8 countries | Fortune 500 & DTC startups
                  </p>
                  <p className="text-sm mt-2" style={{color: '#ffffff'}}>
                    🎓 The Hong Kong Polytechnic University (Honor Degree)
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Exhibition Photo */}
              <div className="mb-6">
                <img 
                  src="/imgs/team/ryan-in-exhib.webp" 
                  alt="Ryan Wong at Packaging Exhibition" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center italic">Ryan at international packaging exhibition</p>
              </div>

              {/* About */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">About Ryan</h3>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    With <strong>14 years of dedicated experience</strong> in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutual beneficial and long-lasting business relationships.
                  </p>
                  <p>
                    Ryan's packaging experience and business relationships span <strong>8 countries</strong>: Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a <strong>Hong Kong Polytechnic University Honor Degree</strong> graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise.
                  </p>
                  <p>
                    At Achieve Pack, Ryan specializes in <strong>100% compostable digital print solutions</strong> with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike.
                  </p>
                </div>
              </div>

              {/* Core Expertise */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Core Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Compostable coffee pouches for DTC brands',
                    'Chocolate & confectionery packaging',
                    'Tea packaging (loose leaf & sachets)',
                    'EN 13432 & ASTM D6400 compliance',
                    'Low MOQ sustainable solutions',
                    'Barrier technology for food products'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary-600 mt-0.5">✓</span>
                      <span className="text-neutral-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">14</div>
                  <div className="text-xs text-neutral-600">Years Experience</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">8</div>
                  <div className="text-xs text-neutral-600">Countries Served</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">100</div>
                  <div className="text-xs text-neutral-600">Minimum Order</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">4</div>
                  <div className="text-xs text-neutral-600">Days Rush</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://www.linkedin.com/in/ryanwwc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg"
                  style={{color: '#ffffff'}}
                >
                  <Linkedin className="h-5 w-5" style={{color: '#ffffff'}} />
                  <span style={{color: '#ffffff'}}>LinkedIn Profile</span>
                </a>
                <a 
                  href="mailto:ryan@achievepack.com"
                  className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                  style={{color: '#16a34a'}}
                >
                  <Mail className="h-5 w-5" style={{color: '#16a34a'}} />
                  <span style={{color: '#16a34a'}}>Contact</span>
                </a>
                <a 
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition"
                  style={{color: '#ffffff'}}
                >
                  <Calendar className="h-5 w-5" style={{color: '#ffffff'}} />
                  <span style={{color: '#ffffff'}}>Schedule Meeting</span>
                </a>
                <Link
                  to="/team/ryan-wong"
                  className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition"
                  style={{color: '#1f2937'}}
                >
                  <span style={{color: '#1f2937'}}>View Full Profile</span>
                  <ArrowRight className="h-5 w-5" style={{color: '#1f2937'}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Floating Testimonial Video */}
      <Suspense fallback={null}>
        <FloatingTestimonialVideo />
      </Suspense>
    </div>
    </>
  )
}

export default App