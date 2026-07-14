import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function TopicDirectoryPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white px-4">
      <Helmet>
        <title>Packaging Topics Directory | Achieve Pack</title>
        <meta name="description" content="Explore our comprehensive directory of packaging topics, solutions, and guides." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary-400">Packaging Topics Directory</h1>
        <p className="text-neutral-400 text-lg mb-12">
          Explore our comprehensive library of packaging solutions, material guides, and industry-specific applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
             <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
             <ul className="space-y-2 text-neutral-400">
                <li><Link to="/topics/matcha-sachet" className="hover:text-primary-400 transition-colors">Matcha Sachet Packaging</Link></li>
                <li><Link to="/topics/cacao-stand-up" className="hover:text-primary-400 transition-colors">Cacao Stand Up Pouches</Link></li>
                <li><Link to="/topics/premium-tea" className="hover:text-primary-400 transition-colors">Premium Tea Packaging</Link></li>
                <li><Link to="/topics/pet-food-flat-bottom-bag" className="hover:text-primary-400 transition-colors">Pet Food Flat Bottom Bags</Link></li>
                <li><Link to="/topics/snack-food-stand-up-pouch" className="hover:text-primary-400 transition-colors">Snack Food Stand-Up Pouches</Link></li>
             </ul>
           </div>
           
           <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
             <h2 className="text-xl font-bold text-white mb-4">Compliance & Coding</h2>
             <ul className="space-y-2 text-neutral-400">
                <li><Link to="/solutions/food-coding-compliance" className="hover:text-primary-400 transition-colors">Food Coding Compliance</Link></li>
                <li><Link to="/solutions/packaging-line-automation" className="hover:text-primary-400 transition-colors">Packaging Line Automation</Link></li>
                <li><Link to="/solutions/eco-packaging-coding" className="hover:text-primary-400 transition-colors">Eco Packaging Coding</Link></li>
             </ul>
           </div>

           <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800">
             <h2 className="text-xl font-bold text-white mb-4">Sustainability & Materials</h2>
             <ul className="space-y-2 text-neutral-400">
                <li><Link to="/composting/composting-benefits" className="hover:text-primary-400 transition-colors">Composting Benefits</Link></li>
                <li><Link to="/recyclable/what-is-recyclable" className="hover:text-primary-400 transition-colors">What Is 100% Recyclable?</Link></li>
                <li><Link to="/pcr/7-checklist" className="hover:text-primary-400 transition-colors">PCR 7-Point Checklist</Link></li>
                <li><Link to="/topics/eu-ppwr-compliance" className="hover:text-primary-400 transition-colors">EU PPWR Compliance</Link></li>
             </ul>
           </div>
        </div>
        
        <div className="mt-12 p-6 bg-primary-900/20 border border-primary-500/30 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Can't find what you're looking for?</h3>
            <p className="text-neutral-400 mb-6">Our packaging experts are ready to help you find the perfect solution.</p>
            <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors">
              Book a Free Consultation
            </a>
        </div>
      </div>
    </div>
  );
}