import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useTranslation } from 'react-i18next';
// Note: Ensure the hero image exists or replace with a generic placeholder
import heroImage from '../../assets/topics/granola-soft-touch.webp';

export default function GranolaSoftTouch() {
  const { t } = useTranslation();
  const tKey = 'seo_topics.granola_soft_touch';

  return (
    <SEOPageLayout
      title={t(`${tKey}.title`)}
      description={t(`${tKey}.description`)}
      heroImage={heroImage} // Un-comment when image is generated
      aeoSummary={t(`${tKey}.aeoSummary`)}
      eeatDetails={t(`${tKey}.eeatDetails`)}
      faqs={t(`${tKey}.faqs`, { returnObjects: true })}
    />
  );
}
