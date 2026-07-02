import BlogArticleTemplate from '../../../components/pouch/BlogArticleTemplate'
import { Settings, Shield, Award, HelpCircle, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const localTranslations: Record<string, any> = {
  en: {
    title: "5 Common Trapping & Keyline Problems (And Solutions)",
    items: [
      { q: "Color Registration Shift (Misregistration)", a: "High-speed printing can cause slight misalignment. Solution: Apply a calculated overlap (trap) between adjacent colors to prevent white gaps." },
      { q: "Dark Outlines on Light Elements", a: "Spreading dark colors over light ones reduces legibility. Solution: Use choke trapping (shrinking the background under the light element) instead of spreading." },
      { q: "Ink Bleeding at Edges", a: "Wet inks can mix at their boundaries. Solution: Add a keyline (a thin holding line) around elements to contain colors and improve sharpness." },
      { q: "Knockout Text Filling In", a: "Small white text on dark backgrounds often fills with ink. Solution: Implement proper keep-away (reverse trapping) to ensure text remains clean." },
      { q: "Inconsistent Special Finishes", a: "Metallic foils or spot UV can overlap standard inks, causing adhesion issues. Solution: Use precise keylines to isolate specialty finishes from standard inks." }
    ]
  },
  es: {
    title: "5 problemas comunes de reventado y líneas de contorno (y soluciones)",
    items: [
      { q: "Desplazamiento del registro de color", a: "La impresión a alta velocidad puede causar ligeros desajustes. Solución: Aplicar una superposición calculada (reventado o trapping) entre colores adyacentes para evitar huecos blancos." },
      { q: "Contornos oscuros en elementos claros", a: "Expandir colores oscuros sobre claros reduce la legibilidad. Solución: Usar reventado de estrangulamiento (choke) en lugar de expansión." },
      { q: "Sangrado de tinta en los bordes", a: "Las tintas húmedas pueden mezclarse. Solución: Añadir una línea de contorno (keyline) para contener los colores y mejorar la nitidez." },
      { q: "Texto calado que se rellena", a: "El texto blanco pequeño en fondos oscuros se rellena de tinta. Solución: Implementar un reventado inverso adecuado para mantener el texto limpio." },
      { q: "Acabados especiales inconsistentes", a: "Los efectos metálicos o barniz UV pueden superponerse a tintas estándar. Solución: Usar líneas de contorno precisas para aislar los acabados especiales." }
    ]
  },
  fr: {
    title: "5 problèmes courants de grossi-maigre et de lignes de contour (et solutions)",
    items: [
      { q: "Décalage de repérage des couleurs", a: "L'impression à grande vitesse peut causer de légers désalignements. Solution : Appliquer un chevauchement calculé (trapping) entre les couleurs adjacentes pour éviter les liserés blancs." },
      { q: "Contours sombres sur des éléments clairs", a: "Déborder des couleurs sombres sur des claires réduit la lisibilité. Solution : Utiliser un grossi-maigre de rétrécissement (choke) au lieu d'un grossissement." },
      { q: "Bavure d'encre sur les bords", a: "Les encres humides peuvent se mélanger. Solution : Ajouter une ligne de contour (keyline) pour contenir les couleurs et améliorer la netteté." },
      { q: "Texte en défonce qui se remplit", a: "Le petit texte blanc sur fond sombre se remplit souvent d'encre. Solution : Mettre en œuvre un retrait approprié (reverse trapping) pour que le texte reste net." },
      { q: "Finitions spéciales incohérentes", a: "Les dorures à chaud ou vernis UV peuvent chevaucher les encres standards. Solution : Utiliser des lignes de contour précises pour isoler les finitions." }
    ]
  },
  'zh-TW': {
    title: "5 個常見的補漏白與輪廓線問題（及解決方案）",
    items: [
      { q: "顏色套印不準（錯位）", a: "高速印刷可能導致輕微錯位。解決方案：在相鄰顏色之間應用計算好的重疊（補漏白）以防止出現白邊。" },
      { q: "淺色元素出現深色輪廓", a: "將深色擴張到淺色上會降低可讀性。解決方案：使用內縮補漏白（縮小背景）而不是擴張。" },
      { q: "邊緣油墨溢色", a: "未乾的油墨可能在邊界混合。解決方案：在元素周圍添加輪廓線（Keyline）以限制顏色並提高清晰度。" },
      { q: "反白文字模糊或填滿", a: "深色背景上的細小反白文字常被油墨填滿。解決方案：實施適當的退讓（反向補漏白）以確保文字清晰。" },
      { q: "特殊表面處理不一致", a: "金屬燙印或局部 UV 可能與標準油墨重疊，導致附著問題。解決方案：使用精確的輪廓線將特殊表面處理與標準油墨隔離。" }
    ]
  }
}

export default function TrappingKeylinePage() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const tLocal = localTranslations[currentLang] || localTranslations['en']

  const sections = [
    {
      id: 'print-trapping',
      title: t('trappingKeylinePage.sections.print-trapping.title'),
      icon: <Settings className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-neutral-900 leading-relaxed">
            {t('trappingKeylinePage.sections.print-trapping.p1')}
          </p>
          
          <div className="bg-[#D4FF00] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black">
            <h3 className="font-black text-2xl uppercase mb-4">{t('trappingKeylinePage.sections.print-trapping.listTitle')}</h3>
            <ul className="space-y-3 text-lg font-medium">
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.spread.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.spread.text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.choke.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.choke.text')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-['JetBrains_Mono'] font-bold">→</span>
                <span><strong>{t('trappingKeylinePage.sections.print-trapping.list.white.bold')}</strong>{t('trappingKeylinePage.sections.print-trapping.list.white.text')}</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'keyline-dieline',
      title: t('trappingKeylinePage.sections.keyline-dieline.title'),
      icon: <Shield className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {t('trappingKeylinePage.sections.keyline-dieline.p1')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('trappingKeylinePage.sections.keyline-dieline.elements.title')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.cut.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.cut.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.seal.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.seal.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.bleed.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.bleed.text')}</li>
                <li>✓ <strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.safe.bold')}</strong>{t('trappingKeylinePage.sections.keyline-dieline.elements.list.safe.text')}</li>
              </ul>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <h4 className="font-black text-xl uppercase mb-3">{t('trappingKeylinePage.sections.keyline-dieline.pitfalls.title')}</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p1')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p2')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p3')}</li>
                <li>✗ {t('trappingKeylinePage.sections.keyline-dieline.pitfalls.list.p4')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'illustrator-setup',
      title: t('trappingKeylinePage.sections.illustrator-setup.title'),
      icon: <Award className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed">
            {t('trappingKeylinePage.sections.illustrator-setup.p1')}
          </p>
          
          <div className="bg-neutral-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black font-mono text-sm space-y-3">
            <div className="border-b border-black pb-2 font-bold uppercase text-neutral-600">{t('trappingKeylinePage.sections.illustrator-setup.codeHeader')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r1')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r2')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r3')}</div>
            <div>{t('trappingKeylinePage.sections.illustrator-setup.rules.r4')}</div>
          </div>
        </div>
      )
    },
    {
      id: 'pain-points',
      title: tLocal.title,
      icon: <Wrench className="w-6 h-6 text-black" />,
      content: (
        <div className="space-y-6">
          <img 
            src="/imgs/knowledge/trapping-keylines-pain-points.jpg" 
            alt="Trapping Keylines Engineering Illustration" 
            className="w-full h-auto border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] object-cover rounded-md"
          />
          <div className="space-y-4">
            {tLocal.items.map((item: { q: string, a: string }, index: number) => (
              <div key={index} className="bg-white p-4 border-l-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-bold text-lg text-neutral-900 mb-1">{item.q}</h4>
                <p className="text-neutral-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  const faqSections = [
    {
      q: t('trappingKeylinePage.faq.q1.q'),
      a: t('trappingKeylinePage.faq.q1.a')
    },
    {
      q: t('trappingKeylinePage.faq.q2.q'),
      a: t('trappingKeylinePage.faq.q2.a')
    },
    {
      q: t('trappingKeylinePage.faq.q3.q'),
      a: t('trappingKeylinePage.faq.q3.a')
    }
  ]

  return (
    <BlogArticleTemplate
      title={t('trappingKeylinePage.meta.title')}
      metaDescription={t('trappingKeylinePage.meta.description')}
      canonicalUrl="https://pouch.eco/understand-trapping-why-we-need-to-add-a-keyline"
      heroTitle={
        <>
          {t('trappingKeylinePage.hero.titlePart1')}<br />
          <span className="text-[#00FFFF]">{t('trappingKeylinePage.hero.titlePart2')}</span>
        </>
      }
      heroSubtitle={t('trappingKeylinePage.hero.subtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      categoryTag="PREPRESS_DESIGN"
      categoryColor="#00FFFF"
      readTime="7 min read"
      sections={sections}
      faqSections={faqSections}
      ctaTitle={t('trappingKeylinePage.cta.title')}
      ctaDescription={t('trappingKeylinePage.cta.description')}
      achievePackLink="https://achievepack.com/dieline-creator"
      achievePackText={t('trappingKeylinePage.cta.achievePackText')}
    />
  )
}
