import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge, NeoButton } from '../../../components/pouch/PouchUI';
import ClickableImage from '../../../components/ClickableImage';
import { Thermometer, Zap, Shield, Database, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

const localTranslations = {
    en: {
        title: "5 Common High Heat Candle Packaging Problems (And Solutions)",
        problems: [
            {
                title: "1. Melting & Deformation During Transit",
                desc: "Candles exposed to summer heat can melt and warp standard packaging.",
                solution: "Solution: Use heat-resistant, multi-layer laminated films that maintain structural integrity up to 90°C (194°F)."
            },
            {
                title: "2. Fragrance & Essential Oil Loss",
                desc: "Volatile fragrance oils can seep out, diminishing the candle's scent over time.",
                solution: "Solution: Integrate high-barrier AL (Aluminum) or VMPET layers to lock in aromas and prevent oil migration."
            },
            {
                title: "3. Leaking of Melted Wax",
                desc: "If wax melts, weak seals can burst, ruining other products in the shipment.",
                solution: "Solution: Engineer reinforced side gussets and bottom seals using heavy-duty LLDPE for leak-proof performance."
            },
            {
                title: "4. Aesthetic Degradation & Grease Marks",
                desc: "Oils can stain the exterior packaging, making the product look cheap.",
                solution: "Solution: Apply an oil-resistant matte or gloss BOPP outer layer that repels grease and maintains a premium look."
            },
            {
                title: "5. Recyclability vs. Heat Resistance",
                desc: "Traditional heat-resistant pouches use mixed materials that are non-recyclable.",
                solution: "Solution: Transition to Mono-PE high-temperature tolerant structures that are fully recyclable (Store Drop-off)."
            }
        ]
    },
    es: {
        title: "5 Problemas Comunes de Empaque para Velas a Alta Temperatura (Y Soluciones)",
        problems: [
            {
                title: "1. Derretimiento y Deformación Durante el Tránsito",
                desc: "Las velas expuestas al calor del verano pueden derretirse y deformar el empaque estándar.",
                solution: "Solución: Utilice películas laminadas multicapa resistentes al calor que mantienen la integridad estructural hasta 90°C (194°F)."
            },
            {
                title: "2. Pérdida de Fragancia y Aceites Esenciales",
                desc: "Los aceites aromáticos volátiles pueden filtrarse, disminuyendo el aroma de la vela con el tiempo.",
                solution: "Solución: Integre capas de alta barrera de AL (Aluminio) o VMPET para retener aromas y evitar la migración de aceite."
            },
            {
                title: "3. Fuga de Cera Derretida",
                desc: "Si la cera se derrite, los sellos débiles pueden reventar, arruinando otros productos en el envío.",
                solution: "Solución: Diseñe fuelles laterales y sellos inferiores reforzados usando LLDPE de alta resistencia para un rendimiento a prueba de fugas."
            },
            {
                title: "4. Degradación Estética y Marcas de Grasa",
                desc: "Los aceites pueden manchar el empaque exterior, haciendo que el producto parezca barato.",
                solution: "Solución: Aplique una capa exterior de BOPP mate o brillante resistente al aceite que repela la grasa y mantenga un aspecto premium."
            },
            {
                title: "5. Reciclabilidad vs. Resistencia al Calor",
                desc: "Las bolsas tradicionales resistentes al calor usan materiales mixtos que no son reciclables.",
                solution: "Solución: Haga la transición a estructuras de Mono-PE tolerantes a altas temperaturas que son totalmente reciclables."
            }
        ]
    },
    fr: {
        title: "5 Problèmes Courants d'Emballage de Bougies à Haute Température (Et Solutions)",
        problems: [
            {
                title: "1. Fonte et Déformation Pendant le Transport",
                desc: "Les bougies exposées à la chaleur estivale peuvent fondre et déformer l'emballage standard.",
                solution: "Solution : Utilisez des films multicouches résistants à la chaleur qui maintiennent l'intégrité structurelle jusqu'à 90°C."
            },
            {
                title: "2. Perte de Parfum et d'Huiles Essentielles",
                desc: "Les huiles parfumées volatiles peuvent s'infiltrer, diminuant le parfum de la bougie avec le temps.",
                solution: "Solution : Intégrez des couches barrières en AL (Aluminium) ou VMPET pour retenir les arômes et empêcher la migration d'huile."
            },
            {
                title: "3. Fuite de Cire Fondue",
                desc: "Si la cire fond, les joints faibles peuvent éclater, ruinant d'autres produits dans l'expédition.",
                solution: "Solution : Concevez des soufflets latéraux et des joints inférieurs renforcés en utilisant du LLDPE robuste pour des performances étanches."
            },
            {
                title: "4. Dégradation Esthétique et Traces de Graisse",
                desc: "Les huiles peuvent tacher l'emballage extérieur, donnant au produit un aspect bon marché.",
                solution: "Solution : Appliquez une couche extérieure en BOPP mat ou brillant résistante à l'huile qui repousse la graisse et maintient un aspect premium."
            },
            {
                title: "5. Recyclabilité vs. Résistance à la Chaleur",
                desc: "Les sachets traditionnels résistants à la chaleur utilisent des matériaux mixtes non recyclables.",
                solution: "Solution : Passez à des structures Mono-PE tolérantes aux hautes températures qui sont entièrement recyclables."
            }
        ]
    },
    "zh-TW": {
        title: "高溫蠟燭包裝的5個常見問題 (及其解決方案)",
        problems: [
            {
                title: "1. 運輸過程中的融化與變形",
                desc: "暴露在夏季高溫下的蠟燭可能會融化並使標準包裝變形。",
                solution: "解決方案：使用耐熱的多層複合薄膜，可在高達 90°C (194°F) 的環境下保持結構完整性。"
            },
            {
                title: "2. 香氣與精油流失",
                desc: "易揮發的香精油可能會滲出，導致蠟燭的香味隨著時間減弱。",
                solution: "解決方案：加入高阻隔的鋁箔(AL)或鍍鋁(VMPET)層，鎖住香氣並防止油脂滲透。"
            },
            {
                title: "3. 融化蠟液外漏",
                desc: "如果蠟融化，薄弱的封口可能會破裂，毀壞運輸中的其他產品。",
                solution: "解決方案：使用重型 LLDPE 設計加固的側邊摺邊和底部封口，以實現防漏性能。"
            },
            {
                title: "4. 外觀受損與油漬",
                desc: "油脂會弄髒外包裝，使產品看起來廉價。",
                solution: "解決方案：塗上一層防油的啞光或亮光 BOPP 外層，可排斥油脂並保持高級質感。"
            },
            {
                title: "5. 可回收性與耐熱性的衝突",
                desc: "傳統的耐熱袋使用不可回收的混合材料。",
                solution: "解決方案：轉向使用可耐高溫的單一材質 PE (Mono-PE) 結構，實現完全可回收。"
            }
        ]
    }
};

const PouchHighHeatCandlePackagingPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language || 'en';
    const localT = localTranslations[currentLang as keyof typeof localTranslations] || localTranslations.en;
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


                    {/* 5 Common Problems Section */}
                    <NeoCard className="mb-12 border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white">
                        <h3 className="text-3xl md:text-4xl font-black uppercase mb-8 italic text-center underline decoration-magenta-600 decoration-8 underline-offset-8">
                            {localT.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                {localT.problems.map((prob, idx) => (
                                    <div key={idx} className="border-l-4 border-black pl-4">
                                        <h4 className="font-black uppercase text-xl flex items-center gap-2 mb-2">
                                            <AlertTriangle className="text-magenta-600 shrink-0" size={24} />
                                            {prob.title}
                                        </h4>
                                        <p className="font-medium text-sm mb-2">{prob.desc}</p>
                                        <p className="font-bold text-sm flex items-start gap-2 text-[#6b8000] bg-[#f4ffcc] p-2 border-2 border-[#D4FF00]">
                                            <CheckCircle2 className="shrink-0 mt-0.5" size={16} />
                                            <span>{prob.solution}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="h-full">
                                <ClickableImage 
                                    src="/imgs/knowledge/high-heat-candle-packaging-pain-points.jpg" 
                                    alt="High Heat Candle Packaging Pain Points" 
                                    className="border-4 border-black w-full h-full object-cover shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
                                />
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
