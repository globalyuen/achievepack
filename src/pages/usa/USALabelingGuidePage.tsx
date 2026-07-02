import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FileCheck, AlertTriangle, CheckCircle, Shield, MapPin, MessageCircle, BookOpen, Scale, Target, Calendar, Download, Mail, XCircle } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const localTranslations = {
  en: {
    problemsTitle: "5 Common USA Labeling Problems (And Solutions)",
    prob1: "1. Vague 'Recyclable' Claims",
    prob1Desc: "Problem: General recyclable claims without specifying the material can trigger penalties under laws like California SB 343. Solution: Use precise material specifications and standardized icons (e.g., How2Recycle).",
    prob2: "2. Misleading 'Biodegradable' Text",
    prob2Desc: "Problem: Unverified biodegradable claims lead to greenwashing lawsuits. Solution: Implement certified ASTM D6400 / D6868 logos and use specific 'Industrial Compostable' caveats.",
    prob3: "3. FDA Nutrition Panel Errors",
    prob3Desc: "Problem: Incorrect font sizes or missing allergen info on food packaging. Solution: Use automated templates that enforce FDA spacing and dynamically bold allergens.",
    prob4: "4. Ink Fading and Smudging",
    prob4Desc: "Problem: Essential barcodes and texts fade during transport. Solution: Apply UV-resistant, eco-friendly soy inks combined with durable top coats.",
    prob5: "5. Incorrect Warning Placement",
    prob5Desc: "Problem: Mandatory Prop 65 warnings hidden or misplaced causing recalls. Solution: Enforce precision dieline reviews with strict safe zones before printing.",
    imageAlt: "Common USA labeling problems and solutions illustration"
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Etiquetado en EE. UU. (Y Soluciones)",
    prob1: "1. Afirmaciones Vagas de 'Reciclable'",
    prob1Desc: "Problema: Afirmaciones generales sin especificar el material pueden desencadenar multas (ej. California SB 343). Solución: Use especificaciones precisas de material e íconos estandarizados.",
    prob2: "2. Texto 'Biodegradable' Engañoso",
    prob2Desc: "Problema: Afirmaciones no verificadas llevan a demandas por lavado verde. Solución: Implemente logotipos certificados ASTM D6400 / D6868 y advertencias de 'Compostaje Industrial'.",
    prob3: "3. Errores en el Panel Nutricional de la FDA",
    prob3Desc: "Problema: Tamaños de fuente incorrectos o información de alérgenos faltante. Solución: Use plantillas automatizadas con espaciado de la FDA y alérgenos en negrita.",
    prob4: "4. Decoloración y Manchado de Tinta",
    prob4Desc: "Problema: Códigos de barras y textos esenciales se desvanecen. Solución: Aplique tintas de soya ecológicas resistentes a los rayos UV con capas superiores duraderas.",
    prob5: "5. Colocación Incorrecta de Advertencias",
    prob5Desc: "Problema: Advertencias obligatorias de la Prop 65 ocultas o mal ubicadas. Solución: Exija revisiones precisas de las líneas de troquel con zonas seguras estrictas.",
    imageAlt: "Ilustración de problemas y soluciones comunes de etiquetado en EE. UU."
  },
  fr: {
    problemsTitle: "5 Problèmes Courants d'Étiquetage aux États-Unis (Et Solutions)",
    prob1: "1. Déclarations Vagues sur la Recyclabilité",
    prob1Desc: "Problème: Les affirmations générales sans spécifier le matériau entraînent des sanctions (ex: SB 343). Solution: Spécifications précises des matériaux et icônes normalisées.",
    prob2: "2. Texte 'Biodégradable' Trompeur",
    prob2Desc: "Problème: Les allégations non vérifiées mènent à des poursuites. Solution: Mettez en œuvre les logos certifiés ASTM D6400 / D6868 avec des avertissements 'Compostage Industriel'.",
    prob3: "3. Erreurs du Panneau Nutritionnel FDA",
    prob3Desc: "Problème: Tailles de police incorrectes ou allergènes manquants. Solution: Modèles automatisés avec espacement FDA et allergènes en gras dynamiques.",
    prob4: "4. Décoloration et Bavures d'Encre",
    prob4Desc: "Problème: Les codes-barres essentiels s'effacent. Solution: Appliquez des encres de soja écologiques résistantes aux UV et des couches de finition durables.",
    prob5: "5. Mauvais Emplacement des Avertissements",
    prob5Desc: "Problème: Avertissements Prop 65 mal placés provoquant des rappels. Solution: Examens de découpe de précision avec des zones de sécurité strictes avant l'impression.",
    imageAlt: "Illustration des problèmes et solutions courants d'étiquetage aux États-Unis"
  },
  'zh-TW': {
    problemsTitle: "5 個常見的美國標籤問題（與解決方案）",
    prob1: "1. 模糊的「可回收」聲明",
    prob1Desc: "問題：未具體說明材質的通用回收聲明可能引發處罰（如加州 SB 343）。解決方案：使用精確的材料規格和標準化圖標（如 How2Recycle）。",
    prob2: "2. 誤導性的「可生物降解」文字",
    prob2Desc: "問題：未經證實的聲明會導致漂綠訴訟。解決方案：使用經過認證的 ASTM D6400 / D6868 標誌，並明確標示「僅限工業堆肥」。",
    prob3: "3. FDA 營養標籤錯誤",
    prob3Desc: "問題：食品包裝上的字體大小不正確或缺少過敏原資訊。解決方案：使用自動化模板以強制執行 FDA 間距規則，並動態加粗過敏原。",
    prob4: "4. 油墨褪色和污損",
    prob4Desc: "問題：重要的條碼和文字在運輸過程中褪色。解決方案：應用抗紫外線的環保大豆油墨和耐用的頂層塗層。",
    prob5: "5. 警告標語位置不正確",
    prob5Desc: "問題：強制性的 65 號提案警告被隱藏或位置錯誤，導致產品召回。解決方案：在印刷前，嚴格審查刀模線並設定安全區域。",
    imageAlt: "美國常見標籤問題與解決方案插圖"
  }
}

