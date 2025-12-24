import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Baby, Package, CheckCircle, Award, Calendar, MessageCircle, Target, Shield, Heart, AlertTriangle, FileCheck } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostableBabyFoodBagsPage: React.FC = () => {
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'hero-problem',
      title: 'Why Compostable for Baby Food?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border border-pink-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              Parents choosing organic baby food expect <strong>sustainable, safe packaging</strong>. Certified compostable pouches align with the values of health-conscious families while meeting rigorous food safety standards.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-pink-800">Parent Expectations</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• BPA-free, phthalate-free materials</li>
                  <li>• No harmful chemical migration</li>
                  <li>• Environmentally responsible end-of-life</li>
                  <li>• Trustworthy certification logos</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-800">What We Provide</h4>
                <ul className="text-sm text-neutral-600 mt-2 space-y-1">
                  <li>• TUV certified compostable materials</li>
                  <li>• FDA and EU food contact compliant</li>
                  <li>• Migration testing documentation</li>
                  <li>• Spout and stand-up pouch options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety-first',
      title: 'Baby Food Safety Standards',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Baby food packaging requires the <strong>highest safety standards</strong>. Our compostable materials are tested and certified for infant food contact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center">
              <FileCheck className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-800">FDA Compliant</h4>
              <p className="text-sm text-blue-700 mt-2">Meets FDA 21 CFR requirements for food contact materials.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 text-center">
              <Shield className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-purple-800">EU 10/2011</h4>
              <p className="text-sm text-purple-700 mt-2">Compliant with European plastics regulations for food contact.</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200 text-center">
              <Heart className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-green-800">BPA & Phthalate Free</h4>
              <p className="text-sm text-green-700 mt-2">Free from concerning chemicals. Migration tested.</p>
            </div>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg mt-4 border border-pink-200">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-pink-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-pink-800">
                <strong>Important:</strong> Not all "eco-friendly" packaging meets baby food requirements. We provide full documentation including migration testing, certifications, and declarations of compliance.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-options',
      title: 'Baby Food Pouch Formats',
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Choose the right <strong>compostable pouch format</strong> for your baby food product line.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex gap-4">
                <ClickableImage 
                  src="/imgs/store/shape/spout-pouch.webp" 
                  alt="Compostable spout pouch for baby food" 
                  className="w-24 h-24 object-cover rounded-lg"
                  caption="Spout Pouch"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">Spout Pouches</h4>
                  <p className="text-sm text-neutral-600 mt-1">Perfect for purees and smoothies. Easy squeeze format. Resealable cap options.</p>
                  <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                    <li>• 70ml to 150ml sizes</li>
                    <li>• Compostable spout options</li>
                    <li>• Child-safe cap designs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex gap-4">
                <ClickableImage 
                  src="/imgs/store/shape/stand-up-pouch.webp" 
                  alt="Compostable stand-up pouch for baby snacks" 
                  className="w-24 h-24 object-cover rounded-lg"
                  caption="Stand Up"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">Stand-Up Pouches</h4>
                  <p className="text-sm text-neutral-600 mt-1">Ideal for puffs, teething biscuits, and dry snacks. Resealable zipper.</p>
                  <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                    <li>• Multiple sizes available</li>
                    <li>• Clear window options</li>
                    <li>• Easy-open tear notches</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex gap-4">
                <ClickableImage 
                  src="/imgs/store/shape/flat-pouch.webp" 
                  alt="Compostable sachet for baby food" 
                  className="w-24 h-24 object-cover rounded-lg"
                  caption="Sachets"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">Single-Serve Sachets</h4>
                  <p className="text-sm text-neutral-600 mt-1">Portion control for cereals, powders, and instant meals.</p>
                  <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                    <li>• 15g to 50g portions</li>
                    <li>• Easy-tear opening</li>
                    <li>• Multi-pack friendly</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg border border-neutral-200">
              <div className="flex gap-4">
                <ClickableImage 
                  src="/imgs/store/shape/flat-bottom-pouch.webp" 
                  alt="Compostable flat bottom bag" 
                  className="w-24 h-24 object-cover rounded-lg"
                  caption="Flat Bottom"
                />
                <div>
                  <h4 className="font-semibold text-neutral-800">Flat Bottom Bags</h4>
                  <p className="text-sm text-neutral-600 mt-1">Premium shelf presence for organic baby food lines.</p>
                  <ul className="text-xs text-neutral-500 mt-2 space-y-1">
                    <li>• Stands upright beautifully</li>
                    <li>• Maximum print area</li>
                    <li>• Premium brand positioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: 'Certifications for Baby Food Packaging',
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            Complete <strong>certification documentation</strong> for retailer audits and regulatory compliance.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌱</div>
              <h5 className="font-semibold text-neutral-800">TUV OK Home</h5>
              <p className="text-xs text-neutral-600">Home Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h5 className="font-semibold text-neutral-800">EN 13432</h5>
              <p className="text-xs text-neutral-600">Industrial Compostable</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">✅</div>
              <h5 className="font-semibold text-neutral-800">BRC Certified</h5>
              <p className="text-xs text-neutral-600">Food Safety</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center">
              <div className="text-2xl mb-2">🌾</div>
              <h5 className="font-semibold text-neutral-800">Organic Compatible</h5>
              <p className="text-xs text-neutral-600">USDA/EU Organic</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-200">
            <h5 className="font-semibold text-green-800 mb-2">Documentation Package:</h5>
            <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Compostability certificates</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Migration test reports</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Food contact declarations</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4" />
                <span>Material specifications</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Get Baby Food Packaging Samples',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Request Certified Samples</h3>
          <p className="text-lg mb-6 opacity-90">
            Get compostable baby food pouch samples with complete certification documentation. Test with your products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition"
            >
              <Calendar className="h-5 w-5" />
              Discuss Requirements
            </button>
            <Link
              to="/industry/baby-food"
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <Baby className="h-5 w-5" />
              Baby Food Guide
            </Link>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: "Are compostable pouches safe for baby food?",
      answer: "Yes, our compostable baby food pouches are FDA compliant, EU food contact approved, BPA-free, and phthalate-free. We provide migration testing documentation and declarations of compliance. All materials are manufactured in BRC-certified facilities."
    },
    {
      question: "What certifications do you provide for baby food packaging?",
      answer: "We provide TUV OK Home Compost or EN 13432 certification for compostability, plus FDA/EU food contact compliance documentation, migration test reports, BRC certificates, and material specifications suitable for retailer audits."
    },
    {
      question: "Can you make compostable spout pouches for baby food?",
      answer: "Yes, we offer compostable spout pouches in sizes suitable for baby food (70ml-150ml). Both the pouch body and spout can be compostable. Child-safe cap designs are available."
    },
    {
      question: "What is the minimum order for baby food pouches?",
      answer: "Our minimum order for custom printed compostable baby food pouches is 100 pieces with digital printing. We also offer stock compostable pouches with no minimum for initial testing."
    },
    {
      question: "How do I know the packaging is truly compostable and not just greenwashing?",
      answer: "Our compostable materials are third-party certified by TUV Austria (OK Home Compost) or meet EN 13432 / ASTM D6400 standards. We provide actual certificate copies, not just claims. You can verify certificates directly with the certifying bodies."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Certified Compostable Bags for Baby Food | Food-Safe Pouches | Achieve Pack</title>
        <meta name="description" content="Certified compostable baby food pouches. FDA compliant, BPA-free, TUV certified. Spout pouches, stand-up bags, and sachets for organic baby food brands. Full documentation provided." />
        <link rel="canonical" href="https://achievepack.com/topics/compostable-baby-food-bags" />
        <meta name="keywords" content="compostable baby food pouches, certified baby food packaging, organic baby food bags, BPA-free baby pouches" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Certified Compostable Baby Food Pouches",
            "description": "FDA compliant, TUV certified compostable pouches for baby food products.",
            "brand": { "@type": "Brand", "name": "Achieve Pack" }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title="Certified Compostable Bags for Baby Food"
        description="FDA compliant, BPA-free, TUV certified compostable pouches for baby food brands."
        keywords={['compostable baby food pouches', 'certified baby food packaging', 'organic baby food bags']}
        heroTitle="Certified Compostable Bags for Baby Food"
        heroSubtitle="FDA Compliant | BPA-Free | TUV Certified"
        introSummary="Give parents the peace of mind they deserve. Our certified compostable baby food pouches meet the highest safety standards while providing a sustainable end-of-life pathway."
        sections={sections}
        faqs={faqs}
        schemaType="Product"
        heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      />
    </>
  )
}

export default CompostableBabyFoodBagsPage
