import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import PouchLayout from '../../components/pouch/PouchLayout';
import { FEATURED_PRODUCTS } from '../../store/productData';
import { ArrowLeft, Check, Package, Sparkles, Globe, AlertTriangle, ShieldCheck, Layers, Flame, Eye, Ban } from 'lucide-react';
import { NeoButton } from '../../components/pouch/PouchUI';

export const sectionsForPouch = ["5 Common Flexible Pouch Problems (And Solutions)"];
export const sectionsForAchieve = ["5 Common Flexible Pouch Problems (And Solutions)"];

const TRANSLATIONS = {
  en: {
    title: "5 Common Pouch Packaging Problems (And Solutions)",
    problems: [
      { title: "Poor Seal Integrity", solution: "Advanced Multi-layer Heat Sealing Tech" },
      { title: "Punctures and Leaks", solution: "High-Tensile Composite Films" },
      { title: "Inconsistent Stand-Up Stability", solution: "Gusset Reinforcement & Precision Bottom Folding" },
      { title: "Zipper / Closure Failure", solution: "Press-to-Close Zippers with strict QC" },
      { title: "UV / Moisture Degradation", solution: "Specialized EVOH / Foil Barrier Layers" }
    ],
    flexiblePouchProblems: {
      title: "5 Common Flexible Pouch Problems (And Solutions)",
      list: [
        { title: "Barrier Failure & Moisture Ingress", solution: "Ultra-high barrier laminated EVOH and Al-foil films" },
        { title: "Seal Rupture under Load", solution: "High-bond hermetic heat sealing and heavy burst tests" },
        { title: "Zipper / Track Separation", solution: "Ultrasonic zipper welding and high-pull lock tracks" },
        { title: "Package Sagging / Presentation Loss", solution: "Stiffened PET/PE laminates and reinforced bottom gussets" },
        { title: "Surface Scuffing and Ink Bleeding", solution: "Reverse-printed PET layers with scratch-proof matte coatings" }
      ]
    }
  },
  es: {
    title: "5 Problemas Comunes de Empaque (y Soluciones)",
    problems: [
      { title: "Mala Integridad del Sello", solution: "Tecnología Avanzada de Sellado Multicapa" },
      { title: "Pinchazos y Fugas", solution: "Películas Compuestas de Alta Resistencia" },
      { title: "Estabilidad Inconsistente", solution: "Refuerzo y Plegado Preciso del Fondo" },
      { title: "Falla del Cierre", solution: "Cierres a Presión con estricto Control de Calidad" },
      { title: "Degradación por UV / Humedad", solution: "Capas de Barrera Especializadas" }
    ],
    flexiblePouchProblems: {
      title: "5 Problemas Comunes de las Bolsas Flexibles (y Soluciones)",
      list: [
        { title: "Fallo de la Barrera e Ingreso de Humedad", solution: "Películas laminadas de EVOH y papel de aluminio de ultra alta barrera" },
        { title: "Ruptura del Sello bajo Carga", solution: "Sellado térmico hermético de alta adherencia y pruebas de ruptura severas" },
        { title: "Separación del Cierre o Riel", solution: "Soldadura por ultrasonidos del cierre y rieles de bloqueo de alta resistencia" },
        { title: "Flacidez del Empaque / Pérdida de Presentación", solution: "Laminados rígidos de PET/PE y fuelles inferiores reforzados" },
        { title: "Desgaste de la Superficie y Sangrado de Tinta", solution: "Capas de PET impresas en reverso con revestimientos mate a prueba de rayaduras" }
      ]
    }
  },
  fr: {
    title: "5 Problèmes Courants d'Emballage (et Solutions)",
    problems: [
      { title: "Mauvaise Intégrité du Scellage", solution: "Technologie Avancée de Scellage Multicouche" },
      { title: "Perforations et Fuites", solution: "Films Composites à Haute Résistance" },
      { title: "Stabilité Inconstante", solution: "Renforcement et Pliage Précis du Fond" },
      { title: "Défaillance de la Fermeture", solution: "Fermetures à Pression avec un contrôle qualité strict" },
      { title: "Dégradation par UV / Humidité", solution: "Couches Barrières Spécialisées" }
    ],
    flexiblePouchProblems: {
      title: "5 Problèmes Courants des Sachets Flexibles (et Solutions)",
      list: [
        { title: "Défaillance de la Barrière et Pénétration d'Humidité", solution: "Films laminés EVOH et aluminium à ultra-haute barrière" },
        { title: "Rupture du Joint sous Charge", solution: "Scellage thermique hermétique à haute adhérence et tests d'éclatement intensifs" },
        { title: "Séparation de la Fermeture Éclair / du Rail", solution: "Soudage de fermeture par ultrasons et rails de verrouillage à haute résistance" },
        { title: "Affaissement du Sachet / Perte de Présentation", solution: "Stratifiés PET/PE rigides et soufflets de fond renforcés" },
        { title: "Rayures de Surface et Purge d'Encre", solution: "Couches de PET imprimées à l'envers avec des revêtements mats anti-rayures" }
      ]
    }
  },
  'zh-TW': {
    title: "5 個常見的軟包裝問題 (及其解決方案)",
    problems: [
      { title: "封口密封不良", solution: "先進的多層熱封技術" },
      { title: "刺破與漏液", solution: "高抗拉複合薄膜" },
      { title: "直立穩定性不佳", solution: "底部風琴加固與精密折疊" },
      { title: "夾鏈失效", solution: "嚴格品管的壓扣式夾鏈" },
      { title: "紫外線/濕氣降解", solution: "專業的高阻隔層" }
    ],
    flexiblePouchProblems: {
      title: "5 個常見的直立軟袋問題 (及其解決方案)",
      list: [
        { title: "阻隔失效與濕氣滲入", solution: "超高阻隔複合 EVOH 和鋁箔薄膜" },
        { title: "負載下封口破裂", solution: "高粘度氣密熱封與嚴格的爆破測試" },
        { title: "夾鏈/軌道脫離", solution: "超音波夾鏈焊接與高拉力鎖緊軌道" },
        { title: "包裝塌陷/失去陳列美感", solution: "高剛性 PET/PE 複合材料和加固底部風琴" },
        { title: "表面磨損與油墨化開", solution: "裡印 PET 層及防刮啞光塗層" }
      ]
    }
  }
};

