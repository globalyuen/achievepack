import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Sparkles, Edit3, ArrowRight, Package, Box, HelpCircle, Check, Loader2 } from 'lucide-react';
import NotFoundPage from './NotFoundPage';

interface Layer {
  id: string;
  imgSrc: string;
  name: string;
  pos: { x: number; y: number };
  scale: number;
  rotation: number;
  width?: number;
  height?: number;
}

interface Shape {
  id: string;
  name: string;
  category?: string;
  glb_file: string;
  dieline_image: string;
  description?: string;
}

const translations = {
  en: {
    loading_slug: "Loading exclusive link...",
    loading_design: "Searching your custom packaging design...",
    applying_artwork: "Applying custom artwork design...",
    downloading_model: "Downloading 3D model...",
    exclusive_showcase: "3D Showcase",
    open_editor: "Open 3D Editor",
    proposal_for: "Exclusive Proposal",
    created_at: "Created Date",
    spec_details: "Design Specifications",
    shape: "Package Shape",
    dimensions: "Dimensions",
    gusset: "Gusset Depth",
    material: "Material",
    compostable: "100% Compostable",
    feature_barrier: "High-barrier airtight protection, extending food shelf life",
    feature_moq: "Plate-free digital printing, low MOQ with quick turnaround",
    btn_edit: "Copy & Modify 3D Design",
    btn_whatsapp: "Talk to Packaging Expert (WhatsApp)",
    anonymous: "Anonymous Client",
    unknown: "Unknown"
  },
  zh: {
    loading_slug: "正在讀取專屬連結...",
    loading_design: "正在搜尋您的客製化包裝設計...",
    applying_artwork: "正在套用客製化圖案設計...",
    downloading_model: "正在下載 3D 模型...",
    exclusive_showcase: "3D 專屬展示",
    open_editor: "開啟 3D 編輯器",
    proposal_for: "專屬合作提案",
    created_at: "建立日期",
    spec_details: "設計規格詳情",
    shape: "包裝形狀",
    dimensions: "長度規格",
    gusset: "底部/側邊厚度",
    material: "材質屬性",
    compostable: "100% 可堆肥 (Compostable)",
    feature_barrier: "高阻隔氣密保護，延展食品保鮮期",
    feature_moq: "免版費數位印刷，快速小量起訂",
    btn_edit: "複製並修改此 3D 設計",
    btn_whatsapp: "對接包裝專家 (WhatsApp)",
    anonymous: "神秘客戶",
    unknown: "未知"
  },
  es: {
    loading_slug: "Cargando enlace exclusivo...",
    loading_design: "Buscando su diseño de empaque personalizado...",
    applying_artwork: "Aplicando diseño de arte personalizado...",
    downloading_model: "Descargando modelo 3D...",
    exclusive_showcase: "Presentación 3D",
    open_editor: "Abrir Editor 3D",
    proposal_for: "Propuesta Exclusiva",
    created_at: "Fecha de Creación",
    spec_details: "Especificaciones del Diseño",
    shape: "Forma del Empaque",
    dimensions: "Dimensiones",
    gusset: "Fuelle/Profundidad",
    material: "Material",
    compostable: "100% Compostable",
    feature_barrier: "Protección hermética de alta barrera para extender vida útil",
    feature_moq: "Impresión digital sin planchas, MOQ bajo rápido",
    btn_edit: "Copiar y Modificar Diseño 3D",
    btn_whatsapp: "Hablar con Experto (WhatsApp)",
    anonymous: "Cliente Anónimo",
    unknown: "Desconocido"
  },
  fr: {
    loading_slug: "Chargement du lien exclusif...",
    loading_design: "Recherche de votre design d'emballage personnalisé...",
    applying_artwork: "Application du design graphique...",
    downloading_model: "Téléchargement du modèle 3D...",
    exclusive_showcase: "Présentation 3D",
    open_editor: "Ouvrir l'éditeur 3D",
    proposal_for: "Proposition Exclusive",
    created_at: "Date de Création",
    spec_details: "Spécifications du Design",
    shape: "Forme de l'Emballage",
    dimensions: "Dimensions",
    gusset: "Profondeur Soufflet",
    material: "Matériau",
    compostable: "100% Compostable",
    feature_barrier: "Haute barrière hermétique pour prolonger la conservation",
    feature_moq: "Impression numérique sans plaques, faible MOQ rapide",
    btn_edit: "Copier & Modifier ce Design 3D",
    btn_whatsapp: "Parler à un Expert (WhatsApp)",
    anonymous: "Client Anonyme",
    unknown: "Inconnu"
  }
};

export default function SharedStudioPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [lang, setLang] = useState<'en' | 'zh' | 'es' | 'fr'>('en');
  const [loading, setLoading] = useState(true);
  const [loadingKey, setLoadingKey] = useState<'loading_slug' | 'loading_design' | 'applying_artwork' | 'downloading_model'>('loading_slug');
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [isValidSlug, setIsValidSlug] = useState(true);
  
  // Custom design data from database
  const [companyName, setCompanyName] = useState('');
  const [designData, setDesignData] = useState<any>(null);
  const [createdDate, setCreatedDate] = useState<Date | null>(null);
  
  // ThreeJS states
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  // Canvas textures
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const dielineImgRef = useRef<HTMLImageElement | null>(null);
  
  const currentLoadIdRef = useRef<number>(0);
  const originalSizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const originalBoxRef = useRef<THREE.Box3>(new THREE.Box3());
  const scaleFactorRef = useRef<number>(1);
  const modelScaleRef = useRef<{ x: number; y: number }>({ x: 1.0, y: 1.0 });

  // Fetch custom design data by slug
  useEffect(() => {
    if (!slug) return;
    
    const fetchDesign = async () => {
      try {
        setLoadingKey('loading_design');
        const res = await fetch(`/api/get-custom-studio?slug=${slug}`);
        if (res.status === 404) {
          setIsValidSlug(false);
          setLoading(false);
          return;
        }
        
        const data = await res.json();
        if (data.success && data.designData) {
          setCompanyName(data.companyName || '');
          setDesignData(data.designData);
          if (data.createdAt) {
            setCreatedDate(new Date(data.createdAt));
          }
          
          // Once we have design data, initialize the 3D environment
          init3D(data.designData);
        } else {
          setIsValidSlug(false);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching shared design:', err);
        setIsValidSlug(false);
        setLoading(false);
      }
    };
    
    fetchDesign();
    
    // Cleanup ThreeJS on unmount
    return () => {
      if (rendererRef.current && containerRef.current) {
        try {
          containerRef.current.removeChild(rendererRef.current.domElement);
        } catch (_) {}
        rendererRef.current.dispose();
      }
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => mat.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, [slug]);

  // Main 3D Initializer
  const init3D = async (design: any) => {
    if (!containerRef.current) return;
    
    const widthContainer = containerRef.current.clientWidth;
    const heightContainer = containerRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1d); // Sleek dark metallic theme bg
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
    controls.autoRotate = true; // Auto rotate for beautiful presentation
    controls.autoRotateSpeed = 1.2;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 1;
    controls.maxDistance = 25;
    controlsRef.current = controls;

    // Stop auto-rotation when user interacts
    controls.addEventListener('start', () => {
      controls.autoRotate = false;
    });

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.castShadow = true;
    dirLight1.shadow.mapSize.width = 2048;
    dirLight1.shadow.mapSize.height = 2048;
    dirLight1.shadow.bias = -0.0005;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa5d8ff, 0.8);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
    scene.add(rimLight);

    // Floor shadow catcher
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.3 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.001;
    floor.receiveShadow = true;
    scene.add(floor);

    // Dynamic grid for ground presence
    const grid = new THREE.GridHelper(30, 30, 0x1f2937, 0x111827);
    grid.position.y = 0;
    scene.add(grid);

    // Create offscreen canvas for dieline texture rendering
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

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Load Shape GLB Model
    try {
      setLoadingKey('downloading_model');
      const shapesRes = await fetch('/models_database_en.json');
      const shapes: Shape[] = await shapesRes.json();
      const currentShape = shapes.find(s => String(s.id) === String(design.shapeId));
      
      const glbUrl = currentShape ? currentShape.glb_file : '/model.glb';
      const dielineUrl = currentShape ? currentShape.dieline_image : '/dieline.png';

      // Load Dieline background texture
      const dielineImg = new Image();
      dielineImgRef.current = dielineImg;
      if (dielineUrl.startsWith('http') || dielineUrl.startsWith('//')) {
        dielineImg.crossOrigin = 'anonymous';
      }
      dielineImg.src = dielineUrl.startsWith('http') ? '/api/proxy?url=' + encodeURIComponent(dielineUrl) : dielineUrl;
      
      await new Promise<void>((resolve) => {
        dielineImg.onload = () => resolve();
        dielineImg.onerror = () => resolve();
      });

      // Load Model
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      loader.setDRACOLoader(dracoLoader);

      loader.load(
        glbUrl.startsWith('http') ? '/api/proxy?url=' + encodeURIComponent(glbUrl) : glbUrl,
        async (gltf) => {
          const model = gltf.scene;
          modelRef.current = model;

          // Process animation if present
          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
            mixerRef.current = mixer;
            const action = mixer.clipAction(gltf.animations[0]);
            action.setLoop(THREE.LoopPingPong, Infinity);
            action.play();
          }

          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);
          
          let size = originalSizeRef.current;
          let center = originalBoxRef.current.getCenter(new THREE.Vector3());

          // Handle micro-sized models (meters vs mm)
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

          // Scale model dimensions based on design data
          const designW = design.width || Math.round(size.x);
          const designH = design.height || Math.round(size.y);
          const designD = design.depth || Math.round(size.z);

          const scaleX = (designW / size.x) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          const scaleY = (designH / size.y) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          const scaleZ = (designD / size.z) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          model.scale.set(scaleX, scaleY, scaleZ);
          modelScaleRef.current = { x: scaleX, y: scaleY };

          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);
          const newSize = originalSizeRef.current;
          const newCenter = originalBoxRef.current.getCenter(new THREE.Vector3());

          model.position.x = -newCenter.x;
          model.position.z = -newCenter.z;
          model.position.y = -originalBoxRef.current.min.y;

          // Adjust camera & controls target
          const maxDim = Math.max(newSize.x, newSize.y, newSize.z);
          const fov = camera.fov * (Math.PI / 180);
          const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;
          camera.far = maxDim * 15;
          camera.position.set(0, newSize.y * 0.8, cameraZ);
          camera.updateProjectionMatrix();

          controls.target.set(0, newSize.y / 2, 0);
          controls.maxDistance = maxDim * 6;
          controls.minDistance = maxDim * 0.1;
          controls.update();

          // Apply lights position relative to model dimensions
          dirLight1.position.set(maxDim * 1.2, maxDim * 2.0, maxDim * 1.2);
          dirLight2.position.set(-maxDim * 1.2, maxDim * 1.0, -maxDim * 1.2);
          rimLight.position.set(0, maxDim * 1.5, -maxDim * 1.5);

          dirLight1.shadow.camera.left = -maxDim * 2;
          dirLight1.shadow.camera.right = maxDim * 2;
          dirLight1.shadow.camera.top = maxDim * 2;
          dirLight1.shadow.camera.bottom = -maxDim * 2;
          dirLight1.shadow.camera.near = 0.1;
          dirLight1.shadow.camera.far = maxDim * 8;

          // Map canvas texture to model material
          model.traverse((node) => {
            if (node instanceof THREE.Mesh) {
              node.castShadow = true;
              node.receiveShadow = true;
              if (node.material) {
                const mats = Array.isArray(node.material) ? node.material : [node.material];
                mats.forEach(mat => {
                  mat.side = THREE.DoubleSide;
                  mat.map = canvasTexture;
                  if ('color' in mat && mat.color && typeof mat.color.setHex === 'function') {
                    mat.color.setHex(0xffffff);
                  }
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

          // Render layers onto offscreen canvas
          setLoadingKey('applying_artwork');
          await applyLayersToTexture(design.layers || []);

          setLoading(false);
          
          // Start render loop
          const animate = () => {
            requestAnimationFrame(animate);
            if (controls.autoRotate) {
              controls.update();
            }
            if (mixerRef.current) {
              mixerRef.current.update(clockRef.current.getDelta());
            }
            renderer.render(scene, camera);
          };
          animate();
        },
        (xhr) => {
          if (xhr.total > 0) {
            const percent = Math.round((xhr.loaded / xhr.total) * 100);
            setDownloadProgress(percent);
            setLoadingKey('downloading_model');
          }
        },
        (error) => {
          console.error('Error loading GLTF model:', error);
          setLoading(false);
        }
      );
    } catch (err) {
      console.error('Failed to query shapes database:', err);
      setLoading(false);
    }
  };

  // Render Custom Artwork Layers to Texture
  const applyLayersToTexture = async (layersData: any[]) => {
    const offscreenCanvas = offscreenCanvasRef.current;
    if (!offscreenCanvas) return;
    const ctx = offscreenCanvas.getContext('2d');
    if (!ctx) return;

    // Draw solid white background first
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

    // Draw background dieline on top if loaded
    if (dielineImgRef.current && dielineImgRef.current.complete) {
      ctx.drawImage(dielineImgRef.current, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
    }

    // Load and draw all custom artwork layers sequentially
    const loadedLayers = await Promise.all(
      layersData.map(layer => {
        return new Promise<any>((resolve) => {
          const img = new Image();
          if (layer.imgSrc.startsWith('http') || layer.imgSrc.startsWith('//')) {
            img.crossOrigin = 'anonymous';
          }
          img.src = layer.imgSrc.startsWith('http') ? '/api/proxy?url=' + encodeURIComponent(layer.imgSrc) : layer.imgSrc;
          img.onload = () => resolve({ ...layer, img });
          img.onerror = () => resolve(null);
        });
      })
    );

    // Draw layers onto the offscreen canvas
    loadedLayers.forEach(layer => {
      if (!layer || !layer.img) return;
      ctx.save();
      ctx.translate(layer.pos.x, layer.pos.y);
      ctx.rotate((layer.rotation || 0) * (Math.PI / 180));

      const sX = modelScaleRef.current.x / (scaleFactorRef.current === 1000 ? 1000 : 1);
      const sY = modelScaleRef.current.y / (scaleFactorRef.current === 1000 ? 1000 : 1);

      let w = (layer.width || layer.img.width) * (layer.scale || 1.0);
      let h = (layer.height || layer.img.height) * (layer.scale || 1.0);

      w /= sX;
      h /= sY;

      ctx.drawImage(layer.img, -w / 2, -h / 2, w, h);
      ctx.restore();
    });

    if (canvasTextureRef.current) {
      canvasTextureRef.current.needsUpdate = true;
    }
  };

  if (!isValidSlug) {
    return <NotFoundPage />;
  }

  // Handle Edit in Studio
  const handleEditInStudio = () => {
    navigate(`/studio?slug=${slug}`);
  };

  const getFormattedDate = () => {
    if (!createdDate) return translations[lang].unknown;
    const localeMap = {
      en: 'en-US',
      zh: 'zh-HK',
      es: 'es-ES',
      fr: 'fr-FR'
    };
    return createdDate.toLocaleDateString(localeMap[lang], {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0f1d] text-white flex flex-col font-sans select-none overflow-hidden">
      {/* Premium Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-6 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-emerald-400">Pouch</span>
            <span className="text-white">.eco</span>
          </Link>
          <span className="h-4 w-px bg-white/20" />
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            {translations[lang].exclusive_showcase}
          </div>
        </div>
        
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as any)}
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl text-xs font-semibold px-3 py-2 focus:outline-none cursor-pointer appearance-none pr-8 relative"
              style={{ WebkitAppearance: 'none' }}
            >
              <option value="en" className="bg-slate-900 text-white">EN</option>
              <option value="zh" className="bg-slate-900 text-white">繁中</option>
              <option value="es" className="bg-slate-900 text-white">ES</option>
              <option value="fr" className="bg-slate-900 text-white">FR</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white/60" />
          </div>

          <button 
            onClick={handleEditInStudio}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white rounded-xl text-sm font-semibold transition-all hover:scale-105"
          >
            <Edit3 className="w-4 h-4" />
            <span>{translations[lang].open_editor}</span>
          </button>
        </div>
      </header>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0f1d] text-center gap-4">
          <Loader2 className="w-12 h-12 text-emerald-400 animate-spin" />
          <p className="text-emerald-400/80 font-medium text-lg tracking-wide">
            {translations[lang][loadingKey]} {downloadProgress !== null ? `(${downloadProgress}%)` : ''}
          </p>
        </div>
      )}

      {/* Main Split Screen */}
      <main className="flex-1 flex flex-col md:flex-row relative mt-0 min-h-screen">
        {/* Left Side: 3D Canvas */}
        <div ref={containerRef} className="flex-1 h-[65vh] md:h-screen relative overflow-hidden" />

        {/* Right Side: Showcase Side Panel */}
        <div className="w-full md:w-[420px] bg-[#0c1224]/85 md:bg-[#0c1224]/75 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/5 flex flex-col p-8 justify-between relative z-10 overflow-y-auto">
          
          <div className="space-y-8 mt-12 md:mt-20">
            {/* Top metadata */}
            <div>
              <p className="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-1">
                {translations[lang].proposal_for}
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                {companyName || translations[lang].anonymous}
              </h1>
              <p className="text-white/40 text-sm">
                {translations[lang].created_at}: {getFormattedDate()}
              </p>
            </div>

            <div className="h-px bg-white/5" />

            {/* Spec Details Card */}
            {designData && (
              <div className="space-y-5">
                <h3 className="text-sm font-bold text-white/80 uppercase tracking-widest">
                  {translations[lang].spec_details}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].shape}</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-emerald-400" />
                      {designData.shapeId ? designData.shapeId.toUpperCase().replace(/-/g, ' ') : 'STAND UP POUCH'}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].dimensions}</span>
                    <span className="text-sm font-bold text-white">
                      {designData.width} × {designData.height} {designData.unit || 'mm'}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].gusset}</span>
                    <span className="text-sm font-bold text-white">
                      {designData.depth} {designData.unit || 'mm'}
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].material}</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {translations[lang].compostable}
                    </span>
                  </div>
                </div>

                {/* Features highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{translations[lang].feature_barrier}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{translations[lang].feature_moq}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-4 pt-12 md:pt-0 mt-8">
            <button 
              onClick={handleEditInStudio}
              className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>{translations[lang].btn_edit}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="https://wa.me/16264760958?text=Hello,%20I'm%20interested%20in%20a%20pouch%20quote!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-center"
            >
              <span>{translations[lang].btn_whatsapp}</span>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
