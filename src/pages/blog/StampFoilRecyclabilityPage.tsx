import React from 'react'
import { useTranslation } from 'react-i18next'
import { Scale, CheckCircle, AlertTriangle, Recycle, ArrowRight, ShieldCheck, HelpCircle, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOPageLayout from '../../components/SEOPageLayout'
import EcoMaterialSourcingGuide from '../../components/pouch/EcoMaterialSourcingGuide'

const StampFoilRecyclabilityPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.stampFoilRecyclability'

  const heroImage = '/imgs/seo-photos/a_compostable_vs_recyclable_packaging_4528107.jpg'

  const sections = [
    {
      id: 'foil-stamping-explained',
      title: t(`${p}.heading1`),
      icon: <HelpCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Foil stamping adds a luxurious metallic finish to skincare, coffee, and specialty packaging. However, when transitioning to sustainable solutions, brands often ask: <strong>does metallic foil compromise the recyclability of the pouch?</strong>
          </p>
          <p>
            The answer depends on the <strong>total weight percentage of the foil</strong> and the <strong>carrier substrate</strong> used. Traditional foil stamping uses a polyester (PET) carrier film and a thin layer of metal, which are hot-stamped onto the pouch. If the non-recyclable components (foil, lacquer, and adhesive) comprise <strong>less than 5% of the total package weight</strong>, the pouch remains widely recyclable. 
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-4">
            <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              The 95% Mono-Material Threshold Rule
            </h4>
            <p className="text-sm text-blue-700">
              According to international packaging sorting and recycling standards (such as APR in North America and RecyClass in Europe), flexible packaging must contain <strong>at least 95% mono-material (e.g., pure Polyethylene or Polypropylene)</strong> by weight to be certified and recognized as fully recyclable. Minor non-PE additions like inks, barriers (EVOH), and foil accents under 5% do not affect sorted recycling streams.
            </p>
            <p className="text-xs text-blue-600 mt-2 font-medium">
              → Explore our certified single-stream solutions: <a href="https://www.achievepack.com/materials/recyclable-mono-pe" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">Achieve Pack Recyclable Mono-PE Pouches</a>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rules-of-thumb',
      title: t(`${p}.heading3`),
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>If you want to maintain the recyclability of your mono-material PE pouch while utilizing a metallic foil logo, adhere to these industry rules:</p>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {[
              'Keep foil logo and accents to less than 5% of the total pouch surface area.',
              'Avoid full-bleed metallic stamping; instead, use targeted text or small icon designs.',
              'Specify metal-free digital metallic inks which do not use polyester carrier films.',
              'Choose certified mono-PE laminates that act as the bulk recyclable base (>95% PE weight).',
              'Perform a density and sorting check to ensure the pouch floats/sinks correctly in recycling streams.',
              'Consult with the packaging engineer to calculate the precise weight ratio of the foil stack.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100">
                <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'alternative-solutions',
      title: 'Our Sustainable Alternatives for Premium Metallic Logo Effects',
      icon: <Recycle className="h-5 w-5 text-emerald-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            For brands requiring 100% circularity without any compromises, we offer advanced, eco-responsible alternatives to traditional hot-stamping:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>1. Recyclable Metallic Inks (Metal-Free)</strong>
                <p className="text-sm text-neutral-600">We formulate metallic inks directly into the digital and plate printing processes. This mimics the reflectivity of purple, gold, and silver foils perfectly, but uses standard recyclable resin inks without any non-recyclable PET plastic films.</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>2. High-Vacuum Metallized Polyethylene (VMPET-free Mono-PE)</strong>
                <p className="text-sm text-neutral-600">We utilize oriented PE combined with ultra-thin metallization to create a premium metallic shine that is 100% single-polymer, meaning it sorts and melts directly within standard PE recycling streams (Resin Code #4).</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'recycling-sorting',
      title: 'Sorting Tests and Recycling Certification',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            When packaging passes through near-infrared (NIR) sorting sensors in modern recycling plants, the polymer base signature (PE) is identified. Standard metallic foils are extremely thin (measured in nanometers) and do not shield the underlying PE polymer from NIR detection, provided the foil area is kept small. 
          </p>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mt-4">
            <p className="text-sm font-medium text-emerald-800">
              💡 Summary Check: As long as your MDO-PE / LLDPE pouch structure makes up <strong>more than 95% of the total pouch weight</strong>, adding a premium metallic foil logo or design accent will not compromise its recyclability.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'achievepack-eco-materials',
      title: 'AchievePack Sustainable Material Specifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: <EcoMaterialSourcingGuide />
    }
  ]

  const faqs = [
    {
      question: 'Will hot stamping a logo affect the recycling code on my pouch?',
      answer: 'No. As long as the primary composite polymer represents over 95% of the total package weight, the pouch can legally carry the Resin Code #4 (LDPE) or Code #5 (PP) recycling symbol and be designated as widely recyclable.'
    },
    {
      question: 'What is the limit for non-recyclable components in packaging?',
      answer: 'Most global recycling systems, including How2Recycle and Cyclos-HTP, require that at least 95% of the package weight consist of the main recyclable material. All inks, barriers (like EVOH), adhesives, and foil decorations combined must not exceed 5% of the total weight.'
    },
    {
      question: 'Are there biodegradable foil options?',
      answer: 'Yes! For compostable pouches, we offer certified compostable hot stamping foils that degrade alongside our PLA and cellulose structures. These are fully certified under EN13432 and ASTM D6400.'
    },
    {
      question: 'Can I print a purple metallic foil logo on my recyclable skincare pouch?',
      answer: 'Absolutely. By using MDO-PE and LLDPE as the base layers (>95% weight), we can apply a purple hot-stamp logo. For the absolute safest route, we can use our advanced metallic inks to mimic the purple foil effect.'
    }
  ]

  const relatedLinks = [
    { title: 'Recyclable Mono-PE Pouches', url: '/materials/recyclable-mono-pe', description: 'Explore single-polymer PE options' },
    { title: 'Recyclable Mono-PP Pouches', url: '/materials/recyclable-mono-pp', description: 'High heat-resistant recyclable packaging' },
    { title: 'Barrier Options Guide', url: '/features/barrier-options', description: 'Understand EVOH and high barrier coatings' },
    { title: 'Contact Packaging Engineer', url: '/contact', description: 'Get a custom recyclability assessment' },
  ]

  return (
    <SEOPageLayout heroBgColor="#1f2937"
      title={t(`${p}.metaTitle`)}
      description="Learn how metallic foil stamping affects the recyclability of flexible mono-PE packaging. Discover the 95% weight threshold rule for single-stream circular packaging."
      keywords={[
        'does foil stamping affect recyclability',
        'metallic foil recyclable packaging',
        'mono PE foil stamp',
        'recyclable packaging weight rule',
        '95 percent recyclable mono material',
        'hot stamping recyclable pouch'
      ]}
      heroTitle="Does Foil Stamping Affect Packaging Recyclability?"
      heroSubtitle="Understand the 95% Weight Threshold Rule for Sustainable Flexible Pouches"
      heroImage={heroImage}
      sections={sections}
      introSummary="Foil stamping creates premium branding, but does it compromise recyclability? Find out how international recycling standards calculate the 95% mono-material weight rule and how you can safely design metallic pouch elements."
      faqs={faqs}
      relatedLinks={relatedLinks}
      ctaTitle="Looking for Recyclable Pouch Samples?"
      ctaDescription="Test our certified MDO-PE and LLDPE pouches with your custom metallic foil artwork."
      ctaButtonText="Request Free Samples"
      ctaButtonUrl="/free-service"
      canonicalUrl="https://achievepack.com/blog/does-foil-stamping-affect-recyclability"
      schemaType="Article"
    />
  )
}

export default StampFoilRecyclabilityPage
