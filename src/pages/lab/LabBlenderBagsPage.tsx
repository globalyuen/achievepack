import React, { useState } from 'react'
import { Package, Beaker, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Microscope, Droplets, Zap, Award, FileCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/lab/blend/
const blenderBagsGallery = [
  { src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', title: 'AchievePack® Sterile Lab Blender Bags 5-80 mL', desc: 'AchievePack® 无菌实验室均质袋 5-80 mL' },
  { src: '/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp', title: 'Capacity & Size - 5-80 mL, 155 × 105 mm', desc: '容量与尺寸 - 5-80 mL, 155 × 105 mm' },
  { src: '/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp', title: 'Material & Thickness - 75 μm LDPE Film', desc: '材质与厚度 - 75 μm LDPE 薄膜' },
  { src: '/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp', title: 'Gamma Irradiated Sterility 10-25 kGy', desc: 'γ 射线灭菌 10-25 kGy' },
  { src: '/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp', title: 'Impact Resistance & Strength', desc: '抗冲击强度' },
  { src: '/imgs/lab/blend/a_kv_microbiology_application_2438663.webp', title: 'Microbiology Sample Preparation', desc: '微生物样品制备' },
  { src: '/imgs/lab/blend/a_kv_transparency_observation_4148902.webp', title: 'High Clarity for Visual Observation', desc: '高透明度可视观察' },
  { src: '/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp', title: 'Bulk Packaging - 1,000 bags/case', desc: '批量包装 - 每箱 1,000 只' },
  { src: '/imgs/lab/blend/a_kv_specifications_summary_8537834.webp', title: 'Complete Technical Specifications', desc: '完整技术规格' },
  { src: '/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp', title: 'AchievePack® Lab Solutions', desc: 'AchievePack® 实验室解决方案' },
]

const LabBlenderBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = blenderBagsGallery.length - 1
    if (newIndex >= blenderBagsGallery.length) newIndex = 0
    setGalleryEnlarged({ src: blenderBagsGallery[newIndex].src, index: newIndex })
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
      title: 'AchievePack® Lab Blender Bags Overview',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Sterile lab blender bags for small-volume sample preparation</strong> — AchievePack® Lab Blender Bags feature high-clarity virgin LDPE film with gamma irradiation sterilization. Ideal for 5-80 mL microbiology samples in food testing, pharmaceutical QC, and environmental laboratories.
            </p>
            <p className="text-neutral-700">
              小体积样品制备专用无菌均质袋 — AchievePack® 实验室均质袋采用高透明食品级原生 LDPE 薄膜，γ 辐照灭菌。适用于食品检测、制药质控及环境实验室的 5-80 mL 微生物样品。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
            imageAlt="AchievePack Lab Blender Bags Hero"
            title="Sterile Lab Blender Bags for Microbiology"
            titleCn="微生物学专用无菌实验室均质袋"
            content="AchievePack® Lab Blender Bags are designed for professional microbiology laboratories, food testing facilities, and pharmaceutical QC departments. Made from high-clarity virgin LDPE film, these sterile bags provide a reliable, contamination-free environment for sample preparation and homogenization."
            contentCn="AchievePack® 实验室均质袋专为专业微生物实验室、食品检测机构和制药质控部门设计。采用高透明度食品级原生 LDPE 薄膜制成，这些无菌袋为样品制备和均质化提供可靠的无污染环境。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'capacity',
      title: 'Optimized Small Volume Capacity',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp"
            imageAlt="Capacity and Dimensions"
            title="5-80 mL Capacity Range"
            titleCn="5-80 mL 容量范围"
            content={`With a capacity range of 5-80 mL and standard dimensions of 155 mm \u00d7 105 mm (6" \u00d7 4"), these bags are perfectly sized for microbiology sample preparation, environmental testing, and quality control applications. The compact size ensures efficient use of laboratory space while maintaining sample integrity.`}
            contentCn={`容量范围 5-80 mL，标准尺寸 155 mm \u00d7 105 mm（6" \u00d7 4"），这些袋子非常适合微生物样品制备、环境检测和质量控制应用。紧凑的尺寸确保实验室空间的高效利用，同时保持样品完整性。`}
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">5-80 mL</h4>
              <p className="text-xs text-neutral-500">Capacity 容量</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">155 × 105 mm</h4>
              <p className="text-xs text-neutral-500">Dimensions 尺寸</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">75 μm</h4>
              <p className="text-xs text-neutral-500">Wall Thickness 壁厚</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Package className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">1,000/case</h4>
              <p className="text-xs text-neutral-500">Packaging 包装</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material',
      title: 'High-Clarity LDPE Film Material',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp"
            imageAlt="Material and Thickness Detail"
            title="Reinforced 75 μm LDPE Film"
            titleCn="加厚 75 μm LDPE 薄膜"
            content="Our lab blender bags feature a robust 75 μm (3 mil) high-clarity LDPE film with a reinforced single wide bottom seal and no side seams. This construction ensures maximum strength and puncture resistance during intensive paddle blending and stomaching operations, preventing leaks and sample loss."
            contentCn="我们的实验室均质袋采用坚固的 75 μm（3 mil）高透明度 LDPE 薄膜，配备加强型单一宽底封，无侧封设计。这种结构确保在高强度拍击均质和胃袋式操作过程中具有最大强度和抗穿刺性，防止泄漏和样品损失。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'sterility',
      title: 'Gamma Irradiation Sterilization',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp"
            imageAlt="Gamma Sterilization"
            title="Gamma Irradiated for Guaranteed Sterility"
            titleCn="γ 射线灭菌，确保无菌"
            content="Each bag is gamma irradiated at 10-25 kGy to ensure complete sterility. Designed for single-use applications, these bags eliminate the risk of cross-contamination between samples, making them ideal for microbiology, pharmaceutical, and food safety testing laboratories."
            contentCn="每个袋子都经过 10-25 kGy 的 γ 射线灭菌，以确保完全无菌。这些袋子设计为一次性使用，消除了样品之间交叉污染的风险，非常适合微生物学、制药和食品安全检测实验室使用。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Gamma Sterilized</h4>
              <p className="text-sm text-blue-700">10-25 kGy irradiation</p>
              <p className="text-xs text-blue-600 mt-1">γ 射线 10-25 kGy 灭菌</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Single-Use Design</h4>
              <p className="text-sm text-blue-700">Eliminates cross-contamination</p>
              <p className="text-xs text-blue-600 mt-1">一次性使用消除污染</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <CheckCircle className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Contamination-Free</h4>
              <p className="text-sm text-blue-700">Pre-use sterility guaranteed</p>
              <p className="text-xs text-blue-600 mt-1">使用前无菌保证</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'strength',
      title: 'Impact Resistance & Durability',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp"
            imageAlt="Strength and Impact Resistance"
            title="Built to Withstand Intensive Blending"
            titleCn="耐受高强度拍击均质"
            content="The reinforced wall strength and wide bottom seal design allow these bags to endure prolonged paddle blending without rupture or puncture. Compatible with leading paddle blender models (e.g., Paddle Blender Model 80/3500), they maintain integrity even under vigorous agitation, ensuring reliable sample homogenization."
            contentCn="加强型袋壁强度和宽底封设计使这些袋子能够承受长时间的拍击均质而不破裂或穿孔。兼容主流拍击式均质器型号（如 Paddle Blender Model 80/3500），即使在剧烈搅拌下也能保持完整性，确保可靠的样品均质化。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Microbiology Applications',
      icon: <Microscope className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_microbiology_application_2438663.webp"
            imageAlt="Microbiology Applications"
            title="Ideal for Microbiology Sample Preparation"
            titleCn="微生物样品制备的理想选择"
            content="Specifically designed for microbiology sample preparation, storage, and transport, these bags are widely used in food microbiology testing, pharmaceutical QC, environmental sample processing, and clinical laboratory applications. The sterile environment ensures accurate, contamination-free results."
            contentCn="专为微生物样品制备、储存和运输设计，这些袋子广泛应用于食品微生物检测、制药质控、环境样品处理和临床实验室应用。无菌环境确保准确、无污染的结果。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
              <span className="text-2xl mb-2 block">🥗</span>
              <h4 className="font-semibold text-green-800 text-sm">Food Testing</h4>
              <p className="text-xs text-green-600">食品检测</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
              <span className="text-2xl mb-2 block">💊</span>
              <h4 className="font-semibold text-purple-800 text-sm">Pharmaceutical QC</h4>
              <p className="text-xs text-purple-600">制药质控</p>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
              <span className="text-2xl mb-2 block">🌿</span>
              <h4 className="font-semibold text-teal-800 text-sm">Environmental</h4>
              <p className="text-xs text-teal-600">环境检测</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <span className="text-2xl mb-2 block">🔬</span>
              <h4 className="font-semibold text-blue-800 text-sm">Research Labs</h4>
              <p className="text-xs text-blue-600">研究实验室</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transparency',
      title: 'High Clarity for Visual Observation',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_transparency_observation_4148902.webp"
            imageAlt="High Clarity Visual Observation"
            title="Crystal-Clear Film for Easy Sample Observation"
            titleCn="高透明薄膜便于观察样品"
            content="The high-clarity LDPE film allows technicians to easily observe sample status, homogenization progress, and any particulate matter throughout the preparation process. This transparency improves workflow efficiency and quality control, reducing the need to open bags unnecessarily."
            contentCn="高透明度 LDPE 薄膜使技术人员能够在整个制备过程中轻松观察样品状态、均质化进度和任何颗粒物质。这种透明度提高了工作流程效率和质量控制，减少了不必要打开袋子的需求。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'packaging',
      title: 'Bulk Packaging & Supply',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp"
            imageAlt="Bulk Packaging"
            title="Convenient Bulk Packaging"
            titleCn="便捷批量包装"
            content="Available in cases of 1,000 bags with inner sachet packing for easy dispensing and protection. The resealable inner packaging helps maintain sterility of unused bags and simplifies inventory management in busy laboratory environments."
            contentCn="每箱 1,000 只，配有可封口内袋小包装，便于分发和保护。可重新密封的内包装有助于保持未使用袋子的无菌状态，并简化繁忙实验室环境中的库存管理。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Technical Specifications',
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_specifications_summary_8537834.webp"
            imageAlt="Technical Specifications"
            title="Complete Technical Specifications"
            titleCn="完整技术规格"
            content="Material: Polyethylene (LDPE) | Thickness: 75 μm (3 mil) | Capacity: 5-80 mL | Size: 155 × 105 mm | Sterility: Gamma irradiated 10-25 kGy | Autoclavable: No | Color: Transparent | Use: Laboratory blender sample preparation | Packaging: 1,000 bags per case with sachet inner packing."
            contentCn="材质：聚乙烯（LDPE）| 厚度：75 μm（3 mil）| 容量：5-80 mL | 尺寸：155 × 105 mm | 灭菌方式：γ 射线 10-25 kGy | 可高压灭菌：否 | 颜色：透明 | 用途：实验室均质器样品制备 | 包装：每箱 1,000 只，配有内袋小包装。"
            imageLeft={true}
            index={8}
          />
        </div>
      )
    },
    {
      id: 'brand',
      title: 'AchievePack® Lab Solutions',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp"
            imageAlt="AchievePack Lab Solutions"
            title="AchievePack® Lab Packaging Solutions"
            titleCn="AchievePack® 实验室包装解决方案"
            content="Trust AchievePack® for comprehensive lab packaging solutions. Our sterile blender bags are manufactured in cleanroom facilities following strict quality control standards. We provide reliable, contamination-free packaging for microbiology labs, QC departments, and research institutions worldwide."
            contentCn="信赖 AchievePack® 提供的全面实验室包装解决方案。我们的无菌均质袋在洁净室设施中生产，遵循严格的质量控制标准。我们为全球微生物实验室、质控部门和研究机构提供可靠、无污染的包装。"
            imageLeft={false}
            index={9}
          />
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              AchievePack Quality Assurance 品质保证
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Clean Room Production 洁净室生产</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Gamma Sterilized γ 辐照灭菌</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-600" />
                <span className="text-sm text-neutral-700">Strict Quality Control 严格质控</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Request Samples or Quote',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Order Lab Blender Bags?</h3>
              <p className="text-primary-100 mb-2">准备好订购实验室均质袋了吗？</p>
              <p className="text-white/90 mb-6">Contact us for samples, pricing, or technical consultation. Our team is ready to support your laboratory needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
                >
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </button>
                <a
                  href="mailto:ryan@achievepack.com"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                >
                  <Mail className="h-5 w-5" />
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    { question: 'What are Lab Blender Bags used for?', answer: 'Lab blender bags are sterile, single-use bags designed for microbiology sample preparation, homogenization, storage, and transport. They are ideal for food testing, pharmaceutical QC, and environmental sample processing in laboratory settings.' },
    { question: 'What is the capacity range of these blender bags?', answer: 'AchievePack® Lab Blender Bags are designed for small volume samples ranging from 5 to 80 mL, with typical dimensions of 155 mm × 105 mm (6" × 4").' },
    { question: 'Are these bags sterile?', answer: 'Yes, all AchievePack® Lab Blender Bags are gamma irradiated (10-25 kGy) for guaranteed sterility. They are single-use bags to eliminate cross-contamination risks.' },
    { question: 'Can these bags be autoclaved?', answer: 'No, these blender bags are not autoclavable. They come pre-sterilized by gamma irradiation and are designed for single-use applications only.' },
    { question: 'What material are the bags made from?', answer: 'The bags are made from high-clarity, food-grade virgin LDPE (Low-Density Polyethylene) film with a thickness of 75 μm (3 mil), providing excellent transparency for sample observation.' },
    { question: 'Are these bags compatible with paddle blenders?', answer: 'Yes, these bags are specifically designed to work with paddle blender systems such as the Paddle Blender Model 80/3500 and similar stomacher-type homogenizers.' },
  ]

  const relatedLinks = [
    { title: 'Lateral Filter Bags', url: '/lab/lateral-filter-bags', description: 'Sterile bags with lateral filter membrane' },
    { title: 'Wire Closure Bags', url: '/lab/wire-closure-bags', description: 'Lab bags with superior metal wire seal' },
    { title: 'Company Certificates', url: '/company/certificates', description: 'ISO certifications and quality standards' },
    { title: 'About Achieve Pack', url: '/company/about', description: 'Learn about our company and mission' },
    { title: 'Factory Tour', url: '/company/factory-tour', description: 'See our cleanroom manufacturing facility' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches', description: 'Flexible stand-up packaging solutions' },
    { title: 'Flat Pouches', url: '/packaging/flat-pouches', description: 'Flat-bottom pouch packaging' },
    { title: 'Barrier Options', url: '/features/barrier-options', description: 'Material barrier performance guide' },
    { title: 'Digital Printing', url: '/printing/digital-printing', description: 'Custom digital printing services' },
    { title: 'FAQs', url: '/support/faqs', description: 'Frequently asked questions' },
  ]

  return (
    <>
      <SEOPageLayout
        title="Lab Blender Bags | Sterile Sample Preparation Bags | AchievePack"
        description="AchievePack® sterile lab blender bags for microbiology sample preparation. 5-80 mL capacity, gamma irradiated, high-clarity LDPE, impact resistant. Perfect for food testing, pharmaceutical QC, and environmental labs."
        keywords={['lab blender bags', 'sterile sample bags', 'microbiology bags', 'homogenizer bags', 'paddle blender bags', 'stomacher bags', 'laboratory sample preparation', 'gamma irradiated bags', 'food testing bags', 'pharmaceutical QC bags', '5-80 mL bags', 'LDPE sterile bags']}
        canonicalUrl="https://achievepack.com/lab/lab-blender-bags"
        heroTitle="Lab Blender Bags"
        heroSubtitle="Sterile, high-clarity LDPE bags for 5-80 mL microbiology sample preparation. Gamma sterilized, impact resistant. Perfect for food, pharma & environmental testing. 无菌高透明 LDPE 袋，适用于 5-80 mL 微生物样品制备。γ 灭菌，抗冲击。"
        heroImage="/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp"
        introSummary="AchievePack® Lab Blender Bags provide sterile, single-use bags for microbiology sample preparation with 5-80 mL capacity. Made from high-clarity 75 μm LDPE film, gamma irradiated at 10-25 kGy. Ideal for food testing, pharmaceutical QC, environmental labs, and research institutions requiring contamination-free sample homogenization."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
      />
      
      {/* Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition"
            onClick={() => setGalleryEnlarged(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-neutral-300 transition p-2 bg-black/50 rounded-full"
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryEnlarged.src} 
              alt={blenderBagsGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{blenderBagsGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{blenderBagsGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {blenderBagsGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LabBlenderBagsPage
