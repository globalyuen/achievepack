import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Zap, Shield, Eye, Settings, ArrowRight, CheckCircle, Calendar, Mail, FileCheck, Building2, Globe, Users, Award, HelpCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'



const SmartDegassingStickerPage: React.FC = () => {
  const { t } = useTranslation()

  const stickerGallery = [
  { src: '/imgs/function/smart_sticker_valve_detail.png', title: t('seoPages.pages.smartDegassingSticker.title_smartDegassingStickerValveDetail'), desc: t('seoPages.pages.smartDegassingSticker.desc_flatSquareOnewayValveSticker') },
  { src: '/imgs/function/kimchi_valve_squeeze_test.png', title: t('seoPages.pages.smartDegassingSticker.title_fermentingKimchiSqueezeTest'), desc: t('seoPages.pages.smartDegassingSticker.desc_b2bPressureTestShowingSuccessful') },
  { src: '/imgs/function/pouch_production_line_valves.png', title: t('seoPages.pages.smartDegassingSticker.title_highvolumeProductionLine'), desc: t('seoPages.pages.smartDegassingSticker.desc_stickerValvesBeingAppliedInline') },
  { src: '/imgs/function/square_sticker_valves.png', title: t('seoPages.pages.smartDegassingSticker.title_squareStickerValvesOnLiner'), desc: t('seoPages.pages.smartDegassingSticker.desc_rollfedAdhesiveSquareStickerDegassing') },
  { src: '/imgs/function/jongga_kimchi_bag_seal.png', title: t('seoPages.pages.smartDegassingSticker.title_internalHeaderSachetSeal'), desc: t('seoPages.pages.smartDegassingSticker.desc_headerCompartmentAboveTheLiquid') },
  { src: '/imgs/function/stayfresh_co2_absorber.png', title: t('seoPages.pages.smartDegassingSticker.title_stayfreshCo2AbsorberSachet'), desc: t('seoPages.pages.smartDegassingSticker.desc_bulkFoodgradeCarbonDioxideGas') }
]


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
      title: t('seoPages.pages.smartDegassingSticker.title_packagingSolutionsForFermentingGasreleas'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-emerald-950 to-green-900 text-white p-6 rounded-lg border border-emerald-800">
            <p className="text-lg font-medium mb-3">
              <strong>{t('seoPages.pages.smartDegassingSticker.preventBloatingSwellingAndPackage')}</strong> {t('seoPages.pages.smartDegassingSticker.fermentingFoodsLikeFreshKimchi')}
            </p>
            <p className="text-emerald-300 text-sm font-medium">
              {t('seoPages.pages.smartDegassingSticker.text')}
            </p>
          </div>

          <AlternatingSection
            image="/imgs/function/smart_sticker_valve_detail.png"
            imageAlt="Smart Degassing Sticker Detail"
            title={t('seoPages.pages.smartDegassingSticker.title_theSmartDegassingStickerSolution')}
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
      title: t('seoPages.pages.smartDegassingSticker.title_comparingThe3PrimaryGas'),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-8">
          <p className="text-neutral-700 leading-relaxed">
            {t('seoPages.pages.smartDegassingSticker.brandOwnersHaveThreePrimary')}
          </p>

          <AlternatingSection
            image="/imgs/function/stayfresh_co2_absorber.png"
            imageAlt="StayFresh CO2 Absorber Sachet"
            title={t('seoPages.pages.smartDegassingSticker.title_1ActiveCo2AbsorberPackets')}
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
            title={t('seoPages.pages.smartDegassingSticker.title_2SealedPouchHeaderSachets')}
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
            title={t('seoPages.pages.smartDegassingSticker.title_3OnewayDegassingStickerValves')}
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
      title: t('seoPages.pages.smartDegassingSticker.title_theScienceBehindLeakproofValving'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            {t('seoPages.pages.smartDegassingSticker.oneOfTheMostFrequent')} <em>{t('seoPages.pages.smartDegassingSticker.ifYouSqueezeTheBag')}</em> 
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-2">{t('seoPages.pages.smartDegassingSticker.engineeredHydrophobicMembrane')}</h4>
            <p className="text-neutral-700 text-sm leading-relaxed mb-3">
              {t('seoPages.pages.smartDegassingSticker.ourSquareStickerValveAo002')}
            </p>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>{t('seoPages.pages.smartDegassingSticker.strictlyGasonlyPermeable')}</strong> {t('seoPages.pages.smartDegassingSticker.theMicroporesInTheActive')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>{t('seoPages.pages.smartDegassingSticker.onewaySealingPressure')}</strong> {t('seoPages.pages.smartDegassingSticker.theValveOpensToVent')}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span><strong>{t('seoPages.pages.smartDegassingSticker.noCoffeeSubstitute')}</strong> {t('seoPages.pages.smartDegassingSticker.noteThatKimchiGasAbsorbersvalves')}</span>
              </li>
            </ul>
          </div>

          <AlternatingSection
            image="/imgs/function/kimchi_valve_squeeze_test.png"
            imageAlt="Kimchi Valve Squeeze Test Infographic"
            title={t('seoPages.pages.smartDegassingSticker.title_rigorousPressureAndLeakTesting')}
            titleCn="严苛的加压与防漏液测试"
            content="Every batch of our Smart Degassing Stickers undergoes strict quality assurance. During the squeeze test, we apply localized force to the pouch: gas is safely expelled, but the liquid is completely retained inside. If liquid leaks during squeezing, it usually indicates either a defective sticker, a needle hole that is too large, or poor adhesion from dust or wrinkles during application."
            contentCn="我们的智能单向排气阀贴纸均通过严格的质检流程。在加压测试中，我们对包装袋进行定向挤压：气体安全逸出，而液体则被完美阻隔在内。如果挤压时有液体渗漏，通常代表贴纸本身受损、打孔孔径过大，或贴合表面存在粉尘/褶皱导致密封不良。"
            imageLeft={true}
            index={1}
          />

          <div className="mt-8 border-t border-neutral-100 pt-8">
            <h4 className="text-xl font-bold text-neutral-900 mb-2">Functional Performance Testing Videos</h4>
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider mb-4">阀门防漏液测试视频</p>
            <p className="text-neutral-700 text-sm mb-6 leading-relaxed">
              We subject our packaging solutions to extreme pressure and liquid contact scenarios. Watch the comparative testing below to see the physical performance of our smart degassing stickers vs. standard coffee valves under squeeze pressure:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video 1: Leak-proof */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-3 shadow-inner">
                    <video
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781061880450_mn5s9twgw7.mp4"
                      controls
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    PASSED / 测验合格
                  </span>
                  <h5 className="font-bold text-base text-neutral-950 mb-1">
                    Leak-Proof Valve Test
                  </h5>
                  <p className="text-xs text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                    智能排气阀挤压测试
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    Watch our specialized flat square valve (AO002) in action under a severe squeeze test. Even when localized pressure is applied to the liquid-rich pouch, the hydrophobic membrane holds firm, preventing a single drop of liquid or sauce from escaping while allowing gas to vent.
                  </p>
                </div>
                <div className="border-t border-neutral-200/60 pt-2 text-[11px] text-neutral-500 italic leading-relaxed">
                  对包装袋进行大力挤压时，内部空气与气体得以自由排出，而液体被100%封锁在内，即使在强压力下也无任何渗漏。
                </div>
              </div>

              {/* Video 2: Failed Coffee Valve */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-3 shadow-inner">
                    <video
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781062000337_s34sw1mer8a.mp4"
                      controls
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    FAILED / 无法防漏
                  </span>
                  <h5 className="font-bold text-base text-neutral-950 mb-1">
                    Standard Coffee Valve
                  </h5>
                  <p className="text-xs text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                    普通咖啡阀挤压测试
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    Standard round coffee valves are designed only for dry gases. Under liquid squeeze pressure, the internal seal fails, leading to immediate liquid leak. This highlights why standard coffee valves are not suitable for liquid-rich foods.
                  </p>
                </div>
                <div className="border-t border-neutral-200/60 pt-2 text-[11px] text-neutral-500 italic leading-relaxed">
                  该阀门仅针对干燥气体设计，在酱汁液体挤压下，其内部橡胶密封圈失效，导致液体立刻渗漏。这说明了普通咖啡阀不适用于富含液体的食品。
                </div>
              </div>

              {/* Video 3: Active Degassing */}
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative mb-3 shadow-inner">
                    <video
                      src="https://ofobzjpexljkrqsgdgua.supabase.co/storage/v1/object/public/artworks/batches/66a055fe-0e3f-4e20-b43a-3d57a695af31/1781187167584_l98hchl2bfd.mp4"
                      controls
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                    ACTIVE DE-GASSING / 正在排气
                  </span>
                  <h5 className="font-bold text-base text-neutral-950 mb-1">
                    Active Venting Demo
                  </h5>
                  <p className="text-xs text-neutral-500 font-medium mb-1 uppercase tracking-wider">
                    单向排气过程演示
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                    Close-up showing carbon dioxide gas bubble venting under pressure while completely blocking liquid backflow. The valve maintains physical seal integrity throughout the off-gassing process.
                  </p>
                </div>
                <div className="border-t border-neutral-200/60 pt-2 text-[11px] text-neutral-500 italic leading-relaxed">
                  近距离观察二氧化碳气体在微小气压下排出，同时彻底阻断外部空气和液体倒流。在整个排气过程中，阀门始终保持其物理密封。
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'application-steps',
      title: t('seoPages.pages.smartDegassingSticker.title_howToProperlyApplySticker'),
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            {t('seoPages.pages.smartDegassingSticker.forMaximumDegassingPerformanceAnd')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white border border-neutral-200 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">1</span>
                  {t('seoPages.pages.smartDegassingSticker.equipmentAndPrep')}
                </h4>
                <ul className="text-sm space-y-2 text-neutral-600 mb-6">
                  <li>• <strong>{t('seoPages.pages.smartDegassingSticker.stickerValveAo002')}</strong> {t('seoPages.pages.smartDegassingSticker.cleanAndStoredAwayFrom')}</li>
                  <li>• <strong>{t('seoPages.pages.smartDegassingSticker.needleOrPunch')}</strong> {t('seoPages.pages.smartDegassingSticker.aCleanPinToPunch')} <strong>{t('seoPages.pages.smartDegassingSticker.12MmHole')}</strong>.</li>
                  <li>• <strong>{t('seoPages.pages.smartDegassingSticker.cleanSurface')}</strong> {t('seoPages.pages.smartDegassingSticker.flatDeskWithASoft')}</li>
                </ul>
              </div>
              <p className="text-xs text-neutral-500 italic">{t('seoPages.pages.smartDegassingSticker.ensureYourHandsAndPouch')}</p>
            </div>

            <div className="bg-white border border-neutral-200 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <span className="bg-primary-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs">2</span>
                  {t('seoPages.pages.smartDegassingSticker.stepbystepManualApplication')}
                </h4>
                <ol className="text-sm space-y-2 text-neutral-600">
                  <li>1. <strong>{t('seoPages.pages.smartDegassingSticker.fillSealPouch')}</strong> {t('seoPages.pages.smartDegassingSticker.placeProductsInsideAndSeal')}</li>
                  <li>2. <strong>{t('seoPages.pages.smartDegassingSticker.punchMicrohole')}</strong> {t('seoPages.pages.smartDegassingSticker.punchAClean12Mm')}</li>
                  <li>3. <strong>{t('seoPages.pages.smartDegassingSticker.peelAlign')}</strong> {t('seoPages.pages.smartDegassingSticker.peelTheValveCarefullyFrom')}</li>
                  <li>4. <strong>{t('seoPages.pages.smartDegassingSticker.firmPress')}</strong> {t('seoPages.pages.smartDegassingSticker.pressFlatAndRubThe')}</li>
                </ol>
              </div>
            </div>
          </div>

          <AlternatingSection
            image="/imgs/function/pouch_production_line_valves.png"
            imageAlt="Automated Packaging Line Application"
            title={t('seoPages.pages.smartDegassingSticker.title_automatedInlineApplication')}
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
      title: t('seoPages.pages.smartDegassingSticker.title_productSpecificationsOrdering'),
      icon: <Eye className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 leading-relaxed">
            {t('seoPages.pages.smartDegassingSticker.achievePackProvidesBothIndividual')}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">{t('seoPages.pages.smartDegassingSticker.stickerFormFactor')}</h4>
              <p className="text-xs text-neutral-500 mb-2">{t('seoPages.pages.smartDegassingSticker.ao002SquareSticker')}</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>{t('seoPages.pages.smartDegassingSticker.dimensions20mmX20mm')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.thickness025mm')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.formatRollOrSheetFed')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.materialFoodgradePepet')}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">{t('seoPages.pages.smartDegassingSticker.sachetSizing')}</h4>
              <p className="text-xs text-neutral-500 mb-2">{t('seoPages.pages.smartDegassingSticker.co2AbsorberPackets')}</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>{t('seoPages.pages.smartDegassingSticker.size15gTo50gPer')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.outputAbsorption150mlTo500ml')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.shellFoodsafeTyvekOrPet')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.directOrSuspendedPlacement')}</li>
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-1">{t('seoPages.pages.smartDegassingSticker.customPouchSupply')}</h4>
              <p className="text-xs text-neutral-500 mb-2">{t('seoPages.pages.smartDegassingSticker.preappliedServices')}</p>
              <ul className="text-xs text-neutral-600 space-y-1">
                <li>{t('seoPages.pages.smartDegassingSticker.standupPouchPrevalving')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.threesideSealPrevalving')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.customHeaderSealTools')}</li>
                <li>{t('seoPages.pages.smartDegassingSticker.lowmoqDigitalPrintCompatible')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trust-signals',
      title: t('seoPages.pages.smartDegassingSticker.title_whyChooseAchievePack'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">{t('seoPages.pages.smartDegassingSticker.brccertifiedCleanroomManufacturing')}</h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-2">
              {t('seoPages.pages.smartDegassingSticker.since2011AchievePackHas')}
            </p>
            <p className="text-neutral-500 text-xs italic">
              {t('seoPages.pages.smartDegassingSticker.2011AchievePackBrcFda')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <FileCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">{t('seoPages.pages.smartDegassingSticker.fdaFoodsafe')}</h4>
              <p className="text-xxs text-neutral-500">{t('seoPages.pages.smartDegassingSticker.fullyCompliantMaterials')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">{t('seoPages.pages.smartDegassingSticker.brcCertified')}</h4>
              <p className="text-xxs text-neutral-500">{t('seoPages.pages.smartDegassingSticker.globalSafetyAuditing')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">{t('seoPages.pages.smartDegassingSticker.globalSupply')}</h4>
              <p className="text-xxs text-neutral-500">{t('seoPages.pages.smartDegassingSticker.warehousingInEuropeUs')}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm text-neutral-800">{t('seoPages.pages.smartDegassingSticker.1000Brands')}</h4>
              <p className="text-xxs text-neutral-500">{t('seoPages.pages.smartDegassingSticker.trustedFlexiblePackaging')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.smartDegassingSticker.title_readyToRequestSamplesOr'),
      icon: <Mail className="h-5 w-5 text-white" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">{t('seoPages.pages.smartDegassingSticker.letsDesignThePerfectKimchi')}</h3>
          <p className="text-center text-emerald-100 mb-8 max-w-xl mx-auto text-sm">
            {t('seoPages.pages.smartDegassingSticker.contactOurPackagingEngineersTo')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
              <h4 className="font-semibold mb-2 text-white">{t('seoPages.pages.smartDegassingSticker.bookTechnicalCall')}</h4>
              <p className="text-xs text-emerald-200 mb-4">{t('seoPages.pages.smartDegassingSticker.30minFreeConsultationWithOur')}</p>
              <button onClick={openCalendly} className="w-full bg-white text-emerald-700 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition cursor-pointer">
                {t('seoPages.pages.smartDegassingSticker.scheduleMeeting')}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-emerald-300" />
              <h4 className="font-semibold mb-2 text-white">{t('seoPages.pages.smartDegassingSticker.emailSpecifications')}</h4>
              <p className="text-xs text-emerald-200 mb-4">{t('seoPages.pages.smartDegassingSticker.getCustomQuotationWithin24')}</p>
              <a href="mailto:ryan@achievepack.com?subject=Smart Degassing Sticker Pouch Quote" className="block w-full bg-white text-emerald-700 px-4 py-2 rounded-lg font-bold hover:bg-emerald-50 transition text-center">
                {t('seoPages.pages.smartDegassingSticker.sendEmail')}
              </a>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t('seoPages.pages.smartDegassingSticker.question_ifISqueezeTheBag'),
      answer: t('seoPages.pages.smartDegassingSticker.answer_noAProperlyAppliedUndamaged')
    },
    {
      question: t('seoPages.pages.smartDegassingSticker.question_whatIsTheDifferenceBetween'),
      answer: t('seoPages.pages.smartDegassingSticker.answer_whileBothFunctionAsOneway')
    },
    {
      question: t('seoPages.pages.smartDegassingSticker.question_howDoIChooseBetween'),
      answer: t('seoPages.pages.smartDegassingSticker.answer_co2AbsorberPacketsAreThe')
    },
    {
      question: t('seoPages.pages.smartDegassingSticker.question_canIUseKimchiCo2'),
      answer: t('seoPages.pages.smartDegassingSticker.answer_noCoffeeBeansAreExtremely')
    },
    {
      question: t('seoPages.pages.smartDegassingSticker.question_whatIsTheCorrectNeedle'),
      answer: t('seoPages.pages.smartDegassingSticker.answer_weRecommendAClean10mm')
    }
  ]

  const relatedLinks = [
    { title: t('seoPages.pages.smartDegassingSticker.title_spoutPouchesForLiquids'), url: "/function/spout-pouches-juice", description: t('seoPages.pages.smartDegassingSticker.description_standardSpoutedPackagingForJuices') },
    { title: t('seoPages.pages.smartDegassingSticker.title_microwaveSteamBags'), url: "/function/microwave-steam-bags", description: t('seoPages.pages.smartDegassingSticker.description_selfventingPouchesDesignedForHighheat') },
    { title: t('seoPages.pages.smartDegassingSticker.title_prezipperedRollstockFilm'), url: "/function/pre-zippered-rollstock", description: t('seoPages.pages.smartDegassingSticker.description_automatedRollStockWithIntegrated') },
    { title: t('seoPages.pages.smartDegassingSticker.title_compostablePackagingMaterials'), url: "/materials/compostable", description: t('seoPages.pages.smartDegassingSticker.description_certifiedHomeAndIndustrialCompostable') }
  ]

  return (
    <>
      <SEOPageLayout 
        heroBgColor="#022c22" // B2B Emerald Dark Green
        title={t('seoPages.pages.smartDegassingSticker.title_smartDegassingStickerForLiquid')}
        description={t('seoPages.pages.smartDegassingSticker.description')}
        keywords={['smart degassing sticker', 'one-way degassing valve', 'kimchi packaging', 'liquid packaging degassing', 'CO2 absorber packet', 'fermented food packaging', 'leak proof degassing valve', 'pouch venting valve', 'achieve pack packaging']}
        canonicalUrl="https://achievepack.com/function/smart-degassing-sticker"
        heroTitle={t('seoPages.pages.smartDegassingSticker.heroTitle')}
        heroSubtitle={t('seoPages.pages.smartDegassingSticker.heroSubtitle')}
        heroImage="/imgs/function/smart_sticker_valve_detail.png"
        heroImageAlt="Achieve Pack Smart Degassing Sticker Valve Mockup"
        introSummary={t('seoPages.pages.smartDegassingSticker.introSummary')}
        sections={sections}
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaTitle={t('seoPages.pages.smartDegassingSticker.ctaTitle')}
        ctaDescription={t('seoPages.pages.smartDegassingSticker.ctaDescription')}
        ctaButtonText={t('seoPages.pages.smartDegassingSticker.ctaButtonText')}
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
