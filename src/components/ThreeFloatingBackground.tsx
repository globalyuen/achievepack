import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

interface FloatingItem {
  model: THREE.Group
  velocity: { x: number; y: number }
  rotationSpeed: { x: number; y: number; z: number }
  boundX: number
  boundY: number
}

interface ThreeFloatingBackgroundProps {
  /** Opacity of all pouch models (0–1). Default: 0.12 */
  opacity?: number
  /** Tint color hex for transparent material. Default: '#a0c8ff' (light blue-white) */
  tint?: number
  /** Number of floating pouch instances per model. Default: 3 */
  countPerModel?: number
}

/**
 * ThreeFloatingBackground
 * Renders multiple semi-transparent pouch GLBs drifting and spinning in the background.
 * Designed to be absolutely positioned behind page content.
 */
export const ThreeFloatingBackground: React.FC<ThreeFloatingBackgroundProps> = ({
  opacity = 0.10,
  tint = 0xc8d8f0,
  countPerModel = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current
    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    // Scene
    const scene = new THREE.Scene()
    scene.background = null

    // Camera (orthographic-like wide FOV so models fill canvas naturally)
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000)
    camera.position.set(0, 0, 350)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.domElement.style.pointerEvents = 'none'
    container.appendChild(renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambient)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
    dirLight.position.set(100, 150, 100)
    scene.add(dirLight)

    // GLB models to load
    const modelPaths = [
      '/3d/3d-pouch/stand-up-pouch2.glb',
      '/3d/3d-pouch/coffee-pouch.glb',
      '/3d/3d-pouch/gusset-pouch.glb',
    ]

    const floatingItems: FloatingItem[] = []
    const loader = new GLTFLoader()

    // Randomize utility
    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    // Scale ranges for variety (big + small)
    const scaleOptions = [0.28, 0.42, 0.55, 0.70, 0.85]

    // Load each model and create multiple clones
    let loadedCount = 0
    const totalModels = modelPaths.length

    modelPaths.forEach((path) => {
      loader.load(path, (gltf) => {
        for (let i = 0; i < countPerModel; i++) {
          const clonedScene = gltf.scene.clone(true)

          // Auto-scale to a standard size first
          const box = new THREE.Box3().setFromObject(clonedScene)
          const size = new THREE.Vector3()
          box.getSize(size)
          const maxDim = Math.max(size.x, size.y, size.z)
          const baseScale = 110 / maxDim

          // Choose random display scale for variety
          const displayScale = baseScale * scaleOptions[Math.floor(Math.random() * scaleOptions.length)]
          clonedScene.scale.setScalar(displayScale)

          // Center it
          const center = new THREE.Vector3()
          box.getCenter(center)
          clonedScene.position.x = -center.x * displayScale
          clonedScene.position.y = -center.y * displayScale
          clonedScene.position.z = -center.z * displayScale

          // Apply transparent tinted material to all meshes
          clonedScene.traverse((node) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh
              mesh.castShadow = false
              mesh.receiveShadow = false
              // Create semi-transparent material
              const mat = new THREE.MeshStandardMaterial({
                color: tint,
                transparent: true,
                opacity: opacity,
                roughness: 0.5,
                metalness: 0.1,
                depthWrite: false,
              })
              mesh.material = mat
            }
          })

          // Create wrapper group for positioning
          const group = new THREE.Group()
          group.add(clonedScene)

          // Random starting position across the canvas
          const spreadX = width * 0.5
          const spreadY = height * 0.5
          group.position.set(
            rand(-spreadX, spreadX),
            rand(-spreadY, spreadY),
            rand(-50, 50)
          )

          // Random starting rotation
          group.rotation.set(
            rand(0, Math.PI * 2),
            rand(0, Math.PI * 2),
            rand(0, Math.PI * 2)
          )

          scene.add(group)

          // Drift velocity and rotation speed (very slow and gentle)
          floatingItems.push({
            model: group,
            velocity: {
              x: rand(-0.12, 0.12),
              y: rand(-0.08, 0.08),
            },
            rotationSpeed: {
              x: rand(-0.0008, 0.0008),
              y: rand(0.0005, 0.0015) * (Math.random() > 0.5 ? 1 : -1),
              z: rand(-0.0004, 0.0004),
            },
            boundX: spreadX + 80,
            boundY: spreadY + 80,
          })
        }

        loadedCount++
      }, undefined, (err) => {
        console.warn('FloatingBG: failed to load', path, err)
        loadedCount++
      })
    })

    // Animation loop
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)

      floatingItems.forEach((item) => {
        // Drift
        item.model.position.x += item.velocity.x
        item.model.position.y += item.velocity.y

        // Wrap around edges (toroidal boundary)
        if (item.model.position.x > item.boundX) item.model.position.x = -item.boundX
        if (item.model.position.x < -item.boundX) item.model.position.x = item.boundX
        if (item.model.position.y > item.boundY) item.model.position.y = -item.boundY
        if (item.model.position.y < -item.boundY) item.model.position.y = item.boundY

        // Gentle continuous rotation
        item.model.rotation.x += item.rotationSpeed.x
        item.model.rotation.y += item.rotationSpeed.y
        item.model.rotation.z += item.rotationSpeed.z
      })

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [opacity, tint, countPerModel])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}

export default ThreeFloatingBackground
