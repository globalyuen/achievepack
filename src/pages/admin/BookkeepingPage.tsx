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
// 類型與資料結構 (適合10歲老闆的簡易版)
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

// 生意項目的代表背景色 (溫柔日系奶油粉蠟色)
const BUSINESS_Pill_STYLES: Record<BusinessType, { bg: string; text: string; border: string }> = {
  '包裝買賣 📦': { bg: 'bg-[#E3F2FD]', text: 'text-[#1E88E5]', border: 'border-[#BBDEFB]' },
  '車位出租 🅿️': { bg: 'bg-[#F3E5F5]', text: 'text-[#8E24AA]', border: 'border-[#E1BEE7]' },
  '汽車出租 🚗': { bg: 'bg-[#FFF3E0]', text: 'text-[#F57C00]', border: 'border-[#FFE0B2]' },
  '房屋出租 🏠': { bg: 'bg-[#E8F5E9]', text: 'text-[#388E3C]', border: 'border-[#C8E6C9]' }
}

// ==========================================
// 6月份與5月份高水準模擬數據 (10歲老闆的生意)
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
    description: '台北大安區出租房屋的月度租金',
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
    description: '中環商業中心車位收租金 (港幣入帳)',
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
    description: '出租特斯拉 Model 3 一星期的租金',
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
    description: '賣出一批環保 PBS 可降解咖啡包裝袋',
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
    description: '向源頭工廠採購可降解 PBS 顆粒原料',
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
    description: '保養出租小汽車和更換新的輪胎',
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
    description: '繳納出租房屋的本月水電瓦斯費用',
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
    description: '出租房屋5月份租金順利收到啦！',
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
    description: '車位順利收租金！',
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
    description: '出租大貨車載貨一週的租金',
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
    description: '賣出牛皮紙立體袋給西雅圖客戶',
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
    description: '補充環保咖啡密封袋的庫存商品',
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
    description: '請工人叔叔修理房屋水龍頭和燈泡',
    paymentMethod: '現金'
  }
]

