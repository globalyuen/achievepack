import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
import industryData from '../data/industry_data.json';
import { Filter, Layers, Briefcase, Droplets, PackageSearch } from 'lucide-react';

interface IndustryItem {
  id: string;
  industry: { id: string; name: string; };
  state: { id: string; name: string; };
  capacity: { id: string; name: string; };
  ap_copy: { title: string; description: string; };
}

export default function SolutionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');

  const matrix: IndustryItem[] = industryData as any;

  const industryOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.industry.name))), [matrix]);
  const stateOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.state.name))), [matrix]);
  const capacityOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.capacity.name))), [matrix]);

  const filteredItems = useMemo(() => {
    return matrix.filter(item => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const title = (item.ap_copy?.title || '').toLowerCase();
        const desc = (item.ap_copy?.description || '').toLowerCase();
        if (!title.includes(q) && !desc.includes(q)) {
          return false;
        }
      }
      if (selectedIndustry !== 'all' && item.industry.name !== selectedIndustry) return false;
      if (selectedState !== 'all' && item.state.name !== selectedState) return false;
      if (selectedCapacity !== 'all' && item.capacity.name !== selectedCapacity) return false;
      return true;
    });
  }, [matrix, searchQuery, selectedIndustry, selectedState, selectedCapacity]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('all');
    setSelectedState('all');
    setSelectedCapacity('all');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      <Helmet>
        <title>Industry Packaging Solutions | Master Achieve Pack</title>
        <meta name="description" content="Explore enterprise packaging solutions tailored by industry, product state, and capacity." />
      </Helmet>

      <MegaMenu />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Industry Packaging Solutions
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
            Discover premium, enterprise-grade packaging engineered for your specific product vertical and physical requirements.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center">
                <Briefcase className="w-3 h-3 mr-1" /> Industry Sector
            </label>
            <select value={selectedIndustry} onChange={e => setSelectedIndustry(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500">
              <option value="all">All Industries</option>
              {industryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center">
                <Droplets className="w-3 h-3 mr-1" /> Product State
            </label>
            <select value={selectedState} onChange={e => setSelectedState(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500">
              <option value="all">All Content States</option>
              {stateOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center">
                <Layers className="w-3 h-3 mr-1" /> Capacity Volume
            </label>
            <select value={selectedCapacity} onChange={e => setSelectedCapacity(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:border-emerald-500">
              <option value="all">All Capacities</option>
              {capacityOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="md:col-span-3 flex justify-end mt-4">
             <button onClick={resetFilters} className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Reset Filters</button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                <PackageSearch className="w-6 h-6 mr-2 text-emerald-600" />
                {filteredItems.length} Solutions Found
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Link key={item.id} to={`/solutions/${item.id}`} className="flex flex-col group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
               <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.industry.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-emerald-600 transition-colors mb-3 line-clamp-2 leading-snug">
                    {item.ap_copy.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6">
                    {item.ap_copy.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 rounded-lg text-xs font-semibold">{item.state.name}</span>
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 rounded-lg text-xs font-semibold">{item.capacity.name}</span>
                  </div>
               </div>
            </Link>
          ))}
          {filteredItems.length === 0 && (
              <div className="col-span-full text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <p className="text-lg text-slate-500">No enterprise solutions match your exact criteria.</p>
                  <button onClick={resetFilters} className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">Clear All Filters</button>
              </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
