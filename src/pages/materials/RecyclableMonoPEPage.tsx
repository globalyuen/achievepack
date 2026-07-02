import React from 'react'
import { Recycle, Leaf, Shield, CheckCircle, Factory, MessageCircle, BookOpen, Building2, Image, TrendingUp, BarChart3, ArrowLeftRight, ShoppingBag, Coffee, Sparkles, Globe, Target, Calendar, Phone, Download, Mail, AlertTriangle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

export const translations: Record<string, any> = {
  en: {
    title: "5 Common Recyclable Mono-PE Problems (And Solutions)",
    points: [
      { q: "Thermal Sensitivity & Narrow Sealing Window", a: "Mono-PE melts easily under sealing jaws. Solution: Co-extrude Machine Direction Oriented PE (MDO-PE) outer layer with low-melting Metallocene PE (mPE) sealant layer to broaden the sealing window." },
      { q: "Insufficient Oxygen & Moisture Barrier", a: "Pure PE has higher permeability than PET/foil. Solution: Co-extrude less than 5% EVOH barrier layer or apply Al2O3/SiOx nano-coatings, maintaining full recyclability in Class 4 streams." },
      { q: "Lack of Stiffness & Pouch Sagging", a: "PE is naturally soft, causing pouches to sag on retail shelves. Solution: Use oriented PE (MDO-PE/BOPE) in the outer layer to increase tensile strength and structural stiffness." },
      { q: "Low Puncture & Tear Resistance", a: "Single PE layers can puncture from sharp-edged foods. Solution: Blend Linear Low-Density Polyethylene (LLDPE) with high-density metallocene PE to enhance impact strength and toughness." },
      { q: "Hazy Optics & Low Gloss", a: "Mono-PE structures often have lower gloss than PET laminates. Solution: Use specialized high-clarity cast PE (CPE) films or apply high-gloss, recyclable outer varnishes." }
    ]
  },
  es: {
    title: "5 Problemas Comunes del Mono-PE Reciclable (y Soluciones)",
    points: [
      { q: "Sensibilidad térmica y ventana de sellado estrecha", a: "El mono-PE se derrite fácilmente bajo las mordazas de sellado. Solución: Coextruir una capa exterior de PE orientado en dirección de la máquina (MDO-PE) con una capa de sellado de PE de metaloceno (mPE) de bajo punto de fusión para ampliar el rango de temperatura." },
      { q: "Barrera insuficiente de oxígeno y humedad", a: "El PE puro tiene mayor permeabilidad que el PET o el aluminio. Solución: Coextruir menos de 5% de capa de barrera EVOH o aplicar nanocubrimientos de Al2O3/SiOx, manteniendo la reciclabilidad total en el flujo de PE Clase 4." },
      { q: "Falta de rigidez y caída de la bolsa", a: "El PE es naturalmente blando, lo que hace que las bolsas se caigan en los estantes. Solución: Usar PE orientado (MDO-PE/BOPE) en la capa exterior para aumentar la resistencia a la tracción y la rigidez estructural." },
      { q: "Baja resistencia a la perforación y al desgarro", a: "Las capas de PE individuales pueden perforarse con alimentos de bordes afilados. Solución: Mezclar polietileno lineal de baja densidad (LLDPE) con PE de metaloceno de alta densidad para mejorar la resistencia al impacto y la tenacidad." },
      { q: "Óptica brumosa y bajo brillo", a: "Las estructuras de mono-PE suelen tener un brillo inferior al de los laminados de PET. Solución: Utilizar películas especializadas de PE fundido de alta claridad (CPE) o aplicar barnices exteriores reciclables de alto brillo." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants du Mono-PE Recyclable (et Solutions)",
    points: [
      { q: "Sensibilité thermique et fenêtre de scellage étroite", a: "Le mono-PE fond facilement sous les mâchoires de scellage. Solution : Co-extruder une couche externe de PE orienté dans le sens de la machine (MDO-PE) avec une couche de scellant en PE métallocène (mPE) à bas point de fusion pour élargir la plage de scellage." },
      { q: "Barrière insuffisante à l'oxygène et à l'humidité", a: "Le PE pur a une perméabilité plus élevée que le PET ou l'aluminium. Solution : Co-extruder moins de 5% de couche barrière EVOH ou appliquer des nano-revêtements Al2O3/SiOx, préservant ainsi la recyclabilité totale dans la filière PE Classe 4." },
      { q: "Manque de rigidité et affaissement du sachet", a: "Le PE est naturellement souple, ce qui fait s'affaisser les sachets sur les étagères. Solution : Utiliser du PE orienté (MDO-PE/BOPE) dans la couche externe pour augmenter la résistance à la traction et la rigidité structurelle." },
      { q: "Faible résistance à la perforation et à la déchirure", a: "Les monocouches de PE peuvent être perforées par des aliments à bords tranchants. Solution : Mélanger du polyéthylène linéaire basse densité (LLDPE) avec du PE métallocène haute densité pour améliorer la résistance aux chocs et la ténacité." },
      { q: "Aspect trouble et faible brillance", a: "Les structures mono-PE ont souvent une brillance inférieure à celle des stratifiés PET. Solution : Utiliser des films spécialisés de PE coulé (CPE) à haute clarté ou appliquer des vernis externes recyclables à haute brillance." }
    ]
  },
  'zh-TW': {
    title: "5個常見的可回收單一材料 PE (Mono-PE) 問題（及解決方案）",
    points: [
      { q: "熱敏感性與窄封口溫度區間", a: "單一 PE 材料在封口刀下容易融化變形。解決方案：將縱向拉伸 PE (MDO-PE) 外層與低熔點茂金屬 PE (mPE) 封口層進行共擠，以加寬熱封溫度窗口。" },
      { q: "氧氣與水氣阻隔性不足", a: "純 PE 的滲透性高於 PET 或鋁箔。解決方案：共擠低於 5% 的 EVOH 阻隔層，或塗覆 Al2O3/SiOx 奈米塗層，以在 4 號 PE 回收體系中保持完全可回收性。" },
      { q: "剛性不足與袋身塌陷", a: "PE 材質天然偏軟，導致包裝袋在零售貨架上塌陷。解決方案：在外層使用定向拉伸 PE (MDO-PE/BOPE) 以增加抗張強度和結構剛性。" },
      { q: "抗穿刺與抗撕裂強度低", a: "單一 PE 層容易被有尖銳邊角的食品刺破。解決方案：在共擠工藝中將線性低密度聚乙烯 (LLDPE) 與高密度茂金屬 PE 混合，以增強抗衝擊強度和韌性。" },
      { q: "外觀霧度高與光澤度低", a: "Mono-PE 結構的光澤度通常低於傳統 PET 複合結構。解決方案：使用特製的高清晰流延 PE (CPE) 薄膜，或塗覆高光澤、可回收的外層光油。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: 'pain-points', translationKey: 'title' }
];

export const sectionsForAchieve = [
  { id: 'pain-points', translationKey: 'title' }
];

const RecyclableMonoPEPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { openCalendly } = useCalendly()
  const p = 'seoPages.pages.recyclableMonoPE'
  const currentLang = i18n.language || 'en';
  const tPain = translations[currentLang as keyof typeof translations] || translations.en;
  
  const getTranslationArray = <T = string,>(key: string): T[] => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? (val as T[]) : [];
  };

  const sections = [
    {
      id: 'infographic',
      title: t(`${p}.sections.glance.title`),
      icon: <Image className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-sm text-neutral-600">{t(`${p}.sections.glance.clickToEnlarge`)}</p>
          <div className="flex justify-center">
            <ClickableImage 
              src="/imgs/4-infograhic/recyclable.webp" 
              alt={t(`${p}.sections.glance.alt`)} 
              className="max-w-full md:max-w-2xl rounded-lg shadow-lg border border-neutral-200 cursor-pointer hover:shadow-xl transition"
              caption={t(`${p}.sections.glance.caption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          {/* Recycling Symbol Section */}
          <div className="flex items-center gap-6 bg-blue-50 p-4 rounded-lg border border-blue-200 my-4">
            <ClickableImage 
              src="/imgs/cert/logo-recycle-number-4-and-5.png" 
              alt={t(`${p}.sections.overview.symbol.alt`, 'Recyclable Symbol #4 LDPE and #5 PP')} 
              className="h-20 w-auto"
              caption={t(`${p}.sections.overview.symbol.caption`, 'Recycling Code #4 & #5')}
            />
            <div>
              <h4 className="font-semibold text-blue-800 mb-1">{t(`${p}.sections.overview.symbol.title`)}</h4>
              <p className="text-sm text-blue-700">{t(`${p}.sections.overview.symbol.desc`)}</p>
              <p className="text-xs text-blue-600 mt-2">
                <strong>{t('common.artworkUsage', 'Artwork Usage:')} </strong>
                {t(`${p}.sections.overview.symbol.artworkUsage`)}
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.overview.keyBenefits`)}</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              {getTranslationArray(`${p}.sections.overview.benefits`).map((b, i) => <li key={i}>✓ {b}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'how-it-works',
      title: t(`${p}.sections.howItWorks.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.howItWorks.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.howItWorks.evoh.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.evoh.desc`)}</p>
            </div>
            <div className="border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.howItWorks.pePe.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.pePe.desc`)}</p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.howItWorks.coatings.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.coatings.desc`)}</p>
            </div>
            <div className="border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.howItWorks.oriented.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.howItWorks.oriented.desc`)}</p>
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
            {getTranslationArray(`${p}.sections.applications.items`).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-sm text-blue-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'recycling',
      title: t(`${p}.sections.recycling.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.recycling.whereTitle`)}</h4>
            <ul className="space-y-2 text-sm">
              {getTranslationArray(`${p}.sections.recycling.options`).map((opt, i) => <li key={i}>✓ {opt}</li>)}
            </ul>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.recycling.note`)}
          </p>
        </div>
      )
    },
    // ========== Scenario (Industry Applications) ==========
    {
      id: 'industry-scenarios',
      title: t(`${p}.sections.scenarios.title`),
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">{t(`${p}.sections.scenarios.intro`)}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">{t(`${p}.sections.scenarios.food.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• {t(`${p}.sections.scenarios.food.snack`)}</li>
                <li>• {t(`${p}.sections.scenarios.food.pet`)}</li>
                <li>• {t(`${p}.sections.scenarios.food.frozen`)}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">{t(`${p}.sections.scenarios.food.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="h-6 w-6 text-green-600" />
                <h4 className="font-bold text-green-800">{t(`${p}.sections.scenarios.coffee.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {t(`${p}.sections.scenarios.coffee.roasters`)}</li>
                <li>• {t(`${p}.sections.scenarios.coffee.subs`)}</li>
                <li>• {t(`${p}.sections.scenarios.coffee.retail`)}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">{t(`${p}.sections.scenarios.coffee.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h4 className="font-bold text-purple-800">{t(`${p}.sections.scenarios.nonFood.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-purple-700">
                <li>• {t(`${p}.sections.scenarios.nonFood.care`)}</li>
                <li>• {t(`${p}.sections.scenarios.nonFood.detergent`)}</li>
                <li>• {t(`${p}.sections.scenarios.nonFood.ecom`)}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-purple-200">
                <span className="text-xs text-purple-600">{t(`${p}.sections.scenarios.nonFood.note`)}</span>
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
                <span className="text-xs font-semibold text-blue-600 uppercase">{t(`${p}.sections.scenarios.stories.usSnack.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.usSnack.desc`)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200">
                <span className="text-xs font-semibold text-green-600 uppercase">{t(`${p}.sections.scenarios.stories.euPet.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.euPet.desc`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Data (Market & Performance Data) ==========
    {
      id: 'market-data',
      title: t(`${p}.sections.marketData.title`),
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">95%</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.recyclingRate`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">9-12</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.shelfLife`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">#4</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.resinCode`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">∞</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.timesRecyclable`)}</p>
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
                    {getTranslationArray(`${p}.sections.marketData.headers`).map((head, i) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold text-neutral-700">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {getTranslationArray<string[]>(`${p}.sections.marketData.rows`).map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3">{row[1]}</td>
                      <td className="px-4 py-3">{row[2]}</td>
                      <td className="px-4 py-3">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">{t(`${p}.sections.marketData.impactTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">-80%</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.energy`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">-70%</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.co2`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-700">0</p>
                <p className="text-sm text-blue-600">{t(`${p}.sections.marketData.impact.landfill`)}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== Contrast (Material Comparison) ==========
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
                    {getTranslationArray(`${p}.sections.comparison.headers`).map((head, i) => (
                      <th key={i} className="px-4 py-3 text-center first:text-left font-semibold text-neutral-700">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {getTranslationArray<string[]>(`${p}.sections.comparison.rows`).map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-neutral-50' : ''}>
                      <td className="px-4 py-3 font-medium text-left">{row[0]}</td>
                      <td className="px-4 py-3 text-center">{row[1]}</td>
                      <td className="px-4 py-3 text-center">{row[2]}</td>
                      <td className="px-4 py-3 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💡 {t(`${p}.sections.comparison.decisionGuideTitle`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-700">{t(`${p}.sections.comparison.choosePE`)}</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  {getTranslationArray(`${p}.sections.comparison.pePoints`).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-700">{t(`${p}.sections.comparison.choosePP`)}</p>
                <ul className="mt-2 space-y-1 text-purple-600">
                  {getTranslationArray(`${p}.sections.comparison.ppPoints`).map((item, i) => (
                    <li key={i}>
                      {i === 2 ? (
                        <Link to="/materials/recyclable-mono-pp" className="underline">{item}</Link>
                      ) : (
                        `• ${item}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">{t(`${p}.sections.comparison.chooseCompostable`)}</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  {getTranslationArray(`${p}.sections.comparison.compostablePoints`).map((item, i) => (
                    <li key={i}>
                      {i === 2 ? (
                        <Link to="/materials/compostable" className="underline">{item}</Link>
                      ) : (
                        `• ${item}`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t(`${p}.sections.aiSearch.title`),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.aiSearch.intro`)}</p>
          <ul className="list-disc pl-6 space-y-2">
            {getTranslationArray(`${p}.sections.aiSearch.points`).map((pt, i) => {
              if (i === 2) {
                return (
                  <li key={i}>
                    <strong>{pt.split(' – ')[0]}</strong> –{' '}
                    <Link to="/store" className="text-primary-600 hover:underline">
                      {pt.split(' – ')[1]}
                    </Link>
                  </li>
                )
              }
              if (i === 3) {
                return (
                  <li key={i}>
                    <strong>{pt.split(' – ')[0]}</strong> –{' '}
                    <Link to="/materials/compostable" className="text-primary-600 hover:underline">
                      {pt.split(' – ')[1]}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={i}>
                  <strong>{pt.split(' – ')[0]}</strong> – {pt.split(' – ')[1]}
                </li>
              )
            })}
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.askTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {getTranslationArray(`${p}.sections.aiSearch.questions`).map((q, i) => (
                <li key={i}>• {q}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'Buyer Guide: Switching to Recyclable Mono-PE Packaging',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Mono-PE (single-material polyethylene) packaging represents the circular economy approach to flexible packaging.</strong> Unlike traditional multi-layer laminates that cannot be recycled, mono-PE structures use only PE materials throughout, making them compatible with existing PE recycling infrastructure. This matters because approximately 95% of flexible packaging historically ends up in landfill due to recycling incompatibility.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Trade-offs to Understand</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Recyclable vs Compostable:</strong> Recyclable mono-PE keeps materials in the economy (circular); compostable returns to earth. Choose based on your customer's disposal options.</li>
              <li>• <strong>Barrier limitations:</strong> Pure mono-PE has lower barrier than traditional laminates. Adding EVOH or specialized coatings improves barrier while maintaining recyclability.</li>
              <li>• <strong>Regional recycling access:</strong> PE recycling is widely available in the US and EU but varies by locality—check How2Recycle guidelines for your market.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">Checklist Before Ordering:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li><strong>Confirm shelf-life requirements</strong> – mono-PE with EVOH typically supports 6–12 months for dry products</li>
            <li><strong>Request barrier test reports</strong> – WVTR and OTR values for your specific product</li>
            <li><strong>Verify recycling claims</strong> – ask if the structure meets How2Recycle or local recycling standards</li>
            <li><strong>Test on your filling line</strong> – mono-PE may require heat-seal adjustments</li>
            <li><strong>Order samples first</strong> – we offer sample packs from 100 pieces</li>
          </ol>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> 13+ years of sustainable packaging expertise. Our mono-PE structures are designed for real-world recyclability, not just marketing claims. MOQ from 500 pieces for mono-PE. <Link to="/solutions/snack-brand-manager" className="text-green-600 hover:underline">See how snack brands transitioned to our recyclable pouches →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Success Stories: Brands Using Recyclable Mono-PE',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>See how brands have successfully switched to recyclable mono-PE packaging:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/industry/snacks-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Healthy Snack Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Transitioned from traditional multi-layer laminate to mono-PE with EVOH. Achieved 100% recyclable packaging while maintaining 9-month shelf life.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
            <Link to="/industry/pet-food" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Premium Pet Treats Company</h4>
              <p className="text-sm text-neutral-600 mt-1">Switched to recyclable mono-PE for their treat line. Added "Widely Recyclable" claim to packaging, improving shelf appeal.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Learn more →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Ready to make the switch? <Link to="/store" className="text-primary-600 hover:underline">Order recyclable mono-PE samples</Link> or <a href="https://calendly.com/30-min-free-packaging-consultancy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">book a free consultation</a> with our packaging experts.
          </p>
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
                src="/imgs/knowledge/recyclable-mono-pe-pain-points.jpg" 
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
  ]

  const faqs = [
    { question: t(`${p}.faq.q1`), answer: t(`${p}.faq.a1`) },
    { question: t(`${p}.faq.q2`), answer: t(`${p}.faq.a2`) },
    { question: t(`${p}.faq.q3`), answer: t(`${p}.faq.a3`) },
    { question: t(`${p}.faq.q4`), answer: t(`${p}.faq.a4`) }
  ]

  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: getTranslationArray(`${p}.table.headers`),
        rows: getTranslationArray<string[]>(`${p}.table.rows`)
      }
    }
  ]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.link1.title`), url: "/materials/recyclable-mono-pp", description: t(`${p}.relatedLinks.link1.description`) },
    { title: t(`${p}.relatedLinks.link2.title`), url: "/materials/bio-pe", description: t(`${p}.relatedLinks.link2.description`) },
    { title: t(`${p}.relatedLinks.link3.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.link3.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1e3a8a"
      title={t(`${p}.title`)}
      description={t(`${p}.description`)}
      keywords={[
        'mono-PE pouch',
        'recyclable pouch',
        'single material packaging',
        'PE recyclable',
        'sustainable flexible packaging',
        'mono material pouch',
        'recyclable stand up pouch',
        'polyethylene pouch'
      ]}
      canonicalUrl="https://achievepack.com/materials/recyclable-mono-pe"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_achievepack_mono_kitchen_8539724.webp"
      heroImageAlt="Recyclable mono-PE flexible packaging"
      introSummary={t(`${p}.introSummary`)}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default RecyclableMonoPEPage
