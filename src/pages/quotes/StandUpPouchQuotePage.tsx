import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

const StandUpPouchQuotePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pwd = searchParams.get('p');
  const tabParam = searchParams.get('tab');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'kraft' | 'pla' | 'biope' | 'spouted'>('kraft');
  const [copied, setCopied] = useState(false);
  const [biopeSize, setBiopeSize] = useState<'large' | 'small'>('large');

  useEffect(() => {
    if (pwd === 'pouch2026') {
      setIsAuthenticated(true);
    }
  }, [pwd]);

  // Set active tab from URL parameter
  useEffect(() => {
    if (tabParam && ['kraft', 'pla', 'biope', 'spouted'].includes(tabParam)) {
      setActiveTab(tabParam as 'kraft' | 'pla' | 'biope' | 'spouted');
    }
  }, [tabParam]);

  // Share link function
  const handleShare = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?p=pouch2026&tab=${activeTab}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      
      const elDate = document.getElementById('currentDate');
      if (elDate) {
        elDate.textContent = today.toLocaleDateString('en-US', options);
      }
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Helmet>
          <title>Secure Quotation - Achieve Pack</title>
        </Helmet>
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <h1 className="text-2xl font-bold mb-2">Password Required</h1>
          <p className="text-gray-600 mb-6">Please enter the password to view this quotation.</p>
          <div className="flex gap-2">
            <input 
              type="password" 
              id="pwdInput"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
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
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Unlock
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Quotation: Stand Up Pouch with Zipper - Pouch.eco</title>
        <style>
          {`
        body {
            font-family: 'Geologica', sans-serif;
            background-color: #f8f9fa;
        }
        
        .pricing-table th {
            background-color: #25a556;
            color: white;
            font-weight: 600;
            padding: 12px 16px;
            text-align: left;
            border-bottom: 2px solid #1e8a47;
        }
        
        .pricing-table td {
            padding: 12px 16px;
            border-bottom: 1px solid #e5e7eb;
            color: #374151;
        }
        
        .pricing-table tr:nth-child(even) {
            background-color: #f9fafb;
        }
        
        .pricing-table tr {
            page-break-inside: avoid;
            break-inside: avoid;
        }

        .pricing-table tr:hover {
            background-color: #f0fdf4;
            transition: background-color 0.2s ease;
        }
        
        .spec-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            background-color: #e6f4ea;
            color: #1e8a47;
            margin-right: 8px;
            margin-bottom: 8px;
            border: 1px solid #bce4c8;
        }

        .no-print { }
        
        @media print {
            @page {
                size: A4 portrait;
                margin: 10mm;
            }
            
            .no-print {
                display: none !important;
            }
            
            body {
                background-color: white !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            #quotation-content {
                box-shadow: none !important;
                padding: 0 !important;
            }
            
            .pricing-table {
                font-size: 10px !important;
            }
            
            .pricing-table th, .pricing-table td {
                padding: 6px 8px !important;
            }
        }
    `}
        </style>
      </Helmet>
      
      <div className="text-gray-800 antialiased min-h-screen p-4 md:p-8" style={{ backgroundColor: "#f8f9fa", fontFamily: "'Geologica', sans-serif" }}>

    {/* Action Bar */}
    <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center no-print">
        <div>
            <a href="/" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to Home
            </a>
        </div>
    </div>

    {/* Tab Navigation */}
    <div className="max-w-5xl mx-auto mb-6 no-print">
        <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-xl items-center">
            <button
                onClick={() => setActiveTab('kraft')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'kraft' ? 'bg-amber-500 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-leaf mr-2"></i> Kraft Compostable
            </button>
            <button
                onClick={() => setActiveTab('pla')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'pla' ? 'bg-green-500 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-recycle mr-2"></i> PLA Compostable
            </button>
            <button
                onClick={() => setActiveTab('biope')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'biope' ? 'bg-emerald-600 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-seedling mr-2"></i> Metalised BioPE
            </button>
            <button
                onClick={() => setActiveTab('spouted')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'spouted' ? 'bg-blue-600 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-tint mr-2"></i> Aluminum BioPE
            </button>
            {/* Share Button */}
            <button
                onClick={handleShare}
                className="py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm flex items-center gap-2"
                title="Copy link to share this tab"
            >
                {copied ? (
                    <><i className="fas fa-check text-green-600"></i> <span className="hidden sm:inline">Copied!</span></>
                ) : (
                    <><i className="fas fa-share-alt"></i> <span className="hidden sm:inline">Share</span></>
                )}
            </button>
        </div>
    </div>

    {/* Main Quotation Container */}
    <div id="quotation-content" className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 mb-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8 mb-8 gap-6">
            <div className="mb-6 md:mb-0 w-full md:w-2/3">
                <img src="/imgs/ryan-email-signature.jpg" alt="Pouch.eco By Achieve Pack" className="w-full max-w-[400px] h-auto object-contain drop-shadow-sm rounded text-left" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://achievepack.com/imgs/store/achieve-pack-logo.png'; }} />
            </div>
            <div className="text-left md:text-right">
                <h2 className="text-2xl font-bold text-green-600 uppercase tracking-widest mb-2">Quotation</h2>
                <p className="text-gray-600 font-medium">Date: <span id="currentDate"></span></p>
                <p className="text-gray-600 font-medium">Validity: 30 Days</p>
            </div>
        </header>

        {/* ==================== KRAFT PAPER TAB ==================== */}
        {activeTab === 'kraft' && (
        <>
        {/* Compostable Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/composable-pouch-certification.jpg" alt="Certified Compostable Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview - Kraft */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="Stand Up Pouch with Zipper" className="w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Included Details</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Texture Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md z-10 shadow-sm border border-amber-100">Surface Kraft Texture</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/surface/kraft-texture.png" alt="Kraft Paper Texture" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Natural Kraft Texture</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                Premium white kraft paper with natural fiber texture. Provides excellent printability and authentic eco-friendly appearance.
                            </p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">Standard Zipper</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/store/closure/normal-zipper.webp" alt="Standard Zipper" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Standard Resealable Zipper</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                High-quality press-to-close zipper for easy resealing. Keeps contents fresh and provides excellent consumer convenience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-sm text-blue-800 bg-blue-50 p-4 rounded-lg border border-blue-200 leading-relaxed shadow-sm">
                    <strong>Note:</strong> This pouch features anti-discoloration coating (防变色油) for enhanced color stability and shelf life.
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Industrial Compostable Kraft Metalised Triplex</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium eco-friendly stand up pouch with resealable zipper, perfect for food products, snacks, and powders. Features a natural kraft paper aesthetic that communicates your commitment to sustainability.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-amber-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/bio-kraft-vm-cello.webp" alt="Kraft Paper Material Structure" className="w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-amber-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            White Kraft Paper 60g / PLA Metalised / PLA+PBAT
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Industrial Compostable</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-amber-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-amber-100">
                            <li><strong>Outer:</strong> White Kraft Paper 60gsm (Premium Look)</li>
                            <li><strong>Middle:</strong> PLA Metalised Layer (High Barrier)</li>
                            <li><strong>Inner:</strong> PLA+PBAT Biodegradable Sealant</li>
                            <li className="mt-3 pt-3 border-t border-amber-200 text-sm text-amber-900 font-bold list-none">Thickness: 150 micron</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-amber-200/60 pb-1">Sustainability Features</h5>
                        <ul className="list-none mt-3 text-amber-900 space-y-2 text-sm bg-green-50/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>Industrial Compostable:</strong> Full bag structure certified for industrial composting.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-1"></i> <span><strong>Eco-Components:</strong> Zipper made of <strong>PLA</strong>; all layers biodegradable.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>Sustainable Printing:</strong> Digital print uses <strong>home compostable ink</strong> by HP Indigo.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-amber-600 mt-1"></i> <span><strong>Special Coating:</strong> Anti-discoloration coating for enhanced durability.</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-amber-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/logo-bpi.jpg" alt="BPI Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">BPI Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-fsc.png" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-fsc.png" alt="FSC Certification" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-900 leading-tight">FSC Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-amber-800 leading-tight mt-2">BRC Food Safety</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> Stand Up Structure</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> White Kraft Paper</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> Standard Zipper</span>
                    <span className="spec-badge"><i className="fas fa-shield-alt mr-2"></i> Anti-Discoloration</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> Quote Dimensions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Stand Up Pouch</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">127 × 210<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">38mm Gusset</p>
                    <p className="text-xs text-gray-400 mt-2">Thickness: 150 micron</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> This quotation is for a single size. Contact us for additional sizes or custom dimensions.</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: Digital Print */}
        <section className="mb-10">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> Digital Print Pricing (Low MOQ)
                </h3>
                <p className="text-purple-700 text-sm mt-1">No plate costs. Home compostable HP Indigo ink.</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}}>Qty (pcs)</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">Unit Price (USD)</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">Total (USD)</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">Est. Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold text-gray-900">200</td>
                            <td className="text-right">$1.93</td>
                            <td className="text-right font-bold text-gray-900">$386.00</td>
                            <td className="text-right text-gray-600">3 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.59</td>
                            <td className="text-right font-bold text-gray-900">$590.00</td>
                            <td className="text-right text-gray-600">12 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">2,000</td>
                            <td className="text-right">$0.43</td>
                            <td className="text-right font-bold text-gray-900">$860.00</td>
                            <td className="text-right text-gray-600">23 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">5,000</td>
                            <td className="text-right">$0.31</td>
                            <td className="text-right font-bold text-gray-900">$1,550.00</td>
                            <td className="text-right text-gray-600">56 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">10,000</td>
                            <td className="text-right">$0.24</td>
                            <td className="text-right font-bold text-gray-900">$2,400.00</td>
                            <td className="text-right text-gray-600">111 kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Shipping Costs Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> Shipping Costs (Door-to-Door)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">Air Freight</h4>
                            <p className="text-blue-700 text-sm">Fast delivery: 7-10 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">Sea Freight</h4>
                            <p className="text-cyan-700 text-sm">Economy: 30-45 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>Shipping Example:</strong> For 5,000 pcs order (56 kg):</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Air freight: 56 kg × $15 = <strong>$840</strong></li>
                    <li>Sea freight: 56 kg × $5 = <strong>$280</strong></li>
                </ul>
            </div>
        </section>

        {/* Compostable Certification Logo - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> Compostable Certification Logo
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/compostable-logo.png" alt="Compostable Certification Logo" className="w-full max-w-[180px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Add This Logo to Your Artwork</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The <strong>Seedling Logo</strong> is the globally recognized symbol for industrially compostable packaging, certified to EN 13432 standard. Display this logo on your packaging to clearly communicate its eco-friendly end-of-life.
                    </p>
                    <ul className="space-y-2 text-sm text-green-800 bg-white/60 p-4 rounded-lg border border-green-100">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Certified industrial compostable (EN 13432 / ASTM D6400)</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Breaks down in commercial composting facilities</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Builds consumer trust in your sustainability claims</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>We will provide the logo file for your designer</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> Additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* ==================== PLA CLEAR FILM TAB ==================== */}
        {activeTab === 'pla' && (
        <>
        {/* Compostable Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/composable-pouch-certification.jpg" alt="Certified Compostable Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview - PLA */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="PLA Clear Stand Up Pouch" className="w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Included Details</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-green-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">Glossy Surface</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/surface/ads/a_gloss_finish_detail_5685549.webp" alt="Glossy Surface Finish" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Premium Glossy Finish</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                High-gloss surface finish that enhances print vibrancy and provides excellent shelf appeal for your product.
                            </p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-green-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">Standard Zipper</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/store/closure/normal-zipper.webp" alt="Standard Zipper" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Standard Resealable Zipper</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                High-quality press-to-close zipper for easy resealing. Keeps contents fresh and provides excellent consumer convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Industrial Compostable PLA Metalised Triplex</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium clear industrial compostable stand up pouch with resealable zipper. Made from 100% plant-based PLA materials, perfect for showcasing your product while maintaining eco-friendly credentials.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-green-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/bio-cello-triplex-metalised.webp" alt="PLA Material Structure" className="w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-green-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            PLA30 / MPLA15 / PBAT100
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Industrial Compostable</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-green-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-green-100">
                            <li><strong>Outer:</strong> PLA 30μm (Clear Plant-Based Film)</li>
                            <li><strong>Middle:</strong> Metalised PLA 15μm (Barrier Layer)</li>
                            <li><strong>Inner:</strong> PBAT 100μm (Biodegradable Sealant)</li>
                            <li className="mt-3 pt-3 border-t border-green-200 text-sm text-green-900 font-bold list-none">Total Thickness: 145 micron</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-green-200/60 pb-1">Sustainability Features</h5>
                        <ul className="list-none mt-3 text-green-900 space-y-2 text-sm bg-emerald-50/70 p-4 rounded-lg border border-emerald-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>Industrial Compostable:</strong> Full bag structure certified for industrial composting facilities.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-seedling text-green-600 mt-1"></i> <span><strong>Plant-Based:</strong> Made from renewable plant resources (corn starch derived PLA).</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>Sustainable Printing:</strong> Digital print uses <strong>home compostable ink</strong> by HP Indigo.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-eye text-purple-500 mt-1"></i> <span><strong>Clear Window:</strong> Transparent material showcases your product beautifully.</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-green-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-green-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/logo-bpi.jpg" alt="BPI Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">BPI Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-green-800 leading-tight mt-2">BRC Food Safety</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> Stand Up Structure</span>
                    <span className="spec-badge"><i className="fas fa-seedling mr-2"></i> 100% Plant-Based PLA</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> Standard Zipper</span>
                    <span className="spec-badge"><i className="fas fa-star mr-2"></i> Glossy Surface</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> Quote Dimensions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Stand Up Pouch</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">127 × 210<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">76mm Full Gusset</p>
                    <p className="text-xs text-gray-400 mt-2">Thickness: 145 micron</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> This quotation is for a single size. Contact us for additional sizes or custom dimensions.</p>
                </div>
            </div>
        </section>

        {/* Real Product Sample - PLA Stand Up Pouch */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-camera text-green-500"></i> Real Product Sample (Glossy Stand Up Pouch)
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                Actual sample photos demonstrating our glossy stand up pouches. Note the vibrant digital print quality, premium glossy finish, and reliable resealable zipper.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/glossy-sup-front-2.png" alt="Glossy Stand Up Pouch - Front" className="w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">Front View</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/glossy-sup-back-2.png" alt="Glossy Stand Up Pouch - Back" className="w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">Back View</p>
                </div>
            </div>
            <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm text-green-800"><i className="fas fa-check-circle mr-2"></i><strong>This sample demonstrates:</strong> Glossy surface finish, digital printing quality, and stand up pouch structure with zipper.</p>
            </div>
        </section>

        {/* Pricing Section: PLA Digital Print */}
        <section className="mb-10">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-green-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> Digital Print Pricing (Low MOQ)
                </h3>
                <p className="text-green-700 text-sm mt-1">No plate costs. Home compostable HP Indigo ink.</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}}>Qty (pcs)</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">Unit Price (USD)</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">Total (USD)</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">Est. Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold text-gray-900">100</td>
                            <td className="text-right">$5.21</td>
                            <td className="text-right font-bold text-gray-900">$521.00</td>
                            <td className="text-right text-gray-600">1.6 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.90</td>
                            <td className="text-right font-bold text-gray-900">$900.00</td>
                            <td className="text-right text-gray-600">16 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">5,000</td>
                            <td className="text-right">$0.50</td>
                            <td className="text-right font-bold text-gray-900">$2,500.00</td>
                            <td className="text-right text-gray-600">80 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">10,000</td>
                            <td className="text-right">$0.44</td>
                            <td className="text-right font-bold text-gray-900">$4,400.00</td>
                            <td className="text-right text-gray-600">160 kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Shipping Costs Section - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> Shipping Costs (Door-to-Door)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">Air Freight</h4>
                            <p className="text-blue-700 text-sm">Fast delivery: 7-10 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">Sea Freight</h4>
                            <p className="text-cyan-700 text-sm">Economy: 30-45 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>Shipping Example:</strong> For 5,000 pcs order (80 kg):</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Air freight: 80 kg × $15 = <strong>$1,200</strong></li>
                    <li>Sea freight: 80 kg × $5 = <strong>$400</strong></li>
                </ul>
            </div>
        </section>

        {/* Compostable Certification Logo - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> Compostable Certification Logo
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/compostable-logo.png" alt="Compostable Certification Logo" className="w-full max-w-[180px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Add This Logo to Your Artwork</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The <strong>Seedling Logo</strong> is the globally recognized symbol for industrially compostable packaging, certified to EN 13432 standard. Display this logo on your packaging to clearly communicate its eco-friendly end-of-life.
                    </p>
                    <ul className="space-y-2 text-sm text-green-800 bg-white/60 p-4 rounded-lg border border-green-100">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Certified industrial compostable (EN 13432 / ASTM D6400)</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>PLA material breaks down in commercial composting</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Builds consumer trust in your sustainability claims</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>We will provide the logo file for your designer</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> Additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* ==================== BIOPE PET METALISED TAB ==================== */}
        {activeTab === 'biope' && (
        <>
        {/* BioPE Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/biope-banner-v2.jpg" alt="BioPE Plant Powered Organic Protein Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview - BioPE */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="BioPE PET Metalised Stand Up Pouch" className="w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Included Details</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-emerald-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md z-10 shadow-sm border border-emerald-100">Spot Matte Varnish</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/surface/spot-matte-finish.webp" alt="Spot Matte Varnish" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Spot Matte Varnish (局部哑油)</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                Premium spot matte varnish finish creates elegant contrast between glossy and matte areas, highlighting key design elements.
                            </p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-emerald-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md z-10 shadow-sm border border-emerald-100">Standard Zipper</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/store/closure/normal-zipper.webp" alt="Standard Zipper" className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Standard Resealable Zipper</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                High-quality press-to-close zipper for easy resealing. Keeps contents fresh and provides excellent consumer convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">BioPE PET Metalised Triplex</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium stand up pouch with bio-based PE sealant and metalised PET barrier. Features spot matte varnish for a sophisticated look that combines sustainability with excellent shelf presence.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-emerald-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/biope-pet-triplex-metalised.webp" alt="BioPE PET Metalised Structure" className="w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-emerald-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            PET12 / VMPET12 / Bio-based PE80
                            <span className="inline-block text-xs bg-emerald-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Plant-Based Bio-PE</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-emerald-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-emerald-100">
                            <li><strong>Outer:</strong> PET 12μm (Clear Printable Film)</li>
                            <li><strong>Middle:</strong> Metalised PET 12μm (High Barrier)</li>
                            <li><strong>Inner:</strong> Bio-based PE 80μm (Plant-Based Sealant)</li>
                            <li className="mt-3 pt-3 border-t border-emerald-200 text-sm text-emerald-900 font-bold list-none">Total Thickness: 104 micron</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-emerald-200/60 pb-1">Sustainability Features</h5>
                        <ul className="list-none mt-3 text-emerald-900 space-y-2 text-sm bg-teal-50/70 p-4 rounded-lg border border-teal-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-seedling text-emerald-600 mt-1"></i> <span><strong>Bio-Based PE:</strong> Inner layer made from sugarcane-derived renewable resources.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-emerald-600 mt-1"></i> <span><strong>High Barrier:</strong> Metalised PET provides excellent oxygen and moisture protection.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-star text-purple-500 mt-1"></i> <span><strong>Premium Finish:</strong> Spot matte varnish creates elegant visual contrast.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-recycle text-blue-500 mt-1"></i> <span><strong>Reduced Carbon:</strong> Bio-PE reduces carbon footprint compared to conventional PE.</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-emerald-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-emerald-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-emerald-800 leading-tight mt-2">Bio-PE Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-emerald-800 leading-tight mt-2">BRC Food Safety</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> Stand Up Structure</span>
                    <span className="spec-badge"><i className="fas fa-seedling mr-2"></i> Bio-based PE</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> Standard Zipper</span>
                    <span className="spec-badge"><i className="fas fa-droplet mr-2"></i> Spot Matte Varnish</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> Select Size
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                    onClick={() => setBiopeSize('large')}
                    className={`p-6 rounded-lg border-2 text-center cursor-pointer transition-all shadow-sm relative overflow-hidden group ${biopeSize === 'large' ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-gray-200 hover:border-emerald-300'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors ${biopeSize === 'large' ? 'bg-emerald-500' : 'bg-gray-100 group-hover:bg-emerald-400'}`}></div>
                    {biopeSize === 'large' && <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded"><i className="fas fa-check mr-1"></i>Selected</div>}
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Size A - Large</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">249.6 × 292.1<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">47.6mm Gusset</p>
                    <p className="text-xs text-gray-400 mt-2">28g/pcs • 104 micron</p>
                </div>
                <div 
                    onClick={() => setBiopeSize('small')}
                    className={`p-6 rounded-lg border-2 text-center cursor-pointer transition-all shadow-sm relative overflow-hidden group ${biopeSize === 'small' ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-gray-200 hover:border-emerald-300'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors ${biopeSize === 'small' ? 'bg-emerald-500' : 'bg-gray-100 group-hover:bg-emerald-400'}`}></div>
                    {biopeSize === 'small' && <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded"><i className="fas fa-check mr-1"></i>Selected</div>}
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Size B - Small</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">145 × 180<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">60mm Gusset</p>
                    <p className="text-xs text-gray-400 mt-2">~12g/pcs • Spot Matte Varnish</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: BioPE Digital Print */}
        <section className="mb-10">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> Digital Print Pricing (Low MOQ) - {biopeSize === 'large' ? 'Size A (249.6×292.1mm)' : 'Size B (145×180mm)'}
                </h3>
                <p className="text-emerald-700 text-sm mt-1">No plate costs. Premium spot matte varnish included.</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}}>Qty (pcs)</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">Unit Price (USD)</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">Total (USD)</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">Est. Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biopeSize === 'large' ? (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">100</td>
                                    <td className="text-right">$6.25</td>
                                    <td className="text-right font-bold text-gray-900">$625.00</td>
                                    <td className="text-right text-gray-600">2.8 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">1,000</td>
                                    <td className="text-right">$1.21</td>
                                    <td className="text-right font-bold text-gray-900">$1,210.00</td>
                                    <td className="text-right text-gray-600">28 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">5,000</td>
                                    <td className="text-right">$0.71</td>
                                    <td className="text-right font-bold text-gray-900">$3,550.00</td>
                                    <td className="text-right text-gray-600">140 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.63</td>
                                    <td className="text-right font-bold text-gray-900">$6,300.00</td>
                                    <td className="text-right text-gray-600">280 kg</td>
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">100 <span className="text-xs text-emerald-600 font-bold">(MOQ)</span></td>
                                    <td className="text-right"><span className="text-xs text-gray-500">(total)</span></td>
                                    <td className="text-right font-bold text-gray-900">$527.08</td>
                                    <td className="text-right text-gray-600">1.2 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">1,000</td>
                                    <td className="text-right">$0.62</td>
                                    <td className="text-right font-bold text-gray-900">$620.00</td>
                                    <td className="text-right text-gray-600">12 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">5,000</td>
                                    <td className="text-right">$0.33</td>
                                    <td className="text-right font-bold text-gray-900">$1,650.00</td>
                                    <td className="text-right text-gray-600">60 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.29</td>
                                    <td className="text-right font-bold text-gray-900">$2,900.00</td>
                                    <td className="text-right text-gray-600">120 kg</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Plate Print Pricing Section - BioPE */}
        <section className="mb-10">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-indigo-800 flex items-center gap-2">
                    <i className="fas fa-print"></i> Plate Print Pricing (High Volume) - {biopeSize === 'large' ? 'Size A (249.6×292.1mm)' : 'Size B (145×180mm)'}
                </h3>
                <p className="text-indigo-700 text-sm mt-1">Best value for large quantities. Plate fee: <strong>{biopeSize === 'large' ? '$167/color' : '$135/color'}</strong></p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}}>Qty (pcs)</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">Unit Price (USD)</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">Total (USD)</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">Est. Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biopeSize === 'large' ? (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.19</td>
                                    <td className="text-right font-bold text-gray-900">$1,900.00</td>
                                    <td className="text-right text-gray-600">280 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">50,000</td>
                                    <td className="text-right">$0.16</td>
                                    <td className="text-right font-bold text-gray-900">$8,000.00</td>
                                    <td className="text-right text-gray-600">1,400 kg</td>
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.10</td>
                                    <td className="text-right font-bold text-gray-900">$1,000.00</td>
                                    <td className="text-right text-gray-600">120 kg</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">50,000</td>
                                    <td className="text-right">$0.07</td>
                                    <td className="text-right font-bold text-gray-900">$3,500.00</td>
                                    <td className="text-right text-gray-600">600 kg</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-sm text-indigo-800">
                <p><strong><i className="fas fa-info-circle mr-1"></i> Plate Fee:</strong> {biopeSize === 'large' ? '$167 per color (¥800)' : '$135 per color (¥650)'}. This is a one-time setup cost per artwork.</p>
            </div>
        </section>

        {/* Shipping Costs Section - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> Shipping Costs (Door-to-Door)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">Air Freight</h4>
                            <p className="text-blue-700 text-sm">Fast delivery: 7-10 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">Sea Freight</h4>
                            <p className="text-cyan-700 text-sm">Economy: 30-45 days</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">/kg</span></p>
                        <p className="text-sm text-gray-600 mt-2">Door-to-door service</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> Includes tax & customs duty</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>Shipping Example:</strong> For 5,000 pcs order (140 kg):</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Air freight: 140 kg × $15 = <strong>$2,100</strong></li>
                    <li>Sea freight: 140 kg × $5 = <strong>$700</strong></li>
                </ul>
            </div>
        </section>

        {/* Bio-PE Logo Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-seedling text-emerald-500"></i> Bio-PE Certification Logo
            </h3>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md">
                        <img src="/imgs/cert/im-green-logo.png" alt="I'm Green Bio-PE Logo" className="w-full max-w-[200px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-emerald-800 mb-3">Add This Logo to Your Artwork</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The <strong>"I'm green™"</strong> logo is the official certification mark from Braskem for Bio-based Polyethylene. By using this material, you are entitled to display this logo on your packaging to communicate your commitment to sustainability.
                    </p>
                    <ul className="space-y-2 text-sm text-emerald-800 bg-white/60 p-4 rounded-lg border border-emerald-100">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Demonstrates use of plant-based, renewable materials</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Recognized globally as a sustainability credential</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Helps differentiate your brand on shelf</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>We will provide the logo file for your designer</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> Additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* ==================== SPOUTED BIOPE ALUMINUM TAB ==================== */}
        {activeTab === 'spouted' && (
        <>
        {/* BioPE Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/biope-banner-v2.jpg" alt="BioPE Spouted Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview - Spouted */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="/imgs/spec/pet-quadlex-aluminum-heavy.webp" alt="PET Quadlex Heavy Structure" className="w-full max-w-[350px] h-auto object-contain" />
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                    <div className="bg-blue-50 rounded-xl px-6 py-4 text-center border border-blue-200 shadow-sm flex-1 min-w-[140px] group cursor-pointer hover:shadow-md transition-all duration-300">
                        <img src="https://achievepack.com/imgs/surface/ads/a_gloss_finish_detail_5685549.webp" alt="Glossy Surface" className="w-full max-w-[120px] h-auto object-contain mix-blend-multiply mb-2 mx-auto transition-transform group-hover:scale-105 duration-300" />
                        <p className="text-xs font-bold text-blue-700 uppercase">Glossy Surface</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl px-6 py-4 text-center border border-blue-200 shadow-sm flex-1 min-w-[140px] group cursor-pointer hover:shadow-md transition-all duration-300">
                        <img src="https://achievepack.com/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp" alt="10mm Spout" className="w-full max-w-[120px] h-auto object-contain mix-blend-multiply mb-2 mx-auto transition-transform group-hover:scale-105 duration-300" />
                        <p className="text-xs font-bold text-blue-700 uppercase">10mm Spout</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Spouted Aluminum BioPE</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Premium spouted stand-up pouch with aluminum barrier layer and bio-based PE. Ideal for liquid products, sauces, and beverages with excellent barrier properties.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="spec-badge"><i className="fas fa-ruler-combined mr-1"></i> 159 × 215 + 45mm</span>
                    <span className="spec-badge"><i className="fas fa-tint mr-1"></i> 10mm Spout</span>
                    <span className="spec-badge"><i className="fas fa-layer-group mr-1"></i> PET12 / ALU7 / NY15 / BioPE100</span>
                    <span className="spec-badge"><i className="fas fa-print mr-1"></i> Digital Printing</span>
                    <span className="spec-badge"><i className="fas fa-weight-hanging mr-1"></i> 25g/pouch</span>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><i className="fas fa-layer-group"></i> Material Structure</h4>
                    <p className="text-gray-700"><strong>PET12</strong> / <strong>ALU7</strong> / <strong>NY15</strong> / <strong>BioPE100</strong></p>
                    <p className="text-sm text-gray-500 mt-2">4-layer laminate with aluminum barrier and bio-based PE for sustainability</p>
                </div>

                {/* Certifications */}
                <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-4 border-b border-blue-200/60 pb-1">Certifications & Standards</h5>
                <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-blue-200 shadow-sm justify-center sm:justify-start">
                    <div className="flex flex-col items-center text-center group w-24">
                        <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                        <span className="text-xs font-bold text-blue-800 leading-tight mt-2">Bio-PE Certified</span>
                    </div>
                    <div className="flex flex-col items-center text-center group w-24">
                        <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                        <span className="text-xs font-bold text-blue-800 leading-tight mt-2">BRC Food Safety</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Real Product Sample - 500ml BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-camera text-blue-500"></i> Real Product Sample (500ml BioPE Spouted Pouch)
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                Actual sample photos showing the exact size and material specification. This 500ml spouted stand-up pouch features "I'm Green™" bio-based PE certification.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-front.webp" alt="500ml BioPE Spouted Pouch - Front" className="w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">Front View</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-detail.webp" alt="500ml BioPE Spouted Pouch - I'm Green Logo Detail" className="w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">I'm Green™ Logo Detail</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-back.webp" alt="500ml BioPE Spouted Pouch - Back" className="w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">Back View</p>
                </div>
            </div>
            <div className="mt-4 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <p className="text-sm text-emerald-800"><i className="fas fa-check-circle mr-2"></i><strong>This sample demonstrates:</strong> 500ml capacity, glossy finish, digital printing, 10mm spout, and "I'm Green™" BioPE certification mark visible on packaging.</p>
            </div>
        </section>

        {/* Pricing Table - Spouted Digital */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-print text-blue-500"></i> Digital Printing Price
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                Premium spouted pouches with aluminum barrier and bio-based PE. Digital printing offers full-color customization with no plate fees.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full pricing-table">
                    <thead>
                        <tr>
                            <th className="rounded-tl-xl">Quantity (pcs)</th>
                            <th>Unit Price (USD)</th>
                            <th className="rounded-tr-xl">Est. Gross Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-50">
                            <td className="font-medium">100 <span className="text-xs text-blue-600 font-bold">(MOQ)</span></td>
                            <td className="font-bold text-blue-600">$416.67 <span className="text-xs text-gray-500 font-normal">(total)</span></td>
                            <td>2.5 kg</td>
                        </tr>
                        <tr>
                            <td className="font-medium">1,000</td>
                            <td className="font-bold text-blue-600">$0.79</td>
                            <td>25 kg</td>
                        </tr>
                        <tr>
                            <td className="font-medium">2,000</td>
                            <td className="font-bold text-blue-600">$0.46</td>
                            <td>50 kg</td>
                        </tr>
                        <tr>
                            <td className="font-medium">5,000</td>
                            <td className="font-bold text-blue-600">$0.40</td>
                            <td>125 kg</td>
                        </tr>
                        <tr>
                            <td className="font-medium">10,000</td>
                            <td className="font-bold text-blue-600">$0.35</td>
                            <td>250 kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic"><i className="fas fa-info-circle mr-1"></i> Digital printing: No plate fees. MOQ 100pcs (quoted as total price).</p>
            
            {/* Spout Tooling Cost */}
            <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <i className="fas fa-tools text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-800 mb-1">Spout Application Tooling</h4>
                        <p className="text-amber-900 font-bold text-lg">USD $150 <span className="text-sm font-normal text-amber-700">per size</span></p>
                        <p className="text-sm text-amber-700 mt-1">One-time tooling fee for spout application. Required for new orders.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Shipping Table - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> Estimated Shipping Cost
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                Estimated total cost including product and shipping. Actual shipping cost depends on destination.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full pricing-table">
                    <thead>
                        <tr>
                            <th className="rounded-tl-xl">Quantity</th>
                            <th>Product Cost</th>
                            <th>Gross Weight</th>
                            <th><i className="fas fa-ship mr-1"></i> Sea Freight</th>
                            <th>Total (Sea)</th>
                            <th><i className="fas fa-plane mr-1"></i> Air Freight</th>
                            <th className="rounded-tr-xl">Total (Air)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-50">
                            <td className="font-medium">100 <span className="text-xs text-blue-600">(MOQ)</span></td>
                            <td>$416.67</td>
                            <td>2.5 kg</td>
                            <td>$50</td>
                            <td className="font-bold text-green-600">$466.67</td>
                            <td>$25</td>
                            <td className="font-bold text-blue-600">$441.67</td>
                        </tr>
                        <tr>
                            <td className="font-medium">1,000</td>
                            <td>$790</td>
                            <td>25 kg</td>
                            <td>$80</td>
                            <td className="font-bold text-green-600">$870</td>
                            <td>$200</td>
                            <td className="font-bold text-blue-600">$990</td>
                        </tr>
                        <tr>
                            <td className="font-medium">2,000</td>
                            <td>$920</td>
                            <td>50 kg</td>
                            <td>$100</td>
                            <td className="font-bold text-green-600">$1,020</td>
                            <td>$350</td>
                            <td className="font-bold text-blue-600">$1,270</td>
                        </tr>
                        <tr>
                            <td className="font-medium">5,000</td>
                            <td>$2,000</td>
                            <td>125 kg</td>
                            <td>$180</td>
                            <td className="font-bold text-green-600">$2,180</td>
                            <td>$800</td>
                            <td className="font-bold text-blue-600">$2,800</td>
                        </tr>
                        <tr>
                            <td className="font-medium">10,000</td>
                            <td>$3,500</td>
                            <td>250 kg</td>
                            <td>$280</td>
                            <td className="font-bold text-green-600">$3,780</td>
                            <td>$1,500</td>
                            <td className="font-bold text-blue-600">$5,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic"><i className="fas fa-info-circle mr-1"></i> Shipping estimates to major ports. We will provide exact quotes upon inquiry.</p>
        </section>

        {/* Bio-PE Logo Section - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-seedling text-emerald-500"></i> Bio-PE Certification Logo
            </h3>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md">
                        <img src="/imgs/cert/im-green-logo.png" alt="I'm Green Bio-PE Logo" className="w-full max-w-[200px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Add This Logo to Your Artwork</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        The "I'm green™" logo is the official certification mark for Braskem's bio-based polyethylene. Display this on your packaging to communicate your commitment to sustainability.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Shows your packaging uses plant-based renewable materials</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Recognized globally as a sustainability credential</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>Helps differentiate your brand on shelf</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>We will provide the logo file for your designer</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> Additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* Contact Signature */}
        <section className="border-t border-gray-200 pt-8 mt-12 mb-10">
            <h4 className="text-lg font-bold text-gray-800 mb-6">Contact Information</h4>
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
                <div className="space-y-3 text-gray-800 text-left w-full">
                    <h4 className="text-2xl font-black text-gray-900 border-b-2 border-green-500 pb-2 inline-block">Ryan Wong</h4>
                    <p className="font-bold text-green-700 text-lg uppercase tracking-wide">Achieve Pack &reg; &mdash; Your Packaging Assistant Anywhere &reg;</p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-md mt-4 font-medium text-gray-700 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex-1 space-y-2">
                            <p className="flex items-center gap-3">
                                <i className="fas fa-globe text-blue-500 w-5 text-center text-lg"></i> 
                                <a href="https://pouch.eco" target="_blank" className="hover:text-blue-600 transition-colors">https://pouch.eco</a> 
                                <span className="text-gray-300 px-1">|</span> 
                                <a href="https://achievepack.com" target="_blank" className="hover:text-blue-600 transition-colors">https://achievepack.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <i className="fas fa-envelope text-blue-500 w-5 text-center text-lg"></i> 
                                <a href="mailto:ryan@pouch.eco" className="hover:text-blue-600 transition-colors">ryan@pouch.eco</a> 
                            </p>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3">
                                <i className="fab fa-whatsapp text-green-500 w-5 text-center text-xl"></i> 
                                <span className="font-bold">+852 69704411</span>
                            </div>
                            <p className="flex items-center gap-3">
                                <i className="fab fa-weixin text-green-500 w-5 text-center text-xl"></i> 
                                <span className="font-bold">+86 13356453536</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center mt-6">
                <img src="/imgs/pdf-assets/hero.webp" alt="Pouch.eco Sustainable Packaging Solutions" className="w-full max-w-5xl h-auto drop-shadow-md object-contain rounded-xl border border-gray-100 bg-white/50" />
            </div>
        </section>

        {/* Terms and Conditions */}
        <section className="border-t border-gray-200 pt-8 mt-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Prices quoted are in USD (EXW).</li>
                <li>Shipping costs are additional (see shipping section above).</li>
                <li>Production to ex-factory lead time is 15-25 days from artwork confirm and deposit received.</li>
                <li>Payment terms: 50% deposit upon order confirmation, balance before shipment.</li>
                <li>Production tolerance, invoiced on actual quantity produced:
                    <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-500">
                        <li>Quantity under 1,000: ± 50%</li>
                        <li>Quantity under 10,000: ± 20%</li>
                        <li>Quantity 10,000 and over: ± 10%</li>
                    </ul>
                </li>
            </ul>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 Pouch.eco by Achieve Pack. All rights reserved.</p>
        </div>
    </div>

      </div>
    </>
  );
};

export default StandUpPouchQuotePage;
