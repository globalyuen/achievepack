import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Layers, Box, Database, Tag, Grid } from 'lucide-react';

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
  dieline_image: string;
  glb_file: string;
  dimensions: string;
  description: string;
}

export default function PackageEditorPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // States
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<'pouch' | 'box' | 'bottle' | 'label' | 'other'>('pouch');
  const [layers, setLayers] = useState<Layer[]>([]);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);
  const [width, setWidth] = useState<number>(170);
  const [height, setHeight] = useState<number>(210);
  const [depth, setDepth] = useState<number>(36.4);
  const [unit, setUnit] = useState<string>('mm');
  const [roughness, setRoughness] = useState<number>(0.5);
  const [metalness, setMetalness] = useState<number>(0.1);
  const [showDieline, setShowDieline] = useState<boolean>(true);
  const [modelName, setModelName] = useState<string>('包装模型 (Packaging Model)');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>('正在加載 3D 模型...');

  // Share & Password states
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState<boolean>(false);
  const [shareLink, setShareLink] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState<boolean>(false);
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

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

  // Offscreen canvas for rendering clean textures
  const offscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Default images loaded checks
  const dielineImgRef = useRef<HTMLImageElement | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const dielineLoadedRef = useRef<boolean>(false);
  const logoLoadedRef = useRef<boolean>(false);
  const currentLoadIdRef = useRef<number>(0);

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

  // Filter shapes based on the active tab category
  const filteredShapes = React.useMemo(() => {
    return shapes.filter((shape) => {
      const isBox = shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒');
      const isPouch = shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋');
      const isBottle = shape.keywords.includes('瓶') || shape.keywords.includes('罐') || shape.name.includes('瓶') || shape.name.includes('罐');
      const isLabel = shape.keywords.includes('标签') || shape.keywords.includes('贴纸') || shape.name.includes('标签') || shape.name.includes('貼紙') || shape.keywords.includes('label') || shape.name.toLowerCase().includes('label');
      
      if (activeCategory === 'box') return isBox;
      if (activeCategory === 'pouch') return isPouch;
      if (activeCategory === 'bottle') return isBottle;
      if (activeCategory === 'label') return isLabel;
      if (activeCategory === 'other') return !isBox && !isPouch && !isBottle && !isLabel;
      return true;
    });
  }, [shapes, activeCategory]);

  // Sync canvas dimensions
  const updateEditor = () => {
    if (!dielineLoadedRef.current || !logoLoadedRef.current || !editorCanvasRef.current || !offscreenCanvasRef.current) return;

    const canvas = editorCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const offscreenCanvas = offscreenCanvasRef.current;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    if (!ctx || !offscreenCtx) return;

    const drawSingleLayer = (cContext: CanvasRenderingContext2D, layer: Layer, drawUIOverlay: boolean) => {
      cContext.save();
      cContext.translate(layer.pos.x, layer.pos.y);
      cContext.rotate(layer.rotation * (Math.PI / 180));

      let sX = 1.0;
      let sY = 1.0;
      let sZ = 1.0;
      if (modelRef.current) {
        sX = modelRef.current.scale.x;
        sY = modelRef.current.scale.y;
        sZ = modelRef.current.scale.z;
      }

      // Cosine horizontal scale interpolation to counter-scale depth stretching on the sides
      const angle = (2 * Math.PI * layer.pos.x) / 1000;
      const t = Math.pow(Math.cos(angle), 2);
      const sX_effective = (1 - t) * sX + t * sZ;

      const w = (layer.width * layer.scale) / sX_effective;
      const h = (layer.height * layer.scale) / sY;

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
      if (isPremiumUnlocked || passwordInput === 'ryan') return; // Skip watermark if premium unlocked
      cContext.save();
      cContext.fillStyle = 'rgba(150, 150, 150, 0.22)';
      cContext.font = 'bold 24px sans-serif';
      cContext.textAlign = 'center';
      cContext.textBaseline = 'middle';

      const angle = -Math.PI / 6;
      const stepX = 300;
      const stepY = 180;

      for (let x = -100; x < 1200; x += stepX) {
        for (let y = -100; y < 800; y += stepY) {
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
    offscreenCtx.fillRect(0, 0, 1000, 619);

    if (showDieline && dielineImgRef.current) {
      offscreenCtx.drawImage(dielineImgRef.current, 0, 0, 1000, 619);
    }

    // Draw repeating pattern of AP Logo on skin
    if (!isPremiumUnlocked && passwordInput !== 'ryan' && logoImgRef.current && logoImgRef.current.complete) {
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
            offscreenCtx.fillRect(0, 0, 1000, 619);
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
    ctx.fillRect(0, 0, 1000, 619);

    if (dielineImgRef.current) {
      ctx.drawImage(dielineImgRef.current, 0, 0, 1000, 619);
    }

    layers.forEach(layer => {
      drawSingleLayer(ctx, layer, true);
    });

    drawWatermark(ctx);
  };

  // Sync canvas drawings on state changes
  useEffect(() => {
    updateEditor();
  }, [layers, selectedLayer, showDieline, isPremiumUnlocked, passwordInput]);

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

    const scaleX = targetW / originalSizeRef.current.x;
    const scaleY = targetH / originalSizeRef.current.y;
    const scaleZ = targetD / originalSizeRef.current.z;

    modelRef.current.scale.set(scaleX, scaleY, scaleZ);
    modelRef.current.position.y = -originalBoxRef.current.min.y * scaleY;

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

    updateEditor();
  };

  useEffect(() => {
    updateModelScale();
  }, [width, height, depth, unit]);

  // Initialize ThreeJS on mount
  useEffect(() => {
    if (!containerRef.current) return;

    const widthContainer = containerRef.current.clientWidth;
    const heightContainer = containerRef.current.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
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

      const defaultLayer: Layer = {
        id: 'default-ap-logo',
        img: logoImg,
        name: 'AP Logo (默認)',
        pos: { x: 500, y: 309 },
        scale: 0.5,
        rotation: 0.0,
        width: logoImg.width,
        height: logoImg.height
      };
      setLayers([defaultLayer]);
      setSelectedLayer(defaultLayer);
      updateEditor();
    };
    let logoWidth = 300;
    let logoHeight = 222;
    logoImgRef.current = logoImg;

    // 8. Load default GLB model
    const loader = new GLTFLoader();
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
          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);
          size = originalSizeRef.current;
          center = originalBoxRef.current.getCenter(new THREE.Vector3());
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

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

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
      renderer.dispose();
      canvasTexture.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Shared function to load a packaging shape into the 3D studio scene
  const loadShape = (shape: Shape) => {
    setIsLoading(true);
    setLoadingText('正在下載並解析 3D 模型...');

    const loadId = ++currentLoadIdRef.current;

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
      const isRemoteDieline = shape.dieline_image.startsWith('http') || shape.dieline_image.startsWith('//');
      dielineImgRef.current.src = isRemoteDieline
        ? '/api/proxy?url=' + encodeURIComponent(shape.dieline_image)
        : shape.dieline_image;
      dielineImgRef.current.onload = () => {
        if (loadId !== currentLoadIdRef.current) return;
        dielineLoadedRef.current = true;
        updateEditor();
      };
    }

    // Load new GLTF model
    const loader = new GLTFLoader();
    const isRemoteGlb = shape.glb_file.startsWith('http') || shape.glb_file.startsWith('//');
    const glbUrl = isRemoteGlb
      ? '/api/proxy?url=' + encodeURIComponent(shape.glb_file)
      : shape.glb_file;

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

        originalBoxRef.current.setFromObject(model);
        originalBoxRef.current.getSize(originalSizeRef.current);

        let size = originalSizeRef.current;
        let center = originalBoxRef.current.getCenter(new THREE.Vector3());

        if (size.x < 2.0 && size.y < 2.0) {
          model.scale.set(1000, 1000, 1000);
          originalBoxRef.current.setFromObject(model);
          originalBoxRef.current.getSize(originalSizeRef.current);
          size = originalSizeRef.current;
          center = originalBoxRef.current.getCenter(new THREE.Vector3());
        }

        // Set dimensions inputs
        setUnit('mm');
        setWidth(Math.round(size.x));
        setHeight(Math.round(size.y));
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
          sceneRef.current.children.forEach((child) => {
            if (child instanceof THREE.Group && child !== model) {
              toRemove.push(child);
            }
          });
          toRemove.forEach((child) => {
            sceneRef.current?.remove(child);
            child.traverse((node) => {
              if (node instanceof THREE.Mesh) {
                node.geometry.dispose();
                const mats = Array.isArray(node.material) ? node.material : [node.material];
                mats.forEach(m => m && m.dispose());
              }
            });
          });

          sceneRef.current.add(model);
        }

        // Adjust camera, floor, lights
        if (cameraRef.current && controlsRef.current && floorRef.current && sceneRef.current) {
          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = cameraRef.current.fov * (Math.PI / 180);
          const cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.8;

          cameraRef.current.far = maxDim * 15;
          cameraRef.current.position.set(0, size.y * 0.8, cameraZ);
          cameraRef.current.updateProjectionMatrix();

          controlsRef.current.target.set(0, size.y / 2, 0);
          controlsRef.current.maxDistance = maxDim * 6;
          controlsRef.current.minDistance = maxDim * 0.1;
          controlsRef.current.update();

          const floorSize = maxDim * 8;
          floorRef.current.geometry.dispose();
          floorRef.current.geometry = new THREE.PlaneGeometry(floorSize, floorSize);

          if (gridRef.current) {
            sceneRef.current.remove(gridRef.current);
            gridRef.current.dispose();
          }
          const newGrid = new THREE.GridHelper(floorSize, 50, 0x1f2937, 0x111827);
          newGrid.position.y = 0.001;
          sceneRef.current.add(newGrid);
          gridRef.current = newGrid;

          if (dirLight1Ref.current) {
            dirLight1Ref.current.position.set(maxDim * 1.5, maxDim * 2.5, maxDim * 1.5);
            dirLight1Ref.current.shadow.camera.left = -maxDim * 1.5;
            dirLight1Ref.current.shadow.camera.right = maxDim * 1.5;
            dirLight1Ref.current.shadow.camera.top = maxDim * 1.5;
            dirLight1Ref.current.shadow.camera.bottom = -maxDim * 1.5;
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

        // Reset layers to just default AP logo on shape switch
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

        setModelName(shape.name);
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

  // Auto load shape and shared artwork from URL parameters
  useEffect(() => {
    if (shapes.length === 0) return;
    const searchParams = new URLSearchParams(window.location.search);
    const shapeId = searchParams.get('shape');
    const widthParam = searchParams.get('w');
    const heightParam = searchParams.get('h');
    const pwParam = searchParams.get('pw');
    const artworkParam = searchParams.get('artwork');

    if (pwParam === 'ryan') {
      setIsPremiumUnlocked(true);
      setPasswordInput('ryan');
    }

    if (shapeId) {
      const shape = shapes.find(s => String(s.id) === String(shapeId));
      if (shape) {
        setSelectedShapeId(shape.id);
        loadShape(shape);
        
        if (widthParam) setWidth(Number(widthParam));
        if (heightParam) setHeight(Number(heightParam));

        // Automatically switch active tab category on direct load
        const isBox = shape.keywords.includes('纸盒') || shape.keywords.includes('盒') || shape.name.includes('盒');
        const isPouch = shape.keywords.includes('袋') || shape.keywords.includes('软包装') || shape.name.includes('袋');
        const isBottle = shape.keywords.includes('瓶') || shape.keywords.includes('罐') || shape.name.includes('瓶') || shape.name.includes('罐');
        const isLabel = shape.keywords.includes('标签') || shape.keywords.includes('贴纸') || shape.name.includes('标签') || shape.name.includes('貼紙') || shape.keywords.includes('label') || shape.name.toLowerCase().includes('label');
        
        if (isBox) setActiveCategory('box');
        else if (isPouch) setActiveCategory('pouch');
        else if (isBottle) setActiveCategory('bottle');
        else if (isLabel) setActiveCategory('label');
        else setActiveCategory('other');

        // Load shared artwork if present
        if (artworkParam) {
          const img = new Image();
          img.src = artworkParam;
          img.onload = () => {
            const sharedLayer: Layer = {
              id: 'shared-artwork',
              img,
              name: 'Shared Artwork',
              pos: { x: 500, y: 309 },
              scale: 1.0,
              rotation: 0,
              width: 1000,
              height: 619
            };
            setLayers([sharedLayer]);
            setSelectedLayer(sharedLayer);
          };
        }
      }
    }
  }, [shapes]);

  // Handle Layer Selection and Drag-and-Move on 2D Canvas
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!editorCanvasRef.current) return;
    const rect = editorCanvasRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 1000;
    const clickY = ((e.clientY - rect.top) / rect.height) * 619;

    let sX = 1.0;
    let sY = 1.0;
    let sZ = 1.0;
    if (modelRef.current) {
      sX = modelRef.current.scale.x;
      sY = modelRef.current.scale.y;
      sZ = modelRef.current.scale.z;
    }

    let found = false;
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];

      const angle = (2 * Math.PI * layer.pos.x) / 1000;
      const t = Math.pow(Math.cos(angle), 2);
      const sX_effective = (1 - t) * sX + t * sZ;

      const drawnW = (layer.width * layer.scale) / sX_effective;
      const drawnH = (layer.height * layer.scale) / sY;

      if (clickX >= layer.pos.x - drawnW / 2 && clickX <= layer.pos.x + drawnW / 2 &&
          clickY >= layer.pos.y - drawnH / 2 && clickY <= layer.pos.y + drawnH / 2) {
        setSelectedLayer(layer);
        isDraggingRef.current = true;
        dragOffsetRef.current = { x: clickX - layer.pos.x, y: clickY - layer.pos.y };
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
    const mouseX = ((e.clientX - rect.left) / rect.width) * 1000;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 619;

    const updatedPos = {
      x: mouseX - dragOffsetRef.current.x,
      y: mouseY - dragOffsetRef.current.y
    };

    let sX = 1.0;
    let sY = 1.0;
    let sZ = 1.0;
    if (modelRef.current) {
      sX = modelRef.current.scale.x;
      sY = modelRef.current.scale.y;
      sZ = modelRef.current.scale.z;
    }

    const angle = (2 * Math.PI * updatedPos.x) / 1000;
    const t = Math.pow(Math.cos(angle), 2);
    const sX_effective = (1 - t) * sX + t * sZ;

    const drawnW = (selectedLayer.width * selectedLayer.scale) / sX_effective;
    const drawnH = (selectedLayer.height * selectedLayer.scale) / sY;

    const limitX = drawnW / 2;
    const limitY = drawnH / 2;
    updatedPos.x = Math.max(-limitX, Math.min(1000 + limitX, updatedPos.x));
    updatedPos.y = Math.max(-limitY, Math.min(619 + limitY, updatedPos.y));

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
          pos: { x: 500, y: 309 },
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
    await new Promise(resolve => setTimeout(resolve, 800));

    // Get GLB path for active model
    const activeShape = shapes.find(s => String(s.id) === String(selectedShapeId));
    const rawGlbPath = activeShape ? activeShape.glb_file : '/model.glb';
    const isRemote = rawGlbPath.startsWith('http') || rawGlbPath.startsWith('//');
    const downloadUrl = isRemote
      ? '/api/proxy?url=' + encodeURIComponent(rawGlbPath)
      : rawGlbPath;

    // Trigger download in browser
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = activeShape ? `${activeShape.id}.glb` : 'default-model.glb';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmittingEmail(false);
    setEmailSubmitted(true);
  };

  const generateShareLink = () => {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 500;
    tempCanvas.height = 310;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.fillStyle = '#ffffff';
    tempCtx.fillRect(0, 0, 500, 310);

    layers.forEach(layer => {
      tempCtx.save();
      const drawScale = 0.5;
      tempCtx.translate(layer.pos.x * drawScale, layer.pos.y * drawScale);
      tempCtx.rotate(layer.rotation * (Math.PI / 180));
      const w = layer.width * layer.scale * drawScale;
      const h = layer.height * layer.scale * drawScale;
      tempCtx.drawImage(layer.img, -w / 2, -h / 2, w, h);
      tempCtx.restore();
    });

    const base64Data = tempCanvas.toDataURL('image/jpeg', 0.5);

    const searchParams = new URLSearchParams();
    searchParams.set('shape', selectedShapeId);
    searchParams.set('w', String(width));
    searchParams.set('h', String(height));
    if (isPremiumUnlocked || passwordInput === 'ryan') {
      searchParams.set('pw', 'ryan');
    }
    searchParams.set('artwork', base64Data);

    const fullUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
    setShareLink(fullUrl);
    setIsShareModalOpen(true);
    setCopiedLink(false);
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
    setUnit('mm');
    setWidth(170);
    setHeight(210);
    setDepth(36.4);
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
        originalBoxRef.current.setFromObject(model);
        originalBoxRef.current.getSize(originalSizeRef.current);
        size = originalSizeRef.current;
        center = originalBoxRef.current.getCenter(new THREE.Vector3());
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

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#08090c] text-[#f3f4f6] font-sans antialiased">
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

      {/* Top Bar with Pouch Selector */}
      <header className="h-[140px] w-full flex-shrink-0 bg-[rgba(16,20,28,0.75)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] flex flex-col p-4 shadow-[0_4px_20px_rgba(0,0,0,0.2)] z-20 overflow-hidden">
        {/* Row 1: Logo & Category Tabs */}
        <div className="flex items-center justify-between w-full h-[40px] mb-3">
          <div className="flex items-center gap-2.5 font-bold text-[15px] tracking-wider uppercase text-[#f3f4f6]">
            <svg className="w-5 h-5 fill-[#64ffda]" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="hidden sm:inline">AchievePack 3D Studio</span>
          </div>

          {/* Category Tabs with Icons */}
          <div className="flex items-center bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-xl p-1 gap-1">
            {[
              { id: 'pouch', label: 'Pouch', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'box', label: 'Box', icon: <Box className="w-3.5 h-3.5" /> },
              { id: 'bottle', label: 'Bottle', icon: <Database className="w-3.5 h-3.5" /> },
              { id: 'label', label: 'Label', icon: <Tag className="w-3.5 h-3.5" /> },
              { id: 'other', label: 'Other', icon: <Grid className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#64ffda] text-[#0a192f] font-bold shadow-[0_0_8px_rgba(100,255,218,0.25)]'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Spacer/Utility */}
          <div className="w-[120px] text-right text-[10px] text-neutral-500 font-mono hidden md:block">
            Shapes: {filteredShapes.length}
          </div>
        </div>

        {/* Row 2: Horizontal Scrolling Card Catalogue */}
        <div className="w-full flex-grow overflow-x-auto overflow-y-hidden flex flex-row items-center gap-3 pb-1 custom-scrollbar">
          {activeCategory === 'label' ? (
            <div className="text-xs text-neutral-500 w-full text-center py-2 italic flex items-center justify-center gap-2">
              <Tag className="w-4 h-4 text-[#64ffda] animate-pulse" />
              Custom 3D Labels & Stickers editor specs are coming soon!
            </div>
          ) : filteredShapes.length === 0 ? (
            <div className="text-xs text-neutral-500 w-full text-center py-2 italic">
              No matching shapes found in this category.
            </div>
          ) : (
            filteredShapes.map((shape) => {
              const isSelected = String(shape.id) === String(selectedShapeId);
              const dielineSrc = shape.dieline_image.startsWith('/') ? shape.dieline_image : `/api/proxy?url=${encodeURIComponent(shape.dieline_image)}`;
              const thumbnailSrc = `/thumbnails/${shape.id}.png`;

              return (
                <div
                  key={shape.id}
                  onClick={() => {
                    setSelectedShapeId(shape.id);
                    loadShape(shape);
                  }}
                  className={`w-[128px] h-[128px] flex-shrink-0 rounded-xl border p-1.5 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-[1.05] ${
                    isSelected
                      ? 'bg-[rgba(100,255,218,0.08)] border-[#64ffda] shadow-[0_0_8px_rgba(100,255,218,0.25)] scale-[1.02]'
                      : 'bg-[rgba(0,0,0,0.4)] border-[rgba(255,255,255,0.08)] hover:border-neutral-500'
                  }`}
                  title={shape.name}
                >
                  {/* Thumbnail */}
                  <div className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                    <img
                      src={thumbnailSrc}
                      alt={shape.name}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = dielineSrc;
                      }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </header>

      {/* Main 3-Column Workspace */}
      <div className="flex-grow flex flex-row h-[calc(100vh-140px)] overflow-hidden">
        
        {/* 1. Left Sidebar: Control Panel */}
        <div className="w-[340px] flex-shrink-0 bg-[rgba(16,20,28,0.4)] border-r border-[rgba(255,255,255,0.08)] p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
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
                <option value="mm">Millimeters (mm)</option>
                <option value="inch">Inches (in)</option>
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
              onClick={exportScreenshot}
              className="w-full bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] font-semibold text-[13px] py-2.5 px-4 rounded-lg shadow-lg hover:shadow-[#64ffda]/25 flex items-center justify-center gap-1.5 transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
              </svg>
              Export 3D Snapshot
            </button>
            <button 
              onClick={() => setIsEmailModalOpen(true)}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-[13px] py-2.5 px-4 rounded-lg shadow-lg flex items-center justify-center gap-1.5 transition-all duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
              </svg>
              Download 3D Model (Watermark-Free)
            </button>
            {/* Share Artwork Block */}
            <div className="flex flex-col gap-2 p-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-lg">
              <button 
                onClick={generateShareLink}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold text-[13px] py-2 px-3 rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.8 2.04.8 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.3 2.04-.8l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                </svg>
                Generate Share Link
              </button>
              
              <input 
                type="password"
                placeholder="Enter 'ryan' to remove watermark"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  if (e.target.value === 'ryan') {
                    setIsPremiumUnlocked(true);
                  } else {
                    setIsPremiumUnlocked(false);
                  }
                }}
                className="w-full bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.15)] focus:border-[#64ffda] text-[11px] text-white px-2.5 py-1.5 rounded-lg outline-none transition-all placeholder-neutral-500 text-center"
              />
              {isPremiumUnlocked && (
                <div className="text-[10px] text-emerald-400 font-bold text-center">
                  ✨ Watermarks Disabled (Premium Unlocked)
                </div>
              )}
            </div>

            <button 
              onClick={resetAllValues}
              className="w-full border border-[rgba(255,255,255,0.15)] hover:border-[#f3f4f6] text-[#9ca3af] hover:text-[#f3f4f6] font-semibold text-[13px] py-2.5 px-4 rounded-lg transition-all duration-300"
            >
              Reset Canvas
            </button>
          </div>
        </div>

        {/* 2. Middle Column: 2D Dieline Editor */}
        <div className="flex-grow flex flex-col bg-[rgba(8,9,12,0.6)] p-6 gap-5 overflow-hidden">
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
              className="max-w-full max-h-full aspect-[1000/619] cursor-move object-contain shadow-2xl"
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
            <div className="flex items-center gap-2 mt-1">
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
          </div>
        </div>

        {/* 3. Right Area: 3D Studio Previewer */}
        <div id="viewport-panel" className="w-[450px] flex-shrink-0 border-l border-[rgba(255,255,255,0.08)] relative flex flex-col overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#cbd5e1]">
          <div ref={containerRef} className="flex-grow w-full h-full relative" />
          
          {/* Status Overlay info */}
          <div id="preview-info" className="absolute bottom-4 left-4 right-4 bg-[rgba(16,20,28,0.85)] border border-[rgba(255,255,255,0.08)] rounded-xl py-2.5 px-4 text-xs flex justify-between shadow-2xl backdrop-blur-md">
            <span>Shape: <strong className="text-[#64ffda]">{modelName}</strong></span>
            <span>Active: <strong className="text-[#64ffda]">{selectedLayer ? selectedLayer.name : 'None'}</strong></span>
          </div>
        </div>

      </div>

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

      {/* Share Link Modal */}
      {isShareModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-[#10141e] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-2xl relative text-left">
            <button 
              onClick={() => {
                setIsShareModalOpen(false);
                setShareLink('');
                setCopiedLink(false);
              }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 10.742l5.028-2.933m0 8.366l-5.028-2.933m0 0A3 3 0 108 12a3 3 0 00.684.742zM15 8a3 3 0 11-6 0 3 3 0 016 0zm6 8a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">Share Your 3D Design</h3>
                <p className="text-xs text-neutral-400">
                  Anyone opening this link will see your customized 3D packaging model with your uploaded artwork layers.
                </p>
                {isPremiumUnlocked && (
                  <p className="text-[11px] text-emerald-400 font-bold bg-emerald-950/20 py-1 px-2 rounded-lg border border-emerald-900/30 text-center">
                    🔒 Premium unlocked: Watermark-free display enabled for recipients!
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-neutral-400">Shareable URL</label>
                <div className="flex gap-2">
                  <input 
                    type="text"
                    readOnly
                    value={shareLink}
                    className="flex-grow bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#f3f4f6] px-3 py-2 text-xs outline-none"
                    onClick={(e) => (e.target as HTMLInputElement).select()}
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(shareLink);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="bg-[#64ffda] text-[#08090c] hover:bg-[#52ebd4] font-bold text-xs px-4 py-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    {copiedLink ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => {
                    setIsShareModalOpen(false);
                    setShareLink('');
                    setCopiedLink(false);
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
  );
}
