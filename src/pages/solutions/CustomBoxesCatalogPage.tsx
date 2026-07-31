import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, HelpCircle, Box, Shield, Zap, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import ClickableImage from '../../components/ClickableImage';

export default function CustomBoxesCatalogPage() {
  const boxModels = [
    { id: '6', name: 'Reverse Tuck End Box (反向插锁盒)', desc: 'Standard folding carton for cosmetics and pharmaceuticals.' },
    { id: '1817', name: 'Premium Flip-open Gift Box (翻盖礼盒)', desc: 'Rigid luxury grayboard structure for high-end gifting.' },
  ];

  return (
    <>
      <Helmet>
        <title>Custom Paper Boxes Sourcing Guide | Premium Packaging Solutions | AchievePack</title>
        <meta name="description" content="Explore our catalog of custom folding cartons, corrugated mailers, and luxury rigid boxes. Low 200 MOQ, FSC certified sustainable cardboard, and Pantone matching." />
      </Helmet>

      <SiteHeader />

      <div className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6 lg:px-12 font-sans pt-[100px]">
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Rigid & Folding Paperboard
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-white leading-none">
              Premium Custom Paper Boxes
            </h1>
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Elevate your brand experience with tailor-made corrugated mailers, structural retail cartons, and luxury presentation boxes. Engineered for safety during shipment and flawless visual presentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/solutions/catalog?category=box"
                className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                Browse 300+ Box Shapes
              </Link>
              <Link
                to="/studio"
                className="border border-neutral-700 hover:border-neutral-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
              >
                Launch 3D Studio
              </Link>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <ClickableImage
              src="/assets/images/premium_corrugated_mailer_box.jpg"
              alt="Premium Corrugated Mailer Box Mockup"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Box Structures Classification */}
        <div className="max-w-7xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            Engineered Folding Structures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tuck-End Cartons</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Standard folding box with flaps on top and bottom. Perfect for cosmetics, retail displays, tube packaging, and light-weight products.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto-Bottom Locking</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Pre-glued interlocking base flaps that automatically lock open upon assembly. Best suited for heavy bottles, supplements, and jars.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Luxury Rigid Boxes</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Two-piece lid-and-base or slide-drawer boxes made of 2.0mm high-density grayboard. Designed for premium corporate gifting and VIP packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Model Showcase */}
        <div className="max-w-7xl mx-auto mb-20 bg-neutral-950/40 border border-neutral-800 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Dynamic 3D Box Showcase</h2>
              <p className="text-sm text-neutral-400 mt-1">Select a structural pre-set below to test logo mapping in our live 3D Editor.</p>
            </div>
            <Link
              to="/solutions/catalog?category=box"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm flex items-center gap-1.5 transition-colors"
            >
              See all box designs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boxModels.map((box) => (
              <div key={box.id} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl flex flex-col justify-between hover:border-neutral-700 transition-all group">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded">Model #{box.id}</span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-emerald-400 transition-colors">{box.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">{box.desc}</p>
                </div>
                <Link
                  to={`/app?shape=${box.id}`}
                  className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-emerald-500 text-neutral-300 hover:text-neutral-950 hover:bg-emerald-500 font-bold text-xs py-2.5 px-4 rounded-lg transition-all"
                >
                  Load Model in 3D Studio
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl order-last lg:order-first">
            <ClickableImage
              src="/assets/images/luxury_rigid_box_cosmetics.jpg"
              alt="Luxury Rigid Cosmetics Box Mockup"
              className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Sustainable Cardboard Grades</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">FSC Certified Kraftboard</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Unbleached natural fibers, 100% recyclable, rustic organic texture.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Solid Bleached Sulfate (SBS)</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Premium clay-coated pure white card stock, ideal for bright cosmetics print.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Recycled Fluted Board</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Double-wall E-flute configuration protecting retail items from shipping impacts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting / B2B Sourcing Metrics */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            B2B Procurement QA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">What is the Minimum Order Quantity (MOQ) for custom boxes?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Our MOQ starts at 200 units for standard tuck end folding boxes and mailer boxes, and 500 units for rigid luxury gift boxes.
              </p>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6">
              <h4 className="font-bold text-white text-sm mb-2">Can we get an unprinted structural box prototype?</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Yes! We offer free unprinted CAD card prototypes (digital cutter) in 3-5 business days so you can verify size fittings.
              </p>
            </div>
          </div>
        </div>

      {/* 1:1 Human Packaging Experts & Designers Callout Card */}
        <section className="my-12 bg-primary-950/80 border border-primary-500/40 rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-mono rounded-full uppercase">
              🤝 1:1 Human Expert & Designer Consultation
            </div>
            <h3 className="text-2xl font-bold text-white">
              1:1 Human Packaging Experts & Designers (24/7 All-Rounded Help)
            </h3>
            <p className="text-primary-200/90 text-sm leading-relaxed">
              Work 1-on-1 with dedicated packaging engineers to customize barrier films, optimize dieline structural integrity, and ensure zero plate fee multi-SKU printing for Custom Boxes Catalog.
            </p>
          </div>
          <button onClick={openCalendly} className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition-all">
            Book 1:1 Expert Consultation
          </button>
        </section>

        {/* From the Desk of Ryan Wong E-E-A-T Anecdote Card */}
        <section className="my-12 bg-neutral-900 border-l-4 border-emerald-500 rounded-r-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <img src="/imgs/ryan-wong-avatar.jpg" alt="Ryan Wong" className="w-12 h-12 rounded-full border-2 border-emerald-400 bg-neutral-800" />
            <div>
              <h4 className="font-bold text-white text-lg">From the Engineering Desk of Ryan Wong</h4>
              <p className="text-xs text-emerald-400 font-mono">Co-Founder & Chief Packaging Engineer | Achieve Pack</p>
            </div>
          </div>
          <p className="text-neutral-300 text-sm italic leading-relaxed">
            "When engineering flexible packaging solutions for Custom Boxes Catalog, our priority is eliminating real-world transit failure points—whether preventing chemical delamination in liquid films or protecting crispness against moisture ingress. We rigorously test every material combination so roasters and brand owners get 100% reliable shelf performance."
          </p>
        </section>

        </div>

      <Footer />
    </>
  );
}


