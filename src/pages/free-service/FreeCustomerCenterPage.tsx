import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Package, CheckCircle, Calendar, Shield, Clock, X, 
  ChevronDown, HelpCircle, Upload, FileText, Bell, 
  MessageCircle, Users, BarChart3, FolderOpen, Lock,
  Sparkles, ArrowRight, Gift, Star, Target, Zap
} from 'lucide-react'
import { useCalendly } from '../../contexts/CalendlyContext'
import Footer from '../../components/Footer'
import { SEOPageHeader } from '../../components/SEOPageLayout'

// Image paths - Customer Center screenshots
const IMAGES = {
  hero: '/imgs/free/center/hero.png',
  dashboard: '/imgs/free/center/dashboard-1.png',
  artwork: '/imgs/free/center/dashboard-2.png',
  proof: '/imgs/free/center/dashboard-3.png',
  documents: '/imgs/free/design/a_eco_benefits_infographic_8564320.webp'
}

// Clickable Image Component with lightbox
const ClickableImage: React.FC<{
  src: string
  alt: string
  className?: string
  caption?: string
}> = ({ src, alt, className = '', caption }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <figure className="cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} transition-transform group-hover:scale-[1.02]`}
          loading="lazy"
        />
        {caption && (
          <figcaption className="text-xs text-neutral-500 mt-2 text-center">{caption}</figcaption>
        )}
        <div className="text-xs text-primary-600 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</div>
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

// Alternating Image-Text Row Component
const ImageTextRow: React.FC<{
  image: string
  imageAlt: string
  imageCaption?: string
  children: React.ReactNode
  imageLeft?: boolean
}> = ({ image, imageAlt, imageCaption, children, imageLeft = true }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${imageLeft ? '' : 'md:flex-row-reverse'}`}>
      {imageLeft ? (
        <>
          <div className="order-2 md:order-1">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
          <div className="order-1 md:order-2">{children}</div>
        </>
      ) : (
        <>
          <div className="order-1 md:order-1">{children}</div>
          <div className="order-2 md:order-2">
            <ClickableImage 
              src={image} 
              alt={imageAlt}
              className="w-full rounded-xl shadow-lg"
              caption={imageCaption}
            />
          </div>
        </>
      )}
    </div>
  )
}

// FAQ data for AEO optimization
const faqs = [
  {
    question: "Is the Customer Center really free?",
    answer: "Yes, 100% free for all Achieve Pack customers. There are no hidden fees, no premium tiers, and no time limits. Once you create an account, you have lifetime access to all features including order tracking, artwork management, proof approval, and document downloads."
  },
  {
    question: "What file formats can I upload for artwork?",
    answer: "Our Customer Center accepts all industry-standard design files: AI (Adobe Illustrator), EPS, PDF, PNG, JPG, JPEG, TIFF, PSD, and ZIP archives. Maximum file size is 10MB per file. For larger files, we recommend using WeTransfer or Dropbox and sharing the link with us."
  },
  {
    question: "How do I approve a proof in the Customer Center?",
    answer: "When your proof is ready, you'll receive an email notification. Log into your Customer Center, navigate to Artwork > Proof Ready, review the digital proof with our built-in checklist (bag size, colors, text, logos), add your e-signature, and click approve. The entire process takes under 2 minutes."
  },
  {
    question: "Can I track my order status in real-time?",
    answer: "Yes, our Customer Center provides real-time order tracking from production through delivery. You'll see status updates at each stage: Order Confirmed → In Production → Quality Check → Shipped → Delivered. For shipped orders, you can access the tracking link directly from your dashboard."
  },
  {
    question: "Is my data secure in the Customer Center?",
    answer: "Absolutely. We use Supabase with enterprise-grade security and row-level security (RLS) policies. Your artwork files, order history, and business documents are encrypted and accessible only to you and authorized team members. We comply with GDPR and industry security standards."
  },
  {
    question: "How long is my order history stored?",
    answer: "Your complete order history, artwork files, and documents are stored permanently in your account. This makes reordering easy—you can duplicate previous orders with one click, access past artwork files for updates, and download compliance certificates anytime."
  },
  {
    question: "Can multiple team members access the same account?",
    answer: "Currently, each Customer Center account is tied to one email address. For teams that need shared access, we recommend creating a shared team email or contacting us for enterprise solutions with multi-user access and role-based permissions."
  },
  {
    question: "What if I need help using the Customer Center?",
    answer: "Our support team is available to help via the comment thread on any artwork or order. You can also email us directly or book a free walkthrough call. Most customers find the interface intuitive, but we're always here to assist."
  }
]

const FreeCustomerCenterPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Helmet>
        <title>FREE Customer Center for Packaging Management | Order Tracking & Artwork Portal | Achieve Pack</title>
        <meta name="description" content="Manage your packaging orders, artwork files, and proof approvals in one FREE dashboard. Track orders in real-time, upload designs, approve proofs online, and access compliance documents. 100% free for all customers." />
        <link rel="canonical" href="https://achievepack.com/free-service/customer-center" />
        <meta name="keywords" content="free customer portal, packaging order management, artwork upload portal, proof approval system, order tracking dashboard, packaging document management, free packaging software" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FREE Customer Center for Packaging Management | Achieve Pack" />
        <meta property="og:description" content="Manage orders, artwork, and proofs in one FREE dashboard. Real-time tracking, digital proof approval, and secure document storage." />
        <meta property="og:image" content="https://achievepack.com/imgs/free/center/hero.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://achievepack.com/free-service/customer-center" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FREE Customer Center for Packaging Management" />
        <meta name="twitter:description" content="Track orders, manage artwork, approve proofs—all in one free dashboard." />

        {/* SoftwareApplication Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Achieve Pack Customer Center",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Order tracking and management",
              "Artwork file upload and storage",
              "Digital proof review and approval",
              "Compliance document access",
              "Real-time notifications",
              "Comment threads for communication"
            ],
            "provider": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            }
          })}
        </script>

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "FREE Customer Center for Packaging Management",
            "description": "Complete guide to Achieve Pack's free Customer Center—manage orders, artwork, and proofs in one dashboard.",
            "image": "https://achievepack.com/imgs/free/center/hero.png",
            "author": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "url": "https://achievepack.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Achieve Pack",
              "logo": {
                "@type": "ImageObject",
                "url": "https://achievepack.com/logo.png"
              }
            },
            "datePublished": "2026-01-07",
            "dateModified": "2026-01-07",
            "mainEntityOfPage": "https://achievepack.com/free-service/customer-center"
          })}
        </script>

        {/* FAQ Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* HowTo Schema for AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Use Achieve Pack Customer Center",
            "description": "Step-by-step guide to managing your packaging orders and artwork",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Create Free Account",
                "text": "Sign up with your email at achievepack.com/dashboard"
              },
              {
                "@type": "HowToStep",
                "name": "Upload Artwork",
                "text": "Drag and drop your design files (AI, EPS, PDF, PNG, JPG, PSD, ZIP)"
              },
              {
                "@type": "HowToStep",
                "name": "Track Orders",
                "text": "Monitor order status from production to delivery in real-time"
              },
              {
                "@type": "HowToStep",
                "name": "Approve Proofs",
                "text": "Review digital proofs, complete checklist, and e-sign for approval"
              },
              {
                "@type": "HowToStep",
                "name": "Access Documents",
                "text": "Download certificates and compliance documents anytime"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        <SEOPageHeader />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Gift className="h-4 w-4" />
                  <span className="text-sm font-semibold">100% FREE • No Hidden Costs</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Your Packaging Command Center—Completely Free
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Track orders, manage artwork, approve proofs, and access documents—all in one secure dashboard. Built for packaging buyers who value efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg"
                  >
                    <Zap className="h-5 w-5" />
                    Access Customer Center
                  </Link>
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                  >
                    <Calendar className="h-5 w-5" />
                    Get a Walkthrough
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <ClickableImage
                  src={IMAGES.hero}
                  alt="Achieve Pack Customer Center Dashboard"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators - E-E-A-T */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-neutral-600">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">500+ Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Since 2011</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement - AEO Optimized */}
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Tired of Managing Packaging Orders via Email?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Most packaging buyers struggle with scattered communications, lost artwork files, and unclear order status. Our free Customer Center solves these problems—giving you a single source of truth for all your packaging needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="text-red-500 text-2xl mb-3">❌</div>
                <h3 className="font-semibold text-neutral-900 mb-2">Without Customer Center</h3>
                <ul className="text-sm text-neutral-600 space-y-1 text-left">
                  <li>• Email threads get buried</li>
                  <li>• Artwork files scattered</li>
                  <li>• Order status unclear</li>
                  <li>• Proof approvals delayed</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-green-500 rotate-90 md:rotate-0" />
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="text-green-500 text-2xl mb-3">✓</div>
                <h3 className="font-semibold text-neutral-900 mb-2">With Customer Center</h3>
                <ul className="text-sm text-neutral-600 space-y-1 text-left">
                  <li>• Centralized communication</li>
                  <li>• Secure cloud storage</li>
                  <li>• Real-time tracking</li>
                  <li>• One-click approval</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections with Alternating Layout */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* Feature 1: Order Management */}
            <ImageTextRow
              image={IMAGES.dashboard}
              imageAlt="Order tracking dashboard showing real-time status"
              imageCaption="Real-time order tracking from production to delivery"
              imageLeft={true}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                  <Package className="h-5 w-5" />
                  <span>Order Management</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Track Every Order in Real-Time
                </h3>
                <p className="text-neutral-600 mb-6">
                  Never wonder "where's my order?" again. Our dashboard shows real-time status for every order—from production through delivery. Get automatic notifications when status changes, and access tracking links directly from your dashboard.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">View all orders with status indicators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Track shipments with one click</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Reorder previous orders instantly</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  Related: <Link to="/blog/sustainable-packaging-supplier-analysis" className="text-green-600 hover:underline">How to Choose a Packaging Supplier</Link>
                </p>
              </div>
            </ImageTextRow>

            {/* Feature 2: Artwork Management */}
            <ImageTextRow
              image={IMAGES.artwork}
              imageAlt="Artwork file management with version control"
              imageCaption="Upload, organize, and track all your design files"
              imageLeft={false}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                  <Upload className="h-5 w-5" />
                  <span>Artwork Management</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Upload & Organize Design Files
                </h3>
                <p className="text-neutral-600 mb-6">
                  Stop digging through email attachments for that design file. Upload artwork directly to your account with automatic organization by order. Supports all standard formats including AI, EPS, PDF, PNG, and more.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Drag & drop file uploads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">10MB per file, secure cloud storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Track review status for each file</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  Need help? <Link to="/free-service/packaging-design-consultation" className="text-green-600 hover:underline">Book a Free Design Consultation</Link>
                </p>
              </div>
            </ImageTextRow>

            {/* Feature 3: Proof Approval */}
            <ImageTextRow
              image={IMAGES.proof}
              imageAlt="Digital proof review and approval interface"
              imageCaption="Review proofs and approve with e-signature"
              imageLeft={true}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                  <FileText className="h-5 w-5" />
                  <span>Proof Approval</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Review & Approve Proofs Online
                </h3>
                <p className="text-neutral-600 mb-6">
                  No more printing, signing, scanning, and emailing approvals. Our digital proof system includes a built-in checklist to verify bag size, colors, text spelling, and logos. Add your e-signature and approve in seconds.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Built-in approval checklist</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">E-signature for legal approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Request revisions with comments</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  Explore: <Link to="/packaging/stand-up-pouches" className="text-green-600 hover:underline">Stand-Up Pouch Options</Link> | <Link to="/materials/compostable" className="text-green-600 hover:underline">Compostable Materials</Link>
                </p>
              </div>
            </ImageTextRow>

            {/* Feature 4: Documents */}
            <ImageTextRow
              image={IMAGES.documents}
              imageAlt="Compliance documents and certificates library"
              imageCaption="Access certificates and compliance documents anytime"
              imageLeft={false}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-green-600 font-semibold mb-4">
                  <FolderOpen className="h-5 w-5" />
                  <span>Document Library</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  Compliance Documents at Your Fingertips
                </h3>
                <p className="text-neutral-600 mb-6">
                  Need a BPI certificate for your retailer? Material safety data sheet for compliance? Access all your documents instantly from the Customer Center—organized and always up to date.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Certificates (BPI, TÜV, FSC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Material data sheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">Order invoices and receipts</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-neutral-500">
                  Learn more: <Link to="/materials/home-compostable" className="text-green-600 hover:underline">Home Compostable Certification</Link>
                </p>
              </div>
            </ImageTextRow>
          </div>
        </section>

        {/* AI Search Optimization Section - AEO */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Looking for Packaging Management Software?
              </h2>
              <p className="text-neutral-600">
                If you're searching for solutions to manage your packaging workflow, here's what our Customer Center offers:
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    Common Questions We Answer
                  </h3>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li>• "How to track packaging orders online?"</li>
                    <li>• "Best way to manage artwork files for packaging"</li>
                    <li>• "Digital proof approval for custom pouches"</li>
                    <li>• "Free packaging order management software"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                    Try Asking AI Assistants
                  </h3>
                  <ul className="text-sm text-neutral-600 space-y-2">
                    <li>• "What's the best free customer portal for packaging?"</li>
                    <li>• "How to approve packaging proofs online?"</li>
                    <li>• "Packaging supplier with low MOQ and order tracking"</li>
                    <li>• "Free artwork management for packaging orders"</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 text-center">
                  The Achieve Pack Customer Center is designed to answer these needs—completely free. <Link to="/dashboard" className="text-green-600 hover:underline">Try it now →</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-600">
                Everything you need to know about our free Customer Center
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-neutral-200 rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50 transition"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-neutral-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Explore More Resources
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/store" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-green-300 hover:shadow-lg transition group">
                <Package className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-green-600 transition">Shop Packaging</h3>
                <p className="text-sm text-neutral-500 mt-2">Browse eco-friendly pouches starting from 100 units</p>
              </Link>
              <Link to="/free-service/packaging-design-consultation" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-green-300 hover:shadow-lg transition group">
                <Sparkles className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-green-600 transition">Free Design Help</h3>
                <p className="text-sm text-neutral-500 mt-2">Get expert feedback on your packaging design</p>
              </Link>
              <Link to="/blog/sustainable-packaging-supplier-analysis" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-green-300 hover:shadow-lg transition group">
                <BarChart3 className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-green-600 transition">Supplier Analysis</h3>
                <p className="text-sm text-neutral-500 mt-2">Compare eco-friendly packaging suppliers</p>
              </Link>
              <Link to="/materials/compostable" className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-green-300 hover:shadow-lg transition group">
                <Shield className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-neutral-900 group-hover:text-green-600 transition">Material Guide</h3>
                <p className="text-sm text-neutral-500 mt-2">Learn about compostable packaging materials</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Gift className="h-12 w-12 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Packaging Workflow?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join 500+ brands using our free Customer Center. No credit card, no commitment—just better packaging management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg"
              >
                Create Free Account
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <Calendar className="h-5 w-5" />
                Book Demo Call
              </button>
            </div>
            <p className="mt-6 text-sm text-green-200">
              100% FREE • No hidden costs • No obligation
            </p>
          </div>
        </section>

        {/* E-E-A-T Footer Section */}
        <section className="py-12 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Experience
                </h3>
                <p className="text-sm text-neutral-400">
                  Since 2011, we've helped 1,000+ brands manage their packaging. Our Customer Center is built on real feedback from packaging buyers like you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  Trust & Security
                </h3>
                <p className="text-sm text-neutral-400">
                  Enterprise-grade security with Supabase. Your data is encrypted, GDPR compliant, and never shared with third parties.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Support
                </h3>
                <p className="text-sm text-neutral-400">
                  Real humans ready to help. Contact us via the Customer Center, email, or book a call. We're here for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default FreeCustomerCenterPage
