import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, ChevronRight, ShieldCheck, Download, 
  Sparkles, Layers, Box, CheckCircle, RefreshCw, Eye, ExternalLink
} from 'lucide-react';
import pseoMatrixData from '../data/pseo_matrix_487.json';

interface MatrixItem {
  id: number;
  sku: string;
  unique_code: string;
  slug: string;
  template_type: string;
  template_name: string;
  pouch_type: string;
  material: {
    name: string;
    eco: boolean;
    ap_focus: string;
    ep_focus: string;
    otr: string;
    wvtr: string;
    seal_temp: string;
    puncture_n: string;
  };
  application: string;
  size: {
    label: string;
    capacity_ml: number;
    dim: string;
  };
  title: string;
  unique_narrative: string;
  ap_canonical: string;
  ep_canonical: string;
  keywords: string[];
  engineering_datasheet?: {
    otr: string;
    wvtr: string;
    seal_temp_range: string;
    puncture_resistance: string;
    tensile_strength: string;
    burst_pressure: string;
    shelf_life_extension: string;
  };
  vault_case_study?: {
    title: string;
    excerpt: string;
  };
  compliance_standards?: string[];
  imagen_image_url?: string;
}

export const DirectoryPage: React.FC = () => {
  // Domain detection
  const isPouchEco = typeof window !== 'undefined' && window.location.hostname.includes('pouch.eco');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPouch, setSelectedPouch] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [showWizard, setShowWizard] = useState(false);

  // Wizard state
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardApp, setWizardApp] = useState('');
  const [wizardPouch, setWizardPouch] = useState('');
  const [wizardMat, setWizardMat] = useState('');

  const matrix: MatrixItem[] = pseoMatrixData as any;

  // Extract unique filter options
  const pouchOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.pouch_type).filter(Boolean))), [matrix]);
  const materialOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.material?.name).filter(Boolean))), [matrix]);
  const applicationOptions = useMemo(() => Array.from(new Set(matrix.map(i => i.application).filter(Boolean))), [matrix]);

  // Filtered items
  const filteredItems = useMemo(() => {
    return matrix.filter(item => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title?.toLowerCase().includes(q);
        const matchesSku = item.sku?.toLowerCase().includes(q);
        const matchesApp = item.application?.toLowerCase().includes(q);
        const matchesMat = item.material?.name?.toLowerCase().includes(q);
        const matchesPouch = item.pouch_type?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSku && !matchesApp && !matchesMat && !matchesPouch) {
          return false;
        }
      }

      if (selectedPouch !== 'all' && item.pouch_type !== selectedPouch) return false;
      if (selectedMaterial !== 'all' && item.material?.name !== selectedMaterial) return false;
      if (selectedApplication !== 'all' && item.application !== selectedApplication) return false;

      return true;
    });
  }, [matrix, searchQuery, selectedPouch, selectedMaterial, selectedApplication]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPouch('all');
    setSelectedMaterial('all');
    setSelectedApplication('all');
    setWizardStep(1);
    setWizardApp('');
    setWizardPouch('');
    setWizardMat('');
    setShowWizard(false);
  };

  const applyWizardResult = () => {
    if (wizardPouch) setSelectedPouch(wizardPouch);
    if (wizardMat) setSelectedMaterial(wizardMat);
    if (wizardApp) setSelectedApplication(wizardApp);
    setShowWizard(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-16">
      <Helmet>
        <title>
          {isPouchEco 
            ? "Sustainable Packaging Directory & Spec Finder | Pouch Eco" 
            : "Enterprise Packaging Directory & Engineering Specs | Achieve Pack"}
        </title>
        <meta 
          name="description" 
          content={isPouchEco 
            ? "Explore low MOQ 100% compostable and recyclable pouch specifications, sizes, and instant pricing quotes." 
            : "Search 480+ high-barrier enterprise pouch specifications, technical datasheets (OTR/WVTR), and 3D dieline catalogs."} 
        />
        <link 
          rel="canonical" 
          href={isPouchEco ? "https://pouch.eco/directory" : "https://achievepack.com/directory"} 
        />
      </Helmet>

      {/* Hero Header */}
      <section className={`py-12 px-4 sm:px-6 lg:px-8 border-b ${isPouchEco ? 'bg-emerald-900 text-white' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 bg-white/10 text-emerald-300 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            {isPouchEco ? "Pouch Eco Directory Matrix" : "Achieve Pack Engineering Catalog"}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {isPouchEco 
              ? "Eco Packaging Directory & Product Spec Finder" 
              : "Enterprise Flexible Packaging Directory & Datasheets"}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            {isPouchEco
              ? "Filter over 480+ low MOQ, 100% compostable, and recyclable pouch structures for your brand."
              : "Search technical barrier datasheets (OTR/WVTR), food contact certifications, and 3D dieline specifications."}
          </p>

          {/* Quick Wizard Trigger */}
          <div className="mt-6">
            <button
              onClick={() => setShowWizard(!showWizard)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg ${
                isPouchEco 
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950' 
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {showWizard ? "Close Smart Configurator" : "⚡ Launch 10-Second Smart Packaging Wizard"}
            </button>
          </div>
        </div>
      </section>

      {/* 10-Second Smart Packaging Wizard Section */}
      {showWizard && (
        <div className="max-w-5xl mx-auto mt-6 px-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                10-Second Packaging Configurator (Step {wizardStep} of 3)
              </h3>
              <button onClick={() => setShowWizard(false)} className="text-slate-400 hover:text-slate-600 text-sm">
                Cancel
              </button>
            </div>

            {wizardStep === 1 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 1: What is your primary product application?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {applicationOptions.slice(0, 8).map((app, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setWizardApp(app); setWizardStep(2); }}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardApp === app ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {app}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 2: What pouch structure do you prefer?</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {pouchOptions.map((pouch, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setWizardPouch(pouch); setWizardStep(3); }}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardPouch === pouch ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {pouch}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setWizardStep(1)} className="text-xs text-slate-500 underline">← Back to Step 1</button>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-3">Step 3: Select your sustainable material structure:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {materialOptions.map((mat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWizardMat(mat)}
                      className={`p-3 text-left rounded-xl border text-sm font-medium transition-all ${
                        wizardMat === mat ? 'border-emerald-500 bg-emerald-50 text-emerald-950' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button onClick={() => setWizardStep(2)} className="text-xs text-slate-500 underline">← Back to Step 2</button>
                  <button
                    onClick={applyWizardResult}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg shadow-md"
                  >
                    View Matching Specifications ({filteredItems.length})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6 bg-white p-5 rounded-2xl shadow-sm border border-slate-200 h-fit">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Filter className="w-4 h-4 text-emerald-600" />
                Faceted Filters
              </h2>
              <button onClick={resetFilters} className="text-xs text-slate-500 hover:text-emerald-600 flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Search Catalog</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Coffee, Mono-PE, 2oz..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Pouch Type Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Pouch Structure</label>
              <select
                value={selectedPouch}
                onChange={(e) => setSelectedPouch(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Pouch Types ({pouchOptions.length})</option>
                {pouchOptions.map((p, idx) => (
                  <option key={idx} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Material Spec</label>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Materials ({materialOptions.length})</option>
                {materialOptions.map((m, idx) => (
                  <option key={idx} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Application Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Application</label>
              <select
                value={selectedApplication}
                onChange={(e) => setSelectedApplication(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="all">All Applications ({applicationOptions.length})</option>
                {applicationOptions.map((a, idx) => (
                  <option key={idx} value={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* Quick Stat Summary */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <div className="flex justify-between">
                <span>Total Matrix SKUs:</span>
                <span className="font-bold text-slate-800">{matrix.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Matching Entries:</span>
                <span className="font-bold text-emerald-600">{filteredItems.length}</span>
              </div>
            </div>
          </div>

          {/* Main Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-slate-600">
                Showing <span className="font-bold text-slate-900">{filteredItems.length}</span> specifications
              </p>
            </div>

            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <Box className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No matching specifications found</h3>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search terms.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    {/* Visual Card Header */}
                    <div className="h-40 bg-slate-100 relative overflow-hidden flex items-center justify-center p-3">
                      <img 
                        src={item.imagen_image_url || 'https://achievepack.com/imgs/store/pouch%20shape/stand-up.webp'} 
                        alt={item.title}
                        className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                          {item.pouch_type}
                        </span>
                        {item.material?.eco && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Eco Verified
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        Application: <span className="font-medium text-slate-800">{item.application}</span>
                      </p>

                      {/* Specs Badge Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-50 p-2 rounded-lg">
                          <span className="text-[10px] uppercase text-slate-400 block font-semibold">OTR Barrier</span>
                          <span className="font-bold text-slate-800">{item.material?.otr || '0.5 cc/m²/d'}</span>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-lg">
                          <span className="text-[10px] uppercase text-slate-400 block font-semibold">WVTR Moisture</span>
                          <span className="font-bold text-slate-800">{item.material?.wvtr || '0.8 g/m²/d'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700">{item.size?.label}</span>
                      <Link
                        to={`/directory/${item.slug}`}
                        className={`font-bold flex items-center gap-1 transition-colors ${
                          isPouchEco ? 'text-emerald-600 hover:text-emerald-700' : 'text-amber-600 hover:text-amber-700'
                        }`}
                      >
                        View Full Datasheet <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;
