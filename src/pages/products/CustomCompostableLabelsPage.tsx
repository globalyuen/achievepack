import React, { useState } from 'react'
import { Tag, Leaf, Shield, Award, Clock, Users, Calendar, Mail, FileCheck, CheckCircle, Star, Sparkles, Truck, Layers, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Link } from 'react-router-dom'
import { useCalendly } from '../../contexts/CalendlyContext'

// Branded vector graphics from public/taobao/compostable-label/
const diagramGallery = [
  { src: '/taobao/compostable-label/eco_friendly_stickers.svg', title: 'Compostable Layer Structure', desc: 'Exploded engineering view of our FSC face stock, soy-ink, bio-adhesive, and glassine liner.' },
  { src: '/taobao/compostable-label/composting_degradation.svg', title: '180-Day Degradation Timeline', desc: 'Complete breakdown process showing how the label returns safely to the soil leaving zero microplastics.' },
  { src: '/taobao/compostable-label/certifications_applications.svg', title: 'Compliance & B2B Use-Cases', desc: 'Our extensive certification matrix (FSC, TÜV, FDA, SGS) and professional packaging applications.' }
]

const photoGallery = [
  { src: '/taobao/compostable-label/compostable-label-cover.jpg', title: 'FSC Certified Compostable Label Cover', titleCn: 'FSC 認證可堆肥貼紙與標籤主圖', desc: 'Official FSC-certified compostable adhesive label supporting small batch customization, strong adhesion, and 24-hour quotes.' },
  { src: '/taobao/compostable-label/compostable-labels-1.jpg', title: 'Achieve Pack Eco-Conscious Labels', titleCn: 'Achieve Pack 品牌環保貼紙捲料', desc: 'Custom printed food, supplement, and cosmetic labels in high-density rolls with vibrant vegetable ink.' },
  { src: '/taobao/compostable-label/compostable-labels-2.png', title: 'Beū Sustainable Body Scrub Label', titleCn: 'Beū 有機化妝品生物降解貼紙', desc: 'Premium moisture-resistant plant PLA face stock with compostable adhesive and soy-based printing.' },
  { src: '/taobao/compostable-label/compostable-labels-3.png', title: 'Sustainable Direct Thermal Labels', titleCn: 'BPI認證熱敏物流快遞標籤', desc: 'BPI certified and compostable direct thermal label rolls with recyclable liner and eco-conscious thermal coating.' },
  { src: '/taobao/compostable-label/compostable-labels-4.png', title: 'Achieve Pack Sustainable Resin Film Label', titleCn: 'Achieve Pack 綠色可堆肥薄膜標籤', desc: 'Certified sustainable plant-based resin film label exhibiting precise, full-width digital printing and strong adhesion.' },
  { src: '/taobao/compostable-label/compostable-label-process.png', title: 'Compostable Label Printing Process Diagram', titleCn: '可堆肥標籤專業生產印刷與質檢工藝流程', desc: 'Detailed B2B commercial manufacturing process breakdown including raw material slitting, advanced digital printing, die-cutting, inline calibration, and automated packaging.' }
]

const fullGallery = [...diagramGallery, ...photoGallery]

const CustomCompostableLabelsPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = fullGallery.length - 1
    if (newIndex >= fullGallery.length) newIndex = 0
    setGalleryEnlarged({ src: fullGallery[newIndex].src, index: newIndex })
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
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group bg-white border border-neutral-100 p-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-lg" loading="lazy" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center mt-2 rounded-md">Click to view full diagram • 點擊放大查看高清圖表</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm leading-relaxed">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-medium">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm leading-relaxed">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group md:order-2 bg-white border border-neutral-100 p-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 rounded-lg" loading="lazy" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center mt-2 rounded-md">Click to view full diagram • 點擊放大查看高清圖表</div>
          </button>
        </>
      )}
    </div>
  )

  const sections = [
    {
      id: 'overview',
      title: 'Custom Compostable Adhesive Labels Overview',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 p-6 rounded-xl border border-green-200">
            <p className="text-lg font-medium text-neutral-900 mb-4 leading-relaxed">
              <strong>100% Certified Compostable Custom Labels</strong> — The ultimate sustainable labeling solution for premium brands. Engineered using FSC® certified paper and plant-starch PLA film, combined with a high-performance, FDA food-contact compliant pressure-sensitive bio-adhesive. Leave zero microplastics and completely biodegrade within 180 days.
            </p>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              <strong>100% 歐盟認證可堆肥客製貼紙標籤</strong> — 專為高端品牌研發的環保不干膠解決方案。採用 FSC® 森林認證紙張與天然植物澱粉 PLA 薄膜，配合 FDA 認證可與食品直接接觸的高效生物膠水。180天內完全降解為二氧化碳和水，不殘留任何微塑料。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">FSC® Certified</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">TÜV OK Compost</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">FDA Food Contact</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">EN 13432 / ASTM D6400</span>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-primary-700 border border-primary-200">Low MOQ (1,000 pcs)</span>
            </div>
          </div>

          <AlternatingSection
            image="/taobao/compostable-label/eco_friendly_stickers.svg"
            imageAlt="Compostable label structure diagram"
            title="Premium 4-Layer Ecological Structure"
            titleCn="四層黃金環保結構體系"
            content="Our compostable labels feature an advanced 4-layer ecological design: 1) Sustainable FSC-certified face paper or biodegradable PLA film printed with eco-friendly soy/vegetable inks. 2) Emulsified pressure-sensitive bio-adhesive that bonds securely to paper, glass, bio-plastics, and metal. 3) Premium glassine paper liner for seamless mechanical peeling."
            contentCn="我們的可堆肥標籤採用創新的四層生態結構：1) 最外層為 FSC 森林認證木漿紙或天然植物澱粉 PLA 薄膜，以大豆植物環保油墨進行超高清印刷；2) 中間為水乳型壓敏性生物膠水，具備極強的初粘性與持粘性；3) 底層採用格拉辛離型底紙，完美支持機器自動貼標。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'biodegradability',
      title: 'Biodegradability & Composting Performance',
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/taobao/compostable-label/composting_degradation.svg"
            imageAlt="180-day composting degradation timeline"
            title="Zero Microplastics. Complete Biodegradability."
            titleCn="180天完全生物降解 • 零微塑料殘留"
            content="Unlike traditional plastic (PP/PET) labels that break down into persistent microplastics, our PLA and FSC-paper compostable labels completely degrade under standard composting conditions. Over 180 days, microorganisms break down the face stock, bio-adhesive, and plant-based printing ink into clean biomass, water, and CO2, fully blending back into the natural eco-system."
            contentCn="與傳統塑料標籤（PP/PET）破碎成微塑料長期污染環境不同，我們的可堆肥標籤在標準堆肥環境下會迅速被微生物分解。在180天的黃金降解周期內，面材、生物黏合劑及植物油墨將徹底轉化為有機養分、水及二氧化碳，無重金屬或化學毒素殘留。"
            imageLeft={false}
            index={1}
          />

          <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-neutral-200">
            <div>
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Compostable Material Performance
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Our plant-based PLA film exhibits a slight natural starch aroma and provides outstanding oil, grease, and moisture barrier properties, making it superior for cosmetic and food brands.
              </p>
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 font-semibold text-neutral-700">
                    <th className="py-2 px-3">Performance Dimension</th>
                    <th className="py-2 px-3">PLA / FSC Compostable</th>
                    <th className="py-2 px-3">Conventional PP/PET</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">Degradation Rate</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">100% in 180 days</td>
                    <td className="py-2 px-3">Non-biodegradable</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">Microplastic Risk</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">Zero</td>
                    <td className="py-2 px-3">Extremely High</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-2 px-3 font-medium">Primary Source</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">Corn starch & Wood pulp</td>
                    <td className="py-2 px-3">Petroleum-based</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Eco Certifications</td>
                    <td className="py-2 px-3 text-green-600 font-semibold">FSC, TÜV, SGS</td>
                    <td className="py-2 px-3">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Certified Food Contact Safety
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Adhering to strict B2B procurement standards, our biological emulsion adhesive is certified under <strong>FDA 21 CFR 175.105</strong> for indirect food contact. It provides excellent long-term bonding reliability under temperature ranges from **-20°C (deep freeze) to 70°C**, preventing edge lifting on damp or curved container profiles.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 text-xs text-primary-800 space-y-1">
                <p className="font-semibold">B2B Adhesive Technical Data:</p>
                <p>• Initial Tack (loop tack test): ≥ 12 N/inch</p>
                <p>• Operating Temperature Range: -20°C to +70°C</p>
                <p>• Low Temperature Labeling Limit: -5°C (applicable to cold chain logistics)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'International Certifications & Industrial Capabilities',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <AlternatingSection
            image="/taobao/compostable-label/certifications_applications.svg"
            imageAlt="International certifications and applications diagram"
            title="Global Compliance & Sustainable Branding"
            titleCn="全球權威認證與多場景應用"
            content="Designed specifically for global brands, our compostable labels are fully compliant with European Union (EN 13432), North American (ASTM D6400), and global FSC forest standards. Printed on high-definition digital HP Indigo commercial presses, we ensure vibrant graphics, rich detail, and consistent brand presence across all organic cosmetics, fresh grocery items, wellness bottles, and mailing boxes."
            contentCn="為跨國出口品牌量身定制。我們的貼紙完全符合歐盟 EN 13432 與北美 ASTM D6400 堆肥標準，獲得 BPI、DIN CERTCO 與 FSC 森林鏈認證。採用國標頂尖進口數碼惠普數碼印刷機，完美兼容有機化妝品玻璃瓶、生鮮超市包裝、膳食補充劑、快遞外包裝箱等全場景貼標應用。"
            imageLeft={true}
            index={2}
          />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <FileCheck className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">21+ Years B2B Experience</h4>
              <p className="text-sm text-neutral-600">Manufactured in our 3,200 m² state-of-the-art facility. Backed by BRC Global Standards and ISO 9001 certified QA management.</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">21年實體工廠製造 • 3200㎡ 數字化標籤工藝專家</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">48-Hour Expedited Delivery</h4>
              <p className="text-sm text-neutral-600">Equipped with 4 high-speed digital production lines. We support custom shape tooling, free layout proofs, and fast shipping.</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">急單支持48小時極速出貨 • 提供免費排版與電子樣稿</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-8 w-8 text-primary-600 mb-4" />
              <h4 className="font-bold text-neutral-900 mb-2">Satisfaction Guarantee</h4>
              <p className="text-sm text-neutral-600">Every batch goes through strict quality inspections. We provide a full satisfaction guarantee and reprint/refund support for any QA issues.</p>
              <p className="text-xs text-primary-600 mt-2 font-medium">繁瑣工序 - 層層質檢 - 提供品質售後重印退款承諾</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Manufacturing & Printing Process • 專業印刷與工藝流程',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Precision Manufacturing Workflow • 嚴謹的生產印刷工藝</h3>
            <p className="text-neutral-700 leading-relaxed mb-4 text-sm">
              Our compostable labels are manufactured in our state-of-the-art 3,200 m² clean facility. We implement a standard multi-stage quality check to ensure that the physical performance of the labels meets rigorous international compostability standards (EN 13432 & BPI) while retaining excellent printing clarity and premium shelf appeal.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              我們的可堆肥環保標籤在 3,200 ㎡ 的無塵淨化車間中進行精準生產。我們實施嚴格的多階段品質檢測體系，在保證卓越印刷色彩和防潮防油性能的同時，完全符合歐盟 EN 13432 與北美 BPI 的嚴苛降解認證。
            </p>
          </div>

          <div className="block rounded-xl overflow-hidden shadow-lg border border-neutral-100 p-3 bg-white hover:shadow-xl transition-all">
            <button 
              onClick={() => setGalleryEnlarged({ src: '/taobao/compostable-label/compostable-label-process.png', index: fullGallery.findIndex(g => g.src.includes('process')) })}
              className="block w-full rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center cursor-pointer group border-0 p-0"
            >
              <img 
                src="/taobao/compostable-label/compostable-label-process.png" 
                alt="Compostable Label Manufacturing & Quality Check Process" 
                className="w-full h-auto max-h-[600px] object-contain group-hover:scale-[1.01] transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </button>
            <div className="px-4 py-3 bg-neutral-50 text-center rounded-lg mt-3">
              <span className="text-xs font-semibold text-neutral-800 block">Click to view full workflow • 點擊放大查看完整生產質檢流程</span>
              <span className="text-[10px] text-neutral-500 block mt-1">High-Speed Digital Printing & Multi-layered Inline Quality Control System</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Step-by-Step Production Process
              </h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">1</span>
                  <div>
                    <strong>Raw Material Slitting (分切原料)</strong>: Precision high-speed mechanical slitting of FSC wood pulp paper and plant starch PLA films to specified rolls.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">2</span>
                  <div>
                    <strong>High-Speed Digital Printing (數碼印刷)</strong>: Multi-color printing on state-of-the-art HP Indigo presses using certified vegetable/soy-based compostable inks.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">3</span>
                  <div>
                    <strong>Advanced Die-Cutting (模切工藝)</strong>: Precision custom shape kiss-cutting utilizing automated high-definition rotary tooling.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">4</span>
                  <div>
                    <strong>Inline Quality Control (在線檢測)</strong>: Multi-layered computer vision and sensor array for real-time print defect and alignment calibration.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">5</span>
                  <div>
                    <strong>Automated Packaging & Palletizing (自動包裝)</strong>: Wrapping and packaging finished rolls into protective recyclable cartons to ensure moisture safety during global transit.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded text-xs mt-0.5">6</span>
                  <div>
                    <strong>Quality Assured Warehousing (入庫發貨)</strong>: Temperature and humidity-controlled storage before custom DHL/FedEx air delivery.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Premium Printing Technical Advantages
                </h4>
                <div className="space-y-4 text-sm text-neutral-600">
                  <p>
                    • <strong>Vibrant Soy Inks (環保大豆油墨)</strong>: Deep, rich color profiles matching standard Pantone values without releasing harmful volatile organic compounds (VOCs).
                  </p>
                  <p>
                    • <strong>Micro-Calibrated Die (高精度模切)</strong>: Automated alignment within <strong>±0.15mm</strong>, perfect for high-speed machine labeling application without peeling failures.
                  </p>
                  <p>
                    • <strong>100% Core Traceability (核心筒芯追溯)</strong>: Cardboard cores printed with brand credentials (such as <strong>pouch.eco</strong> and <strong>achievepack.com</strong>), providing reliable certification verification.
                  </p>
                </div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 text-xs text-primary-800 mt-4">
                <p className="font-semibold mb-1">Custom Mockups & Proofing Available:</p>
                <p>We provide complimentary pre-production layout proofing within 24 hours. Contact our specialist today for your packaging line.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Real-World Production & Samples • 真實樣品展示',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            Take a look at our actual production runs and premium eco-friendly label rolls manufactured in our dust-free facility. Custom printed for <strong>Achieve Pack</strong> and <strong>pouch.eco</strong> with certified soy-based compostable inks.
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            歡迎查看我們在無塵車間製造的真實堆肥標籤與貼紙捲料。採用植物大豆環保油墨印刷，具備出色的色彩與細節表現，專為 <strong>Achieve Pack</strong> 與 <strong>pouch.eco</strong> 高端品牌量身定制。
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {photoGallery.map((photo, i) => (
              <button 
                key={i}
                onClick={() => setGalleryEnlarged({ src: photo.src, index: diagramGallery.length + i })}
                className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group bg-white border border-neutral-100 p-2 text-left w-full"
              >
                <div className="rounded-lg overflow-hidden h-48 bg-neutral-50 flex items-center justify-center">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 rounded-lg" loading="lazy" />
                </div>
                <div className="bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-800 text-center mt-2 rounded-md truncate">{photo.titleCn}</div>
                <div className="px-3 pb-2 text-[10px] text-neutral-500 text-center truncate">{photo.title}</div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Product Specifications & Pricing Matrix',
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            We provide absolute pricing transparency with no hidden setup fees. Multi-design SKU batching discounts are available to help e-commerce brands scale.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse text-left bg-white rounded-lg overflow-hidden border border-neutral-200">
              <thead>
                <tr className="bg-primary-600 text-white font-semibold">
                  <th className="p-3">Face Stock Material</th>
                  <th className="p-3">Adhesive Type</th>
                  <th className="p-3">Water & Oil Resistance</th>
                  <th className="p-3">Turnaround (Digital)</th>
                  <th className="p-3">Ideal Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">FSC Certified Paper</td>
                  <td className="p-3">Emulsion Bio-Adhesive</td>
                  <td className="p-3">Medium (Waterproof varnish available)</td>
                  <td className="p-3 text-primary-700 font-semibold">3-5 Business Days</td>
                  <td className="p-3">DTC cardboard shipping boxes, dry organic bakery bags</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-3 font-semibold text-neutral-900">Compostable PLA Film (White)</td>
                  <td className="p-3">Emulsion Bio-Adhesive</td>
                  <td className="p-3">High (Outstanding water & grease barrier)</td>
                  <td className="p-3 text-primary-700 font-semibold">5-7 Business Days</td>
                  <td className="p-3">Organic essential oils, bath cosmetic glass jars, frozen pouches</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">Compostable PLA Film (Clear)</td>
                  <td className="p-3">Emulsion Bio-Adhesive</td>
                  <td className="p-3">High (Excellent optical clarity)</td>
                  <td className="p-3 text-primary-700 font-semibold">5-7 Business Days</td>
                  <td className="p-3">Premium retail juice bottles, visible organic gourmet goods</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-700">US$60</div>
              <p className="text-sm text-neutral-600 mt-1">Starting Price for 1,000 Pcs</p>
              <p className="text-xs text-neutral-500 mt-1">Free digital design preview included</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-700">100% Free</div>
              <p className="text-sm text-neutral-600 mt-1">30-Second B2B Instant Quote</p>
              <p className="text-xs text-neutral-500 mt-1">Free expert layout preparation</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-5 rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-700">Up to 15%</div>
              <p className="text-sm text-neutral-600 mt-1">Multi-SKU Design Discount</p>
              <p className="text-xs text-neutral-500 mt-1">Save by printing multiple variants</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      icon: <HelpCircleIcon />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden" open>
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">Are these labels certified safe for food contact?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              Yes. The biological pressure-sensitive emulsion adhesive used in our labels complies with the strict <strong>FDA 21 CFR 175.105</strong> regulation for indirect food contact. This makes our labels exceptionally safe for application on fresh food cartons, bakery wraps, and organic ingredient pouches without migrating toxic substances.
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">Can the labels withstand low temperatures (deep freezing)?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              Absolutely. Our compostable labels are engineered for cold chain reliability. Once applied at normal room temperatures (or cold labeling environments down to -5°C), the adhesive molecular bonding structure retains full cohesion and performance inside deep freezers and cold storage environments ranging from <strong>-20°C to +70°C</strong>.
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">How do compostable labels compare to standard PP/PET plastic stickers?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              Traditional plastic (BOPP, PET) stickers are petroleum-derived and break down into microplastics that take hundreds of years to fragment, permanently polluting land and water. Our compostable PLA and FSC wood-pulp labels are derived from sustainable plant resources. When disposed of in industrial or organic composting systems, they completely degrade in <strong>180 days</strong> leaving zero microplastics, zero residues, and a healthy composting output.
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">What is the Minimum Order Quantity (MOQ) and production turnaround?</span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700 text-sm leading-relaxed">
              To support sustainable startups (via <strong>pouch.eco</strong>) and large B2B commercial logistics (via <strong>achievepack.com</strong>), we have established a low custom MOQ of just <strong>1,000 pieces</strong>. Standard digital printing takes <strong>3-5 business days</strong> for FSC paper labels, and <strong>5-7 business days</strong> for custom PLA film shapes, with expedited air shipping globally.
            </div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Launch Your Sustainable Label Campaign',
      icon: <Tag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Empower Your Packaging Brand with True Sustainability</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
            Whether you require B2B commercial wholesale capacity or low MOQ e-commerce packaging, we provide free design proof setups and instant consultations. Transition your product labels today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-primary-50 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Book Free Packaging Consultation
            </button>
            <a
              href="https://wa.me/85269704411?text=Hi%2C%20I%27m%20interested%20in%20FSC%20certified%20compostable%20labels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
            >
              WhatsApp B2B Specialist
            </a>
            <a
              href="mailto:ryan@achievepack.com?subject=Custom Compostable PLA Labels Quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition"
            >
              <Mail className="h-5 w-5" />
              Request Free Custom Quote
            </a>
          </div>
          <div className="mt-6 text-xs text-primary-200/80">
            Proud B2B partners behind <strong>achievepack.com</strong> and <strong>pouch.eco</strong> • 21+ Years Factory-Direct Excellence
          </div>
        </div>
      )
    }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#0f3d1b"
        title="Custom Compostable Labels | FSC Certified PLA Stickers | Achieve Pack"
        description="FSC certified & compostable custom labels. FDA food-grade biodegradable bio-adhesive. Perfect for cosmetics, bottles, and boxes. Low MOQ 1000 pcs, ship globally."
        canonicalUrl="https://achievepack.com/products/custom-compostable-labels"
        heroTitle="Custom Compostable Labels"
        heroSubtitle="FSC® Certified • 100% Biodegradable PLA • FDA Food-Grade Adhesive"
        introSummary="Certified compostable custom adhesive stickers and labels engineered from FSC wood pulp paper and plant starch PLA film. Backed by high-performance emulsion bio-adhesive that degrades safely into compost in 180 days with zero microplastics."
        heroImage="/taobao/compostable-label/eco_friendly_stickers.svg"
        sections={sections}
        keywords={['custom compostable labels', 'PLA biodegradable stickers', 'FSC certified product labels', 'FDA food-grade compostable adhesive', 'zero microplastic packaging label', 'pouch.eco', 'achieve pack labels']}
        schemaType="Product"
      />

      {/* Gallery Lightbox */}
      {galleryEnlarged && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setGalleryEnlarged(null)}>
          <button
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10 p-2 bg-black/40 rounded-full"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev') }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateGallery('next') }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white z-10 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <img
            src={galleryEnlarged.src}
            alt={fullGallery[galleryEnlarged.index]?.title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center max-w-xl px-4">
            <p className="font-bold text-lg">{fullGallery[galleryEnlarged.index]?.title}</p>
            <p className="text-sm text-white/80 mt-1 leading-relaxed">{fullGallery[galleryEnlarged.index]?.desc}</p>
            <p className="text-xs text-white/50 mt-2 font-mono">{galleryEnlarged.index + 1} / {fullGallery.length}</p>
          </div>
        </div>
      )}
    </>
  )
}

// Simple placeholder icon
const HelpCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
)

export default CustomCompostableLabelsPage
