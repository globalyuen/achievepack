import React, { useState } from 'react'
import { Flame, Shield, Package, Layers, Thermometer, Droplets, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Zap, Award, Users, Globe, FileCheck, Building2, Sparkles, Printer, Tag, Recycle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/retort/
const retortGallery = [
  { src: '/imgs/function/retort/retort-hero.webp', title: 'High-Barrier Retort Pouches', desc: '高阻隔蒸煮袋主 KV' },
  { src: '/imgs/function/retort/what-is-retort.webp', title: 'What Is Retort Packaging?', desc: '什么是蒸煮包装？' },
  { src: '/imgs/function/retort/layers.webp', title: '4-Layer Retort Structure', desc: '多层蒸煮结构' },
  { src: '/imgs/function/retort/high-temp.webp', title: 'High-Temperature Resistance', desc: '适配高温蒸煮杀菌' },
  { src: '/imgs/function/retort/barrier.webp', title: 'Extreme Barrier Protection', desc: '极致阻隔保护' },
  { src: '/imgs/function/retort/stront-seals.webp', title: 'Strong Hermetic Seals', desc: '牢固气密封口' },
  { src: '/imgs/function/retort/ready-to-heat.webp', title: 'Ready-to-Heat Convenience', desc: '可加热，易开启' },
  { src: '/imgs/function/retort/shelf-stable.webp', title: 'Shelf-Stable Ready Meals', desc: '常温即食餐' },
  { src: '/imgs/function/retort/more-meals.webp', title: 'More Meals Per Pallet', desc: '每托盘可装更多餐食' },
  { src: '/imgs/function/retort/custom-retort.webp', title: 'Design Your Retort System', desc: '设计你的蒸煮包装方案' },
  { src: '/imgs/function/retort/100pcs.webp', title: '100 pcs Low MOQ', desc: '起订量仅 100 包' },
  { src: '/imgs/function/retort/Full-color digital printing.webp', title: 'Full-Color Digital Printing', desc: '全彩数码印刷' },
  { src: '/imgs/function/retort/Launch a full flavor line with low MOQ.webp', title: 'Low MOQ for Many SKUs', desc: '低起订即可覆盖多口味' },
]

const DigitalPrintedRetortBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = retortGallery.length - 1
    if (newIndex >= retortGallery.length) newIndex = 0
    setGalleryEnlarged({ src: retortGallery[newIndex].src, index: newIndex })
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
      title: 'High-Barrier Retort Pouches Overview',
      icon: <Flame className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Shelf-stable ready meals without cans or jars</strong> — Digital printed retort pouches designed for high-temperature sterilization, offering long shelf life at ambient temperature with 100 pcs low MOQ.
            </p>
            <p className="text-neutral-700">
              无需铁罐玻璃，也能实现常温保质即食餐 — 数码印刷蒸煮袋，适配高温杀菌，100 包超低起订
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/retort/retort-hero.webp"
            imageAlt="High-Barrier Retort Pouches Hero"
            title="High-Barrier Retort Pouches"
            titleCn="高阻隔蒸煮袋"
            content="Using food-grade multi-layer film structures (PET/AL/NY/CPP), our retort pouches withstand 116–135°C sterilization. Ideal for curries, ready meals, baby food, pet food and more. Digital printing available from just 100 pieces."
            contentCn="使用食品级多层薄膜结构（PET/铝箔/尼龙/CPP），我们的蒸煮袋可承受 116–135℃ 杀菌。适合咖喱、即食餐、婴儿食品、宠物食品等，数码印刷仅需 100 包起订。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'what-is-retort',
      title: 'What Is Retort Packaging?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/what-is-retort.webp"
            imageAlt="What Is Retort Packaging"
            title="Flexible Pouches That Replace Cans and Jars"
            titleCn="什么是蒸煮包装？"
            content="Retort packaging uses multi-layer films that withstand 116–135°C sterilization, replacing traditional cans and jars for ready-to-eat food. Designed for long shelf life at ambient temperature without refrigeration."
            contentCn="蒸煮包装使用可承受 116–135℃ 杀菌的多层薄膜，替代传统铁罐和玻璃，服务即食食品。适用于长货架期常温保存，无需冷藏。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <Thermometer className="h-5 w-5 text-amber-600 mb-2" />
              <h4 className="font-semibold text-amber-800">116–135°C sterilization</h4>
              <p className="text-sm text-amber-700">可承受高温杀菌</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <Package className="h-5 w-5 text-amber-600 mb-2" />
              <h4 className="font-semibold text-amber-800">Replace cans & jars</h4>
              <p className="text-sm text-amber-700">替代铁罐和玻璃</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <CheckCircle className="h-5 w-5 text-amber-600 mb-2" />
              <h4 className="font-semibold text-amber-800">Ambient shelf life</h4>
              <p className="text-sm text-amber-700">常温长货架期</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'layers',
      title: '4-Layer Retort Structure',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/layers.webp"
            imageAlt="4-Layer Retort Structure"
            title="Multi-Layer Retort Structure"
            titleCn="多层蒸煮结构"
            content="Our retort pouches feature a 4-layer structure: PET (outer layer for printing), Aluminum foil (barrier layer), Nylon/OPA (puncture resistance), and CPP (heat-seal inner layer). This structure resists high heat, pressure and prevents delamination."
            contentCn="我们的蒸煮袋采用四层结构：PET（外层印刷）、铝箔（阻隔层）、尼龙/OPA（耐磨层）、CPP（内层耐高温密封层）。适应高温高压，不易分层。"
            imageLeft={true}
            index={2}
          />
          
          <div className="grid md:grid-cols-4 gap-3 mt-6">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800">PET</div>
              <p className="text-xs text-gray-600">外层 Print Layer</p>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800">AL</div>
              <p className="text-xs text-gray-600">铝箔 Barrier</p>
            </div>
            <div className="bg-gray-300 p-3 rounded-lg text-center">
              <div className="font-bold text-gray-800">NY/OPA</div>
              <p className="text-xs text-gray-600">尼龙 Puncture</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg text-center">
              <div className="font-bold text-amber-800">CPP</div>
              <p className="text-xs text-amber-600">耐高温 Seal</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'high-temp',
      title: 'High-Temperature Sterilization',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/high-temp.webp"
            imageAlt="High-Temperature Sterilization Ready"
            title="Withstands 121–135°C for 30–50 Minutes"
            titleCn="适配高温蒸煮杀菌"
            content="Our retort pouches are designed for commercial sterilization at 121–135°C (up to 250°F) for 30–50 minutes without seal failure. Perfect for retort processing lines producing shelf-stable ready meals."
            contentCn="我们的蒸煮袋可在 121–135℃（高达 250°F）连续 30–50 分钟保持封口稳定，适配商业蒸煮杀菌生产线，生产常温保质即食餐。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'barrier',
      title: 'Extreme Barrier Protection',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/barrier.webp"
            imageAlt="Extreme Barrier Protection"
            title="Oxygen, Moisture & Light Barrier"
            titleCn="极致阻隔保护"
            content="The aluminum foil layer provides extreme barrier protection: keeps oxygen out and flavor in, controls moisture to protect texture, shields from light to reduce nutrient loss. Maintains food quality for extended shelf life."
            contentCn="铝箔层提供极致阻隔保护：阻隔氧气锁住风味，控制水分保护口感，遮光减少营养流失。维持食品品质，延长货架期。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold text-blue-800">O₂ Barrier</h4>
              <p className="text-xs text-blue-600">氧气阻隔</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 text-center">
              <div className="text-2xl mb-2">💧</div>
              <h4 className="font-semibold text-cyan-800">Moisture Barrier</h4>
              <p className="text-xs text-cyan-600">水汽阻隔</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <div className="text-2xl mb-2">☀️</div>
              <h4 className="font-semibold text-purple-800">Light Barrier</h4>
              <p className="text-xs text-purple-600">遮光保护</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'seals',
      title: 'Strong Hermetic Seals',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/stront-seals.webp"
            imageAlt="Strong Hermetic Seals"
            title="Designed to Prevent Leaks and Bursting"
            titleCn="牢固气密封口"
            content="Our retort pouches feature strong, hermetic seals with optimized seal width and corner radius. Designed to prevent leaks and survive retort pressure without bursting, ensuring product safety and integrity."
            contentCn="我们的蒸煮袋具有牢固的气密封口，优化了封口宽度和圆角半径。设计用于防渗漏，并在蒸煮压力下不爆袋，确保产品安全和完整性。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'convenience',
      title: 'Ready-to-Heat Convenience',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/ready-to-heat.webp"
            imageAlt="Ready-to-Heat Convenience Features"
            title="Easy to Open, Ready to Eat"
            titleCn="可加热，易开启"
            content="Optional convenience features include tear notches for easy opening, zippers for resealing, spout attachments for liquids, and microwave-friendly designs for heat-and-eat meals. No can opener or extra dishes needed."
            contentCn="可选便利功能包括：撕口方便开启、拉链可重封、吸嘴适合液体、可选微波加热设计袋中即热即食。无需开罐器和额外餐具。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'shelf-stable',
      title: 'Shelf-Stable Ready Meals',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/shelf-stable.webp"
            imageAlt="Shelf-Stable Ready Meals"
            title="Less Packaging Weight, Same Protection"
            titleCn="更轻包装也能实现常温即食餐"
            content="Replace heavy cans and glass jars with lightweight flexible retort pouches. Perfect for curries, chili, pasta sauces, soups, baby food, pet food and more. Stand-up or flat pouch formats available."
            contentCn="用轻量柔性蒸煮袋替代传统罐瓶。适合咖喱、辣酱、意面酱、汤品、婴儿食品、宠物食品等。可选自立袋或平袋款式。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'logistics',
      title: 'Space & Cost Efficiency',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/more-meals.webp"
            imageAlt="More Meals Per Pallet"
            title="More Meals Per Pallet"
            titleCn="每托盘可装更多餐食"
            content="Lightweight, stackable retort pouches reduce shipping and storage costs significantly compared to cans and jars. More meals per pallet means lower logistics costs and smaller carbon footprint."
            contentCn="轻量可平铺堆叠的蒸煮袋，相比罐瓶大幅降低运输与仓储成本。每托盘可装更多餐食，意味着更低的物流成本和更小的碳足迹。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'low-moq',
      title: '100 pcs Low MOQ',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/100pcs.webp"
            imageAlt="100 pcs Low MOQ"
            title="Start Small, Scale Fast"
            titleCn="小批量起步，快速放大"
            content="Our digital printing technology enables minimum orders of just 100 pieces for printed trial runs. Perfect for product launches, sampling, and new flavor testing without large inventory risk."
            contentCn="我们的数码印刷技术支持印刷试单仅需 100 包起订。适合上新、打样和小批量口味测试，无需承担大量库存风险。"
            imageLeft={false}
            index={10}
          />
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="text-4xl font-bold text-green-700 mb-2">100 pcs</div>
            <p className="text-green-800 font-medium">起订量仅 100 包</p>
            <p className="text-sm text-green-600 mt-2">Minimum order for digital printed retort pouches</p>
          </div>
        </div>
      )
    },
    {
      id: 'digital-print',
      title: 'Full-Color Digital Printing',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Full-color digital printing.webp"
            imageAlt="Full-Color Digital Printing"
            title="No Plate Fees, Photo-Quality Graphics"
            titleCn="全彩数码印刷"
            content="Digital printing eliminates plate fees, making it ideal for short runs and multiple SKUs. Print multiple designs in one production run with photo-quality graphics perfect for premium branding."
            contentCn="数码印刷无需制版费，适合小批量和多 SKU。多个 SKU 可混合同批生产，照片级图案适配高端品牌形象。"
            imageLeft={true}
            index={11}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <Printer className="h-5 w-5 text-purple-600 mb-2" />
              <h4 className="font-semibold text-purple-800">No plate fees</h4>
              <p className="text-sm text-purple-700">无需制版费</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <Package className="h-5 w-5 text-purple-600 mb-2" />
              <h4 className="font-semibold text-purple-800">Multiple SKUs</h4>
              <p className="text-sm text-purple-700">多 SKU 混合生产</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <Sparkles className="h-5 w-5 text-purple-600 mb-2" />
              <h4 className="font-semibold text-purple-800">Photo-quality</h4>
              <p className="text-sm text-purple-700">照片级图案</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multi-sku',
      title: 'Low MOQ for Many SKUs',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/Launch a full flavor line with low MOQ.webp"
            imageAlt="Low MOQ for Many SKUs"
            title="Launch a Full Flavor Line with Low MOQ"
            titleCn="低起订即可覆盖多口味"
            content="Digital printing makes it easy to launch multiple flavors and designs without large inventory risk. Just 100 pieces per SKU means you can test Green Curry, Tomato Soup, Beef Stew, and Vegan Chili all at once."
            contentCn="数码印刷让你轻松测试包装与口味，而不压大量库存。每个口味仅需 100 包，可以同时测试青咖喱、番茄汤、红烧牛肉、素辣椒等多种口味。"
            imageLeft={false}
            index={12}
          />
        </div>
      )
    },
    {
      id: 'custom-system',
      title: 'Design Your Retort System',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/retort/custom-retort.webp"
            imageAlt="Design Your Custom Retort System"
            title="Design Your Custom Retort Packaging"
            titleCn="和 Achieve Pack 一起设计你的专属蒸煮包装方案"
            content="Three simple steps: 1) Choose pouch size, shape and format (flat or stand-up), 2) Select retort structure and barrier level, 3) Add your branding, artwork and features. From baby food to curries and pet meals, one retort system for your whole line."
            contentCn="三个简单步骤：1) 选择袋子尺寸、外形和款式（平袋或自立袋），2) 选择蒸煮结构与阻隔等级，3) 加入你的品牌、图案与功能细节。从婴儿食品到咖喱和宠物餐，一套蒸煮系统覆盖整条产品线。"
            imageLeft={true}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-neutral-900 mb-4">3 Steps to Your Custom Retort Pouch</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-neutral-800">Choose size & format</p>
                  <p className="text-xs text-neutral-600">选择尺寸与款式</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-neutral-800">Select structure & barrier</p>
                  <p className="text-xs text-neutral-600">选择结构与阻隔等级</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-neutral-800">Add branding & artwork</p>
                  <p className="text-xs text-neutral-600">加入品牌与图案</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-4 text-center">From baby food to curries and pet meals, one retort system for your whole line<br/>从婴儿食品到咖喱和宠物餐，一套蒸煮系统覆盖整条产品线</p>
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
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-primary-50 to-amber-50 p-6 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Industry-Leading Expertise in Retort Packaging</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of experience manufacturing flexible packaging, Achieve Pack has supplied retort pouches to ready meal brands, baby food manufacturers, and pet food companies across North America, Europe, and Asia-Pacific.
            </p>
            <p className="text-neutral-600">
              Our BRC and ISO-certified facilities produce <Link to="/packaging/retort-pouches" className="text-primary-600 underline hover:text-primary-800">retort pouches</Link> using food-grade multi-layer films designed for commercial sterilization, trusted by leading <Link to="/industry/food" className="text-primary-600 underline hover:text-primary-800">food brands</Link> worldwide.
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <FileCheck className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-bold text-neutral-900">FDA Compliant</h4>
              <p className="text-xs text-neutral-600">Food Contact Safe</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-bold text-neutral-900">BRC Certified</h4>
              <p className="text-xs text-neutral-600">Global Food Standard</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-bold text-neutral-900">500+ Brands</h4>
              <p className="text-xs text-neutral-600">Trusted by Industry</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center shadow-sm">
              <Globe className="h-8 w-8 mx-auto mb-2 text-amber-600" />
              <h4 className="font-bold text-neutral-900">13+ Years</h4>
              <p className="text-xs text-neutral-600">Manufacturing Expert</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-600" />
              Explore Related Packaging Solutions
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/recyclable-mono-pe" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> Recyclable Mono-PE
              </Link>
              <Link to="/materials/pcr" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Recycle className="h-4 w-4" /> PCR Materials
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/packaging/stand-up-pouches" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Package className="h-4 w-4" /> Stand Up Pouches
              </Link>
              <Link to="/industry/food" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <Flame className="h-4 w-4" /> Food Industry
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 hover:underline">
                <FileCheck className="h-4 w-4" /> Our Certificates
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Flame className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=Digital Printed Retort Bags Quote" className="block w-full bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition">
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
      question: "What is retort packaging and how does it work?",
      answer: "Retort packaging uses multi-layer flexible films that can withstand high-temperature sterilization (116–135°C). The sealed pouches go through a commercial retort process that kills bacteria, enabling shelf-stable storage at ambient temperature without refrigeration—just like canned food but in a flexible format."
    },
    {
      question: "What temperature can retort pouches withstand?",
      answer: "Our retort pouches are designed for commercial sterilization at 121–135°C (250–275°F) for 30–50 minutes without seal failure. The multi-layer structure (PET/AL/NY/CPP) ensures the pouch maintains integrity throughout the retort process."
    },
    {
      question: "What is the minimum order quantity for digital printed retort bags?",
      answer: "Our digital printing technology enables a minimum order of just 100 pieces for printed retort pouches. This makes it ideal for product launches, sampling, new flavor testing, and small brands looking to minimize inventory risk."
    },
    {
      question: "What products are suitable for retort pouches?",
      answer: "Retort pouches are ideal for ready-to-eat meals (curries, pasta, soups), baby food and purees, pet food (wet food, treats), sauces and gravies, seafood, and any product requiring shelf-stable packaging without refrigeration."
    },
    {
      question: "How do retort pouches compare to cans and jars?",
      answer: "Retort pouches are lighter, require less storage space, have lower shipping costs, and offer better heat penetration for faster processing. They're also easier for consumers to open and can be microwaved in many cases. The shelf life is comparable to traditional cans."
    },
    {
      question: "Can I print multiple SKUs in one order?",
      answer: "Yes! Digital printing eliminates the need for plates, so you can mix multiple designs in a single production run. This is perfect for launching a full flavor line or testing different packaging designs without committing to large quantities of each."
    },
    {
      question: "What barrier properties do retort pouches offer?",
      answer: "Our retort pouches feature aluminum foil barrier layer that provides excellent protection against oxygen, moisture, and light. This maintains food quality, preserves flavor and nutrients, and extends shelf life—typically 12–24 months at ambient temperature."
    },
    {
      question: "What certifications do your retort pouches have?",
      answer: "Our retort pouches are manufactured in BRC and ISO-certified facilities. All materials are FDA compliant for food contact. We can provide COA, COC, and third-party test reports for retort resistance, seal strength, and barrier properties."
    }
  ]

  const relatedLinks = [
    // Material options
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Recyclable single-material options" },
    { title: "PCR Materials", url: "/materials/pcr", description: "Post-consumer recycled content" },
    { title: "High Barrier Films", url: "/materials/high-barrier", description: "Aluminum and metallized options" },
    { title: "Compostable Pouches", url: "/materials/compostable", description: "Eco-friendly alternatives" },
    // Packaging shapes
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Self-standing retort pouches" },
    { title: "Flat Pouches", url: "/packaging/flat-pouches", description: "Traditional flat retort bags" },
    { title: "Spout Pouches", url: "/packaging/spout-pouches", description: "Liquid-dispensing options" },
    // Features
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Zippers and reseal features" },
    { title: "Printing Capabilities", url: "/features/printing", description: "Digital and rotogravure" },
    // Related function pages
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Heat-and-eat solutions" },
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging" },
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Safety-compliant CR packaging" },
    // Knowledge & Support
    { title: "Certificates", url: "/company/certificates", description: "View our certifications" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Digital Printed Retort Bags | 100 pcs Low MOQ | High-Barrier Sterilization Pouches"
        description="Custom digital printed retort pouches with 100 pcs low MOQ. High-barrier multi-layer structure withstands 121-135°C sterilization. Ideal for ready meals, baby food, pet food. BRC certified, FDA compliant."
        keywords={['retort pouches', 'retort bags', 'digital printed pouches', 'sterilization pouches', 'ready meal packaging', 'baby food pouches', 'pet food bags', 'shelf stable packaging', 'high barrier pouches', 'low MOQ pouches', '100 pcs minimum order', 'aluminum foil pouches', 'heat resistant bags', 'food safe pouches']}
        canonicalUrl="https://achievepack.com/function/digital-printed-retort-bags"
        heroTitle="Digital Printed Retort Bags"
        heroSubtitle="100 pcs Low MOQ · High-Barrier · 121–135°C Sterilization Ready"
        heroImage="/imgs/function/retort/retort-hero.webp"
        heroImageAlt="Achieve Pack Digital Printed High-Barrier Retort Pouches"
        introSummary="Custom retort pouches with digital printing from just 100 pieces. Multi-layer high-barrier structure for commercial sterilization. Perfect for ready meals, baby food, pet food and more."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Design Your Retort Pouches?"
        ctaDescription="Get custom retort pouches with digital printing from 100 pcs. Food-safe, high-barrier, and sterilization-ready."
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
          <img src={galleryEnlarged.src} alt={retortGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{retortGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{retortGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {retortGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DigitalPrintedRetortBagsPage
