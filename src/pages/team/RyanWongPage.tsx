import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowLeft, Linkedin, Mail, Award, GraduationCap, Briefcase, Target } from 'lucide-react'
import { authorEntities } from '../../data/schemaEntities'

const RyanWongPage = () => {
  const ryanEntity = authorEntities['founder-ryan']
  
  // Enhanced Person Schema with detailed expertise
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    ...ryanEntity,
    "award": [
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
        <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ryan Wong</h1>
                <p className="text-2xl text-primary-100 mb-4">Packaging Development Specialist</p>
                <p className="text-lg text-primary-200 mb-2">
                  14 years experience | 8 countries | Fortune 500 & DTC startups
                </p>
                <p className="text-md text-primary-300 mb-6">
                  🎓 The Hong Kong Polytechnic University (Honor Degree)
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.linkedin.com/in/ryanwwc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                  <a 
                    href="mailto:ryan@achievepack.com"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition"
                  >
                    <Mail className="h-5 w-5" />
                    Contact
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
                    With <strong>14 years of dedicated experience</strong> in the packaging industry, Ryan Wong has built expertise cooperating with multinational and Fortune 500 companies to achieve mutual beneficial and long-lasting business relationships.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                    Ryan's packaging experience and business relationships span <strong>8 countries</strong>: Australia, Canada, China, Germany, South Africa, Philippines, UK and USA. As a <strong>Hong Kong Polytechnic University Honor Degree</strong> graduate in Global Supply Chain and Business Administration, he combines academic excellence with practical expertise.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                    His objective is to be a <strong>supply chain architect</strong> — with packaging knowledge, IT skills and passion to create irreplaceable values and synergy for all parties throughout the whole supply chain from upstream to downstream.
                  </p>
                  <p className="text-lg text-neutral-800 leading-relaxed">
                    At <Link to="/" className="text-primary-600 hover:underline font-semibold">Achieve Pack</Link>, Ryan specializes in <strong>100% compostable digital print solutions</strong> with industry-leading low MOQ (100-500 pieces), making sustainable packaging accessible to DTC startups and established brands alike. His expertise in <strong>HP Indigo 20000 digital printing</strong> enables 4-day turnaround for urgent orders.
                  </p>
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
              {/* Quick Stats */}
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-bold text-neutral-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary-700">14</div>
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
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Ready to Go Sustainable?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Book a free 30-minute consultation to discuss your packaging needs.
                </p>
                <a 
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-primary-700 text-center px-4 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                >
                  Schedule Meeting
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
