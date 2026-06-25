import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  Scale, Shield, CheckCircle, Award, Calendar, MessageCircle, 
  Target, Zap, Globe, FileText, Leaf, ArrowRight, ChevronDown, 
  Sparkles, Layers, BookOpen, AlertTriangle, BarChart2 
} from 'lucide-react'
import { getDomain } from '../../utils/domain'
import { useCalendly } from '../../contexts/CalendlyContext'
import ClickableImage from '../../components/ClickableImage'

// B2B Corporate Layout
import SEOPageLayout from '../../components/SEOPageLayout'

// B2C Brutalist Layout
import BlogArticleTemplate from '../../components/pouch/BlogArticleTemplate'
import { NeoButton, NeoCard, NeoBadge } from '../../components/pouch/PouchUI'
import { useTranslation, Trans } from "react-i18next";

interface FAQItem {
  q: string
  a: string
}

const EUPPWRCompliancePage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'seoPages.pages.eUPPWRCompliance';
  const isPouchDomain = getDomain() === 'pouch'
  const { openCalendly } = useCalendly()
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Common B2B/B2C FAQ Content wrapped in t()
  const FAQS: FAQItem[] = [
    {
      q: t(`${p}.faqs.q1`, "What is the immediate significance of the mid-August 2026 deadline?"),
      a: t(`${p}.faqs.a1`, "By mid-August 2026, packaging placed on the EU market faces much stricter compliance and audit regulations under the newly adopted PPWR. This represents the official start of mandatory reporting, Extended Producer Responsibility (EPR) tiering, and strict bans on non-minimization practices.")
    },
    {
      q: t(`${p}.faqs.q2`, "What does the 2030 mandate mean for flexible packaging formats?"),
      a: t(`${p}.faqs.a2`, "By 2030, all packaging placed on the EU market must be generally recyclable by design. Multi-layer plastics that cannot be cleanly separated will be phased out in favor of mono-materials like Recyclable Mono-PE or certified compostable barriers.")
    },
    {
      q: t(`${p}.faqs.q3`, "How does the 'Packaging Minimization' rule affect premium decorative boxes?"),
      a: t(`${p}.faqs.a3`, "The law limits packaging weight and volume to the absolute minimum required for safety and logistics. Decorative, oversized packaging that exists solely to enhance brand image may be restricted unless protected by specific trademark design-rights.")
    },
    {
      q: t(`${p}.faqs.q4`, "Are compostable surface laminates and zippers allowed under PPWR?"),
      a: t(`${p}.faqs.a4`, "Yes! The EU specifically mandates compostability for tea bags, coffee pods, sticky fruit labels, and very lightweight bags. Pouch.eco's EN 13432 compostable structures and bio-based barriers are fully compliant.")
    },
    {
      q: t(`${p}.faqs.q5`, "What documentation must brand owners supply before placing packs on the market?"),
      a: t(`${p}.faqs.a5`, "Brand owners must prepare a comprehensive Declaration of Conformity (DoC), technical specification records verifying GRS PCR content, PFAS-free lab test approvals, and dynamic recovery tracking data for each packaging SKU.")
    },
    {
      q: t(`${p}.faqs.q6`, "How can Achieve Pack and Pouch.eco assist my transition roadmap?"),
      a: t(`${p}.faqs.a6`, "Pouch.eco offers low-MOQ digital print runs (starting at 100 bags) for rapid D2C prototype testing. Achieve Pack provides high-volume, cost-optimized commercial wholesale manufacturing (MOQ 5,000+) certified for VFFS automatic packaging lines.")
    }
  ]

  const TECH_MATRIX = [
    {
      param: t(`${p}.techMatrix.param1`, "Recyclability Rating"),
      value: t(`${p}.techMatrix.value1`, "Grade A Design for Recycling (RecyClass Sort)"),
      benefit: t(`${p}.techMatrix.benefit1`, "Curbside recyclable Mono-PE structures qualify for the lowest possible EPR ecomodulated taxes.")
    },
    {
      param: t(`${p}.techMatrix.param2`, "Void Space (Empty Space)"),
      value: t(`${p}.techMatrix.value2`, "Under 15% Void Ratio (Exceeds 50% Limit)"),
      benefit: t(`${p}.techMatrix.benefit2`, "Snug-fit flexible pouches eliminate bulk shipping volume and bypass loose filler materials.")
    },
    {
      param: t(`${p}.techMatrix.param3`, "Harmonized Sorting Labels"),
      value: t(`${p}.techMatrix.value3`, "2028-Ready Material Pictograms"),
      benefit: t(`${p}.techMatrix.benefit3`, "Pre-printed standardized circular icons eliminate greenwashing penalties and consumer confusion.")
    },
    {
      param: t(`${p}.techMatrix.param4`, "Digital Packaging Passport"),
      value: t(`${p}.techMatrix.value4`, "Dynamic QR Sourcing & Traceability Markers"),
      benefit: t(`${p}.techMatrix.benefit4`, "Instantly display polymer specs, carbon footprint, and circular sorting details to European MRFs.")
    },
    {
      param: t(`${p}.techMatrix.param5`, "Post-Consumer Recycled (PCR)"),
      value: t(`${p}.techMatrix.value5`, "GRS-Certified 30%+ PCR Content"),
      benefit: t(`${p}.techMatrix.benefit5`, "Exempts your brand from the UK Plastic Packaging Tax (£217/tonne) and EU plastic levy (€0.80/kg).")
    },
    {
      param: t(`${p}.techMatrix.param6`, "Compostability Standards"),
      value: t(`${p}.techMatrix.value6`, "TÜV OK Compost & BPI (EN 13432)"),
      benefit: t(`${p}.techMatrix.benefit6`, "Guarantees plastic-free organic circularity for coffee, tea, and lightweight snack applications.")
    }
  ]

  // =========================================================================
  // 1. RENDER B2C Pouch.eco Layout (Bold Retro-Brutalist)
  // =========================================================================
  if (isPouchDomain) {
    const b2cSections = [
      {
        id: 'ppwr-2026',
        title: t(`${p}.b2c.sections.timeline.title`, 'The EU PPWR Timeline: Essential Deadlines'),
        icon: <Calendar className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <div className="bg-[#10b981] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
              <h3 className="font-black text-2xl uppercase mb-4">{t(`${p}.adaptEarlyOrFaceRegulatoryPena`)}</h3>
              <p className="font-bold text-lg mb-4">
                {t(`${p}.theVoluntaryPhaseOfEcoMarketin`)}</p>
              <div className="bg-black text-[#D4FF00] p-4 font-mono text-sm border-2 border-black grid md:grid-cols-3 gap-4">
                <div>
                  <strong className="block text-white mb-1">{t(`${p}.august122026`)}</strong>
                  {t(`${p}.generalApplicationBeginsStrict`)}</div>
                <div>
                  <strong className="block text-white mb-1">{t(`${p}.20282029Window`)}</strong>
                  {t(`${p}.harmonizedMaterialSortingIcons`)}</div>
                <div>
                  <strong className="block text-white mb-1">{t(`${p}.january12030`)}</strong>
                  {t(`${p}.theBigBangDeadline100Recyclabl`)}</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              {t(`${p}.atPouchEcoWeHelpECommerceD2cAn`)}</p>
          </div>
        )
      },
      {
        id: 'factory-direct',
        title: t(`${p}.b2c.sections.factoryDirect.title`, 'Direct Sourcing & TÜV OK Compost HOME Sourcing'),
        icon: <Shield className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t(`${p}.b2c.sections.factoryDirect.p1`)}
            </p>
            <div className="bg-emerald-50 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-lg text-emerald-950 uppercase">{t(`${p}.b2c.sections.factoryDirect.title`)}</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-mono mt-2">
                {t(`${p}.b2c.sections.factoryDirect.p2`)}
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'minimization-design',
        title: t(`${p}.b2c.sections.minimization.title`, 'The 50% Empty Space Cap & Minimization Rules'),
        icon: <Target className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t(`${p}.oversizedBoxesAndDoubleWalledC`)}</p>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="bg-white border-4 border-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-lg text-emerald-950 uppercase">{t(`${p}.the50VoidSpaceLimit`)}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-mono">
                    {t(`${p}.startingJanuary12030GroupedTra`)}<strong>{t(`${p}.50OrLess`)}</strong>{t(`${p}.doubleWallsFalseBottomsAndEmpt`)}</p>
                </div>
                <div className="bg-amber-50 border-4 border-amber-500 p-6 space-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-lg text-amber-950 uppercase">{t(`${p}.warningTheFillerMaterialCatch`)}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-mono">
                    {t(`${p}.underTheEuDirective`)}<strong>{t(`${p}.fillerMaterials`)}</strong>{t(`${p}.includingBubbleWrapPaperPaddin`)}<strong>{t(`${p}.emptySpaceVolume`)}</strong>{t(`${p}.youCannotPackABoxWithFoamToMee`)}</p>
                </div>
              </div>
              
              <NeoCard className="p-2 bg-emerald-50 border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22]">
                <ClickableImage 
                  src="/imgs/topics/eu-ppwr-void-space.png" 
                  alt={t(`${p}.b2c.sections.minimization.imageAlt`, "Infographic detailing EU PPWR Packaging Minimization comparing a non-compliant oversized box with bubble wrap and a compliant lightweight flexible pouch.")} 
                  className="w-full object-cover border-2 border-black"
                />
                <div className="p-2 text-center text-[10px] text-emerald-900/80 font-mono">
                  {t(`${p}.visualizingPackagingVoidSpaceC`)}</div>
              </NeoCard>
            </div>
            <div className="bg-emerald-50 border-2 border-emerald-900 p-5 rounded-lg text-sm text-emerald-950 font-mono">
              <strong>{t(`${p}.brandSolution`)}</strong> {t(`${p}.rightSizingYourProductPackagin`)}</div>
          </div>
        )
      },
      {
        id: 'sorting-labels-qr',
        title: t(`${p}.b2c.sections.sorting.title`, 'Harmonized Sorting Labels & QR Product Passports'),
        icon: <Layers className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t(`${p}.toResolveConsumerConfusionAcro`)}</p>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <NeoCard className="p-2 bg-emerald-50 border-4 border-emerald-900 shadow-[6px_6px_0px_0px_#022c22] order-2 md:order-1">
                <ClickableImage 
                  src="/imgs/topics/eu-ppwr-sorting-labels.png" 
                  alt={t(`${p}.b2c.sections.sorting.imageAlt`, "Infographic illustrating EU PPWR 2028 Harmonized Recycling Labels and Digital Product Passport QR code scanned on a mobile screen showing recyclability metrics.")} 
                  className="w-full object-cover border-2 border-black"
                />
                <div className="p-2 text-center text-[10px] text-emerald-900/80 font-mono">
                  {t(`${p}.eu20282029RecyclingQrPassportS`)}</div>
              </NeoCard>

              <div className="space-y-4 order-1 md:order-2">
                <div className="bg-white border-4 border-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-lg text-emerald-950 uppercase">{t(`${p}.unifiedMaterialPictograms`)}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-mono">
                    {t(`${p}.startingIn2028AllRetailPackagi`)}</p>
                </div>
                <div className="bg-white border-4 border-black p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="font-black text-lg text-emerald-950 uppercase">{t(`${p}.scannableDigitalPackagingPassp`)}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-mono">
                    {t(`${p}.highDurabilityAndRecyclablePac`)}</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'materials-pouch',
        title: t(`${p}.b2c.sections.epr.title`, 'EPR Eco-Modulation Taxes & Certified Claims'),
        icon: <Shield className="w-6 h-6" />,
        content: (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              {t(`${p}.vagueMarketingTagsLikeEcoFrien`)}<strong>{t(`${p}.ecomodulated`)}</strong>{t(`${p}.meaningProducersUsingNonRecycl`)}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#10b981]/5 border-4 border-black p-5">
                <h4 className="font-bold text-emerald-950 uppercase mb-2">{t(`${p}.compliantClaimsBackedByDocs`)}</h4>
                <ul className="text-xs space-y-2 font-mono">
                  <li>{t(`${p}.fullyRecyclableMonoPePouchBack`)}</li>
                  <li>{t(`${p}.grsCertified30PcrPolyethyleneS`)}</li>
                  <li>{t(`${p}.tVOkCompostHomeCertifiedVerify`)}</li>
                </ul>
              </div>
              <div className="bg-red-50 border-4 border-red-900/20 p-5">
                <h4 className="font-bold text-red-950 uppercase mb-2">{t(`${p}.illegalGreenwashingClaimsBanne`)}</h4>
                <ul className="text-xs space-y-2 font-mono text-red-900">
                  <li>{t(`${p}.ecoFriendlyBagsLacksSpecificCe`)}</li>
                  <li>{t(`${p}.biodegradablePouchFailsToSpeci`)}</li>
                  <li>{t(`${p}.100SustainableBroadAndMisleadi`)}</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#D4FF00]/10 border-4 border-black p-6">
              <h4 className="font-black text-lg uppercase mb-2 text-emerald-950">{t(`${p}.technicalSpecificationEprTaxRe`)}</h4>
              <p className="text-xs text-gray-600 mb-4 font-mono">
                {t(`${p}.transitioningToCertifiedMonoMa`)}</p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b-2 border-black bg-white/50">
                      <th className="p-3 border-r border-black font-bold">{t(`${p}.metricParameter`)}</th>
                      <th className="p-3 border-r border-black font-bold">{t(`${p}.euPpwrCompliantValue`)}</th>
                      <th className="p-3 font-bold">{t(`${p}.eprModulatedTaxReliefImpact`)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TECH_MATRIX.map((row, idx) => (
                      <tr key={idx} className="border-b border-black/20 hover:bg-white/40 transition">
                        <td className="p-3 border-r border-black font-bold text-emerald-950">{row.param}</td>
                        <td className="p-3 border-r border-black">{row.value}</td>
                        <td className="p-3 text-emerald-900 font-medium">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'roadmap-action',
        title: t(`${p}.b2c.sections.roadmap.title`, 'Brand Owner Sourcing Checklist: 5 Strategic Actions'),
        icon: <FileText className="w-6 h-6" />,
        content: (
          <div className="space-y-6 text-gray-700">
            <p className="font-medium text-black">
              {t(`${p}.toSecureYourEuropeanRetailDist`)}</p>
            <ol className="list-decimal list-inside space-y-4 text-sm font-mono bg-white p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <li>
                <strong>{t(`${p}.skuPackagingAudit`)}</strong> {t(`${p}.mapYourEntirePackagingCatalogC`)}</li>
              <li>
                <strong>{t(`${p}.materialRedesignRightSizing`)}</strong> {t(`${p}.swapThickHeavyPlasticRigidCont`)}</li>
              <li>
                <strong>{t(`${p}.preLabelForSorting`)}</strong> {t(`${p}.incorporateTheStandardized2028`)}</li>
              <li>
                <strong>{t(`${p}.secureCustodyChains`)}</strong> {t(`${p}.requestDynamicLabMigrationTest`)}</li>
              <li>
                <strong>{t(`${p}.partnerWithCertifiedSourcing`)}</strong> {t(`${p}.secureSupplyContractsWithTrust`)}</li>
            </ol>
          </div>
        )
      }
    ]

    return (
      <BlogArticleTemplate
        title={t(`${p}.b2c.seo.title`, "EU PPWR Packaging Compliance Guide 2026 | Pouch.eco")}
        metaDescription={t(`${p}.b2c.seo.metaDescription`, "Master the EU's new PPWR packaging law before mid-August 2026. Actionable brand-owner checklist, design minimization, mono-materials, and safe claims.")}
        canonicalUrl="https://www.pouch.eco/blog/eu-ppwr-compliance-guide"
        keywords={[
          t(`${p}.b2c.seo.keywords.item1`, "EU PPWR compliance guide"),
          t(`${p}.b2c.seo.keywords.item2`, "EU packaging law 2026"),
          t(`${p}.b2c.seo.keywords.item3`, "brand owner packaging audit"),
          t(`${p}.b2c.seo.keywords.item4`, "recyclable mono-PE packaging"),
          t(`${p}.b2c.seo.keywords.item5`, "anti-greenwashing packaging claims")
        ]}
        publishedDate="2026-05-31T08:00:00Z"
        modifiedDate="2026-05-31T08:00:00Z"
        categoryTag="Regulations"
        categoryColor="#022c22"
        heroTitle={
          <Trans i18nKey={`${p}.b2c.heroTitle`}>
            EU PPWR Packaging Law:<br />
            <span className="text-emerald-800">2026 Brand Owner Guide</span>
          </Trans>
        }
        heroSubtitle={t(`${p}.b2c.heroSubtitle`, "The countdown to mid-August 2026 has begun. From mandatory recyclability to strict packaging minimization rules, master the technical compliance roadmap.")}
        heroImage="/imgs/topics/eu-ppwr-compliance.png"
        heroImageAlt={t(`${p}.b2c.heroImageAlt`, "EU PPWR packaging law compliance infographic showing stand-up pouch specifications")}
        sections={b2cSections}
        faqSections={FAQS.map(faq => ({ q: faq.q, a: faq.a }))}
        calendlyUrl="https://calendly.com/ryan-achievepack/30min"
        achievePackLink="https://www.achievepack.com/topics/eu-ppwr-compliance"
        achievePackText={t(`${p}.b2c.achievePackText`, "Need High-Volume Automatic VFFS Packing Runs? Visit AchievePack.com for B2B wholesale pricing (5,000+ pcs)")}
        showTableOfContents={true}
        relatedArticles={[
          {
            title: t(`${p}.b2c.related.art1`, 'Eco Packaging Regulations'),
            url: '/blog/eco-packaging-regulations-guide',
            image: '/imgs/seo-photos/usa/hub/a_labeling_compliance_showcase_8587664.webp'
          },
          {
            title: t(`${p}.b2c.related.art2`, 'BPI Certified Guide'),
            url: '/blog/bpi-certified-guide',
            image: '/imgs/company/bpi/a_bpi_certification_verification_badge_3065504.webp'
          }
        ]}
      />
    )
  }

  // =========================================================================
  // 2. RENDER B2B Achievepack.com Layout (Sleek Corporate Dark Green)
  // =========================================================================
  const b2bSections = [
    {
      id: 'ppwr-overview',
      title: t(`${p}.b2b.sections.targets.title`, 'EU PPWR Legislative Compliance Targets'),
      icon: <Globe className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <p className="text-lg font-semibold text-neutral-900">
            {t(`${p}.forIndustrialBrandsComplianceI`)}<strong>{t(`${p}.august1220261`)}</strong>{t(`${p}.extendedProducerResponsibility`)}<strong>2030</strong> {t(`${p}.recyclableByDesignRequirement`)}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-emerald-800 shadow-sm">
              <h4 className="font-bold text-emerald-800 font-mono text-sm uppercase">{t(`${p}.immediateRegulatoryRisk`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 space-y-2 font-mono">
                <li>{t(`${p}.aggressiveEcomodulatedEprTaxBr`)}</li>
                <li>{t(`${p}.stricterWasteMinimizationVolum`)}</li>
                <li>{t(`${p}.compulsoryDeclarationOfConform`)}</li>
                <li>{t(`${p}.legalRepresentativeRegistratio`)}</li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <h4 className="font-bold text-emerald-600 font-mono text-sm uppercase">{t(`${p}.achievePackSourcingSolutions`)}</h4>
              <ul className="text-xs text-neutral-600 mt-2 space-y-2 font-mono">
                <li>{t(`${p}.curbsideRecyclableMonoPeStruct`)}</li>
                <li>{t(`${p}.certifiedGrsReadyPcrPostConsum`)}</li>
                <li>{t(`${p}.en13432BackyardAndIndustrialCo`)}</li>
                <li>{t(`${p}.iso14040LifeCycleAssessmentCar`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'factory-testing',
      title: t(`${p}.b2b.sections.factoryTesting.title`, 'Factory-Floor Sealing Jaw & OTR Validation'),
      icon: <Shield className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <p className="text-lg font-semibold text-neutral-900">
            {t(`${p}.b2b.sections.factoryTesting.p1`)}
          </p>
          <div className="bg-neutral-50 p-5 rounded-lg border-l-4 border-emerald-800 shadow-sm">
            <h4 className="font-bold text-emerald-800 font-mono text-sm uppercase">{t(`${p}.b2b.sections.factoryTesting.title`)}</h4>
            <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-mono">
              {t(`${p}.b2b.sections.factoryTesting.p2`)}
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'packaging-minimization',
      title: t(`${p}.b2b.sections.minimization.title`, 'Volumetric Minimization & 50% Void Space Caps'),
      icon: <Target className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.thePpwrDemandsThatEveryPackagi`)}</p>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xl space-y-4">
              <h4 className="font-bold text-neutral-900 uppercase text-sm font-mono">{t(`${p}.the50ECommerceAndTransportCap`)}</h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                {t(`${p}.starting2030VoidSpaceMustBeCap`)}<strong>{t(`${p}.50OrLess`)}</strong>{t(`${p}.cruciallyFillerMaterialsLikeBu`)}<strong>{t(`${p}.voidVolume`)}</strong>{t(`${p}.brandsMustShiftTowardCompactCo`)}</p>
            </div>
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 shadow-sm">
              <ClickableImage 
                src="/imgs/topics/eu-ppwr-void-space.png" 
                alt={t(`${p}.b2b.sections.minimization.imageAlt`, "EU PPWR Void Space Infographic")} 
                className="w-full h-auto rounded-lg"
                caption={t(`${p}.b2b.sections.minimization.imageCaption`, "Volumetric minimization logic: replacing oversized boxes with flexible pouches.")}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-infographic',
      title: t(`${p}.b2b.sections.infographic.title`, '2028 Recycling Labels & Dynamic QR Product Passports'),
      icon: <Layers className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">
            {t(`${p}.nationalRecyclingSymbolsAreBei`)}<strong>{t(`${p}.20282029HarmonizedMaterialPict`)}</strong>{t(`${p}.furthermoreHighDurabilityAndCo`)}</p>
          <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 shadow-sm max-w-2xl mx-auto">
            <ClickableImage 
              src="/imgs/topics/eu-ppwr-sorting-labels.png" 
              alt={t(`${p}.b2b.sections.infographic.imageAlt`, "EU PPWR Recycling Labels and QR passports infographic")} 
              className="w-full h-auto rounded-lg"
              caption={t(`${p}.b2b.sections.infographic.imageCaption`, "Pre-integrated 2028 sorting templates and mobile Digital Packaging Passports. Style: nano banana pro 2")}
            />
          </div>
        </div>
      )
    },
    {
      id: 'materials-recyclability',
      title: t(`${p}.b2b.sections.recyclability.title`, 'Certified Sourcing & Eco-Modulated Tax Relief'),
      icon: <Award className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.toIncentivizeSustainabilityEpr`)}</p>
          
          <div className="bg-emerald-950/5 border border-emerald-900/20 rounded-xl overflow-hidden mt-6">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-emerald-950 text-white font-mono uppercase tracking-wider">
                  <th className="p-4 border-r border-emerald-900/30">{t(`${p}.packagingParameter`)}</th>
                  <th className="p-4 border-r border-emerald-900/30">{t(`${p}.compliantValue`)}</th>
                  <th className="p-4">{t(`${p}.financialEprModulationBenefit`)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/10">
                {TECH_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-emerald-50/20 transition-colors">
                    <td className="p-4 font-bold text-emerald-950 border-r border-emerald-900/10">{row.param}</td>
                    <td className="p-4 text-neutral-700 border-r border-emerald-900/10 text-xs">{row.value}</td>
                    <td className="p-4 text-emerald-900 font-medium text-xs">{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'compliance-workstream',
      title: t(`${p}.b2b.sections.roadmap.title`, '5-Step Corporate Sourcing Roadmap'),
      icon: <FileText className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>
            {t(`${p}.supplyChainEngineeringAndLegal`)}</p>
          <div className="grid md:grid-cols-5 gap-4 font-mono">
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-bold text-emerald-800 block mb-2 text-xs">{t(`${p}.01SkuAudit`)}</span>
              <p className="text-[10px] text-neutral-600 leading-normal">{t(`${p}.identifyDoubleWallsHeavyLamina`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-bold text-emerald-800 block mb-2 text-xs">{t(`${p}.02Redesign`)}</span>
              <p className="text-[10px] text-neutral-600 leading-normal">{t(`${p}.convertComplexMultiLayeredBarr`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-bold text-emerald-800 block mb-2 text-xs">{t(`${p}.03PreArtwork`)}</span>
              <p className="text-[10px] text-neutral-600 leading-normal">{t(`${p}.incorporate2028ReadyUnifiedSor`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-bold text-emerald-800 block mb-2 text-xs">{t(`${p}.04Validate`)}</span>
              <p className="text-[10px] text-neutral-600 leading-normal">{t(`${p}.requestGrsCertificationsLcaCar`)}</p>
            </div>
            <div className="bg-white border border-neutral-200 p-4 rounded-lg shadow-sm text-center">
              <span className="font-bold text-emerald-800 block mb-2 text-xs">{t(`${p}.05Deploy`)}</span>
              <p className="text-[10px] text-neutral-600 leading-normal">{t(`${p}.lockInSupplyVolumesWithAudited`)}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: t(`${p}.b2b.sections.cta.title`, 'Secure Your Regulatory Sourcing Strategy'),
      icon: <MessageCircle className="h-5 w-5 text-emerald-800" />,
      content: (
        <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 p-10 rounded-2xl text-white text-center shadow-xl">
          <h3 className="text-3xl font-black mb-4">{t(`${p}.secureComplianceForYourLargeSc`)}</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t(`${p}.auditYourVolumetricDimensionsA`)}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-emerald-950 px-6 py-4 rounded-xl font-bold hover:bg-neutral-100 transition shadow-md"
            >
              <Calendar className="w-5 h-5" />
              {t(`${p}.bookEngineeringConsultation`)}</button>
            <Link
              to="/support/unprinted-samples"
              className="flex items-center justify-center gap-2 border-2 border-[#D4FF00] text-[#D4FF00] px-6 py-4 rounded-xl font-bold hover:bg-white/5 transition shadow-md"
            >
              <Leaf className="w-5 h-5" />
              {t(`${p}.requestFreeSampleKit`)}</Link>
            <Link
              to="/support/sample-quote"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-4 rounded-xl font-bold hover:bg-white/10 transition shadow-md"
            >
              <Award className="w-5 h-5" />
              {t(`${p}.requestCertificationsDoc`)}</Link>
          </div>
          <p className="mt-8 text-[10px] opacity-60 uppercase tracking-widest font-mono">
            {t(`${p}.ppwrRecyclableCertifiedGrsPcrC`)}</p>
        </div>
      )
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t(`${p}.b2b.seo.title`, "EU PPWR Packaging Compliance Guide: 2026 Brand Roadmap | Achieve Pack")}</title>
        <meta name="description" content={t(`${p}.b2b.seo.description`, "Master the EU's Packaging and Packaging Waste Regulation (PPWR) before the mid-August 2026 deadline. Actionable brand-owner audits, minimization, and certified mono-PE.")} />
        <link rel="canonical" href="https://www.achievepack.com/topics/eu-ppwr-compliance" />
        <meta name="keywords" content={t(`${p}.b2b.seo.keywords`, "EU PPWR compliance guide, EU packaging law 2026, packaging minimization rules, anti-greenwashing packaging claims, certified mono-PE packaging, post-consumer recycled plastic taxes")} />
      </Helmet>

      <SEOPageLayout 
        heroBgColor="#022c22"
        title={t(`${p}.b2b.layout.title`, "EU PPWR Compliance: The 2026 Brand Packaging Roadmap")}
        description={t(`${p}.b2b.layout.description`, "A technical guide for procurement directors auditing materials, labels, and minimization rules before the 2026 enforcement.")}
        keywords={[
          t(`${p}.b2b.layout.keywords.item1`, "PPWR compliance"),
          t(`${p}.b2b.layout.keywords.item2`, "EU packaging regulations"),
          t(`${p}.b2b.layout.keywords.item3`, "mono-PE transition")
        ]}
        heroTitle={t(`${p}.b2b.layout.heroTitle`, "Compliant. Minimized. Certified.")}
        heroSubtitle={t(`${p}.b2b.layout.heroSubtitle`, "Master the EU's Ambitions Packaging Regulations (PPWR)")}
        introSummary={t(`${p}.b2b.layout.introSummary`, "The voluntary phase of sustainability is officially over. With strict packaging minimization limits coming into force by mid-August 2026 and mandatory recyclability grades leading into 2030, brand owners exporting to the European Union must transition. This engineering guide details the technical and sourcing criteria required to protect your distribution and margin.")}
        sections={b2bSections}
        faqs={FAQS.map(faq => ({ question: faq.q, answer: faq.a }))}
        schemaType="Article"
        heroImage="/imgs/topics/eu-ppwr-compliance.png"
      />
    </>
  )
}

export default EUPPWRCompliancePage
