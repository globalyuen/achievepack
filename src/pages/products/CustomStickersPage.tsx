import React, { useState } from 'react'
import { Sticker, Layers, Leaf, Palette, Printer, Sparkles, Settings, Truck, Building2, Package, CheckCircle, Star, Calendar, Mail, X, ChevronLeft, ChevronRight, Globe, Award, Zap, FileCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/label/custom-sticker/
const customStickerGallery = [
  { src: '/imgs/label/custom-sticker/hero.webp', title: 'Custom Stickers Overview', desc: '定制贴纸总览' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp', title: 'Four Sticker Types', desc: '四种贴纸类型' },
  { src: '/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp', title: 'Custom Shapes & Sizes', desc: '形状与尺寸定制' },
  { src: '/imgs/label/custom-sticker/a_achievepack_materials_swatch_wall_2342788.webp', title: 'Material Options', desc: '材料选项' },
  { src: '/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp', title: 'Eco-Friendly Materials', desc: '环保材料' },
  { src: '/imgs/label/custom-sticker/a_achievepack_printing_methods_detail_2866450.webp', title: 'Printing Methods', desc: '印刷方式' },
  { src: '/imgs/label/custom-sticker/a_achievepack_ink_types_effects_1477402.webp', title: 'Ink Types & Effects', desc: '油墨类型与效果' },
  { src: '/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp', title: 'Surface Finishes', desc: '表面工艺' },
  { src: '/imgs/label/custom-sticker/a_achievepack_order_config_interface_2146544.webp', title: 'Easy Configuration', desc: '便捷配置' },
  { src: '/imgs/label/custom-sticker/a_achievepack_ordering_process_steps_1608220.webp', title: 'Ordering Process', desc: '订购流程' },
  { src: '/imgs/label/custom-sticker/a_achievepack_brand_collage_application_8409454.webp', title: 'Brand Applications', desc: '品牌应用场景' },
]

const CustomStickersPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = customStickerGallery.length - 1
    if (newIndex >= customStickerGallery.length) newIndex = 0
    setGalleryEnlarged({ src: customStickerGallery[newIndex].src, index: newIndex })
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
      id: 'intro',
      title: 'Custom Stickers Overview',
      icon: <Sticker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Factory-grade custom stickers with premium materials and finishes</strong> — From cut-to-size singles to roll stickers, we offer complete customization for shape, material, printing, and finishing options.
            </p>
            <p className="text-neutral-700 mb-4">
              工厂级定制贴纸，优质材料与表面工艺 — 从剪裁单张到卷装贴纸，提供形状、材质、印刷和表面处理的全方位定制。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Cut to Size</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Roll Stickers</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Sheet Stickers</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Kiss Cut</span>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_overview_four_types_8850197.webp"
            imageAlt="Four types of custom stickers"
            title="Four Sticker Types for Every Need"
            titleCn="四种贴纸类型满足各种需求"
            content="Choose from Cut to Size (individual die-cut stickers), Roll (continuous roll for high-volume application), Sheet (multiple stickers per sheet), and Kiss Cut (stickers on backing sheet for easy peeling). Each type is optimized for specific use cases and application methods."
            contentCn="可选择剪裁单张（单独模切贴纸）、卷装（适合大批量应用的连续卷）、纸张式（每张多个贴纸）和亲切切割（带衬纸便于撕取）。每种类型都针对特定使用场景和应用方式进行优化。"
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_sticker_shapes_custom_5720791.webp"
            imageAlt="Custom shapes and sizes for stickers"
            title="Unlimited Shape & Size Options"
            titleCn="无限形状与尺寸选择"
            content="Go beyond standard shapes with our custom die-cutting capabilities. Square, circle, oval, rounded rectangle, heart, hexagon, starburst, or completely custom shapes — we can produce any design you need with precision cutting."
            contentCn="突破标准形状限制，我们提供定制模切能力。方形、圆形、椭圆、圆角矩形、心形、六边形、星爆形，或完全自定义形状——我们可以精确切割生产任何您需要的设计。"
            imageLeft={false}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'materials',
      title: 'Material Options',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_materials_swatch_wall_2342788.webp"
            imageAlt="Material options swatch wall"
            title="Premium Material Selection"
            titleCn="优质材料选择"
            content="Our material library includes White Kraft paper for an organic feel, C2S coated paper for vibrant colors, Clear Plastic for transparent applications, White Plastic for durability, and natural Kraft Paper for eco-conscious brands."
            contentCn="我们的材料库包括：白牛皮纸带来自然有机感、C2S涂布纸呈现鲜艳色彩、透明塑料适合透明应用、白色塑料提供耐用性、天然牛皮纸满足环保品牌需求。"
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">White Kraft</h5>
              <p className="text-xs text-neutral-600 mt-1">Natural look</p>
              <p className="text-xs text-primary-600">白牛皮纸</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">C2S Coated</h5>
              <p className="text-xs text-neutral-600 mt-1">Vibrant colors</p>
              <p className="text-xs text-primary-600">涂布纸</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Layers className="h-5 w-5 text-neutral-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">Clear Plastic</h5>
              <p className="text-xs text-neutral-600 mt-1">Transparent</p>
              <p className="text-xs text-primary-600">透明塑料</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-gray-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">White Plastic</h5>
              <p className="text-xs text-neutral-600 mt-1">Durable</p>
              <p className="text-xs text-primary-600">白色塑料</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <Package className="h-5 w-5 text-orange-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">Kraft Paper</h5>
              <p className="text-xs text-neutral-600 mt-1">Eco-friendly</p>
              <p className="text-xs text-primary-600">牛皮纸</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eco',
      title: 'Eco-Friendly & Sustainable',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_eco_materials_pla_6955352.webp"
            imageAlt="Eco-friendly PLA and paper-based stickers"
            title="Sustainable Material Options"
            titleCn="可持续材料方案"
            content="Choose environmentally responsible materials including PLA-based biodegradable films, FSC-certified paper stocks, and recyclable substrates. Perfect for brands committed to reducing their environmental footprint."
            contentCn="选择环保负责任的材料，包括PLA基可降解薄膜、FSC认证纸张和可回收基材。非常适合致力于减少环境足迹的品牌。"
            imageLeft={false}
            index={4}
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Eco-Friendly Options
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">PLA Biodegradable</p>
                  <p className="text-sm text-neutral-600">Plant-based films</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">FSC Certified Paper</p>
                  <p className="text-sm text-neutral-600">Sustainable forestry</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-800">Recyclable Substrates</p>
                  <p className="text-sm text-neutral-600">End-of-life ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'printing',
      title: 'Printing Methods & Ink Types',
      icon: <Printer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_printing_methods_detail_2866450.webp"
            imageAlt="Professional printing methods detail"
            title="Factory-Grade Printing Technology"
            titleCn="工厂级印刷技术"
            content="We utilize multiple printing technologies to achieve the best results: Flexography for cost-effective high-volume runs, Gravure for exceptional detail, Digital printing for short runs and variable data, and UV printing for special effects."
            contentCn="我们采用多种印刷技术以获得最佳效果：柔版印刷适合高性价比大批量、凹版印刷呈现卓越细节、数字印刷适合短版和可变数据、UV印刷实现特殊效果。"
            imageLeft={true}
            index={5}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_ink_types_effects_1477402.webp"
            imageAlt="Ink types and special effects"
            title="Specialty Ink Options"
            titleCn="特殊油墨选项"
            content="Beyond standard inks, we offer water-based eco inks, soy/vegetable-based sustainable options, fluorescent colors for eye-catching impact, and metallic Pantone inks for premium finishes that catch the light."
            contentCn="除标准油墨外，我们还提供水性环保墨、大豆/植物基可持续选项、荧光色打造吸睛效果，以及金属潘通墨实现捕捉光线的高端表面效果。"
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">Flexography</div>
              <p className="text-xs text-neutral-600">High-volume, cost-effective</p>
              <p className="text-xs text-primary-600 mt-1">柔版印刷</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">Gravure</div>
              <p className="text-xs text-neutral-600">Exceptional detail</p>
              <p className="text-xs text-primary-600 mt-1">凹版印刷</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">Digital</div>
              <p className="text-xs text-neutral-600">Short runs, variable data</p>
              <p className="text-xs text-primary-600 mt-1">数字印刷</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="text-lg font-bold text-primary-600 mb-2">UV Print</div>
              <p className="text-xs text-neutral-600">Special effects</p>
              <p className="text-xs text-primary-600 mt-1">UV印刷</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'finishes',
      title: 'Surface Finishes & Effects',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_surface_finishes_comparison_4126542.webp"
            imageAlt="Surface finish comparison matte gloss UV foil"
            title="Premium Finish Options"
            titleCn="高端表面工艺"
            content="Elevate your stickers with professional finishes: Matte for a sophisticated, non-reflective look; Gloss for vibrant, eye-catching shine; UV Coating for enhanced durability; and Hot Foil Stamping for luxurious metallic accents."
            contentCn="用专业表面处理提升贴纸品质：哑光呈现精致无反射外观、亮光带来鲜艳吸睛光泽、UV涂层增强耐久性、烫金工艺打造奢华金属质感。"
            imageLeft={true}
            index={7}
          />

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">Matte</div>
              <p className="text-xs text-neutral-600">Sophisticated, non-reflective</p>
              <p className="text-xs text-primary-600 mt-1">哑光</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">Gloss</div>
              <p className="text-xs text-neutral-600">Vibrant, shiny</p>
              <p className="text-xs text-primary-600 mt-1">亮光</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">UV Coating</div>
              <p className="text-xs text-neutral-600">Enhanced durability</p>
              <p className="text-xs text-primary-600 mt-1">UV涂层</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-5 rounded-lg text-center">
              <div className="font-bold text-neutral-800 mb-2">Hot Foil</div>
              <p className="text-xs text-neutral-600">Metallic accents</p>
              <p className="text-xs text-primary-600 mt-1">烫金</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ordering',
      title: 'Easy Ordering Process',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_order_config_interface_2146544.webp"
            imageAlt="Order configuration interface"
            title="Simple Configuration System"
            titleCn="简洁配置系统"
            content="Our intuitive ordering system lets you select Type (Cut to Size, Roll, Sheet, Kiss Cut), Shape (Square, Circle, Oval, Custom), Material (White Kraft, Clear Plastic, White Plastic, Kraft Paper), and Finish (Matte, Gloss) — all in one streamlined interface."
            contentCn="我们直观的订购系统让您可以选择类型（剪裁单张、卷装、纸张式、亲切切割）、形状（方形、圆形、椭圆、自定义）、材质（白牛皮纸、透明塑料、白色塑料、牛皮纸）和表面处理（哑光、亮光）——全部在一个简化界面中完成。"
            imageLeft={false}
            index={8}
          />

          <AlternatingSection
            image="/imgs/label/custom-sticker/a_achievepack_ordering_process_steps_1608220.webp"
            imageAlt="Four-step ordering process"
            title="4 Simple Steps to Your Custom Stickers"
            titleCn="四步轻松定制贴纸"
            content="1) Customize your packaging with our online configurator. 2) Add to quote and submit your requirements. 3) Consult with our packaging expert for optimization. 4) Production begins with fast shipping to your location."
            contentCn="1）使用在线配置器定制您的包装。2）添加到报价并提交需求。3）与包装专家咨询优化方案。4）开始生产并快速发货到您的位置。"
            imageLeft={true}
            index={9}
          />

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-xl text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">Customize</h5>
                <p className="text-sm text-white/80">Configure your sticker specs</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">Submit Quote</h5>
                <p className="text-sm text-white/80">Add to quote & submit</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">Consult Expert</h5>
                <p className="text-sm text-white/80">Review with our team</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h5 className="font-semibold mb-2">Production</h5>
                <p className="text-sm text-white/80">Fast manufacturing & shipping</p>
              </div>
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
            imageAlt="Brand application collage showing stickers on various products"
            title="From Factory to Brand Application"
            titleCn="从工厂到品牌落地"
            content="Our stickers work seamlessly across applications: product branding on glass bottles and jars, box and package sealing, food container labeling, promotional materials, and event marketing. Complete capability from production to your customers' hands."
            contentCn="我们的贴纸可无缝应用于各种场景：玻璃瓶罐产品品牌、盒子和包装封口、食品容器贴标、促销材料和活动营销。从生产到客户手中的完整能力。"
            imageLeft={false}
            index={10}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <Package className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Product Branding</h5>
              <p className="text-sm text-neutral-600 mt-1">Bottles, jars, containers</p>
              <p className="text-xs text-primary-600 mt-1">产品品牌贴标</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <FileCheck className="h-6 w-6 text-primary-600 mb-3" />
              <h5 className="font-semibold text-neutral-900">Package Sealing</h5>
              <p className="text-sm text-neutral-600 mt-1">Boxes, bags, envelopes</p>
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
          <p className="text-neutral-700">Combine custom stickers with our flexible packaging solutions for a complete branded experience:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/products/custom-labels" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Sticker className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Custom Labels</h5>
              <p className="text-xs text-neutral-600 mt-1">Sheet labels for products</p>
            </Link>
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Stand-Up Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Flexible packaging base</p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Surface Finishes</h5>
              <p className="text-xs text-neutral-600 mt-1">Matte, gloss, soft-touch</p>
            </Link>
            <Link to="/materials/compostable" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Award className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Compostable Materials</h5>
              <p className="text-xs text-neutral-600 mt-1">Eco-friendly options</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Order Custom Stickers?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Your Custom Stickers Quote</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your sticker requirements. Factory-grade quality, flexible options, and expert support throughout the process.
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
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20stickers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Chat
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Stickers Quote"
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
        title="Custom Stickers | Factory-Grade Printing | Achieve Pack"
        description="Factory-grade custom stickers with premium materials, multiple shapes, eco-friendly options, and professional finishes. Cut-to-size, roll, sheet, and kiss-cut types available."
        canonicalUrl="https://achievepack.com/products/custom-stickers"
        heroTitle="Custom Stickers"
        heroSubtitle="Factory-Grade Quality • Premium Materials • Eco-Friendly Options"
        heroDescription="Professional custom stickers with multiple types, shapes, materials, and finishes. From cut-to-size singles to roll stickers."
        heroDescriptionCn="专业定制贴纸，多种类型、形状、材质和表面处理可选。从剪裁单张到卷装贴纸。"
        heroImage="/imgs/label/custom-sticker/hero.webp"
        sections={sections}
        keywords={['custom stickers', 'roll stickers', 'die cut stickers', 'kiss cut stickers', 'sheet stickers', 'eco-friendly stickers', 'PLA stickers', 'metallic stickers']}
        articleType="Product"
        lastUpdated="2024-12-30"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Custom Stickers",
          "description": "Factory-grade custom stickers with premium materials, eco-friendly options, and professional finishes.",
          "brand": {
            "@type": "Brand",
            "name": "Achieve Pack"
          },
          "category": "Labels & Stickers",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
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
            alt={customStickerGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{customStickerGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{customStickerGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {customStickerGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomStickersPage
