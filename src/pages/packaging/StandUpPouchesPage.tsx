import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/seo/SEOPageLayout';


const StandUpPouchesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const baseKey = 'seoPages.pages.standUpPouches';
  const lang = i18n.language || 'en';

  // Helper to safely get nested translation objects
  const getNestedArray = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };

  

  return (
    <SEOPageLayout
      pageTitle={t(`${baseKey}.pageTitle`) as string}
      pageDescription={t(`${baseKey}.pageDescription`) as string}
      heroImage="/imgs/products/stand-up-pouches.webp"
      heroTitle={t(`${baseKey}.heroTitle`) as string}
      heroSubtitle={t(`${baseKey}.heroSubtitle`) as string}
      primaryKeyword="Stand Up Pouches"
      secondaryKeywords={["Doypack pouches", "stand up bags", "custom printed pouches"]}
      schemaType="Product"
      language={lang}
      
      overviewTitle={t(`${baseKey}.overviewTitle`) as string}
      overviewContent={t(`${baseKey}.overviewContent`) as string}
      
      painPoints={getNestedArray(`${baseKey}.painPoints`)}
      benefits={getNestedArray(`${baseKey}.benefits`)}
      
      technicalSpecs={{
        materialLayers: getNestedArray(`${baseKey}.technicalSpecs.materialLayers`),
        printingOptions: getNestedArray(`${baseKey}.technicalSpecs.printingOptions`),
        sustainability: getNestedArray(`${baseKey}.technicalSpecs.sustainability`)
      }}
      
      engineeringNotebook={{
        title: t(`${baseKey}.engineeringNotebook.title`) as string,
        author: t(`${baseKey}.engineeringNotebook.author`) as string,
        date: t(`${baseKey}.engineeringNotebook.date`) as string,
        content: t(`${baseKey}.engineeringNotebook.content`) as string,
        keyTakeaway: t(`${baseKey}.engineeringNotebook.keyTakeaway`) as string
      }}
      
      faqs={getNestedArray(`${baseKey}.faqs`)}
      
      targetUrl={`https://achievepack.com/packaging/stand-up-pouches`}
    />
  );
};

export default StandUpPouchesPage;
