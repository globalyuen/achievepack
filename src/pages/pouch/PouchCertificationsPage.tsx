import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, Leaf, Globe, Factory, Home, ExternalLink, ChevronDown, Recycle } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'

export default function PouchCertificationsPage() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const certifications = [
    {
      name: 'DIN TRUST',
      region: 'Europe/Global',
      icon: Leaf,
      color: '#10b981',
      description: 'DIN Geprüft Home Compostable certification. Verified for backyard composting.',
      standard: 'NF T51-800',
      facility: 'Home Composting',
      image: '/imgs/cert/cert-din-home-compost.png'
    },
    {
      name: 'BPI Certified',
      region: 'North America',
      icon: Shield,
      color: '#10b981',
      description: 'Third-party verified compostable by the Biodegradable Products Institute. Meets ASTM D6400/D6868.',
      standard: 'ASTM D6400',
      facility: 'Industrial Composting',
      image: '/imgs/company/bpi/bpi.svg',
      listingUrl: 'https://products.bpiworld.org/companies/achieve-pack-company',
      downloadUrl: '/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf'
    },
    {
      name: 'ABA Home Compost',
      region: 'Australia',
      icon: Globe,
      color: '#f59e0b',
      description: 'Australasian Bioplastics Association Home Compostable Verification. The gold standard in AU.',
      standard: 'AS 5810',
      facility: 'Home Composting',
      image: '/imgs/cert/cert-ABA-as5810.png'
    },
    {
      name: 'GRS Certified',
      region: 'Global',
      icon: Recycle,
      color: '#3b82f6',
      description: 'Global Recycled Standard. Verifies recycled content (PCR) and responsible social/environmental practices.',
      standard: 'GRS 4.0',
      facility: 'Recycling Stream',
      image: '/imgs/cert/cert-pcr-grs.webp'
    },
    {
      name: 'Bio-based PE',
      region: 'Global',
      icon: Leaf,
      color: '#8b5cf6',
      description: 'Verified bio-based carbon content from renewable resources like sugarcane.',
      standard: 'ASTM D6866',
      facility: 'Recycling Stream',
      image: '/imgs/cert/cert-BioPE.webp'
    },
    {
      name: 'FSC Certified',
      region: 'Global',
      icon: Leaf,
      color: '#059669',
      description: 'Forest Stewardship Council. Ensures paper comes from responsibly managed forests.',
      standard: 'FSC Mix',
      facility: 'Paper Recycling',
      image: '/imgs/cert/cert-fsc.png'
    },
    {
      name: 'ISO 9001/14001',
      region: 'Global',
      icon: Factory,
      color: '#6b7280',
      description: 'International standards for Quality Management and Environmental Management Systems.',
      standard: 'ISO 9001/14001',
      facility: 'Manufacturing',
      image: '/imgs/cert/cert-ISO14001-cert.webp'
    },
    {
      name: 'BRC Packaging',
      region: 'Global',
      icon: Shield,
      color: '#dc2626',
      description: 'BRCGS Packaging Materials Standard. Globally recognized certification ensuring safety, quality, and legality of packaging materials for food and consumer products.',
      standard: 'BRCGS Issue 6',
      facility: 'Food Safety',
      image: '/imgs/cert/cert-brc.webp'
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
    },
    {
      question: 'What is BRC Packaging certification?',
      answer: 'BRC (BRCGS) Packaging Materials is a globally recognized food safety certification standard. It ensures our manufacturing facility meets rigorous requirements for hygiene, quality management, product safety, and process control. This certification is often required by major retailers and food brands to ensure packaging materials are safe for food contact.'
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
        <title>{t('pouchCertificationsPage.meta.title')}</title>
        <meta 
          name="description" 
          content={t('pouchCertificationsPage.meta.description')}
        />
        <meta name="keywords" content={t('pouchCertificationsPage.meta.keywords')} />
        <link rel="canonical" href="https://pouch.eco/certifications" />
        <meta property="og:title" content={t('pouchCertificationsPage.meta.ogTitle')} />
        <meta property="og:description" content={t('pouchCertificationsPage.meta.ogDescription')} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://pouch.eco/certifications" />
      </Helmet>

      {/* Hero Section with Video Background */}
      <section className="relative pt-12 pb-16 px-4 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            key="hero-video-certifications"
          >
            <source src="/video/pouch-eco-marketing-videos/Brand.mp4" type="video/mp4" />
          </video>
          {/* Liquid Glass Effect Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-80" />
        </div>

        <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[#D4FF00] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <span className="font-['JetBrains_Mono'] font-bold text-sm">{t('pouchCertificationsPage.hero.badge')}</span>
          </div>
          
          <h1 className="font-black text-5xl md:text-7xl uppercase leading-[0.9] mb-6">
            {t('pouchCertificationsPage.hero.titleLine1')}<br/>
            {t('pouchCertificationsPage.hero.titleLine2')}<br/>
            <span className="text-[#10b981]">{t('pouchCertificationsPage.hero.titleLine3')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            {t('pouchCertificationsPage.hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <NeoButton 
              href="https://products.bpiworld.org/companies/achieve-pack-company"
              variant="dark"
              className="!text-[#D4FF00]"
            >
              <ExternalLink className="w-5 h-5 mr-2 inline-block" />
              {t('pouchCertificationsPage.hero.viewBpiListing')}
            </NeoButton>
            <NeoButton 
              href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf"
              className="bg-[#10b981] !text-white !border-black"
            >
              <ExternalLink className="w-5 h-5 mr-2 inline-block" />
              {t('pouchCertificationsPage.hero.downloadBpiCert')}
            </NeoButton>
            <NeoButton 
              href="https://calendly.com/30-min-free-packaging-consultancy"
              variant="secondary"
            >
              {t('pouchCertificationsPage.hero.getCertified')}
            </NeoButton>
          </div>
        </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            {t('pouchCertificationsPage.certifications.heading')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <NeoCard
                key={idx}
                className="flex flex-col h-full bg-[#F0F0F0]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-16 h-16 border-4 border-black flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cert.color }}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl mb-1">{t(`pouchCertificationsPage.certifications.items.${idx}.name`)}</h3>
                    <p className="font-['JetBrains_Mono'] text-sm font-bold">{t(`pouchCertificationsPage.certifications.items.${idx}.region`)}</p>
                  </div>
                </div>

                <img 
                  src={cert.image} 
                  alt={t(`pouchCertificationsPage.certifications.items.${idx}.name`)}
                  className="w-full h-64 object-contain bg-white border-4 border-black mb-4 p-4"
                  loading="lazy"
                />

                <p className="text-lg mb-4">{t(`pouchCertificationsPage.certifications.items.${idx}.description`)}</p>

                <div className="flex gap-2 mb-4">
                  <NeoBadge color="bg-white">{cert.standard}</NeoBadge>
                  <NeoBadge color="bg-white">{t(`pouchCertificationsPage.certifications.items.${idx}.facility`)}</NeoBadge>
                </div>

                {cert.downloadUrl ? (
                  <div className="flex gap-2 mb-4 mt-auto">
                    <NeoButton 
                      href={cert.listingUrl} 
                      variant="dark"
                      className="flex-1 !text-[#D4FF00] !py-2 !text-xs"
                    >
                      {t('pouchCertificationsPage.certifications.listing')}
                    </NeoButton>
                    <NeoButton 
                      href={cert.downloadUrl} 
                      className="flex-1 !bg-[#10b981] !text-white !py-2 !text-xs !border-black"
                    >
                      {t('pouchCertificationsPage.certifications.download')}
                    </NeoButton>
                  </div>
                ) : null}
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#D4FF00]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            {t('pouchCertificationsPage.benefits.heading')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <NeoCard
                key={idx}
                className="bg-white"
              >
                <benefit.icon className="w-12 h-12 mb-4" />
                <h3 className="font-black text-xl mb-2">{t(`pouchCertificationsPage.benefits.items.${idx}.title`)}</h3>
                <p className="text-sm">{t(`pouchCertificationsPage.benefits.items.${idx}.description`)}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            {t('pouchCertificationsPage.standards.heading')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-4 border-black">
              <thead>
                <tr className="bg-black text-[#D4FF00]">
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">{t('pouchCertificationsPage.standards.thCertification')}</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">{t('pouchCertificationsPage.standards.thRegion')}</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">{t('pouchCertificationsPage.standards.thFacilityType')}</th>
                  <th className="border-4 border-black p-4 text-left font-['JetBrains_Mono'] font-bold">{t('pouchCertificationsPage.standards.thTemperature')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-4 border-black p-4 font-bold">BPI (ASTM D6400)</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.0.region')}</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.0.facility')}</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-4 border-black p-4 font-bold">EN 13432</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.1.region')}</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.1.facility')}</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-4 border-black p-4 font-bold">AS 4736</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.2.region')}</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.2.facility')}</td>
                  <td className="border-4 border-black p-4">140-160°F</td>
                </tr>
                <tr className="bg-[#F0F0F0]">
                  <td className="border-4 border-black p-4 font-bold">TÜV Austria HOME</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.3.region')}</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.3.facility')}</td>
                  <td className="border-4 border-black p-4">70-80°F</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-4 border-black p-4 font-bold">BRC Packaging</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.4.region')}</td>
                  <td className="border-4 border-black p-4">{t('pouchCertificationsPage.standards.rows.4.facility')}</td>
                  <td className="border-4 border-black p-4">N/A</td>
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
            {t('pouchCertificationsPage.faqs.heading')}
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <NeoCard
                key={idx}
                className="!p-0 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#D4FF00] transition-colors"
                >
                  <h3 className="font-black text-lg pr-4">{t(`pouchCertificationsPage.faqs.${idx}.question`)}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 border-t-4 border-black">
                    <p className="text-lg pt-4">{t(`pouchCertificationsPage.faqs.${idx}.answer`)}</p>
                  </div>
                )}
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
            {t('pouchCertificationsPage.viewCertificates.heading')}
          </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="text-center group">
                 <img src="/imgs/cert/cert-din-home-compost.png" alt={t('pouchCertificationsPage.viewCertificates.dinHomeCompost')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.dinHomeCompost')}</p>
               </div>
                <a 
                  href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-center group block"
                >
                  <img src="/imgs/company/bpi/bpi.svg" alt={t('pouchCertificationsPage.viewCertificates.bpiCompostable')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                  <p className="mt-2 font-bold group-hover:text-[#10b981]">{t('pouchCertificationsPage.viewCertificates.bpiCompostable')}</p>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t('pouchCertificationsPage.viewCertificates.downloadLabel')}</span>
                </a>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-ABA-as5810.png" alt={t('pouchCertificationsPage.viewCertificates.abaAs5810')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.abaAs5810')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-pcr-grs.webp" alt={t('pouchCertificationsPage.viewCertificates.grsRecycled')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.grsRecycled')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-BioPE.webp" alt={t('pouchCertificationsPage.viewCertificates.bioBasedPe')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.bioBasedPe')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-fsc.png" alt={t('pouchCertificationsPage.viewCertificates.fscMix')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.fscMix')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-ISO9001.webp" alt={t('pouchCertificationsPage.viewCertificates.iso9001')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.iso9001')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-ISO14001-cert.webp" alt={t('pouchCertificationsPage.viewCertificates.iso14001')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.iso14001')}</p>
               </div>
               <div className="text-center group">
                 <img src="/imgs/cert/cert-brc.webp" alt={t('pouchCertificationsPage.viewCertificates.brcPackaging')} className="h-32 w-auto object-contain mx-auto border-4 border-transparent group-hover:border-black transition-all p-2" />
                 <p className="mt-2 font-bold">{t('pouchCertificationsPage.viewCertificates.brcPackaging')}</p>
               </div>
             </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-6xl uppercase mb-6">
            {t('pouchCertificationsPage.cta.heading')}
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            {t('pouchCertificationsPage.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NeoButton 
              href="https://calendly.com/30-min-free-packaging-consultancy"
              className="text-lg"
            >
              {t('pouchCertificationsPage.cta.bookConsultation')}
            </NeoButton>
            <NeoButton 
              to="/materials"
              variant="secondary"
              className="text-lg"
            >
              {t('pouchCertificationsPage.cta.browseMaterials')}
            </NeoButton>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
