import React, { useState } from 'react'
import { Package, Leaf, Layers, Settings, ShoppingBag, Coffee, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Palette, Ruler, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/rice/
const ricePaperGallery = [
  { src: '/imgs/function/rice/hero.webp', title: 'Achieve Pack® Rice Paper & PLA Packaging', desc: 'Achieve Pack® 米纸 PLA 可堆肥包装' },
  { src: '/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp', title: 'Eco Material Closeup & Texture', desc: '环保材质纹理特写' },
  { src: '/imgs/function/rice/a_achievepack_structure_variety_infographic_9570629.webp', title: 'Structure Variety Infographic', desc: '多种袋型结构' },
  { src: '/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp', title: 'Coffee Valve & Degassing System', desc: '咖啡排气阀系统' },
  { src: '/imgs/function/rice/a_achievepack_snacks_drygood_lifestyle_9593537.webp', title: 'Snacks & Dry Goods Applications', desc: '干货零食应用场景' },
  { src: '/imgs/function/rice/a_achievepack_coffee_tea_scene_3005344.webp', title: 'Coffee & Tea Scene', desc: '咖啡与茶应用场景' },
  { src: '/imgs/function/rice/a_achievepack_size_customization_chart_0780816.webp', title: 'Size Customization Chart', desc: '尺寸定制方案' },
  { src: '/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp', title: 'Printing & Branding Detail', desc: '印刷与品牌细节' },
  { src: '/imgs/function/rice/a_achievepack_sustainability_manifesto_6720236.webp', title: 'Sustainability Manifesto', desc: '可持续宣言' },
]

const RicePaperBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = ricePaperGallery.length - 1
    if (newIndex >= ricePaperGallery.length) newIndex = 0
    setGalleryEnlarged({ src: ricePaperGallery[newIndex].src, index: newIndex })
  }

  // Alternating layout component
  const AlternatingSection = ({ 
    image, 
    imageAlt, 
    title, 
    titleCn, 
    content, 
    contentCn,
    imageLeft = true,
    index
  }: { 
    image: string
    imageAlt: string
    title: string
    titleCn: string
    content: string
    contentCn: string
    imageLeft?: boolean
    index: number
  }) => (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      {imageLeft ? (
        <>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge 点击放大</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700">{content}</p>
            <p className="text-neutral-600 text-sm">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge 点击放大</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'intro',
      title: 'Achieve Pack® Rice Paper & PLA Packaging Overview',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Premium compostable packaging with natural rice paper texture</strong> — Achieve Pack® rice paper bags combine the authentic look of natural fiber with PLA or cellophane lining for full compostability. Replace traditional plastic packaging with sustainable, premium-feeling pouches.
            </p>
            <p className="text-neutral-700">
              天然米纸纹理的高端可堆肥包装 — Achieve Pack® 米纸袋将天然纤维质感与 PLA/赛璐玢内衬结合，实现完全可堆肥。用可持续、高级触感的袋子替代传统塑料包装。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/rice/hero.webp"
            imageAlt="Achieve Pack Rice Paper & PLA Packaging Hero"
            title="Achieve Pack® Rice Paper & PLA Packaging"
            titleCn="Achieve Pack® 米纸 PLA 可堆肥包装"
            content="Our rice paper pouches feature natural fiber texture on the exterior with fully compostable PLA or cellophane inner layers. Certified home compostable or industrial compostable options available. Ideal for brands seeking authentic, eco-conscious packaging with premium aesthetics."
            contentCn="我们的米纸袋外层采用天然纤维纹理，内层为完全可堆肥的 PLA 或赛璐玢。可选家庭可堆肥或工业可堆肥认证。适合追求天然、环保且具有高端美感的品牌。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'eco-materials',
      title: 'Eco-Friendly Materials & Compostability',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_ecomat_closeup_texture_9246951.webp"
            imageAlt="Rice Paper Material Closeup Texture"
            title="Rice Paper + PLA/Cellophane: 100% Compostable"
            titleCn="米纸 + PLA/赛璐玢：100% 可堆肥"
            content="Rice paper substrate provides natural fiber texture and feel. Combined with PLA (polylactic acid) or cellophane inner layers, the entire structure is fully compostable. Replaces traditional plastic packaging for coffee, tea, snacks, and dry goods with a sustainable alternative that breaks down naturally."
            contentCn="米纸基材提供天然纤维纹理和触感。结合 PLA（聚乳酸）或赛璐玢内层，整体结构完全可堆肥。用可降解的可持续替代品取代咖啡、茶叶、零食和干货的传统塑料包装。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Leaf className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Rice Paper Base</h4>
              <p className="text-sm text-green-700">Natural fiber texture substrate</p>
              <p className="text-xs text-green-600 mt-1">天然纤维纹理基材</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Recycle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">PLA or Cellophane</h4>
              <p className="text-sm text-green-700">Compostable inner barrier</p>
              <p className="text-xs text-green-600 mt-1">可堆肥内层阻隔</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Shield className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Certified Compostable</h4>
              <p className="text-sm text-green-700">Home or industrial options</p>
              <p className="text-xs text-green-600 mt-1">家庭或工业可堆肥认证</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'structures',
      title: 'Multiple Bag Structures Available',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_structure_variety_infographic_9570629.webp"
            imageAlt="Rice Paper Bag Structure Variety"
            title="Stand Up, Side Gusset, Flat Bottom & Flat Pouch"
            titleCn="自立袋、侧褶袋、平底袋、三边封"
            content="Achieve Pack® rice paper bags are available in all major pouch structures: Stand up pouch for shelf presence, Side gusset pouch for bulk products, Flat bottom (box pouch) for premium presentation, and Flat pouch (3-side seal) for sachets and samples. Each structure optimized for your specific product requirements."
            contentCn="Achieve Pack® 米纸袋提供所有主流袋型结构：自立袋展示性佳，侧褶袋适合大容量产品，平底盒型袋呈现高端质感，三边封扁袋用于小袋样品。每种结构均针对您的产品需求进行优化。"
            imageLeft={true}
            index={2}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Stand Up Pouch</h4>
              <p className="text-xs text-neutral-500">自立袋</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Side Gusset</h4>
              <p className="text-xs text-neutral-500">侧褶袋</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Flat Bottom</h4>
              <p className="text-xs text-neutral-500">平底袋</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Flat Pouch</h4>
              <p className="text-xs text-neutral-500">三边封</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">✓ Optional Features</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-amber-700"><strong>Self-standing bottom</strong></p>
                <p className="text-amber-600">自立底设计</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>Hang hole / Euro slot</strong></p>
                <p className="text-amber-600">挂孔 / 欧式挂孔</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>Easy tear notch</strong></p>
                <p className="text-amber-600">易撕口</p>
              </div>
              <div>
                <p className="text-amber-700"><strong>Side gusset expansion</strong></p>
                <p className="text-amber-600">侧褶加宽</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Functional Features: Zipper, Valve & Window',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_coffeevalve_degassing_7639370.webp"
            imageAlt="Rice Paper Bag Coffee Valve Degassing"
            title="Resealable Zipper, Degassing Valve & Clear Window"
            titleCn="可重复密封拉链、排气阀、透明窗口"
            content="Add functional features to your rice paper pouches: Resealable zipper or ziplock for extended freshness, one-way degassing valve perfect for coffee packaging, and clear window options for product visibility. All features maintain the compostable integrity of the packaging."
            contentCn="为米纸袋添加功能配件：可重复密封拉链延长保鲜期，单向排气阀适合咖啡包装，透明窗口展示产品。所有配件均保持包装的可堆肥特性。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Settings className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Zipper / Ziplock</h4>
              <p className="text-sm text-blue-700">Resealable closure options</p>
              <p className="text-xs text-blue-600 mt-1">可重复封口拉链</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Coffee className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Degassing Valve</h4>
              <p className="text-sm text-blue-700">One-way valve for coffee</p>
              <p className="text-xs text-blue-600 mt-1">咖啡专用排气阀</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Package className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Clear Window</h4>
              <p className="text-sm text-blue-700">Product visibility option</p>
              <p className="text-xs text-blue-600 mt-1">产品可视窗口</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">✓ Barrier Performance</h4>
            <p className="text-neutral-700 mb-2">
              Rice paper pouches with PLA or cellophane lining provide good moisture and oxygen barrier properties, suitable for dry goods, coffee beans, tea leaves, nuts, and pet food products.
            </p>
            <p className="text-neutral-600 text-sm">
              米纸袋配合 PLA 或赛璐玢内衬，提供良好的防潮防氧阻隔性能，适用于干货、咖啡豆、茶叶、坚果和宠物食品。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'applications-snacks',
      title: 'Applications: Snacks, Nuts & Dry Goods',
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_snacks_drygood_lifestyle_9593537.webp"
            imageAlt="Rice Paper Bags for Snacks and Dry Goods"
            title="Perfect for Snacks, Cereals, Nuts & Superfoods"
            titleCn="零食、麦片、坚果、超级食品的理想包装"
            content="Rice paper pouches are ideal for dry goods that benefit from natural, premium presentation. The authentic fiber texture conveys quality and sustainability. Stand up pouches with clear windows showcase your product while maintaining freshness with resealable zipper closures."
            contentCn="米纸袋是干货类产品的理想包装，天然高端的呈现方式。真实的纤维纹理传达品质与可持续理念。带透明窗的自立袋展示产品，同时配合可重复封口拉链保持新鲜度。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥜</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Nuts & Seeds</h4>
              <p className="text-xs text-neutral-500">坚果种子</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🍿</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Snacks</h4>
              <p className="text-xs text-neutral-500">休闲零食</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🥣</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Cereals</h4>
              <p className="text-xs text-neutral-500">麦片谷物</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🫐</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Superfoods</h4>
              <p className="text-xs text-neutral-500">超级食品</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications-coffee',
      title: 'Applications: Coffee & Tea',
      icon: <Coffee className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_coffee_tea_scene_3005344.webp"
            imageAlt="Rice Paper Bags for Coffee and Tea"
            title="Compostable Coffee & Tea Packaging"
            titleCn="可堆肥咖啡与茶叶包装"
            content="Rice paper coffee bags with one-way degassing valve are perfect for specialty coffee roasters. The natural paper texture aligns with artisan, sustainable brand values. Available in side gusset and flat bottom structures with capacity from 250g to 1kg+. Tea pouches benefit from the premium presentation and eco-friendly messaging."
            contentCn="带单向排气阀的米纸咖啡袋非常适合精品咖啡烘焙商。天然纸质纹理契合手工艺、可持续的品牌价值观。提供侧褶袋和平底袋结构，容量从 250g 到 1kg+。茶叶袋同样受益于高端呈现和环保理念。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Coffee className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-2">Coffee Packaging</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• One-way degassing valve 单向排气阀</li>
                <li>• Side gusset or flat bottom 侧褶或平底</li>
                <li>• 250g to 2kg capacity 多规格</li>
                <li>• Premium roaster presentation 高端烘焙呈现</li>
              </ul>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <Leaf className="h-6 w-6 text-green-700 mb-2" />
              <h4 className="font-semibold text-green-800 mb-2">Tea Packaging</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Loose leaf or tea bag options 散茶或茶包</li>
                <li>• Stand up or flat pouch 自立袋或扁袋</li>
                <li>• Small sachets available 小袋装可选</li>
                <li>• Natural aesthetic appeal 天然美学</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sizes-customization',
      title: 'Sizes & Customization',
      icon: <Ruler className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_size_customization_chart_0780816.webp"
            imageAlt="Rice Paper Bag Size Customization"
            title="From 250g to 2kg+: Custom Sizes & OEM"
            titleCn="从 250g 到 2kg+：定制尺寸与 OEM 服务"
            content="Achieve Pack® rice paper pouches are available in standard sizes from 250g to 2kg capacity, with fully custom dimensions available. Choose from kraft brown, white kraft, or natural rice paper texture surfaces. Support for digital printing or gravure printing with brand-specific artwork and logos."
            contentCn="Achieve Pack® 米纸袋提供 250g 到 2kg 标准规格，也支持完全定制尺寸。可选棕牛皮、白牛皮或天然米纸纹理表面。支持数码印刷或凹版印刷，配合品牌专属图案与 Logo。"
            imageLeft={true}
            index={6}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">Standard Size Options</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">250g</h5>
                <p className="text-xs text-neutral-500">Sample & retail size</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">500g</h5>
                <p className="text-xs text-neutral-500">Standard retail</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">1kg</h5>
                <p className="text-xs text-neutral-500">Family / bulk size</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-xl">2kg+</h5>
                <p className="text-xs text-neutral-500">Commercial size</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800">Kraft Brown</h4>
              <p className="text-sm text-amber-700">Classic natural look</p>
              <p className="text-xs text-amber-600 mt-1">经典棕牛皮</p>
            </div>
            <div className="bg-neutral-100 p-4 rounded-lg border border-neutral-300">
              <h4 className="font-semibold text-neutral-800">White Kraft</h4>
              <p className="text-sm text-neutral-700">Clean modern aesthetic</p>
              <p className="text-xs text-neutral-600 mt-1">白牛皮纸</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800">Rice Paper Texture</h4>
              <p className="text-sm text-green-700">Premium fiber feel</p>
              <p className="text-xs text-green-600 mt-1">米纸纹理</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'printing-branding',
      title: 'Printing & Brand Customization',
      icon: <Palette className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_printing_branding_detail_1178187.webp"
            imageAlt="Rice Paper Bag Printing and Branding"
            title="High-Quality Custom Printing"
            titleCn="高品质定制印刷"
            content="Achieve Pack® supports both digital printing for low MOQ orders (from 500 pieces) and gravure/plate printing for larger runs. Print your brand artwork, illustrations, and logos with vibrant colors on rice paper substrates. The natural paper texture enhances the premium feel of your printed design."
            contentCn="Achieve Pack® 支持数码印刷（低至 500 件起订）和凹版印刷（大批量订单）。在米纸基材上印刷您的品牌图案、插画和 Logo，色彩鲜艳。天然纸质纹理增强印刷设计的高端质感。"
            imageLeft={false}
            index={7}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3">Digital Printing</h4>
              <ul className="text-sm text-purple-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Low MOQ from 500pcs</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No plate costs</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Variable data printing</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Fast turnaround</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Gravure Printing</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Best for large volumes</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Excellent color consistency</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Special finishes available</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Cost-effective at scale</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-eeat',
      title: 'Why Trust Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/rice/a_achievepack_sustainability_manifesto_6720236.webp"
            imageAlt="Achieve Pack Sustainability Manifesto"
            title="Designed for Sustainable Brands"
            titleCn="为可持续品牌而设计"
            content="With over 13 years of flexible packaging expertise, Achieve Pack has supplied compostable rice paper pouches to coffee roasters, tea brands, superfood companies, and snack producers across North America, Europe, and Asia-Pacific. Our rice paper bags are certified compostable and trusted by 500+ brands worldwide."
            contentCn="凭借超过 13 年的软包装专业经验，Achieve Pack 已为北美、欧洲和亚太地区的咖啡烘焙商、茶叶品牌、超级食品公司和零食生产商提供可堆肥米纸袋。我们的米纸袋经过可堆肥认证，受到全球 500+ 品牌信赖。"
            imageLeft={true}
            index={8}
          />
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">FDA Compliant</h4>
              <p className="text-xs text-neutral-500">Food contact approved</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-500">Food safety standard</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">500+ Brands</h4>
              <p className="text-xs text-neutral-500">Trusted worldwide</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industry experience</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Leaf className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/materials/home-compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> Home Compostable
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/industry/coffee-tea" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Coffee className="h-4 w-4" /> Coffee & Tea Industry
              </Link>
              <Link to="/products/compostable-coffee-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Compostable Coffee Bags
              </Link>
              <Link to="/printing/digital-printing" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Palette className="h-4 w-4" /> Digital Printing
              </Link>
              <Link to="/features/reclosure-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Settings className="h-4 w-4" /> Reclosure Options
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Sparkles className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Rice Paper Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Send Email
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What is rice paper packaging made of?",
      answer: "Rice paper packaging from Achieve Pack® uses a natural fiber paper substrate with a distinctive texture, combined with compostable inner layers such as PLA (polylactic acid) or cellophane. The entire structure is designed to be fully compostable while providing adequate barrier protection for dry goods."
    },
    {
      question: "Is rice paper packaging truly compostable?",
      answer: "Yes, Achieve Pack® rice paper pouches are certified compostable. Depending on the specific material combination, they can be home compostable (OK Compost HOME) or industrial compostable (EN 13432 / ASTM D6400). The packaging breaks down naturally without leaving harmful residues."
    },
    {
      question: "What products are best suited for rice paper bags?",
      answer: "Rice paper bags are ideal for dry goods including coffee beans, tea leaves, nuts, snacks, cereals, superfoods, dried fruits, pet treats, and bakery items. The natural texture and compostable properties make them especially popular with organic, artisan, and eco-conscious brands."
    },
    {
      question: "Can I add a degassing valve for coffee packaging?",
      answer: "Yes, we offer one-way degassing valves for rice paper coffee bags. The valve allows CO2 released by freshly roasted coffee to escape while preventing oxygen from entering, maintaining freshness. Our valves are compatible with compostable packaging structures."
    },
    {
      question: "What are the minimum order quantities for rice paper pouches?",
      answer: "For digitally printed rice paper pouches, MOQ starts from 500 pieces. For gravure/plate printing with larger volumes, MOQ typically starts from 5,000-10,000 pieces depending on size and specifications. Contact us for exact quotes based on your requirements."
    },
    {
      question: "What sizes are available for rice paper bags?",
      answer: "We offer standard sizes from 250g to 2kg capacity, suitable for retail and bulk applications. Custom dimensions are available for specific product requirements. Popular formats include stand up pouches, side gusset bags, flat bottom bags, and flat pouches."
    },
    {
      question: "Can I print my brand design on rice paper pouches?",
      answer: "Yes, we offer both digital printing (low MOQ, no plate costs) and gravure printing (best for large volumes) on rice paper substrates. The natural paper texture adds a premium feel to printed designs. Full-color printing with brand artwork, logos, and product information is available."
    },
    {
      question: "What barrier options are available for rice paper packaging?",
      answer: "Rice paper pouches with PLA or cellophane inner layers provide good moisture and oxygen barrier suitable for most dry goods. For products requiring higher barrier protection, we can incorporate additional compostable barrier layers. Our team can recommend the best structure for your specific product requirements."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Materials", url: "/materials/compostable", description: "100% plastic-free eco-friendly material options" },
    { title: "Home Compostable", url: "/materials/home-compostable", description: "OK Compost HOME certified materials" },
    { title: "Industrial Compostable", url: "/materials/industrial-compostable", description: "EN 13432 / ASTM D6400 certified options" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    { title: "Flat Bottom Bags", url: "/packaging/flat-bottom-bags", description: "Premium box-bottom pouch style" },
    { title: "Side Gusset Bags", url: "/packaging/side-gusset-bags", description: "Classic side-fold coffee bag format" },
    // Products
    { title: "Compostable Coffee Bags", url: "/products/compostable-coffee-bags", description: "Eco-friendly coffee packaging" },
    { title: "Compostable Stand Up Pouches", url: "/products/compostable-stand-up-pouches", description: "Fully compostable standing pouches" },
    // Features
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Zipper and seal types available" },
    { title: "Digital Printing", url: "/printing/digital-printing", description: "Low MOQ custom printed pouches" },
    // Industries
    { title: "Coffee & Tea Industry", url: "/industry/coffee-tea", description: "Specialty coffee & tea packaging" },
    { title: "Snacks & Food", url: "/industry/snacks-food", description: "Dry snack packaging solutions" },
    { title: "Pet Food", url: "/industry/pet-food", description: "Pet treat and food pouches" },
    // Related function pages
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging solutions" },
    { title: "Spout Pouches", url: "/function/spout-pouches-juice", description: "Liquid packaging with spout" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Rice Paper Bags | Achieve Pack® Compostable Pouches"
        description="Achieve Pack® rice paper bags feature natural fiber texture with PLA/cellophane lining for 100% compostability. Ideal for coffee, tea, snacks, and dry goods. Stand up, side gusset, flat bottom options. Custom printing from 500pcs."
        keywords={['rice paper bags', 'compostable pouches', 'rice paper packaging', 'PLA pouches', 'cellophane bags', 'eco-friendly packaging', 'compostable coffee bags', 'natural fiber pouches', 'sustainable packaging', 'biodegradable bags', 'kraft paper bags', 'stand up pouch', 'side gusset bag', '米纸袋', '可堆肥包装', 'PLA包装']}
        canonicalUrl="https://achievepack.com/function/rice-paper-bags"
        heroTitle="Achieve Pack® Rice Paper Bags"
        heroSubtitle="Premium compostable pouches with natural fiber texture / 天然纤维纹理的高端可堆肥包装"
        heroImage="/imgs/function/rice/hero.webp"
        heroImageAlt="Achieve Pack Rice Paper & PLA Compostable Packaging"
        introSummary="Achieve Pack® rice paper bags combine natural fiber texture with PLA or cellophane lining for 100% compostable packaging. Available in stand up, side gusset, flat bottom structures. Perfect for coffee, tea, snacks, and eco-conscious brands."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Rice Paper Bags?"
        ctaDescription="Get Achieve Pack® rice paper pouches for coffee, tea, snacks, and dry goods. Certified compostable with premium aesthetics."
        ctaButtonText="Get a Quote"
      />
      
      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button onClick={() => setGalleryEnlarged(null)} className="absolute top-4 right-4 text-white hover:text-neutral-300 transition">
            <X className="h-8 w-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }} className="absolute left-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img src={galleryEnlarged.src} alt={ricePaperGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{ricePaperGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{ricePaperGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default RicePaperBagsPage
