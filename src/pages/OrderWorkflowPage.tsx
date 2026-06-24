import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Package, FileText, Image as ImageIcon, Truck, CheckCircle, 
  Clock, AlertCircle, ArrowRight, Search, Filter, MessageSquare,
  Download, Upload, Mail, Bell, BarChart3, Users, ArrowLeft
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const OrderWorkflowPage: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const p = 'seoPages.pages.orderWorkflow'

  const workflowSteps = [
    {
      id: 'rfq',
      title: t(`${p}.workflowSteps.0.title`, 'RFQ / QuotePleaseDemand'),
      icon: FileText,
      description: t(`${p}.workflowSteps.0.desc`, 'CustomerRaiseInquiryPrice，ManagementStaffReturnCompoundQuote'),
      color: 'blue',
      features: [
        t(`${p}.workflowSteps.0.f1`, 'ViewAllPendingOf RFQ'),
        t(`${p}.workflowSteps.0.f2`, 'ReturnCompoundQuoteAndSendMailPiece'),
        t(`${p}.workflowSteps.0.f3`, 'WithSetMailPieceLeadUseLink'),
        t(`${p}.workflowSteps.0.f4`, 'MarkQuoteStatus（AlreadySend、AlreadyConnectReceive、AlreadyReject）')
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=rfq'
    },
    {
      id: 'artwork',
      title: t(`${p}.workflowSteps.1.title`, 'Artwork / Design Draft'),
      icon: ImageIcon,
      description: t(`${p}.workflowSteps.1.desc`, 'ProcessingCustomerUploadOfDesign DraftAndProvideFeedback'),
      color: 'purple',
      features: [
        t(`${p}.workflowSteps.1.f1`, 'ReviewDesign Draft'),
        t(`${p}.workflowSteps.1.f2`, 'AddReviewTheoryAndFeedback'),
        t(`${p}.workflowSteps.1.f3`, 'BatchStandardOrRejectDesign Draft'),
        t(`${p}.workflowSteps.1.f4`, 'ManagementDesign DraftEditionBook')
      ],
      link: '/ctrl-x9k7m/management?tab=artwork'
    },
    {
      id: 'orders',
      title: t(`${p}.workflowSteps.2.title`, 'Store Orders / BusinessStoreOrder'),
      icon: Package,
      description: t(`${p}.workflowSteps.2.desc`, 'ManagementWebsiteBusinessStoreOrderOfProductionAndWithDeliver'),
      color: 'green',
      features: [
        t(`${p}.workflowSteps.2.f1`, 'ViewAllOrderStatus'),
        t(`${p}.workflowSteps.2.f2`, 'MoreNewOrderStatus（Pending、Confirm、Production、AlreadyShipping）'),
        t(`${p}.workflowSteps.2.f3`, 'ManagementPaymentStatus'),
        t(`${p}.workflowSteps.2.f4`, 'AddOrderNotes')
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    },
    {
      id: 'shipping',
      title: t(`${p}.workflowSteps.3.title`, 'Shipping / MaterialFlowTrack'),
      icon: Truck,
      description: t(`${p}.workflowSteps.3.desc`, 'AddMaterialFlowLetterInfoAndNotificationCustomer'),
      color: 'indigo',
      features: [
        t(`${p}.workflowSteps.3.f1`, 'AddTrackNumber'),
        t(`${p}.workflowSteps.3.f2`, 'UploadMaterialFlowPhotoPiece'),
        t(`${p}.workflowSteps.3.f3`, 'SendMaterialFlowMoreNewMailPiece'),
        t(`${p}.workflowSteps.3.f4`, 'ViewWithDeliverHistory')
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    }
  ]

  const quickActions = [
    {
      title: t(`${p}.fastGuide.quickAccess.title`, 'FastVisit'),
      icon: Bell,
      items: [
        { label: t(`${p}.fastGuide.quickAccess.l1`, 'Pending RFQ'), count: 'QuickAccess', color: 'blue' },
        { label: t(`${p}.fastGuide.quickAccess.l2`, 'WaitReviewDesign Draft'), count: 'QuickAccess', color: 'purple' },
        { label: t(`${p}.fastGuide.quickAccess.l3`, 'PendingOrder'), count: 'QuickAccess', color: 'orange' }
      ]
    },
    {
      title: t(`${p}.fastGuide.workQueue.title`, 'WorkQueue'),
      icon: BarChart3,
      items: [
        { label: t(`${p}.fastGuide.workQueue.l1`, 'TodayTask'), count: 'WorkQueue', color: 'green' },
        { label: t(`${p}.fastGuide.workQueue.l2`, 'UrgentProcessing'), count: 'WorkQueue', color: 'red' },
        { label: t(`${p}.fastGuide.workQueue.l3`, 'WaitFollowInto'), count: 'WorkQueue', color: 'yellow' }
      ]
    }
  ]

  const adminFeatures = [
    {
      icon: Search,
      title: t(`${p}.management.f1.title`, 'FullBureauSearch'),
      description: t(`${p}.management.f1.desc`, 'SearchOrder、Customer、RFQ EditNumber')
    },
    {
      icon: Filter,
      title: t(`${p}.management.f2.title`, 'HighGradeThroughFilter'),
      description: t(`${p}.management.f2.desc`, 'PressStatus、DayPeriod、CustomerScreen')
    },
    {
      icon: MessageSquare,
      title: t(`${p}.management.f3.title`, 'InsidePartNotes'),
      description: t(`${p}.management.f3.desc`, 'ForOrderAddTeamNotes')
    },
    {
      icon: Mail,
      title: t(`${p}.management.f4.title`, 'MailPieceNotification'),
      description: t(`${p}.management.f4.desc`, 'SelfMoveSendStatusMoreNewMailPiece')
    },
    {
      icon: Download,
      title: t(`${p}.management.f5.title`, 'GuideOutData'),
      description: t(`${p}.management.f5.desc`, 'GuideOutOrderAndQuoteData')
    },
    {
      icon: Users,
      title: t(`${p}.management.f6.title`, 'CustomerManagement'),
      description: t(`${p}.management.f6.desc`, 'ViewCustomerOrderHistory')
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        hover: 'hover:bg-blue-100'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
        hover: 'hover:bg-purple-100'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        hover: 'hover:bg-green-100'
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        border: 'border-indigo-200',
        hover: 'hover:bg-indigo-100'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200',
        hover: 'hover:bg-orange-100'
      },
      red: {
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        hover: 'hover:bg-red-100'
      },
      yellow: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200',
        hover: 'hover:bg-yellow-100'
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/ctrl-x9k7m')}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(`${p}.backToDashboard`, 'ReturnReturnManagementPageFace')}
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{t(`${p}.title`, 'Order Workflow Instructions')}</h1>
          <p className="text-gray-600 mt-2">{t(`${p}.subtitle`, 'DoneSolveIfWhatUseOrderManagementSystemProcessing RFQ、Design DraftAndBusinessStoreOrder')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Workflow Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t(`${p}.workflowStepsTitle`, 'CompleteWorkProcess')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              const colors = getColorClasses(step.color)
              return (
                <div
                  key={step.id}
                  className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 transition-all hover:shadow-lg cursor-pointer group`}
                  onClick={() => navigate(step.link)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${colors.bg} ${colors.text} p-3 rounded-xl border ${colors.border} group-${colors.hover}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${colors.text} text-xs font-bold px-2 py-0.5 ${colors.bg} rounded-full`}>
                          {t(`${p}.stepIndex`, 'Steps {{index}}', { index: index + 1 })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2 mb-4">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                        {t(`${p}.goProcess`, 'BeforeGoProcessing')}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t(`${p}.fastGuide.title`, 'FastGuideSail')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickActions.map((section) => {
              const Icon = section.icon
              return (
                <div key={section.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg">
                      <Icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => {
                      const colors = getColorClasses(item.color)
                      return (
                        <div
                          key={idx}
                          className={`flex items-center justify-between p-3 ${colors.bg} rounded-lg border ${colors.border}`}
                        >
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <span className={`text-xs font-bold ${colors.text} px-2 py-1 bg-white rounded-full`}>
                            {item.count}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Admin Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t(`${p}.management.title`, 'ManagementFunctionCan')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {adminFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
                >
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center group-hover:from-primary-100 group-hover:to-primary-200 transition-all">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{t(`${p}.statusLegend.title`, 'OrderStatusInstructions')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">{t(`${p}.statusLegend.rfq.title`, 'RFQ Status')}</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>{t(`${p}.statusLegend.rfq.s1`, 'Pending - Pending')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>{t(`${p}.statusLegend.rfq.s2`, 'Quoted - AlreadyQuote')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>{t(`${p}.statusLegend.rfq.s3`, 'Accepted - AlreadyConnectReceive')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>{t(`${p}.statusLegend.rfq.s4`, 'Rejected - AlreadyReject')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">{t(`${p}.statusLegend.order.title`, 'OrderStatus')}</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>{t(`${p}.statusLegend.order.s1`, 'Pending - Pending')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>{t(`${p}.statusLegend.order.s2`, 'Confirmed - AlreadyConfirm')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>{t(`${p}.statusLegend.order.s3`, 'Production - ProductionIn')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>{t(`${p}.statusLegend.order.s4`, 'Shipped - AlreadyShipping')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>{t(`${p}.statusLegend.order.s5`, 'Delivered - AlreadyDeliverReach')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">{t(`${p}.statusLegend.payment.title`, 'PaymentStatus')}</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span>{t(`${p}.statusLegend.payment.s1`, 'Unpaid - NotPayment')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>{t(`${p}.statusLegend.payment.s2`, 'Deposit Paid - AlreadyPayFixedGold')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>{t(`${p}.statusLegend.payment.s3`, 'Paid - AlreadyFullExtraPayment')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">{t(`${p}.statusLegend.artwork.title`, 'Design DraftStatus')}</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>{t(`${p}.statusLegend.artwork.s1`, 'Pending Review - WaitReview')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>{t(`${p}.statusLegend.artwork.s2`, 'In Review - ReviewIn')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>{t(`${p}.statusLegend.artwork.s3`, 'Approved - AlreadyBatchStandard')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>{t(`${p}.statusLegend.artwork.s4`, 'Needs Changes - RequireRepairChange')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">{t(`${p}.cta.title`, 'StandardPrepareGoodStartProcessingOrder?？')}</h2>
          <p className="text-primary-100 mb-6">{t(`${p}.cta.desc`, 'PointHitUnderSidePressButtonEnterOrderManagementSystem')}</p>
          <button
            onClick={() => navigate('/ctrl-x9k7m/management')}
            className="px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            {t(`${p}.cta.btn`, 'EnterOrderManagement')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderWorkflowPage
