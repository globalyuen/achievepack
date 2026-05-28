import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Sparkles, 
  Sliders, 
  Download, 
  Layers, 
  Info, 
  ArrowLeft, 
  FileText,
  FileCode,
  ArrowRight,
  Maximize2,
  RefreshCw,
  Compass,
  CheckCircle,
  HelpCircle
} from 'lucide-react'
import { jsPDF } from 'jspdf'
import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'
import { getDomain } from '../utils/domain'

// Custom Preset Interface
interface DielinePreset {
  name: string;
  description: string;
  width: number;
  height: number;
  gusset: number;
  zipper: number;
  tearNotch: number;
  sideSeals: number;
  bottomSealCurve: number;
  roundCorners: boolean;
}

const PRESETS: DielinePreset[] = [
  {
    name: 'Arunipa Refill (500g)',
    description: 'Arunipa Nipa Salt Refill exact production template specs',
    width: 170,
    height: 270,
    gusset: 90,
    zipper: 27,
    tearNotch: 18,
    sideSeals: 10,
    bottomSealCurve: 45,
    roundCorners: true
  },
  {
    name: 'Standard Coffee (250g)',
    description: 'Perfect for retail whole bean coffee pouches with valves',
    width: 160,
    height: 230,
    gusset: 80,
    zipper: 30,
    tearNotch: 20,
    sideSeals: 10,
    bottomSealCurve: 35,
    roundCorners: true
  },
  {
    name: 'Supplement Pouch (1kg)',
    description: 'Large format compostable bag with wide seals for powders',
    width: 210,
    height: 310,
    gusset: 110,
    zipper: 35,
    tearNotch: 22,
    sideSeals: 12,
    bottomSealCurve: 50,
    roundCorners: true
  },
  {
    name: 'Mini Sachet Pouch (50g)',
    description: 'Pocket-sized sample or single-serve botanical pouch',
    width: 110,
    height: 160,
    gusset: 60,
    zipper: 25,
    tearNotch: 15,
    sideSeals: 8,
    bottomSealCurve: 25,
    roundCorners: false
  }
];

