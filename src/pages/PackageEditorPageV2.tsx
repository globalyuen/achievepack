import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import {
  Shape,
  Layer,
  GizmoMode,
  BackgroundPreset,
  BACKGROUND_PRESETS,
} from '../store/useStudioStoreV2';

// ─── Type helpers ────────────────────────────────────────────────────────────
type SidebarTab = 'structure' | 'design' | 'material';

const CATEGORIES = [
  'pouch', 'spouted pouch', 'box', 'bottle', 'tray', 'cup', 'bag', 't-shirt', 'label',
] as const;

function detectCategoryV2(shape: Shape): string {
  const cat = (shape.category || 'Other').toLowerCase();
  return CATEGORIES.includes(cat as any) ? cat : 'other';
}

// ─── Material Presets ────────────────────────────────────────────────────────
const MATERIAL_PRESETS = [
  { id: 'matte',       label: 'Matte',      roughness: 0.85, metalness: 0.0 },
  { id: 'satin',       label: 'Satin',      roughness: 0.5,  metalness: 0.05 },
  { id: 'glossy',      label: 'Glossy',     roughness: 0.1,  metalness: 0.05 },
  { id: 'foil',        label: 'Metallic Foil', roughness: 0.2, metalness: 0.9 },
  { id: 'kraft',       label: 'Kraft',      roughness: 0.9,  metalness: 0.0 },
  { id: 'eco',         label: 'Eco Natural', roughness: 0.8,  metalness: 0.0 },
];

