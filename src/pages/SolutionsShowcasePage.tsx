import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import { ThreePouchViewer } from '../components/ThreePouchViewer';
import solutionsData from '../data/solutions_data.json';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface SolutionItem {
  id: string;
  shape: { id: string; name: string; };
  material: { id: string; name: string; };
  parts: { id: string; name: string; };
  surface: { id: string; name: string; };
  ap_copy: { title: string; description: string; };
  ep_copy: { title: string; description: string; };
}

export const SolutionsShowcasePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const solution = (solutionsData as SolutionItem[]).find(s => s.id === id);

  if (!solution) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-800">Solution Not Found</h1>
      </div>
    );
  }

  // Determine model based on shape for 3D viewer
  let modelPath = '/3d/3d-pouch/stand-up-pouch.glb';
  const shapeId = solution.shape.id;
  if (shapeId === 'flat-bottom') modelPath = '/3d/3d-pouch/flat-bottom-pouch.glb';
  else if (shapeId === 'spout-pouch') modelPath = '/3d/3d-pouch/spouted-pouch.glb';
  else if (shapeId === '3-side-seal') modelPath = '/3d/3d-pouch/3-side-seal.glb';
  else if (shapeId === 'fin-seal') modelPath = '/3d/3d-pouch/gusset-pouch.glb';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Helmet>
        <title>{solution.ap_copy.title} | Master Achieve Pack</title>
        <meta name="description" content={solution.ap_copy.description} />
      </Helmet>

      <MegaMenu />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link to="/solutions-directory" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors font-medium text-sm">
               <ArrowLeft className="w-4 h-4 mr-2" />
               Back to Solutions Directory
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 mt-4">
            
            <div className="lg:w-1/2 flex flex-col gap-6">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
                {solution.ap_copy.title}
              </h1>
              
              <div className="flex flex-wrap gap-3 my-2">
                 <span className="px-3 py-1 bg-white text-slate-700 rounded-md text-xs font-bold uppercase tracking-wider border border-slate-200">
                    Shape: {solution.shape.name}
                 </span>
                 <span className="px-3 py-1 bg-white text-slate-700 rounded-md text-xs font-bold uppercase tracking-wider border border-slate-200">
                    Material: {solution.material.name}
                 </span>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {solution.ap_copy.description}
              </p>

              <div className="bg-white p-6 rounded-xl border border-slate-200 mt-4 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Technical Matrix
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Form Factor</span>
                    <span className="text-slate-900 font-medium">{solution.shape.name}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Material Science</span>
                    <span className="text-slate-900 font-medium">{solution.material.name}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Hardware / Additions</span>
                    <span className="text-slate-900 font-medium">{solution.parts.name}</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="font-semibold text-slate-500">Finish Treatment</span>
                    <span className="text-slate-900 font-medium">{solution.surface.name}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 h-[600px] bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-sm">
               {/* 3D Viewer constraint: must reference 355ml can and dispose textures correctly inside the component */}
               <ThreePouchViewer 
                  modelUrl={modelPath} 
                  tilt={{ x: 0, y: 0 }} 
                  scrollPercent={0} 
                  isMobile={false}
               />
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-slate-200 shadow-sm text-xs text-slate-500 pointer-events-none">
                  <span className="font-bold text-slate-700 block mb-1">Scale Reference</span>
                  355ml standard beverage can
                  <br />(66mm x 122mm)
               </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsShowcasePage;
