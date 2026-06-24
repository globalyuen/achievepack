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
  Briefcase,
  Settings
} from 'lucide-react'
import { toast } from 'sonner'
import { supabase } from '../../lib/supabase'
import { useTranslation } from 'react-i18next'

// ==========================================
// 類型與資料結構 (適合10歲老闆的簡易版)
export type CurrencyType = 'USD' | 'HKD' | 'RMB'

export type TimeframeType = 
  | '1d' // 最近一日
  | '1w' // 最近一個星期
  | '1m' // 最近一個月
  | '3m' // 最近三個月
  | '6m' // 最近半年
  | '1y' // 最近一年
  | '2y' // 最近兩年
  | '3y' // 最近三年
  | '5y' // 最近五年
  | '10y' // 最近十年
  | 'all' // 歷史總計

export interface BusinessItem {
  id: string
  name: string
  emoji: string
  color_idx: number
  created_at?: string
}

export interface CategoryItem {
  id: string
  business_name: string
  name: string
  type: 'incoming' | 'outgoing'
  created_at?: string
}

export interface Transaction {
  id: string
  date: string // YYYY-MM-DD
  type: 'incoming' | 'outgoing' // incoming (賺錢 💰) | outgoing (花錢 💸)
  amount: number // 換算後的美金基準額 (Base USD)
  originalAmount: number // 原始輸入金額
  currency: CurrencyType // 原始幣別
  business: string // 屬於哪一個生意 (動態)
  label: string // 收支類別 (動態)
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

// 溫柔日系奶油粉蠟色調，支持無限生意項目輪流使用
const BUSINESS_COLORS = [
  { bg: 'bg-[#E3F2FD]', text: 'text-[#1E88E5]', border: 'border-[#BBDEFB]' }, // 溫柔藍
  { bg: 'bg-[#F3E5F5]', text: 'text-[#8E24AA]', border: 'border-[#E1BEE7]' }, // 夢幻紫
  { bg: 'bg-[#FFF3E0]', text: 'text-[#F57C00]', border: 'border-[#FFE0B2]' }, // 活力橙
  { bg: 'bg-[#E8F5E9]', text: 'text-[#388E3C]', border: 'border-[#C8E6C9]' }, // 森林綠
  { bg: 'bg-[#FCE4EC]', text: 'text-[#D81B60]', border: 'border-[#F8BBD0]' }, // 甜美粉
  { bg: 'bg-[#E0F7FA]', text: 'text-[#00ACC1]', border: 'border-[#B2EBF2]' }, // 蒂芙尼藍
  { bg: 'bg-[#FFFDE7]', text: 'text-[#FBC02D]', border: 'border-[#FFF9C4]' }  // 香蕉黃
]

const DEFAULT_BUSINESSES: BusinessItem[] = [
  { id: 'b-pkg', name: '包裝買賣 📦', emoji: '📦', color_idx: 0 },
  { id: 'b-prk', name: '車位出租 🅿️', emoji: '🅿️', color_idx: 1 },
  { id: 'b-car', name: '汽車出租 🚗', emoji: '🚗', color_idx: 2 },
  { id: 'b-hse', name: '房屋出租 🏠', emoji: '🏠', color_idx: 3 }
]

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
  }
]

