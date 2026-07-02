import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS, getProductSubCategory } from '../../store/productData';
import { ShoppingBag, ArrowRight, Filter, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'sample', label: 'Sample Packs' },
  { id: 'custom-pouches', label: 'Custom Pouches' },
  { id: 'eco-stock', label: 'Eco Stock' },
  { id: 'eco-digital', label: 'Eco Digital' },
  { id: 'conventional-stock', label: 'Conventional Stock' },
  { id: 'conventional-digital', label: 'Conventional Digital' },
  { id: 'boxes', label: 'Custom Boxes' },
  { id: '3d-print', label: '3D Printing' },
  { id: 'reusable', label: 'Reusable' },
];

const SHAPES = [
  { id: 'all', label: 'All Shapes' },
  { id: 'Stand Up Pouch / Doypack', label: 'Stand Up Pouch' },
  { id: 'Flat Squared Bottom Pouch', label: 'Flat Bottom' },
  { id: 'Side Gusset Pouch', label: 'Side Gusset' },
  { id: 'Quad Seal Pouch', label: 'Quad Seal' },
  { id: '3 Side Seal Pouch', label: '3 Side Seal' },
  { id: 'Spouted Stand Up Pouch', label: 'Spouted Pouch' },
  { id: 'Rollstock', label: 'Rollstock' },
  { id: 'Bottle', label: 'Bottle' },
];


const SUSTAINABILITIES = [
  { id: 'all', label: 'All Levels' },
  { id: 'conventional', label: 'Conventional' },
  { id: 'recyclable', label: 'Recyclable' },
  { id: 'compostable', label: 'Compostable' },
  { id: 'reusable', label: 'Reusable' },
];

