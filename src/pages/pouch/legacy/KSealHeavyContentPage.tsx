import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Package, Shield, TrendingUp, AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const localTranslations = {
  en: {
    title: "5 Common K-Seal Packaging Problems (And Solutions)",
    p1: "Bottom gusset bursting under heavy weight",
    s1: "K-Seal provides angled seals to distribute stress and prevent blowouts.",
    p2: "Pouch tipping over on retail shelves",
    s2: "The flat bottom created by the K-Seal design ensures maximum stability.",
    p3: "Pinholes forming at the seal junctions",
    s3: "Optimal heat and pressure distribution during the sealing process eliminates weak spots.",
    p4: "Difficulty in filling due to narrow openings",
    s4: "The wide opening provided by the K-Seal structure allows for easy, high-speed automated filling.",
    p5: "Uneven weight distribution causing aesthetic issues",
    s5: "Symmetrical gusset engineering ensures a uniform, premium appearance even with dense products."
  },
  es: {
    title: "5 problemas comunes del envasado K-Seal (y sus soluciones)",
    p1: "Rotura del fuelle inferior bajo mucho peso",
    s1: "K-Seal proporciona sellos en ángulo para distribuir el estrés y prevenir estallidos.",
    p2: "La bolsa se vuelca en los estantes de las tiendas",
    s2: "El fondo plano creado por el diseño K-Seal garantiza la máxima estabilidad.",
    p3: "Formación de pequeños agujeros en las uniones del sello",
    s3: "La distribución óptima de calor y presión durante el proceso de sellado elimina los puntos débiles.",
    p4: "Dificultad de llenado debido a aberturas estrechas",
    s4: "La amplia apertura que proporciona la estructura K-Seal permite un llenado automático fácil y de alta velocidad.",
    p5: "Distribución desigual del peso que causa problemas estéticos",
    s5: "La ingeniería simétrica del fuelle asegura un aspecto uniforme y premium incluso con productos densos."
  },
  fr: {
    title: "5 problèmes courants d'emballage K-Seal (et solutions)",
    p1: "Éclatement du soufflet inférieur sous un poids important",
    s1: "Le joint en K fournit des soudures inclinées pour répartir la pression et éviter les ruptures.",
    p2: "Le sachet bascule sur les étagères des magasins",
    s2: "Le fond plat créé par la conception K-Seal assure une stabilité maximale.",
    p3: "Formation de micro-trous aux jonctions des soudures",
    s3: "La répartition optimale de la chaleur et de la pression lors du scellage élimine les points faibles.",
    p4: "Difficulté de remplissage due à des ouvertures étroites",
    s4: "L'ouverture large fournie par la structure K-Seal permet un remplissage automatisé facile et rapide.",
    p5: "Répartition inégale du poids causant des problèmes esthétiques",
    s5: "L'ingénierie symétrique du soufflet garantit une apparence uniforme et haut de gamme, même avec des produits denses."
  },
  'zh-TW': {
    title: "5 個常見的 K-Seal 包裝問題（及其解決方案）",
    p1: "底部折邊在重壓下破裂",
    s1: "K-Seal 提供斜角封口以分散壓力並防止爆裂。",
    p2: "包裝袋在零售貨架上傾倒",
    s2: "K-Seal 設計創造的平底確保了最大的穩定性。",
    p3: "封口接合處形成針孔",
    s3: "封口過程中最佳的熱量和壓力分佈消除了薄弱點。",
    p4: "開口狹窄導致填充困難",
    s4: "K-Seal 結構提供的寬開口便於輕鬆、高速的自動化填充。",
    p5: "重量分佈不均導致美觀問題",
    s5: "對稱的折邊工程確保即使在裝填高密度產品時也能保持均勻、優質的外觀。"
  }
};

