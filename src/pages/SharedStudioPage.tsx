import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { 
  Sparkles, Edit3, ArrowRight, Package, Box, HelpCircle, Check, Loader2,
  Lock, Unlock, MessageSquare, Send, Image as ImageIcon, Trash2, Save, Play, Film
} from 'lucide-react';
import NotFoundPage from './NotFoundPage';
import { supabase, uploadWithTus } from '../lib/supabase';

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

const createColaCanModel = () => {
  const canGroup = new THREE.Group();
  canGroup.name = 'cola-can-reference';

  // Standard 355ml can: 66mm diameter (33mm radius), 122mm height
  const bodyGeom = new THREE.CylinderGeometry(33, 33, 122, 32);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.35,
    metalness: 0.10,
  });
  const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
  bodyMesh.position.y = 61; // Half of height to rest on floor
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  canGroup.add(bodyMesh);

  // Rims (Shiny aluminum)
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    roughness: 0.2,
    metalness: 0.85,
  });
  
  // Top Rim
  const topRimGeom = new THREE.CylinderGeometry(33.5, 33, 4, 32);
  const topRim = new THREE.Mesh(topRimGeom, rimMat);
  topRim.position.y = 120;
  topRim.castShadow = true;
  canGroup.add(topRim);

  // Bottom Rim
  const bottomRimGeom = new THREE.CylinderGeometry(33, 33.5, 4, 32);
  const bottomRim = new THREE.Mesh(bottomRimGeom, rimMat);
  bottomRim.position.y = 2;
  bottomRim.castShadow = true;
  canGroup.add(bottomRim);

  // Pull Tab
  const tabGeom = new THREE.BoxGeometry(10, 2, 20);
  const tab = new THREE.Mesh(tabGeom, rimMat);
  tab.position.set(0, 122, 10);
  tab.rotation.x = 0.05;
  tab.castShadow = true;
  canGroup.add(tab);

  // ---- 3D Dimension Arrows & Labels ----
  const arrowColor = 0x64ffda; // matching neon cyan theme

  // 1. Height Arrow (Vertical)
  const heightArrowGroup = new THREE.Group();
  
  // Upward arrow
  const arrowUp = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(45, 61, 0),
    61,
    arrowColor,
    8,
    4
  );
  // Downward arrow
  const arrowDown = new THREE.ArrowHelper(
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(45, 61, 0),
    61,
    arrowColor,
    8,
    4
  );
  heightArrowGroup.add(arrowUp);
  heightArrowGroup.add(arrowDown);
  
  // Height Dimension line backer
  const lineGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(45, 0, 0),
    new THREE.Vector3(45, 122, 0)
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
  heightLabelSprite.position.set(75, 61, 0);
  heightArrowGroup.add(heightLabelSprite);
  canGroup.add(heightArrowGroup);

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
  canGroup.add(diaArrowGroup);

  return canGroup;
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
  
  // Admin & Editing states
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem(`shared_studio_admin_${slug}`) === 'true';
  });
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return sessionStorage.getItem(`shared_studio_pass_${slug}`) || '';
  });
  const [isCustomer, setIsCustomer] = useState<boolean>(() => {
    return sessionStorage.getItem(`shared_studio_customer_${slug}`) === 'true';
  });
  const [customerPassword, setCustomerPassword] = useState<string>(() => {
    return sessionStorage.getItem(`shared_studio_customer_pass_${slug}`) || '';
  });
  const [customerPasswordInput, setCustomerPasswordInput] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [savingSettings, setSavingSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'edit' | 'discussion'>('preview');
  const [isPouchOrLabel, setIsPouchOrLabel] = useState<boolean>(true);

  // Dimension & Material states
  const [width, setWidth] = useState<number>(170);
  const [height, setHeight] = useState<number>(210);
  const [depth, setDepth] = useState<number>(36.4);
  const [unit, setUnit] = useState<string>('mm');
  const [roughness, setRoughness] = useState<number>(0.5);
  const [metalness, setMetalness] = useState<number>(0.1);

  // Discussion & Chat states
  const [discussion, setDiscussion] = useState<any[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [uploadingMedia, setUploadingMedia] = useState(false);

  // Reference can ref and show state
  const [showReferenceCan, setShowReferenceCan] = useState<boolean>(true);
  const canRef = useRef<THREE.Group | null>(null);
  const unscaledSizeRef = useRef<THREE.Vector3>(new THREE.Vector3());
  
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
          setWidth(data.designData.width || 170);
          setHeight(data.designData.height || 210);
          setDepth(data.designData.depth || 36.4);
          setUnit(data.designData.unit || 'mm');
          setRoughness(data.designData.roughness ?? 0.5);
          setMetalness(data.designData.metalness ?? 0.1);
          setDiscussion(data.designData.discussion || []);
          setCustomerPasswordInput(data.designData.customerPassword || '');
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
          unscaledSizeRef.current.copy(size);
 
          // Scale model dimensions based on design data
          const designW = design.width || Math.round(size.x);
          const designH = design.height || Math.round(size.y);
          const designD = design.depth || Math.round(size.z);
          
          const targetW_mm = (design.unit === 'inch') ? designW * 25.4 : designW;
          const targetH_mm = (design.unit === 'inch') ? designH * 25.4 : designH;
          const targetD_mm = (design.unit === 'inch') ? designD * 25.4 : designD;
 
          const scaleX = (targetW_mm / size.x) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          const scaleY = (targetH_mm / size.y) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          const scaleZ = (targetD_mm / size.z) * (scaleFactorRef.current === 1000 ? 1000 : 1);
          model.scale.set(scaleX, scaleY, scaleZ);
          modelScaleRef.current = { x: scaleX, y: scaleY };
 
          // Keep offscreen canvas at natural dieline dimensions, conditionally scaled for pouches/labels
          const isPouch = currentShape ? currentShape.category === 'Pouch' : true;
          const isLabel = currentShape ? currentShape.category === 'Label' : false;
          const isFlat = isPouch || isLabel;
          setIsPouchOrLabel(isFlat);

          const naturalW = dielineImg.naturalWidth || 1000;
          const naturalH = dielineImg.naturalHeight || 619;
          const sX = isFlat ? scaleX / (scaleFactorRef.current === 1000 ? 1000 : 1) : 1.0;
          const sY = isFlat ? scaleY / (scaleFactorRef.current === 1000 ? 1000 : 1) : 1.0;
          if (offscreenCanvasRef.current) {
            offscreenCanvasRef.current.width = Math.round(naturalW * sX);
            offscreenCanvasRef.current.height = Math.round(naturalH * sY);
          }
 
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
                  if ('roughness' in mat) (mat as any).roughness = design.roughness ?? 0.5;
                  if ('metalness' in mat) (mat as any).metalness = design.metalness ?? 0.1;
                  mat.needsUpdate = true;
                });
              }
            }
          });

          scene.add(model);

          // Add standard 355ml reference can next to the model
          const canModel = createColaCanModel();
          canModel.position.set((targetW_mm / 2) + 50, 0, 0);
          canModel.visible = showReferenceCan;
          scene.add(canModel);
          canRef.current = canModel;

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

  // Update reference can visibility dynamically
  useEffect(() => {
    if (canRef.current) {
      canRef.current.visible = showReferenceCan;
    }
  }, [showReferenceCan]);

  const updateModelProperties = (w: number, h: number, d: number, u: string, r: number, m: number) => {
    if (!modelRef.current || !unscaledSizeRef.current.x) return;

    let targetW = w;
    let targetH = h;
    let targetD = d;

    if (u === 'inch') {
      targetW *= 25.4;
      targetH *= 25.4;
      targetD *= 25.4;
    }

    const scaleX = (targetW / unscaledSizeRef.current.x) * (scaleFactorRef.current === 1000 ? 1000 : 1);
    const scaleY = (targetH / unscaledSizeRef.current.y) * (scaleFactorRef.current === 1000 ? 1000 : 1);
    const scaleZ = (targetD / unscaledSizeRef.current.z) * (scaleFactorRef.current === 1000 ? 1000 : 1);

    modelRef.current.scale.set(scaleX, scaleY, scaleZ);
    modelScaleRef.current = { x: scaleX, y: scaleY };

    // Update position so model sits on the floor grid
    const relativeScaleY = targetH / unscaledSizeRef.current.y;
    modelRef.current.position.y = -originalBoxRef.current.min.y * relativeScaleY;

    // Update controls target to center of scaled model height
    if (controlsRef.current) {
      controlsRef.current.target.set(0, targetH / 2, 0);
      controlsRef.current.update();
    }

    // Update materials roughness and metalness
    modelRef.current.traverse((node) => {
      if (node instanceof THREE.Mesh && node.material) {
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        mats.forEach(mat => {
          if ('roughness' in mat) (mat as any).roughness = r;
          if ('metalness' in mat) (mat as any).metalness = m;
          mat.needsUpdate = true;
        });
      }
    });

    // Update reference can position dynamically
    if (canRef.current) {
      canRef.current.position.x = (targetW / 2) + 50;
    }
  };

  const updateTextureSizeAndRebuild = async (w: number, h: number, u: string) => {
    if (!offscreenCanvasRef.current || !unscaledSizeRef.current.x || !dielineImgRef.current) return;

    let targetW = w;
    let targetH = h;
    if (u === 'inch') {
      targetW *= 25.4;
      targetH *= 25.4;
    }

    const sX = isPouchOrLabel ? targetW / unscaledSizeRef.current.x : 1.0;
    const sY = isPouchOrLabel ? targetH / unscaledSizeRef.current.y : 1.0;

    const naturalW = dielineImgRef.current.naturalWidth || 1000;
    const naturalH = dielineImgRef.current.naturalHeight || 619;

    const targetCanvasW = Math.round(naturalW * sX);
    const targetCanvasH = Math.round(naturalH * sY);

    const offscreenCanvas = offscreenCanvasRef.current;
    if (offscreenCanvas.width !== targetCanvasW || offscreenCanvas.height !== targetCanvasH) {
      offscreenCanvas.width = targetCanvasW;
      offscreenCanvas.height = targetCanvasH;

      // Dispose of old texture to prevent WebGL context memory leaks
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
      if (modelRef.current) {
        modelRef.current.traverse((node) => {
          if (node instanceof THREE.Mesh && node.material) {
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
    }

    // Re-draw layers onto offscreen canvas texture
    await applyLayersToTexture(designData?.layers || []);
  };

  const saveAdminChanges = async () => {
    if (!slug) return;
    setSavingSettings(true);
    try {
      const updatedDesignData = {
        ...designData,
        width,
        height,
        depth,
        unit,
        roughness,
        metalness,
        discussion,
        customerPassword: customerPasswordInput
      };

      const res = await fetch('/api/update-custom-studio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slug,
          password: adminPassword,
          companyName,
          designData: updatedDesignData
        })
      });

      const data = await res.json();
      if (data.success) {
        setDesignData(updatedDesignData);
        alert('Specification changes saved successfully!');
      } else {
        alert(data.error || 'Failed to save changes.');
      }
    } catch (err) {
      console.error('Error saving admin changes:', err);
      alert('Error saving changes. Please try again.');
    } finally {
      setSavingSettings(false);
    }
  };

  const saveDiscussionToDb = async (updatedDiscussion: any[]) => {
    try {
      const activePassword = isAdmin ? adminPassword : customerPassword;
      const res = await fetch('/api/save-studio-discussion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slug,
          password: activePassword,
          discussion: updatedDiscussion
        })
      });
      const data = await res.json();
      if (!data.success) {
        console.error('Failed to auto-save discussion to database:', data.error);
      }
    } catch (err) {
      console.error('Error saving discussion:', err);
    }
  };

  const sendChatMessage = async () => {
    if (!chatMessage.trim()) return;
    setSendingMessage(true);
    try {
      const newMsg = {
        author: isAdmin ? 'Admin' : 'Client',
        message: chatMessage.trim(),
        timestamp: new Date().toISOString()
      };

      const updatedDiscussion = [...discussion, newMsg];
      setDiscussion(updatedDiscussion);
      setChatMessage('');

      await saveDiscussionToDb(updatedDiscussion);
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Error sending message.');
    } finally {
      setSendingMessage(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingMedia(true);
    try {
      const filePath = `studios/${slug}/${Date.now()}_${file.name}`;
      await uploadWithTus('artworks', filePath, file);
      
      const fileUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/artworks/${filePath}`;
      const isVideo = file.type.startsWith('video/');

      const newMsg = {
        author: isAdmin ? 'Admin' : 'Client',
        message: `Uploaded a ${isVideo ? 'video' : 'photo'} attachment: ${file.name}`,
        timestamp: new Date().toISOString(),
        fileUrl,
        fileType: isVideo ? 'video' : 'image'
      };

      const updatedDiscussion = [...discussion, newMsg];
      setDiscussion(updatedDiscussion);

      await saveDiscussionToDb(updatedDiscussion);
    } catch (err) {
      console.error('File upload failed:', err);
      alert('File upload failed. Please try again.');
    } finally {
      setUploadingMedia(false);
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
      const sX = isPouchOrLabel ? modelScaleRef.current.x / (scaleFactorRef.current === 1000 ? 1000 : 1) : 1.0;
      const sY = isPouchOrLabel ? modelScaleRef.current.y / (scaleFactorRef.current === 1000 ? 1000 : 1) : 1.0;

      ctx.translate(layer.pos.x * sX, layer.pos.y * sY);
      ctx.rotate((layer.rotation || 0) * (Math.PI / 180));

      const w = (layer.width || layer.img.width) * (layer.scale || 1.0);
      const h = (layer.height || layer.img.height) * (layer.scale || 1.0);

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

  const isUnlocked = isAdmin || isCustomer;

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
          {/* Admin/Customer Unlock Trigger */}
          <button 
            onClick={() => {
              if (isUnlocked) {
                setIsAdmin(false);
                setIsCustomer(false);
                setAdminPassword('');
                setCustomerPassword('');
                sessionStorage.removeItem(`shared_studio_admin_${slug}`);
                sessionStorage.removeItem(`shared_studio_pass_${slug}`);
                sessionStorage.removeItem(`shared_studio_customer_${slug}`);
                sessionStorage.removeItem(`shared_studio_customer_pass_${slug}`);
                setActiveTab('preview');
                alert('Logged out.');
              } else {
                setIsLoginModalOpen(true);
              }
            }}
            className={`p-2 rounded-xl border transition-all ${
              isUnlocked 
                ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' 
                : 'bg-white/10 border-white/10 text-white/70 hover:text-white hover:bg-white/20'
            }`}
            title={isUnlocked ? "Lock Panel" : "Enter Passcode"}
          >
            {isUnlocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
          </button>

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

      {/* Passcode Authentication Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="w-full max-w-sm bg-slate-900/90 border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                Enter Passcode
              </h3>
              <button 
                onClick={() => {
                  setIsLoginModalOpen(false);
                  setPasswordInput('');
                  setLoginError('');
                }}
                className="text-white/40 hover:text-white text-sm cursor-pointer"
              >
                Cancel
              </button>
            </div>
            
            <p className="text-white/60 text-xs leading-relaxed">
              Please enter your passcode to unlock the panel.
            </p>

            <div className="flex flex-col gap-1.5">
              <input 
                type="password"
                placeholder="Passcode"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setLoginError('');
                }}
                className="w-full bg-white/[0.05] border border-white/10 rounded-xl text-white px-3 py-2 text-sm outline-none text-center font-mono tracking-widest"
              />
              {loginError && <p className="text-red-400 text-xs font-semibold">{loginError}</p>}
            </div>

            <button
              onClick={() => {
                const isPassAdmin = passwordInput === '8888****';
                const isPassCustomer = designData?.customerPassword && passwordInput === designData.customerPassword;

                if (isPassAdmin) {
                  setIsAdmin(true);
                  setIsCustomer(true);
                  setAdminPassword(passwordInput);
                  sessionStorage.setItem(`shared_studio_admin_${slug}`, 'true');
                  sessionStorage.setItem(`shared_studio_pass_${slug}`, passwordInput);
                  setIsLoginModalOpen(false);
                  setPasswordInput('');
                  setActiveTab('edit');
                  alert('Unlocked Admin Console');
                } else if (isPassCustomer) {
                  setIsCustomer(true);
                  setIsAdmin(false);
                  setCustomerPassword(passwordInput);
                  sessionStorage.setItem(`shared_studio_customer_${slug}`, 'true');
                  sessionStorage.setItem(`shared_studio_customer_pass_${slug}`, passwordInput);
                  setIsLoginModalOpen(false);
                  setPasswordInput('');
                  setActiveTab('discussion');
                  alert('Unlocked Discussion Thread');
                } else {
                  setLoginError('Invalid passcode.');
                }
              }}
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-bold rounded-xl text-sm transition-all cursor-pointer"
            >
              Unlock
            </button>
          </div>
        </div>
      )}

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
          
          <div className="space-y-6 mt-12 md:mt-20">
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

            {/* Sidebar Tab Swapper */}
            <div className="flex border-b border-white/5 pb-0.5 mb-6">
              <button 
                onClick={() => setActiveTab(isAdmin ? 'edit' : 'preview')}
                className={`flex-1 pb-3 text-sm font-bold text-center tracking-wide border-b-2 transition-all cursor-pointer ${
                  activeTab === 'preview' || activeTab === 'edit'
                    ? 'border-emerald-400 text-white'
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                {isAdmin ? 'Edit Specs (修改規格)' : 'Specifications (規格詳情)'}
              </button>
              <button 
                onClick={() => setActiveTab('discussion')}
                className={`flex-1 pb-3 text-sm font-bold text-center tracking-wide border-b-2 transition-all relative cursor-pointer ${
                  activeTab === 'discussion'
                    ? 'border-emerald-400 text-white'
                    : 'border-transparent text-white/40 hover:text-white'
                }`}
              >
                <span>Discussion (留言討論)</span>
                {isUnlocked && discussion.length > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-extrabold">
                    {discussion.length}
                  </span>
                )}
                {!isUnlocked && <Lock className="w-3.5 h-3.5 ml-1.5 inline-block text-white/40" />}
              </button>
            </div>

            {/* Tab 1: Specs Preview (Customer mode) */}
            {activeTab === 'preview' && designData && (
              <div className="space-y-5 animate-fadeIn">
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
                      {width} × {height} {unit}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].gusset}</span>
                    <span className="text-sm font-bold text-white">
                      {depth} {unit}
                    </span>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col">
                    <span className="text-white/40 text-xs font-semibold mb-1">{translations[lang].material}</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {translations[lang].compostable}
                    </span>
                  </div>
                </div>

                {/* Show Reference Can Toggle for Client */}
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <input 
                    type="checkbox" 
                    id="client-show-reference-can" 
                    checked={showReferenceCan}
                    onChange={(e) => setShowReferenceCan(e.target.checked)}
                    className="accent-emerald-400 cursor-pointer h-4 w-4"
                  />
                  <div className="flex flex-col gap-0.5">
                    <label htmlFor="client-show-reference-can" className="text-xs text-white/80 font-bold cursor-pointer select-none">
                      Show 355ml Reference Can (易開罐比例對比)
                    </label>
                    <span className="text-[10px] text-white/40">
                      Can ref: 2.6" x 4.8" (66mm x 122mm)
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

            {/* Tab 2: Edit Specs (Admin mode) */}
            {activeTab === 'edit' && isAdmin && (
              <div className="space-y-4 animate-fadeIn">
                {/* Unit Selection */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider">Default Unit (預設單位)</label>
                  <select 
                    value={unit} 
                    onChange={(e) => {
                      const newUnit = e.target.value;
                      const isInch = newUnit === 'inch';
                      setUnit(newUnit);
                      if (isInch) {
                        setWidth(w => parseFloat((w / 25.4).toFixed(2)));
                        setHeight(h => parseFloat((h / 25.4).toFixed(2)));
                        setDepth(d => parseFloat((d / 25.4).toFixed(2)));
                        updateModelProperties(width / 25.4, height / 25.4, depth / 25.4, 'inch', roughness, metalness);
                        updateTextureSizeAndRebuild(width / 25.4, height / 25.4, 'inch');
                      } else {
                        setWidth(w => Math.round(w * 25.4));
                        setHeight(h => Math.round(h * 25.4));
                        setDepth(d => parseFloat((d * 25.4).toFixed(1)));
                        updateModelProperties(width * 25.4, height * 25.4, depth * 25.4, 'mm', roughness, metalness);
                        updateTextureSizeAndRebuild(width * 25.4, height * 25.4, 'mm');
                      }
                    }}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white px-3 py-2 text-sm outline-none cursor-pointer"
                  >
                    <option value="inch" className="bg-slate-900 text-white">Inches (in)</option>
                    <option value="mm" className="bg-slate-900 text-white">Millimeters (mm)</option>
                  </select>
                </div>

                {/* Dimensions inputs */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Width</label>
                    <input 
                      type="number" 
                      step="any"
                      value={width} 
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setWidth(val);
                        updateModelProperties(val, height, depth, unit, roughness, metalness);
                        updateTextureSizeAndRebuild(val, height, unit);
                      }}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white px-2 py-1.5 text-center text-sm font-mono outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Height</label>
                    <input 
                      type="number" 
                      step="any"
                      value={height} 
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setHeight(val);
                        updateModelProperties(width, val, depth, unit, roughness, metalness);
                        updateTextureSizeAndRebuild(width, val, unit);
                      }}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white px-2 py-1.5 text-center text-sm font-mono outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Depth</label>
                    <input 
                      type="number" 
                      step="any"
                      value={depth} 
                      onChange={(e) => {
                        const val = parseFloat(e.target.value) || 0;
                        setDepth(val);
                        updateModelProperties(width, height, val, unit, roughness, metalness);
                      }}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white px-2 py-1.5 text-center text-sm font-mono outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                {/* Shaders Roughness & Metalness */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60 font-medium">Roughness (材質粗糙度)</span>
                      <span className="text-emerald-400 font-bold">{roughness.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      value={roughness} 
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setRoughness(val);
                        updateModelProperties(width, height, depth, unit, val, metalness);
                      }}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60 font-medium">Metalness (金屬質感)</span>
                      <span className="text-emerald-400 font-bold">{metalness.toFixed(2)}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      value={metalness} 
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setMetalness(val);
                        updateModelProperties(width, height, depth, unit, roughness, val);
                      }}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Reference Can controls */}
                <div className="flex items-center gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    id="show-reference-can" 
                    checked={showReferenceCan}
                    onChange={(e) => setShowReferenceCan(e.target.checked)}
                    className="accent-emerald-400 cursor-pointer h-4 w-4"
                  />
                  <div className="flex flex-col gap-0.5">
                    <label htmlFor="show-reference-can" className="text-xs text-white/80 font-bold cursor-pointer select-none">
                      Show 355ml Reference Can (易開罐比例對比)
                    </label>
                    <span className="text-[10px] text-white/40">
                      Can ref: 2.6" x 4.8" (66mm x 122mm)
                    </span>
                  </div>
                </div>

                {/* Customer Passcode configuration */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-wider">
                    Customer Passcode (客戶專屬密碼)
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter passcode for customer"
                    value={customerPasswordInput}
                    onChange={(e) => setCustomerPasswordInput(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl text-white px-3 py-2 text-sm outline-none focus:border-emerald-400 font-mono"
                  />
                  <p className="text-[10px] text-white/45 leading-normal">
                    Customers will enter this code to access discussion thread, remarks, and upload files.
                  </p>
                </div>

                {/* Save settings Button */}
                <button 
                  onClick={saveAdminChanges}
                  disabled={savingSettings}
                  className="w-full mt-4 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 active:bg-emerald-700 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:scale-[1.02] cursor-pointer text-sm"
                >
                  {savingSettings ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : <Save className="w-4.5 h-4.5" />}
                  <span>Save Spec Changes (儲存修改)</span>
                </button>
              </div>
            )}

            {/* Tab 3: Discussion Chat */}
            {activeTab === 'discussion' && (
              <>
                {!isUnlocked ? (
                  /* Lock state message when discussion is locked */
                  <div className="flex flex-col items-center justify-center p-8 text-center text-white/50 gap-4 min-h-[250px] animate-fadeIn">
                    <Lock className="w-10 h-10 text-white/40" />
                    <div>
                      <p className="text-sm font-bold text-white">Discussion Thread Locked</p>
                      <p className="text-xs text-white/40 mt-1">Please enter the passcode to view comments and add remarks.</p>
                    </div>
                    <button 
                      onClick={() => setIsLoginModalOpen(true)}
                      className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs transition-all cursor-pointer"
                    >
                      Enter Passcode
                    </button>
                  </div>
                ) : (
                  /* Chat interface when unlocked */
                  <div className="flex flex-col gap-4 animate-fadeIn">
                    {/* Chat Message List */}
                    <div className="max-h-[320px] overflow-y-auto space-y-3 pr-1 min-h-[120px] flex flex-col justify-end">
                      {discussion.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center p-8 text-center text-white/30 text-xs">
                          <MessageSquare className="w-8 h-8 mb-2 opacity-50" />
                          <p>No remarks or comments yet.</p>
                          <p className="mt-1 font-semibold">Start the discussion below!</p>
                        </div>
                      ) : (
                        discussion.map((msg, idx) => {
                          const isOwn = (isAdmin && msg.author === 'Admin') || (!isAdmin && msg.author === 'Client');
                          const authorName = msg.author === 'Admin' ? 'Achieve Pack' : 'Client';

                          return (
                            <div key={idx} className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                              <div className={`px-3 py-2 rounded-2xl max-w-[85%] text-left shadow-sm ${
                                isOwn 
                                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-white rounded-tr-none'
                                  : 'bg-white/[0.04] border border-white/5 text-white/90 rounded-tl-none'
                              }`}>
                                <div className="flex items-center gap-1.5 mb-1 justify-between">
                                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                                    {authorName}
                                  </span>
                                  <span className="text-[9px] text-white/30 font-medium">
                                    {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                  </span>
                                </div>
                                
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>

                                {/* Render Attachment */}
                                {msg.fileUrl && (
                                  <div className="mt-2 rounded-xl overflow-hidden border border-white/5 bg-slate-950/40 max-w-full">
                                    {msg.fileType === 'video' ? (
                                      <video src={msg.fileUrl} controls className="max-h-40 w-full object-cover" />
                                    ) : (
                                      <img 
                                        src={msg.fileUrl} 
                                        alt="Chat attachment" 
                                        className="max-h-40 w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" 
                                        onClick={() => window.open(msg.fileUrl, '_blank')}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Input Controls */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5 mt-auto">
                      <input 
                        type="text" 
                        placeholder={isAdmin ? "Type admin reply..." : "Type client message..."}
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') sendChatMessage();
                        }}
                        className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl text-white px-3.5 py-2 text-sm outline-none focus:border-emerald-400 font-medium"
                      />

                      {/* Upload File button */}
                      <label className="p-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/70 hover:text-white rounded-xl cursor-pointer flex items-center justify-center transition-all disabled:opacity-50 h-9 w-9">
                        {uploadingMedia ? <Loader2 className="w-4 h-4 animate-spin text-emerald-400" /> : <ImageIcon className="w-4 h-4" />}
                        <input 
                          type="file" 
                          accept="image/*,video/*" 
                          className="hidden" 
                          onChange={handleFileUpload} 
                          disabled={uploadingMedia} 
                        />
                      </label>

                      {/* Send chat message button */}
                      <button 
                        onClick={sendChatMessage}
                        disabled={sendingMessage || !chatMessage.trim()}
                        className="p-2.5 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/40 text-slate-950 rounded-xl flex items-center justify-center transition-all cursor-pointer h-9 w-9"
                      >
                        {sendingMessage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </>
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
