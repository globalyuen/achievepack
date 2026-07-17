import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../../components/SEOPageLayout';

const FoodSupplierPackaging: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${item.title} | AchievePack</title>
        <meta name="description" content="Discover premium solutions for ${item.title}. Elevate your brand with AchievePack." />
      </Helmet>
      <SEOPageLayout
        title="${item.title}"
        subtitle="Optimized Packaging Solutions for Maximum Impact"
        imageSrc="${item.src}"
        imageAlt="${item.title}"
        date="2024-05-18"
        author="AchievePack Engineering Team"
        content={
          <div className="prose max-w-none">
${item.content}
          </div>
        }
      />
    </>
  );
};

export default FoodSupplierPackaging;
