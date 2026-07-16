import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Factory, Building2, Leaf } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    "title": "Digital Product Passport Packaging | Smart Tracing for Eco-Brands",
    "description": "Prepare for EU PPWR with our Digital Product Passport Packaging. Integrated QR codes, NFC tags, and blockchain tracing for full transparency.",
    "heroTitle": "Digital Product Passport Packaging",
    "empathyHook": "Are you struggling to keep up with the incoming EU Packaging and Packaging Waste Regulation (PPWR)? Consumers and regulators alike are demanding 100% transparency. With our Digital Product Passport (DPP) packaging, you can turn compliance into a competitive advantage, proving your sustainability claims with a simple scan.",
    "point1Title": "Automated Compliance",
    "point1Desc": "Navigating EU and US recycling regulations is complex.",
    "point1Sol": "Integrated QR codes link directly to certified material data and disposal instructions.",
    "point2Title": "Counterfeit Prevention",
    "point2Desc": "High-value products are often targeted by counterfeiters.",
    "point2Sol": "Unique serialized QR or NFC tags verify product authenticity instantly.",
    "point3Title": "Supply Chain Transparency",
    "point3Desc": "Consumers distrust vague 'eco-friendly' claims.",
    "point3Sol": "Blockchain-backed tracing shows the journey from raw material to finished pouch.",
    "point4Title": "Consumer Engagement",
    "point4Desc": "Static packaging limits your ability to interact with buyers post-purchase.",
    "point4Sol": "Dynamic landing pages allow you to update marketing content, recipes, or promotions without changing the physical package.",
    "point5Title": "Lifecycle Tracking",
    "point5Desc": "Proving EPR (Extended Producer Responsibility) targets are met is difficult.",
    "point5Sol": "Data collection tracks recycling rates and consumer engagement to report back to regulators.",
    "compTitle": "Why Choose Our DPP Integration?",
    "compDesc": "We don't just print a QR code. We integrate a full digital ecosystem directly into your sustainable flexible packaging.",
    "faq1Q": "What is a Digital Product Passport (DPP)?",
    "faq1A": "A DPP is a digital record that provides information about a product's origin, materials, environmental impact, and end-of-life disposal, accessible via a scannable code on the packaging.",
    "faq2Q": "Do I need special equipment to scan these codes?",
    "faq2A": "No. The QR codes and NFC tags we integrate can be scanned natively by any modern smartphone camera without the need for a special app.",
    "faq3Q": "Can I update the information after the packaging is printed?",
    "faq3A": "Yes! The codes use dynamic links, meaning you can update the destination URL and content at any time through your dashboard."
},
  'zh-tw': {
    "title": "數位產品護照包裝 | 環保品牌的智能追溯",
    "description": "使用我們的數位產品護照包裝為歐盟 PPWR 做好準備。整合 QR Code、NFC 標籤和區塊鏈追溯，實現全面透明度。",
    "heroTitle": "數位產品護照包裝 (DPP)",
    "empathyHook": "您是否正在為即將實施的歐盟包裝和包裝廢棄物法規 (PPWR) 感到苦惱？消費者和監管機構都要求 100% 的透明度。透過我們的數位產品護照 (DPP) 包裝，您可以將合規性轉化為競爭優勢，只需輕鬆一掃即可證明您的永續發展主張。",
    "point1Title": "自動化合規",
    "point1Desc": "應對歐盟和美國的回收法規非常複雜。",
    "point1Sol": "整合的 QR Code 直接連結到經過認證的材料數據和處置說明。",
    "point2Title": "防偽保護",
    "point2Desc": "高價值產品經常成為仿冒者的目標。",
    "point2Sol": "獨特的序列化 QR 或 NFC 標籤可立即驗證產品的真實性。",
    "point3Title": "供應鏈透明度",
    "point3Desc": "消費者不信任模糊的「環保」聲明。",
    "point3Sol": "區塊鏈支援的追溯技術展示了從原材料到成品包裝袋的完整旅程。",
    "point4Title": "消費者互動",
    "point4Desc": "靜態包裝限制了您在購買後與買家互動的能力。",
    "point4Sol": "動態登陸頁面可讓您更新行銷內容、食譜或促銷活動，而無需更改物理包裝。",
    "point5Title": "生命週期追蹤",
    "point5Desc": "證明已達到 EPR (生產者延伸責任) 目標非常困難。",
    "point5Sol": "數據收集可追蹤回收率和消費者互動情況，以便向監管機構報告。",
    "compTitle": "為什麼選擇我們的 DPP 整合方案？",
    "compDesc": "我們不只是列印 QR Code。我們將完整的數位生態系統直接整合到您的永續軟包裝中。",
    "faq1Q": "什麼是數位產品護照 (DPP)？",
    "faq1A": "DPP 是一份數位記錄，提供有關產品來源、材料、環境影響和報廢處置的資訊，可透過掃描包裝上的代碼獲取。",
    "faq2Q": "我需要特殊設備來掃描這些代碼嗎？",
    "faq2A": "不需要。我們整合的 QR Code 和 NFC 標籤可以使用任何現代智慧型手機相機直接掃描，無需特殊應用程式。",
    "faq3Q": "我可以在包裝列印後更新資訊嗎？",
    "faq3A": "可以！代碼使用動態連結，這意味著您可以隨時透過儀表板更新目標網址和內容。"
},
  'zh-cn': {}, ko: {}, ja: {}, de: {}, es: {
    "title": "Embalaje con Pasaporte Digital de Producto | Rastreo Inteligente para Marcas Ecológicas",
    "description": "Prepárese para el PPWR de la UE con nuestro embalaje con pasaporte digital de producto. Códigos QR integrados, etiquetas NFC y rastreo por cadena de bloques para total transparencia.",
    "heroTitle": "Embalaje con Pasaporte Digital de Producto",
    "empathyHook": "¿Tiene dificultades para mantenerse al día con el próximo Reglamento sobre envases y residuos de envases de la UE (PPWR)? Los consumidores y reguladores exigen un 100% de transparencia. Con nuestro embalaje de Pasaporte Digital de Producto (DPP), puede convertir el cumplimiento en una ventaja competitiva, demostrando sus afirmaciones de sostenibilidad con un simple escaneo.",
    "point1Title": "Cumplimiento Automatizado",
    "point1Desc": "Navegar por las normativas de reciclaje de la UE y EE. UU. es complejo.",
    "point1Sol": "Los códigos QR integrados enlazan directamente a datos de materiales certificados e instrucciones de eliminación.",
    "point2Title": "Prevención de Falsificaciones",
    "point2Desc": "Los productos de alto valor suelen ser el objetivo de los falsificadores.",
    "point2Sol": "Las etiquetas NFC o códigos QR serializados únicos verifican la autenticidad del producto al instante.",
    "point3Title": "Transparencia de la Cadena de Suministro",
    "point3Desc": "Los consumidores desconfían de las afirmaciones vagas de ser 'ecológico'.",
    "point3Sol": "El rastreo respaldado por blockchain muestra el viaje desde la materia prima hasta la bolsa terminada.",
    "point4Title": "Participación del Consumidor",
    "point4Desc": "El embalaje estático limita su capacidad de interactuar con los compradores después de la compra.",
    "point4Sol": "Las páginas de destino dinámicas le permiten actualizar el contenido de marketing, recetas o promociones sin cambiar el paquete físico.",
    "point5Title": "Seguimiento del Ciclo de Vida",
    "point5Desc": "Demostrar que se cumplen los objetivos de Responsabilidad Extendida del Productor (EPR) es difícil.",
    "point5Sol": "La recolección de datos rastrea las tasas de reciclaje y la participación del consumidor para informar a los reguladores.",
    "compTitle": "¿Por Qué Elegir Nuestra Integración DPP?",
    "compDesc": "No solo imprimimos un código QR. Integramos un ecosistema digital completo directamente en su embalaje flexible sostenible.",
    "faq1Q": "¿Qué es un Pasaporte Digital de Producto (DPP)?",
    "faq1A": "Un DPP es un registro digital que proporciona información sobre el origen, materiales, impacto ambiental y eliminación al final de la vida útil de un producto, accesible a través de un código escaneable en el embalaje.",
    "faq2Q": "¿Necesito equipo especial para escanear estos códigos?",
    "faq2A": "No. Los códigos QR y las etiquetas NFC que integramos pueden ser escaneados nativamente por la cámara de cualquier teléfono inteligente moderno sin necesidad de una aplicación especial.",
    "faq3Q": "¿Puedo actualizar la información después de que el empaque esté impreso?",
    "faq3A": "¡Sí! Los códigos utilizan enlaces dinámicos, lo que significa que puede actualizar la URL de destino y el contenido en cualquier momento a través de su panel de control."
}, fr: {
    "title": "Emballage Passeport Produit Numérique | Suivi Intelligent pour Marques Éco-responsables",
    "description": "Préparez-vous au PPWR de l'UE avec notre emballage Passeport Produit Numérique. Codes QR intégrés, étiquettes NFC et suivi blockchain pour une transparence totale.",
    "heroTitle": "Emballage Passeport Produit Numérique",
    "empathyHook": "Avez-vous du mal à suivre le futur Règlement européen sur les emballages et les déchets d'emballages (PPWR) ? Les consommateurs comme les régulateurs exigent 100% de transparence. Avec notre emballage Passeport Produit Numérique (DPP), vous pouvez transformer la conformité en un avantage concurrentiel, en prouvant vos allégations de durabilité d'un simple scan.",
    "point1Title": "Conformité Automatisée",
    "point1Desc": "Naviguer dans les réglementations de recyclage de l'UE et des États-Unis est complexe.",
    "point1Sol": "Les codes QR intégrés renvoient directement aux données de matériaux certifiés et aux instructions d'élimination.",
    "point2Title": "Prévention de la Contrefaçon",
    "point2Desc": "Les produits de grande valeur sont souvent ciblés par les contrefacteurs.",
    "point2Sol": "Les étiquettes NFC ou codes QR sérialisés uniques vérifient instantanément l'authenticité du produit.",
    "point3Title": "Transparence de la Chaîne d'Approvisionnement",
    "point3Desc": "Les consommateurs se méfient des vagues affirmations « écologiques ».",
    "point3Sol": "Le suivi soutenu par la blockchain montre le parcours depuis la matière première jusqu'au sachet fini.",
    "point4Title": "Engagement des Consommateurs",
    "point4Desc": "L'emballage statique limite votre capacité à interagir avec les acheteurs après l'achat.",
    "point4Sol": "Les pages de destination dynamiques vous permettent de mettre à jour le contenu marketing, les recettes ou les promotions sans changer l'emballage physique.",
    "point5Title": "Suivi du Cycle de Vie",
    "point5Desc": "Prouver que les objectifs de Responsabilité Élargie du Producteur (REP) sont atteints est difficile.",
    "point5Sol": "La collecte de données suit les taux de recyclage et l'engagement des consommateurs pour faire rapport aux régulateurs.",
    "compTitle": "Pourquoi Choisir Notre Intégration DPP ?",
    "compDesc": "Nous ne nous contentons pas d'imprimer un code QR. Nous intégrons un écosystème numérique complet directement dans votre emballage flexible durable.",
    "faq1Q": "Qu'est-ce qu'un Passeport Produit Numérique (DPP) ?",
    "faq1A": "Un DPP est un dossier numérique qui fournit des informations sur l'origine d'un produit, ses matériaux, son impact environnemental et son élimination en fin de vie, accessible via un code scannable sur l'emballage.",
    "faq2Q": "Ai-je besoin d'un équipement spécial pour scanner ces codes ?",
    "faq2A": "Non. Les codes QR et les étiquettes NFC que nous intégrons peuvent être scannés nativement par n'importe quel appareil photo de smartphone moderne sans avoir besoin d'une application spéciale.",
    "faq3Q": "Puis-je mettre à jour les informations après l'impression de l'emballage ?",
    "faq3A": "Oui ! Les codes utilisent des liens dynamiques, ce qui signifie que vous pouvez mettre à jour l'URL de destination et le contenu à tout moment via votre tableau de bord."
}, pt: {}, th: {}, vi: {}, ms: {}, ar: {}
};

