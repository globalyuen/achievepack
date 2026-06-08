import React from 'react'
import { Link } from 'react-router-dom'
import { Package, ShoppingCart, Clock, CheckCircle, Leaf, Award, Shield, Target, MessageCircle, Calendar, ArrowRight, Truck, Users, Zap, ChevronDown } from 'lucide-react'
import SEOPageLayout from '../../components/SEOPageLayout'
import SEO from '../../components/SEO'
import ClickableImage from '../../components/ClickableImage'
import { useCalendly } from '../../contexts/CalendlyContext'
import { useTranslation } from 'react-i18next'

const LowMOQPackagingPage: React.FC = () => {
  const { t } = useTranslation()
  const { openCalendly } = useCalendly()

  const sections = [
    {
      id: 'overview',
      title: t('seoPages.pages.lowMoq.achievePack.sections.overview.title', { defaultValue: 'Low MOQ Flexible Packaging' }),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('seoPages.pages.lowMoq.achievePack.sections.overview.introStart', { defaultValue: 'Starting a new brand or testing new products? ' })}
            <strong>{t('seoPages.pages.lowMoq.achievePack.sections.overview.introBold', { defaultValue: 'Achieve Pack offers the lowest MOQ in the industry - just 100 pieces' })}</strong>
            {t('seoPages.pages.lowMoq.achievePack.sections.overview.introEnd', { defaultValue: ' for custom printed sustainable packaging. Perfect for small-batch producers, startups, and e-commerce brands who need professional packaging without large inventory commitments.' })}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-green-50 p-6 rounded-xl border border-primary-100">
              <h3 className="font-bold text-xl mb-4 text-primary-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.overview.whyTitle', { defaultValue: 'Why Low MOQ Matters' })}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.testBold', { defaultValue: 'Test new products' })}</strong>
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.testEnd', { defaultValue: ' without large inventory risk' })}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.launchBold', { defaultValue: 'Launch faster' })}</strong>
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.launchEnd', { defaultValue: ' with small initial orders' })}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.cashBold', { defaultValue: 'Preserve cash flow' })}</strong>
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.cashEnd', { defaultValue: ' for growing businesses' })}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.iterateBold', { defaultValue: 'Iterate designs' })}</strong>
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.whyItems.iterateEnd', { defaultValue: ' based on customer feedback' })}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqTitle', { defaultValue: 'Our MOQ Options' })}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.digital', { defaultValue: 'Digital Print' })}
                  </span>
                  <span className="text-green-700 font-bold">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.digitalValue', { defaultValue: '100 pcs' })}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.plate', { defaultValue: 'Plate Print' })}
                  </span>
                  <span className="text-blue-700 font-bold">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.plateValue', { defaultValue: '1,000 pcs' })}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.stock', { defaultValue: 'Stock Bags' })}
                  </span>
                  <span className="text-purple-700 font-bold">
                    {t('seoPages.pages.lowMoq.achievePack.sections.overview.moqItems.stockValue', { defaultValue: '50 pcs' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <ClickableImage
              src="/imgs/seo-photos/a_bean_bole_coffee_roastery_8131919.webp"
              alt={t('seoPages.pages.lowMoq.achievePack.sections.overview.gallery.coffee', { defaultValue: 'Small batch coffee roaster packaging' })}
              className="w-full h-40 object-cover rounded-lg"
            />
            <ClickableImage
              src="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
              alt={t('seoPages.pages.lowMoq.achievePack.sections.overview.gallery.artisan', { defaultValue: 'Artisan snack brand low MOQ packaging' })}
              className="w-full h-40 object-cover rounded-lg"
            />
            <ClickableImage
              src="/imgs/seo-photos/a_tea_craft_australia_garden_morning_8955209.webp"
              alt={t('seoPages.pages.lowMoq.achievePack.sections.overview.gallery.tea', { defaultValue: 'Premium tea brand small batch packaging' })}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      )
    },
    {
      id: 'who-benefits',
      title: t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.title', { defaultValue: 'Who Benefits from Low MOQ?' }),
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.coffee.title', { defaultValue: 'Small-Batch Coffee Roasters' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.coffee.desc', { defaultValue: 'Test new single-origin releases with custom branded packaging before committing to larger orders.' })}
              </p>
              <Link to="/products/compostable-coffee-bags" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.coffee.linkText', { defaultValue: 'View Coffee Bags' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.eco.title', { defaultValue: 'Eco-Conscious Startups' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.eco.desc', { defaultValue: 'Launch with sustainable packaging from day one without the financial burden of large MOQs.' })}
              </p>
              <Link to="/materials/compostable" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.eco.linkText', { defaultValue: 'View Compostable' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.ecommerce.title', { defaultValue: 'E-commerce Brand Owners' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.ecommerce.desc', { defaultValue: 'Manage inventory efficiently with smaller, more frequent orders that match sales velocity.' })}
              </p>
              <Link to="/packaging/stand-up-pouches" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.ecommerce.linkText', { defaultValue: 'View Stand-Up Pouches' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.dev.title', { defaultValue: 'Product Developers' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.dev.desc', { defaultValue: 'Get market feedback with professionally packaged samples before scaling production.' })}
              </p>
              <Link to="/industry/supplements-powders" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.dev.linkText', { defaultValue: 'View Supplements' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.market.title', { defaultValue: 'Farmers Market Vendors' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.market.desc', { defaultValue: 'Elevate products with custom packaging that competes with established brands.' })}
              </p>
              <Link to="/industry/snacks-food" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.market.linkText', { defaultValue: 'View Snack Packaging' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-bold text-lg mb-2">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.seasonal.title', { defaultValue: 'Limited Edition Releases' })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.seasonal.desc', { defaultValue: 'Create exclusive seasonal or collaboration packaging without excess inventory.' })}
              </p>
              <Link to="/printing/digital-printing" className="text-primary-600 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:underline">
                {t('seoPages.pages.lowMoq.achievePack.sections.whoBenefits.cards.seasonal.linkText', { defaultValue: 'View Digital Print' })} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'digital-printing',
      title: t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.title', { defaultValue: 'Digital Printing: The Low MOQ Solution' }),
      icon: <Zap className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.introStart', { defaultValue: 'Our ' })}
            <strong>{t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.introBold', { defaultValue: 'HP Indigo digital printing technology' })}</strong>
            {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.introEnd', { defaultValue: ' makes low MOQ possible without sacrificing quality. Unlike traditional plate printing, digital printing has no plate costs - you pay only for what you print.' })}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantagesTitle', { defaultValue: 'Digital Print Advantages' })}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.plate.title', { defaultValue: 'No Plate Costs' })}
                    </span>
                    <p className="text-sm text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.plate.desc', { defaultValue: 'Save $500-$2,000 in upfront plate fees' })}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.photo.title', { defaultValue: 'Photo-Quality Graphics' })}
                    </span>
                    <p className="text-sm text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.photo.desc', { defaultValue: 'Full CMYK color with no color limits' })}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.variable.title', { defaultValue: 'Variable Data' })}
                    </span>
                    <p className="text-sm text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.variable.desc', { defaultValue: 'Different designs in same order (SKU variations)' })}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.fast.title', { defaultValue: 'Fast Turnaround' })}
                    </span>
                    <p className="text-sm text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.advantages.fast.desc', { defaultValue: '2-3 weeks production vs 4-6 weeks plate print' })}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparisonTitle', { defaultValue: 'Cost Comparison' })}
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.digitalOrder', { defaultValue: '100 Bags Order' })}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.unitCost', { defaultValue: 'Per Unit Cost' })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.digitalType', { defaultValue: 'Digital Print' })}
                    </span>
                    <span className="text-green-600 font-bold">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.digitalRange', { defaultValue: '$0.85 - $1.50' })}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.plateOrder', { defaultValue: '1,000 Bags Order' })}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.unitCost', { defaultValue: 'Per Unit Cost' })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.plateType', { defaultValue: 'Plate Print' })}
                    </span>
                    <span className="text-blue-600 font-bold">
                      {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.plateRange', { defaultValue: '$0.35 - $0.65' })}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                {t('seoPages.pages.lowMoq.achievePack.sections.digitalPrinting.comparison.note', { defaultValue: '* Exact pricing depends on size, material, and finishes' })}
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const sections2 = [
    {
      id: 'materials',
      title: t('seoPages.pages.lowMoq.achievePack.sections.materials.title', { defaultValue: 'Available Sustainable Materials' }),
      icon: <Leaf className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {t('seoPages.pages.lowMoq.achievePack.sections.materials.introStart', { defaultValue: 'All our low MOQ packaging is available in ' })}
            <strong>{t('seoPages.pages.lowMoq.achievePack.sections.materials.introBold', { defaultValue: 'sustainable material options' })}</strong>
            {t('seoPages.pages.lowMoq.achievePack.sections.materials.introEnd', { defaultValue: '. Choose eco-friendly packaging that aligns with your brand values.' })}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/materials/compostable" className="bg-green-50 p-5 rounded-xl border border-green-200 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Leaf className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="font-bold text-green-800 group-hover:text-green-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.compostable.title', { defaultValue: 'Compostable' })}
              </h4>
              <p className="text-sm text-green-700 mt-1">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.compostable.desc', { defaultValue: 'ASTM D6400 & EN 13432 certified' })}
              </p>
            </Link>
            
            <Link to="/materials/recyclable-mono-pe" className="bg-blue-50 p-5 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Package className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-bold text-blue-800 group-hover:text-blue-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.recyclable.title', { defaultValue: 'Mono-PE Recyclable' })}
              </h4>
              <p className="text-sm text-blue-700 mt-1">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.recyclable.desc', { defaultValue: 'Store drop-off recyclable' })}
              </p>
            </Link>
            
            <Link to="/materials/pcr" className="bg-purple-50 p-5 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Package className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="font-bold text-purple-800 group-hover:text-purple-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.pcr.title', { defaultValue: 'PCR Content' })}
              </h4>
              <p className="text-sm text-purple-700 mt-1">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.pcr.desc', { defaultValue: '30-50% post-consumer recycled' })}
              </p>
            </Link>
            
            <Link to="/materials/bio-pe" className="bg-amber-50 p-5 rounded-xl border border-amber-200 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Leaf className="h-5 w-5 text-amber-600" />
              </div>
              <h4 className="font-bold text-amber-800 group-hover:text-amber-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.bio.title', { defaultValue: 'Bio-PE' })}
              </h4>
              <p className="text-sm text-amber-700 mt-1">
                {t('seoPages.pages.lowMoq.achievePack.sections.materials.types.bio.desc', { defaultValue: 'Plant-based sugarcane PE' })}
              </p>
            </Link>
          </div>

          {/* Low MOQ Packaging Image Gallery */}
          <div className="mt-6">
            <h4 className="font-semibold text-neutral-800 mb-3">
              {t('seoPages.pages.lowMoq.achievePack.sections.materials.examplesTitle', { defaultValue: 'Low MOQ Custom Packaging Examples' })}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ClickableImage 
                src="/imgs/infographic-low-moq.webp" 
                alt={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.benefitsAlt', { defaultValue: 'Low MOQ packaging infographic showing 100 piece minimum' })}
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.benefits', { defaultValue: 'Low MOQ Benefits' })}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_digital_printing_customization_2717640.webp" 
                alt={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.printAlt', { defaultValue: 'Digital printing for custom low MOQ packaging' })}
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.print', { defaultValue: 'Digital Print' })}
              />
              <ClickableImage 
                src="/imgs/seo-photos/a_ecommerce_lightweight_pouch_achieve_pack_8535238.webp" 
                alt={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.pouchAlt', { defaultValue: 'E-commerce brand lightweight pouch packaging' })}
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.pouch', { defaultValue: 'E-commerce Pouch' })}
              />
              <ClickableImage 
                src="/imgs/infographic-fast-turnaround.webp" 
                alt={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.turnaroundAlt', { defaultValue: 'Fast turnaround for small batch orders' })}
                className="w-full h-28 object-cover rounded-lg"
                caption={t('seoPages.pages.lowMoq.achievePack.sections.materials.examples.turnaround', { defaultValue: 'Fast Turnaround' })}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-styles',
      title: t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.title', { defaultValue: 'Available Pouch Styles' }),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.introStart', { defaultValue: 'All popular pouch styles are available with ' })}
            <strong>{t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.introBold', { defaultValue: 'low MOQ starting from 100 pieces' })}</strong>
            {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.introEnd', { defaultValue: '.' })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/packaging/stand-up-pouches" className="group">
              <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <ClickableImage
                  src="/imgs/pouch-shape/a_stand_up_pouch_isolated_4331591.webp"
                  alt={t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.standUp.alt', { defaultValue: 'Stand up pouch low MOQ' })}
                  className="w-full h-32 object-contain mb-3"
                />
                <h4 className="font-bold text-gray-800 group-hover:text-primary-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.standUp.title', { defaultValue: 'Stand-Up Pouches' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.standUp.desc', { defaultValue: 'Most popular for retail' })}
                </p>
              </div>
            </Link>
            
            <Link to="/packaging/flat-bottom-bags" className="group">
              <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <ClickableImage
                  src="/imgs/pouch-shape/a_flat_bottom_pouch_isolated_7901973.webp"
                  alt={t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.flatBottom.alt', { defaultValue: 'Flat bottom bag low MOQ' })}
                  className="w-full h-32 object-contain mb-3"
                />
                <h4 className="font-bold text-gray-800 group-hover:text-primary-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.flatBottom.title', { defaultValue: 'Flat Bottom Bags' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.flatBottom.desc', { defaultValue: 'Premium shelf presence' })}
                </p>
              </div>
            </Link>
            
            <Link to="/packaging/side-gusset-bags" className="group">
              <div className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <ClickableImage
                  src="/imgs/pouch-shape/a_side_gusset_pouch_isolated_2545871.webp"
                  alt={t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.sideGusset.alt', { defaultValue: 'Side gusset bag low MOQ' })}
                  className="w-full h-32 object-contain mb-3"
                />
                <h4 className="font-bold text-gray-800 group-hover:text-primary-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.sideGusset.title', { defaultValue: 'Side Gusset Bags' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.pouchStyles.styles.sideGusset.desc', { defaultValue: 'Classic coffee bag style' })}
                </p>
              </div>
            </Link>
          </div>
        </div>
      )
    }
  ]

  const sections3 = [
    {
      id: 'lead-time',
      title: t('seoPages.pages.lowMoq.achievePack.sections.leadTime.title', { defaultValue: 'Fast Lead Times' }),
      icon: <Clock className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-50 to-green-50 p-6 rounded-xl border border-primary-100">
            <h3 className="font-bold text-xl mb-4 text-primary-800">
              {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.timelineTitle', { defaultValue: 'Production Timeline' })}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h4 className="font-bold">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step1.title', { defaultValue: 'Design Approval' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step1.desc', { defaultValue: '1-2 business days' })}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h4 className="font-bold">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step2.title', { defaultValue: 'Production' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step2.desc', { defaultValue: '2-3 weeks (digital)' })}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h4 className="font-bold">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step3.title', { defaultValue: 'Shipping to USA' })}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.steps.step3.desc', { defaultValue: '5-7 days (air freight)' })}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <Truck className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.totalTitle', { defaultValue: 'Total Lead Time: 3-4 Weeks' })}
              </h4>
              <p className="text-sm text-blue-700">
                {t('seoPages.pages.lowMoq.achievePack.sections.leadTime.totalDesc', { defaultValue: 'From order confirmation to your door in the USA' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'certifications',
      title: t('seoPages.pages.lowMoq.achievePack.sections.certifications.title', { defaultValue: 'Quality & Compliance' }),
      icon: <Award className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            {t('seoPages.pages.lowMoq.achievePack.sections.certifications.introStart', { defaultValue: 'Even at low MOQ, our packaging meets the ' })}
            <strong>{t('seoPages.pages.lowMoq.achievePack.sections.certifications.introBold', { defaultValue: 'highest quality and safety standards' })}</strong>
            {t('seoPages.pages.lowMoq.achievePack.sections.certifications.introEnd', { defaultValue: '.' })}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.fda.title', { defaultValue: 'FDA Approved' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.fda.desc', { defaultValue: 'Food contact safe' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.brc.title', { defaultValue: 'BRC Certified' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.brc.desc', { defaultValue: 'Global food safety' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.iso.title', { defaultValue: 'ISO 9001' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.iso.desc', { defaultValue: 'Quality management' })}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-800">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.fsc.title', { defaultValue: 'FSC Certified' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.certifications.certs.fsc.desc', { defaultValue: 'Sustainable forestry' })}
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('seoPages.pages.lowMoq.achievePack.sections.faq.title', { defaultValue: 'Frequently Asked Questions' }),
      icon: <MessageCircle className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.lowMoq.achievePack.sections.faq.q1', { defaultValue: 'What is the minimum order quantity for custom printed packaging?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.lowMoq.achievePack.sections.faq.a1', { defaultValue: 'Our minimum order quantity is 100 pieces for digital printed pouches, 1,000 pieces for plate printed packaging, and 50 pieces for stock bags. This makes professional packaging accessible to startups and small-batch producers.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.lowMoq.achievePack.sections.faq.q2', { defaultValue: 'How long does production take for low MOQ orders?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.lowMoq.achievePack.sections.faq.a2', { defaultValue: 'Digital print orders typically take 2-3 weeks for production plus 5-7 days shipping to USA, for a total lead time of 3-4 weeks from order confirmation to your door.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.lowMoq.achievePack.sections.faq.q3', { defaultValue: 'Is sustainable packaging available at low MOQ?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.lowMoq.achievePack.sections.faq.a3', { defaultValue: "Yes! All our low MOQ packaging is available in sustainable options including compostable (ASTM D6400 certified), recyclable mono-material, PCR content (30-50%), and bio-based materials. You don't have to sacrifice sustainability for small quantities." })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.lowMoq.achievePack.sections.faq.q4', { defaultValue: 'Why is digital printing used for low MOQ?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.lowMoq.achievePack.sections.faq.a4', { defaultValue: 'Digital printing (HP Indigo) has no plate costs, making it economical for small orders. You save $500-$2,000 in upfront plate fees. It also offers photo-quality graphics, variable data capability, and faster turnaround than traditional plate printing.' })}
            </div>
          </details>
          <details className="group bg-neutral-50 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-100 transition">
              <span className="font-semibold text-neutral-900 pr-4">
                {t('seoPages.pages.lowMoq.achievePack.sections.faq.q5', { defaultValue: 'What is the cost per bag for low MOQ orders?' })}
              </span>
              <ChevronDown className="h-5 w-5 text-neutral-500 group-open:rotate-180 transition-transform flex-shrink-0" />
            </summary>
            <div className="px-6 pb-6 text-neutral-700">
              {t('seoPages.pages.lowMoq.achievePack.sections.faq.a5', { defaultValue: 'For 100-bag digital print orders, costs typically range from $0.85-$1.50 per bag depending on size, material, and finishes. As quantities increase, per-unit costs decrease significantly. Plate printing at 1,000+ bags can be $0.35-$0.65 per bag.' })}
            </div>
          </details>
        </div>
      )
    },
    {
      id: 'cta',
      title: t('seoPages.pages.lowMoq.achievePack.sections.cta.title', { defaultValue: 'Start Your Low MOQ Order' }),
      icon: <Package className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary-600 to-green-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              {t('seoPages.pages.lowMoq.achievePack.sections.cta.cardTitle', { defaultValue: 'Ready to Get Started?' })}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {t('seoPages.pages.lowMoq.achievePack.sections.cta.cardDesc', { defaultValue: 'Get custom sustainable packaging with just 100 pieces minimum order.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openCalendly()}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.bookConsultation', { defaultValue: 'Book Free Consultation' })}
              </button>
              <Link
                to="/store"
                className="bg-primary-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-800 transition-colors inline-flex items-center justify-center gap-2 border border-primary-400"
              >
                <ShoppingCart className="h-5 w-5" />
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.browseProducts', { defaultValue: 'Browse Products' })}
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <MessageCircle className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h4 className="font-bold">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.design.title', { defaultValue: 'Free Design Help' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.design.desc', { defaultValue: 'Our team assists with artwork' })}
              </p>
            </div>
            <div className="p-4">
              <Target className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h4 className="font-bold">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.sample.title', { defaultValue: 'Sample Program' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.sample.desc', { defaultValue: 'See materials before ordering' })}
              </p>
            </div>
            <div className="p-4">
              <Truck className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <h4 className="font-bold">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.shipping.title', { defaultValue: 'USA Shipping' })}
              </h4>
              <p className="text-sm text-gray-600">
                {t('seoPages.pages.lowMoq.achievePack.sections.cta.features.shipping.desc', { defaultValue: 'Fast delivery nationwide' })}
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  const allSections = [...sections, ...sections2, ...sections3]
  const translatedKeywords = t('seoPages.pages.lowMoq.achievePack.seo.keywords', { returnObjects: true, defaultValue: ['low MOQ packaging','small batch packaging','custom printed pouches 100 minimum','startup packaging','small business packaging'] }) as string[]

  return (
    <>
      <SEO
        title={t('seoPages.pages.lowMoq.achievePack.seo.title', { defaultValue: 'Low MOQ Packaging | 100 Piece Minimum | Achieve Pack' })}
        description={t('seoPages.pages.lowMoq.achievePack.seo.description', { defaultValue: 'Custom printed sustainable packaging with low MOQ from 100 pieces. Perfect for startups, small-batch producers, and e-commerce brands.' })}
        url="https://pouch.eco/products/low-moq-packaging"
        keywords={translatedKeywords}
      />

      <SEOPageLayout heroBgColor="#1f2937"
        title={t('seoPages.pages.lowMoq.achievePack.hero.title', { defaultValue: 'Low MOQ Packaging | 100 Piece Minimum | Achieve Pack' })}
        description={t('seoPages.pages.lowMoq.achievePack.hero.description', { defaultValue: 'Custom printed sustainable packaging with low MOQ from 100 pieces. Perfect for startups, small-batch producers, and e-commerce brands. Fast USA delivery.' })}
        keywords={t('seoPages.pages.lowMoq.achievePack.hero.keywords', { returnObjects: true, defaultValue: ['low MOQ packaging', 'small batch packaging', 'custom printed pouches 100 minimum', 'startup packaging', 'small business packaging'] }) as string[]}
        heroTitle={t('seoPages.pages.lowMoq.achievePack.hero.heroTitle', { defaultValue: 'Low MOQ Packaging' })}
        heroSubtitle={t('seoPages.pages.lowMoq.achievePack.hero.heroSubtitle', { defaultValue: 'Custom Printed Sustainable Pouches | Minimum 100 Pieces | Fast USA Delivery' })}
        introSummary={t('seoPages.pages.lowMoq.achievePack.hero.introSummary', { defaultValue: "Custom printed sustainable packaging with the industry's lowest minimum order quantity - just 100 pieces. Perfect for startups, small-batch producers, and e-commerce brands testing new products." })}
        sections={allSections}
        heroImage="/imgs/seo-photos/a_artisan_chocolate_abu_dhabi_luxury_pouch_4218900.webp"
      />
    </>
  )
}

export default LowMOQPackagingPage
