import React from 'react';

const SustainablePackagingPillarPage: React.FC = () => {
  return (
    <div className="sustainable-packaging-pillar-page">
      <header className="hero-section">
        <h1>Sustainable Packaging Solutions for B2B</h1>
        <p className="empathy-hook">Struggling to meet your sustainability goals without compromising on packaging quality? We understand the challenge of balancing durability with eco-conscious materials.</p>
        <img src="/imgs/topics/sustainable-packaging-pillar-page/hero_sustainable_packaging_pillar_page.webp" alt="Sustainable Packaging Hero" />
      </header>
      
      <section className="process-section">
        <h2>Our Manufacturing Process</h2>
        <p>Our advanced facilities utilize renewable energy and waste-reduction techniques to deliver premium, reliable packaging.</p>
        <img src="/imgs/topics/sustainable-packaging-pillar-page/process_sustainable_packaging_pillar_page.webp" alt="Sustainable Manufacturing Process" />
      </section>

      <section className="comparison-section">
        <h2>Sustainable vs. Traditional</h2>
        <p>See how our eco-friendly materials outperform traditional non-recyclable plastics in both environmental impact and product protection.</p>
        <img src="/imgs/topics/sustainable-packaging-pillar-page/comparison_sustainable_packaging_pillar_page.webp" alt="Sustainable vs Traditional Packaging Comparison" />
      </section>
    </div>
  );
};

export default SustainablePackagingPillarPage;
