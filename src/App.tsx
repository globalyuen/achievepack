import { useState, useEffect } from 'react'
import { Menu, X, Leaf, Package, CheckCircle, Clock, Truck, Factory, Recycle, Globe, Calculator, Calendar, Phone, Mail, MapPin, ChevronDown, Star, Users, Award, Zap, Target, TrendingUp, Shield } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalAlt, setModalAlt] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

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
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`

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
                { id: 'about', label: 'About' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'products', label: 'Products' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'features', label: 'Features' },
                { id: 'contact', label: 'Contact' }
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

            <div className="hidden lg:flex items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5"
              >
                Get Started
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
                { id: 'about', label: 'About' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'products', label: 'Products' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'features', label: 'Features' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left text-base font-medium text-neutral-700 hover:text-primary-500 py-2"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
                Make packaging sustainable with
                <span className="text-primary-500"> Achieve Pack</span>
              </h1>
              <p className="text-xl text-neutral-700 leading-relaxed mb-8 max-w-xl">
                Transform your business with certified eco-friendly packaging solutions that reduce your environmental impact while delivering exceptional business value.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-start mb-12">
                <button className="flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:shadow-hover hover:-translate-y-0.5">
                  <Calculator className="h-5 w-5" />
                  <span>Calculate Your Savings</span>
                </button>
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 border-2 border-neutral-200 text-neutral-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-50 transition-colors">
                  <Calendar className="h-5 w-5" />
                  <span>Book Free Consultation</span>
                </a>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-neutral-100">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">70%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">Carbon Footprint Reduction</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-neutral-100">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">70%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">Less Plastic Usage</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-neutral-100">
                  <div className="text-2xl md:text-3xl font-bold text-primary-500 mb-1">22%</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-tight">Shipping Cost Savings</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-primary-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp"
                alt="Premium Sustainable Packaging"
                className="relative z-10 w-full rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp')
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
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">Leading the Sustainable Packaging Revolution</h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                Achieve Pack® is the parent company of pouch.eco, founded in 2021 in Hong Kong. We specialize in providing one-stop solutions for businesses seeking to transition to eco-friendly packaging without compromising on quality or cost-effectiveness.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Our mission is to make sustainable packaging accessible to businesses of all sizes, offering certified compostable materials, recyclable options, and bio-based solutions that significantly reduce environmental impact while delivering superior business value.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">EN13432 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">ASTM D6400 Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">GRS-Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/04/home-compost.png"
                  alt="Home Compost Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/04/home-compost.png')
                    setModalAlt('Home Compost Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/04/pcr-grs-cert-1.png"
                  alt="PCR GRS Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/04/pcr-grs-cert-1.png')
                    setModalAlt('PCR GRS Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/04/brc-cert.png"
                  alt="BRC Food Safety Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/04/brc-cert.png')
                    setModalAlt('BRC Food Safety Certification')
                    setIsModalOpen(true)
                  }}
                />
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/04/BioPE.png"
                  alt="BioPE Sustainable Certification"
                  className="rounded-lg shadow-card cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/04/BioPE.png')
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
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Environmental & Business Benefits</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our sustainable packaging solutions deliver exceptional value on both environmental and business fronts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Environmental Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 flex items-center">
                <Leaf className="h-6 w-6 text-primary-500 mr-3" />
                Environmental Impact
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp"
                    alt="CO2 Emissions Reduction 70%"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_carbon_footprint_reduction_infographic_6668500.webp')
                      setModalAlt('CO2 Emissions Reduction 70%')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">70% Carbon Footprint Reduction</h4>
                  <p className="text-neutral-700">Significantly lower environmental impact compared to traditional plastic packaging.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp"
                    alt="Certified Compostable Materials"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_compostable_materials_infographic_5689913.webp')
                      setModalAlt('Certified Compostable Materials')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Certified Compostable Materials</h4>
                  <p className="text-neutral-700">Break down naturally in composting environments without harmful residues.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp"
                    alt="Plant-Based Renewable Materials"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_plant_based_materials_infographic_2991523.webp')
                      setModalAlt('Plant-Based Renewable Materials')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Plant-Based Renewable Materials</h4>
                  <p className="text-neutral-700">Made from renewable resources like cornstarch and sugarcane, reducing fossil fuel dependence.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp"
                    alt="GRS-Certified Recyclable Options"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_grs_recyclable_infographic_8929966.webp')
                      setModalAlt('GRS-Certified Recyclable Options')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">GRS-Certified Recyclable Options</h4>
                  <p className="text-neutral-700">Global Recyclable Standard certified materials for complete circular economy integration.</p>
                </div>
              </div>
            </div>

            {/* Business Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 flex items-center">
                <Zap className="h-6 w-6 text-accent-500 mr-3" />
                Business Advantages
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp"
                    alt="Low Minimum Order: 100 Pieces"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_low_moq_infographic_9327303.webp')
                      setModalAlt('Low Minimum Order: 100 Pieces')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Low Minimum Order: 100 Pieces</h4>
                  <p className="text-neutral-700">Start small with our low MOQ, compared to 5K-10K minimums elsewhere.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp"
                    alt="Fast Turnaround Times"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_fast_turnaround_infographic_1726271.webp')
                      setModalAlt('Fast Turnaround Times')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Fast Turnaround Times</h4>
                  <p className="text-neutral-700">Samples in 2-3 weeks, full production in 6-8 weeks to meet your timeline.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp"
                    alt="Shipping & Storage Benefits"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Split-infographic-showing-shipping-and-storage-benefits-top-section-displays-15-22-shipping-cost-reduction-with-box-comparison-bottom-shows-70-space-savings-with-warehouse-shelf-visualization.webp')
                      setModalAlt('Shipping & Storage Benefits')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">15-22% Shipping Cost Savings</h4>
                  <p className="text-neutral-700">Lighter packaging reduces shipping costs while maintaining product protection.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                  <img
                    src="https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp"
                    alt="Premium Finishes at Lower Cost"
                    className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer"
                    onClick={() => {
                      setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_premium_finishes_infographic_5805298.webp')
                      setModalAlt('Premium Finishes at Lower Cost')
                      setIsModalOpen(true)
                    }}
                  />
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">Premium Finishes at Lower Cost</h4>
                  <p className="text-neutral-700">Professional printing and finishing options that don't break the budget.</p>
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
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Sustainable Packaging Solutions</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Choose from our comprehensive range of eco-friendly packaging materials designed for various applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp"
                alt="Compostable Packaging Timeline"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Educational-timeline-infographic-showing-five-month-composting-process-from-intact-pouch-to-rich-soil-with-EN13432ASTM-D6400-certification-and-earthy-color-progression.webp')
                  setModalAlt('Compostable Packaging Timeline')
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Compostable & Biodegradable</h3>
              <p className="text-neutral-700 mb-4">Home and industrial compostable options that break down safely in composting environments.</p>
              <div className="text-sm text-primary-500 font-medium">✓ EN13432 & ASTM D6400 Certified</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp"
                alt="GRS Certified Mono-Recyclable"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Close-up-editorial-shot-of-GRS-certified-mono-material-recyclable-pouches-in-neutral-tones-hands-presenting-premium-matte-and-soft-touch-finishes-on-marble-surface-with-natural-window-lighting.webp')
                  setModalAlt('GRS Certified Mono-Recyclable')
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Mono-Recyclable</h3>
              <p className="text-neutral-700 mb-4">GRS-certified 100% recyclable materials designed for efficient recycling streams.</p>
              <div className="text-sm text-primary-500 font-medium">✓ GRS-Certified | 100% Recyclable</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp"
                alt="PCR & Bio-based Materials"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Overhead-flat-lay-of-PCR-and-bio-based-material-pouches-artfully-arranged-with-seeds-and-plant-elements-FDA-food-contact-approved-showing-circular-economy-innovation-with-Achieve-Pack-branding.webp')
                  setModalAlt('PCR & Bio-based Materials')
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Post-Consumer Recycled</h3>
              <p className="text-neutral-700 mb-4">PCR plastic with lower carbon footprint, giving new life to recycled materials.</p>
              <div className="text-sm text-primary-500 font-medium">✓ PCR Materials | Lower Carbon</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp"
                alt="Premium Kraft Sustainable Packaging"
                className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Premium-kraft-stand-up-pouch-with-Achieve-Pack-green-logo-surrounded-by-natural-elements-fresh-leaves-moss-and-wooden-surface-in-warm-morning-sunlight-showcasing-sustainable-packaging-luxury.webp')
                  setModalAlt('Premium Kraft Sustainable Packaging')
                  setIsModalOpen(true)
                }}
              />
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Bio-based PE</h3>
              <p className="text-neutral-700 mb-4">Sustainable sugarcane-based packaging that reduces fossil fuel dependence.</p>
              <div className="text-sm text-primary-500 font-medium">✓ Sugarcane-Based | Renewable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Industry Solutions</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Specialized packaging solutions tailored to meet the unique requirements of different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp"
                alt="Food & Beverage Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_food_beverage_lifestyle_showcase_6362188.webp')
                  setModalAlt('Food & Beverage Packaging')
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Food & Beverage</h3>
              <p className="text-neutral-700">Chocolate, nuts, tea, coffee, and other food products with various barrier requirements.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp"
                alt="Cosmetics & Personal Care Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Dramatic-showcase-of-six-premium-finishing-options-matte-gloss-soft-touch-metallic-embossed-and-spot-UV-with-hand-touching-pouch-to-emphasize-tactile-luxury-under-directional-lighting.webp')
                  setModalAlt('Cosmetics & Personal Care Packaging')
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Cosmetics & Personal Care</h3>
              <p className="text-neutral-700">Premium packaging for beauty and personal care products with elegant finishes.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp"
                alt="Health & Wellness Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Fresh-wellness-photography-showing-athletic-hands-scooping-superfood-powder-from-clean-stand-up-wellness-pouch-into-glass-shaker-bottle-with-fresh-fruit-and-fitness-props-in-bright-modern-kitchen-setting.webp')
                  setModalAlt('Health & Wellness Packaging')
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Health & Wellness</h3>
              <p className="text-neutral-700">Medical and wellness products requiring high barrier protection and compliance.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1 text-center border border-neutral-100">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp"
                alt="Pet Products Packaging"
                className="w-full h-32 object-cover rounded-lg mb-4 cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_pet_products_with_cute_pet_9679118.webp')
                  setModalAlt('Pet Products Packaging')
                  setIsModalOpen(true)
                }}
              />
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">Pet Products</h3>
              <p className="text-neutral-700">Pet food and treats packaging with odor barriers and resealable options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Advanced Packaging Features</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Comprehensive customization options to meet your specific product requirements and brand needs.
            </p>
          </div>

          <div className="space-y-8">
            {/* Barrier Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Barrier Protection Levels</h3>
              <div className="mb-6">
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp"
                  alt="Barrier Protection Levels Infographic"
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_barrier_options_infographic_4264860-scaled.webp')
                    setModalAlt('Barrier Protection Levels Infographic')
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">Low Barrier</div>
                  <div className="text-xs text-neutral-500">Dry goods</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">Medium Barrier</div>
                  <div className="text-xs text-neutral-500">Snacks & coffee</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-300 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">High Barrier</div>
                  <div className="text-xs text-neutral-500">Sensitive products</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">Maximum Barrier</div>
                  <div className="text-xs text-neutral-500">Long shelf life</div>
                </div>
              </div>
            </div>

            {/* Pouch Shapes */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Pouch Shapes & Styles</h3>
              <div className="mb-6">
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp"
                  alt="Pouch Shapes & Styles Infographic"
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_pouches_single_row_2617439-scaled.webp')
                    setModalAlt('Pouch Shapes & Styles Infographic')
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Stand-up Pouch</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Flat Bottom</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Side Gusseted</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Quad Seal</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">3-Side Sealed</div>
                </div>
              </div>
            </div>

            {/* Printing Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Printing & Finishes</h3>
              <div className="mb-6">
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp"
                  alt="Premium Finishes Showcase"
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/12/a_achieve_pack_bags_stamp_foil_3332905-scaled.webp')
                    setModalAlt('Premium Finishes Showcase')
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Printing Methods</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Up to 10 colors plate printing</li>
                    <li>• Unlimited digital printing</li>
                    <li>• High-resolution graphics</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Surface Finishes</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Matte & gloss options</li>
                    <li>• Soft-touch coating</li>
                    <li>• Metallic finishes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-3">Special Effects</h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Spot UV coating</li>
                    <li>• Embossing & debossing</li>
                    <li>• Holographic effects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reclosure Options */}
            <div className="bg-neutral-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Reclosure Solutions</h3>
              <div className="mb-6">
                <img
                  src="https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp"
                  alt="Closure Systems Infographic"
                  className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
                  onClick={() => {
                    setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Educational-infographic-displaying-five-closure-systems-zipper-spout-cap-tin-tie-press-to-close-and-valve-with-clear-labels-and-technical-illustrations-showing-convenience-and-freshness-benefits.webp')
                    setModalAlt('Closure Systems Infographic')
                    setIsModalOpen(true)
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Zipper Closures</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Spout Caps</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Tin-ties</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Press-to-Close</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Package className="h-8 w-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium">Child-Resistant</div>
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
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Flexible vs. Rigid Packaging</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Discover why flexible packaging is the superior choice for both environmental and business considerations.
            </p>
            <div className="mt-8">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Bold-three-column-comparison-infographic-titled-The-Data-Doesnt-Lie-showing-70-less-plastic-70-lower-CO2-and-70-space-savings-with-clear-icons-bar-charts-and-green-accent-colors.webp"
                alt="Data Comparison: The Data Doesn't Lie"
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Bold-three-column-comparison-infographic-titled-The-Data-Doesnt-Lie-showing-70-less-plastic-70-lower-CO2-and-70-space-savings-with-clear-icons-bar-charts-and-green-accent-colors.webp')
                  setModalAlt('Data Comparison: The Data Doesn\'t Lie')
                  setIsModalOpen(true)
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Flexible Packaging */}
            <div className="bg-white rounded-lg p-8 shadow-card border-2 border-primary-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-500 mb-2">Flexible Packaging</h3>
                <p className="text-neutral-700">Achieve Pack Solutions</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">70% less plastic usage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">70% weight reduction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">15-22% shipping cost savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">70% warehouse space reduction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">2x faster time to market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">Superior product protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">Customizable barrier levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-neutral-700">Premium printing options</span>
                </div>
              </div>
            </div>

            {/* Rigid Packaging */}
            <div className="bg-white rounded-lg p-8 shadow-card border-2 border-neutral-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-neutral-700 mb-2">Rigid Packaging</h3>
                <p className="text-neutral-500">Traditional Solutions</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Higher plastic consumption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Heavier weight</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Higher shipping costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Large storage requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Longer development time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Limited customization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Standard barrier options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 bg-neutral-300 rounded-full"></div>
                  </div>
                  <span className="text-neutral-500">Basic printing capabilities</span>
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
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Simple 5-Step Process</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              From initial consultation to final delivery, we make sustainable packaging accessible and straightforward.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-neutral-200"></div>

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                {
                  step: 1,
                  title: "Consultation",
                  description: "Requirements analysis and material recommendations",
                  icon: Users
                },
                {
                  step: 2,
                  title: "Design & Selection",
                  description: "Custom design and material selection",
                  icon: Target
                },
                {
                  step: 3,
                  title: "Sample Production",
                  description: "Sample production in 2-3 weeks",
                  icon: Package
                },
                {
                  step: 4,
                  title: "Full Production",
                  description: "Full production in 6-8 weeks",
                  icon: Factory
                },
                {
                  step: 5,
                  title: "Delivery & Support",
                  description: "Delivery and ongoing support",
                  icon: Truck
                }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.step}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Success Stories</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              See how businesses like yours have transformed their packaging with Achieve Pack solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "Achieve Pack helped us transition to sustainable packaging without compromising on quality. Our customers love the eco-friendly approach.",
                name: "Sarah Chen",
                company: "GreenSnacks Ltd",
                industry: "Food & Beverage"
              },
              {
                quote: "The low MOQ and fast turnaround made it easy for our startup to go sustainable from day one. Outstanding service!",
                name: "Michael Rodriguez",
                company: "EcoBeauty Co",
                industry: "Cosmetics"
              },
              {
                quote: "We reduced our packaging costs by 18% while improving our environmental impact. Achieve Pack delivered on all fronts.",
                name: "Emily Watson",
                company: "Wellness Plus",
                industry: "Health & Wellness"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-card hover:shadow-hover transition-all duration-250 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">{testimonial.company}</div>
                  <div className="text-sm text-primary-500">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">Trusted by leading brands worldwide</h3>
            <div className="flex justify-center items-center opacity-70">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/a_customer_logos_grid_grey_multiple_rows_6481588-scaled.webp"
                alt="Trusted by leading brands"
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
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-700">
              Get answers to common questions about our sustainable packaging solutions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What certifications do your packaging materials have?",
                answer: "Our compostable materials are certified to EN13432 and ASTM D6400 standards, while our recyclable options carry GRS (Global Recycled Standard) certification. All materials meet international safety and environmental standards."
              },
              {
                question: "What is the minimum order quantity?",
                answer: "We offer one of the lowest MOQs in the industry at just 100 pieces, making sustainable packaging accessible to startups and small businesses. This is significantly lower than the 5,000-10,000 piece minimums typically required elsewhere."
              },
              {
                question: "How long does production take?",
                answer: "Sample production takes 2-3 weeks, and full production takes 6-8 weeks from approval. This timeline allows us to ensure quality while meeting your launch requirements."
              },
              {
                question: "Are your packaging materials cost-effective compared to traditional plastic?",
                answer: "Yes! While the material cost may be slightly higher, you typically save 15-22% on shipping costs due to reduced weight, and 70% on warehouse space. Many clients find the total cost of ownership is competitive or better than traditional options."
              },
              {
                question: "What barrier options are available for different products?",
                answer: "We offer 8 different barrier levels ranging from low barrier for dry goods to maximum barrier for products requiring extended shelf life. Our team will recommend the optimal barrier based on your specific product requirements."
              },
              {
                question: "Can you help with custom design and printing?",
                answer: "Absolutely! We offer comprehensive design services including up to 10-color plate printing and unlimited digital printing. We also provide various finishes like matte, gloss, soft-touch, metallic, spot UV, and embossing options."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-neutral-50 rounded-lg p-6">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-lg font-semibold text-neutral-900">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-neutral-500 transition-transform duration-200" />
                </summary>
                <div className="mt-4 text-neutral-700 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Ready to transform your packaging? Contact us for a free consultation and discover how Achieve Pack can help your business go sustainable.
            </p>
            <div className="mt-8">
              <img
                src="https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp"
                alt="Start Your Sustainable Packaging Journey"
                className="w-full max-w-4xl mx-auto h-48 object-cover rounded-lg cursor-pointer"
                onClick={() => {
                  setModalImage('https://pouch.eco/wp-content/uploads/2025/12/Compelling-call-to-action-marketing-banner-featuring-prominent-Achieve-Pack-logo-headline-22Start-Your-Sustainable-Packaging-Journey22-showcase-of-diverse-sustainable-pouches.webp')
                  setModalAlt('Start Your Sustainable Packaging Journey')
                  setIsModalOpen(true)
                }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-card">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a message</h3>
              <div className="mb-4 text-sm text-primary-600 font-medium">Send to: ryan@achievepack.com</div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-300 transition-colors resize-none"
                    placeholder="Tell us about your packaging needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 shadow-card">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-neutral-900">Address</div>
                      <div className="text-neutral-700">No.41 1/F Wo Liu Hang Tsuen<br />Fotan, Hong Kong</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Phone</div>
                      <div className="text-neutral-700">(852) 6970-4411</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-neutral-900">Email</div>
                      <div className="text-neutral-700">ryan@achievepack.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-card">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Book a Free Consultation</h3>
                <p className="text-neutral-700 mb-6">
                  Schedule a 15-minute consultation to discuss your packaging needs and explore how our sustainable solutions can benefit your business.
                </p>
                <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="w-full bg-accent-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Consultation</span>
                </a>
              </div>

              <div className="bg-neutral-900 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Business Registration</h3>
                <p className="text-neutral-300">
                  Hong Kong Business Registration Number: 41007097
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
                <span className="text-xl font-bold">Achieve Pack</span>
              </div>
              <p className="text-neutral-300 mb-4">
                Leading the sustainable packaging revolution with certified eco-friendly solutions for businesses worldwide.
              </p>
              <p className="text-sm text-neutral-400">
                © 2025 Achieve Pack. All rights reserved.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Compostable Packaging</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Recyclable Solutions</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Bio-based Materials</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Custom Packaging</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#about" className="hover:text-primary-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-300">
                <li><a href="#contact" className="hover:text-primary-500 transition-colors">Get in Touch</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
            <p className="text-neutral-400">
              Hong Kong Business Registration Number: 41007097 | No.41 1/F Wo Liu Hang Tsuen, Fotan, HK
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
    </div>
  )
}

export default App