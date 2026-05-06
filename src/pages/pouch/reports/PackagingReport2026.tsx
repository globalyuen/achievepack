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
              <NeoCard className="p-0 overflow-hidden transform rotate-2 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] border-4">
                <img 
                  src="/imgs/reports/report_2026_header.png" 
                  alt="The State of Sustainable Packaging 2026" 
                  className="w-full h-auto"
                />
              </NeoCard>
              <div className="absolute -top-6 -right-6">
                <NeoCard color="bg-[#D4FF00]" className="p-4 transform -rotate-6">
                  <p className="font-black text-2xl uppercase">FREE</p>
                  <p className="text-xs font-bold">Limited To 10</p>
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

          {/* Key Findings Section - Visual & Informative */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <NeoBadge color="lime" className="mb-4">Data Deep Dive</NeoBadge>
              <h2 className="text-4xl md:text-6xl font-black uppercase">Major 2026 Findings</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <NeoBadge className="mb-4">Finding #1</NeoBadge>
                <h3 className="text-3xl font-black uppercase mb-6">The Compostable S-Curve</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Our analysis shows a massive acceleration in compostable material adoption. By mid-2026, 92% of new DTC brands in the snacks and coffee sectors have transitioned to certified home-compostable structures.
                </p>
                <NeoCard color="bg-neutral-50" className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#D4FF00] p-2 border-2 border-black">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black uppercase text-sm mb-1">Key Insight</p>
                      <p className="text-sm font-bold text-neutral-600 italic">"Brands switching to compostable pouches saw a 22% increase in customer retention within the first 6 months."</p>
                    </div>
                  </div>
                </NeoCard>
              </motion.div>
              <NeoCard className="p-0 overflow-hidden shadow-[20px_20px_0px_0px_rgba(212,255,0,1)]">
                <img src="/imgs/reports/compostable_trends_chart_2026.png" alt="Compostable Trends Chart" className="w-full h-auto" />
              </NeoCard>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <NeoCard className="p-0 overflow-hidden order-2 lg:order-1 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <img src="/imgs/reports/consumer_trust_factors_2026.png" alt="Consumer Trust Factors" className="w-full h-auto" />
              </NeoCard>
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <NeoBadge className="mb-4">Finding #2</NeoBadge>
                <h3 className="text-3xl font-black uppercase mb-6">The Trust Equation</h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Vague "eco-friendly" claims no longer convert. Consumers are now looking for three specific signals before clicking 'Buy': Verified Transparency, Audited Certifications, and proven Durability.
                </p>
                <div className="space-y-4">
                  {[
                    "Transparency: 78% of users want to see the supply chain source.",
                    "Certification: BPI and OK Compost logos increase CVR by 12%.",
                    "Durability: Barrier performance remains the #1 reason for returns."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Expert Commentary Section */}
          <div className="mb-32 bg-black text-white p-12 md:p-20 relative overflow-hidden">
             <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <Star className="w-12 h-12 text-[#D4FF00] mb-8" />
                  <h2 className="text-4xl font-black uppercase mb-8 leading-tight">
                    "This report is a wake-up call for legacy packaging providers."
                  </h2>
                  <p className="text-xl text-neutral-400 mb-8 italic">
                    "We've moved beyond the era of 'green-washing'. Brands that don't adapt to the data-backed structures outlined in this report will be left behind by a more conscious consumer base."
                  </p>
                  <div className="flex items-center gap-4">
                    <img src="/imgs/emails/ryan_headshot_v2.png" className="w-16 h-16 rounded-full border-2 border-[#D4FF00]" alt="Ryan" />
                    <div>
                      <p className="font-black uppercase">Ryan Wong</p>
                      <p className="text-xs font-bold text-neutral-500">Founder, Achieve Pack</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <NeoCard color="bg-neutral-800" className="border-[#D4FF00] rotate-3">
                    <p className="text-xs font-black uppercase text-[#D4FF00] mb-4">Report Highlight</p>
                    <p className="text-lg font-bold text-white mb-6 leading-snug">The cost parity between standard PE and compostable films will be reached by Q3 2026.</p>
                    <NeoBadge color="bg-[#D4FF00]" className="text-black text-[10px]">Pouch.eco Exclusive</NeoBadge>
                  </NeoCard>
                </div>
             </div>
          </div>

          {/* Final CTA */}
          <NeoCard color="bg-[#D4FF00]" className="text-center p-12 relative overflow-hidden border-8">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">Download the Full PDF</h2>
              <p className="text-xl font-bold mb-10 max-w-2xl mx-auto text-black/80">
                Get access to all 124 pages of data, material comparisons, and the 2026 supply chain roadmap.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <NeoButton variant="dark" className="px-12 py-6 text-xl flex items-center justify-center gap-3">
                  <Download className="w-6 h-6" /> Get Full Report (Free)
                </NeoButton>
                <NeoButton variant="secondary" className="px-12 py-6 text-xl" to="/workshop-register">
                  Workshop (Limited to 10)
                </NeoButton>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-black translate-x-16 -translate-y-16 rotate-45" />
          </NeoCard>
        </div>
      </div>
    </PouchLayout>
  );
};

export default PackagingReport2026;
