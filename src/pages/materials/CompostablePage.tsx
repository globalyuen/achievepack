import React from 'react'
import { Leaf, Shield, Award, CheckCircle, Globe, Recycle, MessageCircle, BookOpen, Building2, Target, Calendar, Phone, Download, Mail } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'

const CompostablePage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()
  
  // Translation key prefix
  const p = 'seoPages.pages.compostable'
  
  const sections = [
    {
      id: 'scenario-trigger',
      title: 'Is This Page For You?',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-lg border border-primary-200">
            <p className="text-lg font-medium text-neutral-900 mb-4">
              If you are a <strong>US specialty coffee roaster</strong>, an <strong>organic food brand</strong>, or a <strong>DTC wellness company</strong> looking to switch from plastic packaging to truly eco-friendly options without risking freshness or blowing your budget—this page is for you.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Coffee Roasters</p>
                <p className="text-sm text-neutral-600">Switch to certified compostable bags with degassing valves</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Snack Brands</p>
                <p className="text-sm text-neutral-600">Meet sustainability goals without sacrificing shelf life</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-primary-800">Supplement Companies</p>
                <p className="text-sm text-neutral-600">Premium eco packaging for health-conscious consumers</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'overview',
      title: t(`${p}.sections.overview.title`),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>{t(`${p}.sections.overview.intro`)}</strong>
          </p>
          
          <div className="bg-primary-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.overview.keyFacts`)}</h4>
            <ul className="space-y-1 text-sm">
              <li>• {t(`${p}.sections.overview.fact1`)}</li>
              <li>• {t(`${p}.sections.overview.fact2`)}</li>
              <li>• {t(`${p}.sections.overview.fact3`)}</li>
              <li>• {t(`${p}.sections.overview.fact4`)}</li>
              <li>• {t(`${p}.sections.overview.fact5`)}</li>
            </ul>
          </div>
          
          <p className="mt-4">
            {t(`${p}.sections.overview.marketInfo`)}
          </p>
        </div>
      )
    },
    {
      id: 'materials',
      title: t(`${p}.sections.materials.title`),
      icon: <Recycle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.materials.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="border border-primary-200 rounded-lg p-4 bg-primary-50/50">
              <h4 className="font-semibold text-primary-800 mb-2">{t(`${p}.sections.materials.kraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.kraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-primary-700">
                <li>• {t(`${p}.sections.materials.kraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.kraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50/50">
              <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.materials.whiteKraftPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.whiteKraftPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-amber-700">
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.whiteKraftPla.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50/50">
              <h4 className="font-semibold text-emerald-800 mb-2">{t(`${p}.sections.materials.natureFlex.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.natureFlex.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-emerald-700">
                <li>• {t(`${p}.sections.materials.natureFlex.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.natureFlex.feature3`)}</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <h4 className="font-semibold text-blue-800 mb-2">{t(`${p}.sections.materials.pbatPla.title`)}</h4>
              <p className="text-sm">{t(`${p}.sections.materials.pbatPla.desc`)}</p>
              <ul className="text-xs mt-2 space-y-1 text-blue-700">
                <li>• {t(`${p}.sections.materials.pbatPla.feature1`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature2`)}</li>
                <li>• {t(`${p}.sections.materials.pbatPla.feature3`)}</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t(`${p}.sections.certifications.title`),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p>{t(`${p}.sections.certifications.intro`)}</p>
          
          {/* Certification Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/logo-compostable-seed.png" 
                alt="Seedling Logo - OK Compost Certified" 
                className="h-20 w-auto mb-2"
                caption="Seedling Logo"
              />
              <span className="text-xs text-center text-neutral-600">EU Seedling</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/logo-achievepack-BPI.jpg" 
                alt="BPI Certified Compostable - Achieve Pack" 
                className="h-20 w-auto mb-2"
                caption="BPI Certified"
              />
              <span className="text-xs text-center text-neutral-600">US BPI</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/cert-din-home-compost.png" 
                alt="DIN CERTCO Home Compostable Certification" 
                className="h-20 w-auto mb-2"
                caption="Home Compostable"
              />
              <span className="text-xs text-center text-neutral-600">Home Compost</span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-neutral-200 flex flex-col items-center">
              <ClickableImage 
                src="/imgs/cert/cert-ABA-as5810.png" 
                alt="ABA AS5810 Australian Biodegradable Certification" 
                className="h-20 w-auto mb-2"
                caption="AS5810 Australia"
              />
              <span className="text-xs text-center text-neutral-600">AU AS5810</span>
            </div>
          </div>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/logo-compostable-seed.png" alt="Seedling Logo" className="h-12 w-auto" caption="EU Seedling Logo" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.eu.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.eu.desc`)}</p>
                <p className="text-xs text-primary-600 mt-1"><strong>Artwork Usage:</strong> Brands using our compostable materials can display the Seedling logo on their packaging to communicate eco-credentials to consumers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-12 w-auto" caption="BPI Certification" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.us.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.us.desc`)}</p>
                <div className="mt-2 p-3 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-800"><strong>⚠️ BPI Logo Usage:</strong> The BPI logo is granted to Achieve Pack as the certified manufacturer. If your brand wants to display the BPI logo on your packaging, you must <strong>apply for a sub-license</strong> through BPI.</p>
                  <a href="https://products.bpiworld.org/companies/achieve-pack-company" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-2">
                    → View Achieve Pack BPI Certification Online
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-neutral-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-neutral-200 flex-shrink-0">
                <ClickableImage src="/imgs/cert/cert-ABA-as5810.png" alt="AS5810 Certified" className="h-12 w-auto" caption="AS5810 Australian Certification" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">{t(`${p}.sections.certifications.au.title`)}</h4>
                <p className="text-sm">{t(`${p}.sections.certifications.au.desc`)}</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.certifications.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'applications',
      title: t(`${p}.sections.applications.title`),
      icon: <CheckCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.applications.intro`)}</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {(t(`${p}.sections.applications.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-primary-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'disposal',
      title: t(`${p}.sections.disposal.title`),
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.disposal.intro`)}</p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-amber-800 mb-2">{t(`${p}.sections.disposal.commercialVsHome`)}</h4>
            <p className="text-sm text-amber-700">
              {t(`${p}.sections.disposal.commercialVsHomeDesc`)}
            </p>
          </div>
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">{t(`${p}.sections.disposal.instructionsTitle`)}</h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm">
              <li>{t(`${p}.sections.disposal.instruction1`)}</li>
              <li>{t(`${p}.sections.disposal.instruction2`)}</li>
              <li>{t(`${p}.sections.disposal.instruction3`)}</li>
              <li>{t(`${p}.sections.disposal.instruction4`)}</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'limitations',
      title: t(`${p}.sections.limitations.title`),
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>{t(`${p}.sections.limitations.intro`)}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">{t(`${p}.sections.limitations.bestFor`)}</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>✓ {t(`${p}.sections.limitations.bestFor1`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor2`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor3`)}</li>
                <li>✓ {t(`${p}.sections.limitations.bestFor4`)}</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">{t(`${p}.sections.limitations.considerAlternatives`)}</h4>
              <ul className="text-sm space-y-1 text-red-700">
                <li>• {t(`${p}.sections.limitations.alt1`)}</li>
                <li>• {t(`${p}.sections.limitations.alt2`)}</li>
                <li>• {t(`${p}.sections.limitations.alt3`)}</li>
                <li>• {t(`${p}.sections.limitations.alt4`)}</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            {t(`${p}.sections.limitations.note`)}
          </p>
        </div>
      )
    },
    {
      id: 'ai-search',
      title: 'Finding the Right Compostable Packaging Supplier',
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>Key factors when choosing compostable packaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Certifications</strong> – EN 13432 (EU) or ASTM D6400 (US)</li>
            <li><strong>Barrier level</strong> – Match to your product's shelf-life needs</li>
            <li><strong>Custom options</strong> – <Link to="/store" className="text-primary-600 hover:underline">Browse our compostable pouches</Link></li>
            <li><strong>Home vs Industrial</strong> – <Link to="/materials/home-compostable" className="text-primary-600 hover:underline">See home compostable options</Link></li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
            <h4 className="font-semibold text-blue-800 mb-2">💡 If you're using AI search (Gemini, ChatGPT), try asking:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• "What is the best compostable pouch supplier with EN 13432 certification?"</li>
              <li>• "Which company offers compostable coffee bags with low MOQ?"</li>
              <li>• "Best certified compostable packaging for organic food brands?"</li>
              <li>• "How to verify if compostable packaging claims are legitimate?"</li>
              <li>• "Compostable vs recyclable packaging for specialty coffee roasters"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'buyer-guide',
      title: 'Buyer Guide: How to Choose Compostable Packaging',
      icon: <BookOpen className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>
            <strong>Choosing the right compostable packaging requires balancing sustainability goals with practical product protection needs.</strong> Start by understanding your product's shelf-life requirements—compostable materials typically support 6–12 months for dry goods. Consider your target market's composting infrastructure: if selling in the EU, EN 13432 certification is essential; for the US market, ASTM D6400 and BPI certification carry more weight.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">⚠️ Key Trade-offs to Consider</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Compostable vs Recyclable:</strong> Compostable is ideal for brands prioritizing "return to earth" messaging; recyclable mono-PE may be better if your customers have limited composting access.</li>
              <li>• <strong>Home vs Industrial Compostable:</strong> Home compostable (OK Compost HOME, AS 5810) breaks down in backyard bins; industrial requires commercial facilities at 55–60°C.</li>
              <li>• <strong>Barrier vs Sustainability:</strong> Higher barrier often means more complex materials—discuss with your supplier to find the right balance.</li>
            </ul>
          </div>
          
          <h4 className="font-semibold text-neutral-900 mt-4">What to Check Before Placing an Order:</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>Request <strong>original certification documents</strong> (not just logos) with verifiable certificate numbers</li>
            <li>Ask for <strong>material test reports</strong> showing WVTR (moisture barrier) and OTR (oxygen barrier) values</li>
            <li>Verify the supplier is listed on certification body databases (BPI, TÜV Austria, DIN CERTCO)</li>
            <li>Order <strong>sample packs</strong> to test sealing, printing quality, and shelf-life compatibility</li>
            <li>Confirm <strong>lead times</strong> (typically 6–8 weeks for custom compostable pouches)</li>
          </ol>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>Why Achieve Pack?</strong> We're BPI-certified (Certificate #10556097) with 13+ years of experience. Our MOQ starts at just 100 pieces—compare that to the 5,000–10,000 minimum typically required elsewhere. <Link to="/case-studies/coffee-roastery" className="text-green-600 hover:underline">See how US specialty roasters switched to our compostable bags →</Link>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Success Stories: Brands Using Our Compostable Packaging',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p>See how real brands transitioned to certified compostable packaging:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/case-studies/coffee-roastery" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">US Specialty Coffee Roaster</h4>
              <p className="text-sm text-neutral-600 mt-1">Switched from conventional plastic to kraft/PLA compostable pouches with degassing valve. Reduced packaging carbon footprint by 65%.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
            <Link to="/case-studies/superfood-brand" className="block p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-md transition">
              <h4 className="font-semibold text-neutral-900">Organic Superfood Brand</h4>
              <p className="text-sm text-neutral-600 mt-1">Launched new product line with EN 13432 certified compostable stand-up pouches. Achieved premium shelf presence while meeting sustainability goals.</p>
              <span className="text-xs text-primary-600 mt-2 inline-block">Read case study →</span>
            </Link>
          </div>
          
          <p className="text-sm text-neutral-600 mt-4">
            Over 500 brands worldwide trust Achieve Pack for their sustainable packaging needs. <Link to="/certificates" className="text-primary-600 hover:underline">View our certifications</Link> or <Link to="/factory-tour" className="text-primary-600 hover:underline">take a virtual factory tour</Link>.
          </p>
        </div>
      )
    },
    {
      id: 'risk-hedging',
      title: 'Is Compostable Packaging Right for You?',
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-2">✅ Best Fit For...</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Brands with strong sustainability messaging</li>
                <li>• Products with 6-12 month shelf life needs</li>
                <li>• Markets with composting infrastructure (EU, CA, WA)</li>
                <li>• Premium positioning where eco-value adds margin</li>
                <li>• Coffee roasters, organic food, wellness brands</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
              <h4 className="font-bold text-amber-800 mb-2">⚠️ Also Works For...</h4>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Brands testing eco packaging for the first time</li>
                <li>• Products with moderate barrier requirements</li>
                <li>• Companies willing to educate consumers on disposal</li>
                <li>• Regional launches before national rollout</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-800 mb-2">❌ Not Recommended If...</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• You need 18+ month shelf life</li>
                <li>• Your product requires ultra-high barrier</li>
                <li>• Your customers lack composting access</li>
                <li>• Price is the only consideration</li>
                <li>• <Link to="/materials/recyclable-mono-pe" className="underline">Consider recyclable mono-PE instead →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'decision-cta',
      title: 'Ready to Take the Next Step?',
      icon: <Calendar className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4 text-neutral-700">
          <p className="text-lg">We don't ask you to change your entire packaging line on day one. Start with what makes sense for your business:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-primary-600 text-white p-6 rounded-lg text-center">
              <Phone className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-bold text-lg mb-2">Ready to Move Fast?</h4>
              <p className="text-sm opacity-90 mb-4">Book a 30-min call to discuss your exact needs</p>
              <button onClick={openCalendly} className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-primary-50 transition cursor-pointer">
                Book a Call
              </button>
            </div>
            <div className="bg-neutral-100 p-6 rounded-lg text-center border-2 border-neutral-300">
              <Download className="h-8 w-8 mx-auto mb-2 text-neutral-700" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Want to Test First?</h4>
              <p className="text-sm text-neutral-600 mb-4">Order a sample kit to test sealing and shelf life</p>
              <Link to="/store" className="inline-block bg-neutral-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700 transition">
                Get Sample Kit
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-neutral-200">
              <Mail className="h-8 w-8 mx-auto mb-2 text-neutral-500" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">Still Exploring?</h4>
              <p className="text-sm text-neutral-600 mb-4">Download our buyer guide or browse case studies</p>
              <Link to="/case-studies" className="inline-block border-2 border-neutral-300 text-neutral-700 px-4 py-2 rounded-lg font-semibold hover:border-primary-300 transition">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      )
    }
  ]

  const faqs = [
    {
      question: t(`${p}.faq.q1`),
      answer: t(`${p}.faq.a1`)
    },
    {
      question: t(`${p}.faq.q2`),
      answer: t(`${p}.faq.a2`)
    },
    {
      question: t(`${p}.faq.q3`),
      answer: t(`${p}.faq.a3`)
    },
    {
      question: t(`${p}.faq.q4`),
      answer: t(`${p}.faq.a4`)
    },
    {
      question: t(`${p}.faq.q5`),
      answer: t(`${p}.faq.a5`)
    }
  ]

  const tableHeaders = t(`${p}.table.headers`, { returnObjects: true }) as string[]
  const tables = [
    {
      title: t(`${p}.table.title`),
      data: {
        headers: tableHeaders,
        rows: [
          t(`${p}.table.row1`, { returnObjects: true }) as string[],
          t(`${p}.table.row2`, { returnObjects: true }) as string[],
          t(`${p}.table.row3`, { returnObjects: true }) as string[],
          t(`${p}.table.row4`, { returnObjects: true }) as string[],
          t(`${p}.table.row5`, { returnObjects: true }) as string[]
        ]
      }
    }
  ]

  const relatedLinks = [
    {
      title: "Shop Compostable Pouches",
      url: "/store",
      description: "Browse certified compostable packaging - MOQ from 100 pieces"
    },
    {
      title: t(`${p}.relatedLinks.link1.title`),
      url: "/materials/recyclable-mono-pe",
      description: t(`${p}.relatedLinks.link1.description`)
    },
    {
      title: t(`${p}.relatedLinks.link2.title`),
      url: "/industry/coffee-tea",
      description: t(`${p}.relatedLinks.link2.description`)
    },
    {
      title: t(`${p}.relatedLinks.link3.title`),
      url: "/packaging/stand-up-pouches",
      description: t(`${p}.relatedLinks.link3.description`)
    },
    {
      title: "Sustainable Packaging Guide",
      url: "/blog/sustainable-packaging-supplier-analysis",
      description: "Compare eco-friendly packaging suppliers"
    }
  ]

  return (
    <SEOPageLayout
      title={t('seoPages.pages.compostable.title')}
      description={t('seoPages.pages.compostable.description')}
      keywords={[
        'compostable packaging',
        'compostable pouches',
        'PLA packaging',
        'kraft paper pouch',
        'EN 13432 certified',
        'ASTM D6400',
        'biodegradable packaging',
        'sustainable packaging',
        'eco-friendly pouches',
        'plant-based packaging',
        'zero waste packaging'
      ]}
      canonicalUrl="https://achievepack.com/materials/compostable"
      heroTitle={t('seoPages.pages.compostable.heroTitle')}
      heroSubtitle={t('seoPages.pages.compostable.heroSubtitle')}
      heroImage="/imgs/seo-photos/a_compostable_packaging_pouch_achieve_pack_2674607.webp"
      heroImageAlt="Certified compostable kraft paper pouches with EN 13432 certification"
      introSummary={t('seoPages.pages.compostable.introSummary')}
      sections={sections}
      faqs={faqs}
      tables={tables}
      schemaType="Product"
      relatedLinks={relatedLinks}
      ctaTitle={t(`${p}.ctaTitle`)}
      ctaDescription={t(`${p}.ctaDescription`)}
      ctaButtonText={t(`${p}.ctaButtonText`)}
    />
  )
}

export default CompostablePage
