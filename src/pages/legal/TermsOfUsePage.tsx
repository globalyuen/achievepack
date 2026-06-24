import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Users, Shield, Package, Gavel, Globe, Scale, Mail, AlertTriangle, RefreshCw, BookOpen } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useTranslation, Trans } from "react-i18next";

const TermsOfUsePage: React.FC = () => {
    const { t } = useTranslation();
    const p = 'seoPages.pages.termsOfUse';
  const [activeSection, setActiveSection] = useState('agreement')

  const sections = [
    { id: 'agreement', label: 'Agreement to Legal Terms' },
    { id: 'services', label: 'Our Services' },
    { id: 'representations', label: 'User Representations' },
    { id: 'ip-definitions', label: 'Content & IP – Definitions' },
    { id: 'ip-achieve', label: 'Achieve Pack Content' },
    { id: 'ip-user', label: 'User Content & Licence' },
    { id: 'ip-responsibility', label: 'Your Responsibility' },
    { id: 'public-private', label: 'Public & Private Content' },
    { id: 'customer-centre', label: 'Customer Centre & Support' },
    { id: 'user-conduct', label: 'User Conduct' },
    { id: 'prohibited', label: 'Prohibited Activities' },
    { id: 'orders', label: 'Orders & Shipping' },
    { id: 'contracts', label: 'Separate Contracts' },
    { id: 'privacy', label: 'Data & Privacy' },
    { id: 'disclaimers', label: 'Disclaimers' },
    { id: 'liability', label: 'Limitations of Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'modifications', label: 'Modifications' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'miscellaneous', label: 'Miscellaneous' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = sections.map(s => s.id)
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>{t(`${p}.termsOfUseAchievePack`)}</title>
        <meta name="description" content="Achieve Pack Terms of Use - Legal agreement governing your access to and use of our websites, customer centre, and related services." />
        <link rel="canonical" href="https://achievepack.com/terms-of-use" />
      </Helmet>
      
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToHome`)}</Link>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary-600">{t(`${p}.achievepack`)}</span>
            </Link>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-neutral-100 p-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">{t(`${p}.tableOfContents`)}</h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-neutral-900 mb-4">{t(`${p}.termsOfUse`)}</h1>
              <p className="text-neutral-500">{t(`${p}.lastUpdatedJanuary122026`)}</p>
            </div>

            <div className="space-y-8">
              {/* Agreement to Legal Terms */}
              <section id="agreement" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.agreementToLegalTerms`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theseTermsOfUseTermsFormALegal`)}</p>
                  <p>{t(`${p}.youAreResponsibleForEnsuringTh`)}</p>
                </div>
              </section>

              {/* Our Services */}
              <section id="services" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.ourServices`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theServicesIncludeAchievePackS`)}</p>
                  <p>{t(`${p}.theServicesAreIntendedPrimaril`)}</p>
                </div>
              </section>

              {/* User Representations */}
              <section id="representations" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.userRepresentations`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.byUsingTheServicesYouRepresent`)}</p>
                  <ul>
                    <li>{t(`${p}.youHaveTheLegalCapacityAndAuth`)}</li>
                    <li>{t(`${p}.youAreNotAMinorUnderTheLawsOfY`)}</li>
                    <li>{t(`${p}.youWillNotAccessOrUseTheServic`)}</li>
                    <li>{t(`${p}.youWillNotUseTheServicesForAny`)}</li>
                    <li>{t(`${p}.yourUseOfTheServicesWillNotVio`)}</li>
                  </ul>
                  <p>{t(`${p}.ifAnyInformationYouProvideIsUn`)}</p>
                </div>
              </section>

              {/* Content and IP – Definitions */}
              <section id="ip-definitions" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.contentAndIntellectualProperty`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p><strong>{t(`${p}.achievePackContent`)}</strong> {t(`${p}.meansAllTextGraphicsLogosIcons`)}</p>
                  <p><strong>{t(`${p}.userContent`)}</strong> {t(`${p}.meansAnyContentMaterialsDataOr`)}</p>
                </div>
              </section>

              {/* Achieve Pack Content */}
              <section id="ip-achieve" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.contentAndIntellectualProperty1`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.allAchievePackContentIsTheExcl`)}</p>
                  <p>{t(`${p}.youAreGrantedALimitedNonExclus`)}</p>
                  <p>{t(`${p}.anyReproductionModificationAda`)}</p>
                </div>
              </section>

              {/* User Content & Licence */}
              <section id="ip-user" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-pink-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.contentAndIntellectualProperty2`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.asBetweenYouAndAchievePackYouR`)}</p>
                  <p>{t(`${p}.byUploadingSubmittingOrOtherwi`)}</p>
                  <ul>
                    <li>{t(`${p}.operateMaintainProvideSecureAn`)}</li>
                    <li>{t(`${p}.handleEnquiriesOrdersAndAfterS`)}</li>
                    <li>{t(`${p}.improveOurProductsAndInternalP`)}</li>
                    <li>{t(`${p}.complyWithApplicableLegalAndRe`)}</li>
                  </ul>
                </div>
              </section>

              {/* Your Responsibility */}
              <section id="ip-responsibility" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.contentAndIntellectualProperty3`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.youAreSolelyResponsibleForYour`)}</p>
                  <p>{t(`${p}.youRepresentAndWarrantThat`)}</p>
                  <ul>
                    <li>{t(`${p}.yourUserContentDoesNotInfringe`)}</li>
                    <li>{t(`${p}.yourUserContentAndYourUseOfThe`)}</li>
                    <li>{t(`${p}.yourUserContentDoesNotContainU`)}</li>
                  </ul>
                </div>
              </section>

              {/* Public and Private Content */}
              <section id="public-private" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.publicAndPrivateContent`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.dependingOnTheFunctionsAvailab`)}</p>
                  <p>{t(`${p}.userContentThatYouIntentionall`)}</p>
                </div>
              </section>

              {/* Customer Centre and Support */}
              <section id="customer-centre" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.customerCentreAndSupport`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theAchievePackCustomerCentreIs`)}</p>
                  <ul>
                    <li>{t(`${p}.productAndMaterialEnquiriesInc`)}</li>
                    <li>{t(`${p}.quotationAndOrderRelatedQuesti`)}</li>
                    <li>{t(`${p}.shipmentStatusAndLogisticsIssu`)}</li>
                    <li>{t(`${p}.qualityConcernsAfterSalesSuppo`)}</li>
                    <li>{t(`${p}.generalTechnicalGuidanceRegard`)}</li>
                  </ul>
                  <p>{t(`${p}.weAimToRespondToGeneralEnquiri`)}</p>
                  <p>{t(`${p}.youMustProvideAccurateAndSuffi`)}</p>
                </div>
              </section>

              {/* User Conduct */}
              <section id="user-conduct" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.userConductInTheCustomerCentre`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.youMustCommunicateWithAchieveP`)}</p>
                  <p>{t(`${p}.weMaySuspendOrTerminateSupport`)}</p>
                </div>
              </section>

              {/* Prohibited Activities */}
              <section id="prohibited" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.prohibitedActivities`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.youMustNot`)}</p>
                  <ul>
                    <li>{t(`${p}.useTheServicesForAnyUnlawfulFr`)}</li>
                    <li>{t(`${p}.useTheServicesInAnyMannerThatC`)}</li>
                    <li>{t(`${p}.systematicallyRetrieveDataOrOt`)}</li>
                    <li>{t(`${p}.useAutomatedMeansIncludingRobo`)}</li>
                    <li>{t(`${p}.attemptToGainUnauthorisedAcces`)}</li>
                    <li>{t(`${p}.uploadOrTransmitVirusesMalware`)}</li>
                    <li>{t(`${p}.impersonateAnyPersonOrEntityOr`)}</li>
                  </ul>
                </div>
              </section>

              {/* Orders, Production, and Shipping */}
              <section id="orders" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Package className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.ordersProductionAndShipping`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.whenTheServicesAreUsedToPlaceO`)}</p>
                  <p>{t(`${p}.youAreResponsibleForReviewingA`)}</p>
                  <p>{t(`${p}.anyLeadTimesOrShippingEstimate`)}</p>
                </div>
              </section>

              {/* Relationship with Separate Contracts */}
              <section id="contracts" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.relationshipWithSeparateContra`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theseTermsDoNotReplaceOrOverri`)}</p>
                  <p>{t(`${p}.ifThereIsAConflictBetweenThese`)}</p>
                </div>
              </section>

              {/* Data, Privacy, and Security */}
              <section id="privacy" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.dataPrivacyAndSecurity`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.weMayCollectAndProcessInformat`)}</p>
                  <p>{t(`${p}.weImplementReasonableTechnical`)}</p>
                  <p>{t(`${p}.youShouldNotSubmitHighlySensit`)}</p>
                  <p>{t(`${p}.additionalInformationOnOurHand`)}<Link to="/privacy" className="text-primary-600 hover:underline">{t(`${p}.privacyPolicy`)}</Link> {t(`${p}.onOurWebsite`)}</p>
                </div>
              </section>

              {/* Disclaimers */}
              <section id="disclaimers" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.disclaimers`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theServicesAndAllAchievePackCo`)}<strong>{t(`${p}.asIs`)}</strong> {t(`${p}.and`)}<strong>{t(`${p}.asAvailable`)}</strong> {t(`${p}.basisToTheMaximumExtentPermitt`)}</p>
                  <p>{t(`${p}.anyTechnicalGuidanceRegulatory`)}</p>
                  <p>{t(`${p}.youRemainSolelyResponsibleForE`)}</p>
                </div>
              </section>

              {/* Limitations of Liability */}
              <section id="liability" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <Scale className="h-5 w-5 text-rose-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.limitationsOfLiability`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.toTheMaximumExtentPermittedByL`)}</p>
                  <p>{t(`${p}.toTheExtentPermittedByLawBecau`)}<strong>{t(`${p}.usd20`)}</strong>.</p>
                </div>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-fuchsia-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-fuchsia-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.indemnification`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.youAgreeToIndemnifyDefendAndHo`)}</p>
                  <ul>
                    <li>{t(`${p}.yourUserContent`)}</li>
                    <li>{t(`${p}.yourUseOfTheServices`)}</li>
                    <li>{t(`${p}.yourBreachOfTheseTerms`)}</li>
                    <li>{t(`${p}.yourViolationOfAnyApplicableLa`)}</li>
                  </ul>
                  <p>{t(`${p}.weMayAtOurOwnExpenseAssumeTheE`)}</p>
                </div>
              </section>

              {/* Modifications and Interruptions */}
              <section id="modifications" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.modificationsAndInterruptions`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.weMayModifySuspendOrDiscontinu`)}</p>
                  <p>{t(`${p}.weDoNotGuaranteeThatTheService`)}</p>
                </div>
              </section>

              {/* Governing Law and Dispute Resolution */}
              <section id="governing-law" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center">
                    <Gavel className="h-5 w-5 text-lime-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.governingLawAndDisputeResoluti`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.unlessOtherwiseRequiredByManda`)}<strong>{t(`${p}.republicOfSingapore`)}</strong>{t(`${p}.withoutRegardToItsConflictOfLa`)}</p>
                  <p>{t(`${p}.youAgreeToFirstAttemptToResolv`)}</p>
                  <p>{t(`${p}.ifTheDisputeIsNotResolvedWithi`)}</p>
                </div>
              </section>

              {/* Changes to These Terms */}
              <section id="changes" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-neutral-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.changesToTheseTerms`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.weMayUpdateTheseTermsFromTimeT`)}</p>
                  <p>{t(`${p}.yourContinuedUseOfTheServicesA`)}</p>
                </div>
              </section>

              {/* Miscellaneous */}
              <section id="miscellaneous" className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-gray-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.miscellaneous`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.theseTermsTogetherWithAnyAddit`)}</p>
                  <p>{t(`${p}.ifAnyProvisionOfTheseTermsIsHe`)}</p>
                  <p>{t(`${p}.weMayAssignAnyOfOurRightsAndOb`)}</p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900">{t(`${p}.contact`)}</h2>
                </div>
                <div className="prose prose-neutral max-w-none">
                  <p>{t(`${p}.forQuestionsOrConcernsRegardin`)}</p>
                  <div className="bg-white rounded-lg p-6 mt-4">
                    <p className="font-semibold text-lg mb-2">{t(`${p}.achievePackCustomerCentre`)}</p>
                    <p>{t(`${p}.email`)}<a href="mailto:support@achievepack.com" className="text-primary-600 hover:underline">{t(`${p}.supportAchievepackCom`)}</a></p>
                    <p>{t(`${p}.website`)}<a href="https://achievepack.com" className="text-primary-600 hover:underline">{t(`${p}.achievepackCom`)}</a></p>
                  </div>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link to="/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                <ArrowLeft className="h-5 w-5" /> {t(`${p}.backToHome`)}</Link>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-neutral-900 text-white py-8 mt-12">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-neutral-400 text-sm">{t(`${p}.2026AchievePackAllRightsReserv`)}</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <Link to="/terms-of-use" className="text-neutral-400 hover:text-white">{t(`${p}.termsOfUse`)}</Link>
              <Link to="/privacy" className="text-neutral-400 hover:text-white">{t(`${p}.privacyPolicy4`)}</Link>
              <Link to="/terms" className="text-neutral-400 hover:text-white">{t(`${p}.orderTerms`)}</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default TermsOfUsePage
