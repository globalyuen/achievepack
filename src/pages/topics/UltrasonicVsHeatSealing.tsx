import React from 'react';
import { Helmet } from 'react-helmet';

const UltrasonicVsHeatSealing: React.FC = () => {
  return (
    <div className="seo-page-container">
      <Helmet>
        <title>Ultrasonic vs Heat Sealing | Technical Guide</title>
        <meta name="description" content="A comprehensive B2B technical guide comparing ultrasonic sealing and heat sealing technologies for packaging." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Ultrasonic vs Heat Sealing</h1>
        <p>A Technical Comparison for High-Volume Packaging Operations</p>
        <img 
          src="/imgs/topics/ultrasonic-vs-heat-sealing/hero_ultrasonic_vs_heat_sealing.png" 
          alt="Ultrasonic vs Heat Sealing Hero" 
          className="hero-image"
        />
      </section>

      {/* Empathy Hook */}
      <section className="empathy-hook">
        <h2>Struggling with Seal Integrity and Production Bottlenecks?</h2>
        <p>
          We know that in high-speed packaging, every faulty seal means wasted product, downtime, and compromised brand trust. 
          Choosing between ultrasonic and heat sealing isn't just a technical decision—it's a critical operational choice that impacts your bottom line.
        </p>
      </section>

      {/* Technical Process */}
      <section className="process-section">
        <h2>The Process: How They Compare</h2>
        <img 
          src="/imgs/topics/ultrasonic-vs-heat-sealing/process_ultrasonic_vs_heat_sealing.png" 
          alt="Sealing Process Comparison" 
          className="content-image"
        />
        <div className="content-text">
          <h3>Heat Sealing</h3>
          <p>
            Heat sealing uses heated jaws to melt the thermoplastic materials together. It relies on three critical factors: heat, time, and pressure.
            While simple and widely adopted, it can struggle with product contamination in the seal area.
          </p>
          
          <h3>Ultrasonic Sealing</h3>
          <p>
            Ultrasonic sealing uses high-frequency vibrations to create localized friction, melting the material precisely where needed. 
            Because the tools remain relatively cold, it significantly reduces the risk of product degradation and can easily seal through liquids, powders, and pastes.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <h2>Visual Comparison: The Final Seal</h2>
        <img 
          src="/imgs/topics/ultrasonic-vs-heat-sealing/comparison_ultrasonic_vs_heat_sealing.png" 
          alt="Visual Comparison of Seal Quality" 
          className="content-image"
        />
        <div className="comparison-table">
          <h3>Performance Metrics</h3>
          <ul>
            <li><strong>Seal Strength:</strong> Ultrasonic typically provides stronger, more consistent seals through contaminants.</li>
            <li><strong>Energy Efficiency:</strong> Ultrasonic sealing is generally more energy-efficient as it doesn't require constant heat maintenance.</li>
            <li><strong>Tooling Lifespan:</strong> Heat sealing jaws often require more frequent replacement or teflon tape maintenance.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default UltrasonicVsHeatSealing;
