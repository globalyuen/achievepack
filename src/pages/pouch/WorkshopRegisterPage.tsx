import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Users, Zap, CheckCircle, Clock, MapPin } from 'lucide-react';
import { NeoCard, NeoButton, NeoBadge } from '@/components/pouch/PouchUI';
import PouchLayout from '@/components/pouch/PouchLayout';

const WorkshopRegisterPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PouchLayout>
      <Helmet>
        <title>Register: Live Packaging Workshop May 26 | Achieve Pack</title>
        <meta name="description" content="Register for our live workshop on May 26 to learn how to apply sustainable packaging best practices to your brand." />
      </Helmet>

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <NeoBadge color="bg-[#D4FF00]" className="mb-6">Live Workshop</NeoBadge>
              <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-8">
                The Action <br />
                <span className="bg-black text-white px-2">Powers</span> Results
              </h1>
              <p className="text-xl text-neutral-600 mb-10">
                Join us on May 26 for a live, data-driven workshop. We'll bring the report data to life and help you apply it directly to your unique brand requirements.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: <Calendar />, text: "May 26, 2026 @ 10:00 AM EST" },
                  { icon: <Clock />, text: "90 Minutes of Pure Insight" },
                  { icon: <MapPin />, text: "Live Digital Workshop (Link via Email)" },
                  { icon: <Zap />, text: "Includes Early Access to Transition Planner" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-10 h-10 border-2 border-black flex items-center justify-center bg-[#D4FF00]">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <NeoCard color="bg-neutral-100" className="border-dashed mb-6">
                <h3 className="font-black uppercase mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" /> Who is this for?
                </h3>
                <ul className="space-y-2 font-medium text-neutral-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> DTC Brand Founders</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Sustainability Officers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Product Developers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Supply Chain Managers</li>
                </ul>
              </NeoCard>

              <NeoCard color="bg-white">
                <h3 className="font-black uppercase mb-4">Did you miss the report?</h3>
                <p className="text-sm text-neutral-600 mb-4 font-bold">
                  The insights we'll discuss are based on our flagship "State of Sustainable Packaging 2026" report.
                </p>
                <NeoButton variant="secondary" to="/reports/state-of-packaging-2026" className="w-full">
                  Read the Report
                </NeoButton>
              </NeoCard>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!submitted ? (
                <NeoCard className="p-10">
                  <h2 className="text-3xl font-black uppercase mb-8">Secure Your Spot</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder="Ryan Wong"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">Work Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder="ryan@achievepack.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black uppercase mb-2">Company Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full p-4 border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all font-bold"
                        placeholder="Achieve Pack"
                      />
                    </div>
                    <div className="pt-4">
                      <NeoButton variant="primary" className="w-full py-6 text-xl">
                        Register Now
                      </NeoButton>
                    </div>
                    <p className="text-xs text-center text-neutral-500 font-bold uppercase tracking-widest">
                      Limited to 100 participants per session.
                    </p>
                  </form>
                </NeoCard>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <NeoCard color="bg-[#D4FF00]" className="text-center p-12">
                    <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-full mx-auto mb-8">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black uppercase mb-4">You're Registered!</h2>
                    <p className="text-xl font-bold mb-8">
                      We've sent a confirmation email with the workshop details and your transition planner. See you on May 26!
                    </p>
                    <NeoButton variant="dark" to="/">
                      Back to Home
                    </NeoButton>
                  </NeoCard>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </PouchLayout>
  );
};

export default WorkshopRegisterPage;
