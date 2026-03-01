import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

const SpoutedPouchQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pwd = searchParams.get('p');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (pwd === 'pouch2026') {
      setIsAuthenticated(true);
    }
  }, [pwd]);

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
        <title>Quotation: Spouted Stand Up Pouch - Pouch.eco</title>
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

        {/* Product Overview */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="https://achievepack.com/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp" alt="Spouted Stand Up Pouch" className="w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Included Details</h5>
                <div className="flex flex-col gap-6">
                    {/* Spout Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-orange-700 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-md z-10 shadow-sm border border-orange-100">Spout 9.6mm</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp" alt="Spout Cap 9.6mm" className="w-full max-w-[300px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">9.6mm Spout with Cap</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                Standard 9.6mm spout with screw cap for easy pouring and resealing. Perfect for liquids, gels, and semi-liquids.
                            </p>
                        </div>
                    </div>
                    
                    {/* Glossy Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md z-10 shadow-sm border border-blue-100">Surface Finish</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/surface/ads/a_glossy_surface_shine_finish_12834.webp" alt="Glossy Surface Finish" className="w-full max-w-[300px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Glossy Surface Finish</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                High-shine glossy finish that enhances color vibrancy and provides a premium shelf appeal. Included in this quotation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-sm text-orange-800 bg-orange-50 p-4 rounded-lg border border-orange-200 leading-relaxed shadow-sm">
                    <strong>Note:</strong> Spout die cut fee of <strong>$300/size</strong> applies for new spout position or custom placement.
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Spouted Stand Up Pouch</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium spouted stand up pouch ideal for liquid and semi-liquid products. Features a convenient 9.6mm spout for easy dispensing and bio-based materials for sustainability.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-blue-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/pcr-pp-kraft-quadlex-aluminum.webp" alt="Material Structure" className="w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-blue-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            MOPP 20 / AL 7 / NY 15 / PE 110 Bio-based
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Bio-based Material</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-blue-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-blue-100">
                            <li><strong>Outer:</strong> MOPP 20μ (Matte Finish, Printable)</li>
                            <li><strong>Middle 1:</strong> Aluminum Foil 7μ (High Barrier)</li>
                            <li><strong>Middle 2:</strong> Nylon 15μ (Puncture Resistance)</li>
                            <li><strong>Inner:</strong> PE 110μ Bio-based (Heat Sealant)</li>
                            <li className="mt-3 pt-3 border-t border-blue-200 text-sm text-blue-900 font-bold list-none">Total Thickness: 152 micron</li>
                        </ul>
                        
                        {/* Features */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-blue-200/60 pb-1">Key Features</h5>
                        <ul className="list-none mt-3 text-blue-900 space-y-2 text-sm bg-green-50/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>Bio-based PE:</strong> Inner layer made from renewable bio-based polyethylene.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-blue-600 mt-1"></i> <span><strong>High Barrier:</strong> Aluminum foil provides excellent oxygen and moisture barrier.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>Liquid Safe:</strong> Perfect for beverages, sauces, gels, and liquid products.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-print text-purple-500 mt-1"></i> <span><strong>Digital Print:</strong> High-quality digital printing with vibrant colors.</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-blue-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-blue-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" target="_blank" className="block mb-2">
                                    <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Certified" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">Bio-PE</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://www.pouch.eco/imgs/cert/cert-brc.webp" target="_blank" className="block mb-2">
                                    <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">BRC Food Safety</span>
                            </div>
                        </div>
                        
                        {/* Bio-PE Logo for Artwork */}
                        <div className="mt-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Logo" className="w-16 h-16 object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-green-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                                        <i className="fas fa-certificate text-green-600"></i> Bio-PE Logo Available for Your Artwork
                                    </h6>
                                    <p className="text-sm text-green-800 leading-relaxed mb-3">
                                        Communicate your sustainability commitment directly on your packaging. The Bio-PE certification logo can be incorporated into your artwork design, providing instant visual proof to consumers that your pouch uses renewable, bio-based materials.
                                    </p>
                                    <ul className="text-xs text-green-700 space-y-1">
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Demonstrates environmental responsibility</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Builds consumer trust and brand credibility</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-500"></i> Differentiates your product on retail shelves</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> Stand Up Structure</span>
                    <span className="spec-badge"><i className="fas fa-tint mr-2"></i> 9.6mm Spout</span>
                    <span className="spec-badge"><i className="fas fa-sun mr-2"></i> Glossy Surface</span>
                    <span className="spec-badge"><i className="fas fa-layer-group mr-2"></i> Aluminum Barrier</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> Bio-based PE</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> Quote Dimensions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Spouted Stand Up Pouch</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">110 × 160<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">60mm Gusset</p>
                    <p className="text-xs text-gray-400 mt-2">Spout: 9.6mm | Thickness: 152μ</p>
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
                <p className="text-purple-700 text-sm mt-1">No plate costs. Vibrant digital printing.</p>
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
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.58</td>
                            <td className="text-right font-bold text-gray-900">$580.00</td>
                            <td className="text-right text-gray-600">20 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">2,000</td>
                            <td className="text-right">$0.33</td>
                            <td className="text-right font-bold text-gray-900">$660.00</td>
                            <td className="text-right text-gray-600">40 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">4,000</td>
                            <td className="text-right">$0.29</td>
                            <td className="text-right font-bold text-gray-900">$1,160.00</td>
                            <td className="text-right text-gray-600">80 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">5,000</td>
                            <td className="text-right">$0.27</td>
                            <td className="text-right font-bold text-gray-900">$1,350.00</td>
                            <td className="text-right text-gray-600">100 kg</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">10,000</td>
                            <td className="text-right">$0.23</td>
                            <td className="text-right font-bold text-gray-900">$2,300.00</td>
                            <td className="text-right text-gray-600">200 kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            {/* Spout Die Cut Fee Notice */}
            <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200 text-sm text-orange-800">
                <p><strong><i className="fas fa-tools mr-2"></i>Spout Die Cut Fee:</strong> $300 per size (one-time fee for new spout position)</p>
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
                <p><strong>Shipping Example:</strong> For 5,000 pcs order (100 kg):</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Air freight: 100 kg × $15 = <strong>$1,500</strong></li>
                    <li>Sea freight: 100 kg × $5 = <strong>$500</strong></li>
                </ul>
            </div>
        </section>

        {/* Optional Enhancements */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="w-full max-w-[250px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> This feature is <strong>not included</strong> in the pricing tables above.</p>
                        <p className="mb-2">Stamp foil costs an additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>

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
                <li>Spout die cut fee ($167/size) applies for new spout positions.</li>
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

export default SpoutedPouchQuotePage;
