import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link } from 'react-router-dom';
import QuoteLightbox from '../../components/QuoteLightbox';
import { useTranslation } from 'react-i18next';

const RollstockQuotePage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.rollstockQuote';
  const [searchParams] = useSearchParams();
  const pwd = searchParams.get('p');
  const [copied, setCopied] = useState(false);

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
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const elDate = document.getElementById('currentDate');
    if (elDate) {
      elDate.textContent = today.toLocaleDateString('en-US', options);
    }
  }, []);

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
        <title>{t(`${p}.pageTitle`)}</title>
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
                <i className="fas fa-arrow-left"></i> {t(`${p}.backToHome`)}
            </Link>
        </div>
        <button
            onClick={handleShare}
            className="py-2 px-4 rounded-lg font-bold text-sm transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm flex items-center gap-2"
            title="Copy link to share this quote"
        >
            {copied ? (
                <><i className="fas fa-check text-green-600"></i> <span className="hidden sm:inline">{t(`${p}.copied`)}</span></>
            ) : (
                <><i className="fas fa-share-alt"></i> <span className="hidden sm:inline">{t(`${p}.share`)}</span></>
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
                <h2 className="text-2xl font-bold text-green-600 uppercase tracking-widest mb-2">{t(`${p}.quotation`)}</h2>
                <p className="text-gray-600 font-medium">{t(`${p}.date`)} <span id="currentDate"></span></p>
                <p className="text-gray-600 font-medium">{t(`${p}.validity`)}</p>
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
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">{t(`${p}.features`)}</h5>
                <div className="flex flex-col gap-6">
                    {/* Format Details */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md z-10 shadow-sm border border-amber-100">{t(`${p}.sachetsBadge`)}</span>
                        <div className="w-full mt-10">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-3 border-b border-gray-100 pb-2">{t(`${p}.rollstockFormatTitle`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[95%]">
                                {t(`${p}.rollstockFormatDesc`)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.title`)}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {t(`${p}.desc`)}
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{t(`${p}.materialStructure`)}</h4>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-green-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="/imgs/spec/compostable-rollstock-structure.png" alt="Kraft Paper Material Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-green-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            {t(`${p}.materialHeading`)}
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">{t(`${p}.homeCompostableBadge`)}</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-green-800 space-y-2 block text-base bg-white/60 p-4 rounded-lg border border-green-200">
                            <li><strong>{t(`${p}.frontSide`)}</strong> {t(`${p}.frontSideDesc`)}</li>
                            <li><strong>{t(`${p}.backSide`)}</strong> {t(`${p}.backSideDesc`)}</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-green-200/60 pb-1">{t(`${p}.sustainabilityFeatures`)}</h5>
                        <ul className="list-none mt-3 text-green-900 space-y-2 text-sm bg-white/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>{t(`${p}.homeCompostableTitle`)}</strong> {t(`${p}.homeCompostableDesc`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>{t(`${p}.sustainablePrintingTitle`)}</strong> <span dangerouslySetInnerHTML={{ __html: t(`${p}.sustainablePrintingDesc`) }} /></span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-green-200/60 pb-1">{t(`${p}.certifications`)}</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-green-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-fsc.png" target="_blank" rel="noopener noreferrer" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-fsc.png" alt="FSC Certification" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-900 leading-tight">{t(`${p}.fscCertified`)}</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="/imgs/cert/home-compostable-logo-new.jpg" alt="Home Compostable Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='/imgs/cert/compostable-logo.png'; }} />
                                <span className="text-xs font-bold text-green-800 leading-tight mt-2">{t(`${p}.homeCompostableBadge`)}</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-green-800 leading-tight mt-2">{t(`${p}.brcFoodSafety`)}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t(`${p}.includedOptions`)}</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-scroll mr-2"></i> {t(`${p}.rollstockFormat`)}</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> {t(`${p}.naturalKraft`)}</span>
                    <span className="spec-badge"><i className="fas fa-eye mr-2"></i> {t(`${p}.translucentBack`)}</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> {t(`${p}.quoteDimensions`)}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.finalCutSize`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">80 × 80<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> {t(`${p}.dimensionNote`)}</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: Blank */}
        <section className="mb-10">
            <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <i className="fas fa-archive"></i> {t(`${p}.blankPricingTitle`)}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{t(`${p}.blankPricingDesc`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th>{t(`${p}.qty`)}</th>
                            <th className="text-right">{t(`${p}.unitPrice`)}</th>
                            <th className="text-right">{t(`${p}.total`)}</th>
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
                    <i className="fas fa-bolt"></i> {t(`${p}.digitalPricingTitle`)}
                </h3>
                <p className="text-purple-700 text-sm mt-1">{t(`${p}.digitalPricingDesc`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table digital text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}}>{t(`${p}.qty`)}</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">{t(`${p}.unitPrice`)}</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">{t(`${p}.total`)}</th>
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
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.shippingCostsTitle`)}
            </h3>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p>{t(`${p}.shippingCostsDesc`)}</p>
            </div>
        </section>

        {/* Compostable Certification Logo */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> {t(`${p}.compostableLogoTitle`)}
            </h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/home-compostable-logo-new.jpg" alt="Home Compostable Certification Logo" className="lb-img cursor-zoom-in w-full max-w-[180px] h-auto object-contain" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='/imgs/cert/compostable-logo.png'; }} />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">{t(`${p}.addLogoTitle`)}</h4>
                    
                    <div className="bg-white/60 p-4 rounded-lg border border-green-100 mb-4">
                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2"><i className="fas fa-gift text-green-600"></i> {t(`${p}.freeOptions`)}</h5>
                        <ul className="space-y-2 text-sm text-green-800">
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span><strong>{t(`${p}.seedlingLogo`)}</strong> {t(`${p}.seedlingLogoDesc`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>{t(`${p}.buildsTrust`)}</span></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><i className="fas fa-award text-amber-600"></i> {t(`${p}.paidBpiOption`)}</h5>
                        <p className="text-sm text-gray-700 mb-2">
                            {t(`${p}.bpiDesc1`)}<a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t(`${p}.bpiVerify`)}</a>{t(`${p}.bpiDesc2`)}
                        </p>
                        <ul className="space-y-2 text-sm text-amber-800">
                            <li className="flex items-start gap-2"><i className="fas fa-info-circle text-amber-600 mt-0.5"></i> <span><strong>{t(`${p}.sublicenseReq`)}</strong> {t(`${p}.sublicenseDesc`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-amber-600 mt-0.5"></i> <span>{t(`${p}.highestStandard`)}</span></li>
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
            <h4 className="text-lg font-bold text-gray-800 mb-4">{t(`${p}.termsConditions`)}</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>{t(`${p}.terms1`)}</li>
                <li>{t(`${p}.terms2`)}</li>
                <li>{t(`${p}.terms3`)}</li>
                <li>{t(`${p}.terms4`)}</li>
                <li>{t(`${p}.terms5`)}
                    <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-500">
                        <li>{t(`${p}.tolerance1`)}</li>
                        <li>{t(`${p}.tolerance2`)}</li>
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
