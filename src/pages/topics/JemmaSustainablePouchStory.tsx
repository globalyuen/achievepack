import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';
import { getDomain } from '../../utils/domain';

const localTranslations = {
  en: {
    title: "Jemma Sustainable Pouch Story",
    desc: "Comprehensive guide and case study on Jemma Sustainable Pouch Story.",
    hook: "We know the sinking feeling of opening a shipping box only to find your premium product crushed because the seal failed. You didn't spend months perfecting your recipe just to lose customers over cheap, unreliable packaging.",
    pain1_title: "Seal Integrity Failure",
    pain1_desc: "Use a minimum 12mm seal width and ensure temperature calibration during VFFS running.",
    pain2_title: "Color Shift on Matte",
    pain2_desc: "Matte varnish absorbs light differently. Use CMYK profile offset or switch to matte lamination.",
    pain3_title: "Oxygen Transmission Rate",
    pain3_desc: "Maintain OTR &lt; 0.1 cc/m2/day using ALOX or EVOH high-barrier coatings.",
    pain4_title: "Puncture Resistance",
    pain4_desc: "Increase nylon (BOPA) thickness to 15 microns for sharp objects.",
    pain5_title: "Printing Registration",
    pain5_desc: "Keep 3mm bleed margin and avoid complex overlapping small text to prevent blur.",
    notebook: "In my 14 years in packaging design, I've seen countless brands fail because they underestimated the importance of proper barrier testing. When dealing with Jemma Sustainable Pouch Story, always test the OTR in actual humidity conditions, not just dry lab states. — Ryan Wong, Co-Founder",
    faq1_q: "How does Jemma Sustainable Pouch Story impact shelf life?",
    faq1_a: "By providing structural integrity and optimized barrier layers, Jemma Sustainable Pouch Story extends shelf life up to 12-18 months.",
    faq2_q: "Is it compatible with automatic filling?",
    faq2_a: "Yes, it is designed for high-speed VFFS and rotary filling lines."
  },
  es: {
    title: "Jemma Sustainable Pouch Story (ES)",
    desc: "Guía completa para Jemma Sustainable Pouch Story en envases modernos.",
    hook: "Conocemos la sensación de hundimiento al abrir una caja de envío y encontrar su producto premium aplastado porque el sello falló.",
    pain1_title: "Fallo de Integridad del Sello",
    pain1_desc: "Utilice un ancho de sello mínimo de 12 mm y asegure la calibración de temperatura.",
    pain2_title: "Cambio de Color en Mate",
    pain2_desc: "El barniz mate absorbe la luz de manera diferente. Utilice laminación mate.",
    pain3_title: "Tasa de Transmisión de Oxígeno",
    pain3_desc: "Mantenga OTR &lt; 0.1 cc/m2/día usando recubrimientos de alta barrera ALOX.",
    pain4_title: "Resistencia a la Perforación",
    pain4_desc: "Aumente el grosor de nylon (BOPA) a 15 micrones.",
    pain5_title: "Registro de Impresión",
    pain5_desc: "Mantenga un margen de sangrado de 3 mm y evite textos pequeños superpuestos.",
    notebook: "En mis 14 años en diseño de envases, he visto innumerables marcas fallar porque subestimaron las pruebas de barrera. — Ryan Wong",
    faq1_q: "¿Cómo afecta Jemma Sustainable Pouch Story a la vida útil?",
    faq1_a: "Al proporcionar integridad estructural, extiende la vida útil hasta 12-18 meses.",
    faq2_q: "¿Es compatible con llenado automático?",
    faq2_a: "Sí, está diseñado para líneas de llenado rotativas de alta velocidad."
  },
  fr: {
    title: "Jemma Sustainable Pouch Story (FR)",
    desc: "Guide complet pour Jemma Sustainable Pouch Story dans l'emballage moderne.",
    hook: "Nous connaissons le sentiment de naufrage en ouvrant une boîte d'expédition pour trouver votre produit premium écrasé parce que le sceau a échoué.",
    pain1_title: "Échec de l'intégrité du sceau",
    pain1_desc: "Utilisez une largeur de joint minimale de 12 mm et assurez l'étalonnage de la température.",
    pain2_title: "Changement de couleur sur mat",
    pain2_desc: "Le vernis mat absorbe la lumière différemment. Utilisez une stratification mate.",
    pain3_title: "Taux de transmission d'oxygène",
    pain3_desc: "Maintenez l'OTR &lt; 0.1 cc/m2/jour en utilisant des revêtements haute barrière ALOX.",
    pain4_title: "Résistance à la perforation",
    pain4_desc: "Augmentez l'épaisseur du nylon (BOPA) à 15 microns.",
    pain5_title: "Enregistrement d'impression",
    pain5_desc: "Gardez une marge de fond perdu de 3 mm et évitez les petits textes.",
    notebook: "Au cours de mes 14 années dans la conception d'emballages, j'ai vu d'innombrables marques échouer parce qu'elles sous-estimaient les tests de barrière. — Ryan Wong",
    faq1_q: "Comment Jemma Sustainable Pouch Story affecte-t-il la durée de conservation?",
    faq1_a: "En fournissant une intégrité structurelle, il prolonge la durée de conservation de 12 à 18 mois.",
    faq2_q: "Est-ce compatible avec le remplissage automatique?",
    faq2_a: "Oui, il est conçu pour les lignes de remplissage rotativas à grande vitesse."
  },
  'zh-tw': {
    title: "Jemma Sustainable Pouch Story (ZH)",
    desc: "現代包裝的Jemma Sustainable Pouch Story綜合指南。",
    hook: "我們知道打開運輸箱時發現您的優質產品因為密封失敗而被壓碎的沉重感。您沒有花幾個月時間完善配方，只是為了因廉價包裝流失客戶。",
    pain1_title: "密封完整性失敗",
    pain1_desc: "使用至少12mm的密封寬度並在VFFS運行期間確保溫度校準。",
    pain2_title: "啞光顏色偏移",
    pain2_desc: "啞光清漆吸收光線的方式不同。使用CMYK配置文件偏移或切換到啞光層壓。",
    pain3_title: "氧氣傳輸率",
    pain3_desc: "使用ALOX或EVOH高阻隔塗層將OTR保持在 &lt; 0.1 cc/m2/day。",
    pain4_title: "抗穿刺性",
    pain4_desc: "對於尖銳物體，將尼龍(BOPA)厚度增加到15微米。",
    pain5_title: "印刷套準",
    pain5_desc: "保留3mm的出血邊緣，避免複雜的重疊小文字以防止模糊。",
    notebook: "在我14年的包裝設計生涯中，我看到無數品牌因為低估了適當阻隔測試的重要性而失敗。 — Ryan Wong, 聯合創始人",
    faq1_q: "Jemma Sustainable Pouch Story如何影響保質期？",
    faq1_a: "通過提供結構完整性和優化的阻隔層，可將保質期延長至12-18個月。",
    faq2_q: "它與自動灌裝兼容嗎？",
    faq2_a: "是的，它專為高速VFFS和旋轉灌裝線而設計。"
  }
};

