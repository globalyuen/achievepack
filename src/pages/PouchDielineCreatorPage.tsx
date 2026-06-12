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
  Lock,
  ChevronLeft,
  ChevronRight
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

interface DielineShape {
  id: 'stand_up' | 'k_seal' | 'flat_bottom_one_zipper' | 'flat_bottom_normal_zipper' | 'box_bottom' | 'side_gusset' | 'three_side_seal' | 'center_seal';
  label: string;
  description: string;
  icon: React.ReactNode;
}

const SHAPE_PRESETS: Record<string, DielinePreset[]> = {
  stand_up: [
    {
      name: 'Coffee Bag w/ Valve (250g)',
      description: 'Perfect for retail coffee pouches',
      width: 160,
      height: 230,
      gusset: 80,
      zipper: 30,
      tearNotch: 20,
      sideSeals: 10,
      bottomSealCurve: 40,
      roundCorners: true
    },
    {
      name: 'Supplement Pouch (1kg)',
      description: 'Large format bag for powders',
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
      description: 'Pocket-sized sample pouch',
      width: 110,
      height: 160,
      gusset: 60,
      zipper: 25,
      tearNotch: 15,
      sideSeals: 8,
      bottomSealCurve: 30,
      roundCorners: false
    }
  ],
  k_seal: [
    {
      name: 'Heavy Poly Bag (2.5 lb)',
      description: 'Refer to 265 x 285 + 105 poly bag dieline',
      width: 265,
      height: 285,
      gusset: 105,
      zipper: 30,
      tearNotch: 30,
      sideSeals: 15,
      bottomSealCurve: 52,
      roundCorners: true
    },
    {
      name: 'Standard K-Seal (1 lb)',
      description: 'Standard K-seal pouch specs',
      width: 180,
      height: 260,
      gusset: 80,
      zipper: 28,
      tearNotch: 20,
      sideSeals: 10,
      bottomSealCurve: 40,
      roundCorners: true
    }
  ],
  flat_bottom_one_zipper: [
    {
      name: 'Small One-Side Zip (FBP)',
      description: 'Refer to FBP 120x140x40 with zip',
      width: 120,
      height: 140,
      gusset: 40,
      zipper: 30,
      tearNotch: 18,
      sideSeals: 6.5,
      bottomSealCurve: 20,
      roundCorners: false
    },
    {
      name: 'Medium One-Side Zip (FBP)',
      description: 'Refer to FBP 120x200x40 with zip',
      width: 120,
      height: 200,
      gusset: 40,
      zipper: 30,
      tearNotch: 18,
      sideSeals: 6.5,
      bottomSealCurve: 20,
      roundCorners: false
    }
  ],
  flat_bottom_normal_zipper: [
    {
      name: 'Standard 8SS Pouch (5x8")',
      description: 'Refer to 8SS Pouch - 5 x 8 + 3 inch',
      width: 127,
      height: 203,
      gusset: 76,
      zipper: 30,
      tearNotch: 20,
      sideSeals: 10,
      bottomSealCurve: 38,
      roundCorners: false
    },
    {
      name: 'Large 8SS Pouch (2kg)',
      description: 'Flat bottom bag for bulk items',
      width: 200,
      height: 300,
      gusset: 100,
      zipper: 35,
      tearNotch: 22,
      sideSeals: 10,
      bottomSealCurve: 50,
      roundCorners: false
    }
  ],
  box_bottom: [
    {
      name: 'Box Bottom (95x186x50)',
      description: 'Refer to 231.ai box bottom shape',
      width: 95,
      height: 186,
      gusset: 50,
      zipper: 42,
      tearNotch: 18,
      sideSeals: 12,
      bottomSealCurve: 25,
      roundCorners: false
    },
    {
      name: 'Standard Box Bottom',
      description: 'Standard box bottom pouch dimensions',
      width: 150,
      height: 240,
      gusset: 80,
      zipper: 30,
      tearNotch: 20,
      sideSeals: 10,
      bottomSealCurve: 40,
      roundCorners: false
    }
  ],
  side_gusset: [
    {
      name: 'Side Gusset Pouch (20x35x11)',
      description: 'Refer to SG 20+11x(35+11) cm',
      width: 200,
      height: 350,
      gusset: 110,
      zipper: 0,
      tearNotch: 20,
      sideSeals: 10,
      bottomSealCurve: 55,
      roundCorners: false
    },
    {
      name: 'Large Gusset Bag (30x55x12)',
      description: 'Refer to SG 30+12x-55+12- cm',
      width: 300,
      height: 550,
      gusset: 120,
      zipper: 0,
      tearNotch: 24,
      sideSeals: 12,
      bottomSealCurve: 60,
      roundCorners: false
    }
  ],
  three_side_seal: [
    {
      name: 'Flat Sachet (86x116 mm)',
      description: 'Refer to sachet 86 x 116 mm dieline',
      width: 86,
      height: 116,
      gusset: 0,
      zipper: 25,
      tearNotch: 15,
      sideSeals: 5,
      bottomSealCurve: 0,
      roundCorners: false
    },
    {
      name: 'Mini Sachet (60x100 mm)',
      description: 'Refer to sachet 60 x 100 mm dieline',
      width: 60,
      height: 100,
      gusset: 0,
      zipper: 0,
      tearNotch: 12,
      sideSeals: 5,
      bottomSealCurve: 0,
      roundCorners: false
    }
  ],
  center_seal: [
    {
      name: 'Pillow Bag (150x240 mm)',
      description: 'Refer to center seal 150 x 240 mm',
      width: 150,
      height: 240,
      gusset: 0,
      zipper: 0,
      tearNotch: 30,
      sideSeals: 10,
      bottomSealCurve: 0,
      roundCorners: false
    },
    {
      name: 'Tea Filter Pouch (75x140 mm)',
      description: 'Refer to center seal 75 x 140 mm',
      width: 75,
      height: 140,
      gusset: 0,
      zipper: 0,
      tearNotch: 15,
      sideSeals: 8,
      bottomSealCurve: 0,
      roundCorners: false
    }
  ]
};

const DIELINE_SHAPES: DielineShape[] = [
  {
    id: 'stand_up',
    label: 'Stand Up Pouch',
    description: 'Standard doypack with oval bottom gusset',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 15 H68 V26 L66 28 L68 30 V58 C68 65 61 69 50 69 C39 69 32 65 32 58 V30 L34 28 L32 26 Z" />
        <line x1="32" y1="21" x2="68" y2="21" strokeWidth="1" />
        <path d="M32 58 C38 62 62 62 68 58" strokeWidth="1.8" />
        <path d="M35 59 L38 65 M65 59 L62 65" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'k_seal',
    label: 'K-Seal Stand Up',
    description: 'Stand up pouch with diagonal K-seal bottom welds',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 15 H68 V26 L66 28 L68 30 V58 C68 65 61 69 50 69 C39 69 32 65 32 58 V30 L34 28 L32 26 Z" />
        <line x1="32" y1="21" x2="68" y2="21" strokeWidth="1" />
        <path d="M32 58 C38 62 62 62 68 58" strokeWidth="1.8" />
        <path d="M32 50 L42 58 M68 50 L58 58" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    id: 'flat_bottom_one_zipper',
    label: 'One-Side Zip FBP',
    description: 'Flat bottom pouch with zipper on front side only',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H54 V70 H32 Z" />
        <path d="M54 18 L68 23 V64 L54 70" />
        <path d="M32 18 L54 18 L68 23" strokeWidth="3" />
        <path d="M32 70 L54 70 L68 64" />
        <rect x="36" y="28" width="12" height="4" rx="1" strokeWidth="1" />
        <line x1="48" y1="30" x2="52" y2="30" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'flat_bottom_normal_zipper',
    label: 'Normal Zip FBP',
    description: 'Flat bottom pouch with standard reclosable zipper',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H54 V70 H32 Z" />
        <path d="M54 18 L68 23 V64 L54 70" />
        <path d="M32 18 L54 18 L68 23" strokeWidth="3" />
        <path d="M32 70 L54 70 L68 64" />
        <line x1="32" y1="24" x2="54" y2="24" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'box_bottom',
    label: 'Box Bottom Pouch',
    description: 'Classic box bottom bag without zipper / custom zip',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 18 H52 V68 H32 Z" />
        <path d="M52 18 L66 21 V63 L52 68" />
        <path d="M32 68 L42 72 L52 68 L66 63" />
        <path d="M42 72 V68" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M32 18 L52 18 L66 21" strokeWidth="3" />
        <path d="M59 19.5 V65" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: 'side_gusset',
    label: 'Side Gusset Pouch',
    description: 'Side gusset bag with center back seam seal',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M35 15 H65 V20 L61 25 V70 H39 V25 L35 20 Z" />
        <path d="M44 25 V70" strokeWidth="1.5" />
        <path d="M56 25 V70" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="35" y1="20" x2="65" y2="20" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'three_side_seal',
    label: '3 Side Seal Pouch',
    description: 'Flat sachet sealed on left, right, and bottom',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M32 15 H68 V26 L65 28 L68 30 V64 C68 68 65 71 61 71 H39 C35 71 32 68 32 64 V30 L35 28 L32 26 Z" />
        <line x1="32" y1="20" x2="68" y2="20" strokeWidth="1" />
        <path d="M37 15 V66 H63 V15" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    id: 'center_seal',
    label: 'Center Seal Pouch',
    description: 'Pillow pack with vertical overlap back seam',
    icon: (
      <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-11">
        <path d="M30 15 H70" strokeWidth="3" />
        <path d="M30 67 H70" strokeWidth="3" />
        <path d="M30 15 C21 28 21 54 30 67" />
        <path d="M70 15 C79 28 79 54 70 67" />
        <path d="M47 15 V67 M53 15 V67" strokeWidth="1.2" />
        <path d="M47 25 L53 30 M47 40 L53 45 M47 55 L53 60" strokeWidth="1" />
      </svg>
    )
  }
];

