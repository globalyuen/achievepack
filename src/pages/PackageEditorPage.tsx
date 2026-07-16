import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { Layers, Box, Database, Tag, Grid, Droplet, Grid3X3, Coffee, ShoppingBag, Shirt } from 'lucide-react';
import Footer from '../components/Footer';
import SiteHeader from '../components/SiteHeader';

interface Layer {
  id: string;
  img: HTMLImageElement;
  name: string;
  pos: { x: number; y: number };
  scale: number;
  rotation: number;
  width: number;
  height: number;
}

interface Shape {
  id: string;
  name: string;
  keywords: string;
  category?: string;
  dieline_image: string;
  glb_file: string;
  dimensions: string;
  description: string;
}

export default function PackageEditorPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canRef = useRef<THREE.Group | null>(null);
  const [showReferenceCan, setShowReferenceCan] = useState<boolean>(true);

  // Helper to construct a white 355ml cola can (radius 33mm, height 122mm) dynamically
  const createColaCanModel = () => {
    const group = new THREE.Group();
    group.name = 'cola-can-reference';

    const radius = 33;
    const height = 122;

    // 1. Can Body (Matte White)
    const bodyGeo = new THREE.CylinderGeometry(radius, radius, 110, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xf9fafb, // clean white
      roughness: 0.35,
      metalness: 0.1,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    bodyMesh.position.y = 55;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    group.add(bodyMesh);

    // 2. Neck Taper (Silver Metal)
    const neckGeo = new THREE.CylinderGeometry(radius - 3, radius, 6, 32);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db, // silver aluminum
      roughness: 0.25,
      metalness: 0.85,
    });
    const neckMesh = new THREE.Mesh(neckGeo, metalMat);
    neckMesh.position.y = 113;
    neckMesh.castShadow = true;
    group.add(neckMesh);

    // 3. Top Rim & Lid (Silver Metal)
    const topRimGeo = new THREE.CylinderGeometry(radius - 3, radius - 3, 2, 32);
    const topRimMesh = new THREE.Mesh(topRimGeo, metalMat);
    topRimMesh.position.y = 117;
    topRimMesh.castShadow = true;
    group.add(topRimMesh);

    const lidGeo = new THREE.CylinderGeometry(radius - 4, radius - 4, 0.5, 32);
    const lidMesh = new THREE.Mesh(lidGeo, metalMat);
    lidMesh.position.y = 118;
    group.add(lidMesh);

    // 4. Bottom Taper (Silver Metal)
    const baseGeo = new THREE.CylinderGeometry(radius, radius - 3, 4, 32);
    const baseMesh = new THREE.Mesh(baseGeo, metalMat);
    baseMesh.position.y = -2;
    baseMesh.castShadow = true;
    group.add(baseMesh);
    
    const bottomRimGeo = new THREE.CylinderGeometry(radius - 3, radius - 3, 2, 32);
    const bottomRimMesh = new THREE.Mesh(bottomRimGeo, metalMat);
    bottomRimMesh.position.y = -5;
    bottomRimMesh.castShadow = true;
    group.add(bottomRimMesh);

    // Adjust Y coordinates so Y=0 is exactly the bottom rim base
    bodyMesh.position.y += 6;
    neckMesh.position.y += 6;
    topRimMesh.position.y += 6;
    lidMesh.position.y += 6;
    baseMesh.position.y += 6;
    bottomRimMesh.position.y += 6;

    // Pop Tab
    const tabGeo = new THREE.BoxGeometry(8, 1, 16);
    const tabMesh = new THREE.Mesh(tabGeo, metalMat);
    tabMesh.position.set(0, 118 + 6, -6);
    group.add(tabMesh);

    // ---- 3D Dimension Arrows & Labels ----
    const arrowColor = 0x64ffda; // matching neon cyan theme

    // 1. Height Arrow (Vertical)
    const heightArrowGroup = new THREE.Group();
    
    // Upward arrow
    const arrowUp = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(45, 62, 0),
      62,
      arrowColor,
      8,
      4
    );
    // Downward arrow
    const arrowDown = new THREE.ArrowHelper(
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(45, 62, 0),
      62,
      arrowColor,
      8,
      4
    );
    heightArrowGroup.add(arrowUp);
    heightArrowGroup.add(arrowDown);
    
    // Height Dimension line backer
    const lineGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(45, 0, 0),
      new THREE.Vector3(45, 124, 0)
    ]);
    const lineMat = new THREE.LineBasicMaterial({ color: arrowColor, transparent: true, opacity: 0.8 });
    const heightLine = new THREE.Line(lineGeom, lineMat);
    heightArrowGroup.add(heightLine);

    // Helper to create text sprite label
    const createTextSprite = (text: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 256, 64);
        // Rounded background
        ctx.fillStyle = 'rgba(10, 25, 47, 0.85)';
        ctx.strokeStyle = '#64ffda';
        ctx.lineWidth = 2;
        const r = 8;
        const w = 256;
        const h = 64;
        ctx.beginPath();
        ctx.moveTo(r, 0);
        ctx.lineTo(w - r, 0);
        ctx.quadraticCurveTo(w, 0, w, r);
        ctx.lineTo(w, h - r);
        ctx.quadraticCurveTo(w, h, w - r, h);
        ctx.lineTo(r, h);
        ctx.quadraticCurveTo(0, h, 0, h - r);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 22px Outfit, Inter, sans-serif';
        ctx.fillStyle = '#64ffda';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 32);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(80, 20, 1);
      return sprite;
    };

    const heightLabelSprite = createTextSprite('122mm (4.8")');
    heightLabelSprite.position.set(75, 62, 0);
    heightArrowGroup.add(heightLabelSprite);
    group.add(heightArrowGroup);

    // 2. Diameter Arrow (Horizontal)
    const diaArrowGroup = new THREE.Group();
    
    // Leftward arrow
    const arrowLeft = new THREE.ArrowHelper(
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 5, 45),
      33,
      arrowColor,
      8,
      4
    );
    // Rightward arrow
    const arrowRight = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 5, 45),
      33,
      arrowColor,
      8,
      4
    );
    diaArrowGroup.add(arrowLeft);
    diaArrowGroup.add(arrowRight);

    // Diameter Dimension line backer
    const diaLineGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-33, 5, 45),
      new THREE.Vector3(33, 5, 45)
    ]);
    const diaLine = new THREE.Line(diaLineGeom, lineMat);
    diaArrowGroup.add(diaLine);

    const diaLabelSprite = createTextSprite('66mm (2.6")');
    diaLabelSprite.position.set(0, 25, 45);
    diaArrowGroup.add(diaLabelSprite);
    group.add(diaArrowGroup);

    return group;
  };

  const searchParams = new URLSearchParams(window.location.search);
  const initialViewMode = (searchParams.get('shape') || searchParams.get('slug') || searchParams.get('code')) ? 'editor' : 'catalog';
  const [viewMode, setViewMode] = useState<'catalog' | 'editor'>(initialViewMode as 'catalog' | 'editor');

  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('pouch');
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [width, setWidth] = useState<number>(6.69);
  const [height, setHeight] = useState<number>(8.27);
  const [depth, setDepth] = useState<number>(1.43);
  const [unit, setUnit] = useState<string>('inch');
  const [roughness, setRoughness] = useState<number>(0.5);
  const [metalness, setMetalness] = useState<number>(0.1);
  const [showDieline, setShowDieline] = useState<boolean>(true);
  const [modelName, setModelName] = useState<string>('包装模型 (Packaging Model)');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>('正在加載 3D 模型...');
  const [is3dSupported, setIs3dSupported] = useState<boolean>(true);

  // Share & Password states
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState<boolean>(false);
  const [shareLink, setShareLink] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  // Alphanumeric code-based design sharing states
  const [designCode, setDesignCode] = useState<string>('');
  const [isSavingDesign, setIsSavingDesign] = useState<boolean>(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState<boolean>(false);

  // Custom exclusive web link sharing states
  const [customSlug, setCustomSlug] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [isCreatingCustomLink, setIsCreatingCustomLink] = useState<boolean>(false);
  const [customLinkError, setCustomLinkError] = useState<string>('');
  const [customLinkSuccess, setCustomLinkSuccess] = useState<boolean>(false);
  const [createdCustomUrl, setCreatedCustomUrl] = useState<string>('');
  const [copiedCustomLink, setCopiedCustomLink] = useState<boolean>(false);

  // Mobile tab state: '3d' | '2d' | 'settings'
  const [mobileTab, setMobileTab] = useState<'3d' | '2d' | 'settings'>('3d');

  // Three.js and Canvas Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const canvasTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const materialsRef = useRef<THREE.Mesh[]>([]);
  const originalTexturesRef = useRef<Map<string, THREE.Texture>>(new Map());

  // Lights and floor refs
  const dirLight1Ref = useRef<THREE.DirectionalLight | null>(null);
  const dirLight2Ref = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);
  const floorRef = useRef<THREE.Mesh | null>(null);
  const gridRef = useRef<THREE.GridHelper | null>(null);
  const exportingRef = useRef<boolean>(false);

  // Offscreen canvas for rendering clean textures
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animation Refs & State
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionRef = useRef<THREE.AnimationAction | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const [hasAnimation, setHasAnimation] = useState<boolean>(false);
  const [animationProgress, setAnimationProgress] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Default images loaded checks
  const dielineImgRef = useRef<HTMLImageElement | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const dielineLoadedRef = useRef<boolean>(false);
  const logoLoadedRef = useRef<boolean>(false);
  const currentLoadIdRef = useRef<number>(0);
  const scaleFactorRef = useRef<number>(1);

  // Bounding box helpers
  const originalSizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const originalBoxRef = useRef<THREE.Box3>(new THREE.Box3());

  // Drag state
  const isDraggingRef = useRef<boolean>(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Load static shapes list on mount (Force English version for names)
  useEffect(() => {
    fetch('/models_database_en.json')
      .then(res => res.json())
      .then((data: Shape[]) => {
        setShapes(data);
      })
      .catch(err => {
        console.error('Error loading English shapes database, falling back:', err);
        fetch('/models_database.json')
          .then(res => res.json())
          .then((data: Shape[]) => {
            setShapes(data);
          })
          .catch(e => console.error('Error loading fallback database:', e));
      });
  }, []);

  // Shared category detection helper — pouch wins over bottle if both keywords present
  const detectCategory = (shape: Shape) => {
    // We now have a robust `category` field in the database!
    const cat = shape.category || 'Other';
    const isPouch = cat === 'Pouch';
    const isBox = cat === 'Box';
    const isBottle = cat === 'Bottle';
    const isLabel = cat === 'Label';
    const isSpoutedPouch = cat === 'Spouted Pouch';
    const isTray = cat === 'Tray';
    const isCup = cat === 'Cup';
    const isBag = cat === 'Bag';
    const isTshirt = cat === 'T-shirt';
    return { isPouch, isBox, isBottle, isLabel, isSpoutedPouch, isTray, isCup, isBag, isTshirt };
  };

  // Filter shapes based on the active tab category
  const filteredShapes = React.useMemo(() => {
    return shapes.filter((shape) => {
      const cat = (shape.category || 'Other').toLowerCase();
      if (activeCategory === cat) return true;
      
      const knownCategories = ['pouch', 'spouted pouch', 'box', 'bottle', 'tray', 'cup', 'bag', 't-shirt', 'label'];
      if (activeCategory === 'other') {
        return !knownCategories.includes(cat);
      }
      return false;
    });
  }, [shapes, activeCategory]);

  // Sync canvas dimensions
  const updateEditor = () => {
    if (!dielineLoadedRef.current || !logoLoadedRef.current || !editorCanvasRef.current || !offscreenCanvasRef.current) return;

    const canvas = editorCanvasRef.current;
    const offscreenCanvas = offscreenCanvasRef.current;

    // Get natural dimensions of dieline template
    let naturalW = 1000;
    let naturalH = 619;
    if (dielineImgRef.current && dielineImgRef.current.complete) {
      naturalW = dielineImgRef.current.naturalWidth || 1000;
      naturalH = dielineImgRef.current.naturalHeight || 619;
    }

    const activeShape = shapes.find(s => String(s.id) === String(selectedShapeId));
    const shapeCategory = activeShape ? detectCategory(activeShape) : { isPouch: true, isBox: false, isBottle: false, isLabel: false };
    const shouldScaleCanvas = shapeCategory.isPouch || shapeCategory.isLabel;

    let sX = 1.0;
    let sY = 1.0;
    if (shouldScaleCanvas && originalSizeRef.current.x && originalSizeRef.current.y) {
      let targetW = width;
      let targetH = height;
      if (unit === 'inch') {
        targetW *= 25.4;
        targetH *= 25.4;
      }
      sX = targetW / originalSizeRef.current.x;
      sY = targetH / originalSizeRef.current.y;
    }

    const targetW = Math.round(naturalW * sX);
    const targetH = Math.round(naturalH * sY);

    // Update canvas sizes dynamically
    if (canvas.width !== targetW || canvas.height !== targetH || offscreenCanvas.width !== targetW || offscreenCanvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      offscreenCanvas.width = targetW;
      offscreenCanvas.height = targetH;

      // Dispose of old texture to prevent WebGL size mismatch freeze
      if (canvasTextureRef.current) {
        canvasTextureRef.current.dispose();
      }
      
      const newTexture = new THREE.CanvasTexture(offscreenCanvas);
      newTexture.colorSpace = THREE.SRGBColorSpace;
      newTexture.wrapS = THREE.ClampToEdgeWrapping;
      newTexture.wrapT = THREE.ClampToEdgeWrapping;
      newTexture.flipY = false;
      canvasTextureRef.current = newTexture;

      // Re-assign new texture to all loaded materials
      materialsRef.current.forEach(node => {
        if (node.material) {
          const mats = Array.isArray(node.material) ? node.material : [node.material];
          mats.forEach(mat => {
            if (mat && 'map' in mat) {
              (mat as any).map = newTexture;
              (mat as any).needsUpdate = true;
            }
          });
        }
      });
    }

    const ctx = canvas.getContext('2d');
    const offscreenCtx = offscreenCanvas.getContext('2d');
    if (!ctx || !offscreenCtx) return;

    const drawSingleLayer = (cContext: CanvasRenderingContext2D, layer: Layer, drawUIOverlay: boolean) => {
      cContext.save();

      // Position scales with canvas
      const posX = layer.pos.x * sX;
      const posY = layer.pos.y * sY;
      cContext.translate(posX, posY);
      
      cContext.rotate(layer.rotation * (Math.PI / 180));

      const w = layer.width * layer.scale;
      const h = layer.height * layer.scale;

      cContext.drawImage(layer.img, -w / 2, -h / 2, w, h);

      if (drawUIOverlay && selectedLayer && layer.id === selectedLayer.id) {
        cContext.strokeStyle = '#64ffda';
        cContext.lineWidth = 2;
        cContext.setLineDash([6, 4]);
        cContext.strokeRect(-w / 2 - 4, -h / 2 - 4, w + 8, h + 8);

        cContext.fillStyle = '#64ffda';
        cContext.beginPath();
        cContext.arc(0, 0, 5, 0, Math.PI * 2);
        cContext.fill();
      }
      cContext.restore();
    };

    const drawWatermark = (cContext: CanvasRenderingContext2D) => {
      if (isPremiumUnlocked || passwordInput === 'ryan' || exportingRef.current) return; // Skip watermark if premium unlocked or exporting
      cContext.save();
      cContext.fillStyle = 'rgba(150, 150, 150, 0.22)';
      cContext.font = 'bold 24px sans-serif';
      cContext.textAlign = 'center';
      cContext.textBaseline = 'middle';

      const angle = -Math.PI / 6;
      const stepX = 300;
      const stepY = 180;

      for (let x = -100; x < targetW + 200; x += stepX) {
        for (let y = -100; y < targetH + 200; y += stepY) {
          cContext.save();
          cContext.translate(x, y);
          cContext.rotate(angle);
          cContext.fillText('achievepack.com', 0, 0);
          cContext.restore();
        }
      }
      cContext.restore();
    };

    // 1. Offscreen Canvas (Clean texture for 3D)
    offscreenCtx.fillStyle = '#ffffff';
    offscreenCtx.fillRect(0, 0, targetW, targetH);

    if (showDieline && dielineImgRef.current && dielineLoadedRef.current) {
      offscreenCtx.drawImage(dielineImgRef.current, 0, 0, targetW, targetH);
    }

    // Draw repeating pattern of AP Logo on skin
    if (!isPremiumUnlocked && passwordInput !== 'ryan' && !exportingRef.current && logoImgRef.current && logoImgRef.current.complete) {
      try {
        offscreenCtx.save();
        offscreenCtx.globalCompositeOperation = 'multiply';
        const patCanvas = document.createElement('canvas');
        patCanvas.width = 160;
        patCanvas.height = 120;
        const patCtx = patCanvas.getContext('2d');
        if (patCtx) {
          patCtx.globalAlpha = 0.12; // subtle repeated watermark pattern
          patCtx.drawImage(logoImgRef.current, 20, 20, 120, 80);
          const pattern = offscreenCtx.createPattern(patCanvas, 'repeat');
          if (pattern) {
            offscreenCtx.fillStyle = pattern;
            offscreenCtx.fillRect(0, 0, targetW, targetH);
          }
        }
        offscreenCtx.restore();
      } catch (e) {
        console.error('Error rendering repeating pattern:', e);
      }
    }

    layers.forEach(layer => {
      drawSingleLayer(offscreenCtx, layer, false);
    });

    drawWatermark(offscreenCtx);

    if (canvasTextureRef.current) {
      canvasTextureRef.current.needsUpdate = true;
    }

    // 2. Main View Canvas (Dielines + UI guidelines)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);

    if (dielineImgRef.current && dielineLoadedRef.current) {
      ctx.drawImage(dielineImgRef.current, 0, 0, targetW, targetH);
    }

    // Draw repeating pattern of AP Logo on 2D view
    if (!isPremiumUnlocked && passwordInput !== 'ryan' && !exportingRef.current && logoImgRef.current && logoImgRef.current.complete) {
      try {
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        const patCanvas = document.createElement('canvas');
        patCanvas.width = 160;
        patCanvas.height = 120;
        const patCtx = patCanvas.getContext('2d');
        if (patCtx) {
          patCtx.globalAlpha = 0.12; // subtle repeated watermark pattern
          patCtx.drawImage(logoImgRef.current, 20, 20, 120, 80);
          const pattern = ctx.createPattern(patCanvas, 'repeat');
          if (pattern) {
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, targetW, targetH);
          }
        }
        ctx.restore();
      } catch (e) {
        console.error('Error rendering repeating pattern on 2D:', e);
      }
    }

    layers.forEach(layer => {
      drawSingleLayer(ctx, layer, true);
    });

    drawWatermark(ctx);
  };

  // Sync canvas drawings on state changes
  useEffect(() => {
    updateEditor();
  }, [layers, selectedLayer, showDieline, isPremiumUnlocked, passwordInput, width, height, unit]);

  // Handle Dimensions Scaling
  const updateModelScale = () => {
    if (!modelRef.current || !originalSizeRef.current.x) return;

    let targetW = width;
    let targetH = height;
    let targetD = depth;

    if (unit === 'inch') {
      targetW *= 25.4;
      targetH *= 25.4;
      targetD *= 25.4;
    }

    const scaleX = (targetW / originalSizeRef.current.x) * scaleFactorRef.current;
    const scaleY = (targetH / originalSizeRef.current.y) * scaleFactorRef.current;
    const scaleZ = (targetD / originalSizeRef.current.z) * scaleFactorRef.current;

    modelRef.current.scale.set(scaleX, scaleY, scaleZ);
    
    const relativeScaleY = targetH / originalSizeRef.current.y;
    modelRef.current.position.y = -originalBoxRef.current.min.y * relativeScaleY;

    if (controlsRef.current) {
      controlsRef.current.target.set(0, targetH / 2, 0);
      controlsRef.current.update();
    }

    if (cameraRef.current) {
      const maxDim = Math.max(targetW, targetH, targetD);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;
      cameraRef.current.position.set(cameraRef.current.position.x, targetH * 0.8, cameraZ);
    }

    if (canRef.current) {
      canRef.current.position.x = (targetW / 2) + 50;
      canRef.current.visible = showReferenceCan;
    }

    updateEditor();
  };

  useEffect(() => {
    if (canRef.current) {
      canRef.current.visible = showReferenceCan;
    }
  }, [showReferenceCan]);

  useEffect(() => {
    updateModelScale();
  }, [width, height, depth, unit, showReferenceCan]);

  // Initialize ThreeJS on mount
  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return;

    const widthContainer = containerRef.current.clientWidth;
    const heightContainer = containerRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f4f5); // match bg-zinc-100
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, widthContainer / heightContainer, 0.1, 10000);
    camera.position.set(0, 1.5, 3.5);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(widthContainer, heightContainer);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 1;
    controls.maxDistance = 25;
    controlsRef.current = controls;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 2048;
    dirLight1.shadow.mapSize.height = 2048;
    dirLight1.shadow.bias = -0.0005;
    scene.add(dirLight1);
    dirLight1Ref.current = dirLight1;

    const dirLight2 = new THREE.DirectionalLight(0x8bc7ff, 0.8);
    scene.add(dirLight2);
    dirLight2Ref.current = dirLight2;

    const rimLight = new THREE.DirectionalLight(0xfff5e6, 1.0);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // Floor and Grid
    const floorGeo = new THREE.PlaneGeometry(1, 1);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.4 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);
    floorRef.current = floor;

    const grid = new THREE.GridHelper(1, 1, 0x1f2937, 0x111827);
    grid.position.y = 0.001;
    scene.add(grid);
    gridRef.current = grid;

    // Add 355ml Cola Can Reference Model
    const canGroup = createColaCanModel();
    scene.add(canGroup);
    canRef.current = canGroup;

    // 6. Create Canvas Texture
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 1000;
    offscreenCanvas.height = 619;
    offscreenCanvasRef.current = offscreenCanvas;

    const canvasTexture = new THREE.CanvasTexture(offscreenCanvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;
    canvasTexture.wrapS = THREE.ClampToEdgeWrapping;
    canvasTexture.wrapT = THREE.ClampToEdgeWrapping;
    canvasTexture.flipY = false;
    canvasTextureRef.current = canvasTexture;

    // 7. Load default assets
    const dielineImg = new Image();
    dielineImg.src = '/dieline.png';
    dielineImg.onload = () => {
      dielineLoadedRef.current = true;
      updateEditor();
    };
    dielineImgRef.current = dielineImg;

    const logoImg = new Image();
    logoImg.src = '/ap-logo.png';
    logoImg.onload = () => {
      logoWidth = logoImg.width;
      logoHeight = logoImg.height;
      logoLoadedRef.current = true;

      // Only set default AP logo layer if there is no shared artwork param in URL
      const searchParams = new URLSearchParams(window.location.search);
      if (!searchParams.get('artwork')) {
        const defaultLayer: Layer = {
          id: 'default-ap-logo',
          img: logoImg,
          name: 'AP Logo (默認)',
          pos: {
            x: Math.round((dielineImgRef.current?.naturalWidth || 1000) / 2),
            y: Math.round((dielineImgRef.current?.naturalHeight || 619) / 2)
          },
          scale: 0.5,
          rotation: 0.0,
          width: logoImg.width,
          height: logoImg.height
        };
        setLayers([defaultLayer]);
        setSelectedLayer(defaultLayer);
      }
      updateEditor();
    };
    let logoWidth = 300;
    let logoHeight = 222;
    logoImgRef.current = logoImg;

    const searchParams = new URLSearchParams(window.location.search);
    const shapeId = searchParams.get('shape');

    if (!shapeId) {
      // 8. Load default GLB model
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      loader.setDRACOLoader(dracoLoader);
      const loadId = ++currentLoadIdRef.current;
      loader.load(
        '/model.glb',
        (gltf) => {
          if (loadId !== currentLoadIdRef.current) {
            gltf.scene.traverse((node) => {
              if (node instanceof THREE.Mesh) {
                node.geometry.dispose();
                const mats = Array.isArray(node.material) ? node.material : [node.material];
                mats.forEach(m => m && m.dispose());
              }
            });
            return;
          }
          const model = gltf.scene;
          modelRef.current = model;

          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);

          let size = originalSizeRef.current;
          let center = originalBoxRef.current.getCenter(new THREE.Vector3());

          if (size.x < 2.0 && size.y < 2.0) {
            model.scale.set(1000, 1000, 1000);
            scaleFactorRef.current = 1000;
            originalBoxRef.current.setFromObject(model);
            originalBoxRef.current.getSize(originalSizeRef.current);
            size = originalSizeRef.current;
            center = originalBoxRef.current.getCenter(new THREE.Vector3());
          } else {
            scaleFactorRef.current = 1;
          }

          // Read URL preset parameters
          const widthParam = searchParams.get('w');
          const heightParam = searchParams.get('h');
          const artworkParam = searchParams.get('artwork');

          // Set dimensions inputs
          setUnit('mm');
          if (widthParam) {
            setWidth(Number(widthParam));
          } else {
            setWidth(Math.round(size.x));
          }
          if (heightParam) {
            setHeight(Number(heightParam));
          } else {
            setHeight(Math.round(size.y));
          }
          setDepth(parseFloat(size.z.toFixed(1)));

          model.position.x = -center.x;
          model.position.z = -center.z;
          model.position.y = -originalBoxRef.current.min.y;

          model.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true;
              node.receiveShadow = true;
              if (node.material) {
                materialsRef.current.push(node);
                const mats = Array.isArray(node.material) ? node.material : [node.material];
                mats.forEach(mat => {
                  mat.side = THREE.DoubleSide;
                  mat.map = canvasTexture;
                  if ('normalMap' in mat) mat.normalMap = null;
                  if ('bumpMap' in mat) mat.bumpMap = null;
                  if ('roughnessMap' in mat) mat.roughnessMap = null;
                  if ('metalnessMap' in mat) mat.metalnessMap = null;
                  if ('aoMap' in mat) mat.aoMap = null;
                  if ('emissiveMap' in mat) mat.emissiveMap = null;
                  if ('lightMap' in mat) mat.lightMap = null;
                  mat.needsUpdate = true;
                });
              }
            }
          });

          scene.add(model);

          // Adjust camera, floor, lighting positions
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = camera.fov * (Math.PI / 180);
          const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;

          camera.far = maxDim * 15;
          camera.position.set(0, size.y * 0.8, cameraZ);
          camera.updateProjectionMatrix();

          controls.target.set(0, size.y / 2, 0);
          controls.maxDistance = maxDim * 6;
          controls.minDistance = maxDim * 0.1;
          controls.update();

          // Floor / Grid resizing
          const floorSize = maxDim * 8;
          floor.geometry.dispose();
          floor.geometry = new THREE.PlaneGeometry(floorSize, floorSize);

          scene.remove(grid);
          grid.dispose();
          const newGrid = new THREE.GridHelper(floorSize, 50, 0x1f2937, 0x111827);
          newGrid.position.y = 0.001;
          scene.add(newGrid);
          gridRef.current = newGrid;

          dirLight1.position.set(maxDim * 1.5, maxDim * 2.5, maxDim * 1.5);
          dirLight1.shadow.camera.left = -maxDim * 1.5;
          dirLight1.shadow.camera.right = maxDim * 1.5;
          dirLight1.shadow.camera.top = maxDim * 1.5;
          dirLight1.shadow.camera.bottom = -maxDim * 1.5;
          dirLight1.shadow.camera.near = 0.1;
          dirLight1.shadow.camera.far = maxDim * 8;

          dirLight2.position.set(-maxDim * 1.5, maxDim * 1.0, -maxDim * 1.5);
          rimLight.position.set(0, maxDim * 1.5, -maxDim * 2.0);

          // Load preset layers (artwork) if provided
          if (artworkParam) {
            const img = new Image();
            img.src = artworkParam;
            img.onload = () => {
              const naturalW = dielineImgRef.current?.naturalWidth || 1000;
              const naturalH = dielineImgRef.current?.naturalHeight || 619;
              const sharedLayer: Layer = {
                id: 'shared-artwork',
                img,
                name: 'Shared Artwork',
                pos: {
                  x: Math.round(naturalW / 2),
                  y: Math.round(naturalH / 2)
                },
                scale: 1.0,
                rotation: 0,
                width: naturalW,
                height: naturalH
              };
              setLayers([sharedLayer]);
              setSelectedLayer(sharedLayer);
              updateEditor();
            };
          }

          setIsLoading(false);
          updateModelScale();
        },
        (xhr) => {
          if (loadId !== currentLoadIdRef.current) return;
          if (xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            setLoadingText(`正在加載 3D 模型... ${percent}%`);
          }
        },
        (err) => {
          if (loadId !== currentLoadIdRef.current) return;
          console.error('Error loading default model:', err);
          setLoadingText('模型加載失敗。請重試。');
        }
      );
    }

    // Animation Loop
    let animationFrameId: number;
    let isRendering = true;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isRendering) return;
      controls.update();
      if (mixerRef.current) {
        mixerRef.current.update(clockRef.current.getDelta());
      } else {
        clockRef.current.getDelta(); // keep clock ticking
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRendering = false;
      } else {
        isRendering = true;
        clockRef.current.getDelta(); // reset delta to prevent huge jump
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Window Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      controls.dispose();
      renderer.dispose();
      canvasTexture.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [viewMode]);

  // Re-parent / resize Three.js renderer when switching between mobile tabs or breakpoints
  useEffect(() => {
    if (!rendererRef.current || !cameraRef.current) return;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;

    // Determine which container should host the renderer canvas
    const isMobileViewport = window.innerWidth < 1024; // lg breakpoint
    let targetContainer: HTMLElement | null = null;

    if (isMobileViewport && mobileTab === '3d') {
      targetContainer = document.getElementById('mobile-3d-container');
    } else if (!isMobileViewport) {
      targetContainer = containerRef.current;
    }

    if (targetContainer && !targetContainer.contains(renderer.domElement)) {
      // Move the canvas to the correct container
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      targetContainer.appendChild(renderer.domElement);
    }

    // Resize renderer to match the new container
    if (targetContainer) {
      const w = targetContainer.clientWidth || window.innerWidth;
      const h = targetContainer.clientHeight || window.innerHeight * 0.5;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    }
  }, [mobileTab, viewMode]);

  // Shared function to load a packaging shape into the 3D studio scene
  const loadShape = (shape: Shape | undefined, presetWidth?: number, presetHeight?: number, presetLayers?: any[], presetUnit?: string) => {
    setIsLoading(true);
    setLoadingText('正在下載並解析 3D 模型...');

    const loadId = ++currentLoadIdRef.current;
    const shapeName = shape ? shape.name : '包裝模型 (Packaging Model)';
    const glbUrl = shape 
      ? (shape.glb_file.startsWith('http') || shape.glb_file.startsWith('//') ? '/api/proxy?url=' + encodeURIComponent(shape.glb_file) : shape.glb_file)
      : '/model.glb';
    const dielineUrl = shape
      ? (shape.dieline_image.startsWith('http') || shape.dieline_image.startsWith('//') ? '/api/proxy?url=' + encodeURIComponent(shape.dieline_image) : shape.dieline_image)
      : '/dieline.png';

    // Clear previous model from scene
    if (sceneRef.current && modelRef.current) {
      sceneRef.current.remove(modelRef.current);
      modelRef.current.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          node.geometry.dispose();
          const mats = Array.isArray(node.material) ? node.material : [node.material];
          mats.forEach(m => m && m.dispose());
        }
      });
      modelRef.current = null;
    }
    materialsRef.current.length = 0;

    // Load new dieline background image
    dielineLoadedRef.current = false;
    if (dielineImgRef.current) {
      const isRemoteDieline = dielineUrl.startsWith('http') || dielineUrl.startsWith('//');
      dielineImgRef.current.src = isRemoteDieline
        ? '/api/proxy?url=' + encodeURIComponent(dielineUrl)
        : dielineUrl;
      dielineImgRef.current.onload = () => {
        if (loadId !== currentLoadIdRef.current) return;
        dielineLoadedRef.current = true;
        updateEditor();
      };
    }

    if (shape && !shape.glb_file) {
      setIs3dSupported(false);
      setIsLoading(false);
      setModelName(shapeName);
      return;
    }

    setIs3dSupported(true);

    // Load GLTF model
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      glbUrl,
      (gltf) => {
        if (loadId !== currentLoadIdRef.current) {
          gltf.scene.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.geometry.dispose();
              const mats = Array.isArray(node.material) ? node.material : [node.material];
              mats.forEach(m => m && m.dispose());
            }
          });
          return;
        }
        const model = gltf.scene;
        modelRef.current = model;

        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          const action = mixer.clipAction(gltf.animations[0]);
          actionRef.current = action;
          action.setLoop(THREE.LoopPingPong, Infinity);
          action.play();
          
          setHasAnimation(true);
          setIsAutoPlay(true);
          setAnimationProgress(0);
        } else {
          mixerRef.current = null;
          actionRef.current = null;
          setHasAnimation(false);
        }

        originalBoxRef.current.setFromObject(model);
        originalBoxRef.current.getSize(originalSizeRef.current);

        let size = originalSizeRef.current;
        let center = originalBoxRef.current.getCenter(new THREE.Vector3());

        if (size.x < 2.0 && size.y < 2.0) {
          model.scale.set(1000, 1000, 1000);
          scaleFactorRef.current = 1000;
          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);
          size = originalSizeRef.current;
          center = originalBoxRef.current.getCenter(new THREE.Vector3());
        } else {
          scaleFactorRef.current = 1;
        }

        // Set dimensions inputs (use preset values if loaded from share link)
        const activeUnit = presetUnit || 'inch';
        setUnit(activeUnit);

        const defaultW = Math.round(size.x);
        const defaultH = Math.round(size.y);
        const defaultD = parseFloat(size.z.toFixed(1));

        if (presetWidth) {
          if (presetWidth > 25 && activeUnit === 'inch') {
            setWidth(parseFloat((presetWidth / 25.4).toFixed(2)));
            setHeight(parseFloat(((presetHeight || defaultH) / 25.4).toFixed(2)));
            setDepth(parseFloat((defaultD / 25.4).toFixed(2)));
          } else {
            setWidth(presetWidth);
            setHeight(presetHeight || defaultH);
            setDepth(defaultD);
          }
        } else {
          if (activeUnit === 'inch') {
            setWidth(parseFloat((defaultW / 25.4).toFixed(2)));
            setHeight(parseFloat((defaultH / 25.4).toFixed(2)));
            setDepth(parseFloat((defaultD / 25.4).toFixed(2)));
          } else {
            setWidth(defaultW);
            setHeight(defaultH);
            setDepth(defaultD);
          }
        }

        model.position.x = -center.x;
        model.position.z = -center.z;
        model.position.y = -originalBoxRef.current.min.y;

        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material) {
              materialsRef.current.push(node);
              const mats = Array.isArray(node.material) ? node.material : [node.material];
              mats.forEach(mat => {
                mat.side = THREE.DoubleSide;
                mat.map = canvasTextureRef.current;
                if ('normalMap' in mat) mat.normalMap = null;
                if ('bumpMap' in mat) mat.bumpMap = null;
                if ('roughnessMap' in mat) mat.roughnessMap = null;
                if ('metalnessMap' in mat) mat.metalnessMap = null;
                if ('aoMap' in mat) mat.aoMap = null;
                if ('emissiveMap' in mat) mat.emissiveMap = null;
                if ('lightMap' in mat) mat.lightMap = null;
                mat.needsUpdate = true;
              });
            }
          }
        });

        if (sceneRef.current) {
          // Double check and remove any other old model groups to prevent overlap
          const toRemove: THREE.Object3D[] = [];
          sceneRef.current.traverse((child) => {
            if (child !== model && child !== sceneRef.current && child instanceof THREE.Group && child.name !== 'lights-group' && child.name !== 'cola-can-reference') {
              toRemove.push(child);
            }
          });
          toRemove.forEach((child) => sceneRef.current?.remove(child));

          sceneRef.current.add(model);
          
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = cameraRef.current ? cameraRef.current.fov * (Math.PI / 180) : 45 * (Math.PI / 180);
          const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;

          if (cameraRef.current) {
            cameraRef.current.far = maxDim * 15;
            cameraRef.current.position.set(0, size.y * 0.8, cameraZ);
            cameraRef.current.updateProjectionMatrix();
          }

          if (controlsRef.current) {
            controlsRef.current.target.set(0, size.y / 2, 0);
            controlsRef.current.maxDistance = maxDim * 6;
            controlsRef.current.minDistance = maxDim * 0.1;
            controlsRef.current.update();
          }

          if (floorRef.current) {
            floorRef.current.position.y = -0.1;
          }
          if (dirLight1Ref.current) {
            dirLight1Ref.current.position.set(maxDim * 1.2, maxDim * 2.0, maxDim * 1.2);
            dirLight1Ref.current.shadow.camera.left = -maxDim * 2;
            dirLight1Ref.current.shadow.camera.right = maxDim * 2;
            dirLight1Ref.current.shadow.camera.top = maxDim * 2;
            dirLight1Ref.current.shadow.camera.bottom = -maxDim * 2;
            dirLight1Ref.current.shadow.camera.near = 0.1;
            dirLight1Ref.current.shadow.camera.far = maxDim * 8;
          }
          if (dirLight2Ref.current) {
            dirLight2Ref.current.position.set(-maxDim * 1.5, maxDim * 1.0, -maxDim * 1.5);
          }
          if (rimLightRef.current) {
            rimLightRef.current.position.set(0, maxDim * 1.5, -maxDim * 2.0);
          }
        }

        // Restore preset layers if provided, otherwise default AP logo
        if (presetLayers && presetLayers.length > 0) {
          Promise.all(
            presetLayers.map(layer => {
              return new Promise<Layer>((resolve) => {
                const img = new Image();
                img.src = layer.imgSrc;
                img.onload = () => {
                  resolve({
                    id: layer.id,
                    img,
                    name: layer.name,
                    pos: layer.pos,
                    scale: layer.scale,
                    rotation: layer.rotation,
                    width: layer.width || img.width,
                    height: layer.height || img.height
                  });
                };
                img.onerror = () => {
                  resolve({
                    id: layer.id,
                    img: logoImgRef.current || new Image(),
                    name: layer.name,
                    pos: layer.pos,
                    scale: layer.scale,
                    rotation: layer.rotation,
                    width: layer.width || 100,
                    height: layer.height || 100
                  });
                };
              });
            })
          ).then((loadedLayers) => {
            setLayers(loadedLayers);
            setSelectedLayer(loadedLayers[loadedLayers.length - 1] || null);
            updateEditor();
          });
        } else if (logoImgRef.current) {
          const defaultLayer: Layer = {
            id: 'default-ap-logo',
            img: logoImgRef.current,
            name: 'AP Logo (默認)',
            pos: {
              x: Math.round((dielineImgRef.current?.naturalWidth || 1000) / 2),
              y: Math.round((dielineImgRef.current?.naturalHeight || 619) / 2)
            },
            scale: 0.5,
            rotation: 0.0,
            width: logoImgRef.current.width,
            height: logoImgRef.current.height
          };
          setLayers([defaultLayer]);
          setSelectedLayer(defaultLayer);
        }

        setModelName(shapeName);
        setIsLoading(false);
      },
      (xhr) => {
        if (loadId !== currentLoadIdRef.current) return;
        if (xhr.total > 0) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingText(`正在下載 3D 模型... ${percent}%`);
        }
      },
      (err) => {
        if (loadId !== currentLoadIdRef.current) return;
        console.error('Error loading shape GLB:', err);
        setLoadingText('模型加載失敗。可能該模型路徑已過期。');
      }
    );
  };

  // Fetch dynamic shapes from the Obsidian Database Caching Proxy
  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const shapeId = e.target.value;
    setSelectedShapeId(shapeId);
    if (!shapeId) return;

    const shape = shapes.find(s => String(s.id) === String(shapeId));
    if (shape) {
      loadShape(shape);
    }
  };

  // Auto load shape and shared artwork from URL parameters or code
  useEffect(() => {
    if (shapes.length === 0) return;
    const searchParams = new URLSearchParams(window.location.search);
    const shapeId = searchParams.get('shape');
    const widthParam = searchParams.get('w');
    const heightParam = searchParams.get('h');
    const pwParam = searchParams.get('pw');
    const artworkParam = searchParams.get('artwork');
    const codeParam = searchParams.get('code');

    if (pwParam === 'ryan') {
      setIsPremiumUnlocked(true);
      setPasswordInput('ryan');
    }

    const loadInitialDesign = async () => {
      const unitParam = searchParams.get('unit');
      const slugParam = searchParams.get('slug');
      // 1. Prioritize design code or slug loading
      if (codeParam || slugParam) {
        setLoadingText('正在載入您的專屬設計方案...');
        setIsLoading(true);
        try {
          const url = codeParam 
            ? `/api/get-design?code=${codeParam}`
            : `/api/get-custom-studio?slug=${slugParam}`;
          const res = await fetch(url);
          const data = await res.json();
          
          const design = codeParam ? data.design : data.designData;

          if (data.success && design) {
            const d = design;
            const shape = shapes.find(s => String(s.id) === String(d.shapeId));
            
            if (shape) {
              setSelectedShapeId(shape.id);
              setViewMode('editor');
              loadShape(shape, d.width, d.height, d.layers, d.unit);
              // Switch active category
              const cat = (shape.category || 'Other').toLowerCase();
              const knownCategories = ['pouch', 'spouted pouch', 'box', 'bottle', 'tray', 'cup', 'bag', 't-shirt', 'label'];
              if (knownCategories.includes(cat)) {
                setActiveCategory(cat);
              } else {
                setActiveCategory('other');
              }
            } else {
              // Load default model template with saved custom sizes & layers
              setSelectedShapeId('');
              setViewMode('editor');
              loadShape(undefined, d.width, d.height, d.layers, d.unit);
            }
            return;
          }
        } catch (err) {
          console.error('Error fetching design by code/slug:', err);
        }
      }

      // 2. Fallback to standard URL search parameters
      if (shapeId) {
        const shape = shapes.find(s => String(s.id) === String(shapeId));
        if (shape) {
          setSelectedShapeId(shape.id);
          const presetW = widthParam ? Number(widthParam) : undefined;
          const presetH = heightParam ? Number(heightParam) : undefined;
          const presetArt = artworkParam ? [{ id: 'shared-artwork', imgSrc: artworkParam, name: 'Shared Artwork', pos: { x: 500, y: 309 }, scale: 1.0, rotation: 0 }] : undefined;

          loadShape(shape, presetW, presetH, presetArt, unitParam || 'inch');

          // Automatically switch active tab category
          const cat = (shape.category || 'Other').toLowerCase();
          const knownCategories = ['pouch', 'spouted pouch', 'box', 'bottle', 'tray', 'cup', 'bag', 't-shirt', 'label'];
          if (knownCategories.includes(cat)) {
            setActiveCategory(cat);
          } else {
            setActiveCategory('other');
          }
        }
      } else {
        // 3. Absolute default: load default blank model
        const presetW = widthParam ? Number(widthParam) : undefined;
        const presetH = heightParam ? Number(heightParam) : undefined;
        const presetArt = artworkParam ? [{ id: 'shared-artwork', imgSrc: artworkParam, name: 'Shared Artwork', pos: { x: 500, y: 309 }, scale: 1.0, rotation: 0 }] : undefined;

        loadShape(undefined, presetW, presetH, presetArt, unitParam || 'inch');
      }
    };

    loadInitialDesign();
  }, [shapes]);

  // Expose thumbnail capturing tools to window for automated scripts
  useEffect(() => {
    if (shapes.length === 0) return;
    (window as any).captureModelThumbnail = async (shapeId: string) => {
      const shape = shapes.find(s => String(s.id) === String(shapeId));
      if (!shape) {
        throw new Error(`Shape ${shapeId} not found`);
      }
      
      setSelectedShapeId(shape.id);
      setViewMode('editor');
      setIsLoading(true);

      const url = new URL(window.location.href);
      url.searchParams.set('shape', shape.id);
      window.history.pushState({}, '', url.toString());

      // Force synchronous load
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          loadShape(shape);
          const checkInterval = setInterval(() => {
            const threeCanvas = containerRef.current?.querySelector('canvas') || document.getElementById('mobile-3d-container')?.querySelector('canvas');
            if (threeCanvas && modelRef.current) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);
          setTimeout(() => {
            clearInterval(checkInterval);
            reject(new Error(`Timeout loading shape ${shapeId}`));
          }, 60000);
        }, 200);
      });

      // Wait a tiny bit for texture mapping & animations to settle
      await new Promise(r => setTimeout(r, 400));

      // Adjust camera and model rotation to 45 degrees
      if (modelRef.current && cameraRef.current && controlsRef.current && rendererRef.current && sceneRef.current) {
        // Reset rotation and apply 45-degree angle
        modelRef.current.rotation.set(0.15, Math.PI / 4, 0); // slightly tilted down (X=0.15), rotated 45 degrees (Y=PI/4)
        
        // Force render
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        
        const canvas = containerRef.current?.querySelector('canvas') || document.getElementById('mobile-3d-container')?.querySelector('canvas');
        if (canvas) {
          return canvas.toDataURL('image/png');
        }
      }
      throw new Error('WebGL elements or refs missing');
    };
  }, [shapes]);

  // Handle Layer Selection and Drag-and-Move on 2D Canvas
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!editorCanvasRef.current) return;
    const rect = editorCanvasRef.current.getBoundingClientRect();
    const canvasW = editorCanvasRef.current.width;
    const canvasH = editorCanvasRef.current.height;
    const clickX = ((e.clientX - rect.left) / rect.width) * canvasW;
    const clickY = ((e.clientY - rect.top) / rect.height) * canvasH;

    const activeShape = shapes.find(s => String(s.id) === String(selectedShapeId));
    const shapeCategory = activeShape ? detectCategory(activeShape) : { isPouch: true, isBox: false, isBottle: false, isLabel: false };
    const shouldScaleCanvas = shapeCategory.isPouch || shapeCategory.isLabel;

    let sX = 1.0;
    let sY = 1.0;
    if (shouldScaleCanvas && originalSizeRef.current.x && originalSizeRef.current.y) {
      let targetW = width;
      let targetH = height;
      if (unit === 'inch') {
        targetW *= 25.4;
        targetH *= 25.4;
      }
      sX = targetW / originalSizeRef.current.x;
      sY = targetH / originalSizeRef.current.y;
    }

    let found = false;
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];

      const drawnW = layer.width * layer.scale;
      const drawnH = layer.height * layer.scale;

      const posX = layer.pos.x * sX;
      const posY = layer.pos.y * sY;

      if (clickX >= posX - drawnW / 2 && clickX <= posX + drawnW / 2 &&
          clickY >= posY - drawnH / 2 && clickY <= posY + drawnH / 2) {
        setSelectedLayer(layer);
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: clickX - posX, y: clickY - posY };
        found = true;
        break;
      }
    }

    if (!found) {
      setSelectedLayer(null);
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || !selectedLayer || !editorCanvasRef.current) return;

    const rect = editorCanvasRef.current.getBoundingClientRect();
    const canvasW = editorCanvasRef.current.width;
    const canvasH = editorCanvasRef.current.height;
    const mouseX = ((e.clientX - rect.left) / rect.width) * canvasW;
    const mouseY = ((e.clientY - rect.top) / rect.height) * canvasH;

    const activeShape = shapes.find(s => String(s.id) === String(selectedShapeId));
    const shapeCategory = activeShape ? detectCategory(activeShape) : { isPouch: true, isBox: false, isBottle: false, isLabel: false };
    const shouldScaleCanvas = shapeCategory.isPouch || shapeCategory.isLabel;

    let sX = 1.0;
    let sY = 1.0;
    if (shouldScaleCanvas && originalSizeRef.current.x && originalSizeRef.current.y) {
      let targetW = width;
      let targetH = height;
      if (unit === 'inch') {
        targetW *= 25.4;
        targetH *= 25.4;
      }
      sX = targetW / originalSizeRef.current.x;
      sY = targetH / originalSizeRef.current.y;
    }

    const targetPosX = mouseX - dragOffsetRef.current.x;
    const targetPosY = mouseY - dragOffsetRef.current.y;

    const updatedPos = {
      x: targetPosX / sX,
      y: targetPosY / sY
    };

    const drawnW = selectedLayer.width * selectedLayer.scale;
    const drawnH = selectedLayer.height * selectedLayer.scale;

    const limitX = (drawnW / 2) / sX;
    const limitY = (drawnH / 2) / sY;

    let naturalW = 1000;
    let naturalH = 619;
    if (dielineImgRef.current && dielineImgRef.current.complete) {
      naturalW = dielineImgRef.current.naturalWidth || 1000;
      naturalH = dielineImgRef.current.naturalHeight || 619;
    }

    updatedPos.x = Math.max(-limitX, Math.min(naturalW + limitX, updatedPos.x));
    updatedPos.y = Math.max(-limitY, Math.min(naturalH + limitY, updatedPos.y));

    setLayers(prev => prev.map(l => l.id === selectedLayer.id ? { ...l, pos: updatedPos } : l));
    setSelectedLayer(prev => prev ? { ...prev, pos: updatedPos } : null);
  };

  const handleCanvasMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Logo Scale and Rotation adjustment handlers
  const handleScaleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLayer) return;
    const scale = parseFloat(e.target.value);
    setLayers(prev => prev.map(l => l.id === selectedLayer.id ? { ...l, scale } : l));
    setSelectedLayer(prev => prev ? { ...prev, scale } : null);
  };

  const handleRotationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedLayer) return;
    const rotation = parseFloat(e.target.value);
    setLayers(prev => prev.map(l => l.id === selectedLayer.id ? { ...l, rotation } : l));
    setSelectedLayer(prev => prev ? { ...prev, rotation } : null);
  };

  // Upload custom graphic artwork layer
  // --- Drag and Drop File Upload for 3D Viewport ---
  const [isViewportDragging, setIsViewportDragging] = useState(false);

  const handleViewportDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsViewportDragging(true);
  };
  const handleViewportDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsViewportDragging(false);
  };
  const handleViewportDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsViewportDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const fakeEvent = { target: { files: e.dataTransfer.files } } as unknown as React.ChangeEvent<HTMLInputElement>;
        handleFileUpload(fakeEvent);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const newLayer: Layer = {
          id: Date.now().toString(),
          img,
          name: file.name.length > 22 ? file.name.substring(0, 20) + '...' : file.name,
          pos: {
            x: Math.round((dielineImgRef.current?.naturalWidth || 1000) / 2),
            y: Math.round((dielineImgRef.current?.naturalHeight || 619) / 2)
          },
          scale: 0.5,
          rotation: 0.0,
          width: img.width,
          height: img.height
        };
        setLayers(prev => [...prev, newLayer]);
        setSelectedLayer(newLayer);
      };
    };
    reader.readAsDataURL(file);
  };

  const deleteSelectedLayer = () => {
    if (!selectedLayer) return;
    const index = layers.findIndex(l => l.id === selectedLayer.id);
    if (index !== -1) {
      const updatedLayers = layers.filter(l => l.id !== selectedLayer.id);
      setLayers(updatedLayers);
      setSelectedLayer(updatedLayers[updatedLayers.length - 1] || null);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubmittingEmail(true);

    // Simulate network submission
    await new Promise(resolve => setTimeout(resolve, 600));

    const activeShape = shapes.find(s => String(s.id) === String(selectedShapeId));

    if (modelRef.current) {
      try {
        // Temporarily bypass watermark drawing for export texture
        exportingRef.current = true;
        updateEditor();

        const exporter = new GLTFExporter();
        exporter.parse(
          modelRef.current,
          (gltf) => {
            // Restore watermark drawing on UI canvas
            exportingRef.current = false;
            updateEditor();

            const blob = new Blob([gltf as ArrayBuffer], { type: 'model/gltf-binary' });
            const downloadUrl = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = activeShape ? `${activeShape.id}-custom.glb` : 'custom-design.glb';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(downloadUrl);

            setIsSubmittingEmail(false);
            setEmailSubmitted(true);
          },
          (error) => {
            console.error('Error exporting custom GLTF:', error);
            exportingRef.current = false;
            updateEditor();
            fallbackDownload(activeShape);
          },
          { binary: true }
        );
      } catch (err) {
        console.error('GLTFExporter parsing failed, falling back:', err);
        exportingRef.current = false;
        updateEditor();
        fallbackDownload(activeShape);
      }
    } else {
      fallbackDownload(activeShape);
    }
  };

  const fallbackDownload = (activeShape: Shape | undefined) => {
    const rawGlbPath = activeShape ? activeShape.glb_file : '/model.glb';
    const isRemote = rawGlbPath.startsWith('http') || rawGlbPath.startsWith('//');
    const downloadUrl = isRemote
      ? '/api/proxy?url=' + encodeURIComponent(rawGlbPath)
      : rawGlbPath;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = activeShape ? `${activeShape.id}.glb` : 'default-model.glb';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmittingEmail(false);
    setEmailSubmitted(true);
  };

  const saveDesign = async () => {
    setIsSavingDesign(true);
    try {
      // Serialize layers (convert Image objects back to base64 or path string URLs)
      const serializedLayers = layers.map(layer => ({
        id: layer.id,
        name: layer.name,
        pos: layer.pos,
        scale: layer.scale,
        rotation: layer.rotation,
        width: layer.width,
        height: layer.height,
        imgSrc: layer.img.src
      }));

      const response = await fetch('/api/save-design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          shapeId: selectedShapeId,
          width,
          height,
          depth,
          unit,
          layers: serializedLayers
        })
      });

      const data = await response.json();
      if (data.success) {
        setDesignCode(data.code);
        setIsSaveModalOpen(true);
      } else {
        alert('Failed to save design: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Error saving design:', err);
      alert('Error connecting to backend API.');
    } finally {
      setIsSavingDesign(false);
    }
  };

  const createCustomLink = async () => {
    if (!customSlug.trim()) {
      setCustomLinkError('請輸入網址路徑 (Slug)');
      return;
    }
    if (!companyName.trim()) {
      setCustomLinkError('請輸入公司/品牌名稱');
      return;
    }
    
    setIsCreatingCustomLink(true);
    setCustomLinkError('');
    
    try {
      const serializedLayers = layers.map(layer => {
        // Safe check for URL format
        let rawSrc = layer.img.src;
        if (rawSrc.includes('/api/proxy?url=')) {
          try {
            rawSrc = decodeURIComponent(rawSrc.split('/api/proxy?url=')[1]);
          } catch (_) {}
        }
        return {
          id: layer.id,
          name: layer.name,
          imgSrc: rawSrc,
          pos: layer.pos,
          scale: layer.scale,
          rotation: layer.rotation,
          width: layer.width,
          height: layer.height
        };
      });

      const designPayload = {
        shapeId: selectedShapeId || '',
        width,
        height,
        depth,
        unit,
        layers: serializedLayers
      };

      const response = await fetch('/api/save-custom-studio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug: customSlug.trim(),
          companyName: companyName.trim(),
          designData: designPayload
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setCustomLinkSuccess(true);
        const domain = window.location.hostname.includes('pouch.eco') || window.location.hostname.includes('localhost')
          ? `${window.location.protocol}//${window.location.host}`
          : 'https://pouch.eco';
        setCreatedCustomUrl(`${domain}/${data.slug}`);
      } else {
        setCustomLinkError(data.error || '無法建立專屬連結，請稍後再試。');
      }
    } catch (err: any) {
      console.error('Error creating custom link:', err);
      setCustomLinkError('連線錯誤，請確認網路狀態。');
    } finally {
      setIsCreatingCustomLink(false);
    }
  };

  // Layers ordering Up / Down
  const moveLayerUp = (id: string) => {
    const idx = layers.findIndex(l => l.id === id);
    if (idx !== -1 && idx < layers.length - 1) {
      const updated = [...layers];
      const temp = updated[idx];
      updated[idx] = updated[idx + 1];
      updated[idx + 1] = temp;
      setLayers(updated);
    }
  };

  const moveLayerDown = (id: string) => {
    const idx = layers.findIndex(l => l.id === id);
    if (idx !== -1 && idx > 0) {
      const updated = [...layers];
      const temp = updated[idx];
      updated[idx] = updated[idx - 1];
      updated[idx - 1] = temp;
      setLayers(updated);
    }
  };

  // Materials adjusting handlers
  const handleMaterialSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetMatName = e.target.value;
    // Find material values
    let currentR = 0.5;
    let currentM = 0.1;
    materialsRef.current.forEach((mesh) => {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach(mat => {
        const name = mat.name || `Material #${(mat as any).id}`;
        if (targetMatName === 'all' || name === targetMatName) {
          if ('roughness' in mat) currentR = (mat as any).roughness;
          if ('metalness' in mat) currentM = (mat as any).metalness;
        }
      });
    });
    setRoughness(currentR);
    setMetalness(currentM);
  };

  const handleRoughnessInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setRoughness(val);
    const targetMatName = (document.getElementById('material-select') as HTMLSelectElement)?.value || 'all';

    materialsRef.current.forEach((mesh) => {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach(mat => {
        const name = mat.name || `Material #${(mat as any).id}`;
        if (targetMatName === 'all' || name === targetMatName) {
          if ('roughness' in mat) {
            (mat as any).roughness = val;
            mat.needsUpdate = true;
          }
        }
      });
    });
  };

  const handleMetalnessInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMetalness(val);
    const targetMatName = (document.getElementById('material-select') as HTMLSelectElement)?.value || 'all';

    materialsRef.current.forEach((mesh) => {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach(mat => {
        const name = mat.name || `Material #${(mat as any).id}`;
        if (targetMatName === 'all' || name === targetMatName) {
          if ('metalness' in mat) {
            (mat as any).metalness = val;
            mat.needsUpdate = true;
          }
        }
      });
    });
  };

  // Unit conversions
  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isInch = e.target.value === 'inch';
    setUnit(e.target.value);

    if (isInch) {
      setWidth(w => parseFloat((w / 25.4).toFixed(2)));
      setHeight(h => parseFloat((h / 25.4).toFixed(2)));
      setDepth(d => parseFloat((d / 25.4).toFixed(2)));
    } else {
      setWidth(w => Math.round(w * 25.4));
      setHeight(h => Math.round(h * 25.4));
      setDepth(d => parseFloat((d * 25.4).toFixed(1)));
    }
  };

  const exportScreenshot = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    const dataURL = rendererRef.current.domElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'achieve-pack-3d-model.png';
    link.href = dataURL;
    link.click();
  };

  const resetAllValues = () => {
    setUnit('inch');
    setWidth(6.69);
    setHeight(8.27);
    setDepth(1.43);
    setRoughness(0.5);
    setMetalness(0.1);
    setShowDieline(true);
    setSelectedShapeId('');

    if (logoImgRef.current) {
      const defaultLayer: Layer = {
        id: 'default-ap-logo',
        img: logoImgRef.current,
        name: 'AP Logo (默認)',
        pos: { x: 500, y: 309 },
        scale: 0.5,
        rotation: 0.0,
        width: logoImgRef.current.width,
        height: logoImgRef.current.height
      };
      setLayers([defaultLayer]);
      setSelectedLayer(defaultLayer);
    }

    // Reload default model
    setIsLoading(true);
    setLoadingText('正在重置模型...');
    if (sceneRef.current && modelRef.current) {
      sceneRef.current.remove(modelRef.current);
      modelRef.current = null;
    }

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);
    const loadId = ++currentLoadIdRef.current;
    loader.load('/model.glb', (gltf) => {
      if (loadId !== currentLoadIdRef.current) {
        gltf.scene.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.geometry.dispose();
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach(m => m && m.dispose());
          }
        });
        return;
      }
      const model = gltf.scene;
      modelRef.current = model;

      originalBoxRef.current.setFromObject(model);
      originalBoxRef.current.getSize(originalSizeRef.current);

      let size = originalSizeRef.current;
      let center = originalBoxRef.current.getCenter(new THREE.Vector3());

      if (size.x < 2.0 && size.y < 2.0) {
        model.scale.set(1000, 1000, 1000);
        scaleFactorRef.current = 1000;
        originalBoxRef.current.setFromObject(model);
        originalBoxRef.current.getSize(originalSizeRef.current);
        size = originalSizeRef.current;
        center = originalBoxRef.current.getCenter(new THREE.Vector3());
      } else {
        scaleFactorRef.current = 1;
      }

      model.position.x = -center.x;
      model.position.z = -center.z;
      model.position.y = -originalBoxRef.current.min.y;

      model.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          if (node.material) {
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach(mat => {
              mat.side = THREE.DoubleSide;
              mat.map = canvasTextureRef.current;
              if ('normalMap' in mat) mat.normalMap = null;
              if ('bumpMap' in mat) mat.bumpMap = null;
              if ('roughnessMap' in mat) mat.roughnessMap = null;
              if ('metalnessMap' in mat) mat.metalnessMap = null;
              if ('aoMap' in mat) mat.aoMap = null;
              if ('emissiveMap' in mat) mat.emissiveMap = null;
              if ('lightMap' in mat) mat.lightMap = null;
              mat.needsUpdate = true;
            });
          }
        }
      });

      if (sceneRef.current) sceneRef.current.add(model);
      setIsLoading(false);
      updateModelScale();
    });
  };

  if (viewMode === 'catalog') {
    return (
      <div className="flex flex-col min-h-screen w-screen bg-[#08090c] text-[#f3f4f6] font-sans antialiased overflow-y-auto">
        <SiteHeader />
        <style>{`
          :root {
            --bg-color: #08090c;
            --panel-bg: rgba(16, 20, 28, 0.7);
            --panel-border: rgba(255, 255, 255, 0.08);
            --accent-color: #64ffda;
            --accent-glow: rgba(100, 255, 218, 0.15);
            --text-color: #f3f4f6;
            --text-muted: #9ca3af;
            --input-bg: rgba(0, 0, 0, 0.4);
            --border-radius: 12px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: var(--panel-border);
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: var(--text-muted);
          }
        `}</style>
        <div className="flex-1 px-4 py-8 md:px-12 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#f3f4f6]">3D Model Store</h1>
              <p className="text-[#9ca3af] mt-2 text-sm">Select a base packaging model to start editing in 3D.</p>
            </div>
            <div className="flex flex-wrap items-center bg-[rgba(16,20,28,0.7)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1 gap-1">
              {[
                { id: 'pouch', label: 'Pouch', icon: <Layers className="w-4 h-4" /> },
                { id: 'spouted pouch', label: 'Spouted Pouch', icon: <Droplet className="w-4 h-4" /> },
                { id: 'box', label: 'Box', icon: <Box className="w-4 h-4" /> },
                { id: 'bottle', label: 'Bottle', icon: <Database className="w-4 h-4" /> },
                { id: 'tray', label: 'Tray', icon: <Grid3X3 className="w-4 h-4" /> },
                { id: 'cup', label: 'Cup', icon: <Coffee className="w-4 h-4" /> },
                { id: 'bag', label: 'Bag', icon: <ShoppingBag className="w-4 h-4" /> },
                { id: 't-shirt', label: 'T-shirt', icon: <Shirt className="w-4 h-4" /> },
                { id: 'label', label: 'Label', icon: <Tag className="w-4 h-4" /> },
                { id: 'other', label: 'Other', icon: <Grid className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeCategory === tab.id
                      ? 'bg-[#64ffda] text-[#0a192f] shadow-[0_0_12px_rgba(100,255,218,0.25)]'
                      : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {filteredShapes.length === 0 ? (
             <div className="flex flex-col items-center justify-center py-20 text-neutral-500">
               <Grid className="w-12 h-12 mb-4 opacity-50" />
               <p>No models found in this category.</p>
             </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredShapes.map(shape => {
                const thumbnailSrc = `/thumbnails/${shape.id}.png?v=2`;
                const dielineSrc = shape.dieline_image.startsWith('/') ? shape.dieline_image : `/api/proxy?url=${encodeURIComponent(shape.dieline_image)}`;

                return (
                  <div
                    key={shape.id}
                    onClick={() => {
                      setSelectedShapeId(shape.id);
                      setViewMode('editor');
                      setIsLoading(true);
                      const url = new URL(window.location.href);
                      url.searchParams.set('shape', shape.id);
                      window.history.pushState({}, '', url.toString());
                      setTimeout(() => loadShape(shape), 100);
                    }}
                    className="group relative bg-[rgba(16,20,28,0.4)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden cursor-pointer hover:border-[#64ffda] hover:-translate-y-1 transition-all duration-300 flex flex-col h-[280px]"
                  >
                    <div className="flex-1 bg-white relative p-6 flex items-center justify-center overflow-hidden">
                       <img 
                         src={thumbnailSrc} 
                         alt={shape.name}
                         className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                         onError={(e) => {
                           (e.target as HTMLImageElement).src = dielineSrc;
                         }}
                       />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                         <span className="bg-[#64ffda] text-[#0a192f] px-5 py-2.5 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(100,255,218,0.4)] flex items-center gap-2">
                            Select & Edit
                         </span>
                       </div>
                    </div>
                    <div className="p-4 bg-[rgba(16,20,28,0.8)] border-t border-[rgba(255,255,255,0.05)] flex-shrink-0">
                      <h3 className="font-semibold text-[#f3f4f6] truncate text-sm" title={shape.name}>{shape.name || `Shape ${shape.id}`}</h3>
                      <p className="text-[11px] text-[#9ca3af] mt-1 font-mono">ID: {shape.id}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#08090c] text-[#f3f4f6] font-sans antialiased">
      {/* Site Navigation Header for SEO + user navigation */}
      <SiteHeader />
      {/* CSS Scoped Tokens */}
      <style>{`
        :root {
          --bg-color: #08090c;
          --panel-bg: rgba(16, 20, 28, 0.7);
          --panel-border: rgba(255, 255, 255, 0.08);
          --accent-color: #64ffda;
          --accent-glow: rgba(100, 255, 218, 0.15);
          --text-color: #f3f4f6;
          --text-muted: #9ca3af;
          --input-bg: rgba(0, 0, 0, 0.4);
          --border-radius: 12px;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--panel-border);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--text-muted);
        }
      `}</style>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#08090c] z-50 flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-4 border-t-[#64ffda] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="text-[15px] font-medium mt-[15px] text-[#f3f4f6]">{loadingText}</div>
        </div>
      )}

      {/* ================================================================ */}
      {/* Main Workspace — 3-column on desktop, tab-switched on mobile      */}
      {/* ================================================================ */}
      <div className="flex flex-col flex-grow overflow-hidden">

        {/* DESKTOP: 3-column side-by-side layout (lg+) */}
        <div className="hidden lg:flex flex-row flex-grow overflow-hidden">
        
        {/* 1. Left Sidebar: Control Panel */}
        <div className="w-[340px] flex-shrink-0 bg-[rgba(16,20,28,0.4)] border-r border-[rgba(255,255,255,0.08)] p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          
          <button 
            onClick={() => {
              setViewMode('catalog');
              const url = new URL(window.location.href);
              url.searchParams.delete('shape');
              window.history.pushState({}, '', url.toString());
            }}
            className="flex items-center gap-2 text-xs font-semibold text-[#9ca3af] hover:text-[#64ffda] transition-colors self-start border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.4)] rounded-lg px-3 py-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Catalog
          </button>

          <div>
            <h1 className="text-lg font-bold text-[#f3f4f6]">3D Studio</h1>
            <p className="text-xs text-[#9ca3af] mt-1">Configure physical pouch sizes and material specs.</p>
          </div>

          {/* Model Dimensions */}
          <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5">
            <div className="text-[13px] font-semibold text-[#64ffda] tracking-wide uppercase">Dimensions</div>
            
            {/* Unit Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#9ca3af]">Unit</label>
              <select 
                id="unit-select" 
                value={unit} 
                onChange={handleUnitChange}
                className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3 py-2 text-[13px] outline-none cursor-pointer"
              >
                <option value="inch">Inches (in)</option>
                <option value="mm">Millimeters (mm)</option>
              </select>
            </div>

            {/* Inputs grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#9ca3af]">Width (L)</label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(parseFloat(e.target.value) || 0)} 
                  className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-2.5 py-2 text-[13px] text-center outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#9ca3af]">Height (H)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(parseFloat(e.target.value) || 0)} 
                  className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-2.5 py-2 text-[13px] text-center outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#9ca3af]">Depth (W)</label>
                <input 
                  type="number" 
                  value={depth} 
                  onChange={(e) => setDepth(parseFloat(e.target.value) || 0)} 
                  className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-2.5 py-2 text-[13px] text-center outline-none"
                />
              </div>
            </div>
          </div>

          {/* Graphics Uploader */}
          <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5">
            <div className="text-[13px] font-semibold text-[#64ffda] tracking-wide uppercase">Artwork Upload</div>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border border-dashed border-[rgba(255,255,255,0.15)] rounded-xl p-5 text-center cursor-pointer bg-[rgba(255,255,255,0.01)] hover:bg-[rgba(100,255,218,0.03)] hover:border-[#64ffda] transition-all duration-300 flex flex-col items-center justify-center gap-2"
            >
              <svg className="w-8 h-8 fill-[#9ca3af]" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
              </svg>
              <span className="text-xs text-[#9ca3af]">Click or Drag custom logo/artwork here</span>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept="image/*" 
                className="hidden" 
              />
            </div>
          </div>

          {/* Animation Specs */}
          {hasAnimation && (
            <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5">
              <div className="text-[13px] font-semibold text-[#64ffda] tracking-wide uppercase">Animation (Folding)</div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (!actionRef.current) return;
                    if (isAutoPlay) {
                      actionRef.current.paused = true;
                      setIsAutoPlay(false);
                    } else {
                      actionRef.current.paused = false;
                      actionRef.current.play();
                      setIsAutoPlay(true);
                    }
                  }}
                  className="px-3 py-1.5 bg-[rgba(100,255,218,0.1)] border border-[#64ffda] text-[#64ffda] text-xs font-bold rounded-lg hover:bg-[rgba(100,255,218,0.2)] transition-colors"
                >
                  {isAutoPlay ? 'Pause' : 'Auto Play'}
                </button>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex justify-between w-full px-1">
                    <span className="text-[10px] text-neutral-400 font-medium">Layflat</span>
                    <span className="text-[10px] text-neutral-400 font-medium">Formed</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={animationProgress}
                    onChange={(e) => {
                      if (!actionRef.current || !mixerRef.current) return;
                      const val = parseInt(e.target.value);
                      setAnimationProgress(val);
                      setIsAutoPlay(false);
                      actionRef.current.paused = true;
                      
                      const clip = actionRef.current.getClip();
                      const time = clip.duration * (val / 100);
                      actionRef.current.time = time;
                      mixerRef.current.setTime(time);
                    }}
                    className="w-full accent-[#64ffda] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Material Specs */}
          <div className="flex flex-col gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5">
            <div className="text-[13px] font-semibold text-[#64ffda] tracking-wide uppercase">Material Settings</div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[#9ca3af]">Select Component</label>
              <select 
                id="material-select" 
                onChange={handleMaterialSelectChange}
                className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3 py-2 text-[13px] outline-none"
              >
                <option value="all">Apply to All Parts</option>
              </select>
            </div>

            {/* Roughness */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-[#9ca3af]">Roughness</span>
                <span className="text-[#64ffda] font-medium">{roughness.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={roughness}
                onChange={handleRoughnessInput}
                className="w-full accent-[#64ffda]" 
              />
            </div>

            {/* Metalness */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-[#9ca3af]">Metalness</span>
                <span className="text-[#64ffda] font-medium">{metalness.toFixed(2)}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={metalness}
                onChange={handleMetalnessInput}
                className="w-full accent-[#64ffda]" 
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-2">
            <button 
              onClick={saveDesign}
              disabled={isSavingDesign}
              className="w-full bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] disabled:opacity-50 font-bold text-[13px] py-3 px-4 rounded-lg shadow-lg hover:shadow-[#64ffda]/25 flex items-center justify-center gap-1.5 transition-all duration-300 uppercase tracking-wider"
            >
              {isSavingDesign ? (
                <>
                  <div className="w-4 h-4 border-2 border-t-[#08090c] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                  Saving Workspace...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
                  </svg>
                  Save Design & Share
                </>
              )}
            </button>

            <button 
              onClick={resetAllValues}
              className="w-full border border-[rgba(255,255,255,0.15)] hover:border-[#f3f4f6] text-[#9ca3af] hover:text-[#f3f4f6] font-semibold text-[13px] py-2.5 px-4 rounded-lg transition-all duration-300"
            >
              Reset Canvas
            </button>
          </div>
        </div>

        {/* 2. Middle Column: 2D Dieline Editor */}
        <div className="w-[520px] flex-shrink-0 flex flex-col bg-[rgba(8,9,12,0.6)] p-5 gap-4 overflow-hidden border-r border-[rgba(255,255,255,0.08)]">
          <div>
            <h2 className="text-base font-bold text-[#f3f4f6]">2D Dieline Editor</h2>
            <p className="text-xs text-[#9ca3af] mt-0.5">Drag to place artwork, adjust scaling or layer ordering.</p>
          </div>

          <div className="flex-grow border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.5)] rounded-xl relative overflow-hidden flex items-center justify-center">
            <canvas 
              ref={editorCanvasRef} 
              width={1000} 
              height={619}
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={handleCanvasMouseUp}
              onMouseLeave={handleCanvasMouseUp}
              className="max-w-full max-h-full cursor-move object-contain shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-4 bg-[rgba(16,20,28,0.7)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5">
            <div className="text-[13px] font-semibold text-[#64ffda] tracking-wide uppercase">Layer Management</div>
            
            <div className="text-xs text-[#9ca3af] flex gap-1">
              Active Selection: 
              <span id="selected-layer-name" className="text-[#64ffda] font-semibold">
                {selectedLayer ? selectedLayer.name : 'None'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Scale Slider */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#9ca3af]">Scale</span>
                  <span className="text-[#64ffda]">{selectedLayer ? selectedLayer.scale.toFixed(2) : '1.0'}</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="3" 
                  step="0.02" 
                  value={selectedLayer ? selectedLayer.scale : 1}
                  disabled={!selectedLayer}
                  onChange={handleScaleInput}
                  className="w-full accent-[#64ffda] disabled:opacity-30" 
                />
              </div>

              {/* Rotation Slider */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[#9ca3af]">Rotation</span>
                  <span className="text-[#64ffda]">{selectedLayer ? `${selectedLayer.rotation}°` : '0°'}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="360" 
                  step="1" 
                  value={selectedLayer ? selectedLayer.rotation : 0}
                  disabled={!selectedLayer}
                  onChange={handleRotationInput}
                  className="w-full accent-[#64ffda] disabled:opacity-30" 
                />
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <button 
                onClick={deleteSelectedLayer}
                disabled={!selectedLayer}
                className="border border-[#ef4444] hover:bg-[#ef4444]/10 disabled:opacity-20 text-[#ef4444] font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Delete Layer
              </button>

              <div className="flex-grow flex flex-col gap-1.5">
                <div className="text-[10px] text-[#9ca3af] font-semibold uppercase">Layers Stack</div>
                <div 
                  id="layers-container" 
                  className="max-h-[85px] overflow-y-auto bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg p-2 flex flex-col gap-1 custom-scrollbar"
                >
                  {layers.length === 0 ? (
                    <div className="text-[11px] text-[#9ca3af] text-center py-2">No layers uploaded</div>
                  ) : (
                    layers.map((l) => (
                      <div 
                        key={l.id}
                        className={`flex justify-between items-center px-2 py-1.5 rounded text-[11px] cursor-pointer transition-all duration-200 ${l.id === selectedLayer?.id ? 'bg-[rgba(100,255,218,0.12)] border border-[#64ffda]' : 'bg-[rgba(255,255,255,0.02)] border border-transparent'}`}
                        onClick={() => {
                          setSelectedLayer(l);
                          setRoughness(roughness);
                        }}
                      >
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">{l.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="cursor-pointer text-[#9ca3af] hover:text-[#64ffda]" onClick={(e) => { e.stopPropagation(); moveLayerUp(l.id); }}>▲</span>
                          <span className="cursor-pointer text-[#9ca3af] hover:text-[#64ffda]" onClick={(e) => { e.stopPropagation(); moveLayerDown(l.id); }}>▼</span>
                          <span className="cursor-pointer text-[#ef4444] font-bold text-xs" onClick={(e) => { e.stopPropagation(); setSelectedLayer(l); deleteSelectedLayer(); }}>&times;</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="flex flex-col gap-2 mt-1">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="show-dieline-in-3d" 
                  checked={showDieline}
                  onChange={(e) => setShowDieline(e.target.checked)}
                  className="accent-[#64ffda] cursor-pointer"
                />
                <label htmlFor="show-dieline-in-3d" className="text-xs text-[#9ca3af] cursor-pointer select-none">
                  Render 2D dielines on the 3D model surface
                </label>
              </div>

              {is3dSupported && (
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="show-reference-can" 
                    checked={showReferenceCan}
                    onChange={(e) => setShowReferenceCan(e.target.checked)}
                    className="accent-[#64ffda] cursor-pointer"
                  />
                  <div className="flex flex-col gap-0.5">
                    <label htmlFor="show-reference-can" className="text-xs text-[#9ca3af] cursor-pointer select-none">
                      Show 355ml Reference Can (易開罐比例對比)
                    </label>
                    <span className="text-[10px] text-[#8e94a0]">
                      Can ref: 2.6" x 4.8" (66mm x 122mm)
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Right Area: 3D Studio Previewer */}
        <div 
          id="viewport-panel" 
          className={`flex-grow relative flex flex-col overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#cbd5e1] ${isViewportDragging ? 'ring-4 ring-inset ring-[#64ffda]' : ''}`}
          onDragOver={handleViewportDragOver}
          onDragLeave={handleViewportDragLeave}
          onDrop={handleViewportDrop}
        >
          {isViewportDragging && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
              <div className="bg-[#10141c] text-white px-6 py-4 rounded-xl font-medium border border-[#64ffda]/30 flex items-center gap-3">
                <svg className="w-6 h-6 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                Drop image here to apply to 3D model
              </div>
            </div>
          )}
          <div ref={containerRef} className={`flex-grow w-full h-full relative ${is3dSupported ? '' : 'hidden'}`} />
          {!is3dSupported && (
            <div className="flex-grow w-full h-full flex flex-col items-center justify-center bg-[#0d0e12] text-center p-8 border border-[rgba(255,255,255,0.05)]">
              <div className="w-16 h-16 rounded-full bg-[#161b26] flex items-center justify-center border border-[rgba(100,255,218,0.15)] shadow-[0_0_20px_rgba(100,255,218,0.05)] mb-4">
                <Box className="w-8 h-8 text-[#64ffda]" />
              </div>
              <h3 className="text-[#f3f4f6] font-bold text-lg mb-2">3D Preview Unloaded</h3>
              <p className="text-xs text-[#9ca3af] max-w-sm leading-relaxed mb-6">
                This is a 2D dieline-only template box. The 3D viewport has been unloaded. Please use the 2D Editor to customize your artwork, and then download.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(100,255,218,0.05)] border border-[#64ffda]/25 text-[#64ffda] rounded-lg text-[11px] font-mono">
                <span>Dieline Mode Active</span>
              </div>
            </div>
          )}
          {/* Status Overlay info */}
          <div id="preview-info" className="absolute bottom-4 left-4 right-4 bg-[rgba(16,20,28,0.85)] border border-[rgba(255,255,255,0.08)] rounded-xl py-2.5 px-4 text-xs flex justify-between shadow-2xl backdrop-blur-md">
            <span>Shape: <strong className="text-[#64ffda]">{modelName}</strong></span>
            <span>Active: <strong className="text-[#64ffda]">{selectedLayer ? selectedLayer.name : 'None'}</strong></span>
          </div>
        </div>
        {/* end 3. Right Area */}
        </div>
        {/* end DESKTOP 3-column */}

        {/* MOBILE: single panel with tab switcher (< lg) */}
        <div className="flex lg:hidden flex-col flex-grow overflow-hidden relative">

          {/* MOBILE PANEL: 3D View - always mounted, shown/hidden via display */}
          <div
            className="flex-grow relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#cbd5e1]"
            style={{ display: mobileTab === '3d' ? 'flex' : 'none', flexDirection: 'column' }}
          >
            {/* Three.js mounts here on mobile - containerRef is always rendered in desktop, but on mobile-only viewport it needs to live here */}
            <div className={`flex-grow w-full h-full relative ${is3dSupported ? '' : 'hidden'}`} id="mobile-3d-container" />
            {!is3dSupported && (
              <div className="flex-grow w-full h-full flex flex-col items-center justify-center bg-[#0d0e12] text-center p-8 border border-[rgba(255,255,255,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#161b26] flex items-center justify-center border border-[rgba(100,255,218,0.15)] shadow-[0_0_20px_rgba(100,255,218,0.05)] mb-3">
                  <Box className="w-6 h-6 text-[#64ffda]" />
                </div>
                <h3 className="text-[#f3f4f6] font-bold text-base mb-1.5">3D Preview Unloaded</h3>
                <p className="text-[11px] text-[#9ca3af] max-w-xs leading-relaxed mb-4">
                  This is a 2D dieline-only template box. Please use the 2D Editor to customize your artwork.
                </p>
              </div>
            )}
            {/* Status bar */}
            <div className="absolute bottom-2 left-2 right-2 bg-[rgba(16,20,28,0.88)] border border-[rgba(255,255,255,0.08)] rounded-xl py-2 px-3 text-[11px] flex justify-between backdrop-blur-md">
              <span>Shape: <strong className="text-[#64ffda]">{modelName}</strong></span>
              <span className="text-[#9ca3af]">{is3dSupported ? 'Pinch to zoom · Drag to rotate' : 'Dieline Mode Active'}</span>
            </div>
          </div>

          {/* MOBILE PANEL: 2D Dieline Editor */}
          {mobileTab === '2d' && (
            <div className="flex-grow flex flex-col bg-[rgba(8,9,12,0.95)] p-3 gap-3 overflow-y-auto">
              <div>
                <h2 className="text-sm font-bold text-[#f3f4f6]">2D Dieline Editor</h2>
                <p className="text-[10px] text-[#9ca3af] mt-0.5">Tap to select layer · Drag to reposition</p>
              </div>
              <div className="border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.5)] rounded-xl overflow-hidden flex items-center justify-center">
                <canvas
                  ref={editorCanvasRef}
                  width={1000}
                  height={619}
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  onMouseLeave={handleCanvasMouseUp}
                  onTouchStart={(e) => {
                    const touch = e.touches[0];
                    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
                    handleCanvasMouseDown({ clientX: touch.clientX, clientY: touch.clientY, currentTarget: e.currentTarget, preventDefault: () => e.preventDefault() } as any);
                  }}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    handleCanvasMouseMove({ clientX: touch.clientX, clientY: touch.clientY, currentTarget: e.currentTarget } as any);
                  }}
                  onTouchEnd={() => handleCanvasMouseUp()}
                  className="max-w-full max-h-full object-contain w-full"
                />
              </div>
              {/* Upload artwork */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[rgba(100,255,218,0.25)] rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#64ffda]/50 transition-all"
              >
                <svg className="w-6 h-6 text-[#64ffda] fill-current" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
                <span className="text-xs text-[#9ca3af]">Tap to upload artwork / logo</span>
                <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
              </div>
              {/* Layer controls */}
              {selectedLayer && (
                <div className="bg-[rgba(16,20,28,0.7)] border border-[rgba(255,255,255,0.08)] rounded-xl p-3 flex flex-col gap-3">
                  <div className="text-[11px] font-semibold text-[#64ffda] uppercase">Selected: {selectedLayer.name}</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[10px]"><span className="text-[#9ca3af]">Scale</span><span className="text-[#64ffda]">{selectedLayer.scale.toFixed(2)}</span></div>
                      <input type="range" min="0.1" max="3" step="0.02" value={selectedLayer.scale} onChange={handleScaleInput} className="w-full accent-[#64ffda]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[10px]"><span className="text-[#9ca3af]">Rotation</span><span className="text-[#64ffda]">{selectedLayer.rotation}°</span></div>
                      <input type="range" min="0" max="360" step="1" value={selectedLayer.rotation} onChange={handleRotationInput} className="w-full accent-[#64ffda]" />
                    </div>
                  </div>
                  <button onClick={deleteSelectedLayer} className="text-xs border border-[#ef4444]/50 text-[#ef4444] rounded-lg px-3 py-1.5 hover:bg-[#ef4444]/10 transition-all">Delete Layer</button>
                </div>
              )}
            </div>
          )}

          {/* MOBILE PANEL: Settings */}
          {mobileTab === 'settings' && (
            <div className="flex-grow bg-[rgba(16,20,28,0.95)] p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
              
              <button 
                onClick={() => {
                  setViewMode('catalog');
                  const url = new URL(window.location.href);
                  url.searchParams.delete('shape');
                  window.history.pushState({}, '', url.toString());
                }}
                className="w-full flex items-center justify-center gap-2 text-[13px] font-semibold text-[#f3f4f6] bg-[rgba(255,255,255,0.05)] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all border border-[rgba(255,255,255,0.1)] rounded-lg py-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Catalog
              </button>

              <h2 className="text-sm font-bold text-[#f3f4f6]">Dimensions & Settings</h2>

              {/* Dimensions */}
              <div className="flex flex-col gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div className="text-[11px] font-semibold text-[#64ffda] tracking-wide uppercase">Dimensions</div>
                <select value={unit} onChange={handleUnitChange} className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3 py-2 text-sm outline-none">
                  <option value="inch">Inches (in)</option>
                  <option value="mm">Millimeters (mm)</option>
                </select>
                <div className="grid grid-cols-3 gap-2">
                  {[{ label: 'Width', value: width, setter: (v: number) => { setWidth(v); updateModelScale(); } },
                    { label: 'Height', value: height, setter: (v: number) => { setHeight(v); updateModelScale(); } },
                    { label: 'Depth', value: depth, setter: (v: number) => setDepth(v) }].map(dim => (
                    <div key={dim.label} className="flex flex-col gap-1">
                      <label className="text-[10px] text-[#9ca3af]">{dim.label}</label>
                      <input
                        type="number"
                        value={dim.value}
                        onChange={e => dim.setter(parseFloat(e.target.value) || 0)}
                        className="bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-2 py-1.5 text-sm outline-none text-center w-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="flex flex-col gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div className="text-[11px] font-semibold text-[#64ffda] tracking-wide uppercase">Material</div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs"><span className="text-[#9ca3af]">Roughness</span><span className="text-[#64ffda]">{roughness.toFixed(2)}</span></div>
                  <input type="range" min="0" max="1" step="0.01" value={roughness} onChange={handleRoughnessInput} className="w-full accent-[#64ffda]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs"><span className="text-[#9ca3af]">Metalness</span><span className="text-[#64ffda]">{metalness.toFixed(2)}</span></div>
                  <input type="range" min="0" max="1" step="0.01" value={metalness} onChange={handleMetalnessInput} className="w-full accent-[#64ffda]" />
                </div>
              </div>

              {/* Viewport Reference Can */}
              {is3dSupported && (
                <div className="flex flex-col gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <div className="text-[11px] font-semibold text-[#64ffda] tracking-wide uppercase">Viewport Reference</div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="mobile-show-reference-can" 
                      checked={showReferenceCan}
                      onChange={(e) => setShowReferenceCan(e.target.checked)}
                      className="accent-[#64ffda] cursor-pointer"
                    />
                    <div className="flex flex-col gap-0.5">
                      <label htmlFor="mobile-show-reference-can" className="text-xs text-[#9ca3af] cursor-pointer select-none">
                        Show 355ml Reference Can (易開罐比例對比)
                      </label>
                      <span className="text-[10px] text-[#8e94a0]">
                        Can ref: 2.6" x 4.8" (66mm x 122mm)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col gap-2 mt-auto">
                <button
                  onClick={saveDesign}
                  disabled={isSavingDesign}
                  className="w-full bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] disabled:opacity-50 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  {isSavingDesign ? <><div className="w-4 h-4 border-2 border-t-[#08090c] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"/><span>Saving...</span></> : <><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg><span>Save & Share Design</span></>}
                </button>
                <button onClick={resetAllValues} className="w-full border border-[rgba(255,255,255,0.15)] text-[#9ca3af] font-semibold text-sm py-2.5 rounded-xl transition-all">
                  Reset Canvas
                </button>
              </div>
            </div>
          )}

          {/* MOBILE Bottom Tab Bar */}
          <nav className="flex-shrink-0 bg-[rgba(10,12,18,0.97)] border-t border-[rgba(255,255,255,0.1)] flex items-stretch h-14 safe-b">
            {([
              { id: '3d' as const, label: '3D View', icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7l8-4.32z"/></svg> },
              { id: '2d' as const, label: '2D Editor', icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> },
              { id: 'settings' as const, label: 'Settings', icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> },
            ] as { id: '3d' | '2d' | 'settings'; label: string; icon: React.ReactNode }[]).map(tab => (
              <button
                key={tab.id}
                onClick={() => setMobileTab(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  mobileTab === tab.id
                    ? 'text-[#64ffda] border-t-2 border-[#64ffda] bg-[rgba(100,255,218,0.05)]'
                    : 'text-[#6b7280] border-t-2 border-transparent'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        {/* end MOBILE */}

      {/* Email Modal for Watermark-Free Downloads */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#10141e] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => {
                setIsEmailModalOpen(false);
                setEmailSubmitted(false);
                setEmailInput('');
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!emailSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Download Watermark-Free Model</h3>
                  <p className="text-xs text-neutral-400">
                    Enter your email to download the high-resolution, watermark-free 3D model (<strong>.glb</strong> format) for <strong>{modelName}</strong>.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-neutral-400">Email Address</label>
                  <input 
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3.5 py-2.5 text-sm outline-none focus:border-[#64ffda] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingEmail}
                  className="w-full bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] disabled:opacity-50 font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300"
                >
                  {isSubmittingEmail ? (
                    <span className="w-4 h-4 border-2 border-[#08090c] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Send Download Link'
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white">Request Received!</h3>
                  <p className="text-xs text-neutral-400">
                    The watermark-free 3D model download has started in your browser. We've also sent the download links to <strong>{emailInput}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsEmailModalOpen(false);
                    setEmailSubmitted(false);
                    setEmailInput('');
                  }}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors border border-[rgba(255,255,255,0.08)]"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Save Design Modal */}
      {isSaveModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#10141e] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => {
                setIsSaveModalOpen(false);
                setDesignCode('');
                setCopiedCode(false);
                setCopiedLink(false);
                setCustomSlug('');
                setCompanyName('');
                setCustomLinkError('');
                setCustomLinkSuccess(false);
                setCreatedCustomUrl('');
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Design Saved Successfully!</h3>
                <p className="text-xs text-neutral-400">
                  Your 3D design workspace status has been secured. Share the code or link with your customer.
                </p>
              </div>

              {/* Code Box */}
              <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Share Code</span>
                <span className="text-2xl font-bold tracking-widest text-[#64ffda] select-all font-mono">{designCode}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(designCode);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="text-xs text-[#9ca3af] hover:text-[#64ffda] underline transition-colors"
                >
                  {copiedCode ? 'Code Copied!' : 'Copy Code'}
                </button>
              </div>

              {/* Shareable Link */}
              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400">Direct Share Link</label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    readOnly
                    value={`${window.location.origin}${window.location.pathname}?code=${designCode}`}
                    className="flex-grow bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3 py-2 text-xs outline-none"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?code=${designCode}`);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] font-bold text-xs px-4 py-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    {copiedLink ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              {/* Custom Slug Exclusive Share Link Builder */}
              {customLinkSuccess ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>專屬連結已建立！</span>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      readOnly
                      value={createdCustomUrl}
                      className="flex-grow bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-white px-3 py-2 text-xs outline-none"
                      onClick={(e) => (e.target as HTMLInputElement).select()}
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(createdCustomUrl);
                        setCopiedCustomLink(true);
                        setTimeout(() => setCopiedCustomLink(false), 2000);
                      }}
                      className="bg-emerald-500 text-[#08090c] hover:bg-emerald-400 font-bold text-xs px-4 py-2 rounded-lg transition-colors flex-shrink-0"
                    >
                      {copiedCustomLink ? '已複製!' : '複製連結'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border border-white/5 bg-white/[0.02] rounded-xl p-4 space-y-4">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">✨ 建立專屬分享連結 (pouch.eco/your-brand)</span>
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] text-neutral-400 block">品牌 / 公司名稱</label>
                      <input 
                        type="text"
                        placeholder="例如: ABC Company"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-white px-3 py-2 text-xs outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] text-neutral-400 block">自訂網址路徑</label>
                      <div className="flex items-center bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2">
                        <span className="text-xs text-neutral-500">pouch.eco/</span>
                        <input 
                          type="text"
                          placeholder="abc"
                          value={customSlug}
                          onChange={(e) => setCustomSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, ''))}
                          className="flex-grow bg-transparent text-white text-xs outline-none pl-0.5"
                        />
                      </div>
                    </div>

                    {customLinkError && (
                      <p className="text-[11px] text-rose-400">{customLinkError}</p>
                    )}

                    <button
                      onClick={createCustomLink}
                      disabled={isCreatingCustomLink}
                      className="w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 disabled:bg-neutral-800 disabled:text-neutral-500 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      {isCreatingCustomLink ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                          <span>建立中...</span>
                        </>
                      ) : (
                        <span>建立專屬連結</span>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    setIsSaveModalOpen(false);
                    setDesignCode('');
                    setCopiedCode(false);
                    setCopiedLink(false);
                    setCustomSlug('');
                    setCompanyName('');
                    setCustomLinkError('');
                    setCustomLinkSuccess(false);
                    setCreatedCustomUrl('');
                  }}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors border border-[rgba(255,255,255,0.08)]"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>

      {/* Site Footer for SEO internal linking */}
      <Footer />
    </div>
  );
}
