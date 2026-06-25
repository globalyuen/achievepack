import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, BarChart3, Globe, Zap, Users, Star } from 'lucide-react';
import { NeoCard, NeoButton, NeoBadge } from '@/components/pouch/PouchUI';
import PouchLayout from '@/components/pouch/PouchLayout';
import { useTranslation } from 'react-i18next';

const PackagingReport2026 = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.packagingReport2026';

  return (
    <PouchLayout>
      <Helmet>
        <title>{t(`${p}.title`)}</title>
        <meta name="description" content={t(`${p}.description`)} />
      </Helmet>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NeoBadge className="mb-6">{t(`${p}.hero.badge`)}</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                {t(`${p}.hero.titleLine1`)} <br />
                <span className="bg-[#D4FF00] px-2">{t(`${p}.hero.titleLine2`)}</span> <br />
                {t(`${p}.hero.titleLine3`)}
              </h1>
              <p className="text-xl text-neutral-600 mb-10 max-w-xl">
                {t(`${p}.hero.subtitle`)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton variant="primary" className="text-lg px-10">
                  {t(`${p}.hero.btnDownload`)}
                </NeoButton>
                <NeoButton variant="secondary" className="text-lg px-10" to="/workshop-register">
                  {t(`${p}.hero.btnWorkshop`)}
                </NeoButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <NeoCard className="p-0 overflow-hidden transform rotate-2 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4">
                <img 
                  src="/imgs/reports/report_2026_header.png" 
                  alt={t(`${p}.hero.imgAlt`)} 
                  className="w-full h-auto"
                />
              </NeoCard>
              <div className="absolute -top-6 -right-6">
                <NeoCard color="bg-[#D4FF00]" className="p-4 transform -rotate-6">
                  <p className="font-black text-2xl uppercase">{t(`${p}.hero.free`)}</p>
                  <p className="text-xs font-bold">{t(`${p}.hero.limited`)}</p>
                </NeoCard>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {[
              { label: t(`${p}.stats.0.label`), value: t(`${p}.stats.0.value`), icon: <Users /> },
              { label: t(`${p}.stats.1.label`), value: t(`${p}.stats.1.value`), icon: <CheckCircle /> },
              { label: t(`${p}.stats.2.label`), value: t(`${p}.stats.2.value`), icon: <Zap /> },
              { label: t(`${p}.stats.3.label`), value: t(`${p}.stats.3.value`), icon: <Globe /> },
            ].map((stat, i) => (
              <NeoCard key={i} className="text-center">
                <div className="w-12 h-12 bg-[#D4FF00] border-2 border-black flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </NeoCard>
            ))}
          </div>

          {/* Key Findings Section - Visual & Informative */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <NeoBadge color="lime" className="mb-4">{t(`${p}.findings.badge`)}</NeoBadge>
              <h2 className="text-4xl md:text-6xl font-black uppercase">{t(`${p}.findings.title`)}</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <NeoBadge className="mb-4">{t(`${p}.findings.1.badge`)}</NeoBadge>
                <h3 className="text-3xl font-black uppercase mb-6">{t(`${p}.findings.1.title`)}</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {t(`${p}.findings.1.desc`)}
                </p>
                <NeoCard color="bg-neutral-50" className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#D4FF00] p-2 border-2 border-black">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black uppercase text-sm mb-1">{t(`${p}.findings.1.insightBadge`)}</p>
                      <p className="text-sm font-bold text-neutral-600 italic">{t(`${p}.findings.1.insight`)}</p>
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
              <NeoCard className="p-0 overflow-hidden shadow-[20px_20px_0px_0px_rgba(212,255,0,1)]">
                <img src="/imgs/reports/compostable_trends_chart_2026.png" alt={t(`${p}.findings.1.imgAlt`)} className="w-full h-auto" />
              </NeoCard>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <NeoCard className="p-0 overflow-hidden order-2 lg:order-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <img src="/imgs/reports/consumer_trust_factors_2026.png" alt={t(`${p}.findings.2.imgAlt`)} className="w-full h-auto" />
              </NeoCard>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <NeoBadge className="mb-4">{t(`${p}.findings.2.badge`)}</NeoBadge>
                <h3 className="text-3xl font-black uppercase mb-6">{t(`${p}.findings.2.title`)}</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {t(`${p}.findings.2.desc`)}
                </p>
                <div className="space-y-4">
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} className="flex items-center gap-3 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {t(`${p}.findings.2.bullets.${idx}`)}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Expert Commentary Section */}
          <div className="mb-32 bg-black text-white p-12 md:p-20 relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <Star className="w-12 h-12 text-[#D4FF00] mb-8" />
                  <h2 className="text-4xl font-black uppercase mb-8 leading-tight">
                    {t(`${p}.expert.quote1`)}
                  </h2>
                  <p className="text-xl text-neutral-400 mb-8 italic">
                    {t(`${p}.expert.quote2`)}
                  </p>
                  <div className="flex items-center gap-4">
                    <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" className="w-16 h-16 rounded-full border-2 border-[#D4FF00]" alt="Ryan" />
                    <div>
                      <p className="font-black uppercase">{t(`${p}.expert.name`)}</p>
                      <p className="text-xs font-bold text-neutral-500">{t(`${p}.expert.role`)}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <NeoCard color="bg-neutral-800" className="border-[#D4FF00] rotate-3">
                    <p className="text-xs font-black uppercase text-[#D4FF00] mb-4">{t(`${p}.expert.highlightBadge`)}</p>
                    <p className="text-lg font-bold text-white mb-6 leading-snug">{t(`${p}.expert.highlight`)}</p>
                    <NeoBadge color="bg-[#D4FF00]" className="text-black text-[10px]">{t(`${p}.expert.exclusive`)}</NeoBadge>
                  </NeoCard>
                </div>
             </div>
          </div>

          {/* Final CTA */}
          <NeoCard color="bg-[#D4FF00]" className="text-center p-12 relative overflow-hidden border-8">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">{t(`${p}.cta.title`)}</h2>
              <p className="text-xl font-bold mb-10 max-w-2xl mx-auto text-black/80">
                {t(`${p}.cta.subtitle`)}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <NeoButton variant="dark" className="px-12 py-6 text-xl flex items-center justify-center gap-3">
                  <Download className="w-6 h-6" /> {t(`${p}.cta.btnDownload`)}
                </NeoButton>
                <NeoButton variant="secondary" className="px-12 py-6 text-xl" to="/workshop-register">
                  {t(`${p}.cta.btnWorkshop`)}
                </NeoButton>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-black translate-x-16 -translate-y-16 rotate-45" />
          </NeoCard>
        </div>
      </div>
    </PouchLayout>
  );
};

export default PackagingReport2026;
