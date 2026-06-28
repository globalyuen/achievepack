import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS } from '../../store/productData';
import { ArrowLeft, Check, Package, Sparkles, Globe } from 'lucide-react';
import { NeoButton } from '../../components/pouch/PouchUI';

export default function PouchProductDetailPage() {
  const { productId } = useParams();
  const { t } = useTranslation();

  const product = FEATURED_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <PouchLayout>
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-blue-600 hover:underline font-bold">
            ← Back to Shop
          </Link>
        </div>
      </PouchLayout>
    );
  }

  const imageUrl = product.images?.[0] || '';

  return (
    <PouchLayout>
      <div className="bg-[#F0F0F0] min-h-screen border-b-4 border-black">
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <Link to="/shop" className="inline-flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-sm uppercase hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Product Image Section */}
            <div className="border-4 border-black bg-white p-8 relative">
              {product.badge && (
                <div className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black font-['JetBrains_Mono'] font-bold text-sm px-3 py-1 uppercase z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {product.badge}
                </div>
              )}
              <div className="aspect-square flex items-center justify-center">
                <img 
                  src={imageUrl} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="inline-block bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs uppercase px-2 py-1 mb-4">
                  {product.category.replace('-', ' ')}
                </div>
                <h1 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight mb-4">
                  {product.name}
                </h1>
                <p className="text-xl font-['JetBrains_Mono'] text-gray-700 leading-relaxed border-l-4 border-[#10B981] pl-4">
                  {product.description || product.shortDesc}
                </p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-end gap-2 mb-6">
                  {product.basePrice > 0 ? (
                    <>
                      <span className="text-5xl font-black leading-none">${product.basePrice.toFixed(2)}</span>
                      <span className="text-lg font-['JetBrains_Mono'] font-bold text-gray-500 mb-1">/ unit</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black leading-none">Custom Quote</span>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 bg-[#D4FF00] border-2 border-black rounded-full p-0.5">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="font-['JetBrains_Mono'] font-bold text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <NeoButton 
                  variant="primary" 
                  className="w-full text-center justify-center text-xl py-4"
                  href={product.category === 'sample' ? "/checkout" : "/rfq"}
                >
                  <Package className="w-6 h-6 mr-2" />
                  {product.category === 'sample' ? 'Order Sample Pack' : 'Request Custom Quote'}
                </NeoButton>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white border-2 border-black p-4 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-[#10B981]" />
                  <div className="text-xs font-['JetBrains_Mono'] font-bold uppercase">
                    Premium<br/>Quality
                  </div>
                </div>
                <div className="bg-white border-2 border-black p-4 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-[#3B82F6]" />
                  <div className="text-xs font-['JetBrains_Mono'] font-bold uppercase">
                    Global<br/>Shipping
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PouchLayout>
  );
}