const BookkeepingPage: React.FC = () => {
  const { t } = useTranslation()
  const p = 'seoPages.pages.bookkeeping'

  // 分頁切換：overview (存錢罐), ledger (流水帳本), calendar (收支日曆), report (生意分析)
  const [activeTab, setActiveTab] = useState<'overview' | 'ledger' | 'calendar' | 'report'>('overview')

  // 10歲小老闆時光範圍選擇 state
  const [overviewTimeframe, setOverviewTimeframe] = useState<TimeframeType>('all')

  // 全局顯示幣別 state (USD | HKD | RMB)
  const [displayCurrency, setDisplayCurrency] = useState<CurrencyType>(() => {
    return (localStorage.getItem('kid_bookkeeping_display_currency') as CurrencyType) || 'USD'
  })

  // 核心數據 state
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [businesses, setBusinesses] = useState<BusinessItem[]>([])
  const [customCategories, setCustomCategories] = useState<CategoryItem[]>([])
  const [customRates, setCustomRates] = useState<Record<CurrencyType, number>>(EXCHANGE_RATES)

  const [dbAvailable, setDbAvailable] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const [showRateSettings, setShowRateSettings] = useState(false)
  const [showBusinessManager, setShowBusinessManager] = useState(false)

  // 寫入本地儲存 (作為備份和離線支持)
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('kid_bookkeeping_transactions', JSON.stringify(transactions))
    }
  }, [transactions])

  useEffect(() => {
    if (businesses.length > 0) {
      localStorage.setItem('kid_bookkeeping_businesses', JSON.stringify(businesses))
    }
  }, [businesses])

  useEffect(() => {
    if (customCategories.length > 0) {
      localStorage.setItem('kid_bookkeeping_categories', JSON.stringify(customCategories))
    }
  }, [customCategories])

  useEffect(() => {
    localStorage.setItem('kid_bookkeeping_rates', JSON.stringify(customRates))
  }, [customRates])

  useEffect(() => {
    localStorage.setItem('kid_bookkeeping_display_currency', displayCurrency)
  }, [displayCurrency])

  // 從 Supabase 載入數據，並與本機進行同步 (確保數據不丟失)
  useEffect(() => {
    async function initData() {
      setLoading(true)
      let dbTransactions: Transaction[] = []
      let dbBusinesses: BusinessItem[] = []
      let dbCategories: CategoryItem[] = []
      let dbOk = true

      try {
        // 1. 獲取小生意項目
        const { data: bData, error: bErr } = await supabase
          .from('kid_bookkeeping_businesses')
          .select('*')
        if (bErr) throw bErr
        dbBusinesses = bData || []

        // 2. 獲取自訂類別
        const { data: cData, error: cErr } = await supabase
          .from('kid_bookkeeping_categories')
          .select('*')
        if (cErr) throw cErr
        dbCategories = cData || []

        // 3. 獲取記帳流水帳
        const { data: tData, error: tErr } = await supabase
          .from('kid_bookkeeping_transactions')
          .select('*')
        if (tErr) throw tErr
        
        // 格式化 DB 數據回 Transaction 類型
        dbTransactions = (tData || []).map((t: any) => ({
          id: t.id,
          date: t.date,
          type: t.type,
          amount: Number(t.amount),
          originalAmount: Number(t.original_amount),
          currency: t.currency as CurrencyType,
          business: t.business,
          label: t.label,
          description: t.description,
          paymentMethod: t.payment_method as any
        }))
      } catch (err: any) {
        console.warn('Supabase not available or tables missing, using local storage:', err.message)
        dbOk = false
      }

      setDbAvailable(dbOk)

      // 載入本地 LocalStorage 作為融合基礎
      const localTxRaw = localStorage.getItem('kid_bookkeeping_transactions')
      const localBizRaw = localStorage.getItem('kid_bookkeeping_businesses')
      const localCatsRaw = localStorage.getItem('kid_bookkeeping_categories')
      const localRatesRaw = localStorage.getItem('kid_bookkeeping_rates')

      const localTx: Transaction[] = localTxRaw ? JSON.parse(localTxRaw) : INITIAL_TRANSACTIONS
      const localBiz: BusinessItem[] = localBizRaw ? JSON.parse(localBizRaw) : DEFAULT_BUSINESSES
      const localCats: CategoryItem[] = localCatsRaw ? JSON.parse(localCatsRaw) : []
      if (localRatesRaw) setCustomRates(JSON.parse(localRatesRaw))

      if (!dbOk) {
        setTransactions(localTx)
        setBusinesses(localBiz)
        setCustomCategories(localCats)
      } else {
        // A. 融合小生意項目 (本地 ➔ 雲端)
        const mergedBiz = [...dbBusinesses]
        let bizUpdated = false
        for (const localB of localBiz) {
          if (!mergedBiz.some(dbB => dbB.name === localB.name)) {
            mergedBiz.push(localB)
            bizUpdated = true
            await supabase.from('kid_bookkeeping_businesses').insert({
              name: localB.name,
              emoji: localB.emoji,
              color_idx: localB.color_idx
            })
          }
        }
        setBusinesses(mergedBiz)
        localStorage.setItem('kid_bookkeeping_businesses', JSON.stringify(mergedBiz))

        // B. 融合自訂收支項目
        const mergedCats = [...dbCategories]
        for (const localC of localCats) {
          if (!mergedCats.some(dbC => dbC.business_name === localC.business_name && dbC.name === localC.name && dbC.type === localC.type)) {
            mergedCats.push(localC)
            await supabase.from('kid_bookkeeping_categories').insert({
              business_name: localC.business_name,
              name: localC.name,
              type: localC.type
            })
          }
        }
        setCustomCategories(mergedCats)
        localStorage.setItem('kid_bookkeeping_categories', JSON.stringify(mergedCats))

        // C. 融合交易記錄
        const mergedTx = [...dbTransactions]
        let txUpdated = false
        for (const localT of localTx) {
          if (!mergedTx.some(dbT => dbT.id === localT.id)) {
            mergedTx.push(localT)
            txUpdated = true
            await supabase.from('kid_bookkeeping_transactions').insert({
              id: localT.id,
              date: localT.date,
              type: localT.type,
              amount: localT.amount,
              original_amount: localT.originalAmount,
              currency: localT.currency,
              business: localT.business,
              label: localT.label,
              description: localT.description,
              payment_method: localT.paymentMethod
            })
          }
        }
        
        mergedTx.sort((a, b) => b.date.localeCompare(a.date))
        setTransactions(mergedTx)
        localStorage.setItem('kid_bookkeeping_transactions', JSON.stringify(mergedTx))

        if (bizUpdated || txUpdated) {
          toast.success('✨ 偵測到本機新紀錄，已自動幫你同步到雲端囉！')
        } else {
          toast.success('✨ 記帳簿已成功連接雲端，實時同步中！')
        }
      }

      setLoading(false)
    }

    initData()
  }, [])

  // 動態獲取生意卡片樣式
  const getBusinessStyleByName = (name: string) => {
    const b = businesses.find(item => item.name === name)
    const colorIdx = b ? b.color_idx : 0
    return BUSINESS_COLORS[colorIdx % BUSINESS_COLORS.length]
  }

  // 動態生成某個生意之下的收支子類別
  const getCategoriesForBusiness = (businessName: string, type: 'incoming' | 'outgoing') => {
    const defaults = type === 'incoming' 
      ? ['收租金 💰', '商品銷售 📦', '其他收入 💵'] 
      : ['日常維修 🛠️', '水電開銷 ⚡', '進貨成本 📦', '其他支出 💸']
    const customs = customCategories
      .filter(c => c.business_name === businessName && c.type === type)
      .map(c => c.name)
    return Array.from(new Set([...defaults, ...customs]))
  }

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
  const [formBusiness, setFormBusiness] = useState<string>('')
  const [formLabel, setFormLabel] = useState<string>('')
  const [formDescription, setFormDescription] = useState('')
  const [formPaymentMethod, setFormPaymentMethod] = useState<Transaction['paymentMethod']>('銀行轉帳')
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null)

  // 動態增加生意項目之下的收支類別 (Inline Preset)
  const [showAddCategoryInline, setShowAddCategoryInline] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')

  // 增加新小生意 state
  const [newBizName, setNewBizName] = useState('')
  const [newBizEmoji, setNewBizEmoji] = useState('📦')
  const [editingBizId, setEditingBizId] = useState<string | null>(null)
  const [editingBizName, setEditingBizName] = useState('')
  const [editingBizEmoji, setEditingBizEmoji] = useState('')

  // 重置記帳表單
  const resetForm = () => {
    setFormDate(new Date().toISOString().split('T')[0])
    setFormType('incoming')
    setFormAmount('')
    setFormCurrency('USD')
    if (businesses.length > 0) {
      setFormBusiness(businesses[0].name)
      const cats = getCategoriesForBusiness(businesses[0].name, 'incoming')
      setFormLabel(cats[0] || '商品銷售 📦')
    } else {
      setFormBusiness('')
      setFormLabel('')
    }
    setFormDescription('')
    setFormPaymentMethod('銀行轉帳')
    setEditingTransactionId(null)
    setShowAddCategoryInline(false)
    setNewCategoryName('')
  }

  // 根據小生意列表，確保選中正確的預設生意與類別
  useEffect(() => {
    if (businesses.length > 0 && (!formBusiness || !businesses.some(b => b.name === formBusiness))) {
      setFormBusiness(businesses[0].name)
    }
  }, [businesses, formBusiness])

  // 根據收支與生意自動對齊預設項目
  useEffect(() => {
    if (formBusiness) {
      const cats = getCategoriesForBusiness(formBusiness, formType)
      if (cats.length > 0 && !cats.includes(formLabel)) {
        setFormLabel(cats[0])
      }
    }
  }, [formType, formBusiness, customCategories])

  // 實時換算基準美金
  const convertedPreviewAmount = useMemo(() => {
    if (!formAmount || isNaN(Number(formAmount))) return 0
    const amt = Number(formAmount)
    const rate = customRates[formCurrency] || 1.0
    return amt / rate
  }, [formAmount, formCurrency, customRates])

  // 實時跨幣別換算對照組
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

  // 新增/修改小生意項目
  const handleSaveBusiness = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newBizName.trim()) {
      toast.error('請輸入小生意名稱喔！')
      return
    }
    const emoji = newBizEmoji.trim() || '📦'
    const nameWithEmoji = `${newBizName.trim()} ${emoji}`.trim()

    if (businesses.some(b => b.name === nameWithEmoji)) {
      toast.error('這個小生意名字已經存在囉！')
      return
    }

    const newB: BusinessItem = {
      id: `b-${Date.now()}`,
      name: nameWithEmoji,
      emoji: emoji,
      color_idx: businesses.length
    }

    const updated = [...businesses, newB]
    setBusinesses(updated)
    localStorage.setItem('kid_bookkeeping_businesses', JSON.stringify(updated))

    if (dbAvailable) {
      supabase
        .from('kid_bookkeeping_businesses')
        .insert({
          name: newB.name,
          emoji: newB.emoji,
          color_idx: newB.color_idx
        })
        .then(({ error }) => {
          if (error) console.error('Failed to sync business addition to Supabase:', error)
        })
    }

    setNewBizName('')
    setNewBizEmoji('📦')
    toast.success('🎉 成功打造了一個全新小生意項目！')
  }

  // 編輯修改小生意
  const handleUpdateBusinessName = async (id: string, oldName: string) => {
    if (!editingBizName.trim()) return
    const emoji = editingBizEmoji.trim() || '📦'
    const cleanNewName = `${editingBizName.trim()} ${emoji}`.trim()

    if (businesses.some(b => b.name === cleanNewName && b.id !== id)) {
      toast.error('小生意名稱重複囉！')
      return
    }

    // 1. 更新生意狀態
    const updatedBiz = businesses.map(b => b.id === id ? { ...b, name: cleanNewName, emoji: emoji } : b)
    setBusinesses(updatedBiz)
    localStorage.setItem('kid_bookkeeping_businesses', JSON.stringify(updatedBiz))

    // 2. 更新交易中對應的生意名稱
    const updatedTx = transactions.map(t => t.business === oldName ? { ...t, business: cleanNewName } : t)
    setTransactions(updatedTx)
    localStorage.setItem('kid_bookkeeping_transactions', JSON.stringify(updatedTx))

    // 3. 更新類別中對應的生意名稱
    const updatedCats = customCategories.map(c => c.business_name === oldName ? { ...c, business_name: cleanNewName } : c)
    setCustomCategories(updatedCats)
    localStorage.setItem('kid_bookkeeping_categories', JSON.stringify(updatedCats))

    if (dbAvailable) {
      // 雲端同步更新 (Supabase Cascade 手動對齊)
      await supabase.from('kid_bookkeeping_businesses').update({ name: cleanNewName, emoji: emoji }).eq('name', oldName)
      await supabase.from('kid_bookkeeping_transactions').update({ business: cleanNewName }).eq('business', oldName)
      await supabase.from('kid_bookkeeping_categories').update({ business_name: cleanNewName }).eq('business_name', oldName)
    }

    setEditingBizId(null)
    setEditingBizName('')
    setEditingBizEmoji('')
    toast.success('小生意與所有歷史日記已同步修改完畢！✨')
  }

  // 刪除小生意項目
  const handleDeleteBusiness = async (id: string, name: string) => {
    if (window.confirm(`確定要擦掉「${name}」這個小生意嗎？所有這個生意底下的記帳日記與項目也會一併消失喔！`)) {
      const updatedBiz = businesses.filter(b => b.id !== id)
      setBusinesses(updatedBiz)
      localStorage.setItem('kid_bookkeeping_businesses', JSON.stringify(updatedBiz))

      const updatedTx = transactions.filter(t => t.business !== name)
      setTransactions(updatedTx)
      localStorage.setItem('kid_bookkeeping_transactions', JSON.stringify(updatedTx))

      const updatedCats = customCategories.filter(c => c.business_name !== name)
      setCustomCategories(updatedCats)
      localStorage.setItem('kid_bookkeeping_categories', JSON.stringify(updatedCats))

      if (dbAvailable) {
        await supabase.from('kid_bookkeeping_businesses').delete().eq('name', name)
        await supabase.from('kid_bookkeeping_transactions').delete().eq('business', name)
        await supabase.from('kid_bookkeeping_categories').delete().eq('business_name', name)
      }

      toast.success('小生意以及關聯的所有日記都擦乾淨囉！🧹')
    }
  }

  // 新增收支項目 Preset
  const handleAddCustomCategory = async () => {
    if (!newCategoryName.trim()) {
      toast.error('請輸入項目類別名稱喔！')
      return
    }

    const catName = newCategoryName.trim()
    const existing = getCategoriesForBusiness(formBusiness, formType)
    if (existing.includes(catName)) {
      toast.error('這個項目類別已經存在囉！')
      return
    }

    const newCat: CategoryItem = {
      id: `c-${Date.now()}`,
      business_name: formBusiness,
      name: catName,
      type: formType
    }

    const updated = [...customCategories, newCat]
    setCustomCategories(updated)
    localStorage.setItem('kid_bookkeeping_categories', JSON.stringify(updated))

    if (dbAvailable) {
      supabase
        .from('kid_bookkeeping_categories')
        .insert({
          business_name: newCat.business_name,
          name: newCat.name,
          type: newCat.type
        })
        .then(({ error }) => {
          if (error) console.error('Failed to sync category addition to Supabase:', error)
        })
    }

    setFormLabel(catName)
    setShowAddCategoryInline(false)
    setNewCategoryName('')
    toast.success('🎉 新增收支類別預設項目成功！')
  }

  // 保存日記交易 (新增或編輯)
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

    if (dbAvailable) {
      supabase
        .from('kid_bookkeeping_transactions')
        .upsert({
          id: tData.id,
          date: tData.date,
          type: tData.type,
          amount: tData.amount,
          original_amount: tData.originalAmount,
          currency: tData.currency,
          business: tData.business,
          label: tData.label,
          description: tData.description,
          payment_method: tData.paymentMethod
        })
        .then(({ error }) => {
          if (error) {
            console.error('Failed to save transaction to Supabase:', error)
            toast.error('雲端儲存失敗，暫存於本機。')
          }
        })
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
    if (window.confirm('確定要擦掉這一筆記帳小紀錄嗎？擦掉就找不回來囉！')) {
      setTransactions(prev => prev.filter(t => t.id !== id))
      toast.success('已經幫你把小筆記擦乾淨囉！🧹')
      setSelectedDayDetail(null)

      if (dbAvailable) {
        supabase
          .from('kid_bookkeeping_transactions')
          .delete()
          .eq('id', id)
          .then(({ error }) => {
            if (error) console.error('Failed to delete transaction from Supabase:', error)
          })
      }
    }
  }

  // ==========================================
  // 計算財務指標 (基準美金 - 支援時光範圍篩選)
  // ==========================================

  // 根據選擇的時間範圍過濾交易 (用於存錢罐首頁與分析)
  const timeframeFilteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      if (overviewTimeframe === 'all') return true
      
      const tDate = new Date(t.date)
      const now = new Date()
      
      // 設定零點，純天數計算
      const tDateZero = new Date(tDate.getFullYear(), tDate.getMonth(), tDate.getDate())
      const nowZero = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      
      const diffTime = nowZero.getTime() - tDateZero.getTime()
      const diffDays = diffTime / (1000 * 60 * 60 * 24)

      if (overviewTimeframe === '1d') {
        return Math.abs(diffDays) <= 1
      }
      if (overviewTimeframe === '1w') {
        return diffDays <= 7
      }
      if (overviewTimeframe === '1m') {
        return diffDays <= 30
      }
      if (overviewTimeframe === '3m') {
        return diffDays <= 90
      }
      if (overviewTimeframe === '6m') {
        return diffDays <= 180
      }
      if (overviewTimeframe === '1y') {
        return diffDays <= 365
      }
      if (overviewTimeframe === '2y') {
        return diffDays <= 730
      }
      if (overviewTimeframe === '3y') {
        return diffDays <= 1095
      }
      if (overviewTimeframe === '5y') {
        return diffDays <= 1825
      }
      if (overviewTimeframe === '10y') {
        return diffDays <= 3650
      }
      return true
    })
  }, [transactions, overviewTimeframe])

  const stats = useMemo(() => {
    let earned = 0 // 收入
    let spent = 0 // 支出
    
    timeframeFilteredTransactions.forEach(t => {
      if (t.type === 'incoming') earned += t.amount
      else spent += t.amount
    })

    const pocketMoney = earned - spent // 剩下賺到的錢

    return {
      earned,
      spent,
      pocketMoney
    }
  }, [timeframeFilteredTransactions])

  // 各生意的收入與支出統計 (動態化)
  const businessStats = useMemo(() => {
    const bMap: Record<string, { earned: number; spent: number; profit: number }> = {}
    businesses.forEach(b => {
      bMap[b.name] = { earned: 0, spent: 0, profit: 0 }
    })

    timeframeFilteredTransactions.forEach(t => {
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
  }, [timeframeFilteredTransactions, businesses])

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
                    {t(`${p}.header.title`, "小老闆理財記賬本")}
                    <span className="text-xs bg-[#FAF1DF] text-[#8C6D3B] font-black px-2.5 py-1 rounded-full border-2 border-[#EADFCD]">
                      {t(`${p}.header.badge`, "超簡單版")}
                    </span>
                  </h1>
                  <p className="text-xs text-[#8E7E73] font-bold">
                    {t(`${p}.header.subtitle`, "管錢超容易！學習記賬第一步 📦 包裝買賣 • 🚗 汽車 • 🅿️ 車位 • 🏠 房屋")}
                  </p>
                </div>
              </div>
            </div>

            {/* 快速按鈕區 */}
            <div className="flex flex-wrap items-center gap-3 self-end sm:self-center">
              <button
                onClick={() => setShowBusinessManager(true)}
                className="bg-[#FCFAF5] hover:bg-[#F5EFE0] text-[#8C6D3B] text-xs font-black px-4 py-3 rounded-2xl border-2 border-[#EADFCD] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Settings className="w-3.5 h-3.5 stroke-[2.5]" />
                {t(`${p}.header.manageBusiness`, "管理小生意")}
              </button>
              <button
                onClick={() => setShowRateSettings(true)}
                className="bg-[#FCFAF5] hover:bg-[#F5EFE0] text-[#8C6D3B] text-xs font-black px-4 py-3 rounded-2xl border-2 border-[#EADFCD] transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5 stroke-[2.5]" />
                {t(`${p}.header.adjustRate`, "調整匯率")}
              </button>
              <button
                onClick={() => {
                  resetForm()
                  setShowAddForm(true)
                }}
                className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] text-sm font-black px-6 py-3 rounded-2xl transition-all shadow-md hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 border-2 border-[#DE9B3E]"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                {t(`${p}.header.addRecord`, "記一筆收支 💰")}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ----------------- 全局統計面板 (超可愛大卡片) ----------------- */}
      <section className="py-6 bg-[#FCFAF5]/30 border-b border-[#EFE9DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* 匯率小工具與時光範圍選擇器 */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-6">
            {/* 匯率小工具 */}
            <div className="flex flex-wrap gap-3 text-xs bg-[#FCFAF5] px-4 py-3.5 rounded-2xl border-2 border-[#EFE9DB] text-[#8E7E73] font-bold shadow-inner flex-1">
              <span className="text-[#8C6D3B] font-black">{t(`${p}.rateSettings.baseInfo`, "📈 自動換算器匯率基底：")}</span>
              <span>1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} = <strong>1.0 {t(`${p}.rateSettings.usd`, "美金 (USD)")}</strong></span>
              <span>•</span>
              <span>1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} = <strong>{customRates.HKD} {t(`${p}.rateSettings.hkd`, "港幣 (HKD)")}</strong></span>
              <span>•</span>
              <span>1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} = <strong>{customRates.RMB} {t(`${p}.rateSettings.rmb`, "人民幣 (RMB)")}</strong></span>
            </div>

            {/* 10歲小老闆時光範圍選擇器 & 幣別切換器 */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl border-2 border-[#EFE9DB] shadow-sm select-none">
                <span className="text-base">🕒</span>
                <span className="text-xs font-black text-[#4A3B32] whitespace-nowrap">{t(`${p}.rateSettings.selectTime`, "選擇時光：")}</span>
                <select
                  value={overviewTimeframe}
                  onChange={(e) => setOverviewTimeframe(e.target.value as TimeframeType)}
                  className="bg-transparent text-xs text-[#8C6D3B] font-black focus:outline-none cursor-pointer border-b-2 border-dashed border-[#F5B859] hover:text-[#2E2520] transition-colors"
                >
                  <option value="all">{t(`${p}.timeframes.all`, "📜 歷史總計 (所有記賬紀錄)")}</option>
                  <option value="1d">{t(`${p}.timeframes.1d`, "📅 最近一日 (今天/昨日)")}</option>
                  <option value="1w">{t(`${p}.timeframes.1w`, "📅 最近一個星期 (過去7天)")}</option>
                  <option value="1m">{t(`${p}.timeframes.1m`, "📅 最近一個月 (過去30天)")}</option>
                  <option value="3m">{t(`${p}.timeframes.3m`, "📅 最近三個月")}</option>
                  <option value="6m">{t(`${p}.timeframes.6m`, "📅 最近半年")}</option>
                  <option value="1y">{t(`${p}.timeframes.1y`, "📅 最近一年 (過去365天)")}</option>
                  <option value="2y">{t(`${p}.timeframes.2y`, "📅 最近兩年")}</option>
                  <option value="3y">{t(`${p}.timeframes.3y`, "📅 最近三年")}</option>
                  <option value="5y">{t(`${p}.timeframes.5y`, "📅 最近五年")}</option>
                  <option value="10y">{t(`${p}.timeframes.10y`, "📅 最近十年")}</option>
                </select>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-[#EFE9DB] shadow-sm select-none">
                <span className="text-base">🪙</span>
                <span className="text-xs font-black text-[#4A3B32] whitespace-nowrap">{t(`${p}.rateSettings.displayCurrency`, "顯示幣別：")}</span>
                <div className="flex bg-[#FCFAF5] p-1 rounded-xl border border-[#EFE9DB]">
                  {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setDisplayCurrency(curr)
                        toast.success(`已將存錢罐切換至 ${curr} 顯示 ✨`)
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                        displayCurrency === curr
                          ? 'bg-[#F5B859] text-[#2E2520] shadow-sm'
                          : 'text-[#8E7E73] hover:text-[#4A3B32]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
                  {CURRENCY_SYMBOLS[displayCurrency]}{(stats.pocketMoney * customRates[displayCurrency]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#388E3C] font-bold ml-1.5">{displayCurrency}</span>
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
                  +{CURRENCY_SYMBOLS[displayCurrency]}{(stats.earned * customRates[displayCurrency]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#F57C00] font-bold ml-1.5">{displayCurrency}</span>
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
                  -{CURRENCY_SYMBOLS[displayCurrency]}{(stats.spent * customRates[displayCurrency]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-xs text-[#CE8078] font-bold ml-1.5">{displayCurrency}</span>
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
            { id: 'overview', label: t(`${p}.tabs.overview`, '🐷 生意小撲滿'), icon: Sparkles },
            { id: 'ledger', label: t(`${p}.tabs.ledger`, '📝 流水賬日記'), icon: Coins },
            { id: 'calendar', label: t(`${p}.tabs.calendar`, '📅 記賬小日曆'), icon: Calendar },
            { id: 'report', label: t(`${p}.tabs.report`, '📊 生意分折表'), icon: FileSpreadsheet }
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
            
            <div className="bg-white border-2 border-[#EFE9DB] rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#FAF6EE] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    <h3 className="text-base font-black text-[#2E2520] tracking-wide">{t(`${p}.overview.title`, "四大生意小賬戶表現")}</h3>
                  </div>
                  <p className="text-xs text-[#8E7E73] font-bold">
                    {t(`${p}.overview.subtitle`, "點擊時間膠囊，所有生意小撲滿的收支會神奇地自動切換唷！🧒")}
                  </p>
                </div>
                
                {/* 此時光下的總盈虧 */}
                <div className="bg-[#FCFAF5] border-2 border-[#EADFCD] rounded-2xl px-4 py-3 flex items-center justify-between gap-4 shadow-inner">
                  <div className="text-left">
                    <p className="text-[10px] text-[#8E7E73] font-bold">{t(`${p}.overview.profitLabel`, "此時光總盈虧 (利潤)")}</p>
                    <p className={`text-base font-black font-mono ${stats.pocketMoney >= 0 ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                      {stats.pocketMoney >= 0 ? '+' : '-'}${Math.abs(stats.pocketMoney).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="text-right border-l border-[#EADFCD] pl-4">
                    <p className="text-[10px] text-[#8E7E73] font-bold">{t(`${p}.overview.rangeLabel`, "選定範圍")}</p>
                    <span className="text-xs bg-[#F5C77E] text-[#2E2520] font-black px-2 py-0.5 rounded-lg border border-[#DE9B3E]">
                      {overviewTimeframe === 'all' && t(`${p}.timeframes.allShort`, '📜 歷史總計')}
                      {overviewTimeframe === '1d' && t(`${p}.timeframes.1dShort`, '⚡ 最近一日')}
                      {overviewTimeframe === '1w' && t(`${p}.timeframes.1wShort`, '📅 最近一週')}
                      {overviewTimeframe === '1m' && t(`${p}.timeframes.1mShort`, '📅 最近一月')}
                      {overviewTimeframe === '3m' && t(`${p}.timeframes.3mShort`, '📅 最近三月')}
                      {overviewTimeframe === '6m' && t(`${p}.timeframes.6mShort`, '📅 最近半年')}
                      {overviewTimeframe === '1y' && t(`${p}.timeframes.1yShort`, '📅 最近一年')}
                      {overviewTimeframe === '2y' && t(`${p}.timeframes.2yShort`, '📅 最近兩年')}
                      {overviewTimeframe === '3y' && t(`${p}.timeframes.3yShort`, '📅 最近三年')}
                      {overviewTimeframe === '5y' && t(`${p}.timeframes.5yShort`, '📅 最近五年')}
                      {overviewTimeframe === '10y' && t(`${p}.timeframes.10yShort`, '📅 最近十年')}
                    </span>
                  </div>
                </div>
              </div>

              {/* 橫向滑動時間膠囊按鈕 (溫馨奶油色) */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
                {[
                  { value: 'all', label: t(`${p}.timeframes.allShort`, '歷史總計'), icon: '📜' },
                  { value: '1d', label: t(`${p}.timeframes.1dShort`, '最近一日'), icon: '⚡' },
                  { value: '1w', label: t(`${p}.timeframes.1wShort`, '最近一個星期'), icon: '📅' },
                  { value: '1m', label: t(`${p}.timeframes.1mShort`, '最近一個月'), icon: '📅' },
                  { value: '3m', label: t(`${p}.timeframes.3mShort`, '最近三個月'), icon: '📅' },
                  { value: '6m', label: t(`${p}.timeframes.6mShort`, '最近半年'), icon: '📅' },
                  { value: '1y', label: t(`${p}.timeframes.1yShort`, '最近一年'), icon: '📅' },
                  { value: '2y', label: t(`${p}.timeframes.2yShort`, '最近兩年'), icon: '📅' },
                  { value: '3y', label: t(`${p}.timeframes.3yShort`, '最近三年'), icon: '📅' },
                  { value: '5y', label: t(`${p}.timeframes.5yShort`, '最近五年'), icon: '📅' },
                  { value: '10y', label: t(`${p}.timeframes.10yShort`, '最近十年'), icon: '📅' }
                ].map((opt) => {
                  const isActive = overviewTimeframe === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setOverviewTimeframe(opt.value as TimeframeType)
                        toast.success(`已為你切換至：${opt.label} 🌟`)
                      }}
                      className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all whitespace-nowrap active:scale-95 border-2 flex items-center gap-1.5 shadow-sm hover:scale-[1.02] ${
                        isActive
                          ? 'bg-[#F5C77E] border-[#D4A359] text-[#2E2520] scale-[1.03]'
                          : 'bg-[#FCFAF5] border-[#EFE9DB] text-[#8E7E73] hover:border-[#EADFCD] hover:text-[#4A3B32] hover:bg-white'
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 4個小扑滿 (奶油風格) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {businesses.map(b => {
                const bStat = businessStats[b.name] || { earned: 0, spent: 0, profit: 0 }
                const isProfit = bStat.profit >= 0
                const colors = getBusinessStyleByName(b.name)
                const rate = customRates[displayCurrency] || 1.0
                const sym = CURRENCY_SYMBOLS[displayCurrency]

                return (
                  <div
                    key={b.id}
                    className="bg-white border-2 border-[#EFE9DB] rounded-3xl p-5 hover:border-[#F5B859]/60 shadow-sm transition-all flex flex-col justify-between hover:scale-[1.01]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-black px-3 py-1 rounded-xl border ${colors.bg} ${colors.text} ${colors.border}`}>
                          {t(`${p}.overview.businessItemBadge`, "小生意項目")} {b.emoji}
                        </span>
                        <span className="text-xl">💰</span>
                      </div>
                      <h4 className="text-lg font-black text-[#2E2520] tracking-wide">{b.name}</h4>
                    </div>

                    <div className="mt-6 space-y-2.5 font-mono text-xs border-t border-[#FAF6EE] pt-4">
                      <div className="flex justify-between text-[#8E7E73] font-bold">
                        <span>{t(`${p}.overview.earned`, "賺到收支：")}</span>
                        <span className="text-[#388E3C] font-black">+{sym}{(bStat.earned * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between text-[#8E7E73] font-bold">
                        <span>{t(`${p}.overview.spent`, "花掉成本：")}</span>
                        <span className="text-[#CE8078] font-black">-{sym}{(bStat.spent * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between pt-2.5 border-t-2 border-[#EFE9DB] text-sm">
                        <span className="font-bold text-[#4A3B32] font-sans">{t(`${p}.overview.profit`, "我的利潤：")}</span>
                        <span className={`font-black ${isProfit ? 'text-[#388E3C]' : 'text-[#CE8078]'}`}>
                          {isProfit ? '+' : '-'}{sym}{Math.abs(bStat.profit * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
                <h5 className="font-black text-[#2E2520]">{t(`${p}.overview.adviceTitle`, "給小老闆的理財悄悄話")}</h5>
                <p className="text-xs text-[#8E7E73] font-bold leading-relaxed">
                  {t(`${p}.overview.adviceDesc`, "記賬不僅僅是記錄數字，更是建立良好的理財觀念！持之以恆，你就能看出哪一個生意（比如「房屋出租 🏠」或是「包裝買賣 📦」）是你的印鈔機喔！")}
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
                    placeholder={t(`${p}.filters.searchPlaceholder`, "搜尋備註日記或科目...")}
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
                    <option value="all">{t(`${p}.filters.typeAll`, "所有的錢方向")}</option>
                    <option value="incoming">{t(`${p}.filters.typeIncoming`, "只看賺到的錢 💰")}</option>
                    <option value="outgoing">{t(`${p}.filters.typeOutgoing`, "只看花出去的錢 💸")}</option>
                  </select>
                </div>

                {/* 生意項目 */}
                <div>
                  <select
                    value={filterBusiness}
                    onChange={(e) => setFilterBusiness(e.target.value)}
                    className="w-full bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-2xl px-4 py-2.5 text-sm text-[#8C6D3B] focus:outline-none transition-all font-black shadow-sm"
                  >
                    <option value="all">{t(`${p}.filters.businessAll`, "所有生意項目")}</option>
                    {businesses.map(b => (
                      <option key={b.id} value={b.name}>{b.name}</option>
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
                    <option value="all">{t(`${p}.filters.currencyAll`, "所有交易幣別")}</option>
                    <option value="USD">USD</option>
                    <option value="HKD">HKD</option>
                    <option value="RMB">RMB</option>
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
                      {t(`${p}.filters.reset`, "重置所有條件")}
                    </button>
                  )}
                  <button
                    onClick={exportToCSV}
                    className="bg-[#A3B899] hover:bg-[#8EAC90] text-[#2E2520] text-xs font-black px-4 py-2.5 rounded-xl border-2 border-[#819976] flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    {t(`${p}.filters.downloadCSV`, "下載 CSV 報表 📊")}
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
                    <p className="text-base font-black text-[#4A3B32]">{t(`${p}.filters.emptyTitle`, "小本子裡沒有紀錄唷")}</p>
                    <p className="text-xs font-bold">{t(`${p}.filters.emptyDesc`, "點選上面「記一筆」或是「清除過濾條件」來看看吧！")}</p>
                  </div>
                ) : (
                  filteredTransactions.map(t => {
                    const isIncome = t.type === 'incoming'
                    const showConversion = t.currency !== 'USD'
                    const colors = getBusinessStyleByName(t.business)

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
                  {t(`${p}.calendar.title`, "📅 收支大表格日曆 (統一 USD 計價)")}
                </h4>
                <p className="text-xs text-[#8E7E73] font-bold mt-1">
                  {t(`${p}.calendar.subtitle`, "點擊格網中任何一天，就能看到那天賺了多少或花了多少，也可以直接對那天快捷記賬唷！")}
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
                {((t(`${p}.calendar.days`, { returnObjects: true }) as unknown) as string[])?.map((dayStr: string, i: number) => (
                  <div key={i}>{dayStr}</div>
                ))}
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
                            {t(`${p}.calendar.transactionsCount`, { count: items.length, defaultValue: '{{count}}筆' })}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 mt-3">
                        {dayEarned > 0 && (
                          <div className="text-[9px] font-black text-[#388E3C] bg-[#E8F5E9] px-1.5 py-0.5 rounded-lg border border-[#C8E6C9] flex justify-between">
                            <span>{t(`${p}.calendar.earned`, "賺:")}</span>
                            <span>+${Math.round(dayEarned)}</span>
                          </div>
                        )}
                        {daySpent > 0 && (
                          <div className="text-[9px] font-black text-[#CE8078] bg-[#FFF0F0] px-1.5 py-0.5 rounded-lg border border-[#FFE0E0] flex justify-between">
                            <span>{t(`${p}.calendar.spent`, "花:")}</span>
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
              <div className="fixed inset-0 bg-[#4A3B32]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] flex flex-col">
                  <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD] shrink-0">
                    <div>
                      <h3 className="text-md sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                        <span>📅</span> {selectedDayDetail.dayString} {t(`${p}.dayDetail.title`, "記賬大詳情")}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="p-1 bg-white hover:bg-[#F3ECE0] rounded-xl border border-[#EADFCD] text-[#8E7E73] transition-all"
                    >
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                  <div className="p-5 overflow-y-auto space-y-3 bg-white flex-1">
                    {selectedDayDetail.items.length === 0 ? (
                      <div className="py-12 text-center text-[#8E7E73] font-bold">
                        <p className="text-sm">{t(`${p}.dayDetail.empty`, "這一天還空蕩蕩的喔，沒有任何小筆記。")}</p>
                      </div>
                    ) : (
                      selectedDayDetail.items.map(t => {
                        const isIncome = t.type === 'incoming'
                        const colors = getBusinessStyleByName(t.business)

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

                  <div className="bg-[#FCFAF5] px-5 py-4 flex justify-between items-center border-t-2 border-[#EFE9DB] shrink-0">
                    <button
                      onClick={() => {
                        setSelectedDayDetail(null)
                        setShowCalendarAddForm(true)
                      }}
                      className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] text-xs font-black px-4.5 py-2.5 rounded-xl flex items-center gap-1 border border-[#DE9B3E] active:scale-95 transition-all shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      {t(`${p}.dayDetail.addBtn`, "就在今天記一筆 💰")}
                    </button>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="text-xs text-[#8E7E73] hover:text-[#4A3B32] font-bold"
                    >
                      {t(`${p}.dayDetail.close`, "關閉視窗")}
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
                  <span>📊</span> {t(`${p}.report.title`, "簡明生意損益小報表 (美金基準)")}
                </h3>
                <p className="text-xs text-[#8E7E73] font-bold">
                  {t(`${p}.report.subtitle`, "各個小生意的賺錢和花錢情況匯總表，全部自動折算成美金統計！")}
                </p>
              </div>

              {/* 報表內容 */}
              <div className="space-y-4">
                {businesses.map(b => {
                  const bStat = businessStats[b.name] || { earned: 0, spent: 0, profit: 0 }
                  const isProfit = bStat.profit >= 0
                  return (
                    <div key={b.id} className="p-4.5 bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-[#2E2520]">{b.name}</h4>
                        <p className="text-xs text-[#8E7E73] font-bold mt-1">
                          {t(`${p}.report.desc`, "本項生意的全部收支紀錄加總。")}
                        </p>
                      </div>

                      <div className="flex gap-4 font-mono text-xs text-right self-end sm:self-center">
                        <div>
                          <p className="text-[#8E7E73] font-bold">{t(`${p}.report.earned`, "總收入")}</p>
                          <p className="text-[#388E3C] font-black text-sm">+${bStat.earned.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-[#8E7E73] font-bold">{t(`${p}.report.spent`, "總支出")}</p>
                          <p className="text-[#CE8078] font-black text-sm">-${bStat.spent.toFixed(2)}</p>
                        </div>
                        <div className="border-l-2 border-[#EFE9DB] pl-4">
                          <p className="text-[#4A3B32] font-sans font-black">{t(`${p}.report.profit`, "小利潤")}</p>
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
                  {t(`${p}.report.download`, "下載生意小報表 CSV 📊")}
                </button>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ----------------- MODAL: 調整匯率設定 ----------------- */}
      {showRateSettings && (
        <div className="fixed inset-0 bg-[#4A3B32]/45 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] flex flex-col">
            
            <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD] shrink-0">
              <h3 className="text-sm sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                <RefreshCw className="w-4.5 h-4.5 text-[#8C6D3B] stroke-[2.5]" />
                {t(`${p}.rateSettings.title`, "調整小老闆匯率計算機")}
              </h3>
              <button
                onClick={() => setShowRateSettings(false)}
                className="p-1 bg-white hover:bg-[#F3ECE0] rounded-xl border border-[#EADFCD] text-[#8E7E73]"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs bg-white overflow-y-auto flex-1">
              <p className="text-[#8E7E73] font-bold leading-relaxed">
                {t(`${p}.rateSettings.description`, "在記賬時，如果小老闆輸入了港幣 (HKD) 或人民幣 (RMB)，系統會自動以這個匯率基準，幫你變魔法換算成美金 (USD) 存進你的大撲滿喔！")}
              </p>

              <div className="space-y-3.5 bg-[#FCFAF5] p-4 rounded-2xl border-2 border-[#EFE9DB] font-mono font-bold text-[#4A3B32]">
                
                {/* USD */}
                <div className="flex justify-between items-center">
                  <span className="text-[#8E7E73] font-sans">1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} =</span>
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
                  <span className="text-[#8E7E73] font-sans">1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} =</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.HKD}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, HKD: Number(e.target.value) || EXCHANGE_RATES.HKD }))}
                      className="w-24 bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-xl px-2.5 py-1.5 text-center text-[#8C6D3B] focus:outline-none"
                    />
                    <span>{t(`${p}.rateSettings.hkd`, "港幣 (HKD)")}</span>
                  </div>
                </div>

                {/* RMB */}
                <div className="flex justify-between items-center">
                  <span className="text-[#8E7E73] font-sans">1 {t(`${p}.rateSettings.usd`, "美金 (USD)")} =</span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <input
                      type="number"
                      step="0.01"
                      value={customRates.RMB}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, RMB: Number(e.target.value) || EXCHANGE_RATES.RMB }))}
                      className="w-24 bg-white border-2 border-[#EFE9DB] focus:border-[#F5B859] rounded-xl px-2.5 py-1.5 text-center text-[#8C6D3B] focus:outline-none"
                    />
                    <span>{t(`${p}.rateSettings.rmb`, "人民幣 (RMB)")}</span>
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
                  {t(`${p}.rateSettings.restore`, "復原標準值")}
                </button>
                <button
                  onClick={() => {
                    setShowRateSettings(false)
                    toast.success('匯率更新成功！儲存完畢！🌸')
                  }}
                  className="bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] font-black px-4.5 py-2.5 rounded-xl text-xs active:scale-95 transition-all border border-[#DE9B3E]"
                >
                  {t(`${p}.rateSettings.save`, "確認保存設定")}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ----------------- 彈窗: 記一筆 / 編輯收支交易 ----------------- */}
      {(showAddForm || showCalendarAddForm) && (
        <div className="fixed inset-0 bg-[#4A3B32]/45 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] flex flex-col">
            
            <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD] shrink-0">
              <h3 className="text-md sm:text-base font-black text-[#2E2520]">
                {editingTransactionId ? t(`${p}.addForm.titleEdit`, '✏️ 修改這筆小日記') : t(`${p}.addForm.titleAdd`, '💰 記一筆收支日記')}
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

            <form onSubmit={handleSaveTransaction} className="p-5 space-y-4 text-xs bg-white overflow-y-auto flex-1">
              
              {/* 日期 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">{t(`${p}.addForm.date`, "交易日期")}</label>
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
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">{t(`${p}.addForm.typeLabel`, "這是賺到錢還是花出錢呢？")}</label>
                <div className="grid grid-cols-2 gap-2 bg-[#FCFAF5] p-1.5 rounded-2xl border-2 border-[#EFE9DB]">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all active:scale-95 ${
                      formType === 'incoming' ? 'bg-[#A3B899] border border-[#819976] text-[#2E2520] shadow-sm' : 'text-[#8E7E73] hover:text-[#4A3B32]'
                    }`}
                  >
                    {t(`${p}.addForm.incoming`, "💰 存錢進來 (賺錢啦)")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all active:scale-95 ${
                      formType === 'outgoing' ? 'bg-[#DE9B93] border border-[#CE8078] text-[#2E2520] shadow-sm' : 'text-[#8E7E73] hover:text-[#4A3B32]'
                    }`}
                  >
                    {t(`${p}.addForm.outgoing`, "💸 付錢出去 (花錢囉)")}
                  </button>
                </div>
              </div>

              {/* 屬於哪項生意 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">{t(`${p}.addForm.businessLabel`, "是屬於哪一個小生意的？")}</label>
                <div className="grid grid-cols-2 gap-2">
                  {businesses.map(b => {
                    const isSelected = formBusiness === b.name
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setFormBusiness(b.name)}
                        className={`py-2.5 rounded-xl text-xs font-black border-2 transition-all active:scale-95 ${
                          isSelected
                            ? 'bg-[#F5B859] border-[#DE9B3E] text-[#2E2520] shadow-sm'
                            : 'bg-white border-[#EFE9DB] text-[#8E7E73] hover:border-[#EADFCD]'
                        }`}
                      >
                        {b.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 幣別與金額 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5 flex items-center justify-between">
                  <span>{t(`${p}.addForm.amountLabel`, "填入金額與使用的幣別")}</span>
                  <span className="text-[10px] text-[#8C6D3B] font-mono font-bold bg-[#FAF1DF] border border-[#EADFCD] px-2 py-0.5 rounded-lg">
                    {t(`${p}.addForm.baseUsd`, "大撲滿基底: USD")}
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
                    <p className="text-[10px] text-[#8C6D3B] font-bold">{t(`${p}.addForm.conversionTip`, "🪄 點點下方卡片，金額會神奇自動換算唷：")}</p>
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
                              {isCurrent ? t(`${p}.rateSettings.current`, '目前') : t(`${p}.rateSettings.equivalent`, '折合')} {curr}
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
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-black text-[#4A3B32]">{t(`${p}.addForm.categoryLabel`, "這是屬於哪一項收支呢？")}</label>
                  <button
                    type="button"
                    onClick={() => setShowAddCategoryInline(!showAddCategoryInline)}
                    className="text-[10px] text-[#8C6D3B] font-black hover:text-[#2E2520] underline transition-colors"
                  >
                    {showAddCategoryInline ? t(`${p}.addForm.chooseExisting`, '📖 選擇現有項目') : t(`${p}.addForm.addNewCategory`, '➕ 新增收支項目')}
                  </button>
                </div>

                {showAddCategoryInline ? (
                  <div className="flex gap-2 bg-[#FCFAF5] p-2.5 rounded-2xl border-2 border-[#EADFCD] animate-in fade-in slide-in-from-top-1 duration-150">
                    <input
                      type="text"
                      placeholder={t(`${p}.addForm.newCategoryPlaceholder`, "例如: 買包裝紙 📄")}
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                      className="flex-1 bg-white border border-[#EFE9DB] rounded-xl px-2.5 py-1 text-xs text-[#4A3B32] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomCategory}
                      className="bg-[#A3B899] hover:bg-[#8EAC90] text-[#2E2520] font-black px-3 py-1 rounded-xl text-[10px]"
                    >
                      {t(`${p}.addForm.addBtn`, "新增項目")}
                    </button>
                  </div>
                ) : (
                  <select
                    value={formLabel}
                    onChange={(e) => setFormLabel(e.target.value as string)}
                    className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold"
                  >
                    {getCategoriesForBusiness(formBusiness, formType).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                )}
              </div>

              {/* 描述/備註 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">{t(`${p}.addForm.descLabel`, "寫下一點好記的小筆記 (例: 特斯拉載客一星期的租費)")}</label>
                <input
                  type="text"
                  required
                  placeholder={t(`${p}.addForm.descPlaceholder`, "寫下一點簡單的小日記吧...")}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold placeholder-[#A8988D]"
                />
              </div>

              {/* 支付方式 */}
              <div>
                <label className="block text-xs font-black text-[#4A3B32] mb-1.5">{t(`${p}.addForm.paymentMethodLabel`, "這筆錢是怎麼交易的？")}</label>
                <select
                  value={formPaymentMethod}
                  onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                  className="w-full bg-[#FCFAF5] border-2 border-[#EFE9DB] rounded-2xl px-3 py-2.5 text-sm text-[#4A3B32] focus:outline-none focus:border-[#F5B859] font-bold"
                >
                  <option value="銀行轉帳">{t(`${p}.addForm.paymentMethods.銀行轉帳`, '銀行轉帳')}</option>
                  <option value="現金">{t(`${p}.addForm.paymentMethods.現金`, '現金')}</option>
                  <option value="信用卡">{t(`${p}.addForm.paymentMethods.信用卡`, '信用卡')}</option>
                  <option value="微信/支付寶">{t(`${p}.addForm.paymentMethods.微信/支付寶`, '微信/支付寶')}</option>
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
                  {t(`${p}.addForm.cancel`, "取消")}
                </button>
                <button
                  type="submit"
                  className="bg-[#F5B859] hover:bg-[#E5A749] border border-[#DE9B3E] text-[#2E2520] px-6 py-2.5 rounded-2xl text-xs font-black active:scale-95 transition-all shadow-sm"
                >
                  {t(`${p}.addForm.save`, "確認保存這筆紀錄 ✨")}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ----------------- MODAL: 管理小生意項目 (動態 CRUD) ----------------- */}
      {showBusinessManager && (
        <div className="fixed inset-0 bg-[#4A3B32]/45 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FCF9F2] border-2 border-[#EADFCD] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150 max-h-[90vh] flex flex-col">
            
            <div className="bg-[#FAF6EE] px-5 py-4 flex items-center justify-between border-b-2 border-[#EADFCD] shrink-0">
              <h3 className="text-sm sm:text-base font-black text-[#2E2520] flex items-center gap-1.5">
                <Settings className="w-4.5 h-4.5 text-[#8C6D3B] stroke-[2.5]" />
                {t(`${p}.businessManager.title`, "管理我的小生意項目")}
              </h3>
              <button
                onClick={() => {
                  setShowBusinessManager(false)
                  setEditingBizId(null)
                }}
                className="p-1 bg-white hover:bg-[#F3ECE0] rounded-xl border border-[#EADFCD] text-[#8E7E73]"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="p-5 space-y-5 text-xs bg-white overflow-y-auto flex-1">
              
              {/* 新增小生意表單 */}
              <form onSubmit={handleSaveBusiness} className="bg-[#FCFAF5] p-4 rounded-2xl border-2 border-[#EFE9DB] space-y-3 shrink-0">
                <p className="font-black text-[#8C6D3B]">{t(`${p}.businessManager.addNew`, "➕ 開啟一個全新小生意")}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-[10px] text-[#8E7E73] font-bold mb-1">{t(`${p}.businessManager.nameLabel`, "生意名稱 (例如: 烘焙點心)")}</label>
                    <input
                      type="text"
                      placeholder={t(`${p}.businessManager.namePlaceholder`, "烘焙點心")}
                      value={newBizName}
                      onChange={(e) => setNewBizName(e.target.value)}
                      className="w-full bg-white border border-[#EFE9DB] rounded-xl px-2.5 py-1.5 text-xs text-[#4A3B32] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#8E7E73] font-bold mb-1">{t(`${p}.businessManager.emojiLabel`, "圖圖標 Emoji")}</label>
                    <select
                      value={newBizEmoji}
                      onChange={(e) => setNewBizEmoji(e.target.value)}
                      className="w-full bg-white border border-[#EFE9DB] rounded-xl px-2 py-1 text-xs text-[#4A3B32] focus:outline-none cursor-pointer"
                    >
                      <option value="📦">📦 包裝</option>
                      <option value="🅿️">🅿️ 車位</option>
                      <option value="🚗">🚗 汽車</option>
                      <option value="🏠">🏠 房屋</option>
                      <option value="🍰">🍰 甜點</option>
                      <option value="🧸">🧸 玩具</option>
                      <option value="🎨">🎨 畫作</option>
                      <option value="🚲">🚲 單車</option>
                      <option value="🥤">🥤 飲料</option>
                      <option value="💻">💻 電腦</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F5B859] hover:bg-[#E5A749] text-[#2E2520] font-black py-2 rounded-xl text-xs active:scale-95 transition-all shadow-sm border border-[#DE9B3E]"
                >
                  {t(`${p}.businessManager.submit`, "確認打造小生意 🚀")}
                </button>
              </form>

              {/* 現有小生意列表 */}
              <div className="space-y-2.5">
                <p className="font-black text-[#4A3B32]">{t(`${p}.businessManager.currentBusinesses`, "💼 正在經營中的小生意：")}</p>
                <div className="space-y-2">
                  {businesses.map((b) => {
                    const isEditing = editingBizId === b.id
                    const colors = getBusinessStyleByName(b.name)
                    return (
                      <div
                        key={b.id}
                        className="flex items-center justify-between p-3 bg-[#FCFAF5] rounded-xl border border-[#EFE9DB] hover:border-[#F5B859]/50 transition-all gap-3"
                      >
                        {isEditing ? (
                          <div className="flex-1 flex gap-2 items-center">
                            <input
                              type="text"
                              value={editingBizName}
                              onChange={(e) => setEditingBizName(e.target.value)}
                              className="flex-1 bg-white border border-[#EFE9DB] rounded-lg px-2 py-1 text-xs"
                            />
                            <select
                              value={editingBizEmoji}
                              onChange={(e) => setEditingBizEmoji(e.target.value)}
                              className="bg-white border border-[#EFE9DB] rounded-lg px-1.5 py-1 text-xs"
                            >
                              <option value="📦">📦</option>
                              <option value="🅿️">🅿️</option>
                              <option value="🚗">🚗</option>
                              <option value="🏠">🏠</option>
                              <option value="🍰">🍰</option>
                              <option value="🧸">🧸</option>
                              <option value="🎨">🎨</option>
                              <option value="🚲">🚲</option>
                              <option value="🥤">🥤</option>
                              <option value="💻">💻</option>
                            </select>
                            <button
                              onClick={() => handleUpdateBusinessName(b.id, b.name)}
                              className="p-1 bg-[#A3B899] text-[#2E2520] rounded hover:bg-[#8EAC90]"
                            >
                              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                            <button
                              onClick={() => setEditingBizId(null)}
                              className="p-1 bg-white text-[#CE8078] border border-[#EFE9DB] rounded"
                            >
                              <X className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <span className={`w-8 h-8 rounded-lg flex items-center justify-center border font-bold text-base ${colors.bg} ${colors.text} ${colors.border}`}>
                                {b.emoji}
                              </span>
                              <span className="font-black text-sm text-[#2E2520]">{b.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  const nameParts = b.name.split(' ')
                                  const baseName = nameParts.slice(0, -1).join(' ') || b.name
                                  setEditingBizId(b.id)
                                  setEditingBizName(baseName)
                                  setEditingBizEmoji(b.emoji)
                                }}
                                className="p-1.5 bg-white hover:bg-[#F3ECE0] rounded-lg border border-[#EFE9DB] text-[#8E7E73]"
                              >
                                <Edit className="w-3.5 h-3.5 stroke-[2]" />
                              </button>
                              <button
                                onClick={() => handleDeleteBusiness(b.id, b.name)}
                                className="p-1.5 bg-white hover:bg-[#FFF0F0] rounded-lg border border-[#FFE0E0] text-[#CE8078]"
                              >
                                <Trash2 className="w-3.5 h-3.5 stroke-[2]" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

            <div className="bg-[#FCFAF5] px-5 py-3 border-t-2 border-[#EFE9DB] text-right shrink-0">
              <button
                onClick={() => {
                  setShowBusinessManager(false)
                  setEditingBizId(null)
                }}
                className="text-xs text-[#8E7E73] hover:text-[#4A3B32] font-black py-1"
              >
                {t(`${p}.businessManager.close`, "關閉視窗")}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default BookkeepingPage
