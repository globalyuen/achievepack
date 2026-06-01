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
  Building,
  Briefcase,
  Tag,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Sparkles,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  BriefcaseBusiness,
  Coins,
  RefreshCw
} from 'lucide-react'
import { toast } from 'sonner'

// ==========================================
// 類型與資料結構
// ==========================================

export interface RentAsset {
  id: string
  name: string
  type: 'Warehouse' | 'Equipment' | 'Vehicle' | 'License' | 'Other'
  monthlyRate: number
  tenant: string
  status: 'Active' | 'Idle'
  maintenanceCost: number
  createdAt: string
}

export type TransactionLabel =
  // 收入分類 (Incoming Labels)
  | '租金收入'
  | '客製訂單銷售'
  | '資產處置收益'
  | '諮詢規劃收入'
  | '其他現金流入'
  // 支出分類 (Outgoing Labels)
  | '資產日常維護'
  | '辦公水電網費'
  | '員工薪資發放'
  | '原材料採購支出'
  | '物流貨運支出'
  | '企業稅收繳納'
  | '其他現金流出'

export type CurrencyType = 'USD' | 'HKD' | 'RMB'

export interface Transaction {
  id: string
  date: string // YYYY-MM-DD
  amount: number // 結轉基準貨幣額 (Base USD)
  originalAmount: number // 輸入原始金額
  currency: CurrencyType // 輸入原始幣別
  label: TransactionLabel
  assetId?: string // 可選關聯租賃資產
  businessLine: string // 關聯業務板塊 (多業務核算)
  description: string
  refNumber?: string
  paymentMethod: '銀行轉帳' | 'Paypal' | 'Stripe' | '現金支付' | '信用卡'
}

// 預設匯率常量 (可動態對齊)
// 1 USD = 7.8 HKD | 1 USD = 7.25 RMB
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

// 預設業務板塊清冊
const DEFAULT_BUSINESS_LINES = [
  'AchievePack B2B 集團包裝',
  'Pouch.eco 零售袋裝',
  '固定資產與廠房租賃',
  '供應鏈諮詢與方案規劃'
]

// ==========================================
// 高規格歷史模擬數據 (多幣別混合登錄，統一結轉)
// ==========================================

const INITIAL_ASSETS: RentAsset[] = [
  {
    id: 'asset-1',
    name: '華東 A 區中央聯運倉庫',
    type: 'Warehouse',
    monthlyRate: 4500,
    tenant: '極速物流集團 (Fast Logistics)',
    status: 'Active',
    maintenanceCost: 120,
    createdAt: '2025-10-01'
  },
  {
    id: 'asset-2',
    name: '重型凹版製版印刷滾筒設備組 #3',
    type: 'Equipment',
    monthlyRate: 1200,
    tenant: '佳工包裝材料公司 (PouchCraft)',
    status: 'Active',
    maintenanceCost: 80,
    createdAt: '2025-11-15'
  },
  {
    id: 'asset-3',
    name: '豐田重載堆高機 T-100',
    type: 'Vehicle',
    monthlyRate: 600,
    tenant: '領航倉儲物流 (Pack-N-Ship)',
    status: 'Active',
    maintenanceCost: 45,
    createdAt: '2025-12-01'
  },
  {
    id: 'asset-4',
    name: '華南 B 區冷鏈備用倉庫',
    type: 'Warehouse',
    monthlyRate: 3200,
    tenant: '無 (內部升級與升降梯維護中)',
    status: 'Idle',
    maintenanceCost: 850,
    createdAt: '2026-01-10'
  },
  {
    id: 'asset-5',
    name: '環保立體袋結構專利與 IP 授權',
    type: 'License',
    monthlyRate: 1500,
    tenant: '環球綠色零售聯合 (Global Distrib)',
    status: 'Active',
    maintenanceCost: 0,
    createdAt: '2025-08-01'
  }
]

const INITIAL_TRANSACTIONS: Transaction[] = [
  // --- 2026年6月 (當前月份幣別混合數據) ---
  {
    id: 't-jun-1',
    date: '2026-06-02',
    amount: 4500,
    originalAmount: 4500,
    currency: 'USD',
    label: '租金收入',
    assetId: 'asset-1',
    businessLine: '固定資產與廠房租賃',
    description: '華東 A 區倉庫月度租金回籠',
    refNumber: 'INV-2026-0601',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-2',
    date: '2026-06-02',
    amount: 1200,
    originalAmount: 9360,
    currency: 'HKD', // 9360 HKD = 1200 USD
    label: '租金收入',
    assetId: 'asset-2',
    businessLine: '固定資產與廠房租賃',
    description: '印刷滾筒設備組月度租金收訖 (港幣入帳)',
    refNumber: 'INV-2026-0602',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jun-3',
    date: '2026-06-02',
    amount: 600,
    originalAmount: 600,
    currency: 'USD',
    label: '租金收入',
    assetId: 'asset-3',
    businessLine: '固定資產與廠房租賃',
    description: '豐田堆高機 T-100 月租金回籠',
    refNumber: 'INV-2026-0603',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-jun-4',
    date: '2026-06-02',
    amount: 1500,
    originalAmount: 10875,
    currency: 'RMB', // 10875 RMB = 1500 USD
    label: '租金收入',
    assetId: 'asset-5',
    businessLine: '固定資產與廠房租賃',
    description: '環保專利 IP 月度授權金 (人民幣結算)',
    refNumber: 'INV-2026-0605',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-5',
    date: '2026-06-05',
    amount: 18500,
    originalAmount: 18500,
    currency: 'USD',
    label: '客製訂單銷售',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '承接客製化可降解咖啡立體袋 - 5萬個中型生產跑單起算',
    refNumber: 'PO-984402',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-5-b',
    date: '2026-06-08',
    amount: 9800,
    originalAmount: 9800,
    currency: 'USD',
    label: '客製訂單銷售',
    businessLine: 'Pouch.eco 零售袋裝',
    description: 'B2C 官網在線定制小包裝可降解拉鍊袋小批量回籠款',
    refNumber: 'STRIP-9921',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-jun-6',
    date: '2026-06-10',
    amount: 3400,
    originalAmount: 24650,
    currency: 'RMB', // 24650 RMB = 3400 USD
    label: '原材料採購支出',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '採購進口 PBS 可降解顆粒樹脂大貨 (人民幣採購)',
    refNumber: 'VEND-9981',
    paymentMethod: '信用卡'
  },
  {
    id: 't-jun-7',
    date: '2026-06-12',
    amount: 850,
    originalAmount: 6630,
    currency: 'HKD', // 6630 HKD = 850 USD
    label: '資產日常維護',
    assetId: 'asset-4',
    businessLine: '固定資產與廠房租賃',
    description: '華南冷鏈倉庫起降梯檢修維保 (香港商務結算)',
    refNumber: 'MNT-4402',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-jun-8',
    date: '2026-06-15',
    amount: 480,
    originalAmount: 3480,
    currency: 'RMB', // 3480 RMB = 480 USD
    label: '辦公水電網費',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '辦公樓高頻電力、光纖網絡水電費 (人民幣代繳)',
    refNumber: 'UTIL-06',
    paymentMethod: '信用卡'
  },
  
  // --- 2026年5月 ---
  {
    id: 't-may-1',
    date: '2026-05-02',
    amount: 4500,
    originalAmount: 4500,
    currency: 'USD',
    label: '租金收入',
    assetId: 'asset-1',
    businessLine: '固定資產與廠房租賃',
    description: '華東 A 區中央聯運倉庫月度租金回籠',
    refNumber: 'INV-2026-0501',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-2',
    date: '2026-05-02',
    amount: 1200,
    originalAmount: 9360,
    currency: 'HKD',
    label: '租金收入',
    assetId: 'asset-2',
    businessLine: '固定資產與廠房租賃',
    description: '印刷滾筒設備組月度租金回籠',
    refNumber: 'INV-2026-0502',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-may-3',
    date: '2026-05-02',
    amount: 600,
    originalAmount: 600,
    currency: 'USD',
    label: '租金收入',
    assetId: 'asset-3',
    businessLine: '固定資產與廠房租賃',
    description: '豐田堆高機 T-100 月度租金回籠',
    refNumber: 'INV-2026-0503',
    paymentMethod: 'Paypal'
  },
  {
    id: 't-may-4',
    date: '2026-05-02',
    amount: 1500,
    originalAmount: 10875,
    currency: 'RMB',
    label: '租金收入',
    assetId: 'asset-5',
    businessLine: '固定資產與廠房租賃',
    description: '環保立體袋結構專利 IP 授權費回籠',
    refNumber: 'INV-2026-0505',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-5',
    date: '2026-05-12',
    amount: 14200,
    originalAmount: 14200,
    currency: 'USD',
    label: '客製訂單銷售',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '高端手工巧克力外包裝拉鍊袋大貨款項（3萬袋訂單）',
    refNumber: 'PO-421890',
    paymentMethod: '銀行轉帳'
  },
  {
    id: 't-may-5-b',
    date: '2026-05-14',
    amount: 6500,
    originalAmount: 6500,
    currency: 'USD',
    label: '客製訂單銷售',
    businessLine: 'Pouch.eco 零售袋裝',
    description: 'DTC 有機花草茶小批量牛皮紙立體袋銷售款',
    refNumber: 'STRIP-9812',
    paymentMethod: 'Stripe'
  },
  {
    id: 't-may-6',
    date: '2026-05-15',
    amount: 430,
    originalAmount: 3117.5,
    currency: 'RMB',
    label: '辦公水電網費',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '辦公室電力及水費帳單結清',
    refNumber: 'UTIL-05',
    paymentMethod: '信用卡'
  },
  {
    id: 't-may-7',
    date: '2026-05-20',
    amount: 1500,
    originalAmount: 10875,
    currency: 'RMB',
    label: '物流貨運支出',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '批發可回收咖啡袋空運至西雅圖港運雜費結清',
    refNumber: 'FRT-8871',
    paymentMethod: '信用卡'
  },
  {
    id: 't-may-8',
    date: '2026-05-28',
    amount: 6500,
    originalAmount: 50700,
    currency: 'HKD', // 50700 HKD = 6500 USD
    label: '員工薪資發放',
    businessLine: 'AchievePack B2B 集團包裝',
    description: '5月份生產團隊與深圳辦工資 (港幣代發)',
    refNumber: 'PAY-2026-05',
    paymentMethod: '銀行轉帳'
  }
]

