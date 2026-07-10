import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCcw, BoxSelect } from 'lucide-react';

interface ThreePouchProps {
  modelUrl: string; // E.g., "/3d/3d-pouch/stand-up-pouch.glb"
  tilt: { x: number; y: number };
  scrollPercent: number; // Normalized scroll progress (0 to 1) from the parent page
  isMobile?: boolean; // Set to true to lock the pouch to the center (0) for local cards
}

export const ThreePouchViewer: React.FC<ThreePouchProps> = ({ modelUrl, tilt, scrollPercent, isMobile = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  const handleViewBottom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cameraRef.current && controlsRef.current) {
      // Position camera lower on Y and closer, looking up to reveal the base!
      cameraRef.current.position.set(0, -85, 110);
      controlsRef.current.update();
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cameraRef.current && controlsRef.current) {
      // Return to starting isometric standing perspective
      cameraRef.current.position.set(0, 20, 145);
      controlsRef.current.update();
    }
  };

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
    
    // Set touch action to pan-y so vertical swipes scroll page, while horizontal swipes rotate pouch
    renderer.domElement.style.touchAction = 'pan-y';
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // 4. Orbit Controls (silky smooth turntable controls)
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // lock zoom
    controls.autoRotate = false; // we drive rotation using scroll + custom delta inside animate()
    
    // Look at center of bag
    controls.target.set(0, 15, 0);

    // Limit vertical rotation bounds so it stays upright but can be tilted all the way down and up to see the bottom!
    controls.minPolarAngle = 0.01;
    controls.maxPolarAngle = Math.PI - 0.01;

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

    // Soft bottom directional fill light pointing upwards to illuminate bottom folds
    const dirLightBottom = new THREE.DirectionalLight(0xffffff, 0.95);
    dirLightBottom.position.set(0, -100, 0);
    scene.add(dirLightBottom);

    // 6. Flat Table Floor Drop-Shadow catcher
    const floorGeo = new THREE.PlaneGeometry(350, 350);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -35; // shadow plane base height
    floor.receiveShadow = true;
    scene.add(floor);

    // 7. Dynamic GLTF / GLB Loader (supports single model OR the whole 'family' group!)
    const isFamily = modelUrl === 'family';
    // coffee-pouch.glb is a tall model — use a smaller target fill size so it fits in the viewport
    const isCoffeePouch = modelUrl.includes('coffee-pouch');
    const isSpoutedPouch = modelUrl.includes('spouted-pouch');
    const urls = isFamily ? [
      { path: '/3d/3d-pouch/spouted-pouch.glb', x: -36, z: -5, scale: 0.54, ry: 0, spinSpeed: 0.00075 }, // 40% smaller (0.9 * 0.6)
      { path: '/3d/3d-pouch/coffee-pouch.glb', x: 36, z: -5, scale: 0.75, ry: 0, spinSpeed: 0.0003 }
    ] : [
      { path: modelUrl, x: 0, z: 0, scale: isSpoutedPouch ? 0.6 : (isCoffeePouch ? 0.78 : 1.0), ry: 0, spinSpeed: 0.0004 }
    ];

    const loader = new GLTFLoader();
    const masterPouchGroup = new THREE.Group();
    scene.add(masterPouchGroup);
    
    const mixers: THREE.AnimationMixer[] = [];
    const clock = new THREE.Clock();

    urls.forEach((item) => {
      loader.load(
        item.path,
        (gltf) => {
          const loadedModel = gltf.scene;

          const box = new THREE.Box3().setFromObject(loadedModel);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          box.getSize(size);
          box.getCenter(center);

          // Center coordinate inside its local pivot in X and Z
          loadedModel.position.x = -center.x;
          loadedModel.position.z = -center.z;

          // Auto scale to standardize native size
          // coffee-pouch.glb is taller than other models — use a smaller fill target so it stays in frame
          const isThisCoffeePouch = item.path.includes('coffee-pouch');
          const targetFillSize = isThisCoffeePouch ? 85 : 110;
          const maxDim = Math.max(size.x, size.y, size.z);
          const autoScale = targetFillSize / maxDim;
          
          // Apply local model scale multiplier
          const activeLocalScale = autoScale * item.scale;
          loadedModel.scale.set(activeLocalScale, activeLocalScale, activeLocalScale);

          // Position locally resting on the floor plane
          // Coffee pouch sits a bit lower so it clears the top of the 3D viewport
          const scaledSizeY = size.y * activeLocalScale;
          const floorY = isThisCoffeePouch ? -42 : -35;
          
          // Align bottom of bag exactly to floorY, then apply custom local relative offset positions
          loadedModel.position.y = (loadedModel.position.y - center.y) + floorY + (scaledSizeY / 2);
          
          // Apply custom offset positions for family grouping
          loadedModel.position.x += item.x;
          loadedModel.position.z += item.z;
          
          // Apply custom local rotation to face inward beautifully
          loadedModel.rotation.y = item.ry;

          // Store individual spin parameters inside the 3D model container's userData dictionary
          loadedModel.userData = {
            baseRy: item.ry,
            spinSpeed: item.spinSpeed
          };

          loadedModel.traverse((node) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;
              mesh.castShadow = true;
              mesh.receiveShadow = true;
              mesh.visible = true;

              let mat = mesh.material as THREE.MeshStandardMaterial;
              if (!mat || Array.isArray(mat)) {
                mat = new THREE.MeshStandardMaterial({
                  color: 0xffffff,
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
              }

              // Clear all material maps to avoid trademark/patent issues
              mat.map = null;
              mat.normalMap = null;
              mat.roughnessMap = null;
              mat.metalnessMap = null;
              mat.bumpMap = null;
              mat.displacementMap = null;
              mat.emissiveMap = null;

              if (mat.color) {
                mat.color.setHex(0xffffff);
              } else {
                mat.color = new THREE.Color(0xffffff);
              }
            }
          });

          // Add to the master group!
          masterPouchGroup.add(loadedModel);
          
          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(loadedModel);
            const action = mixer.clipAction(gltf.animations[0]);
            action.setLoop(THREE.LoopPingPong, Infinity);
            action.play();
            mixers.push(mixer);
          }
        },
        undefined,
        (error) => {
          console.error('Error loading pouch 3D model:', item.path, error);
        }
      );
    });

    // 8. Animation loop with fluid physics interpolation (lerping)
    let animationId: number;
    let currentX = 0;
    let currentY = 0;
    let currentScaleMultiplier = isFamily ? 0.46 : 1.30;

    let isInteracting = false;
    let interactionTimeout: NodeJS.Timeout | null = null;

    controls.addEventListener('start', () => {
      isInteracting = true;
      if (interactionTimeout) clearTimeout(interactionTimeout);
    });

    controls.addEventListener('end', () => {
      if (interactionTimeout) clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        isInteracting = false;
      }, 2000);
    });

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      mixers.forEach(mixer => mixer.update(delta));

      if (masterPouchGroup) {
        const sPercent = scrollRef.current;

        // A. Dynamic X-coordinate translation (moved more to the right from the start)
        let targetX = 0;
        if (!isMobile) {
          // Direct linear interpolation from far right to far left as scroll progress advances!
          targetX = THREE.MathUtils.lerp(isFamily ? 35 : 35, isFamily ? -48 : -30, sPercent);
        } else {
          targetX = 0;
        }

        // B. Dynamic Y-coordinate translation (moved down into the lower right empty space at the start)
        let targetY = 0;
        if (!isMobile) {
          // Coffee pouch is taller, start it lower and end lower to keep it centered in viewport
          const startY = isFamily ? -14 : (isCoffeePouch ? -38 : -32);
          const endY   = isFamily ? 2   : (isCoffeePouch ? -32 : -26);
          targetY = THREE.MathUtils.lerp(startY, endY, sPercent);
        } else {
          // Adjust specific Y offsets depending on the model so they all sit right above the buttons
          if (modelUrl.includes('stand-up-pouch2') || modelUrl.includes('coffee-pouch')) {
            targetY = -35; 
          } else if (modelUrl.includes('gusset-pouch')) {
            targetY = -24;
          } else {
            targetY = -12;
          }
        }

        // C. Dynamic size scaling
        const baseScale = isFamily ? 0.46 : 1.30;
        let targetScaleMultiplier = baseScale;
        if (!isMobile) {
          // Makes the model slightly larger/smaller depending on scroll depth
          targetScaleMultiplier = THREE.MathUtils.lerp(baseScale, baseScale * 0.9, sPercent);
        } else {
          targetScaleMultiplier = baseScale;
        }

        // Damping/Interpolating translations for ultra-fluid movement
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        currentScaleMultiplier += (targetScaleMultiplier - currentScaleMultiplier) * 0.08;

        // Apply scale directly to the master group
        masterPouchGroup.scale.set(currentScaleMultiplier, currentScaleMultiplier, currentScaleMultiplier);

        // Apply scroll sliding position
        masterPouchGroup.position.x = currentX;
        masterPouchGroup.position.y = currentY;

        // Translate the floor shadow along with the pouches to maintain correct shadows
        floor.position.x = currentX;
        floor.position.y = -35 + currentY;

        // C. Dynamic individual rotation driven by distinct spins & scroll progress
        const scrollRotationY = sPercent * Math.PI * 2; // up to one full 360-degree spin
        const autoRotateTime = Date.now();

        masterPouchGroup.children.forEach((child) => {
          if (child.userData && child.userData.spinSpeed !== undefined) {
            const data = child.userData;
            if (!isInteracting) {
              const individualAutoSpin = (autoRotateTime * data.spinSpeed) % (Math.PI * 2);
              const targetChildY = data.baseRy + scrollRotationY + individualAutoSpin;
              child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, targetChildY, 0.05);
            }
          }
        });

        // Apply interactive mouse cursor tilt + dynamic scroll tilt to the master group itself
        if (!isInteracting) {
          const targetGroupX = (tiltRef.current.y * 0.0035) + (sPercent * 0.18);
          const targetGroupY = (tiltRef.current.x * 0.0035); // mouse sway
          const targetGroupZ = Math.sin(sPercent * Math.PI) * 0.08; // graceful natural sway

          masterPouchGroup.rotation.x = THREE.MathUtils.lerp(masterPouchGroup.rotation.x, targetGroupX, 0.05);
          masterPouchGroup.rotation.y = THREE.MathUtils.lerp(masterPouchGroup.rotation.y, targetGroupY, 0.05);
          masterPouchGroup.rotation.z = THREE.MathUtils.lerp(masterPouchGroup.rotation.z, targetGroupZ, 0.05);
        }
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
      if (interactionTimeout) clearTimeout(interactionTimeout);
      controls.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      cameraRef.current = null;
      controlsRef.current = null;
    };
  }, [modelUrl, isMobile]);

  return (
    <div className="w-full h-full relative group">
      <div ref={containerRef} className="w-full h-full animate-fade-in" />
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        <button 
          onClick={handleViewBottom}
          className="bg-black/90 text-[#00FFFF] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border-2 border-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 active:scale-95 whitespace-nowrap"
          title="Tilt camera down to look under the pouch base"
        >
          <BoxSelect className="w-4 h-4" /> View Base
        </button>
        <button 
          onClick={handleReset}
          className="bg-black/90 text-white text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 active:scale-95 whitespace-nowrap"
          title="Reset standing perspective view"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
    </div>
  );
};