const USALabelingGuidePage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.usaLabelingGuide'
  const { openCalendly } = useCalendly()

  const currentLang = (i18n.language || 'en') as keyof typeof localTranslations
  const l = localTranslations[currentLang] || localTranslations.en

  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <p className="text-lg font-medium text-neutral-900 mb-4">
            {t(`${p}.sections.scenarioTrigger.introText`)}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card1Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card1Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card2Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card2Desc`)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.scenarioTrigger.card3Title`)}</h4>
              <p className="text-sm text-neutral-600 mt-1">{t(`${p}.sections.scenarioTrigger.card3Desc`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.descStrong`)}</strong> {t(`${p}.sections.overview.descText`)}
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {t(`${p}.sections.overview.amberTitle`)}
            </h4>
            <p className="text-sm text-amber-700">
              {t(`${p}.sections.overview.amberText`)}
            </p>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.intro`)}
          </p>
          
          {/* FDA Labeling Checklist Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp" 
              alt={t(`${p}.sections.overview.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.overview.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'california',
      title: t(`${p}.sections.california.title`),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.california.intro`)}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.california.sbTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.california.sbItem1`)}</li>
              <li>{t(`${p}.sections.california.sbItem2`)}</li>
              <li>{t(`${p}.sections.california.sbItem3`)}</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
            <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.california.abTitle`)}</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>{t(`${p}.sections.california.abItem1`)}</li>
              <li>{t(`${p}.sections.california.abItem2`)}</li>
              <li>{t(`${p}.sections.california.abItem3`)}</li>
              <li>{t(`${p}.sections.california.abItem4`)}</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.california.recTitle`)}</h4>
            <ul className="text-sm space-y-1">
              <li>{t(`${p}.sections.california.rec1`)}</li>
              <li>{t(`${p}.sections.california.rec2`)}</li>
              <li>{t(`${p}.sections.california.rec3`)}</li>
              <li>{t(`${p}.sections.california.rec4`)}</li>
              <li>{t(`${p}.sections.california.rec5`)}</li>
            </ul>
          </div>
          
          {/* Digital Labeling Strategy Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/label/a_digital_labeling_strategy_0282148.webp" 
              alt={t(`${p}.sections.california.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.california.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'washington',
      title: t(`${p}.sections.washington.title`),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.washington.intro`)}</p>
          
          <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 mt-4">
            <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.washington.cardTitle`)}</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>{t(`${p}.sections.washington.cardItem1`)}</li>
              <li>{t(`${p}.sections.washington.cardItem2`)}</li>
              <li>{t(`${p}.sections.washington.cardItem3`)}</li>
              <li>{t(`${p}.sections.washington.cardItem4`)}</li>
            </ul>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.washington.recTitle`)}</h4>
            <ul className="text-sm space-y-1">
              <li>{t(`${p}.sections.washington.rec1`)}</li>
              <li>{t(`${p}.sections.washington.rec2`)}</li>
              <li>{t(`${p}.sections.washington.rec3`)}</li>
              <li>{t(`${p}.sections.washington.rec4`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'colorado',
      title: t(`${p}.sections.colorado.title`),
      icon: <MapPin className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.colorado.intro`)}</p>
          
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mt-4">
            <h4 className="font-semibold text-purple-800 mb-2">{t(`${p}.sections.colorado.cardTitle`)}</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>{t(`${p}.sections.colorado.cardItem1`)}</li>
              <li>{t(`${p}.sections.colorado.cardItem2`)}</li>
              <li>{t(`${p}.sections.colorado.cardItem3`)}</li>
              <li>{t(`${p}.sections.colorado.cardItem4`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'other-states',
      title: t(`${p}.sections.otherStates.title`),
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.otherStates.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.otherStates.card1Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.otherStates.card1Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.otherStates.card2Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.otherStates.card2Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.otherStates.card3Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.otherStates.card3Desc`)}</p>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg">
              <h4 className="font-semibold text-neutral-800 mb-2">{t(`${p}.sections.otherStates.card4Title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.otherStates.card4Desc`)}</p>
            </div>
          </div>
          
          <p className="text-sm mt-4 text-neutral-600">
            <strong>{t('common.note', 'Note:')}</strong> {t(`${p}.sections.otherStates.evolveText`)}
          </p>
        </div>
      )
    },
    {
      id: 'design-guidance',
      title: t(`${p}.sections.designGuidance.title`),
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.designGuidance.intro`)}</p>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              {t(`${p}.sections.designGuidance.doTitle`)}
            </h4>
            <ul className="text-sm text-green-700 space-y-2">
              <li>{t(`${p}.sections.designGuidance.do1`)}</li>
              <li>{t(`${p}.sections.designGuidance.do2`)}</li>
              <li>{t(`${p}.sections.designGuidance.do3`)}</li>
              <li>{t(`${p}.sections.designGuidance.do4`)}</li>
              <li>{t(`${p}.sections.designGuidance.do5`)}</li>
              <li>{t(`${p}.sections.designGuidance.do6`)}</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              {t(`${p}.sections.designGuidance.dontTitle`)}
            </h4>
            <ul className="text-sm text-red-700 space-y-2">
              <li>{t(`${p}.sections.designGuidance.dont1`)}</li>
              <li>{t(`${p}.sections.designGuidance.dont2`)}</li>
              <li>{t(`${p}.sections.designGuidance.dont3`)}</li>
              <li>{t(`${p}.sections.designGuidance.dont4`)}</li>
              <li>{t(`${p}.sections.designGuidance.dont5`)}</li>
              <li>{t(`${p}.sections.designGuidance.dont6`)}</li>
            </ul>
          </div>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <p className="text-sm">
              <strong>{t(`${p}.sections.designGuidance.helpStrong`)}</strong>
              {t(`${p}.sections.designGuidance.helpText`)}
              <Link to="/store" className="text-primary-600 hover:underline font-semibold">{t(`${p}.sections.designGuidance.helpLink`)}</Link>
            </p>
          </div>
          
          {/* Label Design Best Practices Image */}
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/seo-photos/usa/label/a_labeling_design_best_practices_0279886.webp" 
              alt={t(`${p}.sections.designGuidance.imgAlt`)} 
              className="w-full rounded-lg shadow-md"
              caption={t(`${p}.sections.designGuidance.imgCaption`)}
            />
          </div>
        </div>
      )
    },
    {
      id: 'achieve-pack-help',
      title: t(`${p}.sections.achievePackHelp.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.achievePackHelp.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.achievePackHelp.card1Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.achievePackHelp.card1Item1`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card1Item2`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card1Item3`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card1Item4`)}</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.achievePackHelp.card2Title`)}</h4>
              <ul className="text-sm space-y-1">
                <li>{t(`${p}.sections.achievePackHelp.card2Item1`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card2Item2`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card2Item3`)}</li>
                <li>{t(`${p}.sections.achievePackHelp.card2Item4`)}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition">
              {t(`${p}.sections.achievePackHelp.ctaLinkText`)}
            </Link>
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
            <li>
              {t(`${p}.sections.aiSearch.factor1`).includes(' – ') ? (
                <>
                  <strong>{t(`${p}.sections.aiSearch.factor1`).split(' – ')[0]}</strong> – {t(`${p}.sections.aiSearch.factor1`).split(' – ')[1]}
                </>
              ) : (
                t(`${p}.sections.aiSearch.factor1`)
              )}
            </li>
            <li>
              {t(`${p}.sections.aiSearch.factor2`).includes(' – ') ? (
                <>
                  <strong>{t(`${p}.sections.aiSearch.factor2`).split(' – ')[0]}</strong> – {t(`${p}.sections.aiSearch.factor2`).split(' – ')[1]}
                </>
              ) : (
                t(`${p}.sections.aiSearch.factor2`)
              )}
            </li>
            <li>
              {t(`${p}.sections.aiSearch.factor3`).includes(' – ') ? (
                <>
                  <strong>{t(`${p}.sections.aiSearch.factor3`).split(' – ')[0]}</strong> – {t(`${p}.sections.aiSearch.factor3`).split(' – ')[1]}
                </>
              ) : (
                t(`${p}.sections.aiSearch.factor3`)
              )}
            </li>
            <li>
              <strong>{t(`${p}.sections.aiSearch.factor4Strong`)}</strong> – <Link to="/store" className="text-primary-600 hover:underline">{t(`${p}.sections.aiSearch.factor4Link`)}</Link>
            </li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.aiSearch.aiTitle`)}</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>{t(`${p}.sections.aiSearch.aiItem1`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem2`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem3`)}</li>
              <li>{t(`${p}.sections.aiSearch.aiItem4`)}</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'risk-hedge',
      title: t(`${p}.sections.riskHedge.title`),
      icon: <Shield className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q1`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a1`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q2`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a2`)}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q3`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a3`)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.riskHedge.q4`)}</h4>
                  <p className="text-sm text-neutral-600">{t(`${p}.sections.riskHedge.a4`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'common-problems',
      title: l.problemsTitle,
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{l.prob1}</h4>
                  <p className="text-sm text-neutral-700">{l.prob1Desc}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{l.prob2}</h4>
                  <p className="text-sm text-neutral-700">{l.prob2Desc}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{l.prob3}</h4>
                  <p className="text-sm text-neutral-700">{l.prob3Desc}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{l.prob4}</h4>
                  <p className="text-sm text-neutral-700">{l.prob4Desc}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-neutral-900">{l.prob5}</h4>
                  <p className="text-sm text-neutral-700">{l.prob5Desc}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <ClickableImage 
              src="/imgs/knowledge/usa-labeling-pain-points.jpg" 
              alt={l.imageAlt}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: t(`${p}.sections.decisionCta.title`),
      icon: <FileCheck className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">{t(`${p}.sections.decisionCta.heading`)}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card1Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card1Desc`)}</p>
              <button onClick={openCalendly} className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                {t(`${p}.sections.decisionCta.card1Button`)}
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card2Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card2Desc`)}</p>
              <a href="mailto:ryan@achievepack.com?subject=Labeling Compliance Review" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                {t(`${p}.sections.decisionCta.card2Button`)}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg text-center">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">{t(`${p}.sections.decisionCta.card3Title`)}</h4>
              <p className="text-sm text-white/80 mb-4">{t(`${p}.sections.decisionCta.card3Desc`)}</p>
              <Link to="/contact" className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                {t(`${p}.sections.decisionCta.card3Button`)}
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = t(`${p}.faqs`, { returnObjects: true }) as { question: string; answer: string }[]

  const relatedLinks = [
    { title: t(`${p}.relatedLinks.0.title`), url: "/usa/compostable-packaging", description: t(`${p}.relatedLinks.0.description`) },
    { title: t(`${p}.relatedLinks.1.title`), url: "/store", description: t(`${p}.relatedLinks.1.description`) },
    { title: t(`${p}.relatedLinks.2.title`), url: "/materials/industrial-compostable", description: t(`${p}.relatedLinks.2.description`) },
    { title: t(`${p}.relatedLinks.3.title`), url: "/materials/home-compostable", description: t(`${p}.relatedLinks.3.description`) },
    { title: t(`${p}.relatedLinks.4.title`), url: "/materials/compostable", description: t(`${p}.relatedLinks.4.description`) }
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.seo.title`)}
      description={t(`${p}.seo.description`)}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/usa/labeling-guide"
      heroTitle={t(`${p}.seo.heroTitle`)}
      heroSubtitle={t(`${p}.seo.heroSubtitle`)}
      heroImage="/imgs/seo-photos/usa/label/a_fda_labeling_compliance_checklist_8653787.webp"
      heroImageAlt={t(`${p}.seo.heroImageAlt`)}
      introSummary={t(`${p}.seo.introSummary`)}
      sections={sections}
      faqs={faqs}
      schemaType="Article"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.seo.ctaTitle`)}
      ctaDescription={t(`${p}.seo.ctaDescription`)}
      ctaButtonText={t(`${p}.seo.ctaButtonText`)}
    />
  )
}

export default USALabelingGuidePage
