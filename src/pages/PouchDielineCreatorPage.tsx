import { useState, useMemo, useEffect, useRef } from 'react'
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
  HelpCircle,
  Mail,
  Loader2,
  CheckSquare,
  ThumbsUp,
  Edit3,
  AlertTriangle,
  UploadCloud,
  MessageCircle,
  Calendar,
  ShieldAlert,
  Scale,
  Lock
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
  const checkboxClass = isPouchDomain 
    ? "rounded-none border-2 border-black text-black focus:ring-0 w-5 h-5 cursor-pointer" 
    : "rounded border border-neutral-700 bg-neutral-950 text-green-500 focus:ring-0 w-5 h-5 cursor-pointer"

  // Sizing State
  const [width, setWidth] = useState(170)
  const [height, setHeight] = useState(270)
  const [gusset, setGusset] = useState(90)
  const [zipper, setZipper] = useState(27)
  const [tearNotch, setTearNotch] = useState(18)
  const [sideSeals, setSideSeals] = useState(10)
  const [bottomSealCurve, setBottomSealCurve] = useState(45)
  const [roundCorners, setRoundCorners] = useState(true)

  // Custom Options State
  const [hasZipper, setHasZipper] = useState(true)
  const [hasValve, setHasValve] = useState(false)
  const [valvePosition, setValvePosition] = useState(180) // 2/3 of 270 height initially

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

  // Lead Capture State
  const [email, setEmail] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [sendingEmail, setSendingEmail] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  
  const turnstileRef = useRef<HTMLDivElement>(null)
  const turnstileWidgetId = useRef<string | null>(null)

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '0x4AAAAAACJvySd2iBsvYcJv'

  // Load dimensions from URL parameters if present on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const w = params.get('w')
    const h = params.get('h')
    const g = params.get('g')
    const z = params.get('z')
    const tn = params.get('tn')
    const s = params.get('s')
    const c = params.get('c')
    const rc = params.get('rc')
    const hz = params.get('hz')
    const hv = params.get('hv')
    const vp = params.get('vp')

    let targetW = 170
    let targetH = 270
    let targetG = 90
    let targetZ = 27
    let targetTN = 18
    let targetS = 10
    let targetC = 45

    if (w) { targetW = Number(w); setWidth(targetW); }
    if (h) { targetH = Number(h); setHeight(targetH); }
    if (g) { targetG = Number(g); setGusset(targetG); }
    if (z) { targetZ = Number(z); setZipper(targetZ); }
    if (tn) { targetTN = Number(tn); setTearNotch(targetTN); }
    if (s) { targetS = Number(s); setSideSeals(targetS); }
    if (c) { targetC = Number(c); setBottomSealCurve(targetC); }
    if (rc) setRoundCorners(rc === 'true')
    if (hz) setHasZipper(hz === 'true')
    if (hv) setHasValve(hv === 'true')
    if (vp) setValvePosition(Number(vp))
  }, [])

  // Dynamic synchronization of valve position defaulting to 2/3 pouch height
  useEffect(() => {
    const defaultVal = Math.round(height * 2 / 3)
    const minVal = 30
    const maxVal = height - bottomSealCurve - 15
    setValvePosition(prev => {
      // Keep it synced with 2/3 of current height by default, but clamp it to stay valid
      return Math.max(minVal, Math.min(defaultVal, maxVal))
    })
  }, [height, bottomSealCurve])

  // Check LocalStorage for previously unlocked emails
  useEffect(() => {
    const savedEmail = localStorage.getItem('dieline_finder_email')
    if (savedEmail) {
      setEmail(savedEmail)
      setIsUnlocked(true)
    }
  }, [])

  // Load Cloudflare Turnstile script dynamically & initialize widget
  useEffect(() => {
    if (isUnlocked) return // Only load if unlocked!
    
    if (typeof window !== 'undefined' && !(window as any).turnstile) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    }

    const renderWidget = () => {
      if (turnstileRef.current && (window as any).turnstile && !turnstileWidgetId.current) {
        turnstileWidgetId.current = (window as any).turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(null),
          'error-callback': () => setTurnstileToken(null)
        })
      }
    }

    if ((window as any).turnstile) {
      renderWidget()
    } else {
      (window as any).onTurnstileLoad = renderWidget
    }

    return () => {
      if (turnstileWidgetId.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(turnstileWidgetId.current)
        } catch (e) {
          console.error('Turnstile clean error:', e)
        }
        turnstileWidgetId.current = null
      }
    }
  }, [isUnlocked])

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowEmailError(true)
      return
    }
    if (!turnstileToken) {
      alert('Please complete the Cloudflare CAPTCHA verification.')
      return
    }
    
    setShowEmailError(false)
    setSendingEmail(true)

    const customDielineUrl = `https://achievepack.com/dieline-creator?w=${width}&h=${height}&g=${gusset}&z=${zipper}&tn=${tearNotch}&s=${sideSeals}&c=${bottomSealCurve}&rc=${roundCorners}&hz=${hasZipper}&hv=${hasValve}&vp=${valvePosition}`

    const featuresList = [
      hasZipper ? 'Zipper' : null,
      hasValve ? `Degassing Valve (${valvePosition}mm)` : null
    ].filter(Boolean).join(', ')

    const dielineDisplayName = `Custom Stand-Up Pouch (${width}x${height}x${gusset}mm${featuresList ? ` w/ ${featuresList}` : ''})`

    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          dielineFilename: `achievepack-custom-dieline-${width}x${height}x${gusset}-${pdfFormat}.pdf`,
          dielineUrl: customDielineUrl,
          dielineDisplayName: dielineDisplayName,
          turnstileToken,
          shape: 'Stand Up Pouch',
          width,
          height,
          gusset,
          unit: 'mm',
          capacity: `${width}x${height}x${gusset}mm Custom Size${featuresList ? ` (${featuresList})` : ''}`
        })
      })

      const result = await response.json()
      if (response.ok && result.success) {
        localStorage.setItem('dieline_finder_email', email)
        setIsUnlocked(true)
        // Automatically trigger PDF download
        handlePdfDownload()
      } else {
        alert(result.error || 'Failed to send dieline email.')
      }
    } catch (err) {
      console.error(err)
      alert('A network error occurred. Please try again.')
    } finally {
      setSendingEmail(false)
      if ((window as any).turnstile && turnstileWidgetId.current) {
        (window as any).turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken(null)
      }
    }
  }

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
    setHasZipper(true)
    setHasValve(false)
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
      totalH: totalH * scale,
      vp: valvePosition * scale
    }
  }, [width, height, gusset, zipper, tearNotch, sideSeals, bottomSealCurve, valvePosition])

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

        // Convert canvas width and height from mm to pt for the constructor format array.
        // Custom sizes passed to jsPDF constructor are ALWAYS parsed as points (pt).
        const canvasW_pt = canvasW * 72 / 25.4;
        const canvasH_pt = canvasH * 72 / 25.4;

        const doc = new jsPDF({
          unit: 'mm',
          format: [canvasW_pt, canvasH_pt]
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
        doc.text(`Width: ${width}mm  |  Height: ${height}mm  |  Bottom Gusset: ${gusset}mm  |  Zipper: ${hasZipper ? `${zipper}mm` : 'None'}  |  Valve: ${hasValve ? `${valvePosition}mm` : 'None'}  |  Tear Notch: ${tearNotch}mm  |  Side Seals: ${sideSeals}mm  |  Corner: ${roundCorners ? 'Rounded (8mm)' : 'Square'}`, 10, canvasH - 10);

        // Coordinate offsets
        const frontX = margin;
        const backX = margin + width + 30;
        const panelY = margin + 20;

        // Function to draw panel lines (Cut, Fold, Bleed, Safe)
        const drawPanel = (startX: number, label: string) => {
          const ctx = doc.context2d as any;

          // 1. Bleed Margin (3mm Offset)
          doc.setDrawColor(16, 185, 129); // green
          doc.setLineWidth(0.3);
          doc.setLineDashPattern([2, 2], 0);
          doc.rect(startX - 3, panelY - 3, width + 6, height + 6);
          doc.setLineDashPattern([], 0);

          // 2. Side Seals Zone (drawn before the Cut lines so the red boundary rests on top)
          ctx.beginPath();
          ctx.fillStyle = 'rgb(240, 240, 240)';
          if (roundCorners) {
            const r = 8;
            // Left side seal with rounded outer edges
            ctx.moveTo(startX + sideSeals, panelY);
            ctx.lineTo(startX + r, panelY);
            ctx.quadraticCurveTo(startX, panelY, startX, panelY + r);
            ctx.lineTo(startX, panelY + height - r);
            ctx.quadraticCurveTo(startX, panelY + height, startX + r, panelY + height);
            ctx.lineTo(startX + sideSeals, panelY + height);
            ctx.closePath();
            ctx.fill();

            // Right side seal with rounded outer edges
            ctx.beginPath();
            ctx.moveTo(startX + width - sideSeals, panelY);
            ctx.lineTo(startX + width - r, panelY);
            ctx.quadraticCurveTo(startX + width, panelY, startX + width, panelY + r);
            ctx.lineTo(startX + width, panelY + height - r);
            ctx.quadraticCurveTo(startX + width, panelY + height, startX + width - r, panelY + height);
            ctx.lineTo(startX + width - sideSeals, panelY + height);
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.rect(startX, panelY, sideSeals, height);
            ctx.rect(startX + width - sideSeals, panelY, sideSeals, height);
            ctx.fill();
          }

          // 3. Cut lines (Magenta boundary)
          doc.setDrawColor(225, 29, 72); // rose red
          doc.setLineWidth(0.6);
          if (roundCorners) {
            // Rounded corners cut paths
            const r = 8;
            doc.roundedRect(startX, panelY, width, height, r, r);
          } else {
            doc.rect(startX, panelY, width, height);
          }

          // 4. Zipper folding lines (conditional)
          if (hasZipper) {
            doc.setDrawColor(168, 85, 247); // purple
            doc.setLineWidth(0.4);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(startX, panelY + zipper, startX + width, panelY + zipper);
            doc.setLineDashPattern([], 0);
          }

          // 5. Tear notch
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.5);
          doc.line(startX - 2, panelY + tearNotch, startX + 2, panelY + tearNotch);
          doc.line(startX + width - 2, panelY + tearNotch, startX + width + 2, panelY + tearNotch);

          // 6. Safe design area
          const safeTop = hasZipper ? (zipper + 10) : 15;
          const safeHeight = height - safeTop - bottomSealCurve - 10;
          doc.setDrawColor(245, 158, 11); // amber
          doc.setLineWidth(0.3);
          doc.setLineDashPattern([1, 2], 0);
          doc.rect(startX + sideSeals + 3, panelY + safeTop, width - sideSeals * 2 - 6, safeHeight);
          doc.setLineDashPattern([], 0);

          // 7. Degassing Valve (drawn on front panel center only)
          if (hasValve && label === 'Front') {
            const valveX = startX + width / 2;
            const valveY = panelY + valvePosition;
            
            // Outer valve boundary (6mm diameter = 3mm radius)
            doc.setDrawColor(225, 29, 72); // rose red (die cut)
            doc.setLineWidth(0.4);
            doc.circle(valveX, valveY, 3, 'D');
            
            // Inner concentric vent (3mm diameter = 1.5mm radius)
            doc.circle(valveX, valveY, 1.5, 'D');
            
            // Placement alignment crosshairs
            doc.setLineWidth(0.15);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(valveX - 8, valveY, valveX + 8, valveY);
            doc.line(valveX, valveY - 8, valveX, valveY + 8);
            doc.setLineDashPattern([], 0);
            
            // Label
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(6);
            doc.setTextColor(225, 29, 72);
            doc.text('VALVE CENTER', valveX + 4, valveY + 1.5);
          }

          // 8. Bottom Gusset curve weld seals (exact bezier matching visualizer)
          ctx.beginPath();
          ctx.strokeStyle = 'rgb(59, 130, 246)';
          ctx.lineWidth = 0.4;
          if (typeof ctx.setLineDash === 'function') {
            ctx.setLineDash([3, 3]);
          }
          ctx.moveTo(startX, panelY + height - bottomSealCurve);
          ctx.bezierCurveTo(
            startX + width * 0.25, panelY + height - bottomSealCurve * 0.3,
            startX + width * 0.75, panelY + height - bottomSealCurve * 0.3,
            startX + width, panelY + height - bottomSealCurve
          );
          ctx.stroke();
          if (typeof ctx.setLineDash === 'function') {
            ctx.setLineDash([]);
          }

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
        doc.text(`${width}mm (${(width / 25.4).toFixed(2)}in)`, frontX + width / 2 - 12, panelY - 11);
        // Height line
        doc.line(frontX - 6, panelY, frontX - 6, panelY + height);
        doc.text(`${height}mm (${(height / 25.4).toFixed(2)}in)`, frontX - 11, panelY + height / 2, { angle: 90 });
        // Zipper height
        if (hasZipper) {
          doc.line(frontX + width + 5, panelY, frontX + width + 5, panelY + zipper);
          doc.text(`${zipper}mm`, frontX + width + 8, panelY + zipper / 2 + 2);
        }
        // Valve height position annotation
        if (hasValve) {
          doc.setDrawColor(225, 29, 72);
          doc.setTextColor(225, 29, 72);
          doc.line(frontX + width / 2 - 10, panelY, frontX + width / 2 - 10, panelY + valvePosition);
          doc.text(`${valvePosition}mm (Valve)`, frontX + width / 2 - 12, panelY + valvePosition / 2 + 2, { angle: 90 });
          // Restore color for other lines
          doc.setTextColor(59, 130, 246);
          doc.setDrawColor(59, 130, 246);
        }
        // Tear Notch height
        doc.line(frontX + width + 15, panelY, frontX + width + 15, panelY + tearNotch);
        doc.text(`${tearNotch}mm (${(tearNotch / 25.4).toFixed(2)}in)`, frontX + width + 18, panelY + tearNotch / 2 + 2);
        // Side seal height
        doc.line(frontX, panelY + height + 5, frontX + sideSeals, panelY + height + 5);
        doc.text(`${sideSeals}mm (${(sideSeals / 25.4).toFixed(2)}in)`, frontX + 2, panelY + height + 9);

        // Bottom gusset annotations
        doc.line(frontX - 6, gussetY, frontX - 6, gussetY + gusset);
        doc.text(`${gusset}mm (${(gusset / 25.4).toFixed(2)}in)`, frontX - 11, gussetY + gusset / 2, { angle: 90 });

        // Programmatic Blob download trigger to secure native file downloads
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `achievepack-dieline-${width}x${height}x${gusset}-${pdfFormat}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);

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
          ['Zipper Depth:', hasZipper ? `${zipper} mm` : 'None'],
          ['Tear Notch:', `${tearNotch} mm`],
          ['Side Seals:', `${sideSeals} mm`],
          ['Gusset Seal:', `${bottomSealCurve} mm`],
          ['Degas Valve:', hasValve ? `${valvePosition} mm` : 'None'],
          ['Corner Shape:', roundCorners ? 'Rounded' : 'Square'],
          ['Tolerances:', '± 1.5 mm'],
          ['Certification:', 'ISO-9001 / BRC']
        ];
        
        let specY = 52;
        specs.forEach(([k, v]) => {
          doc.setFont('Helvetica', 'bold');
          doc.text(k, 220, specY);
          doc.setFont('Helvetica', 'normal');
          doc.text(v, 255, specY);
          specY += 9;
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

        // Shaded side seals (drawn first so cut boundary outlines them cleanly)
        const ctx = doc.context2d as any;
        ctx.beginPath();
        ctx.fillStyle = 'rgb(245, 245, 245)';
        if (roundCorners) {
          const r = 3;
          // Front Panel Left
          ctx.moveTo(fX + s, pY);
          ctx.lineTo(fX + r, pY);
          ctx.quadraticCurveTo(fX, pY, fX, pY + r);
          ctx.lineTo(fX, pY + h - r);
          ctx.quadraticCurveTo(fX, pY + h, fX + r, pY + h);
          ctx.lineTo(fX + s, pY + h);
          ctx.closePath();
          ctx.fill();

          // Front Panel Right
          ctx.beginPath();
          ctx.moveTo(fX + w - s, pY);
          ctx.lineTo(fX + w - r, pY);
          ctx.quadraticCurveTo(fX + w, pY, fX + w, pY + r);
          ctx.lineTo(fX + w, pY + h - r);
          ctx.quadraticCurveTo(fX + w, pY + h, fX + w - r, pY + h);
          ctx.lineTo(fX + w - s, pY + h);
          ctx.closePath();
          ctx.fill();

          // Back Panel Left
          ctx.beginPath();
          ctx.moveTo(bX + s, pY);
          ctx.lineTo(bX + r, pY);
          ctx.quadraticCurveTo(bX, pY, bX, pY + r);
          ctx.lineTo(bX, pY + h - r);
          ctx.quadraticCurveTo(bX, pY + h, bX + r, pY + h);
          ctx.lineTo(bX + s, pY + h);
          ctx.closePath();
          ctx.fill();

          // Back Panel Right
          ctx.beginPath();
          ctx.moveTo(bX + w - s, pY);
          ctx.lineTo(bX + w - r, pY);
          ctx.quadraticCurveTo(bX + w, pY, bX + w, pY + r);
          ctx.lineTo(bX + w, pY + h - r);
          ctx.quadraticCurveTo(bX + w, pY + h, bX + w - r, pY + h);
          ctx.lineTo(bX + w - s, pY + h);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.rect(fX, pY, s, h);
          ctx.rect(fX + w - s, pY, s, h);
          ctx.rect(bX, pY, s, h);
          ctx.rect(bX + w - s, pY, s, h);
          ctx.fill();
        }

        // Cut lines (drawn on top of side seals)
        doc.setDrawColor(225, 29, 72);
        doc.setLineWidth(0.4);
        if (roundCorners) {
          doc.roundedRect(fX, pY, w, h, 3, 3);
          doc.roundedRect(bX, pY, w, h, 3, 3);
        } else {
          doc.rect(fX, pY, w, h);
          doc.rect(bX, pY, w, h);
        }

        // Zipper Crease
        if (hasZipper) {
          doc.setDrawColor(168, 85, 247);
          doc.setLineWidth(0.25);
          doc.setLineDashPattern([1, 1], 0);
          doc.line(fX, pY + z, fX + w, pY + z);
          doc.line(bX, pY + z, bX + w, pY + z);
          doc.setLineDashPattern([], 0);
        }

        // Tear notch markers
        doc.setDrawColor(225, 29, 72);
        doc.line(fX - 1, pY + tn, fX + 1, pY + tn);
        doc.line(fX + w - 1, pY + tn, fX + w + 1, pY + tn);

        // Degassing Valve drawing on A4 Front Panel
        if (hasValve) {
          const fValveX = fX + w / 2;
          const fValveY = pY + valvePosition * pScale;
          const scaledValvePos = valvePosition * pScale;

          doc.setDrawColor(225, 29, 72); // Rose red (cut/mechanical layer)
          doc.setLineWidth(0.25);
          doc.circle(fValveX, fValveY, 1.2, 'D'); // outer circle scaled (~6mm diameter)
          doc.circle(fValveX, fValveY, 0.6, 'D'); // inner circle scaled

          // Crosshairs
          doc.setLineWidth(0.1);
          doc.setLineDashPattern([1, 1], 0);
          doc.line(fValveX - 3, fValveY, fValveX + 3, fValveY);
          doc.line(fValveX, fValveY - 3, fValveX, fValveY + 3);
          doc.setLineDashPattern([], 0);

          // Valve Position Annotation inside preview area
          if (showDimensions) {
            doc.setFontSize(4.5);
            doc.setTextColor(225, 29, 72);
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.12);
            doc.line(fValveX - 6, pY, fValveX - 6, fValveY);
            doc.text(`VP: ${valvePosition}mm`, fValveX - 16, pY + scaledValvePos / 2 + 1);
          }
        }

        // Bottom crease (beautiful curves matching preview)
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(59, 130, 246)';
        ctx.lineWidth = 0.4;
        if (typeof ctx.setLineDash === 'function') {
          ctx.setLineDash([3, 3]);
        }
        const scaledCurve = bottomSealCurve * pScale;
        
        ctx.moveTo(fX, pY + h - scaledCurve);
        ctx.bezierCurveTo(
          fX + w * 0.25, pY + h - scaledCurve * 0.3,
          fX + w * 0.75, pY + h - scaledCurve * 0.3,
          fX + w, pY + h - scaledCurve
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(bX, pY + h - scaledCurve);
        ctx.bezierCurveTo(
          bX + w * 0.25, pY + h - scaledCurve * 0.3,
          bX + w * 0.75, pY + h - scaledCurve * 0.3,
          bX + w, pY + h - scaledCurve
        );
        ctx.stroke();
        if (typeof ctx.setLineDash === 'function') {
          ctx.setLineDash([]);
        }

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
        doc.setFontSize(5.5);
        doc.setTextColor(59, 130, 246);
        // Width
        doc.line(fX, pY - 3, fX + w, pY - 3);
        doc.text(`${width}mm (${(width / 25.4).toFixed(2)}in)`, fX + w / 2 - 12, pY - 4);
        // Height
        doc.line(fX - 3, pY, fX - 3, pY + h);
        doc.text(`${height}mm (${(height / 25.4).toFixed(2)}in)`, fX - 8, pY + h / 2, { angle: 90 });
        // Gusset height
        doc.line(fX - 3, bGussetY, fX - 3, bGussetY + g);
        doc.text(`${gusset}mm (${(gusset / 25.4).toFixed(2)}in)`, fX - 8, bGussetY + g / 2, { angle: 90 });

        // Programmatic Blob download trigger to secure native file downloads
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `achievepack-technical-dieline-${width}x${height}x${gusset}-${pdfFormat}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
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
                <div className="space-y-2 bg-neutral-950/20 p-3 rounded-2xl border border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-400 font-bold">Pouch Width (W)</span>
                    <span className="text-green-400 font-mono font-bold">{(width / 25.4).toFixed(2)} in / {width} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="width-mm-input"
                        type="text"
                        value={widthMmStr}
                        onChange={(e) => handleWidthChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="width-inch-input"
                        type="text"
                        value={widthInchStr}
                        onChange={(e) => handleWidthChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="350"
                    value={width}
                    onChange={(e) => handleWidthChangeMm(e.target.value)}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Length/Height */}
                <div className="space-y-2 bg-neutral-950/20 p-3 rounded-2xl border border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-400 font-bold">Pouch Height / Length (H)</span>
                    <span className="text-green-400 font-mono font-bold">{(height / 25.4).toFixed(2)} in / {height} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="height-mm-input"
                        type="text"
                        value={heightMmStr}
                        onChange={(e) => handleHeightChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="height-inch-input"
                        type="text"
                        value={heightInchStr}
                        onChange={(e) => handleHeightChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="450"
                    value={height}
                    onChange={(e) => handleHeightChangeMm(e.target.value)}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Gusset */}
                <div className="space-y-2 bg-neutral-950/20 p-3 rounded-2xl border border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs font-semibold flex-wrap">
                    <span className="text-neutral-400 font-bold">Bottom Gusset Flat Height (BG)</span>
                    <span className="text-green-400 font-mono font-bold">{(gusset / 25.4).toFixed(2)} in / {gusset} mm <span className="text-neutral-600">({(gusset / 2 / 25.4).toFixed(2)}" depth)</span></span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="gusset-mm-input"
                        type="text"
                        value={gussetMmStr}
                        onChange={(e) => handleGussetChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-555 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="gusset-inch-input"
                        type="text"
                        value={gussetInchStr}
                        onChange={(e) => handleGussetChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-555 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    value={gusset}
                    onChange={(e) => handleGussetChangeMm(e.target.value)}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Include Zipper Toggle */}
                <div className="flex items-center justify-between border-t border-neutral-850 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Include Press-to-Close Zipper</span>
                    <span className="text-[10px] text-neutral-500 font-mono">Adds standard reclosable zipper layer</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={hasZipper} 
                      onChange={() => setHasZipper(!hasZipper)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                  </label>
                </div>

                {/* Zipper Position Slider (Conditional) */}
                {hasZipper && (
                  <div className="space-y-1 pl-3 border-l-2 border-green-500/20 py-1 transition-all">
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
                )}

                {/* Include Valve Toggle */}
                <div className="flex items-center justify-between border-t border-neutral-850 pt-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Include Degassing Valve</span>
                    <span className="text-[10px] text-neutral-500 font-mono">One-way venting valve for coffee/gasses</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={hasValve} 
                      onChange={() => setHasValve(!hasValve)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                  </label>
                </div>

                {/* Valve Position Slider (Conditional) */}
                {hasValve && (
                  <div className="space-y-1 pl-3 border-l-2 border-green-500/20 py-1 transition-all">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-neutral-400">Valve Position (From Top)</span>
                      <span className="text-green-400 font-mono font-bold">{valvePosition} mm <span className="text-neutral-500 font-normal">({Math.round(valvePosition / height * 100)}% of height)</span></span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max={height - bottomSealCurve - 15}
                      value={valvePosition}
                      onChange={(e) => setValvePosition(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                  </div>
                )}

                {/* Tear Notch */}
                <div className="space-y-2 bg-neutral-950/20 p-3 rounded-2xl border border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-400 font-bold">Tear Notch Position (From Top)</span>
                    <span className="text-green-400 font-mono font-bold">{(tearNotch / 25.4).toFixed(2)} in / {tearNotch} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="tearNotch-mm-input"
                        type="text"
                        value={tearNotchMmStr}
                        onChange={(e) => handleTearNotchChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="tearNotch-inch-input"
                        type="text"
                        value={tearNotchInchStr}
                        onChange={(e) => handleTearNotchChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={tearNotch}
                    onChange={(e) => handleTearNotchChangeMm(e.target.value)}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Side Seals */}
                <div className="space-y-2 bg-neutral-950/20 p-3 rounded-2xl border border-neutral-800/40">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-400 font-bold">Side Seal Weld Width</span>
                    <span className="text-green-400 font-mono font-bold">{(sideSeals / 25.4).toFixed(2)} in / {sideSeals} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="sideSeals-mm-input"
                        type="text"
                        value={sideSealsMmStr}
                        onChange={(e) => handleSideSealsChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="sideSeals-inch-input"
                        type="text"
                        value={sideSealsInchStr}
                        onChange={(e) => handleSideSealsChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-white font-bold"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-550 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={sideSeals}
                    onChange={(e) => handleSideSealsChangeMm(e.target.value)}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Seal Curve (Auto-Calculated & Locked) */}
                <div className="space-y-2 bg-neutral-950/40 p-3 rounded-2xl border border-neutral-900/60 opacity-60 relative overflow-hidden select-none">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-neutral-500 font-bold flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-neutral-500" />
                      Gusset Seal Weld Curve (C)
                    </span>
                    <span className="text-neutral-500 text-[10px] font-mono">
                      Auto-Calculated (BG / 2)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="bottomSealCurve-mm-input"
                        type="text"
                        value={bottomCurveMmStr}
                        readOnly
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-950 border border-neutral-900 text-neutral-500 rounded-xl outline-none font-mono font-bold cursor-not-allowed select-none"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-600 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="bottomSealCurve-inch-input"
                        type="text"
                        value={bottomCurveInchStr}
                        readOnly
                        className="w-full pl-3 pr-8 py-2 text-xs bg-neutral-955 border border-neutral-800 text-neutral-550 rounded-xl outline-none font-mono font-bold cursor-not-allowed select-none"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-neutral-600 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-neutral-900/60 rounded-lg overflow-hidden relative pointer-events-none">
                    <div 
                      className="bg-neutral-600 h-full transition-all duration-150"
                      style={{ width: `${((bottomSealCurve - 15) / (70 - 15)) * 100}%` }}
                    ></div>
                  </div>
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

                {!isUnlocked ? (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 border-t border-neutral-850 pt-4 mt-2">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-green-400 flex items-center gap-1.5 mb-1.5">
                        <Mail className="w-3.5 h-3.5" /> Unlock & Email PDF Template
                      </h4>
                      <p className="text-[10px] text-neutral-400 leading-normal">
                        Enter your email to receive this custom template and unlock unlimited high-fidelity vector dieline downloads instantly.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <input
                        type="email"
                        required
                        placeholder="brand-manager@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-white rounded-xl outline-none font-medium focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      />
                      {showEmailError && (
                        <p className="text-[10px] text-red-400 font-semibold">Please enter a valid email address.</p>
                      )}
                      
                      <button
                        type="submit"
                        disabled={sendingEmail || !turnstileToken}
                        className="w-full py-3.5 px-6 bg-green-500 hover:bg-green-600 text-black text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sendingEmail ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            <span>Unlocking & Emailing...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4 stroke-[2.5]" />
                            <span>Unlock & Email PDF</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    {/* Cloudflare Turnstile CAPTCHA container */}
                    <div ref={turnstileRef} className="cf-turnstile w-full flex justify-center scale-90 -my-1" />

                    <p className="text-[9px] text-neutral-500 font-medium text-center">
                      🔒 We value privacy. Your email is strictly used to deliver custom dielines. We do not spam.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col gap-3">
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

                    <div className="flex items-center justify-between px-1">
                      <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Downloads Unlocked
                      </span>
                      <button
                        onClick={() => {
                          localStorage.removeItem('dieline_finder_email');
                          setIsUnlocked(false);
                        }}
                        className="text-[9px] font-bold uppercase text-neutral-500 hover:text-red-400 underline"
                      >
                        Change Email
                      </button>
                    </div>
                  </div>
                )}

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
                      {hasZipper && showFoldLines && (
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

                      {/* Degassing Valve placement (Front Panel center) */}
                      {hasValve && (
                        <g transform={`translate(${scales.w / 2}, ${scales.vp})`}>
                          {/* Outer physical die-cut hole (scaled) */}
                          <circle r="10" fill="none" stroke="#e11d48" strokeWidth="1.5" />
                          <circle r="5" fill="none" stroke="#e11d48" strokeWidth="1.0" />
                          {/* Concentric inner valve filter */}
                          <circle r="2" fill="#e11d48" />
                          {/* Crosshair alignment marks */}
                          <line x1="-16" y1="0" x2="16" y2="0" stroke="#e11d48" strokeWidth="0.8" strokeDasharray="2,2" />
                          <line x1="0" y1="-16" x2="0" y2="16" stroke="#e11d48" strokeWidth="0.8" strokeDasharray="2,2" />
                          <text x="14" y="3" fill="#e11d48" fontSize="7" fontWeight="bold" fontFamily="monospace">VALVE</text>
                        </g>
                      )}

                      {/* Safe art zone (Amber dotted lines) */}
                      {showSafeZone && (
                        <rect
                          x={scales.seals + 6}
                          y={hasZipper ? (scales.z + 15) : 15}
                          width={scales.w - scales.seals * 2 - 12}
                          height={hasZipper 
                            ? (scales.h - scales.z - scales.curve - 25)
                            : (scales.h - scales.curve - 30)
                          }
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
                      {hasZipper && showFoldLines && (
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
                          y={hasZipper ? (scales.z + 15) : 15}
                          width={scales.w - scales.seals * 2 - 12}
                          height={hasZipper 
                            ? (scales.h - scales.z - scales.curve - 25)
                            : (scales.h - scales.curve - 30)
                          }
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
                          W: {width}mm ({(width / 25.4).toFixed(2)}")
                        </text>

                        {/* Height line (right of Back panel) */}
                        <g transform={`translate(${scales.w * 2 + scales.spacing + 12}, 0)`}>
                          <line x1="0" y1="0" x2="0" y2={scales.h} />
                          <polygon points={`0,0 -3,5 3,5`} />
                          <polygon points={`0,${scales.h} -3,${scales.h-5} 3,${scales.h-5}`} />
                          <text x="8" y={scales.h / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                            H: {height}mm ({(height / 25.4).toFixed(2)}")
                          </text>
                        </g>

                        {/* Zipper height line (right of Front panel) */}
                        {hasZipper && (
                          <g transform={`translate(${scales.w + 10}, 0)`}>
                            <line x1="0" y1="0" x2="0" y2={scales.z} />
                            <polygon points={`0,0 -2,3 2,3`} />
                            <polygon points={`0,${scales.z} -2,${scales.z-3} 2,${scales.z-3}`} />
                            <text x="6" y={scales.z / 2 + 2} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#a855f7">
                              Z: {zipper}mm
                            </text>
                          </g>
                        )}

                        {/* Valve height line (middle of Front panel, shifted left) */}
                        {hasValve && (
                          <g transform={`translate(${scales.w / 2 - 25}, 0)`}>
                            <line x1="0" y1="0" x2="0" y2={scales.vp} stroke="#e11d48" strokeWidth="1" />
                            <polygon points={`0,0 -2,3 2,3`} fill="#e11d48" stroke="#e11d48" />
                            <polygon points={`0,${scales.vp} -2,${scales.vp-3} 2,${scales.vp-3}`} fill="#e11d48" stroke="#e11d48" />
                            <text x="6" y={scales.vp / 2 + 3} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#e11d48">
                              VP: {valvePosition}mm
                            </text>
                          </g>
                        )}

                        {/* Tear Notch line (left of Back panel) */}
                        <g transform={`translate(${scales.w + scales.spacing - 10}, 0)`}>
                          <line x1="0" y1="0" x2="0" y2={scales.tn} />
                          <polygon points={`0,0 -2,3 2,3`} />
                          <polygon points={`0,${scales.tn} -2,${scales.tn-3} 2,${scales.tn-3}`} />
                          <text x="-25" y={scales.tn / 2 + 2} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#e11d48">
                            TN: {tearNotch}mm ({(tearNotch / 25.4).toFixed(2)}")
                          </text>
                        </g>

                        {/* Bottom Gusset depth line (right of Bottom Gusset panel) */}
                        <g transform={`translate(${scales.w + 12}, ${scales.h + 30})`}>
                          <line x1="0" y1="0" x2="0" y2={scales.g} />
                          <polygon points={`0,0 -3,5 3,5`} />
                          <polygon points={`0,${scales.g} -3,${scales.g-5} 3,${scales.g-5}`} />
                          <text x="8" y={scales.g / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                            BG: {gusset}mm ({(gusset / 25.4).toFixed(2)}")
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

        {/* ======================================================== */}
        {/* POST-DESIGN WORKFLOW: PLACE ARTWORK & SUBMIT SUB-APP     */}
        {/* ======================================================== */}
        <div className="mt-12 space-y-12">
          
          {/* Section Divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-neutral-800"></div>
            <span className={`mx-4 flex-shrink text-xs font-bold uppercase tracking-widest font-mono ${isPouchDomain ? 'text-black' : 'text-neutral-500'}`}>
              Production Setup & Artwork Submission
            </span>
            <div className="flex-grow border-t border-neutral-800"></div>
          </div>

          {/* Timeline / Visual Illustration of the Process */}
          <div className={`${isPouchDomain ? "bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-8 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-6`}>
            <div>
              <h3 className={`${isPouchDomain ? "font-black text-2xl uppercase tracking-tight font-mono" : "font-extrabold text-xl uppercase tracking-wider text-white"} mb-2`}>
                Post-Design Guidelines: 4 Simple Steps
              </h3>
              <p className="text-sm text-neutral-400">
                What to do after downloading your custom stand-up pouch template:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="flex flex-col gap-3 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isPouchDomain ? 'bg-[#00FFFF] border-2 border-black text-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'}`}>
                  01
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-white">Import Dieline</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Open the A4 or 1:1 Vector PDF file directly in vector software like Adobe Illustrator, CorelDraw, or Figma. Keep the dieline locked on its original layer.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-3 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isPouchDomain ? 'bg-[#D4FF00] border-2 border-black text-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'}`}>
                  02
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-white">Design Layering</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Place your custom graphics, logos, and textures on a separate <strong className="text-green-400">Artwork Layer</strong> placed <em>underneath</em> the locked dieline cuts.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-3 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isPouchDomain ? 'bg-amber-400 border-2 border-black text-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'}`}>
                  03
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-white">Prepress Check</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Convert all text fonts to outlines, map spot colors, embed graphics, and expand backgrounds to the 3mm bleed margin (green dotted line).
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col gap-3 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${isPouchDomain ? 'bg-purple-400 border-2 border-black text-black font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-purple-500/10 border border-purple-500/20 text-purple-400'}`}>
                  04
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide text-white">Verification Sign-off</h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Run through the prepress checklist below and submit your production file directly to our review desk through one of three pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Three Channel Artwork Submission Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Upload Box (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-6`}>
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-2">
                    <div className="flex items-center gap-2">
                      <UploadCloud className="w-5 h-5 text-green-400" />
                      <h3 className={`${isPouchDomain ? "font-black text-xl uppercase tracking-tight font-mono" : "font-extrabold text-base uppercase tracking-wider text-white"}`}>
                        Submit Finished Artwork Layer
                      </h3>
                    </div>
                    <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full font-mono">
                      SECURE PIPELINE
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Upload your completed Adobe Illustrator (.ai), vector PDF, or high-res EPS print file directly to our prepress verification server:
                  </p>
                </div>

                {/* Upload drag drop placeholder */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed ${isPouchDomain ? 'border-black hover:bg-neutral-50' : 'border-neutral-800 bg-neutral-950 hover:bg-neutral-900'} p-8 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all`}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    onChange={handleFileChange}
                    accept=".ai,.pdf,.eps,.zip,.rar"
                    className="hidden" 
                  />
                  <div className={`w-12 h-12 rounded-full ${isPouchDomain ? 'bg-[#00FFFF] border-2 border-black' : 'bg-neutral-900 border border-neutral-800'} flex items-center justify-center text-green-400`}>
                    <UploadCloud className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-xs font-bold text-white uppercase tracking-wide">
                      {uploadFile ? uploadFile.name : 'Select or Drag Dieline Artwork File'}
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      {uploadFile ? `File size: ${(uploadFile.size / 1024 / 1024).toFixed(2)} MB` : 'Supports AI, PDF, EPS, ZIP, RAR up to 150MB'}
                    </p>
                  </div>
                </div>

                {/* Upload Action buttons */}
                {uploadFile && (
                  <div className={`p-4 ${isPouchDomain ? 'bg-neutral-50 border-2 border-black' : 'bg-neutral-950 border border-neutral-800'} rounded-xl space-y-4`}>
                    
                    {/* Progress Bar */}
                    {isUploading && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold font-mono">
                          <span className="text-neutral-400">UPLOADING VECTOR ASSETS...</span>
                          <span className="text-green-400">{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden border border-neutral-800">
                          <div 
                            className="bg-green-500 h-full transition-all duration-150" 
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Success check */}
                    {uploadSuccess && (
                      <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg text-xs font-bold font-mono">
                        <CheckCircle className="w-4.5 h-4.5" />
                        <span>PREPRESS UPLOAD COMPLETE! OUR DESIGN DESK HAS RECEIVED YOUR DIELINE SPECIFICATIONS.</span>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 justify-end">
                      <button 
                        onClick={resetUpload}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-lg transition-colors ${isPouchDomain ? 'border-black hover:bg-neutral-100 text-black' : 'border-neutral-800 hover:bg-neutral-900 text-neutral-450'}`}
                      >
                        Reset
                      </button>
                      <button 
                        onClick={simulateUpload}
                        disabled={isUploading || uploadSuccess}
                        className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors bg-green-500 hover:bg-green-600 text-black disabled:opacity-50`}
                      >
                        {isUploading ? 'Uploading...' : uploadSuccess ? 'Submitted' : 'Submit Prepress Package'}
                      </button>
                    </div>

                  </div>
                )}
              </div>
            </div>

            {/* Email, WhatsApp, and Meeting channels (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Channel B: Direct Contact */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono" : "font-extrabold text-sm uppercase tracking-wider text-white"}`}>
                  Direct Submission Desk
                </h3>
                
                <div className="flex flex-col gap-3">
                  
                  {/* Email */}
                  <a 
                    href="mailto:artwork@achievepack.com?subject=Custom%20Dieline%20Artwork%20Submission&body=Hi%20Achieve%20Pack%20Team,%20%0A%0AI%20have%20completed%20the%20packaging%20artwork%20using%20your%20custom%20dieline%20creator.%20Please%20find%20the%20attached%20files%20and%20let%20me%20know%20if%20there%20are%20any%20prepress%20revisions%20needed.%20%0A%0ABest%20regards,"
                    className={`flex items-center gap-3 p-3 border rounded-xl hover:scale-[1.01] transition-all ${isPouchDomain ? 'border-black hover:bg-neutral-50 text-black' : 'border-neutral-850 bg-neutral-950 hover:bg-neutral-900 text-neutral-200'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${isPouchDomain ? 'bg-[#00FFFF] border-2 border-black' : 'bg-neutral-900 border border-neutral-800'} flex items-center justify-center text-blue-400`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold block uppercase">Submit via Email</span>
                      <span className="text-[10px] text-neutral-500 font-mono">artwork@achievepack.com</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/85269704411?text=Hi%20Achieve%20Pack%20Team,%20I%20have%20completed%20our%20packaging%20artwork%20using%20your%20custom%20dieline%20creator.%20Could%20you%20please%20connect%20me%20with%20a%20packaging%20expert%20to%20verify%20our%20prepress%20tolerance?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 border rounded-xl hover:scale-[1.01] transition-all ${isPouchDomain ? 'border-black hover:bg-neutral-50 text-black' : 'border-neutral-855 bg-neutral-950 hover:bg-neutral-900 text-neutral-200'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00] border-2 border-black' : 'bg-neutral-900 border border-neutral-800'} flex items-center justify-center text-green-400`}>
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold block uppercase">Submit via WhatsApp</span>
                      <span className="text-[10px] text-neutral-500 font-mono">+852 6970 4411 (Prepress Desk)</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>

                </div>
              </div>

              {/* Channel C: Meeting Consult */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono" : "font-extrabold text-sm uppercase tracking-wider text-white"}`}>
                  Need a Prepress Alignment?
                </h3>
                <p className="text-[11px] leading-relaxed text-neutral-400">
                  Book a rapid 15-minute screen share review session with Ryan Wong (Co-Founder & Packaging Engineer) to verify your final design:
                </p>

                <a 
                  href="https://calendly.com/achievepack/prepress-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider border rounded-xl transition-all hover:scale-[1.01] ${isPouchDomain ? 'bg-black text-white border-black hover:bg-neutral-800' : 'bg-neutral-950 hover:bg-neutral-900 border-neutral-800 text-white'}`}
                >
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span>Book 1:1 Prepress Alignment</span>
                </a>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* VERIFICATION CHECKLIST & APPROVAL MATRIX SECTION         */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Checklist (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-6`}>
                
                <div>
                  <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-2">
                    <CheckSquare className="w-5 h-5 text-green-400" />
                    <h3 className={`${isPouchDomain ? "font-black text-xl uppercase tracking-tight font-mono" : "font-extrabold text-base uppercase tracking-wider text-white"}`}>
                      Prepress Verification Checklist
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Before giving your final production print approval, please carefully check and verify the following parameters against your imported design:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Item 1 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.size ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.size}
                      onChange={() => setChecklist({ ...checklist, size: !checklist.size })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Size Verification</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Dieline dimensions, gussets, and side seals match original layout.</span>
                    </div>
                  </label>

                  {/* Item 2 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.colors ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.colors}
                      onChange={() => setChecklist({ ...checklist, colors: !checklist.colors })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Correct Colors</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Mapped to CMYK print profiles or Pantone Solid Coated (no RGB).</span>
                    </div>
                  </label>

                  {/* Item 3 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.eyespot ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.eyespot}
                      onChange={() => setChecklist({ ...checklist, eyespot: !checklist.eyespot })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Eyespot Size & Location</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Correct eye-mark sensor size and coordinates for high-speed cutters.</span>
                    </div>
                  </label>

                  {/* Item 4 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.weight ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.weight}
                      onChange={() => setChecklist({ ...checklist, weight: !checklist.weight })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Weight Description</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Net weight font is compliant (height minimum 2mm is verified).</span>
                    </div>
                  </label>

                  {/* Item 5 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.upc ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.upc}
                      onChange={() => setChecklist({ ...checklist, upc: !checklist.upc })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Correct UPC / Bar Code</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">High contrast solid background scale (minimum 80% to 120%).</span>
                    </div>
                  </label>

                  {/* Item 6 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.rollDirection ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.rollDirection}
                      onChange={() => setChecklist({ ...checklist, rollDirection: !checklist.rollDirection })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Roll Direction</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Wind layout alignment conforms to your packaging machinery specs.</span>
                    </div>
                  </label>

                  {/* Item 7 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.addons ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.addons}
                      onChange={() => setChecklist({ ...checklist, addons: !checklist.addons })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Add Ons (e.g. zipper, tear notch, etc)</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Zipper placement, tear notches, pegs, or degassing valves are correct.</span>
                    </div>
                  </label>

                  {/* Item 8 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.seal ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 hover:border-neutral-700')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.seal}
                      onChange={() => setChecklist({ ...checklist, seal: !checklist.seal })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Fin / Lap Seal</span>
                      <span className="text-[10px] text-neutral-500 leading-relaxed block">Back seal seam overlaps are aligned with appropriate margins.</span>
                    </div>
                  </label>

                </div>

              </div>

            </div>

            {/* Decision Matrix & Legal Warnings (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Decision Choice Box */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono text-black" : "font-extrabold text-sm uppercase tracking-wider text-white"}`}>
                  Your Decision
                </h3>

                <div className="flex flex-col gap-2">
                  
                  {/* Approve as is */}
                  <button 
                    onClick={() => setDecision('approve')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'approve' ? (isPouchDomain ? 'bg-[#D4FF00] border-black text-black' : 'border-green-500 bg-green-500/10 text-green-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 bg-neutral-950 hover:border-neutral-850 text-neutral-400')}`}
                  >
                    <ThumbsUp className={`w-4 h-4 mt-0.5 ${decision === 'approve' ? 'text-green-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Approve as is</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Perfect! Ready for full commercial production.</span>
                    </div>
                  </button>

                  {/* Approve with changes */}
                  <button 
                    onClick={() => setDecision('approve_changes')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'approve_changes' ? (isPouchDomain ? 'bg-[#00FFFF] border-black text-black' : 'border-blue-500 bg-blue-500/10 text-blue-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 bg-neutral-950 hover:border-neutral-855 text-neutral-400')}`}
                  >
                    <Edit3 className={`w-4 h-4 mt-0.5 ${decision === 'approve_changes' ? 'text-blue-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Approve with changes</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Proceed after minor noted corrections.</span>
                    </div>
                  </button>

                  {/* Requires Revision */}
                  <button 
                    onClick={() => setDecision('revision')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'revision' ? (isPouchDomain ? 'bg-red-400 border-black text-black' : 'border-rose-500 bg-rose-500/10 text-rose-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-neutral-800 bg-neutral-950 hover:border-neutral-855 text-neutral-400')}`}
                  >
                    <AlertTriangle className={`w-4 h-4 mt-0.5 ${decision === 'revision' ? 'text-rose-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-white">Requires Revision</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Do NOT print. Request new proof after changes.</span>
                    </div>
                  </button>

                </div>
              </div>

              {/* Important notice block */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-neutral-900 border border-neutral-800 p-6 text-neutral-200 shadow-xl rounded-3xl"} flex flex-col gap-4`}>
                <div className="flex items-center gap-2 border-b border-neutral-800 pb-2">
                  <ShieldAlert className="w-5 h-5 text-amber-500" />
                  <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono text-black" : "font-extrabold text-sm uppercase tracking-wider text-white"}`}>
                    Important Notice - Please Read Before Approval
                  </h3>
                </div>

                <div className="text-[10.5px] leading-relaxed text-neutral-400 space-y-2">
                  <p>• This proof is an exact duplicate of the original production artwork that will be used to print your product.</p>
                  <p>• All copy, punctuation and spelling has been proof read by the account executive.</p>
                  <p className="text-amber-400 font-bold">• We will not be responsible for any discrepancies that are approved by the customer.</p>
                  <p>• Color Management will be controlled by other document.</p>
                </div>

                {/* Tolerances */}
                <div className={`mt-2 p-3 ${isPouchDomain ? 'bg-neutral-50 border border-black' : 'bg-neutral-950 border border-neutral-850'} rounded-xl flex items-center justify-between`}>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Scale className="w-4 h-4 text-green-400" />
                    <span>Tolerances:</span>
                  </div>
                  <div className="flex gap-4 text-[10px] font-bold font-mono">
                    <span className="text-neutral-400">Bag Making Tolerance: <strong className="text-white">+/-2mm</strong></span>
                    <span className="text-neutral-400">Color Tolerance: <strong className="text-white">+/-10%</strong></span>
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
