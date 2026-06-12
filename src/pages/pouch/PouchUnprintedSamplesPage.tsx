import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge } from '../../components/pouch/PouchUI';
import ClickableImage from '../../components/ClickableImage';

const PouchUnprintedSamplesPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <PouchLayout>
            <Helmet>
                <title>{t('pouchUnprintedSamplesPage.meta.title')}</title>
                <meta name="description" content={t('pouchUnprintedSamplesPage.meta.description')} />
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <NeoCard className="p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">
                                    {t('pouchUnprintedSamplesPage.hero.titleLine1')}<br/>{t('pouchUnprintedSamplesPage.hero.titleLine2')}
                                </h1>
                                <NeoBadge color="magenta">
                                    {t('pouchUnprintedSamplesPage.hero.badge')}
                                </NeoBadge>
                            </div>
                            <div className="text-right">
                                <p className="font-['JetBrains_Mono'] font-bold text-sm uppercase opacity-60">{t('pouchUnprintedSamplesPage.hero.subtitle')}</p>
                            </div>
                        </div>

                        <div className="prose prose-xl mb-12">
                            <p className="font-bold text-xl leading-relaxed">
                                {t('pouchUnprintedSamplesPage.intro.text')} <span className="bg-[#D4FF00] px-1 italic">{t('pouchUnprintedSamplesPage.intro.highlight')}</span> {t('pouchUnprintedSamplesPage.intro.textAfter')}
                            </p>
                        </div>

                        {/* Sample Types Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Unprinted Plain Samples */}
                            <NeoCard className="group flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    {t('pouchUnprintedSamplesPage.unprintedPlain.heading')}
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-sm font-medium mb-4">{t('pouchUnprintedSamplesPage.unprintedPlain.description')}</p>
                                    <ul className="space-y-2 mb-6 text-xs font-bold uppercase">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchUnprintedSamplesPage.unprintedPlain.item1')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchUnprintedSamplesPage.unprintedPlain.item2')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchUnprintedSamplesPage.unprintedPlain.item3')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> {t('pouchUnprintedSamplesPage.unprintedPlain.item4')}</li>
                                    </ul>
                                </div>
                            </NeoCard>

                            {/* Generic Customer Samples */}
                            <NeoCard className="group flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1 border-magenta-500">
                                <div className="bg-magenta-600 text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    {t('pouchUnprintedSamplesPage.genericCustomer.heading')}
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-sm font-medium mb-4">{t('pouchUnprintedSamplesPage.genericCustomer.description')}</p>
                                    <ul className="space-y-2 mb-6 text-xs font-bold uppercase">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchUnprintedSamplesPage.genericCustomer.item1')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchUnprintedSamplesPage.genericCustomer.item2')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchUnprintedSamplesPage.genericCustomer.item3')}</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> {t('pouchUnprintedSamplesPage.genericCustomer.item4')}</li>
                                    </ul>
                                </div>
                            </NeoCard>
                        </div>

                        {/* Pricing/Order Section */}
                        <NeoCard className="bg-[#D4FF00] p-8 md:p-12 text-center border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-3xl font-black uppercase mb-4">{t('pouchUnprintedSamplesPage.orderKit.title')}</h3>
                            <div className="text-5xl font-black mb-6">{t('pouchUnprintedSamplesPage.orderKit.price')}</div>
                            <p className="font-bold mb-8 max-w-md mx-auto">{t('pouchUnprintedSamplesPage.orderKit.description')}</p>
                            <a 
                                href="https://calendly.com/30-min-free-packaging-consultancy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white px-10 py-5 font-black uppercase text-xl hover:bg-white hover:text-black transition-colors border-4 border-black"
                            >
                                {t('pouchUnprintedSamplesPage.orderKit.cta')}
                            </a>
                        </NeoCard>

                        {/* Gallery Section */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-black uppercase mb-8 italic">{t('pouchUnprintedSamplesPage.gallery.title')}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <ClickableImage src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg" alt={t('pouchUnprintedSamplesPage.gallery.alt1')} className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/compostable_snack_pouch_window.jpg" alt={t('pouchUnprintedSamplesPage.gallery.alt2')} className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/pet_food_pouch.jpg" alt={t('pouchUnprintedSamplesPage.gallery.alt3')} className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/baby_food_hero.jpg" alt={t('pouchUnprintedSamplesPage.gallery.alt4')} className="aspect-square object-cover border-2 border-black" />
                            </div>
                        </div>
                    </NeoCard>
                </div>
            </div>
        </PouchLayout>
    );
};

export default PouchUnprintedSamplesPage;
