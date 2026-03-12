import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import QuoteLightbox from '../../components/QuoteLightbox';


const RollstockQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pwd = searchParams.get('p');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (pwd === 'pouch2026') {
      setIsAuthenticated(true);
    }
  }, [pwd]);

  // Share link function
  const handleShare = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?p=pouch2026`;
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

  // Pricing calculations
  // Exchange rate assumption 1 USD = 6.8 RMB
  const exchangeRate = 6.8;
  const markup = 1.5;

  const getUSDPrice = (rmbPrice: number) => {
    return ((rmbPrice * markup) / exchangeRate).toFixed(3);
  };

  const blankPricing = [
    { qty: "10,000", unitPrice: getUSDPrice(0.3), total: ((0.3 * markup / exchangeRate) * 10000).toFixed(2) },
    { qty: "50,000", unitPrice: getUSDPrice(0.15), total: ((0.15 * markup / exchangeRate) * 50000).toFixed(2) },
    { qty: "100,000", unitPrice: getUSDPrice(0.12), total: ((0.12 * markup / exchangeRate) * 100000).toFixed(2) }
  ];

  const digitalPricing = [
    { qty: "10,000", unitPrice: getUSDPrice(0.4), total: ((0.4 * markup / exchangeRate) * 10000).toFixed(2) },
    { qty: "50,000", unitPrice: getUSDPrice(0.3), total: ((0.3 * markup / exchangeRate) * 50000).toFixed(2) },
    { qty: "100,000", unitPrice: getUSDPrice(0.25), total: ((0.25 * markup / exchangeRate) * 100000).toFixed(2) }
  ];

  return (
    <>
      <QuoteLightbox />
<Helmet>
        <title>Quotation: Home Compostable Rollstock - Pouch.eco</title>
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

        .pricing-table.digital th {
            background-color: #8b5cf6;
            border-bottom-color: #7c3aed;
        }

        .pricing-table.digital th {
            background-color: #8b5cf6;
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
            <Link to="/" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
        </div>
        <button
            onClick={handleShare}
            className="py-2 px-4 rounded-lg font-bold text-sm transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm flex items-center gap-2"
            title="Copy link to share this quote"
        >
            {copied ? (
                <><i className="fas fa-check text-green-600"></i> <span className="hidden sm:inline">Copied!</span></>
            ) : (
                <><i className="fas fa-share-alt"></i> <span className="hidden sm:inline">Share</span></>
            )}
        </button>
    </div>

    {/* Main Quotation Container */}
    <div id="quotation-content" className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 mb-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8 mb-8 gap-6">
            <div className="mb-6 md:mb-0 w-full md:w-2/3">
                <img src="/imgs/ryan-email-signature.jpg" alt="Pouch.eco By Achieve Pack" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain drop-shadow-sm rounded text-left" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://achievepack.com/imgs/store/achieve-pack-logo.png'; }} />
            </div>
            <div className="text-left md:text-right">
                <h2 className="text-2xl font-bold text-green-600 uppercase tracking-widest mb-2">Quotation</h2>
                <p className="text-gray-600 font-medium">Date: <span id="currentDate"></span></p>
                <p className="text-gray-600 font-medium">Validity: 30 Days</p>
            </div>
        </header>

        {/* Home Compostable Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/home-compostable-rollstock.jpg" alt="Home Compostable Rollstock Details" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="/imgs/pouch-shape/rollstock-film.jpg" alt="Rollstock Film" className="lb-img cursor-zoom-in w-full h-auto object-cover rounded shadow-md mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Features</h5>
                <div className="flex flex-col gap-6">
                    {/* Format Details */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md z-10 shadow-sm border border-amber-100">Sachets & Automated Fill</span>
                        <div className="w-full mt-10">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-3 border-b border-gray-100 pb-2">Rollstock Film Format</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[95%]">
                                Professional rollstock film suitable for automated form-fill-seal (FFS) packaging machines, ideal for small sachets and portion packaging.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Home Compostable Dual-Sided Rollstock</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium eco-friendly rollstock film designed for automated filling. Features a unique dual-sided design tailored for aesthetic appeal and sustainability.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-green-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="/imgs/spec/compostable-rollstock-structure.png" alt="Kraft Paper Material Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-green-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            Coated Kraft Paper / Coated Translucent Paper
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Home Compostable</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-green-800 space-y-2 block text-base bg-white/60 p-4 rounded-lg border border-green-200">
                            <li><strong>Front Side:</strong> Coated Kraft Paper 50g (涂层黄牛50g)</li>
                            <li><strong>Back Side:</strong> Coated Translucent Kraft Paper 50g (涂层半透明牛皮纸50g)</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-green-200/60 pb-1">Sustainability Features</h5>
                        <ul className="list-none mt-3 text-green-900 space-y-2 text-sm bg-white/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>Home Compostable:</strong> Entire material structure breaks down in residential compost environments.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>Sustainable Printing:</strong> Digital print uses <strong>home compostable ink</strong> by HP Indigo.</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-green-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-green-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-fsc.png" target="_blank" rel="noopener noreferrer" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-fsc.png" alt="FSC Certification" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-900 leading-tight">FSC Certified</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="/imgs/cert/home-compostable-logo-new.jpg" alt="Home Compostable Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='/imgs/cert/compostable-logo.png'; }} />
                                <span className="text-xs font-bold text-green-800 leading-tight mt-2">Home Compostable</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-green-800 leading-tight mt-2">BRC Food Safety</span>
                            </div>
                        </div>

                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-scroll mr-2"></i> Rollstock Format</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> Natural Kraft</span>
                    <span className="spec-badge"><i className="fas fa-eye mr-2"></i> Translucent Back</span>
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
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Final Cut Sachet Size</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">80 × 80<span className="text-sm font-normal text-gray-500 ml-1">mm</span></p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> This quotation is for an 80x80mm sachet cut. Please contact us to confirm your machine dimensions (core, web width, etc).</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: Blank */}
        <section className="mb-10">
            <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-archive"></i> Blank Material Pricing
                </h3>
                <p className="text-gray-600 text-sm mt-1">Unprinted, bare material.</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th>Qty (pcs)</th>
                            <th className="text-right">Unit Price (USD)</th>
                            <th className="text-right">Total (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blankPricing.map((row, index) => (
                          <tr key={index}>
                              <td className="font-semibold text-gray-900">{row.qty}</td>
                              <td className="text-right">${row.unitPrice}</td>
                              <td className="text-right font-bold text-gray-900">${row.total}</td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Pricing Section: Digital Print */}
        <section className="mb-10">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> Digital Print Pricing
                </h3>
                <p className="text-purple-700 text-sm mt-1">No plate costs. Home compostable HP Indigo ink.</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table digital text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}}>Qty (pcs)</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">Unit Price (USD)</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">Total (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {digitalPricing.map((row, index) => (
                          <tr key={index}>
                              <td className="font-semibold text-gray-900">{row.qty}</td>
                              <td className="text-right">${row.unitPrice}</td>
                              <td className="text-right font-bold text-gray-900">${row.total}</td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Shipping Costs Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> Shipping Costs
            </h3>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p>Available for air freight and sea freight. Actual costs will be quoted based on final physical weight which depends on target web width and total yield.</p>
            </div>
        </section>

        {/* Compostable Certification Logo */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> Home Compostable Certification Logo
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/home-compostable-logo-new.jpg" alt="Home Compostable Certification Logo" className="lb-img cursor-zoom-in w-full max-w-[180px] h-auto object-contain" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='/imgs/cert/compostable-logo.png'; }} />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">Add This Logo to Your Artwork</h4>
                    
                    <div className="bg-white/60 p-4 rounded-lg border border-green-100 mb-4">
                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2"><i className="fas fa-gift text-green-600"></i> Free Options:</h5>
                        <ul className="space-y-2 text-sm text-green-800">
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span><strong>Seedling Logo / Home Compostable Logo:</strong> We will provide the free logo file for your designer.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>Builds consumer trust in your sustainability claims and guides proper disposal.</span></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><i className="fas fa-award text-amber-600"></i> Paid BPI Certified Logo Option:</h5>
                        <p className="text-sm text-gray-700 mb-2">
                            Achieve Pack is a BPI Certified manufacturer (<a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">verify our BPI listing here</a>). You can add the official BPI logo to your packaging through our sublicense!
                        </p>
                        <ul className="space-y-2 text-sm text-amber-800">
                            <li className="flex items-start gap-2"><i className="fas fa-info-circle text-amber-600 mt-0.5"></i> <span><strong>Sublicense Requirement:</strong> Requires a sublicense agreement. BPI charges USD $1,000 - $2,000 per year.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-amber-600 mt-0.5"></i> <span>Provides the highest standard of validation for industrial compostability in North America.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Promotional Footer Image */}
        <div className="w-full flex justify-center mt-6 mb-10">
            <img src="/imgs/pdf-assets/hero.webp" alt="Pouch.eco Sustainable Packaging Solutions" className="w-full max-w-5xl h-auto drop-shadow-md object-contain rounded-xl border border-gray-100 bg-white/50" />
        </div>

        {/* Terms and Conditions */}
        <section className="border-t border-gray-200 pt-8 mt-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Prices quoted are in USD.</li>
                <li>Shipping, taxes, and duties are not included in the basic quotation.</li>
                <li>Production lead time is 25-30 days from artwork confirmation and deposit receipt.</li>
                <li>Payment terms: 50% deposit upon order confirmation, balance before shipment.</li>
                <li>Production tolerance, invoiced on actual quantity produced:
                    <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-500">
                        <li>Quantity under 100,000: ± 20%</li>
                        <li>Quantity 100,000 and over: ± 10%</li>
                    </ul>
                </li>
            </ul>
        </section>

    </div>
</div>
</>
  );
};

export default RollstockQuotePage;
