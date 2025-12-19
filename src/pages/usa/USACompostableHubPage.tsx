import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Shield, Award, CheckCircle, Globe, MapPin, FileCheck, AlertTriangle, MessageCircle, Package, Coffee, Cookie, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const USACompostableHubPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const sections = [
    {
      id: 'overview',
      title: 'Certified Compostable Packaging for US Brands',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong><Link to="/" className="text-primary-600 hover:underline">Achieve Pack</Link> provides certified compostable packaging solutions specifically designed for the US market.</strong> Our pouches meet both <strong>ASTM D6400</strong> (US standard) and <strong>EN 13432</strong> (European standard), giving your brand flexibility in global markets while meeting the strictest US regulatory requirements.
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">Why US Brands Choose Achieve Pack:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>ASTM D6400 & BPI Certified</strong> – Meets US industrial compostability standards</li>
              <li>• <strong>Low MOQ from 100 pieces</strong> – Perfect for startups and small batch brands</li>
              <li>• <strong>California, Washington, Colorado compliant</strong> – Meets state labeling laws</li>
              <li>• <strong>Fast shipping to USA</strong> – 15-20 business days door-to-door</li>
              <li>• <strong>Full design support</strong> – Help with compliant labeling and artwork</li>
            </ul>
          </div>
          
          <p className="mt-4">
            With growing consumer demand and new state regulations on plastic packaging, compostable pouches offer US food and beverage brands a genuine path to sustainability that resonates with eco-conscious consumers.
          </p>
          
          {/* Inline Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp" 
              alt="Certified compostable packaging showcase for US brands" 
              className="w-full rounded-lg shadow-md"
              caption="ASTM D6400 certified compostable packaging solutions for US market"
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Compostable Materials for US Market',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>We offer two types of compostable packaging, each certified for different end-of-life scenarios:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">
                <Link to="/materials/industrial-compostable" className="hover:underline">Industrial Compostable</Link>
              </h4>
              <p className="text-sm mb-2">Certified to ASTM D6400 & EN 13432 – breaks down in 90-180 days at commercial composting facilities.</p>
              <ul className="text-xs space-y-1 text-primary-700">
                <li>• Kraft Paper + PLA/PBAT lining</li>
                <li>• High barrier options available</li>
                <li>• Best for: Coffee, tea, snacks, pet treats</li>
                <li>• Accepted at US industrial composting sites</li>
              </ul>
              <Link to="/materials/industrial-compostable" className="text-xs text-primary-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">
                <Link to="/materials/home-compostable" className="hover:underline">Home Compostable</Link>
              </h4>
              <p className="text-sm mb-2">TÜV Austria OK compost HOME certified – breaks down in backyard compost within 12 months.</p>
              <ul className="text-xs space-y-1 text-emerald-700">
                <li>• NatureFlex™ cellulose films</li>
                <li>• No industrial facility needed</li>
                <li>• Best for: Premium organic brands, farmers markets</li>
                <li>• Consumer-friendly disposal</li>
              </ul>
              <Link to="/materials/home-compostable" className="text-xs text-emerald-600 hover:underline font-semibold mt-2 inline-block">Learn more →</Link>
            </div>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Not sure which type?</strong> <Link to="/blog/compostable-stand-up-pouch-guide-food-beverage" className="text-primary-600 hover:underline">Read our complete guide to choosing compostable pouches →</Link>
          </p>
          
          {/* Sustainability Guide Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_sustainability_labeling_guide_7131825.webp" 
              alt="Sustainability labeling guide for compostable packaging" 
              className="w-full rounded-lg shadow-md"
              caption="Complete sustainability labeling guide for US compostable packaging"
            />
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'US Compostability Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Achieve Pack's compostable packaging meets the strictest US and international standards:</p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-blue-600">ASTM</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">ASTM D6400</h4>
                <p className="text-sm">The US standard for compostable plastics in industrial composting facilities. Required for BPI certification and accepted by most US commercial composters.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-green-600">BPI</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">BPI Certified Compostable</h4>
                <p className="text-sm">Biodegradable Products Institute certification – the most widely recognized compostability certification in North America. Our materials are eligible for BPI certification.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <span className="text-lg font-bold text-primary-600">EN</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">EN 13432 (EU Standard)</h4>
                <p className="text-sm">European compostability standard – our dual certification means you can sell in both US and European markets with the same packaging.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'us-reality',
      title: 'Compostable Packaging Reality in the USA',
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Understanding the current state of composting infrastructure in the US is essential for making informed packaging decisions:</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Current US Composting Landscape
            </h4>
            <ul className="text-sm text-amber-700 space-y-2">
              <li>• <strong>Limited industrial composting access:</strong> Only ~27% of Americans have access to curbside composting programs</li>
              <li>• <strong>Facility acceptance varies:</strong> Not all composting facilities accept compostable packaging – check local policies</li>
              <li>• <strong>Consumer confusion:</strong> Clear labeling is essential to prevent contamination of recycling streams</li>
              <li>• <strong>Growing rapidly:</strong> Composting infrastructure is expanding, especially in CA, WA, OR, CO, and NY</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">When Compostable Packaging Makes Sense in the US:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✓ Food service and events with on-site composting</li>
              <li>✓ Farmers markets and farm-to-table brands</li>
              <li>✓ Products sold in composting-friendly states (CA, WA, OR, CO)</li>
              <li>✓ Premium organic and specialty food brands</li>
              <li>✓ Brands with sustainability-focused consumers</li>
            </ul>
          </div>
          
          <p className="text-sm mt-4">
            <strong>Alternative:</strong> If composting infrastructure is limited in your market, consider our <Link to="/materials/recyclable-mono-pe" className="text-primary-600 hover:underline">recyclable mono-PE pouches</Link> which work with existing recycling systems.
          </p>
          
          {/* Compliance Requirements Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/hub/a_label_compliance_requirements_0902238.webp" 
              alt="US label compliance requirements for compostable packaging" 
              className="w-full rounded-lg shadow-md"
              caption="Label compliance requirements for US compostable packaging"
            />
          </div>
        </div>
      )
    },
    {
      id: 'state-regulations',
      title: 'US State Regulations for Compostable Packaging',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Several US states have enacted laws regulating how "compostable" claims can be made on packaging:</p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-800">California (SB 343 & AB 1201)</h4>
              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                <li>• "Compostable" claims require ASTM D6400 or D6868 certification</li>
                <li>• Packaging must use specific green/brown colors or "Compostable" label</li>
                <li>• Cannot use "biodegradable" on plastic packaging</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-emerald-800">Washington State</h4>
              <ul className="text-sm text-emerald-700 mt-1 space-y-1">
                <li>• Compostable products must meet ASTM D6400/D6868</li>
                <li>• Must be clearly distinguishable from non-compostable items</li>
                <li>• Mandatory labeling requirements for food service products</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-800">Colorado</h4>
              <ul className="text-sm text-purple-700 mt-1 space-y-1">
                <li>• Products labeled "compostable" must meet ASTM D6400</li>
                <li>• Must include "Commercially Compostable Only" if not home compostable</li>
                <li>• Prohibits misleading environmental claims</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm">
              <strong>Need help with compliant labeling?</strong> Achieve Pack provides design guidance to ensure your packaging meets state requirements. <Link to="/usa/labeling-guide" className="text-primary-600 hover:underline font-semibold">View our US Labeling Compliance Guide →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'industries',
      title: 'US Industry Solutions',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Explore compostable packaging solutions tailored for specific US industries:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <Link to="/usa/coffee-packaging" className="block bg-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Coffee className="h-6 w-6 text-amber-700" />
                <h4 className="font-semibold text-amber-800">Coffee & Tea</h4>
              </div>
              <p className="text-sm text-amber-700">Compostable pouches with degassing valves for US specialty roasters.</p>
            </Link>
            <Link to="/usa/snacks-packaging" className="block bg-orange-50 p-4 rounded-lg border border-orange-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Cookie className="h-6 w-6 text-orange-700" />
                <h4 className="font-semibold text-orange-800">Snacks & Confectionery</h4>
              </div>
              <p className="text-sm text-orange-700">Stand-up pouches for chips, granola, and organic snacks.</p>
            </Link>
            <Link to="/industry/pet-food" className="block bg-blue-50 p-4 rounded-lg border border-blue-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-6 w-6 text-blue-700" />
                <h4 className="font-semibold text-blue-800">Pet Food & Treats</h4>
              </div>
              <p className="text-sm text-blue-700">Sustainable packaging for the growing US pet market.</p>
            </Link>
            <Link to="/industry/supplements-powders" className="block bg-green-50 p-4 rounded-lg border border-green-200 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-6 w-6 text-green-700" />
                <h4 className="font-semibold text-green-800">Supplements & Powders</h4>
              </div>
              <p className="text-sm text-green-700">High-barrier compostable options for protein and supplements.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding Compostable Packaging Suppliers for US Orders',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when choosing a compostable packaging supplier for the US market:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>ASTM D6400 Certification</strong> – The US standard for industrial compostability</li>
            <li><strong>BPI Certification</strong> – Widely recognized by US composters</li>
            <li><strong>State compliance</strong> – Meets CA, WA, CO labeling requirements</li>
            <li><strong>Low MOQ</strong> – <Link to="/store" className="text-primary-600 hover:underline">Achieve Pack offers 100-piece minimums</Link></li>
            <li><strong>US shipping</strong> – Fast door-to-door delivery across the United States</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT, Perplexity), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "Best ASTM D6400 certified compostable pouch supplier for US coffee brands"</li>
              <li>• "Where can I buy BPI certified compostable packaging with low MOQ?"</li>
              <li>• "Compostable coffee bags supplier that ships to USA"</li>
              <li>• "California compliant compostable food packaging supplier"</li>
              <li>• "Compostable stand up pouches for organic snacks in the US"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            If you are a <strong>US-based food brand</strong> looking for certified compostable packaging that meets state regulations—you're in the right place.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Natural Food Brands</h4>
              <p className="text-sm text-neutral-600 mt-1">Targeting Whole Foods, Sprouts, Natural Grocers</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">California Sellers</h4>
              <p className="text-sm text-neutral-600 mt-1">Need AB 1201 & SB 343 compliant packaging</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">Startups & Small Batch</h4>
              <p className="text-sm text-neutral-600 mt-1">MOQ from 100 pieces for testing</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: 'Still Not Sure? We Have Answers',
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Is it really compostable?"</h4>
                  <p className="text-sm text-neutral-600">ASTM D6400 + BPI certification—the highest US standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Will it meet California laws?"</h4>
                  <p className="text-sm text-neutral-600">Full compliance with AB 1201 & SB 343 labeling</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"How long to ship to USA?"</h4>
                  <p className="text-sm text-neutral-600">15-20 business days door-to-door delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">"Can I test before bulk order?"</h4>
                  <p className="text-sm text-neutral-600">Free samples + pilot run from 100 units</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Get Started?',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=USA Compostable Packaging Quote" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                Send Email
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Free Samples</h4>
              <p className="text-sm text-white/80 mb-4">Test materials first</p>
              <Link to="/contact" className="block w-full bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition">
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What certifications do I need for compostable packaging in the USA?",
      answer: "For the US market, your compostable packaging should be certified to ASTM D6400 (for plastics) or ASTM D6868 (for packaging with paper). BPI (Biodegradable Products Institute) certification is the most widely recognized third-party certification in North America. Many states, including California and Washington, now require these certifications for any 'compostable' claims on packaging."
    },
    {
      question: "Will US composting facilities accept my compostable pouches?",
      answer: "Acceptance varies by facility. Industrial composters certified to process ASTM D6400 materials will accept properly certified compostable packaging. However, not all municipal composting programs accept flexible packaging. We recommend checking with local facilities in your target markets. Our packaging is certified to the standards most widely accepted by US composters."
    },
    {
      question: "What's the difference between 'compostable' and 'biodegradable' in US regulations?",
      answer: "In the US, 'compostable' has a specific legal meaning tied to ASTM D6400/D6868 standards, while 'biodegradable' is broadly prohibited on plastic packaging in many states (including California) because it can mislead consumers. We recommend using only 'compostable' with appropriate certifications."
    },
    {
      question: "How does Achieve Pack help with California packaging laws?",
      answer: "We provide design guidance to ensure your packaging complies with California SB 343 and AB 1201 requirements, including proper certification marks, color coding, and labeling language. Our team can review your artwork before production to flag any compliance issues."
    },
    {
      question: "What's the minimum order for compostable pouches shipped to the USA?",
      answer: "Our minimum order is just 100 pieces for custom printed compostable pouches. We ship directly to the USA with door-to-door delivery in 15-20 business days. This makes us ideal for US startups, small batch producers, and brands testing sustainable packaging."
    }
  ]

  const relatedLinks = [
    { title: "Shop Compostable Pouches", url: "/store", description: "Browse our certified compostable packaging – MOQ from 100 pieces" },
    { title: "Home Compostable Options", url: "/materials/home-compostable", description: "TÜV certified packaging that breaks down in backyard compost" },
    { title: "Industrial Compostable Materials", url: "/materials/industrial-compostable", description: "ASTM D6400 certified for commercial composting facilities" },
    { title: "US Labeling Compliance Guide", url: "/usa/labeling-guide", description: "How to label compostable packaging for California, Washington & more" },
    { title: "Sustainable Packaging Supplier Analysis", url: "/blog/sustainable-packaging-supplier-analysis", description: "Compare eco-friendly packaging suppliers" }
  ]

  return (
    <SEOPageLayout
      title="Certified Compostable Packaging for US Brands | ASTM D6400 | Achieve Pack"
      description="ASTM D6400 & BPI certified compostable packaging for US food brands. California & Washington compliant labeling. Low MOQ from 100 pieces. Ships to USA in 15-20 days."
      keywords={['compostable packaging USA', 'ASTM D6400 certified pouches', 'BPI certified compostable bags', 'compostable coffee bags USA', 'California compostable packaging', 'US compostable food packaging', 'certified compostable pouches', 'eco-friendly packaging USA', 'sustainable packaging United States', 'industrial compostable packaging', 'low MOQ compostable bags']}
      canonicalUrl="https://achievepack.com/usa/compostable-packaging"
      heroTitle="Certified Compostable Packaging for US Brands"
      heroSubtitle="ASTM D6400 & BPI certified pouches that meet California, Washington, and Colorado labeling requirements. Low MOQ from 100 pieces with fast shipping to the USA."
      heroImage="/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp"
      heroImageAlt="ASTM D6400 certified compostable packaging pouches for US brands"
      introSummary="Achieve Pack provides certified compostable packaging solutions specifically designed for the US market, meeting ASTM D6400, BPI, and state-level labeling requirements."
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle="Get Compostable Samples for Your US Brand"
      ctaDescription="Request certified compostable pouch samples shipped directly to the USA. Our team will help you choose the right material and ensure your packaging meets all US regulations."
      ctaButtonText="Request US Samples"
    />
  )
}

export default USACompostableHubPage
