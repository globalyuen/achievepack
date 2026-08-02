import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FORMULA_PAGES_DATA } from '../data/formulaPagesData';
import { Sparkles, Search, Filter, Box, ArrowRight, Leaf, Recycle, Shield, ShoppingBag, Droplet } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const getLanguageFromPath = (): string => {
  if (typeof window === 'undefined') return 'en';
  const pathname = window.location.pathname;
  const parts = pathname.split('/').filter(Boolean);
  const possibleLang = parts[0]?.toLowerCase();
  if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
    return possibleLang;
  }
  return 'en';
};

const getLocalizedPath = (path: string, lang: string): string => {
  if (!lang || lang === 'en') return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
};

const I18N_TEXT = {
  en: {
    title: "B2B Flexible Packaging Solutions Directory | Achieve Pack",
    badge: "SEO & AIEO Verified Engineering Directory",
    h1: "B2B Custom Packaging Solutions",
    subtitle: "High-barrier recyclable Mono-PE, GRS-certified PCR, and bio-compostable pouch solutions engineered for global DTC brands and industrial packaging lines.",
    placeholder: "Search solutions by brand, material, or industry...",
    allSolutions: "All Solutions",
    explore: "Explore Solution Case",
    material: "Material:",
    pouchFormat: "Pouch Format:",
    hardware: "Installed Hardware:"
  },
  'zh-tw': {
    title: "B2B 客製化軟包裝方案目錄 (50案精選) | Achieve Pack",
    badge: "SEO & AIEO 認證工程方案目錄",
    h1: "B2B 客製化包裝解決方案",
    subtitle: "高阻隔可回收 Mono-PE、GRS 認證 PCR 與生物可降解站立袋方案，專為全球 DTC 品牌及工業包裝線工程設計。",
    placeholder: "按品牌、材質或行業搜尋方案...",
    allSolutions: "全部方案",
    explore: "查看方案案例詳情",
    material: "材質結構:",
    pouchFormat: "袋型結構:",
    hardware: "適配配件:"
  },
  fr: {
    title: "Catalogue de Solutions d'Emballage Flexible B2B | Achieve Pack",
    badge: "Répertoire d'ingénierie vérifié SEO & AIEO",
    h1: "Solutions d'Emballage Sur Mesure B2B",
    subtitle: "Solutions Mono-PE recyclables haute barrière, PCR certifié GRS et sachets bio-compostables conçus pour les marques DTC.",
    placeholder: "Rechercher des solutions par marque, matériau ou industrie...",
    allSolutions: "Toutes les solutions",
    explore: "Explorer l'étude de cas",
    material: "Matériau:",
    pouchFormat: "Format de sachet:",
    hardware: "Accessoires installés:"
  },
  es: {
    title: "Catálogo de Soluciones de Embalaje Flexible B2B | Achieve Pack",
    badge: "Directorio de ingeniería verificado por SEO y AIEO",
    h1: "Soluciones de Embalaje Personalizado B2B",
    subtitle: "Soluciones de bolsas reciclables Mono-PE de alta barrera, PCR certificado por GRS y bio-compostables para marcas DTC.",
    placeholder: "Buscar soluciones por marca, material o industria...",
    allSolutions: "Todas las soluciones",
    explore: "Explorar caso de solución",
    material: "Material:",
    pouchFormat: "Formato de bolsa:",
    hardware: "Accesorios instalados:"
  }
};

const getMaterialIcon = (material?: string) => {
  const mat = (material || '').toLowerCase();
  if (mat.includes('compostable') || mat.includes('bio') || mat.includes('pla')) return <Leaf className="w-3.5 h-3.5 text-green-400" />;
  if (mat.includes('recyclable') || mat.includes('pcr') || mat.includes('mono-pe')) return <Recycle className="w-3.5 h-3.5 text-blue-400" />;
  if (mat.includes('barrier') || mat.includes('aluminum')) return <Shield className="w-3.5 h-3.5 text-purple-400" />;
  return <Box className="w-3.5 h-3.5 text-slate-400" />;
};

const getShapeIcon = (shape?: string) => {
  const shp = (shape || '').toLowerCase();
  if (shp.includes('spout')) return <Droplet className="w-3.5 h-3.5 text-cyan-400" />;
  if (shp.includes('stand up') || shp.includes('doypack')) return <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />;
  return <Box className="w-3.5 h-3.5 text-slate-400" />;
};

export const FormulaDirectoryPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');

  const lang = getLanguageFromPath();
  const txt = I18N_TEXT[lang as keyof typeof I18N_TEXT] || I18N_TEXT.en;
  const canonicalUrl = `https://achievepack.com${getLocalizedPath('/solutions', lang)}`;

  const industries = Array.from(new Set(FORMULA_PAGES_DATA.map(item => item.industry)));

  const filteredData = FORMULA_PAGES_DATA.filter(item => {
    const matchesSearch = (item.title || '').toLowerCase().includes(search.toLowerCase()) ||
                          (item.fakeCompany || '').toLowerCase().includes(search.toLowerCase()) ||
                          (item.material || '').toLowerCase().includes(search.toLowerCase());
    const matchesIndustry = selectedIndustry === 'ALL' || item.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Helmet>
        <title>{txt.title}</title>
        <meta name="description" content={txt.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* AP Global Header */}
      <SiteHeader />

      <div className="pt-24 sm:pt-28">
        {/* Top Banner */}
        <div className="bg-gradient-to-b from-[#0F1420] to-[#0A0D14] border-b border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{txt.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {txt.h1}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              {txt.subtitle}
            </p>
          </div>
        </div>

        {/* Main Directory Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/80 p-4 rounded-xl border border-slate-800 backdrop-blur-md">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={txt.placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <button
                onClick={() => setSelectedIndustry('ALL')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                  selectedIndustry === 'ALL' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {txt.allSolutions} ({FORMULA_PAGES_DATA.length})
              </button>
              {industries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                    selectedIndustry === ind 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* SEO Grid with Visual Imagen Hero Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((record) => (
              <div 
                key={record.id}
                className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden space-y-4 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Hero Image Preview */}
                <div className="aspect-[16/9] w-full bg-slate-950 relative overflow-hidden">
                  <img
                    src={record.images.hero}
                    alt={record.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/assets/formula-cases/case-1-hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-slate-800">
                    #{record.id} {record.industry}
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    <div className="p-1.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 shadow-sm" title={record.material}>
                      {getMaterialIcon(record.material)}
                    </div>
                    <div className="p-1.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 shadow-sm" title={record.pouchType}>
                      {getShapeIcon(record.pouchType)}
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-300 bg-slate-950/70 px-2 py-0.5 rounded">
                    {record.size}
                  </div>
                </div>

                <div className="px-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {record.fakeCompany} - {record.product}
                    </h2>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {record.aieoQuickAnswer}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-[11px] pt-3 border-t border-slate-800/60">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">{txt.material}</span>
                      <span className="font-mono text-emerald-300 truncate max-w-[170px] text-right">{record.material}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">{txt.pouchFormat}</span>
                      <span>{record.pouchType}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-500">{txt.hardware}</span>
                      <span className="truncate max-w-[170px] text-right">{record.installedParts}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={getLocalizedPath(record.seoUrl, lang)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{txt.explore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/studio"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Preview in 3D Studio"
                  >
                    <Box className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* AP Global Footer */}
      <Footer />
    </div>
  );
};
