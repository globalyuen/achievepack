import React from 'react';

const UrgentOrders: React.FC = () => {
  return (
    <div className="urgent-orders-container b2b-topic-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Need Packaging Yesterday? We Understand the Urgency.</h1>
          <p className="empathy-hook">
            Missed deadlines can cost you key retail placements and consumer trust. When supply chain disruptions or unexpected demand spikes occur, waiting 12 weeks for packaging is not an option. We fast-track your B2B packaging needs without compromising on quality or compliance.
          </p>
          <img 
            src="/imgs/topics/urgent-orders/hero_urgent_orders.webp" 
            alt="Rapid Processing of B2B Urgent Orders" 
            className="hero-image"
          />
        </div>
      </header>

      <section className="process-section">
        <h2>Our Fast-Track Manufacturing Process</h2>
        <p>
          Our streamlined manufacturing pipeline is designed for speed. From expedited prepress approval to priority production queuing, every step is optimized to get your products to market faster.
        </p>
        <img 
          src="/imgs/topics/urgent-orders/process_urgent_orders.webp" 
          alt="High-Speed Packaging Manufacturing Process" 
          className="process-image"
        />
      </section>

      <section className="comparison-section">
        <h2>Why Settle for Delays?</h2>
        <p>
          See the difference between our optimized urgent order pipeline and standard industry timelines that leave your products sitting in limbo.
        </p>
        <img 
          src="/imgs/topics/urgent-orders/comparison_urgent_orders.webp" 
          alt="Comparison: Optimized Pipeline vs Delayed Alternatives" 
          className="comparison-image"
        />
      </section>
    </div>
  );
};

export default UrgentOrders;
