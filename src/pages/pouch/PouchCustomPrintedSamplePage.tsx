import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI';

const PouchCustomPrintedSamplePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <PouchLayout>
            <Helmet>
                <title>{t('pouchCustomPrintedSamplePage.meta.title')}</title>
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <NeoCard className="p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">
                                    {t('pouchCustomPrintedSamplePage.hero.titleLine1')}<br/>{t('pouchCustomPrintedSamplePage.hero.titleLine2')}
                                </h1>
                                <NeoBadge color="lime">
                                    {t('pouchCustomPrintedSamplePage.hero.badge')}
                                </NeoBadge>
                            </div>
                        </div>

                        {/* Hero Sample Images Collection */}
                        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                            
                            {/* Hand Make Sample */}
                            <NeoCard className="flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    {t('pouchCustomPrintedSamplePage.samples.handMade.label')}
                                </div>
                                <div className="bg-gray-100 flex-grow border-t-4 border-black">
                                    <img 
                                        src="/imgs/samples/achieve-hand-made-sample.png" 
                                        alt={t('pouchCustomPrintedSamplePage.samples.handMade.alt')} 
                                        className="w-full h-full object-cover object-center aspect-[3/4]"
                                    />
                                </div>
                            </NeoCard>

                            {/* Commercial Sample */}
                            <NeoCard className="bg-[#D4FF00] flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1 md:-mt-4">
                                <div className="bg-black text-[#D4FF00] py-3 text-center font-black text-sm uppercase tracking-widest">
                                    {t('pouchCustomPrintedSamplePage.samples.commercial.label')}
                                </div>
                                <div className="bg-white flex-grow border-t-4 border-black">
                                    <img 
                                        src="/imgs/samples/achieve-commercial-sample.png" 
                                        alt={t('pouchCustomPrintedSamplePage.samples.commercial.alt')} 
                                        className="w-full h-full object-cover object-center aspect-[3/4]"
                                    />
                                </div>
                            </NeoCard>

                            {/* Sheet Sample */}
                            <NeoCard className="flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    {t('pouchCustomPrintedSamplePage.samples.sheet.label')}
                                </div>
                                <div className="bg-gray-100 flex-grow border-t-4 border-black">
                                    <img 
                                        src="/imgs/samples/achieve-sheet-sample.png" 
                                        alt={t('pouchCustomPrintedSamplePage.samples.sheet.alt')} 
                                        className="w-full h-full object-cover object-center aspect-[3/4]"
                                    />
                                </div>
                            </NeoCard>

                        </div>

                        {/* Options Grid */}
                        <div className="grid gap-8 mb-12">
                            {/* Option 1 */}
                            <NeoCard className="group !p-6 md:!p-8 bg-[#f3f4f6] hover:bg-white transition-colors">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <NeoBadge color="bg-black text-white">{t('pouchCustomPrintedSamplePage.option1.badge')}</NeoBadge>
                                            <h2 className="text-2xl font-black uppercase">{t('pouchCustomPrintedSamplePage.option1.title')}</h2>
                                        </div>
                                        <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                                            {t('pouchCustomPrintedSamplePage.option1.description')}
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option1.materialLabel')}</strong> {t('pouchCustomPrintedSamplePage.option1.materialValue')}</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option1.styleLabel')}</strong> {t('pouchCustomPrintedSamplePage.option1.styleValue')}</li>
                                            <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 bg-red-600"></div> <strong>{t('pouchCustomPrintedSamplePage.option1.noteLabel')}</strong> {t('pouchCustomPrintedSamplePage.option1.noteValue')}</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end gap-4">
                                        <div>
                                            <div className="text-4xl font-black tracking-tight mb-1">{t('pouchCustomPrintedSamplePage.option1.price')}</div>
                                            <div className="text-sm font-bold uppercase opacity-60">{t('pouchCustomPrintedSamplePage.option1.quantity')}</div>
                                        </div>
                                        <NeoButton to="/quote?type=sample&option=1" variant="primary" className="w-full">{t('pouchCustomPrintedSamplePage.option1.cta')}</NeoButton>
                                    </div>
                                </div>
                            </NeoCard>

                            {/* Option 2 */}
                            <NeoCard className="group bg-[#D4FF00] !p-6 md:!p-8 hover:scale-[1.01] transition-all">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <NeoBadge color="bg-black text-white">{t('pouchCustomPrintedSamplePage.option2.badge')}</NeoBadge>
                                            <h2 className="text-2xl font-black uppercase">{t('pouchCustomPrintedSamplePage.option2.title')}</h2>
                                        </div>
                                        <p className="text-black font-semibold mb-4 leading-relaxed">
                                            {t('pouchCustomPrintedSamplePage.option2.description')}
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm font-bold">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option2.ecoMaterialsLabel')}</strong> {t('pouchCustomPrintedSamplePage.option2.ecoMaterialsValue')}</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option2.styleLabel')}</strong> {t('pouchCustomPrintedSamplePage.option2.styleValue')}</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option2.statusLabel')}</strong> {t('pouchCustomPrintedSamplePage.option2.statusValue')}</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end gap-4">
                                        <div>
                                            <div className="text-4xl font-black tracking-tight mb-1 font-mono text-black">{t('pouchCustomPrintedSamplePage.option2.price')}</div>
                                            <div className="text-xs font-black uppercase mb-1 opacity-70">{t('pouchCustomPrintedSamplePage.option2.ecoLabel')}</div>
                                            <div className="text-xs font-bold text-black/60 italic mb-4">{t('pouchCustomPrintedSamplePage.option2.standardNote')}</div>
                                            <div className="text-sm font-black uppercase opacity-60 text-black">{t('pouchCustomPrintedSamplePage.option2.quantity')}</div>
                                        </div>
                                        <NeoButton to="/quote?type=sample&option=2" variant="dark" className="w-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">{t('pouchCustomPrintedSamplePage.option2.cta')}</NeoButton>
                                    </div>
                                </div>
                            </NeoCard>

                            {/* Option 3 */}
                            <NeoCard className="group !p-6 md:!p-8 bg-[#f3f4f6] hover:bg-white transition-colors">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <NeoBadge color="bg-black text-white">{t('pouchCustomPrintedSamplePage.option3.badge')}</NeoBadge>
                                            <h2 className="text-2xl font-black uppercase">{t('pouchCustomPrintedSamplePage.option3.title')}</h2>
                                        </div>
                                        <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                                            {t('pouchCustomPrintedSamplePage.option3.description')}
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option3.formatLabel')}</strong> {t('pouchCustomPrintedSamplePage.option3.formatValue')}</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>{t('pouchCustomPrintedSamplePage.option3.processLabel')}</strong> {t('pouchCustomPrintedSamplePage.option3.processValue')}</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end gap-4">
                                        <div>
                                            <div className="text-4xl font-black tracking-tight mb-1">{t('pouchCustomPrintedSamplePage.option3.price')}</div>
                                            <div className="text-sm font-bold uppercase opacity-60">{t('pouchCustomPrintedSamplePage.option3.quantity')}</div>
                                        </div>
                                        <NeoButton to="/quote?type=sample&option=3" variant="primary" className="w-full">{t('pouchCustomPrintedSamplePage.option3.cta')}</NeoButton>
                                    </div>
                                </div>
                            </NeoCard>
                        </div>

                        {/* Timeline Section */}
                        <div className="border-t-4 border-black pt-12">
                            <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {t('pouchCustomPrintedSamplePage.timeline.title')}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <NeoCard color="bg-black" className="text-white p-8">
                                    <h4 className="text-[#D4FF00] font-black uppercase text-xl mb-4">{t('pouchCustomPrintedSamplePage.timeline.production.title')}</h4>
                                    <p className="text-3xl font-black leading-tight">{t('pouchCustomPrintedSamplePage.timeline.production.leadTimeLine1')}<br/>{t('pouchCustomPrintedSamplePage.timeline.production.leadTimeLine2')}</p>
                                    <p className="text-sm mt-4 font-bold text-[#D4FF00] uppercase tracking-widest">{t('pouchCustomPrintedSamplePage.timeline.production.postApproval')}</p>
                                </NeoCard>
                                <NeoCard className="bg-white p-8">
                                    <h4 className="font-black uppercase text-xl mb-4 text-gray-400">{t('pouchCustomPrintedSamplePage.timeline.shipping.title')}</h4>
                                    <p className="text-3xl font-black leading-tight">{t('pouchCustomPrintedSamplePage.timeline.shipping.daysLine1')}<br/>{t('pouchCustomPrintedSamplePage.timeline.shipping.daysLine2')}</p>
                                    <p className="text-sm mt-4 font-bold text-green-600 uppercase tracking-widest">{t('pouchCustomPrintedSamplePage.timeline.shipping.service')}</p>
                                </NeoCard>
                            </div>
                        </div>

                        {/* Logistics info */}
                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            <NeoCard className="flex items-center gap-3 bg-gray-50 !p-4">
                                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-black text-xs">!</div>
                                <p className="text-sm font-black uppercase italic">{t('pouchCustomPrintedSamplePage.logistics.includesShipping')}</p>
                            </NeoCard>
                            <NeoCard className="flex items-center gap-3 bg-gray-50 !p-4">
                                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-black text-xs">X</div>
                                <p className="text-sm font-black uppercase italic">{t('pouchCustomPrintedSamplePage.logistics.excludesTax')}</p>
                            </NeoCard>
                        </div>
                    


                    {/* Thank you */}
                    <div className="mt-12 text-center">
                        <p className="text-2xl font-black uppercase italic tracking-tighter">{t('pouchCustomPrintedSamplePage.thankYou')}</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <div className="w-12 h-1 bg-black"></div>
                            <div className="w-12 h-1 bg-[#D4FF00]"></div>
                            <div className="w-12 h-1 bg-black"></div>
                        </div>
                    </div>
                </NeoCard>
            </div>
        </div>
    </PouchLayout>
);
};

export default PouchCustomPrintedSamplePage;
