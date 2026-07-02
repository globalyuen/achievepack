import React from 'react';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Award, CheckCircle, Package, Layers, Factory, TrendingUp, BarChart3, ArrowLeftRight, Building2, ShoppingBag, Coffee, Sparkles, Globe, Recycle, AlertTriangle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const KraftHighBarrierPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const p = 'seoPages.pages.kraftHighBarrier';
  const currentLang = i18n.language || 'en';

  const painPointsData = {
    en: {
      title: "5 Common Kraft High Barrier Problems (And Solutions)",
      points: [
        { q: "Foil Cracking (Pinholing)", a: "Flex cracking during transport compromises barrier. Solution: Use specialized nylon or PET reinforcing layers." },
        { q: "Weak Seal Strength", a: "Foil layer prevents heat from reaching seal layer easily. Solution: Optimize heat sealing profile and use high-performance LLDPE." },
        { q: "Delamination", a: "Adhesive failure between kraft and foil. Solution: Use high-bond, temperature-resistant adhesives and proper curing time." },
        { q: "Kraft Paper Wrinkling", a: "Moisture absorption by paper causes wrinkles. Solution: Apply a thin protective matte coating over the kraft paper." },
        { q: "Inconsistent Oxygen Barrier", a: "Micro-leaks at gussets. Solution: Advanced pouch converting equipment with precise tension control and specialized gusset sealing jaws." }
      ]
    },
    es: {
      title: "5 Problemas Comunes de la Barrera Alta Kraft (y Soluciones)",
      points: [
        { q: "Agrietamiento de la lámina (Pinholing)", a: "El agrietamiento por flexión durante el transporte compromete la barrera. Solución: Utilizar capas de refuerzo especializadas de nailon o PET." },
        { q: "Resistencia de sellado débil", a: "La capa de lámina evita que el calor llegue fácilmente a la capa de sellado. Solución: Optimizar el perfil de sellado por calor y usar LLDPE de alto rendimiento." },
        { q: "Delaminación", a: "Falla del adhesivo entre el papel kraft y la lámina. Solución: Usar adhesivos de alta adherencia y resistentes a la temperatura y un tiempo de curado adecuado." },
        { q: "Arrugado del papel Kraft", a: "La absorción de humedad por el papel causa arrugas. Solución: Aplicar un recubrimiento mate protector delgado sobre el papel kraft." },
        { q: "Barrera de oxígeno inconsistente", a: "Microfugas en los fuelles. Solución: Equipos de conversión de bolsas avanzados con control de tensión preciso y mordazas de sellado de fuelles especializadas." }
      ]
    },
    fr: {
      title: "5 Problèmes Communs de la Haute Barrière Kraft (et Solutions)",
      points: [
        { q: "Fissuration de l'aluminium (trous d'épingle)", a: "La fissuration par flexion pendant le transport compromet la barrière. Solution : Utiliser des couches de renfort spécialisées en nylon ou PET." },
        { q: "Faible résistance du scellage", a: "La couche d'aluminium empêche la chaleur d'atteindre facilement la couche de scellage. Solution : Optimiser le profil de thermoscellage et utiliser du LLDPE haute performance." },
        { q: "Délamination", a: "Défaillance de l'adhésif entre le papier kraft et l'aluminium. Solution : Utiliser des adhésifs à haute adhérence et résistants à la température ainsi qu'un temps de durcissement approprié." },
        { q: "Froissement du papier Kraft", a: "L'absorption d'humidité par le papier provoque des plis. Solution : Appliquer un fin revêtement mat protecteur sur le papier kraft." },
        { q: "Barrière à l'oxygène incohérente", a: "Micro-fuites aux soufflets. Solution : Équipement de conversion de sachets avancé avec contrôle de tension précis et mâchoires de scellage de soufflets spécialisées." }
      ]
    },
    'zh-TW': {
      title: "5個常見的牛皮紙高阻隔包裝問題（及解決方案）",
      points: [
        { q: "鋁箔破裂（針孔）", a: "運輸過程中的彎折破裂會破壞阻隔性。解決方案：使用專門的尼龍或PET增強層。" },
        { q: "封口強度弱", a: "鋁箔層阻礙熱量輕易到達封口層。解決方案：優化熱封曲線並使用高性能LLDPE。" },
        { q: "脫層", a: "牛皮紙和鋁箔之間的黏合劑失效。解決方案：使用高黏著力、耐高溫的黏合劑和適當的固化時間。" },
        { q: "牛皮紙起皺", a: "紙張吸收水分導致起皺。解決方案：在牛皮紙上塗覆一層薄的保護性霧面塗層。" },
        { q: "氧氣阻隔不穩定", a: "側翼的微漏。解決方案：採用先進的製袋設備，配備精確的張力控制和專門的側翼封口夾。" }
      ]
    }
  };

  const tPain = painPointsData[currentLang as keyof typeof painPointsData] || painPointsData.en;

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
                <li>✓ {t(`${p}.sections.advantages.bestForPoints.5`)}</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.advantages.considerationsTitle`)}</h4>
              <ul className="text-sm space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.advantages.considerationsPoints.0`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.1`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.2`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.3`)}</li>
                <li>• {t(`${p}.sections.advantages.considerationsPoints.4`)}</li>
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
                <h4 className="font-bold text-green-800">{t(`${p}.sections.scenarios.nutra.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-green-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.nutra.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.nutra.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.nutra.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-green-200">
                <span className="text-xs text-green-600">{t(`${p}.sections.scenarios.nutra.note`)}</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-blue-800">{t(`${p}.sections.scenarios.specialty.title`)}</h4>
              </div>
              <ul className="text-sm space-y-2 text-blue-700">
                <li>• {renderBullet(t(`${p}.sections.scenarios.specialty.item1`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.specialty.item2`))}</li>
                <li>• {renderBullet(t(`${p}.sections.scenarios.specialty.item3`))}</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-blue-200">
                <span className="text-xs text-blue-600">{t(`${p}.sections.scenarios.specialty.note`)}</span>
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
                <span className="text-xs font-semibold text-green-600 uppercase">{t(`${p}.sections.scenarios.stories.probiotic.label`)}</span>
                <p className="text-sm text-neutral-700 mt-2">{t(`${p}.sections.scenarios.stories.probiotic.desc`)}</p>
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
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.mvtr.val`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.mvtr.lbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-xl text-center">
              <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.otr.val`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.otr.lbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-xl text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.shelf.val`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.shelf.lbl`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-xl text-center">
              <Recycle className="h-8 w-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{t(`${p}.sections.marketData.metrics.foil.val`)}</p>
              <p className="text-sm opacity-90">{t(`${p}.sections.marketData.metrics.foil.lbl`)}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <div className="bg-neutral-100 px-4 py-3 border-b">
              <h4 className="font-bold text-neutral-900">{t(`${p}.sections.marketData.table.title`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.marketData.table.headers.0`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-amber-700">{t(`${p}.sections.marketData.table.headers.1`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-700">{t(`${p}.sections.marketData.table.headers.2`)}</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-700">{t(`${p}.sections.marketData.table.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.table.rows.0.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.0.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.0.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.table.rows.1.0`)}</td>
                    <td className="px-4 py-3 text-amber-600">{t(`${p}.sections.marketData.table.rows.1.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.1.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.table.rows.2.0`)}</td>
                    <td className="px-4 py-3 text-amber-600">{t(`${p}.sections.marketData.table.rows.2.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.2.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.2.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.table.rows.3.0`)}</td>
                    <td className="px-4 py-3 text-amber-600">{t(`${p}.sections.marketData.table.rows.3.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.3.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.3.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.marketData.table.rows.4.0`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.4.1`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.4.2`)}</td>
                    <td className="px-4 py-3">{t(`${p}.sections.marketData.table.rows.4.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-4">{t(`${p}.sections.marketData.benefits.title`)}</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">{t(`${p}.sections.marketData.benefits.item1.val`)}</p>
                <p className="text-sm text-amber-600">{t(`${p}.sections.marketData.benefits.item1.lbl`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">{t(`${p}.sections.marketData.benefits.item2.val`)}</p>
                <p className="text-sm text-amber-600">{t(`${p}.sections.marketData.benefits.item2.lbl`)}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-700">{t(`${p}.sections.marketData.benefits.item3.val`)}</p>
                <p className="text-sm text-amber-600">{t(`${p}.sections.marketData.benefits.item3.lbl`)}</p>
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
              <h4 className="font-bold text-white text-center">{t(`${p}.sections.comparison.table.title`)}</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">{t(`${p}.sections.comparison.table.headers.0`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-amber-700">{t(`${p}.sections.comparison.table.headers.1`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-blue-700">{t(`${p}.sections.comparison.table.headers.2`)}</th>
                    <th className="px-4 py-3 text-center font-semibold text-green-700">{t(`${p}.sections.comparison.table.headers.3`)}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.table.rows.0.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.0.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.0.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.0.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.table.rows.1.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.1.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.1.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.1.3`)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.table.rows.2.0`)}</td>
                    <td className="px-4 py-3 text-center text-amber-600">{t(`${p}.sections.comparison.table.rows.2.1`)}</td>
                    <td className="px-4 py-3 text-center text-amber-600">{t(`${p}.sections.comparison.table.rows.2.2`)}</td>
                    <td className="px-4 py-3 text-center text-green-600">{t(`${p}.sections.comparison.table.rows.2.3`)}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">{t(`${p}.sections.comparison.table.rows.3.0`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.3.1`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.3.2`)}</td>
                    <td className="px-4 py-3 text-center">{t(`${p}.sections.comparison.table.rows.3.3`)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">{t(`${p}.sections.comparison.guide.title`)}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-amber-700">{t(`${p}.sections.comparison.guide.high.title`)}</p>
                <ul className="mt-2 space-y-1 text-amber-600">
                  <li>• {t(`${p}.sections.comparison.guide.high.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.guide.high.point2`)}</li>
                  <li>• {t(`${p}.sections.comparison.guide.high.point3`)}</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-700">{t(`${p}.sections.comparison.guide.medium.title`)}</p>
                <ul className="mt-2 space-y-1 text-blue-600">
                  <li>• {t(`${p}.sections.comparison.guide.medium.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.guide.medium.point2`)}</li>
                  <li>• <Link to="/materials/kraft-medium-barrier" className="underline">{t(`${p}.sections.comparison.guide.medium.linkText`)}</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-green-700">{t(`${p}.sections.comparison.guide.low.title`)}</p>
                <ul className="mt-2 space-y-1 text-green-600">
                  <li>• {t(`${p}.sections.comparison.guide.low.point1`)}</li>
                  <li>• {t(`${p}.sections.comparison.guide.low.point2`)}</li>
                  <li>• <Link to="/materials/kraft-low-barrier" className="underline">{t(`${p}.sections.comparison.guide.low.linkText`)}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'quality',
      title: t(`${p}.sections.quality.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.quality.intro`)}</p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{t(`${p}.sections.quality.badges.fda.name`)}</div>
              <p className="text-xs text-blue-700">{t(`${p}.sections.quality.badges.fda.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{t(`${p}.sections.quality.badges.brc.name`)}</div>
              <p className="text-xs text-green-700">{t(`${p}.sections.quality.badges.brc.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{t(`${p}.sections.quality.badges.iso.name`)}</div>
              <p className="text-xs text-purple-700">{t(`${p}.sections.quality.badges.iso.desc`)}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200 text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">{t(`${p}.sections.quality.badges.haccp.name`)}</div>
              <p className="text-xs text-amber-700">{t(`${p}.sections.quality.badges.haccp.desc`)}</p>
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
                src="/imgs/knowledge/kraft-high-barrier-pain-points.jpg" 
                alt={tPain.title}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              {tPain.points.map((pt, idx) => (
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
        'kraft high barrier packaging',
        'aluminum kraft pouches',
        'long shelf life packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/kraft-high-barrier"
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Kraft high barrier pouches with aluminum foil for long shelf life products"
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

export default KraftHighBarrierPage;
