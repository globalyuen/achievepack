import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle, AlertTriangle, Wrench } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

export const translations: Record<string, any> = {
  en: {
    title: "5 Common Kraft Medium Barrier Problems (And Solutions)",
    points: [
      { q: "Moisture Absorption & Softening", a: "Raw kraft paper is highly hydrophilic, absorbing ambient moisture which weakens structural rigidity and makes the package feel soggy. Solution: Laminate with a high-tensile inner VMPET/PE lining that acts as a dual-sided moisture shield, keeping the paper dry and the pouch structurally sound." },
      { q: "Aroma & Oil Migration", a: "Delicate aromas (like coffee) and essential oils can migrate through weak barriers, causing oxidation and staining the exterior kraft surface. Solution: Incorporate an active barrier layer with low oxygen transmission rates (OTR) and oil-resistant resins to lock in flavor and prevent grease staining." },
      { q: "Uneven Heat Seal Quality", a: "The thick, fibrous structure of kraft paper acts as a thermal insulator, leading to insufficient heat transfer and weak seal seams. Solution: Use low-temperature seal initiation (SIT) inner PE layers and optimize dwell time to guarantee consistent, air-tight hermetic seals." },
      { q: "Creasing and Flex-Cracking", a: "Kraft paper lacks elasticity, making it prone to creasing, flex-cracking, and micro-punctures during shipping and handling. Solution: Integrate a flexible, shock-absorbing biaxially oriented polyester layer (PET) to reinforce corners and absorb transit vibrations." },
      { q: "Ink Smudging & Low Contrast", a: "High porosity of natural kraft fibers absorbs ink unevenly, leading to muddy colors, low contrast, or ink rub-off. Solution: Employ advanced digital or flexographic printing on a clear outer film, reverse-printing the graphics to protect them under a pristine matte finish." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de la Barrera Media de Kraft (y Soluciones)",
    points: [
      { q: "Absorción de Humedad y Ablandamiento", a: "El papel kraft crudo es muy hidrófilo y absorbe la humedad ambiental, lo que debilita la rigidez estructural y hace que el envase se sienta blando. Solución: Laminar con un revestimiento interior de VMPET/PE de alta resistencia a la tracción que actúa como un escudo contra la humedad de doble cara." },
      { q: "Migración de Aromas y Aceites", a: "Los aromas delicados (como el café) y los aceites esenciales pueden migrar a través de barreras débiles, causando oxidación y manchando la superficie exterior. Solución: Incorporar una capa de barrera activa con bajas tasas de transmisión de oxígeno (OTR) y resinas resistentes a las grasas." },
      { q: "Calidad de Sellado Térmico Desgual", a: "La estructura gruesa y fibrosa del papel kraft actúa como aislante térmico, lo que provoca una transferencia de calor insuficiente y costuras débiles. Solución: Utilizar capas internas de PE de inicio de sellado a baja temperatura (SIT) y optimizar el tiempo de presión para garantizar un sellado hermético." },
      { q: "Arrugas y Agrietamiento por Flexión", a: "El papel kraft carece de elasticidad, lo que lo hace propenso a arrugarse, agrietarse y sufrir microperforaciones durante el envío. Solución: Integrar una capa de poliéster orientado biaxialmente (PET) flexible y amortiguadora para reforzar las esquinas." },
      { q: "Manchado de Tinta y Bajo Contraste", a: "La alta porosidad de las fibras naturales de kraft absorbe la tinta de manera desigual, provocando colores apagados o desprendimiento de tinta. Solución: Emplear impresión digital o flexográfica avanzada en una película exterior transparente, imprimiendo el diseño en reverso." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants du Kraft Barrière Moyenne (Et Solutions)",
    points: [
      { q: "Absorption d'Humidité et Ramollissement", a: "Le papier kraft brut est très hydrophile et absorbe l'humidité ambiante, ce qui affaiblit la rigidité structurelle et ramollit l'emballage. Solution : Laminer avec un revêtement intérieur en VMPET/PE à haute résistance pour former un double bouclier d'étanchéité." },
      { q: "Migration des Arômes et des Huiles", a: "Les arômes délicats (comme le café) et les huiles peuvent traverser les barrières faibles, provoquant l'oxydation et tachant le papier kraft. Solution : Intégrer une couche barrière active à faible taux de transmission d'oxygène (OTR) et des résines résistantes aux graisses." },
      { q: "Soudure Thermique Irrégulière", a: "La structure épaisse et fibreuse du papier kraft sert d'isolant thermique, ce qui entraîne des soudures fragiles. Solution : Utiliser des couches internes de PE à basse température d'initiation de scellage (SIT) et optimiser les paramètres de pression." },
      { q: "Plis et Fissures de Flexion", a: "Le papier kraft manque d'élasticité, ce qui le rend sensible aux faux plis, aux fissures de flexion et aux micro-perforations pendant le transport. Solution : Intégrer une couche de polyester flexible (PET) pour absorber les chocs et renforcer les angles de la pochette." },
      { q: "Bavures d'Encre et Faible Contraste", a: "La porosité élevée des fibres de kraft absorbe l'encre de manière inégale, ce qui rend les couleurs ternes ou sensibles aux frottements. Solution : Utiliser une impression numérique ou flexographique avancée sur film externe transparent avec impression inversée." }
    ]
  },
  'zh-TW': {
    title: "中阻隔牛皮紙袋的 5 個常見問題（與工程解決方案）",
    points: [
      { q: "吸濕與袋身軟化", a: "天然牛皮紙具有高度親水性，易吸收環境水分，導致袋身失去剛性、手感扁塌。解決方案：於內層複合高強度 VMPET/PE 薄膜，形成雙向防潮屏障，保持紙張乾爽與包裝挺度。" },
      { q: "香氣流失與油脂滲透", a: "咖啡或茶葉等精細香氣易透過微弱阻隔逸散，且油脂可能滲透紙張，導致氧化並污染外觀。解決方案：使用高阻隔活性阻隔層，降低透氧率 (OTR) 並搭配耐油樹脂，牢牢鎖住香氣並防油漬。" },
      { q: "熱封不均與漏氣", a: "牛皮紙纖維粗厚，熱傳導性差，封口時易因熱量不均導致封合強度不足或微小漏氣。解決方案：採用低起封溫度 (SIT) 的高品質 PE 內層，並精確調校熱封時間與溫度，確保百分之百氣密。" },
      { q: "折痕與擠壓破袋", a: "牛皮紙缺乏延展彈性，在物流運輸的擠壓與震動下，極易產生難看的折痕或角隅破裂。解決方案：在結構中嵌入高韌性雙向拉伸聚酯 (PET) 緩衝層，增強角落強度，有效防止運輸破損。" },
      { q: "印刷暈染與色彩黯淡", a: "紙張表面孔隙大且不平整，墨水易被過度吸收，導致圖案模糊、對比度低或印刷脫落。解決方案：將圖案以反向印刷（裏印）技術印製於外層高透光保護膜，兼顧精緻色彩與耐磨擦保護。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pain-points', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'pain-points', translationKey: 'title' }
];

const KraftMediumBarrierPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const p = 'seoPages.pages.kraftMediumBarrier';
  const currentLang = i18n.language || 'en';
  const tPain = translations[currentLang as keyof typeof translations] || translations.en;

  // Helper to render bold prefixes (split by colon or Chinese full-width colon)
  const renderBullet = (text: string) => {
    const match = text.match(/^([^:：]+)[:：](.*)$/);
    if (match) {
      return (
        <span>
          <strong>{match[1]}:</strong>{match[2]}
        </span>
      );
    }
    return <span>{text}</span>;
  };

  const sections = [
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.keyFeaturesTitle`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• {t(`${p}.sections.overview.features.0`)}</li>
              <li>• {t(`${p}.sections.overview.features.1`)}</li>
              <li>• {t(`${p}.sections.overview.features.2`)}</li>
              <li>• {t(`${p}.sections.overview.features.3`)}</li>
              <li>• {t(`${p}.sections.overview.features.4`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.summary`)}
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: t(`${p}.sections.specifications.title`),
      icon: <Layers className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.specifications.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.specifications.structure.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.specifications.structure.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.specifications.structure.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.structure.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.structure.points.2`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.specifications.properties.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.specifications.properties.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.specifications.properties.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.properties.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.properties.points.2`)}</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-4 bg-green-50/50">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.specifications.formats.title`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• {t(`${p}.sections.specifications.formats.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.2`)}</li>
                <li>• {t(`${p}.sections.specifications.formats.points.3`)}</li>
              </ul>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50/50">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.specifications.premium.title`)}</h4>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• {t(`${p}.sections.specifications.premium.points.0`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.1`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.2`)}</li>
                <li>• {t(`${p}.sections.specifications.premium.points.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{t(`${p}.sections.applications.items.${idx}`)}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: t(`${p}.sections.advantages.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.advantages.bestForTitle`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.0`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.1`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.2`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.3`)}</li>
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.4`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.advantages.considerationsTitle`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.advantages.considerationsPoints.0`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.1`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.2`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.scenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">{t(`${p}.sections.scenarios.intro`)}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-amber-600" />
                <h4 className="font-bold text-amber-800">{t(`${p}.sections.scenarios.coffee.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-amber-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.coffee.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200">
                <span className="text-xs text-amber-600">{t(`${p}.sections.scenarios.coffee.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">{t(`${p}.sections.scenarios.snacks.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.snacks.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">{t(`${p}.sections.scenarios.snacks.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">{t(`${p}.sections.scenarios.wellness.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.wellness.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">{t(`${p}.sections.scenarios.wellness.note`)}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary-600" />
              {t(`${p}.sections.scenarios.stories.title`)}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-amber-600 uppercase">{t(`${p}.sections.scenarios.stories.roaster.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.roaster.desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">{t(`${p}.sections.scenarios.stories.organic.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.organic.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">1-3</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.mvtr`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">5-20</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.otr`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">6-12</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.shelfLife`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">60-70%</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.renewable`)}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">{t(`${p}.sections.marketData.tableTitle`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.0`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.1`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.2`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.0.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.1.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.rows.2.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.rows.2.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">{t(`${p}.sections.marketData.impactTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">Best Value</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.value`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">60-70%</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.renewable`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">#1</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.roasterChoice`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: t(`${p}.sections.comparison.title`),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">{t(`${p}.sections.comparison.intro`)}</p>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-primary-600 px-4 py-3">
              <h4 className="font-bold text-white text-center">{t(`${p}.sections.comparison.tableTitle`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.comparison.headers.0`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">{t(`${p}.sections.comparison.headers.1`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">{t(`${p}.sections.comparison.headers.2`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">{t(`${p}.sections.comparison.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.0.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.1.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.2.0`)}</td>
                    <td className="px-4 py-3 text-center text-blue-600">{t(`${p}.sections.comparison.rows.2.1`)}</td>
                    <td className="px-4 py-3 text-center text-amber-600">{t(`${p}.sections.comparison.rows.2.2`)}</td>
                    <td className="px-4 py-3 text-center text-green-600">{t(`${p}.sections.comparison.rows.2.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.rows.3.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.rows.3.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">{t(`${p}.sections.comparison.decisionGuideTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">{t(`${p}.sections.comparison.chooseMedium`)}</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• {t(`${p}.sections.comparison.mediumPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.mediumPoints.1`)}</li>
                  <li>• {t(`${p}.sections.comparison.mediumPoints.2`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-amber-700">{t(`${p}.sections.comparison.chooseHigh`)}</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• {t(`${p}.sections.comparison.highPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.highPoints.1`)}</li>
                  <li>• <Link to="/materials/kraft-high-barrier" className="underline">{t(`${p}.sections.comparison.highPoints.2`)}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">{t(`${p}.sections.comparison.chooseLow`)}</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• {t(`${p}.sections.comparison.lowPoints.0`)}</li>
                  <li>• {t(`${p}.sections.comparison.lowPoints.1`)}</li>
                  <li>• <Link to="/materials/kraft-low-barrier" className="underline">{t(`${p}.sections.comparison.lowPoints.2`)}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sustainability',
      title: t(`${p}.sections.sustainability.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.sustainability.intro`)}</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.sustainability.renewable.title`)}</h4>
              <p className="text-sm text-green-700">{t(`${p}.sections.sustainability.renewable.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.sustainability.reduced.title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.sustainability.reduced.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.sustainability.emissions.title`)}</h4>
              <p className="text-sm text-amber-700">{t(`${p}.sections.sustainability.emissions.desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tPain.title,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src="/imgs/knowledge/kraft-medium-barrier-pain-points.jpg" 
                alt={tPain.title}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              {tPain.points.map((pt: any, idx: number) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{pt.q}</h4>
                    <p className="text-sm text-neutral-600 mt-1">{pt.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ];

  return (
    <SEOPageLayout heroBgColor="#451a03"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'kraft medium barrier packaging',
        'kraft coffee bags',
        'metallized kraft pouches'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-medium-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft medium barrier pouches with metallized layers for coffee and premium foods"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Product"
      ctaTitle={t(`${p}.cta.title`)}
      ctaDescription={t(`${p}.cta.description`)}
      ctaButtonText={t(`${p}.cta.button`)}
    />
  );
};

export default KraftMediumBarrierPage;
