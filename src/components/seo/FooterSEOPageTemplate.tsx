import React from 'react'
import SEOPageLayout from '../SEOPageLayout'
import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getDomain } from '../../utils/domain'

export interface FooterSEOPageProps {
  pageTitle: string
  pageDescription: string
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  primaryKeyword: string
  secondaryKeywords: string[]
  overviewTitle: string
  overviewContent: string
  painPoints: { issue: string; impact: string; solution: string }[]
  benefits: { title: string; description: string }[]
  technicalSpecs: {
    materialLayers: string[]
    printingOptions: string[]
    sustainability: string[]
  }
  engineeringNotebook: {
    title: string
    author: string
    date: string
    content: string
    keyTakeaway: string
  }
  faqs: { question: string; answer: string }[]
  targetUrl: string
  language?: string
  schemaType?: 'Article' | 'Product' | 'FAQPage' | 'WebPage' | 'Service'
}

const FooterSEOPageTemplate: React.FC<FooterSEOPageProps> = (props) => {
  const isPouch = getDomain() === 'pouch'

  // Brand colors
  const primaryBg = isPouch ? 'bg-[#D4FF00]' : 'bg-primary-600'
  const primaryBgHover = isPouch ? 'hover:bg-[#bce600]' : 'hover:bg-primary-700'
  const primaryText = isPouch ? 'text-black' : 'text-primary-50'
  const primaryBorder = isPouch ? 'border-black border-2' : 'border-primary-200 border'
  
  // Neo-brutalist classes for Pouch, sleek for AP
  const darkCardClass = isPouch
    ? 'bg-black border-4 border-black p-6 text-white shadow-[8px_8px_0px_0px_rgba(212,255,0,1)] relative'
    : 'bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-white shadow-xl relative'

  const solutionBadgeClass = isPouch
    ? 'bg-[#D4FF00] border-2 border-black text-black font-black text-xs uppercase px-2 py-1 mb-2 inline-block'
    : 'bg-primary-100 text-primary-700 font-bold text-xs uppercase px-2 py-1 rounded-md mb-2 inline-block'

  const notebookClass = isPouch
    ? 'bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative'
    : 'bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm relative'
    
  const notebookTagClass = isPouch
    ? 'absolute -top-4 right-8 bg-[#D4FF00] border-2 border-black px-4 py-1 font-black uppercase text-sm z-10'
    : 'absolute -top-3 right-8 bg-amber-100 border border-amber-200 text-amber-800 px-4 py-1 rounded-full text-xs font-bold uppercase z-10'

  return (
    <SEOPageLayout
      title={props.pageTitle}
      description={props.pageDescription}
      heroTitle={props.heroTitle}
      heroSubtitle={props.heroSubtitle}
      heroImage={props.heroImage}
      faqs={props.faqs}
      schemaType={props.schemaType as any}
    >
      {/* 1. Empathy Hook */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className={`text-3xl md:text-5xl font-black mb-8 ${isPouch ? 'uppercase tracking-tighter' : ''}`}>{props.overviewTitle}</h2>
           <p className={`text-lg md:text-xl text-neutral-700 leading-relaxed ${isPouch ? 'font-mono' : ''}`}>{props.overviewContent}</p>
        </div>
      </section>

      {/* 2. Pain Points & Solutions */}
      <section className="py-16 md:py-24 bg-neutral-100 border-y-2 border-neutral-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-black mb-12 text-center ${isPouch ? 'uppercase' : ''}`}>5 Packaging Pain Points & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {props.painPoints.map((pp, idx) => (
                <div key={idx} className={darkCardClass}>
                   <div className="text-5xl font-black text-neutral-800 absolute -top-4 -right-2 select-none opacity-50">
                     0{idx + 1}
                   </div>
                   <h3 className={`text-xl font-bold mb-3 relative z-10 ${isPouch ? 'text-[#00FFFF] uppercase' : 'text-white'}`}>{pp.issue}</h3>
                   <p className="text-neutral-400 text-sm mb-6 relative z-10"><strong className="text-neutral-300">Impact:</strong> {pp.impact}</p>
                   
                   <div className={`relative z-10 p-4 ${isPouch ? 'bg-neutral-900 border-2 border-neutral-700' : 'bg-primary-900/40 border border-primary-500/20 rounded-lg'}`}>
                      <span className={solutionBadgeClass}>✅ Solution</span>
                      <p className={`text-sm ${isPouch ? 'text-white font-mono' : 'text-primary-50'}`}>{pp.solution}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Expert Engineering Notebook */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className={notebookClass}>
              <div className={notebookTagClass}>
                Expert Insight
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isPouch ? 'text-black uppercase tracking-tight' : 'text-amber-900'}`}>🔬 {props.engineeringNotebook.title}</h3>
              <div className={`flex items-center gap-2 text-sm mb-6 pb-6 border-b ${isPouch ? 'text-black border-black border-b-2 font-mono' : 'text-amber-700 border-amber-200/50'}`}>
                <span className="font-bold">{props.engineeringNotebook.author}</span>
                <span>•</span>
                <span>{props.engineeringNotebook.date}</span>
              </div>
              <p className={`leading-relaxed italic mb-8 text-lg ${isPouch ? 'text-neutral-900 font-medium' : 'text-amber-900/80'}`}>"{props.engineeringNotebook.content}"</p>
              
              <div className={isPouch ? 'bg-white border-2 border-black p-4' : 'bg-white/60 rounded-xl p-4 border border-amber-200/50'}>
                <strong className={`block mb-1 ${isPouch ? 'text-black uppercase' : 'text-amber-900'}`}>Key Takeaway:</strong>
                <p className={isPouch ? 'text-black font-mono text-sm' : 'text-amber-800'}>{props.engineeringNotebook.keyTakeaway}</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Technical Specs & Benefits */}
      <section className={`py-16 md:py-24 ${isPouch ? 'bg-black text-white border-y-4 border-black' : 'bg-neutral-900 text-white'}`}>
         <div className="max-w-6xl mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h3 className={`text-2xl font-bold mb-8 ${isPouch ? 'uppercase text-[#D4FF00]' : ''}`}>Technical Specifications</h3>
                    
                    <div className="space-y-8">
                       <div>
                          <h4 className={`font-bold mb-3 ${isPouch ? 'text-[#00FFFF] uppercase tracking-wider' : 'text-primary-400'}`}>Material Layers</h4>
                          <ul className="space-y-3">
                             {props.technicalSpecs.materialLayers.map((item, i) => (
                               <li key={i} className="flex items-start gap-3">
                                 <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isPouch ? 'text-[#00FFFF]' : 'text-primary-500'}`} /> 
                                 <span className={isPouch ? 'font-mono' : 'text-neutral-300'}>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                       <div>
                          <h4 className={`font-bold mb-3 ${isPouch ? 'text-[#00FFFF] uppercase tracking-wider' : 'text-primary-400'}`}>Printing Options</h4>
                          <ul className="space-y-3">
                             {props.technicalSpecs.printingOptions.map((item, i) => (
                               <li key={i} className="flex items-start gap-3">
                                 <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isPouch ? 'text-[#00FFFF]' : 'text-primary-500'}`} /> 
                                 <span className={isPouch ? 'font-mono' : 'text-neutral-300'}>{item}</span>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </div>
                 
                 <div>
                    <h3 className={`text-2xl font-bold mb-8 ${isPouch ? 'uppercase text-[#D4FF00]' : ''}`}>Key Benefits</h3>
                    <div className="space-y-4">
                       {props.benefits.map((b, i) => (
                           <div key={i} className={isPouch ? 'bg-neutral-900 border-2 border-neutral-700 p-5' : 'bg-neutral-800 p-5 rounded-xl border border-neutral-700'}>
                              <h4 className={`font-bold mb-2 ${isPouch ? 'text-white uppercase' : 'text-white'}`}>{b.title}</h4>
                              <p className={`text-sm ${isPouch ? 'text-neutral-400 font-mono' : 'text-neutral-400'}`}>{b.description}</p>
                           </div>
                       ))}
                    </div>
                 </div>
             </div>
         </div>
      </section>
      
      {/* 5. Related Store Products CTA */}
      <section className="py-16 md:py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className={`text-3xl md:text-5xl font-black mb-10 ${isPouch ? 'uppercase tracking-tighter' : ''}`}>Ready to Upgrade Your Packaging?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link 
                 to="/store" 
                 className={`px-8 py-4 font-bold transition flex items-center justify-center gap-2 ${primaryBg} ${primaryText} ${primaryBorder} ${primaryBgHover} ${isPouch ? 'uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'text-white rounded-xl'}`}
               >
                 Shop Standard Sizes
               </Link>
               <a 
                 href="https://calendly.com/30-min-free-packaging-consultancy" 
                 target="_blank" 
                 rel="noreferrer" 
                 className={`px-8 py-4 font-bold transition flex items-center justify-center gap-2 ${isPouch ? 'bg-black text-white border-2 border-black hover:bg-neutral-800 uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl'}`}
               >
                 Book Custom Consultation
               </a>
            </div>
         </div>
      </section>
    </SEOPageLayout>
  )
}

export default FooterSEOPageTemplate
