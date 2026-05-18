import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ThreePouchProps {
  modelUrl: string; // E.g., "/3d/3d-pouch/stand-up-pouch.glb"
  tilt: { x: number; y: number };
  scrollPercent: number; // Normalized scroll progress (0 to 1) from the parent page
  isMobile?: boolean; // Set to true to lock the pouch to the center (0) for local cards
}

export const ThreePouchViewer: React.FC<ThreePouchProps> = ({ modelUrl, tilt, scrollPercent, isMobile = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  const tiltRef = useRef(tilt);
  useEffect(() => {
    tiltRef.current = tilt;
  }, [tilt]);

  const scrollRef = useRef(scrollPercent);
  useEffect(() => {
    scrollRef.current = scrollPercent;
  }, [scrollPercent]);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || 550;
    const height = containerRef.current.clientHeight || 550;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // transparent background

    // 2. Camera setup - set look-down product isometric angle
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 20, 145);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Orbit Controls (silky smooth turntable controls)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // lock zoom
    controls.autoRotate = false; // we drive rotation using scroll + custom delta inside animate()
    
    // Look at center of bag
    controls.target.set(0, 15, 0);

    // Limit vertical rotation bounds so it stays upright standing on the table!
    controls.minPolarAngle = Math.PI / 2.25;
    controls.maxPolarAngle = Math.PI / 1.85;

    // 5. Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Warm main key light
    const dirLightKey = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLightKey.position.set(50, 75, 50);
    dirLightKey.castShadow = true;
    dirLightKey.shadow.mapSize.width = 1024;
    dirLightKey.shadow.mapSize.height = 1024;
    dirLightKey.shadow.bias = -0.0004;
    scene.add(dirLightKey);

    // Cool secondary outline light
    const dirLightRim = new THREE.DirectionalLight(0xe8f4ff, 0.7);
    dirLightRim.position.set(-50, 25, -35);
    scene.add(dirLightRim);

    // 6. Flat Table Floor Drop-Shadow catcher
    const floorGeo = new THREE.PlaneGeometry(350, 350);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -35; // shadow plane base height
    floor.receiveShadow = true;
    scene.add(floor);

    // 7. Load GLTF / GLB Pouch model with Bounding Box Auto-Scaling
    const loader = new GLTFLoader();
    let pouchModel: THREE.Group | null = null;
    let autoScale = 1.0;
    let center = new THREE.Vector3();
    let size = new THREE.Vector3();

    loader.load(
      modelUrl,
      (gltf) => {
        pouchModel = gltf.scene;

        const box = new THREE.Box3().setFromObject(pouchModel);
        box.getSize(size);
        box.getCenter(center);

        // Center coordinates in X and Z plane
        pouchModel.position.x = pouchModel.position.x - center.x;
        pouchModel.position.z = pouchModel.position.z - center.z;

        // Auto scale to perfect dimensions (fitting perfectly in the clean viewport)
        const maxDim = Math.max(size.x, size.y, size.z);
        autoScale = 110 / maxDim; 
        pouchModel.scale.set(autoScale, autoScale, autoScale);

        // Shift model vertically so that the bottom of the pouch rests EXACTLY on floorY (-35)
        const scaledSizeY = size.y * autoScale;
        const floorY = -35;
        pouchModel.position.y = (pouchModel.position.y - center.y) + floorY + (scaledSizeY / 2);

        pouchModel.traverse((node) => {
          if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.visible = true;

            let mat = mesh.material as THREE.MeshStandardMaterial;
            if (!mat || Array.isArray(mat)) {
              mat = new THREE.MeshStandardMaterial({
                color: 0xe8e1d5,
                roughness: 0.44,
                metalness: 0.08
              });
              mesh.material = mat;
            } else {
              mat.roughness = 0.44;
              mat.metalness = 0.08;
              mat.visible = true;
              mat.transparent = false;
              mat.opacity = 1.0;

              if (mat.color && mat.color.r === 0 && mat.color.g === 0 && mat.color.b === 0) {
                const meshName = mesh.name.toLowerCase();
                const isBody = meshName.includes('body') || meshName.includes('pouch') || meshName.includes('bag') || meshName.includes('mesh');
                mat.color.setHex(isBody ? 0xebe3d5 : 0x2d2a24);
              }
            }
          }
        });

        scene.add(pouchModel);
      },
      undefined,
      (error) => {
        console.error('Error loading pouch 3D model:', error);
      }
    );

    // 8. Animation loop with fluid physics interpolation (lerping)
    let animationId: number;
    let currentX = 0;
    let currentScaleMultiplier = 0.65; // Custom 50% smaller size as requested!

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (pouchModel) {
        const sPercent = scrollRef.current;

        // A. Dynamic X-coordinate translation
        let targetX = 0;
        if (!isMobile) {
          // Direct linear interpolation from far right (30) to far left (-30) as scroll progress advances!
          targetX = THREE.MathUtils.lerp(30, -30, sPercent);
        } else {
          targetX = 0;
        }

        // B. Dynamic size scaling
        let targetScaleMultiplier = 0.65;
        if (!isMobile) {
          // Makes the model slightly larger/smaller depending on scroll depth
          targetScaleMultiplier = THREE.MathUtils.lerp(0.65, 0.58, sPercent);
        } else {
          targetScaleMultiplier = 0.65;
        }

        // Damping/Interpolating translations for ultra-fluid movement
        currentX += (targetX - currentX) * 0.08;
        currentScaleMultiplier += (targetScaleMultiplier - currentScaleMultiplier) * 0.08;

        // Apply dynamic standard scale combined with scroll multiplier
        const activeScale = autoScale * currentScaleMultiplier;
        pouchModel.scale.set(activeScale, activeScale, activeScale);

        // Apply scroll sliding position
        pouchModel.position.x = currentX;

        // C. Dynamic rotation from right to left driven by scroll progress (50% slower spin!)
        const scrollRotationY = sPercent * Math.PI * 2; // up to one full 360-degree spin
        const autoRotateY = (Date.now() * 0.0003) % (Math.PI * 2);

        // Apply interactive mouse cursor tilt + dynamic scroll spin
        pouchModel.rotation.y = (tiltRef.current.x * 0.0035) + scrollRotationY + autoRotateY;
        pouchModel.rotation.x = (tiltRef.current.y * 0.0035) + (sPercent * 0.18);
        pouchModel.rotation.z = Math.sin(sPercent * Math.PI) * 0.08; // graceful natural sway
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 9. Window resize support
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl, isMobile]);

  return <div ref={containerRef} className="w-full h-full relative animate-fade-in" />;
};
