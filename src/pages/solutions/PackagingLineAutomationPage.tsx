import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterSEOPageTemplate from '../../components/seo/FooterSEOPageTemplate';
import { getDomain } from '../../utils/domain';
import PouchLayout from '../../components/pouch/PouchLayout';

const PackagingLineAutomationPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const baseKey = 'seoPages.pages.packagingLineAutomation';
  const lang = i18n.language || 'en';

  // Helper to safely get nested translation objects
  const getNestedArray = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };

  if (getDomain() === 'pouch') { return <PouchLayout><div className="p-12 text-center text-xl font-bold">Redirecting...</div></PouchLayout>; }

  return (
    <FooterSEOPageTemplate
      pageTitle={t(`${baseKey}.pageTitle`) as string}
      pageDescription={t(`${baseKey}.pageDescription`) as string}
      heroImage="/imgs/hero/packaging-automation-hero.jpg"
      heroTitle={t(`${baseKey}.heroTitle`) as string}
      heroSubtitle={t(`${baseKey}.heroSubtitle`) as string}
      primaryKeyword="Packaging Line Automation"
      secondaryKeywords={["VFFS integration", "packaging machine material", "automated bagging"]}
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
      
      targetUrl={`https://achievepack.com/solutions/packaging-line-automation`}
    />
  );
};

export default PackagingLineAutomationPage;
