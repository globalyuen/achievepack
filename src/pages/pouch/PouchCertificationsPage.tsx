import { Link } from 'react-router-dom'
import DualDomainSEOHead from '../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, Leaf, Globe, Factory, Home, ExternalLink, ChevronDown, Recycle, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PouchLayout from '../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { isPouch } from '../../utils/domain'
import SiteHeader from '../../components/SiteHeader'
import Footer from '../../components/Footer'

const localTranslations = {
  en: {
    problemsHeading: "5 Common Pouch Certification Problems (And Solutions)",
    problems: [
      {
        title: "1. Navigating Complex Regional Standards",
        pain: "Different markets require different certifications (BPI in NA, EN 13432 in EU, AS 4736 in AU).",
        solution: "Unified material engineering that meets multiple standards globally, simplifying compliance."
      },
      {
        title: "2. Balancing Barrier Properties with Compostability",
        pain: "High barrier requirements often conflict with the need for materials to break down in compost facilities.",
        solution: "Multi-layer high-barrier bio-based films that pass disintegration tests while keeping moisture/oxygen out."
      },
      {
        title: "3. Ink and Adhesive Toxicity",
        pain: "Standard inks and adhesives can fail ecotoxicity tests, preventing certification.",
        solution: "Utilizing verified water-based inks and solvent-free compostable adhesives that leave no harmful residues."
      },
      {
        title: "4. Shelf-Life Limitations of Certified Materials",
        pain: "Compostable materials may degrade too quickly, limiting product shelf life.",
        solution: "Specialized laminate structures to extend shelf life without compromising end-of-life biodegradability."
      },
      {
        title: "5. High Cost and Long Timeline of Certification",
        pain: "The certification process can be prohibitively expensive and time-consuming for brands.",
        solution: "Using pre-certified material structures to bypass lengthy testing phases and reduce costs."
      }
    ]
  },
  es: {
    problemsHeading: "5 Problemas Comunes de Certificación (y Soluciones)",
    problems: [
      {
        title: "1. Navegar por estándares regionales complejos",
        pain: "Diferentes mercados requieren diferentes certificaciones (BPI en Norteamérica, EN 13432 en Europa, AS 4736 en Australia).",
        solution: "Ingeniería de materiales unificada que cumple con múltiples estándares a nivel mundial."
      },
      {
        title: "2. Equilibrar las propiedades de barrera con la compostabilidad",
        pain: "Los requisitos de alta barrera a menudo entran en conflicto con la necesidad de que los materiales se descompongan.",
        solution: "Películas multicapa de base biológica de alta barrera que superan las pruebas de desintegración."
      },
      {
        title: "3. Toxicidad de tintas y adhesivos",
        pain: "Las tintas y adhesivos estándar pueden no superar las pruebas de ecotoxicidad.",
        solution: "Uso de tintas a base de agua verificadas y adhesivos compostables sin disolventes."
      },
      {
        title: "4. Limitaciones de vida útil de los materiales certificados",
        pain: "Los materiales compostables pueden degradarse demasiado rápido, limitando la vida útil del producto.",
        solution: "Estructuras laminadas especializadas para extender la vida útil sin comprometer la biodegradabilidad."
      },
      {
        title: "5. Alto costo y largo tiempo del proceso",
        pain: "El proceso de certificación puede ser prohibitivamente costoso y llevar mucho tiempo.",
        solution: "Uso de estructuras de materiales precertificadas para evitar largas fases de prueba y reducir costos."
      }
    ]
  },
  fr: {
    problemsHeading: "5 Problèmes Courants de Certification (Et Solutions)",
    problems: [
      {
        title: "1. Naviguer dans des normes régionales complexes",
        pain: "Différents marchés exigent différentes certifications (BPI en AN, EN 13432 en UE, AS 4736 en AU).",
        solution: "Ingénierie des matériaux unifiée répondant à de multiples normes mondiales."
      },
      {
        title: "2. Équilibrer les propriétés barrières et la compostabilité",
        pain: "Les exigences de haute barrière entrent souvent en conflit avec la nécessité pour les matériaux de se décomposer.",
        solution: "Films biosourcés multicouches à haute barrière qui réussissent les tests de désintégration."
      },
      {
        title: "3. Toxicité des encres et des adhésifs",
        pain: "Les encres et adhésifs standards peuvent échouer aux tests d'écotoxicité.",
        solution: "Utilisation d'encres à l'eau vérifiées et d'adhésifs compostables sans solvant."
      },
      {
        title: "4. Limites de durée de conservation",
        pain: "Les matériaux compostables peuvent se dégrader trop rapidement, limitant la durée de conservation.",
        solution: "Structures stratifiées spécialisées pour prolonger la durée de conservation sans compromettre la biodégradabilité."
      },
      {
        title: "5. Coût élevé et délais longs",
        pain: "Le processus de certification peut être très coûteux et prendre beaucoup de temps.",
        solution: "Utilisation de structures de matériaux pré-certifiées pour contourner les longues phases de test."
      }
    ]
  },
  'zh-TW': {
    problemsHeading: "5 個常見的認證問題（與解決方案）",
    problems: [
      {
        title: "1. 應對複雜的區域標準",
        pain: "不同市場需要不同的認證（北美的 BPI，歐洲的 EN 13432，澳洲的 AS 4736）。",
        solution: "符合全球多項標準的統一材料工程，簡化合規性。"
      },
      {
        title: "2. 在阻隔性能與可堆肥性之間取得平衡",
        pain: "高阻隔要求通常與材料在堆肥設施中分解的需求相衝突。",
        solution: "通過崩解測試的高阻隔多層生物基薄膜，同時隔絕水分和氧氣。"
      },
      {
        title: "3. 油墨和黏合劑毒性",
        pain: "標準油墨和黏合劑可能無法通過生態毒性測試，從而無法獲得認證。",
        solution: "使用經過驗證的水性油墨和無溶劑可堆肥黏合劑，不殘留有害物質。"
      },
      {
        title: "4. 認證材料的保質期限制",
        pain: "可堆肥材料可能降解過快，限制了產品的保質期。",
        solution: "採用專門的複合結構，在不影響使用後生物降解性的情況下延長保質期。"
      },
      {
        title: "5. 認證過程成本高且耗時長",
        pain: "對品牌而言，認證過程可能成本高昂且非常耗時。",
        solution: "使用預先認證的材料結構，以避開漫長的測試階段並降低成本。"
      }
    ]
  }
}

