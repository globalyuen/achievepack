import { useState, useEffect, useCallback, useTransition, useMemo, lazy, Suspense, useRef, Component, ErrorInfo, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Leaf, Package, CheckCircle, Clock, Truck, Factory, Recycle, Globe, Calculator as CalcIcon, Calendar, Phone, Mail, MapPin, ChevronDown, Star, Users, Award, Zap, Target, TrendingUp, Shield, ShoppingCart, User, Linkedin, ArrowRight, Plus, AlertCircle, ChevronLeft, ChevronRight, Gift, Palette, Sparkles } from 'lucide-react'
import LanguageSelector from './components/LanguageSelector';
import { CardContainer, CardBody, CardItem } from './components/ui/3d-card'
import { getImage } from './utils/imageMapper'
import Newsletter from './components/Newsletter'
import { ParallaxText } from './components/ParallaxText'
import { CLIENT_LOGOS } from './data/clientLogos'
import CartSidebar from './components/store/CartSidebar'
import MegaMenu, { RightNavMenu } from './components/MegaMenu'
import CoverflowCarousel from './components/CoverflowCarousel'
import { SizingFinderIcon, MaterialSpecFinderIcon } from './components/AppIcons'
import NavAvatarGroup from './components/ui/avatar-group'
import { TextRotate } from './components/ui/TextRotate'
import type { CalculatorResults } from './utils/calculatorUtils'
import { useStore } from './store/StoreContext'
import { FEATURED_PRODUCTS, type PouchProduct } from './store/productData'
import ReadingProgress from './components/ReadingProgress'
import { getDomain, getBrandConfig, getBaseUrl } from './utils/domain'
import QuoteLightbox from './components/QuoteLightbox';
import { ThreePouchViewer } from './components/ThreePouchViewer';
import ProductCarousel from './components/ProductCarousel';

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
const TestimonialsCoverflow = lazyWithRetry(() => import('./components/TestimonialsCoverflow'))
const TestimonialsWall = lazyWithRetry(() => import('./components/TestimonialsWall'))
const FloatingTestimonialVideo = lazyWithRetry(() => import('./components/FloatingTestimonialVideo'))
const ClimateAction = lazyWithRetry(() => import('./components/ClimateAction'))
const RandomBanner = lazyWithRetry(() => import('./components/RandomBanner'))
const EcoVideoShowcase = lazyWithRetry(() => import('./components/EcoVideoShowcase'))
const FloatingInfoGraphics = lazyWithRetry(() => import('./components/FloatingInfoGraphics'))
const FloatingLeaves = lazyWithRetry(() => import('./components/FloatingLeaves'))
const AnimatedTestimonials = lazyWithRetry(() => import('./components/ui/animated-testimonials').then(m => ({ default: m.AnimatedTestimonials })))

// Lazy load Google Analytics - not critical for initial render
const loadGA = () => {
  import('react-ga4').then((ReactGA) => {
    ReactGA.default.initialize("G-JQTMH42E01");
    ReactGA.default.send({ hitType: "pageview", page: window.location.pathname });
  });
};

import WorkCarousel from './components/WorkCarousel'
import KnowHowCarousel from './components/KnowHowCarousel'


