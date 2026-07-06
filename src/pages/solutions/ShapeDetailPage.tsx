import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Box, Sparkles, Check, Info, FileText, ArrowRight } from 'lucide-react';
import { getDomain } from '../../utils/domain';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import PouchLayout from '../../components/pouch/PouchLayout';
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI';
import { ThreePouchViewer } from '../../components/ThreePouchViewer';

interface Shape {
  id: string;
  name: string;
  keywords: string;
  dieline_image: string;
  glb_file: string;
  dimensions: string;
  description: string;
  slug?: string;
}

export default function ShapeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/models_database.json')
      .then((res) => res.json())
      .then((data: Shape[]) => {
        setShapes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading database:', err);
        setLoading(false);
      });
  }, []);

  const shape = useMemo(() => {
    return shapes.find((s: any) => String(s.slug) === String(id) || String(s.id) === String(id));
  }, [shapes, id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
        <div className="w-8 h-8 border-3 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm">Loading structural specifications...</p>
      </div>
    );
  }

  if (!shape) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100 px-6 text-center">
        <Box className="w-12 h-12 text-neutral-600 mb-4 animate-pulse" />
        <h1 className="text-2xl font-black mb-2">Model Not Found</h1>
        <p className="text-sm text-neutral-400 mb-6 max-w-sm">
          We could not find a packaging shape with ID #{id} in our 3D Spec database.
        </p>
        <Link to="/solutions/catalog" className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-6 py-3 rounded-xl transition-all">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const isPouchDomain = getDomain() === 'pouch';

  // Determine category type
  let categoryName = 'Rigid Container';
  let categoryKey = 'bottle';
  if (shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒')) {
    categoryName = 'Paper Box';
    categoryKey = 'box';
  } else if (shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋')) {
    categoryName = 'Flexible Pouch';
    categoryKey = 'pouch';
  }

  // Detect current language from pathname
  const location = useLocation();
  const getLanguageFromPath = (pathStr: string) => {
    const parts = pathStr.split('/').filter(Boolean);
    const possibleLang = parts[0]?.toLowerCase();
    if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
      return possibleLang;
    }
    return 'en';
  };
  const currentLang = getLanguageFromPath(location.pathname);

  // Construct localized meta title and description
  const localizedMeta = useMemo(() => {
    const cleanDimensions = shape.dimensions || (isPouchDomain ? 'Dynamic parameters' : 'variable parameters');
    
    if (isPouchDomain) {
      // Pouch.eco
      switch (currentLang) {
        case 'es':
          return {
            title: `Pouch.eco | Forma de ${shape.name} Personalizada #${shape.id}`,
            description: `Diseñe y exporte empaques personalizados para ${shape.name}. Modelo ID #${shape.id}. Disponible en películas biodegradables y PE reciclado posconsumo.`
          };
        case 'fr':
          return {
            title: `Pouch.eco | Forme de ${shape.name} Personnalisée #${shape.id}`,
            description: `Concevez et exportez des emballages personnalisés pour ${shape.name}. Modèle ID #${shape.id}. Disponible en films biodégradables et PE recyclé post-consommation.`
          };
        case 'zh-tw':
          return {
            title: `Pouch.eco | 客製化 ${shape.name} 形狀 #${shape.id}`,
            description: `為 ${shape.name} 設計並匯出客製化包裝。型號 ID #${shape.id}。提供生物可降解薄膜和消費後回收 PE。`
          };
        default:
          return {
            title: `Pouch.eco | Custom ${shape.name} Shape #${shape.id}`,
            description: `Design and export custom packaging for ${shape.name}. Model ID #${shape.id}. Available in biodegradable films and post-consumer recycled PE.`
          };
      }
    } else {
      // AchievePack
      switch (currentLang) {
        case 'es':
          return {
            title: `Personalizado ${shape.name} | Modelo #${shape.id} Especificaciones 3D | AchievePack`,
            description: `Adquiera ${shape.name} impreso a medida (Modelo ID: #${shape.id}). Configure dimensiones personalizadas (${cleanDimensions}) directamente en nuestro Estudio de Preimpresión 3D interactivo.`
          };
        case 'fr':
          return {
            title: `Personnalisé ${shape.name} | Modèle #${shape.id} Spécifications 3D | AchievePack`,
            description: `Commandez ${shape.name} personnalisé (Modèle ID: #${shape.id}). Configurez les dimensions (${cleanDimensions}) directement dans notre Studio de Prépresse 3D interactif.`
          };
        case 'zh-tw':
          return {
            title: `客製化 ${shape.name} | 型號 #${shape.id} 結構 3D 規格 | AchievePack`,
            description: `採購客製化印刷 ${shape.name}（型號 ID：#${shape.id}）。在我們的互動式 3D 印前設計室中直接配置自訂尺寸（${cleanDimensions}）。`
          };
        default:
          return {
            title: `Custom ${shape.name} | Model #${shape.id} Structural 3D Specs | AchievePack`,
            description: `Sourcing custom printed ${shape.name} (Model ID: #${shape.id}). Configure custom dimensions (${cleanDimensions}) directly in our interactive 3D Prepress Studio.`
          };
      }
    }
  }, [shape, currentLang, isPouchDomain]);

  // Construct canonical and hreflang alternate links
  const seoLinks = useMemo(() => {
    const baseUrl = isPouchDomain ? 'https://pouch.eco' : 'https://achievepack.com';
    const cleanRoute = `/solutions/shapes/${shape.slug || shape.id}`;
    
    // Canonical link
    const canonical = currentLang === 'en' 
      ? `${baseUrl}${cleanRoute}` 
      : `${baseUrl}/${currentLang}${cleanRoute}`;
      
    // Alternates
    const alternates = [
      { lang: 'x-default', href: `${baseUrl}${cleanRoute}` },
      { lang: 'en', href: `${baseUrl}${cleanRoute}` },
      { lang: 'fr', href: `${baseUrl}/fr${cleanRoute}` },
      { lang: 'es', href: `${baseUrl}/es${cleanRoute}` },
      { lang: 'zh-TW', href: `${baseUrl}/zh-tw${cleanRoute}` }
    ];
    
    return { canonical, alternates };
  }, [shape.id, shape.slug, currentLang, isPouchDomain]);

  // AchievePack (AP) Theme Layout
  const renderAPLayout = () => {
    return (
      <>
        <Helmet>
          <title>{localizedMeta.title}</title>
          <meta name="description" content={localizedMeta.description} />
          <link rel="canonical" href={seoLinks.canonical} />
          {seoLinks.alternates.map(alt => (
            <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
          ))}
        </Helmet>
        <SiteHeader />
        <div className="bg-neutral-900 text-neutral-100 min-h-screen py-16 px-6 lg:px-12 pt-[120px] font-sans">
          <div className="max-w-7xl mx-auto mb-8">
            <Link to="/solutions/catalog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-semibold transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Link>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left Column: 3D Canvas Viewport */}
            <div className="bg-neutral-950 border border-neutral-850 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative min-h-[450px]">
              <span className="absolute top-4 left-4 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                {categoryName}
              </span>
              <div className="flex-grow w-full h-[350px] relative">
                <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
              </div>
              <div className="border-t border-neutral-900 pt-4 text-center text-xs text-neutral-500">
                Drag to rotate shape • Scroll to zoom
              </div>
            </div>

            {/* Right Column: Spec metadata details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Model ID: #{shape.id}
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
                  {shape.name}
                </h1>
                <p className="text-base text-neutral-400 leading-relaxed mb-6">
                  {shape.description || `Structural pre-set for commercial-grade ${categoryName.toLowerCase()} packaging. Compatible with pantone matching, custom foil embossing, and eco-friendly finishes.`}
                </p>

                <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 mb-8">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-400" />
                    Structural Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-neutral-500 block mb-0.5">Preset Dimensions</span>
                      <span className="text-neutral-200 font-semibold">{shape.dimensions || 'Fully Customizable'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block mb-0.5">Compatible Materials</span>
                      <span className="text-neutral-200 font-semibold">{categoryKey === 'box' ? 'Kraftboard, Kraft, SBS' : 'Mono-PE, High Barrier EVOH'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block mb-0.5">File Export Formats</span>
                      <span className="text-neutral-200 font-semibold">vector PDF, DXF, AI</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block mb-0.5">Prepress Safety Margins</span>
                      <span className="text-neutral-200 font-semibold">1.5mm bleed standard</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/app?shape=${shape.id}`}
                  className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-center text-sm px-6 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/10 transition-all flex items-center justify-center gap-2"
                >
                  Configure in 3D Studio
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/solutions/catalog"
                  className="border border-neutral-800 hover:border-neutral-700 text-center text-sm px-6 py-4 rounded-xl text-neutral-400 hover:text-white transition-all"
                >
                  Explore similar shapes
                </Link>
              </div>
            </div>

          </div>

          {/* Dynamic Technical Verification Info Block */}
          <div className="max-w-7xl mx-auto border-t border-neutral-850 pt-16">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              Sourcing & Prepress Guidance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-950/60 p-6 rounded-xl border border-neutral-850">
                <h4 className="font-bold text-white text-sm mb-2">1. Vector dieline export</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Upon mapping your logo inside the editor, you can download a flattened vector PDF keyline to align layers inside Illustrator.
                </p>
              </div>
              <div className="bg-neutral-950/60 p-6 rounded-xl border border-neutral-850">
                <h4 className="font-bold text-white text-sm mb-2">2. Pantone color mapping</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Our system supports digital proofing. Set spot colors directly in the dieline canvas to ensure printer ink registration matches.
                </p>
              </div>
              <div className="bg-neutral-950/60 p-6 rounded-xl border border-neutral-850">
                <h4 className="font-bold text-white text-sm mb-2">3. Prototyping & fit check</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Confirm physical sizes before bulk runs. Reach out to our engineers to get an unprinted mockup cut to verify product fit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

  // Pouch.eco (EP) Theme Layout
  const renderEPLayout = () => {
    return (
      <>
        <Helmet>
          <title>{localizedMeta.title}</title>
          <meta name="description" content={localizedMeta.description} />
          <link rel="canonical" href={seoLinks.canonical} />
          {seoLinks.alternates.map(alt => (
            <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
          ))}
        </Helmet>
        <PouchLayout>
          <div className="min-h-screen bg-[#F0F0F0] text-black font-['Space_Grotesk'] pb-16 pt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
              <Link to="/solutions/catalog" className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-black bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#D4FF00] transition-colors">
                ❮ Back to catalog
              </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Left Column: 3D Viewport Neobrutalist style */}
              <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[450px]">
                <div className="flex justify-between items-start mb-4">
                  <NeoBadge color="lime" className="text-[10px] tracking-wider uppercase font-black">
                    {categoryName}
                  </NeoBadge>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-500">ID: #{shape.id}</span>
                </div>
                <div className="flex-grow w-full h-[320px] relative">
                  <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
                </div>
                <div className="text-center font-['JetBrains_Mono'] text-xs font-bold text-neutral-600 border-t-2 border-black pt-4">
                  DRAG TO ROTATE • SCROLL TO ZOOM
                </div>
              </div>

              {/* Right Column: Spec content */}
              <div className="border-4 border-black bg-white p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-black uppercase tracking-tight mb-4 leading-none">
                    {shape.name}
                  </h1>
                  <p className="text-neutral-700 text-sm font-semibold mb-6">
                    {shape.description || `Eco-friendly structural template for packaging. Optimized for high-barrier EVOH laminations, compostable cellulose films, and single-material PE bags.`}
                  </p>

                  <div className="border-2 border-black bg-[#F9F9F9] p-4 font-['Space_Grotesk'] text-sm space-y-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Preset Dimensions:</span>
                      <span>{shape.dimensions || 'Dynamic parameters'}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Carbon Impact:</span>
                      <span className="text-[#00B550]">-35% compared to multi-layer plastic</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-300 pb-1.5 font-bold">
                      <span className="text-neutral-550">Recyclability:</span>
                      <span>100% Recyclable PE / Compostable</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span className="text-neutral-550">Standard MOQ:</span>
                      <span>Starting from 200 pcs</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <NeoButton
                    variant="primary"
                    href={`/app?shape=${shape.id}`}
                    className="w-full text-center py-4 font-black"
                  >
                    Customise in 3D Studio →
                  </NeoButton>
                  <NeoButton
                    variant="dark"
                    href="/solutions/catalog"
                    className="w-full text-center py-3"
                  >
                    Back to all designs
                  </NeoButton>
                </div>
              </div>

            </div>
          </div>
        </PouchLayout>
      </>
    );
  };

  return isPouchDomain ? renderEPLayout() : renderAPLayout();
}
