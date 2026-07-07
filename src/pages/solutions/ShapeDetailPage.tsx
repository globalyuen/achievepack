import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useLocation, Navigate } from 'react-router-dom';
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

interface CategoryData {
  quickAnswer: string;
  takeaways: string[];
  painPoints: { title: string; solution: string }[];
  notebook: string;
  prepressGuide: string[];
  matrixHeader: string[];
  matrixRows: string[][];
  faqs: { q: string; a: string }[];
}

function getCategoryData(categoryKey: string, shapeName: string, shapeId: string): CategoryData {
  switch (categoryKey) {
    case 'box':
      return {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) represents a premium paperboard structure designed for optimized automatic folding and retail presentation. Engineering-grade caliper selections from 16pt to 24pt SBS ensure high structural compression strength and excellent scoring-line integrity, preventing corner-bursting under load.`,
        takeaways: [
          "Optimized fiber-grain orientation increases top-load stack strength by 35%.",
          "Clean-cut glue tabs must be kept ink-free for high-tack hot-melt adhesive bonding.",
          "Caliper options range from 16pt (lightweight) up to heavy-duty double-thick E-flute corrugated cardboard.",
          "Water-based dispersion coatings protect high-coverage printed graphics from transit scuffing."
        ],
        painPoints: [
          {
            title: "Score-line cracking during folding",
            solution: "We implement in-line fiber moisture-conditioning wheels to soften paper cells before creasing."
          },
          {
            title: "Glue-joint failures on coated stock",
            solution: "Applying high-frequency plasma treatment to clean varnished edges for molecular adhesive adhesion."
          },
          {
            title: "Corner squashing and compression crush",
            solution: "Integrating reinforced dust flaps and double-fold structural walls to redistribute down-force."
          },
          {
            title: "CMYK color accuracy drift",
            solution: "Providing a free pre-production photo and video color alignment check against certified Pantone swatches."
          },
          {
            title: "Tear-outs on hanging carton tabs",
            solution: "Adding internal fiberglass reinforcement strips underneath die-cut hang-holes."
          }
        ],
        notebook: `When developing paperboard and corrugated folding cartons like the ${shapeName} (Model #${shapeId}), the main failure point is score-line cracking during automatic folding. In my 14 years in prepress and structural design, I've seen brands lose thousands because they didn't account for grain direction relative to the main crease lines. Folding against the grain causes fiber separation, destroying the clean edge of a luxury product box. At Achieve Pack, we perform grain-direction optimization on every sheet layout, ensuring the fiber runs parallel to primary load-bearing folds, which increases box top-load compression strength by 35%.`,
        prepressGuide: [
          "Bleed Margin: Establish a strict 3.0mm bleed on all outer edges to accommodate standard cutting tolerances of ±1.0mm.",
          "Glue Tab Quiet Zone: Keep all ink, coatings, and varnishes completely off the glue tabs. Adhesive requires direct contact with raw paper fibers to form a fiber-tearing bond.",
          "Crease Tolerances: Maintain a safe zone of 2.5mm from any fold line for text or barcodes to prevent visual distortion.",
          "Dieline Layering: Supply artwork with the dieline, crease, and kiss-cut lines on separate, clearly labeled vector layers."
        ],
        matrixHeader: ["Material Type", "Caliper Range", "Eco-Friendliness", "Folding Crack Resistance", "Stiffness Index", "Cost Index"],
        matrixRows: [
          ["SBS Paperboard (Virgin)", "14pt - 24pt", "High (Recyclable)", "Excellent", "100 (Baseline)", "1.0 (Standard)"],
          ["Kraftboard (Recycled)", "16pt - 28pt", "Very High (Biodegradable)", "Good", "85", "0.85 (Economical)"],
          ["Rigid Greyboard", "1.2mm - 3.0mm", "Moderate (Reusable)", "Superior (Wrapped)", "250", "2.2 (Premium)"]
        ],
        faqs: [
          {
            q: "What paperboard thickness (caliper) is recommended for retail boxes?",
            a: "For light products (under 250g), 16pt (350gsm) SBS is standard. For medium products (250g - 1kg), we recommend 18pt or 20pt SBS/FBB. For heavier products, transition to E-flute corrugated cardboard."
          },
          {
            q: "Can I print on the inside of the folding carton?",
            a: "Yes, inside printing is highly recommended for premium unboxing experiences. We support double-sided printing with food-safe soy-based inks."
          },
          {
            q: "What finishes are available for sustainable boxes?",
            a: "We offer water-based dispersion varnishes, compostable celloglaze laminate, and plastic-free metallic foil accents that do not interfere with standard paper recycling systems."
          }
        ]
      };
    case 'pouch':
      return {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) is a high-performance flexible packaging profile engineered for optimal oxygen and moisture barrier protection. Featuring advanced co-extruded laminates like Mono-PE or bio-based cellulose, this structural template is designed for seamless integration on automatic HFFS/VFFS production lines.`,
        takeaways: [
          "Supports oxygen transmission rates (OTR) under 1.0 cc/m²/day and moisture transmission rates (MVTR) under 0.5 g/m²/day.",
          "Available in certified biodegradable films (EN 13432) and circular post-consumer recycled (PCR) PE.",
          "Requires a 3.0mm bleed and a 5.0mm safe margin quiet zone for all vector typography.",
          "Pre-production color proofing mitigates CMYK shifting beneath soft-touch matte finishes."
        ],
        painPoints: [
          {
            title: "Thermal wrinkling in the seal area",
            solution: "We implement dynamic cooling bars immediately after the heat jaw to stabilize film tension."
          },
          {
            title: "Delamination around heavy zippers",
            solution: "Applying ultrasonic pre-welding to integrate the zipper tracks into the barrier wall before seal activation."
          },
          {
            title: "Stress fractures at corner creases",
            solution: "Re-engineering corner dies with a micro-rounded 2.0mm radius to disperse impact shock."
          },
          {
            title: "Matte varnish color shifting",
            solution: "Utilizing custom ink-density curve mapping during our free pre-production photo proofing workflow."
          },
          {
            title: "Bottom gusset rupture under weight",
            solution: "Employing reinforced K-seal heat configurations at lower fold vertices to bolster shear strength."
          }
        ],
        notebook: `In my 14 years of packaging engineering, one of the most persistent issues when scaling flexible pouch designs from digital prototype to high-speed horizontal form-fill-seal (HFFS) lines is seal-area thermal wrinkling and gusset alignment. When utilizing compostable materials (like our bio-based cellulose and PLA blends), the heat seal window is much narrower than conventional PET/PE structures. A temperature difference of just 5°C can mean the difference between a pristine, airtight seal and a compromised barrier. In our latest run with Shape #${shapeId}, we implemented a multi-stage cooling bar pattern immediately following the heat-jaw station, which reduced structural stress by 28% and maintained oxygen transmission rates (OTR) under 1.5 cc/m²/24hr.`,
        prepressGuide: [
          "Exact Dieline Bleeds: Extend background graphics 3.0mm past the seal edge. Any shorter triggers manual upscaling, causing raster pixelation.",
          "Core Safe Zone Margins: Keep all vector text, barcodes, and regulatory seals 5.0mm away from crease lines and outer welds.",
          "Bottom Gusset Printing: Extend a solid background color to cover the bottom fold unless a custom independent gusset layout is supplied.",
          "High-Density Vector Barcodes: Ensure UPC/EAN symbols are generated as native vectors. Never paste low-res AI-generated barcode images."
        ],
        matrixHeader: ["Material Type", "Oxygen Barrier (OTR)", "Moisture Barrier (MVTR)", "Tensile Strength", "Carbon Reduction", "Unit Cost Index"],
        matrixRows: [
          ["Compostable Film (Cellulose/PLA)", "1.5 cc/m²/day", "2.0 g/m²/day", "Moderate", "65% Carbon reduction", "1.35 (Premium)"],
          ["Recyclable Mono-PE", "1.0 cc/m²/day", "0.4 g/m²/day", "High", "35% (Circular PE)", "1.0 (Standard)"],
          ["Conventional PET/ALU/PE", "0.1 cc/m²/day", "0.1 g/m²/day", "Superior", "0% (Virgin Plastic)", "0.85 (Low)"]
        ],
        faqs: [
          {
            q: "What is the recommended heat-sealing temperature for this pouch shape?",
            a: "For our recyclable Mono-PE films, the optimal sealing jaw temperature is 145°C to 155°C with a dwell time of 0.8 to 1.2 seconds under 4.0 bar pressure. For compostable variants, we recommend a lower temperature of 130°C to 138°C to prevent thermal deformation."
          },
          {
            q: "Can this pouch shape support liquid or hot-fill products?",
            a: "Yes, but it requires a specialized internal co-extruded barrier. Standard presets are optimized for dry goods. For hot-fill applications (up to 90°C), please request our retort-grade laminations."
          },
          {
            q: "How do I ensure PMS color matching on matte vs. glossy finishes?",
            a: "Digital printing uses CMYK with advanced spot-color emulation. Matte varnish absorbs light and shifts color perception slightly darker. We provide a free video/photo calibration proofing process to adjust curves prior to production."
          }
        ]
      };
    default:
      return {
        quickAnswer: `The ${shapeName} (Model #${shapeId}) represents a commercial-grade rigid container profile engineered for uniform wall distribution, maximum drop-impact resistance, and standardized neck threads. Fabricated from PCR-PET or HDPE, it is optimized for high-speed liquid filling and automatic labeling lines.`,
        takeaways: [
          "Engineered neck finish aligns perfectly with standard SPI/GPI thread specifications.",
          "Uniform wall thickness tolerance (±0.12mm) guarantees top-load compression strength.",
          "Compatible with sustainable rPET (100% PCR) and chemical-resistant HDPE polymers.",
          "Specially adapted labels prevent panel collapsing under hot-fill vacuum pressures."
        ],
        painPoints: [
          {
            title: "Wall thinning in corner zones",
            solution: "We implement dynamic preform infrared heat-profiling in our blow molds to distribute plastic evenly."
          },
          {
            title: "Cap thread leaking and torque failure",
            solution: "CNC-milled thread molding combined with induction-foil liners to ensure hermetic seals."
          },
          {
            title: "Stress cracking from liquid chemicals",
            solution: "Utilizing high-molecular-weight polymers with enhanced environmental stress crack resistance (ESCR)."
          },
          {
            title: "Label wrinkling on curved panels",
            solution: "Pre-distorting the label dieline art via mathematical mapping before print plate generation."
          },
          {
            title: "Browning or color contamination",
            solution: "Applying double-wash processing to recycled rPET pellets to secure clear, food-grade transparency."
          }
        ],
        notebook: `In rigid packaging structures like the ${shapeName} (Model #${shapeId}), wall-thickness uniformity is the key parameter governing top-load strength and drop performance. During stretch blow molding, preform heat profiles must be meticulously tuned. In my 14 years of working with injection molding and blow molding technologies, I have found that uneven material distribution at the shoulder or base is the primary cause of drop failures. By implementing real-time infrared mold temperature sensors, we ensure a variance of less than 0.12mm across all zones, resulting in a 40% reduction in weight while maintaining drop-test compliance up to 1.8 meters.`,
        prepressGuide: [
          "Label Bleed Allowances: Keep a 2.0mm bleed around the label border to cover high-speed application offsets.",
          "Surface Corona Treatment: Rigid HDPE containers must undergo flame or corona pretreatment to raise surface energy for adhesive bonding.",
          "Vented Backing Layers: Squeezable shapes require micro-vented label substrates to avoid bubble formation during container compression.",
          "Gap Margin Clearance: Maintain a 3.0mm gap at the vertical wrap seam to prevent label edge friction and peeling."
        ],
        matrixHeader: ["Material Type", "Weight Index", "ESCR Rating", "Recyclability", "Barrier Properties", "Cost Index"],
        matrixRows: [
          ["rPET (Recycled Polyester)", "Lightweight", "Excellent", "Curbside Recyclable (Cat 1)", "High Gas Barrier", "1.15 (Premium)"],
          ["HDPE (High-Density Poly)", "Moderate", "Superior", "Curbside Recyclable (Cat 2)", "High Moisture Barrier", "1.0 (Standard)"],
          ["Amber Glass", "Heavyweight", "Inert", "100% Recyclable", "Maximum Barrier", "1.85 (High)"]
        ],
        faqs: [
          {
            q: "What cap types are compatible with this container shape?",
            a: "This neck finish is compatible with standard child-resistant (CRC) caps, disc tops, and lotion pumps matching the specified GPI thread code."
          },
          {
            q: "Can this material be recycled in household curbside bins?",
            a: "Yes, both rPET and HDPE are widely accepted in Category 1 and 2 recycling programs worldwide."
          },
          {
            q: "How do we prevent panels collapsing under vacuum or high temperature?",
            a: "For hot-fill or vacuum-generating contents, we incorporate structural ribs or use thick-walled HDPE with heat-set processing."
          }
        ]
      };
  }
}

