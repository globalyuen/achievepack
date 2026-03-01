const fs = require('fs');

const htmlFile = '/Users/ryanmacmini/Desktop/Master Achieve Pack/Master Achieve Pack/pouch-eco-website/html/quotation_flat_bottom.html';
const reactFile = '/Users/ryanmacmini/Desktop/Master Achieve Pack/Master Achieve Pack/achieve pack website/achieve-pack/src/pages/quotes/FlatBottomQuotePage.tsx';

let html = fs.readFileSync(htmlFile, 'utf8');

let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

bodyContent = bodyContent.replace(/class=/g, 'className=');

bodyContent = bodyContent.replace(/style="([^"]+)"/g, (match, p1) => {
    if (p1.includes('{')) return match; 
    let styleObj = {};
    p1.split(';').forEach(pair => {
        let [key, val] = pair.split(':');
        if (key && val) {
            let camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            styleObj[camelKey] = val.trim();
        }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
});

bodyContent = bodyContent.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
bodyContent = bodyContent.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
bodyContent = bodyContent.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');

bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

bodyContent = bodyContent.replace(/<script>([\s\S]*?)<\/script>/gi, '');
bodyContent = bodyContent.replace(/<\/tr>\s*<\/tr>/g, '</tr>');
bodyContent = bodyContent.replace(/&plusmn;/g, '±');
bodyContent = bodyContent.replace(/onerror="[^"]*"/gi, "onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='https://achievepack.com/imgs/store/achieve-pack-logo.png'; }}");

bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/colspan=/gi, 'colSpan=');
bodyContent = bodyContent.replace(/rowspan=/gi, 'rowSpan=');

bodyContent = bodyContent.replace(/\.\.\/imgs\//g, '/imgs/');

bodyContent = bodyContent.replace(/onclick="generatePDF\(\)"/gi, 'onClick={generatePDF}');

bodyContent = bodyContent.replace(/a href="index\.html"/gi, 'a href="/"');

let styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let headStyle = styleMatch ? styleMatch[1] : '';

const template = `import React, { useEffect, useState } from 'react';
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
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      
      const elDate = document.getElementById('currentDate');
      if (elDate) {
        elDate.textContent = today.toLocaleDateString('en-US', options);
      }
    }
  }, [isAuthenticated]);

  const generatePDF = async () => {
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('quotation-content');
      
      const downloadBtn = document.getElementById('downloadPdfBtn');
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
      }
      
      const opt: any = {
        margin: [10, 10, 10, 10],
        filename: 'Quotation_100g_200g_500g_1kg_compostable_flat_bottom_one_sided_zipper_pouch_with_valve.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, backgroundColor: '#ffffff' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
      
      if (downloadBtn) {
        downloadBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Download PDF';
      }
    } catch (e) {
      console.error('Failed to load html2pdf or generate', e);
      alert('Failed to generate PDF. Please try again.');
    }
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
        <title>Quotation: Flat Bottom Kraft Pouch - Pouch.eco</title>
        <style>
          {\`${headStyle}\`}
        </style>
      </Helmet>
      
      <div className="text-gray-800 antialiased min-h-screen p-4 md:p-8" style={{ backgroundColor: "#f8f9fa", fontFamily: "'Geologica', sans-serif" }}>
        ${bodyContent}
      </div>
    </>
  );
};

export default FlatBottomQuotePage;
`;

fs.writeFileSync(reactFile, template);
