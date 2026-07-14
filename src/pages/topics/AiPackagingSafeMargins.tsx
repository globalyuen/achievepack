import React from 'react';

const AiPackagingSafeMargins = () => {
  return (
    <div className="topic-container bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
          Automated Safe Margins for Flexible Packaging
        </h1>
        <p className="text-xl text-gray-500 mb-8 italic">
          There is nothing worse than receiving a massive production run only to find crucial product information cut off at the seal. We know that protecting your legal copy and branding is non-negotiable.
        </p>
        
        <div className="my-8">
          <img src="/imgs/topics/ai-packaging-safe-margins/hero.png" alt="Precise geometric lines on packaging" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold mt-8 mb-4">AI-Powered Dieline Verification</h2>
          <p>
            Flexible packaging inherently shifts during the forming and sealing process. Our AI systems automatically calculate and enforce dynamic safe margins tailored to your specific pouch dimensions, gusset structures, and zipper placements.
          </p>
          
          <div className="my-8">
            <img src="/imgs/topics/ai-packaging-safe-margins/process.png" alt="AI software adjusting safe margins" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Risk Mitigation at Scale</h3>
          <p>
            By computationally verifying that all critical artwork elements sit securely within the designated safe zones, we eliminate human error. This technological safeguard ensures compliance, brand integrity, and zero waste from cutting discrepancies.
          </p>

          <div className="my-8">
            <img src="/imgs/topics/ai-packaging-safe-margins/comparison.png" alt="Cut off text vs perfectly aligned packaging" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPackagingSafeMargins;
