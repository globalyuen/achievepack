import React from 'react';
import { Helmet } from 'react-helmet-async';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoCard, NeoBadge } from '../../components/pouch/PouchUI';
import ClickableImage from '../../components/ClickableImage';

const PouchUnprintedSamplesPage: React.FC = () => {
    return (
        <PouchLayout>
            <Helmet>
                <title>Unprinted & Generic Samples - Pouch.eco</title>
                <meta name="description" content="Request unprinted plain samples or generic customer printed samples to verify material quality, thickness, and sizing." />
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <NeoCard className="p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">
                                    Unprinted<br/>Samples
                                </h1>
                                <NeoBadge color="magenta">
                                    Material Check
                                </NeoBadge>
                            </div>
                            <div className="text-right">
                                <p className="font-['JetBrains_Mono'] font-bold text-sm uppercase opacity-60">Verify Quality Before Printing</p>
                            </div>
                        </div>

                        <div className="prose prose-xl mb-12">
                            <p className="font-bold text-xl leading-relaxed">
                                Not ready for custom printing? Get our <span className="bg-[#D4FF00] px-1 italic">Material Excellence Kit</span> featuring unprinted plain pouches and high-quality generic samples from our production line.
                            </p>
                        </div>

                        {/* Sample Types Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Unprinted Plain Samples */}
                            <NeoCard className="group flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1">
                                <div className="bg-black text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    Unprinted Plain Samples
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-sm font-medium mb-4">Pure material verification. No ink, just the raw material texture and structure.</p>
                                    <ul className="space-y-2 mb-6 text-xs font-bold uppercase">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> Home Compostable Kraft</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> Recyclable Mono-PE</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> Bio-PE Sugarcane</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> High Barrier PCR</li>
                                    </ul>
                                </div>
                            </NeoCard>

                            {/* Generic Customer Samples */}
                            <NeoCard className="group flex flex-col !p-0 overflow-hidden transition-transform hover:-translate-y-1 border-magenta-500">
                                <div className="bg-magenta-600 text-white py-3 text-center font-black text-sm uppercase tracking-widest">
                                    Generic Customer Samples
                                </div>
                                <div className="p-6 flex-grow">
                                    <p className="text-sm font-medium mb-4">Real samples from our production line. Verify print quality, registration, and finish (Matte/Gloss).</p>
                                    <ul className="space-y-2 mb-6 text-xs font-bold uppercase">
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Coffee Bags with Valves</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Snack Pouches</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Pet Food Pouches</li>
                                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-magenta-600"></div> Spouted Juice Pouches</li>
                                    </ul>
                                </div>
                            </NeoCard>
                        </div>

                        {/* Pricing/Order Section */}
                        <NeoCard className="bg-[#D4FF00] p-8 md:p-12 text-center border-black border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-3xl font-black uppercase mb-4">Order Evaluation Kit</h3>
                            <div className="text-5xl font-black mb-6">USD $50</div>
                            <p className="font-bold mb-8 max-w-md mx-auto">Includes 10-15 assorted samples covering all our main materials and structures. Shipping via FedEx/DHL included.</p>
                            <a 
                                href="https://calendly.com/30-min-free-packaging-consultancy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white px-10 py-5 font-black uppercase text-xl hover:bg-white hover:text-black transition-colors border-4 border-black"
                            >
                                Request Kit Now
                            </a>
                        </NeoCard>

                        {/* Gallery Section */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-black uppercase mb-8 italic">Visual Reference</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <ClickableImage src="/imgs/artifacts/compostable_coffee_stand_up_pouch.jpg" alt="Generic Coffee Sample" className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/compostable_snack_pouch_window.jpg" alt="Generic Snack Sample" className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/pet_food_pouch.jpg" alt="Generic Pet Food Sample" className="aspect-square object-cover border-2 border-black" />
                                <ClickableImage src="/imgs/artifacts/baby_food_hero.jpg" alt="Generic Baby Food Sample" className="aspect-square object-cover border-2 border-black" />
                            </div>
                        </div>
                    </NeoCard>
                </div>
            </div>
        </PouchLayout>
    );
};

export default PouchUnprintedSamplesPage;