const BookkeepingPage: React.FC = () => {
  // 分頁切換：overview (存錢罐), ledger (流水帳本), calendar (收支日曆), report (生意分析)
  const [activeTab, setActiveTab] = useState<'overview' | 'ledger' | 'calendar' | 'report'>('overview')

  // 核心數據 state，綁定至本地儲存 LocalStorage
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kid_bookkeeping_transactions')
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS
  })

  // 自訂匯率 state
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

  // 實時跨幣別換算對照組 (讓10歲小朋友看到神奇的魔術換算)
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
      toast.error('請寫下簡單的小筆記，才不會忘記這筆錢是做什麼的唷！')
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
    if (window.confirm('確定要擦掉這一筆記賬小紀錄嗎？擦掉就找不回來囉！')) {
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
  // 收支日曆格網繪製邏輯
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
    <div className="min-h-screen bg-gradient-to-br from-[#FCF9F2] via-[#FAF6EE] to-[#F3EFE3] text-[#4A3B32] flex flex-col font-sans selection:bg-[#F5C77E] selection:text-slate-900">
      
      {/* ----------------- 頂部奶油溫馨 header ----------------- */}
      <header className="bg-[#FCFAF5]/90 backdrop-blur-md border-b-2 border-[#EFE9DB] sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* 標題與返回按鈕 */}
            <div className="flex items-center gap-3">
              <Link
                to="/ctrl-x9k7m"
                className="p-2.5 text-[#8E7E73] hover:text-[#4A3B32] hover:bg-[#F3ECE0] rounded-2xl transition-all"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-[#F5C77E] border-2 border-[#EADFCD] rounded-3xl flex items-center justify-center shadow-md shadow-[#E2D8C3]/40 text-2xl font-bold animate-bounce-slow">
                  🧒
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black text-[#2E2520] tracking-wide flex items-center gap-2">
                    小老闆理財記賬本
                    <span className="text-xs bg-[#FAF1DF] text-[#8C6D3B] font-black px-2.5 py-1 rounded-full border-2 border-[#EADFCD]">
                      超簡單版
                    </span>
                  </h1>
                  <p className="text-xs text-[#8E7E73] font-bold">
                    管錢超容易！學習記賬第一步 📦 包裝買賣 • 🚗 汽車 • 🅿️ 車位 • 🏠 房屋
                  </p>
                </div>
              </div>
            </div>

            {/* 快速按鈕區 */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <button
                onClick={() => setShowRateSettings(true)}
                className="bg-[#FCFAF5] hover:bg-[#F5EFE0] text-[#8C6D3B] text-xs font-black px-4 py-3 rounded-2xl border-2 border-[#EADFCD] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
                調整匯率
              </button>
              <button
                onClick={() => {
                  resetForm()
                  setShowAddForm(true)
                }}
                className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] text-sm font-black px-6 py-3 rounded-2xl transition-all shadow-md hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 border-2 border-[#DE9B3E]"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                記一筆收支 💰
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ----------------- 全局統計面板 (超可愛大卡片) ----------------- */}
      <section className="py-6 bg-[#FCFAF5]/30 border-b border-[#EFE9DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* 匯率小工具 */}
          <div className="mb-6 flex flex-wrap gap-3 text-xs bg-[#FCFAF5] px-4 py-3 rounded-2xl border-2 border-[#EFE9DB] text-[#8E7E73] font-bold shadow-inner">
            <span className="text-[#8C6D3B] font-black">📈 自動換算器匯率基底：</span>
            <span>1 美金 (USD) = <strong>1.0 美金</strong></span>
            <span>•</span>
            <span>1 美金 (USD) = <strong>{customRates.HKD} 港幣 (HKD)</strong></span>
            <span>•</span>
            <span>1 美金 (USD) = <strong>{customRates.RMB} 人民幣 (RMB)</strong></span>
          </div>

          {/* 三個巨大的彩色存錢罐卡片 (奶油溫馨色調) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* 我的利潤 */}
            <div className="bg-white border-2 border-[#C8E6C9] rounded-3xl p-6 shadow-md shadow-[#E2D8C3]/20 hover:border-[#81C784] transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-xs font-black text-[#388E3C] uppercase tracking-wider">🐷 我的存錢罐剩下 (利潤)</p>
                  <span className="text-2xl">💰</span>
                </div>
                <p className="text-3xl font-black text-[#2E2520] mt-3 font-mono">
                  ${stats.pocketMoney.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#388E3C] font-bold ml-1.5">USD</span>
                </p>
              </div>
              <p className="text-[11px] text-[#8E7E73] font-bold mt-3 bg-[#E8F5E9] px-2.5 py-1.5 rounded-xl border border-[#C8E6C9]">
                好棒！這是總共賺到、扣掉花出去後，剩下可以支配的錢！
              </p>
            </div>

            {/* 總共賺到 */}
            <div className="bg-white border-2 border-[#FFE0B2] rounded-3xl p-6 shadow-md shadow-[#E2D8C3]/20 hover:border-[#FFB74D] transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-xs font-black text-[#F57C00] uppercase tracking-wider">🎉 我總共賺進來 (收入)</p>
                  <span className="text-2xl">📈</span>
                </div>
                <p className="text-3xl font-black text-[#F57C00] mt-3 font-mono">
                  +${stats.earned.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#F57C00] font-bold ml-1.5">USD</span>
                </p>
              </div>
              <p className="text-[11px] text-[#8E7E73] font-bold mt-3 bg-[#FFF3E0] px-2.5 py-1.5 rounded-xl border border-[#FFE0B2]">
                各種生意陸陸續續收進來的零用錢都在這裡累積！
              </p>
            </div>

            {/* 總共花掉 */}
            <div className="bg-white border-2 border-[#FFE0E0] rounded-3xl p-6 shadow-md shadow-[#E2D8C3]/20 hover:border-[#FFB2B2] transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <p className="text-xs font-black text-[#CE8078] uppercase tracking-wider">💸 我總共花出去 (支出)</p>
                  <span className="text-2xl">📉</span>
                </div>
                <p className="text-3xl font-black text-[#CE8078] mt-3 font-mono">
                  -${stats.spent.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#CE8078] font-bold ml-1.5">USD</span>
                </p>
              </div>
              <p className="text-[11px] text-[#8E7E73] font-bold mt-3 bg-[#FFF0F0] px-2.5 py-1.5 rounded-xl border border-[#FFE0E0]">
                買東西的進貨成本、修理和水電費的日常花銷。
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 主要導覽標籤 ----------------- */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full">
        
        {/* 奶油風標籤卡片列 */}
        <div className="flex border-b-2 border-[#EFE9DB] mb-6 overflow-x-auto gap-2 scrollbar-none">
          {[
            { id: 'overview', label: '🐷 生意小撲滿', icon: Sparkles },
            { id: 'ledger', label: '📝 流水賬日記', icon: Coins },
            { id: 'calendar', label: '📅 記賬小日曆', icon: Calendar },
            { id: 'report', label: '📊 生意分折表', icon: FileSpreadsheet }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-black border-b-4 transition-all whitespace-nowrap active:scale-95 ${
                activeTab === tab.id
                  ? 'border-[#F5B859] text-[#2E2520] bg-[#F5B859]/10 rounded-t-xl'
                  : 'border-transparent text-[#8E7E73] hover:text-[#4A3B32] hover:bg-[#F3ECE0]/50'
              }`}
            >
              <tab.icon className="w-4 h-4 stroke-[2.5]" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ----------------- 標籤頁: 生意小撲滿 ----------------- */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-black text-[#4A3B32] uppercase tracking-wider">📊 四大生意小賬戶表現</h3>
              <p className="text-xs text-[#8E7E73] font-bold">點擊右上角的「記一筆」就能隨時記賬唷！</p>
            </div>

            {/* 4個小扑滿 (奶油風格) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessesList.map(b => {
                const bStat = businessStats[b] || { earned: 0, spent: 0, profit: 0 }
                const isProfit = bStat.profit >= 0
                const colors = BUSINESS_Pill_STYLES[b]

                return (
                  <div
                    key={b}
                    className="bg-white border-2 border-[#EFE9DB] rounded-3xl p-5 hover:border-[#F5B859]/60 shadow-sm transition-all flex flex-col justify-between hover:scale-[1.01]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-black px-3 py-1 rounded-xl border ${colors.bg} ${colors.text} ${colors.border}`}>
                          小生意項目
                        </span>
                        <span className="text-xl">💰</span>
                      </div>
                      <h4 className="text-lg font-black text-[#2E2520] tracking-wide">{b}</h4>
                    </div>

                    <div className="mt-6 space-y-2.5 font-mono text-xs border-t border-[#FAF6EE] pt-4">
                      <div className="flex justify-between text-[#8E7E73] font-bold">
                        <span>賺到收支：</span>
                        <span className="text-[#388E3C] font-black">+${bStat.earned.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between text-[#8E7E73] font-bold">
                        <span>花掉成本：</span>
                        <span className="text-[#CE8078] font-black">-${bStat.spent.toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between pt-2.5 border-t-2 border-[#EFE9DB] text-sm">
                        <span className="font-bold text-[#4A3B32] font-sans">我的利潤：</span>
                        <span className={`font-black ${isProfit ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                          {isProfit ? '+' : '-'}${Math.abs(bStat.profit).toFixed(0)}
                        </span>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* 溫馨理財小卡片 */}
            <div className="bg-[#FAF6EE] border-2 border-[#EFE9DB] rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="text-4xl animate-bounce-slow">💡</div>
              <div className="space-y-1 text-center sm:text-left">
                <h5 className="font-black text-[#2E2520]">給小老闆的理財悄悄話</h5>
                <p className="text-xs text-[#8E7E73] font-bold leading-relaxed">
                  記賬不僅僅是記錄數字，更是建立良好的理財觀念！持之以恆，你就能看出哪一個生意（比如「房屋出租 🏠」或是「包裝買賣 📦」）是你的印鈔機喔！
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ----------------- 標籤頁: 流水賬日記 ----------------- */}
        {activeTab === 'ledger' && (
          <div className="space-y-6">
            
            {/* 奶油溫馨風過濾面板 */}
            <div className="bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-3xl p-5 space-y-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                
                {/* 搜尋框 */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8E7E73] absolute left-3.5 top-3.5 stroke-[2.5]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜尋備註日記或科目..."
                    className="w-full bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-2xl pl-10 pr-4 py-2.5 text-sm text-[#4A3B32] placeholder-[#A8988D] focus:outline-none transition-all font-bold shadow-inner"
                  />
                </div>

                {/* 賺/花流向 */}
                <div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as any)}
                    className="w-full bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-2xl px-4 py-2.5 text-sm text-[#4A3B32] focus:outline-none transition-all font-bold shadow-sm"
                  >
                    <option value="all">所有的錢方向</option>
                    <option value="incoming">只看賺到的錢 💰</option>
                    <option value="outgoing">只看花出去的錢 💸</option>
                  </select>
                </div>

                {/* 生意項目 */}
                <div>
                  <select
                    value={filterBusiness}
                    onChange={(e) => setFilterBusiness(e.target.value)}
                    className="w-full bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-2xl px-4 py-2.5 text-sm text-[#8C6D3B] focus:outline-none transition-all font-black shadow-sm"
                  >
                    <option value="all">所有生意項目</option>
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
                    className="w-full bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-2xl px-4 py-2.5 text-sm text-[#4A3B32] focus:outline-none transition-all font-bold shadow-sm"
                  >
                    <option value="all">所有交易幣別</option>
                    <option value="USD">美金 (USD)</option>
                    <option value="HKD">港幣 (HKD)</option>
                    <option value="RMB">人民幣 (RMB)</option>
                  </select>
                </div>

              </div>

              {/* 報表導出與條件重置 */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t-2 border-[#EFE9DB]">
                <span className="text-xs text-[#8E7E73] font-bold">
                  一共顯示了 <strong className="text-[#2E2520]">{filteredTransactions.length}</strong> 筆記賬紀錄
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
                      className="text-xs text-[#CE8078] hover:text-[#B75850] font-black px-3 py-2 active:scale-95"
                    >
                      重置所有條件
                    </button>
                  )}
                  <button
                    onClick={exportToCSV}
                    className="bg-[#A3B899] hover:bg-[#8EAC90] text-[#2E2520] text-xs font-black px-4 py-2.5 rounded-xl border-2 border-[#819976] flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    下載 CSV 報表 📊
                  </button>
                </div>
              </div>
            </div>

            {/* 流水賬清單 */}
            <div className="bg-white border-2 border-[#EFE9DB] rounded-3xl overflow-hidden shadow-sm">
              <div className="divide-y-2 divide-[#FAF6EE]">
                
                {filteredTransactions.length === 0 ? (
                  <div className="py-20 text-center text-[#8E7E73] space-y-3">
                    <p className="text-4xl animate-pulse">📝</p>
                    <p className="text-base font-black text-[#4A3B32]">小本子裡沒有紀錄唷</p>
                    <p className="text-xs font-bold">點選上面「記一筆」或是「清除過濾條件」來看看吧！</p>
                  </div>
                ) : (
                  filteredTransactions.map(t => {
                    const isIncome = t.type === 'incoming'
                    const showConversion = t.currency !== 'USD'
                    const colors = BUSINESS_Pill_STYLES[t.business]

                    return (
                      <div
                        key={t.id}
                        className="px-5 py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#FAF6EE]/45 transition-all"
                      >
                        {/* 左半部內容 */}
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${isIncome ? 'bg-[#E8F5E9] border-[#C8E6C9] text-[#388E3C]' : 'bg-[#FFF0F0] border-[#FFE0E0] text-[#CE8078]'}`}>
                            <span className="text-lg">{isIncome ? '💰' : '💸'}</span>
                          </div>
                          <div>
                            <p className="text-sm sm:text-base font-black text-[#2E2520]">{t.description}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] text-[#8E7E73] font-bold">
                              <span className={`px-2 py-0.5 rounded text-[10px] border ${colors.bg} ${colors.text} ${colors.border}`}>
                                {t.business}
                              </span>
                              <span className="bg-[#FAF6EE] border border-[#EADFCD] px-2 py-0.5 rounded text-[#8C6D3B]">
                                {t.label}
                              </span>
                              <span>•</span>
                              <span>日期: {t.date}</span>
                              <span>•</span>
                              <span>管道: {t.paymentMethod}</span>
                            </div>
                          </div>
                        </div>

                        {/* 右半部金額與按鈕 */}
                        <div className="flex items-center gap-4 self-end sm:self-center">
                          <div className="text-right font-mono">
                            <p className={`text-base sm:text-lg font-black ${isIncome ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                              {isIncome ? '+' : '-'}{CURRENCY_SYMBOLS[t.currency]}{t.originalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                            {showConversion && (
                              <p className="text-[10px] text-[#8E7E73] font-bold">
                                折合: ${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
                              </p>
                            )}
                          </div>

                          {/* 編輯/刪除按鈕 */}
                          <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-all">
                            <button
                              onClick={() => startEditTransaction(t)}
                              className="p-1.5 bg-[#FAF6EE] hover:bg-[#F3ECE0] rounded-xl text-[#8E7E73] border border-[#EADFCD] transition-all"
                            >
                              <Edit className="w-4 h-4 stroke-[2.5]" />
                            </button>
                            <button
                              onClick={() => handleDeleteTransaction(t.id)}
                              className="p-1.5 bg-[#FFF0F0] hover:bg-[#FFE0E0] rounded-xl text-[#CE8078] border border-[#FFE0E0] transition-all"
                            >
                              <Trash2 className="w-4 h-4 stroke-[2.5]" />
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
            
            <div className="bg-white border-2 border-[#EFE9DB] rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
              <div>
                <h4 className="text-md sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                  📅 收支大表格日曆 (統一 USD 計價)
                </h4>
                <p className="text-xs text-[#8E7E73] font-bold mt-1">
                  點擊格網中任何一天，就能看到那天賺了多少或花了多少，也可以直接對那天快捷記賬唷！
                </p>
              </div>

              {/* 切換月份 */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevMonth}
                  className="p-2 bg-[#FAF6EE] hover:bg-[#F3ECE0] border border-[#EADFCD] rounded-xl text-[#4A3B32] transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>
                <span className="text-sm font-black text-[#2E2520] font-mono w-36 text-center select-none bg-[#FCFAF5] py-1.5 rounded-xl border border-[#EFE9DB]">
                  {monthYearLabel}
                </span>
                <button
                  onClick={nextMonth}
                  className="p-2 bg-[#FAF6EE] hover:bg-[#F3ECE0] border border-[#EADFCD] rounded-xl text-[#4A3B32] transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* 日曆表格 */}
            <div className="bg-white border-2 border-[#EFE9DB] rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-7 bg-[#FCFAF5] border-b-2 border-[#EFE9DB] text-center py-3 text-xs font-black text-[#8E7E73]">
                <div>日</div>
                <div>一</div>
                <div>二</div>
                <div>三</div>
                <div>四</div>
                <div>五</div>
                <div>六</div>
              </div>

              <div className="grid grid-cols-7 bg-[#FAF6EE]/20 divide-x-2 divide-y-2 divide-[#FAF6EE]">
                {calendarDays.map((dayData, idx) => {
                  if (!dayData) {
                    return <div key={`empty-${idx}`} className="min-h-[105px] bg-[#FAF6EE]/10"></div>
                  }

                  const { day, dateString, items, dayEarned, daySpent } = dayData
                  const isToday = new Date().toISOString().split('T')[0] === dateString

                  return (
                    <div
                      key={dateString}
                      onClick={() => handleDayClick(dayData)}
                      className={`min-h-[105px] p-2 hover:bg-[#FAF6EE]/50 transition-all cursor-pointer flex flex-col justify-between group ${
                        isToday ? 'bg-[#F5B859]/5 ring-2 ring-[#F5B859] rounded-xl z-10' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-black font-mono px-2 py-0.5 rounded-lg border ${
                          isToday ? 'bg-[#F5B859] border-[#DE9B3E] text-[#2E2520]' : 'text-[#8E7E73] bg-[#FCFAF5] border-[#EFE9DB]'
                        }`}>
                          {day}日
                        </span>
                        {items.length > 0 && (
                          <span className="text-[10px] bg-[#FAF6EE] text-[#8C6D3B] border border-[#EADFCD] font-bold px-1.5 py-0.2 rounded-md">
                            {items.length}筆
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 mt-3">
                        {dayEarned > 0 && (
                          <div className="text-[9px] font-black text-[#388E3C] bg-[#E8F5E9] px-1.5 py-0.5 rounded-lg border border-[#C8E6C9] flex justify-between">
                            <span>賺:</span>
                            <span>+${Math.round(dayEarned)}</span>
                          </div>
                        )}
                        {daySpent > 0 && (
                          <div className="text-[9px] font-black text-[#CE8078] bg-[#FFF0F0] px-1.5 py-0.5 rounded-lg border border-[#FFE0E0] flex justify-between">
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

            {/* 日曆單日詳細彈窗 */}
            {selectedDayDetail && (
              <div className="fixed inset-0 bg-[#4A3B32]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
                  <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD]">
                    <div>
                      <h3 className="text-md sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                        <span>📅</span> {selectedDayDetail.dayString} 記賬大詳情
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="p-1 bg-white hover:bg-[#F3ECE0] rounded-xl border border-[#EADFCD] text-[#8E7E73] transition-all"
                    >
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                  <div className="p-5 max-h-[300px] overflow-y-auto space-y-3 bg-white">
                    {selectedDayDetail.items.length === 0 ? (
                      <div className="py-12 text-center text-[#8E7E73] font-bold">
                        <p className="text-sm">這一天還空蕩蕩的喔，沒有任何小筆記。</p>
                      </div>
                    ) : (
                      selectedDayDetail.items.map(t => {
                        const isIncome = t.type === 'incoming'
                        const colors = BUSINESS_Pill_STYLES[t.business]

                        return (
                          <div key={t.id} className="p-3.5 bg-[#FCFAF5] rounded-2xl border-2 border-[#EFE9DB] flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm font-black text-[#2E2520]">{t.description}</p>
                              <div className="flex items-center gap-2 text-[10px] text-[#8E7E73] font-bold mt-1.5">
                                <span className={`px-1.5 py-0.2 rounded border ${colors.bg} ${colors.text} ${colors.border}`}>{t.business}</span>
                                <span className="bg-[#FAF6EE] border border-[#EADFCD] px-1.5 py-0.2 rounded text-[#8C6D3B]">{t.label}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2.5 font-mono">
                              <p className={`text-sm sm:text-base font-black ${isIncome ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                                {isIncome ? '+' : '-'}{CURRENCY_SYMBOLS[t.currency]}{t.originalAmount}
                              </p>
                              <button
                                onClick={() => {
                                  setSelectedDayDetail(null)
                                  startEditTransaction(t)
                                }}
                                className="p-1.5 bg-white hover:bg-[#F3ECE0] border border-[#EADFCD] rounded-lg text-[#8E7E73]"
                              >
                                <Edit className="w-3.5 h-3.5 stroke-[2.5]" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>

                  <div className="bg-[#FCFAF5] px-5 py-4 flex justify-between items-center border-t-2 border-[#EFE9DB]">
                    <button
                      onClick={() => {
                        setSelectedDayDetail(null)
                        setShowCalendarAddForm(true)
                      }}
                      className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] text-xs font-black px-4.5 py-2.5 rounded-xl flex items-center gap-1 border border-[#DE9B3E] active:scale-95 transition-all shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      就在今天記一筆 💰
                    </button>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="text-xs text-[#8E7E73] hover:text-[#4A3B32] font-bold"
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
            
            <div className="bg-white border-2 border-[#EFE9DB] rounded-3xl p-6 space-y-6 max-w-3xl mx-auto shadow-sm">
              <div className="text-center space-y-2 border-b-2 border-[#FAF6EE] pb-5">
                <h3 className="text-lg sm:text-xl font-black text-[#2E2520] flex items-center justify-center gap-1.5">
                  <span>📊</span> 簡明生意損益小報表 (美金基準)
                </h3>
                <p className="text-xs text-[#8E7E73] font-bold">
                  各個小生意的賺錢和花錢情況匯總表，全部自動折算成美金統計！
                </p>
              </div>

              {/* 報表內容 */}
              <div className="space-y-4">
                {businessesList.map(b => {
                  const bStat = businessStats[b] || { earned: 0, spent: 0, profit: 0 }
                  const isProfit = bStat.profit >= 0
                  return (
                    <div key={b} className="p-4.5 bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#2E2520]">{b}</h4>
                        <p className="text-xs text-[#8E7E73] font-bold mt-1">
                          本項生意的全部收支紀錄加總。
                        </p>
                      </div>

                      <div className="flex gap-4 font-mono text-xs text-right self-end sm:self-center">
                        <div>
                          <p className="text-[#8E7E73] font-bold">總收入</p>
                          <p className="text-[#388E3C] font-black text-sm">+${bStat.earned.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-[#8E7E73] font-bold">總支出</p>
                          <p className="text-[#CE8078] font-black text-sm">-${bStat.spent.toFixed(2)}</p>
                        </div>
                        <div className="border-l-2 border-[#EFE9DB] pl-4">
                          <p className="text-[#4A3B32] font-sans font-black">小利潤</p>
                          <p className={`font-black text-base ${isProfit ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                            {isProfit ? '+' : '-'}${Math.abs(bStat.profit).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 導出報表 */}
              <div className="pt-4 border-t-2 border-[#FAF6EE] text-center">
                <button
                  onClick={exportToCSV}
                  className="bg-[#A3B899] hover:bg-[#8EAC90] text-[#2E2520] font-black text-sm px-6 py-3.5 rounded-2xl border-2 border-[#819976] transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5 mx-auto shadow-md active:scale-95"
                >
                  <FileSpreadsheet className="w-4 h-4 stroke-[2.5]" />
                  下載生意小報表 CSV 📊
                </button>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ----------------- MODAL: 調整匯率設定 ----------------- */}
      {showRateSettings && (
        <div className="fixed inset-0 bg-[#4A3B32]/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            
            <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD]">
              <h3 className="text-sm sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                <RefreshCw className="w-4.5 h-4.5 text-[#8C6D3B] stroke-[2.5]" />
                調整小老闆匯率計算機
              </h3>
              <button
                onClick={() => setShowRateSettings(false)}
                className="p-1 bg-white hover:bg-[#F3ECE0] rounded-xl border border-[#EADFCD] text-[#8E7E73]"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs bg-white">
              <p className="text-[#8E7E73] font-bold leading-relaxed">
                在記賬時，如果小老闆輸入了港幣 (HKD) 或人民幣 (RMB)，系統會自動以這個匯率基準，幫你變魔法換算成美金 (USD) 存進你的大撲滿喔！
              </p>

              <div className="space-y-3.5 bg-[#FCFAF5] p-4 rounded-2xl border-2 border-[#EFE9DB] font-mono font-bold text-[#4A3B32]">
                
                {/* USD */}
                <div className="flex justify-between items-center">
                  <span className="text-[#8E7E73] font-sans">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1 text-slate-800 font-bold">
                    <input
                      type="text"
                      readOnly
                      value="1.0 USD"
                      className="w-24 bg-white border border-[#EFE9DB] rounded-xl px-2.5 py-1.5 text-center text-slate-400 font-bold"
                    />
                  </div>
                </div>

                {/* HKD */}
                <div className="flex justify-between items-center">
                  <span className="text-[#8E7E73] font-sans">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.HKD}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, HKD: Number(e.target.value) || EXCHANGE_RATES.HKD }))}
                      className="w-24 bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-xl px-2.5 py-1.5 text-center text-[#8C6D3B] focus:outline-none"
                    />
                    <span>港幣 (HKD)</span>
                  </div>
                </div>

                {/* RMB */}
                <div className="flex justify-between items-center">
                  <span className="text-[#8E7E73] font-sans">1 美金 (USD) =</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.RMB}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, RMB: Number(e.target.value) || EXCHANGE_RATES.RMB }))}
                      className="w-24 bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-xl px-2.5 py-1.5 text-center text-[#8C6D3B] focus:outline-none"
                    />
                    <span>人民幣 (RMB)</span>
                  </div>
                </div>

              </div>

              <div className="flex justify-end gap-3 pt-2.5">
                <button
                  onClick={() => {
                    setCustomRates(EXCHANGE_RATES)
                    toast.success('匯率已復原成標準基準囉！')
                  }}
                  className="text-xs text-[#8E7E73] hover:text-[#4A3B32] font-bold"
                >
                  復原標準值
                </button>
                <button
                  onClick={() => {
                    setShowRateSettings(false)
                    toast.success('匯率更新成功！儲存完畢！🌸')
                  }}
                  className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] font-black px-4.5 py-2.5 rounded-xl text-xs active:scale-95 transition-all border border-[#DE9B3E]"
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
        <div className="fixed inset-0 bg-[#4A3B32]/45 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            
            <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD]">
              <h3 className="text-md sm:text-base font-black text-[#2E2520]">
                {editingTransactionId ? '✏️ 修改這筆小日記' : '💰 記一筆收支日記'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false)
                  setShowCalendarAddForm(false)
                  resetForm()
                }}
                className="p-1 bg-white hover:bg-[#F3ECE0] border border-[#EADFCD] rounded-xl text-[#8E7E73]"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-5 space-y-4 text-xs bg-white">
              
              {/* 日期 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">交易日期</label>
                <input
                  type="date"
                  required
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold"
                />
              </div>

              {/* 賺錢/花錢切換 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">這是賺到錢還是花出錢呢？</label>
                <div className="grid grid-cols-2 gap-2 bg-[#FCFAF5] p-1.5 rounded-2xl border-2 border-[#EFE9DB]">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all active:scale-95 ${
                      formType === 'incoming' ? 'bg-[#A3B899] border border-[#819976] text-[#2E2520] shadow-sm' : 'text-[#8E7E73] hover:text-[#4A3B32]'
                    }`}
                  >
                    💰 存錢進來 (賺錢啦)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all active:scale-95 ${
                      formType === 'outgoing' ? 'bg-[#DE9B93] border border-[#CE8078] text-[#2E2520] shadow-sm' : 'text-[#8E7E73] hover:text-[#4A3B32]'
                    }`}
                  >
                    💸 付錢出去 (花錢囉)
                  </button>
                </div>
              </div>

              {/* 屬於哪項生意 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">是屬於哪一個小生意的？</label>
                <div className="grid grid-cols-2 gap-2">
                  {businessesList.map(b => {
                    const isSelected = formBusiness === b
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormBusiness(b)}
                        className={`py-2.5 rounded-xl text-xs font-black border-2 transition-all active:scale-95 ${
                          isSelected
                            ? 'bg-[#F5B859] border-[#DE9B3E] text-[#2E2520] shadow-sm'
                            : 'bg-white border-[#EFE9DB] text-[#8E7E73] hover:border-[#EADFCD]'
                        }`}
                      >
                        {b}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 幣別與金額 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5 flex items-center justify-between">
                  <span>填入金額與使用的幣別</span>
                  <span className="text-[10px] text-[#8C6D3B] font-mono font-bold bg-[#FAF1DF] border border-[#EADFCD] px-2 py-0.5 rounded-lg">
                    大撲滿基底: USD
                  </span>
                </label>

                {/* 幣別藥丸 */}
                <div className="grid grid-cols-3 gap-1 bg-[#FCFAF5] p-1.5 rounded-2xl border-2 border-[#EFE9DB] mb-2.5">
                  {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                    const isActive = formCurrency === curr
                    return (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => setFormCurrency(curr)}
                        className={`py-2 rounded-xl text-xs font-black font-mono transition-all flex items-center justify-center gap-1 active:scale-95 ${
                          isActive
                            ? 'bg-[#F5B859] text-[#2E2520] shadow-sm scale-[1.02]'
                            : 'text-[#8E7E73] hover:text-[#4A3B32] hover:bg-white'
                        }`}
                      >
                        <span>{curr}</span>
                        <span className="text-[10px] opacity-80">({CURRENCY_SYMBOLS[curr]})</span>
                      </button>
                    )
                  })}
                </div>

                {/* 輸入欄 */}
                <div className="relative rounded-2xl shadow-inner">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-[#8E7E73] font-mono text-sm font-black">
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
                    className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl pl-8 pr-4 py-2.5 text-[#2E2520] focus:outline-none focus:border-[#F5B859] font-mono font-black text-lg"
                  />
                </div>

                {/* 金額魔法換算卡片 */}
                {liveConversions && (
                  <div className="mt-3.5 space-y-1">
                    <p className="text-[10px] text-[#8C6D3B] font-bold">🪄 點點下方卡片，金額會神奇自動換算唷：</p>
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
                            className={`border-2 rounded-2xl p-2.5 text-left transition-all font-mono group active:scale-95 ${
                              isCurrent
                                ? 'bg-[#FAF1DF] border-[#FFE0B2] cursor-default'
                                : 'bg-[#FCFAF5] hover:bg-[#FAF6EE] border-[#EFE9DB] hover:border-[#F5B859]/60 cursor-pointer shadow-sm'
                            }`}
                          >
                            <div className={`text-[9px] font-sans ${isCurrent ? 'text-[#8C6D3B] font-black' : 'text-[#8E7E73] group-hover:text-[#8C6D3B]'}`}>
                              {isCurrent ? '目前' : '折合'} {curr}
                            </div>
                            <div className={`text-xs font-black truncate ${isCurrent ? 'text-[#2E2520]' : 'text-[#4A3B32]'}`}>
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

              {/* 收支類別 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">這是屬於哪一項收支呢？</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as CategoryLabelType)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold"
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
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">寫下一點好記的小筆記 (例: 特斯拉載客一星期的租費)</label>
                <input
                  type="text"
                  required
                  placeholder="寫下一點簡單的小日記吧..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold placeholder-[#A8988D]"
                />
              </div>

              {/* 支付方式 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">這筆錢是怎麼交易的？</label>
                <select
                  value={formPaymentMethod}
                  onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold"
                >
                  <option value="銀行轉帳">銀行轉帳</option>
                  <option value="現金">現金</option>
                  <option value="信用卡">信用卡</option>
                  <option value="微信/支付寶">微信/支付寶</option>
                </select>
              </div>

              <div className="pt-3 flex justify-between gap-3 border-t border-[#FAF6EE]">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    setShowCalendarAddForm(false)
                    resetForm()
                  }}
                  className="bg-[#FCFAF5] hover:bg-[#F3ECE0] border border-[#EFE9DB] rounded-2xl text-[#8E7E73] font-bold text-xs px-5 py-2.5 active:scale-95 transition-all"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-[#F5B859] hover:bg-[#E5A749] border border-[#DE9B3E] text-[#2E2520] px-6 py-2.5 rounded-2xl text-xs font-black active:scale-95 transition-all shadow-sm"
                >
                  確認保存這筆紀錄 ✨
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
