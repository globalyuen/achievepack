import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FORMULA_PAGES_DATA, FormulaPageRecord } from '../data/formulaPagesData';
import { 
  ArrowLeft, Sparkles, Layers, Wrench, Building2, Package, CheckCircle2, 
  ShieldCheck, Box, ChevronRight, Download, Share2, Eye, ExternalLink, RefreshCw, Bot, UserCheck 
} from 'lucide-react';
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

const UI_LABELS = {
  en: {
    backToDirectory: "Back to B2B Packaging Solutions Directory",
    verifiedCase: "Verified Engineering Case",
    preview3D: "3D Studio Preview",
    customQuote: "Request Custom Quote",
    materialBreakdown: "Material Structure & Barrier Engineering",
    hardwareSpecs: "Installed Parts & Sealing Mechanics",
    industryScenario: "Industry Application & DTC Scenario",
    otr: "Oxygen Barrier (OTR)",
    wvtr: "Moisture Barrier (WVTR)",
    shelfLife: "Engineered Shelf Life",
    barrierRating: "Barrier Protection Rating",
    sealingTemp: "Heat Sealing Temp Range",
    punctureResist: "Puncture Resistance Index",
    recyclability: "Recyclability & Eco Profile",
    quickAnswerTitle: "AIEO Direct Technical Summary (AI Engine Citable)",
    openCase3D: "Launch Interactive 3D Studio",
    downloadSpec: "Download Spec Sheet",
    viewDirectory: "View Solutions Directory",
    exploreMore: "Explore More B2B Packaging Solutions",
    browseCatalog: "Browse our full catalog of custom engineering packaging solutions across Coffee, Superfoods, Pet Food, and Sports Nutrition."
  },
  'zh-tw': {
    backToDirectory: "返回 B2B 包裝方案目錄",
    verifiedCase: "AIEO & SEO 認證工程案例",
    preview3D: "3D 模擬預覽",
    customQuote: "獲取客製化報價",
    materialBreakdown: "材質結構與物理阻隔工程",
    hardwareSpecs: "適配配件與密封機制",
    industryScenario: "行業應用與 DTC 場景",
    otr: "氧氣阻隔 (OTR)",
    wvtr: "水汽阻隔 (WVTR)",
    shelfLife: "設計保質期",
    barrierRating: "阻隔保護等級",
    sealingTemp: "熱封溫度範圍",
    punctureResist: "抗穿刺強度",
    recyclability: "可回收性與環保認證",
    quickAnswerTitle: "AIEO 答案提取與技術摘要 (AI 搜尋引擎引用標註)",
    openCase3D: "開啟互動式 3D 工作室",
    downloadSpec: "下載技術規格書",
    viewDirectory: "查看包裝方案目錄",
    exploreMore: "探索更多 B2B 包裝工程方案",
    browseCatalog: "瀏覽我們的精選客製化包裝目錄，涵蓋精品咖啡、超級食品、寵物食品及運動營養。"
  },
  fr: {
    backToDirectory: "Retour au catalogue de solutions d'emballage B2B",
    verifiedCase: "Cas d'ingénierie vérifié AIEO & SEO",
    preview3D: "Aperçu Studio 3D",
    customQuote: "Demander un devis personnalisé",
    materialBreakdown: "Structure du matériau & Ingénierie barrière",
    hardwareSpecs: "Pièces installées & Mécanique d'étanchéité",
    industryScenario: "Application industrielle & Scénario DTC",
    otr: "Barrière à l'oxygène (OTR)",
    wvtr: "Barrière à l'humidité (WVTR)",
    shelfLife: "Durée de conservation conçue",
    barrierRating: "Indice de protection barrière",
    sealingTemp: "Plage de température de scellage",
    punctureResist: "Résistance à la perforation",
    recyclability: "Recyclabilité & Profil écologique",
    quickAnswerTitle: "Résumé d'extraction technique AIEO",
    openCase3D: "Lancer le Studio 3D Interactif",
    downloadSpec: "Télécharger la fiche technique",
    viewDirectory: "Voir le catalogue des solutions",
    exploreMore: "Explorer plus de solutions d'emballage B2B",
    browseCatalog: "Parcourez notre catalogue complet de solutions d'emballage sur mesure pour le café, les superaliments, la nourriture pour animaux et la nutrition sportive."
  },
  es: {
    backToDirectory: "Volver al catálogo de soluciones de embalaje B2B",
    verifiedCase: "Caso de ingeniería verificado por AIEO y SEO",
    preview3D: "Vista previa Studio 3D",
    customQuote: "Solicitar cotización personalizada",
    materialBreakdown: "Estructura de material e Ingeniería de barrera",
    hardwareSpecs: "Piezas instaladas y Mecánica de sellado",
    industryScenario: "Aplicación industrial y Escenario DTC",
    otr: "Barrera de oxígeno (OTR)",
    wvtr: "Barrera de humedad (WVTR)",
    shelfLife: "Vida útil diseñada",
    barrierRating: "Clasificación de protección de barrera",
    sealingTemp: "Rango de temperatura de sellado",
    punctureResist: "Resistencia a perforaciones",
    recyclability: "Reciclabilidad y Perfil ecológico",
    quickAnswerTitle: "Resumen de extracción técnica AIEO",
    openCase3D: "Iniciar Studio 3D Interactivo",
    downloadSpec: "Descargar ficha técnica",
    viewDirectory: "Ver catálogo de soluciones",
    exploreMore: "Explorar más soluciones de embalaje B2B",
    browseCatalog: "Explore nuestro catálogo completo de soluciones de embalaje personalizado para café, superalimentos, alimentos para mascotas y nutrición deportiva."
  }
};

export const FormulaShowcasePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const lang = getLanguageFromPath();
  const txt = UI_LABELS[lang as keyof typeof UI_LABELS] || UI_LABELS.en;

  // Find record by slug or default to first
  const record: FormulaPageRecord = FORMULA_PAGES_DATA.find(r => r.slug === slug) || FORMULA_PAGES_DATA[0];

  // Resolve localized content — use zhTw fields when on /zh-tw/ routes
  const localTitle = (lang === 'zh-tw' && record.zhTw?.title) ? record.zhTw.title : record.title;
  const localNarrative = (lang === 'zh-tw' && record.zhTw?.narrative) ? record.zhTw.narrative : record.narrative;
  const localAieoAnswer = (lang === 'zh-tw' && record.zhTw?.aieoQuickAnswer) ? record.zhTw.aieoQuickAnswer : record.aieoQuickAnswer;

  const canonicalUrl = `https://achievepack.com${getLocalizedPath(`/solutions/${record.slug}`, lang)}`;

  // JSON-LD Structured Schema for SEO & AIEO Engine Extraction
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": localTitle,
    "description": localAieoAnswer,
    "image": `https://achievepack.com${record.images.hero}`,
    "author": {
      "@type": "Person",
      "name": "Ryan Wong",
      "jobTitle": "Chief Packaging Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Achieve Pack Solutions"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://achievepack.com/achieve-pack-logo.png"
      }
    }
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the material specification for ${record.fakeCompany}'s ${record.product} pouch?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${record.fakeCompany} utilizes ${record.material} with an OTR of ${record.specs.otr} and WVTR of ${record.specs.wvtr}, providing a shelf life of ${record.specs.shelfLife}.`
        }
      },
      {
        "@type": "Question",
        "name": `What closure hardware is installed on the ${record.pouchType}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `This packaging solution features custom ${record.installedParts} engineered for airtight sealing and daily consumer re-closure.`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Helmet Meta & Canonical for SEO / AIEO */}
      <Helmet>
        <title>{localTitle}</title>
        <meta name="description" content={localAieoAnswer} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={localTitle} />
        <meta property="og:description" content={localAieoAnswer} />
        <meta property="og:image" content={`https://achievepack.com${record.images.hero}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLdArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
      </Helmet>

      {/* AP Global Header */}
      <SiteHeader />

      <div className="pt-24 sm:pt-28">
        {/* Navigation Sub-Header */}
        <div className="border-b border-slate-800 bg-[#0F1420]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
            <Link 
              to={getLocalizedPath('/solutions', lang)} 
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{txt.backToDirectory}</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{txt.verifiedCase}</span>
              </span>
              <Link
                to="/studio"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-900/30 text-xs"
              >
                <Box className="w-3.5 h-3.5" />
                <span>{txt.preview3D}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
          
          {/* SEO HEADER & BRAND TITLE */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Industry: {record.industry}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Material: {record.material}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Format: {record.pouchType} ({record.size})
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {localTitle}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {localNarrative}
            </p>
          </div>

          {/* AIEO QUICK ANSWER CARD (Extractable for LLMs & AI Search Engines) */}
          <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-800/60 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Bot className="w-4 h-4" />
              <span>{txt.quickAnswerTitle}</span>
            </div>
            <p className="text-slate-200 text-sm font-medium leading-relaxed">
              {localAieoAnswer}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-300/80 pt-3 border-t border-emerald-900/50">
              <span>OTR: {record.specs.otr}</span>
              <span>•</span>
              <span>WVTR: {record.specs.wvtr}</span>
              <span>•</span>
              <span>Stream: {record.specs.recyclability}</span>
              <span>•</span>
              <span>Shelf-Life: {record.specs.shelfLife}</span>
            </div>
          </div>

          {/* HERO SECTION - GOOGLE IMAGEN HIGH-RES MOCKUP */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative shadow-2xl">
                <img 
                  src={record.images.hero} 
                  alt={`${record.title} Packaging Mockup`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/assets/formula-cases/case-1-hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-mono">HIGH RESOLUTION PACKAGING RENDER</p>
                    <p className="text-sm font-semibold text-white">{record.fakeCompany} • {record.product}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    3D Rendered
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{record.fakeCompany} Brand Engineering Profile</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Technical Packaging Specifications
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">{txt.otr}</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{record.specs.otr}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">{txt.wvtr}</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{record.specs.wvtr}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">{txt.shelfLife}</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{record.specs.shelfLife}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">{txt.barrierRating}</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">{record.specs.barrierRating}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/studio"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm text-center transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2"
                >
                  <Box className="w-4 h-4" />
                  <span>{txt.openCase3D}</span>
                </Link>
                <Link
                  to="/quote"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm text-center transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>{txt.customQuote}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* VISUAL BREAKDOWN GRID (Material, Hardware, Scenario) */}
          <section className="space-y-8 pt-6 border-t border-slate-800">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-extrabold text-white">Visual Technical Analysis</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Detailed breakdowns of layer structure, installed functional hardware, and real-world commercial applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Material Structure */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
                <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                  <img 
                    src={record.images.materialBreakdown} 
                    alt={`${record.material} Layer Breakdown`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/assets/formula-cases/case-1-material.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 text-[11px] font-mono border border-slate-800">
                    MATERIAL LAYER
                  </div>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-emerald-400" />
                      <span>{txt.materialBreakdown}</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      {record.material}
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                    <div className="flex justify-between"><span>Sealing Temp:</span> <span className="text-slate-200">{record.specs.sealingTemp}</span></div>
                    <div className="flex justify-between"><span>Puncture Resistance:</span> <span className="text-slate-200">{record.specs.punctureResist}</span></div>
                  </div>
                </div>
              </div>

              {/* Card 2: Installed Hardware */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
                <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                  <img 
                    src={record.images.installedPartsCloseup} 
                    alt={`${record.installedParts} Spec Breakdown`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/assets/formula-cases/case-1-parts.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 text-[11px] font-mono border border-slate-800">
                    HARDWARE SPEC
                  </div>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-emerald-400" />
                      <span>{txt.hardwareSpecs}</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      {record.installedParts}
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                    <div className="flex justify-between"><span>Closure Mechanism:</span> <span className="text-slate-200">Heavy-Duty Airtight</span></div>
                    <div className="flex justify-between"><span>Aroma Containment:</span> <span className="text-slate-200">100% Hermetic Seal</span></div>
                  </div>
                </div>
              </div>

              {/* Card 3: Industry Application */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
                <div className="aspect-[4/3] bg-slate-950 relative overflow-hidden">
                  <img 
                    src={record.images.industryApplication} 
                    alt={`${record.industry} Packaging Application`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/assets/formula-cases/case-1-app.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 text-[11px] font-mono border border-slate-800">
                    APPLICATION SCENARIO
                  </div>
                </div>
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <span>{txt.industryScenario}</span>
                    </h3>
                    <p className="text-xs text-slate-300 font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      {record.industry} • {record.product}
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                    <div className="flex justify-between"><span>Recyclability Stream:</span> <span className="text-slate-200">{record.specs.recyclability}</span></div>
                    <div className="flex justify-between"><span>Filling Compatibility:</span> <span className="text-slate-200">Automated & Manual</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AIEO Hidden Structural Data Block */}
          <div className="sr-only" aria-hidden="true">
            <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
              <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <h3 itemProp="name">{record.title}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p itemProp="text">{record.aieoQuickAnswer}</p>
                </div>
              </article>
            </section>
          </div>

          {/* BOTTOM DIRECTORY CALLOUT */}
          <section className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-900/40 rounded-2xl p-8 text-center space-y-4 shadow-2xl">
            <h3 className="text-xl font-extrabold text-white">{txt.exploreMore}</h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              {txt.browseCatalog}
            </p>
            <div className="pt-2">
              <Link
                to={getLocalizedPath('/solutions', lang)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-900/50"
              >
                <span>{txt.viewDirectory}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </main>
      </div>

      {/* AP Global Footer */}
      <Footer />
    </div>
  );
};
