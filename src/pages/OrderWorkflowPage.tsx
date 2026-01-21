import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Package, FileText, Image as ImageIcon, Truck, CheckCircle, 
  Clock, AlertCircle, ArrowRight, Search, Filter, MessageSquare,
  Download, Upload, Mail, Bell, BarChart3, Users, ArrowLeft
} from 'lucide-react'

const OrderWorkflowPage: React.FC = () => {
  const navigate = useNavigate()

  const workflowSteps = [
    {
      id: 'rfq',
      title: 'RFQ / QuotePleaseDemand',
      icon: FileText,
      description: 'CustomerRaiseInquiryPrice，ManagementStaffReturnCompoundQuote',
      color: 'blue',
      features: [
        'ViewAllPendingOf RFQ',
        'ReturnCompoundQuoteAndSendMailPiece',
        'WithSetMailPieceLeadUseLink',
        'MarkQuoteStatus（AlreadySend、AlreadyConnectReceive、AlreadyReject）'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=rfq'
    },
    {
      id: 'artwork',
      title: 'Artwork / Design Draft',
      icon: ImageIcon,
      description: 'ProcessingCustomerUploadOfDesign DraftAndProvideFeedback',
      color: 'purple',
      features: [
        'ReviewDesign Draft',
        'AddReviewTheoryAndFeedback',
        'BatchStandardOrRejectDesign Draft',
        'ManagementDesign DraftEditionBook'
      ],
      link: '/ctrl-x9k7m/management?tab=artwork'
    },
    {
      id: 'orders',
      title: 'Store Orders / BusinessStoreOrder',
      icon: Package,
      description: 'ManagementWebsiteBusinessStoreOrderOfProductionAndWithDeliver',
      color: 'green',
      features: [
        'ViewAllOrderStatus',
        'MoreNewOrderStatus（Pending、Confirm、Production、AlreadyShipping）',
        'ManagementPaymentStatus',
        'AddOrderNotes'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    },
    {
      id: 'shipping',
      title: 'Shipping / MaterialFlowTrack',
      icon: Truck,
      description: 'AddMaterialFlowLetterInfoAndNotificationCustomer',
      color: 'indigo',
      features: [
        'AddTrackNumber',
        'UploadMaterialFlowPhotoPiece',
        'SendMaterialFlowMoreNewMailPiece',
        'ViewWithDeliverHistory'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    }
  ]

  const quickActions = [
    {
      title: 'FastVisit',
      icon: Bell,
      items: [
        { label: 'Pending RFQ', count: 'QuickAccess', color: 'blue' },
        { label: 'WaitReviewDesign Draft', count: 'QuickAccess', color: 'purple' },
        { label: 'PendingOrder', count: 'QuickAccess', color: 'orange' }
      ]
    },
    {
      title: 'WorkQueue',
      icon: BarChart3,
      items: [
        { label: 'TodayTask', count: 'WorkQueue', color: 'green' },
        { label: 'UrgentProcessing', count: 'WorkQueue', color: 'red' },
        { label: 'WaitFollowInto', count: 'WorkQueue', color: 'yellow' }
      ]
    }
  ]

  const adminFeatures = [
    {
      icon: Search,
      title: 'FullBureauSearch',
      description: 'SearchOrder、Customer、RFQ EditNumber'
    },
    {
      icon: Filter,
      title: 'HighGradeThroughFilter',
      description: 'PressStatus、DayPeriod、CustomerScreen'
    },
    {
      icon: MessageSquare,
      title: 'InsidePartNotes',
      description: 'ForOrderAddTeamNotes'
    },
    {
      icon: Mail,
      title: 'MailPieceNotification',
      description: 'SelfMoveSendStatusMoreNewMailPiece'
    },
    {
      icon: Download,
      title: 'GuideOutData',
      description: 'GuideOutOrderAndQuoteData'
    },
    {
      icon: Users,
      title: 'CustomerManagement',
      description: 'ViewCustomerOrderHistory'
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
            ReturnReturnManagementPageFace
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Order Workflow Instructions</h1>
          <p className="text-gray-600 mt-2">DoneSolveIfWhatUseOrderManagementSystemProcessing RFQ、Design DraftAndBusinessStoreOrder</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Workflow Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">CompleteWorkProcess</h2>
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
                          Steps {index + 1}
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
                        BeforeGoProcessing
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FastGuideSail</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ManagementFunctionCan</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">OrderStatusInstructions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">RFQ Status</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending - Pending</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Quoted - AlreadyQuote</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Accepted - AlreadyConnectReceive</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Rejected - AlreadyReject</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">OrderStatus</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending - Pending</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Confirmed - AlreadyConfirm</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Production - ProductionIn</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Shipped - AlreadyShipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Delivered - AlreadyDeliverReach</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">PaymentStatus</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span>Unpaid - NotPayment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Deposit Paid - AlreadyPayFixedGold</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Paid - AlreadyFullExtraPayment</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">Design DraftStatus</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending Review - WaitReview</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>In Review - ReviewIn</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Approved - AlreadyBatchStandard</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Needs Changes - RequireRepairChange</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">StandardPrepareGoodStartProcessingOrder?？</h2>
          <p className="text-primary-100 mb-6">PointHitUnderSidePressButtonEnterOrderManagementSystem</p>
          <button
            onClick={() => navigate('/ctrl-x9k7m/management')}
            className="px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            EnterOrderManagement
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderWorkflowPage
