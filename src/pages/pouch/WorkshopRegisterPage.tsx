import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Users, Zap, CheckCircle, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { NeoCard, NeoButton, NeoBadge } from '@/components/pouch/PouchUI';
import PouchLayout from '@/components/pouch/PouchLayout';
import { useTranslation } from 'react-i18next';

const translations: Record<string, any> = {
  en: {
    title: "5 Common Packaging Problems (And Solutions)",
    items: [
      { problem: "High Cost of Eco-materials", solution: "Optimize design to use less material overall." },
      { problem: "Durability Issues", solution: "Implement multi-layer advanced barriers." },
      { problem: "Regulatory Compliance", solution: "Follow standardized certification guidelines." },
      { problem: "Supply Chain Delays", solution: "Source materials closer to manufacturing hubs." },
      { problem: "Greenwashing Risks", solution: "Use transparent Life Cycle Assessments." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de Empaque (Y Soluciones)",
    items: [
      { problem: "Alto costo de los eco-materiales", solution: "Optimizar el diseño para usar menos material en general." },
      { problem: "Problemas de durabilidad", solution: "Implementar barreras avanzadas multicapa." },
      { problem: "Cumplimiento normativo", solution: "Seguir pautas de certificación estandarizadas." },
      { problem: "Retrasos en la cadena de suministro", solution: "Obtener materiales más cerca de los centros de fabricación." },
      { problem: "Riesgos de lavado verde", solution: "Usar evaluaciones de ciclo de vida transparentes." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage (Et Solutions)",
    items: [
      { problem: "Coût élevé des éco-matériaux", solution: "Optimiser la conception pour utiliser moins de matériaux globaux." },
      { problem: "Problèmes de durabilité", solution: "Mettre en œuvre des barrières multicouches avancées." },
      { problem: "Conformité réglementaire", solution: "Suivre des directives de certification standardisées." },
      { problem: "Retards de la chaîne d'approvisionnement", solution: "S'approvisionner plus près des centres de fabrication." },
      { problem: "Risques d'écoblanchiment", solution: "Utiliser des analyses de cycle de vie transparentes." }
    ]
  },
  'zh-TW': {
    title: "5個常見包裝問題（及解決方案）",
    items: [
      { problem: "環保材料成本高昂", solution: "優化設計以減少整體材料用量。" },
      { problem: "耐用性問題", solution: "實施多層高級阻隔層。" },
      { problem: "合規性挑戰", solution: "遵循標準化的認證指南。" },
      { problem: "供應鏈延遲", solution: "將材料採購轉移至製造中心附近。" },
      { problem: "漂綠風險", solution: "使用透明的生命週期評估。" }
    ]
  }
};

const sectionsForPouch = ['problems-solutions'];
const sectionsForAchieve = ['problems-solutions'];

const WorkshopRegisterPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const tLocal = translations[lang] || translations['en'];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PouchLayout>
      <Helmet>
        <title>{t('workshopRegisterPage.meta.title')}</title>
        <meta name="description" content={t('workshopRegisterPage.meta.description')} />
      </Helmet>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NeoBadge color="bg-[#D4FF00]" className="mb-6">{t('workshopRegisterPage.badge')}</NeoBadge>
              <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-8">
                {t('workshopRegisterPage.hero.titleLine1')} <br />
                <span className="bg-black text-white px-2">{t('workshopRegisterPage.hero.titleHighlight')}</span> {t('workshopRegisterPage.hero.titleLine2')}
              </h1>
              <p className="text-xl text-neutral-600 mb-10">
                {t('workshopRegisterPage.hero.subtitle')}
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: <Calendar />, text: t('workshopRegisterPage.details.date') },
                  { icon: <Clock />, text: t('workshopRegisterPage.details.duration') },
                  { icon: <MapPin />, text: t('workshopRegisterPage.details.location') },
                  { icon: <Zap />, text: t('workshopRegisterPage.details.bonus') },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-[#D4FF00]">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <NeoCard color="bg-neutral-100" className="border-dashed mb-6">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" /> {t('workshopRegisterPage.whoIsThisFor.title')}
                </h3>
                <ul className="space-y-2 font-medium text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> {t('workshopRegisterPage.whoIsThisFor.item1')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> {t('workshopRegisterPage.whoIsThisFor.item2')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> {t('workshopRegisterPage.whoIsThisFor.item3')}</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> {t('workshopRegisterPage.whoIsThisFor.item4')}</li>
                </ul>
              </NeoCard>

              <NeoCard color="bg-white" className="mb-6">
                <h3 className="font-black uppercase mb-4">{tLocal.title}</h3>
                <img 
                  src="/imgs/knowledge/workshop-register-pain-points.jpg" 
                  alt="Packaging problems and solutions"
                  className="w-full h-auto mb-6 border-2 border-black object-cover rounded"
                />
                <ul className="space-y-4">
                  {tLocal.items.map((item: any, i: number) => (
                    <li key={i} className="flex flex-col gap-1">
                      <div className="flex items-start gap-2 text-red-600 font-bold">
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{item.problem}</span>
                      </div>
                      <div className="flex items-start gap-2 text-green-700 font-medium ml-2">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>{item.solution}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </NeoCard>

              <NeoCard color="bg-white">
                <h3 className="font-black uppercase mb-4">{t('workshopRegisterPage.missedReport.title')}</h3>
                <p className="text-sm text-neutral-600 mb-4 font-bold">
                  {t('workshopRegisterPage.missedReport.description')}
                </p>
                <NeoButton variant="secondary" to="/reports/state-of-packaging-2026" className="w-full">
                  {t('workshopRegisterPage.missedReport.cta')}
                </NeoButton>
              </NeoCard>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <NeoCard className="p-10">
                  <h2 className="text-3xl font-black uppercase mb-8">{t('workshopRegisterPage.form.title')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">{t('workshopRegisterPage.form.fullName')}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder={t('workshopRegisterPage.form.fullNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">{t('workshopRegisterPage.form.workEmail')}</label>
                      <input 
                        type="email" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder={t('workshopRegisterPage.form.workEmailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">{t('workshopRegisterPage.form.companyName')}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder={t('workshopRegisterPage.form.companyNamePlaceholder')}
                      />
                    </div>
                    <div className="pt-4">
                      <NeoButton variant="primary" className="w-full py-6 text-xl">
                        {t('workshopRegisterPage.form.submit')}
                      </NeoButton>
                    </div>
                    <p className="text-xs text-center text-neutral-500 font-bold uppercase tracking-widest">
                      {t('workshopRegisterPage.form.limitNotice')}
                    </p>
                  </form>
                </NeoCard>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <NeoCard color="bg-[#D4FF00]" className="text-center p-12">
                    <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-full mx-auto mb-8">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black uppercase mb-4">{t('workshopRegisterPage.success.title')}</h2>
                    <p className="text-xl font-bold mb-8">
                      {t('workshopRegisterPage.success.message')}
                    </p>
                    <NeoButton variant="dark" to="/">
                      {t('workshopRegisterPage.success.cta')}
                    </NeoButton>
                  </NeoCard>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </PouchLayout>
  );
};

export default WorkshopRegisterPage;
