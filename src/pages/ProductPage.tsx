import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type EcoDigitalProduct, type StoreProduct } from '../store/productData'
import { calculateEcoPrice, type EcoCalculatorSelections } from '../utils/ecoDigitalCalculator'
import { getProductImage, getSizeImage } from '../utils/productImageMapper'
import type { ShapeType, ClosureType, SurfaceType, EcoSizeType } from '../utils/productImageMapper'

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { addToCart, cartCount, setIsCartOpen } = useStore()
  const navigate = useNavigate()
  
  const product = FEATURED_PRODUCTS.find(p => p.id === productId)
  const isEcoDigital = product?.category === 'eco-digital'
  const ecoProduct = isEcoDigital ? (product as EcoDigitalProduct) : null
  
  // Eco Digital product options
  const [selectedMaterial, setSelectedMaterial] = useState('Mono Recyclable Plastic')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedQuantity, setSelectedQuantity] = useState('1,000 (Digital print)')
  const [selectedDesignCount, setSelectedDesignCount] = useState(1)
  const [selectedBarrier, setSelectedBarrier] = useState('mid clear mid barrier (Optional Window)')
  const [selectedStiffness, setSelectedStiffness] = useState('Without Paper Lining (Softer)')
  const [selectedClosure, setSelectedClosure] = useState<ClosureType>('No')
  const [selectedSurface, setSelectedSurface] = useState<SurfaceType>('Matt')
  const [selectedLaserScoring, setSelectedLaserScoring] = useState<'Yes' | 'No'>('No')
  const [selectedValve, setSelectedValve] = useState<'Yes' | 'No'>('No')
  const [selectedShipping, setSelectedShipping] = useState('Air Freight')
  
  // Tab state for Package Visualization / Specifications
  const [activeTab, setActiveTab] = useState<'visualization' | 'specifications'>('visualization')
  
  // Initialize from product defaults
  useEffect(() => {
    if (ecoProduct?.ecoConfig) {
      setSelectedMaterial(ecoProduct.ecoConfig.defaultMaterial)
      setSelectedSize(ecoProduct.ecoConfig.defaultSize)
      setSelectedQuantity(ecoProduct.ecoConfig.defaultQuantity)
      setSelectedDesignCount(ecoProduct.ecoConfig.defaultDesignCount)
      setSelectedBarrier(ecoProduct.ecoConfig.defaultBarrier)
      setSelectedStiffness(ecoProduct.ecoConfig.defaultStiffness)
      setSelectedClosure(ecoProduct.ecoConfig.defaultZipper as ClosureType)
      setSelectedShipping(ecoProduct.ecoConfig.defaultShippingMethod)
    }
  }, [ecoProduct])

  // Get size options based on product shape
  const sizeOptions = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return []
    
    const shape = ecoProduct.shape
    const is3SideOrCenterSeal = shape === '3 Side Seal Pouch' || shape === 'Center Seal Pouch'
    
    if (is3SideOrCenterSeal) {
      // 3 Side Seal & Center Seal sizes (no gusset)
      return [
        { value: 'XXXS', label: 'XXXS (3.6" × 6.3" / 90 × 110 mm)' },
        { value: 'XXS', label: 'XXS (4.3" × 6.3" / 110 × 160 mm)' },
        { value: 'XS', label: 'XS (5.1" × 7.1" / 130 × 180 mm)' },
        { value: 'S', label: 'S (5.9" × 7.9" / 150 × 200 mm)' },
        { value: 'L', label: 'L (7.1" × 9.8" / 180 × 250 mm)' },
        { value: 'XL', label: 'XL (7.9" × 11.8" / 200 × 300 mm)' },
        { value: 'XXL', label: 'XXL (9.8" × 13.8" / 250 × 350 mm)' },
      ]
    } else {
      // Other shapes (with gusset)
      return [
        { value: 'XXXS', label: 'XXXS (3.6" × 6.3" + 2.4" / 90 × 110 + 60 mm)' },
        { value: 'XXS', label: 'XXS (4.3" × 6.3" + 2.4" / 110 × 160 + 60 mm)' },
        { value: 'XS', label: 'XS (5.1" × 7.1" + 3.1" / 130 × 180 + 80 mm)' },
        { value: 'S', label: 'S (5.9" × 7.9" + 3.1" / 150 × 200 + 80 mm)' },
        { value: 'L', label: 'L (7.1" × 9.8" + 3.1" / 180 × 250 + 80 mm)' },
        { value: 'XL', label: 'XL (7.9" × 11.8" + 3.9" / 200 × 300 + 100 mm)' },
        { value: 'XXL', label: 'XXL (9.8" × 13.8" + 3.9" / 250 × 350 + 100 mm)' },
      ]
    }
  }, [isEcoDigital, ecoProduct])

  // Get size label text based on product shape
  const getSizeLabel = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return 'Size'
    
    const shape = ecoProduct.shape
    const is3SideOrCenterSeal = shape === '3 Side Seal Pouch' || shape === 'Center Seal Pouch'
    
    if (is3SideOrCenterSeal) {
      return 'Size (width × length)'
    } else {
      return 'Size (width × length + unfolded gusset)'
    }
  }, [isEcoDigital, ecoProduct])

  // Calculate price for Eco Digital products
  const calculationResult = useMemo(() => {
    if (!isEcoDigital || !ecoProduct) return null
    
    try {
      const selections: EcoCalculatorSelections = {
        shape: ecoProduct.shape as any,
        material: selectedMaterial as any,
        size: selectedSize as any,
        quantityOption: selectedQuantity,
        designCount: selectedDesignCount,
        barrier: selectedBarrier,
        stiffness: selectedStiffness,
        zipper: selectedClosure,
        laserScoring: selectedLaserScoring,
        valve: selectedValve,
        additions: [],
        surfaceTreatments: selectedSurface === 'Glossy' ? [] : ['Matt'],
        shippingMethod: selectedShipping as any,
      }
      
      return calculateEcoPrice(selections)
    } catch (error) {
      console.error('Price calculation error:', error)
      return null
    }
  }, [isEcoDigital, ecoProduct, selectedMaterial, selectedSize, selectedQuantity, selectedDesignCount, selectedBarrier, selectedStiffness, selectedClosure, selectedSurface, selectedLaserScoring, selectedValve, selectedShipping])

  const totalPrice = calculationResult?.price.totalInvestment || product?.basePrice || 0
  const unitPrice = calculationResult?.price.currentUnitPrice || 0
  
  // Product image based on selections - Always show pouch shape for Eco Digital
  const productImage = useMemo(() => {
    if (isEcoDigital && ecoProduct) {
      // Always show pouch shape image, not material type
      return getProductImage({
        shape: ecoProduct.shape as ShapeType,
        closure: selectedClosure,
        surface: selectedSurface,
        material: undefined, // Don't use material for main image
        size: selectedSize as EcoSizeType, // Include size for Stand Up Pouch
      })
    }
    return product?.images[0] || ''
  }, [isEcoDigital, ecoProduct, selectedClosure, selectedSurface, selectedSize, product])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Product not found</p>
        <Link to="/store" className="text-primary-600 hover:underline">Back to Store</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (totalPrice <= 0 || !product) return
    
    const variantDescription = isEcoDigital && ecoProduct
      ? `${ecoProduct.shape} / ${selectedSize} / ${selectedClosure} / ${selectedSurface} / ${selectedQuantity}`
      : 'Standard'
    
    addToCart({
      productId: product.id,
      name: product.name,
      image: productImage,
      variant: { shape: variantDescription, size: selectedSize, barrier: selectedBarrier, finish: selectedSurface.toLowerCase() },
      quantity: 1,
      unitPrice: totalPrice,
      totalPrice: totalPrice
    })
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/store" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" /> Back to Store
          </Link>
          <button onClick={() => {
            if (cartCount === 0) {
              navigate('/store')
            } else {
              setIsCartOpen(true)
            }
          }} className="relative p-2 hover:bg-neutral-100 rounded-full transition">
            <ShoppingCart className="h-6 w-6 text-neutral-700" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center shadow-sm">
              <img src={productImage} alt={product.name} className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Thumbnail Gallery - Only for Eco Digital products */}
            {isEcoDigital && ecoProduct && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {/* PCR or Bio Plastic Thumbnail */}
                <button
                  onClick={() => setSelectedMaterial('PCR or Bio Plastic')}
                  className={`flex-shrink-0 bg-white rounded-lg p-3 w-24 h-24 flex items-center justify-center border-2 transition hover:border-primary-400 ${
                    selectedMaterial === 'PCR or Bio Plastic' ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                  }`}
                >
                  <img 
                    src="/imgs/store/eco-material/pcr-or-biope.webp" 
                    alt="PCR or Bio Plastic" 
                    className="max-w-full max-h-full object-contain"
                  />
                </button>
                
                {/* Mono Recyclable Plastic Thumbnail */}
                <button
                  onClick={() => setSelectedMaterial('Mono Recyclable Plastic')}
                  className={`flex-shrink-0 bg-white rounded-lg p-3 w-24 h-24 flex items-center justify-center border-2 transition hover:border-primary-400 ${
                    selectedMaterial === 'Mono Recyclable Plastic' ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                  }`}
                >
                  <img 
                    src="/imgs/store/eco-material/recycle.webp" 
                    alt="Mono Recyclable Plastic" 
                    className="max-w-full max-h-full object-contain"
                  />
                </button>
                
                {/* Biodegradable and Compostable Thumbnail */}
                <button
                  onClick={() => setSelectedMaterial('Biodegradable and Compostable')}
                  className={`flex-shrink-0 bg-white rounded-lg p-3 w-24 h-24 flex items-center justify-center border-2 transition hover:border-primary-400 ${
                    selectedMaterial === 'Biodegradable and Compostable' ? 'border-primary-600 ring-2 ring-primary-200' : 'border-neutral-200'
                  }`}
                >
                  <img 
                    src="/imgs/store/eco-material/compostable.webp" 
                    alt="Biodegradable and Compostable" 
                    className="max-w-full max-h-full object-contain"
                  />
                </button>
              </div>
            )}
            
            {/* Tabs for Package Visualization and Specifications */}
            {isEcoDigital && calculationResult && (
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                {/* Tab Headers */}
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab('visualization')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      activeTab === 'visualization'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📦 Package Visualization
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition ${
                      activeTab === 'specifications'
                        ? 'bg-primary-50 text-primary-700 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    📋 Package Specifications
                  </button>
                </div>
                
                {/* Tab Content */}
                <div className="p-4">
                  {activeTab === 'visualization' ? (
                    /* Package Visualization Content */
                    <div className="grid grid-cols-3 gap-3">
                      {/* Material */}
                      <div className="text-center">
                        <div className="bg-neutral-50 rounded-lg p-3 mb-2">
                          <img 
                            src={
                              selectedMaterial === 'PCR or Bio Plastic' 
                                ? '/imgs/store/eco-material/pcr-or-biope.webp'
                                : selectedMaterial === 'Mono Recyclable Plastic'
                                ? '/imgs/store/eco-material/recycle.webp'
                                : '/imgs/store/eco-material/compostable.webp'
                            }
                            alt={selectedMaterial}
                            className="w-full h-20 object-contain"
                          />
                        </div>
                        <p className="text-xs font-medium text-neutral-700">Material</p>
                        <p className="text-xs text-neutral-500">{selectedMaterial}</p>
                      </div>
                      
                      {/* Size */}
                      <div className="text-center">
                        <div className="bg-neutral-50 rounded-lg p-3 mb-2">
                          <img 
                            src={getSizeImage(selectedSize as EcoSizeType)}
                            alt={`Size ${selectedSize}`}
                            className="w-full h-20 object-contain"
                          />
                        </div>
                        <p className="text-xs font-medium text-neutral-700">Size</p>
                        <p className="text-xs text-neutral-500">{selectedSize}</p>
                      </div>
                      
                      {/* Closure */}
                      <div className="text-center">
                        <div className="bg-neutral-50 rounded-lg p-3 mb-2">
                          <img 
                            src={
                              selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                              selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                              selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                              selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                              selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                              selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                              '/imgs/store/closure/no-zipper.webp'
                            }
                            alt={selectedClosure}
                            className="w-full h-20 object-contain"
                          />
                        </div>
                        <p className="text-xs font-medium text-neutral-700">Closure</p>
                        <p className="text-xs text-neutral-500">{selectedClosure === 'No' ? 'None' : selectedClosure}</p>
                      </div>
                    </div>
                  ) : (
                    /* Package Specifications Content */
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-1.5 border-b border-neutral-100">
                        <span className="text-neutral-500">Material Structure</span>
                        <span className="text-neutral-900 font-medium text-right">{calculationResult.package.materialStructure}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-neutral-100">
                        <span className="text-neutral-500">Thickness</span>
                        <span className="text-neutral-900 font-medium">100 micron / 4 mil</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-neutral-100">
                        <span className="text-neutral-500">OTR</span>
                        <span className="text-neutral-900 font-medium">{calculationResult.package.barrierProperties.otr}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-neutral-100">
                        <span className="text-neutral-500">WVTR</span>
                        <span className="text-neutral-900 font-medium">{calculationResult.package.barrierProperties.wvtr}</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="text-neutral-500">Surface Treatment</span>
                        <span className="text-neutral-900 font-medium">{calculationResult.package.surface}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && <span className="inline-block bg-primary-100 text-primary-700 text-sm px-4 py-1 rounded-full font-medium">{product.badge}</span>}
            <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                ))}
              </div>
              <span className="text-neutral-600">({product.reviews} reviews)</span>
            </div>

            <p className="text-neutral-600">{product.description}</p>

            {/* Options */}
            {isEcoDigital && ecoProduct && (
              <div className="space-y-4 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Eco Material Type</label>
                  <div className="flex gap-3 items-center">
                    <select value={selectedMaterial} onChange={e => setSelectedMaterial(e.target.value)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="PCR or Bio Plastic">PCR or Bio Plastic</option>
                      <option value="Mono Recyclable Plastic">Mono Recyclable Plastic</option>
                      <option value="Biodegradable and Compostable">Biodegradable and Compostable</option>
                    </select>
                    {/* Material Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={selectedMaterial === 'PCR or Bio Plastic' 
                          ? '/imgs/store/eco-material/pcr-or-biope.webp'
                          : selectedMaterial === 'Mono Recyclable Plastic'
                          ? '/imgs/store/eco-material/recycle.webp'
                          : '/imgs/store/eco-material/compostable.webp'
                        } 
                        alt={selectedMaterial} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">{getSizeLabel}</label>
                  <div className="flex gap-3 items-start">
                    <select value={selectedSize} onChange={e => setSelectedSize(e.target.value)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      {sizeOptions.map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                    {/* Size Preview Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={getSizeImage(selectedSize as EcoSizeType)} 
                        alt={`Size ${selectedSize}`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Closure</label>
                  <div className="flex gap-3 items-center">
                    <select value={selectedClosure} onChange={e => setSelectedClosure(e.target.value as ClosureType)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="No">No Closure</option>
                      <option value="Regular Zipper">Regular Zipper</option>
                      <option value="One-Sided Zipper">One-Sided Zipper</option>
                      <option value="Child Resistant Zipper">Child Resistant Zipper</option>
                      <option value="Slider">Slider Zipper</option>
                      <option value="Tin Tie">Tin Tie</option>
                      <option value="Spout">Spout</option>
                    </select>
                    {/* Closure Image Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={
                          selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                          selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                          selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                          selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                          selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                          selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                          '/imgs/store/closure/no-zipper.webp'
                        } 
                        alt={`${selectedClosure} closure`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Surface</label>
                  <div className="flex gap-3 items-center">
                    <select value={selectedSurface} onChange={e => setSelectedSurface(e.target.value as SurfaceType)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="Glossy">Glossy (Clear)</option>
                      <option value="Matt">Matt (Silver)</option>
                    </select>
                    {/* Surface Preview Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={getProductImage({
                          shape: ecoProduct.shape as ShapeType,
                          closure: selectedClosure,
                          surface: selectedSurface,
                          material: selectedMaterial as any,
                        })} 
                        alt={`${selectedSurface} surface`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Barrier</label>
                  <select value={selectedBarrier} onChange={e => setSelectedBarrier(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="mid clear mid barrier (Optional Window)">Mid Barrier (Window)</option>
                    <option value="metalised high barrier (No Window)">High Barrier (No Window)</option>
                    <option value="Aluminum highest barrier (No Window)">Highest Barrier (No Window)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Stiffness</label>
                  <select value={selectedStiffness} onChange={e => setSelectedStiffness(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="Without Paper Lining (Softer)">Softer (No Paper)</option>
                    <option value="With Paper Lining (stiffer)">Stiffer (With Paper)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Additional Features</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedValve === 'Yes'} onChange={e => setSelectedValve(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span className="text-sm">Valve</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedLaserScoring === 'Yes'} onChange={e => setSelectedLaserScoring(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span className="text-sm">Laser Scoring</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity</label>
                  <select value={selectedQuantity} onChange={e => setSelectedQuantity(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="1,000 (Digital print)">1,000 (Digital print)</option>
                    <option value="2,000 (Digital print)">2,000 (Digital print)</option>
                    <option value="3,000 (Digital print)">3,000 (Digital print)</option>
                    <option value="5,000 (Flexo print)">5,000 (Flexo print)</option>
                    <option value="10,000 (Flexo print)">10,000 (Flexo print)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Design Count</label>
                  <select value={selectedDesignCount} onChange={e => setSelectedDesignCount(Number(e.target.value))} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value={1}>1 Design</option>
                    <option value={2}>2 Designs</option>
                    <option value={3}>3 Designs</option>
                    <option value={4}>4 Designs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Shipping Method</label>
                  <select value={selectedShipping} onChange={e => setSelectedShipping(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="Air Freight">Air Freight (Faster)</option>
                    <option value="Sea Freight">Sea Freight (Cheaper)</option>
                    <option value="Dual Shipping">Dual Shipping (Balanced)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Price */}
            <div className="bg-neutral-100 rounded-xl p-6">
              <div className="text-sm text-neutral-600 mb-2">Total Investment (Shipping Included)</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">US${Math.round(totalPrice).toLocaleString()}</div>
              {calculationResult && (
                <div className="text-sm text-neutral-500 space-y-1">
                  <div>Unit Price: ${unitPrice.toFixed(4)}/pc</div>
                  <div>Quantity: {calculationResult.price.quantityUnits.toLocaleString()} pcs</div>
                  <div>Designs: {calculationResult.price.designCount}</div>
                  <div>Shipping: {calculationResult.price.shippingMethod}</div>
                </div>
              )}
            </div>

            {/* Package Specifications */}
            {calculationResult && isEcoDigital && (
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Package Specifications
                </h3>
                <dl className="grid grid-cols-1 gap-y-3 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Total Quantity</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.price.quantityUnits.toLocaleString()} (Digital print) pieces
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Total Designs</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.price.designCount} {calculationResult.price.designCount === 1 ? 'type' : 'types'}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Package Type</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.shapeLabel}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Package Size</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.sizeDisplay}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Material</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.materialTypeLabel}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Barrier Type</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {selectedBarrier}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Structure</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.materialStructure}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Thickness</dt>
                    <dd className="text-neutral-900 col-span-2">
                      100 micron or 4 mil
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">OTR</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.barrierProperties.otr}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">WVTR</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.barrierProperties.wvtr}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Stiffness</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {selectedStiffness}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Reclosable Option</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {selectedClosure === 'No' ? 'None' : selectedClosure}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Surface Treatment</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.surface}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Additional Features</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.package.additional}
                    </dd>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <dt className="text-neutral-500 col-span-1">Shipping Method</dt>
                    <dd className="text-neutral-900 col-span-2">
                      {calculationResult.price.shippingMethod}
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            {/* Add to Cart */}
            <button onClick={handleAddToCart} disabled={totalPrice <= 0} className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-xl transition flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="h-4 w-4 text-primary-500" /> {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage
