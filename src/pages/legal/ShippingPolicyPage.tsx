import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Leaf, Truck, Globe, Clock, Package, Mail, Phone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation, Trans } from "react-i18next";

const ShippingPolicyPage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.shippingPolicy';
  return (
    <>
      <Helmet>
        <title>{t(`${p}.shippingPolicyAchievePackGloba`)}</title>
        <meta name="description" content="Achieve Pack shipping information: worldwide delivery, shipping times, costs, and tracking. We ship to USA, UK, EU, Australia, and 100+ countries." />
        <link rel="canonical" href="https://achievepack.com/shipping" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToHome`)}</Link>
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">{t(`${p}.achievepack`)}</span>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Truck className="h-12 w-12 text-blue-200 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">{t(`${p}.shippingPolicy`)}</h1>
            <p className="text-blue-100">{t(`${p}.worldwideDeliveryTo100Countrie`)}</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-8 space-y-8">
            
            {/* Quick Summary */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h2 className="font-semibold text-blue-800 mb-2">{t(`${p}.quickSummary`)}</h2>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>{t(`${p}.productionTime`)}</strong> {t(`${p}.23WeeksAfterArtworkApproval`)}</li>
                <li>• <strong>{t(`${p}.shippingTime`)}</strong> {t(`${p}.37BusinessDaysExpressOr24Weeks`)}</li>
                <li>• <strong>{t(`${p}.freeShipping`)}</strong> {t(`${p}.ordersOver2000UsdSelectRegions`)}</li>
                <li>• <strong>{t(`${p}.tracking`)}</strong> {t(`${p}.providedForAllShipments`)}</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-600" />
                {t(`${p}.shippingDestinations`)}</h2>
              <p className="text-neutral-700 mb-4">
                {t(`${p}.achievePackShipsToOver100Count`)}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'United States', 'United Kingdom', 'Canada', 'Australia',
                  'New Zealand', 'Germany', 'France', 'Netherlands',
                  'Ireland', 'Singapore', 'Hong Kong', 'Japan'
                ].map((country, idx) => (
                  <div key={idx} className="bg-neutral-50 px-3 py-2 rounded-lg text-sm text-center">
                    {country}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                {t(`${p}.donTSeeYourCountryContactUsFor`)}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                {t(`${p}.shippingTimes`)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">{t(`${p}.region`)}</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">{t(`${p}.expressAir`)}</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">{t(`${p}.standardAir`)}</th>
                      <th className="text-left py-3 px-4 font-semibold bg-neutral-50">{t(`${p}.seaFreight`)}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t(`${p}.usaCanada`)}</td>
                      <td className="py-3 px-4">{t(`${p}.35Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.710Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.34Weeks`)}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t(`${p}.ukEurope`)}</td>
                      <td className="py-3 px-4">{t(`${p}.35Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.712Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.45Weeks`)}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t(`${p}.australiaNz`)}</td>
                      <td className="py-3 px-4">{t(`${p}.35Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.58Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.23Weeks`)}</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 px-4">{t(`${p}.asiaPacific`)}</td>
                      <td className="py-3 px-4">{t(`${p}.24Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.57Days`)}</td>
                      <td className="py-3 px-4">{t(`${p}.12Weeks`)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                {t(`${p}.timesShownAreFromShipmentDateA`)}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Package className="h-6 w-6 text-blue-600" />
                {t(`${p}.shippingCosts`)}</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  {t(`${p}.shippingCostsAreCalculatedBase`)}</p>
                

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">{t(`${p}.importDutiesTaxes`)}</h3>
                  <p className="text-sm text-amber-700">
                    {t(`${p}.allShipmentsAreSentDdpDelivere`)}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.shippingCarriers`)}</h2>
              <p className="text-neutral-700 mb-4">
                {t(`${p}.wePartnerWithReliableInternati`)}</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {['DHL Express', 'FedEx', 'UPS', 'SF Express', 'Maersk (Sea)', 'COSCO (Sea)'].map((carrier, idx) => (
                  <div key={idx} className="bg-neutral-100 px-3 py-2 rounded-lg text-sm text-center font-medium">
                    {carrier}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.trackingYourOrder`)}</h2>
              <div className="text-neutral-700 space-y-4">
                <p>
                  {t(`${p}.allShipmentsIncludeTrackingYou`)}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t(`${p}.shipmentConfirmationEmailWithT`)}</li>
                  <li>{t(`${p}.linkToCarrierSTrackingPage`)}</li>
                  <li>{t(`${p}.estimatedDeliveryDate`)}</li>
                  <li>{t(`${p}.deliveryConfirmationNotificati`)}</li>
                </ul>
                <p>
                  {t(`${p}.ifYouHavenTReceivedTrackingInf`)}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.deliveryIssues`)}</h2>
              <div className="text-neutral-700 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{t(`${p}.delayedShipments`)}</h3>
                  <p className="text-sm">
                    {t(`${p}.whileWeStriveForOnTimeDelivery`)}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t(`${p}.damagedOrLostPackages`)}</h3>
                  <p className="text-sm">
                    {t(`${p}.allShipmentsAreFullyInsuredIfY`)}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t(`${p}.incorrectAddress`)}</h3>
                  <p className="text-sm">
                    {t(`${p}.pleaseEnsureYourShippingAddres`)}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">{t(`${p}.contactUs`)}</h2>
              <p className="text-neutral-700 mb-4">
                {t(`${p}.questionsAboutShippingWeReHere`)}</p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-neutral-700">
                  <Mail className="h-4 w-4 text-primary-600" />
                  <a href="mailto:ryan@achievepack.com" className="hover:text-primary-600">{t(`${p}.ryanAchievepackCom`)}</a>
                </div>
                <div className="flex items-center gap-2 mt-2 text-neutral-700">
                  <Phone className="h-4 w-4 text-primary-600" />
                  <a href="tel:+85269704411" className="hover:text-primary-600">+852 6970 4411</a>
                </div>
              </div>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToHome`)}</Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Certification Logos & SSL Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <img src="/imgs/cert/logo-achievepack-BPI.jpg" alt="BPI Certified" className="h-10 w-auto rounded grayscale" loading="lazy" decoding="async" />
              <img src="/imgs/cert-b.webp" alt="B Corp Certified" className="h-10 w-auto grayscale" loading="lazy" decoding="async" />
              <div className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 rounded">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-neutral-300 font-medium">{t(`${p}.ssl100SecureTransactions`)}</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} {t(`${p}.achievePackAllRightsReserved`)}</p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-neutral-500">
              <Link to="/terms" className="hover:text-primary-400">{t(`${p}.termsConditions`)}</Link>
              <Link to="/privacy" className="hover:text-primary-400">{t(`${p}.privacyPolicy`)}</Link>
              <Link to="/shipping" className="hover:text-primary-400">{t(`${p}.shippingPolicy`)}</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default ShippingPolicyPage
