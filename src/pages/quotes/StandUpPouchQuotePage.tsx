import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import QuoteLightbox from '../../components/QuoteLightbox';
import { useTranslation, Trans } from "react-i18next";

const StandUpPouchQuotePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.standUpPouchQuote';
  const [searchParams, setSearchParams] = useSearchParams();
  const pwd = searchParams.get('p');
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'kraft' | 'pla' | 'biope' | 'spouted' | 'pe'>('kraft');
  const [copied, setCopied] = useState(false);
  const [biopeSize, setBiopeSize] = useState<'large' | 'small'>('large');

  // Set active tab from URL parameter
  useEffect(() => {
    if (tabParam && ['kraft', 'pla', 'biope', 'spouted', 'pe'].includes(tabParam)) {
      setActiveTab(tabParam as 'kraft' | 'pla' | 'biope' | 'spouted' | 'pe');
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
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const elDate = document.getElementById('currentDate');
    if (elDate) {
      elDate.textContent = today.toLocaleDateString('en-US', options);
    }
  }, []);

  return (
    <>
      <QuoteLightbox />
<Helmet>
        <title>{t(`${p}.quotationStandUpPouchWithZippe`)}</title>
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
                <i className="fas fa-arrow-left"></i> {t(`${p}.backToHome`)}</a>
        </div>
    </div>

    {/* Tab Navigation */}
    <div className="max-w-5xl mx-auto mb-6 no-print">
        <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-xl items-center">
            <button
                onClick={() => setActiveTab('kraft')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'kraft' ? 'bg-amber-500 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-leaf mr-2"></i> {t(`${p}.kraftCompostable`)}</button>
            <button
                onClick={() => setActiveTab('pla')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'pla' ? 'bg-green-500 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-recycle mr-2"></i> {t(`${p}.plaCompostable`)}</button>
            <button
                onClick={() => setActiveTab('biope')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'biope' ? 'bg-emerald-600 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-seedling mr-2"></i> {t(`${p}.metalisedBiope`)}</button>
            <button
                onClick={() => setActiveTab('spouted')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'spouted' ? 'bg-blue-600 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-tint mr-2"></i> {t(`${p}.aluminumBiope`)}</button>
            <button
                onClick={() => setActiveTab('pe')}
                className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 ${activeTab === 'pe' ? 'bg-cyan-600 text-white shadow-md' : 'bg-transparent text-gray-600 hover:bg-white hover:shadow-sm'}`}
            >
                <i className="fas fa-recycle mr-2"></i> {t(`${p}.recyclablePe`)}</button>
            {/* Share Button */}
            <button
                onClick={handleShare}
                className="py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-sm flex items-center gap-2"
                title="Copy link to share this tab"
            >
                {copied ? (
                    <><i className="fas fa-check text-green-600"></i> <span className="hidden sm:inline">{t(`${p}.copied`)}</span></>
                ) : (
                    <><i className="fas fa-share-alt"></i> <span className="hidden sm:inline">{t(`${p}.share`)}</span></>
                )}
            </button>
        </div>
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
                <p className="text-gray-600 font-medium">{t(`${p}.date`)}<span id="currentDate"></span></p>
                <p className="text-gray-600 font-medium">{t(`${p}.validity30Days`)}</p>
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
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="Stand Up Pouch with Zipper" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">{t(`${p}.includedDetails`)}</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Texture Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-md z-10 shadow-sm border border-amber-100">{t(`${p}.surfaceKraftTexture`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/surface/kraft-texture.png" alt="Kraft Paper Texture" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.naturalKraftTexture`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.premiumWhiteKraftPaperWithNatu`)}</p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">{t(`${p}.compostableZipper`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/samples/kraft-compostable-zipper.png" alt="Compostable Zipper" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.compostableResealableZipper`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.highQualityPressToCloseZipperF`)}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-sm text-blue-800 bg-blue-50 p-4 rounded-lg border border-blue-200 leading-relaxed shadow-sm">
                    <strong>{t(`${p}.note`)}</strong> {t(`${p}.thisPouchFeaturesAntiDiscolora`)}</div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.industrialCompostableKraftMeta`)}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {t(`${p}.premiumEcoFriendlyStandUpPouch`)}</p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{t(`${p}.materialStructure`)}</h4>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-amber-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/bio-kraft-vm-cello.webp" alt="Kraft Paper Material Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-amber-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            {t(`${p}.whiteKraftPaper60gPlaMetalised`)}<span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">{t(`${p}.industrialCompostable`)}</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-amber-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-amber-100">
                            <li><strong>{t(`${p}.outer`)}</strong> {t(`${p}.whiteKraftPaper60gsmPremiumLoo`)}</li>
                            <li><strong>{t(`${p}.middle`)}</strong> {t(`${p}.plaMetalisedLayerHighBarrier`)}</li>
                            <li><strong>{t(`${p}.inner`)}</strong> {t(`${p}.plaPbatBiodegradableSealant`)}</li>
                            <li className="mt-3 pt-3 border-t border-amber-200 text-sm text-amber-900 font-bold list-none">{t(`${p}.thickness150Micron`)}</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-amber-200/60 pb-1">{t(`${p}.sustainabilityFeatures`)}</h5>
                        <ul className="list-none mt-3 text-amber-900 space-y-2 text-sm bg-green-50/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>{t(`${p}.industrialCompostable1`)}</strong> {t(`${p}.fullBagStructureCertifiedForIn`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-1"></i> <span><strong>{t(`${p}.ecoComponents`)}</strong> {t(`${p}.zipperMadeOf`)}<strong>{t(`${p}.pla`)}</strong>{t(`${p}.allLayersBiodegradable`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>{t(`${p}.sustainablePrinting`)}</strong> {t(`${p}.digitalPrintUses`)}<strong>{t(`${p}.homeCompostableInk`)}</strong> {t(`${p}.byHpIndigo`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-amber-600 mt-1"></i> <span><strong>{t(`${p}.specialCoating`)}</strong> {t(`${p}.antiDiscolorationCoatingForEnh`)}</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-amber-200/60 pb-1">{t(`${p}.certificationsStandards`)}</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/logo-bpi.jpg" alt="BPI Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">{t(`${p}.bpiCertified`)}</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-fsc.png" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-fsc.png" alt="FSC Certification" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-900 leading-tight">{t(`${p}.fscCertified`)}</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-amber-800 leading-tight mt-2">{t(`${p}.brcFoodSafety`)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t(`${p}.includedOptions`)}</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> {t(`${p}.standUpStructure`)}</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> {t(`${p}.whiteKraftPaper`)}</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> {t(`${p}.standardZipper`)}</span>
                    <span className="spec-badge"><i className="fas fa-shield-alt mr-2"></i> {t(`${p}.antiDiscoloration`)}</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> {t(`${p}.quoteDimensions`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.standUpPouch`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">127 × 210<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">{t(`${p}.38mmGusset`)}</p>
                    <p className="text-xs text-gray-400 mt-2">{t(`${p}.thickness150Micron`)}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> {t(`${p}.thisQuotationIsForASingleSizeC`)}</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: Digital Print */}
        <section className="mb-10">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> {t(`${p}.digitalPrintPricingLowMoq`)}</h3>
                <p className="text-purple-700 text-sm mt-1">{t(`${p}.noPlateCostsHomeCompostableHpI`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}}>{t(`${p}.qtyPcs`)}</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">{t(`${p}.unitPriceUsd`)}</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">{t(`${p}.totalUsd`)}</th>
                            <th style={{backgroundColor:"#8b5cf6",borderBottomColor:"#7c3aed"}} className="text-right">{t(`${p}.estWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold text-gray-900">200</td>
                            <td className="text-right">$1.93</td>
                            <td className="text-right font-bold text-gray-900">$386.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.3Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.59</td>
                            <td className="text-right font-bold text-gray-900">$590.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.12Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">2,000</td>
                            <td className="text-right">$0.43</td>
                            <td className="text-right font-bold text-gray-900">$860.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.23Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">5,000</td>
                            <td className="text-right">$0.31</td>
                            <td className="text-right font-bold text-gray-900">$1,550.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.56Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">10,000</td>
                            <td className="text-right">$0.24</td>
                            <td className="text-right font-bold text-gray-900">$2,400.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.111Kg`)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Shipping Costs Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.shippingCostsDoorToDoor`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">{t(`${p}.airFreight`)}</h4>
                            <p className="text-blue-700 text-sm">{t(`${p}.fastDelivery710Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">{t(`${p}.seaFreight`)}</h4>
                            <p className="text-cyan-700 text-sm">{t(`${p}.economy3045Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>{t(`${p}.shippingExample`)}</strong> {t(`${p}.for5000PcsOrder56Kg`)}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>{t(`${p}.airFreight56Kg15`)}<strong>$840</strong></li>
                    <li>{t(`${p}.seaFreight56Kg5`)}<strong>$280</strong></li>
                </ul>
            </div>
        </section>

        {/* Compostable Certification Logo - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> {t(`${p}.compostableCertificationLogo`)}</h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/compostable-logo.png" alt="Compostable Certification Logo" className="lb-img cursor-zoom-in w-full max-w-[180px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">{t(`${p}.addThisLogoToYourArtwork`)}</h4>
                    
                    <div className="bg-white/60 p-4 rounded-lg border border-green-100 mb-4">
                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2"><i className="fas fa-gift text-green-600"></i> {t(`${p}.freeOptions`)}</h5>
                        <ul className="space-y-2 text-sm text-green-800">
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span><strong>{t(`${p}.seedlingLogoHomeCompostableLog`)}</strong> {t(`${p}.weWillProvideTheFreeLogoFileFo`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>{t(`${p}.buildsConsumerTrustInYourSusta`)}</span></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><i className="fas fa-award text-amber-600"></i> {t(`${p}.paidBpiCertifiedLogoOption`)}</h5>
                        <p className="text-sm text-gray-700 mb-2">
                            {t(`${p}.achievePackIsABpiCertifiedManu`)}<a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t(`${p}.verifyOurBpiListingHere`)}</a>{t(`${p}.youCanAddTheOfficialBpiLogoToY`)}</p>
                        <ul className="space-y-2 text-sm text-amber-800">
                            <li className="flex items-start gap-2"><i className="fas fa-info-circle text-amber-600 mt-0.5"></i> <span><strong>{t(`${p}.sublicenseRequirement`)}</strong> {t(`${p}.requiresASublicenseAgreementBp`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-amber-600 mt-0.5"></i> <span>{t(`${p}.providesTheHighestStandardOfVa`)}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - Kraft */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> {t(`${p}.optionalEnhancements`)}</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="lb-img cursor-zoom-in w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t(`${p}.stampFoiling`)}</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        {t(`${p}.upgradeYourPackagingWithAPremi`)}</p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> {t(`${p}.pricingNote`)}</strong> {t(`${p}.additional`)}<strong>{t(`${p}.usd150PerSizePerFace`)}</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">{t(`${p}.pleaseAdviseYourDesignToReceiv`)}</p>
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
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="PLA Clear Stand Up Pouch" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">{t(`${p}.includedDetails`)}</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-green-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">{t(`${p}.glossySurface`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/surface/ads/a_gloss_finish_detail_5685549.webp" alt="Glossy Surface Finish" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.premiumGlossyFinish`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.highGlossSurfaceFinishThatEnha`)}</p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-green-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">{t(`${p}.standardZipper`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/store/closure/normal-zipper.webp" alt="Standard Zipper" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.standardResealableZipper`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.highQualityPressToCloseZipperF2`)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.industrialCompostablePlaMetali`)}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {t(`${p}.premiumClearIndustrialComposta`)}</p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{t(`${p}.materialStructure`)}</h4>
                <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-green-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/bio-cello-triplex-metalised.webp" alt="PLA Material Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-green-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            {t(`${p}.pla30Mpla15Pbat100`)}<span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">{t(`${p}.industrialCompostable`)}</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-green-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-green-100">
                            <li><strong>{t(`${p}.outer`)}</strong> {t(`${p}.pla30MClearPlantBasedFilm`)}</li>
                            <li><strong>{t(`${p}.middle`)}</strong> {t(`${p}.metalisedPla15MBarrierLayer`)}</li>
                            <li><strong>{t(`${p}.inner`)}</strong> {t(`${p}.pbat100MBiodegradableSealant`)}</li>
                            <li className="mt-3 pt-3 border-t border-green-200 text-sm text-green-900 font-bold list-none">{t(`${p}.totalThickness145Micron`)}</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-green-200/60 pb-1">{t(`${p}.sustainabilityFeatures`)}</h5>
                        <ul className="list-none mt-3 text-green-900 space-y-2 text-sm bg-emerald-50/70 p-4 rounded-lg border border-emerald-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>{t(`${p}.industrialCompostable3`)}</strong> {t(`${p}.fullBagStructureCertifiedForIn4`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-seedling text-green-600 mt-1"></i> <span><strong>{t(`${p}.plantBased`)}</strong> {t(`${p}.madeFromRenewablePlantResource`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>{t(`${p}.sustainablePrinting`)}</strong> {t(`${p}.digitalPrintUses`)}<strong>{t(`${p}.homeCompostableInk`)}</strong> {t(`${p}.byHpIndigo`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-eye text-purple-500 mt-1"></i> <span><strong>{t(`${p}.clearWindow`)}</strong> {t(`${p}.transparentMaterialShowcasesYo`)}</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-green-200/60 pb-1">{t(`${p}.certificationsStandards`)}</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-green-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/logo-bpi.jpg" alt="BPI Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">{t(`${p}.bpiCertified`)}</span>
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
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> {t(`${p}.standUpStructure`)}</span>
                    <span className="spec-badge"><i className="fas fa-seedling mr-2"></i> {t(`${p}.100PlantBasedPla`)}</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> {t(`${p}.standardZipper`)}</span>
                    <span className="spec-badge"><i className="fas fa-star mr-2"></i> {t(`${p}.glossySurface`)}</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> {t(`${p}.quoteDimensions`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.standUpPouch`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">127 × 210<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">{t(`${p}.76mmFullGusset`)}</p>
                    <p className="text-xs text-gray-400 mt-2">{t(`${p}.thickness145Micron`)}</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex flex-col justify-center">
                    <p className="text-sm text-green-800 font-medium"><i className="fas fa-info-circle mr-2"></i> {t(`${p}.thisQuotationIsForASingleSizeC`)}</p>
                </div>
            </div>
        </section>

        {/* Real Product Sample - PLA Stand Up Pouch */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-camera text-green-500"></i> {t(`${p}.realProductSampleGlossyStandUp`)}</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                {t(`${p}.actualSamplePhotosDemonstratin`)}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/glossy-sup-front-2.png" alt="Glossy Stand Up Pouch - Front" className="lb-img cursor-zoom-in w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">{t(`${p}.frontView`)}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/glossy-sup-back-2.png" alt="Glossy Stand Up Pouch - Back" className="lb-img cursor-zoom-in w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">{t(`${p}.backView`)}</p>
                </div>
            </div>
            <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm text-green-800"><i className="fas fa-check-circle mr-2"></i><strong>{t(`${p}.thisSampleDemonstrates`)}</strong> {t(`${p}.glossySurfaceFinishDigitalPrin`)}</p>
            </div>
        </section>

        {/* Pricing Section: PLA Digital Print */}
        <section className="mb-10">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-green-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> {t(`${p}.digitalPrintPricingLowMoq`)}</h3>
                <p className="text-green-700 text-sm mt-1">{t(`${p}.noPlateCostsHomeCompostableHpI`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}}>{t(`${p}.qtyPcs`)}</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">{t(`${p}.unitPriceUsd`)}</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">{t(`${p}.totalUsd`)}</th>
                            <th style={{backgroundColor:"#16a34a",borderBottomColor:"#15803d"}} className="text-right">{t(`${p}.estWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold text-gray-900">100</td>
                            <td className="text-right">$5.21</td>
                            <td className="text-right font-bold text-gray-900">$521.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.16Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.90</td>
                            <td className="text-right font-bold text-gray-900">$900.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.16Kg5`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">5,000</td>
                            <td className="text-right">$0.50</td>
                            <td className="text-right font-bold text-gray-900">$2,500.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.80Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">10,000</td>
                            <td className="text-right">$0.44</td>
                            <td className="text-right font-bold text-gray-900">$4,400.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.160Kg`)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Shipping Costs Section - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.shippingCostsDoorToDoor`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">{t(`${p}.airFreight`)}</h4>
                            <p className="text-blue-700 text-sm">{t(`${p}.fastDelivery710Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">{t(`${p}.seaFreight`)}</h4>
                            <p className="text-cyan-700 text-sm">{t(`${p}.economy3045Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>{t(`${p}.shippingExample`)}</strong> {t(`${p}.for5000PcsOrder80Kg`)}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>{t(`${p}.airFreight80Kg15`)}<strong>$1,200</strong></li>
                    <li>{t(`${p}.seaFreight80Kg5`)}<strong>$400</strong></li>
                </ul>
            </div>
        </section>

        {/* Compostable Certification Logo - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-leaf text-green-500"></i> {t(`${p}.compostableCertificationLogo`)}</h3>
            <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-xl p-6 border border-green-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-green-100 shadow-md">
                        <img src="/imgs/cert/compostable-logo.png" alt="Compostable Certification Logo" className="lb-img cursor-zoom-in w-full max-w-[180px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-green-800 mb-3">{t(`${p}.addThisLogoToYourArtwork`)}</h4>
                    
                    <div className="bg-white/60 p-4 rounded-lg border border-green-100 mb-4">
                        <h5 className="font-bold text-green-900 flex items-center gap-2 mb-2"><i className="fas fa-gift text-green-600"></i> {t(`${p}.freeOptions`)}</h5>
                        <ul className="space-y-2 text-sm text-green-800">
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span><strong>{t(`${p}.seedlingLogoHomeCompostableLog`)}</strong> {t(`${p}.weWillProvideTheFreeLogoFileFo`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-0.5"></i> <span>{t(`${p}.buildsConsumerTrustInYourSusta`)}</span></li>
                        </ul>
                    </div>

                    <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                        <h5 className="font-bold text-amber-900 flex items-center gap-2 mb-2"><i className="fas fa-award text-amber-600"></i> {t(`${p}.paidBpiCertifiedLogoOption`)}</h5>
                        <p className="text-sm text-gray-700 mb-2">
                            {t(`${p}.achievePackIsABpiCertifiedManu`)}<a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t(`${p}.verifyOurBpiListingHere`)}</a>{t(`${p}.youCanAddTheOfficialBpiLogoToY`)}</p>
                        <ul className="space-y-2 text-sm text-amber-800">
                            <li className="flex items-start gap-2"><i className="fas fa-info-circle text-amber-600 mt-0.5"></i> <span><strong>{t(`${p}.sublicenseRequirement`)}</strong> {t(`${p}.requiresASublicenseAgreementBp`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-amber-600 mt-0.5"></i> <span>{t(`${p}.providesTheHighestStandardOfVa`)}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - PLA */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> {t(`${p}.optionalEnhancements`)}</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="lb-img cursor-zoom-in w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t(`${p}.stampFoiling`)}</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        {t(`${p}.upgradeYourPackagingWithAPremi`)}</p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> {t(`${p}.pricingNote`)}</strong> {t(`${p}.additional`)}<strong>{t(`${p}.usd150PerSizePerFace`)}</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">{t(`${p}.pleaseAdviseYourDesignToReceiv`)}</p>
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
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="BioPE PET Metalised Stand Up Pouch" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">{t(`${p}.includedDetails`)}</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-emerald-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md z-10 shadow-sm border border-emerald-100">{t(`${p}.spotMatteVarnish`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/surface/spot-matte-finish.webp" alt="Spot Matte Varnish" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.spotMatteVarnish6`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.premiumSpotMatteVarnishFinishC`)}</p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-emerald-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-md z-10 shadow-sm border border-emerald-100">{t(`${p}.standardZipper`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="https://achievepack.com/imgs/store/closure/normal-zipper.webp" alt="Standard Zipper" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.standardResealableZipper`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.highQualityPressToCloseZipperF7`)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.biopePetMetalisedTriplex`)}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {t(`${p}.premiumStandUpPouchWithBioBase`)}</p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{t(`${p}.materialStructure`)}</h4>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-emerald-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        <img src="https://achievepack.com/imgs/spec/biope-pet-triplex-metalised.webp" alt="BioPE PET Metalised Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-emerald-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            {t(`${p}.pet12Vmpet12BioBasedPe80`)}<span className="inline-block text-xs bg-emerald-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">{t(`${p}.plantBasedBioPe`)}</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-emerald-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-emerald-100">
                            <li><strong>{t(`${p}.outer`)}</strong> {t(`${p}.pet12MClearPrintableFilm`)}</li>
                            <li><strong>{t(`${p}.middle`)}</strong> {t(`${p}.metalisedPet12MHighBarrier`)}</li>
                            <li><strong>{t(`${p}.inner`)}</strong> {t(`${p}.bioBasedPe80MPlantBasedSealant`)}</li>
                            <li className="mt-3 pt-3 border-t border-emerald-200 text-sm text-emerald-900 font-bold list-none">{t(`${p}.totalThickness104Micron`)}</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-emerald-200/60 pb-1">{t(`${p}.sustainabilityFeatures`)}</h5>
                        <ul className="list-none mt-3 text-emerald-900 space-y-2 text-sm bg-teal-50/70 p-4 rounded-lg border border-teal-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-seedling text-emerald-600 mt-1"></i> <span><strong>{t(`${p}.bioBasedPe`)}</strong> {t(`${p}.innerLayerMadeFromSugarcaneDer`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-emerald-600 mt-1"></i> <span><strong>{t(`${p}.highBarrier`)}</strong> {t(`${p}.metalisedPetProvidesExcellentO`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-star text-purple-500 mt-1"></i> <span><strong>{t(`${p}.premiumFinish`)}</strong> {t(`${p}.spotMatteVarnishCreatesElegant`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-recycle text-blue-500 mt-1"></i> <span><strong>{t(`${p}.reducedCarbon`)}</strong> {t(`${p}.bioPeReducesCarbonFootprintCom`)}</span></li>
                        </ul>

                        {/* Certifications */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-emerald-200/60 pb-1">{t(`${p}.certificationsStandards`)}</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-emerald-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-emerald-800 leading-tight mt-2">{t(`${p}.bioPeCertified`)}</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                <span className="text-xs font-bold text-emerald-800 leading-tight mt-2">{t(`${p}.brcFoodSafety`)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t(`${p}.includedOptions`)}</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> {t(`${p}.standUpStructure`)}</span>
                    <span className="spec-badge"><i className="fas fa-seedling mr-2"></i> {t(`${p}.bioBasedPe8`)}</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> {t(`${p}.standardZipper`)}</span>
                    <span className="spec-badge"><i className="fas fa-droplet mr-2"></i> {t(`${p}.spotMatteVarnish`)}</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> {t(`${p}.selectSize`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                    onClick={() => setBiopeSize('large')}
                    className={`p-6 rounded-lg border-2 text-center cursor-pointer transition-all shadow-sm relative overflow-hidden group ${biopeSize === 'large' ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-gray-200 hover:border-emerald-300'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors ${biopeSize === 'large' ? 'bg-emerald-500' : 'bg-gray-100 group-hover:bg-emerald-400'}`}></div>
                    {biopeSize === 'large' && <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded"><i className="fas fa-check mr-1"></i>{t(`${p}.selected`)}</div>}
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.sizeALarge`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">249.6 × 292.1<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">{t(`${p}.476mmGusset`)}</p>
                    <p className="text-xs text-gray-400 mt-2">{t(`${p}.28gPcs104Micron`)}</p>
                </div>
                <div 
                    onClick={() => setBiopeSize('small')}
                    className={`p-6 rounded-lg border-2 text-center cursor-pointer transition-all shadow-sm relative overflow-hidden group ${biopeSize === 'small' ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-200' : 'bg-white border-gray-200 hover:border-emerald-300'}`}
                >
                    <div className={`absolute top-0 left-0 w-full h-1 transition-colors ${biopeSize === 'small' ? 'bg-emerald-500' : 'bg-gray-100 group-hover:bg-emerald-400'}`}></div>
                    {biopeSize === 'small' && <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded"><i className="fas fa-check mr-1"></i>{t(`${p}.selected`)}</div>}
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.sizeBSmall`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">145 × 180<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">{t(`${p}.60mmGusset`)}</p>
                    <p className="text-xs text-gray-400 mt-2">{t(`${p}.12gPcsSpotMatteVarnish`)}</p>
                </div>
            </div>
        </section>

        {/* Pricing Section: BioPE Digital Print */}
        <section className="mb-10">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> {t(`${p}.digitalPrintPricingLowMoq9`)}{biopeSize === 'large' ? 'Size A (249.6×292.1mm)' : 'Size B (145×180mm)'}
                </h3>
                <p className="text-emerald-700 text-sm mt-1">{t(`${p}.noPlateCostsPremiumSpotMatteVa`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}}>{t(`${p}.qtyPcs`)}</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">{t(`${p}.unitPriceUsd`)}</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">{t(`${p}.totalUsd`)}</th>
                            <th style={{backgroundColor:"#059669",borderBottomColor:"#047857"}} className="text-right">{t(`${p}.estWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biopeSize === 'large' ? (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">100</td>
                                    <td className="text-right">$6.25</td>
                                    <td className="text-right font-bold text-gray-900">$625.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.28Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">1,000</td>
                                    <td className="text-right">$1.21</td>
                                    <td className="text-right font-bold text-gray-900">$1,210.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.28Kg10`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">5,000</td>
                                    <td className="text-right">$0.71</td>
                                    <td className="text-right font-bold text-gray-900">$3,550.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.140Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.63</td>
                                    <td className="text-right font-bold text-gray-900">$6,300.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.280Kg`)}</td>
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">100 <span className="text-xs text-emerald-600 font-bold">{t(`${p}.moq`)}</span></td>
                                    <td className="text-right"><span className="text-xs text-gray-500">{t(`${p}.total`)}</span></td>
                                    <td className="text-right font-bold text-gray-900">$527.08</td>
                                    <td className="text-right text-gray-600">{t(`${p}.12Kg11`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">1,000</td>
                                    <td className="text-right">$0.62</td>
                                    <td className="text-right font-bold text-gray-900">$620.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.12Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">5,000</td>
                                    <td className="text-right">$0.33</td>
                                    <td className="text-right font-bold text-gray-900">$1,650.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.60Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.29</td>
                                    <td className="text-right font-bold text-gray-900">$2,900.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.120Kg`)}</td>
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
                    <i className="fas fa-print"></i> {t(`${p}.platePrintPricingHighVolume`)}{biopeSize === 'large' ? 'Size A (249.6×292.1mm)' : 'Size B (145×180mm)'}
                </h3>
                <p className="text-indigo-700 text-sm mt-1">{t(`${p}.bestValueForLargeQuantitiesPla`)}<strong>{biopeSize === 'large' ? '$167/color' : '$135/color'}</strong></p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}}>{t(`${p}.qtyPcs`)}</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">{t(`${p}.unitPriceUsd`)}</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">{t(`${p}.totalUsd`)}</th>
                            <th style={{backgroundColor:"#6366f1",borderBottomColor:"#4f46e5"}} className="text-right">{t(`${p}.estWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biopeSize === 'large' ? (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.19</td>
                                    <td className="text-right font-bold text-gray-900">$1,900.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.280Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">50,000</td>
                                    <td className="text-right">$0.16</td>
                                    <td className="text-right font-bold text-gray-900">$8,000.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.1400Kg`)}</td>
                                </tr>
                            </>
                        ) : (
                            <>
                                <tr>
                                    <td className="font-semibold text-gray-900">10,000</td>
                                    <td className="text-right">$0.10</td>
                                    <td className="text-right font-bold text-gray-900">$1,000.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.120Kg`)}</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-gray-900">50,000</td>
                                    <td className="text-right">$0.07</td>
                                    <td className="text-right font-bold text-gray-900">$3,500.00</td>
                                    <td className="text-right text-gray-600">{t(`${p}.600Kg`)}</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-sm text-indigo-800">
                <p><strong><i className="fas fa-info-circle mr-1"></i> {t(`${p}.plateFee`)}</strong> {biopeSize === 'large' ? '$167 per color (¥800)' : '$135 per color (¥650)'}{t(`${p}.thisIsAOneTimeSetupCostPerArtw`)}</p>
            </div>
        </section>

        {/* Shipping Costs Section - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.shippingCostsDoorToDoor`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-plane text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-900 text-lg">{t(`${p}.airFreight`)}</h4>
                            <p className="text-blue-700 text-sm">{t(`${p}.fastDelivery710Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <p className="text-3xl font-black text-blue-600">$15<span className="text-lg font-normal text-blue-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-ship text-white text-xl"></i>
                        </div>
                        <div>
                            <h4 className="font-bold text-cyan-900 text-lg">{t(`${p}.seaFreight`)}</h4>
                            <p className="text-cyan-700 text-sm">{t(`${p}.economy3045Days`)}</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <p className="text-3xl font-black text-cyan-600">$5<span className="text-lg font-normal text-cyan-400">{t(`${p}.kg`)}</span></p>
                        <p className="text-sm text-gray-600 mt-2">{t(`${p}.doorToDoorService`)}</p>
                        <p className="text-xs text-green-600 font-medium mt-1"><i className="fas fa-check mr-1"></i> {t(`${p}.includesTaxCustomsDuty`)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700">
                <p><strong>{t(`${p}.shippingExample`)}</strong> {t(`${p}.for5000PcsOrder140Kg`)}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>{t(`${p}.airFreight140Kg15`)}<strong>$2,100</strong></li>
                    <li>{t(`${p}.seaFreight140Kg5`)}<strong>$700</strong></li>
                </ul>
            </div>
        </section>

        {/* Bio-PE Logo Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-seedling text-emerald-500"></i> {t(`${p}.bioPeCertificationLogo`)}</h3>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md">
                        <img src="/imgs/cert/im-green-logo.png" alt="I'm Green Bio-PE Logo" className="lb-img cursor-zoom-in w-full max-w-[200px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-emerald-800 mb-3">{t(`${p}.addThisLogoToYourArtwork`)}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {t(`${p}.the`)}<strong>{t(`${p}.iMGreen`)}</strong> {t(`${p}.logoIsTheOfficialCertification`)}</p>
                    <ul className="space-y-2 text-sm text-emerald-800 bg-white/60 p-4 rounded-lg border border-emerald-100">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.demonstratesUseOfPlantBasedRen`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.recognizedGloballyAsASustainab`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.helpsDifferentiateYourBrandOnS`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.weWillProvideTheLogoFileForYou`)}</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> {t(`${p}.optionalEnhancements`)}</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="lb-img cursor-zoom-in w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t(`${p}.stampFoiling`)}</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        {t(`${p}.upgradeYourPackagingWithAPremi`)}</p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> {t(`${p}.pricingNote`)}</strong> {t(`${p}.additional`)}<strong>{t(`${p}.usd150PerSizePerFace`)}</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">{t(`${p}.pleaseAdviseYourDesignToReceiv`)}</p>
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
                    <img src="/imgs/spec/pet-quadlex-aluminum-heavy.webp" alt="PET Quadlex Heavy Structure" className="lb-img cursor-zoom-in w-full max-w-[350px] h-auto object-contain" />
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                    <div className="bg-blue-50 rounded-xl px-6 py-4 text-center border border-blue-200 shadow-sm flex-1 min-w-[140px] group cursor-pointer hover:shadow-md transition-all duration-300">
                        <img src="https://achievepack.com/imgs/surface/ads/a_gloss_finish_detail_5685549.webp" alt="Glossy Surface" className="lb-img cursor-zoom-in w-full max-w-[120px] h-auto object-contain mix-blend-multiply mb-2 mx-auto transition-transform group-hover:scale-105 duration-300" />
                        <p className="text-xs font-bold text-blue-700 uppercase">{t(`${p}.glossySurface`)}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl px-6 py-4 text-center border border-blue-200 shadow-sm flex-1 min-w-[140px] group cursor-pointer hover:shadow-md transition-all duration-300">
                        <img src="https://achievepack.com/imgs/reclose/ads/a_spout_closure_closeup_detail_2705813.webp" alt="10mm Spout" className="lb-img cursor-zoom-in w-full max-w-[120px] h-auto object-contain mix-blend-multiply mb-2 mx-auto transition-transform group-hover:scale-105 duration-300" />
                        <p className="text-xs font-bold text-blue-700 uppercase">{t(`${p}.10mmSpout`)}</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.spoutedAluminumBiope`)}</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {t(`${p}.premiumSpoutedStandUpPouchWith`)}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="spec-badge"><i className="fas fa-ruler-combined mr-1"></i> {t(`${p}.15921545mm`)}</span>
                    <span className="spec-badge"><i className="fas fa-tint mr-1"></i> {t(`${p}.10mmSpout`)}</span>
                    <span className="spec-badge"><i className="fas fa-layer-group mr-1"></i> {t(`${p}.pet12Alu7Ny15Biope100`)}</span>
                    <span className="spec-badge"><i className="fas fa-print mr-1"></i> {t(`${p}.digitalPrinting`)}</span>
                    <span className="spec-badge"><i className="fas fa-weight-hanging mr-1"></i> {t(`${p}.25gPouch`)}</span>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2"><i className="fas fa-layer-group"></i> {t(`${p}.materialStructure`)}</h4>
                    <p className="text-gray-700"><strong>{t(`${p}.pet12`)}</strong> / <strong>{t(`${p}.alu7`)}</strong> / <strong>{t(`${p}.ny15`)}</strong> / <strong>{t(`${p}.biope100`)}</strong></p>
                    <p className="text-sm text-gray-500 mt-2">{t(`${p}.4LayerLaminateWithAluminumBarr`)}</p>
                </div>

                {/* Certifications */}
                <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-4 border-b border-blue-200/60 pb-1">{t(`${p}.certificationsStandards`)}</h5>
                <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-blue-200 shadow-sm justify-center sm:justify-start">
                    <div className="flex flex-col items-center text-center group w-24">
                        <img src="https://www.pouch.eco/imgs/cert/cert-BioPE.webp" alt="Bio-PE Certified" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                        <span className="text-xs font-bold text-blue-800 leading-tight mt-2">{t(`${p}.bioPeCertified`)}</span>
                    </div>
                    <div className="flex flex-col items-center text-center group w-24">
                        <img src="https://www.pouch.eco/imgs/cert/cert-brc.webp" alt="BRC Food Safety" className="lb-img cursor-zoom-in h-[80px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                        <span className="text-xs font-bold text-blue-800 leading-tight mt-2">{t(`${p}.brcFoodSafety`)}</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Real Product Sample - 500ml BioPE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-camera text-blue-500"></i> {t(`${p}.realProductSample500mlBiopeSpo`)}</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                {t(`${p}.actualSamplePhotosShowingTheEx`)}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-front.webp" alt="500ml BioPE Spouted Pouch - Front" className="lb-img cursor-zoom-in w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">{t(`${p}.frontView`)}</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-detail.webp" alt="500ml BioPE Spouted Pouch - I'm Green Logo Detail" className="lb-img cursor-zoom-in w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">{t(`${p}.iMGreenLogoDetail`)}</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src="/imgs/samples/spouted-biope-500ml-back.webp" alt="500ml BioPE Spouted Pouch - Back" className="lb-img cursor-zoom-in w-full h-auto rounded-lg object-cover mb-3" />
                    <p className="text-sm font-bold text-center text-gray-700">{t(`${p}.backView`)}</p>
                </div>
            </div>
            <div className="mt-4 bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                <p className="text-sm text-emerald-800"><i className="fas fa-check-circle mr-2"></i><strong>{t(`${p}.thisSampleDemonstrates`)}</strong> {t(`${p}.500mlCapacityGlossyFinishDigit`)}</p>
            </div>
        </section>

        {/* Pricing Table - Spouted Digital */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-print text-blue-500"></i> {t(`${p}.digitalPrintingPrice`)}</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                {t(`${p}.premiumSpoutedPouchesWithAlumi`)}</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full pricing-table">
                    <thead>
                        <tr>
                            <th className="rounded-tl-xl">{t(`${p}.quantityPcs`)}</th>
                            <th>{t(`${p}.unitPriceUsd`)}</th>
                            <th className="rounded-tr-xl">{t(`${p}.estGrossWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-50">
                            <td className="font-medium">100 <span className="text-xs text-blue-600 font-bold">{t(`${p}.moq`)}</span></td>
                            <td className="font-bold text-blue-600">$416.67 <span className="text-xs text-gray-500 font-normal">{t(`${p}.total`)}</span></td>
                            <td>{t(`${p}.25Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">1,000</td>
                            <td className="font-bold text-blue-600">$0.79</td>
                            <td>{t(`${p}.25Kg12`)}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">2,000</td>
                            <td className="font-bold text-blue-600">$0.46</td>
                            <td>{t(`${p}.50Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">5,000</td>
                            <td className="font-bold text-blue-600">$0.40</td>
                            <td>{t(`${p}.125Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-medium">10,000</td>
                            <td className="font-bold text-blue-600">$0.35</td>
                            <td>{t(`${p}.250Kg`)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic"><i className="fas fa-info-circle mr-1"></i> {t(`${p}.digitalPrintingNoPlateFeesMoq1`)}</p>
            
            {/* Spout Tooling Cost */}
            <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <i className="fas fa-tools text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-800 mb-1">{t(`${p}.spoutApplicationTooling`)}</h4>
                        <p className="text-amber-900 font-bold text-lg">{t(`${p}.usd150`)}<span className="text-sm font-normal text-amber-700">{t(`${p}.perSize`)}</span></p>
                        <p className="text-sm text-amber-700 mt-1">{t(`${p}.oneTimeToolingFeeForSpoutAppli`)}</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Shipping Table - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.estimatedShippingCost`)}</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                {t(`${p}.estimatedTotalCostIncludingPro`)}</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full pricing-table">
                    <thead>
                        <tr>
                            <th className="rounded-tl-xl">{t(`${p}.quantity`)}</th>
                            <th>{t(`${p}.productCost`)}</th>
                            <th>{t(`${p}.grossWeight`)}</th>
                            <th><i className="fas fa-ship mr-1"></i> {t(`${p}.seaFreight`)}</th>
                            <th>{t(`${p}.totalSea`)}</th>
                            <th><i className="fas fa-plane mr-1"></i> {t(`${p}.airFreight`)}</th>
                            <th className="rounded-tr-xl">{t(`${p}.totalAir`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-blue-50">
                            <td className="font-medium">100 <span className="text-xs text-blue-600">{t(`${p}.moq`)}</span></td>
                            <td>$416.67</td>
                            <td>{t(`${p}.25Kg`)}</td>
                            <td>$50</td>
                            <td className="font-bold text-green-600">$466.67</td>
                            <td>$25</td>
                            <td className="font-bold text-blue-600">$441.67</td>
                        </tr>
                        <tr>
                            <td className="font-medium">1,000</td>
                            <td>$790</td>
                            <td>{t(`${p}.25Kg13`)}</td>
                            <td>$80</td>
                            <td className="font-bold text-green-600">$870</td>
                            <td>$200</td>
                            <td className="font-bold text-blue-600">$990</td>
                        </tr>
                        <tr>
                            <td className="font-medium">2,000</td>
                            <td>$920</td>
                            <td>{t(`${p}.50Kg`)}</td>
                            <td>$100</td>
                            <td className="font-bold text-green-600">$1,020</td>
                            <td>$350</td>
                            <td className="font-bold text-blue-600">$1,270</td>
                        </tr>
                        <tr>
                            <td className="font-medium">5,000</td>
                            <td>$2,000</td>
                            <td>{t(`${p}.125Kg`)}</td>
                            <td>$180</td>
                            <td className="font-bold text-green-600">$2,180</td>
                            <td>$800</td>
                            <td className="font-bold text-blue-600">$2,800</td>
                        </tr>
                        <tr>
                            <td className="font-medium">10,000</td>
                            <td>$3,500</td>
                            <td>{t(`${p}.250Kg`)}</td>
                            <td>$280</td>
                            <td className="font-bold text-green-600">$3,780</td>
                            <td>$1,500</td>
                            <td className="font-bold text-blue-600">$5,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic"><i className="fas fa-info-circle mr-1"></i> {t(`${p}.shippingEstimatesToMajorPortsW`)}</p>
        </section>

        {/* Bio-PE Logo Section - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-seedling text-emerald-500"></i> {t(`${p}.bioPeCertificationLogo`)}</h3>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md">
                        <img src="/imgs/cert/im-green-logo.png" alt="I'm Green Bio-PE Logo" className="lb-img cursor-zoom-in w-full max-w-[200px] h-auto object-contain" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t(`${p}.addThisLogoToYourArtwork`)}</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        {t(`${p}.theIMGreenLogoIsTheOfficialCer`)}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.showsYourPackagingUsesPlantBas`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.recognizedGloballyAsASustainab`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.helpsDifferentiateYourBrandOnS`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-emerald-600 mt-0.5"></i> <span>{t(`${p}.weWillProvideTheLogoFileForYou`)}</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Optional Enhancements - Spouted */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> {t(`${p}.optionalEnhancements`)}</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="lb-img cursor-zoom-in w-full max-w-[200px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{t(`${p}.stampFoiling`)}</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        {t(`${p}.upgradeYourPackagingWithAPremi`)}</p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> {t(`${p}.pricingNote`)}</strong> {t(`${p}.additional`)}<strong>{t(`${p}.usd150PerSizePerFace`)}</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">{t(`${p}.pleaseAdviseYourDesignToReceiv`)}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* ==================== RECYCLABLE PE TAB ==================== */}
        {activeTab === 'pe' && (
        <>
        {/* Recyclable PE Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/pe-pouch-hero.jpg" alt="Recyclable PE Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/* Product Overview - Recyclable PE */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100 flex items-center justify-center relative shadow-inner min-h-[400px]">
                    <img src="https://achievepack.com/imgs/pouch-shape/achieve-pack-sup-lifestyle.png" alt="Recyclable PE Stand Up Pouch" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">{t(`${p}.includedDetails`)}</h5>
                <div className="flex flex-col gap-6">
                    {/* Surface Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-cyan-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-md z-10 shadow-sm border border-cyan-100">{t(`${p}.matteClearFinish`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/samples/pe-clear-matte.png" alt="Clear Material with Matte Surface" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.clearMaterialWithMatteSurface`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.highTransparencyClearMaterialP`)}</p>
                        </div>
                    </div>
                    {/* Zipper Card */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-cyan-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-md z-10 shadow-sm border border-cyan-100">{t(`${p}.lowTempZipper`)}</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[200px] mt-6">
                            <img src="/imgs/samples/pe-clear-zipper.png" alt="Standard Zipper" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">{t(`${p}.ultraLowTempZipper`)}</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                {t(`${p}.peLaminatedPeUltraLowTemperatu`)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">{t(`${p}.100RecyclableHighBarrierPe`)}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {t(`${p}.premiumMonoMaterialStandUpPouc`)}</p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{t(`${p}.materialStructure`)}</h4>
                <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-cyan-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[200px] group">
                        {/* Placeholder structure image */}
                        <img src="https://achievepack.com/imgs/spec/bio-cello-duplex-clear.webp" alt="Recyclable PE Structure" className="lb-img cursor-zoom-in w-full max-w-[400px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-cyan-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            {t(`${p}.mattePeEvohUltraLowTempPe`)}<span className="inline-block text-xs bg-cyan-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">{t(`${p}.100Recyclable`)}</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-cyan-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-cyan-100">
                            <li><strong>{t(`${p}.outer`)}</strong> {t(`${p}.recyclablePeMatteFilmPrintable`)}</li>
                            <li><strong>{t(`${p}.middle`)}</strong> {t(`${p}.evohHighBarrierForOxygenMoistu`)}</li>
                            <li><strong>{t(`${p}.inner`)}</strong> {t(`${p}.ultraLowTempPeColdResistantSea`)}</li>
                            <li className="mt-3 pt-3 border-t border-cyan-200 text-sm text-cyan-900 font-bold list-none">{t(`${p}.totalThickness122Micron`)}</li>
                        </ul>
                        
                        {/* Sustainability Claims */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-cyan-200/60 pb-1">{t(`${p}.sustainabilityFeatures`)}</h5>
                        <ul className="list-none mt-3 text-cyan-900 space-y-2 text-sm bg-blue-50/70 p-4 rounded-lg border border-blue-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-recycle text-blue-600 mt-1"></i> <span><strong>{t(`${p}.monoMaterialDesign`)}</strong> {t(`${p}.100PolyethyleneStructureMeetsG`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-shield-alt text-cyan-600 mt-1"></i> <span><strong>{t(`${p}.evohHighBarrier`)}</strong> {t(`${p}.providesGasAndMoistureBarrierC`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-purple-500 mt-1"></i> <span><strong>{t(`${p}.digitalPrinting14`)}</strong> {t(`${p}.noPrintingPlatesRequiredReduci`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-snowflake text-blue-400 mt-1"></i> <span><strong>{t(`${p}.coldResistant`)}</strong> {t(`${p}.ultraLowTemperaturePeEnsuresDu`)}</span></li>
                        </ul>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t(`${p}.includedOptions`)}</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> {t(`${p}.standUpPouch`)}</span>
                    <span className="spec-badge"><i className="fas fa-recycle mr-2"></i> {t(`${p}.recyclableMonoPe`)}</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> {t(`${p}.recyclablePeZipper`)}</span>
                    <span className="spec-badge"><i className="fas fa-shield-virus mr-2"></i> {t(`${p}.evohHighBarrier15`)}</span>
                </div>
            </div>
        </section>

        {/* Product Dimensions - Recyclable PE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> {t(`${p}.quoteDimensions`)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-cyan-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-cyan-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">{t(`${p}.standUpPouch`)}</p>
                    <p className="text-2xl font-black text-gray-800 mb-2">155 × 205<span className="text-sm font-normal text-gray-500 ml-1">{t(`${p}.mm`)}</span></p>
                    <p className="text-sm font-medium text-gray-500 bg-gray-50 mx-auto w-max px-3 py-1 rounded">{t(`${p}.45mmBottomGusset`)}</p>
                    <p className="text-xs text-gray-400 mt-2">{t(`${p}.thickness122Micron`)}</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200 flex flex-col justify-center">
                    <p className="text-sm text-cyan-800 font-medium"><i className="fas fa-info-circle mr-2"></i> {t(`${p}.customDimensionsProvidedByClie`)}</p>
                </div>
            </div>

            {/* Added 5mm shrinkage explanation */}
            <div className="mt-6 bg-amber-50 rounded-xl p-6 border border-amber-200 flex flex-col md:flex-row gap-6 items-center shadow-sm">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src="/imgs/samples/pe-pouch-shrinkage.png" alt="Production Shrinkage Allowance Diagram" className="lb-img cursor-zoom-in w-full h-auto max-w-[250px] rounded-lg shadow-sm border border-amber-300 bg-white" />
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <i className="fas fa-expand-arrows-alt text-amber-600"></i> {t(`${p}.productionShrinkageAllowance`)}</h4>
                    <p className="text-amber-800 leading-relaxed text-sm mb-2">
                        {t(`${p}.pleaseNoteThatAnExtra`)}<strong>{t(`${p}.5mm`)}</strong> {t(`${p}.hasBeenIntentionallyAddedToThe`)}</p>
                    <p className="text-amber-800 leading-relaxed text-sm">
                        {t(`${p}.duringTheThermalCuttingAndHeat`)}</p>
                </div>
            </div>
        </section>

        {/* Pricing Table - Digital PE */}
        <section className="mb-10">
            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-cyan-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> {t(`${p}.digitalPrintPricing`)}</h3>
                <p className="text-cyan-700 text-sm mt-1">{t(`${p}.noPlateCostsBaseCurrencyCalcul`)}</p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full pricing-table text-sm">
                    <thead>
                        <tr>
                            <th style={{backgroundColor:"#0891b2",borderBottomColor:"#0e7490"}}>{t(`${p}.quantityPcs`)}</th>
                            <th style={{backgroundColor:"#0891b2",borderBottomColor:"#0e7490"}} className="text-right">{t(`${p}.unitPriceUsd`)}</th>
                            <th style={{backgroundColor:"#0891b2",borderBottomColor:"#0e7490"}} className="text-right">{t(`${p}.totalUsd`)}</th>
                            <th style={{backgroundColor:"#0891b2",borderBottomColor:"#0e7490"}} className="text-right">{t(`${p}.estWeight`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="font-semibold text-gray-900">1,000</td>
                            <td className="text-right">$0.61</td>
                            <td className="text-right font-bold text-gray-900">$610.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.110Kg`)}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">2,000</td>
                            <td className="text-right">$0.49</td>
                            <td className="text-right font-bold text-gray-900">$980.00</td>
                            <td className="text-right text-gray-600">{t(`${p}.220Kg`)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 italic"><i className="fas fa-info-circle mr-1"></i> {t(`${p}.digitalPrintingQuotesIncludeOu`)}</p>
        </section>

        {/* Shipping Cost Table - PE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-shipping-fast text-blue-500"></i> {t(`${p}.estimatedShippingCost`)}</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
                {t(`${p}.estimatedTotalCostIncludingPro16`)}</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full pricing-table">
                    <thead>
                        <tr>
                            <th className="rounded-tl-xl">{t(`${p}.quantity`)}</th>
                            <th>{t(`${p}.productCost`)}</th>
                            <th>{t(`${p}.grossWeight`)}</th>
                            <th><i className="fas fa-ship mr-1"></i> {t(`${p}.seaFreight`)}</th>
                            <th>{t(`${p}.totalSea`)}</th>
                            <th><i className="fas fa-plane mr-1"></i> {t(`${p}.airFreight`)}</th>
                            <th className="rounded-tr-xl">{t(`${p}.totalAir`)}</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr className="bg-blue-50">
                            <td className="font-medium">1,000</td>
                            <td>$610.00</td>
                            <td>{t(`${p}.110Kg`)}</td>
                            <td>$55.00</td>
                            <td className="font-bold text-green-600">$665.00</td>
                            <td>$165.00</td>
                            <td className="font-bold text-blue-600">$775.00</td>
                        </tr>
                        <tr>
                            <td className="font-medium">2,000</td>
                            <td>$980.00</td>
                            <td>{t(`${p}.220Kg`)}</td>
                            <td>$110.00</td>
                            <td className="font-bold text-green-600">$1,090.00</td>
                            <td>$330.00</td>
                            <td className="font-bold text-blue-600">$1,310.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* Recycling Logo Section */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-recycle text-cyan-500"></i> {t(`${p}.recyclabilityLogos`)}</h3>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200 flex flex-col md:flex-row gap-6 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-white p-6 rounded-xl border border-cyan-100 shadow-md">
                        <img src="/imgs/cert/recycle_4_pe_logo.png" alt="Recycle 4 PE Logo" className="lb-img cursor-zoom-in w-full max-w-[150px] h-auto object-contain" onError={(e) => { e.currentTarget.src='https://achievepack.com/imgs/cert/recyclable.png'; }} />
                    </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-cyan-800 mb-3">{t(`${p}.addRecyclingIcons`)}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {t(`${p}.thisPackagingIsDesignatedAsA`)}<strong>{t(`${p}.class4LdpeRecyclablePlastic`)}</strong> {t(`${p}.structureWeRecommendAddingStor`)}</p>
                    <ul className="space-y-2 text-sm text-cyan-800 bg-white/60 p-4 rounded-lg border border-cyan-100">
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-cyan-600 mt-0.5"></i> <span>{t(`${p}.monoPolymerStandardCompliance`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-cyan-600 mt-0.5"></i> <span>{t(`${p}.canBeRecycledAtSoftPlasticColl`)}</span></li>
                        <li className="flex items-start gap-2"><i className="fas fa-check-circle text-cyan-600 mt-0.5"></i> <span>{t(`${p}.drivesSustainableBrandAwarenes`)}</span></li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Spot UV Upgrade Option - PE */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-star text-purple-500"></i> {t(`${p}.optionalUpgradeSpotUvFinish`)}</h3>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 flex items-center justify-center p-6 bg-white/60 border-b md:border-b-0 md:border-r border-purple-100">
                        <img
                            src="/imgs/surface/spot-uv-pouch.png"
                            alt="Spot UV Finish with Embossing Effect"
                            className="lb-img cursor-zoom-in w-full max-w-[320px] h-auto object-contain rounded-xl shadow-md transition-transform hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full border border-purple-200">{t(`${p}.premiumAddOn`)}</span>
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">{t(`${p}.30Cost`)}</span>
                        </div>
                        <h4 className="text-2xl font-black text-gray-900 mb-3">{t(`${p}.spotUvWithEmbossingEffect`)}</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {t(`${p}.elevateYourPackagingBeyondAFla`)}<strong>{t(`${p}.uvVarnishWithASubtleEmbossingE`)}</strong>{t(`${p}.creatingARaisedTactileTextureO`)}</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            {t(`${p}.unlikeStandardFlatReflectiveSp`)}<strong>{t(`${p}.threeDimensionalTactileQuality`)}</strong> {t(`${p}.thatMakesYourPackagingFeelPrem`)}</p>
                        <ul className="space-y-2 text-sm text-purple-900 bg-white/70 p-4 rounded-xl border border-purple-100 mb-5">
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-purple-500 mt-0.5"></i> <span><strong>{t(`${p}.uvEmbossCombo`)}</strong> {t(`${p}.notJustFlatReflectiveCreatesRa`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-purple-500 mt-0.5"></i> <span><strong>{t(`${p}.appliedOverMatteBase`)}</strong> {t(`${p}.maximumVisualContrastBetweenSu`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-purple-500 mt-0.5"></i> <span><strong>{t(`${p}.selectivePlacement`)}</strong> {t(`${p}.logosBordersIllustrationsOrSpe`)}</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-purple-500 mt-0.5"></i> <span><strong>{t(`${p}.compatibleWithPeStructure`)}</strong> {t(`${p}.availableOnThisRecyclableMonoP`)}</span></li>
                        </ul>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                            <i className="fas fa-info-circle text-amber-500 mt-0.5 flex-shrink-0"></i>
                            <div>
                                <p className="text-sm font-bold text-amber-800 mb-1">{t(`${p}.pricingNote17`)}</p>
                                <p className="text-sm text-amber-700">{t(`${p}.spotUvWithEmbossingAddsApproxi`)}<strong>+30%</strong> {t(`${p}.toTheBasePouchUnitPricePleaseS`)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        )}

        {/* Contact Signature */}
        <section className="border-t border-gray-200 pt-8 mt-12 mb-10">
            <h4 className="text-lg font-bold text-gray-800 mb-6">{t(`${p}.contactInformation`)}</h4>
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-200 shadow-sm mb-8">
                <div className="space-y-3 text-gray-800 text-left w-full">
                    <h4 className="text-2xl font-black text-gray-900 border-b-2 border-green-500 pb-2 inline-block">{t(`${p}.ryanWong`)}</h4>
                    <p className="font-bold text-green-700 text-lg uppercase tracking-wide">{t(`${p}.achievePackRegMdashYourPackagi`)}</p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-md mt-4 font-medium text-gray-700 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex-1 space-y-2">
                            <p className="flex items-center gap-3">
                                <i className="fas fa-globe text-blue-500 w-5 text-center text-lg"></i> 
                                <a href="https://pouch.eco" target="_blank" className="hover:text-blue-600 transition-colors">{t(`${p}.httpsPouchEco`)}</a> 
                                <span className="text-gray-300 px-1">|</span> 
                                <a href="https://achievepack.com" target="_blank" className="hover:text-blue-600 transition-colors">{t(`${p}.httpsAchievepackCom`)}</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <i className="fas fa-envelope text-blue-500 w-5 text-center text-lg"></i> 
                                <a href="mailto:ryan@pouch.eco" className="hover:text-blue-600 transition-colors">{t(`${p}.ryanPouchEco`)}</a> 
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
            <h4 className="text-lg font-bold text-gray-800 mb-4">{t(`${p}.termsConditions`)}</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>{t(`${p}.pricesQuotedAreInUsdExw`)}</li>
                <li>{t(`${p}.shippingCostsAreAdditionalSeeS`)}</li>
                <li>{t(`${p}.productionToExFactoryLeadTimeI`)}</li>
                <li>{t(`${p}.paymentTerms50DepositUponOrder`)}</li>
                <li>{t(`${p}.productionToleranceInvoicedOnA`)}<ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-gray-500">
                        <li>{t(`${p}.quantityUnder100050`)}</li>
                        <li>{t(`${p}.quantityUnder1000020`)}</li>
                        <li>{t(`${p}.quantity10000AndOver10`)}</li>
                    </ul>
                </li>
            </ul>
        </section>

        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
            <p>{t(`${p}.copy2025PouchEcoByAchievePackA`)}</p>
        </div>
    </div>

      </div>
    </>
  );
};

export default StandUpPouchQuotePage;
