import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Plus,
  Trash2,
  Edit,
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Sparkles,
  FileSpreadsheet,
  Coins,
  RefreshCw,
  Home,
  Car,
  Briefcase
} from 'lucide-react'
import { toast } from 'sonner'

// ==========================================
// 類型與資料結構 (極簡版，適合12歲小老闆)
// ==========================================

export type CurrencyType = 'USD' | 'HKD' | 'RMB'

export type BusinessType = 
  | '包裝買賣 📦'
  | '車位出租 🅿️'
  | '汽車出租 🚗'
  | '房屋出租 🏠'

export type CategoryLabelType =
  // 賺錢項目
  | '收租金 💰'
  | '商品銷售 📦'
  | '其他收入 💵'
  // 花錢項目
  | '日常維修 🛠️'
  | '水電開銷 ⚡'
  | '進貨成本 📦'
  | '其他支出 💸'

export interface Transaction {
  id: string
  date: string // YYYY-MM-DD
  type: 'incoming' | 'outgoing' // incoming (賺錢 💰) | outgoing (花錢 💸)
  amount: number // 換算後的美金基準額 (Base USD)
  originalAmount: number // 原始輸入金額
  currency: CurrencyType // 原始幣別
  business: BusinessType // 屬於哪一個生意
  label: CategoryLabelType // 收支類別
  description: string // 備註說明
  paymentMethod: '銀行轉帳' | '現金' | '信用卡' | '微信/支付寶'
}

// 預設匯率
const EXCHANGE_RATES: Record<CurrencyType, number> = {
  USD: 1.0,
  HKD: 7.8,
  RMB: 7.25
}

// 貨幣符號
const CURRENCY_SYMBOLS: Record<CurrencyType, string> = {
  USD: '$',
  HKD: 'HK$',
  RMB: '¥'
}

// 生意項目的代表顏色
const BUSINESS_COLORS: Record<BusinessType, string> = {
  '包裝買賣 📦': 'from-blue-500 to-cyan-500 shadow-blue-500/20',
  '車位出租 🅿️': 'from-purple-500 to-indigo-500 shadow-purple-500/20',
  '汽車出租 🚗': 'from-amber-500 to-orange-500 shadow-amber-500/20',
  '房屋出租 🏠': 'from-emerald-500 to-teal-500 shadow-emerald-500/20'
}

// ==========================================
// 6月份與5月份高水準模擬數據 (12歲老闆的生意)
// ==========================================

const INITIAL_TRANSACTIONS: Transaction[] = [
  // --- 2026年6月 (當前月份) ---
  {
    id: 't-jun-1',
    date: '2026-06-02',
    type: 'incoming',
    amount: 1500,
    originalAmount: 1500,
    currency: 'USD',
    business: '房屋出租 🏠',
    label: '收租金 💰',
    description: '台北大安區公寓月度租金回籠',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-2',
    date: '2026-06-02',
    type: 'incoming',
    amount: 200,
    originalAmount: 1560,
    currency: 'HKD',
    business: '車位出租 🅿️',
    label: '收租金 💰',
    description: '中環商業中心 B2 車位月租 (港幣入帳)',
    paymentMethod: '現金'
  },
  {
    id: 't-jun-3',
    date: '2026-06-03',
    type: 'incoming',
    amount: 500,
    originalAmount: 3625,
    currency: 'RMB',
    business: '汽車出租 🚗',
    label: '收租金 💰',
    description: '特斯拉 Model 3 週租金 (人民幣結算)',
    paymentMethod: '微信/支付寶'
  },
  {
    id: 't-jun-4',
    date: '2026-06-05',
    type: 'incoming',
    amount: 3200,
    originalAmount: 3200,
    currency: 'USD',
    business: '包裝買賣 📦',
    label: '商品銷售 📦',
    description: '承接一批客製化可降解環保紙袋出貨',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-5',
    date: '2026-06-08',
    type: 'outgoing',
    amount: 1200,
    originalAmount: 8700,
    currency: 'RMB',
    business: '包裝買賣 📦',
    label: '進貨成本 📦',
    description: '向廠商採購 PBS 環保原料顆粒 (人民幣付費)',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-6',
    date: '2026-06-10',
    type: 'outgoing',
    amount: 150,
    originalAmount: 1170,
    currency: 'HKD',
    business: '汽車出租 🚗',
    label: '日常維修 🛠️',
    description: '出租車輛輪胎保養與局部劃痕修補',
    paymentMethod: '信用卡'
  },
  {
    id: 't-jun-7',
    date: '2026-06-12',
    type: 'outgoing',
    amount: 80,
    originalAmount: 80,
    currency: 'USD',
    business: '房屋出租 🏠',
    label: '水電開銷 ⚡',
    description: '出租屋走廊水電及物業代繳費',
    paymentMethod: '信用卡'
  },
  
  // --- 2026年5月 ---
  {
    id: 't-may-1',
    date: '2026-05-02',
    type: 'incoming',
    amount: 1500,
    originalAmount: 1500,
    currency: 'USD',
    business: '房屋出租 🏠',
    label: '收租金 💰',
    description: '出租公寓月租金回籠',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-2',
    date: '2026-05-02',
    type: 'incoming',
    amount: 200,
    originalAmount: 1560,
    currency: 'HKD',
    business: '車位出租 🅿️',
    label: '收租金 💰',
    description: '車位出租月租金收訖',
    paymentMethod: '現金'
  },
  {
    id: 't-may-3',
    date: '2026-05-03',
    type: 'incoming',
    amount: 600,
    originalAmount: 600,
    currency: 'USD',
    business: '汽車出租 🚗',
    label: '收租金 💰',
    description: '豐田貨車週租金收益',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-4',
    date: '2026-05-12',
    type: 'incoming',
    amount: 2500,
    originalAmount: 18125,
    currency: 'RMB',
    business: '包裝買賣 📦',
    label: '商品銷售 📦',
    description: '向茶葉店銷售可降解封口袋',
    paymentMethod: '微信/支付寶'
  },
  {
    id: 't-may-5',
    date: '2026-05-15',
    type: 'outgoing',
    amount: 900,
    originalAmount: 900,
    currency: 'USD',
    business: '包裝買賣 📦',
    label: '進貨成本 📦',
    description: '購買牛皮紙立體袋現貨進庫存',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-6',
    date: '2026-05-20',
    type: 'outgoing',
    amount: 300,
    originalAmount: 2175,
    currency: 'RMB',
    business: '房屋出租 🏠',
    label: '日常維修 🛠️',
    description: '更換出租房屋廚房熱水器水龍頭',
    paymentMethod: '現金'
  }
]