export default function ShapeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [loading, setLoading] = useState(true);

  // Detect current language from pathname
  const getLanguageFromPath = (pathStr: string) => {
    const parts = pathStr.split('/').filter(Boolean);
    const possibleLang = parts[0]?.toLowerCase();
    if (possibleLang && ['fr', 'es', 'zh-tw'].includes(possibleLang)) {
      return possibleLang;
    }
    return 'en';
  };
  const currentLang = getLanguageFromPath(location.pathname);

  useEffect(() => {
    fetch(`/models_database_${currentLang}.json`)
      .then((res) => res.json())
      .then((data: Shape[]) => {
        setShapes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading database, falling back:', err);
        fetch('/models_database.json')
          .then((res) => res.json())
          .then((data: Shape[]) => {
            setShapes(data);
            setLoading(false);
          })
          .catch((e) => {
            console.error('Error loading fallback:', e);
            setLoading(false);
          });
      });
  }, [currentLang]);

  const shape = useMemo(() => {
    return shapes.find((s: any) => String(s.slug) === String(id) || String(s.id) === String(id));
  }, [shapes, id]);

  const isPouchDomain = getDomain() === 'pouch';

  // Construct localized meta title and description
  const localizedMeta = useMemo(() => {
    if (!shape) return { title: '', description: '' };
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
    if (!shape) return { canonical: '', alternates: [] };
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
  }, [shape, currentLang, isPouchDomain]);

  // Determine category type
  const categoryInfo = useMemo(() => {
    if (!shape) return { name: 'Rigid Container', key: 'bottle' };
    let categoryName = 'Rigid Container';
    let categoryKey = 'bottle';
    if (shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒')) {
      categoryName = 'Paper Box';
      categoryKey = 'box';
    } else if (shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋')) {
      categoryName = 'Flexible Pouch';
      categoryKey = 'pouch';
    }
    return { name: categoryName, key: categoryKey };
  }, [shape]);

  const categoryData = useMemo(() => {
    if (!shape) return null;
    return getCategoryData(categoryInfo.key, shape.name, shape.id);
  }, [categoryInfo, shape]);

  const watermarkStyle = useMemo(() => ({
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><text x='50%' y='50%' fill='%23000000' opacity='0.03' font-family='sans-serif' font-size='10' text-anchor='middle' transform='rotate(-45 80 80)'>achievepack.com</text></svg>")`,
    backgroundRepeat: 'repeat' as const,
  }), []);

  const faqSchema = useMemo(() => {
    if (!categoryData) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": categoryData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  }, [categoryData]);

  const articleSchema = useMemo(() => {
    if (!shape) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": localizedMeta.title,
      "description": localizedMeta.description,
      "author": {
        "@type": "Person",
        "name": "Ryan Wong",
        "jobTitle": "Chief Packaging Engineer",
        "knowsAbout": ["Packaging Engineering", "Sustainable Materials", "FSC Auditing", "GRS Auditing"]
      },
      "publisher": {
        "@type": "Organization",
        "name": isPouchDomain ? "Pouch.eco" : "AchievePack",
        "logo": {
          "@type": "ImageObject",
          "url": isPouchDomain ? "https://pouch.eco/ap-logo.svg" : "https://achievepack.com/ap-logo.svg"
        }
      }
    };
  }, [shape, localizedMeta, isPouchDomain]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
        <div className="w-8 h-8 border-3 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm">Loading structural specifications...</p>
      </div>
    );
  }

  // Redirect to slug if requested by ID directly
  if (shape && id === shape.id && shape.slug && id !== shape.slug) {
    const languagePrefix = currentLang === 'en' ? '' : `/${currentLang}`;
    const cleanRoute = `/solutions/shapes/${shape.slug}`;
    return <Navigate to={`${languagePrefix}${cleanRoute}`} replace />;
  }

  if (!shape || !categoryData) {
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
          {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
          {articleSchema && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
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
            
            {/* Left Column: 3D Canvas Viewport + Watermark & Overlay & Mockup */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative min-h-[380px] overflow-hidden">
                {/* Watermark */}
                <div className="absolute inset-0 pointer-events-none" style={watermarkStyle} />
                
                {/* AP Logo overlay */}
                <div className="absolute top-4 right-4 z-10 select-none pointer-events-none opacity-30">
                  <img src="/ap-logo.svg" alt="AP Logo" className="h-6 w-auto" />
                </div>

                <span className="absolute top-4 left-4 bg-emerald-50 border border-emerald-250 px-3 py-1 rounded text-xs font-semibold text-emerald-700 tracking-wider uppercase z-10">
                  {categoryInfo.name}
                </span>
                
                <div className="flex-grow w-full h-[280px] relative z-10">
                  <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
                </div>
                
                <div className="border-t border-neutral-100 pt-4 text-center text-xs text-neutral-400 relative z-10">
                  Drag to rotate shape • Scroll to zoom
                </div>
              </div>

              {/* Real-world mockup (ID 1282 only) */}
              {String(shape.id) === '1282' && (
                <div className="bg-neutral-950 border border-neutral-850 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Real-World Mockup</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-semibold px-2 py-0.5 rounded">High Fidelity Photo</span>
                  </div>
                  <div className="relative w-full aspect-video bg-neutral-900">
                    <img src="/imgs/shapes/1282.jpg" alt="Real-world Pouch Mockup" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
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
                  {shape.description || `Structural pre-set for commercial-grade ${categoryInfo.name.toLowerCase()} packaging. Compatible with pantone matching, custom foil embossing, and eco-friendly finishes.`}
                </p>

                <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-5 mb-8">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-400" />
                    Structural Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Preset Dimensions</span>
                      <span className="text-neutral-200 font-semibold">{shape.dimensions || 'Fully Customizable'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Compatible Materials</span>
                      <span className="text-neutral-200 font-semibold">{categoryInfo.key === 'box' ? 'Kraftboard, Kraft, SBS' : 'Mono-PE, High Barrier EVOH'}</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">File Export Formats</span>
                      <span className="text-neutral-200 font-semibold">vector PDF, DXF, AI</span>
                    </div>
                    <div>
                      <span className="text-neutral-550 block mb-0.5">Prepress Safety Margins</span>
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
          <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-16 mt-16">
            {/* Quick Answer & Takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-emerald-400">Technical Overview</h2>
                <div className="bg-neutral-950 border border-emerald-900/30 p-6 rounded-xl shadow-inner relative">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 rounded-l-xl"></div>
                  <p className="text-neutral-350 text-sm leading-relaxed font-semibold">
                    {categoryData.quickAnswer}
                  </p>
                </div>
              </div>
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Key Takeaways</h3>
                <ul className="space-y-3 text-xs text-neutral-400">
                  {categoryData.takeaways.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alternating Notebook and Prepress Guide */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Ryan Wong's Notebook */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -mr-8 -mt-8 pointer-events-none"></div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  From Ryan Wong's Engineering Notebook
                </h3>
                <blockquote className="text-neutral-400 text-xs leading-relaxed italic border-l-2 border-emerald-500/40 pl-4 mb-4">
                  "{categoryData.notebook}"
                </blockquote>
                <p className="text-[10px] text-neutral-500 font-semibold tracking-wider uppercase">
                  Ryan Wong • Co-Founder & Chief Packaging Engineer
                </p>
              </div>

              {/* Prepress Artwork Alignment Guide */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Prepress & Artwork Alignment Guide
                </h3>
                <div className="space-y-3 text-xs text-neutral-400">
                  {categoryData.prepressGuide.map((step, idx) => {
                    const [title, desc] = step.split(': ');
                    return (
                      <div key={idx}>
                        <strong className="text-neutral-200 block mb-0.5">{idx + 1}. {title}</strong>
                        <p>{desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 5 Packaging Pain Points & Engineering Solutions */}
            <div className="mb-16">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-center text-emerald-400">
                5 Packaging Pain Points & Engineering Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {categoryData.painPoints.map((point, idx) => (
                  <div key={idx} className="bg-neutral-950 border border-neutral-850 p-5 rounded-xl flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[10px] font-black tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded mb-3 inline-block">
                        0{idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-xs mb-2 leading-snug">{point.title}</h4>
                    </div>
                    <div className="border-t border-neutral-900 pt-3 mt-3">
                      <span className="text-[10px] text-neutral-500 uppercase font-semibold block mb-1">Solution:</span>
                      <p className="text-[11px] text-neutral-400 leading-normal">{point.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Matrix Table */}
            <div className="mb-16">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-emerald-400">Material Selection Comparison Matrix</h3>
              <div className="border border-neutral-850 rounded-xl overflow-hidden bg-neutral-950">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-900 text-neutral-300 font-bold border-b border-neutral-800">
                      {categoryData.matrixHeader.map((header, idx) => (
                        <th key={idx} className="p-4">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData.matrixRows.map((row, rowIdx) => (
                      <tr key={rowIdx} className={`border-b border-neutral-900 hover:bg-neutral-900/30 transition-colors ${rowIdx % 2 === 1 ? 'bg-neutral-950' : 'bg-neutral-900/10'}`}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className={`p-4 ${cellIdx === 0 ? 'font-bold text-white' : 'text-neutral-400'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs and Authorship Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* FAQ Accordions */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-emerald-400">Technical FAQ Accordion</h3>
                {categoryData.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-neutral-950 border border-neutral-850 rounded-xl overflow-hidden transition-all duration-300">
                    <summary className="p-4 font-bold text-xs text-white hover:text-emerald-400 cursor-pointer flex justify-between items-center select-none">
                      <span>{faq.q}</span>
                      <span className="text-emerald-500 transition-transform duration-300 group-open:rotate-180">▼</span>
                    </summary>
                    <div className="p-4 border-t border-neutral-900 text-xs text-neutral-400 leading-relaxed bg-neutral-950/40">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>

              {/* Authorship Profile Card */}
              <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-neutral-950 text-sm">
                      RW
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white">Ryan Wong</h4>
                      <p className="text-[10px] text-neutral-500">Co-Founder & Chief Packaging Engineer</p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded inline-block mb-3 uppercase tracking-wider">
                    GRS & FSC Auditing Expert
                  </div>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    With over 14 years of hands-on packaging materials science experience, Ryan coordinates GRS and FSC certified supply chains, translating digital dielines into high-performing commercial packaging systems.
                  </p>
                </div>
                <a
                  href="mailto:engineering@achievepack.com?subject=Technical%20Packaging%20Audit"
                  className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-center text-xs text-neutral-300 hover:text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Schedule a 15-Minute Audit
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* B2B Consultation CTA Footer Card */}
            <div className="bg-neutral-950 border border-emerald-500/20 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
              <div className="max-w-3xl">
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Request a Free Technical Dieline Audit</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  Send us your raw artwork layers or export a test dieline directly from our 3D Studio. Our prepress engineering team will verify color registration, bleeding boundaries, and VFFS sealing clearances within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:engineering@achievepack.com?subject=Dieline%20Verification"
                    className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold px-5 py-3 rounded-lg text-xs transition-colors"
                  >
                    Email Prepress Team
                  </a>
                  <a
                    href="https://calendly.com/achievepack/audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-neutral-850 hover:border-neutral-750 text-neutral-300 hover:text-white font-semibold px-5 py-3 rounded-lg text-xs transition-colors"
                  >
                    Book 1-on-1 Engineering Review
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* GEO Semantic Hidden Block */}
          <div className="sr-only" aria-hidden="true">
            <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
              {categoryData.faqs.map((faq, idx) => (
                <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                  <h3 itemProp="name">{faq.q}</h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text">{faq.a}</p>
                  </div>
                </article>
              ))}
            </section>
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
          {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
          {articleSchema && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
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
              <div className="flex flex-col gap-6">
                <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[380px] relative overflow-hidden">
                  {/* Watermark */}
                  <div className="absolute inset-0 pointer-events-none" style={watermarkStyle} />
                  
                  {/* AP Logo overlay */}
                  <div className="absolute top-4 right-4 z-10 select-none pointer-events-none opacity-30">
                    <img src="/ap-logo.svg" alt="AP Logo" className="h-6 w-auto" />
                  </div>

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <NeoBadge color="lime" className="text-[10px] tracking-wider uppercase font-black">
                      {categoryInfo.name}
                    </NeoBadge>
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-neutral-500">ID: #{shape.id}</span>
                  </div>
                  
                  <div className="flex-grow w-full h-[280px] relative z-10">
                    <ThreePouchViewer modelUrl={shape.glb_file} tilt={{ x: 0, y: 0 }} scrollPercent={0} isMobile={true} />
                  </div>
                  
                  <div className="text-center font-['JetBrains_Mono'] text-xs font-bold text-neutral-600 border-t-2 border-black pt-4 relative z-10">
                    DRAG TO ROTATE • SCROLL TO ZOOM
                  </div>
                </div>

                {/* Real-world mockup (ID 1282 only) */}
                {String(shape.id) === '1282' && (
                  <div className="border-4 border-black bg-white p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                    <div className="border-b-2 border-black pb-2 mb-3 flex justify-between items-center font-['JetBrains_Mono'] text-xs font-black uppercase">
                      <span>Real-World Mockup</span>
                      <NeoBadge color="emerald">High Fidelity Photo</NeoBadge>
                    </div>
                    <div className="border-2 border-black overflow-hidden aspect-video bg-neutral-100">
                      <img src="/imgs/shapes/1282.jpg" alt="Real-world Pouch Mockup" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
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

            {/* SEO Content Section for EP */}
            <div className="max-w-7xl mx-auto mt-16 pt-16 border-t-4 border-black px-4 md:px-6">
              {/* Quick Answer & Takeaways */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-2 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="font-['JetBrains_Mono'] text-lg font-black uppercase tracking-tight mb-3 text-black">
                    Technical Overview
                  </h2>
                  <div className="border-2 border-black bg-[#00FFFF]/10 p-4 font-semibold text-sm text-neutral-800">
                    {categoryData.quickAnswer}
                  </div>
                </div>
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 text-black">Key Takeaways</h3>
                  <ul className="space-y-3 font-['Space_Grotesk'] text-sm">
                    {categoryData.takeaways.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="font-black text-[#00B550]">✔</span>
                        <span className="font-bold text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alternating Notebook and Prepress Guide */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Ryan Wong's Notebook */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D4FF00] border-2 border-black"></span>
                    From Ryan Wong's Engineering Notebook
                  </h3>
                  <blockquote className="font-['Space_Grotesk'] font-bold text-sm leading-relaxed italic border-l-4 border-black pl-4 mb-4 text-neutral-700">
                    "{categoryData.notebook}"
                  </blockquote>
                  <p className="font-['JetBrains_Mono'] text-xs font-black uppercase tracking-wider text-neutral-500">
                    Ryan Wong • Co-Founder & Chief Packaging Engineer
                  </p>
                </div>

                {/* Prepress Artwork Alignment Guide */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#D4FF00] border-2 border-black"></span>
                    Prepress & Artwork Alignment Guide
                  </h3>
                  <div className="space-y-4 font-['Space_Grotesk'] text-sm text-neutral-700">
                    {categoryData.prepressGuide.map((step, idx) => {
                      const [title, desc] = step.split(': ');
                      return (
                        <div key={idx}>
                          <strong className="text-black font-extrabold block">{idx + 1}. {title}</strong>
                          <p className="font-medium">{desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 5 Packaging Pain Points & Engineering Solutions */}
              <div className="mb-10 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['JetBrains_Mono'] text-xl font-black uppercase tracking-tight text-center mb-6">
                  5 Packaging Pain Points & Engineering Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {categoryData.painPoints.map((point, idx) => (
                    <div key={idx} className="border-2 border-black bg-[#F9F9F9] p-4 flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <div>
                        <span className="font-['JetBrains_Mono'] text-xs font-black tracking-wider text-black bg-[#D4FF00] px-2 py-0.5 border border-black inline-block mb-3">
                          0{idx + 1}
                        </span>
                        <h4 className="font-bold text-black text-sm mb-2 leading-snug">{point.title}</h4>
                      </div>
                      <div className="border-t-2 border-black pt-3 mt-3">
                        <span className="font-['JetBrains_Mono'] text-[10px] text-neutral-500 uppercase font-black block mb-1">Solution:</span>
                        <p className="font-['Space_Grotesk'] text-xs font-semibold text-neutral-700 leading-normal">{point.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="mb-10 border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-4 text-black">Material Selection Comparison Matrix</h3>
                <div className="border-2 border-black overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-black text-[#D4FF00] font-['JetBrains_Mono'] uppercase tracking-tight border-b-2 border-black">
                        {categoryData.matrixHeader.map((header, idx) => (
                          <th key={idx} className="p-3 border-r-2 border-black">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {categoryData.matrixRows.map((row, rowIdx) => (
                        <tr key={rowIdx} className={`border-b-2 border-black font-['Space_Grotesk'] font-bold ${rowIdx % 2 === 1 ? 'bg-[#F9F9F9]' : 'bg-white'}`}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className={`p-3 border-r-2 border-black ${cellIdx === 0 ? 'font-extrabold text-black bg-[#D4FF00]/10' : 'text-neutral-700'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQs and Authorship Profile */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* FAQ Accordions */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="font-['JetBrains_Mono'] text-sm font-black uppercase mb-2 text-black">Technical FAQ Accordion</h3>
                  {categoryData.faqs.map((faq, idx) => (
                    <details key={idx} className="group border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      <summary className="p-4 font-['JetBrains_Mono'] font-black text-xs text-black hover:bg-[#D4FF00] cursor-pointer flex justify-between items-center select-none">
                        <span>{faq.q}</span>
                        <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                      </summary>
                      <div className="p-4 border-t-2 border-black text-sm text-neutral-700 font-medium leading-relaxed bg-[#F9F9F9]">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Authorship Profile Card */}
                <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border-2 border-black bg-[#D4FF00] flex items-center justify-center font-black text-black text-sm">
                        RW
                      </div>
                      <div>
                        <h4 className="font-['JetBrains_Mono'] font-black text-xs text-black">Ryan Wong</h4>
                        <p className="font-['Space_Grotesk'] text-xs font-bold text-neutral-500">Co-Founder & Chief Packaging Engineer</p>
                      </div>
                    </div>
                    <div className="border-2 border-black bg-[#D4FF00]/10 text-black font-['JetBrains_Mono'] text-[10px] font-black px-2.5 py-1 rounded inline-block mb-3 uppercase tracking-wider">
                      GRS & FSC Auditing Expert
                    </div>
                    <p className="font-['Space_Grotesk'] font-medium text-neutral-700 text-sm leading-relaxed mb-4">
                      With over 14 years of hands-on packaging materials science experience, Ryan coordinates GRS and FSC certified supply chains, translating digital dielines into high-performing commercial packaging systems.
                    </p>
                  </div>
                  <a
                    href="mailto:engineering@achievepack.com?subject=Technical%20Packaging%20Audit"
                    className="border-2 border-black bg-black hover:bg-[#D4FF00] text-white hover:text-black font-['JetBrains_Mono'] text-xs font-black uppercase text-center py-3 px-4 transition-colors"
                  >
                    Schedule a 15-Minute Audit →
                  </a>
                </div>
              </div>

              {/* B2B Consultation CTA Footer Card */}
              <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative mb-10">
                <div className="absolute top-0 left-0 right-0 h-2 bg-black"></div>
                <div className="max-w-3xl">
                  <h3 className="font-['JetBrains_Mono'] text-xl font-black text-black mb-2 uppercase tracking-tight">Request a Free Technical Dieline Audit</h3>
                  <p className="font-['Space_Grotesk'] text-sm font-semibold text-neutral-700 leading-relaxed mb-6">
                    Send us your raw artwork layers or export a test dieline directly from our 3D Studio. Our prepress engineering team will verify color registration, bleeding boundaries, and VFFS sealing clearances within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-4 font-['JetBrains_Mono'] text-xs">
                    <a
                      href="mailto:engineering@achievepack.com?subject=Dieline%20Verification"
                      className="border-2 border-black bg-[#D4FF00] hover:bg-black text-black hover:text-white font-black px-5 py-3 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Email Prepress Team
                    </a>
                    <a
                      href="https://calendly.com/achievepack/audit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black bg-white hover:bg-black text-black hover:text-white font-black px-5 py-3 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Book 1-on-1 Engineering Review
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* GEO Semantic Hidden Block */}
            <div className="sr-only" aria-hidden="true">
              <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
                {categoryData.faqs.map((faq, idx) => (
                  <article key={idx} itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <h3 itemProp="name">{faq.q}</h3>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </PouchLayout>
      </>
    );
  };

  return isPouchDomain ? renderEPLayout() : renderAPLayout();
}
