import React, { useState } from 'react'
import { Tag, Sticker, Layers, Leaf, Palette, Printer, Sparkles, Settings, Truck, Building2, Package, CheckCircle, Star, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck, Shield, Users, Droplets } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Combined gallery images from custom-label and custom-sticker
const combinedGallery = [
  // Custom Labels
  { src: '/imgs/label/custom-label/hero.webp', title: 'Custom Sheet Labels', desc: '定制纸张不干胶标签', category: 'labels' },
  { src: '/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp', title: 'Brand Label Overview', desc: '品牌标签总览', category: 'labels' },
  { src: '/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp', title: 'Labels on Pouches', desc: '标签应用于自立袋', category: 'labels' },
  { src: '/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp', title: 'Multi-Material Labels', desc: '多种材质标签', category: 'labels' },
  // Custom Stickers
  { src: '/imgs/label/custom-sticker/hero.webp', title: 'Custom Stickers', desc: '定制贴纸', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp', title: 'Four Sticker Types', desc: '四种贴纸类型', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp', title: 'Custom Shapes', desc: '自定义形状', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp', title: 'Eco-Friendly Materials', desc: '环保材料', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp', title: 'Surface Finishes', desc: '表面工艺', category: 'stickers' },
  { src: '/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp', title: 'Brand Applications', desc: '品牌应用场景', category: 'stickers' },
]

const LabelsAndStickersPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = combinedGallery.length - 1
    if (newIndex >= combinedGallery.length) newIndex = 0
    setGalleryEnlarged({ src: combinedGallery[newIndex].src, index: newIndex })
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            <div className="bg-neutral-100 px-3 py-2 text-xs text-neutral-500 text-center">Click to enlarge 点击放大</div>
          </button>
        </>
      )}
    </div>
  )
  
  const sections = [
    {
      id: 'overview',
      title: 'Custom Labels & Stickers Overview',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Complete labeling and sticker solutions for every brand</strong> — From professional sheet labels to factory-grade roll stickers, we provide full customization with premium materials, eco-friendly options, and expert printing capabilities.
            </p>
            <p className="text-neutral-700 mb-4">
              为每个品牌提供完整的标签和贴纸解决方案 — 从专业纸张不干胶标签到工厂级卷装贴纸，我们提供优质材料、环保选项和专业印刷能力的全面定制服务。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Sheet Labels</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Roll Stickers</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Die-Cut Stickers</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Kiss Cut</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Eco-Friendly</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/products/custom-labels" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/label/custom-label/hero.webp" alt="Custom Sheet Labels" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 mb-2">Custom Sheet Labels</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">定制纸张不干胶标签</p>
              <p className="text-neutral-600 text-sm">Professional sheet labels with no minimum order, print-ready in 2-3 business days. Perfect for products, events, and small batch customization.</p>
            </Link>
            <Link to="/products/custom-stickers" className="group block bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary-400 hover:shadow-lg transition-all">
              <img src="/imgs/label/custom-sticker/hero.webp" alt="Custom Stickers" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform" />
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 mb-2">Custom Stickers</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">工厂级定制贴纸</p>
              <p className="text-neutral-600 text-sm">Factory-grade custom stickers with multiple types, shapes, materials, and finishes. Cut-to-size, roll, sheet, and kiss-cut options.</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'labels',
      title: 'Custom Sheet Labels',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp"
            imageAlt="Brand label product overview"
            title="Professional Sheet Labels for Any Product"
            titleCn="适用于任何产品的专业纸张标签"
            content="High-quality sheet labels designed for products, events, personal use, and small batch customization. Multiple material options including white matte, glossy, kraft, and clear films. Strong permanent adhesive ensures your labels stay perfectly applied."
            contentCn="高质量纸张不干胶标签，适用于产品标签、活动标签、个人定制和小批量生产。多种材质可选，包括白色哑光、亮光、牛皮纸和透明薄膜。强力永久胶粘剂确保标签完美贴附。"
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp"
            imageAlt="Labels on stand-up pouches"
            title="Perfect Pairing with Flexible Packaging"
            titleCn="与软包装完美搭配"
            content="Our custom labels are designed to complement our stand-up pouches and flexible packaging. Whether you need branded labels for your pouches or separate product labeling, we ensure consistent quality across your entire packaging system."
            contentCn="我们的定制标签旨在与自立袋和软包装完美配合。无论您需要袋子品牌标签还是独立产品贴标，我们确保整个包装系统的一致质量。"
            imageLeft={false}
            index={2}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <FileCheck className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">No Minimum</h5>
              <p className="text-xs text-neutral-600">Order any quantity</p>
              <p className="text-xs text-primary-600">无最低起订量</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Truck className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">2-3 Days</h5>
              <p className="text-xs text-neutral-600">Print-ready turnaround</p>
              <p className="text-xs text-primary-600">快速出货</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Palette className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Multi-Design</h5>
              <p className="text-xs text-neutral-600">Discounts available</p>
              <p className="text-xs text-primary-600">多设计优惠</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Strong Adhesive</h5>
              <p className="text-xs text-neutral-600">Permanent hold</p>
              <p className="text-xs text-primary-600">强力胶粘</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'stickers',
      title: 'Custom Stickers',
      icon: <Sticker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp"
            imageAlt="Four types of custom stickers"
            title="Four Sticker Types for Every Need"
            titleCn="四种贴纸类型满足各种需求"
            content="Choose from Cut to Size (individual die-cut stickers), Roll (continuous roll for high-volume application), Sheet (multiple stickers per sheet), and Kiss Cut (stickers on backing sheet for easy peeling). Each type is optimized for specific use cases."
            contentCn="可选择剪裁单张、卷装、纸张式和亲切切割。每种类型都针对特定使用场景进行优化。"
            imageLeft={true}
            index={5}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp"
            imageAlt="Custom shapes and sizes for stickers"
            title="Unlimited Shape & Size Options"
            titleCn="无限形状与尺寸选择"
            content="Go beyond standard shapes with our custom die-cutting capabilities. Square, circle, oval, rounded rectangle, heart, hexagon, starburst, or completely custom shapes — we can produce any design you need with precision cutting."
            contentCn="突破标准形状限制，我们提供定制模切能力。方形、圆形、椭圆、圆角矩形、心形、六边形、星爆形，或完全自定义形状。"
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Roll Stickers</h5>
              <p className="text-xs text-neutral-600">High-volume ready</p>
              <p className="text-xs text-primary-600">卷装贴纸</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Settings className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Die-Cut</h5>
              <p className="text-xs text-neutral-600">Custom shapes</p>
              <p className="text-xs text-primary-600">模切成型</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Sheet Stickers</h5>
              <p className="text-xs text-neutral-600">Multi per sheet</p>
              <p className="text-xs text-primary-600">纸张式</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <Sparkles className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h5 className="font-semibold text-neutral-900 text-sm">Kiss Cut</h5>
              <p className="text-xs text-neutral-600">Easy peeling</p>
              <p className="text-xs text-primary-600">亲切切割</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Materials & Finishes',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp"
            imageAlt="Eco-friendly PLA and paper-based materials"
            title="Eco-Friendly & Sustainable Options"
            titleCn="环保可持续选择"
            content="Choose environmentally responsible materials including PLA-based biodegradable films, FSC-certified paper stocks, and recyclable substrates. Perfect for brands committed to reducing environmental impact."
            contentCn="选择环保负责任的材料，包括PLA基可降解薄膜、FSC认证纸张和可回收基材。非常适合致力于减少环境影响的品牌。"
            imageLeft={true}
            index={7}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp"
            imageAlt="Surface finish comparison"
            title="Premium Surface Finishes"
            titleCn="高端表面工艺"
            content="Elevate your labels and stickers with professional finishes: Matte for sophisticated, non-reflective look; Gloss for vibrant shine; UV Coating for enhanced durability; and Hot Foil Stamping for luxurious metallic accents."
            contentCn="用专业表面处理提升标签和贴纸品质：哑光呈现精致外观、亮光带来光泽、UV涂层增强耐久性、烫金工艺打造奢华金属质感。"
            imageLeft={false}
            index={8}
          />

          <div className="grid md:grid-cols-5 gap-3">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">Matte</div>
              <p className="text-xs text-neutral-600">哑光</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">Gloss</div>
              <p className="text-xs text-neutral-600">亮光</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">UV Coating</div>
              <p className="text-xs text-neutral-600">UV涂层</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">Hot Foil</div>
              <p className="text-xs text-neutral-600">烫金</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg text-center">
              <div className="font-bold text-neutral-800 text-sm">Kraft</div>
              <p className="text-xs text-neutral-600">牛皮纸</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Brand Applications',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp"
            imageAlt="Brand application collage"
            title="From Factory to Brand Application"
            titleCn="从工厂到品牌落地"
            content="Our labels and stickers work seamlessly across applications: product branding on bottles and jars, flexible packaging labeling, box sealing, food container identification, promotional materials, and event marketing."
            contentCn="我们的标签和贴纸可无缝应用于各种场景：瓶罐产品品牌、软包装贴标、盒子封口、食品容器标识、促销材料和活动营销。"
            imageLeft={true}
            index={9}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Package className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Product Branding</h5>
              <p className="text-sm text-neutral-600 mt-1">Bottles, jars, pouches, boxes</p>
              <p className="text-xs text-primary-600 mt-1">产品品牌贴标</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Package Sealing</h5>
              <p className="text-sm text-neutral-600 mt-1">Seal bags, boxes, envelopes</p>
              <p className="text-xs text-primary-600 mt-1">包装封口</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Zap className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Marketing & Events</h5>
              <p className="text-sm text-neutral-600 mt-1">Promotional, giveaways</p>
              <p className="text-xs text-primary-600 mt-1">营销与活动</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'related',
      title: 'Complete Your Packaging Solution',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">Combine custom labels and stickers with our flexible packaging solutions for a complete branded experience:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Stand-Up Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Flexible packaging base</p>
            </Link>
            <Link to="/packaging/flat-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Layers className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Flat Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Sachets & samples</p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Surface Finishes</h5>
              <p className="text-xs text-neutral-600 mt-1">Matte, gloss, soft-touch</p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Leaf className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Compostable Materials</h5>
              <p className="text-xs text-neutral-600 mt-1">Eco-friendly options</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Order Custom Labels & Stickers?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Custom Quote Today</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your labeling and sticker requirements. Professional quality, flexible options, and expert support throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20labels%20and%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Chat
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Labels and Stickers Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              Email Quote
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout
        title="Custom Labels & Stickers | Sheet Labels, Roll Stickers, Die-Cut | Achieve Pack"
        description="Professional custom labels and stickers with premium materials, eco-friendly options, and expert finishes. Sheet labels, roll stickers, die-cut, and kiss-cut types. No minimum order."
        canonicalUrl="https://achievepack.com/products/labels-and-stickers"
        heroTitle="Custom Labels & Stickers"
        heroSubtitle="Sheet Labels • Roll Stickers • Die-Cut • Eco-Friendly Options"
        heroDescription="Complete labeling and sticker solutions with premium materials, custom shapes, and professional finishes for every brand."
        heroDescriptionCn="优质材料、自定义形状和专业表面处理的完整标签和贴纸解决方案。"
        heroImage="/imgs/label/custom-label/hero.webp"
        sections={sections}
        keywords={['custom labels', 'custom stickers', 'sheet labels', 'roll stickers', 'die-cut stickers', 'kiss cut stickers', 'eco-friendly labels', 'product labels', 'branded stickers']}
        articleType="Product"
        lastUpdated="2024-12-30"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Custom Labels & Stickers",
          "description": "Professional custom labels and stickers with premium materials, eco-friendly options, and expert finishes.",
          "brand": {
            "@type": "Brand",
            "name": "Achieve Pack"
          },
          "category": "Labels & Stickers",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127"
          }
        }}
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={combinedGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{combinedGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{combinedGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {combinedGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LabelsAndStickersPage
