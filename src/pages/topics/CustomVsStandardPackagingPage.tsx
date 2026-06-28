import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import { 
  ArrowLeftRight, 
  HelpCircle, 
  Layers, 
  DollarSign, 
  CheckCircle, 
  FileText, 
  Lock, 
  ShoppingBag, 
  Calendar, 
  ChevronRight, 
  Award,
  Sparkles,
  Zap,
  Info
} from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const CustomVsStandardPackagingPage: React.FC = () => {
  const { openCalendly } = useCalendly()
  const { t } = useTranslation()
  const p = 'seoPages.pages.customVsStandardPackaging'

  const sections = [
    {
      id: 'core-differences',
      title: t(`${p}.s1.title`, 'Custom Dynamic Quotes vs. Group Production Store Products'),
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium text-neutral-900" dangerouslySetInnerHTML={{ __html: t(`${p}.s1.p1Html`, 'When sourcing custom flexible packaging, brands are often surprised by the pricing variance between a <strong>tailored B2B custom quotation</strong> and an <strong>online store product</strong>. The difference comes down to the production method: <strong>Group Production (Collective Runs)</strong> versus <strong>Custom Tailored Manufacturing</strong>.') }} />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-6 w-6 text-neutral-600" />
                <h4 className="font-bold text-neutral-900 text-lg">{t(`${p}.s1.h1`, 'Standard Store (Group Production)')}</h4>
              </div>
              <p className="text-sm mb-4">
                {t(`${p}.s1.d1`, 'Designed to minimize baseline setup costs by combining multiple brand print runs onto the same production web. To make this possible, several strict standards are maintained:')}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l1_1Html`, '<strong>Fixed Dimensions:</strong> Limited strictly to predefined templates (e.g. 100g, 250g, 500g).') }} />
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l1_2Html`, '<strong>Unprinted Bottom Gusset:</strong> Left raw/silver/clear to preserve phototube registration sensors across changing SKU widths.') }} />
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-neutral-400 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l1_3Html`, '<strong>Fixed Closures:</strong> Restricted to standard press-to-close zippers or open-tops without premium alternative closures.') }} />
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50/50 to-emerald-50/50 p-6 rounded-xl border border-primary-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-6 w-6 text-primary-600" />
                <h4 className="font-bold text-primary-900 text-lg">{t(`${p}.s1.h2`, 'Tailored B2B Custom Quotes')}</h4>
              </div>
              <p className="text-sm mb-4">
                {t(`${p}.s1.d2`, 'Your pouch is engineered from the ground up for your specific brand. Every aspect of the bag is customized to meet premium retail standards:')}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l2_1Html`, '<strong>Custom Dimensions:</strong> Engineered down to the millimeter to perfectly fit your product volume and bulk density.') }} />
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l2_2Html`, '<strong>Fully Printed Bottom Gusset:</strong> Support for continuous graphics, branding, and barcodes underneath the pouch.') }} />
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t(`${p}.s1.l2_3Html`, '<strong>Premium Closures:</strong> Optional integration of specialized closures like genuine Velcro brand press-to-close tracks.') }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'combined-sku-hack',
      title: t(`${p}.s2.title`, 'The Volume Discount Hack: Combined SKU Runs Explained'),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p dangerouslySetInnerHTML={{ __html: t(`${p}.s2.p1Html`, 'If you sell multiple SKU variations—such as a <strong>Vanilla protein powder</strong> and a <strong>Chocolate protein powder</strong>—that share the exact same pouch dimensions, shape, and material specification, you can leverage one of flexible packaging’s greatest pricing strategies: **Combined SKU Runs**.') }} />

          <div className="bg-emerald-50/60 p-6 rounded-xl border border-emerald-100 my-4">
            <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              {t(`${p}.s2.h1`, 'How Combined SKU Grouping Works:')}
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t(`${p}.s2.d1`, 'Normally, setting up a print job requires extensive machine adjustments, mechanical plate changes, or high digital press calibration times. However, because our HP Indigo 20000 digital presses can transition between print designs instantaneously, we can print multiple artworks sequentially on the same web roll.')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs font-semibold text-neutral-900">
              <div className="bg-white p-3 rounded border border-emerald-200">
                <span className="text-red-500 uppercase block mb-1">{t(`${p}.s2.label1`, 'Separate Setup (Expensive)')}</span>
                {t(`${p}.s2.desc1`, '100 pcs Vanilla SKU + 100 pcs Chocolate SKU ordered separately = Charged at separate 100-pc pricing rates.')}
              </div>
              <div className="bg-white p-3 rounded border border-emerald-300 shadow-sm">
                <span className="text-green-600 uppercase block mb-1">{t(`${p}.s2.label2`, 'Combined Run (Discount Hack)')}</span>
                {t(`${p}.s2.desc2`, 'Grouped together as a single 200-piece combined run = Maximizes volume discount, saving up to 25% per unit!')}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'zipper-vs-velcro',
      title: t(`${p}.s3.title`, 'Closure Engineering: Standard Zippers vs. Premium Velcro'),
      icon: <Lock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s3.p1`, 'The mechanism used to seal your pouch plays a huge role in brand perception, ease of opening, and product shelf life. Let\'s compare standard options against advanced upgrades:')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <h4 className="font-bold text-neutral-900 text-lg mb-2">{t(`${p}.s3.h1`, '1. Standard Press-to-Close Zipper')}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {t(`${p}.s3.d1`, 'The standard plastic track utilizes interlocking male and female profiles that seal when pressed firmly together.')}
              </p>
              <ul className="text-xs space-y-1.5 text-neutral-500">
                <li>{t(`${p}.s3.l1_1`, '• **Ideal For:** Liquids, snacks, pills, and standard retail goods.')}</li>
                <li>{t(`${p}.s3.l1_2`, '• **Limitations:** Fine powders (like cocoa, flour, whey, or matcha) can clog the tracks, making it difficult for consumers to fully close the bag.')}</li>
                <li>{t(`${p}.s3.l1_3`, '• **Cost:** Very economical, standard on all stock store configurations.')}</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-primary-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl">
                {t(`${p}.s3.badge`, 'Upgrade Option')}
              </div>
              <h4 className="font-bold text-primary-900 text-lg mb-2">{t(`${p}.s3.h2`, '2. Premium Velcro® Packaging Closures')}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                {t(`${p}.s3.d2`, 'Premium hook-to-hook Velcro brand sensory tracks align automatically and seal easily even when fine particles contaminate the closure track.')}
              </p>
              <ul className="text-xs space-y-1.5 text-neutral-600">
                <li>{t(`${p}.s3.l2_1`, '• **Ideal For:** Protein powders, coffee grounds, spices, collagen, and organic grains.')}</li>
                <li>{t(`${p}.s3.l2_2`, '• **Advantages:** Powder-resistant, satisfying tactile and audible click feedback, extreme ease-of-use.')}</li>
                <li>{t(`${p}.s3.l2_3`, '• **Cost:** Incurs a small unit premium, available strictly via custom dynamic quotations.')}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'store-comparison',
      title: t(`${p}.s4.title`, 'Store Related Items: Conventional Off-The-Shelf Alternatives'),
      icon: <ShoppingBag className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.s4.p1`, 'If you do not require specialized sizes, custom Velcro closures, or fully printed bottom gussets, our **Conventional Stock & Digital Store** offers the absolute lowest minimum setup cost and the fastest turnaround time.')}
          </p>

          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 my-4">
            <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2 text-sm">
              <Info className="h-4 w-4 text-neutral-500" />
              {t(`${p}.s4.h1`, 'Give Yourself a Heads Up: Standard Store Products Quick Access')}
            </h4>
            <p className="text-sm text-neutral-600 mb-4">
              {t(`${p}.s4.d1`, 'Explore our standard digital run items in high-barrier metalised and clear film laminates. These fixed-size items are optimized to ship in 15–20 days.')}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.s4.linkHeader1`, 'Stand Up Pouches (Doypack)')}</h5>
                <div className="space-y-1 text-xs">
                  <RouterLink to="/store/product/conven-sup-met-zip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l1_1`, '• Metalised, Resealable Zipper (Best Seller)')}</RouterLink>
                  <RouterLink to="/store/product/conven-sup-met-xzip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l1_2`, '• Metalised, No Zipper (Heat-Seal Top)')}</RouterLink>
                  <RouterLink to="/store/product/conven-sup-clear-zip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l1_3`, '• Clear Visibility, Resealable Zipper')}</RouterLink>
                  <RouterLink to="/store/product/conven-sup-clear-xzip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l1_4`, '• Clear Visibility, No Zipper')}</RouterLink>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
                <h5 className="font-bold text-neutral-900 mb-2">{t(`${p}.s4.linkHeader2`, '3 Side Seal Pouches (Flat Bags)')}</h5>
                <div className="space-y-1 text-xs">
                  <RouterLink to="/store/product/conven-3ss-met-zip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l2_1`, '• Metalised, Resealable Zipper')}</RouterLink>
                  <RouterLink to="/store/product/conven-3ss-met-xzip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l2_2`, '• Metalised, No Zipper')}</RouterLink>
                  <RouterLink to="/store/product/conven-3ss-clear-zip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l2_3`, '• Clear Visibility, Resealable Zipper')}</RouterLink>
                  <RouterLink to="/store/product/conven-3ss-clear-xzip" className="text-primary-600 hover:underline block">{t(`${p}.s4.l2_4`, '• Clear Visibility, No Zipper')}</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.s5.title`, 'Not Sure Which Production Method Is Right for You?'),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-800 to-primary-950 p-10 rounded-2xl text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">{t(`${p}.s5.h1`, 'Let Us Optimize Your Packaging Spec')}</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.s5.p1`, 'Speak directly with Ryan Wong and our packaging engineers to see if you can utilize combined SKU runs, group production rates, or upgrade to powder-resistant Velcro closure tracks.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              {t(`${p}.s5.btn1`, 'Book Technical Consultation')}
            </button>
            <RouterLink
              to="/store?category=conventional-digital"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              {t(`${p}.s5.btn2`, 'Browse Online Store')}
            </RouterLink>
          </div>
          <p className="mt-8 text-xs opacity-60 uppercase tracking-widest">
            {t(`${p}.s5.footerText`, 'COMBINED SKU DEALS • DIGITAL DIGITAL PRESS GANG RUNS • VELCRO® & ZIPPER COMPATIBLE')}
          </p>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faqs.q1`, "Why does the bottom gusset remain unprinted on standard store products?"),
      answer: t(`${p}.faqs.a1`, "Standardized group production runs multiple different customer designs on the same machine web. Because the widths and optical crop marks differ slightly, the bottom gusset zone is left unprinted to allow phototube registration sensors to properly trace and align the pouch cuts on the bag-making line without color collision.")
    },
    {
      question: t(`${p}.faqs.q2`, "How do I group my SKU flavors together to get a higher volume discount?"),
      answer: t(`${p}.faqs.a2`, "As long as your Vanilla, Chocolate, Strawberry, or other SKU flavors share the exact same physical size, material stack, and bag shape (e.g. all are 140x200mm Zipper Stand Up Pouches in Matte Metalised finish), our engineers can group them during dynamic B2B custom quotes. You will get the cumulative quantity pricing bracket!")
    },
    {
      question: t(`${p}.faqs.q3`, "Is Velcro really better than standard zippers for powder SKU packaging?"),
      answer: t(`${p}.faqs.a3`, "Yes, significantly. Standard zippers use physical friction locks that get clogged by particulate powders, forcing consumers to clean the tracks before closing. Velcro closures use micro-hooks that auto-align and seal securely even through layers of fine protein, organic collagen, flour, or ground coffee.")
    },
    {
      question: t(`${p}.faqs.q4`, "What is the absolute minimum order quantity (MOQ) for custom dynamic quotes?"),
      answer: t(`${p}.faqs.a4`, "For fully customized dimensions and custom printed gussets, our MOQ typically starts at 1,000 units per design. If you need smaller batches (100 to 500 units), standard store fixed-size pouches are the best cost-efficient starting point.")
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.seo.title`, 'Custom vs. Standard Packaging Guide | Combined SKU Discount Hack | Achieve Pack')}</title>
        <meta name="description" content={t(`${p}.seo.description`, 'Technical comparison of tailored B2B custom quote packaging vs standardized store products. Learn how combined SKU runs and premium Velcro zippers optimize your ROI.')} />
        <link rel="canonical" href="https://achievepack.com/topics/custom-vs-standard-packaging" />
        <meta name="keywords" content="custom vs standard packaging, combined SKU run, group production pouches, velcro pouch closure, conventional stand up pouch, 3 side seal bag, flexible packaging custom quote" />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#064e3b"
        title={t(`${p}.layout.title`, 'Custom vs. Standard Flexible Packaging Sourcing Guide')}
        description={t(`${p}.layout.description`, 'Understanding tailored B2B custom quote mechanics vs. budget-friendly group production runs.')}
        keywords={['custom vs standard packaging', 'combined SKU run', 'velcro pouch closure']}
        heroTitle={t(`${p}.layout.heroTitle`, 'Custom Sourcing vs. Standard Store runs')}
        heroSubtitle={t(`${p}.layout.heroSubtitle`, 'Volume Discount Hacks | Premium Closures | Bottom Gusset Mechanics')}
        introSummary={t(`${p}.layout.introSummary`, 'Not all pouches are made equal. To help you choose between standard online checkout runs and full B2B dynamic quotes, this guide breaks down the engineering, mechanical setup, and cost differences behind co-printed group production, combined SKU grouping, and closure systems.')}
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/seo-photos/usa/coffee/a_coffee_sustainability_roaster_guide_0801372.jpg"
      />
    </>
  )
}

export default CustomVsStandardPackagingPage
