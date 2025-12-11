import React, { useState, useMemo, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react'
import { useStore } from '../store/StoreContext'
import { FEATURED_PRODUCTS, type EcoDigitalProduct, type StoreProduct } from '../store/productData'
import { calculateEcoPrice, type EcoCalculatorSelections } from '../utils/ecoDigitalCalculator'
import { getProductImage, getSizeImage, getSurfaceImage, type ShapeType, ClosureType, SurfaceType, EcoSizeType } from '../utils/productImageMapper'

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
  
  // Image enlargement modal state
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null)
  
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
          {/* Left Column - Sticky Tabs */}
          <div className="space-y-4">
            {/* Tabs for Package Visualization and Specifications - Now Sticky */}
            {isEcoDigital && calculationResult && (
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden sticky top-20">
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
                <div className="p-4 max-h-[600px] overflow-y-auto">
                  {activeTab === 'visualization' ? (
                    /* Package Visualization Content */
                    <div className="space-y-4">
                      {/* Main Product Image */}
                      <div className="text-center">
                        <button 
                          onClick={() => setEnlargedImage({
                            src: productImage,
                            alt: product.name
                          })}
                          className="bg-neutral-50 rounded-lg p-4 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                        >
                          <img 
                            src={productImage}
                            alt={product.name}
                            className="w-full h-48 object-contain"
                          />
                        </button>
                        <p className="text-sm font-semibold text-neutral-800">Main Package</p>
                        <p className="text-xs text-neutral-500">{product.name}</p>
                      </div>
                      
                      {/* Grid: Material, Size, Closure, Surface, Barrier, Stiffness */}
                      <div className="grid grid-cols-3 gap-3">
                        {/* Material */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: selectedMaterial === 'PCR or Bio Plastic' 
                                ? '/imgs/store/eco-material/pcr-or-biope.webp'
                                : selectedMaterial === 'Mono Recyclable Plastic'
                                ? '/imgs/store/eco-material/recycle.webp'
                                : '/imgs/store/eco-material/compostable.webp',
                              alt: selectedMaterial
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={
                                selectedMaterial === 'PCR or Bio Plastic' 
                                  ? '/imgs/store/eco-material/pcr-or-biope.webp'
                                  : selectedMaterial === 'Mono Recyclable Plastic'
                                  ? '/imgs/store/eco-material/recycle.webp'
                                  : '/imgs/store/eco-material/compostable.webp'
                              }
                              alt={selectedMaterial}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Material</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedMaterial}</p>
                        </div>
                        
                        {/* Size */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: getSizeImage(selectedSize as EcoSizeType),
                              alt: `Size ${selectedSize}`
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={getSizeImage(selectedSize as EcoSizeType)}
                              alt={`Size ${selectedSize}`}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Size</p>
                          <p className="text-xs text-neutral-500">{selectedSize}</p>
                        </div>
                        
                        {/* Closure */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: selectedClosure === 'No' ? '/imgs/store/closure/no-zipper.webp' :
                                selectedClosure === 'Regular Zipper' ? '/imgs/store/closure/normal-zipper.webp' :
                                selectedClosure === 'One-Sided Zipper' ? '/imgs/store/closure/front-zipper.webp' :
                                selectedClosure === 'Child Resistant Zipper' ? '/imgs/store/closure/child-resistant-zipper.webp' :
                                selectedClosure === 'Slider' ? '/imgs/store/closure/slider-zipper.webp' :
                                selectedClosure === 'Tin Tie' ? '/imgs/store/closure/tin-tie.webp' :
                                '/imgs/store/closure/no-zipper.webp',
                              alt: selectedClosure
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
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
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Closure</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedClosure === 'No' ? 'None' : selectedClosure}</p>
                        </div>
                        
                        {/* Surface */}
                        <div className="text-center">
                          <button 
                            onClick={() => setEnlargedImage({
                              src: getSurfaceImage(selectedSurface),
                              alt: selectedSurface
                            })}
                            className="bg-neutral-50 rounded-lg p-3 mb-2 cursor-pointer hover:bg-neutral-100 transition w-full"
                          >
                            <img 
                              src={getSurfaceImage(selectedSurface)}
                              alt={selectedSurface}
                              className="w-full h-16 object-contain"
                            />
                          </button>
                          <p className="text-xs font-medium text-neutral-700">Surface</p>
                          <p className="text-xs text-neutral-500 truncate">{selectedSurface}</p>
                        </div>
                        
                        {/* Barrier - Placeholder for future image */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                            <div className="text-neutral-400 text-2xl">🛡️</div>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">Barrier</p>
                          <p className="text-xs text-neutral-500 truncate">
                            {selectedBarrier === 'mid clear mid barrier (Optional Window)' ? 'Mid' :
                             selectedBarrier === 'metalised high barrier (No Window)' ? 'High' : 'Highest'}
                          </p>
                        </div>
                        
                        {/* Stiffness - Placeholder for future image */}
                        <div className="text-center">
                          <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                            <div className="text-neutral-400 text-2xl">💪</div>
                          </div>
                          <p className="text-xs font-medium text-neutral-700">Stiffness</p>
                          <p className="text-xs text-neutral-500 truncate">
                            {selectedStiffness === 'Without Paper Lining (Softer)' ? 'Softer' : 'Stiffer'}
                          </p>
                        </div>
                        
                        {/* Valve - if selected */}
                        {selectedValve === 'Yes' && (
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                              <div className="text-neutral-400 text-2xl">💨</div>
                            </div>
                            <p className="text-xs font-medium text-neutral-700">Valve</p>
                            <p className="text-xs text-neutral-500">Degassing</p>
                          </div>
                        )}
                        
                        {/* Laser Scoring - if selected */}
                        {selectedLaserScoring === 'Yes' && (
                          <div className="text-center">
                            <div className="bg-neutral-50 rounded-lg p-3 mb-2 w-full h-[88px] flex items-center justify-center">
                              <div className="text-neutral-400 text-2xl">✂️</div>
                            </div>
                            <p className="text-xs font-medium text-neutral-700">Laser</p>
                            <p className="text-xs text-neutral-500">Scoring</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Package Specifications Content - Full Details */
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
                  )}
                </div>
              </div>
            )}
            
            {/* Testimonial Section */}
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                Customer Testimonials
              </h3>
              <div className="space-y-4">
                {/* Testimonial 1 - Placeholder */}
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0 flex items-center justify-center text-neutral-500 font-semibold">
                      JD
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">John Doe</div>
                      <div className="text-xs text-neutral-500">Coffee Roaster, Verified Buyer</div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 italic">
                    "Outstanding quality and fast delivery! The eco-friendly materials are perfect for our brand. Highly recommended!"
                  </p>
                  <div className="text-xs text-neutral-400 mt-2">2 weeks ago</div>
                </div>

                {/* Testimonial 2 - Placeholder */}
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0 flex items-center justify-center text-neutral-500 font-semibold">
                      SM
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">Sarah Miller</div>
                      <div className="text-xs text-neutral-500">Tea Shop Owner, Verified Buyer</div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 italic">
                    "The packaging looks amazing! Our customers love the sustainable materials and the quality is top-notch."
                  </p>
                  <div className="text-xs text-neutral-400 mt-2">1 month ago</div>
                </div>

                {/* Testimonial 3 - Placeholder */}
                <div className="bg-neutral-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 flex-shrink-0 flex items-center justify-center text-neutral-500 font-semibold">
                      RW
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">Robert Wilson</div>
                      <div className="text-xs text-neutral-500">Snack Brand, Verified Buyer</div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700 italic">
                    "Excellent service and product quality. The custom printing came out perfectly. Will definitely order again!"
                  </p>
                  <div className="text-xs text-neutral-400 mt-2">3 weeks ago</div>
                </div>
              </div>
            </div>

            {/* Other Customer Examples Section */}
            <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📸</span>
                Customer Examples
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                See how other customers are using our packaging
              </p>
              
              {/* Photo Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-3">
                {/* Real customer sample photos */}
                {[
                  { name: 'Arielle', img: 'Arielle.webp' },
                  { name: 'David', img: 'David.webp' },
                  { name: 'Holly', img: 'Holly.webp' },
                  { name: 'Leo', img: 'Leo.webp' },
                  { name: 'Nicole', img: 'Nicole.webp' },
                  { name: 'Paul', img: 'Paul.webp' },
                  { name: 'Remi', img: 'Remi.webp' },
                  { name: 'Richard', img: 'Richard.webp' },
                  { name: 'Steph', img: 'Steph.webp' },
                  { name: 'Jemma', img: 'jemma.webp' },
                  { name: 'Michelle', img: 'michelle.webp' },
                  { name: 'Morlife', img: 'morlife.webp' },
                  { name: 'Ruby', img: 'ruby.webp' },
                ].slice(0, 6).map((sample) => (
                  <div 
                    key={sample.name}
                    className="aspect-square bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 hover:scale-105 transition-all border border-neutral-200 shadow-sm"
                    onClick={() => setEnlargedImage({
                      src: `/imgs/store/customer-sample/${sample.img}`,
                      alt: `${sample.name}'s Package`
                    })}
                  >
                    <img 
                      src={`/imgs/store/customer-sample/${sample.img}`}
                      alt={`${sample.name}'s Package`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                  View All Examples →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Price Section - Now at Top and Sticky */}
            {isEcoDigital && (
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border-2 border-primary-200 shadow-lg sticky top-20 z-10">
                <div className="text-sm font-semibold text-primary-800 mb-2">💰 Total Investment</div>
                <div className="text-4xl font-bold text-primary-700 mb-3">US${Math.round(totalPrice).toLocaleString()}</div>
                {calculationResult && (
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                      <div className="text-neutral-600 text-xs mb-1">Unit Price</div>
                      <div className="font-semibold text-neutral-800">${unitPrice.toFixed(4)}/pc</div>
                    </div>
                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                      <div className="text-neutral-600 text-xs mb-1">Quantity</div>
                      <div className="font-semibold text-neutral-800">{calculationResult.price.quantityUnits.toLocaleString()} pcs</div>
                    </div>
                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                      <div className="text-neutral-600 text-xs mb-1">Designs</div>
                      <div className="font-semibold text-neutral-800">{calculationResult.price.designCount}</div>
                    </div>
                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                      <div className="text-neutral-600 text-xs mb-1">Shipping</div>
                      <div className="font-semibold text-neutral-800 text-xs">{calculationResult.price.shippingMethod}</div>
                    </div>
                  </div>
                )}
                <div className="text-xs text-primary-700 mt-3 bg-white bg-opacity-40 rounded-lg p-2 text-center">
                  ✓ Shipping Included
                </div>
              </div>
            )}
            
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
                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Eco Material Type
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Material Type Guide:</div>
                    <div className="mb-2">
                      <strong>PCR/Bio Plastic:</strong> 30% lower carbon footprint, uses recycled or plant-based materials
                    </div>
                    <div className="mb-2">
                      <strong>Mono Recyclable:</strong> 40% lower carbon footprint, 95% recyclable, single-material construction
                    </div>
                    <div>
                      <strong>Biodegradable:</strong> Breaks down naturally, compostable, returns nutrients to soil
                    </div>
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'PCR or Bio Plastic', label: 'PCR/Bio', img: '/imgs/store/eco-material/pcr-or-biope.webp' },
                      { value: 'Mono Recyclable Plastic', label: 'Recyclable', img: '/imgs/store/eco-material/recycle.webp' },
                      { value: 'Biodegradable and Compostable', label: 'Compostable', img: '/imgs/store/eco-material/compostable.webp' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedMaterial(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedMaterial === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-2 flex items-center justify-center">
                          <img src={option.img} alt={option.label} className="max-w-full max-h-full object-contain p-2" />
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{option.label}</div>
                        {selectedMaterial === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
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

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    {getSizeLabel}
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Package Size Guide:</div>
                    • <strong>XXXS-XXS:</strong> Trial sizes, samples, single-serve products<br/>
                    • <strong>XS-S:</strong> Specialty foods, premium coffee, small portions<br/>
                    • <strong>M-L:</strong> Standard retail products, family-sized packs<br/>
                    • <strong>XL-XXL:</strong> Bulk items, wholesale, subscription products
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {sizeOptions.map(size => (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setSelectedSize(size.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedSize === size.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center">
                          <img src={getSizeImage(size.value as EcoSizeType)} alt={size.label} className="max-w-full max-h-full object-contain p-1" />
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{size.value}</div>
                        {selectedSize === size.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
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

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Closure
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Closure Options:</div>
                    • <strong>Regular Zipper:</strong> Resealable, maintains freshness<br/>
                    • <strong>One-Sided:</strong> Easy pouring, front access<br/>
                    • <strong>Child Resistant:</strong> Safety feature for medications<br/>
                    • <strong>Slider:</strong> Premium smooth action<br/>
                    • <strong>Tin Tie:</strong> Cost-effective for coffee/tea<br/>
                    • <strong>Spout:</strong> Perfect for liquids, precise pouring
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { value: 'No' as ClosureType, label: 'No Closure', img: '/imgs/store/closure/no-zipper.webp' },
                      { value: 'Regular Zipper' as ClosureType, label: 'Regular', img: '/imgs/store/closure/normal-zipper.webp' },
                      { value: 'One-Sided Zipper' as ClosureType, label: 'One-Sided', img: '/imgs/store/closure/front-zipper.webp' },
                      { value: 'Child Resistant Zipper' as ClosureType, label: 'Child Safe', img: '/imgs/store/closure/child-resistant-zipper.webp' },
                      { value: 'Slider' as ClosureType, label: 'Slider', img: '/imgs/store/closure/slider-zipper.webp' },
                      { value: 'Tin Tie' as ClosureType, label: 'Tin Tie', img: '/imgs/store/closure/tin-tie.webp' },
                      { value: 'Spout' as ClosureType, label: 'Spout', img: '/imgs/store/closure/no-zipper.webp' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedClosure(option.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedClosure === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center">
                          <img src={option.img} alt={option.label} className="max-w-full max-h-full object-contain p-1" />
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center truncate">{option.label}</div>
                        {selectedClosure === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
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

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Surface
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-72 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Surface Treatment:</div>
                    • <strong>Glossy:</strong> Vibrant colors, classic finish<br/>
                    • <strong>Matt:</strong> Elegant, reduced glare, modern look<br/>
                    • <strong>Metallic:</strong> Premium metallic appearance<br/>
                    • <strong>Soft Touch:</strong> Luxurious velvet-like feel<br/>
                    • <strong>Emboss:</strong> Raised/depressed design, tactile<br/>
                    • <strong>Stamp Foil:</strong> Metallic accents, luxury effect
                  </div>
                  
                  {/* Image Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'Glossy' as SurfaceType, label: 'Glossy' },
                      { value: 'Matt' as SurfaceType, label: 'Matt' },
                      { value: 'Metallic' as SurfaceType, label: 'Metallic' },
                      { value: 'Soft Touch' as SurfaceType, label: 'Soft Touch' },
                      { value: 'Emboss' as SurfaceType, label: 'Emboss' },
                      { value: 'Stamp Foil' as SurfaceType, label: 'Stamp Foil' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedSurface(option.value)}
                        className={`relative p-2 border-2 rounded-lg transition-all hover:shadow-md ${
                          selectedSurface === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="aspect-square bg-white rounded-lg mb-1 flex items-center justify-center">
                          <img src={getSurfaceImage(option.value)} alt={option.label} className="max-w-full max-h-full object-contain p-1" />
                        </div>
                        <div className="text-xs font-medium text-neutral-700 text-center">{option.label}</div>
                        {selectedSurface === option.value && (
                          <div className="absolute top-1 right-1 bg-primary-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <div className="flex gap-3 items-center">
                    <select value={selectedSurface} onChange={e => setSelectedSurface(e.target.value as SurfaceType)} className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="Glossy">Glossy</option>
                      <option value="Matt">Matt</option>
                      <option value="Metallic">Metallic</option>
                      <option value="Soft Touch">Soft Touch</option>
                      <option value="Emboss">Emboss</option>
                      <option value="Stamp Foil">Stamp Foil</option>
                    </select>
                    {/* Surface Preview Thumbnail */}
                    <div className="flex-shrink-0 bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600">
                      <img 
                        src={getSurfaceImage(selectedSurface)} 
                        alt={`${selectedSurface} surface`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Barrier
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Barrier Protection:</div>
                    <div className="mb-2">
                      <strong>Mid Barrier:</strong> 6-9 months shelf life, clear visibility, good for dry snacks
                    </div>
                    <div className="mb-2">
                      <strong>High Barrier:</strong> 9-12 months, blocks light/oxygen, for coffee/tea/spices
                    </div>
                    <div>
                      <strong>Highest Barrier:</strong> 12-18 months, aluminum layer, maximum protection
                    </div>
                  </div>
                  
                  {/* Button Grid Selection */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { value: 'mid clear mid barrier (Optional Window)', label: 'Mid Barrier', sublabel: '(Window)' },
                      { value: 'metalised high barrier (No Window)', label: 'High Barrier', sublabel: '(No Window)' },
                      { value: 'Aluminum highest barrier (No Window)', label: 'Highest', sublabel: '(No Window)' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedBarrier(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                          selectedBarrier === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm font-semibold text-neutral-800">{option.label}</div>
                        <div className="text-xs text-neutral-600">{option.sublabel}</div>
                        {selectedBarrier === option.value && (
                          <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <select value={selectedBarrier} onChange={e => setSelectedBarrier(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="mid clear mid barrier (Optional Window)">Mid Barrier (Window)</option>
                    <option value="metalised high barrier (No Window)">High Barrier (No Window)</option>
                    <option value="Aluminum highest barrier (No Window)">Highest Barrier (No Window)</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Stiffness and Thickness
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Package Stiffness and Thickness:</div>
                    <div className="mb-2">
                      <strong>With Paper Lining (Stiffer):</strong> Better standing stability, premium feel. Adding kraft paper increases thickness by 50-60 micron / 2 mil.
                    </div>
                    <div>
                      <strong>Without Paper (Softer):</strong> More flexible, lighter weight, thinner profile.
                    </div>
                  </div>
                  
                  {/* Button Grid Selection */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    {[
                      { value: 'Without Paper Lining (Softer)', label: 'Softer', sublabel: '(No Paper)' },
                      { value: 'With Paper Lining (stiffer)', label: 'Stiffer', sublabel: '(With Paper)' }
                    ].map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedStiffness(option.value)}
                        className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                          selectedStiffness === option.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm font-semibold text-neutral-800">{option.label}</div>
                        <div className="text-xs text-neutral-600">{option.sublabel}</div>
                        {selectedStiffness === option.value && (
                          <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Dropdown Option */}
                  <select value={selectedStiffness} onChange={e => setSelectedStiffness(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="Without Paper Lining (Softer)">Softer (No Paper)</option>
                    <option value="With Paper Lining (stiffer)">Stiffer (With Paper)</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="block text-sm font-medium text-neutral-700 mb-2 flex items-center gap-2">
                    Additional Features
                    <span className="text-neutral-400 text-xs cursor-help">ℹ️</span>
                  </label>
                  {/* Tooltip */}
                  <div className="invisible group-hover:visible absolute left-0 top-full mt-1 w-80 bg-neutral-800 text-white text-xs rounded-lg p-3 shadow-lg z-50">
                    <div className="font-semibold mb-1">Additional Features:</div>
                    <div className="mb-2">
                      <strong>Degassing Valve:</strong> Releases gases while preventing air entry, ideal for coffee/tea
                    </div>
                    <div>
                      <strong>Laser Scoring:</strong> Easy-tear lines for convenient opening, professional finish
                    </div>
                  </div>
                  
                  {/* Button Grid Selection - Same as Barrier/Stiffness */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <button
                      type="button"
                      onClick={() => setSelectedValve(selectedValve === 'Yes' ? 'No' : 'Yes')}
                      className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                        selectedValve === 'Yes'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-sm font-semibold text-neutral-800">Degassing Valve</div>
                      <div className="text-xs text-neutral-600">(Coffee/Tea)</div>
                      {selectedValve === 'Yes' && (
                        <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedLaserScoring(selectedLaserScoring === 'Yes' ? 'No' : 'Yes')}
                      className={`relative p-3 border-2 rounded-lg transition-all hover:shadow-md text-left ${
                        selectedLaserScoring === 'Yes'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-neutral-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-sm font-semibold text-neutral-800">Laser Scoring</div>
                      <div className="text-xs text-neutral-600">(Easy Tear)</div>
                      {selectedLaserScoring === 'Yes' && (
                        <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  </div>
                  
                  {/* Checkbox Options - Keep for accessibility */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedValve === 'Yes'} onChange={e => setSelectedValve(e.target.checked ? 'Yes' : 'No')} className="rounded" />
                      <span className="text-sm">One Way Degassing Valve</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
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

      {/* Image Enlargement Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-neutral-100 transition z-10"
            >
              <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white text-center font-medium">{enlargedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
