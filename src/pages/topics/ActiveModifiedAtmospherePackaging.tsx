import React from 'react';

const ActiveModifiedAtmospherePackaging: React.FC = () => {
  return (
    <div className="topic-container">
      <header className="hero-section">
        <img src="/imgs/topics/active-modified-atmosphere-packaging/hero.png" alt="Active Modified Atmosphere Packaging" className="hero-img" />
        <h1>Active Modified Atmosphere Packaging</h1>
        <p className="empathy-hook">You're losing margins to spoilage before your product even reaches the shelf. What if your packaging actively extended shelf life while maintaining peak freshness?</p>
      </header>
      
      <section className="technical-details">
        <h2>The Technical Edge</h2>
        <p>Active Modified Atmosphere Packaging (AMAP) employs precision gas flush technology, dynamically balancing O2, CO2, and N2 levels to inhibit microbial growth and oxidation. Our high-barrier multilayer films are engineered for optimal transmission rates.</p>
        <img src="/imgs/topics/active-modified-atmosphere-packaging/process.png" alt="AMAP Process" className="process-img" />
      </section>

      <section className="comparison">
        <h2>Traditional vs. AMAP</h2>
        <div className="comparison-content">
          <img src="/imgs/topics/active-modified-atmosphere-packaging/comparison.png" alt="Shelf Life Comparison" className="comparison-img" />
          <p>Unlike standard packaging, AMAP creates a microclimate that can double or triple shelf life, drastically reducing supply chain waste and improving your bottom line.</p>
        </div>
      </section>
    </div>
  );
};

export default ActiveModifiedAtmospherePackaging;
