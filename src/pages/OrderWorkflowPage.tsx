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
      title: 'RFQ / 报价请求',
      icon: FileText,
      description: '客户提交询价，管理员回复报价',
      color: 'blue',
      features: [
        '查看所有待处理的 RFQ',
        '回复报价并发送邮件',
        '配置邮件引用链接',
        '标记报价状态（已发送、已接受、已拒绝）'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=rfq'
    },
    {
      id: 'artwork',
      title: 'Artwork / 设计稿',
      icon: ImageIcon,
      description: '处理客户上传的设计稿并提供反馈',
      color: 'purple',
      features: [
        '审核设计稿',
        '添加评论和反馈',
        '批准或拒绝设计稿',
        '管理设计稿版本'
      ],
      link: '/ctrl-x9k7m/management?tab=artwork'
    },
    {
      id: 'orders',
      title: 'Store Orders / 商店订单',
      icon: Package,
      description: '管理网站商店订单的生产和配送',
      color: 'green',
      features: [
        '查看所有订单状态',
        '更新订单状态（待处理、确认、生产、已发货）',
        '管理支付状态',
        '添加订单备注'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    },
    {
      id: 'shipping',
      title: 'Shipping / 物流追踪',
      icon: Truck,
      description: '添加物流信息并通知客户',
      color: 'indigo',
      features: [
        '添加追踪号码',
        '上传物流照片',
        '发送物流更新邮件',
        '查看配送历史'
      ],
      link: '/ctrl-x9k7m/management?tab=quotes&subtab=orders'
    }
  ]

  const quickActions = [
    {
      title: '快速访问',
      icon: Bell,
      items: [
        { label: '待处理 RFQ', count: 'QuickAccess', color: 'blue' },
        { label: '待审核设计稿', count: 'QuickAccess', color: 'purple' },
        { label: '待处理订单', count: 'QuickAccess', color: 'orange' }
      ]
    },
    {
      title: '工作队列',
      icon: BarChart3,
      items: [
        { label: '今日任务', count: 'WorkQueue', color: 'green' },
        { label: '紧急处理', count: 'WorkQueue', color: 'red' },
        { label: '待跟进', count: 'WorkQueue', color: 'yellow' }
      ]
    }
  ]

  const adminFeatures = [
    {
      icon: Search,
      title: '全局搜索',
      description: '搜索订单、客户、RFQ 编号'
    },
    {
      icon: Filter,
      title: '高级过滤',
      description: '按状态、日期、客户筛选'
    },
    {
      icon: MessageSquare,
      title: '内部备注',
      description: '为订单添加团队备注'
    },
    {
      icon: Mail,
      title: '邮件通知',
      description: '自动发送状态更新邮件'
    },
    {
      icon: Download,
      title: '导出数据',
      description: '导出订单和报价数据'
    },
    {
      icon: Users,
      title: '客户管理',
      description: '查看客户订单历史'
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
            返回管理页面
          </button>
          <h1 className="text-3xl font-bold text-gray-900">订单工作流说明</h1>
          <p className="text-gray-600 mt-2">了解如何使用订单管理系统处理 RFQ、设计稿和商店订单</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Workflow Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">完整工作流程</h2>
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
                          步骤 {index + 1}
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
                        前往处理
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">快速导航</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">管理功能</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">订单状态说明</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">RFQ 状态</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending - 待处理</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Quoted - 已报价</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Accepted - 已接受</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Rejected - 已拒绝</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">订单状态</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending - 待处理</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Confirmed - 已确认</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Production - 生产中</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Shipped - 已发货</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Delivered - 已送达</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">支付状态</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span>Unpaid - 未支付</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Deposit Paid - 已付定金</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Paid - 已全额支付</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-700">设计稿状态</h4>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Pending Review - 待审核</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>In Review - 审核中</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Approved - 已批准</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Needs Changes - 需修改</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">准备好开始处理订单了吗？</h2>
          <p className="text-primary-100 mb-6">点击下方按钮进入订单管理系统</p>
          <button
            onClick={() => navigate('/ctrl-x9k7m/management')}
            className="px-8 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl"
          >
            进入订单管理
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderWorkflowPage
