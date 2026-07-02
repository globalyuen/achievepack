import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lock, Wallet, Palette, Clock, Layers, Ruler } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI';

const translations = {
  en: {
    title: "5 Common Custom Sample Problems (And Solutions)",
    p1: "High Setup Costs for a Single Sample",
    d1: "Setting up commercial machines for one custom printed sample is prohibitively expensive.",
    s1: "Utilize Digital Printing and our Sheet Sample option to get a high-quality visual representation without plate fees.",
    p2: "Color Inconsistencies on Prototypes",
    d2: "Hand-made or digitally printed prototypes may not exactly match the final rotogravure commercial run colors.",
    s2: "Request a Commercial Sample if exact color matching is critical, ensuring it's run on actual production equipment.",
    p3: "Long Lead Times Delaying Launch",
    d3: "Waiting weeks for a custom sample pushes back your entire product launch schedule.",
    s3: "Opt for our Hand Made Sample for the fastest turnaround time to test sizing and initial visual impact.",
    p4: "Inaccurate Material Feel",
    d4: "Standard prototypes often use different films than the final product, preventing accurate barrier or tactile testing.",
    s4: "Our Custom Printed Samples use the exact material structure specified for your full production order.",
    p5: "Uncertainty in Sizing and Fit",
    d5: "Guessing pouch dimensions can lead to wasted money if the final product doesn't fit.",
    s5: "Always start with a custom printed sample to physically test product fill volume before committing to a bulk order."
  },
  es: {
    title: "5 Problemas Comunes de Muestras Personalizadas (Y Soluciones)",
    p1: "Altos costos de configuración para una sola muestra",
    d1: "Configurar máquinas comerciales para una muestra impresa personalizada es prohibitivamente costoso.",
    s1: "Utilice la impresión digital y nuestra opción de Muestra en Hoja para obtener una representación visual de alta calidad sin tarifas de placas.",
    p2: "Inconsistencias de color en prototipos",
    d2: "Los prototipos hechos a mano o impresos digitalmente pueden no coincidir exactamente con los colores finales del tiraje comercial de rotograbado.",
    s2: "Solicite una Muestra Comercial si la coincidencia exacta de colores es crítica, asegurando que se ejecute en el equipo de producción real.",
    p3: "Largos tiempos de entrega que retrasan el lanzamiento",
    d3: "Esperar semanas por una muestra personalizada retrasa todo el calendario de lanzamiento de su producto.",
    s3: "Opte por nuestra Muestra Hecha a Mano para obtener el tiempo de respuesta más rápido y probar el tamaño y el impacto visual inicial.",
    p4: "Sensación inexacta del material",
    d4: "Los prototipos estándar suelen usar películas diferentes a las del producto final, lo que impide realizar pruebas precisas de barrera o tacto.",
    s4: "Nuestras muestras impresas personalizadas utilizan la estructura de material exacta especificada para su pedido de producción completo.",
    p5: "Incertidumbre en el tamaño y el ajuste",
    d5: "Adivinar las dimensiones de la bolsa puede llevar a desperdiciar dinero si el producto final no encaja.",
    s5: "Siempre comience con una muestra impresa personalizada para probar físicamente el volumen de llenado del producto antes de comprometerse con un pedido a granel."
  },
  fr: {
    title: "5 Problèmes Courants d'Échantillons Personnalisés (Et Solutions)",
    p1: "Coûts de configuration élevés pour un seul échantillon",
    d1: "La configuration des machines commerciales pour un échantillon imprimé personnalisé est d'un coût prohibitif.",
    s1: "Utilisez l'impression numérique et notre option d'échantillon en feuille pour obtenir une représentation visuelle de haute qualité sans frais de plaques.",
    p2: "Incohérences de couleur sur les prototypes",
    d2: "Les prototypes faits à la main ou imprimés numériquement peuvent ne pas correspondre exactement aux couleurs du tirage commercial final en héliogravure.",
    s2: "Demandez un échantillon commercial si la correspondance exacte des couleurs est essentielle, en vous assurant qu'il est réalisé sur un équipement de production réel.",
    p3: "Longs délais retardant le lancement",
    d3: "Attendre des semaines pour un échantillon personnalisé retarde l'ensemble de votre calendrier de lancement de produit.",
    s3: "Optez pour notre échantillon fait à la main pour le délai d'exécution le plus rapide afin de tester la taille et l'impact visuel initial.",
    p4: "Sensation de matériau inexacte",
    d4: "Les prototypes standard utilisent souvent des films différents de ceux du produit final, empêchant des tests précis de barrière ou tactiles.",
    s4: "Nos échantillons imprimés personnalisés utilisent la structure de matériau exacte spécifiée pour votre commande de production complète.",
    p5: "Incertitude concernant la taille et l'ajustement",
    d5: "Deviner les dimensions du sachet peut entraîner un gaspillage d'argent si le produit final ne rentre pas.",
    s5: "Commencez toujours par un échantillon imprimé personnalisé pour tester physiquement le volume de remplissage du produit avant de vous engager dans une commande en gros."
  },
  "zh-TW": {
    title: "5個常見的客製化樣品問題（及解決方案）",
    p1: "單一打樣的高昂設置成本",
    d1: "為客製化印刷樣品設置商業機器是極其昂貴的。",
    s1: "利用數位印刷和我們的平張樣品選項，無需印版費用即可獲得高質量的視覺呈現。",
    p2: "原型上的顏色不一致",
    d2: "手工製作或數位印刷的原型可能無法完全匹配最終的凹版商業印刷顏色。",
    s2: "如果準確的顏色匹配至關重要，請索取商業樣品，以確保在實際生產設備上運行。",
    p3: "漫長的交貨期延遲了產品發布",
    d3: "等待客製化樣品數週會推遲您的整個產品發布時間表。",
    s3: "選擇我們的手工樣品以獲得最快的周轉時間，來測試尺寸和初步視覺效果。",
    p4: "不準確的材質手感",
    d4: "標準原型通常使用與最終產品不同的薄膜，無法進行準確的阻隔性或觸感測試。",
    s4: "我們的客製化印刷樣品使用為您完整的生產訂單所指定的確切材質結構。",
    p5: "尺寸和貼合度的不確定性",
    d5: "如果最終產品不合適，猜測包裝袋尺寸可能會導致金錢浪費。",
    s5: "在承諾批量訂單之前，請務必先從客製化印刷樣品開始，以物理方式測試產品的填充體積。"
  }
};

const sectionsForPouch = ["5 Common Custom Sample Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Custom Sample Problems (And Solutions)"];

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
                    
                        {/* 5 Common Problems Section */}
                        <div className="border-t-4 border-black pt-12 pb-12 mt-12">
                            <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
                                {t('pouchCustomPrintedSamplePage.problems.title', translations.en.title)}
                            </h2>
                            
                            <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-w-4xl mx-auto">
                                <img 
                                    src="/imgs/knowledge/custom-sample-pain-points.jpg" 
                                    alt="Custom Sample Pain Points and Solutions"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div className="space-y-8 max-w-4xl mx-auto">
                                {[
                                    {
                                        title: t('pouchCustomPrintedSamplePage.problems.items.0.title', translations.en.p1),
                                        desc: t('pouchCustomPrintedSamplePage.problems.items.0.desc', translations.en.d1),
                                        solution: t('pouchCustomPrintedSamplePage.problems.items.0.solution', translations.en.s1),
                                        icon: <Wallet className="w-8 h-8 text-pink-500" />
                                    },
                                    {
                                        title: t('pouchCustomPrintedSamplePage.problems.items.1.title', translations.en.p2),
                                        desc: t('pouchCustomPrintedSamplePage.problems.items.1.desc', translations.en.d2),
                                        solution: t('pouchCustomPrintedSamplePage.problems.items.1.solution', translations.en.s2),
                                        icon: <Palette className="w-8 h-8 text-blue-500" />
                                    },
                                    {
                                        title: t('pouchCustomPrintedSamplePage.problems.items.2.title', translations.en.p3),
                                        desc: t('pouchCustomPrintedSamplePage.problems.items.2.desc', translations.en.d3),
                                        solution: t('pouchCustomPrintedSamplePage.problems.items.2.solution', translations.en.s3),
                                        icon: <Clock className="w-8 h-8 text-orange-500" />
                                    },
                                    {
                                        title: t('pouchCustomPrintedSamplePage.problems.items.3.title', translations.en.p4),
                                        desc: t('pouchCustomPrintedSamplePage.problems.items.3.desc', translations.en.d4),
                                        solution: t('pouchCustomPrintedSamplePage.problems.items.3.solution', translations.en.s4),
                                        icon: <Layers className="w-8 h-8 text-green-500" />
                                    },
                                    {
                                        title: t('pouchCustomPrintedSamplePage.problems.items.4.title', translations.en.p5),
                                        desc: t('pouchCustomPrintedSamplePage.problems.items.4.desc', translations.en.d5),
                                        solution: t('pouchCustomPrintedSamplePage.problems.items.4.solution', translations.en.s5),
                                        icon: <Ruler className="w-8 h-8 text-purple-500" />
                                    }
                                ].map((problem, idx) => (
                                    <div key={idx} className="flex gap-4 md:gap-6 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <div className="flex-shrink-0 mt-1">
                                            {problem.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-['Space_Grotesk'] font-black text-xl md:text-2xl uppercase mb-2">
                                                {problem.title}
                                            </h3>
                                            <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                                                {problem.desc}
                                            </p>
                                            <div className="bg-white border-2 border-black p-4">
                                                <p className="font-['JetBrains_Mono'] text-sm font-bold flex items-start gap-2">
                                                    <span className="text-green-600 uppercase">{t('pouchCustomPrintedSamplePage.problems.solutionLabel', "Solution:")}</span>
                                                    <span className="text-black">{problem.solution}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
