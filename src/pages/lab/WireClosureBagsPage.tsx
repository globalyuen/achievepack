import React, { useState } from 'react'
import { Package, Leaf, Layers, Settings, ShoppingBag, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Beaker, FlaskConical, Microscope, Droplets, Filter, Zap, ClipboardCheck, Factory, Lock, Repeat, Truck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/lab/wire/
const wireClosureGallery = [
  { src: '/imgs/lab/wire/hero.webp', title: 'AchievePack® Wire Closure Sterile Blender Bags', desc: 'AchievePack® 金属丝封口无菌均质袋' },
  { src: '/imgs/lab/wire/a_wire_closure_white_0753579.webp', title: 'Wire Closure - Superior Seal Technology', desc: '金属丝封口 - 卓越密封技术' },
  { src: '/imgs/lab/wire/a_fill_fold_twist_process_1762470.webp', title: 'Fill · Fold · Twist & Seal Process', desc: '填充 · 折叠 · 扭紧密封流程' },
  { src: '/imgs/lab/wire/a_wire_closure_instruction_updated_step4_4834864.webp', title: 'Step-by-Step Sealing Instructions', desc: '分步密封操作说明' },
  { src: '/imgs/lab/wire/a_comparison_conventional_vs_wire_8193900.webp', title: 'Conventional Tie vs Wire Closure Comparison', desc: '普通扎带与金属丝封口对比' },
  { src: '/imgs/lab/wire/a_achieve_pack_tear_resistant_detail_9877739.webp', title: 'Tear-resistant Film Detail', desc: '抗撕裂薄膜细节' },
  { src: '/imgs/lab/wire/a_achieve_pack_sterilization_process_2713430.webp', title: 'Gamma Sterilization Process', desc: 'γ 辐照灭菌过程' },
  { src: '/imgs/lab/wire/clean-room-production.webp', title: 'Clean Room Production Environment', desc: '洁净室生产环境' },
  { src: '/imgs/lab/wire/a_brand_wire_closure_summary_1900843.webp', title: 'Wire Closure Brand Summary', desc: '金属丝封口品牌总结' },
]

const WireClosureBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = wireClosureGallery.length - 1
    if (newIndex >= wireClosureGallery.length) newIndex = 0
    setGalleryEnlarged({ src: wireClosureGallery[newIndex].src, index: newIndex })
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
      title: 'AchievePack® Wire Closure Blender Bags Overview',
      icon: <Beaker className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Wire closure for a superior seal</strong> — AchievePack® sterile blender bags feature integrated metal wire closure for secure, leak-resistant sealing before, during, and after homogenization. Clean room produced and gamma sterilized for contamination-sensitive microbiology testing.
            </p>
            <p className="text-neutral-700">
              金属丝封口，更优防漏密封 — AchievePack® 无菌均质袋采用一体化金属丝封口设计，在均质前后及运输过程中提供牢固防漏密封。洁净室生产、γ 辐照灭菌，适用于对污染敏感的微生物检测。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/lab/wire/hero.webp"
            imageAlt="AchievePack Wire Closure Blender Bags Hero"
            title="AchievePack® Wire Closure Sterile Blender Bags"
            titleCn="AchievePack® 金属丝封口无菌均质袋"
            content="Our wire closure blender bags combine integrated metal wire sealing technology with gamma sterilization for secure, leak-resistant sample preparation. The wire closure provides a superior seal that conventional plastic ties cannot match, ensuring sample integrity throughout processing and transport."
            contentCn="我们的金属丝封口均质袋结合一体化金属丝密封技术与 γ 辐照灭菌，实现安全防漏的样本制备。金属丝封口提供普通塑料扎带无法媲美的卓越密封效果，确保样本在处理和运输全程完整性。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'wire-technology',
      title: 'Wire Closure Technology: Superior Seal',
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_wire_closure_white_0753579.webp"
            imageAlt="Wire Closure Superior Seal Technology"
            title="Reinforced Wire for Stable Sealing Performance"
            titleCn="加强型金属丝，提供持久稳定密封性能"
            content="The integrated metal wire closure allows easy grip and bending for secure sealing. The reinforced wire maintains its shape after twisting, providing long-lasting, stable sealing performance. Simply fold and twist the wire to create a tight, leak-resistant seal that protects your samples."
            contentCn="一体化金属丝封口设计便于握持和弯折，实现牢固密封。加强型金属丝在扭转后保持形状，提供持久稳定的密封性能。只需折叠并扭紧金属丝，即可形成紧密防漏密封，保护您的样本。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Lock className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Leak-resistant</h4>
              <p className="text-sm text-blue-700">Tight twist seal prevents leakage</p>
              <p className="text-xs text-blue-600 mt-1">紧密扭转密封，防止渗漏</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Settings className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Easy to Operate</h4>
              <p className="text-sm text-blue-700">Simple fold and twist motion</p>
              <p className="text-xs text-blue-600 mt-1">简单折叠扭转操作</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Repeat className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Repeatable Motion</h4>
              <p className="text-sm text-blue-700">Can be resealed if needed</p>
              <p className="text-xs text-blue-600 mt-1">可重复密封操作</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sealing-process',
      title: 'Three-Step Sealing Process: Fill · Fold · Twist',
      icon: <ClipboardCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_fill_fold_twist_process_1762470.webp"
            imageAlt="Fill Fold Twist Sealing Process"
            title="Fill · Fold · Twist and Seal"
            titleCn="填充 · 折叠 · 扭紧密封"
            content="The wire closure sealing process is simple and intuitive. Step 1: Fill the bag with your sample. Step 2: Fold the wire closure at the top of the bag. Step 3: Twist the wire tightly to create a secure, leak-resistant seal. The entire process takes seconds and requires no additional tools or equipment."
            contentCn="金属丝封口密封过程简单直观。第一步：将样本填入袋中。第二步：折叠袋顶的金属丝封口。第三步：紧紧扭转金属丝，形成牢固防漏密封。整个过程只需数秒，无需额外工具或设备。"
            imageLeft={true}
            index={2}
          />
          
          <AlternatingSection
            image="/imgs/lab/wire/a_wire_closure_instruction_updated_step4_4834864.webp"
            imageAlt="Step-by-Step Sealing Instructions"
            title="Step-by-Step Sealing Instructions"
            titleCn="分步密封操作说明"
            content="Our detailed visual instructions guide you through the proper wire closure sealing technique. The wire should be twisted multiple turns to ensure a tight seal. Proper sealing technique prevents sample leakage during homogenization, storage, and transport."
            contentCn="我们详细的图示说明指导您正确的金属丝封口密封技术。金属丝应扭转多圈以确保紧密密封。正确的密封技术可防止样本在均质、存储和运输过程中渗漏。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'comparison',
      title: 'Wire Closure vs Conventional Ties',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_comparison_conventional_vs_wire_8193900.webp"
            imageAlt="Conventional Tie vs Wire Closure Comparison"
            title="Stronger Seal · Less Risk"
            titleCn="更强密封 · 更低渗漏风险"
            content="Compared to conventional plastic ties that can loosen over time, the wire closure provides a significantly stronger and more reliable seal. The metal wire maintains its shape and tension, ensuring consistent seal performance throughout sample processing, storage, and transport."
            contentCn="与可能随时间松弛的普通塑料扎带相比，金属丝封口提供显著更强、更可靠的密封效果。金属丝保持其形状和张力，确保在样本处理、存储和运输全程保持一致的密封性能。"
            imageLeft={true}
            index={4}
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3">Conventional Plastic Tie</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> May loosen over time</li>
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> Risk of sample leakage</li>
                <li className="flex items-start gap-2"><X className="h-4 w-4 mt-0.5 text-red-500" /> Inconsistent seal quality</li>
              </ul>
              <p className="text-xs text-red-600 mt-3">普通塑料扎带：可能松弛、有渗漏风险、密封质量不一致</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">Wire Closure</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> Maintains shape and tension</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> Leak-resistant seal</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-green-500" /> Consistent performance</li>
              </ul>
              <p className="text-xs text-green-600 mt-3">金属丝封口：保持形状张力、防漏密封、性能稳定一致</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'film-quality',
      title: 'Tear-resistant Multilayer Film',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_achieve_pack_tear_resistant_detail_9877739.webp"
            imageAlt="Tear-resistant Film Detail"
            title="Reinforced Film for Demanding Applications"
            titleCn="加强型薄膜，适用于严苛应用"
            content="AchievePack® wire closure bags feature multilayer reinforced film construction that resists tearing and puncturing during homogenization. The transparent film provides excellent sample visibility while maintaining structural integrity under mechanical stress."
            contentCn="AchievePack® 金属丝封口袋采用多层加强薄膜结构，在均质过程中抵抗撕裂和穿刺。透明薄膜提供出色的样本可见性，同时在机械应力下保持结构完整性。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Layers className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Multilayer</h4>
              <p className="text-xs text-neutral-500">Reinforced structure 多层加强结构</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Shield className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Tear-resistant</h4>
              <p className="text-xs text-neutral-500">High durability 高耐用性</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Sparkles className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">Transparent</h4>
              <p className="text-xs text-neutral-500">Sample visibility 样本可见</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <Zap className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800 text-sm">~72 μm</h4>
              <p className="text-xs text-neutral-500">Wall thickness 壁厚</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sterilization',
      title: 'Gamma Sterilization & Clean Room Production',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_achieve_pack_sterilization_process_2713430.webp"
            imageAlt="Gamma Sterilization Process"
            title="Gamma Irradiation Sterilized"
            titleCn="γ 辐照灭菌"
            content="All AchievePack® wire closure bags undergo gamma irradiation sterilization to ensure pre-use sterility. This process eliminates bacteria, spores, and other microorganisms, making our bags ideal for contamination-sensitive microbiology testing applications."
            contentCn="所有 AchievePack® 金属丝封口袋均经过 γ 辐照灭菌处理，确保使用前的无菌状态。此过程消除细菌、孢子和其他微生物，使我们的袋子成为对污染敏感的微生物检测应用的理想选择。"
            imageLeft={true}
            index={6}
          />
          
          <AlternatingSection
            image="/imgs/lab/wire/clean-room-production.webp"
            imageAlt="Clean Room Production Environment"
            title="Clean Room Production Environment"
            titleCn="洁净室生产环境"
            content="Our wire closure bags are manufactured in controlled clean room environments to minimize particulate and microbial contamination during production. This ensures consistent quality and reliability for demanding laboratory applications."
            contentCn="我们的金属丝封口袋在受控洁净室环境中生产，最大限度减少生产过程中的颗粒和微生物污染。这确保了对严苛实验室应用的一致质量和可靠性。"
            imageLeft={false}
            index={7}
          />
        </div>
      )
    },
    {
      id: 'transport',
      title: 'Trusted Seal During Transport',
      icon: <Truck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Reliable Protection Throughout the Journey</h3>
            <p className="text-green-700 mb-3">
              The wire closure seal remains secure during sample transport, even when the bag is subjected to movement and vibration. Whether transporting samples within the lab or shipping to external testing facilities, the wire closure provides trusted leak protection.
            </p>
            <p className="text-green-600 text-sm">
              金属丝封口密封在样本运输过程中保持牢固，即使袋子受到移动和振动影响。无论是在实验室内运输样本还是发送到外部检测机构，金属丝封口都提供可靠的防漏保护。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Truck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Transport Safe</h4>
              <p className="text-sm text-blue-700">Withstands movement & vibration</p>
              <p className="text-xs text-blue-600 mt-1">耐受移动和振动</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">No Leakage</h4>
              <p className="text-sm text-blue-700">Seal integrity maintained</p>
              <p className="text-xs text-blue-600 mt-1">密封完整性保持</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
              <CheckCircle className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-blue-800">Sample Integrity</h4>
              <p className="text-sm text-blue-700">Protected throughout journey</p>
              <p className="text-xs text-blue-600 mt-1">全程样本完整性保护</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Multi-industry Applications',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/lab/wire/a_brand_wire_closure_summary_1900843.webp"
            imageAlt="Wire Closure Brand Summary"
            title="Trusted Across Industries Worldwide"
            titleCn="全球多行业信赖之选"
            content="AchievePack® wire closure blender bags are used by laboratories and testing facilities across food safety, pharmaceutical quality control, cosmetics testing, environmental monitoring, and research institutions worldwide. Our bags meet the demanding requirements of ISO, GLP, and HACCP protocols."
            contentCn="AchievePack® 金属丝封口均质袋被全球食品安全、药品质量控制、化妆品检测、环境监测和研究机构的实验室和检测设施广泛使用。我们的袋子满足 ISO、GLP 和 HACCP 协议的严格要求。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { icon: <Beaker className="h-5 w-5" />, title: 'Food Testing', titleCn: '食品检测' },
              { icon: <FlaskConical className="h-5 w-5" />, title: 'Pharma QC', titleCn: '药品质控' },
              { icon: <Sparkles className="h-5 w-5" />, title: 'Cosmetics', titleCn: '化妆品' },
              { icon: <Leaf className="h-5 w-5" />, title: 'Environmental', titleCn: '环境检测' },
              { icon: <Microscope className="h-5 w-5" />, title: 'Research', titleCn: '科研机构' },
            ].map((item, i) => (
              <div key={i} className="bg-primary-50 p-3 rounded-lg border border-primary-200 text-center">
                <div className="text-primary-600 mx-auto mb-1 flex justify-center">{item.icon}</div>
                <h4 className="font-medium text-primary-800 text-sm">{item.title}</h4>
                <p className="text-xs text-primary-600">{item.titleCn}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sizes',
      title: 'Available Sizes & Specifications',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Size 尺寸</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Dimensions 尺寸规格</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Capacity 容量</th>
                  <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Best For 适用</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">6 × 9 inch</td>
                  <td className="border border-neutral-300 px-4 py-3">152 × 229 mm</td>
                  <td className="border border-neutral-300 px-4 py-3">~200 mL</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">Small samples 小样本</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">7.5 × 12 inch</td>
                  <td className="border border-neutral-300 px-4 py-3">190 × 305 mm</td>
                  <td className="border border-neutral-300 px-4 py-3">~400 mL</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">Standard 标准</td>
                </tr>
                <tr className="hover:bg-neutral-50">
                  <td className="border border-neutral-300 px-4 py-3 font-medium">10 × 15 inch</td>
                  <td className="border border-neutral-300 px-4 py-3">254 × 381 mm</td>
                  <td className="border border-neutral-300 px-4 py-3">~1000 mL</td>
                  <td className="border border-neutral-300 px-4 py-3 text-sm">Large samples 大样本</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Custom sizes available:</strong> Contact us for custom dimensions and specifications to meet your specific laboratory requirements.
            </p>
            <p className="text-amber-700 text-xs mt-1">
              可提供定制尺寸：联系我们获取定制尺寸和规格，以满足您的特定实验室要求。
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Request Samples & Pricing',
      icon: <Mail className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Get Started with AchievePack® Wire Closure Bags</h3>
              <p className="text-primary-100 mb-6">
                Experience the superior seal performance of our wire closure blender bags. Request samples for evaluation or get competitive pricing for bulk orders.
              </p>
              <p className="text-primary-200 text-sm mb-6">
                体验我们金属丝封口均质袋的卓越密封性能。申请样品评估或获取批量订单优惠价格。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
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
    { question: 'What is the wire closure on AchievePack blender bags?', answer: 'The wire closure is an integrated metal wire at the top of the bag that can be folded and twisted to create a secure, leak-resistant seal. It provides superior sealing compared to conventional plastic ties.' },
    { question: 'How do I seal the bag using the wire closure?', answer: 'Simply fold the wire at the bag opening, then twist it tightly several turns. The wire maintains its shape after twisting, creating a durable, leak-resistant seal.' },
    { question: 'Are the wire closure bags sterile?', answer: 'Yes, all AchievePack wire closure bags are gamma irradiation sterilized and produced in clean room environments to ensure pre-use sterility.' },
    { question: 'What sizes are available?', answer: 'We offer three standard sizes: 6×9 inch (~200mL), 7.5×12 inch (~400mL standard), and 10×15 inch (~1000mL). Custom sizes are also available upon request.' },
    { question: 'Can the wire closure be resealed?', answer: 'Yes, the wire closure can be untwisted and retwisted if you need to access the sample and reseal the bag. However, for optimal sterility, we recommend single-use operation.' },
    { question: 'Is the wire closure safe during homogenization?', answer: 'Yes, the wire closure is designed to be positioned at the top of the bag, away from the homogenization zone. It does not interfere with the blending process.' },
    { question: 'What industries use wire closure blender bags?', answer: 'Our bags are used in food testing, pharmaceutical QC, cosmetics, environmental testing, and research institutions worldwide for microbiology sample preparation.' },
    { question: 'How do I order samples or get pricing?', answer: 'Contact us via email at ryan@achievepack.com or book a consultation through our website. We offer sample kits for evaluation and competitive pricing for bulk orders.' },
  ]

  const relatedLinks = [
    { title: 'Lateral Filter Bags', url: '/lab/lateral-filter-bags' },
    { title: 'Home Compostable Materials', url: '/materials/home-compostable' },
    { title: 'Industrial Compostable Options', url: '/materials/industrial-compostable' },
    { title: 'Company Certificates', url: '/company/certificates' },
    { title: 'About Achieve Pack', url: '/company/about' },
    { title: 'Factory Tour', url: '/company/factory-tour' },
    { title: 'Stand Up Pouches', url: '/packaging/stand-up-pouches' },
    { title: 'Barrier Options', url: '/features/barrier-options' },
    { title: 'Digital Printing', url: '/printing/digital-printing' },
    { title: 'FAQs', url: '/support/faqs' },
  ]

  return (
    <>
      <SEOPageLayout
        title="Wire Closure Blender Bags | Leak-resistant Lab Sample Bags | AchievePack"
        description="AchievePack wire closure blender bags feature integrated metal wire seal for superior leak-resistant sample preparation. Gamma sterilized, clean room produced. Fold · Twist · Lock for secure sealing. 金属丝封口均质袋，更优防漏密封。"
        keywords={['wire closure bags', 'blender bags', 'lab sample bags', 'sterile blender bags', 'leak-resistant bags', 'gamma sterilized bags', 'clean room production', 'food testing', 'pharmaceutical QC', 'microbiology sample prep', 'homogenizer bags', 'metal wire seal']}
        canonicalUrl="https://achievepack.com/lab/wire-closure-bags"
        heroTitle="Wire Closure Blender Bags"
        heroSubtitle="Wire closure for a superior seal. Sterile lab blender bags with integrated metal wire for leak-resistant sample preparation. Clean room produced, gamma sterilized. 金属丝封口，更优防漏密封。洁净室生产，γ 辐照灭菌。"
        heroImage="/imgs/lab/wire/a_wire_closure_white_0753579.webp"
        introSummary="AchievePack® wire closure blender bags feature integrated metal wire seal technology for superior leak-resistant sample preparation. Simply fold and twist to create a secure seal. Clean room produced and gamma sterilized for contamination-sensitive microbiology testing in food, pharmaceutical, cosmetic, and environmental laboratories."
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
              alt={wireClosureGallery[galleryEnlarged.index]?.title || 'Gallery image'} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{wireClosureGallery[galleryEnlarged.index]?.title}</p>
              <p className="text-neutral-400 text-sm">{wireClosureGallery[galleryEnlarged.index]?.desc}</p>
              <p className="text-neutral-500 text-xs mt-2">{galleryEnlarged.index + 1} / {wireClosureGallery.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WireClosureBagsPage
