import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FileText, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Globe, Scale, AlertTriangle, Factory, BarChart3, ArrowLeftRight, TrendingUp, ShoppingBag, Sparkles } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const EcoPackagingRegulationsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'The Regulatory Landscape for Eco Packaging',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Food packaging regulations are evolving rapidly as governments push for sustainability. Understanding <strong>compliance requirements</strong> across markets is essential for brands going eco-friendly.
            </p>
            <div className="bg-amber-100 p-4 rounded-lg mt-4 border border-amber-300">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Regulatory Alert:</strong> The EU, UK, and several US states have introduced new Extended Producer Responsibility (EPR) and plastic reduction mandates. Non-compliant packaging may face fees, restrictions, or market access issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'regional-regs',
      title: 'Regional Regulations Overview',
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Key <strong>packaging regulations by region</strong> affecting food brands. We help you navigate compliance across all markets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇪🇺</span>
                <h4 className="font-semibold text-blue-800">European Union</h4>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li><strong>PPWR:</strong> New Packaging and Packaging Waste Regulation (2025+)</li>
                <li><strong>SUP Directive:</strong> Single-Use Plastics restrictions</li>
                <li><strong>EN 13432:</strong> Industrial compostability standard</li>
                <li><strong>EPR:</strong> Extended Producer Responsibility fees</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇬🇧</span>
                <h4 className="font-semibold text-red-800">United Kingdom</h4>
              </div>
              <ul className="text-sm text-red-700 space-y-2">
                <li><strong>Plastic Packaging Tax:</strong> £217.85/tonne if &lt;30% recycled content</li>
                <li><strong>EPR:</strong> Full producer responsibility from 2024</li>
                <li><strong>Collection & Labeling:</strong> New requirements by 2025</li>
                <li><strong>PAS 9017:</strong> Home compostability standard</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇺🇸</span>
                <h4 className="font-semibold text-indigo-800">United States</h4>
              </div>
              <ul className="text-sm text-indigo-700 space-y-2">
                <li><strong>State Laws:</strong> California SB 54, Maine, Oregon EPR</li>
                <li><strong>ASTM D6400:</strong> Industrial compostability standard</li>
                <li><strong>FTC Green Guides:</strong> Environmental marketing claims</li>
                <li><strong>FDA:</strong> Food contact material safety</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇦🇺</span>
                <h4 className="font-semibold text-green-800">Australia & New Zealand</h4>
              </div>
              <ul className="text-sm text-green-700 space-y-2">
                <li><strong>2025 Targets:</strong> APCO packaging targets</li>
                <li><strong>AS 5810:</strong> Home composting standard</li>
                <li><strong>AS 4736:</strong> Industrial composting standard</li>
                <li><strong>REDcycle:</strong> Soft plastic collection (check status)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Compliance Certifications',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Third-party certifications</strong> provide documented proof of compliance for audits, retailers, and marketing claims.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h5 className="font-semibold text-neutral-800">TUV OK Compost</h5>
              <p className="text-xs text-neutral-600">Home & Industrial</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">♻️</div>
              <h5 className="font-semibold text-neutral-800">How2Recycle</h5>
              <p className="text-xs text-neutral-600">US/Canada</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h5 className="font-semibold text-neutral-800">BRC Certified</h5>
              <p className="text-xs text-neutral-600">Food Safety</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌲</div>
              <h5 className="font-semibold text-neutral-800">FSC Certified</h5>
              <p className="text-xs text-neutral-600">Paper Sources</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-4 rounded-lg mt-4 border border-neutral-200">
            <h5 className="font-semibold text-neutral-800 mb-2">Documentation We Provide:</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Certificate copies</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Test reports</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>COCs</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Migration data</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'food-safety',
      title: 'Food Contact Safety',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Sustainable packaging must also meet <strong>food contact safety regulations</strong>. All our materials are tested and certified.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">FDA Compliant (US)</h5>
              <p className="text-sm text-blue-700">All materials meet FDA 21 CFR requirements for food contact. Migration testing available.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">EU Food Contact (EU)</h5>
              <p className="text-sm text-blue-700">Compliant with EC 1935/2004 and EC 10/2011 for plastics. Declarations of Compliance provided.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">BRC Certified (Global)</h5>
              <p className="text-sm text-blue-700">Our manufacturing facilities hold BRC Global Standard certification for packaging materials.</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Audit Ready:</strong> We provide complete documentation packages for retailer audits, including material specifications, food safety certificates, and environmental certifications.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Navigate Compliance With Expert Help',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Compliance Consultation</h3>
          <p className="text-lg mb-6 opacity-90">
            Discuss your target markets and compliance requirements. We'll recommend materials with the right certifications and provide full documentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Free Compliance Review
            </button>
            <Link
              to="/materials/compostable"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <FileText className="h-5 w-5" />
              View Certifications
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 'industry-scenarios',
      title: '行業應用場景 Industry Applications',
      icon: <Factory className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">了解各行業如何應對環保包裝法規變化。</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-800">有機食品品牌</h4>
              </div>
              <p className="text-sm text-green-700">有機品牌採用TUV認證可堆肥包裝，符合歐美及澳洲的有機認證要求。</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">大型零售商</h4>
              </div>
              <p className="text-sm text-blue-700">零售巨頭要求供應商提供EPR合規証明，可回收包裝成為上架必要條件。</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">出口品牌</h4>
              </div>
              <p className="text-sm text-purple-700">出口歐美的品牌需要同時滿足多國法規，我們提供全面合規支持。</p>
            </div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800"><strong>案例分享：</strong>某食品品牌透過我們的合規支持，成功獲得英國、歐盟、美國三大市場的包裝認證，節省10%塑料稅成本。</p>
          </div>
        </div>
      )
    },
    {
      id: 'market-data',
      title: '市場數據 Market Intelligence',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">全球包裝法規正快速變化，採取行動刻不容緩。</p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-primary-600">£217</div>
              <p className="text-sm text-neutral-600 mt-1">英國塑料稅/噸（未達30%PCR）</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-green-600">2025</div>
              <p className="text-sm text-neutral-600 mt-1">EU PPWR新包裝法規生效年</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <p className="text-sm text-neutral-600 mt-1">美國已推行EPR法案的州</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-3xl font-bold text-purple-600">30%</div>
              <p className="text-sm text-neutral-600 mt-1">英國免塑料稅最低PCR比例</p>
            </div>
          </div>
          <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
            <h4 className="font-semibold text-neutral-800 mb-2">法規趨勢預測</h4>
            <p className="text-sm text-neutral-600">歐盟、英國、美國各州正在加速推動包裝法規。預計2027年後，所有主要市場都將有強制性的可持續包裝要求。提前佈局的品牌將獲得先發優勢。</p>
          </div>
        </div>
      )
    },
    {
      id: 'material-comparison',
      title: '材料對比 Material Comparison',
      icon: <ArrowLeftRight className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg">比較不同材料的法規合規性，選擇最佳方案。</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="p-3 text-left text-sm">材料類型</th>
                  <th className="p-3 text-left text-sm">歐盟EU</th>
                  <th className="p-3 text-left text-sm">英國UK</th>
                  <th className="p-3 text-left text-sm">美國US</th>
                  <th className="p-3 text-left text-sm">澳洲AU</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">可堆肥材料</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">EN13432</span></td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">PAS9017</span></td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">ASTM D6400</span></td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">AS5810</span></td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">可回收材料</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">RecyClass</span></td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">OPRL</span></td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">How2Recycle</span></td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">APCO</span></td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-medium">PCR內容</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PPWR要求</span></td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">≥30%免稅</span></td>
                  <td className="p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">州別規定</span></td>
                  <td className="p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">自願目標</span></td>
                </tr>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <td className="p-3 font-medium">食品安全</td>
                  <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">EC1935</span></td>
                  <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">UK FCM</span></td>
                  <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">FDA 21CFR</span></td>
                  <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">FSANZ</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-800"><strong>專家建議：</strong>出口多個市場的品牌應選擇可同時滿足多國法規的材料。我們提供完整的合規文件包支持客戶通過各市場審核。</p>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "What certifications do I need for eco-friendly food packaging in the EU?",
      answer: "For compostable claims in the EU, you need EN 13432 certification for industrial compostability or OK Home Compost for home compostability. Food contact compliance requires EC 1935/2004 documentation. For recyclability, consider RecyClass certification."
    },
    {
      question: "How does the UK Plastic Packaging Tax affect my packaging choices?",
      answer: "The UK Plastic Packaging Tax applies £217.85/tonne to packaging with less than 30% recycled content. You can avoid this tax by using materials with 30%+ PCR content, switching to compostable materials (exempt), or using paper-based solutions."
    },
    {
      question: "What US regulations apply to eco-friendly food packaging?",
      answer: "Key US requirements include FDA food contact safety (21 CFR), state-specific EPR laws (California SB 54, Maine, Oregon), and FTC Green Guides for environmental marketing claims. ASTM D6400 is the standard for compostability claims."
    },
    {
      question: "Do you provide documentation for retailer sustainability audits?",
      answer: "Yes, we provide complete documentation packages including material specifications, third-party certificates, food safety declarations, and environmental certifications. This supports audits from retailers like Walmart, Target, Whole Foods, and major UK/EU grocers."
    },
    {
      question: "How often do packaging regulations change?",
      answer: "Packaging regulations are evolving rapidly. The EU PPWR and UK EPR have significant updates in 2024-2025. We track regulatory changes and proactively advise clients when their packaging may be affected by new requirements."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Regulations for Eco-Friendly Food Packaging | Compliance Guide | Achieve Pack</title>
        <meta name="description" content="Navigate eco-friendly food packaging regulations across EU, UK, US, and Australia. Certification requirements, EPR compliance, and food safety standards explained." />
        <link rel="canonical" href="https://achievepack.com/topics/eco-packaging-regulations" />
        <meta name="keywords" content="eco packaging regulations, sustainable packaging compliance, food packaging certifications, EU PPWR, UK plastic tax" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Regulations for Eco-Friendly Food Packaging",
            "description": "Comprehensive guide to eco-friendly packaging regulations across major markets.",
            "author": { "@type": "Organization", "name": "Achieve Pack" },
            "publisher": { "@type": "Organization", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Regulations for Eco-Friendly Food Packaging"
        description="Navigate packaging regulations across EU, UK, US, and Australia. Certification requirements and compliance guidance."
        keywords={['eco packaging regulations', 'sustainable packaging compliance', 'food packaging certifications']}
        heroTitle="Regulations for Eco-Friendly Food Packaging"
        heroSubtitle="Compliance Guide | Multi-Market | Expert Support"
        introSummary="Packaging regulations are evolving rapidly. Our guide covers key requirements across the EU, UK, US, and Australia—helping you choose compliant sustainable materials with proper documentation."
        sections={sections}
        faqs={faqs}
        schemaType="Article"
        heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      />
    </>
  )
}

export default EcoPackagingRegulationsPage
