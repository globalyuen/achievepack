import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, BarChart3, Globe, Zap, Users, Star } from 'lucide-react';
import { NeoCard, NeoButton, NeoBadge } from '@/components/pouch/PouchUI';
import PouchLayout from '@/components/pouch/PouchLayout';

const PackagingReport2026 = () => {
  return (
    <PouchLayout>
      <Helmet>
        <title>The State of Sustainable Packaging 2026 | Achieve Pack Report</title>
        <meta name="description" content="Download our 2026 flagship report on sustainable packaging trends, material innovations, and consumer behavior analysis." />
      </Helmet>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NeoBadge className="mb-6">Industry Flagship Report</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                The State of <br />
                <span className="bg-[#D4FF00] px-2">Sustainable</span> <br />
                Packaging 2026
              </h1>
              <p className="text-xl text-neutral-600 mb-10 max-w-xl">
                We analyzed 5,000+ packaging projects and 31 million consumer touchpoints to synthesize the definitive guide for brands switching to eco-friendly solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton variant="primary" className="text-lg px-10">
                  Download Full Report
                </NeoButton>
                <NeoButton variant="secondary" className="text-lg px-10" to="/workshop-register">
                  Register for Workshop
                </NeoButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <NeoCard className="p-0 overflow-hidden transform rotate-2">
                <img 
                  src="https://achievepack.com/imgs/emails/outreach_header_2026.png" 
                  alt="Report Cover" 
                  className="w-full h-auto"
                />
              </NeoCard>
              <div className="absolute -top-6 -right-6">
                <NeoCard color="bg-[#D4FF00]" className="p-4 transform -rotate-6">
                  <p className="font-black text-2xl uppercase">FREE</p>
                  <p className="text-xs font-bold">Limited Time</p>
                </NeoCard>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {[
              { label: 'Emails Analyzed', value: '31M+', icon: <Users /> },
              { label: 'Projects Audited', value: '5,000+', icon: <CheckCircle /> },
              { label: 'Material Types', value: '42', icon: <Zap /> },
              { label: 'Global Reach', value: '127', icon: <Globe /> },
            ].map((stat, i) => (
              <NeoCard key={i} className="text-center">
                <div className="w-12 h-12 bg-[#D4FF00] border-2 border-black flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
              </NeoCard>
            ))}
          </div>

          {/* Key Findings */}
          <div className="mb-24">
            <h2 className="text-4xl font-black uppercase mb-12 text-center">Inside the Report</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <NeoCard>
                <NeoBadge color="bg-blue-100" className="mb-4">Market Trends</NeoBadge>
                <h3 className="text-xl font-black mb-4">The Compostable Shift</h3>
                <p className="text-neutral-600 mb-6">
                  Why 15% more brands are moving to compostable materials in 2026 and which specific industries are seeing the highest ROI.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-green-600" /> Sector Analysis</li>
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-green-600" /> Cost-Benefit Data</li>
                </ul>
              </NeoCard>

              <NeoCard color="bg-neutral-900" className="text-white">
                <NeoBadge color="bg-[#D4FF00]" className="text-black mb-4">Consumer Psychology</NeoBadge>
                <h3 className="text-xl font-black mb-4 text-[#D4FF00]">The Trust Equation</h3>
                <p className="text-neutral-400 mb-6">
                  "Eco-friendly" is no longer enough. We define the 3 metrics that actually drive consumer trust and repeat purchases.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-[#D4FF00]" /> Labeling Best Practices</li>
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-[#D4FF00]" /> Visual Design Guide</li>
                </ul>
              </NeoCard>

              <NeoCard>
                <NeoBadge color="bg-orange-100" className="mb-4">Supply Chain</NeoBadge>
                <h3 className="text-xl font-black mb-4">Pricing vs. Volume</h3>
                <p className="text-neutral-600 mb-6">
                  The psychological price ceiling for sustainable packaging. How to price your products without losing sales volume.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-green-600" /> Volume Elasticity</li>
                  <li className="flex items-center gap-2 text-sm font-bold"><CheckCircle className="w-4 h-4 text-green-600" /> Procurement Savings</li>
                </ul>
              </NeoCard>
            </div>
          </div>

          {/* Final CTA */}
          <NeoCard color="bg-[#D4FF00]" className="text-center p-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">Ready to scale your sustainability?</h2>
            <p className="text-xl font-bold mb-10 max-w-2xl mx-auto">
              Get the data-driven insights you need to win in 2026. Join 10,000+ brand owners who have already downloaded the report.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <NeoButton variant="dark" className="px-12 py-6 text-xl">
                Get Instant Access
              </NeoButton>
              <NeoButton variant="secondary" className="px-12 py-6 text-xl" to="/workshop-register">
                Register for Workshop
              </NeoButton>
            </div>
          </NeoCard>
        </div>
      </div>
    </PouchLayout>
  );
};

export default PackagingReport2026;
