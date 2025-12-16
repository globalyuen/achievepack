import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Award, Leaf, Utensils, Building2, FileText, CheckCircle, Recycle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const CertificatesPage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.certificates';

  const heroImage = '/imgs/seo-photos/a_certificates_compliance_trust_4184896.webp';
  
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.overview.p1`)}</p>
          <p className="text-neutral-700">{t(`${p}.sections.overview.p2`)}</p>
        </div>
      )
    },
    {
      id: 'compostability',
      title: t(`${p}.sections.compostability.title`),
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">EU</div>
              <div>
                <h4 className="font-semibold text-lg text-green-800">{t(`${p}.sections.compostability.en13432.name`)}</h4>
                <p className="text-sm text-green-600">{t(`${p}.sections.compostability.en13432.region`)}</p>
              </div>
            </div>
            <p className="text-green-700 text-sm">{t(`${p}.sections.compostability.en13432.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold">US</div>
              <div>
                <h4 className="font-semibold text-lg text-blue-800">{t(`${p}.sections.compostability.astm.name`)}</h4>
                <p className="text-sm text-blue-600">{t(`${p}.sections.compostability.astm.region`)}</p>
              </div>
            </div>
            <p className="text-blue-700 text-sm">{t(`${p}.sections.compostability.astm.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold">AU</div>
              <div>
                <h4 className="font-semibold text-lg text-amber-800">{t(`${p}.sections.compostability.australian.name`)}</h4>
                <p className="text-sm text-amber-600">{t(`${p}.sections.compostability.australian.region`)}</p>
              </div>
            </div>
            <p className="text-amber-700 text-sm">{t(`${p}.sections.compostability.australian.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold">OK</div>
              <div>
                <h4 className="font-semibold text-lg text-purple-800">{t(`${p}.sections.compostability.okcompost.name`)}</h4>
                <p className="text-sm text-purple-600">{t(`${p}.sections.compostability.okcompost.region`)}</p>
              </div>
            </div>
            <p className="text-purple-700 text-sm">{t(`${p}.sections.compostability.okcompost.desc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'recyclability',
      title: t(`${p}.sections.recyclability.title`),
      icon: <Recycle className="h-5 w-5 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
            <div className="flex items-center gap-4 mb-4">
              <img src="/imgs/pcr-grs-cert-1.webp" alt="GRS Certification" className="w-20 h-20 object-contain" />
              <div>
                <h4 className="font-semibold text-lg text-primary-800">{t(`${p}.sections.recyclability.grs.name`)}</h4>
                <p className="text-primary-700">{t(`${p}.sections.recyclability.grs.desc`)}</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                {t(`${p}.sections.recyclability.mono.title`)}
              </h4>
              <p className="text-neutral-600 text-sm">{t(`${p}.sections.recyclability.mono.desc`)}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600" />
                {t(`${p}.sections.recyclability.storeDropOff.title`)}
              </h4>
              <p className="text-neutral-600 text-sm">{t(`${p}.sections.recyclability.storeDropOff.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'foodsafety',
      title: t(`${p}.sections.foodSafety.title`),
      icon: <Utensils className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.foodSafety.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
              <div className="text-3xl mb-2">🇺🇸</div>
              <h4 className="font-semibold mb-1 text-blue-800">{t(`${p}.sections.foodSafety.fda.name`)}</h4>
              <p className="text-blue-700 text-sm">{t(`${p}.sections.foodSafety.fda.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
              <div className="text-3xl mb-2">🇪🇺</div>
              <h4 className="font-semibold mb-1 text-green-800">{t(`${p}.sections.foodSafety.eu.name`)}</h4>
              <p className="text-green-700 text-sm">{t(`${p}.sections.foodSafety.eu.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold mb-1 text-purple-800">{t(`${p}.sections.foodSafety.migration.name`)}</h4>
              <p className="text-purple-700 text-sm">{t(`${p}.sections.foodSafety.migration.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'facility',
      title: t(`${p}.sections.facility.title`),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.facility.iso.name`)}
            </h4>
            <p className="text-neutral-600">{t(`${p}.sections.facility.iso.desc`)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.facility.brc.name`)}
            </h4>
            <p className="text-neutral-600">{t(`${p}.sections.facility.brc.desc`)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.facility.fsc.name`)}
            </h4>
            <p className="text-neutral-600">{t(`${p}.sections.facility.fsc.desc`)}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-2 text-primary-700 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.facility.sedex.name`)}
            </h4>
            <p className="text-neutral-600">{t(`${p}.sections.facility.sedex.desc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: t(`${p}.sections.documentation.title`),
      icon: <FileText className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.documentation.intro`)}</p>
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
            <ul className="grid md:grid-cols-2 gap-3 text-neutral-700">
              {(t(`${p}.sections.documentation.items`, { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary-500" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={['packaging certifications', 'EN 13432', 'ASTM D6400', 'GRS certified', 'FDA food safe', 'compostable certification']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage={heroImage}
      sections={sections}
      introSummary={t(`${p}.introSummary`)}
      faqs={faqs}
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
      ctaButtonUrl="/contact"
    />
  );
};

export default CertificatesPage;
