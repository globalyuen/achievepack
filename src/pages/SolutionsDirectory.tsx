import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import { Search, Filter, ChevronRight, Layers } from 'lucide-react';
import solutionsData from '../data/solutions_data.json';

interface SolutionItem {
  id: string;
  shape: { id: string; name: string; };
  material: { id: string; name: string; };
  parts: { id: string; name: string; };
  surface: { id: string; name: string; };
  ap_copy: { title: string; description: string; };
  ep_copy: { title: string; description: string; };
}

export const SolutionsDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedPart, setSelectedPart] = useState<string>('all');
  const [selectedSurface, setSelectedSurface] = useState<string>('all');

  const matrix: SolutionItem[] = solutionsData as any;

  const shapeOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.shape.name))), [matrix]);
  const materialOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.material.name))), [matrix]);
  const partOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.parts.name))), [matrix]);
  const surfaceOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.surface.name))), [matrix]);

  const filteredItems = useMemo(() => {
    return matrix.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!item.ap_copy.title.toLowerCase().includes(q) && !item.ap_copy.description.toLowerCase().includes(q)) {
          return false;
        }
      }
      if (selectedShape !== 'all' && item.shape.name !== selectedShape) return false;
      if (selectedMaterial !== 'all' && item.material.name !== selectedMaterial) return false;
      if (selectedPart !== 'all' && item.parts.name !== selectedPart) return false;
      if (selectedSurface !== 'all' && item.surface.name !== selectedSurface) return false;
      return true;
    });
  }, [matrix, searchQuery, selectedShape, selectedMaterial, selectedPart, selectedSurface]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedShape('all');
    setSelectedMaterial('all');
    setSelectedPart('all');
    setSelectedSurface('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      <Helmet>
        <title>Solutions Directory | Master Achieve Pack</title>
        <meta name="description" content="Explore our combinatorial packaging solutions." />
      </Helmet>

      <MegaMenu />

      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 border-b bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Packaging Solutions Directory
          </h1>
          <p className="mt-2 text-slate-300">
            Find the perfect combination of Shape, Material, Parts, and Surface for your enterprise needs.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Shape</label>
            <select value={selectedShape} onChange={e => setSelectedShape(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm">
              <option value="all">All Shapes</option>
              {shapeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Material</label>
            <select value={selectedMaterial} onChange={e => setSelectedMaterial(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm">
              <option value="all">All Materials</option>
              {materialOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Part</label>
            <select value={selectedPart} onChange={e => setSelectedPart(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm">
              <option value="all">All Parts</option>
              {partOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Surface</label>
            <select value={selectedSurface} onChange={e => setSelectedSurface(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-sm">
              <option value="all">All Surfaces</option>
              {surfaceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="md:col-span-4 flex justify-end">
             <button onClick={resetFilters} className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">Reset Filters</button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Showing {filteredItems.length} Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Link key={item.id} to={`/solutions/${item.id}`} className="block group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
               <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wider mb-3">
                    {item.shape.name}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
                    {item.ap_copy.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                    {item.ap_copy.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded text-[10px]">{item.material.name}</span>
                      <span className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded text-[10px]">{item.parts.name}</span>
                      <span className="px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded text-[10px]">{item.surface.name}</span>
                  </div>
               </div>
            </Link>
          ))}
          {filteredItems.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-500">
                  No solutions match your filters. Try adjusting your criteria.
              </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsDirectory;
