import { useTranslation } from 'react-i18next';
import { Ruler, Box, Maximize2, Calculator, Settings, ArrowRightLeft, CheckCircle, Eye, X } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { useState } from 'react';

const SizeGuidePage = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.sizeGuide';
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroImage = '/imgs/seo-photos/a_size_reference_dimensions_7506199.webp';

  // Size comparison images with cola can reference
  const standUpSizes = [
    { size: 'XXXS', image: '/imgs/store/size/stand-up/xxxs.webp', capacity: t(`${p}.capacities.xxxs_standup`) },
    { size: 'XXS', image: '/imgs/store/size/stand-up/xxs.webp', capacity: t(`${p}.capacities.xxs_standup`) },
    { size: 'XS', image: '/imgs/store/size/stand-up/xs.webp', capacity: t(`${p}.capacities.xs_standup`) },
    { size: 'S', image: '/imgs/store/size/stand-up/s.webp', capacity: t(`${p}.capacities.s_standup`) },
    { size: 'L', image: '/imgs/store/size/stand-up/l.webp', capacity: t(`${p}.capacities.l_standup`) },
    { size: 'XL', image: '/imgs/store/size/stand-up/xl.webp', capacity: t(`${p}.capacities.xl_standup`) },
    { size: 'XXL', image: '/imgs/store/size/stand-up/xxl.webp', capacity: t(`${p}.capacities.xxl_standup`) },
  ];

  const flatBottomSizes = [
    { size: 'XXXS', image: '/imgs/store/size/flat-bottom/xxxs.webp', capacity: t(`${p}.capacities.xxxs_flat`) },
    { size: 'XXS', image: '/imgs/store/size/flat-bottom/xxs.webp', capacity: t(`${p}.capacities.xxs_flat`) },
    { size: 'XS', image: '/imgs/store/size/flat-bottom/xs.webp', capacity: t(`${p}.capacities.xs_flat`) },
    { size: 'S', image: '/imgs/store/size/flat-bottom/s.webp', capacity: t(`${p}.capacities.s_flat`) },
    { size: 'L', image: '/imgs/store/size/flat-bottom/l.webp', capacity: t(`${p}.capacities.l_flat`) },
    { size: 'XL', image: '/imgs/store/size/flat-bottom/xl.webp', capacity: t(`${p}.capacities.xl_flat`) },
    { size: 'XXL', image: '/imgs/store/size/flat-bottom/xxl.webp', capacity: t(`${p}.capacities.xxl_flat`) },
  ];
  
  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.p1Bold`)}</strong> {t(`${p}.sections.overview.p1Normal`)}
          </p>
          
          <div className="bg-primary-50 p-5 rounded-xl mt-4">
            <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.overview.measureTitle`)}</h4>
            <p className="text-sm mb-3">{t(`${p}.sections.overview.measureExpr`)}</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">{t(`${p}.sections.overview.width`)}</span>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.overview.widthDesc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">{t(`${p}.sections.overview.height`)}</span>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.overview.heightDesc`)}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-primary-100">
                <span className="font-semibold text-primary-700">{t(`${p}.sections.overview.gusset`)}</span>
                <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.overview.gussetDesc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-comparison',
      title: t(`${p}.sections.visualComparison.title`),
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.visualComparison.p1Bold`)}</strong>{t(`${p}.sections.visualComparison.p1Normal`)}
          </p>
          
          {/* Stand-Up Pouches Photo Grid */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <Box className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.visualComparison.standUpTitle`)}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {standUpSizes.map((item) => (
                <div 
                  key={`standup-${item.size}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-primary-300"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-50">
                    <img 
                      src={item.image} 
                      alt={t(`${p}.sections.visualComparison.standUpAlt`, { size: item.size })}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.size}</span>
                      <span className="text-white/90 text-xs bg-white/20 px-2 py-0.5 rounded-full">{item.capacity}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
                      <Eye className="h-4 w-4 text-primary-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Flat Bottom Bags Photo Grid */}
          <div className="mt-8">
            <h4 className="font-semibold text-neutral-800 mb-4 flex items-center gap-2">
              <Maximize2 className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.visualComparison.flatBottomTitle`)}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {flatBottomSizes.map((item) => (
                <div 
                  key={`flatbottom-${item.size}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-emerald-300"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-50">
                    <img 
                      src={item.image} 
                      alt={t(`${p}.sections.visualComparison.flatBottomAlt`, { size: item.size })}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{item.size}</span>
                      <span className="text-white/90 text-xs bg-white/20 px-2 py-0.5 rounded-full">{item.capacity}</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-1.5 shadow-lg">
                      <Eye className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <p className="text-sm text-amber-800">
              <strong>{t(`${p}.sections.visualComparison.refLabel`)}</strong> {t(`${p}.sections.visualComparison.refDesc`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'standup',
      title: t(`${p}.sections.standUp.title`),
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.standUp.p1`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-purple-800">{t(`${p}.sections.standUp.sizes.xs.name`)}</span>
                <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.xs.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-purple-700">{t(`${p}.sections.standUp.sizes.xs.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.xs.desc`)}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-blue-800">{t(`${p}.sections.standUp.sizes.s.name`)}</span>
                <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.s.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-blue-700">{t(`${p}.sections.standUp.sizes.s.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.s.desc`)}</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-emerald-800">{t(`${p}.sections.standUp.sizes.m.name`)}</span>
                <span className="text-xs bg-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.m.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-emerald-700">{t(`${p}.sections.standUp.sizes.m.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.m.desc`)}</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-amber-800">{t(`${p}.sections.standUp.sizes.l.name`)}</span>
                <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.l.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-amber-700">{t(`${p}.sections.standUp.sizes.l.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.l.desc`)}</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-orange-800">{t(`${p}.sections.standUp.sizes.xl.name`)}</span>
                <span className="text-xs bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.xl.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-orange-700">{t(`${p}.sections.standUp.sizes.xl.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.xl.desc`)}</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-red-800">{t(`${p}.sections.standUp.sizes.xxl.name`)}</span>
                <span className="text-xs bg-red-200 text-red-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.standUp.sizes.xxl.capacity`)}</span>
              </div>
              <p className="text-sm font-medium text-red-700">{t(`${p}.sections.standUp.sizes.xxl.dimensions`)}</p>
              <p className="text-xs text-neutral-600 mt-1">{t(`${p}.sections.standUp.sizes.xxl.desc`)}</p>
            </div>
          </div>
          
          <p className="text-sm text-neutral-500 italic mt-4">{t(`${p}.sections.standUp.customSizesNote`)}</p>
        </div>
      )
    },
    {
      id: 'flatbottom',
      title: t(`${p}.sections.flatBottom.title`),
      icon: <Maximize2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.flatBottom.p1`)}</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-4 bg-gradient-to-r from-primary-50 to-white p-4 rounded-xl border border-primary-100">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-700">S</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-primary-800">{t(`${p}.sections.flatBottom.sizes.small.name`)}</span>
                  <span className="text-sm text-neutral-600">{t(`${p}.sections.flatBottom.sizes.small.dimensions`)}</span>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.flatBottom.sizes.small.capacity`)}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">{t(`${p}.sections.flatBottom.sizes.small.desc`)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-xl border border-emerald-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-emerald-700">M</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-emerald-800">{t(`${p}.sections.flatBottom.sizes.medium.name`)}</span>
                  <span className="text-sm text-neutral-600">{t(`${p}.sections.flatBottom.sizes.medium.dimensions`)}</span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.flatBottom.sizes.medium.capacity`)}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">{t(`${p}.sections.flatBottom.sizes.medium.desc`)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-white p-4 rounded-xl border border-amber-100">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-amber-700">L</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-amber-800">{t(`${p}.sections.flatBottom.sizes.large.name`)}</span>
                  <span className="text-sm text-neutral-600">{t(`${p}.sections.flatBottom.sizes.large.dimensions`)}</span>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{t(`${p}.sections.flatBottom.sizes.large.capacity`)}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">{t(`${p}.sections.flatBottom.sizes.large.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'calculate',
      title: t(`${p}.sections.calculate.title`),
      icon: <Calculator className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.calculate.p1`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-blue-800">{t(`${p}.sections.calculate.step1.title`)}</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step1.item1`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step1.item2`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step1.item3`)}</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-emerald-800">{t(`${p}.sections.calculate.step2.title`)}</h4>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step2.item1`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step2.item2`)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{t(`${p}.sections.calculate.step2.item3`)}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
            <h4 className="font-semibold text-amber-800 mb-1">{t(`${p}.sections.calculate.proTip.title`)}</h4>
            <p className="text-sm text-amber-700">{t(`${p}.sections.calculate.proTip.desc`)}</p>
          </div>
        </div>
      )
    },
    {
      id: 'custom',
      title: t(`${p}.sections.custom.title`),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.custom.p1`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-3">{t(`${p}.sections.custom.limits.title`)}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.limits.widthRange`)}</span>
                  <span className="font-medium">{t(`${p}.sections.custom.limits.widthRangeVal`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.limits.heightRange`)}</span>
                  <span className="font-medium">{t(`${p}.sections.custom.limits.heightRangeVal`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.limits.gusset`)}</span>
                  <span className="font-medium">{t(`${p}.sections.custom.limits.gussetVal`)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-5 rounded-xl border border-primary-200">
              <h4 className="font-semibold text-primary-800 mb-3">{t(`${p}.sections.custom.moq.title`)}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.moq.digital`)}</span>
                  <span className="font-medium text-primary-700">{t(`${p}.sections.custom.moq.digitalVal`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.moq.plate`)}</span>
                  <span className="font-medium text-primary-700">{t(`${p}.sections.custom.moq.plateVal`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t(`${p}.sections.custom.moq.leadTime`)}</span>
                  <span className="font-medium text-primary-700">{t(`${p}.sections.custom.moq.leadTimeVal`)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conversion',
      title: t(`${p}.sections.conversion.title`),
      icon: <ArrowRightLeft className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.conversion.p1`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">{t(`${p}.sections.conversion.mmToIn.title`)}</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100mm</span><span className="font-medium text-blue-700">= 3.94 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>150mm</span><span className="font-medium text-blue-700">= 5.91 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>200mm</span><span className="font-medium text-blue-700">= 7.87 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250mm</span><span className="font-medium text-blue-700">= 9.84 in</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>300mm</span><span className="font-medium text-blue-700">= 11.81 in</span>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">{t(`${p}.sections.conversion.gToOz.title`)}</h4>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>100g</span><span className="font-medium text-emerald-700">= 3.5 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>250g</span><span className="font-medium text-emerald-700">= 8.8 oz</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>500g</span><span className="font-medium text-emerald-700">= 1.1 lb</span>
                </div>
                <div className="flex justify-between bg-white px-3 py-1.5 rounded">
                  <span>1kg</span><span className="font-medium text-emerald-700">= 2.2 lb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <>
      <SEOPageLayout heroBgColor="#1f2937"
        title={t(`${p}.title`)}
        description={t(`${p}.description`)}
        keywords={['pouch sizes', 'packaging dimensions', 'bag size guide', 'pouch capacity', 'custom pouch sizes']}
        heroTitle={t(`${p}.heroTitle`)}
        heroSubtitle={t(`${p}.heroSubtitle`)}
        heroImage={heroImage}
        sections={sections}
        introSummary={t(`${p}.introSummary`)}
        faqs={faqs}
        ctaTitle={t(`${p}.cta.title`)}
        ctaDescription={t(`${p}.cta.description`)}
        ctaButtonText={t(`${p}.cta.button`)}
        ctaButtonUrl="/contact"
      />

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Size comparison full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default SizeGuidePage;
