import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge } from '../../components/pouch/PouchUI';
import ClickableImage from '../../components/ClickableImage';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const sectionsForPouch = ["5 Common Unprinted Pouch Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Unprinted Pouch Problems (And Solutions)"];

const translations: Record<string, any> = {
  en: {
    title: "5 Common Unprinted Pouch Problems (And Solutions)",
    items: [
      {
        problem: "Unsure of material look & feel before bulk printing.",
        solution: "Unprinted sample kits let you feel Kraft, PET, PE physically."
      },
      {
        problem: "Unsure if your product fits inside the pouch.",
        solution: "Physical blank samples allow for live fill testing."
      },
      {
        problem: "Testing zipper, spout, and tear-notch durability.",
        solution: "Blank pouches are fully functional, test the closure and tearing directly."
      },
      {
        problem: "High cost & delay of getting full custom-printed samples.",
        solution: "Blank stock samples ship immediately at a fraction of the cost."
      },
      {
        problem: "Need to configure heat sealer equipment settings.",
        solution: "Blank samples are identical in structure, allowing you to run seal tests before final production."
      }
    ]
  },
  es: {
    title: "5 Problemas Comunes con Bolsas Lisas (Y Soluciones)",
    items: [
      {
        problem: "Inseguridad sobre el aspecto y tacto del material antes de imprimir al por mayor.",
        solution: "Los kits de muestras sin imprimir permiten sentir físicamente el Kraft, PET y PE."
      },
      {
        problem: "Dudas sobre si el producto cabe dentro de la bolsa.",
        solution: "Las muestras físicas en blanco permiten pruebas de llenado reales."
      },
      {
        problem: "Necesidad de probar la durabilidad de cierres, boquillas y muescas de apertura.",
        solution: "Las bolsas lisas son totalmente funcionales, pruebe el cierre y la apertura directamente."
      },
      {
        problem: "Alto costo y demora en obtener muestras impresas personalizadas.",
        solution: "Las muestras en blanco en stock se envían inmediatamente por una fracción del costo."
      },
      {
        problem: "Necesidad de configurar los ajustes del equipo de termosellado.",
        solution: "Las muestras en blanco tienen una estructura idéntica, permitiendo pruebas de sellado antes de la producción final."
      }
    ]
  },
  fr: {
    title: "5 Problèmes Courants avec les Sachets Neutres (Et Solutions)",
    items: [
      {
        problem: "Incertitude sur l'aspect et le toucher du matériau avant l'impression en vrac.",
        solution: "Les kits d'échantillons non imprimés vous permettent de toucher le Kraft, le PET et le PE physiquement."
      },
      {
        problem: "Doute sur la capacité du produit à rentrer dans le sachet.",
        solution: "Les échantillons physiques neutres permettent des tests de remplissage en conditions réelles."
      },
      {
        problem: "Test de la durabilité de la fermeture zip, du bouchon et de l'encoche de déchirure.",
        solution: "Les sachets neutres sont entièrement fonctionnels, testez directement la fermeture et la déchirure."
      },
      {
        problem: "Coût élevé et délai pour obtenir des échantillons imprimés sur mesure.",
        solution: "Les échantillons en stock neutres sont expédiés immédiatement à une fraction du coût."
      },
      {
        problem: "Nécessité de configurer les réglages de l'équipement de thermocollage.",
        solution: "Les échantillons neutres ont une structure identique, vous permettant de faire des tests de scellage avant la production finale."
      }
    ]
  },
  'zh-TW': {
    title: "5個常見空白軟包裝痛點 (與解決方案)",
    items: [
      {
        problem: "大量印刷前無法確認材質的外觀與觸感。",
        solution: "無印刷樣品包讓您能實際感受牛皮紙、PET和PE材質。"
      },
      {
        problem: "不確定產品是否能裝入袋中。",
        solution: "實體空白樣品可讓您進行實際充填測試。"
      },
      {
        problem: "需要測試夾鏈、吸嘴和撕口的耐用性。",
        solution: "空白袋具備完整功能，可直接測試封口和撕開效果。"
      },
      {
        problem: "取得全客製印刷樣品的成本高且耗時。",
        solution: "庫存空白樣品可立即出貨，且成本大幅降低。"
      },
      {
        problem: "需要設定熱封設備的參數。",
        solution: "空白樣品結構相同，可讓您在最終生產前進行封口測試。"
      }
    ]
  }
};

const PouchUnprintedSamplesPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = translations[i18n.language] ? i18n.language : 'en';
    const langData = translations[currentLang];

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
                        <NeoCard className="bg-[#D4FF00] p-8 md:p-12 text-center border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16">
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

                        {/* 5 Common Problems Section */}
                        <div className="mb-16">
                            <h3 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-4">
                                {langData.title}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                <div className="space-y-6">
                                    {langData.items.map((item: any, index: number) => (
                                        <NeoCard key={index} className="p-6 bg-white border-2 border-black">
                                            <div className="flex gap-4 mb-3">
                                                <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                                                <p className="font-bold">{item.problem}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                                <p className="text-gray-700 font-medium">{item.solution}</p>
                                            </div>
                                        </NeoCard>
                                    ))}
                                </div>
                                <div className="sticky top-8">
                                    <img 
                                        src="/imgs/knowledge/unprinted-pouch-samples-pain-points.jpg" 
                                        alt="Unprinted Pouch Samples Pain Points" 
                                        className="w-full h-auto border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

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
