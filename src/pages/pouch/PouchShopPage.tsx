import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS } from '../../store/productData';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { getProductImage } from '../../utils/productImageMapper';

export default function PouchShopPage() {
  const { t } = useTranslation();

  // Filter only some featured eco products for now, or just show all FEATURED_PRODUCTS
  const shopProducts = FEATURED_PRODUCTS.filter(p => p.category === 'eco-digital' || p.category === 'sample' || p.category === 'eco-stock-plain');

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
            {t('pouchShop.subtitle', 'Sustainable packaging ready for your brand. Order samples or custom prints directly.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((product) => {
            const imageUrl = getProductImage(product.id, 'Stand Up Pouch / Doypack', product.images[0]);
            
            return (
              <Link 
                key={product.id}
                to={`/shop/${product.id}`}
                className="group border-4 border-black bg-white hover:bg-[#F0F0F0] transition-colors relative flex flex-col"
              >
                {/* Product Image */}
                <div className="aspect-square border-b-4 border-black p-4 bg-white relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-black text-[#D4FF00] font-['JetBrains_Mono'] font-bold text-xs px-2 py-1 uppercase">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-['JetBrains_Mono'] font-bold text-[#10B981] mb-2 uppercase tracking-tight">
                      {product.category.replace('-', ' ')}
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-tight mb-2 group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="text-sm font-['JetBrains_Mono'] line-clamp-2 mb-4 text-gray-600">
                      {product.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-black">
                    <div className="font-['JetBrains_Mono'] font-bold">
                      {product.basePrice > 0 ? (
                        <span className="text-xl">${product.basePrice.toFixed(2)}<span className="text-sm text-gray-500">/ea</span></span>
                      ) : (
                        <span className="text-xl">Custom Quote</span>
                      )}
                    </div>
                    <div className="bg-[#D4FF00] border-2 border-black p-2 group-hover:bg-black group-hover:text-[#D4FF00] transition-colors">
                      <ArrowRight className="w-5 h-5" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </PouchLayout>
  );
}
