import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Linkedin, Mail, Award, GraduationCap, Briefcase, Target, Globe, Users, Leaf, Calendar, MapPin, Building2 } from 'lucide-react'
import { authorEntities } from '../../data/schemaEntities'

const RyanWongPage = () => {
  const ryanEntity = authorEntities['founder-ryan']
  
  // Enhanced Person Schema with detailed expertise
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...ryanEntity,
    "award": [
      "PolyU Featured Alumni - Young Achievers",
      "Supply Chain Excellence Award",
      "Sustainable Packaging Innovation Leader"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Packaging Development Specialist",
      "occupationLocation": [
        { "@type": "City", "name": "Hong Kong" },
        { "@type": "City", "name": "Shenzhen" }
      ],
      "responsibilities": [
        "Consulting DTC brands on sustainable packaging transitions",
        "Designing 100% compostable digital print solutions",
        "Managing low MOQ production (100-500 pieces) for startups",
        "Supply chain architecture from upstream to downstream",
        "International business development across 8 countries",
        "Ensuring EN 13432 and ASTM D6400 compliance"
      ],
      "skills": [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Supply Chain Management",
        "Digital Printing Technology",
        "Compostable Materials Expertise"
      ]
    }
  }

  return (
    <>
      <Helmet>
        <title>Ryan Wong - Packaging Development Specialist | Achieve Pack</title>
        <meta name="description" content="Ryan Wong, Packaging Development Specialist at Achieve Pack. 14+ years helping DTC coffee, chocolate & tea brands with compostable packaging. Hong Kong Polytechnic University Honor Degree. Expert across 8 countries." />
        <meta name="keywords" content="Ryan Wong, packaging development specialist, compostable packaging expert, DTC packaging, coffee packaging, Hong Kong Polytechnic University, supply chain architect" />
        <link rel="canonical" href="https://achievepack.com/team/ryan-wong" />
        
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ background: 'linear-gradient(to bottom right, #166534, #14532d)' }} className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                  alt="Ryan Wong - Packaging Development Specialist" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'white' }}>Ryan Wong</h1>
                <p className="text-2xl mb-4" style={{ color: 'white' }}>Packaging Development Specialist</p>
                <p className="text-lg mb-2" style={{ color: 'white' }}>
                  14+ years experience | 8 countries | Fortune 500 & DTC startups
                </p>
                <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm" style={{ color: 'white' }}>🎓 PolyU Honor Degree</span>
                  <span className="bg-amber-500/90 px-3 py-1 rounded-full text-sm font-medium" style={{ color: 'white' }}>🏆 PolyU Featured Alumni</span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm" style={{ color: 'white' }}>🌱 Eco Packaging Pioneer</span>
                </div>
                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                  <a 
                    href="https://www.linkedin.com/in/ryanwwc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-lg"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-primary-700">LinkedIn Profile</span>
                  </a>
                  <a 
                    href="mailto:ryan@achievepack.com"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-lg border-2 border-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-primary-700">Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Bio */}
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Ryan</h2>
                
                {/* Exhibition Photo */}
                <div className="mb-6">
                  <img 
                    src="/imgs/team/ryan-in-exhib.webp" 
                    alt="Ryan Wong at Packaging Exhibition" 
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-neutral-500 mt-2 text-center italic">Ryan at international packaging exhibition</p>
                </div>

                <div className="prose prose-neutral max-w-none">
                  <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                    With <strong>14+ years of dedicated experience</strong> in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutually beneficial and long-lasting business relationships.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                    Ryan's packaging experience and business relationships span <strong>8 countries</strong>: Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a <strong>Hong Kong Polytechnic University Honor Degree</strong> graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                    His objective is to be a <strong>supply chain architect</strong> — with packaging knowledge, IT skills and passion to create irreplaceable values and synergy for all parties throughout the whole supply chain from upstream to downstream.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed">
                    As the <strong>Founder of Achieve Pack & Pouch.eco</strong>, Ryan specializes in <strong>100% compostable digital print solutions</strong> with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike. His expertise in <strong>HP Indigo 20000 digital printing</strong> enables 4-day turnaround for urgent orders.
                  </p>
                </div>
              </section>

              {/* Career Journey */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-7 w-7 text-primary-600" />
                  <h2 className="text-3xl font-bold text-neutral-900">Career Journey</h2>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-primary-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white"></div>
                    <div className="mb-1">
                      <span className="text-sm text-primary-600 font-medium">2018 - Present</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">Founder & Packaging Development Specialist</h3>
                    <p className="text-neutral-600 font-medium">Achieve Pack / Pouch.eco</p>
                    <p className="text-neutral-700 mt-2">Founded eco-friendly packaging company focused on compostable and sustainable solutions. Pioneer in digital printing with low MOQ for DTC brands.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-neutral-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-neutral-400 rounded-full border-4 border-white"></div>
                    <div className="mb-1">
                      <span className="text-sm text-neutral-500 font-medium">2010 - 2018</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">Senior Packaging Consultant</h3>
                    <p className="text-neutral-600 font-medium">Fortune 500 & Multinational Companies</p>
                    <p className="text-neutral-700 mt-2">Developed supply chain strategies and packaging solutions for international brands across 8 countries.</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-neutral-200">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-neutral-400 rounded-full border-4 border-white"></div>
                    <div className="mb-1">
                      <span className="text-sm text-neutral-500 font-medium">1999 - 2003</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">Bachelor's Degree (Honors)</h3>
                    <p className="text-neutral-600 font-medium">The Hong Kong Polytechnic University</p>
                    <p className="text-neutral-700 mt-2">Global Supply Chain Management & Business Administration</p>
                  </div>
                </div>
              </section>

              {/* Expertise Areas */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-7 w-7 text-primary-600" />
                  <h2 className="text-3xl font-bold text-neutral-900">Core Expertise</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Compostable coffee pouches for DTC brands',
                    'Chocolate & confectionery packaging',
                    'Tea packaging (loose leaf & sachets)',
                    'E-commerce & subscription box solutions',
                    'EN 13432 & ASTM D6400 compliance',
                    'BPI & TÜV certification guidance',
                    'Food-contact safe materials',
                    'Low MOQ sustainable solutions',
                    'Transition planning from plastic',
                    'Barrier technology for food products',
                    'Degassing valves for coffee',
                    'Stand-up pouch design optimization'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span className="text-neutral-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Case Studies */}
              <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Client Success Stories</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      <Link to="/case-studies/coffee-roastery" className="hover:text-primary-600 transition">
                        Bean & Bole Coffee Roastery
                      </Link>
                    </h3>
                    <p className="text-neutral-700">Helped Portland-based specialty roaster switch to EN 13432 certified compostable pouches with degassing valves. Achieved 35% increase in customer satisfaction.</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      <Link to="/case-studies/tea-brand" className="hover:text-primary-600 transition">
                        Milano Botanica Tea
                      </Link>
                    </h3>
                    <p className="text-neutral-700">Developed compostable window packaging for luxury tea brand. EU PPWR compliant solution increased sales by 28%.</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      <Link to="/case-studies/chocolate-brand" className="hover:text-primary-600 transition">
                        Artisan Cocoa Emirates
                      </Link>
                    </h3>
                    <p className="text-neutral-700">Created heat-resistant recyclable mono-PP pouches for UAE chocolate brand. Gift sales up 55%.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* PolyU Alumni Badge */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-6 w-6 text-amber-600" />
                  <h3 className="font-bold text-neutral-900">Recognition</h3>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-100">
                  <div className="text-amber-700 font-bold text-lg mb-1">PolyU Featured Alumni</div>
                  <div className="text-sm text-neutral-600">Young Achievers Program</div>
                  <div className="text-xs text-neutral-500 mt-2">Recognized for contributions to sustainable packaging innovation</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-bold text-neutral-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary-700">14+</div>
                    <div className="text-sm text-neutral-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">8</div>
                    <div className="text-sm text-neutral-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">100</div>
                    <div className="text-sm text-neutral-600">Minimum Order Qty</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">4</div>
                    <div className="text-sm text-neutral-600">Days Rush Production</div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-primary-600" />
                  <h3 className="font-bold text-neutral-900">Industry Focus</h3>
                </div>
                <div className="space-y-2">
                  <div className="bg-neutral-50 px-3 py-2 rounded-lg text-sm">☕ Coffee & Espresso</div>
                  <div className="bg-neutral-50 px-3 py-2 rounded-lg text-sm">🍫 Chocolate & Confectionery</div>
                  <div className="bg-neutral-50 px-3 py-2 rounded-lg text-sm">🍵 Tea & Herbal Blends</div>
                  <div className="bg-neutral-50 px-3 py-2 rounded-lg text-sm">📦 Subscription Boxes</div>
                  <div className="bg-neutral-50 px-3 py-2 rounded-lg text-sm">🌿 Organic & Natural Products</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary-600" />
                  <h3 className="font-bold text-neutral-900">Education & Skills</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-neutral-900">The Hong Kong Polytechnic University</div>
                    <div className="text-sm text-neutral-600">Honor Degree (1999-2003)</div>
                    <div className="text-sm text-neutral-500">Global Supply Chain, Business Administration</div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm font-semibold text-neutral-700 mb-2">Technical Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-neutral-100 px-2 py-1 rounded text-xs">Adobe Photoshop</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded text-xs">Adobe Illustrator</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded text-xs">HP Indigo 20000</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded text-xs">Supply Chain Mgmt</span>
                      <span className="bg-neutral-100 px-2 py-1 rounded text-xs">Digital Printing</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm font-semibold text-neutral-700 mb-2">Certifications Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">EN 13432</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">ASTM D6400</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">BPI Certified</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">TÜV OK Compost</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Network */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-primary-600" />
                  <h3 className="font-bold text-neutral-900">Global Network</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5"><span>🇦🇺</span> Australia</div>
                  <div className="flex items-center gap-1.5"><span>🇨🇦</span> Canada</div>
                  <div className="flex items-center gap-1.5"><span>🇨🇳</span> China</div>
                  <div className="flex items-center gap-1.5"><span>🇩🇪</span> Germany</div>
                  <div className="flex items-center gap-1.5"><span>🇿🇦</span> South Africa</div>
                  <div className="flex items-center gap-1.5"><span>🇵🇭</span> Philippines</div>
                  <div className="flex items-center gap-1.5"><span>🇬🇧</span> UK</div>
                  <div className="flex items-center gap-1.5"><span>🇺🇸</span> USA</div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-3" style={{ color: 'white' }}>Ready to Go Sustainable?</h3>
                <p className="text-sm mb-4" style={{ color: 'white' }}>
                  Book a free 30-minute consultation to discuss your packaging needs.
                </p>
                <a 
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-primary-700 text-center px-4 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition shadow-md"
                >
                  <span className="text-primary-700 font-bold">Schedule Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RyanWongPage
