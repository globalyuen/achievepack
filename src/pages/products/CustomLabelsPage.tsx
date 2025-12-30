import React, { useState } from 'react'
import { Tag, Package, Clock, CheckCircle, Star, Droplets, Pencil, Layers, Palette, Shield, Award, Users, Globe, Calendar, Mail, X, ChevronLeft, ChevronRight, FileCheck, Sparkles, Truck, Zap } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/label/custom-label/
const customLabelGallery = [
  { src: '/imgs/label/custom-label/hero.webp', title: 'Custom Sheet Labels Overview', desc: '定制纸张不干胶标签总览' },
  { src: '/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp', title: 'Brand & Product Overview', desc: '品牌与产品总览' },
  { src: '/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp', title: 'Labels on Pouches', desc: '标签应用于自立袋' },
  { src: '/imgs/label/custom-label/a_man_applying_label_multi_pouch_7579483.webp', title: 'Easy Application Process', desc: '便捷的贴标流程' },
  { src: '/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp', title: 'Multi-Material Options', desc: '多种材质可选' },
  { src: '/imgs/label/custom-label/a_adhesive_strength_detail_2027653.webp', title: 'Strong Adhesive Quality', desc: '强力永久胶粘性' },
  { src: '/imgs/label/custom-label/a_multi_design_discount_6714708.webp', title: 'Multi-Design Discounts', desc: '多设计优惠' },
  { src: '/imgs/label/custom-label/a_custom_process_flow_8911882.webp', title: 'Simple Ordering Process', desc: '简洁定制流程' },
]

const CustomLabelsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = customLabelGallery.length - 1
    if (newIndex >= customLabelGallery.length) newIndex = 0
    setGalleryEnlarged({ src: customLabelGallery[newIndex].src, index: newIndex })
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
      title: 'Custom Sheet Labels Overview',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Professional custom labels with no minimum order</strong> — High-quality sheet labels designed for products, events, personal use, and small batch customization. Print-ready in 2-3 business days.
            </p>
            <p className="text-neutral-700 mb-4">
              专业定制标签，无最低起订量 — 高质量纸张不干胶标签，适用于产品标签、活动标签、个人定制和小批量生产。设计确认后 2-3 个工作日内印刷发货。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">No MOQ</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">2-3 Day Turnaround</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">Expert Art Review</span>
              <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary-700 border border-primary-200">4.7/5 Rating</span>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-label/a_brand_product_overview_main_3845394.webp"
            imageAlt="Custom sheet labels brand overview"
            title="Wide Range of Applications"
            titleCn="广泛应用场景"
            content="From product labels and event stickers to personal projects and small business branding — our custom sheet labels are perfect for any application. Whether you need 10 sheets or 10,000, we deliver consistent quality every time."
            contentCn="从产品标签、活动贴纸到个人项目和小型企业品牌——我们的定制纸张标签适用于任何场景。无论您需要 10 张还是 10,000 张，我们始终如一地提供高品质产品。"
            imageLeft={true}
            index={1}
          />

          <AlternatingSection
            image="/imgs/label/custom-label/a_label_on_standup_pouch_2613164.webp"
            imageAlt="Custom labels applied on stand-up pouches"
            title="Perfect for Packaging Integration"
            titleCn="完美融合包装"
            content="Seamlessly apply custom labels to pouches, jars, bottles, and boxes. Our labels are designed to complement Achieve Pack's flexible packaging solutions, creating a cohesive brand experience across your entire product line."
            contentCn="可无缝应用于自立袋、罐子、瓶子和盒子。我们的标签设计与 Achieve Pack 的软包装解决方案完美配合，为您的整个产品线打造统一的品牌体验。"
            imageLeft={false}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features & Benefits',
      icon: <Star className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">No Minimum Order</h4>
              <p className="text-sm text-neutral-600">Order as few or as many labels as you need. Perfect for testing, samples, or small batch production.</p>
              <p className="text-xs text-primary-600 mt-2">无起订量限制，少量也可印刷</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">Fast 2-3 Day Turnaround</h4>
              <p className="text-sm text-neutral-600">After design approval, labels are printed and shipped within 2-3 business days.</p>
              <p className="text-xs text-primary-600 mt-2">设计确认后 2-3 个工作日发货</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">Expert Art Review</h4>
              <p className="text-sm text-neutral-600">Our design team reviews every file and suggests improvements before printing.</p>
              <p className="text-xs text-primary-600 mt-2">专业设计审核与建议</p>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/label/custom-label/a_man_applying_label_multi_pouch_7579483.webp"
            imageAlt="Easy label application process"
            title="Easy Application & Professional Results"
            titleCn="简便应用，专业效果"
            content="Our sheet labels are designed for easy peel-and-apply application. High-resolution printing ensures vibrant colors and sharp edges that give your products a professional, premium look."
            contentCn="我们的纸张标签设计便于撕下即贴。高分辨率印刷确保色彩鲜艳、边缘清晰，为您的产品带来专业、高端的外观。"
            imageLeft={true}
            index={3}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <Layers className="h-6 w-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">Multiple Shapes & Sizes</h4>
              <p className="text-sm text-neutral-700 mb-2">Choose from rectangles, rounded rectangles, circles, ovals, and custom die-cut shapes in various sizes.</p>
              <p className="text-xs text-blue-700">多种形状与尺寸选择</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <Palette className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-bold text-neutral-900 mb-2">Premium Print Quality</h4>
              <p className="text-sm text-neutral-700 mb-2">High-resolution digital printing delivers stunning color accuracy and fine detail reproduction.</p>
              <p className="text-xs text-green-700">高品质印刷效果</p>
            </div>
          </div>
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
            image="/imgs/label/custom-label/a_multi_material_pouch_labels_2396520.webp"
            imageAlt="Multiple material options for custom labels"
            title="Rich Material Selection"
            titleCn="丰富材质选择"
            content="Choose from a variety of materials to match your application: white matte for everyday use, waterproof for moisture-prone environments, oil-resistant for food and cosmetics, and scratch-resistant for durable applications."
            contentCn="提供多种材质以匹配您的应用场景：日常使用的白色哑光、适合潮湿环境的防水材质、食品和化妆品专用的耐油材质，以及持久耐用的防刮材质。"
            imageLeft={false}
            index={4}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-neutral-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">White Matte</h5>
              <p className="text-xs text-neutral-600 mt-1">Standard permanent adhesive</p>
              <p className="text-xs text-primary-600">白色哑光纸</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">Waterproof</h5>
              <p className="text-xs text-neutral-600 mt-1">BOPP with water resistance</p>
              <p className="text-xs text-primary-600">防水材质</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">Oil-Resistant</h5>
              <p className="text-xs text-neutral-600 mt-1">For food & cosmetics</p>
              <p className="text-xs text-primary-600">耐油材质</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Pencil className="h-6 w-6 text-green-600" />
              </div>
              <h5 className="font-semibold text-neutral-900 text-sm">Writable</h5>
              <p className="text-xs text-neutral-600 mt-1">Pen & marker friendly</p>
              <p className="text-xs text-primary-600">可书写</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'adhesive',
      title: 'Adhesive Strength & Durability',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_adhesive_strength_detail_2027653.webp"
            imageAlt="Strong permanent adhesive demonstration"
            title="Strong Permanent Adhesive"
            titleCn="强力永久胶"
            content="Our white matte labels feature a strong permanent adhesive that bonds securely to most surfaces. Perfect for everyday use on products, packaging, and office applications."
            contentCn="我们的白色哑光标签采用强力永久胶，可牢固粘附于大多数表面。非常适合产品、包装和办公日常使用。"
            imageLeft={true}
            index={5}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              Adhesive Performance
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-medium text-neutral-800">Initial Tack</p>
                <p className="text-sm text-neutral-600">Strong immediate bond</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800">Ultimate Bond</p>
                <p className="text-sm text-neutral-600">24hr full adhesion</p>
              </div>
              <div>
                <p className="font-medium text-neutral-800">Temperature Range</p>
                <p className="text-sm text-neutral-600">-20°C to 70°C</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'multi-design',
      title: 'Multi-Design Discounts',
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_multi_design_discount_6714708.webp"
            imageAlt="Multiple design options on same label sheet"
            title="Save with Multiple Designs"
            titleCn="多设计享优惠"
            content="Need different designs in the same size and material? Take advantage of our multi-design discount. Print multiple variations on your order and save on per-unit costs."
            contentCn="需要同尺寸、同材质的不同设计？享受多设计折扣优惠。在同一订单中印刷多种变体，节省单位成本。"
            imageLeft={false}
            index={6}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border-2 border-primary-200 text-center">
              <div className="text-2xl font-bold text-primary-600">1-2</div>
              <p className="text-sm text-neutral-600">Designs</p>
              <p className="text-xs text-neutral-500 mt-1">Standard pricing</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-2 border-primary-300 text-center">
              <div className="text-2xl font-bold text-primary-600">3-5</div>
              <p className="text-sm text-neutral-600">Designs</p>
              <p className="text-xs text-green-600 mt-1 font-medium">5% Discount</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-2 border-primary-400 text-center">
              <div className="text-2xl font-bold text-primary-600">6+</div>
              <p className="text-sm text-neutral-600">Designs</p>
              <p className="text-xs text-green-600 mt-1 font-medium">10% Discount</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Simple Ordering Process',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/label/custom-label/a_custom_process_flow_8911882.webp"
            imageAlt="Custom label ordering process flow"
            title="3 Simple Steps to Your Custom Labels"
            titleCn="三步轻松定制"
            content="Our streamlined ordering process makes it easy to get professional custom labels: 1) Choose your size, shape, and material. 2) Upload your design or use our templates. 3) Receive your labels in 2-3 business days."
            contentCn="我们简化的订购流程让您轻松获得专业定制标签：1）选择尺寸、形状和材质。2）上传设计或使用我们的模板。3）2-3 个工作日内收到标签。"
            imageLeft={true}
            index={7}
          />

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 rounded-xl text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">Choose Specifications</h5>
                <p className="text-sm text-white/80">Select size, shape, material, and quantity</p>
                <p className="text-xs text-white/60 mt-1">选择规格参数</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">Upload Design</h5>
                <p className="text-sm text-white/80">Submit your artwork for expert review</p>
                <p className="text-xs text-white/60 mt-1">上传设计文件</p>
              </div>
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">Fast Delivery</h5>
                <p className="text-sm text-white/80">Receive your labels in 2-3 days</p>
                <p className="text-xs text-white/60 mt-1">快速发货</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviews',
      title: 'Customer Reviews',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <span className="text-2xl font-bold text-neutral-900">4.7/5</span>
              <span className="text-neutral-600 ml-2">from 6,700+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">"Quality is outstanding. Colors are vibrant and exactly what I expected. Fast shipping too!"</p>
              <p className="text-xs text-neutral-500 mt-2">— Small Business Owner</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">"Perfect for our product line. The adhesive is strong and they look very professional."</p>
              <p className="text-xs text-neutral-500 mt-2">— E-commerce Seller</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-neutral-700 italic">"Love the no minimum option. Great for testing different designs before committing to large orders."</p>
              <p className="text-xs text-neutral-500 mt-2">— Startup Founder</p>
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
          <p className="text-neutral-700">Combine custom labels with our flexible packaging solutions for a complete branded experience:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/packaging/stand-up-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Stand-Up Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">Perfect base for your labels</p>
            </Link>
            <Link to="/packaging/flat-pouches" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Package className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Flat Pouches</h5>
              <p className="text-xs text-neutral-600 mt-1">3-side seal options</p>
            </Link>
            <Link to="/features/surface-finish" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Palette className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Surface Finishes</h5>
              <p className="text-xs text-neutral-600 mt-1">Matte, gloss, soft-touch</p>
            </Link>
            <Link to="/materials/eco-friendly" className="group block bg-white p-5 rounded-lg border border-neutral-200 hover:border-primary-400 hover:shadow-md transition-all">
              <Award className="h-6 w-6 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
              <h5 className="font-semibold text-neutral-900 group-hover:text-primary-600">Eco-Friendly Materials</h5>
              <p className="text-xs text-neutral-600 mt-1">Sustainable options</p>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Order Custom Labels?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your custom label requirements. No minimum order, fast turnaround, and expert support throughout the process.
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
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20custom%20labels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Chat
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Labels Quote"
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
        title="Custom Sheet Labels | No Minimum Order | Achieve Pack"
        description="Professional custom sheet labels with no minimum order, 2-3 day turnaround, and expert design review. High-quality printing for products, packaging, and branding."
        canonicalUrl="https://achievepack.com/products/custom-labels"
        heroTitle="Custom Sheet Labels"
        heroSubtitle="Professional Quality • No Minimum Order • Fast Turnaround"
        introSummary="High-quality custom labels for products, events, and branding. Print-ready in 2-3 business days with expert design support."
        heroImage="/imgs/label/custom-label/hero.webp"
        sections={sections}
        keywords={['custom labels', 'sheet labels', 'product labels', 'stickers', 'packaging labels', 'no MOQ', 'fast turnaround', 'waterproof labels']}
        schemaType="Product"
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
            alt={customLabelGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{customLabelGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/70">{customLabelGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-1">{galleryEnlarged.index + 1} / {customLabelGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomLabelsPage
