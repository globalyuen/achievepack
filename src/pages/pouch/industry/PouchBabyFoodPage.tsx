import { useTranslation } from 'react-i18next'
import DualDomainSEOHead from '../../../components/DualDomainSEOHead'
import { motion } from 'framer-motion'
import { Package, Leaf, Zap, CheckCircle, ArrowRight, Shield, Award, Heart, Baby, FileCheck, Thermometer, Droplets } from 'lucide-react'
import PouchLayout from '../../../components/pouch/PouchLayout'
import { NeoButton, NeoCard, NeoBadge } from '../../../components/pouch/PouchUI'
import ClickableImage from '../../../components/ClickableImage'

const translations = {
  en: {
    title: "5 Common Baby Food Pouch Problems (And Solutions)",
    p1: "Puncture & Leakage during Transit",
    d1: "Pouches can burst or leak during shipping, causing product loss and damaging brand reputation.",
    s1: "Use reinforced laminated barrier films with high puncture resistance and strong seal integrity.",
    p2: "Spout Choking Hazards for Infants",
    d2: "Standard spouts can pose a severe choking hazard to babies and toddlers if swallowed.",
    s2: "Implement anti-choke, large-diameter spouts that strictly comply with infant safety standards.",
    p3: "Chemical Leaching during Hot-Fill",
    d3: "High temperatures during the hot-fill process can cause harmful chemicals to migrate into the food.",
    s3: "Utilize BPA-free, phthalate-free interior layers that are certified heat-stable up to 95°C.",
    p4: "Difficulty in Complete Emptying",
    d4: "Consumers struggle to squeeze out all the contents, leading to food waste and frustration.",
    s4: "Design an ergonomic pouch shape with a smooth, non-stick interior layer for zero residue.",
    p5: "Inability to Withstand Pasteurization",
    d5: "Standard pouches may delaminate or melt when subjected to high-temperature sterilization.",
    s5: "Adopt retort-grade lamination allowing high-temperature sterilization without any delamination."
  },
  es: {
    title: "5 Problemas Comunes de las Bolsas de Comida para Bebés (Y Soluciones)",
    p1: "Perforaciones y Fugas durante el Tránsito",
    d1: "Las bolsas pueden reventar o gotear durante el envío, causando pérdida de producto y dañando la reputación.",
    s1: "Utilice películas de barrera laminadas reforzadas con alta resistencia a la perforación y fuerte integridad del sello.",
    p2: "Riesgos de Asfixia por Boquilla para Bebés",
    d2: "Las boquillas estándar pueden representar un grave peligro de asfixia para bebés y niños pequeños.",
    s2: "Implemente boquillas anti-asfixia de gran diámetro que cumplan estrictamente con las normas de seguridad infantil.",
    p3: "Lixiviación Química durante el Llenado en Caliente",
    d3: "Las altas temperaturas pueden hacer que productos químicos nocivos migren a los alimentos.",
    s3: "Utilice capas interiores sin BPA ni ftalatos que estén certificadas como estables al calor hasta 95°C.",
    p4: "Dificultad para Vaciar Completamente",
    d4: "Los consumidores luchan por exprimir todo el contenido, lo que genera desperdicio de alimentos.",
    s4: "Diseñe una forma de bolsa ergonómica con una capa interior lisa y antiadherente para cero residuos.",
    p5: "Incapacidad para Soportar la Pasteurización",
    d5: "Las bolsas estándar pueden deslaminarse o derretirse cuando se someten a esterilización a alta temperatura.",
    s5: "Adopte laminación de grado esterilizable que permita la esterilización a alta temperatura sin deslaminación."
  },
  fr: {
    title: "5 Problèmes Courants des Gourdes pour Bébés (Et Solutions)",
    p1: "Perforation et Fuite pendant le Transport",
    d1: "Les gourdes peuvent éclater ou fuir pendant l'expédition, entraînant une perte de produit.",
    s1: "Utilisez des films barrières laminés renforcés avec une haute résistance à la perforation.",
    p2: "Risques d'Étouffement liés au Bouchon",
    d2: "Les bouchons standard peuvent présenter un grave risque d'étouffement pour les bébés.",
    s2: "Mettez en œuvre des bouchons anti-étouffement de grand diamètre conformes aux normes de sécurité.",
    p3: "Lixiviation Chimique lors du Remplissage à Chaud",
    d3: "Les températures élevées peuvent provoquer la migration de produits chimiques nocifs dans les aliments.",
    s3: "Utilisez des couches intérieures sans BPA ni phtalates, certifiées stables à la chaleur jusqu'à 95°C.",
    p4: "Difficulté de Vidage Complet",
    d4: "Les consommateurs ont du mal à extraire tout le contenu, ce qui entraîne un gaspillage alimentaire.",
    s4: "Concevez une forme de gourde ergonomique avec une couche intérieure lisse pour zéro résidu.",
    p5: "Incapacité à Résister à la Pasteurisation",
    d5: "Les gourdes standard peuvent se délaminer ou fondre lors de la stérilisation à haute température.",
    s5: "Adoptez une lamination de qualité autoclave permettant une stérilisation à haute température."
  },
  "zh-TW": {
    title: "嬰兒食品袋的 5 個常見問題（及解決方案）",
    p1: "運輸過程中的刺穿和洩漏",
    d1: "包裝袋在運輸過程中可能會破裂或洩漏，導致產品損失並損害品牌聲譽。",
    s1: "使用具有高抗穿刺性和強大密封完整性的加固層壓阻隔膜。",
    p2: "嬰兒吞嚥吸嘴的窒息風險",
    d2: "標準吸嘴如果不慎吞嚥，可能對嬰幼兒構成嚴重的窒息危險。",
    s2: "採用嚴格符合嬰兒安全標準的大口徑防窒息吸嘴。",
    p3: "熱灌裝過程中的化學物質溶出",
    d3: "熱灌裝過程中的高溫可能導致有害化學物質遷移到食品中。",
    s3: "使用不含 BPA 和鄰苯二甲酸酯的內層，這些內層經過認證，耐熱高達 95°C。",
    p4: "難以完全擠出內容物",
    d4: "消費者難以擠出所有內容物，導致食物浪費和挫敗感。",
    s4: "設計符合人體工程學的包裝袋形狀，配以光滑的不粘內層，實現零殘留。",
    p5: "無法承受巴氏殺菌",
    d5: "標準包裝袋在進行高溫滅菌時可能會發生分層或熔化。",
    s5: "採用可蒸煮級別的層壓材料，允許進行高溫滅菌而不分層。"
  }
};

const sectionsForPouch = ["5 Common Baby Food Pouch Problems (And Solutions)"];
const sectionsForAchieve = ["5 Common Baby Food Pouch Problems (And Solutions)"];

export default function PouchBabyFoodPage() {
  const { t } = useTranslation()

  const floatAnim = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }

  const title = t('seoPages.pages.pouchBabyFood.metaTitle')
  const description = t('seoPages.pages.pouchBabyFood.metaDescription')

  const SAFETY_METRICS = [
    { label: t('seoPages.pages.pouchBabyFood.bpaMigration'), value: '0.00%', desc: t('seoPages.pages.pouchBabyFood.certifiedZeromigrationPolymers') },
    { label: t('seoPages.pages.pouchBabyFood.phthalateFree'), value: '100%', desc: t('seoPages.pages.pouchBabyFood.safeForDirectInfant') },
    { label: t('seoPages.pages.pouchBabyFood.heavyMetals'), value: 'Non-Detect', desc: t('seoPages.pages.pouchBabyFood.verifiedByAstmF963') },
    { label: t('seoPages.pages.pouchBabyFood.heatStable'), value: '95°C', desc: t('seoPages.pages.pouchBabyFood.safeForHotfillPuree') }
  ]

  return (
    <PouchLayout>
      <DualDomainSEOHead
        title={title}
        description={description}
        ogImage="/imgs/artifacts/baby_food_hero.jpg"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 border-b-4 border-black bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="inline-block bg-[#FFD700] border-4 border-black px-4 py-2 transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-['JetBrains_Mono'] font-bold text-sm text-black">{t('seoPages.pages.pouchBabyFood.industrycodeBaby04')}</span>
              </div>
              
              <h1 className="font-black text-5xl md:text-8xl leading-[0.9] tracking-tighter uppercase">
                {t('seoPages.pages.pouchBabyFood.pure')}<br/>
                {t('seoPages.pages.pouchBabyFood.safe')}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-pink-600">{t('seoPages.pages.pouchBabyFood.healthy')}</span>
              </h1>

              <p className="font-['JetBrains_Mono'] font-bold text-lg md:text-xl max-w-md bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
                {t('seoPages.pages.pouchBabyFood.gtBpafreeFoodSafe')}<br/>
                {t('seoPages.pages.pouchBabyFood.gtAntichokeCapTech')}<br/>
                {t('seoPages.pages.pouchBabyFood.gtSpoutedStandupOptions')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchBabyFood.quoteNow')}</NeoButton>
                <NeoButton variant="secondary" to="/sample">{t('seoPages.pages.pouchBabyFood.requestSafetyKit')}</NeoButton>
              </div>
            </div>

            <div className="relative">
              <NeoCard className="bg-[#FF00FF] relative z-10 rotate-2 !p-0 overflow-hidden group border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div className="aspect-square relative">
                  <img 
                    src="/imgs/artifacts/baby_food_hero.jpg" 
                    alt={t('seoPages.pages.pouchBabyFood.alt_safeBabyFoodPackaging')} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div animate={floatAnim} className="absolute top-4 right-4 bg-[#D4FF00] border-2 border-black px-2 py-1 font-['JetBrains_Mono'] text-xs font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 text-black">
                    {t('seoPages.pages.pouchBabyFood.foodgradecert')}
                  </motion.div>
                </div>
              </NeoCard>
              <div className="absolute top-10 -right-10 w-full h-full border-4 border-black bg-[#D4FF00] -z-0 rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00FFFF] translate-x-4 translate-y-4 border-4 border-black" />
              <ClickableImage 
                src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
                alt={t('seoPages.pages.pouchBabyFood.alt_safeBabyFoodPackaging')} 
                className="relative z-10 border-4 border-black w-full"
              />
            </div>
            <div>
              <NeoBadge color="cyan">{t('seoPages.pages.pouchBabyFood.certifiedclean')}</NeoBadge>
              <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic text-pink-600">{t('seoPages.pages.pouchBabyFood.trustIs')}<br/>{t('seoPages.pages.pouchBabyFood.everything')}</h2>
              <p className="mt-8 text-xl text-gray-600 font-['JetBrains_Mono'] leading-relaxed">
                {t('seoPages.pages.pouchBabyFood.babyFoodBrandsFace')}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {SAFETY_METRICS.map((m, i) => (
                  <div key={i} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black uppercase text-xs mb-1 text-pink-600">{m.label}</h4>
                    <p className="text-xl font-black">{m.value}</p>
                    <p className="text-[10px] font-bold opacity-60">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Gallery Section */}
      <section className="py-24 bg-pink-50 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <NeoBadge color="magenta">{t('seoPages.pages.pouchBabyFood.visualshowcase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchBabyFood.formats')}<br/>{t('seoPages.pages.pouchBabyFood.styles')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ClickableImage 
              src="/imgs/topics/baby_food_bags_1778212399332.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_compostableBabyFoodBags')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_spoutPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/stand-up.webp" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babySnackStandUp')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_snackPouches')}
            />
            <ClickableImage 
              src="/imgs/store/pouch shape/flat-bottom.webp" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babyFoodBoxPouch')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_formulaBags')}
            />
            <ClickableImage 
              src="/imgs/topics/dtc_packaging_1778212333445.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_dtcBabyFoodDelivery')} 
              className="w-full h-48 object-cover rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              caption={t('seoPages.pages.pouchBabyFood.caption_dtcPackaging')}
            />
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="py-24 bg-[#F0F0F0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <NeoBadge color="blue">{t('seoPages.pages.pouchBabyFood.globalsafetystandards')}</NeoBadge>
            <h2 className="font-black text-5xl md:text-7xl uppercase mt-4 italic">{t('seoPages.pages.pouchBabyFood.noCompromise')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard>
              <FileCheck className="w-12 h-12 mb-6 text-pink-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.fda21Cfr')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.fullComplianceWithUs')}</p>
            </NeoCard>
            <NeoCard color="bg-white shadow-[10px_10px_0px_0px_rgba(255,0,128,1)]">
              <Shield className="w-12 h-12 mb-6 text-blue-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.eu102011')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.europeanSafetyVerificationFor')}</p>
            </NeoCard>
            <NeoCard>
              <Award className="w-12 h-12 mb-6 text-green-600" />
              <h4 className="font-black text-2xl uppercase mb-4">{t('seoPages.pages.pouchBabyFood.tuvOkHome')}</h4>
              <p className="text-sm font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.certifiedToBreakDown')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Deep Dive SEO Content */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="pink">{t('seoPages.pages.pouchBabyFood.industrydeepdive')}</NeoBadge>
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mt-6 mb-8 italic">
            {t('seoPages.pages.pouchBabyFood.theNewStandardIn')} <span className="text-[#10b981]">{t('seoPages.pages.pouchBabyFood.babyFoodPackaging')}</span>
          </h2>
          
          <div className="prose prose-lg max-w-none font-['JetBrains_Mono'] text-gray-700 space-y-6">
            <p>
              {t('seoPages.pages.pouchBabyFood.whenItComesTo')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.atPouchecoWeAre')}
            </p>
            
            <ClickableImage 
              src="/imgs/demo-site/baby/achieve_baby_realistic_hero.png" 
              alt={t('seoPages.pages.pouchBabyFood.alt_babyFoodPouchPackaging')} 
              className="w-full h-80 object-cover border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8"
              caption={t('seoPages.pages.pouchBabyFood.caption_zeroLeachingZeroMicroplastics')}
            />

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.eradicatingChemicalLeaching')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.thePrimaryConcernFor')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.ourCompostableLaminationsAre')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.theHotfillProcessAnd')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.manyBabyFoodPurees')} 
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.throughIntensiveRdPoucheco')}
            </p>

            <h3 className="text-2xl font-['Space_Grotesk'] font-black uppercase text-black mt-12 mb-4">{t('seoPages.pages.pouchBabyFood.empoweringStartupBrands')}</h3>
            <p>
              {t('seoPages.pages.pouchBabyFood.theOrganicBabyFood')}
            </p>
            <p>
              {t('seoPages.pages.pouchBabyFood.weLevelThePlaying')}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Common Problems Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-['Space_Grotesk'] font-black uppercase mb-12 text-center">
            {translations[t('seoPages.language', 'en') as keyof typeof translations]?.title || translations.en.title}
          </h2>
          
          <div className="mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/imgs/knowledge/baby-food-pouch-pain-points.jpg" 
              alt="Baby Food Pouch Pain Points"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((num) => {
              const lang = t('seoPages.language', 'en') as keyof typeof translations;
              const tObj = translations[lang] || translations.en;
              const p = tObj[`p${num}` as keyof typeof tObj];
              const d = tObj[`d${num}` as keyof typeof tObj];
              const s = tObj[`s${num}` as keyof typeof tObj];
              
              const icons = [
                <Package className="w-8 h-8 text-pink-500" key="1" />,
                <Shield className="w-8 h-8 text-blue-500" key="2" />,
                <Thermometer className="w-8 h-8 text-orange-500" key="3" />,
                <Droplets className="w-8 h-8 text-green-500" key="4" />,
                <CheckCircle className="w-8 h-8 text-purple-500" key="5" />
              ];
              
              return (
                <div key={num} className="flex gap-4 md:gap-6 bg-gray-50 p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex-shrink-0 mt-1">
                    {icons[num - 1]}
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-black text-xl md:text-2xl uppercase mb-2">
                      {p}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-gray-700 mb-4">
                      {d}
                    </p>
                    <div className="bg-white border-2 border-black p-4">
                      <p className="font-['JetBrains_Mono'] text-sm font-bold flex items-start gap-2">
                        <span className="text-green-600 uppercase">Solution:</span>
                        <span className="text-black">{s}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6">
          <NeoBadge color="blue">{t('seoPages.pages.pouchBabyFood.knowledgebase')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-7xl mt-6 uppercase leading-tight italic mb-12">{t('seoPages.pages.pouchBabyFood.frequentlyAsked')}<br/>{t('seoPages.pages.pouchBabyFood.questions')}</h2>
          <div className="space-y-6">
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.areYourPouchesSafe')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.yes100OurMaterials')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.areTheSpoutsAnd')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.weOfferBothStandard')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.canThesePouchesBe')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.yesOurHighbarrierStructures')}</p>
            </NeoCard>
            <NeoCard color="bg-gray-50">
              <h4 className="font-black text-xl mb-2">{t('seoPages.pages.pouchBabyFood.whatIsTheMoq')}</h4>
              <p className="font-['JetBrains_Mono'] text-gray-600">{t('seoPages.pages.pouchBabyFood.weSupportStartupOrganic')}</p>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-pink-600 text-white border-t-4 border-black">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <NeoBadge color="lime">{t('seoPages.pages.pouchBabyFood.soilfriendly')}</NeoBadge>
          <h2 className="font-black text-5xl md:text-8xl uppercase leading-none italic">{t('seoPages.pages.pouchBabyFood.protectTheir')}<br/>{t('seoPages.pages.pouchBabyFood.future')}</h2>
          <p className="font-['JetBrains_Mono'] font-bold text-xl opacity-80 max-w-2xl mx-auto">
            {t('seoPages.pages.pouchBabyFood.empoweringNextgenBabyFood')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton variant="primary" to="/sample" className="!bg-white !text-pink-600">{t('seoPages.pages.pouchBabyFood.getSafetySamples')}</NeoButton>
            <NeoButton variant="secondary" className="!border-white" href="https://calendly.com/30-min-free-packaging-consultancy">{t('seoPages.pages.pouchBabyFood.consultSafetyExpert')}</NeoButton>
          </div>
        </div>
      </section>
      {/* Keep Reading */}
      <section className="py-16 px-4 bg-white border-t-4 border-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Space_Grotesk'] font-black text-3xl md:text-4xl uppercase mb-8">
            <span className="bg-[#D4FF00] px-2">{t('seoPages.pages.pouchBabyFood.keepReading')}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/industry/frozen-food"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/artifacts/frozen_food_hero.jpg"
                  alt={t('seoPages.pages.pouchBabyFood.alt_frozenFoodPackaging')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.frozenFood')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.arcticgradeDurabilityPunctureResistant')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/packaging/spout-pouches"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/pouch-shape/a_spout_pouch_isolated_6857112.webp"
                  alt={t('seoPages.pages.pouchBabyFood.alt_spoutPouchesGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.spoutPouches')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.spoutPouchesLeakproofCompostable')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

            <a
              href="/blog/eco-friendly-food-packaging-guide"
              className="group bg-[#F0F0F0] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <div className="border-b-4 border-black overflow-hidden">
                <ClickableImage 
                  src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
                  alt={t('seoPages.pages.pouchBabyFood.alt_foodPackagingGuide')}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] font-black text-lg uppercase group-hover:text-[#10b981] transition-colors">
                  {t('seoPages.pages.pouchBabyFood.foodSafeGuide')}
                </h3>
                <p className="text-sm font-['JetBrains_Mono'] text-gray-600 mt-2 mb-3">
                  {t('seoPages.pages.pouchBabyFood.safetyProtocolsForFood')}
                </p>
                <div className="flex items-center gap-2 text-sm font-['JetBrains_Mono'] font-bold">
                  {t('seoPages.pages.pouchBabyFood.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PouchLayout>
  )
}