export default function PouchCertificationsPage() {
  const { t, i18n } = useTranslation()
  const lang = (i18n.language as keyof typeof localTranslations) || 'en'
  const currentTranslations = localTranslations[lang] || localTranslations.en
  const isB2C = isPouch()
  
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

  if (isB2C) {
    return (
      <PouchLayout>
        <DualDomainSEOHead
          title={t('pouchCertificationsPage.meta.title')}
          description={t('pouchCertificationsPage.meta.description')}
          keywords={t('pouchCertificationsPage.meta.keywords', '').split(',').map(k => k.trim()).filter(Boolean)}
        />

        {/* Hero Section with Video Background */}
        <section className="relative pt-12 pb-16 px-4 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video muted={true}
              autoPlay
              loop
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
                    <th className="border-4 border-black p-4 text-left font-['Space_Grotesk'] font-bold">{t('pouchCertificationsPage.standards.thCertification')}</th>
                    <th className="border-4 border-black p-4 text-left font-['Space_Grotesk'] font-bold">{t('pouchCertificationsPage.standards.thRegion')}</th>
                    <th className="border-4 border-black p-4 text-left font-['Space_Grotesk'] font-bold">{t('pouchCertificationsPage.standards.thFacilityType')}</th>
                    <th className="border-4 border-black p-4 text-left font-['Space_Grotesk'] font-bold">{t('pouchCertificationsPage.standards.thTemperature')}</th>
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

        {/* 5 Common Problems */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase text-center mb-12">
              {currentTranslations.problemsHeading}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {currentTranslations.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="bg-[#F0F0F0] p-6 border-4 border-black">
                    <h3 className="font-black text-xl mb-3">{prob.title}</h3>
                    <div className="flex gap-3 mb-3 text-red-600">
                      <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                      <p><strong>Pain Point:</strong> {prob.pain}</p>
                    </div>
                    <div className="flex gap-3 text-green-700">
                      <Lightbulb className="w-6 h-6 flex-shrink-0" />
                      <p><strong>Solution:</strong> {prob.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative">
                <img 
                  src="/imgs/knowledge/pouch-certifications-pain-points.jpg" 
                  alt="Pouch Certification Pain Points"
                  className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  loading="lazy"
                />
              </div>
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

  // Achieve Pack (AP) B2B Layout
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-grow">
        <DualDomainSEOHead
          title={t('pouchCertificationsPage.meta.title')}
          description={t('pouchCertificationsPage.meta.description')}
          keywords={t('pouchCertificationsPage.meta.keywords', '').split(',').map(k => k.trim()).filter(Boolean)}
        />

        {/* B2B Hero Section */}
        <section className="bg-neutral-900 text-white py-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.08),transparent_50%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                  <Shield className="w-3.5 h-3.5" /> {t('pouchCertificationsPage.hero.badge', 'VERIFIED_COMPLIANCE')}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                  {t('pouchCertificationsPage.hero.titleLine1', 'Verified Packaging')}<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                    {t('pouchCertificationsPage.hero.titleLine3', 'Certifications & Compliance')}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl leading-relaxed">
                  {t('pouchCertificationsPage.hero.subtitle', 'Third-party verified certifications for composting, food safety, and circular recycling. We provide all official receipts with your order.')}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="https://products.bpiworld.org/companies/achieve-pack-company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('pouchCertificationsPage.hero.viewBpiListing', 'View BPI Listing')}
                  </a>
                  <a 
                    href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-neutral-700 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('pouchCertificationsPage.hero.downloadBpiCert', 'Download Certificate')}
                  </a>
                  <a 
                    href="https://calendly.com/30-min-free-packaging-consultancy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-neutral-800 text-neutral-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                  >
                    {t('pouchCertificationsPage.hero.getCertified', 'Book Consultation')}
                  </a>
                </div>
              </div>
              <div className="md:col-span-4 relative flex justify-center">
                <div className="relative group max-w-[280px]">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                  <div className="relative bg-neutral-950/60 backdrop-blur-xl border border-neutral-800 p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="text-xl font-bold text-white mb-2">BPI Certified</div>
                    <div className="text-sm text-neutral-400">Achieve Pack packaging materials meet rigorous standards for compostability.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('pouchCertificationsPage.certifications.heading', 'Our Certifications & Compliance')}
              </h2>
              <p className="text-neutral-600">
                Browse our third-party certifications and compliance declarations verified by international testing bodies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex flex-col h-full bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                      style={{ backgroundColor: cert.color }}
                    >
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900">{t(`pouchCertificationsPage.certifications.items.${idx}.name`)}</h3>
                      <p className="text-xs text-neutral-500 font-medium">{t(`pouchCertificationsPage.certifications.items.${idx}.region`)}</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 flex items-center justify-center h-48 mb-4">
                    <img 
                      src={cert.image} 
                      alt={t(`pouchCertificationsPage.certifications.items.${idx}.name`)}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-sm text-neutral-600 mb-6 flex-grow">{t(`pouchCertificationsPage.certifications.items.${idx}.description`)}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-neutral-100 text-neutral-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">{cert.standard}</span>
                    <span className="bg-neutral-100 text-neutral-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">{t(`pouchCertificationsPage.certifications.items.${idx}.facility`)}</span>
                  </div>

                  {cert.downloadUrl ? (
                    <div className="flex gap-3">
                      <a 
                        href={cert.listingUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
                      >
                        {t('pouchCertificationsPage.certifications.listing', 'View Listing')}
                      </a>
                      <a 
                        href={cert.downloadUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
                      >
                        {t('pouchCertificationsPage.certifications.download', 'Download PDF')}
                      </a>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('pouchCertificationsPage.benefits.heading', 'Why Certified Packaging Matters')}
              </h2>
              <p className="text-neutral-600">
                Why certified packaging is critical for modern sustainable brands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-3">{t(`pouchCertificationsPage.benefits.items.${idx}.title`)}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{t(`pouchCertificationsPage.benefits.items.${idx}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Comparison Table */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('pouchCertificationsPage.standards.heading', 'Standards & Specifications')}
              </h2>
              <p className="text-neutral-600">
                Understand the differences between major regional and international packaging standards.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="p-4 text-left font-semibold text-sm">{t('pouchCertificationsPage.standards.thCertification', 'Certification Standard')}</th>
                    <th className="p-4 text-left font-semibold text-sm">{t('pouchCertificationsPage.standards.thRegion', 'Primary Region')}</th>
                    <th className="p-4 text-left font-semibold text-sm">{t('pouchCertificationsPage.standards.thFacilityType', 'Facility Type')}</th>
                    <th className="p-4 text-left font-semibold text-sm">{t('pouchCertificationsPage.standards.thTemperature', 'Composting Temperature')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 text-sm">
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-bold text-neutral-950">BPI (ASTM D6400)</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.0.region', 'North America')}</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.0.facility', 'Industrial')}</td>
                    <td className="p-4">140-160°F</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-bold text-neutral-950">EN 13432</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.1.region', 'Europe')}</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.1.facility', 'Industrial')}</td>
                    <td className="p-4">140-160°F</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-bold text-neutral-950">AS 4736</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.2.region', 'Australia')}</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.2.facility', 'Industrial')}</td>
                    <td className="p-4">140-160°F</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-bold text-neutral-950">TÜV Austria HOME</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.3.region', 'Global')}</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.3.facility', 'Home / Backyard')}</td>
                    <td className="p-4">70-80°F</td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-bold text-neutral-950">BRC Packaging</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.4.region', 'Global')}</td>
                    <td className="p-4">{t('pouchCertificationsPage.standards.rows.4.facility', 'Food Safety')}</td>
                    <td className="p-4">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5 Common Problems */}
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {currentTranslations.problemsHeading}
              </h2>
              <p className="text-neutral-600">
                How we overcome the technical challenges associated with certified materials.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {currentTranslations.problems.map((prob: any, idx: number) => (
                  <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                    <h3 className="font-bold text-lg text-neutral-900 mb-3">{prob.title}</h3>
                    <div className="flex gap-3 mb-2 text-rose-600 text-sm">
                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                      <p><strong>Pain Point:</strong> {prob.pain}</p>
                    </div>
                    <div className="flex gap-3 text-emerald-600 text-sm">
                      <Lightbulb className="w-5 h-5 flex-shrink-0" />
                      <p><strong>Solution:</strong> {prob.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-15"></div>
                  <img 
                    src="/imgs/knowledge/pouch-certifications-pain-points.jpg" 
                    alt="Pouch Certification Pain Points"
                    className="relative w-full h-auto rounded-3xl border border-neutral-200 shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('pouchCertificationsPage.faqs.heading', 'Frequently Asked Questions')}
              </h2>
              <p className="text-neutral-600">
                Frequently asked questions about compliance, testing, and implementation.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors focus:outline-none"
                  >
                    <h3 className="font-bold text-neutral-900 text-base md:text-lg pr-4">{t(`pouchCertificationsPage.faqs.${idx}.question`, faq.question)}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {openFaq === idx && (
                    <div className="px-6 pb-6 border-t border-neutral-100 text-neutral-600 text-sm md:text-base leading-relaxed pt-4 bg-neutral-50/50">
                      <p>{t(`pouchCertificationsPage.faqs.${idx}.answer`, faq.answer)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Grid Details */}
        <section className="py-20 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {t('pouchCertificationsPage.viewCertificates.heading', 'Original Certificates')}
              </h2>
              <p className="text-neutral-600">
                Download original PDFs or verify our registration numbers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { img: "/imgs/cert/cert-din-home-compost.png", title: t('pouchCertificationsPage.viewCertificates.dinHomeCompost', 'DIN Home Compost') },
                { img: "/imgs/company/bpi/bpi.svg", title: t('pouchCertificationsPage.viewCertificates.bpiCompostable', 'BPI Compostable'), isDownload: true, url: "/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf" },
                { img: "/imgs/cert/cert-ABA-as5810.png", title: t('pouchCertificationsPage.viewCertificates.abaAs5810', 'ABA AS 5810 Home Compost') },
                { img: "/imgs/cert/cert-pcr-grs.webp", title: t('pouchCertificationsPage.viewCertificates.grsRecycled', 'GRS PCR Recycled') },
                { img: "/imgs/cert/cert-BioPE.webp", title: t('pouchCertificationsPage.viewCertificates.bioBasedPe', 'Bio-based PE') },
                { img: "/imgs/cert/cert-fsc.png", title: t('pouchCertificationsPage.viewCertificates.fscMix', 'FSC Mix') },
                { img: "/imgs/cert/cert-ISO9001.webp", title: t('pouchCertificationsPage.viewCertificates.iso9001', 'ISO 9001') },
                { img: "/imgs/cert/cert-ISO14001-cert.webp", title: t('pouchCertificationsPage.viewCertificates.iso14001', 'ISO 14001') },
                { img: "/imgs/cert/cert-brc.webp", title: t('pouchCertificationsPage.viewCertificates.brcPackaging', 'BRC Packaging') }
              ].map((item, idx) => (
                item.isDownload ? (
                  <a 
                    key={idx}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center text-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-purple-300 transition-colors group"
                  >
                    <div className="h-28 flex items-center justify-center mb-4">
                      <img src={item.img} alt={item.title} className="max-h-full object-contain" />
                    </div>
                    <p className="font-bold text-sm text-neutral-900 group-hover:text-purple-600 transition-colors leading-snug">{item.title}</p>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider mt-1">{t('pouchCertificationsPage.viewCertificates.downloadLabel', 'Download')}</span>
                  </a>
                ) : (
                  <div 
                    key={idx}
                    className="flex flex-col items-center text-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100"
                  >
                    <div className="h-28 flex items-center justify-center mb-4">
                      <img src={item.img} alt={item.title} className="max-h-full object-contain" />
                    </div>
                    <p className="font-bold text-sm text-neutral-900 leading-snug">{item.title}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              {t('pouchCertificationsPage.cta.heading', 'Deploy Certified Packaging Today')}
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('pouchCertificationsPage.cta.subtitle', 'Partner with us to create custom-branded, fully-certified packaging structures tailored to your products.')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://calendly.com/30-min-free-packaging-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white text-base md:text-lg font-semibold py-3 px-8 rounded-xl shadow-lg shadow-purple-600/20 transition-all"
              >
                {t('pouchCertificationsPage.cta.bookConsultation', 'Book a Consultation')}
              </a>
              <Link 
                to="/materials"
                className="bg-neutral-800 hover:bg-neutral-700 text-white text-base md:text-lg font-semibold py-3 px-8 rounded-xl border border-neutral-700 transition-all"
              >
                {t('pouchCertificationsPage.cta.browseMaterials', 'Browse Materials')}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
