import React, { useState } from 'react'
import { Package, Droplets, Layers, Settings, Fish, Award, Users, Globe, FileCheck, Building2, Sparkles, Shield, CheckCircle, Calendar, Mail, X, ChevronLeft, ChevronRight, Ruler, Recycle, Target, Thermometer, Box } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Gallery images from /imgs/function/water/
const pvaGallery = [
  { src: '/imgs/function/water/hero.webp', title: 'Achieve Pack® PVA Water-Soluble Bait Bags', desc: 'Achieve Pack® PVA 水溶诱饵袋' },
  { src: '/imgs/function/water/a_pva_material_closeup_8668927.webp', title: 'PVA Material Closeup', desc: 'PVA 材质特写' },
  { src: '/imgs/function/water/a_dissolution_step1_drop_6327912.webp', title: 'Step 1: Drop in Water', desc: '步骤1：入水瞬间' },
  { src: '/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp', title: 'Step 2: Film Dissolving', desc: '步骤2：薄膜溶解' },
  { src: '/imgs/function/water/a_dissolution_step3_complete_2409421.webp', title: 'Step 3: Complete Dissolution', desc: '步骤3：完全溶解' },
  { src: '/imgs/function/water/a_hook_bait_unity_8654964.webp', title: 'Hook Hidden Inside Bait', desc: '钩饵一体' },
  { src: '/imgs/function/water/a_fishing_application_scene_9430782.webp', title: 'Fishing Application Scene', desc: '钓鱼应用场景' },
  { src: '/imgs/function/water/a_specification_custom_sizes_2365104.webp', title: 'Custom Sizes Available', desc: '多规格定制' },
  { src: '/imgs/function/water/a_performance_storage_solubility_8701547.webp', title: 'Storage & Solubility Performance', desc: '防潮储存与水溶性能' },
]

const PVAWaterSolubleBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)
  
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = pvaGallery.length - 1
    if (newIndex >= pvaGallery.length) newIndex = 0
    setGalleryEnlarged({ src: pvaGallery[newIndex].src, index: newIndex })
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
      title: 'Achieve Pack® PVA Water-Soluble Bait Bags Overview',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              <strong>Completely dissolves in water for clean and efficient bait delivery</strong> — Achieve Pack® PVA water-soluble bait bags are designed specifically for fishing applications. The film dissolves completely underwater, leaving no residue while delivering bait precisely to your target location.
            </p>
            <p className="text-neutral-700">
              完全溶于水，实现干净高效的诱饵投放 — Achieve Pack® PVA 水溶诱饵袋专为钓鱼应用设计。薄膜在水中完全溶解，无残留，精准将饵料投放到目标位置。
            </p>
          </div>
          
          <AlternatingSection
            image="/imgs/function/water/hero.webp"
            imageAlt="Achieve Pack PVA Water-Soluble Bait Bags Hero"
            title="Achieve Pack® PVA Water-Soluble Bait Bags"
            titleCn="Achieve Pack® PVA 水溶诱饵袋"
            content="Our PVA water-soluble bait bags are made from polyvinyl alcohol film that completely dissolves in water. Perfect for carp fishing, catfishing, and other angling applications. Fill with pellets, groundbait, or boilies - cast and watch the bag dissolve, creating a concentrated bait cloud around your hook."
            contentCn="我们的 PVA 水溶诱饵袋采用聚乙烯醇薄膜制成，在水中完全溶解。非常适合鲤鱼、鲶鱼等各类钓鱼应用。装入颗粒饵、粉饵或鱼饵球，抛投后袋子溶解，在钩子周围形成浓缩饵料云。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'pva-material',
      title: 'PVA Material & Water Solubility',
      icon: <Droplets className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_pva_material_closeup_8668927.webp"
            imageAlt="PVA Water-Soluble Film Material Closeup"
            title="100% Water-Soluble PVA Film"
            titleCn="100% 水溶性 PVA 薄膜"
            content="PVA (Polyvinyl Alcohol) film is a biodegradable, water-soluble material that dissolves completely in water without leaving any harmful residue. The film is soft, flexible, and transparent, allowing you to see the bait inside. Heat-sealable for secure closure before casting."
            contentCn="PVA（聚乙烯醇）薄膜是一种可生物降解的水溶性材料，在水中完全溶解，不留任何有害残留物。薄膜柔软、灵活、透明，可以看到内部的饵料。可热封密封，抛投前确保封口牢固。"
            imageLeft={false}
            index={1}
          />
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Droplets className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">100% Water Soluble</h4>
              <p className="text-sm text-blue-700">Dissolves completely in water</p>
              <p className="text-xs text-blue-600 mt-1">在水中完全溶解</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Recycle className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Biodegradable</h4>
              <p className="text-sm text-blue-700">Eco-friendly, no residue</p>
              <p className="text-xs text-blue-600 mt-1">环保无残留</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Shield className="h-5 w-5 text-blue-600 mb-2" />
              <h4 className="font-semibold text-blue-800">Heat Sealable</h4>
              <p className="text-sm text-blue-700">Secure closure before casting</p>
              <p className="text-xs text-blue-600 mt-1">热封确保密封</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step1',
      title: 'Dissolution Process: Step 1 - Drop in Water',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step1_drop_6327912.webp"
            imageAlt="PVA Bait Bag Drop in Water Step 1"
            title="Step 1: Cast and Drop into Water"
            titleCn="步骤1：抛投入水"
            content="Cast your PVA bait bag attached to your fishing rig into the water. The moment the bag hits the water surface, the dissolution process begins. The bag contour remains clear initially, with slight ripples on the water surface indicating the entry point."
            contentCn="将挂有 PVA 诱饵袋的钓组抛入水中。袋子入水的瞬间，溶解过程开始。袋子轮廓最初仍清晰可见，水面轻微涟漪标记着入水点。"
            imageLeft={true}
            index={2}
          />
          
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h4 className="font-semibold text-cyan-800 mb-3">✓ Casting Tips</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-cyan-700"><strong>Attach to rig securely</strong></p>
                <p className="text-cyan-600">确保与钓组连接牢固</p>
              </div>
              <div>
                <p className="text-cyan-700"><strong>Cast smoothly to avoid tearing</strong></p>
                <p className="text-cyan-600">平稳抛投避免撕裂</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step2',
      title: 'Dissolution Process: Step 2 - Film Dissolving',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step2_dissolving_9965853.webp"
            imageAlt="PVA Film Dissolving Step 2"
            title="Step 2: Film Starts to Dissolve"
            titleCn="步骤2：薄膜开始溶解"
            content="Within seconds of submersion, the PVA film begins to thin and become more transparent. Small tears and openings appear along the edges as the water breaks down the polymer structure. You can see fine dissolution trails and tiny bubbles in the water as the film disintegrates."
            contentCn="入水几秒后，PVA 薄膜开始变薄变透明。边缘出现小裂口和开口，水分解聚合物结构。可以看到水中有细小的溶解纹路和微泡，薄膜逐渐分解。"
            imageLeft={false}
            index={3}
          />
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">💧</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Water Activation</h4>
              <p className="text-xs text-neutral-500">水分激活溶解</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">⏱️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Fast Dissolution</h4>
              <p className="text-xs text-neutral-500">快速溶解</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🫧</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">No Residue</h4>
              <p className="text-xs text-neutral-500">无残留</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'dissolution-step3',
      title: 'Dissolution Process: Step 3 - Complete Dissolution',
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_dissolution_step3_complete_2409421.webp"
            imageAlt="PVA Film Complete Dissolution Step 3"
            title="Step 3: Film Completely Dissolves - Bait Cloud Forms"
            titleCn="步骤3：薄膜完全溶解 - 饵料云形成"
            content="The PVA film is now almost invisible underwater. The bait pellets or groundbait freely disperse in the water, forming a concentrated 'cloud' around your hook. The fishing hook and line are clearly visible, surrounded by an attractive bait presentation that draws fish to your target zone."
            contentCn="PVA 薄膜在水中几乎看不见了。饵料颗粒或粉饵在水中自由扩散，在钩子周围形成浓缩的饵料云。鱼钩和鱼线清晰可见，周围是吸引鱼类的诱人饵料呈现。"
            imageLeft={true}
            index={4}
          />
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">✓ Benefits of Complete Dissolution</h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No residue left in the water - eco-friendly</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Bait concentrated around the hook - attracts fish</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Hook is free to catch - no interference</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Clean and efficient bait delivery every cast</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'hook-bait-unity',
      title: 'Hook & Bait Unity: Perfect Presentation',
      icon: <Fish className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_hook_bait_unity_8654964.webp"
            imageAlt="Hook Hidden Inside PVA Bait Bag"
            title="Hook Hidden Inside the Bait"
            titleCn="钩子隐藏在饵料中"
            content="Before casting, the fishing hook is completely buried inside the bait mound within the PVA bag. Only a tiny tip of the hook is slightly visible. The bag top is heat-sealed for a secure closure. Once underwater, the bag dissolves and the hook is revealed, surrounded by an attractive bait pile."
            contentCn="抛投前，鱼钩完全埋在 PVA 袋内的饵料堆中，只有一点点钩尖略微可见。袋口热封确保密封。入水后袋子溶解，钩子显露，周围是诱人的饵料堆。"
            imageLeft={false}
            index={5}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Fish className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-2">Carp Fishing</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Pellets and boilies 颗粒饵和鱼饵球</li>
                <li>• Hemp and particles 麻籽和颗粒</li>
                <li>• Groundbait mix 粉饵混合</li>
                <li>• Method feeder setups 方法钓组</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Target className="h-6 w-6 text-blue-700 mb-2" />
              <h4 className="font-semibold text-blue-800 mb-2">Catfishing</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Stink bait 臭味饵</li>
                <li>• Cut bait 切片饵</li>
                <li>• Dough bait 面团饵</li>
                <li>• Punch bait 冲压饵</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'fishing-application',
      title: 'Fishing Application Scenes',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_fishing_application_scene_9430782.webp"
            imageAlt="PVA Bait Bag Fishing Application Scene"
            title="Clean Casting - Precise Baiting"
            titleCn="干净抛投 - 精准打窝"
            content="An angler stands by the lake or river, casting a fishing hook rigged with a PVA water-soluble bait bag. The bait bag hits the water surface with a small splash, then sinks to the bottom where the bag dissolves and releases the bait cloud. Perfect for targeting specific spots without creating disturbance."
            contentCn="钓鱼者站在湖边或河边，将挂有 PVA 水溶诱饵袋的鱼钩抛出。饵袋入水时溅起小水花，然后沉入水底，袋子溶解释放饵料云。非常适合精准打窝而不惊扰鱼群。"
            imageLeft={true}
            index={6}
          />
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🐟</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Carp Fishing</h4>
              <p className="text-xs text-neutral-500">鲤鱼钓</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🎣</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Catfishing</h4>
              <p className="text-xs text-neutral-500">鲶鱼钓</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🌊</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">Lake Fishing</h4>
              <p className="text-xs text-neutral-500">湖钓</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center">
              <span className="text-2xl">🏞️</span>
              <h4 className="font-semibold text-neutral-800 text-sm mt-2">River Fishing</h4>
              <p className="text-xs text-neutral-500">河钓</p>
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
            image="/imgs/function/water/a_specification_custom_sizes_2365104.webp"
            imageAlt="PVA Bait Bag Custom Sizes"
            title="Custom Sizes & Printing Available"
            titleCn="多规格定制与印刷"
            content="Achieve Pack® offers PVA water-soluble bait bags in multiple sizes from small to large, suitable for different bait quantities and fishing applications. Custom sizes available. Options include clear or tinted film, with up to 10 colors printing for branding. All bags are heat-sealable."
            contentCn="Achieve Pack® 提供从小到大多种规格的 PVA 水溶诱饵袋，适用于不同饵量和钓鱼应用。支持定制尺寸。可选透明或有色薄膜，最多 10 色印刷用于品牌定制。所有袋子均可热封。"
            imageLeft={false}
            index={7}
          />
          
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-4">Available Specifications</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">Small</h5>
                <p className="text-xs text-neutral-500">For light baiting</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">Medium</h5>
                <p className="text-xs text-neutral-500">Standard size</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">Large</h5>
                <p className="text-xs text-neutral-500">For heavy baiting</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
                <h5 className="font-bold text-primary-600 text-lg">Custom</h5>
                <p className="text-xs text-neutral-500">Your specifications</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800">Clear Film</h4>
              <p className="text-sm text-blue-700">See-through transparency</p>
              <p className="text-xs text-blue-600 mt-1">透明薄膜</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <h4 className="font-semibold text-cyan-800">Tinted Film</h4>
              <p className="text-sm text-cyan-700">Color options available</p>
              <p className="text-xs text-cyan-600 mt-1">有色薄膜</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800">Custom Printing</h4>
              <p className="text-sm text-purple-700">Up to 10 colors</p>
              <p className="text-xs text-purple-600 mt-1">最多10色印刷</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'storage-performance',
      title: 'Storage & Performance',
      icon: <Box className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/imgs/function/water/a_performance_storage_solubility_8701547.webp"
            imageAlt="PVA Bag Storage and Solubility Performance"
            title="Moisture-Proof Storage & Fast Water Solubility"
            titleCn="防潮储存与快速水溶"
            content="PVA water-soluble bags must be stored in a dry environment before use to prevent premature dissolution. Keep in sealed containers or resealable pouches away from moisture. Once in water, the bags dissolve rapidly, releasing bait efficiently. Our bags are designed for consistent performance in various water temperatures."
            contentCn="PVA 水溶袋使用前必须存放在干燥环境中，防止提前溶解。保存在密封容器或可重封袋中，远离潮湿。入水后袋子快速溶解，高效释放饵料。我们的袋子在各种水温下都能保持稳定性能。"
            imageLeft={true}
            index={8}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <Thermometer className="h-6 w-6 text-amber-700 mb-2" />
              <h4 className="font-semibold text-amber-800 mb-3">Storage Guidelines</h4>
              <ul className="text-sm text-amber-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Keep dry before use</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Store in sealed containers</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Avoid humidity and moisture</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Room temperature storage</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <Droplets className="h-6 w-6 text-blue-700 mb-2" />
              <h4 className="font-semibold text-blue-800 mb-3">Dissolution Performance</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Fast dissolution in water</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Works in various water temps</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No residue left behind</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Consistent performance</li>
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
          {/* E-E-A-T Trust Signals */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Professional PVA Water-Soluble Packaging from Guangdong, China</h3>
            <p className="text-neutral-700 mb-4">
              With over 13 years of flexible packaging expertise and production capacity up to 1,200 tons per year, Achieve Pack supplies PVA water-soluble bait bags to fishing tackle brands and bait manufacturers worldwide. ISO and BRC certified production ensures consistent quality for both food and non-food applications.
            </p>
            <p className="text-neutral-600 text-sm">
              凭借超过 13 年的软包装专业经验和年产能高达 1,200 吨，Achieve Pack 为全球钓具品牌和饵料制造商供应 PVA 水溶诱饵袋。ISO 和 BRC 认证生产确保食品和非食品应用的稳定品质。
            </p>
          </div>
          
          {/* Trust Badges Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">ISO Certified</h4>
              <p className="text-xs text-neutral-500">Quality management</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">BRC Certified</h4>
              <p className="text-xs text-neutral-500">Food safety standard</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">1,200 Tons/Year</h4>
              <p className="text-xs text-neutral-500">Production capacity</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-neutral-800">13+ Years</h4>
              <p className="text-xs text-neutral-500">Industry experience</p>
            </div>
          </div>
          
          {/* Internal Links for SEO */}
          <div className="bg-neutral-50 p-6 rounded-lg">
            <h4 className="font-semibold text-neutral-800 mb-3">Explore Related Solutions</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <Link to="/materials/compostable" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> Compostable Materials
              </Link>
              <Link to="/packaging/flat-pouches" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Flat Pouches
              </Link>
              <Link to="/features/barrier-options" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Shield className="h-4 w-4" /> Barrier Options
              </Link>
              <Link to="/printing/digital-printing" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Layers className="h-4 w-4" /> Digital Printing
              </Link>
              <Link to="/company/certificates" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Award className="h-4 w-4" /> Our Certifications
              </Link>
              <Link to="/support/faqs" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <CheckCircle className="h-4 w-4" /> FAQs
              </Link>
              <Link to="/function/rice-paper-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Package className="h-4 w-4" /> Rice Paper Bags
              </Link>
              <Link to="/function/carbon-neutral-bags" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Recycle className="h-4 w-4" /> Carbon Neutral Bags
              </Link>
              <Link to="/company/factory-tour" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm">
                <Building2 className="h-4 w-4" /> Factory Tour
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
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Choose How You'd Like to Connect</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Book a Call</h4>
              <p className="text-sm text-white/80 mb-4">30-min free consultation</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                Schedule Now
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Quote</h4>
              <p className="text-sm text-white/80 mb-4">Get response within 24hrs</p>
              <a href="mailto:ryan@achievepack.com?subject=PVA Water-Soluble Bait Bags Quote" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
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
      question: "What are PVA water-soluble bait bags made of?",
      answer: "PVA (Polyvinyl Alcohol) water-soluble bait bags are made from a biodegradable polymer film that completely dissolves in water. The material is non-toxic, leaves no harmful residue, and is safe for aquatic environments. Our PVA film is heat-sealable for secure closure before casting."
    },
    {
      question: "How long does it take for PVA bags to dissolve?",
      answer: "PVA bags typically dissolve within 30 seconds to 2 minutes depending on water temperature. Warmer water speeds up dissolution while colder water may slow it down slightly. Our bags are designed for consistent performance across various water conditions."
    },
    {
      question: "Are PVA bait bags safe for the environment?",
      answer: "Yes, PVA water-soluble bags are completely biodegradable and eco-friendly. The film dissolves 100% in water without leaving any harmful residue. PVA is non-toxic to fish and aquatic life, making it the preferred choice for environmentally conscious anglers."
    },
    {
      question: "How should I store PVA bait bags?",
      answer: "PVA bags must be kept dry before use. Store them in sealed containers or resealable pouches away from moisture and humidity. Room temperature storage is recommended. Avoid exposing them to wet hands or damp environments before fishing."
    },
    {
      question: "What types of bait can I use with PVA bags?",
      answer: "PVA bags work with various baits including pellets, groundbait, boilies, hemp seeds, particles, and other dry or semi-dry baits. Avoid using overly wet or oily baits as they may cause premature dissolution. For best results, use dry or slightly damp bait."
    },
    {
      question: "Can I get custom-sized PVA bait bags?",
      answer: "Yes, Achieve Pack offers custom sizing for PVA water-soluble bait bags. We provide small, medium, and large standard sizes, plus fully customizable dimensions. Custom printing with up to 10 colors is also available for branding purposes."
    },
    {
      question: "What fishing applications are PVA bags best for?",
      answer: "PVA bait bags are ideal for carp fishing, catfishing, and other freshwater angling. They're perfect for method feeder setups, spod mixes, and precise bait presentation. The bags allow you to deliver concentrated bait directly to your hook location."
    },
    {
      question: "What is the minimum order quantity for PVA bait bags?",
      answer: "Minimum order quantities vary based on size and customization requirements. For standard sizes, MOQ typically starts from 10,000 pieces. Custom printed bags may have higher MOQs. Contact us for specific quotes based on your requirements."
    }
  ]

  // Enhanced related links for internal linking SEO
  const relatedLinks = [
    // Material options
    { title: "Compostable Materials", url: "/materials/compostable", description: "100% plastic-free eco-friendly material options" },
    { title: "Home Compostable", url: "/materials/home-compostable", description: "OK Compost HOME certified materials" },
    // Packaging shapes
    { title: "Flat Pouches", url: "/packaging/flat-pouches", description: "3-side seal flat pouches" },
    { title: "Stand Up Pouches", url: "/packaging/stand-up-pouches", description: "Versatile self-standing packaging" },
    // Features
    { title: "Barrier Options", url: "/features/barrier-options", description: "Choose your protection level" },
    { title: "Digital Printing", url: "/printing/digital-printing", description: "Low MOQ custom printed pouches" },
    // Related function pages
    { title: "Rice Paper Bags", url: "/function/rice-paper-bags", description: "Compostable rice paper pouches" },
    { title: "Carbon Neutral Bags", url: "/function/carbon-neutral-bags", description: "Climate-positive packaging" },
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Microwave-safe steam venting" },
    { title: "Child-Resistant Bags", url: "/function/child-resistant-bags", description: "Certified child-safety packaging" },
    // Company
    { title: "Certificates", url: "/company/certificates", description: "ISO & BRC certifications" },
    { title: "Factory Tour", url: "/company/factory-tour", description: "See our production facility" },
    { title: "FAQs", url: "/support/faqs", description: "Common questions answered" }
  ]

  return (
    <>
      <SEOPageLayout
        title="PVA Water-Soluble Bait Bags | Achieve Pack® Fishing Packaging"
        description="Achieve Pack® PVA water-soluble bait bags dissolve completely in water for clean, efficient bait delivery. Perfect for carp fishing, catfishing. Custom sizes, printing available. ISO & BRC certified."
        keywords={['PVA bait bags', 'water-soluble bags', 'fishing bait packaging', 'PVA bags fishing', 'dissolving bait bags', 'carp fishing bags', 'catfish bait bags', 'water soluble film', 'biodegradable bait bags', 'fishing tackle packaging', 'PVA mesh bags', '水溶诱饵袋', 'PVA钓鱼袋']}
        canonicalUrl="https://achievepack.com/function/pva-water-soluble-bags"
        heroTitle="Achieve Pack® PVA Water-Soluble Bait Bags"
        heroSubtitle="Completely dissolves in water - Clean and efficient bait delivery / 完全溶于水 - 干净高效的诱饵投放"
        heroImage="/imgs/function/water/hero.webp"
        heroImageAlt="Achieve Pack PVA Water-Soluble Bait Bags"
        introSummary="Achieve Pack® PVA water-soluble bait bags are made from 100% biodegradable PVA film that dissolves completely in water. Perfect for carp fishing, catfishing, and precise bait delivery. Custom sizes and printing available."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Ready to Order PVA Bait Bags?"
        ctaDescription="Get Achieve Pack® PVA water-soluble bags for fishing applications. Custom sizes and printing available. ISO & BRC certified production."
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
          <img src={galleryEnlarged.src} alt={pvaGallery[galleryEnlarged.index]?.title || 'Enlarged view'} className="max-w-full max-h-[80vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }} className="absolute right-4 text-white hover:text-neutral-300 transition p-2">
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="font-medium">{pvaGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-neutral-300">{pvaGallery[galleryEnlarged.index]?.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PVAWaterSolubleBagsPage
