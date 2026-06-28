import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
// Note: Ensure the hero image exists or replace with a generic placeholder
import heroImage from '../../assets/topics/pharma-velcro.webp';

export default function PharmaVelcro() {
  const { t } = useTranslation();
  const tKey = 'seo_topics.pharma_velcro';

  return (
    <SEOPageLayout
      title={t(`${tKey}.title`)}
      description={t(`${tKey}.description`)}
      heroImage={heroImage} // Un-comment when image is generated
      aeoSummary={t(`${tKey}.aeoSummary`)}
      eeatDetails={t(`${tKey}.eeatDetails`)}
      faqs={(t(`${tKey}.faqs`, { returnObjects: true }) as unknown) as any}
    />
  );
}
