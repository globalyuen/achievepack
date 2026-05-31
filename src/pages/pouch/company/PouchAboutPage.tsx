import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Building2, Target, Heart, Users, Award, Leaf } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'
import { Link } from 'react-router-dom'

export default function PouchAboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const title = "About Pouch.eco - Startup-Friendly Sustainable Packaging Partner | Pouch.eco"
  const description = "Learn about Pouch.eco. Since 2011, we have helped 500+ food and retail brands switch to certified compostable and recyclable custom stand-up pouches."

  const faqs = [
    {
      q: "Where is Pouch.eco based and where do you manufacture?",
      a: "Pouch.eco is headquartered in Hong Kong, with our direct manufacturing facilities located in specialized industrial printing zones. This allows us to deliver strict quality oversight, Grade A BRCGS food safety compliance, and direct factory pricing."
    },
    {
      q: "What is your history and experience?",
      a: "We have been engineering sustainable flexible packaging since 2011 (under our enterprise brand Achieve Pack). Pouch.eco was launched specifically to empower startup and growing brands with the same advanced bio-barrier materials, but at startup-friendly low minimums starting from 500 units."
    },
    {
      q: "Are all your materials fully certified?",
      a: "Absolutely. Purity is backed by science. All our compostable pouches carry verified TUV Austria OK Compost HOME and BPI (ASTM D6400) certifications. Our recyclable PE structures carry curbside #4 resin compliance, and all packaging is produced in food-safe BRCGS Grade A facilities."
    },
    {
      q: "Can you accommodate custom product shapes?",
      a: "Yes. Our engineering department provides fully customized sizing, CAD dieline blueprints, and material co-extrusions tailored to your exact roasted beans, organic snacks, or bath salt volumes."
    }
  ]

  return (
    <PouchLayout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="about pouch.eco, about achieve pack, sustainable packaging company, eco-friendly packaging supplier, custom packaging startup, BRCGS packaging manufacturer" />
        <link rel="canonical" href="https://pouch.eco/company/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-neutral-50 text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb Bar */}
          <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs font-black uppercase text-black mb-8">
            <Link to="/" className="hover:bg-[#D4FF00] px-1 py-0.5 border border-black transition">Home</Link>
            <span>/</span>
            <span className="bg-[#10b981] text-white px-1.5 py-0.5 border border-black">About Our Mission</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <NeoBadge color="lime">OUR_STORY_EST_2011</NeoBadge>
              
              <h1 className="font-black text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Beautiful.<br/>
                Sustainable.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#FF00FF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Proven.</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                &gt; Factory-direct eco-pioneers.<br/>
                &gt; Empowering startups since 2011.<br/>
                &gt; 500+ global brands scaled.<br/>
                &gt; Certified zero-waste pathway.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="/products" variant="primary">
                  Explore Eco Solutions
                </NeoButton>
                <NeoButton variant="secondary" href="#team">
                  Meet Our Engineers
                </NeoButton>
              </div>
            </div>

            {/* Mission Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-400 translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/seo-photos/a_about_sustainability_mission_5914909.webp" 
                alt="Pouch.eco Sustainability Mission and Production Excellence" 
                className="relative z-10 border-4 border-black w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto text-left">
        <div className="mb-16">
          <NeoBadge color="magenta">GUIDING_PILLARS</NeoBadge>
          <h2 className="font-black text-4xl md:text-6xl uppercase mt-4">Our Core Values</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <NeoCard color="bg-white">
            <Leaf className="w-12 h-12 mb-4 text-[#10b981]" />
            <h3 className="font-black text-3xl mb-4 uppercase">Sustainability</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              We reject greenwashing. Every layer we print is backed by rigorous TUV and BPI composting certifications or GRS recycling audits.
            </p>
            <NeoBadge color="bg-[#10b981] text-white">100%_VERIFIED</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#FF00FF]" className="text-white">
            <Award className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-black text-3xl mb-4 uppercase text-white">BRCGS Food Safety</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6 text-white">
              Sustainably-sourced cardboard and solvent-free polymer laminates processed strictly inside Grade A certified clean facility rooms.
            </p>
            <NeoBadge color="bg-[#D4FF00]">GRADE_A_COMPLIANCE</NeoBadge>
          </NeoCard>

          <NeoCard color="bg-[#D4FF00]">
            <Users className="w-12 h-12 mb-4 text-black" />
            <h3 className="font-black text-3xl mb-4 uppercase">Startup Ally</h3>
            <p className="font-['JetBrains_Mono'] text-sm leading-relaxed mb-6">
              Empowering startup brands to scale with ultra-low MOQs starting at 500 units, multi-SKU splits, and zero plate cylinder setup fees.
            </p>
            <NeoBadge color="bg-white">MOQ_DEMOCRATIZATION</NeoBadge>
          </NeoCard>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="py-24 bg-black text-white border-y-4 border-black text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <NeoBadge color="lime">THE_BIO_ENGINEERS</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 text-white">Meet Our Experts</h2>
            </div>
            <span className="font-['JetBrains_Mono'] text-sm font-bold bg-[#D4FF00] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              EEAT_CERTIFIED_TEAM
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Ryan Wong - Packaging Specialist.png" 
                alt="Ryan Wong - Sustainable Packaging Specialist" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">Ryan Wong</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">Lead Packaging Specialist</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                Expert in bio-polymer barrier engineering and custom VFFS machinery dieline calibrations.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Eric Kwok - Business Development.png" 
                alt="Eric Kwok - Business Development Specialist" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">Eric Kwok</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">Business Development Specialist</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                Helping startup brands navigate international packaging import channels and supply logistics.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-black text-center">
              <ClickableImage 
                src="/imgs/team/Jericha Kwok - Business Development.png" 
                alt="Jericha Kwok - Business Development Specialist" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#10b981]"
              />
              <h4 className="font-black text-2xl uppercase">Jericha Kwok</h4>
              <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#10b981] mt-1">Business Development Specialist</p>
              <p className="font-['JetBrains_Mono'] text-xs text-neutral-500 mt-4 leading-relaxed">
                Dedicated to scaling brand presences across North American and European retail shelves with ESG metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stateful Accordion FAQs */}
      <section className="py-24 bg-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <NeoBadge color="magenta">ABOUT_US_FAQ</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-6">
              Expert Company FAQ
            </h2>
            <p className="font-['JetBrains_Mono'] text-sm text-neutral-600 mt-2">
              Learn about our factory operations, company history, and eco values.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <button
                  className="w-full text-left p-6 font-black text-lg md:text-xl uppercase flex justify-between items-center"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-black text-white flex items-center justify-center text-xs font-['JetBrains_Mono']">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-2xl font-black">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                
                {openFaqIndex === idx && (
                  <div className="p-6 border-t-4 border-black bg-neutral-50 font-['JetBrains_Mono'] text-sm text-neutral-700 leading-relaxed text-left pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#D4FF00] border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="bg-black text-white">EXPLORE_MORE</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Explore Virtual Factory
          </h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl text-black">
            Take a 3D virtual tour of our solvent-free lamination and high-speed bag-making lines.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NeoButton href="/company/factory-tour" variant="dark">
              Launch Virtual Factory Tour
            </NeoButton>
            <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy" variant="secondary" className="!bg-white !text-black border-black border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Consult Packaging Engineer
            </NeoButton>
          </div>

          <div className="pt-8 border-t border-black/20 text-xs font-['JetBrains_Mono'] text-black/70 max-w-xl mx-auto leading-relaxed">
            <strong>Seeking high-volume B2B wholesale corporate partnerships?</strong><br/>
            For global retail distribution volumes, corporate supply chain integration, and large contract quotes, visit our wholesale portal:{" "}
            <a 
              href="https://achievepack.com/company/about" 
              className="underline font-bold hover:text-black transition"
              target="_blank" 
              rel="noopener noreferrer"
            >
              achievepack.com/company/about →
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