export default function PouchShopPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategory = searchParams.get('category') || 'all';
  const activeShape = searchParams.get('shape') || 'all';
  const activeSustainability = searchParams.get('sustainability') || 'all';

  const setActiveCategory = (category: string) => {
    setSearchParams(prev => {
      if (category === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', category);
      }
      return prev;
    });
  };

  const setActiveSustainability = (sus: string) => {
    setSearchParams(prev => {
      if (sus === 'all') prev.delete('sustainability');
      else prev.set('sustainability', sus);
      return prev;
    });
  };

  const setActiveShape = (shape: string) => {
    setSearchParams(prev => {
      if (shape === 'all') {
        prev.delete('shape');
      } else {
        prev.set('shape', shape);
      }
      return prev;
    });
  };

  const filteredProducts = FEATURED_PRODUCTS.filter(p => {
    // Get product subCategory using helper
    const subCat = getProductSubCategory(p);
    
    // Normalize categories (e.g. sample vs samples)
    const matchesCategory = activeCategory === 'all' || 
      p.category === activeCategory || 
      subCat === activeCategory ||
      (activeCategory === 'sample' && subCat === 'samples') ||
      (activeCategory === 'eco-stock' && (subCat === 'eco-stock-plain' || subCat === 'eco-stock-custom-print')) ||
      (activeCategory === 'conventional-stock' && subCat === 'conventional-stock-plain');
    
    // Some products don't have shape prop, fallback to name matching
    const matchesShape = activeShape === 'all' || 
      (p as any).shape === activeShape || 
      p.name?.toLowerCase().includes(activeShape.toLowerCase().replace(' pouch', '')) ||
      (activeShape === 'Stand Up Pouch / Doypack' && p.name?.toLowerCase().includes('stand up'));

    const matchesSustainability = activeSustainability === 'all' || 
      (p as any).sustainability === activeSustainability;

    return matchesCategory && matchesShape && matchesSustainability;
  });

  return (
    <PouchLayout>
      <div className="bg-[#D4FF00] border-b-4 border-black py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <ShoppingBag className="w-12 h-12" strokeWidth={2.5} />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              ECO SHOP
            </h1>
          </div>
          <p className="text-xl md:text-2xl font-bold font-['JetBrains_Mono'] max-w-2xl border-l-4 border-black pl-4 py-2 bg-white/50">
            {t('pouchShop.subtitle', 'Sustainable packaging ready for your brand. Order samples or request custom quotes directly.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters - Desktop Only */}
          <div className="hidden lg:block lg:w-1/4 flex-shrink-0 space-y-8">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Categories</h2>
              </div>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeCategory === cat.id 
                        ? 'bg-black text-[#D4FF00] border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat.label}</span>
                      {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Sustainability</h2>
              </div>
              <div className="flex flex-col gap-2">
                {SUSTAINABILITIES.map(sus => (
                  <button
                    key={sus.id}
                    onClick={() => setActiveSustainability(sus.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeSustainability === sus.id 
                        ? 'bg-[#00FF00] text-black border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="capitalize">{sus.label}</span>
                      {activeSustainability === sus.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Shapes</h2>
              </div>
              <div className="flex flex-col gap-2">
                {SHAPES.map(shape => (
                  <button
                    key={shape.id}
                    onClick={() => setActiveShape(shape.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeShape === shape.id 
                        ? 'bg-[#FF00FF] text-white border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{shape.label}</span>
                      {activeShape === shape.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid & Mobile Filters Container */}
          <div className="lg:w-3/4">
            {/* Mobile Filters - Visible only on mobile/tablet */}
            <div className="lg:hidden space-y-6 mb-8 bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Categories</span>
                  {activeCategory !== 'all' && (
                    <span className="text-[10px] bg-black text-[#D4FF00] font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {CATEGORIES.find(c => c.id === activeCategory)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeCategory === cat.id 
                          ? 'bg-black text-[#D4FF00]' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Sustainability</span>
                  {activeSustainability !== 'all' && (
                    <span className="text-[10px] bg-[#00FF00] text-black font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {SUSTAINABILITIES.find(s => s.id === activeSustainability)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {SUSTAINABILITIES.map(sus => (
                    <button
                      key={sus.id}
                      onClick={() => setActiveSustainability(sus.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeSustainability === sus.id 
                          ? 'bg-[#00FF00] text-black' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {sus.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Shapes</span>
                  {activeShape !== 'all' && (
                    <span className="text-[10px] bg-[#FF00FF] text-white font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {SHAPES.find(s => s.id === activeShape)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {SHAPES.map(shape => (
                    <button
                      key={shape.id}
                      onClick={() => setActiveShape(shape.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeShape === shape.id 
                          ? 'bg-[#FF00FF] text-white' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {shape.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-8 font-['JetBrains_Mono'] font-bold flex items-center justify-between border-b-4 border-black pb-4">
              <div className="text-xl">
                Showing <span className="bg-[#D4FF00] border-2 border-black px-2">{filteredProducts.length}</span> Products
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const imageUrl = product.images?.[0] || '';
                
                return (
                  <Link 
                    key={product.id}
                    to={`/shop/${product.id}`}
                    className="group border-4 border-black bg-white hover:bg-[#F0F0F0] transition-colors relative flex flex-col h-full"
                  >
                    {/* Product Image */}
                    <div className="aspect-square border-b-4 border-black p-4 bg-white relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.badge && (
                        <div className="absolute top-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs px-2 py-1 uppercase z-10">
                          {product.badge}
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-4 flex-grow flex flex-col justify-between bg-white relative z-20">
                      <div>
                        <div className="text-[10px] font-['JetBrains_Mono'] font-bold text-[#10B981] mb-1 uppercase tracking-tight">
                          {product.category.replace('-', ' ')}
                        </div>
                        <h3 className="text-lg font-black uppercase leading-tight mb-2 group-hover:underline">
                          {product.name}
                        </h3>
                        <p className="text-xs font-['JetBrains_Mono'] line-clamp-2 mb-4 text-gray-600">
                          {product.shortDesc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-black">
                        <div className="font-['JetBrains_Mono'] font-bold">
                          {product.basePrice > 0 ? (
                            <span className="text-lg">${product.basePrice.toFixed(2)}<span className="text-xs text-gray-500">/ea</span></span>
                          ) : (
                            <span className="text-sm text-[#FF00FF]">Custom Quote</span>
                          )}
                        </div>
                        <div className="bg-[#D4FF00] border-2 border-black p-1.5 group-hover:bg-black group-hover:text-[#D4FF00] transition-colors">
                          <ArrowRight className="w-4 h-4" strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              
              {filteredProducts.length === 0 && (
                <div className="col-span-1 md:col-span-2 xl:col-span-3 text-center py-20 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black uppercase mb-4">No Products Found</h3>
                  <p className="font-['JetBrains_Mono'] text-lg">Try adjusting your category or shape filters.</p>
                  <button 
                    onClick={() => { setActiveCategory('all'); setActiveShape('all'); }}
                    className="mt-6 bg-[#D4FF00] border-4 border-black px-6 py-3 font-['JetBrains_Mono'] font-bold uppercase hover:bg-black hover:text-[#D4FF00] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </PouchLayout>
  );
}