// ─── Main Component ──────────────────────────────────────────────────────────
const PackageEditorPageV2: React.FC = () => {

  // ── Detect mobile ─────────────────────────────────────────────────────────
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── View / Catalog state ───────────────────────────────────────────────────
  const [viewMode, setViewMode] = useState<'catalog' | 'editor'>('catalog');
  const [studioTab, setStudioTab] = useState<'3d' | '2d'>('3d');
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('structure');

  // ── Catalog / Shape ────────────────────────────────────────────────────────
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState('');
  const [activeCategory, setActiveCategory] = useState('pouch');

  // ── Dimensions ───────────────────────────────────────────────────────────
  const [width, setWidth] = useState(6.69);
  const [height, setHeight] = useState(8.27);
  const [depth, setDepth] = useState(1.43);
  const [unit, setUnit] = useState('inch');

  // ── Design / Layers ───────────────────────────────────────────────────────
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);

  // ── Material ──────────────────────────────────────────────────────────────
  const [roughness, setRoughness] = useState(0.5);
  const [metalness, setMetalness] = useState(0.05);

  // ── Environment ───────────────────────────────────────────────────────────
  const [backgroundPreset, setBackgroundPreset] = useState<BackgroundPreset>('white');
  const [showPodium, setShowPodium] = useState(true);
  const [podiumColor, setPodiumColor] = useState('#ffffff');
  const [backdropColor, setBackdropColor] = useState('#f1f5f9');
  const [shadowOpacity, setShadowOpacity] = useState(0.35);
  const [showDieline, setShowDieline] = useState(true);
  const [showGrid, setShowGrid] = useState(false);
  const [showReferenceCan, setShowReferenceCan] = useState(true);
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false);

  // ── Gizmo ─────────────────────────────────────────────────────────────────
  const [gizmoMode, setGizmoMode] = useState<GizmoMode>('none');

  // ── Loading / Status ──────────────────────────────────────────────────────
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Loading 3D Model...');
  const [is3dSupported, setIs3dSupported] = useState(true);
  const [isViewportDragging, setIsViewportDragging] = useState(false);

  // ── Share / Save modals ───────────────────────────────────────────────────
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isUnsavedModalOpen, setIsUnsavedModalOpen] = useState(false);
  const [unsavedPendingUrl, setUnsavedPendingUrl] = useState<string | null>(null);
  const [designCode, setDesignCode] = useState('');
  const [isSavingDesign, setIsSavingDesign] = useState(false);
  const [customSlug, setCustomSlug] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isCreatingCustomLink, setIsCreatingCustomLink] = useState(false);
  const [customLinkError, setCustomLinkError] = useState('');
  const [customLinkSuccess, setCustomLinkSuccess] = useState(false);
  const [createdCustomUrl, setCreatedCustomUrl] = useState('');
  const [copiedCustomLink, setCopiedCustomLink] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // ── Three.js Refs ─────────────────────────────────────────────────────────
  const containerRef  = useRef<HTMLDivElement>(null);
  const sceneRef      = useRef<THREE.Scene | null>(null);
  const cameraRef     = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef   = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef   = useRef<OrbitControls | null>(null);
  const transformRef  = useRef<TransformControls | null>(null);
  const modelRef      = useRef<THREE.Group | null>(null);
  const canRef        = useRef<THREE.Group | null>(null);
  const floorRef      = useRef<THREE.Mesh | null>(null);
  const gridRef       = useRef<THREE.GridHelper | null>(null);
  const dirLight1Ref  = useRef<THREE.DirectionalLight | null>(null);
  const dirLight2Ref  = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef   = useRef<THREE.DirectionalLight | null>(null);
  const studioBgGroupRef = useRef<THREE.Group | null>(null);

  const canvasTextureRef  = useRef<THREE.CanvasTexture | null>(null);
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const materialsRef      = useRef<THREE.Mesh[]>([]);
  const originalSizeRef   = useRef(new THREE.Vector3());
  const originalBoxRef    = useRef(new THREE.Box3());
  const scaleFactorRef    = useRef(1);
  const currentLoadIdRef  = useRef(0);
  const exportingRef      = useRef(false);
  const dielineImgRef     = useRef<HTMLImageElement | null>(null);
  const dielineLoadedRef  = useRef(false);
  const logoImgRef        = useRef<HTMLImageElement | null>(null);

  // 2D Canvas
  const editorCanvasRef = useRef<HTMLCanvasElement>(null);
  const isDraggingRef   = useRef(false);
  const dragOffsetRef   = useRef({ x: 0, y: 0 });

  const mixerRef        = useRef<THREE.AnimationMixer | null>(null);
  const clockRef        = useRef(new THREE.Clock());

  // Turntable
  const isLiveTurntableRef    = useRef(false);
  const [isLiveTurntable, setIsLiveTurntable] = useState(false);

  // ── Password unlock ───────────────────────────────────────────────────────
  const [passwordInput, setPasswordInput] = useState('');

  // ── Warn before unload ────────────────────────────────────────────────────
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (viewMode === 'editor' && layers.length > 0) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes — save a Custom Link before leaving.';
        return e.returnValue;
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [viewMode, layers]);

  // ── Load shapes database ──────────────────────────────────────────────────
  useEffect(() => {
    fetch('/models_database_en.json')
      .then(r => r.json())
      .then((data: Shape[]) => setShapes(data))
      .catch(() => {
        fetch('/models_database.json')
          .then(r => r.json())
          .then((data: Shape[]) => setShapes(data))
          .catch(console.error);
      });
  }, []);

  // ── Filtered shapes ───────────────────────────────────────────────────────
  const filteredShapes = React.useMemo(() => {
    return shapes.filter(shape => {
      const cat = (shape.category || 'Other').toLowerCase();
      if (activeCategory === cat) return true;
      if (activeCategory === 'other') return !CATEGORIES.includes(cat as any);
      return false;
    });
  }, [shapes, activeCategory]);

  // ── Create reference cola can model ──────────────────────────────────────
  const createColaCanModel = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'cola-can-reference';

    const canGeo = new THREE.CylinderGeometry(33, 33, 122, 32);
    const canMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.3, metalness: 0.1 });
    const canMesh = new THREE.Mesh(canGeo, canMat);
    canMesh.castShadow = true;
    group.add(canMesh);

    // Top cap
    const topGeo = new THREE.CylinderGeometry(28, 33, 8, 32);
    const capMesh = new THREE.Mesh(topGeo, canMat);
    capMesh.position.y = 65;
    group.add(capMesh);

    const arrowColor = 0x64ffda;
    const lineMat = new THREE.LineBasicMaterial({ color: arrowColor });

    // Height arrow
    const heightArrowGroup = new THREE.Group();
    const heightLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(75, -61, 0), new THREE.Vector3(75, 61, 0)]),
      lineMat
    );
    heightArrowGroup.add(heightLine);
    group.add(heightArrowGroup);

    group.position.set(200, 61, 0);
    group.visible = true;
    return group;
  };

  // ── Build / update studio background ─────────────────────────────────────
  const updateStudioBackground = useCallback((
    preset: BackgroundPreset,
    enabledPodium: boolean,
    customPodiumColor?: string,
    customBackdropColor?: string,
    customShadowOpacity?: number
  ) => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    // Remove old background group
    const oldBg = scene.getObjectByName('studio-background-group') as THREE.Group;
    if (oldBg) {
      oldBg.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(m => m.dispose());
        }
      });
      scene.remove(oldBg);
    }

    const presetConfigs: Record<BackgroundPreset, { podium: string; backdrop: string; shadow: number }> = {
      none:        { podium: '#ffffff', backdrop: '#f4f4f5', shadow: 0.45 },
      white:       { podium: '#ffffff', backdrop: '#f1f5f9', shadow: 0.35 },
      dark_luxury: { podium: '#1e293b', backdrop: '#0f172a', shadow: 0.65 },
      eco_wood:    { podium: '#d97706', backdrop: '#fef3c7', shadow: 0.4 },
      concrete:    { podium: '#64748b', backdrop: '#cbd5e1', shadow: 0.5 },
      pastel:      { podium: '#f472b6', backdrop: '#fce7f3', shadow: 0.3 },
    };

    const cfg = presetConfigs[preset] || presetConfigs.white;
    const pColor = customPodiumColor || cfg.podium;
    const bColor = customBackdropColor || cfg.backdrop;
    const opacity = customShadowOpacity !== undefined ? customShadowOpacity : cfg.shadow;

    scene.background = new THREE.Color(bColor);
    if (floorRef.current && floorRef.current.material instanceof THREE.ShadowMaterial) {
      floorRef.current.material.opacity = opacity;
    }

    if (preset === 'none' && !enabledPodium) return;

    const bgGroup = new THREE.Group();
    bgGroup.name = 'studio-background-group';

    if (enabledPodium) {
      const podiumGeo = new THREE.CylinderGeometry(3.5, 3.7, 0.25, 64);
      const podiumMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(pColor),
        roughness: preset === 'dark_luxury' ? 0.2 : 0.6,
        metalness: preset === 'dark_luxury' ? 0.3 : 0.05,
      });
      const podiumMesh = new THREE.Mesh(podiumGeo, podiumMat);
      podiumMesh.position.y = -0.125;
      podiumMesh.receiveShadow = true;
      podiumMesh.castShadow = true;
      bgGroup.add(podiumMesh);

      if (preset === 'dark_luxury') {
        const rimGeo = new THREE.TorusGeometry(3.5, 0.025, 16, 64);
        const rimMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.1, metalness: 0.9 });
        const rimMesh = new THREE.Mesh(rimGeo, rimMat);
        rimMesh.rotation.x = Math.PI / 2;
        bgGroup.add(rimMesh);
      }
    }

    // Curved backdrop wall
    const backdropGeo = new THREE.CylinderGeometry(10, 10, 14, 64, 1, true, Math.PI * 0.75, Math.PI * 0.5);
    const backdropMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(bColor),
      roughness: 0.95,
      metalness: 0.0,
      side: THREE.BackSide,
    });
    const backdropMesh = new THREE.Mesh(backdropGeo, backdropMat);
    backdropMesh.position.y = 5;
    backdropMesh.receiveShadow = true;
    bgGroup.add(backdropMesh);

    scene.add(bgGroup);
    studioBgGroupRef.current = bgGroup;
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      updateStudioBackground(backgroundPreset, showPodium, podiumColor, backdropColor, shadowOpacity);
    }
  }, [backgroundPreset, showPodium, podiumColor, backdropColor, shadowOpacity, updateStudioBackground]);

  // ── Update material properties on all meshes ──────────────────────────────
  useEffect(() => {
    materialsRef.current.forEach(mesh => {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mats.forEach(mat => {
        if ('roughness' in mat) (mat as any).roughness = roughness;
        if ('metalness' in mat) (mat as any).metalness = metalness;
        mat.needsUpdate = true;
      });
    });
  }, [roughness, metalness]);

  // ── Turntable ref sync ────────────────────────────────────────────────────
  useEffect(() => { isLiveTurntableRef.current = isLiveTurntable; }, [isLiveTurntable]);

  // ── Show / hide reference can ─────────────────────────────────────────────
  useEffect(() => {
    if (canRef.current) canRef.current.visible = showReferenceCan;
  }, [showReferenceCan]);

  // ── Show / hide grid ──────────────────────────────────────────────────────
  useEffect(() => {
    if (gridRef.current) gridRef.current.visible = showGrid;
  }, [showGrid]);

  // ── Transform controls gizmo mode ─────────────────────────────────────────
  useEffect(() => {
    if (!transformRef.current || !modelRef.current) return;
    const tc = transformRef.current;
    if (gizmoMode === 'none') {
      tc.detach();
      if (controlsRef.current) controlsRef.current.enabled = true;
    } else {
      tc.setMode(gizmoMode);
      tc.attach(modelRef.current);
      if (controlsRef.current) controlsRef.current.enabled = false;
    }
  }, [gizmoMode]);

  // ── Initialize Three.js ───────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || sceneRef.current) return;

    const w = containerRef.current.clientWidth || 800;
    const h = containerRef.current.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f1f5f9');
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 10000);
    camera.position.set(0, 1.5, 3.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 1;
    controls.maxDistance = 25;
    controlsRef.current = controls;

    // Transform Controls
    const tc = new TransformControls(camera, renderer.domElement);
    tc.addEventListener('dragging-changed', (e: any) => {
      if (controlsRef.current) controlsRef.current.enabled = !e.value;
    });
    // Floor snapping: clamp Y when in translate mode
    tc.addEventListener('objectChange', () => {
      if (tc.mode === 'translate' && modelRef.current) {
        if (modelRef.current.position.y < 0) {
          modelRef.current.position.y = 0;
        }
      }
    });
    scene.add(tc);
    transformRef.current = tc;

    // Lights
    const lightsGroup = new THREE.Group();
    lightsGroup.name = 'lights-group';
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    lightsGroup.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.set(2048, 2048);
    dirLight1.shadow.bias = -0.0005;
    lightsGroup.add(dirLight1);
    dirLight1Ref.current = dirLight1;
    const dirLight2 = new THREE.DirectionalLight(0x8bc7ff, 1.0);
    lightsGroup.add(dirLight2);
    dirLight2Ref.current = dirLight2;
    const rimLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
    lightsGroup.add(rimLight);
    rimLightRef.current = rimLight;
    scene.add(lightsGroup);

    // Floor
    const floorGeo = new THREE.PlaneGeometry(1, 1);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.name = 'studio-floor';
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    floorRef.current = floor;

    // Grid
    const grid = new THREE.GridHelper(1, 1, 0x1f2937, 0x111827);
    grid.name = 'studio-grid';
    grid.position.y = 0.001;
    grid.visible = false;
    scene.add(grid);
    gridRef.current = grid;

    // Reference Can
    const canGroup = createColaCanModel();
    scene.add(canGroup);
    canRef.current = canGroup;

    // Offscreen Canvas Texture
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

    // Load dieline & logo assets
    const dielineImg = new Image();
    dielineImg.src = '/dieline.png';
    dielineImg.onload = () => { dielineLoadedRef.current = true; updateEditorCanvas(); };
    dielineImgRef.current = dielineImg;

    const logoImg = new Image();
    logoImg.src = '/ap-logo.png';
    logoImgRef.current = logoImg;

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      if (mixerRef.current) mixerRef.current.update(clockRef.current.getDelta());
      else clockRef.current.getDelta();
      if (isLiveTurntableRef.current && modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return;
      const rw = containerRef.current.clientWidth;
      const rh = containerRef.current.clientHeight;
      if (rw > 0 && rh > 0) {
        cameraRef.current.aspect = rw / rh;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(rw, rh);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener('resize', handleResize);

    // Apply initial background
    updateStudioBackground('white', true, undefined, undefined, 0.35);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      tc.dispose();
      renderer.dispose();
      canvasTexture.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Canvas texture updater ────────────────────────────────────────────────
  const updateEditorCanvas = useCallback(() => {
    if (!editorCanvasRef.current || !offscreenCanvasRef.current) return;

    const canvas = editorCanvasRef.current;
    const offscreen = offscreenCanvasRef.current;

    let naturalW = 1000;
    let naturalH = 619;
    if (dielineImgRef.current?.complete) {
      naturalW = dielineImgRef.current.naturalWidth || 1000;
      naturalH = dielineImgRef.current.naturalHeight || 619;
    }

    let sX = 1.0, sY = 1.0;
    if (originalSizeRef.current.x && originalSizeRef.current.y) {
      let tW = width, tH = height;
      if (unit === 'inch') { tW *= 25.4; tH *= 25.4; }
      sX = tW / originalSizeRef.current.x;
      sY = tH / originalSizeRef.current.y;
    }

    const targetW = Math.round(naturalW * sX);
    const targetH = Math.round(naturalH * sY);

    if (canvas.width !== targetW || canvas.height !== targetH ||
        offscreen.width !== targetW || offscreen.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      offscreen.width = targetW;
      offscreen.height = targetH;

      // WebGL texture disposal and rebind (per user rules)
      if (canvasTextureRef.current) {
        canvasTextureRef.current.dispose();
      }
      const newTexture = new THREE.CanvasTexture(offscreen);
      newTexture.colorSpace = THREE.SRGBColorSpace;
      newTexture.wrapS = THREE.ClampToEdgeWrapping;
      newTexture.wrapT = THREE.ClampToEdgeWrapping;
      newTexture.flipY = false;
      canvasTextureRef.current = newTexture;
      materialsRef.current.forEach(mesh => {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach(mat => {
          if (mat && 'map' in mat) { (mat as any).map = newTexture; mat.needsUpdate = true; }
        });
      });
    }

    const ctx = canvas.getContext('2d');
    const offCtx = offscreen.getContext('2d');
    if (!ctx || !offCtx) return;

    const isUnlocked = isPremiumUnlocked || passwordInput === 'ryan';

    const drawLayer = (c: CanvasRenderingContext2D, layer: Layer, showUI: boolean) => {
      c.save();
      c.translate(layer.pos.x * sX, layer.pos.y * sY);
      c.rotate(layer.rotation * (Math.PI / 180));
      const lw = layer.width * layer.scale;
      const lh = layer.height * layer.scale;
      c.drawImage(layer.img, -lw / 2, -lh / 2, lw, lh);
      if (showUI && selectedLayer?.id === layer.id) {
        c.strokeStyle = '#64ffda';
        c.lineWidth = 2;
        c.setLineDash([6, 4]);
        c.strokeRect(-lw / 2 - 4, -lh / 2 - 4, lw + 8, lh + 8);
        c.fillStyle = '#64ffda';
        c.beginPath();
        c.arc(0, 0, 5, 0, Math.PI * 2);
        c.fill();
      }
      c.restore();
    };

    const drawWatermark = (c: CanvasRenderingContext2D) => {
      if (isUnlocked || exportingRef.current) return;
      c.save();
      c.fillStyle = 'rgba(150,150,150,0.22)';
      c.font = 'bold 24px sans-serif';
      c.textAlign = 'center';
      c.textBaseline = 'middle';
      const angle = -Math.PI / 6;
      for (let x = -100; x < targetW + 200; x += 300) {
        for (let y = -100; y < targetH + 200; y += 180) {
          c.save(); c.translate(x, y); c.rotate(angle);
          c.fillText('achievepack.com', 0, 0);
          c.restore();
        }
      }
      c.restore();
    };

    // Offscreen (clean for 3D)
    offCtx.fillStyle = '#ffffff';
    offCtx.fillRect(0, 0, targetW, targetH);
    if (showDieline && dielineImgRef.current && dielineLoadedRef.current) {
      offCtx.drawImage(dielineImgRef.current, 0, 0, targetW, targetH);
    }
    layers.forEach(l => drawLayer(offCtx, l, false));
    drawWatermark(offCtx);
    if (canvasTextureRef.current) canvasTextureRef.current.needsUpdate = true;

    // 2D view canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);
    if (dielineImgRef.current && dielineLoadedRef.current) {
      ctx.drawImage(dielineImgRef.current, 0, 0, targetW, targetH);
    }
    layers.forEach(l => drawLayer(ctx, l, true));
    drawWatermark(ctx);
  }, [layers, selectedLayer, showDieline, isPremiumUnlocked, passwordInput, width, height, unit]);

  useEffect(() => { updateEditorCanvas(); }, [updateEditorCanvas]);

  // ── Model Scale Updater ───────────────────────────────────────────────────
  const updateModelScale = useCallback(() => {
    if (!modelRef.current || !originalSizeRef.current.x) return;
    let tW = width, tH = height, tD = depth;
    if (unit === 'inch') { tW *= 25.4; tH *= 25.4; tD *= 25.4; }

    const sX = (tW / originalSizeRef.current.x) * scaleFactorRef.current;
    const sY = (tH / originalSizeRef.current.y) * scaleFactorRef.current;
    const sZ = (tD / originalSizeRef.current.z) * scaleFactorRef.current;
    modelRef.current.scale.set(sX, sY, sZ);

    const relY = tH / originalSizeRef.current.y;
    modelRef.current.position.y = -originalBoxRef.current.min.y * relY;

    if (controlsRef.current) {
      controlsRef.current.target.set(0, tH / 2, 0);
      controlsRef.current.update();
    }
    if (cameraRef.current) {
      const maxDim = Math.max(tW, tH, tD);
      const fov = cameraRef.current.fov * (Math.PI / 180);
      const cZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;
      cameraRef.current.position.set(cameraRef.current.position.x, tH * 0.8, cZ);
    }

    // Reference can positioning (X = targetW/2 + 50)
    if (canRef.current) {
      canRef.current.position.x = tW / 2 + 50;
      canRef.current.visible = showReferenceCan;
    }
    updateEditorCanvas();
  }, [width, height, depth, unit, showReferenceCan, updateEditorCanvas]);

  useEffect(() => { updateModelScale(); }, [width, height, depth, unit, showReferenceCan, updateModelScale]);

  // ── Load shape ─────────────────────────────────────────────────────────────
  const loadShape = useCallback((
    shape: Shape | undefined,
    presetWidth?: number,
    presetHeight?: number,
    presetLayers?: any[],
    presetUnit?: string
  ) => {
    setIsLoading(true);
    setLoadingText('Loading 3D model...');
    setGizmoMode('none');

    const loadId = ++currentLoadIdRef.current;
    const shapeName = shape?.name || 'Packaging Model';
    const cb = `?v=${Date.now()}`;
    const glbUrl = shape
      ? (shape.glb_file?.startsWith('http') || shape.glb_file?.startsWith('//')
          ? '/api/proxy?url=' + encodeURIComponent(shape.glb_file) : (shape.glb_file + cb))
      : ('/model.glb' + cb);
    const dielineUrl = shape
      ? (shape.dieline_image?.startsWith('http') || shape.dieline_image?.startsWith('//')
          ? '/api/proxy?url=' + encodeURIComponent(shape.dieline_image) : (shape.dieline_image + cb))
      : ('/dieline.png' + cb);

    // Cleanup old model
    if (sceneRef.current) {
      if (modelRef.current) {
        sceneRef.current.remove(modelRef.current);
        modelRef.current.traverse(node => {
          if (node instanceof THREE.Mesh) {
            node.geometry.dispose();
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach(m => m?.dispose());
          }
        });
        modelRef.current = null;
      }
      const systemNames = ['lights-group', 'cola-can-reference', 'studio-background-group', 'studio-floor', 'studio-grid'];
      const toRemove = sceneRef.current.children.filter(c => !systemNames.includes(c.name) && !(c === transformRef.current));
      toRemove.forEach(c => {
        sceneRef.current?.remove(c);
        c.traverse(node => {
          if (node instanceof THREE.Mesh) {
            node.geometry.dispose();
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach(m => m?.dispose());
          }
        });
      });
    }
    materialsRef.current.length = 0;

    // Load dieline
    dielineLoadedRef.current = false;
    if (dielineImgRef.current) {
      dielineImgRef.current.src = dielineUrl;
      dielineImgRef.current.onload = () => {
        if (loadId !== currentLoadIdRef.current) return;
        dielineLoadedRef.current = true;
        updateEditorCanvas();
      };
    }

    if (shape && !shape.glb_file) {
      setIs3dSupported(false);
      setIsLoading(false);
      return;
    }
    setIs3dSupported(true);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      glbUrl,
      (gltf) => {
        if (loadId !== currentLoadIdRef.current) {
          gltf.scene.traverse(node => {
            if (node instanceof THREE.Mesh) {
              node.geometry.dispose();
              const mats = Array.isArray(node.material) ? node.material : [node.material];
              mats.forEach(m => m?.dispose());
            }
          });
          return;
        }

        const model = gltf.scene;
        modelRef.current = model;

        if (gltf.animations?.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          const action = mixer.clipAction(gltf.animations[0]);
          action.setLoop(THREE.LoopPingPong, Infinity);
          action.play();
        } else {
          mixerRef.current = null;
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

        const activeUnit = presetUnit || 'inch';
        const defaultW = Math.round(size.x);
        const defaultH = Math.round(size.y);
        const defaultD = parseFloat(size.z.toFixed(1));

        setUnit(activeUnit);
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
            setWidth(defaultW); setHeight(defaultH); setDepth(defaultD);
          }
        }

        model.position.set(-center.x, -originalBoxRef.current.min.y, -center.z);

        model.traverse(node => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (node.material) {
              const oldMats = Array.isArray(node.material) ? node.material : [node.material];
              oldMats.forEach(m => m?.dispose?.());
            }
            node.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              roughness,
              metalness,
              side: THREE.DoubleSide,
              map: canvasTextureRef.current,
            });
            materialsRef.current.push(node);
          }
        });

        if (sceneRef.current) sceneRef.current.add(model);

        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = (cameraRef.current?.fov || 45) * (Math.PI / 180);
        const cZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;

        if (cameraRef.current) {
          cameraRef.current.far = maxDim * 15;
          cameraRef.current.position.set(0, size.y * 0.8, cZ);
          cameraRef.current.updateProjectionMatrix();
        }
        if (controlsRef.current) {
          controlsRef.current.target.set(0, size.y / 2, 0);
          controlsRef.current.maxDistance = maxDim * 6;
          controlsRef.current.minDistance = maxDim * 0.1;
          controlsRef.current.update();
        }

        if (floorRef.current) {
          floorRef.current.geometry.dispose();
          floorRef.current.geometry = new THREE.PlaneGeometry(maxDim * 8, maxDim * 8);
        }
        if (gridRef.current && sceneRef.current) {
          sceneRef.current.remove(gridRef.current);
          const newGrid = new THREE.GridHelper(maxDim * 8, 50, 0x1f2937, 0x111827);
          newGrid.name = 'studio-grid';
          newGrid.position.y = 0.001;
          newGrid.visible = showGrid;
          sceneRef.current.add(newGrid);
          gridRef.current = newGrid;
        }

        if (dirLight1Ref.current) {
          dirLight1Ref.current.position.set(maxDim * 1.5, maxDim * 2.5, maxDim * 1.5);
          dirLight1Ref.current.shadow.camera.left = -maxDim * 1.5;
          dirLight1Ref.current.shadow.camera.right = maxDim * 1.5;
          dirLight1Ref.current.shadow.camera.top = maxDim * 1.5;
          dirLight1Ref.current.shadow.camera.bottom = -maxDim * 1.5;
          dirLight1Ref.current.shadow.camera.far = maxDim * 8;
        }
        if (dirLight2Ref.current) dirLight2Ref.current.position.set(-maxDim * 1.5, maxDim, -maxDim * 1.5);
        if (rimLightRef.current) rimLightRef.current.position.set(0, maxDim * 1.5, -maxDim * 2.0);

        // Reference can
        if (canRef.current) {
          const tW = unit === 'inch' ? size.x : size.x;
          canRef.current.position.x = tW / 2 + 50;
          canRef.current.visible = showReferenceCan;
        }

        // Restore layers
        if (presetLayers?.length) {
          Promise.all(
            presetLayers.map(layer => new Promise<Layer>(resolve => {
              const img = new Image();
              img.src = layer.imgSrc;
              img.onload = () => resolve({ ...layer, img });
              img.onerror = () => resolve({ ...layer, img: logoImgRef.current || new Image() });
            }))
          ).then(loadedLayers => {
            setLayers(loadedLayers);
            setSelectedLayer(loadedLayers[loadedLayers.length - 1] || null);
            updateEditorCanvas();
          });
        } else if (logoImgRef.current) {
          const defaultLayer: Layer = {
            id: 'default-ap-logo',
            img: logoImgRef.current,
            width: logoImgRef.current.naturalWidth || 300,
            height: logoImgRef.current.naturalHeight || 222,
            pos: { x: (dielineImgRef.current?.naturalWidth || 1000) / 2, y: (dielineImgRef.current?.naturalHeight || 619) / 2 },
            scale: 0.5,
            rotation: 0,
          };
          setLayers([defaultLayer]);
          setSelectedLayer(defaultLayer);
        }

        setIsLoading(false);
      },
      (xhr) => {
        if (loadId !== currentLoadIdRef.current) return;
        if (xhr.total > 0) setLoadingText(`Loading... ${Math.round((xhr.loaded / xhr.total) * 100)}%`);
      },
      (err) => {
        if (loadId !== currentLoadIdRef.current) return;
        console.error('Error loading shape:', err);
        setLoadingText('Failed to load model.');
      }
    );
  }, [roughness, metalness, showReferenceCan, showGrid, updateEditorCanvas]);

  // ── Auto-load from URL params ─────────────────────────────────────────────
  useEffect(() => {
    if (shapes.length === 0) return;
    const sp = new URLSearchParams(window.location.search);
    const shapeId = sp.get('shape');
    const slugParam = sp.get('slug');
    const codeParam = sp.get('code');
    const pwParam = sp.get('pw');
    if (pwParam === 'ryan') { setIsPremiumUnlocked(true); setPasswordInput('ryan'); }

    const loadInitialDesign = async () => {
      if (codeParam || slugParam) {
        setIsLoading(true);
        try {
          const url = codeParam ? `/api/get-design?code=${codeParam}` : `/api/get-custom-studio?slug=${slugParam}`;
          const res = await fetch(url);
          const data = await res.json();
          const design = codeParam ? data.design : data.designData;
          if (data.success && design) {
            const shape = shapes.find(s => String(s.id) === String(design.shapeId));
            setSelectedShapeId(shape?.id || '');
            setViewMode('editor');
            loadShape(shape, design.width, design.height, design.layers, design.unit);
            return;
          }
        } catch (err) { console.error(err); }
      }
      if (shapeId) {
        const shape = shapes.find(s => String(s.id) === String(shapeId));
        if (shape) {
          setSelectedShapeId(shape.id);
          setViewMode('editor');
          setActiveCategory(detectCategoryV2(shape));
          loadShape(shape, sp.get('w') ? Number(sp.get('w')) : undefined, sp.get('h') ? Number(sp.get('h')) : undefined, undefined, sp.get('unit') || 'inch');
        }
      }
    };
    loadInitialDesign();
  }, [shapes, loadShape]);

  // ── File upload ───────────────────────────────────────────────────────────
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      const img = new Image();
      img.src = evt.target?.result as string;
      img.onload = () => {
        const newLayer: Layer = {
          id: Date.now().toString(),
          img,
          width: img.width,
          height: img.height,
          pos: { x: (dielineImgRef.current?.naturalWidth || 1000) / 2, y: (dielineImgRef.current?.naturalHeight || 619) / 2 },
          scale: 0.5,
          rotation: 0,
        };
        setLayers(prev => [...prev, newLayer]);
        setSelectedLayer(newLayer);
      };
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // ── 2D canvas interactions ────────────────────────────────────────────────
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!editorCanvasRef.current) return;
    const rect = editorCanvasRef.current.getBoundingClientRect();
    const cW = editorCanvasRef.current.width;
    const cH = editorCanvasRef.current.height;
    const clickX = ((e.clientX - rect.left) / rect.width) * cW;
    const clickY = ((e.clientY - rect.top) / rect.height) * cH;
    let sX = 1.0, sY = 1.0;
    if (originalSizeRef.current.x) {
      let tW = width, tH = height;
      if (unit === 'inch') { tW *= 25.4; tH *= 25.4; }
      sX = tW / originalSizeRef.current.x;
      sY = tH / originalSizeRef.current.y;
    }
    let found = false;
    for (let i = layers.length - 1; i >= 0; i--) {
      const l = layers[i];
      const lW = l.width * l.scale, lH = l.height * l.scale;
      const pX = l.pos.x * sX, pY = l.pos.y * sY;
      if (clickX >= pX - lW / 2 && clickX <= pX + lW / 2 && clickY >= pY - lH / 2 && clickY <= pY + lH / 2) {
        setSelectedLayer(l);
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: clickX - pX, y: clickY - pY };
        found = true;
        break;
      }
    }
    if (!found) setSelectedLayer(null);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || !selectedLayer || !editorCanvasRef.current) return;
    const rect = editorCanvasRef.current.getBoundingClientRect();
    const cW = editorCanvasRef.current.width;
    const cH = editorCanvasRef.current.height;
    const mX = ((e.clientX - rect.left) / rect.width) * cW;
    const mY = ((e.clientY - rect.top) / rect.height) * cH;
    let sX = 1.0, sY = 1.0;
    if (originalSizeRef.current.x) {
      let tW = width, tH = height;
      if (unit === 'inch') { tW *= 25.4; tH *= 25.4; }
      sX = tW / originalSizeRef.current.x;
      sY = tH / originalSizeRef.current.y;
    }
    const updated = { x: (mX - dragOffsetRef.current.x) / sX, y: (mY - dragOffsetRef.current.y) / sY };
    setLayers(prev => prev.map(l => l.id === selectedLayer.id ? { ...l, pos: updated } : l));
    setSelectedLayer(prev => prev ? { ...prev, pos: updated } : null);
  };

  // ── Save design ───────────────────────────────────────────────────────────
  const saveDesign = async () => {
    setIsSavingDesign(true);
    try {
      let screenshotData: string | undefined;
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        screenshotData = rendererRef.current.domElement.toDataURL('image/jpeg', 0.6);
      }
      const serializedLayers = layers.map(l => ({
        id: l.id, pos: l.pos, scale: l.scale, rotation: l.rotation,
        width: l.width, height: l.height, imgSrc: l.img.src,
      }));
      const res = await fetch('/api/save-design', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shapeId: selectedShapeId, width, height, depth, unit, layers: serializedLayers, screenshot: screenshotData }),
      });
      const data = await res.json();
      if (data.success) { setDesignCode(data.code); setIsSaveModalOpen(true); }
    } catch (err) { console.error(err); }
    finally { setIsSavingDesign(false); }
  };

  // ── Create custom link ────────────────────────────────────────────────────
  const createCustomLink = async () => {
    if (!customSlug.trim() || !companyName.trim()) {
      setCustomLinkError('Please fill in both Slug and Company Name.');
      return;
    }
    setIsCreatingCustomLink(true);
    setCustomLinkError('');
    try {
      let screenshotData: string | undefined;
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        screenshotData = rendererRef.current.domElement.toDataURL('image/jpeg', 0.6);
      }
      const serializedLayers = layers.map(l => {
        let rawSrc = l.img.src;
        if (rawSrc.includes('/api/proxy?url=')) {
          try { rawSrc = decodeURIComponent(rawSrc.split('/api/proxy?url=')[1]); } catch (_) {}
        }
        return { id: l.id, imgSrc: rawSrc, pos: l.pos, scale: l.scale, rotation: l.rotation, width: l.width, height: l.height };
      });
      const res = await fetch('/api/save-custom-studio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: customSlug.trim(), companyName: companyName.trim(), designData: { shapeId: selectedShapeId, width, height, depth, unit, layers: serializedLayers }, screenshot: screenshotData }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setCustomLinkSuccess(true);
        const domain = window.location.hostname.includes('pouch.eco') ? `${window.location.protocol}//${window.location.host}` : 'https://pouch.eco';
        setCreatedCustomUrl(`${domain}/${data.slug}`);
      } else {
        setCustomLinkError(data.error || 'Failed to create link.');
      }
    } catch (err) { setCustomLinkError('Network error.'); }
    finally { setIsCreatingCustomLink(false); }
  };

  // ── Export PNG ────────────────────────────────────────────────────────────
  const exportPNG = (withBackground: boolean) => {
    if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
    if (!withBackground) {
      const prevBg = sceneRef.current.background;
      sceneRef.current.background = null;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      const url = rendererRef.current.domElement.toDataURL('image/png');
      sceneRef.current.background = prevBg;
      const a = document.createElement('a'); a.href = url; a.download = 'studio-transparent.png'; a.click();
    } else {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      const url = rendererRef.current.domElement.toDataURL('image/png');
      const a = document.createElement('a'); a.href = url; a.download = 'studio-export.png'; a.click();
    }
    setIsExportModalOpen(false);
  };

  // ── Unit change ───────────────────────────────────────────────────────────
  const handleUnitChange = (newUnit: string) => {
    const isInch = newUnit === 'inch';
    setUnit(newUnit);
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

  // ── Viewport drag-and-drop ────────────────────────────────────────────────
  const handleViewportDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsViewportDragging(false);
    if (e.dataTransfer.files?.[0]?.type.startsWith('image/')) {
      handleFileUpload({ target: { files: e.dataTransfer.files } } as any);
    }
  };

  // ── Back to website safely ────────────────────────────────────────────────
  const handleBackToWebsite = () => {
    if (layers.length > 0) {
      setUnsavedPendingUrl('/');
      setIsUnsavedModalOpen(true);
    } else {
      window.location.href = '/';
    }
  };

  // ── Mobile lock screen ────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center', color: '#fff', maxWidth: '400px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🖥️</div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#64ffda' }}>Desktop Required</h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
            The 3D Packaging Studio requires a desktop browser for the best experience. Please visit on a laptop or desktop computer.
          </p>
          <a href="/" style={{ display: 'inline-block', background: '#64ffda', color: '#0f172a', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none' }}>
            ← Back to Website
          </a>
        </div>
      </div>
    );
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────
  const isDark = backgroundPreset === 'dark_luxury';
  const panelBg  = isDark ? '#1e293b' : '#ffffff';
  const panelBd  = isDark ? '#334155' : '#e2e8f0';
  const textClr  = isDark ? '#f1f5f9' : '#0f172a';
  const subClr   = isDark ? '#94a3b8' : '#64748b';
  const inputBg  = isDark ? '#0f172a' : '#f8fafc';
  const accentClr = '#64ffda';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', fontFamily: "'Inter', 'Outfit', sans-serif", background: panelBg }}>

      {/* ── TOP HEADER ─────────────────────────────────────────────────────── */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px', minHeight: '52px', padding: '0 1rem', borderBottom: `1px solid ${panelBd}`, background: panelBg, zIndex: 20, gap: '1rem', flexShrink: 0 }}>
        {/* Left: Back button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <button
            onClick={handleBackToWebsite}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'none', border: `1px solid ${accentClr}`, color: accentClr, borderRadius: '0.5rem', padding: '0.35rem 0.75rem', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '0.01em' }}
          >
            ← Back to Website
          </button>
          {viewMode === 'editor' && (
            <span style={{ fontSize: '0.8rem', color: subClr }}>
              Studio V2 — {shapes.find(s => s.id === selectedShapeId)?.name || 'Packaging Studio'}
            </span>
          )}
        </div>

        {/* Center: 3D / 2D toggle (only in editor mode) */}
        {viewMode === 'editor' && (
          <div style={{ display: 'flex', border: `1px solid ${panelBd}`, borderRadius: '0.5rem', overflow: 'hidden' }}>
            {(['3d', '2d'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setStudioTab(tab)}
                style={{ padding: '0.3rem 0.85rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: 'none', background: studioTab === tab ? accentClr : 'transparent', color: studioTab === tab ? '#0f172a' : subClr, transition: 'all 0.15s' }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* Right: Action buttons */}
        {viewMode === 'editor' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'flex-end' }}>
            {/* Turntable toggle */}
            <button
              onClick={() => setIsLiveTurntable(v => !v)}
              title="Toggle Live Turntable"
              style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: isLiveTurntable ? '#f59e0b' : 'transparent', color: isLiveTurntable ? '#0f172a' : subClr }}
            >
              ⟳ Spin
            </button>

            {/* Share */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: textClr }}
            >
              🔗 Share
            </button>

            {/* Save */}
            <button
              onClick={saveDesign}
              disabled={isSavingDesign}
              style={{ padding: '0.3rem 0.65rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: textClr }}
            >
              {isSavingDesign ? '...' : '💾 Save'}
            </button>

            {/* Export CTA */}
            <button
              onClick={() => setIsExportModalOpen(true)}
              style={{ padding: '0.3rem 0.85rem', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', border: 'none', borderRadius: '0.5rem', background: '#7c3aed', color: '#fff', letterSpacing: '0.02em', boxShadow: '0 2px 8px rgba(124,58,237,0.4)' }}
            >
              Export ↓
            </button>
          </div>
        )}
      </header>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      {viewMode === 'catalog' ? (
        /* ── CATALOG VIEW ─────────────────────────────────────────────── */
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: isDark ? '#0f172a' : '#f8fafc' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', padding: '0.75rem 1.5rem', borderBottom: `1px solid ${panelBd}`, overflowX: 'auto', flexShrink: 0, background: panelBg }}>
            {[...CATEGORIES, 'other' as const].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${activeCategory === cat ? accentClr : panelBd}`, borderRadius: '999px', background: activeCategory === cat ? accentClr : 'transparent', color: activeCategory === cat ? '#0f172a' : subClr, whiteSpace: 'nowrap', transition: 'all 0.15s', textTransform: 'capitalize' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Shapes Grid */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
            {filteredShapes.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: subClr }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
                <div style={{ fontSize: '0.9rem' }}>No shapes found for "{activeCategory}"</div>
              </div>
            ) : filteredShapes.map(shape => (
              <button
                key={shape.id}
                onClick={() => {
                  if (layers.length > 0) {
                    setUnsavedPendingUrl(null);
                    setIsUnsavedModalOpen(true);
                    return;
                  }
                  setSelectedShapeId(shape.id);
                  setViewMode('editor');
                  setLayers([]);
                  setSelectedLayer(null);
                  loadShape(shape);
                }}
                style={{ background: panelBg, border: `1px solid ${panelBd}`, borderRadius: '0.75rem', padding: '0.75rem', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${accentClr}`; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${panelBd}`; (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
              >
                {shape.thumbnail ? (
                  <img src={shape.thumbnail} alt={shape.name} style={{ width: '100%', aspectRatio: '1', objectFit: 'contain', borderRadius: '0.5rem', background: '#f1f5f9' }} loading="lazy" />
                ) : (
                  <div style={{ width: '100%', aspectRatio: '1', background: '#f1f5f9', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>📦</div>
                )}
                <div style={{ fontSize: '0.72rem', fontWeight: 600, color: textClr, textAlign: 'center', wordBreak: 'break-word', lineHeight: 1.3 }}>
                  {shape.name}
                </div>
                <div style={{ fontSize: '0.65rem', color: subClr, textTransform: 'capitalize' }}>{shape.category}</div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ── EDITOR VIEW ──────────────────────────────────────────────── */
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

          {/* ── 3D VIEWPORT ──────────────────────────────────────────── */}
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: studioTab === '2d' ? 'none' : 'block' }}>
            {/* Drag-and-drop overlay */}
            {isViewportDragging && (
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(100,255,218,0.15)', border: '2px dashed #64ffda', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <div style={{ color: '#64ffda', fontSize: '1.5rem', fontWeight: 700 }}>Drop image to add layer</div>
              </div>
            )}

            {/* Loading overlay */}
            {isLoading && (
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.8)', zIndex: 9, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', border: '3px solid rgba(100,255,218,0.3)', borderTopColor: '#64ffda', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                <div style={{ color: '#64ffda', fontWeight: 600, fontSize: '0.9rem' }}>{loadingText}</div>
              </div>
            )}

            {/* Gizmo toolbar (floating, bottom-left) */}
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 8, display: 'flex', gap: '0.4rem', background: 'rgba(15,23,42,0.85)', padding: '0.4rem', borderRadius: '0.6rem', backdropFilter: 'blur(8px)' }}>
              {([
                { mode: 'none' as GizmoMode, label: '🖱️', title: 'Orbit Camera' },
                { mode: 'translate' as GizmoMode, label: '↔️', title: 'Move (Floor Snap)' },
                { mode: 'rotate' as GizmoMode, label: '🔄', title: 'Rotate' },
              ]).map(({ mode, label, title }) => (
                <button
                  key={mode}
                  title={title}
                  onClick={() => setGizmoMode(mode)}
                  style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem', cursor: 'pointer', border: `1px solid ${gizmoMode === mode ? accentClr : 'rgba(255,255,255,0.15)'}`, borderRadius: '0.4rem', background: gizmoMode === mode ? accentClr : 'transparent', color: gizmoMode === mode ? '#0f172a' : '#f1f5f9', fontWeight: 600 }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Reference Can badge (bottom-right) */}
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', zIndex: 8 }}>
              <button
                onClick={() => setShowReferenceCan(v => !v)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(15,23,42,0.85)', border: `1px solid ${showReferenceCan ? accentClr : 'rgba(255,255,255,0.15)'}`, color: showReferenceCan ? accentClr : '#94a3b8', borderRadius: '0.5rem', padding: '0.4rem 0.6rem', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(8px)' }}
              >
                🥫 355ml Ref
                <span style={{ fontSize: '0.6rem', opacity: 0.7, display: 'block' }}>2.6" × 4.8"</span>
              </button>
            </div>

            {/* Three.js mount point */}
            <div
              ref={containerRef}
              style={{ width: '100%', height: '100%' }}
              onDragOver={e => { e.preventDefault(); setIsViewportDragging(true); }}
              onDragLeave={() => setIsViewportDragging(false)}
              onDrop={handleViewportDrop}
            />
          </div>

          {/* ── 2D EDITOR PANEL ────────────────────────────────────────── */}
          {studioTab === '2d' && (
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isDark ? '#0f172a' : '#e2e8f0' }}>
              <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'auto', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <canvas
                  ref={editorCanvasRef}
                  style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 120px)', objectFit: 'contain', cursor: 'crosshair', boxShadow: '0 4px 32px rgba(0,0,0,0.2)', borderRadius: '0.5rem' }}
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={() => { isDraggingRef.current = false; }}
                  onMouseLeave={() => { isDraggingRef.current = false; }}
                />
              </div>
            </div>
          )}

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside style={{ width: '280px', minWidth: '280px', maxWidth: '280px', height: '100%', display: 'flex', flexDirection: 'column', borderLeft: `1px solid ${panelBd}`, background: panelBg, overflow: 'hidden', flexShrink: 0 }}>

            {/* Back to catalog */}
            <div style={{ padding: '0.5rem 0.75rem', borderBottom: `1px solid ${panelBd}`, flexShrink: 0 }}>
              <button
                onClick={() => {
                  if (layers.length > 0) { setUnsavedPendingUrl('catalog'); setIsUnsavedModalOpen(true); return; }
                  setViewMode('catalog'); setLayers([]); setSelectedLayer(null);
                }}
                style={{ width: '100%', padding: '0.4rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: subClr, textAlign: 'left' }}
              >
                ← Change Shape
              </button>
            </div>

            {/* Unit Toggle */}
            <div style={{ padding: '0.5rem 0.75rem', borderBottom: `1px solid ${panelBd}`, flexShrink: 0 }}>
              <div style={{ display: 'flex', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', overflow: 'hidden' }}>
                {([['inch', 'Inches (in)'], ['mm', 'Millimeters (mm)']] as const).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => handleUnitChange(val)}
                    style={{ flex: 1, padding: '0.3rem 0.4rem', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', border: 'none', background: unit === val ? accentClr : 'transparent', color: unit === val ? '#0f172a' : subClr, transition: 'all 0.15s' }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar Tabs */}
            <div style={{ display: 'flex', borderBottom: `1px solid ${panelBd}`, flexShrink: 0 }}>
              {([
                { id: 'structure', label: '📐 Structure' },
                { id: 'design',    label: '🎨 Design' },
                { id: 'material',  label: '✨ Material' },
              ] as const).map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setSidebarTab(id)}
                  style={{ flex: 1, padding: '0.5rem 0.25rem', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer', border: 'none', borderBottom: sidebarTab === id ? `2px solid ${accentClr}` : '2px solid transparent', background: 'transparent', color: sidebarTab === id ? accentClr : subClr, transition: 'all 0.15s' }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '0.75rem' }}>

              {/* ── STRUCTURE TAB ─────────────────────────────────── */}
              {sidebarTab === 'structure' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Dimensions */}
                  <SectionBlock title="Dimensions" textClr={textClr} panelBd={panelBd}>
                    {[
                      { label: `W (${unit})`, val: width, setter: setWidth },
                      { label: `H (${unit})`, val: height, setter: setHeight },
                      { label: `D (${unit})`, val: depth, setter: setDepth },
                    ].map(({ label, val, setter }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.72rem', color: subClr, width: '44px', flexShrink: 0 }}>{label}</span>
                        <input
                          type="number"
                          value={val}
                          onChange={e => setter(parseFloat(e.target.value) || 0)}
                          style={{ flex: 1, padding: '0.3rem 0.5rem', fontSize: '0.78rem', border: `1px solid ${panelBd}`, borderRadius: '0.35rem', background: inputBg, color: textClr, outline: 'none', fontFamily: 'inherit' }}
                          step={unit === 'inch' ? 0.01 : 1}
                        />
                      </div>
                    ))}
                  </SectionBlock>

                  {/* Environment */}
                  <SectionBlock title="Background Preset" textClr={textClr} panelBd={panelBd}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
                      {(Object.keys(BACKGROUND_PRESETS) as BackgroundPreset[]).map(preset => (
                        <button
                          key={preset}
                          onClick={() => setBackgroundPreset(preset)}
                          style={{ padding: '0.35rem 0.4rem', fontSize: '0.68rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${backgroundPreset === preset ? accentClr : panelBd}`, borderRadius: '0.4rem', background: backgroundPreset === preset ? 'rgba(100,255,218,0.1)' : 'transparent', color: backgroundPreset === preset ? accentClr : subClr, transition: 'all 0.15s' }}
                        >
                          {BACKGROUND_PRESETS[preset].label}
                        </button>
                      ))}
                    </div>
                  </SectionBlock>

                  {/* Podium */}
                  <SectionBlock title="Podium" textClr={textClr} panelBd={panelBd}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.75rem', color: subClr }}>
                      <input type="checkbox" checked={showPodium} onChange={e => setShowPodium(e.target.checked)} />
                      Show Podium
                    </label>
                    {showPodium && (
                      <div style={{ marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.72rem', color: subClr, width: '50px' }}>Color</span>
                        <input type="color" value={podiumColor} onChange={e => setPodiumColor(e.target.value)} style={{ width: '32px', height: '28px', border: 'none', cursor: 'pointer', borderRadius: '4px' }} />
                      </div>
                    )}
                  </SectionBlock>

                  {/* Dieline & Grid toggles */}
                  <SectionBlock title="View Options" textClr={textClr} panelBd={panelBd}>
                    {[
                      { label: 'Show Dieline', val: showDieline, setter: setShowDieline },
                      { label: 'Show Grid', val: showGrid, setter: setShowGrid },
                      { label: 'Reference Can', val: showReferenceCan, setter: setShowReferenceCan },
                    ].map(({ label, val, setter }) => (
                      <label key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.75rem', color: subClr, marginBottom: '0.3rem' }}>
                        <input type="checkbox" checked={val} onChange={e => setter(e.target.checked)} />
                        {label}
                      </label>
                    ))}
                    {showReferenceCan && (
                      <div style={{ fontSize: '0.65rem', color: subClr, marginTop: '0.25rem', padding: '0.3rem 0.5rem', background: inputBg, borderRadius: '0.4rem' }}>
                        ⬤ 355ml can: 2.6" × 4.8" (66mm × 122mm)
                      </div>
                    )}
                  </SectionBlock>
                </div>
              )}

              {/* ── DESIGN TAB ────────────────────────────────────── */}
              {sidebarTab === 'design' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {/* Upload */}
                  <SectionBlock title="Upload Graphic" textClr={textClr} panelBd={panelBd}>
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.6rem', border: `1.5px dashed ${panelBd}`, borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.75rem', color: subClr, background: inputBg, transition: 'all 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = accentClr)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = panelBd)}>
                      <span>🖼️</span>
                      <span>Click or drop image here</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
                    </label>
                    <p style={{ fontSize: '0.65rem', color: subClr, marginTop: '0.35rem', lineHeight: 1.4 }}>
                      PNG, JPG, WebP supported. Drag &amp; drop onto the 3D viewport also works.
                    </p>
                  </SectionBlock>

                  {/* Layers List */}
                  {layers.length > 0 && (
                    <SectionBlock title={`Layers (${layers.length})`} textClr={textClr} panelBd={panelBd}>
                      {[...layers].reverse().map(layer => (
                        <div
                          key={layer.id}
                          onClick={() => setSelectedLayer(layer)}
                          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.4rem', borderRadius: '0.4rem', marginBottom: '0.25rem', cursor: 'pointer', background: selectedLayer?.id === layer.id ? 'rgba(100,255,218,0.1)' : 'transparent', border: `1px solid ${selectedLayer?.id === layer.id ? accentClr : 'transparent'}`, transition: 'all 0.15s' }}
                        >
                          <img src={layer.img.src} alt="" style={{ width: '28px', height: '28px', objectFit: 'cover', borderRadius: '0.25rem', background: '#f1f5f9' }} />
                          <span style={{ fontSize: '0.72rem', color: textClr, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            Layer {layer.id.substring(0, 8)}
                          </span>
                        </div>
                      ))}

                      {/* Selected layer controls */}
                      {selectedLayer && (
                        <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: inputBg, borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          {[
                            { label: 'Scale', min: 0.05, max: 5, step: 0.01, val: selectedLayer.scale, field: 'scale' as const },
                            { label: 'Rotation', min: -180, max: 180, step: 1, val: selectedLayer.rotation, field: 'rotation' as const },
                          ].map(({ label, min, max, step, val, field }) => (
                            <div key={label}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                                <span style={{ fontSize: '0.7rem', color: subClr }}>{label}</span>
                                <span style={{ fontSize: '0.7rem', color: textClr, fontWeight: 600 }}>{val.toFixed(field === 'rotation' ? 0 : 2)}</span>
                              </div>
                              <input
                                type="range" min={min} max={max} step={step} value={val}
                                onChange={e => {
                                  const v = parseFloat(e.target.value);
                                  setLayers(prev => prev.map(l => l.id === selectedLayer.id ? { ...l, [field]: v } : l));
                                  setSelectedLayer(prev => prev ? { ...prev, [field]: v } : null);
                                }}
                                style={{ width: '100%', accentColor: accentClr }}
                              />
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const updated = layers.filter(l => l.id !== selectedLayer.id);
                              setLayers(updated);
                              setSelectedLayer(updated[updated.length - 1] || null);
                            }}
                            style={{ padding: '0.3rem', fontSize: '0.7rem', cursor: 'pointer', border: '1px solid #ef4444', borderRadius: '0.35rem', background: 'transparent', color: '#ef4444', fontWeight: 600 }}
                          >
                            🗑 Delete Layer
                          </button>
                        </div>
                      )}
                    </SectionBlock>
                  )}

                  {/* Premium Unlock */}
                  {!isPremiumUnlocked && (
                    <SectionBlock title="🔒 Remove Watermark" textClr={textClr} panelBd={panelBd}>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <input
                          type="password"
                          value={passwordInput}
                          onChange={e => setPasswordInput(e.target.value)}
                          placeholder="Enter password"
                          style={{ flex: 1, padding: '0.3rem 0.5rem', fontSize: '0.75rem', border: `1px solid ${panelBd}`, borderRadius: '0.35rem', background: inputBg, color: textClr, fontFamily: 'inherit' }}
                        />
                        <button
                          onClick={() => { if (passwordInput === 'ryan') setIsPremiumUnlocked(true); }}
                          style={{ padding: '0.3rem 0.6rem', fontSize: '0.72rem', cursor: 'pointer', border: `1px solid ${accentClr}`, borderRadius: '0.35rem', background: 'transparent', color: accentClr, fontWeight: 600 }}
                        >
                          Unlock
                        </button>
                      </div>
                    </SectionBlock>
                  )}
                </div>
              )}

              {/* ── MATERIAL TAB ──────────────────────────────────── */}
              {sidebarTab === 'material' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <SectionBlock title="Material Presets" textClr={textClr} panelBd={panelBd}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {MATERIAL_PRESETS.map(preset => (
                        <button
                          key={preset.id}
                          onClick={() => { setRoughness(preset.roughness); setMetalness(preset.metalness); }}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.6rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', border: `1px solid ${Math.abs(roughness - preset.roughness) < 0.05 && Math.abs(metalness - preset.metalness) < 0.05 ? accentClr : panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: textClr, transition: 'all 0.15s' }}
                        >
                          <span>{preset.label}</span>
                          <span style={{ fontSize: '0.65rem', color: subClr }}>R:{preset.roughness} M:{preset.metalness}</span>
                        </button>
                      ))}
                    </div>
                  </SectionBlock>

                  <SectionBlock title="Fine-tune" textClr={textClr} panelBd={panelBd}>
                    {[
                      { label: 'Roughness', val: roughness, setter: setRoughness },
                      { label: 'Metalness', val: metalness, setter: setMetalness },
                    ].map(({ label, val, setter }) => (
                      <div key={label} style={{ marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                          <span style={{ fontSize: '0.72rem', color: subClr }}>{label}</span>
                          <span style={{ fontSize: '0.72rem', color: textClr, fontWeight: 600 }}>{val.toFixed(2)}</span>
                        </div>
                        <input type="range" min="0" max="1" step="0.01" value={val}
                          onChange={e => setter(parseFloat(e.target.value))}
                          style={{ width: '100%', accentColor: accentClr }} />
                      </div>
                    ))}
                  </SectionBlock>
                </div>
              )}
            </div>

            {/* Sidebar Footer — Share Custom Link */}
            {viewMode === 'editor' && (
              <div style={{ padding: '0.75rem', borderTop: `1px solid ${panelBd}`, flexShrink: 0 }}>
                <button
                  onClick={() => setIsShareModalOpen(true)}
                  style={{ width: '100%', padding: '0.5rem', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', border: `1.5px solid ${accentClr}`, borderRadius: '0.5rem', background: 'rgba(100,255,218,0.08)', color: accentClr, letterSpacing: '0.02em' }}
                >
                  🔗 Create Custom Share Link
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* ────────────── MODALS ──────────────────────────────────────────────── */}

      {/* Unsaved Changes Modal */}
      {isUnsavedModalOpen && (
        <ModalOverlay onClose={() => setIsUnsavedModalOpen(false)}>
          <ModalBox title="⚠️ Unsaved Changes" textClr={textClr} panelBg={panelBg} panelBd={panelBd}>
            <p style={{ fontSize: '0.85rem', color: subClr, marginBottom: '1rem' }}>
              You have unsaved artwork layers. Save a Custom Link to preserve your design before leaving.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => { setIsUnsavedModalOpen(false); setIsShareModalOpen(true); }}
                style={modalBtnStyle(accentClr, '#0f172a')}
              >
                💾 Save Link
              </button>
              <button
                onClick={() => {
                  setIsUnsavedModalOpen(false);
                  setLayers([]); setSelectedLayer(null);
                  if (unsavedPendingUrl === 'catalog') setViewMode('catalog');
                  else if (unsavedPendingUrl) window.location.href = unsavedPendingUrl;
                }}
                style={modalBtnStyle('#ef4444', '#fff')}
              >
                Discard & Leave
              </button>
            </div>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* Share / Custom Link Modal */}
      {isShareModalOpen && (
        <ModalOverlay onClose={() => { setIsShareModalOpen(false); setCustomLinkSuccess(false); setCustomLinkError(''); setCustomSlug(''); setCompanyName(''); }}>
          <ModalBox title="🔗 Share Your Design" textClr={textClr} panelBg={panelBg} panelBd={panelBd}>
            {customLinkSuccess ? (
              <div>
                <p style={{ fontSize: '0.85rem', color: '#22c55e', fontWeight: 600, marginBottom: '0.75rem' }}>✅ Custom link created!</p>
                <div style={{ background: inputBg, border: `1px solid ${panelBd}`, borderRadius: '0.5rem', padding: '0.6rem 0.75rem', wordBreak: 'break-all', fontSize: '0.82rem', color: accentClr, fontFamily: 'monospace', marginBottom: '0.75rem' }}>
                  {createdCustomUrl}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => { navigator.clipboard.writeText(createdCustomUrl); setCopiedCustomLink(true); setTimeout(() => setCopiedCustomLink(false), 2000); }}
                    style={modalBtnStyle(accentClr, '#0f172a')}
                  >
                    {copiedCustomLink ? '✅ Copied!' : '📋 Copy Link'}
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.82rem', color: subClr, margin: 0 }}>
                  Create an exclusive branded URL for your client (e.g., pouch.eco/your-brand)
                </p>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: subClr, marginBottom: '0.25rem' }}>URL Slug *</label>
                  <input
                    value={customSlug}
                    onChange={e => setCustomSlug(e.target.value.replace(/[^a-z0-9-]/g, '').toLowerCase())}
                    placeholder="your-brand-name"
                    style={{ width: '100%', padding: '0.4rem 0.6rem', fontSize: '0.8rem', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: inputBg, color: textClr, fontFamily: 'monospace', boxSizing: 'border-box' }}
                  />
                  {customSlug && <span style={{ fontSize: '0.7rem', color: subClr }}>URL: pouch.eco/{customSlug}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', color: subClr, marginBottom: '0.25rem' }}>Company / Brand Name *</label>
                  <input
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="Acme Foods Ltd."
                    style={{ width: '100%', padding: '0.4rem 0.6rem', fontSize: '0.8rem', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: inputBg, color: textClr, fontFamily: 'inherit', boxSizing: 'border-box' }}
                  />
                </div>
                {customLinkError && <p style={{ fontSize: '0.75rem', color: '#ef4444', margin: 0 }}>{customLinkError}</p>}
                <button
                  onClick={createCustomLink}
                  disabled={isCreatingCustomLink}
                  style={modalBtnStyle(accentClr, '#0f172a')}
                >
                  {isCreatingCustomLink ? 'Creating...' : '🔗 Create Custom Link'}
                </button>

                <div style={{ borderTop: `1px solid ${panelBd}`, paddingTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.75rem', color: subClr, marginBottom: '0.5rem' }}>Or save a design code:</p>
                  <button
                    onClick={saveDesign}
                    disabled={isSavingDesign}
                    style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem', cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: textClr, fontWeight: 600 }}
                  >
                    {isSavingDesign ? 'Saving...' : '💾 Save & Get Code'}
                  </button>
                </div>
              </div>
            )}
          </ModalBox>
        </ModalOverlay>
      )}

      {/* Save Code Modal */}
      {isSaveModalOpen && designCode && (
        <ModalOverlay onClose={() => setIsSaveModalOpen(false)}>
          <ModalBox title="💾 Design Saved!" textClr={textClr} panelBg={panelBg} panelBd={panelBd}>
            <p style={{ fontSize: '0.82rem', color: subClr, marginBottom: '0.75rem' }}>Share this code to restore your design:</p>
            <div style={{ background: inputBg, border: `1px solid ${panelBd}`, borderRadius: '0.5rem', padding: '0.75rem', textAlign: 'center', fontFamily: 'monospace', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.15em', color: accentClr, marginBottom: '0.75rem' }}>
              {designCode}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => { navigator.clipboard.writeText(designCode); setCopiedCode(true); setTimeout(() => setCopiedCode(false), 2000); }}
                style={modalBtnStyle(accentClr, '#0f172a')}
              >
                {copiedCode ? '✅ Copied!' : '📋 Copy Code'}
              </button>
              <button
                onClick={() => { navigator.clipboard.writeText(`${window.location.origin}/studio-v2?code=${designCode}`); }}
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', cursor: 'pointer', border: `1px solid ${panelBd}`, borderRadius: '0.4rem', background: 'transparent', color: subClr, fontWeight: 600 }}
              >
                Copy Link
              </button>
            </div>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* Export Modal */}
      {isExportModalOpen && (
        <ModalOverlay onClose={() => setIsExportModalOpen(false)}>
          <ModalBox title="Export Design" textClr={textClr} panelBg={panelBg} panelBd={panelBd}>
            <p style={{ fontSize: '0.82rem', color: subClr, marginBottom: '1rem' }}>Choose your export format:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button onClick={() => exportPNG(false)} style={modalBtnStyle(accentClr, '#0f172a')}>
                📷 PNG — Transparent Background
              </button>
              <button onClick={() => exportPNG(true)} style={modalBtnStyle('#7c3aed', '#fff')}>
                🌄 PNG — With Scene Background
              </button>
            </div>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* CSS spinner */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(100,116,139,0.4); border-radius: 2px; }
        input[type=range] { height: 4px; }
      `}</style>
    </div>
  );
};

// ─── Helper components ────────────────────────────────────────────────────────
const SectionBlock: React.FC<{ title: string; textClr: string; panelBd: string; children: React.ReactNode }> = ({
  title, textClr, panelBd, children
}) => (
  <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: `1px solid ${panelBd}` }}>
    <div style={{ padding: '0.35rem 0.65rem', borderBottom: `1px solid ${panelBd}`, fontSize: '0.68rem', fontWeight: 700, color: textClr, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.04)' }}>
      {title}
    </div>
    <div style={{ padding: '0.6rem 0.65rem' }}>
      {children}
    </div>
  </div>
);

const ModalOverlay: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => (
  <div
    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    onClick={onClose}
  >
    <div onClick={e => e.stopPropagation()} style={{ maxWidth: '420px', width: '100%' }}>
      {children}
    </div>
  </div>
);

const ModalBox: React.FC<{ title: string; textClr: string; panelBg: string; panelBd: string; children: React.ReactNode }> = ({
  title, textClr, panelBg, panelBd, children
}) => (
  <div style={{ background: panelBg, border: `1px solid ${panelBd}`, borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
    <div style={{ padding: '1rem 1.25rem', borderBottom: `1px solid ${panelBd}`, fontSize: '0.95rem', fontWeight: 700, color: textClr }}>
      {title}
    </div>
    <div style={{ padding: '1.25rem' }}>
      {children}
    </div>
  </div>
);

const modalBtnStyle = (bg: string, color: string): React.CSSProperties => ({
  flex: 1,
  padding: '0.5rem 0.75rem',
  fontSize: '0.82rem',
  fontWeight: 700,
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.5rem',
  background: bg,
  color,
  letterSpacing: '0.02em',
});

export default PackageEditorPageV2;
