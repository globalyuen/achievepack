import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import PouchLayout from '../../components/pouch/PouchLayout';

const PouchSampleQuotePage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const pwd = searchParams.get('p');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (pwd === 'pouch2026') {
            setIsAuthenticated(true);
        }
    }, [pwd]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
                <Helmet>
                    <title>Sample Quote - Pouch.eco</title>
                </Helmet>
                <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Password Required</h1>
                    <p className="text-gray-500 mb-8">Enter password to view the sample quote.</p>
                    <div className="flex gap-2">
                        <input 
                            type="password" 
                            id="pwdInput"
                            className="flex-1 border-2 border-gray-100 rounded-xl px-4 py-3 focus:border-green-500 outline-none transition-all font-medium" 
                            placeholder="Enter password"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    window.location.href = '?p=' + (e.target as HTMLInputElement).value;
                                }
                            }}
                        />
                        <button 
                            onClick={() => {
                                const el = document.getElementById('pwdInput') as HTMLInputElement;
                                if (el) window.location.href = '?p=' + el.value;
                            }}
                            className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg active:scale-95"
                        >
                            Unlock
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <PouchLayout>
            <Helmet>
                <title>Sample Prototype Quote | Pouch.eco</title>
                <style>
                    {`
                        .neo-shadow {
                            box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
                        }
                        .neo-border {
                            border: 4px solid black;
                        }
                    `}
                </style>
            </Helmet>

            <div className="bg-[#f8f9fa] py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header Card */}
                    <div className="bg-white neo-border neo-shadow p-8 md:p-12 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b-4 border-black pb-8 mb-8">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-black uppercase leading-none mb-4">
                                    Sample<br/>Quote
                                </h1>
                                <div className="inline-block bg-[#D4FF00] neo-border px-4 py-1 font-black text-sm uppercase tracking-widest">
                                    Flash Edition
                                </div>
                            </div>

                        </div>

                        {/* Options Grid */}
                        <div className="grid gap-8 mb-12">
                            {/* Option 1 */}
                            <div className="group bg-[#f3f4f6] neo-border p-6 md:p-8 hover:bg-white transition-colors">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-black text-white px-3 py-1 font-black text-xs uppercase">Option 01</span>
                                            <h2 className="text-2xl font-black uppercase">Material Sample Prototype</h2>
                                        </div>
                                        <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                                            Hand-made sample using small digital press. Perfect for verifying material texture and initial sizing.
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Material:</strong> Home Compostable Glossy Kraft Paper</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Style:</strong> Hand-Seal Stand Up Pouch (No Zipper)</li>
                                            <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 bg-red-600"></div> <strong>Note:</strong> Printing quality is lower than commercial standard</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end">
                                        <div className="text-4xl font-black tracking-tight mb-1">USD $200</div>
                                        <div className="text-sm font-bold uppercase opacity-60">Set of 4 pieces</div>
                                    </div>
                                </div>
                            </div>

                            {/* Option 2 */}
                            <div className="group bg-[#D4FF00] neo-border p-6 md:p-8 hover:scale-[1.01] transition-all">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-black text-white px-3 py-1 font-black text-xs uppercase">Option 02</span>
                                            <h2 className="text-2xl font-black uppercase">Final Product Sample</h2>
                                        </div>
                                        <p className="text-black font-semibold mb-4 leading-relaxed">
                                            Produced using our industrial commercial press. This is the exact quality and finish of your final production run.
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm font-bold">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Quality:</strong> Commercial Press (Premium)</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Style:</strong> Stand Up Pouch WITH Zipper</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Status:</strong> Retail Ready Prototype</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end">
                                        <div className="text-4xl font-black tracking-tight mb-1 font-mono text-black">USD $400</div>
                                        <div className="text-sm font-black uppercase opacity-60 text-black">Set of 50 pieces</div>
                                    </div>
                                </div>
                            </div>

                            {/* Option 3 */}
                            <div className="group bg-[#f3f4f6] neo-border p-6 md:p-8 hover:bg-white transition-colors">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-black text-white px-3 py-1 font-black text-xs uppercase">Option 03</span>
                                            <h2 className="text-2xl font-black uppercase">Artwork Print Only</h2>
                                        </div>
                                        <p className="text-gray-600 font-medium mb-4 leading-relaxed">
                                            Commercial press print on a sheet. Ideal for color matching and artwork review without the full pouch construction.
                                        </p>
                                        <ul className="space-y-2 mb-6 text-sm">
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Format:</strong> Printed Sheet (Commercial Press)</li>
                                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-black"></div> <strong>Process:</strong> No hand-making of pouches included</li>
                                        </ul>
                                    </div>
                                    <div className="md:text-right flex flex-col justify-end">
                                        <div className="text-4xl font-black tracking-tight mb-1">USD $100</div>
                                        <div className="text-sm font-bold uppercase opacity-60">Artwork Proof Sheet</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="border-t-4 border-black pt-12">
                            <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-3">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Fast-Track Timeline
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-black text-white neo-border p-8">
                                    <h4 className="text-[#D4FF00] font-black uppercase text-xl mb-4">Production</h4>
                                    <p className="text-3xl font-black leading-tight">Finished by<br/>March 25th</p>
                                    <p className="text-sm mt-4 font-bold opacity-60 uppercase tracking-widest">If ordered today</p>
                                </div>
                                <div className="bg-white neo-border p-8">
                                    <h4 className="font-black uppercase text-xl mb-4 text-gray-400">FedEx Shipping</h4>
                                    <p className="text-3xl font-black leading-tight">+ Approx 10<br/>Business Days</p>
                                    <p className="text-sm mt-4 font-bold text-green-600 uppercase tracking-widest">Door-to-Door Service</p>
                                </div>
                            </div>
                        </div>

                        {/* Logistics info */}
                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-gray-50 p-4 neo-border">
                                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-black text-xs">!</div>
                                <p className="text-sm font-black uppercase italic">Includes FedEx Shipping Cost</p>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 p-4 neo-border">
                                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-black text-xs">X</div>
                                <p className="text-sm font-black uppercase italic">Excluded Tax & Duty</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Showcase */}
                    <div className="bg-white neo-border neo-shadow p-4">
                        <div className="bg-gray-100 neo-border overflow-hidden">
                            <img 
                                src="/imgs/samples/ryan-sample-photo.jpg" 
                                alt="Sample Pouch Exhibition" 
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] p-4 text-center opacity-40">Prototype Demonstration Grid</p>
                    </div>

                    {/* Thank you */}
                    <div className="mt-12 text-center">
                        <p className="text-2xl font-black uppercase italic tracking-tighter">Kindly Note Many Thanks</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <div className="w-12 h-1 bg-black"></div>
                            <div className="w-12 h-1 bg-[#D4FF00]"></div>
                            <div className="w-12 h-1 bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </PouchLayout>
    );
};

export default PouchSampleQuotePage;
