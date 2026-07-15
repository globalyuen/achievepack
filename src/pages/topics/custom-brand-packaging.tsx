import React from 'react';

export default function CustomBrandPackagingPage() {
  return (
    <div className="seo-page b2b-technical">
      {/* Empathy Hook */}
      <section className="hero">
        <h1>CustomBrandPackagingPage</h1>
        <p>We understand the logistical and technical hurdles of sourcing reliable packaging. Our CustomBrandPackagingPage solutions offer uncompromising quality and engineering precision.</p>
        <img src={`/imgs/topics/custom-brand-packaging/hero.png`} alt="Hero" />
      </section>
      <section className="process">
        <h2>Manufacturing Process</h2>
        <img src={`/imgs/topics/custom-brand-packaging/process.png`} alt="Process" />
        <p>Advanced co-extrusion and rigorous QA testing.</p>
      </section>
      <section className="comparison">
        <h2>Technical Comparison</h2>
        <img src={`/imgs/topics/custom-brand-packaging/comparison.png`} alt="Comparison" />
        <p>Superior barrier properties compared to standard films.</p>
      </section>
    </div>
  );
}
