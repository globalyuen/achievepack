import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface CertificateFile {
  name: string;
  description: string;
  filename: string;
  icon: string;
  category: 'food-safety' | 'environmental' | 'quality';
}

const certificates: CertificateFile[] = [
  {
    name: 'BPI Certificate',
    description: 'BPI Commercial Compostability Certification',
    filename: 'BPI_Certificate-Achieve Pack Company-10529618-1_02_27_2026.pdf',
    icon: 'fa-leaf',
    category: 'environmental'
  },
  {
    name: 'BRC Food Safety Audit Report 2024',
    description: 'Latest BRC Global Standards audit report for food packaging safety',
    filename: '1.BRC AUDI REPORT 2024.pdf',
    icon: 'fa-shield-halved',
    category: 'food-safety'
  },
  {
    name: 'BRC Certificate (English)',
    description: 'BRC Global Standard for Packaging Materials - Certificate',
    filename: 'BRC EN.pdf',
    icon: 'fa-certificate',
    category: 'food-safety'
  },
  {
    name: 'ISO 14001 Environmental Management',
    description: 'Environmental management system certification from CWL',
    filename: '5. CWL-ISO14001.pdf',
    icon: 'fa-leaf',
    category: 'environmental'
  },
  {
    name: 'FSC Chain of Custody',
    description: 'Forest Stewardship Council certification for responsible sourcing',
    filename: 'CWL FSC.pdf',
    icon: 'fa-tree',
    category: 'environmental'
  },
  {
    name: 'GRS Global Recycled Standard',
    description: 'Certification for recycled content verification',
    filename: 'CWL GRS.pdf',
    icon: 'fa-recycle',
    category: 'environmental'
  },
  {
    name: 'ISO 9001 Quality Management',
    description: 'Quality management system certification',
    filename: 'CWL ISO9001.pdf',
    icon: 'fa-award',
    category: 'quality'
  },
  {
    name: 'Home Compostable Certificate',
    description: 'DIN CERTCO home compostable certification (OK Compost HOME)',
    filename: '9P0209_en_extsigned家庭堆肥证书.pdf',
    icon: 'fa-seedling',
    category: 'environmental'
  },
  {
    name: 'Home Compost Test Report',
    description: 'Full laboratory test report for home compostability',
    filename: 'home compost test report.pdf',
    icon: 'fa-file-medical',
    category: 'environmental'
  },
  {
    name: 'Seedling Logo EU Industrial Compostable',
    description: 'European Bioplastics certification confirming compliance with EN 13432',
    filename: 'Seedling Logo Industrial Compostable Certificate.pdf',
    icon: 'fa-seedling',
    category: 'environmental'
  }
];

const CertificateDownloadPage: React.FC = () => {
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Helmet>
          <title>Secure Certificate Download - Achieve Pack</title>
        </Helmet>
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h1 className="text-2xl font-bold mb-2">Password Required</h1>
          <p className="text-gray-600 mb-6">Please enter the password to access certificate downloads.</p>
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

  const foodSafetyCerts = certificates.filter(c => c.category === 'food-safety');
  const environmentalCerts = certificates.filter(c => c.category === 'environmental');
  const qualityCerts = certificates.filter(c => c.category === 'quality');

  return (
    <>
      <Helmet>
        <title>Certificate Downloads - Pouch.eco</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <i className="fas fa-file-certificate text-4xl text-green-600"></i>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Certificate Downloads</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our complete collection of quality, food safety, and environmental certifications. 
              All certificates are available in PDF format for your records.
            </p>
          </div>

          {/* Food Safety Section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-shield-halved text-red-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Food Safety Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {foodSafetyCerts.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </section>

          {/* Environmental Section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-leaf text-green-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Environmental Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {environmentalCerts.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </section>

          {/* Quality Section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-award text-blue-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Quality Management</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {qualityCerts.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <i className="fas fa-info-circle text-gray-500 mr-2"></i>
            <span className="text-gray-600">
              Need additional documentation or specific certificates? Contact us at{' '}
              <a href="mailto:info@achievepack.com" className="text-green-600 hover:underline font-medium">
                info@achievepack.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const CertificateCard: React.FC<{ certificate: CertificateFile }> = ({ certificate }) => {
  const categoryColors = {
    'food-safety': 'border-red-200 hover:border-red-400',
    'environmental': 'border-green-200 hover:border-green-400',
    'quality': 'border-blue-200 hover:border-blue-400'
  };

  const iconColors = {
    'food-safety': 'text-red-500',
    'environmental': 'text-green-500',
    'quality': 'text-blue-500'
  };

  return (
    <a 
      href={`/full-cert/${encodeURIComponent(certificate.filename)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white rounded-xl p-5 border-2 ${categoryColors[certificate.category]} shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4 group`}
    >
      <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
        <i className={`fas ${certificate.icon} text-xl ${iconColors[certificate.category]}`}></i>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
          {certificate.name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{certificate.description}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <i className="fas fa-file-pdf text-red-400"></i>
          <span>PDF Document</span>
          <span className="mx-1">•</span>
          <span className="text-green-600 font-medium group-hover:underline">Download <i className="fas fa-download ml-1"></i></span>
        </div>
      </div>
    </a>
  );
};

export default CertificateDownloadPage;