import { useProductTranslation } from '../../utils/productTranslation';

export default function PouchProductDetailPage() {
  const { productId } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const tData = TRANSLATIONS[currentLang as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const { translateProduct } = useProductTranslation();
  const rawProduct = FEATURED_PRODUCTS.find(p => p.id === productId);
  const product = rawProduct ? translateProduct(rawProduct) : undefined;

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
  
  // Dynamic Product structured data for Google Merchant crawler auto-detection
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://www.pouch.eco${imageUrl}`;
  const productUrl = `https://www.pouch.eco/shop/${productId}`;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': product.name,
    'image': absoluteImageUrl,
    'description': product.description || product.shortDesc || product.name,
    'sku': product.id,
    'brand': {
      '@type': 'Brand',
      'name': 'Pouch.eco'
    },
    'offers': {
      '@type': 'Offer',
      'url': productUrl,
      'priceCurrency': 'USD',
      'price': product.basePrice || 0.00,
      'priceValidUntil': '2028-12-31',
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': product.inStock !== false ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      'seller': {
        '@type': 'Organization',
        'name': 'Pouch.eco'
      }
    }
  };

  return (
    <PouchLayout>
      <Helmet>
        <title>{`${product.name} | Pouch.eco`}</title>
        <meta name="description" content={product.description || product.shortDesc || product.name} />
        <link rel="canonical" href={productUrl} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

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
                  {(product.features || []).map((feature, idx) => (
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

        {/* 5 Common Problems Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">{tData.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {tData.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-lg mb-1">{prob.title}</h3>
                      <div className="flex items-center gap-2 text-[#10B981] font-['JetBrains_Mono'] font-bold text-sm">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{prob.solution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-4 border-black aspect-square flex items-center justify-center bg-gray-100 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/pouch-packaging-pain-points.jpg" 
                  alt="Pouch Packaging Pain Points" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5 Common Flexible Pouch Problems Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center">{tData.flexiblePouchProblems.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {tData.flexiblePouchProblems.list.map((prob, idx) => {
                  const Icons = [Ban, Flame, Layers, Package, Eye];
                  const IconComponent = Icons[idx] || AlertTriangle;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-black uppercase text-lg mb-1">{prob.title}</h3>
                        <div className="flex items-center gap-2 text-[#10B981] font-['JetBrains_Mono'] font-bold text-sm">
                          <ShieldCheck className="w-4 h-4" />
                          <span>{prob.solution}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-4 border-black aspect-square flex items-center justify-center bg-gray-100 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src="/imgs/knowledge/flexible-pouch-pain-points.jpg" 
                  alt="Flexible Pouch Pain Points" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PouchLayout>
  );
}