const BookkeepingPage: React.FC = () => {
  // 分頁切換：overview (存錢罐), ledger (流水賬本), calendar (收支日曆), report (生意分析)
  const [activeTab, setActiveTab] = useState<'overview' | 'ledger' | 'calendar' | 'report'>('overview')

  // 核心數據 state，綁定至本地儲存 LocalStorage
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kid_bookkeeping_transactions')
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS
  })

  // 自訂匯率 state (1 USD = 7.8 HKD | 7.25 RMB)
  const [customRates, setCustomRates] = useState<Record<CurrencyType, number>>(() => {
    const saved = localStorage.getItem('kid_bookkeeping_rates')
    return saved ? JSON.parse(saved) : EXCHANGE_RATES
  })

  const [showRateSettings, setShowRateSettings] = useState(false)

  // 寫入本地儲存
  useEffect(() => {
    localStorage.setItem('kid_bookkeeping_transactions', JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem('kid_bookkeeping_rates', JSON.stringify(customRates))
  }, [customRates])

  // Predefined 4 Businesses
  const businessesList: BusinessType[] = ['包裝買賣 📦', '車位出租 🅿️', '汽車出租 🚗', '房屋出租 🏠']

  // 流水賬篩選器
  const [searchQuery, setSearchQuery] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'incoming' | 'outgoing'>('all')
  const [filterBusiness, setFilterBusiness] = useState<string>('all')
  const [filterCurrency, setFilterCurrency] = useState<string>('all')

  // 收支日曆 state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)) // 預設 2026 年 6 月
  const [selectedDayDetail, setSelectedDayDetail] = useState<{ dayString: string; items: Transaction[] } | null>(null)
  const [showCalendarAddForm, setShowCalendarAddForm] = useState(false)

  // 記一筆 / 編輯 表單 state
  const [showAddForm, setShowAddForm] = useState(false)
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0])
  const [formType, setFormType] = useState<'incoming' | 'outgoing'>('incoming')
  const [formAmount, setFormAmount] = useState('') // 原始金額
  const [formCurrency, setFormCurrency] = useState<CurrencyType>('USD')
  const [formBusiness, setFormBusiness] = useState<BusinessType>('包裝買賣 📦')
  const [formLabel, setFormLabel] = useState<CategoryLabelType>('商品銷售 📦')
  const [formDescription, setFormDescription] = useState('')
  const [formPaymentMethod, setFormPaymentMethod] = useState<Transaction['paymentMethod']>('銀行轉帳')
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null)

  // 重置記賬表單
  const resetForm = () => {
    setFormDate(new Date().toISOString().split('T')[0])
    setFormType('incoming')
    setFormAmount('')
    setFormCurrency('USD')
    setFormBusiness('包裝買賣 📦')
    setFormLabel('商品銷售 📦')
    setFormDescription('')
    setFormPaymentMethod('銀行轉帳')
    setEditingTransactionId(null)
  }

  // 根據收支流向自動對齊類別
  useEffect(() => {
    if (formType === 'incoming') {
      if (formBusiness === '包裝買賣 📦') {
        setFormLabel('商品銷售 📦')
      } else {
        setFormLabel('收租金 💰')
      }
    } else {
      if (formBusiness === '包裝買賣 📦') {
        setFormLabel('進貨成本 📦')
      } else if (formBusiness === '房屋出租 🏠' || formBusiness === '車位出租 🅿️') {
        setFormLabel('水電開銷 ⚡')
      } else {
        setFormLabel('日常維修 🛠️')
      }
    }
  }, [formType, formBusiness])

  // 實時換算基準美金
  const convertedPreviewAmount = useMemo(() => {
    if (!formAmount || isNaN(Number(formAmount))) return 0
    const amt = Number(formAmount)
    const rate = customRates[formCurrency] || 1.0
    return amt / rate
  }, [formAmount, formCurrency, customRates])

  // 實時跨幣別換算對照組 (讓12歲小朋友看到神奇的魔術換算)
  const liveConversions = useMemo(() => {
    if (!formAmount || isNaN(Number(formAmount))) return null
    const amt = Number(formAmount)
    const hkdRate = customRates.HKD || 7.8
    const rmbRate = customRates.RMB || 7.25

    let usdVal = 0
    let hkdVal = 0
    let rmbVal = 0

    if (formCurrency === 'USD') {
      usdVal = amt
      hkdVal = amt * hkdRate
      rmbVal = amt * rmbRate
    } else if (formCurrency === 'HKD') {
      usdVal = amt / hkdRate
      hkdVal = amt
      rmbVal = (amt / hkdRate) * rmbRate
    } else if (formCurrency === 'RMB') {
      usdVal = amt / rmbRate
      hkdVal = (amt / rmbRate) * hkdRate
      rmbVal = amt
    }

    return {
      USD: usdVal,
      HKD: hkdVal,
      RMB: rmbVal
    }
  }, [formAmount, formCurrency, customRates])

  // 保存交易
  const handleSaveTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formAmount || isNaN(Number(formAmount)) || Number(formAmount) <= 0) {
      toast.error('請輸入有效的數字金額唷！')
      return
    }
    if (!formDescription.trim()) {
      toast.error('請寫一點小備註，才不會忘記這筆錢是做什麼的唷！')
      return
    }

    const origAmt = Number(formAmount)
    const rate = customRates[formCurrency] || 1.0
    const baseUsd = origAmt / rate

    const tData: Transaction = {
      id: editingTransactionId || `t-${Date.now()}`,
      date: formDate,
      type: formType,
      amount: baseUsd,
      originalAmount: origAmt,
      currency: formCurrency,
      business: formBusiness,
      label: formLabel,
      description: formDescription.trim(),
      paymentMethod: formPaymentMethod
    }

    if (editingTransactionId) {
      setTransactions(prev => prev.map(t => (t.id === editingTransactionId ? tData : t)))
      toast.success('小筆記修改成功啦！✨')
    } else {
      setTransactions(prev => [tData, ...prev])
      toast.success('記下一筆新收支囉！💰')
    }

    setShowAddForm(false)
    setShowCalendarAddForm(false)
    resetForm()
  }

  // 編輯交易
  const startEditTransaction = (t: Transaction) => {
    setEditingTransactionId(t.id)
    setFormDate(t.date)
    setFormType(t.type)
    setFormAmount(String(t.originalAmount))
    setFormCurrency(t.currency)
    setFormBusiness(t.business)
    setFormLabel(t.label)
    setFormDescription(t.description)
    setFormPaymentMethod(t.paymentMethod)
    setShowAddForm(true)
  }

  // 刪除交易
  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('確定要擦掉這一筆記賬小筆記嗎？擦掉就找不回來囉！')) {
      setTransactions(prev => prev.filter(t => t.id !== id))
      toast.success('已經幫你把小筆記擦乾淨囉！🧹')
      setSelectedDayDetail(null)
    }
  }

  // ==========================================
  // 計算財務指標 (基準美金)
  // ==========================================

  const stats = useMemo(() => {
    let earned = 0 // 收入
    let spent = 0 // 支出
    
    transactions.forEach(t => {
      if (t.type === 'incoming') earned += t.amount
      else spent += t.amount
    })

    const pocketMoney = earned - spent // 剩下賺到的錢

    return {
      earned,
      spent,
      pocketMoney
    }
  }, [transactions])

  // 各生意的收入與支出統計
  const businessStats = useMemo(() => {
    const bMap: Record<BusinessType, { earned: number; spent: number; profit: number }> = {
      '包裝買賣 📦': { earned: 0, spent: 0, profit: 0 },
      '車位出租 🅿️': { earned: 0, spent: 0, profit: 0 },
      '汽車出租 🚗': { earned: 0, spent: 0, profit: 0 },
      '房屋出租 🏠': { earned: 0, spent: 0, profit: 0 }
    }

    transactions.forEach(t => {
      if (bMap[t.business]) {
        if (t.type === 'incoming') {
          bMap[t.business].earned += t.amount
        } else {
          bMap[t.business].spent += t.amount
        }
        bMap[t.business].profit = bMap[t.business].earned - bMap[t.business].spent
      }
    })

    return bMap
  }, [transactions])

  // 篩選流水賬
  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchSearch = t.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.label.toLowerCase().includes(searchQuery.toLowerCase())
      const matchType = filterType === 'all' || t.type === filterType
      const matchBusiness = filterBusiness === 'all' || t.business === filterBusiness
      const matchCurrency = filterCurrency === 'all' || t.currency === filterCurrency

      return matchSearch && matchType && matchBusiness && matchCurrency
    })
  }, [transactions, searchQuery, filterType, filterBusiness, filterCurrency])

  // ==========================================
  // 收支日曆格網繪製邏輯 (簡易版)
  // ==========================================

  const monthYearLabel = useMemo(() => {
    return currentDate.toLocaleString('zh-TW', { month: 'long', year: 'numeric' })
  }, [currentDate])

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDay = new Date(year, month, 1)
    const startOffset = firstDay.getDay()

    const totalDays = new Date(year, month + 1, 0).getDate()
    const days = []

    for (let i = 0; i < startOffset; i++) {
      days.push(null)
    }

    for (let day = 1; day <= totalDays; day++) {
      const monthStr = String(month + 1).padStart(2, '0')
      const dayStr = String(day).padStart(2, '0')
      const dateString = `${year}-${monthStr}-${dayStr}`

      const dayItems = transactions.filter(t => t.date === dateString)
      let dayEarned = 0
      let daySpent = 0

      dayItems.forEach(t => {
        if (t.type === 'incoming') dayEarned += t.amount
        else daySpent += t.amount
      })

      days.push({
        day,
        dateString,
        items: dayItems,
        dayEarned,
        daySpent
      })
    }

    return days
  }, [currentDate, transactions])

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  const handleDayClick = (dayData: any) => {
    if (!dayData) return
    setSelectedDayDetail({
      dayString: dayData.dateString,
      items: dayData.items
    })
    setFormDate(dayData.dateString)
  }

  // 匯出簡易生意損益 CSV 報表
  const exportToCSV = () => {
    try {
      let csvContent = '\uFEFF' // UTF-8 BOM, 確保 Excel 開啟不亂碼
      csvContent += '日期,收支類型,所屬生意,收支科目,備註說明,原始金額,幣別,美金折算金額,交易方式\n'

      filteredTransactions.forEach(t => {
        const typeText = t.type === 'incoming' ? '賺錢 💰' : '花錢 💸'
        const baseUsdAmt = t.amount.toFixed(2)
        const row = [
          t.date,
          typeText,
          t.business,
          t.label,
          `"${t.description.replace(/"/g, '""')}"`,
          t.originalAmount.toFixed(2),
          t.currency,
          baseUsdAmt,
          t.paymentMethod
        ].join(',')
        csvContent += row + '\n'
      })

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.setAttribute('href', url)
      link.setAttribute('download', `小老闆記賬報表_${new Date().toISOString().split('T')[0]}.csv`)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success('小老闆的生意報表下載成功囉！快去看看吧！📊')
    } catch (e) {
      toast.error('下載失敗，請聯絡大老闆幫忙看看唷！')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-slate-100 flex flex-col font-sans selection:bg-yellow-500 selection:text-slate-950">
      
      {/* ----------------- 頂部大頭貼與標題列 ----------------- */}
      <header className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700/80 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* 標題與返回按鈕 */}
            <div className="flex items-center gap-3">
              <Link
                to="/ctrl-x9k7m"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20 text-xl font-bold animate-bounce-slow">
                  🧒
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-wide flex items-center gap-2">
                    12歲小老闆的記賬本
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 font-bold px-2 py-0.5 rounded-full border border-yellow-500/30">
                      簡單版
                    </span>
                  </h1>
                  <p className="text-xs text-slate-400">
                    學習管錢超級簡單！📦 包裝買賣 • 🚗 租車 • 🅿️ 租車位 • 🏠 租房
                  </p>
                </div>
              </div>
            </div>

            {/* 快速按鈕區 */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <button
                onClick={() => setShowRateSettings(true)}
                className="bg-slate-850 hover:bg-slate-750 text-yellow-400 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                設定匯率
              </button>
              <button
                onClick={() => {
                  resetForm()
                  setShowAddForm(true)
                }}
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-950 text-sm font-black px-5 py-2.5 rounded-2xl transition-all shadow-lg hover:scale-[1.03] flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                記一筆 💰
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ----------------- 全局統計面板 (我的小金庫) ----------------- */}
      <section className="bg-slate-900/30 py-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* 匯率條 */}
          <div className="mb-5 flex flex-wrap gap-3 text-xs bg-slate-850 p-2.5 rounded-xl border border-slate-800/80 text-slate-400 font-mono items-center">
            <span className="font-sans font-bold text-yellow-400">📈 匯率小工具：</span>
            <span>1 美金 (USD) = <strong>1.0 美金</strong></span>
            <span>•</span>
            <span>1 美金 (USD) = <strong>{customRates.HKD} 港幣 (HKD)</strong></span>
            <span>•</span>
            <span>1 美金 (USD) = <strong>{customRates.RMB} 人民幣 (RMB)</strong></span>
          </div>

          {/* 三個巨大的彩色撲滿卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* 我的利潤 (剩下賺的錢) */}
            <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-900 border border-emerald-500/30 rounded-3xl p-5 shadow-xl shadow-emerald-950/20 group hover:border-emerald-500/50 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-emerald-400">🐷 我的存錢罐剩下 (利潤)</p>
                <span className="text-2xl">💰</span>
              </div>
              <p className="text-3xl font-black text-white mt-3 font-mono">
                ${stats.pocketMoney.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-xs text-emerald-400 font-bold ml-1.5">USD</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                總共賺進來的錢，扣掉花出去的錢，剩下的都在這裡！
              </p>
            </div>

            {/* 總共賺到 */}
            <div className="bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-slate-900 border border-yellow-500/20 rounded-3xl p-5 shadow-xl group hover:border-yellow-500/40 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-yellow-400">🎉 我總共賺進來 (收入)</p>
                <span className="text-2xl">📈</span>
              </div>
              <p className="text-3xl font-black text-yellow-400 mt-3 font-mono">
                +${stats.earned.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-xs text-yellow-400 font-bold ml-1.5">USD</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                各種生意賺到的零用錢，全部都在撲滿累積著！
              </p>
            </div>

            {/* 總共花掉 */}
            <div className="bg-gradient-to-br from-rose-500/10 via-red-500/5 to-slate-900 border border-rose-500/20 rounded-3xl p-5 shadow-xl group hover:border-rose-500/40 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold text-rose-400">💸 我總共花出去 (支出)</p>
                <span className="text-2xl">📉</span>
              </div>
              <p className="text-3xl font-black text-rose-400 mt-3 font-mono">
                -${stats.spent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                <span className="text-xs text-rose-400 font-bold ml-1.5">USD</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                進貨成本、水電和修理東西花掉的錢。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 主要導覽標籤 ----------------- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        
        <div className="flex border-b border-slate-700 mb-6 overflow-x-auto gap-2 scrollbar-none">
          {[
            { id: 'overview', label: '🐷 生意小撲滿', icon: Sparkles },
            { id: 'ledger', label: '📝 流水賬筆記', icon: Coins },
            { id: 'calendar', label: '📅 記賬小日曆', icon: Calendar },
            { id: 'report', label: '📊 生意分折表', icon: FileSpreadsheet }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-black border-b-4 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-yellow-400 text-yellow-400 bg-yellow-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ----------------- 標籤頁: 生意小撲滿 ----------------- */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <h3 className="text-md font-black text-slate-300">📊 四個生意的賺錢情況</h3>
              <p className="text-xs text-slate-400">點擊上方記一筆可以增加小筆記唷！</p>
            </div>

            {/* 4個生意的小扑滿卡片 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessesList.map(b => {
                const bStat = businessStats[b] || { earned: 0, spent: 0, profit: 0 }
                const isProfit = bStat.profit >= 0
                return (
                  <div
                    key={b}
                    className="bg-slate-850 border border-slate-800 rounded-3xl p-5 hover:border-yellow-400/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                          我的生意
                        </span>
                        <span className="text-lg">🎨</span>
                      </div>
                      <h4 className="text-lg font-black text-white tracking-wide">{b}</h4>
                    </div>

                    <div className="mt-5 space-y-2 font-mono text-xs">
                      <div className="flex justify-between text-slate-400">
                        <span>賺到：</span>
                        <span className="text-emerald-400 font-bold">+${bStat.earned.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>花掉：</span>
                        <span className="text-rose-400 font-bold">-${bStat.spent.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-slate-800 text-sm">
                        <span className="font-bold text-slate-300 font-sans">小利潤：</span>
                        <span className={`font-black ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {isProfit ? '+' : '-'}${Math.abs(bStat.profit).toFixed(0)}
                        </span>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* 小提醒小板塊 */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-3xl">💡</div>
              <div className="space-y-1 text-center sm:text-left">
                <h5 className="font-bold text-white">理財小秘訣！</h5>
                <p className="text-xs text-slate-400">
                  記賬是一個很棒的習慣！每天花1分鐘記一筆，你就能清清楚楚地知道是「包裝買賣 📦」賺得比較多，還是租車、租房、租車位賺得比較多囉！
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ----------------- 標籤頁: 流水賬筆記 ----------------- */}
        {activeTab === 'ledger' && (
          <div className="space-y-6">
            
            {/* 極簡過濾面板 */}
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                
                {/* 搜尋 */}
                <div className="relative sm:col-span-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜尋備註或科目..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                {/* 賺錢/花錢過濾 */}
                <div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  >
                    <option value="all">所有收支方向</option>
                    <option value="incoming">只看賺錢 💰</option>
                    <option value="outgoing">只看花錢 💸</option>
                  </select>
                </div>

                {/* 生意過濾 */}
                <div>
                  <select
                    value={filterBusiness}
                    onChange={(e) => setFilterBusiness(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-2.5 text-sm text-yellow-400 font-bold focus:outline-none"
                  >
                    <option value="all">所有生意</option>
                    {businessesList.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* 幣別過濾 */}
                <div>
                  <select
                    value={filterCurrency}
                    onChange={(e) => setFilterCurrency(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  >
                    <option value="all">所有幣別</option>
                    <option value="USD">美金 (USD)</option>
                    <option value="HKD">港幣 (HKD)</option>
                    <option value="RMB">人民幣 (RMB)</option>
                  </select>
                </div>

              </div>

              {/* 匯出報表與清除按鈕 */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800">
                <span className="text-xs text-slate-400 font-medium">
                  共顯示 <strong className="text-white">{filteredTransactions.length}</strong> 筆記賬紀錄
                </span>
                <div className="flex gap-2">
                  {(searchQuery || filterType !== 'all' || filterBusiness !== 'all' || filterCurrency !== 'all') && (
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setFilterType('all')
                        setFilterBusiness('all')
                        setFilterCurrency('all')
                      }}
                      className="text-xs text-red-400 hover:text-red-300 font-bold px-3 py-2"
                    >
                      清除過濾條件
                    </button>
                  )}
                  <button
                    onClick={exportToCSV}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    下載 CSV 報表 📊
                  </button>
                </div>
              </div>
            </div>

            {/* 一個精美的發光容器裝著列表 */}
            <div className="bg-slate-850 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="divide-y divide-slate-800">
                
                {filteredTransactions.length === 0 ? (
                  <div className="py-16 text-center text-slate-500 space-y-2">
                    <p className="text-3xl">📝</p>
                    <p className="text-base font-bold">還沒有任何小日記唷</p>
                    <p className="text-xs">請點擊上方【記一筆】或是清除篩選條件吧！</p>
                  </div>
                ) : (
                  filteredTransactions.map(t => {
                    const isIncome = t.type === 'incoming'
                    const showConversion = t.currency !== 'USD'

                    return (
                      <div
                        key={t.id}
                        className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-800/30 transition-all"
                      >
                        {/* 左半部內容 */}
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-2xl ${isIncome ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                            <span className="text-lg">{isIncome ? '💰' : '💸'}</span>
                          </div>
                          <div>
                            <p className="text-sm font-black text-white">{t.description}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[11px] text-slate-400 font-medium font-sans">
                              <span className="bg-slate-800 px-2 py-0.5 rounded text-white font-bold">
                                {t.business}
                              </span>
                              <span className="bg-slate-800 px-2 py-0.5 rounded text-yellow-400 font-bold">
                                {t.label}
                              </span>
                              <span>•</span>
                              <span>日期: {t.date}</span>
                              <span>•</span>
                              <span>方式: {t.paymentMethod}</span>
                            </div>
                          </div>
                        </div>

                        {/* 右半部金額與按鈕 */}
                        <div className="flex items-center gap-4 self-end sm:self-center">
                          <div className="text-right font-mono">
                            <p className={`text-base font-black ${isIncome ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {isIncome ? '+' : '-'}{CURRENCY_SYMBOLS[t.currency]}{t.originalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                            {showConversion && (
                              <p className="text-[10px] text-slate-500">
                                折合: ${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
                              </p>
                            )}
                          </div>

                          <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-all">
                            <button
                              onClick={() => startEditTransaction(t)}
                              className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteTransaction(t.id)}
                              className="p-1.5 hover:bg-red-950/30 rounded-lg text-rose-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                      </div>
                    )
                  })
                )}

              </div>
            </div>

          </div>
        )}

        {/* ----------------- 標籤頁: 記賬小日曆 ----------------- */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-md font-black text-white flex items-center gap-2">
                  📅 記賬小日曆 (基準折算 USD)
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  點擊任何一天，就可以查看那天賺了多少錢、花了多少錢，還可以直接在那一天記賬唷！
                </p>
              </div>

              {/* 切換月份 */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevMonth}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-white font-mono w-32 text-center">
                  {monthYearLabel}
                </span>
                <button
                  onClick={nextMonth}
                  className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 日曆格網 */}
            <div className="bg-slate-850 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-7 bg-slate-850 border-b border-slate-800 text-center py-3 text-xs font-bold text-slate-400">
                <div>日</div>
                <div>一</div>
                <div>二</div>
                <div>三</div>
                <div>四</div>
                <div>五</div>
                <div>六</div>
              </div>

              <div className="grid grid-cols-7 bg-slate-900/10 divide-x divide-y divide-slate-800">
                {calendarDays.map((dayData, idx) => {
                  if (!dayData) {
                    return <div key={`empty-${idx}`} className="min-h-[100px] bg-slate-950/20"></div>
                  }

                  const { day, dateString, items, dayEarned, daySpent } = dayData
                  const isToday = new Date().toISOString().split('T')[0] === dateString

                  return (
                    <div
                      key={dateString}
                      onClick={() => handleDayClick(dayData)}
                      className={`min-h-[100px] p-2 hover:bg-slate-800/40 transition-all cursor-pointer flex flex-col justify-between ${
                        isToday ? 'bg-yellow-500/5 ring-1 ring-yellow-400/40' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                          isToday ? 'bg-yellow-400 text-slate-950 font-black' : 'text-slate-400'
                        }`}>
                          {day}日
                        </span>
                        {items.length > 0 && (
                          <span className="text-[10px] bg-slate-800 text-slate-300 font-bold px-1 py-0.2 rounded">
                            {items.length}筆
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 mt-3">
                        {dayEarned > 0 && (
                          <div className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1 rounded flex justify-between">
                            <span>賺:</span>
                            <span>+${Math.round(dayEarned)}</span>
                          </div>
                        )}
                        {daySpent > 0 && (
                          <div className="text-[9px] font-bold text-rose-400 bg-rose-500/10 px-1 rounded flex justify-between">
                            <span>花:</span>
                            <span>-${Math.round(daySpent)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 日曆彈窗詳情 */}
            {selectedDayDetail && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
                  <div className="bg-slate-800 px-5 py-4 flex items-center justify-between border-b border-slate-700">
                    <div>
                      <h3 className="text-md font-bold text-white flex items-center gap-1.5">
                        <span>📅</span> {selectedDayDetail.dayString} 收支明細
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="p-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-5 max-h-[300px] overflow-y-auto space-y-3">
                    {selectedDayDetail.items.length === 0 ? (
                      <div className="py-8 text-center text-slate-500">
                        <p className="text-sm">這一天空空如也，沒有記賬紀錄唷！</p>
                      </div>
                    ) : (
                      selectedDayDetail.items.map(t => {
                        const isIncome = t.type === 'incoming'
                        return (
                          <div key={t.id} className="p-3 bg-slate-850 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-bold text-white">{t.description}</p>
                              <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                                <span className="bg-slate-800 px-1.5 py-0.2 rounded text-white">{t.business}</span>
                                <span className="bg-slate-800 px-1.5 py-0.2 rounded text-yellow-400">{t.label}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 font-mono">
                              <p className={`text-sm font-bold ${isIncome ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {isIncome ? '+' : '-'}{CURRENCY_SYMBOLS[t.currency]}{t.originalAmount}
                              </p>
                              <button
                                onClick={() => {
                                  setSelectedDayDetail(null)
                                  startEditTransaction(t)
                                }}
                                className="p-1 hover:bg-slate-700 rounded text-slate-350"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>

                  <div className="bg-slate-850 px-5 py-4 flex justify-between items-center border-t border-slate-850">
                    <button
                      onClick={() => {
                        setSelectedDayDetail(null)
                        setShowCalendarAddForm(true)
                      }}
                      className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      在此日期記一筆 💰
                    </button>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      關閉視窗
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ----------------- 標籤頁: 生意分析報表 ----------------- */}
        {activeTab === 'report' && (
          <div className="space-y-6">
            
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 space-y-6 max-w-3xl mx-auto">
              <div className="text-center space-y-2 border-b border-slate-800 pb-5">
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center justify-center gap-1.5">
                  <span>📊</span> 簡明生意損益小報表 (Base USD)
                </h3>
                <p className="text-xs text-slate-400">
                  各生意的營業收入和支出的統計表，自動幫你折算成美金加總！
                </p>
              </div>

              {/* 報表清單 */}
              <div className="space-y-4">
                {businessesList.map(b => {
                  const bStat = businessStats[b] || { earned: 0, spent: 0, profit: 0 }
                  const isProfit = bStat.profit >= 0
                  return (
                    <div key={b} className="p-4 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-base font-black text-white">{b}</h4>
                        <p className="text-xs text-slate-500 mt-1">
                          本生意下的所有收支金額匯總。
                        </p>
                      </div>

                      <div className="flex gap-4 font-mono text-xs text-right self-end sm:self-center">
                        <div>
                          <p className="text-slate-400">總賺入</p>
                          <p className="text-emerald-400 font-bold">+${bStat.earned.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-slate-400">總花費</p>
                          <p className="text-rose-400 font-bold">-${bStat.spent.toFixed(2)}</p>
                        </div>
                        <div className="border-l border-slate-800 pl-4">
                          <p className="text-slate-300 font-sans font-bold">小淨利</p>
                          <p className={`font-black text-sm ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {isProfit ? '+' : '-'}${Math.abs(bStat.profit).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 匯出按鈕 */}
              <div className="pt-4 border-t border-slate-800 text-center">
                <button
                  onClick={exportToCSV}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-sm px-6 py-3 rounded-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 mx-auto shadow-lg shadow-emerald-950/20"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  匯出下載生意損益 CSV 報表 📊
                </button>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ----------------- MODAL: 調整匯率設定 ----------------- */}
      {showRateSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            
            <div className="bg-slate-800 px-5 py-4 flex items-center justify-between border-b border-slate-700">
              <h3 className="text-md font-bold text-white flex items-center gap-1.5">
                <RefreshCw className="w-4.5 h-4.5 text-yellow-400 animate-spin-slow" />
                調整匯率計算機 (基準: USD)
              </h3>
              <button
                onClick={() => setShowRateSettings(false)}
                className="p-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs">
              <p className="text-slate-400">
                小老闆在記賬的時候，如果輸入了港幣或人民幣，我們會用這個匯率幫你自動換算成美金存進你的小存錢罐唷！
              </p>

              <div className="space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-850 font-mono">
                
                {/* USD */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-350 font-sans font-bold">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1 text-white font-bold">
                    <input
                      type="text"
                      readOnly
                      value="1.0 USD"
                      className="w-24 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 text-center text-slate-500"
                    />
                  </div>
                </div>

                {/* HKD */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-355 font-sans font-bold">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1 text-white font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.HKD}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, HKD: Number(e.target.value) || EXCHANGE_RATES.HKD }))}
                      className="w-24 bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1 text-center text-yellow-400 focus:outline-none"
                    />
                    <span>港幣 (HKD)</span>
                  </div>
                </div>

                {/* RMB */}
                <div className="flex justify-between items-center">
                  <span className="text-slate-355 font-sans font-bold">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1 text-white font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.RMB}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, RMB: Number(e.target.value) || EXCHANGE_RATES.RMB }))}
                      className="w-24 bg-slate-900 border border-slate-700 rounded-xl px-2.5 py-1 text-center text-yellow-400 focus:outline-none"
                    />
                    <span>人民幣 (RMB)</span>
                  </div>
                </div>

              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setCustomRates(EXCHANGE_RATES)
                    toast.success('匯率已復原成標準匯率囉！')
                  }}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  還原標準值
                </button>
                <button
                  onClick={() => {
                    setShowRateSettings(false)
                    toast.success('匯率更新成功！儲存完畢！🌸')
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition-all"
                >
                  確認保存設定
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ----------------- 彈窗: 記一筆 / 編輯收支交易 ----------------- */}
      {(showAddForm || showCalendarAddForm) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            
            <div className="bg-slate-800 px-5 py-4 flex items-center justify-between border-b border-slate-700">
              <h3 className="text-md font-black text-white">
                {editingTransactionId ? '✏️ 修改這筆小紀錄' : '💰 記一筆收支紀錄'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false)
                  setShowCalendarAddForm(false)
                  resetForm()
                }}
                className="p-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-5 space-y-4 text-xs">
              
              {/* 交易日期 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">交易日期</label>
                <input
                  type="date"
                  required
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none"
                />
              </div>

              {/* 賺錢/花錢大按鈕 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">這是賺錢還是花錢呢？</label>
                <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all ${
                      formType === 'incoming' ? 'bg-emerald-500 text-white shadow-md font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    💰 存錢進來 (賺錢)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-2 rounded-lg text-xs font-bold transition-all ${
                      formType === 'outgoing' ? 'bg-rose-500 text-white shadow-md font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    💸 付錢出去 (花錢)
                  </button>
                </div>
              </div>

              {/* 四個生意的按鈕選擇 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">屬於哪一個小生意？</label>
                <div className="grid grid-cols-2 gap-2">
                  {businessesList.map(b => {
                    const isSelected = formBusiness === b
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormBusiness(b)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-yellow-400 border-yellow-400 text-slate-950 shadow-md font-black hover:scale-[1.01]'
                            : 'bg-slate-950 border-slate-800 text-slate-350 hover:border-slate-700'
                        }`}
                      >
                        {b}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 幣別與金額輸入 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>填入金額與幣別</span>
                  <span className="text-[10px] text-yellow-400 font-mono font-bold bg-yellow-500/10 px-2 py-0.5 rounded">
                    基準貨幣: USD
                  </span>
                </label>

                {/* 幣別藥丸按鈕 */}
                <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 mb-2">
                  {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                    const isActive = formCurrency === curr
                    return (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => setFormCurrency(curr)}
                        className={`py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1 ${
                          isActive
                            ? 'bg-yellow-400 text-slate-950 shadow-md scale-[1.02] font-black'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        <span>{curr}</span>
                        <span className="text-[10px] opacity-80">({CURRENCY_SYMBOLS[curr]})</span>
                      </button>
                    )
                  })}
                </div>

                {/* 輸入金額 */}
                <div className="relative rounded-xl shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-slate-400 font-mono text-sm font-bold">
                      {CURRENCY_SYMBOLS[formCurrency]}
                    </span>
                  </div>
                  <input
                    type="number"
                    required
                    min="0.01"
                    step="0.01"
                    placeholder="0.00"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-4 py-2 text-white focus:outline-none focus:border-yellow-400 font-mono font-bold text-base"
                  />
                </div>

                {/* 神奇魔術自動折算卡片 */}
                {liveConversions && (
                  <div className="mt-2.5 space-y-1">
                    <p className="text-[10px] text-slate-400 font-bold">🪄 點擊下方小卡片，金額會神奇自動換算喔：</p>
                    <div className="grid grid-cols-3 gap-2">
                      {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                        const val = liveConversions[curr]
                        const isCurrent = curr === formCurrency
                        return (
                          <button
                            key={curr}
                            type="button"
                            disabled={isCurrent}
                            onClick={() => {
                              setFormCurrency(curr)
                              setFormAmount(val.toFixed(2))
                              toast.info(`神奇魔法！金額已換算為 ${curr} ${val.toFixed(2)}`);
                            }}
                            className={`border rounded-xl p-2 text-left transition-all font-mono group ${
                              isCurrent
                                ? 'bg-yellow-500/5 border-yellow-500/30 cursor-default'
                                : 'bg-slate-950 hover:bg-slate-800 border-slate-800 hover:border-yellow-500/50 cursor-pointer'
                            }`}
                          >
                            <div className={`text-[9px] font-sans ${isCurrent ? 'text-yellow-400 font-bold' : 'text-slate-500 group-hover:text-yellow-400'}`}>
                              {isCurrent ? '目前' : '折合'} {curr}
                            </div>
                            <div className={`text-xs font-black truncate ${isCurrent ? 'text-white' : 'text-slate-350'}`}>
                              {CURRENCY_SYMBOLS[curr]}
                              {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

              </div>

              {/* 收支科目別 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">這是屬於什麼細項呢？</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as CategoryLabelType)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  {formType === 'incoming' ? (
                    <>
                      <option value="收租金 💰">收租金 💰</option>
                      <option value="商品銷售 📦">商品銷售 📦</option>
                      <option value="其他收入 💵">其他收入 💵</option>
                    </>
                  ) : (
                    <>
                      <option value="日常維修 🛠️">日常維修 🛠️</option>
                      <option value="水電開銷 ⚡">水電開銷 ⚡</option>
                      <option value="進貨成本 📦">進貨成本 📦</option>
                      <option value="其他支出 💸">其他支出 💸</option>
                    </>
                  )}
                </select>
              </div>

              {/* 描述/備註 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">寫下你的小備註 (例: 特斯拉週租租金)</label>
                <input
                  type="text"
                  required
                  placeholder="寫一點好記的小備註吧..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>

              {/* 支付方式 */}
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">交易付款方式</label>
                <select
                  value={formPaymentMethod}
                  onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="銀行轉帳">銀行轉帳</option>
                  <option value="現金">現金</option>
                  <option value="信用卡">信用卡</option>
                  <option value="微信/支付寶">微信/支付寶</option>
                </select>
              </div>

              <div className="pt-3 flex justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setShowCalendarAddForm(false)
                    resetForm()
                  }}
                  className="bg-slate-800 text-slate-400 hover:bg-slate-750 px-4 py-2 rounded-xl text-xs font-bold"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 px-5 py-2 rounded-xl text-xs font-black"
                >
                  確認保存紀錄 ✨
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default BookkeepingPage
