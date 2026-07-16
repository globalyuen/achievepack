import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterSEOPageTemplate from '../../components/seo/FooterSEOPageTemplate';


const FlatBottomBagsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const baseKey = 'seoPages.pages.flatBottomBags';
  const lang = i18n.language || 'en';

  // Helper to safely get nested translation objects
  const getNestedArray = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };

  

  return (
    <FooterSEOPageTemplate
      pageTitle={t(`${baseKey}.pageTitle`) as string}
      pageDescription={t(`${baseKey}.pageDescription`) as string}
      heroImage="/imgs/products/flat-bottom-bags-hero.jpg"
      heroTitle={t(`${baseKey}.heroTitle`) as string}
      heroSubtitle={t(`${baseKey}.heroSubtitle`) as string}
      primaryKeyword="Flat Bottom Bags"
      secondaryKeywords={["Box pouches", "block bottom bags", "coffee bags flat bottom"]}
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
      
      targetUrl={`https://achievepack.com/packaging/flat-bottom-bags`}
    />
  );
};

export default FlatBottomBagsPage;
