import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
import { AlertCircle, BookOpen, Globe } from 'lucide-react';

const PackagingBarrierOptionsPresentation = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.barrier-options-presentation';

  const sections = [
    {
      id: 'pain-points',
      title: t(`${p}.painPoints.title`, 'Pain Points & Solutions'),
      icon: <AlertCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p>Common industry pain points address lack of barrier properties, high shipping costs, and sustainability concerns. Our solution provides advanced engineering to tackle these issues directly.</p>
        </div>
      )
    },
    {
      id: 'engineering-notebook',
      title: t(`${p}.engineering.title`, 'Engineering Notebook'),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p>Technical specifications: MVTR {'<'} 0.1 g/m²/24h, OTR {'<'} 0.1 cc/m²/24h. We utilize co-extruded films and precise tension control during lamination.</p>
        </div>
      )
    },
    {
      id: 'translations',
      title: t(`${p}.translations.title`, 'Global Perspectives (ES, FR, ZH)'),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <div><strong>ES:</strong> Nuestras soluciones de embalaje abordan los principales puntos débiles de la industria con ingeniería avanzada.</div>
          <div><strong>FR:</strong> Nos solutions d'emballage abordent les principaux points faibles de l'industrie avec une ingénierie avancée.</div>
          <div><strong>ZH:</strong> 我们的包装解决方案通过先进的工程技术解决了行业的主要痛点。</div>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t(`${p}.seo.title`, 'Packaging Barrier Options Presentation | Achieve Pack')}</title>
      </Helmet>
      <SEOPageLayout 
        heroBgColor="#064e3b"
        title="Packaging Barrier Options Presentation"
        description="Comprehensive guide and technical details."
        keywords={['packaging', 'Packaging Barrier Options Presentation']}
        heroTitle="Packaging Barrier Options Presentation"
        heroSubtitle="Advanced Flexible Packaging"
        introSummary="Discover how we engineered this solution to meet demanding retail and D2C requirements."
        sections={sections}
        faqs={[]}
        schemaType="Article"
        heroImage="/imgs/illustrated/a_barrier_options_presentation_c_6124347.webp"
      />
    </>
  );
};
export default PackagingBarrierOptionsPresentation;