export default function PouchDielineCreatorPage() {
  const isPouchDomain = getDomain() === 'pouch'
  const checkboxClass = isPouchDomain 
    ? "rounded-none border-2 border-black text-black focus:ring-0 w-5 h-5 cursor-pointer" 
    : "rounded border border-gray-300 bg-white accent-green-500 focus:ring-0 w-5 h-5 cursor-pointer"

  // Active Shape State
  const [activeShape, setActiveShape] = useState<'stand_up' | 'k_seal' | 'flat_bottom_one_zipper' | 'flat_bottom_normal_zipper' | 'box_bottom' | 'side_gusset' | 'three_side_seal' | 'center_seal'>('stand_up')

  // Marquee scroll states
  const shapeContainerRef = useRef<HTMLDivElement>(null)
  const [isShapeHovered, setIsShapeHovered] = useState(false)

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

  const handleShapeChange = (shapeId: typeof activeShape) => {
    setActiveShape(shapeId)
    const presets = SHAPE_PRESETS[shapeId]
    if (presets && presets.length > 0) {
      const defaultPreset = presets[0]
      setWidth(defaultPreset.width)
      setHeight(defaultPreset.height)
      setGusset(defaultPreset.gusset)
      setZipper(defaultPreset.zipper)
      setTearNotch(defaultPreset.tearNotch)
      setSideSeals(defaultPreset.sideSeals)
      setBottomSealCurve(defaultPreset.bottomSealCurve)
      setRoundCorners(defaultPreset.roundCorners)
      setHasZipper(defaultPreset.zipper > 0)
      setHasValve(false)
    }
  }

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

  // Prepress Verification Checklist & Decision States
  const [checklist, setChecklist] = useState({
    size: false,
    colors: false,
    eyespot: false,
    weight: false,
    upc: false,
    rollDirection: false,
    addons: false,
    seal: false
  })
  const [decision, setDecision] = useState<string | null>(null)

  // Sizing String Input Buffers for Real-time Dual-Unit Conversion (Inches & MM)
  const [widthMmStr, setWidthMmStr] = useState('170')
  const [widthInchStr, setWidthInchStr] = useState('6.69')
  const [heightMmStr, setHeightMmStr] = useState('270')
  const [heightInchStr, setHeightInchStr] = useState('10.63')
  const [gussetMmStr, setGussetMmStr] = useState('90')
  const [gussetInchStr, setGussetInchStr] = useState('3.54')
  const [zipperMmStr, setZipperMmStr] = useState('27')
  const [zipperInchStr, setZipperInchStr] = useState('1.06')
  const [tearNotchMmStr, setTearNotchMmStr] = useState('18')
  const [tearNotchInchStr, setTearNotchInchStr] = useState('0.71')
  const [sideSealsMmStr, setSideSealsMmStr] = useState('10')
  const [sideSealsInchStr, setSideSealsInchStr] = useState('0.39')
  const [bottomCurveMmStr, setBottomCurveMmStr] = useState('45')
  const [bottomCurveInchStr, setBottomCurveInchStr] = useState('1.77')

  // Upload/Submit State
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Synchronize string inputs when the numeric state changes (presets, sliders, URL parameters)
  useEffect(() => {
    if (document.activeElement?.id !== 'width-mm-input' && document.activeElement?.id !== 'width-inch-input') {
      setWidthMmStr(width.toString());
      setWidthInchStr((width / 25.4).toFixed(2));
    }
  }, [width]);

  useEffect(() => {
    if (document.activeElement?.id !== 'height-mm-input' && document.activeElement?.id !== 'height-inch-input') {
      setHeightMmStr(height.toString());
      setHeightInchStr((height / 25.4).toFixed(2));
    }
  }, [height]);

  useEffect(() => {
    if (document.activeElement?.id !== 'gusset-mm-input' && document.activeElement?.id !== 'gusset-inch-input') {
      setGussetMmStr(gusset.toString());
      setGussetInchStr((gusset / 25.4).toFixed(2));
    }
  }, [gusset]);

  useEffect(() => {
    if (document.activeElement?.id !== 'zipper-mm-input' && document.activeElement?.id !== 'zipper-inch-input') {
      setZipperMmStr(zipper.toString());
      setZipperInchStr((zipper / 25.4).toFixed(2));
    }
  }, [zipper]);

  useEffect(() => {
    if (document.activeElement?.id !== 'tearNotch-mm-input' && document.activeElement?.id !== 'tearNotch-inch-input') {
      setTearNotchMmStr(tearNotch.toString());
      setTearNotchInchStr((tearNotch / 25.4).toFixed(2));
    }
  }, [tearNotch]);

  useEffect(() => {
    if (document.activeElement?.id !== 'sideSeals-mm-input' && document.activeElement?.id !== 'sideSeals-inch-input') {
      setSideSealsMmStr(sideSeals.toString());
      setSideSealsInchStr((sideSeals / 25.4).toFixed(2));
    }
  }, [sideSeals]);

  useEffect(() => {
    if (document.activeElement?.id !== 'bottomSealCurve-mm-input' && document.activeElement?.id !== 'bottomSealCurve-inch-input') {
      setBottomCurveMmStr(bottomSealCurve.toString());
      setBottomCurveInchStr((bottomSealCurve / 25.4).toFixed(2));
    }
  }, [bottomSealCurve]);

  // Handler functions for Millimeter and Inch text inputs (preserving typing decimal strings)
  const handleWidthChangeMm = (valStr: string) => {
    setWidthMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setWidth(parsed);
      setWidthInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleWidthChangeInch = (valStr: string) => {
    setWidthInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setWidth(mmVal);
      setWidthMmStr(mmVal.toString());
    }
  };

  const handleHeightChangeMm = (valStr: string) => {
    setHeightMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setHeight(parsed);
      setHeightInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleHeightChangeInch = (valStr: string) => {
    setHeightInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setHeight(mmVal);
      setHeightMmStr(mmVal.toString());
    }
  };

  const handleGussetChangeMm = (valStr: string) => {
    setGussetMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setGusset(parsed);
      setGussetInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleGussetChangeInch = (valStr: string) => {
    setGussetInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setGusset(mmVal);
      setGussetMmStr(mmVal.toString());
    }
  };

  const handleTearNotchChangeMm = (valStr: string) => {
    setTearNotchMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setTearNotch(parsed);
      setTearNotchInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleTearNotchChangeInch = (valStr: string) => {
    setTearNotchInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setTearNotch(mmVal);
      setTearNotchMmStr(mmVal.toString());
    }
  };

  const handleSideSealsChangeMm = (valStr: string) => {
    setSideSealsMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setSideSeals(parsed);
      setSideSealsInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleSideSealsChangeInch = (valStr: string) => {
    setSideSealsInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setSideSeals(mmVal);
      setSideSealsMmStr(mmVal.toString());
    }
  };

  const handleBottomCurveChangeMm = (valStr: string) => {
    setBottomCurveMmStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      setBottomSealCurve(parsed);
      setBottomCurveInchStr((parsed / 25.4).toFixed(2));
    }
  };

  const handleBottomCurveChangeInch = (valStr: string) => {
    setBottomCurveInchStr(valStr);
    const parsed = parseFloat(valStr);
    if (!isNaN(parsed) && parsed > 0) {
      const mmVal = Math.round(parsed * 25.4);
      setBottomSealCurve(mmVal);
      setBottomCurveMmStr(mmVal.toString());
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setUploadFile(file)
      setUploadSuccess(false)
      setUploadProgress(0)
    }
  }

  const simulateUpload = () => {
    if (!uploadFile) return
    setIsUploading(true)
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
        setUploadSuccess(true)
      }
    }, 120)
  }

  const resetUpload = () => {
    setUploadFile(null)
    setUploadProgress(0)
    setUploadSuccess(false)
    setIsUploading(false)
  }

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
    const shapeParam = params.get('shape')
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

    if (shapeParam && ['stand_up', 'k_seal', 'flat_bottom_one_zipper', 'flat_bottom_normal_zipper', 'box_bottom', 'side_gusset', 'three_side_seal', 'center_seal'].includes(shapeParam)) {
      setActiveShape(shapeParam as any)
    }

    if (w) setWidth(Number(w))
    if (h) setHeight(Number(h))
    if (g) setGusset(Number(g))
    if (z) setZipper(Number(z))
    if (tn) setTearNotch(Number(tn))
    if (s) setSideSeals(Number(s))
    if (c) setBottomSealCurve(Number(c))
    if (rc) setRoundCorners(rc === 'true')
    if (hz) setHasZipper(hz === 'true')
    if (hv) setHasValve(hv === 'true')
    if (vp) setValvePosition(Number(vp))
  }, [])

  // Auto-scroll marquee effect for the Shape Banner
  useEffect(() => {
    const container = shapeContainerRef.current
    if (!container) return

    let animationFrameId: number
    let pauseTimeout: NodeJS.Timeout
    let active = true

    const scrollSpeed = 0.45 // pixels per frame

    const scroll = () => {
      if (active && !isShapeHovered) {
        container.scrollLeft += scrollSpeed
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
          container.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    const handleInteraction = () => {
      active = false
      clearTimeout(pauseTimeout)
      pauseTimeout = setTimeout(() => {
        active = true
      }, 4000)
    }

    container.addEventListener('wheel', handleInteraction, { passive: true })
    container.addEventListener('touchmove', handleInteraction, { passive: true })

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(pauseTimeout)
      container.removeEventListener('wheel', handleInteraction)
      container.removeEventListener('touchmove', handleInteraction)
    }
  }, [isShapeHovered, activeShape])

  // Sync bottomSealCurve based on gusset and shape
  useEffect(() => {
    if (activeShape === 'stand_up' || activeShape === 'k_seal') {
      setBottomSealCurve(Math.round(gusset / 2))
    } else {
      setBottomSealCurve(0)
    }
  }, [gusset, activeShape])

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

  const scrollShapesLeft = () => {
    shapeContainerRef.current?.scrollBy({ left: -260, behavior: 'smooth' })
  }

  const scrollShapesRight = () => {
    shapeContainerRef.current?.scrollBy({ left: 260, behavior: 'smooth' })
  }

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

    const customDielineUrl = `https://achievepack.com/dieline-creator?shape=${activeShape}&w=${width}&h=${height}&g=${gusset}&z=${zipper}&tn=${tearNotch}&s=${sideSeals}&c=${bottomSealCurve}&rc=${roundCorners}&hz=${hasZipper}&hv=${hasValve}&vp=${valvePosition}`

    const featuresList = [
      hasZipper ? 'Zipper' : null,
      hasValve ? `Degassing Valve (${valvePosition}mm)` : null
    ].filter(Boolean).join(', ')

    const shapeDisplayName = activeShape.toUpperCase().replace(/_/g, ' ')
    const dielineDisplayName = `Custom ${shapeDisplayName} (${width}x${height}${gusset > 0 ? `x${gusset}` : ''}mm${featuresList ? ` w/ ${featuresList}` : ''})`

    try {
      const response = await fetch('/api/send-dieline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          dielineFilename: `achievepack-custom-${activeShape}-${width}x${height}${gusset > 0 ? `x${gusset}` : ''}-${pdfFormat}.pdf`,
          dielineUrl: customDielineUrl,
          dielineDisplayName: dielineDisplayName,
          turnstileToken,
          shape: shapeDisplayName,
          width,
          height,
          gusset,
          unit: 'mm',
          capacity: `${width}x${height}${gusset > 0 ? `x${gusset}` : ''}mm Custom Size${featuresList ? ` (${featuresList})` : ''}`
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
    setHasZipper(preset.zipper > 0)
    setHasValve(false)
  }

  // Auto-calculated scales for side-by-side proportional rendering in canvas aspect box
  const scales = useMemo(() => {
    const spacing = 30
    let totalW = width * 2 + spacing
    let totalH = height + gusset + spacing

    if (activeShape === 'three_side_seal') {
      totalW = width * 2 + spacing
      totalH = height + spacing
    } else if (activeShape === 'center_seal') {
      totalW = width * 2 + sideSeals * 2 + spacing
      totalH = height + spacing
    } else if (activeShape === 'side_gusset') {
      totalW = (width + gusset) * 2 + spacing
      totalH = height + spacing
    } else if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
      totalW = (width + gusset) * 2 + spacing
      totalH = height + gusset + spacing
    }

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
  }, [width, height, gusset, zipper, tearNotch, sideSeals, bottomSealCurve, valvePosition, activeShape])

  // PDF Generation using crisp vector commands
  const handlePdfDownload = async () => {
    setIsExporting(true);
    
    // Simulate prepress check
    await new Promise((resolve) => setTimeout(resolve, 1200));

    try {
      const margin = 20;
      const spacing = 15;
      
      if (pdfFormat === '1to1') {
        // AI Vector Template - 1:1 Exact Print Artboard Layout
        let canvasW = width * 2 + 30 + margin * 2;
        let canvasH = height + gusset + 40 + margin * 2;

        if (activeShape === 'three_side_seal') {
          canvasW = width * 2 + 30 + margin * 2;
          canvasH = height + 40 + margin * 2;
        } else if (activeShape === 'center_seal') {
          canvasW = width * 2 + sideSeals * 2 + 30 + margin * 2;
          canvasH = height + 40 + margin * 2;
        } else if (activeShape === 'side_gusset') {
          canvasW = (width + gusset) * 2 + 60 + margin * 2;
          canvasH = height + 40 + margin * 2;
        } else if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
          canvasW = (width + gusset) * 2 + 60 + margin * 2;
          canvasH = height + gusset + 40 + margin * 2;
        }

        // Convert canvas dimensions to points for the jsPDF format bounds
        const canvasW_pt = canvasW * 72 / 25.4;
        const canvasH_pt = canvasH * 72 / 25.4;

        const doc = new jsPDF({
          unit: 'mm',
          format: [canvasW_pt, canvasH_pt]
        });

        // Background
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, canvasW, canvasH, 'F');

        // Tech grid
        if (showGrid) {
          doc.setDrawColor(230, 240, 255);
          doc.setLineWidth(0.2);
          for (let x = 0; x < canvasW; x += 10) doc.line(x, 0, x, canvasH);
          for (let y = 0; y < canvasH; y += 10) doc.line(0, y, canvasW, y);
        }

        // Frame
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.5);
        doc.rect(5, 5, canvasW - 10, canvasH - 10);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(30, 41, 59);
        doc.text('ACHIEVE PACK PREPRESS DIELINE CERTIFICATE', 10, 15);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8);
        doc.text(`1:1 Scale Print Ready Adobe Illustrator Layer-Aligned Vector Template • Shape: ${activeShape.toUpperCase().replace(/_/g, ' ')}`, 10, 20);

        // Tech specs footer table
        doc.setFont('Helvetica', 'bold');
        doc.text(`Width: ${width}mm | Height: ${height}mm ${gusset > 0 ? `| Gusset: ${gusset}mm` : ''} | Zipper: ${hasZipper ? `${zipper}mm` : 'None'} | Valve: ${hasValve ? `${valvePosition}mm` : 'None'} | Tear Notch: ${tearNotch}mm | Corner: ${roundCorners ? 'Rounded' : 'Square'}`, 10, canvasH - 10);

        const ctx = doc.context2d as any;

        // Shared drawing subroutines
        const drawStandardPanel = (startX: number, panelY: number, label: string) => {
          // Bleed Border (3mm)
          if (showBleedLines) {
            doc.setDrawColor(16, 185, 129);
            doc.setLineWidth(0.3);
            doc.setLineDashPattern([2, 2], 0);
            doc.rect(startX - 3, panelY - 3, width + 6, height + 6);
            doc.setLineDashPattern([], 0);
          }

          // Side Seals overlay
          ctx.beginPath();
          ctx.fillStyle = 'rgb(240, 240, 240)';
          if (roundCorners) {
            const r = 8;
            ctx.moveTo(startX + sideSeals, panelY);
            ctx.lineTo(startX + r, panelY);
            ctx.quadraticCurveTo(startX, panelY, startX, panelY + r);
            ctx.lineTo(startX, panelY + height - r);
            ctx.quadraticCurveTo(startX, panelY + height, startX + r, panelY + height);
            ctx.lineTo(startX + sideSeals, panelY + height);
            ctx.closePath();
            ctx.fill();

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

          // Cut Lines
          if (showCutLines) {
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.6);
            if (roundCorners) {
              doc.roundedRect(startX, panelY, width, height, 8, 8);
            } else {
              doc.rect(startX, panelY, width, height);
            }
          }

          // Zipper Fold Crease
          if (hasZipper && showFoldLines) {
            doc.setDrawColor(168, 85, 247);
            doc.setLineWidth(0.4);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(startX, panelY + zipper, startX + width, panelY + zipper);
            doc.setLineDashPattern([], 0);
          }

          // Tear Notch
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.5);
          doc.line(startX - 2, panelY + tearNotch, startX + 2, panelY + tearNotch);
          doc.line(startX + width - 2, panelY + tearNotch, startX + width + 2, panelY + tearNotch);

          // Valve Center
          if (hasValve && label === 'Front') {
            const valveX = startX + width / 2;
            const valveY = panelY + valvePosition;
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.4);
            doc.circle(valveX, valveY, 3, 'D');
            doc.circle(valveX, valveY, 1.5, 'D');
            doc.setLineWidth(0.15);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(valveX - 8, valveY, valveX + 8, valveY);
            doc.line(valveX, valveY - 8, valveX, valveY + 8);
            doc.setLineDashPattern([], 0);
            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(6);
            doc.text('VALVE', valveX + 4, valveY + 1.5);
          }

          // Bottom Seal curve (Stand Up) or K-Seal welds
          if (activeShape === 'k_seal') {
            // Draw visual K-seal diagonal lines
            doc.setDrawColor(59, 130, 246);
            doc.setLineWidth(0.4);
            doc.setLineDashPattern([2, 2], 0);
            doc.line(startX, panelY + height - bottomSealCurve, startX + sideSeals * 2, panelY + height);
            doc.line(startX + width, panelY + height - bottomSealCurve, startX + width - sideSeals * 2, panelY + height);
            doc.setLineDashPattern([], 0);
          } else if (activeShape === 'stand_up') {
            ctx.beginPath();
            ctx.strokeStyle = 'rgb(59, 130, 246)';
            ctx.lineWidth = 0.4;
            if (typeof ctx.setLineDash === 'function') ctx.setLineDash([3, 3]);
            ctx.moveTo(startX, panelY + height - bottomSealCurve);
            ctx.bezierCurveTo(
              startX + width * 0.25, panelY + height - bottomSealCurve * 0.3,
              startX + width * 0.75, panelY + height - bottomSealCurve * 0.3,
              startX + width, panelY + height - bottomSealCurve
            );
            ctx.stroke();
            if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);
          }

          // Safe Art Zone
          if (showSafeZone) {
            const safeTop = hasZipper ? (zipper + 10) : 15;
            const safeHeight = height - safeTop - (activeShape === 'stand_up' || activeShape === 'k_seal' ? bottomSealCurve : 10) - 10;
            doc.setDrawColor(245, 158, 11);
            doc.setLineWidth(0.3);
            doc.setLineDashPattern([1, 2], 0);
            doc.rect(startX + sideSeals + 3, panelY + safeTop, width - sideSeals * 2 - 6, safeHeight);
            doc.setLineDashPattern([], 0);
          }

          doc.setFont('Helvetica', 'bold');
          doc.setFontSize(14);
          doc.setTextColor(150, 150, 150);
          doc.text(label.toUpperCase(), startX + width / 2 - 12, panelY + height / 2);
        };

        // RENDER SHAPE SPECIFIC PANELS
        if (activeShape === 'stand_up' || activeShape === 'k_seal') {
          const frontX = margin;
          const backX = margin + width + 30;
          const panelY = margin + 20;

          drawStandardPanel(frontX, panelY, 'Front');
          drawStandardPanel(backX, panelY, 'Back');

          // Gusset
          const gussetY = panelY + height + 20;
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.6);
          doc.rect(frontX, gussetY, width, gusset, 'D');

          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([3, 3], 0);
          doc.line(frontX, gussetY + gusset / 2, frontX + width, gussetY + gusset / 2);
          doc.setLineDashPattern([], 0);
          doc.setFont('Helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(30, 41, 59);
          doc.text('BOTTOM GUSSET', frontX + width / 2 - 18, gussetY + gusset / 2 - 3);

          // Annotations
          doc.setFontSize(8);
          doc.setTextColor(59, 130, 246);
          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.3);
          doc.line(frontX, panelY - 8, frontX + width, panelY - 8);
          doc.text(`${width}mm`, frontX + width / 2 - 5, panelY - 11);
          doc.line(frontX - 6, panelY, frontX - 6, panelY + height);
          doc.text(`${height}mm`, frontX - 11, panelY + height / 2, { angle: 90 });
          doc.line(frontX - 6, gussetY, frontX - 6, gussetY + gusset);
          doc.text(`${gusset}mm`, frontX - 11, gussetY + gusset / 2, { angle: 90 });

        } else if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
          const lGussetX = margin;
          const frontX = margin + gusset + spacing;
          const rGussetX = margin + gusset + width + spacing * 2;
          const backX = margin + gusset * 2 + width + spacing * 3;
          const panelY = margin + 20;

          // Draw Left Side Gusset
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.6);
          doc.rect(lGussetX, panelY, gusset, height);
          // Left gusset center crease
          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([2, 2], 0);
          doc.line(lGussetX + gusset / 2, panelY, lGussetX + gusset / 2, panelY + height);
          // Left gusset V fold
          doc.line(lGussetX, panelY + height, lGussetX + gusset / 2, panelY + height - gusset / 2);
          doc.line(lGussetX + gusset, panelY + height, lGussetX + gusset / 2, panelY + height - gusset / 2);
          doc.setLineDashPattern([], 0);

          // Draw Right Side Gusset
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.6);
          doc.rect(rGussetX, panelY, gusset, height);
          // Right gusset center crease
          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([2, 2], 0);
          doc.line(rGussetX + gusset / 2, panelY, rGussetX + gusset / 2, panelY + height);
          doc.line(rGussetX, panelY + height, rGussetX + gusset / 2, panelY + height - gusset / 2);
          doc.line(rGussetX + gusset, panelY + height, rGussetX + gusset / 2, panelY + height - gusset / 2);
          doc.setLineDashPattern([], 0);

          // Draw Front & Back panels
          const drawFBPPanel = (startX: number, label: string) => {
            // Cut Boundary
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.6);
            doc.rect(startX, panelY, width, height);

            // Shaded vertical seals (6.5mm)
            ctx.fillStyle = 'rgb(240, 240, 240)';
            ctx.fillRect(startX, panelY, sideSeals, height);
            ctx.fillRect(startX + width - sideSeals, panelY, sideSeals, height);
            ctx.fillRect(startX, panelY + height - sideSeals, width, sideSeals);

            // Zipper crease
            const shouldDrawZip = (activeShape === 'flat_bottom_one_zipper' && label === 'Front') || 
                                 (activeShape === 'flat_bottom_normal_zipper' && hasZipper) || 
                                 (activeShape === 'box_bottom' && hasZipper);
            if (shouldDrawZip) {
              doc.setDrawColor(168, 85, 247);
              doc.setLineWidth(0.45);
              doc.setLineDashPattern([1, 1], 0);
              doc.line(startX, panelY + zipper, startX + width, panelY + zipper);
              doc.setLineDashPattern([], 0);
              if (activeShape === 'flat_bottom_one_zipper' && label === 'Front') {
                doc.setDrawColor(168, 85, 247);
                doc.rect(startX + sideSeals + 3, panelY + zipper - 3, width - sideSeals * 2 - 6, 6);
              }
            }

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text(label.toUpperCase(), startX + width / 2 - 10, panelY + height / 2);
          };

          drawFBPPanel(frontX, 'Front');
          drawFBPPanel(backX, 'Back');

          // Draw Bottom Panel
          const gussetY = panelY + height + 20;
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.6);
          doc.rect(frontX, gussetY, width, gusset);

          doc.setDrawColor(59, 130, 246);
          doc.setLineWidth(0.4);
          doc.setLineDashPattern([2, 2], 0);
          doc.line(frontX, gussetY + gusset / 2, frontX + width, gussetY + gusset / 2);
          doc.line(frontX, gussetY, frontX + gusset / 2, gussetY + gusset / 2);
          doc.line(frontX + width, gussetY, frontX + width - gusset / 2, gussetY + gusset / 2);
          doc.line(frontX, gussetY + gusset, frontX + gusset / 2, gussetY + gusset / 2);
          doc.line(frontX + width, gussetY + gusset, frontX + width - gusset / 2, gussetY + gusset / 2);
          doc.setLineDashPattern([], 0);

          doc.setFont('Helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(30, 41, 59);
          doc.text('BOTTOM PANEL', frontX + width / 2 - 14, gussetY + gusset / 2 - 2);

        } else if (activeShape === 'side_gusset') {
          const lGussetX = margin;
          const frontX = margin + gusset + spacing;
          const rGussetX = margin + gusset + width + spacing * 2;
          const backX = margin + gusset * 2 + width + spacing * 3;
          const panelY = margin + 20;

          // Draw Left and Right Side Gussets
          [lGussetX, rGussetX].forEach(x => {
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.6);
            doc.rect(x, panelY, gusset, height);

            doc.setDrawColor(59, 130, 246);
            doc.setLineWidth(0.4);
            doc.setLineDashPattern([2, 2], 0);
            doc.line(x + gusset / 2, panelY, x + gusset / 2, panelY + height);
            // bottom folds
            doc.line(x, panelY + height - sideSeals, x + gusset / 2, panelY + height - sideSeals - gusset / 2);
            doc.line(x + gusset, panelY + height - sideSeals, x + gusset / 2, panelY + height - sideSeals - gusset / 2);
            doc.setLineDashPattern([], 0);
          });

          // Draw Front & Back
          const drawSGPanel = (startX: number, label: string) => {
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.6);
            doc.rect(startX, panelY, width, height);

            // Shaded bottom seal (10mm) and vertical back seam if Back
            ctx.fillStyle = 'rgb(240, 240, 240)';
            ctx.fillRect(startX, panelY + height - sideSeals, width, sideSeals);
            if (label === 'Back') {
              ctx.fillRect(startX + width - sideSeals, panelY, sideSeals, height);
            }

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text(label.toUpperCase(), startX + width / 2 - 10, panelY + height / 2);
          };

          drawSGPanel(frontX, 'Front');
          drawSGPanel(backX, 'Back');

        } else if (activeShape === 'three_side_seal') {
          const frontX = margin;
          const backX = margin + width + 30;
          const panelY = margin + 20;

          const draw3SSPanel = (startX: number, label: string) => {
            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.6);
            doc.rect(startX, panelY, width, height);

            // Shaded weld seals (Left, Right, Bottom = 5mm, Top = 10mm)
            ctx.fillStyle = 'rgb(240, 240, 240)';
            ctx.fillRect(startX, panelY, width, 10); // top seal
            ctx.fillRect(startX, panelY, sideSeals, height); // left
            ctx.fillRect(startX + width - sideSeals, panelY, sideSeals, height); // right
            ctx.fillRect(startX, panelY + height - sideSeals, width, sideSeals); // bottom

            if (hasZipper) {
              doc.setDrawColor(168, 85, 247);
              doc.setLineWidth(0.45);
              doc.setLineDashPattern([1, 1], 0);
              doc.line(startX, panelY + zipper, startX + width, panelY + zipper);
              doc.setLineDashPattern([], 0);
            }

            doc.setFont('Helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text(label.toUpperCase(), startX + width / 2 - 10, panelY + height / 2);
          };

          draw3SSPanel(frontX, 'Front');
          draw3SSPanel(backX, 'Back');

        } else if (activeShape === 'center_seal') {
          const lBackX = margin;
          const frontX = margin + width / 2 + 15;
          const rBackX = margin + width * 1.5 + 30;
          const panelY = margin + 20;

          // Draw Left Back Half (Width / 2)
          doc.setDrawColor(225, 29, 72);
          doc.setLineWidth(0.6);
          doc.rect(lBackX, panelY, width / 2, height);
          ctx.fillStyle = 'rgb(240, 240, 240)';
          ctx.fillRect(lBackX, panelY, sideSeals, height); // vertical seam overlap
          ctx.fillRect(lBackX, panelY, width / 2, 10); // top seal
          ctx.fillRect(lBackX, panelY + height - 10, width / 2, 10); // bottom seal

          // Draw Right Back Half (Width / 2)
          doc.rect(rBackX, panelY, width / 2, height);
          ctx.fillRect(rBackX + width / 2 - sideSeals, panelY, sideSeals, height); // vertical seam overlap
          ctx.fillRect(rBackX, panelY, width / 2, 10); // top seal
          ctx.fillRect(rBackX, panelY + height - 10, width / 2, 10); // bottom seal

          // Draw Front Panel
          doc.rect(frontX, panelY, width, height);
          ctx.fillRect(frontX, panelY, width, 10); // top seal
          ctx.fillRect(frontX, panelY + height - 10, width, 10); // bottom seal

          doc.setFont('Helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(150, 150, 150);
          doc.text('LEFT BACK', lBackX + 2, panelY + height / 2);
          doc.text('RIGHT BACK', rBackX + 2, panelY + height / 2);
          doc.text('FRONT', frontX + width / 2 - 10, panelY + height / 2);
        }

        // Programmatic Blob download trigger
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `achievepack-${activeShape}-dieline-${width}x${height}-${pdfFormat}.pdf`;
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
        doc.text(`Official B2B Prepress Layout Blueprint • Generated at A4 Landscape Scale • Shape: ${activeShape.toUpperCase().replace(/_/g, ' ')}`, 15, 20);

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
          ['Shape Type:', activeShape.replace(/_/g, ' ').toUpperCase()],
          ['Format Size:', `${width} x ${height} mm`],
          ...(activeShape !== 'three_side_seal' && activeShape !== 'center_seal' ? [['Gusset Size:', `${gusset} mm`]] : []),
          ['Zipper Depth:', hasZipper ? `${zipper} mm` : 'None'],
          ['Tear Notch:', `${tearNotch} mm`],
          ['Side/Edge Seals:', `${sideSeals} mm`],
          ...(activeShape === 'stand_up' || activeShape === 'k_seal' ? [['Gusset Seal:', `${bottomSealCurve} mm`]] : []),
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
        let totalW = width * 2 + 30;
        let totalH = height + gusset;
        if (activeShape === 'three_side_seal') {
          totalW = width * 2 + 30;
          totalH = height;
        } else if (activeShape === 'center_seal') {
          totalW = width * 2 + sideSeals * 2 + 30;
          totalH = height;
        } else if (activeShape === 'side_gusset') {
          totalW = (width + gusset) * 2 + 60;
          totalH = height;
        } else if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
          totalW = (width + gusset) * 2 + 60;
          totalH = height + gusset;
        }

        const scaleX = (viewW - 40) / totalW;
        const scaleY = (viewH - 45) / totalH;
        const pScale = Math.min(scaleX, scaleY, 0.45);

        const w = width * pScale;
        const h = height * pScale;
        const g = gusset * pScale;
        const z = zipper * pScale;
        const tn = tearNotch * pScale;
        const s = sideSeals * pScale;
        const curve = bottomSealCurve * pScale;

        const ctx = doc.context2d as any;

        // Render scaled paths inside A4 viewport
        if (activeShape === 'stand_up' || activeShape === 'k_seal') {
          const fX = viewX + 15;
          const bX = fX + w + 10;
          const pY = viewY + 15;

          // Draw Front & Back Panel Scaled
          [fX, bX].forEach((x, idx) => {
            const label = idx === 0 ? 'Front' : 'Back';
            ctx.fillStyle = 'rgb(245, 245, 245)';
            ctx.fillRect(x, pY, w, h);

            doc.setDrawColor(225, 29, 72);
            doc.setLineWidth(0.4);
            if (roundCorners) {
              doc.roundedRect(x, pY, w, h, 3, 3);
            } else {
              doc.rect(x, pY, w, h);
            }

            if (hasZipper) {
              doc.setDrawColor(168, 85, 247);
              doc.setLineWidth(0.25);
              doc.setLineDashPattern([1, 1], 0);
              doc.line(x, pY + z, x + w, pY + z);
              doc.setLineDashPattern([], 0);
            }

            if (activeShape === 'k_seal') {
              doc.setDrawColor(59, 130, 246);
              doc.line(x, pY + h - curve, x + s * 2, pY + h);
              doc.line(x + w, pY + h - curve, x + w - s * 2, pY + h);
            } else {
              ctx.beginPath();
              ctx.strokeStyle = 'rgb(59, 130, 246)';
              ctx.lineWidth = 0.4;
              if (typeof ctx.setLineDash === 'function') ctx.setLineDash([2, 2]);
              ctx.moveTo(x, pY + h - curve);
              ctx.bezierCurveTo(x + w * 0.25, pY + h - curve * 0.3, x + w * 0.75, pY + h - curve * 0.3, x + w, pY + h - curve);
              ctx.stroke();
              if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);
            }
          });

          // Gusset
          const bGussetY = pY + h + 8;
          doc.setDrawColor(225, 29, 72);
          doc.rect(fX, bGussetY, w, g);
          doc.setDrawColor(59, 130, 246);
          doc.setLineDashPattern([2, 2], 0);
          doc.line(fX, bGussetY + g / 2, fX + w, bGussetY + g / 2);
          doc.setLineDashPattern([], 0);

        } else if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
          const lGussetX = viewX + 10;
          const fX = lGussetX + g + 5;
          const rGussetX = fX + w + 10;
          const bX = rGussetX + g + 5;
          const pY = viewY + 15;

          // Side Gussets
          [lGussetX, rGussetX].forEach(x => {
            doc.setDrawColor(225, 29, 72);
            doc.rect(x, pY, g, h);
            doc.setDrawColor(59, 130, 246);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(x + g / 2, pY, x + g / 2, pY + h);
            doc.line(x, pY + h, x + g / 2, pY + h - g / 2);
            doc.line(x + g, pY + h, x + g / 2, pY + h - g / 2);
            doc.setLineDashPattern([], 0);
          });

          // Front and Back
          [fX, bX].forEach((x, idx) => {
            const label = idx === 0 ? 'Front' : 'Back';
            doc.setDrawColor(225, 29, 72);
            doc.rect(x, pY, w, h);
            ctx.fillStyle = 'rgb(245, 245, 245)';
            ctx.fillRect(x, pY, s, h);
            ctx.fillRect(x + w - s, pY, s, h);

            const shouldDrawZip = (activeShape === 'flat_bottom_one_zipper' && label === 'Front') || 
                                 (activeShape === 'flat_bottom_normal_zipper' && hasZipper) || 
                                 (activeShape === 'box_bottom' && hasZipper);
            if (shouldDrawZip) {
              doc.setDrawColor(168, 85, 247);
              doc.setLineDashPattern([1, 1], 0);
              doc.line(x, pY + z, x + w, pY + z);
              doc.setLineDashPattern([], 0);
            }
          });

          // Bottom
          const bGussetY = pY + h + 8;
          doc.setDrawColor(225, 29, 72);
          doc.rect(fX, bGussetY, w, g);

        } else if (activeShape === 'side_gusset') {
          const lGussetX = viewX + 10;
          const fX = lGussetX + g + 5;
          const rGussetX = fX + w + 10;
          const bX = rGussetX + g + 5;
          const pY = viewY + 15;

          [lGussetX, rGussetX].forEach(x => {
            doc.setDrawColor(225, 29, 72);
            doc.rect(x, pY, g, h);
            doc.setDrawColor(59, 130, 246);
            doc.setLineDashPattern([1, 1], 0);
            doc.line(x + g / 2, pY, x + g / 2, pY + h);
            doc.line(x, pY + h - s, x + g / 2, pY + h - s - g / 2);
            doc.line(x + g, pY + h - s, x + g / 2, pY + h - s - g / 2);
            doc.setLineDashPattern([], 0);
          });

          [fX, bX].forEach((x, idx) => {
            const label = idx === 0 ? 'Front' : 'Back';
            doc.setDrawColor(225, 29, 72);
            doc.rect(x, pY, w, h);
            ctx.fillStyle = 'rgb(245, 245, 245)';
            ctx.fillRect(x, pY + h - s, w, s);
            if (label === 'Back') ctx.fillRect(x + w - s, pY, s, h);
          });

        } else if (activeShape === 'three_side_seal') {
          const fX = viewX + 15;
          const bX = fX + w + 10;
          const pY = viewY + 15;

          [fX, bX].forEach(x => {
            doc.setDrawColor(225, 29, 72);
            doc.rect(x, pY, w, h);
            ctx.fillStyle = 'rgb(245, 245, 245)';
            ctx.fillRect(x, pY, w, 3); // top
            ctx.fillRect(x, pY, s, h); // left
            ctx.fillRect(x + w - s, pY, s, h); // right
            ctx.fillRect(x, pY + h - s, w, s); // bottom

            if (hasZipper) {
              doc.setDrawColor(168, 85, 247);
              doc.setLineDashPattern([1, 1], 0);
              doc.line(x, pY + z, x + w, pY + z);
              doc.setLineDashPattern([], 0);
            }
          });

        } else if (activeShape === 'center_seal') {
          const lBackX = viewX + 10;
          const fX = lBackX + w / 2 + 5;
          const rBackX = fX + w + 5;
          const pY = viewY + 15;

          // Left Back Half
          doc.setDrawColor(225, 29, 72);
          doc.rect(lBackX, pY, w / 2, h);
          ctx.fillStyle = 'rgb(245, 245, 245)';
          ctx.fillRect(lBackX, pY, s, h);
          ctx.fillRect(lBackX, pY, w / 2, 3);
          ctx.fillRect(lBackX, pY + h - 3, w / 2, 3);

          // Right Back Half
          doc.rect(rBackX, pY, w / 2, h);
          ctx.fillRect(rBackX + w / 2 - s, pY, s, h);
          ctx.fillRect(rBackX, pY, w / 2, 3);
          ctx.fillRect(rBackX, pY + h - 3, w / 2, 3);

          // Front Panel
          doc.rect(fX, pY, w, h);
          ctx.fillRect(fX, pY, w, 3);
          ctx.fillRect(fX, pY + h - 3, w, 3);
        }

        // Programmatic Blob download trigger
        const blob = doc.output('blob');
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `achievepack-${activeShape}-technical-dieline-${width}x${height}-${pdfFormat}.pdf`;
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
        : "font-sans text-gray-800 bg-gray-50"
    }`}>
      <Helmet>
        <title>Interactive Stand-Up Pouch Dieline Creator | Custom Vector Packaging Templates | Achieve Pack</title>
        <meta name="description" content="Design, visual inspect, and download custom stand-up pouch dieline vector templates instantly. Enter width, height, gusset, zipper, round corner toggle, and export crisp 1:1 scale print-ready PDF/Illustrator layouts for free." />
      </Helmet>

      {/* Main Header */}
      <SiteHeader />

      {/* App Main Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 flex flex-col gap-6 min-h-0">
        
        {/* Breadcrumb / Top Header */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <a href="/dieline-finder" className="flex items-center gap-1.5 text-sm font-semibold hover:text-green-500 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Dielines Catalog
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-sm font-bold text-green-500">Interactive Custom Creator</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-bold font-mono rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> 100% Vector Output
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic">
            {DIELINE_SHAPES.find(s => s.id === activeShape)?.label || 'Stand-up Pouch'} Dieline Creator
          </h1>
          <p className="text-sm text-gray-500 max-w-3xl">
            {DIELINE_SHAPES.find(s => s.id === activeShape)?.description || 'Standard doypack with oval bottom gusset'}. 
            Input your custom packaging dimensions below to instantly compute seal lines, zipper placements, tear notch points, and corner cuts. Review the blueprint in real-time, then download a 1:1 vector print-ready PDF template.
          </p>
        </div>

        {/* Shape Selection Banner */}
        <section className="bg-white border border-neutral-200 py-3.5 mb-2 select-none relative group/marquee rounded-3xl shadow-sm">
          <style dangerouslySetInnerHTML={{ __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />
          <div className="px-10 relative">
            {/* Arrow Left Button */}
            <button
              onClick={scrollShapesLeft}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-neutral-200 rounded-full shadow-md flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 hover:text-black opacity-0 group-hover/marquee:opacity-100 focus:opacity-100 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div 
              ref={shapeContainerRef}
              onMouseEnter={() => setIsShapeHovered(true)}
              onMouseLeave={() => setIsShapeHovered(false)}
              className="overflow-x-auto no-scrollbar bg-white scroll-smooth relative"
            >
              <div className="flex whitespace-nowrap gap-3.5 py-1">
                {DIELINE_SHAPES.map((item) => {
                  const isActive = activeShape === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleShapeChange(item.id)}
                      className={`flex-shrink-0 flex flex-col items-center justify-between py-3.5 px-4 w-[130px] h-[110px] border rounded-xl transition-all duration-200 group cursor-pointer relative overflow-hidden ${
                        isActive 
                          ? (isPouchDomain 
                              ? 'border-black bg-gradient-to-b from-[#00FFFF]/30 to-[#D4FF00]/10 text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                              : 'border-green-500 bg-gradient-to-b from-green-50/80 to-green-100/40 text-green-700 font-black shadow-sm')
                          : (isPouchDomain 
                              ? 'border-black/20 hover:border-black/50 text-black hover:bg-neutral-50' 
                              : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/80 text-neutral-800 hover:text-green-600')
                      }`}
                    >
                      <span className={`text-[10px] font-black uppercase text-center tracking-tight mb-2 min-h-[28px] flex items-center justify-center transition-colors duration-150 leading-tight whitespace-normal ${
                        isActive 
                          ? (isPouchDomain ? 'text-black' : 'text-green-700 animate-pulse') 
                          : 'text-neutral-800 group-hover:text-green-600'
                      }`}>
                        {item.label}
                      </span>
                      
                      <div className={`w-12 h-9 flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${
                        isActive 
                          ? (isPouchDomain ? 'text-black' : 'text-green-600') 
                          : 'text-neutral-500 group-hover:text-neutral-800'
                      }`}>
                        {item.icon}
                      </div>
                      
                      {/* Active highlight indicator */}
                      {isActive && (
                        <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${isPouchDomain ? 'bg-black' : 'bg-green-600'}`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Arrow Right Button */}
            <button
              onClick={scrollShapesRight}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-neutral-200 rounded-full shadow-md flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all text-neutral-600 hover:text-black opacity-0 group-hover/marquee:opacity-100 focus:opacity-100 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:min-h-[700px]">
          
          {/* LEFT PANEL: Interactive Controls (5 Columns) - independently scrollable */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:max-h-[calc(100vh-240px)] lg:overflow-y-auto pr-1 pb-6" style={{scrollbarGutter: 'stable'}}>
            
            {/* Presets Box */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl flex flex-col gap-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">
                  Quick Sizing Presets
                </span>
                <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full font-mono">
                  Approved Specs
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(SHAPE_PRESETS[activeShape] || []).map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className="text-left p-3 bg-gray-50 border border-gray-200 hover:border-green-500 rounded-xl transition-all flex flex-col gap-1"
                  >
                    <span className="text-xs font-bold text-gray-800 truncate">{preset.name}</span>
                    <span className="text-[9px] text-gray-500 truncate">{preset.width}x{preset.height}mm</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensional Sliders Container */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl flex flex-col gap-6 shadow-sm">
              
              <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                <Sliders className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-800">Dimension Parameters</h3>
              </div>

              {/* Sliders Grid */}
              <div className="flex flex-col gap-4">
                
                {/* Width */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-600 font-bold">Pouch Width (W)</span>
                    <span className="text-green-400 font-mono font-bold">{(width / 25.4).toFixed(2)} in / {width} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="width-mm-input"
                        type="text"
                        value={widthMmStr}
                        onChange={(e) => handleWidthChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="width-inch-input"
                        type="text"
                        value={widthInchStr}
                        onChange={(e) => handleWidthChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="350"
                    value={width}
                    onChange={(e) => handleWidthChangeMm(e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Length/Height */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-600 font-bold">Pouch Height / Length (H)</span>
                    <span className="text-green-400 font-mono font-bold">{(height / 25.4).toFixed(2)} in / {height} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="height-mm-input"
                        type="text"
                        value={heightMmStr}
                        onChange={(e) => handleHeightChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="height-inch-input"
                        type="text"
                        value={heightInchStr}
                        onChange={(e) => handleHeightChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="450"
                    value={height}
                    onChange={(e) => handleHeightChangeMm(e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Gusset / Side Gusset (Conditional) */}
                {activeShape !== 'three_side_seal' && activeShape !== 'center_seal' && (
                  <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                    <div className="flex justify-between items-center text-xs font-semibold flex-wrap">
                      <span className="text-gray-600 font-bold">
                        {activeShape === 'stand_up' || activeShape === 'k_seal' 
                          ? 'Bottom Gusset Flat Height (BG)' 
                          : 'Side Gusset Width (SG)'}
                      </span>
                      <span className="text-green-600 font-mono font-bold">
                        {(gusset / 25.4).toFixed(2)} in / {gusset} mm 
                        {(activeShape === 'stand_up' || activeShape === 'k_seal') && (
                          <span className="text-gray-400"> ({(gusset / 2 / 25.4).toFixed(2)}" depth)</span>
                        )}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          id="gusset-mm-input"
                          type="text"
                          value={gussetMmStr}
                          onChange={(e) => handleGussetChangeMm(e.target.value)}
                          className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                        />
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                      </div>
                      <div className="relative">
                        <input
                          id="gusset-inch-input"
                          type="text"
                          value={gussetInchStr}
                          onChange={(e) => handleGussetChangeInch(e.target.value)}
                          className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                        />
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={activeShape === 'stand_up' || activeShape === 'k_seal' ? "40" : "20"}
                      max="150"
                      value={gusset}
                      onChange={(e) => handleGussetChangeMm(e.target.value)}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                  </div>
                )}

                {/* Include Zipper Toggle (Conditional) */}
                {activeShape !== 'side_gusset' && activeShape !== 'center_seal' && (
                  <>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                          {activeShape === 'flat_bottom_one_zipper' ? 'Include Pocket / Pull-Tab Zipper' : 'Include Press-to-Close Zipper'}
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono">
                          {activeShape === 'flat_bottom_one_zipper' ? 'Adds pocket zipper weld on front panel' : 'Adds standard reclosable zipper layer'}
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={hasZipper} 
                          onChange={() => setHasZipper(!hasZipper)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                      </label>
                    </div>

                    {/* Zipper Position Slider (Conditional) */}
                    {hasZipper && (
                      <div className="space-y-1 pl-3 border-l-2 border-green-500/20 py-1 transition-all">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-gray-600">
                            {activeShape === 'flat_bottom_one_zipper' ? 'Pocket Zipper Position (From Top)' : 'Zipper Position (From Top)'}
                          </span>
                          <span className="text-green-600 font-mono font-bold">{zipper} mm</span>
                        </div>
                        <input
                          type="range"
                          min="15"
                          max="60"
                          value={zipper}
                          onChange={(e) => setZipper(Number(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Include Valve Toggle (Conditional) */}
                {activeShape !== 'three_side_seal' && (
                  <>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Include Degassing Valve</span>
                        <span className="text-[10px] text-gray-500 font-mono">One-way venting valve for coffee/gasses</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={hasValve} 
                          onChange={() => setHasValve(!hasValve)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                      </label>
                    </div>

                    {/* Valve Position Slider (Conditional) */}
                    {hasValve && (
                      <div className="space-y-1 pl-3 border-l-2 border-green-500/20 py-1 transition-all">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-gray-600">Valve Position (From Top)</span>
                          <span className="text-green-600 font-mono font-bold">{valvePosition} mm <span className="text-gray-400 font-normal">({Math.round(valvePosition / height * 100)}% of height)</span></span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max={height - bottomSealCurve - 15}
                          value={valvePosition}
                          onChange={(e) => setValvePosition(Number(e.target.value))}
                          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Tear Notch */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-600 font-bold">Tear Notch Position (From Top)</span>
                    <span className="text-green-600 font-mono font-bold">{(tearNotch / 25.4).toFixed(2)} in / {tearNotch} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="tearNotch-mm-input"
                        type="text"
                        value={tearNotchMmStr}
                        onChange={(e) => handleTearNotchChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="tearNotch-inch-input"
                        type="text"
                        value={tearNotchInchStr}
                        onChange={(e) => handleTearNotchChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={tearNotch}
                    onChange={(e) => handleTearNotchChangeMm(e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Side Seals */}
                <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-200">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-600 font-bold">Side Seal Weld Width</span>
                    <span className="text-green-600 font-mono font-bold">{(sideSeals / 25.4).toFixed(2)} in / {sideSeals} mm</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        id="sideSeals-mm-input"
                        type="text"
                        value={sideSealsMmStr}
                        onChange={(e) => handleSideSealsChangeMm(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                    </div>
                    <div className="relative">
                      <input
                        id="sideSeals-inch-input"
                        type="text"
                        value={sideSealsInchStr}
                        onChange={(e) => handleSideSealsChangeInch(e.target.value)}
                        className="w-full pl-3 pr-8 py-2 text-xs bg-white border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 rounded-xl outline-none font-mono text-gray-900 font-bold shadow-sm"
                      />
                      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={sideSeals}
                    onChange={(e) => handleSideSealsChangeMm(e.target.value)}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                </div>

                {/* Bottom Seal Curve (Conditional, Auto-Calculated & Locked) */}
                {(activeShape === 'stand_up' || activeShape === 'k_seal') && (
                  <div className="space-y-2 bg-gray-100 p-3 rounded-2xl border border-gray-200 opacity-60 relative overflow-hidden select-none">
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
                          className="w-full pl-3 pr-8 py-2 text-xs bg-gray-200 border border-gray-300 text-gray-400 rounded-xl outline-none font-mono font-bold cursor-not-allowed select-none"
                        />
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">mm</span>
                      </div>
                      <div className="relative">
                        <input
                          id="bottomSealCurve-inch-input"
                          type="text"
                          value={bottomCurveInchStr}
                          readOnly
                          className="w-full pl-3 pr-8 py-2 text-xs bg-gray-200 border border-gray-300 text-gray-400 rounded-xl outline-none font-mono font-bold cursor-not-allowed select-none"
                        />
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-gray-400 uppercase tracking-wider font-mono select-none">in</span>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-gray-200 rounded-lg overflow-hidden relative pointer-events-none">
                      <div 
                        className="bg-gray-400 h-full transition-all duration-150"
                        style={{ width: `${((bottomSealCurve - 15) / (70 - 15)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Round Corner Toggle */}
                <div className="flex items-center justify-between border-t border-gray-250 pt-4 mt-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Rounded Corner Finish</span>
                    <span className="text-[10px] text-gray-500 font-mono">Die-cuts the sharp top/bottom edges</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={roundCorners} 
                      onChange={() => setRoundCorners(!roundCorners)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 peer-checked:after:bg-white"></div>
                  </label>
                </div>

              </div>

            </div>

            {/* Export Settings */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl flex flex-col gap-6 shadow-sm">
              
              <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                <Download className="w-5 h-5 text-green-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-gray-800">Prepress Template Export</h3>
              </div>

              <div className="flex flex-col gap-4">
                
                {/* Format selection */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                    Artboard Layout Format
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPdfFormat('1to1')}
                      className={`p-3 border-2 rounded-xl text-left transition-all flex flex-col gap-1 ${
                        pdfFormat === '1to1'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xs font-bold text-gray-800 flex items-center gap-1">
                        <FileCode className="w-3.5 h-3.5" /> 1:1 Scale Vector
                      </span>
                      <span className="text-[9px] leading-relaxed">Perfect artboard template for Adobe Illustrator. 100% exact sizes.</span>
                    </button>
                    
                    <button
                      onClick={() => setPdfFormat('a4')}
                      className={`p-3 border-2 rounded-xl text-left transition-all flex flex-col gap-1 ${
                        pdfFormat === 'a4'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      <span className="text-xs font-bold text-gray-800 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> A4 Spec Sheet
                      </span>
                      <span className="text-[9px] leading-relaxed">Landscape technical design blueprint. Great for printout and signoff.</span>
                    </button>
                  </div>
                </div>

                {!isUnlocked ? (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 border-t border-gray-200 pt-4 mt-2">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-green-400 flex items-center gap-1.5 mb-1.5">
                        <Mail className="w-3.5 h-3.5" /> Unlock & Email PDF Template
                      </h4>
                      <p className="text-[10px] text-gray-500 leading-normal">
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
                        className="w-full px-4 py-2.5 text-xs bg-white border border-gray-300 hover:border-gray-400 text-gray-900 rounded-xl outline-none font-medium focus:border-green-500 focus:ring-1 focus:ring-green-500 shadow-sm"
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

                    <p className="text-[9px] text-gray-400 font-medium text-center">
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
                        className="text-[9px] font-bold uppercase text-gray-400 hover:text-red-500 underline"
                      >
                        Change Email
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* RIGHT PANEL: Live SVG Visualizer (7 Columns) - independently scrollable */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:max-h-[calc(100vh-240px)] lg:overflow-y-auto pb-6" style={{scrollbarGutter: 'stable'}}>
            
            {/* SVG Visualizer Canvas Container */}
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden flex flex-col shadow-sm">
              
              {/* Visualizer header */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-gray-700">
                    Architectural Layout Preview
                  </h3>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  SCALE PROPORTIONS • ISO STANDARD
                </div>
              </div>

              {/* Blueprint Canvas Frame */}
              <div className="relative w-full bg-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-200 p-6 select-none" style={{minHeight: '480px', height: '480px'}}>
                
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
                  <g transform={`translate(${50}, ${50})`}>
                    
                    <defs>
                      <clipPath id="panel-corners">
                        <rect x="0" y="0" width={scales.w} height={scales.h} rx={roundCorners ? 12 : 0} />
                      </clipPath>
                    </defs>

                    {/* 1. STAND UP / K-SEAL SHAPES */}
                    {(activeShape === 'stand_up' || activeShape === 'k_seal') && (
                      <>
                        {/* FRONT PANEL */}
                        <g transform="translate(0, 0)">
                          {showBleedLines && (
                            <rect x="-8" y="-8" width={scales.w + 16} height={scales.h + 16} fill="none" stroke="#10b981" strokeWidth="1.2" strokeDasharray="4,4" />
                          )}
                          {showCutLines && (
                            <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" rx={roundCorners ? 12 : 0} />
                          )}
                          <g opacity="0.12" clipPath="url(#panel-corners)">
                            <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                            <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                            <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#ffffff" />
                          </g>
                          {hasZipper && showFoldLines && (
                            <g>
                              <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                              <text x={scales.seals + 6} y={scales.z - 4} fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="monospace">ZIPPER CREASE</text>
                            </g>
                          )}
                          <g stroke="#e11d48" strokeWidth="2">
                            <line x1="-3" y1={scales.tn} x2="3" y2={scales.tn} />
                            <line x1={scales.w - 3} y1={scales.tn} x2={scales.w + 3} y2={scales.tn} />
                          </g>
                          {hasValve && (
                            <g transform={`translate(${scales.w / 2}, ${scales.vp})`}>
                              <circle r="10" fill="none" stroke="#e11d48" strokeWidth="1.5" />
                              <circle r="5" fill="none" stroke="#e11d48" strokeWidth="1.0" />
                              <circle r="2" fill="#e11d48" />
                              <line x1="-16" y1="0" x2="16" y2="0" stroke="#e11d48" strokeWidth="0.8" strokeDasharray="2,2" />
                              <line x1="0" y1="-16" x2="0" y2="16" stroke="#e11d48" strokeWidth="0.8" strokeDasharray="2,2" />
                              <text x="14" y="3" fill="#e11d48" fontSize="7" fontWeight="bold" fontFamily="monospace">VALVE</text>
                            </g>
                          )}
                          {showSafeZone && (
                            <rect x={scales.seals + 6} y={hasZipper ? (scales.z + 15) : 15} width={scales.w - scales.seals * 2 - 12} height={hasZipper ? (scales.h - scales.z - scales.curve - 25) : (scales.h - scales.curve - 30)} fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2,3" />
                          )}
                          {showFoldLines && (
                            activeShape === 'k_seal' ? (
                              <g stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4">
                                <line x1="0" y1={scales.h - scales.curve} x2={scales.seals * 2} y2={scales.h} />
                                <line x1={scales.w} y1={scales.h - scales.curve} x2={scales.w - scales.seals * 2} y2={scales.h} />
                              </g>
                            ) : (
                              <path d={`M 0,${scales.h - scales.curve} C ${scales.w * 0.25},${scales.h - scales.curve * 0.3} ${scales.w * 0.75},${scales.h - scales.curve * 0.3} ${scales.w},${scales.h - scales.curve}`} fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="5,4" />
                            )
                          )}
                          {showOpenArrow && (
                            <g transform={`translate(-20, ${scales.h / 2})`}>
                              <line x1="0" y1={scales.h * 0.3} x2="0" y2={-scales.h * 0.3} stroke="#374151" strokeWidth="2" />
                              <line x1="0" y1={-scales.h * 0.3} x2="-4" y2={-scales.h * 0.3 + 6} stroke="#374151" strokeWidth="2" />
                              <line x1="0" y1={-scales.h * 0.3} x2="4" y2={-scales.h * 0.3 + 6} stroke="#374151" strokeWidth="2" />
                              <text x="-6" y="-10" fill="#374151" fontSize="9" fontWeight="bold" transform="rotate(-90)" textAnchor="middle">Open direction</text>
                            </g>
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="14" fontWeight="black" textAnchor="middle" letterSpacing="2">FRONT PANEL</text>
                        </g>

                        {/* BACK PANEL */}
                        <g transform={`translate(${scales.w + scales.spacing}, 0)`}>
                          {showBleedLines && (
                            <rect x="-8" y="-8" width={scales.w + 16} height={scales.h + 16} fill="none" stroke="#10b981" strokeWidth="1.2" strokeDasharray="4,4" />
                          )}
                          {showCutLines && (
                            <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" rx={roundCorners ? 12 : 0} />
                          )}
                          <g opacity="0.12" clipPath="url(#panel-corners)">
                            <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                            <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#ffffff" />
                            <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#ffffff" />
                          </g>
                          {hasZipper && showFoldLines && (
                            <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                          )}
                          <g stroke="#e11d48" strokeWidth="2">
                            <line x1="-3" y1={scales.tn} x2="3" y2={scales.tn} />
                            <line x1={scales.w - 3} y1={scales.tn} x2={scales.w + 3} y2={scales.tn} />
                          </g>
                          {showSafeZone && (
                            <rect x={scales.seals + 6} y={hasZipper ? (scales.z + 15) : 15} width={scales.w - scales.seals * 2 - 12} height={hasZipper ? (scales.h - scales.z - scales.curve - 25) : (scales.h - scales.curve - 30)} fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2,3" />
                          )}
                          {showFoldLines && (
                            activeShape === 'k_seal' ? (
                              <g stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4">
                                <line x1="0" y1={scales.h - scales.curve} x2={scales.seals * 2} y2={scales.h} />
                                <line x1={scales.w} y1={scales.h - scales.curve} x2={scales.w - scales.seals * 2} y2={scales.h} />
                              </g>
                            ) : (
                              <path d={`M 0,${scales.h - scales.curve} C ${scales.w * 0.25},${scales.h - scales.curve * 0.3} ${scales.w * 0.75},${scales.h - scales.curve * 0.3} ${scales.w},${scales.h - scales.curve}`} fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeDasharray="5,4" />
                            )
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="14" fontWeight="black" textAnchor="middle" letterSpacing="2">BACK PANEL</text>
                        </g>

                        {/* BOTTOM GUSSET */}
                        <g transform={`translate(0, ${scales.h + 30})`}>
                          <rect x="0" y="0" width={scales.w} height={scales.g} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          {showFoldLines && (
                            <line x1="0" y1={scales.g / 2} x2={scales.w} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          )}
                          <text x={scales.w / 2} y={scales.g / 2 + 3} fill="#374151" fillOpacity="0.3" fontSize="11" fontWeight="black" textAnchor="middle" letterSpacing="1">BOTTOM GUSSET</text>
                        </g>
                      </>
                    )}

                    {/* 2. FLAT BOTTOM / BOX BOTTOM SHAPES */}
                    {(activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') && (
                      <>
                        {/* Left Side Gusset */}
                        <g transform="translate(0, 0)">
                          <rect x="0" y="0" width={scales.g} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <line x1={scales.g / 2} y1="0" x2={scales.g / 2} y2={scales.h} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1="0" y1={scales.h} x2={scales.g / 2} y2={scales.h - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1={scales.g} y1={scales.h} x2={scales.g / 2} y2={scales.h - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <text x={scales.g / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="10" fontWeight="black" textAnchor="middle" transform={`rotate(-90 ${scales.g / 2} ${scales.h / 2})`}>LEFT GUSSET</text>
                        </g>

                        {/* Front Panel */}
                        <g transform={`translate(${scales.g + 15}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          {/* Corner welds */}
                          <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />

                          {/* Zipper (Pocket or Normal) */}
                          {((activeShape === 'flat_bottom_one_zipper') || (activeShape === 'flat_bottom_normal_zipper' && hasZipper) || (activeShape === 'box_bottom' && hasZipper)) && (
                            <g>
                              <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                              {activeShape === 'flat_bottom_one_zipper' && (
                                <rect x={scales.seals + 6} y={scales.z - 4} width={scales.w - scales.seals * 2 - 12} height="8" rx="2" fill="none" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="2,2" />
                              )}
                              <text x={scales.seals + 6} y={scales.z - 6} fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="monospace">ZIPPER</text>
                            </g>
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">FRONT PANEL</text>
                        </g>

                        {/* Right Side Gusset */}
                        <g transform={`translate(${scales.g + scales.w + 30}, 0)`}>
                          <rect x="0" y="0" width={scales.g} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <line x1={scales.g / 2} y1="0" x2={scales.g / 2} y2={scales.h} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1="0" y1={scales.h} x2={scales.g / 2} y2={scales.h - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1={scales.g} y1={scales.h} x2={scales.g / 2} y2={scales.h - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <text x={scales.g / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="10" fontWeight="black" textAnchor="middle" transform={`rotate(-90 ${scales.g / 2} ${scales.h / 2})`}>RIGHT GUSSET</text>
                        </g>

                        {/* Back Panel */}
                        <g transform={`translate(${scales.g * 2 + scales.w + 45}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />

                          {((activeShape === 'flat_bottom_normal_zipper' && hasZipper) || (activeShape === 'box_bottom' && hasZipper)) && (
                            <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">BACK PANEL</text>
                        </g>

                        {/* Bottom Panel */}
                        <g transform={`translate(${scales.g + 15}, ${scales.h + 20})`}>
                          <rect x="0" y="0" width={scales.w} height={scales.g} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2" />
                          <line x1="0" y1={scales.g / 2} x2={scales.w} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1="0" y1="0" x2={scales.g / 2} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,3" />
                          <line x1={scales.w} y1="0" x2={scales.w - scales.g / 2} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,3" />
                          <line x1="0" y1={scales.g} x2={scales.g / 2} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,3" />
                          <line x1={scales.w} y1={scales.g} x2={scales.w - scales.g / 2} y2={scales.g / 2} stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3,3" />
                          <text x={scales.w / 2} y={scales.g / 2 + 3} fill="#374151" fillOpacity="0.3" fontSize="10" fontWeight="black" textAnchor="middle">BOTTOM PANEL</text>
                        </g>
                      </>
                    )}

                    {/* 3. SIDE GUSSET POUCH */}
                    {activeShape === 'side_gusset' && (
                      <>
                        {/* Left Side Gusset */}
                        <g transform="translate(0, 0)">
                          <rect x="0" y="0" width={scales.g} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <line x1={scales.g / 2} y1="0" x2={scales.g / 2} y2={scales.h} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1="0" y1={scales.h - scales.seals} x2={scales.g / 2} y2={scales.h - scales.seals - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1={scales.g} y1={scales.h - scales.seals} x2={scales.g / 2} y2={scales.h - scales.seals - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.g} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" />
                          <text x={scales.g / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="10" fontWeight="black" textAnchor="middle" transform={`rotate(-90 ${scales.g / 2} ${scales.h / 2})`}>LEFT GUSSET</text>
                        </g>

                        {/* Front Panel */}
                        <g transform={`translate(${scales.g + 15}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">FRONT PANEL</text>
                        </g>

                        {/* Right Side Gusset */}
                        <g transform={`translate(${scales.g + scales.w + 30}, 0)`}>
                          <rect x="0" y="0" width={scales.g} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <line x1={scales.g / 2} y1="0" x2={scales.g / 2} y2={scales.h} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1="0" y1={scales.h - scales.seals} x2={scales.g / 2} y2={scales.h - scales.seals - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <line x1={scales.g} y1={scales.h - scales.seals} x2={scales.g / 2} y2={scales.h - scales.seals - scales.g / 2} stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.g} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" />
                          <text x={scales.g / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="10" fontWeight="black" textAnchor="middle" transform={`rotate(-90 ${scales.g / 2} ${scales.h / 2})`}>RIGHT GUSSET</text>
                        </g>

                        {/* Back Panel */}
                        <g transform={`translate(${scales.g * 2 + scales.w + 45}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          {/* Back center seal seam */}
                          <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" stroke="none" />
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">BACK PANEL</text>
                        </g>
                      </>
                    )}

                    {/* 4. 3 SIDE SEAL POUCH */}
                    {activeShape === 'three_side_seal' && (
                      <>
                        {/* Front Panel */}
                        <g transform="translate(0, 0)">
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          {/* 3 Seals */}
                          <rect x="0" y="0" width={scales.w} height="12" fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" />

                          {hasZipper && (
                            <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">FRONT PANEL</text>
                        </g>

                        {/* Back Panel */}
                        <g transform={`translate(${scales.w + scales.spacing}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          <rect x="0" y="0" width={scales.w} height="12" fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x={scales.w - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y={scales.h - scales.seals} width={scales.w} height={scales.seals} fill="#e2e8f0" fillOpacity="0.4" />

                          {hasZipper && (
                            <line x1="0" y1={scales.z} x2={scales.w} y2={scales.z} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,3" />
                          )}
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">BACK PANEL</text>
                        </g>
                      </>
                    )}

                    {/* 5. CENTER SEAL POUCH */}
                    {activeShape === 'center_seal' && (
                      <>
                        {/* Left Back Half */}
                        <g transform="translate(0, 0)">
                          <rect x="0" y="0" width={scales.w / 2} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <rect x="0" y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y="0" width={scales.w / 2} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y={scales.h - 10} width={scales.w / 2} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <text x={scales.w / 4} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="9" fontWeight="black" textAnchor="middle">LEFT BACK</text>
                        </g>

                        {/* Front Panel */}
                        <g transform={`translate(${scales.w / 2 + 15}, 0)`}>
                          <rect x="0" y="0" width={scales.w} height={scales.h} fill="#3b82f6" fillOpacity="0.08" stroke="#e11d48" strokeWidth="2.2" />
                          <rect x="0" y="0" width={scales.w} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y={scales.h - 10} width={scales.w} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <text x={scales.w / 2} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="13" fontWeight="black" textAnchor="middle">FRONT PANEL</text>
                        </g>

                        {/* Right Back Half */}
                        <g transform={`translate(${scales.w * 1.5 + 30}, 0)`}>
                          <rect x="0" y="0" width={scales.w / 2} height={scales.h} fill="#3b82f6" fillOpacity="0.04" stroke="#e11d48" strokeWidth="2" />
                          <rect x={scales.w / 2 - scales.seals} y="0" width={scales.seals} height={scales.h} fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y="0" width={scales.w / 2} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <rect x="0" y={scales.h - 10} width={scales.w / 2} height="10" fill="#e2e8f0" fillOpacity="0.4" />
                          <text x={scales.w / 4} y={scales.h / 2} fill="#374151" fillOpacity="0.3" fontSize="9" fontWeight="black" textAnchor="middle">RIGHT BACK</text>
                        </g>
                      </>
                    )}

                    {/* DIMENSIONAL LINE ANNOTATIONS */}
                    {showDimensions && (
                      <g stroke="#3b82f6" strokeWidth="1" fill="#3b82f6">
                        {/* Width line (top of Front panel) */}
                        {(() => {
                          let fX = 0;
                          if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom' || activeShape === 'side_gusset') {
                            fX = scales.g + 15;
                          } else if (activeShape === 'center_seal') {
                            fX = scales.w / 2 + 15;
                          }
                          return (
                            <g transform={`translate(${fX}, 0)`}>
                              <line x1="0" y1="-12" x2={scales.w} y2="-12" />
                              <polygon points={`0,-12 5,-15 5,-9`} />
                              <polygon points={`${scales.w},-12 ${scales.w-5},-15 ${scales.w-5},-9`} />
                              <text x={scales.w / 2} y="-18" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle" stroke="none" fill="#3b82f6">
                                W: {width}mm ({(width / 25.4).toFixed(2)}")
                              </text>
                            </g>
                          );
                        })()}

                        {/* Height line */}
                        {(() => {
                          let hX = scales.w * 2 + scales.spacing + 12;
                          if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom' || activeShape === 'side_gusset') {
                            hX = (scales.w + scales.g) * 2 + 55;
                          } else if (activeShape === 'center_seal') {
                            hX = scales.w * 2 + 42;
                          }
                          return (
                            <g transform={`translate(${hX}, 0)`}>
                              <line x1="0" y1="0" x2="0" y2={scales.h} />
                              <polygon points={`0,0 -3,5 3,5`} />
                              <polygon points={`0,${scales.h} -3,${scales.h-5} 3,${scales.h-5}`} />
                              <text x="8" y={scales.h / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                                H: {height}mm ({(height / 25.4).toFixed(2)}")
                              </text>
                            </g>
                          );
                        })()}

                        {/* Zipper height line */}
                        {hasZipper && activeShape !== 'side_gusset' && activeShape !== 'center_seal' && (
                          (() => {
                            let zipX = scales.w + 10;
                            if (activeShape === 'flat_bottom_one_zipper' || activeShape === 'flat_bottom_normal_zipper' || activeShape === 'box_bottom') {
                              zipX = scales.g + scales.w + 20;
                            }
                            return (
                              <g transform={`translate(${zipX}, 0)`}>
                                <line x1="0" y1="0" x2="0" y2={scales.z} />
                                <polygon points={`0,0 -2,3 2,3`} />
                                <polygon points={`0,${scales.z} -2,${scales.z-3} 2,${scales.z-3}`} />
                                <text x="6" y={scales.z / 2 + 2} fontSize="9" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#a855f7">
                                  Z: {zipper}mm
                                </text>
                              </g>
                            );
                          })()
                        )}

                        {/* Gusset size annotations */}
                        {gusset > 0 && activeShape !== 'three_side_seal' && activeShape !== 'center_seal' && (
                          (() => {
                            if (activeShape === 'stand_up' || activeShape === 'k_seal') {
                              return (
                                <g transform={`translate(${scales.w + 12}, ${scales.h + 30})`}>
                                  <line x1="0" y1="0" x2="0" y2={scales.g} />
                                  <polygon points={`0,0 -3,5 3,5`} />
                                  <polygon points={`0,${scales.g} -3,${scales.g-5} 3,${scales.g-5}`} />
                                  <text x="8" y={scales.g / 2 + 3} fontSize="11" fontWeight="bold" fontFamily="monospace" stroke="none" fill="#3b82f6">
                                    BG: {gusset}mm ({(gusset / 25.4).toFixed(2)}")
                                  </text>
                                </g>
                              );
                            } else {
                              // Side gusset dimension line on Left Gusset
                              return (
                                <g transform={`translate(0, -12)`}>
                                  <line x1="0" y1="0" x2={scales.g} y2="0" />
                                  <polygon points={`0,0 3,-3 3,3`} />
                                  <polygon points={`${scales.g},0 ${scales.g-3},-3 ${scales.g-3},3`} />
                                  <text x={scales.g / 2} y="-6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle" stroke="none" fill="#3b82f6">
                                    G: {gusset}mm
                                  </text>
                                </g>
                              );
                            }
                          })()
                        )}
                      </g>
                    )}

                  </g>
                </svg>

              </div>

              {/* Layers controls */}
              <div className="p-5 bg-gray-50 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showGrid} 
                    onChange={() => setShowGrid(!showGrid)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-green-500 w-4 h-4"
                  />
                  <span>Blueprint Grid</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showCutLines} 
                    onChange={() => setShowCutLines(!showCutLines)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-red-500 w-4 h-4"
                  />
                  <span className="text-red-500 font-bold">Cut Boundary</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showFoldLines} 
                    onChange={() => setShowFoldLines(!showFoldLines)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-blue-500 w-4 h-4"
                  />
                  <span className="text-blue-600 font-bold">Fold Creases</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showBleedLines} 
                    onChange={() => setShowBleedLines(!showBleedLines)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-green-500 w-4 h-4"
                  />
                  <span className="text-green-600 font-bold">3mm Bleeds</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showSafeZone} 
                    onChange={() => setShowSafeZone(!showSafeZone)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-amber-500 w-4 h-4"
                  />
                  <span className="text-amber-600 font-bold">Safe Art Zone</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showDimensions} 
                    onChange={() => setShowDimensions(!showDimensions)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 accent-indigo-500 w-4 h-4"
                  />
                  <span className="text-indigo-600 font-bold">Measurements</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer select-none text-gray-700">
                  <input 
                    type="checkbox" 
                    checked={showOpenArrow} 
                    onChange={() => setShowOpenArrow(!showOpenArrow)}
                    className="rounded border border-gray-300 bg-white focus:ring-0 w-4 h-4"
                  />
                  <span>Open Arrow</span>
                </label>
              </div>

              {/* Spec guidelines list */}
              <div className="p-6 bg-gray-50 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider font-mono">
                  <Info className="w-4 h-4 text-green-500" /> Prepress Setup Guidelines
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-600 leading-relaxed">
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
            <div className="flex-grow border-t border-gray-200"></div>
            <span className={`mx-4 flex-shrink text-xs font-bold uppercase tracking-widest font-mono ${isPouchDomain ? 'text-black' : 'text-gray-400'}`}>
              Production Setup & Artwork Submission
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Timeline / Visual Illustration of the Process */}
          <div className={`${isPouchDomain ? "bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-8 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-6`}>
            <div>
              <h3 className={`${isPouchDomain ? "font-black text-2xl uppercase tracking-tight font-mono" : "font-extrabold text-xl uppercase tracking-wider text-gray-800"} mb-2`}>
                Post-Design Guidelines: 4 Simple Steps
              </h3>
              <p className="text-sm text-gray-500">
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
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-800">Import Dieline</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
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
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-800">Design Layering</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
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
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-800">Prepress Check</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
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
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-800">Verification Sign-off</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
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
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-6`}>
                <div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-2">
                    <div className="flex items-center gap-2">
                      <UploadCloud className="w-5 h-5 text-green-400" />
                      <h3 className={`${isPouchDomain ? "font-black text-xl uppercase tracking-tight font-mono" : "font-extrabold text-base uppercase tracking-wider text-gray-800"}`}>
                        Submit Finished Artwork Layer
                      </h3>
                    </div>
                    <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full font-mono">
                      SECURE PIPELINE
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Upload your completed Adobe Illustrator (.ai), vector PDF, or high-res EPS print file directly to our prepress verification server:
                  </p>
                </div>

                {/* Upload drag drop placeholder */}
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed ${isPouchDomain ? 'border-black hover:bg-neutral-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'} p-8 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all`}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    onChange={handleFileChange}
                    accept=".ai,.pdf,.eps,.zip,.rar"
                    className="hidden" 
                  />
                  <div className={`w-12 h-12 rounded-full ${isPouchDomain ? 'bg-[#00FFFF] border-2 border-black' : 'bg-white border border-gray-200'} flex items-center justify-center text-green-400`}>
                    <UploadCloud className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                      {uploadFile ? uploadFile.name : 'Select or Drag Dieline Artwork File'}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {uploadFile ? `File size: ${(uploadFile.size / 1024 / 1024).toFixed(2)} MB` : 'Supports AI, PDF, EPS, ZIP, RAR up to 150MB'}
                    </p>
                  </div>
                </div>

                {/* Upload Action buttons */}
                {uploadFile && (
                  <div className={`p-4 ${isPouchDomain ? 'bg-neutral-50 border-2 border-black' : 'bg-gray-50 border border-gray-200'} rounded-xl space-y-4`}>
                    
                    {/* Progress Bar */}
                    {isUploading && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold font-mono">
                          <span className="text-gray-500">UPLOADING VECTOR ASSETS...</span>
                          <span className="text-green-400">{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
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
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-lg transition-colors ${isPouchDomain ? 'border-black hover:bg-neutral-100 text-black' : 'border-gray-200 hover:bg-gray-50 text-gray-600'}`}
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
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono" : "font-extrabold text-sm uppercase tracking-wider text-gray-800"}`}>
                  Direct Submission Desk
                </h3>
                
                <div className="flex flex-col gap-3">
                  
                  {/* Email */}
                  <a 
                    href="mailto:artwork@achievepack.com?subject=Custom%20Dieline%20Artwork%20Submission&body=Hi%20Achieve%20Pack%20Team,%20%0A%0AI%20have%20completed%20the%20packaging%20artwork%20using%20your%20custom%20dieline%20creator.%20Please%20find%20the%20attached%20files%20and%20let%20me%20know%20if%20there%20are%20any%20prepress%20revisions%20needed.%20%0A%0ABest%20regards,"
                    className={`flex items-center gap-3 p-3 border rounded-xl hover:scale-[1.01] transition-all ${isPouchDomain ? 'border-black hover:bg-neutral-50 text-black' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${isPouchDomain ? 'bg-[#00FFFF] border-2 border-black' : 'bg-white border border-gray-200'} flex items-center justify-center text-blue-400`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold block uppercase">Submit via Email</span>
                      <span className="text-[10px] text-gray-500 font-mono">artwork@achievepack.com</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/85269704411?text=Hi%20Achieve%20Pack%20Team,%20I%20have%20completed%20our%20packaging%20artwork%20using%20your%20custom%20dieline%20creator.%20Could%20you%20please%20connect%20me%20with%20a%20packaging%20expert%20to%20verify%20our%20prepress%20tolerance?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 border rounded-xl hover:scale-[1.01] transition-all ${isPouchDomain ? 'border-black hover:bg-neutral-50 text-black' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00] border-2 border-black' : 'bg-white border border-gray-200'} flex items-center justify-center text-green-400`}>
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold block uppercase">Submit via WhatsApp</span>
                      <span className="text-[10px] text-gray-500 font-mono">+852 6970 4411 (Prepress Desk)</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </a>

                </div>
              </div>

              {/* Channel C: Meeting Consult */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono" : "font-extrabold text-sm uppercase tracking-wider text-gray-800"}`}>
                  Need a Prepress Alignment?
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-600">
                  Book a rapid 15-minute screen share review session with Ryan Wong (Co-Founder & Packaging Engineer) to verify your final design:
                </p>

                <a 
                  href="https://calendly.com/achievepack/prepress-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider border rounded-xl transition-all hover:scale-[1.01] ${isPouchDomain ? 'bg-black text-white border-black hover:bg-neutral-800' : 'bg-gray-800 hover:bg-gray-900 border-gray-800 text-white'}`}
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
              
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-6`}>
                
                <div>
                  <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-2">
                    <CheckSquare className="w-5 h-5 text-green-400" />
                    <h3 className={`${isPouchDomain ? "font-black text-xl uppercase tracking-tight font-mono" : "font-extrabold text-base uppercase tracking-wider text-gray-800"}`}>
                      Prepress Verification Checklist
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Before giving your final production print approval, please carefully check and verify the following parameters against your imported design:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Item 1 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.size ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.size}
                      onChange={() => setChecklist({ ...checklist, size: !checklist.size })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Size Verification</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Dieline dimensions, gussets, and side seals match original layout.</span>
                    </div>
                  </label>

                  {/* Item 2 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.colors ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.colors}
                      onChange={() => setChecklist({ ...checklist, colors: !checklist.colors })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Correct Colors</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Mapped to CMYK print profiles or Pantone Solid Coated (no RGB).</span>
                    </div>
                  </label>

                  {/* Item 3 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.eyespot ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.eyespot}
                      onChange={() => setChecklist({ ...checklist, eyespot: !checklist.eyespot })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Eyespot Size & Location</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Correct eye-mark sensor size and coordinates for high-speed cutters.</span>
                    </div>
                  </label>

                  {/* Item 4 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.weight ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.weight}
                      onChange={() => setChecklist({ ...checklist, weight: !checklist.weight })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Weight Description</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Net weight font is compliant (height minimum 2mm is verified).</span>
                    </div>
                  </label>

                  {/* Item 5 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.upc ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.upc}
                      onChange={() => setChecklist({ ...checklist, upc: !checklist.upc })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Correct UPC / Bar Code</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">High contrast solid background scale (minimum 80% to 120%).</span>
                    </div>
                  </label>

                  {/* Item 6 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.rollDirection ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.rollDirection}
                      onChange={() => setChecklist({ ...checklist, rollDirection: !checklist.rollDirection })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Roll Direction</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Wind layout alignment conforms to your packaging machinery specs.</span>
                    </div>
                  </label>

                  {/* Item 7 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.addons ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.addons}
                      onChange={() => setChecklist({ ...checklist, addons: !checklist.addons })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Add Ons (e.g. zipper, tear notch, etc)</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Zipper placement, tear notches, pegs, or degassing valves are correct.</span>
                    </div>
                  </label>

                  {/* Item 8 */}
                  <label className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-all ${checklist.seal ? (isPouchDomain ? 'bg-[#D4FF00]/10 border-black' : 'bg-green-500/5 border-green-500/20') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 hover:border-gray-400')}`}>
                    <input 
                      type="checkbox" 
                      checked={checklist.seal}
                      onChange={() => setChecklist({ ...checklist, seal: !checklist.seal })}
                      className={checkboxClass}
                    />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Fin / Lap Seal</span>
                      <span className="text-[10px] text-gray-500 leading-relaxed block">Back seal seam overlaps are aligned with appropriate margins.</span>
                    </div>
                  </label>

                </div>

              </div>

            </div>

            {/* Decision Matrix & Legal Warnings (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Decision Choice Box */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-4`}>
                <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono text-black" : "font-extrabold text-sm uppercase tracking-wider text-gray-800"}`}>
                  Your Decision
                </h3>

                <div className="flex flex-col gap-2">
                  
                  {/* Approve as is */}
                  <button 
                    onClick={() => setDecision('approve')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'approve' ? (isPouchDomain ? 'bg-[#D4FF00] border-black text-black' : 'border-green-500 bg-green-500/10 text-green-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-500')}`}
                  >
                    <ThumbsUp className={`w-4 h-4 mt-0.5 ${decision === 'approve' ? 'text-green-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Approve as is</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Perfect! Ready for full commercial production.</span>
                    </div>
                  </button>

                  {/* Approve with changes */}
                  <button 
                    onClick={() => setDecision('approve_changes')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'approve_changes' ? (isPouchDomain ? 'bg-[#00FFFF] border-black text-black' : 'border-blue-500 bg-blue-500/10 text-blue-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-500')}`}
                  >
                    <Edit3 className={`w-4 h-4 mt-0.5 ${decision === 'approve_changes' ? 'text-blue-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Approve with changes</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Proceed after minor noted corrections.</span>
                    </div>
                  </button>

                  {/* Requires Revision */}
                  <button 
                    onClick={() => setDecision('revision')}
                    className={`text-left p-3 border rounded-xl transition-all flex items-start gap-3 ${decision === 'revision' ? (isPouchDomain ? 'bg-red-400 border-black text-black' : 'border-rose-500 bg-rose-500/10 text-rose-400') : (isPouchDomain ? 'border-neutral-200 hover:border-black' : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-500')}`}
                  >
                    <AlertTriangle className={`w-4 h-4 mt-0.5 ${decision === 'revision' ? 'text-rose-500' : 'text-neutral-500'}`} />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold block uppercase text-gray-800">Requires Revision</span>
                      <span className="text-[10px] text-neutral-500 leading-normal block">Do NOT print. Request new proof after changes.</span>
                    </div>
                  </button>

                </div>
              </div>

              {/* Important notice block */}
              <div className={`${isPouchDomain ? "bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black" : "bg-white border border-gray-200 p-6 text-gray-800 shadow-sm rounded-3xl"} flex flex-col gap-4`}>
                <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                  <ShieldAlert className="w-5 h-5 text-amber-500" />
                  <h3 className={`${isPouchDomain ? "font-black text-base uppercase tracking-tight font-mono text-black" : "font-extrabold text-sm uppercase tracking-wider text-gray-800"}`}>
                    Important Notice - Please Read Before Approval
                  </h3>
                </div>

                <div className="text-[10.5px] leading-relaxed text-gray-600 space-y-2">
                  <p>• This proof is an exact duplicate of the original production artwork that will be used to print your product.</p>
                  <p>• All copy, punctuation and spelling has been proof read by the account executive.</p>
                  <p className="text-amber-400 font-bold">• We will not be responsible for any discrepancies that are approved by the customer.</p>
                  <p>• Color Management will be controlled by other document.</p>
                </div>

                {/* Tolerances */}
                <div className={`mt-2 p-3 ${isPouchDomain ? 'bg-neutral-50 border border-black' : 'bg-gray-50 border border-gray-200'} rounded-xl flex items-center justify-between`}>
                  <div className="flex items-center gap-2 text-xs font-bold">
                    <Scale className="w-4 h-4 text-green-400" />
                    <span>Tolerances:</span>
                  </div>
                  <div className="flex gap-4 text-[10px] font-bold font-mono">
                    <span className="text-gray-500">Bag Making Tolerance: <strong className="text-gray-800">+/-2mm</strong></span>
                    <span className="text-gray-500">Color Tolerance: <strong className="text-gray-800">+/-10%</strong></span>
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
