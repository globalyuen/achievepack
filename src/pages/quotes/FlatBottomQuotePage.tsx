import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import QuoteLightbox from '../../components/QuoteLightbox';


const FlatBottomQuotePage: React.FC = () => {
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
      <QuoteLightbox />
<Helmet>
        <title>Quotation: Flat Bottom Kraft Pouch - Pouch.eco</title>
        <style>
          {`
        body {
            font-family: 'Geologica', sans-serif;
            background-color: #f8f9fa;
        }
        
        /* Table styling for premium look */
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
        
        /* Highlight specific options */
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

        /* Print adjustments */
        @media print {
            @page {
                size: A4 portrait;
                margin: 10mm;
            }
            
            html, body {
                width: 210mm;
                height: 297mm;
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
                max-width: 100% !important;
                width: 100% !important;
            }
            
            img {
                mix-blend-mode: normal !important;
                box-shadow: none !important;
                max-width: 100% !important;
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            /* Grid layout for print */
            .grid {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
            }
            
            .grid > div {
                flex: 1 1 180px !important;
                margin: 0 !important;
                padding: 8px !important;
            }

            /* Prevent sections from breaking */
            section, table, .pricing-table tr {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            /* Table text size for print */
            .pricing-table {
                font-size: 9px !important;
            }
            
            .pricing-table th {
                padding: 6px 8px !important;
                font-size: 9px !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            .pricing-table td {
                padding: 5px 8px !important;
                font-size: 9px !important;
            }
            
            /* Reduce font sizes for print */
            h3 {
                font-size: 16px !important;
            }
            
            h4 {
                font-size: 13px !important;
            }
            
            p, li, span {
                font-size: 10px !important;
            }
            
            .text-lg {
                font-size: 12px !important;
            }
            
            .text-xl {
                font-size: 13px !important;
            }
            
            .text-2xl {
                font-size: 15px !important;
            }
            
            .text-3xl {
                font-size: 17px !important;
            }
            
            /* Reduce image sizes for print */
            .min-h-\[500px\] {
                min-height: 250px !important;
            }
            
            .min-h-\[250px\] {
                min-height: 120px !important;
            }
            
            .max-w-\[600px\] {
                max-width: 300px !important;
            }
            
            .max-w-\[500px\] {
                max-width: 250px !important;
            }
            
            .max-w-\[400px\] {
                max-width: 200px !important;
            }
            
            .max-w-\[250px\] {
                max-width: 120px !important;
            }
            
            /* Fix certification images */
            .h-\[100px\] {
                height: 50px !important;
            }
            
            /* Reduce gaps and margins for print */
            .gap-10 {
                gap: 12px !important;
            }
            
            .gap-6 {
                gap: 8px !important;
            }
            
            .gap-5 {
                gap: 6px !important;
            }
            
            .mb-12 {
                margin-bottom: 16px !important;
            }
            
            .mb-10 {
                margin-bottom: 12px !important;
            }
            
            .mb-8 {
                margin-bottom: 10px !important;
            }
            
            .p-8, .md\:p-12 {
                padding: 10px !important;
            }
            
            .p-6 {
                padding: 8px !important;
            }
            
            /* Fix flex layouts */
            .flex-col.lg\:flex-row {
                flex-direction: column !important;
            }
            
            .lg\:w-1\/2 {
                width: 100% !important;
            }
        }
    `}
        </style>
      </Helmet>
      
      <div className="text-gray-800 antialiased min-h-screen p-4 md:p-8" style={{ backgroundColor: "#f8f9fa", fontFamily: "'Geologica', sans-serif" }}>
        

    {/*  Action Bar (Hidden in PDF)  */}
    <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center no-print">
        <div>
            <a href="/" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to Home
            </a>
        </div>
    </div>

    {/*  Main Quotation Container  */}
    <div id="quotation-content" className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 mb-12">
        
        {/*  Header  */}
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
        {/* Compostable Banner */}
        <section className="mb-12 w-full">
            <img src="/imgs/samples/compostable-pouch-home.jpg" alt="Home Compostable Certified Pouch" className="w-full h-auto rounded-2xl shadow-md object-cover" />
        </section>

        {/*  Product Overview  */}
        <section className="mb-12 flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-1/2 flex-shrink-0 flex flex-col gap-6">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex items-center justify-center relative shadow-inner min-h-[500px]">
                    <img src="/imgs/product/pouch1.webp" alt="Flat Bottom Kraft Pouch" className="lb-img cursor-zoom-in w-full max-w-[600px] h-auto object-contain rounded drop-shadow-xl mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                </div>
                
                <h5 className="text-lg font-black text-gray-800 uppercase tracking-widest mt-4">Included Details</h5>
                <div className="flex flex-col gap-6">
                    {/*  Zipper Card  */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-md z-10 shadow-sm border border-green-100">Home Compostable Zipper</span>
                        <div className="w-full flex flex-col items-center justify-center min-h-[250px] mt-6">
                            <img src="/imgs/pdf-assets/front-zipper.webp" alt="One Sided Zipper" className="lb-img cursor-zoom-in w-full max-w-[500px] h-auto object-contain mix-blend-multiply mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </div>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">Front Pocket Zipper</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                Built for convenience with an easy-tear front access and a reliable resealable track. This zipper is constructed from PBAT, ensuring it remains fully certified for home composting without sacrificing structural integrity.
                            </p>
                        </div>
                    </div>
                    
                    {/*  Valve Card  */}
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col items-center relative group hover:border-gray-300 transition-colors">
                        <span className="absolute top-4 left-4 text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md z-10 shadow-sm border border-blue-100">Industrial Compostable Valve</span>
                        <a href="https://achievepack.com/products/coffee-bags-degassing-valve" target="_blank" className="w-full flex flex-col items-center justify-center min-h-[250px] mt-6 group-hover:opacity-90">
                            <img src="/imgs/pdf-assets/valve.webp" alt="Degassing Valve" className="lb-img cursor-zoom-in w-full max-w-[500px] mx-auto h-auto object-contain mb-4 transition-transform group-hover:scale-105 duration-300" />
                        </a>
                        <div className="w-full pt-4 border-t border-gray-100 mt-2 text-center">
                            <h6 className="font-bold text-gray-800 text-sm uppercase mb-1">PLA One-Way Degassing Valve</h6>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-[90%] mx-auto">
                                Releases built-up CO&nbsp;&#8322; from fresh roasted coffee beans while preventing outside oxygen from entering and spoiling the coffee. Made from PLA, making it perfectly suitable for industrial composting facilities.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-sm text-blue-800 bg-blue-50 p-4 rounded-lg border border-blue-200 leading-relaxed shadow-sm">
                    <strong>Note:</strong> We offer compostable valves made with PLA (Industrial Compostable only). For Home Compostable bags, the valve must be removed before composting at home.
                </div>
                
                {/*  Expert Tip  */}
                <a href="/topics/compostable-humidity-control" target="_blank" className="mt-4 block bg-amber-50 rounded-xl p-5 border border-amber-200 shadow-sm relative group hover:bg-amber-100 hover:border-amber-300 transition-colors">
                    <div className="absolute top-0 right-0 bg-amber-200 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-widest">Expert Tip</div>
                    <div className="flex gap-4 items-start">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 border border-amber-200">
                            <img src="/imgs/samples/brittle-vs-strong-compost.jpg" alt="Bag Humidity Control" className="lb-img cursor-zoom-in w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div>
                            <h6 className="font-bold text-amber-900 text-sm mb-1 uppercase pb-1 flex items-center gap-1">
                                <i className="fas fa-lightbulb text-amber-600"></i> Protect Cellulose From Becoming Brittle
                            </h6>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                Natural cellulose compost bags can become brittle in dry environments. Learn about our humidity control solutions to reduce transport damage by 70%. <span className="font-bold underline">Read more &rarr;</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-5">Flat Bottom Kraft Pouch</h3>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    Premium eco-friendly flat bottom pouch designed for excellent shelf presence and stability. Features a natural kraft paper aesthetic that communicates your commitment to sustainability.
                </p>
                
                <h4 className="text-md font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Material Structure</h4>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-8 shadow-sm">
                    <div className="w-full bg-white p-6 rounded-xl border border-amber-200 mb-6 flex flex-col items-center justify-center shadow-inner min-h-[250px] group">
                        <img src="/imgs/pdf-assets/bio-kraft-vm-cello.webp" alt="Material Structure Cross Section" className="lb-img cursor-zoom-in w-full max-w-[500px] h-auto object-contain rounded mix-blend-multiply transition-transform group-hover:scale-105 duration-300" />
                    </div>
                    <div className="w-full text-gray-800">
                        <p className="font-bold text-amber-900 mb-3 text-lg leading-tight flex flex-col sm:flex-row sm:items-center gap-2">
                            Kraft Paper 70gsm / Metalised Layer / PBAT60
                            <span className="inline-block text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold max-w-max shadow-sm tracking-wide">Home Compostable</span>
                        </p>
                        <ul className="list-disc list-inside mt-4 text-amber-800 space-y-2 block text-base bg-white/50 p-4 rounded-lg border border-amber-100">
                            <li><strong>Outer:</strong> Kraft Paper 70gsm (Natural Look & Feel)</li>
                            <li><strong>Middle:</strong> Metalised layer (High Barrier)</li>
                            <li><strong>Inner:</strong> PBAT60 (Biodegradable Sealant)</li>
                            <li className="mt-3 pt-3 border-t border-amber-200 text-sm text-amber-900 font-bold list-none">Thickness: 150-160 micron &nbsp;|&nbsp; OTR: &lt;2 cc/m&sup2;/day &nbsp;|&nbsp; WVTR: &lt;5 g/m&sup2;/day</li>
                        </ul>
                        
                        {/*  Sustainability Claims  */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-6 mb-3 border-b border-amber-200/60 pb-1">Sustainability Features</h5>
                        <ul className="list-none mt-3 text-amber-900 space-y-2 text-sm bg-green-50/70 p-4 rounded-lg border border-green-100 shadow-sm leading-relaxed mb-6">
                            <li className="flex items-start gap-2"><i className="fas fa-leaf text-green-600 mt-1"></i> <span><strong>Home Compostable:</strong> Bag material and zipper are certified Home Compostable.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-check-circle text-green-600 mt-1"></i> <span><strong>Eco-Components:</strong> Zipper is made of <strong>PBAT</strong>; coffee valve is made of <strong>PLA</strong> (Industrial Compostable).</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-tint text-blue-500 mt-1"></i> <span><strong>Sustainable Printing:</strong> Roto print uses <strong>water-based ink</strong>. Digital print uses <strong>home compostable ink</strong> by HP Indigo.</span></li>
                            <li className="flex items-start gap-2"><i className="fas fa-link text-amber-600 mt-1"></i> <span><strong>Safe Bonding:</strong> All lamination uses <strong>solventless adhesive</strong>.</span></li>
                        </ul>

                        {/*  Certifications  */}
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-4 border-b border-amber-200/60 pb-1">Certifications & Standards</h5>
                        <div className="flex flex-wrap gap-5 mt-4 bg-white/70 p-5 rounded-xl border border-amber-200 shadow-sm justify-center sm:justify-start">
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-din-home-compost.png" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-din-home-compost.png" alt="DIN Home Compostable Certification" title="Click to enlarge" className="lb-img cursor-zoom-in h-[100px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">DIN Certco</span>
                                <span className="text-[10px] text-gray-600 font-medium mt-1 leading-tight">Home Compost</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-ABA-as5810.png" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-ABA-as5810.png" alt="ABA AS5810 Australian Certification" title="Click to enlarge" className="lb-img cursor-zoom-in h-[100px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">AU AS5810</span>
                                <span className="text-[10px] text-gray-600 font-medium mt-1 leading-tight">Home Compost</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/logo-bpi.jpg" alt="BPI Certified" title="Click to view BPI Listing" className="lb-img cursor-zoom-in h-[100px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform rounded-sm" />
                                </a>
                                <span className="text-xs font-bold text-green-800 leading-tight">BPI Certified</span>
                                <span className="text-[10px] text-gray-600 font-medium mt-1 leading-tight">Compostable</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-fsc.png" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-fsc.png" alt="FSC Certification" title="Click to enlarge" className="lb-img cursor-zoom-in h-[100px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-green-900 leading-tight">FSC Certified</span>
                                <span className="text-[10px] text-gray-600 font-medium mt-1 leading-tight">Responsible Forestry</span>
                            </div>
                            <div className="flex flex-col items-center text-center group w-24">
                                <a href="https://achievepack.com/imgs/cert/cert-brc.webp" target="_blank" className="block mb-2">
                                    <img src="/imgs/pdf-assets/cert-brc.webp" alt="BRC Food Safety" title="Click to enlarge" className="lb-img cursor-zoom-in h-[100px] w-auto object-contain drop-shadow-md hover:-translate-y-1 transition-transform" />
                                </a>
                                <span className="text-xs font-bold text-gray-800 leading-tight">BRC Standard</span>
                                <span className="text-[10px] text-gray-600 font-medium mt-1 leading-tight">Food Safety</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Included Options</h4>
                <div className="flex flex-wrap">
                    <span className="spec-badge"><i className="fas fa-box-open mr-2"></i> Flat Bottom Structure</span>
                    <span className="spec-badge"><i className="fas fa-leaf mr-2"></i> Kraft Paper Surface</span>
                    <span className="spec-badge"><i className="fas fa-file-zipper mr-2"></i> One-Sided Zipper</span>
                    <span className="spec-badge"><i className="fas fa-wind mr-2"></i> Degassing Valve</span>
                </div>
            </div>
        </section>

        {/*  Product Dimensions  */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-ruler-combined text-gray-400"></i> Quote Dimensions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">100g</p>
                    <p className="text-lg font-black text-gray-800 mb-1">105 &times; 190<span className="text-xs font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-xs font-medium text-gray-500 bg-gray-50 mx-auto w-max px-2 py-1 rounded">60mm Gusset</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">200g</p>
                    <p className="text-lg font-black text-gray-800 mb-1">110 &times; 205<span className="text-xs font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-xs font-medium text-gray-500 bg-gray-50 mx-auto w-max px-2 py-1 rounded">65mm Gusset</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">500g</p>
                    <p className="text-lg font-black text-gray-800 mb-1">130 &times; 250<span className="text-xs font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-xs font-medium text-gray-500 bg-gray-50 mx-auto w-max px-2 py-1 rounded">70mm Gusset</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-green-300 transition-colors shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-green-400 transition-colors"></div>
                    <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">1kg</p>
                    <p className="text-lg font-black text-gray-800 mb-1">132 &times; 320<span className="text-xs font-normal text-gray-500 ml-1">mm</span></p>
                    <p className="text-xs font-medium text-gray-500 bg-gray-50 mx-auto w-max px-2 py-1 rounded">92mm Gusset</p>
                </div>
            </div>
        </section>

        {/*  Pricing Section 1: Roto Print  */}
        <section className="mb-10">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-blue-800 mb-1 flex items-center gap-2">
                    <i className="fas fa-print"></i> Roto Print Pricing Option
                </h3>
                <p className="text-blue-700 text-sm flex flex-col space-y-1">
                    <span><strong>Note:</strong> Plate cost is <span className="font-semibold">USD 120 / color / size</span>. Printing on the flat bottom side gusset requires an extra plate.</span>
                    <span className="text-xs font-semibold underline">*Plate costs are not included in the table values below.</span>
                </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-xs md:text-sm whitespace-nowrap">
                    <thead>
                        <tr>
                            <th>Capacity</th>
                            <th>Size (W x H x Gusset) mm</th>
                            <th className="text-center w-[80px]">Home<br />Zipper</th>
                            <th className="text-center w-[80px]">Industrial<br />Valve</th>
                            <th className="text-right">Qty (pcs)</th>
                            <th className="text-right">Unit Price (USD/pc)</th>
                            <th className="text-right font-bold">Total (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  100g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">100g</td>
                            <td>105 x 190 x 60</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">10,000</td>
                            <td className="text-right">$0.41</td>
                            <td className="text-right font-bold text-gray-900">$4,128.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">100g</td>
                            <td>105 x 190 x 60</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">15,000</td>
                            <td className="text-right">$0.39</td>
                            <td className="text-right font-bold text-gray-900">$5,856.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">100g</td>
                            <td className="border-b-2 border-gray-300">105 x 190 x 60</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">20,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.38</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$7,632.00</td>
                        </tr>
                        
                        {/*  200g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">200g</td>
                            <td>110 x 205 x 65</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">10,000</td>
                            <td className="text-right">$0.43</td>
                            <td className="text-right font-bold text-gray-900">$4,303.20</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">200g</td>
                            <td>110 x 205 x 65</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">15,000</td>
                            <td className="text-right">$0.41</td>
                            <td className="text-right font-bold text-gray-900">$6,168.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">200g</td>
                            <td className="border-b-2 border-gray-300">110 x 205 x 65</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">20,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.40</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$7,968.00</td>
                        </tr>
                        
                        {/*  500g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">500g</td>
                            <td>130 x 250 x 70</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">10,000</td>
                            <td className="text-right">$0.54</td>
                            <td className="text-right font-bold text-gray-900">$5,431.20</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">500g</td>
                            <td>130 x 250 x 70</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">15,000</td>
                            <td className="text-right">$0.52</td>
                            <td className="text-right font-bold text-gray-900">$7,776.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">500g</td>
                            <td className="border-b-2 border-gray-300">130 x 250 x 70</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">20,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.51</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$10,206.00</td>
                        </tr>
                        
                        {/*  1kg  */}
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">10,000</td>
                            <td className="text-right">$0.69</td>
                            <td className="text-right font-bold text-gray-900">$6,943.20</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">15,000</td>
                            <td className="text-right">$0.67</td>
                            <td className="text-right font-bold text-gray-900">$10,098.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">20,000</td>
                            <td className="text-right">$0.66</td>
                            <td className="text-right font-bold text-gray-900">$13,329.60</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="mt-4 p-4 bg-orange-50 border-[2px] border-orange-400 rounded-lg text-sm text-orange-900 shadow-sm leading-relaxed">
                <strong><i className="fas fa-info-circle mr-1"></i> Roto Print Plate Note:</strong> Plate cost is <strong>USD 120 / color / size</strong>. Printing on the flat bottom side gusset requires an extra plate.
                <br />
                <span className="text-orange-800 font-semibold mt-1 inline-block">*Please note that plate costs are <strong>not included</strong> in the table cost above.*</span>
            </div>
        </section>

        {/*  Pricing Section 2: Digital Print  */}
        <section className="mb-10">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6 rounded-r">
                <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2">
                    <i className="fas fa-bolt"></i> Digital Print Pricing Option (Low MOQ)
                </h3>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full pricing-table text-xs md:text-sm whitespace-nowrap">
                    <thead>
                        <tr>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}}>Capacity</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}}>Size (W x H x Gusset) mm</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}} className="text-center w-[80px]">Home<br />Zipper</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}} className="text-center w-[80px]">Industrial<br />Valve</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}} className="text-right">Qty (pcs)</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}} className="text-right">Unit Price (USD/pc)</th>
                            <th style={{"backgroundColor":"#8b5cf6","borderBottomColor":"#7c3aed"}} className="text-right font-bold">Total (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  100g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">100g</td>
                            <td>105 x 190 x 60</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">100</td>
                            <td className="text-right">$9.77</td>
                            <td className="text-right font-bold text-gray-900">$977.10</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">100g</td>
                            <td>105 x 190 x 60</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">1,000</td>
                            <td className="text-right">$1.48</td>
                            <td className="text-right font-bold text-gray-900">$1,480.56</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">100g</td>
                            <td className="border-b-2 border-gray-300">105 x 190 x 60</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">10,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.56</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$5,656.50</td>
                        </tr>

                        {/*  200g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">200g</td>
                            <td>110 x 205 x 65</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">100</td>
                            <td className="text-right">$9.77</td>
                            <td className="text-right font-bold text-gray-900">$977.10</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">200g</td>
                            <td>110 x 205 x 65</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">1,000</td>
                            <td className="text-right">$1.52</td>
                            <td className="text-right font-bold text-gray-900">$1,523.70</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">200g</td>
                            <td className="border-b-2 border-gray-300">110 x 205 x 65</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">10,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.61</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$6,091.20</td>
                        </tr>

                        {/*  500g  */}
                        <tr>
                            <td className="font-semibold text-gray-900">500g</td>
                            <td>130 x 250 x 70</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">100</td>
                            <td className="text-right">$10.44</td>
                            <td className="text-right font-bold text-gray-900">$1,043.76</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">500g</td>
                            <td>130 x 250 x 70</td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">1,000</td>
                            <td className="text-right">$1.61</td>
                            <td className="text-right font-bold text-gray-900">$1,609.20</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900 border-b-2 border-gray-300">500g</td>
                            <td className="border-b-2 border-gray-300">130 x 250 x 70</td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-center text-green-600 border-b-2 border-gray-300"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium border-b-2 border-gray-300">10,000</td>
                            <td className="text-right border-b-2 border-gray-300">$0.70</td>
                            <td className="text-right font-bold text-gray-900 border-b-2 border-gray-300">$6,943.20</td>
                        </tr>

                        {/*  1kg  */}
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">100</td>
                            <td className="text-right">$11.94</td>
                            <td className="text-right font-bold text-gray-900">$1,194.00</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">1,000</td>
                            <td className="text-right">$2.05</td>
                            <td className="text-right font-bold text-gray-900">$2,044.60</td>
                        </tr>
                        <tr>
                            <td className="font-semibold text-gray-900">1kg</td>
                            <td>132 x 320 x 92</td>
                            <td className="text-center text-gray-400"><i className="fas fa-times"></i></td>
                            <td className="text-center text-green-600"><i className="fas fa-check"></i></td>
                            <td className="text-right font-medium">10,000</td>
                            <td className="text-right">$0.91</td>
                            <td className="text-right font-bold text-gray-900">$9,133.20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/*  Optional Enhancements  */}
        <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-gem text-yellow-500"></i> Optional Enhancements
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6 mt-4 shadow-sm items-center">
                <div className="w-full md:w-1/3 flex justify-center group">
                    <img src="/imgs/pdf-assets/foil.webp" alt="Stamp Foiling Option" className="lb-img cursor-zoom-in w-full max-w-[250px] rounded-lg shadow-md border border-gray-200 object-cover transition-transform group-hover:scale-[1.02] duration-300" />
                </div>
                <div className="w-full md:w-2/3 text-gray-800">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Stamp Foiling</h4>
                    <p className="text-gray-700 leading-relaxed max-w-lg mb-4">
                        Upgrade your packaging with a premium metallic finish. Perfect for making logos and specific design elements stand out on the shelf.
                    </p>
                    <div className="bg-yellow-50 text-yellow-900 text-sm p-4 rounded-lg border border-yellow-200 shadow-inner">
                        <p className="mb-1"><strong><i className="fas fa-info-circle mr-1"></i> Pricing Note:</strong> This feature is <strong>not included</strong> in the pricing tables above.</p>
                        <p className="mb-2">Stamp foil costs an additional <strong>USD 150 per size per face</strong>.</p>
                        <p className="text-xs text-yellow-800 font-semibold uppercase tracking-wider">Please advise your design to receive a final true quote if stamp foiling is needed.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  Expert tip: Humidity Control  */}
        <section className="mb-10 page-break-inside-avoid break-inside-avoid">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
                <i className="fas fa-lightbulb text-yellow-500"></i> Pro Tip: Humidity Control for Compostable Bags
            </h3>
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mt-4 shadow-sm">
                <div className="text-yellow-900">
                    <h4 className="text-xl font-bold mb-2">Prevent your bags from cracking!</h4>
                    <p className="leading-relaxed mb-4">
                        Cellulose compostable bags can become brittle and crack during ocean freight if the humidity drops below 40% RH. We highly recommend adding our economical 2-way moisture control packs to your order.
                    </p>
                    <a href="/blog/compostable-humidity-control" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded shadow-sm hover:bg-yellow-500 transition-colors">
                        Learn how it works &rarr;
                    </a>
                </div>
            </div>
        </section>

        {/*  Contact Signature & Bottom Banner  */}
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
                                <a href="https://pouch.eco" target="_blank" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600">https://pouch.eco</a> 
                                <span className="text-gray-300 px-1">|</span> 
                                <a href="https://achievepack.com" target="_blank" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600">https://achievepack.com</a>
                            </p>
                            <p className="flex items-center gap-3">
                                <i className="fas fa-envelope text-blue-500 w-5 text-center text-lg"></i> 
                                <a href="mailto:ryan@pouch.eco" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600">ryan@pouch.eco</a> 
                                <span className="text-gray-300 px-1">|</span> 
                                <a href="mailto:ryan@achievepack.com" className="hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600">ryan@achievepack.com</a>
                            </p>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3 pt-2 md:pt-0 mt-2 md:mt-0 border-t md:border-none border-gray-100">
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
            
            {/*  Promotional Footer Image  */}
            <div className="w-full flex justify-center mt-6">
                <img src="/imgs/pdf-assets/hero.webp" alt="Pouch.eco Sustainable Packaging Solutions" className="w-full max-w-5xl h-auto drop-shadow-md object-contain rounded-xl border border-gray-100 bg-white/50" />
            </div>
        </section>

        {/*  Terms and Conditions  */}
        <section className="border-t border-gray-200 pt-8 mt-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Terms & Conditions</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Prices quoted are in USD.</li>
                <li>Shipping, taxes, and duties are not included.</li>
                <li>Production to ex factory lead time is 30-40 days from artwork confirm and deposit received.</li>
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
            <p>&copy; <span id="currentYear"></span> Pouch.eco by Achieve Pack. All rights reserved.</p>
        </div>
    </div>

    {/*  Scripts  */}
    

      </div>
    </>
  );
};

export default FlatBottomQuotePage;
