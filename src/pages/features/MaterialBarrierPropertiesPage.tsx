import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Shield, Droplets, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDomain } from '../../utils/domain';
import Footer from '../../components/Footer';
import StoreFooter from '../../components/StoreFooter';

export default function MaterialBarrierPropertiesPage() {
  const isPouch = getDomain() === 'pouch';
  
  const propertiesData1 = [
    { material: 'OPP 20', o2: '1900', wvtr: '6' },
    { material: 'OPP 30', o2: '1800', wvtr: '5.8' },
    { material: 'OPP 40', o2: '1700', wvtr: '5.5' },
    { material: 'PET 12', o2: '85', wvtr: '55' },
    { material: 'NY 15', o2: '45', wvtr: '260' },
    { material: 'CPP 20', o2: '2000', wvtr: '6' },
    { material: 'CPP 30', o2: '1800', wvtr: '5.5' },
    { material: 'CPP 40', o2: '1700', wvtr: '5' },
    { material: 'VMCPP 25', o2: '25', wvtr: '1' },
    { material: 'VMPET 12', o2: '2', wvtr: '2' },
    { material: 'AL 7', o2: '1', wvtr: '1.4' },
  ];

  const propertiesData2 = [
    { material: 'AL 9', o2: '1', wvtr: '1.1' },
    { material: 'LLDPE 40', o2: '5000', wvtr: '18' },
    { material: 'KOP 21', o2: '10', wvtr: '4' },
    { material: 'KNY 17', o2: '8', wvtr: '12' },
    { material: 'KPET 12', o2: '8', wvtr: '12' },
    { material: 'PEARL 30', o2: '2200', wvtr: '9' },
    { material: 'MAT OPP 20', o2: '1900', wvtr: '6' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <Helmet>
        <title>Material Barrier Properties Data Sheet | Achieve Pack</title>
        <meta name="description" content="Technical data sheet detailing Oxygen Transmission Rate (O2 TR) and Water Vapor Transmission Rate (WVTR) for transparent, metallized, and kraft pouch materials." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to={isPouch ? "/" : "/store"} className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-600 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden mb-16">
          {/* Header */}
          <div className="bg-primary-900 text-white p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <img src={isPouch ? "/pouch-eco-logo.svg" : "/ap-logo-white.webp"} alt="Logo" className="h-10 mb-4 bg-white/10 p-2 rounded-lg object-contain" style={{ filter: isPouch ? 'brightness(0) invert(1)' : 'none' }} />
                <h1 className="text-3xl font-bold mb-2">Flexible Packaging Material Barrier Properties</h1>
                <p className="text-primary-200">Comparison of Oxygen and Water Vapor Transmission Rates</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2 bg-primary-800/50 px-4 py-2 rounded-lg border border-primary-700">
                  <Shield className="w-5 h-5 text-primary-300" />
                  <span className="font-medium text-sm">Technical Reference Sheet</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Overview / Legend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Wind className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">O₂ Transmission Rate (O₂ TR)</h3>
                </div>
                <p className="text-sm text-blue-800 mb-2">Oxygen barrier performance.</p>
                <div className="text-xs font-mono bg-white border border-blue-100 px-3 py-2 rounded text-blue-700">
                  Unit: cc/m² · 24hrs · atm (at 23°C, 0% RH)
                </div>
                <p className="text-xs text-blue-600 mt-2 italic">*Lower values indicate better oxygen barrier</p>
              </div>

              <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900">Water Vapor Trans. Rate (WVTR)</h3>
                </div>
                <p className="text-sm text-primary-800 mb-2">Moisture barrier performance.</p>
                <div className="text-xs font-mono bg-white border border-primary-100 px-3 py-2 rounded text-primary-700">
                  Unit: g/m² · 24hrs (at 38°C, 90% RH)
                </div>
                <p className="text-xs text-primary-600 mt-2 italic">*Lower values indicate better moisture barrier</p>
              </div>
            </div>

            {/* Tables Container */}
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 border-b border-neutral-200 pb-2">
              Barrier Properties by Material
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Table 1 */}
              <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 text-neutral-700 text-sm">
                      <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">Material</th>
                      <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">O₂ TR<br/><span className="text-[10px] font-normal leading-tight block text-blue-600">cc/m² 24hrs<br/>23°C, 0% RH</span></th>
                      <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">WVTR<br/><span className="text-[10px] font-normal leading-tight block text-primary-600">g/m² 24hrs<br/>38°C, 90% RH</span></th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    {propertiesData1.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="p-3 border-b border-neutral-100 font-medium">{row.material}</td>
                        <td className="p-3 border-b border-neutral-100 text-center font-mono text-sm">{row.o2}</td>
                        <td className="p-3 border-b border-neutral-100 text-center font-mono text-sm">{row.wvtr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table 2 */}
              <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm h-fit">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 text-neutral-700 text-sm">
                      <th className="p-3 border-b border-neutral-200 font-bold w-[34%]">Material</th>
                      <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-blue-800">O₂ TR<br/><span className="text-[10px] font-normal leading-tight block text-blue-600">cc/m² 24hrs<br/>23°C, 0% RH</span></th>
                      <th className="p-3 border-b border-neutral-200 font-bold text-center w-[33%] text-primary-800">WVTR<br/><span className="text-[10px] font-normal leading-tight block text-primary-600">g/m² 24hrs<br/>38°C, 90% RH</span></th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    {propertiesData2.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="p-3 border-b border-neutral-100 font-medium">{row.material}</td>
                        <td className="p-3 border-b border-neutral-100 text-center font-mono text-sm">{row.o2}</td>
                        <td className="p-3 border-b border-neutral-100 text-center font-mono text-sm">{row.wvtr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-neutral-50 p-6 rounded-xl text-sm text-neutral-600 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-3">Key Insights & Abbreviations</h4>
              <ul className="space-y-2">
                <li>• <strong className="text-neutral-800">PET / NY / OPP:</strong> Standard transparent films. PET and NY offer better oxygen barrier than OPP.</li>
                <li>• <strong className="text-neutral-800">VMCPP / VMPET (Metallized):</strong> Vacuum Metallized films vastly improve both moisture and oxygen barriers, turning transparent films into high-barrier options.</li>
                <li>• <strong className="text-neutral-800">AL (Aluminum Foil):</strong> The absolute highest barrier available against oxygen and moisture, effectively reducing both values to ~1.</li>
                <li>• <strong className="text-neutral-800">K-Coated (KOP, KNY, KPET):</strong> PVDC coated films dramatically improve the barrier properties of standard transparent films while keeping them fully clear.</li>
                <li>• Values presented are typical industry averages and may vary slightly based on specific film manufacturer, thickness tolerances, and testing exactitudes.</li>
              </ul>
            </div>
            
            {/* Footer */}
            <div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col items-center justify-center text-center">
              <p className="text-neutral-500 mb-2">Need help choosing the right barrier for your product?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-800 font-semibold mt-2">
                <a href={isPouch ? 'https://pouch.eco/contact' : 'https://achievepack.com/contact'} className="text-primary-600 hover:text-primary-700 underline">Contact Technical Support</a>
                <span>|</span>
                <span>{isPouch ? 'www.pouch.eco' : 'www.achievepack.com'}</span>
                <span>|</span>
                <span>Tel: +852 6970 4411</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {isPouch ? <Footer /> : <StoreFooter />}
    </div>
  );
}