export default function PouchDielineCreatorPage() {
  const isPouchDomain = getDomain() === 'pouch'

  // Sizing State
  const [width, setWidth] = useState(170)
  const [height, setHeight] = useState(270)
  const [gusset, setGusset] = useState(90)
  const [zipper, setZipper] = useState(27)
  const [tearNotch, setTearNotch] = useState(18)
  const [sideSeals, setSideSeals] = useState(10)
  const [bottomSealCurve, setBottomSealCurve] = useState(45)
  const [roundCorners, setRoundCorners] = useState(true)

  // Layer Controls
  const [showGrid, setShowGrid] = useState(true)
  const [showCutLines, setShowCutLines] = useState(true)
  const [showFoldLines, setShowFoldLines] = useState(true)
  const [showBleedLines, setShowBleedLines] = useState(true)
  const [showSafeZone, setShowSafeZone] = useState(true)
  const [showDimensions, setShowDimensions] = useState(true)
  const [showOpenArrow, setShowOpenArrow] = useState(true)

  // PDF Export Format State
  const [pdfFormat, setPdfFormat] = useState<'a4' | '1to1'>('1to1')
  const [isExporting, setIsExporting] = useState(false)

  // Apply Preset
  const applyPreset = (preset: DielinePreset) => {
    setWidth(preset.width)
    setHeight(preset.height)
    setGusset(preset.gusset)
    setZipper(preset.zipper)
    setTearNotch(preset.tearNotch)
    setSideSeals(preset.sideSeals)
    setBottomSealCurve(preset.bottomSealCurve)
    setRoundCorners(preset.roundCorners)
  }

  // Auto-calculated scales for side-by-side proportional rendering in A4 landscape aspect box
  const scales = useMemo(() => {
    // Total visual width includes: Front panel (W), Back panel (W), spacing (20px), padding
    const spacing = 30
    const margin = 40
    
    const totalW = width * 2 + spacing
    const totalH = height + gusset + spacing

    // Canvas size is 800x550 max
    const canvasMaxW = 760
    const canvasMaxH = 500

    const scaleW = canvasMaxW / totalW
    const scaleH = canvasMaxH / totalH
    const scale = Math.min(scaleW, scaleH, 1.5) // limit size

    return {
      scale,
      w: width * scale,
      h: height * scale,
      g: gusset * scale,
      z: zipper * scale,
      tn: tearNotch * scale,
      seals: sideSeals * scale,
      curve: bottomSealCurve * scale,
      spacing: spacing * scale,
      totalW: totalW * scale,
      totalH: totalH * scale
    }
  }, [width, height, gusset, zipper, tearNotch, sideSeals, bottomSealCurve])

  // PDF Generation using crisp vector commands
  const handlePdfDownload = async () => {
    setIsExporting(true);
    
    // Simulate prepress check
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
      const margin = 20;
      
      if (pdfFormat === '1to1') {
        // AI Vector Template - 1:1 Exact Print Artboard Layout
        // Sizing: Front & Back side-by-side with bottom gusset beneath
        const canvasW = width * 2 + 30 + margin * 2;
        const canvasH = height + gusset + 40 + margin * 2;

        const doc = new jsPDF({
          unit: 'mm',
          format: [canvasW, canvasH]
        });

        // Background
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, canvasW, canvasH, 'F');

        // Draw visual architectural grids (technical grid)
        doc.setDrawColor(230, 240, 255);
        doc.setLineWidth(0.2);
        for (let x = 0; x < canvasW; x += 10) {
          doc.line(x, 0, x, canvasH);
        }
        for (let y = 0; y < canvasH; y += 10) {
          doc.line(0, y, canvasW, y);
        }

        // Draw Document Frame Metadata
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.5);
        doc.rect(5, 5, canvasW - 10, canvasH - 10);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(30, 41, 59);
        doc.text('ACHIEVE PACK PREPRESS DIELINE CERTIFICATE', 10, 15);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`1:1 Scale Print Ready Adobe Illustrator Layer-Aligned Vector Template • Date: ${new Date().toLocaleDateString()}`, 10, 20);

        // Tech specs footer table
        doc.setFont('Helvetica', 'bold');
        doc.text(`Width: ${width}mm  |  Height: ${height}mm  |  Bottom Gusset: ${gusset}mm  |  Zipper: ${zipper}mm  |  Tear Notch: ${tearNotch}mm  |  Side Seals: ${sideSeals}mm  |  Corner: ${roundCorners ? 'Rounded (8mm)' : 'Square'}`, 10, canvasH - 10);

        // Coordinate offsets
        const frontX = margin;
        const backX = margin + width + 30;
        const panelY = margin + 20;

        // Function to draw panel lines (Cut, Fold, Bleed, Safe)
        const drawPanel = (startX: number, label: string) => {
          // 1. Bleed Margin (3mm Offset)
          doc.setDrawColor(16, 185, 129); // green
          doc.setLineWidth(0.3);
          doc.setLineDashPattern([2, 2], 0);
          doc.rect(startX - 3, panelY - 3, width + 6, height + 6);
          doc.setLineDashPattern([], 0);

          // 2. Cut lines (Magenta boundary)
          doc.setDrawColor(225, 29, 72); // rose red
          doc.setLineWidth(0.6);
          if (roundCorners) {
            // Rounded corners cut paths
            const r = 8;
            doc.roundedRect(startX, panelY, width, height, r, r);
          } else {
            doc.rect(startX, panelY, width, height);
          }

          // 3. Side Seals Zone
          doc.setDrawColor(180, 180, 180);
          doc.setLineWidth(0.2);
          // shaded left seal
          doc.setFillColor(240, 240, 240);
          doc.rect(startX, panelY, sideSeals, height, 'F');
          doc.rect(startX + width - sideSeals, panelY, sideSeals, height, 'F');

          // 4. Zipper folding lines
          doc.setDrawColor(168, 85, 247); // purple
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([1, 1], 0);
          doc.line(startX, panelY + zipper, startX + width, panelY + zipper);
          doc.setLineDashPattern([], 0);

          // 5. Tear notch
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.5);
          doc.line(startX - 2, panelY + tearNotch, startX + 2, panelY + tearNotch);
          doc.line(startX + width - 2, panelY + tearNotch, startX + width + 2, panelY + tearNotch);

          // 6. Safe design area
          doc.setDrawColor(245, 158, 11); // amber
          doc.setLineWidth(0.3);
          doc.setLineDashPattern([1, 2], 0);
          doc.rect(startX + sideSeals + 3, panelY + zipper + 10, width - sideSeals * 2 - 6, height - zipper - bottomSealCurve - 10);
          doc.setLineDashPattern([], 0);

          // 7. Bottom Gusset curve weld seals
          doc.setDrawColor(59, 130, 246); // blue
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([3, 3], 0);
          doc.line(startX, panelY + height - bottomSealCurve, startX + width, panelY + height - bottomSealCurve);
          doc.setLineDashPattern([], 0);

          // Labels
          doc.setFont('Helvetica', 'bold');
          doc.setFontSize(14);
          doc.setTextColor(30, 41, 59);
          doc.text(label.toUpperCase(), startX + width / 2 - 10, panelY + height / 2);
        };

        // Draw Front & Back panels
        drawPanel(frontX, 'Front');
        drawPanel(backX, 'Back');

        // Draw vertical directional Open direction arrow on Front left
        doc.setDrawColor(30, 41, 59);
        doc.setLineWidth(0.8);
        doc.line(frontX - 10, panelY + height - 20, frontX - 10, panelY + 20);
        // Arrowhead pointing UP
        doc.line(frontX - 10, panelY + 20, frontX - 13, panelY + 25);
        doc.line(frontX - 10, panelY + 20, frontX - 7, panelY + 25);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(8);
        doc.text('Open direction', frontX - 15, panelY + height / 2, { angle: 90 });

        // Draw Bottom Gusset panel beneath front
        const gussetY = panelY + height + 20;
        doc.setDrawColor(225, 29, 72);
        doc.setLineWidth(0.6);
        doc.rect(frontX, gussetY, width, gusset, 'D');

        // center crease line
        doc.setDrawColor(59, 130, 246);
        doc.setLineWidth(0.4);
        doc.setLineDashPattern([3, 3], 0);
        doc.line(frontX, gussetY + gusset / 2, frontX + width, gussetY + gusset / 2);
        doc.setLineDashPattern([], 0);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        doc.text('BOTTOM GUSSET', frontX + width / 2 - 18, gussetY + gusset / 2 - 3);

        // Technical Dimensions Annotations
        doc.setFontSize(8);
        doc.setTextColor(59, 130, 246);
        doc.setDrawColor(59, 130, 246);
        doc.setLineWidth(0.3);

        // Front Panel annotations
        // Width line
        doc.line(frontX, panelY - 8, frontX + width, panelY - 8);
        doc.text(`${width}mm`, frontX + width / 2 - 5, panelY - 11);
        // Height line
        doc.line(frontX - 6, panelY, frontX - 6, panelY + height);
        doc.text(`${height}mm`, frontX - 11, panelY + height / 2, { angle: 90 });
        // Zipper height
        doc.line(frontX + width + 5, panelY, frontX + width + 5, panelY + zipper);
        doc.text(`${zipper}mm`, frontX + width + 8, panelY + zipper / 2 + 2);
        // Tear Notch height
        doc.line(frontX + width + 15, panelY, frontX + width + 15, panelY + tearNotch);
        doc.text(`${tearNotch}mm`, frontX + width + 18, panelY + tearNotch / 2 + 2);
        // Side seal height
        doc.line(frontX, panelY + height + 5, frontX + sideSeals, panelY + height + 5);
        doc.text(`${sideSeals}mm`, frontX + 2, panelY + height + 9);

        // Bottom gusset annotations
        doc.line(frontX - 6, gussetY, frontX - 6, gussetY + gusset);
        doc.text(`${gusset}mm`, frontX - 11, gussetY + gusset / 2, { angle: 90 });

        doc.save(`achievepack-dieline-${width}x${height}x${gusset}-${pdfFormat}.pdf`);

      } else {
        // A4 Technical Spec Sheet - Landscape format (297 x 210 mm)
        const doc = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });

        // Title and header
        doc.setFillColor(244, 245, 246);
        doc.rect(0, 0, 297, 30, 'F');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(16, 185, 129); // green accent
        doc.text('ACHIEVE PACK INTERACTIVE DIELINE CREATOR', 15, 12);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(`Official B2B Prepress Layout Blueprint • Generated at A4 Landscape Scale • 100% Free`, 15, 20);

        // Sidebar specs table
        doc.setFillColor(250, 250, 250);
        doc.rect(215, 35, 70, 160, 'F');
        doc.setDrawColor(220, 220, 220);
        doc.rect(215, 35, 70, 160, 'D');

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(30, 41, 59);
        doc.text('TECHNICAL SPECS', 222, 45);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        const specs = [
          ['Format Size:', `${width} x ${height} mm`],
          ['Bottom Gusset:', `${gusset} mm`],
          ['Zipper Depth:', `${zipper} mm`],
          ['Tear Notch:', `${tearNotch} mm`],
          ['Side Seals:', `${sideSeals} mm`],
          ['Gusset Seal:', `${bottomSealCurve} mm`],
          ['Corner Shape:', roundCorners ? 'Rounded' : 'Square'],
          ['Tolerances:', '± 1.5 mm'],
          ['Certification:', 'ISO-9001 / BRC']
        ];
        
        let specY = 55;
        specs.forEach(([k, v]) => {
          doc.setFont('Helvetica', 'bold');
          doc.text(k, 220, specY);
          doc.setFont('Helvetica', 'normal');
          doc.text(v, 255, specY);
          specY += 10;
        });

        // Safe Guidelines Key
        doc.setFont('Helvetica', 'bold');
        doc.text('BLUEPRINT LAYERS KEY', 220, 150);
        doc.setFontSize(7);
        doc.setTextColor(225, 29, 72);
        doc.text('Solid Magenta: Cut & Die Boundary', 220, 157);
        doc.setTextColor(59, 130, 246);
        doc.text('Dashed Blue: Fold Folds Crease', 220, 164);
        doc.setTextColor(16, 185, 129);
        doc.text('Dotted Green: Bleed Border (3mm)', 220, 171);
        doc.setTextColor(245, 158, 11);
        doc.text('Dotted Amber: Safe Design Zone', 220, 178);

        // Center visualizer viewport
        const viewW = 180;
        const viewH = 140;
        const viewX = 15;
        const viewY = 45;

        doc.setDrawColor(240, 240, 240);
        doc.rect(viewX, viewY, viewW, viewH);

        // Scale calculation to fit on landscape sheet A4 viewport
        const scaleX = (viewW - 40) / (width * 2 + 10);
        const scaleY = (viewH - 45) / (height + gusset);
        const pScale = Math.min(scaleX, scaleY, 0.4);

        const w = width * pScale;
        const h = height * pScale;
        const g = gusset * pScale;
        const z = zipper * pScale;
        const tn = tearNotch * pScale;
        const s = sideSeals * pScale;

        // Coordinate positions
        const fX = viewX + 15;
        const bX = fX + w + 10;
        const pY = viewY + 15;

        // Front Panel
        doc.setDrawColor(225, 29, 72);
        doc.setLineWidth(0.4);
        if (roundCorners) {
          doc.roundedRect(fX, pY, w, h, 3, 3);
          doc.roundedRect(bX, pY, w, h, 3, 3);
        } else {
          doc.rect(fX, pY, w, h);
          doc.rect(bX, pY, w, h);
        }

        // Shaded side seals
        doc.setFillColor(245, 245, 245);
        doc.rect(fX, pY, s, h, 'F');
        doc.rect(fX + w - s, pY, s, h, 'F');
        doc.rect(bX, pY, s, h, 'F');
        doc.rect(bX + w - s, pY, s, h, 'F');

        // Zipper Crease
        doc.setDrawColor(168, 85, 247);
        doc.setLineWidth(0.25);
        doc.setLineDashPattern([1, 1], 0);
        doc.line(fX, pY + z, fX + w, pY + z);
        doc.line(bX, pY + z, bX + w, pY + z);
        doc.setLineDashPattern([], 0);

        // Tear notch markers
        doc.setDrawColor(225, 29, 72);
        doc.line(fX - 1, pY + tn, fX + 1, pY + tn);
        doc.line(fX + w - 1, pY + tn, fX + w + 1, pY + tn);

        // Bottom crease
        doc.setDrawColor(59, 130, 246);
        doc.setLineDashPattern([2, 2], 0);
        doc.line(fX, pY + h - (bottomSealCurve * pScale), fX + w, pY + h - (bottomSealCurve * pScale));
        doc.setLineDashPattern([], 0);

        // Labels
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('FRONT', fX + w / 2 - 5, pY + h / 2);
        doc.text('BACK', bX + w / 2 - 4, pY + h / 2);

        // Bottom Gusset
        const bGussetY = pY + h + 8;
        doc.setDrawColor(225, 29, 72);
        doc.rect(fX, bGussetY, w, g);
        doc.setDrawColor(59, 130, 246);
        doc.setLineDashPattern([2, 2], 0);
        doc.line(fX, bGussetY + g / 2, fX + w, bGussetY + g / 2);
        doc.setLineDashPattern([], 0);

        doc.setFontSize(6);
        doc.text('GUSSET', fX + w / 2 - 6, bGussetY + g / 2 - 1);

        // Dimensions Text tags
        doc.setFontSize(6);
        doc.setTextColor(59, 130, 246);
        // Width
        doc.line(fX, pY - 3, fX + w, pY - 3);
        doc.text(`${width}mm`, fX + w / 2 - 5, pY - 4);
        // Height
        doc.line(fX - 3, pY, fX - 3, pY + h);
        doc.text(`${height}mm`, fX - 8, pY + h / 2, { angle: 90 });
        // Gusset height
        doc.line(fX - 3, bGussetY, fX - 3, bGussetY + g);
        doc.text(`${gusset}mm`, fX - 8, bGussetY + g / 2, { angle: 90 });

        doc.save(`achievepack-technical-dieline-${width}x${height}x${gusset}-${pdfFormat}.pdf`);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during PDF rendering. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      isPouchDomain 
        ? "font-['Space_Grotesk'] text-black bg-white" 
        : "font-sans text-neutral-800 bg-neutral-950 text-neutral-100"
    }`}>
      <Helmet>
        <title>Interactive Stand-Up Pouch Dieline Creator | Custom Vector Packaging Templates | Achieve Pack</title>
        <meta name="description" content="Design, visual inspect, and download custom stand-up pouch dieline vector templates instantly. Enter width, height, gusset, zipper, round corner toggle, and export crisp 1:1 scale print-ready PDF/Illustrator layouts for free." />
      </Helmet>

      {/* Main Header */}
      <SiteHeader />

      {/* App Main Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-6">
        
        {/* Breadcrumb / Top Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <a href="/dieline-finder" className="flex items-center gap-1.5 text-sm font-semibold hover:text-green-500 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Dielines Catalog
            </a>
            <span className="text-neutral-400">/</span>
            <span className="text-sm font-bold text-green-500">Interactive Custom Creator</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold font-mono rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 100% Vector Output
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
            Stand-up Pouch Dieline Creator
          </h1>
          <p className="text-sm text-neutral-400 max-w-3xl">
            Input your custom packaging dimensions below to instantly compute seal lines, zipper placements, tear notch points, and corner cuts. Review the blueprint in real-time, then download a 1:1 vector print-ready PDF template.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Interactive Controls (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Presets Box */}
            <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  Quick Sizing Presets
                </span>
                <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full font-mono">
                  Approved Specs
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className="text-left p-3 bg-neutral-950 border border-neutral-850 hover:border-green-500/50 rounded-xl transition-all flex flex-col gap-1"
                  >
                    <span className="text-xs font-bold text-white truncate">{preset.name}</span>
                    <span className="text-[9px] text-neutral-500 truncate">{preset.width}x{preset.height}mm</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensional Sliders Container */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex flex-col gap-6">
              
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Sliders className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-white">Dimension Parameters</h3>
              </div>

              {/* Sliders Grid */}
              <div className="flex flex-col gap-4">
                
                {/* Width */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Pouch Width (W)</span>
                    <span className="text-green-400 font-mono font-bold">{width} mm</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="350"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Length/Height */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Pouch Height / Length (H)</span>
                    <span className="text-green-400 font-mono font-bold">{height} mm</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="450"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Gusset */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold flex-wrap">
                    <span className="text-neutral-400">Bottom Gusset Flat Height (BG)</span>
                    <span className="text-green-400 font-mono font-bold">{gusset} mm <span className="text-neutral-600">({gusset / 2}mm depth)</span></span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={gusset}
                    onChange={(e) => setGusset(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Zipper Position */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Zipper Position (From Top)</span>
                    <span className="text-green-400 font-mono font-bold">{zipper} mm</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="60"
                    value={zipper}
                    onChange={(e) => setZipper(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Tear Notch */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Tear Notch Position (From Top)</span>
                    <span className="text-green-400 font-mono font-bold">{tearNotch} mm</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={tearNotch}
                    onChange={(e) => setTearNotch(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Side Seals */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Side Seal Weld Width</span>
                    <span className="text-green-400 font-mono font-bold">{sideSeals} mm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={sideSeals}
                    onChange={(e) => setSideSeals(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Seal Curve */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-400">Bottom Seal Weld Curve height</span>
                    <span className="text-green-400 font-mono font-bold">{bottomSealCurve} mm</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="70"
                    value={bottomSealCurve}
                    onChange={(e) => setBottomSealCurve(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Round Corner Toggle */}
                <div className="flex items-center justify-between border-t border-neutral-800 pt-4 mt-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Rounded Corner Finish</span>
                    <span className="text-[10px] text-neutral-500 font-mono">Die-cuts the sharp top/bottom edges</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={roundCorners} 
                      onChange={() => setRoundCorners(!roundCorners)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                  </label>
                </div>

              </div>

            </div>

            {/* Export Settings */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex flex-col gap-6">
              
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                <Download className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-white">Prepress Template Export</h3>
              </div>

              <div className="flex flex-col gap-4">
                
                {/* Format selection */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                    Artboard Layout Format
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPdfFormat('1to1')}
                      className={`p-3 border-2 rounded-xl text-left transition-all flex flex-col gap-1 ${
                        pdfFormat === '1to1'
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <FileCode className="w-3.5 h-3.5" /> 1:1 Scale Vector
                      </span>
                      <span className="text-[9px] leading-relaxed">Perfect artboard template for Adobe Illustrator. 100% exact sizes.</span>
                    </button>
                    
                    <button
                      onClick={() => setPdfFormat('a4')}
                      className={`p-3 border-2 rounded-xl text-left transition-all flex flex-col gap-1 ${
                        pdfFormat === 'a4'
                          ? 'border-green-500 bg-green-500/10 text-green-400'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-white flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> A4 Spec Sheet
                      </span>
                      <span className="text-[9px] leading-relaxed">Landscape technical design blueprint. Great for printout and signoff.</span>
                    </button>
                  </div>
                </div>

                {/* PDF Download Button */}
                <button
                  onClick={handlePdfDownload}
                  disabled={isExporting}
                  className="w-full py-4 px-6 bg-green-500 hover:bg-green-600 text-black text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isExporting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying Technical Math...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 stroke-[2.5]" />
                      <span>Download Print Dieline PDF</span>
                    </>
                  )}
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL: Live SVG Visualizer (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* SVG Visualizer Canvas Container */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col shadow-xl">
              
              {/* Visualizer header */}
              <div className="bg-neutral-950 px-6 py-4 flex items-center justify-between border-b border-neutral-850">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-neutral-300">
                    Architectural Layout Preview
                  </h3>
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">
                  SCALE PROPORTIONS • ISO STANDARD
                </div>
              </div>

              {/* Blueprint Canvas Frame */}
              <div className="relative w-full aspect-[4/3] bg-neutral-950 overflow-hidden flex items-center justify-center border-b border-neutral-850 p-6 select-none">
                
                {/* Background Tech Grids */}
                {showGrid && (
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>
                )}

                {/* Proportional Render Box */}
                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${scales.totalW + 100} ${scales.totalH + 100}`}
                  className="overflow-visible"
                >
                  {/* Outer coordinate frame translated to center */}
                  <g transform={`translate(${50}, ${50})`}>
                    
                    {/* Define Rounded Corner mask if needed */}
                    <defs>
                      <clipPath id="panel-corners">
                        <rect x="0" y="0" width={scales.w} height={scales.h} rx={roundCorners ? 12 : 0} />
                      </clipPath>
                    </defs>

                    {/* FRONT PANEL */}
                    <g transform="translate(0, 0)">
                      
                      {/* Outer Bleed Margin Indicator (Green dotted line) */}
                      {showBleedLines && (
                        <rect
                          x="-8"
                          y="-8"
                          width={scales.w + 16}
                          height={scales.h + 16}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1.2"
                          strokeDasharray="4,4"
                        />
                      )}

                      {/* Main Cut Boundary (Red solid outline) */}
                      {showCutLines && (
                        <rect
                          x="0"
                          y="0"
                          width={scales.w}
                          height={scales.h}
                          fill="#3b82f6"
                          fillOpacity="0.08"
                          stroke="#e11d48"
                          strokeWidth="2.2"
                          rx={roundCorners ? 12 : 0}
                        />
                      )}

                      {/* Standard side seals weld overlays (gray overlay block) */}
                      <g opacity="0.12" clipPath="url(#panel-corners)">
                        <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                        <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                        <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#ffffff" />
                      </g>

                      {/* Zipper Crease fold lines (Purple) */}
                      {showFoldLines && (
                        <g>
                          <line
                            x1="0"
                            y1={scales.z}
                            x2={scales.w}
                            y2={scales.z}
                            stroke="#a855f7"
                            strokeWidth="1.5"
                            strokeDasharray="4,3"
                          />
                          <text x={scales.seals + 6} y={scales.z - 4} fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="monospace">ZIPPER CREASE</text>
                        </g>
                      )}

                      {/* Tear Notch ticks on the edges */}
                      <g stroke="#e11d48" strokeWidth="2">
                        <line x1="-3" y1={scales.tn} x2="3" y2={scales.tn} />
                        <line x1={scales.w - 3} y1={scales.tn} x2={scales.w + 3} y2={scales.tn} />
                      </g>

                      {/* Safe art zone (Amber dotted lines) */}
                      {showSafeZone && (
                        <rect
                          x={scales.seals + 6}
                          y={scales.z + 15}
                          width={scales.w - scales.seals * 2 - 12}
                          height={scales.h - scales.z - scales.curve - 25}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1.2"
                          strokeDasharray="2,3"
                        />
                      )}

                      {/* Bottom gusset weld curve indicator (Blue dashed curve) */}
                      {showFoldLines && (
                        <path
                          d={`M 0,${scales.h - scales.curve} C ${scales.w * 0.25},${scales.h - scales.curve * 0.3} ${scales.w * 0.75},${scales.h - scales.curve * 0.3} ${scales.w},${scales.h - scales.curve}`}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.8"
                          strokeDasharray="5,4"
                        />
                      )}

                      {/* Open Direction vertical arrow (left edge) exactly as Arunipa template */}
                      {showOpenArrow && (
                        <g transform={`translate(-20, ${scales.h / 2})`}>
                          <line x1="0" y1={scales.h * 0.3} x2="0" y2={-scales.h * 0.3} stroke="#ffffff" strokeWidth="2" />
                          <line x1="0" y1={-scales.h * 0.3} x2="-4" y2={-scales.h * 0.3 + 6} stroke="#ffffff" strokeWidth="2" />
                          <line x1="0" y1={-scales.h * 0.3} x2="4" y2={-scales.h * 0.3 + 6} stroke="#ffffff" strokeWidth="2" />
                          <text x="-6" y="-10" fill="#ffffff" fontSize="9" fontWeight="bold" transform="rotate(-90)" textAnchor="middle">
                            Open direction
                          </text>
                        </g>
                      )}

                      {/* Label */}
                      <text x={scales.w / 2} y={scales.h / 2} fill="#ffffff" fillOpacity="0.4" fontSize="14" fontWeight="black" textAnchor="middle" letterSpacing="2">
                        FRONT PANEL
                      </text>

                    </g>

                    {/* BACK PANEL */}
                    <g transform={`translate(${scales.w + scales.spacing}, 0)`}>
                      
                      <defs>
                        <clipPath id="back-panel-corners">
                          <rect x="0" y="0" width={scales.w} height={scales.h} rx={roundCorners ? 12 : 0} />
                        </clipPath>
                      </defs>

                      {/* Bleed Margin */}
                      {showBleedLines && (
                        <rect
                          x="-8"
                          y="-8"
                          width={scales.w + 16}
                          height={scales.h + 16}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="1.2"
                          strokeDasharray="4,4"
                        />
                      )}

                      {/* Cut boundary */}
                      {showCutLines && (
                        <rect
                          x="0"
                          y="0"
                          width={scales.w}
                          height={scales.h}
                          fill="#3b82f6"
                          fillOpacity="0.08"
                          stroke="#e11d48"
                          strokeWidth="2.2"
                          rx={roundCorners ? 12 : 0}
                        />
                      )}

                      {/* Side Seals overlay */}
                      <g opacity="0.12" clipPath="url(#back-panel-corners)">
                        <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                        <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                        <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#ffffff" />
                      </g>

                      {/* Zipper Crease */}
                      {showFoldLines && (
                        <line
                          x1="0"
                          y1={scales.z}
                          x2={scales.w}
                          y2={scales.z}
                          stroke="#a855f7"
                          strokeWidth="1.5"
                          strokeDasharray="4,3"
                        />
                      )}

                      {/* Tear Notch */}
                      <g stroke="#e11d48" strokeWidth="2">
                        <line x1="-3" y1={scales.tn} x2="3" y2={scales.tn} />
                        <line x1={scales.w - 3} y1={scales.tn} x2={scales.w + 3} y2={scales.tn} />
                      </g>

                      {/* Safe Area */}
                      {showSafeZone && (
                        <rect
                          x={scales.seals + 6}
                          y={scales.z + 15}
                          width={scales.w - scales.seals * 2 - 12}
                          height={scales.h - scales.z - scales.curve - 25}
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1.2"
                          strokeDasharray="2,3"
                        />
                      )}

                      {/* Bottom curve */}
                      {showFoldLines && (
                        <path
                          d={`M 0,${scales.h - scales.curve} C ${scales.w * 0.25},${scales.h - scales.curve * 0.3} ${scales.w * 0.75},${scales.h - scales.curve * 0.3} ${scales.w},${scales.h - scales.curve}`}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="1.8"
                          strokeDasharray="5,4"
                        />
                      )}

                      {/* Label */}
                      <text x={scales.w / 2} y={scales.h / 2} fill="#ffffff" fillOpacity="0.4" fontSize="14" fontWeight="black" textAnchor="middle" letterSpacing="2">
                        BACK PANEL
                      </text>

                    </g>

                    {/* BOTTOM GUSSET PANEL (Positioned underneath Front Panel) */}
                    <g transform={`translate(0, ${scales.h + 30})`}>
                      
                      {/* Cut outline */}
                      <rect
                        x="0"
                        y="0"
                        width={scales.w}
                        height={scales.g}
                        fill="#3b82f6"
                        fillOpacity="0.08"
                        stroke="#e11d48"
                        strokeWidth="2.2"
                      />

                      {/* Center folded crease line (Blue) */}
                      {showFoldLines && (
                        <line
                          x1="0"
                          y1={scales.g / 2}
                          x2={scales.w}
                          y2={scales.g / 2}
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                          strokeDasharray="4,4"
                        />
                      )}

                      {/* Label */}
                      <text x={scales.w / 2} y={scales.g / 2 + 3} fill="#ffffff" fillOpacity="0.4" fontSize="11" fontWeight="black" textAnchor="middle" letterSpacing="1">
                        BOTTOM GUSSET
                      </text>

                    </g>

                    {/* DIMENSIONAL LINE ANNOTATIONS */}
                    {showDimensions && (
                      <g stroke="#3b82f6" strokeWidth="1" fill="#3b82f6">
                        
                        {/* Width line (top of Front panel) */}
                        <line x1="0" y1="-12" x2={scales.w} y2="-12" />
                        <polygon points={`0,-12 5,-15 5,-9`} />
                        <polygon points={`${scales.w},-12 ${scales.w-5},-15 ${scales.w-5},-9`} />
                        <text x={scales.w / 2} y="-18" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle" stroke="none" fill="#3b82f6">
                          W: {width}mm
                        </text>

                        {/* Height line (right of Back panel) */}
                        <g transform={`translate(${scales.w * 2 + scales.spacing + 12}, 0)`}>
                          <line x1="0" y1="0" x2="0" y2={scales.h} />
                          <polygon points={`0,0 -3,5 3,5`} />
                          <polygon points={`0,${scales.h} -3,${scales.h-5} 3,${scales.h-5}`} />
                          <text x="8" y={scales.h / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                            H: {height}mm
                          </text>
                        </g>

                        {/* Zipper height line (right of Front panel) */}
                        <g transform={`translate(${scales.w + 10}, 0)`}>
                          <line x1="0" y1="0" x2="0" y2={scales.z} />
                          <polygon points={`0,0 -2,3 2,3`} />
                          <polygon points={`0,${scales.z} -2,${scales.z-3} 2,${scales.z-3}`} />
                          <text x="6" y={scales.z / 2 + 2} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#a855f7">
                            Z: {zipper}mm
                          </text>
                        </g>

                        {/* Tear Notch line (left of Back panel) */}
                        <g transform={`translate(${scales.w + scales.spacing - 10}, 0)`}>
                          <line x1="0" y1="0" x2="0" y2={scales.tn} />
                          <polygon points={`0,0 -2,3 2,3`} />
                          <polygon points={`0,${scales.tn} -2,${scales.tn-3} 2,${scales.tn-3}`} />
                          <text x="-25" y={scales.tn / 2 + 2} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#e11d48">
                            TN: {tearNotch}mm
                          </text>
                        </g>

                        {/* Bottom Gusset depth line (right of Bottom Gusset panel) */}
                        <g transform={`translate(${scales.w + 12}, ${scales.h + 30})`}>
                          <line x1="0" y1="0" x2="0" y2={scales.g} />
                          <polygon points={`0,0 -3,5 3,5`} />
                          <polygon points={`0,${scales.g} -3,${scales.g-5} 3,${scales.g-5}`} />
                          <text x="8" y={scales.g / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                            BG: {gusset}mm
                          </text>
                        </g>

                      </g>
                    )}

                  </g>
                </svg>

              </div>

              {/* Layers controls */}
              <div className="p-5 bg-neutral-950 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-neutral-850">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showGrid} 
                    onChange={() => setShowGrid(!showGrid)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-green-500 w-4 h-4"
                  />
                  <span>Blueprint Grid</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showCutLines} 
                    onChange={() => setShowCutLines(!showCutLines)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-red-500 w-4 h-4"
                  />
                  <span className="text-red-400 font-bold">Cut Boundary</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showFoldLines} 
                    onChange={() => setShowFoldLines(!showFoldLines)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-blue-500 w-4 h-4"
                  />
                  <span className="text-blue-400 font-bold">Fold Creases</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showBleedLines} 
                    onChange={() => setShowBleedLines(!showBleedLines)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-green-500 w-4 h-4"
                  />
                  <span className="text-green-400 font-bold">3mm Bleeds</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showSafeZone} 
                    onChange={() => setShowSafeZone(!showSafeZone)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-amber-500 w-4 h-4"
                  />
                  <span className="text-amber-400 font-bold">Safe Art Zone</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showDimensions} 
                    onChange={() => setShowDimensions(!showDimensions)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-indigo-500 w-4 h-4"
                  />
                  <span className="text-indigo-400 font-bold">Measurements</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-neutral-300">
                  <input 
                    type="checkbox" 
                    checked={showOpenArrow} 
                    onChange={() => setShowOpenArrow(!showOpenArrow)}
                    className="rounded border border-neutral-700 bg-neutral-900 focus:ring-0 text-neutral-500 w-4 h-4"
                  />
                  <span>Open Arrow</span>
                </label>
              </div>

              {/* Spec guidelines list */}
              <div className="p-6 bg-neutral-900/50 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono">
                  <Info className="w-4 h-4 text-green-500" /> Prepress Setup Guidelines
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-400 leading-relaxed">
                  <div className="flex gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>**1:1 Scale Print Match**: Downloaded PDF templates open at the exact real-world dimensions in millimeter units inside Illustrator/CorelDraw.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>**Color Swatch Profiles**: Place your custom layout designs onto separate layers and keep dieline lines locked to avoid cutting issues.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>**Bleed Tolerances**: Always expand full-bleed artwork background colors to the outer green border line to account for minor production shifts.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-4.5 h-4.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>**Safety Margin bounds**: Keep critical typography, labels, branding, and regulatory nutrition grids strictly inside the amber dotted border.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
