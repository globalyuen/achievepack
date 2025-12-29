import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, Beaker, CheckCircle, AlertCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'

// Gallery images for Lab Blender Bags
const blenderBagsGallery = [
  { 
    src: '/imgs/lab/blend/a_hero_kv_sterile_lab_1567556.webp', 
    title: 'AchievePack® Sterile Lab Blender Bags 5-80 mL', 
    desc: 'AchievePack® 无菌实验室均质袋 5-80 mL' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_capacity_dimensions_9896640.webp', 
    title: 'Capacity & Size - 5-80 mL, 155 × 105 mm', 
    desc: '容量与尺寸 - 5-80 mL, 155 × 105 mm' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp', 
    title: 'Material & Thickness - 75 μm LDPE Film', 
    desc: '材质与厚度 - 75 μm LDPE 薄膜' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_sterility_single_use_7777972.webp', 
    title: 'Gamma Irradiated Sterility - Single Use', 
    desc: 'γ 射线灭菌 - 一次性使用' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_strength_impact_resistance_4057827.webp', 
    title: 'Reinforced Strength - Impact Resistant', 
    desc: '强化强度 - 耐冲击' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_microbiology_application_2438663.webp', 
    title: 'Microbiology Sample Preparation', 
    desc: '微生物样品制备应用' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_transparency_observation_4148902.webp', 
    title: 'High Clarity for Sample Observation', 
    desc: '高透明度便于观察样品' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_packaging_bulk_supply_5710354.webp', 
    title: 'Bulk Packaging - 1000 Bags per Case', 
    desc: '批量包装 - 1000 只/箱' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_specifications_summary_8537834.webp', 
    title: 'Technical Specifications Overview', 
    desc: '技术规格一览' 
  },
  { 
    src: '/imgs/lab/blend/a_kv_brand_closing_solution_9154876.webp', 
    title: 'AchievePack® Lab Packaging Solutions', 
    desc: 'AchievePack® 实验室包装解决方案' 
  },
]

interface AlternatingSectionProps {
  image: string
  imageAlt: string
  title: string
  titleCn: string
  content: string
  contentCn: string
  imageLeft: boolean
  index: number
  onImageClick: (index: number) => void
}