function App() {

  const { t, i18n } = useTranslation();
  const { cartCount, addToCart, setIsCartOpen } = useStore();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalAlt, setModalAlt] = useState('')
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<PouchProduct | null>(null)
  const [isRyanProfileOpen, setIsRyanProfileOpen] = useState(false)

  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024)
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)
  const videoRef4 = useRef<HTMLVideoElement>(null)
  const videoRef5 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsLaptop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (activeHeroIndex === 0) {
      videoRef1.current?.play().catch((err) => console.log(err))
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 1) {
      videoRef2.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 2) {
      videoRef3.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else if (activeHeroIndex === 3) {
      videoRef4.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef5.current) { videoRef5.current.pause(); videoRef5.current.currentTime = 0; }
    } else {
      videoRef5.current?.play().catch((err) => console.log(err))
      if (videoRef1.current) { videoRef1.current.pause(); videoRef1.current.currentTime = 0; }
      if (videoRef2.current) { videoRef2.current.pause(); videoRef2.current.currentTime = 0; }
      if (videoRef3.current) { videoRef3.current.pause(); videoRef3.current.currentTime = 0; }
      if (videoRef4.current) { videoRef4.current.pause(); videoRef4.current.currentTime = 0; }
    }
  }, [activeHeroIndex])

  const offsetVal = isMobile ? 16 : (isLaptop ? 48 : 40)
  const slideVal = isMobile ? 120 : (isLaptop ? 312 : 260)

  const card1Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card2Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card3Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card4Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, 10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const card5Variants = {
    front: {
      x: 0,
      y: 0,
      rotate: 2,
      scale: 1,
      zIndex: 50,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    middle: {
      x: offsetVal,
      y: offsetVal,
      rotate: 6,
      scale: 1,
      zIndex: 40,
      transition: { duration: 0.6, ease: "easeInOut" as const }
    },
    back: {
      x: [0, -slideVal, offsetVal],
      y: [0, -20, offsetVal],
      rotate: [2, -10, 10],
      scale: 1,
      zIndex: [50, 10, 10],
      transition: {
        times: [0, 0.4, 1],
        duration: 0.8,
        ease: "easeInOut" as const
      }
    }
  }

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }



  const [sloganIdx, setSloganIdx] = useState(-1);

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * 9);
    setSloganIdx(randomIdx);
  }, []);

  const defaultSlogan = {
    prefix: t("slogans.default.prefix", "Your Customers Care What Their Products Are Made Of & Where They End Up."),
    suffix: t("slogans.default.suffix", "Your Packaging Should Too.")
  };

  const slogansB2b = t('slogans.b2b', { returnObjects: true });
  const slogan = sloganIdx >= 0 && Array.isArray(slogansB2b) && slogansB2b[sloganIdx] ? {
    prefix: slogansB2b[sloganIdx].prefix || '',
    suffix: slogansB2b[sloganIdx].suffix || ''
  } : defaultSlogan;

  // 3D Pouch Interactive states
  const [activePouchModel, setActivePouchModel] = useState<'spouted' | 'flat-bottom'>('spouted')
  const [threeTilt, setThreeTilt] = useState({ x: 0, y: 0 })
  const [threeScrollPercent, setThreeScrollPercent] = useState(0)
  const threeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!threeContainerRef.current) return
      const rect = threeContainerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      const start = rect.top - viewportHeight
      const totalRange = rect.height + viewportHeight
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = (viewportHeight - rect.top) / totalRange
        setThreeScrollPercent(Math.max(0, Math.min(1, progress)))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleThreeMouseMove = (e: React.MouseEvent) => {
    if (!threeContainerRef.current) return
    const rect = threeContainerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setThreeTilt({ x: x * 25, y: y * -25 })
  }

  const handleThreeMouseLeave = () => {
    setThreeTilt({ x: 0, y: 0 })
  }
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
    '/imgs/store/additional/valve.webp',
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

  // Get domain-specific configuration
  const domain = getDomain()
  const brand = getBrandConfig()
  const baseUrl = getBaseUrl()
  const isPouch = domain === 'pouch'

  // Get current language for hreflang
  const currentLang = i18n.language || 'en'

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{isPouch ? t('seo.pouchHome.title') : t('seo.home.title')}</title>
        <meta name="description" content={isPouch ? t('seo.pouchHome.description') : t('seo.home.description')} />
        <link rel="canonical" href={baseUrl} />
        
        {/* hreflang for multi-language */}
        <link rel="alternate" hrefLang="en" href={baseUrl} />
        <link rel="alternate" hrefLang="zh-TW" href={`${baseUrl}?lang=zh-TW`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}?lang=es`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}?lang=fr`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={isPouch ? `Pouch.eco - ${t('seo.home.title', 'Eco Packaging for Startups')}` : t('seo.home.title', 'Achieve Pack - Sustainable Eco-Friendly Packaging')} />
        <meta property="og:description" content={isPouch ? t('seo.home.description', 'Beautiful compostable packaging from just 500 units. Perfect for small brands.') : t('seo.home.description', 'Certified compostable & recyclable packaging with low MOQ. Trusted by 500+ brands.')} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${baseUrl}/imgs/og-image.webp`} />
        <meta property="og:site_name" content={brand.name} />
        <meta property="og:locale" content={currentLang === 'zh-TW' ? 'zh_TW' : currentLang === 'es' ? 'es_ES' : currentLang === 'fr' ? 'fr_FR' : 'en_US'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={isPouch ? `Pouch.eco - ${t('seo.home.title', 'Eco Packaging')}` : t('seo.home.title', 'Achieve Pack - Sustainable Packaging')} />
        <meta name="twitter:description" content={isPouch ? t('seo.home.description', 'Compostable packaging from 500 units') : t('seo.home.description', 'Eco-friendly packaging solutions with low MOQ.')} />
        <meta property="twitter:image" content={`${baseUrl}/imgs/og-image.webp`} />

        {/* JSON-LD Structured Data - Organization */}
        {!isPouch && (
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
        )}

        {/* JSON-LD Structured Data - WebSite + WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": isPouch ? "Pouch.eco - Eco Packaging for Startups" : "Achieve Pack - Eco Packaging Partner behind pouch.eco",
                "publisher": {
                  "@id": `${baseUrl}/#organization`
                },
                "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang,
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${baseUrl}/?s={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "WebPage",
                "@id": `${baseUrl}/#webpage`,
                "url": baseUrl,
                "name": isPouch ? t('schema.webpage.name', 'Eco-friendly compostable packaging for startups and small brands') : t('schema.webpage.name', 'Certified eco-friendly pouch packaging partner for global brands'),
                "isPartOf": {
                  "@id": `${baseUrl}/#website`
                },
                "description": isPouch ? t('schema.webpage.description', 'Pouch.eco offers beautiful compostable packaging from just 500 units, perfect for small brands starting their sustainability journey.') : t('schema.webpage.description', 'Achieve Pack provides certified compostable, recyclable and bio-based pouches for coffee, snacks, pet treats and other food brands, with low MOQs, realistic lead times and full technical support.'),
                "inLanguage": currentLang === 'zh-TW' ? 'zh-Hant' : currentLang,
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/imgs/og-image.webp`
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

      {/* Reading Progress Bar */}
      <ReadingProgress />
      
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
                to="/signin"
                className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <User className="h-4 w-4 text-white" />
              </Link>
              <LanguageSelector />
            </div>
          </div>
          
          {/* Bottom Row: Left menus + LOGO center + Right menus */}
          <div className="hidden lg:flex items-center justify-between h-14">
            {/* Left Navigation: SHAPE | CUSTOM | STOCK */}
            <MegaMenu />
            
            {/* Center Logo - Bigger */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex items-center">
                <img src={brand.logoPath} alt={`${brand.name} Logo`} className="h-12 w-auto" loading="eager" decoding="async" width="160" height="48" fetchPriority="high" />
              </Link>
            </div>
            
            {/* Right Navigation: LEARN | BLOG | FREE */}
            <RightNavMenu />
          </div>
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img src={brand.logoPath} alt={`${brand.name} Logo`} className="h-10 w-auto" loading="eager" decoding="async" width="120" height="40" fetchPriority="high" />
            </Link>

            {/* Mobile Menu Button with Store Icon */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/store"
                className="w-11 h-11 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors active:scale-95"
              >
                <ShoppingCart className="h-5 w-5 text-white" />
              </Link>
              {/* Glowing FREE Button */}
              <Link
                to="/free-service"
                className="relative w-11 h-11 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg animate-pulse active:scale-95"
                style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
              >
                <Gift className="h-5 w-5 text-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 text-[8px] font-bold text-yellow-900 rounded-full flex items-center justify-center animate-bounce">!</span>
              </Link>
              <button
                onClick={() => startTransition(() => setIsMenuOpen(!isMenuOpen))}
                className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-colors"
                aria-label={isMenuOpen ? t('appHome.string_207', 'Close menu') : t('appHome.string_208', 'Open menu')}
              >
                {isMenuOpen ? <X className="h-6 w-6 text-neutral-700" /> : <Menu className="h-6 w-6 text-neutral-700" />}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Slide-in Panel */}
      <div className={`lg:hidden fixed top-16 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-24">
            {/* Shop Section */}
            <Link to="/store" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 w-full text-left text-base font-semibold text-neutral-900 py-3 px-2 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">
              {t('achievePackHome.nav.shopAll', '🛒 Shop All Products')}
            </Link>
            <div className="border-t border-neutral-100 pt-3">
              <p className="text-xs font-bold text-primary-600 uppercase mb-2 px-2">{t('achievePackHome.nav.pouchShapes', 'Pouch Shapes')}</p>
              <div className="grid grid-cols-2 gap-1">
                <Link to="/store?shape=stand-up" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.standUpPouch', 'Stand Up Pouch')}</Link>
                <Link to="/store?shape=flat-bottom" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.boxBottomPouch', 'Box Bottom Pouch')}</Link>
                <Link to="/store?shape=side-gusset" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.sideGussetPouch', 'Side Gusset Pouch')}</Link>
                <Link to="/store?shape=3-side-seal" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.threeSideSeal', '3 Side Seal Pouch')}</Link>
              </div>
            </div>
            
            {/* Learn Section */}
            <div className="border-t border-neutral-100 pt-3">
              <p className="text-xs font-bold text-primary-600 uppercase mb-2 px-2 flex items-center gap-1">
                {t('achievePackHome.nav.learnCenter', '📚 Learn Center')}
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase mb-1 px-2">{t('achievePackHome.nav.materials', 'Materials')}</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/materials/compostable" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.compostable', 'Compostable')}</Link>
                    <Link to="/materials/home-compostable" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.homeCompostable', 'Home Compostable')}</Link>
                    <Link to="/materials/recyclable-mono-pe" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.recyclableMonoPE', 'Recyclable Mono PE')}</Link>
                    <Link to="/materials/bio-pe" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.bioPE', 'Bio-PE')}</Link>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase mb-1 px-2">{t('achievePackHome.nav.packagingShapes', 'Packaging Shapes')}</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/packaging/stand-up-pouches" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.standUpPouches', 'Stand Up Pouches')}</Link>
                    <Link to="/packaging/flat-bottom-bags" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.flatBottomBags', 'Flat Bottom Bags')}</Link>
                    <Link to="/packaging/side-gusset-bags" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.sideGussetBags', 'Side Gusset Bags')}</Link>
                    <Link to="/packaging/spout-pouches" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.spoutPouches', 'Spout Pouches')}</Link>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 uppercase mb-1 px-2">{t('achievePackHome.nav.industries', 'Industries')}</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link to="/industry/coffee-tea" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.coffeeTea', 'Coffee & Tea')}</Link>
                    <Link to="/industry/snacks-food" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.snacksFood', 'Snacks & Food')}</Link>
                    <Link to="/industry/pet-food" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.petFood', 'Pet Food')}</Link>
                    <Link to="/industry/supplements-powders" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.supplements', 'Supplements')}</Link>
                    <Link to="/industry/baby-food" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.babyFood', 'Baby Food')}</Link>
                    <Link to="/industry/frozen-food" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.frozenFood', 'Frozen Food')}</Link>
                    <Link to="/solutions/citrus-oil-packaging" onClick={() => setIsMenuOpen(false)} className="block py-2.5 px-3 text-sm text-primary-600 rounded-lg hover:bg-primary-50 active:bg-primary-100 font-medium">{t('achievePackHome.nav.citrusOil', 'Citrus Oil Packaging')}</Link>
                  </div>
                </div>
                <Link to="/learn" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-primary-600 font-medium rounded-lg hover:bg-primary-50 active:bg-primary-100">{t('achievePackHome.nav.viewAllLearn', 'View All Learn Pages →')}</Link>
              </div>
            </div>

            {/* Blog Section */}
            <div className="border-t border-neutral-100 pt-3">
              <p className="text-xs font-bold text-primary-600 uppercase mb-2 px-2 flex items-center gap-1">
                {t('achievePackHome.nav.blog', '📝 Blog')}
              </p>
              <div className="grid grid-cols-2 gap-1">
                <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.allArticles', 'All Articles')}</Link>
                <Link to="/blog?category=Packaging" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.packagingTips', 'Packaging Tips')}</Link>
                <Link to="/blog?category=Sustainability" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.sustainability', 'Sustainability')}</Link>
                <Link to="/blog?category=Industry" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-sm text-neutral-700 rounded-lg hover:bg-neutral-50 active:bg-neutral-100">{t('achievePackHome.nav.industryNews', 'Industry News')}</Link>
              </div>
            </div>

            {/* Other Links */}
            <div className="border-t border-neutral-100 pt-3">
              <Link to="/support/unprinted-samples" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-3 px-2 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 active:bg-neutral-100">
                {t('achievePackHome.nav.unprintedSamples', '📦 Unprinted Samples')}
              </Link>
              <Link to="/support/sample-quote" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-3 px-2 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 active:bg-neutral-100">
                {t('achievePackHome.nav.customPrintedSample', '✨ Custom Printed Sample')}
              </Link>
              <Link to="/signin" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-3 px-2 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 active:bg-neutral-100">
                <User className="h-4 w-4" />
                {t('achievePackHome.nav.customerCenter', 'Customer Center')}
              </Link>
            </div>
            
            {/* Mobile Language Options */}
              <div className="py-2 border-t border-neutral-100">
                <div className="text-xs text-neutral-500 font-semibold mb-2 uppercase px-2">{t('achievePackHome.nav.language', 'Language')}</div>
                <div className="grid grid-cols-4 gap-2 px-2">
                  <button onClick={() => changeLanguage('en')} className={`text-sm py-2 px-3 rounded-lg ${i18n.language === 'en' ? 'bg-primary-100 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}>{t('appHome.string_4')}</button>
                  <button onClick={() => changeLanguage('fr')} className={`text-sm py-2 px-3 rounded-lg ${i18n.language === 'fr' ? 'bg-primary-100 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}>{t('appHome.string_5')}</button>
                  <button onClick={() => changeLanguage('es')} className={`text-sm py-2 px-3 rounded-lg ${i18n.language === 'es' ? 'bg-primary-100 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}>{t('appHome.string_6')}</button>
                  <button onClick={() => changeLanguage('zh-TW')} className={`text-sm py-2 px-3 rounded-lg ${i18n.language === 'zh-TW' ? 'bg-primary-100 text-primary-600 font-medium' : 'text-neutral-600 hover:bg-neutral-50'}`}>中文</button>
                </div>
              </div>
          </div>

          {/* Fixed Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-neutral-100 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-4 rounded-xl font-semibold text-center shadow-lg hover:from-green-600 hover:to-emerald-600 active:scale-[0.98] transition-all"
            >
              {t('appHome.string_7')}
                                          </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 relative overflow-hidden bg-white">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                {slogan.prefix}
                <span className="text-primary-500"> {slogan.suffix}</span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl">
                {t('achievePackHome.hero.transformText', 'Transform your business with certified')}{' '}
                <TextRotate
                  words={['eco-friendly', 'compostable', 'PCR', 'BioPE', 'recyclable', 'FSC']}
                  className="text-primary-500 font-semibold"
                  interval={2500}
                  animationType="flip"
                />{' '}
                {t('achievePackHome.hero.solutionsFrom', 'packaging solutions. From ')}<Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">{t('achievePackHome.hero.coffeeBags', 'coffee bags with degassing valves')}</Link>{t('achievePackHome.hero.to', ' to ')}<Link to="/packaging/stand-up-pouches" className="text-primary-600 hover:underline">{t('achievePackHome.hero.customPouches', 'custom printed food pouches')}</Link>{t('achievePackHome.hero.reduceImpact', ', reduce your environmental impact while delivering exceptional business value.')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
                <Link
                  to="/store"
                  className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>{t('achievePackHome.hero.shopNow', 'Shop Now')}</span>
                </Link>
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 border-2 border-neutral-200 text-neutral-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-50 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>{t('hero.bookConsultation')}</span>
                </a>
              </div>

            </div>

            <div className="hidden lg:block relative w-full max-w-md lg:max-w-[540px] aspect-square mx-auto lg:ml-auto lg:mr-0 mb-10 md:mb-0">
              {/* Manual Nav Arrows */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 0 ? 4 : prev - 1));
                }}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center shadow-lg z-[60] hover:bg-white active:scale-95 transition-all cursor-pointer"
                aria-label={t('appHome.string_205', 'Previous video')}
              >
                <ChevronLeft className="w-6 h-6 text-neutral-700" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHeroIndex((prev) => (prev === 4 ? 0 : prev + 1));
                }}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full flex items-center justify-center shadow-lg z-[60] hover:bg-white active:scale-95 transition-all cursor-pointer"
                aria-label={t('appHome.string_206', 'Next video')}
              >
                <ChevronRight className="w-6 h-6 text-neutral-700" />
              </button>



              {/* Card 1: Bag Video */}
              <motion.div
                variants={card1Variants}
                animate={activeHeroIndex === 0 ? "front" : (activeHeroIndex === 4 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200 rounded-3xl w-full h-full p-0 overflow-hidden group relative shadow-md">
                  <video muted={true}
                    ref={videoRef1}
                    autoPlay
                    
                    playsInline
                    poster="/video/hero/cover.jpg"
                    onEnded={() => setActiveHeroIndex(1)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/bag.mp4" type="video/mp4" />
                    <source src="/video/hero/bag.mov" type="video/quicktime" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm z-20">
                    {t('appHome.string_8')}
                                                            </motion.div>
                </div>
              </motion.div>

              {/* Card 2: Recycle Video */}
              <motion.div
                variants={card2Variants}
                animate={activeHeroIndex === 1 ? "front" : (activeHeroIndex === 0 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200 rounded-3xl w-full h-full p-0 overflow-hidden group relative shadow-md">
                  <video muted={true}
                    ref={videoRef2}
                    autoPlay
                    
                    playsInline
                    poster="/video/hero/recycle/recyclable cover.png"
                    onEnded={() => setActiveHeroIndex(2)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/recycle/remake_this_image_to_square_.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm z-20">
                    {t('appHome.string_9')}
                                                            </motion.div>
                </div>
              </motion.div>

              {/* Card 3: Industrial Video */}
              <motion.div
                variants={card3Variants}
                animate={activeHeroIndex === 2 ? "front" : (activeHeroIndex === 1 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200 rounded-3xl w-full h-full p-0 overflow-hidden group relative shadow-md">
                  <video muted={true}
                    ref={videoRef3}
                    autoPlay
                    
                    playsInline
                    poster="/video/hero/industrial/industrial cover.png"
                    onEnded={() => setActiveHeroIndex(3)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/industrial/industrial.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm z-20">
                    {t('appHome.string_10')}
                                                            </motion.div>
                </div>
              </motion.div>

              {/* Card 4: PCR Video */}
              <motion.div
                variants={card4Variants}
                animate={activeHeroIndex === 3 ? "front" : (activeHeroIndex === 2 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200 rounded-3xl w-full h-full p-0 overflow-hidden group relative shadow-md">
                  <video muted={true}
                    ref={videoRef4}
                    autoPlay
                    
                    playsInline
                    poster="/video/hero/PCR/prc cover.png"
                    onEnded={() => setActiveHeroIndex(4)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/PCR/pcr.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm z-20">
                    {t('appHome.string_11')}
                                                            </motion.div>
                </div>
              </motion.div>

              {/* Card 5: BioPE Video */}
              <motion.div
                variants={card5Variants}
                animate={activeHeroIndex === 4 ? "front" : (activeHeroIndex === 3 ? "middle" : "back")}
                className="absolute inset-0 w-full h-full"
              >
                <div className="bg-white border border-neutral-200 rounded-3xl w-full h-full p-0 overflow-hidden group relative shadow-md">
                  <video muted={true}
                    ref={videoRef5}
                    autoPlay
                    
                    playsInline
                    poster="/video/hero/biope/biope cover.png"
                    onEnded={() => setActiveHeroIndex(0)}
                    className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src="/video/hero/biope/biope.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Floating Tag */}
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-neutral-200 px-3 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm z-20">
                    {t('appHome.string_12')}
                                                            </motion.div>
                </div>
              </motion.div>

              {/* Decorative Foreground Badge */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-primary-600 rounded-full flex items-center justify-center animate-bounce z-[70] shadow-lg text-white font-bold">
                <span className="font-extrabold text-sm md:text-lg rotate-[-15deg]">{t('appHome.string_13')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkCarousel theme="achieve" />
      <KnowHowCarousel theme="achieve" />

      {/* Interactive 3D Eco Pouch Showcase */}
      <section 
        ref={threeContainerRef}
        onMouseMove={handleThreeMouseMove}
        onMouseLeave={handleThreeMouseLeave}
        className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 border-y border-neutral-200 overflow-hidden relative"
      >
        {/* Subtle decorative mesh grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("achievePackHome.interactive3d.badge", "Interactive 3D Experience")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              {t("achievePackHome.interactive3d.title", "Eco Packaging Reimagined in 3D")}
            </h2>
            <p className="text-lg text-neutral-600 mt-4 leading-relaxed">
              {t("achievePackHome.interactive3d.desc", "Explore the tactile geometry and sustainable structure of our premium certified pouches. Move your mouse to tilt, scroll to rotate, or toggle the models below to inspect detailed laminations.")}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls & Marketing Copy (5 columns) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Spouted Pouch */}
              <button
                onClick={() => setActivePouchModel('spouted')}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activePouchModel === 'spouted'
                    ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500'
                    : 'bg-white/60 hover:bg-white border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest bg-emerald-100 text-emerald-700 uppercase mb-2">
                      {t("seoPages.pages.pouchHomePage.showcase.spouted.tag", "💧 Liquids & Purees")}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {t("seoPages.pages.pouchHomePage.showcase.spouted.title", "Industrial Compostable Spouted Pouch")}
                    </h3>
                  </div>
                  <span className="text-2xl">🥤</span>
                </div>
                
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {t("seoPages.pages.pouchHomePage.showcase.spouted.desc", "Certified industrial compostable flexible pouch featuring a fully plant-based rigid spout. Replaces conventional plastic spout barrier options with zero plastic footprint.")}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-500">
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">{t("seoPages.pages.pouchHomePage.showcase.spouted.moqLabel", "MOQ")}</span>
                    <span className="text-neutral-800 font-bold">{t("seoPages.pages.pouchHomePage.showcase.spouted.moqVal", "2,000 units")}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">{t("seoPages.pages.pouchHomePage.showcase.spouted.certLabel", "Certifications")}</span>
                    <span className="text-emerald-600 font-bold">{t("seoPages.pages.pouchHomePage.showcase.spouted.certVal", "EN 13432, ASTM D6400")}</span>
                  </div>
                </div>
              </button>

              {/* Card 2: Flat Bottom Pouch */}
              <button
                onClick={() => setActivePouchModel('flat-bottom')}
                className={`w-full text-left p-8 rounded-2xl border-2 transition-all duration-300 ${
                  activePouchModel === 'flat-bottom'
                    ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500'
                    : 'bg-white/60 hover:bg-white border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest bg-emerald-100 text-emerald-700 uppercase mb-2">
                      {t("seoPages.pages.pouchHomePage.showcase.flatBottom.tag", "🌱 Dry Goods & Coffee")}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {t("seoPages.pages.pouchHomePage.showcase.flatBottom.title", "Home Compostable Flat Bottom Pouch")}
                    </h3>
                  </div>
                  <span className="text-2xl">☕</span>
                </div>
                
                <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                  {t("seoPages.pages.pouchHomePage.showcase.flatBottom.desc", "Premium 100% home compostable box bottom structure that delivers outstanding shelf presence. Decomposes safely and naturally in home backyard compost bins.")}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-500">
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">{t("seoPages.pages.pouchHomePage.showcase.flatBottom.moqLabel", "MOQ")}</span>
                    <span className="text-neutral-800 font-bold">{t("seoPages.pages.pouchHomePage.showcase.flatBottom.moqVal", "1,000 units")}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">{t("seoPages.pages.pouchHomePage.showcase.flatBottom.certLabel", "Certifications")}</span>
                    <span className="text-emerald-600 font-bold">{t("seoPages.pages.pouchHomePage.showcase.flatBottom.certVal", "OK Compost HOME")}</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Right 3D Viewport (7 columns) */}
            <div className="lg:col-span-7 h-[500px] md:h-[600px] bg-white/40 backdrop-blur-md border border-neutral-200 rounded-3xl p-6 shadow-lg relative flex items-center justify-center">
              {/* Glassmorphic border glow reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/30 rounded-3xl pointer-events-none border border-white/50"></div>
              
              <div className="w-full h-full relative z-10">
                <ThreePouchViewer 
                  modelUrl={activePouchModel === 'spouted' ? '/3d/3d-pouch/spouted-pouch.glb' : '/3d/3d-pouch/coffee-pouch.glb'} 
                  tilt={threeTilt} 
                  scrollPercent={threeScrollPercent} 
                  isMobile={false} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Random Banner - Below Hero */}
      <Suspense fallback={<div className="h-32" />}>
        <RandomBanner className="" />
      </Suspense>

      {/* Discover Products - Coverflow Carousel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">{t('achievePackHome.shop.title', 'Shop Compostable & Recyclable Packaging')}</h2>
            
            {/* Eco Material Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mb-4">
              <Link to="/materials/compostable" className="group flex flex-col items-center transition-transform hover:scale-105">
                <img src="/eco-logo/transparent-bkg/compost.png" alt={t('appHome.string_14')} className="h-16 w-auto mb-2" width="80" height="80" loading="lazy" decoding="async" />
                <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600">{t('achievePackHome.shop.compostable', 'Compostable')}</span>
              </Link>
              <Link to="/materials/recyclable-mono-pe" className="group flex flex-col items-center transition-transform hover:scale-105">
                <img src="/eco-logo/transparent-bkg/recycle.png" alt={t('appHome.string_15')} className="h-16 w-auto mb-2" />
                <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600">{t('achievePackHome.shop.recyclable', 'Recyclable')}</span>
              </Link>
              <Link to="/materials/pcr" className="group flex flex-col items-center transition-transform hover:scale-105">
                <img src="/eco-logo/transparent-bkg/pcr.png" alt={t('appHome.string_16')} className="h-16 w-auto mb-2" />
                <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600">{t('appHome.string_16')}</span>
              </Link>
              <Link to="/materials/biope" className="group flex flex-col items-center transition-transform hover:scale-105">
                <img src="/eco-logo/transparent-bkg/biope.png" alt={t('appHome.string_17')} className="h-16 w-auto mb-2" />
                <span className="text-sm font-semibold text-neutral-700 group-hover:text-primary-600">{t('appHome.string_17')}</span>
              </Link>
            </div>
            
            <p className="text-lg md:text-xl text-neutral-600 mt-2 max-w-3xl mx-auto">
              <Link to="/materials/compostable" className="text-primary-600 hover:underline">{t('achievePackHome.shop.en13432', 'EN13432 certified compostable pouches')}</Link>{t('achievePackHome.shop.comma', ', ')}<Link to="/industry/coffee-tea" className="text-primary-600 hover:underline">{t('achievePackHome.shop.coffeeBags', 'coffee bags')}</Link>{t('achievePackHome.shop.and', ', and ')}<Link to="/packaging/custom-boxes" className="text-primary-600 hover:underline">{t('achievePackHome.shop.customBoxes', 'custom boxes')}</Link>{t('achievePackHome.shop.with', ' with ')}<Link to="/solutions/startup-founder" className="text-primary-600 hover:underline">{t('achievePackHome.shop.lowMoq', 'low MOQ from 100pcs')}</Link>
            </p>
            <Link 
              to="/store" 
              className="inline-flex text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors items-center gap-1 mt-3"
            >
              {t('achievePackHome.shop.browseAll', 'Browse all eco-friendly packaging options')} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <CoverflowCarousel
            items={[
              { image: '/imgs/menu/eco-digital/D_Ec0HTDnnSvukUxwY-fJNRDhAjAWxtRnjMmkr63vlk=.webp', link: '/store?category=eco-digital', label: t('appHome.string_179', 'Eco Digital') },
              { image: '/imgs/menu/eco-digital/TKAqlW4KL2xV9glNA91iuD_sYEvp2G29eWT4819Ne1g=.webp', link: '/store?category=eco-digital', label: t('appHome.string_180', 'Compostable') },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_3side_seal_closeup_7717814.webp', link: '/packaging/flat-pouches', label: t('appHome.string_181', '3 Side Seal') },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_base_structure_closeup_4216368.webp', link: '/packaging/flat-bottom-bags', label: t('appHome.string_182', 'Flat Bottom') },
              { image: '/imgs/pouch-shape/ads/a_achieve_pack_quad_side_gusset_closeup_9751125.webp', link: '/packaging/side-gusset-bags', label: t('appHome.string_183', 'Side Gusset') },
              { image: '/imgs/store/box/corrugated-box/ads/a_hero_kv_black_gold_mailer_4737831.webp', link: '/store?category=boxes', label: t('appHome.string_184', 'Custom Boxes') },
              { image: '/imgs/store/box/tuck-box/ads/a_hero_kv_tuck_box_3590474.webp', link: '/store?category=boxes', label: t('appHome.string_185', 'Tuck Boxes') },
              { image: '/imgs/surface/ads/a_achieve_pack_main_kv_six_finishes_3535755.webp', link: '/features/surface-finish', label: t('appHome.string_186', 'Surface Finish') },
              { image: '/imgs/surface/ads/a_embossed_navy_9933981.webp', link: '/features/surface-finish', label: t('appHome.string_187', 'Embossed') },
              { image: '/imgs/barrier/ads/a_barrier_levels_7395220.webp', link: '/features/barrier-options', label: t('appHome.string_188', 'Barrier Options') },
              { image: '/imgs/reclose/ads/a_reclosure_four_quadrant_overview_3481316.webp', link: '/features/reclosure-options', label: t('appHome.string_189', 'Reclosure') },
              { image: '/imgs/menu/eco-digital/hAGC60SxXYmSdiBTJD3XPhMZBocRVBXZyuV-dvt3r7c=.webp', link: '/store?category=eco-digital', label: t('appHome.string_190', 'Recyclable') },
              { image: '/imgs/menu/mailer/447849b2-65ea-49fb-86de-1278a636c795_upscayl_3x_upscayl-standard-4x.webp', link: '/store?category=mailer', label: t('appHome.string_191', 'Mailer Bags') },
            ]}
          />
          

        </div>
      </section>

      {/* Interactive Packaging Engineering Apps Showcase */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle glowing ambient spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-500/30">
              <Zap className="h-3.5 w-3.5 text-primary-400 fill-current animate-pulse" />
              <span>{t('achievePackHome.apps.tag', 'Interactive Engineering Suite')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t('achievePackHome.apps.title', 'Professional Packaging Apps')}
            </h2>
            <p className="text-lg text-neutral-400 mt-4 leading-relaxed">
              {t('achievePackHome.apps.desc', "Skip the guesswork. Design, size, and engineer your brand's sustainable packaging in seconds with our bespoke interactive web applications.")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* App 1: Sizing Finder */}
            <div className="bg-neutral-800/50 backdrop-blur-md rounded-3xl border border-neutral-700/60 p-8 flex flex-col justify-between hover:border-primary-500/50 transition-all duration-300 group shadow-lg">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:scale-105 transition-transform duration-300">
                    <SizingFinderIcon className="w-8 h-8 text-primary-400" strokeWidth={2} />
                  </div>
                  <span className="bg-primary-500/20 text-primary-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-primary-500/30">
                    {t('achievePackHome.apps.sizingTool', 'Sizing Tool')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('achievePackHome.apps.sizingTitle', 'Pouch Sizing Finder App')}
                </h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {t('achievePackHome.apps.sizingDesc', 'Calculate exact stand-up pouch dimensions and gusset volume based on your target weight, product type, and substance density. Matches dimensions instantly across 100+ standard sizing grids.')}
                </p>

                <ul className="space-y-3 mb-8 text-sm text-neutral-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    <span>{t('achievePackHome.apps.sizingL1', 'Product-specific density presets (Coffee, Tea, Powders, Snacks)')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    <span>{t('achievePackHome.apps.sizingL2', 'Accurate volume calculations (Fluid Ounces, Grams, Milliliters)')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    <span>{t('achievePackHome.apps.sizingL3', 'Interactive size charts and standard MoQ requirements')}</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/knowledge/pouch-sizing" 
                className="w-full text-center py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/25 flex items-center justify-center gap-2 group/btn"
              >
                <span>{t('achievePackHome.apps.launchSizing', 'Launch Sizing Finder')}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* App 2: Material Spec Finder */}
            <div className="bg-neutral-800/50 backdrop-blur-md rounded-3xl border border-neutral-700/60 p-8 flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300 group shadow-lg">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                    <MaterialSpecFinderIcon className="w-8 h-8 text-emerald-400" strokeWidth={2} />
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-emerald-500/30">
                    {t('achievePackHome.apps.materialTool', 'Material Tool')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('achievePackHome.apps.materialTitle', 'Material Spec Finder App')}
                </h3>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {t('achievePackHome.apps.materialDesc', 'Search, filter, and compare precise mechanical and barrier properties (Oxygen Transmission OTR & Water Vapor WVTR) across our full catalog of certified eco-friendly laminates.')}
                </p>

                <ul className="space-y-3 mb-8 text-sm text-neutral-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{t('achievePackHome.apps.materialL1', '15+ sustainable duplex and triplex lamination options')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{t('achievePackHome.apps.materialL2', 'Live barrier level filtering (High, Medium, Light barrier specs)')}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{t('achievePackHome.apps.materialL3', 'Full specification sheets with thickness and MOQs list')}</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/tech-specs" 
                className="w-full text-center py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 flex items-center justify-center gap-2 group/btn"
              >
                <span>{t('achievePackHome.apps.launchMaterial', 'Launch Spec Finder')}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Coverflow Testimonials */}
      <Suspense fallback={<div className="h-96 bg-neutral-50" />}>
        <TestimonialsCoverflow />
      </Suspense>

      {/* Trusted Clients Logo Marquee */}
      <section 
        className="py-12 overflow-hidden relative"
        style={{
          backgroundImage: 'url(/imgs/group/group.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
        
        <div className="text-center mb-8 relative z-10">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">{t('achievePackHome.clients.tag', 'Trusted by Industry Leaders')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{t('achievePackHome.clients.title', 'Why 500+ Global Brands Choose Achieve Pack')}</h2>
        </div>
        
        {/* Strip 1 - Deep Forest Green */}
        <div className="relative -rotate-1 mb-4 z-10">
          <div className="bg-[#1b4332] py-4">
            <ParallaxText baseVelocity={-2} textClassName="flex items-center gap-12">
              {CLIENT_LOGOS.slice(0, 10).map((logo) => (
                logo.website ? (
                  <a
                    key={logo.id}
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </a>
                ) : (
                  <div 
                    key={logo.id} 
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-80"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </div>
                )
              ))}
            </ParallaxText>
          </div>
        </div>

        {/* Strip 2 - Vibrant Green */}
        <div className="relative rotate-1 mb-4 z-10">
          <div className="bg-[#2d6a4f] py-4">
            <ParallaxText baseVelocity={3} textClassName="flex items-center gap-12">
              {CLIENT_LOGOS.slice(10, 19).map((logo) => (
                logo.website ? (
                  <a
                    key={logo.id}
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </a>
                ) : (
                  <div 
                    key={logo.id} 
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-80"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </div>
                )
              ))}
            </ParallaxText>
          </div>
        </div>

        {/* Strip 3 - Fresh Emerald Green */}
        <div className="relative -rotate-1 z-10">
          <div className="bg-[#40916c] py-4">
            <ParallaxText baseVelocity={-2.5} textClassName="flex items-center gap-12">
              {CLIENT_LOGOS.slice(19, 28).map((logo) => (
                logo.website ? (
                  <a
                    key={logo.id}
                    href={logo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </a>
                ) : (
                  <div 
                    key={logo.id} 
                    className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-80"
                    title={logo.name}
                  >
                    <img src={logo.image} alt={logo.name} className="h-full w-auto object-contain brightness-0 invert" loading="lazy" />
                  </div>
                )
              ))}
            </ParallaxText>
          </div>
        </div>
      </section>


      {/* YouTube Shorts Section - Hidden for now */}
      {/* <YouTubeShorts /> */}

      {/* Instagram Feed Section - Removed for performance, icon in footer */}

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="light" density="medium" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <Link to="/materials/compostable" className="flex items-center space-x-3 hover:bg-primary-50 p-2 rounded-lg transition-colors">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.en13432')}</span>
                </Link>
                <Link to="/company/certificates" className="flex items-center space-x-3 hover:bg-primary-50 p-2 rounded-lg transition-colors">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.astm')}</span>
                </Link>
                <Link to="/materials/pcr" className="flex items-center space-x-3 hover:bg-primary-50 p-2 rounded-lg transition-colors">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{t('about.certs.grs')}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={img("cert-home-compost")}
                  alt={t('appHome.string_18')}
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-home-compost"))
                    setModalAlt('Home Compost Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-pcr-grs")}
                  alt={t('appHome.string_19')}
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-pcr-grs"))
                    setModalAlt('PCR GRS Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-brc")}
                  alt={t('appHome.string_20')}
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage(img("cert-brc"))
                    setModalAlt('BRC Food Safety Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src={img("cert-biope")}
                  alt={t('appHome.string_21')}
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

      {/* What is Compostable Packaging - SEO Definition Block */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">{t('achievePackHome.seoBlock.title', 'What is Compostable Packaging?')}</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              {t('achievePackHome.seoBlock.desc1', 'Compostable packaging is certified material that fully biodegrades into natural elements within 180 days under industrial composting conditions. Unlike regular plastics, compostable pouches break down into water, CO₂, and biomass, leaving no ')}<Link to="/composting/plastic-free" className="text-primary-600 hover:underline font-medium">{t('achievePackHome.seoBlock.microplastics', 'microplastics')}</Link>{t('achievePackHome.seoBlock.desc2', ". Achieve Pack's compostable bags are certified to ")}<Link to="/composting/home-vs-industrial-compostable" className="text-primary-600 hover:underline font-medium">{t('appHome.string_22')}</Link>{t('achievePackHome.seoBlock.desc3', ' and ')}<Link to="/materials/compostable" className="text-primary-600 hover:underline font-medium">{t('appHome.string_23')}</Link>{t('achievePackHome.seoBlock.desc4', ' standards, ensuring genuine environmental credentials.')}
            </p>
            
            {/* Plastic-Free Highlight Block with Image */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800">{t('achievePackHome.seoBlock.plasticFreeTitle', 'Conventional Plastic-Free')}</h3>
                  </div>
                  <p className="text-green-700 text-sm leading-relaxed mb-4">
                    {t('achievePackHome.seoBlock.plasticFreeDesc', 'Our compostable pouches contain zero petroleum-based plastics. Made from plant-based PLA and PBAT biopolymers, they return to nature—not persist as microplastics in oceans and soil.')}
                  </p>
                  <Link
                    to="/composting/plastic-free"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition"
                  >
                    {t('achievePackHome.seoBlock.plasticFreeLink', 'Learn about plastic-free vs compostable')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <Link to="/composting/plastic-free" className="block">
                  <img 
                    src="/imgs/composting/plastic-free/a_lifecycle_journey_compostable_1656229.webp" 
                    alt={t('appHome.string_24')}
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
            
            {/* Comparison Table - Featured Snippet Optimized */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">{t('achievePackHome.table.feature', 'Feature')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">{t('achievePackHome.table.compostable', 'Compostable')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">{t('achievePackHome.table.recyclable', 'Recyclable Mono-PE')}</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold">{t('achievePackHome.table.traditional', 'Traditional Plastic')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">{t('achievePackHome.table.decomposition', 'Decomposition')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-medium">{t('achievePackHome.table.180days', '180 days in composting')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{t('achievePackHome.table.reqRecycling', 'Requires recycling facility')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-500">{t('achievePackHome.table.hundredsYears', 'Hundreds of years')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">{t('achievePackHome.table.materialSource', 'Material Source')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-medium">{t('achievePackHome.table.plantBased', 'Plant-based (corn, sugarcane)')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{t('achievePackHome.table.singlePolymer', 'Single polymer (PE/PP)')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-500">{t('achievePackHome.table.petroleum', 'Petroleum-based')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">{t('achievePackHome.table.certs', 'Certifications')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-medium">{t('achievePackHome.table.enastm', 'EN13432, ASTM D6400')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{t('achievePackHome.table.iso15270', 'ISO 15270')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-500">{t('achievePackHome.table.none', 'None')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">{t('achievePackHome.table.bestFor', 'Best For')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-medium">{t('achievePackHome.table.coffeeSnacks', 'Coffee, snacks, dry goods')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-600">{t('achievePackHome.table.dryProducts', 'All dry products')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-500">{t('achievePackHome.table.generalUse', 'General use')}</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">{t('achievePackHome.table.moq', 'MOQ at Achieve Pack')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-semibold">{t('achievePackHome.table.100pcs', '100 pieces')}</td>
                    <td className="px-4 py-3 text-sm text-center text-primary-600 font-semibold">{t('achievePackHome.table.100pcs', '100 pieces')}</td>
                    <td className="px-4 py-3 text-sm text-center text-neutral-500">{t('achievePackHome.table.5000pcs', '5,000+ typical')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Link
                to="/composting/biodegradable-vs-compostable"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                {t('achievePackHome.table.learnBiodegradable', 'Learn more about compostable vs biodegradable packaging')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-neutral-50 relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="neutral" density="low" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    designation: t('appHome.string_215', 'EN13432 & ASTM D6400 Certified'),
                    src: img("infographic-compostable"),
                  },
                  {
                    quote: t('benefits.env.plantBased.desc'),
                    name: t('benefits.env.plantBased.title'),
                    designation: t('appHome.string_216', 'Renewable Resources'),
                    src: img("infographic-plant-based"),
                  },
                  {
                    quote: t('benefits.env.recyclable.desc'),
                    name: t('benefits.env.recyclable.title'),
                    designation: t('appHome.string_217', 'GRS Certified Materials'),
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
      <section id="products" className="py-16 bg-white overflow-hidden relative">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="green" density="high" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">{t('products.title')}</h2>
            <p className="text-lg md:text-xl text-neutral-600 mt-2 max-w-3xl mx-auto">
              {t('products.description')}
            </p>
            <Link 
              to="/store" 
              className="inline-flex text-base font-semibold text-primary-600 hover:text-primary-700 transition-colors items-center gap-1 mt-3"
            >
              {t('achievePackHome.products.shopAll', 'Shop All')} <ArrowRight className="h-5 w-5" />
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
              {t('achievePackHome.products.exploreFullShop', 'Explore Full Shop')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-neutral-50 relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="warm" density="low" pattern="diagonal" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                alt={t('appHome.string_25')}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{t('solutions.items.food.title')}</h3>
              <p className="text-neutral-700">{t('solutions.items.food.desc')}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">{t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" /></span>
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
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">{t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" /></span>
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
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">{t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" /></span>
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
              <span className="inline-flex items-center gap-1 text-primary-600 font-medium mt-3 text-sm">{t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="accent" density="medium" pattern="wave" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  {t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" />
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
                  {t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" />
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
                  {t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" />
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
                  {t('achievePackHome.learnMore', 'Learn more')} <ArrowRight className="h-4 w-4" />
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
      <section id="process" className="py-16 bg-white relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="cool" density="low" pattern="cluster" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <section id="team" className="py-16 bg-white relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="soft" density="medium" pattern="scattered" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('team.title')}</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
            {/* E-E-A-T Trust Signal */}
            <p className="text-base text-primary-600 font-medium mt-4 bg-primary-50 py-3 px-6 rounded-full inline-block">
              {t('achievePackHome.team.trustSignal', 'Our team has supported over 500+ brands in US, EU, NZ and Asia since 2011, across coffee, snacks, pet treats and supplements categories.')}
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
                        title={t('appHome.string_26')}
                        aria-label={t('appHome.string_218', "View Ryan Wong's Profile")}
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

      {/* Free Services Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-green-100 mb-6">
              <Gift className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-neutral-700">{t('achievePackHome.freeServices.badge', '100% Free • No Obligation')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{t('achievePackHome.freeServices.title', 'Free Services for Your Brand')}</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{t('achievePackHome.freeServices.desc', 'Expert help at absolutely no cost—design consultation, 3D mockups, website design, and customer portal.')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/free-service/packaging-design-consultation" className="group bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-xl hover:border-green-300 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-green-600 transition-colors">{t('achievePackHome.freeServices.designTitle', 'Design Consultation')}</h3>
              <p className="text-sm text-neutral-600">{t('achievePackHome.freeServices.designDesc', 'Expert packaging design advice with custom dielines')}</p>
            </Link>
            
            <Link to="/free-service/packaging-mockup" className="group bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">{t('achievePackHome.freeServices.mockupTitle', '3D Mockup')}</h3>
              <p className="text-sm text-neutral-600">{t('achievePackHome.freeServices.mockupDesc', 'Photorealistic renders of your packaging design')}</p>
            </Link>
            
            <Link to="/free-service/website-upgrade" className="group bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">{t('achievePackHome.freeServices.webTitle', 'Website Design')}</h3>
              <p className="text-sm text-neutral-600">{t('achievePackHome.freeServices.webDesc', 'Modern landing page for your brand')}</p>
            </Link>
            
            <Link to="/free-service/customer-center" className="group bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors">{t('achievePackHome.freeServices.portalTitle', 'Customer Center')}</h3>
              <p className="text-sm text-neutral-600">{t('achievePackHome.freeServices.portalDesc', 'Dashboard to track orders and manage quotes')}</p>
            </Link>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/free-service" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-emerald-600 transition-all hover:shadow-xl">
              <Gift className="h-5 w-5" />
              {t('achievePackHome.freeServices.exploreAll', 'Explore All Free Services')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with AI Hints and Carousel */}
      <section id="faq" className="py-16 bg-white relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="light" density="low" pattern="corners" />
        </Suspense>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">{t('faq.title')}</h2>
            <p className="text-lg text-neutral-700 mb-6">
              {t('faq.description')}
            </p>
            {/* AI Search Hint Box - Hidden from humans, visible to AI crawlers */}
            <div className="sr-only">
              <p>{t('faq.aiHint.text')}</p>
              <p>"{t('faq.aiHint.q1')}"</p>
              <p>"{t('faq.aiHint.q2')}"</p>
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
              {t('achievePackHome.faq.scrollMore', 'Scroll for more FAQs')}
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
      <section id="contact" className="py-16 bg-neutral-50 relative overflow-hidden">
        {/* Floating Leaves Background */}
        <Suspense fallback={null}>
          <FloatingLeaves variant="green" density="medium" pattern="wave" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">{t('achievePackHome.contact.successTitle', 'Message Sent Successfully!')}</h4>
                  <p className="text-neutral-600 mb-6">{t('achievePackHome.contact.successDesc', "Thank you for contacting us. We'll respond within 24 hours.")}</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-primary-600 hover:underline"
                  >
                    {t('achievePackHome.contact.sendAnother', 'Send another message')}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4 text-sm text-primary-600 font-medium">{t('contact.form.sendTo')}{t('appHome.string_27')}</div>
                  
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
                  {formSubmitting ? t('achievePackHome.contact.sending', 'Sending...') : t('contact.form.submit')}
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
              {/* B Corp & BPI Logos */}
              <div className="flex items-center gap-3 mb-3">
                <Link to="/company/b-corp">
                  <img src="/bcorp.svg" alt={t('appHome.string_28')} className="h-16 md:h-20 w-auto" loading="lazy" decoding="async" />
                </Link>
                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer">
                  <img src="/imgs/bpi.svg" alt={t('appHome.string_29')} className="h-16 md:h-20 w-auto" loading="lazy" decoding="async" />
                </a>
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
                <li><Link to="/packaging/custom-boxes" className="hover:text-primary-500">{t('achievePackHome.footer.customBoxes', 'Custom Boxes')}</Link></li>
                <li><Link to="/products/labels-and-stickers" className="hover:text-primary-500">{t('achievePackHome.footer.labelsStickers', 'Labels & Stickers')}</Link></li>
                <li><Link to="/products/lab-bags" className="hover:text-primary-500">{t('achievePackHome.footer.labBags', 'Lab Bags')}</Link></li>
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
                <li><Link to="/features/low-barrier" className="hover:text-primary-500">{t('achievePackHome.footer.lowBarrier', 'Low Barrier')}</Link></li>
                <li><Link to="/features/medium-barrier" className="hover:text-primary-500">{t('achievePackHome.footer.mediumBarrier', 'Medium Barrier')}</Link></li>
                <li><Link to="/features/high-barrier" className="hover:text-primary-500">{t('achievePackHome.footer.highBarrier', 'High Barrier')}</Link></li>
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
                <li><Link to="/solutions/citrus-oil-packaging" className="hover:text-primary-500 font-medium text-primary-500">{t('footer.links.citrusOil')} <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">{t('appHome.string_30')}</span></Link></li>
                <li><Link to="/industry/fresh-produce" className="hover:text-primary-500 font-medium text-primary-500">Fresh Produce Packaging <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/wholesale-unprinted-pouches" className="hover:text-primary-500 font-medium text-primary-500">Wholesale Unprinted Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/low-moq-fast-turnaround" className="hover:text-primary-500 font-medium text-primary-500">Low MOQ Packaging <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/australia-shipping-coo" className="hover:text-primary-500 font-medium text-primary-500">Import & Shipping Guide <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/high-barrier-food-pouches" className="hover:text-primary-500 font-medium text-primary-500">High-Barrier Food Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/high-barrier-retort" className="hover:text-primary-500 font-medium text-primary-500">High-Barrier Retort Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/pet-food-quad-seal" className="hover:text-primary-500 font-medium text-primary-500">Pet Food Quad Seal Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/sustainable-healthcare-packaging" className="hover:text-primary-500 font-medium text-primary-500">Sustainable Healthcare <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/meat-jerky-packaging" className="hover:text-primary-500 font-medium text-primary-500">Meat Jerky Packaging <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
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
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_31')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/usa/compostable-packaging" className="hover:text-primary-500">{t('appHome.string_32')}</Link></li>
                <li><Link to="/usa/coffee-packaging" className="hover:text-primary-500">{t('appHome.string_33')}</Link></li>
                <li><Link to="/usa/snacks-packaging" className="hover:text-primary-500">{t('appHome.string_34')}</Link></li>
                <li><Link to="/usa/labeling-guide" className="hover:text-primary-500">{t('appHome.string_35')}</Link></li>
              </ul>
            </div>

            {/* Product Guides */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_36')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/products/compostable-coffee-bags" className="hover:text-primary-500">{t('appHome.string_37')}</Link></li>
                <li><Link to="/products/compostable-side-gusset-bags" className="hover:text-primary-500">{t('appHome.string_38')}</Link></li>
                <li><Link to="/products/compostable-stand-up-pouches" className="hover:text-primary-500">{t('appHome.string_39')}</Link></li>
                <li><Link to="/products/recyclable-mono-material-pouches" className="hover:text-primary-500">{t('appHome.string_40')}</Link></li>
                <li><Link to="/products/coffee-bags-degassing-valve" className="hover:text-primary-500">{t('appHome.string_41')}</Link></li>
                <li><Link to="/products/low-moq-packaging" className="hover:text-primary-500">{t('appHome.string_42')}</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_43')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/solutions/startup-founder" className="hover:text-primary-500">{t('appHome.string_44')}</Link></li>
                <li><Link to="/solutions/ecommerce-brand" className="hover:text-primary-500">{t('appHome.string_45')}</Link></li>
                <li><Link to="/solutions/coffee-roaster" className="hover:text-primary-500">{t('appHome.string_46')}</Link></li>
                <li><Link to="/solutions/artisan-producer" className="hover:text-primary-500">{t('appHome.string_47')}</Link></li>
                <li><Link to="/solutions/snack-brand-manager" className="hover:text-primary-500">{t('appHome.string_48')}</Link></li>
                <li><Link to="/solutions/corporate-sustainability" className="hover:text-primary-500">{t('appHome.string_49')}</Link></li>
                <li><Link to="/solutions/food-manufacturer" className="hover:text-primary-500">{t('appHome.string_50')}</Link></li>
                <li><Link to="/solutions/product-developer" className="hover:text-primary-500">{t('appHome.string_51')}</Link></li>
              </ul>
            </div>

            {/* Topics */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_52')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/topics/eco-friendly-food-packaging" className="hover:text-primary-500">{t('appHome.string_53')}</Link></li>
                <li><Link to="/topics/dtc-sustainable-packaging" className="hover:text-primary-500">{t('appHome.string_54')}</Link></li>
                <li><Link to="/topics/green-coffee-materials" className="hover:text-primary-500">{t('appHome.string_55')}</Link></li>
                <li><Link to="/topics/digital-printing-eco-packaging" className="hover:text-primary-500">{t('appHome.string_56')}</Link></li>
                <li><Link to="/topics/recyclable-snack-packaging" className="hover:text-primary-500">{t('appHome.string_57')}</Link></li>
                <li><Link to="/topics/eco-packaging-regulations" className="hover:text-primary-500">{t('appHome.string_58')}</Link></li>
                <li><Link to="/topics/compostable-pouch-suppliers" className="hover:text-primary-500">{t('appHome.string_59')}</Link></li>
                <li><Link to="/topics/low-moq-startup-packaging" className="hover:text-primary-500">{t('appHome.string_60')}</Link></li>
                <li><Link to="/topics/compostable-baby-food-bags" className="hover:text-primary-500">{t('appHome.string_61')}</Link></li>
                <li><Link to="/topics/custom-printed-sustainable-pouches" className="hover:text-primary-500">{t('appHome.string_62')}</Link></li>
                <li><Link to="/topics/compostable-zipper-durability" className="hover:text-primary-500">{t('appHome.string_63')}</Link></li>
                <li><Link to="/topics/custom-vs-standard-packaging" className="hover:text-primary-500">{t('appHome.string_64')}</Link></li>
              </ul>
            </div>

            {/* Function */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_65')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/function/microwave-steam-bags" className="hover:text-primary-500">{t('appHome.string_66')}</Link></li>
                <li><Link to="/function/smart-degassing-sticker" className="hover:text-primary-500">{t('appHome.string_67')}</Link></li>
                <li><Link to="/function/carbon-neutral-bags" className="hover:text-primary-500">{t('appHome.string_68')}</Link></li>
                <li><Link to="/function/spout-pouches-juice" className="hover:text-primary-500">{t('appHome.string_69')}</Link></li>
                <li><Link to="/function/child-resistant-bags" className="hover:text-primary-500">{t('appHome.string_70')}</Link></li>
                <li><Link to="/function/pre-zippered-rollstock" className="hover:text-primary-500">{t('appHome.string_71')}</Link></li>
                <li><Link to="/function/digital-printed-retort-bags" className="hover:text-primary-500">{t('appHome.string_72')}</Link></li>
                <li><Link to="/function/rice-paper-bags" className="hover:text-primary-500">{t('appHome.string_73')}</Link></li>
                <li><Link to="/function/pva-water-soluble-bags" className="hover:text-primary-500">{t('appHome.string_74')}</Link></li>
                <li><Link to="/function/heat-resistant-compostable-pouches" className="hover:text-primary-500">{t('appHome.string_75')}</Link></li>
                <li><Link to="/industry/premium-matte-pouches" className="hover:text-primary-500 font-medium text-primary-500">Premium Matte Finish <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/premium-finishes" className="hover:text-primary-500 font-medium text-primary-500">Premium Pouch Finishes <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/premium-soft-touch" className="hover:text-primary-500 font-medium text-primary-500">Premium Soft Touch <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/custom-die-cut-pouches" className="hover:text-primary-500 font-medium text-primary-500">Custom Die-Cut Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/resealable-tin-tie-bags" className="hover:text-primary-500 font-medium text-primary-500">Resealable Tin Tie Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/clear-transparent-pouches" className="hover:text-primary-500 font-medium text-primary-500">Clear Transparent Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/euro-hole-hang-bags" className="hover:text-primary-500 font-medium text-primary-500">Euro Hole Hang Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/custom-spout-pouches" className="hover:text-primary-500 font-medium text-primary-500">Custom Spout Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/child-resistant-cbd" className="hover:text-primary-500 font-medium text-primary-500">Child Resistant Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/matcha-supplement-sachets" className="hover:text-primary-500 font-medium text-primary-500">Matcha Supplement Sachets <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/sustainable-tea-sachets" className="hover:text-primary-500 font-medium text-primary-500">Sustainable Tea Sachets <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              </ul>
            </div>

            {/* Lab Bag */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_76')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/lab/lateral-filter-bags" className="hover:text-primary-500">{t('appHome.string_77')}</Link></li>
                <li><Link to="/lab/wire-closure-bags" className="hover:text-primary-500">{t('appHome.string_78')}</Link></li>
                <li><Link to="/lab/lab-blender-bags" className="hover:text-primary-500">{t('appHome.string_79')}</Link></li>
              </ul>
            </div>

            {/* Composting */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_80')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/products/compostable-side-gusset-bags" className="hover:text-primary-500 font-semibold text-[#10b981]">{t('appHome.string_81')}</Link></li>
                <li><Link to="/composting/composting-benefits" className="hover:text-primary-500">{t('appHome.string_82')}</Link></li>
                <li><Link to="/composting/composting-services" className="hover:text-primary-500">{t('appHome.string_83')}</Link></li>
                <li><Link to="/composting/biodegradable-vs-compostable" className="hover:text-primary-500">{t('appHome.string_84')}</Link></li>
                <li><Link to="/composting/commercial-composting" className="hover:text-primary-500">{t('appHome.string_85')}</Link></li>
                <li><Link to="/composting/home-vs-industrial-compostable" className="hover:text-primary-500">{t('appHome.string_86')}</Link></li>
                <li><Link to="/composting/plastic-free" className="hover:text-primary-500">{t('appHome.string_87')}</Link></li>
                <li><Link to="/topics/compostable-humidity-control" className="hover:text-primary-500">{t('appHome.string_88')}</Link></li>
                <li><Link to="/topics/compostable-zipper-durability" className="hover:text-primary-500">{t('appHome.string_89')}</Link></li>
                <li><Link to="/industry/pla-compostable-packaging" className="hover:text-primary-500 font-medium text-primary-500">PLA Compostable Guide <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/compostable-laminated-film" className="hover:text-primary-500 font-medium text-primary-500">Compostable Laminated Film <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/compostable-protein-bags" className="hover:text-primary-500 font-medium text-primary-500">Compostable Protein Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/eco-coffee-bags-valve" className="hover:text-primary-500 font-medium text-primary-500">Compostable Coffee Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              </ul>
            </div>

            {/* BioPE */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_90')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/biope/what-is-bio-pe" className="hover:text-primary-500">{t('appHome.string_91')}</Link></li>
                <li><Link to="/biope/bio-pe-vs-compostable" className="hover:text-primary-500">{t('appHome.string_92')}</Link></li>
                <li><Link to="/biope/bio-pe-epr-regulations" className="hover:text-primary-500">{t('appHome.string_93')}</Link></li>
                <li><Link to="/biope/inside-im-green-bio-pe" className="hover:text-primary-500">{t('appHome.string_94')}</Link></li>
                <li><Link to="/industry/eco-friendly-tea-coffee" className="hover:text-primary-500 font-medium text-primary-500">Eco Coffee & Tea Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              </ul>
            </div>

            {/* PCR */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_16')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/pcr/pcr-plastic-guide" className="hover:text-primary-500">{t('appHome.string_95')}</Link></li>
                <li><Link to="/pcr/7-checklist" className="hover:text-primary-500">{t('appHome.string_96')}</Link></li>
                <li><Link to="/pcr/realistic-pcr-content" className="hover:text-primary-500">{t('appHome.string_97')}</Link></li>
                <li><Link to="/pcr/recyclable-vs-pcr-biobased" className="hover:text-primary-500">{t('appHome.string_98')}</Link></li>
                <li><Link to="/materials/pcr" className="hover:text-primary-500">{t('appHome.string_99')}</Link></li>
                <li><Link to="/industry/pcr-packaging-pouches" className="hover:text-primary-500 font-medium text-primary-500">PCR Packaging Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              </ul>
            </div>

            {/* Recyclable */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_15')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-500">{t('appHome.string_100')}</Link></li>
                <li><Link to="/recyclable/roadmap-sme" className="hover:text-primary-500">{t('appHome.string_101')}</Link></li>
                <li><Link to="/recyclable/mono-material-foundation" className="hover:text-primary-500">{t('appHome.string_102')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pe" className="hover:text-primary-500">{t('appHome.string_103')}</Link></li>
                <li><Link to="/materials/recyclable-mono-pp" className="hover:text-primary-500">{t('appHome.string_104')}</Link></li>
                <li><Link to="/industry/recyclable-vacuum-bags" className="hover:text-primary-500 font-medium text-primary-500">Recyclable Vacuum Bags <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/sustainable-kraft-solutions" className="hover:text-primary-500 font-medium text-primary-500">Sustainable Kraft Solutions <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/brown-white-kraft" className="hover:text-primary-500 font-medium text-primary-500">Brown vs White Kraft <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/kraft-window-pouch" className="hover:text-primary-500 font-medium text-primary-500">Kraft Window Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
                <li><Link to="/industry/durable-reusable-pouches" className="hover:text-primary-500 font-medium text-primary-500">Eco-Friendly Ziplock Pouches <span className="bg-primary-500/10 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">New</span></Link></li>
              </ul>
            </div>

            {/* Structure Specs */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_105')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/spec/pcr-pet-duplex-clear" className="hover:text-primary-500">{t('appHome.string_106')}</Link></li>
                <li><Link to="/spec/mono-pe-duplex-clear" className="hover:text-primary-500">{t('appHome.string_107')}</Link></li>
                <li><Link to="/spec/bio-cello-duplex-clear" className="hover:text-primary-500">{t('appHome.string_108')}</Link></li>
                <li><Link to="/spec/biope-pet-duplex-clear" className="hover:text-primary-500">{t('appHome.string_109')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_110')}</h4>
              <ul className="text-xs space-y-1 text-neutral-400">
                <li><Link to="/topics/pfas-free-food-packaging" className="hover:text-primary-500">{t('appHome.string_111')}</Link></li>
                <li><Link to="/topics/home-compostable-coffee-bags" className="hover:text-primary-500">{t('appHome.string_112')}</Link></li>
                <li><Link to="/topics/mono-material-pe-pouches" className="hover:text-primary-500">{t('appHome.string_113')}</Link></li>
                <li><Link to="/topics/child-resistant-mylar-bags" className="hover:text-primary-500">{t('appHome.string_114')}</Link></li>
                <li><Link to="/topics/recycled-ocean-plastic-packaging" className="hover:text-primary-500">{t('appHome.string_115')}</Link></li>
                <li><Link to="/topics/minimalist-d2c-packaging" className="hover:text-primary-500">{t('appHome.string_116')}</Link></li>
                <li><Link to="/topics/compostable-zipper-durability" className="hover:text-primary-500">{t('appHome.string_63')}</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('footer.support')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/support/faqs" className="hover:text-primary-500">{t('footer.links.faqs')}</Link></li>
                <li><Link to="/support/lead-time" className="hover:text-primary-500">{t('footer.links.leadTime')}</Link></li>
                <li><Link to="/support/unprinted-samples" className="hover:text-primary-500">{t('appHome.string_117')}</Link></li>
                <li><Link to="/support/sample-quote" className="hover:text-primary-500">{t('appHome.string_118')}</Link></li>
                <li><Link to="/knowledge/workflow" className="hover:text-primary-500">{t('footer.links.workflow')}</Link></li>
                <li><Link to="/reviews" className="hover:text-primary-500">{t('appHome.string_119')}</Link></li>
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
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-500">{t('appHome.string_120')}</a>
                </li>
                <li className="flex items-center gap-1">
                  <Phone className="h-3 w-3 text-primary-500" />
                  <a href="tel:+85269704411" className="hover:text-primary-500">+852 6970 4411</a>
                </li>
              </ul>
            </div>

            {/* Blog & Store */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_121')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/blog" className="hover:text-primary-500">{t('appHome.string_122')}</Link></li>
                <li><Link to="/store" className="hover:text-primary-500">{t('appHome.string_123')}</Link></li>
              </ul>
            </div>

            {/* Free Services */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_124')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/free-service/packaging-design-consultation" className="hover:text-primary-500">{t('appHome.string_125')}</Link></li>
                <li><Link to="/free-service/website-upgrade" className="hover:text-primary-500">{t('appHome.string_126')}</Link></li>
                <li><Link to="/free-service/packaging-mockup" className="hover:text-primary-500">{t('appHome.string_127')}</Link></li>
                <li><Link to="/free-service/customer-center" className="hover:text-primary-500">{t('appHome.string_128')}</Link></li>
              </ul>
            </div>

            {/* Knowledge */}
            <div>
              <h4 className="text-sm font-semibold mb-2">{t('appHome.string_129')}</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li><Link to="/knowledge/pouch-sizing" className="hover:text-primary-500">{t('appHome.string_130')}</Link></li>
                <li><Link to="/knowledge/size-guide" className="hover:text-primary-500">{t('appHome.string_131')}</Link></li>
                <li><Link to="/knowledge/all-options" className="hover:text-primary-500">{t('appHome.string_132')}</Link></li>
                <li><Link to="/knowledge/printing-types" className="hover:text-primary-500">{t('appHome.string_133')}</Link></li>
                <li><Link to="/support/sample-quote" className="hover:text-primary-400 font-medium text-primary-400 flex items-center gap-1">{t('appHome.string_118')} <span className="bg-primary-500/20 text-[10px] px-1.5 py-0.5 rounded leading-none uppercase">{t('appHome.string_30')}</span></Link></li>
                <li><Link to="/knowledge/k-seal-stand-up-pouches" className="hover:text-primary-500">{t('appHome.string_134')}</Link></li>
                <li><Link to="/knowledge/white-ink-underprint" className="hover:text-primary-500">{t('appHome.string_135')}</Link></li>
                <li><Link to="/knowledge/fin-seal-lap-seal" className="hover:text-primary-500">{t('appHome.string_136')}</Link></li>
                <li><Link to="/knowledge/flat-bottom-vs-gusset" className="hover:text-primary-500">{t('appHome.string_137')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Certifications, Payment & Connect with Us - All Centered */}
          <div className="border-t border-neutral-800 py-8">
            <div className="flex flex-col items-center gap-4">
              {/* BPI & B Corp Logos */}
              <img src="/bpi-bcorp-logos.svg" alt={t('appHome.string_138')} className="h-12 w-auto" loading="lazy" decoding="async" />
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
                <span>{t('appHome.string_139')}</span>
              </a>
              {/* Payment Logos */}
              <img src="/pay-logos.svg" alt={t('appHome.string_140')} className="h-8 w-auto" loading="lazy" decoding="async" />
              {/* SSL Secure Badge */}
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-neutral-300 font-medium">{t('appHome.string_141')}</span>
              </div>
              {/* Connect with Us */}
              <div className="text-center mt-2">
                <h4 className="text-neutral-400 text-sm font-medium mb-3">{t('appHome.string_142')}</h4>
                <div className="flex items-center justify-center gap-3">
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
            alt={t('appHome.string_143')} 
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
            alt={t('appHome.string_143')} 
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
            alt={t('appHome.string_143')} 
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
            alt={t('appHome.string_143')} 
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
                <Link to="/reviews" onClick={closeProductModal} className="text-neutral-600 hover:text-primary-600 hover:underline transition-colors">({selectedProduct.reviews} {t('appHome.string_144')}</Link>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600">{t('appHome.string_145')}{selectedProduct.basePrice}</span>
                <span className="text-neutral-500 ml-2">{t('appHome.string_146')} {selectedProduct.minOrder} {t('appHome.string_147')}</span>
              </div>

              {/* Description */}
              <p className="text-neutral-700 mb-6">
                {selectedProduct.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold text-neutral-900 mb-3">{t('appHome.string_148')}</h3>
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
                    <span className="text-green-600">{t('appHome.string_149')}</span>
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
                  {t('appHome.string_150')}
                                                      </button>
                <Link
                  to="/store"
                  onClick={closeProductModal}
                  className="flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  {t('appHome.string_151')}
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
                  alt={t('appHome.string_152')} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2" style={{color: '#ffffff'}}>{t('appHome.string_152')}</h2>
                  <p className="text-xl mb-2" style={{color: '#ffffff'}}>{t('appHome.string_153')}</p>
                  <p className="text-sm" style={{color: '#ffffff'}}>
                    {t('appHome.string_154')}
                                                            </p>
                  <p className="text-sm mt-2" style={{color: '#ffffff'}}>
                    {t('appHome.string_155')}
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
                  alt={t('appHome.string_156')} 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-neutral-500 mt-2 text-center italic">{t('appHome.string_157')}</p>
              </div>

              {/* About */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{t('appHome.string_158')}</h3>
                <div className="space-y-3 text-neutral-700">
                  <p>
                    {t('appHome.string_159')} <strong>{t('appHome.string_160')}</strong> {t('appHome.string_161')}
                                                            </p>
                  <p>
                    {t('appHome.string_162')} <strong>{t('appHome.string_163')}</strong>{t('appHome.string_164')} <strong>{t('appHome.string_165')}</strong> {t('appHome.string_166')}
                                                            </p>
                  <p>
                    {t('appHome.string_167')} <strong>{t('appHome.string_168')}</strong> {t('appHome.string_169')}
                                                            </p>
                </div>
              </div>

              {/* Core Expertise */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{t('appHome.string_170')}</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    t('appHome.string_199', 'Compostable coffee pouches for DTC brands'),
                    t('appHome.string_200', 'Chocolate & confectionery packaging'),
                    t('appHome.string_201', 'Tea packaging (loose leaf & sachets)'),
                    t('appHome.string_202', 'EN 13432 & ASTM D6400 compliance'),
                    t('appHome.string_203', 'Low MOQ sustainable solutions'),
                    t('appHome.string_204', 'Barrier technology for food products')
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
                  <div className="text-xs text-neutral-600">{t('appHome.string_171')}</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">8</div>
                  <div className="text-xs text-neutral-600">{t('appHome.string_172')}</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">100</div>
                  <div className="text-xs text-neutral-600">{t('appHome.string_173')}</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-700">4</div>
                  <div className="text-xs text-neutral-600">{t('appHome.string_174')}</div>
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
                  <span style={{color: '#ffffff'}}>{t('appHome.string_175')}</span>
                </a>
                <a 
                  href="mailto:ryan@achievepack.com"
                  className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                  style={{color: '#16a34a'}}
                >
                  <Mail className="h-5 w-5" style={{color: '#16a34a'}} />
                  <span style={{color: '#16a34a'}}>{t('appHome.string_176')}</span>
                </a>
                <a 
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition"
                  style={{color: '#ffffff'}}
                >
                  <Calendar className="h-5 w-5" style={{color: '#ffffff'}} />
                  <span style={{color: '#ffffff'}}>{t('appHome.string_177')}</span>
                </a>
                <Link
                  to="/team/ryan-wong"
                  className="inline-flex items-center gap-2 bg-neutral-100 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition"
                  style={{color: '#1f2937'}}
                >
                  <span style={{color: '#1f2937'}}>{t('appHome.string_178')}</span>
                  <ArrowRight className="h-5 w-5" style={{color: '#1f2937'}} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Floating Testimonial Video - Removed */}
      <QuoteLightbox />
    </div>
    </>
  )
}

export default App