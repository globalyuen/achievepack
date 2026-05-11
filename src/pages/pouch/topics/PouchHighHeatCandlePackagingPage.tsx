import React from 'react';
import { Helmet } from 'react-helmet-async';
import PouchLayout from '../../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge, NeoButton } from '../../../components/pouch/PouchUI';
import ClickableImage from '../../../components/ClickableImage';
import { Thermometer, Zap, Shield, Sparkles, Database, SearchCheck, CheckCircle, ArrowRight } from 'lucide-react';

const PouchHighHeatCandlePackagingPage: React.FC = () => {
    return (
        <PouchLayout>
            <Helmet>
                <title>High-Heat Compostable Candle Packaging (85°C+) - Pouch.eco</title>
                <meta name="description" content="Heat-resistant compostable pouches for candle wax pouring. Handle 85°C+ temperatures with PBS and NatureFlex materials. Digital printing for low MOQ startups." />
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <NeoCard className="p-8 md:p-12 mb-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00] -rotate-45 translate-x-16 -translate-y-16 border-b-4 border-black"></div>
                        
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8 relative z-10">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-4">
                                    Heat<br/>Proof<br/>Compost
                                </h1>
                                <NeoBadge color="magenta">
                                    85°C Pour Rating
                                </NeoBadge>
                            </div>
                            <div className="text-right">
                                <p className="font-['JetBrains_Mono'] font-bold text-sm uppercase opacity-60">Engineered for Candle Wax</p>
                                <p className="font-['JetBrains_Mono'] font-bold text-xl mt-2">Ditch the Glass</p>
                            </div>
                        </div>

                        <div className="prose prose-xl mb-12">
                            <p className="font-bold text-2xl leading-tight">
                                Pouring hot wax at 85°C usually melts eco-plastic. <span className="bg-[#D4FF00] px-2 italic">We fixed that.</span> Using PBS and NatureFlex, we created a pouch that handles the heat while remaining 100% home compostable.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <ClickableImage 
                                src="/imgs/topics/heat-resistant-candle-hero.png" 
                                alt="Hot wax pouring into pouch" 
                                className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
                            />
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-black text-white p-3 h-fit border-2 border-black">
                                        <Thermometer size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">Temperature King</h3>
                                        <p className="text-sm font-medium">PLA softs at 50°C. Our PBS-reinforced pouches stay rigid at 85°C - 95°C.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-magenta-600 text-white p-3 h-fit border-2 border-black">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">Low MOQ Digital</h3>
                                        <p className="text-sm font-medium">6 designs? 178 units each? No problem. Digital printing means no plate fees.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-[#D4FF00] text-black p-3 h-fit border-2 border-black">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-lg">Aromatic Seal</h3>
                                        <p className="text-sm font-medium">High-barrier NatureFlex keeps fragrances locked in. No essential oil migration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NeoCard>

                    {/* Technical Deep Dive */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <NeoCard className="bg-white md:col-span-2">
                            <h3 className="text-3xl font-black uppercase mb-6 italic flex items-center gap-2">
                                <Database size={32} /> Material Science
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-black uppercase border-b-2 border-black pb-1">The High-Heat Layer</h4>
                                    <p className="text-sm font-bold">Polybutylene succinate (PBS) is the hero. Unlike starch-based films, PBS has a high melting point and superior flexibility.</p>
                                    <ul className="text-xs font-bold space-y-1">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> 85°C Continuous Pour</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> ASTM D6400 Certified</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> Industrial & Home Compost</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-black uppercase border-b-2 border-black pb-1">The Barrier Layer</h4>
                                    <p className="text-sm font-bold">NatureFlex™ Cellulose derived from wood pulp provides the oxygen barrier and high-gloss finish.</p>
                                    <ul className="text-xs font-bold space-y-1">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Zero Fragrance Leakage</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Static-Free Filling</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Wood-Based Sustainable</li>
                                    </ul>
                                </div>
                            </div>
                        </NeoCard>
                        <NeoCard className="bg-black text-white">
                            <h3 className="text-2xl font-black uppercase mb-4 text-[#D4FF00]">The Spec</h3>
                            <div className="space-y-4 font-['JetBrains_Mono']">
                                <div>
                                    <p className="text-xs opacity-60">DIMENSIONS</p>
                                    <p className="text-lg">155 x 229 x 99mm</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-60">WAX VOLUME</p>
                                    <p className="text-lg">284g (Hardened)</p>
                                </div>
                                <div>
                                    <p className="text-xs opacity-60">PRINTING</p>
                                    <p className="text-lg">Digital CMYK</p>
                                </div>
                                <div className="pt-4 border-t border-white/20">
                                    <p className="text-[#D4FF00] font-black text-xs">CERTIFICATIONS</p>
                                    <p className="text-[10px] mt-1 italic">OK COMPOST / BPI / ASTM D6400</p>
                                </div>
                            </div>
                        </NeoCard>
                    </div>

                    {/* Supplier Matrix */}
                    <NeoCard className="mb-12 !p-0 overflow-hidden border-4 border-black">
                        <div className="bg-black text-white p-4 font-black uppercase tracking-widest flex justify-between">
                            <span>Supplier Research Audit</span>
                            <span className="text-[#D4FF00]">May 2026 Update</span>
                        </div>
                        <div className="p-8">
                            <div className="prose mb-8">
                                <p className="font-bold">我們研究了全球供應商，針對 10-15 款可堆肥袋進行了壓力測試。以下是我們為蠟燭品牌推薦的最佳選擇：</p>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="border-4 border-black p-4 bg-green-100">
                                    <h4 className="font-black uppercase mb-2">Anacotte</h4>
                                    <NeoBadge color="black">BEST FOR STARTUPS</NeoBadge>
                                    <p className="text-xs font-bold mt-4">專精於極低起訂量。支持單款 200 個起訂。NatureFlex/PBS 複合膜耐熱達 95°C。</p>
                                </div>
                                <div className="border-4 border-black p-4 bg-orange-100">
                                    <h4 className="font-black uppercase mb-2">DXC / Qiyu</h4>
                                    <NeoBadge color="black">BEST SCALE VALUE</NeoBadge>
                                    <p className="text-xs font-bold mt-4">使用高耐熱 PBS 熱封層。耐熱達 100°C。批量生產單價最低 ($0.80)。</p>
                                </div>
                                <div className="border-4 border-black p-4 bg-white">
                                    <h4 className="font-black uppercase mb-2">Enviro Flex</h4>
                                    <NeoBadge color="black">TESTED FOR WAX</NeoBadge>
                                    <p className="text-xs font-bold mt-4">官網明確標註支持蠟燭澆注。熔點 85°C。適合標準蠟燭灌裝流程。</p>
                                </div>
                            </div>
                        </div>
                    </NeoCard>

                    {/* Expert Knowledge Section */}
                    <NeoCard className="bg-[#D4FF00] p-8 md:p-12 mb-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-4xl font-black uppercase mb-6 italic">Know-How: Seal Integrity</h3>
                                <div className="space-y-4 font-bold text-lg">
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>Heavy Wax Pressure: A 99mm gusset must have a 5mm overlap seal to prevent corner leaks.</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>Cooling Shrinkage: NatureFlex prevents the "crinkle" effect during wax thermal contraction.</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <ArrowRight className="mt-1 shrink-0" />
                                        <span>Microwave Safety: CPLA layers prevent localized melting during reheating.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3">
                                <ClickableImage src="/imgs/topics/heat-resistant-layers-tech.png" alt="Tech layers" className="border-4 border-black" />
                            </div>
                        </div>
                    </NeoCard>

                    {/* CTA */}
                    <div className="text-center">
                        <h3 className="text-3xl font-black uppercase mb-8 italic underline decoration-[#D4FF00] decoration-8 underline-offset-8">Ready to Ditch the Glass?</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NeoButton 
                                href="https://calendly.com/30-min-free-packaging-consultancy"
                                color="black"
                                className="!px-12 !py-6 text-xl"
                            >
                                Book Consultation
                            </NeoButton>
                            <NeoButton 
                                to="/unprinted-samples"
                                color="magenta"
                                className="!px-12 !py-6 text-xl"
                            >
                                Request Sample Kit
                            </NeoButton>
                        </div>
                        <p className="mt-8 font-['JetBrains_Mono'] font-bold text-sm">WE HAVE THE KNOWLEDGE. YOU HAVE THE VISION.</p>
                    </div>
                </div>
            </div>
        </PouchLayout>
    );
};

export default PouchHighHeatCandlePackagingPage;