const AlternatingSection: React.FC<AlternatingSectionProps> = ({
  image,
  imageAlt,
  title,
  titleCn,
  content,
  contentCn,
  imageLeft,
  index,
  onImageClick,
}) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className={`${!imageLeft ? 'md:order-2' : 'md:order-1'}`}>
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
          onClick={() => onImageClick(index)}
          loading="lazy"
        />
      </div>
      <div className={`${!imageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">{title}</h2>
        <p className="text-lg text-neutral-600 mb-4">{titleCn}</p>
        <div className="prose prose-lg max-w-none text-neutral-700">
          <p className="mb-3">{content}</p>
          <p className="text-neutral-600">{contentCn}</p>
        </div>
      </div>
    </div>
  )
}

const LabBlenderBagsPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % blenderBagsGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + blenderBagsGallery.length) % blenderBagsGallery.length)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are Lab Blender Bags used for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lab blender bags are sterile, single-use bags designed for microbiology sample preparation, homogenization, storage, and transport. They are ideal for food testing, pharmaceutical QC, and environmental sample processing in laboratory settings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the capacity range of these blender bags?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AchievePack® Lab Blender Bags are designed for small volume samples ranging from 5 to 80 mL, with typical dimensions of 155 mm × 105 mm (6" × 4").',
        },
      },
      {
        '@type': 'Question',
        name: 'Are these bags sterile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all AchievePack® Lab Blender Bags are gamma irradiated (10-25 kGy) for guaranteed sterility. They are single-use bags to eliminate cross-contamination risks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can these bags be autoclaved?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, these blender bags are not autoclavable. They come pre-sterilized by gamma irradiation and are designed for single-use applications only.',
        },
      },
      {
        '@type': 'Question',
        name: 'What material are the bags made from?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The bags are made from high-clarity, food-grade virgin LDPE (Low-Density Polyethylene) film with a thickness of 75 μm (3 mil), providing excellent transparency for sample observation.',
        },
      },
    ],
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Lab Blender Bags - Sterile Sample Preparation Bags',
    description: 'AchievePack® sterile lab blender bags for microbiology sample preparation. 5-80 mL capacity, gamma irradiated, high-clarity LDPE film, impact resistant.',
    brand: {
      '@type': 'Brand',
      name: 'AchievePack',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      url: 'https://achievepack.com/lab/lab-blender-bags',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  }

  return (
    <SEOPageLayout
      title="Lab Blender Bags | Sterile Sample Preparation Bags | AchievePack"
      description="AchievePack® sterile lab blender bags for microbiology sample preparation. 5-80 mL capacity, gamma irradiated, high-clarity LDPE, impact resistant. Perfect for food testing, pharmaceutical QC, and environmental labs."
      keywords={[
        'lab blender bags',
        'sterile sample bags',
        'microbiology bags',
        'homogenizer bags',
        'paddle blender bags',
        'stomacher bags',
        'laboratory sample preparation',
        'gamma irradiated bags',
        'food testing bags',
        'pharmaceutical QC bags',
        '5-80 mL bags',
        'LDPE sterile bags',
      ]}
      canonicalUrl="https://achievepack.com/lab/lab-blender-bags"
      heroTitle="Lab Blender Bags"
      heroSubtitle="Sterile, high-clarity LDPE bags for microbiology sample preparation, homogenization, and QC testing"
      heroImage="/imgs/lab/blend/a_kv_material_thickness_detail_7472209.webp"
      showHeroImage={false}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* Section 1: Brand Hero KV */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[0].src}
            imageAlt={blenderBagsGallery[0].title}
            title="Sterile Lab Blender Bags"
            titleCn="无菌实验室均质袋"
            content="AchievePack® Lab Blender Bags are designed for professional microbiology laboratories, food testing facilities, and pharmaceutical QC departments. Made from high-clarity virgin LDPE film, these sterile bags provide a reliable, contamination-free environment for sample preparation and homogenization."
            contentCn="AchievePack® 实验室均质袋专为专业微生物实验室、食品检测机构和制药质控部门设计。采用高透明度食品级原生 LDPE 薄膜制成，这些无菌袋为样品制备和均质化提供可靠的无污染环境。"
            imageLeft={true}
            index={0}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 2: Capacity & Dimensions */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[1].src}
            imageAlt={blenderBagsGallery[1].title}
            title="Optimized for Small Sample Volumes"
            titleCn="专为小体积样品优化"
            content={`With a capacity range of 5-80 mL and standard dimensions of 155 mm \u00d7 105 mm (6" \u00d7 4"), these bags are perfectly sized for microbiology sample preparation, environmental testing, and quality control applications. The compact size ensures efficient use of laboratory space while maintaining sample integrity.`}
            contentCn={`容量范围 5-80 mL，标准尺寸 155 mm \u00d7 105 mm（6" \u00d7 4"），这些袋子非常适合微生物样品制备、环境检测和质量控制应用。紧凑的尺寸确保实验室空间的高效利用，同时保持样品完整性。`}
            imageLeft={false}
            index={1}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 3: Material & Thickness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[2].src}
            imageAlt={blenderBagsGallery[2].title}
            title="Reinforced 75 μm LDPE Film"
            titleCn="加厚 75 μm LDPE 薄膜"
            content="Our lab blender bags feature a robust 75 μm (3 mil) high-clarity LDPE film with a reinforced single wide bottom seal and no side seams. This construction ensures maximum strength and puncture resistance during intensive paddle blending and stomaching operations, preventing leaks and sample loss."
            contentCn="我们的实验室均质袋采用坚固的 75 μm（3 mil）高透明度 LDPE 薄膜，配备加强型单一宽底封，无侧封设计。这种结构确保在高强度拍击均质和胃袋式操作过程中具有最大强度和抗穿刺性，防止泄漏和样品损失。"
            imageLeft={true}
            index={2}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 4: Sterility & Single Use */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[3].src}
            imageAlt={blenderBagsGallery[3].title}
            title="Gamma Irradiated for Guaranteed Sterility"
            titleCn="γ 射线灭菌，确保无菌"
            content="Each bag is gamma irradiated at 10-25 kGy to ensure complete sterility. Designed for single-use applications, these bags eliminate the risk of cross-contamination between samples, making them ideal for microbiology, pharmaceutical, and food safety testing laboratories."
            contentCn="每个袋子都经过 10-25 kGy 的 γ 射线灭菌，以确保完全无菌。这些袋子设计为一次性使用，消除了样品之间交叉污染的风险，非常适合微生物学、制药和食品安全检测实验室使用。"
            imageLeft={false}
            index={3}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 5: Strength & Impact Resistance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[4].src}
            imageAlt={blenderBagsGallery[4].title}
            title="Built to Withstand Intensive Blending"
            titleCn="耐受高强度拍击均质"
            content="The reinforced wall strength and wide bottom seal design allow these bags to endure prolonged paddle blending without rupture or puncture. Compatible with leading paddle blender models (e.g., Paddle Blender Model 80/3500), they maintain integrity even under vigorous agitation, ensuring reliable sample homogenization."
            contentCn="加强型袋壁强度和宽底封设计使这些袋子能够承受长时间的拍击均质而不破裂或穿孔。兼容主流拍击式均质器型号（如 Paddle Blender Model 80/3500），即使在剧烈搅拌下也能保持完整性，确保可靠的样品均质化。"
            imageLeft={true}
            index={4}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 6: Microbiology Applications */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[5].src}
            imageAlt={blenderBagsGallery[5].title}
            title="Ideal for Microbiology Sample Preparation"
            titleCn="微生物样品制备的理想选择"
            content="Specifically designed for microbiology sample preparation, storage, and transport, these bags are widely used in food microbiology testing, pharmaceutical QC, environmental sample processing, and clinical laboratory applications. The sterile environment ensures accurate, contamination-free results."
            contentCn="专为微生物样品制备、储存和运输设计，这些袋子广泛应用于食品微生物检测、制药质控、环境样品处理和临床实验室应用。无菌环境确保准确、无污染的结果。"
            imageLeft={false}
            index={5}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 7: High Clarity for Observation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[6].src}
            imageAlt={blenderBagsGallery[6].title}
            title="Crystal-Clear Film for Easy Sample Observation"
            titleCn="高透明薄膜便于观察样品"
            content="The high-clarity LDPE film allows technicians to easily observe sample status, homogenization progress, and any particulate matter throughout the preparation process. This transparency improves workflow efficiency and quality control, reducing the need to open bags unnecessarily."
            contentCn="高透明度 LDPE 薄膜使技术人员能够在整个制备过程中轻松观察样品状态、均质化进度和任何颗粒物质。这种透明度提高了工作流程效率和质量控制，减少了不必要打开袋子的需求。"
            imageLeft={true}
            index={6}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 8: Packaging & Bulk Supply */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[7].src}
            imageAlt={blenderBagsGallery[7].title}
            title="Convenient Bulk Packaging"
            titleCn="便捷批量包装"
            content="Available in cases of 1,000 bags with inner sachet packing for easy dispensing and protection. The resealable inner packaging helps maintain sterility of unused bags and simplifies inventory management in busy laboratory environments."
            contentCn="每箱 1,000 只，配有可封口内袋小包装，便于分发和保护。可重新密封的内包装有助于保持未使用袋子的无菌状态，并简化繁忙实验室环境中的库存管理。"
            imageLeft={false}
            index={7}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 9: Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[8].src}
            imageAlt={blenderBagsGallery[8].title}
            title="Complete Technical Specifications"
            titleCn="完整技术规格"
            content="Material: Polyethylene (LDPE) | Thickness: 75 μm (3 mil) | Capacity: 5-80 mL | Size: 155 × 105 mm | Sterility: Gamma irradiated 10-25 kGy | Autoclavable: No | Color: Transparent | Use: Laboratory blender sample preparation | Packaging: 1,000 bags per case with sachet inner packing."
            contentCn="材质：聚乙烯（LDPE）| 厚度：75 μm（3 mil）| 容量：5-80 mL | 尺寸：155 × 105 mm | 灭菌方式：γ 射线 10-25 kGy | 可高压灭菌：否 | 颜色：透明 | 用途：实验室均质器样品制备 | 包装：每箱 1,000 只，配有内袋小包装。"
            imageLeft={true}
            index={8}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Section 10: Brand Closing Solution */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AlternatingSection
            image={blenderBagsGallery[9].src}
            imageAlt={blenderBagsGallery[9].title}
            title="AchievePack® Lab Packaging Solutions"
            titleCn="AchievePack® 实验室包装解决方案"
            content="Trust AchievePack® for comprehensive lab packaging solutions. Our sterile blender bags are manufactured in cleanroom facilities following strict quality control standards. We provide reliable, contamination-free packaging for microbiology labs, QC departments, and research institutions worldwide."
            contentCn="信赖 AchievePack® 提供的全面实验室包装解决方案。我们的无菌均质袋在洁净室设施中生产，遵循严格的质量控制标准。我们为全球微生物实验室、质控部门和研究机构提供可靠、无污染的包装。"
            imageLeft={false}
            index={9}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
            Why Choose AchievePack® Lab Blender Bags?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Gamma Irradiated Sterility</h3>
              <p className="text-neutral-600">
                10-25 kGy gamma irradiation ensures complete sterility for contamination-free sample processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">High-Clarity LDPE Film</h3>
              <p className="text-neutral-600">
                Crystal-clear 75 μm film allows easy visual monitoring of sample preparation progress.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Impact Resistant Design</h3>
              <p className="text-neutral-600">
                Reinforced construction withstands intensive paddle blending without rupture or leakage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Single-Use Convenience</h3>
              <p className="text-neutral-600">
                Eliminates cross-contamination risk and cleaning time, improving lab efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Optimized Small Volume</h3>
              <p className="text-neutral-600">
                5-80 mL capacity perfect for microbiology, pharmaceutical, and food testing applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Cleanroom Manufacturing</h3>
              <p className="text-neutral-600">
                Produced in controlled cleanroom environments following strict quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-4">Applications</h2>
          <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
            AchievePack® Lab Blender Bags are trusted by laboratories worldwide for critical sample preparation tasks
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-8 rounded-xl">
              <Beaker className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Food Microbiology Testing</h3>
              <p className="text-neutral-700 mb-4">
                Essential for food safety laboratories conducting pathogen detection, microbial count analysis, and contamination screening. Compatible with standard paddle blenders for efficient sample homogenization.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Salmonella, E. coli, Listeria testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Total plate count (TPC) analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Yeast and mold enumeration</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl">
              <Beaker className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Pharmaceutical QC Testing</h3>
              <p className="text-neutral-700 mb-4">
                Trusted by pharmaceutical quality control laboratories for sterility testing, bioburden analysis, and raw material verification. The gamma-irradiated sterility ensures compliance with USP and EP standards.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>USP &lt;61&gt; and &lt;62&gt; microbial testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raw material bioburden analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Environmental monitoring samples</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl">
              <Beaker className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Environmental Testing</h3>
              <p className="text-neutral-700 mb-4">
                Ideal for environmental laboratories analyzing soil, water, and air samples for microbial contamination and ecological studies. The sterile environment prevents false positives.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Soil microbial community analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water quality microbiological testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Air filter sample processing</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl">
              <Beaker className="h-10 w-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Clinical & Research Labs</h3>
              <p className="text-neutral-700 mb-4">
                Supports clinical microbiology and research institutions conducting diagnostic testing, infection control studies, and academic research requiring sterile sample preparation.
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Clinical specimen processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hospital infection control monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Academic microbiology research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                What are Lab Blender Bags used for?
              </h3>
              <p className="text-neutral-700">
                Lab blender bags are sterile, single-use bags designed for microbiology sample preparation, homogenization, storage, and transport. They are ideal for food testing, pharmaceutical QC, and environmental sample processing in laboratory settings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                What is the capacity range of these blender bags?
              </h3>
              <p className="text-neutral-700">
                AchievePack® Lab Blender Bags are designed for small volume samples ranging from 5 to 80 mL, with typical dimensions of 155 mm × 105 mm (6" × 4").
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Are these bags sterile?
              </h3>
              <p className="text-neutral-700">
                Yes, all AchievePack® Lab Blender Bags are gamma irradiated (10-25 kGy) for guaranteed sterility. They are single-use bags to eliminate cross-contamination risks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Can these bags be autoclaved?
              </h3>
              <p className="text-neutral-700">
                No, these blender bags are not autoclavable. They come pre-sterilized by gamma irradiation and are designed for single-use applications only.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                What material are the bags made from?
              </h3>
              <p className="text-neutral-700">
                The bags are made from high-clarity, food-grade virgin LDPE (Low-Density Polyethylene) film with a thickness of 75 μm (3 mil), providing excellent transparency for sample observation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Are these bags compatible with paddle blenders?
              </h3>
              <p className="text-neutral-700">
                Yes, these bags are specifically designed to work with paddle blender systems such as the Paddle Blender Model 80/3500 and similar stomacher-type homogenizers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Related Lab Packaging Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/lab/lateral-filter-bags"
              className="group bg-neutral-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/imgs/lab/filter/hero.webp"
                  alt="Lateral Filter Bags"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                Lateral Filter Bags →
              </h3>
              <p className="text-neutral-600">
                Sterile sample bags with integrated lateral filter membrane for microbiology testing
              </p>
            </Link>
            <Link
              to="/lab/wire-closure-bags"
              className="group bg-neutral-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/imgs/lab/wire/hero.webp"
                  alt="Wire Closure Bags"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                Wire Closure Bags →
              </h3>
              <p className="text-neutral-600">
                Lab bags with metal wire closure for superior seal and leak-resistant sample storage
              </p>
            </Link>
            <Link
              to="/company/certificates"
              className="group bg-neutral-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 overflow-hidden rounded-lg bg-primary-100 flex items-center justify-center h-48">
                <AlertCircle className="h-20 w-20 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                Quality Certificates →
              </h3>
              <p className="text-neutral-600">
                ISO 9001, ISO 14001 certified manufacturing with full traceability and quality control
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order Lab Blender Bags?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Contact our lab packaging specialists for samples, technical specifications, and volume pricing
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12" />
          </button>
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={blenderBagsGallery[currentImageIndex].src}
              alt={blenderBagsGallery[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-semibold">
                {blenderBagsGallery[currentImageIndex].title}
              </p>
              <p className="text-gray-300">{blenderBagsGallery[currentImageIndex].desc}</p>
              <p className="text-gray-400 text-sm mt-2">
                {currentImageIndex + 1} / {blenderBagsGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </SEOPageLayout>
  )
}

export default LabBlenderBagsPage
