import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Leaf, Calendar, Package, ArrowRight, X, Target, CheckCircle, Award, Shield, ChevronDown, HelpCircle, ExternalLink, ShoppingCart, FileCheck, ShieldCheck, Truck, Store } from 'lucide-react';
import { ShareButton } from '../../components/animate-ui/components/community/share-button';
import Footer from '../../components/Footer';
import ReadingProgress from '../../components/ReadingProgress';
import { SEOPageHeader } from '../../components/SEOPageLayout';

// Image paths - from /imgs/company/bpi/
const IMAGES = {
  hero: '/imgs/company/bpi/hero.png',
  bpiLogo: '/imgs/company/bpi/bpi.svg',
  astmCompliance: '/imgs/company/bpi/a_astm_compliance_standards_verification_3487759.webp',
  certificationBadge: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp',
  brandBenefits: '/imgs/company/bpi/a_brand_benefits_market_impact_retail_8555955.webp',
  compostingProcess: '/imgs/company/bpi/a_composting_process_breakdown_timeline_0954692.webp',
  bpiPouch: '/imgs/company/bpi/bpipouch.webp',
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

const BPICertifiedPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.bpiCertified';

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

  const canonicalUrl = 'https://achievepack.com/company/bpi-certified';
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
        "name": "Achieve Pack",
        "url": "https://achievepack.com",
        "logo": "https://achievepack.com/ap-logo-white.png",
        "description": t(`${p}.schemaOrgDescription`),
        "foundingDate": "2011",
        "knowsAbout": ["BPI certified compostable packaging", "ASTM D6400", "ASTM D6868", "commercial composting", "retail food packaging"],
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "BPI Certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Biodegradable Products Institute",
            "url": "https://bpiworld.org"
          }
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
        "headline": "BPI Certified Compostable Packaging - Achieve Pack",
        "description": description,
        "image": `https://achievepack.com${IMAGES.hero}`,
        "datePublished": "2025-01-14",
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
                    <img src="/imgs/bpi.svg" alt="BPI Certified Compostable" className="h-12 w-auto" />
                    <span className="text-sm bg-green-500/30 text-green-100 px-3 py-1 rounded-full font-medium">
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
                      href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#15803d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      <FileCheck className="h-4 w-4" />
                      {t(`${p}.heroBtnDownload`)}
                    </a>
                    <a
                      href="https://products.bpiworld.org/companies/achieve-pack-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-[#15803d] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t(`${p}.heroBtnViewListing`)}
                    </a>
                    <Link
                      to="/store"
                      className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                    >
                      <Package className="h-4 w-4" />
                      {t(`${p}.heroBtnBrowseProducts`)}
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
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
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
                    Share
                  </ShareButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="space-y-12">

            {/* Section 1: What BPI Certified Means - Text Left, Image Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec1Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`${p}.sec1P1`) }} />
                  <ul className="space-y-3 text-neutral-700 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec1Bullet1`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec1Bullet2`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec1Bullet3`) }} />
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://www.goodstartpackaging.com/bpi-certified-compostable/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec1Link`)}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ClickableImage
                    src={IMAGES.certificationBadge}
                    alt={t(`${p}.sec1ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Achieve Pack Products Listed with BPI - Image Left, Text Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec2Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <ClickableImage
                    src={IMAGES.bpiPouch}
                    alt={t(`${p}.sec2ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
                <div className="order-1 md:order-2 prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {t(`${p}.sec2P1`)}
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec2Card1Title`)}</h4>
                      <p className="text-neutral-700 text-sm">{t(`${p}.sec2Card1Desc`)}</p>
                      <p className="text-neutral-600 text-sm mt-1">{t(`${p}.sec2Card1Sub`)}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec2Card2Title`)}</h4>
                      <p className="text-neutral-700 text-sm">{t(`${p}.sec2Card2Desc`)}</p>
                      <p className="text-neutral-600 text-sm mt-1">{t(`${p}.sec2Card2Sub`)}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec2LinkCatalog`)}
                    </a>
                    <a href="https://bpiworld.org/find-certified-products" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec2LinkSearch`)}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Benefits for Brands - Text Left, Image Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Store className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec3Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {t(`${p}.sec3P1`)}
                  </p>
                  <ul className="space-y-3 text-neutral-700 mt-4">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec3Bullet1`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec3Bullet2`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec3Bullet3`) }} />
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://www.pca.state.mn.us/business-with-us/compostable-product-labeling" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec3LinkState`)}
                    </a>
                    <a href="https://bpiworld.org/us-legislation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec3LinkLegislation`)}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ClickableImage
                    src={IMAGES.brandBenefits}
                    alt={t(`${p}.sec3ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Benefits for Composters - Image Left, Text Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec4Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <ClickableImage
                    src={IMAGES.compostingProcess}
                    alt={t(`${p}.sec4ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
                <div className="order-1 md:order-2 prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {t(`${p}.sec4P1`)}
                  </p>
                  <ul className="space-y-3 text-neutral-700 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4Bullet1`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4Bullet2`) }} />
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: t(`${p}.sec4Bullet3`) }} />
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://bpiworld.org/bpi-launches-commercial-home-compostable-certification-program-bringing-food-waste-diversion-to-our-backyards" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec4Link`)}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: ASTM Standards - Text Left, Image Right */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec5Title`)}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {t(`${p}.sec5P1`)}
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sec5Card1Title`)}</h4>
                      <p className="text-neutral-700 text-sm">{t(`${p}.sec5Card1Desc`)}</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sec5Card2Title`)}</h4>
                      <p className="text-neutral-700 text-sm">{t(`${p}.sec5Card2Desc`)}</p>
                    </div>
                  </div>
                  <p className="text-neutral-700 mt-4" dangerouslySetInnerHTML={{ __html: t(`${p}.sec5P2`) }} />
                  <div className="flex flex-wrap gap-3 mt-4">
                    <a href="https://www.packagingdigest.com/food-packaging/how-to-substantiate-environmental-food-packaging-claims" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
                      <ExternalLink className="h-4 w-4" /> {t(`${p}.sec5Link`)}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <ClickableImage
                    src={IMAGES.astmCompliance}
                    alt={t(`${p}.sec5ImgAlt`)}
                    className="w-full max-w-md rounded-xl shadow-lg"
                    onClick={openLightbox}
                  />
                </div>
              </div>
            </section>

            {/* Section 6: Marketing Compliance - Card Design */}
            <section className="bg-gradient-to-br from-green-50 to-primary-50 rounded-xl p-6 md:p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.sec6Title`)}</h2>
              </div>
              <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                {t(`${p}.sec6P1`)}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.sec6Card1Title`)}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {t(`${p}.sec6Card1Desc`)}
                  </p>
                  <p className="text-red-600 text-sm mt-2 italic">
                    {t(`${p}.sec6Card1Warn`)}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <FileCheck className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.sec6Card2Title`)}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {t(`${p}.sec6Card2Desc`)}
                  </p>
                  <p className="text-red-600 text-sm mt-2 italic">
                    {t(`${p}.sec6Card2Warn`)}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <ExternalLink className="h-5 w-5 text-purple-600" />
                    <h3 className="font-semibold text-neutral-900">{t(`${p}.sec6Card3Title`)}</h3>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {t(`${p}.sec6Card3Desc`)}
                  </p>
                  <p className="text-green-600 text-sm mt-2 italic">
                    {t(`${p}.sec6Card3Info`)}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="https://bpiworld.org/before-you-start" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                  <ExternalLink className="h-4 w-4" /> {t(`${p}.sec6Link`)}
                </a>
              </div>
            </section>

            {/* Verification CTA */}
            <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border-2 border-green-200">
              <div className="text-center">
                <img src={IMAGES.bpiLogo} alt="BPI Certification Mark" className="h-16 w-auto mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">{t(`${p}.verifyTitle`)}</h2>
                <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                  {t(`${p}.verifyDesc`)}
                </p>
                <a
                  href="https://products.bpiworld.org/companies/achieve-pack-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
                >
                  <ExternalLink className="h-5 w-5" />
                  {t(`${p}.verifyBtn`)}
                </a>
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
                    <Link to="/composting/industrial-vs-home-compost" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[1].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[1].desc}</p>
                    </Link>
                    <Link to="/company/certificates" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[2].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[2].desc}</p>
                    </Link>
                    <Link to="/company/b-corp" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
                      <h3 className="font-semibold text-primary-700 mb-1">{relatedLinks[3].title}</h3>
                      <p className="text-sm text-neutral-600">{relatedLinks[3].desc}</p>
                    </Link>
                    <Link to="/usa/compostable-packaging" className="block bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
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
            <section className="bg-gradient-to-r from-green-600 to-primary-700 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t(`${p}.ctaTitle`)}</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
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
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
                >
                  <Package className="h-4 w-4" />
                  {t(`${p}.ctaBtnSamples`)}
                </Link>
                <a
                  href="https://products.bpiworld.org/companies/achieve-pack-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t(`${p}.ctaBtnListing`)}
                </a>
                <a
                  href="/full-cert/BPI_Certificate-Achieve%20Pack%20Company-10529618-1_02_27_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#15803d] border-2 border-[#15803d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 hover:border-green-700 transition shadow-lg"
                >
                  <FileCheck className="h-4 w-4" />
                  {t(`${p}.ctaBtnDownload`)}
                </a>
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
            <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <h3 itemProp="name">{t(`${p}.aiFaq3Q`)}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text">
                  {t(`${p}.aiFaq3A`)}
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

export default BPICertifiedPage;
