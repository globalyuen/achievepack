import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, Html, Float } from '@react-three/drei'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

// Error Boundary for 3D content
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen w-full flex items-center justify-center bg-neutral-100">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-neutral-800">3D Content Failed to Load</h3>
                        <p className="text-neutral-500 mt-2">Your device might not support WebGL or hardware acceleration.</p>
                        <Link to="/" className="text-primary-600 mt-4 inline-block hover:underline">Return Home</Link>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

function SpinningPouch({ path }: { path: string }) {
    const { scene } = useGLTF(path)
    const ref = useRef<any>(null)

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5 // Gentle spin
        }
    })

    return <primitive object={scene} ref={ref} />
}

export default function ThreeDPreview() {
    const [modelIndex, setModelIndex] = useState(0)
    const models = [
        { name: 'Stand Up Pouch', path: '/3d/pouch/stand-up-pouch.glb' },
        { name: 'Flat Bottom', path: '/3d/pouch/flat-bottom-pouch.glb' },
        { name: 'Three Side Seal', path: '/3d/pouch/3-side-seal.glb' },
    ]

    return (
        <div className="min-h-screen w-full bg-neutral-50 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-neutral-200 bg-white flex items-center justify-between z-10">
                <Link to="/" className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
                <h1 className="text-lg font-bold text-neutral-800">3D Experience Preview</h1>
                <div className="w-20" /> {/* Spacer */}
            </div>

            {/* Main Canvas Area */}
            <div className="flex-1 relative">
                <ErrorBoundary>
                    <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 4] }}>
                        <Suspense fallback={<Html center><div className="flex flex-col items-center"><div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-2" /><span className="text-sm text-neutral-500 font-medium">Loading 3D Assets...</span></div></Html>}>
                            <Stage environment="city" intensity={0.5} adjustCamera={1.2}>
                                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                                    <SpinningPouch path={models[modelIndex].path} key={models[modelIndex].path} />
                                </Float>
                            </Stage>
                        </Suspense>
                    </Canvas>
                </ErrorBoundary>

                {/* Model Selector Controls */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-20 pointer-events-none">
                    {models.map((m, i) => (
                        <button
                            key={m.name}
                            onClick={() => setModelIndex(i)}
                            className={`pointer-events-auto px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg transform hover:scale-105 active:scale-95 ${i === modelIndex
                                    ? 'bg-primary-600 text-white ring-2 ring-primary-300 ring-offset-2'
                                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                                }`}
                        >
                            {m.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white p-4 text-center text-xs text-neutral-400 border-t border-neutral-200">
                Vercel Deployment Preview - WebGL Required
            </div>
        </div>
    )
}

// Preload models for smoother switching
try {
    useGLTF.preload('/3d/pouch/stand-up-pouch.glb')
    useGLTF.preload('/3d/pouch/flat-bottom-pouch.glb')
    useGLTF.preload('/3d/pouch/3-side-seal.glb')
} catch (e) {
    console.warn("Preload failed safely")
}
