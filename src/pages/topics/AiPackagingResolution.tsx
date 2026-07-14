import React from 'react';

const AiPackagingResolution = () => {
  return (
    <div className="topic-container bg-white text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6">
          AI-Driven Precision in Packaging Resolution
        </h1>
        <p className="text-xl text-gray-500 mb-8 italic">
          You invest heavily in your brand's visual identity, but inconsistent print quality can compromise your market presence. We understand the frustration of receiving packaging that doesn't match your high standards.
        </p>
        
        <div className="my-8">
          <img src="/imgs/topics/ai-packaging-resolution/hero.png" alt="High-tech printing technology with sharp graphics" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold mt-8 mb-4">The Technical Edge of AI Print Analysis</h2>
          <p>
            Modern packaging manufacturing demands absolute precision. Utilizing advanced artificial intelligence algorithms, we analyze your design files at a pixel level. This ensures that raster images are appropriately scaled, vector paths are optimized, and color densities are maintained during the flexographic and rotogravure printing processes.
          </p>
          
          <div className="my-8">
            <img src="/imgs/topics/ai-packaging-resolution/process.png" alt="AI analyzing packaging resolution in a modern factory" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Why Resolution Matters in B2B Supply Chains</h3>
          <p>
            For B2B brands, packaging is often the first physical touchpoint with retail buyers. AI technology pre-flights artwork to identify low-resolution assets before they ever reach the press, preventing costly misprints and supply chain delays.
          </p>

          <div className="my-8">
            <img src="/imgs/topics/ai-packaging-resolution/comparison.png" alt="Low resolution vs AI-enhanced ultra-sharp packaging" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPackagingResolution;
