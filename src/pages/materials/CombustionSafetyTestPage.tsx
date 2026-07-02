import React from 'react'
import { 
  Flame, 
  AlertTriangle, 
  Leaf, 
  CheckCircle, 
  Clock, 
  Award, 
  Target, 
  Shield, 
  Calendar, 
  Sparkles, 
  ArrowLeftRight, 
  ShoppingBag, 
  Wind, 
  FileText, 
  HelpCircle, 
  Zap,
  Activity,
  Award as AwardIcon
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const translations = {
  en: {
    title: "5 Common Combustion Safety Test Problems (And Solutions)",
    items: [
      { problem: "Greenwashing & Counterfeit Film", solution: "Verify feedstock source instantly with a combustion test; genuine PLA burns with a sweet caramel odor, while PET emits toxic chemical fumes." },
      { problem: "Burn Test Safety Hazards", solution: "Use stainless steel tweezers to hold the film sample, conduct the test under a fume hood or outdoors, and keep water nearby." },
      { problem: "Severe Melting and Dripping", solution: "Observe the thermal reaction: genuine PLA forms a dry, brittle ash skeleton, whereas PET instantly melts into a dangerous liquid." },
      { problem: "Toxic Adhesive Contamination", solution: "Formulate a certified, non-toxic bio-adhesive using natural plant-based resins that burn cleanly without black soot." },
      { problem: "Starch-Plastic Blends Detection", solution: "Combine the ash crumble test (PLA ash turns to fine powder) with a high-temperature threshold test." }
    ]
  },
  es: {
    title: "5 Problemas Comunes de la Prueba de Seguridad de Combustión (Y Soluciones)",
    items: [
      { problem: "Greenwashing y Film Falso", solution: "Verifique el origen de la materia prima al instante con una prueba de combustión; el PLA genuino se quema con un olor dulce a caramelo, mientras que el PET emite gases químicos tóxicos." },
      { problem: "Riesgos de Seguridad en la Prueba", solution: "Use pinzas de acero inoxidable para sostener la muestra, realice la prueba bajo una campana extractora o al aire libre, y mantenga agua cerca." },
      { problem: "Derretimiento y Goteo Grave", solution: "Observe la reacción térmica: el PLA genuino forma un esqueleto de ceniza seca y quebradiza, mientras que el PET se derrite instantáneamente en un líquido peligroso." },
      { problem: "Contaminación por Adhesivo Tóxico", solution: "Formule un bioadhesivo certificado y no tóxico que utilice resinas naturales de origen vegetal que se quemen limpiamente sin hollín negro." },
      { problem: "Detección de Mezclas de Almidón y Plástico", solution: "Combine la prueba de desmoronamiento de cenizas (la ceniza de PLA se convierte en un polvo fino) con una prueba de umbral de alta temperatura." }
    ]
  },
  fr: {
    title: "5 Problèmes Courants du Test de Sécurité de Combustion (Et Solutions)",
    items: [
      { problem: "Greenwashing et Faux Film", solution: "Vérifiez instantanément la source de la matière première grâce à un test de combustion ; le vrai PLA brûle avec une odeur douce de caramel, tandis que le PET émet des fumées chimiques toxiques." },
      { problem: "Risques de Sécurité lors du Test", solution: "Utilisez des pincettes en acier inoxydable pour tenir l'échantillon de film, effectuez le test sous une hotte aspirante ou à l'extérieur, et gardez de l'eau à proximité." },
      { problem: "Fusion et Écoulement Gravissimes", solution: "Observez la réaction thermique : le vrai PLA forme un squelette de cendres sèches et cassantes, tandis que le PET fond instantanément en un liquide dangereux." },
      { problem: "Contamination par Adhésif Toxique", solution: "Formulez un bio-adhésif certifié et non toxique utilisant des résines végétales naturelles qui brûlent proprement sans suie noire." },
      { problem: "Détection de Mélanges Amidon-Plastique", solution: "Combinez le test d'effritement des cendres (les cendres de PLA se transforment en poudre fine) avec un test de seuil de température élevée." }
    ]
  },
  "zh-TW": {
    title: "5 個常見的燃燒安全測試問題（及其解決方案）",
    items: [
      { problem: "漂綠與假冒薄膜", solution: "通過燃燒測試立即驗證原料來源：真正的 PLA 燃燒時帶有甜美的焦糖味，而 PET 則釋放有毒化學煙霧。" },
      { problem: "燃燒測試安全隱患", solution: "使用不鏽鋼鑷子夾持薄膜樣品，在通風櫥或戶外通風良好處進行測試，並在旁準備滅火水源。" },
      { problem: "嚴重熔融與滴落危險", solution: "觀察熱反應特徵：真正的 PLA 會形成乾燥且易碎的炭灰骨架，而 PET 則會立即熔化成危險的液體滴落物。" },
      { problem: "有毒膠水殘留與污染", solution: "配製通過認證的無毒生質膠水，採用天然植物樹脂與增粘劑，燃燒時無黑煙且不留有害殘留物。" },
      { problem: "混配澱粉塑料的識別", solution: "結合炭灰粉碎測試（PLA 炭化邊緣可輕易捏碎成細粉）與控溫熱變形閾值測試進行多重驗證。" }
    ]
  }
};

export const sectionsForPouch = [
  { id: "combustion-problems", translationKey: "title" }
];

export const sectionsForAchieve = [
  { id: "combustion-problems", translationKey: "title" }
];

const CombustionSafetyTestPage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const trans = translations[currentLang as keyof typeof translations] || translations.en
  const p = 'seoPages.pages.combustionSafetyTest.achievePack'

  const sections = [
    {
      id: 'scenario-trigger',
      title: t(`${p}.sections.scenarioTrigger.title`, 'Is This Test For You?'),
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              {t(`${p}.sections.scenarioTrigger.intro`, 'With the rise of "greenwashing," many brands unknowingly purchase standard polyester (PET) or polypropylene (PP) plastic under the guise of "biodegradable" or "compostable" materials.')}
            </p>
            <p className="text-sm text-neutral-600 mb-4">
              {t(`${p}.sections.scenarioTrigger.desc`, 'The Combustion Safety Test is a simple, immediate, and high-fidelity laboratory verification method that you can perform in a controlled environment to immediately separate genuine biopolymer PLA from fossil-based synthetic plastics.')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-100 shadow-sm">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t(`${p}.sections.scenarioTrigger.cards.qa.badge`, 'Procurement & QA')}
                </span>
                <p className="font-semibold text-neutral-800 mt-2">
                  {t(`${p}.sections.scenarioTrigger.cards.qa.title`, 'Verify Supplier Claims')}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {t(`${p}.sections.scenarioTrigger.cards.qa.desc`, "Protect your brand's integrity before mass-producing custom printed stickers.")}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-100 shadow-sm">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t(`${p}.sections.scenarioTrigger.cards.dtc.badge`, 'DTC Brands')}
                </span>
                <p className="font-semibold text-neutral-800 mt-2">
                  {t(`${p}.sections.scenarioTrigger.cards.dtc.title`, 'Zero Microplastics')}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {t(`${p}.sections.scenarioTrigger.cards.dtc.desc`, 'Ensure your packaging degrades to organic soil without toxic residues.')}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-100 shadow-sm">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t(`${p}.sections.scenarioTrigger.cards.sustainability.badge`, 'Sustainability Officers')}
                </span>
                <p className="font-semibold text-neutral-800 mt-2">
                  {t(`${p}.sections.scenarioTrigger.cards.sustainability.title`, '14-Week Composting')}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {t(`${p}.sections.scenarioTrigger.cards.sustainability.desc`, 'Ensure standard-compliant breakdown (EN 13432 & ASTM D6400).')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'methodology',
      title: t(`${p}.sections.methodology.title`, 'The Science of the Combustion Safety Test'),
      icon: <Activity className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="leading-relaxed">
            {t(`${p}.sections.methodology.p1`, 'Plastics and plant-based biopolymers have radically different chemical architectures. Fossil fuel-based plastics are structured from long carbon chains with heavy additives, while Polylactic Acid (PLA) is synthesized from fermented plant starch (primarily corn dextrose).')}
          </p>
          <p className="leading-relaxed">
            {t(`${p}.sections.methodology.p2`, 'When exposed to an open flame, these distinct molecular structures react in highly specific, unforgeable ways. A standard combustion test evaluates three primary metrics:')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="border border-neutral-200 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <Wind className="h-5 w-5 text-primary-600" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">
                {t(`${p}.sections.methodology.metrics.aroma.title`, '1. Combustion Aroma')}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.methodology.metrics.aroma.desc`, 'Plants burn like wood or leaves. Synthetic plastics emit vaporized petroleum, producing a toxic, highly offensive chemical signature.')}
              </p>
            </div>
            <div className="border border-neutral-200 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <Flame className="h-5 w-5 text-primary-600" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">
                {t(`${p}.sections.methodology.metrics.flame.title`, '2. Flame Behavior')}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.methodology.metrics.flame.desc`, 'PLA burns with a clean, light yellow flame and steady combustion. PET curls back, melts instantly, and drips dangerous flaming droplets.')}
              </p>
            </div>
            <div className="border border-neutral-200 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-5 w-5 text-primary-600" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">
                {t(`${p}.sections.methodology.metrics.residual.title`, '3. Post-Burn Residual')}
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t(`${p}.sections.methodology.metrics.residual.desc`, 'PLA leaves a structurally solid, dry, and brittle ash edge that crushes to fine charcoal powder. PET hardens into a dense, solid, and glassy plastic bead.')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'comparison-details',
      title: t(`${p}.sections.comparisonDetails.title`, 'Combustion Behavior: PLA vs. PET Plastic'),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-base">
            {t(`${p}.sections.comparisonDetails.intro`, 'Below is the comprehensive comparison of material reactions during exposure to high temperature and flame.')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Compostable PLA Card */}
            <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/70 border border-emerald-200 p-6 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full -mr-8 -mt-8"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  {t(`${p}.sections.comparisonDetails.pla.title`, 'Compostable PLA Film')}
                </h3>
              </div>
              <p className="text-sm text-emerald-800 font-semibold mb-4 bg-emerald-100/50 inline-block px-3 py-1 rounded-full">
                {t(`${p}.sections.comparisonDetails.pla.badge`, 'Certified Compostable Materials & Bio-Adhesive')}
              </p>
              
              <ul className="space-y-3.5 mt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950">
                      {t(`${p}.sections.comparisonDetails.pla.items.odor.strong`, 'Mild Natural Odor:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pla.items.odor.span`, 'Burns cleanly with a pleasant, earthy scent resembling caramelized sugar, toasted corn, grass, or wood ash.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950">
                      {t(`${p}.sections.comparisonDetails.pla.items.ash.strong`, 'Stable Ash Integrity:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pla.items.ash.span`, 'The sticker body remains structurally solid and intact as a charcoal ash skeleton until fully extinguished.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950">
                      {t(`${p}.sections.comparisonDetails.pla.items.dripping.strong`, 'Zero Dangerous Dripping:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pla.items.dripping.span`, 'Does not undergo toxic melting or dripping behavior, ensuring high physical safety during burn testing.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950">
                      {t(`${p}.sections.comparisonDetails.pla.items.microplastics.strong`, 'Zero Microplastics:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pla.items.microplastics.span`, 'Breaks down completely in soil and industrial composting in ≤14 weeks without microplastics residue.')}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Standard PET Plastic Card */}
            <div className="bg-gradient-to-br from-rose-50/70 to-amber-50/70 border border-rose-200 p-6 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full -mr-8 -mt-8"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-rose-700" />
                </div>
                <h3 className="text-xl font-bold text-rose-950">
                  {t(`${p}.sections.comparisonDetails.pet.title`, 'Standard PET Plastic')}
                </h3>
              </div>
              <p className="text-sm text-rose-800 font-semibold mb-4 bg-rose-100/50 inline-block px-3 py-1 rounded-full">
                {t(`${p}.sections.comparisonDetails.pet.badge`, 'Fossil-Based Synthetic Polymer')}
              </p>

              <ul className="space-y-3.5 mt-2">
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-950">
                      {t(`${p}.sections.comparisonDetails.pet.items.odor.strong`, 'Highly Pungent Odor:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pet.items.odor.span`, 'Emits a highly pungent, chokingly acrid, and hazardous chemical smell characteristic of burnt synthetic plastics.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-950">
                      {t(`${p}.sections.comparisonDetails.pet.items.melting.strong`, 'Melting & Splattering:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pet.items.melting.span`, 'Melts incredibly fast and shrivels into a molten liquid pool, splattering during combustion.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-950">
                      {t(`${p}.sections.comparisonDetails.pet.items.dripping.strong`, 'Severe Toxic Dripping:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pet.items.dripping.span`, 'Drips hot, sticky, and flaming liquid polymer, which is highly dangerous and poses extreme contact burn risks.')}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-950">
                      {t(`${p}.sections.comparisonDetails.pet.items.harm.strong`, 'Permanent Environmental Harm:')}
                    </strong>
                    <span className="text-neutral-700 block text-sm mt-0.5">
                      {t(`${p}.sections.comparisonDetails.pet.items.harm.span`, 'Cannot biodegrade. Persists for 500+ years, fracturing into toxic microplastics that bioaccumulate in food chains.')}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'visual-evidence',
      title: t(`${p}.sections.visualEvidence.title`, 'Visual Verification: Combustion Test Infographic'),
      icon: <Sparkles className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            {t(`${p}.sections.visualEvidence.desc`, 'The graphic below showcases the physical differences during the combustion process. Notice the clean, stable, and ash-based edge on the left (AchievePack Eco-Material) compared to the rapid melting, curling, and toxic liquid dripping on the right (Standard PET Plastic).')}
          </p>

          <div className="max-w-2xl mx-auto border-4 border-white shadow-xl rounded-2xl overflow-hidden bg-neutral-100">
            <ClickableImage 
              src="/imgs/materials/combustion-safety-test.jpg" 
              alt={t(`${p}.sections.visualEvidence.imageAlt`, 'Combustion Safety Test: AchievePack PLA vs. Standard PET Plastic')}
              className="w-full h-auto object-cover cursor-pointer"
              caption={t(`${p}.sections.visualEvidence.imageCaption`, 'AchievePack Combustion Test Infographic. Left: Clean carbon-ash burn. Right: Molten PET dripping.')}
            />
          </div>

          <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 mt-6">
            <h4 className="font-bold text-neutral-900 mb-3">
              {t(`${p}.sections.visualEvidence.boxTitle`, 'Key Takeaways from the Lab Visuals:')}
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-600">
              <li>
                <strong className="text-neutral-950">
                  {t(`${p}.sections.visualEvidence.boxItems.ash.strong`, 'Ash Edge Stability:')}
                </strong>
                {t(`${p}.sections.visualEvidence.boxItems.ash.span`, ' The PLA-based clear film generates a stable black/gray carbonized edge when burnt. It does not drop down or run.')}
              </li>
              <li>
                <strong className="text-neutral-950">
                  {t(`${p}.sections.visualEvidence.boxItems.liquid.strong`, 'Liquid Droplet Threat:')}
                </strong>
                {t(`${p}.sections.visualEvidence.boxItems.liquid.span`, ' Standard PET plastic immediately converts to a running liquid drop state that can drop onto fabrics, paper, or skin, causing deep heat-sink burns.')}
              </li>
              <li>
                <strong className="text-neutral-950">
                  {t(`${p}.sections.visualEvidence.boxItems.scent.strong`, 'Natural Wood Scent vs. Pungent Benzene:')}
                </strong>
                {t(`${p}.sections.visualEvidence.boxItems.scent.span`, " PLA's gas emission is harmless CO₂ and trace water vapour with a wood ash aroma, whereas PET emits carcinogenic benzene vapors.")}
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'materials-breakdown',
      title: t(`${p}.sections.materialsBreakdown.title`, 'Biodegradable Material Stack & Bio-Adhesive Technology'),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="leading-relaxed">
            {t(`${p}.sections.materialsBreakdown.desc`, 'At Achieve Pack, our clear seal stickers are designed to offer the exact high-gloss transparency of standard BOPP/PET plastics while adhering to absolute compostability criteria.')}
          </p>
          <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-800">
                    {t(`${p}.sections.materialsBreakdown.table.headers.layer`, 'Layer')}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-800">
                    {t(`${p}.sections.materialsBreakdown.table.headers.composition`, 'Composition')}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-800">
                    {t(`${p}.sections.materialsBreakdown.table.headers.performance`, 'Composting Performance')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {t(`${p}.sections.materialsBreakdown.table.row1.layer`, '1. Film Base')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row1.composition`, 'Certified Compostable Clear PLA Film (100% plant dextrose)')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row1.performance`, 'Breaks down into water, CO₂ and biomass in ≤14 weeks')}
                  </td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {t(`${p}.sections.materialsBreakdown.table.row2.layer`, '2. Adhesive Layer')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row2.composition`, 'Patent-pending Bio-Adhesive (natural resins & plant tackifiers)')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row2.performance`, '100% biodegradable, non-toxic, zero microplastics residue')}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {t(`${p}.sections.materialsBreakdown.table.row3.layer`, '3. Release Liner')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row3.composition`, 'FSC Certified Supercalendered Glassine Paper (Silicone-free option)')}
                  </td>
                  <td className="px-4 py-3">
                    {t(`${p}.sections.materialsBreakdown.table.row3.performance`, 'Fully recyclable in paper streams or home-compostable')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex flex-col md:flex-row gap-4 items-center mt-6">
            <Award className="w-12 h-12 text-emerald-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-emerald-950 mb-1">
                {t(`${p}.sections.materialsBreakdown.boxTitle`, 'Looking for a real-world application?')}
              </h4>
              <p className="text-sm text-emerald-800 leading-relaxed">
                {t(`${p}.sections.materialsBreakdown.boxText`, 'This exact material stack is deployed in our popular ')}
                <Link to="/store/product/eco-pla-sealing-sticker" className="underline font-bold text-emerald-950 hover:text-emerald-700">
                  {t(`${p}.sections.materialsBreakdown.boxLinkText`, 'Premium PLA Biodegradable Clear Sealing Sticker')}
                </Link>
                {t(`${p}.sections.materialsBreakdown.boxTextEnd`, '. It provides brands with crystal-clear high clarity, heavy adhesion to envelopes and product boxes, and fully certified compostability.')}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'step-by-step',
      title: t(`${p}.sections.stepByStep.title`, 'Lab Guide: How to Safely Conduct a Combustion Test'),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="leading-relaxed">
            {t(`${p}.sections.stepByStep.desc`, 'If you wish to run a validation test on clear film samples inside your own facility, follow this strict safety protocol to ensure clean data and zero physical danger:')}
          </p>

          <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 mb-6 flex gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-amber-900">
                {t(`${p}.sections.stepByStep.warning.title`, 'Safety First!')}
              </h4>
              <p className="text-sm text-amber-800 mt-1">
                {t(`${p}.sections.stepByStep.warning.desc`, 'Because synthetic plastics (PET, PP) melt and drip sticky, highly burning droplets, NEVER hold the sample directly with your bare fingers. Vapors from fossil-based materials are toxic—conduct the test only under a fume hood or in a highly ventilated open space.')}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm flex-shrink-0 mt-0.5">1</div>
              <div>
                <h5 className="font-bold text-neutral-900">
                  {t(`${p}.sections.stepByStep.steps.step1.title`, 'Prepare Laboratory Tools')}
                </h5>
                <p className="text-sm text-neutral-600 mt-1">
                  {t(`${p}.sections.stepByStep.steps.step1.desc`, 'Gather a pair of steel laboratory tweezers (long-nosed pliers), a non-flammable metal tray or ceramic dish, a safety lighter, and a glass of water for emergency extinguishing.')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm flex-shrink-0 mt-0.5">2</div>
              <div>
                <h5 className="font-bold text-neutral-900">
                  {t(`${p}.sections.stepByStep.steps.step2.title`, 'Secure the Film Sample')}
                </h5>
                <p className="text-sm text-neutral-600 mt-1">
                  {t(`${p}.sections.stepByStep.steps.step2.desc`, 'Cut a small piece of the clear sticker (approx. 2cm x 5cm) and peel it off its liner. Clamp it firmly at one extreme end with the steel tweezers, holding the tweezers horizontally.')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm flex-shrink-0 mt-0.5">3</div>
              <div>
                <h5 className="font-bold text-neutral-900">
                  {t(`${p}.sections.stepByStep.steps.step3.title`, 'Apply the Flame')}
                </h5>
                <p className="text-sm text-neutral-600 mt-1">
                  {t(`${p}.sections.stepByStep.steps.step3.desc`, 'Position the sample directly over the ceramic tray. Introduce the flame of your lighter to the bottom tip of the clear film. Observe how it takes fire and pull the flame source away.')}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-700 text-sm flex-shrink-0 mt-0.5">4</div>
              <div>
                <h5 className="font-bold text-neutral-900">
                  {t(`${p}.sections.stepByStep.steps.step4.title`, 'Analyze the Odor, Flame, and Ash')}
                </h5>
                <p className="text-sm text-neutral-600 mt-1">
                  {t(`${p}.sections.stepByStep.steps.step4.desc`, "Waft the air gently toward your nose. If it smells clean and woodsy, it's PLA. If it melts, drops flame, and releases black soot with a highly offensive rubber-chemical stench, it's PET.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: t(`${p}.sections.aiSearch.title`, 'Evaluating Material Authentication with AI Search'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-900 mb-2">
              {t(`${p}.sections.aiSearch.boxTitle`, '💡 Evaluating Materials Using AI Assistants?')}
            </h4>
            <p className="text-sm text-neutral-600 mb-4">
              {t(`${p}.sections.aiSearch.boxDesc`, 'Copy and paste these precise search queries into AI models (like Gemini, ChatGPT, or Claude) to cross-reference and verify biodegradable material testing standards:')}
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="bg-white p-3 rounded-lg border border-neutral-100 shadow-sm flex items-start gap-2">
                <span className="text-primary-600 font-bold">Q:</span>
                <span>
                  {t(`${p}.sections.aiSearch.questions.0`, '"What does burning PLA biopolymer smell like compared to burning standard PET plastic?"')}
                </span>
              </li>
              <li className="bg-white p-3 rounded-lg border border-neutral-100 shadow-sm flex items-start gap-2">
                <span className="text-primary-600 font-bold">Q:</span>
                <span>
                  {t(`${p}.sections.aiSearch.questions.1`, '"Why does Polylactic Acid (PLA) leave a brittle black ash during burn tests while PET drops hot liquid plastic?"')}
                </span>
              </li>
              <li className="bg-white p-3 rounded-lg border border-neutral-100 shadow-sm flex items-start gap-2">
                <span className="text-primary-600 font-bold">Q:</span>
                <span>
                  {t(`${p}.sections.aiSearch.questions.2`, '"Are bio-adhesives used on PLA clear sealing stickers certified biodegradable under ASTM D6400?"')}
                </span>
              </li>
              <li className="bg-white p-3 rounded-lg border border-neutral-100 shadow-sm flex items-start gap-2">
                <span className="text-primary-600 font-bold">Q:</span>
                <span>
                  {t(`${p}.sections.aiSearch.questions.3`, '"How do I distinguish compostable packaging films from conventional plastic using a laboratory heat or burn test?"')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'combustion-problems',
      title: trans.title,
      icon: <AlertTriangle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {trans.items.map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                  <AlertTriangle className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-neutral-900">{item.problem}</h5>
                    <p className="text-sm text-neutral-600 mt-1">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/imgs/knowledge/combustion-safety-test-pain-points.jpg" 
                alt="Combustion Safety Test Pain Points" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.0.question`, 'Is burning PLA toxic to inhale?'),
      answer: t(`${p}.faqs.0.answer`, 'Unlike synthetic plastics like PET or PVC which release toxic, highly carcinogenic vapors (such as benzene and acid gases), burning pure PLA primarily yields carbon dioxide (CO₂) and water vapour. It releases a mild, non-offensive plant/wood ash scent. However, as with all combustion events, we recommend performing tests in a well-ventilated space.')
    },
    {
      question: t(`${p}.faqs.1.question`, 'Why does PLA form carbon ash while PET melts into plastic beads?'),
      answer: t(`${p}.faqs.1.answer`, 'PLA is synthesized from plant carbohydrates. When it burns, the carbon-oxygen-hydrogen structures convert directly into ash, resembling burning paper or grass. PET is an engineered petroleum derivative designed for crystalline durability; upon heating, it undergoes a rapid thermal transition back into its liquid polymer form, dropping molten flame beads.')
    },
    {
      question: t(`${p}.faqs.2.question`, 'Is the adhesive on your PLA stickers compostable as well?'),
      answer: t(`${p}.faqs.2.answer`, 'Yes, absolutely. A sticker is only as compostable as its weakest link. AchievePack clear stickers use a certified, custom-formulated bio-adhesive. It decomposes in <=14 weeks, leaves zero microplastics, and meets all strict international composting protocols (EN 13432 and ASTM D6400).')
    },
    {
      question: t(`${p}.faqs.3.question`, 'Will PLA sealing stickers melt on my package in hot cargo shipping?'),
      answer: t(`${p}.faqs.3.answer`, 'No. While PLA has a lower melting point than PET, it remains fully stable up to 55°C (131°F). Standard cargo containers rarely exceed 45°C. AchievePack stickers are engineered with excellent heat resistance, holding strong integrity in transit while maintaining rapid breakdown when exposed to industrial compost facilities.')
    }
  ]

  const relatedLinks = [
    {
      title: t(`${p}.relatedLinks.0.title`, 'Premium PLA Biodegradable Clear Sealing Sticker'),
      url: '/store/product/eco-pla-sealing-sticker',
      description: t(`${p}.relatedLinks.0.description`, 'The real-world application of this test: certified clear, plant-based stickers that break down safely.')
    },
    {
      title: t(`${p}.relatedLinks.1.title`, 'Industrial Compostable Packaging Guide'),
      url: '/materials/industrial-compostable',
      description: t(`${p}.relatedLinks.1.description`, 'Deep dive into industrial composting protocols, temperature systems (58°C+), and BPI guidelines.')
    },
    {
      title: t(`${p}.relatedLinks.2.title`, 'Home Compostable Materials'),
      url: '/materials/home-compostable',
      description: t(`${p}.relatedLinks.2.description`, 'Learn about materials that biodegrade in backyard garden bins at ambient temperatures.')
    }
  ]

  return (
    <SEOPageLayout 
      heroBgColor="#0f3d23" // Elegant, deep organic forest green HSL tailoring
      title={t(`${p}.seo.title`, "Combustion Safety Test: Compostable PLA vs. PET Plastic")}
      description={t(`${p}.seo.description`, "Verify authentic biopolymer packaging using the Combustion Safety Test. Compare plant-based PLA (clean grass-ash scent, stable ash) vs. standard PET plastic (toxic dripping, acrid chemical smell).")}
      keywords={t(`${p}.seo.keywords`, { returnObjects: true }) as string[]}
      canonicalUrl="https://achievepack.com/materials/combustion-safety-test"
      heroTitle={t(`${p}.seo.heroTitle`, "Combustion Safety Test: PLA vs. PET")}
      heroSubtitle={t(`${p}.seo.heroSubtitle`, "Verify authentic compostable biopolymers using the unforgeable laboratory burn test. Plant-based clear film vs. synthetic fossil-fuel plastics.")}
      heroImage="/imgs/materials/combustion-safety-test.jpg"
      heroImageAlt="Combustion Safety Test comparison infographic between PLA and PET"
      introSummary={t(`${p}.seo.introSummary`, "Protect your brand's environmental claims from greenwashing. A simple combustion safety test immediately distinguishes plant-based Compostable PLA (which burns cleanly with a mild grass-wood scent) from Standard PET Plastic (which melts rapidly with severe toxic dripping and hazardous chemical fumes).")}
      sections={sections}
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`, "Ready to Elevate Your Packaging Integrity?")}
      ctaDescription={t(`${p}.ctaDescription`, "Deploy certified compostable materials that stand up to the combustion test. Swap your standard fossil-fuel plastic stickers for AchievePack's Premium plant-based biopolymers today.")}
    />
  )
}

export default CombustionSafetyTestPage
