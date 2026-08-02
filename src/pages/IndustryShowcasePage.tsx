import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import { ThreePouchViewer } from '../components/ThreePouchViewer';
import industryData from '../data/industry_data.json';
import techData from '../data/solutions_data.json';
import { ArrowLeft, ArrowRight, ShieldCheck, Box, CheckCircle } from 'lucide-react';

interface IndustryItem {
  id: string;
  industry: { id: string; name: string; };
  state: { id: string; name: string; };
  capacity: { id: string; name: string; };
  recommended_tech_ids: string[];
  ap_copy: { title: string; description: string; };
}

export const IndustryShowcasePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industrySolution = (industryData as IndustryItem[]).find(s => s.id === slug);

  if (!industrySolution) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-800">Industry Solution Not Found</h1>
      </div>
    );
  }

  // Get recommended tech specs
  const recommendedTech = (techData as any[]).filter(tech => 
    (industrySolution.recommended_tech_ids || []).includes(tech.id)
  );

  const firstTech = recommendedTech[0] || techData[0];

  // Determine model based on shape for 3D viewer
  let modelPath = '/3d/3d-pouch/stand-up-pouch.glb';
  const shapeId = firstTech?.shape?.id || 'stand-up-pouch';
  if (shapeId === 'flat-bottom') modelPath = '/3d/3d-pouch/flat-bottom-pouch.glb';
  else if (shapeId === 'spout-pouch') modelPath = '/3d/3d-pouch/spouted-pouch.glb';
  else if (shapeId === '3-side-seal') modelPath = '/3d/3d-pouch/3-side-seal.glb';
  else if (shapeId === 'fin-seal') modelPath = '/3d/3d-pouch/gusset-pouch.glb';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Helmet>
        <title>{industrySolution.ap_copy.title} | Master Achieve Pack</title>
        <meta name="description" content={industrySolution.ap_copy.description} />
      </Helmet>

      <MegaMenu />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link to="/solutions" className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium text-sm">
               <ArrowLeft className="w-4 h-4 mr-2" />
               Back to Industry Hub
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 mt-4">
            
            <div className="lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {industrySolution.ap_copy.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 my-2">
                 <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center">
                    <Box className="w-3 h-3 mr-1" /> {industrySolution.industry.name}
                 </span>
                 <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider">
                    Content: {industrySolution.state.name}
                 </span>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {industrySolution.ap_copy.description}
              </p>

              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl mt-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3" />
                    Enterprise Guarantee
                </h3>
                <p className="text-slate-300 mb-6 relative z-10">
                    Engineered to meet the strict compliance and high-volume demands of the {industrySolution.industry.name} sector. Perfect for {industrySolution.state.name.toLowerCase()} processing lines.
                </p>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="block text-slate-400 text-xs font-bold mb-1 uppercase tracking-wider">Target Volume</span>
                        <span className="text-lg font-bold">{(industrySolution.capacity?.name || '').split('/')[0]}</span>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <span className="block text-slate-400 text-xs font-bold mb-1 uppercase tracking-wider">Quality Control</span>
                        <span className="text-lg font-bold">ISO & BRC Certified</span>
                    </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 h-[600px] bg-white rounded-3xl border border-slate-200 overflow-hidden relative shadow-md">
               <ThreePouchViewer 
                  modelUrl={modelPath} 
                  tilt={{ x: 0, y: 0 }} 
                  scrollPercent={0} 
                  isMobile={false}
               />
               <div className="absolute top-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-2" /> 3D Preview (Tech Spec 1)
               </div>
               <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-lg text-xs text-slate-600 pointer-events-none">
                  <span className="font-extrabold text-slate-900 block mb-1 text-sm">Scale Reference</span>
                  355ml standard beverage can
                  <br />(66mm x 122mm)
               </div>
            </div>

          </div>

        </div>
      </main>

      {/* Recommended Tech Specs Section */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900">Engineered Technical Configurations</h2>
                <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
                    Based on your requirements for {industrySolution.industry.name} ({industrySolution.state.name}), our packaging engineers recommend the following structural formulas from our Tech Directory.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommendedTech.map((tech) => (
                    <Link to={`/solutions-directory/${tech.id}`} key={tech.id} className="group bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:border-slate-900 hover:shadow-2xl transition-all block">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-slate-800 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                {tech.shape.name}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 mb-4 leading-snug">
                            {tech.ap_copy.title}
                        </h4>
                        <div className="space-y-3 mt-6 text-sm text-slate-600 border-t border-slate-200 pt-6">
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-slate-400">Material</span>
                                <span className="font-bold text-slate-900 text-right w-1/2 truncate" title={tech.material.name}>{tech.material.name}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium text-slate-400">Hardware</span>
                                <span className="font-bold text-slate-900 text-right w-1/2 truncate" title={tech.parts.name}>{tech.parts.name}</span>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between text-slate-900 font-bold text-sm">
                            View Tech Spec
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
