import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, Leaf, Globe, Factory, Home, ExternalLink, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import PouchLayout from '../../components/pouch/PouchLayout'

export default function PouchCertificationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const certifications = [
    {
      name: 'BPI Certified',
      region: 'North America',
      icon: Shield,
      color: '#10b981',
      description: 'Third-party verified compostable by the Biodegradable Products Institute. Your packaging meets ASTM D6400/D6868 standards.',
      standard: 'ASTM D6400 & D6868',
      facility: 'Industrial Composting',
      image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
    },
    {
      name: 'EN 13432',
      region: 'Europe',
      icon: Globe,
      color: '#3b82f6',
      description: 'European standard for compostability. Required for certified compostable packaging in EU markets.',
      standard: 'EN 13432',
      facility: 'Industrial Composting',
      image: '/imgs/4-infograhic/compost.webp'
    },
    {
      name: 'AS 4736',
      region: 'Australia',
      icon: Leaf,
      color: '#f59e0b',
      description: 'Australian standard for biodegradable plastics. Ensures compostability in Australian facilities.',
      standard: 'AS 4736',
      facility: 'Industrial Composting',
      image: '/imgs/material-illustrations/3-compostable-packaging-collage.webp'
    },
    {
      name: 'Home Compostable',
      region: 'Global',
      icon: Home,
      color: '#8b5cf6',
      description: 'Breaks down in your backyard compost pile. Lower temperature and time requirements than industrial.',
      standard: 'TÜV Austria OK compost HOME',
      facility: 'Home Composting',
      image: '/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp'
    }
  ]

  const faqs = [
    {
      question: 'What does "BPI Certified Compostable" mean?',
      answer: 'BPI Certified means your packaging has been independently tested and verified to break down in industrial composting facilities. It meets strict ASTM standards for biodegradation, disintegration, and eco-toxicity. No harmful residues left behind.'
    },
    {
      question: 'Can I compost certified packaging in my backyard?',
      answer: 'Most BPI-certified packaging is designed for industrial composting facilities, which reach higher temperatures (140-160°F) than home compost piles. If you want backyard compostability, look for "Home Compostable" certification (TÜV Austria OK compost HOME).'
    },
    {
      question: 'How do I verify your certifications?',
      answer: 'Visit products.bpiworld.org and search for "Achieve Pack Company" to see all certified SKUs. We provide certification documents with every order. You can also request lab test reports for full transparency.'
    },
    {
      question: 'Why do certifications matter for my brand?',
      answer: 'Certifications provide third-party proof of your sustainability claims. They protect you from greenwashing accusations, build customer trust, and ensure your packaging is actually accepted by composters.'
    },
    {
      question: 'Which certification is best for my market?',
      answer: 'It depends on your region: BPI for North America, EN 13432 for Europe, AS 4736 for Australia. If selling globally, choose packaging that meets multiple standards.'
    },
    {
      question: 'Do you test for PFAS (forever chemicals)?',
      answer: 'Yes! All our certified compostable materials are tested and verified to be PFAS-free. BPI now requires fluorinated chemical restrictions, and we meet those updated standards.'
    }
  ]

  const benefits = [
    {
      title: 'Third-Party Verified',
      icon: CheckCircle,
      description: 'Independent lab testing proves your packaging claims'
    },
    {
      title: 'Customer Trust',
      icon: Award,
      description: 'Certification badges on packaging build immediate credibility'
    },
    {
      title: 'Compost Facility Acceptance',
      icon: Factory,
      description: 'Certified packaging is welcomed by commercial composters'
    },
    {
      title: 'Legal Protection',
      icon: Shield,
      description: 'Avoid greenwashing lawsuits with documented proof'
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>Compostable Certifications Explained | BPI, EN 13432 | POUCH.ECO</title>
        <meta 
          name="description" 
          content="Understand BPI, EN 13432, AS 4736, and home compostable certifications. Learn which certification your eco-friendly packaging needs for North America, Europe, Australia."
        />
        <meta name="keywords" content="BPI certified, EN 13432, AS 4736, home compostable, ASTM D6400, compostable packaging certification" />
        <link rel="canonical" href="https://pouch.eco/certifications" />
        <meta property="og:title" content="Compostable Certifications Explained | POUCH.ECO" />
        <meta property="og:description" content="BPI, EN 13432, AS 4736, Home Compostable - which certification does your packaging need?" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://pouch.eco/certifications" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:20px_20px]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <span className="font-['JetBrains_Mono'] font-bold text-sm">CERTIFIED_COMPOSTABLE</span>
          </div>
          
          <h1 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] mb-6">
            Proof Your<br/>Packaging<br/>
            <span className="text-[#10b981]">Actually Works</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Third-party certifications mean your compostable packaging has been independently tested and verified. 
            No greenwashing, just documented proof.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://products.bpiworld.org/companies/achieve-pack-company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-[#D4FF00] px-6 py-3 border-4 border-black font-['JetBrains_Mono'] font-bold hover:bg-[#D4FF00] hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <ExternalLink className="w-5 h-5" />
              View Our BPI Listing
            </a>
            <a 
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 border-4 border-black font-['JetBrains_Mono'] font-bold hover:bg-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Get Certified
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            4 Main Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F0F0F0] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cert.color }}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl mb-1">{cert.name}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold">{cert.region}</p>
                  </div>
                </div>

                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-48 object-cover border-4 border-black mb-4"
                  loading="lazy"
                />

                <p className="text-lg mb-4">{cert.description}</p>

                <div className="flex gap-2 mb-4">
                  <div className="bg-white border-2 border-black px-3 py-1 text-xs font-['JetBrains_Mono'] font-bold">
                    {cert.standard}
                  </div>
                  <div className="bg-white border-2 border-black px-3 py-1 text-xs font-['JetBrains_Mono'] font-bold">
                    {cert.facility}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            Why Certifications Matter
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <benefit.icon className="w-12 h-12 mb-4" />
                <h3 className="font-black text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            Standards Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">Certification</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">Region</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">Facility Type</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-4 border-black p-4 font-bold">BPI (ASTM D6400)</td>
                  <td className="border-4 border-black p-4">North America</td>
                  <td className="border-4 border-black p-4">Industrial</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-4 border-black p-4 font-bold">EN 13432</td>
                  <td className="border-4 border-black p-4">Europe</td>
                  <td className="border-4 border-black p-4">Industrial</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-4 border-black p-4 font-bold">AS 4736</td>
                  <td className="border-4 border-black p-4">Australia</td>
                  <td className="border-4 border-black p-4">Industrial</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-4 border-black p-4 font-bold">TÜV Austria HOME</td>
                  <td className="border-4 border-black p-4">Global</td>
                  <td className="border-4 border-black p-4">Home Compost</td>
                  <td className="border-4 border-black p-4">70-80°F</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#F0F0F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#D4FF00] transition-colors"
                >
                  <h3 className="font-black text-lg pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 border-t-4 border-black">
                    <p className="text-lg pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl uppercase mb-6">
            Ready to Get Certified?
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            We'll guide you through the certification process and help you choose the right standards for your market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4FF00] text-black px-8 py-4 border-4 border-white font-['JetBrains_Mono'] font-bold hover:bg-[#00FFFF] transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-lg"
            >
              Book Free Consultation
            </a>
            <a 
              href="/materials"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 border-4 border-white font-['JetBrains_Mono'] font-bold hover:bg-[#FF00FF] hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] text-lg"
            >
              Browse Certified Materials
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
