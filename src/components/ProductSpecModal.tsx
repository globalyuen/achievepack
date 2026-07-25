import React, { useState } from 'react'
import { X, Download, Printer, FileText, CheckCircle, Upload, Sparkles, Shield, Leaf } from 'lucide-react'

export interface ProductSpecModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMaterial?: string
  defaultShape?: string
  defaultSurface?: string
  defaultClosure?: string
}

export const ProductSpecModal: React.FC<ProductSpecModalProps> = ({
  isOpen,
  onClose,
  defaultMaterial = 'Mono Recyclable PE (Recycle #4)',
  defaultShape = 'Stand Up Pouch / Doypack',
  defaultSurface = 'Matte Finish Lamination',
  defaultClosure = 'Press-to-Close Resealable Zipper'
}) => {
  const [productName, setProductName] = useState('Custom Branded Eco Pouch')
  const [material, setMaterial] = useState(defaultMaterial)
  const [dimensions, setDimensions] = useState('6.0" x 9.0" + 3.0" (150mm x 230mm + 75mm)')
  const [surface, setSurface] = useState(defaultSurface)
  const [closure, setClosure] = useState(defaultClosure)
  const [isGenerated, setIsGenerated] = useState(false)

  if (!isOpen) return null

  const handlePrint = () => {
    setIsGenerated(true)
    setTimeout(() => {
      window.print()
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Full Spec Report Generator v2</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mb-4">
          Generate Full Spec Report PDF
        </h2>
        <p className="text-xs text-neutral-400 mb-6">
          Generate a classic letterhead specification report with 38 canonical material layer breakdown, food safety certifications, and A4 print engine layout.
        </p>

        <div className="space-y-4 mb-6 text-xs">
          <div>
            <label className="block text-neutral-300 font-semibold mb-1">Product Title / Brand Name:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-300 font-semibold mb-1">Material Structure:</label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              >
                <option value="Mono Recyclable PE (Recycle #4)">Mono Recyclable PE (Recycle #4)</option>
                <option value="EN 13432 Certified Home Compostable">EN 13432 Certified Home Compostable</option>
                <option value="GRS 50% Post-Consumer Recycled (PCR)">GRS 50% Post-Consumer Recycled (PCR)</option>
                <option value="Bio-PE Sugarcane Derived (I'm Green™)">Bio-PE Sugarcane Derived (I'm Green™)</option>
                <option value="FSC Kraft Paper High-Barrier">FSC Kraft Paper High-Barrier</option>
              </select>
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">Dimensions (Inches first, mm second):</label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-neutral-300 font-semibold mb-1">Surface Treatment:</label>
              <input
                type="text"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-neutral-300 font-semibold mb-1">Closure / Function:</label>
              <input
                type="text"
                value={closure}
                onChange={(e) => setClosure(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Spec Overview Box */}
        <div className="bg-neutral-950 border border-neutral-800 p-4 rounded-xl mb-6 text-xs space-y-2">
          <div className="flex justify-between font-mono">
            <span className="text-neutral-400">Barrier Rating:</span>
            <span className="text-emerald-400 font-bold">OTR &lt; 0.5 cc/m²/24hr | MVTR &lt; 0.5 g/m²/24hr</span>
          </div>
          <div className="flex justify-between font-mono">
            <span className="text-neutral-400">Scale Reference:</span>
            <span className="text-white">355ml Can (2.6" x 4.8" / 66mm x 122mm)</span>
          </div>
          <div className="flex justify-between font-mono">
            <span className="text-neutral-400">Compliance Standards:</span>
            <span className="text-white">ISO 22000 Food Safety &amp; FDA 21 CFR Compliant</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print A4 Full Spec PDF Report</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecModal
