import React from 'react';

const TamperEvidentSealingStandards: React.FC = () => {
  return (
    <div className="topic-page p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tamper Evident Sealing Standards in Modern Packaging</h1>
          <p className="text-xl text-gray-600">Ensuring product security, authenticity, and consumer trust through advanced sealing technologies.</p>
        </header>

        {/* Empathy Hook */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-2">The High Cost of Compromised Integrity</h2>
          <p className="text-blue-800">
            For B2B manufacturers and distributors, a broken seal isn't just a lost product—it's a breach of trust. When a product arrives at its destination with questionable integrity, it sparks concerns of contamination, counterfeiting, or tampering. Implementing robust, industry-compliant tamper-evident sealing standards is your first line of defense in protecting your brand's reputation and ensuring compliance across the supply chain.
          </p>
        </section>

        <section className="mb-12">
          <img 
            src="/imgs/topics/tamper-evident-sealing-standards/hero_tamper_evident_sealing_standards.png" 
            alt="Tamper Evident Sealing Hero"
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Process & Automation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Achieving a reliable tamper-evident seal requires precision engineering and automated consistency. On modern production lines, ultrasonic sealing, heat induction, and cohesive cold sealing are rigorously monitored to meet FDA and ISO standards.
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li className="mb-2"><strong>Heat Induction:</strong> Ideal for rigid containers and composite films, ensuring hermetic sealing.</li>
                <li className="mb-2"><strong>Ultrasonic Welding:</strong> Creates a clean, fast seal without external heat, perfect for sensitive products.</li>
                <li className="mb-2"><strong>Laser Scoring & Tear Notches:</strong> Facilitate ease of opening while maintaining visual evidence of initial breach.</li>
              </ul>
            </div>
            <div>
              <img 
                src="/imgs/topics/tamper-evident-sealing-standards/process_tamper_evident_sealing_standards.png" 
                alt="Tamper Evident Sealing Process"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Seals vs. Advanced Tamper-Evidence</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/imgs/topics/tamper-evident-sealing-standards/comparison_tamper_evident_sealing_standards.png" 
                alt="Tamper Evident Sealing Comparison"
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gray-700 mb-4">
                Not all seals are created equal. An inferior seal can be bypassed using heat or physical manipulation without leaving a trace, exposing the product to undetected contamination.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Premium Tamper-Evident Seals</strong> feature specialized materials that destruct upon opening. Void films, custom destructible labels, and strategically placed frangible bonds ensure that any unauthorized access is immediately and irreversibly visible. This level of security is non-negotiable for pharmaceuticals, food, and high-value industrial components.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TamperEvidentSealingStandards;