export default function DigitalProductPassportPackagingPage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const currentLangLower = currentLang.toLowerCase();
  const tLocalRaw = (localTranslations as any)[currentLangLower] || localTranslations['zh-tw']; // fallback just in case
  const tLocal: any = (tLocalRaw && Object.keys(tLocalRaw).length > 0) ? tLocalRaw : localTranslations.en;
  const isPouchDomain = getDomain() === 'pouch';

  return (
    <SEOPageLayout
        title={tLocal.title}
        description={tLocal.description}
    >
      <Helmet>
        <title>{tLocal.title}</title>
        <meta name="description" content={tLocal.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Technical Engineering Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {tLocal.heroTitle}
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {tLocal.empathyHook}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Pain Points Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">5 Manufacturing Pain Points & Engineering Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: tLocal.point1Title, desc: tLocal.point1Desc, sol: tLocal.point1Sol, icon: Factory },
              { title: tLocal.point2Title, desc: tLocal.point2Desc, sol: tLocal.point2Sol, icon: ShieldCheck },
              { title: tLocal.point3Title, desc: tLocal.point3Desc, sol: tLocal.point3Sol, icon: Building2 },
              { title: tLocal.point4Title, desc: tLocal.point4Desc, sol: tLocal.point4Sol, icon: Leaf },
              { title: tLocal.point5Title, desc: tLocal.point5Desc, sol: tLocal.point5Sol, icon: Factory }
            ].map((point, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-neutral-700" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{point.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{point.desc}</p>
                <div className={`p-3 rounded-lg ${isPouchDomain ? 'bg-[#D4FF00]/10 border border-[#D4FF00]/20' : 'bg-primary-50 border border-primary-100'}`}>
                  <p className={`text-sm font-medium ${isPouchDomain ? 'text-neutral-900' : 'text-primary-900'}`}>
                    <span className="block text-xs uppercase tracking-wider opacity-70 mb-1">Solution</span>
                    {point.sol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-20 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">{tLocal.compTitle}</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl">{tLocal.compDesc}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="p-4 rounded-tl-lg font-semibold">Parameter</th>
                  <th className="p-4 font-semibold border-l border-neutral-700">Standard Approach</th>
                  <th className="p-4 rounded-tr-lg font-semibold border-l border-neutral-700">Achieve Pack Engineered</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Material Integrity</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High failure rate under stress</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Zero-failure structural mapping</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 font-medium text-neutral-900">Compliance</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">Often misses localized FDA/EU requirements</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">100% Guaranteed Certification</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-neutral-900">Unit Cost Impact</td>
                  <td className="p-4 text-neutral-600 border-l border-neutral-200">High waste yields expensive per-unit cost</td>
                  <td className="p-4 text-green-700 font-medium border-l border-neutral-200 bg-green-50/50">Optimized layout reduces material waste by 14%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Technical FAQ</h2>
          <div className="space-y-4">
            {[
              { q: tLocal.faq1Q, a: tLocal.faq1A },
              { q: tLocal.faq2Q, a: tLocal.faq2A },
              { q: tLocal.faq3Q, a: tLocal.faq3A }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <summary className="p-6 font-semibold text-lg cursor-pointer marker:text-transparent flex justify-between items-center hover:bg-neutral-50 transition-colors">
                  {faq.q}
                  <span className="text-neutral-400 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-neutral-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Ryan's Profile */}
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-10 text-white max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img src="/imgs/ryan-profile.jpg" alt="Ryan - Chief Packaging Engineer" className="w-32 h-32 rounded-full object-cover border-4 border-neutral-800" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Expert Engineering Advice?</h3>
              <p className="text-neutral-400 mb-6 max-w-xl">
                I'm Ryan, Chief Packaging Engineer at Achieve Pack. I specialize in resolving chronic packaging failures and optimizing for high-speed automated filling lines.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:ryan@achievepack.com" className="px-6 py-3 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors">
                  Email ryan@achievepack.com
                </a>
                <a href="https://wa.me/8613437812971" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-neutral-700 font-bold rounded-lg hover:bg-neutral-800 transition-colors">
                  WhatsApp +86 134 3781 2971
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SEOPageLayout>
  );
}
