import React, { useState } from 'react'
import { Zap, Shield, Thermometer, Package, Droplets, Maximize, ArrowRight, Leaf, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/microwave/
const microwaveGallery = [
  { src: '/imgs/function/microwave/a_kv_1_hero_main_4427371.webp', title: 'Eco-Friendly Microwave Cooking Bags', desc: '安全微波蒸煮、保鲜与加热的一体袋' },
  { src: '/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp', title: 'Food-Safe & Microwave-Safe', desc: '食品级材料 · 微波炉安全' },
  { src: '/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp', title: 'Strong Zipper & Stand-Up Base', desc: '牢固拉链 + 自立底结构' },
  { src: '/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp', title: 'Built-in Steam Vent', desc: '内置蒸汽孔设计' },
  { src: '/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp', title: 'See Freshness at a Glance', desc: '一眼看见新鲜' },
  { src: '/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp', title: 'Heat-Resistant Food-Grade Film', desc: '耐热食品级薄膜' },
  { src: '/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp', title: 'Generous Capacity for Family Portions', desc: '宽口大容量，适合家庭份量' },
  { src: '/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp', title: 'From Fridge to Microwave in One Bag', desc: '一袋搞定，从冰箱到微波炉' },
  { src: '/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp', title: 'Eco-Friendly Convenience', desc: '环保又省事' },
  { src: '/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp', title: 'Achieve Pack Microwave Steam Pouch', desc: 'Achieve Pack 微波蒸煮袋' },
]

const MicrowaveSteamBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = microwaveGallery.length - 1
    if (newIndex >= microwaveGallery.length) newIndex = 0
    setGalleryEnlarged({ src: microwaveGallery[newIndex].src, index: newIndex })
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
      title: 'Microwave Steam Bags Overview',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Steam, store and reheat food safely</strong> — Achieve Pack microwave steam bags are designed for modern, eco-conscious kitchens.
            </p>
            <p className="text-neutral-700">
              安全微波蒸煮、保鲜与加热的一体袋 — 专为现代环保厨房设计
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_1_hero_main_4427371.webp"
            imageAlt="Achieve Pack Microwave Steam Bag Hero"
            title="Eco-Friendly Microwave Cooking Bags"
            titleCn="环保微波蒸煮袋"
            content="Our food-grade microwave steam bags are perfect for steaming vegetables, reheating frozen meals, and meal prep. The innovative design reduces the need for extra cookware while maintaining food safety standards."
            contentCn="我们的食品级微波蒸煮袋非常适合蒸蔬菜、加热冷冻餐和备餐。创新设计减少了额外炊具的使用，同时保持食品安全标准。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'food-safe',
      title: 'Food-Safe & Microwave-Safe',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_2_info_foodsafe_5240576.webp"
            imageAlt="Food Safe Microwave Bag"
            title="Certified Food-Contact Material"
            titleCn="食品级材料 · 微波炉安全"
            content="Made from food-grade film that can directly contact vegetables, fruits, and meat. Passed relevant food safety tests and designed to withstand typical home microwave temperatures."
            contentCn="采用食品级薄膜，可直接与蔬菜、水果、肉类接触，通过相关食品安全测试，耐受典型家用微波加热温度。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Certified food-contact material</h4>
              <p className="text-sm text-green-700">通过食品接触安全测试</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <Thermometer className="h-5 w-5 text-green-600 mb-2" />
              <h4 className="font-semibold text-green-800">Designed for home microwave temperatures</h4>
              <p className="text-sm text-green-700">专为家用微波加热温度设计</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-base',
      title: 'Strong Zipper & Stand-Up Base',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_3_detail_zipperbase_3012328.webp"
            imageAlt="Zipper and Stand-Up Base Detail"
            title="Easy to Seal, Easy to Stand"
            titleCn="牢固拉链 + 自立底结构"
            content="The double-track zipper at the top makes it easy to seal and store ingredients, preventing odor mixing and freezer burn. The stand-up base allows the bag to sit upright in the microwave for even heating."
            contentCn="顶部双道拉链结构，便于密封保存食材，防止异味串味和冷冻烧伤，同时可重复开合。自立底设计让袋子在微波炉中稳稳站立，加热更均匀。"
            imageLeft={true}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'steam-vent',
      title: 'Built-in Steam Vent Design',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_4_detail_steamvent_4869525.webp"
            imageAlt="Steam Vent Detail"
            title="Safe Pressure Release"
            titleCn="内置蒸汽孔设计"
            content="The small holes above the zipper serve as steam vents, preventing excessive internal pressure. This helps achieve even heating and reduces the risk of the bag bursting during microwave cooking."
            contentCn="袋口上方的小孔作为蒸汽排气口，避免袋内压力过高，有助于均匀加热，减少爆袋风险。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'freshness',
      title: 'See Freshness at a Glance',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_5_detail_freshness_8989322.webp"
            imageAlt="Freshness Visibility"
            title="Clear Enough to Check Doneness"
            titleCn="一眼看见新鲜"
            content="The semi-transparent film allows you to see the vibrant colors of vegetables inside, making it easy to monitor cooking progress and check doneness without opening the bag."
            contentCn="够清晰看熟度，也能适度遮挡混乱 — 半透明薄膜让您可以看到袋内蔬菜的鲜艳颜色，轻松监控烹饪进度。"
            imageLeft={true}
            index={4}
          />
        </div>
      )
    },
    {
      id: 'heat-resistant',
      title: 'Heat-Resistant Food-Grade Film',
      icon: <Thermometer className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_6_detail_waterdrops_2735995.webp"
            imageAlt="Heat Resistant Film with Water Droplets"
            title="Designed for Everyday Microwave Use"
            titleCn="耐热食品级薄膜"
            content="The heat-resistant film is specifically designed for everyday microwave reheating and steaming. Water droplets on the surface indicate the bag is working properly to retain moisture during cooking."
            contentCn="专为日常微波加热与蒸煮设计 — 耐热薄膜确保安全烹饪，表面水珠表明袋子正在正常保持烹饪过程中的水分。"
            imageLeft={false}
            index={5}
          />
        </div>
      )
    },
    {
      id: 'capacity',
      title: 'Generous Capacity for Family Portions',
      icon: <Maximize className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_7_detail_capacity_9860751.webp"
            imageAlt="Bag Capacity"
            title="Ideal for Vegetables, Mixed Meals and Meal Prep"
            titleCn="宽口大容量，适合家庭份量"
            content="The wide opening and generous capacity make it easy to fill with vegetables, mixed meals, or pre-portioned ingredients. Perfect for both home cooking and commercial meal prep applications."
            contentCn="适合蔬菜拼盘、混合餐和预制菜分装 — 宽口设计便于填充，大容量满足家庭份量需求。"
            imageLeft={true}
            index={6}
          />
        </div>
      )
    },
    {
      id: 'journey',
      title: 'From Fridge to Microwave in One Bag',
      icon: <ArrowRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_8_lifestyle_journeyscene_9334974.webp"
            imageAlt="From Fridge to Microwave Journey"
            title="Store, Steam and Serve"
            titleCn="一袋搞定，从冰箱到微波炉"
            content="One bag handles the entire journey from storage to cooking to serving. Store in the fridge or freezer, heat in the microwave, and serve directly — reducing the need for multiple containers."
            contentCn="存放、蒸煮、上桌都用同一只 Achieve Pack 袋 — 减少多个容器的使用，简化厨房流程。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'eco-friendly',
      title: 'Eco-Friendly Convenience',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_9_info_ecocomparison_5260427.webp"
            imageAlt="Eco Comparison"
            title="Less Water, Fewer Dishes to Wash"
            titleCn="环保又省事"
            content="Compared to traditional cooking methods, our steam bags use less water and create fewer dishes to wash. They also use less material than rigid plastic containers, reducing carbon footprint during transportation and disposal."
            contentCn="用水更少、减少刷锅洗碗。比硬质塑料盒使用更少材料，运输与废弃阶段碳足迹更低。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Traditional Cooking</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Pot, colander, plate needed</li>
                <li>• More water usage</li>
                <li>• More dishes to wash</li>
              </ul>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">With Achieve Pack Steam Bags</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>• One pouch + microwave</li>
                <li>• Less water needed</li>
                <li>• Minimal cleanup</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Product Specifications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/microwave/a_kv_10_specs_closingpage_2082225.webp"
            imageAlt="Product Specifications"
            title="Achieve Pack Microwave Steam Pouch"
            titleCn="Achieve Pack 微波蒸煮袋"
            content="Available in multiple sizes to suit your needs. Perfect for vegetables, frozen meals, and meal prep applications. Supports eco-friendly material options including recyclable and bio-based formulations."
            contentCn="由 Achieve Pack 打造，服务现代环保厨房 — 提供多种尺寸选择，支持环保材料方案。"
            imageLeft={false}
            index={9}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Sizes & Formats</h4>
              <p className="text-sm text-neutral-600">尺寸与规格</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Small (个人份)</li>
                <li>• Medium (2-3人份)</li>
                <li>• Family Size (家庭装)</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Usage</h4>
              <p className="text-sm text-neutral-600">用途</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Vegetables 蔬菜</li>
                <li>• Frozen meals 冷冻餐</li>
                <li>• Meal prep 预制菜分装</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">Safety & Standards</h4>
              <p className="text-sm text-neutral-600">安全与标准</p>
              <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                <li>• Food-grade 食品级</li>
                <li>• Microwave-safe 微波安全</li>
                <li>• Eco material options 环保材料</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      icon: <Shield className="h-5 w-5 text-white" />,
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
              <a href="mailto:ryan@achievepack.com?subject=Microwave Steam Bags Quote" className="block w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
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
      question: "Are microwave steam bags safe for food?",
      answer: "Yes, our microwave steam bags are made from food-grade materials that have passed relevant food safety tests. They are designed to safely contact vegetables, fruits, and meat, and can withstand typical home microwave temperatures."
    },
    {
      question: "How does the steam vent work?",
      answer: "The small holes above the zipper serve as steam vents. As food heats up and releases steam, these vents allow pressure to escape safely, preventing the bag from bursting while ensuring even heat distribution."
    },
    {
      question: "Can I reuse microwave steam bags?",
      answer: "The bags feature a resealable zipper for storage purposes. However, for food safety reasons, we recommend using each bag for microwave cooking only once. The bag can be reused for cold storage before cooking."
    },
    {
      question: "What sizes are available?",
      answer: "We offer small (individual portions), medium (2-3 servings), and family size options. Custom sizes are also available for commercial and food service applications with minimum order quantities."
    },
    {
      question: "Are these bags eco-friendly?",
      answer: "Yes! Compared to rigid plastic containers, our flexible steam bags use significantly less material. We also offer recyclable and bio-based formulations to minimize environmental impact. Contact us for sustainable material options."
    }
  ]

  const relatedLinks = [
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile packaging shapes" },
    { title: "Recyclable Mono-PE", url: "/materials/recyclable-mono-pe", description: "Eco-friendly material options" },
    { title: "Reclosure Options", url: "/features/reclosure-options", description: "Zipper and seal types" }
  ]

  return (
    <>
      <SEOPageLayout
        title="Microwave Steam Bags | Eco-Friendly Cooking Pouches"
        description="Food-safe microwave steam bags for vegetables, frozen meals, and meal prep. Eco-friendly, heat-resistant pouches with built-in steam vents. Store, steam and serve in one bag."
        keywords={['microwave steam bags', 'microwave cooking pouches', 'vegetable steam bags', 'food-safe microwave bags', 'eco-friendly cooking bags', 'meal prep pouches']}
        canonicalUrl="https://achievepack.com/function/microwave-steam-bags"
        heroTitle="Eco-Friendly Microwave Cooking Bags"
        heroSubtitle="Steam, store and reheat food safely — 安全微波蒸煮、保鲜与加热的一体袋"
        heroImage="/imgs/function/microwave/a_microwavebag_hero_main_kitchen_2543693.webp"
        heroImageAlt="Achieve Pack Microwave Steam Bag with vegetables"
        introSummary="Food-grade microwave steam bags designed for modern, eco-conscious kitchens. Perfect for steaming vegetables, reheating frozen meals, and meal prep."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order Microwave Steam Bags?"
        ctaDescription="Get custom microwave steam bags for your brand or food service operation. Eco-friendly options available."
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
          <img src={galleryEnlarged.src} alt={microwaveGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 text-center text-white max-w-xl px-4">
            <p className="text-lg font-semibold">{microwaveGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{microwaveGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs mt-2 text-neutral-400">{galleryEnlarged.index + 1} / {microwaveGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default MicrowaveSteamBagsPage
