import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Leaf, Calendar, Package, ArrowRight, X, Target, Globe, TreePine, BarChart3, Heart, Award, Users, ChevronDown, HelpCircle, ExternalLink, ShoppingCart } from 'lucide-react';
import { ShareButton } from '../../components/animate-ui/components/community/share-button';
import Footer from '../../components/Footer';
import ReadingProgress from '../../components/ReadingProgress';
import { SEOPageHeader } from '../../components/SEOPageLayout';

// Image paths
const IMAGES = {
  hero: '/imgs/company/b-corp/a_packaging_transformation_sustainable_8931589.webp',
  carbonRemoval: '/imgs/company/b-corp/a_bcorp_carbon_removal_0762256.webp',
  globalImpact: '/imgs/company/b-corp/a_global_impact_scale_0632354.webp',
  smallOrders: '/imgs/company/b-corp/a_accessibility_small_orders_5518437.webp',
  transparency: '/imgs/company/b-corp/a_impact_transparency_metrics_1979516.webp',
  bcorpLogo: '/imgs/company/b-corp/bcorp.svg',
};

// Clickable image component with lightbox
const ClickableImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick: (src: string, alt: string) => void;
}> = ({ src, alt, className = '', onClick }) => (
  <img
    src={src}
    alt={alt}
    className={`cursor-zoom-in hover:opacity-95 transition ${className}`}
    onClick={() => onClick(src, alt)}
    loading="lazy"
  />
);

const BCorpPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.bCorp';

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    setLightboxAlt('');
  };

  const canonicalUrl = 'https://achievepack.com/company/b-corp';
  const title = t(`${p}.title`);
  const description = t(`${p}.description`);
  
  const faqs = t(`${p}.faqs`, { returnObjects: true }) as Array<{ question: string; answer: string }> || [];
  const relatedLinks = t(`${p}.relatedLinks`, { returnObjects: true }) as Array<{ title: string; desc: string }> || [];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://achievepack.com/#organization",
        "name": t(`${p}.schemaOrgName`),
        "url": "https://achievepack.com",
        "logo": "https://achievepack.com/ap-logo-white.png",
        "description": t(`${p}.schemaDescription`),
        "foundingDate": "2011",
        "slogan": t(`${p}.schemaSlogan`),
        "knowsAbout": ["compostable packaging", "sustainable packaging", "eco-friendly pouches", "B Corporation"],
        "memberOf": {
          "@type": "Organization",
          "name": "B Lab",
          "url": "https://www.bcorporation.net/"
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": { "@id": "https://achievepack.com/#website" },
        "about": { "@id": "https://achievepack.com/#organization" }
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": "Our Impact - Achieve Pack Pending B Corporation",
        "description": description,
        "image": `https://achievepack.com${IMAGES.hero}`,
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "author": {
          "@type": "Organization",
          "@id": "https://achievepack.com/#organization"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://achievepack.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={t(`${p}.keywords`)} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://achievepack.com${IMAGES.hero}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://achievepack.com${IMAGES.hero}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50 pt-14 overflow-x-hidden">
        {/* Header */}
        <SEOPageHeader />

        <ReadingProgress />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-0">
              <div className="md:py-16">
                <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(21, 128, 61, 0.85)', backdropFilter: 'blur(8px)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={IMAGES.bcorpLogo} alt="Pending B Corporation" className="h-12 w-auto" />
                    <span className="text-sm bg-amber-500/20 text-amber-200 px-3 py-1 rounded-full font-medium">
                      {t(`${p}.heroBadge`)}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {t(`${p}.heroTitle`)}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-100 mb-8">
                    {t(`${p}.heroDescription`)}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://calendly.com/30-min-free-packaging-consultancy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                    >
                      <Calendar className="h-4 w-4" />
                      {t(`${p}.btnBookMeeting`)}
                    </a>
                    <Link
                      to="/store"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      <Package className="h-4 w-4" />
                      {t(`${p}.btnBrowseProducts`)}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-end items-center h-[400px]">
                <ClickableImage
                  src={IMAGES.hero}
                  alt={t(`${p}.heroImageAlt`)}
                  className="h-full w-auto object-cover rounded-xl shadow-2xl"
                  onClick={openLightbox}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-8 bg-primary-50 border-b border-primary-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                    {t(`${p}.quickSummaryTitle`)}
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {t(`${p}.quickSummaryText`)}
                  </p>
                </div>
                <div className="flex-shrink-0 pt-1">
                  <ShareButton
                    url={canonicalUrl}
                    title={title}
                    description={description}
                    size="sm"
                    icon="prefix"
                  >
                    {t(`${p}.btnShare`)}
                  </ShareButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-12">

            {/* Section 1: Reducing Packaging Waste - Text Left, Image Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec1Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec1P1`) }} />
                  <p className="text-neutral-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec1P2`) }} />
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link to="/materials/compostable" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Leaf className="h-4 w-4" /> {t(`${p}.sec1LinkCompostable`)}
                    </Link>
                    <Link to="/materials/recyclable-mono-pe" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Package className="h-4 w-4" /> {t(`${p}.sec1LinkRecyclable`)}
                    </Link>
                    <a href="https://achievepack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> achievepack.com
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ClickableImage
                    src={IMAGES.globalImpact}
                    alt={t(`${p}.sec1ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Carbon Removal Commitment - Image Left, Text Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <TreePine className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec2Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <ClickableImage
                    src={IMAGES.carbonRemoval}
                    alt={t(`${p}.sec2ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
                <div className="order-1 md:order-2 prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec2P1`) }} />
                  <p className="text-neutral-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec2P2`) }} />
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://www.bcorporation.net/programs-and-tools/pending-b-corps/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Award className="h-4 w-4" /> {t(`${p}.sec2LinkAbout`)}
                    </a>
                    <a href="https://climate.stripe.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <TreePine className="h-4 w-4" /> {t(`${p}.sec2LinkStripe`)}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Accessible Sustainable Packaging - Text Left, Image Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec3Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec3P1`) }} />
                  <p className="text-neutral-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec3P2`) }} />
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://achievepack.com/usa/compostable-packaging" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Package className="h-4 w-4" /> {t(`${p}.sec3LinkUsa`)}
                    </a>
                    <Link to="/products/low-moq-packaging" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <Target className="h-4 w-4" /> {t(`${p}.sec3LinkMooq`)}
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ClickableImage
                    src={IMAGES.smallOrders}
                    alt={t(`${p}.sec3ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Transparency & Future Reporting - Image Left, Text Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec4Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <ClickableImage
                    src={IMAGES.transparency}
                    alt={t(`${p}.sec4ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
                <div className="order-1 md:order-2 prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {t(`${p}.sec4P1`)}
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <TreePine className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4ListItem1`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <Package className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4ListItem2`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4ListItem3`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4ListItem4`) }} />
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impact Stats */}
            <section className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl p-6 md:p-8 border border-primary-100">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">{t(`${p}.statsTitle`)}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">{t(`${p}.statsItem1Val`)}</div>
                  <div className="text-sm text-neutral-600">{t(`${p}.statsItem1Name`)}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{t(`${p}.statsItem2Val`)}</div>
                  <div className="text-sm text-neutral-600">{t(`${p}.statsItem2Name`)}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{t(`${p}.statsItem3Val`)}</div>
                  <div className="text-sm text-neutral-600">{t(`${p}.statsItem3Name`)}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">{t(`${p}.statsItem4Val`)}</div>
                  <div className="text-sm text-neutral-600">{t(`${p}.statsItem4Name`)}</div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.faqTitle`)}</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group border border-neutral-200 rounded-lg">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-neutral-900 hover:bg-neutral-50">
                      {faq.question}
                      <ChevronDown className="h-5 w-5 text-primary-600 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 text-neutral-700">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Links */}
            <section className="bg-neutral-100 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">{t(`${p}.relatedTitle`)}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedLinks.length > 0 && (
                  <>
                    <Link to="/materials/compostable" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[0].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[0].desc}</p>
                    </Link>
                    <Link to="/materials/bio-pe" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[1].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[1].desc}</p>
                    </Link>
                    <Link to="/company/certificates" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[2].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[2].desc}</p>
                    </Link>
                    <Link to="/products/low-moq-packaging" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[3].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[3].desc}</p>
                    </Link>
                    <Link to="/company/about" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[4].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[4].desc}</p>
                    </Link>
                    <Link to="/store" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[5].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[5].desc}</p>
                    </Link>
                  </>
                )}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary-600 to-green-700 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t(`${p}.ctaTitle`)}</h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                {t(`${p}.ctaDesc`)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/30-min-free-packaging-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
                >
                  <Calendar className="h-4 w-4" />
                  {t(`${p}.ctaBtnConsultation`)}
                </a>
                <Link
                  to="/store?category=sample"
                  className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-400 transition"
                >
                  <Package className="h-4 w-4" />
                  {t(`${p}.ctaBtnSamples`)}
                </Link>
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <ArrowRight className="h-4 w-4" />
                  {t(`${p}.ctaBtnStore`)}
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* AI Hidden Content for Search Engines */}
        <div className="sr-only" aria-hidden="true">
          <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq1Q`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq1A`)}
                </p>
              </div>
            </article>
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq2Q`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq2A`)}
                </p>
              </div>
            </article>
          </section>
        </div>

        <Footer />

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={lightboxImage}
              alt={lightboxAlt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {lightboxAlt && (
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {lightboxAlt}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BCorpPage;