export default function KSealHeavyContentPage() {
  const { t, i18n } = useTranslation()

  const sections = [
    {
      id: 'k-seal-def',
      title: t('kSealHeavyContentPage.s1.title'),
      icon: <Package className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('kSealHeavyContentPage.s1.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('kSealHeavyContentPage.s1.diffTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.doypack')}</strong> {t('kSealHeavyContentPage.s1.doypackDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.kseal')}</strong> {t('kSealHeavyContentPage.s1.ksealDesc')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('kSealHeavyContentPage.s1.plow')}</strong> {t('kSealHeavyContentPage.s1.plowDesc')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'heavy-benefits',
      title: t('kSealHeavyContentPage.s2.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('kSealHeavyContentPage.s2.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('kSealHeavyContentPage.s2.mechTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('kSealHeavyContentPage.s2.m1')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m2')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m3')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.m4')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('kSealHeavyContentPage.s2.prodTitle')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ {t('kSealHeavyContentPage.s2.p1Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p2Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p3Item')}</li>
                <li>✓ {t('kSealHeavyContentPage.s2.p4Item')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'specs-tolerances',
      title: t('kSealHeavyContentPage.s3.title'),
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('kSealHeavyContentPage.s3.p1')}
          </p>
          
          <div className="overflow-x-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <table className="w-full border-collapse bg-white font-['JetBrains_Mono'] text-left text-black text-xs md:text-sm">
              <thead>
                <tr className="bg-black text-[#D4FF00] font-black uppercase">
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thCapacity')}</th>
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thCaliper')}</th>
                  <th className="p-4">{t('kSealHeavyContentPage.s3.table.thGusset')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-4 font-bold">500g (1lb)</td>
                  <td className="p-4">120 - 130 Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r1')}</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="p-4 font-bold">1kg (2.2lb)</td>
                  <td className="p-4">140 - 150 Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r2')}</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">2.5kg+ (5lb+)</td>
                  <td className="p-4">160+ Microns</td>
                  <td className="p-4">{t('kSealHeavyContentPage.s3.table.r3')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'k-seal-problems',
      title: localTranslations[i18n.language as keyof typeof localTranslations]?.title || localTranslations.en.title,
      icon: <AlertTriangle className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <img 
            src="/imgs/knowledge/k-seal-heavy-pain-points.jpg" 
            alt="K-Seal Pain Points" 
            className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover rounded-xl"
          />
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            {[1, 2, 3, 4, 5].map((num) => {
              const lang = i18n.language as keyof typeof localTranslations;
              const tData = localTranslations[lang] || localTranslations.en;
              const pKey = `p${num}` as keyof typeof tData;
              const sKey = `s${num}` as keyof typeof tData;
              return (
                <div key={num} className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
                  <h4 className="font-black text-lg mb-2 text-red-600 flex items-center gap-2">
                    <XCircle className="w-5 h-5 shrink-0" /> 
                    {tData[pKey]}
                  </h4>
                  <p className="font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    {tData[sKey]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )
    }
  ]

  const faqSections = t('kSealHeavyContentPage.faq', { returnObjects: true }) as { q: string, a: string }[] || []

  return (
    <BlogArticleTemplate
      title={t('kSealHeavyContentPage.title')}
      metaDescription={t('kSealHeavyContentPage.metaDesc')}
      canonicalUrl="https://pouch.eco/the-way-to-use-k-seal-bag-packing-heavy-content"
      heroTitle={
        <>
          {t('kSealHeavyContentPage.hero.title')}<br />
          <span className="text-[#10b981]">{t('kSealHeavyContentPage.hero.titleColored')}</span>
        </>
      }
      heroSubtitle={t('kSealHeavyContentPage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="POUCH_SHAPES"
      categoryColor="#10b981"
      readTime={t('kSealHeavyContentPage.hero.readTime')}
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('kSealHeavyContentPage.cta.title')}
      ctaDescription={t('kSealHeavyContentPage.cta.desc')}
      achievePackLink="https://achievepack.com/knowledge/k-seal-stand-up-pouches"
      achievePackText={t('kSealHeavyContentPage.cta.achieveText')}
    />
  )
}
