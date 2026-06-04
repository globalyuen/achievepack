import React, { useState } from 'react'
import { Zap, Shield, Eye, Settings, ArrowRight, CheckCircle, Calendar, Mail, FileCheck, Building2, Globe, Users, Award, HelpCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'

const stickerGallery = [
  { src: '/imgs/function/smart_sticker_valve_detail.png', title: 'Smart Degassing Sticker Valve Detail', desc: 'Flat, square one-way valve sticker applied over a 1.5mm micro-vent hole' },
  { src: '/imgs/function/kimchi_valve_squeeze_test.png', title: 'Fermenting Kimchi Squeeze Test', desc: 'B2B pressure test showing successful CO2 degassing with zero liquid leak' },
  { src: '/imgs/function/pouch_production_line_valves.png', title: 'High-Volume Production line', desc: 'Sticker valves being applied inline on our high-speed automated packaging lines' },
  { src: '/imgs/function/square_sticker_valves.png', title: 'Square Sticker Valves on Liner', desc: 'Roll-fed adhesive square sticker degassing valves for food-grade packaging' },
  { src: '/imgs/function/jongga_kimchi_bag_seal.png', title: 'Internal Header Sachet Seal', desc: 'Header compartment above the liquid fill line holding a CO2 absorber sachet' },
  { src: '/imgs/function/stayfresh_co2_absorber.png', title: 'StayFresh CO2 Absorber Sachet', desc: 'Bulk food-grade carbon dioxide gas absorber packet for active packaging' }
]

const SmartDegassingStickerPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const [galleryEnlarged, setGalleryEnlarged] = useState<{ src: string; index: number } | null>(null)

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!galleryEnlarged) return
    let newIndex = direction === 'prev' ? galleryEnlarged.index - 1 : galleryEnlarged.index + 1
    if (newIndex < 0) newIndex = stickerGallery.length - 1
    if (newIndex >= stickerGallery.length) newIndex = 0
    setGalleryEnlarged({ src: stickerGallery[newIndex].src, index: newIndex })
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
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-neutral-200"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center font-medium">Click to enlarge / 点击放大</div>
          </button>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm italic leading-relaxed">{contentCn}</p>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 md:order-1">
            <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider">{titleCn}</p>
            <p className="text-neutral-700 leading-relaxed">{content}</p>
            <p className="text-neutral-600 text-sm italic leading-relaxed">{contentCn}</p>
          </div>
          <button 
            onClick={() => setGalleryEnlarged({ src: image, index })}
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-neutral-200 md:order-2"
          >
            <img src={image} alt={imageAlt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="bg-neutral-50 px-3 py-2 text-xs text-neutral-500 text-center font-medium">Click to enlarge / 点击放大</div>
          </button>
        </>
      )}
    </div>
  )

  const sections = [
    {
      id: 'overview',
      title: 'Packaging Solutions for Fermenting & Gas-Releasing Products',
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-emerald-950 to-green-900 text-white p-6 rounded-lg border border-emerald-800">
            <p className="text-lg font-medium mb-3">
              <strong>Prevent bloating, swelling, and package bursting</strong> — Fermenting foods like fresh kimchi continually release carbon dioxide (CO₂) gas during storage, transport, and retail display. Without proper gas management, flexible pouches will inflate like balloons, ruining shelf aesthetics and risking seal failures.
            </p>
            <p className="text-emerald-300 text-sm font-medium">
              解决发酵食品胀袋、破裂问题 — 发酵类产品（如新鲜泡菜）在储运和销售过程中会持续释放二氧化碳。若无科学的排气设计，包装袋会迅速膨胀变形，严重影响陈列效果并导致破袋漏液风险。
            </p>
          </div>

          <AlternatingSection
            image="/imgs/function/smart_sticker_valve_detail.png"
            imageAlt="Smart Degassing Sticker Detail"
            title="The Smart Degassing Sticker Solution"
            titleCn="贴纸式单向排气阀解决方案"
            content="Our Smart Degassing Sticker Valve (AO002) is a specialized flat, square one-way valve designed specifically for liquid-heavy and low-profile food packaging. It allows excess CO₂ gas pressure to escape from the sealed bag while ensuring a complete barrier against outside oxygen and humidity. More importantly, it is fully leak-proof under normal handling and squeeze tests, preventing internal liquid or sauce from escaping."
            contentCn="智能贴纸排气阀（AO002）是一款专为富含液体、低扁平轮廓食品包装设计的平面方形单向阀。它能安全释放袋内多余的二氧化碳气体，同时提供高强度的阻隔性能，杜绝外部氧气和水汽进入。更重要的是，在常规挤压测试下它能完美锁液，防止内部酱汁和汤汁渗漏。"
            imageLeft={true}
            index={0}
          />
        </div>
      )
    },
    {
      id: 'solutions-comparison',
      title: 'Comparing the 3 Primary Gas Control Methods',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <p className="text-neutral-700 leading-relaxed">
            Brand owners have three primary choices for packing gas-releasing fermented products like kimchi. The optimal solution depends on budget, liquid levels, and aesthetic requirements.
          </p>

          <AlternatingSection
            image="/imgs/function/stayfresh_co2_absorber.png"
            imageAlt="StayFresh CO2 Absorber Sachet"
            title="1. Active CO2 Absorber Packets (Cheapest)"
            titleCn="方案一：二氧化碳气体吸收包（成本最低）"
            content="An internal food-grade carbon dioxide absorber sachet is placed loose inside the bag alongside the kimchi. It chemically binds the released CO₂ gas, maintaining stable package pressure. It is highly cost-effective and easy to drop in during automated packaging, but it remains loose inside the bag, which may affect customer experience as it is not meant to be eaten."
            contentCn="在袋内直接投入食品级二氧化碳吸收剂药包。它能通过化学反应吸收发酵释放的二氧化碳，从而维持包装袋内压力稳定。这是成本最低的方案，极易在包装线上自动投放。然而药包在袋内呈游离状态，虽符合食品安全但不宜食用，需做好消费提示。"
            imageLeft={false}
            index={5}
          />

          <hr className="border-neutral-200" />

          <AlternatingSection
            image="/imgs/function/jongga_kimchi_bag_seal.png"
            imageAlt="Jongga Kimchi Bag Internal Seal"
            title="2. Sealed Pouch Header Sachets (Jongga Style)"
            titleCn="方案二：封口顶部夹层吸气剂包（宗家府式设计）"
            content="A premium active packaging structure (made famous by brands like Jongga). The absorber sachet is not loose in the product; instead, a special seal mark is made in the top middle of the stand-up pouch, suspending the sachet inside a dedicated upper header pocket. This positions the sachet above the kimchi and liquid level, preventing direct immersion in the liquid and improving branding safety."
            contentCn="高端发酵类食品包装（如韩国宗家府品牌）常用的气相夹层技术。吸气剂包并非直接混在泡菜中，而是在立式袋的顶部中上方进行封口定位（您可以看到顶部中间的压合封口印记），将吸收包悬挂固定在液面以上的顶部空隙区。这防止了药包与液体泡菜直接接触，提升了消费者开袋体验与产品美感。"
            imageLeft={true}
            index={4}
          />

          <hr className="border-neutral-200" />

          <AlternatingSection
            image="/imgs/function/square_sticker_valves.png"
            imageAlt="Square Sticker Valves"
            title="3. One-way Degassing Sticker Valves"
            titleCn="方案三：单向贴纸排气阀（免吸气包方案）"
            content="An external flat sticker valve applied over a micro-vent hole. Unlike traditional round coffee valves which are thicker, this square sticker design is extremely thin (only a fraction of a millimeter), preserving flat pouch aesthetics. The internal micro-filter membrane allows gas molecules to escape under slight pressure but completely blocks liquid molecules, making it ideal for liquids, sauces, and moisture-rich products."
            contentCn="在袋身微小通气孔上方覆贴平面贴纸排气阀。不同于咖啡袋上较厚较硬的传统圆形排气阀，方形贴纸阀极薄，能完美保持包装袋的平整和美观。其内置的微孔过滤膜在微弱气压下允许气体分子通过，却能彻底拦截液体分子，因而非常适合带有酱汁、液体或高水分的发酵食品。"
            imageLeft={false}
            index={3}
          />
        </div>
      )
    },
    {
      id: 'leakproof-science',
      title: 'The Science Behind Leak-Proof Valving',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            One of the most frequent questions from liquid product packagers is: <em>If you squeeze the bag, will the liquid leak out from the sticker valve?</em> 
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-2">Engineered Hydrophobic Membrane</h4>
            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
              Our square sticker valve (AO002) is engineered with a multi-layered hydrophobic and oleophobic membrane structure. Under normal storage, shipping, or handling (including squeezing during transport), the valve acts as a absolute barrier against liquid leakage:
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>Strictly Gas-Only Permeable:</strong> The micro-pores in the active membrane are sized specifically to allow tiny carbon dioxide (CO₂) gas molecules to pass through while blocking large liquid water and oil molecules.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>One-Way Sealing Pressure:</strong> The valve opens to vent when internal pressure exceeds a very low threshold (~0.05-0.1 PSI). Once pressure is equalized, the membrane seals shut instantly, preventing outside air (oxygen and humidity) from entering and spoiling the kimchi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>No Coffee Substitute:</strong> Note that kimchi gas absorbers/valves are specifically tuned to handle high moisture and CO₂. They are not recommended for dry roasted coffee bags (which require oxygen absorbers or dedicated dry degassing valves to preserve essential oils and aroma).</span>
              </li>
            </ul>
          </div>

          <AlternatingSection
            image="/imgs/function/kimchi_valve_squeeze_test.png"
            imageAlt="Kimchi Valve Squeeze Test Infographic"
            title="Rigorous Pressure and Leak Testing"
            titleCn="严苛的加压与防漏液测试"
            content="Every batch of our Smart Degassing Stickers undergoes strict quality assurance. During the squeeze test, we apply localized force to the pouch: gas is safely expelled, but the liquid is completely retained inside. If liquid leaks during squeezing, it usually indicates either a defective sticker, a needle hole that is too large, or poor adhesion from dust or wrinkles during application."
            contentCn="我们的智能单向排气阀贴纸均通过严格的质检流程。在加压测试中，我们对包装袋进行定向挤压：气体安全逸出，而液体则被完美阻隔在内。如果挤压时有液体渗漏，通常代表贴纸本身受损、打孔孔径过大，或贴合表面存在粉尘/褶皱导致密封不良。"
            imageLeft={true}
            index={1}
          />
        </div>
      )
    },
    {
      id: 'application-steps',
      title: 'How to Properly Apply Sticker Valves to Pouches',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            For maximum degassing performance and zero leaks, the sticker valves must be applied correctly, whether manually for test batches or inline during high-speed production.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white border border-neutral-200 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">1</span>
                  Equipment and Prep
                </h4>
                <ul className="text-sm space-y-2 text-neutral-600 mb-6">
                  <li>• <strong>Sticker Valve (AO002):</strong> Clean and stored away from moisture/dust.</li>
                  <li>• <strong>Needle or Punch:</strong> A clean pin to punch a <strong>1–2 mm hole</strong>.</li>
                  <li>• <strong>Clean Surface:</strong> Flat desk with a soft silicone pad backing.</li>
                </ul>
              </div>
              <p className="text-xs text-neutral-500 italic">Ensure your hands and pouch surfaces are free of product oils or moisture before application.</p>
            </div>

            <div className="bg-white border border-neutral-200 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">2</span>
                  Step-by-Step Manual Application
                </h4>
                <ol className="text-sm space-y-2 text-neutral-600">
                  <li>1. <strong>Fill & Seal Pouch:</strong> Place products inside and seal the main opening fully first.</li>
                  <li>2. <strong>Punch Micro-Hole:</strong> Punch a clean 1-2 mm hole in the upper third of the bag, above the liquid level. Use a backing pad to avoid tearing.</li>
                  <li>3. <strong>Peel & Align:</strong> Peel the valve carefully from the liner. Align the center membrane precisely over the punched hole.</li>
                  <li>4. <strong>Firm Press:</strong> Press flat and rub the edges firmly to ensure 100% airtight contact.</li>
                </ol>
              </div>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/function/pouch_production_line_valves.png"
            imageAlt="Automated Packaging Line Application"
            title="Automated Inline Application"
            titleCn="自动化在线贴装技术"
            content="For medium to large scale brands, manual application is replaced by our automated inline labeling systems. A mechanical arm punches the micro-vents and applies the square sticker valve rolls continuously at speeds up to 120 bags per minute, securing perfect alignment, consistent edge seal pressure, and maximum cost efficiency."
            contentCn="对于中大型品牌客户，手工贴装将被我们的自动化在线贴标机取代。自动贴阀机构可在包装线上一边在线打孔一边将卷装方形贴标阀连续贴合，贴装速度高达120袋/分钟，以确保极高的对齐精度、均匀的封口压力以及出色的生产效率。"
            imageLeft={false}
            index={2}
          />
        </div>
      )
    },
    {
      id: 'specs',
      title: 'Product Specifications & Ordering',
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            Achieve Pack provides both individual rolls of one-way degassing sticker valves and custom-printed stand-up pouches with pre-applied valves or internal header pockets.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">Sticker Form Factor</h4>
              <p className="text-xs text-neutral-500 mb-2">AO002 Square Sticker</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>• Dimensions: 20mm x 20mm</li>
                <li>• Thickness: ~0.25mm</li>
                <li>• Format: Roll or Sheet fed</li>
                <li>• Material: Food-Grade PE/PET</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">Sachet Sizing</h4>
              <p className="text-xs text-neutral-500 mb-2">CO2 Absorber Packets</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>• Size: 1.5g to 5.0g per packet</li>
                <li>• Output absorption: 150ml to 500ml</li>
                <li>• Shell: Food-safe Tyvek or PET</li>
                <li>• Direct or suspended placement</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">Custom Pouch Supply</h4>
              <p className="text-xs text-neutral-500 mb-2">Pre-Applied Services</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>• Stand-up Pouch pre-valving</li>
                <li>• Three-Side Seal pre-valving</li>
                <li>• Custom header seal tools</li>
                <li>• Low-MOQ digital print compatible</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-signals',
      title: 'Why Choose Achieve Pack?',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">BRC-Certified Cleanroom Manufacturing</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-2">
              Since 2011, Achieve Pack has partnered with global food brands to deliver compliant, high-performance flexible packaging. Our gas absorbers and sticker valves are manufactured in dust-free, BRC-certified cleanrooms and tested to meet strict FDA food contact standards.
            </p>
            <p className="text-neutral-500 text-xs italic">
              自 2011 年起，Achieve Pack 致力于为全球食品品牌提供符合合规标准的高品质软包装。我们的气体吸收包和排气阀贴纸均在无尘 BRC 认证车间制造，符合严苛的 FDA 食品接触标准。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">FDA Food-Safe</h4>
              <p className="text-xxs text-neutral-500">Fully compliant materials</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">BRC Certified</h4>
              <p className="text-xxs text-neutral-500">Global safety auditing</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">Global Supply</h4>
              <p className="text-xxs text-neutral-500">Warehousing in Europe & US</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">1,000+ Brands</h4>
              <p className="text-xxs text-neutral-500">Trusted flexible packaging</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Request Samples or a Quote?',
      icon: <Mail className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Let's Design the Perfect Kimchi Pouch</h3>
          <p className="text-center text-emerald-100 mb-8 max-w-xl mx-auto text-sm">
            Contact our packaging engineers to test our Smart Degassing Sticker (AO002) or order custom-printed samples.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
              <h4 className="font-semibold mb-2 text-white">Book Technical Call</h4>
              <p className="text-xs text-emerald-200 mb-4">30-min free consultation with our valve experts</p>
              <button onClick={openCalendly} className="w-full bg-white text-emerald-700 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition cursor-pointer">
                Schedule Meeting
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
              <h4 className="font-semibold mb-2 text-white">Email Specifications</h4>
              <p className="text-xs text-emerald-200 mb-4">Get custom quotation within 24 hours</p>
              <a href="mailto:ryan@achievepack.com?subject=Smart Degassing Sticker Pouch Quote" className="block w-full bg-white text-emerald-700 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition text-center">
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
      question: "If I squeeze the bag, will liquid leak out of the degassing sticker valve?",
      answer: "No, a properly applied, undamaged one-way degassing sticker valve is designed to only allow gas molecules (like CO2) to pass through its hydrophobic membrane. Squeezing the bag expelled built-up gas, but the membrane blocks liquid molecules and sauces from leaking out."
    },
    {
      question: "What is the difference between a coffee degassing valve and a kimchi sticker valve?",
      answer: "While both function as one-way degassing valves, coffee valves are usually thicker, round plastic valves applied under high heat and specialized oil. Kimchi sticker valves are extremely thin, square stickers applied using adhesive over a micro-vent. The sticker valve is more low-profile and is engineered to block liquid contact, whereas coffee valves are designed for dry beans."
    },
    {
      question: "How do I choose between CO2 absorber packets and sticker valves?",
      answer: "CO2 absorber packets are the most cost-effective solution but remain loose inside the pouch. Suspended header pockets (Jongga style) hold the packet above the liquid line for a cleaner look. Sticker valves require no chemical packets inside, which improves buyer perception, but they require precise micro-hole punching and sticker application."
    },
    {
      question: "Can I use kimchi CO2 gas absorbers for coffee packaging?",
      answer: "No, coffee beans are extremely sensitive to oxygen control. Carbon dioxide absorbers designed for kimchi are not suitable for coffee, because coffee roasters rely on round, dry one-way valves that allow coffee's naturally released gas to escape while maintaining aroma oils. Oxygen absorbers can also cause harsh, metallic flavors in coffee."
    },
    {
      question: "What is the correct needle size for punching the vent hole?",
      answer: "We recommend a clean 1.0mm to 2.0mm hole punch. If the hole is too small, gas may not escape fast enough; if it is too large, the adhesive edges of the sticker valve may not fully cover the hole, leading to oxygen leakage."
    }
  ]

  const relatedLinks = [
    { title: "Spout Pouches for Liquids", url: "/function/spout-pouches-juice", description: "Standard spouted packaging for juices and purees" },
    { title: "Microwave Steam Bags", url: "/function/microwave-steam-bags", description: "Self-venting pouches designed for high-heat cooking" },
    { title: "Pre-Zippered Rollstock Film", url: "/function/pre-zippered-rollstock", description: "Automated roll stock with integrated zipper features" },
    { title: "Compostable Packaging Materials", url: "/materials/compostable", description: "Certified home and industrial compostable structures" }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#022c22" // B2B Emerald Dark Green
        title="Smart Degassing Sticker for Liquid Packaging | Achieve Pack"
        description="Pack gas-releasing fermented liquid foods like kimchi safely. Compare CO2 gas absorbers, Jongga-style header seals, and square degassing sticker valves. Leak-proof and certified."
        keywords={['smart degassing sticker', 'one-way degassing valve', 'kimchi packaging', 'liquid packaging degassing', 'CO2 absorber packet', 'fermented food packaging', 'leak proof degassing valve', 'pouch venting valve', 'achieve pack packaging']}
        canonicalUrl="https://achievepack.com/function/smart-degassing-sticker"
        heroTitle="Smart Degassing Sticker for Liquid Packaging"
        heroSubtitle="High-performance venting and pressure control for fermenting foods and gas-releasing liquid products."
        heroImage="/imgs/function/smart_sticker_valve_detail.png"
        heroImageAlt="Achieve Pack Smart Degassing Sticker Valve Mockup"
        introSummary="Prevent bloated pouches and bursting packaging. Learn how B2B brand owners use CO2 absorber packets, Jongga-style internal header pockets, and flat one-way sticker valves to ship fermented foods safely."
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle="Order Smart Degassing Valves or Pouches"
        ctaDescription="Secure leak-proof gas control for your liquid-heavy fermented food line. Samples available."
        ctaButtonText="Request B2B Quote"
      />

      {/* Gallery Lightbox Modal */}
      {galleryEnlarged && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setGalleryEnlarged(null)}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); navigateGallery('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
          >
            &larr;
          </button>
          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img 
              src={galleryEnlarged.src} 
              alt={stickerGallery[galleryEnlarged.index].title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-neutral-800"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="text-lg font-bold">{stickerGallery[galleryEnlarged.index].title}</h4>
              <p className="text-sm text-neutral-400 mt-1">{stickerGallery[galleryEnlarged.index].desc}</p>
            </div>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); navigateGallery('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
          >
            &rarr;
          </button>
          <button 
            onClick={() => setGalleryEnlarged(null)}
            className="absolute top-4 right-4 text-white text-2xl font-bold bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </>
  )
}

export default SmartDegassingStickerPage