// ==========================================
// 主元件實作
// ==========================================

const BookkeepingPage: React.FC = () => {
  // Tabs: dashboard, transactions, calendar, assets, pandl
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'calendar' | 'assets' | 'pandl'>('dashboard')

  // 核心 State 綁定 LocalStorage
  const [assets, setAssets] = useState<RentAsset[]>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_assets')
    return saved ? JSON.parse(saved) : INITIAL_ASSETS
  })

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_transactions')
    return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS
  })

  // 多業務板塊動態自訂列表
  const [businessLines, setBusinessLines] = useState<string[]>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_businesses')
    return saved ? JSON.parse(saved) : DEFAULT_BUSINESS_LINES
  })

  // 匯率自訂設定 state (NEW FEATURE: Exchange rate adjustment)
  const [customRates, setCustomRates] = useState<Record<CurrencyType, number>>(() => {
    const saved = localStorage.getItem('achievepack_bookkeeping_rates')
    return saved ? JSON.parse(saved) : EXCHANGE_RATES
  })
  
  const [newBusinessName, setNewBusinessName] = useState('')
  const [showAddBusiness, setShowAddBusiness] = useState(false)
  const [showRateSettings, setShowRateSettings] = useState(false)

  // 同步寫入 LocalStorage
  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_assets', JSON.stringify(assets))
  }, [assets])

  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_transactions', JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_businesses', JSON.stringify(businessLines))
  }, [businessLines])

  useEffect(() => {
    localStorage.setItem('achievepack_bookkeeping_rates', JSON.stringify(customRates))
  }, [customRates])

  // 新增自訂業務板塊標籤
  const handleAddBusinessLine = (e: React.FormEvent) => {
    e.preventDefault()
    const name = newBusinessName.trim()
    if (!name) {
      toast.error('請輸入業務板塊名稱')
      return
    }
    if (businessLines.includes(name)) {
      toast.error('該業務板塊已存在')
      return
    }

    setBusinessLines(prev => [...prev, name])
    setNewBusinessName('')
    setShowAddBusiness(false)
    toast.success(`自訂業務板塊「${name}」建立成功！`)
  }

  // 總帳明細篩選器 state
  const [ledgerSearch, setLedgerSearch] = useState('')
  const [ledgerTypeFilter, setLedgerTypeFilter] = useState<'all' | 'incoming' | 'outgoing'>('all')
  const [ledgerLabelFilter, setLedgerLabelFilter] = useState<string>('all')
  const [ledgerAssetFilter, setLedgerAssetFilter] = useState<string>('all')
  const [ledgerBusinessFilter, setLedgerBusinessFilter] = useState<string>('all') 
  const [ledgerCurrencyFilter, setLedgerCurrencyFilter] = useState<string>('all') // 幣別過濾

  // 自訂日期篩選
  const [ledgerDateStart, setLedgerDateStart] = useState('')
  const [ledgerDateEnd, setLedgerDateEnd] = useState('')

  // 收支日曆 state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)) // 起始設定於2026年6月
  const [selectedDayDetail, setSelectedDayDetail] = useState<{ dayString: string; items: Transaction[] } | null>(null)
  const [showCalendarAddForm, setShowCalendarAddForm] = useState(false)

  // 收支登錄表單 state
  const [showAddForm, setShowAddForm] = useState(false)
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0])
  const [formAmount, setFormAmount] = useState('') // 原始金額輸入
  const [formCurrency, setFormCurrency] = useState<CurrencyType>('USD') // 幣別選擇 (NEW)
  const [formType, setFormType] = useState<'incoming' | 'outgoing'>('incoming')
  const [formLabel, setFormLabel] = useState<TransactionLabel>('租金收入')
  const [formAssetId, setFormAssetId] = useState('')
  const [formBusinessLine, setFormBusinessLine] = useState('AchievePack B2B 集團包裝')
  const [formDescription, setFormDescription] = useState('')
  const [formRefNumber, setFormRefNumber] = useState('')
  const [formPaymentMethod, setFormPaymentMethod] = useState<Transaction['paymentMethod']>('銀行轉帳')
  const [editingTransactionId, setEditingTransactionId] = useState<string | null>(null)

  // 資產管理表單 state
  const [showAssetForm, setShowAssetForm] = useState(false)
  const [assetName, setAssetName] = useState('')
  const [assetType, setAssetType] = useState<RentAsset['type']>('Warehouse')
  const [assetRate, setAssetRate] = useState('')
  const [assetTenant, setAssetTenant] = useState('')
  const [assetStatus, setAssetStatus] = useState<RentAsset['status']>('Active')
  const [assetMaintenanceCost, setAssetMaintenanceCost] = useState('')
  const [editingAssetId, setEditingAssetId] = useState<string | null>(null)

  // 損益表查詢年度、期間與業務板塊篩選器
  const [plYear, setPlYear] = useState('2026')
  const [plQuarter, setPlQuarter] = useState<'all' | 'Q1' | 'Q2' | 'Q3' | 'Q4'>('all')
  const [plBusinessFilter, setPlBusinessFilter] = useState<string>('all') 

  // 重置表單輔助函式
  const resetTransactionForm = () => {
    setFormDate(new Date().toISOString().split('T')[0])
    setFormAmount('')
    setFormCurrency('USD')
    setFormType('incoming')
    setFormLabel('租金收入')
    setFormAssetId('')
    setFormBusinessLine(businessLines[0] || 'AchievePack B2B 集團包裝')
    setFormDescription('')
    setFormRefNumber('')
    setFormPaymentMethod('銀行轉帳')
    setEditingTransactionId(null)
  }

  const resetAssetForm = () => {
    setAssetName('')
    setAssetType('Warehouse')
    setAssetRate('')
    setAssetTenant('')
    setAssetStatus('Active')
    setAssetMaintenanceCost('')
    setEditingAssetId(null)
  }

  // 儲存或更新收支記錄 (支援多幣別實時轉換基準貨幣)
  const handleSaveTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formAmount || isNaN(Number(formAmount)) || Number(formAmount) <= 0) {
      toast.error('請輸入有效的交易金額')
      return
    }
    if (!formDescription.trim()) {
      toast.error('請輸入交易描述')
      return
    }

    const origAmt = Number(formAmount)
    const rate = customRates[formCurrency] || 1.0
    // 結轉換算 Base USD Amount
    const baseUsdAmt = origAmt / rate

    const tData: Transaction = {
      id: editingTransactionId || `t-${Date.now()}`,
      date: formDate,
      amount: baseUsdAmt, // 結轉儲存 USD 金額，用作報表加總
      originalAmount: origAmt, // 原始輸入金額
      currency: formCurrency, // 原始幣別
      label: formLabel,
      assetId: formAssetId || undefined,
      businessLine: formBusinessLine,
      description: formDescription.trim(),
      refNumber: formRefNumber.trim() || undefined,
      paymentMethod: formPaymentMethod
    }

    if (editingTransactionId) {
      setTransactions(prev => prev.map(t => (t.id === editingTransactionId ? tData : t)))
      toast.success('收支流水修改成功！')
    } else {
      setTransactions(prev => [tData, ...prev])
      toast.success('收支流水登錄成功！')
    }

    setShowAddForm(false)
    setShowCalendarAddForm(false)
    resetTransactionForm()
  }

  // 啟動編輯收支流水
  const startEditTransaction = (t: Transaction) => {
    setEditingTransactionId(t.id)
    setFormDate(t.date)
    // 編輯時載入原始輸入金額與原始幣別，而非已經換算的 USD
    setFormAmount(String(t.originalAmount || t.amount))
    setFormCurrency(t.currency || 'USD')
    setFormType(t.type)
    setFormLabel(t.label)
    setFormAssetId(t.assetId || '')
    setFormBusinessLine(t.businessLine || businessLines[0])
    setFormDescription(t.description)
    setFormRefNumber(t.refNumber || '')
    setFormPaymentMethod(t.paymentMethod)
    setShowAddForm(true)
  }

  // 刪除收支流水
  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('確定要永久刪除此筆收支流水記錄嗎？')) {
      setTransactions(prev => prev.filter(t => t.id !== id))
      toast.success('收支記錄已成功刪除')
      setSelectedDayDetail(null)
    }
  }

  // 建立或更新租賃資產
  const handleSaveAsset = (e: React.FormEvent) => {
    e.preventDefault()
    if (!assetName.trim()) {
      toast.error('請輸入租賃資產名稱')
      return
    }
    if (!assetRate || isNaN(Number(assetRate))) {
      toast.error('請輸入有效的約定月租金')
      return
    }

    const aData: RentAsset = {
      id: editingAssetId || `asset-${Date.now()}`,
      name: assetName.trim(),
      type: assetType,
      monthlyRate: Number(assetRate),
      tenant: assetTenant.trim() || '無 (閒置招租中)',
      status: assetStatus,
      maintenanceCost: Number(assetMaintenanceCost) || 0,
      createdAt: new Date().toISOString().split('T')[0]
    }

    if (editingAssetId) {
      setAssets(prev => prev.map(a => (a.id === editingAssetId ? aData : a)))
      toast.success('租賃資產資料更新成功！')
    } else {
      setAssets(prev => [...prev, aData])
      toast.success('新增租賃資產項目成功！')
    }

    setShowAssetForm(false)
    resetAssetForm()
  }

  // 啟動編輯租賃資產資料
  const startEditAsset = (a: RentAsset) => {
    setEditingAssetId(a.id)
    setAssetName(a.name)
    setAssetType(a.type)
    setAssetRate(String(a.monthlyRate))
    setAssetTenant(a.tenant)
    setAssetStatus(a.status)
    setAssetMaintenanceCost(String(a.maintenanceCost))
    setShowAssetForm(true)
  }

  // 刪除租賃資產
  const handleDeleteAsset = (id: string) => {
    if (window.confirm('確認要刪除此租賃資產嗎？刪除後，過往關聯此資產的交易流水將保留金額，但會失去資產標籤關聯。')) {
      setAssets(prev => prev.filter(a => a.id !== id))
      toast.success('租賃資產已成功移除')
    }
  }

  // 流向切換時，自動給定預設的收支類別
  useEffect(() => {
    if (formType === 'incoming') {
      setFormLabel('租金收入')
    } else {
      setFormLabel('資產日常維護')
    }
  }, [formType])

  // 實時計算匯率預覽額 (基於 formAmount 與 formCurrency)
  const convertedPreviewAmount = useMemo(() => {
    if (!formAmount || isNaN(Number(formAmount))) return 0
    const amt = Number(formAmount)
    const rate = customRates[formCurrency] || 1.0
    return amt / rate
  }, [formAmount, formCurrency, customRates])

  // 實時跨幣別折算對照 (USD, HKD, RMB)
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

  // ==========================================
  // 動態指標與財務數據計算 (多幣別統一基準 USD 核算)
  // ==========================================

  // 全局收支累積數據
  const stats = useMemo(() => {
    let inflow = 0
    let outflow = 0
    transactions.forEach(t => {
      if (t.type === 'incoming') inflow += t.amount
      else outflow += t.amount
    })
    const net = inflow - outflow
    const margin = inflow > 0 ? (net / inflow) * 100 : 0
    const activeAssetsCount = assets.filter(a => a.status === 'Active').length

    return {
      inflow,
      outflow,
      net,
      margin,
      activeAssetsCount
    }
  }, [transactions, assets])

  // 計算每個獨立資產的累計淨收益
  const assetNetYields = useMemo(() => {
    const yields: Record<string, number> = {}
    assets.forEach(a => {
      const linkedTransactions = transactions.filter(t => t.assetId === a.id)
      let income = 0
      let expense = a.maintenanceCost

      linkedTransactions.forEach(t => {
        if (t.type === 'incoming') income += t.amount
        else expense += t.amount
      })
      yields[a.id] = income - expense
    })
    return yields
  }, [transactions, assets])

  // 各業務板塊的獲利與毛利分析比較 (用於儀表盤展示)
  const businessProfitStats = useMemo(() => {
    const bStats: Record<string, { income: number; expense: number; net: number }> = {}
    
    businessLines.forEach(b => {
      bStats[b] = { income: 0, expense: 0, net: 0 }
    })

    transactions.forEach(t => {
      const bName = t.businessLine || '未分類板塊'
      if (!bStats[bName]) {
        bStats[bName] = { income: 0, expense: 0, net: 0 }
      }
      if (t.type === 'incoming') {
        bStats[bName].income += t.amount
      } else {
        bStats[bName].expense += t.amount
      }
      bStats[bName].net = bStats[bName].income - bStats[bName].expense
    })

    return bStats
  }, [transactions, businessLines])

  // 總帳明細過濾後的交易流水
  const filteredLedger = useMemo(() => {
    return transactions.filter(t => {
      const matchSearch =
        t.description.toLowerCase().includes(ledgerSearch.toLowerCase()) ||
        (t.refNumber && t.refNumber.toLowerCase().includes(ledgerSearch.toLowerCase()))

      const matchType = ledgerTypeFilter === 'all' || t.type === ledgerTypeFilter
      const matchLabel = ledgerLabelFilter === 'all' || t.label === ledgerLabelFilter
      const matchAsset = ledgerAssetFilter === 'all' || t.assetId === ledgerAssetFilter
      const matchBusiness = ledgerBusinessFilter === 'all' || t.businessLine === ledgerBusinessFilter
      const matchCurrency = ledgerCurrencyFilter === 'all' || (t.currency || 'USD') === ledgerCurrencyFilter

      let matchDate = true
      if (ledgerDateStart) {
        matchDate = matchDate && t.date >= ledgerDateStart
      }
      if (ledgerDateEnd) {
        matchDate = matchDate && t.date <= ledgerDateEnd
      }

      return matchSearch && matchType && matchLabel && matchAsset && matchBusiness && matchCurrency && matchDate
    })
  }, [transactions, ledgerSearch, ledgerTypeFilter, ledgerLabelFilter, ledgerAssetFilter, ledgerBusinessFilter, ledgerCurrencyFilter, ledgerDateStart, ledgerDateEnd])

  // P&L 財務報表專用科目歸檔與拆解 (支援特定業務板塊、基準 USD 計算)
  const plReport = useMemo(() => {
    let totalRevenue = 0
    let totalCOGS = 0 
    let totalOpEx = 0 

    const breakdown: Record<TransactionLabel, number> = {
      '租金收入': 0,
      '客製訂單銷售': 0,
      '資產處置收益': 0,
      '諮詢規劃收入': 0,
      '其他現金流入': 0,
      '資產日常維護': 0,
      '辦公水電網費': 0,
      '員工薪資發放': 0,
      '原材料採購支出': 0,
      '物流貨運支出': 0,
      '企業稅收繳納': 0,
      '其他現金流出': 0
    }

    transactions.forEach(t => {
      const tYear = t.date.split('-')[0]
      const tMonth = Number(t.date.split('-')[1])

      if (tYear !== plYear) return

      if (plQuarter !== 'all') {
        const qMonths: Record<'Q1' | 'Q2' | 'Q3' | 'Q4', number[]> = {
          Q1: [1, 2, 3],
          Q2: [4, 5, 6],
          Q3: [7, 8, 9],
          Q4: [10, 11, 12]
        }
        if (!qMonths[plQuarter].includes(tMonth)) return
      }

      if (plBusinessFilter !== 'all' && t.businessLine !== plBusinessFilter) return

      breakdown[t.label] += t.amount

      if (t.type === 'incoming') {
        totalRevenue += t.amount
      } else {
        if (t.label === '原材料採購支出' || t.label === '物流貨運支出') {
          totalCOGS += t.amount
        } else {
          totalOpEx += t.amount
        }
      }
    })

    const grossProfit = totalRevenue - totalCOGS
    const grossMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0
    const netProfit = totalRevenue - totalCOGS - totalOpEx
    const netMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0

    return {
      revenue: totalRevenue,
      cogs: totalCOGS,
      opex: totalOpEx,
      grossProfit,
      grossMargin,
      netProfit,
      netMargin,
      breakdown
    }
  }, [transactions, plYear, plQuarter, plBusinessFilter])

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
      let inflow = 0
      let outflow = 0

      dayItems.forEach(t => {
        if (t.type === 'incoming') inflow += t.amount
        else outflow += t.amount
      })

      days.push({
        day,
        dateString,
        items: dayItems,
        inflow,
        outflow
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col font-sans">
      {/* ----------------- 頂部導覽列 ----------------- */}
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/ctrl-x9k7m"
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-wide">多幣別分板塊企業記帳與損益系統</h1>
                  <p className="text-xs text-gray-400 font-mono">支援港幣 HKD、人民幣 RMB、美金 USD • 實時匯率自動結轉</p>
                </div>
              </div>
            </div>

            {/* 快速新建功能 */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowRateSettings(true)}
                className="bg-gray-850 hover:bg-gray-750 text-yellow-400 text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-700/80 transition-all flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4 animate-spin-slow" />
                調整幣別匯率
              </button>
              <button
                onClick={() => {
                  setShowAddBusiness(true)
                }}
                className="bg-gray-850 hover:bg-gray-750 text-emerald-400 text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-700/80 transition-all flex items-center gap-2"
              >
                <BriefcaseBusiness className="w-4 h-4" />
                業務板塊管理
              </button>
              <button
                onClick={() => {
                  resetTransactionForm()
                  setShowAddForm(true)
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4" />
                登錄收支流水
              </button>
              <button
                onClick={() => {
                  resetAssetForm()
                  setShowAssetForm(true)
                }}
                className="bg-gray-700 hover:bg-gray-650 text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-gray-600 transition-all flex items-center gap-2"
              >
                <Building className="w-4 h-4" />
                新設租賃資產
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------- 數據卡片看板 ----------------- */}
      <section className="bg-gray-900/40 border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Exchange rate quick bar (NEW) */}
          <div className="mb-4 flex flex-wrap gap-4 text-xs bg-gray-850 p-3 rounded-xl border border-gray-800/80 text-gray-400 font-mono items-center">
            <span className="font-sans font-bold text-gray-300">📊 當前基準折算匯率：</span>
            <span>1 USD = <strong>{customRates.USD} USD</strong></span>
            <span>•</span>
            <span>1 USD = <strong>{customRates.HKD} HKD</strong></span>
            <span>•</span>
            <span>1 USD = <strong>{customRates.RMB} RMB</strong></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 累計淨收益 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all group">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">折合集團淨收益總額 (USD)</p>
                <span className={`p-1.5 rounded-lg text-xs font-semibold ${stats.net >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  {stats.net >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                </span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight mt-2 font-mono">
                ${stats.net.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                <Percent className="w-3.5 h-3.5 text-green-400" />
                <span>綜合淨利率: <strong className="text-gray-200">{stats.margin.toFixed(1)}%</strong></span>
              </div>
            </div>

            {/* 現金流入 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-green-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">現金總流入 (Revenues)</p>
                <span className="p-1.5 rounded-lg bg-green-500/10 text-green-400 text-xs">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-green-400 tracking-tight mt-2 font-mono">
                +${stats.inflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">各項幣別收入統一換算為 USD 加總</p>
            </div>

            {/* 現金流出 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-red-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">現金總流出 (OpEx & COGS)</p>
                <span className="p-1.5 rounded-lg bg-red-500/10 text-red-400 text-xs">
                  <TrendingDown className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-red-400 tracking-tight mt-2 font-mono">
                -${stats.outflow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-xs text-gray-500 mt-2">各項幣別開支統一換算為 USD 加總</p>
            </div>

            {/* 業務板塊數量 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-400">營運中業務板塊</p>
                <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 text-xs">
                  <BriefcaseBusiness className="w-4 h-4" />
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-400 tracking-tight mt-2 font-mono">
                {businessLines.length} <span className="text-sm text-gray-400 font-normal">個板塊單元</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">各業務獨立折算財務報表</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 主標籤分頁控制 ----------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="flex border-b border-gray-700/80 mb-8 overflow-x-auto gap-2 scrollbar-none">
          {[
            { id: 'dashboard', label: '分板塊現金看板', icon: Sparkles },
            { id: 'transactions', label: '收支總帳明細 (支援多幣別審計)', icon: Briefcase },
            { id: 'calendar', label: '收支日曆視圖', icon: Calendar },
            { id: 'assets', label: '租賃資產管理', icon: Building },
            { id: 'pandl', label: '財務折算損益表 (P&L)', icon: FileSpreadsheet }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-400 bg-green-500/5'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ----------------- 標籤頁: 儀表盤 ----------------- */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* 多業務對比概覽列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {businessLines.map(b => {
                const bProfit = businessProfitStats[b] || { income: 0, expense: 0, net: 0 }
                const isNetPositive = bProfit.net >= 0
                return (
                  <div key={b} className="bg-gray-850 border border-gray-800 rounded-2xl p-5 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400 font-bold bg-gray-800 px-2 py-0.5 rounded font-sans">業務單元</span>
                        <Coins className={`w-4 h-4 ${isNetPositive ? 'text-green-400' : 'text-red-400'}`} />
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-wide truncate">{b}</h4>
                    </div>
                    <div className="mt-4 space-y-1.5 text-xs font-mono">
                      <div className="flex justify-between text-gray-400">
                        <span>流入 (營收)：</span>
                        <span className="text-green-400">+${bProfit.income.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>流出 (費用)：</span>
                        <span className="text-red-400">-${bProfit.expense.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD</span>
                      </div>
                      <div className="flex justify-between pt-1.5 border-t border-gray-800">
                        <span className="font-bold text-gray-300 font-sans">折合淨利：</span>
                        <span className={`font-bold ${isNetPositive ? 'text-green-400' : 'text-red-400'}`}>
                          {isNetPositive ? '+' : '-'}${Math.abs(bProfit.net).toLocaleString(undefined, { maximumFractionDigits: 0 })} USD
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 資產效益與比例圖表 */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* 左側: 資產淨收益細分錶 */}
              <div className="lg:col-span-2 bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6">
                <h4 className="text-md font-bold text-white mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" />
                  固定租賃資產收益表現 (累計淨利折合 USD)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700/60 text-gray-400">
                        <th className="pb-3 font-semibold">資產名稱項目</th>
                        <th className="pb-3 font-semibold">承租客戶</th>
                        <th className="pb-3 font-semibold">營運狀態</th>
                        <th className="pb-3 font-semibold text-right">定價月租</th>
                        <th className="pb-3 font-semibold text-right">累計淨收益 (Base USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/60 font-medium">
                      {assets.map(asset => {
                        const netYield = assetNetYields[asset.id] || 0
                        return (
                          <tr key={asset.id} className="hover:bg-gray-800/30 transition-all group">
                            <td className="py-4">
                              <p className="text-white font-bold group-hover:text-green-400 transition-colors">{asset.name}</p>
                              <p className="text-xs text-gray-400 font-mono mt-0.5">{asset.type === 'Warehouse' ? '倉庫房產' : asset.type === 'Equipment' ? '重型機具' : asset.type === 'Vehicle' ? '物流配送車輛' : '專利授權'} • ID: {asset.id}</p>
                            </td>
                            <td className="py-4 text-gray-300">{asset.tenant}</td>
                            <td className="py-4">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                                asset.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                              }`}>
                                {asset.status === 'Active' ? '營運收租中' : '維護或空置'}
                              </span>
                            </td>
                            <td className="py-4 text-right text-gray-300 font-mono">${asset.monthlyRate}/月</td>
                            <td className={`py-4 text-right font-mono font-bold ${netYield >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {netYield >= 0 ? '+' : '-'}${Math.abs(netYield).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 右側: 橫向佔比條 */}
              <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-6">
                <h4 className="text-md font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-green-400" />
                  現金收支科目配比分析
                </h4>
                
                {/* 收入來源配比 */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">現金流入來源排行 (USD)</p>
                  {(() => {
                    const mix: Record<string, number> = {}
                    let total = 0
                    transactions.filter(t => t.type === 'incoming').forEach(t => {
                      mix[t.label] = (mix[t.label] || 0) + t.amount
                      total += t.amount
                    })
                    return Object.entries(mix)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 4)
                      .map(([lbl, val]) => {
                        const pct = total > 0 ? (val / total) * 100 : 0
                        return (
                          <div key={lbl} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-gray-300">{lbl}</span>
                              <span className="text-green-400 font-mono">${val.toLocaleString(undefined, { maximumFractionDigits: 0 })} ({pct.toFixed(0)}%)</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700/40 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: `${pct}%` }}></div>
                            </div>
                          </div>
                        )
                      })
                  })()}
                </div>

                {/* 支出去向配比 */}
                <div className="space-y-4 pt-4 border-t border-gray-800">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">現金流出分類排行 (USD)</p>
                  {(() => {
                    const mix: Record<string, number> = {}
                    let total = 0
                    transactions.filter(t => t.type === 'outgoing').forEach(t => {
                      mix[t.label] = (mix[t.label] || 0) + t.amount
                      total += t.amount
                    })
                    return Object.entries(mix)
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, 4)
                      .map(([lbl, val]) => {
                        const pct = total > 0 ? (val / total) * 100 : 0
                        return (
                          <div key={lbl} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-semibold">
                              <span className="text-gray-300">{lbl}</span>
                              <span className="text-red-400 font-mono">${val.toLocaleString(undefined, { maximumFractionDigits: 0 })} ({pct.toFixed(0)}%)</span>
                            </div>
                            <div className="h-2 w-full bg-gray-700/40 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full" style={{ width: `${pct}%` }}></div>
                            </div>
                          </div>
                        )
                      })
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 標籤頁: 收支總帳明細 (多幣別混合審計) ----------------- */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            {/* 過濾控制面板 */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {/* 關鍵字搜尋 */}
                <div className="relative lg:col-span-1">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={ledgerSearch}
                    onChange={(e) => setLedgerSearch(e.target.value)}
                    placeholder="搜尋描述、發票參考編號..."
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                {/* 流向過濾 */}
                <div>
                  <select
                    value={ledgerTypeFilter}
                    onChange={(e) => setLedgerTypeFilter(e.target.value as any)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  >
                    <option value="all">所有收支方向</option>
                    <option value="incoming">現金流入 (+)</option>
                    <option value="outgoing">現金流出 (-)</option>
                  </select>
                </div>

                {/* 業務板塊過濾 */}
                <div>
                  <select
                    value={ledgerBusinessFilter}
                    onChange={(e) => setLedgerBusinessFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none text-emerald-400 font-semibold"
                  >
                    <option value="all">所有業務板塊</option>
                    {businessLines.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* 原始幣別篩選 (NEW FILTER) */}
                <div>
                  <select
                    value={ledgerCurrencyFilter}
                    onChange={(e) => setLedgerCurrencyFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-yellow-400 font-semibold focus:outline-none"
                  >
                    <option value="all">所有交易幣別</option>
                    <option value="USD">美金 (USD)</option>
                    <option value="HKD">港幣 (HKD)</option>
                    <option value="RMB">人民幣 (RMB)</option>
                  </select>
                </div>

                {/* 類別篩選 */}
                <div>
                  <select
                    value={ledgerLabelFilter}
                    onChange={(e) => setLedgerLabelFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  >
                    <option value="all">所有收支類別科目</option>
                    <option value="租金收入">租金收入</option>
                    <option value="客製訂單銷售">客製訂單銷售</option>
                    <option value="資產處置收益">資產處置收益</option>
                    <option value="諮詢規劃收入">諮詢規劃收入</option>
                    <option value="其他現金流入">其他現金流入</option>
                    <option value="資產日常維護">資產日常維護</option>
                    <option value="辦公水電網費">辦公水電網費</option>
                    <option value="員工薪資發放">員工薪資發放</option>
                    <option value="原材料採購支出">原材料採購支出</option>
                    <option value="物流貨運支出">物流貨運支出</option>
                    <option value="企業稅收繳納">企業稅收繳納</option>
                    <option value="其他現金流出">其他現金流出</option>
                  </select>
                </div>

                {/* 關聯租賃資產篩選 */}
                <div>
                  <select
                    value={ledgerAssetFilter}
                    onChange={(e) => setLedgerAssetFilter(e.target.value)}
                    className="w-full bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  >
                    <option value="all">所有關聯租賃資產</option>
                    {assets.map(a => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 日期過濾 */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-800">
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-green-400" />
                  自訂交易區間篩選：
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={ledgerDateStart}
                    onChange={(e) => setLedgerDateStart(e.target.value)}
                    className="bg-gray-900/60 border border-gray-600 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                  <span className="text-gray-500 text-xs">至</span>
                  <input
                    type="date"
                    value={ledgerDateEnd}
                    onChange={(e) => setLedgerDateEnd(e.target.value)}
                    className="bg-gray-900/60 border border-gray-600 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                </div>
                {(ledgerSearch || ledgerTypeFilter !== 'all' || ledgerLabelFilter !== 'all' || ledgerAssetFilter !== 'all' || ledgerBusinessFilter !== 'all' || ledgerCurrencyFilter !== 'all' || ledgerDateStart || ledgerDateEnd) && (
                  <button
                    onClick={() => {
                      setLedgerSearch('')
                      setLedgerTypeFilter('all')
                      setLedgerLabelFilter('all')
                      setLedgerAssetFilter('all')
                      setLedgerBusinessFilter('all')
                      setLedgerCurrencyFilter('all')
                      setLedgerDateStart('')
                      setLedgerDateEnd('')
                    }}
                    className="text-xs text-red-400 hover:text-red-300 font-semibold"
                  >
                    清除所有過濾篩選條件
                  </button>
                )}
              </div>
            </div>

            {/* 收支明細交易統計 */}
            <div className="flex justify-between items-center text-sm text-gray-400">
              <p>共計顯示符合篩選條件的交易記錄共 <strong className="text-white">{filteredLedger.length}</strong> 筆</p>
            </div>

            {/* 流水明細列表 */}
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl overflow-hidden">
              <div className="divide-y divide-gray-800/60">
                {filteredLedger.length === 0 ? (
                  <div className="py-20 text-center text-gray-500 space-y-3">
                    <Briefcase className="w-12 h-12 mx-auto text-gray-600" />
                    <p className="text-lg font-semibold">未搜尋到符合條件的收支記錄</p>
                    <p className="text-sm">請嘗試調整篩選條件或點擊清除過濾條件</p>
                  </div>
                ) : (
                  filteredLedger.map(t => {
                    const linkedAsset = assets.find(a => a.id === t.assetId)
                    const tCurrency = t.currency || 'USD'
                    const tOriginalAmount = t.originalAmount || t.amount

                    return (
                      <div key={t.id} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-gray-800/25 transition-all">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-xl mt-0.5 ${t.type === 'incoming' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                            {t.type === 'incoming' ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{t.description}</p>
                            <div className="flex flex-wrap items-center gap-3.5 text-xs text-gray-400 mt-1 font-mono">
                              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 font-sans">
                                <Briefcase className="w-3.5 h-3.5" />
                                {t.businessLine || '未分類板塊'}
                              </span>
                              <span className="bg-gray-700/50 px-2.5 py-0.5 rounded text-gray-300 flex items-center gap-1 font-sans">
                                <Tag className="w-3.5 h-3.5" />
                                {t.label}
                              </span>
                              <span>•</span>
                              <span>交易日期: {t.date}</span>
                              {t.refNumber && (
                                <>
                                  <span>•</span>
                                  <span>參考發票號: {t.refNumber}</span>
                                </>
                              )}
                              <span>•</span>
                              <span>管道: {t.paymentMethod}</span>
                              {linkedAsset && (
                                <>
                                  <span>•</span>
                                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                    <Building className="w-3.5 h-3.5" />
                                    {linkedAsset.name}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* ORIGINAL & BASE USD DOUBLE AMOUNT RENDER (NEW FEATURE) */}
                        <div className="flex items-center gap-5 self-end sm:self-center font-mono text-right">
                          <div>
                            <p className={`text-md font-bold ${t.type === 'incoming' ? 'text-green-400' : 'text-red-400'}`}>
                              {t.type === 'incoming' ? '+' : '-'}{CURRENCY_SYMBOLS[tCurrency]}{tOriginalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </p>
                            {tCurrency !== 'USD' && (
                              <p className="text-[10px] text-gray-500">
                                折合: ${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
                              </p>
                            )}
                          </div>

                          <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 transition-all">
                            <button
                              onClick={() => startEditTransaction(t)}
                              className="p-2 hover:bg-gray-700/60 rounded-lg text-gray-300 hover:text-white"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteTransaction(t.id)}
                              className="p-2 hover:bg-red-950/40 rounded-lg text-red-400 hover:text-red-300"
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

        {/* ----------------- 標籤頁: 收支日曆視圖 ----------------- */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-400" />
                  月度企業現金收支日曆格網 (折合基準 USD)
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  每日收到的收入（綠色）與開支費用流出（紅色）。點擊任何日期 block 即可查看當日明細。
                </p>
              </div>

              {/* 月度切換控制 */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevMonth}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-md font-bold text-white font-mono w-40 text-center select-none">
                  {monthYearLabel}
                </span>
                <button
                  onClick={nextMonth}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 日曆網格 */}
            <div className="bg-gray-850 border border-gray-750 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-7 bg-gray-800/80 border-b border-gray-700/80 text-center py-3 text-xs font-bold text-gray-400 tracking-wider">
                <div>星期日</div>
                <div>星期一</div>
                <div>星期二</div>
                <div>星期三</div>
                <div>星期四</div>
                <div>星期五</div>
                <div>星期六</div>
              </div>

              <div className="grid grid-cols-7 bg-gray-900/20 divide-x divide-y divide-gray-800/80">
                {calendarDays.map((dayData, idx) => {
                  if (!dayData) {
                    return <div key={`empty-${idx}`} className="min-h-[120px] bg-gray-950/20"></div>
                  }

                  const { day, dateString, inflow, outflow, items } = dayData
                  const isTodayString = new Date().toISOString().split('T')[0] === dateString

                  return (
                    <div
                      key={dateString}
                      onClick={() => handleDayClick(dayData)}
                      className={`min-h-[120px] p-2 hover:bg-gray-800/40 transition-all cursor-pointer flex flex-col justify-between border-gray-800/80 group ${
                        isTodayString ? 'bg-green-500/5 ring-1 ring-green-500/50' : ''
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-md ${
                          isTodayString ? 'bg-green-500 text-white' : 'text-gray-400 group-hover:text-white'
                        }`}>
                          {day}日
                        </span>
                        {items.length > 0 && (
                          <span className="text-[10px] bg-gray-800 text-gray-300 font-bold px-1.5 py-0.5 rounded">
                            {items.length} 筆流水
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 mt-4">
                        {inflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>流入:</span>
                            <span>+${inflow.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                          </div>
                        )}
                        {outflow > 0 && (
                          <div className="text-[10px] font-bold font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded flex items-center justify-between">
                            <span>流出:</span>
                            <span>-${outflow.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 日曆詳情 Drawer */}
            {selectedDayDetail && (
              <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
                  <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                    <div>
                      <h3 className="text-md font-bold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-400" />
                        {selectedDayDetail.dayString} 收支交易流水清單
                      </h3>
                      <p className="text-xs text-gray-400">點擊編輯或進行記錄刪除</p>
                    </div>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-6 max-h-[400px] overflow-y-auto space-y-4">
                    {selectedDayDetail.items.length === 0 ? (
                      <div className="py-12 text-center text-gray-500">
                        <p className="text-sm">此日期尚無任何現金流收支記錄。</p>
                      </div>
                    ) : (
                      selectedDayDetail.items.map(t => {
                        const linkedAsset = assets.find(a => a.id === t.assetId)
                        const tCurrency = t.currency || 'USD'
                        const tOriginalAmount = t.originalAmount || t.amount

                        return (
                          <div key={t.id} className="p-4 bg-gray-850 rounded-xl border border-gray-800 flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-bold text-white">{t.description}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1 flex-wrap font-mono">
                                <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-sans font-bold">{t.businessLine}</span>
                                <span className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded">{t.label}</span>
                                <span>發票號: {t.refNumber || '無'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 font-mono">
                              <div className="text-right">
                                <p className={`text-sm font-bold ${t.type === 'incoming' ? 'text-green-400' : 'text-red-400'}`}>
                                  {t.type === 'incoming' ? '+' : '-'}{CURRENCY_SYMBOLS[tCurrency]}{tOriginalAmount.toLocaleString()}
                                </p>
                                {tCurrency !== 'USD' && (
                                  <p className="text-[10px] text-gray-500">折合: ${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD</p>
                                )}
                              </div>
                              <button
                                onClick={() => {
                                  setSelectedDayDetail(null)
                                  startEditTransaction(t)
                                }}
                                className="p-1.5 hover:bg-gray-700 rounded text-gray-300"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteTransaction(t.id)}
                                className="p-1.5 hover:bg-red-950/40 rounded text-red-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>

                  <div className="bg-gray-800 px-6 py-4 flex justify-between items-center border-t border-gray-700">
                    <button
                      onClick={() => {
                        setSelectedDayDetail(null)
                        setShowCalendarAddForm(true)
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      在此日期登錄收支
                    </button>
                    <button
                      onClick={() => setSelectedDayDetail(null)}
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      關閉視圖
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------- 標籤頁: 租賃資產管理 ----------------- */}
        {activeTab === 'assets' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-gray-300 font-mono">租賃資產清冊</h4>
                  <span className="text-xs text-gray-400 font-mono">共計營運 {assets.length} 個項目</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {assets.map(asset => {
                    const netYield = assetNetYields[asset.id] || 0
                    return (
                      <div key={asset.id} className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-5 flex flex-col justify-between hover:border-green-500/30 transition-all group">
                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                              asset.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                            }`}>
                              {asset.status === 'Active' ? '長期穩健收租中' : '閒置或內部整修'}
                            </span>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => startEditAsset(asset)}
                                className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded text-gray-300"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteAsset(asset.id)}
                                className="p-1.5 bg-red-950/20 hover:bg-red-900/40 rounded text-red-400"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-bold text-white">{asset.name}</h5>
                            <p className="text-xs text-gray-400 mt-1 font-mono">
                              資產類別: {
                                asset.type === 'Warehouse' ? '倉庫與地產房產'
                                : asset.type === 'Equipment' ? '重型製版印機具'
                                : asset.type === 'Vehicle' ? '物流配送車輛'
                                : asset.type === 'License' ? '智慧專利設計 IP'
                                : '其他資產類型'
                              }
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-gray-850 space-y-2 text-xs">
                          <div className="flex justify-between text-gray-400">
                            <span>月租定價租金率：</span>
                            <span className="font-mono text-white font-bold">${asset.monthlyRate.toLocaleString()}/月</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>當前綁定承租商：</span>
                            <span className="text-gray-200 font-semibold">{asset.tenant}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>每月基準維護成本：</span>
                            <span className="font-mono text-red-400">${asset.maintenanceCost.toLocaleString()}/月</span>
                          </div>
                          <div className="flex justify-between text-gray-400 pt-2 border-t border-gray-850">
                            <span className="font-semibold">當前累計淨利回籠：</span>
                            <span className={`font-mono font-bold ${netYield >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {netYield >= 0 ? '+' : '-'}${Math.abs(netYield).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 側邊欄資產分析小卡 */}
              <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-4 h-fit">
                <h4 className="text-md font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-green-400" />
                  租賃資產與多幣別運算
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  資產定價一律使用美金基準（USD）計價。若租客繳納港幣（HKD）或人民幣（RMB），您可在快速記帳彈窗中直接選擇對應幣別輸入，系統將按照結轉匯率自動對齊美金月租率。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 標籤頁: P&L 財務分析報表 (分業務板塊損益核算) ----------------- */}
        {activeTab === 'pandl' && (
          <div className="space-y-6">
            <div className="bg-gray-800/40 border border-gray-700/60 rounded-2xl p-6 space-y-6">
              {/* 年代與期間控制 */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-gray-800">
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Business Line selector for P&L */}
                  <div>
                    <label className="block text-xs text-emerald-400 mb-1.5 font-bold flex items-center gap-1">
                      <BriefcaseBusiness className="w-3.5 h-3.5" />
                      獨立核算業務板塊
                    </label>
                    <select
                      value={plBusinessFilter}
                      onChange={(e) => setPlBusinessFilter(e.target.value)}
                      className="bg-gray-900/60 border border-emerald-500/40 rounded-xl px-4 py-2 text-sm text-emerald-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-bold"
                    >
                      <option value="all">📊 集團合算損益表 (Consolidated Base USD)</option>
                      {businessLines.map(b => (
                        <option key={b} value={b}>🏢 {b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-bold">選定財政年度</label>
                    <select
                      value={plYear}
                      onChange={(e) => setPlYear(e.target.value)}
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
                    >
                      <option value="2026">2026年度</option>
                      <option value="2025">2025年度</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-bold">選定季度期間</label>
                    <select
                      value={plQuarter}
                      onChange={(e) => setPlQuarter(e.target.value as any)}
                      className="bg-gray-900/60 border border-gray-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none"
                    >
                      <option value="all">全年 (12 個月總帳)</option>
                      <option value="Q1">第一季度 (Q1: 1月 - 3月)</option>
                      <option value="Q2">第二季度 (Q2: 4月 - 6月)</option>
                      <option value="Q3">第三季度 (Q3: 7月 - 9月)</option>
                      <option value="Q4">第四季度 (Q4: 10月 - 12月)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={exportPLToCSV}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-emerald-500 transition-all flex items-center gap-2 hover:scale-[1.02] self-end"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  匯出選定業務損益 CSV 報表
                </button>
              </div>

              {/* 損益表帳單渲染 */}
              <div className="space-y-8">
                <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
                  <h3 className="text-lg font-bold text-white text-center flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    【{plBusinessFilter === 'all' ? '集團合併核算' : plBusinessFilter}】損益結算表 (Base USD)
                  </h3>
                  <p className="text-xs text-gray-400 font-mono text-center mt-1">
                    所有多幣別交易已按照當前匯率統一換算為 **美金 (USD)** 結轉加總展示
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono text-center mt-0.5">
                    財務期間：{plYear}年度 {plQuarter === 'all' ? '全年度合算' : plQuarter} • 結轉時間：{new Date().toLocaleString()}
                  </p>
                </div>

                {/* 損益明細科目 */}
                <div className="space-y-4 max-w-3xl mx-auto">
                  {/* Revenue */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingUp className="w-4.5 h-4.5 text-green-400" />
                        營業收入總額 (Operating Revenue)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">該業務板塊科目下流入之總金額 (Base USD)</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-green-400">+${plReport.revenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* COGS */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-4.5 h-4.5 text-rose-400" />
                        主營直接成本 (Cost of Goods Sold - COGS)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">分配至該板塊的生產耗用與主幹貨物運輸費 (Base USD)</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.cogs.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Gross Margin */}
                  <div className="p-4 bg-gray-900/60 rounded-xl border border-gray-700/60 flex items-center justify-between border-l-4 border-l-emerald-500">
                    <div>
                      <p className="text-md font-bold text-emerald-400 uppercase tracking-wider">營業毛利額與毛利率</p>
                      <p className="text-xs text-gray-400 mt-1">該業務單元營業淨收入扣除主營直接成本後的原始毛利率表現</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-lg font-bold text-white">${plReport.grossProfit.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                      <p className="text-xs text-emerald-400 font-semibold">毛利率 {plReport.grossMargin.toFixed(1)}%</p>
                    </div>
                  </div>

                  {/* OpEx */}
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-md font-bold text-white flex items-center gap-2">
                        <TrendingDown className="w-4.5 h-4.5 text-rose-400" />
                        營業運營開支費用 (Operating Expenses - OpEx)
                      </p>
                      <p className="text-xs text-gray-400 mt-1">日常辦公耗能、團隊所得與分配至該板塊的維修折舊開支 (Base USD)</p>
                    </div>
                    <span className="font-mono text-lg font-bold text-rose-400">-${plReport.opex.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Net Profit */}
                  <div className="p-5 bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-green-500/30 rounded-xl flex items-center justify-between border-l-4 border-l-green-500">
                    <div>
                      <p className="text-lg font-bold text-green-400 uppercase tracking-wider">板塊最終結轉淨利 (Net Income)</p>
                      <p className="text-xs text-gray-400 mt-1">該業務單元扣除所有營業直接與間接開支後的最終折合美金淨收益。</p>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-xl font-bold text-green-400">${plReport.netProfit.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                      <p className="text-xs text-green-400 font-bold">純利率 {plReport.netMargin.toFixed(1)}%</p>
                    </div>
                  </div>
                </div>

                {/* 科目明細表 */}
                <div className="max-w-3xl mx-auto pt-6 border-t border-gray-800 space-y-4">
                  <h4 className="text-sm font-bold text-gray-300">該選定板塊之各級會計科目累計 (折合 Base USD)</h4>
                  <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/20">
                    <div className="divide-y divide-gray-800/60">
                      {Object.entries(plReport.breakdown).map(([label, amt]) => {
                        const isIncome = ['租金收入', '客製訂單銷售', '資產處置收益', '諮詢規劃收入', '其他現金流入'].includes(label)
                        return (
                          <div key={label} className="px-5 py-3 flex justify-between text-sm">
                            <span className="text-gray-400 font-semibold">{label}</span>
                            <span className={`font-mono font-bold ${isIncome ? 'text-green-400' : 'text-rose-400'}`}>
                              {isIncome ? '+' : '-'}${amt.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ----------------- MODAL: 調整幣別匯率 (NEW FEATURE) ----------------- */}
      {showRateSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-yellow-400" />
                設定基準結轉匯率 (對美金 Base USD)
              </h3>
              <button
                onClick={() => setShowRateSettings(false)}
                className="p-1 bg-gray-700 hover:bg-gray-650 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm">
              <p className="text-xs text-gray-400 leading-relaxed">
                此處匯率用作當您輸入港幣（HKD）或人民幣（RMB）時，系統自動將交易流水的利潤加總轉換為基準美金（USD）財務報表。
              </p>
              
              <div className="space-y-3 bg-gray-950 p-4 rounded-xl border border-gray-850 font-mono">
                {/* USD rate */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-sans">美金匯率基線 (USD)</span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>1 USD =</span>
                    <input
                      type="text"
                      readOnly
                      value="1.0"
                      className="w-20 bg-gray-900 border border-gray-800 rounded px-2.5 py-1 text-center text-gray-500"
                    />
                  </div>
                </div>

                {/* HKD rate */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-sans">港幣匯率對折 (HKD)</span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>1 USD =</span>
                    <input
                      type="number"
                      step="0.001"
                      value={customRates.HKD}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, HKD: Number(e.target.value) || EXCHANGE_RATES.HKD }))}
                      className="w-20 bg-gray-900 border border-gray-700 rounded px-2.5 py-1 text-center text-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                {/* RMB rate */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-sans">人民幣匯率對折 (RMB)</span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span>1 USD =</span>
                    <input
                      type="number"
                      step="0.001"
                      value={customRates.RMB}
                      onChange={(e) => setCustomRates(prev => ({ ...prev, RMB: Number(e.target.value) || EXCHANGE_RATES.RMB }))}
                      className="w-20 bg-gray-900 border border-gray-700 rounded px-2.5 py-1 text-center text-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setCustomRates(EXCHANGE_RATES)
                    toast.success('匯率已重設為系統預設值')
                  }}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  重設預設
                </button>
                <button
                  onClick={() => {
                    setShowRateSettings(false)
                    toast.success('基準折算匯率已更新並保存')
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-4 py-2 rounded-xl text-xs"
                >
                  確認保存匯率
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODAL: 管理自訂業務板塊 ----------------- */}
      {showAddBusiness && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                <BriefcaseBusiness className="w-5 h-5 text-emerald-400" />
                管理自訂業務板塊清單
              </h3>
              <button
                onClick={() => setShowAddBusiness(false)}
                className="p-1 bg-gray-700 hover:bg-gray-655 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-sm">
              <form onSubmit={handleAddBusinessLine} className="space-y-3">
                <label className="block text-xs font-bold text-gray-400">建立新業務板塊標籤</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="例如 咖啡烘焙包裝代工..."
                    value={newBusinessName}
                    onChange={(e) => setNewBusinessName(e.target.value)}
                    className="flex-1 bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    建立
                  </button>
                </div>
              </form>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400">目前可選之業務板塊</label>
                <div className="bg-gray-950 border border-gray-800 rounded-xl p-3 max-h-[220px] overflow-y-auto space-y-1.5">
                  {businessLines.map(b => (
                    <div key={b} className="flex justify-between items-center text-xs py-1 px-2 hover:bg-gray-900 rounded">
                      <span className="text-gray-200 font-semibold">{b}</span>
                      {businessLines.length > 1 && (
                        <button
                          onClick={() => {
                            if (window.confirm(`確認要刪除「${b}」業務標籤嗎？`)) {
                              setBusinessLines(prev => prev.filter(item => item !== b))
                              toast.success('業務板塊標籤已移除')
                            }
                          }}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setShowAddBusiness(false)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- 彈窗: 登錄/修改收支交易流水 ----------------- */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">
                {editingTransactionId ? '修改收支交易明細' : '登錄收支交易 / 發票流水'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false)
                  resetTransactionForm()
                }}
                className="p-1 bg-gray-700 hover:bg-gray-650 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                {/* 交易日期 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">交易日期</label>
                  <input
                    type="date"
                    required
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* 幣別與金額輸入 (NEW MULTI-CURRENCY SUPPORT) */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1.5 flex items-center justify-between">
                    <span>幣別與交易金額</span>
                    <span className="text-[10px] text-yellow-400 font-mono font-bold bg-yellow-500/10 px-2 py-0.5 rounded">
                      基準: USD
                    </span>
                  </label>
                  
                  {/* Premium Segmented Toggle Pills */}
                  <div className="grid grid-cols-3 gap-1 bg-gray-950 p-1 rounded-xl border border-gray-800 mb-2">
                    {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                      const isActive = formCurrency === curr;
                      return (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setFormCurrency(curr)}
                          className={`py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1 ${
                            isActive
                              ? 'bg-yellow-500 text-gray-950 shadow-md scale-[1.02]'
                              : 'text-gray-400 hover:text-gray-205 hover:bg-gray-900'
                          }`}
                        >
                          <span>{curr}</span>
                          <span className="text-[10px] opacity-80">({CURRENCY_SYMBOLS[curr]})</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Amount Input with Large Currency Symbol Prefix */}
                  <div className="relative rounded-xl shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-400 font-mono text-sm font-bold">
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
                      className="w-full bg-gray-950 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-white focus:outline-none focus:border-yellow-500 font-mono font-bold text-lg"
                    />
                  </div>

                  {/* Multi-Currency Live Preview Panel with interactive badges */}
                  {liveConversions && (
                    <div className="mt-2.5 space-y-1.5">
                      <p className="text-[11px] text-gray-400 font-medium">💡 點擊下方卡片可直接按匯率轉換輸入金額：</p>
                      <div className="grid grid-cols-3 gap-2">
                        {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                          const val = liveConversions[curr];
                          const isCurrent = curr === formCurrency;
                          return (
                            <button
                              key={curr}
                              type="button"
                              disabled={isCurrent}
                              onClick={() => {
                                setFormCurrency(curr);
                                setFormAmount(val.toFixed(2));
                                toast.info(`已轉換金額為 ${curr} ${val.toFixed(2)}`);
                              }}
                              className={`border rounded-xl p-2 text-left transition-all font-mono group ${
                                isCurrent
                                  ? 'bg-yellow-500/5 border-yellow-500/30 cursor-default'
                                  : 'bg-gray-950 hover:bg-gray-800 border-gray-800 hover:border-yellow-500/50 cursor-pointer'
                              }`}
                            >
                              <div className={`text-[10px] font-sans ${isCurrent ? 'text-yellow-400 font-bold' : 'text-gray-500 group-hover:text-yellow-400'}`}>
                                {isCurrent ? '目前' : '折合'} {curr}
                              </div>
                              <div className={`text-xs font-bold truncate ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                                {CURRENCY_SYMBOLS[curr]}
                                {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 流向切換 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">交易資金流向</label>
                <div className="grid grid-cols-2 gap-2 bg-gray-950 p-1 rounded-xl border border-gray-800">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'incoming' ? 'bg-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    現金流入 (+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'outgoing' ? 'bg-red-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    現金流出 (-)
                  </button>
                </div>
              </div>

              {/* 業務板塊 */}
              <div>
                <label className="block text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1">
                  <BriefcaseBusiness className="w-3.5 h-3.5" />
                  歸屬業務板塊
                </label>
                <select
                  value={formBusinessLine}
                  onChange={(e) => setFormBusinessLine(e.target.value)}
                  className="w-full bg-gray-950 border border-emerald-500/40 text-emerald-300 rounded-xl px-3 py-2 font-bold focus:outline-none"
                >
                  {businessLines.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* 科目別 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">收支會計科目類別</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  {formType === 'incoming' ? (
                    <>
                      <option value="租金收入">租金收入 (租賃租費)</option>
                      <option value="客製訂單銷售">客製訂單銷售</option>
                      <option value="資產處置收益">資產處置收益</option>
                      <option value="諮詢規劃收入">諮詢規劃收入</option>
                      <option value="其他現金流入">其他現金流入</option>
                    </>
                  ) : (
                    <>
                      <option value="資產日常維護">資產日常維護 (修繕)</option>
                      <option value="辦公水電網費">辦公水電網費 (耗能)</option>
                      <option value="員工薪資發放">員工薪資發放 (薪酬)</option>
                      <option value="原材料採購支出">原材料採購支出</option>
                      <option value="物流貨運支出">物流貨運支出 (物流開銷)</option>
                      <option value="企業稅收繳納">企業稅收繳納</option>
                      <option value="其他現金流出">其他日常與行政流出</option>
                    </>
                  )}
                </select>
              </div>

              {/* 關聯租賃資產 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">關聯租賃資產 (選填)</label>
                <select
                  value={formAssetId}
                  onChange={(e) => setFormAssetId(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="">獨立交易（不與特定租賃資產綁定）</option>
                  {assets.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              {/* 描述/備註 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">收支流水描述與備註說明</label>
                <input
                  type="text"
                  required
                  placeholder="例如 華東 A 倉庫月度租金回籠款"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* 參考編號 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">發票參考編號 (選填)</label>
                  <input
                    type="text"
                    placeholder="例如 INV-9981"
                    value={formRefNumber}
                    onChange={(e) => setFormRefNumber(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* 支付方式 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">支付/交易渠道</label>
                  <select
                    value={formPaymentMethod}
                    onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="銀行轉帳">銀行轉帳</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Stripe">Stripe</option>
                    <option value="信用卡">信用卡</option>
                    <option value="現金支付">現金支付</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false)
                    resetTransactionForm()
                  }}
                  className="bg-gray-800 text-gray-400 hover:bg-gray-750 px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  {editingTransactionId ? '保存流水修改' : '確認登錄收支'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- 彈窗: 日曆快捷記帳 ----------------- */}
      {showCalendarAddForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">登錄在 {formDate} 的快捷收支流水</h3>
              <button
                onClick={() => {
                  setShowCalendarAddForm(false)
                  resetTransactionForm()
                }}
                className="p-1 bg-gray-700 hover:bg-gray-655 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveTransaction} className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                {/* 交易日期 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">交易日期</label>
                  <input
                    type="date"
                    required
                    readOnly
                    value={formDate}
                    className="w-full bg-gray-950 border border-gray-800 text-gray-500 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* 幣別與金額輸入 */}
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1.5 flex items-center justify-between">
                    <span>幣別與交易金額</span>
                    <span className="text-[10px] text-yellow-400 font-mono font-bold bg-yellow-500/10 px-2 py-0.5 rounded">
                      基準: USD
                    </span>
                  </label>
                  
                  {/* Premium Segmented Toggle Pills */}
                  <div className="grid grid-cols-3 gap-1 bg-gray-950 p-1 rounded-xl border border-gray-800 mb-2">
                    {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                      const isActive = formCurrency === curr;
                      return (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setFormCurrency(curr)}
                          className={`py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center justify-center gap-1 ${
                            isActive
                              ? 'bg-yellow-500 text-gray-950 shadow-md scale-[1.02]'
                              : 'text-gray-400 hover:text-gray-205 hover:bg-gray-900'
                          }`}
                        >
                          <span>{curr}</span>
                          <span className="text-[10px] opacity-80">({CURRENCY_SYMBOLS[curr]})</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Amount Input with Large Currency Symbol Prefix */}
                  <div className="relative rounded-xl shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-400 font-mono text-sm font-bold">
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
                      className="w-full bg-gray-950 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-white focus:outline-none focus:border-yellow-500 font-mono font-bold text-lg"
                    />
                  </div>

                  {/* Multi-Currency Live Preview Panel with interactive badges */}
                  {liveConversions && (
                    <div className="mt-2.5 space-y-1.5">
                      <p className="text-[11px] text-gray-400 font-medium">💡 點擊下方卡片可直接按匯率轉換輸入金額：</p>
                      <div className="grid grid-cols-3 gap-2">
                        {(['USD', 'HKD', 'RMB'] as CurrencyType[]).map((curr) => {
                          const val = liveConversions[curr];
                          const isCurrent = curr === formCurrency;
                          return (
                            <button
                              key={curr}
                              type="button"
                              disabled={isCurrent}
                              onClick={() => {
                                setFormCurrency(curr);
                                setFormAmount(val.toFixed(2));
                                toast.info(`已轉換金額為 ${curr} ${val.toFixed(2)}`);
                              }}
                              className={`border rounded-xl p-2 text-left transition-all font-mono group ${
                                isCurrent
                                  ? 'bg-yellow-500/5 border-yellow-500/30 cursor-default'
                                  : 'bg-gray-950 hover:bg-gray-800 border-gray-800 hover:border-yellow-500/50 cursor-pointer'
                              }`}
                            >
                              <div className={`text-[10px] font-sans ${isCurrent ? 'text-yellow-400 font-bold' : 'text-gray-500 group-hover:text-yellow-400'}`}>
                                {isCurrent ? '目前' : '折合'} {curr}
                              </div>
                              <div className={`text-xs font-bold truncate ${isCurrent ? 'text-white' : 'text-gray-300'}`}>
                                {CURRENCY_SYMBOLS[curr]}
                                {val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 流向切換 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">資金收支流向</label>
                <div className="grid grid-cols-2 gap-2 bg-gray-950 p-1 rounded-xl border border-gray-800">
                  <button
                    type="button"
                    onClick={() => setFormType('incoming')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'incoming' ? 'bg-green-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    現金流入 (+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('outgoing')}
                    className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                      formType === 'outgoing' ? 'bg-red-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    現金流出 (-)
                  </button>
                </div>
              </div>

              {/* 業務板塊 */}
              <div>
                <label className="block text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1">
                  <BriefcaseBusiness className="w-3.5 h-3.5" />
                  歸屬業務板塊
                </label>
                <select
                  value={formBusinessLine}
                  onChange={(e) => setFormBusinessLine(e.target.value)}
                  className="w-full bg-gray-950 border border-emerald-500/40 text-emerald-300 rounded-xl px-3 py-2 font-bold focus:outline-none"
                >
                  {businessLines.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* 科目別 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">會計科目科目類別</label>
                <select
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value as TransactionLabel)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  {formType === 'incoming' ? (
                    <>
                      <option value="租金收入">租金收入 (租賃所得)</option>
                      <option value="客製訂單銷售">客製訂單銷售</option>
                      <option value="資產處置收益">資產處置收益</option>
                      <option value="諮詢規劃收入">諮詢規劃收入</option>
                      <option value="其他現金流入">其他現金流入</option>
                    </>
                  ) : (
                    <>
                      <option value="資產日常維護">資產日常維護 (折舊修繕)</option>
                      <option value="辦公水電網費">辦公水電網費</option>
                      <option value="員工薪資發放">員工薪資發放 (工資薪酬)</option>
                      <option value="原材料採購支出">原材料採購支出</option>
                      <option value="物流貨運支出">物流貨運支出</option>
                      <option value="企業稅收繳納">企業稅收繳納</option>
                      <option value="其他現金流出">其他運營流出開支</option>
                    </>
                  )}
                </select>
              </div>

              {/* 關聯租賃資產 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">關聯租賃資產 (選填)</label>
                <select
                  value={formAssetId}
                  onChange={(e) => setFormAssetId(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                >
                  <option value="">獨立交易（不與特定租賃資產綁定）</option>
                  {assets.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              {/* 描述/備註 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">描述與流水備註說明</label>
                <input
                  type="text"
                  required
                  placeholder="例如 華東 A 倉庫租金回籠"
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* 參考號 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">參考發票 ID (選填)</label>
                  <input
                    type="text"
                    placeholder="例如 INV-9981"
                    value={formRefNumber}
                    onChange={(e) => setFormRefNumber(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-750 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* 支付管道 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">交易管道</label>
                  <select
                    value={formPaymentMethod}
                    onChange={(e) => setFormPaymentMethod(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="銀行轉帳">銀行轉帳</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Stripe">Stripe</option>
                    <option value="信用卡">信用卡</option>
                    <option value="現金支付">現金支付</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCalendarAddForm(false)
                    resetTransactionForm()
                  }}
                  className="bg-gray-800 text-gray-400 hover:bg-gray-750 px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  確認登錄收支
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- 彈窗: 新增/編輯租賃資產 ----------------- */}
      {showAssetForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-150">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <h3 className="text-md font-bold text-white">
                {editingAssetId ? '修改固定/租賃資產基本資料' : '新增租賃資產登記項目'}
              </h3>
              <button
                onClick={() => {
                  setShowAssetForm(false)
                  resetAssetForm()
                }}
                className="p-1 bg-gray-700 hover:bg-gray-655 rounded-lg text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveAsset} className="p-6 space-y-4 text-sm">
              {/* 名稱 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">租賃資產名稱項目標題</label>
                <input
                  type="text"
                  required
                  placeholder="例如 華東 A 區中央聯運倉庫"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* 類別 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">資產科目細分類</label>
                  <select
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Warehouse">倉庫房產 (廠房/庫存)</option>
                    <option value="Equipment">重型機具 (凹印刷/吹膜機)</option>
                    <option value="Vehicle">物流車輛 (堆高機/配送卡車)</option>
                    <option value="License">數位智慧權 (專利/商標授權)</option>
                    <option value="Other">其他特許資產別</option>
                  </select>
                </div>

                {/* 租金定價 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">約定月租定價 (USD)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    placeholder="例如 4500"
                    value={assetRate}
                    onChange={(e) => setAssetRate(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* 租戶 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">目前綁定承租客戶名稱</label>
                  <input
                    type="text"
                    placeholder="例如 順豐速運集團 (空置則免填)"
                    value={assetTenant}
                    onChange={(e) => setAssetTenant(e.target.value)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  />
                </div>

                {/* 狀態 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">當前營運狀態</label>
                  <select
                    value={assetStatus}
                    onChange={(e) => setAssetStatus(e.target.value as any)}
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none"
                  >
                    <option value="Active">營運中 (正常履行合約)</option>
                    <option value="Idle">閒置中 (正在修繕/空置招租)</option>
                  </select>
                </div>
              </div>

              {/* 維護成本 */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">每月基準固定維護成本 (每月基準額 USD)</label>
                <input
                  type="number"
                  min="0"
                  placeholder="例如 150"
                  value={assetMaintenanceCost}
                  onChange={(e) => setAssetMaintenanceCost(e.target.value)}
                  className="w-full bg-gray-950 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none font-mono"
                />
              </div>

              <div className="pt-4 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAssetForm(false)
                    resetAssetForm()
                  }}
                  className="bg-gray-800 text-gray-400 hover:bg-gray-750 px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold"
                >
                  {editingAssetId ? '保存修改資產資料' : '儲存建立資產登記'}
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
