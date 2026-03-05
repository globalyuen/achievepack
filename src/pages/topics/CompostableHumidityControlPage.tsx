import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SEOPageHeader } from '../../components/SEOPageLayout';
import Footer from '../../components/Footer';

const CompostableHumidityControlPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Protect Cellulose Compost Bags from Dryness | Achieve Pack</title>
        <meta name="description" content="Professional humidity control for cellulose compost bags. Stop your compostable packaging from becoming brittle and cracking during transport due to dryness." />
        <link rel="canonical" href="https://www.pouch.eco/topics/compostable-humidity-control" />
      </Helmet>

      <SEOPageHeader />
      
      <div className="pt-14">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 to-emerald-800 text-white min-h-[90vh] flex items-center pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-100 border border-emerald-400/30 text-sm font-semibold tracking-wider mb-6">
                HUMIDITY CONTROL SOLUTIONS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Protect Your Cellulose Compost Bags<br />
                <span className="text-emerald-400">From Becoming Brittle Due to Dryness</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Professional humidity control for cellulose compost bags – reduce transport damage by 70%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact-form"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                >
                  Get Your Test Plan Now
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/imgs/samples/brittle-vs-strong-compost.jpg" 
                alt="Dry brittle compost bag vs strong humidity controlled compost bag" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100 flex items-center gap-4">
                <i className="fas fa-tint text-4xl text-blue-500"></i>
                <div>
                  <div className="text-sm text-gray-500 font-bold">OPTIMAL MOISTURE</div>
                  <div className="text-2xl font-black text-gray-900">55-65<span className="text-lg">% RH</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Background */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Do Cellulose Compost Bags Crack and Break?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-stretch bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="w-full md:w-1/2">
              <img 
                src="/imgs/samples/cracked-pouch.png" 
                alt="Cracked compostable packaging" 
                className="w-full h-full rounded-xl shadow-md border border-gray-100 object-contain bg-gray-50"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cellulose compost bags are the ultimate eco-friendly choice, but they have one critical weakness:<br/><br/>
                <strong className="text-red-600">When the environment is too dry, the moisture content drops sharply → They become extremely brittle, cracking and breaking with even the slightest impact.</strong>
              </p>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-ship text-blue-500 mt-1 mr-3 text-lg"></i>
                  <span>
                    <strong>Ocean Freight Risks:</strong> Large temperature fluctuations inside ocean containers often drop the internal humidity below 30% RH, embrittling the packaging within days.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-exclamation-triangle text-amber-500 mt-1 mr-3 text-lg"></i>
                  <span>
                    <strong>The Consequences:</strong> Customers receive damaged goods and spilled products, directly leading to returns, compensation claims, and brand damage.
                  </span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="fas fa-chart-line text-emerald-500"></i> Key Data
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Optimal moisture content for cellulose: Around <strong>8–12%</strong> (too low = brittle, too high = mold).</li>
                  <li>⚠️ In a dry environment (&lt;40% RH), packaging strength drops by over 50% within <strong>48 hours</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions: 3 Levels of Humidity Control
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We offer different humidity control solutions to ensure your compostable bags retain optimal flexibility upon arrival at the warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative border border-gray-100">
                <img src="/imgs/samples/humidity_pack_pro.png" alt="Professional 2-Way Packs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 text-blue-500 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                  <i className="fas fa-shield-alt"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Professional 2-Way Packs</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Professional 2-Way Control Packs</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Precisely maintains 58% or 62% RH.<br/>Utilizes imported Boveda-grade 2-way humidity control packs.
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-bolt text-amber-400 w-4"></i> Active: Stable within 24-48 hours</li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-dollar-sign text-green-500 w-4"></i> Cost: Medium-High (USD $0.5 - $1.5 / pack)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-blue-500 w-4"></i> Best For: High value orders</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-500 relative flex flex-col items-center text-center group transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative border border-emerald-100">
                <img src="/imgs/samples/humidity_pack_eco.png" alt="Economical 2-Way Moisture Packs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 text-emerald-500 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm">
                  <i className="fas fa-box-open"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Economical 2-Way Packs</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">Economical 2-Way Moisture Packs</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Direct from our factory, offering similar 2-way moisture control capability at a fraction of the cost.
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <li className="flex items-center gap-2 border-b border-emerald-100 pb-2"><i className="fas fa-box text-emerald-600 w-4"></i> Pack: Included directly in the shipping carton</li>
                <li className="flex items-center gap-2 border-b border-emerald-100 pb-2"><i className="fas fa-dollar-sign text-emerald-600 w-4"></i> Cost: Very Low (USD $0.1 - $0.3 / pack)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-emerald-600 w-4"></i> Best For: Over 90% of standard ocean freights</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center text-center group">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 relative border border-gray-100">
                <img src="/imgs/samples/humidity_pack_diy.png" alt="DIY Low-Cost Humidification" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 text-gray-600 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm">
                  <i className="fas fa-hands-helping"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. DIY Low-Cost Approach</h3>
              <p className="text-sm text-gray-500 mb-4 font-semibold uppercase tracking-wide">DIY Low-Cost Humidification</p>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Place a sealed wet towel or sponge in a double-layer PE bag to slowly release moisture.
              </p>
              
              <ul className="text-sm text-left w-full space-y-2 mb-8 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-sync text-blue-400 w-4"></i> Monitor: Hydrometer required for testing</li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2"><i className="fas fa-dollar-sign text-green-500 w-4"></i> Cost: Almost Free (USD &lt;$0.2 / box)</li>
                <li className="flex items-center gap-2 font-bold text-gray-900"><i className="fas fa-check-circle text-gray-600 w-4"></i> Best For: Testing phase or low budget orders</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-base font-medium rounded-full text-emerald-600 bg-white hover:bg-emerald-50 transition-colors shadow-sm">
              聯繫我們討論最適合的方案 / Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* 4. Operation Steps */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Standard Operating Procedure: 6 Steps Execution
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">1</div>
              <h3 className="text-xl font-bold mb-2">Confirm Target RH</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Set target to 55-65% RH for cellulose bags. We will adjust based on your specific product.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">2</div>
              <h3 className="text-xl font-bold mb-2">Select Solution</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Choose between professional, economical, or DIY packs based on our expert consultation.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">3</div>
              <h3 className="text-xl font-bold mb-2">Inner Bag Barrier</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Place pouches & humidity packs inside a sealed food-grade PE bag to isolate them from the carton.</p>
            </div>
            {/* Step 4 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-emerald-500/20">4</div>
              <h3 className="text-xl font-bold mb-2">Pack into Cartons</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Place the sealed inner bag (with products and humidity packs) into standard corrugated cartons.</p>
            </div>
            {/* Step 5 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-amber-500/20">5</div>
              <h3 className="text-xl font-bold mb-2 pr-2">Test & Monitor</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Record data using mini hygrometers in testing boxes for 24/48/72 hours to ensure stability.</p>
            </div>
            {/* Step 6 */}
            <div className="bg-emerald-800/50 p-6 rounded-2xl border border-emerald-700 hover:bg-emerald-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-xl font-black mb-4 shadow-lg shadow-blue-500/20">6</div>
              <h3 className="text-xl font-bold mb-2">Mass Production Ship</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">Once successfully verified, we standardize the process for mass shipping. Say goodbye to brittleness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Case Study (Mexico Ocean Freight)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {/* Before */}
            <div className="bg-white p-10 border-r border-gray-100 flex flex-col items-center">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center text-2xl mb-6">
                <i className="fas fa-times"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Before</h3>
              <p className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">No Humidity Control</p>
              
              <ul className="w-full space-y-4">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Ship RH</span>
                  <span className="font-bold text-red-600">35%</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">Damage Rate</span>
                  <span className="font-bold text-red-600">25%</span>
                </li>
                <li className="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                  <span className="text-xs text-gray-500 font-bold mb-1">Feedback</span>
                  <span className="text-sm text-gray-800 italic">"The packaging is too brittle, cracking open with a light pinch, spilling the product all over the carton."</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-emerald-50 p-10 flex flex-col items-center relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg z-10">
                <i className="fas fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 z-10">After</h3>
              <p className="text-emerald-700 uppercase text-xs font-bold tracking-widest mb-6 z-10">Economical 2-Way Packs</p>
              
              <ul className="w-full space-y-4 z-10">
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">Ship RH</span>
                  <span className="font-bold text-emerald-600 text-lg">58%</span>
                </li>
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">Received RH</span>
                  <span className="font-bold text-emerald-600 text-lg">56%</span>
                </li>
                <li className="flex justify-between border-b border-emerald-200/50 pb-2">
                  <span className="text-gray-700">Damage Rate</span>
                  <span className="font-bold text-emerald-600 text-lg">Dropped to 2%</span>
                </li>
                <li className="flex flex-col bg-white/70 p-4 rounded-lg mt-4 border border-emerald-100">
                  <span className="text-xs text-emerald-600 font-bold mb-1">Feedback</span>
                  <span className="text-sm text-gray-800 italic">"The packaging flexibility is perfect, fragility issues completely resolved. 95% satisfaction!"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Special Tips */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-r-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-lightbulb text-yellow-500"></i>
              Expert Tips for Cellulose Compost Bags
            </h3>
            
            <ul className="space-y-4 list-none text-gray-700">
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Target RH:</strong> Recommended to maintain between 55-65% (just enough to avoid brittleness, but not enough to risk mold).</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Quantity per Box:</strong> For a standard 10kg carton, we recommend placing 1-2 pieces of 60g humidity control packs.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Inner Bag:</strong> Always use food-grade PE bags to wrap your products to prevent the dry corrugated cartons from absorbing all the moisture.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Monitoring Tools:</strong> We highly recommend tossing an affordable mini hygrometer (USD 2-5) into the boxes to log the actual conditions.</div>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                <div><strong>Shipping Watchout:</strong> When palletizing, avoid having the top cartons touch the container ceiling to prevent "container rain" caused by temperature shifts from dripping and soaking the boxes.</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q: Why do my cellulose compost bags become brittle and crack so easily?</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A:</strong> Cellulose is a natural material that relies heavily on moisture to maintain its structural flexibility. When its internal moisture content drops below 6%, the material strength plunges. In dry warehouses or ocean freight containers, it can be drained of moisture in just 48 hours, causing significant embrittlement.</p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q: Will your humidity packs get the cartons or products wet, causing mold?</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A:</strong> Absolutely not. Our humidity packs distribute moisture via vapor transition, locking liquid water inside a polymer matrix. With the sealed PE inner bag, the carton will remain unaffected.</p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q: How can our overseas clients (like Mexico) implement this setup?</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A:</strong> We provide a complete Standard Operating Procedure (SOP), which includes bilingual visual manuals, short instructional videos, and test logging sheets to ensure overseas staff can follow along easily.</p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Q: If I implement this solution, how much cost will be added per box?</h4>
              <p className="text-gray-600 leading-relaxed"><strong>A:</strong> Very affordable! With our recommended "Economical 2-Way Pack," the cost increase per box is less than USD $0.3. The "DIY Approach" is even under USD $0.1. Compared to the massive losses from claims and returns, this is an incredibly worthwhile investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-br from-green-900 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stop Cellulose Compost Bags from Becoming Brittle – Start Today
          </h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
            Fill out the form below, and our packaging engineers will quickly analyze and provide a customized humidity control test plan for you.
          </p>
          
          <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-left max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. Acme Corp" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="email@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Package Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 bg-white">
                  <option value="">Please Select</option>
                  <option value="cellulose">Cellulose Compostable</option>
                  <option value="pla">PLA Compostable</option>
                  <option value="kraft">Kraft Paper Bags</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Volume</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. 50,000 pcs" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Destination</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900" placeholder="e.g. USA, Mexico" />
              </div>
            </div>
            
            <button type="button" onClick={()=>{alert('Thank you for inquiry! We will contact you shortly.')}} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Get Customized Solution Now <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">We respect your privacy. All information is kept confidential.</p>
          </form>
        </div>
      </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CompostableHumidityControlPage;
