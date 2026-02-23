import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

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
      // Set dynamic dates
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      
      const elDate = document.getElementById('current-date');
      if (elDate) {
        elDate.textContent = today.toLocaleDateString('en-US', options);
      }
      
      const validUntil = new Date();
      validUntil.setDate(validUntil.getDate() + 30);
      const elValid = document.getElementById('valid-until');
      if (elValid) {
        elValid.textContent = validUntil.toLocaleDateString('en-US', options);
      }
    }
  }, [isAuthenticated]);

  const generatePDF = async () => {
    // Dynamic import to avoid SSR issues
    try {
      // @ts-expect-error
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('quotation-content');
      
      // Hide standard button, show loading
      const downloadBtn = document.getElementById('download-btn');
      const loadingBtn = document.getElementById('loading-btn');
      
      if (downloadBtn && loadingBtn) {
        downloadBtn.classList.add('hidden');
        loadingBtn.classList.remove('hidden');
      }
      
      const opt = {
        margin: [10, 10, 10, 10],
        filename: 'Quotation_100g_200g_500g_1kg_compostable_flat_bottom_one_sided_zipper_pouch_with_valve.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
      
      // Restore buttons
      if (downloadBtn && loadingBtn) {
        downloadBtn.classList.remove('hidden');
        loadingBtn.classList.add('hidden');
      }
    } catch (e) {
      console.error('Failed to load html2pdf or generate', e);
      alert('Failed to generate PDF. Please try again.');
      
      // Restore buttons
      const downloadBtn = document.getElementById('download-btn');
      const loadingBtn = document.getElementById('loading-btn');
      if (downloadBtn && loadingBtn) {
        downloadBtn.classList.remove('hidden');
        loadingBtn.classList.add('hidden');
      }
    }
  };

  const copyLink = () => {
    const link = window.location.origin + window.location.pathname + '?p=pouch2026';
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!\n' + link);
    });
  };

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
        <title>Quotation: 100g 200g 500g 1kg compostable flat bottom one sided zipper pouch with valve</title>
        <style>
          {`
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
            @media print {
                .no-print { display: none !important; }
                body { background-color: white !important; }
                #quotation-content { box-shadow: none !important; padding: 0 !important; }
                main { padding-top: 0 !important; padding-bottom: 0 !important; }
            }
          `}
        </style>
      </Helmet>
      
      <div className="bg-gray-50 font-sans min-h-screen pb-12">
        {/* Floating Action Bar */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 no-print">
            <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-8" />
                    <div>
                        <h1 className="text-sm font-bold text-gray-800">Quotation #AP-2026-HQ-FB</h1>
                        <span className="text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full font-medium">Valid until <span id="top-valid-date"></span></span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={copyLink} className="flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-200 border border-blue-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        Copy Share Link
                    </button>
                    <button id="download-btn" onClick={generatePDF} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        Download PDF
                    </button>
                    <button id="loading-btn" className="hidden flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating PDF...
                    </button>
                </div>
            </div>
        </div>

        {/* Main Content Area */}
        <main className="pt-24 max-w-5xl mx-auto px-4 print:pt-0 print:px-0">
            <div id="quotation-content" className="bg-white p-8 md:p-12 rounded-xl shadow-lg print:shadow-none print:p-0">
                
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start border-b pb-8 mb-8 border-gray-200">
                    <div className="mb-6 md:mb-0">
                        <img src="/ap-logo.svg" alt="Achieve Pack Logo" className="h-12 mb-4" />
                        <h2 className="text-2xl font-bold text-gray-800">Achieve Pack Company Limited</h2>
                        <div className="text-gray-600 mt-2 text-sm leading-relaxed">
                            <p>No.41 1/F Wo Liu Hang Tsuen, Fotan,</p>
                            <p>New Territories, Hong Kong</p>
                            <p>Email: hello@achievepack.com</p>
                            <p>Website: www.pouch.eco</p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-right w-full md:w-auto">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase tracking-wide">Quotation</h1>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            <div className="text-gray-500 text-left font-medium">Quote Ref:</div>
                            <div className="font-semibold text-gray-800">AP-2026-HQ-FB</div>
                            
                            <div className="text-gray-500 text-left font-medium">Date:</div>
                            <div className="text-gray-800" id="current-date">Fetching date...</div>
                            
                            <div className="text-gray-500 text-left font-medium">Valid Until:</div>
                            <div className="text-gray-800 font-medium text-red-600" id="valid-until">Fetching date...</div>
                            
                            <div className="text-gray-500 text-left font-medium">Prepared By:</div>
                            <div className="text-gray-800 font-medium">Team Achieve Pack</div>
                        </div>
                    </div>
                </header>
                
                {/* Product Overview */}
                <section className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Product Specifications</h2>
                    </div>
                    
                    <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                        <div className="bg-gray-50 px-6 py-4 border-b">
                            <h3 className="text-lg font-bold text-gray-800">Compostable Box Bottom Kraft Pouch (Custom Printed)</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                <div>
                                    <div className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Product Description</div>
                                    <p className="text-gray-800 font-medium">100g 200g 500g 1kg compostable flat bottom one sided zipper pouch with valve</p>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wider">Pouch Shape</div>
                                    <p className="text-gray-800 font-medium">Box Bottom / Flat Bottom Pouch</p>
                                </div>
                                <div className="md:col-span-2 mt-2">
                                    <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">Selected Upgrades</div>
                                    <div className="flex flex-wrap">
                                        <span className="spec-badge"><svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>One Side Pocket Zipper (Extra $0.02)</span>
                                        <span className="spec-badge"><svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Compostable Wipf Valve (Extra $0.15)</span>
                                    </div>
                                    <p className="text-xs text-green-700 mt-2 bg-green-50 p-2 rounded-md font-medium inline-block border border-green-100">
                                        💡 Note: The unit prices in the tables below <strong>already include</strong> the cost of the selected upgrades.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="my-10 border-gray-200" />
                
                {/* Pricing Section 1: Roto Print */}
                <section className="mb-10 page-break-inside-avoid">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="font-bold text-blue-600">A</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Option A: Roto Plate Printing</h2>
                    </div>
                    <p className="text-gray-600 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm leading-relaxed">
                        <span className="font-semibold text-blue-800">Best for: Large volumes and highest quality printing.</span> Cost-effective at scale. 
                        <strong>Plate Cost: USD $80/color.</strong> (Plate fees are a one-time charge per unique design/color, 
                        valid for 1 year without re-order).
                    </p>
                    
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse pricing-table">
                            <thead>
                                <tr>
                                    <th className="w-1/4">Size (W x H + Bottom x2) & Material</th>
                                    <th>10,000 pcs</th>
                                    <th>20,000 pcs</th>
                                    <th>30,000 pcs</th>
                                    <th>50,000 pcs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">100g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">90 x 185 + 50 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.255 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.231 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.207 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-green-700">$0.198 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">200g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">120 x 200 + 70 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.316 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.283 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.250 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-green-700">$0.233 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">500g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">130 x 260 + 80 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.366 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.339 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.312 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-green-700">$0.288 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">1000g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">135 x 335 + 100 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.457 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.427 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.380 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-green-700">$0.354 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {/* Pricing Section 2: Digital Print */}
                <section className="mb-10 page-break-inside-avoid print:mt-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="font-bold text-purple-600">B</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Option B: HP Indigo Digital Printing</h2>
                    </div>
                    <p className="text-gray-600 mb-6 bg-purple-50 p-4 rounded-lg border border-purple-100 shadow-sm leading-relaxed">
                        <span className="font-semibold text-purple-800">Best for: Multiple SKUs, short runs, and testing new markets.</span>
                        <strong>No Plate Costs applicable!</strong> You save on upfront setup fees, allowing flexible design changes.
                    </p>
                    
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse pricing-table">
                            <thead>
                                <tr>
                                    <th className="w-1/4">Size (W x H + Bottom x2) & Material</th>
                                    <th>1,000 pcs <span className="text-xs font-normal block text-green-100">(Per SKU)</span></th>
                                    <th>3,000 pcs <span className="text-xs font-normal block text-green-100">(Per SKU)</span></th>
                                    <th>5,000 pcs <span className="text-xs font-normal block text-green-100">(Per SKU)</span></th>
                                    <th>10,000 pcs <span className="text-xs font-normal block text-green-100">(Per SKU)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">100g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">90 x 185 + 50 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.876 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.575 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.456 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-purple-700">$0.347 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">200g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">120 x 200 + 70 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$0.963 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.618 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.540 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-purple-700">$0.426 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">500g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">130 x 260 + 80 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$1.127 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.732 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.640 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-purple-700">$0.490 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                                <tr>
                                    <td className="font-medium align-top">
                                        <div className="text-sm font-bold text-gray-800 mb-1">1000g Size</div>
                                        <div className="text-xs text-gray-500 mb-2">135 x 335 + 100 x 2 mm</div>
                                        <div className="text-xs bg-gray-100 p-1.5 rounded text-gray-700 inline-block font-medium">BOPLA / PBAT+PLA</div>
                                    </td>
                                    <td className="font-semibold text-gray-800">$1.340 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$1.028 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800">$0.760 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                    <td className="font-semibold text-gray-800 text-purple-700">$0.638 <span className="text-xs font-normal text-gray-500">/pc</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {/* Terms and Conditions */}
                <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 page-break-inside-avoid shadow-inner">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300 flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Terms & Conditions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Production Time</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2 text-green-500">●</span> 
                                    <span><strong>Digital Print:</strong> 15 - 20 working days</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-blue-500">●</span> 
                                    <span><strong>Roto Print:</strong> 25 - 30 working days</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-gray-400">●</span> 
                                    <span>Time counts from artwork approval & deposit receipt.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Standard Features Included</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 
                                    Regular Zipper & Tear Notch
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 
                                    Round Corners & Default Clear Window (if requested)
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> 
                                    Matte or Glossy Finish
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Shipping & Margin</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-2 text-yellow-500">●</span> 
                                    <span>Shipping cost will be calculated separately based on final destination and method (Air/Sea).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-yellow-500">●</span> 
                                    <span><strong>Roto MOQ Tolerance:</strong> Please allow +/- 10% quantity difference margin based on actual factory output.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">Payment Terms</h3>
                            <p className="text-sm text-gray-600">
                                <strong>50% deposit</strong> to commence production.<br/>
                                <strong>50% balance</strong> prior to shipment.<br/>
                                Bank transfer details will be provided on the Proforma Invoice.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Special Thanks & Signature */}
                <div className="mt-12 text-center page-break-inside-avoid">
                    <p className="text-lg font-medium text-gray-700 italic border-t pt-8 pb-4">Thank you for considering Achieve Pack for your sustainable packaging journey.</p>
                    <div className="flex justify-center mb-2">
                        <img src="/imgs/ryan-email-signature.jpg" alt="Ryan Signature" className="h-40 rounded-lg shadow-sm" />
                    </div>
                </div>
                
            </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm no-print mb-8">
            <p>&copy; {new Date().getFullYear()} Achieve Pack Company Limited. All rights reserved.</p>
            <p className="mt-1">Pouch.eco is a brand by Achieve Pack.</p>
        </footer>
      </div>
    </>
  );
};

export default FlatBottomQuotePage;
