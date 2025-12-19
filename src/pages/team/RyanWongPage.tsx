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
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Business Management"
    },
    "award": [
      "Sustainable Packaging Innovation Award 2023",
      "DTC Brand Partner of Excellence"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Sustainable Packaging Consultant",
      "occupationLocation": {
        "@type": "City",
        "name": "Shenzhen"
      },
      "responsibilities": [
        "Consulting DTC brands on sustainable packaging transitions",
        "Designing compostable and recyclable pouch solutions",
        "Managing low MOQ production for startups",
        "Ensuring EN 13432 and ASTM D6400 compliance"
      ]
    }
  }

  return (
    <>
      <Helmet>
        <title>Ryan Wong - Sustainable Packaging Expert | Achieve Pack</title>
        <meta name="description" content="Ryan Wong, founder of Achieve Pack. 10+ years helping DTC coffee, chocolate & tea brands transition to compostable packaging. Expert in EN 13432, ASTM D6400, low MOQ solutions." />
        <meta name="keywords" content="Ryan Wong, sustainable packaging expert, compostable packaging consultant, DTC packaging, coffee packaging specialist" />
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
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-6xl font-bold text-primary-700">
                  RW
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ryan Wong</h1>
                <p className="text-2xl text-primary-100 mb-4">Founder & Sustainable Packaging Expert</p>
                <p className="text-lg text-primary-200 mb-6">
                  Helping DTC coffee, chocolate & tea brands transition to compostable packaging
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
                <div className="prose prose-neutral max-w-none">
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    With over 10 years of experience in sustainable flexible packaging and B2B e-commerce, Ryan Wong has become a trusted advisor for DTC brands looking to make the switch from conventional plastic to eco-friendly packaging solutions.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                    As the founder of <Link to="/" className="text-primary-600 hover:underline font-semibold">Achieve Pack</Link>, Ryan specializes in helping coffee roasters, chocolate makers, and tea brands navigate the complex world of compostable and recyclable packaging. His expertise in low MOQ solutions makes sustainable packaging accessible even to small startups and subscription box businesses.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Ryan's hands-on approach combines technical knowledge of materials science with practical business acumen, ensuring clients not only get compliant packaging but also packaging that enhances their brand and fits their budget.
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
                      <span className="text-neutral-700">{skill}</span>
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
                    <p className="text-neutral-600">Helped Portland-based specialty roaster switch to EN 13432 certified compostable pouches with degassing valves. Achieved 35% increase in customer satisfaction.</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      <Link to="/case-studies/tea-brand" className="hover:text-primary-600 transition">
                        Milano Botanica Tea
                      </Link>
                    </h3>
                    <p className="text-neutral-600">Developed compostable window packaging for luxury tea brand. EU PPWR compliant solution increased sales by 28%.</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                      <Link to="/case-studies/chocolate-brand" className="hover:text-primary-600 transition">
                        Artisan Cocoa Emirates
                      </Link>
                    </h3>
                    <p className="text-neutral-600">Created heat-resistant recyclable mono-PP pouches for UAE chocolate brand. Gift sales up 55%.</p>
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
                    <div className="text-3xl font-bold text-primary-700">10+</div>
                    <div className="text-sm text-neutral-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">500+</div>
                    <div className="text-sm text-neutral-600">DTC Brands Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700">100</div>
                    <div className="text-sm text-neutral-600">Minimum Order Qty</div>
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
                  <Award className="h-5 w-5 text-primary-600" />
                  <h3 className="font-bold text-neutral-900">Certifications</h3>
                </div>
                <div className="space-y-2 text-sm text-neutral-700">
                  <div>✓ EN 13432 Compliance Expert</div>
                  <div>✓ ASTM D6400 Certified</div>
                  <div>✓ BPI Compostable Standards</div>
                  <div>✓ FDA Food Contact Approved</div>
                  <div>✓ EU PPWR Compliance</div>
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