export default function JemmaSustainablePouchStory({ language = 'en' }: { language?: 'en' | 'es' | 'fr' | 'zh-tw' }) {
  const t = localTranslations[language] || localTranslations.en;
  const isPouchDomain = getDomain() === 'pouch';

  return (
    <SEOPageLayout>
      <Helmet>
        <title>{t.title} | Achieve Pack 2025</title>
        <meta name="description" content={t.desc} />
      </Helmet>

      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">{t.faq1_q}</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">{t.faq1_a}</p>
            </div>
          </article>
        </section>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
        <ClickableImage src="/imgs/testimonials/owner/jemma.webp" alt={t.title} className="w-full rounded-xl mb-8" />
        
        <p className="text-lg text-gray-700 mb-8">{t.hook}</p>

        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl mb-12">
          <h4 className="font-bold mb-2">🔬 From Ryan Wong's Engineering Notebook</h4>
          <p className="italic">{t.notebook}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">5 Pain Points & Solutions</h2>
        <div className="space-y-6 mb-12">
          {[
            { num: '01', problem: t.pain1_title, solution: t.pain1_desc },
            { num: '02', problem: t.pain2_title, solution: t.pain2_desc },
            { num: '03', problem: t.pain3_title, solution: t.pain3_desc },
            { num: '04', problem: t.pain4_title, solution: t.pain4_desc },
            { num: '05', problem: t.pain5_title, solution: t.pain5_desc },
          ].map((item, idx) => (
            <div key={idx} className="bg-neutral-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                <span className="text-primary-400 mr-2">{item.num}</span> 
                {item.problem}
              </h3>
              <div className="bg-primary-900/30 text-primary-200 p-4 rounded-lg">
                <strong className="text-primary-400">✅ Solution: </strong>
                {item.solution}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border rounded-xl p-4">
            <img src="/imgs/store/products/compostable-stand-up-pouch.jpg" alt="Product 1" className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="font-bold mb-2">Compostable Stand Up Pouch</h3>
            <p className="text-sm text-gray-600 mb-4">Sustainable packaging for eco-conscious brands.</p>
            <Link to="/store/product/compostable-stand-up-pouch" className="text-primary-600 font-bold hover:underline">View Product</Link>
          </div>
          <div className="border rounded-xl p-4">
            <img src="/imgs/store/products/kraft-paper-stand-up-pouch.jpg" alt="Product 2" className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="font-bold mb-2">Kraft Paper Stand Up Pouch</h3>
            <p className="text-sm text-gray-600 mb-4">Natural aesthetic with high barrier protection.</p>
            <Link to="/store/product/kraft-paper-stand-up-pouch" className="text-primary-600 font-bold hover:underline">View Product</Link>
          </div>
          <div className="border rounded-xl p-4">
            <img src="/imgs/store/products/custom-printed-mylar-bags.jpg" alt="Product 3" className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="font-bold mb-2">Custom Printed Mylar Bags</h3>
            <p className="text-sm text-gray-600 mb-4">Premium digital printing for retail shelves.</p>
            <Link to="/store/product/custom-printed-mylar-bags" className="text-primary-600 font-bold hover:underline">View Product</Link>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border rounded-xl p-4">
            <summary className="font-bold cursor-pointer">{t.faq1_q}</summary>
            <p className="mt-4 text-gray-700">{t.faq1_a}</p>
          </details>
          <details className="border rounded-xl p-4">
            <summary className="font-bold cursor-pointer">{t.faq2_q}</summary>
            <p className="mt-4 text-gray-700">{t.faq2_a}</p>
          </details>
        </div>

      </div>
    </SEOPageLayout>
  );
}
