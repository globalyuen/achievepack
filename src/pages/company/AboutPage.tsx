import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Target, Heart, Users, TrendingUp, Leaf, Award, Handshake, Lightbulb, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const AboutPage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.about';

  const heroImage = '/imgs/seo-photos/a_about_sustainability_mission_5914909.webp';
  
  const sections = [
    {
      id: 'story',
      title: t(`${p}.sections.story.title`),
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.story.p1`)}</p>
          <p className="text-neutral-700">{t(`${p}.sections.story.p2`)}</p>
          <p className="text-neutral-700">{t(`${p}.sections.story.p3`)}</p>
        </div>
      )
    },
    {
      id: 'mission',
      title: t(`${p}.sections.mission.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">{t(`${p}.sections.mission.intro`)}</p>
          <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.mission.drivesUs`)}
            </h4>
            <ul className="space-y-2 text-neutral-700">
              {(t(`${p}.sections.mission.points`, { returnObjects: true }) as string[]).map((point, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'values',
      title: t(`${p}.sections.values.title`),
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-lg mb-2 text-green-800 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              {t(`${p}.sections.values.sustainability.title`)}
            </h4>
            <p className="text-green-700">{t(`${p}.sections.values.sustainability.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-lg mb-2 text-blue-800 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              {t(`${p}.sections.values.quality.title`)}
            </h4>
            <p className="text-blue-700">{t(`${p}.sections.values.quality.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-lg mb-2 text-purple-800 flex items-center gap-2">
              <Handshake className="h-5 w-5 text-purple-600" />
              {t(`${p}.sections.values.partnership.title`)}
            </h4>
            <p className="text-purple-700">{t(`${p}.sections.values.partnership.desc`)}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-lg mb-2 text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              {t(`${p}.sections.values.innovation.title`)}
            </h4>
            <p className="text-amber-700">{t(`${p}.sections.values.innovation.desc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: t(`${p}.sections.team.title`),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">{t(`${p}.sections.team.intro`)}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Ryan Wong</h4>
              <p className="text-sm text-primary-600">{t('team.roles.packagingSpecialist')}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Eric Kwok - Business Development.png" alt="Eric Kwok" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Eric Kwok</h4>
              <p className="text-sm text-primary-600">{t('team.roles.businessDevelopment')}</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Jericha Kwok - Business Development.png" alt="Jericha Kwok" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Jericha Kwok</h4>
              <p className="text-sm text-primary-600">{t('team.roles.businessDevelopment')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'impact',
      title: t(`${p}.sections.impact.title`),
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-green-100 rounded-xl border border-primary-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-primary-700">{t(`${p}.sections.impact.brands`)}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
              <div className="text-sm text-blue-700">{t(`${p}.sections.impact.carbon`)}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">10M+</div>
              <div className="text-sm text-purple-700">{t(`${p}.sections.impact.pouches`)}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">30+</div>
              <div className="text-sm text-amber-700">{t(`${p}.sections.impact.countries`)}</div>
            </div>
          </div>
          <p className="text-neutral-700">{t(`${p}.sections.impact.outro`)}</p>
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
      keywords={['about achieve pack', 'sustainable packaging company', 'eco-friendly packaging supplier', 'pouch.eco', 'Hong Kong packaging']}    
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

export default AboutPage;
