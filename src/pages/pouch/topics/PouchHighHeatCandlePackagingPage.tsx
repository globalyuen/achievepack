import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge, NeoButton } from '../../../components/pouch/PouchUI';
import ClickableImage from '../../../components/ClickableImage';
import { Thermometer, Zap, Shield, Database, ArrowRight } from 'lucide-react';

const PouchHighHeatCandlePackagingPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <PouchLayout>
            <Helmet>
                <title>{t('pouchHighHeatCandlePackagingPage.meta.title')}</title>
                <meta name="description" content={t('pouchHighHeatCandlePackagingPage.meta.description')} />
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <NeoCard className="p-8 md:p-12 mb-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00] -rotate-45 translate-x-16 -translate-y-16 border-b-4 border-black"></div>
                        
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8 relative z-10">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4" dangerouslySetInnerHTML={{ __html: t('pouchHighHeatCandlePackagingPage.hero.title') }} />
                                <NeoBadge color="magenta">
                                    {t('pouchHighHeatCandlePackagingPage.hero.badge')}
                                </NeoBadge>
                            </div>
                            <div className="text-right">
                                <p className="font-['JetBrains_Mono'] font-bold text-sm uppercase opacity-60">{t('pouchHighHeatCandlePackagingPage.hero.subtitle')}</p>
                                <p className="font-['JetBrains_Mono'] font-bold text-xl mt-2">{t('pouchHighHeatCandlePackagingPage.hero.side_title')}</p>
                            </div>
                        </div>

                        <div className="prose prose-xl mb-12">
                            <p className="font-bold text-2xl leading-tight" dangerouslySetInnerHTML={{ __html: t('pouchHighHeatCandlePackagingPage.hero.intro') }} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <ClickableImage 
                                src="/imgs/illustrated/a_topic_01_eco_food_pkg_var_b_3398751.webp" 
                                alt={t('pouchHighHeatCandlePackagingPage.hero.title').replace(/<br\s*\/?>/gi, ' ')} 
                                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
                            />
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-black text-white p-3 h-fit border-2 border-black">
                                        <Thermometer size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">{t('pouchHighHeatCandlePackagingPage.hero.t1_title')}</h3>
                                        <p className="text-sm font-medium">{t('pouchHighHeatCandlePackagingPage.hero.t1_desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-magenta-600 text-white p-3 h-fit border-2 border-black">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">{t('pouchHighHeatCandlePackagingPage.hero.t2_title')}</h3>
                                        <p className="text-sm font-medium">{t('pouchHighHeatCandlePackagingPage.hero.t2_desc')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-[#D4FF00] text-black p-3 h-fit border-2 border-black">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">{t('pouchHighHeatCandlePackagingPage.hero.t3_title')}</h3>
                                        <p className="text-sm font-medium">{t('pouchHighHeatCandlePackagingPage.hero.t3_desc')}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </NeoCard>

                    {/* Technical Deep Dive */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <NeoCard className="bg-white md:col-span-2">
                            <h3 className="text-3xl font-black uppercase mb-6 italic flex items-center gap-2">
                                <Database size={32} /> {t('pouchHighHeatCandlePackagingPage.science.title')}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-black uppercase border-b-2 border-black pb-1">{t('pouchHighHeatCandlePackagingPage.science.h1_title')}</h4>
                                    <p className="text-sm font-bold">{t('pouchHighHeatCandlePackagingPage.science.h1_desc')}</p>
                                    <ul className="text-xs font-bold space-y-1">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchHighHeatCandlePackagingPage.science.h1_l1')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchHighHeatCandlePackagingPage.science.h1_l2')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchHighHeatCandlePackagingPage.science.h1_l3')}</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-black uppercase border-b-2 border-black pb-1">{t('pouchHighHeatCandlePackagingPage.science.h2_title')}</h4>
                                    <p className="text-sm font-bold">{t('pouchHighHeatCandlePackagingPage.science.h2_desc')}</p>
                                    <ul className="text-xs font-bold space-y-1">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchHighHeatCandlePackagingPage.science.h2_l1')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchHighHeatCandlePackagingPage.science.h2_l2')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchHighHeatCandlePackagingPage.science.h2_l3')}</li>
                                    </ul>
                                </div>
                            </div>
                        </NeoCard>
                        <NeoCard className="bg-black text-white" color="bg-black">
                            <h3 className="text-2xl font-black uppercase mb-4 text-[#D4FF00]">{t('pouchHighHeatCandlePackagingPage.spec.title')}</h3>
                            <div className="space-y-4 font-['JetBrains_Mono']">
                                <div>
                                    <p className="text-xs opacity-60 uppercase">{t('pouchHighHeatCandlePackagingPage.spec.dims')}</p>
                                    <p className="text-lg">{t('pouchHighHeatCandlePackagingPage.spec.dims_val')}</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-60 uppercase">{t('pouchHighHeatCandlePackagingPage.spec.vol')}</p>
                                    <p className="text-lg">{t('pouchHighHeatCandlePackagingPage.spec.vol_val')}</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-60 uppercase">{t('pouchHighHeatCandlePackagingPage.spec.print')}</p>
                                    <p className="text-lg">{t('pouchHighHeatCandlePackagingPage.spec.print_val')}</p>
                                </div>
                                <div className="pt-4 border-t border-white/20">
                                    <p className="text-[#D4FF00] font-black text-xs uppercase">{t('pouchHighHeatCandlePackagingPage.spec.cert')}</p>
                                    <p className="text-[10px] mt-1 italic uppercase">{t('pouchHighHeatCandlePackagingPage.spec.cert_val')}</p>
                                </div>
                            </div>
                        </NeoCard>

                    </div>

                    {/* Supplier Matrix */}
                    <NeoCard className="mb-12 !p-0 overflow-hidden border-4 border-black">
                        <div className="bg-black text-white p-4 font-black uppercase tracking-widest flex justify-between">
                            <span>{t('pouchHighHeatCandlePackagingPage.supply.top_bar')}</span>
                            <span className="text-[#D4FF00]">{t('pouchHighHeatCandlePackagingPage.supply.top_bar_right')}</span>
                        </div>
                        <div className="p-8">
                            <div className="prose mb-8">
                                <p className="font-bold text-xl uppercase italic">{t('pouchHighHeatCandlePackagingPage.supply.intro_title')}</p>
                                <p className="font-medium">{t('pouchHighHeatCandlePackagingPage.supply.intro_desc')}</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="border-4 border-black p-6 bg-[#D4FF00]">
                                    <h4 className="font-black uppercase text-2xl mb-4">{t('pouchHighHeatCandlePackagingPage.supply.launch_title')}</h4>
                                    <NeoBadge color="black">{t('pouchHighHeatCandlePackagingPage.supply.launch_badge')}</NeoBadge>
                                    <p className="text-sm font-bold mt-4 leading-tight">{t('pouchHighHeatCandlePackagingPage.supply.launch_desc')}</p>
                                </div>
                                <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                    <h4 className="font-black uppercase text-2xl mb-4">{t('pouchHighHeatCandlePackagingPage.supply.growth_title')}</h4>
                                    <NeoBadge color="magenta">{t('pouchHighHeatCandlePackagingPage.supply.growth_badge')}</NeoBadge>
                                    <p className="text-sm font-bold mt-4 leading-tight">{t('pouchHighHeatCandlePackagingPage.supply.growth_desc')}</p>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t-4 border-black text-center">
                                <p className="font-black text-xl uppercase italic">{t('pouchHighHeatCandlePackagingPage.supply.footer')}</p>
                            </div>
                        </div>
                    </NeoCard>


                    {/* Expert Knowledge Section */}
                    <NeoCard className="bg-[#D4FF00] p-8 md:p-12 mb-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-4xl font-black uppercase mb-6 italic">{t('pouchHighHeatCandlePackagingPage.structure.title')}</h3>
                                <div className="space-y-4 font-bold text-lg">
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>{t('pouchHighHeatCandlePackagingPage.structure.l1')}</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>{t('pouchHighHeatCandlePackagingPage.structure.l2')}</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>{t('pouchHighHeatCandlePackagingPage.structure.l3')}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3">
                                <ClickableImage src="/imgs/illustrated/a_topic_02_dtc_pkg_var_c_7412861.webp" alt={t('pouchHighHeatCandlePackagingPage.structure.title')} className="border-4 border-black" />
                            </div>
                        </div>
                    </NeoCard>


                    {/* CTA */}
                    <div className="text-center">
                        <h3 className="text-3xl font-black uppercase mb-8 italic underline decoration-[#D4FF00] decoration-8 underline-offset-8">{t('pouchHighHeatCandlePackagingPage.cta.title')}</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NeoButton 
                                href="https://calendly.com/30-min-free-packaging-consultancy"
                                variant="dark"
                                className="!px-12 !py-6 text-xl"
                            >
                                {t('pouchHighHeatCandlePackagingPage.cta.book')}
                            </NeoButton>
                            <NeoButton 
                                to="/unprinted-samples"
                                variant="primary"
                                className="!px-12 !py-6 text-xl"
                            >
                                {t('pouchHighHeatCandlePackagingPage.cta.sample')}
                            </NeoButton>
                        </div>
                        <p className="mt-8 font-['JetBrains_Mono'] font-bold text-sm">{t('pouchHighHeatCandlePackagingPage.cta.footer')}</p>
                    </div>
                </div>
            </div>
        </PouchLayout>
    );
};

export default PouchHighHeatCandlePackagingPage;
