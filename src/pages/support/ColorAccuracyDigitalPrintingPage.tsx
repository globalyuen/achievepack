import React from 'react'
import { useTranslation } from 'react-i18next'
import SEOPageLayout from '../../components/SEOPageLayout'
import { Monitor, Printer, Scaling, ArrowRight, Layers, Target, Coins } from 'lucide-react'

const ColorAccuracyDigitalPrintingPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.colorAccuracyDigitalPrinting'

  return (
    <SEOPageLayout 
      heroBgColor="#1e293b"
      title={t(`${p}.metaTitle`)}
      description={t(`${p}.metaDesc`)}
      keywords={['digital printing color accuracy', 'RGB vs CMYK packaging', 'custom packaging printing', 'individual printing run', 'group printing packaging']}
      heroTitle={t(`${p}.heroTitle`)}
      heroSubtitle={t(`${p}.heroSubtitle`)}
      heroImage="/imgs/support/color-accuracy.png"
      heroImageAlt="Digital printing color accuracy showing RGB hex code vs physical CMYK printed packaging"
      introSummary={t(`${p}.introSummary`)}
      sections={[
        {
          id: 'digital-physical-gap',
          title: 'The Digital vs. Physical Gap',
          icon: <Monitor className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Digital values like hex codes (e.g., #b99a5a) are designed for light-emitting screens (RGB). Physical printing presses, however, utilize ink absorption (CMYK). This fundamental difference creates a natural variance.
                </p>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary-500" />
                      Screen Variance
                    </h4>
                    <p className="text-sm text-neutral-600">Every monitor displays color differently depending on its brightness, contrast, and calibration profile. The exact shade you see on your smartphone will inherently look different than on a professional design monitor.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <h4 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary-500" />
                      The 10% Industry Rule
                    </h4>
                    <p className="text-sm text-neutral-600">Because light (screen) and ink (paper/plastic) are entirely different mediums, a <strong>10% color discrepancy</strong> is the standard industry expectation. The printed version will naturally be slightly more matte than a glowing screen.</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-100 rounded-2xl p-8 border border-neutral-200">
                <img 
                  src="/imgs/support/color-accuracy.png" 
                  alt="Digital screen vs physical printed packaging" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          )
        },
        {
          id: 'group-printing',
          title: 'Standard Group Printing (Efficiency vs. Control)',
          icon: <Printer className="h-6 w-6 text-primary-600" />,
          content: (
            <div>
              <p className="text-neutral-600 mb-6 leading-relaxed max-w-3xl">
                Most standard orders are produced via <strong>Group Printing</strong>, where your artwork is laid out on a large roll of material alongside other clients' designs to maximize manufacturing efficiency.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 mb-2">{t(`${p}.standardizationProtocol`)}</h4>
                  <p className="text-sm text-neutral-600">Because multiple designs are printed simultaneously on standardized materials, we cannot manually tweak or offset the ink levels exclusively for one single design without affecting the others.</p>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 mb-2">The Economic Result</h4>
                  <p className="text-sm text-neutral-600">This method keeps production costs significantly lower for small-to-medium batches. However, the trade-off is that we cannot guarantee a 100% exact color match to your specific monitor profile.</p>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'individual-run',
          title: 'Individual Run (Precision Scaling)',
          icon: <Scaling className="h-6 w-6 text-primary-600" />,
          content: (
            <div className="bg-primary-50 border border-primary-100 rounded-3xl p-8">
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Dedicated Production for Color Precision</h3>
                <p className="text-neutral-700 leading-relaxed">
                  If your brand requires absolute 100% color precision, we can perform an <strong>Individual Run</strong>. This means the digital printing press is configured and calibrated exclusively for your design, allowing us to tweak the color profile exactly to your target.
                </p>
                <p className="text-neutral-700 leading-relaxed mt-4">
                  However, because the press setup time and labor are identical regardless of quantity, the cost per unit is substantially higher for smaller orders.
                </p>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="py-4 px-6 font-bold text-neutral-900 border-b border-neutral-200">Order Quantity</th>
                      <th className="py-4 px-6 font-bold text-neutral-900 border-b border-neutral-200">Cost Comparison (Individual Run)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="py-4 px-6 text-neutral-700 font-medium">Under 500 pcs</td>
                      <td className="py-4 px-6 text-red-600 font-bold flex items-center gap-2"><Coins className="w-4 h-4" /> 5x higher cost</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-neutral-700 font-medium">Under 1,000 pcs</td>
                      <td className="py-4 px-6 text-orange-600 font-bold flex items-center gap-2"><Coins className="w-4 h-4" /> 3x higher cost</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-neutral-700 font-medium">Under 3,000 pcs</td>
                      <td className="py-4 px-6 text-amber-600 font-bold flex items-center gap-2"><Coins className="w-4 h-4" /> 2x higher cost</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="py-4 px-6 text-green-800 font-bold">Over 5,000 pcs</td>
                      <td className="py-4 px-6 text-green-800 font-bold">Standard Price (Individual run included)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-500 mt-4 italic">
                <strong>Logic:</strong> Once you reach the 5,000-unit threshold, the volume is large enough to mathematically justify a dedicated production run at our standard unit pricing. At this level, you receive maximum color control without any "small-batch" premium.
              </p>
            </div>
          )
        }
      ]}
      faqs={[
        {
          question: "Can I get a physical proof before mass production?",
          answer: "Yes, we highly recommend ordering a Custom Printed Sample if color accuracy is absolutely critical. This allows you to review a physical prototype from the actual press before committing to thousands of units."
        },
        {
          question: "Why do my files look brighter on screen?",
          answer: "Screens emit light (RGB), which makes colors appear more vibrant and illuminated. Packaging absorbs light and uses CMYK ink, which inherently has a slightly smaller and more muted color gamut than digital screens."
        },
        {
          question: "If I choose the standard group run, will the color be completely wrong?",
          answer: "No. Our automated digital presses are highly calibrated, and the vast majority of clients are thrilled with standard group printing. The 10% variance rule simply means the shade might be slightly cooler, warmer, or more matte than a backlit screen."
        }
      ]}
      ctaTitle="How would you like to proceed?"
      ctaDescription="We can move forward with the standard group run if a slight variance is acceptable, or we can quote you for a dedicated run if accuracy is the priority."
      ctaButtonText="Discuss My Project"
      ctaButtonUrl="https://calendly.com/30-min-free-packaging-consultancy"
    />
  )
}

export default ColorAccuracyDigitalPrintingPage
